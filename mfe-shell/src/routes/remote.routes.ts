import { Routes } from "@angular/router";
import { loadRemoteModule } from '@angular-architects/module-federation';


export const REMOTE_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'cadastro',
      pathMatch: 'full',
    },
    {
      path: 'cadastro',
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Module',
        }).then((m) => m.AppModule),
    },
    {
      path: 'sucesso',
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          exposedModule: './Module',
        }).then((m) => m.AppModule),
    },
  ];



