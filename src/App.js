import './App.scss';
import './scss/Animations.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/organisms/header/Header';
import News from './views/News/News';
import Shop from './views/Shop/Shop';
import NotFound from './views/404/NotFound';
import Nav from './components/organisms/nav/Nav'
import 'simplebar/dist/simplebar.min.css';
import { useEffect, useState } from 'react';
import ErrorMessage from './components/utils/ErrorMessage';
import NewItems from './views/newItems/NewItems';
import Statistics from './views/Statistics/Statistics';
import Footer from './components/molecules/Footer';

function App() {
  const [shop, setShop] = useState({
    featured: [],
    daily: [],
    superOffers: []
  });
  const [news, setNews] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const getShop = async () => {
      fetch('https://fortnite-api.com/v2/shop/br?language=pl')
          .then(data => data.json())
          .then(data => {
            setShop({
              featured: data.data.featured?.entries,
              daily: data.data.daily?.entries,
              superOffers: data.data.specialFeatured?.entries
            });
          }).catch(() => {
              setError(true);
          });
  }
  const getNews = async () => {
      fetch('https://fortnite-api.com/v2/news/br?language=pl')
          .then(data => data.json())
          .then(data => {
              setNews(data.data.motds);
          }).catch(() => {
              setError(true);
          });
  }
  const getItems = async () => {
    fetch("https://fortnite-api.com/v2/cosmetics/br/new?language=pl")
      .then(data => data.json())
      .then(data => {
          setItems(data.data.items);
      }).catch(() => {
          setError(true);
      });
  }
  useEffect(() => {
    getShop();
    getNews();
    getItems();
  }, [])

  if (error) {
      return <ErrorMessage />
  }
  return (
    <Router basename='infonite'>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<News news={news} />} />
            <Route path="/news" element={<News news={news} />} />
            <Route path="/sklep" element={<Shop data={shop} />} />
            <Route path="/przedmioty" element={<NewItems items={items} />} />
            <Route path="/statystyki" element={<Statistics setUser={setUser} user={user} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
