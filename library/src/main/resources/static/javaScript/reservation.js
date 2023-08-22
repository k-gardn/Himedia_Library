//열람실 탭 이동
/*const room_menu = document.querySelectorAll('.room_menu');

function activateMenuItem() {
	room_menu.forEach(item => item.classList.remove('active'));

	this.classList.add('active');
}

room_menu[0].classList.add('active');

room_menu.forEach(item => item.addEventListener('click', activateMenuItem));*/


//각 좌석 클릭 리스너 등록
let each_seat = document.querySelectorAll('.each_seat');
//console.log(each_seat);
each_seat.forEach(item => item.addEventListener('click', activateEach_seat));

// 탭 클릭 시에 좌석 상태 업데이트
var reservedSeat=[];
let room = "R1";


/*function showInfo(menu) {
    //console.log(menu);
    room = "R1";
    if (menu == "readingRoom1") {
        room = "R1";
    } else if (menu == "readingRoom2") {
        room = "R2";
    } else {
        room = "SR";
    }

    var url = "/reservation/" + menu;
    const room_container = document.getElementById('room_container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //room_container.innerHTML = xhr.responseText;
			
			showReservedSeat(room);
		
            // 각 좌석 클릭 리스너 등록하기.
            each_seat = document.querySelectorAll('.each_seat');
            each_seat.forEach(item => item.addEventListener('click', activateEach_seat));

            // 좌석 상태 업데이트
            //updateSeatStatus();
        }
    };
    xhr.send();
}*/

/*	let seatXhr;
	showReservedSeat(room);
function showReservedSeat(room){
	seatXhr = new XMLHttpRequest();
	seatXhr.open('POST', "room");
	//seatXhr.setRequestHeader('content-type', 'application/json');
	seatXhr.send(room);
	seatXhr.onreadystatechange = roomProc;
	
}*/


function roomProc() {
	console.log("roomProc");
    if (seatXhr.readyState === 4) {console.log("roomProc1");
        if (seatXhr.status === 200) {console.log("roomProc2");
			reservedSeat = JSON.parse(seatXhr.responseText);console.log("roomProc3");
			updateSeatStatus();
			//reservedSeat = seatXhr.responseText;
            console.log(typeof seatXhr.responseText);
            console.log(typeof reservedSeat);
        } else {
            console.log('에러: ' + seatXhr.status);
        }
    }
}

// 초기 로딩 시 좌석 상태 업데이트
updateSeatStatus();

// 좌석 상태 업데이트 함수
function updateSeatStatus() {
	//console.log(reservedSeat.length)
	each_seat.forEach(item => {
		for (let i = 0; i < reservedSeat.length; i++) {
			if (item.textContent === String(reservedSeat[i])) {
				console.log("이고"+String(reservedSeat[i]));
				console.log("여기요",i);
				item.classList.add('using');
				
			} 
		}
	});
}

//팝업으로 좌석 예약하기
let popupWindow;
//let popupForm;
let seatNumber;
let whichRoom;
function activateEach_seat() {
	console.log("클릭");
	seatNumber = this.textContent;
	let roomDiv = document.querySelector('.whichRoom');
	whichRoom = roomDiv.innerText.split('\n')[0];
	//console.log(whichRoom);
	
	//예약 눌렀을 경우 로그인 안하면 loginPage로넘어가도록
	if(sessionId == ""){
		result = confirm("로그인 후 이용해주세요.")
		if(result){
			location.href="/login";
			return;
		}else{
			location.href="/main";
			return;
		}
	}	
	let reserve;
	if(this.classList.contains("using")){
		alert("이미 사용중인 좌석입니다.")
	}
	//else{
		//reserve = confirm(seatNumber + "를 예약하시겠습니까?");
	//}
	//if (reserve) {
		let url = "/reservation/roomPopUp?seatId=" + seatNumber + "&room=" + whichRoom;

		var popupWidth = 500;
		var popupHeight = 500;
		var leftPosition = (window.innerWidth - popupWidth) / 2;
		var topPosition = (window.innerHeight - popupHeight) / 2;

		// 팝업창 열 때 URL을 지정하여 열기
		//console.log(seatNumber);
		//console.log(url);
		popupWindow = window.open(url, 'Seat Popup', 'width=' + popupWidth +
			',height=' + popupHeight + ',left=' + leftPosition + ',top=' + topPosition);
		popupWindow.onload = function() {
			const cancelBtn = popupWindow.document.querySelector('.popCancelBtn');
			cancelBtn.addEventListener('click', closePopUp);
			
			const reserveBtn = popupWindow.document.querySelector('.reserveBtn')
			//popupForm = popupWindow.document.getElementById('f');
			//console.log(f);
			reserveBtn.addEventListener('click', reserveSubmit);
		//};
	}
}


function closePopUp() {
	//console.log("취소버튼")
	if (popupWindow) {
		//console.log("closePopUp");
		popupWindow.close();
	}
}
var reserveXhr;
function reserveSubmit() {
	var result = popupWindow.confirm("예약 하시겠습니까?");
	if(result){
		var reqData = { seatId: seatNumber, room: whichRoom }
		// JSON.stringify(reqData) : 자바스크립트 object 자료형을 JSON 문자열 자료형으로 변환
		// 네트워크(인터넷)로 데이터를 전달하기 위해서 변환.
		//console.log('JSON.stringify(reqData) : ' + JSON.stringify(reqData))

		reqData = JSON.stringify(reqData);
		reserveXhr = new XMLHttpRequest();
		reserveXhr.open('POST', "/reservation/reserveProc");
		reserveXhr.setRequestHeader('content-type', 'application/json');
		reserveXhr.send(reqData);
		
		reserveXhr.onreadystatechange = reserveProc;
		//popupForm.submit();
        if(whichRoom == "자율 학습실1")
        	whichRoom = "readingRoom1";
        if(whichRoom == "자율 학습실2")
        	whichRoom = "readingRoom2";
        location.href="/reservation/"+whichRoom;
		
		// 원래 창 새로고침
		popupWindow.close();
        window.location.reload();
	}
}


function reserveProc() {
	console.log("reserveProc");
    if (reserveXhr.readyState === 4) {console.log("roomProc1");
        if (seatXhr.status === 200) {console.log("roomProc2");
        	let response = seatXhr.responseText;
        	console.log(response);
        	
			//updateSeatStatus();
			//reservedSeat = seatXhr.responseText;
        } else {
            console.log('에러: ' + seatXhr.status);
        }
    }
}


