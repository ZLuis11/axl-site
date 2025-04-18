"use client"
import styles from './Performance.module.css'
import effets from '../Effects.module.css'
import React from "react";
import CountUp from "react-countup";
export default function PerformanceSection(){
    return(
        <>
            <div className="container my-lg-5 py-lg-5 pb-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 axel-block1">
                            <div className={`${styles.w75} border-2 border-dark d-block pt-5`}>                               
                                    <img src="/axel-avance.jpg" alt="A propos" className={`${styles.img} imgAnim img-fluid`}/>                               
                                
                            </div> 
                            <div className={`${effets.blockEffect} axel-block2`}>
                            </div>                       
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column p-lg-5">
                                <h3 className="axel-text-orange fs-5">Nos performances</h3>                            
                                <h2 className="axel-text-blue fs-2 fw-bolder">Achèvements en chiffre.</h2>
                                <div className="border border-info border-2 w-25 my-3"></div>
                                <p className='pt-2 pt-lg-5'>Faites le premier pas vers votre avenir entrepreneurial avec un partenaire de confiance.</p>     
                                <div className="row py-3">
                                    <div className="col-sm-6">
                                        <div className="card axel-box mb-4 mb-lg-0">
                                            <div className="card-body">
                                                <h5 className="card-title text-primary fs-2">
                                                    <CountUp
                                                        start={0}
                                                        end={860}
                                                        duration={1}
                                                    />
                                                </h5>
                                                <p className="card-text">Entreprises créées depuis 2022.</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    
                                        <div className="card axel-box">
                                            <div className="card-body">
                                                <h5 className="card-title text-primary fs-2">
                                                    + <CountUp
                                                        start={0}
                                                        end={1000}
                                                        duration={1}
                                                    />
                                                </h5>
                                                <p className="card-text">Clients satisfaits</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>                   
                            </div> 
                                                
                        </div>
                    </div>
            </div>
        </>
    );
}