import React from "react";

class AnraInputPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: []
        }
    }

    onChange(ev){
        this.checkValid(ev)
        if(this.props.onChange){
            this.props.onChange(ev)
        }
    }

    checkValid(ev){
        let pass = ev.target.value
        //console.log(pass);
        let err = []
        //Регулярний вираз на наявність цифр
        let isNum = /\d{1,}/
        //Регулярний вираз на наявність великих літер
        let isUpper = /.*[A-Z].*/
        //Регулярний вираз на наявність маленьких літер
        let isLower = /.*[a-z].*/

        if(pass.length < 8) {
            err.push('Пароль повинен бути довшим 8 символів')
        }
        if(!isNum.test(pass)){
            err.push('Пароль повинен містити цифри')
        }
        if(!isUpper.test(pass)){
            err.push('Пароль повинен містити великі літери')
        }
        if(!isLower.test(pass)){
            err.push('Пароль повинен містити маленькі літери')
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
                <input type="password" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}
export default AnraInputPassword;