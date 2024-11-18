import axios from "axios";
import { AuthenticationAPIS } from "../../apis/authentication-apis";

const login = (username: String, password: String) => {
    return axios.post(AuthenticationAPIS.checkAuthentication, {
        username,
        password
    })
}
    
const AuthenticatedService = {login};

export default AuthenticatedService;