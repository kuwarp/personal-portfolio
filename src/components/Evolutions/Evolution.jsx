import React from 'react'
import Service from '../../common/Service'
import SectionTitle from '../../common/SectionTitleA'
import Aboutcommon from '../../common/Aboutcommon'
const Evolution = () => {
  return (
   <>
     <div className="slider-perosonal-portfolio height-750 bg_image" data-black-overlay="1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-11.jpg)`}}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title">Hello ! EveryOne This Is <br /> <span className="theme-gradient">Kuwar Pratap Singh</span></h1>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Aboutcommon />

              
   </>
  )
}

export default Evolution