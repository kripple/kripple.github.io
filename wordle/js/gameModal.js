var gameModalElement = function (e) {
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
      this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function (a) {
        e.shadowRoot.querySelector(".content").classList.add("closing")
      })), this.shadowRoot.addEventListener("animationend", (function (a) {
        "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
      }))
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-modal", gameModalElement);
