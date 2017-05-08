import { Component } from '@angular/core';
import {PostService} from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  { 
  name : string; 
  email : string;
  address: address;
  hobbies: string[];
  showHobbies:boolean;
  posts:Post[];


    constructor(private postService: PostService){
    this.name = 'Angular'; 
    this.email = 'rohit@tcs.com';
    this.address = {
        street: "sara",
        city: "modinagar",
        state: "up"
        }
    this.hobbies = ['Music','Movies','Cricket'];
    this.showHobbies = false;

    this.postService.getPosts().subscribe(posts => {
        this.posts = posts; 
        
    });
    }
toggleHobbies(){
this.showHobbies=!this.showHobbies;    
}
addHobby(hobby: string){
    if(!(hobby==""))
    this.hobbies.push(hobby);
}
deleteHobby(i: number){
    this.hobbies.splice(i,1);
}

}
interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id:number;
    title: string;
    body: string;

}