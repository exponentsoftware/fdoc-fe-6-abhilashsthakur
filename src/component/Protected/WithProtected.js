import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function WithProtected({ component: Component, ...rest }) {
    const isAuth = false;
    return (
        <Route
            {...rest}
            render={props => (!isAuth)
                ? (<Component {...props} />)

                : <Redirect to={{ pathname: '/' }} />
            }

        />
    );
}

export default WithProtected;
