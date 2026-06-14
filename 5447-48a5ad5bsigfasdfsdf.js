"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5447], {
    1262: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let r = n(12115)
          , i = !1
          , o = r.useLayoutEffect
          , a = i ? () => {}
        : r.useEffect;
        function s(e) {
            let {headManager: t, reduceComponentsToState: n} = e;
            function s() {
                if (t && t.mountedInstances) {
                    let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(i, e))
                }
            }
            if (i) {
                var l;
                null == t || null == (l = t.mountedInstances) || l.add(e.children),
                s()
            }
            return o( () => {
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                () => {
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            ),
            o( () => (t && (t._pendingUpdate = s),
            () => {
                t && (t._pendingUpdate = s)
            }
            )),
            a( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    }
    ,
    13823: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        let r = function(e) {
            function t(e, r, l, c, u) {
                for (var f, m, h, v, b, w = 0, S = 0, C = 0, E = 0, M = 0, T = 0, j = h = f = 0, B = 0, N = 0, F = 0, _ = 0, q = l.length, V = q - 1, z = "", D = "", W = "", U = ""; B < q; ) {
                    if (m = l.charCodeAt(B),
                    B === V && 0 !== S + E + C + w && (0 !== S && (m = 47 === S ? 10 : 47),
                    E = C = w = 0,
                    q++,
                    V++),
                    0 === S + E + C + w) {
                        if (B === V && (0 < N && (z = z.replace(p, "")),
                        0 < z.trim().length)) {
                            switch (m) {
                            case 32:
                            case 9:
                            case 59:
                            case 13:
                            case 10:
                                break;
                            default:
                                z += l.charAt(B)
                            }
                            m = 59
                        }
                        switch (m) {
                        case 123:
                            for (f = (z = z.trim()).charCodeAt(0),
                            h = 1,
                            _ = ++B; B < q; ) {
                                switch (m = l.charCodeAt(B)) {
                                case 123:
                                    h++;
                                    break;
                                case 125:
                                    h--;
                                    break;
                                case 47:
                                    switch (m = l.charCodeAt(B + 1)) {
                                    case 42:
                                    case 47:
                                        e: {
                                            for (j = B + 1; j < V; ++j)
                                                switch (l.charCodeAt(j)) {
                                                case 47:
                                                    if (42 === m && 42 === l.charCodeAt(j - 1) && B + 2 !== j) {
                                                        B = j + 1;
                                                        break e
                                                    }
                                                    break;
                                                case 10:
                                                    if (47 === m) {
                                                        B = j + 1;
                                                        break e
                                                    }
                                                }
                                            B = j
                                        }
                                    }
                                    break;
                                case 91:
                                    m++;
                                case 40:
                                    m++;
                                case 34:
                                case 39:
                                    for (; B++ < V && l.charCodeAt(B) !== m; )
                                        ;
                                }
                                if (0 === h)
                                    break;
                                B++
                            }
                            if (h = l.substring(_, B),
                            0 === f && (f = (z = z.replace(d, "").trim()).charCodeAt(0)),
                            64 === f) {
                                switch (0 < N && (z = z.replace(p, "")),
                                m = z.charCodeAt(1)) {
                                case 100:
                                case 109:
                                case 115:
                                case 45:
                                    N = r;
                                    break;
                                default:
                                    N = P
                                }
                                if (h = t(r, N, h, m, u + 1),
                                _ = h.length,
                                0 < L && (N = n(P, z, F),
                                b = s(3, h, N, r, R, O, _, m, u, c),
                                z = N.join(""),
                                void 0 !== b && 0 === (_ = (h = b.trim()).length) && (m = 0,
                                h = "")),
                                0 < _)
                                    switch (m) {
                                    case 115:
                                        z = z.replace(x, a);
                                    case 100:
                                    case 109:
                                    case 45:
                                        h = z + "{" + h + "}";
                                        break;
                                    case 107:
                                        z = z.replace(g, "$1 $2"),
                                        h = z + "{" + h + "}",
                                        h = 1 === A || 2 === A && o("@" + h, 3) ? "@-webkit-" + h + "@" + h : "@" + h;
                                        break;
                                    default:
                                        h = z + h,
                                        112 === c && (D += h,
                                        h = "")
                                    }
                                else
                                    h = ""
                            } else
                                h = t(r, n(r, z, F), h, c, u + 1);
                            W += h,
                            h = F = N = j = f = 0,
                            z = "",
                            m = l.charCodeAt(++B);
                            break;
                        case 125:
                        case 59:
                            if (1 < (_ = (z = (0 < N ? z.replace(p, "") : z).trim()).length))
                                switch (0 === j && (45 === (f = z.charCodeAt(0)) || 96 < f && 123 > f) && (_ = (z = z.replace(" ", ":")).length),
                                0 < L && void 0 !== (b = s(1, z, r, e, R, O, D.length, c, u, c)) && 0 === (_ = (z = b.trim()).length) && (z = "\0\0"),
                                f = z.charCodeAt(0),
                                m = z.charCodeAt(1),
                                f) {
                                case 0:
                                    break;
                                case 64:
                                    if (105 === m || 99 === m) {
                                        U += z + l.charAt(B);
                                        break
                                    }
                                default:
                                    58 !== z.charCodeAt(_ - 1) && (D += i(z, f, m, z.charCodeAt(2)))
                                }
                            F = N = j = f = 0,
                            z = "",
                            m = l.charCodeAt(++B)
                        }
                    }
                    switch (m) {
                    case 13:
                    case 10:
                        47 === S ? S = 0 : 0 === 1 + f && 107 !== c && 0 < z.length && (N = 1,
                        z += "\0"),
                        0 < L * $ && s(0, z, r, e, R, O, D.length, c, u, c),
                        O = 1,
                        R++;
                        break;
                    case 59:
                    case 125:
                        if (0 === S + E + C + w) {
                            O++;
                            break
                        }
                    default:
                        switch (O++,
                        v = l.charAt(B),
                        m) {
                        case 9:
                        case 32:
                            if (0 === E + w + S)
                                switch (M) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    v = "";
                                    break;
                                default:
                                    32 !== m && (v = " ")
                                }
                            break;
                        case 0:
                            v = "\\0";
                            break;
                        case 12:
                            v = "\\f";
                            break;
                        case 11:
                            v = "\\v";
                            break;
                        case 38:
                            0 === E + S + w && (N = F = 1,
                            v = "\f" + v);
                            break;
                        case 108:
                            if (0 === E + S + w + I && 0 < j)
                                switch (B - j) {
                                case 2:
                                    112 === M && 58 === l.charCodeAt(B - 3) && (I = M);
                                case 8:
                                    111 === T && (I = T)
                                }
                            break;
                        case 58:
                            0 === E + S + w && (j = B);
                            break;
                        case 44:
                            0 === S + C + E + w && (N = 1,
                            v += "\r");
                            break;
                        case 34:
                        case 39:
                            0 === S && (E = E === m ? 0 : 0 === E ? m : E);
                            break;
                        case 91:
                            0 === E + S + C && w++;
                            break;
                        case 93:
                            0 === E + S + C && w--;
                            break;
                        case 41:
                            0 === E + S + w && C--;
                            break;
                        case 40:
                            0 === E + S + w && (0 === f && (2 * M + 3 * T == 533 || (f = 1)),
                            C++);
                            break;
                        case 64:
                            0 === S + C + E + w + j + h && (h = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < E + w + C))
                                switch (S) {
                                case 0:
                                    switch (2 * m + 3 * l.charCodeAt(B + 1)) {
                                    case 235:
                                        S = 47;
                                        break;
                                    case 220:
                                        _ = B,
                                        S = 42
                                    }
                                    break;
                                case 42:
                                    47 === m && 42 === M && _ + 2 !== B && (33 === l.charCodeAt(_ + 2) && (D += l.substring(_, B + 1)),
                                    v = "",
                                    S = 0)
                                }
                        }
                        0 === S && (z += v)
                    }
                    T = M,
                    M = m,
                    B++
                }
                if (0 < (_ = D.length)) {
                    if (N = r,
                    0 < L && void 0 !== (b = s(2, D, N, e, R, O, _, c, u, c)) && 0 === (D = b).length)
                        return U + D + W;
                    if (D = N.join(",") + "{" + D + "}",
                    0 != A * I) {
                        switch (2 !== A || o(D, 2) || (I = 0),
                        I) {
                        case 111:
                            D = D.replace(k, ":-moz-$1") + D;
                            break;
                        case 112:
                            D = D.replace(y, "::-webkit-input-$1") + D.replace(y, "::-moz-$1") + D.replace(y, ":-ms-input-$1") + D
                        }
                        I = 0
                    }
                }
                return U + D + W
            }
            function n(e, t, n) {
                var i = t.trim().split(v);
                t = i;
                var o = i.length
                  , a = e.length;
                switch (a) {
                case 0:
                case 1:
                    var s = 0;
                    for (e = 0 === a ? "" : e[0] + " "; s < o; ++s)
                        t[s] = r(e, t[s], n).trim();
                    break;
                default:
                    var l = s = 0;
                    for (t = []; s < o; ++s)
                        for (var c = 0; c < a; ++c)
                            t[l++] = r(e[c] + " ", i[s], n).trim()
                }
                return t
            }
            function r(e, t, n) {
                var r = t.charCodeAt(0);
                switch (33 > r && (r = (t = t.trim()).charCodeAt(0)),
                r) {
                case 38:
                    return t.replace(b, "$1" + e.trim());
                case 58:
                    return e.trim() + t.replace(b, "$1" + e.trim());
                default:
                    if (0 < +n && 0 < t.indexOf("\f"))
                        return t.replace(b, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                }
                return e + t
            }
            function i(e, t, n, r) {
                var a = e + ";"
                  , s = 2 * t + 3 * n + 4 * r;
                if (944 === s) {
                    e = a.indexOf(":", 9) + 1;
                    var l = a.substring(e, a.length - 1).trim();
                    return l = a.substring(0, e).trim() + l + ";",
                    1 === A || 2 === A && o(l, 1) ? "-webkit-" + l + l : l
                }
                if (0 === A || 2 === A && !o(a, 1))
                    return a;
                switch (s) {
                case 1015:
                    return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                case 951:
                    return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                case 963:
                    return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                case 1009:
                    if (100 !== a.charCodeAt(4))
                        break;
                case 969:
                case 942:
                    return "-webkit-" + a + a;
                case 978:
                    return "-webkit-" + a + "-moz-" + a + a;
                case 1019:
                case 983:
                    return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                case 883:
                    if (45 === a.charCodeAt(8))
                        return "-webkit-" + a + a;
                    if (0 < a.indexOf("image-set(", 11))
                        return a.replace(T, "$1-webkit-$2") + a;
                    break;
                case 932:
                    if (45 === a.charCodeAt(4))
                        switch (a.charCodeAt(5)) {
                        case 103:
                            return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                        case 115:
                            return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                        case 98:
                            return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                        }
                    return "-webkit-" + a + "-ms-" + a + a;
                case 964:
                    return "-webkit-" + a + "-ms-flex-" + a + a;
                case 1023:
                    if (99 !== a.charCodeAt(8))
                        break;
                    return "-webkit-box-pack" + (l = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + l + a;
                case 1005:
                    return m.test(a) ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a : a;
                case 1e3:
                    switch (t = (l = a.substring(13).trim()).indexOf("-") + 1,
                    l.charCodeAt(0) + l.charCodeAt(t)) {
                    case 226:
                        l = a.replace(w, "tb");
                        break;
                    case 232:
                        l = a.replace(w, "tb-rl");
                        break;
                    case 220:
                        l = a.replace(w, "lr");
                        break;
                    default:
                        return a
                    }
                    return "-webkit-" + a + "-ms-" + l + a;
                case 1017:
                    if (-1 === a.indexOf("sticky", 9))
                        break;
                case 975:
                    switch (t = (a = e).length - 10,
                    s = (l = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                    case 203:
                        if (111 > l.charCodeAt(8))
                            break;
                    case 115:
                        a = a.replace(l, "-webkit-" + l) + ";" + a;
                        break;
                    case 207:
                    case 102:
                        a = a.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + a.replace(l, "-webkit-" + l) + ";" + a.replace(l, "-ms-" + l + "box") + ";" + a
                    }
                    return a + ";";
                case 938:
                    if (45 === a.charCodeAt(5))
                        switch (a.charCodeAt(6)) {
                        case 105:
                            return l = a.replace("-items", ""),
                            "-webkit-" + a + "-webkit-box-" + l + "-ms-flex-" + l + a;
                        case 115:
                            return "-webkit-" + a + "-ms-flex-item-" + a.replace(C, "") + a;
                        default:
                            return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(C, "") + a
                        }
                    break;
                case 973:
                case 989:
                    if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                        break;
                case 931:
                case 953:
                    if (!0 === M.test(e))
                        return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? i(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : a.replace(l, "-webkit-" + l) + a.replace(l, "-moz-" + l.replace("fill-", "")) + a;
                    break;
                case 962:
                    if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a,
                    211 === n + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
                        return a.substring(0, a.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + a
                }
                return a
            }
            function o(e, t) {
                var n = e.indexOf(1 === t ? ":" : "{")
                  , r = e.substring(0, 3 !== t ? n : 10);
                return n = e.substring(n + 1, e.length - 1),
                B(2 !== t ? r : r.replace(E, "$1"), n, t)
            }
            function a(e, t) {
                var n = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                return n !== t + ";" ? n.replace(S, " or ($1)").substring(4) : "(" + t + ")"
            }
            function s(e, t, n, r, i, o, a, s, l, c) {
                for (var d, p = 0, f = t; p < L; ++p)
                    switch (d = j[p].call(u, e, f, n, r, i, o, a, s, l, c)) {
                    case void 0:
                    case !1:
                    case !0:
                    case null:
                        break;
                    default:
                        f = d
                    }
                if (f !== t)
                    return f
            }
            function l(e) {
                switch (e) {
                case void 0:
                case null:
                    L = j.length = 0;
                    break;
                default:
                    if ("function" == typeof e)
                        j[L++] = e;
                    else if ("object" == typeof e)
                        for (var t = 0, n = e.length; t < n; ++t)
                            l(e[t]);
                    else
                        $ = 0 | !!e
                }
                return l
            }
            function c(e) {
                return void 0 !== (e = e.prefix) && (B = null,
                e ? "function" != typeof e ? A = 1 : (A = 2,
                B = e) : A = 0),
                c
            }
            function u(e, n) {
                var r = e;
                if (33 > r.charCodeAt(0) && (r = r.trim()),
                r = [r],
                0 < L) {
                    var i = s(-1, n, r, r, R, O, 0, 0, 0, 0);
                    void 0 !== i && "string" == typeof i && (n = i)
                }
                var o = t(P, r, n, 0, 0);
                return 0 < L && void 0 !== (i = s(-2, o, r, r, R, O, o.length, 0, 0, 0)) && (o = i),
                I = 0,
                O = R = 1,
                o
            }
            var d = /^\0+/g
              , p = /[\0\r\f]/g
              , f = /: */g
              , m = /zoo|gra/
              , h = /([,: ])(transform)/g
              , v = /,\r+?/g
              , b = /([\t\r\n ])*\f?&/g
              , g = /@(k\w+)\s*(\S*)\s*/
              , y = /::(place)/g
              , k = /:(read-only)/g
              , w = /[svh]\w+-[tblr]{2}/
              , x = /\(\s*(.*)\s*\)/g
              , S = /([\s\S]*?);/g
              , C = /-self|flex-/g
              , E = /[^]*?(:[rp][el]a[\w-]+)[^]*/
              , M = /stretch|:\s*\w+\-(?:conte|avail)/
              , T = /([^-])(image-set\()/
              , O = 1
              , R = 1
              , I = 0
              , A = 1
              , P = []
              , j = []
              , L = 0
              , B = null
              , $ = 0;
            return u.use = l,
            u.set = c,
            void 0 !== e && c(e),
            u
        }
    }
    ,
    60861: (e, t) => {
        function n(e) {
            let {ampFirst: t=!1, hybrid: n=!1, hasQuery: r=!1} = void 0 === e ? {} : e;
            return t || n && r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    }
    ,
    74841: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return v
            },
            defaultHead: function() {
                return d
            }
        });
        let r = n(28140)
          , i = n(49417)
          , o = n(95155)
          , a = i._(n(12115))
          , s = r._(n(1262))
          , l = n(90737)
          , c = n(82073)
          , u = n(60861);
        function d(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            }, "charset")];
            return e || t.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")),
            t
        }
        function p(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        n(94781);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];
        function m() {
            let e = new Set
              , t = new Set
              , n = new Set
              , r = {};
            return i => {
                let o = !0
                  , a = !1;
                if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                    a = !0;
                    let t = i.key.slice(i.key.indexOf("$") + 1);
                    e.has(t) ? o = !1 : e.add(t)
                }
                switch (i.type) {
                case "title":
                case "base":
                    t.has(i.type) ? o = !1 : t.add(i.type);
                    break;
                case "meta":
                    for (let e = 0, t = f.length; e < t; e++) {
                        let t = f[e];
                        if (i.props.hasOwnProperty(t))
                            if ("charSet" === t)
                                n.has(t) ? o = !1 : n.add(t);
                            else {
                                let e = i.props[t]
                                  , n = r[t] || new Set;
                                ("name" !== t || !a) && n.has(e) ? o = !1 : (n.add(e),
                                r[t] = n)
                            }
                    }
                }
                return o
            }
        }
        function h(e, t) {
            let {inAmpMode: n} = t;
            return e.reduce(p, []).reverse().concat(d(n).reverse()).filter(m()).reverse().map( (e, t) => {
                let n = e.key || t;
                return a.default.cloneElement(e, {
                    key: n
                })
            }
            )
        }
        let v = function(e) {
            let {children: t} = e
              , n = (0,
            a.useContext)(l.AmpStateContext)
              , r = (0,
            a.useContext)(c.HeadManagerContext);
            return (0,
            o.jsx)(s.default, {
                reduceComponentsToState: h,
                headManager: r,
                inAmpMode: (0,
                u.isInAmpMode)(n),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    77062: (e, t, n) => {
        var r = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== n.g)
                return n.g;
            throw Error("unable to locate global object")
        }();
        e.exports = t = r.fetch,
        r.fetch && (t.default = r.fetch.bind(r)),
        t.Headers = r.Headers,
        t.Request = r.Request,
        t.Response = r.Response
    }
    ,
    79327: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            G8: () => BuilderStoreContext,
            M$: () => _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$,
            OF: () => withChildren,
            RZ: () => BuilderComponent,
            WM: () => BuilderBlock$1,
            oA: () => noWrap,
            y$: () => BuilderBlocks
        });
        var _a, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43315), _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99184), react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115), react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47650), hash_sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93169), hash_sum__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(hash_sum__WEBPACK_IMPORTED_MODULE_4__), process = __webpack_require__(87358), SDK_VERSION = "8.2.3";
        "undefined" != typeof window && (null == (_a = window.parent) || _a.postMessage({
            type: "builder.isReactSdk",
            data: {
                value: !0,
                supportsPatchUpdates: "v4",
                supportsCustomBreakpoints: !0,
                supportsXSmallBreakpoint: !0,
                supportsGlobalSymbols: !0,
                blockLevelPersonalization: !0,
                version: SDK_VERSION
            }
        }, "*"));
        var extendStatics = function(e, t) {
            return (extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            )(e, t)
        };
        function __extends(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            extendStatics(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        var __assign = function() {
            return (__assign = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ).apply(this, arguments)
        };
        function __rest(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
            }
            return n
        }
        function __decorate(e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
            a
        }
        function __metadata(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
        function __awaiter(e, t, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(a, s)
                }
                l((r = r.apply(e, t || [])).next())
            }
            )
        }
        function __generator(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(s) {
                return function(l) {
                    return function(s) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; o && (o = 0,
                        s[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, s[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        a.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(s);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, l])
                }
            }
        }
        function __spreadArray(e, t, n) {
            if (n || 2 == arguments.length)
                for (var r, i = 0, o = t.length; i < o; i++)
                    !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                    r[i] = t[i]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
        "function" == typeof SuppressedError && SuppressedError;
        var safeDynamicRequire, fastClone = function(e) {
            return JSON.parse(JSON.stringify(e))
        }, omit$2 = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            for (var r = Object.assign({}, e), i = 0, o = t; i < o.length; i++) {
                var a = o[i];
                delete r[a]
            }
            return r
        }, sizeNames = ["xsmall", "small", "medium", "large"], sizes = {
            xsmall: {
                min: 0,
                default: 160,
                max: 320
            },
            small: {
                min: 321,
                default: 321,
                max: 640
            },
            medium: {
                min: 641,
                default: 642,
                max: 991
            },
            large: {
                min: 990,
                default: 991,
                max: 1200
            },
            getWidthForSize: function(e) {
                return this[e].default
            },
            getSizeForWidth: function(e) {
                for (var t = 0, n = sizeNames; t < n.length; t++) {
                    var r = n[t];
                    if (e <= this[r].max)
                        return r
                }
                return "large"
            }
        }, getSizesForBreakpoints = function(e) {
            var t = __assign(__assign({}, sizes), fastClone(sizes));
            if (!e)
                return t;
            var n = e.xsmall
              , r = e.small
              , i = e.medium;
            if (n) {
                var o = Math.floor(n / 2);
                t.xsmall = {
                    max: n,
                    min: o,
                    default: o + 1
                }
            }
            if (!r || !i)
                return t;
            var a = n ? t.xsmall.max + 1 : Math.floor(r / 2);
            t.small = {
                max: r,
                min: a,
                default: a + 1
            };
            var s = t.small.max + 1;
            t.medium = {
                max: i,
                min: s,
                default: s + 1
            };
            var l = t.medium.max + 1;
            return t.large = {
                max: 2e3,
                min: l,
                default: l + 1
            },
            t
        }, set = function(e, t, n) {
            if (Object(e) !== e)
                return e;
            var r = Array.isArray(t) ? t : t.toString().match(/[^.[\]]+/g);
            return r.slice(0, -1).reduce(function(e, t, n) {
                return Object(e[t]) === e[t] ? e[t] : e[t] = (0 | Math.abs(Number(r[n + 1]))) == +r[n + 1] ? [] : {}
            }, e)[r[r.length - 1]] = n,
            e
        }, noop = function() {
            return null
        };
        if ("function" == typeof (null == globalThis ? void 0 : globalThis.require) || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer && 1)
            try {
                safeDynamicRequire = eval("require")
            } catch (e) {
                safeDynamicRequire = (null == globalThis ? void 0 : globalThis.require) ? globalThis.require : noop
            }
        function isDebug() {
            return !!(void 0 !== process && void 0 !== process.env && process.env.DEBUG)
        }
        function isNodeRuntime() {
            var e;
            return void 0 !== process && !!(null == (e = null == process ? void 0 : process.versions) ? void 0 : e.node)
        }
        null != safeDynamicRequire || (safeDynamicRequire = noop);
        var shouldForceBrowserRuntimeInNode = function() {
            if (!isNodeRuntime())
                return !1;
            var e, t = "arm64" === process.arch, n = process.version.startsWith("v20"), r = null == (e = process.env.NODE_OPTIONS) ? void 0 : e.includes("--no-node-snapshot");
            return !(!t || !n || r) && (console.log("Skipping usage of `isolated-vm` to avoid crashes in Node v20 on an arm64 machine.\n    If you would like to use the `isolated-vm` package on this machine, please provide the `NODE_OPTIONS=--no-node-snapshot` config to your Node process.\n    See https://github.com/BuilderIO/builder/blob/main/packages/react/README.md#node-v20--m1-macs-apple-silicon-support for more information.\n    "),
            !0)
        }
          , fnCache = {}
          , api = function(e) {
            return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL
        };
        function stringToFunction(e, t, n, r) {
            if (void 0 === t && (t = !0),
            !e || !e.trim())
                return function() {}
                ;
            var i = e + ":" + t;
            if (fnCache[i])
                return fnCache[i];
            var o = t && !(e.includes(";") || e.includes(" return ") || e.trim().startsWith("return ")) || e.trim().startsWith("builder.run")
              , a = function() {};
            try {
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (a = Function("state", "event", "block", "builder", "Device", "update", "Builder", "context", "\n          var names = [\n            'state',\n            'event',\n            'block',\n            'builder',\n            'Device',\n            'update',\n            'Builder',\n            'context'\n          ];\n          var rootState = state;\n          if (typeof Proxy !== 'undefined') {\n            rootState = new Proxy(rootState, {\n              set: function () {\n                return false;\n              },\n              get: function (target, key) {\n                if (names.includes(key)) {\n                  return undefined;\n                }\n                return target[key];\n              }\n            });\n          }\n          /* Alias */\n          var ctx = context;\n          var log = console.log.bind(console);\n          with (rootState) {\n            ".concat(o ? "return (".concat(e, ");") : e, ";\n          }\n        ")))
            } catch (t) {
                n && n.push(t);
                var s = t && t.message;
                s && "string" == typeof s && r && -1 === r.indexOf(s) && r.push(s),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && console.warn("Function compile error in ".concat(e), t)
            }
            var l = function() {
                for (var t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                try {
                    if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || shouldForceBrowserRuntimeInNode())
                        return a.apply(void 0, t);
                    var i = getIsolateContext()
                      , s = safeDynamicRequire("isolated-vm")
                      , l = i.evalClosureSync(makeFn(e, o), t.map(function(e, t) {
                        return "object" == typeof e ? new s.Reference(t === indexOfBuilderInstance ? __assign(__assign({}, e), {
                            getUserAttributes: function() {
                                return e.getUserAttributes("")
                            }
                        }) : e) : null
                    }));
                    try {
                        return JSON.parse(l)
                    } catch (e) {
                        return l
                    }
                } catch (t) {
                    return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser ? console.warn("Builder custom code error:", t.message || t, "in", e, t.stack || t) : isDebug() && console.debug("Builder custom code error:", t.message || t, "in", e, t.stack || t),
                    n && n.push(t),
                    null
                }
            };
            return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (fnCache[i] = l),
            l
        }
        var indexOfBuilderInstance = 3
          , makeFn = function(e, t, n) {
            var r = n || ["state", "event", "block", "builder", "Device", "update", "Builder", "context"];
            return "\n".concat("\n  var refToProxy = (obj) => {\n    if (typeof obj !== 'object' || obj === null) {\n      return obj;\n    }\n    return new Proxy({}, {\n        get(target, key) {\n            if (key === 'copySync') {\n              return () => obj.copySync();\n            }\n            const val = obj.getSync(key);\n            if (typeof val?.copySync === 'function') {\n                return JSON.parse(stringify(val));\n            }\n            return val;\n        },\n        set(target, key, value) {\n            obj.setSync(key, value);\n        },\n        deleteProperty(target, key) {\n            obj.deleteSync(key);\n        }\n      })\n  }\n", "\n").concat("\n    var stringify = (val) => {\n      if (typeof val === 'object' && val !== null) {\n        return JSON.stringify(val.copySync ? val.copySync() : val);\n      }\n      return val;\n    }\n  ", "\n").concat(r.map(function(e, t) {
                return "var ".concat(e, " = refToProxy($").concat(t, ");")
            }).join("\n")).concat("\n".concat(r.includes("context") ? "var ctx = context;" : "", "\nvar endResult = function() {\n  ").concat(t ? "return (".concat(e, ");") : e, ";\n};\n\nreturn stringify(endResult());\n"))
        }
          , getIsolateContext = function() {
            var e = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.serverContext;
            e || (e = new (safeDynamicRequire("isolated-vm")).Isolate({
                memoryLimit: 128
            }).createContextSync(),
            _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.setServerContext(e));
            var t = e.global;
            return t.setSync("global", t.derefInto()),
            t.setSync("log", function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                isDebug() && console.log.apply(console, e)
            }),
            e
        }
          , isPromise = function(e) {
            return "function" == typeof e.then
        }
          , isRequestInfo = function(e) {
            return !isPromise(e)
        }
          , BuilderAsyncRequestsContext = react__WEBPACK_IMPORTED_MODULE_2__.createContext({
            requests: [],
            errors: [],
            logs: []
        })
          , BuilderStoreContext = react__WEBPACK_IMPORTED_MODULE_2__.createContext({
            state: {},
            rootState: {},
            content: {},
            context: {},
            update: function(e) {
                return null
            }
        })
          , applyPatchWithMinimalMutationChain = function(e, t, n) {
            if (void 0 === n && (n = !1),
            Object(e) !== e)
                return e;
            var r = t.path
              , i = t.op
              , o = t.value
              , a = r.split(/\//);
            "" === a[0] && a.shift();
            for (var s = n ? e : __assign({}, e), l = s, c = 0; c < a.length; c++) {
                var u = c === a.length - 1
                  , d = a[c];
                if (u)
                    if ("replace" === i)
                        l[d] = o;
                    else if ("add" === i) {
                        var p = Number(d);
                        Array.isArray(l) ? "-" === d ? l.push(o) : l.splice(p, 0, o) : l[d] = o
                    } else
                        "remove" === i && (p = Number(d),
                        Array.isArray(l) ? l.splice(p, 1) : delete l[d]);
                else {
                    var f = a[c + 1]
                      , m = Object(l[d]) === l[d] ? l[d] : String(Number(f)) === f ? [] : {};
                    l = l[d] = Array.isArray(m) ? __spreadArray([], m, !0) : __assign({}, m)
                }
            }
            return s
        }
          , htmlEscape = function(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }
          , blockToHtmlString = function(e) {
            var t;
            return "<".concat(htmlEscape(e.tagName || "div"), ' \n    class="builder-block ').concat(e.id, " ").concat(e.class || "", '"\n    builder-id="').concat(e.id, '"\n  ').concat(Object.keys(e.properties || {}).map(function(t) {
                return "".concat(htmlEscape(t), '="').concat(htmlEscape(e.properties[t]), '"')
            }).join(" "), "\n  >").concat("Text" === (null == (t = null == e ? void 0 : e.component) ? void 0 : t.name) ? e.component.options.text : e.children ? e.children.map(function(e) {
                return blockToHtmlString(e)
            }).join("") : "", "</").concat(e.tagName || "div", ">").replace(/\s+/g, " ")
        }
          , Link = function(e) {
            return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderStoreContext.Consumer, null, function(t) {
                return t.renderLink ? t.renderLink(e) : react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", __assign({}, e))
            })
        };
        function traverse(e, t, n, r, i) {
            void 0 === n && (n = null),
            void 0 === r && (r = null),
            void 0 === i && (i = new WeakSet),
            null != e && "object" == typeof e ? i.has(e) || (i.add(e),
            Array.isArray(e) ? e.forEach(function(n, r) {
                t(n, function(t) {
                    e[r] = t
                }),
                traverse(n, t, e, r, i)
            }) : Object.entries(e).forEach(function(n) {
                var r = n[0]
                  , o = n[1];
                t(o, function(t) {
                    e[r] = t
                }),
                traverse(o, t, e, r, i)
            })) : t(e, function(e) {
                null !== n && null !== r && (n[r] = e)
            })
        }
        var isLocalizedField = function(e) {
            return e && "object" == typeof e && "@builder.io/core:LocalizedValue" === e["@type"]
        }
          , containsLocalizedValues = function(e) {
            if (!e || !Object.getOwnPropertyNames(e).length)
                return !1;
            var t = !1;
            return traverse(e, function(e) {
                isLocalizedField(e) && (t = !0)
            }),
            t
        }
          , extractLocalizedValues = function(e, t) {
            return e && Object.getOwnPropertyNames(e).length ? (traverse(e, function(e, n) {
                var r;
                isLocalizedField(e) && n(null != (r = e[t]) ? r : void 0)
            }),
            e) : {}
        }
          , camelCaseToKebabCase = function(e) {
            return e ? e.replace(/([A-Z])/g, function(e) {
                return "-".concat(e[0].toLowerCase())
            }) : ""
        }
          , kebabCaseToCamelCase = function(e) {
            return void 0 === e && (e = ""),
            e.replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        }
          , Device = {
            desktop: 0,
            tablet: 1,
            mobile: 2
        };
        function deepCloneWithConditions(e) {
            if (null === e || "object" != typeof e)
                return e;
            if (Array.isArray(e))
                return e.map(function(e) {
                    return deepCloneWithConditions(e)
                });
            if ("@builder.io/sdk:Element" === e["@type"])
                return e;
            var t = {};
            for (var n in e)
                "meta" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = deepCloneWithConditions(e[n]));
            return t
        }
        var voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr", "textarea"])
          , last = function(e) {
            return e[e.length - 1]
        };
        function omit$1(e, t) {
            for (var n = Object.assign({}, e), r = 0, i = t; r < i.length; r++)
                delete n[i[r]];
            return n
        }
        var cssCase = function(e) {
            if (!e)
                return e;
            var t = camelCaseToKebabCase(e);
            return e[0] === e[0].toUpperCase() && (t = "-" + t),
            t
        };
        function capitalize(e) {
            if (e)
                return e[0].toUpperCase() + e.slice(1)
        }
        var BuilderBlock$1 = function(_super) {
            function BuilderBlock() {
                var _this = null !== _super && _super.apply(this, arguments) || this;
                return _this.hydrated = !1,
                _this.state = {
                    hasError: !1,
                    updates: 0
                },
                _this.privateState = {
                    state: {},
                    rootState: {},
                    context: {},
                    update: function() {}
                },
                _this.onWindowMessage = function(event) {
                    var message = event.data;
                    if (message)
                        switch (message.type) {
                        case "builder.selectionChange":
                            var data = message.data;
                            if (!data)
                                break;
                            var selection = data.selection
                              , id = _this.block && _this.block.id;
                            id && Array.isArray(selection) && selection.indexOf(id) > -1 && setTimeout(function() {
                                window.$block = _this,
                                window.$blocks || (window.$blocks = []),
                                window.$blocks.push(_this)
                            });
                            break;
                        case "builder.patchUpdates":
                            var data = message.data;
                            if (!data || !data.data)
                                break;
                            var patches = data.data[_this.block.id];
                            if (!patches)
                                return;
                            location.href.includes("builder.debug=true") && eval("debugger");
                            for (var _i = 0, patches_1 = patches; _i < patches_1.length; _i++) {
                                var patch = patches_1[_i];
                                applyPatchWithMinimalMutationChain(_this.props.block, patch, !0)
                            }
                            _this.setState({
                                updates: _this.state.updates + 1
                            })
                        }
                }
                ,
                _this
            }
            return __extends(BuilderBlock, _super),
            Object.defineProperty(BuilderBlock.prototype, "store", {
                get: function() {
                    return this.privateState
                },
                enumerable: !1,
                configurable: !0
            }),
            BuilderBlock.getDerivedStateFromError = function(e) {
                return {
                    hasError: !0
                }
            }
            ,
            BuilderBlock.prototype.componentDidCatch = function(e, t) {
                console.error("Builder block error:", e, t)
            }
            ,
            BuilderBlock.prototype.stringToFunction = function(e, t) {
                return void 0 === t && (t = !0),
                stringToFunction(e, t, this._errors, this._logs)
            }
            ,
            Object.defineProperty(BuilderBlock.prototype, "block", {
                get: function() {
                    return this.props.block
                },
                enumerable: !1,
                configurable: !0
            }),
            BuilderBlock.prototype.emotionCss = function(e) {
                var t, n, r, i, o, a, s, l, c = this.block, u = c.animations && c.animations[0];
                if (u && "hover" !== u.trigger) {
                    var d = u && u.steps && u.steps[0]
                      , p = d && d.styles;
                    p && (l = p)
                }
                var f = sizeNames.slice().reverse()
                  , m = {};
                if (e)
                    for (var h = !!(null == (r = null == (n = null == (t = this.privateState.context.builderContent) ? void 0 : t.meta) ? void 0 : n.breakpoints) ? void 0 : r.xsmall), v = 0, b = f; v < b.length; v++) {
                        var g = b[v];
                        if (h || "xsmall" !== g)
                            if ("large" === g)
                                this.props.emailMode || (m["&.builder-block"] = Object.assign({}, e[g], l));
                            else {
                                var y = getSizesForBreakpoints((null == (o = null == (i = this.privateState.context.builderContent) ? void 0 : i.meta) ? void 0 : o.breakpoints) || {});
                                m["@media only screen and (max-width: ".concat(y[g].max, "px)")] = {
                                    "&.builder-block": e[g]
                                }
                            }
                    }
                var k = c.animations && c.animations.find(function(e) {
                    return "hover" === e.trigger
                });
                return k && (m[":hover"] = (null == (s = null == (a = k.steps) ? void 0 : a[1]) ? void 0 : s.styles) || {},
                m.transition = "all ".concat(k.duration, "s ").concat(camelCaseToKebabCase(k.easing)),
                k.delay && (m.transitionDelay = k.delay + "s")),
                m
            }
            ,
            BuilderBlock.prototype.eval = function(e) {
                return this.stringToFunction(e)(this.privateState.state, void 0, this.block, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL, Device, this.privateState.update, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, this.privateState.context)
            }
            ,
            BuilderBlock.prototype.componentWillUnmount = function() {
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && removeEventListener("message", this.onWindowMessage)
            }
            ,
            BuilderBlock.prototype.componentDidMount = function() {
                var e, t = this;
                this.hydrated = !0;
                var n = this.block
                  , r = n && n.animations;
                if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && addEventListener("message", this.onWindowMessage),
                r) {
                    var i = {
                        animations: fastClone(r)
                    };
                    if (n.bindings) {
                        for (var o in n.bindings)
                            if ((null == (e = o.trim) ? void 0 : e.call(o)) && o.startsWith("animations.")) {
                                var a = this.stringToFunction(n.bindings[o]);
                                void 0 !== a && set(i, o, a(this.privateState.state, null, n, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL, null, null, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, this.privateState.context))
                            }
                    }
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.animator.bindAnimations(i.animations.filter(function(e) {
                        return "hover" !== e.trigger
                    }).map(function(e) {
                        return __assign(__assign({}, e), {
                            elementId: t.block.id
                        })
                    }))
                }
            }
            ,
            BuilderBlock.prototype.getElement = function(e, t) {
                var n, r, i, o, a, s, l = this;
                void 0 === e && (e = 0),
                void 0 === t && (t = this.privateState.state);
                var c = this.props;
                c.child,
                c.fieldName;
                var u, d = this.block, p = (d.tagName || "div").toLowerCase();
                if ("template" === p) {
                    var f = d.children ? d.children.map(function(e) {
                        return blockToHtmlString(e)
                    }).join(" ") : "";
                    return console.debug("template html", f),
                    (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("template", __assign({}, d.properties, {
                        dangerouslySetInnerHTML: {
                            __html: f
                        }
                    }))
                }
                var m = d.component && (d.component.name || d.component.component)
                  , h = null;
                d.component && !d.component.class && (d.component && d.component.tag ? u = d.component.tag : (h = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.components.find(function(e) {
                    return e.name === m
                }) || null) && h.class ? u = h.class : h && h.tag ? u = h.tag : (null == m ? void 0 : m.startsWith("Builder:")) ? console.warn("Missing @builder.io/widgets installation, please install and import @builder.io/widgets to use ".concat(m.split(":")[1], " in your content, more info here: https://github.com/BuilderIO/builder/tree/main/packages/widgets")) : m && console.warn("Missing registration for ".concat(m, ", have you included the registration in your bundle?")));
                var v = __assign(__assign({}, d.properties), {
                    style: {},
                    responsiveStyles: fastClone(d.responsiveStyles || {})
                });
                if (v = __assign(__assign({}, v.properties), v),
                d.component && (v.component = deepCloneWithConditions(d.component)),
                d.bindings) {
                    for (var b in d.bindings)
                        if (null == (r = b.trim) ? void 0 : r.call(b)) {
                            var g = this.stringToFunction(d.bindings[b]);
                            set(v, b, g(t, null, d, api(), Device, null, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, this.privateState.context))
                        }
                }
                if (v.hide || (delete v.hide,
                ("show"in v || d.bindings && d.bindings.show) && !v.show))
                    return null;
                if (delete v.show,
                d.actions) {
                    var y = function(e) {
                        if (!(null == (i = e.trim) ? void 0 : i.call(e)))
                            return "continue";
                        var n = d.actions[e];
                        v["on" + capitalize(e)] = function(e) {
                            var r = t;
                            return "undefined" != typeof Proxy && (r = new Proxy(t,{
                                set: function(e, t, n) {
                                    return e[t] = n,
                                    l.privateState.rootState[t] = n,
                                    !0
                                }
                            })),
                            l.stringToFunction(n, !1)(r, e, l.block, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL, Device, l.privateState.update, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, l.privateState.context)
                        }
                    };
                    for (var b in d.actions)
                        y(b)
                }
                var k = (v.component || v.options) && __assign(__assign({}, v.options), v.component.options || v.component.data);
                containsLocalizedValues(k) && (this.privateState.state.locale || console.warn("[Builder.io] In order to use localized fields in Builder, you must pass a locale prop to the BuilderComponent or to options object while fetching the content to resolve localized fields. Learn more: https://www.builder.io/c/docs/localization-inline#targeting-and-inline-localization"),
                k = extractLocalizedValues(k, null != (o = this.privateState.state.locale) ? o : "Default"));
                var w = voidElements.has(p)
                  , x = h && (h.fragment || h.noWrap)
                  , S = (null == (a = v.attr) ? void 0 : a.style) || ("string" == typeof v.style ? v.style : "") || "";
                if ("string" == typeof S) {
                    "object" != typeof v.style && (v.style = {});
                    for (var C = 0, E = S.split(";"); C < E.length; C++) {
                        var M = E[C].split(":");
                        if (!M.length)
                            return;
                        b = M[0],
                        g = M[1],
                        b && (M.length > 2 && (g = M.slice(1).join(":")),
                        v.style[kebabCaseToCamelCase(b)] = g)
                    }
                }
                var T = __assign(__assign(__assign({}, omit$1(v, ["class", "component", "attr", "responsiveStyles"])), ((n = {})["string" != typeof p || p.includes("-") ? "class" : "className"] = "builder-block ".concat(this.id).concat(d.class ? " ".concat(d.class) : "").concat(!d.component || ["Image", "Video", "Banner"].indexOf(m) > -1 ? "" : " builder-has-component") + (v.class ? " " + v.class : "") + (this.hydrated && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && (null == (s = this.privateState.state._spacer) ? void 0 : s.parent) === d.id ? " builder-spacer-parent" : ""),
                n.key = this.id + e,
                n["builder-id"] = this.id,
                n)), 0 !== e && {
                    "builder-index": e
                });
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && this.hydrated && (T["builder-inline-styles"] = v.attr && v.attr.style ? Object.keys(v.style).reduce(function(e, t) {
                    return (e ? "".concat(e, ";") : "") + "".concat(cssCase(t), ":").concat(v.style[t], ";")
                }, "") : ""),
                (T.properties && T.properties.href || T.href) && "div" === p && (p = "a"),
                "a" === p && (p = Link);
                var O = d.children || T.children || [];
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.Z2, null, function(e) {
                    var t = e.css;
                    if (e.cx,
                    !l.props.emailMode) {
                        var n = " " + t(l.emotionCss(v.responsiveStyles));
                        T.class && (T.class += n),
                        T.className && (T.className += n)
                    }
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderAsyncRequestsContext.Consumer, null, function(e) {
                        return l._asyncRequests = e && e.requests,
                        l._errors = e && e.errors,
                        l._logs = e && e.logs,
                        w ? (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(p, __assign({}, T)) : u && (x || l.props.emailMode) ? (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(u, __assign({}, k, {
                            attributes: T,
                            builderBlock: d,
                            builderState: l.privateState
                        })) : (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(p, __assign({}, T), u && (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(u, __assign({
                            builderState: l.privateState,
                            builderBlock: d
                        }, k)), d.text || v.text ? v.text : !u && O && Array.isArray(O) && O.length ? O.map(function(e, t) {
                            return (0,
                            _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlock, {
                                key: (l.id || "") + t,
                                block: e,
                                index: t,
                                size: l.props.size,
                                fieldName: l.props.fieldName,
                                child: l.props.child,
                                emailMode: l.props.emailMode
                            })
                        }) : null)
                    })
                }))
            }
            ,
            Object.defineProperty(BuilderBlock.prototype, "id", {
                get: function() {
                    var e = this.block;
                    return e.id && !e.id.startsWith("builder") ? "builder-" + e.id : e.id || ""
                },
                enumerable: !1,
                configurable: !0
            }),
            BuilderBlock.prototype.contents = function(e) {
                var t = this
                  , n = this.block;
                if (this.privateState = e,
                n.repeat && n.repeat.collection) {
                    var r = n.repeat.collection
                      , i = last((r || "").trim().split("(")[0].trim().split("."))
                      , o = n.repeat.itemName || (i ? i + "Item" : "item")
                      , a = this.stringToFunction(r)(e.state, null, n, api(), Device, null, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, this.privateState.context);
                    return Array.isArray(a) ? a.map(function(n, r) {
                        var i, a = __assign(__assign({}, e.state), ((i = {
                            $index: r,
                            $item: n
                        })[o] = n,
                        i["$".concat(o, "Index")] = r,
                        i));
                        return (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Provider, {
                            key: r,
                            value: __assign(__assign({}, e), {
                                state: a
                            })
                        }, t.getElement(r, a))
                    }) : null
                }
                return this.getElement()
            }
            ,
            BuilderBlock.prototype.render = function() {
                var e = this;
                return this.state.hasError ? (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("span", {
                    css: {
                        display: "inline-block",
                        padding: 5,
                        color: "#999",
                        fontSize: 11,
                        fontStyle: "italic"
                    }
                }, "Builder block error :( Check console for details") : (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Consumer, null, function(t) {
                    return e.contents(t)
                })
            }
            ,
            BuilderBlock
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , BuilderBlocks = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hydrated = !1,
                t.onClickEmptyBlocks = function() {
                    var e;
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isIframe && t.noBlocks && (null == (e = window.parent) || e.postMessage({
                        type: "builder.clickEmptyBlocks",
                        data: {
                            parentElementId: t.parentId,
                            dataPath: t.path
                        }
                    }, "*"))
                }
                ,
                t.onHoverEmptyBlocks = function() {
                    var e;
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && t.noBlocks && (null == (e = window.parent) || e.postMessage({
                        type: "builder.hoverEmptyBlocks",
                        data: {
                            parentElementId: t.parentId,
                            dataPath: t.path
                        }
                    }, "*"))
                }
                ,
                t
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "isRoot", {
                get: function() {
                    return !this.props.child
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "noBlocks", {
                get: function() {
                    var e = this.props.blocks;
                    return !(e && e.length)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "path", {
                get: function() {
                    var e = this.props.dataPath || "";
                    return e.trim() && (e.startsWith("this.") ? e = e.replace("this.", "") : e.startsWith("component.options.") || (e = "component.options." + e)),
                    e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "parentId", {
                get: function() {
                    return this.props.parentElementId ? this.props.parentElementId : this.props.parent && this.props.parent.id
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentDidMount = function() {
                this.hydrated = !0
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props.blocks
                  , n = this.props.emailMode ? "span" : "div";
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(n, __assign({
                    className: "builder-blocks" + (this.noBlocks ? " no-blocks" : "") + (this.props.child ? " builder-blocks-child" : "") + (this.props.className ? " " + this.props.className : ""),
                    "builder-type": "blocks",
                    "builder-path": _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isIframe && this.hydrated ? this.path : void 0,
                    "builder-parent-id": this.parentId,
                    css: __assign(__assign({}, !this.props.emailMode && {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch"
                    }), this.props.style),
                    onClick: function() {
                        e.noBlocks && e.onClickEmptyBlocks()
                    }
                }, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && {
                    onMouseEnter: function() {
                        return e.onHoverEmptyBlocks()
                    }
                }), t && Array.isArray(t) && t.map(function(t, n) {
                    return t && "@builder.io/sdk:Element" === t["@type"] ? (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlock$1, {
                        key: t.id,
                        block: t,
                        index: n,
                        fieldName: e.props.fieldName,
                        child: e.props.child,
                        emailMode: e.props.emailMode
                    }) : t
                }) || t)
            }
            ,
            t.renderInto = function(e, n, r) {
                if (void 0 === n && (n = {}),
                e) {
                    var i = null;
                    return "string" == typeof e ? i = document.querySelector(e) : e instanceof Element && (i = e),
                    react_dom__WEBPACK_IMPORTED_MODULE_3__.render((0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Provider, {
                        value: r
                    }, (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(t, __assign({}, n))), i)
                }
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , NoWrap = function(e) {
            return e.children
        };
        function getData(e) {
            if (void 0 !== (null == e ? void 0 : e.data)) {
                var t = e.data
                  , n = t.blocks
                  , r = t.blocksString
                  , i = Array.isArray(n) || "string" == typeof r
                  , o = __assign(__assign({}, e.data), i && {
                    blocks: n || JSON.parse(r)
                });
                return delete o.blocksString,
                o
            }
        }
        var variantsScript = function(e, t) {
            return "\n(function() {\n  if (window.builderNoTrack || !navigator.cookieEnabled) {\n    return;\n  }\n\n  var variants = ".concat(e, ";\n  function removeVariants() {\n    variants.forEach(function (template) {\n      document.querySelector('template[data-template-variant-id=\"' + template.id + '\"]').remove();\n    });\n    document.getElementById('variants-script-").concat(t, '\').remove();\n  }\n\n  if (typeof document.createElement("template").content === \'undefined\') {\n    removeVariants();\n    return ;\n  }\n\n  function setCookie(name,value,days) {\n    var expires = "";\n    if (days) {\n        var date = new Date();\n        date.setTime(date.getTime() + (days*24*60*60*1000));\n        expires = "; expires=" + date.toUTCString();\n    }\n    document.cookie = name + "=" + (value || "")  + expires + "; path=/" + "; Secure; SameSite=None";\n  }\n\n  function getCookie(name) {\n    var nameEQ = name + "=";\n    var ca = document.cookie.split(\';\');\n    for(var i=0;i < ca.length;i++) {\n        var c = ca[i];\n        while (c.charAt(0)==\' \') c = c.substring(1,c.length);\n        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);\n    }\n    return null;\n  }\n  var cookieName = \'builder.tests.').concat(t, "';\n  var variantInCookie = getCookie(cookieName);\n  var availableIDs = variants.map(function(vr) { return vr.id }).concat('").concat(t, "');\n  var variantId;\n  if (availableIDs.indexOf(variantInCookie) > -1) {\n    variantId = variantInCookie;\n  }\n  if (!variantId) {\n    var n = 0;\n    var random = Math.random();\n    for (var i = 0; i < variants.length; i++) {\n      var variant = variants[i];\n      var testRatio = variant.testRatio;\n      n += testRatio;\n      if (random < n) {\n        setCookie(cookieName, variant.id);\n        variantId = variant.id;\n        break;\n      }\n    }\n    if (!variantId) {\n      variantId = \"").concat(t, '";\n      setCookie(cookieName, "').concat(t, '");\n    }\n  }\n  if (variantId && variantId !== "').concat(t, "\") {\n    var winningTemplate = document.querySelector('template[data-template-variant-id=\"' + variantId + '\"]');\n    if (winningTemplate) {\n      var parentNode = winningTemplate.parentNode;\n      var newParent = parentNode.cloneNode(false);\n      newParent.appendChild(winningTemplate.content.firstChild);\n      parentNode.parentNode.replaceChild(newParent, parentNode);\n    }\n  } else if (variants.length > 0) {\n    removeVariants();\n  }\n})()").replace(/\s+/g, " ")
        }
          , VariantsProvider = function(e) {
            var t = e.initialContent
              , n = e.children
              , r = e.nonce;
            if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.canTrack || !Object.keys((null == t ? void 0 : t.variations) || {}).length)
                return n([t]);
            var i = Object.keys(t.variations).map(function(e) {
                return __assign(__assign({
                    id: e
                }, t.variations[e]), {
                    data: getData(t.variations[e])
                })
            })
              , o = __spreadArray(__spreadArray([], i, !0), [t], !1);
            if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer) {
                var a = JSON.stringify(Object.keys(t.variations || {}).map(function(e) {
                    return {
                        id: e,
                        testRatio: t.variations[e].testRatio
                    }
                }));
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, n(o, function() {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement("script", {
                        nonce: r,
                        id: "variants-script-".concat(t.id),
                        dangerouslySetInnerHTML: {
                            __html: variantsScript(a, t.id)
                        }
                    })
                }))
            }
            var s = "builder.tests.".concat(t.id)
              , l = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.getCookie(s);
            if (!l && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser)
                for (var c = 0, u = Math.random(), d = 0; d < i.length; d++) {
                    var p = i[d];
                    if (u < (c += p.testRatio)) {
                        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.setCookie(s, p.id),
                        l = p.id;
                        break
                    }
                }
            return l || (l = t.id,
            _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.setCookie(s, l)),
            n([o.find(function(e) {
                return e.id === l
            })])
        }
          , BuilderContent = function(_super) {
            function BuilderContent() {
                var _this = null !== _super && _super.apply(this, arguments) || this;
                return _this.ref = null,
                _this.state = {
                    loading: !_this.props.content,
                    data: getContentWithInfo(_this.props.content),
                    updates: 1
                },
                _this.onWindowMessage = function(event) {
                    var _a, _b, isTrusted = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isTrustedHostForEvent(event);
                    if (isTrusted) {
                        var message = event.data;
                        if (message)
                            switch (message.type) {
                            case "builder.patchUpdates":
                                if (null == (_a = _this.props.options) ? void 0 : _a.noEditorUpdates)
                                    return;
                                var data = message.data;
                                if (!data || !data.data)
                                    break;
                                var patches = data.data[null == (_b = _this.state.data) ? void 0 : _b.id];
                                if (!patches || !patches.length)
                                    return;
                                location.href.includes("builder.debug=true") && eval("debugger");
                                for (var newData = _this.state.data, _i = 0, patches_1 = patches; _i < patches_1.length; _i++)
                                    newData = applyPatchWithMinimalMutationChain(newData, patches_1[_i], !1);
                                _this.setState({
                                    updates: _this.state.updates + 1,
                                    data: newData
                                }),
                                _this.props.contentLoaded && _this.props.contentLoaded(newData.data, newData)
                            }
                    }
                }
                ,
                _this.subscriptions = new _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.yU,
                _this.firstLoad = !0,
                _this.clicked = !1,
                _this.trackedImpression = !1,
                _this.intersectionObserver = null,
                _this.onClick = function(e) {
                    var t = e.nativeEvent
                      , n = _this.data;
                    n && (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.autoTrack && _this.builder.trackInteraction(n.id, _this.renderedVariantId, _this.clicked, t, {
                        content: n
                    }),
                    _this.clicked || (_this.clicked = !0))
                }
                ,
                _this
            }
            return __extends(BuilderContent, _super),
            Object.defineProperty(BuilderContent.prototype, "builder", {
                get: function() {
                    return this.props.builder || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(BuilderContent.prototype, "name", {
                get: function() {
                    var e = this.props;
                    return "model"in e ? e.model : e.modelName
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(BuilderContent.prototype, "renderedVariantId", {
                get: function() {
                    var e, t, n = this.props.isStatic ? this.builder.getCookie("builder.tests.".concat(null == (e = this.data) ? void 0 : e.id)) : null == (t = this.data) ? void 0 : t.variationId;
                    if (null !== n)
                        return n
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(BuilderContent.prototype, "options", {
                get: function() {
                    var e, t, n = __assign({}, this.props.options || {});
                    return n.key || !(null == (e = this.props.content) ? void 0 : e.id) || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing || (n.key = this.props.content.id),
                    !this.props.content || (null == (t = n.initialContent) ? void 0 : t.length) || !this.props.inline && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing || (n.initialContent = [this.props.content]),
                    n
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(BuilderContent.prototype, "data", {
                get: function() {
                    return getContentWithInfo((this.props.inline || !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || this.firstLoad) && this.options.initialContent && this.options.initialContent[0] || this.state.data)
                },
                enumerable: !1,
                configurable: !0
            }),
            BuilderContent.prototype.componentDidMount = function() {
                var e, t;
                if (!this.props.inline || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing)
                    this.subscribeToContent();
                else if (this.props.inline && (null == (t = null == (e = this.options) ? void 0 : e.initialContent) ? void 0 : t.length)) {
                    var n = this.options.initialContent[0];
                    (null == n ? void 0 : n.id) && this.builder.trackImpression(n.id, this.renderedVariantId, void 0, {
                        content: n
                    })
                }
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && addEventListener("message", this.onWindowMessage)
            }
            ,
            BuilderContent.prototype.subscribeToContent = function() {
                var e = this;
                "_inline" !== this.name && this.subscriptions.add(this.builder.queueGetContent(this.name, this.options).subscribe(function(t) {
                    var n = t && t[0];
                    e.setState({
                        data: n,
                        loading: !1
                    });
                    var r = (e.builder.editingModel || e.builder.previewingModel) === e.name;
                    if (!e.props.inline && e.props.content && e.firstLoad && r && (e.firstLoad = !1,
                    e.subscriptions.unsubscribe(),
                    e.subscribeToContent()),
                    n && e.firstLoad && (e.firstLoad = !1,
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.autoTrack && !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing)) {
                        var i = !1;
                        if ("function" == typeof IntersectionObserver && e.ref)
                            try {
                                (e.intersectionObserver = new IntersectionObserver(function(t, r) {
                                    t.forEach(function(t) {
                                        t.intersectionRatio > 0 && !e.trackedImpression && (e.builder.trackImpression(n.id, e.renderedVariantId, void 0, {
                                            content: e.data
                                        }),
                                        e.data,
                                        e.trackedImpression = !0,
                                        e.ref && r.unobserve(e.ref))
                                    })
                                }
                                )).observe(e.ref),
                                i = !0
                            } catch (e) {
                                console.warn("Could not bind intersection observer")
                            }
                        i || (e.trackedImpression = !0,
                        e.builder.trackImpression(n.id, e.renderedVariantId, void 0, {
                            content: n
                        }))
                    }
                    e.props.contentLoaded && e.props.contentLoaded(n && n.data, n)
                }, function(t) {
                    e.props.contentError && (e.props.contentError(t),
                    e.setState({
                        loading: !1
                    }))
                }))
            }
            ,
            BuilderContent.prototype.componentWillUnmount = function() {
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && removeEventListener("message", this.onWindowMessage),
                this.subscriptions.unsubscribe(),
                this.intersectionObserver && this.ref && this.intersectionObserver.unobserve(this.ref)
            }
            ,
            BuilderContent.prototype.render = function() {
                var e = this;
                if (this.props.dataOnly)
                    return null;
                var t = this.state.loading
                  , n = this.data
                  , r = this.props.dataOnly ? NoWrap : "div";
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(VariantsProvider, {
                    initialContent: n,
                    nonce: this.props.nonce
                }, function(i, o) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, i.map(function(a, s) {
                        var l = s === i.length - 1 ? react__WEBPACK_IMPORTED_MODULE_2__.Fragment : "template";
                        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                            key: String((null == a ? void 0 : a.id) + s)
                        }, "template" !== l && (null == o ? void 0 : o()), react__WEBPACK_IMPORTED_MODULE_2__.createElement(l, __assign({
                            key: String((null == a ? void 0 : a.id) + s)
                        }, "template" === l && {
                            "data-template-variant-id": null == a ? void 0 : a.id
                        }), react__WEBPACK_IMPORTED_MODULE_2__.createElement(r, __assign({}, 0 === s && !e.props.dataOnly && {
                            ref: function(t) {
                                return e.ref = t
                            }
                        }, {
                            className: "builder-content",
                            onClick: e.onClick,
                            "builder-content-id": null == a ? void 0 : a.id,
                            "builder-model": e.name
                        }), e.props.children(null == a ? void 0 : a.data, !e.props.inline && t, n))))
                    }))
                })
            }
            ,
            BuilderContent
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , getContentWithInfo = function(e) {
            var t;
            if (e) {
                var n = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.getCookie("builder.tests.".concat(e.id))
                  , r = n === e.id ? e : null == (t = e.variations) ? void 0 : t[n]
                  , i = (null == r ? void 0 : r.name) || ((null == r ? void 0 : r.id) === e.id ? "Default variation" : "");
                return __assign(__assign({}, e), {
                    variationId: n,
                    testVariationId: n,
                    testVariationName: i
                })
            }
            return null
        };
        function unwrapExports(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        function createCommonjsModule(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }
        var onChange_1 = createCommonjsModule(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Symbol("target")
              , r = Symbol("unsubscribe")
              , i = function(e, t) {
                return t && t.toString && (e && (e += "."),
                e += t.toString()),
                e
            }
              , o = function(e) {
                return Array.isArray(e) ? e.slice() : Object.assign({}, e)
            }
              , a = function(e, t, a) {
                if ("undefined" == typeof Proxy)
                    return e;
                void 0 === a && (a = {});
                var s, l, c = Symbol("ProxyTarget"), u = !1, d = !1, p = !1, f = a.equals || Object.is, m = new WeakMap, h = new WeakMap, v = new WeakMap, b = function(e, n, r, a) {
                    if (!p)
                        if (u) {
                            if (u && l && void 0 !== r && void 0 !== a && "length" !== n) {
                                var c = l;
                                e !== s && function(e, t) {
                                    for (var n; e; )
                                        -1 === (n = e.indexOf(".")) && (n = e.length),
                                        t(e.slice(0, n)),
                                        e = e.slice(n + 1)
                                }(e = e.replace(s, "").slice(1), function(e) {
                                    c[e] = o(c[e]),
                                    c = c[e]
                                }),
                                c[n] = r
                            }
                            d = !0
                        } else
                            t(i(e, n), a, r)
                }, g = function(e, t) {
                    var n = m ? m.get(e) : void 0;
                    n && n.delete(t)
                }, y = function(e, t) {
                    if (p)
                        return e;
                    h.set(e, t);
                    var n = v.get(e);
                    return void 0 === n && (n = new Proxy(e,w),
                    v.set(e, n)),
                    n
                }, k = function(e) {
                    return p || !0 === a.ignoreSymbols && "symbol" == typeof e
                }, w = {
                    get: function(e, t, o) {
                        if (t === c || t === n)
                            return e;
                        if (t === r && "" === h.get(e))
                            return function(e) {
                                return p = !0,
                                m = null,
                                h = null,
                                v = null,
                                e
                            }(e);
                        var s = Reflect.get(e, t, o);
                        if (function(e) {
                            return null === e || "object" != typeof e && "function" != typeof e
                        }(s) || function(e) {
                            return e instanceof RegExp || e instanceof Number
                        }(s) || "constructor" === t || !0 === a.isShallow)
                            return s;
                        var l = function(e, t) {
                            var n = m ? m.get(e) : void 0;
                            if (n)
                                return n;
                            n = new Map,
                            m.set(e, n);
                            var r = n.get(t);
                            return r || (r = Reflect.getOwnPropertyDescriptor(e, t),
                            n.set(t, r)),
                            r
                        }(e, t);
                        if (l && !l.configurable) {
                            if (l.set && !l.get)
                                return;
                            if (!1 === l.writable)
                                return s
                        }
                        return y(s, i(h.get(e), t))
                    },
                    set: function(e, t, n, r) {
                        n && void 0 !== n[c] && (n = n[c]);
                        var i = k(t)
                          , o = i ? null : Reflect.get(e, t, r)
                          , a = Reflect.set(e[c] || e, t, n);
                        return i || f(o, n) || b(h.get(e), t, o, n),
                        a
                    },
                    defineProperty: function(e, t, n) {
                        var r = Reflect.defineProperty(e, t, n);
                        return k(t) || (g(e, t),
                        b(h.get(e), t, void 0, n.value)),
                        r
                    },
                    deleteProperty: function(e, t) {
                        if (!Reflect.has(e, t))
                            return !0;
                        var n = k(t)
                          , r = n ? null : Reflect.get(e, t)
                          , i = Reflect.deleteProperty(e, t);
                        return n || (g(e, t),
                        b(h.get(e), t, r)),
                        i
                    },
                    apply: function(e, t, n) {
                        var r = t instanceof Date;
                        if (r && (t = t[c]),
                        !u) {
                            u = !0,
                            r && (l = t.valueOf()),
                            (Array.isArray(t) || "[object Object]" === toString.call(t)) && (l = o(t[c])),
                            s = (s = h.get(e)).slice(0, Math.max(s.lastIndexOf("."), 0));
                            var i = Reflect.apply(e, t, n);
                            return u = !1,
                            (d || r && !f(l, t.valueOf())) && (b(s, "", l, t[c] || t),
                            l = null,
                            d = !1),
                            i
                        }
                        return Reflect.apply(e, t, n)
                    }
                }, x = y(e, "");
                return t = t.bind(x),
                x
            };
            a.target = function(e) {
                return e[n] || e
            }
            ,
            a.unsubscribe = function(e) {
                return e[r] || e
            }
            ,
            e.exports = a,
            t.default = a
        })
          , onChange = unwrapExports(onChange_1)
          , nextTick = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick;
        function debounceNextTick(e, t, n) {
            return void 0 === t && "function" == typeof e ? debounceNextTickImpl(e) : {
                configurable: !0,
                enumerable: n.enumerable,
                get: function() {
                    return Object.defineProperty(this, t, {
                        configurable: !0,
                        enumerable: n.enumerable,
                        value: debounceNextTickImpl(n.value)
                    }),
                    this[t]
                }
            }
        }
        function debounceNextTickImpl(e) {
            var t = null
              , n = null;
            return function() {
                var e = t;
                t = [].slice.call(arguments),
                n = this,
                null === e && nextTick(r)
            }
            ;
            function r() {
                e.apply(n, t),
                t = null,
                n = null
            }
        }
        function throttle(e, t, n) {
            void 0 === n && (n = {});
            var r, i, o, a = null, s = 0, l = function() {
                s = !1 === n.leading ? 0 : Date.now(),
                a = null,
                o = e.apply(r, i),
                a || (r = i = null)
            };
            return function() {
                var c = Date.now();
                s || !1 !== n.leading || (s = c);
                var u = t - (c - s);
                return r = this,
                i = arguments,
                u <= 0 || u > t ? (a && (clearTimeout(a),
                a = null),
                s = c,
                o = e.apply(r, i),
                a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(l, u)),
                o
            }
        }
        var BuilderMetaContext = react__WEBPACK_IMPORTED_MODULE_2__.createContext({
            emailMode: !1,
            ampMode: !1,
            isServer: !1
        })
          , tryEval = function(e, t, n) {
            void 0 === t && (t = {});
            var r = e;
            if ("string" == typeof r && r.trim()) {
                var i = !(r.includes(";") || r.includes(" return "))
                  , o = function() {};
                try {
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (o = Function("state", "var rootState = state;\n        if (typeof Proxy !== 'undefined') {\n          rootState = new Proxy(rootState, {\n            set: function () {\n              return false;\n            },\n            get: function (target, key) {\n              if (key === 'state') {\n                return state;\n              }\n              return target[key]\n            }\n          });\n        }\n        with (rootState) {\n          ".concat(i ? "return (".concat(e, ");") : e, ";\n        }")))
                } catch (e) {
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && console.warn("Could not compile javascript", e)
                }
                try {
                    if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || shouldForceBrowserRuntimeInNode())
                        return o(t || {});
                    var a = safeDynamicRequire("isolated-vm")
                      , s = getIsolateContext()
                      , l = makeFn(e, i, ["state"])
                      , c = s.evalClosureSync(l, [new a.Reference(t || {})]);
                    try {
                        return JSON.parse(c)
                    } catch (e) {
                        return c
                    }
                } catch (t) {
                    n && n.push(t),
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser ? console.warn("Builder custom code error:", t.message, "in", e, t.stack) : isDebug() && console.debug("Builder custom code error:", t.message, "in", e, t.stack)
                }
            }
        };
        function toError(e) {
            return e instanceof Error ? e : Error(String(e))
        }
        function getBuilderPixel(e) {
            return {
                id: "builder-pixel-" + Math.random().toString(36).split(".")[1],
                "@type": "@builder.io/sdk:Element",
                tagName: "img",
                properties: {
                    role: "presentation",
                    "aria-hidden": "true",
                    src: "https://cdn.builder.io/api/v1/pixel?apiKey=".concat(e)
                },
                responsiveStyles: {
                    large: {
                        height: "0",
                        width: "0",
                        display: "inline-block",
                        opacity: "0",
                        overflow: "hidden",
                        pointerEvents: "none"
                    }
                }
            }
        }
        function pick(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = {};
            return t.forEach(function(t) {
                r[t] = e[t]
            }),
            r
        }
        function omit(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = __assign({}, e);
            return t.forEach(function(e) {
                delete r[e]
            }),
            r
        }
        var instancesMap = new Map
          , wrapComponent = function(e) {
            return function(t) {
                var n, r = t.builderTag || "div", i = ["children"].concat((null == (n = e.inputs) ? void 0 : n.map(function(e) {
                    return e.name
                })) || []), o = omit.apply(void 0, __spreadArray(__spreadArray([t], i, !1), ["attributes"], !1)), a = t;
                return e.noWrap ? react__WEBPACK_IMPORTED_MODULE_2__.createElement(e.class, __assign({
                    attributes: o
                }, a)) : react__WEBPACK_IMPORTED_MODULE_2__.createElement(r, __assign({}, o), react__WEBPACK_IMPORTED_MODULE_2__.createElement(e.class, __assign({}, a)))
            }
        }
          , size$1 = function(e) {
            return Object.keys(e).length
        };
        function debounce(e, t, n) {
            var r;
            return void 0 === n && (n = !1),
            function() {
                var i = this
                  , o = arguments;
                clearTimeout(r),
                r = setTimeout(function() {
                    r = null,
                    n || e.apply(i, o)
                }, t),
                n && !r && e.apply(i, o)
            }
        }
        var fetch$1, fontsLoaded = new Set;
        globalThis.fetch && (fetch$1 = globalThis.fetch),
        null != fetch$1 || (fetch$1 = __webpack_require__(77062));
        var sizeMap = {
            desktop: "large",
            tablet: "medium",
            mobile: "small",
            xsmall: "xsmall"
        }
          , fetchCache = {};
        function searchToObject$1(e) {
            var t = (e.search || "").substring(1).split("&")
              , n = {};
            for (var r in t)
                if (t[r] && "string" == typeof t[r]) {
                    var i = t[r].split("=");
                    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
            return n
        }
        var BuilderComponent = function(e) {
            function t(t) {
                var n, r, i = this;
                (i = e.call(this, t) || this).subscriptions = new _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.yU,
                i.onStateChange = new _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.tQ(null),
                i.asServer = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer,
                i.contentRef = null,
                i.styleRef = null,
                i.rootState = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer ? {} : onChange({}, function() {
                    return i.updateState()
                }),
                i.lastJsCode = "",
                i.lastHttpRequests = {},
                i.httpSubscriptionPerKey = {},
                i.firstLoad = !0,
                i.ref = null,
                i.messageListener = function(e) {
                    var t;
                    if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isTrustedHostForEvent(e)) {
                        var n = e.data;
                        switch (n.type) {
                        case "builder.configureSdk":
                            var r = n.data;
                            if (!r.contentId || r.contentId !== (null == (t = i.useContent) ? void 0 : t.id))
                                return;
                            i.sizes = getSizesForBreakpoints(r.breakpoints || {}),
                            i.setState({
                                state: Object.assign(i.rootState, {
                                    deviceSize: i.deviceSizeState,
                                    device: i.device
                                }),
                                updates: (i.state && i.state.updates || 0) + 1,
                                breakpoints: r.breakpoints
                            });
                            break;
                        case "builder.updateSpacer":
                            var o = n.data;
                            i.rootState._spacer,
                            i.updateState(function(e) {
                                e._spacer = o
                            });
                            break;
                        case "builder.resetState":
                            var a = n.data
                              , s = a.state;
                            if (a.model === i.name) {
                                for (var l in i.rootState)
                                    "function" != typeof i.rootState[l] && delete i.rootState[l];
                                Object.assign(i.rootState, s),
                                i.setState(__assign(__assign({}, i.state), {
                                    state: i.rootState,
                                    updates: (i.state && i.state.updates || 0) + 1
                                }))
                            }
                            break;
                        case "builder.resetSymbolState":
                            var c = n.data.state
                              , u = (s = c.state,
                            c.model,
                            c.id);
                            if (i.props.builderBlock && i.props.builderBlock === u) {
                                for (var l in i.rootState)
                                    delete i.rootState[l];
                                Object.assign(i.rootState, s),
                                i.setState(__assign(__assign({}, i.state), {
                                    state: i.rootState,
                                    updates: (i.state && i.state.updates || 0) + 1
                                }))
                            }
                        }
                    }
                }
                ,
                i.resizeFn = function() {
                    var e = i.deviceSizeState;
                    e !== i.state.state.deviceSize && i.setState(__assign(__assign({}, i.state), {
                        updates: (i.state && i.state.updates || 0) + 1,
                        state: Object.assign(i.rootState, __assign(__assign({}, i.state.state), {
                            deviceSize: e
                        }))
                    }))
                }
                ,
                i.resizeListener = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing ? throttle(i.resizeFn, 200) : debounce(i.resizeFn, 400),
                i.mounted = !1,
                i.updateState = function(e) {
                    var t = i.rootState;
                    e && e(t),
                    i.mounted ? i.setState({
                        update: i.updateState,
                        state: t,
                        updates: (i.state && i.state.updates || 0) + 1
                    }) : i.state = __assign(__assign({}, i.state), {
                        update: i.updateState,
                        state: t,
                        updates: (i.state && i.state.updates || 0) + 1
                    }),
                    i.notifyStateChange()
                }
                ,
                i.onContentLoaded = function(e, t) {
                    if ("page" === i.name && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && e) {
                        var n = e.title
                          , r = e.pageTitle
                          , o = e.description
                          , a = e.pageDescription;
                        if ((n || r) && (document.title = n || r),
                        o || a) {
                            var s = document.querySelector('meta[name="description"]');
                            s || ((s = document.createElement("meta")).setAttribute("name", "description"),
                            document.head.appendChild(s)),
                            s.setAttribute("content", o || a)
                        }
                    }
                    if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && i.notifyStateChange(),
                    i.props.contentLoaded && i.props.contentLoaded(e, t),
                    e && e.inputs && Array.isArray(e.inputs) && e.inputs.length && (e.state || (e.state = {}),
                    e.inputs.forEach(function(t) {
                        t && t.name && void 0 !== t.defaultValue && void 0 === e.state[t.name] && (e.state[t.name] = t.defaultValue)
                    })),
                    e && e.state) {
                        var l = __assign(__assign({}, i.state), {
                            updates: (i.state && i.state.updates || 0) + 1,
                            state: Object.assign(i.rootState, __assign(__assign(__assign(__assign(__assign({}, i.state.state), {
                                location: i.locationState,
                                device: i.device
                            }), e.state), i.externalState), {
                                deviceSize: i.deviceSizeState
                            }))
                        });
                        i.mounted ? i.setState(l) : i.state = l
                    }
                    if (e && e.jsCode && !i.options.codegen) {
                        var c = !1;
                        if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && (i.lastJsCode === e.jsCode ? c = !0 : i.lastJsCode = e.jsCode),
                        !c) {
                            var u = i.state.state;
                            try {
                                Function("data", "ref", "state", "update", "element", "Builder", "builder", "context", e.jsCode)(e, i, u, i.state.update, i.ref, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL, i.state.context)
                            } catch (t) {
                                var d = toError(t);
                                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser ? console.warn("Builder custom code error:", d.message, "in", e.jsCode, d.stack) : isDebug() && console.debug("Builder custom code error:", d.message, "in", e.jsCode, d.stack)
                            }
                        }
                    }
                    if (e && e.httpRequests && !i.props.noAsync && (c = !1,
                    1)) {
                        var p = function(t) {
                            var n = e.httpRequests[t];
                            if (n && (!i.data[t] || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing)) {
                                var r = "object" == typeof n && "@builder.io/core:Request" === n["@type"];
                                if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser) {
                                    var o = r ? i.evalExpression(n.request.url) : i.evalExpression(n);
                                    if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && i.lastHttpRequests[t] === o)
                                        return "continue";
                                    i.lastHttpRequests[t] = o,
                                    r ? i.handleRequest(t, {
                                        url: o,
                                        method: n.request.method,
                                        body: n.request.body,
                                        headers: n.request.headers
                                    }) : i.handleRequest(t, {
                                        url: o,
                                        method: "GET"
                                    });
                                    var a = i.httpSubscriptionPerKey[t];
                                    a && a.unsubscribe();
                                    var s = i.httpSubscriptionPerKey[t] = i.onStateChange.subscribe(function() {
                                        var e = r ? i.evalExpression(n.request.url) : i.evalExpression(n);
                                        e !== o && (r ? i.handleRequest(t, {
                                            url: e,
                                            method: n.request.method,
                                            body: n.request.body,
                                            headers: n.request.headers
                                        }) : i.handleRequest(t, {
                                            url: e,
                                            method: "GET"
                                        }),
                                        i.lastHttpRequests[t] = e)
                                    });
                                    i.subscriptions.add(s)
                                } else
                                    r ? i.handleRequest(t, {
                                        url: i.evalExpression(n.request.url),
                                        method: n.request.method,
                                        body: n.request.body,
                                        headers: n.request.headers
                                    }) : i.handleRequest(t, {
                                        url: i.evalExpression(n),
                                        method: "GET"
                                    })
                            }
                        };
                        for (var f in e.httpRequests)
                            p(f)
                    }
                }
                ;
                var o = i.inlinedContent;
                o && o.content && (o = o.content),
                i.sizes = getSizesForBreakpoints((null == (n = null == o ? void 0 : o.meta) ? void 0 : n.breakpoints) || {});
                var a = null == (r = i.inlinedContent) ? void 0 : r.data;
                a && Array.isArray(a.inputs) && a.inputs.length > 0 && (a.state || (a.state = {}),
                a.inputs.forEach(function(e) {
                    e && e.name && void 0 !== e.defaultValue && void 0 === a.state[e.name] && (a.state[e.name] = e.defaultValue)
                })),
                i.state = {
                    context: __assign(__assign({}, t.context), {
                        apiKey: i.props.apiKey || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.apiKey,
                        nonce: i.props.nonce
                    }),
                    state: Object.assign(i.rootState, __assign(__assign(__assign(__assign({}, i.inlinedContent && i.inlinedContent.data && i.inlinedContent.data.state), {
                        isBrowser: _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser,
                        isServer: !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser,
                        _hydrate: t.hydrate,
                        location: i.locationState,
                        deviceSize: i.deviceSizeState,
                        device: i.device
                    }), i.getHtmlData()), t.data)),
                    updates: 0,
                    key: 0,
                    update: i.updateState
                };
                var s = i.props.apiKey;
                if (s && s !== i.builder.apiKey && !instancesMap.has(s)) {
                    var l = new _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$(s,void 0,void 0,!0);
                    instancesMap.set(s, l)
                }
                if (i.inlinedContent) {
                    var c = i.inlinedContent.content || i.inlinedContent;
                    i.onContentLoaded(null == c ? void 0 : c.data, getContentWithInfo(c))
                }
                return i.registerCustomComponents(),
                i
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "options", {
                get: function() {
                    return __assign(__assign({}, t.defaults), this.props)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return this.props.model || this.props.modelName || this.props.name
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "element", {
                get: function() {
                    return this.ref
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "inlinedContent", {
                get: function() {
                    if (!this.isPreviewing || this.props.inlineContent)
                        return this.props.content
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "builder", {
                get: function() {
                    return this.props.apiKey && instancesMap.get(this.props.apiKey) || this.props.builder || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getHtmlData = function() {
                var e = this.inlinedContent && this.inlinedContent.id || this.props.entry
                  , t = e && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && document.querySelector('script[data-builder-json="'.concat(e, '"],script[data-builder-state="').concat(e, '"]'));
                if (t)
                    try {
                        return JSON.parse(t.innerText)
                    } catch (e) {
                        console.warn("Could not parse Builder.io HTML data transfer", e, t.innerText)
                    }
                return {}
            }
            ,
            Object.defineProperty(t.prototype, "device", {
                get: function() {
                    return this.builder.getUserAttributes().device || "desktop"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "locationState", {
                get: function() {
                    return __assign(__assign({}, pick(this.location, "pathname", "hostname", "search", "host")), {
                        path: this.location.pathname && this.location.pathname.split("/").slice(1) || "",
                        query: searchToObject$1(this.location)
                    })
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "deviceSizeState", {
                get: function() {
                    return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser ? this.sizes.getSizeForWidth(window.innerWidth) : sizeMap[this.device] || "large"
                },
                enumerable: !1,
                configurable: !0
            }),
            t.renderInto = function(e, n, r, i) {
                if (void 0 === n && (n = {}),
                void 0 === r && (r = !0),
                void 0 === i && (i = !1),
                console.debug("BuilderPage.renderInto", e, n, r, this),
                e) {
                    var o = null;
                    if ("string" == typeof e ? o = document.querySelector(e) : e instanceof Element && (o = e),
                    o) {
                        var a = o.classList.contains("builder-hydrated");
                        if (!a || i) {
                            o.classList.add("builder-hydrated");
                            var s = r && o.innerHTML.includes("builder-block");
                            if (!o.classList.contains("builder-component")) {
                                var l = o.querySelector(".builder-api-styles") || (o.previousElementSibling && o.previousElementSibling.matches(".builder-api-styles") ? o.previousElementSibling : null)
                                  , c = "";
                                l && (l.innerHTML.replace(/\/\*start:([^\*]+?)\*\/([\s\S]*?)\/\*end:([^\*]+?)\*\//g, function(e, t, n) {
                                    var r = null;
                                    try {
                                        r = document.querySelector('[data-emotion-css="'.concat(t, '"]'))
                                    } catch (e) {
                                        console.warn(e)
                                    }
                                    return r ? r.innerHTML = n : _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || (c += e),
                                    e
                                }),
                                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick(function() {
                                    l.innerHTML = c
                                }));
                                var u = o.querySelector(".builder-component");
                                u ? o = u : s = !1
                            }
                            location.search.includes("builder.debug=true") && console.debug("hydrate", s, o);
                            var d = o;
                            if (!a) {
                                var p = document.createElement("div");
                                o.insertAdjacentElement("beforebegin", p),
                                p.appendChild(o),
                                d = p
                            }
                            if ((_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && location.search.includes("builder.preview=")) && (s = !1),
                            s && o) {
                                var f = react_dom__WEBPACK_IMPORTED_MODULE_3__.render(react__WEBPACK_IMPORTED_MODULE_2__.createElement(t, __assign({}, n)), d, d.builderRootRef);
                                return d.builderRootRef = f,
                                f
                            }
                            var m = react_dom__WEBPACK_IMPORTED_MODULE_3__.render(react__WEBPACK_IMPORTED_MODULE_2__.createElement(t, __assign({}, n)), d, d.builderRootRef);
                            return d.builderRootRef = m,
                            m
                        }
                        console.debug("Tried to hydrate multiple times")
                    }
                }
            }
            ,
            t.prototype.registerCustomComponents = function() {
                if (this.props.customComponents)
                    for (var e = 0, t = this.props.customComponents; e < t.length; e++) {
                        var n = t[e];
                        if (n) {
                            var r = n.component
                              , i = __rest(n, ["component"]);
                            _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(r, i)
                        }
                    }
            }
            ,
            t.prototype.componentDidMount = function() {
                var e, t = this;
                this.mounted = !0,
                this.asServer && (this.asServer = !1,
                this.updateState(function(e) {
                    e.isBrowser = !0,
                    e.isServer = !1
                })),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isIframe && (null == (e = window.parent) || e.postMessage({
                    type: "builder.sdkInjected",
                    data: {
                        modelName: this.name,
                        apiKey: this.props.apiKey || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.apiKey
                    }
                }, "*")),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (window.addEventListener("resize", this.resizeListener),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && window.addEventListener("message", this.messageListener),
                (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing) && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick(function() {
                    t.firstLoad = !1,
                    t.reload()
                }),
                setTimeout(function() {
                    window.dispatchEvent(new CustomEvent("builder:component:load",{
                        detail: {
                            ref: t
                        }
                    }))
                }))
            }
            ,
            Object.defineProperty(t.prototype, "isPreviewing", {
                get: function() {
                    return (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing && !this.firstLoad) && (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.previewingModel === this.name || "BUILDER_STUDIO" === _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.previewingModel)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.notifyStateChange = function() {
                if (!_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer && this && this.state) {
                    var e = this.state.state;
                    this.props.onStateChange && this.props.onStateChange(e),
                    _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && window.dispatchEvent(new CustomEvent("builder:component:stateChange",{
                        detail: {
                            state: e,
                            ref: this
                        }
                    })),
                    this.onStateChange.next(e)
                }
            }
            ,
            t.prototype.processStateFromApi = function(e) {
                return e
            }
            ,
            Object.defineProperty(t.prototype, "location", {
                get: function() {
                    return this.props.location || (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser ? location : {})
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getCssFromFont = function(e, t) {
                var n = e.family + (e.kind && !e.kind.includes("#") ? ", " + e.kind : "")
                  , r = n.split(",")[0]
                  , i = e.fileUrl ? e.fileUrl : e.files && e.files.regular
                  , o = "";
                if (i && n && r && (o += '\n@font-face {\n  font-family: "'.concat(n, '";\n  src: local("').concat(r, "\"), url('").concat(i, "') format('woff2');\n  font-display: fallback;\n  font-weight: 400;\n}\n        ").trim()),
                e.files) {
                    for (var a in e.files)
                        if (String(Number(a)) === a) {
                            var s = e.files[a];
                            s && s !== i && (o += '\n@font-face {\n  font-family: "'.concat(n, "\";\n  src: url('").concat(s, "') format('woff2');\n  font-display: fallback;\n  font-weight: ").concat(a, ";\n}\n          ").trim())
                        }
                }
                return o
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.unsubscribe(),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (window.removeEventListener("resize", this.resizeListener),
                window.removeEventListener("message", this.messageListener))
            }
            ,
            t.prototype.getFontCss = function(e) {
                var t = this;
                return this.builder.allowCustomFonts && (null == e ? void 0 : e.customFonts) && e.customFonts.length && e.customFonts.map(function(n) {
                    return t.getCssFromFont(n, e)
                }).join(" ") || ""
            }
            ,
            t.prototype.ensureFontsLoaded = function(e) {
                if (this.builder.allowCustomFonts && (null == e ? void 0 : e.customFonts) && Array.isArray(e.customFonts))
                    for (var t = 0, n = e.customFonts; t < n.length; t++) {
                        var r = n[t]
                          , i = r.fileUrl ? r.fileUrl : r.files && r.files.regular;
                        if (!fontsLoaded.has(i)) {
                            var o = this.getCssFromFont(r, e);
                            if (fontsLoaded.add(i),
                            !o)
                                continue;
                            var a = document.createElement("style");
                            a.className = "builder-custom-font",
                            a.setAttribute("data-builder-custom-font", i),
                            a.innerHTML = o,
                            document.head.appendChild(a)
                        }
                    }
            }
            ,
            t.prototype.getCss = function(e) {
                var t, n = null == (t = this.useContent) ? void 0 : t.id, r = (null == e ? void 0 : e.cssCode) || "";
                return n && (r = r.replace(/&/g, ".builder-component-".concat(n))),
                r + this.getFontCss(e)
            }
            ,
            Object.defineProperty(t.prototype, "data", {
                get: function() {
                    var e, t = __assign(__assign(__assign({}, this.inlinedContent && (null == (e = this.inlinedContent.data) ? void 0 : e.state)), this.externalState), this.state.state);
                    return Object.assign(this.rootState, t),
                    t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentDidUpdate = function(e) {
                var t = this;
                this.props.data && e.data !== this.props.data && this.state.update(function(e) {
                    Object.assign(e, t.externalState)
                }),
                this.props.customComponents && this.props.customComponents !== e.customComponents && this.registerCustomComponents(),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && this.inlinedContent && e.content !== this.inlinedContent && this.onContentLoaded(this.inlinedContent.data, this.inlinedContent)
            }
            ,
            t.prototype.checkStyles = function(e) {
                if (this.styleRef) {
                    var t = this.getCss(e);
                    this.styleRef.innerHTML !== t && (this.styleRef.innerHTML = t)
                }
            }
            ,
            t.prototype.reload = function() {
                this.setState({
                    key: this.state.key + 1
                })
            }
            ,
            Object.defineProperty(t.prototype, "content", {
                get: function() {
                    var e = this.inlinedContent;
                    return e && e.content && (e = __assign(__assign({}, e), {
                        data: e.content
                    })),
                    e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "externalState", {
                get: function() {
                    return __assign(__assign({}, this.props.data), this.props.locale ? {
                        locale: this.props.locale
                    } : {})
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "useContent", {
                get: function() {
                    return this.content || this.state.context.builderContent
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.render = function() {
                var e, t = this, n = this.content, r = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && this.externalState && size$1(this.externalState) && hash_sum__WEBPACK_IMPORTED_MODULE_4___default()(this.externalState), i = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing ? this.name : this.props.entry;
                i && !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && r && r.length < 300 && (i += ":" + r);
                var o = this.props.dataOnly ? react__WEBPACK_IMPORTED_MODULE_2__.Fragment : "div"
                  , a = null == (e = this.useContent) ? void 0 : e.id;
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(o, {
                    onClick: function(e) {
                        !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || t.props.isChild || t.props.stopClickPropagationWhenEditing || e.stopPropagation()
                    },
                    className: "builder-component ".concat(a ? "builder-component-".concat(a) : ""),
                    "data-name": this.name,
                    "data-source": "Rendered by Builder.io",
                    key: this.state.key,
                    ref: function(e) {
                        return t.ref = e
                    }
                }, react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderMetaContext.Consumer, null, function(e) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderMetaContext.Provider, {
                        value: "boolean" == typeof t.props.ampMode ? __assign(__assign({}, e), {
                            ampMode: t.props.ampMode
                        }) : e
                    }, react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderAsyncRequestsContext.Consumer, null, function(e) {
                        var r;
                        return t._asyncRequests = e && e.requests,
                        t._errors = e && e.errors,
                        t._logs = e && e.logs,
                        react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderContent, {
                            isStatic: t.props.isStatic || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isStatic,
                            key: (null == (r = t.inlinedContent) ? void 0 : r.id) || ("content"in t.props && !t.isPreviewing ? "null-content-prop" : "no-content-prop"),
                            builder: t.builder,
                            ref: function(e) {
                                return t.contentRef = e
                            },
                            contentLoaded: function(e, n) {
                                return t.onContentLoaded(e, n)
                            },
                            options: __assign(__assign(__assign(__assign(__assign(__assign({
                                key: i,
                                entry: t.props.entry
                            }, n && {
                                initialContent: [n]
                            }), !n && "content"in t.props && !t.isPreviewing && {
                                initialContent: []
                            }), t.props.url && {
                                url: t.props.url
                            }), t.props.options), t.props.locale ? {
                                locale: t.props.locale
                            } : {}), t.options.codegen && {
                                format: "react"
                            }),
                            inline: t.props.inlineContent || !t.isPreviewing && "content"in t.props,
                            contentError: t.props.contentError,
                            modelName: t.name || "page",
                            nonce: t.props.nonce
                        }, function(e, n, r) {
                            if (t.props.dataOnly)
                                return null;
                            r && r.id && (t.state.breakpoints && (r.meta = r.meta || {},
                            r.meta.breakpoints = t.state.breakpoints),
                            t.state.context.builderContent = r),
                            _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick(function() {
                                t.checkStyles(e)
                            });
                            var i, o = t.options.codegen;
                            if (o && !t.Component && (null == e ? void 0 : e.blocksJs)) {
                                var a = Array.from(new Set(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.components.map(function(e) {
                                    return e.name
                                })))
                                  , s = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.components.slice().reverse()
                                  , l = a.map(function(e) {
                                    return s.find(function(t) {
                                        return t.class && t.name === e
                                    })
                                })
                                  , c = a.map(function(e) {
                                    return (e || "").replace(/[^\w]+/gi, "")
                                })
                                  , u = l.map(function(e) {
                                    return wrapComponent(e)
                                });
                                t.Component = (new (Function.bind.apply(Function, __spreadArray(__spreadArray([void 0, "jsx", "_css", "Builder", "builder", "React", "useBuilderState"], c, !1), [e.blocksJs], !1)))).apply(void 0, __spreadArray([_emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y, _emotion_core__WEBPACK_IMPORTED_MODULE_1__.AH, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$, _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL, react__WEBPACK_IMPORTED_MODULE_2__, function(e) {
                                    var t = react__WEBPACK_IMPORTED_MODULE_2__.useState(0)[1];
                                    return react__WEBPACK_IMPORTED_MODULE_2__.useState(function() {
                                        return onChange(e, function() {
                                            t(function(e) {
                                                return e + 1
                                            })
                                        })
                                    })[0]
                                }
                                ], u, !1))
                            }
                            var d = (null == e ? void 0 : e.blocks) || []
                              , p = d.find(function(e) {
                                var t;
                                return null == (t = e.id) ? void 0 : t.startsWith("builder-pixel")
                            });
                            return e && !p && d.length > 0 && d.push(getBuilderPixel(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.apiKey)),
                            e ? react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", __assign({
                                "data-builder-component": t.name,
                                "data-builder-content-id": r.id
                            }, t.isPreviewing ? {
                                "data-builder-variation-id": r.testVariationId || r.variationId || r.id
                            } : {}), !o && t.getCss(e) && react__WEBPACK_IMPORTED_MODULE_2__.createElement("style", {
                                nonce: t.props.nonce,
                                ref: function(e) {
                                    return t.styleRef = e
                                },
                                className: "builder-custom-styles",
                                dangerouslySetInnerHTML: {
                                    __html: t.getCss(e)
                                }
                            }), react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderStoreContext.Provider, {
                                value: __assign(__assign({}, t.state), {
                                    rootState: t.rootState,
                                    state: t.data,
                                    content: r,
                                    renderLink: t.props.renderLink
                                })
                            }, o && t.Component ? react__WEBPACK_IMPORTED_MODULE_2__.createElement(t.Component, {
                                data: t.data,
                                context: t.state.context
                            }) : react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlocks, {
                                key: String(!!(null == (i = null == e ? void 0 : e.blocks) ? void 0 : i.length)),
                                emailMode: t.props.emailMode,
                                fieldName: "blocks",
                                blocks: d
                            }))) : n ? react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
                                "data-builder-component": t.name,
                                className: "builder-loading"
                            }, t.props.children) : react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
                                "data-builder-component": t.name,
                                className: "builder-no-content"
                            })
                        })
                    }))
                }))
            }
            ,
            t.prototype.evalExpression = function(e) {
                var t = this
                  , n = this.data;
                return String(e).replace(/{{([^}]+)}}/g, function(e, r) {
                    return tryEval(r, n, t._errors)
                })
            }
            ,
            t.prototype.handleRequest = function(e, t) {
                return __awaiter(this, void 0, void 0, function() {
                    var n, r, i, o, a, s, l, c, u, d = this;
                    return __generator(this, function(p) {
                        return n = t.url,
                        r = t.method,
                        a = JSON.stringify({
                            url: n,
                            method: r,
                            body: i = t.body,
                            headers: o = t.headers
                        }),
                        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isIframe && fetchCache[a] ? (this.updateState(function(t) {
                            t[e] = fetchCache[a]
                        }),
                        [2, fetchCache[a]]) : (s = function() {
                            return __awaiter(d, void 0, void 0, function() {
                                var t, s, l, c;
                                return __generator(this, function(u) {
                                    switch (u.label) {
                                    case 0:
                                        t = Date.now(),
                                        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || console.time("Fetch " + a),
                                        u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 4, 5, 6]),
                                        l = {
                                            method: r,
                                            headers: o,
                                            body: i
                                        },
                                        "GET" === r && delete l.body,
                                        [4, fetch$1(n, l)];
                                    case 2:
                                        return [4, u.sent().json()];
                                    case 3:
                                        return s = u.sent(),
                                        [3, 6];
                                    case 4:
                                        return c = toError(u.sent()),
                                        this._errors && this._errors.push(c),
                                        this._logs && this._logs.push("Fetch to ".concat(a, " errored in ").concat(Date.now() - t, "ms")),
                                        [2];
                                    case 5:
                                        return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || (console.timeEnd("Fetch " + a),
                                        this._logs && this._logs.push("Fetched ".concat(a, " in ").concat(Date.now() - t, "ms"))),
                                        [7];
                                    case 6:
                                        return s && (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isIframe && (fetchCache[a] = s),
                                        this.updateState(function(t) {
                                            t[e] = s
                                        })),
                                        [2, s]
                                    }
                                })
                            })
                        }
                        ,
                        (l = this._asyncRequests && this._asyncRequests.find(function(e) {
                            return isRequestInfo(e) && e.url === n
                        })) ? ((c = l.promise).then(function(t) {
                            t && d.updateState(function(n) {
                                n[e] = t
                            })
                        }),
                        [2, c]) : (u = s(),
                        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick(function() {
                            d._asyncRequests && d._asyncRequests.push(u)
                        }),
                        [2, u]))
                    })
                })
            }
            ,
            t.prototype.unsubscribe = function() {
                this.subscriptions && (this.subscriptions.unsubscribe(),
                this.subscriptions = new _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.yU)
            }
            ,
            t.prototype.handleBuilderRequest = function(e, t) {
                var n = this
                  , r = tryEval(t, this.data, this._errors);
                this.subscriptions && this.unsubscribe(),
                r && this.subscriptions.add(this.builder.queueGetContent(r.model, r).subscribe(function(t) {
                    t && n.updateState(function(n) {
                        n[e] = t
                    })
                }))
            }
            ,
            t.defaults = {
                codegen: !!(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && location.href.includes("builder.codegen=true"))
            },
            __decorate([debounceNextTick, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], t.prototype, "notifyStateChange", null),
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component);
        function BuilderBlock(e) {
            return e.type = "react",
            _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.Component(e)
        }
        function updateMetadata(e, t) {
            var n = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.components.find(function(t) {
                return "string" == typeof e ? t.name === e : t.class === t
            }) || null
              , r = t(n);
            n && r ? _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(r.class || n.class, r) : n && !r || !n && r && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(r.class, r)
        }
        function withBuilder(e, t) {
            return BuilderBlock(t)(e),
            e
        }
        var isBuilderElement = function(e) {
            return !!("object" == typeof e && e && "@builder.io/sdk:Element" === (null == e ? void 0 : e["@type"]))
        }
          , withChildren = function(e) {
            var t = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function(t, n) {
                var r, i, o = __assign({}, t), a = t.children || t.builderBlock && t.builderBlock.children && t.builderBlock.children.map(function(e) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlock$1, {
                        key: e.id,
                        block: e
                    })
                }), s = null == (i = null == (r = t.builderBlock) ? void 0 : r.component) ? void 0 : i.options;
                return s && Object.keys(s).forEach(function(e) {
                    var t = s[e];
                    Array.isArray(t) && t.every(isBuilderElement) ? o[e] = t.map(function(e) {
                        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlock$1, {
                            key: e.id,
                            block: e
                        })
                    }) : isBuilderElement(t) && (o[e] = react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlock$1, {
                        block: t
                    }))
                }),
                react__WEBPACK_IMPORTED_MODULE_2__.createElement(e, __assign({}, o, {
                    ref: n
                }), a)
            });
            return t.builderOptions = {
                canHaveChildren: !0
            },
            t
        }
          , noWrap = function(e) {
            var t = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function(t, n) {
                var r = __assign(__assign({}, t), t.attributes);
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(e, __assign({}, r, {
                    ref: n
                }))
            });
            return t.builderOptions = {
                noWrap: !0
            },
            t
        }
          , iconUrl = "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-text_fields-24px%20(1).svg?alt=media&token=12177b73-0ee3-42ca-98c6-0dd003de1929"
          , TextComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.textRef = null,
                t
            }
            return __extends(t, e),
            t.prototype.componentDidMount = function() {
                this.textRef && !/{{([^}]+)}}/.test(this.props.text) && (this.textRef.innerHTML = this.props.text)
            }
            ,
            t.prototype.evalExpression = function(e, t) {
                return this.allowTextEdit ? String(e) : String(e).replace(/{{([^}]+)}}/g, function(e, n) {
                    return tryEval(n, t)
                })
            }
            ,
            Object.defineProperty(t.prototype, "allowTextEdit", {
                get: function() {
                    return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && location.search.includes("builder.allowTextEdit=true") && !(this.props.builderBlock && this.props.builderBlock.bindings && (this.props.builderBlock.bindings["component.options.text"] || this.props.builderBlock.bindings["options.text"] || this.props.builderBlock.bindings.text))
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.render = function() {
                var e = this
                  , t = {
                    outline: "none",
                    "& p:first-of-type, & .builder-paragraph:first-of-type": {
                        margin: 0
                    },
                    "& > p, & .builder-paragraph": {
                        color: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        fontWeight: "inherit",
                        fontSize: "inherit",
                        textAlign: "inherit",
                        fontFamily: "inherit"
                    }
                };
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Consumer, null, function(n) {
                    var r;
                    return (null == (r = n.content.meta) ? void 0 : r.rtlMode) && (t.direction = "rtl"),
                    (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("span", __assign({
                        ref: function(t) {
                            e.textRef = t
                        },
                        css: t,
                        className: "builder-text"
                    }, {
                        dangerouslySetInnerHTML: {
                            __html: e.evalExpression(e.props.text || e.props.content || "", n.state)
                        }
                    })))
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Text = withBuilder(TextComponent, {
            name: "Text",
            static: !0,
            image: iconUrl,
            inputs: [{
                name: "text",
                type: "html",
                required: !0,
                autoFocus: !0,
                bubble: !0,
                defaultValue: "Enter some text..."
            }],
            defaultStyles: {
                lineHeight: "normal",
                height: "auto",
                textAlign: "center"
            }
        });
        function Slot(e) {
            var t = e.name
              , n = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useContext)(BuilderStoreContext)
              , r = !n.context.symbolId;
            return (0,
            _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", __assign({
                css: {
                    pointerEvents: "auto"
                }
            }, r && {
                "builder-slot": t
            }), (0,
            _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlocks, {
                child: !0,
                parentElementId: n.context.symbolId,
                dataPath: "symbol.data.".concat(t),
                blocks: n.state[t] || []
            }))
        }
        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(Slot, {
            name: "Slot",
            description: "Allow child blocks to be inserted into this content when used as a Symbol",
            docsLink: "https://www.builder.io/c/docs/symbols-with-blocks",
            image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3aad6de36eae43b59b52c85190fdef56",
            inputs: [{
                name: "name",
                type: "string",
                required: !0,
                defaultValue: "children"
            }]
        });
        var FragmentComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                return this.props.builderBlock && this.props.builderBlock.children && this.props.builderBlock.children.map(function(e, t) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlock$1, {
                        block: e,
                        key: e.id,
                        index: t
                    })
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Fragment = withBuilder(FragmentComponent, {
            name: "Core:Fragment",
            canHaveChildren: !0,
            noWrap: !0,
            static: !0,
            hideFromInsertMenu: !0
        })
          , DEFAULT_ASPECT_RATIO$2 = .7004048582995948
          , defaultBlocks = [{
            "@type": "@builder.io/sdk:Element",
            responsiveStyles: {
                large: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    flexShrink: "0",
                    position: "relative",
                    marginTop: "30px",
                    textAlign: "center",
                    lineHeight: "normal",
                    height: "auto",
                    minHeight: "20px",
                    minWidth: "20px",
                    overflow: "hidden"
                }
            },
            component: {
                name: "Image",
                options: {
                    image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    aspectRatio: DEFAULT_ASPECT_RATIO$2
                }
            }
        }, {
            "@type": "@builder.io/sdk:Element",
            responsiveStyles: {
                large: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    flexShrink: "0",
                    position: "relative",
                    marginTop: "30px",
                    textAlign: "center",
                    lineHeight: "normal",
                    height: "auto"
                }
            },
            component: {
                name: "Text",
                options: {
                    text: "<p>Enter some text...</p>"
                }
            }
        }]
          , ColumnsComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "columns", {
                get: function() {
                    return this.props.columns || []
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "gutterSize", {
                get: function() {
                    return "number" == typeof this.props.space ? this.props.space || 0 : 20
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getWidth = function(e) {
                return this.columns[e] && this.columns[e].width || 100 / this.columns.length
            }
            ,
            t.prototype.getColumnWidth = function(e) {
                var t = this.columns
                  , n = this.gutterSize
                  , r = this.getWidth(e)
                  , i = n * (t.length - 1) * (r / 100);
                return "calc(".concat(r, "% - ").concat(i, "px)")
            }
            ,
            t.prototype.render = function() {
                var e, t, n, r, i = this, o = this.columns, a = this.gutterSize, s = getSizesForBreakpoints((null == (r = null == (n = null == (t = this.props.builderState) ? void 0 : t.context.builderContent) ? void 0 : n.meta) ? void 0 : r.breakpoints) || {});
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                    className: "builder-columns",
                    css: __assign({
                        display: "flex",
                        height: "100%"
                    }, "never" !== this.props.stackColumnsAt && ((e = {})["@media (max-width: ".concat("tablet" !== this.props.stackColumnsAt ? s.small.max : s.medium.max, "px)")] = {
                        flexDirection: this.props.reverseColumnsWhenStacked ? "column-reverse" : "column",
                        alignItems: "stretch"
                    },
                    e))
                }, o.map(function(e, t) {
                    var n, r, o = e.link ? Link : "div";
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        key: t
                    }, (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(o, __assign({
                        className: "builder-column"
                    }, e.link ? {
                        href: e.link
                    } : null, {
                        css: __assign(((n = {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            lineHeight: "normal"
                        })["& > .builder-blocks"] = {
                            flexGrow: 1
                        },
                        n.width = i.getColumnWidth(t),
                        n.marginLeft = 0 === t ? 0 : a,
                        n), "never" !== i.props.stackColumnsAt && ((r = {})["@media (max-width: ".concat("tablet" !== i.props.stackColumnsAt ? s.small.max : s.medium.max, "px)")] = {
                            width: "100%",
                            marginLeft: 0
                        },
                        r))
                    }), (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlocks, {
                        key: t,
                        child: !0,
                        parentElementId: i.props.builderBlock && i.props.builderBlock.id,
                        blocks: e.blocks,
                        dataPath: "component.options.columns.".concat(t, ".blocks")
                    })))
                })))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Columns = withBuilder(ColumnsComponent, {
            name: "Columns",
            static: !0,
            inputs: [{
                name: "columns",
                type: "array",
                broadcast: !0,
                subFields: [{
                    name: "blocks",
                    type: "array",
                    hideFromUI: !0,
                    defaultValue: defaultBlocks
                }, {
                    name: "width",
                    type: "number",
                    hideFromUI: !0,
                    helperText: "Width %, e.g. set to 50 to fill half of the space"
                }, {
                    name: "link",
                    type: "url",
                    helperText: "Optionally set a url that clicking this column will link to"
                }],
                defaultValue: [{
                    blocks: defaultBlocks
                }, {
                    blocks: defaultBlocks
                }],
                onChange: function(e) {
                    function t() {
                        n.forEach(function(e) {
                            e.delete("width")
                        })
                    }
                    var n = e.get("columns");
                    Array.isArray(n) && (!n.find(function(e) {
                        return e.get("width")
                    }) || (n.find(function(e) {
                        return !e.get("width")
                    }) || 100 !== n.reduce(function(e, t) {
                        return e + t.get("width")
                    }, 0)) && t())
                }
            }, {
                name: "space",
                type: "number",
                defaultValue: 20,
                helperText: "Size of gap between columns",
                advanced: !0
            }, {
                name: "stackColumnsAt",
                type: "string",
                defaultValue: "tablet",
                helperText: "Convert horizontal columns to vertical at what device size",
                enum: ["tablet", "mobile", "never"],
                advanced: !0
            }, {
                name: "reverseColumnsWhenStacked",
                type: "boolean",
                defaultValue: !1,
                helperText: "When stacking columns for mobile devices, reverse the ordering",
                advanced: !0
            }]
        })
          , EmbedComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.elementRef = null,
                t.scriptsInserted = new Set,
                t.scriptsRun = new Set,
                t
            }
            return __extends(t, e),
            t.prototype.shouldComponentUpdate = function(e) {
                return e.content !== this.props.content
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                this.props.content !== e.content && this.findAndRunScripts()
            }
            ,
            t.prototype.componentDidMount = function() {
                this.findAndRunScripts()
            }
            ,
            t.prototype.findAndRunScripts = function() {
                if (this.elementRef && "undefined" != typeof window)
                    for (var e = this.elementRef.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.src) {
                            if (this.scriptsInserted.has(n.src))
                                continue;
                            this.scriptsInserted.add(n.src);
                            var r = document.createElement("script");
                            r.async = !0,
                            r.src = n.src,
                            document.head.appendChild(r)
                        } else {
                            if (this.scriptsRun.has(n.innerText))
                                continue;
                            this.scriptsRun.add(n.innerText);
                            try {
                                Function(n.innerText)()
                            } catch (e) {
                                console.warn("Builder custom code component error:", e)
                            }
                        }
                    }
            }
            ,
            Object.defineProperty(t.prototype, "content", {
                get: function() {
                    return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer ? (this.props.content || "").replace(/<script[\s\S]*?<\/script>/g, "") : this.props.content
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.render = function() {
                var e = this;
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
                    ref: function(t) {
                        return e.elementRef = t
                    },
                    className: "builder-embed",
                    dangerouslySetInnerHTML: {
                        __html: this.content
                    }
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Embed = withBuilder(EmbedComponent, {
            name: "Embed",
            static: !0,
            inputs: [{
                name: "url",
                type: "url",
                required: !0,
                defaultValue: "",
                helperText: "e.g. enter a youtube url, google map, etc"
            }, {
                name: "content",
                type: "html",
                defaultValue: '<div style="padding: 20px; text-align: center">(Choose an embed URL)<div>',
                hideFromUI: !0
            }]
        })
          , globalReplaceNodes = {}
          , isShopify$1 = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && "Shopify"in window;
        if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && globalReplaceNodes) {
            var customCodeQuerySelector_1 = ".builder-custom-code";
            try {
                var allCustomCodeElements_1 = Array.from(document.querySelectorAll(customCodeQuerySelector_1))
                  , builderTemplates = document.querySelectorAll("template[data-template-variant-id]");
                builderTemplates.length && Array.from(builderTemplates).forEach(function(e) {
                    var t = e.content.querySelectorAll(customCodeQuerySelector_1);
                    t.length && (allCustomCodeElements_1 = allCustomCodeElements_1.concat(Array.from(t)))
                }),
                allCustomCodeElements_1.forEach(function(e) {
                    var t = e.parentElement
                      , n = t && t.getAttribute("builder-id");
                    n && (globalReplaceNodes[n] = globalReplaceNodes[n] || [],
                    globalReplaceNodes[n].push(isShopify$1 ? e : e.cloneNode(!0)))
                })
            } catch (e) {
                console.error("Builder replace nodes error:", e)
            }
        }
        var CustomCodeComponent = function(e) {
            function t(t) {
                var n, r = this;
                if ((r = e.call(this, t) || this).elementRef = null,
                r.originalRef = null,
                r.scriptsInserted = new Set,
                r.scriptsRun = new Set,
                r.firstLoad = !0,
                r.replaceNodes = !1,
                r.state = {
                    hydrated: !1
                },
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser) {
                    var i = null == (n = r.props.builderBlock) ? void 0 : n.id;
                    if (r.replaceNodes = !!(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (t.replaceNodes || isShopify$1) && i && (null == globalReplaceNodes ? void 0 : globalReplaceNodes[i])),
                    r.firstLoad && r.props.builderBlock) {
                        if (i && (null == globalReplaceNodes ? void 0 : globalReplaceNodes[i])) {
                            var o = globalReplaceNodes[i].shift() || null;
                            r.originalRef = o,
                            0 === globalReplaceNodes[i].length && delete globalReplaceNodes[i]
                        } else if (r.replaceNodes) {
                            var a = document.querySelectorAll(".".concat(r.props.builderBlock.id, " .builder-custom-code"));
                            if (1 === a.length) {
                                var s = a[0];
                                r.originalRef = s,
                                r.originalRef.remove()
                            }
                        }
                    }
                }
                return r
            }
            return __extends(t, e),
            t.prototype.shouldComponentUpdate = function(e) {
                return e.code !== this.props.code
            }
            ,
            Object.defineProperty(t.prototype, "noReactRender", {
                get: function() {
                    var e;
                    return !!(isShopify$1 && (null == (e = this.props.code) ? void 0 : e.match(/{[{%]/g)))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isHydrating", {
                get: function() {
                    return !isShopify$1 && this.originalRef
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentDidUpdate = function(e) {
                this.props.code !== e.code && this.findAndRunScripts()
            }
            ,
            t.prototype.componentDidMount = function() {
                var e = this;
                this.firstLoad = !1,
                this.replaceNodes || (this.isHydrating ? (this.setState({
                    hydrated: !0
                }),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick(function() {
                    return e.findAndRunScripts()
                })) : this.findAndRunScripts()),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && this.replaceNodes && this.originalRef && this.elementRef && this.elementRef.appendChild(this.originalRef)
            }
            ,
            t.prototype.findAndRunScripts = function() {
                if (this.elementRef && "undefined" != typeof window)
                    for (var e = this.elementRef.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.src) {
                            if (this.scriptsInserted.has(n.src))
                                continue;
                            this.scriptsInserted.add(n.src);
                            var r = document.createElement("script");
                            r.async = !0,
                            r.src = n.src,
                            document.head.appendChild(r)
                        } else if (!n.type || ["text/javascript", "application/javascript", "application/ecmascript"].includes(n.type)) {
                            if (this.scriptsRun.has(n.innerText))
                                continue;
                            try {
                                this.scriptsRun.add(n.innerText),
                                Function(n.innerText)()
                            } catch (e) {
                                console.warn("Builder custom code component error:", e)
                            }
                        }
                    }
            }
            ,
            Object.defineProperty(t.prototype, "code", {
                get: function() {
                    return (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer || this.isHydrating && this.firstLoad) && this.props.scriptsClientOnly ? (this.props.code || "").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : this.props.code
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.render = function() {
                var e = this;
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", __assign({
                    ref: function(t) {
                        return e.elementRef = t
                    },
                    className: "builder-custom-code"
                }, !this.replaceNodes && !this.noReactRender && {
                    dangerouslySetInnerHTML: {
                        __html: this.code
                    }
                }))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , CustomCode = withBuilder(CustomCodeComponent, {
            name: "Custom Code",
            static: !0,
            requiredPermissions: ["editCode"],
            inputs: [{
                name: "code",
                type: "html",
                required: !0,
                defaultValue: "<p>Hello there, I am custom HTML code!</p>",
                code: !0
            }, __assign({
                name: "replaceNodes",
                type: "boolean",
                helperText: "Preserve server rendered dom nodes",
                advanced: !0
            }, isShopify$1 && {
                defaultValue: !0
            }), __assign({
                name: "scriptsClientOnly",
                type: "boolean",
                helperText: "Only print and run scripts on the client. Important when scripts influence DOM that could be replaced when client loads",
                advanced: !0
            }, !isShopify$1 && {
                defaultValue: !0
            })]
        })
          , IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "svg", "webp", "gif", "jfif", "pjpeg", "pjp", "apng", "avif", "tif", "tiff", "heif", "bmp", "eps", "raw", "cr2", "nef", "orf", "sr2", "psd", "heic", "dib", "ai"]
          , VIDEO_FILE_TYPES = ["mp4", "webm", "mkv", "flv", "vob", "ogv", "ogg", "drc", "gif", "gifv", "mng", "avi", "mov", "qt", "mts", "m2ts", "ts", "wmv", "yuv", "rm", "rmvb", "viv", "asf", "amv", "m4p", "mpeg", "mpe", "m2v", "m4v", "svi", "3gp", "3g2", "mxf", "roq", "nsv", "f4v", "f4p", "f4a", "f4b"];
        function removeProtocol(e) {
            return e.replace(/http(s)?:/, "")
        }
        function isElementInViewport(e) {
            var t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
        function getShopifyImageUrl(e, t) {
            if (!e || !(null == e ? void 0 : e.match(/cdn\.shopify\.com/)) || !t)
                return e;
            if ("master" === t)
                return removeProtocol(e);
            var n = e.match(/(_\d+x(\d+)?)?(\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?)/i);
            if (n) {
                var r = e.split(n[0])
                  , i = n[3]
                  , o = t.match("x") ? t : "".concat(t, "x");
                return removeProtocol("".concat(r[0], "_").concat(o).concat(i))
            }
            return null
        }
        var DEFAULT_ASPECT_RATIO$1 = .7041;
        function updateQueryParam(e, t, n) {
            void 0 === e && (e = "");
            var r = RegExp("([?&])" + t + "=.*?(&|$)", "i")
              , i = -1 !== e.indexOf("?") ? "&" : "?";
            return e.match(r) ? e.replace(r, "$1" + t + "=" + encodeURIComponent(n) + "$2") : e + i + t + "=" + encodeURIComponent(n)
        }
        function getSrcSet(e) {
            if (!e)
                return e;
            var t = [100, 200, 400, 800, 1200, 1600, 2e3];
            if (e.match(/builder\.io/)) {
                var n = e
                  , r = Number(e.split("?width=")[1]);
                return isNaN(r) || (n = "".concat(n, " ").concat(r, "w")),
                t.filter(function(e) {
                    return e !== r
                }).map(function(t) {
                    return "".concat(updateQueryParam(e, "width", t), " ").concat(t, "w")
                }).concat([n]).join(", ")
            }
            return e.match(/cdn\.shopify\.com/) ? t.map(function(t) {
                return [getShopifyImageUrl(e, "".concat(t, "x").concat(t)), t]
            }).filter(function(e) {
                return !!e[0]
            }).map(function(e) {
                var t = e[0]
                  , n = e[1];
                return "".concat(t, " ").concat(n, "w")
            }).concat([e]).join(", ") : e
        }
        var getSizes = function(e, t, n) {
            void 0 === n && (n = {});
            var r, i, o, a, s, l, c, u, d = "";
            if (e) {
                var p = e.split(",")
                  , f = p.length;
                d = p.map(function(e, t) {
                    return f === t + 1 ? e.replace(/\([\s\S]*?\)/g, "").trim() : e
                }).join(", ")
            } else if (t && t.responsiveStyles) {
                var m = []
                  , h = !1
                  , v = /^\d+/
                  , b = getSizesForBreakpoints(n);
                if (null == (o = null == (i = null == (r = t.responsiveStyles) ? void 0 : r.small) ? void 0 : i.width) ? void 0 : o.match(v)) {
                    h = !0;
                    var g = "(max-width: ".concat(b.small.max, "px)")
                      , y = "".concat(g, " ").concat(t.responsiveStyles.small.width.replace("%", "vw"));
                    m.push(y)
                }
                if ((null == (l = null == (s = null == (a = t.responsiveStyles) ? void 0 : a.medium) ? void 0 : s.width) ? void 0 : l.match(v)) && (h = !0,
                g = "(max-width: ".concat(b.medium.max, "px)"),
                y = "".concat(g, " ").concat(t.responsiveStyles.medium.width.replace("%", "vw")),
                m.push(y)),
                null == (u = null == (c = t.responsiveStyles) ? void 0 : c.large) ? void 0 : u.width) {
                    var k = t.responsiveStyles.large.width.replace("%", "vw");
                    m.push(k)
                } else
                    h && m.push("100vw");
                m.length && (d = m.join(", "))
            }
            return d
        }
          , ImageComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    imageLoaded: !t.useLazyLoading,
                    load: !t.useLazyLoading
                },
                t.pictureRef = null,
                t.scrollListener = null,
                t.intersectionObserver = null,
                t
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "useLazyLoading", {
                get: function() {
                    return !this.props.highPriority && (!_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || !location.search.includes("builder.lazyLoadImages=false")) && (!(!_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser || !location.href.includes("builder.lazyLoadImages=true")) || this.props.lazy)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentWillUnmount = function() {
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (this.scrollListener && (window.removeEventListener("scroll", this.scrollListener),
                this.scrollListener = null),
                this.intersectionObserver && this.pictureRef && this.intersectionObserver.unobserve(this.pictureRef))
            }
            ,
            t.prototype.componentDidMount = function() {
                var e = this;
                if (this.props.lazy && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser)
                    if (this.pictureRef && isElementInViewport(this.pictureRef))
                        this.setState({
                            load: !0
                        });
                    else if ("function" == typeof IntersectionObserver && this.pictureRef)
                        (this.intersectionObserver = new IntersectionObserver(function(t, n) {
                            t.forEach(function(t) {
                                t.intersectionRatio > 0 && (e.setState({
                                    load: !0
                                }),
                                e.pictureRef && n.unobserve(e.pictureRef))
                            })
                        }
                        )).observe(this.pictureRef);
                    else {
                        var t = throttle(function(n) {
                            if (e.pictureRef) {
                                var r = e.pictureRef.getBoundingClientRect()
                                  , i = window.innerHeight / 2;
                                r.top < window.innerHeight + i && (e.setState(__assign(__assign({}, e.state), {
                                    load: !0
                                })),
                                window.removeEventListener("scroll", t),
                                e.scrollListener = null)
                            }
                        }, 400, {
                            leading: !1,
                            trailing: !0
                        });
                        this.scrollListener = t,
                        window.addEventListener("scroll", t, {
                            capture: !0,
                            passive: !0
                        }),
                        t()
                    }
            }
            ,
            Object.defineProperty(t.prototype, "image", {
                get: function() {
                    return this.props.image || this.props.src
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.getSrcSet = function() {
                var e = this.image;
                if (e && "string" == typeof e && !this.props.noWebp && (e.match(/builder\.io/) || e.match(/cdn\.shopify\.com/)))
                    return getSrcSet(e)
            }
            ,
            t.prototype.render = function() {
                var e, t, n = this, r = this.props, i = r.aspectRatio, o = r.lazy, a = r.builderBlock, s = r.builderState, l = this.props.builderBlock && this.props.builderBlock.children, c = this.props.srcset, u = getSizes(this.props.sizes, a, (null == (t = null == (e = null == s ? void 0 : s.context.builderContent) ? void 0 : e.meta) ? void 0 : t.breakpoints) || {}), d = this.image;
                c && d && d.includes("builder.io/api/v1/image") ? c.includes(d.split("?")[0]) || (console.debug("Removed given srcset"),
                c = this.getSrcSet()) : d && !c && (c = this.getSrcSet());
                var p = (null == a ? void 0 : a.id.startsWith("builder-pixel-")) || this.props.highPriority
                  , f = this.props.fitContent;
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderMetaContext.Consumer, null, function(e) {
                    var t, r = e.ampMode, a = r ? "amp-img" : "img", s = (!o || n.state.load || r) && (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(a, __assign({}, r ? {
                        layout: "responsive",
                        height: n.props.height || (i ? Math.round(1e3 * i) : void 0),
                        width: n.props.width || (i ? Math.round(1e3 / i) : void 0)
                    } : null, {
                        alt: n.props.altText,
                        title: n.props.title,
                        key: _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && "string" == typeof n.image && n.image.split("?")[0] || void 0,
                        role: n.props.altText ? void 0 : "presentation",
                        css: __assign(__assign({
                            opacity: r ? 1 : n.useLazyLoading && !n.state.imageLoaded ? 0 : 1,
                            transition: "opacity 0.2s ease-in-out",
                            objectFit: n.props.backgroundSize || "cover",
                            objectPosition: n.props.backgroundPosition || "center"
                        }, i && !r && {
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0
                        }), r && ((t = {})["& img"] = {
                            objectFit: n.props.backgroundSize,
                            objectPosition: n.props.backgroundPosition
                        },
                        t)),
                        loading: p ? "eager" : "lazy",
                        fetchPriority: p ? "high" : "auto",
                        className: "builder-image" + (n.props.className ? " " + n.props.className : ""),
                        src: n.image
                    }, !r && {
                        onLoad: function() {
                            return n.setState({
                                imageLoaded: !0
                            })
                        }
                    }, {
                        srcSet: c,
                        sizes: !r && u ? u : void 0
                    }));
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, r ? s : (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("picture", {
                        ref: function(e) {
                            return n.pictureRef = e
                        }
                    }, c && c.match(/builder\.io/) && !n.props.noWebp && (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("source", {
                        srcSet: c.replace(/\?/g, "?format=webp&"),
                        type: "image/webp"
                    }), s), !i || r || f && l && l.length ? null : (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        className: "builder-image-sizer",
                        css: {
                            width: "100%",
                            paddingTop: 100 * i + "%",
                            pointerEvents: "none",
                            fontSize: 0
                        }
                    }, " "), l && l.length ? f ? l.map(function(e, t) {
                        return (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlock$1, {
                            key: e.id,
                            block: e
                        })
                    }) : (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        css: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }
                    }, l.map(function(e, t) {
                        return (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlock$1, {
                            key: e.id,
                            block: e
                        })
                    })) : null)
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Image = withBuilder(ImageComponent, {
            name: "Image",
            static: !0,
            image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",
            defaultStyles: {
                position: "relative",
                minHeight: "20px",
                minWidth: "20px",
                overflow: "hidden"
            },
            canHaveChildren: !0,
            inputs: [{
                name: "image",
                type: "file",
                bubble: !0,
                allowedFileTypes: IMAGE_FILE_TYPES,
                required: !0,
                defaultValue: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
                onChange: function(e) {
                    e.delete("srcset"),
                    e.delete("noWebp");
                    var t, n, r = e.get("image"), i = e.get("aspectRatio");
                    if (fetch(r).then(function(e) {
                        return e.blob()
                    }).then(function(t) {
                        t.type.includes("svg") && e.set("noWebp", !0)
                    }),
                    r && (!i || .7041 === i))
                        return (t = r,
                        void 0 === n && (n = 6e4),
                        new Promise(function(e, r) {
                            var i = document.createElement("img")
                              , o = !1;
                            i.onload = function() {
                                o = !0,
                                e(i)
                            }
                            ,
                            i.addEventListener("error", function(e) {
                                console.warn("Image load failed", e.error),
                                r(e.error)
                            }),
                            i.src = t,
                            setTimeout(function() {
                                o || r(Error("Image load timed out"))
                            }, n)
                        }
                        )).then(function(t) {
                            var n = e.get("aspectRatio");
                            e.get("image") !== r || n && .7041 !== n || t.width && t.height && (e.set("aspectRatio", Math.round(1e3 * (t.height / t.width)) / 1e3),
                            e.set("height", t.height),
                            e.set("width", t.width))
                        })
                }
            }, {
                name: "backgroundSize",
                type: "text",
                defaultValue: "cover",
                enum: [{
                    label: "contain",
                    value: "contain",
                    helperText: "The image should never get cropped"
                }, {
                    label: "cover",
                    value: "cover",
                    helperText: "The image should fill its box, cropping when needed"
                }]
            }, {
                name: "backgroundPosition",
                type: "text",
                defaultValue: "center",
                enum: ["center", "top", "left", "right", "bottom", "top left", "top right", "bottom left", "bottom right"]
            }, {
                name: "altText",
                type: "string",
                helperText: "Text to display when the user has images off"
            }, {
                name: "title",
                type: "string",
                helperText: "Text to display when hovering over the asset"
            }, {
                name: "highPriority",
                type: "boolean",
                advanced: !0,
                helperText: "Mark this image as high priority compared to other images on the page. This prevents lazy loading of the image and tells the browser to load this image before others on the page."
            }, {
                name: "height",
                type: "number",
                hideFromUI: !0
            }, {
                name: "width",
                type: "number",
                hideFromUI: !0
            }, {
                name: "sizes",
                type: "string",
                hideFromUI: !0
            }, {
                name: "srcset",
                type: "string",
                hideFromUI: !0
            }, {
                name: "lazy",
                type: "boolean",
                defaultValue: !0,
                hideFromUI: !0
            }, {
                name: "fitContent",
                type: "boolean",
                helperText: "When child blocks are provided, fit to them instead of using the image's aspect ratio",
                defaultValue: !0
            }, {
                name: "aspectRatio",
                type: "number",
                helperText: "This is the ratio of height/width, e.g. set to 1.5 for a 300px wide and 200px tall photo. Set to 0 to not force the image to maintain it's aspect ratio",
                advanced: !0,
                defaultValue: DEFAULT_ASPECT_RATIO$1
            }]
        })
          , DEFAULT_ASPECT_RATIO = .7004048582995948
          , VideoComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.video = null,
                t.containerRef = null,
                t.lazyVideoObserver = null,
                t.state = {
                    load: !t.lazyLoad
                },
                t
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "lazyLoad", {
                get: function() {
                    return !1 !== this.props.lazyLoad
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.updateVideo = function() {
                var e = this
                  , t = this.video;
                t && ["muted", "playsInline", "autoPlay"].forEach(function(n) {
                    var r = n.toLowerCase();
                    e.props[n] ? t.setAttribute(r, r) : t.removeAttribute(r)
                })
            }
            ,
            t.prototype.componentDidUpdate = function() {
                this.updateVideo()
            }
            ,
            t.prototype.componentDidMount = function() {
                var e = this;
                if (this.updateVideo(),
                this.lazyLoad && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser) {
                    var t = new IntersectionObserver(function(t) {
                        t.forEach(function(t) {
                            t.isIntersecting && (e.setState(function(e) {
                                return __assign(__assign({}, e), {
                                    load: !0
                                })
                            }),
                            e.lazyVideoObserver && (e.lazyVideoObserver.disconnect(),
                            e.lazyVideoObserver = null))
                        })
                    }
                    );
                    this.containerRef && (t.observe(this.containerRef),
                    this.lazyVideoObserver = t)
                }
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.lazyVideoObserver && (this.lazyVideoObserver.disconnect(),
                this.lazyVideoObserver = null)
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.aspectRatio
                  , r = t.children;
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                    ref: function(t) {
                        return e.containerRef = t
                    },
                    css: {
                        position: "relative"
                    }
                }, (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("video", {
                    key: this.props.video || "no-src",
                    poster: this.props.posterImage,
                    ref: function(t) {
                        return e.video = t
                    },
                    autoPlay: this.props.autoPlay,
                    muted: this.props.muted,
                    controls: this.props.controls,
                    loop: this.props.loop,
                    preload: this.props.preload || "metadata",
                    className: "builder-video",
                    css: __assign({
                        width: "100%",
                        height: "100%",
                        objectFit: this.props.fit,
                        objectPosition: this.props.position,
                        borderRadius: 1
                    }, n ? {
                        position: "absolute"
                    } : null)
                }, (!this.lazyLoad || this.state.load) && (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("source", {
                    type: "video/mp4",
                    src: this.props.video
                })), !n || this.props.fitContent && r ? null : (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                    css: {
                        width: "100%",
                        paddingTop: 100 * n + "%",
                        pointerEvents: "none",
                        fontSize: 0
                    }
                }), r && this.props.fitContent ? (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                    css: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch"
                    }
                }, r) : r ? (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                    css: {
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }
                }, r) : null)
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Video = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(withChildren(VideoComponent), {
            name: "Video",
            canHaveChildren: !0,
            defaultStyles: {
                minHeight: "20px",
                minWidth: "20px"
            },
            image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-videocam-24px%20(1).svg?alt=media&token=49a84e4a-b20e-4977-a650-047f986874bb",
            inputs: [{
                name: "video",
                type: "file",
                allowedFileTypes: VIDEO_FILE_TYPES,
                bubble: !0,
                defaultValue: "https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd27731a526464deba0016216f5f9e570%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=d27731a526464deba0016216f5f9e570&alt=media&optimized=true",
                required: !0
            }, {
                name: "posterImage",
                type: "file",
                allowedFileTypes: IMAGE_FILE_TYPES,
                helperText: "Image to show before the video plays"
            }, {
                name: "autoPlay",
                type: "boolean",
                defaultValue: !0
            }, {
                name: "controls",
                type: "boolean",
                defaultValue: !1
            }, {
                name: "muted",
                type: "boolean",
                defaultValue: !0
            }, {
                name: "loop",
                type: "boolean",
                defaultValue: !0
            }, {
                name: "playsInline",
                type: "boolean",
                defaultValue: !0
            }, {
                name: "fit",
                type: "text",
                defaultValue: "cover",
                enum: ["contain", "cover", "fill", "auto"]
            }, {
                name: "preload",
                type: "text",
                defaultValue: "metadata",
                enum: ["auto", "metadata", "none"]
            }, {
                name: "fitContent",
                type: "boolean",
                helperText: "When child blocks are provided, fit to them instead of using the aspect ratio",
                defaultValue: !0,
                advanced: !0
            }, {
                name: "position",
                type: "text",
                defaultValue: "center",
                enum: ["center", "top", "left", "right", "bottom", "top left", "top right", "bottom left", "bottom right"]
            }, {
                name: "height",
                type: "number",
                advanced: !0
            }, {
                name: "width",
                type: "number",
                advanced: !0
            }, {
                name: "aspectRatio",
                type: "number",
                advanced: !0,
                defaultValue: DEFAULT_ASPECT_RATIO
            }, {
                name: "lazyLoad",
                type: "boolean",
                helperText: 'Load this video "lazily" - as in only when a user scrolls near the video. Recommended for optmized performance and bandwidth consumption',
                defaultValue: !0,
                advanced: !0
            }]
        })
          , size = function(e) {
            return Object.keys(e).length
        }
          , isShopify = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && "Shopify"in window
          , refs = {};
        if (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser)
            try {
                Array.from(document.querySelectorAll("[builder-static-symbol]")).forEach(function(e) {
                    var t = e.getAttribute("builder-static-symbol");
                    t && (refs[t] = e)
                })
            } catch (e) {
                console.error("Builder replace nodes error:", e)
            }
        var SymbolComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ref = null,
                t.staticRef = null,
                t.isEditingThisSymbol = !1,
                t
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "placeholder", {
                get: function() {
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        css: {
                            padding: 10
                        }
                    }, "Symbols let you reuse dynamic elements across your content. Please choose a model and entry for this symbol.")
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentDidMount = function() {
                var e, t, n, r = this;
                this.useStatic && this.staticRef && refs[null == (e = this.props.builderBlock) ? void 0 : e.id] && (null == (t = this.staticRef.parentNode) || t.replaceChild(refs[null == (n = this.props.builderBlock) ? void 0 : n.id], this.staticRef)),
                _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.nextTick(function() {
                    var e = r.props.symbol || {}
                      , t = e.model
                      , n = e.entry;
                    r.isEditingThisSymbol = !!(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && t === _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.editingModel && n && location.search.includes("overrides.".concat(n)))
                })
            }
            ,
            Object.defineProperty(t.prototype, "useStatic", {
                get: function() {
                    var e;
                    return !!(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && refs[null == (e = this.props.builderBlock) ? void 0 : e.id] && !(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing))
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.render = function() {
                var e, t, n = this;
                if (this.useStatic)
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        ref: function(e) {
                            return n.staticRef = e
                        }
                    });
                var r = this.props.symbol
                  , i = !1;
                r || (i = !0);
                var o = this.props.dataOnly ? NoWrap : this.props.builderBlock && this.props.builderBlock.tagName || "div"
                  , a = r || {}
                  , s = a.model
                  , l = a.entry
                  , c = a.data
                  , u = a.content
                  , d = a.inline
                  , p = a.ownerId
                  , f = (null == r ? void 0 : r.dynamic) || this.props.dynamic;
                s && (l || f) || (null == (e = null == u ? void 0 : u.data) ? void 0 : e.blocksJs) || d || (i = !0),
                this.isEditingThisSymbol && (i = !1);
                var m = f ? null == (t = this.props.builderBlock) ? void 0 : t.id : [s, l].join(":")
                  , h = c && size(c) && hash_sum__WEBPACK_IMPORTED_MODULE_4___default()(c);
                m && h && h.length < 300 && (m += ":" + h);
                var v = this.props.attributes || {};
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Consumer, {
                    key: (s || "no model") + ":" + (l || "no entry" + this.isEditingThisSymbol)
                }, function(e) {
                    var t, a, d, f, h, b, g, y, k, w, x, S = "".concat(m, "_").concat((null == (t = null == e ? void 0 : e.state) ? void 0 : t.locale) || "Default");
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(o, __assign({
                        "data-model": s
                    }, v, {
                        className: (v.class || v.className || "") + " builder-symbol" + ((null == r ? void 0 : r.inline) ? " builder-inline-symbol" : "") + ((null == r ? void 0 : r.dynamic) || n.props.dynamic ? " builder-dynamic-symbol" : "")
                    }), i ? n.placeholder : (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderComponent, __assign({}, p && {
                        apiKey: p
                    }, (null == (a = e.state) ? void 0 : a.locale) && {
                        locale: e.state.locale
                    }, {
                        isChild: !0,
                        ref: function(e) {
                            return n.ref = e
                        },
                        context: __assign(__assign({}, e.context), {
                            symbolId: null == (d = n.props.builderBlock) ? void 0 : d.id
                        }),
                        model: s,
                        entry: l,
                        data: __assign(__assign(__assign({}, c), !!n.props.inheritState && omit$2(e.state, "children")), null == (k = null == (y = null == (g = null == (b = null == (h = null == (f = n.props.builderBlock) ? void 0 : f.component) ? void 0 : h.options) ? void 0 : b.symbol) ? void 0 : g.content) ? void 0 : y.data) ? void 0 : k.state),
                        renderLink: e.renderLink,
                        inlineContent: null == r ? void 0 : r.inline
                    }, u && {
                        content: u
                    }, {
                        key: S,
                        options: __assign(__assign({}, !n.isEditingThisSymbol && {
                            key: S,
                            noEditorUpdates: !0
                        }), "content" === _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.singletonInstance.apiEndpoint && l && {
                            query: {
                                id: l
                            }
                        }),
                        codegen: !!(null == (w = null == u ? void 0 : u.data) ? void 0 : w.blocksJs),
                        hydrate: null == (x = e.state) ? void 0 : x._hydrate,
                        builderBlock: n.props.builderBlock,
                        dataOnly: n.props.dataOnly,
                        nonce: e.context.nonce
                    }), n.props.children))
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Symbol$1 = withBuilder(SymbolComponent, {
            name: "Symbol",
            noWrap: !0,
            static: !0,
            inputs: [{
                name: "symbol",
                type: "uiSymbol"
            }, {
                name: "dataOnly",
                helperText: "Make this a data symbol that doesn't display any UI",
                type: "boolean",
                defaultValue: !1,
                advanced: !0,
                hideFromUI: !0
            }, {
                name: "inheritState",
                helperText: "Inherit the parent component state and data",
                type: "boolean",
                defaultValue: isShopify,
                advanced: !0
            }, {
                name: "renderToLiquid",
                helperText: "Render this symbols contents to liquid. Turn off to fetch with javascript and use custom targeting",
                type: "boolean",
                defaultValue: isShopify,
                advanced: !0,
                hideFromUI: !0
            }, {
                name: "useChildren",
                hideFromUI: !0,
                type: "boolean"
            }]
        })
          , ButtonComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                var e = this.props.link ? Link : "span";
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(e, __assign({
                    role: "button",
                    href: this.props.link,
                    target: this.props.openLinkInNewTab ? "_blank" : void 0
                }, this.props.attributes), this.props.text)
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Button = withBuilder(ButtonComponent, {
            name: "Core:Button",
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F81a15681c3e74df09677dfc57a615b13",
            defaultStyles: {
                appearance: "none",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "25px",
                paddingRight: "25px",
                backgroundColor: "#000000",
                color: "white",
                borderRadius: "4px",
                textAlign: "center",
                cursor: "pointer"
            },
            inputs: [{
                name: "text",
                type: "text",
                defaultValue: "Click me!",
                bubble: !0
            }, {
                name: "link",
                type: "url",
                bubble: !0
            }, {
                name: "openLinkInNewTab",
                type: "boolean",
                defaultValue: !1,
                friendlyName: "Open link in new tab"
            }],
            static: !0,
            noWrap: !0
        })
          , SectionComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ref = null,
                t.unmountCallbacks = [],
                t.state = {
                    inView: !1
                },
                t
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "renderContents", {
                get: function() {
                    return !0 !== this.props.lazyLoad || this.state.inView
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentWillUnmount = function() {
                this.unmountCallbacks.forEach(function(e) {
                    return e()
                })
            }
            ,
            t.prototype.componentDidMount = function() {
                var e = this;
                if (this.props.lazyLoad)
                    if ("undefined" != typeof IntersectionObserver && this.ref) {
                        var t = new IntersectionObserver(function(t, n) {
                            t.forEach(function(t) {
                                t.intersectionRatio > 0 && (e.setState({
                                    inView: !0
                                }),
                                e.ref && n.unobserve(e.ref))
                            })
                        }
                        ,{
                            rootMargin: "10px"
                        });
                        t.observe(this.ref),
                        this.unmountCallbacks.push(function() {
                            e.ref && t.unobserve(e.ref)
                        })
                    } else
                        this.setState({
                            inView: !0
                        })
            }
            ,
            t.prototype.render = function() {
                var e = this;
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("section", {
                    ref: function(t) {
                        return e.ref = t
                    },
                    css: __assign({
                        width: "100%",
                        alignSelf: "stretch",
                        flexGrow: 1,
                        boxSizing: "border-box",
                        maxWidth: this.props.maxWidth,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }, this.renderContents ? null : this.props.lazyStyles)
                }, this.renderContents ? (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, this.props.children, this.props.builderBlock && this.props.builderBlock.children && this.props.builderBlock.children.map(function(e, t) {
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlock$1, {
                        key: e.id,
                        block: e
                    })
                })) : null)
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Section = withBuilder(SectionComponent, {
            name: "Core:Section",
            static: !0,
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a",
            inputs: [{
                name: "maxWidth",
                type: "number",
                defaultValue: 1200
            }, {
                name: "lazyLoad",
                type: "boolean",
                defaultValue: !1,
                advanced: !0,
                description: "Only render this section when in view"
            }],
            defaultStyles: {
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "50px",
                paddingBottom: "50px",
                marginTop: "0px",
                width: "100vw",
                marginLeft: "calc(50% - 50vw)"
            },
            canHaveChildren: !0,
            defaultChildren: [{
                "@type": "@builder.io/sdk:Element",
                responsiveStyles: {
                    large: {
                        textAlign: "center"
                    }
                },
                component: {
                    name: "Text",
                    options: {
                        text: "<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>"
                    }
                }
            }]
        })
          , StateProviderComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                var e = this;
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderStoreContext.Consumer, null, function(t) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderStoreContext.Provider, {
                        value: __assign(__assign({}, t), {
                            state: __assign(__assign({}, t.state), e.props.state),
                            context: __assign(__assign({}, t.context), e.props.context)
                        })
                    }, e.props.builderBlock && e.props.builderBlock.children && e.props.builderBlock.children.map(function(e, t) {
                        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlock$1, {
                            block: e,
                            key: e.id,
                            index: t,
                            child: !0
                        })
                    }), e.props.children)
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , StateProvider = withBuilder(StateProviderComponent, {
            name: "Builder:StateProvider",
            canHaveChildren: !0,
            static: !0,
            noWrap: !0,
            hideFromInsertMenu: !0
        })
          , prefetched = new Set;
        function searchToObject(e) {
            var t = (e.search || "").substring(1).split("&")
              , n = {};
            for (var r in t)
                if (t[r] && "string" == typeof t[r]) {
                    var i = t[r].split("=");
                    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
            return n
        }
        var RouterComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.builder = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL,
                t.routed = !1,
                t.preloadQueue = 0,
                t.onPopState = function(e) {
                    t.updateLocationState()
                }
                ,
                t.onMouseOverOrTouchStart = function(e) {
                    if (!(t.preloadQueue > 4) && !1 !== t.props.preloadOnHover) {
                        var n = t.findHrefTarget(e);
                        if (n) {
                            var r = n.getAttribute("href");
                            if (r) {
                                if (!t.isRelative(r)) {
                                    var i = t.convertToRelative(r);
                                    if (!i)
                                        return;
                                    r = i
                                }
                                if (!r.startsWith("#") && !prefetched.has(r)) {
                                    prefetched.add(r);
                                    var o = t.parseUrl(r);
                                    t.preloadQueue++;
                                    var a = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.getUserAttributes();
                                    a.urlPath = o.pathname,
                                    a.queryString = o.search;
                                    var s = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.get(t.model, {
                                        userAttributes: a,
                                        key: t.model + ":" + o.pathname + o.search
                                    }).subscribe(function() {
                                        t.preloadQueue--,
                                        s.unsubscribe()
                                    })
                                }
                            }
                        }
                    }
                }
                ,
                t.onClick = function(e) {
                    return __awaiter(t, void 0, void 0, function() {
                        var t, n, r, i;
                        return __generator(this, function(o) {
                            if (!1 === this.props.handleRouting || 0 !== e.button || e.ctrlKey || e.defaultPrevented || e.metaKey || !(t = this.findHrefTarget(e)) || t.target && "_client" !== t.target || !(n = t.getAttribute("href")) || this.props.onRoute && (r = {
                                url: n,
                                anchorNode: t,
                                preventDefault: function() {
                                    this.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            this.props.onRoute(r),
                            r.defaultPrevented))
                                return [2];
                            if (!this.isRelative(n)) {
                                if (!(i = this.convertToRelative(n)))
                                    return [2];
                                n = i
                            }
                            return n.startsWith("#") || (e.preventDefault(),
                            this.route(n)),
                            [2]
                        })
                    })
                }
                ,
                t.privateState = null,
                t
            }
            return __extends(t, e),
            t.prototype.route = function(e) {
                var t;
                return this.routed = !0,
                "function" == typeof (null == (t = window.history) ? void 0 : t.pushState) ? (history.pushState(null, "", e),
                this.updateLocationState(),
                !0) : (location.href = e,
                !1)
            }
            ,
            t.prototype.updateLocationState = function() {
                this.privateState && this.privateState.update(function(e) {
                    e.location = __assign(__assign({}, e.location), {
                        pathname: location.pathname,
                        search: location.search,
                        path: location.pathname.split("/").slice(1),
                        query: searchToObject(location)
                    })
                })
            }
            ,
            Object.defineProperty(t.prototype, "model", {
                get: function() {
                    return this.props.model || "page"
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.componentDidMount = function() {
                "undefined" != typeof document && (document.addEventListener("click", this.onClick),
                window.addEventListener("popstate", this.onPopState),
                document.addEventListener("mouseover", this.onMouseOverOrTouchStart),
                document.addEventListener("touchstart", this.onMouseOverOrTouchStart))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                "undefined" != typeof document && (document.removeEventListener("click", this.onClick),
                document.removeEventListener("mouseover", this.onMouseOverOrTouchStart),
                window.removeEventListener("popstate", this.onPopState),
                document.removeEventListener("touchstart", this.onMouseOverOrTouchStart))
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.model;
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Consumer, null, function(n) {
                    e.privateState = n;
                    var r = n.state && n.state.location && n.state.location.pathname + n.state.location.search;
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        className: "builder-router",
                        "data-model": t
                    }, (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("style", {
                        nonce: n.context.nonce
                    }, "\n                @keyframes builderLoadingSpinner {\n                  0% {\n                    transform: rotate(0deg);\n                  }\n                  100% {\n                    transform: rotate(360deg);\n                  }\n                }\n                /* TODO: overridable tag */\n                .builder-page-loading {\n                  -webkit-animation: builderLoadingSpinner 1s infinite linear;\n                  animation: builderLoadingSpinner 1s infinite linear;\n                  -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n                  border-radius: 50%;\n                  width: 36px;\n                  height: 36px;\n                  margin: 6px auto;\n                  position: relative;\n                  border: 1px solid transparent;\n                  border-left: 1px solid #808284;\n                }\n              "), (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderComponent, {
                        key: r,
                        data: e.props.data,
                        content: e.routed ? void 0 : e.props.content,
                        modelName: t,
                        options: {
                            key: _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing ? void 0 : e.model + ":" + r
                        },
                        nonce: n.context.nonce
                    }, e.props.children || (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        css: {
                            display: "flex"
                        }
                    }, (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("div", {
                        css: {
                            margin: "40vh auto"
                        },
                        className: "builder-page-loading"
                    }))))
                })
            }
            ,
            t.prototype.findHrefTarget = function(e) {
                for (var t = e.target; t; ) {
                    if (t instanceof HTMLAnchorElement && t.getAttribute("href"))
                        return t;
                    if (t === e.currentTarget)
                        break;
                    t = t.parentElement
                }
                return null
            }
            ,
            t.prototype.isRelative = function(e) {
                return !e.match(/^(\/\/|https?:\/\/)/i)
            }
            ,
            t.prototype.parseUrl = function(e) {
                var t = document.createElement("a");
                return t.href = e,
                t
            }
            ,
            t.prototype.convertToRelative = function(e) {
                var t = this.parseUrl(location.href)
                  , n = this.parseUrl(e);
                if (t.host === n.host) {
                    var r = n.pathname + (n.search ? n.search : "");
                    return r.startsWith("#") ? null : r || "/"
                }
                return null
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Router = withBuilder(RouterComponent, {
            name: "Core:Router",
            hideFromInsertMenu: !0,
            inputs: [{
                name: "model",
                type: "string",
                defaultValue: "page",
                advanced: !0
            }, {
                name: "handleRouting",
                type: "boolean",
                defaultValue: !0,
                advanced: !0
            }, {
                name: "preloadOnHover",
                type: "boolean",
                defaultValue: !0,
                advanced: !0
            }, {
                name: "onRoute",
                type: "function",
                advanced: !0
            }]
        });
        function Mutation(e) {
            var t, n, r = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
            useWaitForSelector(e.selector, function(t) {
                "afterEnd" !== e.type && (t.innerHTML = ""),
                t.appendChild(r.current.firstElementChild)
            });
            var i = null == (t = e.builderBlock) ? void 0 : t.children;
            return (0,
            _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("span", {
                style: {
                    display: "none"
                },
                ref: r
            }, (0,
            _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlocks, {
                style: {
                    display: "inline"
                },
                child: !0,
                parentElementId: null == (n = e.builderBlock) ? void 0 : n.id,
                dataPath: "this.children",
                blocks: i
            }))
        }
        function useWaitForSelector(e, t) {
            react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(function() {
                try {
                    var n = document.querySelector(e);
                    if (n)
                        return void t(n)
                } catch (e) {
                    console.warn(e)
                }
                var r = new MutationObserver(function() {
                    try {
                        var n = document.querySelector(e);
                        n && (r.disconnect(),
                        t(n))
                    } catch (e) {
                        console.warn(e)
                    }
                }
                );
                return r.observe(document.body, {
                    attributes: !0,
                    subtree: !0,
                    characterData: !0
                }),
                function() {
                    r.disconnect()
                }
            }, [e])
        }
        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(Mutation, {
            name: "Builder:Mutation",
            canHaveChildren: !0,
            noWrap: !0,
            hideFromInsertMenu: !0,
            inputs: [{
                name: "type",
                type: "string",
                defaultValue: "replace",
                enum: [{
                    label: "Replace",
                    value: "replace",
                    helperText: "Replace the contents of this site region with content from Builder"
                }, {
                    label: "Append",
                    value: "afterEnd",
                    helperText: "Append Builder content after the chosen site region"
                }]
            }, {
                name: "selector",
                type: "builder:domSelector"
            }]
        });
        var get = function(e, t, n) {
            var r = String.prototype.split.call(t, /[,[\].]+?/).filter(Boolean).reduce(function(e, t) {
                return null != e ? e[t] : e
            }, e);
            return void 0 === r || r === e ? n : r
        }
          , MULTIPART_CONTENT_TYPE = "multipart/form-data"
          , JSON_CONTENT_TYPE = "application/json"
          , ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded"
          , FormComponent = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ref = null,
                t.state = {
                    state: "unsubmitted",
                    responseData: null,
                    formErrorMessage: ""
                },
                t
            }
            return __extends(t, e),
            Object.defineProperty(t.prototype, "submissionState", {
                get: function() {
                    return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && this.props.previewState || this.state.state
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.render = function() {
                var e = this;
                return (0,
                _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Consumer, null, function(t) {
                    return (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderStoreContext.Provider, {
                        value: __assign(__assign({}, t), {
                            state: __assign(__assign({}, t.state), {
                                formErrorMessage: e.state.formErrorMessage
                            })
                        })
                    }, (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("form", __assign({}, e.props.validate ? {} : {
                        noValidate: !0
                    }, {
                        ref: function(t) {
                            return e.ref = t
                        },
                        action: !e.props.sendWithJs && e.props.action ? e.props.action : void 0,
                        method: e.props.method,
                        name: e.props.name,
                        onSubmit: function(t) {
                            var n, r = e.props.sendWithJs || "email" === e.props.sendSubmissionsTo;
                            if ("zapier" === e.props.sendSubmissionsTo)
                                t.preventDefault();
                            else if (r) {
                                if (!e.props.action && "email" !== e.props.sendSubmissionsTo)
                                    return void t.preventDefault();
                                t.preventDefault();
                                var i = t.currentTarget
                                  , o = e.props.customHeaders || {}
                                  , a = void 0
                                  , s = new FormData(i)
                                  , l = Array.from(t.currentTarget.querySelectorAll("input,select,textarea")).filter(function(e) {
                                    return !!e.name
                                }).filter(function(e) {
                                    return !!e.name && ("radio" !== e.type || e.checked)
                                }).map(function(e) {
                                    var t, n = e.name;
                                    if (e instanceof HTMLInputElement)
                                        if ("radio" === e.type) {
                                            if (e.checked)
                                                return {
                                                    key: n,
                                                    value: t = e.value
                                                }
                                        } else if ("checkbox" === e.type)
                                            t = e.checked;
                                        else if ("number" === e.type || "range" === e.type) {
                                            var r = e.valueAsNumber;
                                            isNaN(r) || (t = r)
                                        } else
                                            t = "file" === e.type ? e.files : e.value;
                                    else
                                        t = e.value;
                                    return {
                                        key: n,
                                        value: t
                                    }
                                })
                                  , c = e.props.contentType;
                                if ("email" === e.props.sendSubmissionsTo && (c = MULTIPART_CONTENT_TYPE),
                                Array.from(l).forEach(function(e) {
                                    var t = e.value;
                                    (t instanceof File || Array.isArray(t) && t[0]instanceof File || t instanceof FileList) && (c = MULTIPART_CONTENT_TYPE)
                                }),
                                c === MULTIPART_CONTENT_TYPE)
                                    a = s;
                                else if (c === JSON_CONTENT_TYPE) {
                                    var u = {};
                                    Array.from(l).forEach(function(e) {
                                        var t = e.value;
                                        set(u, e.key, t)
                                    }),
                                    a = JSON.stringify(u)
                                } else {
                                    if (c !== ENCODED_CONTENT_TYPE)
                                        return void console.error("Unsupported content type: ", c);
                                    a = Array.from(l).map(function(e) {
                                        var t = e.value;
                                        return encodeURIComponent(e.key) + "=" + encodeURIComponent(t)
                                    }).join("&")
                                }
                                c && c !== MULTIPART_CONTENT_TYPE && (r && (null == (n = e.props.action) ? void 0 : n.includes("zapier.com")) || (o["content-type"] = c));
                                var d = new CustomEvent("presubmit",{
                                    detail: {
                                        body: a
                                    }
                                });
                                if (e.ref && (e.ref.dispatchEvent(d),
                                d.defaultPrevented))
                                    return;
                                e.setState(__assign(__assign({}, e.state), {
                                    state: "sending"
                                }));
                                var p = "".concat("dev" === _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.env ? "http://localhost:5000" : "https://builder.io", "/api/v1/form-submit?apiKey=").concat(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.apiKey, "&to=").concat(btoa(e.props.sendSubmissionsToEmail || ""), "&name=").concat(encodeURIComponent(e.props.name || ""));
                                fetch("email" === e.props.sendSubmissionsTo ? p : e.props.action, {
                                    body: a,
                                    headers: o,
                                    method: e.props.method || "post"
                                }).then(function(t) {
                                    return __awaiter(e, void 0, void 0, function() {
                                        var e, n, r, i, o;
                                        return __generator(this, function(a) {
                                            switch (a.label) {
                                            case 0:
                                                return (n = t.headers.get("content-type")) && -1 !== n.indexOf(JSON_CONTENT_TYPE) ? [4, t.json()] : [3, 2];
                                            case 1:
                                                return e = a.sent(),
                                                [3, 4];
                                            case 2:
                                                return [4, t.text()];
                                            case 3:
                                                e = a.sent(),
                                                a.label = 4;
                                            case 4:
                                                if (!t.ok && this.props.errorMessagePath && (r = get(e, this.props.errorMessagePath)) && ("string" != typeof r && (r = JSON.stringify(r)),
                                                this.setState(__assign(__assign({}, this.state), {
                                                    formErrorMessage: r
                                                }))),
                                                this.setState(__assign(__assign({}, this.state), {
                                                    responseData: e,
                                                    state: t.ok ? "success" : "error"
                                                })),
                                                t.ok) {
                                                    if (i = new CustomEvent("submit:success",{
                                                        detail: {
                                                            res: t,
                                                            body: e
                                                        }
                                                    }),
                                                    this.ref) {
                                                        if (this.ref.dispatchEvent(i),
                                                        i.defaultPrevented)
                                                            return [2];
                                                        !1 !== this.props.resetFormOnSubmit && this.ref.reset()
                                                    }
                                                    this.props.successUrl && (this.ref ? (o = new CustomEvent("route",{
                                                        detail: {
                                                            url: this.props.successUrl
                                                        }
                                                    }),
                                                    this.ref.dispatchEvent(o),
                                                    o.defaultPrevented || (location.href = this.props.successUrl)) : location.href = this.props.successUrl)
                                                }
                                                return [2]
                                            }
                                        })
                                    })
                                }, function(t) {
                                    var n = new CustomEvent("submit:error",{
                                        detail: {
                                            error: t
                                        }
                                    });
                                    e.ref && (e.ref.dispatchEvent(n),
                                    n.defaultPrevented) || e.setState(__assign(__assign({}, e.state), {
                                        responseData: t,
                                        state: "error"
                                    }))
                                })
                            }
                        }
                    }, e.props.attributes), e.props.builderBlock && e.props.builderBlock.children && e.props.builderBlock.children.map(function(e, t) {
                        return (0,
                        _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlock$1, {
                            key: e.id,
                            block: e
                        })
                    }), "error" === e.submissionState && (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlocks, {
                        dataPath: "errorMessage",
                        blocks: e.props.errorMessage
                    }), "sending" === e.submissionState && (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlocks, {
                        dataPath: "sendingMessage",
                        blocks: e.props.sendingMessage
                    }), "error" === e.submissionState && e.state.responseData && (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)("pre", {
                        className: "builder-form-error-text",
                        css: {
                            padding: 10,
                            color: "red",
                            textAlign: "center"
                        }
                    }, JSON.stringify(e.state.responseData, null, 2)), "success" === e.submissionState && (0,
                    _emotion_core__WEBPACK_IMPORTED_MODULE_1__.Y)(BuilderBlocks, {
                        dataPath: "successMessage",
                        blocks: e.props.successMessage
                    })))
                })
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Form = withBuilder(FormComponent, {
            name: "Form:Form",
            defaults: {
                responsiveStyles: {
                    large: {
                        marginTop: "15px",
                        paddingBottom: "15px"
                    }
                }
            },
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fef36d2a846134910b64b88e6d18c5ca5",
            inputs: [{
                name: "sendSubmissionsTo",
                type: "string",
                enum: [{
                    label: "Send to email",
                    value: "email",
                    helperText: "Send form submissions to the email address of your choosing"
                }, {
                    label: "Custom",
                    value: "custom",
                    helperText: "Handle where the form requests go manually with a little code, e.g. to your own custom backend"
                }],
                defaultValue: "email"
            }, {
                name: "sendSubmissionsToEmail",
                type: "string",
                required: !0,
                defaultValue: "your@email.com",
                showIf: 'options.get("sendSubmissionsTo") === "email"'
            }, {
                name: "sendWithJs",
                type: "boolean",
                helperText: "Set to false to use basic html form action",
                defaultValue: !0,
                showIf: 'options.get("sendSubmissionsTo") === "custom"'
            }, {
                name: "name",
                type: "string",
                defaultValue: "My form"
            }, {
                name: "action",
                type: "string",
                helperText: "URL to send the form data to",
                showIf: 'options.get("sendSubmissionsTo") === "custom"'
            }, {
                name: "contentType",
                type: "string",
                defaultValue: JSON_CONTENT_TYPE,
                advanced: !0,
                enum: [JSON_CONTENT_TYPE, MULTIPART_CONTENT_TYPE, ENCODED_CONTENT_TYPE],
                showIf: 'options.get("sendSubmissionsTo") === "custom" && options.get("sendWithJs") === true'
            }, {
                name: "method",
                type: "string",
                showIf: 'options.get("sendSubmissionsTo") === "custom"',
                defaultValue: "POST",
                advanced: !0
            }, {
                name: "previewState",
                type: "string",
                enum: ["unsubmitted", "sending", "success", "error"],
                defaultValue: "unsubmitted",
                helperText: 'Choose a state to edit, e.g. choose "success" to show what users see on success and edit the message',
                showIf: 'options.get("sendSubmissionsTo") !== "zapier" && options.get("sendWithJs") === true'
            }, {
                name: "successUrl",
                type: "url",
                helperText: "Optional URL to redirect the user to on form submission success",
                showIf: 'options.get("sendSubmissionsTo") !== "zapier" && options.get("sendWithJs") === true'
            }, {
                name: "resetFormOnSubmit",
                type: "boolean",
                showIf: function(e) {
                    return "custom" === e.get("sendSubmissionsTo") && !0 === e.get("sendWithJs")
                },
                advanced: !0
            }, {
                name: "successMessage",
                type: "uiBlocks",
                hideFromUI: !0,
                defaultValue: [{
                    "@type": "@builder.io/sdk:Element",
                    responsiveStyles: {
                        large: {
                            marginTop: "10px"
                        }
                    },
                    component: {
                        name: "Text",
                        options: {
                            text: "<span>Thanks!</span>"
                        }
                    }
                }]
            }, {
                name: "validate",
                type: "boolean",
                defaultValue: !0,
                advanced: !0
            }, {
                name: "errorMessagePath",
                type: "text",
                advanced: !0,
                helperText: 'Path to where to get the error message from in a JSON response to display to the user, e.g. "error.message" for a response like { "error": { "message": "this username is taken" }}'
            }, {
                name: "errorMessage",
                type: "uiBlocks",
                hideFromUI: !0,
                defaultValue: [{
                    "@type": "@builder.io/sdk:Element",
                    responsiveStyles: {
                        large: {
                            marginTop: "10px"
                        }
                    },
                    bindings: {
                        "component.options.text": "state.formErrorMessage || block.component.options.text"
                    },
                    component: {
                        name: "Text",
                        options: {
                            text: "<span>Form submission error :( Please check your answers and try again</span>"
                        }
                    }
                }]
            }, {
                name: "sendingMessage",
                type: "uiBlocks",
                hideFromUI: !0,
                defaultValue: [{
                    "@type": "@builder.io/sdk:Element",
                    responsiveStyles: {
                        large: {
                            marginTop: "10px"
                        }
                    },
                    component: {
                        name: "Text",
                        options: {
                            text: "<span>Sending...</span>"
                        }
                    }
                }]
            }, __assign(__assign({
                name: "customHeaders",
                type: "map"
            }, {
                valueType: {
                    type: "string"
                }
            }), {
                advanced: !0,
                showIf: 'options.get("sendSubmissionsTo") === "custom" && options.get("sendWithJs") === true'
            })],
            noWrap: !0,
            canHaveChildren: !0,
            defaultChildren: [{
                "@type": "@builder.io/sdk:Element",
                responsiveStyles: {
                    large: {
                        marginTop: "10px"
                    }
                },
                component: {
                    name: "Text",
                    options: {
                        text: "<span>Enter your name</span>"
                    }
                }
            }, {
                "@type": "@builder.io/sdk:Element",
                responsiveStyles: {
                    large: {
                        marginTop: "10px"
                    }
                },
                component: {
                    name: "Form:Input",
                    options: {
                        name: "name",
                        placeholder: "Jane Doe"
                    }
                }
            }, {
                "@type": "@builder.io/sdk:Element",
                responsiveStyles: {
                    large: {
                        marginTop: "10px"
                    }
                },
                component: {
                    name: "Text",
                    options: {
                        text: "<span>Enter your email</span>"
                    }
                }
            }, {
                "@type": "@builder.io/sdk:Element",
                responsiveStyles: {
                    large: {
                        marginTop: "10px"
                    }
                },
                component: {
                    name: "Form:Input",
                    options: {
                        name: "email",
                        placeholder: "jane@doe.com"
                    }
                }
            }, {
                "@type": "@builder.io/sdk:Element",
                responsiveStyles: {
                    large: {
                        marginTop: "10px"
                    }
                },
                component: {
                    name: "Form:SubmitButton",
                    options: {
                        text: "Submit"
                    }
                }
            }]
        })
          , FormInputComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", __assign({
                    key: _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && this.props.defaultValue ? this.props.defaultValue : "default-key",
                    placeholder: this.props.placeholder,
                    type: this.props.type,
                    name: this.props.name
                }, void 0 === this.props.value ? {
                    defaultValue: this.props.defaultValue
                } : {
                    value: this.props.value
                }, {
                    required: this.props.required
                }, this.props.attributes))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , FormInput = withBuilder(FormInputComponent, {
            name: "Form:Input",
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca",
            inputs: [{
                name: "type",
                type: "text",
                enum: ["text", "number", "email", "url", "checkbox", "radio", "range", "date", "datetime-local", "search", "tel", "time", "file", "month", "week", "password", "color", "hidden"],
                defaultValue: "text"
            }, {
                name: "name",
                type: "string",
                required: !0,
                helperText: 'Every input in a form needs a unique name describing what it takes, e.g. "email"'
            }, {
                name: "placeholder",
                type: "string",
                defaultValue: "Hello there",
                helperText: "Text to display when there is no value"
            }, {
                name: "defaultValue",
                type: "string"
            }, {
                name: "value",
                type: "string",
                advanced: !0
            }, {
                name: "required",
                type: "boolean",
                helperText: "Is this input required to be filled out to submit a form",
                defaultValue: !1
            }],
            noWrap: !0,
            static: !0,
            defaultStyles: {
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "3px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#ccc"
            }
        })
          , FormSubmitButtonComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", __assign({
                    type: "submit"
                }, this.props.attributes), this.props.text)
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , FormSubmitButton = withBuilder(FormSubmitButtonComponent, {
            name: "Form:SubmitButton",
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fdf2820ffed1f4349a94c40b3221f5b98",
            defaultStyles: {
                appearance: "none",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "25px",
                paddingRight: "25px",
                backgroundColor: "#3898EC",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer"
            },
            inputs: [{
                name: "text",
                type: "text",
                defaultValue: "Click me"
            }],
            static: !0,
            noWrap: !0
        })
          , LabelComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", __assign({
                    htmlFor: this.props.for
                }, this.props.attributes), this.props.text && react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
                    className: "builder-label-text",
                    dangerouslySetInnerHTML: {
                        __html: this.props.text
                    }
                }), this.props.builderBlock && this.props.builderBlock.children && this.props.builderBlock.children.map(function(e) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlock$1, {
                        key: e.id,
                        block: e
                    })
                }))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Label = withBuilder(LabelComponent, {
            name: "Form:Label",
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F9322342f04b545fb9a8091cd801dfb5b",
            inputs: [{
                name: "text",
                type: "html",
                richText: !0,
                defaultValue: "Label"
            }, {
                name: "for",
                type: "text",
                helperText: "The name of the input this label is for",
                advanced: !0
            }],
            noWrap: !0,
            static: !0,
            canHaveChildren: !0
        })
          , FormSelectComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                var e = this.props.options;
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", __assign({
                    value: this.props.value,
                    key: _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && this.props.defaultValue ? this.props.defaultValue : "default-key",
                    defaultValue: this.props.defaultValue,
                    name: this.props.name,
                    required: this.props.required
                }, this.props.attributes), e && e.map(function(e) {
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement("option", {
                        value: e.value
                    }, e.name || e.value)
                }))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , FormSelect = withBuilder(FormSelectComponent, {
            name: "Form:Select",
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F83acca093fb24aaf94dee136e9a4b045",
            defaultStyles: {
                alignSelf: "flex-start"
            },
            inputs: [{
                name: "options",
                type: "list",
                required: !0,
                subFields: [{
                    name: "value",
                    type: "text",
                    required: !0
                }, {
                    name: "name",
                    type: "text"
                }],
                defaultValue: [{
                    value: "option 1"
                }, {
                    value: "option 2"
                }]
            }, {
                name: "name",
                type: "string",
                required: !0,
                helperText: 'Every select in a form needs a unique name describing what it gets, e.g. "email"'
            }, {
                name: "defaultValue",
                type: "string"
            }, {
                name: "value",
                type: "string",
                advanced: !0
            }, {
                name: "required",
                type: "boolean",
                defaultValue: !1
            }],
            static: !0,
            noWrap: !0
        })
          , TextAreaComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.render = function() {
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", __assign({
                    placeholder: this.props.placeholder,
                    name: this.props.name,
                    value: this.props.value,
                    defaultValue: this.props.defaultValue,
                    required: this.props.required
                }, this.props.attributes))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , TextArea = withBuilder(TextAreaComponent, {
            name: "Form:TextArea",
            image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Ff74a2f3de58c4c3e939204e5b6b8f6c3",
            inputs: [{
                advanced: !0,
                name: "value",
                type: "string"
            }, {
                name: "name",
                type: "string",
                required: !0,
                helperText: 'Every input in a form needs a unique name describing what it gets, e.g. "email"'
            }, {
                name: "defaultValue",
                type: "string"
            }, {
                name: "placeholder",
                type: "string",
                defaultValue: "Hello there"
            }, {
                name: "required",
                type: "boolean",
                defaultValue: !1
            }],
            defaultStyles: {
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "3px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#ccc"
            },
            static: !0,
            noWrap: !0
        })
          , ImgComponent = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.getSrcSet = function() {
                var e = this.props.image;
                if (e && "string" == typeof e && e.match(/builder\.io/))
                    return getSrcSet(e)
            }
            ,
            t.prototype.render = function() {
                var e = this.props.attributes || {}
                  , t = this.getSrcSet();
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", __assign({
                    loading: "lazy"
                }, this.props.attributes, {
                    src: this.props.image || e.src,
                    srcSet: t
                }))
            }
            ,
            t
        }(react__WEBPACK_IMPORTED_MODULE_2__.Component)
          , Img = withBuilder(ImgComponent, {
            name: "Raw:Img",
            hideFromInsertMenu: !0,
            image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",
            inputs: [{
                name: "image",
                bubble: !0,
                type: "file",
                allowedFileTypes: IMAGE_FILE_TYPES,
                required: !0
            }],
            noWrap: !0,
            static: !0
        })
          , RawText = function(e) {
            var t = e.attributes || {};
            return react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
                className: (null == t ? void 0 : t.class) || (null == t ? void 0 : t.className),
                dangerouslySetInnerHTML: {
                    __html: e.text || ""
                }
            })
        };
        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(RawText, {
            name: "Builder:RawText",
            hideFromInsertMenu: !0,
            inputs: [{
                name: "text",
                bubble: !0,
                type: "longText",
                required: !0
            }]
        });
        var filterWithCustomTargetingScript = 'function filterWithCustomTargeting(e,t,n,r){var i={query:t,startDate:n,endDate:r},o=e.date&&new Date(e.date)||new Date;return!(i.startDate&&new Date(i.startDate)>o)&&(!(i.endDate&&new Date(i.endDate)<o)&&(!i.query||!i.query.length||i.query.every((function(t){return objectMatchesQuery(e,t)}))))}function isString(e){return"string"==typeof e}function isNumber(e){return"number"==typeof e}function objectMatchesQuery(e,t){return function(){var n=t.property,r=t.operator,i=t.value;if(t&&"urlPath"===t.property&&t.value&&"string"==typeof t.value&&"/"!==t.value&&t.value.endsWith("/")&&(i=t.value.slice(0,-1)),!n||!r)return!0;if(Array.isArray(i))return"isNot"===r?i.every((function(t){return objectMatchesQuery(e,{property:n,operator:r,value:t})})):!!i.find((function(t){return objectMatchesQuery(e,{property:n,operator:r,value:t})}));var o=e[n];if(Array.isArray(o))return o.includes(i);switch(r){case"is":return o===i;case"isNot":return o!==i;case"contains":return(isString(o)||Array.isArray(o))&&o.includes(String(i));case"startsWith":return isString(o)&&o.startsWith(String(i));case"endsWith":return isString(o)&&o.endsWith(String(i));case"greaterThan":return isNumber(o)&&isNumber(i)&&o>i;case"lessThan":return isNumber(o)&&isNumber(i)&&o<i;case"greaterThanOrEqualTo":return isNumber(o)&&isNumber(i)&&o>=i;case"lessThanOrEqualTo":return isNumber(o)&&isNumber(i)&&o<=i}return!1}()}';
        function filterWithCustomTargeting(e, t, n, r) {
            var i = t
              , o = n
              , a = r
              , s = e.date && new Date(e.date) || new Date;
            return !(o && new Date(o) > s) && !(a && new Date(a) < s) && (!i || !i.length || i.every(function(t) {
                return objectMatchesQuery(e, t)
            }))
        }
        function isString(e) {
            return "string" == typeof e
        }
        function isNumber(e) {
            return "number" == typeof e
        }
        function objectMatchesQuery(e, t) {
            return function() {
                var n = t.property
                  , r = t.operator
                  , i = t.value;
                if (t && "urlPath" === t.property && t.value && "string" == typeof t.value && "/" !== t.value && t.value.endsWith("/") && (i = t.value.slice(0, -1)),
                !n || !r)
                    return !0;
                if (Array.isArray(i))
                    return "isNot" === r ? i.every(function(t) {
                        return objectMatchesQuery(e, {
                            property: n,
                            operator: r,
                            value: t
                        })
                    }) : !!i.find(function(t) {
                        return objectMatchesQuery(e, {
                            property: n,
                            operator: r,
                            value: t
                        })
                    });
                var o = e[n];
                if (Array.isArray(o))
                    return o.includes(i);
                switch (r) {
                case "is":
                    return o === i;
                case "isNot":
                    return o !== i;
                case "contains":
                    return (isString(o) || Array.isArray(o)) && o.includes(String(i));
                case "startsWith":
                    return isString(o) && o.startsWith(String(i));
                case "endsWith":
                    return isString(o) && o.endsWith(String(i));
                case "greaterThan":
                    return isNumber(o) && isNumber(i) && o > i;
                case "lessThan":
                    return isNumber(o) && isNumber(i) && o < i;
                case "greaterThanOrEqualTo":
                    return isNumber(o) && isNumber(i) && o >= i;
                case "lessThanOrEqualTo":
                    return isNumber(o) && isNumber(i) && o <= i
                }
                return !1
            }()
        }
        function PersonalizationContainer(e) {
            var t, n, r, i, o, a, s, l, c, u, d, p, f, m, h, v, b, g, y, k, w, x = !!(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isBrowser && (null == (t = window.__hydrated) ? void 0 : t[null == (n = e.builderBlock) ? void 0 : n.id])), S = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null), C = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useState)(x), E = C[0], M = C[1], T = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1), O = T[0], R = T[1], I = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
            I[0];
            var A = I[1]
              , P = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useContext)(BuilderStoreContext);
            if ((0,
            react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
                M(!0),
                R(!0);
                var e, t = _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.userAttributesChanged.subscribe(function() {
                    A(function(e) {
                        return e + 1
                    })
                }), n = [function() {
                    return t.unsubscribe()
                }
                ];
                if (!_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && !_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing) {
                    var r = j[0];
                    null == (e = S.current) || e.dispatchEvent(new CustomEvent("builder.variantLoaded",{
                        detail: {
                            variant: r || "default",
                            content: P.content
                        },
                        bubbles: !0
                    }));
                    var i = new IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            var t;
                            e.isIntersecting && (null == (t = S.current) || t.dispatchEvent(new CustomEvent("builder.variantDisplayed",{
                                detail: {
                                    variant: r || "default",
                                    content: P.content
                                },
                                bubbles: !0
                            })))
                        })
                    }
                    );
                    i.observe(S.current),
                    n.push(function() {
                        return i.disconnect()
                    })
                }
                return function() {
                    n.forEach(function(e) {
                        return e()
                    })
                }
            }, []),
            _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isServer)
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", __assign({}, e.attributes, {
                    style: __assign({
                        opacity: 1,
                        transition: "opacity 0.2s ease-in-out"
                    }, null == (r = e.attributes) ? void 0 : r.style),
                    className: "builder-personalization-container ".concat(e.attributes.className)
                }), null == (i = e.variants) ? void 0 : i.map(function(t, n) {
                    var r, i;
                    return react__WEBPACK_IMPORTED_MODULE_2__.createElement("template", {
                        key: n,
                        "data-variant-id": (null == (r = e.builderBlock) ? void 0 : r.id) + n
                    }, react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlocks, {
                        blocks: t.blocks,
                        parentElementId: null == (i = e.builderBlock) ? void 0 : i.id,
                        dataPath: "component.options.variants.".concat(n, ".blocks"),
                        child: !0
                    }))
                }), react__WEBPACK_IMPORTED_MODULE_2__.createElement("script", {
                    nonce: P.context.nonce,
                    id: "variants-script-".concat(null == (o = e.builderBlock) ? void 0 : o.id),
                    dangerouslySetInnerHTML: {
                        __html: getPersonalizationScript(e.variants, (null == (a = e.builderBlock) ? void 0 : a.id) || "none", null == (s = e.builderState.state) ? void 0 : s.locale)
                    }
                }), react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlocks, {
                    blocks: null == (l = e.builderBlock) ? void 0 : l.children,
                    parentElementId: null == (c = e.builderBlock) ? void 0 : c.id,
                    dataPath: "this.children",
                    child: !0
                })), react__WEBPACK_IMPORTED_MODULE_2__.createElement("script", {
                    nonce: P.context.nonce,
                    dangerouslySetInnerHTML: {
                        __html: "\n         window.__hydrated = window.__hydrated || {};\n         window.__hydrated['".concat(null == (u = e.builderBlock) ? void 0 : u.id, "'] = true;\n        ").replace(/\s+/g, " ")
                    }
                }));
            var j = (e.variants || []).filter(function(t) {
                var n;
                return filterWithCustomTargeting(__assign(__assign({}, (null == (n = e.builderState.state) ? void 0 : n.locale) ? {
                    locale: e.builderState.state.locale
                } : {}), _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.cL.getUserAttributes()), t.query, t.startDate, t.endDate)
            });
            return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", __assign({
                ref: S
            }, e.attributes, {
                style: __assign({
                    opacity: +!!E,
                    transition: "opacity 0.2s ease-in-out"
                }, null == (d = e.attributes) ? void 0 : d.style),
                className: "builder-personalization-container ".concat(e.attributes.className).concat(E ? "" : " builder-personalization-container-loading")
            }), O && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && "number" == typeof e.previewingIndex && e.previewingIndex < ((null == (p = e.variants) ? void 0 : p.length) || 0) ? react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlocks, {
                blocks: null == (m = null == (f = e.variants) ? void 0 : f[e.previewingIndex]) ? void 0 : m.blocks,
                parentElementId: null == (h = e.builderBlock) ? void 0 : h.id,
                dataPath: "component.options.variants.".concat(e.previewingIndex, ".blocks"),
                child: !0
            }) : O && _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing && "number" != typeof e.previewingIndex || !E || !j.length ? react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlocks, {
                blocks: null == (v = e.builderBlock) ? void 0 : v.children,
                parentElementId: null == (b = e.builderBlock) ? void 0 : b.id,
                dataPath: "this.children",
                child: !0
            }) : react__WEBPACK_IMPORTED_MODULE_2__.createElement(BuilderBlocks, {
                blocks: null == (g = j[0]) ? void 0 : g.blocks,
                parentElementId: null == (y = e.builderBlock) ? void 0 : y.id,
                dataPath: "component.options.variants.".concat(null == (k = e.variants) ? void 0 : k.indexOf(j[0]), ".blocks"),
                child: !0
            })), react__WEBPACK_IMPORTED_MODULE_2__.createElement("script", {
                nonce: P.context.nonce,
                dangerouslySetInnerHTML: {
                    __html: "\n         window.__hydrated = window.__hydrated || {};\n         window.__hydrated['".concat(null == (w = e.builderBlock) ? void 0 : w.id, "'] = true;\n        ").replace(/\s+/g, " ")
                }
            }))
        }
        function getPersonalizationScript(e, t, n) {
            return "\n      (function() {\n        function getCookie(name) {\n          var nameEQ = name + \"=\";\n          var ca = document.cookie.split(';');\n          for(var i=0;i < ca.length;i++) {\n              var c = ca[i];\n              while (c.charAt(0)==' ') c = c.substring(1,c.length);\n              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);\n          }\n          return null;\n        }\n        function removeVariants() {\n          variants.forEach(function (template, index) {\n            document.querySelector('template[data-variant-id=\"' + \"".concat(t, "\" + index + '\"]').remove();\n          });\n          document.getElementById('variants-script-").concat(t, "').remove();\n        }\n\n        var attributes = JSON.parse(getCookie(\"").concat(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.attributesCookieName, '") || "{}");\n        ').concat(n ? 'attributes.locale = "'.concat(n, '";') : "", "\n        var variants = ").concat(JSON.stringify(null == e ? void 0 : e.map(function(e) {
                return {
                    query: e.query,
                    startDate: e.startDate,
                    endDate: e.endDate
                }
            })), ";\n        var winningVariantIndex = variants.findIndex(function(variant) {\n          return filterWithCustomTargeting(\n            attributes,\n            variant.query,\n            variant.startDate,\n            variant.endDate\n          );\n        });\n        var isDebug = location.href.includes('builder.debug=true');\n        if (isDebug) {\n          console.debug('PersonalizationContainer', {\n            attributes: attributes,\n            variants: variants,\n            winningVariantIndex: winningVariantIndex,\n            });\n        }\n        if (winningVariantIndex !== -1) {\n          var winningVariant = document.querySelector('template[data-variant-id=\"' + \"").concat(t, "\" + winningVariantIndex + '\"]');\n          if (winningVariant) {\n            var parentNode = winningVariant.parentNode;\n            var newParent = parentNode.cloneNode(false);\n            newParent.appendChild(winningVariant.content.firstChild);\n            parentNode.parentNode.replaceChild(newParent, parentNode);\n            if (isDebug) {\n              console.debug('PersonalizationContainer', 'Winning variant Replaced:', winningVariant);\n            }\n          }\n        } else if (variants.length > 0) {\n          removeVariants();\n        }\n        ").concat(filterWithCustomTargetingScript, "\n      })();\n    ").replace(/\s+/g, " ")
        }
        function useIsPreviewing() {
            var e = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1)
              , t = e[0]
              , n = e[1];
            return (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
                (_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isEditing || _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isPreviewing) && n(!0)
            }, []),
            t
        }
        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.registerComponent(PersonalizationContainer, {
            name: "PersonalizationContainer",
            noWrap: !0,
            friendlyName: "Dynamic Container",
            image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F37229ed30d8c41dfb10b8cca1992053a",
            canHaveChildren: !0,
            inputs: [{
                name: "variants",
                defaultValue: [],
                behavior: "personalizationVariantList",
                type: "list",
                subFields: [{
                    name: "name",
                    type: "text",
                    localized: !1
                }, {
                    name: "query",
                    friendlyName: "Targeting rules",
                    type: "BuilderQuery",
                    defaultValue: [],
                    localized: !1
                }, {
                    name: "startDate",
                    type: "date",
                    localized: !1
                }, {
                    name: "endDate",
                    type: "date",
                    localized: !1
                }, {
                    name: "blocks",
                    type: "UiBlocks",
                    hideFromUI: !0,
                    defaultValue: []
                }]
            }]
        }),
        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.isReact = !0,
        _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__.M$.sdkInfo = {
            name: "react",
            version: SDK_VERSION
        }
    }
    ,
    79687: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        let r = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        }
    }
    ,
    90737: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(28140)._(n(12115)).default.createContext({})
    }
    ,
    99184: (e, t, n) => {
        n.d(t, {
            Z2: () => W,
            AH: () => _,
            Y: () => q
        });
        var r, i = n(12115);
        function o(e) {
            if (e.sheet)
                return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t]
        }
        function a(e) {
            var t = document.createElement("style");
            return t.setAttribute("data-emotion", e.key),
            void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
            t.appendChild(document.createTextNode("")),
            t
        }
        var s = function() {
            function e(e) {
                this.isSpeedy = void 0 === e.speedy || e.speedy,
                this.tags = [],
                this.ctr = 0,
                this.nonce = e.nonce,
                this.key = e.key,
                this.container = e.container,
                this.before = null
            }
            var t = e.prototype;
            return t.insert = function(e) {
                if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                    var t, n = a(this);
                    t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling,
                    this.container.insertBefore(n, t),
                    this.tags.push(n)
                }
                var r = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                    var i = o(r);
                    try {
                        var s = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                        i.insertRule(e, s ? 0 : i.cssRules.length)
                    } catch (e) {}
                } else
                    r.appendChild(document.createTextNode(e));
                this.ctr++
            }
            ,
            t.flush = function() {
                this.tags.forEach(function(e) {
                    return e.parentNode.removeChild(e)
                }),
                this.tags = [],
                this.ctr = 0
            }
            ,
            e
        }()
          , l = n(13823)
          , c = "/*|*/"
          , u = c + "}";
        function d(e) {
            e && p.current.insert(e + "}")
        }
        var p = {
            current: null
        }
          , f = function(e, t, n, r, i, o, a, s, l, f) {
            switch (e) {
            case 1:
                switch (t.charCodeAt(0)) {
                case 64:
                    return p.current.insert(t + ";"),
                    "";
                case 108:
                    if (98 === t.charCodeAt(2))
                        return ""
                }
                break;
            case 2:
                if (0 === s)
                    return t + c;
                break;
            case 3:
                switch (s) {
                case 102:
                case 112:
                    return p.current.insert(n[0] + t),
                    "";
                default:
                    return t + (0 === f ? c : "")
                }
            case -2:
                t.split(u).forEach(d)
            }
        };
        let m = function(e) {
            void 0 === e && (e = {});
            var t, n, r, i = e.key || "css";
            void 0 !== e.prefix && (t = {
                prefix: e.prefix
            });
            var o = new l.A(t)
              , a = {};
            n = e.container || document.head;
            var c = document.querySelectorAll("style[data-emotion-" + i + "]");
            Array.prototype.forEach.call(c, function(e) {
                e.getAttribute("data-emotion-" + i).split(" ").forEach(function(e) {
                    a[e] = !0
                }),
                e.parentNode !== n && n.appendChild(e)
            }),
            o.use(e.stylisPlugins)(f),
            r = function(e, t, n, r) {
                var i = t.name;
                p.current = n,
                o(e, t.styles),
                r && (u.inserted[i] = !0)
            }
            ;
            var u = {
                key: i,
                sheet: new s({
                    key: i,
                    container: n,
                    nonce: e.nonce,
                    speedy: e.speedy
                }),
                nonce: e.nonce,
                inserted: a,
                registered: {},
                insert: r
            };
            return u
        };
        var h = !0;
        function v(e, t, n) {
            var r = "";
            return n.split(" ").forEach(function(n) {
                void 0 !== e[n] ? t.push(e[n]) : r += n + " "
            }),
            r
        }
        var b = function(e, t, n) {
            var r = e.key + "-" + t.name;
            if ((!1 === n || !1 === h && void 0 !== e.compat) && void 0 === e.registered[r] && (e.registered[r] = t.styles),
            void 0 === e.inserted[t.name]) {
                var i = t;
                do
                    e.insert("." + r, i, e.sheet, !0),
                    i = i.next;
                while (void 0 !== i)
            }
        };
        let g = function(e) {
            for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r,
            i -= 4)
                t = (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) * 0x5bd1e995 + ((t >>> 16) * 59797 << 16),
                t ^= t >>> 24,
                n = (65535 & t) * 0x5bd1e995 + ((t >>> 16) * 59797 << 16) ^ (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16);
            switch (i) {
            case 3:
                n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
                n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
                n ^= 255 & e.charCodeAt(r),
                n = (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16)
            }
            return n ^= n >>> 13,
            (((n = (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36)
        };
        var y = n(79687)
          , k = /[A-Z]|^ms/g
          , w = /_EMO_([^_]+?)_([^]*?)_EMO_/g
          , x = function(e) {
            return 45 === e.charCodeAt(1)
        }
          , S = function(e) {
            return null != e && "boolean" != typeof e
        }
          , C = function(e) {
            var t = {};
            return function(n) {
                return void 0 === t[n] && (t[n] = e(n)),
                t[n]
            }
        }(function(e) {
            return x(e) ? e : e.replace(k, "-$&").toLowerCase()
        })
          , E = function(e, t) {
            switch (e) {
            case "animation":
            case "animationName":
                if ("string" == typeof t)
                    return t.replace(w, function(e, t, n) {
                        return r = {
                            name: t,
                            styles: n,
                            next: r
                        },
                        t
                    })
            }
            return 1 === y.A[e] || x(e) || "number" != typeof t || 0 === t ? t : t + "px"
        };
        function M(e, t, n, i) {
            if (null == n)
                return "";
            if (void 0 !== n.__emotion_styles)
                return n;
            switch (typeof n) {
            case "boolean":
                return "";
            case "object":
                if (1 === n.anim)
                    return r = {
                        name: n.name,
                        styles: n.styles,
                        next: r
                    },
                    n.name;
                if (void 0 !== n.styles) {
                    var o = n.next;
                    if (void 0 !== o)
                        for (; void 0 !== o; )
                            r = {
                                name: o.name,
                                styles: o.styles,
                                next: r
                            },
                            o = o.next;
                    return n.styles + ";"
                }
                return T(e, t, n);
            case "function":
                if (void 0 !== e) {
                    var a = r
                      , s = n(e);
                    return r = a,
                    M(e, t, s, i)
                }
            }
            if (null == t)
                return n;
            var l = t[n];
            return void 0 === l || i ? n : l
        }
        function T(e, t, n) {
            var r = "";
            if (Array.isArray(n))
                for (var i = 0; i < n.length; i++)
                    r += M(e, t, n[i], !1);
            else
                for (var o in n) {
                    var a = n[o];
                    if ("object" != typeof a)
                        null != t && void 0 !== t[a] ? r += o + "{" + t[a] + "}" : S(a) && (r += C(o) + ":" + E(o, a) + ";");
                    else if (Array.isArray(a) && "string" == typeof a[0] && (null == t || void 0 === t[a[0]]))
                        for (var s = 0; s < a.length; s++)
                            S(a[s]) && (r += C(o) + ":" + E(o, a[s]) + ";");
                    else {
                        var l = M(e, t, a, !1);
                        switch (o) {
                        case "animation":
                        case "animationName":
                            r += C(o) + ":" + l + ";";
                            break;
                        default:
                            r += o + "{" + l + "}"
                        }
                    }
                }
            return r
        }
        var O = /label:\s*([^\s;\n{]+)\s*;/g
          , R = function(e, t, n) {
            if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles)
                return e[0];
            var i, o = !0, a = "";
            r = void 0;
            var s = e[0];
            null == s || void 0 === s.raw ? (o = !1,
            a += M(n, t, s, !1)) : a += s[0];
            for (var l = 1; l < e.length; l++)
                a += M(n, t, e[l], 46 === a.charCodeAt(a.length - 1)),
                o && (a += s[l]);
            O.lastIndex = 0;
            for (var c = ""; null !== (i = O.exec(a)); )
                c += "-" + i[1];
            return {
                name: g(a) + c,
                styles: a,
                next: r
            }
        }
          , I = Object.prototype.hasOwnProperty
          , A = (0,
        i.createContext)("undefined" != typeof HTMLElement ? m() : null)
          , P = (0,
        i.createContext)({});
        A.Provider;
        var j = function(e) {
            var t = function(t, n) {
                return (0,
                i.createElement)(A.Consumer, null, function(r) {
                    return e(t, r, n)
                })
            };
            return (0,
            i.forwardRef)(t)
        }
          , L = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__"
          , B = function(e, t) {
            var n = {};
            for (var r in t)
                I.call(t, r) && (n[r] = t[r]);
            return n[L] = e,
            n
        }
          , $ = function() {
            return null
        }
          , N = function(e, t, n, r) {
            var o = null === n ? t.css : t.css(n);
            "string" == typeof o && void 0 !== e.registered[o] && (o = e.registered[o]);
            var a = t[L]
              , s = [o]
              , l = "";
            "string" == typeof t.className ? l = v(e.registered, s, t.className) : null != t.className && (l = t.className + " ");
            var c = R(s);
            b(e, c, "string" == typeof a),
            l += e.key + "-" + c.name;
            var u = {};
            for (var d in t)
                I.call(t, d) && "css" !== d && d !== L && (u[d] = t[d]);
            u.ref = r,
            u.className = l;
            var p = (0,
            i.createElement)(a, u)
              , f = (0,
            i.createElement)($, null);
            return (0,
            i.createElement)(i.Fragment, null, f, p)
        }
          , F = j(function(e, t, n) {
            return "function" == typeof e.css ? (0,
            i.createElement)(P.Consumer, null, function(r) {
                return N(t, e, r, n)
            }) : N(t, e, null, n)
        });
        let _ = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return R(t)
        };
        var q = function(e, t) {
            var n = arguments;
            if (null == t || !I.call(t, "css"))
                return i.createElement.apply(void 0, n);
            var r = n.length
              , o = Array(r);
            o[0] = F,
            o[1] = B(e, t);
            for (var a = 2; a < r; a++)
                o[a] = n[a];
            return i.createElement.apply(null, o)
        }
          , V = function e(t) {
            for (var n = t.length, r = 0, i = ""; r < n; r++) {
                var o = t[r];
                if (null != o) {
                    var a = void 0;
                    switch (typeof o) {
                    case "boolean":
                        break;
                    case "object":
                        if (Array.isArray(o))
                            a = e(o);
                        else
                            for (var s in a = "",
                            o)
                                o[s] && s && (a && (a += " "),
                                a += s);
                        break;
                    default:
                        a = o
                    }
                    a && (i && (i += " "),
                    i += a)
                }
            }
            return i
        };
        function z(e, t, n) {
            var r = []
              , i = v(e, r, n);
            return r.length < 2 ? n : i + t(r)
        }
        var D = function() {
            return null
        }
          , W = j(function(e, t) {
            return (0,
            i.createElement)(P.Consumer, null, function(n) {
                var r = !1
                  , o = function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    var i = R(n, t.registered);
                    return b(t, i, !1),
                    t.key + "-" + i.name
                }
                  , a = function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return z(t.registered, o, V(n))
                }
                  , s = {
                    css: o,
                    cx: a,
                    theme: n
                }
                  , l = e.children(s);
                r = !0;
                var c = (0,
                i.createElement)(D, null);
                return (0,
                i.createElement)(i.Fragment, null, c, l)
            })
        })
    }
}]);
