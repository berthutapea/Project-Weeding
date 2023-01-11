(function ($) {
	"use strict";

	/* ..............................................
	Loader 
	................................................. */

	$(window).on('load', function () {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({ 'overflow': 'visible' });
	});

	/* ..............................................
		Buka Undangan 
		................................................. */

	const splashscreen = document.getElementById("splashscreen");
	const tutupHalaman = document.getElementById("tutup-halaman");
	const openInvitationButton = document.querySelector(".buka-undangan");

	function openInvitation() {
		splashscreen.style.display = "none";
		tutupHalaman.style.display = "block";
		audio.play()
	}

	openInvitationButton.addEventListener("click", openInvitation);

	/* ..............................................
		Musik 
		................................................. */

	// Get audio element and toggle button by their ID
	let audio = document.getElementById('player');
	let toggleButton = document.getElementById('toggle-button');

	// Add event listener to toggle button
	toggleButton.addEventListener('click', function () {
		// If audio is playing, pause it and change the button text to "Play"
		if (!audio.paused) {
			audio.pause();
			toggleButton.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
		}
		// If audio is paused, play it and change the button text to "Pause"
		else {
			audio.play();
			toggleButton.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
		}
	});

	// Menambahkan listener untuk mendeteksi kapan lagu selesai diputar
	audio.addEventListener('ended', function () {
		// Lagu selesai diputar, putar lagu dari awal
		this.currentTime = 0;
		this.play();
	}, false);

	/* ..............................................
		Scrol ke Bawah
		................................................. */
	let interval = null;

	// Fungsi untuk memutar scroll
	function startScroll() {
		interval = setInterval(function () {
			window.scrollBy(0, 1);
		}, 5);
	}

	// Fungsi untuk menghentikan scroll
	function stopScroll() {
		clearInterval(interval);
		interval = null;
	}

	// Fungsi untuk memutar atau menghentikan scroll tergantung pada kondisi saat ini
	function toggleScroll() {
		if (interval) {
			stopScroll();
		} else {
			startScroll();
		}
	}
	// Tambahkan event listener ke tombol
	document.querySelector('#scroll-down-button').addEventListener('click', toggleScroll);

	/* ..............................................
	Navbar Scroll
	................................................. */
	let prevScrollpos = window.pageYOffset;

	// Memeriksa posisi scroll saat ini ketika halaman di-scroll
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.querySelector(".navbar").style.display = "block";
		} else {
			document.querySelector(".navbar").style.display = "none";
		}
		prevScrollpos = currentScrollPos;
	}

	/* ..............................................
	Fixed Menu
	................................................. */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	ResponsiveSlides
	................................................. */

	$(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 500,            // Integer: Speed of the transition, in milliseconds
		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		pager: false,           // Boolean: Show pager, true or false
		nav: false,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: "Previous",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function () { },   // Function: Before callback
		after: function () { }     // Function: After callback
	});

	/* ..............................................
	TimeLine
	................................................. */
	var items = document.querySelectorAll(".timeline li");

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		// Check only top and bottom and consider the case that the post's height is longer than the window height
		return (rect.bottom - 100 > 0 && rect.top + 100 < (window.innerHeight || document.documentElement.clientHeight));
	}

	function callbackFunction() {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				items[i].classList.add("in-view");
			}
		}
	}

	window.addEventListener("load", callbackFunction);
	window.addEventListener("resize", callbackFunction);
	window.addEventListener("scroll", callbackFunction);

	/* ..............................................
		Gift
		................................................. */

	const rekening = document.querySelector("#rekening");
	const rekeningBank = document.querySelector("#rekening-bank");
	const kado = document.querySelector("#kado");
	const kadoContainer = document.querySelector("#kado-container");
	const salin1 = document.querySelector("#salin-1");
	const salin2 = document.querySelector("#salin-2");
	const salin3 = document.querySelector("#salin-3");
	const copy1Button = document.querySelector("#copy1-button");
	const copy2Button = document.querySelector("#copy2-button");
	const copy3Button = document.querySelector("#copy3-button");
	const rekeningBankCloseButton = document.querySelector("#rekening-bank .close button");
	const kadoContainerCloseButton = document.querySelector("#kado-container .close button");

	rekening.addEventListener("click", () => {
		rekeningBank.style.display = "block";
	});

	kado.addEventListener("click", () => {
		kadoContainer.style.display = "block";
	});

	rekeningBankCloseButton.addEventListener("click", () => {
		rekeningBank.style.display = "none";
	});

	kadoContainerCloseButton.addEventListener("click", () => {
		kadoContainer.style.display = "none";
	});

	//Ketika di Refresh maka akan kembali semula
	if (getCookie("rekening-bank") === "hidden") {
		rekeningBank.style.display = "none";
	}
	if (getCookie("kado-container") === "hidden") {
		kadoContainer.style.display = "none";
	}

	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		const expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		const name = cname + "=";
		const decodedCookie = decodeURIComponent(document.cookie);
		const ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	window.addEventListener("beforeunload", function () {
		setCookie("rekening-bank", "hidden", 1);
	});
	window.addEventListener("beforeunload", function () {
		setCookie("kado-container", "hidden", 1);
	});

	//Salin Di Div Span
	copy1Button.addEventListener("click", () => {
		navigator.clipboard.writeText(salin1.innerText).then(function () {
			console.log("Text copied to clipboard");
		}, function (err) {
			console.error("Could not copy text: ", err);
		});
		copy1Button.innerHTML = "Berhasil Disalin"; //notifikasi
		setTimeout(() => {
			copy1Button.innerHTML = "<i class='fa fa-copy' aria-hidden= 'true'></i> Salin Rekening";
		}, 1000); //waktu notifikasi
	});

	//Salin Di Div Span
	copy2Button.addEventListener("click", () => {
		navigator.clipboard.writeText(salin2.innerText).then(function () {
			console.log("Text copied to clipboard");
		}, function (err) {
			console.error("Could not copy text: ", err);
		});
		copy2Button.innerHTML = "Berhasil Disalin"; //notifikasi
		setTimeout(() => {
			copy2Button.innerHTML = "<i class='fa fa-copy' aria-hidden= 'true'></i> Salin Rekening";
		}, 1000); //waktu notifikasi
	});

	//Salin Di Div Span
	copy3Button.addEventListener("click", () => {
		navigator.clipboard.writeText(salin3.innerText).then(function () {
			console.log("Text copied to clipboard");
		}, function (err) {
			console.error("Could not copy text: ", err);
		});
		copy3Button.innerHTML = "Berhasil Disalin"; //notifikasi
		setTimeout(() => {
			copy3Button.innerHTML = "<i class='fa fa-copy' aria-hidden= 'true'></i> Salin Rekening";
		}, 1000); //waktu notifikasi
	});


	/* ..............................................
	Gallery
	................................................. */

	$(document).ready(function () {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by MSN PRODUCTION</small>';
				}
			}
		});
	});

	/* ..............................................
	Smooth Scroll
	................................................. */

	$('a[href*="#"]:not([href="#"])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 65,
				}, 1000);
				return false;
			}
		}
	});

	/* ..............................................
	Countdown Clock
	................................................. */
	function makeTimer() {
		var endTime = new Date("01 June 2019 10:45:00 GMT+01:00");
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<h6>Hari</h6>");
		$("#hours").html(hours + "<h6>Jam</h6>");
		$("#minutes").html(minutes + "<h6>Menit</h6>");
		$("#seconds").html(seconds + "<h6>Detik</h6>");
	}
	setInterval(function () { makeTimer(); }, 1000);


	/* ..............................................
	Animation on Scroll
	................................................. */
	window.addEventListener('load', () => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		})
	});

	/* ..............................................
   Animasi Halaman Buka
................................................. */

	window.onload = function () {
		anime({
			targets: '.home-slider',
			scale: [
				{ value: .1, easing: 'easeOutSine', duration: 500 },
				{ value: 1, easing: 'easeInOutQuad', duration: 1200 }
			],
			delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
		});
	};


}(jQuery));


