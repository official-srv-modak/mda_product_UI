import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactImageMagnify from 'react-image-magnify';
import './ImageModal.css';

function ImageModal({ imageUrl, onClose }) {
    return (
        <Modal show={true} onHide={onClose} dialogClassName="image-modal-dialog">
            <Modal.Body className="image-modal-body">
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: 'Correlation Matrix',
                            isFluidWidth: true,
                            src: imageUrl,
                        },
                        largeImage: {
                            src: imageUrl,
                            width: 2000, // Adjust as needed
                            height: 1600, // Adjust as needed
                        },
                        enlargedImagePosition: 'over', // Change to 'over' for on-top zoom
                        enlargedImageContainerDimensions: {
                            width: 'auto',
                            height: '50%',
                        },
                        enlargedImageContainerStyle: {
                            zIndex: 9999,
                        },
                    }}
                />
            </Modal.Body>
        </Modal>
    );
}

export default ImageModal;
