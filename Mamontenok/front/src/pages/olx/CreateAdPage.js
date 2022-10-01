import CreateAd from "../../components/olx/CreateAd";
import {useNavigate} from "react-router-dom";
import {useEffect} from "@types/react";

export default function CreateAdPage(){

    const OnSubmit = function () {
        let navigate = useNavigate();
        useEffect(() => {
            if(localStorage.getItem('jwtToken') === null) {
                return navigate("/login");
            } else {
                <CreateAd></CreateAd>
            }
        },[]);
    }

    return (
        <>
            <div className="m-lg-auto">
                <button type="submit" onClick={OnSubmit}></button>
            </div>
        </>
    )
}