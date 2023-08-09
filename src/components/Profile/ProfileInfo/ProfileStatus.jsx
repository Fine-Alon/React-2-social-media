import React from 'react'
import login from "../../Login/Login";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusText: this.props.userStatus,
    }
    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        console.log('1:', this.props.userStatus)
        this.setState({
                editMode: false,
            },
            () => {
                this.props.updateStatus(this.state.statusText)
                console.log('2:', this.props.userStatus)
            },
        )
    }
    onStatusChange = (e) => {
        this.setState({
                statusText: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userStatus !== prevProps.userStatus) {
            this.setState({
                statusText: this.props.userStatus,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input type="text" autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.statusText}
                               onChange={this.onStatusChange}
                        />
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.userStatus || '-----'}
                        </span>
                    </div>
                }
            </div>

        )
    }
}


/*
*
 type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileStatus = (props: PropsType) => {

    const [title, setTitle] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const onEditMode = () => setEditMode(true)

    const offEditMode = () => {
        props.updateUserStatus(title)
        setEditMode(false)
    }

    useEffect(() => {
        setTitle(props.status)
    }, [props.status])

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <div>
            {editMode
                ? <input autoFocus onBlur={offEditMode} onChange={onChangeSetTitle} value={title}/>
                : <span onDoubleClick={onEditMode}>{title || 'no status'}</span>
            }
        </div>
    )
}
* */


export default ProfileStatus;