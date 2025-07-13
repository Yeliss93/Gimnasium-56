$(document).ready(function () {
  let lastScroll = 0;
  const header = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const isNotHoveringCard = !document.querySelector(".advant:hover");

    if (isNotHoveringCard) {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
      }

      lastScroll = currentScroll;
    }
  });

  $(".fa-earth-americas").click(function (e) {
    e.stopPropagation();
    $(".lang_window").toggleClass("active");
  });

  $("#XmarkNav").click(function (e) {
    $(".lang_window").removeClass("active");
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".lang_window, .fa-earth-americas").length) {
      $(".lang_window").removeClass("active");
    }
  });

  $(".Subj_btn").click(function (e) {
    e.stopPropagation();
    $(".subj_window").toggleClass("active");
  });

  $("#XmarkSubj").click(function (e) {
    $(".subj_window").removeClass("active");
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".subj_window, .Subj_btn").length) {
      $(".subj_window").removeClass("active");
    }
  });

  $(".primary_btn").click(function () {
    $(".Teach_card").css("display", "none");
    $(".primary").css("display", "flex");
  });

  $(".second_btn").click(function () {
    $(".Teach_card").css("display", "none");
    $(".second").css("display", "flex");
  });

  $(".all_subj_btn").click(function () {
    $(".Teach_card").css("display", "flex");
  });

  $(".math_btn").click(function () {
    $(".Teach_card").css("display", "none");
    $(".math").css("display", "flex");
  });

  $(".history_btn").click(function () {
    $(".Teach_card").css("display", "none");
    $(".history").css("display", "flex");
  });
});
