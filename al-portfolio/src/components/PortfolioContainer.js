import React, { useState } from 'react';
import Nav from './Nav';
import Resume from './pages/Resume';
import About from './pages/About';
import MyPortfolio  from './pages/MyPortfolio';
import Contact from './pages/Contact';
import Header from './Header';

function PortfolioContainer() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'My Portfolio':
        return <MyPortfolio />;
      case 'Contact':
        return <Contact />;
        case 'Resume':
            return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div><Header/>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PortfolioContainer;