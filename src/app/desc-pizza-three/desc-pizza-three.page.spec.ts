import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescPizzaThreePage } from './desc-pizza-three.page';

describe('DescPizzaThreePage', () => {
  let component: DescPizzaThreePage;
  let fixture: ComponentFixture<DescPizzaThreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescPizzaThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
