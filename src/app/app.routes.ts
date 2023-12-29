import { Routes } from '@angular/router';
import { AnadirAlumnoComponent } from './anadir-alumno/anadir-alumno.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path:'', component: AnadirAlumnoComponent},

    {path:'', component: InicioComponent}
];
