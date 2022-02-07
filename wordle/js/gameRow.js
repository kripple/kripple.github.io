var gameRowElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e._letters = "", e._evaluation = [], e._length, e
  }
  return o(t, [{
    key: "evaluation",
    get: function () {
      return this._evaluation
    },
    set: function (e) {
      var a = this;
      this._evaluation = e, this.$tiles && this.$tiles.forEach((function (e, s) {
        e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function () {
          e.setAttribute("reveal", "")
        }), 300 * s)
      }))
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(rowStyles.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
      for (var a = function (a) {
        var s = document.createElement("game-tile"),
          t = e._letters[a];
        (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function () {
          s.setAttribute("reveal", "")
        }), 100 * a));
        a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
      }, s = 0; s < this._length; s++) a(s);
      this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function (a) {
        "Shake" === a.animationName && e.removeAttribute("invalid")
      }))
    }
  }, {
    key: "attributeChangedCallback",
    value: function (e, a, s) {
      switch (e) {
        case "letters":
          this._letters = s || "";
          break;
        case "length":
          this._length = parseInt(s, 10);
          break;
        case "win":
          if (null === s) {
            this.$tiles.forEach((function (e) {
              e.classList.remove("win")
            }));
            break
          }
          this.$tiles.forEach((function (e, a) {
            e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
          }))
      }
      this._render()
    }
  }, {
    key: "_render",
    value: function () {
      var e = this;
      this.$row && this.$tiles.forEach((function (a, s) {
        var t = e._letters[s];
        t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
      }))
    }
  }], [{
    key: "observedAttributes",
    get: function () {
      return ["letters", "length", "invalid", "win"]
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-row", gameRowElement);
