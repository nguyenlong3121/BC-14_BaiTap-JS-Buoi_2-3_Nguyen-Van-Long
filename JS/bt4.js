function tinhToan(){
    // input
    var cDai= document.getElementById("cDai").value
    var cRong= document.getElementById("cRong").value
    // xử lý dữ liệu
    var chuVi= (parseInt(cDai) + parseInt(cRong))*2;
    var dienTich= (parseInt(cDai)* parseInt(cRong));

    // output
    var divResult = document.getElementById("result")
    var pResultC = document.getElementById("resultC")
    pResultC.innerHTML= "Chu vi của hình chữ nhật là:" + chuVi
    var pResultS = document.getElementById("resultS")
    pResultS.innerHTML="Diện tích của hình chữ nhật là:" + dienTich
    

    
}