<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<link href = "/css/main.css" rel = "stylesheet" type = "text/css">
<link href = "/css/myLibrary.css" rel = "stylesheet" type = "text/css">
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

<script>
	
</script>

<title>하이미디어 도서관 - 관리자 페이지 : 회원관리</title>
<body>
	<c:import url = "/header"/>
	<div class = "adminContainer inner">
		<c:import url = "/subMenuMyLibrary"/>
		<div class = "adminContent">
			<div class = "admin header">
				<h1>회원정보</h1>
				<div class="mb_30 mt_20">
					<a href="/main">HOME</a> > 
					<a href="/adminMember">마이라이브러리</a> >
					<a class="checked" href="/adminMember">회원정보</a>
				</div>
				<div class = "subMenu_member">
					<ul>
					    <li id="activeLi" class="menu-item" onclick="showInfo('updateInfo')">회원정보 수정</li>
					    <li class="menu-item" onclick="showInfo('updatePW')">비밀번호 수정</li>
					    <li class="menu-item" onclick="showInfo('authentication')">회원 인증</li>
					    <li class="menu-item" onclick="showInfo('withdraw')">회원 탈퇴</li>
					  </ul>
				</div>
			</div>
			<div class="RIContainer">
				<div id="myInfoContainer"></div>
			</div>
		</div>
	</div>
	<c:import url="/footer"/>

	<script src = "/javaScript/myInfoUpate.js"></script>
</body>