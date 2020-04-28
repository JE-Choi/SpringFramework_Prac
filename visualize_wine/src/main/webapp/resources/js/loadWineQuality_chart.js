$( document ).ready(function() {
	load_wineQuality_list();
});
var wineQuality;

function load_wineQuality_list(){
    var url="/visualize_wine/selectQuality";  
    $("#load_wineQuality_list").click(function(){ 
    	$.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
            	wineQuality = args;
            	l = wineQuality.length
            	total = 0;
                for(var i = 0; i < l; i++){
                	total += wineQuality[i].cut
                }
                var hQualityPercent = (wineQuality[l-1].cut / total * 100).toFixed(2);
                var lQualityPercent = 100 - hQualityPercent;
            	load_PieChart(hQualityPercent, lQualityPercent);
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

function load_PieChart(hQualityPercent, lQualityPercent){
	console.log("high: "+ hQualityPercent + " low: "+ lQualityPercent);
	$(".description").text("저품질: 3이상 5이하,  고품질: 6이상 8이하");
	Highcharts.chart('container', {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie'
	    },
	    title: {
	        text: '와인 품질별'
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
	            }
	        }
	    },
	    series: [{
	        name: 'Quality',
	        colorByPoint: true,
	        data: [{
	            name: '고품질',
	            y: parseFloat(hQualityPercent),
	            sliced: true,
	            selected: true
	        }, {
	            name: '저품질',
	            y: parseFloat(lQualityPercent)
	        }]
	    }]
	});
}