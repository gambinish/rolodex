import { Component } from '@angular/core'
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {


  title: string = 'Contact Page';
  formData: {
    name: string,
    email: string
  } = {
      name: '',
      email: ''
    }

  validName: boolean = false;
  validEmail: boolean = false;

  constructor() {
  }


  // FORM VALIDATION
  validateName() {
    console.log('validate')
    if (!this.formData.name) {
      this.validName = false;
    }
    else if (this.formData.name.length < 3) {
      this.validName = false;
    }
    else {
      this.validName = true;
    }
  }

  validateEmail() {
    if (!this.formData.email) {
      this.validEmail = false;
    }
    else if (!this.formData.email.includes('@')) {
      this.validEmail = false;
    }
    else if (this.formData.email.length < 3) {
      this.validEmail = false;
    }
    else {
      this.validEmail = true;
    }
  }

  isDisabled() {
    return !this.validName || !this.validEmail;
  }

  submit() {
    console.log(this.formData)
  }
}

