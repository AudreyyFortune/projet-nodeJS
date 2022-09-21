import { PatryModel } from './../model/Patry.js';

export default async function home(req, res) {
    const pastries = await PatryModel.find({});
    res.send(pastries)
}
