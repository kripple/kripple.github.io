this.wordle = this.wordle || {}, this.wordle.bundle = function (state) {
  "use strict";

  var gameState = "object" == (void 0 === state ? "undefined" : a(state)) && state && !state.nodeType && state;
  var gameModule =
    gameState && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module;
  var buffer = gameModule && gameModule.exports === gameState ? I.Buffer : void 0;
  var allocBuffer = buffer ? buffer.allocUnsafe : void 0;
  var gameBuffer = gameModule && gameModule.exports === gameState ? I.Buffer : void 0;
  var isBuffer = (gameBuffer ? gameBuffer.isBuffer : void 0) || function () { return !1 };
  var globalProcess = gameModule && gameModule.exports === gameState && L.process;

  var Ve = function () {
    try {
      var e = gameModule && gameModule.require && gameModule.require("util").types;
      return e || globalProcess && globalProcess.binding && globalProcess.binding("util")
    } catch (e) { }
  }(),
    Ke = Ve && Ve.isTypedArray,
    Qe = Ke ? function (e) {
      return function (a) {
        return e(a)
      }
    }(Ke) : function (e) {
      return Ee(e) && Oe(e.length) && !!Ye[D(e)]
    };

  function na(e, a) {
    var s = Me(e),
      t = !s && Ie(e),
      o = !s && !t && isBuffer(e),
      n = !s && !t && !o && Qe(e),
      r = s || t || o || n,
      i = r ? function (e, a) {
        for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
        return t
      }(e.length, String) : [],
      l = i.length;
    for (var d in e) !a && !Object.prototype.hasOwnProperty.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
    return i
  }

  function ia(e) {
    if (!G(e)) return function (e) {
      var a = [];
      if (null != e)
        for (var s in Object(e)) a.push(s);
      return a
    }(e);
    var a = qe(e),
      s = [];
    for (var t in e) ("constructor" != t || !a && Object.prototype.hasOwnProperty.call(e, t)) && s.push(t);
    return s
  }

  function la(e) {
    return Re(e) ? na(e, !0) : ia(e)
  }

  function da(e) {
    return function (e, a, s, t) {
      var o = !s;
      s || (s = {});
      for (var n = -1, r = a.length; ++n < r;) {
        var i = a[n],
          l = t ? t(s[i], e[i], i, s, e) : void 0;
        void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
      }
      return s
    }(e, la(e))
  }

  function ua(e, a, s, t, o, n, r) {
    var i = Ze(e, s),
      l = Ze(a, s),
      d = r.get(l);
    if (d) pe(e, s, d);
    else {
      var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
        p = void 0 === c;
      if (p) {
        var m = Me(l),
          h = !m && isBuffer(l),
          y = !m && !h && Qe(l);
        c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function (e, a) {
          var s = -1,
            t = e.length;
          for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
          return a
        }(i) : h ? (p = !1, c = function (e, a) {
          if (a) return e.slice();
          var s = e.length,
            t = allocBuffer ? allocBuffer(s) : new e.constructor(s);
          return e.copy(t), t
        }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function (e) {
          if (!Ee(e) || "[object Object]" != D(e)) return !1;
          var a = Se(e);
          if (null === a) return !0;
          var s = Fe.call(a, "constructor") && a.constructor;
          return "function" == typeof s && s instanceof s && Be.call(s) == We
        }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function (e) {
          return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
        }(l))) : p = !1
      }
      p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
    }
  }

  function ca(e, a, s, t, o) {
    e !== a && he(a, (function (n, r) {
      if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o);
      else {
        var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
        void 0 === i && (i = n), pe(e, r, i)
      }
    }), la)
  }

  function ma(e, a, s) {
    switch (s.length) {
      case 0:
        return e.call(a);
      case 1:
        return e.call(a, s[0]);
      case 2:
        return e.call(a, s[0], s[1]);
      case 3:
        return e.call(a, s[0], s[1], s[2])
    }
    return e.apply(a, s)
  }

  var ya = ue ? function (e, a) {
    return ue(e, "toString", {
      configurable: !0,
      enumerable: !1,
      value: (s = a, function () {
        return s
      }),
      writable: !0
    });
    var s
  } : (e) => e,
    ga = Date.now;

  var ba = function (e) {
    var a = 0,
      s = 0;
    return function () {
      var t = ga(),
        o = 16 - (t - s);
      if (s = t, o > 0) {
        if (++a >= 800) return arguments[0]
      } else a = 0;
      return e.apply(void 0, arguments)
    }
  }(ya);

  function fa(e, a) {
    return ba(function (e, a, s) {
      return a = Math.max(void 0 === a ? e.length - 1 : a, 0),
        function () {
          for (var t = arguments, o = -1, n = Math.max(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
          o = -1;
          for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
          return i[a] = s(r), ma(e, this, i)
        }
    }(e, a, (e) => e), e + "")
  }

  var ka, va = (ka = function (e, a, s) {
    ca(e, a, s)
  }, fa((function (e, s) {
    var t = -1,
      o = s.length,
      n = o > 1 ? s[o - 1] : void 0,
      r = o > 2 ? s[2] : void 0;
    for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function (e, s, t) {
      if (!G(t)) return !1;
      var o = a(s);
      return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
    }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
      var i = s[t];
      i && ka(e, i, t, n)
    }
    return e
  })));

  function ja(e) {
    var a = getGameState();
    ! function (e) {
      window.localStorage.setItem(wa, JSON.stringify(e))
    }(va(a, e))
  }

  var results = {
    currentStreak: 0,
    maxStreak: 0,
    guesses: n({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }, fail, 0),
    winPercentage: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    averageGuesses: 0
  };

  function getStatistics() {
    var json = window.localStorage.getItem(statistics) || JSON.stringify(results);
    return JSON.parse(json)
  }

  function Va(e) {
    var a = e.isWin,
      s = e.isStreak,
      t = e.numGuesses,
      o = getStatistics();
    a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function (e, a) {
      var s = y(a, 2),
        t = s[0],
        o = s[1];
      return t !== fail ? e += t * o : e
    }), 0) / o.gamesWon),
      function (e) {
        window.localStorage.setItem(statistics, JSON.stringify(e))
      }(o)
  }

  var gameStatsElement = function (e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({
        mode: "open"
      }), e.stats = getStatistics(), e
    }
    return o(t, [{
      key: "connectedCallback",
      value: function () {
        var e = this;
        this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
        var a = this.shadowRoot.getElementById("statistics"),
          s = this.shadowRoot.getElementById("guess-distribution"),
          t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
        if (Object.values(this.stats.guesses).every((function (e) {
          return 0 === e
        }))) {
          var o = document.createElement("div");
          o.classList.add("no-data"), o.innerText = "No Data", s.appendChild(o)
        } else
          for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
            var r = n,
              i = this.stats.guesses[n],
              l = graphContainer.content.cloneNode(!0),
              d = Math.max(7, Math.round(i / t * 100));
            l.querySelector(".guess").textContent = r;
            var u = l.querySelector(".graph-bar");
            if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
              l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
              var c = parseInt(this.getAttribute("highlight-guess"), 10);
              c && n === c && u.classList.add("highlight")
            }
            s.appendChild(l)
          }
        if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function (s) {
          var t = statisticsLabels[s],
            o = e.stats[s],
            n = statisticContainer.content.cloneNode(!0);
          n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
        })), this.gameApp.gameStatus !== inProgress) {
          var p = this.shadowRoot.querySelector(".footer"),
            m = countdownTimerTemplate.content.cloneNode(!0);
          p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function (a) {
            a.preventDefault(), a.stopPropagation();
            As(function (e) {
              var a = e.evaluations,
                s = e.dayOffset,
                t = e.rowIndex,
                o = e.isHardMode,
                n = e.isWin,
                r = JSON.parse(window.localStorage.getItem(j)),
                i = JSON.parse(window.localStorage.getItem(S)),
                l = "Wordle ".concat(s);
              l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
              var d = "";
              return a.forEach((function (e) {
                e && (e.forEach((function (e) {
                  if (e) {
                    var a = "";
                    switch (e) {
                      case Ma:
                        a = function (e) {
                          return e ? "ðŸŸ§" : "ðŸŸ©"
                        }(i);
                        break;
                      case Ia:
                        a = function (e) {
                          return e ? "ðŸŸ¦" : "ðŸŸ¨"
                        }(i);
                        break;
                      case Oa:
                        a = function (e) {
                          return e ? "â¬›" : "â¬œ"
                        }(r)
                    }
                    d += a
                  }
                })), d += "\n")
              })), {
                text: "".concat(l, "\n\n").concat(d.trimEnd())
              }
            }({
              evaluations: e.gameApp.evaluations,
              dayOffset: e.gameApp.dayOffset,
              rowIndex: e.gameApp.rowIndex,
              isHardMode: e.gameApp.hardMode,
              isWin: e.gameApp.gameStatus === winStatus
            }), (function () {
              e.gameApp.addToast("Copied results to clipboard", (2 * secondsMS), !0)
            }), (function () {
              e.gameApp.addToast("Share failed", (2 * secondsMS), !0)
            }))
          }))
        }
      }
    }]), t
  }(c(HTMLElement));
  customElements.define("game-stats", gameStatsElement);



  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */


  function ps(e, a) {
    var s, t, o, n, r = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return n = {
      next: i(0),
      throw: i(1),
      return: i(2)
    }, "function" == typeof Symbol && (n[Symbol.iterator] = function () {
      return this
    }), n;

    function i(n) {
      return function (i) {
        return function (n) {
          if (s) throw new TypeError("Generator is already executing.");
          for (; r;) try {
            if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
            switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return r.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                r.label++, t = n[1], n = [0];
                continue;
              case 7:
                n = r.ops.pop(), r.trys.pop();
                continue;
              default:
                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                  r = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  r.label = n[1];
                  break
                }
                if (6 === n[0] && r.label < o[1]) {
                  r.label = o[1], o = n;
                  break
                }
                if (o && r.label < o[2]) {
                  r.label = o[2], r.ops.push(n);
                  break
                }
                o[2] && r.ops.pop(), r.trys.pop();
                continue
            }
            n = a.call(e, r)
          } catch (e) {
            n = [6, e], t = 0
          } finally {
              s = o = 0
            }
          if (5 & n[0]) throw n[1];
          return {
            value: n[0] ? n[1] : void 0,
            done: !0
          }
        }([n, i])
      }
    }
  }
  customElements.define("game-keyboard", gameKeyboardElement),
    function () {
      (console.warn || console.log).apply(console, arguments)
    }.bind("[clipboard-polyfill]");
  var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
    fs = null == bs ? void 0 : bs.clipboard;
  null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
  var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
    vs = "undefined" == typeof window ? void 0 : window,
    ws = (null == vs || vs.ClipboardItem, vs);

  var xs = function () {
    this.success = !1
  };

  function zs(e, a, s) {
    for (var t in e.success = !0, a) {
      var o = a[t],
        n = s.clipboardData;
      n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
    }
    s.preventDefault()
  }

  function js(e) {
    var a = new xs,
      s = zs.bind(this, a, e);
    document.addEventListener("copy", s);
    try {
      document.execCommand("copy")
    } finally {
      document.removeEventListener("copy", s)
    }
    return a.success
  }

  function Ss(e, a) {
    _s(e);
    var s = js(a);
    return qs(), s
  }

  function _s(e) {
    var a = document.getSelection();
    if (a) {
      var s = document.createRange();
      s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
    }
  }

  function qs() {
    var e = document.getSelection();
    e && e.removeAllRanges()
  }

  function Es(e) {
    return cs(this, void 0, void 0, (function () {
      var a;
      return ps(this, (function (s) {
        if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
          if (!a) throw new Error("No `text/plain` value was specified.");
          if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0];
          throw new Error("Copying failed, possibly because the user rejected it.")
        }
        var t;
        return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function (e) {
          var a = document.createElement("div");
          a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
          var s = Ss(a, e);
          return document.body.removeChild(a), s
        }(e) || function (e) {
          var a = document.createElement("div");
          a.setAttribute("style", "-webkit-user-select: text !important");
          var s = a;
          a.attachShadow && (s = a.attachShadow({
            mode: "open"
          }));
          var t = document.createElement("span");
          t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
          var o = document.execCommand("copy");
          return qs(), document.body.removeChild(a), o
        }(e["text/plain"]) ? [2, !0] : [2, !1]
      }))
    }))
  }

  var gameAppElement = function (e) {
    r(t, e);
    var a = h(t);

    function t() {
      var state;

      s(this, t), n(p(state = a.call(this)), "tileIndex", 0), n(p(state), "rowIndex", 0), n(p(state), "solution", void 0), n(p(state), "boardState", void 0), n(p(state), "evaluations", void 0), n(p(state), "canInput", !0), n(p(state), "gameStatus", inProgress), n(p(state), "letterEvaluations", {}), n(p(state), "$board", void 0), n(p(state), "$keyboard", void 0), n(p(state), "$game", void 0), n(p(state), "today", void 0), n(p(state), "lastPlayedTs", void 0), n(p(state), "lastCompletedTs", void 0), n(p(state), "hardMode", void 0), n(p(state), "dayOffset", void 0), state.attachShadow({ mode: "open" }), state.today = new Date;

      var gameState = getGameState();
      var checkSomething = !state.lastPlayedTs || Na(new Date(state.lastPlayedTs), state.today) >= 1;

      var newGame = () => (state.boardState = new Array(6).fill(""), state.evaluations = new Array(6).fill(null), state.solution = Da(state.today), state.dayOffset = getDayOffset(state.today), state.lastCompletedTs = gameState.lastCompletedTs, state.hardMode = gameState.hardMode, state.restoringFromLocalStorage = !1, ja({
        rowIndex: state.rowIndex,
        boardState: state.boardState,
        evaluations: state.evaluations,
        solution: state.solution,
        gameStatus: state.gameStatus
      }), Ca("event", "level_start", {
        level_name: Wa(state.solution)
      }));
      
      var currentGame = () => (state.boardState = gameState.boardState, state.evaluations = gameState.evaluations, state.rowIndex = gameState.rowIndex, state.solution = gameState.solution, state.dayOffset = getDayOffset(state.today), state.letterEvaluations = Pa(state.boardState, state.evaluations), state.gameStatus = gameState.gameStatus, state.lastCompletedTs = gameState.lastCompletedTs, state.hardMode = gameState.hardMode, state.gameStatus !== inProgress && (state.canInput = !1), state.restoringFromLocalStorage = !0);

      return state.lastPlayedTs = gameState.lastPlayedTs, checkSomething ? newGame() : currentGame(), state
    }

    return o(t, [{
      key: "evaluateRow",
      value: function () {
        if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
          var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
            s = this.boardState[this.rowIndex];
          if (e = s, notInDictionary(e) && notInSolutions(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
          if (this.hardMode) {
            var t = function (e, a, s) {
              if (!e || !a || !s) return {
                validGuess: !0
              };
              for (var t = 0; t < s.length; t++)
                if (s[t] === Ma && e[t] !== a[t]) return {
                  validGuess: !1,
                  errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                };
              for (var o = {}, n = 0; n < s.length; n++) [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
              var r = e.split("").reduce((function (e, a) {
                return e[a] ? e[a] += 1 : e[a] = 1, e
              }), {});
              for (var i in o)
                if ((r[i] || 0) < o[i]) return {
                  validGuess: !1,
                  errorMessage: "Guess must contain ".concat(i.toUpperCase())
                };
              return {
                validGuess: !0
              }
            }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
              o = t.validGuess,
              n = t.errorMessage;
            if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
          }
          var r = function (e, a) {
            for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              if (t[r])
                for (var l = 0; l < a.length; l++) {
                  var d = a[l];
                  if (o[l] && i === d) {
                    s[r] = Ia, o[l] = !1;
                    break
                  }
                }
            }
            return s
          }(s, this.solution);
          this.evaluations[this.rowIndex] = r, this.letterEvaluations = Pa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
          var i = this.rowIndex >= 6,
            l = r.every((function (e) {
              return "correct" === e
            }));
          if (i || l) Va({
            isWin: l,
            isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
            numGuesses: this.rowIndex
          }), ja({
            lastCompletedTs: Date.now()
          }), this.gameStatus = l ? winStatus : failStatus, Ca("event", "level_end", {
            level_name: Wa(this.solution),
            num_guesses: this.rowIndex,
            success: l
          });
          this.tileIndex = 0, this.canInput = !1, ja({
            rowIndex: this.rowIndex,
            boardState: this.boardState,
            evaluations: this.evaluations,
            solution: this.solution,
            gameStatus: this.gameStatus,
            lastPlayedTs: Date.now()
          })
        }
      }
    }, {
      key: "addLetter",
      value: function (e) {
        this.gameStatus === inProgress && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
      }
    }, {
      key: "removeLetter",
      value: function () {
        if (this.gameStatus === inProgress && this.canInput && !(this.tileIndex <= 0)) {
          this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
          var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
          this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
        }
      }
    }, {
      key: "submitGuess",
      value: function () {
        if (this.gameStatus === inProgress && this.canInput) {
          if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
          this.evaluateRow()
        }
      }
    }, {
      key: "addToast",
      value: function (e, a) {
        var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          t = document.createElement("game-toast");
        t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
      }
    }, {
      key: "sizeBoard",
      value: function () {
        var e = this.shadowRoot.querySelector("#board-container"),
          a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
          s = 6 * Math.floor(a / 5);
        this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
      }
    }, {
      key: "showStatsModal",
      value: function () {
        var e = this.$game.querySelector("game-modal"),
          a = document.createElement("game-stats");
        this.gameStatus === winStatus && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
      }
    }, {
      key: "showHelpModal",
      value: function () {
        var e = this.$game.querySelector("game-modal");
        e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
      }
    }, {
      key: "connectedCallback",
      value: function () {
        var e = this;
        this.shadowRoot.appendChild(gameThemeManagerStyles.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function () {
          return e.showHelpModal()
        }), 100);
        for (var a = 0; a < 6; a++) {
          var s = document.createElement("game-row");
          s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
        }
        this.$game.addEventListener("game-key-press", (function (a) {
          var s = a.detail.key;
          "â†" === s || "Backspace" === s ? e.removeLetter() : "â†µ" === s || "Enter" === s ? e.submitGuess() : alphabet.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
        })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function (a) {
          e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
          var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
          (a.path || a.composedPath && a.composedPath()).includes(s) && ([winStatus, failStatus].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === winStatus && (s.setAttribute("win", ""), e.addToast(successMessage[e.rowIndex - 1], (2 * secondsMS))), e.gameStatus === failStatus && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function () {
            e.showStatsModal()
          }), 2500))), e.restoringFromLocalStorage = !1)
        })), this.shadowRoot.addEventListener("game-setting-change", (function (a) {
          var s = a.detail,
            t = s.name,
            o = s.checked,
            n = s.disabled;
          switch (t) {
            case "hard-mode":
              return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({
                hardMode: o
              })))
          }
        })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function (a) {
          var s = e.$game.querySelector("game-page"),
            t = document.createTextNode("Settings");
          s.appendChild(t);
          var o = document.createElement("game-settings");
          o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
        })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function (a) {
          var s = e.$game.querySelector("game-page"),
            t = document.createTextNode("How to play");
          s.appendChild(t);
          var o = document.createElement("game-help");
          o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
        })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function (a) {
          e.showStatsModal()
        })), window.addEventListener("resize", this.sizeBoard.bind(this))
      }
    }, {
      key: "disconnectedCallback",
      value: function () { }
    }, {
      key: "debugTools",
      value: function () {
        var e = this;
        this.shadowRoot.getElementById("debug-tools").appendChild(buttonStyles.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function (a) {
          e.addToast("hello world")
        })), this.shadowRoot.getElementById("modal").addEventListener("click", (function (a) {
          var s = e.$game.querySelector("game-modal");
          s.textContent = "hello plz", s.setAttribute("open", "")
        })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function () {
          e.evaluateRow()
        })), this.shadowRoot.getElementById("shake").addEventListener("click", (function () {
          e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
        })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function () {
          var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
          "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
        }))
      }
    }]), t
  }(c(HTMLElement));
  customElements.define("game-app", gameAppElement);


  return customElements.define("countdown-timer", countdownTimerElement), state.CountdownTimer = countdownTimerElement, state.GameApp = gameAppElement, state.GameHelp = gameHelpElement, state.GameIcon = gameIconElement, state.GameKeyboard = gameKeyboardElement, state.GameModal = gameModalElement, state.GamePage = gamePageElement, state.GameRow = gameRowElement, state.GameSettings = gameSettingsElement, state.GameStats = gameStatsElement, state.GameSwitch = gameSwitchElement, state.GameThemeManager = gameThemeManagerElement, state.GameTile = gameTileElement, state.GameToast = gameToastElement, Object.defineProperty(state, "__esModule", { value: !0 }), state
}({});
