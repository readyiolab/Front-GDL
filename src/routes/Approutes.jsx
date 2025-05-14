import Layout from '@/layout/Layout';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Opportunity from '@/pages/Opportunity';
import OpportunityOverview from '@/pages/OpportunityOverview';
import CompensationPlan from '@/pages/CompensationPlan';
import JoinNow from '@/pages/JoinNow';
import Leaders from '@/pages/Leaders';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/opportunity', element: <Opportunity /> },
      { path: '/opportunity-overview', element: <OpportunityOverview /> },
      { path: '/compensation-plan', element: <CompensationPlan /> },
      { path: '/join-now', element: <JoinNow /> },
      { path: '/leaders', element: <Leaders /> },
      { path: '/contact', element: <Contact /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <BlogDetail /> },
    ],
  },
  {
    path: '*',
    element: <h1 className="text-2xl font-bold text-center mt-10">Not Found</h1>,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;