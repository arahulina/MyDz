import React from "react";

class AnraInputEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: []
        }
    }

    onChange(ev){
        this.emailValid(ev)
        if(this.props.onChange){
            this.props.onChange(ev)
        }
    }

    emailValid(ev){
        let email = ev.target.value
        //console.log(pass);
        let err = []
        //Регулярний вираз на відповідність формату
        let isRe = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        if(!isRe.test(email)){
            err.push('Email не відповідає формату')
        }

        let oldState = this.state;
        if(err.length > 0) {
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
        console.log(err)
    }

    render() {
        let err = ''
        if(!this.state.isValid) {
            err = (
                <ul>
                    { this.state.err.map( e => {
                        return(
                            <li> {e} </li>
                        )
                    })}
                </ul>
            )
        }

        let label = ''

        if (this.props.label){
            label = (<label>{this.props.label}</label>)
        }

        return (
            <div>
                {label}
                <input type="email" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}
export default AnraInputEmail;