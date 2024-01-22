import { Component, ContentChild, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { WIDGET } from './../widgets/widget.token';
import { Widget } from './../widgets/widget.interface';

@Component({
  selector: 'app-widget-wrapper',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule],
  templateUrl: './widget-wrapper.component.html',
  styleUrl: './widget-wrapper.component.css',
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET as any, { static: true })
  widget!: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}
