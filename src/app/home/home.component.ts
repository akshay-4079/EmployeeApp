import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
class Registration {
  constructor(
  public Name: string = '',
  public department: string = '',
  public dob: NgbDateStruct = null,
  public doj: NgbDateStruct = null,
  public Id: number = null,
  public Image:string=''
  
  ){}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   // It maintains list of Registrations
   registrations: Registration[] = [];
   // It maintains registration Model
   regModel: Registration;
   // It maintains registration form display status. By default it will be false.
   showNew: Boolean = false;
   // It will be either 'Save' or 'Update' based on operation.
   submitType: string = 'Save';
   // It maintains table row index based on selection.
   selectedRow: number;


  constructor() {        this.registrations.push(new Registration('Akshay', 'IT', {year: 1996, month: 11, day: 12}, {year: 2016, month: 11, day: 27}, 12345,'https://avatarfiles.alphacoders.com/716/71684.jpg'));
  this.registrations.push(new Registration('Akshay', 'Analyst', {year: 1996, month: 11, day: 12}, {year: 2017, month: 11, day: 27}, 12345,'http://profilepicturesdp.com/wp-content/uploads/2018/06/cool-game-profile-pictures-1.jpg'));
  this.registrations.push(new Registration('Akshay', 'HR', {year: 1996, month: 11, day: 12}, {year: 2019, month: 11, day: 27}, 12345,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14bz5BeWMiJpb1CnjCzR12oOaad17dHc5wOxJVQNrSWUrlx-a')); }
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('ds'));
   if(user)
   {
     this.registrations=user;
  }
  }
}
