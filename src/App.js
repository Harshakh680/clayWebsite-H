import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './Pages/Home/Home.jsx'
import { Route,createBrowserRouter, createRoutesFromElements,RouterProvider  } from 'react-router-dom';
import Mainlayout from './MainLayout/mainlayout.jsx';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
);
function App() {
  return< RouterProvider router={router}/>;
};

export default App;
