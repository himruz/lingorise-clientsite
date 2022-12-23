
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/survey', element: <Survey />}

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
