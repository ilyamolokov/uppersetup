import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import Provider from './provider'

import './globals.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider>
    <App />
  </Provider>,
)
