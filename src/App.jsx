import {TableComponent} from "./components/TableComponent.jsx";
import {Box, Container, Flex} from "@mantine/core";
import '@mantine/core/styles.layer.css';
import {useEffect, useState} from 'react'
import {TournamentService} from "./services/TournamentService.js";
import {MatchService} from "./services/MatchService.js";
import {SportService} from "./services/SportService.js";
import SelectableComponent from "./components/SelectableComponent.jsx";
import SidebarComponent from "./components/SidebarComponent.jsx";

function App() {

    const [sports, setSports] = useState([]);
    const [selectedSports, setSelectedSports] = useState([]);
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
            .then(setSports)
            .catch(err => {
                console.error('Error fetching sports:', err);
            });
    }, []);

    useEffect(() => {
        TournamentService.getTournaments()
            .then(setTournaments)
            .catch(err => {
                console.error('Error fetching tournaments:', err);
            });
    }, []);

  return (
      <Flex align="flex-start" gap={0}>
          <Box style={{ flex: 0, minWidth: 300 }} p="sm">
              <SidebarComponent
                  sports={sports}
                  onChange={setSelectedSports}
              />
          </Box>
          <Box style={{ width: '100%' }} p="sm">
              <Container fluid size="md">
                  <SelectableComponent
                      tournaments={tournaments}
                      onChange={setSelectedTournaments}
                  />
                  <TableComponent matches={matches}/>
              </Container>
          </Box>
      </Flex>
  )
}

export default App
