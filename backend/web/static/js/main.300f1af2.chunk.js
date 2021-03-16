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
    178: function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "a", function () {
          return O;
        });
        var n = a(0),
          l = a.n(n),
          r = a(92),
          c = a(209),
          u = a(179),
          i = a(210),
          o = a(207),
          m = (a(363), a(49)),
          s = a(84),
          d = a(149),
          p = a(218),
          f = a(54),
          E = a(28),
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
            var t = e.user,
              a = e.setUser;
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
                      f.a,
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
                            E.a,
                            {
                              to: {
                                pathname: "/list-rest",
                                state: { user: t },
                              },
                            },
                            "\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"
                          )
                        ),
                        "manager" != t.role &&
                          l.a.createElement(
                            m.a.Item,
                            { key: "2" },
                            l.a.createElement(
                              E.a,
                              {
                                to: {
                                  pathname: "/add-rest",
                                  state: { user: t },
                                },
                              },
                              "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d 123"
                            )
                          )
                      ),
                      "admin" === t.role &&
                        l.a.createElement(
                          m.a.Item,
                          { key: "3" },
                          l.a.createElement(
                            E.a,
                            { to: "/add-user" },
                            "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430"
                          )
                        ),
                      l.a.createElement(
                        m.a.Item,
                        { key: "4" },
                        l.a.createElement(
                          "button",
                          {
                            style: { width: "100%", height: "100%" },
                            onClick: function () {
                              console.log(""),
                                a(void 0),
                                setTimeout(function () {
                                  window.location.href = "/";
                                }, 1e3);
                            },
                          },
                          "\u0412\u044b\u0445\u043e\u0434"
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
      }.call(this, a(152)(e)));
    },
    207: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var n = a(208),
        l = a(141),
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
        return A;
      });
      var n = a(0),
        l = a.n(n),
        r = a(206),
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
        u = a(13),
        i = a(149),
        o = a(218),
        m = a(110),
        s = a(54),
        d = a(369),
        p = (a(135), a(4)),
        f = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        E = function (e) {
          var t,
            a = (null === e ||
            void 0 === e ||
            null === (t = e.location) ||
            void 0 === t
              ? void 0
              : t.state
            ).user,
            r = Object(n.useState)(),
            c = Object(u.a)(r, 2),
            E = c[0],
            h = c[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              i.a,
              Object.assign(
                {
                  name: "basic",
                  onFinish: function (e) {
                    console.log("Success:", { values: e, value: E });
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
                      n.append(
                        "user_id",
                        null === a || void 0 === a ? void 0 : a.id
                      ),
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
                f
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
                  value: E,
                  onChange: h,
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
        h = { labelCol: { span: 4 }, wrapperCol: { span: 16 } },
        b = function () {
          var e = Object(n.useState)(),
            t = Object(u.a)(e, 2),
            a = t[0];
          t[1];
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
                    var t = new FormData();
                    Object.keys(e).forEach(function (a) {
                      "dragger" !== a &&
                        t.append(
                          a,
                          "address" === a ? JSON.stringify(e[a]) : e[a]
                        );
                    }),
                      fetch(p.a + "/restaurant/user-add", {
                        method: "POST",
                        body: t,
                        headers: {},
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          alert(e.message),
                            200 === e.status
                              ? (alert(
                                  "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"
                                ),
                                (document.location.href = "/"))
                              : alert(
                                  "\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"
                                );
                        })
                        .catch(function (e) {
                          alert(
                            "\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"
                          );
                        });
                  },
                  onFinishFailed: function (e) {
                    console.log("Failed:", e);
                  },
                  style: { minHeight: "100vh" },
                  initialValues: { active: !0 },
                },
                h
              ),
              l.a.createElement(
                i.a.Item,
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
                l.a.createElement(o.a, null)
              ),
              l.a.createElement(
                i.a.Item,
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
                l.a.createElement(o.a, null)
              ),
              l.a.createElement(
                i.a.Item,
                {
                  label: "email",
                  name: "email",
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
                s.a,
                { type: "primary", htmlType: "submit" },
                "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
              )
            )
          );
        },
        g = a(367),
        v = a(97),
        y = a(57),
        j = a(28),
        O = g.a.Meta,
        _ = function (e) {
          var t,
            a = Object(n.useState)([]),
            r = Object(u.a)(a, 2),
            c = r[0],
            i = r[1];
          console.log("ListRest props", e);
          var o = (null === e ||
          void 0 === e ||
          null === (t = e.location) ||
          void 0 === t
            ? void 0
            : t.state
          ).user;
          console.log("user??", o);
          var m = function () {
            try {
              fetch(
                p.a +
                  "/restaurant/list?token="
                    .concat(1 === o.id ? "ZWmGuABp3N6" : "", "&user=")
                    .concat(o.id)
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return i(e);
                });
            } catch (e) {
              console.log(e);
            }
          };
          return (
            Object(n.useEffect)(function () {
              m();
            }, []),
            l.a.createElement(
              l.a.Fragment,
              null,
              c.length
                ? l.a.createElement(
                    v.a,
                    { gutter: [16, 16] },
                    c.map(function (e) {
                      var t;
                      try {
                        t = JSON.parse(e.address_json).value;
                      } catch (a) {
                        t =
                          "\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e";
                      }
                      return l.a.createElement(
                        j.a,
                        {
                          to: {
                            pathname: "/restaurant",
                            state: { id: e.id, user: o },
                          },
                          key: e.id,
                        },
                        l.a.createElement(
                          y.a,
                          { className: "gutter-row", span: 6 },
                          l.a.createElement(
                            g.a,
                            {
                              hoverable: !0,
                              style: { width: 240 },
                              cover: l.a.createElement("img", {
                                alt: "",
                                src: p.a + "/" + e.image,
                              }),
                            },
                            l.a.createElement(O, {
                              title: e.name,
                              description: e.description + "\n" + t,
                            }),
                            "manager" !== o.role &&
                              l.a.createElement(
                                l.a.Fragment,
                                null,
                                l.a.createElement(
                                  "button",
                                  {
                                    style: {
                                      cursor: "pointer",
                                      padding: 10,
                                      marginTop: 10,
                                    },
                                    onClick: function (t) {
                                      t.preventDefault(),
                                        console.log("rest copy", e),
                                        fetch(
                                          ""
                                            .concat(p.a, "/restaurant/copy?id=")
                                            .concat(e.id)
                                        )
                                          .then(function (e) {
                                            return e.json();
                                          })
                                          .then(function (e) {
                                            200 == e.status
                                              ? m()
                                              : alert(
                                                  "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"
                                                );
                                          })
                                          .catch(function (e) {
                                            alert(
                                              "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"
                                            );
                                          });
                                    },
                                  },
                                  "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"
                                ),
                                l.a.createElement(
                                  "button",
                                  {
                                    style: {
                                      cursor: "pointer",
                                      padding: 10,
                                      marginTop: 10,
                                    },
                                    onClick: function (t) {
                                      t.preventDefault(),
                                        console.log("rest delete", e),
                                        window.confirm(
                                          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"
                                        ) &&
                                          fetch(
                                            ""
                                              .concat(
                                                p.a,
                                                "/restaurant/delete?id="
                                              )
                                              .concat(e.id)
                                          )
                                            .then(function (e) {
                                              return e.json();
                                            })
                                            .then(function (e) {
                                              200 == e.status
                                                ? m()
                                                : alert(
                                                    "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"
                                                  );
                                            })
                                            .catch(function (e) {
                                              alert(
                                                "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"
                                              );
                                            });
                                    },
                                  },
                                  "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"
                                )
                              )
                          )
                        )
                      );
                    })
                  )
                : "\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"
            )
          );
        },
        k = g.a.Meta;
      function w(e, t) {
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
      var C = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state,
            m = i.id,
            f = i.user,
            E = Object(n.useState)(!1),
            h = Object(u.a)(E, 2),
            b = h[0],
            O = h[1],
            _ = Object(n.useState)(!1),
            C = Object(u.a)(_, 2),
            S = C[0],
            F = C[1],
            I = Object(n.useState)(!1),
            x = Object(u.a)(I, 2),
            T = x[0],
            P = x[1],
            D = Object(n.useState)(!1),
            N = Object(u.a)(D, 2),
            q = N[0],
            J = N[1],
            M = Object(n.useState)(!1),
            U = Object(u.a)(M, 2),
            A = U[0],
            L = U[1],
            R = Object(n.useState)(!1),
            H = Object(u.a)(R, 2),
            K = H[0],
            z = H[1];
          Object(n.useEffect)(
            function () {
              G();
            },
            [m]
          );
          var B,
            G = function () {
              try {
                fetch(p.a + "/restaurant/get-data?id=" + m)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    c(e),
                      O(e.time_start),
                      F(e.time_end),
                      P(e.restaurant_info),
                      J(e.delivery_time),
                      L(e.name);
                    var t = JSON.parse(
                      null === e || void 0 === e ? void 0 : e.address_json
                    );
                    console.log("addressJson", t), z(t);
                  });
              } catch (e) {
                console.log(e);
              }
            };
          try {
            B = JSON.parse(r.address_json).value;
          } catch (V) {
            B =
              "\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e";
          }
          if ((console.log("rest data", r, f), !r)) return null;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              v.a,
              { gutter: [16, 16] },
              l.a.createElement(
                y.a,
                { className: "gutter-row", span: 10 },
                l.a.createElement(
                  g.a,
                  {
                    hoverable: !0,
                    style: { width: "100%" },
                    cover: l.a.createElement("img", {
                      alt: "",
                      src: p.a + "/" + r.image,
                    }),
                  },
                  l.a.createElement(k, {
                    title: r.name,
                    description: r.description,
                  }),
                  l.a.createElement("p", null, B),
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
                y.a,
                { className: "gutter-row", span: 10 },
                l.a.createElement(
                  j.a,
                  { to: { pathname: "restaurant-order", state: { id: m } } },
                  l.a.createElement(
                    s.a,
                    null,
                    "\u0417\u0430\u043a\u0430\u0437\u044b"
                  )
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  j.a,
                  { to: { pathname: "restaurant-menu", state: { id: m } } },
                  l.a.createElement(s.a, null, "\u041c\u0435\u043d\u044e")
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  j.a,
                  { to: { pathname: "restaurant-modif", state: { id: m } } },
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
                    value: A,
                    onChange: function (e) {
                      L(e.target.value);
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
                          "/restaurant/edit-rest-name?id="
                            .concat(r.id, "&value=")
                            .concat(A)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            G();
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
                    value: K,
                    defaultQuery: K,
                    onChange: z,
                  }),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    s.a,
                    {
                      onClick: function () {
                        fetch(
                          p.a +
                            "/restaurant/edit-rest-address?id="
                              .concat(r.id, "&value=")
                              .concat(encodeURIComponent(JSON.stringify(K)))
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            200 === e.status &&
                              alert(
                                "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                              ),
                              G();
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
                        p.a +
                          "/restaurant/edit-rest-radius?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return G();
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
                          p.a + "/restaurant/edit-rest-image?id=".concat(r.id),
                          { method: "POST", body: t }
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            200 === e.status
                              ? G()
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
                    onChange: w(function (e) {
                      fetch(
                        p.a +
                          "/restaurant/edit-rest-desc?id="
                            .concat(r.id, "&value=")
                            .concat(e.target.value)
                      ).then(function (e) {
                        return G();
                      });
                    }, 1e3),
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement(
                  j.a,
                  { to: { pathname: "restaurant-delivery", state: { id: m } } },
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
                    value: b,
                    onChange: function (e) {
                      return O(e.target.value);
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
                    value: S,
                    onChange: function (e) {
                      return F(e.target.value);
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
                            .concat(b, "&end=")
                            .concat(S)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            G();
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
                    value: q,
                    onChange: function (e) {
                      return J(e.target.value);
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
                          "/restaurant/edit-rest-deliverytime?id="
                            .concat(r.id, "&time=")
                            .concat(q)
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status &&
                            alert(
                              "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"
                            ),
                            G();
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
                        return G();
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
                    value: T,
                    onChange: function (e) {
                      return P(e.target.value);
                    },
                  }),
                  l.a.createElement(
                    s.a,
                    {
                      onClick: function () {
                        fetch(
                          p.a +
                            "/restaurant/edit-rest-info?id="
                              .concat(r.id, "&value=")
                              .concat(T)
                        ).then(function (e) {
                          return G();
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
                        p.a +
                          "/restaurant/edit-rest-active?id="
                            .concat(r.id, "&value=")
                            .concat("1" == r.active ? 0 : 1)
                      ).then(function (e) {
                        return G();
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
                  j.a,
                  { to: { pathname: "restaurant-discount", state: { id: m } } },
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
                          return G();
                        });
                    },
                  })
                ),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                l.a.createElement("br", null),
                "manager" != (null === f || void 0 === f ? void 0 : f.role) &&
                  l.a.createElement(
                    j.a,
                    { to: { pathname: "restaurant-users", state: { id: m } } },
                    l.a.createElement(
                      s.a,
                      null,
                      "\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"
                    )
                  ),
                l.a.createElement("br", null),
                l.a.createElement("br", null)
              )
            )
          );
        },
        S = a(108),
        F = a(11),
        I = a(368),
        x = a(365),
        T = I.a.Panel,
        P = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1];
          console.log("data is", r);
          var i = e.location.state.id,
            m = Object(n.useState)(!1),
            d = Object(u.a)(m, 2),
            f = d[0],
            E = d[1],
            h = function () {
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
            h();
          }, []);
          var b = Object(n.useState)(!1),
            v = Object(u.a)(b, 2),
            y = v[0],
            O = v[1];
          return (
            console.log("newItem", y),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                j.a,
                { to: { pathname: "restaurant-modif", state: { id: i } } },
                l.a.createElement(
                  s.a,
                  null,
                  "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b"
                )
              ),
              l.a.createElement(x.a, null),
              l.a.createElement(o.a, {
                onChange: function (e) {
                  return E(e.target.value);
                },
              }),
              l.a.createElement(
                s.a,
                {
                  onClick: function () {
                    var e = new FormData();
                    e.append("rest_id", i),
                      e.append("category_name", f),
                      fetch(p.a + "/restaurant/create-category-menu", {
                        method: "POST",
                        body: e,
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          return h();
                        });
                  },
                },
                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"
              ),
              l.a.createElement(x.a, null),
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
                        value: y.category_id,
                        onChange: function (e) {
                          return O(
                            Object(F.a)(
                              Object(F.a)({}, y),
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
                          Object(F.a)(
                            Object(F.a)({}, y),
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
                          Object(F.a)(
                            Object(F.a)({}, y),
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
                          Object(F.a)(
                            Object(F.a)({}, y),
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
                          Object(F.a)(
                            Object(F.a)({}, y),
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
                      value: y.file,
                      onChange: function (e) {
                        return O(
                          Object(F.a)(
                            Object(F.a)({}, y),
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
                              Object(F.a)(
                                Object(F.a)({}, y),
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
                            y.category_id ? y.category_id : r.menu[0].id
                          ),
                          e.append("description", y.description),
                          e.append("name", y.name),
                          e.append("price", y.price),
                          e.append("weight", y.weight),
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
                                  h())
                                : (alert(
                                    "\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"
                                  ),
                                  h());
                            });
                      },
                      style: { marginTop: 20 },
                    },
                    "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                  )
                ),
              l.a.createElement(x.a, null),
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
                              return h();
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
                                  return h();
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
                        I.a,
                        { defaultActiveKey: [] },
                        l.a.createElement(
                          T,
                          {
                            header:
                              "\u041c\u0435\u043d\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
                            key: "1",
                          },
                          e.menu.map(function (e) {
                            return l.a.createElement(
                              I.a,
                              { key: e.id, defaultActiveKey: [] },
                              l.a.createElement(
                                T,
                                { header: e.name, key: "1" },
                                l.a.createElement(
                                  "div",
                                  { style: { margin: 15 } },
                                  l.a.createElement(
                                    g.a,
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
                                            return h();
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
                                            return h();
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
                                              return h();
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
                                              return h();
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
                                              return h();
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
                                              return h();
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
                                              var a = Object(S.a)(
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
                                                return h();
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
                                                  return h();
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
                    l.a.createElement(x.a, null)
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
            m = Object(n.useState)({ type: "single" }),
            d = Object(u.a)(m, 2),
            f = d[0],
            E = d[1],
            h = function () {
              fetch(p.a + "/restaurant/get-modif-list?restaurant_id=" + i)
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
          var b = function (e) {
            window.confirm(
              "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"
            ) &&
              fetch(p.a + "/restaurant/delete-rest-modif?id=" + e).then(
                function (e) {
                  return h();
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
                j.a,
                { to: { pathname: "restaurant", state: { id: i } } },
                l.a.createElement(
                  s.a,
                  null,
                  "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
                )
              ),
              l.a.createElement(x.a, null),
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
                    return E(
                      Object(F.a)(
                        Object(F.a)({}, f),
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
                      return E(
                        Object(F.a)(
                          Object(F.a)({}, f),
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
                      e.append("name", f.name),
                      e.append("type", f.type),
                      e.append("parent_id", f.parent_id ? f.parent_id : null),
                      fetch(p.a + "/restaurant/create-rest-modif", {
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
                "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"
              ),
              l.a.createElement(x.a, null),
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
                            return b(e.id);
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
                                h();
                              });
                          },
                        },
                        "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442"
                      )
                    ),
                    l.a.createElement("br", null),
                    e.list.map(function (e) {
                      return l.a.createElement(
                        g.a,
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
                                  return b(e.id);
                                },
                                style: { marginLeft: 20 },
                              },
                              "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                            )
                          )
                        )
                      );
                    }),
                    l.a.createElement(x.a, null)
                  );
                })
            )
          );
        },
        N = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "single" }),
            d = Object(u.a)(m, 2),
            f = d[0],
            E = d[1],
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
                j.a,
                { to: { pathname: "restaurant", state: { id: i } } },
                l.a.createElement(
                  s.a,
                  null,
                  "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
                )
              ),
              l.a.createElement(x.a, null),
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
                    return E(
                      Object(F.a)(
                        Object(F.a)({}, f),
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
                    return E(
                      Object(F.a)(
                        Object(F.a)({}, f),
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
                      e.append("price", f.price),
                      e.append("price_start", f.price_start),
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
              l.a.createElement(x.a, null),
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
                    l.a.createElement(x.a, null)
                  );
                })
            )
          );
        },
        q = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            m = Object(n.useState)({ type: "promocode" }),
            d = Object(u.a)(m, 2),
            f = d[0],
            E = d[1],
            h = Object(n.useState)([]),
            b = Object(u.a)(h, 2),
            g = b[0],
            v = b[1],
            y = [
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
                  return v(e.menu);
                });
          }, []);
          console.log("data", r),
            console.log("newModif", f),
            console.log("menu", g);
          var _ = function (e, t) {
              var a = t;
              return l.a.createElement(
                "label",
                null,
                l.a.createElement("span", null, e),
                l.a.createElement(o.a, {
                  onChange: function (e) {
                    var t = Object(F.a)({}, f);
                    (t[a] = e.target.value), E(Object(F.a)({}, t));
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
              j.a,
              { to: { pathname: "restaurant", state: { id: i } } },
              l.a.createElement(
                s.a,
                null,
                "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
              )
            ),
            l.a.createElement(x.a, null),
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
                    E(
                      Object(F.a)(
                        Object(F.a)({}, f),
                        {},
                        { type: e.target.value }
                      )
                    );
                  },
                },
                y.map(function (e) {
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
                    var t = Object(S.a)(e.target.options)
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return e.value;
                      });
                    E(Object(F.a)(Object(F.a)({}, f), {}, { items: t }));
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
                    e.append("type", f.type ? f.type : ""),
                    e.append("name", f.name ? f.name : ""),
                    e.append(
                      "discount_value",
                      f.discount_value ? f.discount_value : ""
                    ),
                    e.append("price_start", f.price_start ? f.price_start : ""),
                    e.append("description", f.description ? f.description : ""),
                    e.append("promocode", f.promocode ? f.promocode : ""),
                    e.append("time_start", f.time_start ? f.time_start : ""),
                    e.append("time_end", f.time_end ? f.time_end : ""),
                    e.append("items", f.items ? f.items : ""),
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
            l.a.createElement(x.a, null),
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
                    y.map(function (e) {
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
                          var a = Object(S.a)(t.target.options)
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
                  l.a.createElement(x.a, null)
                );
              })
          );
        },
        J = a(366),
        M = function (e) {
          var t = Object(n.useState)([]),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id,
            o = Object(n.useState)({ type: "single" }),
            m = Object(u.a)(o, 2),
            d = (m[0], m[1], Object(n.useState)(!1)),
            f = Object(u.a)(d, 2),
            E = f[0],
            h = f[1],
            b = function () {
              h(!0),
                fetch(p.a + "/restaurant/get-order-list?restaurant_id=" + i)
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
          var g = r.map(function (e) {
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
                        l.a.createElement(x.a, null)
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
                        "".concat(p.a, "/payment/cancel?order_id=").concat(e.id)
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
              j.a,
              { to: { pathname: "restaurant", state: { id: i } } },
              l.a.createElement(
                s.a,
                null,
                "\u041d\u0430\u0437\u0430\u0434 \u0432 \u043c\u0435\u043d\u044e"
              )
            ),
            l.a.createElement(x.a, null),
            l.a.createElement(
              s.a,
              {
                onClick: function () {
                  return b();
                },
              },
              "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"
            ),
            l.a.createElement(x.a, null),
            E &&
              l.a.createElement(
                "p",
                null,
                " \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ... "
              ),
            l.a.createElement(x.a, null),
            l.a.createElement(J.a, {
              dataSource: g,
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
        U = function (e) {
          var t = Object(n.useState)(null),
            a = Object(u.a)(t, 2),
            r = a[0],
            c = a[1],
            i = e.location.state.id;
          console.log("RestaurantUsers", i);
          var m = Object(n.useState)({}),
            d = Object(u.a)(m, 2),
            f = d[0],
            E = d[1],
            h = Object(n.useState)([]),
            b = Object(u.a)(h, 2),
            g = b[0],
            v = b[1],
            y = function () {
              fetch(p.a + "/restaurant/get-manager-list?restaurant_id=" + i)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  c(e);
                });
            };
          Object(n.useEffect)(function () {
            y();
            var e = new FormData();
            e.append("rest_id", i),
              fetch(p.a + "/restaurant/get-menu", { method: "POST", body: e })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return v(e.menu);
                });
          }, []);
          console.log("data", r),
            console.log("newModif", f),
            console.log("menu", g);
          var j = function (e, t) {
            var a = t;
            return l.a.createElement(
              "label",
              null,
              l.a.createElement("span", null, e),
              l.a.createElement(o.a, {
                onChange: function (e) {
                  var t = Object(F.a)({}, f);
                  (t[a] = e.target.value), E(Object(F.a)({}, t));
                },
              })
            );
          };
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "h3",
              null,
              "\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0444\u0438\u043b\u0438\u0430\u043b\u0430"
            ),
            l.a.createElement(
              "div",
              null,
              j("\u041b\u043e\u0433\u0438\u043d", "login"),
              j("\u041f\u0430\u0440\u043e\u043b\u044c", "password"),
              j("Email", "email"),
              l.a.createElement(
                s.a,
                {
                  onClick: function () {
                    var e = new FormData();
                    e.append(
                      "login",
                      null === f || void 0 === f ? void 0 : f.login
                    ),
                      e.append(
                        "email",
                        null === f || void 0 === f ? void 0 : f.email
                      ),
                      e.append(
                        "password",
                        null === f || void 0 === f ? void 0 : f.password
                      ),
                      e.append("rest_id", i),
                      fetch(p.a + "/restaurant/manager-add", {
                        method: "POST",
                        body: e,
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          200 === e.status
                            ? y()
                            : alert(
                                "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"
                              );
                        })
                        .catch(function (e) {
                          alert(
                            "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"
                          );
                        });
                  },
                },
                "\u0421\u043e\u0437\u0434\u0430\u0442\u044c"
              )
            ),
            l.a.createElement(x.a, null),
            l.a.createElement(
              "div",
              null,
              null === r || void 0 === r
                ? void 0
                : r.map(function (e) {
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          },
                        },
                        l.a.createElement("p", null, e.id),
                        l.a.createElement("p", null, e.login),
                        l.a.createElement(
                          s.a,
                          {
                            onClick: function () {
                              window.confirm(
                                "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435"
                              ) &&
                                fetch(
                                  p.a + "/restaurant/manager-delete?id=" + e.id
                                )
                                  .then(function (e) {
                                    return e.json();
                                  })
                                  .then(function () {
                                    return y();
                                  });
                            },
                          },
                          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                        )
                      ),
                      l.a.createElement(x.a, null)
                    );
                  })
            )
          );
        },
        A = function () {
          return n.createElement(
            n.Fragment,
            null,
            Object(r.a)([
              { path: "/", exact: !0, component: c },
              { path: "/add-rest", component: E },
              { path: "/add-user", component: b },
              { path: "/list-rest", component: _ },
              { path: "/restaurant", component: C },
              { path: "/restaurant-menu", component: P },
              { path: "/restaurant-modif", component: D },
              { path: "/restaurant-delivery", component: N },
              { path: "/restaurant-discount", component: q },
              { path: "/restaurant-order", component: M },
              { path: "/restaurant-users", component: U },
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
        r = a(18),
        c = a.n(r),
        u = a(42),
        i = a(92),
        o = a(175),
        m = a(4),
        s = a(178),
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
          return E;
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
        c = a(64),
        u = (a(229), a(176)),
        i = a(147),
        o = a(177),
        m = a.n(o),
        s = a(11),
        d = { user: void 0 },
        p = { key: "main", storage: m.a },
        f = Object(c.c)({
          main: Object(i.a)(p, function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : d,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_USER":
                return (
                  console.log("SET_USER", t),
                  Object(s.a)(Object(s.a)({}, e), {}, { user: t.user })
                );
              default:
                return Object(s.a)({}, e);
            }
          }),
        });
      n = Object(c.a)(u.a);
      var E = Object(c.d)(f, void 0, n),
        h = Object(i.b)(E),
        b = (a(92), "https://app.vegfood.delivery");
    },
  },
  [[220, 1, 2]],
]);
//# sourceMappingURL=main.300f1af2.chunk.js.map
