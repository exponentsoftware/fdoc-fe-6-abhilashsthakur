import React, { useEffect, useState } from 'react';
import ViewAlbumUI from './ViewAlbumUI';

import axios from 'axios';


function ViewAlbum() {

    const [state, setstate] = useState([]);

    const data = async (e) => {

        await axios.get(`http://localhost:8000/Albums`).then(res => setstate(res.data));
    };
    useEffect(() => {
        data()

    }, []);
    return (
        <>

            <div className=" ml-3 mt-5 d-flex flex-wrap" style={{ gap: "10px" }}>
                {
                    state.map(item => <ViewAlbumUI key={item.id} id={item.id} artist={item.artist} album={item.album} />)
                }

            </div>
        </>
    );
}

export default ViewAlbum;
