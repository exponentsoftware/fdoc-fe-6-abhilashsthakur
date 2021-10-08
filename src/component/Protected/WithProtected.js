import React,{useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

function WithProtected({ component: Component, ...rest }) {
    const [Auth,setAuth]=useState(true)
    const isAuth = Auth;
    return (
        <Route
            {...rest}
            render={props => (isAuth)
                ? (<Component {...props} />)

                : <Redirect to={{ pathname: '/register' }} />
            }

        />
    );
}

export default WithProtected;
