import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './components/home.jsx';
import { Signup } from './components/signup.jsx';
import { Login } from './components/login.jsx';
import { Provider } from 'react-redux';
import { store } from './components/store.jsx';
import { Fevorate } from './components/favorate/favorate.jsx';
import { Cart } from './components/Cart/cart.jsx';
import { About } from './components/About/about.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='/' element={<Home />} />
    <Route path='signup' element={<Signup />} />
    <Route path='/signup/login' element={<Login />} />
    <Route path='fev' element={<Fevorate />} />
    <Route path='cart' element={<Cart />} />
    <Route path='about' element={<About />} />
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>


    </ThemeProvider>

  </StrictMode>,
)
