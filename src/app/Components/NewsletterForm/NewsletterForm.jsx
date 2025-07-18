'use client'
// External modules
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { LuLoader2 } from "react-icons/lu"

// Internal modules
import styles from './NewsletterForm.module.scss'
import schema from './NewsletterSchema'
import { addNewsletterUser } from '@/actions/NewsletterUsers'

export default function NewsletterForm({handleCancel}) {
  // Hooks
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
    const body = {
      name: data.name,
      lastName: data.last_name,
      email: data.email
    }

    await addNewsletterUser(body)
    handleCancel()
  }

  // Render Method
  const ErrorMessage = ({name}) => {
    return (
      <span className={styles.error_message}>{errors[name] ? errors[name].message : ''}</span>
    )
  }

  return (
    <div className={styles.modal_container}>
      <h2 className={styles.title}>
        ¡Listo!
        <br /> 
          El eBook ya se está descargando.
        </h2>
        <p className={styles.legend}> 
        ¿Querés que te avisemos cuando publiquemos contenido nuevo? 
        <br />
        <span> Completá tus datos y sumate a la comunidad</span>
        </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

        <div className={styles.row}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input {...register('name')} type="text" name="name"/>
            <ErrorMessage name='name' />
          </div>

          <div>
            <label htmlFor="last_name">Apellido</label>
            <input {...register('last_name')} type="text" name="last_name" />
            <ErrorMessage name='last_name' />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="text" name="email"/>
          <ErrorMessage name='email' />
        </div>

        <div className={styles.btn_container}>
          {
            handleCancel &&
            <button  type="button" className={styles.btn_cancel} onClick={handleCancel}>
              Cancelar
            </button>
          }

          <button type="submit" disabled={!isValid || isSubmitting} className={styles.btn_download}>
            {
              !isSubmitting
              ? 'Enviar'
              : <div className={styles.loading}>Enviando <LuLoader2 /></div>
            }
          </button>
        </div>
      </form>
    </div>
  )
}
