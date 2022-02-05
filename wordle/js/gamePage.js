var gamePageElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return o(t, [{
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function (a) {
        e.shadowRoot.querySelector(".overlay").classList.add("closing")
      })), this.shadowRoot.addEventListener("animationend", (function (a) {
        "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function (a) {
          e.removeChild(a)
        })), e.removeAttribute("open"))
      }))
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-page", gamePageElement);
