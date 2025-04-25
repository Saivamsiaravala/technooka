import { StrictMode } from "react";
import "./styles/styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import FeesCreation from "./Pages/FeesCreation.tsx";
import Program from "./Pages/Program.tsx";
import Bos from "./Pages/Bos.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import FormComponent from "./Components/FormComponent.tsx";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<FeesCreation />}>
        <Route path="" index element={<FormComponent />} />
        <Route path="sem-two" element={<FormComponent />} />
        <Route path="sem-three" element={<FormComponent />} />
        <Route path="sem-four" element={<FormComponent />} />
        <Route path="sem-five" element={<FormComponent />} />
        <Route path="sem-six" element={<FormComponent />} />
        <Route path="sem-seven" element={<FormComponent />} />
        <Route path="sem-eight" element={<FormComponent />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bos" element={<Bos />} />
      <Route path="program" element={<Program />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
