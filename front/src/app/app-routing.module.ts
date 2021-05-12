import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RoomComponent} from "./pages/room/room.component";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent
  },
  {
    path: ':id',
    component: RoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
