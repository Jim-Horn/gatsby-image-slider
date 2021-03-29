import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../styles/carousel-style.css';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled, { createGlobalStyle } from 'styled-components';

const GetMyImage = (edge) => (
    <div>
        <GatsbyImage image={getImage(edge.node.gatsbyImageData)} alt="" />
        <p className="legend">{edge.node.original.src}</p>
    </div>
);

const GlobalStyles = createGlobalStyle`
  body {
   min-height: 100vh;
    font-family: Open-Sans, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SlideshowWrapper = styled.div`
    background: #ccc;
    width: 960px;
`;

const Code = styled.pre`
    color: darkgreen;
`;

const IndexPage = ({ data }) => (
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

        <SlideshowWrapper>
            <Carousel
                interval={5000}
                showArrows={true}
                onChange={() => {}}
                onClickItem={() => {}}
                onClickThumb={() => {}}
                infiniteLoop={true}
                showStatus={false}
                stopOnHover={true}
                swipeable={true}
                showThumbs={false}
                useKeyboardArrows={true}
                autoPlay={true}
                dynamicHeight={true}
                emulateTouch={true}
                autoFocus={true}>
                {data.allImageSharp.edges.filter((edge) => edge.node.original.src.endsWith('.jpeg')).map(GetMyImage)}
            </Carousel>
        </SlideshowWrapper>

        <h2>Source:</h2>

        <Code>{`
<Carousel
    interval={5000}
    showArrows={true}
    onChange={() => {}}
    onClickItem={() => {}}
    onClickThumb={() => {}}
    infiniteLoop={true}
    showStatus={false}
    stopOnHover={true}
    swipeable={true}
    showThumbs={false}
    useKeyboardArrows={true}
    autoPlay={true}
    dynamicHeight={true}
    emulateTouch={true}
    autoFocus={true}>
    {data.allImageSharp.edges.filter(edge => edge.node.original.src.endsWith('.jpeg')).map(GetMyImage)}
</Carousel>`}</Code>

        <Code>{`
const GetMyImage = edge => (
    <div>
        <GatsbyImage image={getImage(edge.node.gatsbyImageData)} alt="" />
        <p className="legend">{edge.node.original.src}</p>
    </div>
);`}</Code>

    </>
);

export default IndexPage;

export const pageQuery = graphql`
    query {
        allImageSharp {
            edges {
                node {
                    gatsbyImageData(width: 960, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    original {
                        src
                    }
                }
            }
        }
    }
`;
