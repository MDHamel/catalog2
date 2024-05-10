import React, { useState } from 'react';

export function SlideShow() {
  const images = ['https://pbs.twimg.com/media/F8YaGUraIAAqSFU?format=png', 'https://pbs.twimg.com/media/F8OCh2gaYAAl--t?format=png', 'https://pbs.twimg.com/media/F8TONtrbwAAAAiC?format=png', 'https://pbs.twimg.com/media/F8JHJ3Xb0AANTsD?format=png&name=small'];

  const [currentImageIndex, setImageIndex] = useState(0);
  const [animController, setAnim] = useState('displayText');

  const timing = 0.5;


  const nextImage = () => {
    setAnim('goingRight');
  };

  const prevImage = () => {
    setAnim('goingLeft');
  };

  const imageIndexHandler = (index) => {
    if (index < 0) {
      index = images.length + index;
    }
    else if (index >= images.length) {
      index = index - images.length;
    }
    return index;
  };

  const setNextImage = () => {
    if (animController === 'goingLeft') {
      setImageIndex(prev => imageIndexHandler(prev + 1));
    }
    else if (animController === 'goingRight') {
      setImageIndex(prev => imageIndexHandler(prev - 1));
    }
  };

  const imageTransitionTimeout = () => {
    setTimeout(() => {
      //Changing the image and setting the animation to nothing like this fixes the flickering issue due to timing. this way the image changes as they return to their og spots
      setNextImage();
      setAnim('displayText');
    }, timing * 0);
  };


  return (
    <div className='slideshow w-100' style={{ '--timing': `${timing}s` }}>
      <div className={animController} id="previewLeft"><img src={images[imageIndexHandler(currentImageIndex - 2)]} /></div>
      <div className={animController} id="leftImage" onClick={prevImage} onAnimationEnd={imageTransitionTimeout}><img src={images[imageIndexHandler(currentImageIndex - 1)]} /></div>

      <div className={animController} id="focusImage">
        <figure className='w-100 d-flex '>
          <img src={images[currentImageIndex]} />
        </figure>
      </div>
      <div className={animController} id="rightImage" onClick={nextImage}><img src={images[imageIndexHandler(currentImageIndex + 1)]} /></div>
      <div className={animController} id="previewRight"><img src={images[imageIndexHandler(currentImageIndex + 2)]} /></div>
    </div>
  );
}
