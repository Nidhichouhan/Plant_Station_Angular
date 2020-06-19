import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plant1DescriptionComponent } from './plant1-description.component';

describe('Plant1DescriptionComponent', () => {
  let component: Plant1DescriptionComponent;
  let fixture: ComponentFixture<Plant1DescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plant1DescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plant1DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
