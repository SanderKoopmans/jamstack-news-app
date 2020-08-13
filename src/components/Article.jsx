import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  const { title, description } = props;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{description}</p>
        {/* <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a> */}
      </div>
    </div>
  );
}
Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Article.defaultProps = {
  title: 'Hello World',
  description: 'Saying hello to the world',
};

export default Article;
