window.addEventListener("load", () => {
  Swal.fire({
    title: "Chào Mừng đến Web Cao Văn Hột Xoàn",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Tiếp Tục",
    cancelButtonText: "Canner",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
    } else {
      document.querySelector(".song").play();
    }
  });
});

let display = document.getElementById("screen");
const wipe = () => {
  display.value = "";
};
const show = (n) => {
  display.value += n;
};
const calc = () => {
  display.value = eval(display.value);
};
