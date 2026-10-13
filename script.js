// JavaScript tương tác nhỏ cho landing page
document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var backToTop = document.getElementById("backToTop");
  function updateBackToTop() {
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 450);
  }
  window.addEventListener("scroll", updateBackToTop);
  updateBackToTop();

  // Đóng menu trên di động sau khi người dùng chọn một mục
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.jQuery && window.innerWidth < 992) {
        window.jQuery("#mainNav").collapse("hide");
      }
    });
  });

  // Biểu mẫu chỉ minh họa kiểm tra dữ liệu phía trình duyệt, không gửi đến máy chủ.
  var form = document.getElementById("registerForm");
  var message = document.getElementById("formMessage");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        if (message) {
          message.textContent = "Vui lòng kiểm tra lại các trường thông tin bắt buộc.";
          message.style.color = "#b3261e";
        }
        return;
      }
      if (message) {
        message.textContent = "Đã kiểm tra thông tin mẫu thành công. Đây là bản demo, dữ liệu chưa được gửi đi.";
        message.style.color = "#167b67";
      }
      form.classList.remove("was-validated");
    });
  }
});
