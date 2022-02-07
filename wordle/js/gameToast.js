var Ea, gameToastElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
      mode: "open"
    }), e
  }
  return o(t, [{
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(qa.content.cloneNode(!0));
      var a = this.shadowRoot.querySelector(".toast");
      a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || secondsMS, "Infinity" !== this._duration && setTimeout((function () {
        a.classList.add("fade")
      }), this._duration), a.addEventListener("transitionend", (function (a) {
        e.parentNode.removeChild(e)
      }))
    }
  }]), t
}(c(HTMLElement));

function Ca() {
  dataLayer.push(arguments)
}
customElements.define("game-toast", gameToastElement), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
Ca("config", "G-2SSGMHY3NP", {
  app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
  debug_mode: !1
});
