import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import BookDetailsPage from './pages/BookDetailsPage';
    import ContactPage from './pages/ContactPage';
    import { Helmet } from 'react-helmet';
    
    function App() {
      return (
        <div className="container">
          <Helmet>
            <title>Harry Potter Bücher</title>
            <meta name="description" content="Entdecken Sie die Welt der Harry Potter Bücher. Informationen zu Erscheinungsdaten, Wert, Verkaufszahlen und mehr." />
          </Helmet>
          <header>
            <h1>Harry Potter Bücher</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/book/:id" element={<BookDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <footer>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/book/1">Stein der Weisen</Link></li>
              <li><Link to="/book/2">Kammer des Schreckens</Link></li>
              <li><Link to="/book/3">Gefangene von Askaban</Link></li>
              <li><Link to="/book/4">Feuerkelch</Link></li>
              <li><Link to="/book/5">Orden des Phönix</Link></li>
              <li><Link to="/book/6">Halbblutprinz</Link></li>
              <li><Link to="/book/7">Heiligtümer des Todes</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
            <p>&copy; 2024 Harry Potter Bücher</p>
          </footer>
        </div>
      );
    }
    
    export default App;
