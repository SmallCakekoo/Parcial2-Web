import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
import App from "./App.tsx";
// import { AppContextProvider } from './context/AppContext.tsx';
import "./index.css";
// import { storeRedux } from './store/store.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider store={storeRedux}>
			<AppContextProvider> */}
      <App />
      {/* </AppContextProvider>
		</Provider> */}
    </BrowserRouter>
  </StrictMode>,
);
