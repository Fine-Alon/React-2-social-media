import React, {useState} from 'react'

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [statusText, setStatusText] = useState(props.userStatus)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(statusText)
    }
    const onStatusChange = (e) => {
        setStatusText(e.currentTarget.value)
    }
    return (
        <>
            <div style={{paddingBottom: '15px',display:'flex'}}>
                <b style={{paddingRight: '7px'}}>Status:</b>
                {editMode &&
                    <div>
                        <input type="text" autoFocus={true}
                               onBlur={deactivateEditMode}
                               value={statusText}
                               onChange={onStatusChange}
                        />
                    </div>}
                {!editMode &&
                    <div>
                        <span style={{cursor: 'pointer'}} onDoubleClick={activateEditMode}>
                            {props.userStatus || '-----***'}
                        </span>
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatusHooks;