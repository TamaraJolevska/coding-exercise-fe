export const TournamentService = {
    getTournaments() {
        return fetch('/api/tournament/all', {
            method:"GET"
        }).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Request failed with status code ${res.status}.`)
                }
            })
            .catch((error) => {
                console.log("Error occurred while loading tournament data.");
                console.log(error);
                throw error;
            });
    }
};