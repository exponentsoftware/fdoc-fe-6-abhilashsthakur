import React from 'react';

function PlayListUI({ id }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Album</th>
          <th>Artist</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>Doe</td>
          <td><button type="submit" onClick={() => alert("Remove")}>Remove</button></td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>

  )
}

export default PlayListUI;
