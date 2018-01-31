//To open navigation
const $mobileNav = $(".mobile-nav");
$mobileNav.hide();
$("#open-tog").on("click", () => {
  $mobileNav.animate({ width: "toggle" }, 350).show(500);
  // .css("position", "relative");
  // $("body").css("position", "fixed");
});
//To close navigation
$("#close-tog").on("click", () => {
  $mobileNav.animate({ width: "toggle" }, 300).hide(100);
  // $("body").css("position", "relative");
});
