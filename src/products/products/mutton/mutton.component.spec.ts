import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuttonComponent } from './mutton.component';

describe('MuttonComponent', () => {
  let component: MuttonComponent;
  let fixture: ComponentFixture<MuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
