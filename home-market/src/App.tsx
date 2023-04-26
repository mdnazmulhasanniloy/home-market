import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Router } from './Router/Router';

function App() {
  return (
    <div className="">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
