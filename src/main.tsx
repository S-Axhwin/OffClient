import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { Provider } from 'react-redux'
import store from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
  </Provider>
  
)
