import React from 'react'
import kpabout from "../assets/images/kp-about.png"
import { FiPhone, FiMapPin,FiCloud } from "react-icons/fi";
import {SiAzuredevops} from "react-icons/si"
const Aboutcommon = () => {
  return (
    <div className="about-style-5 rn-section-gapBottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="row row--0 about-wrapper align-items-center theme-shape">
                    <div className="col-lg-6">
                        <div className="thumbnail">
                            <img src={kpabout} alt="About Images" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="inner">
                                <h4 className="title">I'm a Developer</h4>
                                <p>I am a Web/Software Developer also having intrest in Clouds,DevOps and also Content Writing</p>
                                <ul className="contact-address">
                                    <li><FiCloud /> AWS, GCP, Cloudinary</li>
                                    <li> <SiAzuredevops/>Docker,Kubernates,Terraform,jenkkins,DevOps,GitHub,Git,Linux</li>
                                    <li><FiPhone /> <a href='tel:+917017949440'> tel:+917017949440</a></li>
                                    <li><FiMapPin /> India</li>
                                </ul>
                                <div className="download-button mt--20">
                                    <a className="btn-read-more" target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1G7mi5F1zumJ_lJb10YWASccEdwQ48VZG/view"><span>Download My CV</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Aboutcommon