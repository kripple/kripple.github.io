var gameHelpElement = function (e) {
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
      this.shadowRoot.appendChild($s.content.cloneNode(!0))
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-help", gameHelpElement);
