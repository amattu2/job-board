import { lazy } from 'react';

export default [
  {
    path: 'board',
    component: lazy(() => import('../content/Board')),
  },
];
