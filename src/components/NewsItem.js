import React from 'react';
import styled from 'styled-components';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className='thumbnail'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <img src={urlToImage} alt='thumbnail' />
          </a>
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin: 0 1rem 0 0;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;

      a {
        color: black;
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin: 0.5rem 0 0 0;
      white-space: normal;
    }
  }
  & + & {
    margin: 3rem 0 0 0;
  }
`;

export default NewsItem;
