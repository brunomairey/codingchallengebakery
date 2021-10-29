import { Component, OnInit } from '@angular/core';
import {
  coding1,
  coding2,
  coding3,
  coding4,
  coding5,
} from '../models/dataslevel2';
import { Baker } from '../models/bakery.model';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss'],
})
export class BakeryComponent implements OnInit {
  coding = coding1;

  constructor() {}

  ngOnInit(): void {
    this.createObjectAAndB();
  }

  private createObjectAAndB(): void {
    const array = this.coding.split(' ');

    const bakersF: Baker[] = [];
    const bakersB: Baker[] = [];
    for (let i = 0; i < array.length; i = i + 3) {
      if (array[i] === 'F') {
        // console.log('F ' + array[i + 1]);
        bakersF.push({
          type: array[i],
          day: +array[i + 1],
          amount: +array[i + 2],
        });
      }
      if (array[i] === 'B') {
        // console.log('F ' + array[i + 1]);
        bakersB.push({
          type: array[i],
          day: +array[i + 1],
          amount: +array[i + 2],
        });
      }
    }
    bakersF.sort(this.compare);
    bakersB.sort(this.compare);
    console.log(bakersF);
    console.log(bakersB);
    const compareB = 0;
    let compareF = 0;
    const listOfDays = [];
    for (let i = 0; i < bakersF.length; i++) {
      if (bakersF[i].amount !== bakersB[i].amount) {
        listOfDays.push(bakersF[i].day);
      }
    }
    console.log(listOfDays);
    const results = listOfDays.toString().split(',').join(' ');
    console.log(results);
  }

  private compare(a: Baker, b: Baker): number {
    if (a.day < b.day) {
      return -1;
    }
    if (a.day > b.day) {
      return 1;
    }
    return 0;
  }

  private codeAntoine(): void {
    const stringSplit = (string2: any) => {
      return string2.split(' ');
    };

    const arraySorted = (arrayInput: []) => {
      const result = [];
      for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i] === 'F') {
          result[arrayInput[i + 1]] = [];
          // console.log(result);
          // console.log(`arrayInput${arrayInput[i + 1]}`);
          result[arrayInput[i + 1]].push(arrayInput[i + 1]);
          //console.log(result);
          result[arrayInput[i + 1]].push(arrayInput[i + 2]);
          // console.log(result);
          i += 2;
        }
        if (arrayInput[i] === 'B') {
          let day = arrayInput[i + 1];
          // console.log(day);
          result[day].push(arrayInput[i + 2]);
          // console.log(result);
          i += 2;
        }
        //console.log(result);
      }
      return result;
    };

    const daysGeschummelt = (arrayOfDaysWithCash: any) => {
      const listOfDays = [];

      for (let i = 1; i < arrayOfDaysWithCash.length; i++) {
        if (arrayOfDaysWithCash[i][1] !== arrayOfDaysWithCash[i][2]) {
          listOfDays.push(arrayOfDaysWithCash[i][0]);
        }
      }
      //console.log(listOfDays);
      const result = listOfDays.toString().split(',').join(' ');
      //console.log(result);
    };

    daysGeschummelt(arraySorted(stringSplit(coding1)));
    daysGeschummelt(arraySorted(stringSplit(coding2)));
    daysGeschummelt(arraySorted(stringSplit(coding3)));
    daysGeschummelt(arraySorted(stringSplit(coding4)));
    daysGeschummelt(arraySorted(stringSplit(coding5)));
  }
}
