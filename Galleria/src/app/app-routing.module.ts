import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: "", component: UsersHomeComponent },
  { path: "users/:id", component: AlbumsComponent },
  { path: "users/:id/albums/:id", component: PhotosComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
