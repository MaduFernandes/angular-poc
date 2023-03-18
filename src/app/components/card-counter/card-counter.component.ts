import { Component, OnInit } from '@angular/core';
import { ICardCounter } from './interface/ICardCouter';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss']
})
export class CardCounterComponent implements OnInit {

  titles: ICardCounter[] = [
    {
      name: 'Teste 1',
      value: '100%',
      color: 'black'
    },
    {
      name: 'Teste 2',
      value: '8',
      color: 'blue'

    },
    {
      name: 'Teste 3',
      value: '1',
      color: 'yellow'

    },
    {
      name: 'Teste 4',
      value: '2',
      color: 'pink'

    },
    {
      name: 'Teste 5',
      value: '5',
      color: 'red'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

