import React from 'react';
import Form from '../Form/Form';
import './Modal.css'

const Modal = ({
  name,
  category,
  price,
  onCancel,
}) => {

  const closeModal = () => {
    onCancel(false)
  }

  return (
    <>
        <div className="card">
          <button
            onClick={closeModal}
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
          <Form onCancel={onCancel} cardName={name}/>
        </div>
    </>
  );
}

export default Modal;