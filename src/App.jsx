import { useSelector } from 'react-redux';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import RecentWork from './components/RecentWork';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  const { popupClicked } = useSelector((state) => state.popup);
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
