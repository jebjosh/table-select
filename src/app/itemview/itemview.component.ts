import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.component.html',
  styleUrls: ['./itemview.component.css'],
})
export class ItemviewComponent implements OnInit, OnChanges {
  ngOnInit(): void {}

  ngOnChanges(): void {
    // this.itemList?.push(this.item);
  }

  itemList?: Item[];

  @Input() item!: Item;
}
