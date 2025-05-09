"use client"
import React from 'react'
import CountUp from 'react-countup'

export default function OurExperienceLayout() {
    return (
        <>
            <section className="skills-counter-wrapper py mt section-bg-mode">
                <div className="container">
                    <div className="row section-title">
                        <div data-aos={"slide-up"} data-aos-delay="100" className="col-12 mt-sm-3 mt-md-0 col-sm-6 col-md-4 col-lg-3">
                            <div className="card border py-5 text-center">
                                <h3><CountUp start={0} end={18} duration={2.75} delay={0.5} separator="," />+</h3>
                                <p className='pt-2'>Project Completed</p>
                            </div>
                        </div>
                        <div data-aos={"slide-up"} data-aos-delay="300" className="col-12 mt-3 mt-sm-3 mt-md-0 col-sm-6 col-md-4 col-lg-3">
                            <div className="card border py-5 text-center">
                                <h3><CountUp start={0} end={2} duration={2.75} delay={0.5} separator="," />+</h3>
                                <p className='pt-2'>Successful Years</p>
                            </div>
                        </div>
                        <div data-aos={"slide-up"} data-aos-delay="500" className="col-12 mt-3 mt-sm-3 mt-md-0 col-sm-6 col-md-4 col-lg-3">
                            <div className="card border py-5 text-center">
                                <h3><CountUp start={0} end={18} duration={2.75} delay={0.5} separator="," />+</h3>
                                <p className='pt-2'>Client Retention</p>
                            </div>
                        </div>
                        <div data-aos={"slide-up"} data-aos-delay="700" className="col-12 mt-3 mt-sm-3 mt-lg-0 col-sm-6 col-md-4 col-lg-3">
                            <div className="card border py-5 text-center">
                                <h3><CountUp start={0} end={5} duration={2.75} delay={0.5} separator="," />+</h3>
                                <p className='pt-2'>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
