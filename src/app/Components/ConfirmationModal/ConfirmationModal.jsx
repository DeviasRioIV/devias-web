'use client'

// Internal modules
import styles from './confirmation-modal.module.scss'

export default function ConfirmationModal({ isOpen, onClose, title, subtitle, closeButtonText }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>{title}</h2>
        <p className={styles.modal_subtitle}>{subtitle}</p>
        <button 
          className={styles.modal_button} 
          onClick={onClose}
        >
          {closeButtonText}
        </button>
      </div>
    </div>
  )
}
