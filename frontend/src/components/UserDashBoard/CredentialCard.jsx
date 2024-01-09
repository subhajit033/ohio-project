import React from 'react';

const CredentialCard = () => {
  return (
    <div className=" flex-wrap gap-4 justify-center h-[89vh] overflow-auto items-start border-2 border-red-600 flex-1 py-4 px-4">
      <div className="flex justify-center items-start gap-20 border-2 border-dashed border-black py-10">
        <div className='space-y-4'>
          <img
            className="w-28 h-28 rounded-full"
            src='https://icon-library.com/images/icon-user/icon-user-15.jpg'
            alt="avatar"
          />
          <img
            className="w-28 h-28 rounded-full"
            src="https://th.bing.com/th/id/R.73f0c1c70043db325c3f90396c928888?rik=rO9ADxTm7ph1PA&riu=http%3a%2f%2fclipground.com%2fimages%2fofficial-seal-clipart-12.jpg&ehk=iPelxY23s0dn85n6LR3P3qmWRZUV%2fyOFVjSqmAbqWas%3d&risl=&pid=ImgRaw&r=0"
            alt="seal"
          />
        </div>
        <div>
          <p className='font-semibold text-xl'>Name - Subhajit Kundu</p>
          <p className='font-semibold text-xl'>Born - 20 Dec, 2004</p>
          <p className='font-semibold text-xl'>Sex - male</p>
          <p className='font-semibold text-xl'>Place Of Inhabitance - Delhi, In</p>
          <p className='font-semibold text-xl'>Mailing Address - Dummy</p>
          <p className='font-semibold text-xl'>Mailing Address 2 - dummy</p>
          <p className='font-semibold text-xl'>Mailing City - dummy</p>
          <p className='font-semibold text-xl'>County - dummy</p>
          <p className='font-semibold text-xl'>Mailing State - dummy</p>
          <p className='font-semibold text-xl'>Mailing Postal Code - dummy</p>
          <p className='font-semibold text-xl'>Nationality - Us</p>
          <p className='font-semibold text-xl'>Status - dummy</p>
          <p className='font-semibold text-xl'>Recording Number - dummy</p>
          <p className='font-semibold text-xl'>Master Record - dummy</p>
          <p className='font-semibold text-xl'>Account Created - dummy</p>
          <p className='font-semibold text-xl'>Date Updated - dummy</p>
          <p className='font-semibold text-xl'>Print Credential Card Date - dummy</p>
          <p className='font-semibold text-xl'>Master Credential Card Number - dummy</p>
        </div>
      </div>
    </div>
  );
};

export default CredentialCard;
