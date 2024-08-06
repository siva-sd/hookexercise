import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  detroycomp:boolean=false;
  msgtochild:string;

  constructor() {
   this.msgtochild='';
    
  }
  senddata(data:HTMLInputElement)
  {
    this.msgtochild=data.value
  }
  ngAfterViewInit()
  {
    console.log('This view method is from parent component')
  }
  todestroy()
  {
    this.detroycomp=!this.detroycomp;
  }
 
 
 

}
