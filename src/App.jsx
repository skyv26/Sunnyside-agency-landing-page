import React from 'react';
import AgencyHeader from './components/header.styled';
import SunnySideLogo from './utils/SunnySideLogo';

const App = () => (
  <>
    <AgencyHeader>
     <SunnySideLogo />
      <svg 
        width="24" 
        height="18"
        role="img"
        aria-labelledby='title desc'
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="title">Hamburger Icon</title>
        <desc id="desc">Hamburger</desc>
          <path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" 
          fill="#FFF" 
          fill-rule="evenodd"/>
      </svg>
    </AgencyHeader>
  </>
);

export default App;