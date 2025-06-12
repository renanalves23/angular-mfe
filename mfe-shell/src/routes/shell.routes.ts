import { Routes } from "@angular/router";
import { REMOTE_ROUTES } from "./remote.routes";
import { LOCAL_ROUTES } from "./local.routes";


export const SHELL_ROUTES: Routes = [
    ...REMOTE_ROUTES,
    ...LOCAL_ROUTES
  ];



