
async function process() {

    const axios = require("axios");
    const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BNBBUSD&interval=1m");
    const candle = response.data[499];
    const price = parseFloat(candle[4]);

    

    console.log( "\x1b[95mBNB: "+"\x1B[34m"+candle[4]);
    

    if(price >= 490)
        console.log("\x1B[92mVender!"+"\n")
    else if (price <= 350)
        console.log("\x1B[96mComprar!"+"\n")
    else
        console.log("\x1b[36mSUJESTÃO BOT: "+"\x1B[93mAguardar!"+"\n")    
}

setInterval(process, 1005);
setImmediate
StyleSheetList

process()

