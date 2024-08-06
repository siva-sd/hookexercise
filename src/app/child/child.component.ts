import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  message:string;
  
  @ContentChild('temp') refdata:ElementRef

  @ViewChild('temp') temppara:ElementRef


  constructor() {
    this.message=''
    console.log('child constructor called')
    
    
  }

  ngOnChanges()
  {
    console.log(this.message)
    console.log("On changes method called")
  }

  ngOnInit()
  {
    console.log("on init method called")
  }

  ngDoCheck()
  {
    //console.log(this.message)
    console.log("ng do check method called")
    //console.log('In do check', this.refdata)
  }

  ngAfterContentInit()
  {
    console.log("ng after content init method called")
    //console.log('In After contentinit', this.refdata.nativeElement)
  }

  ngAfterContentChecked()
  {
    console.log('change in the projected content thats why this method is called')
    console.log('it is from ng after content checked',this.temppara)
  }

  ngAfterViewInit()
  {
    console.log("ng after view init method called")
    console.log('In After view init', this.temppara)
  }

  ngAfterViewChecked()
  {
    console.log('This is view checked method')
  }
  ngOnDestroy()
  {
    console.log('Ng on destroy method called')
  }

}
