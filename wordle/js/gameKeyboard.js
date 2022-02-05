var gameKeyboardElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
      mode: "open"
    }), e
  }
  return o(t, [{
    key: "letterEvaluations",
    set: function (e) {
      this._letterEvaluations = e, this._render()
    }
  }, {
    key: "dispatchKeyPressEvent",
    value: function (e) {
      this.dispatchEvent(new CustomEvent("game-key-press", {
        bubbles: !0,
        composed: !0,
        detail: {
          key: e
        }
      }))
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function (a) {
        var s = a.target.closest("button");
        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
      })), window.addEventListener("keydown", (function (a) {
        if (!0 !== a.repeat) {
          var s = a.key,
            t = a.metaKey,
            o = a.ctrlKey;
          t || o || (alphabet.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
        }
      })), this.$keyboard.addEventListener("transitionend", (function (a) {
        var s = a.target.closest("button");
        s && e.$keyboard.contains(s) && s.classList.remove("fade")
      })), ds.forEach((function (a) {
        var s = document.createElement("div");
        s.classList.add("row"), a.forEach((function (e) {
          var a;
          if (e >= "a" && e <= "z" || "â†" === e || "â†µ" === e) {
            if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "â†" === e) {
              var t = document.createElement("game-icon");
              t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
            }
            "â†µ" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
          } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
          s.appendChild(a)
        })), e.$keyboard.appendChild(s)
      })), this._render()
    }
  }, {
    key: "_render",
    value: function () {
      for (var e in this._letterEvaluations) {
        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
        a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
      }
    }
  }]), t
}(c(HTMLElement));
