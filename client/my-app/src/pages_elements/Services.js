import "../styles/Services.css";
import {services} from "../data"

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="item">
            {services.map((service) => {
              const { id, url, text } = service;
              return (
                <div>
                    <h4>{id}</h4>
                    <a href={url}>url</a>
                    <p>{text}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Services;
