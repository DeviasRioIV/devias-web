'use client'

// External modules
import React from 'react'
import emailjs from '@emailjs/browser'
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import Map from '@/app/Components/Map/Map'
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './contact-form.module.scss'
import ConfirmationModal from '@/app/Components/ConfirmationModal/ConfirmationModal'

export default function ContactForm ({home}){

  // Hooks
  const router = useRouter()
  const params = useParams()
  const t = useTranslations('contact_form')

  // Local State
  const [isLoading, setIsLoading] = React.useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = React.useState(false)
  const [submitError, setSubmitError] = React.useState(false)
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
    setSubmitError(false)

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {

        console.log(result.text)
        form.current.reset()
        setAllFieldsValid(false)
        setFormData({
          ...formData,
          consult: ''
        })
        setTouchedFields({
          user_name: false,
          user_last_name: false,
          user_company: false,
          user_email: false,
          consult: false
        })
        setIsLoading(false)
        setShowConfirmationModal(true)

      }, (error) => {

        console.log(error.text)
        setIsLoading(false)
        setSubmitError(true)

      })

  }

  return (
    <>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        title={t('confirmation_modal.title')}
        subtitle={t('confirmation_modal.subtitle')}
        closeButtonText={t('confirmation_modal.close_button')}
      />

    <form className={`${styles.contact_form} ${home ? styles.form_home : ''}`} ref={form} onSubmit={sendEmail}>

      <div className={`${styles.form_container} container`}>

        {/* Title formularie */}
        {
          home && (
            <div className={styles.contact_title}>
              <h2>
                {t('title')}
              </h2>
            </div>
          )
        }

        <div id={styles.container_form_location}>

          <div className={styles.container_form}>

            {/* Container of data */}
            <div className={styles.data_container}>

              <div className={styles.locker}>
                <label className={styles.form_label}>{t('labels.name')} <span>*</span></label>
                <input
                  type='text'
                  name='user_name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('placeholders.name')}
                />

                {/* Verify touched name and valid name */}
                {touchedFields.user_name && !isFieldValid('user_name') && (
                  <h4 className={styles.input_incorrect}>{t('errors.short_name')}</h4>
                )}
              </div>

              <div className={styles.locker}>
                <label className={styles.form_label} >{t('labels.last_name')} <span>*</span></label>
                <input
                  type='text'
                  name='user_last_name'
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('placeholders.last_name')}
                />

                {/* Verify touched last name and valid last name */}
                {touchedFields.user_last_name && !isFieldValid('user_last_name') && (
                  <h4 className={styles.input_incorrect}>{t('errors.short_last_name')}</h4>
                )}
              </div>

              <div className={styles.locker}>

                <label className={styles.form_label} >{t('labels.company')} <span>*</span></label>
                <input
                  type='text'
                  name='user_company'
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('placeholders.company')}
                />

                {/* Verify touched company and valid company */}
                {touchedFields.user_company && !isFieldValid('user_company') && (
                  <h4 className={styles.input_incorrect}>{t('errors.short_company')}</h4>
                )}
              </div>

              <div className={styles.locker}>

                <label className={styles.form_label} >{t('labels.email')} <span>*</span></label>
                <input
                  type='email'
                  name='user_email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t('placeholders.email')}
                />

                {/* Verify touched email and valid email */}
                {touchedFields.user_email && !isFieldValid('user_email') && (
                  <h4 className={styles.input_incorrect}>{t('errors.invalid_email')}</h4>
                )}
              </div>
            </div>

            {/* Container of consult */}
            <div className={styles.consult_container}>

              <label className={styles.form_label} >{t('labels.message')} <span>*</span></label>
              <textarea
                name='consult'
                value={formData.consult}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('placeholders.message')}
                className={styles.textarea}
              />

              {/* Verify touched consult and valid consult */}
              {touchedFields.consult && !isFieldValid('consult') && (
                <h4 className={styles.input_incorrect_consult}>{t('errors.short_message')}</h4>
              )}
              
              {/* Error message for submit */}
              {submitError && (
                <p className={styles.error_message_submit}>{t('errors.submit_error')}</p>
              )}

              <input
                className={`${!allFieldsValid ? styles.form_empty : ''}`}
                type='submit'
                value={isLoading ? t('buttons.sending') : t('buttons.submit')}
                disabled={!allFieldsValid}
              />
            </div>
          </div>

          <div className={styles.location_data}>
            <div className={styles.map_container}>
              <Map />
            </div>
            <br />
            <span>
              <GrLocation />
            </span>
            <p>{t('location.address_line1')}</p>
            <p>{t('location.address_line2')}</p>
            <p className={styles.country}>
              {t('location.country')}
            </p>
            <p>
              <a target='_blank' href="https://www.google.com/maps/dir//San+Mart%C3%ADn+1496,+X5800+R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.1189921,-64.448018,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95d200414389ba49:0xbaaff6e5b3f350c!2m2!1d-64.3656168!2d-33.1190192?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D">
                {t('location.view_map')}
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
    </>
  )

}