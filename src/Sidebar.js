import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);
  const recentItem = (topic) =>
  (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>

  );
  return (
   
    <div className='sidebar'>
   <div className="sidebar__top">
    <img src="https://static.vecteezy.com/system/resources/previews/002/537/334/large_2x/light-multicolor-blur-background-vector.jpg" alt="" />
    <Avatar src={user.photoUrl}className='sidebar__avatar'>{user.email[0]}</Avatar>
    <h2>{user.displayName}</h2>
    <h4>{user.email}</h4>
   </div>
   <div className="sidebar__stats">
    <div className="sidebar__stat">
       <p>who viewed you</p>
       <p className="sidebar__statnumber">2,543</p>
    </div>
    <div className="sidebar__stat">
      <p>views on Post</p>
       <p className="sidebar__statnumber">2,448</p>
    </div>
   </div>
   <div className="sidebar__botton">
    <p>Recent</p>
    {recentItem('reactjs')}
    {recentItem('programming')}
    {recentItem('softwaredevelopment')}
    {recentItem('design')}
    {recentItem('developer')}

   </div>
      
    </div>
  )
}

export default Sidebar;
