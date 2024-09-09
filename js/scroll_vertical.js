$.scrollify({
  section: "section.box",
  scrollbars: false,
  interstitialSection: "#footer, #fc2_footer",
  scrollSpeed: 750,
  overflowScroll: false,
  setHeights: true,

  before: function (i, panels) {
    let ref = panels[i].attr("data-section-name");
    $(".pagination .active").removeClass("active");
    $(".pagination")
      .find('a[href="#' + ref + '"]')
      .addClass("active");
  },
  afterRender: function () {
    let pagination = $("ul.pagination");
    let activeClass = "";
    $(".box").each(function (i) {
      activeClass = "";
      if (i === $.scrollify.currentIndex()) {
        activeClass = "active";
      }
      let pgNav = document.createElement("li");
      let pgNavIn = document.createElement("a");
      pgNavIn.href = `#${$(this).attr("data-section-name")}`;
      pgNavIn.className = activeClass;
      let pgNavInSpan = document.createElement("span");
      pgNavInSpan.className = "hover-text";
      pgNavInSpan.textContent = $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1);
      pgNavIn.appendChild(pgNavInSpan);
      pgNav.appendChild(pgNavIn);
      pagination.appendChild(pgNav);
    });

    $(".pagination a").on("click", $.scrollify.move);
    $.scrollify.move("top");
  },
});
