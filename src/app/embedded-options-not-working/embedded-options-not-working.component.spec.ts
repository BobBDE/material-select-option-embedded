import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedOptionsNotWorkingComponent } from './embedded-options-not-working.component';

describe('OptionListNotWorkingComponent', () => {
  let component: EmbeddedOptionsNotWorkingComponent;
  let fixture: ComponentFixture<EmbeddedOptionsNotWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedOptionsNotWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedOptionsNotWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
