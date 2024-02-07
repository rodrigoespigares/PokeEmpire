import './App.css'
import './components/Static/Static'
import Static from './components/Static/Static'
import Landing from './components/Landing/Landing'
import Pokedex from './components/Pokedex/Pokedex'
import Midware from './utils/Midware';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
      path: "/play",
      element: <>
      <Static></Static>
      <main id="main">
          <Midware></Midware>
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
