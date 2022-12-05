import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-asians',
  templateUrl: './asians.component.html',
  styleUrls: ['./asians.component.css']
})
export class AsiansComponent implements OnInit {

  public asianCountries = [
    {'id': 1, 'name': 'Japan'},
    {'id': 2, 'name': 'Korea'},
    {'id': 3, 'name': 'Malaysia'},
    {'id': 4, 'name': 'Thailand'},
    {'id': 5, 'name': 'Singapore'}
  ]
  public selectedId = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.selectedId = id;
    })
  }

  onSelect(loadCountry: any) {
    this.router.navigate(['/asians', loadCountry.id])
  }

  isSelected(loadCountry: any) {
    return loadCountry.id === this.selectedId;
  }

}
