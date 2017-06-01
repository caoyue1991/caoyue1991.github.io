;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-rili" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M843.75 968.75h-687.5c-34.5 0-62.5-28-62.5-62.5v-687.5c0-34.5313 28-62.5 62.5-62.5h62.5v31.25c0 51.7813 41.9688 93.75 93.75 93.75 51.75 0 93.75-41.9688 93.75-93.75v-31.25h187.5v31.25c0 51.7813 42 93.75 93.75 93.75s93.75-41.9688 93.75-93.75v-31.25h62.5c34.5 0 62.5 27.9688 62.5 62.5v687.5c0 34.5-28 62.5-62.5 62.5zM843.75 375h-687.5v531.25h687.5v-531.25zM312.5 531.25h-93.75v-93.75h93.75v93.75zM312.5 687.5h-93.75v-93.75h93.75v93.75zM312.5 843.75h-93.75v-93.75h93.75v93.75zM468.75 531.25h-93.75v-93.75h93.75v93.75zM468.75 687.5h-93.75v-93.75h93.75v93.75zM468.75 843.75h-93.75v-93.75h93.75v93.75zM625 531.25h-93.75v-93.75h93.75v93.75zM625 687.5h-93.75v-93.75h93.75v93.75zM625 843.75h-93.75v-93.75h93.75v93.75zM781.25 531.25h-93.75v-93.75h93.75v93.75zM781.25 687.5h-93.75v-93.75h93.75v93.75zM781.25 843.75h-93.75v-93.75h93.75v93.75zM686.5313 250c-34 0-61.5313-27.5625-61.5313-61.5313v-64.4375c0-34 27.5313-61.5313 61.5313-61.5313s61.5313 27.5313 61.5313 61.5313v64.4375c0 33.9688-27.5313 61.5313-61.5313 61.5313zM311.5313 250c-34 0-61.5313-27.5625-61.5313-61.5313v-64.4375c0-34 27.5313-61.5313 61.5313-61.5313s61.5313 27.5313 61.5313 61.5313v64.4375c0 33.9688-27.5625 61.5313-61.5313 61.5313z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M635.963 288.089c-48.685 0-93.95 24.43-123.75 64.7-29.78-40.28-75.04-64.7-123.755-64.7-87.767 0-159.17 78.07-159.17 174.035 0 57.26 25.572 97.415 46.132 129.68 59.747 93.735 209.972 210.364 216.334 215.294 6.13 4.73 13.3 7.11 20.447 7.11 7.17 0 14.33-2.38 20.445-7.11 6.365-4.93 156.61-121.56 216.344-215.294 20.56-32.265 46.145-72.42 46.145-129.68C795.138 366.159 723.733 288.089 635.963 288.089L635.963 288.089 635.963 288.089zM719.928 569.658c-56.875 89.245-207.724 205.814-207.724 205.814s-150.83-116.57-207.719-205.814c-20.98-32.945-39.77-64.265-39.77-107.535 0-74.715 55.395-135.31 123.745-135.31 50.512 0 93.87 33.14 113.105 80.585l0-0.235 0.052 0c1.432 4.94 5.607 8.55 10.587 8.55 4.995 0 9.17-3.61 10.59-8.55l0.145 0c19.285-47.3 62.585-80.345 113.02-80.345 68.34 0 123.755 60.59 123.755 135.305C759.713 505.394 740.928 536.714 719.928 569.658L719.928 569.658 719.928 569.658z"  ></path>' +
    '' +
    '<path d="M512.21504 60.27264c-248.47872 0-449.91488 201.43616-449.91488 449.91488 0 248.48384 201.43616 449.91488 449.91488 449.91488 248.48384 0 449.91488-201.43104 449.91488-449.91488C962.12992 261.7088 760.69888 60.27264 512.21504 60.27264zM512.21504 931.08224c-232.448 0-420.8896-188.4416-420.8896-420.8896 0-232.45312 188.43648-420.8896 420.8896-420.8896s420.8896 188.43136 420.8896 420.8896C933.10464 742.64064 744.66304 931.08224 512.21504 931.08224z"  ></path>' +
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