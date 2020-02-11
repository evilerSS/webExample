// import _ from "lodash";
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement("pre");
  element.innerHTML = 'Hello, Welcome!';

  return element;
}

document.body.appendChild(component());