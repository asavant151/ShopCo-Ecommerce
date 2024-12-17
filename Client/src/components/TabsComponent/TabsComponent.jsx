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
      rating: 5, // Example rating
    },
    {
      name: 'Ethan R.',
      review: 'This t-shirt is a must-have for anyone who appreciates good design.',
      date: 'August 16, 2023',
      rating: 4.5, // Example rating
    },
    {
      name: 'Liam K.',
      review: 'This t-shirt is a fusion of comfort and creativity.',
      date: 'August 18, 2023',
      rating: 3.5, // Example rating
    },
    {
      name: 'Alex M.',
      review: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.',
      date: 'August 15, 2023',
      rating: 2, // Example rating
    },
    {
      name: 'Olivia P.',
      review: 'As a UI/UX enthusiast, I value simplicity and functionality.',
      date: 'August 17, 2023',
      rating: 1.5, // Example rating
    },
    {
      name: 'Ava H.',
      review: 'I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy.',
      date: 'August 19, 2023',
      rating: 4, // Example rating
    },
  ]);

  const [gridLayout, setGridLayout] = useState(2); // Default grid layout (3 columns)
  console.log("gridLayout==>", gridLayout);
  
  const [sortBy, setSortBy] = useState('latest'); // Default sorting by latest
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal


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
    <div className="p-4">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === 'productDetails' ? 'border-b-2 border-blue-500 text-blue-500' : ''
          }`}
          onClick={() => handleTabChange('productDetails')}
        >
          Product Details
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'ratingReviews' ? 'border-b-2 border-blue-500 text-blue-500' : ''
          }`}
          onClick={() => handleTabChange('ratingReviews')}
        >
          Rating & Reviews
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'faqs' ? 'border-b-2 border-blue-500 text-blue-500' : ''
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
            <h2 className="text-xl font-bold">Product Details</h2>
            <p>
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. The design is unique and reflects the creativity of the designer.
            </p>
          </div>
        )}

        {activeTab === 'ratingReviews' && (
         <div>
         <h2 className="text-xl font-bold">Rating & Reviews</h2>
         <div className="flex items-center justify-between">
           <div className="flex items-center">
             {/* Dynamic star rating and score */}
             {renderStarRating(4.5)}
             <span className="ml-2">4.5/5</span>
           </div>
           <div className="items-center space-x-2 md:flex hidden">
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
         </div>

         <div className="mt-4 flex justify-between items-center">
           <div>
             <span className="font-bold">All Reviews ({reviews.length})</span>
           </div>
           <div>
             {/* Sorting select box */}
             <select
               className="border p-1"
               value={sortBy}
               onChange={handleSortChange}
             >
               <option value="latest">Latest</option>
               <option value="oldest">Oldest</option>
             </select>
           </div>
         </div>

         <div className={`grid gap-4 mt-4 ${
                gridLayout === 3 ? 'grid-cols-3' : gridLayout === 2 ? 'grid-cols-2' : 'grid-cols-1'
              } md:grid-cols-${gridLayout}`}>
           {sortedReviews.slice(0, showAllReviews ? sortedReviews.length : 6).map((review, index) => (
             <div key={index} className="border p-4 rounded-lg">
               <div className="font-bold">{review.name}</div>
               <div className="text-sm text-gray-500">{review.date}</div>
               <div className="flex items-center">
                 {/* Dynamic star rating for each review */}
                 {renderStarRating(review.rating)}
                 <span className="ml-2">{review.rating}/5</span>
               </div>
               <div>{review.review}</div>
             </div>
           ))}
         </div>

         <button
           className="mt-4 bg-blue-500 text-white px-4 py-2"
           onClick={handleShowMoreReviews}
         >
           {showAllReviews ? 'Show Less' : 'Load More Reviews'}
         </button>

         {/* Write a Review Button */}
         <button
           className="mt-4 bg-green-500 text-white px-4 py-2"
           onClick={openReviewModal}
         >
           Write a Review
         </button>

         {/* Add Review Modal */}
         {isModalOpen && (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
             <div className="bg-white p-6 rounded-lg w-1/2">
               <h2 className="text-xl font-bold mb-4">Write a Review</h2>
               <form
                 onSubmit={(e) => {
                   e.preventDefault();
                   const newReview = {
                     name: e.target.name.value,
                     review: e.target.review.value,
                     date: new Date().toLocaleDateString(),
                     rating: parseFloat(e.target.rating.value),
                   };
                   addReview(newReview);
                 }}
               >
                 <div className="mb-4">
                   <label htmlFor="name" className="block font-bold">Name</label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     className="border p-2 w-full"
                     required
                   />
                 </div>
                 <div className="mb-4">
                   <label htmlFor="review" className="block font-bold">Review</label>
                   <textarea
                     id="review"
                     name="review"
                     className="border p-2 w-full"
                     required
                   />
                 </div>
                 <div className="mb-4">
                   <label htmlFor="rating" className="block font-bold">Rating</label>
                   <input
                     type="number"
                     id="rating"
                     name="rating"
                     min="1"
                     max="5"
                     step="0.5"
                     className="border p-2 w-full"
                     required
                   />
                 </div>
                 <div className="flex justify-end">
                   <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
                   <button type="button" className="ml-2 bg-gray-300 px-4 py-2" onClick={closeReviewModal}>Cancel</button>
                 </div>
               </form>
             </div>
           </div>
         )}
       </div>
        )}

        {activeTab === 'faqs' && (
          <div>
            <h2 className="text-xl font-bold">FAQs</h2>
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