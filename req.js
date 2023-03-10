const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://programmer-humor.p.rapidapi.com/api/reddit");
xhr.setRequestHeader("X-RapidAPI-Key", "f00c8826b1mshecc03fdb46dc154p16d25djsn8a8b8e58c507");
xhr.setRequestHeader("X-RapidAPI-Host", "programmer-humor.p.rapidapi.com");

xhr.send(data);
