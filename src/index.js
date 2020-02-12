import "bootstrap";
import "./styles/index.scss";
import "./index.scss";

const global = (() => {
  return {
    blogHref: 'https://blog.eviler.top',
    githubHref: 'https://github.com/evilerSS'
  }
})();

console.log(global);


$(() => {
  $('#blog-btn').on('click', (e) => {
    window.open(global.blogHref, '_blank');
  })
  $('#github-btn').on('click', (e) => {
    window.open(global.githubHref, '_blank');
  })
})