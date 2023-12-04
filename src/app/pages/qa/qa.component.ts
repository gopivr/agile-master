import { Component } from '@angular/core';
import qa from '../qa/qa.json';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})

export class QaComponent {
   data : any = qa;

   constructor() {
  }
}
