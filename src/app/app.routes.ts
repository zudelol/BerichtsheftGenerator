import { Routes } from '@angular/router';
import { ErstellenComponent} from './erstellen-component/erstellen.component';

export const routes: Routes = [
  { path: 'erstellen', component: ErstellenComponent },
  { path: '', redirectTo: 'erstellen', pathMatch: 'full' },
];
