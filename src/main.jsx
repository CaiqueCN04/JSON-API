import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routers/Home.jsx';
import Error from './routers/Error.jsx'
import Cliente from './routers/Cliente.jsx'
//importando o css geral vai aplicar em todos os componentes 
import GlobalStyle from './css/estiloGlobal.jsx'




const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/cliente', element: <Cliente />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
    {/*importando o componete style geral */}
      <GlobalStyle/>

  </>,
);
