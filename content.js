chrome.extension.onMessage.addListener(function(message, sender, sendResponse) { 
//var btn = document.createElement("BUTTON") 
//var t = document.createTextNode("CLICK ME");
 //btn.appendChild(t); 
 //document.body.appendChild(btn); 

 
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function (e, t) { return new b.fn.init(e, t, r) }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function (e, t) { return t.toUpperCase() }, H = function (e) { (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready()) }, q = function () { o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H)) }; b.fn = b.prototype = { jquery: p, constructor: b, init: function (e, n, r) { var i, a; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (a = o.getElementById(i[2]), a && a.parentNode) { if (a.id !== i[2]) return r.find(e); this.length = 1, this[0] = a } return this.context = o, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this)) }, selector: "", length: 0, size: function () { return this.length }, toArray: function () { return h.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = b.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return b.each(this, e, t) }, ready: function (e) { return b.ready.promise().done(e), this }, slice: function () { return this.pushStack(h.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(b.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: d, sort: [].sort, splice: [].splice }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, b.extend({ noConflict: function (t) { return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? b.readyWait++ : b.ready(!0) }, ready: function (e) { if (e === !0 ? ! --b.readyWait : !b.isReady) { if (!o.body) return setTimeout(b.ready); b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === b.type(e) }, isArray: Array.isArray || function (e) { return "array" === b.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e }, isPlainObject: function (e) { if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1; try { if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var r; for (r in e); return r === t || y.call(e, r) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || o; var r = C.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && b.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(j, "ms-").replace(D, L) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: v && !v.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : v.call(e) } : function (e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (g) return g.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return f.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(h.call(arguments))) }, i.guid = e.guid = e.guid || b.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var u = 0, l = e.length, c = null == r; if ("object" === b.type(r)) { o = !0; for (u in r) b.access(e, n, u, r[u], !0, a, s) } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(b(e), n) })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r))); return o ? e : c ? n.call(e) : l ? n(e[0], r) : a }, now: function () { return (new Date).getTime() } }), b.ready.promise = function (t) { if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1); else { o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H); var r = !1; try { r = null == e.frameElement && o.documentElement } catch (i) { } r && r.doScroll && function a() { if (!b.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(a, 50) } q(), b.ready() } } () } return n.promise(t) }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = b.type(e); return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = b(o); var _ = {}; function F(e) { var t = _[e] = {}; return b.each(e.match(w) || [], function (e, n) { t[n] = !0 }), t } b.Callbacks = function (e) { e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e); var n, r, i, o, a, s, u = [], l = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable()) }, p = { add: function () { if (u) { var t = u.length; (function i(t) { b.each(t, function (t, n) { var r = b.type(n); "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = u.length : r && (s = t, c(r)) } return this }, remove: function () { return u && b.each(arguments, function (e, t) { var r; while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? b.inArray(e, u) > -1 : !(!u || !u.length) }, empty: function () { return u = [], this }, disable: function () { return u = l = r = t, this }, disabled: function () { return !u }, lock: function () { return l = t, r || p.disable(), this }, locked: function () { return !l }, fireWith: function (e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, b.extend({ Deferred: function (e) { var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return b.Deferred(function (n) { b.each(t, function (t, o) { var a = o[0], s = b.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? b.extend(e, r) : r } }, i = {}; return r.pipe = r.then, b.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, u, l; if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i; return i || o.resolveWith(l, n), o.promise() } }), b.support = function () { var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {}; s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== d.className, leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!a.value, optSelected: l.selected, enctype: !!o.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === o.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () { var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0]; u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null) }), n = s = u = l = r = a = null, t } (); var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g; function P(e, n, r, i) { if (b.acceptData(e)) { var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s; if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a } } function R(e, t, n) { if (b.acceptData(e)) { var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando; if (s[u]) { if (t && (o = n ? s[u] : s[u].data)) { b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" ")); for (r = 0, i = t.length; i > r; r++) delete o[t[r]]; if (!(n ? $ : b.isEmptyObject)(o)) return } (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null) } } } b.extend({ cache: {}, expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (e) { return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e) }, data: function (e, t, n) { return P(e, t, n) }, removeData: function (e, t) { return R(e, t) }, _data: function (e, t, n) { return P(e, t, n, !0) }, _removeData: function (e, t) { return R(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && b.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), b.fn.extend({ data: function (e, n) { var r, i, o = this[0], a = 0, s = null; if (e === t) { if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) { for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i])); b._data(o, "parsedAttrs", !0) } return s } return "object" == typeof e ? this.each(function () { b.data(this, e) }) : b.access(this, function (n) { return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () { b.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { b.removeData(this, e) }) } }); function W(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(B, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r } catch (o) { } b.data(e, n, r) } else r = t } return r } function $(e) { var t; for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } b.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function () { b.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return b._data(e, n) || b._data(e, n, { empty: b.Callbacks("once memory").add(function () { b._removeData(e, t + "queue"), b._removeData(e, n) }) }) } }), b.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () { var t = b.queue(this, e, n); b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { b.dequeue(this, e) }) }, delay: function (e, t) { return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u)); return u(), o.promise(n) } }); var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input; b.fn.extend({ attr: function (e, t) { return b.access(this, b.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { b.removeAttr(this, e) }) }, prop: function (e, t) { return b.access(this, b.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = b.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e; if (b.isFunction(e)) return this.each(function (t) { b(this).addClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = b.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e; if (b.isFunction(e)) return this.each(function (t) { b(this).removeClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? b.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e, r = "boolean" == typeof t; return b.isFunction(e) ? this.each(function (n) { b(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var o, a = 0, s = b(this), u = t, l = e.match(w) || []; while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o) } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = b.isFunction(e), this.each(function (n) { var o, a = b(this); 1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) { return null == e ? "" : e + "" })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n) } } }), b.extend({ valHooks: { option: { get: function (e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) { if (t = b(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n = b.makeArray(t); return b(e).find("option").each(function () { this.selected = b.inArray(b(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attr: function (e, n, r) { var o, a, s, u = e.nodeType; if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(w); if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t } }} }), z = { get: function (e, n) { var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n); return o && o.value !== !1 ? n.toLowerCase() : t }, set: function (e, t, n) { return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n } }, K && Q || (b.attrHooks.value = { get: function (e, n) { var r = e.getAttributeNode(n); return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function (e, n, r) { return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r) } }), Q || (I = b.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, b.attrHooks.contenteditable = { get: I.get, set: function (e, t, n) { I.set(e, "" === t ? !1 : t, n) } }, b.each(["width", "height"], function (e, n) { b.attrHooks[n] = b.extend(b.attrHooks[n], { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } }) })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) { b.attrHooks[n] = b.extend(b.attrHooks[n], { get: function (e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), b.each(["href", "src"], function (e, t) { b.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } })), b.support.style || (b.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () { b.valHooks[this] = { get: function (e) { return null === e.getAttribute("value") ? "on" : e.value } } }), b.each(["radio", "checkbox"], function () { b.valHooks[this] = b.extend(b.valHooks[this], { set: function (e, n) { return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t } }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } b.event = { global: {}, add: function (e, n, r, o, a) { var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(w) || [""], l = n.length; while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && b.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0; e = null } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e); if (m && (c = m.events)) { t = (t || "").match(w) || [""], l = t.length; while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) b.event.remove(e, d + t[l], n, r, !0); b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events")) } }, trigger: function (n, r, i, a) { var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : []; if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!a && !p.noBubble && !b.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l; f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault(); if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) { f = i[u], f && (i[u] = null), b.event.triggered = g; try { i[g]() } catch (v) { } b.event.triggered = t, f && (i[u] = f) } return n.result } }, dispatch: function (e) { e = b.event.fix(e); var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {}; if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = b.event.handlers.call(this, e, l), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], u = n.delegateCount, l = e.target; if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i); o.length && s.push({ elem: l, handlers: o }) } return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s }, fix: function (e) { if (e[b.expando]) return e; var t, n, r, i = e.type, a = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length; while (t--) n = r[t], e[n] = a[n]; return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, a, s = n.button, u = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, click: { trigger: function () { return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function () { if (this !== o.activeElement && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === o.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = b.extend(new b.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, b.removeEvent = o.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, b.Event = function (e, n) { return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n) }, b.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, b.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
        b.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        } 
        }
    }), b.support.submitBubbles || (b.event.special.submit = { setup: function () { return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t; r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), b._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t) } }), b.support.changeBubbles || (b.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), b.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0) })), !1) : (b.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0) }), b._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return b.event.remove(this, "._change"), !Z.test(this.nodeName) } }), b.support.focusinBubbles || b.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { b.event.simulate(t, e.target, b.event.fix(e), !0) }; b.event.special[t] = { setup: function () { 0 === n++ && o.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && o.removeEventListener(e, r, !0) } } }), b.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return b().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () { b.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { b.event.remove(this, e, r, n) }) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function (e, t) { return this.each(function () { b.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? b.event.trigger(e, n, r, !0) : t } }), function (e, t) { var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = { ID: RegExp("^#(" + F + ")"), CLASS: RegExp("^\\.(" + F + ")"), NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), TAG: RegExp("^(" + F.replace("w", "w*") + ")"), ATTR: RegExp("^" + P), PSEUDO: RegExp("^" + R), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"), needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i") }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function (e, t) { var n = "0x" + t - 65536; return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) }; try { q.call(w.documentElement.childNodes, 0)[0].nodeType } catch (nt) { q = function (e) { var t, n = []; while (t = this[e++]) n.push(t); return n } } function rt(e) { return Y.test(e + "") } function it() { var e, t = []; return e = function (n, r) { return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r } } function ot(e) { return e[x] = !0, e } function at(e) { var t = p.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } } function st(e, t, n, r) { var i, o, a, s, u, l, f, g, m, v; if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n; if (1 !== (s = t.nodeType) && 9 !== s) return []; if (!d && !r) { if (i = J.exec(e)) if (a = i[1]) { if (9 === s) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n } else { if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n; if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n } if (T.qsa && !h.test(e)) { if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) { l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length; while (u--) l[u] = g + dt(l[u]); m = V.test(e) && t.parentNode || t, v = l.join(",") } if (v) try { return H.apply(n, q.call(m.querySelectorAll(v), 0)), n } catch (b) { } finally { f || t.removeAttribute("id") } } } return wt(e.replace(W, "$1"), t, n, r) } a = st.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, c = st.setDocument = function (e) { var n = e ? e.ownerDocument || e : w; return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), T.attributes = at(function (e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), T.getByClassName = at(function (e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }), T.getByName = at(function (e) { e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild); var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length; return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t }), i.attrHandle = at(function (e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function (e) { return e.getAttribute("href", 2) }, type: function (e) { return e.getAttribute("type") } }, T.getIdNotName ? (i.find.ID = function (e, t) { if (typeof t.getElementById !== A && !d) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, i.filter.ID = function (e) { var t = e.replace(et, tt); return function (e) { return e.getAttribute("id") === t } }) : (i.find.ID = function (e, n) { if (typeof n.getElementById !== A && !d) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : [] } }, i.filter.ID = function (e) { var t = e.replace(et, tt); return function (e) { var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id"); return n && n.value === t } }), i.find.TAG = T.tagNameNoComments ? function (e, n) { return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, i.find.NAME = T.getByName && function (e, n) { return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t }, i.find.CLASS = T.getByClassName && function (e, n) { return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e) }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked") }), at(function (e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:") })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) { T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R) }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, v = f.compareDocumentPosition ? function (e, t) { var r; return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return u = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0; if (o === a) return ut(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p }, st.matches = function (e, t) { return st(e, null, null, t) }, st.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try { var n = m.call(e, t); if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (r) { } return st(t, p, null, [e]).length > 0 }, st.contains = function (e, t) { return (e.ownerDocument || e) !== p && c(e), y(e, t) }, st.attr = function (e, t) { var n; return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, st.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, st.uniqueSort = function (e) { var t, n = [], r = 1, i = 0; if (u = !T.detectDuplicates, e.sort(v), u) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); while (i--) e.splice(n[i], 1) } return e }; function ut(e, t) { var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function lt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function ct(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function pt(e) { return ot(function (t) { return t = +t, ot(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } o = st.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += o(t); return n }, i = st.selectors = { cacheLength: 50, createPseudo: ot, match: U, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling"} }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[5] && e[2]; return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { return "*" === e ? function () { return !0 } : (e = e.replace(et, tt).toLowerCase(), function (t) { return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function (e) { var t = k[e + " "]; return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) { return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = st.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [N, d, f]; break } } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e); return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: ot(function (e) { var t = [], n = [], r = s(e.replace(W, "$1")); return r[x] ? ot(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: ot(function (e) { return function (t) { return st(e, t).length > 0 } }), contains: ot(function (e) { return function (t) { return (t.textContent || t.innerText || o(t)).indexOf(e) > -1 } }), lang: ot(function (e) { return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) { var n; do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === f }, focus: function (e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !i.pseudos.empty(e) }, header: function (e) { return Q.test(e.nodeName) }, input: function (e) { return G.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: pt(function () { return [0] }), last: pt(function (e, t) { return [t - 1] }), eq: pt(function (e, t, n) { return [0 > n ? n + t : n] }), even: pt(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: pt(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: pt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0; ) e.push(r); return e }), gt: pt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r; ) e.push(r); return e })} }; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[n] = lt(n); for (n in { submit: !0, reset: !0 }) i.pseudos[n] = ct(n); function ft(e, t) { var n, r, o, a, s, u, l, c = E[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, u = [], l = i.preFilter; while (s) { (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(W, " ") }), s = s.slice(n.length)); for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? st.error(e) : E(e, u).slice(0) } function dt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function ht(e, t, n) { var i = t.dir, o = n && "parentNode" === i, a = C++; return t.first ? function (t, n, r) { while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r) } : function (t, n, s) { var u, l, c, p = N + " " + a; if (s) { while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) { if ((u = l[1]) === !0 || u === r) return u === !0 } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0 } } function gt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function mt(e, t, n, r, i) { var o, a = [], s = 0, u = e.length, l = null != t; for (; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s)); return a } function yt(e, t, n, r, i, o) { return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) { var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, u), r) { l = mt(y, d), r(l, [], s, u), c = l.length; while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { l = [], c = y.length; while (c--) (p = y[c]) && l.push(m[c] = p); i(null, y = [], l, u) } c = y.length; while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p)) } } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y) }) } function vt(e) { var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function (e) { return e === t }, s, !0), p = ht(function (e) { return M.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) } ]; for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)]; else { if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) { for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break; return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e)) } f.push(n) } return gt(f) } function bt(e, t) { var n = 0, o = t.length > 0, a = e.length > 0, s = function (s, u, c, f, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1; for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, u, c)) { f.push(h); break } w && (N = k, r = ++n) } o && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, o && b !== v) { g = 0; while (m = t[g++]) m(x, y, u, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f)); y = mt(y) } H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f) } return w && (N = k, l = T), x }; return o ? ot(s) : s } s = st.compile = function (e, t) { var n, r = [], i = [], o = S[e + " "]; if (!o) { t || (t = ft(e)), n = t.length; while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o); o = S(e, bt(i, r)) } return o }; function xt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) st(e, t[r], n); return n } function wt(e, t, n, r) { var o, a, u, l, c, p = ft(e); if (!r && 1 === p.length) { if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) { if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n; e = e.slice(a.shift().value.length) } o = U.needsContext.test(e) ? 0 : a.length; while (o--) { if (u = a[o], i.relative[l = u.type]) break; if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) { if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n; break } } } return s(e, p)(r, t, d, n, V.test(e)), n } i.pseudos.nth = i.pseudos.eq; function Tt() { } i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains } (e); var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; b.fn.extend({ find: function (e) { var t, n, r, i = this.length; if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () { for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0 })); for (n = [], t = 0; i > t; t++) b.find(e, this[t], n); return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n }, has: function (e) { var t, n = b(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e, !1)) }, filter: function (e) { return this.pushStack(ft(this, e, !0)) }, is: function (e) { return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0; for (; i > r; r++) { n = this[r]; while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) { if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) { o.push(n); break } n = n.parentNode } } return this.pushStack(o.length > 1 ? b.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n); return this.pushStack(b.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), b.fn.andSelf = b.fn.addBack; function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } b.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return b.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return b.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return b.dir(e, "nextSibling") }, prevAll: function (e) { return b.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return b.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return b.dir(e, "previousSibling", n) }, siblings: function (e) { return b.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return b.sibling(e.firstChild) }, contents: function (e) { return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes) } }, function (e, t) { b.fn[e] = function (n, r) { var i = b.map(this, t, n); return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i) } }), b.extend({ filter: function (e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) { var i = !!t.call(e, r, e); return i === n }); if (t.nodeType) return b.grep(e, function (e) { return e === t === n }); if ("string" == typeof t) { var r = b.grep(e, function (e) { return 1 === e.nodeType }); if (ut.test(t)) return b.filter(t, r, !n); t = b.filter(t, r) } return b.grep(e, function (e) { return b.inArray(e, t) >= 0 === n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(o), Dt = jt.appendChild(o.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({ text: function (e) { return b.access(this, function (e) { return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e)) }, null, e, arguments.length) }, wrapAll: function (e) { if (b.isFunction(e)) return this.each(function (t) { b(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = b(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return b.isFunction(e) ? this.each(function (t) { b(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = b(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = b.isFunction(e); return this.each(function (n) { b(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { b.nodeName(this, "body") || b(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e) }) }, prepend: function () { return this.domManip(arguments, !0, function (e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild) }) }, before: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = 0; for (; null != (n = this[r]); r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n))); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]); t++) { 1 === e.nodeType && b.cleanData(Ot(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && b.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return b.clone(this, e, t) }) }, html: function (e) { return b.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function (e) { var t = b.isFunction(e); return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) { var t = this.nextSibling, n = this.parentNode; n && (b(this).remove(), n.insertBefore(e, t)) }) }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, n, r) { e = f.apply([], e); var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g); if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) { var o = d.eq(i); m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r) }); if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) { for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c); if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, ""))); l = i = null } return this } }); function Lt(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) } function Ht(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function Mt(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval")) } function _t(e, t) { if (1 === t.nodeType && b.hasData(e)) { var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r]) } a.data && (a.data = b.extend({}, a.data)) } } function Ft(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) { i = b._data(t); for (r in i.events) b.removeEvent(t, r, i.handle); t.removeAttribute(b.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { b.fn[e] = function (e) { var n, r = 0, i = [], o = b(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get()); return this.pushStack(i) } }); function Ot(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n)); return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s } function Bt(e) { Nt.test(e.type) && (e.defaultChecked = e.checked) } b.extend({ clone: function (e, t, n) { var r, i, o, a, s, u = b.contains(e.ownerDocument, e); if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]); if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]); else _t(e, o); return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) {
        var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
            s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
            } b.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild
        } else d.push(t.createTextNode(o)); s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f
    }, cleanData: function (e, t) { var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special; for (; null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) { if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle); l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o)) } } 
    }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } b.fn.extend({ css: function (e, n) { return b.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (b.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o); return a } return r !== t ? b.style(e, n, r) : b.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { var t = "boolean" == typeof e; return this.each(function () { (t ? e : nn(this)) ? b(this).show() : b(this).hide() }) } }), b.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": b.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, u = b.camelCase(n), l = e.style; if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { l[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, u = b.camelCase(n); return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style; return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u }) : o.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style; return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function un(e) { var t = o, n = Gt[e]; return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n } function ln(e, t) { var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display"); return n.remove(), r } b.each(["height", "width"], function (e, n) { b.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0) } } }), b.support.opacity || (b.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), b(function () { b.support.reliableMarginRight || (b.cssHooks.marginRight = { get: function (e, n) { return n ? b.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) { b.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t } } }) }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display")) }, b.expr.filters.visible = function (e) { return !b.expr.filters.hidden(e) }), b.each({ margin: "", padding: "", border: "Width" }, function (e, t) { b.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (b.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; b.fn.extend({ serialize: function () { return b.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = b.prop(this, "elements"); return e ? b.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e)) }).map(function (e, t) { var n = b(this).val(); return null == n ? null : b.isArray(n) ? b.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n")} }) : { name: t.name, value: n.replace(fn, "\r\n")} }).get() } }), b.param = function (e, n) { var r, i = [], o = function (e, t) { t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (b.isArray(t)) b.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { b.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), b.fn.hover = function (e, t) { return this.mouseenter(e).mouseleave(t || e) }; var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = a.href } catch (Ln) { yn = o.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(w) || []; if (b.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(u) { var l; return o[u] = !0, b.each(e[u] || [], function (e, u) { var c = u(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), l } return s(n.dataTypes[0]) || !o["*"] && s("*") } function Mn(e, n) { var r, i, o = b.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && b.extend(!0, e, r), e } b.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, u = e.indexOf(" "); return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { b.fn[t] = function (e) { return this.on(t, e) } }), b.each(["get", "post"], function (e, n) { b[n] = function (e, r, i, o) { return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }), b.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Nn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": b.parseJSON, "text xml": b.parseXML }, flatOptions: { url: !0, context: !0} }, ajaxSetup: function (e, t) { return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === x) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === x ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return x || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return x || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]); return this }, abort: function (e) { var t = e || T; return l && l.abort(t), k(0, t), this } }; if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N; u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) N.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort(); T = "abort"; for (i in { success: 1, error: 1, complete: 1 }) N[i](p[i]); if (l = qn(jn, p, n, N)) { N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { N.abort("timeout") }, p.timeout)); try { x = 1, l.send(y, k) } catch (C) { if (!(2 > x)) throw C; k(-1, C) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, C = n; 2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop"))) } return N }, getScript: function (e, n) { return b.get(e, t, n, "script") }, getJSON: function (e, t, n) { return b.get(e, t, n, "json") } }); function _n(e, n, r) { var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields; for (s in c) s in r && (n[c[s]] = r[s]); while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in u) if (u[s] && u[s].test(o)) { l.unshift(s); break } if (l[0] in r) a = l[0]; else { for (s in r) { if (!l[0] || e.converters[s + " " + l[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== l[0] && l.unshift(a), r[a]) : t } function Fn(e, t) { var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0]; if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i]; for (; r = u[++s]; ) if ("*" !== r) { if ("*" !== l && l !== r) { if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) { i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r)); break } if (i !== !0) if (i && e["throws"]) t = i(t); else try { t = i(t) } catch (c) { return { state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r} } } l = r } return { state: "success", data: t} } b.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return b.globalEval(e), e } } }), b.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), b.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = o.head || b("head")[0] || o.documentElement; return { send: function (t, i) { n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var On = [], Bn = /(=)\?(?=&|$)|\?\?/; b.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = On.pop() || b.expando + "_" + vn++; return this[e] = !0, e } }), b.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || b.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } b.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) { if (!n.crossDomain || b.support.cors) { var r; return { send: function (i, o) { var a, s, u = n.xhr(); if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s]; n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) u.setRequestHeader(s, i[s]) } catch (l) { } u.send(n.hasContent && n.data || null), r = function (e, i) { var s, l, c, p; try { if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else { p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText); try { c = u.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, l) }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20; if (o) { if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) { s = b.css(i.elem, e, !0) || n || 1; do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l) } i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n } return i } ] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = b.now() } function Zn(e, t) { b.each(t, function (t, n) { var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length; for (; o > i; i++) if (r[i].call(e, t, n)) return }) } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; for (; u > a; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: b.extend({}, t), opts: b.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) l.tweens[n].run(1); return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r; return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) } function tr(e, t) { var n, r, i, o, a; for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) { n = a.expand(n), delete e[r]; for (i in n) i in e || (e[i] = n[i], t[i] = o) } else t[r] = o } b.Animation = b.extend(er, { tweener: function (e, t) { b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e); n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () { c.unqueued || p() }), c.unqueued++, f.always(function () { f.always(function () { c.unqueued--, b.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })); for (i in t) if (a = t[i], Vn.exec(a)) { if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue; g.push(i) } if (o = g.length) { s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () { b(e).hide() }), f.done(function () { var t; b._removeData(e, "fxshow"); for (t in h) b.style(e, t, h[t]) }); for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } b.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, b.each(["toggle", "show", "hide"], function (e, t) { var n = b.fn[t]; b.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), b.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function () { var t = er(this, b.extend({}, e), o); a.finish = function () { t.stop(!0) }, (i || b._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && b.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0; for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } b.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle"} }, function (e, t) { b.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), b.speed = function (e, t, n) { var r = e && "object" == typeof e ? b.extend({}, e) : { complete: n || !n && t || b.isFunction(e) && e, duration: e, easing: n && t || t && !b.isFunction(t) && t }; return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue) }, r }, b.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () { var e, n = b.timers, r = 0; for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || b.fx.stop(), Xn = t }, b.fx.timer = function (e) { e() && b.timers.push(e) && b.fx.start() }, b.fx.interval = 13, b.fx.start = function () { Un || (Un = setInterval(b.fx.tick, b.fx.interval)) }, b.fx.stop = function () { clearInterval(Un), Un = null }, b.fx.speeds = { slow: 600, fast: 200, _default: 400 }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) { return b.grep(b.timers, function (t) { return e === t.elem }).length }), b.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { b.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, b.offset = { setOffset: function (e, t, n) { var r = b.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f; u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l) } }, b.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - b.css(r, "marginTop", !0), left: t.left - n.left - b.css(r, "marginLeft", !0)} } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || o.documentElement; while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent; return e || o.documentElement }) } }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); b.fn[e] = function (i) { return b.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } b.each({ Height: "height", Width: "width" }, function (e, n) { b.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { b.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return b.access(this, function (n, r, i) { var o; return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () { return b })
})(window);



/*
* Jssor 19.0
* http://www.jssor.com/
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/MIT
* 
* TERMS OF USE - Jssor
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*! Jssor */

//$JssorDebug$
var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var debug = this.$DebugMode;
        if (debug) {
            var stamp = document.createElement("DIV");
            stamp.setAttribute("id", id);

            obj.$Live = stamp;
        }
    };

    this.$C_AbstractProperty = function () {
        ///	<summary>
        ///		Tells compiler the property is abstract, it should be implemented by subclass.
        ///	</summary>

        throw new Error("The property is abstract, it should be implemented by subclass.");
    };

    this.$C_AbstractMethod = function () {
        ///	<summary>
        ///		Tells compiler the method is abstract, it should be implemented by subclass.
        ///	</summary>

        throw new Error("The method is abstract, it should be implemented by subclass.");
    };

    function C_AbstractClass(instance) {
        ///	<summary>
        ///		Tells compiler the class is abstract, it should be implemented by subclass.
        ///	</summary>

        if (instance.constructor === C_AbstractClass.caller)
            throw new Error("Cannot create instance of an abstract class.");
    }

    this.$C_AbstractClass = C_AbstractClass;
};

