import data from "../../../../db/product.json";

export default function handler(req, res) {
    if (req.method !== "GET" && req.method !== "POST")
        return res.status(405).json({
            code: 405,
            status: "error",
            result: "Method Not Allowed",
        });

    if (req.method === "GET") {
        const dataProduct = data.products
        res.status(200).json({
            code: 200,
            status: "OK",
            result: dataProduct
        })
    }
}