import React from 'react';
import Image from 'next/image';
import Name from '../name';

const Index = ({ image, isRight, name, title }) => {
  const defineImageUrl = (image) => {
    switch (image) {
      case 'rinaldy':
        return '../../../../public/assets/about/rinaldy.jpeg';

      default:
        break;
    }
  };

  return isRight ? (
    <div className="basis-6/12 h-fit md:pl-16 flex flex-col items-center md:items-start h-auto">
      <div className="w-8/12 md:w-full aspect-2/3 relative">
        <Image
          src={require(image === 'rinaldy'
            ? '../../../../public/assets/about/rinaldy.jpeg'
            : image === 'salman'
            ? '../../../../public/assets/about/salman.jpeg'
            : image === 'sham'
            ? '../../../../public/assets/about/shammil.jpeg'
            : image === 'nanda'
            ? '../../../../public/assets/about/nanda.jpg'
            : image === 'temy'
            ? '../../../../public/assets/about/temy.jpeg'
            : image === 'tsamara'
            ? '../../../../public/assets/about/tsamara.jpeg'
            : '../../../../public/assets/about/jo.jpg')}
          layout="fill"
          objectFit="contain"
          alt="logo"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        ></Image>
      </div>
      <Name name={name} title={title} />
    </div>
  ) : (
    <div className="basis-6/12 h-fit md:pr-16 pb-16 md:pb-0 flex flex-col items-center md:items-start h-auto">
      <div className="w-8/12 md:w-full aspect-2/3 relative">
        <Image
          src={require(image === 'rinaldy'
            ? '../../../../public/assets/about/rinaldy.jpeg'
            : image === 'salman'
            ? '../../../../public/assets/about/salman.jpeg'
            : image === 'sham'
            ? '../../../../public/assets/about/shammil.jpeg'
            : image === 'nanda'
            ? '../../../../public/assets/about/nanda.jpg'
            : image === 'temy'
            ? '../../../../public/assets/about/temy.jpeg'
            : image === 'tsamara'
            ? '../../../../public/assets/about/tsamara.jpeg'
            : '../../../../public/assets/about/jo.jpg')}
          layout="fill"
          objectFit="contain"
          alt="logo"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        ></Image>
      </div>
      <Name name={name} title={title} />
    </div>
  );
};

export default Index;
