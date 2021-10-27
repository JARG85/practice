import {Redirect, Route} from 'react-router-dom';
import  useAuth  from '../Auth/useAuth';

export default function PublicRoute (props)  {
    const {isLogged} = useAuth();
    if(isLogged()) return <Redirect to='/projects'/>
    return (
        <Route {...props}/>
    )
}
