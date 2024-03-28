import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useState } from 'react';

const ProductCard = ({ name, image, description, _id }) => {
  const [loading, setLoading] = useState(false);

  const bookTour = async () => {
    try {
      setLoading(true);
      const stripe = await loadStripe(
        'pk_test_51OzA5ZSIgDudJ4OdKsFfhVbxBosHIRA0DhTS8YuZJBK0aE9J0dv5Vd2DjxFTfLuLav5mCtZyXjJRbcIE5KJhLE2q007bwAvbK4'
      );
      const session = await axios.get(`/api/v1/bookings/checkout-session/${_id}`, { withCredentials: true });
      console.log(session);
      console.log(session.data.session.id);

      try {
        await stripe.redirectToCheckout({
          sessionId: session.data.session.id
        });
      } catch (err) {
        console.log('error in checkout ' + err);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="w-72">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm ">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="product-iamge" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">{name}</h5>
          </a>
          <p className="font-normal text-sm text-gray-600  leading-tight">{description}</p>
          <p className="my-1 font-semibold">$58</p>
          <a
            href="#"
            className="text-white bg-[#121e31] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? 'Processing...' : 'Purchase'}
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
