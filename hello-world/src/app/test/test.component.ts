import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  /*selector: '.app-test',*/
  /*selector: '[app-test]',*/
  template: `
   <h2>
    welcome {{name}}
   </h2>
   <!-- Interpolation -->
   <!-- <h2>{{2+2}}</h2>
  <h2>{{"welcome"+name}}<h2>
   <h2>{{name.length}}</h2>
   <h2>{{name.toUpperCase()}}
   <h2>{{greetUser()}}<h2>
   <h3>{{siteUrl}}</h3> -->
   <!-- property binding -->
   <!-- <input [id]="myId" type="text" value="text" /> -->
   <!-- html class binding -->
   <!-- <h4 class="text-success"> Codeevalution1</h4>
   <h3 [class]="successClass"> Codeevalution2</h3>
   <h2 class="text-special" [class]="successClass">codeevalution3<h2>  -->
   <!--apply class on condition basis -->
   <!-- <h2 [class.text-danger]="hasError">codeevalution4<h2>
   <h2 [ngClass]="messageClasses">codeevalution5</h2>  -->
   <!-- style binding -->
   <h2 [style.color]="'orange'">style binding</h2>
   <!-- conditional style binding -->
   <!-- <h2 [style.color]="hasError ? 'red' : 'green'">style binding</h2>
   <h2 [style.color]="highlightColor">style binding2</h2>
   <h2 [ngStyle]="titleStyles"> style binding 3</h2>  -->

   <!-- event binding -->
   <!-- <button (click)="onClick()">greet</button>  -->
   <!-- {{greetings}}
   <button (click)="onClick($event)">greet</button>
   <button (click)="greetings='welcome noorul'">greet</button> -->
   <!-- template refrence variables -->
   <!-- <input #myInput type="text">
   <button (click)="logMessage(myInput.value)">Log</button>  -->
   <!-- two way binding, it is in seperate module, so add that module in app.module.ts -->
   <!-- <input [(ngModel)]="name2" type="text" >
   {{name2}}  -->
   <!-- structural directives i.e ngif, ngSwitch, ngFor -->
   <!-- <h2 *ngIf="true">
    Welcome {{name}}
   </h2>
   <h2 *ngIf="false">
    Welcome Again {{name}}
   </h2>
   <h2 *ngIf="displayName">
   Welcome {{name}}
  </h2> -->

 <!-- <h2 *ngIf="displayName; else elseBlock">
    Welcome Noorul from if block
  </h2>

  <ng-template #elseBlock>
   <h2>
    Welcome Noorul from else block
   </h2>
  </ng-template> -->

  <!-- second method to write if else condition -->
  <!-- <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
   <h2>codeevalution</h2>
  </ng-template>
  <ng-template #elseBlock>
   <h2>codeevaluation hidden</h2>
  </ng-template>  -->

  <!-- ng-switch directive -->
  <!-- <div [ngSwitch]="color">
   <div *ngSwitchCase="'red'">you picked red color</div>
   <div *ngSwitchCase="'blue'">you picked blue color</div>
   <div *ngSwitchCase="'green'">you picked green color</div>
   <div *ngSwitchDefault>you picked default color</div>
  </div>  -->
 
  <!-- ngFor directive -->
  <!-- <div *ngFor="let color of lists">
   <h2>{{color}}</h2>
  </div>
  <div *ngFor="let color of lists; index as i">
   <h2>{{i}} {{color}}</h2>
  </div>
  <div *ngFor="let color of lists; first as f">
   <h2>{{f}} {{color}}</h2>
  </div>
  <div *ngFor="let color of lists; last as l">
   <h2>{{l}} {{color}}</h2>
  </div>
  <div *ngFor="let color of lists; odd as o">
   <h2>{{o}} {{color}}</h2>
  </div>
  <div *ngFor="let color of lists; even as e">
   <h2>{{e}} {{color}}</h2>
  </div>  -->

  <!-- component interaction -->
  <!-- sending data from parent to child component -->
  <!-- <h2>{{"Hello " + parentData}}</h2> -->
  <h2>{{"Second way " + datafromparent}}</h2>
  <!--sending data from child to parent component-->
  <button (click)="fireEvent()">send event</button>

  <!-- pipes in angular with examples -->
  <h2 style="color:red">pipes examples started</h2>
  <!-- string pipes -->
  <!--
  <h2>{{namepipes}}</h2>
  <h2>{{namepipes | lowercase}}</h2>
  <h2>{{namepipes | uppercase}}</h2>
  <h2>{{namepipes | titlecase}}</h2>
  <h2>{{namepipes | slice:3}}</h2>
  <h2>{{namepipes | slice:3:5}}</h2>
  <h2>{{person | json}}</h2>
  -->
  <!-- number pipes -->
  <!--
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>

  <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
  <h2>{{0.25 | currency: 'GBP'}}</h2>
  <h2>{{0.25 | currency: 'GBP': 'code'}}</h2>
  <h2>{{0.25 | currency: 'EUR': 'code'}}</h2>
  -->

  <!-- DATE pipe -->
  <!--
  <h2>{{ date }}</h2>
  <h2>{{ date | date:'short'}}</h2>
  <h2>{{ date | date:'shortDate'}}</h2>
  <h2>{{ date | date:'shortTime'}}</h2>
  <h2>{{ date | date:'medium'}}</h2>
  <h2>{{ date | date:'mediumDate'}}</h2>
  <h2>{{ date | date:'mediumTime'}}</h2>
  <h2>{{ date | date:'long'}}</h2>
  <h2>{{ date | date:'longDate'}}</h2>
  <h2>{{ date | date:'longTime'}}</h2>
  -->





  `,
  
  styles: [`
   .text-success {
     color: green;
   }
   .text-danger {
     color: red;
   }
   .text-special {
     font-style: italic;
   }

  `]
})
export class TestComponent implements OnInit {

  public name = "Noorulislam";
  public siteUrl = window.location.href;
  public myId = "testId"
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  /** event binding */
  public greetings = "";
  public name2 = "";
  /*displayName = true;*/
  displayName = false;
  /*public color = "red";
  public color = "green";*/
  public color = "orange";

  public lists = ["red", "blue", "green", "yellow"];

  /** Component Interaction */
  /*@Input() public parentData;*/
  /* Second way to send data from parent to child components */
  @Input('parentData') public datafromparent;
  /** Sending data from child component to parent component, done by EventEmitter class*/
  @Output() public childEvent = new EventEmitter();
  /** pipes in angular with example */
  public namepipes = "Codeevoluion";
  public message = "Welcome to codeevolution";
  public person = {
    "firstname": "John",
    "lastname": "Doe"
  }

  public date = new Date();



  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "hello" + this.name;
  }

  /*onClick() {
    console.log('welcome to angular6');
    this.greetings = "welcome to angular6 again"
  } */

  onClick(event) {
    console.log(event);
    this.greetings = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

  fireEvent(){
    this.childEvent.emit('msg sent to parent component');
  }

}


/* <h2>{{a=2+2}}</h2>
   <h2>window.location.href</h2> */