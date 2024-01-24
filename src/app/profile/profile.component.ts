import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  form!:FormGroup;
  constructor(private _fb : FormBuilder){
    this.form =  this.createForm()
    this.addSkillRow()
  }

  createForm(){
    return this._fb.group({
      firstName : ['', Validators.required],
      lastName : [''],
      dob : ['', Validators.required],
      gender : ['', Validators.required],
      nationality : ['', Validators.required],
      address : ['', Validators.required],
      city : ['', Validators.required],
      state : [''],
      ZIPCode : [''],
      skills : this._fb.array([]),
      educational : this._fb.array([]),
    })
  }
 // form array for dropoffLocation 
 get skills(): FormArray {
  return this.form.get("skills") as FormArray;
}
  addSkillRow(){
    this.skills.push(this._fb.group({
      skillName : ['', Validators.required]
    }));
  }

  remove(i){
    this.skills.removeAt(i)
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }else{
      console.log("this is your form", this.form);
    }


  }
 


}
