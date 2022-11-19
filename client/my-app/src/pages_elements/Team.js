import React, { useState } from 'react';
import "../styles/Team.css";
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Team =()=>{
  return (
    <article className="review">
      <h4 className="TeamTitle">Our Team</h4>
      <div className="underline"></div>
      <div className="teamwrapper">
        <div className="team">
          {people.map((person) => {
            const { id, image, name, job, text } = person;
            return (
              <>
                <div key={id}>
                  <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                      <FaQuoteRight />
                    </span>
                  </div>
                  <h4 className="author">{name}</h4>
                  <p className="job">{job}</p>
                  <p className="info">{text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Team