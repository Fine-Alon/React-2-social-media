import React, {ChangeEvent} from 'react'


type PropsType = {
    userStatus: string
    updateStatus: (statusText:string) => void
}
type StateType = {
    editMode: boolean
    statusText: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

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
        this.setState({
                editMode: false,
            },
            () => {
                this.props.updateStatus(this.state.statusText)
            },
        )
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
                statusText: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps:PropsType, prevState:StateType, snapshot) {
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

export default ProfileStatus;