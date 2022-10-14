import logo from './logo.svg';
import './App.css';
import Main from './components/layout/Main';
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Order from './components/Order/Order';
import About from './components/About/About';
import Grandpa from './components/grandpa/Grandpa';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
      {path:'/*',element:<Home></Home>},
      {path:'/home',loader:()=>fetch('tshirt.json'),
      element:<Home></Home>},
      {path:'/order',element:<Order></Order>},
      {path:'/about',element:<About></About>},
      {path:'/grand',element:<Grandpa></Grandpa>}
    ]
  }
  ])
  return (
    <div className="App">
  
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
