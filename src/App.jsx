import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import RecentWork from './components/RecentWork';
import Skills from './components/Skills';
import Socials from './components/Socials';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

function App() {
  const { popupClicked } = useSelector((state) => state.popup);

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (popupClicked) {
  //     enableBodyScroll(document.body);
  //     setCount((count) => count + 1);
  //   }
  //   if (!popupClicked) {
  //     disableBodyScroll(document.body);
  //     setCount((count) => count + 1);
  //   }
  // }, [count]);

  // console.log('the count at this point is ', count);
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
