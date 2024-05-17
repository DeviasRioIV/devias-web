// External modules
import React from 'react'

//Internal modules
import './ItemStep.scss'
import {AppContext} from '../../AppContext'
import {GoChevronDown} from 'react-icons/go'

export default function ItemStep() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [step, setStep] = React.useState(state.language_content.our_way.items)

  // Local state
  const [isOpen, setIsOpen] = React.useState({})

  // Effects
  React.useEffect(() =>{

    setStep(state.language_content.our_way.items)

  },[state.language])

  // Methods
  const handleStepToggle = (number) => {

    setIsOpen((prevState) => ({
      ...prevState,
      [number]: !prevState[number]
    }))

  }

  return (
    step.map((item, index) => (
      <div key={index} className={`item-step step-${item.number}`}>

        {/* Step button responsive */}
        <button className='toggle-step' onClick={() => handleStepToggle(item.number)}>
          <div className='step'>
            <span className='step-number'>
              0{item.number}
            </span>
            <span className='step-name'>
              {item.name}
            </span>
          </div>
          <div className={`arrow ${isOpen[item.number] ? 'show' : ''}`}>
            <GoChevronDown />
          </div>
        </button>

        {/* Step description */}
        <div className={`container-step-description ${isOpen[item.number] ? 'show' : ''}`}>
          <p className='step-description'>
            {item.description}
          </p>
        </div>
      </div>
    ))
  )

}
