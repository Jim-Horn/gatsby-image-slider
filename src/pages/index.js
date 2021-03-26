import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../images/style.css';
import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/5.jpeg';
import img6 from '../images/6.jpeg';

const IndexPage = () => (
    <>
        <h1>Welcome...</h1>
        <Carousel
            interval={12500}
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
            <div>
                <img src={img1} alt="" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} alt="" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={img4} alt="" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src={img5} alt="" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src={img6} alt="" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    </>
);

export default IndexPage;
