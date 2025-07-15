import {useEffect, useState} from 'react'
import './App.css'
import {TournamentService} from "./services/TournamentService.js";
import {MatchService} from "./services/MatchService.js";
import {SportService} from "./services/SportService.js";

function App() {

    useEffect(() => {
        MatchService.getMatches()
            .then(data => {
                console.log('Matches:', data);
            })
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
      <div></div>
  )
}

export default App
