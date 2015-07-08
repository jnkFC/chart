function Col(chart){
	var x,y,inp=[],px,py,pz,r,w,h,ht,top,intrvl;
	var width1 = window.innerWidth;
	var height1 = window.innerHeight;
	var paper;
	var max1=0;
	viewport();
	console.log(chart.type);
	for(i in chart){
		if(i==="data"){
			for(j=0;j<(chart.data.length);j++){
				inp[j]=chart.data[j].value;
			}
		}
	}
	switch(chart.type){
		case "Column_chart":
			axis();
			input_scaling();

			r=w/(inp.length)-20;
			x=px-r+10;
			
			rec();
			break;
		case "Bar_chart":
			break;
		default:
		alert("WRONG CHART TYPE!!");

	}
	
	
	
	
	function rec(){
	var  nam;
		for(var j=0;j<inp.length;j++){
			ht=inp[j];
			nam=chart.data[j].names;
			draw_column(ht,nam,j);
		}
	}
	function draw_column(ht,nam,i){
		var colr=getRandomColor(); 		
		x=x+r+10;
		var p=paper.rect(x,(py-ht),r,ht).attr("fill", colr)
		.data("val",chart.data[i].value)
		.mouseover(function(){
			this.attr("title",this.data("val"))
			.attr("fill","red")})
		.mouseout(function(){
			this.attr("fill",colr)
		});
		paper.text(x+(r/2),py+50,nam).attr({"font-size":15}).rotate(90,x+(r/2),py+50);
		
		x=x+10;
	}
	//canvas defination
	function viewport(){
//veiw screen
		paper=Raphael(0,0,width1,height1);			
		for( i in chart){
			if(i==="width")
				w=chart[i];	
			else if(i==="height")
				h=chart[i];
		}
		px=((width1)/2)-(w/2);
		py=((height1)/2)+(h/2);
		console.log(px+" ");
	}	
	function axis(){
		for(j=0;j<inp.length;j++){
			if(inp[j]>max1){
				max1=inp[j];
			}

		} 
		//	axis
		
		paper.path("M"+px+" "+py+"V"+" "+(py-h));
		paper.path("M"+px+" "+py+"H"+" "+(px+w+20));
		top=py-h;
		if(max1>h){
			topnam=(h)*((max1/h)+0.5);

		}
		else 
			topnam=h;
		intrvl=(py-top)/5;
		for(var i=1;i<5;i++){
			console.log(py+" "+top);
			top=top+intrvl;
			topnam=topnam-((intrvl)*((max1/h)+0.5));
			paper.path("M"+(px-10)+" "+top+"H"+" "+(px+10));
			paper.text((px-20),top,topnam);
		
			

		}

	
	}
	function input_scaling(){
		//scaling inputs according to user specified screen width and height	
		console.log("MAX"+max1);
		if(max1>h){
			for(j=0;j<inp.length;j++){
				inp[j]=inp[j]/((max1/h)+0.5);
			}
		}
		
		
	}
	function getRandomColor() {
    		var letters = '0123456789ABCDEF'.split('');
   		 var color = '#';
   		 for (var i = 0; i < 6; i++ ) {
      			  color += letters[Math.floor(Math.random() * 16)];
   	 	}
    	return color;
	}
}
		


	
