import React, {useState} from 'react';


function Addtask(props) {
  const [AddText,setAddText]=useState('');
  return (
    <div className='input'>
    <input type="text" className="add-task" placeholder="Add to your misery" value={AddText} onChange={e=> {
      setAddText(e.target.value)
    }}></input>
    <br />
    <button className ="additem" onClick={()=>{
      props.listInput(AddText)
      //to clear the input box
      setAddText("")
    }}>Add item</button>

    </div>
    
  )
}

export default Addtask
