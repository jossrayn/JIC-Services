import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dateIn = new FormControl(new Date().toISOString());
  dateOut= new FormControl(new Date().toISOString());
  valueKids:Number = 0;
  valueAdults:Number;
  min:Number = 0;
  max:Number = 100;

  constructor() { }

  ngOnInit() {
  }

}
