
//const cAnswer = "green";
var submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', MCQAnswer);

document.getElementById("QuesNo").innerHTML = "Question No:" + curPage;

function MCQAnswer()
{
	console.log("main" + score);
    var x = document.getElementsByName("colors")
	var cAnswer = pageArray[randomArr[curPage-1]].ans;
	
	console.log("randomArr[curPage]" + randomArr[curPage] + "cAnswer" + cAnswer);
	 for(i = 0; i < x.length; i++) {
	 
                if(x[i].checked){
                
				 var y = String(x[i].value);
				 
				 document.getElementById("feedback").classList.remove('hide');
				 document.getElementById("nques").classList.remove('hide');
				 console.log("y:" + x[i].value);
				if (y == cAnswer)
				{
					score = score + 1;
					document.getElementById("fb-Txt").innerHTML = "This is the correct answer!";
					
				}else{
				
					document.getElementById("fb-Txt").innerHTML = "This is the incorrect answer!";
				}
            }
        }
  //document.getElementById("demo").innerHTML = x;
	
}

