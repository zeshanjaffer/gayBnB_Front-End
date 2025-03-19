import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const PlacesSlider: React.FC = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      spaceBetween: 24,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
            Over 15 Million
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            All City Guides
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:text-lg">
            Discover LGBTQ+ Hotspots around the world
          </p>
        </div>

        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-lg font-medium text-gray-900">
                North America
              </span>
            </div>
          </div>

          <div className="mt-6 relative swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img
                      src="/heroimage3.jpg"
                      alt="North America"
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0"></span>
                          North America
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img
                      src="/heroimage2.jpg"
                      alt="Europe"
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0"></span>
                          Europe
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img
                      src="/heroimage1.jpg"
                      alt="Latin America"
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0"></span>
                          Latin America
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>

          {/* Ask to Edit Button */}
         
        </div>
      </div>
    </div>
  );
};

export default PlacesSlider;