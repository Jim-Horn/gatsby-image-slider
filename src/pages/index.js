import * as React from 'react';
import { graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { ImageCarousel } from '../components/ImageCarousel';

const GlobalStyles = createGlobalStyle`
  body {
   min-height: 100vh;
    font-family: Open-Sans, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IndexPage = ({ data }) => {
    return (
        <>
            <GlobalStyles />
            <h1>Slide Show POC</h1>
            <p>
                <ul>
                    <li>
                        View online:
                        <a href="https://gatsbyimageslider.gatsbyjs.io">https://gatsbyimageslider.gatsbyjs.io/</a>
                    </li>
                    <li>
                        Git repo:
                        <a href="https://github.com/Jim-Horn/gatsby-image-slider">
                            https://github.com/Jim-Horn/gatsby-image-slider
                        </a>
                    </li>
                </ul>
            </p>
            <ImageCarousel data={data} />
        </>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        allImageSharp {
            edges {
                node {
                    gatsbyImageData(width: 468, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    original {
                        src
                    }
                }
            }
        }
    }
`;
