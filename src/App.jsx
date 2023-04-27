import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Introduction from './components/Introduction';
import RecentWork from './components/RecentWork';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  const { popupClicked } = useSelector((state) => state.popup);

  useEffect(() => {
    // set the scroll property of entire body when popup is clicked
    if (popupClicked) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  })

  return (
    <div className={`App scroll-smooth ${popupClicked && 'bg-white/25'}`}>
      <Header />
      <Introduction />
      <Skills />
      <Socials />
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
