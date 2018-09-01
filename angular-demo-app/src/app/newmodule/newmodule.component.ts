import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newmodule',
  templateUrl: './newmodule.component.html',
  styleUrls: ['./newmodule.component.css']
})
export class NewmoduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newMethod(){
    console.log("hello noorul! I am going to execute your logic")
  }

}
