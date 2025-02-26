import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Song[]>('http://localhost:3000/music')
  }

  creat(data:Song){
    return this.httpClient.post('http://localhost:3000/music', data);
  }

  edit(id:number){
    return this.httpClient.get<Song>(`http://localhost:3000/music/${id}`);
  }
  update(data:Song){
    return this.httpClient.put<Song>(`http://localhost:3000/music/${data.id}`,data)
  }
  delete(id:number){
    return this.httpClient.delete<Song>(`http://localhost:3000/music/${id}`);
  }
}
