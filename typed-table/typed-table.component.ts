import {Component, OnInit, Input} from '@angular/core';
import {Resources} from "../common/resources";
import {TypedTableHeader} from "./typed-table-header";
import {TypedTableContent} from "./typed-table-content";
import {TypedTableHeaderTypes} from "./typed-table-header-types";

@Component({
  selector: 'app-typed-table',
  templateUrl: './typed-table.component.html',
  styleUrls: ['./typed-table.component.css']
})
export class TypedTableComponent implements OnInit {

  private _l = Resources.getResources();

  public TypedTableHeaderTypes = TypedTableHeaderTypes;

  @Input()
  private headers: Array<TypedTableHeader>;

  @Input()
  private content: Array<Array<TypedTableContent>>;

  @Input()
  private hasSearch: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('Headers: '+JSON.stringify(this.headers));
    console.log('Content: '+JSON.stringify(this.content));
  }

}
