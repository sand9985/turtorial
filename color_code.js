function replaceAt(string, index,offset, replace) {
  return string.substring(0, index) + replace + string.substring(index+offset);
} 


function tag(code,color){	

	var res=code.match(/<[^!?][^>]*>/g);	
	
	if(res!=null){
		
		res = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });	
     
	for(var i=0;i<res.length;i++){		       
	       var  temp=res[i];	
		  
	  	   var target="ted_left;span style='color:"+color+";font-weight: bold'ted_right;"+temp+"ted_left;/spanted_right;";             		   
		    var patt2=new RegExp(res[i],"g");
		   code=code.replace(patt2,target);	
         	   
	  }	  	  
	}
	
    return code;	
}
function html_comment(code,color){

     var res=code.match(/<!--(.|\n)*-->/g);
	
	if(res!=null){
		res = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });	

    var patt=new RegExp("ted_left;span style='color:[#A-Za-z0-9]*;font-weight: bold'ted_right;|ted_left;/spanted_right;","g");    
	for(var i=0;i<res.length;i++){		  	   
		    
	  var temp=res[i].replace(patt,"");
	
			
	  	 var target="ted_left;span style='color:"+color+";font-weight: bold'ted_right;"+temp+"ted_left;/spanted_right;";            		   
		  
         var patt2=new RegExp(res[i],"g");
		  code=code.replace(patt2,target);		 		 	     
	  }	  	  
	}
	

   return code; 
}



function html_quote_string(code,color){

	var res=code.match(/"[^"]*"|'.'/g);
	
	if(res!=null){
		res = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });	
	  var patt=new RegExp("<[^>]*>","g");
	for(var i=0;i<res.length;i++){	
	       var  temp=res[i].replace(patt,"");		
	  	   var target="ted_left;span style='color:"+color+";font-weight: bold'ted_right;"+temp+"ted_left;/spanted_right;";             		   
		   
		   var patt2=new RegExp(res[i],"g");
		   code=code.replace(res[i],target);		 		 	     
	  }	  	  
	}
	
   return code;
}

function html_number(code, color){
	
	
    var match;
	var patt=/(0[xX][\da-fA-F]+)|(\d+(\.\d*[fF]*)?)/g;
	while ((match = patt.exec(code)) != null) {
	
	    var i=match.index;
	   if(i>0){		    		
		 if(code[i-1]!='\t' && code[i-1]!=' '&& code[i-1]!='\n' && code[i-1]!=';' && code[i-1]!=',' 
		 && code[i-1]!='+' && code[i-1]!='-' && code[i-1]!='*' && code[i-1]!='/'&& code[i-1]!='('&& code[i-1]!='['
		 && code[i-1]!='^' && code[i-1]!='&'
		 )
			 continue;			 		 
	   }		   	
	  var temp="";
	  for(;i<code.length;i++){
		  
		  if(code[i]>='0'&& code[i]<='9' || code[i]=='.' || code[i]=='f' || code[i]=='F' || code[i]=='x' || code[i]=='X')
			  temp+=code[i];
		  else				
			   break;			  			 	  		  	  
	  }	  
	  if(i<code.length){
	 if(code[i]!='\t' && code[i]!=' '&& code[i]!='\n' && code[i]!=';' && code[i]!=',' 
		 && code[i]!='+' && code[i]!='-' && code[i]!='*' && code[i]!='/'&& code[i]!=')' && code[i]!=']'
		 && code[i]!='^' && code[i]!='&'
		 )
			 continue;	
	  }			 
	 	 var target="ted_left;span style='color:"+color+";font-weight: bold'ted_right;"+temp+"ted_left;/spanted_right;";            		 
		 code=replaceAt(code,match.index,temp.length,target);				 
    }
		
	 
	
	return code;
	
}



function comment(code,color){
	  
	var res=code.match(/(\/\*([^\*]|[\r\n]|(\*+([^\*/]|[\r\n])))*\*+\/)|(\/\/.*)/g); 
	

	if(res!=null){
		res = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });	
	
    var patt=new RegExp("<[^>]*>","g");
	for(var i=0;i<res.length;i++){	  	
	         
	       var  temp=res[i].replace(patt,"");	              	  	
	  	   var target="<span style='color:"+color+";font-weight: bold'>"+temp+"</span>";				    		 
		   code=code.replace(res[i],target);		 		 
	  }
	  
	  
	}
	return code;
}


