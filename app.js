//CREATE OBJECTS FOR DATA
var arr01 = [{
    qus: " 1 + 1 = ?",
    value01: "4",
    value02: "2",
    name: "sex",
    wrng: "right",
    righ: "wrong",
}, {
    qus: "2 X 4 = ?",
    value01: "6",
    value02: "8",
    name: "city",
    wrng: "right",
    righ: "wrong",
}, {
    qus: "10 + 12 = ?",
    value01: "22",
    value02: "32",
    name: "name",
    wrng: "wrong",
    righ: "right",
}, {
    qus: "3 X 7 = ?",
    value01: "18",
    value02: "21",
    name: "hobby",
    wrng: "right",
    righ: "wrong",
}];

//SHOW DATA IN BLOCKS 
for (var i in arr01) {
    document.querySelector('.blocks').innerHTML += `
        <div class="my_blocks wow animate bounceInUp">
            <p>${arr01[i].qus}</p>
            <span>
               <span class="ans">${arr01[i].value01}</span>
               <input type="radio" value="${arr01[i].value01}" name="${arr01[i].name}" class="${arr01[i].righ} click ">
            </span>  
    
            <span>
               <span class="ans">${arr01[i].value02}</span>
               <input type="radio" value="${arr01[i].value02}" name="${arr01[i].name}" class="${arr01[i].wrng} click">
            </span>   
        </div>
     `;

}

//ADD LISTENER FOR DATA ADD IN Array
var btn = document.querySelector('.btn').onclick = function() {
     //CREATE BLANK ARREYS FOR INSERT DATA AFETR CLICK 
    var arr = [];
    var newarr = [];
	//ACCESS RIGHT ANSWERS IN ARREY 
    var right = document.querySelectorAll('.right');
    //LOOP FOR ACCESS ALL RIGHT  ANSWERS
    for (var i = 0; i < right.length; i++) {
       //CHACK RIGHT ANSWER IS SHOW ON CONSOLE.LOG
        (right[i].checked) ? console.log(right[i].value): console.log("error");
        arr.push(right[i].value);
    };
	//SHOW RIGHT ANSEWER AFTER SUBMIT SELECTED ANSWERS
    for (var i in arr) {
        document.querySelector('.Right_Answers').innerHTML += `
			<p>${arr01[i].qus}</p>
			<span>Ans. ${arr[i]}</span>
			<br><br>
        `;
    }
   
   //ACCESS ANSWERS WHO IS CLICKED BY USER
    var inpu = document.querySelectorAll(".click");
    //LOOP FOR ACCESS ALL ANSWERS 
    for (var i = 0; i < inpu.length; i++) {
        if (inpu[i].checked) {
            document.querySelector('.answers').style.display = "block";
            document.querySelector('.blocks').style.display = "none";
                //console.log(inpu[i].value);
			
			//ADD USER CLICKED DATA IN BLANK ARREY NEWARR FROM PUSH METHOD 
            newarr.push(inpu[i].value);

        } else {
            console.log();
        }
    }
	//SHOW CLICKED DATA IN YOUR ANSWERS BLOCK IN HTML FILE 
	//CREATE LOOP FOR ACCESS ALL CLICKED DATA 
	
    for (var i in newarr) {
        document.querySelector('.your_Answers').innerHTML += `
        <p>${arr01[i].qus}</p>
        <span>Ans. ${newarr[i]}</span><br>
        `;
    }
    console.log(newarr);
    console.log(newarr.length);

}
//HIDE AND SHOW AREA
var block = document.querySelector('.content');
document.querySelector('.start ').onclick = function() {
    if (block.style.display === "none") {
        block.style.display = "block";
        document.querySelector('.bg').style.display = "none";
    } else {
        block.style.display = "none";
    }
}
