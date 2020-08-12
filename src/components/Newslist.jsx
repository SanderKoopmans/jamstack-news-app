import React from 'react';

function Newslist() {
  fetch('../../mockData.json')
    .then(res => res.json())
    .then(data => console.log(data));

  return (
    <div className="newslist">
      <h1>Newslist</h1>
    </div>
  );
}

export default Newslist;
