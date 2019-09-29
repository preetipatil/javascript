
const heading = document.querySelector(".show");
  //console.log(heading);
  heading.innerHTML = animateHeading(heading.textContent);

function animateHeading (str) {
  var wordArray = [...str].map(letter => `<span>${letter}</span>`).join('');
  return wordArray;
  console.log(wordArray);
  
}