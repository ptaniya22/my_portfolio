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

const arrLanguage =[]
//   proj[1].language.split(',');
// console.log(arrLanguage)


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
                  <a href={el.link}>
                    <span className="main__item_proj_link"> {el.name}
                    <svg className="main__item_proj_link_arrow" xmlns="http://www.w3.org/2000/svg"        width="18" height="18" viewBox="0 0 22 22" fill= 'white'>
                     <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                    </svg>
                    </span>
                    
                  </a>
                  <p>{el.text}</p>

                  
                  {console.log(el.language)}
                  <ul className='main__item_proj_lang'>{
                    el.language.map((item) => <li  >{item}</li>)
                  }
                 </ul>
                  
                </div>
            </div>

            ))}
            
            
            <LinkRouter  to={`/projects/`}>
              <span className='main__item_routing'>
                See more projects
                  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="18" height="18" image-rendering="optimizeQuality" fill-rule="evenodd" fill='white' clip-rule="evenodd" viewBox="0 0 512 220"><path fill-rule="nonzero" d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z"/></svg>
              </span> 
            </LinkRouter>

        </div>         
      </Element>

      <Element name="skills" >  
           <div className="main__item"><h2>Skills</h2>
          <p>This is the content of section Skills *****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************</p>
        </div> 
      </Element>
     

      <Element name="contacts" >       
           <div className="main__item"><h2>contacts</h2>
          <p>This is the content of section contacts ***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************</p>
        </div> 
      </Element>
      
        
      
    
      </section>
    </>
  )
}

export default Portfolio
