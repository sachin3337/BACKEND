import './App.css'
import Title from './Title'
import ProductTab from './ProductTab';
import MsgBox from './MsgBox';

function Description() {
  return (
    <>
      <h1>hi,{name}</h1>
      <p>2 + 2 = {2 + 2} </p>
      <Title />
      <Title />
    </>
  )
}


let name = "Sachin";
function App() {  // <> </> React fragment for list of children without node kile 
  return (
    <>
      <MsgBox username="Sachin" textColor="blue"/>
      <MsgBox username="Rajput" textColor="red"/>
      <Description />
      <ProductTab />
    </>
  );

}

export default App
