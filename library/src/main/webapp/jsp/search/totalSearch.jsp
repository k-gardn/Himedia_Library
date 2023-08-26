<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<head>
<title>하이미디어 도서관 - 통합검색</title>
<c:url var="context" value="/" />

<link href="${context }css/main.css" rel="stylesheet" type="text/css">
<link href="${context }css/search.css" rel="stylesheet" type="text/css">
<link href="${context }css/myLibrary.css" rel="stylesheet"
	type="text/css">

</head>
<body>
	<c:import url="${context }header" />
	<c:import url="${context }datasearch/searchModal" />
	<!-- <div id="searchModal" class="modal">
		<div class="modal-content contentContainer">
			<p class="content">
			내용
			</p>
			<div class="buttonBox">
				<button id="leaveButton">퇴실</button>
				<button class="cancelButton">취소</button>
			</div>

		</div>
	</div> -->
	<div class="myLibraryContainer inner pageContent_mt">
		<c:import url="/datasearch/subMenuSearch" />
		<div class="myLibraryContent">
			<div>
				<h1>통합검색</h1>
				<div class="search_title">
					<p>소장하고 있는 자료에 대한 가장 기본적인 검색입니다.</p>
				</div>
				<div class="mb_30 mt_20">
					<a href="/main">HOME</a> > <a href="/datasearch">자료검색</a> > <a
						class="checked" href="/datasearch/totalSearch">통합검색</a>
				</div>
			</div>
			<div class="searchBox">
				<form class="search_area totalSearch" action="totalSearchProc"
					method="post" accept-charset="UTF-8">
					<input class="searchInput" name="totalSearch"
						placeholder="검색어를 입력하세요.">
					<button class="search_Btn totalSearch">
						<img src="/image/search.png">
					</button>
				</form>
			</div>
			<c:choose>
				<c:when test="${empty searchResult}">
					<span>0개의 검색 결과가 존재합니다.</span>
				</c:when>
				<c:otherwise>
					<c:forEach var="result" items="${searchResult}">
						<div class="search_result">
							<div class="bookImgBox" onclick="getBookDetail()">
								<!-- span>1</span> -->
								<div class="result_bookImg">
									<img src="${result.bookImageURL}" alt="이미지 없음" />
								</div>
							</div>
							<div class="result_bookContent">
								<div class="bookContentBox">
									<div class="title search ">${result.bookName}</div>
									<div class="bookInfo">
										<span>${result.authors} |</span> <span>${result.publisher}
											|</span> <span>${result.publicationYear}</span>
									</div>
									<div class="bookDtlButton" onclick="getBookDetail()">도서
										정보</div>
								</div>
							</div>
						</div>
					</c:forEach>
				</c:otherwise>
			</c:choose>
			<div class="totalSearchPage">${result }</div>
		</div>
	</div>
	<script src="${context }javaScript/search.js"></script>
	<c:import url="/footer" />
</body>