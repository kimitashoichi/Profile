import './App.css';

// TODO: RazyRoadに変更する
import { HeaderComponent } from './components/util/Header';
import { Top } from './components/top-section/index';
import { CarrierSection } from './components/carrier-section/index';
import { SkillMapComponent } from './components/skill-map-section/index';
import { BlogComponent } from './components/blog-section/index';
import { ContactComponent } from './components/contact-section/index';
import { FooterComponent } from './components/util/Footer';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Top />
      <CarrierSection />
      <SkillMapComponent />
      <BlogComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
