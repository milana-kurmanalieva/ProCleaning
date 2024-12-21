import ReactDOM from 'react-dom/client'
import App from './app/index.jsx'
import './app/style/global.scss'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
