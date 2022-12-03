import FormLogin from "../components/auth/forms/FormLogin";
import {Link} from "react-router-dom";

function LoginPage(){

    return(
        <>
            <section>
                <div>
                    <FormLogin></FormLogin>
                </div>
                <div>
                    <p>У Вас немає акаунта?</p>
                    <button type="button"><Link to="/registration">Зареєструватися</Link></button>
                </div>
            </section>
        </>
    )

}

export default LoginPage;