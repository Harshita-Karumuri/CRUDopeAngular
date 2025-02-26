import { Component } from '@angular/core';
import { SongService } from '../song.service';
import { Route, Router } from '@angular/router';
import { Song } from '../song';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.component.html',
  styleUrls: ['./create2.component.css']
})
export class Create2Component {
 constructor(private songService:SongService, private router:Router){}
 formdata:Song={
  id:0,
  title:'',
  artist:'',
  album:''
 }
 create(){
  this.songService.creat(this.formdata).subscribe({
    next:(data)=>{
       this.router.navigate(["/song/home"])
    },
    error: (er) => {
      console.log(er)
      
      
    }
  })
 }
}
