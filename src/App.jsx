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
    const [filteredTournaments, setFilteredTournaments] = useState([]);
    const [matches, setMatches] = useState([]);
    const [filteredMatches, setFilteredMatches] = useState([]);

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

    useEffect(() => {
        if (tournaments.length === 0) return;
        if (selectedSports.length > 0) {
            const selectedSportIds = new Set(selectedSports.map(s => Number(s)));
            const filtered = tournaments.filter(t => selectedSportIds.has(Number(t.sportId)));
            setFilteredTournaments(filtered);
        } else {
            setFilteredTournaments(tournaments);
        }
    }, [selectedSports, tournaments]);

    useEffect(() => {
        if (matches.length === 0) {
            setFilteredMatches([]);
            return;
        }

        const filteredTournamentsIds = new Set(filteredTournaments.map(t => Number(t.id)));
        const selectedTournamentIds = new Set(selectedTournaments.map(t => Number(t)));

        const tournamentIdsForMatches = selectedTournamentIds.size > 0 ? selectedTournamentIds : filteredTournamentsIds;

        const filtered = matches.filter(m => tournamentIdsForMatches.has(Number(m.tournamentId)));
        setFilteredMatches(filtered);
    }, [matches, filteredTournaments, selectedTournaments]);

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
                      tournaments={filteredTournaments}
                      onChange={setSelectedTournaments}
                  />
                  <TableComponent matches={filteredMatches}/>
              </Container>
          </Box>
      </Flex>
  )
}

export default App
