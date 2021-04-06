import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import right from './images/right.svg';
import left from './images/left.svg';
import './image-carousel.scss';

const GetImage = (edge) => (
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

export const ImageCarousel = ({ data }) => {
    const allEdges = data.allImageSharp.edges.filter((edge) => edge.node.original.src.endsWith('.jpeg'));
    const showLength = allEdges.length;
    const [current, setCurrent] = useState(0);
    const getPrev = () => setCurrent((current - 1 + showLength) % showLength);
    const getNext = () => setCurrent((current + 1) % showLength);
    return (
        <div className="outer-slideshow">
            <span className="control left" onClick={getPrev}>
                <img src={left} alt="" />
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
                    showStatus={false}
                    showThumbs={false}
                    stopOnHover={true}
                    swipeable={true}
                    useKeyboardArrows={true}
                    selectedItem={current}>
                    {allEdges.map(GetImage)}
                </Carousel>
            </div>
            <span className="control right" onClick={getNext}>
                <img src={right} alt="" />
            </span>
        </div>
    );
};
