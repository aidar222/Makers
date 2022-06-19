import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import TopicDetails from "./Components/TopicDetails/TopicDetails";
import TopicContextProvider from "./Components/Context/TopicContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <TopicContextProvider>
        <Navbar />
        <MainRoutes />
      </TopicContextProvider>
    </div>
  );
};

export default App;
