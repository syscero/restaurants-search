import React, { useEffect } from 'react'
import Portal from './Portal'
import { Overlay, Dialog } from './styles'

const Modal = ( { children, visible, onClose } ) => {
    useEffect( () => {
        function onEsc(evt) {
            if (evt.keyCode === 27) {
                onClose()
            }
        }

        window.addEventListener('keydown', onEsc)

        return () => {
            window.removeEventListener('keydown', onEsc)
        }

    }, [onClose])    

    if (!visible) return null

    const onOverlayClick = () => {
        if (onClose) {
            onClose()
        }
    }

    const onDialogClick = (e) => {
        e.stopPropagation()
    }



    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick} >{ children }</Dialog>
            </Overlay>
        </Portal>
    )
}

export default Modal