var gameTileElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({
      mode: "open"
    }), e
  }
  return o(t, [{
    key: "last",
    set: function (e) {
      this._last = e
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(titleStyles.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function (a) {
        "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
          bubbles: !0,
          composed: !0
        }))), e._render()
      })), this._render()
    }
  }, {
    key: "attributeChangedCallback",
    value: function (e, a, s) {
      switch (e) {
        case "letter":
          if (s === a) break;
          var t = "null" === s ? "" : s;
          this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
          break;
        case "evaluation":
          if (!s) break;
          this._state = s;
          break;
        case "reveal":
          this._animation = "flip-in", this._reveal = !0
      }
      this._render()
    }
  }, {
    key: "_render",
    value: function () {
      this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
    }
  }], [{
    key: "observedAttributes",
    get: function () {
      return ["letter", "evaluation", "reveal"]
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-tile", gameTileElement);
