import "bootstrap";
import "./styles/index.scss";
import "@/index.scss";
import ClickFloatFlower from '@/js-plugins/click-float-flower.ts';

const global = (() => {
  return {
    blogHref: "https://blog.eviler.top",
    githubHref: "https://github.com/evilerSS"
  };
})();

$(() => {
  new ClickFloatFlower();
  $("#blog-btn").on("click", e => {
    window.open(global.blogHref, "_blank");
  });
  $("#github-btn").on("click", e => {
    window.open(global.githubHref, "_blank");
  });
});