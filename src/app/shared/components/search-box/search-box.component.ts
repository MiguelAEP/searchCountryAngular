import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string = '';

  
  @ViewChild('txtInput')
  tagInput!:ElementRef<HTMLInputElement>;


 @Output() mensaje: EventEmitter<string> = new EventEmitter<string>();
  onValue(){
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
    this.mensaje.emit(newTag);
  }

}
