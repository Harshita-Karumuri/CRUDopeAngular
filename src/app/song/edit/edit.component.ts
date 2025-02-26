import { Component , OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
constructor(
  private songService:SongService,
  private router:Router,
  private route:ActivatedRoute
){}

formdata:Song={
  id:0,
  title:'',
  artist:'',
  album:''
}


ngOnInit(): void {
  this.route.paramMap.subscribe((param)=>{
    let id=Number(param.get('id'))
     this.getById(id)
  })
}
getById(id:number){
  this.songService.edit(id).subscribe((data)=>{
  this.formdata=data;
  })
}
update(){
  this.songService.update(this.formdata).subscribe({
    next:(data)=>{
       this.router.navigate(["/song/home"])
    },
    error: (er) => {
      console.log(er);
      
      
    }
  })
}
}
