import {Switch, Route} from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage'
import { Register } from '../Pages/Register'
import { Account } from '../Pages/Account'
import { ProjectPage } from '../Pages/ProjectPage'
import { ProjectsPages } from '../Pages/ProjectsPages'
import {UsersPage} from '../Pages/admin/UsersPage'
import { NotFoundPage } from '../Pages/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../helpers/roles'
import routes from '../helpers/routes'


export default function AppRouter() {
    return(
            
                <Switch>
                    <PublicRoute exact path={routes.home} component={HomePage}/>
                    <PublicRoute exact path={routes.login} component={LoginPage}/>
                    <PublicRoute exact path={routes.register} component={Register}/>
                    <PrivateRoute exact path={routes.account} component={Account}/>
                    <PrivateRoute exact path={routes.projects} component={ProjectsPages}/>
                    <PrivateRoute exact path={routes.project()} componenet={ProjectPage}/>
                    <PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UsersPage}/>

                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            
    )
}