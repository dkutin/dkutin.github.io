import Home from './pages/Home.mdx';
import './App.css'

const App = () => {
  const components = {
    em(properties: any) {
      return <i {...properties} />
    }
  }

  return (
    <Home components={components} />
  )
}

export default App
