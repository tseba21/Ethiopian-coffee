 function drinkCoffee() {
          let name = prompt("what is your name?");
          let email = prompt("what is your email?");

          if (name != 0 && email != 0) {
            alert(name + " " + ",Visit Ethiopia To Drink THis Amazing Coffee");
          } else {
            return -1;
          }
        }
        let buyCoffee = document.querySelector("button");
        buyCoffee.addEventListener("click", drinkCoffee);