//$JssorEasing$
var $JssorEasing$ = window.$JssorEasing$ = {
    $EaseSwing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
    },
    $EaseLinear: function (t) {
        return t;
    },
    $EaseInQuad: function (t) {
        return t * t;
    },
    $EaseOutQuad: function (t) {
        return -t * (t - 2);
    },
    $EaseInOutQuad: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t : -1 / 2 * (--t * (t - 2) - 1);
    },
    $EaseInCubic: function (t) {
        return t * t * t;
    },
    $EaseOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
    },
    $EaseInOutCubic: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t : 1 / 2 * ((t -= 2) * t * t + 2);
    },
    $EaseInQuart: function (t) {
        return t * t * t * t;
    },
    $EaseOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
    },
    $EaseInOutQuart: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t : -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    $EaseInQuint: function (t) {
        return t * t * t * t * t;
    },
    $EaseOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
    },
    $EaseInOutQuint: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t * t : 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    $EaseInSine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
    },
    $EaseOutSine: function (t) {
        return Math.sin(t * Math.PI / 2);
    },
    $EaseInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
    },
    $EaseInExpo: function (t) {
        return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    $EaseOutExpo: function (t) {
        return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    $EaseInOutExpo: function (t) {
        return t == 0 || t == 1 ? t : (t *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (t - 1)) : 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    $EaseInCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    },
    $EaseOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
    },
    $EaseInOutCirc: function (t) {
        return (t *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - t * t) - 1) : 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    $EaseInElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p));
    },
    $EaseOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * 2 * Math.PI / p) + 1;
    },
    $EaseInOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .45, s = .1125;
        return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) : Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) * .5 + 1;
    },
    $EaseInBack: function (t) {
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    $EaseOutBack: function (t) {
        var s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    $EaseInOutBack: function (t) {
        var s = 1.70158;
        return (t *= 2) < 1 ? 1 / 2 * t * t * (((s *= 1.525) + 1) * t - s) : 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    $EaseInBounce: function (t) {
        return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
    },
    $EaseOutBounce: function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    $EaseInOutBounce: function (t) {
        return t < 1 / 2 ? $JssorEasing$.$EaseInBounce(t * 2) * .5 : $JssorEasing$.$EaseOutBounce(t * 2 - 1) * .5 + .5;
    },
    $EaseGoBack: function (t) {
        return 1 - Math.abs((t *= 2) - 1);
    },
    $EaseInWave: function (t) {
        return 1 - Math.cos(t * Math.PI * 2)
    },
    $EaseOutWave: function (t) {
        return Math.sin(t * Math.PI * 2);
    },
    $EaseOutJump: function (t) {
        return 1 - (((t *= 2) < 1) ? (t = 1 - t) * t * t : (t -= 1) * t * t);
    },
    $EaseInJump: function (t) {
        return ((t *= 2) < 1) ? t * t * t : (t = 2 - t) * t * t;
    }
};

var $JssorDirection$ = window.$JssorDirection$ = {
    $TO_LEFT: 0x0001,
    $TO_RIGHT: 0x0002,
    $TO_TOP: 0x0004,
    $TO_BOTTOM: 0x0008,
    $HORIZONTAL: 0x0003,
    $VERTICAL: 0x000C,
    //$LEFTRIGHT: 0x0003,
    //$TOPBOTOM: 0x000C,
    //$TOPLEFT: 0x0005,
    //$TOPRIGHT: 0x0006,
    //$BOTTOMLEFT: 0x0009,
    //$BOTTOMRIGHT: 0x000A,
    //$AROUND: 0x000F,

    $GetDirectionHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $GetDirectionVertical: function (direction) {
        return direction & 0x000C;
    },
    //$ChessHorizontal: function (direction) {
    //    return (~direction & 0x0003) + (direction & 0x000C);
    //},
    //$ChessVertical: function (direction) {
    //    return (~direction & 0x000C) + (direction & 0x0003);
    //},
    //$IsToLeft: function (direction) {
    //    return (direction & 0x0003) == 0x0001;
    //},
    //$IsToRight: function (direction) {
    //    return (direction & 0x0003) == 0x0002;
    //},
    //$IsToTop: function (direction) {
    //    return (direction & 0x000C) == 0x0004;
    //},
    //$IsToBottom: function (direction) {
    //    return (direction & 0x000C) == 0x0008;
    //},
    $IsHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $IsVertical: function (direction) {
        return direction & 0x000C;
    }
};

var $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
};

// $Jssor$ is a static class, so make it singleton instance
var $Jssor$ = window.$Jssor$ = new function () {
    var _This = this;

    //#region Constants
    var REGEX_WHITESPACE_GLOBAL = /\S+/g;
    var ROWSER_OTHER = -1;
    var ROWSER_UNKNOWN = 0;
    var BROWSER_IE = 1;
    var BROWSER_FIREFOX = 2;
    var BROWSER_SAFARI = 3;
    var BROWSER_CHROME = 4;
    var BROWSER_OPERA = 5;
    //var arrActiveX = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
    //#endregion

    //#region Variables
    var _Device;
    var _Browser = 0;
    var _BrowserRuntimeVersion = 0;
    var _BrowserEngineVersion = 0;
    var _BrowserJavascriptVersion = 0;
    var _WebkitVersion = 0;

    var _Navigator = navigator;
    var _AppName = _Navigator.appName;
    var _AppVersion = _Navigator.appVersion;
    var _UserAgent = _Navigator.userAgent;

    var _DocElmt = document.documentElement;
    var _TransformProperty;
    //#endregion

    function Device() {
        if (!_Device) {
            _Device = { $Touchable: "ontouchstart" in window || "createTouch" in document };

            var msPrefix;
            if ((_Navigator.pointerEnabled || (msPrefix = _Navigator.msPointerEnabled))) {
                _Device.$TouchActionAttr = msPrefix ? "msTouchAction" : "touchAction";
            }
        }

        return _Device;
    }

    function DetectBrowser(browser) {
        if (!_Browser) {
            _Browser = -1;

            if (_AppName == "Microsoft Internet Explorer" &&
                !!window.attachEvent && !!window.ActiveXObject) {

                var ieOffset = _UserAgent.indexOf("MSIE");
                _Browser = BROWSER_IE;
                _BrowserEngineVersion = ParseFloat(_UserAgent.substring(ieOffset + 5, _UserAgent.indexOf(";", ieOffset)));

                //check IE javascript version
                /*@cc_on
                _BrowserJavascriptVersion = @_jscript_version;
                @*/

                // update: for intranet sites and compat view list sites, IE sends
                // an IE7 User-Agent to the server to be interoperable, and even if
                // the page requests a later IE version, IE will still report the
                // IE7 UA to JS. we should be robust to self
                //var docMode = document.documentMode;
                //if (typeof docMode !== "undefined") {
                //    _BrowserRuntimeVersion = docMode;
                //}

                _BrowserRuntimeVersion = document.documentMode || _BrowserEngineVersion;

            }
            else if (_AppName == "Netscape" && !!window.addEventListener) {

                var ffOffset = _UserAgent.indexOf("Firefox");
                var saOffset = _UserAgent.indexOf("Safari");
                var chOffset = _UserAgent.indexOf("Chrome");
                var webkitOffset = _UserAgent.indexOf("AppleWebKit");

                if (ffOffset >= 0) {
                    _Browser = BROWSER_FIREFOX;
                    _BrowserRuntimeVersion = ParseFloat(_UserAgent.substring(ffOffset + 8));
                }
                else if (saOffset >= 0) {
                    var slash = _UserAgent.substring(0, saOffset).lastIndexOf("/");
                    _Browser = (chOffset >= 0) ? BROWSER_CHROME : BROWSER_SAFARI;
                    _BrowserRuntimeVersion = ParseFloat(_UserAgent.substring(slash + 1, saOffset));
                }
                else {
                    //(/Trident.*rv[ :]*11\./i
                    var match = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(_UserAgent);
                    if (match) {
                        _Browser = BROWSER_IE;
                        _BrowserRuntimeVersion = _BrowserEngineVersion = ParseFloat(match[1]);
                    }
                }

                if (webkitOffset >= 0)
                    _WebkitVersion = ParseFloat(_UserAgent.substring(webkitOffset + 12));
            }
            else {
                var match = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(_UserAgent);
                if (match) {
                    _Browser = BROWSER_OPERA;
                    _BrowserRuntimeVersion = ParseFloat(match[2]);
                }
            }
        }

        return browser == _Browser;
    }

    function IsBrowserIE() {
        return DetectBrowser(BROWSER_IE);
    }

    function IsBrowserIeQuirks() {
        return IsBrowserIE() && (_BrowserRuntimeVersion < 6 || document.compatMode == "BackCompat");   //Composite to "CSS1Compat"
    }

    function IsBrowserFireFox() {
        return DetectBrowser(BROWSER_FIREFOX);
    }

    function IsBrowserSafari() {
        return DetectBrowser(BROWSER_SAFARI);
    }

    function IsBrowserChrome() {
        return DetectBrowser(BROWSER_CHROME);
    }

    function IsBrowserOpera() {
        return DetectBrowser(BROWSER_OPERA);
    }

    function IsBrowserBadTransform() {
        return IsBrowserSafari() && (_WebkitVersion > 534) && (_WebkitVersion < 535);
    }

    function IsBrowserIe9Earlier() {
        return IsBrowserIE() && _BrowserRuntimeVersion < 9;
    }

    function GetTransformProperty(elmt) {

        if (!_TransformProperty) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform

            Each(['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'], function (property) {
                if (elmt.style[property] != undefined) {
                    _TransformProperty = property;
                    return true;
                }
            });

            _TransformProperty = _TransformProperty || "transform";
        }

        return _TransformProperty;
    }

    // Helpers
    function getOffsetParent(elmt, isFixed) {
        // IE and Opera "fixed" position elements don't have offset parents.
        // regardless, if it's fixed, its offset parent is the body.
        if (isFixed && elmt != document.body) {
            return document.body;
        } else {
            return elmt.offsetParent;
        }
    }

    function toString(obj) {
        return {}.toString.call(obj);
    }

    // [[Class]] -> type pairs
    var _Class2type;

    function GetClass2Type() {
        if (!_Class2type) {
            _Class2type = {};
            Each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (name) {
                _Class2type["[object " + name + "]"] = name.toLowerCase();
            });
        }

        return _Class2type;
    }

    function Each(obj, callback) {
        if (toString(obj) == "[object Array]") {
            for (var i = 0; i < obj.length; i++) {
                if (callback(obj[i], i, obj)) {
                    return true;
                }
            }
        }
        else {
            for (var name in obj) {
                if (callback(obj[name], name, obj)) {
                    return true;
                }
            }
        }
    }

    function Type(obj) {
        return obj == null ? String(obj) : GetClass2Type()[toString(obj)] || "object";
    }

    function IsNotEmpty(obj) {
        for(var name in obj)
            return true;
    }

    function IsPlainObject(obj) {
        // Not plain objects:
        // - Any object or value whose internal [[Class]] property is not "[object Object]"
        // - DOM nodes
        // - window
        try {
            return Type(obj) == "object"
                && !obj.nodeType
                && obj != obj.window
                && (!obj.constructor || { }.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
        }
        catch (e) { }
    }

    function Point(x, y) {
        return { x: x, y: y };
    }

    function Delay(code, delay) {
        setTimeout(code, delay || 0);
    }

    function RemoveByReg(str, reg) {
        var m = reg.exec(str);

        if (m) {
            var header = str.substr(0, m.index);
            var tailer = str.substr(m.lastIndex + 1, str.length - (m.lastIndex + 1));
            str = header + tailer;
        }

        return str;
    }

    function BuildNewCss(oldCss, removeRegs, replaceValue) {
        var css = (!oldCss || oldCss == "inherit") ? "" : oldCss;

        Each(removeRegs, function (removeReg) {
            var m = removeReg.exec(css);

            if (m) {
                var header = css.substr(0, m.index);
                var tailer = css.substr(m.lastIndex + 1, css.length - (m.lastIndex + 1));
                css = header + tailer;
            }
        });

        css = replaceValue + (css.indexOf(" ") != 0 ? " " : "") + css;

        return css;
    }

    function SetStyleFilterIE(elmt, value) {
        if (_BrowserRuntimeVersion < 9) {
            elmt.style.filter = value;
        }
    }

    function SetStyleMatrixIE(elmt, matrix, offset) {
        //matrix is not for ie9+ running in ie8- mode
        if (_BrowserJavascriptVersion < 9) {
            var oldFilterValue = elmt.style.filter;
            var matrixReg = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
            var matrixValue = matrix ? "progid:DXImageTransform.Microsoft.Matrix(" + "M11=" + matrix[0][0] + ", M12=" + matrix[0][1] + ", M21=" + matrix[1][0] + ", M22=" + matrix[1][1] + ", SizingMethod='auto expand')" : "";

            var newFilterValue = BuildNewCss(oldFilterValue, [matrixReg], matrixValue);

            SetStyleFilterIE(elmt, newFilterValue);

            _This.$CssMarginTop(elmt, offset.y);
            _This.$CssMarginLeft(elmt, offset.x);
        }
    }

    // Methods

    _This.$Device = Device;

    _This.$IsBrowserIE = IsBrowserIE;

    _This.$IsBrowserIeQuirks = IsBrowserIeQuirks;

    _This.$IsBrowserFireFox = IsBrowserFireFox;

    _This.$IsBrowserSafari = IsBrowserSafari;

    _This.$IsBrowserChrome = IsBrowserChrome;

    _This.$IsBrowserOpera = IsBrowserOpera;

    _This.$IsBrowserBadTransform = IsBrowserBadTransform;

    _This.$IsBrowserIe9Earlier = IsBrowserIe9Earlier;

    _This.$BrowserVersion = function () {
        return _BrowserRuntimeVersion;
    };

    _This.$BrowserEngineVersion = function () {
        return _BrowserEngineVersion || _BrowserRuntimeVersion;
    };

    _This.$WebKitVersion = function () {
        DetectBrowser();

        return _WebkitVersion;
    };

    _This.$Delay = Delay;

    _This.$Inherit = function (instance, baseClass) {
        baseClass.call(instance);
        return Extend({}, instance);
    };

    function Construct(instance) {
        instance.constructor === Construct.caller && instance.$Construct && instance.$Construct.apply(instance, Construct.caller.arguments);
    }

    _This.$Construct = Construct;

    _This.$GetElement = function (elmt) {
        if (_This.$IsString(elmt)) {
            elmt = document.getElementById(elmt);
        }

        return elmt;
    };

    function GetEvent(event) {
        return event || window.event;
    }

    _This.$GetEvent = GetEvent;

    _This.$EvtSrc = function (event) {
        event = GetEvent(event);
        return event.target || event.srcElement || document;
    };

    _This.$EvtTarget = function (event) {
        event = GetEvent(event);
        return event.relatedTarget || event.toElement;
    };

    _This.$EvtWhich = function (event) {
        event = GetEvent(event);
        return event.which || [0, 1, 3, 0, 2][event.button] || event.charCode || event.keyCode;
    };

    _This.$MousePosition = function (event) {
        event = GetEvent(event);
        //var body = document.body;

        return {
            x: event.pageX || event.clientX/* + (_DocElmt.scrollLeft || body.scrollLeft || 0) - (_DocElmt.clientLeft || body.clientLeft || 0)*/ || 0,
            y: event.pageY || event.clientY/* + (_DocElmt.scrollTop || body.scrollTop || 0) - (_DocElmt.clientTop || body.clientTop || 0)*/ || 0
        };
    };

    _This.$PageScroll = function () {
        var body = document.body;

        return {
            x: (window.pageXOffset || _DocElmt.scrollLeft || body.scrollLeft || 0) - (_DocElmt.clientLeft || body.clientLeft || 0),
            y: (window.pageYOffset || _DocElmt.scrollTop || body.scrollTop || 0) - (_DocElmt.clientTop || body.clientTop || 0)
        };
    };

    _This.$WindowSize = function () {
        var body = document.body;

        return {
            x: body.clientWidth || _DocElmt.clientWidth,
            y: body.clientHeight || _DocElmt.clientHeight
        };
    };

    //_This.$GetElementPosition = function (elmt) {
    //    elmt = _This.$GetElement(elmt);
    //    var result = Point();

    //    // technique from:
    //    // http://www.quirksmode.org/js/findpos.html
    //    // with special check for "fixed" elements.

    //    while (elmt) {
    //        result.x += elmt.offsetLeft;
    //        result.y += elmt.offsetTop;

    //        var isFixed = _This.$GetElementStyle(elmt).position == "fixed";

    //        if (isFixed) {
    //            result = result.$Plus(_This.$PageScroll(window));
    //        }

    //        elmt = getOffsetParent(elmt, isFixed);
    //    }

    //    return result;
    //};

    //_This.$GetMouseScroll = function (event) {
    //    event = GetEvent(event);
    //    var delta = 0; // default value

    //    // technique from:
    //    // http://blog.paranoidferret.com/index.php/2007/10/31/javascript-tutorial-the-scroll-wheel/

    //    if (typeof (event.wheelDelta) == "number") {
    //        delta = event.wheelDelta;
    //    } else if (typeof (event.detail) == "number") {
    //        delta = event.detail * -1;
    //    } else {
    //        $JssorDebug$.$Fail("Unknown event mouse scroll, no known technique.");
    //    }

    //    // normalize value to [-1, 1]
    //    return delta ? delta / Math.abs(delta) : 0;
    //};

    //_This.$MakeAjaxRequest = function (url, callback) {
    //    var async = typeof (callback) == "function";
    //    var req = null;

    //    if (async) {
    //        var actual = callback;
    //        var callback = function () {
    //            Delay($Jssor$.$CreateCallback(null, actual, req), 1);
    //        };
    //    }

    //    if (window.ActiveXObject) {
    //        for (var i = 0; i < arrActiveX.length; i++) {
    //            try {
    //                req = new ActiveXObject(arrActiveX[i]);
    //                break;
    //            } catch (e) {
    //                continue;
    //            }
    //        }
    //    } else if (window.XMLHttpRequest) {
    //        req = new XMLHttpRequest();
    //    }

    //    if (!req) {
    //        $JssorDebug$.$Fail("Browser doesn't support XMLHttpRequest.");
    //    }

    //    if (async) {
    //        req.onreadystatechange = function () {
    //            if (req.readyState == 4) {
    //                // prevent memory leaks by breaking circular reference now
    //                req.onreadystatechange = new Function();
    //                callback();
    //            }
    //        };
    //    }

    //    try {
    //        req.open("GET", url, async);
    //        req.send(null);
    //    } catch (e) {
    //        $JssorDebug$.$Log(e.name + " while making AJAX request: " + e.message);

    //        req.onreadystatechange = null;
    //        req = null;

    //        if (async) {
    //            callback();
    //        }
    //    }

    //    return async ? null : req;
    //};

    //_This.$ParseXml = function (string) {
    //    var xmlDoc = null;

    //    if (window.ActiveXObject) {
    //        try {
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = false;
    //            xmlDoc.loadXML(string);
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (ActiveX): " + e.message);
    //        }
    //    } else if (window.DOMParser) {
    //        try {
    //            var parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(string, "text/xml");
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (DOMParser): " + e.message);
    //        }
    //    } else {
    //        $JssorDebug$.$Fail("Browser doesn't support XML DOM.");
    //    }

    //    return xmlDoc;
    //};

    function Css(elmt, name, value) {
        ///	<summary>
        ///		access css
        ///     $Jssor$.$Css(elmt, name);         //get css value
        ///     $Jssor$.$Css(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" optional="true">
        ///		the value to set
        ///	</param>
        if (value != undefined) {
            elmt.style[name] = value;
        }
        else {
            var style = elmt.currentStyle || elmt.style;
            value = style[name];

            if (value == "" && window.getComputedStyle) {
                style = elmt.ownerDocument.defaultView.getComputedStyle(elmt, null);

                style && (value = style.getPropertyValue(name) || style[name]);
            }

            return value;
        }
    }

    function CssN(elmt, name, value, isDimensional) {
        ///	<summary>
        ///		access css as numeric
        ///     $Jssor$.$CssN(elmt, name);         //get css value
        ///     $Jssor$.$CssN(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        if (value != undefined) {
            isDimensional && (value += "px");
            Css(elmt, name, value);
        }
        else {
            return ParseFloat(Css(elmt, name));
        }
    }

    function CssP(elmt, name, value) {
        ///	<summary>
        ///		access css in pixel as numeric, like 'top', 'left', 'width', 'height'
        ///     $Jssor$.$CssP(elmt, name);         //get css value
        ///     $Jssor$.$CssP(elmt, name, value);  //set css value
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="name" type="String">
        ///		the name of css property
        ///	</param>
        ///	<param name="value" type="Number" optional="true">
        ///		the value to set
        ///	</param>
        return CssN(elmt, name, value, true);
    }

    function CssProxy(name, numericOrDimension) {
        ///	<summary>
        ///		create proxy to access css, CssProxy(name[, numericOrDimension]);
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		the element to access css
        ///	</param>
        ///	<param name="numericOrDimension" type="Number" optional="true">
        ///		not set: access original css, 1: access css as numeric, 2: access css in pixel as numeric
        ///	</param>
        var isDimensional = numericOrDimension & 2;
        var cssAccessor = numericOrDimension ? CssN : Css;
        return function (elmt, value) {
            return cssAccessor(elmt, name, value, isDimensional);
        };
    }

    function GetStyleOpacity(elmt) {
        if (IsBrowserIE() && _BrowserEngineVersion < 9) {
            var match = /opacity=([^)]*)/.exec(elmt.style.filter || "");
            return match ? (ParseFloat(match[1]) / 100) : 1;
        }
        else
            return ParseFloat(elmt.style.opacity || "1");
    }

    function SetStyleOpacity(elmt, opacity, ie9EarlierForce) {

        if (IsBrowserIE() && _BrowserEngineVersion < 9) {
            //var filterName = "filter"; // _BrowserEngineVersion < 8 ? "filter" : "-ms-filter";
            var finalFilter = elmt.style.filter || "";

            // for CSS filter browsers (IE), remove alpha filter if it's unnecessary.
            // update: doing _This always since IE9 beta seems to have broken the
            // behavior if we rely on the programmatic filters collection.
            var alphaReg = new RegExp(/[\s]*alpha\([^\)]*\)/g);

            // important: note the lazy star! _This protects against
            // multiple filters; we don't want to delete the other ones.
            // update: also trimming extra whitespace around filter.

            var ieOpacity = Math.round(100 * opacity);
            var alphaFilter = "";
            if (ieOpacity < 100 || ie9EarlierForce) {
                alphaFilter = "alpha(opacity=" + ieOpacity + ") ";
            }

            var newFilterValue = BuildNewCss(finalFilter, [alphaReg], alphaFilter);

            SetStyleFilterIE(elmt, newFilterValue);
        }
        else {
            elmt.style.opacity = opacity == 1 ? "" : Math.round(opacity * 100) / 100;
        }
    }

    function SetStyleTransformInternal(elmt, transform) {
        var rotate = transform.$Rotate || 0;
        var scale = transform.$Scale == undefined ? 1 : transform.$Scale;

        if (IsBrowserIe9Earlier()) {
            var matrix = _This.$CreateMatrix(rotate / 180 * Math.PI, scale, scale);
            SetStyleMatrixIE(elmt, (!rotate && scale == 1) ? null : matrix, _This.$GetMatrixOffset(matrix, transform.$OriginalWidth, transform.$OriginalHeight));
        }
        else {
            //rotate(15deg) scale(.5) translateZ(0)
            var transformProperty = GetTransformProperty(elmt);
            if (transformProperty) {
                var transformValue = "rotate(" + rotate % 360 + "deg) scale(" + scale + ")";

                //needed for touch device, no need for desktop device
                if (IsBrowserChrome() && _WebkitVersion > 535 && "ontouchstart" in window)
                    transformValue += " perspective(2000px)";

                elmt.style[transformProperty] = transformValue;
            }
        }
    }

    _This.$SetStyleTransform = function (elmt, transform) {
        if (IsBrowserBadTransform()) {
            Delay(_This.$CreateCallback(null, SetStyleTransformInternal, elmt, transform));
        }
        else {
            SetStyleTransformInternal(elmt, transform);
        }
    };

    _This.$SetStyleTransformOrigin = function (elmt, transformOrigin) {
        var transformProperty = GetTransformProperty(elmt);

        if (transformProperty)
            elmt.style[transformProperty + "Origin"] = transformOrigin;
    };

    _This.$CssScale = function (elmt, scale) {

        if (IsBrowserIE() && _BrowserEngineVersion < 9 || (_BrowserEngineVersion < 10 && IsBrowserIeQuirks())) {
            elmt.style.zoom = (scale == 1) ? "" : scale;
        }
        else {
            var transformProperty = GetTransformProperty(elmt);

            if (transformProperty) {
                //rotate(15deg) scale(.5)
                var transformValue = "scale(" + scale + ")";

                var oldTransformValue = elmt.style[transformProperty];
                var scaleReg = new RegExp(/[\s]*scale\(.*?\)/g);

                var newTransformValue = BuildNewCss(oldTransformValue, [scaleReg], transformValue);

                elmt.style[transformProperty] = newTransformValue;
            }
        }
    };

    _This.$EnableHWA = function (elmt) {
        if (!elmt.style[GetTransformProperty(elmt)] || elmt.style[GetTransformProperty(elmt)] == "none")
            elmt.style[GetTransformProperty(elmt)] = "perspective(2000px)";
    };

    _This.$DisableHWA = function (elmt) {
        elmt.style[GetTransformProperty(elmt)] = "none";
    };

    var ie8OffsetWidth = 0;
    var ie8OffsetHeight = 0;

    _This.$WindowResizeFilter = function (window, handler) {
        return IsBrowserIe9Earlier() ? function () {

            var trigger = true;

            var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);
            if (checkElement) {
                var widthChange = checkElement.offsetWidth - ie8OffsetWidth;
                var heightChange = checkElement.offsetHeight - ie8OffsetHeight;
                if (widthChange || heightChange) {
                    ie8OffsetWidth += widthChange;
                    ie8OffsetHeight += heightChange;
                }
                else
                    trigger = false;
            }

            trigger && handler();

        } : handler;
    };

    _This.$MouseOverOutFilter = function (handler, target) {
        ///	<param name="target" type="HTMLDomElement">
        ///		The target element to detect mouse over/out events. (for ie < 9 compatibility)
        ///	</param>

        $JssorDebug$.$Execute(function () {
            if (!target) {
                throw new Error("Null reference, parameter \"target\".");
            }
        });

        return function (event) {
            event = GetEvent(event);

            var eventName = event.type;
            var related = event.relatedTarget || (eventName == "mouseout" ? event.toElement : event.fromElement);

            if (!related || (related !== target && !_This.$IsChild(target, related))) {
                handler(event);
            }
        };
    };

    _This.$AddEvent = function (elmt, eventName, handler, useCapture) {
        elmt = _This.$GetElement(elmt);

        $JssorDebug$.$Execute(function () {
            if (!elmt) {
                $JssorDebug$.$Fail("Parameter 'elmt' not specified.");
            }

            if (!handler) {
                $JssorDebug$.$Fail("Parameter 'handler' not specified.");
            }

            if (!elmt.addEventListener && !elmt.attachEvent) {
                $JssorDebug$.$Fail("Unable to attach event handler, no known technique.");
            }
        });

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.addEventListener) {
            if (eventName == "mousewheel") {
                elmt.addEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to add the mousewheel -- not a mistake!
            // _This is for opera, since it uses onmousewheel but needs addEventListener.
            elmt.addEventListener(eventName, handler, useCapture);
        }
        else if (elmt.attachEvent) {
            elmt.attachEvent("on" + eventName, handler);
            if (useCapture && elmt.setCapture) {
                elmt.setCapture();
            }
        }
    };

    _This.$RemoveEvent = function (elmt, eventName, handler, useCapture) {
        elmt = _This.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.removeEventListener) {
            if (eventName == "mousewheel") {
                elmt.removeEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to remove the mousewheel -- not a mistake!
            // _This is for opera, since it uses onmousewheel but needs removeEventListener.
            elmt.removeEventListener(eventName, handler, useCapture);
        }
        else if (elmt.detachEvent) {
            elmt.detachEvent("on" + eventName, handler);
            if (useCapture && elmt.releaseCapture) {
                elmt.releaseCapture();
            }
        }
    };

    _This.$FireEvent = function (elmt, eventName) {
        //var document = elmt.document;

        $JssorDebug$.$Execute(function () {
            if (!document.createEvent && !document.createEventObject) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }

            if (!elmt.dispatchEvent && !elmt.fireEvent) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }
        });

        var evento;

        if (document.createEvent) {
            evento = document.createEvent("HTMLEvents");
            evento.initEvent(eventName, false, false);
            elmt.dispatchEvent(evento);
        }
        else {
            var ieEventName = "on" + eventName;
            evento = document.createEventObject();

            elmt.fireEvent(ieEventName, evento);
        }
    };

    _This.$CancelEvent = function (event) {
        event = GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.preventDefault) {
            event.preventDefault();     // W3C for preventing default
        }

        event.cancel = true;            // legacy for preventing default
        event.returnValue = false;      // IE for preventing default
    };

    _This.$StopEvent = function (event) {
        event = GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.stopPropagation) {
            event.stopPropagation();    // W3C for stopping propagation
        }

        event.cancelBubble = true;      // IE for stopping propagation
    };

    _This.$CreateCallback = function (object, method) {
        // create callback args
        var initialArgs = [].slice.call(arguments, 2);

        // create closure to apply method
        var callback = function () {
            // concatenate new args, but make a copy of initialArgs first
            var args = initialArgs.concat([].slice.call(arguments, 0));

            return method.apply(object, args);
        };

        //$JssorDebug$.$LiveStamp(callback, "callback_" + ($Jssor$.$GetNow() & 0xFFFFFF));

        return callback;
    };

    _This.$InnerText = function (elmt, text) {
        if (text == undefined)
            return elmt.textContent || elmt.innerText;

        var textNode = document.createTextNode(text);
        _This.$Empty(elmt);
        elmt.appendChild(textNode);
    };

    _This.$InnerHtml = function (elmt, html) {
        if (html == undefined)
            return elmt.innerHTML;

        elmt.innerHTML = html;
    };

    _This.$GetClientRect = function (elmt) {
        var rect = elmt.getBoundingClientRect();

        return { x: rect.left, y: rect.top, w: rect.right - rect.left, h: rect.bottom - rect.top };
    };

    _This.$ClearInnerHtml = function (elmt) {
        elmt.innerHTML = "";
    };

    _This.$EncodeHtml = function (text) {
        var div = _This.$CreateDiv();
        _This.$InnerText(div, text);
        return _This.$InnerHtml(div);
    };

    _This.$DecodeHtml = function (html) {
        var div = _This.$CreateDiv();
        _This.$InnerHtml(div, html);
        return _This.$InnerText(div);
    };

    _This.$SelectElement = function (elmt) {
        var userSelection;
        if (window.getSelection) {
            //W3C default
            userSelection = window.getSelection();
        }
        var theRange = null;
        if (document.createRange) {
            theRange = document.createRange();
            theRange.selectNode(elmt);
        }
        else {
            theRange = document.body.createTextRange();
            theRange.moveToElementText(elmt);
            theRange.select();
        }
        //set user selection
        if (userSelection)
            userSelection.addRange(theRange);
    };

    _This.$DeselectElements = function () {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };

    _This.$Children = function (elmt, includeAll) {
        var children = [];

        for (var tmpEl = elmt.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (includeAll || tmpEl.nodeType == 1) {
                children.push(tmpEl);
            }
        }

        return children;
    };

    function FindChild(elmt, attrValue, noDeep, attrName) {
        attrName = attrName || "u";

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (AttributeEx(elmt, attrName) == attrValue)
                    return elmt;

                if (!noDeep) {
                    var childRet = FindChild(elmt, attrValue, noDeep, attrName);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    _This.$FindChild = FindChild;

    function FindChildren(elmt, attrValue, noDeep, attrName) {
        attrName = attrName || "u";

        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (AttributeEx(elmt, attrName) == attrValue)
                    ret.push(elmt);

                if (!noDeep) {
                    var childRet = FindChildren(elmt, attrValue, noDeep, attrName);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    _This.$FindChildren = FindChildren;

    function FindChildByTag(elmt, tagName, noDeep) {

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.tagName == tagName)
                    return elmt;

                if (!noDeep) {
                    var childRet = FindChildByTag(elmt, tagName, noDeep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    _This.$FindChildByTag = FindChildByTag;

    function FindChildrenByTag(elmt, tagName, noDeep) {
        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (!tagName || elmt.tagName == tagName)
                    ret.push(elmt);

                if (!noDeep) {
                    var childRet = FindChildrenByTag(elmt, tagName, noDeep);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    _This.$FindChildrenByTag = FindChildrenByTag;

    _This.$GetElementsByTag = function (elmt, tagName) {
        return elmt.getElementsByTagName(tagName);
    };

    //function Extend() {
    //    var args = arguments;
    //    var target;
    //    var options;
    //    var propName;
    //    var propValue;
    //    var targetPropValue;
    //    var purpose = 7 & args[0];
    //    var deep = 1 & purpose;
    //    var unextend = 2 & purpose;
    //    var i = purpose ? 2 : 1;
    //    target = args[i - 1] || {};

    //    for (; i < args.length; i++) {
    //        // Only deal with non-null/undefined values
    //        if (options = args[i]) {
    //            // Extend the base object
    //            for (propName in options) {
    //                propValue = options[propName];

    //                if (propValue !== undefined) {
    //                    propValue = options[propName];

    //                    if (unextend) {
    //                        targetPropValue = target[propName];
    //                        if (propValue === targetPropValue)
    //                            delete target[propName];
    //                        else if (deep && IsPlainObject(targetPropValue)) {
    //                            Extend(purpose, targetPropValue, propValue);
    //                        }
    //                    }
    //                    else {
    //                        target[propName] = (deep && IsPlainObject(target[propName])) ? Extend(purpose | 4, {}, propValue) : propValue;
    //                    }
    //                }
    //            }
    //        }
    //    }

    //    // Return the modified object
    //    return target;
    //}

    //function Unextend() {
    //    var args = arguments;
    //    var newArgs = [].slice.call(arguments);
    //    var purpose = 1 & args[0];

    //    purpose && newArgs.shift();
    //    newArgs.unshift(purpose | 2);

    //    return Extend.apply(null, newArgs);
    //}

    function Extend() {
        var args = arguments;
        var target;
        var options;
        var propName;
        var propValue;
        var deep = 1 & args[0];
        var i = 1 + deep;
        target = args[i - 1] || {};

        for (; i < args.length; i++) {
            // Only deal with non-null/undefined values
            if (options = args[i]) {
                // Extend the base object
                for (propName in options) {
                    propValue = options[propName];

                    if (propValue !== undefined) {
                        propValue = options[propName];
                        target[propName] = (deep && IsPlainObject(target[propName])) ? Extend(deep, {}, propValue) : propValue;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    }

    _This.$Extend = Extend;

    function Unextend(target, option) {
        $JssorDebug$.$Assert(option);

        var unextended = {};
        var name;
        var targetProp;
        var optionProp;

        // Extend the base object
        for (name in target) {
            targetProp = target[name];
            optionProp = option[name];

            if (targetProp !== optionProp) {
                var exclude;

                if (IsPlainObject(targetProp) && IsPlainObject(optionProp)) {
                    targetProp = Unextend(optionProp);
                    exclude = !IsNotEmpty(targetProp);
                }
                
                !exclude && (unextended[name] = targetProp);
            }
        }

        // Return the modified object
        return unextended;
    }

    _This.$Unextend = Unextend;

    _This.$IsFunction = function (obj) {
        return Type(obj) == "function";
    };

    _This.$IsArray = function (obj) {
        return Type(obj) == "array";
    };

    _This.$IsString = function (obj) {
        return Type(obj) == "string";
    };

    _This.$IsNumeric = function (obj) {
        return !isNaN(ParseFloat(obj)) && isFinite(obj);
    };

    _This.$Type = Type;

    // args is for internal usage only
    _This.$Each = Each;

    _This.$IsNotEmpty = IsNotEmpty;

    _This.$IsPlainObject = IsPlainObject;

    function CreateElement(tagName) {
        return document.createElement(tagName);
    }

    _This.$CreateElement = CreateElement;

    _This.$CreateDiv = function () {
        return CreateElement("DIV");
    };

    _This.$CreateSpan = function () {
        return CreateElement("SPAN");
    };

    _This.$EmptyFunction = function () { };

    function Attribute(elmt, name, value) {
        if (value == undefined)
            return elmt.getAttribute(name);

        elmt.setAttribute(name, value);
    }

    function AttributeEx(elmt, name) {
        return Attribute(elmt, name) || Attribute(elmt, "data-" + name);
    }

    _This.$Attribute = Attribute;
    _This.$AttributeEx = AttributeEx;

    function ClassName(elmt, className) {
        if (className == undefined)
            return elmt.className;

        elmt.className = className;
    }

    _This.$ClassName = ClassName;

    function ToHash(array) {
        var hash = {};

        Each(array, function (item) {
            hash[item] = item;
        });

        return hash;
    }

    function Split(str, separator) {
        return str.match(separator || REGEX_WHITESPACE_GLOBAL);
    }

    function StringToHashObject(str, regExp) {
        return ToHash(Split(str || "", regExp));
    }

    _This.$ToHash = ToHash;
    _This.$Split = Split;

    function Join(separator, strings) {
        ///	<param name="separator" type="String">
        ///	</param>
        ///	<param name="strings" type="Array" value="['1']">
        ///	</param>

        var joined = "";

        Each(strings, function (str) {
            joined && (joined += separator);
            joined += str;
        });

        return joined;
    }

    function ReplaceClass(elmt, oldClassName, newClassName) {
        ClassName(elmt, Join(" ", Extend(Unextend(StringToHashObject(ClassName(elmt)), StringToHashObject(oldClassName)), StringToHashObject(newClassName))));
    }

    _This.$Join = Join;

    _This.$AddClass = function (elmt, className) {
        ReplaceClass(elmt, null, className);
    };

    _This.$RemoveClass = ReplaceClass;

    _This.$ReplaceClass = ReplaceClass;

    _This.$ParentNode = function (elmt) {
        return elmt.parentNode;
    };

    _This.$HideElement = function (elmt) {
        _This.$CssDisplay(elmt, "none");
    };

    _This.$EnableElement = function (elmt, notEnable) {
        if (notEnable) {
            _This.$Attribute(elmt, "disabled", true);
        }
        else {
            _This.$RemoveAttribute(elmt, "disabled");
        }
    };

    _This.$HideElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            _This.$HideElement(elmts[i]);
        }
    };

    _This.$ShowElement = function (elmt, hide) {
        _This.$CssDisplay(elmt, hide ? "none" : "");
    };

    _This.$ShowElements = function (elmts, hide) {
        for (var i = 0; i < elmts.length; i++) {
            _This.$ShowElement(elmts[i], hide);
        }
    };

    _This.$RemoveAttribute = function (elmt, attrbuteName) {
        elmt.removeAttribute(attrbuteName);
    };

    _This.$CanClearClip = function () {
        return IsBrowserIE() && _BrowserRuntimeVersion < 10;
    };

    _This.$SetStyleClip = function (elmt, clip) {
        if (clip) {
            elmt.style.clip = "rect(" + Math.round(clip.$Top) + "px " + Math.round(clip.$Right) + "px " + Math.round(clip.$Bottom) + "px " + Math.round(clip.$Left) + "px)";
        }
        else {
            var cssText = elmt.style.cssText;
            var clipRegs = [
                new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                new RegExp(/[\s]*cliptop: .*?[;]?/i),
                new RegExp(/[\s]*clipright: .*?[;]?/i),
                new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                new RegExp(/[\s]*clipleft: .*?[;]?/i)
            ];

            var newCssText = BuildNewCss(cssText, clipRegs, "");

            $Jssor$.$CssCssText(elmt, newCssText);
        }
    };

    _This.$GetNow = function () {
        return new Date().getTime();
    };

    _This.$AppendChild = function (elmt, child) {
        elmt.appendChild(child);
    };

    _This.$AppendChildren = function (elmt, children) {
        Each(children, function (child) {
            _This.$AppendChild(elmt, child);
        });
    };

    _This.$InsertBefore = function (newNode, refNode, pNode) {
        ///	<summary>
        ///		Insert a node before a reference node
        ///	</summary>
        ///	<param name="newNode" type="HTMLElement">
        ///		A new node to insert
        ///	</param>
        ///	<param name="refNode" type="HTMLElement">
        ///		The reference node to insert a new node before
        ///	</param>
        ///	<param name="pNode" type="HTMLElement" optional="true">
        ///		The parent node to insert node to
        ///	</param>

        (pNode || refNode.parentNode).insertBefore(newNode, refNode);
    };

    _This.$InsertAfter = function (newNode, refNode, pNode) {
        ///	<summary>
        ///		Insert a node after a reference node
        ///	</summary>
        ///	<param name="newNode" type="HTMLElement">
        ///		A new node to insert
        ///	</param>
        ///	<param name="refNode" type="HTMLElement">
        ///		The reference node to insert a new node after
        ///	</param>
        ///	<param name="pNode" type="HTMLElement" optional="true">
        ///		The parent node to insert node to
        ///	</param>

        _This.$InsertBefore(newNode, refNode.nextSibling, pNode || refNode.parentNode);
    };

    _This.$InsertAdjacentHtml = function (elmt, where, html) {
        elmt.insertAdjacentHTML(where, html);
    };

    _This.$RemoveElement = function (elmt, pNode) {
        ///	<summary>
        ///		Remove element from parent node
        ///	</summary>
        ///	<param name="elmt" type="HTMLElement">
        ///		The element to remove
        ///	</param>
        ///	<param name="pNode" type="HTMLElement" optional="true">
        ///		The parent node to remove elment from
        ///	</param>
        (pNode || elmt.parentNode).removeChild(elmt);
    };

    _This.$RemoveElements = function (elmts, pNode) {
        Each(elmts, function (elmt) {
            _This.$RemoveElement(elmt, pNode);
        });
    };

    _This.$Empty = function (elmt) {
        _This.$RemoveElements(_This.$Children(elmt, true), elmt);
    };

    _This.$ParseInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    var ParseFloat = parseFloat;

    _This.$ParseFloat = ParseFloat;

    _This.$IsChild = function (elmtA, elmtB) {
        var body = document.body;

        while (elmtB && elmtA !== elmtB && body !== elmtB) {
            try {
                elmtB = elmtB.parentNode;
            } catch (e) {
                // Firefox sometimes fires events for XUL elements, which throws
                // a "permission denied" error. so this is not a child.
                return false;
            }
        }

        return elmtA === elmtB;
    };

    function CloneNode(elmt, noDeep, keepId) {
        var clone = elmt.cloneNode(!noDeep);
        if (!keepId) {
            _This.$RemoveAttribute(clone, "id");
        }

        return clone;
    }

    _This.$CloneNode = CloneNode;

    _This.$LoadImage = function (src, callback) {
        var image = new Image();

        function LoadImageCompleteHandler(event, abort) {
            _This.$RemoveEvent(image, "load", LoadImageCompleteHandler);
            _This.$RemoveEvent(image, "abort", ErrorOrAbortHandler);
            _This.$RemoveEvent(image, "error", ErrorOrAbortHandler);

            if (callback)
                callback(image, abort);
        }

        function ErrorOrAbortHandler(event) {
            LoadImageCompleteHandler(event, true);
        }

        if (IsBrowserOpera() && _BrowserRuntimeVersion < 11.6 || !src) {
            LoadImageCompleteHandler(!src);
        }
        else {

            _This.$AddEvent(image, "load", LoadImageCompleteHandler);
            _This.$AddEvent(image, "abort", ErrorOrAbortHandler);
            _This.$AddEvent(image, "error", ErrorOrAbortHandler);

            image.src = src;
        }
    };

    _This.$LoadImages = function (imageElmts, mainImageElmt, callback) {

        var _ImageLoading = imageElmts.length + 1;

        function LoadImageCompleteEventHandler(image, abort) {

            _ImageLoading--;
            if (mainImageElmt && image && image.src == mainImageElmt.src)
                mainImageElmt = image;
            !_ImageLoading && callback && callback(mainImageElmt);
        }

        Each(imageElmts, function (imageElmt) {
            _This.$LoadImage(imageElmt.src, LoadImageCompleteEventHandler);
        });

        LoadImageCompleteEventHandler();
    };

    _This.$BuildElement = function (template, tagName, replacer, createCopy) {
        if (createCopy)
            template = CloneNode(template);

        var templateHolders = FindChildren(template, tagName);
        if (!templateHolders.length)
            templateHolders = $Jssor$.$GetElementsByTag(template, tagName);

        for (var j = templateHolders.length - 1; j > -1; j--) {
            var templateHolder = templateHolders[j];
            var replaceItem = CloneNode(replacer);
            ClassName(replaceItem, ClassName(templateHolder));
            $Jssor$.$CssCssText(replaceItem, templateHolder.style.cssText);

            $Jssor$.$InsertBefore(replaceItem, templateHolder);
            $Jssor$.$RemoveElement(templateHolder);
        }

        return template;
    };

    function JssorButtonEx(elmt) {
        var _Self = this;

        var _OriginClassName = "";
        var _ToggleClassSuffixes = ["av", "pv", "ds", "dn"];
        var _ToggleClasses = [];
        var _ToggleClassName;

        var _IsMouseDown = 0;   //class name 'dn'
        var _IsSelected = 0;    //class name 1(active): 'av', 2(passive): 'pv'
        var _IsDisabled = 0;    //class name 'ds'

        function Highlight() {
            ReplaceClass(elmt, _ToggleClassName, _ToggleClasses[_IsDisabled || _IsMouseDown || (_IsSelected & 2) || _IsSelected]);
        }

        function MouseUpOrCancelEventHandler(event) {
            _IsMouseDown = 0;

            Highlight();

            _This.$RemoveEvent(document, "mouseup", MouseUpOrCancelEventHandler);
            _This.$RemoveEvent(document, "touchend", MouseUpOrCancelEventHandler);
            _This.$RemoveEvent(document, "touchcancel", MouseUpOrCancelEventHandler);
        }

        function MouseDownEventHandler(event) {
            if (_IsDisabled) {
                _This.$CancelEvent(event);
            }
            else {

                _IsMouseDown = 4;

                Highlight();

                _This.$AddEvent(document, "mouseup", MouseUpOrCancelEventHandler);
                _This.$AddEvent(document, "touchend", MouseUpOrCancelEventHandler);
                _This.$AddEvent(document, "touchcancel", MouseUpOrCancelEventHandler);
            }
        }

        _Self.$Selected = function (activate) {
            if (activate != undefined) {
                _IsSelected = (activate & 2) || (activate & 1);

                Highlight();
            }
            else {
                return _IsSelected;
            }
        };

        _Self.$Enable = function (enable) {
            if (enable == undefined) {
                return !_IsDisabled;
            }

            _IsDisabled = enable ? 0 : 3;

            Highlight();
        };

        //JssorButtonEx Constructor
        {
            elmt = _This.$GetElement(elmt);

            var originalClassNameArray = $Jssor$.$Split(ClassName(elmt));
            if (originalClassNameArray)
                _OriginClassName = originalClassNameArray.shift();

            Each(_ToggleClassSuffixes, function (toggleClassSuffix) {
                _ToggleClasses.push(_OriginClassName +toggleClassSuffix);
            });

            _ToggleClassName = Join(" ", _ToggleClasses);

            _ToggleClasses.unshift("");

            _This.$AddEvent(elmt, "mousedown", MouseDownEventHandler);
            _This.$AddEvent(elmt, "touchstart", MouseDownEventHandler);
        }
    }

    _This.$Buttonize = function (elmt) {
        return new JssorButtonEx(elmt);
    };

    _This.$Css = Css;
    _This.$CssN = CssN;
    _This.$CssP = CssP;

    _This.$CssOverflow = CssProxy("overflow");

    _This.$CssTop = CssProxy("top", 2);
    _This.$CssLeft = CssProxy("left", 2);
    _This.$CssWidth = CssProxy("width", 2);
    _This.$CssHeight = CssProxy("height", 2);
    _This.$CssMarginLeft = CssProxy("marginLeft", 2);
    _This.$CssMarginTop = CssProxy("marginTop", 2);
    _This.$CssPosition = CssProxy("position");
    _This.$CssDisplay = CssProxy("display");
    _This.$CssZIndex = CssProxy("zIndex", 1);
    _This.$CssFloat = function (elmt, floatValue) {
        return Css(elmt, IsBrowserIE() ? "styleFloat" : "cssFloat", floatValue);
    };
    _This.$CssOpacity = function (elmt, opacity, ie9EarlierForce) {
        if (opacity != undefined) {
            SetStyleOpacity(elmt, opacity, ie9EarlierForce);
        }
        else {
            return GetStyleOpacity(elmt);
        }
    };

    _This.$CssCssText = function (elmt, text) {
        if (text != undefined) {
            elmt.style.cssText = text;
        }
        else {
            return elmt.style.cssText;
        }
    };

    var _StyleGetter = {
        $Opacity: _This.$CssOpacity,
        $Top: _This.$CssTop,
        $Left: _This.$CssLeft,
        $Width: _This.$CssWidth,
        $Height: _This.$CssHeight,
        $Position: _This.$CssPosition,
        $Display: _This.$CssDisplay,
        $ZIndex: _This.$CssZIndex
    };

    var _StyleSetterReserved;

    function StyleSetter() {
        if (!_StyleSetterReserved) {
            _StyleSetterReserved = Extend({
                $MarginTop: _This.$CssMarginTop,
                $MarginLeft: _This.$CssMarginLeft,
                $Clip: _This.$SetStyleClip,
                $Transform: _This.$SetStyleTransform
            }, _StyleGetter);
        }
        return _StyleSetterReserved;
    }

    function StyleSetterEx() {
        StyleSetter();

        //For Compression Only
        _StyleSetterReserved.$Transform = _StyleSetterReserved.$Transform;

        return _StyleSetterReserved;
    }

    _This.$StyleSetter = StyleSetter;

    _This.$StyleSetterEx = StyleSetterEx;

    _This.$GetStyles = function (elmt, originStyles) {
        StyleSetter();

        var styles = {};

        Each(originStyles, function (value, key) {
            if (_StyleGetter[key]) {
                styles[key] = _StyleGetter[key](elmt);
            }
        });

        return styles;
    };

    _This.$SetStyles = function (elmt, styles) {
        var styleSetter = StyleSetter();

        Each(styles, function (value, key) {
            styleSetter[key] && styleSetter[key](elmt, value);
        });
    };

    _This.$SetStylesEx = function (elmt, styles) {
        StyleSetterEx();

        _This.$SetStyles(elmt, styles);
    };

    var $JssorMatrix$ = new function () {
        var _ThisMatrix = this;

        function Multiply(ma, mb) {
            var acs = ma[0].length;
            var rows = ma.length;
            var cols = mb[0].length;

            var matrix = [];

            for (var r = 0; r < rows; r++) {
                var row = matrix[r] = [];
                for (var c = 0; c < cols; c++) {
                    var unitValue = 0;

                    for (var ac = 0; ac < acs; ac++) {
                        unitValue += ma[r][ac] * mb[ac][c];
                    }

                    row[c] = unitValue;
                }
            }

            return matrix;
        }

        _ThisMatrix.$ScaleX = function (matrix, sx) {
            return _ThisMatrix.$ScaleXY(matrix, sx, 0);
        };

        _ThisMatrix.$ScaleY = function (matrix, sy) {
            return _ThisMatrix.$ScaleXY(matrix, 0, sy);
        };

        _ThisMatrix.$ScaleXY = function (matrix, sx, sy) {
            return Multiply(matrix, [[sx, 0], [0, sy]]);
        };

        _ThisMatrix.$TransformPoint = function (matrix, p) {
            var pMatrix = Multiply(matrix, [[p.x], [p.y]]);

            return Point(pMatrix[0][0], pMatrix[1][0]);
        };
    };

    _This.$CreateMatrix = function (alpha, scaleX, scaleY) {
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        //var r11 = cos;
        //var r21 = sin;
        //var r12 = -sin;
        //var r22 = cos;

        //var m11 = cos * scaleX;
        //var m12 = -sin * scaleY;
        //var m21 = sin * scaleX;
        //var m22 = cos * scaleY;

        return [[cos * scaleX, -sin * scaleY], [sin * scaleX, cos * scaleY]];
    };

    _This.$GetMatrixOffset = function (matrix, width, height) {
        var p1 = $JssorMatrix$.$TransformPoint(matrix, Point(-width / 2, -height / 2));
        var p2 = $JssorMatrix$.$TransformPoint(matrix, Point(width / 2, -height / 2));
        var p3 = $JssorMatrix$.$TransformPoint(matrix, Point(width / 2, height / 2));
        var p4 = $JssorMatrix$.$TransformPoint(matrix, Point(-width / 2, height / 2));

        return Point(Math.min(p1.x, p2.x, p3.x, p4.x) + width / 2, Math.min(p1.y, p2.y, p3.y, p4.y) + height / 2);
    };

    _This.$Cast = function (fromStyles, difStyles, interPosition, easings, durings, rounds, options) {

        var currentStyles = difStyles;

        if (fromStyles) {
            currentStyles = {};

            for (var key in difStyles) {

                var round = rounds[key] || 1;
                var during = durings[key] || [0, 1];
                var propertyInterPosition = (interPosition - during[0]) / during[1];
                propertyInterPosition = Math.min(Math.max(propertyInterPosition, 0), 1);
                propertyInterPosition = propertyInterPosition * round;
                var floorPosition = Math.floor(propertyInterPosition);
                if (propertyInterPosition != floorPosition)
                    propertyInterPosition -= floorPosition;

                var easing = easings[key] || easings.$Default || $JssorEasing$.$EaseSwing;
                var easingValue = easing(propertyInterPosition);
                var currentPropertyValue;
                var value = fromStyles[key];
                var toValue = difStyles[key];
                var difValue = difStyles[key];

                if ($Jssor$.$IsNumeric(difValue)) {
                    currentPropertyValue = value + difValue * easingValue;
                }
                else {
                    currentPropertyValue = $Jssor$.$Extend({ $Offset: {} }, fromStyles[key]);

                    $Jssor$.$Each(difValue.$Offset, function (rectX, n) {
                        var offsetValue = rectX * easingValue;
                        currentPropertyValue.$Offset[n] = offsetValue;
                        currentPropertyValue[n] += offsetValue;
                    });
                }
                currentStyles[key] = currentPropertyValue;
            }

            if (difStyles.$Zoom || difStyles.$Rotate) {
                currentStyles.$Transform = { $Rotate: currentStyles.$Rotate || 0, $Scale: currentStyles.$Zoom, $OriginalWidth: options.$OriginalWidth, $OriginalHeight: options.$OriginalHeight };
            }
        }

        if (difStyles.$Clip && options.$Move) {
            var styleFrameNClipOffset = currentStyles.$Clip.$Offset;

            var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
            var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

            currentStyles.$Left = (currentStyles.$Left || 0) + offsetX;
            currentStyles.$Top = (currentStyles.$Top || 0) + offsetY;
            currentStyles.$Clip.$Left -= offsetX;
            currentStyles.$Clip.$Right -= offsetX;
            currentStyles.$Clip.$Top -= offsetY;
            currentStyles.$Clip.$Bottom -= offsetY;
        }

        if (currentStyles.$Clip && $Jssor$.$CanClearClip() && !currentStyles.$Clip.$Top && !currentStyles.$Clip.$Left && (currentStyles.$Clip.$Right == options.$OriginalWidth) && (currentStyles.$Clip.$Bottom == options.$OriginalHeight))
            currentStyles.$Clip = null;

        return currentStyles;
    };
};

//$JssorObject$
function $JssorObject$() {
    var _ThisObject = this;
    // Fields

    var _Listeners = []; // dictionary of eventName --> array of handlers
    var _Listenees = [];

    // Private Methods
    function AddListener(eventName, handler) {

        $JssorDebug$.$Execute(function () {
            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }

            $Jssor$.$Each(_Listeners, function (listener) {
                if (listener.$EventName == eventName && listener.$Handler === handler) {
                    throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");
                }
            });
        });

        _Listeners.push({ $EventName: eventName, $Handler: handler });
    }

    function RemoveListener(eventName, handler) {

        $JssorDebug$.$Execute(function () {
            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }
        });

        $Jssor$.$Each(_Listeners, function (listener, index) {
            if (listener.$EventName == eventName && listener.$Handler === handler) {
                _Listeners.splice(index, 1);
            }
        });
    }

    function ClearListeners() {
        _Listeners = [];
    }

    function ClearListenees() {

        $Jssor$.$Each(_Listenees, function (listenee) {
            $Jssor$.$RemoveEvent(listenee.$Obj, listenee.$EventName, listenee.$Handler);
        });

        _Listenees = [];
    }

    //Protected Methods
    _ThisObject.$Listen = function (obj, eventName, handler, useCapture) {

        $JssorDebug$.$Execute(function () {
            if (!obj)
                throw new Error("param 'obj' is null or empty.");

            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }

            $Jssor$.$Each(_Listenees, function (listenee) {
                if (listenee.$Obj === obj && listenee.$EventName == eventName && listenee.$Handler === handler) {
                    throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");
                }
            });
        });

        $Jssor$.$AddEvent(obj, eventName, handler, useCapture);
        _Listenees.push({ $Obj: obj, $EventName: eventName, $Handler: handler });
    };

    _ThisObject.$Unlisten = function (obj, eventName, handler) {

        $JssorDebug$.$Execute(function () {
            if (!obj)
                throw new Error("param 'obj' is null or empty.");

            if (eventName == undefined || eventName == null)
                throw new Error("param 'eventName' is null or empty.");

            if (typeof (handler) != "function") {
                throw "param 'handler' must be a function.";
            }
        });

        $Jssor$.$Each(_Listenees, function (listenee, index) {
            if (listenee.$Obj === obj && listenee.$EventName == eventName && listenee.$Handler === handler) {
                $Jssor$.$RemoveEvent(obj, eventName, handler);
                _Listenees.splice(index, 1);
            }
        });
    };

    _ThisObject.$UnlistenAll = ClearListenees;

    // Public Methods
    _ThisObject.$On = _ThisObject.addEventListener = AddListener;

    _ThisObject.$Off = _ThisObject.removeEventListener = RemoveListener;

    _ThisObject.$TriggerEvent = function (eventName) {

        var args = [].slice.call(arguments, 1);

        $Jssor$.$Each(_Listeners, function (listener) {
            listener.$EventName == eventName && listener.$Handler.apply(window, args);
        });
    };

    _ThisObject.$Destroy = function () {
        ClearListenees();
        ClearListeners();

        for (var name in _ThisObject)
            delete _ThisObject[name];
    };

    $JssorDebug$.$C_AbstractClass(_ThisObject);
};

function $JssorAnimator$(delay, duration, options, elmt, fromStyles, difStyles) {
    delay = delay || 0;

    var _ThisAnimator = this;
    var _AutoPlay;
    var _Hiden;
    var _CombineMode;
    var _PlayToPosition;
    var _PlayDirection;
    var _NoStop;
    var _TimeStampLastFrame = 0;

    var _SubEasings;
    var _SubRounds;
    var _SubDurings;
    var _Callback;

    var _Shift = 0;
    var _Position_Current = 0;
    var _Position_Display = 0;
    var _Hooked;

    var _Position_InnerBegin = delay;
    var _Position_InnerEnd = delay + duration;
    var _Position_OuterBegin;
    var _Position_OuterEnd;
    var _LoopLength;

    var _NestedAnimators = [];
    var _StyleSetter;

    function GetPositionRange(position, begin, end) {
        var range = 0;

        if (position < begin)
            range = -1;

        else if (position > end)
            range = 1;

        return range;
    }

    function GetInnerPositionRange(position) {
        return GetPositionRange(position, _Position_InnerBegin, _Position_InnerEnd);
    }

    function GetOuterPositionRange(position) {
        return GetPositionRange(position, _Position_OuterBegin, _Position_OuterEnd);
    }

    function Shift(offset) {
        _Position_OuterBegin += offset;
        _Position_OuterEnd += offset;
        _Position_InnerBegin += offset;
        _Position_InnerEnd += offset;

        _Position_Current += offset;
        _Position_Display += offset;

        _Shift = offset;
    }

    function Locate(position, relative) {
        var offset = position - _Position_OuterBegin + delay * relative;

        Shift(offset);

        //$JssorDebug$.$Execute(function () {
        //    _ThisAnimator.$Position_InnerBegin = _Position_InnerBegin;
        //    _ThisAnimator.$Position_InnerEnd = _Position_InnerEnd;
        //    _ThisAnimator.$Position_OuterBegin = _Position_OuterBegin;
        //    _ThisAnimator.$Position_OuterEnd = _Position_OuterEnd;
        //});

        return _Position_OuterEnd;
    }

    function GoToPosition(positionOuter, force) {
        var trimedPositionOuter = positionOuter;

        if (_LoopLength && (trimedPositionOuter >= _Position_OuterEnd || trimedPositionOuter <= _Position_OuterBegin)) {
            trimedPositionOuter = ((trimedPositionOuter - _Position_OuterBegin) % _LoopLength + _LoopLength) % _LoopLength + _Position_OuterBegin;
        }

        if (!_Hooked || _NoStop || force || _Position_Current != trimedPositionOuter) {

            var positionToDisplay = Math.min(trimedPositionOuter, _Position_OuterEnd);
            positionToDisplay = Math.max(positionToDisplay, _Position_OuterBegin);

            if (!_Hooked || _NoStop || force || positionToDisplay != _Position_Display) {

                if (difStyles) {

                    var interPosition = (positionToDisplay - _Position_InnerBegin) / (duration || 1);

                    if (options.$Reverse)
                        interPosition = 1 - interPosition;

                    var currentStyles = $Jssor$.$Cast(fromStyles, difStyles, interPosition, _SubEasings, _SubDurings, _SubRounds, options);

                    $Jssor$.$Each(currentStyles, function (value, key) {
                        _StyleSetter[key] && _StyleSetter[key](elmt, value);
                    });
                }

                _ThisAnimator.$OnInnerOffsetChange(_Position_Display - _Position_InnerBegin, positionToDisplay - _Position_InnerBegin);

                _Position_Display = positionToDisplay;

                $Jssor$.$Each(_NestedAnimators, function (animator, i) {
                    var nestedAnimator = positionOuter < _Position_Current ? _NestedAnimators[_NestedAnimators.length - i - 1] : animator;
                    nestedAnimator.$GoToPosition(_Position_Display - _Shift, force);
                });

                var positionOld = _Position_Current;
                var positionNew = _Position_Display;

                _Position_Current = trimedPositionOuter;
                _Hooked = true;

                _ThisAnimator.$OnPositionChange(positionOld, positionNew);
            }
        }
    }

    function Join(animator, combineMode, noExpand) {
        ///	<summary>
        ///		Combine another animator as nested animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        ///	<param name="combineMode" type="int">
        ///		0: parallel - place the animator parallel to this animator.
        ///		1: chain - chain the animator at the _Position_InnerEnd of this animator.
        ///	</param>
        $JssorDebug$.$Execute(function () {
            if (combineMode !== 0 && combineMode !== 1)
                $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.");
        });

        if (combineMode)
            animator.$Locate(_Position_OuterEnd, 1);

        if (!noExpand) {
            _Position_OuterBegin = Math.min(_Position_OuterBegin, animator.$GetPosition_OuterBegin() + _Shift);
            _Position_OuterEnd = Math.max(_Position_OuterEnd, animator.$GetPosition_OuterEnd() + _Shift);
        }
        _NestedAnimators.push(animator);
    }

    var RequestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame;

    if ($Jssor$.$IsBrowserSafari() && $Jssor$.$BrowserVersion() < 7) {
        RequestAnimationFrame = null;

        //$JssorDebug$.$Log("Custom animation frame for safari before 7.");
    }

    RequestAnimationFrame = RequestAnimationFrame || function (callback) {
        $Jssor$.$Delay(callback, options.$Interval);
    };

    function ShowFrame() {
        if (_AutoPlay) {
            var now = $Jssor$.$GetNow();
            var timeOffset = Math.min(now - _TimeStampLastFrame, options.$IntervalMax);
            var timePosition = _Position_Current + timeOffset * _PlayDirection;
            _TimeStampLastFrame = now;

            if (timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection)
                timePosition = _PlayToPosition;

            GoToPosition(timePosition);

            if (!_NoStop && timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection) {
                Stop(_Callback);
            }
            else {
                RequestAnimationFrame(ShowFrame);
            }
        }
    }

    function PlayToPosition(toPosition, callback, noStop) {
        if (!_AutoPlay) {
            _AutoPlay = true;
            _NoStop = noStop
            _Callback = callback;
            toPosition = Math.max(toPosition, _Position_OuterBegin);
            toPosition = Math.min(toPosition, _Position_OuterEnd);
            _PlayToPosition = toPosition;
            _PlayDirection = _PlayToPosition < _Position_Current ? -1 : 1;
            _ThisAnimator.$OnStart();
            _TimeStampLastFrame = $Jssor$.$GetNow();
            RequestAnimationFrame(ShowFrame);
        }
    }

    function Stop(callback) {
        if (_AutoPlay) {
            _NoStop = _AutoPlay = _Callback = false;
            _ThisAnimator.$OnStop();

            if (callback)
                callback();
        }
    }

    _ThisAnimator.$Play = function (positionLength, callback, noStop) {
        PlayToPosition(positionLength ? _Position_Current + positionLength : _Position_OuterEnd, callback, noStop);
    };

    _ThisAnimator.$PlayToPosition = PlayToPosition;

    _ThisAnimator.$PlayToBegin = function (callback, noStop) {
        PlayToPosition(_Position_OuterBegin, callback, noStop);
    };

    _ThisAnimator.$PlayToEnd = function (callback, noStop) {
        PlayToPosition(_Position_OuterEnd, callback, noStop);
    };

    _ThisAnimator.$Stop = Stop;

    _ThisAnimator.$Continue = function (toPosition) {
        PlayToPosition(toPosition);
    };

    _ThisAnimator.$GetPosition = function () {
        return _Position_Current;
    };

    _ThisAnimator.$GetPlayToPosition = function () {
        return _PlayToPosition;
    };

    _ThisAnimator.$GetPosition_Display = function () {
        return _Position_Display;
    };

    _ThisAnimator.$GoToPosition = GoToPosition;

    _ThisAnimator.$GoToBegin = function () {
        GoToPosition(_Position_OuterBegin, true);
    };

    _ThisAnimator.$GoToEnd = function () {
        GoToPosition(_Position_OuterEnd, true);
    };

    _ThisAnimator.$Move = function (offset) {
        GoToPosition(_Position_Current + offset);
    };

    _ThisAnimator.$CombineMode = function () {
        return _CombineMode;
    };

    _ThisAnimator.$GetDuration = function () {
        return duration;
    };

    _ThisAnimator.$IsPlaying = function () {
        return _AutoPlay;
    };

    _ThisAnimator.$IsOnTheWay = function () {
        return _Position_Current > _Position_InnerBegin && _Position_Current <= _Position_InnerEnd;
    };

    _ThisAnimator.$SetLoopLength = function (length) {
        _LoopLength = length;
    };

    _ThisAnimator.$Locate = Locate;

    _ThisAnimator.$Shift = Shift;

    _ThisAnimator.$Join = Join;

    _ThisAnimator.$Combine = function (animator) {
        ///	<summary>
        ///		Combine another animator parallel to this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 0);
    };

    _ThisAnimator.$Chain = function (animator) {
        ///	<summary>
        ///		Chain another animator at the _Position_InnerEnd of this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 1);
    };

    _ThisAnimator.$GetPosition_InnerBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerBegin;
    };

    _ThisAnimator.$GetPosition_InnerEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerEnd;
    };

    _ThisAnimator.$GetPosition_OuterBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterBegin;
    };

    _ThisAnimator.$GetPosition_OuterEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterEnd;
    };

    _ThisAnimator.$OnPositionChange = _ThisAnimator.$OnStart = _ThisAnimator.$OnStop = _ThisAnimator.$OnInnerOffsetChange = $Jssor$.$EmptyFunction;
    _ThisAnimator.$Version = $Jssor$.$GetNow();

    //Constructor  1
    {
        options = $Jssor$.$Extend({
            $Interval: 16,
            $IntervalMax: 50
        }, options);

        //Sodo statement, for development time intellisence only
        $JssorDebug$.$Execute(function () {
            options = $Jssor$.$Extend({
                $LoopLength: undefined,
                $Setter: undefined,
                $Easing: undefined
            }, options);
        });

        _LoopLength = options.$LoopLength;

        _StyleSetter = $Jssor$.$Extend({}, $Jssor$.$StyleSetter(), options.$Setter);

        _Position_OuterBegin = _Position_InnerBegin = delay;
        _Position_OuterEnd = _Position_InnerEnd = delay + duration;

        _SubRounds = options.$Round || {};
        _SubDurings = options.$During || {};
        _SubEasings = $Jssor$.$Extend({ $Default: $Jssor$.$IsFunction(options.$Easing) && options.$Easing || $JssorEasing$.$EaseSwing }, options.$Easing);
    }
};

function $JssorPlayerClass$() {

    var _ThisPlayer = this;
    var _PlayerControllers = [];

    function PlayerController(playerElement) {
        var _SelfPlayerController = this;
        var _PlayerInstance;
        var _PlayerInstantces = [];

        function OnPlayerInstanceDataAvailable(event) {
            var srcElement = $Jssor$.$EvtSrc(event);
            _PlayerInstance = srcElement.pInstance;

            $Jssor$.$RemoveEvent(srcElement, "dataavailable", OnPlayerInstanceDataAvailable);
            $Jssor$.$Each(_PlayerInstantces, function (playerInstance) {
                if (playerInstance != _PlayerInstance) {
                    playerInstance.$Remove();
                }
            });

            playerElement.pTagName = _PlayerInstance.tagName;
            _PlayerInstantces = null;
        }

        function HandlePlayerInstance(playerInstanceElement) {
            var playerHandler;

            if (!playerInstanceElement.pInstance) {
                var playerHandlerAttribute = $Jssor$.$AttributeEx(playerInstanceElement, "pHandler");

                if ($JssorPlayer$[playerHandlerAttribute]) {
                    $Jssor$.$AddEvent(playerInstanceElement, "dataavailable", OnPlayerInstanceDataAvailable);
                    playerHandler = new $JssorPlayer$[playerHandlerAttribute](playerElement, playerInstanceElement);
                    _PlayerInstantces.push(playerHandler);

                    $JssorDebug$.$Execute(function () {
                        if ($Jssor$.$Type(playerHandler.$Remove) != "function") {
                            $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + playerHandlerAttribute + "'.");
                        }
                    });
                }
            }

            return playerHandler;
        }

        _SelfPlayerController.$InitPlayerController = function () {
            if (!playerElement.pInstance && !HandlePlayerInstance(playerElement)) {

                var playerInstanceElements = $Jssor$.$Children(playerElement);

                $Jssor$.$Each(playerInstanceElements, function (playerInstanceElement) {
                    HandlePlayerInstance(playerInstanceElement);
                });
            }
        };
    }

    _ThisPlayer.$EVT_SWITCH = 21;

    _ThisPlayer.$FetchPlayers = function (elmt) {
        elmt = elmt || document.body;

        var playerElements = $Jssor$.$FindChildren(elmt, "player");

        $Jssor$.$Each(playerElements, function (playerElement) {
            if (!_PlayerControllers[playerElement.pId]) {
                playerElement.pId = _PlayerControllers.length;
                _PlayerControllers.push(new PlayerController(playerElement));
            }
            var playerController = _PlayerControllers[playerElement.pId];
            playerController.$InitPlayerController();
        });
    };
}



/// <reference path="Jssor.js" />

/*
* Jssor.Slider 19.0
* http://www.jssor.com/
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/MIT
* 
* TERMS OF USE - Jssor.Slider
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


var $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = new function () {
    var _This = this;

    //Constants +++++++

    var COLUMN_INCREASE = 0;
    var COLUMN_DECREASE = 1;
    var ROW_INCREASE = 2;
    var ROW_DECREASE = 3;

    var DIRECTION_HORIZONTAL = 0x0003;
    var DIRECTION_VERTICAL = 0x000C;

    var TO_LEFT = 0x0001;
    var TO_RIGHT = 0x0002;
    var TO_TOP = 0x0004;
    var TO_BOTTOM = 0x0008;

    var FROM_LEFT = 0x0100;
    var FROM_TOP = 0x0200;
    var FROM_RIGHT = 0x0400;
    var FROM_BOTTOM = 0x0800;

    var ASSEMBLY_BOTTOM_LEFT = FROM_BOTTOM + TO_LEFT;
    var ASSEMBLY_BOTTOM_RIGHT = FROM_BOTTOM + TO_RIGHT;
    var ASSEMBLY_TOP_LEFT = FROM_TOP + TO_LEFT;
    var ASSEMBLY_TOP_RIGHT = FROM_TOP + TO_RIGHT;
    var ASSEMBLY_LEFT_TOP = FROM_LEFT + TO_TOP;
    var ASSEMBLY_LEFT_BOTTOM = FROM_LEFT + TO_BOTTOM;
    var ASSEMBLY_RIGHT_TOP = FROM_RIGHT + TO_TOP;
    var ASSEMBLY_RIGHT_BOTTOM = FROM_RIGHT + TO_BOTTOM;

    //Constants -------

    //Formation Definition +++++++
    function isToLeft(roadValue) {
        return (roadValue & TO_LEFT) == TO_LEFT;
    }

    function isToRight(roadValue) {
        return (roadValue & TO_RIGHT) == TO_RIGHT;
    }

    function isToTop(roadValue) {
        return (roadValue & TO_TOP) == TO_TOP;
    }

    function isToBottom(roadValue) {
        return (roadValue & TO_BOTTOM) == TO_BOTTOM;
    }

    function PushFormationOrder(arr, order, formationItem) {
        formationItem.push(order);
        arr[order] = arr[order] || [];
        arr[order].push(formationItem);
    }

    _This.$FormationStraight = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var order;
        for (r = 0; r < rows; r++) {
            for (col = 0; col < cols; col++) {
                cr = r + ',' + col;
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                        order = il - (col * rows + (rl - r));
                        break;
                    case ASSEMBLY_RIGHT_TOP:
                        order = il - (r * cols + (cl - col));
                        break;
                    case ASSEMBLY_TOP_LEFT:
                        order = il - (col * rows + r);
                    case ASSEMBLY_LEFT_TOP:
                        order = il - (r * cols + col);
                        break;
                    case ASSEMBLY_BOTTOM_RIGHT:
                        order = col * rows + r;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                        order = r * cols + (cl - col);
                        break;
                    case ASSEMBLY_TOP_RIGHT:
                        order = col * rows + (rl - r);
                        break;
                    default:
                        order = r * cols + col;
                        break; //ASSEMBLY_RIGHT_BOTTOM
                }
                PushFormationOrder(a, order, [r, col]);
            }
        }

        return a;
    };

    _This.$FormationSwirl = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var hit = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && !hit[cr]) {
                //a[cr] = i++;
                hit[cr] = true;
                PushFormationOrder(a, i++, [r, col]);
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
            }

            switch (courses[course % courses.length]) {
                case COLUMN_INCREASE:
                    col++;
                    break;
                case ROW_INCREASE:
                    r++;
                    break;
                case COLUMN_DECREASE:
                    col--;
                    break;
                case ROW_DECREASE:
                    r--;
                    break;
            }
        }
        return a;
    };

    _This.$FormationZigZag = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_INCREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && typeof (a[cr]) == 'undefined') {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
                switch (courses[course % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
        }
        return a;
    };

    _This.$FormationStraightStairs = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
            case ASSEMBLY_TOP_RIGHT:
            case ASSEMBLY_TOP_LEFT:
            case ASSEMBLY_BOTTOM_RIGHT:
                var C = 0;
                var R = 0;
                break;
            case ASSEMBLY_LEFT_BOTTOM:
            case ASSEMBLY_RIGHT_TOP:
            case ASSEMBLY_LEFT_TOP:
            case ASSEMBLY_RIGHT_BOTTOM:
                var C = cl;
                var R = 0;
                break;
            default:
                formationDirection = ASSEMBLY_RIGHT_BOTTOM;
                var C = cl;
                var R = 0;
                break;
        }
        col = C;
        r = R;
        while (i < count) {
            cr = r + ',' + col;
            if (isToTop(formationDirection) || isToRight(formationDirection)) {
                PushFormationOrder(a, il - i++, [r, col]);
                //a[cr] = il - i++;
            }
            else {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
            }
            switch (formationDirection) {
                case ASSEMBLY_BOTTOM_LEFT:
                case ASSEMBLY_TOP_RIGHT:
                    col--;
                    r++;
                    break;
                case ASSEMBLY_TOP_LEFT:
                case ASSEMBLY_BOTTOM_RIGHT:
                    col++;
                    r--;
                    break;
                case ASSEMBLY_LEFT_BOTTOM:
                case ASSEMBLY_RIGHT_TOP:
                    col--;
                    r--;
                    break;
                case ASSEMBLY_RIGHT_BOTTOM:
                case ASSEMBLY_LEFT_TOP:
                default:
                    col++;
                    r++;
                    break;
            }
            if (col < 0 || r < 0 || col > cl || r > rl) {
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                    case ASSEMBLY_TOP_RIGHT:
                        C++;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                    case ASSEMBLY_RIGHT_TOP:
                    case ASSEMBLY_TOP_LEFT:
                    case ASSEMBLY_BOTTOM_RIGHT:
                        R++;
                        break;
                    case ASSEMBLY_RIGHT_BOTTOM:
                    case ASSEMBLY_LEFT_TOP:
                    default:
                        C--;
                        break;
                }
                if (C < 0 || R < 0 || C > cl || R > rl) {
                    switch (formationDirection) {
                        case ASSEMBLY_BOTTOM_LEFT:
                        case ASSEMBLY_TOP_RIGHT:
                            C = cl;
                            R++;
                            break;
                        case ASSEMBLY_TOP_LEFT:
                        case ASSEMBLY_BOTTOM_RIGHT:
                            R = rl;
                            C++;
                            break;
                        case ASSEMBLY_LEFT_BOTTOM:
                        case ASSEMBLY_RIGHT_TOP: R = rl; C--;
                            break;
                        case ASSEMBLY_RIGHT_BOTTOM:
                        case ASSEMBLY_LEFT_TOP:
                        default:
                            C = 0;
                            R++;
                            break;
                    }
                    if (R > rl)
                        R = rl;
                    else if (R < 0)
                        R = 0;
                    else if (C > cl)
                        C = cl;
                    else if (C < 0)
                        C = 0;
                }
                r = R;
                col = C;
            }
        }
        return a;
    };

    _This.$FormationSquare = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var dc;
        var dr;
        var cr;
        dc = cols < rows ? (rows - cols) / 2 : 0;
        dr = cols > rows ? (cols - rows) / 2 : 0;
        cr = Math.round(Math.max(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1 + dc, r + 1 + dr, cols - col + dc, rows - r + dr), [r, col]);
        }
        return arr;
    };

    _This.$FormationRectangle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var cr;
        cr = Math.round(Math.min(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1, r + 1, cols - col, rows - r), [r, col]);
        }
        return arr;
    };

    _This.$FormationRandom = function (transition) {
        var a = [];
        var r, col, i;
        for (r = 0; r < transition.$Rows; r++) {
            for (col = 0; col < transition.$Cols; col++)
                PushFormationOrder(a, Math.ceil(100000 * Math.random()) % 13, [r, col]);
        }

        return a;
    };

    _This.$FormationCircle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.sqrt(Math.pow(col - hc, 2) + Math.pow(r - hr, 2))), [r, col]);
        }
        return arr;
    };

    _This.$FormationCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.min(Math.abs(col - hc), Math.abs(r - hr))), [r, col]);
        }
        return arr;
    };

    _This.$FormationRectangleCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        var cr = Math.max(hc, hr) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(cr - Math.max(hc - Math.abs(col - hc), hr - Math.abs(r - hr))) - 1, [r, col]);
        }
        return arr;
    };
};

var $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function (slideContainer, slideContainerWidth, slideContainerHeight, slideshowOptions, isTouchDevice) {

    var _SelfSlideshowRunner = this;

    //var _State = 0; //-1 fullfill, 0 clean, 1 initializing, 2 stay, 3 playing
    var _EndTime;

    var _SliderFrameCount;

    var _SlideshowPlayerBelow;
    var _SlideshowPlayerAbove;

    var _PrevItem;
    var _SlideItem;

    var _TransitionIndex = 0;
    var _TransitionsOrder = slideshowOptions.$TransitionsOrder;

    var _SlideshowTransition;

    var _SlideshowPerformance = 8;

    //#region Private Methods
    function EnsureTransitionInstance(options, slideshowInterval) {

        var slideshowTransition = {
            $Interval: slideshowInterval,  //Delay to play next frame
            $Duration: 1, //Duration to finish the entire transition
            $Delay: 0,  //Delay to assembly blocks
            $Cols: 1,   //Number of columns
            $Rows: 1,   //Number of rows
            $Opacity: 0,   //Fade block or not
            $Zoom: 0,   //Zoom block or not
            $Clip: 0,   //Clip block or not
            $Move: false,   //Move block or not
            $SlideOut: false,   //Slide the previous slide out to display next slide instead
            //$FlyDirection: 0,   //Specify fly transform with direction
            $Reverse: false,    //Reverse the assembly or not
            $Formation: $JssorSlideshowFormations$.$FormationRandom,    //Shape that assembly blocks as
            $Assembly: 0x0408,   //The way to assembly blocks ASSEMBLY_RIGHT_BOTTOM
            $ChessMode: { $Column: 0, $Row: 0 },    //Chess move or fly direction
            $Easing: $JssorEasing$.$EaseSwing,  //Specify variation of speed during transition
            $Round: {},
            $Blocks: [],
            $During: {}
        };

        $Jssor$.$Extend(slideshowTransition, options);

        slideshowTransition.$Count = slideshowTransition.$Cols * slideshowTransition.$Rows;
        if ($Jssor$.$IsFunction(slideshowTransition.$Easing))
            slideshowTransition.$Easing = { $Default: slideshowTransition.$Easing };

        slideshowTransition.$FramesCount = Math.ceil(slideshowTransition.$Duration / slideshowTransition.$Interval);

        slideshowTransition.$GetBlocks = function (width, height) {
            width /= slideshowTransition.$Cols;
            height /= slideshowTransition.$Rows;
            var wh = width + 'x' + height;
            if (!slideshowTransition.$Blocks[wh]) {
                slideshowTransition.$Blocks[wh] = { $Width: width, $Height: height };
                for (var col = 0; col < slideshowTransition.$Cols; col++) {
                    for (var r = 0; r < slideshowTransition.$Rows; r++)
                        slideshowTransition.$Blocks[wh][r + ',' + col] = { $Top: r * height, $Right: col * width + width, $Bottom: r * height + height, $Left: col * width };
                }
            }

            return slideshowTransition.$Blocks[wh];
        };

        if (slideshowTransition.$Brother) {
            slideshowTransition.$Brother = EnsureTransitionInstance(slideshowTransition.$Brother, slideshowInterval);
            slideshowTransition.$SlideOut = true;
        }

        return slideshowTransition;
    }
    //#endregion

    //#region Private Classes
    function JssorSlideshowPlayer(slideContainer, slideElement, slideTransition, beginTime, slideContainerWidth, slideContainerHeight) {
        var _Self = this;

        var _Block;
        var _StartStylesArr = {};
        var _AnimationStylesArrs = {};
        var _AnimationBlockItems = [];
        var _StyleStart;
        var _StyleEnd;
        var _StyleDif;
        var _ChessModeColumn = slideTransition.$ChessMode.$Column || 0;
        var _ChessModeRow = slideTransition.$ChessMode.$Row || 0;

        var _Blocks = slideTransition.$GetBlocks(slideContainerWidth, slideContainerHeight);
        var _FormationInstance = GetFormation(slideTransition);
        var _MaxOrder = _FormationInstance.length - 1;
        var _Period = slideTransition.$Duration + slideTransition.$Delay * _MaxOrder;
        var _EndTime = beginTime + _Period;

        var _SlideOut = slideTransition.$SlideOut;
        var _IsIn;

        //_EndTime += $Jssor$.$IsBrowserChrome() ? 260 : 50;
        _EndTime += 50;

        //#region Private Methods

        function GetFormation(transition) {

            var formationInstance = transition.$Formation(transition);

            return transition.$Reverse ? formationInstance.reverse() : formationInstance;

        }
        //#endregion

        _Self.$EndTime = _EndTime;

        _Self.$ShowFrame = function (time) {
            time -= beginTime;

            var isIn = time < _Period;

            if (isIn || _IsIn) {
                _IsIn = isIn;

                if (!_SlideOut)
                    time = _Period - time;

                var frameIndex = Math.ceil(time / slideTransition.$Interval);

                $Jssor$.$Each(_AnimationStylesArrs, function (value, index) {

                    var itemFrameIndex = Math.max(frameIndex, value.$Min);
                    itemFrameIndex = Math.min(itemFrameIndex, value.length - 1);

                    if (value.$LastFrameIndex != itemFrameIndex) {
                        if (!value.$LastFrameIndex && !_SlideOut) {
                            $Jssor$.$ShowElement(_AnimationBlockItems[index]);
                        }
                        else if (itemFrameIndex == value.$Max && _SlideOut) {
                            $Jssor$.$HideElement(_AnimationBlockItems[index]);
                        }
                        value.$LastFrameIndex = itemFrameIndex;
                        $Jssor$.$SetStylesEx(_AnimationBlockItems[index], value[itemFrameIndex]);
                    }
                });
            }
        };

        //constructor
        {
            slideElement = $Jssor$.$CloneNode(slideElement);
            //$Jssor$.$RemoveAttribute(slideElement, "id");
            if ($Jssor$.$IsBrowserIe9Earlier()) {
                var hasImage = !slideElement["no-image"];
                var slideChildElements = $Jssor$.$FindChildrenByTag(slideElement);
                $Jssor$.$Each(slideChildElements, function (slideChildElement) {
                    if (hasImage || slideChildElement["jssor-slider"])
                        $Jssor$.$CssOpacity(slideChildElement, $Jssor$.$CssOpacity(slideChildElement), true);
                });
            }

            $Jssor$.$Each(_FormationInstance, function (formationItems, order) {
                $Jssor$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];
                    {
                        var columnRow = row + ',' + col;

                        var chessHorizontal = false;
                        var chessVertical = false;
                        var chessRotate = false;

                        if (_ChessModeColumn && col % 2) {
                            if (_ChessModeColumn & 3/*$JssorDirection$.$IsHorizontal(_ChessModeColumn)*/) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if (_ChessModeColumn & 12/*$JssorDirection$.$IsVertical(_ChessModeColumn)*/) {
                                chessVertical = !chessVertical;
                            }

                            if (_ChessModeColumn & 16)
                                chessRotate = !chessRotate;
                        }

                        if (_ChessModeRow && row % 2) {
                            if (_ChessModeRow & 3/*$JssorDirection$.$IsHorizontal(_ChessModeRow)*/) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if (_ChessModeRow & 12/*$JssorDirection$.$IsVertical(_ChessModeRow)*/) {
                                chessVertical = !chessVertical;
                            }
                            if (_ChessModeRow & 16)
                                chessRotate = !chessRotate;
                        }

                        slideTransition.$Top = slideTransition.$Top || (slideTransition.$Clip & 4);
                        slideTransition.$Bottom = slideTransition.$Bottom || (slideTransition.$Clip & 8);
                        slideTransition.$Left = slideTransition.$Left || (slideTransition.$Clip & 1);
                        slideTransition.$Right = slideTransition.$Right || (slideTransition.$Clip & 2);

                        var topBenchmark = chessVertical ? slideTransition.$Bottom : slideTransition.$Top;
                        var bottomBenchmark = chessVertical ? slideTransition.$Top : slideTransition.$Bottom;
                        var leftBenchmark = chessHorizontal ? slideTransition.$Right : slideTransition.$Left;
                        var rightBenchmark = chessHorizontal ? slideTransition.$Left : slideTransition.$Right;

                        slideTransition.$Clip = topBenchmark || bottomBenchmark || leftBenchmark || rightBenchmark;

                        _StyleDif = {};
                        _StyleEnd = { $Top: 0, $Left: 0, $Opacity: 1, $Width: slideContainerWidth, $Height: slideContainerHeight };
                        _StyleStart = $Jssor$.$Extend({}, _StyleEnd);
                        _Block = $Jssor$.$Extend({}, _Blocks[columnRow]);

                        if (slideTransition.$Opacity) {
                            _StyleEnd.$Opacity = 2 - slideTransition.$Opacity;
                        }

                        if (slideTransition.$ZIndex) {
                            _StyleEnd.$ZIndex = slideTransition.$ZIndex;
                            _StyleStart.$ZIndex = 0;
                        }

                        var allowClip = slideTransition.$Cols * slideTransition.$Rows > 1 || slideTransition.$Clip;

                        if (slideTransition.$Zoom || slideTransition.$Rotate) {
                            var allowRotate = true;
                            if ($Jssor$.$IsBrowserIe9Earlier()) {
                                if (slideTransition.$Cols * slideTransition.$Rows > 1)
                                    allowRotate = false;
                                else
                                    allowClip = false;
                            }

                            if (allowRotate) {
                                _StyleEnd.$Zoom = slideTransition.$Zoom ? slideTransition.$Zoom - 1 : 1;
                                _StyleStart.$Zoom = 1;

                                if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera())
                                    _StyleEnd.$Zoom = Math.min(_StyleEnd.$Zoom, 2);

                                var rotate = slideTransition.$Rotate;

                                _StyleEnd.$Rotate = rotate * 360 * ((chessRotate) ? -1 : 1);
                                _StyleStart.$Rotate = 0;
                            }
                        }

                        if (allowClip) {
                            if (slideTransition.$Clip) {
                                var clipScale = slideTransition.$ScaleClip || 1;
                                var blockOffset = _Block.$Offset = {};
                                if (topBenchmark && bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height / 2 * clipScale;
                                    blockOffset.$Bottom = -blockOffset.$Top;
                                }
                                else if (topBenchmark) {
                                    blockOffset.$Bottom = -_Blocks.$Height * clipScale;
                                }
                                else if (bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height * clipScale;
                                }

                                if (leftBenchmark && rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width / 2 * clipScale;
                                    blockOffset.$Right = -blockOffset.$Left;
                                }
                                else if (leftBenchmark) {
                                    blockOffset.$Right = -_Blocks.$Width * clipScale;
                                }
                                else if (rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width * clipScale;
                                }
                            }

                            _StyleDif.$Clip = _Block;
                            _StyleStart.$Clip = _Blocks[columnRow];
                        }

                        //fly
                        {
                            var chessHor = chessHorizontal ? 1 : -1;
                            var chessVer = chessVertical ? 1 : -1;

                            if (slideTransition.x)
                                _StyleEnd.$Left += slideContainerWidth * slideTransition.x * chessHor;

                            if (slideTransition.y)
                                _StyleEnd.$Top += slideContainerHeight * slideTransition.y * chessVer;
                        }

                        $Jssor$.$Each(_StyleEnd, function (propertyEnd, property) {
                            if ($Jssor$.$IsNumeric(propertyEnd)) {
                                if (propertyEnd != _StyleStart[property]) {
                                    _StyleDif[property] = propertyEnd - _StyleStart[property];
                                }
                            }
                        });

                        _StartStylesArr[columnRow] = _SlideOut ? _StyleStart : _StyleEnd;

                        var animationStylesArr = [];
                        var framesCount = slideTransition.$FramesCount;
                        var virtualFrameCount = Math.round(order * slideTransition.$Delay / slideTransition.$Interval);
                        _AnimationStylesArrs[columnRow] = new Array(virtualFrameCount);
                        _AnimationStylesArrs[columnRow].$Min = virtualFrameCount;
                        _AnimationStylesArrs[columnRow].$Max = virtualFrameCount + framesCount - 1;

                        for (var frameN = 0; frameN <= framesCount; frameN++) {
                            var styleFrameN = $Jssor$.$Cast(_StyleStart, _StyleDif, frameN / framesCount, slideTransition.$Easing, slideTransition.$During, slideTransition.$Round, { $Move: slideTransition.$Move, $OriginalWidth: slideContainerWidth, $OriginalHeight: slideContainerHeight })

                            styleFrameN.$ZIndex = styleFrameN.$ZIndex || 1;

                            _AnimationStylesArrs[columnRow].push(styleFrameN);
                        }

                    } //for
                });
            });

            _FormationInstance.reverse();
            $Jssor$.$Each(_FormationInstance, function (formationItems) {
                $Jssor$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];

                    var columnRow = row + ',' + col;

                    var image = slideElement;
                    if (col || row)
                        image = $Jssor$.$CloneNode(slideElement);

                    $Jssor$.$SetStyles(image, _StartStylesArr[columnRow]);
                    $Jssor$.$CssOverflow(image, "hidden");

                    $Jssor$.$CssPosition(image, "absolute");
                    slideContainer.$AddClipElement(image);
                    _AnimationBlockItems[columnRow] = image;
                    $Jssor$.$ShowElement(image, !_SlideOut);
                });
            });
        }
    }

    function SlideshowProcessor() {
        var _SelfSlideshowProcessor = this;
        var _CurrentTime = 0;

        $JssorAnimator$.call(_SelfSlideshowProcessor, 0, _EndTime);

        _SelfSlideshowProcessor.$OnPositionChange = function (oldPosition, newPosition) {
            if ((newPosition - _CurrentTime) > _SlideshowPerformance) {
                _CurrentTime = newPosition;

                _SlideshowPlayerAbove && _SlideshowPlayerAbove.$ShowFrame(newPosition);
                _SlideshowPlayerBelow && _SlideshowPlayerBelow.$ShowFrame(newPosition);
            }
        };

        _SelfSlideshowProcessor.$Transition = _SlideshowTransition;
    }
    //#endregion

    //member functions
    _SelfSlideshowRunner.$GetTransition = function (slideCount) {
        var n = 0;

        var transitions = slideshowOptions.$Transitions;

        var transitionCount = transitions.length;

        if (_TransitionsOrder) { /*Sequence*/
            //if (transitionCount > slideCount && ($Jssor$.$IsBrowserChrome() || $Jssor$.$IsBrowserSafari() || $Jssor$.$IsBrowserFireFox())) {
            //    transitionCount -= transitionCount % slideCount;
            //}
            n = _TransitionIndex++ % transitionCount;
        }
        else { /*Random*/
            n = Math.floor(Math.random() * transitionCount);
        }

        transitions[n] && (transitions[n].$Index = n);

        return transitions[n];
    };

    _SelfSlideshowRunner.$Initialize = function (slideIndex, prevIndex, slideItem, prevItem, slideshowTransition) {
        $JssorDebug$.$Execute(function () {
            if (_SlideshowPlayerBelow) {
                $JssorDebug$.$Fail("slideshow runner has not been cleared.");
            }
        });

        _SlideshowTransition = slideshowTransition;

        slideshowTransition = EnsureTransitionInstance(slideshowTransition, _SlideshowPerformance);

        _SlideItem = slideItem;
        _PrevItem = prevItem;

        var prevSlideElement = prevItem.$Item;
        var currentSlideElement = slideItem.$Item;
        prevSlideElement["no-image"] = !prevItem.$Image;
        currentSlideElement["no-image"] = !slideItem.$Image;

        var slideElementAbove = prevSlideElement;
        var slideElementBelow = currentSlideElement;

        var slideTransitionAbove = slideshowTransition;
        var slideTransitionBelow = slideshowTransition.$Brother || EnsureTransitionInstance({}, _SlideshowPerformance);

        if (!slideshowTransition.$SlideOut) {
            slideElementAbove = currentSlideElement;
            slideElementBelow = prevSlideElement;
        }

        var shift = slideTransitionBelow.$Shift || 0;

        _SlideshowPlayerBelow = new JssorSlideshowPlayer(slideContainer, slideElementBelow, slideTransitionBelow, Math.max(shift - slideTransitionBelow.$Interval, 0), slideContainerWidth, slideContainerHeight);
        _SlideshowPlayerAbove = new JssorSlideshowPlayer(slideContainer, slideElementAbove, slideTransitionAbove, Math.max(slideTransitionBelow.$Interval - shift, 0), slideContainerWidth, slideContainerHeight);

        _SlideshowPlayerBelow.$ShowFrame(0);
        _SlideshowPlayerAbove.$ShowFrame(0);

        _EndTime = Math.max(_SlideshowPlayerBelow.$EndTime, _SlideshowPlayerAbove.$EndTime);

        _SelfSlideshowRunner.$Index = slideIndex;
    };

    _SelfSlideshowRunner.$Clear = function () {
        slideContainer.$Clear();
        _SlideshowPlayerBelow = null;
        _SlideshowPlayerAbove = null;
    };

    _SelfSlideshowRunner.$GetProcessor = function () {
        var slideshowProcessor = null;

        if (_SlideshowPlayerAbove)
            slideshowProcessor = new SlideshowProcessor();

        return slideshowProcessor;
    };

    //Constructor
    {
        if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera() || (isTouchDevice && $Jssor$.$WebKitVersion() < 537)) {
            _SlideshowPerformance = 16;
        }

        $JssorObject$.call(_SelfSlideshowRunner);
        $JssorAnimator$.call(_SelfSlideshowRunner, -10000000, 10000000);
    }
};

var $JssorSlider$ = window.$JssorSlider$ = function (elmt, options) {
    var _SelfSlider = this;

    //#region Private Classes
    //Conveyor
    function Conveyor() {
        var _SelfConveyor = this;
        $JssorAnimator$.call(_SelfConveyor, -100000000, 200000000);

        _SelfConveyor.$GetCurrentSlideInfo = function () {
            var positionDisplay = _SelfConveyor.$GetPosition_Display();
            var virtualIndex = Math.floor(positionDisplay);
            var slideIndex = GetRealIndex(virtualIndex);
            var slidePosition = positionDisplay - Math.floor(positionDisplay);

            return { $Index: slideIndex, $VirtualIndex: virtualIndex, $Position: slidePosition };
        };

        _SelfConveyor.$OnPositionChange = function (oldPosition, newPosition) {

            var index = Math.floor(newPosition);
            if (index != newPosition && newPosition > oldPosition)
                index++;

            ResetNavigator(index, true);

            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_POSITION_CHANGE, GetRealIndex(newPosition), GetRealIndex(oldPosition), newPosition, oldPosition);
        };
    }
    //Conveyor

    //Carousel
    function Carousel() {
        var _SelfCarousel = this;

        $JssorAnimator$.call(_SelfCarousel, 0, 0, { $LoopLength: _SlideCount });

        //Carousel Constructor
        {
            $Jssor$.$Each(_SlideItems, function (slideItem) {
                (_Loop & 1) && slideItem.$SetLoopLength(_SlideCount);
                _SelfCarousel.$Chain(slideItem);
                slideItem.$Shift(_ParkingPosition / _StepLength);
            });
        }
    }
    //Carousel

    //Slideshow
    function Slideshow() {
        var _SelfSlideshow = this;
        var _Wrapper = _SlideContainer.$Elmt;

        $JssorAnimator$.call(_SelfSlideshow, -1, 2, { $Easing: $JssorEasing$.$EaseLinear, $Setter: { $Position: SetPosition }, $LoopLength: _SlideCount }, _Wrapper, { $Position: 1 }, { $Position: -2 });

        _SelfSlideshow.$Wrapper = _Wrapper;

        //Slideshow Constructor
        {
            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_SlideContainer.$Elmt, "debug-id", "slide_container");
            });
        }
    }
    //Slideshow

    //CarouselPlayer
    function CarouselPlayer(carousel, slideshow) {
        var _SelfCarouselPlayer = this;
        var _FromPosition;
        var _ToPosition;
        var _Duration;
        var _StandBy;
        var _StandByPosition;

        $JssorAnimator$.call(_SelfCarouselPlayer, -100000000, 200000000, { $IntervalMax: 100 });

        _SelfCarouselPlayer.$OnStart = function () {
            _IsSliding = true;
            _LoadingTicket = null;

            //EVT_SWIPE_START
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SWIPE_START, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());
        };

        _SelfCarouselPlayer.$OnStop = function () {

            _IsSliding = false;
            _StandBy = false;

            var currentSlideInfo = _Conveyor.$GetCurrentSlideInfo();

            //EVT_SWIPE_END
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SWIPE_END, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());

            if (!currentSlideInfo.$Position) {
                OnPark(currentSlideInfo.$VirtualIndex, _CurrentSlideIndex);
            }
        };

        _SelfCarouselPlayer.$OnPositionChange = function (oldPosition, newPosition) {

            var toPosition;

            if (_StandBy)
                toPosition = _StandByPosition;
            else {
                toPosition = _ToPosition;

                if (_Duration) {
                    var interPosition = newPosition / _Duration;
                    toPosition = _Options.$SlideEasing(interPosition) * (_ToPosition - _FromPosition) + _FromPosition;
                }
            }

            _Conveyor.$GoToPosition(toPosition);
        };

        _SelfCarouselPlayer.$PlayCarousel = function (fromPosition, toPosition, duration, callback) {
            $JssorDebug$.$Execute(function () {
                if (_SelfCarouselPlayer.$IsPlaying())
                    $JssorDebug$.$Fail("The carousel is already playing.");
            });

            _FromPosition = fromPosition;
            _ToPosition = toPosition;
            _Duration = duration;

            _Conveyor.$GoToPosition(fromPosition);
            _SelfCarouselPlayer.$GoToPosition(0);

            _SelfCarouselPlayer.$PlayToPosition(duration, callback);
        };

        _SelfCarouselPlayer.$StandBy = function (standByPosition) {
            _StandBy = true;
            _StandByPosition = standByPosition;
            _SelfCarouselPlayer.$Play(standByPosition, null, true);
        };

        _SelfCarouselPlayer.$SetStandByPosition = function (standByPosition) {
            _StandByPosition = standByPosition;
        };

        _SelfCarouselPlayer.$MoveCarouselTo = function (position) {
            _Conveyor.$GoToPosition(position);
        };

        //CarouselPlayer Constructor
        {
            _Conveyor = new Conveyor();

            _Conveyor.$Combine(carousel);
            _Conveyor.$Combine(slideshow);
        }
    }
    //CarouselPlayer

    //SlideContainer
    function SlideContainer() {
        var _Self = this;
        var elmt = CreatePanel();

        $Jssor$.$CssZIndex(elmt, 0);
        $Jssor$.$Css(elmt, "pointerEvents", "none");

        _Self.$Elmt = elmt;

        _Self.$AddClipElement = function (clipElement) {
            $Jssor$.$AppendChild(elmt, clipElement);
            $Jssor$.$ShowElement(elmt);
        };

        _Self.$Clear = function () {
            $Jssor$.$HideElement(elmt);
            $Jssor$.$Empty(elmt);
        };
    }
    //SlideContainer

    //SlideItem
    function SlideItem(slideElmt, slideIndex) {

        var _SelfSlideItem = this;

        var _CaptionSliderIn;
        var _CaptionSliderOut;
        var _CaptionSliderCurrent;
        var _IsCaptionSliderPlayingWhenDragStart;

        var _Wrapper;
        var _BaseElement = slideElmt;

        var _LoadingScreen;

        var _ImageItem;
        var _ImageElmts = [];
        var _LinkItemOrigin;
        var _LinkItem;
        var _ImageLoading;
        var _ImageLoaded;
        var _ImageLazyLoading;
        var _ContentRefreshed;

        var _Processor;

        var _PlayerInstanceElement;
        var _PlayerInstance;

        var _SequenceNumber;    //for debug only

        $JssorAnimator$.call(_SelfSlideItem, -_DisplayPieces, _DisplayPieces + 1, { $SlideItemAnimator: true });

        function ResetCaptionSlider(fresh) {
            _CaptionSliderOut && _CaptionSliderOut.$Revert();
            _CaptionSliderIn && _CaptionSliderIn.$Revert();

            RefreshContent(slideElmt, fresh);
            _ContentRefreshed = true;

            _CaptionSliderIn = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions, 1);
            $JssorDebug$.$LiveStamp(_CaptionSliderIn, "caption_slider_" + _CaptionSliderCount + "_in");
            _CaptionSliderOut = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions);
            $JssorDebug$.$LiveStamp(_CaptionSliderOut, "caption_slider_" + _CaptionSliderCount + "_out");

            $JssorDebug$.$Execute(function () {
                _CaptionSliderCount++;
            });

            _CaptionSliderOut.$GoToPosition(0);
            _CaptionSliderIn.$GoToPosition(0);
        }

        function EnsureCaptionSliderVersion() {
            if (_CaptionSliderIn.$Version < _CaptionSliderOptions.$Version) {
                ResetCaptionSlider();
            }
        }

        //event handling begin
        function LoadImageCompleteEventHandler(completeCallback, loadingScreen, image) {
            if (!_ImageLoaded) {
                _ImageLoaded = true;

                if (_ImageItem && image) {
                    var imageWidth = image.width;
                    var imageHeight = image.height;
                    var fillWidth = imageWidth;
                    var fillHeight = imageHeight;

                    if (imageWidth && imageHeight && _Options.$FillMode) {

                        //0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
                        if (_Options.$FillMode & 3 && (!(_Options.$FillMode & 4) || imageWidth > _SlideWidth || imageHeight > _SlideHeight)) {
                            var fitHeight = false;
                            var ratio = _SlideWidth / _SlideHeight * imageHeight / imageWidth;

                            if (_Options.$FillMode & 1) {
                                fitHeight = (ratio > 1);
                            }
                            else if (_Options.$FillMode & 2) {
                                fitHeight = (ratio < 1);
                            }
                            fillWidth = fitHeight ? imageWidth * _SlideHeight / imageHeight : _SlideWidth;
                            fillHeight = fitHeight ? _SlideHeight : imageHeight * _SlideWidth / imageWidth;
                        }

                        $Jssor$.$CssWidth(_ImageItem, fillWidth);
                        $Jssor$.$CssHeight(_ImageItem, fillHeight);
                        $Jssor$.$CssTop(_ImageItem, (_SlideHeight - fillHeight) / 2);
                        $Jssor$.$CssLeft(_ImageItem, (_SlideWidth - fillWidth) / 2);
                    }

                    $Jssor$.$CssPosition(_ImageItem, "absolute");

                    _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_LOAD_END, slideIndex);
                }
            }

            $Jssor$.$HideElement(loadingScreen);
            completeCallback && completeCallback(_SelfSlideItem);
        }

        function LoadSlideshowImageCompleteEventHandler(nextIndex, nextItem, slideshowTransition, loadingTicket) {
            if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex && _AutoPlay) {
                if (!_Frozen) {
                    var nextRealIndex = GetRealIndex(nextIndex);
                    _SlideshowRunner.$Initialize(nextRealIndex, slideIndex, nextItem, _SelfSlideItem, slideshowTransition);
                    nextItem.$HideContentForSlideshow();
                    _Slideshow.$Locate(nextRealIndex, 1);
                    _Slideshow.$GoToPosition(nextRealIndex);
                    _CarouselPlayer.$PlayCarousel(nextIndex, nextIndex, 0);
                }
            }
        }

        function SlideReadyEventHandler(loadingTicket) {
            if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex) {

                if (!_Processor) {
                    var slideshowProcessor = null;
                    if (_SlideshowRunner) {
                        if (_SlideshowRunner.$Index == slideIndex)
                            slideshowProcessor = _SlideshowRunner.$GetProcessor();
                        else
                            _SlideshowRunner.$Clear();
                    }

                    EnsureCaptionSliderVersion();

                    _Processor = new Processor(slideElmt, slideIndex, slideshowProcessor, _SelfSlideItem.$GetCaptionSliderIn(), _SelfSlideItem.$GetCaptionSliderOut());
                    _Processor.$SetPlayer(_PlayerInstance);
                }

                !_Processor.$IsPlaying() && _Processor.$Replay();
            }
        }

        function ParkEventHandler(currentIndex, previousIndex, manualActivate) {
            if (currentIndex == slideIndex) {

                if (currentIndex != previousIndex)
                    _SlideItems[previousIndex] && _SlideItems[previousIndex].$ParkOut();
                else
                    !manualActivate && _Processor && _Processor.$AdjustIdleOnPark();

                _PlayerInstance && _PlayerInstance.$Enable();

                //park in
                var loadingTicket = _LoadingTicket = $Jssor$.$GetNow();
                _SelfSlideItem.$LoadImage($Jssor$.$CreateCallback(null, SlideReadyEventHandler, loadingTicket));
            }
            else {
                var distance = Math.abs(slideIndex - currentIndex);
                var loadRange = _DisplayPieces + _Options.$LazyLoading - 1;
                if (!_ImageLazyLoading || distance <= loadRange) {
                    _SelfSlideItem.$LoadImage();
                }
            }
        }

        function SwipeStartEventHandler() {
            if (_CurrentSlideIndex == slideIndex && _Processor) {
                _Processor.$Stop();
                _PlayerInstance && _PlayerInstance.$Quit();
                _PlayerInstance && _PlayerInstance.$Disable();
                _Processor.$OpenSlideshowPanel();
            }
        }

        function FreezeEventHandler() {
            if (_CurrentSlideIndex == slideIndex && _Processor) {
                _Processor.$Stop();
            }
        }

        function ContentClickEventHandler(event) {
            if (_LastDragSucceded) {
                $Jssor$.$StopEvent(event);

                var checkElement = $Jssor$.$EvtSrc(event);
                while (checkElement && slideElmt !== checkElement) {
                    if (checkElement.tagName == "A") {
                        $Jssor$.$CancelEvent(event);
                    }
                    try {
                        checkElement = checkElement.parentNode;
                    } catch (e) {
                        // Firefox sometimes fires events for XUL elements, which throws
                        // a "permission denied" error. so this is not a child.
                        break;
                    }
                }
            }
        }

        function SlideClickEventHandler(event) {
            if (!_LastDragSucceded) {
                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_CLICK, slideIndex, event);
            }
        }

        function PlayerAvailableEventHandler() {
            _PlayerInstance = _PlayerInstanceElement.pInstance;
            _Processor && _Processor.$SetPlayer(_PlayerInstance);
        }

        _SelfSlideItem.$LoadImage = function (completeCallback, loadingScreen) {
            loadingScreen = loadingScreen || _LoadingScreen;

            if (_ImageElmts.length && !_ImageLoaded) {

                $Jssor$.$ShowElement(loadingScreen);

                if (!_ImageLoading) {
                    _ImageLoading = true;
                    _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_LOAD_START, slideIndex);

                    $Jssor$.$Each(_ImageElmts, function (imageElmt) {

                        if (!$Jssor$.$Attribute(imageElmt, "src")) {
                            imageElmt.src = $Jssor$.$AttributeEx(imageElmt, "src2");
                            $Jssor$.$CssDisplay(imageElmt, imageElmt["display-origin"]);
                        }
                    });
                }
                $Jssor$.$LoadImages(_ImageElmts, _ImageItem, $Jssor$.$CreateCallback(null, LoadImageCompleteEventHandler, completeCallback, loadingScreen));
            }
            else {
                LoadImageCompleteEventHandler(completeCallback, loadingScreen);
            }
        };

        _SelfSlideItem.$GoForNextSlide = function () {
            if (_SlideshowRunner) {
                var slideshowTransition = _SlideshowRunner.$GetTransition(_SlideCount);

                if (slideshowTransition) {
                    var loadingTicket = _LoadingTicket = $Jssor$.$GetNow();

                    var nextIndex = slideIndex + _Options.$AutoPlaySteps * _PlayReverse;
                    var nextItem = _SlideItems[GetRealIndex(nextIndex)];
                    return nextItem.$LoadImage($Jssor$.$CreateCallback(null, LoadSlideshowImageCompleteEventHandler, nextIndex, nextItem, slideshowTransition, loadingTicket), _LoadingScreen);
                }
            }

            var index = _CurrentSlideIndex;
            if (_Options.$AutoPlaySteps < 0)
                index -= _SlideCount;

            PlayTo(index + _Options.$AutoPlaySteps * _PlayReverse);
        };

        _SelfSlideItem.$TryActivate = function () {
            ParkEventHandler(slideIndex, slideIndex, true);
        };

        _SelfSlideItem.$ParkOut = function () {
            //park out
            _PlayerInstance && _PlayerInstance.$Quit();
            _PlayerInstance && _PlayerInstance.$Disable();
            _SelfSlideItem.$UnhideContentForSlideshow();
            _Processor && _Processor.$Abort();
            _Processor = null;
            ResetCaptionSlider();
        };

        //for debug only
        _SelfSlideItem.$StampSlideItemElements = function (stamp) {
            stamp = _SequenceNumber + "_" + stamp;

            $JssorDebug$.$Execute(function () {
                if (_ImageItem)
                    $Jssor$.$Attribute(_ImageItem, "debug-id", stamp + "_slide_item_image_id");

                $Jssor$.$Attribute(slideElmt, "debug-id", stamp + "_slide_item_item_id");
            });

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_Wrapper, "debug-id", stamp + "_slide_item_wrapper_id");
            });

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_LoadingScreen, "debug-id", stamp + "_loading_container_id");
            });
        };

        _SelfSlideItem.$HideContentForSlideshow = function () {
            $Jssor$.$HideElement(slideElmt);
        };

        _SelfSlideItem.$UnhideContentForSlideshow = function () {
            $Jssor$.$ShowElement(slideElmt);
        };

        _SelfSlideItem.$EnablePlayer = function () {
            _PlayerInstance && _PlayerInstance.$Enable();
        };

        function RefreshContent(elmt, fresh, level) {
            $JssorDebug$.$Execute(function () {
                if ($Jssor$.$Attribute(elmt, "jssor-slider"))
                    $JssorDebug$.$Log("Child slider found.");
            });

            if ($Jssor$.$Attribute(elmt, "jssor-slider"))
                return;

            level = level || 0;

            if (!_ContentRefreshed) {
                if (elmt.tagName == "IMG") {
                    _ImageElmts.push(elmt);

                    if (!$Jssor$.$Attribute(elmt, "src")) {
                        _ImageLazyLoading = true;
                        elmt["display-origin"] = $Jssor$.$CssDisplay(elmt);
                        $Jssor$.$HideElement(elmt);
                    }
                }
                if ($Jssor$.$IsBrowserIe9Earlier()) {
                    $Jssor$.$CssZIndex(elmt, ($Jssor$.$CssZIndex(elmt) || 0) + 1);
                }
                if (_Options.$HWA && $Jssor$.$WebKitVersion()) {
                    if ($Jssor$.$WebKitVersion() < 534 || (!_SlideshowEnabled && !$Jssor$.$IsBrowserChrome())) {
                        $Jssor$.$EnableHWA(elmt);
                    }
                }
            }

            var childElements = $Jssor$.$Children(elmt);

            $Jssor$.$Each(childElements, function (childElement, i) {

                var childTagName = childElement.tagName;
                var uAttribute = $Jssor$.$AttributeEx(childElement, "u");
                if (uAttribute == "player" && !_PlayerInstanceElement) {
                    _PlayerInstanceElement = childElement;
                    if (_PlayerInstanceElement.pInstance) {
                        PlayerAvailableEventHandler();
                    }
                    else {
                        $Jssor$.$AddEvent(_PlayerInstanceElement, "dataavailable", PlayerAvailableEventHandler);
                    }
                }

                if (uAttribute == "caption") {
                    if (!$Jssor$.$IsBrowserIE() && !fresh) {

                        //if (childTagName == "A") {
                        //    $Jssor$.$RemoveEvent(childElement, "click", ContentClickEventHandler);
                        //    $Jssor$.$Attribute(childElement, "jssor-content", null);
                        //}

                        var captionElement = $Jssor$.$CloneNode(childElement, false, true);
                        $Jssor$.$InsertBefore(captionElement, childElement, elmt);
                        $Jssor$.$RemoveElement(childElement, elmt);
                        childElement = captionElement;

                        fresh = true;
                    }
                }
                else if (!_ContentRefreshed && !level && !_ImageItem) {

                    if (childTagName == "A") {
                        if ($Jssor$.$AttributeEx(childElement, "u") == "image") {
                            _ImageItem = $Jssor$.$FindChildByTag(childElement, "IMG");

                            $JssorDebug$.$Execute(function () {
                                if (!_ImageItem) {
                                    $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + elmt.outerHTML);
                                }
                            });
                        }
                        else {
                            _ImageItem = $Jssor$.$FindChild(childElement, "image", true);
                        }

                        if (_ImageItem) {
                            _LinkItemOrigin = childElement;
                            $Jssor$.$SetStyles(_LinkItemOrigin, _StyleDef);

                            _LinkItem = $Jssor$.$CloneNode(_LinkItemOrigin, true);
                            //$Jssor$.$AddEvent(_LinkItem, "click", ContentClickEventHandler);

                            $Jssor$.$CssDisplay(_LinkItem, "block");
                            $Jssor$.$SetStyles(_LinkItem, _StyleDef);
                            $Jssor$.$CssOpacity(_LinkItem, 0);
                            $Jssor$.$Css(_LinkItem, "backgroundColor", "#000");
                        }
                    }
                    else if (childTagName == "IMG" && $Jssor$.$AttributeEx(childElement, "u") == "image") {
                        _ImageItem = childElement;
                    }

                    if (_ImageItem) {
                        _ImageItem.border = 0;
                        $Jssor$.$SetStyles(_ImageItem, _StyleDef);
                    }
                }

                //if (!$Jssor$.$Attribute(childElement, "jssor-content")) {
                //    //cancel click event on <A> element when a drag of slide succeeded
                //    $Jssor$.$AddEvent(childElement, "click", ContentClickEventHandler);
                //    $Jssor$.$Attribute(childElement, "jssor-content", true);
                //}

                RefreshContent(childElement, fresh, level +1);
            });
        }

        _SelfSlideItem.$OnInnerOffsetChange = function (oldOffset, newOffset) {
            var slidePosition = _DisplayPieces - newOffset;

            SetPosition(_Wrapper, slidePosition);

            //following lines are for future usage, not ready yet
            //if (!_IsDragging || !_IsCaptionSliderPlayingWhenDragStart) {
            //    var _DealWithParallax;
            //    if (IsCurrentSlideIndex(slideIndex)) {
            //        if (_CaptionSliderOptions.$PlayOutMode == 2)
            //            _DealWithParallax = true;
            //    }
            //    else {
            //        if (!_CaptionSliderOptions.$PlayInMode) {
            //            //PlayInMode: 0 none
            //            _CaptionSliderIn.$GoToEnd();
            //        }
            //        //else if (_CaptionSliderOptions.$PlayInMode == 1) {
            //        //    //PlayInMode: 1 chain
            //        //    _CaptionSliderIn.$GoToPosition(0);
            //        //}
            //        else if (_CaptionSliderOptions.$PlayInMode == 2) {
            //            //PlayInMode: 2 parallel
            //            _DealWithParallax = true;
            //        }
            //    }

            //    if (_DealWithParallax) {
            //        _CaptionSliderIn.$GoToPosition((_CaptionSliderIn.$GetPosition_OuterEnd() - _CaptionSliderIn.$GetPosition_OuterBegin()) * Math.abs(newOffset - 1) * .8 + _CaptionSliderIn.$GetPosition_OuterBegin());
            //    }
            //}
        };

        _SelfSlideItem.$GetCaptionSliderIn = function () {
            return _CaptionSliderIn;
        };

        _SelfSlideItem.$GetCaptionSliderOut = function () {
            return _CaptionSliderOut;
        };

        _SelfSlideItem.$Index = slideIndex;

        $JssorObject$.call(_SelfSlideItem);

        //SlideItem Constructor
        {

            var thumb = $Jssor$.$FindChild(slideElmt, "thumb", true);
            if (thumb) {
                _SelfSlideItem.$Thumb = $Jssor$.$CloneNode(thumb);
                $Jssor$.$RemoveAttribute(thumb, "id");
                $Jssor$.$HideElement(thumb);
            }
            $Jssor$.$ShowElement(slideElmt);

            _LoadingScreen = $Jssor$.$CloneNode(_LoadingContainer);
            $Jssor$.$CssZIndex(_LoadingScreen, 1000);

            //cancel click event on <A> element when a drag of slide succeeded
            $Jssor$.$AddEvent(slideElmt, "click", SlideClickEventHandler);

            ResetCaptionSlider(true);

            _SelfSlideItem.$Image = _ImageItem;
            _SelfSlideItem.$Link = _LinkItem;

            _SelfSlideItem.$Item = slideElmt;

            _SelfSlideItem.$Wrapper = _Wrapper = slideElmt;
            $Jssor$.$AppendChild(_Wrapper, _LoadingScreen);

            _SelfSlider.$On(203, ParkEventHandler);
            _SelfSlider.$On(28, FreezeEventHandler);
            _SelfSlider.$On(24, SwipeStartEventHandler);

            $JssorDebug$.$Execute(function () {
                _SequenceNumber = _SlideItemCreatedCount++;
            });

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_Wrapper, "debug-id", "slide-" + slideIndex);
            });
        }
    }
    //SlideItem

    //Processor
    function Processor(slideElmt, slideIndex, slideshowProcessor, captionSliderIn, captionSliderOut) {

        var _SelfProcessor = this;

        var _ProgressBegin = 0;
        var _SlideshowBegin = 0;
        var _SlideshowEnd;
        var _CaptionInBegin;
        var _IdleBegin;
        var _IdleEnd;
        var _ProgressEnd;

        var _IsSlideshowRunning;
        var _IsRollingBack;

        var _PlayerInstance;
        var _IsPlayerOnService;

        var slideItem = _SlideItems[slideIndex];

        $JssorAnimator$.call(_SelfProcessor, 0, 0);

        function UpdateLink() {

            $Jssor$.$Empty(_LinkContainer);

            if (_ShowLink && _IsSlideshowRunning && slideItem.$Link) {
                $Jssor$.$AppendChild(_LinkContainer, slideItem.$Link);
            }

            $Jssor$.$ShowElement(_LinkContainer, !_IsSlideshowRunning && slideItem.$Image);
        }

        function ProcessCompleteEventHandler() {

            if (_IsRollingBack) {
                _IsRollingBack = false;
                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_ROLLBACK_END, slideIndex, _IdleEnd, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                _SelfProcessor.$GoToPosition(_IdleBegin);
            }

            _SelfProcessor.$Replay();
        }

        function PlayerSwitchEventHandler(isOnService) {
            _IsPlayerOnService = isOnService;

            _SelfProcessor.$Stop();
            _SelfProcessor.$Replay();
        }

        _SelfProcessor.$Replay = function () {

            var currentPosition = _SelfProcessor.$GetPosition_Display();

            if (!_IsDragging && !_IsSliding && !_IsPlayerOnService && _CurrentSlideIndex == slideIndex) {

                if (!currentPosition) {
                    if (_SlideshowEnd && !_IsSlideshowRunning) {
                        _IsSlideshowRunning = true;

                        _SelfProcessor.$OpenSlideshowPanel(true);

                        _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_START, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
                    }

                    UpdateLink();
                }

                var toPosition;
                var stateEvent = $JssorSlider$.$EVT_STATE_CHANGE;

                if (currentPosition != _ProgressEnd) {
                    if (currentPosition == _IdleEnd) {
                        toPosition = _ProgressEnd;
                    }
                    else if (currentPosition == _IdleBegin) {
                        toPosition = _IdleEnd;
                    }
                    else if (!currentPosition) {
                        toPosition = _IdleBegin;
                    }
                    else if (currentPosition > _IdleEnd) {
                        _IsRollingBack = true;
                        toPosition = _IdleEnd;
                        stateEvent = $JssorSlider$.$EVT_ROLLBACK_START;
                    }
                    else {
                        //continue from break (by drag or lock)
                        toPosition = _SelfProcessor.$GetPlayToPosition();
                    }
                }

                _SelfSlider.$TriggerEvent(stateEvent, slideIndex, currentPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);

                var allowAutoPlay = _AutoPlay && (!_HoverToPause || _NotOnHover);

                if (currentPosition == _ProgressEnd) {
                    (_IdleEnd != _ProgressEnd && !(_HoverToPause & 12) || allowAutoPlay) && slideItem.$GoForNextSlide();
                }
                else if (allowAutoPlay || currentPosition != _IdleEnd) {
                    _SelfProcessor.$PlayToPosition(toPosition, ProcessCompleteEventHandler);
                }
            }
        };

        _SelfProcessor.$AdjustIdleOnPark = function () {
            if (_IdleEnd == _ProgressEnd && _IdleEnd == _SelfProcessor.$GetPosition_Display())
                _SelfProcessor.$GoToPosition(_IdleBegin);
        };

        _SelfProcessor.$Abort = function () {
            _SlideshowRunner && _SlideshowRunner.$Index == slideIndex && _SlideshowRunner.$Clear();

            var currentPosition = _SelfProcessor.$GetPosition_Display();
            if (currentPosition < _ProgressEnd) {
                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_STATE_CHANGE, slideIndex, -currentPosition - 1, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
            }
        };

        _SelfProcessor.$OpenSlideshowPanel = function (open) {
            if (slideshowProcessor) {
                $Jssor$.$CssOverflow(_SlideshowPanel, open && slideshowProcessor.$Transition.$Outside ? "" : "hidden");
            }
        };

        _SelfProcessor.$OnInnerOffsetChange = function (oldPosition, newPosition) {

            if (_IsSlideshowRunning && newPosition >= _SlideshowEnd) {
                _IsSlideshowRunning = false;
                UpdateLink();
                slideItem.$UnhideContentForSlideshow();
                _SlideshowRunner.$Clear();

                _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_END, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
            }

            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_PROGRESS_CHANGE, slideIndex, newPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
        };

        _SelfProcessor.$SetPlayer = function (playerInstance) {
            if (playerInstance && !_PlayerInstance) {
                _PlayerInstance = playerInstance;

                playerInstance.$On($JssorPlayer$.$EVT_SWITCH, PlayerSwitchEventHandler);
            }
        };

        //Processor Constructor
        {
            if (slideshowProcessor) {
                _SelfProcessor.$Chain(slideshowProcessor);
            }

            _SlideshowEnd = _SelfProcessor.$GetPosition_OuterEnd();
            _CaptionInBegin = _SelfProcessor.$GetPosition_OuterEnd();
            _SelfProcessor.$Chain(captionSliderIn);
            _IdleBegin = captionSliderIn.$GetPosition_OuterEnd();
            _IdleEnd = _IdleBegin + ($Jssor$.$ParseFloat($Jssor$.$AttributeEx(slideElmt, "idle")) || _AutoPlayInterval);

            captionSliderOut.$Shift(_IdleEnd);
            _SelfProcessor.$Combine(captionSliderOut);
            _ProgressEnd = _SelfProcessor.$GetPosition_OuterEnd();
        }
    }
    //Processor
    //#endregion

    function SetPosition(elmt, position) {
        var orientation = _DragOrientation > 0 ? _DragOrientation : _PlayOrientation;
        var x = _StepLengthX * position * (orientation & 1);
        var y = _StepLengthY * position * ((orientation >> 1) & 1);

        x = Math.round(x);
        y = Math.round(y);

        $Jssor$.$CssLeft(elmt, x);
        $Jssor$.$CssTop(elmt, y);
    }

    //#region Event handling begin

    function RecordFreezePoint() {
        _CarouselPlaying_OnFreeze = _IsSliding;
        _PlayToPosition_OnFreeze = _CarouselPlayer.$GetPlayToPosition();
        _Position_OnFreeze = _Conveyor.$GetPosition();
    }

    function Freeze() {
        RecordFreezePoint();

        if (_IsDragging || !_NotOnHover && (_HoverToPause & 12)) {
            _CarouselPlayer.$Stop();

            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_FREEZE);
        }
    }

    function Unfreeze(byDrag) {

        if (!_IsDragging && (_NotOnHover || !(_HoverToPause & 12)) && !_CarouselPlayer.$IsPlaying()) {

            var currentPosition = _Conveyor.$GetPosition();
            var toPosition = Math.ceil(_Position_OnFreeze);

            if (byDrag && Math.abs(_DragOffsetTotal) >= _Options.$MinDragOffsetToSlide) {
                toPosition = Math.ceil(currentPosition);
                toPosition += _DragIndexAdjust;
            }

            if (!(_Loop & 1)) {
                toPosition = Math.min(_SlideCount - _DisplayPieces, Math.max(toPosition, 0));
            }

            var t = Math.abs(toPosition - currentPosition);
            t = 1 - Math.pow(1 - t, 5);

            if (!_LastDragSucceded && _CarouselPlaying_OnFreeze) {
                _CarouselPlayer.$Continue(_PlayToPosition_OnFreeze);
            }
            else if (currentPosition == toPosition) {
                _CurrentSlideItem.$EnablePlayer();
                _CurrentSlideItem.$TryActivate();
            }
            else {

                _CarouselPlayer.$PlayCarousel(currentPosition, toPosition, t * _SlideDuration);
            }
        }
    }

    function PreventDragSelectionEvent(event) {
        if (!$Jssor$.$AttributeEx($Jssor$.$EvtSrc(event), "nodrag")) {
            $Jssor$.$CancelEvent(event);
        }
    }

    function OnTouchStart(event) {
        OnDragStart(event, 1);
    }

    function OnDragStart(event, touch) {
        event = $Jssor$.$GetEvent(event);
        var eventSrc = $Jssor$.$EvtSrc(event);

        if (!_DragOrientationRegistered && !$Jssor$.$AttributeEx(eventSrc, "nodrag") && RegisterDrag() && (!touch || event.touches.length == 1)) {
            _IsDragging = true;
            _DragInvalid = false;
            _LoadingTicket = null;

            $Jssor$.$AddEvent(document, touch ? "touchmove" : "mousemove", OnDragMove);

            _LastTimeMoveByDrag = $Jssor$.$GetNow() - 50;

            _LastDragSucceded = 0;
            Freeze();

            if (!_CarouselPlaying_OnFreeze)
                _DragOrientation = 0;

            if (touch) {
                var touchPoint = event.touches[0];
                _DragStartMouseX = touchPoint.clientX;
                _DragStartMouseY = touchPoint.clientY;
            }
            else {
                var mousePoint = $Jssor$.$MousePosition(event);

                _DragStartMouseX = mousePoint.x;
                _DragStartMouseY = mousePoint.y;
            }

            _DragOffsetTotal = 0;
            _DragOffsetLastTime = 0;
            _DragIndexAdjust = 0;

            //Trigger EVT_DRAGSTART
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_DRAG_START, GetRealIndex(_Position_OnFreeze), _Position_OnFreeze, event);
        }
    }

    function OnDragMove(event) {
        if (_IsDragging) {
            event = $Jssor$.$GetEvent(event);

            var actionPoint;

            if (event.type != "mousemove") {
                var touch = event.touches[0];
                actionPoint = { x: touch.clientX, y: touch.clientY };
            }
            else {
                actionPoint = $Jssor$.$MousePosition(event);
            }

            if (actionPoint) {
                var distanceX = actionPoint.x - _DragStartMouseX;
                var distanceY = actionPoint.y - _DragStartMouseY;


                if (Math.floor(_Position_OnFreeze) != _Position_OnFreeze)
                    _DragOrientation = _DragOrientation || (_PlayOrientation & _DragOrientationRegistered);

                if ((distanceX || distanceY) && !_DragOrientation) {
                    if (_DragOrientationRegistered == 3) {
                        if (Math.abs(distanceY) > Math.abs(distanceX)) {
                            _DragOrientation = 2;
                        }
                        else
                            _DragOrientation = 1;
                    }
                    else {
                        _DragOrientation = _DragOrientationRegistered;
                    }

                    if (_IsTouchDevice && _DragOrientation == 1 && Math.abs(distanceY) - Math.abs(distanceX) > 3) {
                        _DragInvalid = true;
                    }
                }

                if (_DragOrientation) {
                    var distance = distanceY;
                    var stepLength = _StepLengthY;

                    if (_DragOrientation == 1) {
                        distance = distanceX;
                        stepLength = _StepLengthX;
                    }

                    if (!(_Loop & 1)) {
                        if (distance > 0) {
                            var normalDistance = stepLength * _CurrentSlideIndex;
                            var sqrtDistance = distance - normalDistance;
                            if (sqrtDistance > 0) {
                                distance = normalDistance + Math.sqrt(sqrtDistance) * 5;
                            }
                        }

                        if (distance < 0) {
                            var normalDistance = stepLength * (_SlideCount - _DisplayPieces - _CurrentSlideIndex);
                            var sqrtDistance = -distance - normalDistance;

                            if (sqrtDistance > 0) {
                                distance = -normalDistance - Math.sqrt(sqrtDistance) * 5;
                            }
                        }
                    }

                    if (_DragOffsetTotal - _DragOffsetLastTime < -2) {
                        _DragIndexAdjust = 0;
                    }
                    else if (_DragOffsetTotal - _DragOffsetLastTime > 2) {
                        _DragIndexAdjust = -1;
                    }

                    _DragOffsetLastTime = _DragOffsetTotal;
                    _DragOffsetTotal = distance;
                    _PositionToGoByDrag = _Position_OnFreeze - _DragOffsetTotal / stepLength / (_ScaleRatio || 1);

                    if (_DragOffsetTotal && _DragOrientation && !_DragInvalid) {
                        $Jssor$.$CancelEvent(event);
                        if (!_IsSliding) {
                            _CarouselPlayer.$StandBy(_PositionToGoByDrag);
                        }
                        else
                            _CarouselPlayer.$SetStandByPosition(_PositionToGoByDrag);
                    }
                }
            }
        }
    }

    function OnDragEnd() {
        UnregisterDrag();

        if (_IsDragging) {

            _IsDragging = false;

            _LastTimeMoveByDrag = $Jssor$.$GetNow();

            $Jssor$.$RemoveEvent(document, "mousemove", OnDragMove);
            $Jssor$.$RemoveEvent(document, "touchmove", OnDragMove);

            _LastDragSucceded = _DragOffsetTotal;

            _CarouselPlayer.$Stop();

            var currentPosition = _Conveyor.$GetPosition();

            //Trigger EVT_DRAG_END
            _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_DRAG_END, GetRealIndex(currentPosition), currentPosition, GetRealIndex(_Position_OnFreeze), _Position_OnFreeze);

            (_HoverToPause & 12) && RecordFreezePoint();

            Unfreeze(true);
        }
    }

    function SlidesClickEventHandler(event) {
        if (_LastDragSucceded) {
            $Jssor$.$StopEvent(event);

            var checkElement = $Jssor$.$EvtSrc(event);
            while (checkElement && _SlidesContainer !== checkElement) {
                if (checkElement.tagName == "A") {
                    $Jssor$.$CancelEvent(event);
                }
                try {
                    checkElement = checkElement.parentNode;
                } catch (e) {
                    // Firefox sometimes fires events for XUL elements, which throws
                    // a "permission denied" error. so this is not a child.
                    break;
                }
            }
        }
    }
    //#endregion

    function SetCurrentSlideIndex(index) {
        _PrevSlideItem = _SlideItems[_CurrentSlideIndex];
        _PreviousSlideIndex = _CurrentSlideIndex;
        _CurrentSlideIndex = GetRealIndex(index);
        _CurrentSlideItem = _SlideItems[_CurrentSlideIndex];
        ResetNavigator(index);
        return _CurrentSlideIndex;
    }

    function OnPark(slideIndex, prevIndex) {
        _DragOrientation = 0;

        SetCurrentSlideIndex(slideIndex);

        //Trigger EVT_PARK
        _SelfSlider.$TriggerEvent($JssorSlider$.$EVT_PARK, GetRealIndex(slideIndex), prevIndex);
    }

    function ResetNavigator(index, temp) {
        _TempSlideIndex = index;
        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$SetCurrentIndex(GetRealIndex(index), index, temp);
        });
    }

    function RegisterDrag() {
        var dragRegistry = $JssorSlider$.$DragRegistry || 0;
        var dragOrientation = _DragEnabled;
        if (_IsTouchDevice)
            (dragOrientation & 1) && (dragOrientation &= 1);
        $JssorSlider$.$DragRegistry |= dragOrientation;

        return (_DragOrientationRegistered = dragOrientation & ~dragRegistry);
    }

    function UnregisterDrag() {
        if (_DragOrientationRegistered) {
            $JssorSlider$.$DragRegistry &= ~_DragEnabled;
            _DragOrientationRegistered = 0;
        }
    }

    function CreatePanel() {
        var div = $Jssor$.$CreateDiv();

        $Jssor$.$SetStyles(div, _StyleDef);
        $Jssor$.$CssPosition(div, "absolute");

        return div;
    }

    function GetRealIndex(index) {
        return (index % _SlideCount + _SlideCount) % _SlideCount;
    }

    function IsCurrentSlideIndex(index) {
        return GetRealIndex(index) == _CurrentSlideIndex;
    }

    function IsPreviousSlideIndex(index) {
        return GetRealIndex(index) == _PreviousSlideIndex;
    }

    //Navigation Request Handler
    function NavigationClickHandler(index, relative) {
        if (relative) {
            if (!_Loop) {
                //Stop at threshold
                index = Math.min(Math.max(index + _TempSlideIndex, 0), _SlideCount - _DisplayPieces);
                relative = false;
            }
            else if (_Loop & 2) {
                //Rewind
                index = GetRealIndex(index + _TempSlideIndex);
                relative = false;
            }
        }
        PlayTo(index, _Options.$SlideDuration, relative);
    }

    function ShowNavigators() {
        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$Show(navigator.$Options.$ChanceToShow <= _NotOnHover);
        });
    }

    function MainContainerMouseLeaveEventHandler() {
        if (!_NotOnHover) {

            //$JssorDebug$.$Log("mouseleave");

            _NotOnHover = 1;

            ShowNavigators();

            if (!_IsDragging) {
                (_HoverToPause & 12) && Unfreeze();
                (_HoverToPause & 3) && _SlideItems[_CurrentSlideIndex].$TryActivate();
            }
        }
    }

    function MainContainerMouseEnterEventHandler() {

        if (_NotOnHover) {

            //$JssorDebug$.$Log("mouseenter");

            _NotOnHover = 0;

            ShowNavigators();

            _IsDragging || !(_HoverToPause & 12) || Freeze();
        }
    }

    function AdjustSlidesContainerSize() {
        _StyleDef = { $Width: _SlideWidth, $Height: _SlideHeight, $Top: 0, $Left: 0 };

        $Jssor$.$Each(_SlideElmts, function (slideElmt, i) {

            $Jssor$.$SetStyles(slideElmt, _StyleDef);
            $Jssor$.$CssPosition(slideElmt, "absolute");
            $Jssor$.$CssOverflow(slideElmt, "hidden");

            $Jssor$.$HideElement(slideElmt);
        });

        $Jssor$.$SetStyles(_LoadingContainer, _StyleDef);
    }

    function PlayToOffset(offset, slideDuration) {
        PlayTo(offset, slideDuration, true);
    }

    function PlayTo(slideIndex, slideDuration, relative) {
        ///	<summary>
        ///		PlayTo( slideIndex [, slideDuration] ); //Play slider to position 'slideIndex' within a period calculated base on 'slideDuration'.
        ///	</summary>
        ///	<param name="slideIndex" type="Number">
        ///		slide slideIndex or position will be playing to
        ///	</param>
        ///	<param name="slideDuration" type="Number" optional="true">
        ///		base slide duration in milliseconds to calculate the whole duration to complete this play request.
        ///	    default value is '$SlideDuration' value which is specified when initialize the slider.
        ///	</param>
        /// http://msdn.microsoft.com/en-us/library/vstudio/bb385682.aspx
        /// http://msdn.microsoft.com/en-us/library/vstudio/hh542720.aspx
        if (_CarouselEnabled && (!_IsDragging || _Options.$NaviQuitDrag)) {
            _IsSliding = true;
            _IsDragging = false;
            _CarouselPlayer.$Stop();

            {
                //Slide Duration
                if (slideDuration == undefined)
                    slideDuration = _SlideDuration;

                var positionDisplay = _Carousel.$GetPosition_Display();
                var positionTo = slideIndex;
                if (relative) {
                    positionTo = positionDisplay + slideIndex;
                    if (slideIndex > 0)
                        positionTo = Math.ceil(positionTo);
                    else
                        positionTo = Math.floor(positionTo);
                }

                if (_Loop & 2) {
                    //Rewind
                    positionTo = GetRealIndex(positionTo);
                }
                if (!(_Loop & 1)) {
                    //Stop at threshold
                    positionTo = Math.max(0, Math.min(positionTo, _SlideCount - _DisplayPieces));
                }

                var positionOffset = (positionTo - positionDisplay) % _SlideCount;
                positionTo = positionDisplay + positionOffset;

                var duration = positionDisplay == positionTo ? 0 : slideDuration * Math.abs(positionOffset);
                duration = Math.min(duration, slideDuration * _DisplayPieces * 1.5);

                _CarouselPlayer.$PlayCarousel(positionDisplay, positionTo, duration || 1);
            }
        }
    }

    //private functions

    //member functions

    _SelfSlider.$PlayTo = PlayTo;

    _SelfSlider.$GoTo = function (slideIndex) {
        ///	<summary>
        ///		instance.$GoTo( slideIndex );   //Go to the specifed slide immediately with no play.
        ///	</summary>
        PlayTo(slideIndex, 1);
    };

    _SelfSlider.$Next = function () {
        ///	<summary>
        ///		instance.$Next();   //Play the slider to next slide.
        ///	</summary>
        PlayToOffset(1);
    };

    _SelfSlider.$Prev = function () {
        ///	<summary>
        ///		instance.$Prev();   //Play the slider to previous slide.
        ///	</summary>
        PlayToOffset(-1);
    };

    _SelfSlider.$Pause = function () {
        ///	<summary>
        ///		instance.$Pause();   //Pause the slider, prevent it from auto playing.
        ///	</summary>
        _AutoPlay = false;
    };

    _SelfSlider.$Play = function () {
        ///	<summary>
        ///		instance.$Play();   //Start auto play if the slider is currently paused.
        ///	</summary>
        if (!_AutoPlay) {
            _AutoPlay = true;
            _SlideItems[_CurrentSlideIndex] && _SlideItems[_CurrentSlideIndex].$TryActivate();
        }
    };

    _SelfSlider.$SetSlideshowTransitions = function (transitions) {
        ///	<summary>
        ///		instance.$SetSlideshowTransitions( transitions );   //Reset slideshow transitions for the slider.
        ///	</summary>
        $JssorDebug$.$Execute(function () {
            if (!transitions || !transitions.length) {
                $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.");
            }
        });

        //$Jssor$.$TranslateTransitions(transitions);    //for old transition compatibility
        _Options.$SlideshowOptions.$Transitions = transitions;
    };

    _SelfSlider.$SetCaptionTransitions = function (transitions) {
        ///	<summary>
        ///		instance.$SetCaptionTransitions( transitions );   //Reset caption transitions for the slider.
        ///	</summary>
        $JssorDebug$.$Execute(function () {
            if (!transitions || !transitions.length) {
                $JssorDebug$.$Error("Can not set caption transitions, no transitions specified");
            }
        });

        //$Jssor$.$TranslateTransitions(transitions);    //for old transition compatibility
        _CaptionSliderOptions.$CaptionTransitions = transitions;
        _CaptionSliderOptions.$Version = $Jssor$.$GetNow();
    };

    _SelfSlider.$SlidesCount = function () {
        ///	<summary>
        ///		instance.$SlidesCount();   //Retrieve slides count of the slider.
        ///	</summary>
        return _SlideElmts.length;
    };

    _SelfSlider.$CurrentIndex = function () {
        ///	<summary>
        ///		instance.$CurrentIndex();   //Retrieve current slide index of the slider.
        ///	</summary>
        return _CurrentSlideIndex;
    };

    _SelfSlider.$IsAutoPlaying = function () {
        ///	<summary>
        ///		instance.$IsAutoPlaying();   //Retrieve auto play status of the slider.
        ///	</summary>
        return _AutoPlay;
    };

    _SelfSlider.$IsDragging = function () {
        ///	<summary>
        ///		instance.$IsDragging();   //Retrieve drag status of the slider.
        ///	</summary>
        return _IsDragging;
    };

    _SelfSlider.$IsSliding = function () {
        ///	<summary>
        ///		instance.$IsSliding();   //Retrieve right<-->left sliding status of the slider.
        ///	</summary>
        return _IsSliding;
    };

    _SelfSlider.$IsMouseOver = function () {
        ///	<summary>
        ///		instance.$IsMouseOver();   //Retrieve mouse over status of the slider.
        ///	</summary>
        return !_NotOnHover;
    };

    _SelfSlider.$LastDragSucceded = function () {
        ///	<summary>
        ///		instance.$IsLastDragSucceded();   //Retrieve last drag succeded status, returns 0 if failed, returns drag offset if succeded
        ///	</summary>
        return _LastDragSucceded;
    };

    function OriginalWidth() {
        ///	<summary>
        ///		instance.$OriginalWidth();   //Retrieve original width of the slider.
        ///	</summary>
        return $Jssor$.$CssWidth(_ScaleWrapper || elmt);
    }

    function OriginalHeight() {
        ///	<summary>
        ///		instance.$OriginalHeight();   //Retrieve original height of the slider.
        ///	</summary>
        return $Jssor$.$CssHeight(_ScaleWrapper || elmt);
    }

    _SelfSlider.$OriginalWidth = _SelfSlider.$GetOriginalWidth = OriginalWidth;

    _SelfSlider.$OriginalHeight = _SelfSlider.$GetOriginalHeight = OriginalHeight;

    function Scale(dimension, isHeight) {
        ///	<summary>
        ///		instance.$ScaleWidth();   //Retrieve scaled dimension the slider currently displays.
        ///		instance.$ScaleWidth( dimension );   //Scale the slider to new width and keep aspect ratio.
        ///	</summary>

        if (dimension == undefined)
            return $Jssor$.$CssWidth(elmt);

        if (!_ScaleWrapper) {
            $JssorDebug$.$Execute(function () {
                var originalWidthStr = $Jssor$.$Css(elmt, "width");
                var originalHeightStr = $Jssor$.$Css(elmt, "height");
                var originalWidth = $Jssor$.$CssP(elmt, "width");
                var originalHeight = $Jssor$.$CssP(elmt, "height");

                if (!originalWidthStr || originalWidthStr.indexOf("px") == -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                }

                if (!originalHeightStr || originalHeightStr.indexOf("px") == -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                }

                if (originalWidthStr.indexOf('%') != -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                }

                if (originalHeightStr.indexOf('%') != -1) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                }

                if (!originalWidth) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'");
                }

                if (!originalHeight) {
                    $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'");
                }
            });

            var innerWrapper = $Jssor$.$CreateDiv(document);
            $Jssor$.$ClassName(innerWrapper, $Jssor$.$ClassName(elmt));
            $Jssor$.$CssCssText(innerWrapper, $Jssor$.$CssCssText(elmt));
            $Jssor$.$CssDisplay(innerWrapper, "block");

            $Jssor$.$CssPosition(innerWrapper, "relative");
            $Jssor$.$CssTop(innerWrapper, 0);
            $Jssor$.$CssLeft(innerWrapper, 0);
            $Jssor$.$CssOverflow(innerWrapper, "visible");

            _ScaleWrapper = $Jssor$.$CreateDiv(document);

            $Jssor$.$CssPosition(_ScaleWrapper, "absolute");
            $Jssor$.$CssTop(_ScaleWrapper, 0);
            $Jssor$.$CssLeft(_ScaleWrapper, 0);
            $Jssor$.$CssWidth(_ScaleWrapper, $Jssor$.$CssWidth(elmt));
            $Jssor$.$CssHeight(_ScaleWrapper, $Jssor$.$CssHeight(elmt));
            $Jssor$.$SetStyleTransformOrigin(_ScaleWrapper, "0 0");

            $Jssor$.$AppendChild(_ScaleWrapper, innerWrapper);

            var children = $Jssor$.$Children(elmt);
            $Jssor$.$AppendChild(elmt, _ScaleWrapper);

            $Jssor$.$Css(elmt, "backgroundImage", "");

            //var noMoveElmts = {
            //    "navigator": _BulletNavigatorOptions && _BulletNavigatorOptions.$Scale == false,
            //    "arrowleft": _ArrowNavigatorOptions && _ArrowNavigatorOptions.$Scale == false,
            //    "arrowright": _ArrowNavigatorOptions && _ArrowNavigatorOptions.$Scale == false,
            //    "thumbnavigator": _ThumbnailNavigatorOptions && _ThumbnailNavigatorOptions.$Scale == false,
            //    "thumbwrapper": _ThumbnailNavigatorOptions && _ThumbnailNavigatorOptions.$Scale == false
            //};

            $Jssor$.$Each(children, function (child) {
                $Jssor$.$AppendChild($Jssor$.$AttributeEx(child, "noscale") ? elmt : innerWrapper, child);
                //$Jssor$.$AppendChild(noMoveElmts[$Jssor$.$AttributeEx(child, "u")] ? elmt : innerWrapper, child);
            });
        }

        $JssorDebug$.$Execute(function () {
            if (!dimension || dimension < 0) {
                $JssorDebug$.$Fail("'$ScaleWidth' error, 'dimension' should be positive value.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (!_InitialScrollWidth) {
                _InitialScrollWidth = _SelfSlider.$Elmt.scrollWidth;
            }
        });

        _ScaleRatio = dimension / (isHeight ? $Jssor$.$CssHeight : $Jssor$.$CssWidth)(_ScaleWrapper);
        $Jssor$.$CssScale(_ScaleWrapper, _ScaleRatio);

        var scaleWidth = isHeight ? (_ScaleRatio * OriginalWidth()) : dimension;
        var scaleHeight = isHeight ? dimension : (_ScaleRatio * OriginalHeight());

        $Jssor$.$CssWidth(elmt, scaleWidth);
        $Jssor$.$CssHeight(elmt, scaleHeight);

        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$Relocate(scaleWidth, scaleHeight);
        });
    }

    _SelfSlider.$ScaleHeight = _SelfSlider.$GetScaleHeight = function (height) {
        ///	<summary>
        ///		instance.$ScaleHeight();   //Retrieve scaled height the slider currently displays.
        ///		instance.$ScaleHeight( dimension );   //Scale the slider to new height and keep aspect ratio.
        ///	</summary>

        if (height == undefined)
            return $Jssor$.$CssHeight(elmt);

        Scale(height, true);
    };

    _SelfSlider.$ScaleWidth = _SelfSlider.$SetScaleWidth = _SelfSlider.$GetScaleWidth = Scale;

    _SelfSlider.$GetVirtualIndex = function (index) {
        var parkingIndex = Math.ceil(GetRealIndex(_ParkingPosition / _StepLength));
        var displayIndex = GetRealIndex(index - _CurrentSlideIndex + parkingIndex);

        if (displayIndex > _DisplayPieces) {
            if (index - _CurrentSlideIndex > _SlideCount / 2)
                index -= _SlideCount;
            else if (index - _CurrentSlideIndex <= -_SlideCount / 2)
                index += _SlideCount;
        }
        else {
            index = _CurrentSlideIndex + displayIndex - parkingIndex;
        }

        return index;
    };

    //member functions

    $JssorObject$.call(_SelfSlider);

    $JssorDebug$.$Execute(function () {
        var outerContainerElmt = $Jssor$.$GetElement(elmt);
        if (!outerContainerElmt)
            $JssorDebug$.$Fail("Outer container '" + elmt + "' not found.");
    });

    //initialize member variables
    _SelfSlider.$Elmt = elmt = $Jssor$.$GetElement(elmt);
    //initialize member variables

    var _InitialScrollWidth;    //for debug only
    var _CaptionSliderCount = 1;    //for debug only

    var _Options = $Jssor$.$Extend({
        $FillMode: 0,                   //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
        $LazyLoading: 1,                //[Optional] For image with  lazy loading format (<IMG src2="url" .../>), by default it will be loaded only when the slide comes.
        //But an integer value (maybe 0, 1, 2 or 3) indicates that how far of nearby slides should be loaded immediately as well, default value is 1.
        $StartIndex: 0,                 //[Optional] Index of slide to display when initialize, default value is 0
        $AutoPlay: false,               //[Optional] Whether to auto play, default value is false
        $Loop: 1,                       //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
        $HWA: true,                     //[Optional] Enable hardware acceleration or not, default value is true
        $NaviQuitDrag: true,
        $AutoPlaySteps: 1,              //[Optional] Steps to go of every play (this options applys only when slideshow disabled), default value is 1
        $AutoPlayInterval: 3000,        //[Optional] Interval to play next slide since the previous stopped if a slideshow is auto playing, default value is 3000
        $PauseOnHover: 1,               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $SlideDuration: 500,            //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 400
        $SlideEasing: $JssorEasing$.$EaseOutQuad,   //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
        $MinDragOffsetToSlide: 20,      //[Optional] Minimum drag offset that trigger slide, default value is 20
        $SlideSpacing: 0, 				//[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 1,              //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), default value is 1
        $ParkingPosition: 0,            //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,               //[Optional] The way (0 parellel, 1 recursive, default value is recursive) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc.
        $PlayOrientation: 1,            //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1             //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 both, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

    }, options);

    //going to use $Idle instead of $AutoPlayInterval
    if (_Options.$Idle != undefined)
        _Options.$AutoPlayInterval = _Options.$Idle;

    //going to use $Cols instead of $DisplayPieces
    if (_Options.$Cols != undefined)
        _Options.$DisplayPieces = _Options.$Cols;

    //Sodo statement for development time intellisence only
    $JssorDebug$.$Execute(function () {
        _Options = $Jssor$.$Extend({
            $ArrowKeyNavigation: undefined,
            $SlideWidth: undefined,
            $SlideHeight: undefined,
            $SlideshowOptions: undefined,
            $CaptionSliderOptions: undefined,
            $BulletNavigatorOptions: undefined,
            $ArrowNavigatorOptions: undefined,
            $ThumbnailNavigatorOptions: undefined
        },
        _Options);
    });

    var _PlayOrientation = _Options.$PlayOrientation & 3;
    var _PlayReverse = (_Options.$PlayOrientation & 4) / -4 || 1;

    var _SlideshowOptions = _Options.$SlideshowOptions;
    var _CaptionSliderOptions = $Jssor$.$Extend({ $Class: $JssorCaptionSliderBase$, $PlayInMode: 1, $PlayOutMode: 1 }, _Options.$CaptionSliderOptions);
    //$Jssor$.$TranslateTransitions(_CaptionSliderOptions.$CaptionTransitions); //for old transition compatibility
    var _BulletNavigatorOptions = _Options.$BulletNavigatorOptions;
    var _ArrowNavigatorOptions = _Options.$ArrowNavigatorOptions;
    var _ThumbnailNavigatorOptions = _Options.$ThumbnailNavigatorOptions;

    $JssorDebug$.$Execute(function () {
        if (_SlideshowOptions && !_SlideshowOptions.$Class) {
            $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_Options.$CaptionSliderOptions && !_Options.$CaptionSliderOptions.$Class) {
            $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_BulletNavigatorOptions && !_BulletNavigatorOptions.$Class) {
            $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_ArrowNavigatorOptions && !_ArrowNavigatorOptions.$Class) {
            $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.");
        }
    });

    $JssorDebug$.$Execute(function () {
        if (_ThumbnailNavigatorOptions && !_ThumbnailNavigatorOptions.$Class) {
            $JssorDebug$.$Fail("Option $ThumbnailNavigatorOptions error, class not specified.");
        }
    });

    var _UISearchNoDeep = !_Options.$UISearchMode;
    var _ScaleWrapper;
    var _SlidesContainer = $Jssor$.$FindChild(elmt, "slides", _UISearchNoDeep);
    var _LoadingContainer = $Jssor$.$FindChild(elmt, "loading", _UISearchNoDeep) || $Jssor$.$CreateDiv(document);

    var _BulletNavigatorContainer = $Jssor$.$FindChild(elmt, "navigator", _UISearchNoDeep);

    var _ArrowLeft = $Jssor$.$FindChild(elmt, "arrowleft", _UISearchNoDeep);
    var _ArrowRight = $Jssor$.$FindChild(elmt, "arrowright", _UISearchNoDeep);

    var _ThumbnailNavigatorContainer = $Jssor$.$FindChild(elmt, "thumbnavigator", _UISearchNoDeep);

    $JssorDebug$.$Execute(function () {
        //if (_BulletNavigatorOptions && !_BulletNavigatorContainer) {
        //    throw new Error("$BulletNavigatorOptions specified but bullet navigator container (<div u=\"navigator\" ...) not defined.");
        //}
        if (_BulletNavigatorContainer && !_BulletNavigatorOptions) {
            throw new Error("Bullet navigator container defined but $BulletNavigatorOptions not specified.");
        }

        //if (_ArrowNavigatorOptions) {
        //    if (!_ArrowLeft) {
        //        throw new Error("$ArrowNavigatorOptions specified, but arrowleft (<span u=\"arrowleft\" ...) not defined.");
        //    }

        //    if (!_ArrowRight) {
        //        throw new Error("$ArrowNavigatorOptions specified, but arrowright (<span u=\"arrowright\" ...) not defined.");
        //    }
        //}

        if ((_ArrowLeft || _ArrowRight) && !_ArrowNavigatorOptions) {
            throw new Error("arrowleft or arrowright defined, but $ArrowNavigatorOptions not specified.");
        }

        //if (_ThumbnailNavigatorOptions && !_ThumbnailNavigatorContainer) {
        //    throw new Error("$ThumbnailNavigatorOptions specified, but thumbnail navigator container (<div u=\"thumbnavigator\" ...) not defined.");
        //}

        if (_ThumbnailNavigatorContainer && !_ThumbnailNavigatorOptions) {
            throw new Error("Thumbnail navigator container defined, but $ThumbnailNavigatorOptions not specified.");
        }
    });

    var _SlidesContainerWidth = $Jssor$.$CssWidth(_SlidesContainer);
    var _SlidesContainerHeight = $Jssor$.$CssHeight(_SlidesContainer);

    $JssorDebug$.$Execute(function () {
        if (isNaN(_SlidesContainerWidth))
            $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified in pixel (like style='width: 600px;').");

        if (_SlidesContainerWidth == undefined)
            $JssorDebug$.$Fail("Width of slides container not specified, it should be specified in pixel (like style='width: 600px;').");

        if (isNaN(_SlidesContainerHeight))
            $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified in pixel (like style='height: 300px;').");

        if (_SlidesContainerHeight == undefined)
            $JssorDebug$.$Fail("Height of slides container not specified, it should be specified in pixel (like style='height: 300px;').");

        var slidesContainerOverflow = $Jssor$.$CssOverflow(_SlidesContainer);
        var slidesContainerOverflowX = $Jssor$.$Css(_SlidesContainer, "overflowX");
        var slidesContainerOverflowY = $Jssor$.$Css(_SlidesContainer, "overflowY");
        if (slidesContainerOverflow != "hidden" && (slidesContainerOverflowX != "hidden" || slidesContainerOverflowY != "hidden"))
            $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').");
    });

    $JssorDebug$.$Execute(function () {
        if (!$Jssor$.$IsNumeric(_Options.$DisplayPieces))
            $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1.");

        if (_Options.$DisplayPieces < 1)
            $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1.");

        if (_Options.$DisplayPieces > 1 && _Options.$DragOrientation && _Options.$DragOrientation != _PlayOrientation)
            $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1.");

        if (!$Jssor$.$IsNumeric(_Options.$ParkingPosition))
            $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value.");

        if (_Options.$ParkingPosition && _Options.$DragOrientation && _Options.$DragOrientation != _PlayOrientation)
            $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.");
    });

    var _StyleDef;

    var _SlideElmts = [];

    {
        var slideElmts = $Jssor$.$Children(_SlidesContainer);
        $Jssor$.$Each(slideElmts, function (slideElmt) {
            if (slideElmt.tagName == "DIV" && !$Jssor$.$AttributeEx(slideElmt, "u")) {
                _SlideElmts.push(slideElmt);
            }
            else if ($Jssor$.$IsBrowserIe9Earlier()) {
                $Jssor$.$CssZIndex(slideElmt, ($Jssor$.$CssZIndex(slideElmt) || 0) + 1);
            }
        });
    }

    $JssorDebug$.$Execute(function () {
        if (_SlideElmts.length < 1) {
            $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.");
        }
    });

    var _SlideItemCreatedCount = 0; //for debug only
    var _SlideItemReleasedCount = 0;    //for debug only

    var _PreviousSlideIndex;
    var _CurrentSlideIndex = -1;
    var _TempSlideIndex;
    var _PrevSlideItem;
    var _CurrentSlideItem;
    var _SlideCount = _SlideElmts.length;

    var _SlideWidth = _Options.$SlideWidth || _SlidesContainerWidth;
    var _SlideHeight = _Options.$SlideHeight || _SlidesContainerHeight;

    var _SlideSpacing = _Options.$SlideSpacing;
    var _StepLengthX = _SlideWidth + _SlideSpacing;
    var _StepLengthY = _SlideHeight + _SlideSpacing;
    var _StepLength = (_PlayOrientation & 1) ? _StepLengthX : _StepLengthY;
    var _DisplayPieces = Math.min(_Options.$DisplayPieces, _SlideCount);

    var _SlideshowPanel;
    var _CurrentBoardIndex = 0;
    var _DragOrientation;
    var _DragOrientationRegistered;
    var _DragInvalid;

    var _Navigators = [];
    var _BulletNavigator;
    var _ArrowNavigator;
    var _ThumbnailNavigator;

    var _ShowLink;

    var _Frozen;
    var _AutoPlay;
    var _AutoPlaySteps = _Options.$AutoPlaySteps;
    var _HoverToPause = _Options.$PauseOnHover;
    var _AutoPlayInterval = _Options.$AutoPlayInterval;
    var _SlideDuration = _Options.$SlideDuration;

    var _SlideshowRunnerClass;
    var _TransitionsOrder;

    var _SlideshowEnabled;
    var _ParkingPosition;
    var _CarouselEnabled = _DisplayPieces < _SlideCount;
    var _Loop = _CarouselEnabled ? _Options.$Loop : 0;

    var _DragEnabled;
    var _LastDragSucceded;

    var _NotOnHover = 1;   //0 Hovering, 1 Not hovering

    //Variable Definition
    var _IsSliding;
    var _IsDragging;
    var _LoadingTicket;

    //The X position of mouse/touch when a drag start
    var _DragStartMouseX = 0;
    //The Y position of mouse/touch when a drag start
    var _DragStartMouseY = 0;
    var _DragOffsetTotal;
    var _DragOffsetLastTime;
    var _DragIndexAdjust;

    var _Carousel;
    var _Conveyor;
    var _Slideshow;
    var _CarouselPlayer;
    var _SlideContainer = new SlideContainer();
    var _ScaleRatio;

    //$JssorSlider$ Constructor
    {
        _AutoPlay = _Options.$AutoPlay;
        _SelfSlider.$Options = options;

        AdjustSlidesContainerSize();

        $Jssor$.$Attribute(elmt, "jssor-slider", true);

        $Jssor$.$CssZIndex(_SlidesContainer, $Jssor$.$CssZIndex(_SlidesContainer) || 0);
        $Jssor$.$CssPosition(_SlidesContainer, "absolute");
        _SlideshowPanel = $Jssor$.$CloneNode(_SlidesContainer, true);
        $Jssor$.$InsertBefore(_SlideshowPanel, _SlidesContainer);

        if (_SlideshowOptions) {
            _ShowLink = _SlideshowOptions.$ShowLink;
            _SlideshowRunnerClass = _SlideshowOptions.$Class;

            $JssorDebug$.$Execute(function () {
                if (!_SlideshowOptions.$Transitions || !_SlideshowOptions.$Transitions.length) {
                    $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.");
                }
            });

            _SlideshowEnabled = _DisplayPieces == 1 && _SlideCount > 1 && _SlideshowRunnerClass && (!$Jssor$.$IsBrowserIE() || $Jssor$.$BrowserVersion() >= 8);
        }

        _ParkingPosition = (_SlideshowEnabled || _DisplayPieces >= _SlideCount || !(_Loop & 1)) ? 0 : _Options.$ParkingPosition;

        _DragEnabled = ((_DisplayPieces > 1 || _ParkingPosition) ? _PlayOrientation : -1) & _Options.$DragOrientation;

        //SlideBoard
        var _SlideboardElmt = _SlidesContainer;
        var _SlideItems = [];

        var _SlideshowRunner;
        var _LinkContainer;

        var _Device = $Jssor$.$Device();
        var _IsTouchDevice = _Device.$Touchable;

        var _LastTimeMoveByDrag;
        var _Position_OnFreeze;
        var _CarouselPlaying_OnFreeze;
        var _PlayToPosition_OnFreeze;
        var _PositionToGoByDrag;

        //SlideBoard Constructor
        {
            if (_Device.$TouchActionAttr) {
                $Jssor$.$Css(_SlideboardElmt, _Device.$TouchActionAttr, [null, "pan-y", "pan-x", "none"][_DragEnabled] || "");
            }

            _Slideshow = new Slideshow();

            if (_SlideshowEnabled)
                _SlideshowRunner = new _SlideshowRunnerClass(_SlideContainer, _SlideWidth, _SlideHeight, _SlideshowOptions, _IsTouchDevice);

            $Jssor$.$AppendChild(_SlideshowPanel, _Slideshow.$Wrapper);
            $Jssor$.$CssOverflow(_SlidesContainer, "hidden");

            //link container
            {
                _LinkContainer = CreatePanel();
                $Jssor$.$Css(_LinkContainer, "backgroundColor", "#000");
                $Jssor$.$CssOpacity(_LinkContainer, 0);
                $Jssor$.$InsertBefore(_LinkContainer, _SlideboardElmt.firstChild, _SlideboardElmt);
            }

            for (var i = 0; i < _SlideElmts.length; i++) {
                var slideElmt = _SlideElmts[i];
                var slideItem = new SlideItem(slideElmt, i);
                _SlideItems.push(slideItem);
            }

            $Jssor$.$HideElement(_LoadingContainer);

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_LoadingContainer, "debug-id", "loading-container");
            });

            _Carousel = new Carousel();
            _CarouselPlayer = new CarouselPlayer(_Carousel, _Slideshow);

            $JssorDebug$.$Execute(function () {
                $Jssor$.$Attribute(_SlideboardElmt, "debug-id", "slide-board");
            });

            if (_DragEnabled) {
                $Jssor$.$AddEvent(_SlidesContainer, "mousedown", OnDragStart);
                $Jssor$.$AddEvent(_SlidesContainer, "touchstart", OnTouchStart);
                $Jssor$.$AddEvent(_SlidesContainer, "dragstart", PreventDragSelectionEvent);
                $Jssor$.$AddEvent(_SlidesContainer, "selectstart", PreventDragSelectionEvent);
                $Jssor$.$AddEvent(document, "mouseup", OnDragEnd);
                $Jssor$.$AddEvent(document, "touchend", OnDragEnd);
                $Jssor$.$AddEvent(document, "touchcancel", OnDragEnd);
                $Jssor$.$AddEvent(window, "blur", OnDragEnd);
            }
        }
        //SlideBoard

        _HoverToPause &= (_IsTouchDevice ? 10 : 5);

        //Bullet Navigator
        if (_BulletNavigatorContainer && _BulletNavigatorOptions) {
            _BulletNavigator = new _BulletNavigatorOptions.$Class(_BulletNavigatorContainer, _BulletNavigatorOptions, OriginalWidth(), OriginalHeight());
            _Navigators.push(_BulletNavigator);
        }

        //Arrow Navigator
        if (_ArrowNavigatorOptions && _ArrowLeft && _ArrowRight) {
            _ArrowNavigatorOptions.$Loop = _Loop;
            _ArrowNavigatorOptions.$DisplayPieces = _DisplayPieces;
            _ArrowNavigator = new _ArrowNavigatorOptions.$Class(_ArrowLeft, _ArrowRight, _ArrowNavigatorOptions, OriginalWidth(), OriginalHeight());
            _Navigators.push(_ArrowNavigator);
        }

        //Thumbnail Navigator
        if (_ThumbnailNavigatorContainer && _ThumbnailNavigatorOptions) {
            _ThumbnailNavigatorOptions.$StartIndex = _Options.$StartIndex;
            _ThumbnailNavigator = new _ThumbnailNavigatorOptions.$Class(_ThumbnailNavigatorContainer, _ThumbnailNavigatorOptions);
            _Navigators.push(_ThumbnailNavigator);
        }

        $Jssor$.$Each(_Navigators, function (navigator) {
            navigator.$Reset(_SlideCount, _SlideItems, _LoadingContainer);
            navigator.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, NavigationClickHandler);
        });

        Scale(OriginalWidth());

        $Jssor$.$AddEvent(_SlidesContainer, "click", SlidesClickEventHandler);
        $Jssor$.$AddEvent(elmt, "mouseout", $Jssor$.$MouseOverOutFilter(MainContainerMouseLeaveEventHandler, elmt));
        $Jssor$.$AddEvent(elmt, "mouseover", $Jssor$.$MouseOverOutFilter(MainContainerMouseEnterEventHandler, elmt));

        ShowNavigators();

        //Keyboard Navigation
        if (_Options.$ArrowKeyNavigation) {
            $Jssor$.$AddEvent(document, "keydown", function (e) {
                if (e.keyCode == 37/*$JssorKeyCode$.$LEFT*/) {
                    //Arrow Left
                    PlayToOffset(-1);
                }
                else if (e.keyCode == 39/*$JssorKeyCode$.$RIGHT*/) {
                    //Arrow Right
                    PlayToOffset(1);
                }
            });
        }

        var startPosition = _Options.$StartIndex;
        if (!(_Loop & 1)) {
            startPosition = Math.max(0, Math.min(startPosition, _SlideCount - _DisplayPieces));
        }
        _CarouselPlayer.$PlayCarousel(startPosition, startPosition, 0);
    }
};
var $JssorSlideo$ = window.$JssorSlideo$ = $JssorSlider$;

