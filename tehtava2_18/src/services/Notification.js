import React from 'react'

const Notification = ({ message }) => {
  if (message === "") {
    return <div className= "none"> </div>
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

export default Notification