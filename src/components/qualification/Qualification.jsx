import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return ( 
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">Personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(1)} >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>
                    <div className={ toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(2)} >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Math and Science</h3>
                                <span className="qualification__subtitle">SMAN 9 Bekasi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jul 2017 - Jun 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Associate Degree of Information System</h3>
                                <span className="qualification__subtitle">Universitas Bina Sarana Informatika</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep 2020 - Aug 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Entry Operator</h3>
                                <span className="qualification__subtitle">PT. Pusaka Media Nusantara</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun 2021 - Jul 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">IT System Support</h3>
                                <span className="qualification__subtitle">DPMPTSP Kota Bekasi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Aug 2022 - Nov 2022
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">PT. Pusaka Media Nusantara</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Nov 2022 - Dec 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;