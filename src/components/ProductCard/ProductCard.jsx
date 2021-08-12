import React, {useState} from 'react';
import MyButton from '../UI/button/MyButton'
import Modal from '../Modal/Modal';

export const ProductCard = ({
  name,
  category,
  price,
}) => {

  const [modal, setModal] = useState(false)

  const openModal = () => {    
    setModal(true)
  }
  
  return (
  <div className="card">
    <div>
      <p className="text-card">
        {category}
      </p>
      <h1 className="title-card">
        {name}
      </h1>
    </div>
    <div className="container-price">
      <p className="text-price"> 
        <span className="span-price">$</span> 
        {price}
      </p>
      <MyButton className="button-add" onClick={openModal}>buy</MyButton>
      {modal && 
        <div className="container-modal">
          <div className="card-modal">
            <Modal onCancel={setModal}
              name={name}
              category={category}
              price={price}
            />
          </div>
        </div>
      }
    </div>
  </div>
)};

