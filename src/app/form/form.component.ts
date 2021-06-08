import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.data.name),
      email: new FormControl(this.data.email),
    });
  }

  ngOnChanges(changes?: any) {

   const { data } = changes;
   if(this.myForm){
      this.myForm.patchValue({...data.currentValue})
   }
 
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
  }

}
