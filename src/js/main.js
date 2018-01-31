//To open navigation
const $mobileNav = $(".mobile-nav");
$mobileNav.hide();
$("#open-tog").on("click", () => {
  $mobileNav.animate({ width: "toggle" }, 350).show(500);
});
//To close navigation
$("#close-tog").on("click", () => {
  $mobileNav.animate({ width: "toggle" }, 300).hide(100);
});
