import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { PostListComponent } from "./post/post-list/post-list.component";
import {ProductListComponent} from './product/product-list/product-list.component'
import {ProductCreateComponent} from './product/product-create/product-create.component'

const routes: Routes=[
    {path:'',component:PostListComponent},
    {path:'create',component:PostCreateComponent},
    {path:'product',component:ProductCreateComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
}