import './App.css'
import './components/Static/Static'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Static from './components/Static/Static'
import Landing from './components/Landing/Landing'
import Pokedex from './components/Pokedex/Pokedex'
import Midware from './utils/Midware';
import Detalle from './components/Detalle/Detalle'
import Login from './components/Login/Login'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Static></Static>
          <main id="main">
            <Landing/>
          </main>
        </>
          
      ),
    },
    {
      path: "/pokedex",
      element: <>
      <Static></Static>
      <main id="main">
        <Pokedex/>
      </main>
    </>,
    },
    {
      path: "/pokedetalle/:id",
      element: <>
      <Static></Static>
      <main id="main">
        <Detalle/>
      </main>
    </>,
    },
    {
      path: "/play",
      element: <>
      <Static></Static>
      <main id="main">
          <Midware></Midware>
      </main>
    </>,
    },
    {
      path: "/login",
      element: <>
      <Static></Static>
      <main id="main">
          <Login></Login>
      </main>
    </>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
