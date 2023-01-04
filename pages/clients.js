import { useState, useCallback } from 'react';
import Container from '../components/global/container';
import Section from '../components/global/section/section';
import Title from '../components/global/title/title';
import { photos } from '../file/client';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import CustomRenderer from '../components/specific/gallery/customImageRenderer';

const Index = () => {
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
        quality={30}
        onClick={(i) => openLightbox(i)}
        top={top}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Container title="Clients | Creative Agency | Owvix Creative">
      <div className="bg-white w-full">
        <Section text="grey-primary">
          <Title
            text="OUR HAPPY CLIENT"
            size="text-[32px] md:text-[48px]"
            isCentered
            className="mt-0"
          ></Title>
          <div className="md:px-40">
            <Gallery
              photos={photos}
              direction={'column'}
              columns={3}
              onClick={openLightbox}
              renderImage={imageRenderer}
            />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      alt: x.title,
                      srcset: x.srcSet,
                      caption: (
                        <div style={{ fontSize: '40px', textAlign: 'center' }}>{x.title}</div>
                      ),
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Section>
      </div>
    </Container>
  );
};

export default Index;