$JssorSlider$.$EVT_CLICK = 21;
$JssorSlider$.$EVT_DRAG_START = 22;
$JssorSlider$.$EVT_DRAG_END = 23;
$JssorSlider$.$EVT_SWIPE_START = 24;
$JssorSlider$.$EVT_SWIPE_END = 25;

$JssorSlider$.$EVT_LOAD_START = 26;
$JssorSlider$.$EVT_LOAD_END = 27;
$JssorSlider$.$EVT_FREEZE = 28;

$JssorSlider$.$EVT_POSITION_CHANGE = 202;
$JssorSlider$.$EVT_PARK = 203;

$JssorSlider$.$EVT_SLIDESHOW_START = 206;
$JssorSlider$.$EVT_SLIDESHOW_END = 207;

$JssorSlider$.$EVT_PROGRESS_CHANGE = 208;
$JssorSlider$.$EVT_STATE_CHANGE = 209;
$JssorSlider$.$EVT_ROLLBACK_START = 210;
$JssorSlider$.$EVT_ROLLBACK_END = 211;

//(function ($) {
//    jQuery.fn.jssorSlider = function (options) {
//        return this.each(function () {
//            return $(this).data('jssorSlider') || $(this).data('jssorSlider', new $JssorSlider$(this, options));
//        });
//    };
//})(jQuery);

