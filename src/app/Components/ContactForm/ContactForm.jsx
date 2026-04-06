'use client'

// External modules
import React from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineEmail } from 'react-icons/md'
import Map from '@/app/Components/Map/Map'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './contact-form.module.scss'
import ConfirmationModal from '@/app/Components/ConfirmationModal/ConfirmationModal'

const contactFormSchema = z.object({
  user_name: z.string().trim().min(4, 'short_name'),
  user_last_name: z.string().trim().min(4, 'short_last_name'),
  user_company: z.string().trim().min(4, 'short_company'),
  user_email: z.string().trim().min(8, 'invalid_email').email('invalid_email'),
  user_phone: z.string().trim().min(8, 'invalid_phone'),
  sms_consent: z.boolean().refine((value) => value, { message: 'sms_consent_required' }),
  consult: z.string().trim().min(15, 'short_message')
})

export default function ContactForm ({home}){

  // Hooks
  const params = useParams()
  const t = useTranslations('contact_form')

  const [showConfirmationModal, setShowConfirmationModal] = React.useState(false)
  const [submitError, setSubmitError] = React.useState(false)
  const form = React.useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      user_name: '',
      user_last_name: '',
      user_company: '',
      user_email: '',
      user_phone: '',
      sms_consent: false,
      consult: ''
    }
  })

  const getErrorMessage = (fieldName) => {
    const key = errors[fieldName]?.message
    return key ? t(`errors.${key}`) : ''
  }

  // Request of EmailJS
  const sendEmail = async () => {

    setSubmitError(false)

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      console.log(result.text)
      reset()
      setShowConfirmationModal(true)
    } catch (error) {
      console.log(error.text)
      setSubmitError(true)
    }

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

    <form className={`${styles.contact_form} ${home ? styles.form_home : ''}`} ref={form} onSubmit={handleSubmit(sendEmail)}>

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
                <label className={styles.form_label} htmlFor='user_name'>{t('labels.name')} <span>*</span></label>
                <input
                  id='user_name'
                  type='text'
                  placeholder={t('placeholders.name')}
                  {...register('user_name')}
                />

                {errors.user_name && (
                  <h4 className={styles.input_incorrect}>{getErrorMessage('user_name')}</h4>
                )}
              </div>

              <div className={styles.locker}>
                <label className={styles.form_label} htmlFor='user_last_name'>{t('labels.last_name')} <span>*</span></label>
                <input
                  id='user_last_name'
                  type='text'
                  placeholder={t('placeholders.last_name')}
                  {...register('user_last_name')}
                />

                {errors.user_last_name && (
                  <h4 className={styles.input_incorrect}>{getErrorMessage('user_last_name')}</h4>
                )}
              </div>

              <div className={styles.locker}>

                <label className={styles.form_label} htmlFor='user_company'>{t('labels.company')} <span>*</span></label>
                <input
                  id='user_company'
                  type='text'
                  placeholder={t('placeholders.company')}
                  {...register('user_company')}
                />

                {errors.user_company && (
                  <h4 className={styles.input_incorrect}>{getErrorMessage('user_company')}</h4>
                )}
              </div>

              <div className={styles.locker}>

                <label className={styles.form_label} htmlFor='user_email'>{t('labels.email')} <span>*</span></label>
                <input
                  id='user_email'
                  type='email'
                  placeholder={t('placeholders.email')}
                  {...register('user_email')}
                />

                {errors.user_email && (
                  <h4 className={styles.input_incorrect}>{getErrorMessage('user_email')}</h4>
                )}
              </div>

              <div className={styles.locker}>

                <label className={styles.form_label} htmlFor='user_phone'>{t('labels.phone')} <span>*</span></label>
                <input
                  id='user_phone'
                  type='tel'
                  placeholder={t('placeholders.phone')}
                  required
                  {...register('user_phone')}
                />

                {errors.user_phone && (
                  <h4 className={styles.input_incorrect}>{getErrorMessage('user_phone')}</h4>
                )}
              </div>

              <div className={styles.locker}>
                <label className={styles.sms_consent_label} htmlFor='sms_consent'>
                  <input
                    id='sms_consent'
                    type='checkbox'
                    className={styles.sms_checkbox}
                    required
                    {...register('sms_consent')}
                  />
                  {t('labels.sms_consent')}
                </label>

                {errors.sms_consent && (
                  <h4 className={styles.input_incorrect}>{getErrorMessage('sms_consent')}</h4>
                )}

                <p className={styles.terms_notice}>
                  {t('terms_notice.prefix')}{' '}
                  <a href={`/${params?.locale || 'en'}/terms`} target='_blank' rel='noopener noreferrer'>
                    {t('terms_notice.terms_link')}
                  </a>{' '}
                  {t('terms_notice.connector')}{' '}
                  <a href={`/${params?.locale || 'en'}/privacy-policy`} target='_blank' rel='noopener noreferrer'>
                    {t('terms_notice.privacy_link')}
                  </a>.
                </p>
              </div>
            </div>

            {/* Container of consult */}
            <div className={styles.consult_container}>

              <label className={styles.form_label} htmlFor='consult'>{t('labels.message')} <span>*</span></label>
              <textarea
                id='consult'
                placeholder={t('placeholders.message')}
                className={styles.textarea}
                {...register('consult')}
              />

              {errors.consult && (
                <h4 className={styles.input_incorrect_consult}>{getErrorMessage('consult')}</h4>
              )}

              {/* Error message for submit */}
              {submitError && (
                <p className={styles.error_message_submit}>{t('errors.submit_error')}</p>
              )}

              <input
                className={`${!isValid ? styles.form_empty : ''}`}
                type='submit'
                value={isSubmitting ? t('buttons.sending') : t('buttons.submit')}
                disabled={!isValid || isSubmitting}
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
              <a target='_blank' href='https://www.google.com/maps/dir//San+Mart%C3%ADn+1496,+X5800+R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.1189921,-64.448018,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95d200414389ba49:0xbaaff6e5b3f350c!2m2!1d-64.3656168!2d-33.1190192?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D'>
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
