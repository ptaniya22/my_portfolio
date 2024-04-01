import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from '../redux/project/ProjectSlice';
import { getRepos } from '../redux/project/ProjectSlice';
import Slider from 'react-slick';
// import Loader from './loader/Loader';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
//  import { Link as LinkRouter } from 'react-router-dom'

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const { repos } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const userRepos = useSelector(state => state.repos.repos);
  console.log('*****ReposUser is*****', userRepos);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div className="slider_box">
      <Slider {...settings}>
        {userRepos?.map(el => (
          <div key={el.name} className="card">
            {/* {console.log(el.name)} */}
            <div className="card_top">
              <img
                src={`https://raw.githubusercontent.com/ptaniya22/${el.name}/main/${el.name}.jpg`}
                alt=""
              />
            </div>
            <div className="card_bottom">
              <p style={{ fontSize: 40, fontWeight: 700 }}>{el.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      )
    </div>
  );
};

export default Projects;
