let vp = window.innerWidth;

if (vp > 768) {
  document.querySelector("footer").classList.remove("box");
  let pg = document.querySelector("#pagination");
  if(pg) pg.parentNode.removeChild(pg);
  loadScript("./js/jquery.scrollify.min.js");
  loadScript("./js/scroll_vertical.js");
} else {
  document.querySelector("footer").classList.add("box");
  loadScript("./js/table_switch.js");
  loadScript("./js/jquery.ba-throttle-debounce.min.js");
  loadScript("./js/scroll_vertical2.js");
}

function loadScript(filePath) {
  const script = document.createElement('script');
  script.src = filePath;
  document.body.appendChild(script);
}