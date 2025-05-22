import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import ProductList from './components/ProductList'

const App = () => {
  const [count, setCount] = useState<number>(0)
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>add</button>
      <Profile firstname='Gustavo' lastname='Barros' />
      <ProductList />
    </div>
  )
}

export default App