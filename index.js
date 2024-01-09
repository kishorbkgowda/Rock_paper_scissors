document.addEventListener('DOMContentLoaded', () => 
{
    let img = document.querySelectorAll("img");
    let p = document.querySelector("p");
    let spans1 = document.querySelector(".left");
    let spans2 = document.querySelector(".right");
    let pcount = 1;
    let ccount = 1;
  
    img.forEach((img) => 
    {
      img.addEventListener('click', () => {
        let you = img.getAttribute("class");
        playingtime(you);
      });
    });
  
    let computerplay = () => 
    {
      return Math.floor(Math.random() * 2);
    };

    let gameplay=(you,lol)=>
    {
        let plrwin = true;
       if(you === "rock")
       {
        plrwin  = lol=== "scissor" ? true : false;
        return plrwin;
       }

       else if(you === "scissor")
       {
        plrwin = lol === "paper" ? false : true;
        return plrwin;
       }
       else 
       {
         plrwin = lol === "rock" ? true : false; 
         return plrwin;
       }
    }

  
    let playingtime = (you) => 
    {
      let arr = ["rock", "paper", "scissor"];
      let index = computerplay();
  
      if (you == arr[index])
       {
        p.innerText = "Game was draw // Play again"
        p.style.backgroundColor = "brown";
      }

      else 
    {
       
        let final  = gameplay(you,arr[index]);

        if(final === true)
        {   
           p.innerText = `You Win! Your ${you} beats ${arr[index]}`; 
           p.style.backgroundColor = "green";
           spans1.innerText = pcount++;
           
        }
        else
        {
            p.innerText = `You lost! Your ${you} beats ${arr[index]}`;
            p.style.backgroundColor="red";
            spans2.innerText = ccount++;
           
        }
       

    }
    };
  });
  