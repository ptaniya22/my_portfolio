import { useState } from 'react';
import { Link,  } from 'react-scroll';

const list = [
      { title: 'About me', anchor: 'about' },
      { title: 'Projects', anchor: 'projects' },
      { title: 'Skills', anchor: 'skills' },
      { title: 'contacts', anchor: 'contacts' },
    // { title: 'other', anchor: 'other' }

    

]




const Navbar = () => {

    // const [click, setclick] = useState(false)
    // const handleClick = () => setclick(!click)



  return (
      <header className='header'>
          <h1 className='header_title'>Musiyachenko <br />Tatyana</h1>
          <h2>Junior Frontend Engineer</h2>
          <nav className="header_nav">
        
                {/* <div className="header_nav__box"> */}
                    
                    <ul className="header_nav__list">
                        { list.map(item => (
                            <li  key={item.title}>
                                <Link to={item.anchor}  activeClass="active" offset={-97} spy={true} hashSpy={true} smooth={true} duration={500}
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
      
  )
}

export default Navbar
