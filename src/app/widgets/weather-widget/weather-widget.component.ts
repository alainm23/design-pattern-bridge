import { WIDGET } from './../widget.token';
import { Component } from '@angular/core';
import { Widget } from '../widget.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule, MatProgressSpinnerModule],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements Widget {
  isLoading = false;
  load() {
    console.log('Load data from WEATHER API... ');
  }
  
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
