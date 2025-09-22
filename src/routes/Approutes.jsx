import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load components
const Layout = lazy(() => import('@/layout/Layout'));
const Home = lazy(() => import('@/pages/Home'));
const Products = lazy(() => import('@/pages/Products'));
const ProductDetails = lazy(() => import('@/pages/ProductDetails'));
const ProductDetail = lazy(() => import('@/pages/product-detail'));
const Opportunity = lazy(() => import('@/pages/Opportunity'));
const OpportunityOverview = lazy(() => import('@/pages/OpportunityOverview'));
const CompensationPlan = lazy(() => import('@/pages/CompensationPlan'));
const JoinNow = lazy(() => import('@/pages/JoinNow'));
const Leaders = lazy(() => import('@/pages/Leaders'));
const Contact = lazy(() => import('@/pages/Contact'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogDetail = lazy(() => import('@/pages/BlogDetail'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('@/pages/TermsOfUse'));
const EarningDisclaimer = lazy(() => import('@/pages/EarningDisclaimer'));

// Simple spinner component
const Spinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-950 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<Spinner />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/products/:categoryName',
        element: (
          <Suspense fallback={<Spinner />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: '/products/:categoryName/:productSlug',
        element: (
          <Suspense fallback={<Spinner />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: '/opportunity',
        element: (
          <Suspense fallback={<Spinner />}>
            <Opportunity />
          </Suspense>
        ),
      },
      {
        path: '/opportunity-overview',
        element: (
          <Suspense fallback={<Spinner />}>
            <OpportunityOverview />
          </Suspense>
        ),
      },
      {
        path: '/compensation-plan',
        element: (
          <Suspense fallback={<Spinner />}>
            <CompensationPlan />
          </Suspense>
        ),
      },
      {
        path: '/join-now',
        element: (
          <Suspense fallback={<Spinner />}>
            <JoinNow />
          </Suspense>
        ),
      },
      {
        path: '/leaders',
        element: (
          <Suspense fallback={<Spinner />}>
            <Leaders />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/blog',
        element: (
          <Suspense fallback={<Spinner />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: '/blog/:id',
        element: (
          <Suspense fallback={<Spinner />}>
            <BlogDetail />
          </Suspense>
        ),
      },
      {
        path: '/privacy-policy',
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: '/terms-of-use',
        element: (
          <Suspense fallback={<Spinner />}>
            <TermsOfUse />
          </Suspense>
        ),
      },
      {
        path: '/earning-disclaimer',
        element: (
          <Suspense fallback={<Spinner />}>
            <EarningDisclaimer />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Spinner />}>
        <h1 className="text-2xl font-bold text-center mt-10">Not Found</h1>
      </Suspense>
    ),
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;