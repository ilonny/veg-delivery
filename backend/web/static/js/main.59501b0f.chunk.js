(this["webpackJsonpreact-app"] = this["webpackJsonpreact-app"] || []).push([
  [0],
  {
    116: function (e, t, a) {
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
    177: function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "a", function () {
          return O;
        });
        var n = a(0),
          l = a.n(n),
          r = a(92),
          c = a(208),
          u = a(178),
          i = a(210),
          o = a(206),
          m = (a(363), a(56)),
          s = a(84),
          d = a(148),
          E = a(217),
          p = a(53),
          f = a(30),
          h = a(5),
          b = m.a.SubMenu,
          v = s.a.Header,
          g = s.a.Content,
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
                      l.a.createElement(E.a, { type: "text" })
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
                      l.a.createElement(E.a, { type: "password" })
                    ),
                    l.a.createElement(
                      p.a,
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
                l.a.createElement(s.a, null, l.a.createElement(v, null)),
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
                    g,
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
      }.call(this, a(150)(e)));
    },
    206: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var n = a(207),
        l = a(140),
        r = a(116);
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
    210: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return q;
      });
      var n = a(0),
        l = a.n(n),
        r = a(205),
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
        u = a(22),
        i = a(148),
        o = a(217),
        m = a(110),
        s = a(53),
        d = a(369),
        E = (a(151), a(5)),
        p = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
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
                      fetch(E.a + "/restaurant/add", {
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
                p
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
                    "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
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
        h = a(367),
        b = a(97),
        v = a(57),
        g = a(30),
        y = h.a.Meta,
        j = function () {
          var e = Object(n.useState)([]),
            t = Object(u.a)(e, 2),
            a = t[0],
            r = t[1];
          return (
            Object(n.useEffect)(function () {
              try {
                fetch(E.a + "/restaurant/list?token=ZWmGuABp3N6")
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
                        g.a,
                        {
                          to: { pathname: "/restaurant", state: { id: e.id } },
                          key: e.id,
                        },
                        l.a.createElement(
                          v.a,
                          { className: "gutter-row", span: 6 },
                          l.a.createElement(
                            h.a,
                            {
                              hoverable: !0,
                              style: { width: 240 },
                              cover: l.a.createElement("img", {
                                alt: "",
                                src: E.a + "/" + e.image,
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
      var k = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)(!1),
            p = Object(u.a)(m, 2),
            f = p[0],
            y = p[1],
            j = Object(n.useState)(!1),
            k = Object(u.a)(j, 2),
            C = k[0],
            w = k[1],
            S = Object(n.useState)(!1),
            F = Object(u.a)(S, 2),
            I = F[0],
            x = F[1],
            P = Object(n.useState)(!1),
            T = Object(u.a)(P, 2),
            D = T[0],
            N = T[1],
            J = Object(n.useState)(!1),
            q = Object(u.a)(J, 2),
            M = q[0],
            A = q[1],
            L = Object(n.useState)(!1),
            U = Object(u.a)(L, 2),
            H = U[0],
            K = U[1];
          Object(n.useEffect)(
            function () {
              z();
            },
            [i]
          );
          var R,
            z = function () {
              try {
                fetch(E.a + "/restaurant/get-data?id=" + i)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    c(e),
                      y(e.time_start),
                      w(e.time_end),
                      x(e.restaurant_info),
                      N(e.delivery_time),
                      A(e.name);
                    var t = JSON.parse(
                      null === e || void 0 === e ? void 0 : e.address_json
                    );
                    console.log("addressJson", t), K(t);
                  });
              } catch (e) {
                console.log(e);
              }
            };
          try {
            R = JSON.parse(r.address_json).value;
          } catch (B) {
            R =
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
                v.a,
                { className: "gutter-row", span: 10 },
                l.a.createElement(
                  h.a,
                  {
                    hoverable: !0,
                    style: { width: "100%" },
                    cover: l.a.createElement("img", {
                      alt: "",
                      src: E.a + "/" + r.image,
                    }),
                  },
                  l.a.createElement(O, {
                    title: r.name,
                    description: r.description,
                  }),
                  l.a.createElement("p", null, R),
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
                v.a,
                { className: "gutter-row", span: 10 },
                l.a.createElement(
                  g.a,
                  { to: { pathname: "restaurant-order", state: { id: i } } },
                  l.a.createElement(
                    s.a,
                    null,
                    "\u0417\u0430\u043a\u0430\u0437\u044b"
                  )
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  g.a,
                  { to: { pathname: "restaurant-menu", state: { id: i } } },
                  l.a.createElement(s.a, null, "\u041c\u0435\u043d\u044e")
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  g.a,
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
                    "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"
                  ),
                  l.a.createElement(o.a, {
                    value: M,
                    onChange: function (e) {
                      A(e.target.value);
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement(
                  s.a,
                  {
                    onClick: function () {
                      fetch(
                        E.a +
                          "/restaurant/edit-rest-name?id="
                            .concat(r.id, "&value=")
                            .concat(M)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            z();
                        });
                    },
                  },
                  "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  "label",
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    "\u0410\u0434\u0440\u0435\u0441"
                  ),
                  l.a.createElement(d.a, {
                    token: "eadbc452286d23c7163b38989884d5ae40d08ade",
                    value: H,
                    defaultQuery: H,
                    onChange: K,
                  }),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    s.a,
                    {
                      onClick: function () {
                        fetch(
                          E.a +
                            "/restaurant/edit-rest-address?id="
                              .concat(r.id, "&value=")
                              .concat(encodeURIComponent(JSON.stringify(H)))
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            200 === e.status &&
                              alert(
                                "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                              ),
                              z();
                          });
                      },
                    },
                    "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441"
                  ),
                  l.a.createElement("br", null)
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
                        E.a +
                          "/restaurant/edit-rest-radius?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return z();
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
                    "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"
                  ),
                  l.a.createElement(o.a, {
                    type: "file",
                    onChange: function () {
                      var e = document.querySelector('input[type="file"]'),
                        t = new FormData();
                      t.append("file", e.files[0]),
                        fetch(
                          E.a + "/restaurant/edit-rest-image?id=".concat(r.id),
                          { method: "POST", body: t }
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            200 === e.status
                              ? z()
                              : alert(
                                  "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"
                                );
                          })
                          .catch(function (e) {
                            alert(
                              "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"
                            );
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
                        E.a +
                          "/restaurant/edit-rest-desc?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return z();
                      });
                    }, 1e3),
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  g.a,
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
                    value: f,
                    onChange: function (e) {
                      return y(e.target.value);
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
                    value: C,
                    onChange: function (e) {
                      return w(e.target.value);
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement(
                  s.a,
                  {
                    onClick: function () {
                      fetch(
                        E.a +
                          "/restaurant/edit-rest-time?id="
                            .concat(r.id, "&start=")
                            .concat(f, "&end=")
                            .concat(C)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            z();
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
                    '\u0421\u0440\u043e\u043a\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 "40-50 \u043c\u0438\u043d")'
                  ),
                  l.a.createElement(o.a, {
                    value: D,
                    onChange: function (e) {
                      return N(e.target.value);
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement(
                  s.a,
                  {
                    onClick: function () {
                      fetch(
                        E.a +
                          "/restaurant/edit-rest-deliverytime?id="
                            .concat(r.id, "&time=")
                            .concat(D)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            z();
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
                        E.a +
                          "/restaurant/edit-rest-min-price?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return z();
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
                    value: I,
                    onChange: function (e) {
                      return x(e.target.value);
                    },
                  }),
                  l.a.createElement(
                    s.a,
                    {
                      onClick: function () {
                        fetch(
                          E.a +
                            "/restaurant/edit-rest-info?id="
                              .concat(r.id, "&value=")
                              .concat(I)
                        ).then(function (e) {
                          return z();
                        });
                      },
                    },
                    "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                  )
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  s.a,
                  {
                    onClick: function () {
                      fetch(
                        E.a +
                          "/restaurant/edit-rest-active?id="
                            .concat(r.id, "&value=")
                            .concat("1" == r.active ? 0 : 1)
                      ).then(function (e) {
                        return z();
                      });
                    },
                  },
                  "\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d ",
                  "1" == r.active
                    ? "\u043e\u0442\u043a\u0440\u044b\u0442"
                    : "\u0437\u0430\u043a\u0440\u044b\u0442",
                  " (\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b",
                  " ",
                  "1" == r.active
                    ? "\u0437\u0430\u043a\u0440\u044b\u0442\u044c"
                    : "\u043e\u0442\u043a\u0440\u044b\u0442\u044c",
                  ")"
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  g.a,
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
                          E.a +
                            "/restaurant/change-rest-image?id=".concat(r.id),
                          { method: "POST", body: t }
                        ).then(function (e) {
                          return z();
                        });
                    },
                  })
                )
              )
            )
          );
        },
        C = a(108),
        w = a(11),
        S = a(368),
        F = a(365),
        I = S.a.Panel,
        x = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1];
          console.log("data is", r);
          var i = e.location.state.id,
            m = Object(n.useState)(!1),
            d = Object(u.a)(m, 2),
            p = d[0],
            f = d[1],
            b = function () {
              var e = new FormData();
              e.append("rest_id", i),
                fetch(E.a + "/restaurant/get-menu", { method: "POST", body: e })
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
          var v = Object(n.useState)(!1),
            y = Object(u.a)(v, 2),
            j = y[0],
            O = y[1];
          return (
            console.log("newItem", j),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                g.a,
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
                      e.append("category_name", p),
                      fetch(E.a + "/restaurant/create-category-menu", {
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
                            Object(w.a)(
                              Object(w.a)({}, j),
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
                          Object(w.a)(
                            Object(w.a)({}, j),
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
                          Object(w.a)(
                            Object(w.a)({}, j),
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
                          Object(w.a)(
                            Object(w.a)({}, j),
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
                          Object(w.a)(
                            Object(w.a)({}, j),
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
                          Object(w.a)(
                            Object(w.a)({}, j),
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
                              Object(w.a)(
                                Object(w.a)({}, j),
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
                          fetch(E.a + "/restaurant/add-item", {
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
                              E.a +
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
                                  E.a +
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
                          I,
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
                                I,
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
                                            E.a +
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
                                      src: E.a + "/" + e.image,
                                      style: { maxWidth: 300 },
                                    }),
                                    l.a.createElement("input", {
                                      type: "file",
                                      onChange: function (t) {
                                        var a = new FormData();
                                        a.append("file", t.target.files[0]),
                                          fetch(
                                            E.a +
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
                                              E.a +
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
                                              E.a +
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
                                              E.a +
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
                                              E.a +
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
                                                E.a +
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
                                                  E.a +
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
        P = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "single" }),
            d = Object(u.a)(m, 2),
            p = d[0],
            f = d[1],
            b = function () {
              fetch(E.a + "/restaurant/get-modif-list?restaurant_id=" + i)
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
          var v = function (e) {
            window.confirm(
              "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"
            ) &&
              fetch(E.a + "/restaurant/delete-rest-modif?id=" + e).then(
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
                g.a,
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
                      Object(w.a)(
                        Object(w.a)({}, p),
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
                        Object(w.a)(
                          Object(w.a)({}, p),
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
                      e.append("name", p.name),
                      e.append("type", p.type),
                      e.append("parent_id", p.parent_id ? p.parent_id : null),
                      fetch(E.a + "/restaurant/create-rest-modif", {
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
                            return v(e.id);
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
                              E.a + "/restaurant/create-rest-modif-variant",
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
                                  return v(e.id);
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
        T = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "single" }),
            d = Object(u.a)(m, 2),
            p = d[0],
            f = d[1],
            h = function () {
              fetch(E.a + "/restaurant/get-delivery-list?restaurant_id=" + i)
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
                g.a,
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
                      Object(w.a)(
                        Object(w.a)({}, p),
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
                      Object(w.a)(
                        Object(w.a)({}, p),
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
                      e.append("price", p.price),
                      e.append("price_start", p.price_start),
                      fetch(E.a + "/restaurant/create-rest-delivery", {
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
                              E.a +
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
                              E.a +
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
                                  E.a +
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
            p = d[0],
            f = d[1],
            h = Object(n.useState)([]),
            b = Object(u.a)(h, 2),
            v = b[0],
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
              fetch(E.a + "/restaurant/get-discount-list?restaurant_id=" + i)
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
              fetch(E.a + "/restaurant/get-menu", { method: "POST", body: e })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return y(e.menu);
                });
          }, []);
          console.log("data", r),
            console.log("newModif", p),
            console.log("menu", v);
          var _ = function (e, t) {
              var a = t;
              return l.a.createElement(
                "label",
                null,
                l.a.createElement("span", null, e),
                l.a.createElement(o.a, {
                  onChange: function (e) {
                    var t = Object(w.a)({}, p);
                    (t[a] = e.target.value), f(Object(w.a)({}, t));
                  },
                })
              );
            },
            k = function (e, t, a, n) {
              return l.a.createElement(
                "label",
                null,
                l.a.createElement("span", null, t),
                l.a.createElement(o.a, {
                  value: n,
                  onChange: function (t) {
                    fetch(
                      E.a +
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
              g.a,
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
                      Object(w.a)(
                        Object(w.a)({}, p),
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
                    f(Object(w.a)(Object(w.a)({}, p), {}, { items: t }));
                  },
                },
                v.map(function (e) {
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
                    e.append("type", p.type ? p.type : ""),
                    e.append("name", p.name ? p.name : ""),
                    e.append(
                      "discount_value",
                      p.discount_value ? p.discount_value : ""
                    ),
                    e.append("price_start", p.price_start ? p.price_start : ""),
                    e.append("description", p.description ? p.description : ""),
                    e.append("promocode", p.promocode ? p.promocode : ""),
                    e.append("time_start", p.time_start ? p.time_start : ""),
                    e.append("time_end", p.time_end ? p.time_end : ""),
                    e.append("items", p.items ? p.items : ""),
                    fetch(E.a + "/restaurant/create-rest-discount", {
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
                          E.a +
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
                  k(
                    e.id,
                    "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                    "name",
                    e.name
                  ),
                  l.a.createElement("br", null),
                  k(
                    e.id,
                    "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                    "description",
                    e.description
                  ),
                  l.a.createElement("br", null),
                  k(
                    e.id,
                    "\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434",
                    "promocode",
                    e.promocode
                  ),
                  l.a.createElement("br", null),
                  k(
                    e.id,
                    "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043a\u0438\u0434\u043a\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 300 \u0440 \u0438\u043b\u0438 20 %  - \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b)",
                    "discount_value",
                    e.discount_value
                  ),
                  l.a.createElement("br", null),
                  k(
                    e.id,
                    "\u0417\u0430\u043a\u0430\u0437 \u043e\u0442 (\u0440)",
                    "price_start",
                    e.price_start
                  ),
                  l.a.createElement("br", null),
                  k(
                    e.id,
                    "\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0447\u0447:\u043c\u043c)",
                    "time_start",
                    e.time_start
                  ),
                  l.a.createElement("br", null),
                  k(
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
                            E.a +
                              "/restaurant/edit-discount?id="
                                .concat(e.id, "&key=items&value=")
                                .concat(a)
                          ).then(function (e) {
                            return O();
                          });
                        },
                      },
                      v.map(function (e) {
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
                            E.a + "/restaurant/delete-discount?id=".concat(e.id)
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
        N = a(366),
        J = function (e) {
          var t = Object(n.useState)([]),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            o = Object(n.useState)({ type: "single" }),
            m = Object(u.a)(o, 2),
            d = (m[0], m[1], Object(n.useState)(!1)),
            p = Object(u.a)(d, 2),
            f = p[0],
            h = p[1],
            b = function () {
              h(!0),
                fetch(E.a + "/restaurant/get-order-list?restaurant_id=" + i)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    h(!1), c(e);
                  });
            };
          Object(n.useEffect)(function () {
            b();
          }, []),
            console.log("data", r);
          var v = r.map(function (e) {
            var t = JSON.parse(e.user_info),
              a = JSON.parse(e.address_data),
              n = JSON.parse(e.cart_list);
            return {
              id: e.id,
              user: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "
                .concat(t.phone, "\n", " \u0418\u043c\u044f: ")
                .concat(
                  t.name,
                  " \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: "
                )
                .concat(t.comment, " "),
              address: ""
                .concat(
                  a.value,
                  " \u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430: "
                )
                .concat(
                  null === t || void 0 === t ? void 0 : t.flat,
                  " \u041f\u043e\u0434\u044a\u0435\u0437\u0434: "
                )
                .concat(
                  null === t || void 0 === t ? void 0 : t.flat_p,
                  " \u042d\u0442\u0430\u0436: "
                )
                .concat(null === t || void 0 === t ? void 0 : t.floor),
              cartList:
                null === n || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      return l.a.createElement(
                        "p",
                        null,
                        e.name,
                        " - ",
                        e.count,
                        " \u0448\u0442",
                        !!e.selectedModificatorsAll &&
                          !!e.selectedModificatorsAll.length &&
                          !!Object.keys(e.selectedModificatorsAll[0]).length &&
                          l.a.createElement(
                            "p",
                            null,
                            l.a.createElement(
                              "span",
                              null,
                              "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e:"
                            ),
                            e.selectedModificatorsAll.map(function (e, t) {
                              var a = e[Object.keys(e)[0]];
                              return a && a.name
                                ? l.a.createElement(
                                    "p",
                                    { style: { paddingLeft: 10 }, key: t },
                                    l.a.createElement("span", null, a.name),
                                    a.chosen_variants.map(function (e, t) {
                                      return l.a.createElement(
                                        "p",
                                        {
                                          key: t,
                                          style: {
                                            paddingLeft: 10,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          },
                                        },
                                        l.a.createElement("span", null, e.name),
                                        l.a.createElement(
                                          "span",
                                          null,
                                          e.price,
                                          " \u0440\u0443\u0431"
                                        )
                                      );
                                    })
                                  )
                                : l.a.createElement(l.a.Fragment, null);
                            })
                          ),
                        l.a.createElement(F.a, null)
                      );
                    }),
              totalPrice: e.total_price,
              deliveryPrice: e.delivery_price,
              date: e.date_create,
              payment_status:
                "success" == e.payment_status
                  ? "\u041e\u043f\u043b\u0430\u0447\u0435\u043d"
                  : "\u041e\u0442\u043c\u0435\u043d\u0435\u043d",
              cancel_payment: l.a.createElement(
                s.a,
                {
                  onClick: function () {
                    window.confirm(
                      "\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u043b\u0430\u0442\u0443 \u0437\u0430\u043a\u0437\u0430\u0430 ".concat(
                        e.id,
                        "?"
                      )
                    ) &&
                      fetch(
                        "".concat(E.a, "/payment/cancel?order_id=").concat(e.id)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          console.log("cancel payment response", e),
                            e.Success
                              ? alert(
                                  "\u041e\u043f\u043b\u0430\u0442\u0430 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u0430."
                                )
                              : alert(
                                  "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u043b\u0430\u0442\u0443. " +
                                    e.Message +
                                    " " +
                                    e.Details
                                );
                        });
                  },
                },
                "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u043b\u0430\u0442\u0443"
              ),
            };
          });
          Object(n.useEffect)(function () {
            var e = setInterval(function () {
              b();
            }, 1e4);
            return function () {
              return clearInterval(e);
            };
          }, []);
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              null,
              "\u0417\u0430\u043a\u0430\u0437\u044b \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"
            ),
            l.a.createElement(
              g.a,
              { to: { pathname: "restaurant", state: { id: i } } },
              l.a.createElement(
                s.a,
                null,
                "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
              )
            ),
            l.a.createElement(F.a, null),
            l.a.createElement(
              s.a,
              {
                onClick: function () {
                  return b();
                },
              },
              "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"
            ),
            l.a.createElement(F.a, null),
            f &&
              l.a.createElement(
                "p",
                null,
                " \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ... "
              ),
            l.a.createElement(F.a, null),
            l.a.createElement(N.a, {
              dataSource: v,
              columns: [
                {
                  title:
                    "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u043b\u0430\u0442\u0443",
                  dataIndex: "cancel_payment",
                  key: "cancel_payment",
                },
                {
                  title: "\u041d\u043e\u043c\u0435\u0440",
                  dataIndex: "id",
                  key: "id",
                },
                {
                  title: "\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a",
                  dataIndex: "user",
                  key: "user",
                },
                {
                  title: "\u0410\u0434\u0440\u0435\u0441",
                  dataIndex: "address",
                  key: "address",
                },
                {
                  title: "\u041a\u043e\u0440\u0437\u0438\u043d\u0430",
                  dataIndex: "cartList",
                  key: "cartList",
                },
                {
                  title:
                    "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430",
                  dataIndex: "totalPrice",
                  key: "totalPrice",
                },
                {
                  title:
                    "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",
                  dataIndex: "deliveryPrice",
                  key: "deliveryPrice",
                },
                {
                  title: "\u0414\u0430\u0442\u0430",
                  dataIndex: "date",
                  key: "date",
                },
                {
                  title: "\u0414\u0430\u0442\u0430",
                  dataIndex: "date",
                  key: "date",
                },
                {
                  title:
                    "\u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u043f\u043b\u0430\u0442\u044b",
                  dataIndex: "payment_status",
                  key: "payment_status",
                },
              ],
            }),
            ";"
          );
        },
        q = function () {
          return n.createElement(
            n.Fragment,
            null,
            Object(r.a)([
              { path: "/", exact: !0, component: c },
              { path: "/add-rest", component: f },
              { path: "/list-rest", component: j },
              { path: "/restaurant", component: k },
              { path: "/restaurant-menu", component: x },
              { path: "/restaurant-modif", component: P },
              { path: "/restaurant-delivery", component: T },
              { path: "/restaurant-discount", component: D },
              { path: "/restaurant-order", component: J },
            ])
          );
        };
    },
    220: function (e, t, a) {
      e.exports = a(221);
    },
    221: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(17),
        c = a.n(r),
        u = a(42),
        i = a(92),
        o = a(174),
        m = a(5),
        s = a(177),
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
    5: function (e, t, a) {
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
      a(116);
      var n,
        l = a(45),
        r = Object(l.a)(),
        c = a(63),
        u = (a(229), a(175)),
        i = a(146),
        o = a(176),
        m = a.n(o),
        s = a(11),
        d = { user: void 0 },
        E = { key: "main", storage: m.a },
        p = Object(c.c)({
          main: Object(i.a)(E, function () {
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
      var f = Object(c.d)(p, void 0, n),
        h = Object(i.b)(f),
        b = (a(92), "https://app.vegfood.delivery");
    },
  },
  [[220, 1, 2]],
]);
//# sourceMappingURL=main.59501b0f.chunk.js.map