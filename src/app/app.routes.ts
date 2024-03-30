import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    
    { path: '', component: LandingComponent },
    { path: 'dashboard', component: DashboardComponent },
];
