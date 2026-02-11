'use client'
// External modules
import { useState } from 'react'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { LuLoader2 } from "react-icons/lu"
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './NewsletterForm.module.scss'
import schema from './NewsletterSchema'
import { addNewsletterUser } from '@/actions/NewsletterUsers'
import ConfirmationModal from '@/app/Components/ConfirmationModal/ConfirmationModal'

export default function NewsletterForm({handleCancel}) {
  // Hooks
  const t = useTranslations('newsletter_form')
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  // Methods
  const onSubmit = async (data) => {
    try {
      setSubmitError(false)
      const body = {
        name: data.name,
        lastName: data.last_name,
        email: data.email
      }

      await addNewsletterUser(body)
      setShowConfirmationModal(true)
    } catch (error) {
      console.error('Error submitting newsletter form:', error)
      setSubmitError(true)
    }
  }

  const handleCloseModal = () => {
    setShowConfirmationModal(false)
    if (handleCancel) {
      handleCancel()
    }
  }

  // Render Method
  const ErrorMessage = ({name}) => {
    return (
      <span className={styles.error_message}>{errors[name] ? errors[name].message : ''}</span>
    )
  }

  return (
    <>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={handleCloseModal}
        title={t('confirmation_modal.title')}
        subtitle={t('confirmation_modal.subtitle')}
        closeButtonText={t('confirmation_modal.close_button')}
      />

    <div className={styles.modal_container}>
      <h2 className={styles.title}>
        {t('title')}
        <br /> 
        {t('subtitle')}
      </h2>
      <p className={styles.legend}> 
        {t('legend')}
        <br />
        <span>{t('legend_span')}</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

        <div className={styles.row}>
          <div>
            <label htmlFor="name">{t('labels.name')}</label>
            <input {...register('name')} type="text" name="name"/>
            <ErrorMessage name='name' />
          </div>

          <div>
            <label htmlFor="last_name">{t('labels.last_name')}</label>
            <input {...register('last_name')} type="text" name="last_name" />
            <ErrorMessage name='last_name' />
          </div>
        </div>

        <div>
          <label htmlFor="email">{t('labels.email')}</label>
          <input {...register('email')} type="text" name="email"/>
          <ErrorMessage name='email' />
        </div>

        <div className={styles.btn_container}>
          {
            submitError &&
            <p className={styles.error_message_submit}>{t('errors.submit_error')}</p>
          }
          
          {
            handleCancel &&
            <button  type="button" className={styles.btn_cancel} onClick={handleCancel}>
              {t('buttons.cancel')}
            </button>
          }

          <button type="submit" disabled={!isValid || isSubmitting} className={styles.btn_download}>
            {
              !isSubmitting
              ? t('buttons.submit')
              : <div className={styles.loading}>{t('buttons.submitting')} <LuLoader2 /></div>
            }
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
