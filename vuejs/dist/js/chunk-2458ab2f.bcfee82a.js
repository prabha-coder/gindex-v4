(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2458ab2f"],
    {
        "2a7a": function (i, t, e) {
            "use strict";
            e.r(t);
            var n = function () {
                    var i = this,
                        t = i.$createElement,
                        e = i._self._c || t;
                    return e("div", { staticClass: "g2-grid-view" }, [
                        e(
                            "div",
                            { staticClass: "columns is-multiline" },
                            i._l(i.folders, function (t, n) {
                                return e(
                                    "div",
                                    {
                                        key: "folder_" + n,
                                        staticClass: "column is-one-quarter",
                                        on: {
                                            click: function (e) {
                                                return i.go(t);
                                            },
                                        },
                                    },
                                    [
                                        e("div", { staticClass: "card g2-grid-view-card g2-grid-view-folder" }, [
                                            e("div", { staticClass: "media" }, [
                                                e("div", { staticClass: "content" }, [
                                                    e("svg", { staticClass: "iconfont", attrs: { "aria-hidden": "true" } }, [e("use", { attrs: { "xlink:href": i.getIcon(t.mimeType) } })]),
                                                    i._v(" " + i._s(t.name) + " "),
                                                ]),
                                            ]),
                                        ]),
                                    ]
                                );
                            }),
                            0
                        ),
                        e(
                            "div",
                            { staticClass: "columns is-multiline" },
                            i._l(i.files, function (t, n) {
                                return e(
                                    "div",
                                    {
                                        key: "file_" + n,
                                        staticClass: "column is-one-quarter",
                                        on: {
                                            click: function (e) {
                                                return i.go(t, "view");
                                            },
                                        },
                                    },
                                    [
                                        e("div", { staticClass: "card g2-grid-view-card" }, [
                                            e("div", { class: "card-image" + (-1 != t.mimeType.indexOf("video") ? " g2-grid-view-play" : "") }, [
                                                e("i"),
                                                e("figure", { staticClass: "image is-square" }, [
                                                    t.thumbnailLink ? e("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: i.thum(t.thumbnailLink), expression: "thum(file.thumbnailLink)" }], attrs: { alt: t.name } }) : i._e(),
                                                ]),
                                            ]),
                                            e("div", { staticClass: "media g2-grid-view-file" }, [
                                                e("div", { staticClass: "content" }, [
                                                    e("svg", { staticClass: "iconfont", attrs: { "aria-hidden": "true" } }, [e("use", { attrs: { "xlink:href": i.getIcon(t.mimeType) } })]),
                                                    i._v(" " + i._s(t.name) + " "),
                                                ]),
                                            ]),
                                        ]),
                                    ]
                                );
                            }),
                            0
                        ),
                    ]);
                },
                a = [],
                s =
                    (e("4de4"),
                    {
                        name: "GridView",
                        props: {
                            data: {
                                type: Array,
                                default: function () {
                                    return [];
                                },
                            },
                            getIcon: { type: Function },
                            go: { type: Function },
                            thum: { type: Function },
                        },
                        data: function () {
                            return {};
                        },
                        computed: {
                            folders: function () {
                                return this.data.filter(function (i) {
                                    return i.isFolder;
                                });
                            },
                            files: function () {
                                return this.data.filter(function (i) {
                                    return !i.isFolder;
                                });
                            },
                        },
                        methods: {},
                    }),
                r = s,
                c = (e("6a58"), e("2877")),
                l = Object(c["a"])(r, n, a, !1, null, "39114126", null);
            t["default"] = l.exports;
        },
        "6a58": function (i, t, e) {
            "use strict";
            var n = e("a196"),
                a = e.n(n);
            a.a;
        },
        a196: function (i, t, e) {},
    },
]);
