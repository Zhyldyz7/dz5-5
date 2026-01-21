import { useState, useMemo, useCallback } from 'react'

const initialUsers = [
  { id: 1, name: 'Акылай' },
  { id: 2, name: 'Жылдыз' },
  { id: 3, name: 'Милана' },
  { id: 4, name: 'Актан' },
  { id: 5, name: 'Сергей' },
]

function FilteredList() {
  const [users, setUsers] = useState(initialUsers)
  const [filter, setFilter] = useState('')
  const [nextId, setNextId] = useState(6)

  console.log('FilteredList rendered', { usersCount: users.length, filter })

  const filteredUsers = useMemo(() => {
    console.log('Filtering users...', filter)
    if (!filter.trim()) {
      return users
    }
    return users.filter(user => 
      user.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [users, filter])

  const handleAddUser = useCallback(() => {
    console.log('handleAddUser called')
    const name = `User${nextId}`
    setUsers(prevUsers => [...prevUsers, { id: nextId, name }])
    setNextId(prev => prev + 1)
  }, [nextId])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Фильтр по имени..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '8px', width: '200px', marginRight: '10px' }}
        />
        <button onClick={handleAddUser} style={{ padding: '8px 16px' }}>
          Добавить пользователя
        </button>
      </div>

      <div>
        <h3>Найденные пользователи ({filteredUsers.length}):</h3>
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilteredList

