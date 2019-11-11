if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(t) { "use strict";

    function e() { var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var i in e)
            if (void 0 !== t.style[i]) return { end: e[i] }; return !1 } t.fn.emulateTransitionEnd = function(e) { var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() { i = !0 }); var n = function() { i || t(o).trigger(t.support.transition.end) }; return setTimeout(n, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i) }) } var i = '[data-dismiss="alert"]',
        o = function(e) { t(e).on("click", i, this.close) };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() { a.detach().trigger("closed.bs.alert").remove() } var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")); var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i()) }; var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() { return t.fn.alert = n, this }, t(document).on("click.bs.alert.data-api", i, o.prototype.close) }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e) }) } var i = function(e, o) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1 };
    i.VERSION = "3.3.6", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) { var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() { o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i)) }, this), 0) }, i.prototype.toggle = function() { var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]'); if (e.length) { var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() { return t.fn.button = o, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) { var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) }) }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle() }) } var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) { switch (t.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return } t.preventDefault() } }, i.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) { var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1; if (o && !this.options.wrap) return e; var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length; return this.$items.eq(s) }, i.prototype.to = function(t) { var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t)) }, i.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() { if (!this.sliding) return this.slide("next") }, i.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, i.prototype.slide = function(e, o) { var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this; if (s.hasClass("active")) return this.sliding = !1; var h = s[0],
            d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r }); if (this.$element.trigger(d), !d.isDefaultPrevented()) { if (this.sliding = !0, a && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active") } var c = t.Event("slid.bs.carousel", { relatedTarget: h, direction: r }); return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() { s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(c) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this } }; var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() { return t.fn.carousel = o, this }; var n = function(i) { var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")); if (s.hasClass("carousel")) { var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault() } };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() { var i = t(this);
            e.call(i, i.data()) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) { var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""); return t(o) }

    function i(e) { return this.each(function() { var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]() }) } var o = function(e, i) { this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = { toggle: !0 }, o.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, o.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) { var s = t.Event("show.bs.collapse"); if (this.$element.trigger(s), !s.isDefaultPrevented()) { n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null)); var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var r = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return r.call(this); var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]) } } } }, o.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if (this.$element.trigger(e), !e.isDefaultPrevented()) { var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var n = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this) } } }, o.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, o.prototype.getParent = function() { return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) { var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n) }, this)).end() }, o.prototype.addAriaAndCollapsedClass = function(t, e) { var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i) }; var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() { return t.fn.collapse = n, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) { var n = t(this);
        n.attr("data-target") || o.preventDefault(); var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r) }) }(jQuery), + function(t) { "use strict";

    function e(e) { var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")); var o = i && t(i); return o && o.length ? o : e.parent() }

    function i(i) { i && 3 === i.which || (t(n).remove(), t(s).each(function() { var o = t(this),
                n = e(o),
                s = { relatedTarget: this };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s))))) })) }

    function o(e) { return this.each(function() { var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i) }) } var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    a.VERSION = "3.3.6", a.prototype.toggle = function(o) { var n = t(this); if (!n.is(".disabled, :disabled")) { var s = e(n),
                a = s.hasClass("open"); if (i(), !a) { "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i); var r = { relatedTarget: this }; if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r)) } return !1 } }, a.prototype.keydown = function(i) { if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) { var o = t(this); if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) { var n = e(o),
                    a = n.hasClass("open"); if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click"); var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r); if (l.length) { var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus") } } } }; var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = r, this }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown) }(jQuery), + function(t) { "use strict";

    function e(e, o) { return this.each(function() { var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o) }) } var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) { var o = this,
            n = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { o.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus(); var s = t.Event("shown.bs.modal", { relatedTarget: e });
            n ? o.$dialog.one("bsTransitionEnd", function() { o.$element.trigger("focus").trigger(s) }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() { var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) { var o = this,
            n = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var s = t.support.transition && n; if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var a = function() { o.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a() } else e && e() }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() { var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() { var t = window.innerWidth; if (!t) { var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left) } this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() { var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() { var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t); var e = t.offsetWidth - t.clientWidth; return this.$body[0].removeChild(t), e }; var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() { return t.fn.modal = o, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) { var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(n) && n }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", function() { o.is(":visible") && o.trigger("focus") }) }), e.call(s, a, this) }) }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]()) }) } var i = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, o) { if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var n = this.options.trigger.split(" "), s = n.length; s--;) { var a = n[s]; if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) { var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } } this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() { var e = {},
            i = this.getDefaults(); return this._options && t.each(this._options, function(t, o) { i[t] != o && (e[t] = o) }), e }, i.prototype.enter = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, i.prototype.isInStateTrue = function() { for (var t in this.inState)
            if (this.inState[t]) return !0; return !1 }, i.prototype.leave = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }, i.prototype.show = function() { var e = t.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(e); var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (e.isDefaultPrevented() || !o) return; var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade"); var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight; if (h) { var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r) } var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r); var m = function() { var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n) };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m() } }, i.prototype.applyPlacement = function(e, i) { var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({ using: function(t) { o.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), o.addClass("in"); var l = o[0].offsetWidth,
            h = o[0].offsetHeight; "top" == i && h != s && (e.top = e.top + s - h); var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top; var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() { var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function(e) {
        function o() { "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e() } var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type); if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this }, i.prototype.fixTitle = function() { var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() { return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element; var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top })); var s = o ? { top: 0, left: 0 } : e.offset(),
            a = { scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            r = o ? { width: t(window).width(), height: t(window).height() } : null; return t.extend({}, n, a, r, s) }, i.prototype.getCalculatedOffset = function(t, e, i, o) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - o / 2, left: e.left - i } : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) { var n = { top: 0, left: 0 }; if (!this.$viewport) return n; var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport); if (/right|left/.test(t)) { var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l) } else { var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d) } return n }, i.prototype.getTitle = function() { var t, e = this.$element,
            i = this.options; return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, i.prototype.tip = function() { if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) { var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() { var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null }) }; var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = o, this } }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]()) }) } var i = function(t, e) { this.init("popover", t, e) }; if (!t.fn.tooltip) throw new Error("Popover%20requires%20tooltip.html");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.setContent = function() { var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, i.prototype.getContent = function() { var t = this.$element,
            e = this.options; return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() { return t.fn.popover = o, this } }(jQuery), + function(t) {
    "use strict";

    function e(i, o) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

    function i(i) { return this.each(function() { var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]() }) } e.VERSION = "3.3.6", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() { var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n); return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null }).sort(function(t, e) { return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) }) }, e.prototype.process = function() { var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget; if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t); if (a && e < n[0]) return this.activeTarget = null, this.clear(); for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t]) }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
            o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = o, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() { var e = t(this);
            i.call(e, e.data()) }) })
}(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]() }) } var i = function(e) { this.element = t(e) };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() { var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target"); if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) { var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                a = t.Event("show.bs.tab", { relatedTarget: n[0] }); if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() { n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] }) }) } } }, i.prototype.activate = function(e, o, n) {
        function s() { a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n() } var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in") }; var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() { return t.fn.tab = o, this }; var n = function(i) { i.preventDefault(), e.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n) }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]() }) } var i = function(e, o) { this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, o) { var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height(); if (null != i && "top" == this.affixed) return n < i && "top"; if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom"; var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e; return null != i && n <= i ? "top" : null != o && l + h >= t - o && "bottom" }, i.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix"); var t = this.$target.scrollTop(),
            e = this.$element.offset(); return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height()); "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element)); var r = this.getState(a, e, n, s); if (this.affixed != r) { null != this.unpin && this.$element.css("top", ""); var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix"); if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == r && this.$element.offset({ top: a - e - s }) } }; var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() { return t.fn.affix = o, this }, t(window).on("load", function() { t('[data-spy="affix"]').each(function() { var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o) }) }) }(jQuery);

function log(e) { window.console && showLog && console.log(e) }

function css_browser_selector(e) {
    function i() { var e = window.outerWidth || k.clientWidth,
            i = window.outerHeight || k.clientHeight;
        n.orientation = e < i ? "portrait" : "landscape", k.className = k.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, ""); for (var o = t - 1; o >= 0; o--)
            if (e >= s[o]) { n.maxw = s[o]; break } widthClasses = ""; for (var a in n) widthClasses += " " + a + "_" + n[a]; return k.className = k.className + widthClasses, widthClasses }

    function o() { var e = window.devicePixelRatio > 1;
        e ? k.className += " retina" : k.className += " non-retina" }

    function a() { window.navigator.standalone && (k.className += " ios-standalone") } var n = {},
        s = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
        t = s.length,
        r = e.toLowerCase(),
        p = function(e) { return RegExp(e, "i").test(r) },
        d = function(e, i) { i = i.replace(".", "_"); for (var o = i.indexOf("_"), a = ""; o > 0;) a += " " + e + i.substring(0, o), o = i.indexOf("_", o + 1); return a += " " + e + i },
        g = "gecko",
        l = "webkit",
        c = "chrome",
        x = "firefox",
        w = "safari",
        E = "opera",
        R = "desktop",
        $ = "mobile",
        _ = "android",
        m = "blackberry",
        b = "lang_",
        f = "device_",
        k = document.documentElement,
        u = [!/opera|webtv/i.test(r) && /msie\s(\d+)/.test(r) ? "ie ie" + (/trident\/4\.0/.test(r) ? "8" : RegExp.$1) : p("firefox/index.html") ? g + " " + x + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + x + RegExp.$2 + " " + x + RegExp.$2 + "_" + RegExp.$4 : "") : p("gecko/index.html") ? g : p("opera") ? E + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + E + RegExp.$2 + " " + E + RegExp.$2 + "_" + RegExp.$4 : /opera(\s|\/)(\d+)\.(\d+)/.test(r) ? " " + E + RegExp.$2 + " " + E + RegExp.$2 + "_" + RegExp.$3 : "") : p("konqueror") ? "konqueror" : p("blackberry") ? m + (/Version\/(\d+)(\.(\d+)+)/i.test(r) ? " " + m + RegExp.$1 + " " + m + RegExp.$1 + RegExp.$2.replace(".", "_") : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(r) ? " " + m + RegExp.$2 + (RegExp.$3 ? " " + m + RegExp.$2 + RegExp.$3 : "") : "") : p("android") ? _ + (/Version\/(\d+)(\.(\d+))+/i.test(r) ? " " + _ + RegExp.$1 + " " + _ + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android (.+); (.+) Build/i.test(r) ? " " + f + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_") : "") : p("chrome") ? l + " " + c + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + c + RegExp.$2 + (RegExp.$4 > 0 ? " " + c + RegExp.$2 + "_" + RegExp.$4 : "") : "") : p("iron") ? l + " iron" : p("applewebkit/index.html") ? l + " " + w + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + w + RegExp.$2 + " " + w + RegExp.$2 + RegExp.$3.replace(".", "_") : / Safari\/(\d+)/i.test(r) ? "419" == RegExp.$1 || "417" == RegExp.$1 || "416" == RegExp.$1 || "412" == RegExp.$1 ? " " + w + "2_0" : "312" == RegExp.$1 ? " " + w + "1_3" : "125" == RegExp.$1 ? " " + w + "1_2" : "85" == RegExp.$1 ? " " + w + "1_0" : "" : "") : p("mozilla/index.html") ? g : "", p("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? $ : R, p("j2me") ? "j2me" : p("ipad|ipod|iphone") ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(r) ? "ios" + d("ios", RegExp.$2) : "") + " " + (/(ip(ad|od|hone))/gi.test(r) ? RegExp.$1 : "") : p("playbook") ? "playbook" : p("kindle|silk") ? "kindle" : p("playbook") ? "playbook" : p("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(r) ? " mac" + RegExp.$2 + " mac" + RegExp.$1.replace(".", "_") : "") : p("win") ? "win" + (p("windows nt 6.2") ? " win8" : p("windows nt 6.1") ? " win7" : p("windows nt 6.0") ? " vista" : p("windows nt 5.2") || p("windows nt 5.1") ? " win_xp" : p("windows nt 5.0") ? " win_2k" : p("windows nt 4.0") || p("WinNT4.0") ? " win_nt" : "") : p("freebsd") ? "freebsd" : p("x11|linux") ? "linux" : "", /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(r) ? (b + RegExp.$2).replace("-", "_") + ("" != RegExp.$3 ? (" " + b + RegExp.$1).replace("-", "_") : "") : "", p("ipad|iphone|ipod") && !p("safari") ? "ipad_app" : ""];
    window.onresize = i, i(), o(), a(); var h = u.join(" ") + " js "; return k.className = (h + k.className.replace(/\b(no[-|_]?)?js\b/g, "")).replace(/^ /, "").replace(/ +/g, " "), h } showLog = !0, css_browser_selector(navigator.userAgent);
if (window.FormValidation = { AddOn: {}, Framework: {}, I18n: {}, Validator: {} }, "undefined" == typeof jQuery) throw new Error("FormValidation requires jQuery");
! function(t) { var e = t.fn.jquery.split(" ")[0].split("."); if (+e[0] < 2 && +e[1] < 9 || 1 === +e[0] && 9 === +e[1] && +e[2] < 1) throw new Error("FormValidation requires jQuery version 1.9.1 or higher") }(jQuery),
function(t) {
    FormValidation.Base = function(e, a, i) { this.$form = t(e), this.options = t.extend({}, t.fn.formValidation.DEFAULT_OPTIONS, a), this._namespace = i || "fv", this.$invalidFields = t([]), this.$submitButton = null, this.$hiddenButton = null, this.STATUS_NOT_VALIDATED = "NOT_VALIDATED", this.STATUS_VALIDATING = "VALIDATING", this.STATUS_INVALID = "INVALID", this.STATUS_VALID = "VALID"; var r = function() { for (var t = 3, e = document.createElement("div"), a = e.all || []; e.innerHTML = "<!--[if gt IE " + ++t + "]><br><![endif]-->", a[0];); return t > 4 ? t : !t }(),
            n = document.createElement("div");
        this._changeEvent = 9 !== r && "oninput" in n ? "input" : "keyup", this._submitIfValid = null, this._cacheFields = {}, this._init() }, FormValidation.Base.prototype = { constructor: FormValidation.Base, _exceedThreshold: function(e) { var a = this._namespace,
                i = e.attr("data-" + a + "-field"),
                r = this.options.fields[i].threshold || this.options.threshold; if (!r) return !0; var n = t.inArray(e.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) !== -1; return n || e.val().length >= r }, _init: function() { var e = this,
                a = this._namespace,
                i = { addOns: {}, autoFocus: this.$form.attr("data-" + a + "-autofocus"), button: { selector: this.$form.attr("data-" + a + "-button-selector") || this.$form.attr("data-" + a + "-submitbuttons"), disabled: this.$form.attr("data-" + a + "-button-disabled") }, control: { valid: this.$form.attr("data-" + a + "-control-valid"), invalid: this.$form.attr("data-" + a + "-control-invalid") }, err: { clazz: this.$form.attr("data-" + a + "-err-clazz"), container: this.$form.attr("data-" + a + "-err-container") || this.$form.attr("data-" + a + "-container"), parent: this.$form.attr("data-" + a + "-err-parent") }, events: { formInit: this.$form.attr("data-" + a + "-events-form-init"), formError: this.$form.attr("data-" + a + "-events-form-error"), formSuccess: this.$form.attr("data-" + a + "-events-form-success"), fieldAdded: this.$form.attr("data-" + a + "-events-field-added"), fieldRemoved: this.$form.attr("data-" + a + "-events-field-removed"), fieldInit: this.$form.attr("data-" + a + "-events-field-init"), fieldError: this.$form.attr("data-" + a + "-events-field-error"), fieldSuccess: this.$form.attr("data-" + a + "-events-field-success"), fieldStatus: this.$form.attr("data-" + a + "-events-field-status"), localeChanged: this.$form.attr("data-" + a + "-events-locale-changed"), validatorError: this.$form.attr("data-" + a + "-events-validator-error"), validatorSuccess: this.$form.attr("data-" + a + "-events-validator-success") }, excluded: this.$form.attr("data-" + a + "-excluded"), icon: { valid: this.$form.attr("data-" + a + "-icon-valid") || this.$form.attr("data-" + a + "-feedbackicons-valid"), invalid: this.$form.attr("data-" + a + "-icon-invalid") || this.$form.attr("data-" + a + "-feedbackicons-invalid"), validating: this.$form.attr("data-" + a + "-icon-validating") || this.$form.attr("data-" + a + "-feedbackicons-validating"), feedback: this.$form.attr("data-" + a + "-icon-feedback") }, live: this.$form.attr("data-" + a + "-live"), locale: this.$form.attr("data-" + a + "-locale"), message: this.$form.attr("data-" + a + "-message"), onError: this.$form.attr("data-" + a + "-onerror"), onSuccess: this.$form.attr("data-" + a + "-onsuccess"), row: { selector: this.$form.attr("data-" + a + "-row-selector") || this.$form.attr("data-" + a + "-group"), valid: this.$form.attr("data-" + a + "-row-valid"), invalid: this.$form.attr("data-" + a + "-row-invalid"), feedback: this.$form.attr("data-" + a + "-row-feedback") }, threshold: this.$form.attr("data-" + a + "-threshold"), trigger: this.$form.attr("data-" + a + "-trigger"), verbose: this.$form.attr("data-" + a + "-verbose"), fields: {} };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit." + a, function(t) { t.preventDefault(), e.validate() }).on("click." + a, this.options.button.selector, function() { e.$submitButton = t(this), e._submitIfValid = !0 }).find("[name], [data-" + a + "-field]").each(function() { var r = t(this),
                    n = r.attr("name") || r.attr("data-" + a + "-field"),
                    s = e._parseOptions(r);
                s && (r.attr("data-" + a + "-field", n), i.fields[n] = t.extend({}, s, i.fields[n])) }), this.options = t.extend(!0, this.options, i), "string" == typeof this.options.err.parent && (this.options.err.parent = new RegExp(this.options.err.parent)), this.options.container && (this.options.err.container = this.options.container, delete this.options.container), this.options.feedbackIcons && (this.options.icon = t.extend(!0, this.options.icon, this.options.feedbackIcons), delete this.options.feedbackIcons), this.options.group && (this.options.row.selector = this.options.group, delete this.options.group), this.options.submitButtons && (this.options.button.selector = this.options.submitButtons, delete this.options.submitButtons), FormValidation.I18n[this.options.locale] || (this.options.locale = t.fn.formValidation.DEFAULT_OPTIONS.locale), this.options = t.extend(!0, this.options, { addOns: this._parseAddOnOptions() }), this.$hiddenButton = t("<button/>").attr("type", "submit").prependTo(this.$form).addClass("fv-hidden-submit").css({ display: "none", width: 0, height: 0 }), this.$form.on("click." + this._namespace, '[type="submit"]', function(a) { if (!a.isDefaultPrevented()) { var i = t(a.target),
                        r = i.is('[type="submit"]') ? i.eq(0) : i.parent('[type="submit"]').eq(0);!e.options.button.selector || r.is(e.options.button.selector) || r.is(e.$hiddenButton) || e.$form.off("submit." + e._namespace).submit() } }); for (var r in this.options.fields) this._initField(r); for (var n in this.options.addOns) "function" == typeof FormValidation.AddOn[n].init && FormValidation.AddOn[n].init(this, this.options.addOns[n]);
            this.$form.trigger(t.Event(this.options.events.formInit), { bv: this, fv: this, options: this.options }), this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(t) { FormValidation.Helper.call(e.options.onSuccess, [t]) }), this.options.onError && this.$form.on(this.options.events.formError, function(t) { FormValidation.Helper.call(e.options.onError, [t]) }) }, _initField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field"); break;
                case "string":
                    i = this.getFieldElements(e), i.attr("data-" + a + "-field", e) } if (0 !== i.length && null !== this.options.fields[e] && null !== this.options.fields[e].validators) { var r; for (r in this.options.fields[e].validators) FormValidation.Validator[r] || delete this.options.fields[e].validators[r];
                null === this.options.fields[e].enabled && (this.options.fields[e].enabled = !0); for (var n = this, s = i.length, o = i.attr("type"), l = 1 === s || "radio" === o || "checkbox" === o, d = this._getFieldTrigger(i.eq(0)), u = t.map(d, function(t) { return t + ".update." + a }).join(" "), f = 0; f < s; f++) { var c = i.eq(f),
                        h = this.options.fields[e].row || this.options.row.selector,
                        m = c.closest(h),
                        p = "function" == typeof(this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, c, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container,
                        v = p && "tooltip" !== p && "popover" !== p ? t(p) : this._getMessageContainer(c, h);
                    p && "tooltip" !== p && "popover" !== p && v.addClass(this.options.err.clazz), v.find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + a + "-validator][data-" + a + '-for="' + e + '"]').remove(), m.find("i[data-" + a + '-icon-for="' + e + '"]').remove(), c.off(u).on(u, function() { n.updateStatus(t(this), n.STATUS_NOT_VALIDATED) }), c.data(a + ".messages", v); for (r in this.options.fields[e].validators) c.data(a + ".result." + r, this.STATUS_NOT_VALIDATED), l && f !== s - 1 || t("<small/>").css("display", "none").addClass(this.options.err.clazz).attr("data-" + a + "-validator", r).attr("data-" + a + "-for", e).attr("data-" + a + "-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(e, r)).appendTo(v), "function" == typeof FormValidation.Validator[r].init && FormValidation.Validator[r].init(this, c, this.options.fields[e].validators[r]); if (this.options.fields[e].icon !== !1 && "false" !== this.options.fields[e].icon && this.options.icon && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating && (!l || f === s - 1)) { m.addClass(this.options.row.feedback); var g = t("<i/>").css("display", "none").addClass(this.options.icon.feedback).attr("data-" + a + "-icon-for", e).insertAfter(c);
                        (l ? i : c).data(a + ".icon", g), "tooltip" !== p && "popover" !== p || ((l ? i : c).on(this.options.events.fieldError, function() { m.addClass("fv-has-tooltip") }).on(this.options.events.fieldSuccess, function() { m.removeClass("fv-has-tooltip") }), c.off("focus.container." + a).on("focus.container." + a, function() { n._showTooltip(c, p) }).off("blur.container." + a).on("blur.container." + a, function() { n._hideTooltip(c, p) })), "string" == typeof this.options.fields[e].icon && "true" !== this.options.fields[e].icon ? g.appendTo(t(this.options.fields[e].icon)) : this._fixIcon(c, g) } } i.on(this.options.events.fieldSuccess, function(t, e) { var a = n.getOptions(e.field, null, "onSuccess");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.fieldError, function(t, e) { var a = n.getOptions(e.field, null, "onError");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.fieldStatus, function(t, e) { var a = n.getOptions(e.field, null, "onStatus");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.validatorError, function(t, e) { var a = n.getOptions(e.field, e.validator, "onError");
                    a && FormValidation.Helper.call(a, [t, e]) }).on(this.options.events.validatorSuccess, function(t, e) { var a = n.getOptions(e.field, e.validator, "onSuccess");
                    a && FormValidation.Helper.call(a, [t, e]) }), this.onLiveChange(i, "live", function() { n._exceedThreshold(t(this)) && n.validateField(t(this)) }), i.trigger(t.Event(this.options.events.fieldInit), { bv: this, fv: this, field: e, element: i }) } }, _isExcluded: function(e) { var a = this._namespace,
                i = e.attr("data-" + a + "-excluded"),
                r = e.attr("data-" + a + "-field") || e.attr("name"); switch (!0) {
                case !!r && this.options.fields && this.options.fields[r] && ("true" === this.options.fields[r].excluded || this.options.fields[r].excluded === !0):
                case "true" === i:
                case "" === i:
                    return !0;
                case !!r && this.options.fields && this.options.fields[r] && ("false" === this.options.fields[r].excluded || this.options.fields[r].excluded === !1):
                case "false" === i:
                    return !1;
                default:
                    if (this.options.excluded) { "string" == typeof this.options.excluded && (this.options.excluded = t.map(this.options.excluded.split(","), function(e) { return t.trim(e) })); for (var n = this.options.excluded.length, s = 0; s < n; s++)
                            if ("string" == typeof this.options.excluded[s] && e.is(this.options.excluded[s]) || "function" == typeof this.options.excluded[s] && this.options.excluded[s].call(this, e, this) === !0) return !0 } return !1 } }, _getFieldTrigger: function(t) { var e = this._namespace,
                a = t.data(e + ".trigger"); if (a) return a; var i = t.attr("type"),
                r = t.attr("data-" + e + "-field"),
                n = "radio" === i || "checkbox" === i || "file" === i || "SELECT" === t.get(0).tagName ? "change" : this._changeEvent; return a = ((this.options.fields[r] ? this.options.fields[r].trigger : null) || this.options.trigger || n).split(" "), t.data(e + ".trigger", a), a }, _getMessage: function(t, e) { if (!(this.options.fields[t] && FormValidation.Validator[e] && this.options.fields[t].validators && this.options.fields[t].validators[e])) return ""; switch (!0) {
                case !!this.options.fields[t].validators[e].message:
                    return this.options.fields[t].validators[e].message;
                case !!this.options.fields[t].message:
                    return this.options.fields[t].message;
                case !!FormValidation.I18n[this.options.locale][e]["default"]:
                    return FormValidation.I18n[this.options.locale][e]["default"];
                default:
                    return this.options.message } }, _getMessageContainer: function(t, e) { if (!this.options.err.parent) throw new Error("The err.parent option is not defined"); var a = t.parent(); if (a.is(e)) return a; var i = a.attr("class"); return i && this.options.err.parent.test(i) ? a : this._getMessageContainer(a, e) }, _parseAddOnOptions: function() { var t = this._namespace,
                e = this.$form.attr("data-" + t + "-addons"),
                a = this.options.addOns || {}; if (e) { e = e.replace(/\s/g, "").split(","); for (var i = 0; i < e.length; i++) a[e[i]] || (a[e[i]] = {}) } var r, n, s, o; for (r in a)
                if (FormValidation.AddOn[r]) { if (n = FormValidation.AddOn[r].html5Attributes)
                        for (s in n) o = this.$form.attr("data-" + t + "-addons-" + r.toLowerCase() + "-" + s.toLowerCase()), o && (a[r][n[s]] = o) } else delete a[r]; return a }, _parseOptions: function(e) { var a, i, r, n, s, o, l, d, u, f = this._namespace,
                c = e.attr("name") || e.attr("data-" + f + "-field"),
                h = {}; for (i in FormValidation.Validator)
                if (a = FormValidation.Validator[i], r = "data-" + f + "-" + i.toLowerCase(), n = e.attr(r) + "", u = "function" == typeof a.enableByHtml5 ? a.enableByHtml5(e) : null, u && "false" !== n || u !== !0 && ("" === n || "true" === n || r === n.toLowerCase())) { a.html5Attributes = t.extend({}, { message: "message", onerror: "onError", onsuccess: "onSuccess", transformer: "transformer" }, a.html5Attributes), h[i] = t.extend({}, u === !0 ? {} : u, h[i]); for (d in a.html5Attributes) s = a.html5Attributes[d], o = "data-" + f + "-" + i.toLowerCase() + "-" + d, l = e.attr(o), l && ("true" === l || o === l.toLowerCase() ? l = !0 : "false" === l && (l = !1), h[i][s] = l) } var m = { autoFocus: e.attr("data-" + f + "-autofocus"), err: e.attr("data-" + f + "-err-container") || e.attr("data-" + f + "-container"), excluded: e.attr("data-" + f + "-excluded"), icon: e.attr("data-" + f + "-icon") || e.attr("data-" + f + "-feedbackicons") || (this.options.fields && this.options.fields[c] ? this.options.fields[c].feedbackIcons : null), message: e.attr("data-" + f + "-message"), onError: e.attr("data-" + f + "-onerror"), onStatus: e.attr("data-" + f + "-onstatus"), onSuccess: e.attr("data-" + f + "-onsuccess"), row: e.attr("data-" + f + "-row") || e.attr("data-" + f + "-group") || (this.options.fields && this.options.fields[c] ? this.options.fields[c].group : null), selector: e.attr("data-" + f + "-selector"), threshold: e.attr("data-" + f + "-threshold"), transformer: e.attr("data-" + f + "-transformer"), trigger: e.attr("data-" + f + "-trigger"), verbose: e.attr("data-" + f + "-verbose"), validators: h },
                p = t.isEmptyObject(m),
                v = t.isEmptyObject(h); return !v || !p && this.options.fields && this.options.fields[c] ? (m.validators = h, m) : null }, _submit: function() { var e = this.isValid(),
                a = e ? this.options.events.formSuccess : this.options.events.formError,
                i = t.Event(a);
            this.$form.trigger(i), this.$submitButton && (e ? this._onSuccess(i) : this._onError(i)) }, _onError: function(e) { if (!e.isDefaultPrevented()) { if ("submitted" === this.options.live) { this.options.live = "enabled"; var a = this; for (var i in this.options.fields) ! function(e) { var i = a.getFieldElements(e);
                        i.length && a.onLiveChange(i, "live", function() { a._exceedThreshold(t(this)) && a.validateField(t(this)) }) }(i) } for (var r = this._namespace, n = 0; n < this.$invalidFields.length; n++) { var s = this.$invalidFields.eq(n),
                        o = this.isOptionEnabled(s.attr("data-" + r + "-field"), "autoFocus"); if (o) { s.focus(); break } } } }, _onFieldValidated: function(e, a) { var i = this._namespace,
                r = e.attr("data-" + i + "-field"),
                n = this.options.fields[r].validators,
                s = {},
                o = 0,
                l = { bv: this, fv: this, field: r, element: e, validator: a, result: e.data(i + ".response." + a) }; if (a) switch (e.data(i + ".result." + a)) {
                case this.STATUS_INVALID:
                    e.trigger(t.Event(this.options.events.validatorError), l); break;
                case this.STATUS_VALID:
                    e.trigger(t.Event(this.options.events.validatorSuccess), l) } s[this.STATUS_NOT_VALIDATED] = 0, s[this.STATUS_VALIDATING] = 0, s[this.STATUS_INVALID] = 0, s[this.STATUS_VALID] = 0; for (var d in n)
                if (n[d].enabled !== !1) { o++; var u = e.data(i + ".result." + d);
                    u && s[u]++ } s[this.STATUS_VALID] === o ? (this.$invalidFields = this.$invalidFields.not(e), e.trigger(t.Event(this.options.events.fieldSuccess), l)) : (0 === s[this.STATUS_NOT_VALIDATED] || !this.isOptionEnabled(r, "verbose")) && 0 === s[this.STATUS_VALIDATING] && s[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(e), e.trigger(t.Event(this.options.events.fieldError), l)) }, _onSuccess: function(t) { t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit() }, _fixIcon: function(t, e) {}, _createTooltip: function(t, e, a) {}, _destroyTooltip: function(t, e) {}, _hideTooltip: function(t, e) {}, _showTooltip: function(t, e) {}, defaultSubmit: function() { var e = this._namespace;
            this.$submitButton && t("<input/>").attr({ type: "hidden", name: this.$submitButton.attr("name") }).attr("data-" + e + "-submit-hidden", "").val(this.$submitButton.val()).appendTo(this.$form), this.$form.off("submit." + e).submit() }, disableSubmitButtons: function(t) { return t ? "disabled" !== this.options.live && this.$form.find(this.options.button.selector).attr("disabled", "disabled").addClass(this.options.button.disabled) : this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled), this }, getFieldElements: function(e) { if (!this._cacheFields[e])
                if (this.options.fields[e] && this.options.fields[e].selector) { var a = this.$form.find(this.options.fields[e].selector);
                    this._cacheFields[e] = a.length ? a : t(this.options.fields[e].selector) } else this._cacheFields[e] = this.$form.find('[name="' + e + '"]'); return this._cacheFields[e] }, getFieldValue: function(t, e) { var a, i = this._namespace; if ("string" == typeof t) { if (a = this.getFieldElements(t), 0 === a.length) return null } else a = t, t = a.attr("data-" + i + "-field"); if (!t || !this.options.fields[t]) return a.val(); var r = (this.options.fields[t].validators && this.options.fields[t].validators[e] ? this.options.fields[t].validators[e].transformer : null) || this.options.fields[t].transformer; return r ? FormValidation.Helper.call(r, [a, e]) : a.val() }, getNamespace: function() { return this._namespace }, getOptions: function(t, e, a) { var i = this._namespace; if (!t) return a ? this.options[a] : this.options; if ("object" == typeof t && (t = t.attr("data-" + i + "-field")), !this.options.fields[t]) return null; var r = this.options.fields[t]; return e ? r.validators && r.validators[e] ? a ? r.validators[e][a] : r.validators[e] : null : a ? r[a] : r }, getStatus: function(t, e) { var a = this._namespace; switch (typeof t) {
                case "object":
                    return t.data(a + ".result." + e);
                case "string":
                default:
                    return this.getFieldElements(t).eq(0).data(a + ".result." + e) } }, isOptionEnabled: function(t, e) { return !(!this.options.fields[t] || "true" !== this.options.fields[t][e] && this.options.fields[t][e] !== !0) || (!this.options.fields[t] || "false" !== this.options.fields[t][e] && this.options.fields[t][e] !== !1) && ("true" === this.options[e] || this.options[e] === !0) }, isValid: function() { for (var t in this.options.fields)
                if (!this.isValidField(t)) return !1; return !0 }, isValidContainer: function(e) { var a = this,
                i = this._namespace,
                r = {},
                n = "string" == typeof e ? t(e) : e; if (0 === n.length) return !0;
            n.find("[data-" + i + "-field]").each(function() { var e = t(this),
                    n = e.attr("data-" + i + "-field");
                a._isExcluded(e) || r[n] || (r[n] = e) }); for (var s in r) { var o = r[s],
                    l = o.data(i + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + i + "-validator][data-" + i + '-for="' + s + '"]'); if (l.filter("[data-" + i + '-result="' + this.STATUS_INVALID + '"]').length > 0) return !1; if (l.filter("[data-" + i + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0 || l.filter("[data-" + i + '-result="' + this.STATUS_VALIDATING + '"]').length > 0) return null } return !0 }, isValidField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field"); break;
                case "string":
                    i = this.getFieldElements(e) } if (0 === i.length || !this.options.fields[e] || this.options.fields[e].enabled === !1) return !0; for (var r, n, s, o = i.attr("type"), l = "radio" === o || "checkbox" === o ? 1 : i.length, d = 0; d < l; d++)
                if (r = i.eq(d), !this._isExcluded(r))
                    for (n in this.options.fields[e].validators)
                        if (this.options.fields[e].validators[n].enabled !== !1 && (s = r.data(a + ".result." + n), s !== this.STATUS_VALID)) return !1; return !0 }, offLiveChange: function(e, a) { if (null === e || 0 === e.length) return this; var i = this._namespace,
                r = this._getFieldTrigger(e.eq(0)),
                n = t.map(r, function(t) { return t + "." + a + "." + i }).join(" "); return e.off(n), this }, onLiveChange: function(e, a, i) { if (null === e || 0 === e.length) return this; var r = this._namespace,
                n = this._getFieldTrigger(e.eq(0)),
                s = t.map(n, function(t) { return t + "." + a + "." + r }).join(" "); switch (this.options.live) {
                case "submitted":
                    break;
                case "disabled":
                    e.off(s); break;
                case "enabled":
                default:
                    e.off(s).on(s, function(t) { i.apply(this, arguments) }) } return this }, updateMessage: function(e, a, i) { var r = this,
                n = this._namespace,
                s = t([]); switch (typeof e) {
                case "object":
                    s = e, e = e.attr("data-" + n + "-field"); break;
                case "string":
                    s = this.getFieldElements(e) } s.each(function() { t(this).data(n + ".messages").find("." + r.options.err.clazz + "[data-" + n + '-validator="' + a + '"][data-' + n + '-for="' + e + '"]').html(i) }) }, updateStatus: function(e, a, i) { var r = this._namespace,
                n = t([]); switch (typeof e) {
                case "object":
                    n = e, e = e.attr("data-" + r + "-field"); break;
                case "string":
                    n = this.getFieldElements(e) } if (!e || !this.options.fields[e]) return this;
            a === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1); for (var s = this, o = n.attr("type"), l = this.options.fields[e].row || this.options.row.selector, d = "radio" === o || "checkbox" === o ? 1 : n.length, u = 0; u < d; u++) { var f = n.eq(u); if (!this._isExcluded(f)) { var c = f.closest(l),
                        h = f.data(r + ".messages"),
                        m = h.find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + r + "-validator][data-" + r + '-for="' + e + '"]'),
                        p = i ? m.filter("[data-" + r + '-validator="' + i + '"]') : m,
                        v = f.data(r + ".icon"),
                        g = "function" == typeof(this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, f, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container,
                        A = null; if (i) f.data(r + ".result." + i, a);
                    else
                        for (var b in this.options.fields[e].validators) f.data(r + ".result." + b, a); switch (p.attr("data-" + r + "-result", a), a) {
                        case this.STATUS_VALIDATING:
                            A = null, this.disableSubmitButtons(!0), f.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), c.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show(); break;
                        case this.STATUS_INVALID:
                            A = !1, this.disableSubmitButtons(!0), f.removeClass(this.options.control.valid).addClass(this.options.control.invalid), c.removeClass(this.options.row.valid).addClass(this.options.row.invalid), v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show(); break;
                        case this.STATUS_VALID:
                            if (A = 0 === m.filter("[data-" + r + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? m.filter("[data-" + r + '-result="' + this.STATUS_VALID + '"]').length === m.length : null, f.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), null !== A && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !A), f.addClass(A ? this.options.control.valid : this.options.control.invalid), v)) { var I = m.filter("[data-" + r + '-result="' + this.STATUS_VALIDATING + '"]').length > 0;
                                v.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid).addClass(A ? this.options.icon.valid : I ? this.options.icon.validating : this.options.icon.invalid).show() } var F = this.isValidContainer(c);
                            null !== F && c.removeClass(this.options.row.valid).removeClass(this.options.row.invalid).addClass(F ? this.options.row.valid : this.options.row.invalid); break;
                        case this.STATUS_NOT_VALIDATED:
                        default:
                            A = null, this.disableSubmitButtons(!1), f.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), c.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide() }!v || "tooltip" !== g && "popover" !== g ? a === this.STATUS_INVALID ? p.show() : p.hide() : A === !1 ? this._createTooltip(f, m.filter("[data-" + r + '-result="' + s.STATUS_INVALID + '"]').eq(0).html(), g) : this._destroyTooltip(f, g), f.trigger(t.Event(this.options.events.fieldStatus), { bv: this, fv: this, field: e, element: f, status: a }), this._onFieldValidated(f, i) } } return this }, validate: function() { if (!this.options.fields) return this;
            this.disableSubmitButtons(!0), this._submitIfValid = !1; for (var t in this.options.fields) this.validateField(t); return this._submit(), this._submitIfValid = !0, this }, validateField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field"); break;
                case "string":
                    i = this.getFieldElements(e) } if (0 === i.length || !this.options.fields[e] || this.options.fields[e].enabled === !1) return this; for (var r, n, s = this, o = i.attr("type"), l = "radio" === o || "checkbox" === o ? 1 : i.length, d = "radio" === o || "checkbox" === o, u = this.options.fields[e].validators, f = this.isOptionEnabled(e, "verbose"), c = 0; c < l; c++) { var h = i.eq(c); if (!this._isExcluded(h)) { var m = !1; for (r in u) { if (h.data(a + ".dfs." + r) && h.data(a + ".dfs." + r).reject(), m) break; var p = h.data(a + ".result." + r); if (p !== this.STATUS_VALID && p !== this.STATUS_INVALID)
                            if (u[r].enabled !== !1) { if (h.data(a + ".result." + r, this.STATUS_VALIDATING), n = FormValidation.Validator[r].validate(this, h, u[r]), "object" == typeof n && n.resolve) this.updateStatus(d ? e : h, this.STATUS_VALIDATING, r), h.data(a + ".dfs." + r, n), n.done(function(t, e, i) { t.removeData(a + ".dfs." + e).data(a + ".response." + e, i), i.message && s.updateMessage(t, e, i.message), s.updateStatus(d ? t.attr("data-" + a + "-field") : t, i.valid ? s.STATUS_VALID : s.STATUS_INVALID, e), i.valid && s._submitIfValid === !0 ? s._submit() : i.valid || f || (m = !0) });
                                else if ("object" == typeof n && void 0 !== n.valid) { if (h.data(a + ".response." + r, n), n.message && this.updateMessage(d ? e : h, r, n.message), this.updateStatus(d ? e : h, n.valid ? this.STATUS_VALID : this.STATUS_INVALID, r), !n.valid && !f) break } else if ("boolean" == typeof n && (h.data(a + ".response." + r, n), this.updateStatus(d ? e : h, n ? this.STATUS_VALID : this.STATUS_INVALID, r), !n && !f)) break } else this.updateStatus(d ? e : h, this.STATUS_VALID, r);
                        else this._onFieldValidated(h, r) } } } return this }, addField: function(e, a) { var i = this._namespace,
                r = t([]); switch (typeof e) {
                case "object":
                    r = e, e = e.attr("data-" + i + "-field") || e.attr("name"); break;
                case "string":
                    delete this._cacheFields[e], r = this.getFieldElements(e) } r.attr("data-" + i + "-field", e); for (var n = r.attr("type"), s = "radio" === n || "checkbox" === n ? 1 : r.length, o = 0; o < s; o++) { var l = r.eq(o),
                    d = this._parseOptions(l);
                d = null === d ? a : t.extend(!0, a, d), this.options.fields[e] = t.extend(!0, this.options.fields[e], d), this._cacheFields[e] = this._cacheFields[e] ? this._cacheFields[e].add(l) : l, this._initField("checkbox" === n || "radio" === n ? e : l) } return this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldAdded), { field: e, element: r, options: this.options.fields[e] }), this }, destroy: function() { var t, e, a, i, r, n, s, o = this._namespace; for (e in this.options.fields)
                for (a = this.getFieldElements(e), t = 0; t < a.length; t++) { i = a.eq(t); for (r in this.options.fields[e].validators) i.data(o + ".dfs." + r) && i.data(o + ".dfs." + r).reject(), i.removeData(o + ".result." + r).removeData(o + ".response." + r).removeData(o + ".dfs." + r), "function" == typeof FormValidation.Validator[r].destroy && FormValidation.Validator[r].destroy(this, i, this.options.fields[e].validators[r]) }
            for (e in this.options.fields)
                for (a = this.getFieldElements(e), s = this.options.fields[e].row || this.options.row.selector, t = 0; t < a.length; t++) { i = a.eq(t), i.data(o + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + o + "-validator][data-" + o + '-for="' + e + '"]').remove().end().end().removeData(o + ".messages").closest(s).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("." + o).removeAttr("data-" + o + "-field"); var l = "function" == typeof(this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, i, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container; "tooltip" !== l && "popover" !== l || this._destroyTooltip(i, l), n = i.data(o + ".icon"), n && n.remove(), i.removeData(o + ".icon").removeData(o + ".trigger") }
            for (var d in this.options.addOns) "function" == typeof FormValidation.AddOn[d].destroy && FormValidation.AddOn[d].destroy(this, this.options.addOns[d]);
            this.disableSubmitButtons(!1), this.$hiddenButton.remove(), this.$form.removeClass(this.options.elementClass).off("." + o).removeData("bootstrapValidator").removeData("formValidation").find("[data-" + o + "-submit-hidden]").remove().end().find('[type="submit"]').off("click." + o) }, enableFieldValidators: function(t, e, a) { var i = this.options.fields[t].validators; if (a && i && i[a] && i[a].enabled !== e) this.options.fields[t].validators[a].enabled = e, this.updateStatus(t, this.STATUS_NOT_VALIDATED, a);
            else if (!a && this.options.fields[t].enabled !== e) { this.options.fields[t].enabled = e; for (var r in i) this.enableFieldValidators(t, e, r) } return this }, getDynamicOption: function(t, e) { var a = "string" == typeof t ? this.getFieldElements(t) : t,
                i = a.val(); if ("function" == typeof e) return FormValidation.Helper.call(e, [i, this, a]); if ("string" == typeof e) { var r = this.getFieldElements(e); return r.length ? r.val() : FormValidation.Helper.call(e, [i, this, a]) || e } return null }, getForm: function() { return this.$form }, getInvalidFields: function() { return this.$invalidFields }, getLocale: function() { return this.options.locale }, getMessages: function(e, a) { var i = this,
                r = this._namespace,
                n = [],
                s = t([]); switch (!0) {
                case e && "object" == typeof e:
                    s = e; break;
                case e && "string" == typeof e:
                    var o = this.getFieldElements(e); if (o.length > 0) { var l = o.attr("type");
                        s = "radio" === l || "checkbox" === l ? o.eq(0) : o } break;
                default:
                    s = this.$invalidFields } var d = a ? "[data-" + r + '-validator="' + a + '"]' : ""; return s.each(function() { n = n.concat(t(this).data(r + ".messages").find("." + i.options.err.clazz + "[data-" + r + '-for="' + t(this).attr("data-" + r + "-field") + '"][data-' + r + '-result="' + i.STATUS_INVALID + '"]' + d).map(function() { var e = t(this).attr("data-" + r + "-validator"),
                        a = t(this).attr("data-" + r + "-for"); return i.options.fields[a].validators[e].enabled === !1 ? "" : t(this).html() }).get()) }), n }, getSubmitButton: function() { return this.$submitButton }, removeField: function(e) { var a = this._namespace,
                i = t([]); switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-" + a + "-field") || e.attr("name"), i.attr("data-" + a + "-field", e); break;
                case "string":
                    i = this.getFieldElements(e) } if (0 === i.length) return this; for (var r = i.attr("type"), n = "radio" === r || "checkbox" === r ? 1 : i.length, s = 0; s < n; s++) { var o = i.eq(s);
                this.$invalidFields = this.$invalidFields.not(o), this._cacheFields[e] = this._cacheFields[e].not(o) } return this._cacheFields[e] && 0 !== this._cacheFields[e].length || delete this.options.fields[e], "checkbox" !== r && "radio" !== r || this._initField(e), this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldRemoved), { field: e, element: i }), this }, resetField: function(e, a) { var i = this._namespace,
                r = t([]); switch (typeof e) {
                case "object":
                    r = e, e = e.attr("data-" + i + "-field"); break;
                case "string":
                    r = this.getFieldElements(e) } var n = r.length; if (this.options.fields[e])
                for (var s = 0; s < n; s++)
                    for (var o in this.options.fields[e].validators) r.eq(s).removeData(i + ".dfs." + o); if (this.updateStatus(e, this.STATUS_NOT_VALIDATED), a) { var l = r.attr("type"); "radio" === l || "checkbox" === l ? r.removeAttr("checked").removeAttr("selected") : r.val("") } return this }, resetForm: function(e) { for (var a in this.options.fields) this.resetField(a, e); return this.$invalidFields = t([]), this.$submitButton = null, this.disableSubmitButtons(!1), this }, revalidateField: function(t) { return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t), this }, setLocale: function(e) { return this.options.locale = e, this.$form.trigger(t.Event(this.options.events.localeChanged), { locale: e, bv: this, fv: this }), this }, updateOption: function(t, e, a, i) { var r = this._namespace; return "object" == typeof t && (t = t.attr("data-" + r + "-field")), this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][a] = i, this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)), this }, validateContainer: function(e) { var a = this,
                i = this._namespace,
                r = {},
                n = "string" == typeof e ? t(e) : e; if (0 === n.length) return this;
            n.find("[data-" + i + "-field]").each(function() { var e = t(this),
                    n = e.attr("data-" + i + "-field");
                a._isExcluded(e) || r[n] || (r[n] = e) }); for (var s in r) this.validateField(r[s]); return this } }, t.fn.formValidation = function(e) {
        var a = arguments;
        return this.each(function() {
            var i = t(this),
                r = i.data("formValidation"),
                n = "object" == typeof e && e;
            if (!r) {
                var s = (n.framework || i.attr("data-fv-framework") || "bootstrap").toLowerCase();
                switch (s) {
                    case "foundation":
                        r = new FormValidation.Framework.Foundation(this, n); break;
                    case "pure":
                        r = new FormValidation.Framework.Pure(this, n); break;
                    case "semantic":
                        r = new FormValidation.Framework.Semantic(this, n); break;
                    case "uikit":
                        r = new FormValidation.Framework.UIKit(this, n); break;
                    case "bootstrap":
                    default:
                        r = new FormValidation.Framework.Bootstrap(this, n) } i.addClass("fv-form-" + s).data("formValidation", r);
            }
            "string" == typeof e && r[e].apply(r, Array.prototype.slice.call(a, 1))
        })
    }, t.fn.formValidation.Constructor = FormValidation.Base, t.fn.formValidation.DEFAULT_OPTIONS = { autoFocus: !0, elementClass: "fv-form", events: { formInit: "init.form.fv", formError: "err.form.fv", formSuccess: "success.form.fv", fieldAdded: "added.field.fv", fieldRemoved: "removed.field.fv", fieldInit: "init.field.fv", fieldError: "err.field.fv", fieldSuccess: "success.field.fv", fieldStatus: "status.field.fv", localeChanged: "changed.locale.fv", validatorError: "err.validator.fv", validatorSuccess: "success.validator.fv" }, excluded: [":disabled", ":hidden", ":not(:visible)"], fields: null, live: "enabled", locale: "en_US", message: "This value is not valid", threshold: null, verbose: !0, button: { selector: '[type="submit"]', disabled: "" }, control: { valid: "", invalid: "" }, err: { clazz: "", container: null, parent: null }, icon: { valid: null, invalid: null, validating: null, feedback: "" }, row: { selector: null, valid: "", invalid: "", feedback: "" } }
}(jQuery),
function(t) { FormValidation.Helper = { call: function(t, e) { if ("function" == typeof t) return t.apply(this, e); if ("string" == typeof t) { "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2)); for (var a = t.split("."), i = a.pop(), r = window, n = 0; n < a.length; n++) r = r[a[n]]; return "undefined" == typeof r[i] ? null : r[i].apply(this, e) } }, date: function(t, e, a, i) { if (isNaN(t) || isNaN(e) || isNaN(a)) return !1; if (a.length > 2 || e.length > 2 || t.length > 4) return !1; if (a = parseInt(a, 10), e = parseInt(e, 10), t = parseInt(t, 10), t < 1e3 || t > 9999 || e <= 0 || e > 12) return !1; var r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; if ((t % 400 === 0 || t % 100 !== 0 && t % 4 === 0) && (r[1] = 29), a <= 0 || a > r[e - 1]) return !1; if (i === !0) { var n = new Date,
                    s = n.getFullYear(),
                    o = n.getMonth(),
                    l = n.getDate(); return t < s || t === s && e - 1 < o || t === s && e - 1 === o && a < l } return !0 }, format: function(e, a) { t.isArray(a) || (a = [a]); for (var i in a) e = e.replace("%s", a[i]); return e }, luhn: function(t) { for (var e = t.length, a = 0, i = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], r = 0; e--;) r += i[a][parseInt(t.charAt(e), 10)], a ^= 1; return r % 10 === 0 && r > 0 }, mod11And10: function(t) { for (var e = 5, a = t.length, i = 0; i < a; i++) e = (2 * (e || 10) % 11 + parseInt(t.charAt(i), 10)) % 10; return 1 === e }, mod37And36: function(t, e) { e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; for (var a = e.length, i = t.length, r = Math.floor(a / 2), n = 0; n < i; n++) r = (2 * (r || a) % (a + 1) + e.indexOf(t.charAt(n))) % a; return 1 === r } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { base64: { "default": "Please enter a valid base 64 encoded" } } }), FormValidation.Validator.base64 = { validate: function(t, e, a) { var i = t.getFieldValue(e, "base64"); return "" === i || /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { between: { "default": "Please enter a value between %s and %s", notInclusive: "Please enter a value between %s and %s strictly" } } }), FormValidation.Validator.between = { html5Attributes: { message: "message", min: "min", max: "max", inclusive: "inclusive" }, enableByHtml5: function(t) { return "range" === t.attr("type") && { min: t.attr("min"), max: t.attr("max") } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "between"); if ("" === r) return !0; if (r = this._format(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                s = t.isNumeric(i.min) ? i.min : e.getDynamicOption(a, i.min),
                o = t.isNumeric(i.max) ? i.max : e.getDynamicOption(a, i.max),
                l = this._format(s),
                d = this._format(o); return r = parseFloat(r), i.inclusive === !0 || void 0 === i.inclusive ? { valid: r >= l && r <= d, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].between["default"], [s, o]) } : { valid: r > l && r < d, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].between.notInclusive, [s, o]) } }, _format: function(t) { return (t + "").replace(",", ".") } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { bic: { "default": "Please enter a valid BIC number" } } }), FormValidation.Validator.bic = { validate: function(t, e, a) { var i = t.getFieldValue(e, "bic"); return "" === i || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(i) } } }(jQuery),
function(t) { FormValidation.Validator.blank = { validate: function(t, e, a) { return !0 } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { callback: { "default": "Please enter a valid value" } } }), FormValidation.Validator.callback = { html5Attributes: { message: "message", callback: "callback" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "callback"),
                n = new t.Deferred,
                s = { valid: !0 }; if (i.callback) { var o = FormValidation.Helper.call(i.callback, [r, e, a]);
                s = "boolean" == typeof o ? { valid: o } : o } return n.resolve(a, "callback", s), n } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { choice: { "default": "Please enter a valid value", less: "Please choose %s options at minimum", more: "Please choose %s options at maximum", between: "Please choose %s - %s options" } } }), FormValidation.Validator.choice = { html5Attributes: { message: "message", min: "min", max: "max" }, validate: function(e, a, i) { var r = e.getLocale(),
                n = e.getNamespace(),
                s = a.is("select") ? e.getFieldElements(a.attr("data-" + n + "-field")).find("option").filter(":selected").length : e.getFieldElements(a.attr("data-" + n + "-field")).filter(":checked").length,
                o = i.min ? t.isNumeric(i.min) ? i.min : e.getDynamicOption(a, i.min) : null,
                l = i.max ? t.isNumeric(i.max) ? i.max : e.getDynamicOption(a, i.max) : null,
                d = !0,
                u = i.message || FormValidation.I18n[r].choice["default"]; switch ((o && s < parseInt(o, 10) || l && s > parseInt(l, 10)) && (d = !1), !0) {
                case !!o && !!l:
                    u = FormValidation.Helper.format(i.message || FormValidation.I18n[r].choice.between, [parseInt(o, 10), parseInt(l, 10)]); break;
                case !!o:
                    u = FormValidation.Helper.format(i.message || FormValidation.I18n[r].choice.less, parseInt(o, 10)); break;
                case !!l:
                    u = FormValidation.Helper.format(i.message || FormValidation.I18n[r].choice.more, parseInt(l, 10)) } return { valid: d, message: u } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { color: { "default": "Please enter a valid color" } } }), FormValidation.Validator.color = { html5Attributes: { message: "message", type: "type" }, enableByHtml5: function(t) { return "color" === t.attr("type") }, SUPPORTED_TYPES: ["hex", "rgb", "rgba", "hsl", "hsla", "keyword"], KEYWORD_COLORS: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], validate: function(e, a, i) { var r = e.getFieldValue(a, "color"); if ("" === r) return !0; if (this.enableByHtml5(a)) return /^#[0-9A-F]{6}$/i.test(r); var n = i.type || this.SUPPORTED_TYPES;
            t.isArray(n) || (n = n.replace(/s/g, "").split(",")); for (var s, o, l = !1, d = 0; d < n.length; d++)
                if (o = n[d], s = "_" + o.toLowerCase(), l = l || this[s](r)) return !0; return !1 }, _hex: function(t) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t) }, _hsl: function(t) { return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t) }, _hsla: function(t) { return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) }, _keyword: function(e) { return t.inArray(e, this.KEYWORD_COLORS) >= 0 }, _rgb: function(t) { var e = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,
                a = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/; return e.test(t) || a.test(t) }, _rgba: function(t) { var e = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,
                a = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/; return e.test(t) || a.test(t) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { creditCard: { "default": "Please enter a valid credit card number" } } }), FormValidation.Validator.creditCard = { validate: function(e, a, i) { var r = e.getFieldValue(a, "creditCard"); if ("" === r) return !0; if (/[^0-9-\s]+/.test(r)) return !1; if (r = r.replace(/\D/g, ""), !FormValidation.Helper.luhn(r)) return !1; var n, s, o = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } }; for (n in o)
                for (s in o[n].prefix)
                    if (r.substr(0, o[n].prefix[s].length) === o[n].prefix[s] && t.inArray(r.length, o[n].length) !== -1) return { valid: !0, type: n }; return !1 } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { cusip: { "default": "Please enter a valid CUSIP number" } } }), FormValidation.Validator.cusip = { validate: function(e, a, i) { var r = e.getFieldValue(a, "cusip"); if ("" === r) return !0; if (r = r.toUpperCase(), !/^[0-9A-Z]{9}$/.test(r)) return !1; for (var n = t.map(r.split(""), function(t) { var e = t.charCodeAt(0); return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t }), s = n.length, o = 0, l = 0; l < s - 1; l++) { var d = parseInt(n[l], 10);
                l % 2 !== 0 && (d *= 2), d > 9 && (d -= 9), o += d } return o = (10 - o % 10) % 10, o === parseInt(n[s - 1], 10) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { cvv: { "default": "Please enter a valid CVV number" } } }), FormValidation.Validator.cvv = { html5Attributes: { message: "message", ccfield: "creditCardField" }, init: function(t, e, a) { if (a.creditCardField) { var i = t.getFieldElements(a.creditCardField);
                t.onLiveChange(i, "live_cvv", function() { var a = t.getStatus(e, "cvv");
                    a !== t.STATUS_NOT_VALIDATED && t.revalidateField(e) }) } }, destroy: function(t, e, a) { if (a.creditCardField) { var i = t.getFieldElements(a.creditCardField);
                t.offLiveChange(i, "live_cvv") } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "cvv"); if ("" === r) return !0; if (!/^[0-9]{3,4}$/.test(r)) return !1; if (!i.creditCardField) return !0; var n = e.getFieldElements(i.creditCardField).val(); if ("" === n) return !0;
            n = n.replace(/\D/g, ""); var s, o, l = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } },
                d = null; for (s in l)
                for (o in l[s].prefix)
                    if (n.substr(0, l[s].prefix[o].length) === l[s].prefix[o] && t.inArray(n.length, l[s].length) !== -1) { d = s; break } return null !== d && ("AMERICAN_EXPRESS" === d ? 4 === r.length : 3 === r.length) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { date: { "default": "Please enter a valid date", min: "Please enter a date after %s", max: "Please enter a date before %s", range: "Please enter a date in the range %s - %s" } } }), FormValidation.Validator.date = { html5Attributes: { message: "message", format: "format", min: "min", max: "max", separator: "separator" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "date"); if ("" === r) return !0;
            i.format = i.format || "MM/DD/YYYY", "date" === a.attr("type") && (i.format = "YYYY-MM-DD"); var n = e.getLocale(),
                s = i.message || FormValidation.I18n[n].date["default"],
                o = i.format.split(" "),
                l = o[0],
                d = o.length > 1 ? o[1] : null,
                u = o.length > 2 ? o[2] : null,
                f = r.split(" "),
                c = f[0],
                h = f.length > 1 ? f[1] : null; if (o.length !== f.length) return { valid: !1, message: s }; var m = i.separator; if (m || (m = c.indexOf("https://enoc.com/") !== -1 ? "/" : c.indexOf("-") !== -1 ? "-" : null), null === m || c.indexOf(m) === -1) return { valid: !1, message: s }; if (c = c.split(m), l = l.split(m), c.length !== l.length) return { valid: !1, message: s }; var p = c[t.inArray("YYYY", l)],
                v = c[t.inArray("MM", l)],
                g = c[t.inArray("DD", l)]; if (!p || !v || !g || 4 !== p.length) return { valid: !1, message: s }; var A = null,
                b = null,
                I = null; if (d) { if (d = d.split(":"), h = h.split(":"), d.length !== h.length) return { valid: !1, message: s }; if (b = h.length > 0 ? h[0] : null, A = h.length > 1 ? h[1] : null, I = h.length > 2 ? h[2] : null, "" === b || "" === A || "" === I) return { valid: !1, message: s }; if (I) { if (isNaN(I) || I.length > 2) return { valid: !1, message: s }; if (I = parseInt(I, 10), I < 0 || I > 60) return { valid: !1, message: s } } if (b) { if (isNaN(b) || b.length > 2) return { valid: !1, message: s }; if (b = parseInt(b, 10), b < 0 || b >= 24 || u && b > 12) return { valid: !1, message: s } } if (A) { if (isNaN(A) || A.length > 2) return { valid: !1, message: s }; if (A = parseInt(A, 10), A < 0 || A > 59) return { valid: !1, message: s } } } var F = FormValidation.Helper.date(p, v, g),
                V = null,
                S = null,
                _ = i.min,
                T = i.max; switch (_ && (isNaN(Date.parse(_)) && (_ = e.getDynamicOption(a, _)), V = _ instanceof Date ? _ : this._parseDate(_, l, m), _ = _ instanceof Date ? this._formatDate(_, i.format) : _), T && (isNaN(Date.parse(T)) && (T = e.getDynamicOption(a, T)), S = T instanceof Date ? T : this._parseDate(T, l, m), T = T instanceof Date ? this._formatDate(T, i.format) : T), c = new Date(p, v - 1, g, b, A, I), !0) {
                case _ && !T && F:
                    F = c.getTime() >= V.getTime(), s = i.message || FormValidation.Helper.format(FormValidation.I18n[n].date.min, _); break;
                case T && !_ && F:
                    F = c.getTime() <= S.getTime(), s = i.message || FormValidation.Helper.format(FormValidation.I18n[n].date.max, T); break;
                case T && _ && F:
                    F = c.getTime() <= S.getTime() && c.getTime() >= V.getTime(), s = i.message || FormValidation.Helper.format(FormValidation.I18n[n].date.range, [_, T]) } return { valid: F, message: s } }, _parseDate: function(e, a, i) { var r = 0,
                n = 0,
                s = 0,
                o = e.split(" "),
                l = o[0],
                d = o.length > 1 ? o[1] : null;
            l = l.split(i); var u = l[t.inArray("YYYY", a)],
                f = l[t.inArray("MM", a)],
                c = l[t.inArray("DD", a)]; return d && (d = d.split(":"), n = d.length > 0 ? d[0] : null, r = d.length > 1 ? d[1] : null, s = d.length > 2 ? d[2] : null), new Date(u, f - 1, c, n, r, s) }, _formatDate: function(t, e) { e = e.replace(/Y/g, "y").replace(/M/g, "m").replace(/D/g, "d").replace(/:m/g, ":M").replace(/:mm/g, ":MM").replace(/:S/, ":s").replace(/:SS/, ":ss"); var a = { d: function(t) { return t.getDate() }, dd: function(t) { var e = t.getDate(); return e < 10 ? "0" + e : e }, m: function(t) { return t.getMonth() + 1 }, mm: function(t) { var e = t.getMonth() + 1; return e < 10 ? "0" + e : e }, yy: function(t) { return ("" + t.getFullYear()).substr(2) }, yyyy: function(t) { return t.getFullYear() }, h: function(t) { return t.getHours() % 12 || 12 }, hh: function(t) { var e = t.getHours() % 12 || 12; return e < 10 ? "0" + e : e }, H: function(t) { return t.getHours() }, HH: function(t) { var e = t.getHours(); return e < 10 ? "0" + e : e }, M: function(t) { return t.getMinutes() }, MM: function(t) { var e = t.getMinutes(); return e < 10 ? "0" + e : e }, s: function(t) { return t.getSeconds() }, ss: function(t) { var e = t.getSeconds(); return e < 10 ? "0" + e : e } }; return e.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(e) { return a[e] ? a[e](t) : e.slice(1, e.length - 1) }) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { different: { "default": "Please enter a different value" } } }), FormValidation.Validator.different = { html5Attributes: { message: "message", field: "field" }, init: function(t, e, a) { for (var i = a.field.split(","), r = 0; r < i.length; r++) { var n = t.getFieldElements(i[r]);
                t.onLiveChange(n, "live_different", function() { var a = t.getStatus(e, "different");
                    a !== t.STATUS_NOT_VALIDATED && t.revalidateField(e) }) } }, destroy: function(t, e, a) { for (var i = a.field.split(","), r = 0; r < i.length; r++) { var n = t.getFieldElements(i[r]);
                t.offLiveChange(n, "live_different") } }, validate: function(t, e, a) { var i = t.getFieldValue(e, "different"); if ("" === i) return !0; for (var r = a.field.split(","), n = !0, s = 0; s < r.length; s++) { var o = t.getFieldElements(r[s]); if (null != o && 0 !== o.length) { var l = t.getFieldValue(o, "different");
                    i === l ? n = !1 : "" !== l && t.updateStatus(o, t.STATUS_VALID, "different") } } return n } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { digits: { "default": "Please enter only digits" } } }), FormValidation.Validator.digits = { validate: function(t, e, a) { var i = t.getFieldValue(e, "digits"); return "" === i || /^\d+$/.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ean: { "default": "Please enter a valid EAN number" } } }), FormValidation.Validator.ean = { validate: function(t, e, a) { var i = t.getFieldValue(e, "ean"); if ("" === i) return !0; if (!/^(\d{8}|\d{12}|\d{13})$/.test(i)) return !1; for (var r = i.length, n = 0, s = 8 === r ? [3, 1] : [1, 3], o = 0; o < r - 1; o++) n += parseInt(i.charAt(o), 10) * s[o % 2]; return n = (10 - n % 10) % 10, n + "" === i.charAt(r - 1) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ein: { "default": "Please enter a valid EIN number" } } }), FormValidation.Validator.ein = { CAMPUS: { ANDOVER: ["10", "12"], ATLANTA: ["60", "67"], AUSTIN: ["50", "53"], BROOKHAVEN: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"], CINCINNATI: ["30", "32", "35", "36", "37", "38", "61"], FRESNO: ["15", "24"], KANSAS_CITY: ["40", "44"], MEMPHIS: ["94", "95"], OGDEN: ["80", "90"], PHILADELPHIA: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"], INTERNET: ["20", "26", "27", "45", "46"], SMALL_BUSINESS_ADMINISTRATION: ["31"] }, validate: function(e, a, i) { var r = e.getFieldValue(a, "ein"); if ("" === r) return !0; if (!/^[0-9]{2}-?[0-9]{7}$/.test(r)) return !1; var n = r.substr(0, 2) + ""; for (var s in this.CAMPUS)
                if (t.inArray(n, this.CAMPUS[s]) !== -1) return { valid: !0, campus: s }; return !1 } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { emailAddress: { "default": "Please enter a valid email address" } } }), FormValidation.Validator.emailAddress = { html5Attributes: { message: "message", multiple: "multiple", separator: "separator" }, enableByHtml5: function(t) { return "email" === t.attr("type") }, validate: function(t, e, a) { var i = t.getFieldValue(e, "emailAddress"); if ("" === i) return !0; var r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                n = a.multiple === !0 || "true" === a.multiple; if (n) { for (var s = a.separator || /[,;]/, o = this._splitEmailAddresses(i, s), l = 0; l < o.length; l++)
                    if (!r.test(o[l])) return !1; return !0 } return r.test(i) }, _splitEmailAddresses: function(t, e) { for (var a = t.split(/"/), i = a.length, r = [], n = "", s = 0; s < i; s++)
                if (s % 2 === 0) { var o = a[s].split(e),
                        l = o.length; if (1 === l) n += o[0];
                    else { r.push(n + o[0]); for (var d = 1; d < l - 1; d++) r.push(o[d]);
                        n = o[l - 1] } } else n += '"' + a[s], s < i - 1 && (n += '"'); return r.push(n), r } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { file: { "default": "Please choose a valid file" } } }), FormValidation.Validator.file = { html5Attributes: { extension: "extension", maxfiles: "maxFiles", minfiles: "minFiles", maxsize: "maxSize", minsize: "minSize", maxtotalsize: "maxTotalSize", mintotalsize: "minTotalSize", message: "message", type: "type" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "file"); if ("" === r) return !0; var n, s = i.extension ? i.extension.toLowerCase().split(",") : null,
                o = i.type ? i.type.toLowerCase().split(",") : null,
                l = window.File && window.FileList && window.FileReader; if (l) { var d = a.get(0).files,
                    u = d.length,
                    f = 0; if (i.maxFiles && u > parseInt(i.maxFiles, 10) || i.minFiles && u < parseInt(i.minFiles, 10)) return !1; for (var c = 0; c < u; c++)
                    if (f += d[c].size, n = d[c].name.substr(d[c].name.lastIndexOf(".") + 1), i.minSize && d[c].size < parseInt(i.minSize, 10) || i.maxSize && d[c].size > parseInt(i.maxSize, 10) || s && t.inArray(n.toLowerCase(), s) === -1 || d[c].type && o && t.inArray(d[c].type.toLowerCase(), o) === -1) return !1; if (i.maxTotalSize && f > parseInt(i.maxTotalSize, 10) || i.minTotalSize && f < parseInt(i.minTotalSize, 10)) return !1 } else if (n = r.substr(r.lastIndexOf(".") + 1), s && t.inArray(n.toLowerCase(), s) === -1) return !1; return !0 } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { greaterThan: { "default": "Please enter a value greater than or equal to %s", notInclusive: "Please enter a value greater than %s" } } }), FormValidation.Validator.greaterThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(t) { var e = t.attr("type"),
                a = t.attr("min"); return !(!a || "date" === e) && { value: a } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "greaterThan"); if ("" === r) return !0; if (r = this._format(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                s = t.isNumeric(i.value) ? i.value : e.getDynamicOption(a, i.value),
                o = this._format(s); return r = parseFloat(r), i.inclusive === !0 || void 0 === i.inclusive ? { valid: r >= o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].greaterThan["default"], s) } : { valid: r > o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].greaterThan.notInclusive, s) } }, _format: function(t) { return (t + "").replace(",", ".") } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { grid: { "default": "Please enter a valid GRId number" } } }), FormValidation.Validator.grid = { validate: function(t, e, a) { var i = t.getFieldValue(e, "grid"); return "" === i || (i = i.toUpperCase(), !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(i) && (i = i.replace(/\s/g, "").replace(/-/g, ""), "GRID:" === i.substr(0, 5) && (i = i.substr(5)), FormValidation.Helper.mod37And36(i))) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { hex: { "default": "Please enter a valid hexadecimal number" } } }), FormValidation.Validator.hex = { validate: function(t, e, a) { var i = t.getFieldValue(e, "hex"); return "" === i || /^[0-9a-fA-F]+$/.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { iban: { "default": "Please enter a valid IBAN number", country: "Please enter a valid IBAN number in %s", countries: { AD: "Andorra", AE: "United Arab Emirates", AL: "Albania", AO: "Angola", AT: "Austria", AZ: "Azerbaijan", BA: "Bosnia and Herzegovina", BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria", BH: "Bahrain", BI: "Burundi", BJ: "Benin", BR: "Brazil", CH: "Switzerland", CI: "Ivory Coast", CM: "Cameroon", CR: "Costa Rica", CV: "Cape Verde", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", DO: "Dominican Republic", DZ: "Algeria", EE: "Estonia", ES: "Spain", FI: "Finland", FO: "Faroe Islands", FR: "France", GB: "United Kingdom", GE: "Georgia", GI: "Gibraltar", GL: "Greenland", GR: "Greece", GT: "Guatemala", HR: "Croatia", HU: "Hungary", IE: "Ireland", IL: "Israel", IR: "Iran", IS: "Iceland", IT: "Italy", JO: "Jordan", KW: "Kuwait", KZ: "Kazakhstan", LB: "Lebanon", LI: "Liechtenstein", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MC: "Monaco", MD: "Moldova", ME: "Montenegro", MG: "Madagascar", MK: "Macedonia", ML: "Mali", MR: "Mauritania", MT: "Malta", MU: "Mauritius", MZ: "Mozambique", NL: "Netherlands", NO: "Norway", PK: "Pakistan", PL: "Poland", PS: "Palestine", PT: "Portugal", QA: "Qatar", RO: "Romania", RS: "Serbia", SA: "Saudi Arabia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", SN: "Senegal", TN: "Tunisia", TR: "Turkey", VG: "Virgin Islands, British" } } } }), FormValidation.Validator.iban = { html5Attributes: { message: "message", country: "country" }, REGEX: { AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}", AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}", AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}", AO: "AO[0-9]{2}[0-9]{21}", AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}", AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}", BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}", BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}", BF: "BF[0-9]{2}[0-9]{23}", BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}", BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}", BI: "BI[0-9]{2}[0-9]{12}", BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}", BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]", CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}", CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}", CM: "CM[0-9]{2}[0-9]{23}", CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}", CV: "CV[0-9]{2}[0-9]{21}", CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}", CZ: "CZ[0-9]{2}[0-9]{20}", DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}", DK: "DK[0-9]{2}[0-9]{14}", DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}", DZ: "DZ[0-9]{2}[0-9]{20}", EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}", ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}", FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}", FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}", GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}", GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}", GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}", HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}", HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}", IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}", IR: "IR[0-9]{2}[0-9]{22}", IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}", IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}", KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}", KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}", LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}", LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}", LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}", MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", MD: "MD[0-9]{2}[A-Z0-9]{20}", ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", MG: "MG[0-9]{2}[0-9]{23}", MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}", ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}", MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}", MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}", MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}", MZ: "MZ[0-9]{2}[0-9]{21}", NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}", NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}", PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}", PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}", QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}", SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}", SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}", SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}", SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}", TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}", VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "iban"); if ("" === r) return !0;
            r = r.replace(/[^a-zA-Z0-9]/g, "").toUpperCase(); var n = i.country;
            n ? "string" == typeof n && this.REGEX[n] || (n = e.getDynamicOption(a, n)) : n = r.substr(0, 2); var s = e.getLocale(); if (!this.REGEX[n]) return !0; if (!new RegExp("^" + this.REGEX[n] + "$").test(r)) return { valid: !1, message: FormValidation.Helper.format(i.message || FormValidation.I18n[s].iban.country, FormValidation.I18n[s].iban.countries[n]) };
            r = r.substr(4) + r.substr(0, 4), r = t.map(r.split(""), function(t) { var e = t.charCodeAt(0); return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t }), r = r.join(""); for (var o = parseInt(r.substr(0, 1), 10), l = r.length, d = 1; d < l; ++d) o = (10 * o + parseInt(r.substr(d, 1), 10)) % 97; return { valid: 1 === o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[s].iban.country, FormValidation.I18n[s].iban.countries[n]) } } } }(jQuery),
function(t) {
    FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { id: { "default": "Please enter a valid identification number", country: "Please enter a valid identification number in %s", countries: { BA: "Bosnia and Herzegovina", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CL: "Chile", CN: "China", CZ: "Czech Republic", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", HR: "Croatia", IE: "Ireland", IS: "Iceland", LT: "Lithuania", LV: "Latvia", ME: "Montenegro", MK: "Macedonia", NL: "Netherlands", RO: "Romania", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", TH: "Thailand", ZA: "South Africa" } } } }), FormValidation.Validator.id = {
        html5Attributes: { message: "message", country: "country" },
        COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "ZA"],
        validate: function(e, a, i) { var r = e.getFieldValue(a, "id"); if ("" === r) return !0; var n = e.getLocale(),
                s = i.country; if (s ? "string" == typeof s && t.inArray(s.toUpperCase(), this.COUNTRY_CODES) !== -1 || (s = e.getDynamicOption(a, s)) : s = r.substr(0, 2), t.inArray(s, this.COUNTRY_CODES) === -1) return !0; var o = ["_", s.toLowerCase()].join(""); return !!this[o](r) || { valid: !1, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].id.country, FormValidation.I18n[n].id.countries[s.toUpperCase()]) } },
        _validateJMBG: function(t, e) { if (!/^\d{13}$/.test(t)) return !1; var a = parseInt(t.substr(0, 2), 10),
                i = parseInt(t.substr(2, 2), 10),
                r = (parseInt(t.substr(4, 3), 10), parseInt(t.substr(7, 2), 10)),
                n = parseInt(t.substr(12, 1), 10); if (a > 31 || i > 12) return !1; for (var s = 0, o = 0; o < 6; o++) s += (7 - o) * (parseInt(t.charAt(o), 10) + parseInt(t.charAt(o + 6), 10)); if (s = 11 - s % 11, 10 !== s && 11 !== s || (s = 0), s !== n) return !1; switch (e.toUpperCase()) {
                case "BA":
                    return 10 <= r && r <= 19;
                case "MK":
                    return 41 <= r && r <= 49;
                case "ME":
                    return 20 <= r && r <= 29;
                case "RS":
                    return 70 <= r && r <= 99;
                case "SI":
                    return 50 <= r && r <= 59;
                default:
                    return !0 } },
        _ba: function(t) { return this._validateJMBG(t, "BA") },
        _mk: function(t) { return this._validateJMBG(t, "MK") },
        _me: function(t) { return this._validateJMBG(t, "ME") },
        _rs: function(t) { return this._validateJMBG(t, "RS") },
        _si: function(t) { return this._validateJMBG(t, "SI") },
        _bg: function(t) { if (!/^\d{10}$/.test(t) && !/^\d{6}\s\d{3}\s\d{1}$/.test(t)) return !1;
            t = t.replace(/\s/g, ""); var e = parseInt(t.substr(0, 2), 10) + 1900,
                a = parseInt(t.substr(2, 2), 10),
                i = parseInt(t.substr(4, 2), 10); if (a > 40 ? (e += 100, a -= 40) : a > 20 && (e -= 100, a -= 20), !FormValidation.Helper.date(e, a, i)) return !1; for (var r = 0, n = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; s < 9; s++) r += parseInt(t.charAt(s), 10) * n[s]; return r = r % 11 % 10, r + "" === t.substr(9, 1) },
        _br: function(t) {
            if (t = t.replace(/\D/g, ""), /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)) return !1;
            for (var e = 0, a = 0; a < 9; a++) e += (10 - a) * parseInt(t.charAt(a), 10);
            if (e = 11 - e % 11, 10 !== e && 11 !== e || (e = 0), e + "" !== t.charAt(9)) return !1;
            var i = 0;
            for (a = 0; a < 10; a++) i += (11 - a) * parseInt(t.charAt(a), 10);
            return i = 11 - i % 11, 10 !== i && 11 !== i || (i = 0), i + "" === t.charAt(10);
        },
        _ch: function(t) { if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t)) return !1;
            t = t.replace(/\D/g, "").substr(3); for (var e = t.length, a = 0, i = 8 === e ? [3, 1] : [1, 3], r = 0; r < e - 1; r++) a += parseInt(t.charAt(r), 10) * i[r % 2]; return a = 10 - a % 10, a + "" === t.charAt(e - 1) },
        _cl: function(t) { if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t)) return !1; for (t = t.replace(/\-/g, ""); t.length < 9;) t = "0" + t; for (var e = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e = 11 - e % 11, 11 === e ? e = 0 : 10 === e && (e = "K"), e + "" === t.charAt(8).toUpperCase() },
        _cn: function(e) { if (e = e.trim(), !/^\d{15}$/.test(e) && !/^\d{17}[\dXx]{1}$/.test(e)) return !1; var a = { 11: { 0: [0], 1: [
                            [0, 9],
                            [11, 17]
                        ], 2: [0, 28, 29] }, 12: { 0: [0], 1: [
                            [0, 16]
                        ], 2: [0, 21, 23, 25] }, 13: { 0: [0], 1: [
                            [0, 5], 7, 8, 21, [23, 33],
                            [81, 85]
                        ], 2: [
                            [0, 5],
                            [7, 9],
                            [23, 25], 27, 29, 30, 81, 83
                        ], 3: [
                            [0, 4],
                            [21, 24]
                        ], 4: [
                            [0, 4], 6, 21, [23, 35], 81
                        ], 5: [
                            [0, 3],
                            [21, 35], 81, 82
                        ], 6: [
                            [0, 4],
                            [21, 38],
                            [81, 84]
                        ], 7: [
                            [0, 3], 5, 6, [21, 33]
                        ], 8: [
                            [0, 4],
                            [21, 28]
                        ], 9: [
                            [0, 3],
                            [21, 30],
                            [81, 84]
                        ], 10: [
                            [0, 3],
                            [22, 26], 28, 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 28], 81, 82
                        ] }, 14: { 0: [0], 1: [0, 1, [5, 10],
                            [21, 23], 81
                        ], 2: [
                            [0, 3], 11, 12, [21, 27]
                        ], 3: [
                            [0, 3], 11, 21, 22
                        ], 4: [
                            [0, 2], 11, 21, [23, 31], 81
                        ], 5: [
                            [0, 2], 21, 22, 24, 25, 81
                        ], 6: [
                            [0, 3],
                            [21, 24]
                        ], 7: [
                            [0, 2],
                            [21, 29], 81
                        ], 8: [
                            [0, 2],
                            [21, 30], 81, 82
                        ], 9: [
                            [0, 2],
                            [21, 32], 81
                        ], 10: [
                            [0, 2],
                            [21, 34], 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 30], 81, 82
                        ], 23: [
                            [0, 3], 22, 23, [25, 30], 32, 33
                        ] }, 15: { 0: [0], 1: [
                            [0, 5],
                            [21, 25]
                        ], 2: [
                            [0, 7],
                            [21, 23]
                        ], 3: [
                            [0, 4]
                        ], 4: [
                            [0, 4],
                            [21, 26],
                            [28, 30]
                        ], 5: [
                            [0, 2],
                            [21, 26], 81
                        ], 6: [
                            [0, 2],
                            [21, 27]
                        ], 7: [
                            [0, 3],
                            [21, 27],
                            [81, 85]
                        ], 8: [
                            [0, 2],
                            [21, 26]
                        ], 9: [
                            [0, 2],
                            [21, 29], 81
                        ], 22: [
                            [0, 2],
                            [21, 24]
                        ], 25: [
                            [0, 2],
                            [22, 31]
                        ], 26: [
                            [0, 2],
                            [24, 27],
                            [29, 32], 34
                        ], 28: [0, 1, [22, 27]], 29: [0, [21, 23]] }, 21: { 0: [0], 1: [
                            [0, 6],
                            [11, 14],
                            [22, 24], 81
                        ], 2: [
                            [0, 4],
                            [11, 13], 24, [81, 83]
                        ], 3: [
                            [0, 4], 11, 21, 23, 81
                        ], 4: [
                            [0, 4], 11, [21, 23]
                        ], 5: [
                            [0, 5], 21, 22
                        ], 6: [
                            [0, 4], 24, 81, 82
                        ], 7: [
                            [0, 3], 11, 26, 27, 81, 82
                        ], 8: [
                            [0, 4], 11, 81, 82
                        ], 9: [
                            [0, 5], 11, 21, 22
                        ], 10: [
                            [0, 5], 11, 21, 81
                        ], 11: [
                            [0, 3], 21, 22
                        ], 12: [
                            [0, 2], 4, 21, 23, 24, 81, 82
                        ], 13: [
                            [0, 3], 21, 22, 24, 81, 82
                        ], 14: [
                            [0, 4], 21, 22, 81
                        ] }, 22: { 0: [0], 1: [
                            [0, 6], 12, 22, [81, 83]
                        ], 2: [
                            [0, 4], 11, 21, [81, 84]
                        ], 3: [
                            [0, 3], 22, 23, 81, 82
                        ], 4: [
                            [0, 3], 21, 22
                        ], 5: [
                            [0, 3], 21, 23, 24, 81, 82
                        ], 6: [
                            [0, 2], 4, 5, [21, 23], 25, 81
                        ], 7: [
                            [0, 2],
                            [21, 24], 81
                        ], 8: [
                            [0, 2], 21, 22, 81, 82
                        ], 24: [
                            [0, 6], 24, 26
                        ] }, 23: { 0: [0], 1: [
                            [0, 12], 21, [23, 29],
                            [81, 84]
                        ], 2: [
                            [0, 8], 21, [23, 25], 27, [29, 31], 81
                        ], 3: [
                            [0, 7], 21, 81, 82
                        ], 4: [
                            [0, 7], 21, 22
                        ], 5: [
                            [0, 3], 5, 6, [21, 24]
                        ], 6: [
                            [0, 6],
                            [21, 24]
                        ], 7: [
                            [0, 16], 22, 81
                        ], 8: [
                            [0, 5], 11, 22, 26, 28, 33, 81, 82
                        ], 9: [
                            [0, 4], 21
                        ], 10: [
                            [0, 5], 24, 25, 81, [83, 85]
                        ], 11: [
                            [0, 2], 21, 23, 24, 81, 82
                        ], 12: [
                            [0, 2],
                            [21, 26],
                            [81, 83]
                        ], 27: [
                            [0, 4],
                            [21, 23]
                        ] }, 31: { 0: [0], 1: [0, 1, [3, 10],
                            [12, 20]
                        ], 2: [0, 30] }, 32: { 0: [0], 1: [
                            [0, 7], 11, [13, 18], 24, 25
                        ], 2: [
                            [0, 6], 11, 81, 82
                        ], 3: [
                            [0, 5], 11, 12, [21, 24], 81, 82
                        ], 4: [
                            [0, 2], 4, 5, 11, 12, 81, 82
                        ], 5: [
                            [0, 9],
                            [81, 85]
                        ], 6: [
                            [0, 2], 11, 12, 21, 23, [81, 84]
                        ], 7: [0, 1, 3, 5, 6, [21, 24]], 8: [
                            [0, 4], 11, 26, [29, 31]
                        ], 9: [
                            [0, 3],
                            [21, 25], 28, 81, 82
                        ], 10: [
                            [0, 3], 11, 12, 23, 81, 84, 88
                        ], 11: [
                            [0, 2], 11, 12, [81, 83]
                        ], 12: [
                            [0, 4],
                            [81, 84]
                        ], 13: [
                            [0, 2], 11, [21, 24]
                        ] }, 33: { 0: [0], 1: [
                            [0, 6],
                            [8, 10], 22, 27, 82, 83, 85
                        ], 2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]], 3: [
                            [0, 4], 22, 24, [26, 29], 81, 82
                        ], 4: [
                            [0, 2], 11, 21, 24, [81, 83]
                        ], 5: [
                            [0, 3],
                            [21, 23]
                        ], 6: [
                            [0, 2], 21, 24, [81, 83]
                        ], 7: [
                            [0, 3], 23, 26, 27, [81, 84]
                        ], 8: [
                            [0, 3], 22, 24, 25, 81
                        ], 9: [
                            [0, 3], 21, 22
                        ], 10: [
                            [0, 4],
                            [21, 24], 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 27], 81
                        ] }, 34: { 0: [0], 1: [
                            [0, 4], 11, [21, 24], 81
                        ], 2: [
                            [0, 4], 7, 8, [21, 23], 25
                        ], 3: [
                            [0, 4], 11, [21, 23]
                        ], 4: [
                            [0, 6], 21
                        ], 5: [
                            [0, 4], 6, [21, 23]
                        ], 6: [
                            [0, 4], 21
                        ], 7: [
                            [0, 3], 11, 21
                        ], 8: [
                            [0, 3], 11, [22, 28], 81
                        ], 10: [
                            [0, 4],
                            [21, 24]
                        ], 11: [
                            [0, 3], 22, [24, 26], 81, 82
                        ], 12: [
                            [0, 4], 21, 22, 25, 26, 82
                        ], 13: [
                            [0, 2],
                            [21, 24]
                        ], 14: [
                            [0, 2],
                            [21, 24]
                        ], 15: [
                            [0, 3],
                            [21, 25]
                        ], 16: [
                            [0, 2],
                            [21, 23]
                        ], 17: [
                            [0, 2],
                            [21, 23]
                        ], 18: [
                            [0, 2],
                            [21, 25], 81
                        ] }, 35: { 0: [0], 1: [
                            [0, 5], 11, [21, 25], 28, 81, 82
                        ], 2: [
                            [0, 6],
                            [11, 13]
                        ], 3: [
                            [0, 5], 22
                        ], 4: [
                            [0, 3], 21, [23, 30], 81
                        ], 5: [
                            [0, 5], 21, [24, 27],
                            [81, 83]
                        ], 6: [
                            [0, 3],
                            [22, 29], 81
                        ], 7: [
                            [0, 2],
                            [21, 25],
                            [81, 84]
                        ], 8: [
                            [0, 2],
                            [21, 25], 81
                        ], 9: [
                            [0, 2],
                            [21, 26], 81, 82
                        ] }, 36: { 0: [0], 1: [
                            [0, 5], 11, [21, 24]
                        ], 2: [
                            [0, 3], 22, 81
                        ], 3: [
                            [0, 2], 13, [21, 23]
                        ], 4: [
                            [0, 3], 21, [23, 30], 81, 82
                        ], 5: [
                            [0, 2], 21
                        ], 6: [
                            [0, 2], 22, 81
                        ], 7: [
                            [0, 2],
                            [21, 35], 81, 82
                        ], 8: [
                            [0, 3],
                            [21, 30], 81
                        ], 9: [
                            [0, 2],
                            [21, 26],
                            [81, 83]
                        ], 10: [
                            [0, 2],
                            [21, 30]
                        ], 11: [
                            [0, 2],
                            [21, 30], 81
                        ] }, 37: { 0: [0], 1: [
                            [0, 5], 12, 13, [24, 26], 81
                        ], 2: [
                            [0, 3], 5, [11, 14],
                            [81, 85]
                        ], 3: [
                            [0, 6],
                            [21, 23]
                        ], 4: [
                            [0, 6], 81
                        ], 5: [
                            [0, 3],
                            [21, 23]
                        ], 6: [
                            [0, 2],
                            [11, 13], 34, [81, 87]
                        ], 7: [
                            [0, 5], 24, 25, [81, 86]
                        ], 8: [
                            [0, 2], 11, [26, 32],
                            [81, 83]
                        ], 9: [
                            [0, 3], 11, 21, 23, 82, 83
                        ], 10: [
                            [0, 2],
                            [81, 83]
                        ], 11: [
                            [0, 3], 21, 22
                        ], 12: [
                            [0, 3]
                        ], 13: [
                            [0, 2], 11, 12, [21, 29]
                        ], 14: [
                            [0, 2],
                            [21, 28], 81, 82
                        ], 15: [
                            [0, 2],
                            [21, 26], 81
                        ], 16: [
                            [0, 2],
                            [21, 26]
                        ], 17: [
                            [0, 2],
                            [21, 28]
                        ] }, 41: { 0: [0], 1: [
                            [0, 6], 8, 22, [81, 85]
                        ], 2: [
                            [0, 5], 11, [21, 25]
                        ], 3: [
                            [0, 7], 11, [22, 29], 81
                        ], 4: [
                            [0, 4], 11, [21, 23], 25, 81, 82
                        ], 5: [
                            [0, 3], 5, 6, 22, 23, 26, 27, 81
                        ], 6: [
                            [0, 3], 11, 21, 22
                        ], 7: [
                            [0, 4], 11, 21, [24, 28], 81, 82
                        ], 8: [
                            [0, 4], 11, [21, 23], 25, [81, 83]
                        ], 9: [
                            [0, 2], 22, 23, [26, 28]
                        ], 10: [
                            [0, 2],
                            [23, 25], 81, 82
                        ], 11: [
                            [0, 4],
                            [21, 23]
                        ], 12: [
                            [0, 2], 21, 22, 24, 81, 82
                        ], 13: [
                            [0, 3],
                            [21, 30], 81
                        ], 14: [
                            [0, 3],
                            [21, 26], 81
                        ], 15: [
                            [0, 3],
                            [21, 28]
                        ], 16: [
                            [0, 2],
                            [21, 28], 81
                        ], 17: [
                            [0, 2],
                            [21, 29]
                        ], 90: [0, 1] }, 42: { 0: [0], 1: [
                            [0, 7],
                            [11, 17]
                        ], 2: [
                            [0, 5], 22, 81
                        ], 3: [
                            [0, 3],
                            [21, 25], 81
                        ], 5: [
                            [0, 6],
                            [25, 29],
                            [81, 83]
                        ], 6: [
                            [0, 2], 6, 7, [24, 26],
                            [82, 84]
                        ], 7: [
                            [0, 4]
                        ], 8: [
                            [0, 2], 4, 21, 22, 81
                        ], 9: [
                            [0, 2],
                            [21, 23], 81, 82, 84
                        ], 10: [
                            [0, 3],
                            [22, 24], 81, 83, 87
                        ], 11: [
                            [0, 2],
                            [21, 27], 81, 82
                        ], 12: [
                            [0, 2],
                            [21, 24], 81
                        ], 13: [
                            [0, 3], 21, 81
                        ], 28: [
                            [0, 2], 22, 23, [25, 28]
                        ], 90: [0, [4, 6], 21] }, 43: { 0: [0], 1: [
                            [0, 5], 11, 12, 21, 22, 24, 81
                        ], 2: [
                            [0, 4], 11, 21, [23, 25], 81
                        ], 3: [
                            [0, 2], 4, 21, 81, 82
                        ], 4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82], 5: [
                            [0, 3], 11, [21, 25],
                            [27, 29], 81
                        ], 6: [
                            [0, 3], 11, 21, 23, 24, 26, 81, 82
                        ], 7: [
                            [0, 3],
                            [21, 26], 81
                        ], 8: [
                            [0, 2], 11, 21, 22
                        ], 9: [
                            [0, 3],
                            [21, 23], 81
                        ], 10: [
                            [0, 3],
                            [21, 28], 81
                        ], 11: [
                            [0, 3],
                            [21, 29]
                        ], 12: [
                            [0, 2],
                            [21, 30], 81
                        ], 13: [
                            [0, 2], 21, 22, 81, 82
                        ], 31: [0, 1, [22, 27], 30] }, 44: { 0: [0], 1: [
                            [0, 7],
                            [11, 16], 83, 84
                        ], 2: [
                            [0, 5], 21, 22, 24, 29, 32, 33, 81, 82
                        ], 3: [0, 1, [3, 8]], 4: [
                            [0, 4]
                        ], 5: [0, 1, [6, 15], 23, 82, 83], 6: [0, 1, [4, 8]], 7: [0, 1, [3, 5], 81, [83, 85]], 8: [
                            [0, 4], 11, 23, 25, [81, 83]
                        ], 9: [
                            [0, 3], 23, [81, 83]
                        ], 12: [
                            [0, 3],
                            [23, 26], 83, 84
                        ], 13: [
                            [0, 3],
                            [22, 24], 81
                        ], 14: [
                            [0, 2],
                            [21, 24], 26, 27, 81
                        ], 15: [
                            [0, 2], 21, 23, 81
                        ], 16: [
                            [0, 2],
                            [21, 25]
                        ], 17: [
                            [0, 2], 21, 23, 81
                        ], 18: [
                            [0, 3], 21, 23, [25, 27], 81, 82
                        ], 19: [0], 20: [0], 51: [
                            [0, 3], 21, 22
                        ], 52: [
                            [0, 3], 21, 22, 24, 81
                        ], 53: [
                            [0, 2],
                            [21, 23], 81
                        ] }, 45: { 0: [0], 1: [
                            [0, 9],
                            [21, 27]
                        ], 2: [
                            [0, 5],
                            [21, 26]
                        ], 3: [
                            [0, 5], 11, 12, [21, 32]
                        ], 4: [0, 1, [3, 6], 11, [21, 23], 81], 5: [
                            [0, 3], 12, 21
                        ], 6: [
                            [0, 3], 21, 81
                        ], 7: [
                            [0, 3], 21, 22
                        ], 8: [
                            [0, 4], 21, 81
                        ], 9: [
                            [0, 3],
                            [21, 24], 81
                        ], 10: [
                            [0, 2],
                            [21, 31]
                        ], 11: [
                            [0, 2],
                            [21, 23]
                        ], 12: [
                            [0, 2],
                            [21, 29], 81
                        ], 13: [
                            [0, 2],
                            [21, 24], 81
                        ], 14: [
                            [0, 2],
                            [21, 25], 81
                        ] }, 46: { 0: [0], 1: [0, 1, [5, 8]], 2: [0, 1], 3: [0, [21, 23]], 90: [
                            [0, 3],
                            [5, 7],
                            [21, 39]
                        ] }, 50: { 0: [0], 1: [
                            [0, 19]
                        ], 2: [0, [22, 38],
                            [40, 43]
                        ], 3: [0, [81, 84]] }, 51: { 0: [0], 1: [0, 1, [4, 8],
                            [12, 15],
                            [21, 24], 29, 31, 32, [81, 84]
                        ], 3: [
                            [0, 4], 11, 21, 22
                        ], 4: [
                            [0, 3], 11, 21, 22
                        ], 5: [
                            [0, 4], 21, 22, 24, 25
                        ], 6: [0, 1, 3, 23, 26, [81, 83]], 7: [0, 1, 3, 4, [22, 27], 81], 8: [
                            [0, 2], 11, 12, [21, 24]
                        ], 9: [
                            [0, 4],
                            [21, 23]
                        ], 10: [
                            [0, 2], 11, 24, 25, 28
                        ], 11: [
                            [0, 2],
                            [11, 13], 23, 24, 26, 29, 32, 33, 81
                        ], 13: [
                            [0, 4],
                            [21, 25], 81
                        ], 14: [
                            [0, 2],
                            [21, 25]
                        ], 15: [
                            [0, 3],
                            [21, 29]
                        ], 16: [
                            [0, 3],
                            [21, 23], 81
                        ], 17: [
                            [0, 3],
                            [21, 25], 81
                        ], 18: [
                            [0, 3],
                            [21, 27]
                        ], 19: [
                            [0, 3],
                            [21, 23]
                        ], 20: [
                            [0, 2], 21, 22, 81
                        ], 32: [0, [21, 33]], 33: [0, [21, 38]], 34: [0, 1, [22, 37]] }, 52: { 0: [0], 1: [
                            [0, 3],
                            [11, 15],
                            [21, 23], 81
                        ], 2: [0, 1, 3, 21, 22], 3: [
                            [0, 3],
                            [21, 30], 81, 82
                        ], 4: [
                            [0, 2],
                            [21, 25]
                        ], 5: [
                            [0, 2],
                            [21, 27]
                        ], 6: [
                            [0, 3],
                            [21, 28]
                        ], 22: [0, 1, [22, 30]], 23: [0, 1, [22, 28]], 24: [0, 1, [22, 28]], 26: [0, 1, [22, 36]], 27: [
                            [0, 2], 22, 23, [25, 32]
                        ] }, 53: { 0: [0], 1: [
                            [0, 3],
                            [11, 14], 21, 22, [24, 29], 81
                        ], 3: [
                            [0, 2],
                            [21, 26], 28, 81
                        ], 4: [
                            [0, 2],
                            [21, 28]
                        ], 5: [
                            [0, 2],
                            [21, 24]
                        ], 6: [
                            [0, 2],
                            [21, 30]
                        ], 7: [
                            [0, 2],
                            [21, 24]
                        ], 8: [
                            [0, 2],
                            [21, 29]
                        ], 9: [
                            [0, 2],
                            [21, 27]
                        ], 23: [0, 1, [22, 29], 31], 25: [
                            [0, 4],
                            [22, 32]
                        ], 26: [0, 1, [21, 28]], 27: [0, 1, [22, 30]], 28: [0, 1, 22, 23], 29: [0, 1, [22, 32]], 31: [0, 2, 3, [22, 24]], 34: [0, [21, 23]], 33: [0, 21, [23, 25]], 35: [0, [21, 28]] }, 54: { 0: [0], 1: [
                            [0, 2],
                            [21, 27]
                        ], 21: [0, [21, 29], 32, 33], 22: [0, [21, 29],
                            [31, 33]
                        ], 23: [0, 1, [22, 38]], 24: [0, [21, 31]], 25: [0, [21, 27]], 26: [0, [21, 27]] }, 61: { 0: [0], 1: [
                            [0, 4],
                            [11, 16], 22, [24, 26]
                        ], 2: [
                            [0, 4], 22
                        ], 3: [
                            [0, 4],
                            [21, 24],
                            [26, 31]
                        ], 4: [
                            [0, 4],
                            [22, 31], 81
                        ], 5: [
                            [0, 2],
                            [21, 28], 81, 82
                        ], 6: [
                            [0, 2],
                            [21, 32]
                        ], 7: [
                            [0, 2],
                            [21, 30]
                        ], 8: [
                            [0, 2],
                            [21, 31]
                        ], 9: [
                            [0, 2],
                            [21, 29]
                        ], 10: [
                            [0, 2],
                            [21, 26]
                        ] }, 62: { 0: [0], 1: [
                            [0, 5], 11, [21, 23]
                        ], 2: [0, 1], 3: [
                            [0, 2], 21
                        ], 4: [
                            [0, 3],
                            [21, 23]
                        ], 5: [
                            [0, 3],
                            [21, 25]
                        ], 6: [
                            [0, 2],
                            [21, 23]
                        ], 7: [
                            [0, 2],
                            [21, 25]
                        ], 8: [
                            [0, 2],
                            [21, 26]
                        ], 9: [
                            [0, 2],
                            [21, 24], 81, 82
                        ], 10: [
                            [0, 2],
                            [21, 27]
                        ], 11: [
                            [0, 2],
                            [21, 26]
                        ], 12: [
                            [0, 2],
                            [21, 28]
                        ], 24: [0, 21, [24, 29]], 26: [0, 21, [23, 30]], 29: [0, 1, [21, 27]], 30: [0, 1, [21, 27]] }, 63: { 0: [0], 1: [
                            [0, 5],
                            [21, 23]
                        ], 2: [0, 2, [21, 25]], 21: [0, [21, 23],
                            [26, 28]
                        ], 22: [0, [21, 24]], 23: [0, [21, 24]], 25: [0, [21, 25]], 26: [0, [21, 26]], 27: [0, 1, [21, 26]], 28: [
                            [0, 2],
                            [21, 23]
                        ] }, 64: { 0: [0], 1: [0, 1, [4, 6], 21, 22, 81], 2: [
                            [0, 3], 5, [21, 23]
                        ], 3: [
                            [0, 3],
                            [21, 24], 81
                        ], 4: [
                            [0, 2],
                            [21, 25]
                        ], 5: [
                            [0, 2], 21, 22
                        ] }, 65: { 0: [0], 1: [
                            [0, 9], 21
                        ], 2: [
                            [0, 5]
                        ], 21: [0, 1, 22, 23], 22: [0, 1, 22, 23], 23: [
                            [0, 3],
                            [23, 25], 27, 28
                        ], 28: [0, 1, [22, 29]], 29: [0, 1, [22, 29]], 30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]], 32: [0, 1, [21, 27]], 40: [0, 2, 3, [21, 28]], 42: [
                            [0, 2], 21, [23, 26]
                        ], 43: [0, 1, [21, 26]], 90: [
                            [0, 4]
                        ], 27: [
                            [0, 2], 22, 23
                        ] }, 71: { 0: [0] }, 81: { 0: [0] }, 82: { 0: [0] } },
                i = parseInt(e.substr(0, 2), 10),
                r = parseInt(e.substr(2, 2), 10),
                n = parseInt(e.substr(4, 2), 10); if (!a[i] || !a[i][r]) return !1; for (var s = !1, o = a[i][r], l = 0; l < o.length; l++)
                if (t.isArray(o[l]) && o[l][0] <= n && n <= o[l][1] || !t.isArray(o[l]) && n === o[l]) { s = !0; break } if (!s) return !1; var d;
            d = 18 === e.length ? e.substr(6, 8) : "19" + e.substr(6, 6); var u = parseInt(d.substr(0, 4), 10),
                f = parseInt(d.substr(4, 2), 10),
                c = parseInt(d.substr(6, 2), 10); if (!FormValidation.Helper.date(u, f, c)) return !1; if (18 === e.length) { var h = 0,
                    m = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; for (l = 0; l < 17; l++) h += parseInt(e.charAt(l), 10) * m[l];
                h = (12 - h % 11) % 11; var p = "X" !== e.charAt(17).toUpperCase() ? parseInt(e.charAt(17), 10) : 10; return p === h } return !0 },
        _cz: function(t) { if (!/^\d{9,10}$/.test(t)) return !1; var e = 1900 + parseInt(t.substr(0, 2), 10),
                a = parseInt(t.substr(2, 2), 10) % 50 % 20,
                i = parseInt(t.substr(4, 2), 10); if (9 === t.length) { if (e >= 1980 && (e -= 100), e > 1953) return !1 } else e < 1954 && (e += 100); if (!FormValidation.Helper.date(e, a, i)) return !1; if (10 === t.length) { var r = parseInt(t.substr(0, 9), 10) % 11; return e < 1985 && (r %= 10), r + "" === t.substr(9, 1) } return !0 },
        _dk: function(t) { if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)) return !1;
            t = t.replace(/-/g, ""); var e = parseInt(t.substr(0, 2), 10),
                a = parseInt(t.substr(2, 2), 10),
                i = parseInt(t.substr(4, 2), 10); switch (!0) {
                case "5678".indexOf(t.charAt(6)) !== -1 && i >= 58:
                    i += 1800; break;
                case "0123".indexOf(t.charAt(6)) !== -1:
                case "49".indexOf(t.charAt(6)) !== -1 && i >= 37:
                    i += 1900; break;
                default:
                    i += 2e3 } return FormValidation.Helper.date(i, a, e) },
        _ee: function(t) { return this._lt(t) },
        _es: function(t) { var e = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),
                a = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),
                i = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(t); if (!e && !a && !i) return !1;
            t = t.replace(/-/g, ""); var r; if (e || a) { var n = "XYZ".indexOf(t.charAt(0)); return n !== -1 && (t = n + t.substr(1) + ""), r = parseInt(t.substr(0, 8), 10), r = "TRWAGMYFPDXBNJZSQVHLCKE" [r % 23], r === t.substr(8, 1) } r = t.substr(1, 7); for (var s = t[0], o = t.substr(-1), l = 0, d = 0; d < r.length; d++)
                if (d % 2 !== 0) l += parseInt(r[d], 10);
                else { var u = "" + 2 * parseInt(r[d], 10);
                    l += parseInt(u[0], 10), 2 === u.length && (l += parseInt(u[1], 10)) } var f = l - 10 * Math.floor(l / 10); return 0 !== f && (f = 10 - f), "KQS".indexOf(s) !== -1 ? o === "JABCDEFGHI" [f] : "ABEH".indexOf(s) !== -1 ? o === "" + f : o === "" + f || o === "JABCDEFGHI" [f] },
        _fi: function(t) { if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t)) return !1; var e = parseInt(t.substr(0, 2), 10),
                a = parseInt(t.substr(2, 2), 10),
                i = parseInt(t.substr(4, 2), 10),
                r = { "+": 1800, "-": 1900, A: 2e3 }; if (i = r[t.charAt(6)] + i, !FormValidation.Helper.date(i, a, e)) return !1; var n = parseInt(t.substr(7, 3), 10); if (n < 2) return !1; var s = t.substr(0, 6) + t.substr(7, 3) + ""; return s = parseInt(s, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(s % 31) === t.charAt(10) },
        _hr: function(t) { return !!/^[0-9]{11}$/.test(t) && FormValidation.Helper.mod11And10(t) },
        _ie: function(t) { if (!/^\d{7}[A-W][AHWTX]?$/.test(t)) return !1; var e = function(t) { for (; t.length < 7;) t = "0" + t; for (var e = "WABCDEFGHIJKLMNOPQRSTUV", a = 0, i = 0; i < 7; i++) a += parseInt(t.charAt(i), 10) * (8 - i); return a += 9 * e.indexOf(t.substr(7)), e[a % 23] }; return 9 !== t.length || "A" !== t.charAt(8) && "H" !== t.charAt(8) ? t.charAt(7) === e(t.substr(0, 7)) : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") },
        _is: function(t) { if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)) return !1;
            t = t.replace(/-/g, ""); var e = parseInt(t.substr(0, 2), 10),
                a = parseInt(t.substr(2, 2), 10),
                i = parseInt(t.substr(4, 2), 10),
                r = parseInt(t.charAt(9), 10); if (i = 9 === r ? 1900 + i : 100 * (20 + r) + i, !FormValidation.Helper.date(i, a, e, !0)) return !1; for (var n = 0, s = [3, 2, 7, 6, 5, 4, 3, 2], o = 0; o < 8; o++) n += parseInt(t.charAt(o), 10) * s[o]; return n = 11 - n % 11, n + "" === t.charAt(8) },
        _lt: function(t) { if (!/^[0-9]{11}$/.test(t)) return !1; var e = parseInt(t.charAt(0), 10),
                a = parseInt(t.substr(1, 2), 10),
                i = parseInt(t.substr(3, 2), 10),
                r = parseInt(t.substr(5, 2), 10),
                n = e % 2 === 0 ? 17 + e / 2 : 17 + (e + 1) / 2; if (a = 100 * n + a, !FormValidation.Helper.date(a, i, r, !0)) return !1; for (var s = 0, o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], l = 0; l < 10; l++) s += parseInt(t.charAt(l), 10) * o[l]; if (s %= 11, 10 !== s) return s + "" === t.charAt(10); for (s = 0, o = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], l = 0; l < 10; l++) s += parseInt(t.charAt(l), 10) * o[l]; return s %= 11, 10 === s && (s = 0), s + "" === t.charAt(10) },
        _lv: function(t) { if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t)) return !1;
            t = t.replace(/\D/g, ""); var e = parseInt(t.substr(0, 2), 10),
                a = parseInt(t.substr(2, 2), 10),
                i = parseInt(t.substr(4, 2), 10); if (i = i + 1800 + 100 * parseInt(t.charAt(6), 10), !FormValidation.Helper.date(i, a, e, !0)) return !1; for (var r = 0, n = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], s = 0; s < 10; s++) r += parseInt(t.charAt(s), 10) * n[s]; return r = (r + 1) % 11 % 10, r + "" === t.charAt(10) },
        _nl: function(t) { for (; t.length < 9;) t = "0" + t; if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) return !1; if (t = t.replace(/\./g, ""), 0 === parseInt(t, 10)) return !1; for (var e = 0, a = t.length, i = 0; i < a - 1; i++) e += (9 - i) * parseInt(t.charAt(i), 10); return e %= 11, 10 === e && (e = 0), e + "" === t.charAt(a - 1) },
        _ro: function(t) { if (!/^[0-9]{13}$/.test(t)) return !1; var e = parseInt(t.charAt(0), 10); if (0 === e || 7 === e || 8 === e) return !1; var a = parseInt(t.substr(1, 2), 10),
                i = parseInt(t.substr(3, 2), 10),
                r = parseInt(t.substr(5, 2), 10),
                n = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 }; if (r > 31 && i > 12) return !1; if (9 !== e && (a = n[e + ""] + a, !FormValidation.Helper.date(a, i, r))) return !1; for (var s = 0, o = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], l = t.length, d = 0; d < l - 1; d++) s += parseInt(t.charAt(d), 10) * o[d]; return s %= 11, 10 === s && (s = 1), s + "" === t.charAt(l - 1) },
        _se: function(t) { if (!/^[0-9]{10}$/.test(t) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(t)) return !1;
            t = t.replace(/[^0-9]/g, ""); var e = parseInt(t.substr(0, 2), 10) + 1900,
                a = parseInt(t.substr(2, 2), 10),
                i = parseInt(t.substr(4, 2), 10); return !!FormValidation.Helper.date(e, a, i) && FormValidation.Helper.luhn(t) },
        _sk: function(t) { return this._cz(t) },
        _sm: function(t) { return /^\d{5}$/.test(t) },
        _th: function(t) { if (13 !== t.length) return !1; for (var e = 0, a = 0; a < 12; a++) e += parseInt(t.charAt(a), 10) * (13 - a); return (11 - e % 11) % 10 === parseInt(t.charAt(12), 10) },
        _za: function(t) { if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t)) return !1; var e = parseInt(t.substr(0, 2), 10),
                a = (new Date).getFullYear() % 100,
                i = parseInt(t.substr(2, 2), 10),
                r = parseInt(t.substr(4, 2), 10); return e = e >= a ? e + 1900 : e + 2e3, !!FormValidation.Helper.date(e, i, r) && FormValidation.Helper.luhn(t) }
    }
}(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { identical: { "default": "Please enter the same value" } } }), FormValidation.Validator.identical = { html5Attributes: { message: "message", field: "field" }, init: function(t, e, a) { var i = t.getFieldElements(a.field);
            t.onLiveChange(i, "live_identical", function() { var a = t.getStatus(e, "identical");
                a !== t.STATUS_NOT_VALIDATED && t.revalidateField(e) }) }, destroy: function(t, e, a) { var i = t.getFieldElements(a.field);
            t.offLiveChange(i, "live_identical") }, validate: function(t, e, a) { var i = t.getFieldValue(e, "identical"),
                r = t.getFieldElements(a.field); if (null === r || 0 === r.length) return !0; var n = t.getFieldValue(r, "identical"); return i === n && (t.updateStatus(r, t.STATUS_VALID, "identical"), !0) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { imei: { "default": "Please enter a valid IMEI number" } } }), FormValidation.Validator.imei = { validate: function(t, e, a) { var i = t.getFieldValue(e, "imei"); if ("" === i) return !0; switch (!0) {
                case /^\d{15}$/.test(i):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(i):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(i):
                    return i = i.replace(/[^0-9]/g, ""), FormValidation.Helper.luhn(i);
                case /^\d{14}$/.test(i):
                case /^\d{16}$/.test(i):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(i):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(i):
                    return !0;
                default:
                    return !1 } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { imo: { "default": "Please enter a valid IMO number" } } }), FormValidation.Validator.imo = { validate: function(t, e, a) { var i = t.getFieldValue(e, "imo"); if ("" === i) return !0; if (!/^IMO \d{7}$/i.test(i)) return !1; for (var r = 0, n = i.replace(/^.*(\d{7})$/, "$1"), s = 6; s >= 1; s--) r += n.slice(6 - s, -s) * (s + 1); return r % 10 === parseInt(n.charAt(6), 10) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { integer: { "default": "Please enter a valid number" } } }), FormValidation.Validator.integer = { enableByHtml5: function(t) { return "number" === t.attr("type") && (void 0 === t.attr("step") || t.attr("step") % 1 === 0) }, validate: function(t, e, a) { if (this.enableByHtml5(e) && e.get(0).validity && e.get(0).validity.badInput === !0) return !1; var i = t.getFieldValue(e, "integer"); return "" === i || /^(?:-?(?:0|[1-9][0-9]*))$/.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ip: { "default": "Please enter a valid IP address", ipv4: "Please enter a valid IPv4 address", ipv6: "Please enter a valid IPv6 address" } } }), FormValidation.Validator.ip = { html5Attributes: { message: "message", ipv4: "ipv4", ipv6: "ipv6" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "ip"); if ("" === r) return !0;
            i = t.extend({}, { ipv4: !0, ipv6: !0 }, i); var n, s = e.getLocale(),
                o = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                l = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                d = !1; switch (!0) {
                case i.ipv4 && !i.ipv6:
                    d = o.test(r), n = i.message || FormValidation.I18n[s].ip.ipv4; break;
                case !i.ipv4 && i.ipv6:
                    d = l.test(r), n = i.message || FormValidation.I18n[s].ip.ipv6; break;
                case i.ipv4 && i.ipv6:
                default:
                    d = o.test(r) || l.test(r), n = i.message || FormValidation.I18n[s].ip["default"] } return { valid: d, message: n } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { isbn: { "default": "Please enter a valid ISBN number" } } }), FormValidation.Validator.isbn = { validate: function(t, e, a) { var i = t.getFieldValue(e, "isbn"); if ("" === i) return !0; var r; switch (!0) {
                case /^\d{9}[\dX]$/.test(i):
                case 13 === i.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(i):
                case 13 === i.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(i):
                    r = "ISBN10"; break;
                case /^(978|979)\d{9}[\dX]$/.test(i):
                case 17 === i.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(i):
                case 17 === i.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(i):
                    r = "ISBN13"; break;
                default:
                    return !1 } i = i.replace(/[^0-9X]/gi, ""); var n, s, o = i.split(""),
                l = o.length,
                d = 0; switch (r) {
                case "ISBN10":
                    for (d = 0, n = 0; n < l - 1; n++) d += parseInt(o[n], 10) * (10 - n); return s = 11 - d % 11, 11 === s ? s = 0 : 10 === s && (s = "X"), s + "" === o[l - 1];
                case "ISBN13":
                    for (d = 0, n = 0; n < l - 1; n++) d += n % 2 === 0 ? parseInt(o[n], 10) : 3 * parseInt(o[n], 10); return s = 10 - d % 10, 10 === s && (s = "0"), s + "" === o[l - 1];
                default:
                    return !1 } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { isin: { "default": "Please enter a valid ISIN number" } } }), FormValidation.Validator.isin = { COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW", validate: function(t, e, a) { var i = t.getFieldValue(e, "isin"); if ("" === i) return !0;
            i = i.toUpperCase(); var r = new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$"); if (!r.test(i)) return !1; for (var n = "", s = i.length, o = 0; o < s - 1; o++) { var l = i.charCodeAt(o);
                n += l > 57 ? (l - 55).toString() : i.charAt(o) } var d = "",
                u = n.length,
                f = u % 2 !== 0 ? 0 : 1; for (o = 0; o < u; o++) d += parseInt(n[o], 10) * (o % 2 === f ? 2 : 1) + ""; var c = 0; for (o = 0; o < d.length; o++) c += parseInt(d.charAt(o), 10); return c = (10 - c % 10) % 10, c + "" === i.charAt(s - 1) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { ismn: { "default": "Please enter a valid ISMN number" } } }), FormValidation.Validator.ismn = { validate: function(t, e, a) { var i = t.getFieldValue(e, "ismn"); if ("" === i) return !0; var r; switch (!0) {
                case /^M\d{9}$/.test(i):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(i):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(i):
                    r = "ISMN10"; break;
                case /^9790\d{9}$/.test(i):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(i):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(i):
                    r = "ISMN13"; break;
                default:
                    return !1 } "ISMN10" === r && (i = "9790" + i.substr(1)), i = i.replace(/[^0-9]/gi, ""); for (var n = i.length, s = 0, o = [1, 3], l = 0; l < n - 1; l++) s += parseInt(i.charAt(l), 10) * o[l % 2]; return s = 10 - s % 10, s + "" === i.charAt(n - 1) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { issn: { "default": "Please enter a valid ISSN number" } } }), FormValidation.Validator.issn = { validate: function(t, e, a) { var i = t.getFieldValue(e, "issn"); if ("" === i) return !0; if (!/^\d{4}\-\d{3}[\dX]$/.test(i)) return !1;
            i = i.replace(/[^0-9X]/gi, ""); var r = i.split(""),
                n = r.length,
                s = 0; "X" === r[7] && (r[7] = 10); for (var o = 0; o < n; o++) s += parseInt(r[o], 10) * (8 - o); return s % 11 === 0 } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { lessThan: { "default": "Please enter a value less than or equal to %s", notInclusive: "Please enter a value less than %s" } } }), FormValidation.Validator.lessThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(t) { var e = t.attr("type"),
                a = t.attr("max"); return !(!a || "date" === e) && { value: a } }, validate: function(e, a, i) { var r = e.getFieldValue(a, "lessThan"); if ("" === r) return !0; if (r = this._format(r), !t.isNumeric(r)) return !1; var n = e.getLocale(),
                s = t.isNumeric(i.value) ? i.value : e.getDynamicOption(a, i.value),
                o = this._format(s); return r = parseFloat(r), i.inclusive === !0 || void 0 === i.inclusive ? { valid: r <= o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].lessThan["default"], s) } : { valid: r < o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].lessThan.notInclusive, s) } }, _format: function(t) { return (t + "").replace(",", ".") } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { mac: { "default": "Please enter a valid MAC address" } } }), FormValidation.Validator.mac = { validate: function(t, e, a) { var i = t.getFieldValue(e, "mac"); return "" === i || /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { meid: { "default": "Please enter a valid MEID number" } } }), FormValidation.Validator.meid = { validate: function(t, e, a) { var i = t.getFieldValue(e, "meid"); if ("" === i) return !0; switch (!0) {
                case /^[0-9A-F]{15}$/i.test(i):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(i):
                case /^\d{19}$/.test(i):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(i):
                    var r = i.charAt(i.length - 1); if (i = i.replace(/[- ]/g, ""), i.match(/^\d*$/i)) return FormValidation.Helper.luhn(i);
                    i = i.slice(0, -1); for (var n = "", s = 1; s <= 13; s += 2) n += (2 * parseInt(i.charAt(s), 16)).toString(16); var o = 0; for (s = 0; s < n.length; s++) o += parseInt(n.charAt(s), 16); return o % 10 === 0 ? "0" === r : r === (2 * (10 * Math.floor((o + 10) / 10) - o)).toString(16);
                case /^[0-9A-F]{14}$/i.test(i):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(i):
                case /^\d{18}$/.test(i):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(i):
                    return !0;
                default:
                    return !1 } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { notEmpty: { "default": "Please enter a value" } } }), FormValidation.Validator.notEmpty = { enableByHtml5: function(t) { var e = t.attr("required") + ""; return "required" === e || "true" === e }, validate: function(e, a, i) { var r = a.attr("type"); if ("radio" === r || "checkbox" === r) { var n = e.getNamespace(); return e.getFieldElements(a.attr("data-" + n + "-field")).filter(":checked").length > 0 } return !("number" !== r || !a.get(0).validity || a.get(0).validity.badInput !== !0) || "" !== t.trim(a.val()) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { numeric: { "default": "Please enter a valid float number" } } }), FormValidation.Validator.numeric = { html5Attributes: { message: "message", separator: "separator" }, enableByHtml5: function(t) { return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 !== 0 }, validate: function(t, e, a) { if (this.enableByHtml5(e) && e.get(0).validity && e.get(0).validity.badInput === !0) return !1; var i = t.getFieldValue(e, "numeric"); if ("" === i) return !0; var r = a.separator || "."; return "." !== r && (i = i.replace(r, ".")), !isNaN(parseFloat(i)) && isFinite(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { phone: { "default": "Please enter a valid phone number", country: "Please enter a valid phone number in %s", countries: { AE: "United Arab Emirates", BR: "Brazil", CN: "China", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IN: "India", MA: "Morocco", NL: "Netherlands", PK: "Pakistan", RO: "Romania", RU: "Russia", SK: "Slovakia", TH: "Thailand", US: "USA", VE: "Venezuela" } } } }), FormValidation.Validator.phone = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AE", "BR", "CN", "CZ", "DE", "DK", "ES", "FR", "GB", "IN", "MA", "NL", "PK", "RO", "RU", "SK", "TH", "US", "VE"], validate: function(e, a, i) { var r = e.getFieldValue(a, "phone"); if ("" === r) return !0; var n = e.getLocale(),
                s = i.country; if ("string" == typeof s && t.inArray(s, this.COUNTRY_CODES) !== -1 || (s = e.getDynamicOption(a, s)), !s || t.inArray(s.toUpperCase(), this.COUNTRY_CODES) === -1) return !0; var o = !0; switch (s.toUpperCase()) {
                case "AE":
                    r = t.trim(r), o = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(r); break;
                case "BR":
                    r = t.trim(r), o = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(r); break;
                case "CN":
                    r = t.trim(r), o = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(r); break;
                case "CZ":
                    o = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r); break;
                case "DE":
                    r = t.trim(r), o = /^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[ \-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-\/]?))[0-9]{1,7}([ \-\/]?[0-9]{1,5})?)$/.test(r); break;
                case "DK":
                    r = t.trim(r), o = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(r); break;
                case "ES":
                    r = t.trim(r), o = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(r); break;
                case "FR":
                    r = t.trim(r), o = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(r); break;
                case "GB":
                    r = t.trim(r), o = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(r); break;
                case "IN":
                    r = t.trim(r), o = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(r); break;
                case "MA":
                    r = t.trim(r), o = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(r); break;
                case "NL":
                    r = t.trim(r), o = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/.test(r); break;
                case "PK":
                    r = t.trim(r), o = /^0?3[0-9]{2}[0-9]{7}$/.test(r); break;
                case "RO":
                    o = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(r); break;
                case "RU":
                    o = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(r); break;
                case "SK":
                    o = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r); break;
                case "TH":
                    o = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(r); break;
                case "VE":
                    r = t.trim(r), o = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(r); break;
                case "US":
                default:
                    o = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(r) } return { valid: o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].phone.country, FormValidation.I18n[n].phone.countries[s]) } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { regexp: { "default": "Please enter a value matching the pattern" } } }), FormValidation.Validator.regexp = { html5Attributes: { message: "message", regexp: "regexp" }, enableByHtml5: function(t) { var e = t.attr("pattern"); return !!e && { regexp: e } }, validate: function(t, e, a) { var i = t.getFieldValue(e, "regexp"); if ("" === i) return !0; var r = "string" == typeof a.regexp ? new RegExp(a.regexp) : a.regexp; return r.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { remote: { "default": "Please enter a valid value" } } }), FormValidation.Validator.remote = { html5Attributes: { message: "message", name: "name", type: "type", url: "url", data: "data", delay: "delay" }, destroy: function(t, e, a) { var i = t.getNamespace(),
                r = e.data(i + ".remote.timer");
            r && (clearTimeout(r), e.removeData(i + ".remote.timer")) }, validate: function(e, a, i) {
            function r() { var e = t.ajax({ type: f, headers: c, url: u, dataType: "json", data: d }); return e.success(function(t) { t.valid = t.valid === !0 || "true" === t.valid, o.resolve(a, "remote", t) }).error(function(t) { o.resolve(a, "remote", { valid: !1 }) }), o.fail(function() { e.abort() }), o } var n = e.getNamespace(),
                s = e.getFieldValue(a, "remote"),
                o = new t.Deferred; if ("" === s) return o.resolve(a, "remote", { valid: !0 }), o; var l = a.attr("data-" + n + "-field"),
                d = i.data || {},
                u = i.url,
                f = i.type || "GET",
                c = i.headers || {}; return "function" == typeof d && (d = d.call(this, e)), "string" == typeof d && (d = JSON.parse(d)), "function" == typeof u && (u = u.call(this, e)), d[i.name || l] = s, i.delay ? (a.data(n + ".remote.timer") && clearTimeout(a.data(n + ".remote.timer")), a.data(n + ".remote.timer", setTimeout(r, i.delay)), o) : r() } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { rtn: { "default": "Please enter a valid RTN number" } } }), FormValidation.Validator.rtn = { validate: function(t, e, a) { var i = t.getFieldValue(e, "rtn"); if ("" === i) return !0; if (!/^\d{9}$/.test(i)) return !1; for (var r = 0, n = 0; n < i.length; n += 3) r += 3 * parseInt(i.charAt(n), 10) + 7 * parseInt(i.charAt(n + 1), 10) + parseInt(i.charAt(n + 2), 10); return 0 !== r && r % 10 === 0 } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { sedol: { "default": "Please enter a valid SEDOL number" } } }), FormValidation.Validator.sedol = { validate: function(t, e, a) { var i = t.getFieldValue(e, "sedol"); if ("" === i) return !0; if (i = i.toUpperCase(), !/^[0-9A-Z]{7}$/.test(i)) return !1; for (var r = 0, n = [1, 3, 1, 7, 3, 9, 1], s = i.length, o = 0; o < s - 1; o++) r += n[o] * parseInt(i.charAt(o), 36); return r = (10 - r % 10) % 10, r + "" === i.charAt(s - 1) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { siren: { "default": "Please enter a valid SIREN number" } } }), FormValidation.Validator.siren = { validate: function(t, e, a) { var i = t.getFieldValue(e, "siren"); return "" === i || !!/^\d{9}$/.test(i) && FormValidation.Helper.luhn(i) } } }(jQuery),
function(t) {
    FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { siret: { "default": "Please enter a valid SIRET number" } } }), FormValidation.Validator.siret = {
        validate: function(t, e, a) { var i = t.getFieldValue(e, "siret"); if ("" === i) return !0; for (var r, n = 0, s = i.length, o = 0; o < s; o++) r = parseInt(i.charAt(o), 10), o % 2 === 0 && (r = 2 * r, r > 9 && (r -= 9)), n += r; return n % 10 === 0 }
    }
}(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { step: { "default": "Please enter a valid step of %s" } } }), FormValidation.Validator.step = { html5Attributes: { message: "message", base: "baseValue", step: "step" }, validate: function(e, a, i) { var r = e.getFieldValue(a, "step"); if ("" === r) return !0; if (i = t.extend({}, { baseValue: 0, step: 1 }, i), r = parseFloat(r), !t.isNumeric(r)) return !1; var n = function(t, e) { var a = Math.pow(10, e);
                    t *= a; var i = t > 0 | -(t < 0),
                        r = t % 1 === .5 * i; return r ? (Math.floor(t) + (i > 0)) / a : Math.round(t) / a },
                s = function(t, e) { if (0 === e) return 1; var a = (t + "").split("."),
                        i = (e + "").split("."),
                        r = (1 === a.length ? 0 : a[1].length) + (1 === i.length ? 0 : i[1].length); return n(t - e * Math.floor(t / e), r) },
                o = e.getLocale(),
                l = s(r - i.baseValue, i.step); return { valid: 0 === l || l === i.step, message: FormValidation.Helper.format(i.message || FormValidation.I18n[o].step["default"], [i.step]) } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { stringCase: { "default": "Please enter only lowercase characters", upper: "Please enter only uppercase characters" } } }), FormValidation.Validator.stringCase = { html5Attributes: { message: "message", "case": "case" }, validate: function(t, e, a) { var i = t.getFieldValue(e, "stringCase"); if ("" === i) return !0; var r = t.getLocale(),
                n = (a["case"] || "lower").toLowerCase(); return { valid: "upper" === n ? i === i.toUpperCase() : i === i.toLowerCase(), message: a.message || ("upper" === n ? FormValidation.I18n[r].stringCase.upper : FormValidation.I18n[r].stringCase["default"]) } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { stringLength: { "default": "Please enter a value with valid length", less: "Please enter less than %s characters", more: "Please enter more than %s characters", between: "Please enter value between %s and %s characters long" } } }), FormValidation.Validator.stringLength = { html5Attributes: { message: "message", min: "min", max: "max", trim: "trim", utf8bytes: "utf8Bytes" }, enableByHtml5: function(e) { var a = {},
                i = e.attr("maxlength"),
                r = e.attr("minlength"); return i && (a.max = parseInt(i, 10)), r && (a.min = parseInt(r, 10)), !t.isEmptyObject(a) && a }, validate: function(e, a, i) { var r = e.getFieldValue(a, "stringLength"); if (i.trim !== !0 && "true" !== i.trim || (r = t.trim(r)), "" === r) return !0; var n = e.getLocale(),
                s = t.isNumeric(i.min) ? i.min : e.getDynamicOption(a, i.min),
                o = t.isNumeric(i.max) ? i.max : e.getDynamicOption(a, i.max),
                l = function(t) { for (var e = t.length, a = t.length - 1; a >= 0; a--) { var i = t.charCodeAt(a);
                        i > 127 && i <= 2047 ? e++ : i > 2047 && i <= 65535 && (e += 2), i >= 56320 && i <= 57343 && a-- } return e },
                d = i.utf8Bytes ? l(r) : r.length,
                u = !0,
                f = i.message || FormValidation.I18n[n].stringLength["default"]; switch ((s && d < parseInt(s, 10) || o && d > parseInt(o, 10)) && (u = !1), !0) {
                case !!s && !!o:
                    f = FormValidation.Helper.format(i.message || FormValidation.I18n[n].stringLength.between, [parseInt(s, 10), parseInt(o, 10)]); break;
                case !!s:
                    f = FormValidation.Helper.format(i.message || FormValidation.I18n[n].stringLength.more, parseInt(s, 10)); break;
                case !!o:
                    f = FormValidation.Helper.format(i.message || FormValidation.I18n[n].stringLength.less, parseInt(o, 10)) } return { valid: u, message: f } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { uri: { "default": "Please enter a valid URI" } } }), FormValidation.Validator.uri = { html5Attributes: { message: "message", allowlocal: "allowLocal", allowemptyprotocol: "allowEmptyProtocol", protocol: "protocol" }, enableByHtml5: function(t) { return "url" === t.attr("type") }, validate: function(t, e, a) { var i = t.getFieldValue(e, "uri"); if ("" === i) return !0; var r = a.allowLocal === !0 || "true" === a.allowLocal,
                n = a.allowEmptyProtocol === !0 || "true" === a.allowEmptyProtocol,
                s = (a.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, ""),
                o = new RegExp("^(?:(?:" + s + ")://)" + (n ? "?" : "") + "(?:\\S+(?::\\S*)?@)?(?:" + (r ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (r ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i"); return o.test(i) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { uuid: { "default": "Please enter a valid UUID number", version: "Please enter a valid UUID version %s number" } } }), FormValidation.Validator.uuid = { html5Attributes: { message: "message", version: "version" }, validate: function(t, e, a) { var i = t.getFieldValue(e, "uuid"); if ("" === i) return !0; var r = t.getLocale(),
                n = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i },
                s = a.version ? a.version + "" : "all"; return { valid: null === n[s] || n[s].test(i), message: a.version ? FormValidation.Helper.format(a.message || FormValidation.I18n[r].uuid.version, a.version) : a.message || FormValidation.I18n[r].uuid["default"] } } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { vat: { "default": "Please enter a valid VAT number", country: "Please enter a valid VAT number in %s", countries: { AT: "Austria", BE: "Belgium", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", FR: "France", GB: "United Kingdom", GR: "Greek", EL: "Greek", HU: "Hungary", HR: "Croatia", IE: "Ireland", IS: "Iceland", IT: "Italy", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MT: "Malta", NL: "Netherlands", NO: "Norway", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", VE: "Venezuela", ZA: "South Africa" } } } }), FormValidation.Validator.vat = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"], validate: function(e, a, i) { var r = e.getFieldValue(a, "vat"); if ("" === r) return !0; var n = e.getLocale(),
                s = i.country; if (s ? "string" == typeof s && t.inArray(s.toUpperCase(), this.COUNTRY_CODES) !== -1 || (s = e.getDynamicOption(a, s)) : s = r.substr(0, 2), t.inArray(s, this.COUNTRY_CODES) === -1) return !0; var o = ["_", s.toLowerCase()].join(""); return !!this[o](r) || { valid: !1, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].vat.country, FormValidation.I18n[n].vat.countries[s.toUpperCase()]) } }, _at: function(t) { if (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t)) return !1;
            t = t.substr(1); for (var e = 0, a = [1, 2, 1, 2, 1, 2, 1], i = 0, r = 0; r < 7; r++) i = parseInt(t.charAt(r), 10) * a[r], i > 9 && (i = Math.floor(i / 10) + i % 10), e += i; return e = 10 - (e + 4) % 10, 10 === e && (e = 0), e + "" === t.substr(7, 1) }, _be: function(t) { if (/^BE[0]{0,1}[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0]{0,1}[0-9]{9}$/.test(t)) return !1; if (9 === t.length && (t = "0" + t), "0" === t.substr(1, 1)) return !1; var e = parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10); return e % 97 === 0 }, _bg: function(t) { if (/^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9,10}$/.test(t)) return !1; var e = 0,
                a = 0; if (9 === t.length) { for (a = 0; a < 8; a++) e += parseInt(t.charAt(a), 10) * (a + 1); if (e %= 11, 10 === e)
                    for (e = 0, a = 0; a < 8; a++) e += parseInt(t.charAt(a), 10) * (a + 3); return e %= 10, e + "" === t.substr(8) } if (10 === t.length) { var i = function(t) { var e = parseInt(t.substr(0, 2), 10) + 1900,
                            a = parseInt(t.substr(2, 2), 10),
                            i = parseInt(t.substr(4, 2), 10); if (a > 40 ? (e += 100, a -= 40) : a > 20 && (e -= 100, a -= 20), !FormValidation.Helper.date(e, a, i)) return !1; for (var r = 0, n = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; s < 9; s++) r += parseInt(t.charAt(s), 10) * n[s]; return r = r % 11 % 10, r + "" === t.substr(9, 1) },
                    r = function(t) { for (var e = 0, a = [21, 19, 17, 13, 11, 9, 7, 3, 1], i = 0; i < 9; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e %= 10, e + "" === t.substr(9, 1) },
                    n = function(t) { for (var e = 0, a = [4, 3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 9; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e = 11 - e % 11, 10 !== e && (11 === e && (e = 0), e + "" === t.substr(9, 1)) }; return i(t) || r(t) || n(t) } return !1 }, _br: function(t) { if ("" === t) return !0; var e = t.replace(/[^\d]+/g, ""); if ("" === e || 14 !== e.length) return !1; if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e) return !1; for (var a = e.length - 2, i = e.substring(0, a), r = e.substring(a), n = 0, s = a - 7, o = a; o >= 1; o--) n += parseInt(i.charAt(a - o), 10) * s--, s < 2 && (s = 9); var l = n % 11 < 2 ? 0 : 11 - n % 11; if (l !== parseInt(r.charAt(0), 10)) return !1; for (a += 1, i = e.substring(0, a), n = 0, s = a - 7, o = a; o >= 1; o--) n += parseInt(i.charAt(a - o), 10) * s--, s < 2 && (s = 9); return l = n % 11 < 2 ? 0 : 11 - n % 11, l === parseInt(r.charAt(1), 10) }, _ch: function(t) { if (/^CHE[0-9]{9}(MWST)?$/.test(t) && (t = t.substr(2)), !/^E[0-9]{9}(MWST)?$/.test(t)) return !1;
            t = t.substr(1); for (var e = 0, a = [5, 4, 3, 2, 7, 6, 5, 4], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e = 11 - e % 11, 10 !== e && (11 === e && (e = 0), e + "" === t.substr(8, 1)) }, _cy: function(t) { if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t) && (t = t.substr(2)), !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)) return !1; if ("12" === t.substr(0, 2)) return !1; for (var e = 0, a = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 }, i = 0; i < 8; i++) { var r = parseInt(t.charAt(i), 10);
                i % 2 === 0 && (r = a[r + ""]), e += r } return e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [e % 26], e + "" === t.substr(8, 1) }, _cz: function(t) { if (/^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8,10}$/.test(t)) return !1; var e = 0,
                a = 0; if (8 === t.length) { if (t.charAt(0) + "" == "9") return !1; for (e = 0, a = 0; a < 7; a++) e += parseInt(t.charAt(a), 10) * (8 - a); return e = 11 - e % 11, 10 === e && (e = 0), 11 === e && (e = 1), e + "" === t.substr(7, 1) } if (9 === t.length && t.charAt(0) + "" == "6") { for (e = 0, a = 0; a < 7; a++) e += parseInt(t.charAt(a + 1), 10) * (8 - a); return e = 11 - e % 11, 10 === e && (e = 0), 11 === e && (e = 1), e = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][e - 1], e + "" === t.substr(8, 1) } if (9 === t.length || 10 === t.length) { var i = 1900 + parseInt(t.substr(0, 2), 10),
                    r = parseInt(t.substr(2, 2), 10) % 50 % 20,
                    n = parseInt(t.substr(4, 2), 10); if (9 === t.length) { if (i >= 1980 && (i -= 100), i > 1953) return !1 } else i < 1954 && (i += 100); if (!FormValidation.Helper.date(i, r, n)) return !1; if (10 === t.length) { var s = parseInt(t.substr(0, 9), 10) % 11; return i < 1985 && (s %= 10), s + "" === t.substr(9, 1) } return !0 } return !1 }, _de: function(t) { return /^DE[0-9]{9}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{9}$/.test(t) && FormValidation.Helper.mod11And10(t) }, _dk: function(t) { if (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [2, 7, 6, 5, 4, 3, 2, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 11 === 0 }, _ee: function(t) { if (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 0, a = [3, 7, 1, 3, 7, 1, 3, 7, 1], i = 0; i < 9; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 10 === 0 }, _es: function(t) { if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)), !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)) return !1; var e = function(t) { var e = parseInt(t.substr(0, 8), 10); return e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23], e + "" === t.substr(8, 1) },
                a = function(t) { var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join(""); return e = parseInt(e, 10), e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23], e + "" === t.substr(8, 1) },
                i = function(t) { var e, a = t.charAt(0); if ("KLM".indexOf(a) !== -1) return e = parseInt(t.substr(1, 8), 10), e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23], e + "" === t.substr(8, 1); if ("ABCDEFGHJNPQRSUVW".indexOf(a) !== -1) { for (var i = 0, r = [2, 1, 2, 1, 2, 1, 2], n = 0, s = 0; s < 7; s++) n = parseInt(t.charAt(s + 1), 10) * r[s], n > 9 && (n = Math.floor(n / 10) + n % 10), i += n; return i = 10 - i % 10, i + "" === t.substr(8, 1) || "JABCDEFGHI" [i] === t.substr(8, 1) } return !1 },
                r = t.charAt(0); return /^[0-9]$/.test(r) ? e(t) : /^[XYZ]$/.test(r) ? a(t) : i(t) }, _fi: function(t) { if (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [7, 9, 10, 5, 8, 4, 2, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 11 === 0 }, _fr: function(t) { if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9A-Z]{2}[0-9]{9}$/.test(t)) return !1; if (!FormValidation.Helper.luhn(t.substr(2))) return !1; if (/^[0-9]{2}$/.test(t.substr(0, 2))) return t.substr(0, 2) === parseInt(t.substr(2) + "12", 10) % 97 + ""; var e, a = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; return e = /^[0-9]{1}$/.test(t.charAt(0)) ? 24 * a.indexOf(t.charAt(0)) + a.indexOf(t.charAt(1)) - 10 : 34 * a.indexOf(t.charAt(0)) + a.indexOf(t.charAt(1)) - 100, (parseInt(t.substr(2), 10) + 1 + Math.floor(e / 11)) % 11 === e % 11 }, _gb: function(t) { if ((/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2)), !(/^[0-9]{9}$/.test(t) || /^[0-9]{12}$/.test(t) || /^GD[0-9]{3}$/.test(t) || /^HA[0-9]{3}$/.test(t) || /^(GD|HA)8888[0-9]{5}$/.test(t))) return !1; var e = t.length; if (5 === e) { var a = t.substr(0, 2),
                    i = parseInt(t.substr(2), 10); return "GD" === a && i < 500 || "HA" === a && i >= 500 } if (11 === e && ("GD8888" === t.substr(0, 6) || "HA8888" === t.substr(0, 6))) return !("GD" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || "HA" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) && parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10); if (9 === e || 12 === e) { for (var r = 0, n = [8, 7, 6, 5, 4, 3, 2, 10, 1], s = 0; s < 9; s++) r += parseInt(t.charAt(s), 10) * n[s]; return r %= 97, parseInt(t.substr(0, 3), 10) >= 100 ? 0 === r || 42 === r || 55 === r : 0 === r } return !0 }, _gr: function(t) { if (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
            8 === t.length && (t = "0" + t); for (var e = 0, a = [256, 128, 64, 32, 16, 8, 4, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e = e % 11 % 10, e + "" === t.substr(8, 1) }, _el: function(t) { return this._gr(t) }, _hu: function(t) { if (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [9, 7, 3, 1, 9, 7, 3, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 10 === 0 }, _hr: function(t) { return /^HR[0-9]{11}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{11}$/.test(t) && FormValidation.Helper.mod11And10(t) }, _ie: function(t) { if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)) return !1; var e = function(t) { for (; t.length < 7;) t = "0" + t; for (var e = "WABCDEFGHIJKLMNOPQRSTUV", a = 0, i = 0; i < 7; i++) a += parseInt(t.charAt(i), 10) * (8 - i); return a += 9 * e.indexOf(t.substr(7)), e[a % 23] }; return /^[0-9]+$/.test(t.substr(0, 7)) ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") : "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1)) === -1 || t.charAt(7) === e(t.substr(2, 5) + t.substr(0, 1) + "") }, _is: function(t) { return /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)), /^[0-9]{5,6}$/.test(t) }, _it: function(t) { if (/^IT[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)) return !1; if (0 === parseInt(t.substr(0, 7), 10)) return !1; var e = parseInt(t.substr(7, 3), 10); return !(e < 1 || e > 201 && 999 !== e && 888 !== e) && FormValidation.Helper.luhn(t) }, _lt: function(t) { if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t) && (t = t.substr(2)), !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t)) return !1; var e, a = t.length,
                i = 0; for (e = 0; e < a - 1; e++) i += parseInt(t.charAt(e), 10) * (1 + e % 9); var r = i % 11; if (10 === r)
                for (i = 0, e = 0; e < a - 1; e++) i += parseInt(t.charAt(e), 10) * (1 + (e + 2) % 9); return r = r % 11 % 10, r + "" === t.charAt(a - 1) }, _lu: function(t) { return /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{8}$/.test(t) && parseInt(t.substr(0, 6), 10) % 89 + "" === t.substr(6, 2) }, _lv: function(t) { if (/^LV[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)) return !1; var e, a = parseInt(t.charAt(0), 10),
                i = 0,
                r = [],
                n = t.length; if (a > 3) { for (i = 0, r = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], e = 0; e < n; e++) i += parseInt(t.charAt(e), 10) * r[e]; return i %= 11, 3 === i } var s = parseInt(t.substr(0, 2), 10),
                o = parseInt(t.substr(2, 2), 10),
                l = parseInt(t.substr(4, 2), 10); if (l = l + 1800 + 100 * parseInt(t.charAt(6), 10), !FormValidation.Helper.date(l, o, s)) return !1; for (i = 0, r = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], e = 0; e < n - 1; e++) i += parseInt(t.charAt(e), 10) * r[e]; return i = (i + 1) % 11 % 10, i + "" === t.charAt(n - 1) }, _mt: function(t) { if (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1; for (var e = 0, a = [3, 4, 6, 7, 8, 9, 10, 1], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 37 === 0 }, _nl: function(t) { if (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}B[0-9]{2}$/.test(t)) return !1; for (var e = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e %= 11, e > 9 && (e = 0), e + "" === t.substr(8, 1) }, _no: function(t) { if (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e = 11 - e % 11, 11 === e && (e = 0), e + "" === t.substr(8, 1) }, _pl: function(t) { if (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t)) return !1; for (var e = 0, a = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], i = 0; i < 10; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e % 11 === 0 }, _pt: function(t) { if (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], i = 0; i < 8; i++) e += parseInt(t.charAt(i), 10) * a[i]; return e = 11 - e % 11, e > 9 && (e = 0), e + "" === t.substr(8, 1) }, _ro: function(t) { if (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)), !/^[1-9][0-9]{1,9}$/.test(t)) return !1; for (var e = t.length, a = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e), i = 0, r = 0; r < e - 1; r++) i += parseInt(t.charAt(r), 10) * a[r]; return i = 10 * i % 11 % 10, i + "" === t.substr(e - 1, 1) }, _ru: function(t) { if (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)), !/^([0-9]{10}|[0-9]{12})$/.test(t)) return !1; var e = 0; if (10 === t.length) { var a = 0,
                    i = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0]; for (e = 0; e < 10; e++) a += parseInt(t.charAt(e), 10) * i[e]; return a %= 11, a > 9 && (a %= 10), a + "" === t.substr(9, 1) } if (12 === t.length) { var r = 0,
                    n = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                    s = 0,
                    o = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]; for (e = 0; e < 11; e++) r += parseInt(t.charAt(e), 10) * n[e], s += parseInt(t.charAt(e), 10) * o[e]; return r %= 11, r > 9 && (r %= 10), s %= 11, s > 9 && (s %= 10), r + "" === t.substr(10, 1) && s + "" === t.substr(11, 1) } return !1 }, _rs: function(t) { if (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1; for (var e = 10, a = 0, i = 0; i < 8; i++) a = (parseInt(t.charAt(i), 10) + e) % 10, 0 === a && (a = 10), e = 2 * a % 11; return (e + parseInt(t.substr(8, 1), 10)) % 10 === 1 }, _se: function(t) { return /^SE[0-9]{10}01$/.test(t) && (t = t.substr(2)), !!/^[0-9]{10}01$/.test(t) && (t = t.substr(0, 10), FormValidation.Helper.luhn(t)) }, _si: function(t) { var e = t.match(/^(SI)?([1-9][0-9]{7})$/); if (!e) return !1;
            e[1] && (t = t.substr(2)); for (var a = 0, i = [8, 7, 6, 5, 4, 3, 2], r = 0; r < 7; r++) a += parseInt(t.charAt(r), 10) * i[r]; return a = 11 - a % 11, 10 === a && (a = 0), a + "" === t.substr(7, 1) }, _sk: function(t) { return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)), !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && parseInt(t, 10) % 11 === 0 }, _ve: function(t) { if (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[VEJPG][0-9]{9}$/.test(t)) return !1; for (var e = { V: 4, E: 8, J: 12, P: 16, G: 20 }, a = e[t.charAt(0)], i = [3, 2, 7, 6, 5, 4, 3, 2], r = 0; r < 8; r++) a += parseInt(t.charAt(r + 1), 10) * i[r]; return a = 11 - a % 11, 11 !== a && 10 !== a || (a = 0), a + "" === t.substr(9, 1) }, _za: function(t) { return /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)), /^4[0-9]{9}$/.test(t) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { vin: { "default": "Please enter a valid VIN number" } } }), FormValidation.Validator.vin = { validate: function(t, e, a) { var i = t.getFieldValue(e, "vin"); if ("" === i) return !0; if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(i)) return !1;
            i = i.toUpperCase(); for (var r = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 }, n = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], s = 0, o = i.length, l = 0; l < o; l++) s += r[i.charAt(l) + ""] * n[l]; var d = s % 11; return 10 === d && (d = "X"), d + "" === i.charAt(8) } } }(jQuery),
function(t) { FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, { en_US: { zipCode: { "default": "Please enter a valid postal code", country: "Please enter a valid postal code in %s", countries: { AT: "Austria", BG: "Bulgaria", BR: "Brazil", CA: "Canada", CH: "Switzerland", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IE: "Ireland", IN: "India", IT: "Italy", MA: "Morocco", NL: "Netherlands", PT: "Portugal", RO: "Romania", RU: "Russia", SE: "Sweden", SG: "Singapore", SK: "Slovakia", US: "USA" } } } }), FormValidation.Validator.zipCode = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AT", "BG", "BR", "CA", "CH", "CZ", "DE", "DK", "ES", "FR", "GB", "IE", "IN", "IT", "MA", "NL", "PT", "RO", "RU", "SE", "SG", "SK", "US"], validate: function(e, a, i) { var r = e.getFieldValue(a, "zipCode"); if ("" === r || !i.country) return !0; var n = e.getLocale(),
                s = i.country; if ("string" == typeof s && t.inArray(s, this.COUNTRY_CODES) !== -1 || (s = e.getDynamicOption(a, s)), !s || t.inArray(s.toUpperCase(), this.COUNTRY_CODES) === -1) return !0; var o = !1; switch (s = s.toUpperCase()) {
                case "AT":
                    o = /^([1-9]{1})(\d{3})$/.test(r); break;
                case "BG":
                    o = /^([1-9]{1}[0-9]{3})$/.test(t.trim(r)); break;
                case "BR":
                    o = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(r); break;
                case "CA":
                    o = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(r); break;
                case "CH":
                    o = /^([1-9]{1})(\d{3})$/.test(r); break;
                case "CZ":
                    o = /^(\d{3})([ ]?)(\d{2})$/.test(r); break;
                case "DE":
                    o = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(r); break;
                case "DK":
                    o = /^(DK(-|\s)?)?\d{4}$/i.test(r); break;
                case "ES":
                    o = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(r); break;
                case "FR":
                    o = /^[0-9]{5}$/i.test(r); break;
                case "GB":
                    o = this._gb(r); break;
                case "IN":
                    o = /^\d{3}\s?\d{3}$/.test(r); break;
                case "IE":
                    o = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(r); break;
                case "IT":
                    o = /^(I-|IT-)?\d{5}$/i.test(r); break;
                case "MA":
                    o = /^[1-9][0-9]{4}$/i.test(r); break;
                case "NL":
                    o = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(r); break;
                case "PT":
                    o = /^[1-9]\d{3}-\d{3}$/.test(r); break;
                case "RO":
                    o = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(r); break;
                case "RU":
                    o = /^[0-9]{6}$/i.test(r); break;
                case "SE":
                    o = /^(S-)?\d{3}\s?\d{2}$/i.test(r); break;
                case "SG":
                    o = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(r); break;
                case "SK":
                    o = /^(\d{3})([ ]?)(\d{2})$/.test(r); break;
                case "US":
                default:
                    o = /^\d{4,5}([\-]?\d{4})?$/.test(r) } return { valid: o, message: FormValidation.Helper.format(i.message || FormValidation.I18n[n].zipCode.country, FormValidation.I18n[n].zipCode.countries[s]) } }, _gb: function(t) { for (var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]", a = "[ABCDEFGHKLMNOPQRSTUVWXY]", i = "[ABCDEFGHJKPMNRSTUVWXY]", r = "[ABEHMNPRVWXY]", n = "[ABDEFGHJLNPQRSTUWXYZ]", s = [new RegExp("^(" + e + "{1}" + a + "?[0-9]{1,2})(\\s*)([0-9]{1}" + n + "{2})$", "i"), new RegExp("^(" + e + "{1}[0-9]{1}" + i + "{1})(\\s*)([0-9]{1}" + n + "{2})$", "i"), new RegExp("^(" + e + "{1}" + a + "{1}?[0-9]{1}" + r + "{1})(\\s*)([0-9]{1}" + n + "{2})$", "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], o = 0; o < s.length; o++)
                if (s[o].test(t)) return !0; return !1 } } }(jQuery);
! function(o) { FormValidation.Framework.Bootstrap = function(t, e, a) { e = o.extend(!0, { button: { selector: '[type="submit"]', disabled: "disabled" }, err: { clazz: "help-block", parent: "^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$" }, icon: { valid: null, invalid: null, validating: null, feedback: "form-control-feedback" }, row: { selector: ".form-group", valid: "has-success", invalid: "has-error", feedback: "has-feedback" } }, e), FormValidation.Base.apply(this, [t, e, a]) }, FormValidation.Framework.Bootstrap.prototype = o.extend({}, FormValidation.Base.prototype, { _fixIcon: function(o, t) { var e = this._namespace,
                a = o.attr("type"),
                r = o.attr("data-" + e + "-field"),
                i = this.options.fields[r].row || this.options.row.selector,
                s = o.closest(i); if ("checkbox" === a || "radio" === a) { var n = o.parent();
                n.hasClass(a) ? t.insertAfter(n) : n.parent().hasClass(a) && t.insertAfter(n.parent()) } 0 === s.find("label").length && t.addClass("fv-icon-no-label"), 0 !== s.find(".input-group").length && t.addClass("fv-bootstrap-icon-input-group").insertAfter(s.find(".input-group").eq(0)) }, _createTooltip: function(o, t, e) { var a = this._namespace,
                r = o.data(a + ".icon"); if (r) switch (e) {
                case "popover":
                    r.css({ cursor: "pointer", "pointer-events": "auto" }).popover("destroy").popover({ container: "body", content: t, html: !0, placement: "auto top", trigger: "hover click" }); break;
                case "tooltip":
                default:
                    r.css({ cursor: "pointer", "pointer-events": "auto" }).tooltip("destroy").tooltip({ container: "body", html: !0, placement: "auto top", title: t }) } }, _destroyTooltip: function(o, t) { var e = this._namespace,
                a = o.data(e + ".icon"); if (a) switch (t) {
                case "popover":
                    a.css({ cursor: "", "pointer-events": "none" }).popover("destroy"); break;
                case "tooltip":
                default:
                    a.css({ cursor: "", "pointer-events": "none" }).tooltip("destroy") } }, _hideTooltip: function(o, t) { var e = this._namespace,
                a = o.data(e + ".icon"); if (a) switch (t) {
                case "popover":
                    a.popover("hide"); break;
                case "tooltip":
                default:
                    a.tooltip("hide") } }, _showTooltip: function(o, t) { var e = this._namespace,
                a = o.data(e + ".icon"); if (a) switch (t) {
                case "popover":
                    a.popover("show"); break;
                case "tooltip":
                default:
                    a.tooltip("show") } } }), o.fn.bootstrapValidator = function(t) { var e = arguments; return this.each(function() { var a = o(this),
                r = a.data("formValidation") || a.data("bootstrapValidator"),
                i = "object" == typeof t && t;
            r || (r = new FormValidation.Framework.Bootstrap(this, o.extend({}, { events: { formInit: "init.form.bv", formError: "error.form.bv", formSuccess: "success.form.bv", fieldAdded: "added.field.bv", fieldRemoved: "removed.field.bv", fieldInit: "init.field.bv", fieldError: "error.field.bv", fieldSuccess: "success.field.bv", fieldStatus: "status.field.bv", localeChanged: "changed.locale.bv", validatorError: "error.validator.bv", validatorSuccess: "success.validator.bv" } }, i), "bv"), a.addClass("fv-form-bootstrap").data("formValidation", r).data("bootstrapValidator", r)), "string" == typeof t && r[t].apply(r, Array.prototype.slice.call(e, 1)) }) }, o.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap }(jQuery);
! function(t) {
    function e() {}

    function i(t) {
        function i(e) { e.prototype.option || (e.prototype.option = function(e) { t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)) }) }

        function n(e, i) { t.fn[e] = function(n) { if ("string" == typeof n) { for (var s = o.call(arguments, 1), a = 0, u = this.length; a < u; a++) { var p = this[a],
                            h = t.data(p, e); if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) { var f = h[n].apply(h, s); if (void 0 !== f) return f } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + n + "'") } return this } return this.each(function() { var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o)) }) } } if (t) { var r = "undefined" == typeof console ? e : function(t) { console.error(t) }; return t.bridget = function(t, e) { i(e), n(t, e) }, t.bridget } } var o = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery) }(window),
function(t) {
    function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i } var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (o = function(t, i, o) { t[i + o] = o.handleEvent ? function() { var i = e(t);
            o.handleEvent.call(o, i) } : function() { var i = e(t);
            o.call(t, i) }, t.attachEvent("on" + i, t[i + o]) }); var n = function() {};
    i.removeEventListener ? n = function(t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (n = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (o) { t[e + i] = void 0 } }); var r = { bind: o, unbind: n }; "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r }(window),
function() { "use strict";

    function t() {}

    function e(t, e) { for (var i = t.length; i--;)
            if (t[i].listener === e) return i; return -1 }

    function i(t) { return function() { return this[t].apply(this, arguments) } } var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) { var e, i, o = this._getEvents(); if (t instanceof RegExp) { e = {}; for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]) } else e = o[t] || (o[t] = []); return e }, o.flattenListeners = function(t) { var e, i = []; for (e = 0; e < t.length; e += 1) i.push(t[e].listener); return i }, o.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && (e = {}, e[t] = i), e || i }, o.addListener = function(t, i) { var o, n = this.getListenersAsObject(t),
            r = "object" == typeof i; for (o in n) n.hasOwnProperty(o) && e(n[o], i) === -1 && n[o].push(r ? i : { listener: i, once: !1 }); return this }, o.on = i("addListener"), o.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, o.once = i("addOnceListener"), o.defineEvent = function(t) { return this.getListeners(t), this }, o.defineEvents = function(t) { for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]); return this }, o.removeListener = function(t, i) { var o, n, r = this.getListenersAsObject(t); for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), o !== -1 && r[n].splice(o, 1)); return this }, o.off = i("removeListener"), o.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, o.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, o.manipulateListeners = function(t, e, i) { var o, n, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners; if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;) r.call(this, e, i[o]);
        else
            for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n)); return this }, o.removeEvent = function(t) { var e, i = typeof t,
            o = this._getEvents(); if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events; return this }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) { var i, o, n, r, s = this.getListenersAsObject(t); for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener); return this }, o.trigger = i("emitEvent"), o.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, o.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, o._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, o._getEvents = function() { return this._events || (this._events = {}) }, t.noConflict = function() { return n.EventEmitter = r, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t }.call(this),
    function(t) {
        function e(t) { if (t) { if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1); for (var e, n = 0, r = i.length; n < r; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e } } var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() { return e }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e }(window),
    function(t, e) {
        function i(t) { var e = parseFloat(t),
                i = t.indexOf("%") === -1 && !isNaN(e); return i && e }

        function o() {}

        function n() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = a.length; e < i; e++) { var o = a[e];
                t[o] = 0 } return t }

        function r(e) {
            function o() { if (!l) { l = !0; var o = t.getComputedStyle; if (p = function() { var t = o ? function(t) { return o(t, null) } : function(t) { return t.currentStyle }; return function(e) { var i = t(e); return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i } }(), h = e("boxSizing")) { var n = document.createElement("div");
                        n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box"; var r = document.body || document.documentElement;
                        r.appendChild(n); var a = p(n);
                        f = 200 === i(a.width), r.removeChild(n) } } }

            function r(t) { if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) { var e = p(t); if ("none" === e.display) return n(); var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight; for (var s = r.isBorderBox = !(!h || !e[h] || "border-box" !== e[h]), l = 0, d = a.length; l < d; l++) { var c = a[l],
                            y = e[c];
                        y = u(t, y); var m = parseFloat(y);
                        r[c] = isNaN(m) ? 0 : m } var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        _ = r.marginLeft + r.marginRight,
                        I = r.marginTop + r.marginBottom,
                        z = r.borderLeftWidth + r.borderRightWidth,
                        L = r.borderTopWidth + r.borderBottomWidth,
                        x = s && f,
                        E = i(e.width);
                    E !== !1 && (r.width = E + (x ? 0 : g + z)); var b = i(e.height); return b !== !1 && (r.height = b + (x ? 0 : v + L)), r.innerWidth = r.width - (g + z), r.innerHeight = r.height - (v + L), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r } }

            function u(e, i) { if (t.getComputedStyle || i.indexOf("%") === -1) return i; var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left; return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i } var p, h, f, l = !1; return r } var s = "undefined" == typeof console ? o : function(t) { console.error(t) },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty) }(window),
    function(t) {
        function e(t) { "function" == typeof t && (e.isReady ? t() : s.push(t)) }

        function i(t) { var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || o() }

        function o() { e.isReady = !0; for (var t = 0, i = s.length; t < i; t++) { var o = s[t];
                o() } }

        function n(n) { return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e } var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie) }(window),
    function(t) { "use strict";

        function e(t, e) { return t[s](e) }

        function i(t) { if (!t.parentNode) { var e = document.createDocumentFragment();
                e.appendChild(t) } }

        function o(t, e) { i(t); for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; n < r; n++)
                if (o[n] === t) return !0; return !1 }

        function n(t, o) { return i(t), e(t, o) } var r, s = function() { if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; i < o; i++) { var n = e[i],
                    r = n + "MatchesSelector"; if (t[r]) return r } }(); if (s) { var a = document.createElement("div"),
                u = e(a, "div");
            r = u ? e : n } else r = o; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() { return r }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r }(Element.prototype),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, o) { return e(t, i, o) }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector) }(window, function(t, e, i) { var o = {};
        o.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, o.modulo = function(t, e) { return (t % e + e) % e }; var n = Object.prototype.toString;
        o.isArray = function(t) { return "[object Array]" == n.call(t) }, o.makeArray = function(t) { var e = []; if (o.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, n = t.length; i < n; i++) e.push(t[i]);
            else e.push(t); return e }, o.indexOf = Array.prototype.indexOf ? function(t, e) { return t.indexOf(e) } : function(t, e) { for (var i = 0, o = t.length; i < o; i++)
                if (t[i] === e) return i; return -1 }, o.removeFrom = function(t, e) { var i = o.indexOf(t, e);
            i != -1 && t.splice(i, 1) }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) { return t instanceof HTMLElement } : function(t) { return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName }, o.setText = function() {
            function t(t, i) { e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i } var e; return t }(), o.getParent = function(t, e) { for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t }, o.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, o.handleEvent = function(t) { var e = "on" + t.type;
            this[e] && this[e](t) }, o.filterFindElements = function(t, e) { t = o.makeArray(t); for (var n = [], r = 0, s = t.length; r < s; r++) { var a = t[r]; if (o.isElement(a))
                    if (e) { i(a, e) && n.push(a); for (var u = a.querySelectorAll(e), p = 0, h = u.length; p < h; p++) n.push(u[p]) } else n.push(a) } return n }, o.debounceMethod = function(t, e, i) { var o = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() { var t = this[n];
                t && clearTimeout(t); var e = arguments,
                    r = this;
                this[n] = setTimeout(function() { o.apply(r, e), delete r[n] }, i || 100) } }, o.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() }; var r = t.console; return o.htmlInit = function(i, n) { e(function() { for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; u < p; u++) { var h, f = s[u],
                        l = f.getAttribute(a); try { h = l && JSON.parse(l) } catch (d) { r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + d); continue } var c = new i(f, h),
                        y = t.jQuery;
                    y && y.data(f, n, c) } }) }, o }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, o, n, r) { return e(t, i, o, n, r) }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils)) }(window, function(t, e, i, o, n) { "use strict";

        function r(t) { for (var e in t) return !1; return e = null, !0 }

        function s(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

        function a(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) } var u = t.getComputedStyle,
            p = u ? function(t) { return u(t, null) } : function(t) { return t.currentStyle },
            h = o("transition"),
            f = o("transform"),
            l = h && f,
            d = !!o("perspective"),
            c = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" } [h],
            y = ["transform", "transition", "transitionDuration", "transitionProperty"],
            m = function() { for (var t = {}, e = 0, i = y.length; e < i; e++) { var n = y[e],
                        r = o(n);
                    r && r !== n && (t[n] = r) } return t }();
        n.extend(s.prototype, e.prototype), s.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, s.prototype.handleEvent = function(t) { var e = "on" + t.type;
            this[e] && this[e](t) }, s.prototype.getSize = function() { this.size = i(this.element) }, s.prototype.css = function(t) { var e = this.element.style; for (var i in t) { var o = m[i] || i;
                e[o] = t[i] } }, s.prototype.getPosition = function() { var t = p(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                o = e.isOriginTop,
                n = t[i ? "left" : "right"],
                r = t[o ? "top" : "bottom"],
                s = this.layout.size,
                a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
                u = r.indexOf("%") != -1 ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
            a = isNaN(a) ? 0 : a, u = isNaN(u) ? 0 : u, a -= i ? s.paddingLeft : s.paddingRight, u -= o ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = u }, s.prototype.layoutPosition = function() { var t = this.layout.size,
                e = this.layout.options,
                i = {},
                o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                n = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[o];
            i[n] = this.getXValue(s), i[r] = ""; var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                u = e.isOriginTop ? "top" : "bottom",
                p = e.isOriginTop ? "bottom" : "top",
                h = this.position.y + t[a];
            i[u] = this.getYValue(h), i[p] = "", this.css(i), this.emitEvent("layout", [this]) }, s.prototype.getXValue = function(t) { var e = this.layout.options; return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px" }, s.prototype.getYValue = function(t) { var e = this.layout.options; return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px" }, s.prototype._transitionTo = function(t, e) { this.getPosition(); var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y; if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition(); var a = t - i,
                u = e - o,
                p = {};
            p.transform = this.getTranslate(a, u), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, s.prototype.getTranslate = function(t, e) { var i = this.layout.options; return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, d ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)" }, s.prototype.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, s.prototype.moveTo = l ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, s.prototype._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, s.prototype._transition = function(t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var o = this.element.offsetHeight;
                o = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var g = "opacity," + a(m.transform || "transform");
        s.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: g, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(c, this, !1)) }, s.prototype.transition = s.prototype[h ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, s.prototype.onotransitionend = function(t) { this.ontransitionend(t) }; var v = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
        s.prototype.ontransitionend = function(t) { if (t.target === this.element) { var e = this._transn,
                    i = v[t.propertyName] || t.propertyName; if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) { var o = e.onEnd[i];
                    o.call(this), delete e.onEnd[i] } this.emitEvent("transitionEnd", [this]) } }, s.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1 }, s.prototype._removeStyles = function(t) { var e = {}; for (var i in t) e[i] = "";
            this.css(e) }; var _ = { transitionProperty: "", transitionDuration: "" }; return s.prototype.removeTransitionStyles = function() { this.css(_) }, s.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, s.prototype.remove = function() { if (!h || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem(); var t = this;
            this.once("transitionEnd", function() { t.removeElem() }), this.hide() }, s.prototype.reveal = function() { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, s.prototype.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, s.prototype.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, s.prototype.hide = function() { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, s.prototype.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, s.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, s }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, r, s) { return e(t, i, o, n, r, s) }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, o, n, r) { "use strict";

        function s(t, e) { var i = n.getQueryElement(t); if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e); var o = ++h;
            this.element.outlayerGUID = o, f[o] = this, this._create(), this.options.isInitLayout && this.layout() } var a = t.console,
            u = t.jQuery,
            p = function() {},
            h = 0,
            f = {}; return s.namespace = "outlayer", s.Item = r, s.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, n.extend(s.prototype, i.prototype), s.prototype.option = function(t) { n.extend(this.options, t) }, s.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, s.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, s.prototype._itemize = function(t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; n < r; n++) { var s = e[n],
                    a = new i(s, this);
                o.push(a) } return o }, s.prototype._filterFindItemElements = function(t) { return n.filterFindElements(t, this.options.itemSelector) }, s.prototype.getItemElements = function() { for (var t = [], e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].element); return t }, s.prototype.layout = function() { this._resetLayout(), this._manageStamps(); var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0 }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() { this.getSize() }, s.prototype.getSize = function() { this.size = o(this.element) }, s.prototype._getMeasurement = function(t, e) { var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0 }, s.prototype.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, s.prototype._getItemsForLayout = function(t) { for (var e = [], i = 0, o = t.length; i < o; i++) { var n = t[i];
                n.isIgnored || e.push(n) } return e }, s.prototype._layoutItems = function(t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { for (var i = [], o = 0, n = t.length; o < n; o++) { var r = t[o],
                        s = this._getItemLayoutPosition(r);
                    s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s) } this._processLayoutQueue(i) } }, s.prototype._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, s.prototype._processLayoutQueue = function(t) { for (var e = 0, i = t.length; e < i; e++) { var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant) } }, s.prototype._positionItem = function(t, e, i, o) { o ? t.goTo(e, i) : t.moveTo(e, i) }, s.prototype._postLayout = function() { this.resizeContainer() }, s.prototype.resizeContainer = function() { if (this.options.isResizingContainer) { var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)) } }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function(t, e) { if (void 0 !== t) { var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() { n.dispatchEvent(t + "Complete", null, [e]) }

            function o() { s++, s === r && i() } var n = this,
                r = e.length; if (!e || !r) return void i(); for (var s = 0, a = 0, u = e.length; a < u; a++) { var p = e[a];
                p.once(t, o) } }, s.prototype.dispatchEvent = function(t, e, i) { var o = e ? [e].concat(i) : i; if (this.emitEvent(t, o), u)
                if (this.$element = this.$element || u(this.element), e) { var n = u.Event(e);
                    n.type = t, this.$element.trigger(n, i) } else this.$element.trigger(t, i) }, s.prototype.ignore = function(t) { var e = this.getItem(t);
            e && (e.isIgnored = !0) }, s.prototype.unignore = function(t) { var e = this.getItem(t);
            e && delete e.isIgnored }, s.prototype.stamp = function(t) { if (t = this._find(t)) { this.stamps = this.stamps.concat(t); for (var e = 0, i = t.length; e < i; e++) { var o = t[e];
                    this.ignore(o) } } }, s.prototype.unstamp = function(t) { if (t = this._find(t))
                for (var e = 0, i = t.length; e < i; e++) { var o = t[e];
                    n.removeFrom(this.stamps, o), this.unignore(o) } }, s.prototype._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t) }, s.prototype._manageStamps = function() { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var t = 0, e = this.stamps.length; t < e; t++) { var i = this.stamps[t];
                    this._manageStamp(i) } } }, s.prototype._getBoundingRect = function() { var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function(t) { var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                n = o(t),
                r = { left: e.left - i.left - n.marginLeft, top: e.top - i.top - n.marginTop, right: i.right - e.right - n.marginRight, bottom: i.bottom - e.bottom - n.marginBottom }; return r }, s.prototype.handleEvent = function(t) { var e = "on" + t.type;
            this[e] && this[e](t) }, s.prototype.bindResize = function() { this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0) }, s.prototype.unbindResize = function() { this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1 }, s.prototype.onresize = function() {
            function t() { e.resize(), delete e.resizeTimeout } this.resizeTimeout && clearTimeout(this.resizeTimeout); var e = this;
            this.resizeTimeout = setTimeout(t, 100) }, s.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, s.prototype.needsResizeLayout = function() { var t = o(this.element),
                e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, s.prototype.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, s.prototype.appended = function(t) { var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e)) }, s.prototype.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, s.prototype.reveal = function(t) { this._emitCompleteOnItems("reveal", t); for (var e = t && t.length, i = 0; e && i < e; i++) { var o = t[i];
                o.reveal() } }, s.prototype.hide = function(t) { this._emitCompleteOnItems("hide", t); for (var e = t && t.length, i = 0; e && i < e; i++) { var o = t[i];
                o.hide() } }, s.prototype.revealItemElements = function(t) { var e = this.getItems(t);
            this.reveal(e) }, s.prototype.hideItemElements = function(t) { var e = this.getItems(t);
            this.hide(e) }, s.prototype.getItem = function(t) { for (var e = 0, i = this.items.length; e < i; e++) { var o = this.items[e]; if (o.element === t) return o } }, s.prototype.getItems = function(t) { t = n.makeArray(t); for (var e = [], i = 0, o = t.length; i < o; i++) { var r = t[i],
                    s = this.getItem(r);
                s && e.push(s) } return e }, s.prototype.remove = function(t) { var e = this.getItems(t); if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, o = e.length; i < o; i++) { var r = e[i];
                    r.remove(), n.removeFrom(this.items, r) } }, s.prototype.destroy = function() { var t = this.element.style;
            t.height = "", t.position = "", t.width = ""; for (var e = 0, i = this.items.length; e < i; e++) { var o = this.items[e];
                o.destroy() } this.unbindResize(); var n = this.element.outlayerGUID;
            delete f[n], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace) }, s.data = function(t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function(t, e) {
            function i() { s.apply(this, arguments) } return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() { r.apply(this, arguments) }, i.Item.prototype = new r, n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i }, s.Item = r, s }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) { "use strict";

        function e() { t.Item.apply(this, arguments) } e.prototype = new t.Item, e.prototype._create = function() { this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {} }, e.prototype.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData,
                    e = this.layout._sorters; for (var i in t) { var o = e[i];
                    this.sortData[i] = o(this.element, this) } } }; var i = e.prototype.destroy; return e.prototype.destroy = function() { i.apply(this, arguments), this.css({ display: "" }) }, e }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) { "use strict";

        function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } return function() {
            function t(t) { return function() { return e.prototype[t].apply(this.isotope, arguments) } } for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; n < r; n++) { var s = o[n];
                i.prototype[s] = t(s) } }(), i.prototype.needsVerticalResizeLayout = function() { var e = t(this.isotope.element),
                i = this.isotope.size && e; return i && e.innerHeight != this.isotope.size.innerHeight }, i.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, i.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, i.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, i.prototype.getSegmentSize = function(t, e) { var i = t + e,
                o = "outer" + e; if (this._getMeasurement(i, o), !this[i]) { var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e] } }, i.prototype.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, i.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, i.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
            function o() { i.apply(this, arguments) } return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o }, i }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils) }(window, function(t, e, i) { var o = t.create("masonry"); return o.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(); var t = this.cols; for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0 }, o.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth } var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                r = n / o,
                s = o - n % o,
                a = s && s < 1 ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1) }, o.prototype.getContainerWidth = function() { var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth }, o.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth,
                o = e && e < 1 ? "round" : "ceil",
                n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols); for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i.indexOf(r, s), u = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; f < h; f++) this.colYs[a + f] = p; return u }, o.prototype._getColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) { var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n) } return e }, o.prototype._manageStamp = function(t) { var i = e(t),
                o = this._getElementOffset(t),
                n = this.options.isOriginLeft ? o.left : o.right,
                r = n + i.outerWidth,
                s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s); var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a); for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; p <= a; p++) this.colYs[p] = Math.max(u, this.colYs[p]) }, o.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t }, o.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, o.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t !== this.containerWidth }, o }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
        "use strict";

        function i(t, e) { for (var i in e) t[i] = e[i]; return t }
        var o = t.create("masonry"),
            n = o.prototype._getElementOffset,
            r = o.prototype.layout,
            s = o.prototype._getMeasurement;
        i(o.prototype, e.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, a.call(this) };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments) }, o
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("fitRows"); return e.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, e.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var o = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o }, e.prototype._getContainerSize = function() { return { height: this.maxY } }, e }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }); return e.prototype._resetLayout = function() { this.y = 0 }, e.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, e.prototype._getContainerSize = function() { return { height: this.y } }, e }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, r, s, a) { return e(t, i, o, n, r, s, a) }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, o, n, r, s) {
        function a(t, e) { return function(i, o) { for (var n = 0, r = t.length; n < r; n++) { var s = t[n],
                        a = i.sortData[s],
                        u = o.sortData[s]; if (a > u || a < u) { var p = void 0 !== e[s] ? e[s] : e,
                            h = p ? 1 : -1; return (a > u ? 1 : -1) * h } } return 0 } } var u = t.jQuery,
            p = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            h = document.documentElement,
            f = h.textContent ? function(t) { return t.textContent } : function(t) { return t.innerText },
            l = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        l.Item = r, l.LayoutMode = s, l.prototype._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in s.modes) this._initLayoutMode(t) }, l.prototype.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, l.prototype._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; i < o; i++) { var n = t[i];
                n.id = this.itemGUID++ } return this._updateItemsSortData(t), t }, l.prototype._initLayoutMode = function(t) { var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this) }, l.prototype.layout = function() { return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, l.prototype._layout = function() { var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, l.prototype.arrange = function(t) {
            function e() { o.reveal(i.needReveal), o.hide(i.needHide) } this.option(t), this._getIsInstant(); var i = this._filter(this.items);
            this.filteredItems = i.matches; var o = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout() }, l.prototype._init = l.prototype.arrange, l.prototype._getIsInstant = function() { var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = t, t }, l.prototype._bindArrangeComplete = function() {
            function t() { e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]) } var e, i, o, n = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { o = !0, t() }) }, l.prototype._filter = function(t) { var e = this.options.filter;
            e = e || "*"; for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; s < a; s++) { var u = t[s]; if (!u.isIgnored) { var p = r(u);
                    p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u) } } return { matches: i, needReveal: o, needHide: n } }, l.prototype._getFilterTest = function(t) { return u && this.options.isJQueryFiltering ? function(e) { return u(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return o(e.element, t) } }, l.prototype.updateSortData = function(t) { var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, l.prototype._getSorters = function() { var t = this.options.getSortData; for (var e in t) { var i = t[e];
                this._sorters[e] = d(i) } }, l.prototype._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && i < e; i++) { var o = t[i];
                o.updateSortData() } }; var d = function() {
            function t(t) { if ("string" != typeof t) return t; var i = p(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    r = n && n[1],
                    s = e(r, o),
                    a = l.sortDataParsers[i[1]]; return t = a ? function(t) { return t && a(s(t)) } : function(t) { return t && s(t) } }

            function e(t, e) { var i; return i = t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && f(i) } } return t }();
        l.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, l.prototype._sort = function() { var t = this.options.sortBy; if (t) { var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t) } }, l.prototype._mode = function() { var t = this.options.layoutMode,
                e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, l.prototype._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, l.prototype._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, l.prototype._manageStamp = function(t) { this._mode()._manageStamp(t) }, l.prototype._getContainerSize = function() { return this._mode()._getContainerSize() }, l.prototype.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, l.prototype.appended = function(t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i) } }, l.prototype.prepended = function(t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, l.prototype._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, l.prototype.insert = function(t) { var e = this.addItems(t); if (e.length) { var i, o, n = e.length; for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element); var r = this._filter(e).matches; for (i = 0; i < n; i++) e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                this.reveal(r) } }; var c = l.prototype.remove; return l.prototype.remove = function(t) { t = n.makeArray(t); var e = this.getItems(t);
            c.call(this, t); var i = e && e.length; if (i)
                for (var o = 0; o < i; o++) { var r = e[o];
                    n.removeFrom(this.filteredItems, r) } }, l.prototype.shuffle = function() { for (var t = 0, e = this.items.length; t < e; t++) { var i = this.items[t];
                i.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, l.prototype._noTransition = function(t) { var e = this.options.transitionDuration;
            this.options.transitionDuration = 0; var i = t.call(this); return this.options.transitionDuration = e, i }, l.prototype.getFilteredItemElements = function() { for (var t = [], e = 0, i = this.filteredItems.length; e < i; e++) t.push(this.filteredItems[e].element); return t }, l });
! function(t) { var e = {},
        s = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "", prevText: "", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, onSliderLoad: function() {}, onSlideBefore: function() {}, onSlideAfter: function() {}, onSlideNext: function() {}, onSlidePrev: function() {}, onSliderResize: function() {} };
    t.fn.bxSlider = function(n) { if (0 == this.length) return this; if (this.length > 1) return this.each(function() { t(this).bxSlider(n) }), this; var o = {},
            r = this;
        e.el = this; var a = t(window).width(),
            l = t(window).height(),
            d = function() { o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = { index: o.settings.startSlide }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() { var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]; for (var i in e)
                        if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0; return !1 }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() { t(this).data("origStyle", t(this).attr("style")) }), c() },
            c = function() { r.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({ width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto", position: "relative" }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing");
                f();
                o.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), o.viewport.parent().css({ maxWidth: v() }), o.settings.pager || o.viewport.parent().css({ margin: "0 auto 0px" }), o.children.css({ "float": "horizontal" == o.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({ position: "absolute", zIndex: 0, display: "none" }), o.children.eq(o.settings.startSlide).css({ zIndex: o.settings.slideZIndex, display: "block" })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids(); var e = o.children.eq(o.settings.startSlide); "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h) },
            g = function(e, i) { var s = e.find("img, iframe").length; if (0 == s) return void i(); var n = 0;
                e.find("img, iframe").each(function() { t(this).one("load", function() {++n == s && i() }).each(function() { this.complete && t(this).load() }) }) },
            h = function() { if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) { var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                        i = o.children.slice(0, e).clone().addClass("bx-clone"),
                        s = o.children.slice(-e).clone().addClass("bx-clone");
                    r.append(i).prepend(s) } o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", V), o.settings.auto && o.settings.autoStart && (x() > 1 || o.settings.autoSlideForOnePage) && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O() },
            p = function() { var e = 0,
                    s = t(); if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                    if (o.carousel) { var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m(); for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i)) } else s = o.children.eq(o.active.index);
                else s = o.children; return "vertical" == o.settings.mode ? (s.each(function(i) { e += t(this).outerHeight() }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() { return t(this).outerHeight(!1) }).get()), "border-box" == o.viewport.css("box-sizing") ? e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" == o.viewport.css("box-sizing") && (e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), e },
            v = function() { var t = "100%"; return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t },
            u = function() { var t = o.settings.slideWidth,
                    e = o.viewport.width(); return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t },
            f = function() { var t = 1; if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                    if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                    else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                else { var e = o.children.first().width() + o.settings.slideMargin;
                    t = Math.floor((o.viewport.width() + o.settings.slideMargin) / e) } else "vertical" == o.settings.mode && (t = o.settings.minSlides); return t },
            x = function() { var t = 0; if (o.settings.moveSlides > 0)
                    if (o.settings.infiniteLoop) t = Math.ceil(o.children.length / m());
                    else
                        for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                else t = Math.ceil(o.children.length / f()); return t },
            m = function() { return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f() },
            S = function() { if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) { if ("horizontal" == o.settings.mode) { var t = o.children.last(),
                            e = t.position();
                        b(-(e.left - (o.viewport.width() - t.outerWidth())), "reset", 0) } else if ("vertical" == o.settings.mode) { var i = o.children.length - o.settings.minSlides,
                            e = o.children.eq(i).position();
                        b(-e.top, "reset", 0) } } else { var e = o.children.eq(o.active.index * m()).position();
                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0)) } },
            b = function(t, e, i, s) { if (o.usingCSS) { var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D() })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), F() })) } else { var a = {};
                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() { D() }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() { b(s.resetValue, "reset", 0), F() }) } },
            w = function() { for (var e = "", i = x(), s = 0; s < i; s++) { var n = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>" } o.pagerEl.html(e) },
            T = function() { o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I) },
            C = function() { o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", z), o.controls.prev.bind("click", y), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl)) },
            E = function() { o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", M), o.controls.autoEl.on("click", ".bx-stop", k), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start") },
            P = function() { o.children.each(function(e) { var i = t(this).find("img:first").attr("title");
                    void 0 != i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>") }) },
            z = function(t) { o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault() },
            y = function(t) { o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault() },
            M = function(t) { r.startAuto(), t.preventDefault() },
            k = function(t) { r.stopAuto(), t.preventDefault() },
            I = function(e) { o.settings.auto && r.stopAuto(); var i = t(e.currentTarget); if (void 0 !== i.attr("data-slide-index")) { var s = parseInt(i.attr("data-slide-index"));
                    s != o.active.index && r.goToSlide(s), e.preventDefault() } },
            q = function(e) { var i = o.children.length; return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function(i, s) { t(s).find("a").eq(e).addClass("active") })) },
            D = function() { if (o.settings.infiniteLoop) { var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)) } o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index) },
            A = function(t) { o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active")) },
            W = function() { 1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled"))) },
            H = function() { if (o.settings.autoDelay > 0) { setTimeout(r.startAuto, o.settings.autoDelay) } else r.startAuto();
                o.settings.autoHover && r.hover(function() { o.interval && (r.stopAuto(!0), o.autoPaused = !0) }, function() { o.autoPaused && (r.startAuto(!0), o.autoPaused = null) }) },
            L = function() { var e = 0; if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                else { r.prepend(o.children.clone().addClass("bx-clone")); var i = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -i.left : -i.top } b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() { r.stop() }, function() { var e = 0;
                    o.children.each(function(i) { e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0) }); var i = o.settings.speed / e,
                        s = "horizontal" == o.settings.mode ? "left" : "top",
                        n = i * (e - Math.abs(parseInt(r.css(s))));
                    F(n) }), F() },
            F = function(t) { speed = t ? t : o.settings.speed; var e = { left: 0, top: 0 },
                    i = { left: 0, top: 0 }; "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position(); var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                    n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                    a = { resetValue: n };
                b(s, "ticker", speed, a) },
            O = function() { o.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, o.viewport.bind("touchstart", N) },
            N = function(t) { if (o.working) t.preventDefault();
                else { o.touch.originalPos = r.position(); var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", X), o.viewport.bind("touchend", Y) } },
            X = function(t) { var e = t.originalEvent,
                    i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                    s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y); if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) { var n = 0; if ("horizontal" == o.settings.mode) { var r = e.changedTouches[0].pageX - o.touch.start.x;
                        n = o.touch.originalPos.left + r } else { var r = e.changedTouches[0].pageY - o.touch.start.y;
                        n = o.touch.originalPos.top + r } b(n, "reset", 0) } },
            Y = function(t) { o.viewport.unbind("touchmove", X); var e = t.originalEvent,
                    i = 0; if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) { var s = Math.abs(o.touch.start.x - o.touch.end.x);
                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) } else { var s = 0; "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && s < 0) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (s < 0 ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200) } o.viewport.unbind("touchend", Y) },
            V = function(e) { if (o.initialized) { var i = t(window).width(),
                        s = t(window).height();
                    a == i && l == s || (a = i, l = s, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index)) } }; return r.goToSlide = function(e, i) { if (!o.working && o.active.index != e)
                if (o.working = !0, o.oldIndex = o.active.index, e < 0 ? o.active.index = x() - 1 : e >= x() ? o.active.index = 0 : o.active.index = e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({ height: p() }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({ zIndex: 0 }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() { t(this).css("zIndex", o.settings.slideZIndex), D() });
                else { o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({ height: p() }, o.settings.adaptiveHeightSpeed); var s = 0,
                        n = { left: 0, top: 0 }; if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) { var a = o.children.eq(o.children.length - 1);
                            n = a.position(), s = o.viewport.width() - a.outerWidth() } else { var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position() } else if (o.carousel && o.active.last && "prev" == i) { var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                            a = r.children(".bx-clone").eq(d);
                        n = a.position() } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                    else if (e >= 0) { var c = e * m();
                        n = o.children.eq(c).position() } if ("undefined" != typeof n) { var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed) } } }, r.goToNextSlide = function() { if (o.settings.infiniteLoop || !o.active.last) { var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next") } }, r.goToPrevSlide = function() { if (o.settings.infiniteLoop || 0 != o.active.index) { var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev") } }, r.startAuto = function(t) { o.interval || (o.interval = setInterval(function() { "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide() }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop")) }, r.stopAuto = function(t) { o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start")) }, r.getCurrentSlide = function() { return o.active.index }, r.getCurrentSlideElement = function() { return o.children.eq(o.active.index) }, r.getSlideCount = function() { return o.children.length }, r.redrawSlider = function() { o.children.add(r.find(".bx-clone")).width(u()), o.viewport.css("height", p()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index)) }, r.destroySlider = function() { o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() { void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style") }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", V)) }, r.reloadSlider = function(t) { void 0 != t && (n = t), r.destroySlider(), d() }, d(), this } }(jQuery);
! function(e, t, i, n) { "use strict"; var o = i("html"),
        a = i(e),
        r = i(t),
        s = i.fancybox = function() { s.open.apply(this, arguments) },
        l = navigator.userAgent.match(/msie/i),
        c = null,
        d = t.createTouch !== n,
        p = function(e) { return e && e.hasOwnProperty && e instanceof i },
        h = function(e) { return e && "string" === i.type(e) },
        f = function(e) { return h(e) && e.indexOf("%") > 0 },
        u = function(e) { return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight) },
        g = function(e, t) { var i = parseInt(e, 10) || 0; return t && f(e) && (i = s.getViewport()[t] / 100 * i), Math.ceil(i) },
        m = function(e, t) { return g(e, t) + "px" };
    i.extend(s, { version: "2.1.5", defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !d, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" }, keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: i.noop, beforeLoad: i.noop, afterLoad: i.noop, beforeShow: i.noop, afterShow: i.noop, beforeChange: i.noop, beforeClose: i.noop, afterClose: i.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function(e, t) { if (e && (i.isPlainObject(t) || (t = {}), !1 !== s.close(!0))) return i.isArray(e) || (e = p(e) ? i(e).get() : [e]), i.each(e, function(o, a) { var r, l, c, d, f, u, g, m = {}; "object" === i.type(a) && (a.nodeType && (a = i(a)), p(a) ? (m = { href: a.data("fancybox-href") || a.attr("href"), title: a.data("fancybox-title") || a.attr("title"), isDom: !0, element: a }, i.metadata && i.extend(!0, m, a.metadata())) : m = a), r = t.href || m.href || (h(a) ? a : null), l = t.title !== n ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = a.data("fancybox-type"), d || (f = a.prop("class").match(/fancybox\.(\w+)/), d = f ? f[1] : null)), h(r) && (d || (s.isImage(r) ? d = "image" : s.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (u = r.split(/\s+/, 2), r = u.shift(), g = u.shift())), c || ("inline" === d ? r ? c = i(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : m.isDom && (c = a) : "html" === d ? c = r : d || r || !m.isDom || (d = "inline", c = a)), i.extend(m, { href: r, type: d, content: c, title: l, selector: g }), e[o] = m }), s.opts = i.extend(!0, {}, s.defaults, t), t.keys !== n && (s.opts.keys = !!t.keys && i.extend({}, s.defaults.keys, t.keys)), s.group = e, s._start(s.opts.index) }, cancel: function() { var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e)) }, close: function(e) { s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && e !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut()))) }, play: function(e) { var t = function() { clearTimeout(s.player.timer) },
                i = function() { t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed)) },
                n = function() { t(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd") },
                o = function() { s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({ "onCancel.player beforeClose.player": n, "onUpdate.player": i, "beforeLoad.player": t }), i(), s.trigger("onPlayStart")) };
            e === !0 || !s.player.isActive && e !== !1 ? o() : n() }, next: function(e) { var t = s.current;
            t && (h(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next")) }, prev: function(e) { var t = s.current;
            t && (h(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev")) }, jumpto: function(e, t, i) { var o = s.current;
            o && (e = g(e), s.direction = t || o.direction[e >= o.index ? "next" : "prev"], s.router = i || "jumpto", o.loop && (e < 0 && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== n && (s.cancel(), s._start(e))) }, reposition: function(e, t) { var n, o = s.current,
                a = o ? o.wrap : null;
            a && (n = s._getPosition(t), e && "scroll" === e.type ? (delete n.position, a.stop(!0, !0).animate(n, 200)) : (a.css(n), o.pos = i.extend({}, o.dim, n))) }, update: function(e) { var t = e && e.type,
                i = !t || "orientationchange" === t;
            i && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() { var n = s.current;
                n && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && s._setDimension(), "scroll" === t && n.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null) }, i && !d ? 0 : 300)) }, toggle: function(e) { s.isOpen && (s.current.fitToView = "boolean" === i.type(e) ? e : !s.current.fitToView, d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update()) }, hideLoading: function() { r.unbind(".loading"), i("#fancybox-loading").remove() }, showLoading: function() { var e, t;
            s.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), r.bind("keydown.loading", function(e) { 27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel()) }), s.defaults.fixed || (t = s.getViewport(), e.css({ position: "absolute", top: .5 * t.h + t.y, left: .5 * t.w + t.x })) }, getViewport: function() { var t = s.current && s.current.locked || !1,
                i = { x: a.scrollLeft(), y: a.scrollTop() }; return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : a.width(), i.h = d && e.innerHeight ? e.innerHeight : a.height()), i }, unbindEvents: function() { s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), a.unbind(".fb") }, bindEvents: function() { var e, t = s.current;
            t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && r.bind("keydown.fb", function(o) { var a = o.which || o.keyCode,
                    r = o.target || o.srcElement; return (27 !== a || !s.coming) && void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || i(r).is("[contenteditable]")) || i.each(e, function(e, r) { return t.group.length > 1 && r[a] !== n ? (s[e](r[a]), o.preventDefault(), !1) : i.inArray(a, r) > -1 ? (s[e](), o.preventDefault(), !1) : void 0 })) }), i.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, n, o, a) { for (var r = e.target || null, l = i(r), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = u(l[0]), l = i(l).parent();
                0 === n || c || s.group.length > 1 && !t.canShrink && (a > 0 || o > 0 ? s.prev(a > 0 ? "down" : "left") : (a < 0 || o < 0) && s.next(a < 0 ? "up" : "right"), e.preventDefault()) })) }, trigger: function(e, t) { var n, o = t || s.coming || s.current; if (o) { if (i.isFunction(o[e]) && (n = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                o.helpers && i.each(o.helpers, function(t, n) { n && s.helpers[t] && i.isFunction(s.helpers[t][e]) && s.helpers[t][e](i.extend(!0, {}, s.helpers[t].defaults, n), o) }), r.trigger(e) } }, isImage: function(e) { return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function(e) { return h(e) && e.match(/\.(swf)((\?|#).*)?$/i) }, _start: function(e) { var t, n, o, a, r, l = {}; if (e = g(e), t = s.group[e] || null, !t) return !1; if (l = i.extend(!0, {}, s.opts, t), a = l.margin, r = l.padding, "number" === i.type(a) && (l.margin = [a, a, a, a]), "number" === i.type(r) && (l.padding = [r, r, r, r]), l.modal && i.extend(!0, l, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = e, s.coming = l, !1 === s.trigger("beforeLoad")) return void(s.coming = null); if (o = l.type, n = l.href, !o) return s.coming = null, !(!s.current || !s.router || "jumpto" === s.router) && (s.current.index = e, s[s.router](s.direction)); if (s.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, { skin: i(".fancybox-skin", l.wrap), outer: i(".fancybox-outer", l.wrap), inner: i(".fancybox-inner", l.wrap) }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) { l.skin.css("padding" + t, m(l.padding[e])) }), s.trigger("onReady"), "inline" === o || "html" === o) { if (!l.content || !l.content.length) return s._error("content") } else if (!n) return s._error("href"); "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad() }, _error: function(e) { i.extend(s.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: e, content: s.coming.tpl.error }), s._afterLoad() }, _loadImage: function() { var e = s.imgPreload = new Image;
            e.onload = function() { this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad() }, e.onerror = function() { this.onload = this.onerror = null, s._error("image") }, e.src = s.coming.href, e.complete !== !0 && s.showLoading() }, _loadAjax: function() { var e = s.coming;
            s.showLoading(), s.ajaxLoad = i.ajax(i.extend({}, e.ajax, { url: e.href, error: function(e, t) { s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading() }, success: function(t, i) { "success" === i && (e.content = t, s._afterLoad()) } })) }, _loadIframe: function() { var e = s.coming,
                t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
            i(e.wrap).bind("onReset", function() { try { i(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (e) {} }), e.iframe.preload && (s.showLoading(), t.one("load", function() { i(this).data("ready", 1), d || i(this).bind("load.fb", s.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad() })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad() }, _preloadImages: function() { var e, t, i = s.group,
                n = s.current,
                o = i.length,
                a = n.preload ? Math.min(n.preload, o - 1) : 0; for (t = 1; t <= a; t += 1) e = i[(n.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href) }, _afterLoad: function() { var e, t, n, o, a, r, l = s.coming,
                c = s.current,
                d = "fancybox-placeholder"; if (s.hideLoading(), l && s.isActive !== !1) { if (!1 === s.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null); switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = l, t = l.content, n = l.type, o = l.scrolling, i.extend(s, { wrap: e.wrap, skin: e.skin, outer: e.outer, inner: e.inner, current: e, previous: c }), a = e.href, n) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector ? t = i("<div>").html(t).find(e.selector) : p(t) && (t.data(d) || t.data(d, i('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() { i(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1) })); break;
                    case "image":
                        t = e.tpl.image.replace("{href}", a); break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', r = "", i.each(e.swf, function(e, i) { t += '<param name="' + e + '" value="' + i + '"></param>', r += " " + e + '="' + i + '"' }), t += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>" } p(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages() } }, _setDimension: function() { var e, t, n, o, a, r, l, c, d, p, h, u, y, x, v, w = s.getViewport(),
                b = 0,
                k = !1,
                C = !1,
                O = s.wrap,
                W = s.skin,
                _ = s.inner,
                S = s.current,
                T = S.width,
                L = S.height,
                E = S.minWidth,
                R = S.minHeight,
                j = S.maxWidth,
                P = S.maxHeight,
                H = S.scrolling,
                M = S.scrollOutside ? S.scrollbarWidth : 0,
                A = S.margin,
                I = g(A[1] + A[3]),
                D = g(A[0] + A[2]); if (O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(W.outerWidth(!0) - W.width()), t = g(W.outerHeight(!0) - W.height()), n = I + e, o = D + t, a = f(T) ? (w.w - n) * g(T) / 100 : T, r = f(L) ? (w.h - o) * g(L) / 100 : L, "iframe" === S.type) { if (x = S.content, S.autoHeight && 1 === x.data("ready")) try { x[0].contentWindow.document.location && (_.width(a).height(9999), v = x.contents().find("body"), M && v.css("overflow-x", "hidden"), r = v.outerHeight(!0)) } catch (z) {} } else(S.autoWidth || S.autoHeight) && (_.addClass("fancybox-tmp"), S.autoWidth || _.width(a), S.autoHeight || _.height(r), S.autoWidth && (a = _.width()), S.autoHeight && (r = _.height()), _.removeClass("fancybox-tmp")); if (T = g(a), L = g(r), d = a / r, E = g(f(E) ? g(E, "w") - n : E), j = g(f(j) ? g(j, "w") - n : j), R = g(f(R) ? g(R, "h") - o : R), P = g(f(P) ? g(P, "h") - o : P), l = j, c = P, S.fitToView && (j = Math.min(w.w - n, j), P = Math.min(w.h - o, P)), u = w.w - I, y = w.h - D, S.aspectRatio ? (T > j && (T = j, L = g(T / d)), L > P && (L = P, T = g(L * d)), T < E && (T = E, L = g(T / d)), L < R && (L = R, T = g(L * d))) : (T = Math.max(E, Math.min(T, j)), S.autoHeight && "iframe" !== S.type && (_.width(T), L = _.height()), L = Math.max(R, Math.min(L, P))), S.fitToView)
                if (_.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(), S.aspectRatio)
                    for (;
                        (p > u || h > y) && T > E && L > R && !(b++ > 19);) L = Math.max(R, Math.min(P, L - 10)), T = g(L * d), T < E && (T = E, L = g(T / d)), T > j && (T = j, L = g(T / d)), _.width(T).height(L), O.width(T + e), p = O.width(), h = O.height();
                else T = Math.max(E, Math.min(T, T - (p - u))), L = Math.max(R, Math.min(L, L - (h - y)));
            M && "auto" === H && L < r && T + e + M < u && (T += M), _.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(), k = (p > u || h > y) && T > E && L > R, C = S.aspectRatio ? T < l && L < c && T < a && L < r : (T < l || L < c) && (T < a || L < r), i.extend(S, { dim: { width: m(p), height: m(h) }, origWidth: a, origHeight: r, canShrink: k, canExpand: C, wPadding: e, hPadding: t, wrapSpace: h - W.outerHeight(!0), skinSpace: W.height() - L }), !x && S.autoHeight && L > R && L < P && !C && _.height("auto") }, _getPosition: function(e) { var t = s.current,
                i = s.getViewport(),
                n = t.margin,
                o = s.wrap.width() + n[1] + n[3],
                a = s.wrap.height() + n[0] + n[2],
                r = { position: "absolute", top: n[0], left: n[3] }; return t.autoCenter && t.fixed && !e && a <= i.h && o <= i.w ? r.position = "fixed" : t.locked || (r.top += i.y, r.left += i.x), r.top = m(Math.max(r.top, r.top + (i.h - a) * t.topRatio)), r.left = m(Math.max(r.left, r.left + (i.w - o) * t.leftRatio)), r }, _afterZoomIn: function() { var e = s.current;
            e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) { i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]()) }), e.closeBtn && i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) { e.preventDefault(), s.close() }), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && i(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1)) }, _afterZoomOut: function(e) { e = e || s.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(s, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }), s.trigger("afterClose", e) } }), s.transitions = { getOrigPosition: function() { var e = s.current,
                t = e.element,
                i = e.orig,
                n = {},
                o = 50,
                a = 50,
                r = e.hPadding,
                l = e.wPadding,
                c = s.getViewport(); return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), p(i) ? (n = i.offset(), i.is("img") && (o = i.outerWidth(), a = i.outerHeight())) : (n.top = c.y + (c.h - a) * e.topRatio, n.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = { top: m(n.top - r * e.topRatio), left: m(n.left - l * e.leftRatio), width: m(o + l), height: m(a + r) } }, step: function(e, t) { var i, n, o, a = t.prop,
                r = s.current,
                l = r.wrapSpace,
                c = r.skinSpace; "width" !== a && "height" !== a || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (i = 1 - i), n = "width" === a ? r.wPadding : r.hPadding, o = e - n, s.skin[a](g("width" === a ? o : o - l * i)), s.inner[a](g("width" === a ? o : o - l * i - c * i))) }, zoomIn: function() { var e = s.current,
                t = e.pos,
                n = e.openEffect,
                o = "elastic" === n,
                a = i.extend({ opacity: 1 }, t);
            delete a.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), s.wrap.css(t).animate(a, { duration: "none" === n ? 0 : e.openSpeed, easing: e.openEasing, step: o ? this.step : null, complete: s._afterZoomIn }) }, zoomOut: function() { var e = s.current,
                t = e.closeEffect,
                i = "elastic" === t,
                n = { opacity: .1 };
            i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), s.wrap.animate(n, { duration: "none" === t ? 0 : e.closeSpeed, easing: e.closeEasing, step: i ? this.step : null, complete: s._afterZoomOut }) }, changeIn: function() { var e, t = s.current,
                i = t.nextEffect,
                n = t.pos,
                o = { opacity: 1 },
                a = s.direction,
                r = 200;
            n.opacity = .1, "elastic" === i && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (n[e] = m(g(n[e]) - r), o[e] = "+=" + r + "px") : (n[e] = m(g(n[e]) + r), o[e] = "-=" + r + "px")), "none" === i ? s._afterZoomIn() : s.wrap.css(n).animate(o, { duration: t.nextSpeed, easing: t.nextEasing, complete: s._afterZoomIn }) }, changeOut: function() { var e = s.previous,
                t = e.prevEffect,
                n = { opacity: .1 },
                o = s.direction,
                a = 200; "elastic" === t && (n["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + a + "px"), e.wrap.animate(n, { duration: "none" === t ? 0 : e.prevSpeed, easing: e.prevEasing, complete: function() { i(this).trigger("onReset").remove() } }) } }, s.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !d, fixed: !0 }, overlay: null, fixed: !1, el: i("html"), create: function(e) { e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0) }, open: function(e) { var t = this;
            e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) { if (i(e.target).hasClass("fancybox-overlay")) return s.isActive ? s.close() : t.close(), !1 }), this.overlay.css(e.css).show() }, close: function() { var e, t;
            a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = a.scrollTop(), t = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, { overlay: null, fixed: !1 }) }, update: function() { var e, i = "100%";
            this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (i = r.width())) : r.width() > a.width() && (i = r.width()), this.overlay.width(i).height(r.height()) }, onReady: function(e, t) { var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = r.height() > a.height() && i("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments) }, beforeShow: function(e, t) { var n, o;
            t.locked && (this.margin !== !1 && (i("*").filter(function() { return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap") }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = a.scrollTop(), o = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(n).scrollLeft(o)), this.open(e) }, onUpdate: function() { this.fixed || this.update() }, afterClose: function(e) { this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this)) } }, s.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function(e) { var t, n, o = s.current,
                a = o.title,
                r = e.type; if (i.isFunction(a) && (a = a.call(o.element, o)), h(a) && "" !== i.trim(a)) { switch (t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + a + "</div>"), r) {
                    case "inside":
                        n = s.skin; break;
                    case "outside":
                        n = s.wrap; break;
                    case "over":
                        n = s.inner; break;
                    default:
                        n = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(g(t.css("margin-bottom"))) } t["top" === e.position ? "prependTo" : "appendTo"](n) } } }, i.fn.fancybox = function(e) { var t, n = i(this),
            o = this.selector || "",
            a = function(a) { var r, l, c = i(this).blur(),
                    d = t;
                a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = c.attr(r), l || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (c = o.length ? i(o) : n, c = c.filter("[" + r + '="' + l + '"]'), d = c.index(this)), e.index = d, s.open(c, e) !== !1 && a.preventDefault()) }; return e = e || {}, t = e.index || 0, o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : n.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this }, r.ready(function() { var t, a;
        i.scrollbarWidth === n && (i.scrollbarWidth = function() { var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                n = t.innerWidth() - t.height(99).innerWidth(); return e.remove(), n }), i.support.fixedPosition === n && (i.support.fixedPosition = function() { var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop; return e.remove(), t }()), i.extend(s.defaults, { scrollbarWidth: i.scrollbarWidth(), fixed: i.support.fixedPosition, parent: i("body") }), t = i(e).width(), o.addClass("fancybox-lock-test"), a = i(e).width(), o.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head") }) }(window, document, jQuery);
! function(e, n) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function(o) { return n(o, e, e.document, e.Math) }) : "undefined" != typeof exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math) }("undefined" != typeof window ? window : this, function(e, n, o, t, i) { "use strict"; var l, r = "fullpage-wrapper",
        a = "." + r,
        s = "fp-scrollable",
        c = "." + s,
        d = ".slimScrollBar",
        f = ".slimScrollRail",
        u = "fp-responsive",
        h = "fp-notransition",
        p = "fp-destroyed",
        v = "fp-enabled",
        g = "fp-viewing",
        m = "active",
        S = "." + m,
        w = "fp-completely",
        y = "." + w,
        b = ".section",
        x = "fp-section",
        T = "." + x,
        C = T + S,
        k = T + ":first",
        A = T + ":last",
        L = "fp-tableCell",
        B = "." + L,
        E = "fp-auto-height",
        M = "fp-normal-scroll",
        H = "fp-nav",
        R = "#" + H,
        O = "fp-tooltip",
        z = "." + O,
        D = "fp-show-active",
        P = ".slide",
        I = "fp-slide",
        F = "." + I,
        V = F + S,
        q = "fp-slides",
        W = "." + q,
        Y = "fp-slidesContainer",
        U = "." + Y,
        X = "fp-table",
        N = "fp-slidesNav",
        K = "." + N,
        j = K + " a",
        Q = "fp-controlArrow",
        G = "." + Q,
        J = "fp-prev",
        Z = "." + J,
        $ = Q + " " + J,
        _ = G + Z,
        ee = "fp-next",
        ne = "." + ee,
        oe = Q + " " + ee,
        te = G + ne,
        ie = e(n),
        le = e(o);
    e.fn.fullpage = function(s) {
        function c() { s.css3 && (s.css3 = Sn()), s.scrollBar = s.scrollBar || s.hybrid, f(), Q(), In.setAllowScrolling(!0), In.setAutoScrolling(s.autoScrolling, "internal"); var n = e(C).find(V);
            n.length && (0 !== e(C).index(T) || 0 === e(C).index(T) && 0 !== n.index()) && Ln(n), Ge(), mn(), ie.on("load", function() { ze() }) }

        function d() { ie.on("scroll", fe).on("hashchange", De).blur(Ye).resize(Qe), le.keydown(Pe).keyup(Fe).on("click touchstart", R + " a", Ue).on("click touchstart", j, Xe).on("click", z, Ie), e(T).on("click touchstart", G, We), s.normalScrollElements && (le.on("mouseenter", s.normalScrollElements, function() { In.setMouseWheelScrolling(!1) }), le.on("mouseleave", s.normalScrollElements, function() { In.setMouseWheelScrolling(!0) })) }

        function f() { s.anchors.length || (s.anchors = e(s.sectionSelector + "[data-anchor]").map(function() { return e(this).data("anchor").toString() }).get()), s.navigationTooltips.length || (s.navigationTooltips = e(s.sectionSelector + "[data-tooltip]").map(function() { return e(this).data("tooltip").toString() }).get()) }

        function Q() { Xn.css({ height: "100%", position: "relative" }), Xn.addClass(r), e("html").addClass(v), Nn = ie.height(), Xn.removeClass(p), re(), e(T).each(function(n) { var o = e(this),
                    t = o.find(F),
                    i = t.length;
                ee(o, n), ne(o, n), i > 0 ? Z(o, t, i) : s.verticalCentered && rn(o) }), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(Pn), s.navigation && se(), s.scrollOverflow ? ("complete" === o.readyState && ce(), ie.on("load", ce)) : de() }

        function Z(n, o, t) { var i = 100 * t,
                l = 100 / t;
            o.wrapAll('<div class="' + Y + '" />'), o.parent().wrap('<div class="' + q + '" />'), n.find(U).css("width", i + "%"), t > 1 && (s.controlArrows && ae(n), s.slidesNavigation && hn(n, t)), o.each(function(n) { e(this).css("width", l + "%"), s.verticalCentered && rn(e(this)) }); var r = n.find(V);
            r.length && (0 !== e(C).index(T) || 0 === e(C).index(T) && 0 !== r.index()) ? Ln(r) : o.eq(0).addClass(m) }

        function ee(n, o) { o || 0 !== e(C).length || n.addClass(m), n.css("height", Nn + "px"), s.paddingTop && n.css("padding-top", s.paddingTop), s.paddingBottom && n.css("padding-bottom", s.paddingBottom), "undefined" != typeof s.sectionsColor[o] && n.css("background-color", s.sectionsColor[o]), "undefined" != typeof s.anchors[o] && n.attr("data-anchor", s.anchors[o]) }

        function ne(n, o) { "undefined" != typeof s.anchors[o] && n.hasClass(m) && nn(s.anchors[o], o), s.menu && s.css3 && e(s.menu).closest(a).length && e(s.menu).appendTo(Pn) }

        function re() { e(s.sectionSelector).each(function() { e(this).addClass(x) }), e(s.slideSelector).each(function() { e(this).addClass(I) }) }

        function ae(e) { e.find(W).after('<div class="' + $ + '"></div><div class="' + oe + '"></div>'), "#fff" != s.controlArrowColor && (e.find(te).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(_).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(_).hide() }

        function se() { Pn.append('<div id="' + H + '"><ul></ul></div>'); var n = e(R);
            n.addClass(function() { return s.showActiveTooltip ? D + " " + s.navigationPosition : s.navigationPosition }); for (var o = 0; o < e(T).length; o++) { var t = "";
                s.anchors.length && (t = s.anchors[o]); var i = '<li><a href="#' + t + '"><span></span></a>',
                    l = s.navigationTooltips[o]; "undefined" != typeof l && "" !== l && (i += '<div class="' + O + " " + s.navigationPosition + '">' + l + "</div>"), i += "</li>", n.find("ul").append(i) } e(R).css("margin-top", "-" + e(R).height() / 2 + "px"), e(R).find("li").eq(e(C).index(T)).find("a").addClass(m) }

        function ce() { e(T).each(function() { var n = e(this).find(F);
                n.length ? n.each(function() { ln(e(this)) }) : ln(e(this)) }), de() }

        function de() { var n = e(C);
            n.addClass(w), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(n), Me(n), He(n), e.isFunction(s.afterLoad) && s.afterLoad.call(n, n.data("anchor"), n.index(T) + 1), e.isFunction(s.afterRender) && s.afterRender.call(Xn) }

        function fe() { var n; if (!s.autoScrolling || s.scrollBar) { for (var t = ie.scrollTop(), i = he(t), l = 0, r = t + ie.height() / 2, a = o.querySelectorAll(T), c = 0; c < a.length; ++c) { var d = a[c];
                    d.offsetTop <= r && (l = c) } if (ue(i) && (e(C).hasClass(w) || e(C).addClass(w).siblings().removeClass(w)), n = e(a).eq(l), !n.hasClass(m)) { io = !0; var f = e(C),
                        u = f.index(T) + 1,
                        h = on(n),
                        p = n.data("anchor"),
                        v = n.index(T) + 1,
                        g = n.find(V); if (g.length) var S = g.data("anchor"),
                        y = g.index();
                    Qn && (n.addClass(m).siblings().removeClass(m), e.isFunction(s.onLeave) && s.onLeave.call(f, u, v, h), e.isFunction(s.afterLoad) && s.afterLoad.call(n, p, v), Me(n), nn(p, v - 1), s.anchors.length && (Fn = p, pn(y, S, p, v))), clearTimeout(eo), eo = setTimeout(function() { io = !1 }, 100) } s.fitToSection && (clearTimeout(no), no = setTimeout(function() { Qn && s.fitToSection && (e(C).is(n) && (Kn = !0), Ce(e(C)), Kn = !1) }, s.fitToSectionDelay)) } }

        function ue(n) { var o = e(C).position().top,
                t = o + ie.height(); return "up" == n ? t >= ie.scrollTop() + ie.height() : o <= ie.scrollTop() }

        function he(e) { var n = e > lo ? "down" : "up"; return lo = e, n }

        function pe(e, n) { if (Jn.m[e]) { var o, t; if ("down" == e ? (o = "bottom", t = In.moveSectionDown) : (o = "top", t = In.moveSectionUp), n.length > 0) { if (!s.scrollOverflowHandler.isScrolled(o, n)) return !0;
                    t() } else t() } }

        function ve(n) { var o = n.originalEvent; if (!ge(n.target) && me(o)) { s.autoScrolling && n.preventDefault(); var i = e(C),
                    l = s.scrollOverflowHandler.scrollable(i); if (Qn && !Wn) { var r = An(o);
                    so = r.y, co = r.x, i.find(W).length && t.abs(ao - co) > t.abs(ro - so) ? t.abs(ao - co) > ie.outerWidth() / 100 * s.touchSensitivity && (ao > co ? Jn.m.right && In.moveSlideRight() : Jn.m.left && In.moveSlideLeft()) : s.autoScrolling && t.abs(ro - so) > ie.height() / 100 * s.touchSensitivity && (ro > so ? pe("down", l) : so > ro && pe("up", l)) } } }

        function ge(n, o) { o = o || 0; var t = e(n).parent(); return !!(o < s.normalScrollElementTouchThreshold && t.is(s.normalScrollElements)) || o != s.normalScrollElementTouchThreshold && ge(t, ++o) }

        function me(e) { return "undefined" == typeof e.pointerType || "mouse" != e.pointerType }

        function Se(e) { var n = e.originalEvent; if (s.fitToSection && Dn.stop(), me(n)) { var o = An(n);
                ro = o.y, ao = o.x } }

        function we(e, n) { for (var o = 0, i = e.slice(t.max(e.length - n, 1)), l = 0; l < i.length; l++) o += i[l]; return t.ceil(o / n) }

        function ye(o) { var i = (new Date).getTime(),
                l = e(y).hasClass(M); if (s.autoScrolling && !qn && !l) { o = o || n.event; var r = o.wheelDelta || -o.deltaY || -o.detail,
                    a = t.max(-1, t.min(1, r)),
                    c = "undefined" != typeof o.wheelDeltaX || "undefined" != typeof o.deltaX,
                    d = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !c;
                Gn.length > 149 && Gn.shift(), Gn.push(t.abs(r)), s.scrollBar && (o.preventDefault ? o.preventDefault() : o.returnValue = !1); var f = e(C),
                    u = s.scrollOverflowHandler.scrollable(f),
                    h = i - fo; if (fo = i, h > 200 && (Gn = []), Qn) { var p = we(Gn, 10),
                        v = we(Gn, 70),
                        g = p >= v;
                    g && d && (a < 0 ? pe("down", u) : pe("up", u)) } return !1 } s.fitToSection && Dn.stop() }

        function be(n, o) { var t = "undefined" == typeof o ? e(C) : o,
                i = t.find(W),
                l = i.find(F).length; if (!(!i.length || Wn || l < 2)) { var r = i.find(V),
                    a = null; if (a = "prev" === n ? r.prev(F) : r.next(F), !a.length) { if (!s.loopHorizontal) return;
                    a = "prev" === n ? r.siblings(":last") : r.siblings(":first") } Wn = !0, je(i, a) } }

        function xe() { e(V).each(function() { Ln(e(this), "internal") }) }

        function Te(e) { var n = e.position(),
                o = n.top,
                t = n.top > uo,
                i = o - Nn + e.outerHeight(); return e.outerHeight() > Nn ? t || (o = i) : (t || Kn && e.is(":last-child")) && (o = i), uo = o, o }

        function Ce(n, o, t) { if ("undefined" != typeof n) { var i = Te(n),
                    l = { element: n, callback: o, isMovementUp: t, dtop: i, yMovement: on(n), anchorLink: n.data("anchor"), sectionIndex: n.index(T), activeSlide: n.find(V), activeSection: e(C), leavingSection: e(C).index(T) + 1, localIsResizing: Kn }; if (!(l.activeSection.is(n) && !Kn || s.scrollBar && ie.scrollTop() === l.dtop && !n.hasClass(E))) { if (l.activeSlide.length) var r = l.activeSlide.data("anchor"),
                        a = l.activeSlide.index();
                    s.autoScrolling && s.continuousVertical && "undefined" != typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Le(l)), e.isFunction(s.onLeave) && !l.localIsResizing && s.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) === !1 || (Re(l.activeSection), n.addClass(m).siblings().removeClass(m), Me(n), Qn = !1, pn(a, r, l.anchorLink, l.sectionIndex), ke(l), Fn = l.anchorLink, nn(l.anchorLink, l.sectionIndex)) } } }

        function ke(n) { if (s.css3 && s.autoScrolling && !s.scrollBar) { var o = "translate3d(0px, -" + n.dtop + "px, 0px)";
                sn(o, !0), s.scrollingSpeed ? $n = setTimeout(function() { Ee(n) }, s.scrollingSpeed) : Ee(n) } else { var t = Ae(n);
                e(t.element).animate(t.options, s.scrollingSpeed, s.easing).promise().done(function() { s.scrollBar ? setTimeout(function() { Ee(n) }, 30) : Ee(n) }) } }

        function Ae(e) { var n = {}; return s.autoScrolling && !s.scrollBar ? (n.options = { top: -e.dtop }, n.element = a) : (n.options = { scrollTop: e.dtop }, n.element = "html, body"), n }

        function Le(n) { return n.isMovementUp ? e(C).before(n.activeSection.nextAll(T)) : e(C).after(n.activeSection.prevAll(T).get().reverse()), Bn(e(C).position().top), xe(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = on(n.element), n }

        function Be(n) { n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(k).before(n.wrapAroundElements) : e(A).after(n.wrapAroundElements), Bn(e(C).position().top), xe()) }

        function Ee(n) { Be(n), n.element.find(".fp-scrollable").mouseover(), e.isFunction(s.afterLoad) && !n.localIsResizing && s.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), He(n.element), n.element.addClass(w).siblings().removeClass(w), Qn = !0, e.isFunction(n.callback) && n.callback.call(this) }

        function Me(n) { var n = Oe(n);
            n.find("img[data-src], source[data-src], audio[data-src]").each(function() { e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).is("source") && e(this).closest("video").get(0).load() }) }

        function He(n) { var n = Oe(n);
            n.find("video, audio").each(function() { var n = e(this).get(0);
                n.hasAttribute("autoplay") && "function" == typeof n.play && n.play() }) }

        function Re(n) { var n = Oe(n);
            n.find("video, audio").each(function() { var n = e(this).get(0);
                n.hasAttribute("data-ignore") || "function" != typeof n.pause || n.pause() }) }

        function Oe(n) { var o = n.find(V); return o.length && (n = e(o)), n }

        function ze() { var e = n.location.hash.replace("#", "").split("https://enoc.com/"),
                o = e[0],
                t = e[1];
            o && (s.animateAnchor ? fn(o, t) : In.silentMoveTo(o, t)) }

        function De() { if (!io && !s.lockAnchors) { var e = n.location.hash.replace("#", "").split("https://enoc.com/"),
                    o = e[0],
                    t = e[1],
                    i = "undefined" == typeof Fn,
                    l = "undefined" == typeof Fn && "undefined" == typeof t && !Wn;
                o.length && (o && o !== Fn && !i || l || !Wn && Vn != t) && fn(o, t) } }

        function Pe(n) { clearTimeout(oo); var o = e(":focus"); if (!o.is("textarea") && !o.is("input") && !o.is("select") && "true" !== o.attr("contentEditable") && "" !== o.attr("contentEditable") && s.keyboardScrolling && s.autoScrolling) { var t = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(t, i) > -1 && n.preventDefault(), qn = n.ctrlKey, oo = setTimeout(function() { Ne(n) }, 150) } }

        function Ie() { e(this).prev().trigger("click") }

        function Fe(e) { jn && (qn = e.ctrlKey) }

        function Ve(e) { 2 == e.which && (ho = e.pageY, Xn.on("mousemove", Ke)) }

        function qe(e) { 2 == e.which && Xn.off("mousemove") }

        function We() { var n = e(this).closest(T);
            e(this).hasClass(J) ? Jn.m.left && In.moveSlideLeft(n) : Jn.m.right && In.moveSlideRight(n) }

        function Ye() { jn = !1, qn = !1 }

        function Ue(n) { n.preventDefault(); var o = e(this).parent().index();
            Ce(e(T).eq(o)) }

        function Xe(n) { n.preventDefault(); var o = e(this).closest(T).find(W),
                t = o.find(F).eq(e(this).closest("li").index());
            je(o, t) }

        function Ne(n) { var o = n.shiftKey; switch (n.which) {
                case 38:
                case 33:
                    Jn.k.up && In.moveSectionUp(); break;
                case 32:
                    if (o && Jn.k.up) { In.moveSectionUp(); break }
                case 40:
                case 34:
                    Jn.k.down && In.moveSectionDown(); break;
                case 36:
                    Jn.k.up && In.moveTo(1); break;
                case 35:
                    Jn.k.down && In.moveTo(e(T).length); break;
                case 37:
                    Jn.k.left && In.moveSlideLeft(); break;
                case 39:
                    Jn.k.right && In.moveSlideRight(); break;
                default:
                    return } }

        function Ke(e) { Qn && (e.pageY < ho && Jn.m.up ? In.moveSectionUp() : e.pageY > ho && Jn.m.down && In.moveSectionDown()), ho = e.pageY }

        function je(n, o) { var i = o.position(),
                l = o.index(),
                r = n.closest(T),
                a = r.index(T),
                c = r.data("anchor"),
                d = r.find(K),
                f = gn(o),
                u = r.find(V),
                h = Kn; if (s.onSlideLeave) { var p = u.index(),
                    v = tn(p, l); if (!h && "none" !== v && e.isFunction(s.onSlideLeave) && s.onSlideLeave.call(u, c, a + 1, p, v, l) === !1) return void(Wn = !1) } Re(u), o.addClass(m).siblings().removeClass(m), h || Me(o), !s.loopHorizontal && s.controlArrows && (r.find(_).toggle(0 !== l), r.find(te).toggle(!o.is(":last-child"))), r.hasClass(m) && pn(l, f, c, a); var g = function() { h || e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(o, c, a + 1, f, l), He(o), Wn = !1 }; if (s.css3) { var w = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
                Je(n.find(U), s.scrollingSpeed > 0).css(En(w)), _n = setTimeout(function() { g() }, s.scrollingSpeed, s.easing) } else n.animate({ scrollLeft: t.round(i.left) }, s.scrollingSpeed, s.easing, function() { g() });
            d.find(S).removeClass(m), d.find("li").eq(l).find("a").addClass(m) }

        function Qe() { if (Ge(), Yn) { var n = e(o.activeElement); if (!n.is("textarea") && !n.is("input") && !n.is("select")) { var i = ie.height();
                    t.abs(i - po) > 20 * t.max(po, i) / 100 && (In.reBuild(!0), po = i) } } else clearTimeout(Zn), Zn = setTimeout(function() { In.reBuild(!0) }, 350) }

        function Ge() { var e = s.responsive || s.responsiveWidth,
                n = s.responsiveHeight,
                o = e && ie.outerWidth() < e,
                t = n && ie.height() < n;
            e && n ? In.setResponsive(o || t) : e ? In.setResponsive(o) : n && In.setResponsive(t) }

        function Je(e) { var n = "all " + s.scrollingSpeed + "ms " + s.easingcss3; return e.removeClass(h), e.css({ "-webkit-transition": n, transition: n }) }

        function Ze(e) { return e.addClass(h) }

        function $e(e, n) { var o = 825,
                i = 900; if (e < o || n < i) { var l = 100 * e / o,
                    r = 100 * n / i,
                    a = t.min(l, r),
                    s = a.toFixed(2);
                Pn.css("font-size", s + "%") } else Pn.css("font-size", "100%") }

        function _e(n, o) { s.navigation && (e(R).find(S).removeClass(m), n ? e(R).find('a[href="#' + n + '"]').addClass(m) : e(R).find("li").eq(o).find("a").addClass(m)) }

        function en(n) { s.menu && (e(s.menu).find(S).removeClass(m), e(s.menu).find('[data-menuanchor="' + n + '"]').addClass(m)) }

        function nn(e, n) { en(e), _e(e, n) }

        function on(n) { var o = e(C).index(T),
                t = n.index(T); return o == t ? "none" : o > t ? "up" : "down" }

        function tn(e, n) { return e == n ? "none" : e > n ? "left" : "right" }

        function ln(e) { e.css("overflow", "hidden"); var n, o = s.scrollOverflowHandler,
                t = o.wrapContent(),
                i = e.closest(T),
                l = o.scrollable(e);
            l.length ? n = o.scrollHeight(e) : (n = e.get(0).scrollHeight, s.verticalCentered && (n = e.find(B).get(0).scrollHeight)); var r = Nn - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
            n > r ? l.length ? o.update(e, r) : (s.verticalCentered ? e.find(B).wrapInner(t) : e.wrapInner(t), o.create(e, r)) : o.remove(e), e.css("overflow", "") }

        function rn(e) { e.addClass(X).wrapInner('<div class="' + L + '" style="height:' + an(e) + 'px;" />') }

        function an(e) { var n = Nn; if (s.paddingTop || s.paddingBottom) { var o = e;
                o.hasClass(x) || (o = e.closest(T)); var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
                n = Nn - t } return n }

        function sn(e, n) { n ? Je(Xn) : Ze(Xn), Xn.css(En(e)), setTimeout(function() { Xn.removeClass(h) }, 10) }

        function cn(n) { var o = Xn.find(T + '[data-anchor="' + n + '"]'); return o.length || (o = e(T).eq(n - 1)), o }

        function dn(e, n) { var o = n.find(W),
                t = o.find(F + '[data-anchor="' + e + '"]'); return t.length || (t = o.find(F).eq(e)), t }

        function fn(e, n) { var o = cn(e); "undefined" == typeof n && (n = 0), e === Fn || o.hasClass(m) ? un(o, n) : Ce(o, function() { un(o, n) }) }

        function un(e, n) { if ("undefined" != typeof n) { var o = e.find(W),
                    t = dn(n, e);
                t.length && je(o, t) } }

        function hn(e, n) { e.append('<div class="' + N + '"><ul></ul></div>'); var o = e.find(K);
            o.addClass(s.slidesNavPosition); for (var t = 0; t < n; t++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
            o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(m) }

        function pn(e, n, o, t) { var i = "";
            s.anchors.length && !s.lockAnchors && (e ? ("undefined" != typeof o && (i = o), "undefined" == typeof n && (n = e), Vn = n, vn(i + "/" + n)) : "undefined" != typeof e ? (Vn = n, vn(o)) : vn(o)), mn() }

        function vn(e) { if (s.recordHistory) location.hash = e;
            else if (Yn || Un) n.history.replaceState(i, i, "#" + e);
            else { var o = n.location.href.split("#")[0];
                n.location.replace(o + "#" + e) } }

        function gn(e) { var n = e.data("anchor"),
                o = e.index(); return "undefined" == typeof n && (n = o), n }

        function mn() { var n = e(C),
                o = n.find(V),
                t = gn(n),
                i = gn(o),
                l = (n.index(T), String(t));
            o.length && (l = l + "-" + i), l = l.replace("https://enoc.com/", "-").replace("#", ""); var r = new RegExp("\\b\\s?" + g + "-[^\\s]+\\b", "g");
            Pn[0].className = Pn[0].className.replace(r, ""), Pn.addClass(g + "-" + l) }

        function Sn() { var e, t = o.createElement("p"),
                l = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
            o.body.insertBefore(t, null); for (var r in l) t.style[r] !== i && (t.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(t).getPropertyValue(l[r])); return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e }

        function wn() { o.addEventListener ? (o.removeEventListener("mousewheel", ye, !1), o.removeEventListener("wheel", ye, !1), o.removeEventListener("MozMousePixelScroll", ye, !1)) : o.detachEvent("onmousewheel", ye) }

        function yn() { var e, t = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on"); var l = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll"; "DOMMouseScroll" == l ? o[e](t + "MozMousePixelScroll", ye, !1) : o[e](t + l, ye, !1) }

        function bn() { Xn.on("mousedown", Ve).on("mouseup", qe) }

        function xn() { Xn.off("mousedown", Ve).off("mouseup", qe) }

        function Tn() { if (Yn || Un) { var n = kn();
                e(a).off("touchstart " + n.down).on("touchstart " + n.down, Se), e(a).off("touchmove " + n.move).on("touchmove " + n.move, ve) } }

        function Cn() { if (Yn || Un) { var n = kn();
                e(a).off("touchstart " + n.down), e(a).off("touchmove " + n.move) } }

        function kn() { var e; return e = n.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" } }

        function An(e) { var n = []; return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Un && me(e) && s.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n }

        function Ln(e, n) { In.setScrollingSpeed(0, "internal"), "undefined" != typeof n && (Kn = !0), je(e.closest(W), e), "undefined" != typeof n && (Kn = !1), In.setScrollingSpeed(to.scrollingSpeed, "internal") }

        function Bn(e) { if (s.scrollBar) Xn.scrollTop(e);
            else if (s.css3) { var n = "translate3d(0px, -" + e + "px, 0px)";
                sn(n, !1) } else Xn.css("top", -e) }

        function En(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

        function Mn(e, n, o) { switch (n) {
                case "up":
                    Jn[o].up = e; break;
                case "down":
                    Jn[o].down = e; break;
                case "left":
                    Jn[o].left = e; break;
                case "right":
                    Jn[o].right = e; break;
                case "all":
                    "m" == o ? In.setAllowScrolling(e) : In.setKeyboardScrolling(e) } }

        function Hn() { Bn(0), e(R + ", " + K + ", " + G).remove(), e(T).css({ height: "", "background-color": "", padding: "" }), e(F).css({ width: "" }), Xn.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), Dn.css({ overflow: "", height: "" }), e("html").removeClass(v), e.each(Pn.get(0).className.split(/\s+/), function(e, n) { 0 === n.indexOf(g) && Pn.removeClass(n) }), e(T + ", " + F).each(function() { s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(X + " " + m) }), Ze(Xn), Xn.find(B + ", " + U + ", " + W).each(function() { e(this).replaceWith(this.childNodes) }), Dn.scrollTop(0); var n = [x, I, Y];
            e.each(n, function(n, o) { e("." + o).removeClass(o) }) }

        function Rn(e, n, o) { s[e] = n, "internal" !== o && (to[e] = n) }

        function On() { return e("html").hasClass(v) ? void zn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, zn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && zn("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), s.continuousVertical && s.scrollBar && (s.continuousVertical = !1, zn("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void e.each(s.anchors, function(n, o) { var t = le.find("[name]").filter(function() { return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase() }),
                    i = le.find("[id]").filter(function() { return e(this).attr("id") && e(this).attr("id").toLowerCase() == o.toLowerCase() });
                (i.length || t.length) && (zn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && zn("error", '"' + o + '" is is being used by another element `id` property'), t.length && zn("error", '"' + o + '" is is being used by another element `name` property')) })) }

        function zn(e, n) { console && console[e] && console[e]("fullPage: " + n) } if (e("html").hasClass(v)) return void On(); var Dn = e("html, body"),
            Pn = e("body"),
            In = e.fn.fullpage;
        s = e.extend({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowHandler: l, touchSensitivity: 5, normalScrollElementTouchThreshold: 5, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, resize: !1, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, sectionSelector: b, slideSelector: P, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null }, s), On(), e.extend(e.easing, { easeInOutCubic: function(e, n, o, t, i) { return (n /= i / 2) < 1 ? t / 2 * n * n * n + o : t / 2 * ((n -= 2) * n * n + 2) + o } }), In.setAutoScrolling = function(n, o) { Rn("autoScrolling", n, o); var t = e(C);
            s.autoScrolling && !s.scrollBar ? (Dn.css({ overflow: "hidden", height: "100%" }), In.setRecordHistory(to.recordHistory, "internal"), Xn.css({ "-ms-touch-action": "none", "touch-action": "none" }), t.length && Bn(t.position().top)) : (Dn.css({ overflow: "visible", height: "initial" }), In.setRecordHistory(!1, "internal"), Xn.css({ "-ms-touch-action": "", "touch-action": "" }), Bn(0), t.length && Dn.scrollTop(t.position().top)) }, In.setRecordHistory = function(e, n) { Rn("recordHistory", e, n) }, In.setScrollingSpeed = function(e, n) { Rn("scrollingSpeed", e, n) }, In.setFitToSection = function(e, n) { Rn("fitToSection", e, n) }, In.setLockAnchors = function(e) { s.lockAnchors = e }, In.setMouseWheelScrolling = function(e) { e ? (yn(), bn()) : (wn(), xn()) }, In.setAllowScrolling = function(n, o) { "undefined" != typeof o ? (o = o.replace(/ /g, "").split(","), e.each(o, function(e, o) { Mn(n, o, "m") })) : n ? (In.setMouseWheelScrolling(!0), Tn()) : (In.setMouseWheelScrolling(!1), Cn()) }, In.setKeyboardScrolling = function(n, o) { "undefined" != typeof o ? (o = o.replace(/ /g, "").split(","), e.each(o, function(e, o) { Mn(n, o, "k") })) : s.keyboardScrolling = n }, In.moveSectionUp = function() { var n = e(C).prev(T);
            n.length || !s.loopTop && !s.continuousVertical || (n = e(T).last()), n.length && Ce(n, null, !0) }, In.moveSectionDown = function() { var n = e(C).next(T);
            n.length || !s.loopBottom && !s.continuousVertical || (n = e(T).first()), n.length && Ce(n, null, !1) }, In.silentMoveTo = function(e, n) { In.setScrollingSpeed(0, "internal"), In.moveTo(e, n), In.setScrollingSpeed(to.scrollingSpeed, "internal") }, In.moveTo = function(e, n) { var o = cn(e); "undefined" != typeof n ? fn(e, n) : o.length > 0 && Ce(o) }, In.moveSlideRight = function(e) { be("next", e) }, In.moveSlideLeft = function(e) { be("prev", e) }, In.reBuild = function(n) { if (!Xn.hasClass(p)) { Kn = !0; var o = ie.outerWidth();
                Nn = ie.height(), s.resize && $e(Nn, o), e(T).each(function() { var n = e(this).find(W),
                        o = e(this).find(F);
                    s.verticalCentered && e(this).find(B).css("height", an(e(this)) + "px"), e(this).css("height", Nn + "px"), s.scrollOverflow && (o.length ? o.each(function() { ln(e(this)) }) : ln(e(this))), o.length > 1 && je(n, n.find(V)) }); var t = e(C),
                    i = t.index(T);
                i && In.silentMoveTo(i + 1), Kn = !1, e.isFunction(s.afterResize) && n && s.afterResize.call(Xn), e.isFunction(s.afterReBuild) && !n && s.afterReBuild.call(Xn) } }, In.setResponsive = function(n) { var o = Pn.hasClass(u);
            n ? o || (In.setAutoScrolling(!1, "internal"), In.setFitToSection(!1, "internal"), e(R).hide(), Pn.addClass(u)) : o && (In.setAutoScrolling(to.autoScrolling, "internal"), In.setFitToSection(to.autoScrolling, "internal"), e(R).show(), Pn.removeClass(u)) }; var Fn, Vn, qn, Wn = !1,
            Yn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            Un = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            Xn = e(this),
            Nn = ie.height(),
            Kn = !1,
            jn = !0,
            Qn = !0,
            Gn = [],
            Jn = {};
        Jn.m = { up: !0, down: !0, left: !0, right: !0 }, Jn.k = e.extend(!0, {}, Jn.m); var Zn, $n, _n, eo, no, oo, to = e.extend(!0, {}, s);
        e(this).length && (c(), d()); var io = !1,
            lo = 0,
            ro = 0,
            ao = 0,
            so = 0,
            co = 0,
            fo = (new Date).getTime(),
            uo = 0,
            ho = 0,
            po = Nn;
        In.destroy = function(n) { In.setAutoScrolling(!1, "internal"), In.setAllowScrolling(!1), In.setKeyboardScrolling(!1), Xn.addClass(p), clearTimeout(_n), clearTimeout($n), clearTimeout(Zn), clearTimeout(eo), clearTimeout(no), ie.off("scroll", fe).off("hashchange", De).off("resize", Qe), le.off("click", R + " a").off("mouseenter", R + " li").off("mouseleave", R + " li").off("click", j).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(T).off("click", G), clearTimeout(_n), clearTimeout($n), n && Hn() } }; var re = { afterRender: function(e) { var n = e.find(q),
                o = e.find(c);
            n.length && (o = n.find(V)), o.mouseover() }, create: function(e, n) { e.find(c).slimScroll({ allowPageScroll: !0, height: n + "px", size: "10px", alwaysVisible: !0 }) }, isScrolled: function(e, n) { return "top" === e ? !n.scrollTop() : "bottom" === e ? n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0 }, scrollable: function(e) { return e.find(W).length ? e.find(V).find(c) : e.find(c) }, scrollHeight: function(e) { return e.find(c).get(0).scrollHeight }, remove: function(e) { e.find(c).children().first().unwrap().unwrap(), e.find(d).remove(), e.find(f).remove() }, update: function(e, n) { e.find(c).css("height", n + "px").parent().css("height", n + "px") }, wrapContent: function() { return '<div class="' + s + '"></div>' } };
    l = re });
! function(e, t, n) { "function" == typeof define && define.amd ? define(["jquery"], function(o) { return n(o, e, t), o.mobile }) : n(e.jQuery, e, t) }(this, document, function(e, t, n, o) {! function(e, t, n, o) {
        function i(e) { for (; e && "undefined" != typeof e.originalEvent;) e = e.originalEvent; return e }

        function s(t, n) { var s, a, r, c, u, l, p, h, v, d = t.type; if (t = e.Event(t), t.type = n, s = t.originalEvent, a = e.event.props, d.search(/^(mouse|click)/) > -1 && (a = x), s)
                for (p = a.length, c; p;) c = a[--p], t[c] = s[c]; if (d.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), d.search(/^touch/) !== -1 && (r = i(s), d = r.touches, u = r.changedTouches, l = d && d.length ? d[0] : u && u.length ? u[0] : o, l))
                for (h = 0, v = M.length; h < v; h++) c = M[h], t[c] = l[c]; return t }

        function a(t) { for (var n, o, i = {}; t;) { n = e.data(t, X); for (o in n) n[o] && (i[o] = i.hasVirtualBinding = !0);
                t = t.parentNode } return i }

        function r(t, n) { for (var o; t;) { if (o = e.data(t, X), o && (!n || o[n])) return t;
                t = t.parentNode } return null }

        function c() { F = !1 }

        function u() { F = !0 }

        function l() { Q = 0, j.length = 0, z = !1, u() }

        function p() { c() }

        function h() { v(), L = setTimeout(function() { L = 0, l() }, e.vmouse.resetTimerDuration) }

        function v() { L && (clearTimeout(L), L = 0) }

        function d(t, n, o) { var i; return (o && o[t] || !o && r(n.target, t)) && (i = s(n, t), e(n.target).trigger(i)), i }

        function f(t) { var n, o = e.data(t.target, Y);!z && (!Q || Q !== o) && (n = d("v" + t.type, t), n && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation())) }

        function m(t) { var n, o, s, r = i(t).touches;
            r && 1 === r.length && (n = t.target, o = a(n), o.hasVirtualBinding && (Q = q++, e.data(n, Y, Q), v(), p(), N = !1, s = i(t).touches[0], O = s.pageX, B = s.pageY, d("vmouseover", t, o), d("vmousedown", t, o))) }

        function g(e) { F || (N || d("vmousecancel", e, a(e.target)), N = !0, h()) }

        function w(t) { if (!F) { var n = i(t).touches[0],
                    o = N,
                    s = e.vmouse.moveDistanceThreshold,
                    r = a(t.target);
                N = N || Math.abs(n.pageX - O) > s || Math.abs(n.pageY - B) > s, N && !o && d("vmousecancel", t, r), d("vmousemove", t, r), h() } }

        function b(e) { if (!F) { u(); var t, n, o = a(e.target);
                d("vmouseup", e, o), N || (t = d("vclick", e, o), t && t.isDefaultPrevented() && (n = i(e).changedTouches[0], j.push({ touchID: Q, x: n.clientX, y: n.clientY }), z = !0)), d("vmouseout", e, o), N = !1, h() } }

        function T(t) { var n, o = e.data(t, X); if (o)
                for (n in o)
                    if (o[n]) return !0; return !1 }

        function D() {}

        function y(t) { var n = t.substr(1); return { setup: function() { T(this) || e.data(this, X, {}); var o = e.data(this, X);
                    o[t] = !0, S[t] = (S[t] || 0) + 1, 1 === S[t] && V.bind(n, f), e(this).bind(n, D), H && (S.touchstart = (S.touchstart || 0) + 1, 1 === S.touchstart && V.bind("touchstart", m).bind("touchend", b).bind("touchmove", w).bind("scroll", g)) }, teardown: function() {--S[t], S[t] || V.unbind(n, f), H && (--S.touchstart, S.touchstart || V.unbind("touchstart", m).unbind("touchmove", w).unbind("touchend", b).unbind("scroll", g)); var o = e(this),
                        i = e.data(this, X);
                    i && (i[t] = !1), o.unbind(n, D), T(this) || o.removeData(X) } } } var E, P, X = "virtualMouseBindings",
            Y = "virtualTouchID",
            k = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            M = "clientX clientY pageX pageY screenX screenY".split(" "),
            I = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            x = e.event.props.concat(I),
            S = {},
            L = 0,
            O = 0,
            B = 0,
            N = !1,
            j = [],
            z = !1,
            F = !1,
            H = "addEventListener" in n,
            V = e(n),
            q = 1,
            Q = 0; for (e.vmouse = { moveDistanceThreshold: 10, clickDistanceThreshold: 10, resetTimerDuration: 1500 }, P = 0; P < k.length; P++) e.event.special[k[P]] = y(k[P]);
        H && n.addEventListener("click", function(t) { var n, o, i, s, a, r, c = j.length,
                u = t.target; if (c)
                for (n = t.clientX, o = t.clientY, E = e.vmouse.clickDistanceThreshold, i = u; i;) { for (s = 0; s < c; s++)
                        if (a = j[s], r = 0, i === u && Math.abs(a.x - n) < E && Math.abs(a.y - o) < E || e.data(i, Y) === a.touchID) return t.preventDefault(), void t.stopPropagation();
                    i = i.parentNode } }, !0) }(e, t, n),
    function(e) { e.mobile = {} }(e),
    function(e, t) { var o = { touch: "ontouchend" in n };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, o), e.extend(e.mobile.support, o) }(e),
    function(e, t, o) {
        function i(t, n, i, s) { var a = i.type;
            i.type = n, s ? e.event.trigger(i, o, t) : e.event.dispatch.call(t, i), i.type = a } var s = e(n),
            a = e.mobile.support.touch,
            r = "touchmove scroll",
            c = a ? "touchstart" : "mousedown",
            u = a ? "touchend" : "mouseup",
            l = a ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) { e.fn[n] = function(e) { return e ? this.bind(n, e) : this.trigger(n) }, e.attrFn && (e.attrFn[n] = !0) }), e.event.special.scrollstart = { enabled: !0, setup: function() {
                function t(e, t) { n = t, i(s, n ? "scrollstart" : "scrollstop", e) } var n, o, s = this,
                    a = e(s);
                a.bind(r, function(i) { e.event.special.scrollstart.enabled && (n || t(i, !0), clearTimeout(o), o = setTimeout(function() { t(i, !1) }, 50)) }) }, teardown: function() { e(this).unbind(r) } }, e.event.special.tap = { tapholdThreshold: 750, emitTapOnTaphold: !0, setup: function() { var t = this,
                    n = e(t),
                    o = !1;
                n.bind("vmousedown", function(a) {
                    function r() { clearTimeout(l) }

                    function c() { r(), n.unbind("vclick", u).unbind("vmouseup", r), s.unbind("vmousecancel", c) }

                    function u(e) { c(), o || p !== e.target ? o && e.preventDefault() : i(t, "tap", e) } if (o = !1, a.which && 1 !== a.which) return !1; var l, p = a.target;
                    n.bind("vmouseup", r).bind("vclick", u), s.bind("vmousecancel", c), l = setTimeout(function() { e.event.special.tap.emitTapOnTaphold || (o = !0), i(t, "taphold", e.Event("taphold", { target: p })) }, e.event.special.tap.tapholdThreshold) }) }, teardown: function() { e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), s.unbind("vmousecancel") } }, e.event.special.swipe = { scrollSupressionThreshold: 30, durationThreshold: 1e3, horizontalDistanceThreshold: 30, verticalDistanceThreshold: 30, getLocation: function(e) { var n = t.pageXOffset,
                    o = t.pageYOffset,
                    i = e.clientX,
                    s = e.clientY; return 0 === e.pageY && Math.floor(s) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= n, s -= o) : (s < e.pageY - o || i < e.pageX - n) && (i = e.pageX - n, s = e.pageY - o), { x: i, y: s } }, start: function(t) { var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    o = e.event.special.swipe.getLocation(n); return { time: (new Date).getTime(), coords: [o.x, o.y], origin: e(t.target) } }, stop: function(t) { var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    o = e.event.special.swipe.getLocation(n); return { time: (new Date).getTime(), coords: [o.x, o.y] } }, handleSwipe: function(t, n, o, s) { if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) { var a = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight"; return i(o, "swipe", e.Event("swipe", { target: s, swipestart: t, swipestop: n }), !0), i(o, a, e.Event(a, { target: s, swipestart: t, swipestop: n }), !0), !0 } return !1 }, eventInProgress: !1, setup: function() { var t, n = this,
                    o = e(n),
                    i = {};
                t = e.data(this, "mobile-events"), t || (t = { length: 0 }, e.data(this, "mobile-events", t)), t.length++, t.swipe = i, i.start = function(t) { if (!e.event.special.swipe.eventInProgress) { e.event.special.swipe.eventInProgress = !0; var o, a = e.event.special.swipe.start(t),
                            r = t.target,
                            c = !1;
                        i.move = function(t) { a && !t.isDefaultPrevented() && (o = e.event.special.swipe.stop(t), c || (c = e.event.special.swipe.handleSwipe(a, o, n, r), c && (e.event.special.swipe.eventInProgress = !1)), Math.abs(a.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()) }, i.stop = function() { c = !0, e.event.special.swipe.eventInProgress = !1, s.off(l, i.move), i.move = null }, s.on(l, i.move).one(u, i.stop) } }, o.on(c, i.start) }, teardown: function() { var t, n;
                t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, 0 === t.length && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(c, n.start), n.move && s.off(l, n.move), n.stop && s.off(u, n.stop)) } }, e.each({ scrollstop: "scrollstart", taphold: "tap", swipeleft: "swipe.left", swiperight: "swipe.right" }, function(t, n) { e.event.special[t] = { setup: function() { e(this).bind(n, e.noop) }, teardown: function() { e(this).unbind(n) } } }) }(e, this) });
! function(t, e, i, s) {
    function n(e, i) { this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) { this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(n.Pipe, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }

    function o(t) { if (t.touches !== s) return { x: t.touches[0].pageX, y: t.touches[0].pageY }; if (t.touches === s) { if (t.pageX !== s) return { x: t.pageX, y: t.pageY }; if (t.pageX === s) return { x: t.clientX, y: t.clientY } } }

    function r(t) { var e, s, n = i.createElement("div"),
            o = t; for (e in o)
            if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e]; return [!1] }

    function a() { return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

    function h() { return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

    function l() { return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

    function c() { return "ontouchstart" in e || !!navigator.msMaxTouchPoints }

    function d() { return e.navigator.msPointerEnabled } var p, u, g;
    p = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, u = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, g = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, n.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, n.Width = { Default: "default", Inner: "inner", Outer: "outer" }, n.Plugins = {}, n.Pipe = [{ filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { var t = this._clones,
                e = this.$stage.children(".cloned");
            (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function() { var t, e, i = this._clones,
                s = this._items,
                n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0; for (t = 0, e = Math.abs(n / 2); t < e; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function() { var t, e, i, s = this.settings.rtl ? 1 : -1,
                n = (this.width() / this.settings.items).toFixed(3),
                o = 0; for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; e < i; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o) } }, { filter: ["width", "items", "settings"], run: function() { var e, i, s = (this.width() / this.settings.items).toFixed(3),
                n = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" }; if (this.$stage.css(n), n = { width: this.settings.autoWidth ? "auto" : s - this.settings.margin }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) { return t > 1 }).length > 0)
                for (e = 0, i = this._coordinates.length; e < i; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
            else this.$stage.children().css(n) } }, { filter: ["width", "items", "settings"], run: function(t) { t.current && this.reset(this.$stage.children().index(t.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = []; for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], n.prototype.initialize = function() { if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var e, i, n; if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && n <= 0) return this.preloadAutoWidthImages(e), !1 } this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, n.prototype.setup = function() { var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) { t <= e && t > s && (s = Number(t)) }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) { return e.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), null !== this.settings && this._breakpoint === s || (this.trigger("change", { property: { name: "settings", value: n } }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })) }, n.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, n.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, n.prototype.update = function() { for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) { return this[t] }, this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {} }, n.prototype.width = function(t) { switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, n.prototype.refresh = function() { if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed") }, n.prototype.eventsCall = function() { this.e._onDragStart = t.proxy(function(t) { this.onDragStart(t) }, this), this.e._onDragMove = t.proxy(function(t) { this.onDragMove(t) }, this), this.e._onDragEnd = t.proxy(function(t) { this.onDragEnd(t) }, this), this.e._onResize = t.proxy(function(t) { this.onResize(t) }, this), this.e._transitionEnd = t.proxy(function(t) { this.transitionEnd(t) }, this), this.e._preventClick = t.proxy(function(t) { this.preventClick(t) }, this) }, n.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, n.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")))) }, n.prototype.eventsRouter = function(t) { var e = t.type; "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t) }, n.prototype.internalEvents = function() { var i = (c(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this)) }, n.prototype.onDragStart = function(s) { var n, r, a, h; if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1; if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, "IMG" !== this.drag.targetEl.tagName && "A" !== this.drag.targetEl.tagName || (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) { this.eventsRouter(t) }, this)) }, n.prototype.onDragMove = function(t) { var i, n, r, a, h, l;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), h = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, n.prototype.onDragEnd = function(e) { var s, n, o; if (this.state.isTouch) { if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents") } }, n.prototype.removeClick = function(i) { this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() { t(i).off("click.preventClick") }, 300) }, n.prototype.preventClick = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick") }, n.prototype.getTransformProperty = function() { var t, i; return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12] }, n.prototype.closest = function(e) { var i = -1,
            s = 30,
            n = this.width(),
            o = this.coordinates(); return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) { return e > r - s && e < r + s ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), i === -1 }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i }, n.prototype.animate = function(e) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, n.prototype.current = function(t) { if (t === s) return this._current; if (0 === this._items.length) return s; if (t = this.normalize(t), this._current !== t) { var e = this.trigger("change", { property: { name: "position", value: t } });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, n.prototype.invalidate = function(t) { this._invalidated[t] = !0 }, n.prototype.reset = function(t) { t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"])) }, n.prototype.normalize = function(e, i) { var n = i ? this._items.length : this._items.length + this._clones.length; return !t.isNumeric(e) || n < 1 ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e)) }, n.prototype.relative = function(t) { return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0) }, n.prototype.maximum = function(t) { var e, i, s, n = 0,
            o = this.settings; if (t) return this._items.length - 1; if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) e = this._items.length + o.items;
            else { if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position."; for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n } else e = this._items.length - o.items; return e }, n.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, n.prototype.items = function(t) { return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, n.prototype.mergers = function(t) { return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, n.prototype.clones = function(e) { var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) { return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2 }; return e === s ? t.map(this._clones, function(t, e) { return o(e) }) : t.map(this._clones, function(t, i) { return t === e ? o(i) : null }) }, n.prototype.speed = function(t) { return t !== s && (this._speed = t), this._speed }, n.prototype.coordinates = function(e) { var i = null; return e === s ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i) }, n.prototype.duration = function(t, e, i) { return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, n.prototype.to = function(i, s) { if (this.settings.loop) { var n = i - this.relative(this.current()),
                o = this.current(),
                r = this.current(),
                a = this.current() + n,
                h = r - a < 0,
                l = this._clones.length + this._items.length;
            a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() { this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update() }, this), 30) } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update() }, n.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, n.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, n.prototype.transitionEnd = function(t) { return (t === s || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated")) }, n.prototype.viewport = function() { var s; if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else { if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth } return s }, n.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, n.prototype.add = function(t, e) { e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e }) }, n.prototype.remove = function(t) { t = this.normalize(t, !0), t !== s && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t })) }, n.prototype.addTriggerableEvents = function() { var e = t.proxy(function(e, i) { return t.proxy(function(t) { t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i])) }, this) }, this);
        t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function(t, i) { this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel")) }, this)) }, n.prototype.watchVisibility = function() {
        function i(t) { return t.offsetWidth > 0 && t.offsetHeight > 0 }

        function s() { i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile)) } i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500)) }, n.prototype.preloadAutoWidthImages = function(e) { var i, s, n, o;
        i = 0, s = this, e.each(function(r, a) { n = t(a), o = new Image, o.onload = function() { i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize()) }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina") }) }, n.prototype.destroy = function() { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd); for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, n.prototype.op = function(t, e, i) { var s = this.settings.rtl; switch (e) {
            case "<":
                return s ? t > i : t < i;
            case ">":
                return s ? t < i : t > i;
            case ">=":
                return s ? t <= i : t >= i;
            case "<=":
                return s ? t >= i : t <= i } }, n.prototype.on = function(t, e, i, s) { t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i) }, n.prototype.off = function(t, e, i, s) { t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i) }, n.prototype.trigger = function(e, i, s) { var n = { item: { count: this._items.length, index: this.current() } },
            o = t.camelCase(t.grep(["on", e, s], function(t) { return t }).join("-").toLowerCase()),
            r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, n, i)); return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(r) }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r }, n.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, n.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, n.prototype.browserSupport = function() { if (this.support3d = l(), this.support3d) { this.transformVendor = h(); var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" } this.state.orientation = e.orientation }, t.fn.owlCarousel = function(e) { return this.each(function() { t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e)) }) }, t.fn.owlCarousel.Constructor = n }(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) { var n = function(e) { this._core = e, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) { if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && s * -1 || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) { this.load(e) }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a) }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    n.Defaults = { lazyLoad: !1 }, n.prototype.load = function(i) { var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");!n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) { var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", { element: o, url: r }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() { o.css({ "background-image": "url(" + r + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this), n.src = r) }, this)), this._loaded.push(s.get(0))) }, n.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n }(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) { var n = function(e) { this._core = e, this._handlers = { "initialized.owl.carousel": t.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, n.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, n.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n }(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) { var n = function(e) { this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": t.proxy(function(t) { this._core.settings.video && !this.isInFullScreen() && t.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function(t) { this._playing && this.stop() }, this), "prepared.owl.carousel": t.proxy(function(e) { var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content))) }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this)) };
    n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, n.prototype.fetch = function(t, e) { var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href"); if (!r) throw new Error("Missing video URL."); if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
        else { if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo" } s = s[6], this._videos[r] = { type: i, id: s, width: n, height: o }, e.attr("data-video", r), this.thumbnail(t, this._videos[r]) }, n.prototype.thumbnail = function(e, i) { var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            h = "src",
            l = "",
            c = this._core.settings,
            d = function(t) { n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n) }; return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t[0].thumbnail_large, d(o) } })) }, n.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, n.prototype.play = function(e) { this._core.trigger("play", null, "video"), this._playing && this.stop(); var i, s, n = t(e.target || e.srcElement),
            o = n.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            a = r.width || "100%",
            h = r.height || this._core.$stage.height(); "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s) }, n.prototype.isInFullScreen = function() { var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(s && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1)) }, n.prototype.destroy = function() { var t, e;
        this._core.$element.off("click.owl.video"); for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Video = n }(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) { var n = function(e) { this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = { "change.owl.carousel": t.proxy(function(t) { "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { this.swapping = "translated" == t.type }, this), "translate.owl.carousel": t.proxy(function(t) { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    n.Defaults = { animateOut: !1, animateIn: !1 }, n.prototype.swap = function() { if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0); var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)) } }, n.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, n.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = n }(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options),
            this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers)
    };
    n.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, n.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval) }, n.prototype.play = function(t, s) { if (i.hidden !== !0 && !(this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion)) return this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, n.prototype.stop = function() { e.clearInterval(this.interval) }, n.prototype.pause = function() { e.clearInterval(this.interval) }, n.prototype.destroy = function() { var t, i;
        e.clearInterval(this.interval); for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) { "use strict"; var n = function(e) { this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) { this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "change.owl.carousel": t.proxy(function(t) { if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) { var e = this._core.current(),
                        i = this._core.maximum(),
                        s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value } }, this), "changed.owl.carousel": t.proxy(function(t) { "position" == t.property.name && this.draw() }, this), "refreshed.owl.carousel": t.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers) };
    n.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, n.prototype.initialize = function() { var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) { var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed) }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function(t) { this.prev(s.navSpeed) }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function(t) { this.next(s.navSpeed) }, this)); for (i in this._overrides) this._core[i] = t.proxy(this[i], this) }, n.prototype.destroy = function() { var t, e, i, s; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (s in this.overides) this._core[s] = this._overrides[s]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, n.prototype.update = function() { var t, e, i, s = this._core.settings,
            n = this._core.clones().length / 2,
            o = n + this._core.items().length,
            r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items; if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = n, e = 0, i = 0; t < o; t++)(e >= r || 0 === e) && (this._pages.push({ start: t - n, end: t - n + r - 1 }), e = 0, ++i), e += this._core.mergers(this._core.relative(t)) }, n.prototype.draw = function() { var e, i, s = "",
            n = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current())); if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", o <= 0), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) { if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) { for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s) } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : e < 0 && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active") } this._controls.$indicators.toggle(n.dots) }, n.prototype.onTrigger = function(e) { var i = this._core.settings;
        e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) } }, n.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, function(t) { return t.start <= e && t.end >= e }).pop() }, n.prototype.getPosition = function(e) { var i, s, n = this._core.settings; return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i }, n.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, n.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, n.prototype.to = function(e, i, s) { var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n }(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) { "use strict"; var n = function(i) { this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": t.proxy(function() { "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": t.proxy(function(e) { var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() { var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0; return !!t && void this._core.to(s, !1, !0) }, this)) };
    n.Defaults = { URLhashListener: !1 }, n.prototype.destroy = function() { var i, s;
        t(e).off("hashchange.owl.navigation"); for (i in this._handlers) this._core.$element.off(i, this._handlers[i]); for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null) }, t.fn.owlCarousel.Constructor.Plugins.Hash = n }(window.Zepto || window.jQuery, window, document);
! function(e) { "use strict";

    function t(e, t) { return e.toUpperCase().indexOf(t.toUpperCase()) > -1 }

    function i(t) { var i = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }]; return e.each(i, function() { t = t.replace(this.re, this.ch) }), t }

    function n(e) { var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            i = "(?:" + Object.keys(t).join("|") + ")",
            n = new RegExp(i),
            s = new RegExp(i, "g"),
            o = null == e ? "" : "" + e; return n.test(o) ? o.replace(s, function(e) { return t[e] }) : o }

    function s(t, i) { var n = arguments,
            s = t,
            t = n[0],
            i = n[1];
        [].shift.apply(n), "undefined" == typeof t && (t = s); var a, l = this.each(function() { var s = e(this); if (s.is("select")) { var l = s.data("selectpicker"),
                    d = "object" == typeof t && t; if (l) { if (d)
                        for (var r in d) d.hasOwnProperty(r) && (l.options[r] = d[r]) } else { var c = e.extend({}, o.DEFAULTS, e.fn.selectpicker.defaults || {}, s.data(), d);
                    s.data("selectpicker", l = new o(this, c, i)) } "string" == typeof t && (a = l[t] instanceof Function ? l[t].apply(l, n) : l.options[t]) } }); return "undefined" != typeof a ? a : l } e.expr[":"].icontains = function(i, n, s) { return t(e(i).text(), s[3]) }, e.expr[":"].aicontains = function(i, n, s) { return t(e(i).data("normalizedText") || e(i).text(), s[3]) }, Object.keys || (Object.keys = function(e) { var t = []; for (var i in e) e.hasOwnProperty(i) && t.push(i); return t }); var o = function(t, i, n) { n && (n.stopPropagation(), n.preventDefault()), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = o.prototype.val, this.render = o.prototype.render, this.refresh = o.prototype.refresh, this.setStyle = o.prototype.setStyle, this.selectAll = o.prototype.selectAll, this.deselectAll = o.prototype.deselectAll, this.destroy = o.prototype.remove, this.remove = o.prototype.remove, this.show = o.prototype.show, this.hide = o.prototype.hide, this.init() };
    o.VERSION = "1.6.3", o.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results match", countSelectedText: function(e, t) { return 1 == e ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function(e, t) { var i = []; return i[0] = 1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", i[1] = 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)", i }, selectAllText: "Select All", deselectAllText: "Deselect All", multipleSeparator: ", ", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, searchAccentInsensitive: !1 }, o.prototype = { constructor: o, init: function() { var t = this,
                i = this.$element.attr("id");
            this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof i && (this.$button.attr("data-id", i), e('label[for="' + i + '"]').click(function(e) { e.preventDefault(), t.$button.focus() })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile() }, createDropdown: function() { var t = this.multiple ? " show-tick" : "",
                i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                n = this.autofocus ? " autofocus" : "",
                s = this.$element.parents().hasClass("form-group-lg") ? " btn-lg" : this.$element.parents().hasClass("form-group-sm") ? " btn-sm" : "",
                o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                a = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "",
                l = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">' + this.options.selectAllText + '</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                d = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="btn dropdown-toggle selectpicker' + s + '" data-toggle="dropdown"' + n + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + o + a + l + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>'; return e(d) }, createView: function() { var e = this.createDropdown(),
                t = this.createLi(); return e.find("ul").append(t), e }, reloadLi: function() { this.destroyLi(); var e = this.createLi();
            this.$menu.find("ul").append(e) }, destroyLi: function() { this.$menu.find("li").remove() }, createLi: function() { var t = this,
                s = [],
                o = 0,
                a = function(e, t, i) { return "<li" + ("undefined" != typeof i ? ' class="' + i + '"' : "") + ("undefined" != typeof t | null === t ? ' data-original-index="' + t + '"' : "") + ">" + e + "</li>" },
                l = function(e, s, o, a) { var l = i(n(e)); return '<a tabindex="0"' + ("undefined" != typeof s ? ' class="' + s + '"' : "") + ("undefined" != typeof o ? ' style="' + o + '"' : "") + ("undefined" != typeof a ? 'data-optgroup="' + a + '"' : "") + ' data-normalized-text="' + l + '">' + e + '<span class="' + t.options.iconBase + " " + t.options.tickIcon + ' check-mark"></span></a>' }; return this.$element.find("option").each(function() { var i = e(this),
                    n = i.attr("class") || "",
                    d = i.attr("style"),
                    r = i.data("content") ? i.data("content") : i.html(),
                    c = "undefined" != typeof i.data("subtext") ? '<small class="muted text-muted">' + i.data("subtext") + "</small>" : "",
                    h = "undefined" != typeof i.data("icon") ? '<span class="' + t.options.iconBase + " " + i.data("icon") + '"></span> ' : "",
                    p = i.is(":disabled") || i.parent().is(":disabled"),
                    u = i[0].index; if ("" !== h && p && (h = "<span>" + h + "</span>"), i.data("content") || (r = h + '<span class="text">' + r + c + "</span>"), !t.options.hideDisabled || !p)
                    if (i.parent().is("optgroup") && i.data("divider") !== !0) { if (0 === i.index()) { o += 1; var f = i.parent().attr("label"),
                                m = "undefined" != typeof i.parent().data("subtext") ? '<small class="muted text-muted">' + i.parent().data("subtext") + "</small>" : "",
                                v = i.parent().data("icon") ? '<span class="' + t.options.iconBase + " " + i.parent().data("icon") + '"></span> ' : "";
                            f = v + '<span class="text">' + f + m + "</span>", 0 !== u && s.length > 0 && s.push(a("", null, "divider")), s.push(a(f, null, "dropdown-header")) } s.push(a(l(r, "opt " + n, d, o), u)) } else i.data("divider") === !0 ? s.push(a("", u, "divider")) : i.data("hidden") === !0 ? s.push(a(l(r, n, d), u, "hide is-hidden")) : s.push(a(l(r, n, d), u)) }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e(s.join("")) }, findLis: function() { return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis }, render: function(t) { var i = this;
            t !== !1 && this.$element.find("option").each(function(t) { i.setDisabled(t, e(this).is(":disabled") || e(this).parent().is(":disabled")), i.setSelected(t, e(this).is(":selected")) }), this.tabIndex(); var s = this.options.hideDisabled ? ":not([disabled])" : "",
                o = this.$element.find("option:selected" + s).map(function() { var t, n = e(this),
                        s = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : ""; return t = i.options.showSubtext && n.attr("data-subtext") && !i.multiple ? ' <small class="muted text-muted">' + n.data("subtext") + "</small>" : "", n.data("content") && i.options.showContent ? n.data("content") : "undefined" != typeof n.attr("title") ? n.attr("title") : s + n.html() + t }).toArray(),
                a = this.multiple ? o.join(this.options.multipleSeparator) : o[0]; if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) { var l = this.options.selectedTextFormat.split(">"); if (l.length > 1 && o.length > l[1] || 1 == l.length && o.length >= 2) { s = this.options.hideDisabled ? ", [disabled]" : ""; var d = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + s).length,
                        r = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, d) : this.options.countSelectedText;
                    a = r.replace("{0}", o.length.toString()).replace("{1}", d.toString()) } } this.options.title = this.$element.attr("title"), "static" == this.options.selectedTextFormat && (a = this.options.title), a || (a = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", n(a)), this.$newElement.find(".filter-option").html(a) }, setStyle: function(e, t) { this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, "")); var i = e ? e : this.options.style; "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i)) }, liHeight: function() { if (this.options.size !== !1) { var e = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                    t = e.addClass("open").find("> .dropdown-menu"),
                    i = t.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),
                    n = this.options.header ? t.find(".popover-title").outerHeight() : 0,
                    s = this.options.liveSearch ? t.find(".bs-searchbox").outerHeight() : 0,
                    o = this.options.actionsBox ? t.find(".bs-actionsbox").outerHeight() : 0;
                e.remove(), this.$newElement.data("liHeight", i).data("headerHeight", n).data("searchHeight", s).data("actionsHeight", o) } }, setSize: function() { this.findLis(); var t, i, n, s = this,
                o = this.$menu,
                a = o.find(".inner"),
                l = this.$newElement.outerHeight(),
                d = this.$newElement.data("liHeight"),
                r = this.$newElement.data("headerHeight"),
                c = this.$newElement.data("searchHeight"),
                h = this.$newElement.data("actionsHeight"),
                p = this.$lis.filter(".divider").outerHeight(!0),
                u = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom")) + parseInt(o.css("border-top-width")) + parseInt(o.css("border-bottom-width")),
                f = this.options.hideDisabled ? ", .disabled" : "",
                m = e(window),
                v = u + parseInt(o.css("margin-top")) + parseInt(o.css("margin-bottom")) + 2,
                b = function() { i = s.$newElement.offset().top - m.scrollTop(), n = m.height() - i - l }; if (b(), this.options.header && o.css("padding-top", 0), "auto" == this.options.size) { var $ = function() { var e, l = s.$lis.not(".hide");
                    b(), t = n - v, s.options.dropupAuto && s.$newElement.toggleClass("dropup", i > n && t - v < o.height()), s.$newElement.hasClass("dropup") && (t = i - v), e = l.length + l.filter(".dropdown-header").length > 3 ? 3 * d + v - 2 : 0, o.css({ "max-height": t + "px", overflow: "hidden", "min-height": e + r + c + h + "px" }), a.css({ "max-height": t - r - c - h - u + "px", "overflow-y": "auto", "min-height": Math.max(e - u, 0) + "px" }) };
                $(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", $), e(window).off("resize.getSize").on("resize.getSize", $), e(window).off("scroll.getSize").on("scroll.getSize", $) } else if (this.options.size && "auto" != this.options.size && o.find("li" + f).length > this.options.size) { var g = this.$lis.not(".divider" + f).find(" > *").slice(0, this.options.size).last().parent().index(),
                    x = this.$lis.slice(0, g + 1).filter(".divider").length;
                t = d * this.options.size + x * p + u, s.options.dropupAuto && this.$newElement.toggleClass("dropup", i > n && t < o.height()), o.css({ "max-height": t + r + c + h + "px", overflow: "hidden" }), a.css({ "max-height": t - u + "px", "overflow-y": "auto" }) } }, setWidth: function() { if ("auto" == this.options.width) { this.$menu.css("min-width", "0"); var e = this.$newElement.clone().appendTo("body"),
                    t = e.find("> .dropdown-menu").css("width"),
                    i = e.css("width", "auto").find("> button").css("width");
                e.remove(), this.$newElement.css("width", Math.max(parseInt(t), parseInt(i)) + "px") } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width") }, selectPosition: function() { var t, i, n = this,
                s = "<div />",
                o = e(s),
                a = function(e) { o.addClass(e.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), i = e.hasClass("dropup") ? 0 : e[0].offsetHeight, o.css({ top: t.top + i, left: t.left, width: e[0].offsetWidth, position: "absolute" }) };
            this.$newElement.on("click", function() { n.isDisabled() || (a(e(this)), o.appendTo(n.options.container), o.toggleClass("open", !e(this).hasClass("open")), o.append(n.$menu)) }), e(window).resize(function() { a(n.$newElement) }), e(window).on("scroll", function() { a(n.$newElement) }), e("html").on("click", function(t) { e(t.target).closest(n.$newElement).length < 1 && o.removeClass("open") }) }, setSelected: function(e, t) { this.findLis(), this.$lis.filter('[data-original-index="' + e + '"]').toggleClass("selected", t) }, setDisabled: function(e, t) { this.findLis(), t ? this.$lis.filter('[data-original-index="' + e + '"]').addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : this.$lis.filter('[data-original-index="' + e + '"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0) }, isDisabled: function() { return this.$element.is(":disabled") }, checkDisabled: function() { var e = this;
            this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), this.$button.attr("tabindex") == -1 && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function() { return !e.isDisabled() }) }, tabIndex: function() { this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))) }, clickListener: function() { var t = this;
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) { e.stopPropagation() }), this.$newElement.on("click", function() { t.setSize(), t.options.liveSearch || t.multiple || setTimeout(function() { t.$menu.find(".selected a").focus() }, 10) }), this.$menu.on("click", "li a", function(i) { var n = e(this),
                    s = n.parent().data("originalIndex"),
                    o = t.$element.val(),
                    a = t.$element.prop("selectedIndex"); if (t.multiple && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass("disabled")) { var l = t.$element.find("option"),
                        d = l.eq(s),
                        r = d.prop("selected"),
                        c = d.parent("optgroup"),
                        h = t.options.maxOptions,
                        p = c.data("maxOptions") || !1; if (t.multiple) { if (d.prop("selected", !r), t.setSelected(s, !r), n.blur(), h !== !1 || p !== !1) { var u = h < l.filter(":selected").length,
                                f = p < c.find("option:selected").length; if (h && u || p && f)
                                if (h && 1 == h) l.prop("selected", !1), d.prop("selected", !0), t.$menu.find(".selected").removeClass("selected"), t.setSelected(s, !0);
                                else if (p && 1 == p) { c.find("option:selected").prop("selected", !1), d.prop("selected", !0); var m = n.data("optgroup");
                                t.$menu.find(".selected").has('a[data-optgroup="' + m + '"]').removeClass("selected"), t.setSelected(s, !0) } else { var v = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(h, p) : t.options.maxOptionsText,
                                    b = v[0].replace("{n}", h),
                                    $ = v[1].replace("{n}", p),
                                    g = e('<div class="notify"></div>');
                                v[2] && (b = b.replace("{var}", v[2][h > 1 ? 0 : 1]), $ = $.replace("{var}", v[2][p > 1 ? 0 : 1])), d.prop("selected", !1), t.$menu.append(g), h && u && (g.append(e("<div>" + b + "</div>")), t.$element.trigger("maxReached.bs.select")), p && f && (g.append(e("<div>" + $ + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() { t.setSelected(s, !1) }, 10), g.delay(750).fadeOut(300, function() { e(this).remove() }) } } } else l.prop("selected", !1), d.prop("selected", !0), t.$menu.find(".selected").removeClass("selected"), t.setSelected(s, !0);
                    t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (o != t.$element.val() && t.multiple || a != t.$element.prop("selectedIndex") && !t.multiple) && t.$element.change() } }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(e) { e.target == this && (e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()) }), this.$menu.on("click", "li.divider, li.dropdown-header", function(e) { e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus() }), this.$menu.on("click", ".popover-title .close", function() { t.$button.focus() }), this.$searchbox.on("click", function(e) { e.stopPropagation() }), this.$menu.on("click", ".actions-btn", function(i) { t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), i.preventDefault(), i.stopPropagation(), e(this).is(".bs-select-all") ? t.selectAll() : t.deselectAll(), t.$element.change() }), this.$element.change(function() { t.render(!1) }) }, liveSearchListener: function() { var t = this,
                s = e('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() { t.$menu.find(".active").removeClass("active"), t.$searchbox.val() && (t.$searchbox.val(""), t.$lis.not(".is-hidden").removeClass("hide"), s.parent().length && s.remove()), t.multiple || t.$menu.find(".selected").addClass("active"), setTimeout(function() { t.$searchbox.focus() }, 10) }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) { e.stopPropagation() }), this.$searchbox.on("input propertychange", function() { t.$searchbox.val() ? (t.options.searchAccentInsensitive ? t.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains(" + i(t.$searchbox.val()) + ")").parent().addClass("hide") : t.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + t.$searchbox.val() + ")").parent().addClass("hide"), t.$menu.find("li").filter(":visible:not(.no-results)").length ? s.parent().length && s.remove() : (s.parent().length && s.remove(), s.html(t.options.noneResultsText + ' "' + n(t.$searchbox.val()) + '"').show(), t.$menu.find("li").last().after(s))) : (t.$lis.not(".is-hidden").removeClass("hide"), s.parent().length && s.remove()), t.$menu.find("li.active").removeClass("active"), t.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), e(this).focus() }) }, val: function(e) { return "undefined" != typeof e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val() }, selectAll: function() { this.findLis(), this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click() }, deselectAll: function() { this.findLis(), this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click() }, keydown: function(t) { var n, s, o, a, l, d, r, c, h, p = e(this),
                u = p.is("input") ? p.parent().parent() : p.parent(),
                f = u.data("this"),
                m = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" }; if (f.options.liveSearch && (u = p.parent().parent()), f.options.container && (u = f.$menu), n = e("[role=menu] li a", u), h = f.$menu.parent().hasClass("open"), !h && /([0-9]|[A-z])/.test(String.fromCharCode(t.keyCode)) && (f.options.container ? f.$newElement.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), h = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(t.keyCode.toString(10)) && h && 0 === f.$menu.find(".active").length && (t.preventDefault(), f.$menu.parent().removeClass("open"), f.$button.focus()), n = e("[role=menu] li:not(.divider):not(.dropdown-header):visible", u), p.val() || /(38|40)/.test(t.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = f.options.searchAccentInsensitive ? f.$newElement.find("li").filter(":aicontains(" + i(m[t.keyCode]) + ")") : f.$newElement.find("li").filter(":icontains(" + m[t.keyCode] + ")"))), n.length) { if (/(38|40)/.test(t.keyCode.toString(10))) s = n.index(n.filter(":focus")), a = n.parent(":not(.disabled):visible").first().index(), l = n.parent(":not(.disabled):visible").last().index(), o = n.eq(s).parent().nextAll(":not(.disabled):visible").eq(0).index(), d = n.eq(s).parent().prevAll(":not(.disabled):visible").eq(0).index(), r = n.eq(o).parent().prevAll(":not(.disabled):visible").eq(0).index(), f.options.liveSearch && (n.each(function(t) { e(this).is(":not(.disabled)") && e(this).data("index", t) }), s = n.index(n.filter(".active")), a = n.filter(":not(.disabled):visible").first().data("index"), l = n.filter(":not(.disabled):visible").last().data("index"), o = n.eq(s).nextAll(":not(.disabled):visible").eq(0).data("index"), d = n.eq(s).prevAll(":not(.disabled):visible").eq(0).data("index"), r = n.eq(o).prevAll(":not(.disabled):visible").eq(0).data("index")), c = p.data("prevIndex"), 38 == t.keyCode && (f.options.liveSearch && (s -= 1), s != r && s > d && (s = d), s < a && (s = a), s == c && (s = l)), 40 == t.keyCode && (f.options.liveSearch && (s += 1), s == -1 && (s = 0), s != r && s < o && (s = o), s > l && (s = l), s == c && (s = a)), p.data("prevIndex", s), f.options.liveSearch ? (t.preventDefault(), p.is(".dropdown-toggle") || (n.removeClass("active"), n.eq(s).addClass("active").find("a").focus(), p.focus())) : n.eq(s).focus();
                else if (!p.is("input")) { var v, b, $ = [];
                    n.each(function() { e(this).parent().is(":not(.disabled)") && e.trim(e(this).text().toLowerCase()).substring(0, 1) == m[t.keyCode] && $.push(e(this).parent().index()) }), v = e(document).data("keycount"), v++, e(document).data("keycount", v), b = e.trim(e(":focus").text().toLowerCase()).substring(0, 1), b != m[t.keyCode] ? (v = 1, e(document).data("keycount", v)) : v >= $.length && (e(document).data("keycount", 0), v > $.length && (v = 1)), n.eq($[v - 1]).focus() }(/(13|32)/.test(t.keyCode.toString(10)) || /(^9$)/.test(t.keyCode.toString(10)) && f.options.selectOnTab) && h && (/(32)/.test(t.keyCode.toString(10)) || t.preventDefault(), f.options.liveSearch ? /(32)/.test(t.keyCode.toString(10)) || (f.$menu.find(".active a").click(), p.focus()) : e(":focus").click(), e(document).data("keycount", 0)), (/(^9$|27)/.test(t.keyCode.toString(10)) && h && (f.multiple || f.options.liveSearch) || /(27)/.test(t.keyCode.toString(10)) && !h) && (f.$menu.parent().removeClass("open"), f.$button.focus()) } }, mobile: function() { this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide() }, refresh: function() { this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight() }, update: function() { this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight() }, hide: function() { this.$newElement.hide() }, show: function() { this.$newElement.show() }, remove: function() { this.$newElement.remove(), this.$element.remove() } }; var a = e.fn.selectpicker;
    e.fn.selectpicker = s, e.fn.selectpicker.Constructor = o, e.fn.selectpicker.noConflict = function() { return e.fn.selectpicker = a, this }, e(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", o.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", function(e) { e.stopPropagation() }), e(window).on("load.bs.select.data-api", function() { e("select").each(function() { var t = e(this);
            s.call(t, t.data()) }) }) }(jQuery);
! function(e) { "use strict"; var a = e.fancybox,
        t = function(a, t, o) { return o = o || "", "object" === e.type(o) && (o = e.param(o, !0)), e.each(t, function(e, t) { a = a.replace("$" + e, t || "") }), o.length && (a += (a.indexOf("?") > 0 ? "&" : "?") + o), a };
    a.helpers.media = { defaults: { youtube: { matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "opaque", enablejsapi: 1 }, type: "iframe", url: "//www.youtube.com/embed/$3" }, vimeo: { matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, type: "iframe", url: "//player.vimeo.com/video/$1" }, metacafe: { matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/, params: { autoPlay: "yes" }, type: "swf", url: function(a, t, o) { return o.swf.flashVars = "playerVars=" + e.param(t, !0), "//www.metacafe.com/fplayer/" + a[1] + "/.swf" } }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "swf", url: "//www.dailymotion.com/swf/video/$1" }, twitvid: { matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i, params: { autoplay: 0 }, type: "iframe", url: "//www.twitvid.com/embed.php?guid=$1" }, twitpic: { matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i, type: "image", url: "//twitpic.com/show/full/$1/" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, google_maps: { matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i, type: "iframe", url: function(e) { return "//maps.google." + e[1] + "/" + e[3] + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed") } } }, beforeLoad: function(a, o) { var i, r, m, l, c = o.href || "",
                p = !1; for (i in a)
                if (a.hasOwnProperty(i) && (r = a[i], m = c.match(r.matcher))) { p = r.type, l = e.extend(!0, {}, r.params, o[i] || (e.isPlainObject(a[i]) ? a[i].params : null)), c = "function" === e.type(r.url) ? r.url.call(this, m, l, o) : t(r.url, m, l); break } p && (o.href = c, o.type = p, o.autoHeight = !1) } } }(jQuery);
! function(t) {
    function e() { var e, i, n = { height: a.innerHeight, width: a.innerWidth }; return n.height || (e = r.compatMode, (e || !t.support.boxModel) && (i = "CSS1Compat" === e ? f : r.body, n = { height: i.clientHeight, width: i.clientWidth })), n }

    function i() { return { top: a.pageYOffset || f.scrollTop || r.body.scrollTop, left: a.pageXOffset || f.scrollLeft || r.body.scrollLeft } }

    function n() { var n, l = t(),
            r = 0; if (t.each(d, function(t, e) { var i = e.data.selector,
                    n = e.$element;
                l = l.add(i ? n.find(i) : n) }), n = l.length)
            for (o = o || e(), h = h || i(); n > r; r++)
                if (t.contains(f, l[r])) { var a, c, p, s = t(l[r]),
                        u = { height: s.height(), width: s.width() },
                        g = s.offset(),
                        v = s.data("inview"); if (!h || !o) return;
                    g.top + u.height > h.top && g.top < h.top + o.height && g.left + u.width > h.left && g.left < h.left + o.width ? (a = h.left > g.left ? "right" : h.left + o.width < g.left + u.width ? "left" : "both", c = h.top > g.top ? "bottom" : h.top + o.height < g.top + u.height ? "top" : "both", p = a + "-" + c, v && v === p || s.data("inview", p).trigger("inview", [!0, a, c])) : v && s.data("inview", !1).trigger("inview", [!1]) } } var o, h, l, d = {},
        r = document,
        a = window,
        f = r.documentElement,
        c = t.expando;
    t.event.special.inview = { add: function(e) { d[e.guid + "-" + this[c]] = { data: e, $element: t(this) }, l || t.isEmptyObject(d) || (l = setInterval(n, 250)) }, remove: function(e) { try { delete d[e.guid + "-" + this[c]] } catch (i) {} t.isEmptyObject(d) && (clearInterval(l), l = null) } }, t(a).bind("scroll resize scrollstop", function() { o = h = null }), !f.addEventListener && f.attachEvent && f.attachEvent("onfocusin", function() { h = null }) }(jQuery);