$(document).ready(function () {
    // kiểm tra tính hợp lê của email
    function kiemTraEmail(mail) {
        let email = $("#txtEmail").val();
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.trim() == ""){
            alert("Email là bắt buộc!");
            return false;
        }
        if (!regexEmail.test(email)) {
            alert("Địa chỉ email của bạn không hơp lệ!")
            return false;
        }
        return true;
    }

    //  kiểm tra tiêu đề không đươc rỗng
    function kiemTraTieuDe(){
        let tieuDe = $("#txtTitle").val();
        if (tieuDe.trim() == ""){
            alert("Tiêu đề không được để trống!");
            return false;
        }
        return true;
    }

    // Xử lý sư kiện khi click nút gửi tin nhắn
    $("#btnGuiTinNhan").click(function(){
        if (!kiemTraEmail() || !kiemTraTieuDe()){
            return false;
        }
        return true;
    });
});