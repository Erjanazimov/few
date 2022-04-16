import React from 'react';
import {Link} from "react-router-dom";
import {RightCircleFilled} from "@ant-design/icons";
import bem from "easy-bem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselImages = ({title, data}) => {
    const b = bem("scroll");
    const btnInfo = () => {
        
    }
    return (
        <div className={b("container")}>
            <div className="text-font">
                <h2>
                    <Link to="/new">
                        <p>{title}</p> <p className="mx"><RightCircleFilled /> </p>
                    </Link>
                </h2>
            </div>
            <div></div>
            <div>
                {data.length ?
                    <Carousel
                        // showDots={true}
                        responsive={responsive}>
                        {data.map(item => <div onClick={btnInfo}>
                            <div className={b("carousel_img")}>
                            <img src={item.poster_link}/> </div>
                            </div>)}

                    </Carousel> : <div className="d-flex justify-content-center">
                        <div className="spinner-border text-light  mt-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default CarouselImages;