import {TableComponent} from "./components/TableComponent.jsx";
import {Container} from "@mantine/core";
import '@mantine/core/styles.layer.css';
import {useEffect, useState} from 'react'
import {TournamentService} from "./services/TournamentService.js";
import {MatchService} from "./services/MatchService.js";
import {SportService} from "./services/SportService.js";

function App() {

    const [sports, setSports] = useState([]);
    const [selectedSport, setSelectedSport] = useState(null);
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournaments, setSelectedTournaments] = useState([]);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        MatchService.getMatches()
            .then(setMatches)
            .catch(err => {
                console.error('Error fetching matches:', err);
            });
    }, []);

    useEffect(() => {
        SportService.getSports()
            .then(data => {
                console.log('Sports:', data);
            })
            .catch(err => {
                console.error('Error fetching sports:', err);
            });
    }, []);

    useEffect(() => {
        TournamentService.getTournaments()
            .then(data => {
                console.log('Tournaments:', data);
            })
            .catch(err => {
                console.error('Error fetching tournaments:', err);
            });
    }, []);

  return (
          <Container size="md" mt="xl">
              <TableComponent matches={matches}/>
          </Container>
  )
}

export default App
