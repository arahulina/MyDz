import React from "react"
import FormSignUp from "../components/Forms/Auth/FormSignUp";


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
                <FormSignUp></FormSignUp>
            </>
        )
    }


}

export default AuthPage;