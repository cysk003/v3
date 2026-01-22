//<![CDATA[
/*
 LUNA RADIO PLAYER V5.21.01.28
 https://www.luna-universe.com

 Copyright (C) SODAH | JOERG KRUEGER
 https://www.sodah.de

*/
(function(d, G) {
    "function" === typeof define && define.amd ? define(["jquery"], G) : d.jQuery ? G(d.jQuery) : G(d.Zepto)
})(this, function(d, G) {
    d.fn.lunaradio = function(n) {
        var t = "string" === typeof n,
            I = Array.prototype.slice.call(arguments, 1),
            r = this;
        n = !t && I.length ? d.extend.apply(null, [!0, n].concat(I)) : n;
        if (t && "_" === n.charAt(0)) return r;
        t ? this.each(function() {
            var P = d(this).data("lunaradio"),
                H = P && d.isFunction(P[n]) ? P[n].apply(P, I) : P;
            if (H !== P && H !== G) return r = H, !1
        }) : this.each(function() {
            d(this).data("lunaradio", new d.lunaradio(this,
                n))
        });
        return r
    };
    d.lunaradio = function(n, t) {
        function I(b) {
            c = b;
            w("autoplay: " + oa);
            if (b = "real" == da) b = "safari" == pa.browser.name.toLowerCase() ? !0 : !1, b = b || ba();
            b && (da = "fake");
            try {
                var a = window.localStorage.getItem(c + "volume");
                null !== a && (Ra = parseInt(a))
            } catch (h) {
                w(h)
            }
            E = d("#" + c).width();
            x = d("#" + c).height();
            "small" == fa && 0 == x && (cb = !0, db());
            e("Roboto:400");
            "" != eb && e(eb);
            a = "@keyframes " + c + "pulse { ";
            a = a + "\t0% { \t  fill: rgba(255, 255, 255, 1.0);";
            a = a + "\t} \t50% { \t  fill: rgba(212, 7, 7, 1.0); ";
            a = a + "\t} \t100% { \t\tfill: rgba(255, 255, 255, 1.0); ";
            a += "\t} }";
            d("head").append('<style type="text/css">' + a + "</style>");
            a = window.location.href.toString().toLocaleLowerCase();
            b = Sa(fb).toString();
            "" != fb && -1 != a.indexOf(b) && 4 < b.length || -1 != a.indexOf(Sa("ZFNWW2FiXlNrV2QgXmdgUx9nYFtoV2RlVyBVYV8=").toString()) || (a = Sa("SURBQDkSRkE9N0ATExMSQj43M0U3Ejk3RhIzEkA3SRJGQT03QBJBQCwSWmZmYmUsISFkU1ZbYWJeU2tXZCBeZ2BTH2dgW2hXZGVXIFVhXyFkV1lbZWZXZA=="), gb = 0, document.getElementById(c).innerHTML =
                a);
            gb || (B(), Ta = !0)
        }

        function r(b, a) {
            if (b === G || "" == b.toString()) b = a;
            return b
        }

        function P(b) {
            var a = document.getElementsByTagName("script"),
                h, p;
            for (h = 0; p = a[h]; h++)
                if (p = p.src, 0 <= p.indexOf(b)) var v = p.substring(0, p.indexOf(b));
            return v
        }

        function H() {
            if (!ba()) {
                for (; F.lastElementChild;) F.removeChild(F.lastElementChild);
                F.load()
            }
        }

        function T() {
            if (ba()) Va || (F.src = Ua, F.load());
            else {
                var b = document.createElement("source");
                b.src = Ua;
                F.appendChild(b);
                F.load()
            }
            Va = !0
        }

        function X() {
            F = new Audio;
            F.id = c + "html5audio";
            F.preload =
                "auto";
            "true" == oa && (w("autoplay enabled"), F.autoplay = !0);
            F.addEventListener("timeupdate", function() {
                0 == F.paused && (d("#" + c + "audiopreloader").fadeOut(0), d("#" + c + "smallaudiopreloader").fadeOut(0))
            }, !1);
            F.addEventListener("loadedmetadata", function() {
                w("loadedmetadata")
            }, !1);
            F.addEventListener("ended", function() {
                H();
                T();
                Y && F.play()["catch"](function() {
                    w("error on html5 play")
                });
                w("ended")
            }, !1);
            F.addEventListener("play", function() {
                hb();
                w("play")
            }, !1);
            F.addEventListener("loadstart", function() {
                Y && (d("#" +
                    c + "audiopreloader").fadeIn(0), d("#" + c + "smallaudiopreloader").fadeIn(0));
                w("loadstart")
            }, !1);
            F.addEventListener("waiting", function() {
                d("#" + c + "audiopreloader").fadeIn(0);
                d("#" + c + "smallaudiopreloader").fadeIn(0);
                w("waiting")
            }, !1);
            F.addEventListener("seeked", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                w("seeked")
            }, !1);
            F.addEventListener("canplaythrough", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                d("#" + c + "iconlive, #" +
                    c + "smalliconlive").css({
                    opacity: "1.0"
                });
                w("canplaythrough")
            }, !1);
            F.addEventListener("pause", function() {
                F.currentTime.toFixed(1) < F.duration.toFixed(1) && ib();
                w("pause: currentTime: " + F.currentTime.toFixed(1) + " duration: " + F.duration.toFixed(1))
            }, !1);
            F.addEventListener("error", function(b) {
                w(F.readyState);
                setTimeout(function() {
                    H();
                    T();
                    Y && F.play()["catch"](function() {
                        w("error on html5 play")
                    })
                }, 1E3);
                d("#" + c + "iconlive, #" + c + "smalliconlive").css({
                    opacity: "0"
                })
            }, !0)
        }

        function e(b) {
            var a = document.createElement("link");
            a.type = "text/css";
            a.rel = "stylesheet";
            a.href = "https://fonts.googleapis.com/css?family=" + b;
            document.getElementsByTagName("head")[0].appendChild(a)
        }

        function B() {
            var b = document.getElementById(c);
            b.innerHTML = "";
            d("#" + c).addClass("lunaaudioplayer").css({
                overflow: "hidden",
                display: "block"
            });
            var a = document.createElement("div");
            a.id = c + "containerinside";
            b.appendChild(a);
            d("#" + c + "containerinside").css({
                position: "relative",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                background: ub
            });
            Ua = "true" == vb && "" != Ca ? Ca +
                Wa() : Wa();
            X();
            "big" == fa && wb(a);
            xb(a);
            "big" == fa ? yb(a) : zb(a);
            ba() && (d("#" + c + "buttonvolumeoff, #" + c + "buttonvolumeon, #" + c + "volumegrab, #" + c + "textvolumeend, #" + c + "volumewrapper").css({
                display: "none"
            }), d("#" + c + "smallvolumegrab, #" + c + "smalltextvolume, #" + c + "smalliconvolume").css({
                display: "none"
            }));
            b = "ie" == pa.browser.name.toLowerCase() && 12 > parseInt(pa.browser.version) ? !0 : !1;
            b && d("#" + c + "backgroundimage").css({
                display: "none"
            });
            jb();
            d(window).resize(function() {
                jb(!1)
            });
            va();
            "true" == qa ? (qa = "false", R(ra + "?" +
                Math.floor(99999 * Math.random()), ""), qa = "true") : R(ra, "");
            C();
            setInterval(function() {
                C()
            }, Ab);
            "true" == oa && (Y = !0, Ja())
        }

        function C() {
            switch (sa) {
                case "ownmetadataurl":
                    Q();
                    break;
                case "stream-icy-meta":
                    wa();
                    break;
                default:
                    switch (kb) {
                        case "icecast2":
                            Z();
                            break;
                        case "shoutcast2":
                            Ka();
                            break;
                        case "radionomy":
                            La();
                            break;
                        case "radiojar":
                            Bb();
                            break;
                        case "radioco":
                            Cb()
                    }
            }
        }

        function y(b, a) {
            xa != d("<div/>").html(b).text() && (xa = d("<div/>").html(b).text(), w("New Title: " + xa), d("." + c + "texttitlespan, ." + c + "smalltexttitlespan").html(xa),
                "" == a ? "true" == qa ? (qa = "false", R(ra + "?" + Math.floor(99999 * Math.random()), ""), qa = "true") : K() : R(a, ""), lb(!0))
        }

        function K() {
            if ("" != xa) {
                var b = xa.replace(/ *\([^)]*\) */g, ""),
                    a = b = "https://itunes.apple.com/search?term=" + encodeURIComponent(b) + "&media=music&limit=1&url=" + encodeURIComponent(ha),
                    h = a,
                    p = "GET";
                ba() && (p = "POST", h = ha + "fallback.php", a = b);
                w("ITUNES: " + h);
                d.ajax({
                    dataType: "text",
                    method: p,
                    crossDomain: !0,
                    url: h,
                    data: {
                        url: a
                    },
                    success: function(v) {
                        try {
                            v = JSON.parse(v);
                            var z = "",
                                m = "";
                            1 == v.results.length ? (z = v.results[0].artworkUrl100,
                                z = z.replace("100x100bb", "640x640bb"), w("COVER: " + z), "" != mb && (m = v.results[0].trackViewUrl + "&app=itunes&at=" + mb), R(z, m)) : R(ra, "")
                        } catch (l) {
                            R(ra, "")
                        }
                    },
                    error: function() {
                        R(ra, "")
                    }
                })
            } else R(ra, "")
        }

        function R(b, a) {
            "false" == qa && (ya = a, "" != ya ? d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                cursor: "pointer"
            }) : d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                cursor: "hand"
            }), ta++, 2 < ta && (ta = 1), d("<img/>").attr("src", b).on("load", function() {
                d(this).remove();
                d("#" + c + "backgroundimage" + ta + ", #" + c + "coverwrapper" +
                    ta + ", #" + c + "smallcoverwrapper" + ta).css({
                    background: "url(" + b + ")",
                    opacity: "1.0",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
                1 == ta ? d("#" + c + "coverwrapper2, #" + c + "smallcoverwrapper2").css({
                    opacity: "0.0"
                }) : d("#" + c + "coverwrapper1, #" + c + "smallcoverwrapper1").css({
                    opacity: "0.0"
                })
            }))
        }

        function Q() {
            var b = "GET",
                a = Db,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }

        function wa() {
            var b = Wa();
            d.ajax({
                dataType: "text",
                url: ha + "stream-icy-meta.php",
                method: "POST",
                crossDomain: !0,
                data: {
                    url: b
                },
                success: function(a) {
                    y(a, "")
                },
                error: function(a, h, p) {
                    y("", "")
                }
            })
        }

        function Z() {
            var b = "GET",
                a = ia + "/status-json.xsl",
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    try {
                        v =
                            JSON.parse(v);
                        var z = {};
                        if (v.icestats.source.length === G) z = v.icestats.source;
                        else
                            for (var m = 0; m < v.icestats.source.length; m++) {
                                var l = v.icestats.source[m].listenurl;
                                Ma == l.substr(l.length - Ma.length, Ma.length) && (z = v.icestats.source[m])
                            }
                        m = v = "";
                        z.hasOwnProperty("title") && (m = z.title);
                        z.hasOwnProperty("artist") && (v = z.artist);
                        "" != v && "" != m ? y(v + " - " + m, "") : "" != v ? y(v, "") : y(m, "")
                    } catch (D) {
                        w("Error on JSON File: " + D), y("", "")
                    }
                },
                error: function(v, z, m) {
                    w("Error on JSON File: " + z);
                    y("", "")
                }
            })
        }


