(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0b2ee4"],
    {
        "25e0": function (t, e, i) {
            "use strict";
            i.r(e);
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("table", { staticClass: "table is-hoverable" }, [
                        i("thead", [
                            i(
                                "tr",
                                t._l(t.columns, function (e, s) {
                                    return i("th", { key: s, class: e.class, style: e.style }, [t._v(" " + t._s(e.name) + " "), t._m(0, !0)]);
                                }),
                                0
                            ),
                        ]),
                        i(
                            "tbody",
                            t._l(t.data, function (e, s) {
                                return i("tr", { key: s }, [
                                    i(
                                        "td",
                                        {
                                            on: {
                                                click: function (i) {
                                                    return i.target !== i.currentTarget ? null : t.go(e, "application/vnd.google-apps.folder" !== e.mimeType ? "view" : "");
                                                },
                                            },
                                        },
                                        [
                                            i("svg", { staticClass: "iconfont", attrs: { "aria-hidden": "true" } }, [i("use", { attrs: { "xlink:href": t.icons(e.mimeType) } })]),
                                            t._v(" " + t._s(e.name) + " "),
                                            t.isShowDesc ? i("span", { staticClass: "has-text-grey g2-file-desc", domProps: { innerHTML: t._s(e.description) } }) : t._e(),
                                        ]
                                    ),
                                    i("td", { staticClass: "is-hidden-mobile is-hidden-touch" }, [t._v(" " + t._s(e.modifiedTime) + " ")]),
                                    i("td", { staticClass: "is-hidden-mobile is-hidden-touch" }, [t._v(t._s(e.size))]),
                                    i("td", { staticClass: "is-hidden-mobile is-hidden-touch" }, [
                                        i(
                                            "span",
                                            {
                                                staticClass: "icon",
                                                on: {
                                                    click: function (i) {
                                                        return i.stopPropagation(), t.copy(e.path);
                                                    },
                                                },
                                            },
                                            [i("i", { staticClass: "fa fa-copy faa-shake animated-hover", attrs: { title: t.$t("list.opt.copy"), "aria-hidden": "true" } })]
                                        ),
                                        i(
                                            "span",
                                            {
                                                staticClass: "icon",
                                                on: {
                                                    click: function (i) {
                                                        return i.stopPropagation(), t.go(e, "_blank");
                                                    },
                                                },
                                            },
                                            [i("i", { staticClass: "fa fa-external-link faa-shake animated-hover", attrs: { title: t.$t("list.opt.newTab"), "aria-hidden": "true" } })]
                                        ),
                                        "application/vnd.google-apps.folder" !== e.mimeType
                                            ? i(
                                                  "span",
                                                  {
                                                      staticClass: "icon",
                                                      on: {
                                                          click: function (i) {
                                                              return i.stopPropagation(), t.go(e, "down");
                                                          },
                                                      },
                                                  },
                                                  [i("i", { staticClass: "fa fa-download faa-shake animated-hover", attrs: { "aria-hidden": "true", title: t.$t("list.opt.download") } })]
                                              )
                                            : t._e(),
                                    ]),
                                ]);
                            }),
                            0
                        ),
                    ]);
                },
                a = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("span", { staticClass: "caret-wrapper" }, [i("i", { staticClass: "sort-caret ascending" }), i("i", { staticClass: "sort-caret descending" })]);
                    },
                ],
                n = {
                    props: {
                        data: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        icons: { type: Function },
                        go: { type: Function },
                        copy: { type: Function },
                    },
                    computed: {
                        columns: function () {
                            return [
                                { name: this.$t("list.title.file"), style: "" },
                                { name: this.$t("list.title.moditime"), style: "width:20%", class: "is-hidden-mobile is-hidden-touch" },
                                { name: this.$t("list.title.size"), style: "width:10.5%", class: "is-hidden-mobile is-hidden-touch" },
                                { name: this.$t("list.title.operation"), style: "width:13.5%", class: "is-hidden-mobile is-hidden-touch" },
                            ];
                        },
                        isShowDesc: function () {
                            return window.themeOptions.render.desc || !1;
                        },
                    },
                },
                o = n,
                l = i("2877"),
                c = Object(l["a"])(o, s, a, !1, null, null, null);
            e["default"] = c.exports;
        },
    },
]);
