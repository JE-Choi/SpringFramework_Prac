$( document ).ready(function() {
	load_wineAlcohol_list();
});
function load_wineAlcohol_list(){
    var url="/visualize_wine/selectAlcohol";  
    $("#load_wineAlcohol_list").click(function(){ 
    	$.ajax({      
            type:"POST",  
            url:url,      
            success:function(args){
               console.log(args);
                loadColumnChart(args[0].cut, args[1].cut, args[2].cut);
            },   
            beforeSend:function(){
//                $("#movieList").empty();  
            },
            error:function(e){  
                alert(e.responseText);  
            }  
        });  
    });
}

function loadColumnChart(hAlcohol, mAlcohol, lAlcohol){
	console.log(hAlcohol+" "+ mAlcohol+" "+lAlcohol);
	var total = hAlcohol + mAlcohol + lAlcohol;
	var lAlcoholPercent = parseFloat((hAlcohol / total * 100).toFixed(2));
	var mAlcoholPercent = parseFloat((mAlcohol / total * 100).toFixed(2));
	var hAlcoholPercent = parseFloat((100 - (lAlcoholPercent + mAlcoholPercent)).toFixed(2));
	console.log(lAlcoholPercent+" "+ mAlcoholPercent+" "+hAlcoholPercent);
	
	$(".description").text("낮음: 12.5미만 , 적절: 12.5이상 13.5미만, 높음: 13.5이상");
	// Create the chart
	Highcharts.chart('container', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: '와인 알콜 도수별'
	    },
	    subtitle: {
	        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
	    },
	    accessibility: {
	        announceNewData: {
	            enabled: true
	        }
	    },
	    xAxis: {
	        type: 'category'
	    },
	    yAxis: {
	        title: {
	            text: 'Total percent market share'
	        }

	    },
	    legend: {
	        enabled: false
	    },
	    plotOptions: {
	        series: {
	            borderWidth: 0,
	            dataLabels: {
	                enabled: true,
	                format: '{point.y:.1f}%'
	            }
	        }
	    },

	    tooltip: {
	        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
	    },

	    series: [
	        {
	            name: "Alcohol",
	            colorByPoint: true,
	            data: [
	                {
	                    name: "낮음",
	                    y: lAlcoholPercent,
	                    drilldown: "낮음"
	                },
	                {
	                    name: "적절",
	                    y: mAlcoholPercent,
	                    drilldown: "적절"
	                },
	                {
	                    name: "높음",
	                    y: hAlcoholPercent,
	                    drilldown: "높음"
	                }
	            ]
	        }
	    ],
	    drilldown: {
	        series: [
	            {
	                name: "낮음",
	                id: "낮음",
	                data: [
	                    [
	                        "v65.0",
	                        0.1
	                    ],
	                    [
	                        "v64.0",
	                        1.3
	                    ],
	                    [
	                        "v63.0",
	                        53.02
	                    ],
	                    [
	                        "v62.0",
	                        1.4
	                    ],
	                    [
	                        "v61.0",
	                        0.88
	                    ],
	                    [
	                        "v60.0",
	                        0.56
	                    ],
	                    [
	                        "v59.0",
	                        0.45
	                    ],
	                    [
	                        "v58.0",
	                        0.49
	                    ],
	                    [
	                        "v57.0",
	                        0.32
	                    ],
	                    [
	                        "v56.0",
	                        0.29
	                    ],
	                    [
	                        "v55.0",
	                        0.79
	                    ],
	                    [
	                        "v54.0",
	                        0.18
	                    ],
	                    [
	                        "v51.0",
	                        0.13
	                    ],
	                    [
	                        "v49.0",
	                        2.16
	                    ],
	                    [
	                        "v48.0",
	                        0.13
	                    ],
	                    [
	                        "v47.0",
	                        0.11
	                    ],
	                    [
	                        "v43.0",
	                        0.17
	                    ],
	                    [
	                        "v29.0",
	                        0.26
	                    ]
	                ]
	            },
	            {
	                name: "적절",
	                id: "적절",
	                data: [
	                    [
	                        "v58.0",
	                        1.02
	                    ],
	                    [
	                        "v57.0",
	                        7.36
	                    ],
	                    [
	                        "v56.0",
	                        0.35
	                    ],
	                    [
	                        "v55.0",
	                        0.11
	                    ],
	                    [
	                        "v54.0",
	                        0.1
	                    ],
	                    [
	                        "v52.0",
	                        0.95
	                    ],
	                    [
	                        "v51.0",
	                        0.15
	                    ],
	                    [
	                        "v50.0",
	                        0.1
	                    ],
	                    [
	                        "v48.0",
	                        0.31
	                    ],
	                    [
	                        "v47.0",
	                        0.12
	                    ]
	                ]
	            },
	            {
	                name: "높음",
	                id: "높음",
	                data: [
	                    [
	                        "v11.0",
	                        6.2
	                    ],
	                    [
	                        "v10.0",
	                        0.29
	                    ],
	                    [
	                        "v9.0",
	                        0.27
	                    ],
	                    [
	                        "v8.0",
	                        0.47
	                    ]
	                ]
	            }
	        ]
	    }
	});
}