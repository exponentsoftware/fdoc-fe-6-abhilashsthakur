import React from 'react';
import { Button } from 'react-bootstrap';

function AddAlbumUI({handleChange,handleSubmit}) {

    return (

        <div className="container ml-3 mt-5 d-flex flex-wrap">
            <div className="row">
                <div className="col-md">

                    <label htmlFor="Album">Album</label>

                    <input type="text" name="album" className="form-control"
                        id="formGroupExampleInput" onChange={handleChange} placeholder="Example input" />

                </div>
                <div className="col-md">
                    <label htmlFor="artist">Artist</label>

                    <input type="text" name="artist" className="form-control"
                        id="formGroupExampleInput" onChange={handleChange} placeholder='Artist Name' />
                </div>
                <div className="col-sm">

                </div>
                <hr />
                <div className="row">
                    <Button onClick={handleSubmit}>Add</Button>
                </div>
            </div>
        </div>

    );
}

export default AddAlbumUI;
