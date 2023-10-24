$(document).ready(function () {

    // Nạp sản phẩm vào trang "Sản phẩm"
    function napDSSP(ds) {
        var htmlObj = document.getElementById('list-product');
        ds.forEach(sp => {
            let card = "<div class=\"col-4\">" +
                "<div class=\"card d-flex flex-column align-items-center\">" +
                "<div class=\"text-center\">" + sp.ten + "</div>" +
                "<div class=\"card-img\">" +
                "<img src=\"" + sp.anh + "\" alt=\"\">" +
                "</div>" +
                "<div class=\"card-body\">" +
                "<div class=\"price\">" +
                "<div class=\"text-del w-100 text-center\">" + sp.giacu + "</div>" +
                "<div class=\"font-weight-bold\">" + sp.giamoi + "₫</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";
            htmlObj.innerHTML = htmlObj.innerHTML + card;
        });
    };

    napDSSP(dsNoiChien);

    let height_fiter = $("#list-product").height();
    $("#filter-product").height(height_fiter);


    $("div.card").on("click", function () {
        window.open('../html/ChiTietSanPham.html', '_blank');
    });
});