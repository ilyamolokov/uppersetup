import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default App
