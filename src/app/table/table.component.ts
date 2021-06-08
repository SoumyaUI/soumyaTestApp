import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() users = [];
  @Output() selectedData = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickRow(user) {
    this.selectedData.emit(user);
  }

}
