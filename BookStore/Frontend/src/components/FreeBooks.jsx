import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function FreeBooks() {

  const filterData = list.filter((data)=> data.category === "Free")

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'> Free Offered Books </h1>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias aliquid numquam ipsa inventore eligendi maxime blanditiis quibusdam nihil eos ipsam doloribus sit, voluptate laboriosam beatae ab perferendis sed expedita? </p> 
        </div>
      </div>

      <div>
        <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4 cursor-grab ">
          <Slider {...settings}>
            {filterData.map((item)=> (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeBooks
