$(document).ready(function () {
    // kiểm tra tính hợp lê của email
    function kiemTraEmail(mail) {
        let email = $("#txtEmail").val();
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.trim() == "") {
            alert("Email là bắt buộc!");
            return false;
        }
        if (!regexEmail.test(email)) {
            alert("Địa chỉ email của bạn không hơp lệ!")
            return false;
        }
        return true;
    }

    function kiemTraTenDangNhap() {
        let tenDangNhap = $("#txtLoginName").val();
        let regexDangNhap = /^[A-Za-z0-9]{6,}$/;
        if (tenDangNhap.trim() == "") {
            alert("Tên đăng nhập không được để trống!");
            return false;
        }
        if (!regexDangNhap.test(tenDangNhap)){
            alert("Tên đăng nhập gồm chữ và số, ít nhất 6 ký tư");
            return false;
        }
        return true;
    }

    function kiemTraMatKhau(){
        let matKhau = $("#txtPassword").val();
        let regexMatKhau = /^[^\s]{6,}$/;
        if (matKhau.trim() == ""){
            alert("Mật khẩu không được để trống");
            return false;
        }
        if (!regexMatKhau.test(matKhau)){
            alert("Mật khẩu ít nhất ký tự, không bao gồm khoảng trắng");
            return false;
        }
        return true;
    }

    function kiemTraNhapLaiMatKhau(){
        let matKhau = $("#txtPassword").val();
        let matKhau2 = $("#txtConfirmPassword").val();
        if (matKhau2.trim() == ""){
            alert("Nhập lại mật khẩu không được để trống");
            return false;
        }
        if (matKhau != matKhau2){
            alert("Nhập lại mật khẩu không trùng khớp");
            return false;
        }
        return true;
    }

    function kiemTraHoTen(){
        let hoTen = $("#txtName").val();
        if (hoTen.trim() ==  ""){
            alert("Họ tên không được để trống");
            return false;
        }
        return true;
    }

    function kiemTraSDT(){
        let sdt = $("#txtTel").val();
        let regexSDT = /^0[0-9]{9}$/;
        if (sdt.trim() == ""){
            return true;
        }else{
            if (!regexSDT.test(sdt)){
                alert("Số điện thoại gồm 10 số và bắt đầu bằng 0");
                return false;
            }
            return true;
        }
    }


    // Xử lý sư kiện khi click nút gửi tin nhắn
    $("#btnDangKy").click(function () {
        if (!kiemTraTenDangNhap() ||!kiemTraEmail() || !kiemTraMatKhau() || !kiemTraNhapLaiMatKhau() || !kiemTraHoTen() || !kiemTraSDT()) {
            return false;
        }
        alert("Đăng ký thành công");
        return true;
    });
});