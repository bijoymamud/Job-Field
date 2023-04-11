import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'appliedjob',
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
