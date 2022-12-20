import { lazy } from 'react';

export default [
  {
    path: 'board',
    component: lazy(() => import('../components/Board')),
    exact: true,
  },
];
