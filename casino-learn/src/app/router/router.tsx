import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import AuthLayout from '../../layouts/AuthLayout';
import GamesLayout from '../../layouts/GamesLayout';

import Home from '../../pages/Home/index.page';
import Register from '../../pages/Register/index.page';
import Login from '../../pages/Login/index.page';
import Roulette from '../../pages/Roulette/index.page';
import Slots from '../../pages/Slots/index.page';
import Hummer from '../../pages/Hummer/index.page';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: 'games',
    Component: GamesLayout,
    children: [
      {
        index: true,
        element: <div>Games page</div>
      },
      {
        path: 'roulette',
        Component: Roulette
      },
      {
        path: 'slots',
        Component: Slots
      },
      {
        path: 'hummer',
        Component: Hummer
      }
    ]
  }
]);
