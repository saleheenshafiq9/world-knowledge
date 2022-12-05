import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-asian-maps',
  templateUrl: './asian-maps.component.html',
  styleUrls: ['./asian-maps.component.css']
})
export class AsianMapsComponent implements OnInit {

  public mapId = '';
  public url = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = window.location.href;
    this.mapId = this.url.split('asians/').pop()?.split('/maps')[0]!;
  }

}
