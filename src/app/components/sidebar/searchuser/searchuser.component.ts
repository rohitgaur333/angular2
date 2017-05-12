import { Component } from '@angular/core';
import {UserService} from '../../../services/user/user.service';


@Component({
 moduleId: module.id,
  selector: 'searchuser',
  templateUrl:'./searchuser.component.html',
  styleUrls:['./searchuser.component.css'],
  providers:[UserService],
})
export class SearchComponent  { 
    inputText: string ="";
    students: string[]=[];
    fname: string;
    lname:string;
    message:boolean;
    
    constructor(private userService : UserService){
        this.inputText="";
        this.message=false;
    }

    findStudent(searchbox: string){
        this.students=[];
        this.userService.getStudents().subscribe(students => {
        //this.students = students; 
        });
    }
    
    searchMember(){
        this.students=[];
        this.message=false;
        console.log(this.fname);
        this.students=[];
        this.userService.searchStudents(this.fname).subscribe(students => {
        this.students = students; 
       
         if(this.students.length == 0){
            this.message=true;
        }
        
    });
    } 
    
    }




