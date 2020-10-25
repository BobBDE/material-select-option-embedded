import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedOptionsFinalComponent } from './embedded-options-final.component';

describe('OptionFinalComponent', () => {
  let component: EmbeddedOptionsFinalComponent;
  let fixture: ComponentFixture<EmbeddedOptionsFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedOptionsFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedOptionsFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
