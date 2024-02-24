import { useSelector } from 'react-redux';

const CredentialCard = () => {
  const myDetails = useSelector((store) => store.user.myDetails);
  return (
    
      <div className="flex justify-center items-start gap-20 border-2 border-dashed border-black py-10">
        <div className="space-y-4">
          <img
            className="w-28 h-28 rounded-full"
            src={myDetails.photo || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
            alt="avatar"
          />
          <img
            className="w-28 h-28 rounded-full"
            src={
              myDetails.seal ||
              'https://th.bing.com/th/id/R.73f0c1c70043db325c3f90396c928888?rik=rO9ADxTm7ph1PA&riu=http%3a%2f%2fclipground.com%2fimages%2fofficial-seal-clipart-12.jpg&ehk=iPelxY23s0dn85n6LR3P3qmWRZUV%2fyOFVjSqmAbqWas%3d&risl=&pid=ImgRaw&r=0'
            }
            alt="seal"
          />
        </div>
        <div>
          <p className="font-semibold lg:text-xl text-blue-500">
            Name -{' '}
            <span className="text-purple-500">{`${myDetails.firstName} ${
              myDetails.middleName ? myDetails.middleName : ''
            } ${myDetails.lastName}`}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Born -{' '}
            <span className="text-purple-500">
              {new Date(myDetails?.born).toLocaleString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Sex - <span className="text-purple-500"> {myDetails.sex}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Place Of Inhabitance - <span className="text-purple-500"> {myDetails.placeOfInhabitance}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Mailing Address - <span className="text-purple-500"> {myDetails.mailingAddress}</span>
          </p>
          {myDetails.SecMailingAddress && (
            <p className="font-semibold lg:text-xl text-blue-500">
              Mailing Address 2 - <span className="text-purple-500"> {myDetails.SecMailingAddress}</span>
            </p>
          )}
          <p className="font-semibold lg:text-xl text-blue-500">
            Mailing City - <span className="text-purple-500"> {myDetails.mailingCity}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            County - <span className="text-purple-500"> {myDetails.county}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Mailing State - <span className="text-purple-500"> {myDetails.mailingState}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Mailing Postal Code - <span className="text-purple-500"> {myDetails.postalCode}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Nationality - <span className="text-purple-500"> {myDetails.nationality}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Status - <span className="text-purple-500"> {myDetails.status}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Recording Number - <span className="text-purple-500"> {myDetails.recordingNumber}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Master Record - <span className="text-purple-500"> {myDetails.masterRecord}</span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Account Created -{' '}
            <span className="text-purple-500">
              {new Date(myDetails?.createdAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Date Updated -{' '}
            <span className="text-purple-500">
              {new Date(myDetails?.updatedAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Print Credential Card Date -{' '}
            <span className="text-purple-500">
              {myDetails.credentialCardPrintDate
                ? new Date(myDetails?.credentialCardPrintDate).toLocaleString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })
                : 'NA'}
            </span>
          </p>
          <p className="font-semibold lg:text-xl text-blue-500">
            Master Credential Card Number -{' '}
            <span className="text-purple-500"> {myDetails.masterCredentialCardNumber}</span>
          </p>
        </div>
      </div>
    
  );
};

export default CredentialCard;
