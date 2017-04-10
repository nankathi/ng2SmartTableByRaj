import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Column} from '../smartTable/Column';
import {Sorter} from '../smartTable/Sorter';
@Component({
selector:'smart-table',
templateUrl:'src/smartTable/smartTable.component.html'
})

export class SmartTableComponent{
    public selectedRow:number;
    public newItem:boolean = true;
    public isEdit:boolean = false;
    public viewOnly:boolean = true;

    @Input() rows:Array<any>;
    @Input() columns:Array<Column>;

    @Output() cellClicked:EventEmitter<any> = new EventEmitter();
    public isSortedByAsc: any = true;
    public isSortedByDesc:Boolean = false;
    public sortIcon: boolean = true;
    public key:any;
    public sorter:Sorter;

    constructor(){
        this.sorter = new Sorter();
    }
    public ngOnInit(){
        
    }
    public Sort(key:any,sortBy:any){
        this.sortIcon = false;
        this.isSortedByDesc = !this.isSortedByDesc;
        this.isSortedByAsc = !this.isSortedByAsc;
        this.key = key;
        this.sorter.sort(key,this.rows);
    }

    public onQuickEditClicked(row:any,index:number){
        this.isEdit = true;
        this.viewOnly = false;
        this.selectedRow = index;
        // if(this.selectedRow !==index){
        // this.viewOnly = false;            
        // }else{
        // this.viewOnly = true;  
        // }

         if(row && this.selectedRow !==index){
        this.viewOnly = false;            
        }else{
        this.viewOnly = true;  
        }

        row.currentVersion = this.clone(row);
        //this.selectedRow = row;
    }

    public onSaveClicked(row:any){
        debugger;
        //user.mode = ItemViewMode.View;
        //user.firstName = user.currentVersion.firstName;
    }

     public cancelClicked(row:any){
         this.isEdit = false;
         this.viewOnly = true;
    }

    public clone(row:any){
        return JSON.parse(JSON.stringify(row));
    }
    public cellClick(row:any):void {
     this.cellClicked.emit(row);
  }
}