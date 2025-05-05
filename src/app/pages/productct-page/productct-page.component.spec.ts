import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductctPageComponent } from './productct-page.component';

describe('ProductctPageComponent', () => {
  let component: ProductctPageComponent;
  let fixture: ComponentFixture<ProductctPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductctPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductctPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
