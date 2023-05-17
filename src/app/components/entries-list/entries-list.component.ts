import {Component, Input} from '@angular/core';
import {IEntry} from '../../interfaces/entry.interface';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent {

  @Input() entries?: IEntry[] = [];


}
