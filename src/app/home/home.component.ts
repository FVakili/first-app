import { Component, OnInit } from '@angular/core';
import { Event } from '_debugger';

@Component({
  selector: 'app-home',
  //selector: '[app-home]',property
  //selector: '.app-home',class
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  age: number = 36;
  name: string = "Faezeh";
  btnClick="Button is not clicked! "; //variable
  lastName="";
  buttonClicked = false;

  tests = ['test1', 'test2'];

  allowClick= false;

  constructor() {
    setTimeout(() => {
        this.allowClick = true;
    }, 5000);

  }

  ngOnInit() {

  }
  // event binding
  onButtonClicked() {
    this.buttonClicked=true;
    this.btnClick = "Button now is clicked!"
    this.tests.push('test');
  }

  getName() {
    return this.name
  }

  onInputChange(event: Event) {
    this.lastName = (<HTMLInputElement>event.target).value;
  }
}
