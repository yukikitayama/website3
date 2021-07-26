import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AwsComponent } from "./aws/aws.component";
import { GcpComponent } from "./gcp/gcp.component";
import { HomeComponent } from "./home/home.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostStartComponent } from "./post-start/post-start.component";

const appRoutes: Routes = [
  { path: '/', component: HomeComponent, pathMatch: 'full', children: [
    { path: '', component: PostStartComponent },
    { path: ':id', component: PostDetailComponent }
  ] },
  { path: 'gcp', component: GcpComponent },
  { path: 'aws', component: AwsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}