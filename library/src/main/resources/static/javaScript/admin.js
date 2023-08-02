 // 현재 URL을 가져오는 JavaScript 함수
    function getCurrentURL() {
      return window.location.href;
    }

    // URL에 따라 버튼 색상을 변경하는 JavaScript 함수
    function setButtonColorByURL() {
      var currentURL = getCurrentURL();
      // 원하는 URL 패턴에 따라 버튼 색상을 변경합니다.
      if (currentURL.includes("Member")) {
        document.getElementById("subMember").classList.add("active");
      } 
      //else if (currentURL.includes("register")) {
        //document.getElementById("subRegister").classList.add("active");
        //document.getElementById("subLogin").classList.remove("active");
        //document.getElementById("subFindMemberId").classList.remove("active");
        //document.getElementById("subDeleteMember").classList.remove("active");
      //} else if (currentURL.includes("findMemberId")) {
        //document.getElementById("subFindMemberId").classList.add("active");
        //document.getElementById("subLogin").classList.remove("active");
        //document.getElementById("subRegister").classList.remove("active");
        //document.getElementById("subDeleteMember").classList.remove("active");
      //} else if (currentURL.includes("deleteMember")){
		//document.getElementById("subDeleteMember").classList.add("active");
        //document.getElementById("subLogin").classList.remove("active");
        //document.getElementById("subRegister").classList.remove("active");
        //document.getElementById("subFindMemberId").classList.remove("active");
      //} else {
        // 기본적으로 어떤 패턴에도 해당하지 않을 경우 버튼 색상을 초기화합니다.
        //document.getElementById("redButton").classList.remove("red-button");
        //document.getElementById("blueButton").classList.remove("blue-button");
      //}
    }

    // 페이지 로드 시 버튼 색상을 설정합니다.
    setButtonColorByURL();

    // 페이지 URL이 변경될 때마다 버튼 색상을 업데이트합니다.
    window.onpopstate = function () {
      setButtonColorByURL();
    }
    
    
    // 회원관리 - 조회조건
    function condition(){
		var li = document.getElementById('activeLi').textContent;
		if(li == '인증 승인/반려'){
			document.getElementById('idLbl').style.display="none";
			document.getElementById('searchSelect').style.display="none";
			document.getElementById('memberSearch').style.display="none";
		}
	}