//window.jQuery && (jQuery.fn.jssorSlider = function (options) {
//    return this.each(function () {
//        return jQuery(this).data('jssorSlider') || jQuery(this).data('jssorSlider', new $JssorSlider$(this, options));
//    });
//});

//$JssorBulletNavigator$
var $JssorNavigatorEvents$ = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
};

var $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function (elmt, options, containerWidth, containerHeight) {
    var self = this;
    $JssorObject$.call(self);

    elmt = $Jssor$.$GetElement(elmt);

    var _Count;
    var _Length;
    var _Width;
    var _Height;
    var _CurrentIndex;
    var _CurrentInnerIndex = 0;
    var _Options;
    var _Steps;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _Orientation;
    var _ItemPrototype;
    var _PrototypeWidth;
    var _PrototypeHeight;

    var _ButtonElements = [];
    var _Buttons = [];

    function Highlight(index) {
        if (index != -1)
            _Buttons[index].$Selected(index == _CurrentInnerIndex);
    }

    function OnNavigationRequest(index) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, index * _Steps);
    }

    self.$Elmt = elmt;
    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index) {
        if (index != _CurrentIndex) {
            var lastInnerIndex = _CurrentInnerIndex;
            var innerIndex = Math.floor(index / _Steps);
            _CurrentInnerIndex = innerIndex;
            _CurrentIndex = index;

            Highlight(lastInnerIndex);
            Highlight(innerIndex);

            //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
        }
    };

    self.$Show = function (hide) {
        $Jssor$.$ShowElement(elmt, hide);
    };

    var _Located;
    self.$Relocate = function (containerWidth, containerHeight) {
        if (!_Located || _Options.$Scale == false) {
            var containerWidth = $Jssor$.$ParentNode(elmt).clientWidth;
            var containerHeight = $Jssor$.$ParentNode(elmt).clientHeight;

            if (_Options.$AutoCenter & 1) {
                $Jssor$.$CssLeft(elmt, (containerWidth - _Width) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $Jssor$.$CssTop(elmt, (containerHeight - _Height) / 2);
            }

            _Located = true;
        }
    };

    var _Initialized;
    self.$Reset = function (length) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(length / _Steps);
            _CurrentInnerIndex = 0;

            var itemOffsetX = _PrototypeWidth + _SpacingX;
            var itemOffsetY = _PrototypeHeight + _SpacingY;

            var maxIndex = Math.ceil(_Count / _Lanes) - 1;

            _Width = _PrototypeWidth + itemOffsetX * (!_Orientation ? maxIndex : _Lanes - 1);
            _Height = _PrototypeHeight + itemOffsetY * (_Orientation ? maxIndex : _Lanes - 1);

            $Jssor$.$CssWidth(elmt, _Width);
            $Jssor$.$CssHeight(elmt, _Height);

            for (var buttonIndex = 0; buttonIndex < _Count; buttonIndex++) {

                var numberDiv = $Jssor$.$CreateSpan();
                $Jssor$.$InnerText(numberDiv, buttonIndex + 1);

                var div = $Jssor$.$BuildElement(_ItemPrototype, "numbertemplate", numberDiv, true);
                $Jssor$.$CssPosition(div, "absolute");

                var columnIndex = buttonIndex % (maxIndex + 1);
                $Jssor$.$CssLeft(div, !_Orientation ? itemOffsetX * columnIndex : buttonIndex % _Lanes * itemOffsetX);
                $Jssor$.$CssTop(div, _Orientation ? itemOffsetY * columnIndex : Math.floor(buttonIndex / (maxIndex + 1)) * itemOffsetY);

                $Jssor$.$AppendChild(elmt, div);
                _ButtonElements[buttonIndex] = div;

                if (_Options.$ActionMode & 1)
                    $Jssor$.$AddEvent(div, "click", $Jssor$.$CreateCallback(null, OnNavigationRequest, buttonIndex));

                if (_Options.$ActionMode & 2)
                    $Jssor$.$AddEvent(div, "mouseover", $Jssor$.$MouseOverOutFilter($Jssor$.$CreateCallback(null, OnNavigationRequest, buttonIndex), div));

                _Buttons[buttonIndex] = $Jssor$.$Buttonize(div);
            }

            //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
            _Initialized = true;
        }
    };

    //JssorBulletNavigator Constructor
    {
        self.$Options = _Options = $Jssor$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $Jssor$.$Extend({
                $Steps: undefined,
                $Lanes: undefined
            }, _Options);
        });

        _ItemPrototype = $Jssor$.$FindChild(elmt, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ItemPrototype)
                $JssorDebug$.$Fail("Navigator item prototype not defined.");

            if (isNaN($Jssor$.$CssWidth(_ItemPrototype))) {
                $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified.");
            }

            if (isNaN($Jssor$.$CssHeight(_ItemPrototype))) {
                $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.");
            }
        });

        _PrototypeWidth = $Jssor$.$CssWidth(_ItemPrototype);
        _PrototypeHeight = $Jssor$.$CssHeight(_ItemPrototype);

        $Jssor$.$RemoveElement(_ItemPrototype, elmt);

        _Steps = _Options.$Steps || 1;
        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _Orientation = _Options.$Orientation - 1;

        if (_Options.$Scale == false) {
            $Jssor$.$Attribute(elmt, "noscale", true);
        }
    }
};

