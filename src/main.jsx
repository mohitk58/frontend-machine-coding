import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Autocomplete from "./components/AutocompleteSearchbar.jsx";
import LoanCalculator from "./components/LoanCalculator.jsx";
import NestedCheckboxes from "./components/NestedCheckboxes.jsx";
import OtpInput from "./components/OtpInput.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // ✅ App is now your layout
    children: [
      {
        index: true, // default route
        element: <Autocomplete />,
      },
      {
        path: "loan-calculator",
        element: <LoanCalculator />,
      },
      {
        path: "nested-checkbox",
        element: <NestedCheckboxes />,
      },
      {
        path: "otp-input",
        element: <OtpInput />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
