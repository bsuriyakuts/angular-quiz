myApp.controller("homeCtrl", function($scope, $location, $window,$http) {
	$('body').addClass("splash");
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;

	    }
	    return a;
	};
	//console.log(questions);
	questions.questions=[];
	for(var i=0;i<30;i++){
		var ansArray=[];
		for(j=0;j<4;j++)
		{
			ansArray.push({"id":j,"text":"Answer"+j});
		}
		var question={"id":i,"question":"question"+i,"options":ansArray,"answer":Math.random()};
		questions.questions.push(question);
	}
	$scope.Quiz=questions;
	$scope.Quiz.questions=shuffle(questions.questions);
	//console.log(questions);
	setTimeout(function(){
				wow = new WOW({
				boxClass : 'wow', // default
				animateClass : 'animated', // default
				offset : 0, // default
				mobile : true, // default
				live : true
				// default
				});
				wow.init();
				$('#ques0').fadeIn("slow");
				},500);
				
	$scope.showQuestion=function(index){
		
		for(var i=0;i<$scope.Quiz.questions.length;i++){
			if(index !=i)
				$('#ques'+i+'').fadeOut();			
		}
		$('#ques'+index+'').fadeIn(2000);
		
	};
	$scope.nextQuestion=function(index){
		$('#ques'+index+'').fadeOut(2000);
		if((index+1) ==$scope.Quiz.questions.length){
		}
		else {			
			setTimeout(function(){$('#ques'+(index+1)+'').fadeIn(500);},2000);
		}
		
	};
	$scope.saveTextAsFile=function()
	{
		var textToWrite = JSON.stringify($scope.Quiz);;
		var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
		var fileNameToSaveAs = "output.dat";
		  var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null)
		{
			// Chrome allows the link to be clicked
			// without actually adding it to the DOM.
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		}
		else
		{
			// Firefox requires the link to be added to the DOM
			// before it can be clicked.
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}

		downloadLink.click();
	};
});