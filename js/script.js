var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

async function getData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const email = data.results[0].email;
    const phone = data.results[0].phone;
    const country = data.results[0].location.state + ", " + data.results[0].location.country;
    const image = data.results[0]. picture.large;

    document.getElementById("nombre").innerHTML = firstName; 
    document.getElementById("apellido").innerHTML = lastName;
    document.getElementById("lugar_valor").innerHTML = country;
    document.getElementById("email_valor").innerHTML = email;
    document.getElementById("telefono_valor").innerHTML = phone;
    document.getElementById("imagen").src = image;
  } catch (error) {
    console.error("Hubo un problema accediendo a los datos. Error: ", error);
  }
}
getData();