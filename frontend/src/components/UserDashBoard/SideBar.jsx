import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTab } from '../../redux/Slices/tabNav';
import { setSideBarOpen } from '../../redux/Slices/tabNav';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sideBarOpen = useSelector((store) => store.tabNav.sideBarOpen);
  const formData = useSelector((store) => store.registration.formData);

  const [openSubTab, setOpenSubTab] = useState('');

  const docSubTab = ['Status', 'Notices', 'Land', 'Incident Report', 'Private'];
  useEffect(() => {
    dispatch(setTab('rec-sec'));
  }, []);

  return (
    <nav
      className={`bg-[#121e31] shadow-lg h-screen fixed top-0 ${
        sideBarOpen ? 'left-0' : '-left-72'
      } lg:left-0 min-w-[250px] py-6 px-4 font-[sans-serif] z-50 lg:relative overflow-auto space-y-6`}
    >
      <div onClick={() => dispatch(setSideBarOpen())} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 cursor-pointer fill-white absolute right-4 top-4"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          />
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          />
        </svg>
      </div>

      <div className="flex flex-wrap items-center cursor-pointer mb-12">
        <img
          src={formData.photo ? formData.photo : 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="ml-4">
          <p className="text-sm text-gray-100">{`${formData.firstName} ${
            formData.middleName ? formData.middleName : ''
          } ${formData.lastName}`}</p>
          <p className="text-xs text-gray-300 mt-1">{formData.primaryEmail}</p>
        </div>
      </div>

      <div className="flex cursor-pointer group">
        <h6 className="text-gray-400 group-hover:text-white text-sm font-bold px-4 flex-1">Family Member</h6>
      </div>

      <div className="transition-all duration-300">
        <div
          onClick={() => setOpenSubTab(openSubTab === 'document' ? '' : 'document')}
          className="flex cursor-pointer group"
        >
          <h6
            
            className="text-gray-400 group-hover:text-white text-sm font-bold px-4 flex-1"
          >
            Document
          </h6>
          {openSubTab === 'document' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-600 group-hover:fill-white"
              viewBox="0 0 451.847 451.847"
            >
              <path
                d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                data-original="#000000"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-600 group-hover:fill-white -rotate-90"
              viewBox="0 0 451.847 451.847"
            >
              <path
                d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                data-original="#000000"
              />
            </svg>
          )}
        </div>
        <ul
          className={`space-y-1 mt-2 pl-4 ${
            openSubTab === 'document' ? 'block' : 'hidden'
          } transition-all duration-300`}
        >
          {docSubTab.map((subTab) => {
            return (
              <li
                onClick={() => {
                  navigate('/dashboard/docs');
                  dispatch(setTab(subTab));
                }}
                key={subTab}
              >
                <a className="text-gray-400 hover:text-black transition-all text-sm cursor-pointer flex items-center hover:bg-gray-200 rounded-md px-4 py-3">
                  <span>{subTab}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* list my details */}

      <div
        onClick={() => {
          navigate('/dashboard/details');
        }}
        className="flex cursor-pointer group"
      >
        <h6 className="text-gray-400 group-hover:text-white text-sm font-bold px-4 flex-1">My Details</h6>
      </div>
      <div onClick={() => navigate('/dashboard')} className="flex cursor-pointer group">
        <h6 className="text-gray-400 group-hover:text-white text-sm font-bold px-4 flex-1">Officials</h6>
      </div>
      <div onClick={() => navigate('/dashboard/shop')} className="flex cursor-pointer group">
        <h6 className="text-gray-400 group-hover:text-white text-sm font-bold px-4 flex-1">Shop</h6>
      </div>
      {formData.role === 'secretary' && (
        <div onClick={() => navigate('/dashboard/admin')} className="flex cursor-pointer group">
          <h6 className="text-gray-400 group-hover:text-white text-sm font-bold px-4 flex-1">Rec-Sec Dashboard</h6>
        </div>
      )}
    </nav>
  );
};

export default SideBar;
