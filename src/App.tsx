import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />, // Componente de prueba para la página principal
    children: [
      {
        // path: "dashboard",
        // element: <Login />,
      }
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
