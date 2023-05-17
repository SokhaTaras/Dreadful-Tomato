import {ProgramTypeEnum} from "../enums/program.type.enum";

export interface IEntry {
  title: string;
  description: string;
  programType: ProgramTypeEnum;
  images: {
    posterArt: {
      url: string;
      width: number;
      height: number;
    }
  };
  releaseYear: number;
}
