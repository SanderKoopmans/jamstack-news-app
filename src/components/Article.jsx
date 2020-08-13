import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  const { title, description } = props;

  return (
    <div className="Article">
      <h2>{title}</h2>
      <p>{description}</p>
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
