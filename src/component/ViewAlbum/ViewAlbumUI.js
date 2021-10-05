import React from 'react';
import { Link } from 'react-router-dom';

function ViewAlbumUI({ id, album }) {
    return (
        <div>
            <div className="card" style={{ width: "18rem", top: "2rem" }}>
                <img className="card-img-top" alt='' src={"https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg"}/>
                <div className="card-body">
                    <h5 className="card-title">Title : {album}</h5>
                    <p className="card-text">Artist : {id}</p>
                    <Link to={`${id}`} className="btn btn-primary">Go somewhere</Link>

                </div>
            </div>
        </div>
    );
}

export default ViewAlbumUI;
