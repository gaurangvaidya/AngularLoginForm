import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-childview',
  templateUrl: './childview.component.html',
  styleUrls: ['./childview.component.scss']
})
export class ChildviewComponent implements OnInit {

 @Output() parentEvent = new EventEmitter();

  data:any = {
    'firstName':"",
    'lastName':""
  }

 
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
   
   this.parentEvent.emit(this.data);
   
    alert("This is Child"+JSON.stringify(this.data));
   

  }
  

}
