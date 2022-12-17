import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Image from 'next/image';
import styles from '../../../styles/galeri.module.css';
import CustomRenderer from './customImageRenderer';

const GalleryComponent = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo, direction }) => (
      <CustomRenderer
        key={key}
        margin={'2px'}
        index={index}
        direction={'column'}
        photo={photo}
        left={left}
        onClick={(i) => openLightbox(i)}
        top={top}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <div
        className={`${styles['arrow-container']} ${styles.left}`}
        style={{ opacity: index === 0 ? 0 : 1 }}
        onClick={() => (index === 0 ? {} : setIndex(index - 1))}
      >
        <Image
          src="https://owvix.com/assets/chevron-pointing-to-the-left.png"
          alt="asdad"
          height={14}
          width={14}
        />
      </div>
      <div
        className={index === 2 ? `${styles[`container-animation-${index}`]}` : ''}
        style={{
          transform: index === 2 ? '' : `translate3d(${-index * 100}%, 0, 0)`,
          transition: 'ease-in-out 1000ms',
        }}
      >
        <Gallery photos={photos} direction={'column'} columns={7} renderImage={imageRenderer} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  alt: x.title,
                  srcset: x.srcSet,
                  caption: <div style={{ fontSize: '40px', textAlign: 'center' }}>{x.title}</div>,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <div
        style={{ opacity: index === 2 ? 0 : 1 }}
        className={`${styles['arrow-container']} ${styles.right}`}
        onClick={() => (index === 2 ? {} : setIndex(index + 1))}
      >
        <Image
          src="https://owvix.com/assets/right-chevron.png"
          alt="asdad"
          height={14}
          width={14}
        />
      </div>
    </>
  );
};

export default GalleryComponent;
