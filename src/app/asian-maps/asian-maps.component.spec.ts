import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianMapsComponent } from './asian-maps.component';

describe('AsianMapsComponent', () => {
  let component: AsianMapsComponent;
  let fixture: ComponentFixture<AsianMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
