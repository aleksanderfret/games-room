import Account from 'app/user';
import Dashboard from 'app/dashboard';
import Events from 'app/events';
import Games from 'app/games';
import Home from 'app/home';
import Players from 'app/players';
import Plays from 'app/plays';
import Settings from 'app/settings';
import Tools from 'app/tools';
import Path, { RouteAccess } from './enums';
import {
  RemoveAccountConfirmation,
  ResetPassword,
  SignIn,
  SignUp,
  SignUpConfirmation,
  UpdatePassword
} from 'app/auth';
import { RouteDefinition } from './types';

const routes: RouteDefinition[] = [
  {
    access: RouteAccess.Private,
    component: Dashboard,
    desktopNav: false,
    exact: true,
    mobileNav: false,
    name: 'Home',
    parent: null,
    path: Path.Home
  },
  {
    access: RouteAccess.Private,
    component: Account,
    desktopNav: false,
    exact: true,
    mobileNav: false,
    name: 'Account',
    parent: Path.Home,
    path: Path.Account
  },
  {
    access: RouteAccess.Private,
    component: Dashboard,
    desktopNav: true,
    exact: true,
    mobileNav: true,
    name: 'Dashboard',
    parent: Path.Home,
    path: Path.Dashboard
  },
  {
    access: RouteAccess.Private,
    component: Events,
    desktopNav: true,
    exact: true,
    mobileNav: true,
    name: 'Events',
    parent: Path.Home,
    path: Path.Events
  },
  {
    access: RouteAccess.Private,
    component: Games,
    desktopNav: true,
    exact: true,
    mobileNav: true,
    name: 'Games',
    parent: Path.Home,
    path: Path.Games
  },
  {
    access: RouteAccess.Public,
    component: Home,
    desktopNav: false,
    exact: true,
    mobileNav: false,
    name: 'Home',
    parent: null,
    path: Path.Home
  },
  {
    access: RouteAccess.Private,
    component: Players,
    desktopNav: true,
    exact: true,
    mobileNav: false,
    name: 'Players',
    parent: Path.Home,
    path: Path.Players
  },
  {
    access: RouteAccess.Private,
    component: Plays,
    desktopNav: true,
    exact: true,
    mobileNav: true,
    name: 'Plays',
    parent: Path.Home,
    path: Path.Plays
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    component: RemoveAccountConfirmation,
    exact: true,
    path: Path.RemoveAccountConfirmation
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    exact: true,
    component: ResetPassword,
    name: 'Reset password',
    path: Path.ResetPassword
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    component: Settings,
    exact: true,
    name: 'Settings',
    path: Path.Settings
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    component: SignIn,
    exact: true,
    name: 'Sign in',
    path: Path.SignIn
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    component: SignUp,
    exact: true,
    name: 'Sign up',
    path: Path.SignUp
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    component: SignUpConfirmation,
    exact: true,
    path: Path.SignUpConfirmation
  },
  {
    access: RouteAccess.Public,
    desktopNav: true,
    mobileNav: true,
    parent: Path.Home,
    component: Tools,
    exact: true,
    path: Path.Tools
  },
  {
    access: RouteAccess.Public,
    desktopNav: false,
    mobileNav: false,
    parent: Path.Home,
    component: UpdatePassword,
    exact: true,
    path: Path.UpdatePassword
  }
];

export default routes;