import React from "react";
import PropTypes from "prop-types";


export const Card = (props) => {

  return (
   
    <div className="col">
    <div className="card">   
      <img src={props.imageURL} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">{props.textButtom}</a>     
      </div>
    </div>  
    </div>
    
   
  )
}


Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textButtom: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string
}

Card.defaultProps = {
  title: 'Los bosques de Galicia',
  description: " Nos ofrece más de ciento setenta especies de árboles y arbustos, entre ellas podemos encontrar hayas, castaños, robles, avellanos, acebos o salgueiros.",
  textButtom: 'Más información',
  imageURL: 'https://imagenes-bonitas.com/wp-content/uploads/2018/10/imagenes-de-bosques-hermosas.jpg',
 
}