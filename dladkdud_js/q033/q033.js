
var userRpc = "";
var comRpc = "";

var rpcInputText;
var rpcResultScreen;

var resultString = "";

var divRpcImgUser;
var divRpcImgCom;

window.onload = function(){

    rpcInputText = document.getElementById("rpc_input_text");      
    rpcResultScreen = document.getElementById("rpc_result_screen");     
    divRpcImgUser = document.getElementById("rpc_user");     
    divRpcImgCom = document.getElementById("rpc_com");      
}

function rpcInputButtonClick(){

    while(true){  
        userRpc = rpcInputText.value;
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            break;  
        } else {
            alert("장난치지마세요");
        }
    }
    
    comRpc = Math.floor(Math.random()*3+1); 
    if(comRpc == 1){
        comRpc = "가위";
    }
    if(comRpc == 2){
        comRpc = "바위";
    }
    if(comRpc == 3){
        comRpc = "보";
    }
    
    resultString = "유저:"+userRpc; 
    resultString = resultString + "\n";
    resultString = resultString + "컴:"+comRpc;
    resultString += "\n";

    switch(userRpc){
        case "가위":
            divRpcImgUser.innerHTML = "<img src='sc.png'>"
            break;
        case "바위":
            divRpcImgUser.innerHTML = "<img src='ro.png'>"
            break;
        case "보":
            divRpcImgUser.innerHTML = "<img src='pa.png'>"
            break;
    }
    switch(comRpc){
        case "가위":
            divRpcImgCom.innerHTML = "<img src='c_sc.png'>"
            break;
        case "바위":
            divRpcImgCom.innerHTML = "<img src='c_ro.png'>"
            break;
        case "보":
            divRpcImgCom.innerHTML = "<img src='c_pa.png'>"
            break;
    }

    var winDrawLose = "";
    switch(userRpc){
        case "가위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "DRAW";
                    break;
                case "바위":
                    winDrawLose = "패배";
                    break;
                case "보":
                    winDrawLose = "승리";
                    break;
            }
            break;
        case "바위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "승리";
                    break;
                case "바위":
                    winDrawLose = "DRAW";
                    break;
                case "보":
                    winDrawLose = "패배";
                    break;
            }        
            break;
        case "보":
            switch(comRpc){
                case "가위":
                    winDrawLose = "패배";
                    break;
                case "바위":
                    winDrawLose = "승리";
                    break;
                case "보":
                    winDrawLose = "DW";
                    break;
            }        
            break;
    }
    resultString = resultString + "결과: " + winDrawLose;

    rpcResultScreen.value = resultString;
}