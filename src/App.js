import React, {useState, useEffect} from 'react';
import './styles/App.css';
import {getProduct} from './api/product'
import MyButton from './components/UI/button/MyButton'
import CardList from './components/CardList/CardList.jsx';
import Modal from './components/Modal/Modal';

function App() {

  const [posts, setPost] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    (async() => setPost(await getProduct()))()
  },[])
  
  const openModal = () => {    
    setModal(true)
  }

  let minObj;
  if (posts.length !== 0) {
    minObj = [...posts].reduce(function(min, obj) {
      return obj.price > min.price? min : obj;
    });
  } else {
    return posts
  }

  return (
    <div className="App">
      <CardList cards={posts} />
      <MyButton
        className="button"
        onClick={openModal}
      >
        Buy cheapest
      </MyButton>
      {modal && 
        <div className="container-modal">
          <div className="card-modal">
            <Modal
              onCancel={setModal}
              name={minObj.name}
              category={minObj.category}
              price={minObj.price}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
