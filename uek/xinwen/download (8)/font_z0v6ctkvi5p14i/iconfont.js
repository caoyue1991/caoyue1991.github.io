;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shangyiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M206.868687 511.930182l270.828606-270.840242-0.085333-0.080162 16.717576-16.718869c12.889212-12.889212 33.782949-12.889212 46.661818 0 12.889212 12.880162 12.889212 33.772606 0 46.663111L299.929859 512.020687l242.241939 242.241939c12.88404 12.878869 12.88404 33.773899 0 46.661818-12.887919 12.88404-33.777778 12.88404-46.661818 0l-26.989899-26.989899 0.182303-0.166788L206.868687 511.930182 206.868687 511.930182zM470.833131 511.930182l270.833778-270.840242-0.08404-0.080162 16.716283-16.718869c12.889212-12.889212 33.782949-12.889212 46.661818 0 12.889212 12.880162 12.889212 33.772606 0 46.663111L563.899475 512.020687 806.141414 754.262626c12.88404 12.878869 12.88404 33.773899 0 46.661818-12.887919 12.88404-33.782949 12.88404-46.660525 0l-26.995071-26.989899 0.186182-0.166788L470.833131 511.930182 470.833131 511.930182zM470.833131 511.930182"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangyiye1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M602.023316 270.405593l-10.896164-10.896164c-6.01704-6.019087-15.774265-6.019087-21.792329 0L347.428827 481.415424c-1.892093 0.740874-3.668553 1.868557-5.197372 3.397377l-10.747785 10.747785c-1.673106 1.673106-2.857071 3.643993-3.586688 5.737678-4.212952 6.010901-3.648087 14.349823 1.722224 19.71911l10.896164 10.896164c2.860141 2.861164 6.566556 4.345981 10.313903 4.486174l217.08827 217.08827c5.936199 5.934153 15.559371 5.934153 21.493523 0l10.747785-10.747785c5.934153-5.934153 5.934153-15.557324 0-21.493523L386.566196 507.654019l215.45712-215.45712C608.042403 286.179858 608.042403 276.422633 602.023316 270.405593zM512.050142 64.404846c-246.805082 0-446.877817 200.073758-446.877817 446.877817s200.073758 446.877817 446.877817 446.877817 446.877817-200.073758 446.877817-446.877817S758.854201 64.404846 512.050142 64.404846zM512.050142 922.04391c-226.856751 0-410.761248-183.904497-410.761248-410.761248S285.193391 100.520391 512.050142 100.520391s410.762271 183.90552 410.762271 410.762271S738.906893 922.04391 512.050142 922.04391z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangyiye-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M421.977 753.594l10.896 10.896c6.017 6.019 15.774 6.019 21.792 0l221.906-221.906c1.892-0.741 3.669-1.869 5.197-3.397l10.748-10.748c1.673-1.673 2.857-3.644 3.587-5.738 4.213-6.010 3.649-14.35-1.722-19.719l-10.896-10.896c-2.86-2.861-6.567-4.347-10.314-4.486l-217.088-217.088c-5.935-5.934-15.559-5.934-21.495 0l-10.748 10.748c-5.934 5.934-5.934 15.556 0 21.495l213.593 213.593-215.457 215.457c-6.019 6.017-6.019 15.774 0 21.792zM511.95 959.595c246.804 0 446.878-200.074 446.878-446.878s-200.074-446.878-446.878-446.878-446.878 200.074-446.878 446.878 200.074 446.878 446.878 446.878zM511.951 101.956c226.857 0 410.761 183.904 410.761 410.761s-183.904 410.762-410.76 410.762-410.762-183.906-410.762-410.762 183.906-410.761 410.762-410.76z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.131 512.070l-287.461 287.639c-12.889 12.889-33.783 12.889-46.662 0-12.888-12.88-12.889-33.773 0-46.663l241.061-241.067-242.242-242.242c-12.884-12.879-12.884-33.774 0-46.662 12.888-12.884 33.778-12.884 46.662 0l26.99 26.99-0.182 0.167 261.834 261.838zM553.167 512.070l-287.466 287.639c-12.889 12.889-33.783 12.889-46.662 0-12.888-12.88-12.889-33.773 0-46.663l241.061-241.067-242.242-242.242c-12.884-12.879-12.884-33.774 0-46.662 12.888-12.884 33.783-12.884 46.661 0l26.995 26.99-0.186 0.168 261.84 261.838zM553.167 512.070z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)