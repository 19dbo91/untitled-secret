//Variable Declaration
const d = document
const header = d.getElementsByTagName("h1")[0];
const title = d.getElementsByTagName("title")[0];


function text(elem, txt){
    elem.textContent = txt;
}

text(header, "test")
text(title, "test")

//bacground
//player is absolute