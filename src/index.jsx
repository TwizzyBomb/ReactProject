import ReactDOM from "react-dom/client"; // react app boots up and renders app component. 

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
