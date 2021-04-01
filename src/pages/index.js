import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../styles/carousel-style.scss';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GetMyImage = (edge) => (
    <div className="slide-wrap">
        <div className="slide-wrap-inner">
            <GatsbyImage image={getImage(edge.node.gatsbyImageData)} alt="" />
            <p className="legend">
                Every day our team of 10,000 Experts helps nearly 300 million people around the world solve the most
                common and uncommon tech issues. We’re just a call, tap, click or visit away. Contact us for help.
            </p>
        </div>
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

const IndexPage = ({ data }) => {
    const allEdges = data.allImageSharp.edges.filter((edge) => edge.node.original.src.endsWith('.jpeg'));
    const showLength = allEdges.length;
    const [current, setCurrent] = useState(0);
    return (
        <>
            <GlobalStyles />
            <h1>Slide Show POC</h1>
            <code>
                {showLength} ({current + 1})
            </code>
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
            <div className="outer-slideshow">
                <span className="control left" onClick={() => setCurrent((current - 1 + showLength) % showLength)}>
                    L
                </span>
                <div className="slideshow-wrapper">
                    <Carousel
                        autoPlay={false}
                        centerMode={true}
                        dynamicHeight={false}
                        emulateTouch={false}
                        infiniteLoop={true}
                        interval={5000}
                        onChange={(curr) => {
                            setCurrent(curr);
                        }}
                        onClickItem={(curr) => {
                            setCurrent(curr);
                        }}
                        onClickThumb={() => {}}
                        showArrows={false}
                        showStatus={true}
                        showThumbs={false}
                        stopOnHover={true}
                        swipeable={true}
                        useKeyboardArrows={true}
                        selectedItem={current}>
                        {allEdges.map(GetMyImage)}
                    </Carousel>
                </div>
                <span className="control right" onClick={() => setCurrent((current + 1) % showLength)}>
                    R
                </span>
            </div>
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
