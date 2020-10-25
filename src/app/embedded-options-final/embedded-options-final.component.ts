import {AfterViewInit, Component, Host, OnInit} from '@angular/core';
import {AbstractEmbeddedOptionsDirective} from './abstract-embedded-options.directive';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-embedded-options-final',
  templateUrl: './embedded-options-final.component.html',
  styleUrls: ['./embedded-options-final.component.scss']
})
export class EmbeddedOptionsFinalComponent extends AbstractEmbeddedOptionsDirective
  implements OnInit, AfterViewInit {

  constructor(@Host() select: MatSelect) {
    super(select);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initOptions();
  }

}
