import classes from './Modal.module.scss'

export const Modal = ( { isOpen, onClose } ) => {
  if ( !isOpen ) return null
  
  return (
    <div className={`${classes.modalOverlay} ${isOpen ? classes.fadeIn : classes.fadeOut}`} onClick={onClose}>
      <div className={`${classes.modalContent} ${classes.slideIn}`} onClick={( e ) => e.stopPropagation()}>
        <button className={classes.closeButton} onClick={onClose}>
            &times;
        </button>
        <h3>Свяжитесь с нами</h3>
        <div className={classes.buttons}>
          <button
            className={classes.whatsappButton}
            onClick={() => window.open( 'https://wa.me/+996703813814', '_blank' )}
          >
              Связаться по WhatsApp
          </button>
          <button
            className={classes.callButton}
            onClick={() => ( window.location.href = 'tel:+996703813814' )}
          >
              Позвонить
          </button>
        </div>
      </div>
    </div>
  )
}