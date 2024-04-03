import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { usersSelector, langSelector } from '../redux/project/ProjectSlice';
import { getRepos } from '../redux/project/ProjectSlice';
import { getLang } from '../redux/project/LangReposSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
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

  const dispatch = useDispatch();
  const userRepos = useSelector(state => state.repos.repos);
  const userLang = useSelector(state => state.lang.lang);
  console.log('*****ReposUser is*****', userRepos);

  console.log('*****Lang is*****', userLang);

  useEffect(() => {
    dispatch(getRepos());
    // dispatch(getLang());
  }, []);

  return (
    <div className="slider">
      <h1 className="slider__title">
        <span>Мои проекты</span>
      </h1>
      {/* <div className="slider__box"> */}

      <Slider {...settings}>
        {userRepos?.map(el => (
          <div key={el.name} className="card ">
            {/* {console.log( el.name)} */}
            {/* {dispatch(getLang(el.name))} */}

            <div className="card__top ">
              <img
                src={`https://raw.githubusercontent.com/ptaniya22/${el.name}/main/${el.name}.jpg`}
                alt=""
              />
            </div>
            <div className="card__bottom">
              <h2>{el.name}</h2>
              <p>{el.created_at.slice(0, 10)}</p>
              <div className="card__bottom_box">
                <div>
                  <p style={{ fontWeight: 700 }}>{el.description}</p>
                </div>
                <div className="card__bottom_box_lang ">
                  <ul className="main__item_proj_lang ">
                    {el.topics?.map((item, index) => (
                      <li className="main__item_proj_lang_el" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* <p className="card__bottom_lang">{el.language}</p> */}
                  <a href={el.git_url}>Перейти</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* {userLang?.map(item => (
          <div key={item.name} className="card ">
            {console.log(item.name)}
            <p>{item}</p>
          </div>
        ))} */}
      </Slider>
    </div>
  );
};

export default Projects;
