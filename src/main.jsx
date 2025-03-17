import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './global/store.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <ToastContainer/>
      <App />
    </StrictMode>,
  </Provider>

)
