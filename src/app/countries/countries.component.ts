import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public country = 'France'
  public countyId = 'country-id'
  public isDisabled = true
  public hasError = true
  public messageClasses = {
    "text-danger": this.hasError,
    "text-success": !this.hasError
  }
  public titleStyles = {
    color: "blue",
    fontStyle: "italic" 
  }
  public map = ''
  public population = ''
  public isLang = false
  public flagColor = 'red'
  public states = ['Orleans', 'Marseille', 'Lyon', 'Bordeux']

  @Input() public mode: any;
  @Output() public childEvent =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getCapital() {
    return "Paris is the capital of " + this.country;
  }

  showMap(event: { type: string; }) {
    this.map = event.type;
  }

  fireEvent() {
    this.childEvent.emit('Welcome to Knowledge-World');
  }

}
