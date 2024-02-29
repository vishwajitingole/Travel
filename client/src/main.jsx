import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./context/category_context.jsx";
import { DateProvider } from "./context/date_context.jsx";
import { AuthProvider } from "./context/auth_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <DateProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </DateProvider>
  </CategoryProvider>
);
