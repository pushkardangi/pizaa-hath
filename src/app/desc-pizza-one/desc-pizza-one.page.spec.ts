import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescPizzaOnePage } from './desc-pizza-one.page';

describe('DescPizzaOnePage', () => {
  let component: DescPizzaOnePage;
  let fixture: ComponentFixture<DescPizzaOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescPizzaOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
