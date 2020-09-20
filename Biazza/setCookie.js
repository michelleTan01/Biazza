function setCookie(id,input,pos) {
    var previousData = document.cookie.split(";;;");
    var updatedData="";
    if(id>previousData.length){
        //format: id=input;;pos.top,pos.left;;;
        updatedData = previousData+id+"="+input+";;"+pos.top+","+pos.left+";;;";
    }else{
        for(var i = 0; i<previousData.length; i++){
            //curr = {id , `input;;pos.top,pos.left`}
            var curr = previousData[i].split("=")
            if (curr[0] == id){
                //prevInput = {input , `pos.top,p.left`}
                var prevInput = curr.split(";;")[0];
                updatedData = updatedData+id+"="+prevInput+"\n"+input+";;"+pos.top+","+pos.left+";;;";
            }else{
                updatedData = updatedData+previousData[i];
            }
        }
    }
    document.cookie = updatedData;
  }