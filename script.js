//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
const selectMovie = document.getElementById("selectMovie")
for(let i=0;i<moviesList.length;i++){

const option = document.createElement("option")
option.value =i
option.textContent = `${moviesList[i].movieName} $${moviesList[i].price}`
selectMovie.appendChild(option)

}
const selectIndex = selectMovie.value
selectedmovie = moviesList[selectIndex]
selectMovie.addEventListener("change",function(){
    const selectIndex = selectMovie.value
    selectedmovie = moviesList[selectIndex]
const movieName = document.getElementById("movieName")
const moviePrice = document.getElementById("moviePrice")

movieName.textContent = selectedmovie.movieName
moviePrice.textContent = `$${selectedmovie.price}`
})



//Add eventLister to each unoccupied seat
const emptyseats = document.querySelectorAll(".seatCont .seat:not(.occupied)")   
const numberOfSeat = document.getElementById("numberOfSeat")
const totalPrice = document.getElementById("totalPrice")
const proceedBtn = document.getElementById("proceedBtn")
const selectedSeats = document.querySelectorAll("#seatCont .seat.selected");
const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
const noSelected = document.getElementsByClassName("noSelected")

let count = 0;

for (let i = 0; i < emptyseats.length; i++) {
    emptyseats[i].addEventListener("click", function () {
      this.classList.toggle("selected");
  
      // Clear previously displayed seat numbers
      selectedSeatsHolder.innerHTML = "";
  
      const selectedSeats = document.querySelectorAll("#seatCont .seat.selected");
      const count = selectedSeats.length;
  
      numberOfSeat.textContent = count;
      totalPrice.textContent = `$${selectedmovie.price * count}`;
  
      if (count === 0) {
        noSelected.textContent 
      } else {
        for (let j = 0; j < selectedSeats.length; j++) {
          let seatIndex = Array.from(emptyseats).indexOf(selectedSeats[j]);
  
          const seatDiv = document.createElement("div");
          seatDiv.textContent = seatIndex;
          seatDiv.classList.add("selectedSeat"); 
          selectedSeatsHolder.appendChild(seatDiv);
        }
      }
    });
  }
  
//Add eventLsiter to continue Button


proceedBtn.addEventListener("click",function(){
    const selectedSeats = document.querySelectorAll("#seatCont .seat.selected");
    if(selectedSeats.length>0){
        alert("Yayy! Your Seats have been booked")
    }
    else{
        alert("Oops no seat Selected")
    }
    for (let i = 0; i < selectedSeats.length; i++) {
        selectedSeats[i].classList.remove("selected");
        selectedSeats[i].classList.add("occupied");
        selectedSeats[i].style.pointerEvents = "none";
  }

})
//Add eventListerner to Cancel Button
const cancelBtn = document.querySelector(".cancelBtn button");

cancelBtn.addEventListener("click", function () {
  const selectedSeats = document.querySelectorAll("#seatCont .seat.selected");

  for (let i = 0; i < selectedSeats.length; i++) {
    selectedSeats[i].classList.remove("selected");
  }

  // Reset the UI
  numberOfSeat.textContent = 0;
  totalPrice.textContent = `$0`;
  selectedSeatsHolder.innerHTML = "";
  document.querySelector(".noSelected").style.display = "block";

});
