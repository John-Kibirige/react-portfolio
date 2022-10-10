import Header from './components/Header';
import Introduction from './components/Introduction';
import RecentWork from './components/RecentWork';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App px-5 -z-50">
      <Header />
      <Introduction />
      <Skills />
      <Socials />
      <RecentWork />
    </div>
  );
}

export default App;
