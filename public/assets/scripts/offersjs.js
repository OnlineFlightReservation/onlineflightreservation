var offers = setInterval(function () { var e = new Date().toLocaleString("en-US", { timeZone: "America/New_York" }), n = countDownDateoffers.getTime() - new Date(e).getTime(), t = Math.floor(n / 864e5), $ = Math.floor(n % 864e5 / 36e5), o = Math.floor(n % 36e5 / 6e4), r = Math.floor(n % 6e4 / 1e3); t.toString().length < 2 && (t = "0" + t), $.toString().length < 2 && ($ = "0" + $), o.toString().length < 2 && (o = "0" + o), r.toString().length < 2 && (r = "0" + r); try { document.getElementById("eventCountdown").innerHTML = " <b class='event-day'>" + t + "</b> Days <b class='event-hr'>" + $ + "</b> Hrs. <b class='event-min'>" + o + "</b> Min. <b class='event-sec'>" + r + "</b> Sec.", n < 0 && (clearInterval(offers), document.getElementById("eventCountdown").innerHTML = "EXPIRED") } catch (a) { } try { document.getElementById("eventCountdownhome").innerHTML = "<span class='saletext'>SALE ENDS IN</span>: <b>" + t + "</b> Days <b>" + $ + "</b> Hrs. <b>" + o + "</b> Min.<b>" + r + "</b> Sec.", n < 0 && (clearInterval(offers), document.getElementById("eventCountdownhome").innerHTML = "EXPIRED") } catch (b) { } }, 1e3);