var $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function (arrowLeft, arrowRight, options, containerWidth, containerHeight) {
    var self = this;
    $JssorObject$.call(self);

    $JssorDebug$.$Execute(function () {

        if (!arrowLeft)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (!arrowRight)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (isNaN($Jssor$.$CssWidth(arrowLeft))) {
            $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
        }

        if (isNaN($Jssor$.$CssWidth(arrowRight))) {
            $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
        }

        if (isNaN($Jssor$.$CssHeight(arrowLeft))) {
            $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
        }

        if (isNaN($Jssor$.$CssHeight(arrowRight))) {
            $JssorDebug$.$Fail("Height of 'arrow right' not specified.");
        }
    });

    var _Hide;
    var _Length;
    var _CurrentIndex;
    var _Options;
    var _Steps;
    var _ArrowWidth = $Jssor$.$CssWidth(arrowLeft);
    var _ArrowHeight = $Jssor$.$CssHeight(arrowLeft);

    function OnNavigationRequest(steps) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, steps, true);
    }

    function ShowArrows(hide) {
        $Jssor$.$ShowElement(arrowLeft, hide || !options.$Loop && _CurrentIndex == 0);
        $Jssor$.$ShowElement(arrowRight, hide || !options.$Loop && _CurrentIndex >= _Length - options.$DisplayPieces);

        _Hide = hide;
    }

    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        if (temp) {
            _CurrentIndex = virtualIndex;
        }
        else {
            _CurrentIndex = index;

            ShowArrows(_Hide);
        }
        //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
    };

    self.$Show = ShowArrows;

    var _Located;
    self.$Relocate = function (conainerWidth, containerHeight) {
        if (!_Located || _Options.$Scale == false) {

            var containerWidth = $Jssor$.$ParentNode(arrowLeft).clientWidth;
            var containerHeight = $Jssor$.$ParentNode(arrowLeft).clientHeight;

            if (_Options.$AutoCenter & 1) {
                $Jssor$.$CssLeft(arrowLeft, (containerWidth - _ArrowWidth) / 2);
                $Jssor$.$CssLeft(arrowRight, (containerWidth - _ArrowWidth) / 2);
            }

            if (_Options.$AutoCenter & 2) {
                $Jssor$.$CssTop(arrowLeft, (containerHeight - _ArrowHeight) / 2);
                $Jssor$.$CssTop(arrowRight, (containerHeight - _ArrowHeight) / 2);
            }

            _Located = true;
        }
    };

    var _Initialized;
    self.$Reset = function (length) {
        _Length = length;
        _CurrentIndex = 0;

        if (!_Initialized) {

            $Jssor$.$AddEvent(arrowLeft, "click", $Jssor$.$CreateCallback(null, OnNavigationRequest, -_Steps));
            $Jssor$.$AddEvent(arrowRight, "click", $Jssor$.$CreateCallback(null, OnNavigationRequest, _Steps));

            $Jssor$.$Buttonize(arrowLeft);
            $Jssor$.$Buttonize(arrowRight);

            _Initialized = true;
        }

        //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorArrowNavigator Constructor
    {
        self.$Options = _Options = $Jssor$.$Extend({
            $Steps: 1
        }, options);

        _Steps = _Options.$Steps;

        if (_Options.$Scale == false) {
            $Jssor$.$Attribute(arrowLeft, "noscale", true);
            $Jssor$.$Attribute(arrowRight, "noscale", true);
        }
    }
};

