// select the item element
var item = document.querySelector('#item');
var itembox = document.querySelector('.item-box');
var submitDnD = document.querySelector('.submit');
// attach the dragstart event handler
item.addEventListener('dragstart', dragStart);
submitDnD.addEventListener('click', checkSubmit);
var dropTrgt = "";
//const correctDAns = "red"

document.getElementById("QuesNo").innerHTML = "Question No:" + curPage;

// handle the dragstart

function dragStart(e) {
   console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
   
   setTimeout(() => {
        //e.target.classList.add('hide');
		console.log("itembox:" + itembox);
		itembox.classList.add('hide');
    }, 0);
}



var boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
	e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
	e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
	e.preventDefault();
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    var id = e.dataTransfer.getData('text/plain');
    var draggable = document.getElementById(id);
	dropTrgt = String(e.target.id);
	console.log("id:  " + id + " dropTrgt:" + dropTrgt)

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}

function checkSubmit(e) {
	console.log("submit clicked")
	document.getElementById("feedback").classList.remove('hide');
	document.getElementById("nques").classList.remove('hide');
	
	var correctDAns = pageArray[randomArr[curPage-1]].ans;
	console.log("randomArr[curPage-1]" + randomArr[curPage-1] + "correctDAns" + correctDAns + " " + curPage);
	if(correctDAns == dropTrgt)
	{
		
		
		document.getElementById("fb-Txt").innerHTML = "This is the correct answer!";
		score = score + 1;
	}else{
		
		document.getElementById("fb-Txt").innerHTML = "This is the incorrect answer!";
	}
	
}
