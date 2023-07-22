# Quiz App

Full Stack Open -kurssin projektityö. Sovellus on tehty React/Node-combolla.

Sovellus pyörii Herokussa: https://fullstackmooc-quiz-app.herokuapp.com/

### Quiz App on sovellus, jossa käyttäjä voi tehdä erilaisia tietovisoja. Rekisteröityneet käyttäjät voivat lisäksi lisätä omia tietovisoja sovellukseen.

Sovelluksen tämänhetkiset ominaisuudet:
- Tunnusten luominen: Käyttäjä voi rekisteröityä palveluun, jonka vaatimuksena on uniikki käyttäjätunnus ja vähintään 8 merkin pituinen salasana.
- Sisäänkirjautuminen: Käyttäjä voi kirjautua sisään tunnuksillaan. Tämä jälkeen hän voi luoda uusia tietovisoja ja hallinnoida itse tekemiään tietovisoja.
- Uuden tietovisan luominen: Kirjautunut käyttäjä voi luoda uuden tietovisan. Tietovisan vaatimuksina on nimi, kuvaus, vähintään yksi kysymys, jossa on vähintään kaksi vastausvaihtoehtoa, sekä määritelty yksi oikea vastaus. Vastausvaihtoehtoja voi olla muuten rajattomasti. Lisäksi käyttäjä voi valita, näytetäänkö tietovisan tekijälle oikeat vastauksen suorituksen jälkeen. 
- Tietovisan poistaminen: Käyttäjä voi poistaa itse luomiaan tietovisoja.
- Tietovisan tekeminen: Haluamansa tietovisan voi valita klikkaamalla. Tietovisassa tulee vastata ainakin yhteen kysymykseen. Kysymykset ovat yhden vastauksen monivalintakysymyksiä. Tietovisan voi peruuttaa cancel-nappulasta, jolloin sovellus palaa takaisin tietovisojen yhteisnäkymään. Save-nappulalla tietovisan vastaukset tarkistetaan ja käyttäjälle näytetään kokonaistulos. Jos tietovisassa on niin määritelty, näytetään myös oikeat ja väärät vastaukset.
- Etusivulla on lyhyt kuvaus sovelluksesta, sekä randomilla valitut 5 tietovisaa, joihin pääsee suoraan klikkaamalla. Lisäksi alareunassa on linkki satunnaisesti valittuun tietovisaan.
- Sovelluksen yläreunassa on navigointipalkki, jossa on mahdollista navigoida etusivun, tietovisasivun ja kirjautumis-/adminsivun välillä.


Sovelluksesta tällä hetkellä puuttuvia ominaisuuksia/piirteitä:
- Design ja käyttäjäkeskeinen suunnittelu
- Käyttäjätunnuksen hallinointi, salasanan palautus
- Tietovisojen muokkausmahdollisuus
- Tietovisojen kategorisointi ja lajittelu kategorioiden perusteella
- Laskuri, joka kertoo kuinka monesti tietovisa on tehty
- Mahdollisuus useampaan oikeaan vastaukseen sekä kuvien käyttöön kysymyksissä
- Testiautomaatio
- Validointia pitäisi olla huomattavasti enemmän, etenkin backendissa. Sovellus ei kestä rankkaa väärinkäyttöä.
  

Sovelluksen backend: https://github.com/jennijavanainen/QuizApp-backend



