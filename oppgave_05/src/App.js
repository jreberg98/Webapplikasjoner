import MyComponent from './components/MyComponent'
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert'
import { useState } from 'react';

const food = ["Pizza", "Hamburger", "Coke"];

const App = () => {
  // Write JavaScript, use Hooks, add state and more
	
	const [inputFromChild, setInputFromChild] = useState("");
	const [isClicked, setIsClicked = !isClicked] = useState(false);

	return (
		<main>
			<MyComponent title={"MyComponent virker"} />
			<Wrapper>
				<Food foods={food} />
			
				<Alert setInput={setInputFromChild} setIsClicked={setIsClicked} isClicked={isClicked}/>
				{isClicked && <p>{inputFromChild}</p>}
				
			</Wrapper>
		</main>
	)
}

export default App