if (w.metadatatechnic === "corsproxy") {
        function Ka() {
            var b = "GET",
                a = ia + "/currentsong?sid=" + Eb,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }
		
	} else {	
		
		function Ka() {
            var b = "GET",
                a = ia + "/stats?json=1&sid=" + Eb,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "jsonp",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v.songtitle, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }
        
}
		

        function La() {
            d.ajax({
                dataType: "xml",
                method: "GET",
                crossDomain: !0,
                url: "https://api.radionomy.com/currentsong.cfm?radiouid=" + Fb + "&apikey=" + Gb + "&callmeback=yes&type=xml&cover=yes&previous=yes",
                success: function(b) {
                    try {
                        var a = d(b).find("track").find("artists").text();
                        d(b).find("track").find("title").text() != d(b).find("track").find("artists").text() && (a += " - " + d(b).find("track").find("title").text());
                        var h = d(b).find("track").find("cover").text();
                        y(a, h)
                    } catch (p) {
                        y("", "")
                    }
                },
                error: function(b, a, h) {
                    y("", "")
                }
            })
        }

        function Bb() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://www.radiojar.com/api/stations/" + Hb + "/now_playing/?rand=" + Math.random(),
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        y(a.artist + " - " + a.title, a.thumb)
                    } catch (h) {
                        y("", "")
                    }
                },
                error: function(b,
                    a, h) {
                    y("", "")
                }
            })
        }

        function Cb() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://public.radio.co/stations/" + Ib + "/status",
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        y(a.current_track.title, a.current_track.artwork_url_large)
                    } catch (h) {
                        y("", "")
                    }
                },
                error: function(b, a, h) {
                    y("", "")
                }
            })
        }

        function xb(b) {
            k = document.createElement("canvas");
            k.id = c + "canvas";
            b.appendChild(k);
            d("#" + c + "canvas").css({
                display: "block",
                background: "none",
                position: "absolute",
                top: "0px",
                opacity: Jb
            });
            g = k.getContext("2d")
        }

        function yb(b) {
            var a =
                document.createElement("div");
            a.id = c + "playerwrapper";
            b.appendChild(a);
            d("#" + c + "playerwrapper").css({
                overflow: "hidden",
                display: "block",
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%"
            });
            Kb(a);
            n = document.createElement("div");
            n.id = c + "iconlive";
            a.appendChild(n);
            d("#" + c + "iconlive").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)",
                animation: c + "pulse 2s infinite"
            }).html('<svg class="lunaradioliveicon" x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            "false" == nb && d("#" + c + "iconlive").css({
                display: "none"
            });
            n = document.createElement("div");
            n.id = c + "buttonvolumeoff";
            a.appendChild(n);
            d("#" + c + "buttonvolumeoff").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovolumeofficon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                Xa(0)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "buttonvolumeon";
            a.appendChild(n);
            d("#" + c + "buttonvolumeon").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                Xa(100)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "buttonanalyzer";
            a.appendChild(n);
            d("#" + c + "buttonanalyzer").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovisualizericon" x="0px" y="0px" viewBox="0 0 24 24"><path d="M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                if ("none" != d("#" + c + "buttonshuffle").css("pointer-events")) {
                    ja = parseInt(ja) + 1;
                    9 < ja && (ja = 0);
                    try {
                        window.localStorage.removeItem(c + "visualizer"), window.localStorage.setItem(c + "visualizer", ja)
                    } catch (h) {
                        w(h)
                    }
                    w("changeanalyzer: " + ja)
                }
            }).lunaradiodisableSelection();
            "false" == Lb && d("#" + c + "buttonanalyzer").css({
                display: "none"
            });
            n = document.createElement("span");
            n.classList.add(c + "textradionamespan");
            a.appendChild(n);
            d("." + c + "textradionamespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html(ob);
            n = document.createElement("div");
            n.id = c + "textradioname";
            n.dataset.speed = .5;
            n.dataset.reverse = !0;
            a.appendChild(n);
            d("#" + c + "textradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "font-family": ka,
                color: A
            }).addClass(c + "textradioname").html(d("." + c + "textradionamespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "textradioname").css({
                "text-overflow": "ellipsis"
            });
            n = document.createElement("span");
            n.classList.add(c + "texttitlespan");
            a.appendChild(n);
            d("." + c + "texttitlespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html("");
            n = document.createElement("div");
            n.id = c + "texttitle";
            n.dataset.speed = .9;
            a.appendChild(n);
            d("#" + c + "texttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "font-family": ka,
                color: A
            }).addClass(c + "texttitle").html(d("." + c + "texttitlespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "texttitle").css({
                "text-overflow": "ellipsis"
            });
            n = document.createElement("div");
            n.id = c + "textvolumeend";
            a.appendChild(n);
            d("#" + c + "textvolumeend").css({
                position: "absolute",
                "text-align": "center",
                "font-family": "Roboto",
                color: A
            }).html("100").lunaradiodisableSelection();
            Mb(a);
            Nb(a);
            ba() ? (S = 100, za(100)) : Xa(Ra)
        }

        function lb(b) {
            if ("true" == Da) {
                var a = "";
                "small" == fa && (a = "small");
                b &&
                    d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause());
                d("#" + c + a + "textradioname").width() > d("." + c + a + "textradionamespan").first().width() + 10 ? d("#" + c + a + "textradioname").hasClass(c + "Marquee") && (d("#" + c + a + "textradioname").removeClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").data("lunaradioMarquee").pause()) :
                    d("#" + c + a + "textradioname").hasClass(c + "Marquee") || (d("#" + c + a + "textradioname").addClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").lunaradioMarquee());
                d("#" + c + a + "texttitle").width() > d("." + c + a + "texttitlespan").first().width() + 10 ? d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause()) :
                    d("#" + c + a + "texttitle").hasClass(c + "Marquee") || (d("#" + c + a + "texttitle").addClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").lunaradioMarquee())
            }
        }

        function Nb(b) {
            var a = document.createElement("div");
            a.id = c + "pauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "pauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                pb();
                Y ? Ya() : Ja()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonplay";
            a.appendChild(b);
            d("#" + c + "buttonplay").css({
                position: "absolute",
                top: "9px",
                left: "9px",
                width: "3000%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M15 12L10 15V9"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonpause";
            a.appendChild(b);
            d("#" + c + "buttonpause").css({
                position: "absolute",
                 top: "9px",
                left: "9px",
                width: "3000%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M11 9V15H9V9M15 9V15H13V9"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).fadeOut(0).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "audiopreloader";
            a.appendChild(b);
            d("#" + c + "audiopreloader").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                fill: A
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function wb(b) {
            var a = document.createElement("div");
            a.id = c + "backgroundimage";
            b.appendChild(a);
            d("#" + c + "backgroundimage").css({
                position: "absolute",
                left: "0px !important",
                top: "0px",
                height: "100%",
                width: "100%",
                "-webkit-filter": "blur(40px)",
                filter: "blur(40px)",
                opacity: "1.0"
            })
        }

        function Kb(b) {
            var a = document.createElement("div");
            a.id = c + "coverwrapper";
            b.appendChild(a);
            d("#" + c + "coverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + f(A).r + ", " + f(A).g + ", " +
                    f(A).b + ", 0.1)",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "box-sizing": "border-box"
            }).on("click", function() {
                "" != ya && window.open(ya)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "coverwrapper1";
            a.appendChild(n);
            d("#" + c + "coverwrapper1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            n = document.createElement("div");
            n.id = c + "coverwrapper2";
            a.appendChild(n);
            d("#" + c + "coverwrapper2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            "circle" == Na && (d("#" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                "border-radius": "50%"
            }), d("#" + c + "backgroundimage").css({
                "border-radius": "50%"
            }))
        }

        function Mb(b) {
            var a = document.createElement("div");
            a.id = c + "volumewrapper";
            b.appendChild(a);
            d("#" + c + "volumewrapper").css({
                position: "absolute"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumebackground";
            a.appendChild(b);
            d("#" + c + "volumebackground").css({
                position: "absolute",
                width: "100%",
                background: A
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumefill";
            a.appendChild(b);
            d("#" + c + "volumefill").css({
                position: "absolute",
                width: "0",
                background: u
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumeicon";
            a.appendChild(b);
            d("#" + c + "volumeicon").css({
                position: "absolute",
                top: "0px",
                "border-radius": "50%",
                background: u
            }).lunaradiodisableSelection();
            b = document.createElement("img");
            b.id = c + "volumegrab";
            a.appendChild(b);
            b.src = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D";
            d("#" + c + "volumegrab").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                padding: "0",
                margin: "0"
            }).mouseover(function(h) {
                d(this).css("cursor",
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    la = S
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "volumewrapper").width();
                    S = 100 > la + h ? la + h : 100;
                    0 > la + h && (S = 0);
                    za(S)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(c + "volume"), window.localStorage.setItem(c + "volume", S)
                    } catch (p) {
                        w(p)
                    }
                }
            })
        }

        function zb(b) {
            w("iniSmallPlayer");
            var a = document.createElement("div");
            a.id = c + "smallplayerwrapper";
            b.appendChild(a);
            d("#" + c + "smallplayerwrapper").css({
                overflow: "hidden",
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%"
            });
            b = document.createElement("div");
            b.id = c + "smallvolumebackground";
            a.appendChild(b);
            d("#" + c + "smallvolumebackground").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                background: "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.5)"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconlive";
            a.appendChild(b);
            d("#" + c + "smalliconlive").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html('<svg class="lunaradioliveicon" x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            "false" == nb && d("#" + c + "smalliconlive").css({
                display: "none"
            });
            b = document.createElement("div");
            b.id = c + "smalltextvolume";
            a.appendChild(b);
            d("#" + c + "smalltextvolume").css({
                position: "absolute",
                "text-align": "right",
                "font-family": "Roboto",
                color: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html("100").lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconvolume";
            a.appendChild(b);
            d("#" + c + "smalliconvolume").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').lunaradiodisableSelection();
            b = document.createElement("span");
            b.classList.add(c + "smalltextradionamespan");
            a.appendChild(b);
            d("." + c + "smalltextradionamespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html(ob);
            b = document.createElement("div");
            b.id = c + "smalltextradioname";
            b.dataset.speed = .5;
            b.dataset.reverse = !0;
            a.appendChild(b);
            d("#" + c + "smalltextradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0 0 10px 0",
                "white-space": "nowrap",
                "text-align": "left",
                "font-family": ka,
                color: A
            }).addClass(c +
                "smalltextradioname").html(d("." + c + "smalltextradionamespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "smalltextradioname").css({
                "text-overflow": "ellipsis"
            });
            b = document.createElement("span");
            b.classList.add(c + "smalltexttitlespan");
            a.appendChild(b);
            d("." + c + "smalltexttitlespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html("");
            b = document.createElement("div");
            b.id = c + "smalltexttitle";
            b.dataset.speed = .7;
            a.appendChild(b);
            d("#" + c + "smalltexttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0 0 10px 0",
                "white-space": "nowrap",
                "text-align": "left",
                "font-family": ka,
                color: A
            }).addClass(c + "smalltexttitle").html(d("." + c + "smalltexttitlespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "smalltexttitle").css({
                "text-overflow": "ellipsis"
            });
            b = document.createElement("div");
            b.id = c + "smallvolumegrab";
            a.appendChild(b);
            d("#" + c + "smallvolumegrab").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                padding: "0",
                margin: "0"
            }).mouseover(function(h) {
                d(this).css("cursor",
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    la = S
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "smallvolumegrab").width();
                    S = 100 > la + h ? la + h : 100;
                    0 > la + h && (S = 0);
                    Oa(S)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(c + "volume"), window.localStorage.setItem(c + "volume", S)
                    } catch (p) {
                        w(p)
                    }
                }
            }).lunaradiodisableSelection();
            Ob(a);
            Pb(a);
            ba() ? (S = 100, za(100)) : Qb(Ra)
        }

        function Pb(b) {
            var a = document.createElement("div");
            a.id = c + "smallcoverwrapper";
            b.appendChild(a);
            d("#" + c + "smallcoverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.1)"
            }).on("click", function() {
                "" != ya && window.open(ya)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallcoverwrapper1";
            a.appendChild(b);
            d("#" + c + "smallcoverwrapper1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                overflow: "hidden",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            b = document.createElement("div");
            b.id = c + "smallcoverwrapper2";
            a.appendChild(b);
            d("#" + c + "smallcoverwrapper2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            "circle" == Na && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2").css({
                "border-radius": "50%"
            })
        }

        function Ob(b) {
            var a = document.createElement("div");
            a.id = c + "smallpauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "smallpauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                pb();
                Y ? Ya() : Ja()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallbuttonplay";
            a.appendChild(b);
            d("#" + c + "smallbuttonplay").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallbuttonpause";
            a.appendChild(b);
            d("#" + c + "smallbuttonpause").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).fadeOut(0).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallaudiopreloader";
            a.appendChild(b);
            d("#" + c + "smallaudiopreloader").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                fill: A
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function za(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            ba() || (F.volume = b / 100);
            var a = d("#" + c + "volumewrapper").width() * b / 100;
            d("#" + c + "volumefill").css({
                width: a + "px"
            });
            d("#" + c + "volumeicon").css({
                left: a - d("#" + c + "volumeicon").width() / 2 + "px"
            });
            d("#" + c + "textvolumeend").html(Math.round(b) + "%")
        }

        function Oa(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 == Math.round(b) ? d("#" + c + "smalliconvolume").html('<svg class="lunaradiovolumeofficon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>') :
                d("#" + c + "smalliconvolume").html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>');
            ba() || (F.volume = b / 100);
            d("#" + c + "smalltextvolume").html(Math.round(b) + "%");
            b = d("#" + c + "smallvolumegrab").width() * b / 100;
            d("#" + c + "smallvolumebackground").css({
                width: b + "px"
            });
            k.width = b;
            k.height = x
        }

        function db() {
            E = d("#" + c + "containerinside").width();
            x = d("#" + c + "containerinside").height();
            cb && "small" == fa && (x = 80, 959 > E && (x = 60), 599 > E && (x = 40), d("#" + c).css({
                height: x + "px"
            }))
        }

        function jb() {
            db();
            if ("big" == fa) {
                k.width = E;
                k.height = x;
                var b = 1 * x / 100,
                    a = x / 2 - 20 - b - 4 * b;
                d("#" + c + "coverwrapper").css({
                    border: "solid " + 2 * b + "px rgba(" +
                        f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.2)",
                    top: x / 4 - a / 2 - b + "px",
                    left: E / 2 - a / 2 + "px",
                    width: a + "px",
                    height: a + "px"
                });
                d("#" + c + "backgroundimage").css({
                    "-webkit-filter": "saturate(1.2)",
                    filter: "saturate(1.2)",
                    top: "0px",
                    left: "0px",
 "-webkit-filter": "blur(20px)", 
                filter: "blur(20px)", //efecto blur desenfoque

                    width: "100%",
                    height: "100%"
                });
                a = x / 8;
                var h = a / 2,
                    p = a * qb,
                    v = a - p,
                    z = x / 2 + b,
                    m = z + p + b,
                    l = m + v + 2 * b,
                    D = l + h,
                    aa = (x - (l + h)) / 2 + l + h - a / 1.25,
                    ea = aa + a / 1.25 - h / 2;
                d("#" + c + "textradioname").css({
                    top: z + "px",
                    left: "20px",
                    width: E - 40 + "px",
                    height: p + 2 * b + "px",
                    "font-size": p + "px",
                    "line-height": p + 2 * b + "px"
                });
                d("#" + c + "texttitle").css({
                    top: m + "px",
                    left: "20px",
                    width: E - 40 + "px",
                    height: v + 2 * b + "px",
                    "font-size": v + "px",
                    "line-height": v + 2 * b + "px"
                });
                d("#" + c + "volumewrapper").css({
                    top: l + "px",
                    left: "40px",
                    width: E - 80 + "px",
                    height: h + "px"
                });
                d("#" + c + "volumebackground, #" + c + "volumefill").css({
                    height: h / 4 / 2 + "px",
                    top: h / 2 - h / 4 / 2 + "px",
                    "border-radius": h / 2 / 2 + "px"
                });
                d("#" + c + "volumeicon").css({
                    top: h / 6 + "px",
                    height: h / 2 + "px",
                    width: h / 2 + "px"
                });
                d("#" + c + "buttonvolumeoff").css({
                    top: D + "px",
                    left: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "buttonvolumeon").css({
                    top: D +
                        "px",
                    right: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "textvolumeend").css({
                    top: D + "px",
                    right: h + 40 + "px",
                    width: 2 * h + "px",
                    height: h + "px",
                    "font-size": h / 2 + "px",
                    "line-height": h + "px"
                });
                d("#" + c + "pauseplaywrapper").css({
                    top: aa + "px",
                    left: E / 2 - a / 1.25 + "px",
                    width: 1.5 * a + "px",
                    height: 1.5 * a + "px"
                });
                d("#" + c + "iconlive").css({
                    top: ea + "px",
                    left: E / 2 + a / 1.25 + 20 + "px",
                    height: h + "px",
                    width: h + "px"
                });
                d("#" + c + "buttonanalyzer").css({
                    top: ea + "px",
                    left: E / 2 - a / 1.25 - 20 - h + "px",
                    height: h + "px",
                    width: h + "px"
                });
                za(S)
            } else b = 10 * x / 100, a = (x - 3 * b) * qb,
                h = x - 3 * b - a, d("#" + c + "smalltextradioname").css({
                    top: "0px",
                    left: x + b + "px",
                    width: E - 3 * x - 2 * b + "px",
                    height: a + 2 * b + "px",
                    "font-size": a + "px",
                    "line-height": a + 2 * b + "px"
                }), d("#" + c + "smalltexttitle").css({
                    top: a + b + "px",
                    left: x + b + "px",
                    width: E - 3 * x - 2 * b + "px",
                    height: h + 2 * b + "px",
                    "font-size": h + "px",
                    "line-height": h + 2 * b + "px"
                }), d("#" + c + "smallpauseplaywrapper").css({
                    top: "0px",
                    left: "0px",
                    width: x + "px",
                    height: x + "px"
                }), "circle" == Na ? d("#" + c + "smallcoverwrapper").css({
                    top: b + "px",
                    right: b + "px",
                    width: x - 2 * b + "px",
                    height: x - 2 * b + "px"
                }) : d("#" + c +
                    "smallcoverwrapper").css({
                    top: "0px",
                    right: "0px",
                    width: x + "px",
                    height: x + "px"
                }), d("#" + c + "smallvolumegrab").css({
                    top: "0px",
                    left: x + "px",
                    width: E - 2 * x + "px",
                    height: x + "px"
                }), d("#" + c + "smallvolumebackground").css({
                    left: x + "px",
                    height: x + "px"
                }), d("#" + c + "smalliconlive").css({
                    top: b + "px",
                    right: x + 2 * b + "px",
                    width: x / 2 + "px",
                    height: x / 2 + "px"
                }), d("#" + c + "smalltextvolume").css({
                    overflow: "hidden",
                    bottom: "0px",
                    right: x / 2.5 + x + 2 * b + "px",
                    width: E / 2 + "px",
                    height: x / 2.5 + "px",
                    "font-size": x / 2.5 - 2 * b + "px",
                    "line-height": x / 2.5 + "px"
                }), d("#" + c +
                    "smalliconvolume").css({
                    bottom: "0px",
                    right: x + 2 * b + "px",
                    width: x / 2.5 + "px",
                    height: x / 2.5 + "px",
                    "font-size": x / 2.5 - 2 * b + "px",
                    "line-height": x / 2.5 + "px"
                }), d("#" + c + "canvas").css({
                    left: x + "px"
                }), Oa(S);
            lb(!1)
        }

        function pb() {
            "none" != d("#" + c + "buttonplay").css("pointer-events") && (d("#" + c + "buttonpause").stop(), d("#" + c + "buttonplay").stop(), d("#" + c + "smallbuttonpause").stop(), d("#" + c + "smallbuttonplay").stop())
        }

        function hb() {
            Y = !0;
            d("#" + c + "buttonpause").fadeIn(200, function() {});
            d("#" + c + "buttonplay").fadeOut(200, function() {});
            d("#" + c + "smallbuttonpause").fadeIn(200, function() {});
            d("#" + c + "smallbuttonplay").fadeOut(200, function() {})
        }

        function ib() {
            Y = !1;
            d("#" + c + "buttonpause").fadeOut(200, function() {});
            d("#" + c + "buttonplay").fadeIn(200, function() {});
            d("#" + c + "smallbuttonpause").fadeOut(200, function() {});
            d("#" + c + "smallbuttonplay").fadeIn(200, function() {});
            d("#" + c + "audiopreloader").fadeOut(0);
            d("#" + c + "smallaudiopreloader").fadeOut(0)
        }

        function Ja() {
            w("playmode");
            try {
                d(".lunaaudioplayer").each(function() {
                    d(this).attr("id") != c && d(this).data("lunaradio").pause()
                })
            } catch (b) {
                w(b)
            }
            hb();
            if (!Va)
                if ("undefined" == typeof Aa) {
                    if ("real" == da) {
                        try {
                            Aa = new(window.AudioContext || window.webkitAudioContext), ua = Aa.createAnalyser(), rb = Rb(Aa), ua.smoothingTimeConstant = .9, ua.fftSize = 1024, w("analyzer is created")
                        } catch (b) {
                            w("error" + b), "real" == da && (da = "fake")
                        }
                        try {
                            "crossOrigin" in F ? (w("found crossOrigin"), F.crossOrigin = "anonymous", F.onerror = Sb, sb = F, Za = Aa.createMediaElementSource(sb), Za.connect(ua), Za.connect(rb), ua.connect(Aa.destination), w("analyzer is connected")) : w("no crossOrigin")
                        } catch (b) {
                            w("error" +
                                b)
                        }
                    }
                } else w("analyzer_audioContext is not undefined");
            T();
            ba() ? (F.muted = !1, F.play()) : F.play()["catch"](function() {
                w("error on html5 play")
            })
        }

        function Ya() {
            ib();
            if (ba()) F.muted = !0;
            else try {
                F.pause(), H()
            } catch (b) {}
        }

        function Rb(b) {
            var a = b.createScriptProcessor(512);
            a.onaudioprocess = Tb;
            a.averaging = .98;
            a.connect(b.destination);
            return a
        }

        function Tb(b) {
            var a = b.inputBuffer.getChannelData(0);
            b = b.inputBuffer.getChannelData(1);
            for (var h = a.length, p = b.length, v = 0, z, m = 0; m < h; m++) z = a[m], v += z * z;
            a = Math.sqrt(v / h);
            Ea =
                Math.max(a, Ea * this.averaging);
            for (m = v = 0; m < p; m++) z = b[m], v += z * z;
            a = Math.sqrt(v / p);
            Fa = Math.max(a, Fa * this.averaging)
        }

        function Sb(b) {
            b.target ? w("server not set correctly") : w("browser doesn't support crossOrigin requests")
        }

        function va() {
            if ("fake" == da || "real" == da) {
                try {
                    window.requestAnimationFrame(va) || window.mozRequestAnimationFrame(va) || window.webkitRequestAnimationFrame(va) || window.msRequestAnimationFrame(va) || window.oRequestAnimationFrame(va)
                } catch (tb) {}
                if ("fake" == da) {
                    q = [];
                    for (var b = 0; 511 > b; b += 1) Y ? q.push(Math.floor(254 /
                        (b / 100 + 1) * Math.random() + 1)) : q.push(0), Ga[b] += (q[b] - Ga[b]) / 9;
                    q = Ga
                }
                try {
                    "real" == da && (q = new Uint8Array(ua.frequencyBinCount), ua.getByteFrequencyData(q))
                } catch (tb) {}
                "animated" == Na && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2, #" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                    "border-top-left-radius": 50 - 50 * Ea + "%",
                    "border-top-right-radius": 50 - 50 * Fa + "%",
                    "border-bottom-left-radius": 50 - 50 * Ea + "%",
                    "border-bottom-right-radius": 50 - 50 * Fa + "%"
                });
                try {
                    switch (ja) {
                        case 0:
                            g.clearRect(0,
                                0, k.width, k.height);
                            break;
                        case 1:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.miterLimit = 1;
                            g.closePath();
                            g.beginPath();
                            for (var a = 0; a < q.length / 2; a += 1) g.lineTo(a * k.width / q.length * 2, k.height - q[a] * k.height / 255 + 2);
                            if ("true" == W) {
                                var h = g.createLinearGradient(0, 0, k.width, 0);
                                h.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                h.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                h.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                h.addColorStop(1,
                                    "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = h
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 2:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 1;
                            g.miterLimit = 1;
                            g.beginPath();
                            for (a = 0; a < q.length / 2; a += 1) g.lineTo(a * k.width / q.length * 2, k.height - q[a] * k.height / 255 + 2);
                            g.lineTo(k.width, k.height);
                            g.lineTo(0, k.height);
                            g.closePath();
                            if ("true" == W) {
                                var p = g.createLinearGradient(0, 0, k.width, 0);
                                p.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                p.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                p.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                p.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.fillStyle = p
                            } else g.fillStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.fill();
                            break;
                        case 3:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            for (a = 0; a < k.width; a += 6) {
                                var v = Math.round(q.length / 2 * a / k.width);
                                g.moveTo(a, k.height);
                                g.lineTo(a,
                                    k.height - q[v] * k.height / 255 + 2)
                            }
                            if ("true" == W) {
                                var z = g.createLinearGradient(0, 0, k.width, 0);
                                z.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                z.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                z.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                z.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = z
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 4:
                            g.clearRect(0,
                                0, k.width, k.height);
                            g.lineWidth = 0;
                            g.miterLimit = 1;
                            a = [];
                            g.beginPath();
                            g.moveTo(0, k.height);
                            for (var m = 0; m < E + 20; m += 20) {
                                var l = Math.round(q.length / 8 * m / E);
                                a.push(m);
                                a.push(k.height - q[l] * k.height / 255 + 2)
                            }
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.20)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height -
                                q[l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.40)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height - q[l + l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.80)" : "rgba(" + f(u).r + ", " +
                                f(u).g + ", " + f(u).b + ", 0.60)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height - q[l + l + l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.80)";
                            g.fill();
                            g.closePath();
                            break;
                        case 5:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 3;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" ==
                                W ? "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.2)";
                            a = [];
                            g.beginPath();
                            g.moveTo(0, k.height);
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.4)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m =
                                Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.6)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit =
                                1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.8)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m + m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            break;
                        case 6:
                            var D = k.height;
                            a = D / 2;
                            "big" == fa && (a = x / 2 + x / 8 + 1 * x / 100 * 4 + x / 32, D = 2 * (k.height - a));
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            for (l = 0; l < k.width; l += 6) {
                                var aa =
                                    Math.round(q.length / 2 * l / k.width);
                                g.moveTo(l, a);
                                g.lineTo(l, a - q[aa] * D / 2 / 255);
                                g.moveTo(l, a);
                                g.lineTo(l, a + q[aa] * D / 2 / 255)
                            }
                            for (l = 3; l < k.width; l += 6) aa = Math.round(q.length / 2 * l / k.width), g.moveTo(l, a), g.lineTo(l, a - q[aa] * D / 4 / 255), g.moveTo(l, a), g.lineTo(l, a + q[aa] * D / 4 / 255);
                            if ("true" == W) {
                                var ea = g.createLinearGradient(0, 0, k.width, 0);
                                ea.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                ea.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                ea.addColorStop(.66 + q[20] / 1E3, "rgba(" +
                                    f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                ea.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = ea
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 7:
                            g.clearRect(0, 0, k.width, k.height);
                            Ha++;
                            if ("true" == W)
                                for (var J = 0; J < q.length / 2; J++) g.beginPath(), g.arc(Math.cos(Ha / V[J].speed) * V[J].radius + V[J].x, Math.sin(Ha / V[J].speed) * V[J].radius + V[J].y, V[J].radius * q[J] / 255, 0, 2 * Math.PI), g.closePath(), g.fillStyle = 0 == J % 2 ? "rgba(" + f(L).r + ", " + f(L).g + ", " +
                                    f(L).b + ", 0.2)" : 0 == J % 3 ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.2)" : 0 == J % 5 ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.2)" : "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.2)", g.fill();
                            else
                                for (J = 0; J < q.length / 2; J++) g.beginPath(), g.arc(Math.cos(Ha / V[J].speed) * V[J].radius + V[J].x, Math.sin(Ha / V[J].speed) * V[J].radius + V[J].y, V[J].radius * q[J] / 255, 0, 2 * Math.PI), g.closePath(), g.fillStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.2)", g.fill();
                            break;
                        case 8:
                            g.clearRect(0, 0, k.width, k.height);
                            var Ia = k.height / 2,
                                U = k.height / 2;
                            a = 0;
                            "big" == fa && (U = x / 2 + x / 8 + 1 * x / 100 * 4 + x / 32 - x / 8 / 2 / 4 / 2 / 2, Ia = x / 32, a = 40);
                            g.lineWidth = 4;
                            g.lineJoin = "round";
                            g.beginPath();
                            var Pa = Math.round(200 * Ea * (k.width - 40) / 100);
                            for (l = a; l < Pa; l += 6) g.moveTo(l, U), g.lineTo(l, U - Ia);
                            var Qa = Math.round(200 * Fa * (k.width - 40) / 100);
                            for (l = a; l < Qa; l += 6) g.moveTo(l, U), g.lineTo(l, U + Ia);
                            if ("true" == W) {
                                var na = g.createLinearGradient(0, 0, k.width, 0);
                                na.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                na.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b +
                                    ", 0.99)");
                                na.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                na.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = na
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 9:
                            g.clearRect(0, 0, k.width, k.height);
                            D = m = l = 0;
                            g.clearRect(0, 0, k.width, k.height);
                            g.miterLimit = 1;
                            for (m = 0; 10 > m; m += 1) {
                                g.beginPath();
                                g.lineWidth = 2 - m / 10;
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length /
                                    1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length / 1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length / 1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D + D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length /
                                    1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D + D + D] * k.height / 255 + 2 + 5 * m);
                                "true" == W ? (a = g.createLinearGradient(0, 0, k.width, 0), a.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", " + m / 10 + ")"), a.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", " + m / 10 + ")"), a.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", " + m / 10 + ")"), a.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", " + m / 10 + ")"), g.strokeStyle = a) : g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " +
                                    f(u).b + ", " + m / 10 + ")";
                                g.stroke()
                            }
                            break;
                        default:
                            g.clearRect(0, 0, k.width, k.height)
                    }
                } catch (tb) {}
            }
        }

        function ma(b, a, h, p, v, z) {
            b.beginPath();
            var m = p;
            h = "undefined" != typeof h ? h : .5;
            m = m ? m : !1;
            v = v ? v : 16;
            var l = [],
                D;
            p = a.slice(0);
            m ? (p.unshift(a[a.length - 1]), p.unshift(a[a.length - 2]), p.unshift(a[a.length - 1]), p.unshift(a[a.length - 2]), p.push(a[0]), p.push(a[1])) : (p.unshift(a[1]), p.unshift(a[0]), p.push(a[a.length - 2]), p.push(a[a.length - 1]));
            for (D = 2; D < p.length - 4; D += 2)
                for (m = 0; m <= v; m++) {
                    var aa = (p[D + 2] - p[D - 2]) * h;
                    var ea = (p[D +
                        4] - p[D]) * h;
                    var J = (p[D + 3] - p[D - 1]) * h;
                    var Ia = (p[D + 5] - p[D + 1]) * h;
                    var U = m / v;
                    var Pa = 2 * Math.pow(U, 3) - 3 * Math.pow(U, 2) + 1;
                    var Qa = -(2 * Math.pow(U, 3)) + 3 * Math.pow(U, 2);
                    var na = Math.pow(U, 3) - 2 * Math.pow(U, 2) + U;
                    U = Math.pow(U, 3) - Math.pow(U, 2);
                    aa = Pa * p[D] + Qa * p[D + 2] + na * aa + U * ea;
                    J = Pa * p[D + 1] + Qa * p[D + 3] + na * J + U * Ia;
                    l.push(aa);
                    l.push(J)
                }
            b.moveTo(l[0], l[1]);
            for (ca = 2; ca < l.length - 1; ca += 2) b.lineTo(l[ca], l[ca + 1]);
            if (z)
                for (b.beginPath(), z = 0; z < a.length - 1; z += 2) b.rect(a[z] - 2, a[z + 1] - 2, 4, 4)
        }

        function Xa(b) {
            d({
                countNum: S
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    S = this.countNum;
                    za(this.countNum)
                },
                complete: function() {
                    S = b;
                    za(b)
                }
            })
        }

        function Qb(b) {
            d({
                countNum: S
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    S = this.countNum;
                    Oa(this.countNum)
                },
                complete: function() {
                    S = b;
                    Oa(b)
                }
            })
        }

        function Wa() {
            switch (kb) {
                case "icecast2":
                    var b = ia + Ma;
                    break;
                case "shoutcast2":
                    b = ia + Ub;
                    break;
                case "radionomy":
                    b = ia;
                    break;
                case "radiojar":
                    b = ia;
                    break;
                case "radioco":
                    b = ia;
                    break;
                default:
                    "#" == $a && ($a = ""), b = ia + $a
            }
            return b
        }

        function ba() {
            return "ios" == pa.os.name.toLowerCase() ? !0 : !1
        }

        function Sa(b) {
            b = ab.decode(b);
            var a = 0,
                h = "";
            do h += String.fromCharCode(b.charCodeAt(a++) - -14); while (a < b.length);
            return h
        }

        function w(b) {
            if ("true" == Vb) {
                var a = new Date;
                b = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ": " + b;
                window.console && console.log(b);
                0 < d("#debug").length && d("#debug").html(d("#debug").html() + "<br>" + b)
            }
        }

        function f(b) {
            return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3],
                    16)
            } : null
        }
        var bb = n.id;
        if (arguments.length) {
            this.element = d(n);
            this.options = d.extend(!0, {}, this.options, t);
            var Wb = this;
            this.element.bind("remove.lunaradio", function() {
                Wb.destroy()
            })
        }
        for (var fb = r(t.token, ""), fa = r(t.userinterface, "small").toString().toLowerCase(), ub = r(t.backgroundcolor, "rgba(0,0,0,0)"), A = r(t.fontcolor, "#ffffff"), u = r(t.hightlightcolor, "#f86808"), ka = r(t.fontname, ""), eb = r(t.googlefont, ""), qb = r(t.fontratio, "0.4"), ob = r(t.radioname, ""), Da = r(t.scroll, "true").toString().toLowerCase(), ra = r(t.coverimage,
                    "data:image/png;base64,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vLTMrbQDXfGvqd9k+YH8visDXlcU4o4r/6x7JzTkkuvkSVFsSmgK5XNTpKQnFlC2N3o3WyjeTLFvM4UXL148unjx4m+UFo6Nj483TU5O/U4qlVLq6+v64vGysd7e3ocvXLiwc2oqtaCxceEJIcQPSovfCoWCOjExEfVOFuPxeNa27QJd6fFd2kIgvMCtrKycqK2tHZqammo0TTNhmmapWguzbVvP5XKGN/KOxWLpcDh80xao0WiU+VPsgt5yIeSGmH9yK/e4d3V1naisrDzd39+/+fDhw5/o7Ox8MplMdq1cuXK/9/0jR44wHwId4D71QAS6p6Wl5eT58+f/IBqN/smpU6d25HK58Lsx5T73mjnNud7p3bZ3UlFWU3Vp+/btXph/7m70d2ZN206Inlc/5Tr2n5sj557QrAlF1xipcsUbJ43z2fDl/tY0j8sUKk3K89lFbsVr6oIxv8jM1RT/xIAzfwucN6pnKrmuVVwZr2sUUhSyBSfbNYkJhcrDIdLZ/Ivn3A3f//7/+Hevvfbqr4dCYb558+b/5o3WvZHu8eNndvT29j7qvVaPPPLYT+JxYzyX48s7Os7+YldX9+P19XVnNI1zIcT3iCi+f//+D2YymTrvdW1oaDi6ePHicSGEduDAgV9tb2//gK7r5tq1a39ARN+qrq4eWbx48f7h4eGPdXV1PdXX17dJCPFSLpcr7+3t3Z3JZFoURRFLliw5W1VVNXiTu89Kl3FUVZ336nN/ul/4I3RqbW0939jYeKavr+89XqDn8/nkhg0b/o4xJmcONE1j/tZKrHAHuE89MIHuWb58eRvn/E9c1/39jo6O3V6oM+XuPgWlAL/2+rk3oorHogM7duz48tNPP/0389uadocWP3WsQon84VTbD//jTN8buww7rWmKTarryFXq3pirWK1dI854cWU7K/0dJ1Wwq8K72MCFz9Z3J79pS7HJy5xtbuR6RydVN0gVxUsMtmuTomikq4wEE2R6g1gnzykWvWehXldX311dXW329vateP311z89NDTwlOOI/KVLI+symVRFZWXF5GOPrflWPB4f80be9fWNp7q7ezYNDg6teeGFFz7T1tb2K67r6n19fVtt29aqq6snN27c+O1wODxERKGhoaFHjh8//mwkErEqKyvlWoFkMtn3yCOP/KCrq+t9PT09S59//vkvHj58uD2dTsdH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d5NfHveNMi30l6F4ZW5mpHd7wTYVjTFSFMYUwa+MrnmxKCxniiDGBXHlSlAzflVoKyxMUaNcZcm6forFfv52BAAA3EcwzXmH8vn8onA4PHS/VoC7W8T4+SaaGV9Bmnv1e8e9zpS5Omf1unO9leze+WSYKLmgj8pr+x605xIAAAAAAOAqWFwMAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAAh0AACAAECgAwAABAACHQAAIAAQ6AAAAAGAQAcAAAgABDoAAEAAINABAAACAIEOAAAQAP9/AAAA//+kR8lr2Pa/DwAAAABJRU5ErkJggg=="),
                qa = r(t.onlycoverimage, "false").toString().toLowerCase(), Na = r(t.coverstyle, "circle").toString().toLowerCase(), da = r(t.usevisualizer, "fake").toString().toLowerCase(), ja = parseInt(r(t.visualizertype, 4)), mb = r(t.itunestoken, ""), sa = r(t.metadatatechnic, "php").toString().toLowerCase(), Db = r(t.ownmetadataurl, ""), Ca = r(t.corsproxy, ""), vb = r(t.usestreamcorsproxy, "false").toString().toLowerCase(), ia = r(t.streamurl, ""), kb = r(t.streamtype, "other").toString().toLowerCase(), Ma = r(t.icecastmountpoint, ""), Fb = r(t.radionomyid,
                    ""), Gb = r(t.radionomyapikey, ""), Hb = r(t.radiojarid, ""), Ib = r(t.radiocoid, ""), Ub = r(t.shoutcastpath, ""), Eb = r(t.shoutcastid, ""), $a = r(t.streamsuffix, "/;type=mp3"), Ab = parseInt(r(t.metadatainterval, 2E4)), Ra = parseInt(r(t.volume, 90)), Vb = r(t.debug, "false").toString().toLowerCase(), oa = r(t.autoplay, "false").toString().toLowerCase(), nb = r(t.displayliveicon, "true").toString().toLowerCase(), Lb = r(t.displayvisualizericon, "true").toString().toLowerCase(), W = r(t.multicolorvisualizer, "false").toString().toLowerCase(), L =
                r(t.color1, "#e66c35").toString().toLowerCase(), M = r(t.color2, "#d04345").toString().toLowerCase(), N = r(t.color3, "#85a752").toString().toLowerCase(), O = r(t.color4, "#067dcc").toString().toLowerCase(), Jb = r(t.visualizeropacity, "0.4"), c, x = 0, E = 0, xa = "", S = 0, la = 0, Y = !1, gb = !1, sb, Aa, k, ua, rb, Ea = 0, Fa = 0, g, Za, F, Ua, q = [], V = [], Ha = 0, Ga = [], ta = 0, Va = !1, pa = (new LUNARADIOParser).getResult(), Ta = !1, ya = "", ca = 0; 511 > ca; ca += 1) Ga.push(Math.floor(254 / (ca / 100 + 1) * Math.random() + 1));
        V = [];
        for (ca = 0; 512 > ca; ca++) {
            var Ba = {};
            Ba.x = Math.floor(1920 *
                Math.random() + 1);
            Ba.y = Math.floor(1080 * Math.random() + 1);
            Ba.radius = Math.floor(1080 * Math.random() / 5 + 2);
            Ba.alpha = 1;
            Ba.speed = Math.floor(50 * Math.random() + 30);
            V.push(Ba)
        }
        var ha = "",
            cb = !1;
        d(document).ready(function() {
            ha = P("lunaradio.min.js");
            w("SCRIPT FOLDER: " + ha);
            w("USERAGENT: " + navigator.userAgent);
            w("BROWSER: " + pa.browser.name);
            w("OS: " + pa.os.name);
            w("usevisualizer: " + da);
            w("visualizertype: " + ja);
            var b = "mobile" == pa.device.type ? !0 : !1;
            w("ismobile: " + b);
            if ("true" == oa) {
                oa = "false";
                try {
                    var a = new Audio;
                    a.autoplay = !0;
                    a.addEventListener("error", function(h) {
                        w(a.readyState)
                    });
                    a.addEventListener("loadedmetadata", function() {
                        w("checkaudio loadedmetadata")
                    }, !1);
                    a.addEventListener("ended", function() {
                        w("checkaudio ended")
                    }, !1);
                    a.addEventListener("play", function() {
                        w("checkaudio play");
                        w("autoplay is allowed by browser");
                        oa = "true"
                    }, !1);
                    a.addEventListener("loadstart", function() {
                        w("checkaudio loadstart")
                    }, !1);
                    a.addEventListener("waiting", function() {
                        w("checkaudio waiting")
                    }, !1);
                    a.addEventListener("seeked", function() {
                            w("checkaudio seeked")
                        },
                        !1);
                    a.addEventListener("canplaythrough", function() {
                        w("checkaudio canplaythrough");
                        I(bb)
                    }, !1);
                    a.addEventListener("pause", function() {
                        w("checkaudio pause")
                    }, !1);
                    a.src = "data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
                } catch (h) {
                    w("autoplay is not allowed by browser"),
                        w(h), oa = "false", I(bb)
                }
            } else I(bb)
        });
        var Xb = function(b) {
            if ("function" === typeof Promise) return new Promise(b);
            this._handler = b;
            this.then = function(a, h) {
                this._handler(a, h)
            };
            return this
        };
        this.Promise = function(b) {
            return new Xb(b)
        };
        var ab = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(b) {
                var a = "",
                    h = 0;
                for (b = ab._utf8_encode(b); h < b.length;) {
                    var p = b.charCodeAt(h++);
                    var v = b.charCodeAt(h++);
                    var z = b.charCodeAt(h++);
                    var m = p >> 2;
                    p = (p & 3) << 4 | v >> 4;
                    var l = (v & 15) << 2 | z >> 6;
                    var D =
                        z & 63;
                    isNaN(v) ? l = D = 64 : isNaN(z) && (D = 64);
                    a = a + this._keyStr.charAt(m) + this._keyStr.charAt(p) + this._keyStr.charAt(l) + this._keyStr.charAt(D)
                }
                return a
            },
            decode: function(b) {
                var a = "",
                    h = 0;
                for (b = b.replace(/[^A-Za-z0-9\+\/=]/g, ""); h < b.length;) {
                    var p = this._keyStr.indexOf(b.charAt(h++));
                    var v = this._keyStr.indexOf(b.charAt(h++));
                    var z = this._keyStr.indexOf(b.charAt(h++));
                    var m = this._keyStr.indexOf(b.charAt(h++));
                    p = p << 2 | v >> 4;
                    v = (v & 15) << 4 | z >> 2;
                    var l = (z & 3) << 6 | m;
                    a += String.fromCharCode(p);
                    64 != z && (a += String.fromCharCode(v));
                    64 != m && (a += String.fromCharCode(l))
                }
                return a = ab._utf8_decode(a)
            },
            _utf8_encode: function(b) {
                b = b.replace(/\r\n/g, "\n");
                for (var a = "", h = 0; h < b.length; h++) {
                    var p = b.charCodeAt(h);
                    128 > p ? a += String.fromCharCode(p) : (127 < p && 2048 > p ? a += String.fromCharCode(p >> 6 | 192) : (a += String.fromCharCode(p >> 12 | 224), a += String.fromCharCode(p >> 6 & 63 | 128)), a += String.fromCharCode(p & 63 | 128))
                }
                return a
            },
            _utf8_decode: function(b) {
                for (var a = "", h = 0, p, v, z; h < b.length;) z = b.charCodeAt(h), 128 > z ? (a += String.fromCharCode(z), h++) : 191 < z && 224 > z ? (p = b.charCodeAt(h +
                    1), a += String.fromCharCode((z & 31) << 6 | p & 63), h += 2) : (p = b.charCodeAt(h + 1), v = b.charCodeAt(h + 2), a += String.fromCharCode((z & 15) << 12 | (p & 63) << 6 | v & 63), h += 3);
                return a
            }
        };
        jQuery.fn.extend({
            lunaradiodisableSelection: function() {
                this.each(function() {
                    this.onselectstart = function() {
                        return !1
                    };
                    this.onmousedown = function(b) {
                        return !1
                    };
                    this.unselectable = "on";
                    jQuery(this).css("-moz-user-select", "none");
                    jQuery(this).css("-webkit-user-select", "none");
                    jQuery(this).css("-webkit-touch-callout", "none");
                    jQuery(this).css("-khtml-user-select",
                        "none");
                    jQuery(this).css("-ms-user-select", "none");
                    jQuery(this).css("user-select", "none");
                    jQuery(this).css("tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-o-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-moz-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)")
                })
            }
        });
        this.play = function() {
            Ta && (w("API CALL: play"), Y || (Y = !0, Ja()))
        };
        this.pause = function() {
            Ta && (w("API CALL: pause"), Y && (Y = !1, Ya()))
        }
    }
});
(function(d, G) {
    var n = {
            extend: function(e, B) {
                var C = {},
                    y;
                for (y in e) C[y] = B[y] && 0 === B[y].length % 2 ? B[y].concat(e[y]) : e[y];
                return C
            },
            has: function(e, B) {
                return "string" === typeof e ? -1 !== B.toLowerCase().indexOf(e.toLowerCase()) : !1
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },

            major: function(e) {
                return "string" === typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : G
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        t = function(e, B) {
            for (var C = 0, y, K, R, Q, wa, Z; C < B.length && !wa;) {
                var Ka = B[C],
                    La =
                    B[C + 1];
                for (y = K = 0; y < Ka.length && !wa;)
                    if (wa = Ka[y++].exec(e))
                        for (R = 0; R < La.length; R++) Z = wa[++K], Q = La[R], "object" === typeof Q && 0 < Q.length ? 2 == Q.length ? this[Q[0]] = "function" == typeof Q[1] ? Q[1].call(this, Z) : Q[1] : 3 == Q.length ? this[Q[0]] = "function" !== typeof Q[1] || Q[1].exec && Q[1].test ? Z ? Z.replace(Q[1], Q[2]) : G : Z ? Q[1].call(this, Z, Q[2]) : G : 4 == Q.length && (this[Q[0]] = Z ? Q[3].call(this, Z.replace(Q[1], Q[2])) : G) : this[Q] = Z ? Z : G;
                C += 2
            }
        },
        I = function(e, B) {
            for (var C in B)
                if ("object" === typeof B[C] && 0 < B[C].length)
                    for (var y = 0; y < B[C].length; y++) {
                        if (n.has(B[C][y],
                                e)) return "?" === C ? G : C
                    } else if (n.has(B[C], e)) return "?" === C ? G : C;
            return e
        },
        r = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2E3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        P = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                ["name", "version"],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    ["name", "Opera Mini"], "version"
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    ["name",
                        "Opera"
                    ], "version"
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                ["name", "version"],
                [/(konqueror)\/([\w\.]+)/i],
                [
                    ["name", "Konqueror"], "version"
                ],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    ["name", "IE"], "version"
                ],
                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                [
                    ["name", "Edge"], "version"
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    ["name", "Yandex"], "version"
                ],
                [/(Avast)\/([\w\.]+)/i],
                [
                    ["name", "Avast Secure Browser"], "version"
                ],
                [/(AVG)\/([\w\.]+)/i],
                [
                    ["name", "AVG Secure Browser"], "version"
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    ["name", "Puffin"], "version"
                ],
                [/(focus)\/([\w\.]+)/i],
                [
                    ["name", "Firefox Focus"], "version"
                ],
                [/(opt)\/([\w\.]+)/i],
                [
                    ["name", "Opera Touch"], "version"
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    ["name", "UCBrowser"], "version"
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    ["name", /_/g, " "], "version"
                ],
                [/(windowswechat qbcore)\/([\w\.]+)/i],
                [
                    ["name", "WeChat(Win) Desktop"], "version"
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    ["name", "WeChat"], "version"
                ],
                [/(brave)\/([\w\.]+)/i],
                [
                    ["name", "Brave"], "version"
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                ["name", "version"],
                [/(QQ)\/([\d\.]+)/i],
                ["name", "version"],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                ["name"],
                [/(LBBROWSER)/i],
                ["name"],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                ["version", ["name", "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                ["version", ["name", "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                ["name", "version"],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                ["version", ["name", "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    ["name", /(.+)/, "$1 WebView"], "version"
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    ["name", /(.+(?:g|us))(.+)/,
                        "$1 $2"
                    ], "version"
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                ["version", ["name", "Android Browser"]],
                [/(sailfishbrowser)\/([\w\.]+)/i],
                [
                    ["name", "Sailfish Browser"], "version"
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                ["name", "version"],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    ["name", "Dolphin"], "version"
                ],
                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                [
                    ["name", "360 Browser"]
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    ["name", "Chrome"], "version"
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    ["name", "Opera Coast"], "version"
                ],
                [/fxios\/([\w\.-]+)/i],
                ["version", ["name", "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                ["version", ["name", "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                ["version", "name"],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    ["name", "GSA"], "version"
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                ["name", ["version", I, {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                ["name", "version"],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    ["name", "Netscape"], "version"
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i
                ],
                ["name", "version"]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", n.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", n.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", n.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                ["model", "vendor", ["type", "tablet"]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                ["model", ["vendor", "Apple"],
                    ["type", "tablet"]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    ["model", "Apple TV"],
                    ["vendor", "Apple"],
                    ["type", "smarttv"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                ["vendor", "model", ["type", "tablet"]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    ["model", I, {
                        "Fire Phone": ["SD", "KF"]
                    }],
                    ["vendor", "Amazon"],
                    ["type", "mobile"]
                ],
                [/android.+aft([bms])\sbuild/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "smarttv"]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                ["model", "vendor", ["type", "mobile"]],
                [/\((ip[honed|\s\w*]+);/i],
                ["model", ["vendor", "Apple"],
                    ["type", "mobile"]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i
                ],
                ["vendor", "model", ["type", "mobile"]],
                [/\(bb10;\s(\w+)/i],
                ["model", ["vendor", "BlackBerry"],
                    ["type", "mobile"]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                ["model", ["vendor", "Asus"],
                    ["type", "tablet"]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    ["vendor", "Sony"],
                    ["model", "Xperia Tablet"],
                    ["type", "tablet"]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                ["model", ["vendor",
                        "Sony"
                    ],
                    ["type", "mobile"]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                ["vendor", "model", ["type", "console"]],
                [/android.+;\s(shield)\sbuild/i],
                ["model", ["vendor", "Nvidia"],
                    ["type", "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                ["model", ["vendor", "Sony"],
                    ["type", "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    ["vendor", I, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }],
                    ["model", I, {
                        "Evo Shift 4G": "7373KT"
                    }],
                    ["type", "mobile"]
                ],
                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                ["vendor", ["model", /_/g, " "],
                    ["type", "mobile"]
                ],
                [/(nexus\s9)/i],
                ["model", ["vendor", "HTC"],
                    ["type", "tablet"]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "mobile"]
                ],
                [/android.+(bah2?-a?[lw]\d{2})/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "tablet"]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                ["model", ["vendor", "Microsoft"],
                    ["type", "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    ["model", /\./g,
                        " "
                    ],
                    ["vendor", "Microsoft"],
                    ["type", "mobile"]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                ["model", ["vendor", "Motorola"],
                    ["type", "mobile"]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                ["model", ["vendor", "Motorola"],
                    ["type", "tablet"]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    ["vendor", n.trim],
                    ["model", n.trim],
                    ["type", "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    ["model", /^/, "SmartTV"],
                    ["vendor",
                        "Samsung"
                    ],
                    ["type", "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                ["model", ["vendor", "Sharp"],
                    ["type", "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "tablet"]
                ],
                [/smart-tv.+(samsung)/i],
                ["vendor", ["type", "smarttv"], "model"],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "mobile"]
                ],
                [/sie-(\w*)/i],
                ["model", ["vendor",
                        "Siemens"
                    ],
                    ["type", "mobile"]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    ["vendor", "Nokia"], "model", ["type", "mobile"]
                ],
                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                ["model", ["vendor", "Acer"],
                    ["type", "tablet"]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                ["model", ["vendor", "LG"],
                    ["type", "tablet"]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    ["vendor", "LG"], "model", ["type", "tablet"]
                ],
                [/(lg) netcast\.tv/i],
                ["vendor", "model", ["type", "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i,
                    /android.+lg(\-?[\d\w]+)\s+build/i
                ],
                ["model", ["vendor", "LG"],
                    ["type", "mobile"]
                ],
                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                ["model", ["vendor", "Lenovo"],
                    ["type", "tablet"]
                ],
                [/(lenovo)[_\s-]?([\w-]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/linux;.+((jolla));/i],
                ["vendor", "model", ["type", "mobile"]],
                [/((pebble))app\/[\d\.]+\s/i],
                ["vendor", "model", ["type", "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                ["vendor",
                    "model", ["type", "mobile"]
                ],
                [/crkey/i],
                [
                    ["model", "Chromecast"],
                    ["vendor", "Google"],
                    ["type", "smarttv"]
                ],
                [/android.+;\s(glass)\s\d/i],
                ["model", ["vendor", "Google"],
                    ["type", "wearable"]
                ],
                [/android.+;\s(pixel c)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "mobile"]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
                ],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "mobile"]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                ["model", ["vendor", "Meizu"],
                    ["type", "mobile"]
                ],
                [/(mz)-([\w-]{2,})/i],
                [
                    ["vendor", "Meizu"], "model", ["type", "mobile"]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                ["model", ["vendor", "OnePlus"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                ["model", ["vendor", "RCA"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                ["model", ["vendor", "Dell"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                ["model", ["vendor", "Verizon"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    ["vendor", "Barnes & Noble"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                ["model", ["vendor", "NuVision"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(k88)\sbuild/i],
                ["model", ["vendor", "ZTE"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                ["model", ["vendor", "Zeki"],
                    ["type", "tablet"]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    ["vendor", "Dragon Touch"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                ["model", ["vendor", "Insignia"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                ["model", ["vendor", "NextBook"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    ["vendor", "Voice"], "model", ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    ["vendor", "LvTel"], "model", ["type", "mobile"]
                ],
                [/android.+;\s(PH-1)\s/i],
                ["model", ["vendor", "Essential"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                ["model", ["vendor", "Envizen"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                ["model", ["vendor", "MachSpeed"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                ["model", ["vendor", "Rotor"],
                    ["type", "tablet"]
                ],
                [/android.+(KS(.+))\s+build/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    ["type", n.lowerize], "vendor", "model"
                ],
                [/[\s\/\(](smart-?tv)[;\)]/i],
                [
                    ["type", "smarttv"]
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                ["model", ["vendor", "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                ["version", ["name", "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                ["version", ["name", "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i
                ],
                ["name", "version"],
                [/rv:([\w\.]{1,9}).+(gecko)/i],
                ["version", "name"]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                ["name", "version"],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                ["name", ["version", I, r]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    ["name", "Windows"],
                    ["version", I, r]
                ],
                [/\((bb)(10);/i],
                [
                    ["name", "BlackBerry"], "version"
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i,
                    /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    ["name", "Symbian"], "version"
                ],
                [/\((series40);/i],
                ["name"],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    ["name", "Firefox OS"], "version"
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    ["name", "Chromium OS"], "version"
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    ["name", "Solaris"], "version"
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                ["name", "version"],
                [/(haiku)\s(\w+)/i],
                ["name", "version"],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    ["version", /_/g, "."],
                    ["name", "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    ["name", "Mac OS"],
                    ["version", /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                ["name", "version"]
            ]
        },
        H = function(e, B) {
            "object" === typeof e && (B = e, e = G);
            if (!(this instanceof H)) return (new H(e, B)).getResult();
            var C = e || (d && d.navigator && d.navigator.userAgent ? d.navigator.userAgent : ""),
                y = B ? n.extend(P, B) : P;
            this.getBrowser = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.browser);
                K.major = n.major(K.version);
                return K
            };
            this.getCPU = function() {
                var K = {
                    architecture: G
                };
                t.call(K, C, y.cpu);
                return K
            };
            this.getDevice = function() {
                var K = {
                    vendor: G,
                    model: G,
                    type: G
                };
                t.call(K, C, y.device);
                return K
            };
            this.getEngine = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.engine);
                return K
            };
            this.getOS = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.os);
                return K
            };
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            };
            this.getUA = function() {
                return C
            };
            this.setUA = function(K) {
                C = K;
                return this
            };
            return this
        };
    H.VERSION = "0.7.21";
    H.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    };
    H.CPU = {
        ARCHITECTURE: "architecture"
    };
    H.DEVICE = {
        MODEL: "model",
        VENDOR: "vendor",
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    };
    H.ENGINE = {
        NAME: "name",
        VERSION: "version"
    };
    H.OS = {
        NAME: "name",
        VERSION: "version"
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports =
        H), exports.LUNARADIOParser = H) : "function" === typeof define && define.amd ? define(function() {
        return H
    }) : d && (d.LUNARADIOParser = H);
    var T = d && (d.jQuery || d.Zepto);
    if (T && !T.ua) {
        var X = new H;
        T.ua = X.getResult();
        T.ua.get = function() {
            return X.getUA()
        };
        T.ua.set = function(e) {
            X.setUA(e);
            e = X.getResult();
            for (var B in e) T.ua[B] = e[B]
        }
    }
})("object" === typeof window ? window : this);
(function(d, G) {
    "function" === typeof define && define.amd ? define(["jquery"], G) : d.jQuery ? G(d.jQuery) : G(d.Zepto)
})(this, function(d, G) {
    d.fn.lunaradioMarquee = function(n) {
        var t = "string" === typeof n,
            I = Array.prototype.slice.call(arguments, 1),
            r = this;
        n = !t && I.length ? d.extend.apply(null, [!0, n].concat(I)) : n;
        if (t && "_" === n.charAt(0)) return r;
        t ? this.each(function() {
            var P = d(this).data("lunaradioMarquee"),
                H = P && d.isFunction(P[n]) ? P[n].apply(P, I) : P;
            if (H !== P && H !== G) return r = H, !1
        }) : this.each(function() {
            d(this).data("lunaradioMarquee",
                new d.lunaradioMarquee(this, n))
        });
        return r
    };
    d.lunaradioMarquee = function(n, t) {
        function I() {
            var B = T ? -1 : 1,
                C = T ? -1 * P : 0;
            r = (T ? 0 > r : r > -1 * P) ? r - H * B : C;
            e.style.whiteSpace = "nowrap";
            e.style.transform = "translate(" + r + "px, 0) translateZ(0)";
            window.requestAnimationFrame(I) || window.mozRequestAnimationFrame(I) || window.webkitRequestAnimationFrame(I) || window.msRequestAnimationFrame(I) || window.oRequestAnimationFrame(I)
        }
        var r = 0,
            P, H = n.dataset.speed || .25,
            T = n.dataset.reverse;
        n.parentElement.getBoundingClientRect();
        var X = n.children[0];
        var e = document.createElement("div");
        e.style.whiteSpace = "nowrap";
        (function() {
            X.style.display = "inline-block";
            P = X.offsetWidth;
            for (var B = 0; 20 > B; B++) {
                var C = X.cloneNode(!0);
                C.style.display = "inline-block";
                e.appendChild(C)
            }
            T && (r = -1 * P);
            n.classList.add("is-init")
        })();
        e.appendChild(X);
        n.appendChild(e);
        I();
        this.play = function() {
            I()
        };
        this.pause = function() {}
    }
});
(function(d) {
    function G(e, B, C) {
        if ("touch" !== B.substr(0, 5)) return d(e).unbind(B, C);
        var y;
        for (y = 0; y < n._binds.length; y++) n._binds[y].elem === e && n._binds[y].type === B && n._binds[y].func === C && (document.addEventListener ? e.removeEventListener(B, n._binds[y].fnc, !1) : e.detachEvent("on" + B, n._binds[y].fnc), n._binds.splice(y--, 1))
    }

    function n(e, B, C, y) {
        if ("touch" !== B.substr(0, 5)) return d(e).bind(B, y, C);
        if (n[B]) return n[B].bind(e, B, C, y);
        var K = function(R) {
            R || (R = window.event);
            R.stopPropagation || (R.stopPropagation = function() {
                this.cancelBubble = !0
            });
            R.data = y;
            C.call(e, R)
        };
        document.addEventListener ? e.addEventListener(B, K, !1) : e.attachEvent("on" + B, K);
        n._binds.push({
            elem: e,
            type: B,
            func: C,
            fnc: K
        })
    }

    function t(e) {
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.start.x = e.pageX;
        e.data.start.y = e.pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), n(e.data.affects, "mousemove", I, e.data), n(e.data.affects,
            "mouseup", r, e.data))
    }

    function I(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.preventDefault && e.stopPropagation();
        e.data.move.x = e.pageX - e.data.position.x;
        e.data.move.y = e.pageY - e.data.position.y;
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.offset.x = e.pageX - e.data.start.x;
        e.data.offset.y = e.pageY - e.data.start.y;
        e.data.event = e;
        e.data.onmove && e.data.onmove.call(e.data.element, e.data)
    }

    function r(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        G(e.data.affects, "mousemove", I);
        G(e.data.affects, "mouseup", r);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }

    function P(e) {
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.start.x = e.touches[0].pageX;
        e.data.start.y = e.touches[0].pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation &&
            e.data.stopPropagation && e.stopPropagation(), n(e.data.affects, "touchmove", H, e.data), n(e.data.affects, "touchend", T, e.data))
    }

    function H(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        e.data.move.x = e.touches[0].pageX - e.data.position.x;
        e.data.move.y = e.touches[0].pageY - e.data.position.y;
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.offset.x = e.touches[0].pageX - e.data.start.x;
        e.data.offset.y =
            e.touches[0].pageY - e.data.start.y;
        e.data.event = e;
        e.data.onmove && e.data.onmove.call(e.data.elem, e.data)
    }

    function T(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        G(e.data.affects, "touchmove", H);
        G(e.data.affects, "touchend", T);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    var X = d.extend;
    n._binds = [];
    d.fn.lunaradiograb = function(e, B) {
        return this.each(function() {
            var C = {
                move: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                },
                position: {
                    x: 0,
                    y: 0
                },
                start: {
                    x: 0,
                    y: 0
                },
                affects: document.documentElement,
                stopPropagation: !1,
                preventDefault: !1,
                touch: !0
            };
            X(C, e);
            C.element = this;
            n(this, "mousedown", t, C);
            C.touch && n(this, "touchstart", P, C)
        })
    };
    d.fn.lunaradioungrab = function(e) {
        return this.each(function() {
            G(this, "mousedown", "mousedown")
        })
    }
})(jQuery);

//]]>
