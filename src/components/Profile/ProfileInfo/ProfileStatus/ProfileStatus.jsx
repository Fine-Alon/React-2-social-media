import React from 'react'

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

export default ProfileStatus;