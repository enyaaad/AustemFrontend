import {CanvasElement} from "./Element";

export class Project{
  name!:string;
  elements?:CanvasElement[];
  cost?: number | null;
}
