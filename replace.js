module.exports = function(html, json){

    let output = html.replace(/{%PRODUCTNAME%}/g, json.productName);
    output = output.replace(/{%ID%}/g, json.id);
    output = output.replace(/{%IMAGE%}/g, json.image);
    output = output.replace(/{%FROM%}/g, json.from);
    output = output.replace(/{%PRICE%}/g, json.price);
    output = output.replace(/{%QUANTITY%}/g, json.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, json.description);
    output = output.replace(/{%DESCRIPTION%}/g, json.description);
    output = output.replace(/{%NUTRIENTS%}/g, json.nutrients);
    if(json.organic === false){
        output = output.replace(/{%NOT-ORGANIC%}/g, "not-organic");
    }

    return output;

}