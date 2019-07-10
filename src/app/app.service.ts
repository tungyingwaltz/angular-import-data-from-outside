import { Injectable } from '@angular/core';
import { ImportData } from './import-data';

@Injectable()
export class AppService {
  private static importData: ImportData;
  constructor() {
    AppService.importData = window["importData"];
  }
  getData(): ImportData {
    return AppService.importData;
  }
}