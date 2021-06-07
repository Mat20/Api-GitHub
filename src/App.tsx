import React from 'react';
import  Profile  from './components/Profile';
import  GitHubApi from './components/GitHubApi';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
     <GitHubApi />
     <Profile />

     <GlobalStyles />
    </>
  );
}

export default App;

