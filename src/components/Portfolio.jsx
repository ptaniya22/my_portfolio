import { useState } from 'react';
import React from 'react'
import { Element, Link } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import proj from '../mainProjects.js'


const list = [
      { title: 'About me', anchor: 'about' },
      { title: 'Projects', anchor: 'projects' },
      { title: 'Skills', anchor: 'skills' },
      { title: 'contacts', anchor: 'contacts' },
    // { title: 'other', anchor: 'other' }   

]



const Portfolio = () => {
  return (
    <>
     <header className='header'>
          <h1 className='header_title'>Musiyachenko <br />Tatyana</h1>
          <h2>Junior Frontend Engineer</h2>
          <nav className="header_nav">
        
                {/* <div className="header_nav__box"> */}
                    
                    <ul className="header_nav__list">
                        { list.map(item => (
                            <li  key={item.title}>
                                <Link to={item.anchor}  activeClass="active" offset={-98} spy={true} hashSpy={true} smooth={true} duration={500}
                                    // onClick={handleClick}
                                    // onClick={handleClick} className={click ? "header_nav__link active" : "header_nav__link"}>
                                     className="header_nav__link" >
                                    <span className="header_nav__link_indicator" ></span>
                                    <span className="header_nav__link_text">{item.title}</span>
                                    
                                </Link>
                            </li>
                        )) }
                    </ul>
            
                {/* </div> */}
             </nav>

    </header>
      
    <section className='main'>
      <Element name="about" >       
           <div className="main__item_about">
          <p>В далеком 2002 году, при подаче документов в Университет на математический факультет, меня напугало название факультета.  <span>"Механико математический"</span>  факультет. За соседним столом был набор на факультет <span>"Прикладной математики"</span> ,с которого и началось мое познание алгоритмизации. Здесь меня заставили работать над решениями различной сложности задач.</p>
          <p>Программирование это не красивое написание кода, а структурное представление задачи и оптимальные пути ее реализации. </p>
          <p>Невозможно сказать <span>"я знаю и умею"</span> . Мне нравится учиться, хоть иногда это и сводит с ума. Но это того стоит.</p>
          <p>По статистике <span>Скорпионов</span>  реже берут на работу. Давайте нарушим традицию!</p>
        </div> 
       
      </Element>

      <Element name="projects" >       
          <div className="main__item">

            {proj.map(el => (
              
            <div key={el.id} className="main__item_proj">
                <img className="main__item_proj_img" src={el.img} alt="" />
                <div className="main__item_proj_content">
                  <a href={el.link}>{el.name}</a>
                  <p>{el.text}</p>
                  {/* {proj.language.forEach(element => {
                    span(el)
                    console.log(el)
                  })} */}
                </div>
            </div>

            ))}
            
            
            
          
            
            
            <LinkRouter to={`/projects/`}>see more</LinkRouter>

        </div>         
      </Element>

      <Element name="skills" >  
           <div className="main__item"><h2>Skills</h2>
          <p>This is the content of section Skills *******************************************************************************************</p>
        </div> 
      </Element>
     

      <Element name="contacts" >       
           <div className="main__item"><h2>contacts</h2>
          <p>This is the content of section contacts *******************************************************************************************</p>
        </div> 
      </Element>
      
        
      
    
      </section>
    </>
  )
}

export default Portfolio
