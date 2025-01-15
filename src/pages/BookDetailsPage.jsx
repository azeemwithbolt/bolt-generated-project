import React from 'react';
    import { useParams } from 'react-router-dom';
    import { Helmet } from 'react-helmet';
    
    const bookDetails = {
      1: {
        title: 'Harry Potter und der Stein der Weisen',
        description: 'Der erste Band der Harry-Potter-Reihe, in dem Harry erfährt, dass er ein Zauberer ist und nach Hogwarts geht. Er trifft seine besten Freunde Ron und Hermine und beginnt sein Abenteuer in der magischen Welt.',
        details: [
          "Erscheinungsdatum: 26. Juni 1997",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger",
          "Handlung: Harry entdeckt seine magischen Fähigkeiten und beginnt sein erstes Schuljahr in Hogwarts."
        ],
        keywords: "harry potter bücher teil 1, harry potter bücher stein der weisen, harry potter bücher"
      },
      2: {
        title: 'Harry Potter und die Kammer des Schreckens',
        description: 'Harry kehrt nach Hogwarts zurück und muss sich mit einer mysteriösen Kammer und einem Monster auseinandersetzen. Er entdeckt dunkle Geheimnisse und muss sich seinen Ängsten stellen.',
        details: [
          "Erscheinungsdatum: 2. Juli 1998",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger, Ginny Weasley",
          "Handlung: Die Kammer des Schreckens wird geöffnet und ein Monster terrorisiert Hogwarts."
        ],
        keywords: "harry potter bücher teil 2, harry potter bücher kammer des schreckens, harry potter bücher"
      },
      3: {
        title: 'Harry Potter und der Gefangene von Askaban',
        description: 'Ein gefährlicher Verbrecher ist aus Askaban entkommen und Harry muss sich mit seiner Vergangenheit auseinandersetzen. Er erfährt mehr über seine Eltern und die dunklen Mächte, die sie bedrohten.',
        details: [
          "Erscheinungsdatum: 8. Juli 1999",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger, Sirius Black",
          "Handlung: Sirius Black, ein vermeintlicher Anhänger von Voldemort, entkommt aus Askaban."
        ],
        keywords: "harry potter bücher teil 3, harry potter bücher gefangene von askaban, harry potter bücher"
      },
      4: {
        title: 'Harry Potter und der Feuerkelch',
        description: 'Harry wird unerwartet zum Trimagischen Turnier zugelassen und muss sich gefährlichen Herausforderungen stellen. Er wird in eine Verschwörung verwickelt, die seine Welt für immer verändern wird.',
        details: [
          "Erscheinungsdatum: 8. Juli 2000",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger, Lord Voldemort",
          "Handlung: Harry nimmt am Trimagischen Turnier teil und trifft auf Lord Voldemort."
        ],
         keywords: "harry potter bücher teil 4, harry potter bücher feuerkelch, harry potter bücher"
      },
      5: {
        title: 'Harry Potter und der Orden des Phönix',
        description: 'Harry und seine Freunde gründen eine geheime Organisation, um sich gegen die wachsende Bedrohung durch Voldemort zu wehren. Sie kämpfen gegen die Ungerechtigkeit und die dunklen Mächte, die die magische Welt bedrohen.',
        details: [
          "Erscheinungsdatum: 21. Juni 2003",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger, Dumbledore",
          "Handlung: Harry gründet Dumbledores Armee, um sich gegen Voldemort zu wehren."
        ],
        keywords: "harry potter bücher teil 5, harry potter bücher orden des phönix, harry potter bücher"
      },
      6: {
        title: 'Harry Potter und der Halbblutprinz',
        description: 'Harry erfährt mehr über Voldemorts Vergangenheit und muss sich auf den finalen Kampf vorbereiten. Er entdeckt dunkle Geheimnisse und muss sich seinen Ängsten stellen.',
        details: [
          "Erscheinungsdatum: 16. Juli 2005",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger, Dumbledore",
          "Handlung: Harry erfährt mehr über Voldemorts Vergangenheit und bereitet sich auf den finalen Kampf vor."
        ],
        keywords: "harry potter bücher teil 6, harry potter bücher halbblutprinz, harry potter bücher"
      },
      7: {
        title: 'Harry Potter und die Heiligtümer des Todes',
        description: 'Der finale Band, in dem Harry und seine Freunde sich auf die Suche nach den Horkruxen machen und sich dem finalen Kampf gegen Voldemort stellen. Sie müssen alles riskieren, um die magische Welt zu retten.',
        details: [
          "Erscheinungsdatum: 21. Juli 2007",
          "Hauptcharaktere: Harry Potter, Ron Weasley, Hermine Granger, Lord Voldemort",
          "Handlung: Harry und seine Freunde suchen nach den Horkruxen und stellen sich dem finalen Kampf gegen Voldemort."
        ],
        keywords: "harry potter bücher teil 7, harry potter bücher heiligtümer des todes, harry potter bücher"
      }
    };
    
    function BookDetailsPage() {
      const { id } = useParams();
      const book = bookDetails[id];
    
      if (!book) {
        return <div>Buch nicht gefunden</div>;
      }
    
      return (
        <div>
          <Helmet>
            <title>{book.title} - Harry Potter Bücher</title>
            <meta name="description" content={book.description} />
            <meta name="keywords" content={book.keywords} />
          </Helmet>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <h3>Details</h3>
          <ul>
            {book.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default BookDetailsPage;
