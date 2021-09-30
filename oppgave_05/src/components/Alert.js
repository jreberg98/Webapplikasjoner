import { useState } from 'react';

const Alert = ({setInput, setIsClicked, isClicked}) => {

  const [state, setState] = useState("");

	const handleClick = () => {
		alert(state);
    setIsClicked(!isClicked);
	}
	
	const handleChange = (event) => {
    setInput(event.currentTarget.value);
		setState(event.currentTarget.value);
	}

  return (
    <>
      <button onClick={handleClick}>Klikk meg</button>
		  <input type="text" onChange={handleChange} value={state}/>
    </>
  )
}

export default Alert