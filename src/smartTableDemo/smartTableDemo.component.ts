import {Component}  from "@angular/core";
import {Column} from '../smartTable/Column';
import {SmartTableComponent} from '../smartTable/smartTable.component';

enum ItemViewMode {
    View=1,
    Edit =2
}
@Component({
templateUrl: "src/smartTableDemo/smartTableDemo.component.html"
})

export class SmartTableDemoComponent {
    public selectedUser: any;
    public ViewMode:boolean=true;
    public EditMode:boolean = false;
    public columns:Array<any> = [];

    public rows:Array<any> = [
        {businessUnit:'ABC Corporate',manager:'Rob Smith',title:'Executive',startDate:'1/1/1990',endDate:'2/2/1991',mail:'test1@mail.com',primaryYn:'Y'},
        {businessUnit:'XYZ Corporate',manager:'Joe Niel',title:'Manager',startDate:'1/1/1992',endDate:'2/2/1999',mail:'test1@mail.com',primaryYn:'Y'},
        {businessUnit:'KLM Sports',manager:'Micheal Jackson',title:'Executive',startDate:'1/1/1995',endDate:'2/2/1997',mail:'test1@mail.com',primaryYn:'N'},
        {businessUnit:'NIC Films',manager:'Taylor Lautner',title:'CEO',startDate:'1/1/1996',endDate:'2/2/1996',mail:'test2@mail.com',primaryYn:'Y'},
        {businessUnit:'ABC Sports',manager:'Arnold Scngr',title:'VP',startDate:'1/1/1997',endDate:'2/2/1999',mail:'test3@mail.com',primaryYn:'N'},
        {businessUnit:'NIC Films',manager:'Bob Smith',title:'Assistant',startDate:'1/1/1998',endDate:'2/2/1991',mail:'test4@mail.com',primaryYn:'Y'},
        {businessUnit:'NBC News',manager:'Bill Gates',title:'Manager',startDate:'1/1/1991',endDate:'2/2/1991',mail:'test5@mail.com',primaryYn:'Y'},
        {businessUnit:'NIC Films',manager:'Joel Atherton',title:'Executive',startDate:'1/2/1990',endDate:'2/2/1991',mail:'test6@mail.com',primaryYn:'N'},
        {businessUnit:'KBC News',manager:'John Cena',title:'Manager',startDate:'1/1/1989',endDate:'2/2/1991',mail:'test7@mail.com',primaryYn:'Y'},
        {businessUnit:'KLM Sports',manager:'Zen Tig',title:'Executive',startDate:'1/1/1985',endDate:'2/2/1991',mail:'test8@mail.com',primaryYn:'Y'},
    ];

    constructor(){
        this.columns.push(new Column('businessUnit','Business Unit'));
        this.columns.push(new Column('manager','Manager'));
        this.columns.push(new Column('title','Business Unit'));
        this.columns.push(new Column('startDate','Start Date'));
        this.columns.push(new Column('endDate','End Date'));
        this.columns.push(new Column('mail','Mail'));
        this.columns.push(new Column('primaryYn','PrimaryYn'));
    }
    

    

    public users:Array<any>= [
        {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi",avatar:"doraemon.jpg",mode:ItemViewMode.View},
        {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi2",avatar:"doraemon.jpg",mode:ItemViewMode.View}
    ];

    public onQuickEditClicked(user:any){
        //this.EditMode = !this.EditMode;
        //this.ViewMode = !this.ViewMode;
        //user.mode = ItemViewMode.Edit;
        this.selectedUser = user;
    }

    public onSaveClicked(user:any){
        user.mode = ItemViewMode.View;
    }

    public onUserChanged(data:any){
        this.selectedUser = data;
    }

    public onCellClick(data:any):any{
        console.log(data);
    }
}
