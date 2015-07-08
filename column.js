function Col(chart){
	var x,y,inp=[],px,py,pz,r,w,h,ht,top,intrvl;
	var width1 = window.innerWidth;
	var height1 = window.innerHeight;
	var paper;
	var max1=0;
	for(i in chart){
		if(i==="data"){
			for(j=0;j<(chart.data.length);j++){
				inp[j]=chart.data[j].value;
			}
		}
	}
	viewport();
	input_scaling();
	r=w/(inp.length)-20;
	x=px-r;
	rec();
	function rec(){
	var  nam;
		for(var j=0;j<inp.length;j++){
			ht=inp[j];
			nam=chart.data[j].names;
			draw_column(ht,nam);
		}
	}
	function draw_column(ht,nam){
		var colr=getRandomColor(); 		
		x=x+r+10;
	//	console.log("x"+x+" "+(py-ht)+" "+r+" "+ht);
		paper.rect(x,(py-ht),r,ht).attr("fill", colr);
		paper.text(x+(r/2),py+30,nam).rotate(90,x+(r/2),py+30);
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
		for(j=0;j<inp.length;j++){
			if(inp[j]>max1){
				max1=inp[j];
			}

		} 
		console.log(width1+","+height1);
//	axis
		
		paper.path("M"+px+" "+py+"V"+" "+(py-h));
		paper.path("M"+px+" "+py+"H"+" "+(px+w));
		top=py-h;
		if(max1>h){
			topnam=(py-h)*((max1/h)+0.5);

		}
		else 
			topnam=py-h;

		intrvl=(py-top)/5;
		for(var i=1;i<5;i++){
			console.log(py+" "+top);
			top=top+intrvl;
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
		


	
