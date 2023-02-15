import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import pozaSlide1Webp from '../images/poza-slide-1.webp'
import pozaSlide1MobileWebp from '../images/poza-slide-1-mobile.webp'
import pozaSlide1MobileJpg from  '../images/poza-slide-1-mobile.jpg'
import pozaSlide2Webp from '../images/poza-slide-2.webp'
import pozaSlide2MobileWebp from '../images/poza-slide-2-mobile.webp'
import pozaSlide2MobileJpg from '../images/poza-slide-2-mobile.jpg'
import pozaSlide3Webp from '../images/poza-slide-3.webp'
import pozaSlide3MobileWebp from '../images/poza-slide-3-mobile.webp'
import pozaSlide3MobileJpg from '../images/poza-slide-3-mobile.jpg'
import '../styles/slider.scss'


class Slider extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         position: 1,
         slidesNumber: 0
      }
    }

    componentDidMount = () => {
        let allSlides = document.querySelector('.slider-list').childElementCount;
        this.setState({
            slidesNumber: allSlides
        })
    }

    nextSlide = () => {
        if(this.state.position === this.state.slidesNumber) {
            this.setState({
                position: 1
            })
        } else {
            this.setState((prevState) => ({
                position: prevState.position + 1
            }))
        }
    }

    previousSlide = () => {
        if (this.state.position === 1) {
            this.setState({
                position: this.state.slidesNumber
            })
        } else {
            this.setState((prevState) => ({
                position: prevState.position - 1
            }))
        }
    }

  render() {
    return (
    <>
        <main className="main">
            <section className="slider">
                <nav className="slider-controls">
                    <button id="previous-slide" className="slider-arrows slider-prev" title="" onClick={this.previousSlide}>
                        <FontAwesomeIcon className='arrow left' icon={faAngleLeft}/>
                    </button> 
                    <button id="next-slide" href="#" className="slider-arrows slider-next" title="" onClick={this.nextSlide}>
                        <FontAwesomeIcon className='arrow right' icon={faAngleRight}/>
                    </button>
                </nav>
                <ol id="slider-list" className="slider-list">
                    <li className={`slider-item ${this.state.position === 1? 'Active' : 'Inactive'}`}>
                        <picture className="slider-image">
                            <source type="image/webp" srcSet={ pozaSlide1Webp } media="(min-width: 500px)"/>
                            <source type="image/webp" srcSet= { pozaSlide1MobileWebp } media="(min-width: 100px)"/>
                            <img src={ pozaSlide1MobileJpg } alt="" width="525" height="300" itemProp="image"/>
                        </picture>
                    </li>
                    <li className={`slider-item ${this.state.position === 2? 'Active' : 'Inactive'}`}>
                        <picture className="slider-image">
                            <source type="image/webp" srcSet={ pozaSlide2Webp } media="(min-width: 500px)"/>
                            <source type="image/webp" srcSet= { pozaSlide2MobileWebp } media="(min-width: 100px)"/>
                            <img src={ pozaSlide2MobileJpg } alt="" width="525" height="300" itemProp="image"/>
                        </picture>
                    </li>
                    <li className={`slider-item ${this.state.position === 3? 'Active' : 'Inactive'}`}>
                        <picture className="slider-image">
                            <source type="image/webp" srcSet={ pozaSlide3Webp } media="(min-width: 500px)"/>
                            <source type="image/webp" srcSet= { pozaSlide3MobileWebp } media="(min-width: 100px)"/>
                            <img src={ pozaSlide3MobileJpg } alt="" width="525" height="300" itemProp="image"/>
                        </picture>
                    </li>
                </ol>
            </section>
        </main>
    </>
    )
  }
}

export default Slider