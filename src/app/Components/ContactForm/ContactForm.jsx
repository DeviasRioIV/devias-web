// External modules
import React from 'react'
import emailjs from '@emailjs/browser'

// Internal modules
import './ContactForm.scss'

export default function ContactForm ({home}){

  // Local State
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData,setFormData] = React.useState({
    user_name: '',
    user_last_name: '',
    user_company: '',
    user_email: '',
    consult: ''
  })
  const [touchedFields, setTouchedFields] = React.useState({
    user_name: false,
    user_last_name: false,
    user_company: false,
    user_email: false,
    consult: false
  })
  const [allFieldsValid, setAllFieldsValid] = React.useState(false)

  // Constants
  const form = React.useRef(null)

  // Effects

  // Verify is all fields valid
  React.useEffect(() => {

    const newAllFieldsValid = Object.keys(formData).every((fieldName) => isFieldValid(fieldName))
    setAllFieldsValid(newAllFieldsValid)

  }, [formData, touchedFields])

  // Save the new values
  const handleChange = (e) => {

    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }

  // Check blur
  const handleBlur = (e) => {

    const {name} = e.target
    setTouchedFields({...touchedFields, [name]: true})

  }

  // Verify is field valid
  const isFieldValid = (fieldName) => {

    if (!touchedFields[fieldName]) {

      return false

    } else {

      switch (fieldName) {

        case 'user_name':
          return formData.user_name.length >= 4

        case 'user_last_name':
          return formData.user_last_name.length >= 4

        case 'user_company':
          return formData.user_company.length >= 4

        case 'user_email':
          return formData.user_email.length >= 8 && formData.user_email.includes('@')

        case 'consult':
          return formData.consult.length >= 15

        default:
          return true

      }

    }

  }

  // Request of EmailJS
  const sendEmail = (e) => {

    e.preventDefault()
    setIsLoading(true)

    emailjs.sendForm('service_7zoo6s6', 'template_tpsiyhh', form.current, 'yT0rf2WJTNyJnW15P')
      .then((result) => {

        console.log(result.text)
        form.current.reset()
        setAllFieldsValid(false)
        setFormData({
          ...formData,
          consult: ''
        })

        location.reload()
        setIsLoading(false)

      }, (error) => {

        console.log(error.text)
        setIsLoading(false)

      })

  }

  return (
    <form className={`contact-form ${home ? 'form-home' : ''}`} ref={form} onSubmit={sendEmail}>

      <div className='form-container'>

        {/* Title formularie */}
        <div className='contact-title'>

          <h2>
            Let's talk.
          </h2>

        </div>

        {/* Container of data */}
        <div className='data-container'>

          <div className='locker'>
            <label className='form-label '>Name <span>*</span></label>
            <input
              type='text'
              name='user_name'
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Name'
            />

            {/* Verify touched name and valid name */}
            {touchedFields.user_name && !isFieldValid('user_name') && (
              <h4 className='input-incorrect'>Short name</h4>
            )}
          </div>

          <div className='locker'>
            <label className='form-label' >Last name <span>*</span></label>
            <input
              type='text'
              name='user_last_name'
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Last name'
            />

            {/* Verify touched last name and valid last name */}
            {touchedFields.user_last_name && !isFieldValid('user_last_name') && (
              <h4 className='input-incorrect'>Short last name</h4>
            )}
          </div>

          <div className='locker'>

            <label className='form-label' >Company <span>*</span></label>
            <input
              type='text'
              name='user_company'
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Company'
            />

            {/* Verify touched company and valid company */}
            {touchedFields.user_company && !isFieldValid('user_company') && (
              <h4 className='input-incorrect'>Short name company</h4>
            )}
          </div>

          <div className='locker'>

            <label className='form-label' >E-mail <span>*</span></label>
            <input
              type='email'
              name='user_email'
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='E-mail'
            />

            {/* Verify touched email and valid email */}
            {touchedFields.user_email && !isFieldValid('user_email') && (
              <h4 className='input-incorrect'>Incorrect email</h4>
            )}
          </div>
        </div>

        {/* Container of consult */}
        <div className='consult-container'>

          <label className='form-label' >Consult <span>*</span></label>
          <textarea
            name='consult'
            value={formData.consult}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Leave your consult'
          />

          {/* Verify touched consult and valid consult */}
          {touchedFields.consult && !isFieldValid('consult') && (
            <h4 className='input-incorrect-consult'>The minimum number of characters is (15)</h4>
          )}
          <input
            className={`${!allFieldsValid ? 'form-empty' : ''}`}
            type='submit'
            value={isLoading ? 'Sending...' : 'Send'}
            disabled={!allFieldsValid}
          />
        </div>

      </div>

    </form>
  )

}