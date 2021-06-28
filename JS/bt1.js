function tinhLuong(){
    // input
    const luong1Ngay =100_000;
    var soNgayLam = document.getElementById("soNgayLam").value;
    // xử lý
    var tongLuong= luong1Ngay * soNgayLam;
    // output
    var pTongLuong = document.getElementById("tongLuong")
    pTongLuong.innerHTML ="Lương của bạn tháng này là:"+ tongLuong +"VND";
}