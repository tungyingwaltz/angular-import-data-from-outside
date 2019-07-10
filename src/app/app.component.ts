import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ImportData } from './import-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data: ImportData;
  dataJson: string;
  constructor(appService: AppService){
    this.data = appService.getData();
    console.log(this.data);
    this.dataJson = JSON.stringify(this.data);
   }
  name = 'Angular';
  
}
