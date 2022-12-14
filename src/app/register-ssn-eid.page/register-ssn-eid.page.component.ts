import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
const pageContent = {
  "welcomeText": {
    "welcome": "Welcome! To start the registration process, please provide your identification information."
  },
  "button": {
    "continue": "Continue"
  },
  "dropdown": {
    "selectOption": "Select an Option",
    "ssnPin": "Social Security Number + PIN",
    "empIdPin": "Employee ID + PIN"
  },
  "label": {
    "ssn": "Social Security Number",
    "empid": "Employee ID",
    "pin": "PIN"
  },
  "placeholder": {
    "ssn": "Social Security Number",
    "empid": "Employee ID",
    "pin": "PIN"
  },
  "link": {
    "findMyPin": "Where do I find my PIN?",
    "requestNewPin": "Request a new PIN",
    "needHelp": "Need help?"
  },
  "validatorMessage": {
    "identification": {
      "required": "Identification type is required."
    },
    "empId": {
      "required": "Employee ID is required."
    },
    "ssn": {
      "required": "Social Security Number is required.",
      "shouldBeNineDigit": "Social Security Number must be in the format XXX-XX-XXXX."
    },
    "pin": {
      "required": "PIN is required."
    }
  }
}

@Component({
  selector: 'app-register-ssn-eid.page',
  templateUrl: './register-ssn-eid.page.component.html',
  styleUrls: ['./register-ssn-eid.page.component.scss'],
})
export class RegisterSsnEid {

  actionOption = {
    headername: 'Registration',
    btnright: true,
    buttonRight: {
      name: 'Cancel',
      link: '/login'
    }
  };

  pageText: any = pageContent
  ssn = false;
  eid = false;
  link = false;
  eidChange = false;
  pinChange = false;
  dropDownVal = '';
  usertype = '';
  myKey = '';
  pinNumber = '';
  employeeId = '';
  pinNumberNull = true;
  submitted = false;
  pinNumberEmptyTab = false;
  empLabel = false;
  pinLabel = false;
  ssnStatus = false;
  targetSSNValue: string;
  // private registerFormData: RegisterFormData;

  constructor(
    private router: Router,
    public fb: FormBuilder,
  ) { }
  registerForm = this.fb.group({
    usertype: new FormControl('', [Validators.required]),
    employeeId: new FormControl('', [Validators.required]),
    pinNumber: new FormControl('', [Validators.required])
  });

  get registerFormControl() {
    return this.registerForm.controls;
  }

  ReceiveSSN(event) {
    this.ssnStatus = event.status;
    this.targetSSNValue = event.value;
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };
  inputClick(str: string) {
    if (str === 'employeeId') {
      this.empLabel = true;
      this.pageText.placeholder.empid = '';
    } else if (str === 'pinNumber') {
      this.pinLabel = true;
      this.pageText.placeholder.pin = '';
    }
  }
  getSSN() {
    return this.ssn;
  }
  focusOutFunction(str) {
    this.tabClicked(str);
    if (str === 'employeeId' && this.employeeId === '') {
      this.empLabel = false;
      this.pageText.placeholder.empid = 'Employee ID';
    } else if (str === 'pinNumber' && this.pinNumber === '') {
      this.pinLabel = false;
      this.pageText.placeholder.pin = 'PIN';
    }
  }
  requestPin() {
    this.router.navigateByUrl('/login/register-ssn-eid/request-new-pin');
  }
  registrationType(str) {
    const eventVal = str.target.value;
    this.pinLabel = false;
    this.empLabel = false;
    this.pinNumber = '';
    this.pageText.placeholder.pin = 'PIN';
    if (eventVal === 'SSN') {
      this.dropDownVal = eventVal;
      this.ssn = true;
      this.eid = false;
      this.link = true;
      this.eidChange = false;
      this.pinChange = false;
    } else if (eventVal === 'EID') {
      this.dropDownVal = eventVal;
      this.ssn = false;
      this.eid = true;
      this.link = true;
      this.eidChange = false;
      this.pinChange = false;
      this.employeeId = '';
      this.pageText.placeholder.empid = 'Employee ID';
    } else {
      this.pinNumberEmptyTab = false;
      this.dropDownVal = '';
      this.ssn = false;
      this.eid = false;
      this.link = false;
    }
  }

  tabClicked(str: string) {
    this.submitted = true;
    if (str === 'employeeId') {
      this.eidChange = true;
    } else if (str === 'pinNumber') {
      this.pinChange = true;
    }
    this.handleError(str, 'required');
  }

  async onRegisterDevide() {
    this.submitted = true;
    this.eidChange = true;
    this.pinChange = true;
    let valid = false;
    let userId = '';
    if (this.dropDownVal === 'SSN' && this.ssnStatus && this.pinNumber) {
      userId = this.targetSSNValue;
      valid = true;
    } else if (
      this.dropDownVal === 'EID' &&
      this.employeeId &&
      this.pinNumber
    ) {
      userId = this.employeeId;
      valid = true;
    }
    if (valid) {
      // this.registerFormData = {
      //   identityType: this.dropDownVal,
      //   employeeId: this.employeeId,
      //   ssnNumber: userId,
      //   pin: this.pinNumber
      // };
      // if (this.registerFormData) {
      //   const requestSSNClient = {
      //     participantId: this.registerFormData.ssnNumber,
      //     useridtype: this.registerFormData.identityType,
      //     pin: this.registerFormData.pin,
      //     amazonMarketApp: false,
      //     clientid: null
      //   };
        localStorage.setItem('registratedusername', 'U' + userId)

      //}
    }
  }

  routeToPage(str: string) {
    this.router.navigateByUrl(str);
  }
  needHelp() {

  }

  ionViewWillEnter() {
    this.pinNumber = '';
    this.employeeId = '';
    this.usertype = '';
    this.submitted = false;
  }
}
