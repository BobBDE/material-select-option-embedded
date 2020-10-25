import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedOptionsWorkingComponent } from './embedded-options-working.component';

describe('OptionListComponent', () => {
  let component: EmbeddedOptionsWorkingComponent;
  let fixture: ComponentFixture<EmbeddedOptionsWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedOptionsWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedOptionsWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
