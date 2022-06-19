import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/NavBar/Header';
import MainRoutes from './MainRoutes';
import TodoContextProvider from './Context/TodoContext';

const App = () => {
  return (
    <div>
      <TodoContextProvider>
      <Header/>
      <MainRoutes/>
      </TodoContextProvider>
    </div>
  );
};

export default App;