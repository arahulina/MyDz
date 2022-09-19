import React from "react"
import FormRegister from "../components/auth/Forms/FormRegister";
import FormLogin from "../components/auth/Forms/FormLogin";

class AuthPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/about-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 1s"
        document.getElementById("pageHeaderTitle").innerText = " Authorization"
        document.getElementById("pageHeaderSlogan").innerText = "You are one of us"
    }

    render() {
        return (
            <>
                <FormRegister></FormRegister>
                <hr/>
                <FormLogin></FormLogin>
            </>
        )
    }


}

export default AuthPage;