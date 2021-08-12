import React from 'react';
import Form from '../Form/Form';

const Modal = ({
  name,
  category,
  price,
  onCancel,
}) => {

  return (
    <>
        <div className="card">
          <button
            onClick={() => onCancel(false)}
            className="button-close"
          >
            X
          </button>
          <div>
            <p className="text-card text-card__modal">
              {category}
            </p>
            <h1 className="title-card title-card__modal">
              {name}
            </h1>
          </div>
          <div className="container-price container-price__modal">
            <p className="text-price text-price__modal"> 
              <span className="span-price">$</span> 
              {price}
            </p>
          </div>
          <Form />
        </div>
    </>
  );
}

export default Modal;