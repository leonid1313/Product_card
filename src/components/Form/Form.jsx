import React, {useEffect, useState} from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/Input/MyInput'

const Form = () => {

  const [names, setNames] = useState('');
  const [number, setNumber] = useState('');
  const [namesDirty, setNamesDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [namesError, setNamesError] = useState('This field in required');
  const [numberError, setNumberError] = useState('This field in required');
  const [formValid, setformValid] = useState(false);

  useEffect(() => {
    if(namesError || numberError) {
      setformValid(false)
    } else {
      setformValid(true)
    }
  }, [namesError, numberError])

  const nameHandler = (event) => {
    setNames(event.target.value)
    const validationName = /[a-zA-Z]+/g;

    if(!validationName.test(String(event.target.value).toLowerCase())) {
      setNamesError('Only letters allowed')
    } else {
      setNamesError('')
    }
  }

  const numberHandler = (event) => {
    setNumber(event.target.value)

    const validationNumber = /[0-9]+/g;


    if(!validationNumber.test(Number(event.target.value))) {
      setNumberError('Only numbers allowed')
    } else if(event.target.value.length > 12 || event.target.value.length < 10) {
        setNumberError('Should contain 12 characters')
    } 
    else {
      setNumberError('')
    }
  }
  

  const blurHandler = (event) => {
    switch(event.target.name) {
      case 'name':
        setNamesDirty(true)
        break
      case 'number':
        setNumberDirty(true)
        break
    }
  }

  const clickButton = () => {
    console.log(names)
    console.log(number)
    setNames('')
    setNumber('')
  }

  return (
    <>
          <form
            className="form-container"
            onSubmit={(event) => event.preventDefault()}
          >
            <MyInput
              onChange={event => nameHandler(event)}
              value={names}
              onBlur = {event => blurHandler(event)}
              name="name"
              placeholder="Name"
              type="text"
            />
            {(namesDirty && namesError) && 
              <div className="container-error">{namesError}</div>
            }
            <MyInput
              onChange={event => numberHandler(event)}
              value={number}
              onBlur = {event => blurHandler(event)}
              name="number"
              placeholder="Number"
              type="text"
            />
            {(numberDirty && numberError) && 
              <div className="container-error">{numberError}</div>
            }
            <MyButton
              className="button button-order"
              disabled={!formValid}
              onClick={
                clickButton
              }
            >
              <span>
                order
              </span>
            </MyButton>
          </form>
    </>
  );
}

export default Form;