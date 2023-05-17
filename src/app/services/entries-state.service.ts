import { Injectable } from '@angular/core';
import { DreadfulTomatoesApiService } from './dreadful-tomatoes-api.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { IEntry } from '../interfaces/entry.interface';
import { map } from 'rxjs/operators';
import {ProgramTypeEnum} from '../enums/program.type.enum';

const PAGE_SIZE = 10;

@Injectable({
  providedIn: 'root'
})
export class EntriesStateService {
    public entries$ = new BehaviorSubject<IEntry[]>([]);
  public search$ = new BehaviorSubject<string>('');
  public page$ = new BehaviorSubject<number>(1);
  public year$ = new BehaviorSubject<number>(0);
  public type$ = new BehaviorSubject<ProgramTypeEnum | null>(null);

  constructor(private dreadfulTomatoesApiService: DreadfulTomatoesApiService) {}

  public async load() {
    await this.dreadfulTomatoesApiService.getList().subscribe(response => {
      this.entries$.next(response.entries);
    });
  }

  public getPreparedEntries() {
    return combineLatest([
      this.entries$,
      this.search$,
      this.page$,
      this.year$,
      this.type$
    ]).pipe(
      map(([entries, search, page, year, type]) => {
        const pageStart = (page * PAGE_SIZE) - PAGE_SIZE;
        const filteredEntries = entries.filter(entry => {
          const typeMatch = type ? entry.programType === type : true;
          const yearMatch = year ? entry.releaseYear === year : true;
          const searchMatch = new RegExp(search as string, 'i').test(entry.title);
          return typeMatch && yearMatch && searchMatch;
        });
        const items = filteredEntries.slice(pageStart, pageStart + PAGE_SIZE);
        return {
          total: filteredEntries.length,
          items,
            filteredEntries
        };
      })
    );
  }
}
