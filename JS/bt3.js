function doiTien(){
    // input
    const rate = 23_500;
    var tienUsd = document.getElementById("usd").value;

    // xử lý
    
    var tienVnd = tienUsd * rate;
    // output
    
    var pTienQuyDoi = document.getElementById("tienQuyDoi")
    pTienQuyDoi.innerHTML = tienVnd + "VND"
    var divChange =document.getElementById("change")
    divChange.classList.remove('d-none')
}