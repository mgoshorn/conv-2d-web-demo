import React from 'react';
import './App.css';
import HeaderComponent from './components/header.component';
import ContentComponent from './components/content.component';
import FooterComponent from './components/footer.component';

const App: React.FC = () => {
  return (
    <div id="app-container">
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
