import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';


@Component({
  selector: 'app-select-wrapper',
  templateUrl: './select-wrapper.component.html',
  styleUrls: ['./select-wrapper.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectWrapperComponent),
    multi: true
  }]
})
export class SelectWrapperComponent implements OnInit, ControlValueAccessor {

  @Input() required: boolean;
  @Input() disabled = false;
  @Input() multiple = false;

  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  selectedValue: string;


  // ngModel
  private onChangeCallback: (_: any) => void;
  public onTouch: () => void;

  constructor() {
  }

  ngOnInit(): void {
  }

  writeValue(value: string): void {
    this.selectedValue = value;
  }

  onSelectClosed(): void {
    this.onTouch();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  private notifyChange(value: string): void {
    this.selectionChange.emit(value);
  }

  emitValue(value: string): void {
    this.onChangeCallback(value);
    this.notifyChange(value);
  }

  onChanged(event: MatSelectChange): void {
    this.emitValue(event.value);
  }


  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
