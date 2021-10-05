import React, { useState } from 'react';
import axios from 'axios';
import AddAlbumUI from './AddAlbumUI';

function AddAlbum() {
    const [albumInfo, setAlbumInfo] = useState({
        artist: "",
        album: ""
    });
    // eslint-disable-next-line
    const [photo, setPhoto] = useState([]);

    //    const imageChange= (e) => setPhoto(e.target.files);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setAlbumInfo({ ...albumInfo, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8000/Albums`, albumInfo)
            .then(res => console.log(res.data["id"]));
    };

    return (<AddAlbumUI handleChange={handleChange} handleSubmit={handleSubmit} />);
}

export default AddAlbum;
