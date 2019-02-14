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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {   
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
  // This method associate to New Button.
  onNew() 
  {
  // Initiate new registration.
  this.regModel = new Registration();
  // Change submitType to 'Save'.
  this.submitType = 'Save';
  // display registration entry section.
  this.showNew = true;
  }
  // This method associate to Save Button.
onSave() {
  if (this.submitType === 'Save') {
  // Push registration model object into registration list.
  this.registrations.push(this.regModel);
  localStorage.setItem( 'ds',JSON.stringify(this.registrations));
  } else {
  // Update the existing properties values based on model.
  this.registrations[this.selectedRow].Name = this.regModel.Name;
  this.registrations[this.selectedRow].department = this.regModel.department;
  this.registrations[this.selectedRow].dob = this.regModel.dob;
  this.registrations[this.selectedRow].doj = this.regModel.doj;
  this.registrations[this.selectedRow].Id = this.regModel.Id;
  localStorage.setItem( 'ds',JSON.stringify(this.registrations));
  }
  // Hide registration entry section.
  this.showNew = false;
  }
  // This method associate to Edit Button.
  onEdit(index: number) {
  // Assign selected table row index.
  this.selectedRow = index;
  // Initiate new registration.
  this.regModel = new Registration();
  // Retrieve selected registration from list and assign to model.
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  // Change submitType to Update.
  this.submitType = 'Update';
  // Display registration entry section.
  this.showNew = true;
  }
  // This method associate to Delete Button.
  onDelete(index: number) {
  // Delete the corresponding registration entry from the list.
  this.registrations.splice(index, 1);
  localStorage.setItem( 'ds',JSON.stringify(this.registrations));
  }
  // This method associate to Cancel Button.
  onCancel() {
  // Hide registration entry section.
  this.showNew = false;
  }
  onflush(){
    localStorage.removeItem('ds')
    window.location.reload();
  }
       
}
      
      

  


