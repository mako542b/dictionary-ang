import { Component, Input } from '@angular/core';
import { Wordinterface } from '../WordInterface'
// import { MeaningComponent } from '../meaning/meaning.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent {
  @Input() data! : Wordinterface
  isAudio : string | undefined = this.data?.phonetics[0]?.audio

  ngOnChanges() {
      this.isAudio = this.data?.phonetics[0]?.audio
  }

  
  playAudio() {
    let audio = new Audio(this.isAudio as string)
    audio.play()
  }

}

