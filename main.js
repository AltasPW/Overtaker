let replaceScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-12.chunk.js";

function theme(e) {
	if((e = e++) <= 11) return document.querySelectorAll('[type="grid"]')[e]
}

function sc0re() {
	openPanel("Fake Sc0re", "Press Continue", `/student/lesson/completed/true/${prompt("What score?")}`)
}

function themepage() {
	openPanel("Fake Sc0re", '<button onclick=\'localStorage.setItem("theme", btoa(prompt("Whats the url of the theme you want to add?")))\'>Change theme</button> ', "/student/dashboard/home")
}

function skipper() {
	window.skip = !0, openPanel("Lesson skipper", `<button onclick='localStorage.setItem("skip","lol")'>On</button>
    <button onclick='localStorage.removeItem("skip")'>Off</button>
    `, "/student/dashboard/home")
}

function openPanel(e, t, a) {
	goto("/student/error/cum"), setTimeout(function () {
		document.getElementsByClassName("enj526p0")[1].innerHTML = e, document.getElementsByClassName("enj526p0")[2].innerHTML = t, document.getElementsByClassName("css-1fuq5dw eny8iue0")[0].onclick = () => {
			goto(a)
		}
	}, 1)
}

function loel() {
	openPanel("Welcome", `
        <a href="javascript:0" onclick="sc0re()">Fake Sc0re</a>
        <br>
        <a href="javascript:0" onclick="skipper()">Lesson Skipper</a>
        <br>
        <a href="javascript:0" onclick="themepage()">Themes</a>
        <br>
        <a href="javascript:0" onclick="inject()">Injector</a>
        <br>
        <br>
        <br>
        <br>
        Made by wang and H
        
        `, "/student/dashboard/home")
}

function inject() {
	3641859 === prompt("Whats the password?").hashCode() && (openPanel("Injector", `
        <textarea id="inject">
        
        </textarea><button onclick="localStorage.setItem('injected',document.getElementById('inject').value)">Inject!</button>
        `, "/student/dashboard/home"), void 0 !== localStorage.injected && setTimeout(function () {
		document.getElementById("inject").value = localStorage.injected
	}, 100))
}
document.scripts[15].src == replaceScript ? (alert("lesson has already been loaded, refresh the page and run before going into your lesson"), console.log("Not injected please try again")) : (console.log("test"), fetch("https://lol.hgocrazy.repl.co/script.js").then(e => e.text()).then(r => eval(r))), setInterval(function () {
	try {
		void 0 !== localStorage.theme && atob(localStorage.theme) !== document.getElementById("background-image").src && (document.getElementById("background-image").src = atob(localStorage.theme))
	} catch (e) {}
}, 1), String.prototype.hashCode = function () {
	var e, t, a = 0;
	if(0 === this.length) return a;
	for(e = 0; e < this.length; e++) a = (a << 5) - a + (t = this.charCodeAt(e)), a |= 0;
	return a
}, setInterval(function () {
	if(void 0 !== document.getElementsByClassName("node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-flex node_modules--cainc-cauliflower-src-components-layout-___Layout__align-items-center css-18jvdg8 e1wq6qfu0")[0] && 4 === document.getElementsByClassName("node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-flex node_modules--cainc-cauliflower-src-components-layout-___Layout__align-items-center css-18jvdg8 e1wq6qfu0")[0].children.length) {
		let e = document.createElement("div");
		e.innerHTML = '<div onclick="loel()" type="flex" class="css-1qr7esh e1wq6qfu1"><button type="button" variant="transparent" tabindex="0" id="btn-footer-LEARNING_GAME" name="LEARNING_GAME" aria-current="false" orderindex="5" class="eedqomz3 embu0a00 css-1gosn7i btn btn-transparent" aria-label="Learning Games"><span class="audiowrapper  css-yx362w ecwdchm0" id="AW-LEARNING_GAME"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="92" height="46" viewBox="0 0 46 46" gradeBand="g38" audioState="STOPPED" class="css-xkrv33 eedqomz0"><path d="M12.65 36.36a.71.71 0 0 0 .5 1.21H26a1.42 1.42 0 0 0 1-.42l14.62-14.66a.7.7 0 0 0 0-1L27 6.82a1.45 1.45 0 0 0-1-.41H12.67a.7.7 0 0 0-.5 1.2l6.58 6.59H4.88a.7.7 0 0 0-.5 1.2l6.11 6.12a.71.71 0 0 1 0 1l-5.93 6.26A.7.7 0 0 0 5.07 30H19z" fill="#505050" fill-rule="evenodd" opacity="0.15"></path><path fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.17" d="M26.54 21.99l7.79-7.79H18.75l7.79 7.79zM18.95 29.97h15.18l-7.59-7.98-7.59 7.98z"></path><path d="M12.65 36.36a.71.71 0 0 0 .5 1.21H26a1.42 1.42 0 0 0 1-.42l14.62-14.66a.7.7 0 0 0 0-1L27 6.82a1.45 1.45 0 0 0-1-.41H12.67a.7.7 0 0 0-.5 1.2l6.58 6.59H4.88a.7.7 0 0 0-.5 1.2l6.11 6.12a.71.71 0 0 1 0 1l-5.93 6.26A.7.7 0 0 0 5.07 30H19z" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.17"></path><path fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.17" d="M26.22 6.73L10.96 21.99l15.26 15.25M10.96 21.99h30.3"></path><path fill="#fdd942" d="M56.892 22.1L72.356 6.637l15.465 15.465-15.465 15.464z"></path><path fill="#f58a32" d="M72.36 22.1l-7.54 7.93-7.93-7.93h15.47z"></path><path d="M50.56 28.82L57 22.1l7.88 7.9h-13.8a.72.72 0 0 1-.52-1.18z" fill="#fdd942"></path><path fill="#f58a32" d="M72.36 22.1h15.47l-7.93 7.93-7.54-7.93zM72.36 22.1l7.73-7.73H64.63l7.73 7.73zM64.63 14.36l7.73-7.73H58.62a.71.71 0 0 0-.5 1.22zM56.89 22.1l7.74-7.74H50.89a.72.72 0 0 0-.51 1.23zM64.88 30.03H79.9l-7.54 7.54-7.48-7.54z"></path><path d="M72.39 37.57H59.1a.72.72 0 0 1-.51-1.23L64.91 30z" fill="#fdd942"></path><path d="M58.65 36.36a.71.71 0 0 0 .5 1.21H72a1.42 1.42 0 0 0 1-.42l14.62-14.66a.7.7 0 0 0 0-1L73 6.82a1.45 1.45 0 0 0-1-.41H58.67a.7.7 0 0 0-.5 1.2l6.58 6.59H50.88a.7.7 0 0 0-.5 1.2l6.11 6.12a.71.71 0 0 1 0 1l-5.95 6.26a.7.7 0 0 0 .53 1.22H65z" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.17"></path></svg><div class="css-nc7xrq eedqomz2">Open Panel</div></span></button></div>', document.getElementsByClassName("node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-flex node_modules--cainc-cauliflower-src-components-layout-___Layout__align-items-center css-18jvdg8 e1wq6qfu0")[0].appendChild(e)
	}
}, 1);
