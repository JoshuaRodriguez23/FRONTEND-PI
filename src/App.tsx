// import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from './pages/Login.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div/>}>
      <Route path="dashboard" element={<Login />} />
      {/* ... etc. */}
    </Route>
  )
);

  
function App() {
  return(
  <>
    <RouterProvider router={router} />  
  </>
  )
}

export default App;