//$JssorThumbnailNavigator$
var $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function (elmt, options) {
    var _Self = this;
    var _Length;
    var _Count;
    var _CurrentIndex;
    var _Options;
    var _NavigationItems = [];

    var _Width;
    var _Height;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _PrototypeWidth;
    var _PrototypeHeight;
    var _DisplayPieces;

    var _Slider;
    var _CurrentMouseOverIndex = -1;

    var _SlidesContainer;
    var _ThumbnailPrototype;

    $JssorObject$.call(_Self);
    elmt = $Jssor$.$GetElement(elmt);

    function NavigationItem(item, index) {
        var self = this;
        var _Wrapper;
        var _Button;
        var _Thumbnail;

        function Highlight(mouseStatus) {
            _Button.$Selected(_CurrentIndex == index);
        }

        function OnNavigationRequest(event) {
            if (!_Slider.$LastDragSucceded()) {
                var tail = _Lanes - index % _Lanes;
                var slideVirtualIndex = _Slider.$GetVirtualIndex((index + tail) / _Lanes - 1);
                var itemVirtualIndex = slideVirtualIndex * _Lanes + _Lanes - tail;
                _Self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, itemVirtualIndex);
            }

            //$JssorDebug$.$Log("navigation request");
        }

        $JssorDebug$.$Execute(function () {
            self.$Wrapper = undefined;
        });

        self.$Index = index;

        self.$Highlight = Highlight;

        //NavigationItem Constructor
        {
            _Thumbnail = item.$Thumb || item.$Image || $Jssor$.$CreateDiv();
            self.$Wrapper = _Wrapper = $Jssor$.$BuildElement(_ThumbnailPrototype, "thumbnailtemplate", _Thumbnail, true);

            _Button = $Jssor$.$Buttonize(_Wrapper);
            if (_Options.$ActionMode & 1)
                $Jssor$.$AddEvent(_Wrapper, "click", OnNavigationRequest);
            if (_Options.$ActionMode & 2)
                $Jssor$.$AddEvent(_Wrapper, "mouseover", $Jssor$.$MouseOverOutFilter(OnNavigationRequest, _Wrapper));
        }
    }

    _Self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    _Self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        var oldIndex = _CurrentIndex;
        _CurrentIndex = index;
        if (oldIndex != -1)
            _NavigationItems[oldIndex].$Highlight();
        _NavigationItems[index].$Highlight();

        if (!temp) {
            _Slider.$PlayTo(_Slider.$GetVirtualIndex(Math.floor(virtualIndex / _Lanes)));
        }
    };

    _Self.$Show = function (hide) {
        $Jssor$.$ShowElement(elmt, hide);
    };

    _Self.$Relocate = $Jssor$.$EmptyFunction;

    var _Initialized;
    _Self.$Reset = function (length, items, loadingContainer) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(_Length / _Lanes);
            _CurrentIndex = -1;
            _DisplayPieces = Math.min(_DisplayPieces, items.length);

            var horizontal = _Options.$Orientation & 1;

            var slideWidth = _PrototypeWidth + (_PrototypeWidth + _SpacingX) * (_Lanes - 1) * (1 - horizontal);
            var slideHeight = _PrototypeHeight + (_PrototypeHeight + _SpacingY) * (_Lanes - 1) * horizontal;

            var slidesContainerWidth = slideWidth + (slideWidth + _SpacingX) * (_DisplayPieces - 1) * horizontal;
            var slidesContainerHeight = slideHeight + (slideHeight + _SpacingY) * (_DisplayPieces - 1) * (1 - horizontal);

            $Jssor$.$CssPosition(_SlidesContainer, "absolute");
            $Jssor$.$CssOverflow(_SlidesContainer, "hidden");
            if (_Options.$AutoCenter & 1) {
                $Jssor$.$CssLeft(_SlidesContainer, (_Width - slidesContainerWidth) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $Jssor$.$CssTop(_SlidesContainer, (_Height - slidesContainerHeight) / 2);
            }
            //$JssorDebug$.$Execute(function () {
            //    if (!_Options.$AutoCenter) {
            //        var slidesContainerTop = $Jssor$.$CssTop(_SlidesContainer);
            //        var slidesContainerLeft = $Jssor$.$CssLeft(_SlidesContainer);

            //        if (isNaN(slidesContainerTop)) {
            //            $JssorDebug$.$Fail("Position 'top' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified in pixel (like <div u=\"slides\" style=\"top: 0px;\">)");
            //        }

            //        if (isNaN(slidesContainerLeft)) {
            //            $JssorDebug$.$Fail("Position 'left' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified in pixel (like <div u=\"slides\" style=\"left: 0px;\">)");
            //        }
            //    }
            //});
            $Jssor$.$CssWidth(_SlidesContainer, slidesContainerWidth);
            $Jssor$.$CssHeight(_SlidesContainer, slidesContainerHeight);

            var slideItemElmts = [];
            $Jssor$.$Each(items, function (item, index) {
                var navigationItem = new NavigationItem(item, index);
                var navigationItemWrapper = navigationItem.$Wrapper;

                var columnIndex = Math.floor(index / _Lanes);
                var laneIndex = index % _Lanes;

                $Jssor$.$CssLeft(navigationItemWrapper, (_PrototypeWidth + _SpacingX) * laneIndex * (1 - horizontal));
                $Jssor$.$CssTop(navigationItemWrapper, (_PrototypeHeight + _SpacingY) * laneIndex * horizontal);

                if (!slideItemElmts[columnIndex]) {
                    slideItemElmts[columnIndex] = $Jssor$.$CreateDiv();
                    $Jssor$.$AppendChild(_SlidesContainer, slideItemElmts[columnIndex]);
                }

                $Jssor$.$AppendChild(slideItemElmts[columnIndex], navigationItemWrapper);

                _NavigationItems.push(navigationItem);
            });

            var thumbnailSliderOptions = $Jssor$.$Extend({
                $HWA: false,
                $AutoPlay: false,
                $NaviQuitDrag: false,
                $SlideWidth: slideWidth,
                $SlideHeight: slideHeight,
                $SlideSpacing: _SpacingX * horizontal + _SpacingY * (1 - horizontal),
                $MinDragOffsetToSlide: 12,
                $SlideDuration: 200,
                $PauseOnHover: 1,
                $PlayOrientation: _Options.$Orientation,
                $DragOrientation: _Options.$DisableDrag ? 0 : _Options.$Orientation
            }, _Options);

            _Slider = new $JssorSlider$(elmt, thumbnailSliderOptions);

            _Initialized = true;
        }

        //_Self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorThumbnailNavigator Constructor
    {
        _Self.$Options = _Options = $Jssor$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, options);

        //going to use $Rows instead of $Lanes
        if (_Options.$Rows != undefined)
            _Options.$Lanes = _Options.$Rows;

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $Jssor$.$Extend({
                $Lanes: undefined,
                $Width: undefined,
                $Height: undefined
            }, _Options);
        });

        _Width = $Jssor$.$CssWidth(elmt);
        _Height = $Jssor$.$CssHeight(elmt);

        $JssorDebug$.$Execute(function () {
            if (!_Width)
                $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified.");
            if (!_Height)
                $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.");
        });

        _SlidesContainer = $Jssor$.$FindChild(elmt, "slides", true);
        _ThumbnailPrototype = $Jssor$.$FindChild(_SlidesContainer, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ThumbnailPrototype)
                $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.");
        });

        _PrototypeWidth = $Jssor$.$CssWidth(_ThumbnailPrototype);
        _PrototypeHeight = $Jssor$.$CssHeight(_ThumbnailPrototype);

        $Jssor$.$RemoveElement(_ThumbnailPrototype, _SlidesContainer);

        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _DisplayPieces = _Options.$DisplayPieces;

        if (_Options.$Scale == false) {
            $Jssor$.$Attribute(elmt, "noscale", true);
        }
    }
};

//$JssorCaptionSliderBase$
function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0);
    this.$Revert = $Jssor$.$EmptyFunction;
}

var $JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function (container, captionSlideOptions, playIn) {
    $JssorDebug$.$Execute(function () {
        if (!captionSlideOptions.$CaptionTransitions) {
            $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.");
        }
    });

    var _Self = this;
    var _ImmediateOutCaptionHanger;
    var _PlayMode = playIn ? captionSlideOptions.$PlayInMode : captionSlideOptions.$PlayOutMode;

    var _CaptionTransitions = captionSlideOptions.$CaptionTransitions;
    var _CaptionTuningFetcher = { $Transition: "t", $Delay: "d", $Duration: "du", x: "x", y: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", $BeginTime: "b" };
    var _CaptionTuningTransfer = {
        $Default: function (value, tuningValue) {
            if (!isNaN(tuningValue.$Value))
                value = tuningValue.$Value;
            else
                value *= tuningValue.$Percent;

            return value;
        },
        $Opacity: function (value, tuningValue) {
            return this.$Default(value - 1, tuningValue);
        }
    };
    _CaptionTuningTransfer.$Zoom = _CaptionTuningTransfer.$Opacity;

    $JssorAnimator$.call(_Self, 0, 0);

    function GetCaptionItems(element, level) {

        var itemsToPlay = [];
        var lastTransitionName;
        var namedTransitions = [];
        var namedTransitionOrders = [];

        function FetchRawTransition(captionElmt, index) {
            var rawTransition = {};

            $Jssor$.$Each(_CaptionTuningFetcher, function (fetchAttribute, fetchProperty) {
                var attributeValue = $Jssor$.$AttributeEx(captionElmt, fetchAttribute + (index || ""));
                if (attributeValue) {
                    var propertyValue = {};

                    if (fetchAttribute == "t") {
                        propertyValue.$Value = attributeValue;
                    }
                    else if (attributeValue.indexOf("%") + 1)
                        propertyValue.$Percent = $Jssor$.$ParseFloat(attributeValue) / 100;
                    else
                        propertyValue.$Value = $Jssor$.$ParseFloat(attributeValue);

                    rawTransition[fetchProperty] = propertyValue;
                }
            });

            return rawTransition;
        }

        function GetRandomTransition() {
            return _CaptionTransitions[Math.floor(Math.random() * _CaptionTransitions.length)];
        }

        function EvaluateCaptionTransition(transitionName) {

            var transition;

            if (transitionName == "*") {
                transition = GetRandomTransition();
            }
            else if (transitionName) {

                //indexed transition allowed, just the same as named transition
                var tempTransition = _CaptionTransitions[$Jssor$.$ParseInt(transitionName)] || _CaptionTransitions[transitionName];

                if ($Jssor$.$IsArray(tempTransition)) {
                    if (transitionName != lastTransitionName) {
                        lastTransitionName = transitionName;
                        namedTransitionOrders[transitionName] = 0;

                        namedTransitions[transitionName] = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                    }
                    else {
                        namedTransitionOrders[transitionName]++;
                    }

                    tempTransition = namedTransitions[transitionName];

                    if ($Jssor$.$IsArray(tempTransition)) {
                        tempTransition = tempTransition.length && tempTransition[namedTransitionOrders[transitionName] % tempTransition.length];

                        if ($Jssor$.$IsArray(tempTransition)) {
                            //got transition from array level 3, random for all captions
                            tempTransition = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                        }
                        //else {
                        //    //got transition from array level 2, in sequence for all adjacent captions with same name specified
                        //    transition = tempTransition;
                        //}
                    }
                    //else {
                    //    //got transition from array level 1, random but same for all adjacent captions with same name specified
                    //    transition = tempTransition;
                    //}
                }
                //else {
                //    //got transition directly from a simple transition object
                //    transition = tempTransition;
                //}

                transition = tempTransition;

                if ($Jssor$.$IsString(transition))
                    transition = EvaluateCaptionTransition(transition);
            }

            return transition;
        }

        var captionElmts = $Jssor$.$Children(element);
        $Jssor$.$Each(captionElmts, function (captionElmt, i) {

            var transitionsWithTuning = [];
            transitionsWithTuning.$Elmt = captionElmt;
            var isCaption = $Jssor$.$AttributeEx(captionElmt, "u") == "caption";

            $Jssor$.$Each(playIn ? [0, 3] : [2], function (j, k) {

                if (isCaption) {
                    var transition;
                    var rawTransition;

                    if (j != 2 || !$Jssor$.$AttributeEx(captionElmt, "t3")) {
                        rawTransition = FetchRawTransition(captionElmt, j);

                        if (j == 2 && !rawTransition.$Transition) {
                            rawTransition.$Delay = rawTransition.$Delay || { $Value: 0 };
                            rawTransition = $Jssor$.$Extend(FetchRawTransition(captionElmt, 0), rawTransition);
                        }
                    }

                    if (rawTransition && rawTransition.$Transition) {

                        transition = EvaluateCaptionTransition(rawTransition.$Transition.$Value);

                        if (transition) {

                            //var transitionWithTuning = $Jssor$.$Extend({ $Delay: 0, $ScaleHorizontal: 1, $ScaleVertical: 1 }, transition);
                            var transitionWithTuning = $Jssor$.$Extend({ $Delay: 0 }, transition);

                            $Jssor$.$Each(rawTransition, function (rawPropertyValue, propertyName) {
                                var tuningPropertyValue = (_CaptionTuningTransfer[propertyName] || _CaptionTuningTransfer.$Default).apply(_CaptionTuningTransfer, [transitionWithTuning[propertyName], rawTransition[propertyName]]);
                                if (!isNaN(tuningPropertyValue))
                                    transitionWithTuning[propertyName] = tuningPropertyValue;
                            });

                            if (!k) {
                                if (rawTransition.$BeginTime)
                                    transitionWithTuning.$BeginTime = rawTransition.$BeginTime.$Value || 0;
                                else if ((_PlayMode) & 2)
                                    transitionWithTuning.$BeginTime = 0;
                            }
                        }
                    }

                    transitionsWithTuning.push(transitionWithTuning);
                }

                if ((level % 2) && !k) {
                    transitionsWithTuning.$Children = GetCaptionItems(captionElmt, level + 1);
                }
            });

            itemsToPlay.push(transitionsWithTuning);
        });

        return itemsToPlay;
    }

    function CreateAnimator(item, transition, immediateOut) {

        var animatorOptions = {
            $Easing: transition.$Easing,
            $Round: transition.$Round,
            $During: transition.$During,
            $Reverse: playIn && !immediateOut
        };

        $JssorDebug$.$Execute(function () {
            animatorOptions.$CaptionAnimator = true;
        });

        var captionItem = item;
        var captionParent = $Jssor$.$ParentNode(item);

        var captionItemWidth = $Jssor$.$CssWidth(captionItem);
        var captionItemHeight = $Jssor$.$CssHeight(captionItem);
        var captionParentWidth = $Jssor$.$CssWidth(captionParent);
        var captionParentHeight = $Jssor$.$CssHeight(captionParent);

        var fromStyles = {};
        var difStyles = {};
        var scaleClip = transition.$ScaleClip || 1;

        //Opacity
        if (transition.$Opacity) {
            difStyles.$Opacity = 1 - transition.$Opacity;
        }

        animatorOptions.$OriginalWidth = captionItemWidth;
        animatorOptions.$OriginalHeight = captionItemHeight;

        //Transform
        if (transition.$Zoom || transition.$Rotate) {
            difStyles.$Zoom = (transition.$Zoom || 2) - 2;

            if ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) {
                difStyles.$Zoom = Math.min(difStyles.$Zoom, 1);
            }

            fromStyles.$Zoom = 1;

            var rotate = transition.$Rotate || 0;

            difStyles.$Rotate = rotate * 360;
            fromStyles.$Rotate = 0;
        }
            //Clip
        else if (transition.$Clip) {
            var fromStyleClip = { $Top: 0, $Right: captionItemWidth, $Bottom: captionItemHeight, $Left: 0 };
            var toStyleClip = $Jssor$.$Extend({}, fromStyleClip);

            var blockOffset = toStyleClip.$Offset = {};

            var topBenchmark = transition.$Clip & 4;
            var bottomBenchmark = transition.$Clip & 8;
            var leftBenchmark = transition.$Clip & 1;
            var rightBenchmark = transition.$Clip & 2;

            if (topBenchmark && bottomBenchmark) {
                blockOffset.$Top = captionItemHeight / 2 * scaleClip;
                blockOffset.$Bottom = -blockOffset.$Top;
            }
            else if (topBenchmark)
                blockOffset.$Bottom = -captionItemHeight * scaleClip;
            else if (bottomBenchmark)
                blockOffset.$Top = captionItemHeight * scaleClip;

            if (leftBenchmark && rightBenchmark) {
                blockOffset.$Left = captionItemWidth / 2 * scaleClip;
                blockOffset.$Right = -blockOffset.$Left;
            }
            else if (leftBenchmark)
                blockOffset.$Right = -captionItemWidth * scaleClip;
            else if (rightBenchmark)
                blockOffset.$Left = captionItemWidth * scaleClip;

            animatorOptions.$Move = transition.$Move;
            difStyles.$Clip = toStyleClip;
            fromStyles.$Clip = fromStyleClip;
        }

        //Fly
        {
            var toLeft = 0;
            var toTop = 0;

            if (transition.x)
                toLeft -= captionParentWidth * transition.x;

            if (transition.y)
                toTop -= captionParentHeight * transition.y;

            if (toLeft || toTop || animatorOptions.$Move) {
                difStyles.$Left = toLeft;
                difStyles.$Top = toTop;
            }
        }

        //duration
        var duration = transition.$Duration;

        fromStyles = $Jssor$.$Extend(fromStyles, $Jssor$.$GetStyles(captionItem, difStyles));

        animatorOptions.$Setter = $Jssor$.$StyleSetterEx();

        return new $JssorAnimator$(transition.$Delay, duration, animatorOptions, captionItem, fromStyles, difStyles);
    }

    function CreateAnimators(streamLineLength, captionItems) {

        $Jssor$.$Each(captionItems, function (captionItem, i) {

            $JssorDebug$.$Execute(function () {
                if (captionItem.length) {
                    var top = $Jssor$.$CssTop(captionItem.$Elmt);
                    var left = $Jssor$.$CssLeft(captionItem.$Elmt);
                    var width = $Jssor$.$CssWidth(captionItem.$Elmt);
                    var height = $Jssor$.$CssHeight(captionItem.$Elmt);

                    var error = null;

                    if (isNaN(top))
                        error = "Style 'top' for caption not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(left))
                        error = "Style 'left' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(width))
                        error = "Style 'width' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";
                    else if (isNaN(height))
                        error = "Style 'height' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.";

                    if (error)
                        $JssorDebug$.$Error("Caption " + (i + 1) + " definition error, \r\n" + error + "\r\n" + captionItem.$Elmt.outerHTML);
                }
            });

            var animator;
            var captionElmt = captionItem.$Elmt;
            var transition = captionItem[0];
            var transition3 = captionItem[1];

            if (transition) {

                animator = CreateAnimator(captionElmt, transition);
                streamLineLength = animator.$Locate(transition.$BeginTime == undefined ? streamLineLength : transition.$BeginTime, 1);
            }

            streamLineLength = CreateAnimators(streamLineLength, captionItem.$Children);

            if (transition3) {
                var animator3 = CreateAnimator(captionElmt, transition3, 1);
                animator3.$Locate(streamLineLength, 1);
                _Self.$Combine(animator3);
                _ImmediateOutCaptionHanger.$Combine(animator3);
            }

            if (animator)
                _Self.$Combine(animator);
        });

        return streamLineLength;
    }

    _Self.$Revert = function () {
        _Self.$GoToPosition(_Self.$GetPosition_OuterEnd() * (playIn || 0));
        _ImmediateOutCaptionHanger.$GoToPosition(0);
    };

    //Constructor
    {
        _ImmediateOutCaptionHanger = new $JssorAnimator$(0, 0);

        CreateAnimators(0, _PlayMode ? GetCaptionItems(container, 1) : []);
    }
};

var $JssorCaptionSlideo$ = function (container, captionSlideoOptions, playIn) {
    $JssorDebug$.$Execute(function () {
        if (!captionSlideoOptions.$CaptionTransitions) {
            $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' not specified.");
        }
        else if (!$Jssor$.$IsArray(captionSlideoOptions.$CaptionTransitions)) {
            $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' is not an array.");
        }
    });

    var _This = this;

    var _Easings;
    var _TransitionConverter = {};
    var _CaptionTransitions = captionSlideoOptions.$CaptionTransitions;

    $JssorAnimator$.call(_This, 0, 0);

    function ConvertTransition(transition, isEasing) {
        $Jssor$.$Each(transition, function (property, name) {
            var performName = _TransitionConverter[name];
            if (performName) {
                if (isEasing || name == "e") {
                    if ($Jssor$.$IsNumeric(property)) {
                        property = _Easings[property];
                    }
                    else if ($Jssor$.$IsPlainObject(property)) {
                        ConvertTransition(property, true);
                    }
                }

                transition[performName] = property;
                delete transition[name];
            }
        });
    }

    function GetCaptionItems(element, level) {

        var itemsToPlay = [];

        var captionElmts = $Jssor$.$Children(element);
        $Jssor$.$Each(captionElmts, function (captionElmt, i) {
            var isCaption = $Jssor$.$AttributeEx(captionElmt, "u") == "caption";
            if (isCaption) {
                var transitionName = $Jssor$.$AttributeEx(captionElmt, "t");
                var transition = _CaptionTransitions[$Jssor$.$ParseInt(transitionName)] || _CaptionTransitions[transitionName];

                var transitionName2 = $Jssor$.$AttributeEx(captionElmt, "t2");
                var transition2 = _CaptionTransitions[$Jssor$.$ParseInt(transitionName2)] || _CaptionTransitions[transitionName2];

                var itemToPlay = { $Elmt: captionElmt, $Transition: transition, $Transition2: transition2 };
                if (level < 3) {
                    itemsToPlay.concat(GetCaptionItems(captionElmt, level + 1));
                }
                itemsToPlay.push(itemToPlay);
            }
        });

        return itemsToPlay;
    }

    function CreateAnimator(captionElmt, transitions, lastStyles, forIn) {

        $Jssor$.$Each(transitions, function (transition) {
            ConvertTransition(transition);

            var animatorOptions = {
                $Easing: transition.$Easing,
                $Round: transition.$Round,
                $During: transition.$During,
                $Setter: $Jssor$.$StyleSetterEx()
            };

            var fromStyles = $Jssor$.$Extend($Jssor$.$GetStyles(captionItem, transition), lastStyles);

            var animator = new $JssorAnimator$(transition.b || 0, transition.d, animatorOptions, captionElmt, fromStyles, transition);

            !forIn == !playIn && _This.$Combine(animator);

            var castOptions;
            lastStyles = $Jssor$.$Extend(lastStyles, $Jssor$.$Cast(fromStyles, transition, 1, animatorOptions.$Easing, animatorOptions.$During, animatorOptions.$Round, animatorOptions, castOptions));
        });

        return lastStyles;
    }

    function CreateAnimators(captionItems) {

        $Jssor$.$Each(captionItems, function (captionItem, i) {

            $JssorDebug$.$Execute(function () {
                if (captionItem.length) {
                    var top = $Jssor$.$CssTop(captionItem.$Elmt);
                    var left = $Jssor$.$CssLeft(captionItem.$Elmt);
                    var width = $Jssor$.$CssWidth(captionItem.$Elmt);
                    var height = $Jssor$.$CssHeight(captionItem.$Elmt);

                    var error = null;

                    if (isNaN(top))
                        error = "style 'top' not specified";
                    else if (isNaN(left))
                        error = "style 'left' not specified";
                    else if (isNaN(width))
                        error = "style 'width' not specified";
                    else if (isNaN(height))
                        error = "style 'height' not specified";

                    if (error)
                        throw new Error("Caption " + (i + 1) + " definition error, " + error + ".\r\n" + captionItem.$Elmt.outerHTML);
                }
            });

            var captionElmt = captionItem.$Elmt;

            var captionItemWidth = $Jssor$.$CssWidth(captionItem);
            var captionItemHeight = $Jssor$.$CssHeight(captionItem);
            var captionParentWidth = $Jssor$.$CssWidth(captionParent);
            var captionParentHeight = $Jssor$.$CssHeight(captionParent);

            var lastStyles = { $Zoom: 1, $Rotate: 0, $Clip: { $Top: 0, $Right: captionItemWidth, $Bottom: captionItemHeight, $Left: 0 } };

            lastStyles = CreateAnimator(captionElmt, captionItem.$Transition, lastStyles, true);
            CreateAnimator(captionElmt, captionItem.$Transition2, lastStyles, false);
        });
    }

    _This.$Revert = function () {
        _This.$GoToPosition(-1, true);
    }

    //Constructor
    {
        _Easings = [
            $JssorEasing$.$EaseSwing,
            $JssorEasing$.$EaseLinear,
            $JssorEasing$.$EaseInQuad,
            $JssorEasing$.$EaseOutQuad,
            $JssorEasing$.$EaseInOutQuad,
            $JssorEasing$.$EaseInCubic,
            $JssorEasing$.$EaseOutCubic,
            $JssorEasing$.$EaseInOutCubic,
            $JssorEasing$.$EaseInQuart,
            $JssorEasing$.$EaseOutQuart,
            $JssorEasing$.$EaseInOutQuart,
            $JssorEasing$.$EaseInQuint,
            $JssorEasing$.$EaseOutQuint,
            $JssorEasing$.$EaseInOutQuint,
            $JssorEasing$.$EaseInSine,
            $JssorEasing$.$EaseOutSine,
            $JssorEasing$.$EaseInOutSine,
            $JssorEasing$.$EaseInExpo,
            $JssorEasing$.$EaseOutExpo,
            $JssorEasing$.$EaseInOutExpo,
            $JssorEasing$.$EaseInCirc,
            $JssorEasing$.$EaseOutCirc,
            $JssorEasing$.$EaseInOutCirc,
            $JssorEasing$.$EaseInElastic,
            $JssorEasing$.$EaseOutElastic,
            $JssorEasing$.$EaseInOutElastic,
            $JssorEasing$.$EaseInBack,
            $JssorEasing$.$EaseOutBack,
            $JssorEasing$.$EaseInOutBack,
            $JssorEasing$.$EaseInBounce,
            $JssorEasing$.$EaseOutBounce,
            $JssorEasing$.$EaseInOutBounce//,
            //$JssorEasing$.$EaseGoBack,
            //$JssorEasing$.$EaseInWave,
            //$JssorEasing$.$EaseOutWave,
            //$JssorEasing$.$EaseOutJump,
            //$JssorEasing$.$EaseInJump
        ];

        var translater = {
            $Top: "y",          //top
            $Left: "x",         //left
            $Bottom: "m",       //bottom
            $Right: "t",        //right
            $Zoom: "s",         //zoom/scale
            $Rotate: "r",       //rotate
            $Opacity: "o",      //opacity
            $Easing: "e",       //easing
            $ZIndex: "i",       //zindex
            $Round: "rd",       //round
            $During: "du",      //during
            $Duration: "d"//,   //duration
            //$Begin: "b"
        };

        $Jssor$.$Each(translater, function (prop, newProp) {
            _TransitionConverter[prop] = newProp;
        });

        CreateAnimators(GetCaptionItems(container, 1));
    }
};

