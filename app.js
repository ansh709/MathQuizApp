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

var btn = document.querySelector('.btn').onclick = function() {

    var arr = [];
    var newarr = [];
    var right = document.querySelectorAll('.right');

    for (var i = 0; i < right.length; i++) {

        (right[i].checked) ? console.log(right[i].value): console.log("error");
        arr.push(right[i].value);
    };
    for (var i in arr) {
        document.querySelector('.Right_Answers').innerHTML += `
        <p>${arr01[i].qus}</p>
        <span>Ans. ${arr[i]}</span>
        <br><br>
        `;
    }

    var inpu = document.querySelectorAll(".click");

    for (var i = 0; i < inpu.length; i++) {
        if (inpu[i].checked) {
            document.querySelector('.answers').style.display = "block";
            document.querySelector('.blocks').style.display = "none";
            console.log(inpu[i].value);
            newarr.push(inpu[i].value);

        } else {
            console.log();
        }
    }
    for (var i in newarr) {
        document.querySelector('.your_Answers').innerHTML += `
        <p>${arr01[i].qus}</p>
        <span>Ans. ${newarr[i]}</span><br>
        `;
        if (newarr[i].value == right[i].value1) {
            console.log("yes");
        } else {
            console.log("no");
        }


    }
    console.log(newarr);
    console.log(newarr.length);

}
var block = document.querySelector('.content');
document.querySelector('.start ').onclick = function() {
    if (block.style.display === "none") {
        block.style.display = "block";
        document.querySelector('.bg').style.display = "none";
    } else {
        block.style.display = "none";
    }
}