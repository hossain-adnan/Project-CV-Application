import './styles/App.css'
import { Name, Email, Education, Experience } from './components/components.jsx'


function App() {

  function printCV(){
    print();
  }

  return (
    <>
      <h1>Your Tiny CV</h1>
      <h2>👇🏿<i>hover over elements</i> to edit and print your own CV</h2>
      <div className="cvContainer">
        <div className='general section'>
          <Name/>
          <Email/>
          <Education/>
          <Experience/>
        </div>
      </div>
      <button onClick={printCV}>
        Print CV
      </button>
    </>
  )
}


export default App
