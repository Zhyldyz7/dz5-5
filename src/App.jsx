import Counter from './components/Counter'
import FilteredList from './components/FilteredList'

function App() {
  console.log('App rendered')

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Counter />
      <FilteredList />
    </div>
  )
}

export default App
