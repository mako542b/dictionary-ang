import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Input() chosenFont! : string
  @Output() chosenFontChange = new EventEmitter<string>()

  @Input() darkMode : boolean = false
  @Output() darkModeChange = new EventEmitter<boolean>()

  toggleMode() {
    this.darkModeChange.emit(!this.darkMode)
  }

  changeFont(newFont: any) {
    this.chosenFontChange.emit(newFont.target.value)
  }

}
