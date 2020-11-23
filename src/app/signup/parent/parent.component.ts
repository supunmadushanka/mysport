import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'
import { RegistrationService } from '../../registration.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private fbParent:FormBuilder,private _registrationService:RegistrationService) { }

  get firstNameParent(){
    return this.parentRegistration.get('firstNameParent');
  }
  get secondNameParent(){
    return this.parentRegistration.get('secondNameParent');
  }
  get teleNoParent(){
    return this.parentRegistration.get('teleNoParent');
  }

  ngOnInit(): void {
  }

  parentRegistration=this.fbParent.group({
    firstNameParent:['',[Validators.required,Validators.minLength(3)]],
    secondNameParent:['',[Validators.required,Validators.minLength(3)]],
    parentSelect:['',[Validators.required]],
    AddressParent:['',[Validators.required]],
    teleNoParent:['',[Validators.required,Validators.pattern('(07)[0-9]{8}')]]
  })

  parentSubmit(){
    console.log(this.parentRegistration.value);

    this._registrationService.parentregister(this.parentRegistration.value)
      .subscribe(
        response=> console.log('success',response),
        error => console.error('Error!', error)  
      );
  }

}
