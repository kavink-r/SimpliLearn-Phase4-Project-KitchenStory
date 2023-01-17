import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllFoodsComponent } from './admin-all-foods.component';

describe('AdminAllFoodsComponent', () => {
  let component: AdminAllFoodsComponent;
  let fixture: ComponentFixture<AdminAllFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
