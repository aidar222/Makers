import React from 'react';
import Counter from './Components/Counter/Counter';
import SideBar from './Components/SideBar/SideBar';
import UserGreet from './Components/UserGreet/UserGreet';

const App = () => {
  return  <div className='d-flex justify-content-between'>
    {/* <Counter/> */}
    {/* <UserGreet/> */}
    <SideBar place='left'/>
    <SideBar place='right'/>
  </div>
};

export default App;