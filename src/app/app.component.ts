import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wordinterface } from './WordInterface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  userInput : string = ''
  responseList : Wordinterface | null = null
  error = false
  chosenFont: string = 'Sans Serif'
  // darkTheme: boolean =  window.matchMedia(“(prefers-color-scheme: dark)”);
  darkMode = false



  onInput(event: Event) {
    this.error = false
    const param = (event.target as HTMLInputElement).value
    this.http.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + param)
      .subscribe({ next: this.handleInput.bind(this), error: this.handleError.bind(this)})
  }

  handleInput(response: any) {
    this.responseList = response[0]
  }

  handleError({ error }: any) {
      this.error = true
      this.responseList = null    
  }

}

