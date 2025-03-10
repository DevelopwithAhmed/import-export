import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuavaComponent } from './guava.component';

describe('GuavaComponent', () => {
  let component: GuavaComponent;
  let fixture: ComponentFixture<GuavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
