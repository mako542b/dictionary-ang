import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { InfoComponent } from './info/info.component';
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
    if(error.title === 'No Definitions Found')
    this.error = true
    this.responseList = null
  }

}

