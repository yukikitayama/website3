import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GcpComponent } from './gcp/gcp.component';
import { AwsComponent } from './aws/aws.component';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostStartComponent } from './post-start/post-start.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gcp', component: GcpComponent},
  { path: 'aws', component: AwsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GcpComponent,
    AwsComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    PostStartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
