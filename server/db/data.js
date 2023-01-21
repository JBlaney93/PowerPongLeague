const playersData = [
    {name: "Fedau"},
    {name: "Lee"},
    {name: "Kyle"},
    {name: "Kelsie"},
    {name: "James Boag"},
    {name: "Josh Mackie"},
    {name: "Séamus"},
    {name: "James Blaney"},
    {name: "Jill"}
];

const gamesData = [
    {
        datetime: new Date(),
        w_score: 11,
        l_score: 8,
        winner_id: null,
        winner_name: "Séamus",
        loser_id: null,
        loser_name: "Jill"
    },
    {
        datetime: new Date(),
        w_score: 11,
        l_score: 9,
        winner_id: null,
        winner_name: "James Blaney",
        loser_id: null,
        loser_name: "Séamus"
    }
];

module.exports = { playersData, gamesData }