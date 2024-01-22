import { Widget } from './../widget.interface';
import { Component } from '@angular/core';
import { WIDGET } from '../widget.token';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule, MatProgressSpinnerModule],
  providers: [
    {
      provide: WIDGET,
      useExisting: VelocityWidgetComponent,
    },
  ],
})
export class VelocityWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Load data from JIRA API... ');
  }
  
  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