//Event Table

//$EVT_CLICK = 21;			    function(slideIndex[, event])
//$EVT_DRAG_START = 22;		    function(position[, virtualPosition, event])
//$EVT_DRAG_END = 23;		    function(position, startPosition[, virtualPosition, virtualStartPosition, event])
//$EVT_SWIPE_START = 24;		function(position[, virtualPosition])
//$EVT_SWIPE_END = 25;		    function(position[, virtualPosition])

//$EVT_LOAD_START = 26;			function(slideIndex)
//$EVT_LOAD_END = 27;			function(slideIndex)

//$EVT_POSITION_CHANGE = 202;	function(position, fromPosition[, virtualPosition, virtualFromPosition])
//$EVT_PARK = 203;			    function(slideIndex, fromIndex)

//$EVT_PROGRESS_CHANGE = 208;	function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])
//$EVT_STATE_CHANGE = 209;	    function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])

//$EVT_ROLLBACK_START = 210;	function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])
//$EVT_ROLLBACK_END = 211;	    function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])

//$EVT_SLIDESHOW_START = 206;   function(slideIndex[, progressBegin, slideshowBegin, slideshowEnd, progressEnd])
//$EVT_SLIDESHOW_END = 207;     function(slideIndex[, progressBegin, slideshowBegin, slideshowEnd, progressEnd])

//http://www.jssor.com/development/reference-api.html
 
 
 
									
									
									// ---------		SLIDER BEGINS HERE 		------------		//
 
 
 
 
        jQuery(document).ready(function ($) {
            //Reference http://www.jssor.com/development/slider-with-slideshow-jquery.html
            //Reference http://www.jssor.com/development/tool-slideshow-transition-viewer.html

            var _SlideshowTransitions = [
            //Collapse Random
            { $Duration: 1000, $Delay: 80, $Cols: 10, $Rows: 4, $Clip: 15, $SlideOut: true, $Easing: $JssorEasing$.$EaseOutQuad }

            //Fade in LR Chess
            , { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true }

            //Rotate VDouble+ out
            , { $Duration: 1000, x: -1, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.85 } }

            ////Swing Inside in Stairs
            //, { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 1.3, $Top: 2.5} }

            //Zoom HDouble+ out
            , { $Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }

            ////Dodge Pet Inside in Stairs
            //, { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 0.8, $Top: 2.5} }

            //Rotate Zoom+ out BL
            , { $Duration: 1200, x: 4, y: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8 } }

            //Dodge Dance Inside in Random
            , { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } }

            //Rotate VFork+ out
            , { $Duration: 1200, x: -3, y: 1, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } }

            //Clip and Chess in
            , { $Duration: 1200, y: -1, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Top: [0.5, 0.5], $Clip: [0, 0.5] }, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 12 }, $ScaleClip: 0.5 }

            ////Swing Inside in Swirl
            //, { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 1.3, $Top: 2.5} }

            ////Rotate Zoom+ out
            //, { $Duration: 1200, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Zoom: $JssorEasing$.$EaseInCubic, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.7} }

            ////Dodge Pet Inside in ZigZag
            //, { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 0.8, $Top: 2.5} }

            //Rotate Zoom- out TL
            , { $Duration: 1200, x: 0.5, y: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } }

            //Rotate Zoom- in BR
            , { $Duration: 1200, x: -0.6, y: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $Opacity: 2, $Round: { $Rotate: 0.5 } }

            // Wave out Eagle
            , { $Duration: 1500, y: -0.5, $Delay: 60, $Cols: 24, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Easing: $JssorEasing$.$EaseInWave, $Round: { $Top: 1.5 } }

            //Expand Stairs
            , { $Duration: 1000, $Delay: 30, $Cols: 10, $Rows: 4, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: $JssorEasing$.$EaseInQuad }

            //Fade Clip out H
            , { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $JssorEasing$.$EaseOutCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }

            ////Dodge Pet Inside in Random Chess
            //, { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 80, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseLinear }, $Round: { $Left: 0.8, $Top: 2.5} }
            ];

            //Reference http://www.jssor.com/development/slider-with-caption-jquery.html
            //Reference http://www.jssor.com/development/reference-ui-definition.html#captiondefinition
            //Reference http://www.jssor.com/development/tool-caption-transition-viewer.html

            var _CaptionTransitions = [];
            _CaptionTransitions["L"] = { $Duration: 900, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["R"] = { $Duration: 900, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["T"] = { $Duration: 900, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["B"] = { $Duration: 900, y: -0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["TR"] = { $Duration: 900, x: -0.6, y: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine, $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };

            _CaptionTransitions["L|IB"] = { $Duration: 1200, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutBack }, $Opacity: 2 };
            _CaptionTransitions["R|IB"] = { $Duration: 1200, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutBack }, $Opacity: 2 };
            _CaptionTransitions["T|IB"] = { $Duration: 1200, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutBack }, $Opacity: 2 };

            _CaptionTransitions["CLIP|LR"] = { $Duration: 900, $Clip: 3, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
            _CaptionTransitions["CLIP|TB"] = { $Duration: 900, $Clip: 12, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
            _CaptionTransitions["CLIP|L"] = { $Duration: 900, $Clip: 1, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };

            _CaptionTransitions["MCLIP|R"] = { $Duration: 900, $Clip: 2, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
            _CaptionTransitions["MCLIP|T"] = { $Duration: 900, $Clip: 4, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };

            _CaptionTransitions["WV|B"] = { $Duration: 1200, x: -0.2, y: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Round: { $Left: 1.5} };

            _CaptionTransitions["TORTUOUS|VB"] = { $Duration: 1800, y: -0.2, $Zoom: 1, $Easing: { $Top: $JssorEasing$.$EaseOutWave, $Zoom: $JssorEasing$.$EaseOutCubic }, $Opacity: 2, $During: { $Top: [0, 0.7] }, $Round: { $Top: 1.3} };

            _CaptionTransitions["LISTH|R"] = { $Duration: 1500, x: -0.8, $Clip: 1, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleClip: 0.8, $Opacity: 2, $During: { $Left: [0.4, 0.6], $Clip: [0, 0.4], $Opacity: [0.4, 0.6]} };

            _CaptionTransitions["RTT|360"] = { $Duration: 900, $Rotate: 1, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2 };
            _CaptionTransitions["RTT|10"] = { $Duration: 900, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} };

            _CaptionTransitions["RTTL|BR"] = { $Duration: 900, x: -0.6, y: -0.6, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.8} };

            _CaptionTransitions["T|IE*IE"] = { $Duration: 1800, y: 0.8, $Zoom: 11, $Rotate: -1.5, $Easing: { $Top: $JssorEasing$.$EaseInOutElastic, $Zoom: $JssorEasing$.$EaseInElastic, $Rotate: $JssorEasing$.$EaseInOutElastic }, $Opacity: 2, $During: { $Zoom: [0, 0.8], $Opacity: [0, 0.7] }, $Round: { $Rotate: 0.5} };

            _CaptionTransitions["RTTS|R"] = { $Duration: 900, x: -0.6, $Zoom: 1, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $Opacity: 2, $Round: { $Rotate: 1.2} };
            _CaptionTransitions["RTTS|T"] = { $Duration: 900, y: 0.6, $Zoom: 1, $Rotate: 1, $Easing: { $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $Opacity: 2, $Round: { $Rotate: 1.2} };

            _CaptionTransitions["DDGDANCE|RB"] = { $Duration: 1800, x: -0.3, y: -0.3, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Zoom: $JssorEasing$.$EaseOutQuad }, $Opacity: 2, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 2.5} };
            _CaptionTransitions["ZMF|10"] = { $Duration: 900, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 };
            _CaptionTransitions["DDG|TR"] = { $Duration: 1200, x: -0.3, y: 0.3, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump }, $Opacity: 2, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 0.8} };

            _CaptionTransitions["FLTTR|R"] = { $Duration: 900, x: -0.2, y: -0.1, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $Opacity: 2, $Round: { $Top: 1.3} };
            _CaptionTransitions["FLTTRWN|LT"] = { $Duration: 1800, x: 0.5, y: 0.2, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseInOutSine, $Top: $JssorEasing$.$EaseInWave, $Zoom: $JssorEasing$.$EaseInOutQuad }, $Opacity: 2, $During: { $Left: [0, 0.7], $Top: [0.1, 0.7] }, $Round: { $Top: 1.3} };

            _CaptionTransitions["ATTACK|BR"] = { $Duration: 1500, x: -0.1, y: -0.5, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $During: { $Left: [0.3, 0.7], $Top: [0, 0.7] }, $Round: { $Left: 1.3} };

            _CaptionTransitions["FADE"] = { $Duration: 900, $Opacity: 2 };

            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 2000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
                $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                    $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                    $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                    $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                    $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
                },

                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                },

                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                },

                $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 4,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 4,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$ScaleWidth(Math.max(Math.min(parentWidth, 980), 300));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
    
 
 
 
		
		
		
		
		
 //<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
switch(message.type) {
 case "colors-div": 
//	var divs = document.getElementsByClassName("cf item_wrapper"); 
var divs = document.getElementsByClassName("itemlist hotellist group");
 if(divs.length == 0) {
 alert("There are no any divs in the page.");
 } else {
 for(var i=0; i<divs.length; i++) {
console.log(5 + 6);
 var c = 'http://imgec.trivago.com/itemimages/10/20/102087_v4_mc.jpeg';
 var images = document.querySelectorAll(".js_slideout_trigger");
 var contents = document.querySelectorAll(".item_image js_item_image");
 var item_name= document.querySelectorAll(".item_name");
var distance= document.querySelectorAll(".item_distance");
  var stars= document.querySelectorAll(".info");
    var main= document.querySelectorAll(".item_main");
// var y = Array.prototype.slice.call(v);
//var c = getElementsByTagName('img').src[0];
//var c = doc.getElementsByTagName('img')[0];

 //var img = new Image(); 
//divs[i].style.backgroundColor = message.color;
 //	img.src = "image.png";
 //http://www.galleria.co.ke/imgs/a02.png
 //divs[i].innerHTML = "<div style= 'margin-bottom:300px; '> asdad </div>"   ;
    //    divs[i].innerHTML = "  <div id='sliderb_container' style='position: absolute;margin-left: auto;margin-right: auto;left: 0;right: 0;width: 600px;       height: 300px; overflow: hidden;'>          <div u='loading' style='position: absolute; top: 0px; left: 0px;'>           <div style='filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block              background-color: #000; top: 0px; left: 0px;width: 100%;height:100%;'>       </div>          <div style='position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;                top: 0px; left: 0px;width: 100%;height:100%;'>          </div>       </div>       <div class='slide1' u='slides' style='cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px;            overflow: hidden;'>    </div>   <div u='thumbnavigator' style='position: absolute; bottom: 0px; left: 0px; height:45px; width:600px;'>         <div style='filter: alpha(opacity=40); opacity:0.4; position: absolute; display: block;               background-color: #000000; top: 0px; left: 0px; width: 100%; height: 100%;'>         </div>           <div u='slides'> <div u='prototype' style='POSITION: absolute; WIDTH: 600px; HEIGHT: 45px; TOP: 0; LEFT: 0;'> <div u='thumbnailtemplate' style='font-family: verdana; font-weight: normal; POSITION: absolute; WIDTH: 100%; HEIGHT: 100%; TOP: 0; LEFT: 0; color:#fff; line-height: 45px; font-size:20px; padding-left:10px;'></div> </div> </div> </div> <style> .jssorb01 { position: absolute; } .jssorb01 div, .jssorb01 div:hover, .jssorb01 .av { position: absolute; /* size of bullet elment */ width: 12px; height: 12px; filter: alpha(opacity=70); opacity: .7; overflow: hidden; cursor: pointer; border: #000 1px solid; } .jssorb01 div { background-color: gray; } .jssorb01 div:hover, .jssorb01 .av:hover { background-color: #d3d3d3; } .jssorb01 .av { background-color: #fff; } .jssorb01 .dn, .jssorb01 .dn:hover { background-color: #555555; } </style> <div u='navigator' class='jssorb01' style='bottom: 16px; right: 10px;'> <div u='prototype'></div> </div> <style> .jssora05l, .jssora05r { display: block; position: absolute; width: 40px; height: 40px; cursor: pointer; background: url('http://www.galleria.co.ke/imgs/a02.png') no-repeat; overflow: hidden; } .jssora05l { background-position: -10px -40px; } .jssora05r { background-position: -70px -40px; } .jssora05l:hover { background-position: -130px -40px; } .jssora05r:hover { background-position: -190px -40px; } .jssora05l.jssora05ldn { background-position: -250px -40px; } .jssora05r.jssora05rdn { background-position: -310px -40px; } </style> <span u='arrowleft' class='jssora05l' style='top: 123px; left: 8px;'> </span> <span u='arrowright' class='jssora05r' style='top: 123px; right: 8px;'> </span> <a style='display: none' href='http://www.jssor.com'>Bootstrap Slider</a> </div> <div style= 'margin-top:50px; '>  </div>  ;" 
	//  divs[i].innerHTML = " <style> .captionOrange, .captionBlack { color: #fff; font-size: 20px; line-height: 30px; text-align: center; border-radius: 4px; } .captionOrange { background: #EB5100; background-color: rgba(235, 81, 0, 0.6); } .captionBlack { font-size:16px; background: #000; background-color: rgba(0, 0, 0, 0.4); } a.captionOrange, A.captionOrange:active, A.captionOrange:visited { color: #ffffff; text-decoration: none; } a.captionOrange:hover { color: #eb5100; text-decoration: underline; background-color: #eeeeee; background-color: rgba(238, 238, 238, 0.7); } .bricon { background: url(../img/browser-icons.png); } </style>  <div id='slider1_container' style='position: relative; width: 980px; height: 380px; overflow: hidden;'>  <div u='loading' style='position: absolute; top: 0px; left: 0px;'> <div style='filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;  background-color: #000; top: 0px; left: 0px;width: 100%; height:100%;'> </div> <div style='position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;  top: 0px; left: 0px;width: 100%;height:100%;'> </div> </div>  <div u='slides' style='cursor: move; position: absolute; left: 0px; top: 0px; width: 980px; height: 380px; overflow: hidden;'>      <div u='any' style='position: absolute; display: block; top: 6px; right: 16px; width: 280px; height: 40px; z-index: 10;'>  <a class='share-icon share-facebook' target='_blank' href='http://www.facebook.com/sharer.php?u=http://jssor.com' title='Share on Facebook'></a> <a class='share-icon share-twitter' target='_blank' href='http://twitter.com/share?url=http://jssor.com&text=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive' title='Share on Twitter'></a> <a class='share-icon share-googleplus' target='_blank' href='https://plus.google.com/share?url=http://jssor.com' title='Share on Google Plus'></a> <a class='share-icon share-linkedin' target='_blank' href='http://www.linkedin.com/shareArticle?mini=true&url=http://jssor.com' title='Share on LinkedIn'></a> <a class='share-icon share-stumbleupon' target='_blank' href='http://www.stumbleupon.com/submit?url=http://jssor.com&title=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive' title='Share on StumbleUpon'></a> <a class='share-icon share-pinterest' target='_blank' href='http://pinterest.com/pin/create/button/?url=http://jssor.com&media=http://jssor.com/img/site/jssor.slider.jpg&description=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive' title='Share on Pinterst'></a> <a class='share-icon share-email' target='_blank' href='mailto:?Subject=Jssor%20Slider&Body=Highly%20recommended%20JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive%20http://jssor.com' title='Share by Email'></a> </div>  <style> @media only screen and (max-width: 980px) { .qr_code { display: none; } } </style> <img u='any' class='qr_code' src='../img/qr/jssor.com.png' style='position: absolute; width: 80px; height: 80px; bottom: 20px; right: 20px; opacity: .5; filter: alpha(opacity=50);' />  </div>   <style>  .jssorb03 { position: absolute; } .jssorb03 div, .jssorb03 div:hover, .jssorb03 .av { position: absolute;  width: 21px; height: 21px; text-align: center; line-height: 21px; color: white; font-size: 12px; background: url('http://lipeci.eu/img/b03.png') no-repeat; overflow: hidden; cursor: pointer; } .jssorb03 div { background-position: -5px -4px; } .jssorb03 div:hover, .jssorb03 .av:hover { background-position: -35px -4px; } .jssorb03 .av { background-position: -65px -4px; } .jssorb03 .dn, .jssorb03 .dn:hover { background-position: -95px -4px; } </style>  <div u='navigator' class='jssorb03' style='bottom: 16px; right: 6px;'>  <div u='prototype'><div u='numbertemplate'></div></div> </div>  <style>  .jssora20l, .jssora20r { display: block; position: absolute;  width: 55px; height: 55px; cursor: pointer; background: url('http://www.galleria.co.ke/imgs/a02.png') no-repeat; overflow: hidden; } .jssora20l { background-position: -3px -33px; } .jssora20r { background-position: -63px -33px; } .jssora20l:hover { background-position: -123px -33px; } .jssora20r:hover { background-position: -183px -33px; } .jssora20l.jssora20ldn { background-position: -243px -33px; } .jssora20r.jssora20rdn { background-position: -303px -33px; } </style>  <span u='arrowleft' class='jssora20l' style='top: 123px; left: 8px;'> </span>  <span u='arrowright' class='jssora20r' style='top: 123px; right: 8px;'> </span>  <a style='display: none' href='http://www.jssor.com'>Bootstrap Slider</a> </div>  " ;
  divs[i].innerHTML = "  <style> .captionOrange, .captionBlack { color: #fff; font-size: 20px; line-height: 30px; text-align: center; border-radius: 4px; } .captionOrange { background: #EB5100; background-color: rgba(235, 81, 0, 0.6); } .captionBlack { font-size:16px; background: #000; background-color: rgba(0, 0, 0, 0.4); } a.captionOrange, A.captionOrange:active, A.captionOrange:visited { color: #ffffff; text-decoration: none; } a.captionOrange:hover { color: #eb5100; text-decoration: underline; background-color: #eeeeee; background-color: rgba(238, 238, 238, 0.7); } .bricon { background: url(../img/browser-icons.png); } </style>  <div id='slider1_container' style='position: relative; width: 980px; height: 380px; overflow: hidden;'>   <div u='loading' style='position: absolute; top: 0px; left: 0px;'> <div style='filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;  background-color: #000; top: 0px; left: 0px;width: 100%; height:100%;'> </div> <div style='position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;  top: 0px; left: 0px;width: 100%;height:100%;'> </div> </div>   <div class='best' u='slides' style='cursor: move; position: absolute; left: 0px; top: 0px; width: 980px; height: 380px; overflow: hidden;'> vtumbl40px; }   <div u='any' style='position: absolute; display: block; top: 6px; right: 16px; width: 280px; height: 40px; z-index: 10;'>  <a class='share-icon share-facebook' target='_blank' href='http://www.facebook.com/sharer.php?u=http://jssor.com' title='Share on Facebook'></a> <a class='share-icon share-twitter' target='_blank' href='http://twitter.com/share?url=http://jssor.com&text=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive' title='Share on Twitter'></a> <a class='share-icon share-googleplus' target='_blank' href='https://plus.google.com/share?url=http://jssor.com' title='Share on Google Plus'></a> <a class='share-icon share-linkedin' target='_blank' href='http://www.linkedin.com/shareArticle?mini=true&url=http://jssor.com' title='Share on LinkedIn'></a> <a class='share-icon share-stumbleupon' target='_blank' href='http://www.stumbleupon.com/submit?url=http://jssor.com&title=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive' title='Share on StumbleUpon'></a> <a class='share-icon share-pinterest' target='_blank' href='http://pinterest.com/pin/create/button/?url=http://jssor.com&media=http://jssor.com/img/site/jssor.slider.jpg&description=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive' title='Share on Pinterst'></a> <a class='share-icon share-email' target='_blank' href='mailto:?Subject=Jssor%20Slider&Body=Highly%20recommended%20JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive%20http://jssor.com' title='Share by Email'></a> </div>  <style> @media only screen and (max-width: 980px) { .qr_code { display: none; } } </style> <img u='any' class='qr_code' src='../img/qr/jssor.com.png' style='position: absolute; width: 80px; height: 80px; bottom: 20px; right: 20px; opacity: .5; filter: alpha(opacity=50);' />  </div>  <style>  .jssorb03 { position: absolute; } .jssorb03 div, .jssorb03 div:hover, .jssorb03 .av { position: absolute;  width: 21px; height: 21px; text-align: center; line-height: 21px; color: white; font-size: 12px; background: url('http://lipeci.eu/img/b03.png') no-repeat; overflow: hidden; cursor: pointer; } .jssorb03 div { background-position: -5px -4px; } .jssorb03 div:hover, .jssorb03 .av:hover { background-position: -35px -4px; } .jssorb03 .av { background-position: -65px -4px; } .jssorb03 .dn, .jssorb03 .dn:hover { background-position: -95px -4px; } </style>  <div u='navigator' class='jssorb03' style='bottom: 16px; right: 6px;'> <!-- bullet navigator item prototype --> <div u='prototype'><div u='numbertemplate'></div></div> </div>  <style>  .jssora20l, .jssora20r { display: block; position: absolute;  width: 55px; height: 55px; cursor: pointer; background: url('http://lipeci.eu/img/a20.png') no-repeat; overflow: hidden; } .jssora20l { background-position: -3px -33px; } .jssora20r { background-position: -63px -33px; } .jssora20l:hover { background-position: -123px -33px; } .jssora20r:hover { background-position: -183px -33px; } .jssora20l.jssora20ldn { background-position: -243px -33px; } .jssora20r.jssora20rdn { background-position: -303px -33px; } </style>  <span u='arrowleft' class='jssora20l' style='top: 123px; left: 8px;'> </span>  <span u='arrowright' class='jssora20r' style='top: 123px; right: 8px;'> </span>  <a style='display: none' href='http://www.jssor.com'>Bootstrap Slider</a> </div> ";
	  //divs[i].innerHTML = "   < div id='sliderb_container' style='position: absolute;margin-left: auto;margin-right: auto;left: 0;right: 0;width: 600px;       height: 300px; overflow: hidden;'>          <div u='loading' style='position: absolute; top: 0px; left: 0px;'>           <div style='filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block              background-color: #000; top: 0px; left: 0px;width: 100%;height:100%;'>       </div>          <div style='position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;                top: 0px; left: 0px;width: 100%;height:100%;'>          </div>       </div>       <div  style='cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px;            overflow: hidden;'>          <div>              <img u=image  src='img/landscape/01.jpg' />               <div u='thumb'>Do you notice it is draggable by mouse/finger?</div>          </div>           <div>             <img u=image  src='img/landscape/01.jpg ' />              <div u='thumb'>Did you drag by either horizontal or vertical?</div>           </div>          <div>               <img u=image  src='img/landscape/01.jpg ' />              <div u='thumb'>Do you notice navigator responses when drag?</div>           </div>         <div>               <img u=image  src='img/landscape/01.jpg' />               <div u='thumb'>Do you notice arrow responses when click?</div>          </div>    </div>     <div u='thumbnavigator' style='position: absolute; bottom: 0px; left: 0px; height:45px; width:600px;'>         <div style='filter: alpha(opacity=40); opacity:0.4; position: absolute; display: block;               background-color: #000000; top: 0px; left: 0px; width: 100%; height: 100%;'>         </div>           <div u='slides'> <div u='prototype' style='POSITION: absolute; WIDTH: 600px; HEIGHT: 45px; TOP: 0; LEFT: 0;'> <div u='thumbnailtemplate' style='font-family: verdana; font-weight: normal; POSITION: absolute; WIDTH: 100%; HEIGHT: 100%; TOP: 0; LEFT: 0; color:#fff; line-height: 45px; font-size:20px; padding-left:10px;'></div> </div> </div> </div> <style> .jssorb01 { position: absolute; } .jssorb01 div, .jssorb01 div:hover, .jssorb01 .av { position: absolute; /* size of bullet elment */ width: 12px; height: 12px; filter: alpha(opacity=70); opacity: .7; overflow: hidden; cursor: pointer; border: #000 1px solid; } .jssorb01 div { background-color: gray; } .jssorb01 div:hover, .jssorb01 .av:hover { background-color: #d3d3d3; } .jssorb01 .av { background-color: #fff; } .jssorb01 .dn, .jssorb01 .dn:hover { background-color: #555555; } </style> <div u='navigator' class='jssorb01' style='bottom: 16px; right: 10px;'> <div u='prototype'></div> </div> <style> .jssora05l, .jssora05r { display: block; position: absolute; width: 40px; height: 40px; cursor: pointer; background: url('http://www.galleria.co.ke/imgs/a02.png') no-repeat; overflow: hidden; } .jssora05l { background-position: -10px -40px; } .jssora05r { background-position: -70px -40px; } .jssora05l:hover { background-position: -130px -40px; } .jssora05r:hover { background-position: -190px -40px; } .jssora05l.jssora05ldn { background-position: -250px -40px; } .jssora05r.jssora05rdn { background-position: -310px -40px; } </style> <span u='arrowleft' class='jssora05l' style='top: 123px; left: 8px;'> </span> <span u='arrowright' class='jssora05r' style='top: 123px; right: 8px;'> </span> <a style='display: none' href='http://www.jssor.com'>Bootstrap Slider</a> </div> <div style= 'margin-top:50px; '>  </div>  ;" 
 //divs[i].innerHTML = "<img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' > <img src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' >"  ;
 // divs[i].innerHTML = "  <p>  " +  item_name[0].textContent + " </p>  ";
 // console.log(item_name[0].textContent);
 // var d= v[0].src.toString() ;
  //var b  = document.getElementsByClassName('slide1');
 // b.innerHTML = "   v[0].src  ";
 // divs[i].innerHTML = "  <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'></script> <p class= 'nik' > asdsadas </p>";
  //$('.slide1').append("   <div>              <img u=image  src=  "   +  c[16].src +  " />               <div u='thumb'>Do you notice it is draggable by mouse/finger?</div>          </div>       ");
  // divs[i].innerHTML = "<p class='nik' >  "  +  c  + "   </p> ";
	//  $('.nik').append("  wdqwdqw "  +  v + " www     ");

//var d= v[0].src.toString() ;
 // var slides = $('slide1').children();
 var counter=0;
 for(var i=0; i<images.length/8; i++)  {
 console.log(i+counter);
 console.log(images[i+counter].src);
  console.log(item_name[i].textContent);
  console.log(stars[i].textContent);
   console.log(distance[i].textContent);
   console.log(main[i].textContent);
//  $('.best').append("<div> <img u='image' src="   + images[i+counter].src  +    "  /> <div u=caption t='CLIP|LR' du='1500' class='captionOrange'  style='position:absolute; left:0px; top: 0px; width:500px; height:60px;'> <a href='http://www.jssor.com/development/tool-caption-transition-viewer.html' >transitions</a>  </div> <div  u=caption t='L|IB' t2=L d=-900 class='captionBlack'  style='position:absolute; left:360px; top: 130px; width:60px; height:30px;'> comes </div> <div u=caption t='RTT|360' d=-200 class='captionBlack'  style='position:absolute; left:360px; top: 180px; width:60px; height:30px;'> with </div> <div   u=caption t='DDGDANCE|RB' t2='RTT|10' d=-1800 du=3800 class='captionOrange' style='position:absolute; left:560px; top: 110px; width:200px; height:120px; text-align: left;'> &nbsp; " + main[i ].textContent + "<br /> &nbsp; Image Gallery Slider<br /> &nbsp; Image Slider<br /> &nbsp; Carousel Slider </div> <div u=caption t='T|IE*IE' d=-1600 du=3800 t2='B' class='captionOrange' style='position:absolute; left:20px; top: 310px; width:330px; height:30px;'> slideshow and responsive slider ... </div> <div u='caption' t='ZMF|10' t2='B' d=-1300 style='position:absolute;left:420px;top:280px;width:90px;height:40px;font-size:36px;color:#fff;line-height:40px;'>390+</div> <div u='caption' t='CLIP|L' d=-300 style='position:absolute;left:520px;top:280px;width:160px;height:40px;font-size:36px;color:#fff;line-height:40px; text-align: center;'>caption</div> <a class='captionOrange' u='caption' t='CLIP|L' d=-300 href='http://www.jssor.com/development/tool-caption-transition-viewer.html' style='position:absolute;left:720px;top:280px;width:220px;height:40px;font-size:36px;color:#fff;line-height:40px;'>transitions</a> </div>  ") ;
$(".item_image js_item_image")
    .appendTo(".best");
  //$('.slide1').append("    <div style='cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px;   overflow: hidden;'  >  <img style='width: 600px; height: 300px; 'src="   + images[i+counter].src  +    "  >        <div u='thumb'> " + item_name[i].textContent  + " </div>     </div>  ");
counter=counter +7;
  }     
	 //      <div>              <img u=image src='http://imgec.trivago.com/itemimages/99/03/99039_v7_mc.jpeg' />               <div u='thumb'>Do you notice it is draggable by mouse/finger?</div>     </div>  
  // divs[i].innerHTML = "<p class= 'nik' > asds2222adas </p>";
  
  // cop[0].innerHTML = "  <p class= 'nik' > sadssdasdasd </p> ";

 //	img.src = "image.png";
 var Value =100;
 var page = document.getElementById("js_pagination").setAttribute("style",
                                        "margin-top:" + Value.toString() + "px");
 } 
 } 
 break; 
 } 
 }
 );