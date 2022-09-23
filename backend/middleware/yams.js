import { PatryModel } from './../model/Patry.js'; 
import { ResultModel } from './../model/Result.js';

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

//fonction nombre d'occurences
function countOccurences(tab) {
    let result = {};
    let message;
    let nb = 0;

    tab.forEach((elem) => {
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
            message = "Exceptionnel !!! 3 pâtisseries de gagné WHAOU!";
            nb = 3;
            break
        default: // case 1
            message = "Désolé c'est perdu .... :'(";
            nb = 0;
    }

    const retour = { nombre: nb, message: message }
    return retour;
}


// fonction qui va nous sortir 5 dés (GET POST)
export const getFiveDice = async (req, res, next) => {    
    try {
        let dices = [];
        for (i = 0; i < 5; i++) {
            fiveDices[i].face = rollSingleDice();
            dices.push(fiveDices[i].face);
        }
        
        //user
        let { user } = req.body;

        //nombre de pâtisserie
        let nb = countOccurences(dices).nombre;

        // nom pâtisserie
        let random = Math.floor(Math.random() * 8);
        let pastry = await PatryModel.find({}).select('name');

        // date heure
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const hour = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

        res.status(200).json({ dices: dices, nombre: nb, message: countOccurences(dices).message, success: true })

        if (nb > 0) {
            for (let i = 0; i < nb; i++) {

                let randomPastry = pastry[random].name;

                let PastryNumber = await PatryModel.find({}).select('number').where('name').equals(randomPastry);

                await PatryModel.updateOne({ name: randomPastry }, { number: PastryNumber[0].number - 1 })

                const post = new ResultModel({
                    user: user,
                    name: randomPastry,
                    number: nb,
                    date: date,
                    hour: hour
                });
                await post.save();
                res.send(post);
                
            }
        }
        else {
            const post = new ResultModel({
                user: user,
                name: 'pas de pâtisserie de gagné',
                number: 0,
                date: date,
                hour: hour
            });
            await post.save();
            res.send(post);
        }
        
        // return dices;
    } catch (error) {
        res.status(403) 
    }
};