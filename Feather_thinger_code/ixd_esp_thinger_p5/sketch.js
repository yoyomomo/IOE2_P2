//////////////////////////////////////////////////
////Code developed by Steve Hudak to be used//////
////with Sheridan IxD Thinger guide 2/////////////
//////////////////////////////////////////////////

///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led1' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url1 = 'https://api.thinger.io/v3/users/moooo/devices/esp8266/resources/led1?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdDFfMmxlZHMiLCJ1c3IiOiJtb29vbyJ9.ZWiJWeCHC2hLHJJYzgi8Ptqih1isDyoUZkuRNVg3E20';
///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led2' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url2 = 'https://api.thinger.io/v3/users/moooo/devices/esp8266/resources/led2?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdDFfMmxlZHMiLCJ1c3IiOiJtb29vbyJ9.ZWiJWeCHC2hLHJJYzgi8Ptqih1isDyoUZkuRNVg3E20';
////////// everything from 'Bearer to the end of the parenthes is your unique individual authorization code and is available in your thinger settings
var Auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfb25lTGVkIiwidXNyIjoibW9vb28ifQ.Aec48Ktgv8_SmZ8Y4A74cuUtrw1tYDbeAuJbYGKkKvE";

////// variables for the 2 seperate data sets and the 2 seperate buttons
var data1;
var data2;
var myButton1;
var myButton2;

function setup() {
    //// make the canvas whatever size you require
    createCanvas(800, 240);
}

function draw() {

    ////// the colour of the background
    background("#28d1d1");
    ////// the colour of the buttons
    var col = color("#ffff00");

    ///// the specifics of the led1 button
    myButton1 = createButton("LED1!")
        .style('font-size', '20px')
        .style('background-color', col)
        .position(width / 3, height / 2)
        .mousePressed(() => sendData1(true))
        .mouseReleased(() => sendData1(false));
    ///////this is a nested function that switches the boolean state 
    ////////of the data1 state based on the mouse being clicked

    ///// the specifics of the led2 button
    myButton2 = createButton("LED2!")
        .style('font-size', '20px')
        .style('background-color', col)
        .position(width - width / 3, height / 2)
        .mousePressed(() => sendData2(true))
        .mouseReleased(() => sendData2(false));
    ////////this is a nested function that switches the boolean state 
    ////////of the data1 state based on the mouse being clicked

}

////// this function sends the data1 boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type  
function sendData1(data1) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data1
    };
    httpPost(url1, 'application/json', postData, function (result) {
        console.log(postData);
    });
}

////// this function sends the data2 boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type 
function sendData2(data2) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data2
    };
    httpPost(url2, 'application/json', postData, function (result) {
        console.log(postData);
    });
}
