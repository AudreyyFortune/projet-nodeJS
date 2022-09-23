import { ResultModel } from './../model/Result.js';

export default async function result(req, res) {
    const results = await ResultModel.find({});
    res.send(results)
}
