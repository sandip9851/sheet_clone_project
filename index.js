let sheetContainer = document.querySelector("#sheetContainer");

//column header A-Z
let rowHeading = document.createElement("div");
rowHeading.id = "colHead"
for(let k = 0; k<=20; k++ ){
  let rowHeadLetter = document.createElement("div");
  rowHeadLetter.className = "col";
  rowHeadLetter.classList.add("header")
  rowHeadLetter.innerText = k;
  rowHeadLetter.style.backgroundColor = "red"
  rowHeading.append(rowHeadLetter);
}
sheetContainer.append(rowHeading)


//rows and col 20*26

for (let i = 1; i < 26; i++) {
  let row = document.createElement("div");
  let colHead = document.createElement("div");
  colHead.className = "col";
  colHead.classList.add("header")
  colHead.innerText = String.fromCharCode(64+i);
  row.append(colHead)


  for(let j = 0; j < 20; j++){
    let col = document.createElement("div");
    col.className = "col";
    col.contentEditable = true;
    
    row.append(col);
  }
  sheetContainer.append(row)
  
}