var gameSwitchElement = function (e) {
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
      this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function (a) {
        a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
          bubbles: !0,
          composed: !0,
          detail: {
            name: e.getAttribute("name"),
            checked: e.hasAttribute("checked"),
            disabled: e.hasAttribute("disabled")
          }
        }))
      }))
    }
  }], [{
    key: "observedAttributes",
    get: function () {
      return ["checked"]
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-switch", gameSwitchElement);
