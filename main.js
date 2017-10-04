const button = document.querySelector(".button");
const display = document.querySelector(".display");

//when button is click - we need it to fire the fetch

button.addEventListener("click", function(){
  display.textContent = "";
  event.preventDefault();

  fetch("http://www.weeatt.com/api/v1/recipes?qs=sweet&auth_token=aDZTf4BdHGA1apkeU0UY", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': '72f54c000aa4'
      }
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      getFood(data)
    })

})

function getFood(data){

  displayResults=""

for (let i=0; i<data.results.length; i++){
  dish = data.results[Math.floor(Math.random()*data.results.length)];
}
console.log(dish)

displayResults=`
  <h1>${dish.name}</h1>
  <img src="${dish.images[0].large_image_path}"/>
  <p>${dish.ingredients}</p>
  <br>

`
display.insertAdjacentHTML('afterbegin', displayResults);
}
