import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescPizzaTwoPage } from './desc-pizza-two.page';

describe('DescPizzaTwoPage', () => {
  let component: DescPizzaTwoPage;
  let fixture: ComponentFixture<DescPizzaTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescPizzaTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
