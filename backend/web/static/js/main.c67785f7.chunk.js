(this["webpackJsonpreact-app"] = this["webpackJsonpreact-app"] || []).push([
  [0],
  {
    129: function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "a", function () {
          return O;
        });
        var n = a(0),
          l = a.n(n),
          r = a(60),
          c = a(150),
          u = a(130),
          i = a(151),
          o = a(147),
          m = (a(282), a(83)),
          s = a(55),
          d = a(102),
          p = a(154),
          E = a(82),
          f = a(22),
          h = a(4),
          b = m.a.SubMenu,
          g = s.a.Header,
          v = s.a.Content,
          y = s.a.Sider,
          j = Object(r.b)(
            function (e) {
              return { user: e.main.user };
            },
            function (e) {
              return {
                setUser: function (t) {
                  return e({ type: "SET_USER", user: t });
                },
              };
            }
          )(function (e) {
            var t = e.user;
            if (!t) {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  s.a,
                  {
                    style: {
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "100vh",
                    },
                  },
                  l.a.createElement(
                    d.a,
                    {
                      name: "basic",
                      onFinish: function (t) {
                        console.log("Success:", t);
                        var a = new FormData();
                        a.append("login", t.login),
                          a.append("password", t.password),
                          fetch(h.a + "/user/login", {
                            method: "POST",
                            body: a,
                          })
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (t) {
                              403 === t.status && alert(t.message),
                                200 === t.status && e.setUser(t.userInfo);
                            });
                      },
                    },
                    l.a.createElement(
                      d.a.Item,
                      {
                        label: "\u041b\u043e\u0433\u0438\u043d",
                        name: "login",
                        rules: [
                          {
                            required: !0,
                            message:
                              "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",
                          },
                        ],
                      },
                      l.a.createElement(p.a, { type: "text" })
                    ),
                    l.a.createElement(
                      d.a.Item,
                      {
                        label: "\u041f\u0430\u0440\u043e\u043b\u044c",
                        name: "password",
                        rules: [
                          {
                            required: !0,
                            message:
                              "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",
                          },
                        ],
                      },
                      l.a.createElement(p.a, { type: "password" })
                    ),
                    l.a.createElement(
                      E.a,
                      { type: "primary", htmlType: "submit" },
                      "\u0412\u043e\u0439\u0442\u0438"
                    )
                  )
                )
              );
            }
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(u.Normalize, null),
              l.a.createElement(o.a, null),
              l.a.createElement(
                s.a,
                { style: { flex: 1 } },
                l.a.createElement(s.a, null, l.a.createElement(g, null)),
                l.a.createElement(
                  s.a,
                  null,
                  l.a.createElement(
                    y,
                    { width: 200, className: "site-layout-background" },
                    l.a.createElement(
                      m.a,
                      {
                        mode: "inline",
                        defaultSelectedKeys: [],
                        defaultOpenKeys: [],
                        style: { height: "100%", borderRight: 0 },
                      },
                      l.a.createElement(
                        b,
                        {
                          key: "sub1",
                          title:
                            "\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b",
                        },
                        l.a.createElement(
                          m.a.Item,
                          { key: "1" },
                          l.a.createElement(
                            f.a,
                            { to: "/list-rest" },
                            "\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"
                          )
                        ),
                        "admin" === t.role &&
                          l.a.createElement(
                            m.a.Item,
                            { key: "2" },
                            l.a.createElement(
                              f.a,
                              { to: "/add-rest" },
                              "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"
                            )
                          )
                      )
                    )
                  ),
                  l.a.createElement(
                    v,
                    { style: { padding: 30 } },
                    l.a.createElement(i.a, null)
                  )
                )
              )
            );
          }),
          O = Object(c.hot)(e)(function () {
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(j, null)
            );
          });
      }.call(this, a(104)(e)));
    },
    147: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var n = a(148),
        l = a(91),
        r = a(76);
      function c() {
        var e = Object(n.a)([
          '\n  body {\n    font-family: "Helvetica", "Open Sans", sans-serif;\n    height: 100vh;\n    -webkit-font-smoothing: antialiased;\n    color: ',
          "\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  :root {\n    // font-size: 10px;\n  }\n  * {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    border-width: 0px;\n  }\n  body {\n  }\n\n  #root {\n  }\n\n  tt,\n  code,\n  kbd,\n  samp,\n  listing {\n  }\n",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var u = Object(l.createGlobalStyle)(c(), r.a.black);
    },
    151: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return N;
      });
      var n = a(0),
        l = a.n(n),
        r = a(146),
        c = function () {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "p",
              null,
              "\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"
            )
          );
        },
        u = a(20),
        i = a(102),
        o = a(154),
        m = a(291),
        s = a(82),
        d = a(293),
        p = (a(168), a(4)),
        E = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        f = function () {
          var e = Object(n.useState)(),
            t = Object(u.a)(e, 2),
            a = t[0],
            r = t[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              i.a,
              Object.assign(
                {
                  name: "basic",
                  onFinish: function (e) {
                    console.log("Success:", { values: e, value: a });
                    var t = document.querySelector('input[type="file"]'),
                      n = new FormData();
                    Object.keys(e).forEach(function (t) {
                      "dragger" !== t &&
                        n.append(
                          t,
                          "address" === t ? JSON.stringify(e[t]) : e[t]
                        );
                    }),
                      n.append("file", t.files[0]),
                      n.append("user", "hubot"),
                      fetch(p.a + "/restaurant/add", {
                        method: "POST",
                        body: n,
                        headers: {},
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          alert(e.message),
                            200 === e.status && (document.location.href = "/");
                        });
                  },
                  onFinishFailed: function (e) {
                    console.log("Failed:", e);
                  },
                  style: { minHeight: "100vh" },
                  initialValues: { active: !0 },
                },
                E
              ),
              l.a.createElement(
                i.a.Item,
                {
                  label: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                  name: "name",
                  rules: [
                    {
                      required: !0,
                      message:
                        "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",
                    },
                  ],
                },
                l.a.createElement(o.a, null)
              ),
              l.a.createElement(
                i.a.Item,
                {
                  label: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                  name: "description",
                },
                l.a.createElement(o.a, null)
              ),
              l.a.createElement(
                i.a.Item,
                {
                  label:
                    "\u0418\u0437\u043e\u0431\u0440\u0436\u0430\u0435\u043d\u0438\u0435",
                  name: "file",
                },
                l.a.createElement(o.a, { type: "file" })
              ),
              l.a.createElement(
                i.a.Item,
                { label: "\u0410\u0434\u0440\u0435\u0441", name: "address" },
                l.a.createElement(d.a, {
                  token: "eadbc452286d23c7163b38989884d5ae40d08ade",
                  value: a,
                  onChange: r,
                })
              ),
              l.a.createElement(
                i.a.Item,
                {
                  label:
                    "\u0420\u0430\u0434\u0438\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 (\u043a\u043c)",
                  name: "delivery_radius",
                },
                l.a.createElement(o.a, null)
              ),
              l.a.createElement(
                i.a.Item,
                { name: "active", valuePropName: "checked" },
                l.a.createElement(
                  m.a,
                  null,
                  "\u0410\u043a\u0442\u0438\u0432\u0435\u043d"
                )
              ),
              l.a.createElement(
                s.a,
                { type: "primary", htmlType: "submit" },
                "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
              )
            )
          );
        },
        h = a(290),
        b = a(63),
        g = a(42),
        v = a(22),
        y = h.a.Meta,
        j = function () {
          var e = Object(n.useState)([]),
            t = Object(u.a)(e, 2),
            a = t[0],
            r = t[1];
          return (
            Object(n.useEffect)(function () {
              try {
                fetch(p.a + "/restaurant/list?token=ZWmGuABp3N6")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return r(e);
                  });
              } catch (e) {
                console.log(e);
              }
            }, []),
            l.a.createElement(
              l.a.Fragment,
              null,
              a.length
                ? l.a.createElement(
                    b.a,
                    { gutter: [16, 16] },
                    a.map(function (e) {
                      var t;
                      try {
                        t = JSON.parse(e.address_json).value;
                      } catch (a) {
                        t =
                          "\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e";
                      }
                      return l.a.createElement(
                        v.a,
                        {
                          to: { pathname: "/restaurant", state: { id: e.id } },
                          key: e.id,
                        },
                        l.a.createElement(
                          g.a,
                          { className: "gutter-row", span: 6 },
                          l.a.createElement(
                            h.a,
                            {
                              hoverable: !0,
                              style: { width: 240 },
                              cover: l.a.createElement("img", {
                                alt: "",
                                src: p.a + "/" + e.image,
                              }),
                            },
                            l.a.createElement(y, {
                              title: e.name,
                              description: e.description + "\n" + t,
                            })
                          )
                        )
                      );
                    })
                  )
                : "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"
            )
          );
        },
        O = h.a.Meta;
      function _(e, t) {
        var a = !1;
        return function () {
          a ||
            (e.apply(this, arguments),
            (a = !0),
            setTimeout(function () {
              return (a = !1);
            }, t));
        };
      }
      var w = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)(!1),
            d = Object(u.a)(m, 2),
            E = d[0],
            f = d[1],
            y = Object(n.useState)(!1),
            j = Object(u.a)(y, 2),
            w = j[0],
            C = j[1];
          Object(n.useEffect)(
            function () {
              S();
            },
            [i]
          );
          var k,
            S = function () {
              try {
                fetch(p.a + "/restaurant/get-data?id=" + i)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    c(e), f(e.time_start), C(e.time_end);
                  });
              } catch (e) {
                console.log(e);
              }
            };
          try {
            k = JSON.parse(r.address_json).value;
          } catch (F) {
            k =
              "\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e";
          }
          if ((console.log("rest data", r), !r)) return null;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              b.a,
              { gutter: [16, 16] },
              l.a.createElement(
                g.a,
                { className: "gutter-row", span: 10 },
                l.a.createElement(
                  h.a,
                  {
                    hoverable: !0,
                    style: { width: "100%" },
                    cover: l.a.createElement("img", {
                      alt: "",
                      src: p.a + "/" + r.image,
                    }),
                  },
                  l.a.createElement(O, {
                    title: r.name,
                    description: r.description,
                  }),
                  l.a.createElement("p", null, k),
                  l.a.createElement(
                    "p",
                    null,
                    "\u0420\u0430\u0434\u0438\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 ",
                    r.delivery_radius,
                    " \u043a\u043c"
                  )
                )
              ),
              l.a.createElement(
                g.a,
                { className: "gutter-row", span: 10 },
                l.a.createElement(
                  v.a,
                  { to: { pathname: "restaurant-menu", state: { id: i } } },
                  l.a.createElement(s.a, null, "\u041c\u0435\u043d\u044e")
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  v.a,
                  { to: { pathname: "restaurant-modif", state: { id: i } } },
                  l.a.createElement(
                    s.a,
                    null,
                    "\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b"
                  )
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u0420\u0430\u0434\u0438\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 (\u043a\u043c)"
                  ),
                  l.a.createElement(o.a, {
                    value: r.delivery_radius,
                    onChange: function (e) {
                      return fetch(
                        p.a +
                          "/restaurant/edit-rest-radius?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return S();
                      });
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"
                  ),
                  l.a.createElement(o.a, {
                    value: r.description,
                    onChange: _(function (e) {
                      fetch(
                        p.a +
                          "/restaurant/edit-rest-desc?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return S();
                      });
                    }, 1e3),
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  v.a,
                  { to: { pathname: "restaurant-delivery", state: { id: i } } },
                  l.a.createElement(
                    s.a,
                    null,
                    "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"
                  )
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f (\u0447\u0447:\u043c\u043c)"
                  ),
                  l.a.createElement(o.a, {
                    value: E,
                    onChange: function (e) {
                      return f(e.target.value);
                    },
                  })
                ),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f (\u0447\u0447:\u043c\u043c)"
                  ),
                  l.a.createElement(o.a, {
                    value: w,
                    onChange: function (e) {
                      return C(e.target.value);
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement(
                  s.a,
                  {
                    onClick: function () {
                      fetch(
                        p.a +
                          "/restaurant/edit-rest-time?id="
                            .concat(r.id, "&start=")
                            .concat(E, "&end=")
                            .concat(w)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            S();
                        });
                    },
                  },
                  "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f"
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430 (\u0440\u0443\u0431)"
                  ),
                  l.a.createElement(o.a, {
                    value: r.min_price,
                    onChange: function (e) {
                      return fetch(
                        p.a +
                          "/restaurant/edit-rest-min-price?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return S();
                      });
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u042e\u0440\u0438\u0434\u0438\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f (\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u041e\u041e\u041e, \u0430\u0434\u0440\u0435\u0441, \u0442\u0435\u043b\u0435\u0444\u043e\u043d)"
                  ),
                  l.a.createElement(o.a, {
                    value: r.restaurant_info,
                    onChange: function (e) {
                      return fetch(
                        p.a +
                          "/restaurant/edit-rest-info?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return S();
                      });
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  s.a,
                  {
                    onClick: function () {
                      fetch(
                        p.a +
                          "/restaurant/edit-rest-active?id="
                            .concat(r.id, "&value=")
                            .concat("1" == r.active ? 0 : 1)
                      ).then(function (e) {
                        return S();
                      });
                    },
                  },
                  "\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d ",
                  "1" == r.active
                    ? "\u043e\u0442\u043a\u0440\u044b\u0442"
                    : "\u0437\u0430\u043a\u0440\u044b\u0442",
                  " ",
                  "(\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b",
                  " ",
                  "1" == r.active
                    ? "\u0437\u0430\u043a\u0440\u044b\u0442\u044c"
                    : "\u043e\u0442\u043a\u0440\u044b\u0442\u044c",
                  ")"
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  v.a,
                  { to: { pathname: "restaurant-discount", state: { id: i } } },
                  l.a.createElement(
                    s.a,
                    null,
                    "\u0421\u043a\u0438\u0434\u043a\u0438, \u0430\u043a\u0446\u0438\u0438 \u0438 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\u044b"
                  )
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
                  ),
                  l.a.createElement("input", {
                    type: "file",
                    onChange: function (e) {
                      var t = new FormData();
                      t.append("file", e.target.files[0]),
                        fetch(
                          p.a +
                            "/restaurant/change-rest-image?id=".concat(r.id),
                          { method: "POST", body: t }
                        ).then(function (e) {
                          return S();
                        });
                    },
                  })
                )
              )
            )
          );
        },
        C = a(69),
        k = a(5),
        S = a(292),
        F = a(289),
        x = S.a.Panel,
        I = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1];
          console.log("data is", r);
          var i = e.location.state.id,
            m = Object(n.useState)(!1),
            d = Object(u.a)(m, 2),
            E = d[0],
            f = d[1],
            b = function () {
              var e = new FormData();
              e.append("rest_id", i),
                fetch(p.a + "/restaurant/get-menu", { method: "POST", body: e })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    console.log(e), c(e);
                  });
            };
          Object(n.useEffect)(function () {
            b();
          }, []);
          var g = Object(n.useState)(!1),
            y = Object(u.a)(g, 2),
            j = y[0],
            O = y[1];
          return (
            console.log("newItem", j),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                v.a,
                { to: { pathname: "restaurant-modif", state: { id: i } } },
                l.a.createElement(
                  s.a,
                  null,
                  "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b"
                )
              ),
              l.a.createElement(F.a, null),
              l.a.createElement(o.a, {
                onChange: function (e) {
                  return f(e.target.value);
                },
              }),
              l.a.createElement(
                s.a,
                {
                  onClick: function () {
                    var e = new FormData();
                    e.append("rest_id", i),
                      e.append("category_name", E),
                      fetch(p.a + "/restaurant/create-category-menu", {
                        method: "POST",
                        body: e,
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          return b();
                        });
                  },
                },
                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"
              ),
              l.a.createElement(F.a, null),
              r &&
                r.menu &&
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement(
                    "h3",
                    null,
                    "\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430"
                  ),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"
                    ),
                    l.a.createElement(
                      "select",
                      {
                        style: { width: "100%", height: 40 },
                        value: j.category_id,
                        onChange: function (e) {
                          return O(
                            Object(k.a)(
                              Object(k.a)({}, j),
                              {},
                              { category_id: e.target.value }
                            )
                          );
                        },
                      },
                      r.menu.map(function (e) {
                        return l.a.createElement(
                          "option",
                          { key: e.id, value: e.id },
                          e.name
                        );
                      })
                    )
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"
                    ),
                    l.a.createElement(o.a, {
                      onChange: function (e) {
                        return O(
                          Object(k.a)(
                            Object(k.a)({}, j),
                            {},
                            { name: e.target.value }
                          )
                        );
                      },
                    })
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"
                    ),
                    l.a.createElement(o.a, {
                      onChange: function (e) {
                        return O(
                          Object(k.a)(
                            Object(k.a)({}, j),
                            {},
                            { description: e.target.value }
                          )
                        );
                      },
                    })
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u0412\u0435\u0441 (\u0433\u0440)"
                    ),
                    l.a.createElement(o.a, {
                      onChange: function (e) {
                        return O(
                          Object(k.a)(
                            Object(k.a)({}, j),
                            {},
                            { weight: e.target.value }
                          )
                        );
                      },
                    })
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u0426\u0435\u043d\u0430 (\u0440\u0443\u0431)"
                    ),
                    l.a.createElement(o.a, {
                      onChange: function (e) {
                        return O(
                          Object(k.a)(
                            Object(k.a)({}, j),
                            {},
                            { price: e.target.value }
                          )
                        );
                      },
                    })
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
                    ),
                    l.a.createElement(o.a, {
                      type: "file",
                      id: "new_item_image",
                      value: j.file,
                      onChange: function (e) {
                        return O(
                          Object(k.a)(
                            Object(k.a)({}, j),
                            {},
                            { file: e.target.value }
                          )
                        );
                      },
                    }),
                    l.a.createElement(
                      "button",
                      {
                        onClick: function () {
                          (document.querySelector("#new_item_image").value =
                            ""),
                            document
                              .querySelector("#new_item_image")
                              .dispatchEvent(new Event("change")),
                            O(
                              Object(k.a)(
                                Object(k.a)({}, j),
                                {},
                                { file: void 0 }
                              )
                            );
                        },
                        style: { padding: 5 },
                      },
                      "\u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"
                    )
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    s.a,
                    {
                      onClick: function () {
                        var e = new FormData(),
                          t = document.querySelector("#new_item_image");
                        console.log("data is ", r),
                          e.append(
                            "category_id",
                            j.category_id ? j.category_id : r.menu[0].id
                          ),
                          e.append("description", j.description),
                          e.append("name", j.name),
                          e.append("price", j.price),
                          e.append("weight", j.weight),
                          e.append("file", t.files[0]),
                          e.append("rest_id", i),
                          fetch(p.a + "/restaurant/add-item", {
                            method: "POST",
                            body: e,
                          })
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              200 === e.status
                                ? (alert(
                                    "\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"
                                  ),
                                  b())
                                : (alert(
                                    "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"
                                  ),
                                  b());
                            });
                      },
                      style: { marginTop: 20 },
                    },
                    "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                  )
                ),
              l.a.createElement(F.a, null),
              r &&
                r.menu.length &&
                r.menu.map(function (e) {
                  return l.a.createElement(
                    "div",
                    { key: e.id },
                    l.a.createElement(
                      "h3",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                      },
                      e.name,
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(o.a, {
                          placeholder:
                            "\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",
                          value: e.order_by,
                          style: { width: 150 },
                          onChange: function (t) {
                            fetch(
                              p.a +
                                "/restaurant/change-rest-category-order?id="
                                  .concat(e.id, "&value=")
                                  .concat(t.target.value)
                            ).then(function (e) {
                              return b();
                            });
                          },
                        }),
                        l.a.createElement(
                          s.a,
                          {
                            onClick: function () {
                              window.confirm(
                                "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"
                              ) &&
                                fetch(
                                  p.a +
                                    "/restaurant/delete-rest-category?id=".concat(
                                      e.id
                                    )
                                ).then(function (e) {
                                  return b();
                                });
                            },
                          },
                          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        S.a,
                        { defaultActiveKey: [] },
                        l.a.createElement(
                          x,
                          {
                            header:
                              "\u041c\u0435\u043d\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
                            key: "1",
                          },
                          e.menu.map(function (e) {
                            return l.a.createElement(
                              S.a,
                              { key: e.id, defaultActiveKey: [] },
                              l.a.createElement(
                                x,
                                { header: e.name, key: "1" },
                                l.a.createElement(
                                  "div",
                                  { style: { margin: 15 } },
                                  l.a.createElement(
                                    h.a,
                                    null,
                                    l.a.createElement(
                                      "label",
                                      null,
                                      l.a.createElement(
                                        "span",
                                        null,
                                        "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 - ",
                                        e.name
                                      ),
                                      l.a.createElement(o.a, {
                                        placeholder:
                                          "\u041d\u043e\u0432\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                                        onChange: function (t) {
                                          fetch(
                                            p.a +
                                              "/restaurant/change-item?id="
                                                .concat(
                                                  e.id,
                                                  "&key=name&value="
                                                )
                                                .concat(t.target.value)
                                          ).then(function (e) {
                                            return b();
                                          });
                                        },
                                      })
                                    ),
                                    l.a.createElement("img", {
                                      src: p.a + "/" + e.image,
                                      style: { maxWidth: 300 },
                                    }),
                                    l.a.createElement("input", {
                                      type: "file",
                                      onChange: function (t) {
                                        var a = new FormData();
                                        a.append("file", t.target.files[0]),
                                          fetch(
                                            p.a +
                                              "/restaurant/change-item-image?id=".concat(
                                                e.id,
                                                "\n                                                                        "
                                              ),
                                            { method: "POST", body: a }
                                          ).then(function (e) {
                                            return b();
                                          });
                                      },
                                    }),
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(
                                        "label",
                                        null,
                                        l.a.createElement(
                                          "span",
                                          null,
                                          "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 - ",
                                          e.description
                                        ),
                                        l.a.createElement(o.a, {
                                          placeholder:
                                            "\u041d\u043e\u0432\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                                          onChange: function (t) {
                                            fetch(
                                              p.a +
                                                "/restaurant/change-item?id="
                                                  .concat(
                                                    e.id,
                                                    "&key=description&value="
                                                  )
                                                  .concat(t.target.value)
                                            ).then(function (e) {
                                              return b();
                                            });
                                          },
                                        })
                                      )
                                    ),
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(
                                        "label",
                                        null,
                                        l.a.createElement(
                                          "span",
                                          null,
                                          "\xa0\u0412\u0435\u0441 - ",
                                          e.weight,
                                          " \u0433\u0440"
                                        ),
                                        l.a.createElement(o.a, {
                                          placeholder:
                                            "\u041d\u043e\u0432\u044b\u0439 \u0432\u0435\u0441",
                                          onChange: function (t) {
                                            fetch(
                                              p.a +
                                                "/restaurant/change-item?id="
                                                  .concat(
                                                    e.id,
                                                    "&key=weight&value="
                                                  )
                                                  .concat(t.target.value)
                                            ).then(function (e) {
                                              return b();
                                            });
                                          },
                                        })
                                      )
                                    ),
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(
                                        "label",
                                        null,
                                        l.a.createElement(
                                          "span",
                                          null,
                                          "\u0426\u0435\u043d\u0430 - ",
                                          e.price,
                                          " \u0440\u0443\u0431"
                                        ),
                                        l.a.createElement(o.a, {
                                          placeholder:
                                            "\u041d\u043e\u0432\u044b\u0439 \u0432\u0435\u0441",
                                          onChange: function (t) {
                                            fetch(
                                              p.a +
                                                "/restaurant/change-item?id="
                                                  .concat(
                                                    e.id,
                                                    "&key=price&value="
                                                  )
                                                  .concat(t.target.value)
                                            ).then(function (e) {
                                              return b();
                                            });
                                          },
                                        })
                                      )
                                    ),
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(
                                        "label",
                                        null,
                                        l.a.createElement(
                                          "span",
                                          null,
                                          e.active
                                            ? "\u0430\u043a\u0442\u0438\u0432\u043d\u043e"
                                            : "\u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u043e"
                                        ),
                                        l.a.createElement("input", {
                                          type: "checkbox",
                                          checked: e.active,
                                          onChange: function (t) {
                                            fetch(
                                              p.a +
                                                "/restaurant/change-item?id="
                                                  .concat(
                                                    e.id,
                                                    "&key=active&value="
                                                  )
                                                  .concat(
                                                    t.target.checked ? 1 : 0
                                                  )
                                            ).then(function (e) {
                                              return b();
                                            });
                                          },
                                        })
                                      )
                                    ),
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(
                                        "label",
                                        null,
                                        l.a.createElement(
                                          "span",
                                          null,
                                          "\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b"
                                        ),
                                        l.a.createElement(
                                          "select",
                                          {
                                            multiple: !0,
                                            value: e.modificators
                                              ? e.modificators.split(",")
                                              : [],
                                            style: { width: "100%" },
                                            onChange: function (t) {
                                              var a = Object(C.a)(
                                                t.target.options
                                              )
                                                .filter(function (e) {
                                                  return e.selected;
                                                })
                                                .map(function (e) {
                                                  return e.value;
                                                });
                                              fetch(
                                                p.a +
                                                  "/restaurant/change-item?id="
                                                    .concat(
                                                      e.id,
                                                      "&key=modificators&value="
                                                    )
                                                    .concat(a)
                                              ).then(function (e) {
                                                return b();
                                              });
                                            },
                                          },
                                          r.modificators.map(function (e) {
                                            return l.a.createElement(
                                              "option",
                                              { key: e.id, value: e.id },
                                              e.name
                                            );
                                          })
                                        )
                                      )
                                    ),
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(
                                        "label",
                                        null,
                                        l.a.createElement(
                                          "span",
                                          null,
                                          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e "
                                        ),
                                        l.a.createElement(
                                          s.a,
                                          {
                                            onClick: function (t) {
                                              window.confirm(
                                                "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435"
                                              ) &&
                                                fetch(
                                                  p.a +
                                                    "/restaurant/delete-item?id=".concat(
                                                      e.id
                                                    )
                                                ).then(function (e) {
                                                  return b();
                                                });
                                            },
                                          },
                                          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          })
                        )
                      )
                    ),
                    l.a.createElement(F.a, null)
                  );
                })
            )
          );
        },
        T = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "single" }),
            d = Object(u.a)(m, 2),
            E = d[0],
            f = d[1],
            b = function () {
              fetch(p.a + "/restaurant/get-modif-list?restaurant_id=" + i)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  c(e);
                });
            };
          Object(n.useEffect)(function () {
            b();
          }, []);
          var g = function (e) {
            window.confirm(
              "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"
            ) &&
              fetch(p.a + "/restaurant/delete-rest-modif?id=" + e).then(
                function (e) {
                  return b();
                }
              );
          };
          return (
            console.log("data", r),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                null,
                "\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"
              ),
              l.a.createElement(
                v.a,
                { to: { pathname: "restaurant", state: { id: i } } },
                l.a.createElement(
                  s.a,
                  null,
                  "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
                )
              ),
              l.a.createElement(F.a, null),
              l.a.createElement(
                "label",
                null,
                l.a.createElement(
                  "span",
                  null,
                  "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"
                ),
                l.a.createElement(o.a, {
                  onChange: function (e) {
                    return f(
                      Object(k.a)(
                        Object(k.a)({}, E),
                        {},
                        { name: e.target.value }
                      )
                    );
                  },
                })
              ),
              l.a.createElement(
                "label",
                null,
                l.a.createElement("span", null, "\u0422\u0438\u043f"),
                l.a.createElement(
                  "select",
                  {
                    style: { width: "100%", height: 40, marginBottom: 10 },
                    onChange: function (e) {
                      return f(
                        Object(k.a)(
                          Object(k.a)({}, E),
                          {},
                          { type: e.target.value }
                        )
                      );
                    },
                  },
                  l.a.createElement(
                    "option",
                    { value: "single" },
                    "\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"
                  ),
                  l.a.createElement(
                    "option",
                    { value: "multiple" },
                    "\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"
                  )
                )
              ),
              l.a.createElement(
                s.a,
                {
                  onClick: function () {
                    var e = new FormData();
                    e.append("rest_id", i),
                      e.append("name", E.name),
                      e.append("type", E.type),
                      e.append("parent_id", E.parent_id ? E.parent_id : null),
                      fetch(p.a + "/restaurant/create-rest-modif", {
                        method: "POST",
                        body: e,
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          b();
                        });
                  },
                },
                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"
              ),
              l.a.createElement(F.a, null),
              r &&
                r.length &&
                r.map(function (e) {
                  return l.a.createElement(
                    "div",
                    { key: e.id },
                    l.a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                      },
                      l.a.createElement("h3", null, e.name),
                      l.a.createElement(
                        s.a,
                        {
                          onClick: function () {
                            return g(e.id);
                          },
                        },
                        "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                      )
                    ),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      "form",
                      { id: "form" + e.id },
                      l.a.createElement(o.a, {
                        name: "name",
                        placeholder:
                          "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                      }),
                      l.a.createElement(o.a, {
                        name: "price",
                        placeholder: "\u0426\u0435\u043d\u0430",
                      }),
                      l.a.createElement(o.a, {
                        name: "rest_id",
                        type: "hidden",
                        value: i,
                      }),
                      l.a.createElement(o.a, {
                        name: "parent_id",
                        type: "hidden",
                        value: e.id,
                      }),
                      l.a.createElement(
                        s.a,
                        {
                          onClick: function () {
                            var t = new FormData(
                              document.getElementById("form" + e.id)
                            );
                            fetch(
                              p.a + "/restaurant/create-rest-modif-variant",
                              { method: "POST", body: t }
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                b();
                              });
                          },
                        },
                        "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442"
                      )
                    ),
                    l.a.createElement("br", null),
                    e.list.map(function (e) {
                      return l.a.createElement(
                        h.a,
                        { key: e.id },
                        l.a.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            },
                          },
                          l.a.createElement("p", null, e.name),
                          l.a.createElement(
                            "span",
                            null,
                            l.a.createElement(
                              "span",
                              null,
                              e.price,
                              " \u0440\u0443\u0431"
                            ),
                            l.a.createElement(
                              s.a,
                              {
                                onClick: function () {
                                  return g(e.id);
                                },
                                style: { marginLeft: 20 },
                              },
                              "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                            )
                          )
                        )
                      );
                    }),
                    l.a.createElement(F.a, null)
                  );
                })
            )
          );
        },
        P = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "single" }),
            d = Object(u.a)(m, 2),
            E = d[0],
            f = d[1],
            h = function () {
              fetch(p.a + "/restaurant/get-delivery-list?restaurant_id=" + i)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  c(e);
                });
            };
          Object(n.useEffect)(function () {
            h();
          }, []);
          return (
            console.log("data", r),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                null,
                "\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"
              ),
              l.a.createElement(
                v.a,
                { to: { pathname: "restaurant", state: { id: i } } },
                l.a.createElement(
                  s.a,
                  null,
                  "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
                )
              ),
              l.a.createElement(F.a, null),
              l.a.createElement(
                "label",
                null,
                l.a.createElement(
                  "span",
                  null,
                  "\u0417\u0430\u043a\u0430\u0437 \u043e\u0442"
                ),
                l.a.createElement(o.a, {
                  onChange: function (e) {
                    return f(
                      Object(k.a)(
                        Object(k.a)({}, E),
                        {},
                        { price_start: e.target.value }
                      )
                    );
                  },
                })
              ),
              l.a.createElement(
                "label",
                null,
                l.a.createElement(
                  "span",
                  null,
                  "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 "
                ),
                l.a.createElement(o.a, {
                  onChange: function (e) {
                    return f(
                      Object(k.a)(
                        Object(k.a)({}, E),
                        {},
                        { price: e.target.value }
                      )
                    );
                  },
                })
              ),
              l.a.createElement(
                s.a,
                {
                  onClick: function () {
                    var e = new FormData();
                    e.append("rest_id", i),
                      e.append("price", E.price),
                      e.append("price_start", E.price_start),
                      fetch(p.a + "/restaurant/create-rest-delivery", {
                        method: "POST",
                        body: e,
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          h();
                        });
                  },
                },
                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"
              ),
              l.a.createElement(F.a, null),
              r &&
                r.length &&
                r.map(function (e) {
                  return l.a.createElement(
                    "div",
                    { key: e.id },
                    l.a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                      },
                      l.a.createElement(
                        "label",
                        { style: { flex: 1 } },
                        l.a.createElement(
                          "span",
                          null,
                          "\u0417\u0430\u043a\u0430\u0437 \u043e\u0442"
                        ),
                        l.a.createElement(o.a, {
                          value: e.price_start,
                          onChange: function (t) {
                            fetch(
                              p.a +
                                "/restaurant/edit-delivery?id="
                                  .concat(e.id, "&key=price_start&value=")
                                  .concat(t.target.value)
                            ).then(function (e) {
                              return h();
                            });
                          },
                        })
                      ),
                      l.a.createElement(
                        "label",
                        { style: { flex: 1, padding: 20 } },
                        l.a.createElement(
                          "span",
                          null,
                          "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"
                        ),
                        l.a.createElement(o.a, {
                          value: e.price,
                          onChange: function (t) {
                            fetch(
                              p.a +
                                "/restaurant/edit-delivery?id="
                                  .concat(e.id, "&key=price&value=")
                                  .concat(t.target.value)
                            ).then(function (e) {
                              return h();
                            });
                          },
                        })
                      ),
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement("br", null),
                        l.a.createElement(
                          s.a,
                          {
                            onClick: function () {
                              window.confirm(
                                "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435"
                              ) &&
                                fetch(
                                  p.a +
                                    "/restaurant/delete-delivery?id=".concat(
                                      e.id
                                    )
                                ).then(function (e) {
                                  return h();
                                });
                            },
                          },
                          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                        )
                      )
                    ),
                    l.a.createElement(F.a, null)
                  );
                })
            )
          );
        },
        D = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "promocode" }),
            d = Object(u.a)(m, 2),
            E = d[0],
            f = d[1],
            h = Object(n.useState)([]),
            b = Object(u.a)(h, 2),
            g = b[0],
            y = b[1],
            j = [
              {
                value: "promocode",
                name: "\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434",
              },
              {
                value: "hours",
                name:
                  "\u0421\u043a\u0438\u0434\u043a\u0430 \u0432 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0435 \u0447\u0430\u0441\u044b",
              },
              {
                value: "one_plus_one",
                name: "\u0421\u043a\u0438\u0434\u043a\u0430 1 + 1",
              },
            ],
            O = function () {
              fetch(p.a + "/restaurant/get-discount-list?restaurant_id=" + i)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  c(e);
                });
            };
          Object(n.useEffect)(function () {
            O();
            var e = new FormData();
            e.append("rest_id", i),
              fetch(p.a + "/restaurant/get-menu", { method: "POST", body: e })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return y(e.menu);
                });
          }, []);
          console.log("data", r),
            console.log("newModif", E),
            console.log("menu", g);
          var _ = function (e, t) {
              var a = t;
              return l.a.createElement(
                "label",
                null,
                l.a.createElement("span", null, e),
                l.a.createElement(o.a, {
                  onChange: function (e) {
                    var t = Object(k.a)({}, E);
                    (t[a] = e.target.value), f(Object(k.a)({}, t));
                  },
                })
              );
            },
            w = function (e, t, a, n) {
              return l.a.createElement(
                "label",
                null,
                l.a.createElement("span", null, t),
                l.a.createElement(o.a, {
                  value: n,
                  onChange: function (t) {
                    fetch(
                      p.a +
                        "/restaurant/edit-discount?id="
                          .concat(e, "&key=")
                          .concat(a, "&value=")
                          .concat(t.target.value)
                    ).then(function (e) {
                      return O();
                    });
                  },
                })
              );
            };
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              null,
              "\u0421\u043a\u0438\u0434\u043a\u0438, \u0430\u043a\u0446\u0438\u0438 \u0438 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\u044b"
            ),
            l.a.createElement(
              v.a,
              { to: { pathname: "restaurant", state: { id: i } } },
              l.a.createElement(
                s.a,
                null,
                "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
              )
            ),
            l.a.createElement(F.a, null),
            l.a.createElement(
              "label",
              null,
              l.a.createElement(
                "span",
                null,
                "\u0422\u0438\u043f \u0441\u043a\u0438\u0434\u043a\u0438"
              ),
              l.a.createElement(
                "select",
                {
                  style: { width: "100%", height: 40 },
                  onChange: function (e) {
                    f(
                      Object(k.a)(
                        Object(k.a)({}, E),
                        {},
                        { type: e.target.value }
                      )
                    );
                  },
                },
                j.map(function (e) {
                  return l.a.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.name
                  );
                })
              )
            ),
            l.a.createElement("br", null),
            _("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435", "name"),
            l.a.createElement("br", null),
            _(
              "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
              "description"
            ),
            l.a.createElement("br", null),
            _("\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434", "promocode"),
            l.a.createElement("br", null),
            _(
              "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043a\u0438\u0434\u043a\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 300 \u0440 \u0438\u043b\u0438 20 %  - \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b)",
              "discount_value"
            ),
            l.a.createElement("br", null),
            _(
              "\u0417\u0430\u043a\u0430\u0437 \u043e\u0442 (\u0440)",
              "price_start"
            ),
            l.a.createElement("br", null),
            _(
              "\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0447\u0447:\u043c\u043c)",
              "time_start"
            ),
            l.a.createElement("br", null),
            _(
              "\u0412\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0447\u0447:\u043c\u043c)",
              "time_end"
            ),
            l.a.createElement("br", null),
            l.a.createElement(
              "label",
              null,
              l.a.createElement(
                "span",
                null,
                "\u041d\u0430 \u043a\u0430\u043a\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f"
              ),
              l.a.createElement(
                "select",
                {
                  multiple: !0,
                  style: { width: "100%" },
                  onChange: function (e) {
                    var t = Object(C.a)(e.target.options)
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return e.value;
                      });
                    f(Object(k.a)(Object(k.a)({}, E), {}, { items: t }));
                  },
                },
                g.map(function (e) {
                  return l.a.createElement(
                    "optgroup",
                    { label: e.name },
                    e.menu.map(function (e) {
                      return l.a.createElement(
                        "option",
                        { value: e.id },
                        e.name
                      );
                    })
                  );
                })
              )
            ),
            l.a.createElement("br", null),
            l.a.createElement("br", null),
            l.a.createElement(
              s.a,
              {
                onClick: function () {
                  var e = new FormData();
                  e.append("rest_id", i),
                    e.append("type", E.type ? E.type : ""),
                    e.append("name", E.name ? E.name : ""),
                    e.append(
                      "discount_value",
                      E.discount_value ? E.discount_value : ""
                    ),
                    e.append("price_start", E.price_start ? E.price_start : ""),
                    e.append("description", E.description ? E.description : ""),
                    e.append("promocode", E.promocode ? E.promocode : ""),
                    e.append("time_start", E.time_start ? E.time_start : ""),
                    e.append("time_end", E.time_end ? E.time_end : ""),
                    e.append("items", E.items ? E.items : ""),
                    fetch(p.a + "/restaurant/create-rest-discount", {
                      method: "POST",
                      body: e,
                    })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        O();
                      });
                },
              },
              "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u043a\u0446\u0438\u044e"
            ),
            l.a.createElement(F.a, null),
            l.a.createElement(
              "h3",
              null,
              "\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u043a\u0446\u0438\u0439"
            ),
            r &&
              r.length &&
              r.map(function (e) {
                return l.a.createElement(
                  "div",
                  { key: e.id },
                  l.a.createElement(
                    "select",
                    {
                      style: { width: "100%", height: 40 },
                      onChange: function (t) {
                        fetch(
                          p.a +
                            "/restaurant/edit-discount?id="
                              .concat(e.id, "&key=type&value=")
                              .concat(t.target.value)
                        ).then(function (e) {
                          return O();
                        });
                      },
                      value: e.type,
                    },
                    j.map(function (e) {
                      return l.a.createElement(
                        "option",
                        { key: e.value, value: e.value },
                        e.name
                      );
                    })
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                    "name",
                    e.name
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                    "description",
                    e.description
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434",
                    "promocode",
                    e.promocode
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043a\u0438\u0434\u043a\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 300 \u0440 \u0438\u043b\u0438 20 %  - \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b)",
                    "discount_value",
                    e.discount_value
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u0417\u0430\u043a\u0430\u0437 \u043e\u0442 (\u0440)",
                    "price_start",
                    e.price_start
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0447\u0447:\u043c\u043c)",
                    "time_start",
                    e.time_start
                  ),
                  l.a.createElement("br", null),
                  w(
                    e.id,
                    "\u0412\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0447\u0447:\u043c\u043c)",
                    "time_end",
                    e.time_end
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "label",
                    null,
                    l.a.createElement(
                      "span",
                      null,
                      "\u041d\u0430 \u043a\u0430\u043a\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f"
                    ),
                    l.a.createElement(
                      "select",
                      {
                        multiple: !0,
                        style: { width: "100%" },
                        value: e.items ? e.items.split(",") : [],
                        onChange: function (t) {
                          var a = Object(C.a)(t.target.options)
                            .filter(function (e) {
                              return e.selected;
                            })
                            .map(function (e) {
                              return e.value;
                            });
                          fetch(
                            p.a +
                              "/restaurant/edit-discount?id="
                                .concat(e.id, "&key=items&value=")
                                .concat(a)
                          ).then(function (e) {
                            return O();
                          });
                        },
                      },
                      g.map(function (e) {
                        return l.a.createElement(
                          "optgroup",
                          { label: e.name },
                          e.menu.map(function (e) {
                            return l.a.createElement(
                              "option",
                              { value: e.id },
                              e.name
                            );
                          })
                        );
                      })
                    )
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    s.a,
                    {
                      onClick: function () {
                        window.confirm(
                          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435"
                        ) &&
                          fetch(
                            p.a + "/restaurant/delete-discount?id=".concat(e.id)
                          ).then(function (e) {
                            return O();
                          });
                      },
                    },
                    "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u0446\u0438\u044e"
                  ),
                  l.a.createElement(F.a, null)
                );
              })
          );
        },
        N = function () {
          return n.createElement(
            n.Fragment,
            null,
            Object(r.a)([
              { path: "/", exact: !0, component: c },
              { path: "/add-rest", component: f },
              { path: "/list-rest", component: j },
              { path: "/restaurant", component: w },
              { path: "/restaurant-menu", component: I },
              { path: "/restaurant-modif", component: T },
              { path: "/restaurant-delivery", component: P },
              { path: "/restaurant-discount", component: D },
            ])
          );
        };
    },
    156: function (e, t, a) {
      e.exports = a(157);
    },
    157: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(9),
        c = a.n(r),
        u = a(29),
        i = a(60),
        o = a(126),
        m = a(4),
        s = a(129),
        d = document.querySelector("#root");
      d &&
        c.a.render(
          l.a.createElement(
            i.a,
            { store: m.d },
            l.a.createElement(
              o.a,
              { loading: null, persistor: m.c },
              l.a.createElement(
                u.b,
                { history: m.b },
                l.a.createElement(s.a, null)
              )
            )
          ),
          d
        );
    },
    4: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "d", function () {
          return f;
        }),
        a.d(t, "c", function () {
          return h;
        }),
        a.d(t, "a", function () {
          return b;
        });
      a(76);
      var n,
        l = a(35),
        r = Object(l.a)(),
        c = a(44),
        u = (a(165), a(127)),
        i = a(99),
        o = a(128),
        m = a.n(o),
        s = a(5),
        d = { user: void 0 },
        p = { key: "main", storage: m.a },
        E = Object(c.c)({
          main: Object(i.a)(p, function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : d,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_USER":
                return Object(s.a)(Object(s.a)({}, e), {}, { user: t.user });
              default:
                return Object(s.a)({}, e);
            }
          }),
        });
      n = Object(c.a)(u.a);
      var f = Object(c.d)(E, void 0, n),
        h = Object(i.b)(f),
        b = (a(60), "https://app.vegfood.delivery");
    },
    76: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = {
        black: "#333",
        red: "#cc3333",
        gray: "rgb(113, 113, 113)",
        light_gray: "#F2F2F2",
      };
    },
  },
  [[156, 1, 2]],
]);
//# sourceMappingURL=main.c67785f7.chunk.js.map
