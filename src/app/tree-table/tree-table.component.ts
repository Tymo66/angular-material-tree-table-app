import { Component } from '@angular/core';

interface Food {
  name: string;
  type: string;
  children?: Food[];
}

const TREE_DATA: Food[] = [
  {
    name: 'Fruits',
    type: '',
    children: [
      { name: 'Apple', type: 'Fruit' },
      { name: 'Banana', type: 'Fruit' },
      { name: 'Orange', type: 'Fruit' },
    ],
  },
  {
    name: 'Vegetables',
    type: '',
    children: [
      { name: 'Carrot', type: 'Vegetable' },
      { name: 'Tomato', type: 'Vegetable' },
    ],
  },
];

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css'],
})
export class TreeTableComponent {
  displayedColumns: string[] = ['name', 'type', 'action'];
  dataSource = TREE_DATA;
}
