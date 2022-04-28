
//const cAnswer = "green";
var submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', MCQAnswer);


document.getElementById("QuesNo").innerHTML = "Question No:" + curPage;

function MCQAnswer()
{
	console.log("main" + score);
    var x = document.getElementsByName("colors")
	var cAnswer = pageArray[randomArr[curPage-1]].ans;
	var tmpCAns = 0
	var y =[];
	console.log("randomArr[curPage]" + randomArr[curPage] + "cAnswer" + cAnswer);
	 for(i = 0; i < x.length; i++) {
	 
                if(x[i].checked){
                
				 y.push(String(x[i].value));
				 
				 document.getElementById("feedback").classList.remove('hide');
				 document.getElementById("nques").classList.remove('hide');
				 
				const myArray = cAnswer.split("~");

				
				
				for(j = 0; j < myArray.length; j++) 
				{
					console.log( myArray[j] + x[i].value);
					if(myArray[j] == x[i].value)
					{
						
						tmpCAns++
					}
					
					console.log( "tmpCAns" + tmpCAns);
				}
            }
        }
		
		if(tNoCAns== tmpCAns)
		{
					score = score + 1;
					document.getElementById("fb-Txt").innerHTML = "This is the correct answer!";
		}else{
			
			document.getElementById("fb-Txt").innerHTML = "This is the incorrect answer!";
		}
		
		
	
}

