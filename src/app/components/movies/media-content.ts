import {Component, OnInit} from '@angular/core';
import {EntriesStateService} from '../../services/entries-state.service';
import {ProgramTypeEnum} from '../../enums/program.type.enum';
import {Observable} from 'rxjs';
import {IEntriesList} from '../../interfaces/entries.list.interface';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './media-content.html',
  styleUrls: ['./media-content.scss']
})

export class MediaContent implements OnInit {
  entriesList$: Observable<IEntriesList>;
  page$: Observable<number>;
  isMoviesPage: boolean;
  isSeriesPage: boolean;

  constructor(private entriesStateService: EntriesStateService, private router: Router) {
    this.entriesList$ = this.entriesStateService.getPreparedEntries();
    this.page$ = this.entriesStateService.page$;
    this.switcher();
  }

  async ngOnInit() {
    await this.entriesStateService.load();
  }

  onYearChanged(year: number) {
    this.entriesStateService.year$.next(year);
    this.resetPage();
  }
  onPageChanged(page: number) {
    this.entriesStateService.page$.next(page);
  }
  onSearchChanged(search: string) {
    this.entriesStateService.search$.next(search);
    this.resetPage();
  }
  resetPage(){
    this.entriesStateService.page$.next(1);
  }

  switcher(){
    this.router.events.subscribe((val)=>{
      this.isMoviesPage = (val as RouterEvent).url === '/movies';
      this.isSeriesPage = (val as RouterEvent).url === '/series';
      if (this.isMoviesPage){
        this.entriesStateService.type$.next(ProgramTypeEnum.movies);
      } else {
        this.entriesStateService.type$.next(ProgramTypeEnum.series);
      }
    });


  }

}
