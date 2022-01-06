export const hotelsData = [
  {
    id: 102,
    name: 'Taj Vivanta',
    description: 'Get the celebrity treatment with world-class service at Vivanta Chennai IT Expressway OMR',
    rooms: [
      {
        name: "Deluxe Room",
        full_price: 6900,
        image: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/17803754.jpg?k=901ad701893f0d80929f61e134c5b1d419c1ffe367c52b8f3f6649e157a2f7a5&o=',
        disc_price: 5000,
        guests: 2,
        view: "city",
        breakfast: 699,
        remaining: 12,
      },
      {
        name: "Executive Room",
        full_price: 8000,
        image: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/20543037.jpg?k=a64d49eacba8a41e87eb6579dce038878353e4fb00dcfee0dc0bb3716418c702&o=",
        disc_price: 7200,
        guests: 3,
        view: "mountain",
        breakfast: 0,
        remaining: 5
      }
    ],
    orders: [],
    reviews: [
      {
        user_name: 'Bob Savage',
        review_title: "Best holiday experience",
        review_body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus laudantium, cupiditate ipsa beatae reprehenderit nobis quia tempore ut non?',
        rating: 5,
        date: null
      },
      {
        user_name: 'Jane Ross',
        review_title: "Worst holiday experience",
        review_body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus laudantium, cupiditate ipsa beatae reprehenderit nobis quia tempore ut non?',
        rating: 1,
        date: null
      },
    ],
    avg_rating: 4.3,
    rating_result: "Very Good",
    base_price: 5000,
    images: [
      'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/194005772.jpg?k=988b3d61b67ccf90b7ff2a6af946700a9330c639d0fee964688c577a68713734&o=&hp=1',
      'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/34213482.jpg?k=d7935a56b38cafcc87bbff06255b48b5c9a64fe19fe4254e522958cb1c27c741&o=&hp=1'
    ],
    saved: 23,
    city: 'Chennai',
    address: '309 Old Mahabalipuram Road, OMR, Sholinganallur, Sholinganallur, 600119 Chennai, India',
    short_address: 'Sholinganallur, Chennai',
    distance_center: 15,
    tags: ['luxury', 'pool', 'bar', 'pets']
  },
  {
    id: 103,
    name: 'The Leela palace',
    description: 'Get the celebrity treatment with world-class service at The Leela Palace Chennai',
    rooms: [{
      name: "Deluxe Twin Room",
      full_price: 9200,
      disc_price: 7000,
      guests: 2,
      view: "city"
    }],
    orders: [],
    reviews: [],
    avg_rating: 4.9,
    rating_result: "Excellent",
    base_price: 7000,
    images: [
      'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/46318608.jpg?k=dc48d6a27141d2b83e6623daef3931fdc25431a32d9917a7126b2f75676f555f&o=&hp=1',
      'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/277369583.jpg?k=5fba0d4f4ca1867142b52417cfdf1d60d86b44619a736693f9970b5a99856688&o=&hp=1'
    ],
    saved: 13,
    city: 'Chennai',
    address: 'Adyar Seaface, MRC Nagar, 600028 Chennai, India',
    short_address: 'South Chennai',
    distance_center: 5.1,
    tags: ['luxury', 'pool', 'bar', 'pets', 'gym']
  },

]