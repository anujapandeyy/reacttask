import React from 'react'

function TodoElements(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className="deletebtn"><i className="fa-solid fa-delete-left"onClick={e=> {
            props.itemDelete(props.index) } }>
            </i></span>
    </li>
  )
}

export default TodoElements
