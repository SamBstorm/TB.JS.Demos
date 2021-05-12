let article_title = document.getElementById("art_h_01");
console.log(article_title);
article_title.innerHTML = "Attention à la surdose de Lorem";

let h1s = document.getElementsByTagName("h1");
let last_h1 = h1s[h1s.length-1];
last_h1.innerText = "Toto"