import React from "react";
import AppRoutes from "./routes/AppRoutes";
import AppContextProvider from "./context/AppContextProvider";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </div>
  );
}
export default App;
