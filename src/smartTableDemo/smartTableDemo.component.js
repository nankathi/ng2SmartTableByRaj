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
const core_1 = require("@angular/core");
const Column_1 = require('../smartTable/Column');
var ItemViewMode;
(function (ItemViewMode) {
    ItemViewMode[ItemViewMode["View"] = 1] = "View";
    ItemViewMode[ItemViewMode["Edit"] = 2] = "Edit";
})(ItemViewMode || (ItemViewMode = {}));
let SmartTableDemoComponent = class SmartTableDemoComponent {
    constructor() {
        this.ViewMode = true;
        this.EditMode = false;
        this.columns = [];
        this.rows = [
            { businessUnit: 'ABC Corporate', manager: 'Rob Smith', title: 'Executive', startDate: '1/1/1990', endDate: '2/2/1991', mail: 'test1@mail.com', primaryYn: 'Y' },
            { businessUnit: 'XYZ Corporate', manager: 'Joe Niel', title: 'Manager', startDate: '1/1/1992', endDate: '2/2/1999', mail: 'test1@mail.com', primaryYn: 'Y' },
            { businessUnit: 'KLM Sports', manager: 'Micheal Jackson', title: 'Executive', startDate: '1/1/1995', endDate: '2/2/1997', mail: 'test1@mail.com', primaryYn: 'N' },
            { businessUnit: 'NIC Films', manager: 'Taylor Lautner', title: 'CEO', startDate: '1/1/1996', endDate: '2/2/1996', mail: 'test2@mail.com', primaryYn: 'Y' },
            { businessUnit: 'ABC Sports', manager: 'Arnold Scngr', title: 'VP', startDate: '1/1/1997', endDate: '2/2/1999', mail: 'test3@mail.com', primaryYn: 'N' },
            { businessUnit: 'NIC Films', manager: 'Bob Smith', title: 'Assistant', startDate: '1/1/1998', endDate: '2/2/1991', mail: 'test4@mail.com', primaryYn: 'Y' },
            { businessUnit: 'NBC News', manager: 'Bill Gates', title: 'Manager', startDate: '1/1/1991', endDate: '2/2/1991', mail: 'test5@mail.com', primaryYn: 'Y' },
            { businessUnit: 'NIC Films', manager: 'Joel Atherton', title: 'Executive', startDate: '1/2/1990', endDate: '2/2/1991', mail: 'test6@mail.com', primaryYn: 'N' },
            { businessUnit: 'KBC News', manager: 'John Cena', title: 'Manager', startDate: '1/1/1989', endDate: '2/2/1991', mail: 'test7@mail.com', primaryYn: 'Y' },
            { businessUnit: 'KLM Sports', manager: 'Zen Tig', title: 'Executive', startDate: '1/1/1985', endDate: '2/2/1991', mail: 'test8@mail.com', primaryYn: 'Y' },
        ];
        this.users = [
            { firstName: "Raj", lastName: "Ankathi", userName: "Raj Anakthi", avatar: "doraemon.jpg", mode: ItemViewMode.View },
            { firstName: "Raj", lastName: "Ankathi", userName: "Raj Anakthi2", avatar: "doraemon.jpg", mode: ItemViewMode.View }
        ];
        this.columns.push(new Column_1.Column('businessUnit', 'Business Unit'));
        this.columns.push(new Column_1.Column('manager', 'Manager'));
        this.columns.push(new Column_1.Column('title', 'Business Unit'));
        this.columns.push(new Column_1.Column('startDate', 'Start Date'));
        this.columns.push(new Column_1.Column('endDate', 'End Date'));
        this.columns.push(new Column_1.Column('mail', 'Mail'));
        this.columns.push(new Column_1.Column('primaryYn', 'PrimaryYn'));
    }
    onQuickEditClicked(user) {
        //this.EditMode = !this.EditMode;
        //this.ViewMode = !this.ViewMode;
        //user.mode = ItemViewMode.Edit;
        this.selectedUser = user;
    }
    onSaveClicked(user) {
        user.mode = ItemViewMode.View;
    }
    onUserChanged(data) {
        this.selectedUser = data;
    }
    onCellClick(data) {
        console.log(data);
    }
};
SmartTableDemoComponent = __decorate([
    core_1.Component({
        templateUrl: "src/smartTableDemo/smartTableDemo.component.html"
    }), 
    __metadata('design:paramtypes', [])
], SmartTableDemoComponent);
exports.SmartTableDemoComponent = SmartTableDemoComponent;
//# sourceMappingURL=smartTableDemo.component.js.map