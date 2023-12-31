import React from 'react';
import { AiFillDashboard, AiFillFolderAdd, AiFillProfile, AiOutlineHome } from 'react-icons/ai';
import { IoIosMan } from 'react-icons/io';
import { FcAbout } from 'react-icons/fc';
import './Sidebar.css'; // Import your custom CSS for additional styling
import { useNavigate } from 'react-router';

const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className='bg-light sidebar' style={{ width: '200px', }} >
      <div className='brand' >
       
        <span className='brand-name fs-4' style={{color:'black'}}>Foot Locker</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
      <span onClick={()=>navigate('/dashboard')} > <CustomListItem icon={<AiFillDashboard />  } text="Dashboard" /></span>   
      <span  onClick={()=>navigate('/')}>   <CustomListItem    icon={<AiOutlineHome /> } text="Home" /></span>  
      <span  onClick={()=>navigate('/products')}><CustomListItem  icon={<AiFillProfile />} text="Products" /></span>
      <span  onClick={()=>navigate('/addproduct')}>    <CustomListItem icon={<AiFillFolderAdd/>} text="Add product" /></span>
          <span onClick={()=>navigate('/Costomers')}>  <CustomListItem icon={<IoIosMan />} text="Customers" /></span>
        <CustomListItem icon={<FcAbout />} text="About" />
      </div>
    </div>
  );
};

const CustomListItem = ({ icon, text }) => {
  return (
    <span className='list-group-item list-group-item-action my-2 custom-list-item'>
      <i>{icon}</i>
      <span>{text}</span>
    </span>
  );
};

export default Sidebar;
