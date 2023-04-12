   try(document.getElementById("btn1").addEventListener("click", () => {
    


   $.ajax({
      method: "GET",
      url:
        "http://localhost:3000/messaggio?message="+ document.getElementById("gino").value
    }).done(function (data) {
      console.log("data:", data);
     
    });
  })).catch();