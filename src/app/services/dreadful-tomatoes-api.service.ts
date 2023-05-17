import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEntriesResponse} from '../interfaces/entries.response.interface';

@Injectable({
  providedIn: 'root'
})
export class DreadfulTomatoesApiService {
  constructor(private httpClient: HttpClient) { }

  public getList() {
    const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';
    return this.httpClient.get<IEntriesResponse>(url);
  }
}
