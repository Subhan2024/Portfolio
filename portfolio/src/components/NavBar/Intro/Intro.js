import React from 'react';
import './Intro.css';
import bg from '../../../assets/image1.png';
import hire from '../../../assets/hire.png';
import {Link} from 'react-scroll';


const intro = () =>{
return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='imtroText'>I'm <span className='introName'>Subhan</span><br/>Website Designer</span>
            <p className='introPara'>I am a skilled web designer with expierence in creating visually<br/> appealing and user friendly website.</p>
            <Link><button className='btn'><img src={hire} alt='Hire Me' className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
)
}

export default intro