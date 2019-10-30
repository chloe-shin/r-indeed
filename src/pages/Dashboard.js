import React from 'react'

export default function Dashboard(props) {
    console.log ('dashboard current user', props.currentUser)
    return (
        <div>
          <input type="text"/>
          <button> search</button>
        </div>
    )
}
