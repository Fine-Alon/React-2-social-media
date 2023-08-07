import React from 'react'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'eee'
    }

    activateEditMode() {
        this.setState({
                editMode: true
            }
        )

    }

    render() {
        return (
            <div>
                {
                    this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.status}/>
                    </div>
                }
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>
                            {this.props.status}
                        </span>
                    </div>
                }
            </div>

        )
    }
}


export default ProfileStatus;