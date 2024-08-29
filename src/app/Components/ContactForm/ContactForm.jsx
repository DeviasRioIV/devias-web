// External modules
import React from 'react'
import emailjs from '@emailjs/browser'
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

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

      <div className='form-container container'>

        {/* Title formularie */}
        {
          home && (
            <div className='contact-title'>
              <h2>
                LET'S TALK
              </h2>
            </div>
          )
        }

        <div id="container-form-location">

          <div className="container-form">
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

              <label className='form-label' >Message <span>*</span></label>
              <textarea
                name='consult'
                value={formData.consult}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Leave your message'
              />

              {/* Verify touched consult and valid consult */}
              {touchedFields.consult && !isFieldValid('consult') && (
                <h4 className='input-incorrect-consult'>The minimum number of characters is (15)</h4>
              )}
              <input
                className={`${!allFieldsValid ? 'form-empty' : ''}`}
                type='submit'
                value={isLoading ? 'Sending...' : 'Submit'}
                disabled={!allFieldsValid}
              />
            </div>
          </div>

          <div className="location-data">
            <br />
            <span>
              <GrLocation />
            </span>
            <p>San Martín 1496, 5800</p>
            <p>Rio Cuarto, Córdoba</p>
            <p className="country">
              Argentina
            </p>
            <p>
              <a target='_blank' href="https://www.google.com/maps/dir//San+Mart%C3%ADn+1496,+X5800+R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.1189921,-64.448018,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95d200414389ba49:0xbaaff6e5b3f350c!2m2!1d-64.3656168!2d-33.1190192?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D">
                View Map
              </a>
            </p>
            <br />
            <br />
            <span>
              <MdOutlineEmail />
            </span>
            <p>hola@devias.ar</p>
          </div>
        </div>
      </div>

    </form>
  )

}