$(function () {
  "use strict";
  const $window = $(window);
  const $boxes = $(".box");
  const $pagination = $("ul.pagination");
  const duration = 750;
  const easing = "easeOutExpo";

  const boxes_cnt = $boxes.length;

  document.addEventListener("DOMContentLoaded", function () {
    $boxes.each(function (element) {
      let paginationHtml = document.createElement("li");
      let paginationAnchor = document.createElement("a");
      paginationAnchor.href =
        "#" + toString($(element).attr("data-section-name"));
      paginationHtml.appendChild(paginationAnchor);
      $pagination[0].appendChild(paginationHtml);
    });

    let flag = 1;

    $pagination.on("click", "a", function (e) {
      e.preventDefault();
      const offset = $boxes[$(this).index()].offset().top;
      flag = 3;
      $("html, body")
        .stop(true)
        .animate({ scrollTop: offset }, duration, easing, function () {
          flag = 1;
        });
    });

    let prev_pos = $window.scrollTop();

    $window.on(
      "scroll",
      $.debounce(100, function () {
        let current_pos = $(this).scrollTop();

        for (let i = 0; i < boxes_cnt; i++) {
          const prev_offset = $(".box")[i].offset().top;
          if (current_pos >= prev_offset - 1) {
            $("ul.pagination li a").removeClass("active");
            $(
              "ul.pagination li a." +
                toString($boxes[i].attr("data-section-name"))
            ).addClass("active");
          }
        }

        for (let i = 1; i < boxes_cnt; i++) {
          const prev_offset = $boxes[i - 1].offset().top;
          const next_offset = $boxes[i].offset().top;

          if (
            current_pos > prev_offset &&
            current_pos < next_offset &&
            flag === 1
          ) {
            if (current_pos > prev_pos) {
              flag = 2;
              $("html, body")
                .stop(true)
                .animate(
                  { scrollTop: next_offset },
                  duration,
                  easing,
                  function () {
                    flag = 1;
                  }
                );
            } else if (current_pos < prev_pos) {
              flag = 2;
              $("html, body")
                .stop(true)
                .animate(
                  { scrollTop: prev_offset },
                  duration,
                  easing,
                  function () {
                    flag = 1;
                  }
                );
            }
          }
        }
        prev_pos = current_pos;
      })
    );

    $window.trigger("scroll");
  });
});
