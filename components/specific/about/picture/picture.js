import React from 'react';
import Image from 'next/image';
import Name from '../name';

const Index = ({ image, isRight, name, title }) => {
  return (
    <div
      className={
        isRight
          ? 'basis-6/12 h-fit md:pl-16 flex flex-col items-center md:items-start h-auto'
          : 'basis-6/12 h-fit md:pr-16 pb-16 md:pb-0 flex flex-col items-center md:items-start h-auto'
      }
    >
      <div className="w-8/12 md:w-full aspect-2/3 relative">
        <Image
          src={
            image === 'rinaldy'
              ? 'https://owvix.com/images/assets/about/rinaldy.jpeg'
              : image === 'salman'
              ? 'https://owvix.com/images/assets/about/salman.jpeg'
              : image === 'sham'
              ? 'https://owvix.com/images/assets/about/shammil.jpeg'
              : image === 'nanda'
              ? 'https://owvix.com/images/assets/about/nanda.jpg'
              : image === 'temy'
              ? 'https://owvix.com/images/assets/about/temy.jpeg'
              : image === 'tsamara'
              ? 'https://owvix.com/images/assets/about/tsamara.jpeg'
              : 'https://owvix.com/images/assets/about/jo.jpg'
          }
          layout="fill"
          objectFit="contain"
          alt={image}
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
