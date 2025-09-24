


document.getElementById("submit0").addEventListener("click", function () {

    let myData = document.getElementById("input0").value.toLowerCase()
    const myAPI = "https://hp-api.onrender.com/api/characters"

    const div = document.getElementById("dataFromAPI")
    div.style.display = "flex";

    fetch(myAPI)

        .then(response => response.json())
        .then(data => {

            // Alternativ #1
            data.forEach(element => {

                if (myData == element.name.toLowerCase()) {

                    document.getElementById("image").src = element.image;

                    document.getElementById("pInfo0").innerText = "Name: " + element.name;

                    document.getElementById("pInfo1").innerHTML = "Species: " + element.species;

                    document.getElementById("pInfo2").innerHTML = "Gender: " + element.gender;

                    document.getElementById("pInfo3").innerHTML = "House: " + element.house;

                    document.getElementById("pInfo4").innerHTML = "Date of birth: " + element.dateOfBirth;

                    document.getElementById("pInfo5").innerHTML = "Year of birth: " + element.yearOfBirth;

                    document.getElementById("pInfo6").innerHTML = "Ancestry: " + element.ancestry;

                }
                
            });



            // // Alternativ #2
            // for (let i = 0; i < data.length; i++) {
                
            //     console.log(data[i].name + ": " + data[i].actor + " " + data[i].image);
                
            // }
            
        })


})





// Enter funksjon
var input = document.getElementById("input0")
var submitBtn = document.getElementById("submit0")

input.addEventListener("keypress", function(event) {

  // If the user presses the "Enter" key on the keyboard

  if (event.key === "Enter") {

    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    submitBtn.click();

  }

})