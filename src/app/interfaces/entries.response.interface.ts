import {IEntry} from "./entry.interface";

export interface IEntriesResponse {
  total: number;
  entries: IEntry[];
}
