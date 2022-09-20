let i;

// initialisation des 5 dés
let fiveDices = [
    { 'id': 'dice1', 'face': 0 },
    { 'id': 'dice2', 'face': 0 },
    { 'id': 'dice3', 'face': 0 },
    { 'id': 'dice4', 'face': 0 },
    { 'id': 'dice5', 'face': 0 }
];

// 1 dé
let rollSingleDice = () => {
    return Math.floor(Math.random() * 6 + 1);
};

// fonction qui va nous sortir 5 dés
export const getFiveDice = async (req, res, next) => {    
    try {
        let dices = [];
        for (i = 0; i < 5; i++) {
            fiveDices[i].face = rollSingleDice();
            dices.push(fiveDices[i].face);
        }
        // console.log(dices);
        // res.send(dices);
        res.status(200).json({ dices, success: true })
        // return dices;
    } catch (error) {
        res.status(403) 
    }
};
