import { PatryModel } from './../model/Patry.js'

export default async function home(req, res) {
    const patries = await PatryModel.find({});
    //res.send(patries)
    

    res.render('home');
}
