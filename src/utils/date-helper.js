import React from 'react'

const LocalDate = props => {
  const { date } = props

  return (
    <time>
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  )
}

export default LocalDate