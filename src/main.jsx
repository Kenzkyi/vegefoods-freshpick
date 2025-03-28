import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import {store} from './global/store.js'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import {store} from './global/store.js'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <ToastContainer/>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StrictMode>,
  </Provider>

)
