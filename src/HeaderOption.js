import React from 'react';
import "./HeaderOption.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({avatar,Icon,title,onClick}) { //we can use props as well
  const user =useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'> 
    {Icon && <Icon className="HeaderOption__icon"/>}
    {avatar && <Avatar  className="HeaderOption__icon" src={user?.photoUrl}>{user?.email[0]}</Avatar> }
    <h3 className='HeaderOption__title'>{title}</h3>

      
    </div>
  )
}

export default HeaderOption;
