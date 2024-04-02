import { useState } from 'react';
import React from 'react';
import { Element, Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import proj from '../mainProjects.js';
import skills from '../skills.js';
import rigthArrow from '../assets/images/arrow-right.svg';

const list = [
  { title: 'Обо мне', anchor: 'about' },
  { title: 'Проекты', anchor: 'projects' },
  { title: 'Навыки', anchor: 'skills' },
  { title: 'Контакты', anchor: 'contacts' },
];

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <header className="header">
            <h1 className="header_title">
              Мусияченко <br />
              Татьяна
            </h1>
            <h2>Джуниор фронтенд разработчик</h2>
            <nav className="header_nav">
              <ul className="header_nav__list">
                {list.map(item => (
                  <li key={item.title}>
                    <Link
                      to={item.anchor}
                      activeClass="active"
                      offset={-98}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      duration={500}
                      className="header_nav__link"
                    >
                      <span className="header_nav__link_indicator"></span>
                      <span className="header_nav__link_text">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* </div> */}
            </nav>
          </header>

          <section className="main">
            <Element name="about">
              <div className="main__item_about">
                <p>
                  В далеком 2002 году, при подаче документов в Университет на
                  математический факультет, меня напугало название факультета.{' '}
                  <span>"Механико математический"</span> факультет. За соседним
                  столом был набор на факультет{' '}
                  <span>"Прикладной математики"</span> ,с которого и началось
                  мое познание алгоритмизации. Здесь меня заставили работать над
                  решениями различной сложности задач.
                </p>
                <p>
                  Программирование это не красивое написание кода, а структурное
                  представление задачи и оптимальные пути ее реализации.{' '}
                </p>
                <p>
                  Невозможно сказать <span>"я знаю и умею"</span> . Мне нравится
                  учиться, хоть иногда это и сводит с ума. Но это того стоит.
                </p>
                <p>
                  По статистике <span>Скорпионов</span> реже берут на работу.
                  Давайте нарушим традицию!
                </p>
              </div>
            </Element>

            <Element name="projects">
              <div className="main__item">
                {proj.map(el => (
                  <div key={el.id} className="main__item_proj">
                    <img className="main__item_proj_img" src={el.img} alt="" />

                    <div className="main__item_proj_content">
                      <a href={el.link}>
                        <span className="main__item_proj_link">
                          {' '}
                          {el.name}
                          <svg
                            className="main__item_proj_link_arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 22 22"
                            fill="white"
                          >
                            <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                          </svg>
                        </span>
                      </a>
                      <p>{el.text}</p>

                      <ul className="main__item_proj_lang">
                        {el.language.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <LinkRouter to={`/projects/`}>
                  <span className="main__item_routing">
                    See more projects
                    <img src={rigthArrow} alt="" />
                  </span>
                </LinkRouter>
              </div>
            </Element>

            <Element name="skills">
              <div className="main__item">
                {skills.map(el => (
                  <div key={el.id} className="main__item_skill">
                    <div className="main__item_skill_name">
                      <p>{el.name}</p>
                      <img src={el.img} alt="" />
                    </div>
                    <div className="main__item_skill_bar">
                      {/* {(perc = el.percent)} */}
                      <div
                        className="main__item_skill_per"
                        per={el.percent}
                        style={{ maxWidth: el.percent }}
                      >
                        {console.log(el.percent)}
                      </div>
                    </div>

                    {el.branch?.map(item => (
                      <div key={item.id} className="main__item_skill_branch">
                        <div className="main__item_skill_branch_name">
                          <p>{item.name}</p>
                          <img src={item.img} alt="" />
                        </div>

                        {/* <p>{item.percent}</p> */}
                        <div className="main__item_skill_branch_bar">
                          {/* {(perc = el.percent)} */}
                          <div
                            className="main__item_skill_branch_per"
                            per={item.percent}
                            style={{ maxWidth: item.percent }}
                          >
                            {console.log(item.percent)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Element>

            <Element name="contacts">
              <div className="main__item">
                <h2>contacts</h2>
                <p>
                  This is the content of section contacts
                  ***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
                </p>
              </div>
            </Element>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
