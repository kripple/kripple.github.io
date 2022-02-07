var countdownTimerElement = function (e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({
      mode: "open"
    });
    var o = new Date;
    return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
  }
  return o(t, [{
    key: "padDigit",
    value: function (e) {
      return e.toString().padStart(2, "0")
    }
  }, {
    key: "updateTimer",
    value: function () {
      var e, a = (new Date).getTime(),
        s = Math.floor(this.targetEpochMS - a);
      if (s <= 0) e = "00:00:00";
      else {
        var t = Math.floor(s % daysMS / hoursMS),
          o = Math.floor(s % hoursMS / minutesMS),
          n = Math.floor(s % minutesMS / secondsMS);
        e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
      }
      this.$timer.textContent = e
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var e = this;
      this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function () {
        e.updateTimer()
      }), 200)
    }
  }, {
    key: "disconnectedCallback",
    value: function () {
      clearInterval(this.intervalId)
    }
  }]), t
}(c(HTMLElement));
