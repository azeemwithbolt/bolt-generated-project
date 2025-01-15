import React from 'react';
    import { Helmet } from 'react-helmet';
    
    function ContactPage() {
      return (
        <div>
          <Helmet>
            <title>Kontakt - Harry Potter Bücher</title>
            <meta name="description" content="Kontaktieren Sie uns bei Fragen oder Anregungen zu den Harry Potter Büchern." />
          </Helmet>
          <h2>Kontaktieren Sie uns</h2>
          <p>
            Haben Sie Fragen oder Anregungen? Kontaktieren Sie uns gerne über das folgende Formular:
          </p>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">E-Mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Nachricht:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Senden</button>
          </form>
        </div>
      );
    }
    
    export default ContactPage;
