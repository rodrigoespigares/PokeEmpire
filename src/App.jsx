import './App.css'
import './components/Static/Static'
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";


import Static from './components/Static/Static'
import Landing from './components/Landing/Landing'
import Pokedex from './components/Pokedex/Pokedex'
import Midware from './utils/Midware';
import Detalle from './components/Detalle/Detalle'
import Login from './components/Login/Login'
import Play from './components/Play/Play';

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Static></Static>
          <main id="main">
            <Outlet></Outlet>
          </main>
          
        </>
          
      ),
      children:[
        {
          path: "/",
          element: <Landing></Landing>
        },
        {
          path: "/pokedex",
          element: <Pokedex></Pokedex>,
        },
        {
          path: "/pokedetalle/:id",
          element: <Detalle></Detalle>
        },
        {
          path: "/play",
          element: <Midware Component={Play}></Midware>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

  return (
    <>
      
        <RouterProvider router={router} /> 
      
    </>
  )
}

export default App
