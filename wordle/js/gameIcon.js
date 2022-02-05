var gameIconElement = function (e) {
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
      this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
      var e = this.getAttribute("icon");
      this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-icon", gameIconElement);
