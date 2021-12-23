import React from 'react';
import './FaqStyling.css';

const Faq = () =>{
    return(
        <div className="section-faq">
            <div className="container">
                <div className="col-1">
                    <h3>Frequently asked questions</h3>
                    <p>Cant find the answer you're looking for?</p>
                    <p> Reach out to our <span>customer support</span> team.</p>

                </div>
                <div className="col-2">
                    <div className="faq">
                        <h5>How do you get thisty?</h5>
                        <p> You work hard or eat lots of salty foods.Or also a lot of sugary foods</p>
                    </div>

                    <div className="faq">
                        <h5>How do you get thisty?</h5>
                        <p> You work hard or eat lots of salty foods.Or just sugar.</p>
                    </div>

                    <div className="faq">
                        <h5>How do you get thisty?</h5>
                        <p> You work hard or eat lots of salty foods.Because salty is so good.</p>
                    </div>

                    <div className="faq">
                        <h5>How do you get thisty?</h5>
                        <p> You work hard or eat lots of salty foods.</p>
                    </div>

                  

                </div>
            </div>


        </div>
    )
}

export default Faq;