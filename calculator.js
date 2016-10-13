             var d=document.getElementById("data2");
	var n=new Array();
	var s=0;
	function send(i){
		 d=document.getElementById("data"+i).innerHTML;
		 	if (d=='+'||d=='-'||d=='*'||d=='/'||d=='.'){
		 		if(n[s-1]=='+'||n[s-1]=='-'||n[s-1]=='*'||n[s-1]=='/'||n[s-1]=='.'){

		 		}
		 		else{
			 		n[s++]=d;
		            			document.getElementById("show").value=n.join("") ;
		 		}
		 	}
		 	else{
		 		n[s++]=d;
	            			document.getElementById("show").value=n.join("") ;
		 	}
	}    /* 发送数据*/

	function back(){
		if(s>0){
		n[--s]="";
		document.getElementById("show").value=n.join("") ;
		}
		else{
			s=0;
		}
	}     /*删除数据*/

	function clear_data(){
		document.getElementById("show").value=0;
		document.getElementById("result").value="";
		for(;s>=0;s--){
			n[s]="";
		}
		s=0;
		
	}

	function output(){
	
			document.getElementById("result").value=eval(n.join("")) ;
		
	}/*输出数据*/

