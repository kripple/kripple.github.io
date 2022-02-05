var gameSettingsElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
      mode: "open"
    }), e
  }
  return o(t, [{
    key: "connectedCallback",
    value: function () {
      var e, a = this;
      console.log('puzzle-number', this.shadowRoot.querySelector("#puzzle-number").textContent);
      this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function (e) {
        e.stopPropagation();
        var s = e.detail,
          t = s.name,
          o = s.checked,
          n = s.disabled;
        a.dispatchEvent(new CustomEvent("game-setting-change", {
          bubbles: !0,
          composed: !0,
          detail: {
            name: t,
            checked: o,
            disabled: n
          }
        })), a.render()
      })), this.render()
    }
  }, {
    key: "render",
    value: function () {
      var e = document.querySelector("body");
      e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
      var a = getGameState();
      a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-settings", gameSettingsElement);
