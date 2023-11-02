import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() options: any[] = [] 
  @Input() active: string = '' 
  @Output() handleSelectOption = new EventEmitter<string>();

  selectOption(value: any) {
    return this.handleSelectOption.emit(value)
  }

}
