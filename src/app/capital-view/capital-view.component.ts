import { Component, OnInit } from '@angular/core';
import { Capital } from '../capitals';
import { CapitalsService } from '../capitals.service';

@Component({
  selector: 'app-capital-view',
  templateUrl: './capital-view.component.html',
  styleUrls: ['./capital-view.component.css']
})
export class CapitalViewComponent implements OnInit {

  public capitals: Capital[] = [];

  constructor(private capitalsService: CapitalsService) { }

  ngOnInit(): void {
    this.capitalsService.getCapitals()
      .subscribe(data => this.capitals = data);
  }
}
