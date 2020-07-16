import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

  static getValidatorErrorMessage(
    validatorName: string,
    validatorValue?: any,
    fieldControl?: any,
    patternMessage?: any
  ) {
    let config;
    const isSelect = fieldControl.includes(', select');
    if (
      fieldControl === 'Pincode' ||
      fieldControl === 'Aadhaar Number' ||
      fieldControl === 'Mobile Number' ||
      fieldControl === 'Land Line Number' ||
      fieldControl === 'Landline Number' ||
      fieldControl === 'Official Website of Employer'
    ) {
      config = {
        required: `${fieldControl}  is required`,
        minlength: `${fieldControl} should be ${
          validatorValue.requiredLength
          } digits`,
        pattern: `Please Enter Valid Data for ${fieldControl}`,
        maxlength: `${fieldControl} maximum length should be ${
          validatorValue.requiredLength
          } digits`,
        invalidName: `Please Enter Valid ${fieldControl}`,
        invalidPercentage: 'Please enter valid percentage',
        min: `${fieldControl} should not be lessthan ${
          validatorValue.max
          } `
      };
    } else if (isSelect) {
      const x = fieldControl.split(' ');
      const modifiedFormControl = x.slice(0, x.length - 2).join(' ');
      config = {
        required: `Please select ${modifiedFormControl}`
      }

    } else if (patternMessage === undefined) {
      config = {
        fileSelectedNotUploaded: `Please Upload File`,
        fileUploaded: `Please Upload File`,
        alphaNumeric: `${fieldControl} should be alphanumeric`,
        // alphaNumeric: `${fieldControl} should be alphanumeric (should contain character and digit both)`,
        required: (() => fieldControl ? `${fieldControl}  is required` : 'required')(),
        aadhar: validatorValue,
        aadharChecksum: `Enter Valid Aadhaar Number`,
        invalidEmailAddress: 'Enter Valid Email Address',
        invalidMobileNumber: `Mobile number is not valid. Enter valid Number`,
        invalidPassword:
          'Invalid password. Password must contain one uppercase, one lowercase, one number and one special character.',
        minlength: `${fieldControl} must be atleast ${
          validatorValue.requiredLength
          } characters`,
        pattern: `Please Enter Valid Data for ${fieldControl}`,
        maxlength: `${fieldControl} maximum length should be ${
          validatorValue.requiredLength
          } characters`,
        minimumDate: `invalid date`,
        minimumEndDateThenAlowed: `Date should be ${validatorValue} or more`,
        maximumEndDateThenAlowed: `Date should be ${validatorValue} or less`,
        invalidName: `Please Enter Valid ${fieldControl}`,
        atLeastChecked: `Please select atleast ${validatorValue}`,
        allCheckboxRequired: `Please select all`,
        durationMismatch: `Invalid Duration`,
        durationMoreThanAllowed: `Duration should be less than ${validatorValue.maxYearTenure} Years`,
        durationLessThanMandatory: `Duration should be more than ${validatorValue.minYearTenure} Year`,
        // minStartThenAlowed: `Start Date should be after ${Helpers.toCalendarDate(validatorValue.minDate)}`,
        // maxEndThenAlowed: `End Date should be less than or equal to ${Helpers.toCalendarDate(validatorValue.maxDate)}`,
        // maxStartDateThenAlowed: `Start Date should be before ${Helpers.toCalendarDate(validatorValue.maxStartDate)}`,
        // minEndDateThenAlowed: `End Date should after ${Helpers.toCalendarDate(validatorValue.minEndDate)}`,
        invalidPercentage: 'Please enter valid percentage',
        max: `${fieldControl} should not be more than ${
          validatorValue.max
          } `,
        min: `${fieldControl} should not be less than ${
          validatorValue.min
          } `,
        invalidDate: (() => {
          const minDate = validatorValue.minDate;
          const maxDate = validatorValue.maxDate;
          // if (minDate) {
          //   return `${fieldControl} should be after ${Helpers.toCalendarDate(minDate)}`;
          // } else if (maxDate) {
          //   return `${fieldControl} should be before ${Helpers.toCalendarDate(maxDate)}`;
          // }
        })(),
        maxAllowedFiles: `Number of Files in ${fieldControl} can't be more then ${validatorValue.max}`,
        minAllowedFiles: `Number of Files in ${fieldControl} can't be less then ${validatorValue.min}`,
        invalidAmount: `Please enter valid ${fieldControl}`,
      };
    } else {
      config = {
        alphaNumeric: `${fieldControl} should be alphanumeric (should contain character and digit both)`,
        required: `${fieldControl}  is required`,
        invalidEmailAddress: 'Invalid email address',
        invalidMobileNumber: `Mobile number is not valid. Enter valid Number`,
        invalidPassword:
          'Invalid password. Password must contain one upparcase, one lowercase, one number and one Special character.',
        minlength: `${fieldControl} must be atleast ${
          validatorValue.requiredLength
          } characters`,
        pattern: `${patternMessage}`,
        maxlength: `${fieldControl} maximum length should be ${
          validatorValue.requiredLength
          } characters`,
        minimumDate: `invalid date`,
        minimumEndDateThenAlowed: `Date should start ${validatorValue} or more`,
        invalidName: `Please Enter Valid ${fieldControl}`,
        atLeastChecked: `Please select atleast ${validatorValue}`,
        allCheckboxRequired: `Please select all`,
        invalidPercentage: 'Please enter valid percentage',
        MatchPassword: 'password does not match',
        max: `${fieldControl} should not be more than ${
          validatorValue.max
          } `,
        min: `${fieldControl} should not be less than ${
          validatorValue.min
          } `,
        maxAllowedFiles: `Number of Files in ${fieldControl} can't be more then ${validatorValue.max}`,
        minAllowedFiles: `Number of Files in ${fieldControl} can't be less then ${validatorValue.min}`,
      };
    }
    if (validatorName === 'dob') {
      console.log(config);
    }
    return config[validatorName];
  }
  static alphaNumeric({ onlyCapital = false } = {}) {
    const numberRegex = /[0-9]/;
    const alphabetRegex = onlyCapital ? /[A-Z]/ : /[a-z]/i;
    // const alphabetRegex =  /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/
    return function (control) {
      const value = control.value;
      if (!value) {
        return null;
      }
      if (!alphabetRegex.exec(value)) {
        return {
          pattern: true
          // alphaNumeric: true
        };
      }
      // if (!numberRegex.exec(value) || !alphabetRegex.exec(value)) {
      // 	return {
      // 		alphaNumeric: true
      // 	};
      // }
    };

  }

  static nameValidator(control) {
    const name = control.value;
    if (name != null) {
      const namePattern = /[a-zA-Z]+[a-z&\.\s]*$/i;
      const nameMatch = name.match(namePattern);
      if (nameMatch && nameMatch[0] === name) {
        return null;
      } else {
        return { invalidName: true };
      }
    }
  }

  static emailValidator(control) {
    /* 4.subrmanyam@gmail.com is not working in this */
    // tslint:disable-next-line:max-line-length
    // const emailPattern = /^([a-z0-9])(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    // const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const emailPattern = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
    if (control.value != null) {
      if (control.value.match(emailPattern)) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }
  }
  static emailValidatorMand(control) {
    // tslint:disable-next-line:max-line-length
    const emailPattern = /^([a-z0-9])(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    // const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (control.value) {
      if (control.value.match(emailPattern)) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }
  }
  static emailV(control) {
    // tslint:disable-next-line:max-line-length
    const emailPattern = '^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$';
    // const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    console.log('control.value', control.value);
    if (control.value) {
      if (control.value.match(emailPattern)) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }
  }
  static passwordValidator(control) {
    if (
      control.value.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )
    ) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('newPassword').value;
    const confirmPassword = AC.get('confirmPassword').value;
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
    } else {
      AC.get('confirmPassword').setErrors(null);
    }
  }

  static emailMatch(AC: AbstractControl) {
    const email = AC.get('email').value;
    const confirmEmail = AC.get('reemail').value;
    if (email !== confirmEmail) {
      AC.get('reemail').setErrors({ MatchEmail: true });
    } else {
      AC.get('reemail').setErrors(null);
    }
  }
}
