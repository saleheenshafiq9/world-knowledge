import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiansComponent } from './asians.component';

describe('AsiansComponent', () => {
  let component: AsiansComponent;
  let fixture: ComponentFixture<AsiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
