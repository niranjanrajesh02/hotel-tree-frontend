import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const AboutUs = () => {
  return (
    <div className='text-black mb-20'>
      <div className='h-20 mb-5 bg-lightred border-lightred' />
      <div className='lg:px-20 text-center'>
        <h3 className='text-4xl text-center underline'>About Us</h3>
        <div className='mt-10 flex lg:flex-row flex-col gap-10 items-center '>
          <div className='w-3/6'>
            <h3 className='text-4xl font-bold text-lightred mb-5'>We are HotelTree</h3>
            <p className='text-justify'>
              At HotelTree, we want to give our customers the holiday they deserve. For this, we have partnered with the leading hotel chains across India to offer a one-of-a-kind experience for our travellers.
              We are currently operating in the six cities of Chennai, Gurgaon, New Delhi, Kolkata, Mumbai and Pune. We have handpicked the most luxurious, well-reviewed hotels in each city and welcomed them into our service.
              We hope to give each of you a memorable holiday of a lifetime.

            </p>
          </div>
          <div className='w-3/6'>
            <Carousel >
              <div>
                <img src={'https://s3.ap-southeast-1.amazonaws.com/localiiz-prod/uploads/The-best-luxury-hotels-in-New-Delhi-The-Taj-Mahal-India.jpg.jpg?mtime=20201207231600&focal=none'} />
              </div>
              <div>
                <img src={'http://static.asiawebdirect.com/m/kl/portals/india-hotel-net/homepage/best-india-luxury-hotels/pagePropertiesImage/best-india-luxury-hotels.jpg'} />
              </div>
              <div>
                <img src={'https://static2.tripoto.com/media/filter/tst/img/128752/TripDocument/1476521620_suryaa.jpg'} />
              </div>
              <div>
                <img src={'https://4.bp.blogspot.com/-S0ngG56-37w/VK95d5neojI/AAAAAAAAGqU/Y-S7JvTE16A/s1600/The%2BOberoi%2BUdaivilas%2C%2BUdaipur.jpg'} />
              </div>
              <div>
                <img src={'https://static2.tripoto.com/media/filter/tst/img/15546/TripDocument/1448884461_01_exterior_dusk_1_lg_47_fotor.jpg'} />
              </div>
              <div>
                <img src={'https://www.theleela.com/prod/content/assets/styles/hero_banner_1920x980/public/2021-10/1920-x-1080-Gandhinagar.jpg?VersionId=ACgDKKL6NAzpQp2HKwTnfacy_qs7_yHe&itok=g3CPp9rT'} />
              </div>
              <div>
                <img src={'https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683'} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default AboutUs
