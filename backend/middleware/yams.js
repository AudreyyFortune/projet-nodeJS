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

//fonction nombre d'occurences (=> return le max)
function countOccurences(tab) {
    let result = {};
    let message;
    let nb = 0;

    tab.forEach(function (elem) {
        if (elem in result) {
            result[elem] = ++result[elem];
        }
        else {
            result[elem] = 1;
        }
    });
    const max = Math.max.apply(null, Object.values(result));

    switch(max) {
        case 2:
        case 3:
            message = "1 pâtisserie de gagné !";
            nb = 1;
            break
        case 4:
            message = "2 pâtisseries de gagné WHAOU!";
            nb = 2;
            break
        case 5:
            message = "Execptionnel !!! 3 pâtisseries de gagné WHAOU!";
            nb = 3;
            break
        default: // case 1
            message = "Désolé c'est perdue .... :'(";
            nb = 0;
    }

    const retour = { nombre: nb, message: message }
    return retour;
}

// fonction qui va nous sortir 5 dés
export const getFiveDice = async (req, res, next) => {    
    try {
        let dices = [];
        for (i = 0; i < 5; i++) {
            fiveDices[i].face = rollSingleDice();
            dices.push(fiveDices[i].face);
        }
        res.status(200).json({ dices: dices, nombre: countOccurences(dices).nombre, message: countOccurences(dices).message, success: true })
        // return dices;
    } catch (error) {
        res.status(403) 
    }
};
