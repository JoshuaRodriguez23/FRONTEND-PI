import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>, // Componente de prueba para la página principal
    children: [
      {
        // path: "dashboard",
        // element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
