import { Routes } from '@angular/router';
import { Inicio } from './Page/inicio/inicio';
import { Error } from './Page/error/error';
import { Login } from './Page/login/login';
import { Nosotros } from './Page/nosotros/nosotros';
import { Contactanos } from './Page/contactanos/contactanos';
import { Dashboard } from './Page/dashboard/dashboard';
import { GestionUsuarios } from './Page/gestion-usuarios/gestion-usuarios';


export const routes: Routes = [
{path: '', component: Inicio},
{path: 'login', component: Login},
{path: 'nosotros', component: Nosotros},
{path: 'contactanos', component: Contactanos},
{path: 'dashboard', component: Dashboard},
{path: 'gestion_usuarios', component: GestionUsuarios},
{path: '**', component: Error}
];
