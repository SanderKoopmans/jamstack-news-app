import React from 'react';

function Article(props) {
  // const { title } = props.title;
  // const { description } = props.description;

  return (
    <div className="Article">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
