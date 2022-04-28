
//const totalPages = ["page1.html", "page2.html", "page3.html"]




var pageArray = [
{
"page":"page1.html","ans":"green" 
},
{
"page":"page2.html","ans":"red"
},
{
"page":"page3.html","ans":"blue"
},
{
"page":"page4.html","ans":"green"
},
{
"page":"page5.html","ans":"green~red"
},
{
"page":"result.html","ans":""
}
]






function loadPage(num)
{
	//$('#content').load("page5.html");
	$('#content').load(pageArray[num].page);
	curPage = curPage + 1;
	console.log("curPage future__" + curPage );
}

function loadNextPage()
{
	
	$('#content').empty();
	console.log("curPage present__" + curPage );
	
	//loadPage(curPage);
	if(curPage >=5){
		loadPage(curPage);
		
	}else{
		
		loadPage(randomArr[curPage]);
	}
	
}



function myRandomInts(quantity, max)
{
  const arr = []
  while(arr.length < quantity){
    var candidateInt = Math.floor(Math.random() * max)
    if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
  }

return(arr)
}



