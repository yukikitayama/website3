import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AwsComponent } from "./aws/aws.component";
import { GcpComponent } from "./gcp/gcp.component";
import { HomeComponent } from "./home/home.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostStartComponent } from "./post-start/post-start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: PostStartComponent },
    { path: ':id', component: PostDetailComponent }
  ] },
  { path: 'gcp', component: GcpComponent, children: [
    { path: '', component: PostStartComponent },
    { path: ':id', component: PostDetailComponent }
  ] },
  { path: 'aws', component: AwsComponent, children: [
    { path: '', component: PostStartComponent },
    { path: ':id', component: PostDetailComponent }
  ] },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}