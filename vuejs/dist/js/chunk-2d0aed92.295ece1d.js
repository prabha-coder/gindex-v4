(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0aed92"],
    {
        "0c8a": function (t, a, s) {
            "use strict";
            s.r(a);
            var n = function () {
                    var t = this,
                        a = t.$createElement,
                        s = t._self._c || a;
                    return s("div", { staticClass: "content g2-content" }, [
                        s(
                            "figure",
                            { staticClass: "image" },
                            [
                                s("img", { class: t.display ? "" : "is-hidden", attrs: { src: t.imgurl }, on: { load: t.loading } }),
                                s("center", { class: t.display ? "is-hidden" : "" }, [s("i", { staticClass: "fa fa-spinner fa-pulse fa-2x fa-fw" }), s("span", { staticClass: "sr-only" }, [t._v("Loading...")])]),
                            ],
                            1
                        ),
                        s("hr"),
                    ]);
                },
                i = [],
                e = s("45d8"),
                r = {
                    data: function () {
                        return { imgurl: "", display: !1 };
                    },
                    computed: {
                        url: function () {
                            return this.$route.params.path ? Object(e["d"])(this.$route.params.path) : "";
                        },
                    },
                    activated: function () {
                        this.render();
                    },
                    methods: {
                        render: function () {
                            var t = this.url;
                            this.imgurl = t;
                        },
                        loading: function (t) {
                            1 == t.target.complete && (this.display = !0);
                        },
                    },
                },
                l = r,
                c = s("2877"),
                u = Object(c["a"])(l, n, i, !1, null, null, null);
            a["default"] = u.exports;
        },
    },
]);
