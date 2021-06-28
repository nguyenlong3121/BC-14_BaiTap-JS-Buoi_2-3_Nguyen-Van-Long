function tinhToan(){
    // input
    var n = document.getElementById("so").value
    // xử lý
    var hangChuc = Math.round(parseInt(n) /10)
    var hangDonVi = parseInt(n) %10

    var sum = hangChuc + hangDonVi
    
    // output
    var pResultSum = document.getElementById("resultSum")
    pResultSum.innerHTML= "Tổng số cần tính toán là:" + sum
}