window.addEventListener('load', function() {
	if (document.querySelectorAll('[data-target]')) {
		popup();
	}
});

function closePopup() {
	var	visibleElems = document.querySelectorAll('.popup_visible');
	for (let i = 0; i < visibleElems.length; i++) {
		visibleElems[i].classList.remove('popup_visible');
	}
}

function popup() {
	var dataTarget = document.querySelectorAll('[data-target]'),
		visibleElems = document.querySelectorAll('.popup_visible'),
		btnClose = document.querySelectorAll('.btn-close'),
		dataModal;

	for (let i = 0; i < dataTarget.length; i++){
		if (document.getElementById(dataTarget[i].dataset.target)) {
			dataTarget[i].addEventListener('click', function() {
				dataModal = document.getElementById(dataTarget[i].dataset.target);
				dataModal.classList.add('popup_visible');
			})
		}
	}

	for (let i = 0; i < btnClose.length; i++) {
		btnClose[i].addEventListener('click', function() {
			closePopup();
		});
	}

	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 27 && visibleElems) {
			closePopup();
		}
	});

	document.addEventListener('click', function(e) {
		if ((!e.target.closest('.popup-main') && (e.target.closest('.popup'))) && visibleElems) {
			closePopup();
		}
	});
}