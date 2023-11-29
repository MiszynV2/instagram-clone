import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ImagePortal from './ImagePortal'
import classes from './ImagePreviewModal.module.css'

function ImagePreviewModal({ children, isOpen, handleClose }) {
    const nodeRef = useRef(null);
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <ImagePortal wrapperId="react-portal-modal-container">
                <div className={`${classes.modal} ${classes.modalEnterDone}`} ref={nodeRef} onClick={handleClose}>
                    <div className={classes.modalContent}>
                        {children}
                    </div>
                </div>
            </ImagePortal>
    );
}
export default ImagePreviewModal