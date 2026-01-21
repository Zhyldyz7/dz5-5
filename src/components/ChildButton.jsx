import { memo } from 'react'

const ChildButton = memo(({ onClick, label }) => {
  console.log('ChildButton rendered', label)

  return (
    <button onClick={onClick} style={{ padding: '8px 16px' }}>
      {label}
    </button>
  )
})

ChildButton.displayName = 'ChildButton'

export default ChildButton

