import React, { useState, useEffect } from 'react'

const DateTime = () => {
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div className="date-time">
      <span className="date-time__hours">{date.getHours() % 12}</span>
      <span>:</span>
      <span className="date-time__minutes">{date.getMinutes()}</span>
      <span className="date-time__unit">{date.getHours() > 12 ? 'PM' : 'AM'}</span>
      <span className="date-time__date"> {date.toLocaleDateString()}</span>
    </div>
  )
}

export default DateTime
