export default function handler(req, res) {
    const tokenIds = req.query.tokenIds;

    const image_url = 
        "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

    res.status(200).json({
        name: "Crypto Dev #" + tokenIds,
        descriptionn: "Crypto Dev is a collection of developers in crypto",
        image: image_url + tokenIds + ".svg",
    })
}