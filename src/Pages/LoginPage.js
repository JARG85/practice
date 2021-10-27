import {useLocation} from 'react-router-dom'
import useAuth  from '../Auth/useAuth'

export const LoginPage = () => {

    const location = useLocation();

    const userCredentials = {};
    const {login} = useAuth();

    return (
        <div>
            <h1>Login page</h1>
            <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar Sesion</button>
        </div>
    )
}