function keywords(code,key, color){
	
	var patt=new RegExp("\\b"+key+"\\b","g"); 
	var target="<span style='color:"+color+";font-weight: bold'>"+key+"</span>";	
	code= code.replace(patt,target);	
    return code;
	
}




function number(code, color){
	
	
    var match;
	var patt=/(0[xX][\da-fA-F]+)|(\d+(\.\d*[fF]*)?)/g;
	while ((match = patt.exec(code)) != null) {
	
	    var i=match.index;
	   if(i>0){		    		
		 if(code[i-1]!='\t' && code[i-1]!=' '&& code[i-1]!='\n' && code[i-1]!=';' && code[i-1]!=',' 
		 && code[i-1]!='+' && code[i-1]!='-' && code[i-1]!='*' && code[i-1]!='/'&& code[i-1]!='('&& code[i-1]!='['
		 && code[i-1]!='^' && code[i-1]!='&'
		 )
			 continue;			 		 
	   }		   	
	  var temp="";
	  for(;i<code.length;i++){
		  
		  if(code[i]>='0'&& code[i]<='9' || code[i]=='.' || code[i]=='f' || code[i]=='F' || code[i]=='x' || code[i]=='X')
			  temp+=code[i];
		  else				
			   break;			  			 	  		  	  
	  }	  
	  if(i<code.length){
	 if(code[i]!='\t' && code[i]!=' '&& code[i]!='\n' && code[i]!=';' && code[i]!=',' 
		 && code[i]!='+' && code[i]!='-' && code[i]!='*' && code[i]!='/'&& code[i]!=')' && code[i]!=']'
		 && code[i]!='^' && code[i]!='&'
		 )
			 continue;	
	  }			 
	   var target="<span style='color:"+color+";font-weight: bold'>"+temp+"</span>";   
		 code=replaceAt(code,match.index,temp.length,target);				 
    }
		
	 
	
	return code;
	
}
function quote_string(code,color){

	var res=code.match(/"[^"]*"|'.'/g);
	
	if(res!=null){
		res = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });	
	  var patt=new RegExp("<[^>]*>","g");
	for(var i=0;i<res.length;i++){	
	       var  temp=res[i].replace(patt,"");		
	  	   var target="<span style='color:"+color+";font-weight: bold'>"+temp+"</span>";             		   
		     var patt2=new RegExp(res[i],"g");
		   
		   code=code.replace(patt2,target);		 		 	     
	  }	  	  
	}
	
   return code;
}
function c_header(code,color){

	var res=code.match(/#.*/g);
	
	if(res!=null){
		res = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });	
	  var patt=new RegExp("<[^>]*>","g");
	for(var i=0;i<res.length;i++){	
	
	         if(res[i].match(/^#[a-zA-Z0-9]+;font-weight: bold'>/g)!=null)
			 continue;
	       var  temp=res[i].replace(patt,"");	            		   
	  	   var target="<span style='color:"+color+" ;font-weight: bold'>"+temp+"</span>";             		   
		   code=code.replace(res[i],target);		 		 	     
	  }	  	  
	}
	
   return code;
}


function add_br(code){
	  
	  var res=code.split("\n");
	  var new_code="";
	for(var i=0;i<res.length;i++){
	    new_code+=res[i]+"<br/>";
	}
	
	return new_code;
}

function class_keyword(code,color){
	
	var patt=new RegExp("((class)|(struct)|(import))[ \t]+[a-zA-Z_0-9.]+[ \n{]?","g");  
	var res=code.match(patt);
	if(res!=null){
		
	for(var i=0;i<res.length;i++){
	   
	    
	   var table=res[i].split(/[ \t\n]+/);
       var key= table[1].replace("{","");	
	   
       var tt=new RegExp("\\b"+key+"\\b","g"); 	   
       var target="<span style='color:"+color+";font-weight: bold'>"+key+"</span>";        
      code= code.replace(tt,target);	 
	}
	
   }
   return code;
   
}

function convert_C(code){
	


	
	
	var html="<div style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>";
	 html+="<pre style='margin: 0; line-height: 125%'>";
	 
	 
	 
    var key_words= ["int", "asm", "new","this","auto","enum","operator","throw",
	   "bool","explicit","private","true","break","export","protected","try",
	   "case","extern","public","typedef","catch","false","register","typeid",
	   "char","float","reinterpret_cast","typename","class","for","return","union",
	   "const","friend","short","unsigned","const_cast","goto","signed","using",
	   "continue","if","sizeof","virtual","default","inline","static","void",
	   "delete","static_cast","volatile","do","long","struct","wchar_t",
	   "double","mutable","switch","while","dynamic_cast","namespace","template","else"   
	   ];
    
  
	code=code.replace(/</g,"&lt;");
	code=code.replace(/>/g,"&gt;");
	
	code=class_keyword(code,"#C32C99");
    for(var i=0;i<key_words.length;i++){
	code=keywords(code,key_words[i],"#0000ff");		   
	}	
     
    code =number(code,"#BB5500");	  
	code =quote_string(code,"red");
    code =c_header(code,"#1d8121");
    code=comment(code,"#0d7e82");
	code=add_br(code);
	
	html+=code;
	html+="</pre>";
	html+="</div>";
	
	return html;
}


function convert_java(code){
var html="<div style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>";
	 html+="<pre style='margin: 0; line-height: 125%'>";
	 
	 	 
    var key_words= ["abstract","continue","for","new","switch",
	                "default","package","synchronized",
                    "boolean","do","if","private","this",
                    "break","double","implements","protected","throw",
                    "byte","else","import","public","throws",
				    "case","instanceof","return","transient",
                    "catch","extends","int","short","try",
					"char","final","interface","static","void",
                    "class","finally","long","volatile",
                    "const","float","native","super","while","String"  
	                                 ];

	
	code=code.replace(/</g,"&lt;");
	code=code.replace(/>/g,"&gt;");
    
	code=class_keyword(code,"#C32C99");
    for(var i=0;i<key_words.length;i++){
	code=keywords(code,key_words[i],"#0000ff");		   
	}	
	
	code=number(code,"#BB5500");	  
	code=quote_string(code,"red");
    code=comment(code,"#0d7e82");
	code=add_br(code);
	
	html+=code;
	html+="</pre>";
	html+="</div>";
	
	return html;
}

function convert_php(code){
	var html="<div style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>";
    html+="<pre style='margin: 0; line-height: 125%'>";
	
	
	var key_words= ["__halt_compiler","abstract","and","array",	"as",
					"break","callable","case","catch","class",
				    "clone","const","continue","declare","default",
					"die","do","echo","else","elseif",
					"empty","enddeclare","endfor","endforeach","endif",
					"endswitch","endwhile","eval","exit","extends",
					"final","finally","for","foreach","function",
					"global","goto","if","implements","include",
					"include_once","instanceof","insteadof","interface","isset",
					"namespace","new","print","list","private","protected",
					"public","require","require_once","return","static",
					"switch","throw","trait","try","unset","use",
 					 "var","while","xor","yield"
					];
	

	
	/*
	code=tag(code,"	#5555FF");		
	code=html_number(code,"#BB5500");	  
	code=html_quote_string(code,"red");
	code=html_comment(code,"#0d7e82");
	code=code.replace(/</g,"&lt;");
	code=code.replace(/>/g,"&gt;");	
	code=code.replace(/ted_left;/g,"<");
	code=code.replace(/ted_right;/g,">");
	
	*/
	

	 /*
	 code=code.replace(/<\?php/g,"php_start:");
     code=code.replace(/\?>/g,"php_end:");
	 code=code.replace(/</g,"&lt;");
	 code=code.replace(/>/g,"&gt;");
	 code=class_keyword(code,"#C32C99");
	 for(var j=0;j<key_words.length;j++)
	   code=keywords(code,key_words[j],"#0000ff");		   	
    code=number(code,"#BB5500");	  
	code=quote_string(code,"red");
    code=comment(code,"#0d7e82");
	
	var color="#0000ff";
	var key="&lt;?php";
	var target="<span style='color:"+color+";font-weight: bold'>"+key+"</span>";	
    code=code.replace(/php_start:/g,target);
	key="?&gt;";
    target="<span style='color:"+color+";font-weight: bold'>"+key+"</span>";
    code=code.replace(/php_end:/g,target);
	
	*/
	var res=code.match(/<\?php(.|\n)*\?>/g);
	console.log(res.length);
	if(res!=null){
	
	for(var i=0;i<res.length;i++){
	   var temp="$php"+i+"php$";
	   code=code.replace(res[i],temp);
	   var str=res[i];
	   
	 str=str.replace(/<\?php/g,"php_start:");
     str=str.replace(/\?>/g,"php_end:");
	 str=str.replace(/</g,"&lt;");
	 str=str.replace(/>/g,"&gt;");
	 str=class_keyword(str,"#C32C99");
	 for(var j=0;j<key_words.length;j++)
	str=keywords(str,key_words[j],"#0000ff");		   	
    str=number(str,"#BB5500");	  
	str=quote_string(str,"red");
    str=comment(str,"#0d7e82");
	
	var color="#0000ff";
	var key="&lt;?php";
	var target="<span style='color:"+color+";font-weight: bold'>"+key+"</span>";	
    str=str.replace(/php_start:/g,target);
	key="?&gt;";
    target="<span style='color:"+color+";font-weight: bold'>"+key+"</span>";
    str=str.replace(/php_end:/g,target);
	res[i]=str;
	
	}
	
	
	
	}
    code=tag(code,"#5555FF");		
	code=html_number(code,"#BB5500");	  
	code=html_quote_string(code,"red");
	code=html_comment(code,"#0d7e82");
	code=code.replace(/</g,"&lt;");
	code=code.replace(/>/g,"&gt;");	
	code=code.replace(/ted_left;/g,"<");
	code=code.replace(/ted_right;/g,">");
	for(var i=0;i<res.length;i++){
	   var temp="$php"+i+"php$";
	   code=code.replace(temp,res[i]);		
	}
	
	
	code=add_br(code);	
	html+=code;
	html+="</pre>";
	html+="</div>";
	
   return html;
}

function convert_Csharp(code){
var html="<div style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>";
	 html+="<pre style='margin: 0; line-height: 125%'>";
	 
	 
	
    var key_words= ["abstract","as","base","bool",
					"break","byte","case","catch",
					"char","checked","class","const",
					"continue","decimal","default","delegate",
					"do","double","else","enum",
					"event","explicit","extern","false",
					"finally","fixed","float","for",
					"foreach","goto","if","implicit",
					"in","int","interface",
					"internal","is","lock","long",
					"new","null","object",
					"operator","out","override",
					"params","private","protected","public",
					"readonly","ref","return","sbyte",
					"sealed","short","sizeof","stackalloc",
					"static","string","struct","switch",
					"this","throw","true","try",
					"typeof","uint","ulong","unchecked",
					"unsafe","ushort","using","using","static",
					"virtual","void","volatile","while",
					"namespace","add","alias","ascending",
					"async","await","descending",
					"dynamic","from","get",
					"global","group","into",
					"join","let","nameof",
					"orderby","partial","partial",
					"remove","select","set",
					"value","var","when",
					"where","yield"
					];
	                                 
    
      
	code=code.replace(/</g,"&lt;");
	code=code.replace(/>/g,"&gt;");
    code=class_keyword(code,"#C32C99");
    for(var i=0;i<key_words.length;i++){
	code=keywords(code,key_words[i],"#0000ff");		   
	}	
    code=number(code,"#BB5500");	  
	code=quote_string(code,"red");
    code=comment(code,"#0d7e82");
	code=add_br(code);

	
	html+=code;
	html+="</pre>";
	html+="</div>";
	
	return html;


}


function convert_javascript(code){
	var html="<div style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>";
    html+="<pre style='margin: 0; line-height: 125%'>";
	

	
	var key_words= ["abstract","arguments","boolean",
					"break","byte","case","catch",
					"char",	"const","continue",
					"debugger","default","delete","do",
					"double","else","eval",
					"false","final",
					"finally","float","for","function",
					"goto","if","implements",
					"in","instanceof","int","interface",
					"long","native","new",
					"null","package","private","protected",
					"public","return","short","static",
					"switch","synchronized","this",
					"throw","throws","transient","true",
					"try","typeof","var","void",
					"volatile","while","with","yield"
					];
	
	
	code=code.replace(/</g,"&lt;");
	code=code.replace(/>/g,"&gt;");
    code=class_keyword(code,"#C32C99");
    for(var i=0;i<key_words.length;i++){
	code=keywords(code,key_words[i],"#0000ff");		   
	}	
    code=number(code,"#BB5500");	  
	code=quote_string(code,"red");
    code=comment(code,"#0d7e82");
	code=add_br(code);

	
	
	html+=code;
	html+="</pre>";
	html+="</div>";
	
   return html;
	
	
}