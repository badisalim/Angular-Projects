import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }


  public number1: number;
  public number2: number;
  public display = '';
  public result: number;
  public answer: string;

  ngOnInit() {
  }


  calculate1(number1, operator, number2) {
    if (operator === "+") {
      return number1 + number2;
    }
    else if (operator === "*") {
      return number1 * number2;
    }
    else if (operator === "/") {

      return number1 / number2;
    }
    else if (operator === "-") {

      return number1 - number2;

    }
  }

  //second Solution
  calculate2(number1, operation, number2) {
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
    }
  }


  add(number1, number2) {
    this.display = (parseFloat(number1) + parseFloat(number2)).toString();
  }
  minus(number1, number2) {
    this.display = (number1 - number2).toString();
  }
  multiply(number1, number2) {
    this.display = (number1 * number2).toString();
  }
  devide(number1, number2) {
    this.display = (number1 / number2).toString();
  }

  setCalculation(value: string) {
    switch (value) {
      case '+':
        this.number1 = parseFloat(this.display);
        this.display = this.number1 + value;
        break;
      case '-':
        this.number1 = parseFloat(this.display);
        this.display = this.number1 + value;
        break;
      case '*':
        this.number1 = parseFloat(this.display);
        this.display = this.number1 + value;
        break;
      case '/':
        this.number1 = parseFloat(this.display);
        this.display = this.number1 + value;
        break;


    }
    console.log(this.number1);
    console.log(this.number2);

  }

  setValue(value: string) {
    this.display += value.toString();
  }

  calculate() {
    const regex = /(\+|\-|\*|\/)/g;

    switch (true) {
      case (this.display.match(regex).length > 0):
        this.translateCalculation(this.display.match(regex)[0]);
        break;
    }
  }

  translateCalculation(operator: string) {
    const num1 = this.display.split(operator)[0];
    const num2 = this.display.split(operator)[1];

    switch (operator) {
      case '+':
        this.add(num1, num2);
        break;
      case '-':
        this.minus(num1, num2);
        break;
      case '*':
        this.multiply(num1, num2);
        break;
      case '/':
        this.devide(num1, num2);
        break;
    }
  }

  setFloat() {
    this.display += "."
  }
}

