let count = 0;
const element = document.getElementById('counter')

const increase = () => {
  count++;
  console.log(count);
  element.innerText = count
}
// increase(count);
// console.log(count);


const decrease = () => {
  count--;
  console.log(count);
  element.innerText = count
}
// decrease(count);
// console.log(count);

const reset = () => {
  count = 0;
  console.log(count);
  element.innerHTML = '<mark>' + count + '</mark>'
}
// reset(count);
// console.log(count);


// console.log(document.getElementsByTagName('body'))
const selectTheme = (theme) => {
  document.getElementsByTagName('body')[0].className = theme
  document.getElementsByTagName('main')[0].className = theme
  const buttons = document.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i] = theme
  }
}


