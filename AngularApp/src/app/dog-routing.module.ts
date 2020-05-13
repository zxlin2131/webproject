import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DogComponent} from './dog/dog.component';

const appRoutes: Routes = [

  {path: 'dog', component: DogComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- Use true for debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DogRoutingModule {
}
