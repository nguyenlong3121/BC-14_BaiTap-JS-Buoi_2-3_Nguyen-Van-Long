function tinhTb(){
    // input
    var a = document.getElementById("soA").value;
    var b = document.getElementById("soB").value;
    var c = document.getElementById("soC").value;
    var d = document.getElementById("soD").value;
    var e = document.getElementById("soE").value;
    // xử lý
    var tb = (parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e))/5 ;
    // output
    var pTb = document.getElementById("tb");
    pTb.innerHTML= tb;
    
}