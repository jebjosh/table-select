import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'table-select';

  @Output() item: EventEmitter<Item> = new EventEmitter<Item>();

  itemObject: Item = { name: '', no: 1, isSelected: false };
  itemObject2: Item = new Item();
  tableData: Item[] = [
    { no: 1, name: 'blue' },
    { no: 2, name: 'black' },
    { no: 3, name: 'red' },
  ];

  selectRow(row: any): void {
    // Set the selected state for the clicked row
    row.isSelected = true;
    this.itemObject2 = row;

    // Set the selected state to false for all other rows
    this.tableData.forEach((tableRow) => {
      if (tableRow !== row) {
        tableRow.isSelected = false;
      }
    });
  }

  showSelected(): void {
    //this.itemObject2 = this.itemObject;
    //this.item.emit(this.itemObject);

    this.itemObject = this.itemObject2;
    console.log(this.itemObject);
  }
}
