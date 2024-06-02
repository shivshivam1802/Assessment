let nftCollection = [];

function mintNFT(name, eyeColor, shirtType, bling) {
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nftCollection.push(nft);
}


function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`  Name: ${nftCollection[i].name}`);
        console.log(`  Eye Color: ${nftCollection[i].eyeColor}`);
        console.log(`  Shirt Type: ${nftCollection[i].shirtType}`);
        console.log(`  Bling: ${nftCollection[i].bling}`);
        console.log('---------------------------');
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("CryptoPanda", "Blue", "Hoodie", "Gold Chain");
mintNFT("BoredApe", "Green", "T-Shirt", "Diamond Ring");
mintNFT("PixelPenguin", "Brown", "Sweater", "Silver Bracelet");

listNFTs();

console.log(`Total NFTs Minted: ${getTotalSupply()}`);
