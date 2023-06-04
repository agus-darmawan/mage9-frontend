"use client";
import React from 'react'
import Card from './Card'
import {CarouselData} from './Data'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import appdevLogo from "../../assets/images/carouselcard/app.svg"
import gamedevLogo from "../../assets/images/carouselcard/game.svg"
import iotLogo from "../../assets/images/carouselcard/iot.svg"
import roboticsLogo from "../../assets/images/carouselcard/robotics.svg"

export default function Carousel() {
  return (
    <div>
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-8 sm:py-8 px-4">
                <CarouselProvider className="hiden" naturalSlideWidth={100} isIntrinsicHeight={true} naturalSlideHeight={100}  totalSlides={8} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <Card 
                                            image={appdevLogo}
                                            title={CarouselData[0].title}
                                            description={CarouselData[0].description}
                                            link={CarouselData[0].link}
                                        />
                                    </Slide>
                                    <Slide index={1}>
                                        <Card
                                            image={gamedevLogo}
                                            title={CarouselData[1].title}
                                            description={CarouselData[1].description}
                                            link={CarouselData[1].link}
                                        />
                                    </Slide>
                                    <Slide index={2}>
                                        <Card
                                            image={iotLogo}
                                            title={CarouselData[2].title}
                                            description={CarouselData[2].description}
                                            link={CarouselData[2].link}
                                        />
                                    </Slide>
                                    <Slide index={3}>
                                        <Card
                                            image={roboticsLogo}
                                            title={CarouselData[3].title}
                                            description={CarouselData[3].description}
                                            link={CarouselData[3].link}
                                        />
                                    </Slide>
                                    <Slide index={4}>
                                        <Card 
                                            image={appdevLogo}
                                            title={CarouselData[0].title}
                                            description={CarouselData[0].description}
                                            link={CarouselData[0].link}
                                        />
                                    </Slide>
                                    <Slide index={5}>
                                        <Card
                                            image={gamedevLogo}
                                            title={CarouselData[1].title}
                                            description={CarouselData[1].description}
                                            link={CarouselData[1].link}
                                        />
                                    </Slide>
                                    <Slide index={6}>
                                        <Card
                                            image={iotLogo}
                                            title={CarouselData[2].title}
                                            description={CarouselData[2].description}
                                            link={CarouselData[2].link}
                                        />
                                    </Slide>
                                    <Slide index={7}>
                                        <Card
                                            image={roboticsLogo}
                                            title={CarouselData[3].title}
                                            description={CarouselData[3].description}
                                            link={CarouselData[3].link}
                                        />
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>  
                        </ButtonNext>
                    </div>
                </CarouselProvider>
                {/* MD DEVICE */}
                <CarouselProvider className="hidden" naturalSlideWidth={100} isIntrinsicHeight={true}  naturalSlideHeight={100}  totalSlides={8} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <Card 
                                            image={appdevLogo}
                                            title={CarouselData[0].title}
                                            description={CarouselData[0].description}
                                            link={CarouselData[0].link}
                                        />
                                    </Slide>
                                    <Slide index={1}>
                                        <Card
                                            image={gamedevLogo}
                                            title={CarouselData[1].title}
                                            description={CarouselData[1].description}
                                            link={CarouselData[1].link}
                                        />
                                    </Slide>
                                    <Slide index={2}>
                                        <Card
                                            image={iotLogo}
                                            title={CarouselData[2].title}
                                            description={CarouselData[2].description}
                                            link={CarouselData[2].link}
                                        />
                                    </Slide>
                                    <Slide index={3}>
                                        <Card
                                            image={roboticsLogo}
                                            title={CarouselData[3].title}
                                            description={CarouselData[3].description}
                                            link={CarouselData[3].link}
                                        />
                                    </Slide>
                                    <Slide index={4}>
                                        <Card 
                                            image={appdevLogo}
                                            title={CarouselData[0].title}
                                            description={CarouselData[0].description}
                                            link={CarouselData[0].link}
                                        />
                                    </Slide>
                                    <Slide index={5}>
                                        <Card
                                            image={gamedevLogo}
                                            title={CarouselData[1].title}
                                            description={CarouselData[1].description}
                                            link={CarouselData[1].link}
                                        />
                                    </Slide>
                                    <Slide index={6}>
                                        <Card
                                            image={iotLogo}
                                            title={CarouselData[2].title}
                                            description={CarouselData[2].description}
                                            link={CarouselData[2].link}
                                        />
                                    </Slide>
                                    <Slide index={7}>
                                        <Card
                                            image={roboticsLogo}
                                            title={CarouselData[3].title}
                                            description={CarouselData[3].description}
                                            link={CarouselData[3].link}
                                        />
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>  
                </CarouselProvider>
                {/* SM DEVICE */}
                <CarouselProvider className="block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} naturalSlideHeight={100} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <Card 
                                            image={appdevLogo}
                                            title={CarouselData[0].title}
                                            description={CarouselData[0].description}
                                            link={CarouselData[0].link}
                                        />
                                    </Slide>
                                    <Slide index={1}>
                                        <Card
                                            image={gamedevLogo}
                                            title={CarouselData[1].title}
                                            description={CarouselData[1].description}
                                            link={CarouselData[1].link}
                                        />
                                    </Slide>
                                    <Slide index={2}>
                                        <Card
                                            image={iotLogo}
                                            title={CarouselData[2].title}
                                            description={CarouselData[2].description}
                                            link={CarouselData[2].link}
                                        />
                                    </Slide>
                                    <Slide index={3}>
                                        <Card
                                            image={roboticsLogo}
                                            title={CarouselData[3].title}
                                            description={CarouselData[3].description}
                                            link={CarouselData[3].link}
                                        />
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    </div> 
  )
}
