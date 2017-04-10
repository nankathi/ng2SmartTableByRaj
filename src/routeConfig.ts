import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SmartTableDemoComponent} from './smartTableDemo/smartTableDemo.component';
let routes:Routes = [
    {path:'demo',component:SmartTableDemoComponent},
    {path:'',redirectTo:'demo',pathMatch:'full'}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutes{

}