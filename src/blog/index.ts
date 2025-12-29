import { lazy } from 'react';

export default [
  {
    slug: 'cyclical-dependency-detection',
    tags: ['dsa'],
    date: '2023-09-01',
    title: 'Cyclical Dependency Detection',
    description:
      'A real world scenario requiring cycle detection using depth-first search (DFS) for course prerequisites.',
    component: lazy(() => import(`/src/blog/cyclical-dependency-detection.mdx`)),
  },
  {
    slug: 'json-database-for-cms',
    tags: ['design'],
    date: '2022-12-12',
    title: 'JSON Database for a CMS',
    description:
      'A custom content management systems (CMS) solution for white-labelled mobile apps.',
    component: lazy(() => import(`/src/blog/json-database-for-cms.mdx`)),
  },
];
