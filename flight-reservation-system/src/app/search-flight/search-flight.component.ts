import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  template: `
  <div class="form_test">

  <form class="myForm" method="post" enctype="application/x-www-form-urlencoded" action="/html/codes/html_form_handler.cfm">
  
    <fieldset>
      <legend>Search for one way or return flights below: </legend>
      <p><label class="choice"> <input type="radio" name="taxi" required value="car">One Way </label></p>
      <p><label class="choice"> <input type="radio" name="taxi" required value="van"> Return </label></p>
    </fieldset>
  
    <p>
      <label>FROM
        <select id="pickup_place" name="pickup_place">
          <option value="" selected="selected">Select One</option>
          <option value="india">India</option>
          <option value="france">France</option>
          <option value="poland">Poland</option>
        </select>
      </label>
    </p>
  
    <p>
      <label>TO
        <select id="pickup_place" name="pickup_place">
          <option value="" selected="selected">Select One</option>
          <option value="india">India</option>
          <option value="france">France</option>
          <option value="poland">Poland</option>
        </select>
      </label>
    </p>
  
    <p>
      <label for="start">DEPARTED
       <input class="cal" type="date" id="start" name="trip" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
      </label>
    </p>
  
    <p>
      <label for="start">RETURN
        <input type="date" id="start" name="trip" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
      </label>
    </p>
  
  
    <p>
      <label>ADULT
        <select id="pickup_place" name="pickup_place">
          <option value="" selected="selected">Select One</option>
          <option value="india">1</option>
          <option value="france">2</option>
          <option value="poland">3</option>
        </select>
      </label>
    </p>
    
    <p>
      <label>CHILDREN
        <select id="pickup_place" name="pickup_place">
          <option value="" selected="selected">Select One</option>
          <option value="india">1</option>
          <option value="france">2</option>
          <option value="poland">3</option>
        </select>
      </label>
    </p>
    
    <p>
      <label>INFANT
        <select id="pickup_place" name="pickup_place">
          <option value="" selected="selected">Select One</option>
          <option value="india">1</option>
          <option value="france">2</option>
          <option value="poland">3</option>
        </select>
      </label>
    </p>
    
    <p>
      <label>CLASS
        <select id="pickup_place" name="pickup_place">
          <option value="" selected="selected">Select One</option>
          <option value="india">Economy</option>
          <option value="france">Business</option>
        </select>
      </label>
    </p>
  
  <ul class="sub">
    <li><button>Reset</button></li>&nbsp;&nbsp;&nbsp;
    <li><button>Search</button></li>
  </ul>
  
  </form>
  </div>
  `,
  styles: [`
  .myForm {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 0.9em;
    width: 40em;
    padding: 1em;
    border: 1px solid #ccc;
    }
    
    .myForm * {
    box-sizing: border-box;
    }
    
    .myForm fieldset {
    border: none;
    padding: 0;
    }
    
    .myForm legend,
    .myForm label {
    padding: 0;
    font-weight: bold;
    }
    
    .myForm label.choice {
    font-size: 1.0em;
    font-weight: normal;
    }
    
    .myForm label {
    text-align: left;
    display: block;
    }
    
    .myForm input[type="text"],
    .myForm input[type="tel"],
    .myForm input[type="email"],
    .myForm input[type="datetime-local"],
    input[type="date"],
    .myForm select,
    .myForm textarea {
    float: right;
    width: 60%;
    border: 1px solid #ccc;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 0.9em;
    padding: 0.3em;
    }
    
    .myForm input[type="radio"],
    .myForm input[type="checkbox"] {
    margin-left: 40%;
    }
    
    .myForm button {
    padding: 1em;
    border-radius: 0.5em;
    background: #eee;
    border: none;
    font-weight: bold;
    margin-left: 40%;
    margin-top: 1.8em;
    }
    
    .myForm button:hover {
    background: #ccc;
    cursor: pointer;
    }
    
    .myForm li {
        display:inline-table;
    }
    
    .form_test {
        background-color: rgb(0, 238, 255);
        margin-top: 10px;
        height: 22.5cm;
    }
    
    .myForm ul {
        margin: 20px;
        margin-left: 250px;
    }
  `]
})
export class SearchFlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
