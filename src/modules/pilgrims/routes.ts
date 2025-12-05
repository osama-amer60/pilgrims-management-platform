export const pilgrimsRoutes = [
  {
    path: '/pilgrims',
    name: 'Pilgrims',
    component: () => import('./views/PilgrimsView.vue'),
    // meta: { requiresAuth: true, permission: 'pilgrims.view' },
  },
]
