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
            const id = req.query.id
            const url = `${baseUrl}/v1/post/${id}`
            const _res = await fetch(url)
            const data = await _res.json()
            console.log({ url, data })
            res.status(200).json(data);
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}