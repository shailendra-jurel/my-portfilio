import './Certification.css';
import HackerRankImg from '../assets/ucsc.png'
import React from 'react';


function Certification(){
    return(
        <div className='certification' id='certificates'>
            <div className='home-about-desc'>
                <div>
                    <h1>
                    {'Certificates'.split('').map((char, index) => (
                            <span key={index} className='letter'>{char}</span>
                        ))}
                    </h1>
                </div>
            </div>
            <section className='certification-body'>


                <div className='certif-card'>
                    <div className='content'>
                    <span className='certif-text'>Certificate</span>
                        <img src= {HackerRankImg} alt=''></img>
                    </div>
                    <div className='cert-body'>
                        <h3 className='cert-program'>Problem Solving Basic : Pogramming Fundamentals</h3>
                        <h4 className='cert-place'>- HackerRank</h4>
                    </div>
                </div>



                <div className='certif-card'>
                    <div className='content'>
                        <span className='certif-text'>Certificate</span>
                        <img src= {HackerRankImg} alt=''></img>
                    </div>
                    <div className='cert-body'>
                        <h3 className='cert-program'>Basic Computer Applications for everyone</h3>
                        <h4 className='cert-place'>- Indian Educational Institute</h4>
                    </div>
                </div>



                <div className='certif-card'>
                    <div className='content'>
                        <span className='certif-text'>Certificate</span>
                        <img src= {HackerRankImg} alt=''></img>
                    </div>
                    <div className='cert-body'>
                        <h3 className='cert-program'>Python Basic for : Programming Fundamentals</h3>
                        <h4 className='cert-place'>- HackerRank</h4>
                    </div>
                </div>

            </section>
            <div className='coming-soon-btn'>
                <button>More Coming Soon ⟶ </button>
            </div>
            
        </div>
    )
}
export default Certification;