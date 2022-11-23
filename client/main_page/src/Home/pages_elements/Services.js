import "../styles/Services.css";
import {services} from "../data"


const Services = () => {
  return (
    <>
      <article className="services">
        <h4 className="services_title">Our Features</h4>
        <div className="underline"></div>
        <div className="item">
          {services.map((service) => {
            const { id, title, icon, text } = service;
            return (
              <div key={id} className='Service'>
                <h4 className="type">{title}</h4>
                <p className="icon">{icon}</p>
                <p className="description">{text}</p>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Services;
