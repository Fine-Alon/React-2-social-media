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
        <div style={{paddingBottom:'15px'}}>
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
                        <span onDoubleClick={activateEditMode}>
                            {props.userStatus || '-----***'}
                        </span>
                </div>
            }
        </div>

    )
}

export default ProfileStatusHooks;