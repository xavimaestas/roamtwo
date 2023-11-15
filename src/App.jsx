import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'
import './App.css'

import Landing, {loader as landingLoader} from "./pages/Landing.jsx"
import Layout from "./components/Layout.jsx"
import ScrollToTop from './components/ScrollToTop.jsx'
import Blog from "./pages/Blog.jsx"
import About from "./pages/About.jsx"
import Error from './components/Error.jsx'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={ 
    <div>
      <Layout/>  
      <ScrollToTop/>
    </div>
    } loader={landingLoader} errorElement={ <Error/>}>
      <Route index element={ <Landing/> }/>
      <Route path="/blog" element={ <Blog/> }/>
      <Route path="/about" element={ <About/> }/>
    </Route>
  ))
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
