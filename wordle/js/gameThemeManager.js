var gameThemeManagerElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({
      mode: "open"
    });
    var o = JSON.parse(window.localStorage.getItem(j)),
      r = window.matchMedia("(prefers-color-scheme: dark)").matches,
      i = JSON.parse(window.localStorage.getItem(S));
    return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
  }
  return o(t, [{
    key: "setDarkTheme",
    value: function (e) {
      var a = document.querySelector("body");
      e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
    }
  }, {
    key: "setColorBlindTheme",
    value: function (e) {
      var a = document.querySelector("body");
      e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function (a) {
        var s = a.detail,
          t = s.name,
          o = s.checked;
        switch (t) {
          case "dark-theme":
            return void e.setDarkTheme(o);
          case "color-blind-theme":
            return void e.setColorBlindTheme(o)
        }
      }))
    }
  }]), t
}(c(HTMLElement));
customElements.define("game-theme-manager", gameThemeManagerElement);
