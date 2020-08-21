import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from '../app/components/booklist/booklist.component';
import { BookformComponent } from './components/bookform/bookform.component'; 
import { EditbookformComponent } from './editbookform/editbookform.component';

const routes: Routes = [
    {
      path: '', 
      redirectTo: '/libros', 
      pathMatch: 'full'
    },
    {
      path: 'libros', 
      component: BooklistComponent
    },
    {
      path: 'libros/agregar', 
      component: BookformComponent
    },
    {
      path: 'libros/editar/:id',
      component: EditbookformComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
