import { baseUrl } from "../../../config/GlobalConfig"

export default async (req, res) => {
    try {
        if (req.method === 'POST') {
            const params = JSON.parse(req.body)
            const url = `${baseUrl}${params.url}`
            const _res = await fetch(url)
            const data = await _res.json()
            console.log({ url, data })
            res.status(200).json(data);
        } else {
            res.status(404).send('API endpoint to get posts. No routes matched.');
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}