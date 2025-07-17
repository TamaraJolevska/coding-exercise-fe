export const SportService = {
    getSports() {
        return fetch('/api/sport/all', {
            method:"GET"
        }).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Request failed with status code ${res.status}.`)
                }
            })
            .catch((error) => {
                console.log("Error occurred while loading sport data.");
                console.log(error);
                throw error;
            });
    }
};