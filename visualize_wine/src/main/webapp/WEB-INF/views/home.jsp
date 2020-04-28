<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Home</title>
<!-- common_resource.jsp, home.js, home.css 호출 -->
    <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/wine.js"></script>

   	<link href="${pageContext.request.contextPath}/resources/css/charts/pieChart.css" rel="stylesheet" />
   	<link href="${pageContext.request.contextPath}/resources/css/charts/columnChart.css" rel="stylesheet" />
 	<link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
	
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/loadWineQuality_chart.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/loadWineAlcohol_chart.js"></script>
</head>
<body>
    <h1>Hello Wine!</h1>
    <!-- load_winelist -->
 	<button id = "load_wineQuality_list" type = "button">와인 품질별</button>
 	<button id = "load_wineAlcohol_list" type = "button">와인 알콜 도수별</button>
 	<div id = "chart_container">
 		<figure class="highcharts-figure">
		    <div id="container"></div>
		    <p class="description"></p>
		</figure>
 	</div>
</body>
</html>
