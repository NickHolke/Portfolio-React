import hotelPhoto from './hotel_photo.png';
import robinhoodPhoto from './robinhood.png';
import ratingPhoto from './ReelRating.png';

const data = [
  {
    title: 'Stock Trading App',
    subTitle: 'React, Styled Components, MySQL',
    img: robinhoodPhoto,
    link: 'https://github.com/HRSF124-JANK/Robinhood-TradeStock',
    video: "https://www.youtube.com/embed/dAPOzEWJetI?autoplay=1",
  },
  {
    title: 'Hotel Listing App',
    subTitle: 'PostgreSQL, Node.js, AWS',
    img: hotelPhoto,
    link: 'https://github.com/MEND-SF/Photogallery',
    video: 'https://www.youtube.com/embed/a6hKL8eXy04?autoplay=1',
  },
  {
    title: 'Reel Rating',
    subTitle: 'React Hooks, MongoDB',
    img: ratingPhoto,
    link: 'https://github.com/NickHolke/ReelRating',
    video: 'https://www.youtube.com/embed/y_Jdo57sM2g?autoplay=1',
  },
]

export {
  data,
}