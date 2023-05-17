import {Component, Input} from '@angular/core';
import {IEntry} from '../../interfaces/entry.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() entry: IEntry;

}
