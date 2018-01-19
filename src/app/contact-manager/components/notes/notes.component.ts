import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../../models/note";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
    selector: 'notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,AfterViewInit {

    @ViewChild(MatPaginator) _paginator:MatPaginator;
    @ViewChild(MatSort) sort:MatSort;
    displayedColumns = ['id', 'title', 'date'];
    dataSource: MatTableDataSource<Note>;
    @Input() notes: Note[]

    constructor() {
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngAfterViewInit(): void {
        this.dataSource.paginator=this._paginator;
        this.dataSource.sort=this.sort;
    }

    ngOnInit() {
        console.log('note',this.notes)
        this.dataSource = new MatTableDataSource<Note>(this.notes);
    }

}
