import React from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'


const About = () => {
  return (
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
         <div className="main__item"><h2>My projects</h2>
          <p>This is the content of section projects *******************************************************************************************</p>
          <Link to={`/portfolio/projects/`}>see more</Link>

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
  )
}

export default About
