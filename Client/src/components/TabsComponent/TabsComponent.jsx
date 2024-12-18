import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalf } from "react-icons/fa6";
import { FaTh, FaThLarge, FaThList } from 'react-icons/fa';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('productDetails');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [reviews, setReviews] = useState([
    {
      name: 'Samantha D.',
      review: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.',
      date: 'August 14, 2023',
      rating: 5,
    },
    {
      name: 'Ethan R.',
      review: 'This t-shirt is a must-have for anyone who appreciates good design.',
      date: 'August 16, 2023',
      rating: 4.5,
    },
    {
      name: 'Liam K.',
      review: 'This t-shirt is a fusion of comfort and creativity.',
      date: 'August 18, 2023',
      rating: 3.5,
    },
    {
      name: 'Alex M.',
      review: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.',
      date: 'August 15, 2023',
      rating: 2,
    },
    {
      name: 'Olivia P.',
      review: 'As a UI/UX enthusiast, I value simplicity and functionality.',
      date: 'August 17, 2023',
      rating: 1.5,
    },
    {
      name: 'Ava H.',
      review: 'I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy.',
      date: 'August 19, 2023',
      rating: 4,
    },
  ]);

  const [gridLayout, setGridLayout] = useState(2);

  const [sortBy, setSortBy] = useState('latest');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const faqs = [
    {
      question: 'What is the fabric of the t-shirt?',
      answer: 'The t-shirt is made of 100% cotton, ensuring comfort and breathability.',
    },
    {
      question: 'Is the t-shirt machine washable?',
      answer: 'Yes, the t-shirt is machine washable. We recommend washing it in cold water.',
    },
    {
      question: 'What sizes are available?',
      answer: 'The t-shirt is available in Small, Medium, Large, and X-Large.',
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleShowMoreReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  // Function to generate star rating based on the rating value
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="flex items-center">
        {Array.from({ length: fullStars }).map((_, index) => (
          <AiFillStar key={index} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalf className="text-yellow-500" />}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <AiOutlineStar key={index} className="text-gray-300" />
        ))}
      </span>
    );
  };

  // Function to handle grid layout change
  const handleGridLayoutChange = (columns) => {
    setGridLayout(columns);
  };

  // Function to handle sorting
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to open the review modal
  const openReviewModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the review modal
  const closeReviewModal = () => {
    setIsModalOpen(false);
  };

  // Function to add a new review
  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    closeReviewModal();
  };

  // Sort reviews based on the selected sort option
  const sortedReviews = reviews.slice().sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  return (
    <div className="py-12">
      {/* Tabs */}
      <div className="flex items-center justify-evenly border-b border-solid border-black/10 mb-8">
        <button
          className={`px-4 py-2 ${activeTab === 'productDetails' ? 'font-medium md:text-xl text-md   border-b-2 border-black text-black' : 'text-black/60 font-normal md:text-xl text-md'
            }`}
          onClick={() => handleTabChange('productDetails')}
        >
          Product Details
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'ratingReviews' ? 'font-medium md:text-xl text-md border-b-2 border-black text-black' : 'text-black/60 font-normal md:text-xl text-md'
            }`}
          onClick={() => handleTabChange('ratingReviews')}
        >
          Rating & Reviews
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'faqs' ? 'font-medium md:text-xl text-md border-b-2 border-black text-black' : 'text-black/60 font-normal md:text-xl text-md'
            }`}
          onClick={() => handleTabChange('faqs')}
        >
          FAQs
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'productDetails' && (
          <div>
            <h2 className="text-xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h2>
            <p>
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. The design is unique and reflects the creativity of the designer.
            </p>
          </div>
        )}

        {activeTab === 'ratingReviews' && (
          <div>

            <div className="mt-4 flex md:flex-nowrap flex-wrap justify-between items-center mb-8">
              <div>
                <p className="font-bold text-black text-2xl">All Reviews <span className='text-black/60 font-normal text-base'>({reviews.length})</span></p>
              </div>
              <div className="flex items-center md:mt-0 mt-4">
                <div className="items-center space-x-2 md:flex hidden mr-4">
                  {/* Grid layout icons */}
                  <FaThLarge
                    className={`cursor-pointer ${gridLayout === 3 ? 'text-blue-500' : ''}`}
                    onClick={() => handleGridLayoutChange(3)}
                  />
                  <FaTh
                    className={`cursor-pointer ${gridLayout === 2 ? 'text-blue-500' : ''}`}
                    onClick={() => handleGridLayoutChange(2)}
                  />
                  <FaThList
                    className={`cursor-pointer ${gridLayout === 1 ? 'text-blue-500' : ''}`}
                    onClick={() => handleGridLayoutChange(1)}
                  />
                </div>
                <div className='mr-4'>
                  {/* Sorting select box */}
                  <select
                    className="py-3 px-5 bg-[#F0F0F0] rounded-[62px]"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
                {/* Write a Review Button */}
                <button
                  className="bg-black text-white font-medium text-base px-4 py-3 w-full rounded-[62px]"
                  onClick={openReviewModal}
                >
                  Write a Review
                </button>
              </div>
            </div>

            <div className={`grid gap-4 mt-4 ${gridLayout === 3 ? 'grid-cols-1 md:grid-cols-3' : gridLayout === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
              }`}>
              {sortedReviews.slice(0, showAllReviews ? sortedReviews.length : 6).map((review, index) => (
                <div key={index} className="border border-solid border-black/10 p-4 rounded-[20px]">
                  {renderStarRating(review.rating)}
                  <div className="flex items-center mt-4">
                    <div className="font-bold text-black text-xl mr-1">{review.name}</div>
                    <img src="/assets/right-tick.svg" alt="" />
                  </div>
                  <div className="text-black/60 mb-6 mt-3">{review.review}</div>
                  <div className="text-black/60 font-medium">Posted on {review.date}</div>
                </div>
              ))}
            </div>
            <div className='text-center mt-9'>
              <button
                type='button'
                className="bg-white hover:bg-black border border-solid border-black/10 rounded-[62px] py-4 px-14 text-black hover:text-white transition-all duration-500 ease-in-out font-medium text-base md:w-auto w-full"
                onClick={handleShowMoreReviews}
              >
                {showAllReviews ? 'Show Less' : 'Load More Reviews'}
              </button>
            </div>


            {/* Add Review Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg md:w-1/2 w-full">
                  <h2 className="text-xl font-bold mb-4">Write a Review</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const newReview = {
                        name: e.target.name.value,
                        review: e.target.review.value,
                        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                        rating: parseFloat(e.target.rating.value),
                      };
                      addReview(newReview);
                    }}
                  >
                    <div className="mb-4">
                      <label htmlFor="name" className="block font-bold mb-3">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="border p-2 w-full rounded-[20px]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="review" className="block font-bold mb-3">Review</label>
                      <textarea
                        id="review"
                        name="review"
                        className="border p-2 w-full rounded-[20px]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="rating" className="block font-bold mb-3">Rating</label>
                      <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        step="0.5"
                        className="border p-2 w-full rounded-[20px]"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-black text-white font-medium text-base px-4 py-3 rounded-[62px]">Submit</button>
                      <button type="button" className="ml-2 bg-[#F0F0F0] text-black font-medium text-base px-4 py-3 rounded-[62px]" onClick={closeReviewModal}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'faqs' && (
          <div>
            <div className="mt-4">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b pb-2">
                  <button
                    className="w-full text-left font-bold flex justify-between items-center focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span>{openAccordion === index ? '-' : '+'}</span>
                  </button>
                  {openAccordion === index && (
                    <div className="mt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;