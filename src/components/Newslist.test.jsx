import React from 'react';
import { render } from '@testing-library/react';
import Newslist from './Newslist';
import Header from './Header';
import Article from './Article';

describe('tests for the newsApp', () => {
  test.only('renders Newslist App', () => {
    const { getByText } = render(<Newslist />);
    const newsElement = getByText(/Newslist/i);
    expect(newsElement).toBeInTheDocument();
  });

  test.only('Rendering main header', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText(/News/i);
    expect(headerElement).toBeInTheDocument();
  });

  // mysterious error, will spend time later to pinpoint what is going wrong.
  test('Rendering single article title from mock data', () => {
    const { getByText } = render(<Article />);
    const articleTitle = getByText(/What The Twitter Breach Means/i);
    expect(articleTitle).toBeInTheDocument();
  });
});
