import React from "react";
import AnraInputEmail from "../../UI/Forms/Inputs/AnraInputEmail";
import AnraInputSubmit from "../../UI/Forms/Inputs/AnraInputSubmit";
import AnraInputPassword from "../../UI/Forms/Inputs/AnraInputPassword";


class FormSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: [],
            p: '',
            cp: ''
        }
    }

    onPasswordChange(ev){
        let oldState = this.state;
        oldState.p = ev.target.value;
        this.setState(oldState);
        this.validate()
    }

    onPasswordConfirmChange(ev){
        let oldState = this.state;
        oldState.cp = ev.target.value;
        this.setState(oldState);
        this.validate()
    }

    validate(){
        let err = []
        if (this.state.p !== this.state.cp) {
            err.push('Паролі не співпадають')
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


        return (
            <>
                <AnraInputEmail label="Email: "></AnraInputEmail>
                <AnraInputPassword label="Пароль: " onChange={this.onPasswordChange.bind(this)}></AnraInputPassword>
                <AnraInputPassword label="Повторите пароль: " onChange={this.onPasswordConfirmChange.bind(this)}></AnraInputPassword>
                {err}
                <AnraInputSubmit></AnraInputSubmit>
            </>
        )
    }
}
export default FormSignUp;
