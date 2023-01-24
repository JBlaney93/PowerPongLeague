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
    },
    {
        datetime: new Date(),
        w_score: 15,
        l_score: 13,
        winner_id: null,
        winner_name: "Fedau",
        loser_id: null,
        loser_name: "Jill"
    },
    {
        datetime: new Date(),
        w_score: 11,
        l_score: 4,
        winner_id: null,
        winner_name: "Kyle",
        loser_id: null,
        loser_name: "Kelsie"
    },
    {
        datetime: new Date(),
        w_score: 11,
        l_score: 6,
        winner_id: null,
        winner_name: "Lee",
        loser_id: null,
        loser_name: "Jill"
    },
    {
        datetime: new Date(),
        w_score: 14,
        l_score: 12,
        winner_id: null,
        winner_name: "James Blaney",
        loser_id: null,
        loser_name: "Lee"
    }
];

module.exports = { playersData, gamesData }