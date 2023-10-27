import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useRef, useEffect } from 'react';
import { IKImage } from 'imagekitio-react';
import "./ImageSlider.css"
import '@splidejs/splide/dist/css/splide.min.css';

const ImageSlider = (props) => {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, []);




    const mainOptions = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        height: 'auto',
    };

    const thumbsOptions = {
        type: 'slide',
        rewind: true,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true,
    };

    return (
        <div className="wrapper">
            <Splide options={mainOptions} ref={mainRef} aria-labelledby="thumbnail-slider-example">


                {Array.from(Array(20), (e, i) => {
                    return (<SplideSlide key={`https://ik.imagekit.io/GORP/${i === 0 ? `/${props.brand}/${props.model.split(' ').join('_')}/${props.model.split(' ').join('_')}.jpg` : `/${props.brand}/${props.model.split(' ').join('_')}/Exterior/car${i + 1}.jpg`}`}>
                        <IKImage className='w-100' publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                            urlEndpoint="https://ik.imagekit.io/GORP"
                            transformationPosition="path" onError={(e) => e.target.parentElement.remove()} path={`${i === 0 ? `/${props.brand}/${props.model.split(' ').join('_')}/${props.model.split(' ').join('_')}.jpg` : `/${props.brand}/${props.model.split(' ').join('_')}/Exterior/car${i + 1}.jpg`}`} />

                    </SplideSlide>)
                })}



                {Array.from(Array(20), (e, i) => {
                    return (<SplideSlide key={`https://ik.imagekit.io/GORP/${i === 0 ? `/${props.brand}/${props.model.split(' ').join('_')}/${props.model.split(' ').join('_')}.jpg` : `/${props.brand}/${props.model.split(' ').join('_')}/Interior/car${i + 1}.jpg`}`}>
                        <IKImage publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                            urlEndpoint="https://ik.imagekit.io/GORP"
                            transformationPosition="path" onError={(e) => e.target.parentElement.remove()} path={`./assets/car_images/${props.brand}/${props.model.split(' ').join('_')}/Interior/car${i + 1}.jpg`} />

                    </SplideSlide>)
                })}



            </Splide>

            <Splide
                options={thumbsOptions}
                ref={thumbsRef} // Use "as" to assert the type.
                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
            >


                {Array.from(Array(20), (e, i) => {
                    return (<SplideSlide key={`https://ik.imagekit.io/GORP/${i === 0 ? `/${props.brand}/${props.model.split(' ').join('_')}/${props.model.split(' ').join('_')}.jpg` : `/${props.brand}/${props.model.split(' ').join('_')}/Exterior/car${i + 1}.jpg`}`}>
                        <IKImage className='w-100' publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                            urlEndpoint="https://ik.imagekit.io/GORP"
                            transformationPosition="path" onError={(e) => e.target.parentElement.remove()} path={`${i === 0 ? `/${props.brand}/${props.model.split(' ').join('_')}/${props.model.split(' ').join('_')}.jpg` : `/${props.brand}/${props.model.split(' ').join('_')}/Exterior/car${i + 1}.jpg`}`} />

                    </SplideSlide>)
                })}



                {Array.from(Array(20), (e, i) => {
                    return (<SplideSlide key={`https://ik.imagekit.io/GORP/${i === 0 ? `/${props.brand}/${props.model.split(' ').join('_')}/${props.model.split(' ').join('_')}.jpg` : `/${props.brand}/${props.model.split(' ').join('_')}/Interior/car${i + 1}.jpg`}`}>
                        <IKImage publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                            urlEndpoint="https://ik.imagekit.io/GORP"
                            transformationPosition="path" onError={(e) => e.target.parentElement.remove()} path={`./assets/car_images/${props.brand}/${props.model.split(' ').join('_')}/Interior/car${i + 1}.jpg`} />

                    </SplideSlide>)
                })}
            </Splide>
        </div>
    );
};

export default ImageSlider;
