import React from 'react';
import { Switch,Route } from 'react-router-dom';

import ViewAlbum from '../ViewAlbum/ViewAlbum'
import AddAlbum from '../addAlbum/AddAlbum';
import Playlist from '../playList/PlayList';

import WithProtected from '../Protected/WithProtected';

function MyRoute() {
    return (
        <Switch>
            <Route exact path="/" component={ViewAlbum} />
            <Route exact path="/viewalbums" component={ViewAlbum} />
            <WithProtected exact path="/addalbum" component={AddAlbum}/>
            <Route  path={"/:id"}  component={Playlist}/>  
          </Switch>

    );
}

export default MyRoute
