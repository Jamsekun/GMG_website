import ReactDOM from "react-dom/client";
import "../tailwind.css";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import router from "./app/router";
import { store, persistedStore } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </ReduxProvider>
);


//Uncomment if want to use App.tsx
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );