import { Component } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';

SongService


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  allsongs: Song[]=[];
  constructor(private songService:SongService){}

  ngOnInit():void{
    this.songService.getAll().subscribe((data)=>{
    this.allsongs=data;
    })
  }
  deleteItem(id:number){
    this.songService.delete(id).subscribe({
      next: (data)=>{
        this.allsongs=this.allsongs.filter(_ => _.id ! = id)
      },
    })
  }
}
