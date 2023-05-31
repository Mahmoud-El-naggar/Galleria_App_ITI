import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';



@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styles: [
  ]
})
export class UsersHomeComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: any;
  Users: any;
  UserToUpdate: any;
  UserToDelete: any;
  Username: any;
  Useremail: any;
  Userphone: any;
  Userstreet: any;
  Usersuite: any;
  Usercity: any;
  
  constructor(private service: MyServiceService) {
    this.reset();
  }

  //Get Users Data From Json placeholder  API
  ngOnInit(): void {
    this.service.GetAllUsers().subscribe(
      {
        next: (users) => { this.Users = users; },
        error: (error) => { console.log("oninit Error:" + error) }

      }
    )
  }

  //Validate That all Data have values and correct Format then Take action Add or Update
  Validate(_name: any, _email: any, _phone: any, _street: any, _suite: any, _city: any) {
    if (this.checkMailFormat(_email) && _name && _street && _suite && _city) {
      if (this.UserToUpdate) {
        this.UpdateUser(_name, _email, _phone, _street, _suite, _city);
      }
      else {
        this.Add(_name, _email, _phone, _street, _suite, _city)
      }
      
      this.closeBtn.nativeElement.click();
    }
    else{
      alert("Invalid Data, Please Enter Valid Data");
    }
  }

  //Add User
  Add(_name: any, _email: any, _phone: any, _street: any, _suite: any, _city: any) {
    let userToAdd = { name: _name, email: _email, phone: _phone, address: { street: _street, suite: _suite, city: _city } }
    this.Users.push(userToAdd);
    this.reset();
    alert("Added Successfully");

  }

  //Update Selected User
  UpdateUser(_name: any, _email: any, _phone: any, _street: any, _suite: any, _city: any) {
    let index = this.Users.indexOf(this.UserToUpdate)
    this.Users[index] = { name: _name, email: _email, phone: _phone, address: { street: _street, suite: _suite, city: _city } }
    this.UserToUpdate = null;
    alert("Updated Successfully");
  }

  //Delete Selected User
  DeleteUser() {
    let index = this.Users.indexOf(this.UserToDelete);
    this.Users.splice(index, 1);
    this.UserToDelete = null;
  }

  //Validate Format for Mail
  checkMailFormat(email: any) {
    let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return email.match(emailRegx)
  }

  //Specify Which user to update
  SelectedUpdate(user: any) {
    this.UserToUpdate = user;
    this.fillInputs();
  }

  //specify which user to delete
  SelectedDelete(user: any) {
    this.UserToDelete = user;
  }

  //reset inputs and selected users
  reset() {
    this.Username = "";
    this.Useremail = "";
    this.Userphone = "";
    this.Userstreet = "";
    this.Usersuite = "";
    this.Usercity = "";
    this.UserToUpdate = null;
    this.UserToDelete = null;
  }

  //if user selected fill the user info modal with user data
  fillInputs() {
    if (this.UserToUpdate) {
      this.Username = this.UserToUpdate.name;
      this.Useremail = this.UserToUpdate.email;
      this.Userphone = this.UserToUpdate.phone;
      this.Userstreet = this.UserToUpdate.address.street;
      this.Usersuite = this.UserToUpdate.address.suite;
      this.Usercity = this.UserToUpdate.address.city;
    }
  }
}
