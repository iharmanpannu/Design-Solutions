const $mobileNav = $(".mobile-nav");
$mobileNav.hide();
$("#open-tog").on("click", () => {
  $mobileNav.slideDown().show();
});
$("#close-tog").on("click", () => {
  $mobileNav.slideToggle().hide(1000);
});
