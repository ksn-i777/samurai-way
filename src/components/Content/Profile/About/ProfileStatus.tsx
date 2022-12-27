import React from "react"
import s from './About.module.css'

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        value: 'blabla'
    }

    activateEditMode = () => {
        console.log(this.state.editMode)
        this.setState({editMode: true})
        console.log(this.state.editMode)
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return this.state.editMode
            ? <input onBlur={this.deactivateEditMode} className={s.statusInput} defaultValue={this.state.value} autoFocus/>
            : <span onDoubleClick={this.activateEditMode} className={s.statusSpan}>{this.state.value}</span>
    }
}