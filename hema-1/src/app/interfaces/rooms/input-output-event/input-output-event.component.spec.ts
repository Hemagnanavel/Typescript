import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputEventComponent } from './input-output-event.component';

describe('InputOutputEventComponent', () => {
  let component: InputOutputEventComponent;
  let fixture: ComponentFixture<InputOutputEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutputEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
