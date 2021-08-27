import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachproductComponent } from './eachproduct.component';

describe('EachproductComponent', () => {
  let component: EachproductComponent;
  let fixture: ComponentFixture<EachproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
