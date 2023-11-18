import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="mx-auto bg-white dark:bg-slate-800">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
