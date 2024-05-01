import React, { Children, createContext, useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { initialTaskState, taskReducer } from './reducer.js'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
]);

export const TaskContext = createContext()
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  return(
    <TaskContext.Provider value={{ state, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <TaskProvider>
    <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>,
)
