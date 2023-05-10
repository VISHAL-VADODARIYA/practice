import React, { useState } from 'react'
import Form from "./form"

export default function Staff() {
    const [createFlag, setCreateFlag] = useState(false)
    const [updateFlag, setUpdateFlag] = useState(false)
    const [deleteFlag, setDeleteFlag] = useState(false)
    return (
        <div>
            <button onClick={() => { setCreateFlag(true); setUpdateFlag(false); setDeleteFlag(false) }}>create</button>
            
            <button onClick={() => { setUpdateFlag(true); setDeleteFlag(false); setCreateFlag(false)  }}>update</button>
            
            <button onClick={() => { setDeleteFlag(true); setUpdateFlag(false); setCreateFlag(false) }}>delete</button>
            

            <div>
                {createFlag && <Form d='create form'/>}
                {updateFlag && <Form d='update form' />}
                {deleteFlag && <Form d='delete form' />}
            </div>
        </div>
    )
}
