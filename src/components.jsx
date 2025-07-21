import { useState } from 'react'
import './components.css'

function Name() {
  const [name, setName] = useState('Joe Rogan')

  return (
    <div className='parent'>
  	<form className ='edit' onSubmit={(e) => e.preventDefault()}>
    	<label> Name: </label>
        <input
          type='text' placeholder={name} 
          onChange={(e) => setName(e.target.value)} 
        />
    </form>
    <div className='view'><span className='bold'>Name: </span>{name}</div>
    </div>
  )
}

function Email() {
  const [state, setState] = useState('joerogan@hotmail.com')

  return (
    <div className='parent'>
  	<form className ='edit' onSubmit={(e) => e.preventDefault()}>
    	<label> Email: </label>
        <input
          type='email' placeholder={state} 
          onChange={(e) => setState(e.target.value)} 
        />
    </form>
    <div className='view'><span className='bold'>Email: </span>{state}</div>
    </div>
  )
}

function Education() {
  const [state, setState] = useState(
    `Masters in MMA, University of Tokyo`
  )

  return (
    <div className='parent'>
  	<form className ='edit textarea' onSubmit={(e) => e.preventDefault()}>
    	<label> Education: </label>
        <textarea
          placeholder={state} 
          onChange={(e) => setState(e.target.value)} 
        />
    </form>
    <div className='view'><span className='bold'>Education:</span> {state}</div>
    </div>
  )
}

function Experience() {
  const [state, setState] = useState(
    `Podcaster at JoeRogan Experience`
  )

  return (
    <div className='parent'>
  	<form className ='edit textarea' onSubmit={(e) => e.preventDefault()}>
    	<label> Education: </label>
        <textarea
          placeholder={state} 
          onChange={(e) => setState(e.target.value)} 
        />
    </form>
    <div className='view'><span className='bold'>Experience</span>: {state}</div>
    </div>
  )
}

export { Name, Email, Education, Experience }