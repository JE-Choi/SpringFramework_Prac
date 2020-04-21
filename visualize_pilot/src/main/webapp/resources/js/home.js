// JQuery
$( document ).ready(function() {
    load_movielist();
});
 
function load_movielist(){
    var movieList;
    var html;
    $("#load_movieList").click(function(){  
    
        var url="/visualize_pilot/restex";  
        //var params="param1="+param1+"¶m2="+param1;  
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
                movieList = args;
                for(var i=0;i<args.length;i++){
                    html = "<tr>"
                            + "<td>" + args[i].movie_name + "</td>" 
                            + "<td>" + args[i].director + "</td>"
                            + "<td>" + args[i].types + "</td>"
                            "</tr>";
                    $("#movieList").append(html);
                }
                
                console.log(args);
            },   
            beforeSend:function(){
                $("#movieList").empty();  
            },
            error:function(e){  
                alert(e.responseText);  
            }  
        });  
      
    });
}

// JS
function load_movielist2(){
	var movieList;
    var html = "";
    var movieList_component;
    
    var beforeSend = function() {
    	movieList_component = document.getElementById("movieList");
    	movieList_component.innerHTML = "";
	}
    
    var url="/visualize_pilot/restex";  
   
    // Ajax을 대체할 XMLHttpRequest 객체 요청
    var xhRequest = new XMLHttpRequest();
    
    // 서버 응답 처리
    xhRequest.onreadystatechange = function() {
		if (xhRequest.readyState === 4) { // COMPLETED / 데이터를 전부 받은 상태
			if (xhRequest.status === 200) {
				movieList = JSON.parse(xhRequest.responseText);

				for (var i = 0; i < movieList.length; i++) {
					
					html += "<tr>"
	                        + "<td>" + movieList[i].movie_name + "</td>" 
	                        + "<td>" + movieList[i].director + "</td>"
	                        + "<td>" + movieList[i].types + "</td>"
	                        "</tr>";

				}
				movieList_component.innerHTML = html;

			} else {
				alert(xhRequest.responseText);
			}
		}
	} 
    
    beforeSend();
    xhRequest.open("POST", url, true);
	xhRequest.setRequestHeader("Content-Type", "application/json");
	xhRequest.send(null);
}