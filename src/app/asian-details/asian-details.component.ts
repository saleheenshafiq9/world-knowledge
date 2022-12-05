import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-asian-details',
  templateUrl: './asian-details.component.html',
  styleUrls: ['./asian-details.component.css']
})
export class AsianDetailsComponent implements OnInit {

  public countryId = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.countryId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.countryId = id;
    })
  }

  goPrev() {
    let prevId = this.countryId - 1;
    if(prevId===0) {
      prevId = 5;
    }
    this.router.navigate(['/asians', prevId])
  }

  goNext() {
    let nextId = this.countryId + 1;
    if(nextId===6) {
      nextId = 1;
    }
    // console.log(nextId)
    this.router.navigate(['/asians', nextId])
  }

  goBack() {
    let selectedId = this.countryId ? this.countryId : null;
    this.router.navigate(['/asians', {id: selectedId}]);
  }

  goMaps() {
    this.router.navigate(['maps'], {relativeTo: this.route})
  }
}
