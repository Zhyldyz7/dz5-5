import { useState, useCallback } from 'react'
import ChildButton from './ChildButton'

function Counter() {
  const [count, setCount] = useState(0)

  console.log('Counter rendered', count)

  const handleClick = useCallback(() => {
    console.log('handleClick called')
    alert('Кнопка нажата!')
  }, [])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить счётчик
      </button>
      <div style={{ marginTop: '10px' }}>
        <ChildButton onClick={handleClick} label="Кнопка" />
      </div>
    </div>
  )
}

export default Counter

