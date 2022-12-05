import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianDetailsComponent } from './asian-details.component';

describe('AsianDetailsComponent', () => {
  let component: AsianDetailsComponent;
  let fixture: ComponentFixture<AsianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
