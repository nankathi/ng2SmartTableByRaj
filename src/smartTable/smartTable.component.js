"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const Sorter_1 = require('../smartTable/Sorter');
let SmartTableComponent = class SmartTableComponent {
    constructor() {
        this.newItem = true;
        this.isEdit = false;
        this.viewOnly = true;
        this.cellClicked = new core_1.EventEmitter();
        this.isSortedByAsc = true;
        this.isSortedByDesc = false;
        this.sortIcon = true;
        this.sorter = new Sorter_1.Sorter();
    }
    ngOnInit() {
    }
    Sort(key, sortBy) {
        this.sortIcon = false;
        this.isSortedByDesc = !this.isSortedByDesc;
        this.isSortedByAsc = !this.isSortedByAsc;
        this.key = key;
        this.sorter.sort(key, this.rows);
    }
    onQuickEditClicked(row, index) {
        this.isEdit = true;
        this.viewOnly = false;
        this.selectedRow = index;
        // if(this.selectedRow !==index){
        // this.viewOnly = false;            
        // }else{
        // this.viewOnly = true;  
        // }
        if (row && this.selectedRow !== index) {
            this.viewOnly = false;
        }
        else {
            this.viewOnly = true;
        }
        row.currentVersion = this.clone(row);
        //this.selectedRow = row;
    }
    onSaveClicked(row) {
        debugger;
        //user.mode = ItemViewMode.View;
        //user.firstName = user.currentVersion.firstName;
    }
    cancelClicked(row) {
        this.isEdit = false;
        this.viewOnly = true;
    }
    clone(row) {
        return JSON.parse(JSON.stringify(row));
    }
    cellClick(row) {
        this.cellClicked.emit(row);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], SmartTableComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], SmartTableComponent.prototype, "columns", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], SmartTableComponent.prototype, "cellClicked", void 0);
SmartTableComponent = __decorate([
    core_1.Component({
        selector: 'smart-table',
        templateUrl: 'src/smartTable/smartTable.component.html'
    }), 
    __metadata('design:paramtypes', [])
], SmartTableComponent);
exports.SmartTableComponent = SmartTableComponent;
//# sourceMappingURL=smartTable.component.js.map