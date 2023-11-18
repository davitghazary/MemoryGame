let o = document.querySelectorAll(".bat");
let img = [
  "https://mariastepanyan.files.wordpress.com/2021/10/d0a4d180d0b0d0bd.png",
  "https://mariastepanyan.files.wordpress.com/2021/10/d091d0b5d0b7-d0bdd0b0d0b7d0b2d0b0d0bdd0b8d18f-5.jpg",
  "https://mariastepanyan.files.wordpress.com/2021/10/d098d5bfd5bfd5bfd5bf.png?w=275",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/300px-Flag_of_Norway.svg.png",
  "https://mariastepanyan.files.wordpress.com/2021/10/d091d0b5d0b7-d0bdd0b0d0b7d0b2d0b0d0bdd0b8d18f-2.png",
  "https://armwiki.files.wordpress.com/2012/07/egypt_small_flag.gif?w=584",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/300px-Flag_of_Poland.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/300px-Flag_of_the_Czech_Republic.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/300px-Flag_of_Russia.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/300px-Flag_of_Ukraine.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTdrET5O3cSaGeIUhCOQNXAAx9cOStW0AzDffppQ2g23dg8LykY4o2GCI8F4T4lpBs6I&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOyyAZR6iLBAJPOneudz4ngVjzpdYkHSjmw&usqp=CAU",
  "https://armwiki.files.wordpress.com/2012/07/austria_small_flag.gif?w=584",
  "https://armwiki.files.wordpress.com/2012/07/denmark_small_flag.gif?w=584",
  "https://armwiki.files.wordpress.com/2012/07/iceland_small_flag.gif?w=584",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/300px-Flag_of_Sweden.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/270px-Flag_of_Ghana.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/301px-Flag_of_Luxembourg.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/360px-Flag_of_North_Korea.svg.png",
];
let towImg = [];
let = newarr = [];
let count = 0;
let towid = [];
o.forEach((e) => {
  e.addEventListener("click", function () {
    let n = e.id;
    newarr = [];
    document.getElementById("coll").innerHTML = "";
    document.getElementById("coll").style = `width:${(n * 100) / 2}px`;
    for (i = 0; i < n; i++) {
      if (i % 2 == 0) {
        random();
      }
      let news = document.createElement("img");
      news.id = "id" + i;

      news.onclick = function () {
        if (count < 2) {
          count++;
       
         
        } else {
          count = 1;
        }
        let id = +this.id.slice(2);
        this.src = newarr[id];
        towid.push(this.id)
        if (count == 2) {
          console.log(towid);
          if (
            document.getElementById(towid[0]).src !==
            document.getElementById(towid[1]).src
          ) {
            setTimeout(function () {
              document.getElementById(towid[0]).src =
                "https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg";
              document.getElementById(towid[1]).src =
                "https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg";
              towid = [];
            }, 500);
            console.log(towImg);
          } else {
            towid = [];
          }
        }
      };

      document.getElementById("coll").append(news);
    }
  });
});
function random() {
  let x = Math.floor(Math.random() * img.length);
  if (newarr.length > 0) {
    if (!newarr.includes(img[x])) {
      newarr.push(img[x]);
      newarr.push(img[x]);
    } else {
      random();
    }
  } else {
    newarr.push(img[x]);
    newarr.push(img[x]);
  }
  newarr = newarr.sort(function () {
    return 0.5 - Math.random();
  });
}
