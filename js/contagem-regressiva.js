fetch("http://localhost:3000/evento", {
    method: 'GET',
}).then(
  
    res => {
      res.json().then(obj => {

          let name = obj.name;
          let days = obj.days;
          let hours = obj.hours;
          let minutes = obj.minutes;
          let seconds = obj.seconds;

          console.log(name);
          console.log(days);
          console.log(hours);
          console.log(minutes);
          console.log(seconds);
          
          //document.getElementById("titulo").innerHTML = `${name}`; 
          document.getElementById("days").innerHTML = `${days}`; 
          document.getElementById("hours").innerHTML = `${hours}`;
          document.getElementById("minutes").innerHTML = `${minutes}`;
          document.getElementById("seconds").innerHTML = `${seconds}`;
    });

    //setInterval(res, 1000);
});
