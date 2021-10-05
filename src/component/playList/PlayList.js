import React from 'react';
import { useParams } from 'react-router-dom';
import PlayListUI from './PlayListUI';

function PlayList() {
  const { id } = useParams();
console.log(id)
  // fetch the user for playlist
  return (

    <PlayListUI key={id} id={id} />
  );
}

export default PlayList;
