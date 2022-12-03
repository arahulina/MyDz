
import FormRegistration from "../components/auth/forms/FormRegistration";
import {Link} from "react-router-dom";

function RegistrationPage(){

    return(
        <>
            <section>
                <div>
                    <FormRegistration></FormRegistration>
                </div>
                <div>
                    <p>У Вас вже є акаунт?</p>
                    <button type="button"><Link to="/login">Увійти</Link></button>
                </div>
            </section>
        </>
    )

}

export default RegistrationPage;