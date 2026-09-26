(() => {
  var th = 0,
    mc = 1,
    eh = 2;
  var Zs = 1,
    ya = 2,
    ns = 3,
    sn = 0,
    Le = 1,
    ai = 2,
    Qi = 0,
    ss = 1,
    Ys = 2,
    Ec = 3,
    gc = 4,
    ih = 5;
  var yn = 100,
    nh = 101,
    sh = 102,
    rh = 103,
    ah = 104,
    oh = 200,
    ch = 201,
    lh = 202,
    hh = 203,
    xc = 204,
    vc = 205,
    uh = 206,
    dh = 207,
    fh = 208,
    ph = 209,
    mh = 210,
    Eh = 211,
    gh = 212,
    xh = 213,
    vh = 214,
    Vr = 0,
    Dr = 1,
    Jr = 2,
    Jn = 3,
    kr = 4,
    Wr = 5,
    Xr = 6,
    Kr = 7,
    Sc = 0,
    Sh = 1,
    yh = 2,
    ti = 0,
    yc = 1,
    Mc = 2,
    Pc = 3,
    _c = 4,
    bc = 5,
    Qc = 6,
    Rc = 7;
  var Tc = 300,
    rn = 301,
    Mn = 302,
    rs = 303,
    Ma = 304,
    js = 306,
    gn = 1e3,
    Si = 1001,
    Zr = 1002,
    Ce = 1003,
    Mh = 1004;
  var tr = 1005;
  var Qe = 1006,
    Pa = 1007;
  var an = 1008;
  var He = 1009,
    Ic = 1010,
    Ac = 1011,
    as = 1012,
    _a = 1013,
    mi = 1014,
    Ke = 1015,
    Ue = 1016,
    ba = 1017,
    Qa = 1018,
    os = 1020,
    Fc = 35902,
    Nc = 35899,
    wc = 1021,
    Cc = 1022,
    qe = 1023,
    si = 1026,
    on = 1027,
    Ra = 1028,
    Ta = 1029,
    cn = 1030,
    Ia = 1031;
  var Aa = 1033,
    er = 33776,
    ir = 33777,
    nr = 33778,
    sr = 33779,
    Fa = 35840,
    Na = 35841,
    wa = 35842,
    Ca = 35843,
    Ha = 36196,
    Ua = 37492,
    Oa = 37496,
    La = 37488,
    $a = 37489,
    rr = 37490,
    za = 37491,
    Ba = 37808,
    qa = 37809,
    Ga = 37810,
    Va = 37811,
    Da = 37812,
    Ja = 37813,
    ka = 37814,
    Wa = 37815,
    Xa = 37816,
    Ka = 37817,
    Za = 37818,
    Ya = 37819,
    ja = 37820,
    to = 37821,
    eo = 36492,
    io = 36494,
    no = 36495,
    so = 36283,
    ro = 36284,
    ar = 36285,
    ao = 36286;
  var bs = 2300,
    Yr = 2301,
    zr = 2302,
    oc = 2303,
    cc = 2400,
    lc = 2401,
    hc = 2402;
  var Ph = 3200;
  var oo = 0,
    _h = 1,
    $i = "",
    Je = "srgb",
    xn = "srgb-linear",
    Qs = "linear",
    oe = "srgb";
  var Br = 7680;
  var bh = 519,
    Qh = 512,
    Rh = 513,
    Th = 514,
    co = 515,
    Ih = 516,
    Ah = 517,
    lo = 518,
    Fh = 519,
    Nh = 35044;
  var Hc = "300 es",
    fi = 2e3,
    kn = 2001;
  function ed(n) {
    for (let t = n.length - 1; t >= 0; --t) if (n[t] >= 65535) return !0;
    return !1;
  }
  function id(n) {
    return ArrayBuffer.isView(n) && !(n instanceof DataView);
  }
  function Wn(n) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", n);
  }
  function wh() {
    let n = Wn("canvas");
    return ((n.style.display = "block"), n);
  }
  var Ql = {},
    Xn = null;
  function Uc(...n) {
    let t = "THREE." + n.shift();
    Xn ? Xn("log", t, ...n) : console.log(t, ...n);
  }
  function Ch(n) {
    let t = n[0];
    if (typeof t == "string" && t.startsWith("TSL:")) {
      let e = n[1];
      e && e.isStackTrace
        ? (n[0] += " " + e.getLocation())
        : (n[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.');
    }
    return n;
  }
  function Ht(...n) {
    n = Ch(n);
    let t = "THREE." + n.shift();
    if (Xn) Xn("warn", t, ...n);
    else {
      let e = n[0];
      e && e.isStackTrace ? console.warn(e.getError(t)) : console.warn(t, ...n);
    }
  }
  function Ot(...n) {
    n = Ch(n);
    let t = "THREE." + n.shift();
    if (Xn) Xn("error", t, ...n);
    else {
      let e = n[0];
      e && e.isStackTrace ? console.error(e.getError(t)) : console.error(t, ...n);
    }
  }
  function En(...n) {
    let t = n.join(" ");
    t in Ql || ((Ql[t] = !0), Ht(...n));
  }
  function Hh(n, t, e) {
    return new Promise(function (i, s) {
      function r() {
        switch (n.clientWaitSync(t, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case n.WAIT_FAILED:
            s();
            break;
          case n.TIMEOUT_EXPIRED:
            setTimeout(r, e);
            break;
          default:
            i();
        }
      }
      setTimeout(r, e);
    });
  }
  var Uh = { [Vr]: Dr, [Jr]: Xr, [kr]: Kr, [Jn]: Wr, [Dr]: Vr, [Xr]: Jr, [Kr]: kr, [Wr]: Jn },
    yi = class {
      addEventListener(t, e) {
        this._listeners === void 0 && (this._listeners = {});
        let i = this._listeners;
        (i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e));
      }
      hasEventListener(t, e) {
        let i = this._listeners;
        return i === void 0 ? !1 : i[t] !== void 0 && i[t].indexOf(e) !== -1;
      }
      removeEventListener(t, e) {
        let i = this._listeners;
        if (i === void 0) return;
        let s = i[t];
        if (s !== void 0) {
          let r = s.indexOf(e);
          r !== -1 && s.splice(r, 1);
        }
      }
      dispatchEvent(t) {
        let e = this._listeners;
        if (e === void 0) return;
        let i = e[t.type];
        if (i !== void 0) {
          t.target = this;
          let s = i.slice(0);
          for (let r = 0, a = s.length; r < a; r++) s[r].call(this, t);
          t.target = null;
        }
      }
    },
    ze = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "0a",
      "0b",
      "0c",
      "0d",
      "0e",
      "0f",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "1a",
      "1b",
      "1c",
      "1d",
      "1e",
      "1f",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "2a",
      "2b",
      "2c",
      "2d",
      "2e",
      "2f",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "3a",
      "3b",
      "3c",
      "3d",
      "3e",
      "3f",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "4a",
      "4b",
      "4c",
      "4d",
      "4e",
      "4f",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "5a",
      "5b",
      "5c",
      "5d",
      "5e",
      "5f",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "6a",
      "6b",
      "6c",
      "6d",
      "6e",
      "6f",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "7a",
      "7b",
      "7c",
      "7d",
      "7e",
      "7f",
      "80",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "8a",
      "8b",
      "8c",
      "8d",
      "8e",
      "8f",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
      "9a",
      "9b",
      "9c",
      "9d",
      "9e",
      "9f",
      "a0",
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "a9",
      "aa",
      "ab",
      "ac",
      "ad",
      "ae",
      "af",
      "b0",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "ba",
      "bb",
      "bc",
      "bd",
      "be",
      "bf",
      "c0",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "ca",
      "cb",
      "cc",
      "cd",
      "ce",
      "cf",
      "d0",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "da",
      "db",
      "dc",
      "dd",
      "de",
      "df",
      "e0",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8",
      "e9",
      "ea",
      "eb",
      "ec",
      "ed",
      "ee",
      "ef",
      "f0",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "fa",
      "fb",
      "fc",
      "fd",
      "fe",
      "ff",
    ];
  var qr = Math.PI / 180,
    Rs = 180 / Math.PI;
  function or() {
    let n = (Math.random() * 4294967295) | 0,
      t = (Math.random() * 4294967295) | 0,
      e = (Math.random() * 4294967295) | 0,
      i = (Math.random() * 4294967295) | 0;
    return (
      ze[n & 255] +
      ze[(n >> 8) & 255] +
      ze[(n >> 16) & 255] +
      ze[(n >> 24) & 255] +
      "-" +
      ze[t & 255] +
      ze[(t >> 8) & 255] +
      "-" +
      ze[((t >> 16) & 15) | 64] +
      ze[(t >> 24) & 255] +
      "-" +
      ze[(e & 63) | 128] +
      ze[(e >> 8) & 255] +
      "-" +
      ze[(e >> 16) & 255] +
      ze[(e >> 24) & 255] +
      ze[i & 255] +
      ze[(i >> 8) & 255] +
      ze[(i >> 16) & 255] +
      ze[(i >> 24) & 255]
    ).toLowerCase();
  }
  function jt(n, t, e) {
    return Math.max(t, Math.min(e, n));
  }
  function nd(n, t) {
    return ((n % t) + t) % t;
  }
  function Oo(n, t, e) {
    return (1 - e) * n + e * t;
  }
  function gs(n, t) {
    switch (t.constructor) {
      case Float32Array:
        return n;
      case Uint32Array:
        return n / 4294967295;
      case Uint16Array:
        return n / 65535;
      case Uint8Array:
      case Uint8ClampedArray:
        return n / 255;
      case Int32Array:
        return Math.max(n / 2147483647, -1);
      case Int16Array:
        return Math.max(n / 32767, -1);
      case Int8Array:
        return Math.max(n / 127, -1);
      default:
        throw new Error("THREE.MathUtils: Invalid component type.");
    }
  }
  function Xe(n, t) {
    switch (t.constructor) {
      case Float32Array:
        return n;
      case Uint32Array:
        return Math.round(n * 4294967295);
      case Uint16Array:
        return Math.round(n * 65535);
      case Uint8Array:
      case Uint8ClampedArray:
        return Math.round(n * 255);
      case Int32Array:
        return Math.round(n * 2147483647);
      case Int16Array:
        return Math.round(n * 32767);
      case Int8Array:
        return Math.round(n * 127);
      default:
        throw new Error("THREE.MathUtils: Invalid component type.");
    }
  }
  var Bc = class Bc {
    constructor(t = 0, e = 0) {
      ((this.x = t), (this.y = e));
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return ((this.x = t), (this.y = e), this);
    }
    setScalar(t) {
      return ((this.x = t), (this.y = t), this);
    }
    setX(t) {
      return ((this.x = t), this);
    }
    setY(t) {
      return ((this.y = t), this);
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return ((this.x = t.x), (this.y = t.y), this);
    }
    add(t) {
      return ((this.x += t.x), (this.y += t.y), this);
    }
    addScalar(t) {
      return ((this.x += t), (this.y += t), this);
    }
    addVectors(t, e) {
      return ((this.x = t.x + e.x), (this.y = t.y + e.y), this);
    }
    addScaledVector(t, e) {
      return ((this.x += t.x * e), (this.y += t.y * e), this);
    }
    sub(t) {
      return ((this.x -= t.x), (this.y -= t.y), this);
    }
    subScalar(t) {
      return ((this.x -= t), (this.y -= t), this);
    }
    subVectors(t, e) {
      return ((this.x = t.x - e.x), (this.y = t.y - e.y), this);
    }
    multiply(t) {
      return ((this.x *= t.x), (this.y *= t.y), this);
    }
    multiplyScalar(t) {
      return ((this.x *= t), (this.y *= t), this);
    }
    divide(t) {
      return ((this.x /= t.x), (this.y /= t.y), this);
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      let e = this.x,
        i = this.y,
        s = t.elements;
      return ((this.x = s[0] * e + s[3] * i + s[6]), (this.y = s[1] * e + s[4] * i + s[7]), this);
    }
    min(t) {
      return ((this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this);
    }
    max(t) {
      return ((this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this);
    }
    clamp(t, e) {
      return ((this.x = jt(this.x, t.x, e.x)), (this.y = jt(this.y, t.y, e.y)), this);
    }
    clampScalar(t, e) {
      return ((this.x = jt(this.x, t, e)), (this.y = jt(this.y, t, e)), this);
    }
    clampLength(t, e) {
      let i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(jt(i, t, e));
    }
    floor() {
      return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
    }
    roundToZero() {
      return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t) {
      let e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (e === 0) return Math.PI / 2;
      let i = this.dot(t) / e;
      return Math.acos(jt(i, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      let e = this.x - t.x,
        i = this.y - t.y;
      return e * e + i * i;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return ((this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this);
    }
    lerpVectors(t, e, i) {
      return ((this.x = t.x + (e.x - t.x) * i), (this.y = t.y + (e.y - t.y) * i), this);
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return ((this.x = t[e]), (this.y = t[e + 1]), this);
    }
    toArray(t = [], e = 0) {
      return ((t[e] = this.x), (t[e + 1] = this.y), t);
    }
    fromBufferAttribute(t, e) {
      return ((this.x = t.getX(e)), (this.y = t.getY(e)), this);
    }
    rotateAround(t, e) {
      let i = Math.cos(e),
        s = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return ((this.x = r * i - a * s + t.x), (this.y = r * s + a * i + t.y), this);
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  };
  Bc.prototype.isVector2 = !0;
  var Ct = Bc,
    ye = class {
      constructor(t = 0, e = 0, i = 0, s = 1) {
        ((this.isQuaternion = !0), (this._x = t), (this._y = e), (this._z = i), (this._w = s));
      }
      static slerpFlat(t, e, i, s, r, a, o) {
        let l = i[s + 0],
          c = i[s + 1],
          u = i[s + 2],
          f = i[s + 3],
          h = r[a + 0],
          d = r[a + 1],
          E = r[a + 2],
          v = r[a + 3];
        if (f !== v || l !== h || c !== d || u !== E) {
          let m = l * h + c * d + u * E + f * v;
          m < 0 && ((h = -h), (d = -d), (E = -E), (v = -v), (m = -m));
          let p = 1 - o;
          if (m < 0.9995) {
            let y = Math.acos(m),
              Q = Math.sin(y);
            ((p = Math.sin(p * y) / Q),
              (o = Math.sin(o * y) / Q),
              (l = l * p + h * o),
              (c = c * p + d * o),
              (u = u * p + E * o),
              (f = f * p + v * o));
          } else {
            ((l = l * p + h * o), (c = c * p + d * o), (u = u * p + E * o), (f = f * p + v * o));
            let y = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
            ((l *= y), (c *= y), (u *= y), (f *= y));
          }
        }
        ((t[e] = l), (t[e + 1] = c), (t[e + 2] = u), (t[e + 3] = f));
      }
      static multiplyQuaternionsFlat(t, e, i, s, r, a) {
        let o = i[s],
          l = i[s + 1],
          c = i[s + 2],
          u = i[s + 3],
          f = r[a],
          h = r[a + 1],
          d = r[a + 2],
          E = r[a + 3];
        return (
          (t[e] = o * E + u * f + l * d - c * h),
          (t[e + 1] = l * E + u * h + c * f - o * d),
          (t[e + 2] = c * E + u * d + o * h - l * f),
          (t[e + 3] = u * E - o * f - l * h - c * d),
          t
        );
      }
      get x() {
        return this._x;
      }
      set x(t) {
        ((this._x = t), this._onChangeCallback());
      }
      get y() {
        return this._y;
      }
      set y(t) {
        ((this._y = t), this._onChangeCallback());
      }
      get z() {
        return this._z;
      }
      set z(t) {
        ((this._z = t), this._onChangeCallback());
      }
      get w() {
        return this._w;
      }
      set w(t) {
        ((this._w = t), this._onChangeCallback());
      }
      set(t, e, i, s) {
        return ((this._x = t), (this._y = e), (this._z = i), (this._w = s), this._onChangeCallback(), this);
      }
      clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      }
      copy(t) {
        return ((this._x = t.x), (this._y = t.y), (this._z = t.z), (this._w = t.w), this._onChangeCallback(), this);
      }
      setFromEuler(t, e = !0) {
        let i = t._x,
          s = t._y,
          r = t._z,
          a = t._order,
          o = Math.cos,
          l = Math.sin,
          c = o(i / 2),
          u = o(s / 2),
          f = o(r / 2),
          h = l(i / 2),
          d = l(s / 2),
          E = l(r / 2);
        switch (a) {
          case "XYZ":
            ((this._x = h * u * f + c * d * E),
              (this._y = c * d * f - h * u * E),
              (this._z = c * u * E + h * d * f),
              (this._w = c * u * f - h * d * E));
            break;
          case "YXZ":
            ((this._x = h * u * f + c * d * E),
              (this._y = c * d * f - h * u * E),
              (this._z = c * u * E - h * d * f),
              (this._w = c * u * f + h * d * E));
            break;
          case "ZXY":
            ((this._x = h * u * f - c * d * E),
              (this._y = c * d * f + h * u * E),
              (this._z = c * u * E + h * d * f),
              (this._w = c * u * f - h * d * E));
            break;
          case "ZYX":
            ((this._x = h * u * f - c * d * E),
              (this._y = c * d * f + h * u * E),
              (this._z = c * u * E - h * d * f),
              (this._w = c * u * f + h * d * E));
            break;
          case "YZX":
            ((this._x = h * u * f + c * d * E),
              (this._y = c * d * f + h * u * E),
              (this._z = c * u * E - h * d * f),
              (this._w = c * u * f - h * d * E));
            break;
          case "XZY":
            ((this._x = h * u * f - c * d * E),
              (this._y = c * d * f - h * u * E),
              (this._z = c * u * E + h * d * f),
              (this._w = c * u * f + h * d * E));
            break;
          default:
            Ht("Quaternion: .setFromEuler() encountered an unknown order: " + a);
        }
        return (e === !0 && this._onChangeCallback(), this);
      }
      setFromAxisAngle(t, e) {
        let i = e / 2,
          s = Math.sin(i);
        return (
          (this._x = t.x * s),
          (this._y = t.y * s),
          (this._z = t.z * s),
          (this._w = Math.cos(i)),
          this._onChangeCallback(),
          this
        );
      }
      setFromRotationMatrix(t) {
        let e = t.elements,
          i = e[0],
          s = e[4],
          r = e[8],
          a = e[1],
          o = e[5],
          l = e[9],
          c = e[2],
          u = e[6],
          f = e[10],
          h = i + o + f;
        if (h > 0) {
          let d = 0.5 / Math.sqrt(h + 1);
          ((this._w = 0.25 / d), (this._x = (u - l) * d), (this._y = (r - c) * d), (this._z = (a - s) * d));
        } else if (i > o && i > f) {
          let d = 2 * Math.sqrt(1 + i - o - f);
          ((this._w = (u - l) / d), (this._x = 0.25 * d), (this._y = (s + a) / d), (this._z = (r + c) / d));
        } else if (o > f) {
          let d = 2 * Math.sqrt(1 + o - i - f);
          ((this._w = (r - c) / d), (this._x = (s + a) / d), (this._y = 0.25 * d), (this._z = (l + u) / d));
        } else {
          let d = 2 * Math.sqrt(1 + f - i - o);
          ((this._w = (a - s) / d), (this._x = (r + c) / d), (this._y = (l + u) / d), (this._z = 0.25 * d));
        }
        return (this._onChangeCallback(), this);
      }
      setFromUnitVectors(t, e) {
        let i = t.dot(e) + 1;
        return (
          i < 1e-8
            ? ((i = 0),
              Math.abs(t.x) > Math.abs(t.z)
                ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = i))
                : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = i)))
            : ((this._x = t.y * e.z - t.z * e.y),
              (this._y = t.z * e.x - t.x * e.z),
              (this._z = t.x * e.y - t.y * e.x),
              (this._w = i)),
          this.normalize()
        );
      }
      angleTo(t) {
        return 2 * Math.acos(Math.abs(jt(this.dot(t), -1, 1)));
      }
      rotateTowards(t, e) {
        let i = this.angleTo(t);
        if (i === 0) return this;
        let s = Math.min(1, e / i);
        return (this.slerp(t, s), this);
      }
      identity() {
        return this.set(0, 0, 0, 1);
      }
      invert() {
        return this.conjugate();
      }
      conjugate() {
        return ((this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this);
      }
      dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
      }
      lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
      normalize() {
        let t = this.length();
        return (
          t === 0
            ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
            : ((t = 1 / t),
              (this._x = this._x * t),
              (this._y = this._y * t),
              (this._z = this._z * t),
              (this._w = this._w * t)),
          this._onChangeCallback(),
          this
        );
      }
      multiply(t) {
        return this.multiplyQuaternions(this, t);
      }
      premultiply(t) {
        return this.multiplyQuaternions(t, this);
      }
      multiplyQuaternions(t, e) {
        let i = t._x,
          s = t._y,
          r = t._z,
          a = t._w,
          o = e._x,
          l = e._y,
          c = e._z,
          u = e._w;
        return (
          (this._x = i * u + a * o + s * c - r * l),
          (this._y = s * u + a * l + r * o - i * c),
          (this._z = r * u + a * c + i * l - s * o),
          (this._w = a * u - i * o - s * l - r * c),
          this._onChangeCallback(),
          this
        );
      }
      slerp(t, e) {
        let i = t._x,
          s = t._y,
          r = t._z,
          a = t._w,
          o = this.dot(t);
        o < 0 && ((i = -i), (s = -s), (r = -r), (a = -a), (o = -o));
        let l = 1 - e;
        if (o < 0.9995) {
          let c = Math.acos(o),
            u = Math.sin(c);
          ((l = Math.sin(l * c) / u),
            (e = Math.sin(e * c) / u),
            (this._x = this._x * l + i * e),
            (this._y = this._y * l + s * e),
            (this._z = this._z * l + r * e),
            (this._w = this._w * l + a * e),
            this._onChangeCallback());
        } else
          ((this._x = this._x * l + i * e),
            (this._y = this._y * l + s * e),
            (this._z = this._z * l + r * e),
            (this._w = this._w * l + a * e),
            this.normalize());
        return this;
      }
      slerpQuaternions(t, e, i) {
        return this.copy(t).slerp(e, i);
      }
      random() {
        let t = 2 * Math.PI * Math.random(),
          e = 2 * Math.PI * Math.random(),
          i = Math.random(),
          s = Math.sqrt(1 - i),
          r = Math.sqrt(i);
        return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
      }
      equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
      }
      fromArray(t, e = 0) {
        return (
          (this._x = t[e]),
          (this._y = t[e + 1]),
          (this._z = t[e + 2]),
          (this._w = t[e + 3]),
          this._onChangeCallback(),
          this
        );
      }
      toArray(t = [], e = 0) {
        return ((t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._w), t);
      }
      fromBufferAttribute(t, e) {
        return (
          (this._x = t.getX(e)),
          (this._y = t.getY(e)),
          (this._z = t.getZ(e)),
          (this._w = t.getW(e)),
          this._onChangeCallback(),
          this
        );
      }
      toJSON() {
        return this.toArray();
      }
      _onChange(t) {
        return ((this._onChangeCallback = t), this);
      }
      _onChangeCallback() {}
      *[Symbol.iterator]() {
        (yield this._x, yield this._y, yield this._z, yield this._w);
      }
    },
    qc = class qc {
      constructor(t = 0, e = 0, i = 0) {
        ((this.x = t), (this.y = e), (this.z = i));
      }
      set(t, e, i) {
        return (i === void 0 && (i = this.z), (this.x = t), (this.y = e), (this.z = i), this);
      }
      setScalar(t) {
        return ((this.x = t), (this.y = t), (this.z = t), this);
      }
      setX(t) {
        return ((this.x = t), this);
      }
      setY(t) {
        return ((this.y = t), this);
      }
      setZ(t) {
        return ((this.z = t), this);
      }
      setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          case 2:
            this.z = e;
            break;
          default:
            throw new Error("THREE.Vector3: index is out of range: " + t);
        }
        return this;
      }
      getComponent(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          default:
            throw new Error("THREE.Vector3: index is out of range: " + t);
        }
      }
      clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
      copy(t) {
        return ((this.x = t.x), (this.y = t.y), (this.z = t.z), this);
      }
      add(t) {
        return ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
      }
      addScalar(t) {
        return ((this.x += t), (this.y += t), (this.z += t), this);
      }
      addVectors(t, e) {
        return ((this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this);
      }
      addScaledVector(t, e) {
        return ((this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this);
      }
      sub(t) {
        return ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
      }
      subScalar(t) {
        return ((this.x -= t), (this.y -= t), (this.z -= t), this);
      }
      subVectors(t, e) {
        return ((this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this);
      }
      multiply(t) {
        return ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
      }
      multiplyScalar(t) {
        return ((this.x *= t), (this.y *= t), (this.z *= t), this);
      }
      multiplyVectors(t, e) {
        return ((this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this);
      }
      applyEuler(t) {
        return this.applyQuaternion(Rl.setFromEuler(t));
      }
      applyAxisAngle(t, e) {
        return this.applyQuaternion(Rl.setFromAxisAngle(t, e));
      }
      applyMatrix3(t) {
        let e = this.x,
          i = this.y,
          s = this.z,
          r = t.elements;
        return (
          (this.x = r[0] * e + r[3] * i + r[6] * s),
          (this.y = r[1] * e + r[4] * i + r[7] * s),
          (this.z = r[2] * e + r[5] * i + r[8] * s),
          this
        );
      }
      applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize();
      }
      applyMatrix4(t) {
        let e = this.x,
          i = this.y,
          s = this.z,
          r = t.elements,
          a = 1 / (r[3] * e + r[7] * i + r[11] * s + r[15]);
        return (
          (this.x = (r[0] * e + r[4] * i + r[8] * s + r[12]) * a),
          (this.y = (r[1] * e + r[5] * i + r[9] * s + r[13]) * a),
          (this.z = (r[2] * e + r[6] * i + r[10] * s + r[14]) * a),
          this
        );
      }
      applyQuaternion(t) {
        let e = this.x,
          i = this.y,
          s = this.z,
          r = t.x,
          a = t.y,
          o = t.z,
          l = t.w,
          c = 2 * (a * s - o * i),
          u = 2 * (o * e - r * s),
          f = 2 * (r * i - a * e);
        return (
          (this.x = e + l * c + a * f - o * u),
          (this.y = i + l * u + o * c - r * f),
          (this.z = s + l * f + r * u - a * c),
          this
        );
      }
      project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
      }
      unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
      }
      transformDirection(t) {
        let e = this.x,
          i = this.y,
          s = this.z,
          r = t.elements;
        return (
          (this.x = r[0] * e + r[4] * i + r[8] * s),
          (this.y = r[1] * e + r[5] * i + r[9] * s),
          (this.z = r[2] * e + r[6] * i + r[10] * s),
          this.normalize()
        );
      }
      divide(t) {
        return ((this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this);
      }
      divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
      min(t) {
        return (
          (this.x = Math.min(this.x, t.x)),
          (this.y = Math.min(this.y, t.y)),
          (this.z = Math.min(this.z, t.z)),
          this
        );
      }
      max(t) {
        return (
          (this.x = Math.max(this.x, t.x)),
          (this.y = Math.max(this.y, t.y)),
          (this.z = Math.max(this.z, t.z)),
          this
        );
      }
      clamp(t, e) {
        return (
          (this.x = jt(this.x, t.x, e.x)),
          (this.y = jt(this.y, t.y, e.y)),
          (this.z = jt(this.z, t.z, e.z)),
          this
        );
      }
      clampScalar(t, e) {
        return ((this.x = jt(this.x, t, e)), (this.y = jt(this.y, t, e)), (this.z = jt(this.z, t, e)), this);
      }
      clampLength(t, e) {
        let i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(jt(i, t, e));
      }
      floor() {
        return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this);
      }
      ceil() {
        return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this);
      }
      round() {
        return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this);
      }
      roundToZero() {
        return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), (this.z = Math.trunc(this.z)), this);
      }
      negate() {
        return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
      }
      dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
      }
      lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
      manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      }
      normalize() {
        return this.divideScalar(this.length() || 1);
      }
      setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
      lerp(t, e) {
        return ((this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), (this.z += (t.z - this.z) * e), this);
      }
      lerpVectors(t, e, i) {
        return (
          (this.x = t.x + (e.x - t.x) * i),
          (this.y = t.y + (e.y - t.y) * i),
          (this.z = t.z + (e.z - t.z) * i),
          this
        );
      }
      cross(t) {
        return this.crossVectors(this, t);
      }
      crossVectors(t, e) {
        let i = t.x,
          s = t.y,
          r = t.z,
          a = e.x,
          o = e.y,
          l = e.z;
        return ((this.x = s * l - r * o), (this.y = r * a - i * l), (this.z = i * o - s * a), this);
      }
      projectOnVector(t) {
        let e = t.lengthSq();
        if (e === 0) return this.set(0, 0, 0);
        let i = t.dot(this) / e;
        return this.copy(t).multiplyScalar(i);
      }
      projectOnPlane(t) {
        return (Lo.copy(this).projectOnVector(t), this.sub(Lo));
      }
      reflect(t) {
        return this.sub(Lo.copy(t).multiplyScalar(2 * this.dot(t)));
      }
      angleTo(t) {
        let e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0) return Math.PI / 2;
        let i = this.dot(t) / e;
        return Math.acos(jt(i, -1, 1));
      }
      distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
      distanceToSquared(t) {
        let e = this.x - t.x,
          i = this.y - t.y,
          s = this.z - t.z;
        return e * e + i * i + s * s;
      }
      manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
      }
      setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
      }
      setFromSphericalCoords(t, e, i) {
        let s = Math.sin(e) * t;
        return ((this.x = s * Math.sin(i)), (this.y = Math.cos(e) * t), (this.z = s * Math.cos(i)), this);
      }
      setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
      }
      setFromCylindricalCoords(t, e, i) {
        return ((this.x = t * Math.sin(e)), (this.y = i), (this.z = t * Math.cos(e)), this);
      }
      setFromMatrixPosition(t) {
        let e = t.elements;
        return ((this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this);
      }
      setFromMatrixScale(t) {
        let e = this.setFromMatrixColumn(t, 0).length(),
          i = this.setFromMatrixColumn(t, 1).length(),
          s = this.setFromMatrixColumn(t, 2).length();
        return ((this.x = e), (this.y = i), (this.z = s), this);
      }
      setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, e * 4);
      }
      setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, e * 3);
      }
      setFromEuler(t) {
        return ((this.x = t._x), (this.y = t._y), (this.z = t._z), this);
      }
      setFromColor(t) {
        return ((this.x = t.r), (this.y = t.g), (this.z = t.b), this);
      }
      equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z;
      }
      fromArray(t, e = 0) {
        return ((this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this);
      }
      toArray(t = [], e = 0) {
        return ((t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t);
      }
      fromBufferAttribute(t, e) {
        return ((this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this);
      }
      random() {
        return ((this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this);
      }
      randomDirection() {
        let t = Math.random() * Math.PI * 2,
          e = Math.random() * 2 - 1,
          i = Math.sqrt(1 - e * e);
        return ((this.x = i * Math.cos(t)), (this.y = e), (this.z = i * Math.sin(t)), this);
      }
      *[Symbol.iterator]() {
        (yield this.x, yield this.y, yield this.z);
      }
    };
  qc.prototype.isVector3 = !0;
  var F = qc,
    Lo = new F(),
    Rl = new ye(),
    Gc = class Gc {
      constructor(t, e, i, s, r, a, o, l, c) {
        ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]), t !== void 0 && this.set(t, e, i, s, r, a, o, l, c));
      }
      set(t, e, i, s, r, a, o, l, c) {
        let u = this.elements;
        return (
          (u[0] = t),
          (u[1] = s),
          (u[2] = o),
          (u[3] = e),
          (u[4] = r),
          (u[5] = l),
          (u[6] = i),
          (u[7] = a),
          (u[8] = c),
          this
        );
      }
      identity() {
        return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
      }
      copy(t) {
        let e = this.elements,
          i = t.elements;
        return (
          (e[0] = i[0]),
          (e[1] = i[1]),
          (e[2] = i[2]),
          (e[3] = i[3]),
          (e[4] = i[4]),
          (e[5] = i[5]),
          (e[6] = i[6]),
          (e[7] = i[7]),
          (e[8] = i[8]),
          this
        );
      }
      extractBasis(t, e, i) {
        return (
          t.setFromMatrix3Column(this, 0),
          e.setFromMatrix3Column(this, 1),
          i.setFromMatrix3Column(this, 2),
          this
        );
      }
      setFromMatrix4(t) {
        let e = t.elements;
        return (this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this);
      }
      multiply(t) {
        return this.multiplyMatrices(this, t);
      }
      premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
      multiplyMatrices(t, e) {
        let i = t.elements,
          s = e.elements,
          r = this.elements,
          a = i[0],
          o = i[3],
          l = i[6],
          c = i[1],
          u = i[4],
          f = i[7],
          h = i[2],
          d = i[5],
          E = i[8],
          v = s[0],
          m = s[3],
          p = s[6],
          y = s[1],
          Q = s[4],
          S = s[7],
          M = s[2],
          P = s[5],
          T = s[8];
        return (
          (r[0] = a * v + o * y + l * M),
          (r[3] = a * m + o * Q + l * P),
          (r[6] = a * p + o * S + l * T),
          (r[1] = c * v + u * y + f * M),
          (r[4] = c * m + u * Q + f * P),
          (r[7] = c * p + u * S + f * T),
          (r[2] = h * v + d * y + E * M),
          (r[5] = h * m + d * Q + E * P),
          (r[8] = h * p + d * S + E * T),
          this
        );
      }
      multiplyScalar(t) {
        let e = this.elements;
        return (
          (e[0] *= t),
          (e[3] *= t),
          (e[6] *= t),
          (e[1] *= t),
          (e[4] *= t),
          (e[7] *= t),
          (e[2] *= t),
          (e[5] *= t),
          (e[8] *= t),
          this
        );
      }
      determinant() {
        let t = this.elements,
          e = t[0],
          i = t[1],
          s = t[2],
          r = t[3],
          a = t[4],
          o = t[5],
          l = t[6],
          c = t[7],
          u = t[8];
        return e * a * u - e * o * c - i * r * u + i * o * l + s * r * c - s * a * l;
      }
      invert() {
        let t = this.elements,
          e = t[0],
          i = t[1],
          s = t[2],
          r = t[3],
          a = t[4],
          o = t[5],
          l = t[6],
          c = t[7],
          u = t[8],
          f = u * a - o * c,
          h = o * l - u * r,
          d = c * r - a * l,
          E = e * f + i * h + s * d;
        if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let v = 1 / E;
        return (
          (t[0] = f * v),
          (t[1] = (s * c - u * i) * v),
          (t[2] = (o * i - s * a) * v),
          (t[3] = h * v),
          (t[4] = (u * e - s * l) * v),
          (t[5] = (s * r - o * e) * v),
          (t[6] = d * v),
          (t[7] = (i * l - c * e) * v),
          (t[8] = (a * e - i * r) * v),
          this
        );
      }
      transpose() {
        let t,
          e = this.elements;
        return (
          (t = e[1]),
          (e[1] = e[3]),
          (e[3] = t),
          (t = e[2]),
          (e[2] = e[6]),
          (e[6] = t),
          (t = e[5]),
          (e[5] = e[7]),
          (e[7] = t),
          this
        );
      }
      getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose();
      }
      transposeIntoArray(t) {
        let e = this.elements;
        return (
          (t[0] = e[0]),
          (t[1] = e[3]),
          (t[2] = e[6]),
          (t[3] = e[1]),
          (t[4] = e[4]),
          (t[5] = e[7]),
          (t[6] = e[2]),
          (t[7] = e[5]),
          (t[8] = e[8]),
          this
        );
      }
      setUvTransform(t, e, i, s, r, a, o) {
        let l = Math.cos(r),
          c = Math.sin(r);
        return (
          this.set(i * l, i * c, -i * (l * a + c * o) + a + t, -s * c, s * l, -s * (-c * a + l * o) + o + e, 0, 0, 1),
          this
        );
      }
      scale(t, e) {
        return (
          En("Matrix3: .scale() is deprecated. Use .makeScale() instead."),
          this.premultiply($o.makeScale(t, e)),
          this
        );
      }
      rotate(t) {
        return (
          En("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),
          this.premultiply($o.makeRotation(-t)),
          this
        );
      }
      translate(t, e) {
        return (
          En("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),
          this.premultiply($o.makeTranslation(t, e)),
          this
        );
      }
      makeTranslation(t, e) {
        return (t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this);
      }
      makeRotation(t) {
        let e = Math.cos(t),
          i = Math.sin(t);
        return (this.set(e, -i, 0, i, e, 0, 0, 0, 1), this);
      }
      makeScale(t, e) {
        return (this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this);
      }
      equals(t) {
        let e = this.elements,
          i = t.elements;
        for (let s = 0; s < 9; s++) if (e[s] !== i[s]) return !1;
        return !0;
      }
      fromArray(t, e = 0) {
        for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
        return this;
      }
      toArray(t = [], e = 0) {
        let i = this.elements;
        return (
          (t[e] = i[0]),
          (t[e + 1] = i[1]),
          (t[e + 2] = i[2]),
          (t[e + 3] = i[3]),
          (t[e + 4] = i[4]),
          (t[e + 5] = i[5]),
          (t[e + 6] = i[6]),
          (t[e + 7] = i[7]),
          (t[e + 8] = i[8]),
          t
        );
      }
      clone() {
        return new this.constructor().fromArray(this.elements);
      }
    };
  Gc.prototype.isMatrix3 = !0;
  var Gt = Gc,
    $o = new Gt(),
    Tl = new Gt().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322),
    Il = new Gt().set(
      3.2409699,
      -1.5373832,
      -0.4986108,
      -0.9692436,
      1.8759675,
      0.0415551,
      0.0556301,
      -0.203977,
      1.0569715,
    );
  function sd() {
    let n = {
        enabled: !0,
        workingColorSpace: xn,
        spaces: {},
        convert: function (s, r, a) {
          return (
            this.enabled === !1 ||
              r === a ||
              !r ||
              !a ||
              (this.spaces[r].transfer === oe && ((s.r = Hi(s.r)), (s.g = Hi(s.g)), (s.b = Hi(s.b))),
              this.spaces[r].primaries !== this.spaces[a].primaries &&
                (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)),
              this.spaces[a].transfer === oe && ((s.r = Dn(s.r)), (s.g = Dn(s.g)), (s.b = Dn(s.b)))),
            s
          );
        },
        workingToColorSpace: function (s, r) {
          return this.convert(s, this.workingColorSpace, r);
        },
        colorSpaceToWorking: function (s, r) {
          return this.convert(s, r, this.workingColorSpace);
        },
        getPrimaries: function (s) {
          return this.spaces[s].primaries;
        },
        getTransfer: function (s) {
          return s === $i ? Qs : this.spaces[s].transfer;
        },
        getToneMappingMode: function (s) {
          return this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard";
        },
        getLuminanceCoefficients: function (s, r = this.workingColorSpace) {
          return s.fromArray(this.spaces[r].luminanceCoefficients);
        },
        define: function (s) {
          Object.assign(this.spaces, s);
        },
        _getMatrix: function (s, r, a) {
          return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
        },
        _getDrawingBufferColorSpace: function (s) {
          return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
        },
        _getUnpackColorSpace: function (s = this.workingColorSpace) {
          return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
        },
        fromWorkingColorSpace: function (s, r) {
          return (
            En("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),
            n.workingToColorSpace(s, r)
          );
        },
        toWorkingColorSpace: function (s, r) {
          return (
            En("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),
            n.colorSpaceToWorking(s, r)
          );
        },
      },
      t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
      e = [0.2126, 0.7152, 0.0722],
      i = [0.3127, 0.329];
    return (
      n.define({
        [xn]: {
          primaries: t,
          whitePoint: i,
          transfer: Qs,
          toXYZ: Tl,
          fromXYZ: Il,
          luminanceCoefficients: e,
          workingColorSpaceConfig: { unpackColorSpace: Je },
          outputColorSpaceConfig: { drawingBufferColorSpace: Je },
        },
        [Je]: {
          primaries: t,
          whitePoint: i,
          transfer: oe,
          toXYZ: Tl,
          fromXYZ: Il,
          luminanceCoefficients: e,
          outputColorSpaceConfig: { drawingBufferColorSpace: Je },
        },
      }),
      n
    );
  }
  var Yt = sd();
  function Hi(n) {
    return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
  }
  function Dn(n) {
    return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
  }
  var An,
    jr = class {
      static getDataURL(t, e = "image/png") {
        if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
        let i;
        if (t instanceof HTMLCanvasElement) i = t;
        else {
          (An === void 0 && (An = Wn("canvas")), (An.width = t.width), (An.height = t.height));
          let s = An.getContext("2d");
          (t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), (i = An));
        }
        return i.toDataURL(e);
      }
      static sRGBToLinear(t) {
        if (
          (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement) ||
          (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement) ||
          (typeof ImageBitmap < "u" && t instanceof ImageBitmap)
        ) {
          let e = Wn("canvas");
          ((e.width = t.width), (e.height = t.height));
          let i = e.getContext("2d");
          i.drawImage(t, 0, 0, t.width, t.height);
          let s = i.getImageData(0, 0, t.width, t.height),
            r = s.data;
          for (let a = 0; a < r.length; a++) r[a] = Hi(r[a] / 255) * 255;
          return (i.putImageData(s, 0, 0), e);
        } else if (t.data) {
          let e = t.data.slice(0);
          for (let i = 0; i < e.length; i++)
            e instanceof Uint8Array || e instanceof Uint8ClampedArray
              ? (e[i] = Math.floor(Hi(e[i] / 255) * 255))
              : (e[i] = Hi(e[i]));
          return { data: e, width: t.width, height: t.height };
        } else return (Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t);
      }
    },
    rd = 0,
    Kn = class {
      constructor(t = null) {
        ((this.isTextureSource = !0),
          Object.defineProperty(this, "id", { value: rd++ }),
          (this.uuid = or()),
          (this.data = t),
          (this.dataReady = !0),
          (this.version = 0));
      }
      getSize(t) {
        let e = this.data;
        return (
          typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement
            ? t.set(e.videoWidth, e.videoHeight, 0)
            : typeof VideoFrame < "u" && e instanceof VideoFrame
              ? t.set(e.displayWidth, e.displayHeight, 0)
              : e !== null
                ? t.set(e.width, e.height, e.depth || 0)
                : t.set(0, 0, 0),
          t
        );
      }
      set needsUpdate(t) {
        t === !0 && this.version++;
      }
      toJSON(t) {
        let e = t === void 0 || typeof t == "string";
        if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
        let i = { uuid: this.uuid, url: "" },
          s = this.data;
        if (s !== null) {
          let r;
          if (Array.isArray(s)) {
            r = [];
            for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(zo(s[a].image)) : r.push(zo(s[a]));
          } else r = zo(s);
          i.url = r;
        }
        return (e || (t.images[this.uuid] = i), i);
      }
    };
  function zo(n) {
    return (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && n instanceof ImageBitmap)
      ? jr.getDataURL(n)
      : n.data
        ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name }
        : (Ht("Texture: Unable to serialize Texture."), {});
  }
  var ad = 0,
    Bo = new F(),
    We = class n extends yi {
      constructor(
        t = n.DEFAULT_IMAGE,
        e = n.DEFAULT_MAPPING,
        i = Si,
        s = Si,
        r = Qe,
        a = an,
        o = qe,
        l = He,
        c = n.DEFAULT_ANISOTROPY,
        u = $i,
      ) {
        (super(),
          (this.isTexture = !0),
          Object.defineProperty(this, "id", { value: ad++ }),
          (this.uuid = or()),
          (this.name = ""),
          (this.source = new Kn(t)),
          (this.mipmaps = []),
          (this.mapping = e),
          (this.channel = 0),
          (this.wrapS = i),
          (this.wrapT = s),
          (this.magFilter = r),
          (this.minFilter = a),
          (this.anisotropy = c),
          (this.format = o),
          (this.internalFormat = null),
          (this.type = l),
          (this.offset = new Ct(0, 0)),
          (this.repeat = new Ct(1, 1)),
          (this.center = new Ct(0, 0)),
          (this.rotation = 0),
          (this.matrixAutoUpdate = !0),
          (this.matrix = new Gt()),
          (this.generateMipmaps = !0),
          (this.premultiplyAlpha = !1),
          (this.flipY = !0),
          (this.unpackAlignment = 4),
          (this.colorSpace = u),
          (this.userData = {}),
          (this.updateRanges = []),
          (this.version = 0),
          (this.onUpdate = null),
          (this.renderTarget = null),
          (this.isRenderTargetTexture = !1),
          (this.isArrayTexture = !!(t && t.depth && t.depth > 1)),
          (this.pmremVersion = 0),
          (this.normalized = !1));
      }
      get width() {
        return this.source.getSize(Bo).x;
      }
      get height() {
        return this.source.getSize(Bo).y;
      }
      get depth() {
        return this.source.getSize(Bo).z;
      }
      get image() {
        return this.source.data;
      }
      set image(t) {
        this.source.data = t;
      }
      updateMatrix() {
        this.matrix.setUvTransform(
          this.offset.x,
          this.offset.y,
          this.repeat.x,
          this.repeat.y,
          this.rotation,
          this.center.x,
          this.center.y,
        );
      }
      addUpdateRange(t, e) {
        this.updateRanges.push({ start: t, count: e });
      }
      clearUpdateRanges() {
        this.updateRanges.length = 0;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        return (
          (this.name = t.name),
          (this.source = t.source),
          (this.mipmaps = t.mipmaps.slice(0)),
          (this.mapping = t.mapping),
          (this.channel = t.channel),
          (this.wrapS = t.wrapS),
          (this.wrapT = t.wrapT),
          (this.magFilter = t.magFilter),
          (this.minFilter = t.minFilter),
          (this.anisotropy = t.anisotropy),
          (this.format = t.format),
          (this.internalFormat = t.internalFormat),
          (this.type = t.type),
          (this.normalized = t.normalized),
          this.offset.copy(t.offset),
          this.repeat.copy(t.repeat),
          this.center.copy(t.center),
          (this.rotation = t.rotation),
          (this.matrixAutoUpdate = t.matrixAutoUpdate),
          this.matrix.copy(t.matrix),
          (this.generateMipmaps = t.generateMipmaps),
          (this.premultiplyAlpha = t.premultiplyAlpha),
          (this.flipY = t.flipY),
          (this.unpackAlignment = t.unpackAlignment),
          (this.colorSpace = t.colorSpace),
          (this.renderTarget = t.renderTarget),
          (this.isRenderTargetTexture = t.isRenderTargetTexture),
          (this.isArrayTexture = t.isArrayTexture),
          (this.userData = JSON.parse(JSON.stringify(t.userData))),
          (this.needsUpdate = !0),
          this
        );
      }
      setValues(t) {
        for (let e in t) {
          let i = t[e];
          if (i === void 0) {
            Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);
            continue;
          }
          let s = this[e];
          if (s === void 0) {
            Ht(`Texture.setValues(): property '${e}' does not exist.`);
            continue;
          }
          (s && i && s.isVector2 && i.isVector2) ||
          (s && i && s.isVector3 && i.isVector3) ||
          (s && i && s.isMatrix3 && i.isMatrix3)
            ? s.copy(i)
            : (this[e] = i);
        }
      }
      toJSON(t) {
        let e = t === void 0 || typeof t == "string";
        if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
        let i = {
          metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
          uuid: this.uuid,
          name: this.name,
          image: this.source.toJSON(t).uuid,
          mapping: this.mapping,
          channel: this.channel,
          repeat: [this.repeat.x, this.repeat.y],
          offset: [this.offset.x, this.offset.y],
          center: [this.center.x, this.center.y],
          rotation: this.rotation,
          wrap: [this.wrapS, this.wrapT],
          format: this.format,
          internalFormat: this.internalFormat,
          type: this.type,
          normalized: this.normalized,
          colorSpace: this.colorSpace,
          minFilter: this.minFilter,
          magFilter: this.magFilter,
          anisotropy: this.anisotropy,
          flipY: this.flipY,
          generateMipmaps: this.generateMipmaps,
          premultiplyAlpha: this.premultiplyAlpha,
          unpackAlignment: this.unpackAlignment,
        };
        return (
          Object.keys(this.userData).length > 0 && (i.userData = this.userData),
          e || (t.textures[this.uuid] = i),
          i
        );
      }
      dispose() {
        this.dispatchEvent({ type: "dispose" });
      }
      transformUv(t) {
        if (this.mapping !== Tc) return t;
        if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
          switch (this.wrapS) {
            case gn:
              t.x = t.x - Math.floor(t.x);
              break;
            case Si:
              t.x = t.x < 0 ? 0 : 1;
              break;
            case Zr:
              Math.abs(Math.floor(t.x) % 2) === 1 ? (t.x = Math.ceil(t.x) - t.x) : (t.x = t.x - Math.floor(t.x));
              break;
          }
        if (t.y < 0 || t.y > 1)
          switch (this.wrapT) {
            case gn:
              t.y = t.y - Math.floor(t.y);
              break;
            case Si:
              t.y = t.y < 0 ? 0 : 1;
              break;
            case Zr:
              Math.abs(Math.floor(t.y) % 2) === 1 ? (t.y = Math.ceil(t.y) - t.y) : (t.y = t.y - Math.floor(t.y));
              break;
          }
        return (this.flipY && (t.y = 1 - t.y), t);
      }
      set needsUpdate(t) {
        t === !0 && (this.version++, (this.source.needsUpdate = !0));
      }
      set needsPMREMUpdate(t) {
        t === !0 && this.pmremVersion++;
      }
    };
  We.DEFAULT_IMAGE = null;
  We.DEFAULT_MAPPING = Tc;
  We.DEFAULT_ANISOTROPY = 1;
  var Vc = class Vc {
    constructor(t = 0, e = 0, i = 0, s = 1) {
      ((this.x = t), (this.y = e), (this.z = i), (this.w = s));
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, i, s) {
      return ((this.x = t), (this.y = e), (this.z = i), (this.w = s), this);
    }
    setScalar(t) {
      return ((this.x = t), (this.y = t), (this.z = t), (this.w = t), this);
    }
    setX(t) {
      return ((this.x = t), this);
    }
    setY(t) {
      return ((this.y = t), this);
    }
    setZ(t) {
      return ((this.z = t), this);
    }
    setW(t) {
      return ((this.w = t), this);
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("THREE.Vector4: index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("THREE.Vector4: index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return ((this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w !== void 0 ? t.w : 1), this);
    }
    add(t) {
      return ((this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this);
    }
    addScalar(t) {
      return ((this.x += t), (this.y += t), (this.z += t), (this.w += t), this);
    }
    addVectors(t, e) {
      return ((this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), (this.w = t.w + e.w), this);
    }
    addScaledVector(t, e) {
      return ((this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), (this.w += t.w * e), this);
    }
    sub(t) {
      return ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this);
    }
    subScalar(t) {
      return ((this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this);
    }
    subVectors(t, e) {
      return ((this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), (this.w = t.w - e.w), this);
    }
    multiply(t) {
      return ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this);
    }
    multiplyScalar(t) {
      return ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this);
    }
    applyMatrix4(t) {
      let e = this.x,
        i = this.y,
        s = this.z,
        r = this.w,
        a = t.elements;
      return (
        (this.x = a[0] * e + a[4] * i + a[8] * s + a[12] * r),
        (this.y = a[1] * e + a[5] * i + a[9] * s + a[13] * r),
        (this.z = a[2] * e + a[6] * i + a[10] * s + a[14] * r),
        (this.w = a[3] * e + a[7] * i + a[11] * s + a[15] * r),
        this
      );
    }
    divide(t) {
      return ((this.x /= t.x), (this.y /= t.y), (this.z /= t.z), (this.w /= t.w), this);
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      let e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(t) {
      let e,
        i,
        s,
        r,
        l = t.elements,
        c = l[0],
        u = l[4],
        f = l[8],
        h = l[1],
        d = l[5],
        E = l[9],
        v = l[2],
        m = l[6],
        p = l[10];
      if (Math.abs(u - h) < 0.01 && Math.abs(f - v) < 0.01 && Math.abs(E - m) < 0.01) {
        if (Math.abs(u + h) < 0.1 && Math.abs(f + v) < 0.1 && Math.abs(E + m) < 0.1 && Math.abs(c + d + p - 3) < 0.1)
          return (this.set(1, 0, 0, 0), this);
        e = Math.PI;
        let Q = (c + 1) / 2,
          S = (d + 1) / 2,
          M = (p + 1) / 2,
          P = (u + h) / 4,
          T = (f + v) / 4,
          x = (E + m) / 4;
        return (
          Q > S && Q > M
            ? Q < 0.01
              ? ((i = 0), (s = 0.707106781), (r = 0.707106781))
              : ((i = Math.sqrt(Q)), (s = P / i), (r = T / i))
            : S > M
              ? S < 0.01
                ? ((i = 0.707106781), (s = 0), (r = 0.707106781))
                : ((s = Math.sqrt(S)), (i = P / s), (r = x / s))
              : M < 0.01
                ? ((i = 0.707106781), (s = 0.707106781), (r = 0))
                : ((r = Math.sqrt(M)), (i = T / r), (s = x / r)),
          this.set(i, s, r, e),
          this
        );
      }
      let y = Math.sqrt((m - E) * (m - E) + (f - v) * (f - v) + (h - u) * (h - u));
      return (
        Math.abs(y) < 0.001 && (y = 1),
        (this.x = (m - E) / y),
        (this.y = (f - v) / y),
        (this.z = (h - u) / y),
        (this.w = Math.acos((c + d + p - 1) / 2)),
        this
      );
    }
    setFromMatrixPosition(t) {
      let e = t.elements;
      return ((this.x = e[12]), (this.y = e[13]), (this.z = e[14]), (this.w = e[15]), this);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        (this.w = Math.min(this.w, t.w)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        (this.w = Math.max(this.w, t.w)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = jt(this.x, t.x, e.x)),
        (this.y = jt(this.y, t.y, e.y)),
        (this.z = jt(this.z, t.z, e.z)),
        (this.w = jt(this.w, t.w, e.w)),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = jt(this.x, t, e)),
        (this.y = jt(this.y, t, e)),
        (this.z = jt(this.z, t, e)),
        (this.w = jt(this.w, t, e)),
        this
      );
    }
    clampLength(t, e) {
      let i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(jt(i, t, e));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    }
    lerpVectors(t, e, i) {
      return (
        (this.x = t.x + (e.x - t.x) * i),
        (this.y = t.y + (e.y - t.y) * i),
        (this.z = t.z + (e.z - t.z) * i),
        (this.w = t.w + (e.w - t.w) * i),
        this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    }
    fromArray(t, e = 0) {
      return ((this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), (this.w = t[e + 3]), this);
    }
    toArray(t = [], e = 0) {
      return ((t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), t);
    }
    fromBufferAttribute(t, e) {
      return ((this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), (this.w = t.getW(e)), this);
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z, yield this.w);
    }
  };
  Vc.prototype.isVector4 = !0;
  var ne = Vc,
    ta = class extends yi {
      constructor(t = 1, e = 1, i = {}) {
        (super(),
          (i = Object.assign(
            {
              generateMipmaps: !1,
              internalFormat: null,
              minFilter: Qe,
              depthBuffer: !0,
              stencilBuffer: !1,
              resolveColorBuffer: !0,
              resolveDepthBuffer: !0,
              resolveStencilBuffer: !0,
              storeMultisampledColorBuffer: !0,
              storeMultisampledDepthBuffer: !0,
              storeMultisampledStencilBuffer: !0,
              depthTexture: null,
              samples: 0,
              count: 1,
              depth: 1,
              multiview: !1,
              useArrayDepthTexture: !1,
            },
            i,
          )),
          (this.isRenderTarget = !0),
          (this.width = t),
          (this.height = e),
          (this.depth = i.depth),
          (this.scissor = new ne(0, 0, t, e)),
          (this.scissorTest = !1),
          (this.viewport = new ne(0, 0, t, e)),
          (this.textures = []));
        let s = { width: t, height: e, depth: i.depth },
          r = new We(s),
          a = i.count;
        for (let o = 0; o < a; o++)
          ((this.textures[o] = r.clone()),
            (this.textures[o].isRenderTargetTexture = !0),
            (this.textures[o].renderTarget = this));
        (this._setTextureOptions(i),
          (this.depthBuffer = i.depthBuffer),
          (this.stencilBuffer = i.stencilBuffer),
          (this.resolveColorBuffer = i.resolveColorBuffer),
          (this.resolveDepthBuffer = i.resolveDepthBuffer),
          (this.resolveStencilBuffer = i.resolveStencilBuffer),
          (this.storeMultisampledColorBuffer = i.storeMultisampledColorBuffer),
          (this.storeMultisampledDepthBuffer = i.storeMultisampledDepthBuffer),
          (this.storeMultisampledStencilBuffer = i.storeMultisampledStencilBuffer),
          (this._depthTexture = null),
          (this.depthTexture = i.depthTexture),
          (this.samples = i.samples),
          (this.multiview = i.multiview),
          (this.useArrayDepthTexture = i.useArrayDepthTexture));
      }
      _setTextureOptions(t = {}) {
        let e = { minFilter: Qe, generateMipmaps: !1, flipY: !1, internalFormat: null };
        (t.mapping !== void 0 && (e.mapping = t.mapping),
          t.wrapS !== void 0 && (e.wrapS = t.wrapS),
          t.wrapT !== void 0 && (e.wrapT = t.wrapT),
          t.wrapR !== void 0 && (e.wrapR = t.wrapR),
          t.magFilter !== void 0 && (e.magFilter = t.magFilter),
          t.minFilter !== void 0 && (e.minFilter = t.minFilter),
          t.format !== void 0 && (e.format = t.format),
          t.type !== void 0 && (e.type = t.type),
          t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy),
          t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace),
          t.flipY !== void 0 && (e.flipY = t.flipY),
          t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps),
          t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat));
        for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(e);
      }
      get texture() {
        return this.textures[0];
      }
      set texture(t) {
        this.textures[0] = t;
      }
      set depthTexture(t) {
        (this._depthTexture !== null &&
          this._depthTexture.renderTarget === this &&
          (this._depthTexture.renderTarget = null),
          t !== null && t.renderTarget === null && (t.renderTarget = this),
          (this._depthTexture = t));
      }
      get depthTexture() {
        return this._depthTexture;
      }
      setSize(t, e, i = 1) {
        if (this.width !== t || this.height !== e || this.depth !== i) {
          ((this.width = t), (this.height = e), (this.depth = i));
          for (let s = 0, r = this.textures.length; s < r; s++)
            ((this.textures[s].image.width = t),
              (this.textures[s].image.height = e),
              (this.textures[s].image.depth = i),
              this.textures[s].isData3DTexture !== !0 &&
                (this.textures[s].isArrayTexture = this.textures[s].image.depth > 1));
          this.dispose();
        }
        (this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e));
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        ((this.width = t.width),
          (this.height = t.height),
          (this.depth = t.depth),
          this.scissor.copy(t.scissor),
          (this.scissorTest = t.scissorTest),
          this.viewport.copy(t.viewport),
          (this.textures.length = 0));
        for (let e = 0, i = t.textures.length; e < i; e++) {
          ((this.textures[e] = t.textures[e].clone()),
            (this.textures[e].isRenderTargetTexture = !0),
            (this.textures[e].renderTarget = this));
          let s = Object.assign({}, t.textures[e].image);
          this.textures[e].source = new Kn(s);
        }
        if (
          ((this.depthBuffer = t.depthBuffer),
          (this.stencilBuffer = t.stencilBuffer),
          (this.resolveColorBuffer = t.resolveColorBuffer),
          (this.resolveDepthBuffer = t.resolveDepthBuffer),
          (this.resolveStencilBuffer = t.resolveStencilBuffer),
          (this.storeMultisampledColorBuffer = t.storeMultisampledColorBuffer),
          (this.storeMultisampledDepthBuffer = t.storeMultisampledDepthBuffer),
          (this.storeMultisampledStencilBuffer = t.storeMultisampledStencilBuffer),
          t.depthTexture !== null)
        )
          if (t.depthTexture.renderTarget === t) {
            let e = t.depthTexture.clone();
            ((e.renderTarget = null), (this.depthTexture = e));
          } else this.depthTexture = t.depthTexture;
        return (
          (this.samples = t.samples),
          (this.multiview = t.multiview),
          (this.useArrayDepthTexture = t.useArrayDepthTexture),
          this
        );
      }
      dispose() {
        this.dispatchEvent({ type: "dispose" });
      }
    },
    Re = class extends ta {
      constructor(t = 1, e = 1, i = {}) {
        (super(t, e, i), (this.isWebGLRenderTarget = !0));
      }
    },
    Ts = class extends We {
      constructor(t = null, e = 1, i = 1, s = 1) {
        (super(null),
          (this.isDataArrayTexture = !0),
          (this.image = { data: t, width: e, height: i, depth: s }),
          (this.magFilter = Ce),
          (this.minFilter = Ce),
          (this.wrapR = Si),
          (this.generateMipmaps = !1),
          (this.flipY = !1),
          (this.unpackAlignment = 1),
          (this.layerUpdates = new Set()));
      }
      copy(t) {
        return (super.copy(t), (this.wrapR = t.wrapR), this);
      }
      addLayerUpdate(t) {
        this.layerUpdates.add(t);
      }
      clearLayerUpdates() {
        this.layerUpdates.clear();
      }
    };
  var Zn = class extends We {
    constructor(t = null, e = 1, i = 1, s = 1) {
      (super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: t, width: e, height: i, depth: s }),
        (this.magFilter = Ce),
        (this.minFilter = Ce),
        (this.wrapR = Si),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
    copy(t) {
      return (super.copy(t), (this.wrapR = t.wrapR), this);
    }
  };
  var Sa = class Sa {
    constructor(t, e, i, s, r, a, o, l, c, u, f, h, d, E, v, m) {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        t !== void 0 && this.set(t, e, i, s, r, a, o, l, c, u, f, h, d, E, v, m));
    }
    set(t, e, i, s, r, a, o, l, c, u, f, h, d, E, v, m) {
      let p = this.elements;
      return (
        (p[0] = t),
        (p[4] = e),
        (p[8] = i),
        (p[12] = s),
        (p[1] = r),
        (p[5] = a),
        (p[9] = o),
        (p[13] = l),
        (p[2] = c),
        (p[6] = u),
        (p[10] = f),
        (p[14] = h),
        (p[3] = d),
        (p[7] = E),
        (p[11] = v),
        (p[15] = m),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new Sa().fromArray(this.elements);
    }
    copy(t) {
      let e = this.elements,
        i = t.elements;
      return (
        (e[0] = i[0]),
        (e[1] = i[1]),
        (e[2] = i[2]),
        (e[3] = i[3]),
        (e[4] = i[4]),
        (e[5] = i[5]),
        (e[6] = i[6]),
        (e[7] = i[7]),
        (e[8] = i[8]),
        (e[9] = i[9]),
        (e[10] = i[10]),
        (e[11] = i[11]),
        (e[12] = i[12]),
        (e[13] = i[13]),
        (e[14] = i[14]),
        (e[15] = i[15]),
        this
      );
    }
    copyPosition(t) {
      let e = this.elements,
        i = t.elements;
      return ((e[12] = i[12]), (e[13] = i[13]), (e[14] = i[14]), this);
    }
    setFromMatrix3(t) {
      let e = t.elements;
      return (this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this);
    }
    extractBasis(t, e, i) {
      return this.determinantAffine() === 0
        ? (t.set(1, 0, 0), e.set(0, 1, 0), i.set(0, 0, 1), this)
        : (t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this);
    }
    makeBasis(t, e, i) {
      return (this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this);
    }
    extractRotation(t) {
      if (t.determinantAffine() === 0) return this.identity();
      let e = this.elements,
        i = t.elements,
        s = 1 / Fn.setFromMatrixColumn(t, 0).length(),
        r = 1 / Fn.setFromMatrixColumn(t, 1).length(),
        a = 1 / Fn.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = i[0] * s),
        (e[1] = i[1] * s),
        (e[2] = i[2] * s),
        (e[3] = 0),
        (e[4] = i[4] * r),
        (e[5] = i[5] * r),
        (e[6] = i[6] * r),
        (e[7] = 0),
        (e[8] = i[8] * a),
        (e[9] = i[9] * a),
        (e[10] = i[10] * a),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      let e = this.elements,
        i = t.x,
        s = t.y,
        r = t.z,
        a = Math.cos(i),
        o = Math.sin(i),
        l = Math.cos(s),
        c = Math.sin(s),
        u = Math.cos(r),
        f = Math.sin(r);
      if (t.order === "XYZ") {
        let h = a * u,
          d = a * f,
          E = o * u,
          v = o * f;
        ((e[0] = l * u),
          (e[4] = -l * f),
          (e[8] = c),
          (e[1] = d + E * c),
          (e[5] = h - v * c),
          (e[9] = -o * l),
          (e[2] = v - h * c),
          (e[6] = E + d * c),
          (e[10] = a * l));
      } else if (t.order === "YXZ") {
        let h = l * u,
          d = l * f,
          E = c * u,
          v = c * f;
        ((e[0] = h + v * o),
          (e[4] = E * o - d),
          (e[8] = a * c),
          (e[1] = a * f),
          (e[5] = a * u),
          (e[9] = -o),
          (e[2] = d * o - E),
          (e[6] = v + h * o),
          (e[10] = a * l));
      } else if (t.order === "ZXY") {
        let h = l * u,
          d = l * f,
          E = c * u,
          v = c * f;
        ((e[0] = h - v * o),
          (e[4] = -a * f),
          (e[8] = E + d * o),
          (e[1] = d + E * o),
          (e[5] = a * u),
          (e[9] = v - h * o),
          (e[2] = -a * c),
          (e[6] = o),
          (e[10] = a * l));
      } else if (t.order === "ZYX") {
        let h = a * u,
          d = a * f,
          E = o * u,
          v = o * f;
        ((e[0] = l * u),
          (e[4] = E * c - d),
          (e[8] = h * c + v),
          (e[1] = l * f),
          (e[5] = v * c + h),
          (e[9] = d * c - E),
          (e[2] = -c),
          (e[6] = o * l),
          (e[10] = a * l));
      } else if (t.order === "YZX") {
        let h = a * l,
          d = a * c,
          E = o * l,
          v = o * c;
        ((e[0] = l * u),
          (e[4] = v - h * f),
          (e[8] = E * f + d),
          (e[1] = f),
          (e[5] = a * u),
          (e[9] = -o * u),
          (e[2] = -c * u),
          (e[6] = d * f + E),
          (e[10] = h - v * f));
      } else if (t.order === "XZY") {
        let h = a * l,
          d = a * c,
          E = o * l,
          v = o * c;
        ((e[0] = l * u),
          (e[4] = -f),
          (e[8] = c * u),
          (e[1] = h * f + v),
          (e[5] = a * u),
          (e[9] = d * f - E),
          (e[2] = E * f - d),
          (e[6] = o * u),
          (e[10] = v * f + h));
      }
      return ((e[3] = 0), (e[7] = 0), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), this);
    }
    makeRotationFromQuaternion(t) {
      return this.compose(od, t, cd);
    }
    lookAt(t, e, i) {
      let s = this.elements;
      return (
        Ze.subVectors(t, e),
        Ze.lengthSq() === 0 && (Ze.z = 1),
        Ze.normalize(),
        Ji.crossVectors(i, Ze),
        Ji.lengthSq() === 0 &&
          (Math.abs(i.z) === 1 ? (Ze.x += 1e-4) : (Ze.z += 1e-4), Ze.normalize(), Ji.crossVectors(i, Ze)),
        Ji.normalize(),
        mr.crossVectors(Ze, Ji),
        (s[0] = Ji.x),
        (s[4] = mr.x),
        (s[8] = Ze.x),
        (s[1] = Ji.y),
        (s[5] = mr.y),
        (s[9] = Ze.y),
        (s[2] = Ji.z),
        (s[6] = mr.z),
        (s[10] = Ze.z),
        this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      let i = t.elements,
        s = e.elements,
        r = this.elements,
        a = i[0],
        o = i[4],
        l = i[8],
        c = i[12],
        u = i[1],
        f = i[5],
        h = i[9],
        d = i[13],
        E = i[2],
        v = i[6],
        m = i[10],
        p = i[14],
        y = i[3],
        Q = i[7],
        S = i[11],
        M = i[15],
        P = s[0],
        T = s[4],
        x = s[8],
        b = s[12],
        N = s[1],
        w = s[5],
        C = s[9],
        z = s[13],
        A = s[2],
        L = s[6],
        G = s[10],
        D = s[14],
        et = s[3],
        J = s[7],
        Y = s[11],
        it = s[15];
      return (
        (r[0] = a * P + o * N + l * A + c * et),
        (r[4] = a * T + o * w + l * L + c * J),
        (r[8] = a * x + o * C + l * G + c * Y),
        (r[12] = a * b + o * z + l * D + c * it),
        (r[1] = u * P + f * N + h * A + d * et),
        (r[5] = u * T + f * w + h * L + d * J),
        (r[9] = u * x + f * C + h * G + d * Y),
        (r[13] = u * b + f * z + h * D + d * it),
        (r[2] = E * P + v * N + m * A + p * et),
        (r[6] = E * T + v * w + m * L + p * J),
        (r[10] = E * x + v * C + m * G + p * Y),
        (r[14] = E * b + v * z + m * D + p * it),
        (r[3] = y * P + Q * N + S * A + M * et),
        (r[7] = y * T + Q * w + S * L + M * J),
        (r[11] = y * x + Q * C + S * G + M * Y),
        (r[15] = y * b + Q * z + S * D + M * it),
        this
      );
    }
    multiplyScalar(t) {
      let e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      let t = this.elements,
        e = t[0],
        i = t[4],
        s = t[8],
        r = t[12],
        a = t[1],
        o = t[5],
        l = t[9],
        c = t[13],
        u = t[2],
        f = t[6],
        h = t[10],
        d = t[14],
        E = t[3],
        v = t[7],
        m = t[11],
        p = t[15],
        y = l * d - c * h,
        Q = o * d - c * f,
        S = o * h - l * f,
        M = a * d - c * u,
        P = a * h - l * u,
        T = a * f - o * u;
      return (
        e * (v * y - m * Q + p * S) -
        i * (E * y - m * M + p * P) +
        s * (E * Q - v * M + p * T) -
        r * (E * S - v * P + m * T)
      );
    }
    determinantAffine() {
      let t = this.elements,
        e = t[0],
        i = t[4],
        s = t[8],
        r = t[1],
        a = t[5],
        o = t[9],
        l = t[2],
        c = t[6],
        u = t[10];
      return e * (a * u - o * c) - i * (r * u - o * l) + s * (r * c - a * l);
    }
    transpose() {
      let t = this.elements,
        e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, i) {
      let s = this.elements;
      return (
        t.isVector3 ? ((s[12] = t.x), (s[13] = t.y), (s[14] = t.z)) : ((s[12] = t), (s[13] = e), (s[14] = i)),
        this
      );
    }
    invert() {
      let t = this.elements,
        e = t[0],
        i = t[1],
        s = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        c = t[7],
        u = t[8],
        f = t[9],
        h = t[10],
        d = t[11],
        E = t[12],
        v = t[13],
        m = t[14],
        p = t[15],
        y = e * o - i * a,
        Q = e * l - s * a,
        S = e * c - r * a,
        M = i * l - s * o,
        P = i * c - r * o,
        T = s * c - r * l,
        x = u * v - f * E,
        b = u * m - h * E,
        N = u * p - d * E,
        w = f * m - h * v,
        C = f * p - d * v,
        z = h * p - d * m,
        A = y * z - Q * C + S * w + M * N - P * b + T * x;
      if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let L = 1 / A;
      return (
        (t[0] = (o * z - l * C + c * w) * L),
        (t[1] = (s * C - i * z - r * w) * L),
        (t[2] = (v * T - m * P + p * M) * L),
        (t[3] = (h * P - f * T - d * M) * L),
        (t[4] = (l * N - a * z - c * b) * L),
        (t[5] = (e * z - s * N + r * b) * L),
        (t[6] = (m * S - E * T - p * Q) * L),
        (t[7] = (u * T - h * S + d * Q) * L),
        (t[8] = (a * C - o * N + c * x) * L),
        (t[9] = (i * N - e * C - r * x) * L),
        (t[10] = (E * P - v * S + p * y) * L),
        (t[11] = (f * S - u * P - d * y) * L),
        (t[12] = (o * b - a * w - l * x) * L),
        (t[13] = (e * w - i * b + s * x) * L),
        (t[14] = (v * Q - E * M - m * y) * L),
        (t[15] = (u * M - f * Q + h * y) * L),
        this
      );
    }
    scale(t) {
      let e = this.elements,
        i = t.x,
        s = t.y,
        r = t.z;
      return (
        (e[0] *= i),
        (e[4] *= s),
        (e[8] *= r),
        (e[1] *= i),
        (e[5] *= s),
        (e[9] *= r),
        (e[2] *= i),
        (e[6] *= s),
        (e[10] *= r),
        (e[3] *= i),
        (e[7] *= s),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      let t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, i, s));
    }
    makeTranslation(t, e, i) {
      return (
        t.isVector3
          ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(t) {
      let e = Math.cos(t),
        i = Math.sin(t);
      return (this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(t) {
      let e = Math.cos(t),
        i = Math.sin(t);
      return (this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(t) {
      let e = Math.cos(t),
        i = Math.sin(t);
      return (this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(t, e) {
      let i = Math.cos(e),
        s = Math.sin(e),
        r = 1 - i,
        a = t.x,
        o = t.y,
        l = t.z,
        c = r * a,
        u = r * o;
      return (
        this.set(
          c * a + i,
          c * o - s * l,
          c * l + s * o,
          0,
          c * o + s * l,
          u * o + i,
          u * l - s * a,
          0,
          c * l - s * o,
          u * l + s * a,
          r * l * l + i,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    makeScale(t, e, i) {
      return (this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this);
    }
    makeShear(t, e, i, s, r, a) {
      return (this.set(1, i, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this);
    }
    compose(t, e, i) {
      let s = this.elements,
        r = e._x,
        a = e._y,
        o = e._z,
        l = e._w,
        c = r + r,
        u = a + a,
        f = o + o,
        h = r * c,
        d = r * u,
        E = r * f,
        v = a * u,
        m = a * f,
        p = o * f,
        y = l * c,
        Q = l * u,
        S = l * f,
        M = i.x,
        P = i.y,
        T = i.z;
      return (
        (s[0] = (1 - (v + p)) * M),
        (s[1] = (d + S) * M),
        (s[2] = (E - Q) * M),
        (s[3] = 0),
        (s[4] = (d - S) * P),
        (s[5] = (1 - (h + p)) * P),
        (s[6] = (m + y) * P),
        (s[7] = 0),
        (s[8] = (E + Q) * T),
        (s[9] = (m - y) * T),
        (s[10] = (1 - (h + v)) * T),
        (s[11] = 0),
        (s[12] = t.x),
        (s[13] = t.y),
        (s[14] = t.z),
        (s[15] = 1),
        this
      );
    }
    decompose(t, e, i) {
      let s = this.elements;
      ((t.x = s[12]), (t.y = s[13]), (t.z = s[14]));
      let r = this.determinantAffine();
      if (r === 0) return (i.set(1, 1, 1), e.identity(), this);
      let a = Fn.set(s[0], s[1], s[2]).length(),
        o = Fn.set(s[4], s[5], s[6]).length(),
        l = Fn.set(s[8], s[9], s[10]).length();
      (r < 0 && (a = -a), li.copy(this));
      let c = 1 / a,
        u = 1 / o,
        f = 1 / l;
      return (
        (li.elements[0] *= c),
        (li.elements[1] *= c),
        (li.elements[2] *= c),
        (li.elements[4] *= u),
        (li.elements[5] *= u),
        (li.elements[6] *= u),
        (li.elements[8] *= f),
        (li.elements[9] *= f),
        (li.elements[10] *= f),
        e.setFromRotationMatrix(li),
        (i.x = a),
        (i.y = o),
        (i.z = l),
        this
      );
    }
    makePerspective(t, e, i, s, r, a, o = fi, l = !1) {
      let c = this.elements,
        u = (2 * r) / (e - t),
        f = (2 * r) / (i - s),
        h = (e + t) / (e - t),
        d = (i + s) / (i - s),
        E,
        v;
      if (l) ((E = r / (a - r)), (v = (a * r) / (a - r)));
      else if (o === fi) ((E = -(a + r) / (a - r)), (v = (-2 * a * r) / (a - r)));
      else if (o === kn) ((E = -a / (a - r)), (v = (-a * r) / (a - r)));
      else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
      return (
        (c[0] = u),
        (c[4] = 0),
        (c[8] = h),
        (c[12] = 0),
        (c[1] = 0),
        (c[5] = f),
        (c[9] = d),
        (c[13] = 0),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = E),
        (c[14] = v),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = -1),
        (c[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, i, s, r, a, o = fi, l = !1) {
      let c = this.elements,
        u = 2 / (e - t),
        f = 2 / (i - s),
        h = -(e + t) / (e - t),
        d = -(i + s) / (i - s),
        E,
        v;
      if (l) ((E = 1 / (a - r)), (v = a / (a - r)));
      else if (o === fi) ((E = -2 / (a - r)), (v = -(a + r) / (a - r)));
      else if (o === kn) ((E = -1 / (a - r)), (v = -r / (a - r)));
      else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
      return (
        (c[0] = u),
        (c[4] = 0),
        (c[8] = 0),
        (c[12] = h),
        (c[1] = 0),
        (c[5] = f),
        (c[9] = 0),
        (c[13] = d),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = E),
        (c[14] = v),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = 0),
        (c[15] = 1),
        this
      );
    }
    equals(t) {
      let e = this.elements,
        i = t.elements;
      for (let s = 0; s < 16; s++) if (e[s] !== i[s]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
      return this;
    }
    toArray(t = [], e = 0) {
      let i = this.elements;
      return (
        (t[e] = i[0]),
        (t[e + 1] = i[1]),
        (t[e + 2] = i[2]),
        (t[e + 3] = i[3]),
        (t[e + 4] = i[4]),
        (t[e + 5] = i[5]),
        (t[e + 6] = i[6]),
        (t[e + 7] = i[7]),
        (t[e + 8] = i[8]),
        (t[e + 9] = i[9]),
        (t[e + 10] = i[10]),
        (t[e + 11] = i[11]),
        (t[e + 12] = i[12]),
        (t[e + 13] = i[13]),
        (t[e + 14] = i[14]),
        (t[e + 15] = i[15]),
        t
      );
    }
  };
  Sa.prototype.isMatrix4 = !0;
  var Vt = Sa,
    Fn = new F(),
    li = new Vt(),
    od = new F(0, 0, 0),
    cd = new F(1, 1, 1),
    Ji = new F(),
    mr = new F(),
    Ze = new F(),
    Al = new Vt(),
    Fl = new ye(),
    Ui = class n {
      constructor(t = 0, e = 0, i = 0, s = n.DEFAULT_ORDER) {
        ((this.isEuler = !0), (this._x = t), (this._y = e), (this._z = i), (this._order = s));
      }
      get x() {
        return this._x;
      }
      set x(t) {
        ((this._x = t), this._onChangeCallback());
      }
      get y() {
        return this._y;
      }
      set y(t) {
        ((this._y = t), this._onChangeCallback());
      }
      get z() {
        return this._z;
      }
      set z(t) {
        ((this._z = t), this._onChangeCallback());
      }
      get order() {
        return this._order;
      }
      set order(t) {
        ((this._order = t), this._onChangeCallback());
      }
      set(t, e, i, s = this._order) {
        return ((this._x = t), (this._y = e), (this._z = i), (this._order = s), this._onChangeCallback(), this);
      }
      clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      }
      copy(t) {
        return (
          (this._x = t._x),
          (this._y = t._y),
          (this._z = t._z),
          (this._order = t._order),
          this._onChangeCallback(),
          this
        );
      }
      setFromRotationMatrix(t, e = this._order, i = !0) {
        let s = t.elements,
          r = s[0],
          a = s[4],
          o = s[8],
          l = s[1],
          c = s[5],
          u = s[9],
          f = s[2],
          h = s[6],
          d = s[10];
        switch (e) {
          case "XYZ":
            ((this._y = Math.asin(jt(o, -1, 1))),
              Math.abs(o) < 0.9999999
                ? ((this._x = Math.atan2(-u, d)), (this._z = Math.atan2(-a, r)))
                : ((this._x = Math.atan2(h, c)), (this._z = 0)));
            break;
          case "YXZ":
            ((this._x = Math.asin(-jt(u, -1, 1))),
              Math.abs(u) < 0.9999999
                ? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(l, c)))
                : ((this._y = Math.atan2(-f, r)), (this._z = 0)));
            break;
          case "ZXY":
            ((this._x = Math.asin(jt(h, -1, 1))),
              Math.abs(h) < 0.9999999
                ? ((this._y = Math.atan2(-f, d)), (this._z = Math.atan2(-a, c)))
                : ((this._y = 0), (this._z = Math.atan2(l, r))));
            break;
          case "ZYX":
            ((this._y = Math.asin(-jt(f, -1, 1))),
              Math.abs(f) < 0.9999999
                ? ((this._x = Math.atan2(h, d)), (this._z = Math.atan2(l, r)))
                : ((this._x = 0), (this._z = Math.atan2(-a, c))));
            break;
          case "YZX":
            ((this._z = Math.asin(jt(l, -1, 1))),
              Math.abs(l) < 0.9999999
                ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, r)))
                : ((this._x = 0), (this._y = Math.atan2(o, d))));
            break;
          case "XZY":
            ((this._z = Math.asin(-jt(a, -1, 1))),
              Math.abs(a) < 0.9999999
                ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(o, r)))
                : ((this._x = Math.atan2(-u, d)), (this._y = 0)));
            break;
          default:
            Ht("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        }
        return ((this._order = e), i === !0 && this._onChangeCallback(), this);
      }
      setFromQuaternion(t, e, i) {
        return (Al.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Al, e, i));
      }
      setFromVector3(t, e = this._order) {
        return this.set(t.x, t.y, t.z, e);
      }
      reorder(t) {
        return (Fl.setFromEuler(this), this.setFromQuaternion(Fl, t));
      }
      equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
      }
      fromArray(t) {
        return (
          (this._x = t[0]),
          (this._y = t[1]),
          (this._z = t[2]),
          t[3] !== void 0 && (this._order = t[3]),
          this._onChangeCallback(),
          this
        );
      }
      toArray(t = [], e = 0) {
        return ((t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._order), t);
      }
      _onChange(t) {
        return ((this._onChangeCallback = t), this);
      }
      _onChangeCallback() {}
      *[Symbol.iterator]() {
        (yield this._x, yield this._y, yield this._z, yield this._order);
      }
    };
  Ui.DEFAULT_ORDER = "XYZ";
  var Is = class {
      constructor() {
        this.mask = 1;
      }
      set(t) {
        this.mask = ((1 << t) | 0) >>> 0;
      }
      enable(t) {
        this.mask |= (1 << t) | 0;
      }
      enableAll() {
        this.mask = -1;
      }
      toggle(t) {
        this.mask ^= (1 << t) | 0;
      }
      disable(t) {
        this.mask &= ~((1 << t) | 0);
      }
      disableAll() {
        this.mask = 0;
      }
      test(t) {
        return (this.mask & t.mask) !== 0;
      }
      isEnabled(t) {
        return (this.mask & ((1 << t) | 0)) !== 0;
      }
    },
    ld = 0,
    Nl = new F(),
    Nn = new ye(),
    Ii = new Vt(),
    Er = new F(),
    xs = new F(),
    hd = new F(),
    ud = new ye(),
    wl = new F(1, 0, 0),
    Cl = new F(0, 1, 0),
    Hl = new F(0, 0, 1),
    Ul = { type: "added" },
    dd = { type: "removed" },
    wn = { type: "childadded", child: null },
    qo = { type: "childremoved", child: null },
    Ae = class n extends yi {
      constructor() {
        (super(),
          (this.isObject3D = !0),
          Object.defineProperty(this, "id", { value: ld++ }),
          (this.uuid = or()),
          (this.name = ""),
          (this.type = "Object3D"),
          (this.parent = null),
          (this.children = []),
          (this.up = n.DEFAULT_UP.clone()));
        let t = new F(),
          e = new Ui(),
          i = new ye(),
          s = new F(1, 1, 1);
        function r() {
          i.setFromEuler(e, !1);
        }
        function a() {
          e.setFromQuaternion(i, void 0, !1);
        }
        (e._onChange(r),
          i._onChange(a),
          Object.defineProperties(this, {
            position: { configurable: !0, enumerable: !0, value: t },
            rotation: { configurable: !0, enumerable: !0, value: e },
            quaternion: { configurable: !0, enumerable: !0, value: i },
            scale: { configurable: !0, enumerable: !0, value: s },
            modelViewMatrix: { value: new Vt() },
            normalMatrix: { value: new Gt() },
          }),
          (this.matrix = new Vt()),
          (this.matrixWorld = new Vt()),
          (this.matrixAutoUpdate = n.DEFAULT_MATRIX_AUTO_UPDATE),
          (this.matrixWorldAutoUpdate = n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
          (this.matrixWorldNeedsUpdate = !1),
          (this.layers = new Is()),
          (this.visible = !0),
          (this.castShadow = !1),
          (this.receiveShadow = !1),
          (this.frustumCulled = !0),
          (this.renderOrder = 0),
          (this.animations = []),
          (this.customDepthMaterial = void 0),
          (this.customDistanceMaterial = void 0),
          (this.static = !1),
          (this.userData = {}),
          (this.pivot = null));
      }
      onBeforeShadow() {}
      onAfterShadow() {}
      onBeforeRender() {}
      onAfterRender() {}
      applyMatrix4(t) {
        (this.matrixAutoUpdate && this.updateMatrix(),
          this.matrix.premultiply(t),
          this.matrix.decompose(this.position, this.quaternion, this.scale));
      }
      applyQuaternion(t) {
        return (this.quaternion.premultiply(t), this);
      }
      setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e);
      }
      setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0);
      }
      setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t);
      }
      setRotationFromQuaternion(t) {
        this.quaternion.copy(t);
      }
      rotateOnAxis(t, e) {
        return (Nn.setFromAxisAngle(t, e), this.quaternion.multiply(Nn), this);
      }
      rotateOnWorldAxis(t, e) {
        return (Nn.setFromAxisAngle(t, e), this.quaternion.premultiply(Nn), this);
      }
      rotateX(t) {
        return this.rotateOnAxis(wl, t);
      }
      rotateY(t) {
        return this.rotateOnAxis(Cl, t);
      }
      rotateZ(t) {
        return this.rotateOnAxis(Hl, t);
      }
      translateOnAxis(t, e) {
        return (Nl.copy(t).applyQuaternion(this.quaternion), this.position.add(Nl.multiplyScalar(e)), this);
      }
      translateX(t) {
        return this.translateOnAxis(wl, t);
      }
      translateY(t) {
        return this.translateOnAxis(Cl, t);
      }
      translateZ(t) {
        return this.translateOnAxis(Hl, t);
      }
      localToWorld(t) {
        return (this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld));
      }
      worldToLocal(t) {
        return (this.updateWorldMatrix(!0, !1), t.applyMatrix4(Ii.copy(this.matrixWorld).invert()));
      }
      lookAt(t, e, i) {
        t.isVector3 ? Er.copy(t) : Er.set(t, e, i);
        let s = this.parent;
        (this.updateWorldMatrix(!0, !1),
          xs.setFromMatrixPosition(this.matrixWorld),
          this.isCamera || this.isLight ? Ii.lookAt(xs, Er, this.up) : Ii.lookAt(Er, xs, this.up),
          this.quaternion.setFromRotationMatrix(Ii),
          s &&
            (Ii.extractRotation(s.matrixWorld),
            Nn.setFromRotationMatrix(Ii),
            this.quaternion.premultiply(Nn.invert())));
      }
      add(t) {
        if (arguments.length > 1) {
          for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
          return this;
        }
        return t === this
          ? (Ot("Object3D.add: object can't be added as a child of itself.", t), this)
          : (t && t.isObject3D
              ? (t.removeFromParent(),
                (t.parent = this),
                this.children.push(t),
                t.dispatchEvent(Ul),
                (wn.child = t),
                this.dispatchEvent(wn),
                (wn.child = null))
              : Ot("Object3D.add: object not an instance of THREE.Object3D.", t),
            this);
      }
      remove(t) {
        if (arguments.length > 1) {
          for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
          return this;
        }
        let e = this.children.indexOf(t);
        return (
          e !== -1 &&
            ((t.parent = null),
            this.children.splice(e, 1),
            t.dispatchEvent(dd),
            (qo.child = t),
            this.dispatchEvent(qo),
            (qo.child = null)),
          this
        );
      }
      removeFromParent() {
        let t = this.parent;
        return (t !== null && t.remove(this), this);
      }
      clear() {
        return this.remove(...this.children);
      }
      attach(t) {
        return (
          this.updateWorldMatrix(!0, !1),
          Ii.copy(this.matrixWorld).invert(),
          t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Ii.multiply(t.parent.matrixWorld)),
          t.applyMatrix4(Ii),
          t.removeFromParent(),
          (t.parent = this),
          this.children.push(t),
          t.updateWorldMatrix(!1, !0),
          t.dispatchEvent(Ul),
          (wn.child = t),
          this.dispatchEvent(wn),
          (wn.child = null),
          this
        );
      }
      getObjectById(t) {
        return this.getObjectByProperty("id", t);
      }
      getObjectByName(t) {
        return this.getObjectByProperty("name", t);
      }
      getObjectByProperty(t, e) {
        if (this[t] === e) return this;
        for (let i = 0, s = this.children.length; i < s; i++) {
          let a = this.children[i].getObjectByProperty(t, e);
          if (a !== void 0) return a;
        }
      }
      getObjectsByProperty(t, e, i = []) {
        this[t] === e && i.push(this);
        let s = this.children;
        for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(t, e, i);
        return i;
      }
      getWorldPosition(t) {
        return (this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld));
      }
      getWorldQuaternion(t) {
        return (this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xs, t, hd), t);
      }
      getWorldScale(t) {
        return (this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xs, ud, t), t);
      }
      getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        let e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize();
      }
      raycast() {}
      intersectsFrustum() {}
      traverse(t) {
        t(this);
        let e = this.children;
        for (let i = 0, s = e.length; i < s; i++) e[i].traverse(t);
      }
      traverseVisible(t) {
        if (this.visible === !1) return;
        t(this);
        let e = this.children;
        for (let i = 0, s = e.length; i < s; i++) e[i].traverseVisible(t);
      }
      traverseAncestors(t) {
        let e = this.parent;
        e !== null && (t(e), e.traverseAncestors(t));
      }
      updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        let t = this.pivot;
        if (t !== null) {
          let e = t.x,
            i = t.y,
            s = t.z,
            r = this.matrix.elements;
          ((r[12] += e - r[0] * e - r[4] * i - r[8] * s),
            (r[13] += i - r[1] * e - r[5] * i - r[9] * s),
            (r[14] += s - r[2] * e - r[6] * i - r[10] * s));
        }
        this.matrixWorldNeedsUpdate = !0;
      }
      updateMatrixWorld(t) {
        (this.matrixAutoUpdate && this.updateMatrix(),
          (this.matrixWorldNeedsUpdate || t) &&
            (this.matrixWorldAutoUpdate === !0 &&
              (this.parent === null
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
            (this.matrixWorldNeedsUpdate = !1),
            (t = !0)));
        let e = this.children;
        for (let i = 0, s = e.length; i < s; i++) e[i].updateMatrixWorld(t);
      }
      updateWorldMatrix(t, e, i = !1) {
        let s = this.parent;
        if (
          (t === !0 && s !== null && s.updateWorldMatrix(!0, !1),
          this.matrixAutoUpdate && this.updateMatrix(),
          (this.matrixWorldNeedsUpdate || i) &&
            (this.matrixWorldAutoUpdate === !0 &&
              (this.parent === null
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
            (this.matrixWorldNeedsUpdate = !1),
            (i = !0)),
          e === !0)
        ) {
          let r = this.children;
          for (let a = 0, o = r.length; a < o; a++) r[a].updateWorldMatrix(!1, !0, i);
        }
      }
      toJSON(t) {
        let e = t === void 0 || typeof t == "string",
          i = {};
        e &&
          ((t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {},
          }),
          (i.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" }));
        let s = {};
        ((s.uuid = this.uuid),
          (s.type = this.type),
          (s.name = this.name),
          (s.castShadow = this.castShadow),
          (s.receiveShadow = this.receiveShadow),
          (s.visible = this.visible),
          (s.frustumCulled = this.frustumCulled),
          (s.renderOrder = this.renderOrder),
          (s.static = this.static),
          (s.matrixAutoUpdate = this.matrixAutoUpdate),
          Object.keys(this.userData).length > 0 && (s.userData = this.userData),
          (s.layers = this.layers.mask),
          (s.matrix = this.matrix.toArray()),
          (s.up = this.up.toArray()),
          this.pivot !== null && (s.pivot = this.pivot.toArray()),
          this.morphTargetDictionary !== void 0 &&
            (s.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)),
          this.morphTargetInfluences !== void 0 && (s.morphTargetInfluences = this.morphTargetInfluences.slice()),
          this.isInstancedMesh &&
            ((s.type = "InstancedMesh"),
            (s.count = this.count),
            (s.instanceMatrix = this.instanceMatrix.toJSON()),
            this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())),
          this.isBatchedMesh &&
            ((s.type = "BatchedMesh"),
            (s.perObjectFrustumCulled = this.perObjectFrustumCulled),
            (s.sortObjects = this.sortObjects),
            (s.drawRanges = this._drawRanges),
            (s.reservedRanges = this._reservedRanges),
            (s.geometryInfo = this._geometryInfo.map((o) => ({
              ...o,
              boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
              boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
            }))),
            (s.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
            (s.availableInstanceIds = this._availableInstanceIds.slice()),
            (s.availableGeometryIds = this._availableGeometryIds.slice()),
            (s.nextIndexStart = this._nextIndexStart),
            (s.nextVertexStart = this._nextVertexStart),
            (s.geometryCount = this._geometryCount),
            (s.maxInstanceCount = this._maxInstanceCount),
            (s.maxVertexCount = this._maxVertexCount),
            (s.maxIndexCount = this._maxIndexCount),
            (s.geometryInitialized = this._geometryInitialized),
            (s.matricesTexture = this._matricesTexture.toJSON(t)),
            (s.indirectTexture = this._indirectTexture.toJSON(t)),
            this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)),
            this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()),
            this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON())));
        function r(o, l) {
          return (o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid);
        }
        if (this.isScene)
          (this.background &&
            (this.background.isColor
              ? (s.background = this.background.toJSON())
              : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)),
            this.environment &&
              this.environment.isTexture &&
              this.environment.isRenderTargetTexture !== !0 &&
              (s.environment = this.environment.toJSON(t).uuid));
        else if (this.isMesh || this.isLine || this.isPoints) {
          s.geometry = r(t.geometries, this.geometry);
          let o = this.geometry.parameters;
          if (o !== void 0 && o.shapes !== void 0) {
            let l = o.shapes;
            if (Array.isArray(l))
              for (let c = 0, u = l.length; c < u; c++) {
                let f = l[c];
                r(t.shapes, f);
              }
            else r(t.shapes, l);
          }
        }
        if (
          (this.isSkinnedMesh &&
            ((s.bindMode = this.bindMode),
            (s.bindMatrix = this.bindMatrix.toArray()),
            this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), (s.skeleton = this.skeleton.uuid))),
          this.material !== void 0)
        )
          if (Array.isArray(this.material)) {
            let o = [];
            for (let l = 0, c = this.material.length; l < c; l++) o.push(r(t.materials, this.material[l]));
            s.material = o;
          } else s.material = r(t.materials, this.material);
        if (this.children.length > 0) {
          s.children = [];
          for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(t).object);
        }
        if (this.animations.length > 0) {
          s.animations = [];
          for (let o = 0; o < this.animations.length; o++) {
            let l = this.animations[o];
            s.animations.push(r(t.animations, l));
          }
        }
        if (e) {
          let o = a(t.geometries),
            l = a(t.materials),
            c = a(t.textures),
            u = a(t.images),
            f = a(t.shapes),
            h = a(t.skeletons),
            d = a(t.animations),
            E = a(t.nodes);
          (o.length > 0 && (i.geometries = o),
            l.length > 0 && (i.materials = l),
            c.length > 0 && (i.textures = c),
            u.length > 0 && (i.images = u),
            f.length > 0 && (i.shapes = f),
            h.length > 0 && (i.skeletons = h),
            d.length > 0 && (i.animations = d),
            E.length > 0 && (i.nodes = E));
        }
        return ((i.object = s), i);
        function a(o) {
          let l = [];
          for (let c in o) {
            let u = o[c];
            (delete u.metadata, l.push(u));
          }
          return l;
        }
      }
      clone(t) {
        return new this.constructor().copy(this, t);
      }
      copy(t, e = !0) {
        if (
          ((this.name = t.name),
          this.up.copy(t.up),
          this.position.copy(t.position),
          (this.rotation.order = t.rotation.order),
          this.quaternion.copy(t.quaternion),
          this.scale.copy(t.scale),
          (this.pivot = t.pivot !== null ? t.pivot.clone() : null),
          this.matrix.copy(t.matrix),
          this.matrixWorld.copy(t.matrixWorld),
          (this.matrixAutoUpdate = t.matrixAutoUpdate),
          (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
          (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
          (this.layers.mask = t.layers.mask),
          (this.visible = t.visible),
          (this.castShadow = t.castShadow),
          (this.receiveShadow = t.receiveShadow),
          (this.frustumCulled = t.frustumCulled),
          (this.renderOrder = t.renderOrder),
          (this.static = t.static),
          (this.animations = t.animations.slice()),
          (this.userData = JSON.parse(JSON.stringify(t.userData))),
          e === !0)
        )
          for (let i = 0; i < t.children.length; i++) {
            let s = t.children[i];
            this.add(s.clone());
          }
        return this;
      }
      dispose() {
        this.dispatchEvent({ type: "dispose" });
      }
    };
  Ae.DEFAULT_UP = new F(0, 1, 0);
  Ae.DEFAULT_MATRIX_AUTO_UPDATE = !0;
  Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
  var ke = class extends Ae {
      constructor() {
        (super(), (this.isGroup = !0), (this.type = "Group"));
      }
    },
    fd = { type: "move" },
    Yn = class {
      constructor() {
        ((this._targetRay = null), (this._grip = null), (this._hand = null));
      }
      getHandSpace() {
        return (
          this._hand === null &&
            ((this._hand = new ke()),
            (this._hand.matrixAutoUpdate = !1),
            (this._hand.visible = !1),
            (this._hand.joints = {}),
            (this._hand.inputState = { pinching: !1 })),
          this._hand
        );
      }
      getTargetRaySpace() {
        return (
          this._targetRay === null &&
            ((this._targetRay = new ke()),
            (this._targetRay.matrixAutoUpdate = !1),
            (this._targetRay.visible = !1),
            (this._targetRay.hasLinearVelocity = !1),
            (this._targetRay.linearVelocity = new F()),
            (this._targetRay.hasAngularVelocity = !1),
            (this._targetRay.angularVelocity = new F())),
          this._targetRay
        );
      }
      getGripSpace() {
        return (
          this._grip === null &&
            ((this._grip = new ke()),
            (this._grip.matrixAutoUpdate = !1),
            (this._grip.visible = !1),
            (this._grip.hasLinearVelocity = !1),
            (this._grip.linearVelocity = new F()),
            (this._grip.hasAngularVelocity = !1),
            (this._grip.angularVelocity = new F()),
            (this._grip.eventsEnabled = !1)),
          this._grip
        );
      }
      dispatchEvent(t) {
        return (
          this._targetRay !== null && this._targetRay.dispatchEvent(t),
          this._grip !== null && this._grip.dispatchEvent(t),
          this._hand !== null && this._hand.dispatchEvent(t),
          this
        );
      }
      connect(t) {
        if (t && t.hand) {
          let e = this._hand;
          if (e) for (let i of t.hand.values()) this._getHandJoint(e, i);
        }
        return (this.dispatchEvent({ type: "connected", data: t }), this);
      }
      disconnect(t) {
        return (
          this.dispatchEvent({ type: "disconnected", data: t }),
          this._targetRay !== null && (this._targetRay.visible = !1),
          this._grip !== null && (this._grip.visible = !1),
          this._hand !== null && (this._hand.visible = !1),
          this
        );
      }
      update(t, e, i) {
        let s = null,
          r = null,
          a = null,
          o = this._targetRay,
          l = this._grip,
          c = this._hand;
        if (t && e.session.visibilityState !== "visible-blurred") {
          if (c && t.hand) {
            a = !0;
            for (let v of t.hand.values()) {
              let m = e.getJointPose(v, i),
                p = this._getHandJoint(c, v);
              (m !== null &&
                (p.matrix.fromArray(m.transform.matrix),
                p.matrix.decompose(p.position, p.rotation, p.scale),
                (p.matrixWorldNeedsUpdate = !0),
                (p.jointRadius = m.radius)),
                (p.visible = m !== null));
            }
            let u = c.joints["index-finger-tip"],
              f = c.joints["thumb-tip"],
              h = u.position.distanceTo(f.position),
              d = 0.02,
              E = 0.005;
            c.inputState.pinching && h > d + E
              ? ((c.inputState.pinching = !1),
                this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this }))
              : !c.inputState.pinching &&
                h <= d - E &&
                ((c.inputState.pinching = !0),
                this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
          } else
            l !== null &&
              t.gripSpace &&
              ((r = e.getPose(t.gripSpace, i)),
              r !== null &&
                (l.matrix.fromArray(r.transform.matrix),
                l.matrix.decompose(l.position, l.rotation, l.scale),
                (l.matrixWorldNeedsUpdate = !0),
                r.linearVelocity
                  ? ((l.hasLinearVelocity = !0), l.linearVelocity.copy(r.linearVelocity))
                  : (l.hasLinearVelocity = !1),
                r.angularVelocity
                  ? ((l.hasAngularVelocity = !0), l.angularVelocity.copy(r.angularVelocity))
                  : (l.hasAngularVelocity = !1),
                l.eventsEnabled && l.dispatchEvent({ type: "gripUpdated", data: t, target: this })));
          o !== null &&
            ((s = e.getPose(t.targetRaySpace, i)),
            s === null && r !== null && (s = r),
            s !== null &&
              (o.matrix.fromArray(s.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              (o.matrixWorldNeedsUpdate = !0),
              s.linearVelocity
                ? ((o.hasLinearVelocity = !0), o.linearVelocity.copy(s.linearVelocity))
                : (o.hasLinearVelocity = !1),
              s.angularVelocity
                ? ((o.hasAngularVelocity = !0), o.angularVelocity.copy(s.angularVelocity))
                : (o.hasAngularVelocity = !1),
              this.dispatchEvent(fd)));
        }
        return (
          o !== null && (o.visible = s !== null),
          l !== null && (l.visible = r !== null),
          c !== null && (c.visible = a !== null),
          this
        );
      }
      _getHandJoint(t, e) {
        if (t.joints[e.jointName] === void 0) {
          let i = new ke();
          ((i.matrixAutoUpdate = !1), (i.visible = !1), (t.joints[e.jointName] = i), t.add(i));
        }
        return t.joints[e.jointName];
      }
    },
    Oh = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    ki = { h: 0, s: 0, l: 0 },
    gr = { h: 0, s: 0, l: 0 };
  function Go(n, t, e) {
    return (
      e < 0 && (e += 1),
      e > 1 && (e -= 1),
      e < 1 / 6 ? n + (t - n) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? n + (t - n) * 6 * (2 / 3 - e) : n
    );
  }
  var Tt = class {
      constructor(t, e, i) {
        return ((this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), this.set(t, e, i));
      }
      set(t, e, i) {
        if (e === void 0 && i === void 0) {
          let s = t;
          s && s.isColor
            ? this.copy(s)
            : typeof s == "number"
              ? this.setHex(s)
              : typeof s == "string" && this.setStyle(s);
        } else this.setRGB(t, e, i);
        return this;
      }
      setScalar(t) {
        return ((this.r = t), (this.g = t), (this.b = t), this);
      }
      setHex(t, e = Je) {
        return (
          (t = Math.floor(t)),
          (this.r = ((t >> 16) & 255) / 255),
          (this.g = ((t >> 8) & 255) / 255),
          (this.b = (t & 255) / 255),
          Yt.colorSpaceToWorking(this, e),
          this
        );
      }
      setRGB(t, e, i, s = Yt.workingColorSpace) {
        return ((this.r = t), (this.g = e), (this.b = i), Yt.colorSpaceToWorking(this, s), this);
      }
      setHSL(t, e, i, s = Yt.workingColorSpace) {
        if (((t = nd(t, 1)), (e = jt(e, 0, 1)), (i = jt(i, 0, 1)), e === 0)) this.r = this.g = this.b = i;
        else {
          let r = i <= 0.5 ? i * (1 + e) : i + e - i * e,
            a = 2 * i - r;
          ((this.r = Go(a, r, t + 1 / 3)), (this.g = Go(a, r, t)), (this.b = Go(a, r, t - 1 / 3)));
        }
        return (Yt.colorSpaceToWorking(this, s), this);
      }
      setStyle(t, e = Je) {
        function i(r) {
          r !== void 0 && parseFloat(r) < 1 && Ht("Color: Alpha component of " + t + " will be ignored.");
        }
        let s;
        if ((s = /^(\w+)\(([^\)]*)\)/.exec(t))) {
          let r,
            a = s[1],
            o = s[2];
          switch (a) {
            case "rgb":
            case "rgba":
              if ((r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
                return (
                  i(r[4]),
                  this.setRGB(
                    Math.min(255, parseInt(r[1], 10)) / 255,
                    Math.min(255, parseInt(r[2], 10)) / 255,
                    Math.min(255, parseInt(r[3], 10)) / 255,
                    e,
                  )
                );
              if ((r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
                return (
                  i(r[4]),
                  this.setRGB(
                    Math.min(100, parseInt(r[1], 10)) / 100,
                    Math.min(100, parseInt(r[2], 10)) / 100,
                    Math.min(100, parseInt(r[3], 10)) / 100,
                    e,
                  )
                );
              break;
            case "hsl":
            case "hsla":
              if ((r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
                return (
                  i(r[4]),
                  this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e)
                );
              break;
            default:
              Ht("Color: Unknown color model " + t);
          }
        } else if ((s = /^\#([A-Fa-f\d]+)$/.exec(t))) {
          let r = s[1],
            a = r.length;
          if (a === 3)
            return this.setRGB(
              parseInt(r.charAt(0), 16) / 15,
              parseInt(r.charAt(1), 16) / 15,
              parseInt(r.charAt(2), 16) / 15,
              e,
            );
          if (a === 6) return this.setHex(parseInt(r, 16), e);
          Ht("Color: Invalid hex color " + t);
        } else if (t && t.length > 0) return this.setColorName(t, e);
        return this;
      }
      setColorName(t, e = Je) {
        let i = Oh[t.toLowerCase()];
        return (i !== void 0 ? this.setHex(i, e) : Ht("Color: Unknown color " + t), this);
      }
      clone() {
        return new this.constructor(this.r, this.g, this.b);
      }
      copy(t) {
        return ((this.r = t.r), (this.g = t.g), (this.b = t.b), this);
      }
      copySRGBToLinear(t) {
        return ((this.r = Hi(t.r)), (this.g = Hi(t.g)), (this.b = Hi(t.b)), this);
      }
      copyLinearToSRGB(t) {
        return ((this.r = Dn(t.r)), (this.g = Dn(t.g)), (this.b = Dn(t.b)), this);
      }
      convertSRGBToLinear() {
        return (this.copySRGBToLinear(this), this);
      }
      convertLinearToSRGB() {
        return (this.copyLinearToSRGB(this), this);
      }
      getHex(t = Je) {
        return (
          Yt.workingToColorSpace(Be.copy(this), t),
          Math.round(jt(Be.r * 255, 0, 255)) * 65536 +
            Math.round(jt(Be.g * 255, 0, 255)) * 256 +
            Math.round(jt(Be.b * 255, 0, 255))
        );
      }
      getHexString(t = Je) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6);
      }
      getHSL(t, e = Yt.workingColorSpace) {
        Yt.workingToColorSpace(Be.copy(this), e);
        let i = Be.r,
          s = Be.g,
          r = Be.b,
          a = Math.max(i, s, r),
          o = Math.min(i, s, r),
          l,
          c,
          u = (o + a) / 2;
        if (o === a) ((l = 0), (c = 0));
        else {
          let f = a - o;
          switch (((c = u <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
            case i:
              l = (s - r) / f + (s < r ? 6 : 0);
              break;
            case s:
              l = (r - i) / f + 2;
              break;
            case r:
              l = (i - s) / f + 4;
              break;
          }
          l /= 6;
        }
        return ((t.h = l), (t.s = c), (t.l = u), t);
      }
      getRGB(t, e = Yt.workingColorSpace) {
        return (Yt.workingToColorSpace(Be.copy(this), e), (t.r = Be.r), (t.g = Be.g), (t.b = Be.b), t);
      }
      getStyle(t = Je) {
        Yt.workingToColorSpace(Be.copy(this), t);
        let e = Be.r,
          i = Be.g,
          s = Be.b;
        return t !== Je
          ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`
          : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
      }
      offsetHSL(t, e, i) {
        return (this.getHSL(ki), this.setHSL(ki.h + t, ki.s + e, ki.l + i));
      }
      add(t) {
        return ((this.r += t.r), (this.g += t.g), (this.b += t.b), this);
      }
      addColors(t, e) {
        return ((this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this);
      }
      addScalar(t) {
        return ((this.r += t), (this.g += t), (this.b += t), this);
      }
      sub(t) {
        return (
          (this.r = Math.max(0, this.r - t.r)),
          (this.g = Math.max(0, this.g - t.g)),
          (this.b = Math.max(0, this.b - t.b)),
          this
        );
      }
      multiply(t) {
        return ((this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this);
      }
      multiplyScalar(t) {
        return ((this.r *= t), (this.g *= t), (this.b *= t), this);
      }
      lerp(t, e) {
        return ((this.r += (t.r - this.r) * e), (this.g += (t.g - this.g) * e), (this.b += (t.b - this.b) * e), this);
      }
      lerpColors(t, e, i) {
        return (
          (this.r = t.r + (e.r - t.r) * i),
          (this.g = t.g + (e.g - t.g) * i),
          (this.b = t.b + (e.b - t.b) * i),
          this
        );
      }
      lerpHSL(t, e) {
        (this.getHSL(ki), t.getHSL(gr));
        let i = Oo(ki.h, gr.h, e),
          s = Oo(ki.s, gr.s, e),
          r = Oo(ki.l, gr.l, e);
        return (this.setHSL(i, s, r), this);
      }
      setFromVector3(t) {
        return ((this.r = t.x), (this.g = t.y), (this.b = t.z), this);
      }
      applyMatrix3(t) {
        let e = this.r,
          i = this.g,
          s = this.b,
          r = t.elements;
        return (
          (this.r = r[0] * e + r[3] * i + r[6] * s),
          (this.g = r[1] * e + r[4] * i + r[7] * s),
          (this.b = r[2] * e + r[5] * i + r[8] * s),
          this
        );
      }
      equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
      }
      fromArray(t, e = 0) {
        return ((this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this);
      }
      toArray(t = [], e = 0) {
        return ((t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t);
      }
      fromBufferAttribute(t, e) {
        return ((this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this);
      }
      toJSON() {
        return this.getHex();
      }
      *[Symbol.iterator]() {
        (yield this.r, yield this.g, yield this.b);
      }
    },
    Be = new Tt();
  Tt.NAMES = Oh;
  var As = class extends Ae {
      constructor() {
        (super(),
          (this.isScene = !0),
          (this.type = "Scene"),
          (this.background = null),
          (this.environment = null),
          (this.fog = null),
          (this.backgroundBlurriness = 0),
          (this.backgroundIntensity = 1),
          (this.backgroundRotation = new Ui()),
          (this.environmentIntensity = 1),
          (this.environmentRotation = new Ui()),
          (this.overrideMaterial = null),
          typeof __THREE_DEVTOOLS__ < "u" &&
            __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })));
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          t.background !== null && (this.background = t.background.clone()),
          t.environment !== null && (this.environment = t.environment.clone()),
          t.fog !== null && (this.fog = t.fog.clone()),
          (this.backgroundBlurriness = t.backgroundBlurriness),
          (this.backgroundIntensity = t.backgroundIntensity),
          this.backgroundRotation.copy(t.backgroundRotation),
          (this.environmentIntensity = t.environmentIntensity),
          this.environmentRotation.copy(t.environmentRotation),
          t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()),
          (this.matrixAutoUpdate = t.matrixAutoUpdate),
          this
        );
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return (
          this.fog !== null && (e.object.fog = this.fog.toJSON()),
          (e.object.backgroundBlurriness = this.backgroundBlurriness),
          (e.object.backgroundIntensity = this.backgroundIntensity),
          (e.object.backgroundRotation = this.backgroundRotation.toArray()),
          (e.object.environmentIntensity = this.environmentIntensity),
          (e.object.environmentRotation = this.environmentRotation.toArray()),
          e
        );
      }
    },
    hi = new F(),
    Ai = new F(),
    Vo = new F(),
    Fi = new F(),
    Cn = new F(),
    Hn = new F(),
    Ol = new F(),
    Do = new F(),
    Jo = new F(),
    ko = new F(),
    Wo = new ne(),
    Xo = new ne(),
    Ko = new ne(),
    Ci = class n {
      constructor(t = new F(), e = new F(), i = new F()) {
        ((this.a = t), (this.b = e), (this.c = i));
      }
      static getNormal(t, e, i, s) {
        (s.subVectors(i, e), hi.subVectors(t, e), s.cross(hi));
        let r = s.lengthSq();
        return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
      }
      static getBarycoord(t, e, i, s, r) {
        (hi.subVectors(s, e), Ai.subVectors(i, e), Vo.subVectors(t, e));
        let a = hi.dot(hi),
          o = hi.dot(Ai),
          l = hi.dot(Vo),
          c = Ai.dot(Ai),
          u = Ai.dot(Vo),
          f = a * c - o * o;
        if (f === 0) return (r.set(0, 0, 0), null);
        let h = 1 / f,
          d = (c * l - o * u) * h,
          E = (a * u - o * l) * h;
        return r.set(1 - d - E, E, d);
      }
      static containsPoint(t, e, i, s) {
        return this.getBarycoord(t, e, i, s, Fi) === null ? !1 : Fi.x >= 0 && Fi.y >= 0 && Fi.x + Fi.y <= 1;
      }
      static getInterpolation(t, e, i, s, r, a, o, l) {
        return this.getBarycoord(t, e, i, s, Fi) === null
          ? ((l.x = 0), (l.y = 0), "z" in l && (l.z = 0), "w" in l && (l.w = 0), null)
          : (l.setScalar(0), l.addScaledVector(r, Fi.x), l.addScaledVector(a, Fi.y), l.addScaledVector(o, Fi.z), l);
      }
      static getInterpolatedAttribute(t, e, i, s, r, a) {
        return (
          Wo.setScalar(0),
          Xo.setScalar(0),
          Ko.setScalar(0),
          Wo.fromBufferAttribute(t, e),
          Xo.fromBufferAttribute(t, i),
          Ko.fromBufferAttribute(t, s),
          a.setScalar(0),
          a.addScaledVector(Wo, r.x),
          a.addScaledVector(Xo, r.y),
          a.addScaledVector(Ko, r.z),
          a
        );
      }
      static isFrontFacing(t, e, i, s) {
        return (hi.subVectors(i, e), Ai.subVectors(t, e), hi.cross(Ai).dot(s) < 0);
      }
      set(t, e, i) {
        return (this.a.copy(t), this.b.copy(e), this.c.copy(i), this);
      }
      setFromPointsAndIndices(t, e, i, s) {
        return (this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[s]), this);
      }
      setFromAttributeAndIndices(t, e, i, s) {
        return (
          this.a.fromBufferAttribute(t, e),
          this.b.fromBufferAttribute(t, i),
          this.c.fromBufferAttribute(t, s),
          this
        );
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        return (this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this);
      }
      getArea() {
        return (hi.subVectors(this.c, this.b), Ai.subVectors(this.a, this.b), hi.cross(Ai).length() * 0.5);
      }
      getMidpoint(t) {
        return t
          .addVectors(this.a, this.b)
          .add(this.c)
          .multiplyScalar(1 / 3);
      }
      getNormal(t) {
        return n.getNormal(this.a, this.b, this.c, t);
      }
      getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c);
      }
      getBarycoord(t, e) {
        return n.getBarycoord(t, this.a, this.b, this.c, e);
      }
      getInterpolation(t, e, i, s, r) {
        return n.getInterpolation(t, this.a, this.b, this.c, e, i, s, r);
      }
      containsPoint(t) {
        return n.containsPoint(t, this.a, this.b, this.c);
      }
      isFrontFacing(t) {
        return n.isFrontFacing(this.a, this.b, this.c, t);
      }
      intersectsBox(t) {
        return t.intersectsTriangle(this);
      }
      closestPointToPoint(t, e) {
        let i = this.a,
          s = this.b,
          r = this.c,
          a,
          o;
        (Cn.subVectors(s, i), Hn.subVectors(r, i), Do.subVectors(t, i));
        let l = Cn.dot(Do),
          c = Hn.dot(Do);
        if (l <= 0 && c <= 0) return e.copy(i);
        Jo.subVectors(t, s);
        let u = Cn.dot(Jo),
          f = Hn.dot(Jo);
        if (u >= 0 && f <= u) return e.copy(s);
        let h = l * f - u * c;
        if (h <= 0 && l >= 0 && u <= 0) return ((a = l / (l - u)), e.copy(i).addScaledVector(Cn, a));
        ko.subVectors(t, r);
        let d = Cn.dot(ko),
          E = Hn.dot(ko);
        if (E >= 0 && d <= E) return e.copy(r);
        let v = d * c - l * E;
        if (v <= 0 && c >= 0 && E <= 0) return ((o = c / (c - E)), e.copy(i).addScaledVector(Hn, o));
        let m = u * E - d * f;
        if (m <= 0 && f - u >= 0 && d - E >= 0)
          return (Ol.subVectors(r, s), (o = (f - u) / (f - u + (d - E))), e.copy(s).addScaledVector(Ol, o));
        let p = 1 / (m + v + h);
        return ((a = v * p), (o = h * p), e.copy(i).addScaledVector(Cn, a).addScaledVector(Hn, o));
      }
      equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
      }
    },
    Mi = class {
      constructor(t = new F(1 / 0, 1 / 0, 1 / 0), e = new F(-1 / 0, -1 / 0, -1 / 0)) {
        ((this.isBox3 = !0), (this.min = t), (this.max = e));
      }
      set(t, e) {
        return (this.min.copy(t), this.max.copy(e), this);
      }
      setFromArray(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e += 3) this.expandByPoint(ui.fromArray(t, e));
        return this;
      }
      setFromBufferAttribute(t) {
        this.makeEmpty();
        for (let e = 0, i = t.count; e < i; e++) this.expandByPoint(ui.fromBufferAttribute(t, e));
        return this;
      }
      setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
        return this;
      }
      setFromCenterAndSize(t, e) {
        let i = ui.copy(e).multiplyScalar(0.5);
        return (this.min.copy(t).sub(i), this.max.copy(t).add(i), this);
      }
      setFromObject(t, e = !1) {
        return (this.makeEmpty(), this.expandByObject(t, e));
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        return (this.min.copy(t.min), this.max.copy(t.max), this);
      }
      makeEmpty() {
        return ((this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this);
      }
      isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
      }
      getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
      }
      getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
      }
      expandByPoint(t) {
        return (this.min.min(t), this.max.max(t), this);
      }
      expandByVector(t) {
        return (this.min.sub(t), this.max.add(t), this);
      }
      expandByScalar(t) {
        return (this.min.addScalar(-t), this.max.addScalar(t), this);
      }
      expandByObject(t, e = !1) {
        t.updateWorldMatrix(!1, !1);
        let i = t.geometry;
        if (i !== void 0) {
          let r = i.getAttribute("position");
          if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
            for (let a = 0, o = r.count; a < o; a++)
              (t.isMesh === !0 ? t.getVertexPosition(a, ui) : ui.fromBufferAttribute(r, a),
                ui.applyMatrix4(t.matrixWorld),
                this.expandByPoint(ui));
          else
            (t.boundingBox !== void 0
              ? (t.boundingBox === null && t.computeBoundingBox(), xr.copy(t.boundingBox))
              : (i.boundingBox === null && i.computeBoundingBox(), xr.copy(i.boundingBox)),
              xr.applyMatrix4(t.matrixWorld),
              this.union(xr));
        }
        let s = t.children;
        for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], e);
        return this;
      }
      containsPoint(t) {
        return (
          t.x >= this.min.x &&
          t.x <= this.max.x &&
          t.y >= this.min.y &&
          t.y <= this.max.y &&
          t.z >= this.min.z &&
          t.z <= this.max.z
        );
      }
      containsBox(t) {
        return (
          this.min.x <= t.min.x &&
          t.max.x <= this.max.x &&
          this.min.y <= t.min.y &&
          t.max.y <= this.max.y &&
          this.min.z <= t.min.z &&
          t.max.z <= this.max.z
        );
      }
      getParameter(t, e) {
        return e.set(
          (t.x - this.min.x) / (this.max.x - this.min.x),
          (t.y - this.min.y) / (this.max.y - this.min.y),
          (t.z - this.min.z) / (this.max.z - this.min.z),
        );
      }
      intersectsBox(t) {
        return (
          t.max.x >= this.min.x &&
          t.min.x <= this.max.x &&
          t.max.y >= this.min.y &&
          t.min.y <= this.max.y &&
          t.max.z >= this.min.z &&
          t.min.z <= this.max.z
        );
      }
      intersectsSphere(t) {
        return (this.clampPoint(t.center, ui), ui.distanceToSquared(t.center) <= t.radius * t.radius);
      }
      intersectsPlane(t) {
        let e, i;
        return (
          t.normal.x > 0
            ? ((e = t.normal.x * this.min.x), (i = t.normal.x * this.max.x))
            : ((e = t.normal.x * this.max.x), (i = t.normal.x * this.min.x)),
          t.normal.y > 0
            ? ((e += t.normal.y * this.min.y), (i += t.normal.y * this.max.y))
            : ((e += t.normal.y * this.max.y), (i += t.normal.y * this.min.y)),
          t.normal.z > 0
            ? ((e += t.normal.z * this.min.z), (i += t.normal.z * this.max.z))
            : ((e += t.normal.z * this.max.z), (i += t.normal.z * this.min.z)),
          e <= -t.constant && i >= -t.constant
        );
      }
      intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        (this.getCenter(vs),
          vr.subVectors(this.max, vs),
          Un.subVectors(t.a, vs),
          On.subVectors(t.b, vs),
          Ln.subVectors(t.c, vs),
          Wi.subVectors(On, Un),
          Xi.subVectors(Ln, On),
          dn.subVectors(Un, Ln));
        let e = [
          0,
          -Wi.z,
          Wi.y,
          0,
          -Xi.z,
          Xi.y,
          0,
          -dn.z,
          dn.y,
          Wi.z,
          0,
          -Wi.x,
          Xi.z,
          0,
          -Xi.x,
          dn.z,
          0,
          -dn.x,
          -Wi.y,
          Wi.x,
          0,
          -Xi.y,
          Xi.x,
          0,
          -dn.y,
          dn.x,
          0,
        ];
        return !Zo(e, Un, On, Ln, vr) || ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Zo(e, Un, On, Ln, vr))
          ? !1
          : (Sr.crossVectors(Wi, Xi), (e = [Sr.x, Sr.y, Sr.z]), Zo(e, Un, On, Ln, vr));
      }
      clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max);
      }
      distanceToPoint(t) {
        return this.clampPoint(t, ui).distanceTo(t);
      }
      getBoundingSphere(t) {
        return (
          this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), (t.radius = this.getSize(ui).length() * 0.5)),
          t
        );
      }
      intersect(t) {
        return (this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this);
      }
      union(t) {
        return (this.min.min(t.min), this.max.max(t.max), this);
      }
      applyMatrix4(t) {
        return this.isEmpty()
          ? this
          : (Ni[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            Ni[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            Ni[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            Ni[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            Ni[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            Ni[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            Ni[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            Ni[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(Ni),
            this);
      }
      translate(t) {
        return (this.min.add(t), this.max.add(t), this);
      }
      equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
      toJSON() {
        return { min: this.min.toArray(), max: this.max.toArray() };
      }
      fromJSON(t) {
        return (this.min.fromArray(t.min), this.max.fromArray(t.max), this);
      }
    },
    Ni = [new F(), new F(), new F(), new F(), new F(), new F(), new F(), new F()],
    ui = new F(),
    xr = new Mi(),
    Un = new F(),
    On = new F(),
    Ln = new F(),
    Wi = new F(),
    Xi = new F(),
    dn = new F(),
    vs = new F(),
    vr = new F(),
    Sr = new F(),
    fn = new F();
  function Zo(n, t, e, i, s) {
    for (let r = 0, a = n.length - 3; r <= a; r += 3) {
      fn.fromArray(n, r);
      let o = s.x * Math.abs(fn.x) + s.y * Math.abs(fn.y) + s.z * Math.abs(fn.z),
        l = t.dot(fn),
        c = e.dot(fn),
        u = i.dot(fn);
      if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
    }
    return !0;
  }
  var be = new F(),
    yr = new Ct(),
    pd = 0,
    xe = class extends yi {
      constructor(t, e, i = !1) {
        if ((super(), Array.isArray(t))) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        ((this.isBufferAttribute = !0),
          Object.defineProperty(this, "id", { value: pd++ }),
          (this.name = ""),
          (this.array = t),
          (this.itemSize = e),
          (this.count = t !== void 0 ? t.length / e : 0),
          (this.normalized = i),
          (this.usage = Nh),
          (this.updateRanges = []),
          (this.gpuType = Ke),
          (this.version = 0));
      }
      onUploadCallback() {}
      set needsUpdate(t) {
        t === !0 && this.version++;
      }
      setUsage(t) {
        return ((this.usage = t), this);
      }
      addUpdateRange(t, e) {
        this.updateRanges.push({ start: t, count: e });
      }
      clearUpdateRanges() {
        this.updateRanges.length = 0;
      }
      copy(t) {
        return (
          (this.name = t.name),
          (this.array = new t.array.constructor(t.array)),
          (this.itemSize = t.itemSize),
          (this.count = t.count),
          (this.normalized = t.normalized),
          (this.usage = t.usage),
          (this.gpuType = t.gpuType),
          this
        );
      }
      copyAt(t, e, i) {
        ((t *= this.itemSize), (i *= e.itemSize));
        for (let s = 0, r = this.itemSize; s < r; s++) this.array[t + s] = e.array[i + s];
        return this;
      }
      copyArray(t) {
        return (this.array.set(t), this);
      }
      applyMatrix3(t) {
        if (this.itemSize === 2)
          for (let e = 0, i = this.count; e < i; e++)
            (yr.fromBufferAttribute(this, e), yr.applyMatrix3(t), this.setXY(e, yr.x, yr.y));
        else if (this.itemSize === 3)
          for (let e = 0, i = this.count; e < i; e++)
            (be.fromBufferAttribute(this, e), be.applyMatrix3(t), this.setXYZ(e, be.x, be.y, be.z));
        return this;
      }
      applyMatrix4(t) {
        for (let e = 0, i = this.count; e < i; e++)
          (be.fromBufferAttribute(this, e), be.applyMatrix4(t), this.setXYZ(e, be.x, be.y, be.z));
        return this;
      }
      applyNormalMatrix(t) {
        for (let e = 0, i = this.count; e < i; e++)
          (be.fromBufferAttribute(this, e), be.applyNormalMatrix(t), this.setXYZ(e, be.x, be.y, be.z));
        return this;
      }
      transformDirection(t) {
        for (let e = 0, i = this.count; e < i; e++)
          (be.fromBufferAttribute(this, e), be.transformDirection(t), this.setXYZ(e, be.x, be.y, be.z));
        return this;
      }
      set(t, e = 0) {
        return (this.array.set(t, e), this);
      }
      getComponent(t, e) {
        let i = this.array[t * this.itemSize + e];
        return (this.normalized && (i = gs(i, this.array)), i);
      }
      setComponent(t, e, i) {
        return (this.normalized && (i = Xe(i, this.array)), (this.array[t * this.itemSize + e] = i), this);
      }
      getX(t) {
        let e = this.array[t * this.itemSize];
        return (this.normalized && (e = gs(e, this.array)), e);
      }
      setX(t, e) {
        return (this.normalized && (e = Xe(e, this.array)), (this.array[t * this.itemSize] = e), this);
      }
      getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return (this.normalized && (e = gs(e, this.array)), e);
      }
      setY(t, e) {
        return (this.normalized && (e = Xe(e, this.array)), (this.array[t * this.itemSize + 1] = e), this);
      }
      getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return (this.normalized && (e = gs(e, this.array)), e);
      }
      setZ(t, e) {
        return (this.normalized && (e = Xe(e, this.array)), (this.array[t * this.itemSize + 2] = e), this);
      }
      getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return (this.normalized && (e = gs(e, this.array)), e);
      }
      setW(t, e) {
        return (this.normalized && (e = Xe(e, this.array)), (this.array[t * this.itemSize + 3] = e), this);
      }
      setXY(t, e, i) {
        return (
          (t *= this.itemSize),
          this.normalized && ((e = Xe(e, this.array)), (i = Xe(i, this.array))),
          (this.array[t + 0] = e),
          (this.array[t + 1] = i),
          this
        );
      }
      setXYZ(t, e, i, s) {
        return (
          (t *= this.itemSize),
          this.normalized && ((e = Xe(e, this.array)), (i = Xe(i, this.array)), (s = Xe(s, this.array))),
          (this.array[t + 0] = e),
          (this.array[t + 1] = i),
          (this.array[t + 2] = s),
          this
        );
      }
      setXYZW(t, e, i, s, r) {
        return (
          (t *= this.itemSize),
          this.normalized &&
            ((e = Xe(e, this.array)), (i = Xe(i, this.array)), (s = Xe(s, this.array)), (r = Xe(r, this.array))),
          (this.array[t + 0] = e),
          (this.array[t + 1] = i),
          (this.array[t + 2] = s),
          (this.array[t + 3] = r),
          this
        );
      }
      onUpload(t) {
        return ((this.onUploadCallback = t), this);
      }
      clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
      }
      toJSON() {
        let t = {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: Array.from(this.array),
          normalized: this.normalized,
        };
        return ((t.name = this.name), (t.usage = this.usage), (t.gpuType = this.gpuType), t);
      }
      dispose() {
        this.dispatchEvent({ type: "dispose" });
      }
    };
  var Fs = class extends xe {
    constructor(t, e, i) {
      super(new Uint16Array(t), e, i);
    }
  };
  var Ns = class extends xe {
    constructor(t, e, i) {
      super(new Uint32Array(t), e, i);
    }
  };
  var ie = class extends xe {
      constructor(t, e, i) {
        super(new Float32Array(t), e, i);
      }
    },
    md = new Mi(),
    Ss = new F(),
    Yo = new F(),
    Oi = class {
      constructor(t = new F(), e = -1) {
        ((this.isSphere = !0), (this.center = t), (this.radius = e));
      }
      set(t, e) {
        return (this.center.copy(t), (this.radius = e), this);
      }
      setFromPoints(t, e) {
        let i = this.center;
        e !== void 0 ? i.copy(e) : md.setFromPoints(t).getCenter(i);
        let s = 0;
        for (let r = 0, a = t.length; r < a; r++) s = Math.max(s, i.distanceToSquared(t[r]));
        return ((this.radius = Math.sqrt(s)), this);
      }
      copy(t) {
        return (this.center.copy(t.center), (this.radius = t.radius), this);
      }
      isEmpty() {
        return this.radius < 0;
      }
      makeEmpty() {
        return (this.center.set(0, 0, 0), (this.radius = -1), this);
      }
      containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius;
      }
      distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius;
      }
      intersectsSphere(t) {
        let e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e;
      }
      intersectsBox(t) {
        return t.intersectsSphere(this);
      }
      intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
      }
      clampPoint(t, e) {
        let i = this.center.distanceToSquared(t);
        return (
          e.copy(t),
          i > this.radius * this.radius &&
            (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)),
          e
        );
      }
      getBoundingBox(t) {
        return this.isEmpty()
          ? (t.makeEmpty(), t)
          : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
      }
      applyMatrix4(t) {
        return (this.center.applyMatrix4(t), (this.radius = this.radius * t.getMaxScaleOnAxis()), this);
      }
      translate(t) {
        return (this.center.add(t), this);
      }
      expandByPoint(t) {
        if (this.isEmpty()) return (this.center.copy(t), (this.radius = 0), this);
        Ss.subVectors(t, this.center);
        let e = Ss.lengthSq();
        if (e > this.radius * this.radius) {
          let i = Math.sqrt(e),
            s = (i - this.radius) * 0.5;
          (this.center.addScaledVector(Ss, s / i), (this.radius += s));
        }
        return this;
      }
      union(t) {
        return t.isEmpty()
          ? this
          : this.isEmpty()
            ? (this.copy(t), this)
            : (this.center.equals(t.center) === !0
                ? (this.radius = Math.max(this.radius, t.radius))
                : (Yo.subVectors(t.center, this.center).setLength(t.radius),
                  this.expandByPoint(Ss.copy(t.center).add(Yo)),
                  this.expandByPoint(Ss.copy(t.center).sub(Yo))),
              this);
      }
      equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      toJSON() {
        return { radius: this.radius, center: this.center.toArray() };
      }
      fromJSON(t) {
        return ((this.radius = t.radius), this.center.fromArray(t.center), this);
      }
    },
    Ed = 0,
    ni = new Vt(),
    jo = new Ae(),
    $n = new F(),
    Ye = new Mi(),
    ys = new Mi(),
    we = new F(),
    ve = class n extends yi {
      constructor() {
        (super(),
          (this.isBufferGeometry = !0),
          Object.defineProperty(this, "id", { value: Ed++ }),
          (this.uuid = or()),
          (this.name = ""),
          (this.type = "BufferGeometry"),
          (this.index = null),
          (this.indirect = null),
          (this.indirectOffset = 0),
          (this.attributes = {}),
          (this.morphAttributes = {}),
          (this.morphTargetsRelative = !1),
          (this.groups = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.drawRange = { start: 0, count: 1 / 0 }),
          (this.userData = {}),
          (this._transformed = !1));
      }
      getIndex() {
        return this.index;
      }
      setIndex(t) {
        return (Array.isArray(t) ? (this.index = new (ed(t) ? Ns : Fs)(t, 1)) : (this.index = t), this);
      }
      setIndirect(t, e = 0) {
        return ((this.indirect = t), (this.indirectOffset = e), this);
      }
      getIndirect() {
        return this.indirect;
      }
      getAttribute(t) {
        return this.attributes[t];
      }
      setAttribute(t, e) {
        return ((this.attributes[t] = e), this);
      }
      deleteAttribute(t) {
        return (delete this.attributes[t], this);
      }
      hasAttribute(t) {
        return this.attributes[t] !== void 0;
      }
      addGroup(t, e, i = 0) {
        this.groups.push({ start: t, count: e, materialIndex: i });
      }
      clearGroups() {
        this.groups = [];
      }
      setDrawRange(t, e) {
        ((this.drawRange.start = t), (this.drawRange.count = e));
      }
      applyMatrix4(t) {
        let e = this.attributes.position;
        e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
        let i = this.attributes.normal;
        if (i !== void 0) {
          let r = new Gt().getNormalMatrix(t);
          (i.applyNormalMatrix(r), (i.needsUpdate = !0));
        }
        let s = this.attributes.tangent;
        return (
          s !== void 0 && (s.transformDirection(t), (s.needsUpdate = !0)),
          this.boundingBox !== null && this.computeBoundingBox(),
          this.boundingSphere !== null && this.computeBoundingSphere(),
          (this._transformed = !0),
          this
        );
      }
      applyQuaternion(t) {
        return (ni.makeRotationFromQuaternion(t), this.applyMatrix4(ni), this);
      }
      rotateX(t) {
        return (ni.makeRotationX(t), this.applyMatrix4(ni), this);
      }
      rotateY(t) {
        return (ni.makeRotationY(t), this.applyMatrix4(ni), this);
      }
      rotateZ(t) {
        return (ni.makeRotationZ(t), this.applyMatrix4(ni), this);
      }
      translate(t, e, i) {
        return (ni.makeTranslation(t, e, i), this.applyMatrix4(ni), this);
      }
      scale(t, e, i) {
        return (ni.makeScale(t, e, i), this.applyMatrix4(ni), this);
      }
      lookAt(t) {
        return (jo.lookAt(t), jo.updateMatrix(), this.applyMatrix4(jo.matrix), this);
      }
      center() {
        return (
          this.computeBoundingBox(),
          this.boundingBox.getCenter($n).negate(),
          this.translate($n.x, $n.y, $n.z),
          this
        );
      }
      setFromPoints(t) {
        let e = this.getAttribute("position");
        if (e === void 0) {
          let i = [];
          for (let s = 0, r = t.length; s < r; s++) {
            let a = t[s];
            i.push(a.x, a.y, a.z || 0);
          }
          this.setAttribute("position", new ie(i, 3));
        } else {
          let i = Math.min(t.length, e.count);
          for (let s = 0; s < i; s++) {
            let r = t[s];
            e.setXYZ(s, r.x, r.y, r.z || 0);
          }
          (t.length > e.count &&
            Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
            (e.needsUpdate = !0));
        }
        return this;
      }
      computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Mi());
        let t = this.attributes.position,
          e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
          (Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new F(-1 / 0, -1 / 0, -1 / 0), new F(1 / 0, 1 / 0, 1 / 0)));
          return;
        }
        if (t !== void 0) {
          if ((this.boundingBox.setFromBufferAttribute(t), e))
            for (let i = 0, s = e.length; i < s; i++) {
              let r = e[i];
              (Ye.setFromBufferAttribute(r),
                this.morphTargetsRelative
                  ? (we.addVectors(this.boundingBox.min, Ye.min),
                    this.boundingBox.expandByPoint(we),
                    we.addVectors(this.boundingBox.max, Ye.max),
                    this.boundingBox.expandByPoint(we))
                  : (this.boundingBox.expandByPoint(Ye.min), this.boundingBox.expandByPoint(Ye.max)));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
          Ot(
            'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
            this,
          );
      }
      computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new Oi());
        let t = this.attributes.position,
          e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
          (Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new F(), 1 / 0));
          return;
        }
        if (t) {
          let i = this.boundingSphere.center;
          if ((Ye.setFromBufferAttribute(t), e))
            for (let r = 0, a = e.length; r < a; r++) {
              let o = e[r];
              (ys.setFromBufferAttribute(o),
                this.morphTargetsRelative
                  ? (we.addVectors(Ye.min, ys.min),
                    Ye.expandByPoint(we),
                    we.addVectors(Ye.max, ys.max),
                    Ye.expandByPoint(we))
                  : (Ye.expandByPoint(ys.min), Ye.expandByPoint(ys.max)));
            }
          Ye.getCenter(i);
          let s = 0;
          for (let r = 0, a = t.count; r < a; r++)
            (we.fromBufferAttribute(t, r), (s = Math.max(s, i.distanceToSquared(we))));
          if (e)
            for (let r = 0, a = e.length; r < a; r++) {
              let o = e[r],
                l = this.morphTargetsRelative;
              for (let c = 0, u = o.count; c < u; c++)
                (we.fromBufferAttribute(o, c),
                  l && ($n.fromBufferAttribute(t, c), we.add($n)),
                  (s = Math.max(s, i.distanceToSquared(we))));
            }
          ((this.boundingSphere.radius = Math.sqrt(s)),
            isNaN(this.boundingSphere.radius) &&
              Ot(
                'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                this,
              ));
        }
      }
      computeTangents() {
        let t = this.index,
          e = this.attributes;
        if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
          Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
          return;
        }
        let i = e.position,
          s = e.normal,
          r = e.uv,
          a = this.getAttribute("tangent");
        (a === void 0 || a.count !== i.count) &&
          ((a = new xe(new Float32Array(4 * i.count), 4)), this.setAttribute("tangent", a));
        let o = [],
          l = [];
        for (let x = 0; x < i.count; x++) ((o[x] = new F()), (l[x] = new F()));
        let c = new F(),
          u = new F(),
          f = new F(),
          h = new Ct(),
          d = new Ct(),
          E = new Ct(),
          v = new F(),
          m = new F();
        function p(x, b, N) {
          (c.fromBufferAttribute(i, x),
            u.fromBufferAttribute(i, b),
            f.fromBufferAttribute(i, N),
            h.fromBufferAttribute(r, x),
            d.fromBufferAttribute(r, b),
            E.fromBufferAttribute(r, N),
            u.sub(c),
            f.sub(c),
            d.sub(h),
            E.sub(h));
          let w = 1 / (d.x * E.y - E.x * d.y);
          isFinite(w) &&
            (v.copy(u).multiplyScalar(E.y).addScaledVector(f, -d.y).multiplyScalar(w),
            m.copy(f).multiplyScalar(d.x).addScaledVector(u, -E.x).multiplyScalar(w),
            o[x].add(v),
            o[b].add(v),
            o[N].add(v),
            l[x].add(m),
            l[b].add(m),
            l[N].add(m));
        }
        let y = this.groups;
        y.length === 0 && (y = [{ start: 0, count: t.count }]);
        for (let x = 0, b = y.length; x < b; ++x) {
          let N = y[x],
            w = N.start,
            C = N.count;
          for (let z = w, A = w + C; z < A; z += 3) p(t.getX(z + 0), t.getX(z + 1), t.getX(z + 2));
        }
        let Q = new F(),
          S = new F(),
          M = new F(),
          P = new F();
        function T(x) {
          (M.fromBufferAttribute(s, x), P.copy(M));
          let b = o[x];
          (Q.copy(b), Q.sub(M.multiplyScalar(M.dot(b))).normalize(), S.crossVectors(P, b));
          let w = S.dot(l[x]) < 0 ? -1 : 1;
          a.setXYZW(x, Q.x, Q.y, Q.z, w);
        }
        for (let x = 0, b = y.length; x < b; ++x) {
          let N = y[x],
            w = N.start,
            C = N.count;
          for (let z = w, A = w + C; z < A; z += 3) (T(t.getX(z + 0)), T(t.getX(z + 1)), T(t.getX(z + 2)));
        }
        this._transformed = !0;
      }
      computeVertexNormals() {
        let t = this.index,
          e = this.getAttribute("position");
        if (e !== void 0) {
          let i = this.getAttribute("normal");
          if (i === void 0 || i.count !== e.count)
            ((i = new xe(new Float32Array(e.count * 3), 3)), this.setAttribute("normal", i));
          else for (let h = 0, d = i.count; h < d; h++) i.setXYZ(h, 0, 0, 0);
          let s = new F(),
            r = new F(),
            a = new F(),
            o = new F(),
            l = new F(),
            c = new F(),
            u = new F(),
            f = new F();
          if (t)
            for (let h = 0, d = t.count; h < d; h += 3) {
              let E = t.getX(h + 0),
                v = t.getX(h + 1),
                m = t.getX(h + 2);
              (s.fromBufferAttribute(e, E),
                r.fromBufferAttribute(e, v),
                a.fromBufferAttribute(e, m),
                u.subVectors(a, r),
                f.subVectors(s, r),
                u.cross(f),
                o.fromBufferAttribute(i, E),
                l.fromBufferAttribute(i, v),
                c.fromBufferAttribute(i, m),
                o.add(u),
                l.add(u),
                c.add(u),
                i.setXYZ(E, o.x, o.y, o.z),
                i.setXYZ(v, l.x, l.y, l.z),
                i.setXYZ(m, c.x, c.y, c.z));
            }
          else
            for (let h = 0, d = e.count; h < d; h += 3)
              (s.fromBufferAttribute(e, h + 0),
                r.fromBufferAttribute(e, h + 1),
                a.fromBufferAttribute(e, h + 2),
                u.subVectors(a, r),
                f.subVectors(s, r),
                u.cross(f),
                i.setXYZ(h + 0, u.x, u.y, u.z),
                i.setXYZ(h + 1, u.x, u.y, u.z),
                i.setXYZ(h + 2, u.x, u.y, u.z));
          (this.normalizeNormals(), (i.needsUpdate = !0));
        }
      }
      normalizeNormals() {
        let t = this.attributes.normal;
        for (let e = 0, i = t.count; e < i; e++)
          (we.fromBufferAttribute(t, e), we.normalize(), t.setXYZ(e, we.x, we.y, we.z));
      }
      toNonIndexed() {
        function t(o, l) {
          let c = o.array,
            u = o.itemSize,
            f = o.normalized,
            h = new c.constructor(l.length * u),
            d = 0,
            E = 0;
          for (let v = 0, m = l.length; v < m; v++) {
            o.isInterleavedBufferAttribute ? (d = l[v] * o.data.stride + o.offset) : (d = l[v] * u);
            for (let p = 0; p < u; p++) h[E++] = c[d++];
          }
          return new xe(h, u, f);
        }
        if (this.index === null)
          return (Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this);
        let e = new n(),
          i = this.index.array,
          s = this.attributes;
        for (let o in s) {
          let l = s[o],
            c = t(l, i);
          e.setAttribute(o, c);
        }
        let r = this.morphAttributes;
        for (let o in r) {
          let l = [],
            c = r[o];
          for (let u = 0, f = c.length; u < f; u++) {
            let h = c[u],
              d = t(h, i);
            l.push(d);
          }
          e.morphAttributes[o] = l;
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        let a = this.groups;
        for (let o = 0, l = a.length; o < l; o++) {
          let c = a[o];
          e.addGroup(c.start, c.count, c.materialIndex);
        }
        return e;
      }
      toJSON() {
        let t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
        if (
          ((t.uuid = this.uuid),
          (t.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type),
          (t.name = this.name),
          Object.keys(this.userData).length > 0 && (t.userData = this.userData),
          this.parameters !== void 0 && this._transformed !== !0)
        ) {
          let l = this.parameters;
          for (let c in l) l[c] !== void 0 && (t[c] = l[c]);
          return t;
        }
        t.data = { attributes: {} };
        let e = this.index;
        e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
        let i = this.attributes;
        for (let l in i) {
          let c = i[l];
          t.data.attributes[l] = c.toJSON(t.data);
        }
        let s = {},
          r = !1;
        for (let l in this.morphAttributes) {
          let c = this.morphAttributes[l],
            u = [];
          for (let f = 0, h = c.length; f < h; f++) {
            let d = c[f];
            u.push(d.toJSON(t.data));
          }
          u.length > 0 && ((s[l] = u), (r = !0));
        }
        r && ((t.data.morphAttributes = s), (t.data.morphTargetsRelative = this.morphTargetsRelative));
        let a = this.groups;
        a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
        let o = this.boundingSphere;
        return (o !== null && (t.data.boundingSphere = o.toJSON()), t);
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        ((this.index = null),
          (this.attributes = {}),
          (this.morphAttributes = {}),
          (this.groups = []),
          (this.boundingBox = null),
          (this.boundingSphere = null));
        let e = {};
        this.name = t.name;
        let i = t.index;
        i !== null && this.setIndex(i.clone());
        let s = t.attributes;
        for (let c in s) {
          let u = s[c];
          this.setAttribute(c, u.clone(e));
        }
        let r = t.morphAttributes;
        for (let c in r) {
          let u = [],
            f = r[c];
          for (let h = 0, d = f.length; h < d; h++) u.push(f[h].clone(e));
          this.morphAttributes[c] = u;
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        let a = t.groups;
        for (let c = 0, u = a.length; c < u; c++) {
          let f = a[c];
          this.addGroup(f.start, f.count, f.materialIndex);
        }
        let o = t.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        let l = t.boundingSphere;
        return (
          l !== null && (this.boundingSphere = l.clone()),
          (this.drawRange.start = t.drawRange.start),
          (this.drawRange.count = t.drawRange.count),
          (this.userData = t.userData),
          (this._transformed = t._transformed),
          this
        );
      }
      dispose() {
        this.dispatchEvent({ type: "dispose" });
      }
    };
  var tc = new F(),
    gd = new F(),
    xd = new Gt(),
    di = class {
      constructor(t = new F(1, 0, 0), e = 0) {
        ((this.isPlane = !0), (this.normal = t), (this.constant = e));
      }
      set(t, e) {
        return (this.normal.copy(t), (this.constant = e), this);
      }
      setComponents(t, e, i, s) {
        return (this.normal.set(t, e, i), (this.constant = s), this);
      }
      setFromNormalAndCoplanarPoint(t, e) {
        return (this.normal.copy(t), (this.constant = -e.dot(this.normal)), this);
      }
      setFromCoplanarPoints(t, e, i) {
        let s = tc.subVectors(i, e).cross(gd.subVectors(t, e)).normalize();
        return (this.setFromNormalAndCoplanarPoint(s, t), this);
      }
      copy(t) {
        return (this.normal.copy(t.normal), (this.constant = t.constant), this);
      }
      normalize() {
        let t = 1 / this.normal.length();
        return (this.normal.multiplyScalar(t), (this.constant *= t), this);
      }
      negate() {
        return ((this.constant *= -1), this.normal.negate(), this);
      }
      distanceToPoint(t) {
        return this.normal.dot(t) + this.constant;
      }
      distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius;
      }
      projectPoint(t, e) {
        return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
      }
      intersectLine(t, e, i = !0) {
        let s = t.delta(tc),
          r = this.normal.dot(s);
        if (r === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
        let a = -(t.start.dot(this.normal) + this.constant) / r;
        return i === !0 && (a < 0 || a > 1) ? null : e.copy(t.start).addScaledVector(s, a);
      }
      intersectsLine(t) {
        let e = this.distanceToPoint(t.start),
          i = this.distanceToPoint(t.end);
        return (e < 0 && i > 0) || (i < 0 && e > 0);
      }
      intersectsBox(t) {
        return t.intersectsPlane(this);
      }
      intersectsSphere(t) {
        return t.intersectsPlane(this);
      }
      coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant);
      }
      applyMatrix4(t, e) {
        let i = e || xd.getNormalMatrix(t),
          s = this.coplanarPoint(tc).applyMatrix4(t),
          r = this.normal.applyMatrix3(i).normalize();
        return ((this.constant = -s.dot(r)), this);
      }
      translate(t) {
        return ((this.constant -= t.dot(this.normal)), this);
      }
      equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant;
      }
      clone() {
        return new this.constructor().copy(this);
      }
      toJSON() {
        return { normal: this.normal.toArray(), constant: this.constant };
      }
      fromJSON(t) {
        return (this.normal.fromArray(t.normal), (this.constant = t.constant), this);
      }
    },
    vd = 0,
    Li = class extends yi {
      constructor() {
        (super(),
          (this.isMaterial = !0),
          Object.defineProperty(this, "id", { value: vd++ }),
          (this.uuid = or()),
          (this.name = ""),
          (this.type = "Material"),
          (this.blending = ss),
          (this.side = sn),
          (this.vertexColors = !1),
          (this.opacity = 1),
          (this.transparent = !1),
          (this.alphaHash = !1),
          (this.blendSrc = xc),
          (this.blendDst = vc),
          (this.blendEquation = yn),
          (this.blendSrcAlpha = null),
          (this.blendDstAlpha = null),
          (this.blendEquationAlpha = null),
          (this.blendColor = new Tt(0, 0, 0)),
          (this.blendAlpha = 0),
          (this.depthFunc = Jn),
          (this.depthTest = !0),
          (this.depthWrite = !0),
          (this.stencilWriteMask = 255),
          (this.stencilFunc = bh),
          (this.stencilRef = 0),
          (this.stencilFuncMask = 255),
          (this.stencilFail = Br),
          (this.stencilZFail = Br),
          (this.stencilZPass = Br),
          (this.stencilWrite = !1),
          (this.clippingPlanes = null),
          (this.clipIntersection = !1),
          (this.clipShadows = !1),
          (this.shadowSide = null),
          (this.colorWrite = !0),
          (this.precision = null),
          (this.polygonOffset = !1),
          (this.polygonOffsetFactor = 0),
          (this.polygonOffsetUnits = 0),
          (this.dithering = !1),
          (this.alphaToCoverage = !1),
          (this.premultipliedAlpha = !1),
          (this.forceSinglePass = !1),
          (this.allowOverride = !0),
          (this.visible = !0),
          (this.toneMapped = !0),
          (this.userData = {}),
          (this.version = 0),
          (this._alphaTest = 0));
      }
      get alphaTest() {
        return this._alphaTest;
      }
      set alphaTest(t) {
        (this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t));
      }
      onBeforeRender() {}
      onBeforeCompile() {}
      customProgramCacheKey() {
        return this.onBeforeCompile.toString();
      }
      setValues(t) {
        if (t !== void 0)
          for (let e in t) {
            let i = t[e];
            if (i === void 0) {
              Ht(`Material: parameter '${e}' has value of undefined.`);
              continue;
            }
            let s = this[e];
            if (s === void 0) {
              Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);
              continue;
            }
            s && s.isColor
              ? s.set(i)
              : (s && s.isVector2 && i && i.isVector2) ||
                  (s && s.isEuler && i && i.isEuler) ||
                  (s && s.isVector3 && i && i.isVector3)
                ? s.copy(i)
                : (this[e] = i);
          }
      }
      toJSON(t) {
        let e = t === void 0 || typeof t == "string";
        e && (t = { textures: {}, images: {} });
        let i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
        ((i.uuid = this.uuid),
          (i.type = this.type),
          (i.blending = this.blending),
          (i.side = this.side),
          (i.shadowSide = this.shadowSide),
          (i.vertexColors = this.vertexColors),
          (i.opacity = this.opacity),
          (i.transparent = this.transparent),
          (i.blendSrc = this.blendSrc),
          (i.blendDst = this.blendDst),
          (i.blendEquation = this.blendEquation),
          (i.blendSrcAlpha = this.blendSrcAlpha),
          (i.blendDstAlpha = this.blendDstAlpha),
          (i.blendEquationAlpha = this.blendEquationAlpha),
          (i.blendColor = this.blendColor.getHex()),
          (i.blendAlpha = this.blendAlpha),
          (i.depthFunc = this.depthFunc),
          (i.depthTest = this.depthTest),
          (i.depthWrite = this.depthWrite),
          (i.colorWrite = this.colorWrite),
          (i.clipIntersection = this.clipIntersection),
          (i.clipShadows = this.clipShadows),
          (i.stencilWriteMask = this.stencilWriteMask),
          (i.stencilFunc = this.stencilFunc),
          (i.stencilRef = this.stencilRef),
          (i.stencilFuncMask = this.stencilFuncMask),
          (i.stencilFail = this.stencilFail),
          (i.stencilZFail = this.stencilZFail),
          (i.stencilZPass = this.stencilZPass),
          (i.stencilWrite = this.stencilWrite),
          (i.polygonOffset = this.polygonOffset),
          (i.polygonOffsetFactor = this.polygonOffsetFactor),
          (i.polygonOffsetUnits = this.polygonOffsetUnits),
          (i.dithering = this.dithering),
          (i.alphaTest = this.alphaTest),
          (i.alphaHash = this.alphaHash),
          (i.alphaToCoverage = this.alphaToCoverage),
          (i.premultipliedAlpha = this.premultipliedAlpha),
          (i.forceSinglePass = this.forceSinglePass),
          (i.allowOverride = this.allowOverride),
          (i.visible = this.visible),
          (i.toneMapped = this.toneMapped),
          (i.name = this.name),
          this.color && this.color.isColor && (i.color = this.color.getHex()),
          this.roughness !== void 0 && (i.roughness = this.roughness),
          this.metalness !== void 0 && (i.metalness = this.metalness),
          this.sheen !== void 0 && (i.sheen = this.sheen),
          this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
          this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness),
          this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
          this.emissiveIntensity !== void 0 && (i.emissiveIntensity = this.emissiveIntensity),
          this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
          this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity),
          this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()),
          this.shininess !== void 0 && (i.shininess = this.shininess),
          this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
          this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness),
          this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
          this.clearcoatRoughnessMap &&
            this.clearcoatRoughnessMap.isTexture &&
            (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
          this.clearcoatNormalMap &&
            this.clearcoatNormalMap.isTexture &&
            ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
            (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
          this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(t).uuid),
          this.sheenRoughnessMap &&
            this.sheenRoughnessMap.isTexture &&
            (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid),
          this.dispersion !== void 0 && (i.dispersion = this.dispersion),
          this.retroreflectivity !== void 0 && (i.retroreflectivity = this.retroreflectivity),
          this.iridescence !== void 0 && (i.iridescence = this.iridescence),
          this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR),
          this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
          this.iridescenceMap &&
            this.iridescenceMap.isTexture &&
            (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
          this.iridescenceThicknessMap &&
            this.iridescenceThicknessMap.isTexture &&
            (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid),
          this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
          this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation),
          this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
          this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid),
          this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid),
          this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid),
          this.lightMap &&
            this.lightMap.isTexture &&
            ((i.lightMap = this.lightMap.toJSON(t).uuid), (i.lightMapIntensity = this.lightMapIntensity)),
          this.aoMap &&
            this.aoMap.isTexture &&
            ((i.aoMap = this.aoMap.toJSON(t).uuid), (i.aoMapIntensity = this.aoMapIntensity)),
          this.bumpMap &&
            this.bumpMap.isTexture &&
            ((i.bumpMap = this.bumpMap.toJSON(t).uuid), (i.bumpScale = this.bumpScale)),
          this.normalMap &&
            this.normalMap.isTexture &&
            ((i.normalMap = this.normalMap.toJSON(t).uuid),
            (i.normalMapType = this.normalMapType),
            (i.normalScale = this.normalScale.toArray())),
          this.displacementMap &&
            this.displacementMap.isTexture &&
            ((i.displacementMap = this.displacementMap.toJSON(t).uuid),
            (i.displacementScale = this.displacementScale),
            (i.displacementBias = this.displacementBias)),
          this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
          this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
          this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
          this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid),
          this.specularIntensityMap &&
            this.specularIntensityMap.isTexture &&
            (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
          this.specularColorMap &&
            this.specularColorMap.isTexture &&
            (i.specularColorMap = this.specularColorMap.toJSON(t).uuid),
          this.envMap &&
            this.envMap.isTexture &&
            ((i.envMap = this.envMap.toJSON(t).uuid), this.combine !== void 0 && (i.combine = this.combine)),
          this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()),
          this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity),
          this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
          this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio),
          this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid),
          this.transmission !== void 0 && (i.transmission = this.transmission),
          this.transmissionMap &&
            this.transmissionMap.isTexture &&
            (i.transmissionMap = this.transmissionMap.toJSON(t).uuid),
          this.thickness !== void 0 && (i.thickness = this.thickness),
          this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid),
          this.attenuationDistance !== void 0 && (i.attenuationDistance = this.attenuationDistance),
          this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()),
          this.size !== void 0 && (i.size = this.size),
          this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation),
          Array.isArray(this.clippingPlanes) &&
            this.clippingPlanes.length > 0 &&
            (i.clippingPlanes = this.clippingPlanes.map((r) => r.toJSON())),
          this.rotation !== void 0 && (i.rotation = this.rotation),
          this.depthPacking !== void 0 && (i.depthPacking = this.depthPacking),
          this.linewidth !== void 0 && (i.linewidth = this.linewidth),
          this.linecap !== void 0 && (i.linecap = this.linecap),
          this.linejoin !== void 0 && (i.linejoin = this.linejoin),
          this.dashSize !== void 0 && (i.dashSize = this.dashSize),
          this.gapSize !== void 0 && (i.gapSize = this.gapSize),
          this.scale !== void 0 && (i.scale = this.scale),
          this.wireframe !== void 0 && (i.wireframe = this.wireframe),
          this.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = this.wireframeLinewidth),
          this.wireframeLinecap !== void 0 && (i.wireframeLinecap = this.wireframeLinecap),
          this.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = this.wireframeLinejoin),
          this.flatShading !== void 0 && (i.flatShading = this.flatShading),
          this.fog !== void 0 && (i.fog = this.fog),
          Object.keys(this.userData).length > 0 && (i.userData = this.userData));
        function s(r) {
          let a = [];
          for (let o in r) {
            let l = r[o];
            (delete l.metadata, a.push(l));
          }
          return a;
        }
        if (e) {
          let r = s(t.textures),
            a = s(t.images);
          (r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a));
        }
        return i;
      }
      fromJSON(t, e) {
        if (
          (t.uuid !== void 0 && (this.uuid = t.uuid),
          t.name !== void 0 && (this.name = t.name),
          t.color !== void 0 && this.color !== void 0 && this.color.setHex(t.color),
          t.roughness !== void 0 && (this.roughness = t.roughness),
          t.metalness !== void 0 && (this.metalness = t.metalness),
          t.sheen !== void 0 && (this.sheen = t.sheen),
          t.sheenColor !== void 0 && (this.sheenColor = new Tt().setHex(t.sheenColor)),
          t.sheenRoughness !== void 0 && (this.sheenRoughness = t.sheenRoughness),
          t.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(t.emissive),
          t.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(t.specular),
          t.specularIntensity !== void 0 && (this.specularIntensity = t.specularIntensity),
          t.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(t.specularColor),
          t.shininess !== void 0 && (this.shininess = t.shininess),
          t.clearcoat !== void 0 && (this.clearcoat = t.clearcoat),
          t.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = t.clearcoatRoughness),
          t.dispersion !== void 0 && (this.dispersion = t.dispersion),
          t.retroreflectivity !== void 0 && (this.retroreflectivity = t.retroreflectivity),
          t.iridescence !== void 0 && (this.iridescence = t.iridescence),
          t.iridescenceIOR !== void 0 && (this.iridescenceIOR = t.iridescenceIOR),
          t.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = t.iridescenceThicknessRange),
          t.transmission !== void 0 && (this.transmission = t.transmission),
          t.thickness !== void 0 && (this.thickness = t.thickness),
          t.attenuationDistance !== void 0 && (this.attenuationDistance = t.attenuationDistance),
          t.attenuationColor !== void 0 &&
            this.attenuationColor !== void 0 &&
            this.attenuationColor.setHex(t.attenuationColor),
          t.anisotropy !== void 0 && (this.anisotropy = t.anisotropy),
          t.anisotropyRotation !== void 0 && (this.anisotropyRotation = t.anisotropyRotation),
          t.fog !== void 0 && (this.fog = t.fog),
          t.flatShading !== void 0 && (this.flatShading = t.flatShading),
          t.blending !== void 0 && (this.blending = t.blending),
          t.combine !== void 0 && (this.combine = t.combine),
          t.side !== void 0 && (this.side = t.side),
          t.shadowSide !== void 0 && (this.shadowSide = t.shadowSide),
          t.opacity !== void 0 && (this.opacity = t.opacity),
          t.transparent !== void 0 && (this.transparent = t.transparent),
          t.alphaTest !== void 0 && (this.alphaTest = t.alphaTest),
          t.alphaHash !== void 0 && (this.alphaHash = t.alphaHash),
          t.depthFunc !== void 0 && (this.depthFunc = t.depthFunc),
          t.depthTest !== void 0 && (this.depthTest = t.depthTest),
          t.depthWrite !== void 0 && (this.depthWrite = t.depthWrite),
          t.colorWrite !== void 0 && (this.colorWrite = t.colorWrite),
          t.clippingPlanes !== void 0 && (this.clippingPlanes = t.clippingPlanes.map((i) => new di().fromJSON(i))),
          t.clipIntersection !== void 0 && (this.clipIntersection = t.clipIntersection),
          t.clipShadows !== void 0 && (this.clipShadows = t.clipShadows),
          t.depthPacking !== void 0 && (this.depthPacking = t.depthPacking),
          t.blendSrc !== void 0 && (this.blendSrc = t.blendSrc),
          t.blendDst !== void 0 && (this.blendDst = t.blendDst),
          t.blendEquation !== void 0 && (this.blendEquation = t.blendEquation),
          t.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = t.blendSrcAlpha),
          t.blendDstAlpha !== void 0 && (this.blendDstAlpha = t.blendDstAlpha),
          t.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = t.blendEquationAlpha),
          t.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(t.blendColor),
          t.blendAlpha !== void 0 && (this.blendAlpha = t.blendAlpha),
          t.stencilWriteMask !== void 0 && (this.stencilWriteMask = t.stencilWriteMask),
          t.stencilFunc !== void 0 && (this.stencilFunc = t.stencilFunc),
          t.stencilRef !== void 0 && (this.stencilRef = t.stencilRef),
          t.stencilFuncMask !== void 0 && (this.stencilFuncMask = t.stencilFuncMask),
          t.stencilFail !== void 0 && (this.stencilFail = t.stencilFail),
          t.stencilZFail !== void 0 && (this.stencilZFail = t.stencilZFail),
          t.stencilZPass !== void 0 && (this.stencilZPass = t.stencilZPass),
          t.stencilWrite !== void 0 && (this.stencilWrite = t.stencilWrite),
          t.wireframe !== void 0 && (this.wireframe = t.wireframe),
          t.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = t.wireframeLinewidth),
          t.wireframeLinecap !== void 0 && (this.wireframeLinecap = t.wireframeLinecap),
          t.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = t.wireframeLinejoin),
          t.rotation !== void 0 && (this.rotation = t.rotation),
          t.linewidth !== void 0 && (this.linewidth = t.linewidth),
          t.linecap !== void 0 && (this.linecap = t.linecap),
          t.linejoin !== void 0 && (this.linejoin = t.linejoin),
          t.dashSize !== void 0 && (this.dashSize = t.dashSize),
          t.gapSize !== void 0 && (this.gapSize = t.gapSize),
          t.scale !== void 0 && (this.scale = t.scale),
          t.polygonOffset !== void 0 && (this.polygonOffset = t.polygonOffset),
          t.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = t.polygonOffsetFactor),
          t.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = t.polygonOffsetUnits),
          t.dithering !== void 0 && (this.dithering = t.dithering),
          t.alphaToCoverage !== void 0 && (this.alphaToCoverage = t.alphaToCoverage),
          t.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = t.premultipliedAlpha),
          t.forceSinglePass !== void 0 && (this.forceSinglePass = t.forceSinglePass),
          t.allowOverride !== void 0 && (this.allowOverride = t.allowOverride),
          t.visible !== void 0 && (this.visible = t.visible),
          t.toneMapped !== void 0 && (this.toneMapped = t.toneMapped),
          t.userData !== void 0 && (this.userData = t.userData),
          t.vertexColors !== void 0 &&
            (typeof t.vertexColors == "number"
              ? (this.vertexColors = t.vertexColors > 0)
              : (this.vertexColors = t.vertexColors)),
          t.size !== void 0 && (this.size = t.size),
          t.sizeAttenuation !== void 0 && (this.sizeAttenuation = t.sizeAttenuation),
          t.map !== void 0 && (this.map = e[t.map] || null),
          t.matcap !== void 0 && (this.matcap = e[t.matcap] || null),
          t.alphaMap !== void 0 && (this.alphaMap = e[t.alphaMap] || null),
          t.bumpMap !== void 0 && (this.bumpMap = e[t.bumpMap] || null),
          t.bumpScale !== void 0 && (this.bumpScale = t.bumpScale),
          t.normalMap !== void 0 && (this.normalMap = e[t.normalMap] || null),
          t.normalMapType !== void 0 && (this.normalMapType = t.normalMapType),
          t.normalScale !== void 0)
        ) {
          let i = t.normalScale;
          (Array.isArray(i) === !1 && (i = [i, i]), (this.normalScale = new Ct().fromArray(i)));
        }
        return (
          t.displacementMap !== void 0 && (this.displacementMap = e[t.displacementMap] || null),
          t.displacementScale !== void 0 && (this.displacementScale = t.displacementScale),
          t.displacementBias !== void 0 && (this.displacementBias = t.displacementBias),
          t.roughnessMap !== void 0 && (this.roughnessMap = e[t.roughnessMap] || null),
          t.metalnessMap !== void 0 && (this.metalnessMap = e[t.metalnessMap] || null),
          t.emissiveMap !== void 0 && (this.emissiveMap = e[t.emissiveMap] || null),
          t.emissiveIntensity !== void 0 && (this.emissiveIntensity = t.emissiveIntensity),
          t.specularMap !== void 0 && (this.specularMap = e[t.specularMap] || null),
          t.specularIntensityMap !== void 0 && (this.specularIntensityMap = e[t.specularIntensityMap] || null),
          t.specularColorMap !== void 0 && (this.specularColorMap = e[t.specularColorMap] || null),
          t.envMap !== void 0 && (this.envMap = e[t.envMap] || null),
          t.envMapRotation !== void 0 && this.envMapRotation.fromArray(t.envMapRotation),
          t.envMapIntensity !== void 0 && (this.envMapIntensity = t.envMapIntensity),
          t.reflectivity !== void 0 && (this.reflectivity = t.reflectivity),
          t.refractionRatio !== void 0 && (this.refractionRatio = t.refractionRatio),
          t.lightMap !== void 0 && (this.lightMap = e[t.lightMap] || null),
          t.lightMapIntensity !== void 0 && (this.lightMapIntensity = t.lightMapIntensity),
          t.aoMap !== void 0 && (this.aoMap = e[t.aoMap] || null),
          t.aoMapIntensity !== void 0 && (this.aoMapIntensity = t.aoMapIntensity),
          t.gradientMap !== void 0 && (this.gradientMap = e[t.gradientMap] || null),
          t.clearcoatMap !== void 0 && (this.clearcoatMap = e[t.clearcoatMap] || null),
          t.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = e[t.clearcoatRoughnessMap] || null),
          t.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = e[t.clearcoatNormalMap] || null),
          t.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new Ct().fromArray(t.clearcoatNormalScale)),
          t.iridescenceMap !== void 0 && (this.iridescenceMap = e[t.iridescenceMap] || null),
          t.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = e[t.iridescenceThicknessMap] || null),
          t.transmissionMap !== void 0 && (this.transmissionMap = e[t.transmissionMap] || null),
          t.thicknessMap !== void 0 && (this.thicknessMap = e[t.thicknessMap] || null),
          t.anisotropyMap !== void 0 && (this.anisotropyMap = e[t.anisotropyMap] || null),
          t.sheenColorMap !== void 0 && (this.sheenColorMap = e[t.sheenColorMap] || null),
          t.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = e[t.sheenRoughnessMap] || null),
          this
        );
      }
      clone() {
        return new this.constructor().copy(this);
      }
      copy(t) {
        ((this.name = t.name),
          (this.blending = t.blending),
          (this.side = t.side),
          (this.vertexColors = t.vertexColors),
          (this.opacity = t.opacity),
          (this.transparent = t.transparent),
          (this.blendSrc = t.blendSrc),
          (this.blendDst = t.blendDst),
          (this.blendEquation = t.blendEquation),
          (this.blendSrcAlpha = t.blendSrcAlpha),
          (this.blendDstAlpha = t.blendDstAlpha),
          (this.blendEquationAlpha = t.blendEquationAlpha),
          this.blendColor.copy(t.blendColor),
          (this.blendAlpha = t.blendAlpha),
          (this.depthFunc = t.depthFunc),
          (this.depthTest = t.depthTest),
          (this.depthWrite = t.depthWrite),
          (this.stencilWriteMask = t.stencilWriteMask),
          (this.stencilFunc = t.stencilFunc),
          (this.stencilRef = t.stencilRef),
          (this.stencilFuncMask = t.stencilFuncMask),
          (this.stencilFail = t.stencilFail),
          (this.stencilZFail = t.stencilZFail),
          (this.stencilZPass = t.stencilZPass),
          (this.stencilWrite = t.stencilWrite));
        let e = t.clippingPlanes,
          i = null;
        if (e !== null) {
          let s = e.length;
          i = new Array(s);
          for (let r = 0; r !== s; ++r) i[r] = e[r].clone();
        }
        return (
          (this.clippingPlanes = i),
          (this.clipIntersection = t.clipIntersection),
          (this.clipShadows = t.clipShadows),
          (this.shadowSide = t.shadowSide),
          (this.colorWrite = t.colorWrite),
          (this.precision = t.precision),
          (this.polygonOffset = t.polygonOffset),
          (this.polygonOffsetFactor = t.polygonOffsetFactor),
          (this.polygonOffsetUnits = t.polygonOffsetUnits),
          (this.dithering = t.dithering),
          (this.alphaTest = t.alphaTest),
          (this.alphaHash = t.alphaHash),
          (this.alphaToCoverage = t.alphaToCoverage),
          (this.premultipliedAlpha = t.premultipliedAlpha),
          (this.forceSinglePass = t.forceSinglePass),
          (this.allowOverride = t.allowOverride),
          (this.visible = t.visible),
          (this.toneMapped = t.toneMapped),
          (this.userData = JSON.parse(JSON.stringify(t.userData))),
          this
        );
      }
      dispose() {
        this.dispatchEvent({ type: "dispose" });
      }
      set needsUpdate(t) {
        t === !0 && this.version++;
      }
    };
  var wi = new F(),
    ec = new F(),
    Mr = new F(),
    Pr = new F(),
    ws = class {
      constructor(t = new F(), e = new F(0, 0, -1)) {
        ((this.origin = t), (this.direction = e));
      }
      set(t, e) {
        return (this.origin.copy(t), this.direction.copy(e), this);
      }
      copy(t) {
        return (this.origin.copy(t.origin), this.direction.copy(t.direction), this);
      }
      at(t, e) {
        return e.copy(this.origin).addScaledVector(this.direction, t);
      }
      lookAt(t) {
        return (this.direction.copy(t).sub(this.origin).normalize(), this);
      }
      recast(t) {
        return (this.origin.copy(this.at(t, wi)), this);
      }
      closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        let i = e.dot(this.direction);
        return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i);
      }
      distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t));
      }
      distanceSqToPoint(t) {
        let e = wi.subVectors(t, this.origin).dot(this.direction);
        return e < 0
          ? this.origin.distanceToSquared(t)
          : (wi.copy(this.origin).addScaledVector(this.direction, e), wi.distanceToSquared(t));
      }
      distanceSqToSegment(t, e, i, s) {
        (ec.copy(t).add(e).multiplyScalar(0.5), Mr.copy(e).sub(t).normalize(), Pr.copy(this.origin).sub(ec));
        let r = t.distanceTo(e) * 0.5,
          a = -this.direction.dot(Mr),
          o = Pr.dot(this.direction),
          l = -Pr.dot(Mr),
          c = Pr.lengthSq(),
          u = Math.abs(1 - a * a),
          f,
          h,
          d,
          E;
        if (u > 0)
          if (((f = a * l - o), (h = a * o - l), (E = r * u), f >= 0))
            if (h >= -E)
              if (h <= E) {
                let v = 1 / u;
                ((f *= v), (h *= v), (d = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * l) + c));
              } else ((h = r), (f = Math.max(0, -(a * h + o))), (d = -f * f + h * (h + 2 * l) + c));
            else ((h = -r), (f = Math.max(0, -(a * h + o))), (d = -f * f + h * (h + 2 * l) + c));
          else
            h <= -E
              ? ((f = Math.max(0, -(-a * r + o))),
                (h = f > 0 ? -r : Math.min(Math.max(-r, -l), r)),
                (d = -f * f + h * (h + 2 * l) + c))
              : h <= E
                ? ((f = 0), (h = Math.min(Math.max(-r, -l), r)), (d = h * (h + 2 * l) + c))
                : ((f = Math.max(0, -(a * r + o))),
                  (h = f > 0 ? r : Math.min(Math.max(-r, -l), r)),
                  (d = -f * f + h * (h + 2 * l) + c));
        else ((h = a > 0 ? -r : r), (f = Math.max(0, -(a * h + o))), (d = -f * f + h * (h + 2 * l) + c));
        return (i && i.copy(this.origin).addScaledVector(this.direction, f), s && s.copy(ec).addScaledVector(Mr, h), d);
      }
      intersectSphere(t, e) {
        if (t.radius < 0) return null;
        wi.subVectors(t.center, this.origin);
        let i = wi.dot(this.direction),
          s = wi.dot(wi) - i * i,
          r = t.radius * t.radius;
        if (s > r) return null;
        let a = Math.sqrt(r - s),
          o = i - a,
          l = i + a;
        return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
      }
      intersectsSphere(t) {
        return t.radius < 0 ? !1 : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
      }
      distanceToPlane(t) {
        let e = t.normal.dot(this.direction);
        if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
        let i = -(this.origin.dot(t.normal) + t.constant) / e;
        return i >= 0 ? i : null;
      }
      intersectPlane(t, e) {
        let i = this.distanceToPlane(t);
        return i === null ? null : this.at(i, e);
      }
      intersectsPlane(t) {
        let e = t.distanceToPoint(this.origin);
        return e === 0 || t.normal.dot(this.direction) * e < 0;
      }
      intersectBox(t, e) {
        let i,
          s,
          r,
          a,
          o,
          l,
          c = 1 / this.direction.x,
          u = 1 / this.direction.y,
          f = 1 / this.direction.z,
          h = this.origin;
        return (
          c >= 0
            ? ((i = (t.min.x - h.x) * c), (s = (t.max.x - h.x) * c))
            : ((i = (t.max.x - h.x) * c), (s = (t.min.x - h.x) * c)),
          u >= 0
            ? ((r = (t.min.y - h.y) * u), (a = (t.max.y - h.y) * u))
            : ((r = (t.max.y - h.y) * u), (a = (t.min.y - h.y) * u)),
          i > a ||
          r > s ||
          ((r > i || isNaN(i)) && (i = r),
          (a < s || isNaN(s)) && (s = a),
          f >= 0
            ? ((o = (t.min.z - h.z) * f), (l = (t.max.z - h.z) * f))
            : ((o = (t.max.z - h.z) * f), (l = (t.min.z - h.z) * f)),
          i > l || o > s) ||
          ((o > i || i !== i) && (i = o), (l < s || s !== s) && (s = l), s < 0)
            ? null
            : this.at(i >= 0 ? i : s, e)
        );
      }
      intersectsBox(t) {
        return this.intersectBox(t, wi) !== null;
      }
      intersectTriangle(t, e, i, s, r) {
        let a = this.origin,
          o = this.direction,
          l = o.x,
          c = o.y,
          u = o.z,
          f = t.x - a.x,
          h = t.y - a.y,
          d = t.z - a.z,
          E = e.x - a.x,
          v = e.y - a.y,
          m = e.z - a.z,
          p = i.x - a.x,
          y = i.y - a.y,
          Q = i.z - a.z,
          S = Math.abs(l),
          M = Math.abs(c),
          P = Math.abs(u),
          T,
          x,
          b,
          N,
          w,
          C,
          z,
          A,
          L,
          G,
          D,
          et;
        if (
          (S >= M && S >= P
            ? ((b = l),
              (C = f),
              (L = E),
              (et = p),
              l >= 0
                ? ((T = c), (x = u), (N = h), (w = d), (z = v), (A = m), (G = y), (D = Q))
                : ((T = u), (x = c), (N = d), (w = h), (z = m), (A = v), (G = Q), (D = y)))
            : M >= P
              ? ((b = c),
                (C = h),
                (L = v),
                (et = y),
                c >= 0
                  ? ((T = u), (x = l), (N = d), (w = f), (z = m), (A = E), (G = Q), (D = p))
                  : ((T = l), (x = u), (N = f), (w = d), (z = E), (A = m), (G = p), (D = Q)))
              : ((b = u),
                (C = d),
                (L = m),
                (et = Q),
                u >= 0
                  ? ((T = l), (x = c), (N = f), (w = h), (z = E), (A = v), (G = p), (D = y))
                  : ((T = c), (x = l), (N = h), (w = f), (z = v), (A = E), (G = y), (D = p))),
          b === 0)
        )
          return null;
        let J = T / b,
          Y = x / b,
          it = 1 / b,
          ft = N - J * C,
          ct = w - Y * C,
          ee = z - J * L,
          Dt = A - Y * L,
          yt = G - J * et,
          W = D - Y * et,
          Z = yt * Dt - W * ee,
          xt = ft * W - ct * yt,
          Ut = ee * ct - Dt * ft;
        if (s) {
          if (Z < 0 || xt < 0 || Ut < 0) return null;
        } else if ((Z < 0 || xt < 0 || Ut < 0) && (Z > 0 || xt > 0 || Ut > 0)) return null;
        let pt = Z + xt + Ut;
        if (pt === 0) return null;
        let Bt = it * (Z * C + xt * L + Ut * et);
        return (pt > 0 ? Bt < 0 : Bt > 0) ? null : this.at(Bt / pt, r);
      }
      applyMatrix4(t) {
        return (this.origin.applyMatrix4(t), this.direction.transformDirection(t), this);
      }
      equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction);
      }
      clone() {
        return new this.constructor().copy(this);
      }
    },
    pi = class extends Li {
      constructor(t) {
        (super(),
          (this.isMeshBasicMaterial = !0),
          (this.type = "MeshBasicMaterial"),
          (this.color = new Tt(16777215)),
          (this.map = null),
          (this.lightMap = null),
          (this.lightMapIntensity = 1),
          (this.aoMap = null),
          (this.aoMapIntensity = 1),
          (this.specularMap = null),
          (this.alphaMap = null),
          (this.envMap = null),
          (this.envMapRotation = new Ui()),
          (this.combine = Sc),
          (this.reflectivity = 1),
          (this.refractionRatio = 0.98),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.wireframeLinecap = "round"),
          (this.wireframeLinejoin = "round"),
          (this.fog = !0),
          this.setValues(t));
      }
      copy(t) {
        return (
          super.copy(t),
          this.color.copy(t.color),
          (this.map = t.map),
          (this.lightMap = t.lightMap),
          (this.lightMapIntensity = t.lightMapIntensity),
          (this.aoMap = t.aoMap),
          (this.aoMapIntensity = t.aoMapIntensity),
          (this.specularMap = t.specularMap),
          (this.alphaMap = t.alphaMap),
          (this.envMap = t.envMap),
          this.envMapRotation.copy(t.envMapRotation),
          (this.combine = t.combine),
          (this.reflectivity = t.reflectivity),
          (this.refractionRatio = t.refractionRatio),
          (this.wireframe = t.wireframe),
          (this.wireframeLinewidth = t.wireframeLinewidth),
          (this.wireframeLinecap = t.wireframeLinecap),
          (this.wireframeLinejoin = t.wireframeLinejoin),
          (this.fog = t.fog),
          this
        );
      }
    },
    Ll = new Vt(),
    pn = new ws(),
    _r = new Oi(),
    $l = new F(),
    br = new F(),
    Qr = new F(),
    Rr = new F(),
    ic = new F(),
    Tr = new F(),
    zl = new F(),
    Ir = new F(),
    Ee = class extends Ae {
      constructor(t = new ve(), e = new pi()) {
        (super(),
          (this.isMesh = !0),
          (this.type = "Mesh"),
          (this.geometry = t),
          (this.material = e),
          (this.morphTargetDictionary = void 0),
          (this.morphTargetInfluences = void 0),
          (this.count = 1),
          this.updateMorphTargets());
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
          t.morphTargetDictionary !== void 0 &&
            (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
          (this.material = Array.isArray(t.material) ? t.material.slice() : t.material),
          (this.geometry = t.geometry),
          this
        );
      }
      updateMorphTargets() {
        let e = this.geometry.morphAttributes,
          i = Object.keys(e);
        if (i.length > 0) {
          let s = e[i[0]];
          if (s !== void 0) {
            ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
            for (let r = 0, a = s.length; r < a; r++) {
              let o = s[r].name || String(r);
              (this.morphTargetInfluences.push(0), (this.morphTargetDictionary[o] = r));
            }
          }
        }
      }
      getVertexPosition(t, e) {
        let i = this.geometry,
          s = i.attributes.position,
          r = i.morphAttributes.position,
          a = i.morphTargetsRelative;
        e.fromBufferAttribute(s, t);
        let o = this.morphTargetInfluences;
        if (r && o) {
          Tr.set(0, 0, 0);
          for (let l = 0, c = r.length; l < c; l++) {
            let u = o[l],
              f = r[l];
            u !== 0 && (ic.fromBufferAttribute(f, t), a ? Tr.addScaledVector(ic, u) : Tr.addScaledVector(ic.sub(e), u));
          }
          e.add(Tr);
        }
        return e;
      }
      intersectsFrustum(t) {
        return t.intersectsObject(this);
      }
      raycast(t, e) {
        let i = this.geometry,
          s = this.material,
          r = this.matrixWorld;
        s !== void 0 &&
          (i.boundingSphere === null && i.computeBoundingSphere(),
          _r.copy(i.boundingSphere),
          _r.applyMatrix4(r),
          pn.copy(t.ray).recast(t.near),
          !(
            _r.containsPoint(pn.origin) === !1 &&
            (pn.intersectSphere(_r, $l) === null || pn.origin.distanceToSquared($l) > (t.far - t.near) ** 2)
          ) &&
            (Ll.copy(r).invert(),
            pn.copy(t.ray).applyMatrix4(Ll),
            !(i.boundingBox !== null && pn.intersectsBox(i.boundingBox) === !1) &&
              this._computeIntersections(t, e, pn)));
      }
      _computeIntersections(t, e, i) {
        let s,
          r = this.geometry,
          a = this.material,
          o = r.index,
          l = r.attributes.position,
          c = r.attributes.uv,
          u = r.attributes.uv1,
          f = r.attributes.normal,
          h = r.groups,
          d = r.drawRange;
        if (o !== null)
          if (Array.isArray(a))
            for (let E = 0, v = h.length; E < v; E++) {
              let m = h[E],
                p = a[m.materialIndex],
                y = Math.max(m.start, d.start),
                Q = Math.min(o.count, Math.min(m.start + m.count, d.start + d.count));
              for (let S = y, M = Q; S < M; S += 3) {
                let P = o.getX(S),
                  T = o.getX(S + 1),
                  x = o.getX(S + 2);
                ((s = Ar(this, p, t, i, c, u, f, P, T, x)),
                  s && ((s.faceIndex = Math.floor(S / 3)), (s.face.materialIndex = m.materialIndex), e.push(s)));
              }
            }
          else {
            let E = Math.max(0, d.start),
              v = Math.min(o.count, d.start + d.count);
            for (let m = E, p = v; m < p; m += 3) {
              let y = o.getX(m),
                Q = o.getX(m + 1),
                S = o.getX(m + 2);
              ((s = Ar(this, a, t, i, c, u, f, y, Q, S)), s && ((s.faceIndex = Math.floor(m / 3)), e.push(s)));
            }
          }
        else if (l !== void 0)
          if (Array.isArray(a))
            for (let E = 0, v = h.length; E < v; E++) {
              let m = h[E],
                p = a[m.materialIndex],
                y = Math.max(m.start, d.start),
                Q = Math.min(l.count, Math.min(m.start + m.count, d.start + d.count));
              for (let S = y, M = Q; S < M; S += 3) {
                let P = S,
                  T = S + 1,
                  x = S + 2;
                ((s = Ar(this, p, t, i, c, u, f, P, T, x)),
                  s && ((s.faceIndex = Math.floor(S / 3)), (s.face.materialIndex = m.materialIndex), e.push(s)));
              }
            }
          else {
            let E = Math.max(0, d.start),
              v = Math.min(l.count, d.start + d.count);
            for (let m = E, p = v; m < p; m += 3) {
              let y = m,
                Q = m + 1,
                S = m + 2;
              ((s = Ar(this, a, t, i, c, u, f, y, Q, S)), s && ((s.faceIndex = Math.floor(m / 3)), e.push(s)));
            }
          }
      }
    };
  function Sd(n, t, e, i, s, r, a, o) {
    let l;
    if (
      (t.side === Le ? (l = i.intersectTriangle(a, r, s, !0, o)) : (l = i.intersectTriangle(s, r, a, t.side === sn, o)),
      l === null)
    )
      return null;
    (Ir.copy(o), Ir.applyMatrix4(n.matrixWorld));
    let c = e.ray.origin.distanceTo(Ir);
    return c < e.near || c > e.far ? null : { distance: c, point: Ir.clone(), object: n };
  }
  function Ar(n, t, e, i, s, r, a, o, l, c) {
    (n.getVertexPosition(o, br), n.getVertexPosition(l, Qr), n.getVertexPosition(c, Rr));
    let u = Sd(n, t, e, i, br, Qr, Rr, zl);
    if (u) {
      let f = new F();
      (Ci.getBarycoord(zl, br, Qr, Rr, f),
        s && (u.uv = Ci.getInterpolatedAttribute(s, o, l, c, f, new Ct())),
        r && (u.uv1 = Ci.getInterpolatedAttribute(r, o, l, c, f, new Ct())),
        a &&
          ((u.normal = Ci.getInterpolatedAttribute(a, o, l, c, f, new F())),
          u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1)));
      let h = { a: o, b: l, c, normal: new F(), materialIndex: 0 };
      (Ci.getNormal(br, Qr, Rr, h.normal), (u.face = h), (u.barycoord = f));
    }
    return u;
  }
  var Cs = class extends We {
    constructor(t = null, e = 1, i = 1, s, r, a, o, l, c = Ce, u = Ce, f, h) {
      (super(null, a, o, l, c, u, s, r, f, h),
        (this.isDataTexture = !0),
        (this.image = { data: t, width: e, height: i }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
  };
  var Pi = class extends xe {
      constructor(t, e, i, s = 1) {
        (super(t, e, i), (this.isInstancedBufferAttribute = !0), (this.meshPerAttribute = s));
      }
      copy(t) {
        return (super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this);
      }
      toJSON() {
        let t = super.toJSON();
        return ((t.meshPerAttribute = this.meshPerAttribute), (t.isInstancedBufferAttribute = !0), t);
      }
    },
    zn = new Vt(),
    Bl = new Vt(),
    Fr = [],
    ql = new Mi(),
    yd = new Vt(),
    Ms = new Ee(),
    Ps = new Oi(),
    vn = class extends Ee {
      constructor(t, e, i) {
        (super(t, e),
          (this.isInstancedMesh = !0),
          (this.instanceMatrix = new Pi(new Float32Array(i * 16), 16)),
          (this.instanceColor = null),
          (this.morphTexture = null),
          (this.count = i),
          (this.boundingBox = null),
          (this.boundingSphere = null));
        for (let s = 0; s < i; s++) this.setMatrixAt(s, yd);
      }
      computeBoundingBox() {
        let t = this.geometry,
          e = this.count;
        (this.boundingBox === null && (this.boundingBox = new Mi()),
          t.boundingBox === null && t.computeBoundingBox(),
          this.boundingBox.makeEmpty());
        for (let i = 0; i < e; i++)
          (this.getMatrixAt(i, zn), ql.copy(t.boundingBox).applyMatrix4(zn), this.boundingBox.union(ql));
      }
      computeBoundingSphere() {
        let t = this.geometry,
          e = this.count;
        (this.boundingSphere === null && (this.boundingSphere = new Oi()),
          t.boundingSphere === null && t.computeBoundingSphere(),
          this.boundingSphere.makeEmpty());
        for (let i = 0; i < e; i++)
          (this.getMatrixAt(i, zn), Ps.copy(t.boundingSphere).applyMatrix4(zn), this.boundingSphere.union(Ps));
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          this.instanceMatrix.copy(t.instanceMatrix),
          t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()),
          t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()),
          (this.count = t.count),
          t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()),
          t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()),
          this
        );
      }
      getColorAt(t, e) {
        return this.instanceColor === null ? e.setRGB(1, 1, 1) : e.fromArray(this.instanceColor.array, t * 3);
      }
      getMatrixAt(t, e) {
        return e.fromArray(this.instanceMatrix.array, t * 16);
      }
      getMorphAt(t, e) {
        let i = e.morphTargetInfluences,
          s = this.morphTexture.source.data.data,
          r = i.length + 1,
          a = t * r + 1;
        for (let o = 0; o < i.length; o++) i[o] = s[a + o];
      }
      raycast(t, e) {
        let i = this.matrixWorld,
          s = this.count;
        if (
          ((Ms.geometry = this.geometry),
          (Ms.material = this.material),
          Ms.material !== void 0 &&
            (this.boundingSphere === null && this.computeBoundingSphere(),
            Ps.copy(this.boundingSphere),
            Ps.applyMatrix4(i),
            t.ray.intersectsSphere(Ps) !== !1))
        )
          for (let r = 0; r < s; r++) {
            (this.getMatrixAt(r, zn), Bl.multiplyMatrices(i, zn), (Ms.matrixWorld = Bl), Ms.raycast(t, Fr));
            for (let a = 0, o = Fr.length; a < o; a++) {
              let l = Fr[a];
              ((l.instanceId = r), (l.object = this), e.push(l));
            }
            Fr.length = 0;
          }
      }
      setColorAt(t, e) {
        return (
          this.instanceColor === null &&
            (this.instanceColor = new Pi(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)),
          e.toArray(this.instanceColor.array, t * 3),
          this
        );
      }
      setMatrixAt(t, e) {
        return (e.toArray(this.instanceMatrix.array, t * 16), this);
      }
      setMorphAt(t, e) {
        let i = e.morphTargetInfluences,
          s = i.length + 1;
        this.morphTexture === null &&
          (this.morphTexture = new Cs(new Float32Array(s * this.count), s, this.count, Ra, Ke));
        let r = this.morphTexture.source.data.data,
          a = 0;
        for (let c = 0; c < i.length; c++) a += i[c];
        let o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
          l = s * t;
        return ((r[l] = o), r.set(i, l + 1), this);
      }
      updateMorphTargets() {}
      dispose() {
        (super.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), (this.morphTexture = null)));
      }
    },
    mn = new Oi(),
    Md = new Ct(0.5, 0.5),
    Nr = new F(),
    jn = class {
      constructor(t = new di(), e = new di(), i = new di(), s = new di(), r = new di(), a = new di()) {
        this.planes = [t, e, i, s, r, a];
      }
      set(t, e, i, s, r, a) {
        let o = this.planes;
        return (o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(s), o[4].copy(r), o[5].copy(a), this);
      }
      copy(t) {
        let e = this.planes;
        for (let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
        return this;
      }
      setFromProjectionMatrix(t, e = fi, i = !1) {
        let s = this.planes,
          r = t.elements,
          a = r[0],
          o = r[1],
          l = r[2],
          c = r[3],
          u = r[4],
          f = r[5],
          h = r[6],
          d = r[7],
          E = r[8],
          v = r[9],
          m = r[10],
          p = r[11],
          y = r[12],
          Q = r[13],
          S = r[14],
          M = r[15];
        if (
          (s[0].setComponents(c - a, d - u, p - E, M - y).normalize(),
          s[1].setComponents(c + a, d + u, p + E, M + y).normalize(),
          s[2].setComponents(c + o, d + f, p + v, M + Q).normalize(),
          s[3].setComponents(c - o, d - f, p - v, M - Q).normalize(),
          i)
        )
          (s[4].setComponents(l, h, m, S).normalize(), s[5].setComponents(c - l, d - h, p - m, M - S).normalize());
        else if ((s[4].setComponents(c - l, d - h, p - m, M - S).normalize(), e === fi))
          s[5].setComponents(c + l, d + h, p + m, M + S).normalize();
        else if (e === kn) s[5].setComponents(l, h, m, S).normalize();
        else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        return this;
      }
      intersectsObject(t) {
        if (t.boundingSphere !== void 0)
          (t.boundingSphere === null && t.computeBoundingSphere(),
            mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld));
        else {
          let e = t.geometry;
          (e.boundingSphere === null && e.computeBoundingSphere(),
            mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld));
        }
        return this.intersectsSphere(mn);
      }
      intersectsSprite(t) {
        mn.center.set(0, 0, 0);
        let e = Md.distanceTo(t.center);
        return ((mn.radius = 0.7071067811865476 + e), mn.applyMatrix4(t.matrixWorld), this.intersectsSphere(mn));
      }
      intersectsSphere(t) {
        let e = this.planes,
          i = t.center,
          s = -t.radius;
        for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(i) < s) return !1;
        return !0;
      }
      intersectsBox(t) {
        let e = this.planes;
        for (let i = 0; i < 6; i++) {
          let s = e[i];
          if (
            ((Nr.x = s.normal.x > 0 ? t.max.x : t.min.x),
            (Nr.y = s.normal.y > 0 ? t.max.y : t.min.y),
            (Nr.z = s.normal.z > 0 ? t.max.z : t.min.z),
            s.distanceToPoint(Nr) < 0)
          )
            return !1;
        }
        return !0;
      }
      containsPoint(t) {
        let e = this.planes;
        for (let i = 0; i < 6; i++) if (e[i].distanceToPoint(t) < 0) return !1;
        return !0;
      }
      clone() {
        return new this.constructor().copy(this);
      }
    };
  var ts = class extends Li {
      constructor(t) {
        (super(),
          (this.isLineBasicMaterial = !0),
          (this.type = "LineBasicMaterial"),
          (this.color = new Tt(16777215)),
          (this.map = null),
          (this.linewidth = 1),
          (this.linecap = "round"),
          (this.linejoin = "round"),
          (this.fog = !0),
          this.setValues(t));
      }
      copy(t) {
        return (
          super.copy(t),
          this.color.copy(t.color),
          (this.map = t.map),
          (this.linewidth = t.linewidth),
          (this.linecap = t.linecap),
          (this.linejoin = t.linejoin),
          (this.fog = t.fog),
          this
        );
      }
    },
    ea = new F(),
    ia = new F(),
    Gl = new Vt(),
    _s = new ws(),
    wr = new Oi(),
    nc = new F(),
    Vl = new F(),
    na = class extends Ae {
      constructor(t = new ve(), e = new ts()) {
        (super(),
          (this.isLine = !0),
          (this.type = "Line"),
          (this.geometry = t),
          (this.material = e),
          (this.morphTargetDictionary = void 0),
          (this.morphTargetInfluences = void 0),
          this.updateMorphTargets());
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          (this.material = Array.isArray(t.material) ? t.material.slice() : t.material),
          (this.geometry = t.geometry),
          this
        );
      }
      computeLineDistances() {
        let t = this.geometry;
        if (t.index === null) {
          let e = t.attributes.position,
            i = [0];
          for (let s = 1, r = e.count; s < r; s++)
            (ea.fromBufferAttribute(e, s - 1),
              ia.fromBufferAttribute(e, s),
              (i[s] = i[s - 1]),
              (i[s] += ea.distanceTo(ia)));
          t.setAttribute("lineDistance", new ie(i, 1));
        } else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this;
      }
      intersectsFrustum(t) {
        return t.intersectsObject(this);
      }
      raycast(t, e) {
        let i = this.geometry,
          s = this.matrixWorld,
          r = t.params.Line.threshold,
          a = i.drawRange;
        if (
          (i.boundingSphere === null && i.computeBoundingSphere(),
          wr.copy(i.boundingSphere),
          wr.applyMatrix4(s),
          (wr.radius += r),
          t.ray.intersectsSphere(wr) === !1)
        )
          return;
        (Gl.copy(s).invert(), _s.copy(t.ray).applyMatrix4(Gl));
        let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          l = o * o,
          c = this.isLineSegments ? 2 : 1,
          u = i.index,
          h = i.attributes.position;
        if (u !== null) {
          let d = Math.max(0, a.start),
            E = Math.min(u.count, a.start + a.count);
          for (let v = d, m = E - 1; v < m; v += c) {
            let p = u.getX(v),
              y = u.getX(v + 1),
              Q = Cr(this, t, _s, l, p, y, v);
            Q && e.push(Q);
          }
          if (this.isLineLoop) {
            let v = u.getX(E - 1),
              m = u.getX(d),
              p = Cr(this, t, _s, l, v, m, E - 1);
            p && e.push(p);
          }
        } else {
          let d = Math.max(0, a.start),
            E = Math.min(h.count, a.start + a.count);
          for (let v = d, m = E - 1; v < m; v += c) {
            let p = Cr(this, t, _s, l, v, v + 1, v);
            p && e.push(p);
          }
          if (this.isLineLoop) {
            let v = Cr(this, t, _s, l, E - 1, d, E - 1);
            v && e.push(v);
          }
        }
      }
      updateMorphTargets() {
        let e = this.geometry.morphAttributes,
          i = Object.keys(e);
        if (i.length > 0) {
          let s = e[i[0]];
          if (s !== void 0) {
            ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
            for (let r = 0, a = s.length; r < a; r++) {
              let o = s[r].name || String(r);
              (this.morphTargetInfluences.push(0), (this.morphTargetDictionary[o] = r));
            }
          }
        }
      }
    };
  function Cr(n, t, e, i, s, r, a) {
    let o = n.geometry.attributes.position;
    if ((ea.fromBufferAttribute(o, s), ia.fromBufferAttribute(o, r), e.distanceSqToSegment(ea, ia, nc, Vl) > i)) return;
    nc.applyMatrix4(n.matrixWorld);
    let c = t.ray.origin.distanceTo(nc);
    if (!(c < t.near || c > t.far))
      return {
        distance: c,
        point: Vl.clone().applyMatrix4(n.matrixWorld),
        index: a,
        face: null,
        faceIndex: null,
        barycoord: null,
        object: n,
      };
  }
  var Dl = new F(),
    Jl = new F(),
    Hs = class extends na {
      constructor(t, e) {
        (super(t, e), (this.isLineSegments = !0), (this.type = "LineSegments"));
      }
      computeLineDistances() {
        let t = this.geometry;
        if (t.index === null) {
          let e = t.attributes.position,
            i = [];
          for (let s = 0, r = e.count; s < r; s += 2)
            (Dl.fromBufferAttribute(e, s),
              Jl.fromBufferAttribute(e, s + 1),
              (i[s] = s === 0 ? 0 : i[s - 1]),
              (i[s + 1] = i[s] + Dl.distanceTo(Jl)));
          t.setAttribute("lineDistance", new ie(i, 1));
        } else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this;
      }
    };
  var Us = class extends We {
    constructor(t = [], e = rn, i, s, r, a, o, l, c, u) {
      (super(t, e, i, s, r, a, o, l, c, u), (this.isCubeTexture = !0), (this.flipY = !1));
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  };
  var _i = class extends We {
      constructor(t, e, i = mi, s, r, a, o = Ce, l = Ce, c, u = si, f = 1) {
        if (u !== si && u !== on)
          throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        let h = { width: t, height: e, depth: f };
        (super(h, s, r, a, o, l, u, i, c),
          (this.isDepthTexture = !0),
          (this.flipY = !1),
          (this.generateMipmaps = !1),
          (this.compareFunction = null));
      }
      copy(t) {
        return (
          super.copy(t),
          (this.source = new Kn(Object.assign({}, t.image))),
          (this.compareFunction = t.compareFunction),
          this
        );
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return ((e.compareFunction = this.compareFunction), e);
      }
    },
    sa = class extends _i {
      constructor(t, e = mi, i = rn, s, r, a = Ce, o = Ce, l, c = si) {
        let u = { width: t, height: t, depth: 1 },
          f = [u, u, u, u, u, u];
        (super(t, t, e, i, s, r, a, o, l, c),
          (this.image = f),
          (this.isCubeDepthTexture = !0),
          (this.isCubeTexture = !0));
      }
      get images() {
        return this.image;
      }
      set images(t) {
        this.image = t;
      }
    },
    Os = class extends We {
      constructor(t = null) {
        (super(), (this.sourceTexture = t), (this.isExternalTexture = !0));
      }
      copy(t) {
        return (super.copy(t), (this.sourceTexture = t.sourceTexture), this);
      }
    },
    bi = class n extends ve {
      constructor(t = 1, e = 1, i = 1, s = 1, r = 1, a = 1) {
        (super(),
          (this.type = "BoxGeometry"),
          (this.parameters = { width: t, height: e, depth: i, widthSegments: s, heightSegments: r, depthSegments: a }));
        let o = this;
        ((s = Math.floor(s)), (r = Math.floor(r)), (a = Math.floor(a)));
        let l = [],
          c = [],
          u = [],
          f = [],
          h = 0,
          d = 0;
        (E("z", "y", "x", -1, -1, i, e, t, a, r, 0),
          E("z", "y", "x", 1, -1, i, e, -t, a, r, 1),
          E("x", "z", "y", 1, 1, t, i, e, s, a, 2),
          E("x", "z", "y", 1, -1, t, i, -e, s, a, 3),
          E("x", "y", "z", 1, -1, t, e, i, s, r, 4),
          E("x", "y", "z", -1, -1, t, e, -i, s, r, 5),
          this.setIndex(l),
          this.setAttribute("position", new ie(c, 3)),
          this.setAttribute("normal", new ie(u, 3)),
          this.setAttribute("uv", new ie(f, 2)));
        function E(v, m, p, y, Q, S, M, P, T, x, b) {
          let N = S / T,
            w = M / x,
            C = S / 2,
            z = M / 2,
            A = P / 2,
            L = T + 1,
            G = x + 1,
            D = 0,
            et = 0,
            J = new F();
          for (let Y = 0; Y < G; Y++) {
            let it = Y * w - z;
            for (let ft = 0; ft < L; ft++) {
              let ct = ft * N - C;
              ((J[v] = ct * y),
                (J[m] = it * Q),
                (J[p] = A),
                c.push(J.x, J.y, J.z),
                (J[v] = 0),
                (J[m] = 0),
                (J[p] = P > 0 ? 1 : -1),
                u.push(J.x, J.y, J.z),
                f.push(ft / T),
                f.push(1 - Y / x),
                (D += 1));
            }
          }
          for (let Y = 0; Y < x; Y++)
            for (let it = 0; it < T; it++) {
              let ft = h + it + L * Y,
                ct = h + it + L * (Y + 1),
                ee = h + (it + 1) + L * (Y + 1),
                Dt = h + (it + 1) + L * Y;
              (l.push(ft, ct, Dt), l.push(ct, ee, Dt), (et += 6));
            }
          (o.addGroup(d, et, b), (d += et), (h += D));
        }
      }
      copy(t) {
        return (super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this);
      }
      static fromJSON(t) {
        return new n(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
      }
    };
  var Zi = class n extends ve {
      constructor(t = 1, e = 1, i = 1, s = 32, r = 1, a = !1, o = 0, l = Math.PI * 2) {
        (super(),
          (this.type = "CylinderGeometry"),
          (this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: s,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: l,
          }));
        let c = this;
        ((s = Math.floor(s)), (r = Math.floor(r)));
        let u = [],
          f = [],
          h = [],
          d = [],
          E = 0,
          v = [],
          m = i / 2,
          p = 0;
        (y(),
          a === !1 && (t > 0 && Q(!0), e > 0 && Q(!1)),
          this.setIndex(u),
          this.setAttribute("position", new ie(f, 3)),
          this.setAttribute("normal", new ie(h, 3)),
          this.setAttribute("uv", new ie(d, 2)));
        function y() {
          let S = new F(),
            M = new F(),
            P = 0,
            T = (e - t) / i;
          for (let x = 0; x <= r; x++) {
            let b = [],
              N = x / r,
              w = N * (e - t) + t;
            for (let C = 0; C <= s; C++) {
              let z = C / s,
                A = z * l + o,
                L = Math.sin(A),
                G = Math.cos(A);
              ((M.x = w * L),
                (M.y = -N * i + m),
                (M.z = w * G),
                f.push(M.x, M.y, M.z),
                S.set(L, T, G).normalize(),
                h.push(S.x, S.y, S.z),
                d.push(z, 1 - N),
                b.push(E++));
            }
            v.push(b);
          }
          for (let x = 0; x < s; x++)
            for (let b = 0; b < r; b++) {
              let N = v[b][x],
                w = v[b + 1][x],
                C = v[b + 1][x + 1],
                z = v[b][x + 1];
              ((t > 0 || b !== 0) && (u.push(N, w, z), (P += 3)),
                (e > 0 || b !== r - 1) && (u.push(w, C, z), (P += 3)));
            }
          (c.addGroup(p, P, 0), (p += P));
        }
        function Q(S) {
          let M = E,
            P = new Ct(),
            T = new F(),
            x = 0,
            b = S === !0 ? t : e,
            N = S === !0 ? 1 : -1;
          for (let C = 1; C <= s; C++) (f.push(0, m * N, 0), h.push(0, N, 0), d.push(0.5, 0.5), E++);
          let w = E;
          for (let C = 0; C <= s; C++) {
            let A = (C / s) * l + o,
              L = Math.cos(A),
              G = Math.sin(A);
            ((T.x = b * G),
              (T.y = m * N),
              (T.z = b * L),
              f.push(T.x, T.y, T.z),
              h.push(0, N, 0),
              (P.x = L * 0.5 + 0.5),
              (P.y = G * 0.5 * N + 0.5),
              d.push(P.x, P.y),
              E++);
          }
          for (let C = 0; C < s; C++) {
            let z = M + C,
              A = w + C;
            (S === !0 ? u.push(A, A + 1, z) : u.push(A + 1, A, z), (x += 3));
          }
          (c.addGroup(p, x, S === !0 ? 1 : 2), (p += x));
        }
      }
      copy(t) {
        return (super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this);
      }
      static fromJSON(t) {
        return new n(
          t.radiusTop,
          t.radiusBottom,
          t.height,
          t.radialSegments,
          t.heightSegments,
          t.openEnded,
          t.thetaStart,
          t.thetaLength,
        );
      }
    },
    Sn = class n extends Zi {
      constructor(t = 1, e = 1, i = 32, s = 1, r = !1, a = 0, o = Math.PI * 2) {
        (super(0, t, e, i, s, r, a, o),
          (this.type = "ConeGeometry"),
          (this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: s,
            openEnded: r,
            thetaStart: a,
            thetaLength: o,
          }));
      }
      static fromJSON(t) {
        return new n(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
      }
    },
    Ls = class n extends ve {
      constructor(t = [], e = [], i = 1, s = 0) {
        (super(),
          (this.type = "PolyhedronGeometry"),
          (this.parameters = { vertices: t, indices: e, radius: i, detail: s }));
        let r = [],
          a = [];
        (o(s),
          c(i),
          u(),
          this.setAttribute("position", new ie(r, 3)),
          this.setAttribute("normal", new ie(r.slice(), 3)),
          this.setAttribute("uv", new ie(a, 2)),
          s === 0 ? this.computeVertexNormals() : this.normalizeNormals());
        function o(y) {
          let Q = new F(),
            S = new F(),
            M = new F();
          for (let P = 0; P < e.length; P += 3) (d(e[P + 0], Q), d(e[P + 1], S), d(e[P + 2], M), l(Q, S, M, y));
        }
        function l(y, Q, S, M) {
          let P = M + 1,
            T = [];
          for (let x = 0; x <= P; x++) {
            T[x] = [];
            let b = y.clone().lerp(S, x / P),
              N = Q.clone().lerp(S, x / P),
              w = P - x;
            for (let C = 0; C <= w; C++) C === 0 && x === P ? (T[x][C] = b) : (T[x][C] = b.clone().lerp(N, C / w));
          }
          for (let x = 0; x < P; x++)
            for (let b = 0; b < 2 * (P - x) - 1; b++) {
              let N = Math.floor(b / 2);
              b % 2 === 0
                ? (h(T[x][N + 1]), h(T[x + 1][N]), h(T[x][N]))
                : (h(T[x][N + 1]), h(T[x + 1][N + 1]), h(T[x + 1][N]));
            }
        }
        function c(y) {
          let Q = new F();
          for (let S = 0; S < r.length; S += 3)
            ((Q.x = r[S + 0]),
              (Q.y = r[S + 1]),
              (Q.z = r[S + 2]),
              Q.normalize().multiplyScalar(y),
              (r[S + 0] = Q.x),
              (r[S + 1] = Q.y),
              (r[S + 2] = Q.z));
        }
        function u() {
          let y = new F();
          for (let Q = 0; Q < r.length; Q += 3) {
            ((y.x = r[Q + 0]), (y.y = r[Q + 1]), (y.z = r[Q + 2]));
            let S = m(y) / 2 / Math.PI + 0.5,
              M = p(y) / Math.PI + 0.5;
            a.push(S, 1 - M);
          }
          (E(), f());
        }
        function f() {
          for (let y = 0; y < a.length; y += 6) {
            let Q = a[y + 0],
              S = a[y + 2],
              M = a[y + 4],
              P = Math.max(Q, S, M),
              T = Math.min(Q, S, M);
            P > 0.9 && T < 0.1 && (Q < 0.2 && (a[y + 0] += 1), S < 0.2 && (a[y + 2] += 1), M < 0.2 && (a[y + 4] += 1));
          }
        }
        function h(y) {
          r.push(y.x, y.y, y.z);
        }
        function d(y, Q) {
          let S = y * 3;
          ((Q.x = t[S + 0]), (Q.y = t[S + 1]), (Q.z = t[S + 2]));
        }
        function E() {
          let y = new F(),
            Q = new F(),
            S = new F(),
            M = new F(),
            P = new Ct(),
            T = new Ct(),
            x = new Ct();
          for (let b = 0, N = 0; b < r.length; b += 9, N += 6) {
            (y.set(r[b + 0], r[b + 1], r[b + 2]),
              Q.set(r[b + 3], r[b + 4], r[b + 5]),
              S.set(r[b + 6], r[b + 7], r[b + 8]),
              P.set(a[N + 0], a[N + 1]),
              T.set(a[N + 2], a[N + 3]),
              x.set(a[N + 4], a[N + 5]),
              M.copy(y).add(Q).add(S).divideScalar(3));
            let w = m(M);
            (v(P, N + 0, y, w), v(T, N + 2, Q, w), v(x, N + 4, S, w));
          }
        }
        function v(y, Q, S, M) {
          (M < 0 && y.x === 1 && (a[Q] = y.x - 1), S.x === 0 && S.z === 0 && (a[Q] = M / 2 / Math.PI + 0.5));
        }
        function m(y) {
          return Math.atan2(y.z, -y.x);
        }
        function p(y) {
          return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z));
        }
      }
      copy(t) {
        return (super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this);
      }
      static fromJSON(t) {
        return new n(t.vertices, t.indices, t.radius, t.detail);
      }
    },
    $s = class n extends Ls {
      constructor(t = 1, e = 0) {
        let i = (1 + Math.sqrt(5)) / 2,
          s = 1 / i,
          r = [
            -1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            1,
            1,
            1,
            0,
            -s,
            -i,
            0,
            -s,
            i,
            0,
            s,
            -i,
            0,
            s,
            i,
            -s,
            -i,
            0,
            -s,
            i,
            0,
            s,
            -i,
            0,
            s,
            i,
            0,
            -i,
            0,
            -s,
            i,
            0,
            -s,
            -i,
            0,
            s,
            i,
            0,
            s,
          ],
          a = [
            3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8,
            16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3,
            13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14,
            19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9,
          ];
        (super(r, a, t, e), (this.type = "DodecahedronGeometry"), (this.parameters = { radius: t, detail: e }));
      }
      static fromJSON(t) {
        return new n(t.radius, t.detail);
      }
    },
    Hr = new F(),
    Ur = new F(),
    sc = new F(),
    Or = new Ci(),
    zs = class extends ve {
      constructor(t = null, e = 1) {
        if (
          (super(), (this.type = "EdgesGeometry"), (this.parameters = { geometry: t, thresholdAngle: e }), t !== null)
        ) {
          let s = Math.pow(10, 4),
            r = Math.cos(qr * e),
            a = t.getIndex(),
            o = t.getAttribute("position"),
            l = a ? a.count : o.count,
            c = [0, 0, 0],
            u = ["a", "b", "c"],
            f = new Array(3),
            h = {},
            d = [];
          for (let E = 0; E < l; E += 3) {
            a
              ? ((c[0] = a.getX(E)), (c[1] = a.getX(E + 1)), (c[2] = a.getX(E + 2)))
              : ((c[0] = E), (c[1] = E + 1), (c[2] = E + 2));
            let { a: v, b: m, c: p } = Or;
            if (
              (v.fromBufferAttribute(o, c[0]),
              m.fromBufferAttribute(o, c[1]),
              p.fromBufferAttribute(o, c[2]),
              Or.getNormal(sc),
              (f[0] = `${Math.round(v.x * s)},${Math.round(v.y * s)},${Math.round(v.z * s)}`),
              (f[1] = `${Math.round(m.x * s)},${Math.round(m.y * s)},${Math.round(m.z * s)}`),
              (f[2] = `${Math.round(p.x * s)},${Math.round(p.y * s)},${Math.round(p.z * s)}`),
              !(f[0] === f[1] || f[1] === f[2] || f[2] === f[0]))
            )
              for (let y = 0; y < 3; y++) {
                let Q = (y + 1) % 3,
                  S = f[y],
                  M = f[Q],
                  P = Or[u[y]],
                  T = Or[u[Q]],
                  x = `${S}_${M}`,
                  b = `${M}_${S}`;
                b in h && h[b]
                  ? (sc.dot(h[b].normal) <= r && (d.push(P.x, P.y, P.z), d.push(T.x, T.y, T.z)), (h[b] = null))
                  : x in h || (h[x] = { index0: c[y], index1: c[Q], normal: sc.clone() });
              }
          }
          for (let E in h)
            if (h[E]) {
              let { index0: v, index1: m } = h[E];
              (Hr.fromBufferAttribute(o, v),
                Ur.fromBufferAttribute(o, m),
                d.push(Hr.x, Hr.y, Hr.z),
                d.push(Ur.x, Ur.y, Ur.z));
            }
          this.setAttribute("position", new ie(d, 3));
        }
      }
      copy(t) {
        return (super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this);
      }
    };
  var Bs = class n extends Ls {
    constructor(t = 1, e = 0) {
      let i = (1 + Math.sqrt(5)) / 2,
        s = [
          -1,
          i,
          0,
          1,
          i,
          0,
          -1,
          -i,
          0,
          1,
          -i,
          0,
          0,
          -1,
          i,
          0,
          1,
          i,
          0,
          -1,
          -i,
          0,
          1,
          -i,
          i,
          0,
          -1,
          i,
          0,
          1,
          -i,
          0,
          -1,
          -i,
          0,
          1,
        ],
        r = [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3,
          4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ];
      (super(s, r, t, e), (this.type = "IcosahedronGeometry"), (this.parameters = { radius: t, detail: e }));
    }
    static fromJSON(t) {
      return new n(t.radius, t.detail);
    }
  };
  var qs = class n extends ve {
    constructor(t = 1, e = 1, i = 1, s = 1) {
      (super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = { width: t, height: e, widthSegments: i, heightSegments: s }));
      let r = t / 2,
        a = e / 2,
        o = Math.floor(i),
        l = Math.floor(s),
        c = o + 1,
        u = l + 1,
        f = t / o,
        h = e / l,
        d = [],
        E = [],
        v = [],
        m = [];
      for (let p = 0; p < u; p++) {
        let y = p * h - a;
        for (let Q = 0; Q < c; Q++) {
          let S = Q * f - r;
          (E.push(S, -y, 0), v.push(0, 0, 1), m.push(Q / o), m.push(1 - p / l));
        }
      }
      for (let p = 0; p < l; p++)
        for (let y = 0; y < o; y++) {
          let Q = y + c * p,
            S = y + c * (p + 1),
            M = y + 1 + c * (p + 1),
            P = y + 1 + c * p;
          (d.push(Q, S, P), d.push(S, M, P));
        }
      (this.setIndex(d),
        this.setAttribute("position", new ie(E, 3)),
        this.setAttribute("normal", new ie(v, 3)),
        this.setAttribute("uv", new ie(m, 2)));
    }
    copy(t) {
      return (super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this);
    }
    static fromJSON(t) {
      return new n(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  };
  var Yi = class n extends ve {
    constructor(t = 1, e = 32, i = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
      (super(),
        (this.type = "SphereGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: i,
          phiStart: s,
          phiLength: r,
          thetaStart: a,
          thetaLength: o,
        }),
        (e = Math.max(3, Math.floor(e))),
        (i = Math.max(2, Math.floor(i))));
      let l = Math.min(a + o, Math.PI),
        c = 0,
        u = [],
        f = new F(),
        h = new F(),
        d = [],
        E = [],
        v = [],
        m = [];
      for (let p = 0; p <= i; p++) {
        let y = [],
          Q = p / i,
          S = a + Q * o,
          M = t * Math.cos(S),
          P = Math.sqrt(t * t - M * M),
          T = 0;
        p === 0 && a === 0 ? (T = 0.5 / e) : p === i && l === Math.PI && (T = -0.5 / e);
        for (let x = 0; x <= e; x++) {
          let b = x / e,
            N = s + b * r;
          ((f.x = -P * Math.cos(N)),
            (f.y = M),
            (f.z = P * Math.sin(N)),
            E.push(f.x, f.y, f.z),
            h.copy(f).normalize(),
            v.push(h.x, h.y, h.z),
            m.push(b + T, 1 - Q),
            y.push(c++));
        }
        u.push(y);
      }
      for (let p = 0; p < i; p++)
        for (let y = 0; y < e; y++) {
          let Q = u[p][y + 1],
            S = u[p][y],
            M = u[p + 1][y],
            P = u[p + 1][y + 1];
          ((p !== 0 || a > 0) && d.push(Q, S, P), (p !== i - 1 || l < Math.PI) && d.push(S, M, P));
        }
      (this.setIndex(d),
        this.setAttribute("position", new ie(E, 3)),
        this.setAttribute("normal", new ie(v, 3)),
        this.setAttribute("uv", new ie(m, 2)));
    }
    copy(t) {
      return (super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this);
    }
    static fromJSON(t) {
      return new n(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
    }
  };
  function Pn(n) {
    let t = {};
    for (let e in n) {
      t[e] = {};
      for (let i in n[e]) {
        let s = n[e][i];
        if (kl(s))
          s.isRenderTargetTexture
            ? (Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
              (t[e][i] = null))
            : (t[e][i] = s.clone());
        else if (Array.isArray(s))
          if (kl(s[0])) {
            let r = [];
            for (let a = 0, o = s.length; a < o; a++) r[a] = s[a].clone();
            t[e][i] = r;
          } else t[e][i] = s.slice();
        else t[e][i] = s;
      }
    }
    return t;
  }
  function Ge(n) {
    let t = {};
    for (let e = 0; e < n.length; e++) {
      let i = Pn(n[e]);
      for (let s in i) t[s] = i[s];
    }
    return t;
  }
  function kl(n) {
    return (
      n &&
      (n.isColor ||
        n.isMatrix3 ||
        n.isMatrix4 ||
        n.isVector2 ||
        n.isVector3 ||
        n.isVector4 ||
        n.isTexture ||
        n.isQuaternion)
    );
  }
  function Pd(n) {
    let t = [];
    for (let e = 0; e < n.length; e++) t.push(n[e].clone());
    return t;
  }
  function Oc(n) {
    let t = n.getRenderTarget();
    return t === null ? n.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Yt.workingColorSpace;
  }
  var _n = { clone: Pn, merge: Ge },
    _d = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
    bd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
    Se = class extends Li {
      constructor(t) {
        (super(),
          (this.isShaderMaterial = !0),
          (this.type = "ShaderMaterial"),
          (this.defines = {}),
          (this.uniforms = {}),
          (this.uniformsGroups = []),
          (this.vertexShader = _d),
          (this.fragmentShader = bd),
          (this.linewidth = 1),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.fog = !1),
          (this.lights = !1),
          (this.clipping = !1),
          (this.forceSinglePass = !0),
          (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
          (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }),
          (this.index0AttributeName = void 0),
          (this.uniformsNeedUpdate = !1),
          (this.glslVersion = null),
          t !== void 0 && this.setValues(t));
      }
      copy(t) {
        return (
          super.copy(t),
          (this.fragmentShader = t.fragmentShader),
          (this.vertexShader = t.vertexShader),
          (this.uniforms = Pn(t.uniforms)),
          (this.uniformsGroups = Pd(t.uniformsGroups)),
          (this.defines = Object.assign({}, t.defines)),
          (this.wireframe = t.wireframe),
          (this.wireframeLinewidth = t.wireframeLinewidth),
          (this.fog = t.fog),
          (this.lights = t.lights),
          (this.clipping = t.clipping),
          (this.extensions = Object.assign({}, t.extensions)),
          (this.glslVersion = t.glslVersion),
          (this.defaultAttributeValues = Object.assign({}, t.defaultAttributeValues)),
          (this.index0AttributeName = t.index0AttributeName),
          (this.uniformsNeedUpdate = t.uniformsNeedUpdate),
          this
        );
      }
      toJSON(t) {
        let e = super.toJSON(t);
        ((e.glslVersion = this.glslVersion), (e.uniforms = {}));
        for (let s in this.uniforms) {
          let a = this.uniforms[s].value;
          a && a.isTexture
            ? (e.uniforms[s] = { type: "t", value: a.toJSON(t).uuid })
            : a && a.isColor
              ? (e.uniforms[s] = { type: "c", value: a.getHex() })
              : a && a.isVector2
                ? (e.uniforms[s] = { type: "v2", value: a.toArray() })
                : a && a.isVector3
                  ? (e.uniforms[s] = { type: "v3", value: a.toArray() })
                  : a && a.isVector4
                    ? (e.uniforms[s] = { type: "v4", value: a.toArray() })
                    : a && a.isMatrix3
                      ? (e.uniforms[s] = { type: "m3", value: a.toArray() })
                      : a && a.isMatrix4
                        ? (e.uniforms[s] = { type: "m4", value: a.toArray() })
                        : (e.uniforms[s] = { value: a });
        }
        (Object.keys(this.defines).length > 0 && (e.defines = this.defines),
          (e.vertexShader = this.vertexShader),
          (e.fragmentShader = this.fragmentShader),
          (e.lights = this.lights),
          (e.clipping = this.clipping));
        let i = {};
        for (let s in this.extensions) this.extensions[s] === !0 && (i[s] = !0);
        return (Object.keys(i).length > 0 && (e.extensions = i), e);
      }
      fromJSON(t, e) {
        if ((super.fromJSON(t, e), t.uniforms !== void 0))
          for (let i in t.uniforms) {
            let s = t.uniforms[i];
            switch (((this.uniforms[i] = {}), s.type)) {
              case "t":
                this.uniforms[i].value = e[s.value] || null;
                break;
              case "c":
                this.uniforms[i].value = new Tt().setHex(s.value);
                break;
              case "v2":
                this.uniforms[i].value = new Ct().fromArray(s.value);
                break;
              case "v3":
                this.uniforms[i].value = new F().fromArray(s.value);
                break;
              case "v4":
                this.uniforms[i].value = new ne().fromArray(s.value);
                break;
              case "m3":
                this.uniforms[i].value = new Gt().fromArray(s.value);
                break;
              case "m4":
                this.uniforms[i].value = new Vt().fromArray(s.value);
                break;
              default:
                this.uniforms[i].value = s.value;
            }
          }
        if (
          (t.defines !== void 0 && (this.defines = t.defines),
          t.vertexShader !== void 0 && (this.vertexShader = t.vertexShader),
          t.fragmentShader !== void 0 && (this.fragmentShader = t.fragmentShader),
          t.glslVersion !== void 0 && (this.glslVersion = t.glslVersion),
          t.extensions !== void 0)
        )
          for (let i in t.extensions) this.extensions[i] = t.extensions[i];
        return (
          t.lights !== void 0 && (this.lights = t.lights),
          t.clipping !== void 0 && (this.clipping = t.clipping),
          this
        );
      }
    },
    ra = class extends Se {
      constructor(t) {
        (super(t), (this.isRawShaderMaterial = !0), (this.type = "RawShaderMaterial"));
      }
    },
    ri = class extends Li {
      constructor(t) {
        (super(),
          (this.isMeshStandardMaterial = !0),
          (this.type = "MeshStandardMaterial"),
          (this.defines = { STANDARD: "" }),
          (this.color = new Tt(16777215)),
          (this.roughness = 1),
          (this.metalness = 0),
          (this.map = null),
          (this.lightMap = null),
          (this.lightMapIntensity = 1),
          (this.aoMap = null),
          (this.aoMapIntensity = 1),
          (this.emissive = new Tt(0)),
          (this.emissiveIntensity = 1),
          (this.emissiveMap = null),
          (this.bumpMap = null),
          (this.bumpScale = 1),
          (this.normalMap = null),
          (this.normalMapType = oo),
          (this.normalScale = new Ct(1, 1)),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.roughnessMap = null),
          (this.metalnessMap = null),
          (this.alphaMap = null),
          (this.envMap = null),
          (this.envMapRotation = new Ui()),
          (this.envMapIntensity = 1),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.wireframeLinecap = "round"),
          (this.wireframeLinejoin = "round"),
          (this.flatShading = !1),
          (this.fog = !0),
          this.setValues(t));
      }
      copy(t) {
        return (
          super.copy(t),
          (this.defines = { STANDARD: "" }),
          this.color.copy(t.color),
          (this.roughness = t.roughness),
          (this.metalness = t.metalness),
          (this.map = t.map),
          (this.lightMap = t.lightMap),
          (this.lightMapIntensity = t.lightMapIntensity),
          (this.aoMap = t.aoMap),
          (this.aoMapIntensity = t.aoMapIntensity),
          this.emissive.copy(t.emissive),
          (this.emissiveMap = t.emissiveMap),
          (this.emissiveIntensity = t.emissiveIntensity),
          (this.bumpMap = t.bumpMap),
          (this.bumpScale = t.bumpScale),
          (this.normalMap = t.normalMap),
          (this.normalMapType = t.normalMapType),
          this.normalScale.copy(t.normalScale),
          (this.displacementMap = t.displacementMap),
          (this.displacementScale = t.displacementScale),
          (this.displacementBias = t.displacementBias),
          (this.roughnessMap = t.roughnessMap),
          (this.metalnessMap = t.metalnessMap),
          (this.alphaMap = t.alphaMap),
          (this.envMap = t.envMap),
          this.envMapRotation.copy(t.envMapRotation),
          (this.envMapIntensity = t.envMapIntensity),
          (this.wireframe = t.wireframe),
          (this.wireframeLinewidth = t.wireframeLinewidth),
          (this.wireframeLinecap = t.wireframeLinecap),
          (this.wireframeLinejoin = t.wireframeLinejoin),
          (this.flatShading = t.flatShading),
          (this.fog = t.fog),
          this
        );
      }
    },
    Gs = class extends ri {
      constructor(t) {
        (super(),
          (this.isMeshPhysicalMaterial = !0),
          (this.defines = { STANDARD: "", PHYSICAL: "" }),
          (this.type = "MeshPhysicalMaterial"),
          (this.anisotropyRotation = 0),
          (this.anisotropyMap = null),
          (this.clearcoatMap = null),
          (this.clearcoatRoughness = 0),
          (this.clearcoatRoughnessMap = null),
          (this.clearcoatNormalScale = new Ct(1, 1)),
          (this.clearcoatNormalMap = null),
          (this.ior = 1.5),
          Object.defineProperty(this, "reflectivity", {
            get: function () {
              return jt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
            },
            set: function (e) {
              this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
            },
          }),
          (this.iridescenceMap = null),
          (this.iridescenceIOR = 1.3),
          (this.iridescenceThicknessRange = [100, 400]),
          (this.iridescenceThicknessMap = null),
          (this.sheenColor = new Tt(0)),
          (this.sheenColorMap = null),
          (this.sheenRoughness = 1),
          (this.sheenRoughnessMap = null),
          (this.transmissionMap = null),
          (this.thickness = 0),
          (this.thicknessMap = null),
          (this.attenuationDistance = 1 / 0),
          (this.attenuationColor = new Tt(1, 1, 1)),
          (this.specularIntensity = 1),
          (this.specularIntensityMap = null),
          (this.specularColor = new Tt(1, 1, 1)),
          (this.specularColorMap = null),
          (this._anisotropy = 0),
          (this._clearcoat = 0),
          (this._dispersion = 0),
          (this._iridescence = 0),
          (this._retroreflectivity = 0),
          (this._sheen = 0),
          (this._transmission = 0),
          this.setValues(t));
      }
      get anisotropy() {
        return this._anisotropy;
      }
      set anisotropy(t) {
        (this._anisotropy > 0 != t > 0 && this.version++, (this._anisotropy = t));
      }
      get clearcoat() {
        return this._clearcoat;
      }
      set clearcoat(t) {
        (this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t));
      }
      get iridescence() {
        return this._iridescence;
      }
      set iridescence(t) {
        (this._iridescence > 0 != t > 0 && this.version++, (this._iridescence = t));
      }
      get dispersion() {
        return this._dispersion;
      }
      set dispersion(t) {
        (this._dispersion > 0 != t > 0 && this.version++, (this._dispersion = t));
      }
      get retroreflectivity() {
        return this._retroreflectivity;
      }
      set retroreflectivity(t) {
        (this._retroreflectivity > 0 != t > 0 && this.version++, (this._retroreflectivity = t));
      }
      get sheen() {
        return this._sheen;
      }
      set sheen(t) {
        (this._sheen > 0 != t > 0 && this.version++, (this._sheen = t));
      }
      get transmission() {
        return this._transmission;
      }
      set transmission(t) {
        (this._transmission > 0 != t > 0 && this.version++, (this._transmission = t));
      }
      copy(t) {
        return (
          super.copy(t),
          (this.defines = { STANDARD: "", PHYSICAL: "" }),
          (this.anisotropy = t.anisotropy),
          (this.anisotropyRotation = t.anisotropyRotation),
          (this.anisotropyMap = t.anisotropyMap),
          (this.clearcoat = t.clearcoat),
          (this.clearcoatMap = t.clearcoatMap),
          (this.clearcoatRoughness = t.clearcoatRoughness),
          (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
          (this.clearcoatNormalMap = t.clearcoatNormalMap),
          this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
          (this.dispersion = t.dispersion),
          (this.ior = t.ior),
          (this.iridescence = t.iridescence),
          (this.iridescenceMap = t.iridescenceMap),
          (this.iridescenceIOR = t.iridescenceIOR),
          (this.iridescenceThicknessRange = [...t.iridescenceThicknessRange]),
          (this.iridescenceThicknessMap = t.iridescenceThicknessMap),
          (this.retroreflectivity = t.retroreflectivity),
          (this.sheen = t.sheen),
          this.sheenColor.copy(t.sheenColor),
          (this.sheenColorMap = t.sheenColorMap),
          (this.sheenRoughness = t.sheenRoughness),
          (this.sheenRoughnessMap = t.sheenRoughnessMap),
          (this.transmission = t.transmission),
          (this.transmissionMap = t.transmissionMap),
          (this.thickness = t.thickness),
          (this.thicknessMap = t.thicknessMap),
          (this.attenuationDistance = t.attenuationDistance),
          this.attenuationColor.copy(t.attenuationColor),
          (this.specularIntensity = t.specularIntensity),
          (this.specularIntensityMap = t.specularIntensityMap),
          this.specularColor.copy(t.specularColor),
          (this.specularColorMap = t.specularColorMap),
          this
        );
      }
    };
  var aa = class extends Li {
      constructor(t) {
        (super(),
          (this.isMeshDepthMaterial = !0),
          (this.type = "MeshDepthMaterial"),
          (this.depthPacking = Ph),
          (this.map = null),
          (this.alphaMap = null),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          this.setValues(t));
      }
      copy(t) {
        return (
          super.copy(t),
          (this.depthPacking = t.depthPacking),
          (this.map = t.map),
          (this.alphaMap = t.alphaMap),
          (this.displacementMap = t.displacementMap),
          (this.displacementScale = t.displacementScale),
          (this.displacementBias = t.displacementBias),
          (this.wireframe = t.wireframe),
          (this.wireframeLinewidth = t.wireframeLinewidth),
          this
        );
      }
    },
    oa = class extends Li {
      constructor(t) {
        (super(),
          (this.isMeshDistanceMaterial = !0),
          (this.type = "MeshDistanceMaterial"),
          (this.map = null),
          (this.alphaMap = null),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          this.setValues(t));
      }
      copy(t) {
        return (
          super.copy(t),
          (this.map = t.map),
          (this.alphaMap = t.alphaMap),
          (this.displacementMap = t.displacementMap),
          (this.displacementScale = t.displacementScale),
          (this.displacementBias = t.displacementBias),
          this
        );
      }
    };
  function Bn(n, t) {
    return !n || n.constructor === t
      ? n
      : typeof t.BYTES_PER_ELEMENT == "number"
        ? new t(n)
        : Array.prototype.slice.call(n);
  }
  function rc(n) {
    return n !== void 0 && n.inTangents !== void 0 && n.outTangents !== void 0;
  }
  var ji = class {
      constructor(t, e, i, s) {
        ((this.parameterPositions = t),
          (this._cachedIndex = 0),
          (this.resultBuffer = s !== void 0 ? s : new e.constructor(i)),
          (this.sampleValues = e),
          (this.valueSize = i),
          (this.settings = null),
          (this.DefaultSettings_ = {}));
      }
      evaluate(t) {
        let e = this.parameterPositions,
          i = this._cachedIndex,
          s = e[i],
          r = e[i - 1];
        i: {
          t: {
            let a;
            e: {
              n: if (!(t < s)) {
                for (let o = i + 2; ; ) {
                  if (s === void 0) {
                    if (t < r) break n;
                    return ((i = e.length), (this._cachedIndex = i), this.copySampleValue_(i - 1));
                  }
                  if (i === o) break;
                  if (((r = s), (s = e[++i]), t < s)) break t;
                }
                a = e.length;
                break e;
              }
              if (!(t >= r)) {
                let o = e[1];
                t < o && ((i = 2), (r = o));
                for (let l = i - 2; ; ) {
                  if (r === void 0) return ((this._cachedIndex = 0), this.copySampleValue_(0));
                  if (i === l) break;
                  if (((s = r), (r = e[--i - 1]), t >= r)) break t;
                }
                ((a = i), (i = 0));
                break e;
              }
              break i;
            }
            for (; i < a; ) {
              let o = (i + a) >>> 1;
              t < e[o] ? (a = o) : (i = o + 1);
            }
            if (((s = e[i]), (r = e[i - 1]), r === void 0)) return ((this._cachedIndex = 0), this.copySampleValue_(0));
            if (s === void 0) return ((i = e.length), (this._cachedIndex = i), this.copySampleValue_(i - 1));
          }
          ((this._cachedIndex = i), this.intervalChanged_(i, r, s));
        }
        return this.interpolate_(i, r, t, s);
      }
      getSettings_() {
        return this.settings || this.DefaultSettings_;
      }
      copySampleValue_(t) {
        let e = this.resultBuffer,
          i = this.sampleValues,
          s = this.valueSize,
          r = t * s;
        for (let a = 0; a !== s; ++a) e[a] = i[r + a];
        return e;
      }
      interpolate_() {
        throw new Error("THREE.Interpolant: Call to abstract method.");
      }
      intervalChanged_() {}
    },
    ca = class extends ji {
      constructor(t, e, i, s) {
        (super(t, e, i, s),
          (this._weightPrev = -0),
          (this._offsetPrev = -0),
          (this._weightNext = -0),
          (this._offsetNext = -0),
          (this.DefaultSettings_ = { endingStart: cc, endingEnd: cc }));
      }
      intervalChanged_(t, e, i) {
        let s = this.parameterPositions,
          r = t - 2,
          a = t + 1,
          o = s[r],
          l = s[a];
        if (o === void 0)
          switch (this.getSettings_().endingStart) {
            case lc:
              ((r = t), (o = 2 * e - i));
              break;
            case hc:
              ((r = s.length - 2), (o = e + s[r] - s[r + 1]));
              break;
            default:
              ((r = t), (o = i));
          }
        if (l === void 0)
          switch (this.getSettings_().endingEnd) {
            case lc:
              ((a = t), (l = 2 * i - e));
              break;
            case hc:
              ((a = 1), (l = i + s[1] - s[0]));
              break;
            default:
              ((a = t - 1), (l = e));
          }
        let c = (i - e) * 0.5,
          u = this.valueSize;
        ((this._weightPrev = c / (e - o)),
          (this._weightNext = c / (l - i)),
          (this._offsetPrev = r * u),
          (this._offsetNext = a * u));
      }
      interpolate_(t, e, i, s) {
        let r = this.resultBuffer,
          a = this.sampleValues,
          o = this.valueSize,
          l = t * o,
          c = l - o,
          u = this._offsetPrev,
          f = this._offsetNext,
          h = this._weightPrev,
          d = this._weightNext,
          E = (i - e) / (s - e),
          v = E * E,
          m = v * E,
          p = -h * m + 2 * h * v - h * E,
          y = (1 + h) * m + (-1.5 - 2 * h) * v + (-0.5 + h) * E + 1,
          Q = (-1 - d) * m + (1.5 + d) * v + 0.5 * E,
          S = d * m - d * v;
        for (let M = 0; M !== o; ++M) r[M] = p * a[u + M] + y * a[c + M] + Q * a[l + M] + S * a[f + M];
        return r;
      }
    },
    la = class extends ji {
      constructor(t, e, i, s) {
        super(t, e, i, s);
      }
      interpolate_(t, e, i, s) {
        let r = this.resultBuffer,
          a = this.sampleValues,
          o = this.valueSize,
          l = t * o,
          c = l - o,
          u = (i - e) / (s - e),
          f = 1 - u;
        for (let h = 0; h !== o; ++h) r[h] = a[c + h] * f + a[l + h] * u;
        return r;
      }
    },
    ha = class extends ji {
      constructor(t, e, i, s) {
        super(t, e, i, s);
      }
      interpolate_(t) {
        return this.copySampleValue_(t - 1);
      }
    },
    ua = class extends ji {
      interpolate_(t, e, i, s) {
        let r = this.resultBuffer,
          a = this.sampleValues,
          o = this.valueSize,
          l = t * o,
          c = l - o,
          u = this.inTangents,
          f = this.outTangents;
        if (!u || !f) {
          let E = (i - e) / (s - e),
            v = 1 - E;
          for (let m = 0; m !== o; ++m) r[m] = a[c + m] * v + a[l + m] * E;
          return r;
        }
        let h = o * 2,
          d = t - 1;
        for (let E = 0; E !== o; ++E) {
          let v = a[c + E],
            m = a[l + E],
            p = d * h + E * 2,
            y = f[p],
            Q = f[p + 1],
            S = t * h + E * 2,
            M = u[S],
            P = u[S + 1],
            T = Rd(i, e, y, M, s);
          r[E] = Lh(T, v, Q, P, m);
        }
        return r;
      }
    };
  function Lh(n, t, e, i, s) {
    let r = 1 - n;
    return r * r * r * t + 3 * r * r * n * e + 3 * r * n * n * i + n * n * n * s;
  }
  function Qd(n, t, e, i, s) {
    let r = 1 - n;
    return 3 * r * r * (e - t) + 6 * r * n * (i - e) + 3 * n * n * (s - i);
  }
  function Rd(n, t, e, i, s) {
    let r = (n - t) / (s - t);
    for (let a = 0; a < 8; a++) {
      let o = Lh(r, t, e, i, s) - n;
      if (Math.abs(o) < 1e-10) break;
      let l = Qd(r, t, e, i, s);
      if (Math.abs(l) < 1e-10) break;
      r = Math.max(0, Math.min(1, r - o / l));
    }
    return r;
  }
  var je = class {
    constructor(t, e, i, s) {
      if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
      ((this.name = t),
        (this.times = Bn(e, this.TimeBufferType)),
        (this.values = Bn(i, this.ValueBufferType)),
        this.setInterpolation(s || this.DefaultInterpolation));
    }
    static toJSON(t) {
      let e = t.constructor,
        i;
      if (e.toJSON !== this.toJSON) i = e.toJSON(t);
      else {
        i = { name: t.name, times: Bn(t.times, Array), values: Bn(t.values, Array) };
        let s = t.getInterpolation();
        (s !== t.DefaultInterpolation && (i.interpolation = s),
          rc(t.settings) &&
            (i.settings = {
              inTangents: Bn(t.settings.inTangents, Array),
              outTangents: Bn(t.settings.outTangents, Array),
            }));
      }
      return ((i.type = t.ValueTypeName), i);
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new ha(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new la(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new ca(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodBezier(t) {
      let e = new ua(this.times, this.values, this.getValueSize(), t);
      return (
        this.settings && ((e.inTangents = this.settings.inTangents), (e.outTangents = this.settings.outTangents)),
        e
      );
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case bs:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case Yr:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case zr:
          e = this.InterpolantFactoryMethodSmooth;
          break;
        case oc:
          e = this.InterpolantFactoryMethodBezier;
          break;
      }
      if (e === void 0) {
        let i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0)
          if (t !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
          else throw new Error(i);
        return (Ht("KeyframeTrack:", i), this);
      }
      return ((this.createInterpolant = e), this);
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return bs;
        case this.InterpolantFactoryMethodLinear:
          return Yr;
        case this.InterpolantFactoryMethodSmooth:
          return zr;
        case this.InterpolantFactoryMethodBezier:
          return oc;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (t !== 0) {
        let e = this.times;
        for (let i = 0, s = e.length; i !== s; ++i) e[i] += t;
      }
      return this;
    }
    scale(t) {
      if (t !== 1) {
        let e = this.times;
        for (let i = 0, s = e.length; i !== s; ++i) e[i] *= t;
        rc(this.settings) && (Wl(this.settings.inTangents, t), Wl(this.settings.outTangents, t));
      }
      return this;
    }
    trim(t, e) {
      let i = this.times,
        s = i.length,
        r = 0,
        a = s - 1;
      for (; r !== s && i[r] < t; ) ++r;
      for (; a !== -1 && i[a] > e; ) --a;
      if ((++a, r !== 0 || a !== s)) {
        r >= a && ((a = Math.max(a, 1)), (r = a - 1));
        let o = this.getValueSize();
        ((this.times = i.slice(r, a)), (this.values = this.values.slice(r * o, a * o)));
      }
      return this;
    }
    validate() {
      let t = !0,
        e = this.getValueSize();
      e - Math.floor(e) !== 0 && (Ot("KeyframeTrack: Invalid value size in track.", this), (t = !1));
      let i = this.times,
        s = this.values,
        r = i.length;
      r === 0 && (Ot("KeyframeTrack: Track is empty.", this), (t = !1));
      let a = null;
      for (let o = 0; o !== r; o++) {
        let l = i[o];
        if (typeof l == "number" && isNaN(l)) {
          (Ot("KeyframeTrack: Time is not a valid number.", this, o, l), (t = !1));
          break;
        }
        if (a !== null && a > l) {
          (Ot("KeyframeTrack: Out of order keys.", this, o, l, a), (t = !1));
          break;
        }
        a = l;
      }
      if (s !== void 0 && id(s))
        for (let o = 0, l = s.length; o !== l; ++o) {
          let c = s[o];
          if (isNaN(c)) {
            (Ot("KeyframeTrack: Value is not a valid number.", this, o, c), (t = !1));
            break;
          }
        }
      return t;
    }
    optimize() {
      let t = this.times.slice(),
        e = this.values.slice(),
        i = this.getValueSize(),
        s = this.getInterpolation() === zr,
        r = t.length - 1,
        a = 1;
      for (let o = 1; o < r; ++o) {
        let l = !1,
          c = t[o],
          u = t[o + 1];
        if (c !== u && (o !== 1 || c !== t[0]))
          if (s) l = !0;
          else {
            let f = o * i,
              h = f - i,
              d = f + i;
            for (let E = 0; E !== i; ++E) {
              let v = e[f + E];
              if (v !== e[h + E] || v !== e[d + E]) {
                l = !0;
                break;
              }
            }
          }
        if (l) {
          if (o !== a) {
            t[a] = t[o];
            let f = o * i,
              h = a * i;
            for (let d = 0; d !== i; ++d) e[h + d] = e[f + d];
          }
          ++a;
        }
      }
      if (r > 0) {
        t[a] = t[r];
        for (let o = r * i, l = a * i, c = 0; c !== i; ++c) e[l + c] = e[o + c];
        ++a;
      }
      return (
        a !== t.length
          ? ((this.times = t.slice(0, a)), (this.values = e.slice(0, a * i)))
          : ((this.times = t), (this.values = e)),
        this
      );
    }
    clone() {
      let t = this.times.slice(),
        e = this.values.slice(),
        i = this.constructor,
        s = new i(this.name, t, e);
      return (
        (s.createInterpolant = this.createInterpolant),
        rc(this.settings) &&
          (s.settings = {
            inTangents: this.settings.inTangents.slice(),
            outTangents: this.settings.outTangents.slice(),
          }),
        s
      );
    }
  };
  function Wl(n, t) {
    for (let e = 0, i = n.length; e !== i; e += 2) n[e] *= t;
  }
  je.prototype.ValueTypeName = "";
  je.prototype.TimeBufferType = Float32Array;
  je.prototype.ValueBufferType = Float32Array;
  je.prototype.DefaultInterpolation = Yr;
  var tn = class extends je {
    constructor(t, e, i) {
      super(t, e, i);
    }
  };
  tn.prototype.ValueTypeName = "bool";
  tn.prototype.ValueBufferType = Array;
  tn.prototype.DefaultInterpolation = bs;
  tn.prototype.InterpolantFactoryMethodLinear = void 0;
  tn.prototype.InterpolantFactoryMethodSmooth = void 0;
  var da = class extends je {
    constructor(t, e, i, s) {
      super(t, e, i, s);
    }
  };
  da.prototype.ValueTypeName = "color";
  var fa = class extends je {
    constructor(t, e, i, s) {
      super(t, e, i, s);
    }
  };
  fa.prototype.ValueTypeName = "number";
  var pa = class extends ji {
      constructor(t, e, i, s) {
        super(t, e, i, s);
      }
      interpolate_(t, e, i, s) {
        let r = this.resultBuffer,
          a = this.sampleValues,
          o = this.valueSize,
          l = (i - e) / (s - e),
          c = t * o;
        for (let u = c + o; c !== u; c += 4) ye.slerpFlat(r, 0, a, c - o, a, c, l);
        return r;
      }
    },
    Vs = class extends je {
      constructor(t, e, i, s) {
        super(t, e, i, s);
      }
      InterpolantFactoryMethodLinear(t) {
        return new pa(this.times, this.values, this.getValueSize(), t);
      }
    };
  Vs.prototype.ValueTypeName = "quaternion";
  Vs.prototype.InterpolantFactoryMethodSmooth = void 0;
  var en = class extends je {
    constructor(t, e, i) {
      super(t, e, i);
    }
  };
  en.prototype.ValueTypeName = "string";
  en.prototype.ValueBufferType = Array;
  en.prototype.DefaultInterpolation = bs;
  en.prototype.InterpolantFactoryMethodLinear = void 0;
  en.prototype.InterpolantFactoryMethodSmooth = void 0;
  var ma = class extends je {
    constructor(t, e, i, s) {
      super(t, e, i, s);
    }
  };
  ma.prototype.ValueTypeName = "vector";
  var Gr = {
    enabled: !1,
    files: {},
    add: function (n, t) {
      this.enabled !== !1 && (Xl(n) || (this.files[n] = t));
    },
    get: function (n) {
      if (this.enabled !== !1 && !Xl(n)) return this.files[n];
    },
    remove: function (n) {
      delete this.files[n];
    },
    clear: function () {
      this.files = {};
    },
  };
  function Xl(n) {
    try {
      let t = n.slice(n.indexOf(":") + 1);
      return new URL(t).protocol === "blob:";
    } catch {
      return !1;
    }
  }
  var Ea = class {
      constructor(t, e, i) {
        let s = this,
          r = !1,
          a = 0,
          o = 0,
          l,
          c = [];
        ((this.onStart = void 0),
          (this.onLoad = t),
          (this.onProgress = e),
          (this.onError = i),
          (this._abortController = null),
          (this.itemStart = function (u) {
            (o++, r === !1 && s.onStart !== void 0 && s.onStart(u, a, o), (r = !0));
          }),
          (this.itemEnd = function (u) {
            (a++,
              s.onProgress !== void 0 && s.onProgress(u, a, o),
              a === o && ((r = !1), s.onLoad !== void 0 && s.onLoad()));
          }),
          (this.itemError = function (u) {
            s.onError !== void 0 && s.onError(u);
          }),
          (this.resolveURL = function (u) {
            return ((u = u.normalize("NFC")), l ? l(u) : u);
          }),
          (this.setURLModifier = function (u) {
            return ((l = u), this);
          }),
          (this.addHandler = function (u, f) {
            return (c.push(u, f), this);
          }),
          (this.removeHandler = function (u) {
            let f = c.indexOf(u);
            return (f !== -1 && c.splice(f, 2), this);
          }),
          (this.getHandler = function (u) {
            for (let f = 0, h = c.length; f < h; f += 2) {
              let d = c[f],
                E = c[f + 1];
              if ((d.global && (d.lastIndex = 0), d.test(u))) return E;
            }
            return null;
          }),
          (this.abort = function () {
            return (this.abortController.abort(), (this._abortController = null), this);
          }));
      }
      get abortController() {
        return (this._abortController || (this._abortController = new AbortController()), this._abortController);
      }
    },
    $h = new Ea(),
    es = class {
      constructor(t) {
        ((this.manager = t !== void 0 ? t : $h),
          (this.crossOrigin = "anonymous"),
          (this.withCredentials = !1),
          (this.path = ""),
          (this.resourcePath = ""),
          (this.requestHeader = {}),
          typeof __THREE_DEVTOOLS__ < "u" &&
            __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })));
      }
      load() {}
      loadAsync(t, e) {
        let i = this;
        return new Promise(function (s, r) {
          i.load(t, s, e, r);
        });
      }
      parse() {}
      setCrossOrigin(t) {
        return ((this.crossOrigin = t), this);
      }
      setWithCredentials(t) {
        return ((this.withCredentials = t), this);
      }
      setPath(t) {
        return ((this.path = t), this);
      }
      setResourcePath(t) {
        return ((this.resourcePath = t), this);
      }
      setRequestHeader(t) {
        return ((this.requestHeader = t), this);
      }
      abort() {
        return this;
      }
    };
  es.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var qn = new WeakMap(),
    ga = class extends es {
      constructor(t) {
        super(t);
      }
      load(t, e, i, s) {
        (this.path !== void 0 && (t = this.path + t), (t = this.manager.resolveURL(t)));
        let r = this,
          a = Gr.get(`image:${t}`);
        if (a !== void 0) {
          if (a.complete === !0)
            (r.manager.itemStart(t),
              setTimeout(function () {
                (e && e(a), r.manager.itemEnd(t));
              }, 0));
          else {
            let f = qn.get(a);
            (f === void 0 && ((f = []), qn.set(a, f)), f.push({ onLoad: e, onError: s }));
          }
          return a;
        }
        let o = Wn("img");
        function l() {
          (u(), e && e(this));
          let f = qn.get(this) || [];
          for (let h = 0; h < f.length; h++) {
            let d = f[h];
            d.onLoad && d.onLoad(this);
          }
          (qn.delete(this), r.manager.itemEnd(t));
        }
        function c(f) {
          (u(), s && s(f), Gr.remove(`image:${t}`));
          let h = qn.get(this) || [];
          for (let d = 0; d < h.length; d++) {
            let E = h[d];
            E.onError && E.onError(f);
          }
          (qn.delete(this), r.manager.itemError(t), r.manager.itemEnd(t));
        }
        function u() {
          (o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1));
        }
        return (
          o.addEventListener("load", l, !1),
          o.addEventListener("error", c, !1),
          t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
          Gr.add(`image:${t}`, o),
          r.manager.itemStart(t),
          (o.src = t),
          o
        );
      }
    };
  var Ds = class extends es {
      constructor(t) {
        super(t);
      }
      load(t, e, i, s) {
        let r = new We(),
          a = new ga(this.manager);
        return (
          a.setCrossOrigin(this.crossOrigin),
          a.setPath(this.path),
          a.load(
            t,
            function (o) {
              ((r.image = o), (r.needsUpdate = !0), e !== void 0 && e(r));
            },
            i,
            s,
          ),
          r
        );
      }
    },
    is = class extends Ae {
      constructor(t, e = 1) {
        (super(), (this.isLight = !0), (this.type = "Light"), (this.color = new Tt(t)), (this.intensity = e));
      }
      copy(t, e) {
        return (super.copy(t, e), this.color.copy(t.color), (this.intensity = t.intensity), this);
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return ((e.object.color = this.color.getHex()), (e.object.intensity = this.intensity), e);
      }
    },
    Js = class extends is {
      constructor(t, e, i) {
        (super(t, i),
          (this.isHemisphereLight = !0),
          (this.type = "HemisphereLight"),
          this.position.copy(Ae.DEFAULT_UP),
          this.updateMatrix(),
          (this.groundColor = new Tt(e)));
      }
      copy(t, e) {
        return (super.copy(t, e), this.groundColor.copy(t.groundColor), this);
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return ((e.object.groundColor = this.groundColor.getHex()), e);
      }
    },
    ac = new Vt(),
    Kl = new F(),
    Zl = new F(),
    ks = class {
      constructor(t) {
        ((this.camera = t),
          (this.intensity = 1),
          (this.bias = 0),
          (this.biasNode = null),
          (this.normalBias = 0),
          (this.radius = 1),
          (this.blurSamples = 8),
          (this.mapSize = new Ct(512, 512)),
          (this.mapType = He),
          (this.map = null),
          (this.mapPass = null),
          (this.matrix = new Vt()),
          (this.autoUpdate = !0),
          (this.needsUpdate = !1),
          (this._frustum = new jn()),
          (this._frameExtents = new Ct(1, 1)),
          (this._viewportCount = 1),
          (this._viewports = [new ne(0, 0, 1, 1)]));
      }
      getViewportCount() {
        return this._viewportCount;
      }
      getCamera() {
        return this.camera;
      }
      getFrustum() {
        return this._frustum;
      }
      updateMatrices(t) {
        let e = this.camera;
        (Kl.setFromMatrixPosition(t.matrixWorld),
          e.position.copy(Kl),
          Zl.setFromMatrixPosition(t.target.matrixWorld),
          e.lookAt(Zl),
          e.updateMatrixWorld(),
          this._updateMatrix(e, this.matrix, this._frustum));
      }
      _updateMatrix(t, e, i, s) {
        (ac.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          i.setFromProjectionMatrix(ac, t.coordinateSystem, t.reversedDepth));
        let r = this._frameExtents,
          a = s ? s.z / r.x : 1,
          o = s ? s.w / r.y : 1,
          l = s ? s.x / r.x : 0,
          c = s ? s.y / r.y : 0;
        (t.coordinateSystem === kn || t.reversedDepth
          ? e.set(0.5 * a, 0, 0, 0.5 * a + l, 0, 0.5 * o, 0, 0.5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1)
          : e.set(0.5 * a, 0, 0, 0.5 * a + l, 0, 0.5 * o, 0, 0.5 * o + c, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          e.multiply(ac));
      }
      getViewport(t) {
        return this._viewports[t];
      }
      getFrameExtents() {
        return this._frameExtents;
      }
      dispose() {
        (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
      }
      copy(t) {
        return (
          (this.camera = t.camera.clone()),
          (this.intensity = t.intensity),
          (this.bias = t.bias),
          (this.radius = t.radius),
          (this.autoUpdate = t.autoUpdate),
          (this.needsUpdate = t.needsUpdate),
          (this.normalBias = t.normalBias),
          (this.blurSamples = t.blurSamples),
          this.mapSize.copy(t.mapSize),
          (this.biasNode = t.biasNode),
          this
        );
      }
      clone() {
        return new this.constructor().copy(this);
      }
      toJSON() {
        let t = {};
        return (
          (t.intensity = this.intensity),
          (t.bias = this.bias),
          (t.normalBias = this.normalBias),
          (t.radius = this.radius),
          (t.blurSamples = this.blurSamples),
          (t.mapSize = this.mapSize.toArray()),
          (t.camera = this.camera.toJSON(!1).object),
          delete t.camera.matrix,
          t
        );
      }
    },
    Lr = new F(),
    $r = new ye(),
    vi = new F(),
    Ws = class extends Ae {
      constructor() {
        (super(),
          (this.isCamera = !0),
          (this.type = "Camera"),
          (this.matrixWorldInverse = new Vt()),
          (this.projectionMatrix = new Vt()),
          (this.projectionMatrixInverse = new Vt()),
          (this.coordinateSystem = fi),
          (this._reversedDepth = !1));
      }
      get reversedDepth() {
        return this._reversedDepth;
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          this.matrixWorldInverse.copy(t.matrixWorldInverse),
          this.projectionMatrix.copy(t.projectionMatrix),
          this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
          (this.coordinateSystem = t.coordinateSystem),
          this
        );
      }
      getWorldDirection(t) {
        return super.getWorldDirection(t).negate();
      }
      updateMatrixWorld(t) {
        (super.updateMatrixWorld(t),
          this.matrixWorld.decompose(Lr, $r, vi),
          vi.x === 1 && vi.y === 1 && vi.z === 1
            ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
            : this.matrixWorldInverse.compose(Lr, $r, vi.set(1, 1, 1)).invert());
      }
      updateWorldMatrix(t, e, i = !1) {
        (super.updateWorldMatrix(t, e, i),
          this.matrixWorld.decompose(Lr, $r, vi),
          vi.x === 1 && vi.y === 1 && vi.z === 1
            ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
            : this.matrixWorldInverse.compose(Lr, $r, vi.set(1, 1, 1)).invert());
      }
      clone() {
        return new this.constructor().copy(this);
      }
    },
    Ki = new F(),
    Yl = new Ct(),
    jl = new Ct(),
    Oe = class extends Ws {
      constructor(t = 50, e = 1, i = 0.1, s = 2e3) {
        (super(),
          (this.isPerspectiveCamera = !0),
          (this.type = "PerspectiveCamera"),
          (this.fov = t),
          (this.zoom = 1),
          (this.near = i),
          (this.far = s),
          (this.focus = 10),
          (this.aspect = e),
          (this.view = null),
          (this.filmGauge = 35),
          (this.filmOffset = 0),
          this.updateProjectionMatrix());
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          (this.fov = t.fov),
          (this.zoom = t.zoom),
          (this.near = t.near),
          (this.far = t.far),
          (this.focus = t.focus),
          (this.aspect = t.aspect),
          (this.view = t.view === null ? null : Object.assign({}, t.view)),
          (this.filmGauge = t.filmGauge),
          (this.filmOffset = t.filmOffset),
          this
        );
      }
      setFocalLength(t) {
        let e = (0.5 * this.getFilmHeight()) / t;
        ((this.fov = Rs * 2 * Math.atan(e)), this.updateProjectionMatrix());
      }
      getFocalLength() {
        let t = Math.tan(qr * 0.5 * this.fov);
        return (0.5 * this.getFilmHeight()) / t;
      }
      getEffectiveFOV() {
        return Rs * 2 * Math.atan(Math.tan(qr * 0.5 * this.fov) / this.zoom);
      }
      getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
      }
      getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
      }
      getViewBounds(t, e, i) {
        (Ki.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
          e.set(Ki.x, Ki.y).multiplyScalar(-t / Ki.z),
          Ki.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
          i.set(Ki.x, Ki.y).multiplyScalar(-t / Ki.z));
      }
      getViewSize(t, e) {
        return (this.getViewBounds(t, Yl, jl), e.subVectors(jl, Yl));
      }
      setViewOffset(t, e, i, s, r, a) {
        ((this.aspect = t / e),
          this.view === null &&
            (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
          (this.view.enabled = !0),
          (this.view.fullWidth = t),
          (this.view.fullHeight = e),
          (this.view.offsetX = i),
          (this.view.offsetY = s),
          (this.view.width = r),
          (this.view.height = a),
          this.updateProjectionMatrix());
      }
      clearViewOffset() {
        (this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix());
      }
      updateProjectionMatrix() {
        let t = this.near,
          e = (t * Math.tan(qr * 0.5 * this.fov)) / this.zoom,
          i = 2 * e,
          s = this.aspect * i,
          r = -0.5 * s,
          a = this.view;
        if (this.view !== null && this.view.enabled) {
          let l = a.fullWidth,
            c = a.fullHeight;
          ((r += (a.offsetX * s) / l), (e -= (a.offsetY * i) / c), (s *= a.width / l), (i *= a.height / c));
        }
        let o = this.filmOffset;
        (o !== 0 && (r += (t * o) / this.getFilmWidth()),
          this.projectionMatrix.makePerspective(
            r,
            r + s,
            e,
            e - i,
            t,
            this.far,
            this.coordinateSystem,
            this.reversedDepth,
          ),
          this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return (
          (e.object.fov = this.fov),
          (e.object.zoom = this.zoom),
          (e.object.near = this.near),
          (e.object.far = this.far),
          (e.object.focus = this.focus),
          (e.object.aspect = this.aspect),
          this.view !== null && (e.object.view = Object.assign({}, this.view)),
          (e.object.filmGauge = this.filmGauge),
          (e.object.filmOffset = this.filmOffset),
          e
        );
      }
    },
    uc = class extends ks {
      constructor() {
        (super(new Oe(50, 1, 0.5, 500)), (this.isSpotLightShadow = !0), (this.focus = 1), (this.aspect = 1));
      }
      updateMatrices(t) {
        let e = this.camera,
          i = Rs * 2 * t.angle * this.focus,
          s = (this.mapSize.width / this.mapSize.height) * this.aspect,
          r = t.distance || e.far;
        ((i !== e.fov || s !== e.aspect || r !== e.far) &&
          ((e.fov = i), (e.aspect = s), (e.far = r), e.updateProjectionMatrix()),
          super.updateMatrices(t));
      }
      copy(t) {
        return (super.copy(t), (this.focus = t.focus), (this.aspect = t.aspect), this);
      }
      toJSON() {
        let t = super.toJSON();
        return ((t.focus = this.focus), (t.aspect = this.aspect), t);
      }
    },
    Xs = class extends is {
      constructor(t, e, i = 0, s = Math.PI / 3, r = 0, a = 2) {
        (super(t, e),
          (this.isSpotLight = !0),
          (this.type = "SpotLight"),
          this.position.copy(Ae.DEFAULT_UP),
          this.updateMatrix(),
          (this.target = new Ae()),
          (this.distance = i),
          (this.angle = s),
          (this.penumbra = r),
          (this.decay = a),
          (this.map = null),
          (this.shadow = new uc()));
      }
      get power() {
        return this.intensity * Math.PI;
      }
      set power(t) {
        this.intensity = t / Math.PI;
      }
      dispose() {
        (super.dispose(), this.shadow.dispose());
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          (this.distance = t.distance),
          (this.angle = t.angle),
          (this.penumbra = t.penumbra),
          (this.decay = t.decay),
          (this.target = t.target.clone()),
          (this.map = t.map),
          (this.shadow = t.shadow.clone()),
          this
        );
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return (
          (e.object.distance = this.distance),
          (e.object.angle = this.angle),
          (e.object.decay = this.decay),
          (e.object.penumbra = this.penumbra),
          (e.object.target = this.target.uuid),
          this.map && this.map.isTexture && (e.object.map = this.map.toJSON(t).uuid),
          (e.object.shadow = this.shadow.toJSON()),
          e
        );
      }
    };
  var nn = class extends Ws {
      constructor(t = -1, e = 1, i = 1, s = -1, r = 0.1, a = 2e3) {
        (super(),
          (this.isOrthographicCamera = !0),
          (this.type = "OrthographicCamera"),
          (this.zoom = 1),
          (this.view = null),
          (this.left = t),
          (this.right = e),
          (this.top = i),
          (this.bottom = s),
          (this.near = r),
          (this.far = a),
          this.updateProjectionMatrix());
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          (this.left = t.left),
          (this.right = t.right),
          (this.top = t.top),
          (this.bottom = t.bottom),
          (this.near = t.near),
          (this.far = t.far),
          (this.zoom = t.zoom),
          (this.view = t.view === null ? null : Object.assign({}, t.view)),
          this
        );
      }
      setViewOffset(t, e, i, s, r, a) {
        (this.view === null &&
          (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
          (this.view.enabled = !0),
          (this.view.fullWidth = t),
          (this.view.fullHeight = e),
          (this.view.offsetX = i),
          (this.view.offsetY = s),
          (this.view.width = r),
          (this.view.height = a),
          this.updateProjectionMatrix());
      }
      clearViewOffset() {
        (this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix());
      }
      updateProjectionMatrix() {
        let t = (this.right - this.left) / (2 * this.zoom),
          e = (this.top - this.bottom) / (2 * this.zoom),
          i = (this.right + this.left) / 2,
          s = (this.top + this.bottom) / 2,
          r = i - t,
          a = i + t,
          o = s + e,
          l = s - e;
        if (this.view !== null && this.view.enabled) {
          let c = (this.right - this.left) / this.view.fullWidth / this.zoom,
            u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
          ((r += c * this.view.offsetX),
            (a = r + c * this.view.width),
            (o -= u * this.view.offsetY),
            (l = o - u * this.view.height));
        }
        (this.projectionMatrix.makeOrthographic(
          r,
          a,
          o,
          l,
          this.near,
          this.far,
          this.coordinateSystem,
          this.reversedDepth,
        ),
          this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return (
          (e.object.zoom = this.zoom),
          (e.object.left = this.left),
          (e.object.right = this.right),
          (e.object.top = this.top),
          (e.object.bottom = this.bottom),
          (e.object.near = this.near),
          (e.object.far = this.far),
          this.view !== null && (e.object.view = Object.assign({}, this.view)),
          e
        );
      }
    },
    dc = class extends ks {
      constructor() {
        (super(new nn(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0));
      }
    },
    Ks = class extends is {
      constructor(t, e) {
        (super(t, e),
          (this.isDirectionalLight = !0),
          (this.type = "DirectionalLight"),
          this.position.copy(Ae.DEFAULT_UP),
          this.updateMatrix(),
          (this.target = new Ae()),
          (this.shadow = new dc()));
      }
      dispose() {
        (super.dispose(), this.shadow.dispose());
      }
      copy(t) {
        return (super.copy(t), (this.target = t.target.clone()), (this.shadow = t.shadow.clone()), this);
      }
      toJSON(t) {
        let e = super.toJSON(t);
        return ((e.object.shadow = this.shadow.toJSON()), (e.object.target = this.target.uuid), e);
      }
    };
  var Gn = -90,
    Vn = 1,
    xa = class extends Ae {
      constructor(t, e, i) {
        (super(),
          (this.type = "CubeCamera"),
          (this.renderTarget = i),
          (this.coordinateSystem = null),
          (this.activeMipmapLevel = 0));
        let s = new Oe(Gn, Vn, t, e);
        ((s.layers = this.layers), this.add(s));
        let r = new Oe(Gn, Vn, t, e);
        ((r.layers = this.layers), this.add(r));
        let a = new Oe(Gn, Vn, t, e);
        ((a.layers = this.layers), this.add(a));
        let o = new Oe(Gn, Vn, t, e);
        ((o.layers = this.layers), this.add(o));
        let l = new Oe(Gn, Vn, t, e);
        ((l.layers = this.layers), this.add(l));
        let c = new Oe(Gn, Vn, t, e);
        ((c.layers = this.layers), this.add(c));
      }
      updateCoordinateSystem() {
        let t = this.coordinateSystem,
          e = this.children.concat(),
          [i, s, r, a, o, l] = e;
        for (let c of e) this.remove(c);
        if (t === fi)
          (i.up.set(0, 1, 0),
            i.lookAt(1, 0, 0),
            s.up.set(0, 1, 0),
            s.lookAt(-1, 0, 0),
            r.up.set(0, 0, -1),
            r.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            l.up.set(0, 1, 0),
            l.lookAt(0, 0, -1));
        else if (t === kn)
          (i.up.set(0, -1, 0),
            i.lookAt(-1, 0, 0),
            s.up.set(0, -1, 0),
            s.lookAt(1, 0, 0),
            r.up.set(0, 0, 1),
            r.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            l.up.set(0, -1, 0),
            l.lookAt(0, 0, -1));
        else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
        for (let c of e) (this.add(c), c.updateMatrixWorld());
      }
      update(t, e) {
        this.parent === null && this.updateMatrixWorld();
        let { renderTarget: i, activeMipmapLevel: s } = this;
        this.coordinateSystem !== t.coordinateSystem &&
          ((this.coordinateSystem = t.coordinateSystem), this.updateCoordinateSystem());
        let [r, a, o, l, c, u] = this.children,
          f = t.getRenderTarget(),
          h = t.getActiveCubeFace(),
          d = t.getActiveMipmapLevel(),
          E = t.xr.enabled;
        t.xr.enabled = !1;
        let v = i.texture.generateMipmaps;
        i.texture.generateMipmaps = !1;
        let m = !1;
        (t.isWebGLRenderer === !0 ? (m = t.state.buffers.depth.getReversed()) : (m = t.reversedDepthBuffer),
          t.setRenderTarget(i, 0, s),
          m && t.autoClear === !1 && t.clearDepth(),
          t.render(e, r),
          t.setRenderTarget(i, 1, s),
          m && t.autoClear === !1 && t.clearDepth(),
          t.render(e, a),
          t.setRenderTarget(i, 2, s),
          m && t.autoClear === !1 && t.clearDepth(),
          t.render(e, o),
          t.setRenderTarget(i, 3, s),
          m && t.autoClear === !1 && t.clearDepth(),
          t.render(e, l),
          t.setRenderTarget(i, 4, s),
          m && t.autoClear === !1 && t.clearDepth(),
          t.render(e, c),
          (i.texture.generateMipmaps = v),
          t.setRenderTarget(i, 5, s),
          m && t.autoClear === !1 && t.clearDepth(),
          t.render(e, u),
          t.setRenderTarget(f, h, d),
          (t.xr.enabled = E),
          (i.texture.needsPMREMUpdate = !0));
      }
    },
    va = class extends Oe {
      constructor(t = []) {
        (super(), (this.isArrayCamera = !0), (this.isMultiViewCamera = !1), (this.cameras = t));
      }
    };
  var Lc = "\\[\\]\\.:\\/",
    Td = new RegExp("[" + Lc + "]", "g"),
    $c = "[^" + Lc + "]",
    Id = "[^" + Lc.replace("\\.", "") + "]",
    Ad = /((?:WC+[\/:])*)/.source.replace("WC", $c),
    Fd = /(WCOD+)?/.source.replace("WCOD", Id),
    Nd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", $c),
    wd = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", $c),
    Cd = new RegExp("^" + Ad + Fd + Nd + wd + "$"),
    Hd = ["material", "materials", "bones", "map"],
    fc = class {
      constructor(t, e, i) {
        let s = i || me.parseTrackName(e);
        ((this._targetGroup = t), (this._bindings = t.subscribe_(e, s)));
      }
      getValue(t, e) {
        this.bind();
        let i = this._targetGroup.nCachedObjects_,
          s = this._bindings[i];
        s !== void 0 && s.getValue(t, e);
      }
      setValue(t, e) {
        let i = this._bindings;
        for (let s = this._targetGroup.nCachedObjects_, r = i.length; s !== r; ++s) i[s].setValue(t, e);
      }
      bind() {
        let t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind();
      }
      unbind() {
        let t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind();
      }
    },
    me = class n {
      constructor(t, e, i) {
        ((this.path = e),
          (this.parsedPath = i || n.parseTrackName(e)),
          (this.node = n.findNode(t, this.parsedPath.nodeName)),
          (this.rootNode = t),
          (this.getValue = this._getValue_unbound),
          (this.setValue = this._setValue_unbound));
      }
      static create(t, e, i) {
        return t && t.isAnimationObjectGroup ? new n.Composite(t, e, i) : new n(t, e, i);
      }
      static sanitizeNodeName(t) {
        return t.replace(/\s/g, "_").replace(Td, "");
      }
      static parseTrackName(t) {
        let e = Cd.exec(t);
        if (e === null) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
        let i = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
          s = i.nodeName && i.nodeName.lastIndexOf(".");
        if (s !== void 0 && s !== -1) {
          let r = i.nodeName.substring(s + 1);
          Hd.indexOf(r) !== -1 && ((i.nodeName = i.nodeName.substring(0, s)), (i.objectName = r));
        }
        if (i.propertyName === null || i.propertyName.length === 0)
          throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t);
        return i;
      }
      static findNode(t, e) {
        if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) return t;
        if (t.skeleton) {
          let i = t.skeleton.getBoneByName(e);
          if (i !== void 0) return i;
        }
        if (t.children) {
          let i = function (r) {
              for (let a = 0; a < r.length; a++) {
                let o = r[a];
                if (o.name === e || o.uuid === e) return o;
                let l = i(o.children);
                if (l) return l;
              }
              return null;
            },
            s = i(t.children);
          if (s) return s;
        }
        return null;
      }
      _getValue_unavailable() {}
      _setValue_unavailable() {}
      _getValue_direct(t, e) {
        t[e] = this.targetObject[this.propertyName];
      }
      _getValue_array(t, e) {
        let i = this.resolvedProperty;
        for (let s = 0, r = i.length; s !== r; ++s) t[e++] = i[s];
      }
      _getValue_arrayElement(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex];
      }
      _getValue_toArray(t, e) {
        this.resolvedProperty.toArray(t, e);
      }
      _setValue_direct(t, e) {
        this.targetObject[this.propertyName] = t[e];
      }
      _setValue_direct_setNeedsUpdate(t, e) {
        ((this.targetObject[this.propertyName] = t[e]), (this.targetObject.needsUpdate = !0));
      }
      _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
        ((this.targetObject[this.propertyName] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0));
      }
      _setValue_array(t, e) {
        let i = this.resolvedProperty;
        for (let s = 0, r = i.length; s !== r; ++s) i[s] = t[e++];
      }
      _setValue_array_setNeedsUpdate(t, e) {
        let i = this.resolvedProperty;
        for (let s = 0, r = i.length; s !== r; ++s) i[s] = t[e++];
        this.targetObject.needsUpdate = !0;
      }
      _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
        let i = this.resolvedProperty;
        for (let s = 0, r = i.length; s !== r; ++s) i[s] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
      }
      _setValue_arrayElement(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e];
      }
      _setValue_arrayElement_setNeedsUpdate(t, e) {
        ((this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.needsUpdate = !0));
      }
      _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
        ((this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0));
      }
      _setValue_fromArray(t, e) {
        this.resolvedProperty.fromArray(t, e);
      }
      _setValue_fromArray_setNeedsUpdate(t, e) {
        (this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0));
      }
      _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
        (this.resolvedProperty.fromArray(t, e), (this.targetObject.matrixWorldNeedsUpdate = !0));
      }
      _getValue_unbound(t, e) {
        (this.bind(), this.getValue(t, e));
      }
      _setValue_unbound(t, e) {
        (this.bind(), this.setValue(t, e));
      }
      bind() {
        let t = this.node,
          e = this.parsedPath,
          i = e.objectName,
          s = e.propertyName,
          r = e.propertyIndex;
        if (
          (t || ((t = n.findNode(this.rootNode, e.nodeName)), (this.node = t)),
          (this.getValue = this._getValue_unavailable),
          (this.setValue = this._setValue_unavailable),
          !t)
        ) {
          Ht("PropertyBinding: No target node found for track: " + this.path + ".");
          return;
        }
        if (i) {
          let c = e.objectIndex;
          switch (i) {
            case "materials":
              if (!t.material) {
                Ot("PropertyBinding: Can not bind to material as node does not have a material.", this);
                return;
              }
              if (!t.material.materials) {
                Ot(
                  "PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                  this,
                );
                return;
              }
              t = t.material.materials;
              break;
            case "bones":
              if (!t.skeleton) {
                Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                return;
              }
              t = t.skeleton.bones;
              for (let u = 0; u < t.length; u++)
                if (t[u].name === c) {
                  c = u;
                  break;
                }
              break;
            case "map":
              if ("map" in t) {
                t = t.map;
                break;
              }
              if (!t.material) {
                Ot("PropertyBinding: Can not bind to material as node does not have a material.", this);
                return;
              }
              if (!t.material.map) {
                Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                return;
              }
              t = t.material.map;
              break;
            default:
              if (t[i] === void 0) {
                Ot("PropertyBinding: Can not bind to objectName of node undefined.", this);
                return;
              }
              t = t[i];
          }
          if (c !== void 0) {
            if (t[c] === void 0) {
              Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
              return;
            }
            t = t[c];
          }
        }
        let a = t[s];
        if (a === void 0) {
          let c = e.nodeName;
          Ot("PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", t);
          return;
        }
        let o = this.Versioning.None;
        ((this.targetObject = t),
          t.isMaterial === !0
            ? (o = this.Versioning.NeedsUpdate)
            : t.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate));
        let l = this.BindingType.Direct;
        if (r !== void 0) {
          if (s === "morphTargetInfluences") {
            if (!t.geometry) {
              Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              return;
            }
            if (!t.geometry.morphAttributes) {
              Ot(
                "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
                this,
              );
              return;
            }
            t.morphTargetDictionary[r] !== void 0 && (r = t.morphTargetDictionary[r]);
          }
          ((l = this.BindingType.ArrayElement), (this.resolvedProperty = a), (this.propertyIndex = r));
        } else
          a.fromArray !== void 0 && a.toArray !== void 0
            ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
            : Array.isArray(a)
              ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
              : (this.propertyName = s);
        ((this.getValue = this.GetterByBindingType[l]), (this.setValue = this.SetterByBindingTypeAndVersioning[l][o]));
      }
      unbind() {
        ((this.node = null), (this.getValue = this._getValue_unbound), (this.setValue = this._setValue_unbound));
      }
    };
  me.Composite = fc;
  me.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
  me.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
  me.prototype.GetterByBindingType = [
    me.prototype._getValue_direct,
    me.prototype._getValue_array,
    me.prototype._getValue_arrayElement,
    me.prototype._getValue_toArray,
  ];
  me.prototype.SetterByBindingTypeAndVersioning = [
    [
      me.prototype._setValue_direct,
      me.prototype._setValue_direct_setNeedsUpdate,
      me.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      me.prototype._setValue_array,
      me.prototype._setValue_array_setNeedsUpdate,
      me.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      me.prototype._setValue_arrayElement,
      me.prototype._setValue_arrayElement_setNeedsUpdate,
      me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      me.prototype._setValue_fromArray,
      me.prototype._setValue_fromArray_setNeedsUpdate,
      me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ];
  var cg = new Float32Array(1);
  var Dc = class Dc {
    constructor(t, e, i, s) {
      ((this.elements = [1, 0, 0, 1]), t !== void 0 && this.set(t, e, i, s));
    }
    identity() {
      return (this.set(1, 0, 0, 1), this);
    }
    fromArray(t, e = 0) {
      for (let i = 0; i < 4; i++) this.elements[i] = t[i + e];
      return this;
    }
    set(t, e, i, s) {
      let r = this.elements;
      return ((r[0] = t), (r[2] = e), (r[1] = i), (r[3] = s), this);
    }
  };
  Dc.prototype.isMatrix2 = !0;
  var pc = Dc;
  function zc(n, t, e, i) {
    let s = Ud(i);
    switch (e) {
      case wc:
        return n * t;
      case Ra:
        return ((n * t) / s.components) * s.byteLength;
      case Ta:
        return ((n * t) / s.components) * s.byteLength;
      case cn:
        return ((n * t * 2) / s.components) * s.byteLength;
      case Ia:
        return ((n * t * 2) / s.components) * s.byteLength;
      case Cc:
        return ((n * t * 3) / s.components) * s.byteLength;
      case qe:
        return ((n * t * 4) / s.components) * s.byteLength;
      case Aa:
        return ((n * t * 4) / s.components) * s.byteLength;
      case er:
      case ir:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
      case nr:
      case sr:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
      case Na:
      case Ca:
        return (Math.max(n, 16) * Math.max(t, 8)) / 4;
      case Fa:
      case wa:
        return (Math.max(n, 8) * Math.max(t, 8)) / 2;
      case Ha:
      case Ua:
      case La:
      case $a:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
      case Oa:
      case rr:
      case za:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
      case Ba:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
      case qa:
        return Math.floor((n + 4) / 5) * Math.floor((t + 3) / 4) * 16;
      case Ga:
        return Math.floor((n + 4) / 5) * Math.floor((t + 4) / 5) * 16;
      case Va:
        return Math.floor((n + 5) / 6) * Math.floor((t + 4) / 5) * 16;
      case Da:
        return Math.floor((n + 5) / 6) * Math.floor((t + 5) / 6) * 16;
      case Ja:
        return Math.floor((n + 7) / 8) * Math.floor((t + 4) / 5) * 16;
      case ka:
        return Math.floor((n + 7) / 8) * Math.floor((t + 5) / 6) * 16;
      case Wa:
        return Math.floor((n + 7) / 8) * Math.floor((t + 7) / 8) * 16;
      case Xa:
        return Math.floor((n + 9) / 10) * Math.floor((t + 4) / 5) * 16;
      case Ka:
        return Math.floor((n + 9) / 10) * Math.floor((t + 5) / 6) * 16;
      case Za:
        return Math.floor((n + 9) / 10) * Math.floor((t + 7) / 8) * 16;
      case Ya:
        return Math.floor((n + 9) / 10) * Math.floor((t + 9) / 10) * 16;
      case ja:
        return Math.floor((n + 11) / 12) * Math.floor((t + 9) / 10) * 16;
      case to:
        return Math.floor((n + 11) / 12) * Math.floor((t + 11) / 12) * 16;
      case eo:
      case io:
      case no:
        return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
      case so:
      case ro:
        return Math.ceil(n / 4) * Math.ceil(t / 4) * 8;
      case ar:
      case ao:
        return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${e} format.`);
  }
  function Ud(n) {
    switch (n) {
      case He:
      case Ic:
        return { byteLength: 1, components: 1 };
      case as:
      case Ac:
      case Ue:
        return { byteLength: 2, components: 1 };
      case ba:
      case Qa:
        return { byteLength: 2, components: 4 };
      case mi:
      case _a:
      case Ke:
        return { byteLength: 4, components: 1 };
      case Fc:
      case Nc:
        return { byteLength: 4, components: 3 };
    }
    throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`);
  }
  typeof __THREE_DEVTOOLS__ < "u" &&
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "186" } }));
  typeof window < "u" &&
    (window.__THREE__ ? Ht("WARNING: Multiple instances of Three.js being imported.") : (window.__THREE__ = "186"));
  function ou() {
    let n = null,
      t = !1,
      e = null,
      i = null;
    function s(r, a) {
      ((i = n.requestAnimationFrame(s)), e(r, a));
    }
    return {
      start: function () {
        t !== !0 && e !== null && n !== null && ((i = n.requestAnimationFrame(s)), (t = !0));
      },
      stop: function () {
        (n !== null && n.cancelAnimationFrame(i), (t = !1));
      },
      setAnimationLoop: function (r) {
        e = r;
      },
      setContext: function (r) {
        n = r;
      },
    };
  }
  function Gd(n) {
    let t = new WeakMap();
    function e(o, l) {
      let c = o.array,
        u = o.usage,
        f = c.byteLength,
        h = n.createBuffer();
      (n.bindBuffer(l, h), n.bufferData(l, c, u), o.onUploadCallback());
      let d;
      if (c instanceof Float32Array) d = n.FLOAT;
      else if (typeof Float16Array < "u" && c instanceof Float16Array) d = n.HALF_FLOAT;
      else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? (d = n.HALF_FLOAT) : (d = n.UNSIGNED_SHORT);
      else if (c instanceof Int16Array) d = n.SHORT;
      else if (c instanceof Uint32Array) d = n.UNSIGNED_INT;
      else if (c instanceof Int32Array) d = n.INT;
      else if (c instanceof Int8Array) d = n.BYTE;
      else if (c instanceof Uint8Array) d = n.UNSIGNED_BYTE;
      else if (c instanceof Uint8ClampedArray) d = n.UNSIGNED_BYTE;
      else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
      return { buffer: h, type: d, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: f };
    }
    function i(o, l, c) {
      let u = l.array,
        f = l.updateRanges;
      if ((n.bindBuffer(c, o), f.length === 0)) n.bufferSubData(c, 0, u);
      else {
        f.sort((d, E) => d.start - E.start);
        let h = 0;
        for (let d = 1; d < f.length; d++) {
          let E = f[h],
            v = f[d];
          v.start <= E.start + E.count + 1
            ? (E.count = Math.max(E.count, v.start + v.count - E.start))
            : (++h, (f[h] = v));
        }
        f.length = h + 1;
        for (let d = 0, E = f.length; d < E; d++) {
          let v = f[d];
          n.bufferSubData(c, v.start * u.BYTES_PER_ELEMENT, u, v.start, v.count);
        }
        l.clearUpdateRanges();
      }
      l.onUploadCallback();
    }
    function s(o) {
      return (o.isInterleavedBufferAttribute && (o = o.data), t.get(o));
    }
    function r(o) {
      o.isInterleavedBufferAttribute && (o = o.data);
      let l = t.get(o);
      l && (n.deleteBuffer(l.buffer), t.delete(o));
    }
    function a(o, l) {
      if ((o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)) {
        let u = t.get(o);
        (!u || u.version < o.version) &&
          t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
        return;
      }
      let c = t.get(o);
      if (c === void 0) t.set(o, e(o, l));
      else if (c.version < o.version) {
        if (c.size !== o.array.byteLength)
          throw new Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
          );
        (i(c.buffer, o, l), (c.version = o.version));
      }
    }
    return { get: s, remove: r, update: a };
  }
  var Vd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
    Dd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
    Jd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
    kd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    Wd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
    Xd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    Kd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    Zd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    Yd = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
    jd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
    tf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
    ef = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    nf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
    sf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
    rf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    af = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
    of = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    cf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    lf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    hf = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
    uf = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
    df = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
    ff = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
    pf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
    mf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    Ef = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
    gf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    xf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
    vf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    Sf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    yf = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    Mf = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    Pf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
    _f = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
    bf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    Qf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    Rf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    Tf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    If = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    Af = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    Ff = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    Nf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
    wf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    Cf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
    Hf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
    Uf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
    Of = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
    Lf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    $f = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
    zf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    Bf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
    qf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
    Gf = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    Vf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    Df = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    Jf = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
    kf = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
    Wf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    Xf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    Kf = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    Zf = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
    Yf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    jf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    tp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    ep = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    ip = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    np = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    sp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
    rp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
    ap = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    op = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
    cp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    lp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
    hp = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    up = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    dp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    fp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
    pp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
    mp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
    Ep = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
    gp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
    xp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
    vp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    Sp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
    yp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    Mp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    Pp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    _p = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    bp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    Qp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    Rp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
    Tp = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    Ip = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
    Ap = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    Fp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    Np = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
    wp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    Cp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    Hp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    Up = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    Op = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    Lp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    $p = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
    zp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
    Bp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    qp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    Gp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
    Vp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
    Dp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    Jp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    kp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    Wp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    Xp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    Kp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    Zp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    Yp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
    jp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    tm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
    em = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    im = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    nm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    sm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    rm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    am = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    om = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    cm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    lm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    hm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    um = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    dm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
    fm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    pm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    mm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    Em = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    gm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    xm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    vm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    Sm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    ym = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Mm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    Pm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    _m = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
    kt = {
      alphahash_fragment: Vd,
      alphahash_pars_fragment: Dd,
      alphamap_fragment: Jd,
      alphamap_pars_fragment: kd,
      alphatest_fragment: Wd,
      alphatest_pars_fragment: Xd,
      aomap_fragment: Kd,
      aomap_pars_fragment: Zd,
      batching_pars_vertex: Yd,
      batching_vertex: jd,
      begin_vertex: tf,
      beginnormal_vertex: ef,
      bsdfs: nf,
      iridescence_fragment: sf,
      bumpmap_pars_fragment: rf,
      clipping_planes_fragment: af,
      clipping_planes_pars_fragment: of,
      clipping_planes_pars_vertex: cf,
      clipping_planes_vertex: lf,
      color_fragment: hf,
      color_pars_fragment: uf,
      color_pars_vertex: df,
      color_vertex: ff,
      common: pf,
      cube_uv_reflection_fragment: mf,
      defaultnormal_vertex: Ef,
      displacementmap_pars_vertex: gf,
      displacementmap_vertex: xf,
      emissivemap_fragment: vf,
      emissivemap_pars_fragment: Sf,
      colorspace_fragment: yf,
      colorspace_pars_fragment: Mf,
      envmap_fragment: Pf,
      envmap_common_pars_fragment: _f,
      envmap_pars_fragment: bf,
      envmap_pars_vertex: Qf,
      envmap_physical_pars_fragment: Of,
      envmap_vertex: Rf,
      fog_vertex: Tf,
      fog_pars_vertex: If,
      fog_fragment: Af,
      fog_pars_fragment: Ff,
      gradientmap_pars_fragment: Nf,
      lightmap_pars_fragment: wf,
      lights_lambert_fragment: Cf,
      lights_lambert_pars_fragment: Hf,
      lights_pars_begin: Uf,
      lights_toon_fragment: Lf,
      lights_toon_pars_fragment: $f,
      lights_phong_fragment: zf,
      lights_phong_pars_fragment: Bf,
      lights_physical_fragment: qf,
      lights_physical_pars_fragment: Gf,
      lights_fragment_begin: Vf,
      lights_fragment_maps: Df,
      lights_fragment_end: Jf,
      lightprobes_pars_fragment: kf,
      logdepthbuf_fragment: Wf,
      logdepthbuf_pars_fragment: Xf,
      logdepthbuf_pars_vertex: Kf,
      logdepthbuf_vertex: Zf,
      map_fragment: Yf,
      map_pars_fragment: jf,
      map_particle_fragment: tp,
      map_particle_pars_fragment: ep,
      metalnessmap_fragment: ip,
      metalnessmap_pars_fragment: np,
      morphinstance_vertex: sp,
      morphcolor_vertex: rp,
      morphnormal_vertex: ap,
      morphtarget_pars_vertex: op,
      morphtarget_vertex: cp,
      normal_fragment_begin: lp,
      normal_fragment_maps: hp,
      normal_pars_fragment: up,
      normal_pars_vertex: dp,
      normal_vertex: fp,
      normalmap_pars_fragment: pp,
      clearcoat_normal_fragment_begin: mp,
      clearcoat_normal_fragment_maps: Ep,
      clearcoat_pars_fragment: gp,
      iridescence_pars_fragment: xp,
      opaque_fragment: vp,
      packing: Sp,
      premultiplied_alpha_fragment: yp,
      project_vertex: Mp,
      dithering_fragment: Pp,
      dithering_pars_fragment: _p,
      roughnessmap_fragment: bp,
      roughnessmap_pars_fragment: Qp,
      shadowmap_pars_fragment: Rp,
      shadowmap_pars_vertex: Tp,
      shadowmap_vertex: Ip,
      shadowmask_pars_fragment: Ap,
      skinbase_vertex: Fp,
      skinning_pars_vertex: Np,
      skinning_vertex: wp,
      skinnormal_vertex: Cp,
      specularmap_fragment: Hp,
      specularmap_pars_fragment: Up,
      tonemapping_fragment: Op,
      tonemapping_pars_fragment: Lp,
      transmission_fragment: $p,
      transmission_pars_fragment: zp,
      uv_pars_fragment: Bp,
      uv_pars_vertex: qp,
      uv_vertex: Gp,
      worldpos_vertex: Vp,
      background_vert: Dp,
      background_frag: Jp,
      backgroundCube_vert: kp,
      backgroundCube_frag: Wp,
      cube_vert: Xp,
      cube_frag: Kp,
      depth_vert: Zp,
      depth_frag: Yp,
      distance_vert: jp,
      distance_frag: tm,
      equirect_vert: em,
      equirect_frag: im,
      linedashed_vert: nm,
      linedashed_frag: sm,
      meshbasic_vert: rm,
      meshbasic_frag: am,
      meshlambert_vert: om,
      meshlambert_frag: cm,
      meshmatcap_vert: lm,
      meshmatcap_frag: hm,
      meshnormal_vert: um,
      meshnormal_frag: dm,
      meshphong_vert: fm,
      meshphong_frag: pm,
      meshphysical_vert: mm,
      meshphysical_frag: Em,
      meshtoon_vert: gm,
      meshtoon_frag: xm,
      points_vert: vm,
      points_frag: Sm,
      shadow_vert: ym,
      shadow_frag: Mm,
      sprite_vert: Pm,
      sprite_frag: _m,
    },
    Et = {
      common: {
        diffuse: { value: new Tt(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        mapTransform: { value: new Gt() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Gt() },
        alphaTest: { value: 0 },
      },
      specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Gt() } },
      envmap: {
        envMap: { value: null },
        envMapRotation: { value: new Gt() },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
        dfgLUT: { value: null },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Gt() } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Gt() } },
      bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Gt() }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalMapTransform: { value: new Gt() },
        normalScale: { value: new Ct(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementMapTransform: { value: new Gt() },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Gt() } },
      metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Gt() } },
      roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Gt() } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new Tt(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        sunLights: { value: [], properties: { direction: {}, color: {} } },
        sunLightShadows: {
          value: [],
          properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
        },
        sunShadowMatrix: { value: [] },
        sunShadowCascade: { value: [] },
        directionalLights: { value: [], properties: { direction: {}, color: {} } },
        directionalLightShadows: {
          value: [],
          properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
        },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} },
        },
        spotLightShadows: {
          value: [],
          properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
        },
        spotLightMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
        pointLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMatrix: { value: [] },
        hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
        rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
        ltc_1: { value: null },
        ltc_2: { value: null },
        probesSH: { value: null },
        probesMin: { value: new F() },
        probesMax: { value: new F() },
        probesResolution: { value: new F() },
      },
      points: {
        diffuse: { value: new Tt(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Gt() },
        alphaTest: { value: 0 },
        uvTransform: { value: new Gt() },
      },
      sprite: {
        diffuse: { value: new Tt(16777215) },
        opacity: { value: 1 },
        center: { value: new Ct(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        mapTransform: { value: new Gt() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Gt() },
        alphaTest: { value: 0 },
      },
    },
    Ti = {
      basic: {
        uniforms: Ge([Et.common, Et.specularmap, Et.envmap, Et.aomap, Et.lightmap, Et.fog]),
        vertexShader: kt.meshbasic_vert,
        fragmentShader: kt.meshbasic_frag,
      },
      lambert: {
        uniforms: Ge([
          Et.common,
          Et.specularmap,
          Et.envmap,
          Et.aomap,
          Et.lightmap,
          Et.emissivemap,
          Et.bumpmap,
          Et.normalmap,
          Et.displacementmap,
          Et.fog,
          Et.lights,
          { emissive: { value: new Tt(0) }, envMapIntensity: { value: 1 } },
        ]),
        vertexShader: kt.meshlambert_vert,
        fragmentShader: kt.meshlambert_frag,
      },
      phong: {
        uniforms: Ge([
          Et.common,
          Et.specularmap,
          Et.envmap,
          Et.aomap,
          Et.lightmap,
          Et.emissivemap,
          Et.bumpmap,
          Et.normalmap,
          Et.displacementmap,
          Et.fog,
          Et.lights,
          {
            emissive: { value: new Tt(0) },
            specular: { value: new Tt(1118481) },
            shininess: { value: 30 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: kt.meshphong_vert,
        fragmentShader: kt.meshphong_frag,
      },
      standard: {
        uniforms: Ge([
          Et.common,
          Et.envmap,
          Et.aomap,
          Et.lightmap,
          Et.emissivemap,
          Et.bumpmap,
          Et.normalmap,
          Et.displacementmap,
          Et.roughnessmap,
          Et.metalnessmap,
          Et.fog,
          Et.lights,
          {
            emissive: { value: new Tt(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: kt.meshphysical_vert,
        fragmentShader: kt.meshphysical_frag,
      },
      toon: {
        uniforms: Ge([
          Et.common,
          Et.aomap,
          Et.lightmap,
          Et.emissivemap,
          Et.bumpmap,
          Et.normalmap,
          Et.displacementmap,
          Et.gradientmap,
          Et.fog,
          Et.lights,
          { emissive: { value: new Tt(0) } },
        ]),
        vertexShader: kt.meshtoon_vert,
        fragmentShader: kt.meshtoon_frag,
      },
      matcap: {
        uniforms: Ge([Et.common, Et.bumpmap, Et.normalmap, Et.displacementmap, Et.fog, { matcap: { value: null } }]),
        vertexShader: kt.meshmatcap_vert,
        fragmentShader: kt.meshmatcap_frag,
      },
      points: { uniforms: Ge([Et.points, Et.fog]), vertexShader: kt.points_vert, fragmentShader: kt.points_frag },
      dashed: {
        uniforms: Ge([Et.common, Et.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]),
        vertexShader: kt.linedashed_vert,
        fragmentShader: kt.linedashed_frag,
      },
      depth: {
        uniforms: Ge([Et.common, Et.displacementmap]),
        vertexShader: kt.depth_vert,
        fragmentShader: kt.depth_frag,
      },
      normal: {
        uniforms: Ge([Et.common, Et.bumpmap, Et.normalmap, Et.displacementmap, { opacity: { value: 1 } }]),
        vertexShader: kt.meshnormal_vert,
        fragmentShader: kt.meshnormal_frag,
      },
      sprite: { uniforms: Ge([Et.sprite, Et.fog]), vertexShader: kt.sprite_vert, fragmentShader: kt.sprite_frag },
      background: {
        uniforms: { uvTransform: { value: new Gt() }, t2D: { value: null }, backgroundIntensity: { value: 1 } },
        vertexShader: kt.background_vert,
        fragmentShader: kt.background_frag,
      },
      backgroundCube: {
        uniforms: {
          envMap: { value: null },
          backgroundBlurriness: { value: 0 },
          backgroundIntensity: { value: 1 },
          backgroundRotation: { value: new Gt() },
        },
        vertexShader: kt.backgroundCube_vert,
        fragmentShader: kt.backgroundCube_frag,
      },
      cube: {
        uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } },
        vertexShader: kt.cube_vert,
        fragmentShader: kt.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: kt.equirect_vert,
        fragmentShader: kt.equirect_frag,
      },
      distance: {
        uniforms: Ge([
          Et.common,
          Et.displacementmap,
          { referencePosition: { value: new F() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } },
        ]),
        vertexShader: kt.distance_vert,
        fragmentShader: kt.distance_frag,
      },
      shadow: {
        uniforms: Ge([Et.lights, Et.fog, { color: { value: new Tt(0) }, opacity: { value: 1 } }]),
        vertexShader: kt.shadow_vert,
        fragmentShader: kt.shadow_frag,
      },
    };
  Ti.physical = {
    uniforms: Ge([
      Ti.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatMapTransform: { value: new Gt() },
        clearcoatNormalMap: { value: null },
        clearcoatNormalMapTransform: { value: new Gt() },
        clearcoatNormalScale: { value: new Ct(1, 1) },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatRoughnessMapTransform: { value: new Gt() },
        dispersion: { value: 0 },
        retroreflectivity: { value: 0 },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceMapTransform: { value: new Gt() },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        iridescenceThicknessMapTransform: { value: new Gt() },
        sheen: { value: 0 },
        sheenColor: { value: new Tt(0) },
        sheenColorMap: { value: null },
        sheenColorMapTransform: { value: new Gt() },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        sheenRoughnessMapTransform: { value: new Gt() },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionMapTransform: { value: new Gt() },
        transmissionSamplerSize: { value: new Ct() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        thicknessMapTransform: { value: new Gt() },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new Tt(0) },
        specularColor: { value: new Tt(1, 1, 1) },
        specularColorMap: { value: null },
        specularColorMapTransform: { value: new Gt() },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularIntensityMapTransform: { value: new Gt() },
        anisotropyVector: { value: new Ct() },
        anisotropyMap: { value: null },
        anisotropyMapTransform: { value: new Gt() },
      },
    ]),
    vertexShader: kt.meshphysical_vert,
    fragmentShader: kt.meshphysical_frag,
  };
  var ho = { r: 0, b: 0, g: 0 },
    bm = new Vt(),
    cu = new Gt();
  cu.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  function Qm(n, t, e, i, s, r) {
    let a = new Tt(0),
      o = s === !0 ? 0 : 1,
      l,
      c,
      u = null,
      f = 0,
      h = null;
    function d(y) {
      let Q = y.isScene === !0 ? y.background : null;
      if (Q && Q.isTexture) {
        let S = y.backgroundBlurriness > 0;
        Q = t.get(Q, S);
      }
      return Q;
    }
    function E(y) {
      let Q = !1,
        S = d(y);
      S === null ? m(a, o) : S && S.isColor && (m(S, 1), (Q = !0));
      let M = n.xr.getEnvironmentBlendMode();
      (M === "additive"
        ? e.buffers.color.setClear(0, 0, 0, 1, r)
        : M === "alpha-blend" && e.buffers.color.setClear(0, 0, 0, 0, r),
        (n.autoClear || Q) &&
          (e.buffers.depth.setTest(!0),
          e.buffers.depth.setMask(!0),
          e.buffers.color.setMask(!0),
          n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil)));
    }
    function v(y, Q) {
      let S = d(Q);
      S && (S.isCubeTexture || S.mapping === js)
        ? (c === void 0 &&
            ((c = new Ee(
              new bi(1, 1, 1),
              new Se({
                name: "BackgroundCubeMaterial",
                uniforms: Pn(Ti.backgroundCube.uniforms),
                vertexShader: Ti.backgroundCube.vertexShader,
                fragmentShader: Ti.backgroundCube.fragmentShader,
                side: Le,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1,
              }),
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (M, P, T) {
              this.matrixWorld.copyPosition(T.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.envMap.value = S),
          (c.material.uniforms.backgroundBlurriness.value = Q.backgroundBlurriness),
          (c.material.uniforms.backgroundIntensity.value = Q.backgroundIntensity),
          c.material.uniforms.backgroundRotation.value
            .setFromMatrix4(bm.makeRotationFromEuler(Q.backgroundRotation))
            .transpose(),
          S.isCubeTexture &&
            S.isRenderTargetTexture === !1 &&
            c.material.uniforms.backgroundRotation.value.premultiply(cu),
          (c.material.toneMapped = Yt.getTransfer(S.colorSpace) !== oe),
          (u !== S || f !== S.version || h !== n.toneMapping) &&
            ((c.material.needsUpdate = !0), (u = S), (f = S.version), (h = n.toneMapping)),
          c.layers.enableAll(),
          y.unshift(c, c.geometry, c.material, 0, 0, null))
        : S &&
          S.isTexture &&
          (l === void 0 &&
            ((l = new Ee(
              new qs(2, 2),
              new Se({
                name: "BackgroundMaterial",
                uniforms: Pn(Ti.background.uniforms),
                vertexShader: Ti.background.vertexShader,
                fragmentShader: Ti.background.fragmentShader,
                side: sn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1,
              }),
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(l)),
          (l.material.uniforms.t2D.value = S),
          (l.material.uniforms.backgroundIntensity.value = Q.backgroundIntensity),
          (l.material.toneMapped = Yt.getTransfer(S.colorSpace) !== oe),
          S.matrixAutoUpdate === !0 && S.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(S.matrix),
          (u !== S || f !== S.version || h !== n.toneMapping) &&
            ((l.material.needsUpdate = !0), (u = S), (f = S.version), (h = n.toneMapping)),
          l.layers.enableAll(),
          y.unshift(l, l.geometry, l.material, 0, 0, null));
    }
    function m(y, Q) {
      (y.getRGB(ho, Oc(n)), e.buffers.color.setClear(ho.r, ho.g, ho.b, Q, r));
    }
    function p() {
      (c !== void 0 && (c.geometry.dispose(), c.material.dispose(), (c = void 0)),
        l !== void 0 && (l.geometry.dispose(), l.material.dispose(), (l = void 0)));
    }
    return {
      getClearColor: function () {
        return a;
      },
      setClearColor: function (y, Q = 1) {
        (a.set(y), (o = Q), m(a, o));
      },
      getClearAlpha: function () {
        return o;
      },
      setClearAlpha: function (y) {
        ((o = y), m(a, o));
      },
      render: E,
      addToRenderList: v,
      dispose: p,
    };
  }
  function Rm(n, t) {
    let e = n.getParameter(n.MAX_VERTEX_ATTRIBS),
      i = {},
      s = h(null),
      r = s,
      a = !1;
    function o(w, C, z, A, L) {
      let G = !1,
        D = f(w, A, z, C);
      (r !== D && ((r = D), c(r.object)),
        (G = d(w, A, z, L)),
        G && E(w, A, z, L),
        L !== null && t.update(L, n.ELEMENT_ARRAY_BUFFER),
        (G || a) && ((a = !1), S(w, C, z, A), L !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(L).buffer)));
    }
    function l() {
      return n.createVertexArray();
    }
    function c(w) {
      return n.bindVertexArray(w);
    }
    function u(w) {
      return n.deleteVertexArray(w);
    }
    function f(w, C, z, A) {
      let L = A.wireframe === !0,
        G = i[C.id];
      G === void 0 && ((G = {}), (i[C.id] = G));
      let D = w.isInstancedMesh === !0 ? w.id : 0,
        et = G[D];
      et === void 0 && ((et = {}), (G[D] = et));
      let J = et[z.id];
      J === void 0 && ((J = {}), (et[z.id] = J));
      let Y = J[L];
      return (Y === void 0 && ((Y = h(l())), (J[L] = Y)), Y);
    }
    function h(w) {
      let C = [],
        z = [],
        A = [];
      for (let L = 0; L < e; L++) ((C[L] = 0), (z[L] = 0), (A[L] = 0));
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: C,
        enabledAttributes: z,
        attributeDivisors: A,
        object: w,
        attributes: {},
        index: null,
      };
    }
    function d(w, C, z, A) {
      let L = r.attributes,
        G = C.attributes,
        D = 0,
        et = z.getAttributes();
      for (let J in et)
        if (et[J].location >= 0) {
          let it = L[J],
            ft = G[J];
          if (
            (ft === void 0 &&
              (J === "instanceMatrix" && w.instanceMatrix && (ft = w.instanceMatrix),
              J === "instanceColor" && w.instanceColor && (ft = w.instanceColor)),
            it === void 0 || it.attribute !== ft || (ft && it.data !== ft.data))
          )
            return !0;
          D++;
        }
      return r.attributesNum !== D || r.index !== A;
    }
    function E(w, C, z, A) {
      let L = {},
        G = C.attributes,
        D = 0,
        et = z.getAttributes();
      for (let J in et)
        if (et[J].location >= 0) {
          let it = G[J];
          it === void 0 &&
            (J === "instanceMatrix" && w.instanceMatrix && (it = w.instanceMatrix),
            J === "instanceColor" && w.instanceColor && (it = w.instanceColor));
          let ft = {};
          ((ft.attribute = it), it && it.data && (ft.data = it.data), (L[J] = ft), D++);
        }
      ((r.attributes = L), (r.attributesNum = D), (r.index = A));
    }
    function v() {
      let w = r.newAttributes;
      for (let C = 0, z = w.length; C < z; C++) w[C] = 0;
    }
    function m(w) {
      p(w, 0);
    }
    function p(w, C) {
      let z = r.newAttributes,
        A = r.enabledAttributes,
        L = r.attributeDivisors;
      ((z[w] = 1),
        A[w] === 0 && (n.enableVertexAttribArray(w), (A[w] = 1)),
        L[w] !== C && (n.vertexAttribDivisor(w, C), (L[w] = C)));
    }
    function y() {
      let w = r.newAttributes,
        C = r.enabledAttributes;
      for (let z = 0, A = C.length; z < A; z++) C[z] !== w[z] && (n.disableVertexAttribArray(z), (C[z] = 0));
    }
    function Q(w, C, z, A, L, G, D) {
      D === !0 ? n.vertexAttribIPointer(w, C, z, L, G) : n.vertexAttribPointer(w, C, z, A, L, G);
    }
    function S(w, C, z, A) {
      v();
      let L = A.attributes,
        G = z.getAttributes(),
        D = C.defaultAttributeValues;
      for (let et in G) {
        let J = G[et];
        if (J.location >= 0) {
          let Y = L[et];
          if (
            (Y === void 0 &&
              (et === "instanceMatrix" && w.instanceMatrix && (Y = w.instanceMatrix),
              et === "instanceColor" && w.instanceColor && (Y = w.instanceColor)),
            Y !== void 0)
          ) {
            let it = Y.normalized,
              ft = Y.itemSize,
              ct = t.get(Y);
            if (ct === void 0) continue;
            let ee = ct.buffer,
              Dt = ct.type,
              yt = ct.bytesPerElement,
              W = Dt === n.INT || Dt === n.UNSIGNED_INT || Y.gpuType === _a;
            if (Y.isInterleavedBufferAttribute) {
              let Z = Y.data,
                xt = Z.stride,
                Ut = Y.offset;
              if (Z.isInstancedInterleavedBuffer) {
                for (let pt = 0; pt < J.locationSize; pt++) p(J.location + pt, Z.meshPerAttribute);
                w.isInstancedMesh !== !0 &&
                  A._maxInstanceCount === void 0 &&
                  (A._maxInstanceCount = Z.meshPerAttribute * Z.count);
              } else for (let pt = 0; pt < J.locationSize; pt++) m(J.location + pt);
              n.bindBuffer(n.ARRAY_BUFFER, ee);
              for (let pt = 0; pt < J.locationSize; pt++)
                Q(J.location + pt, ft / J.locationSize, Dt, it, xt * yt, (Ut + (ft / J.locationSize) * pt) * yt, W);
            } else {
              if (Y.isInstancedBufferAttribute) {
                for (let Z = 0; Z < J.locationSize; Z++) p(J.location + Z, Y.meshPerAttribute);
                w.isInstancedMesh !== !0 &&
                  A._maxInstanceCount === void 0 &&
                  (A._maxInstanceCount = Y.meshPerAttribute * Y.count);
              } else for (let Z = 0; Z < J.locationSize; Z++) m(J.location + Z);
              n.bindBuffer(n.ARRAY_BUFFER, ee);
              for (let Z = 0; Z < J.locationSize; Z++)
                Q(J.location + Z, ft / J.locationSize, Dt, it, ft * yt, (ft / J.locationSize) * Z * yt, W);
            }
          } else if (D !== void 0) {
            let it = D[et];
            if (it !== void 0)
              switch (it.length) {
                case 2:
                  n.vertexAttrib2fv(J.location, it);
                  break;
                case 3:
                  n.vertexAttrib3fv(J.location, it);
                  break;
                case 4:
                  n.vertexAttrib4fv(J.location, it);
                  break;
                default:
                  n.vertexAttrib1fv(J.location, it);
              }
          }
        }
      }
      y();
    }
    function M() {
      b();
      for (let w in i) {
        let C = i[w];
        for (let z in C) {
          let A = C[z];
          for (let L in A) {
            let G = A[L];
            for (let D in G) (u(G[D].object), delete G[D]);
            delete A[L];
          }
        }
        delete i[w];
      }
    }
    function P(w) {
      if (i[w.id] === void 0) return;
      let C = i[w.id];
      for (let z in C) {
        let A = C[z];
        for (let L in A) {
          let G = A[L];
          for (let D in G) (u(G[D].object), delete G[D]);
          delete A[L];
        }
      }
      delete i[w.id];
    }
    function T(w) {
      for (let C in i) {
        let z = i[C];
        for (let A in z) {
          let L = z[A];
          if (L[w.id] === void 0) continue;
          let G = L[w.id];
          for (let D in G) (u(G[D].object), delete G[D]);
          delete L[w.id];
        }
      }
    }
    function x(w) {
      for (let C in i) {
        let z = i[C],
          A = w.isInstancedMesh === !0 ? w.id : 0,
          L = z[A];
        if (L !== void 0) {
          for (let G in L) {
            let D = L[G];
            for (let et in D) (u(D[et].object), delete D[et]);
            delete L[G];
          }
          (delete z[A], Object.keys(z).length === 0 && delete i[C]);
        }
      }
    }
    function b() {
      (N(), (a = !0), r !== s && ((r = s), c(r.object)));
    }
    function N() {
      ((s.geometry = null), (s.program = null), (s.wireframe = !1));
    }
    return {
      setup: o,
      reset: b,
      resetDefaultState: N,
      dispose: M,
      releaseStatesOfGeometry: P,
      releaseStatesOfObject: x,
      releaseStatesOfProgram: T,
      initAttributes: v,
      enableAttribute: m,
      disableUnusedAttributes: y,
    };
  }
  function Tm(n, t, e) {
    let i;
    function s(l) {
      i = l;
    }
    function r(l, c) {
      (n.drawArrays(i, l, c), e.update(c, i, 1));
    }
    function a(l, c, u) {
      u !== 0 && (n.drawArraysInstanced(i, l, c, u), e.update(c, i, u));
    }
    function o(l, c, u) {
      if (u === 0) return;
      t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, c, 0, u);
      let h = 0;
      for (let d = 0; d < u; d++) h += c[d];
      e.update(h, i, 1);
    }
    ((this.setMode = s), (this.render = r), (this.renderInstances = a), (this.renderMultiDraw = o));
  }
  function Im(n, t, e, i) {
    let s;
    function r() {
      if (s !== void 0) return s;
      if (t.has("EXT_texture_filter_anisotropic") === !0) {
        let T = t.get("EXT_texture_filter_anisotropic");
        s = n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else s = 0;
      return s;
    }
    function a(T) {
      return !(T !== qe && i.convert(T) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
    }
    function o(T) {
      let x = T === Ue && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
      return !(T !== He && T !== Ke && !x && i.convert(T) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE));
    }
    function l(T) {
      if (T === "highp") {
        if (
          n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 &&
          n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0
        )
          return "highp";
        T = "mediump";
      }
      return T === "mediump" &&
        n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 &&
        n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0
        ? "mediump"
        : "lowp";
    }
    let c = e.precision !== void 0 ? e.precision : "highp",
      u = l(c);
    u !== c && (Ht("WebGLRenderer:", c, "not supported, using", u, "instead."), (c = u));
    let f = e.logarithmicDepthBuffer === !0,
      h = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
    e.reversedDepthBuffer === !0 &&
      h === !1 &&
      Ht(
        "WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.",
      );
    let d = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
      E = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      v = n.getParameter(n.MAX_TEXTURE_SIZE),
      m = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
      p = n.getParameter(n.MAX_VERTEX_ATTRIBS),
      y = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
      Q = n.getParameter(n.MAX_VARYING_VECTORS),
      S = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
      M = n.getParameter(n.MAX_SAMPLES),
      P = n.getParameter(n.SAMPLES);
    return {
      isWebGL2: !0,
      getMaxAnisotropy: r,
      getMaxPrecision: l,
      textureFormatReadable: a,
      textureTypeReadable: o,
      precision: c,
      logarithmicDepthBuffer: f,
      reversedDepthBuffer: h,
      maxTextures: d,
      maxVertexTextures: E,
      maxTextureSize: v,
      maxCubemapSize: m,
      maxAttributes: p,
      maxVertexUniforms: y,
      maxVaryings: Q,
      maxFragmentUniforms: S,
      maxSamples: M,
      samples: P,
    };
  }
  function Am(n) {
    let t = this,
      e = null,
      i = 0,
      s = !1,
      r = !1,
      a = new di(),
      o = new Gt(),
      l = { value: null, needsUpdate: !1 };
    ((this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (f, h) {
        let d = f.length !== 0 || h || i !== 0 || s;
        return ((s = h), (i = f.length), d);
      }),
      (this.beginShadows = function () {
        ((r = !0), u(null));
      }),
      (this.endShadows = function () {
        r = !1;
      }),
      (this.setGlobalState = function (f, h) {
        e = u(f, h, 0);
      }),
      (this.setState = function (f, h, d) {
        let E = f.clippingPlanes,
          v = f.clipIntersection,
          m = f.clipShadows,
          p = n.get(f);
        if (!s || E === null || E.length === 0 || (r && !m)) r ? u(null) : c();
        else {
          let y = r ? 0 : i,
            Q = y * 4,
            S = p.clippingState || null;
          ((l.value = S), (S = u(E, h, Q, d)));
          for (let M = 0; M !== Q; ++M) S[M] = e[M];
          ((p.clippingState = S), (this.numIntersection = v ? this.numPlanes : 0), (this.numPlanes += y));
        }
      }));
    function c() {
      (l.value !== e && ((l.value = e), (l.needsUpdate = i > 0)), (t.numPlanes = i), (t.numIntersection = 0));
    }
    function u(f, h, d, E) {
      let v = f !== null ? f.length : 0,
        m = null;
      if (v !== 0) {
        if (((m = l.value), E !== !0 || m === null)) {
          let p = d + v * 4,
            y = h.matrixWorldInverse;
          (o.getNormalMatrix(y), (m === null || m.length < p) && (m = new Float32Array(p)));
          for (let Q = 0, S = d; Q !== v; ++Q, S += 4)
            (a.copy(f[Q]).applyMatrix4(y, o), a.normal.toArray(m, S), (m[S + 3] = a.constant));
        }
        ((l.value = m), (l.needsUpdate = !0));
      }
      return ((t.numPlanes = v), (t.numIntersection = 0), m);
    }
  }
  var ls = 4,
    Fm = 6,
    Nm = 20,
    wm = 256,
    cr = new nn(),
    zh = new Tt(),
    Jc = null,
    kc = 0,
    Wc = 0,
    Xc = !1,
    Cm = new F(),
    bn = new F(),
    fo = class {
      constructor(t) {
        ((this._renderer = t),
          (this._pingPongRenderTarget = null),
          (this._lodMax = 0),
          (this._cubeSize = 0),
          (this._sizeLods = []),
          (this._lodMeshes = []),
          (this._backgroundBox = null),
          (this._cubemapMaterial = null),
          (this._equirectMaterial = null),
          (this._blurMaterial = null),
          (this._ggxMaterial = null));
      }
      fromScene(t, e = 0, i = 0.1, s = 100, r = {}) {
        let { size: a = 256, position: o = Cm } = r;
        ((Jc = this._renderer.getRenderTarget()),
          (kc = this._renderer.getActiveCubeFace()),
          (Wc = this._renderer.getActiveMipmapLevel()),
          (Xc = this._renderer.xr.enabled),
          (this._renderer.xr.enabled = !1),
          this._setSize(a));
        let l = this._allocateTargets();
        return (
          (l.depthBuffer = !0),
          this._sceneToCubeUV(t, i, s, l, o),
          e > 0 && this._blur(l, 0, 0, e),
          this._applyPMREM(l),
          this._cleanup(l),
          l
        );
      }
      fromEquirectangular(t, e = null) {
        return this._fromTexture(t, e);
      }
      fromCubemap(t, e = null) {
        return this._fromTexture(t, e);
      }
      compileCubemapShader() {
        this._cubemapMaterial === null &&
          ((this._cubemapMaterial = Gh()), this._compileMaterial(this._cubemapMaterial));
      }
      compileEquirectangularShader() {
        this._equirectMaterial === null &&
          ((this._equirectMaterial = qh()), this._compileMaterial(this._equirectMaterial));
      }
      dispose() {
        (this._dispose(),
          this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
          this._equirectMaterial !== null && this._equirectMaterial.dispose(),
          this._backgroundBox !== null &&
            (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose()));
      }
      _setSize(t) {
        ((this._lodMax = Math.floor(Math.log2(t))), (this._cubeSize = Math.pow(2, this._lodMax)));
      }
      _dispose() {
        (this._blurMaterial !== null && this._blurMaterial.dispose(),
          this._ggxMaterial !== null && this._ggxMaterial.dispose(),
          this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose());
        for (let t = 0; t < this._lodMeshes.length; t++) this._lodMeshes[t].geometry.dispose();
      }
      _cleanup(t) {
        (this._renderer.setRenderTarget(Jc, kc, Wc),
          (this._renderer.xr.enabled = Xc),
          (t.scissorTest = !1),
          cs(t, 0, 0, t.width, t.height));
      }
      _fromTexture(t, e) {
        (t.mapping === rn || t.mapping === Mn
          ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width)
          : this._setSize(t.image.width / 4),
          (Jc = this._renderer.getRenderTarget()),
          (kc = this._renderer.getActiveCubeFace()),
          (Wc = this._renderer.getActiveMipmapLevel()),
          (Xc = this._renderer.xr.enabled),
          (this._renderer.xr.enabled = !1));
        let i = e || this._allocateTargets();
        return (this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i);
      }
      _allocateTargets() {
        let t = 3 * Math.max(this._cubeSize, 112),
          e = 4 * this._cubeSize,
          i = {
            magFilter: Qe,
            minFilter: Qe,
            generateMipmaps: !1,
            type: Ue,
            format: qe,
            colorSpace: xn,
            depthBuffer: !1,
          },
          s = Bh(t, e, i);
        if (
          this._pingPongRenderTarget === null ||
          this._pingPongRenderTarget.width !== t ||
          this._pingPongRenderTarget.height !== e
        ) {
          (this._pingPongRenderTarget !== null && this._dispose(), (this._pingPongRenderTarget = Bh(t, e, i)));
          let { _lodMax: r } = this;
          (({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = Hm(r)),
            (this._blurMaterial = Om(r, t, e)),
            (this._ggxMaterial = Um(r, t, e)));
        }
        return s;
      }
      _compileMaterial(t) {
        let e = new Ee(new ve(), t);
        this._renderer.compile(e, cr);
      }
      _sceneToCubeUV(t, e, i, s, r) {
        let l = new Oe(90, 1, e, i),
          c = [1, -1, 1, 1, 1, 1],
          u = [1, 1, 1, -1, -1, -1],
          f = this._renderer,
          h = f.autoClear,
          d = f.toneMapping;
        (f.getClearColor(zh),
          (f.toneMapping = ti),
          (f.autoClear = !1),
          f.state.buffers.depth.getReversed() && (f.setRenderTarget(s), f.clearDepth(), f.setRenderTarget(null)),
          this._backgroundBox === null &&
            (this._backgroundBox = new Ee(
              new bi(),
              new pi({ name: "PMREM.Background", side: Le, depthWrite: !1, depthTest: !1 }),
            )));
        let v = this._backgroundBox,
          m = v.material,
          p = !1,
          y = t.background;
        y ? y.isColor && (m.color.copy(y), (t.background = null), (p = !0)) : (m.color.copy(zh), (p = !0));
        for (let Q = 0; Q < 6; Q++) {
          let S = Q % 3;
          S === 0
            ? (l.up.set(0, c[Q], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + u[Q], r.y, r.z))
            : S === 1
              ? (l.up.set(0, 0, c[Q]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + u[Q], r.z))
              : (l.up.set(0, c[Q], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + u[Q]));
          let M = this._cubeSize;
          (cs(s, S * M, Q > 2 ? M : 0, M, M), f.setRenderTarget(s), p && f.render(v, l), f.render(t, l));
        }
        ((f.toneMapping = d), (f.autoClear = h), (t.background = y));
      }
      _textureToCubeUV(t, e) {
        let i = this._renderer,
          s = t.mapping === rn || t.mapping === Mn;
        s
          ? (this._cubemapMaterial === null && (this._cubemapMaterial = Gh()),
            (this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1))
          : this._equirectMaterial === null && (this._equirectMaterial = qh());
        let r = s ? this._cubemapMaterial : this._equirectMaterial,
          a = this._lodMeshes[0];
        a.material = r;
        let o = r.uniforms;
        o.envMap.value = t;
        let l = this._cubeSize;
        (cs(e, 0, 0, 3 * l, 2 * l), i.setRenderTarget(e), i.render(a, cr));
      }
      _applyPMREM(t) {
        let e = this._renderer,
          i = e.autoClear;
        e.autoClear = !1;
        let s = this._lodMeshes.length;
        for (let r = 1; r < s; r++) this._applyGGXFilter(t, r - 1, r);
        e.autoClear = i;
      }
      _applyGGXFilter(t, e, i) {
        let s = this._renderer,
          r = this._pingPongRenderTarget,
          a = this._ggxMaterial,
          o = this._lodMeshes[i];
        o.material = a;
        let l = a.uniforms,
          c = i / (this._lodMeshes.length - 1),
          u = e / (this._lodMeshes.length - 1),
          f = Math.sqrt(c * c - u * u),
          h = c * 1.25,
          d = f * h,
          { _lodMax: E } = this,
          v = this._sizeLods[i],
          m = 3 * v * (i > E - ls ? i - E + ls : 0),
          p = 4 * (this._cubeSize - v);
        ((l.envMap.value = t.texture),
          (l.roughness.value = d),
          (l.mipInt.value = E - e),
          cs(r, m, p, 3 * v, 2 * v),
          s.setRenderTarget(r),
          s.render(o, cr),
          (l.envMap.value = r.texture),
          (l.roughness.value = 0),
          (l.mipInt.value = E - i),
          cs(t, m, p, 3 * v, 2 * v),
          s.setRenderTarget(t),
          s.render(o, cr));
      }
      _blur(t, e, i, s) {
        let r = this._pingPongRenderTarget,
          a = Math.min(s, Math.PI) / Math.SQRT2;
        (this._blurPass(t, r, e, i, a), this._blurPass(r, t, i, i, a));
      }
      _blurPass(t, e, i, s, r) {
        let a = this._renderer,
          o = this._blurMaterial,
          l = this._lodMeshes[s];
        l.material = o;
        let c = o.uniforms;
        ((c.envMap.value = t.texture), (c.sigma.value = r), (c.mipInt.value = this._lodMax - i));
        let u = this._sizeLods[s],
          f = 3 * u * (s > this._lodMax - ls ? s - this._lodMax + ls : 0),
          h = 4 * (this._cubeSize - u);
        (cs(e, f, h, 3 * u, 2 * u), a.setRenderTarget(e), a.render(l, cr));
      }
    };
  function Hm(n) {
    let t = [],
      e = [],
      i = n,
      s = n - ls + 1 + Fm;
    for (let r = 0; r < s; r++) {
      let a = Math.pow(2, i);
      t.push(a);
      let o = 1 / (a - 2),
        l = -o,
        c = 1 + o,
        u = [l, l, c, l, c, c, l, l, c, c, l, c],
        f = 6,
        h = 6,
        d = 3,
        E = new Float32Array(d * h * f),
        v = new Float32Array(d * h * f);
      for (let p = 0; p < f; p++) {
        let y = ((p % 3) * 2) / 3 - 1,
          Q = p > 2 ? 0 : -1,
          S = [y, Q, 0, y + 2 / 3, Q, 0, y + 2 / 3, Q + 1, 0, y, Q, 0, y + 2 / 3, Q + 1, 0, y, Q + 1, 0];
        E.set(S, d * h * p);
        for (let M = 0; M < h; M++) {
          let P = u[M * 2] * 2 - 1,
            T = u[M * 2 + 1] * 2 - 1;
          (p === 0
            ? bn.set(1, T, P)
            : p === 1
              ? bn.set(-P, 1, -T)
              : p === 2
                ? bn.set(-P, T, 1)
                : p === 3
                  ? bn.set(-1, T, -P)
                  : p === 4
                    ? bn.set(-P, -1, T)
                    : bn.set(P, T, -1),
            bn.toArray(v, (p * h + M) * d));
        }
      }
      let m = new ve();
      (m.setAttribute("position", new xe(E, d)),
        m.setAttribute("outputDirection", new xe(v, d)),
        e.push(new Ee(m, null)),
        i > ls && i--);
    }
    return { lodMeshes: e, sizeLods: t };
  }
  function Bh(n, t, e) {
    let i = new Re(n, t, e);
    return ((i.texture.mapping = js), (i.texture.name = "PMREM.cubeUv"), (i.scissorTest = !0), i);
  }
  function cs(n, t, e, i, s) {
    (n.viewport.set(t, e, i, s), n.scissor.set(t, e, i, s));
  }
  function Um(n, t, e) {
    return new Se({
      name: "PMREMGGXConvolution",
      defines: { GGX_SAMPLES: wm, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${n}.0` },
      uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } },
      vertexShader: mo(),
      fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
      blending: Qi,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function Om(n, t, e) {
    return new Se({
      name: "SphericalGaussianBlur",
      defines: { SAMPLES: Nm, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${n}.0` },
      uniforms: { envMap: { value: null }, sigma: { value: 0 }, mipInt: { value: 0 } },
      vertexShader: mo(),
      fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,
      blending: Qi,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function qh() {
    return new Se({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader: mo(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
      blending: Qi,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function Gh() {
    return new Se({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader: mo(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
      blending: Qi,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function mo() {
    return `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  var po = class extends Re {
    constructor(t = 1, e = {}) {
      (super(t, t, e), (this.isWebGLCubeRenderTarget = !0));
      let i = { width: t, height: t, depth: 1 },
        s = [i, i, i, i, i, i];
      ((this.texture = new Us(s)), this._setTextureOptions(e), (this.texture.isRenderTargetTexture = !0));
    }
    fromEquirectangularTexture(t, e) {
      ((this.texture.type = e.type),
        (this.texture.colorSpace = e.colorSpace),
        (this.texture.generateMipmaps = e.generateMipmaps),
        (this.texture.minFilter = e.minFilter),
        (this.texture.magFilter = e.magFilter));
      let i = {
          uniforms: { tEquirect: { value: null } },
          vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
          fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
        },
        s = new bi(5, 5, 5),
        r = new Se({
          name: "CubemapFromEquirect",
          uniforms: Pn(i.uniforms),
          vertexShader: i.vertexShader,
          fragmentShader: i.fragmentShader,
          side: Le,
          blending: Qi,
        });
      r.uniforms.tEquirect.value = e;
      let a = new Ee(s, r),
        o = e.minFilter;
      return (
        e.minFilter === an && (e.minFilter = Qe),
        new xa(1, 10, this).update(t, a),
        (e.minFilter = o),
        a.geometry.dispose(),
        a.material.dispose(),
        this
      );
    }
    clear(t, e = !0, i = !0, s = !0) {
      let r = t.getRenderTarget();
      for (let a = 0; a < 6; a++) (t.setRenderTarget(this, a), t.clear(e, i, s));
      t.setRenderTarget(r);
    }
  };
  function Lm(n) {
    let t = new WeakMap(),
      e = new WeakMap(),
      i = null;
    function s(h, d = !1) {
      return h == null ? null : d ? a(h) : r(h);
    }
    function r(h) {
      if (h && h.isTexture) {
        let d = h.mapping;
        if (d === rs || d === Ma)
          if (t.has(h)) {
            let E = t.get(h).texture;
            return o(E, h.mapping);
          } else {
            let E = h.image;
            if (E && E.height > 0) {
              let v = new po(E.height);
              return (
                v.fromEquirectangularTexture(n, h),
                t.set(h, v),
                h.addEventListener("dispose", c),
                o(v.texture, h.mapping)
              );
            } else return null;
          }
      }
      return h;
    }
    function a(h) {
      if (h && h.isTexture) {
        let d = h.mapping,
          E = d === rs || d === Ma,
          v = d === rn || d === Mn;
        if (E || v) {
          let m = e.get(h),
            p = m !== void 0 ? m.texture.pmremVersion : 0;
          if (h.isRenderTargetTexture && h.pmremVersion !== p)
            return (
              i === null && (i = new fo(n)),
              (m = E ? i.fromEquirectangular(h, m) : i.fromCubemap(h, m)),
              (m.texture.pmremVersion = h.pmremVersion),
              e.set(h, m),
              m.texture
            );
          if (m !== void 0) return m.texture;
          {
            let y = h.image;
            return (E && y && y.height > 0) || (v && y && l(y))
              ? (i === null && (i = new fo(n)),
                (m = E ? i.fromEquirectangular(h) : i.fromCubemap(h)),
                (m.texture.pmremVersion = h.pmremVersion),
                e.set(h, m),
                h.addEventListener("dispose", u),
                m.texture)
              : null;
          }
        }
      }
      return h;
    }
    function o(h, d) {
      return (d === rs ? (h.mapping = rn) : d === Ma && (h.mapping = Mn), h);
    }
    function l(h) {
      let d = 0,
        E = 6;
      for (let v = 0; v < E; v++) h[v] !== void 0 && d++;
      return d === E;
    }
    function c(h) {
      let d = h.target;
      d.removeEventListener("dispose", c);
      let E = t.get(d);
      E !== void 0 && (t.delete(d), E.dispose());
    }
    function u(h) {
      let d = h.target;
      d.removeEventListener("dispose", u);
      let E = e.get(d);
      E !== void 0 && (e.delete(d), E.dispose());
    }
    function f() {
      ((t = new WeakMap()), (e = new WeakMap()), i !== null && (i.dispose(), (i = null)));
    }
    return { get: s, dispose: f };
  }
  function $m(n) {
    let t = {};
    function e(i) {
      if (t[i] !== void 0) return t[i];
      let s = n.getExtension(i);
      return ((t[i] = s), s);
    }
    return {
      has: function (i) {
        return e(i) !== null;
      },
      init: function () {
        (e("EXT_color_buffer_float"),
          e("WEBGL_clip_cull_distance"),
          e("OES_texture_float_linear"),
          e("EXT_color_buffer_half_float"),
          e("WEBGL_multisampled_render_to_texture"),
          e("WEBGL_render_shared_exponent"));
      },
      get: function (i) {
        let s = e(i);
        return (s === null && En("WebGLRenderer: " + i + " extension not supported."), s);
      },
    };
  }
  function zm(n, t, e, i) {
    let s = {},
      r = new WeakMap();
    function a(f) {
      let h = f.target;
      h.index !== null && t.remove(h.index);
      for (let E in h.attributes) t.remove(h.attributes[E]);
      (h.removeEventListener("dispose", a), delete s[h.id]);
      let d = r.get(h);
      (d && (t.remove(d), r.delete(h)),
        i.releaseStatesOfGeometry(h),
        h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
        e.memory.geometries--);
    }
    function o(f, h) {
      return (s[h.id] === !0 || (h.addEventListener("dispose", a), (s[h.id] = !0), e.memory.geometries++), h);
    }
    function l(f) {
      let h = f.attributes;
      for (let d in h) t.update(h[d], n.ARRAY_BUFFER);
    }
    function c(f) {
      let h = [],
        d = f.index,
        E = f.attributes.position,
        v = 0;
      if (E === void 0) return;
      if (d !== null) {
        let y = d.array;
        v = d.version;
        for (let Q = 0, S = y.length; Q < S; Q += 3) {
          let M = y[Q + 0],
            P = y[Q + 1],
            T = y[Q + 2];
          h.push(M, P, P, T, T, M);
        }
      } else {
        let y = E.array;
        v = E.version;
        for (let Q = 0, S = y.length / 3 - 1; Q < S; Q += 3) {
          let M = Q + 0,
            P = Q + 1,
            T = Q + 2;
          h.push(M, P, P, T, T, M);
        }
      }
      let m = new (E.count >= 65535 ? Ns : Fs)(h, 1);
      m.version = v;
      let p = r.get(f);
      (p && t.remove(p), r.set(f, m));
    }
    function u(f) {
      let h = r.get(f);
      if (h) {
        let d = f.index;
        d !== null && h.version < d.version && c(f);
      } else c(f);
      return r.get(f);
    }
    return { get: o, update: l, getWireframeAttribute: u };
  }
  function Bm(n, t, e) {
    let i;
    function s(f) {
      i = f;
    }
    let r, a;
    function o(f) {
      ((r = f.type), (a = f.bytesPerElement));
    }
    function l(f, h) {
      (n.drawElements(i, h, r, f * a), e.update(h, i, 1));
    }
    function c(f, h, d) {
      d !== 0 && (n.drawElementsInstanced(i, h, r, f * a, d), e.update(h, i, d));
    }
    function u(f, h, d) {
      if (d === 0) return;
      t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, h, 0, r, f, 0, d);
      let v = 0;
      for (let m = 0; m < d; m++) v += h[m];
      e.update(v, i, 1);
    }
    ((this.setMode = s),
      (this.setIndex = o),
      (this.render = l),
      (this.renderInstances = c),
      (this.renderMultiDraw = u));
  }
  function qm(n) {
    let t = { geometries: 0, textures: 0 },
      e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    function i(r, a, o) {
      switch ((e.calls++, a)) {
        case n.TRIANGLES:
          e.triangles += o * (r / 3);
          break;
        case n.LINES:
          e.lines += o * (r / 2);
          break;
        case n.LINE_STRIP:
          e.lines += o * (r - 1);
          break;
        case n.LINE_LOOP:
          e.lines += o * r;
          break;
        case n.POINTS:
          e.points += o * r;
          break;
        default:
          Ot("WebGLInfo: Unknown draw mode:", a);
          break;
      }
    }
    function s() {
      ((e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0));
    }
    return { memory: t, render: e, programs: null, autoReset: !0, reset: s, update: i };
  }
  function Gm(n, t, e) {
    let i = new WeakMap(),
      s = new ne();
    function r(a, o, l) {
      let c = a.morphTargetInfluences,
        u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color,
        f = u !== void 0 ? u.length : 0,
        h = i.get(o);
      if (h === void 0 || h.count !== f) {
        let b = function () {
          (T.dispose(), i.delete(o), o.removeEventListener("dispose", b));
        };
        h !== void 0 && h.texture.dispose();
        let d = o.morphAttributes.position !== void 0,
          E = o.morphAttributes.normal !== void 0,
          v = o.morphAttributes.color !== void 0,
          m = o.morphAttributes.position || [],
          p = o.morphAttributes.normal || [],
          y = o.morphAttributes.color || [],
          Q = 0;
        (d === !0 && (Q = 1), E === !0 && (Q = 2), v === !0 && (Q = 3));
        let S = o.attributes.position.count * Q,
          M = 1;
        S > t.maxTextureSize && ((M = Math.ceil(S / t.maxTextureSize)), (S = t.maxTextureSize));
        let P = new Float32Array(S * M * 4 * f),
          T = new Ts(P, S, M, f);
        ((T.type = Ke), (T.needsUpdate = !0));
        let x = Q * 4;
        for (let N = 0; N < f; N++) {
          let w = m[N],
            C = p[N],
            z = y[N],
            A = S * M * 4 * N;
          for (let L = 0; L < w.count; L++) {
            let G = L * x;
            (d === !0 &&
              (s.fromBufferAttribute(w, L),
              (P[A + G + 0] = s.x),
              (P[A + G + 1] = s.y),
              (P[A + G + 2] = s.z),
              (P[A + G + 3] = 0)),
              E === !0 &&
                (s.fromBufferAttribute(C, L),
                (P[A + G + 4] = s.x),
                (P[A + G + 5] = s.y),
                (P[A + G + 6] = s.z),
                (P[A + G + 7] = 0)),
              v === !0 &&
                (s.fromBufferAttribute(z, L),
                (P[A + G + 8] = s.x),
                (P[A + G + 9] = s.y),
                (P[A + G + 10] = s.z),
                (P[A + G + 11] = z.itemSize === 4 ? s.w : 1)));
          }
        }
        ((h = { count: f, texture: T, size: new Ct(S, M) }), i.set(o, h), o.addEventListener("dispose", b));
      }
      if (a.isInstancedMesh === !0 && a.morphTexture !== null)
        l.getUniforms().setValue(n, "morphTexture", a.morphTexture, e);
      else {
        let d = 0;
        for (let v = 0; v < c.length; v++) d += c[v];
        let E = o.morphTargetsRelative ? 1 : 1 - d;
        (l.getUniforms().setValue(n, "morphTargetBaseInfluence", E),
          l.getUniforms().setValue(n, "morphTargetInfluences", c));
      }
      (l.getUniforms().setValue(n, "morphTargetsTexture", h.texture, e),
        l.getUniforms().setValue(n, "morphTargetsTextureSize", h.size));
    }
    return { update: r };
  }
  function Vm(n, t, e, i, s) {
    let r = new WeakMap();
    function a(c) {
      let u = s.render.frame,
        f = c.geometry,
        h = t.get(c, f);
      if (
        (r.get(h) !== u && (t.update(h), r.set(h, u)),
        c.isInstancedMesh &&
          (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l),
          r.get(c) !== u &&
            (e.update(c.instanceMatrix, n.ARRAY_BUFFER),
            c.instanceColor !== null && e.update(c.instanceColor, n.ARRAY_BUFFER),
            r.set(c, u))),
        c.isSkinnedMesh)
      ) {
        let d = c.skeleton;
        r.get(d) !== u && (d.update(), r.set(d, u));
      }
      return h;
    }
    function o() {
      r = new WeakMap();
    }
    function l(c) {
      let u = c.target;
      (u.removeEventListener("dispose", l),
        i.releaseStatesOfObject(u),
        e.remove(u.instanceMatrix),
        u.instanceColor !== null && e.remove(u.instanceColor));
    }
    return { update: a, dispose: o };
  }
  var Dm = {
    [yc]: "LINEAR_TONE_MAPPING",
    [Mc]: "REINHARD_TONE_MAPPING",
    [Pc]: "CINEON_TONE_MAPPING",
    [_c]: "ACES_FILMIC_TONE_MAPPING",
    [Qc]: "AGX_TONE_MAPPING",
    [Rc]: "NEUTRAL_TONE_MAPPING",
    [bc]: "CUSTOM_TONE_MAPPING",
  };
  function Jm(n, t, e, i, s, r) {
    let a = new Re(t, e, {
        type: n,
        depthBuffer: s,
        stencilBuffer: r,
        samples: i ? 4 : 0,
        storeMultisampledDepthBuffer: !1,
        storeMultisampledStencilBuffer: !1,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
      }),
      o = null,
      l = null,
      c = new ve();
    (c.setAttribute("position", new ie([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
      c.setAttribute("uv", new ie([0, 2, 0, 0, 2, 0], 2)));
    let u = new ra({
        uniforms: { tDiffuse: { value: null } },
        vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
        fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
        depthTest: !1,
        depthWrite: !1,
      }),
      f = new Ee(c, u),
      h = new nn(-1, 1, 1, -1, 0, 1),
      d = null,
      E = null,
      v = !1,
      m,
      p = null,
      y = [],
      Q = !1;
    ((this.setSize = function (S, M) {
      (a.setSize(S, M), o !== null && o.setSize(S, M), l !== null && l.setSize(S, M));
      for (let P = 0; P < y.length; P++) {
        let T = y[P];
        T.setSize && T.setSize(S, M);
      }
    }),
      (this.setEffects = function (S) {
        ((y = S), (Q = y.length > 0 && y[0].isRenderPass === !0));
        let M = a.width,
          P = a.height;
        y.length > 0 &&
          o === null &&
          ((o = new Re(M, P, { type: Ue, depthBuffer: !1, stencilBuffer: !1 })),
          (l = new Re(M, P, { type: Ue, depthBuffer: !1, stencilBuffer: !1 })));
        for (let T = 0; T < y.length; T++) {
          let x = y[T];
          x.setSize && x.setSize(M, P);
        }
      }),
      (this.begin = function (S, M) {
        if (v || (S.toneMapping === ti && y.length === 0)) return !1;
        if (((p = M), M !== null)) {
          let P = M.width,
            T = M.height;
          (a.width !== P || a.height !== T) && this.setSize(P, T);
        }
        return (Q === !1 && S.setRenderTarget(a), (m = S.toneMapping), (S.toneMapping = ti), !0);
      }),
      (this.hasRenderPass = function () {
        return Q;
      }),
      (this.end = function (S, M) {
        ((S.toneMapping = m), (v = !0));
        let P = a,
          T = o;
        for (let x = 0; x < y.length; x++) {
          let b = y[x];
          b.enabled !== !1 && (b.render(S, T, P, M), b.needsSwap !== !1 && ((P = T), (T = T === o ? l : o)));
        }
        if (d !== S.outputColorSpace || E !== S.toneMapping) {
          ((d = S.outputColorSpace),
            (E = S.toneMapping),
            (u.defines = {}),
            Yt.getTransfer(d) === oe && (u.defines.SRGB_TRANSFER = ""));
          let x = Dm[E];
          (x && (u.defines[x] = ""), (u.needsUpdate = !0));
        }
        ((u.uniforms.tDiffuse.value = P.texture), S.setRenderTarget(p), S.render(f, h), (p = null), (v = !1));
      }),
      (this.isCompositing = function () {
        return v;
      }),
      (this.dispose = function () {
        (a.dispose(), o !== null && o.dispose(), l !== null && l.dispose(), c.dispose(), u.dispose());
      }));
  }
  var lu = new We(),
    Yc = new _i(1, 1),
    hu = new Ts(),
    uu = new Zn(),
    du = new Us(),
    Vh = [],
    Dh = [],
    Jh = new Float32Array(16),
    kh = new Float32Array(9),
    Wh = new Float32Array(4);
  function us(n, t, e) {
    let i = n[0];
    if (i <= 0 || i > 0) return n;
    let s = t * e,
      r = Vh[s];
    if ((r === void 0 && ((r = new Float32Array(s)), (Vh[s] = r)), t !== 0)) {
      i.toArray(r, 0);
      for (let a = 1, o = 0; a !== t; ++a) ((o += e), n[a].toArray(r, o));
    }
    return r;
  }
  function Fe(n, t) {
    if (n.length !== t.length) return !1;
    for (let e = 0, i = n.length; e < i; e++) if (n[e] !== t[e]) return !1;
    return !0;
  }
  function Ne(n, t) {
    for (let e = 0, i = t.length; e < i; e++) n[e] = t[e];
  }
  function Eo(n, t) {
    let e = Dh[t];
    e === void 0 && ((e = new Int32Array(t)), (Dh[t] = e));
    for (let i = 0; i !== t; ++i) e[i] = n.allocateTextureUnit();
    return e;
  }
  function km(n, t) {
    let e = this.cache;
    e[0] !== t && (n.uniform1f(this.addr, t), (e[0] = t));
  }
  function Wm(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y) && (n.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
    else {
      if (Fe(e, t)) return;
      (n.uniform2fv(this.addr, t), Ne(e, t));
    }
  }
  function Xm(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
        (n.uniform3f(this.addr, t.x, t.y, t.z), (e[0] = t.x), (e[1] = t.y), (e[2] = t.z));
    else if (t.r !== void 0)
      (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
        (n.uniform3f(this.addr, t.r, t.g, t.b), (e[0] = t.r), (e[1] = t.g), (e[2] = t.b));
    else {
      if (Fe(e, t)) return;
      (n.uniform3fv(this.addr, t), Ne(e, t));
    }
  }
  function Km(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
        (n.uniform4f(this.addr, t.x, t.y, t.z, t.w), (e[0] = t.x), (e[1] = t.y), (e[2] = t.z), (e[3] = t.w));
    else {
      if (Fe(e, t)) return;
      (n.uniform4fv(this.addr, t), Ne(e, t));
    }
  }
  function Zm(n, t) {
    let e = this.cache,
      i = t.elements;
    if (i === void 0) {
      if (Fe(e, t)) return;
      (n.uniformMatrix2fv(this.addr, !1, t), Ne(e, t));
    } else {
      if (Fe(e, i)) return;
      (Wh.set(i), n.uniformMatrix2fv(this.addr, !1, Wh), Ne(e, i));
    }
  }
  function Ym(n, t) {
    let e = this.cache,
      i = t.elements;
    if (i === void 0) {
      if (Fe(e, t)) return;
      (n.uniformMatrix3fv(this.addr, !1, t), Ne(e, t));
    } else {
      if (Fe(e, i)) return;
      (kh.set(i), n.uniformMatrix3fv(this.addr, !1, kh), Ne(e, i));
    }
  }
  function jm(n, t) {
    let e = this.cache,
      i = t.elements;
    if (i === void 0) {
      if (Fe(e, t)) return;
      (n.uniformMatrix4fv(this.addr, !1, t), Ne(e, t));
    } else {
      if (Fe(e, i)) return;
      (Jh.set(i), n.uniformMatrix4fv(this.addr, !1, Jh), Ne(e, i));
    }
  }
  function t0(n, t) {
    let e = this.cache;
    e[0] !== t && (n.uniform1i(this.addr, t), (e[0] = t));
  }
  function e0(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y) && (n.uniform2i(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
    else {
      if (Fe(e, t)) return;
      (n.uniform2iv(this.addr, t), Ne(e, t));
    }
  }
  function i0(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
        (n.uniform3i(this.addr, t.x, t.y, t.z), (e[0] = t.x), (e[1] = t.y), (e[2] = t.z));
    else {
      if (Fe(e, t)) return;
      (n.uniform3iv(this.addr, t), Ne(e, t));
    }
  }
  function n0(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
        (n.uniform4i(this.addr, t.x, t.y, t.z, t.w), (e[0] = t.x), (e[1] = t.y), (e[2] = t.z), (e[3] = t.w));
    else {
      if (Fe(e, t)) return;
      (n.uniform4iv(this.addr, t), Ne(e, t));
    }
  }
  function s0(n, t) {
    let e = this.cache;
    e[0] !== t && (n.uniform1ui(this.addr, t), (e[0] = t));
  }
  function r0(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y) && (n.uniform2ui(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
    else {
      if (Fe(e, t)) return;
      (n.uniform2uiv(this.addr, t), Ne(e, t));
    }
  }
  function a0(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
        (n.uniform3ui(this.addr, t.x, t.y, t.z), (e[0] = t.x), (e[1] = t.y), (e[2] = t.z));
    else {
      if (Fe(e, t)) return;
      (n.uniform3uiv(this.addr, t), Ne(e, t));
    }
  }
  function o0(n, t) {
    let e = this.cache;
    if (t.x !== void 0)
      (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
        (n.uniform4ui(this.addr, t.x, t.y, t.z, t.w), (e[0] = t.x), (e[1] = t.y), (e[2] = t.z), (e[3] = t.w));
    else {
      if (Fe(e, t)) return;
      (n.uniform4uiv(this.addr, t), Ne(e, t));
    }
  }
  function c0(n, t, e) {
    let i = this.cache,
      s = e.allocateTextureUnit();
    i[0] !== s && (n.uniform1i(this.addr, s), (i[0] = s));
    let r;
    (this.type === n.SAMPLER_2D_SHADOW
      ? ((Yc.compareFunction = e.isReversedDepthBuffer() ? lo : co), (r = Yc))
      : (r = lu),
      e.setTexture2D(t || r, s));
  }
  function l0(n, t, e) {
    let i = this.cache,
      s = e.allocateTextureUnit();
    (i[0] !== s && (n.uniform1i(this.addr, s), (i[0] = s)), e.setTexture3D(t || uu, s));
  }
  function h0(n, t, e) {
    let i = this.cache,
      s = e.allocateTextureUnit();
    (i[0] !== s && (n.uniform1i(this.addr, s), (i[0] = s)), e.setTextureCube(t || du, s));
  }
  function u0(n, t, e) {
    let i = this.cache,
      s = e.allocateTextureUnit();
    (i[0] !== s && (n.uniform1i(this.addr, s), (i[0] = s)), e.setTexture2DArray(t || hu, s));
  }
  function d0(n) {
    switch (n) {
      case 5126:
        return km;
      case 35664:
        return Wm;
      case 35665:
        return Xm;
      case 35666:
        return Km;
      case 35674:
        return Zm;
      case 35675:
        return Ym;
      case 35676:
        return jm;
      case 5124:
      case 35670:
        return t0;
      case 35667:
      case 35671:
        return e0;
      case 35668:
      case 35672:
        return i0;
      case 35669:
      case 35673:
        return n0;
      case 5125:
        return s0;
      case 36294:
        return r0;
      case 36295:
        return a0;
      case 36296:
        return o0;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return c0;
      case 35679:
      case 36299:
      case 36307:
        return l0;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return h0;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return u0;
    }
  }
  function f0(n, t) {
    n.uniform1fv(this.addr, t);
  }
  function p0(n, t) {
    let e = us(t, this.size, 2);
    n.uniform2fv(this.addr, e);
  }
  function m0(n, t) {
    let e = us(t, this.size, 3);
    n.uniform3fv(this.addr, e);
  }
  function E0(n, t) {
    let e = us(t, this.size, 4);
    n.uniform4fv(this.addr, e);
  }
  function g0(n, t) {
    let e = us(t, this.size, 4);
    n.uniformMatrix2fv(this.addr, !1, e);
  }
  function x0(n, t) {
    let e = us(t, this.size, 9);
    n.uniformMatrix3fv(this.addr, !1, e);
  }
  function v0(n, t) {
    let e = us(t, this.size, 16);
    n.uniformMatrix4fv(this.addr, !1, e);
  }
  function S0(n, t) {
    n.uniform1iv(this.addr, t);
  }
  function y0(n, t) {
    n.uniform2iv(this.addr, t);
  }
  function M0(n, t) {
    n.uniform3iv(this.addr, t);
  }
  function P0(n, t) {
    n.uniform4iv(this.addr, t);
  }
  function _0(n, t) {
    n.uniform1uiv(this.addr, t);
  }
  function b0(n, t) {
    n.uniform2uiv(this.addr, t);
  }
  function Q0(n, t) {
    n.uniform3uiv(this.addr, t);
  }
  function R0(n, t) {
    n.uniform4uiv(this.addr, t);
  }
  function T0(n, t, e) {
    let i = this.cache,
      s = t.length,
      r = Eo(e, s);
    Fe(i, r) || (n.uniform1iv(this.addr, r), Ne(i, r));
    let a;
    this.type === n.SAMPLER_2D_SHADOW ? (a = Yc) : (a = lu);
    for (let o = 0; o !== s; ++o) e.setTexture2D(t[o] || a, r[o]);
  }
  function I0(n, t, e) {
    let i = this.cache,
      s = t.length,
      r = Eo(e, s);
    Fe(i, r) || (n.uniform1iv(this.addr, r), Ne(i, r));
    for (let a = 0; a !== s; ++a) e.setTexture3D(t[a] || uu, r[a]);
  }
  function A0(n, t, e) {
    let i = this.cache,
      s = t.length,
      r = Eo(e, s);
    Fe(i, r) || (n.uniform1iv(this.addr, r), Ne(i, r));
    for (let a = 0; a !== s; ++a) e.setTextureCube(t[a] || du, r[a]);
  }
  function F0(n, t, e) {
    let i = this.cache,
      s = t.length,
      r = Eo(e, s);
    Fe(i, r) || (n.uniform1iv(this.addr, r), Ne(i, r));
    for (let a = 0; a !== s; ++a) e.setTexture2DArray(t[a] || hu, r[a]);
  }
  function N0(n) {
    switch (n) {
      case 5126:
        return f0;
      case 35664:
        return p0;
      case 35665:
        return m0;
      case 35666:
        return E0;
      case 35674:
        return g0;
      case 35675:
        return x0;
      case 35676:
        return v0;
      case 5124:
      case 35670:
        return S0;
      case 35667:
      case 35671:
        return y0;
      case 35668:
      case 35672:
        return M0;
      case 35669:
      case 35673:
        return P0;
      case 5125:
        return _0;
      case 36294:
        return b0;
      case 36295:
        return Q0;
      case 36296:
        return R0;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return T0;
      case 35679:
      case 36299:
      case 36307:
        return I0;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return A0;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return F0;
    }
  }
  var jc = class {
      constructor(t, e, i) {
        ((this.id = t), (this.addr = i), (this.cache = []), (this.type = e.type), (this.setValue = d0(e.type)));
      }
    },
    tl = class {
      constructor(t, e, i) {
        ((this.id = t),
          (this.addr = i),
          (this.cache = []),
          (this.type = e.type),
          (this.size = e.size),
          (this.setValue = N0(e.type)));
      }
    },
    el = class {
      constructor(t) {
        ((this.id = t), (this.seq = []), (this.map = {}));
      }
      setValue(t, e, i) {
        let s = this.seq;
        for (let r = 0, a = s.length; r !== a; ++r) {
          let o = s[r];
          o.setValue(t, e[o.id], i);
        }
      }
    },
    Kc = /(\w+)(\])?(\[|\.)?/g;
  function Xh(n, t) {
    (n.seq.push(t), (n.map[t.id] = t));
  }
  function w0(n, t, e) {
    let i = n.name,
      s = i.length;
    for (Kc.lastIndex = 0; ; ) {
      let r = Kc.exec(i),
        a = Kc.lastIndex,
        o = r[1],
        l = r[2] === "]",
        c = r[3];
      if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === s))) {
        Xh(e, c === void 0 ? new jc(o, n, t) : new tl(o, n, t));
        break;
      } else {
        let f = e.map[o];
        (f === void 0 && ((f = new el(o)), Xh(e, f)), (e = f));
      }
    }
  }
  var hs = class {
    constructor(t, e) {
      ((this.seq = []), (this.map = {}));
      let i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
      for (let a = 0; a < i; ++a) {
        let o = t.getActiveUniform(e, a),
          l = t.getUniformLocation(e, o.name);
        w0(o, l, this);
      }
      let s = [],
        r = [];
      for (let a of this.seq)
        a.type === t.SAMPLER_2D_SHADOW || a.type === t.SAMPLER_CUBE_SHADOW || a.type === t.SAMPLER_2D_ARRAY_SHADOW
          ? s.push(a)
          : r.push(a);
      s.length > 0 && (this.seq = s.concat(r));
    }
    setValue(t, e, i, s) {
      let r = this.map[e];
      r !== void 0 && r.setValue(t, i, s);
    }
    setOptional(t, e, i) {
      let s = e[i];
      s !== void 0 && this.setValue(t, i, s);
    }
    static upload(t, e, i, s) {
      for (let r = 0, a = e.length; r !== a; ++r) {
        let o = e[r],
          l = i[o.id];
        l.needsUpdate !== !1 && o.setValue(t, l.value, s);
      }
    }
    static seqWithValue(t, e) {
      let i = [];
      for (let s = 0, r = t.length; s !== r; ++s) {
        let a = t[s];
        a.id in e && i.push(a);
      }
      return i;
    }
  };
  function Kh(n, t, e) {
    let i = n.createShader(t);
    return (n.shaderSource(i, e), n.compileShader(i), i);
  }
  var C0 = 37297,
    H0 = 0;
  function U0(n, t) {
    let e = n.split(`
`),
      i = [],
      s = Math.max(t - 6, 0),
      r = Math.min(t + 6, e.length);
    for (let a = s; a < r; a++) {
      let o = a + 1;
      i.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
    }
    return i.join(`
`);
  }
  var Zh = new Gt();
  function O0(n) {
    Yt._getMatrix(Zh, Yt.workingColorSpace, n);
    let t = `mat3( ${Zh.elements.map((e) => e.toFixed(4))} )`;
    switch (Yt.getTransfer(n)) {
      case Qs:
        return [t, "LinearTransferOETF"];
      case oe:
        return [t, "sRGBTransferOETF"];
      default:
        return (Ht("WebGLProgram: Unsupported color space: ", n), [t, "LinearTransferOETF"]);
    }
  }
  function Yh(n, t, e) {
    let i = n.getShaderParameter(t, n.COMPILE_STATUS),
      r = (n.getShaderInfoLog(t) || "").trim();
    if (i && r === "") return "";
    let a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
      let o = parseInt(a[1]);
      return (
        e.toUpperCase() +
        `

` +
        r +
        `

` +
        U0(n.getShaderSource(t), o)
      );
    } else return r;
  }
  function L0(n, t) {
    let e = O0(t);
    return [`vec4 ${n}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
  }
  var $0 = {
    [yc]: "Linear",
    [Mc]: "Reinhard",
    [Pc]: "Cineon",
    [_c]: "ACESFilmic",
    [Qc]: "AgX",
    [Rc]: "Neutral",
    [bc]: "Custom",
  };
  function z0(n, t) {
    let e = $0[t];
    return e === void 0
      ? (Ht("WebGLProgram: Unsupported toneMapping:", t),
        "vec3 " + n + "( vec3 color ) { return LinearToneMapping( color ); }")
      : "vec3 " + n + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
  }
  var uo = new F();
  function B0() {
    Yt.getLuminanceCoefficients(uo);
    let n = uo.x.toFixed(4),
      t = uo.y.toFixed(4),
      e = uo.z.toFixed(4);
    return [
      "float luminance( const in vec3 rgb ) {",
      `	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,
      "	return dot( weights, rgb );",
      "}",
    ].join(`
`);
  }
  function q0(n) {
    return [
      n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
      n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
    ].filter(hr).join(`
`);
  }
  function G0(n) {
    let t = [];
    for (let e in n) {
      let i = n[e];
      i !== !1 && t.push("#define " + e + " " + i);
    }
    return t.join(`
`);
  }
  function V0(n, t) {
    let e = {},
      i = n.getProgramParameter(t, n.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < i; s++) {
      let r = n.getActiveAttrib(t, s),
        a = r.name,
        o = 1;
      (r.type === n.FLOAT_MAT2 && (o = 2),
        r.type === n.FLOAT_MAT3 && (o = 3),
        r.type === n.FLOAT_MAT4 && (o = 4),
        (e[a] = { type: r.type, location: n.getAttribLocation(t, a), locationSize: o }));
    }
    return e;
  }
  function hr(n) {
    return n !== "";
  }
  function jh(n, t) {
    let e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return n
      .replace(/NUM_SUN_LIGHTS/g, t.numSunLights)
      .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, e)
      .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
      .replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
  }
  function tu(n, t) {
    return n
      .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
      .replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
  }
  var D0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function il(n) {
    return n.replace(D0, k0);
  }
  var J0 = new Map();
  function k0(n, t) {
    let e = kt[t];
    if (e === void 0) {
      let i = J0.get(t);
      if (i !== void 0)
        ((e = kt[i]), Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i));
      else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
    }
    return il(e);
  }
  var W0 =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function eu(n) {
    return n.replace(W0, X0);
  }
  function X0(n, t, e, i) {
    let s = "";
    for (let r = parseInt(t); r < parseInt(e); r++)
      s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return s;
  }
  function iu(n) {
    let t = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
    return (
      n.precision === "highp"
        ? (t += `
#define HIGH_PRECISION`)
        : n.precision === "mediump"
          ? (t += `
#define MEDIUM_PRECISION`)
          : n.precision === "lowp" &&
            (t += `
#define LOW_PRECISION`),
      t
    );
  }
  var K0 = { [Zs]: "SHADOWMAP_TYPE_PCF", [ns]: "SHADOWMAP_TYPE_VSM" };
  function Z0(n) {
    return K0[n.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
  }
  var Y0 = { [rn]: "ENVMAP_TYPE_CUBE", [Mn]: "ENVMAP_TYPE_CUBE", [js]: "ENVMAP_TYPE_CUBE_UV" };
  function j0(n) {
    return n.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Y0[n.envMapMode] || "ENVMAP_TYPE_CUBE";
  }
  var tE = { [Mn]: "ENVMAP_MODE_REFRACTION" };
  function eE(n) {
    return n.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : tE[n.envMapMode] || "ENVMAP_MODE_REFLECTION";
  }
  var iE = { [Sc]: "ENVMAP_BLENDING_MULTIPLY", [Sh]: "ENVMAP_BLENDING_MIX", [yh]: "ENVMAP_BLENDING_ADD" };
  function nE(n) {
    return n.envMap === !1 ? "ENVMAP_BLENDING_NONE" : iE[n.combine] || "ENVMAP_BLENDING_NONE";
  }
  function sE(n) {
    let t = n.envMapCubeUVHeight;
    if (t === null) return null;
    let e = Math.log2(t) - 2,
      i = 1 / t;
    return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: i, maxMip: e };
  }
  function rE(n, t, e, i) {
    let s = n.getContext(),
      r = e.defines,
      a = e.vertexShader,
      o = e.fragmentShader,
      l = Z0(e),
      c = j0(e),
      u = eE(e),
      f = nE(e),
      h = sE(e),
      d = q0(e),
      E = G0(r),
      v = s.createProgram(),
      m,
      p,
      y = e.glslVersion
        ? "#version " +
          e.glslVersion +
          `
`
        : "";
    (e.isRawShaderMaterial
      ? ((m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, E].filter(hr).join(`
`)),
        m.length > 0 &&
          (m += `
`),
        (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, E].filter(hr).join(`
`)),
        p.length > 0 &&
          (p += `
`))
      : ((m = [
          iu(e),
          "#define SHADER_TYPE " + e.shaderType,
          "#define SHADER_NAME " + e.shaderName,
          E,
          e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
          e.batching ? "#define USE_BATCHING" : "",
          e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
          e.instancing ? "#define USE_INSTANCING" : "",
          e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
          e.useFog && e.fog ? "#define USE_FOG" : "",
          e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
          e.map ? "#define USE_MAP" : "",
          e.envMap ? "#define USE_ENVMAP" : "",
          e.envMap ? "#define " + u : "",
          e.lightMap ? "#define USE_LIGHTMAP" : "",
          e.aoMap ? "#define USE_AOMAP" : "",
          e.bumpMap ? "#define USE_BUMPMAP" : "",
          e.normalMap ? "#define USE_NORMALMAP" : "",
          e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
          e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          e.anisotropy ? "#define USE_ANISOTROPY" : "",
          e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
          e.specularMap ? "#define USE_SPECULARMAP" : "",
          e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          e.metalnessMap ? "#define USE_METALNESSMAP" : "",
          e.alphaMap ? "#define USE_ALPHAMAP" : "",
          e.alphaHash ? "#define USE_ALPHAHASH" : "",
          e.transmission ? "#define USE_TRANSMISSION" : "",
          e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          e.mapUv ? "#define MAP_UV " + e.mapUv : "",
          e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
          e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
          e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
          e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
          e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
          e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
          e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
          e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
          e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
          e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
          e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
          e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
          e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
          e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
          e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
          e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
          e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
          e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
          e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
          e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
          e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
          e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
          e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
          e.vertexNormals ? "#define HAS_NORMAL" : "",
          e.vertexColors ? "#define USE_COLOR" : "",
          e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          e.vertexUv1s ? "#define USE_UV1" : "",
          e.vertexUv2s ? "#define USE_UV2" : "",
          e.vertexUv3s ? "#define USE_UV3" : "",
          e.pointsUvs ? "#define USE_POINTS_UV" : "",
          e.flatShading ? "#define FLAT_SHADED" : "",
          e.skinning ? "#define USE_SKINNING" : "",
          e.morphTargets ? "#define USE_MORPHTARGETS" : "",
          e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
          e.morphColors ? "#define USE_MORPHCOLORS" : "",
          e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
          e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
          e.doubleSided ? "#define DOUBLE_SIDED" : "",
          e.flipSided ? "#define FLIP_SIDED" : "",
          e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          e.shadowMapEnabled ? "#define " + l : "",
          e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
          e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
          e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "	attribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "	attribute vec3 instanceColor;",
          "#endif",
          "#ifdef USE_INSTANCING_MORPH",
          "	uniform sampler2D morphTexture;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_UV1",
          "	attribute vec2 uv1;",
          "#endif",
          "#ifdef USE_UV2",
          "	attribute vec2 uv2;",
          "#endif",
          "#ifdef USE_UV3",
          "	attribute vec2 uv3;",
          "#endif",
          "#ifdef USE_TANGENT",
          "	attribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "	attribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "	attribute vec3 color;",
          "#endif",
          "#ifdef USE_SKINNING",
          "	attribute vec4 skinIndex;",
          "	attribute vec4 skinWeight;",
          "#endif",
          `
`,
        ].filter(hr).join(`
`)),
        (p = [
          iu(e),
          "#define SHADER_TYPE " + e.shaderType,
          "#define SHADER_NAME " + e.shaderName,
          E,
          e.useFog && e.fog ? "#define USE_FOG" : "",
          e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
          e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
          e.map ? "#define USE_MAP" : "",
          e.matcap ? "#define USE_MATCAP" : "",
          e.envMap ? "#define USE_ENVMAP" : "",
          e.envMap ? "#define " + c : "",
          e.envMap ? "#define " + u : "",
          e.envMap ? "#define " + f : "",
          h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
          h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
          h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
          e.lightMap ? "#define USE_LIGHTMAP" : "",
          e.aoMap ? "#define USE_AOMAP" : "",
          e.bumpMap ? "#define USE_BUMPMAP" : "",
          e.normalMap ? "#define USE_NORMALMAP" : "",
          e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          e.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
          e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          e.anisotropy ? "#define USE_ANISOTROPY" : "",
          e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          e.clearcoat ? "#define USE_CLEARCOAT" : "",
          e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          e.dispersion ? "#define USE_DISPERSION" : "",
          e.retroreflection ? "#define USE_RETROREFLECTION" : "",
          e.iridescence ? "#define USE_IRIDESCENCE" : "",
          e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
          e.specularMap ? "#define USE_SPECULARMAP" : "",
          e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          e.metalnessMap ? "#define USE_METALNESSMAP" : "",
          e.alphaMap ? "#define USE_ALPHAMAP" : "",
          e.alphaTest ? "#define USE_ALPHATEST" : "",
          e.alphaHash ? "#define USE_ALPHAHASH" : "",
          e.sheen ? "#define USE_SHEEN" : "",
          e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          e.transmission ? "#define USE_TRANSMISSION" : "",
          e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
          e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
          e.vertexAlphas || e.batchingColor ? "#define USE_COLOR_ALPHA" : "",
          e.vertexUv1s ? "#define USE_UV1" : "",
          e.vertexUv2s ? "#define USE_UV2" : "",
          e.vertexUv3s ? "#define USE_UV3" : "",
          e.pointsUvs ? "#define USE_POINTS_UV" : "",
          e.gradientMap ? "#define USE_GRADIENTMAP" : "",
          e.flatShading ? "#define FLAT_SHADED" : "",
          e.doubleSided ? "#define DOUBLE_SIDED" : "",
          e.flipSided ? "#define FLIP_SIDED" : "",
          e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          e.shadowMapEnabled ? "#define " + l : "",
          e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
          e.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
          e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
          e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
          e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          e.toneMapping !== ti ? "#define TONE_MAPPING" : "",
          e.toneMapping !== ti ? kt.tonemapping_pars_fragment : "",
          e.toneMapping !== ti ? z0("toneMapping", e.toneMapping) : "",
          e.dithering ? "#define DITHERING" : "",
          e.opaque ? "#define OPAQUE" : "",
          kt.colorspace_pars_fragment,
          L0("linearToOutputTexel", e.outputColorSpace),
          B0(),
          e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
          `
`,
        ].filter(hr).join(`
`))),
      (a = il(a)),
      (a = jh(a, e)),
      (a = tu(a, e)),
      (o = il(o)),
      (o = jh(o, e)),
      (o = tu(o, e)),
      (a = eu(a)),
      (o = eu(o)),
      e.isRawShaderMaterial !== !0 &&
        ((y = `#version 300 es
`),
        (m =
          [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) +
          `
` +
          m),
        (p =
          [
            "#define varying in",
            e.glslVersion === Hc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            e.glslVersion === Hc ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join(`
`) +
          `
` +
          p)));
    let Q = y + m + a,
      S = y + p + o,
      M = Kh(s, s.VERTEX_SHADER, Q),
      P = Kh(s, s.FRAGMENT_SHADER, S);
    (s.attachShader(v, M),
      s.attachShader(v, P),
      e.index0AttributeName !== void 0
        ? s.bindAttribLocation(v, 0, e.index0AttributeName)
        : e.hasPositionAttribute === !0 && s.bindAttribLocation(v, 0, "position"),
      s.linkProgram(v));
    function T(w) {
      if (n.debug.checkShaderErrors) {
        let C = s.getProgramInfoLog(v) || "",
          z = s.getShaderInfoLog(M) || "",
          A = s.getShaderInfoLog(P) || "",
          L = C.trim(),
          G = z.trim(),
          D = A.trim(),
          et = !0,
          J = !0;
        if (s.getProgramParameter(v, s.LINK_STATUS) === !1)
          if (((et = !1), typeof n.debug.onShaderError == "function")) n.debug.onShaderError(s, v, M, P);
          else {
            let Y = Yh(s, M, "vertex"),
              it = Yh(s, P, "fragment");
            Ot(
              "WebGLProgram: Shader Error " +
                s.getError() +
                " - VALIDATE_STATUS " +
                s.getProgramParameter(v, s.VALIDATE_STATUS) +
                `

Material Name: ` +
                w.name +
                `
Material Type: ` +
                w.type +
                `

Program Info Log: ` +
                L +
                `
` +
                Y +
                `
` +
                it,
            );
          }
        else L !== "" ? Ht("WebGLProgram: Program Info Log:", L) : (G === "" || D === "") && (J = !1);
        J &&
          (w.diagnostics = {
            runnable: et,
            programLog: L,
            vertexShader: { log: G, prefix: m },
            fragmentShader: { log: D, prefix: p },
          });
      }
      (s.deleteShader(M), s.deleteShader(P), (x = new hs(s, v)), (b = V0(s, v)));
    }
    let x;
    this.getUniforms = function () {
      return (x === void 0 && T(this), x);
    };
    let b;
    this.getAttributes = function () {
      return (b === void 0 && T(this), b);
    };
    let N = e.rendererExtensionParallelShaderCompile === !1;
    return (
      (this.isReady = function () {
        return (N === !1 && (N = s.getProgramParameter(v, C0)), N);
      }),
      (this.destroy = function () {
        (i.releaseStatesOfProgram(this), s.deleteProgram(v), (this.program = void 0));
      }),
      (this.type = e.shaderType),
      (this.name = e.shaderName),
      (this.id = H0++),
      (this.cacheKey = t),
      (this.usedTimes = 1),
      (this.program = v),
      (this.vertexShader = M),
      (this.fragmentShader = P),
      this
    );
  }
  var aE = 0,
    nl = class {
      constructor() {
        ((this.shaderCache = new Map()), (this.materialCache = new Map()));
      }
      update(t, e, i) {
        let s = this._getShaderCacheForMaterial(t);
        return (s.has(e) === !1 && (s.add(e), e.usedTimes++), s.has(i) === !1 && (s.add(i), i.usedTimes++), this);
      }
      remove(t) {
        let e = this.materialCache.get(t);
        for (let i of e) (i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code));
        return (this.materialCache.delete(t), this);
      }
      getVertexShaderStage(t) {
        return this._getShaderStage(t.vertexShader);
      }
      getFragmentShaderStage(t) {
        return this._getShaderStage(t.fragmentShader);
      }
      dispose() {
        (this.shaderCache.clear(), this.materialCache.clear());
      }
      _getShaderCacheForMaterial(t) {
        let e = this.materialCache,
          i = e.get(t);
        return (i === void 0 && ((i = new Set()), e.set(t, i)), i);
      }
      _getShaderStage(t) {
        let e = this.shaderCache,
          i = e.get(t);
        return (i === void 0 && ((i = new sl(t)), e.set(t, i)), i);
      }
    },
    sl = class {
      constructor(t) {
        ((this.id = aE++), (this.code = t), (this.usedTimes = 0));
      }
    };
  function oE(n) {
    return n === cn || n === rr || n === ar;
  }
  function cE(n, t, e, i, s, r) {
    let a = new Is(),
      o = new nl(),
      l = new Set(),
      c = [],
      u = new Map(),
      f = i.logarithmicDepthBuffer,
      h = i.precision,
      d = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distance",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite",
      };
    function E(x) {
      return (l.add(x), x === 0 ? "uv" : `uv${x}`);
    }
    function v(x, b, N, w, C, z) {
      let A = w.fog,
        L = C.geometry,
        G = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? w.environment : null,
        D = x.isMeshStandardMaterial || (x.isMeshLambertMaterial && !x.envMap) || (x.isMeshPhongMaterial && !x.envMap),
        et = t.get(x.envMap || G, D),
        J = et && et.mapping === js ? et.image.height : null,
        Y = d[x.type];
      x.precision !== null &&
        ((h = i.getMaxPrecision(x.precision)),
        h !== x.precision && Ht("WebGLProgram.getParameters:", x.precision, "not supported, using", h, "instead."));
      let it = L.morphAttributes.position || L.morphAttributes.normal || L.morphAttributes.color,
        ft = it !== void 0 ? it.length : 0,
        ct = 0;
      (L.morphAttributes.position !== void 0 && (ct = 1),
        L.morphAttributes.normal !== void 0 && (ct = 2),
        L.morphAttributes.color !== void 0 && (ct = 3));
      let ee, Dt, yt, W;
      if (Y) {
        let de = Ti[Y];
        ((ee = de.vertexShader), (Dt = de.fragmentShader));
      } else {
        ((ee = x.vertexShader), (Dt = x.fragmentShader));
        let de = o.getVertexShaderStage(x),
          re = o.getFragmentShaderStage(x);
        (o.update(x, de, re), (yt = de.id), (W = re.id));
      }
      let Z = n.getRenderTarget(),
        xt = n.state.buffers.depth.getReversed(),
        Ut = C.isInstancedMesh === !0,
        pt = C.isBatchedMesh === !0,
        Bt = !!x.map,
        le = !!x.matcap,
        Lt = !!et,
        qt = !!x.aoMap,
        Xt = !!x.lightMap,
        $t = !!x.bumpMap && x.wireframe === !1,
        Zt = !!x.normalMap,
        ge = !!x.displacementMap,
        Ie = !!x.emissiveMap,
        V = !!x.metalnessMap,
        nt = !!x.roughnessMap,
        I = x.anisotropy > 0,
        ot = x.clearcoat > 0,
        St = x.dispersion > 0,
        R = x.retroreflectivity > 0,
        g = x.iridescence > 0,
        H = x.sheen > 0,
        $ = x.transmission > 0,
        X = I && !!x.anisotropyMap,
        at = ot && !!x.clearcoatMap,
        rt = ot && !!x.clearcoatNormalMap,
        K = ot && !!x.clearcoatRoughnessMap,
        j = g && !!x.iridescenceMap,
        lt = g && !!x.iridescenceThicknessMap,
        bt = H && !!x.sheenColorMap,
        dt = H && !!x.sheenRoughnessMap,
        ht = !!x.specularMap,
        It = !!x.specularColorMap,
        wt = !!x.specularIntensityMap,
        zt = $ && !!x.transmissionMap,
        U = $ && !!x.thicknessMap,
        ut = !!x.gradientMap,
        tt = !!x.alphaMap,
        mt = x.alphaTest > 0,
        Mt = !!x.alphaHash,
        st = !!x.extensions,
        Nt = ti;
      x.toneMapped && (Z === null || Z.isXRRenderTarget === !0) && (Nt = n.toneMapping);
      let At = {
        shaderID: Y,
        shaderType: x.type,
        shaderName: x.name,
        vertexShader: ee,
        fragmentShader: Dt,
        defines: x.defines,
        customVertexShaderID: yt,
        customFragmentShaderID: W,
        isRawShaderMaterial: x.isRawShaderMaterial === !0,
        glslVersion: x.glslVersion,
        precision: h,
        batching: pt,
        batchingColor: pt && C._colorsTexture !== null,
        instancing: Ut,
        instancingColor: Ut && C.instanceColor !== null,
        instancingMorph: Ut && C.morphTexture !== null,
        outputColorSpace:
          Z === null ? n.outputColorSpace : Z.isXRRenderTarget === !0 ? Z.texture.colorSpace : Yt.workingColorSpace,
        alphaToCoverage: !!x.alphaToCoverage,
        map: Bt,
        matcap: le,
        envMap: Lt,
        envMapMode: Lt && et.mapping,
        envMapCubeUVHeight: J,
        aoMap: qt,
        lightMap: Xt,
        bumpMap: $t,
        normalMap: Zt,
        displacementMap: ge,
        emissiveMap: Ie,
        normalMapObjectSpace: Zt && x.normalMapType === _h,
        normalMapTangentSpace: Zt && x.normalMapType === oo,
        packedNormalMap: Zt && x.normalMapType === oo && oE(x.normalMap.format),
        metalnessMap: V,
        roughnessMap: nt,
        anisotropy: I,
        anisotropyMap: X,
        clearcoat: ot,
        clearcoatMap: at,
        clearcoatNormalMap: rt,
        clearcoatRoughnessMap: K,
        dispersion: St,
        retroreflection: R,
        iridescence: g,
        iridescenceMap: j,
        iridescenceThicknessMap: lt,
        sheen: H,
        sheenColorMap: bt,
        sheenRoughnessMap: dt,
        specularMap: ht,
        specularColorMap: It,
        specularIntensityMap: wt,
        transmission: $,
        transmissionMap: zt,
        thicknessMap: U,
        gradientMap: ut,
        opaque: x.transparent === !1 && x.blending === ss && x.alphaToCoverage === !1,
        alphaMap: tt,
        alphaTest: mt,
        alphaHash: Mt,
        combine: x.combine,
        mapUv: Bt && E(x.map.channel),
        aoMapUv: qt && E(x.aoMap.channel),
        lightMapUv: Xt && E(x.lightMap.channel),
        bumpMapUv: $t && E(x.bumpMap.channel),
        normalMapUv: Zt && E(x.normalMap.channel),
        displacementMapUv: ge && E(x.displacementMap.channel),
        emissiveMapUv: Ie && E(x.emissiveMap.channel),
        metalnessMapUv: V && E(x.metalnessMap.channel),
        roughnessMapUv: nt && E(x.roughnessMap.channel),
        anisotropyMapUv: X && E(x.anisotropyMap.channel),
        clearcoatMapUv: at && E(x.clearcoatMap.channel),
        clearcoatNormalMapUv: rt && E(x.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: K && E(x.clearcoatRoughnessMap.channel),
        iridescenceMapUv: j && E(x.iridescenceMap.channel),
        iridescenceThicknessMapUv: lt && E(x.iridescenceThicknessMap.channel),
        sheenColorMapUv: bt && E(x.sheenColorMap.channel),
        sheenRoughnessMapUv: dt && E(x.sheenRoughnessMap.channel),
        specularMapUv: ht && E(x.specularMap.channel),
        specularColorMapUv: It && E(x.specularColorMap.channel),
        specularIntensityMapUv: wt && E(x.specularIntensityMap.channel),
        transmissionMapUv: zt && E(x.transmissionMap.channel),
        thicknessMapUv: U && E(x.thicknessMap.channel),
        alphaMapUv: tt && E(x.alphaMap.channel),
        vertexTangents: !!L.attributes.tangent && (Zt || I),
        vertexNormals: !!L.attributes.normal,
        vertexColors: x.vertexColors,
        vertexAlphas: x.vertexColors === !0 && !!L.attributes.color && L.attributes.color.itemSize === 4,
        pointsUvs: C.isPoints === !0 && !!L.attributes.uv && (Bt || tt),
        fog: !!A,
        useFog: x.fog === !0,
        fogExp2: !!A && A.isFogExp2,
        flatShading:
          x.wireframe === !1 &&
          (x.flatShading === !0 ||
            (L.attributes.normal === void 0 &&
              Zt === !1 &&
              (x.isMeshLambertMaterial ||
                x.isMeshPhongMaterial ||
                x.isMeshStandardMaterial ||
                x.isMeshPhysicalMaterial))),
        sizeAttenuation: x.sizeAttenuation === !0,
        logarithmicDepthBuffer: f,
        reversedDepthBuffer: xt,
        skinning: C.isSkinnedMesh === !0,
        hasPositionAttribute: L.attributes.position !== void 0,
        morphTargets: L.morphAttributes.position !== void 0,
        morphNormals: L.morphAttributes.normal !== void 0,
        morphColors: L.morphAttributes.color !== void 0,
        morphTargetsCount: ft,
        morphTextureStride: ct,
        numSunLights: b.sun.length,
        numDirLights: b.directional.length,
        numPointLights: b.point.length,
        numSpotLights: b.spot.length,
        numSpotLightMaps: b.spotLightMap.length,
        numRectAreaLights: b.rectArea.length,
        numHemiLights: b.hemi.length,
        numSunLightShadows: b.sunShadowMap.length,
        numDirLightShadows: b.directionalShadowMap.length,
        numPointLightShadows: b.pointShadowMap.length,
        numSpotLightShadows: b.spotShadowMap.length,
        numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
        numLightProbes: b.numLightProbes,
        numLightProbeGrids: z.length,
        numClippingPlanes: r.numPlanes,
        numClipIntersection: r.numIntersection,
        dithering: x.dithering,
        shadowMapEnabled: n.shadowMap.enabled && N.length > 0,
        shadowMapType: n.shadowMap.type,
        toneMapping: Nt,
        decodeVideoTexture: Bt && x.map.isVideoTexture === !0 && Yt.getTransfer(x.map.colorSpace) === oe,
        decodeVideoTextureEmissive:
          Ie && x.emissiveMap.isVideoTexture === !0 && Yt.getTransfer(x.emissiveMap.colorSpace) === oe,
        premultipliedAlpha: x.premultipliedAlpha,
        doubleSided: x.side === ai,
        flipSided: x.side === Le,
        useDepthPacking: x.depthPacking >= 0,
        depthPacking: x.depthPacking || 0,
        index0AttributeName: x.index0AttributeName,
        extensionClipCullDistance: st && x.extensions.clipCullDistance === !0 && e.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw: ((st && x.extensions.multiDraw === !0) || pt) && e.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: e.has("KHR_parallel_shader_compile"),
        customProgramCacheKey: x.customProgramCacheKey(),
      };
      return ((At.vertexUv1s = l.has(1)), (At.vertexUv2s = l.has(2)), (At.vertexUv3s = l.has(3)), l.clear(), At);
    }
    function m(x) {
      let b = [];
      if (
        (x.shaderID ? b.push(x.shaderID) : (b.push(x.customVertexShaderID), b.push(x.customFragmentShaderID)),
        x.defines !== void 0)
      )
        for (let N in x.defines) (b.push(N), b.push(x.defines[N]));
      return (
        x.isRawShaderMaterial === !1 && (p(b, x), y(b, x), b.push(n.outputColorSpace)),
        b.push(x.customProgramCacheKey),
        b.join()
      );
    }
    function p(x, b) {
      (x.push(b.precision),
        x.push(b.outputColorSpace),
        x.push(b.envMapMode),
        x.push(b.envMapCubeUVHeight),
        x.push(b.mapUv),
        x.push(b.alphaMapUv),
        x.push(b.lightMapUv),
        x.push(b.aoMapUv),
        x.push(b.bumpMapUv),
        x.push(b.normalMapUv),
        x.push(b.displacementMapUv),
        x.push(b.emissiveMapUv),
        x.push(b.metalnessMapUv),
        x.push(b.roughnessMapUv),
        x.push(b.anisotropyMapUv),
        x.push(b.clearcoatMapUv),
        x.push(b.clearcoatNormalMapUv),
        x.push(b.clearcoatRoughnessMapUv),
        x.push(b.iridescenceMapUv),
        x.push(b.iridescenceThicknessMapUv),
        x.push(b.sheenColorMapUv),
        x.push(b.sheenRoughnessMapUv),
        x.push(b.specularMapUv),
        x.push(b.specularColorMapUv),
        x.push(b.specularIntensityMapUv),
        x.push(b.transmissionMapUv),
        x.push(b.thicknessMapUv),
        x.push(b.combine),
        x.push(b.fogExp2),
        x.push(b.sizeAttenuation),
        x.push(b.morphTargetsCount),
        x.push(b.morphAttributeCount),
        x.push(b.numSunLights),
        x.push(b.numDirLights),
        x.push(b.numPointLights),
        x.push(b.numSpotLights),
        x.push(b.numSpotLightMaps),
        x.push(b.numHemiLights),
        x.push(b.numRectAreaLights),
        x.push(b.numSunLightShadows),
        x.push(b.numDirLightShadows),
        x.push(b.numPointLightShadows),
        x.push(b.numSpotLightShadows),
        x.push(b.numSpotLightShadowsWithMaps),
        x.push(b.numLightProbes),
        x.push(b.shadowMapType),
        x.push(b.toneMapping),
        x.push(b.numClippingPlanes),
        x.push(b.numClipIntersection),
        x.push(b.depthPacking));
    }
    function y(x, b) {
      (a.disableAll(),
        b.instancing && a.enable(0),
        b.instancingColor && a.enable(1),
        b.instancingMorph && a.enable(2),
        b.matcap && a.enable(3),
        b.envMap && a.enable(4),
        b.normalMapObjectSpace && a.enable(5),
        b.normalMapTangentSpace && a.enable(6),
        b.clearcoat && a.enable(7),
        b.iridescence && a.enable(8),
        b.alphaTest && a.enable(9),
        b.vertexColors && a.enable(10),
        b.vertexAlphas && a.enable(11),
        b.vertexUv1s && a.enable(12),
        b.vertexUv2s && a.enable(13),
        b.vertexUv3s && a.enable(14),
        b.vertexTangents && a.enable(15),
        b.anisotropy && a.enable(16),
        b.alphaHash && a.enable(17),
        b.batching && a.enable(18),
        b.dispersion && a.enable(19),
        b.retroreflection && a.enable(24),
        b.batchingColor && a.enable(20),
        b.gradientMap && a.enable(21),
        b.packedNormalMap && a.enable(22),
        b.vertexNormals && a.enable(23),
        x.push(a.mask),
        a.disableAll(),
        b.fog && a.enable(0),
        b.useFog && a.enable(1),
        b.flatShading && a.enable(2),
        b.logarithmicDepthBuffer && a.enable(3),
        b.reversedDepthBuffer && a.enable(4),
        b.skinning && a.enable(5),
        b.morphTargets && a.enable(6),
        b.morphNormals && a.enable(7),
        b.morphColors && a.enable(8),
        b.premultipliedAlpha && a.enable(9),
        b.shadowMapEnabled && a.enable(10),
        b.doubleSided && a.enable(11),
        b.flipSided && a.enable(12),
        b.useDepthPacking && a.enable(13),
        b.dithering && a.enable(14),
        b.transmission && a.enable(15),
        b.sheen && a.enable(16),
        b.opaque && a.enable(17),
        b.pointsUvs && a.enable(18),
        b.decodeVideoTexture && a.enable(19),
        b.decodeVideoTextureEmissive && a.enable(20),
        b.alphaToCoverage && a.enable(21),
        b.numLightProbeGrids > 0 && a.enable(22),
        b.hasPositionAttribute && a.enable(23),
        x.push(a.mask));
    }
    function Q(x) {
      let b = d[x.type],
        N;
      if (b) {
        let w = Ti[b];
        N = _n.clone(w.uniforms);
      } else N = x.uniforms;
      return N;
    }
    function S(x, b) {
      let N = u.get(b);
      return (N !== void 0 ? ++N.usedTimes : ((N = new rE(n, b, x, s)), c.push(N), u.set(b, N)), N);
    }
    function M(x) {
      if (--x.usedTimes === 0) {
        let b = c.indexOf(x);
        ((c[b] = c[c.length - 1]), c.pop(), u.delete(x.cacheKey), x.destroy());
      }
    }
    function P(x) {
      o.remove(x);
    }
    function T() {
      o.dispose();
    }
    return {
      getParameters: v,
      getProgramCacheKey: m,
      getUniforms: Q,
      acquireProgram: S,
      releaseProgram: M,
      releaseShaderCache: P,
      programs: c,
      dispose: T,
    };
  }
  function lE() {
    let n = new WeakMap();
    function t(a) {
      return n.has(a);
    }
    function e(a) {
      let o = n.get(a);
      return (o === void 0 && ((o = {}), n.set(a, o)), o);
    }
    function i(a) {
      n.delete(a);
    }
    function s(a, o, l) {
      n.get(a)[o] = l;
    }
    function r() {
      n = new WeakMap();
    }
    return { has: t, get: e, remove: i, update: s, dispose: r };
  }
  function hE(n, t) {
    return n.groupOrder !== t.groupOrder
      ? n.groupOrder - t.groupOrder
      : n.renderOrder !== t.renderOrder
        ? n.renderOrder - t.renderOrder
        : n.material.id !== t.material.id
          ? n.material.id - t.material.id
          : n.materialVariant !== t.materialVariant
            ? n.materialVariant - t.materialVariant
            : n.z !== t.z
              ? n.z - t.z
              : n.id - t.id;
  }
  function nu(n, t) {
    return n.groupOrder !== t.groupOrder
      ? n.groupOrder - t.groupOrder
      : n.renderOrder !== t.renderOrder
        ? n.renderOrder - t.renderOrder
        : n.z !== t.z
          ? t.z - n.z
          : n.id - t.id;
  }
  function su() {
    let n = [],
      t = 0,
      e = [],
      i = [],
      s = [];
    function r() {
      ((t = 0), (e.length = 0), (i.length = 0), (s.length = 0));
    }
    function a(h) {
      let d = 0;
      return (h.isInstancedMesh && (d += 2), h.isSkinnedMesh && (d += 1), d);
    }
    function o(h, d, E, v, m, p) {
      let y = n[t];
      return (
        y === void 0
          ? ((y = {
              id: h.id,
              object: h,
              geometry: d,
              material: E,
              materialVariant: a(h),
              groupOrder: v,
              renderOrder: h.renderOrder,
              z: m,
              group: p,
            }),
            (n[t] = y))
          : ((y.id = h.id),
            (y.object = h),
            (y.geometry = d),
            (y.material = E),
            (y.materialVariant = a(h)),
            (y.groupOrder = v),
            (y.renderOrder = h.renderOrder),
            (y.z = m),
            (y.group = p)),
        t++,
        y
      );
    }
    function l(h, d, E, v, m, p, y) {
      y.reversedDepth === !0 && (m = -m);
      let Q = o(h, d, E, v, m, p);
      E.transmission > 0 ? i.push(Q) : E.transparent === !0 ? s.push(Q) : e.push(Q);
    }
    function c(h, d, E, v, m, p) {
      let y = o(h, d, E, v, m, p);
      E.transmission > 0 ? i.unshift(y) : E.transparent === !0 ? s.unshift(y) : e.unshift(y);
    }
    function u(h, d) {
      (e.length > 1 && e.sort(h || hE), i.length > 1 && i.sort(d || nu), s.length > 1 && s.sort(d || nu));
    }
    function f() {
      for (let h = t, d = n.length; h < d; h++) {
        let E = n[h];
        if (E.id === null) break;
        ((E.id = null), (E.object = null), (E.geometry = null), (E.material = null), (E.group = null));
      }
    }
    return { opaque: e, transmissive: i, transparent: s, init: r, push: l, unshift: c, finish: f, sort: u };
  }
  function uE() {
    let n = new WeakMap();
    function t(i, s) {
      let r = n.get(i),
        a;
      return (
        r === void 0 ? ((a = new su()), n.set(i, [a])) : s >= r.length ? ((a = new su()), r.push(a)) : (a = r[s]),
        a
      );
    }
    function e() {
      n = new WeakMap();
    }
    return { get: t, dispose: e };
  }
  function dE() {
    let n = {};
    return {
      get: function (t) {
        if (n[t.id] !== void 0) return n[t.id];
        let e;
        switch (t.type) {
          case "SunLight":
          case "DirectionalLight":
            e = { direction: new F(), color: new Tt() };
            break;
          case "SpotLight":
            e = {
              position: new F(),
              direction: new F(),
              color: new Tt(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            e = { position: new F(), color: new Tt(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            e = { direction: new F(), skyColor: new Tt(), groundColor: new Tt() };
            break;
          case "RectAreaLight":
            e = { color: new Tt(), position: new F(), halfWidth: new F(), halfHeight: new F() };
            break;
        }
        return ((n[t.id] = e), e);
      },
    };
  }
  function fE() {
    let n = {};
    return {
      get: function (t) {
        if (n[t.id] !== void 0) return n[t.id];
        let e;
        switch (t.type) {
          case "SunLight":
          case "DirectionalLight":
            e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ct() };
            break;
          case "SpotLight":
            e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ct() };
            break;
          case "PointLight":
            e = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Ct(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3,
            };
            break;
        }
        return ((n[t.id] = e), e);
      },
    };
  }
  var pE = 0;
  function mE(n, t) {
    return (t.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (n.map ? 1 : 0);
  }
  function EE(n) {
    let t = new dE(),
      e = fE(),
      i = {
        version: 0,
        hash: {
          sunLength: -1,
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numSunShadows: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
          numLightProbes: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        sun: [],
        sunShadow: [],
        sunShadowMap: [],
        sunShadowMatrix: [],
        sunShadowCascade: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0,
      };
    for (let c = 0; c < 9; c++) i.probe.push(new F());
    let s = new F(),
      r = new Vt(),
      a = new Vt();
    function o(c) {
      let u = 0,
        f = 0,
        h = 0;
      for (let C = 0; C < 9; C++) i.probe[C].set(0, 0, 0);
      let d = 0,
        E = 0,
        v = 0,
        m = 0,
        p = 0,
        y = 0,
        Q = 0,
        S = 0,
        M = 0,
        P = 0,
        T = 0,
        x = 0,
        b = 0,
        N = 0;
      c.sort(mE);
      for (let C = 0, z = c.length; C < z; C++) {
        let A = c[C],
          L = A.color,
          G = A.intensity,
          D = A.distance,
          et = null;
        if (
          (A.shadow &&
            A.shadow.map &&
            (A.shadow.map.texture.format === cn
              ? (et = A.shadow.map.texture)
              : (et = A.shadow.map.depthTexture || A.shadow.map.texture)),
          A.isAmbientLight)
        )
          ((u += L.r * G), (f += L.g * G), (h += L.b * G));
        else if (A.isLightProbe) {
          for (let J = 0; J < 9; J++) i.probe[J].addScaledVector(A.sh.coefficients[J], G);
          N++;
        } else if (A.isSunLight) {
          let J = t.get(A);
          if ((J.color.copy(A.color).multiplyScalar(A.intensity), A.castShadow)) {
            let Y = A.shadow,
              it = e.get(A);
            ((it.shadowIntensity = Y.intensity),
              (it.shadowBias = Y.bias),
              (it.shadowNormalBias = Y.normalBias),
              (it.shadowRadius = Y.radius),
              it.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),
              (i.sunShadow[E] = it),
              (i.sunShadowMap[E] = et));
            let ft = Y.getViewportCount();
            for (let ct = 0; ct < ft; ct++)
              ((i.sunShadowMatrix[v + ct] = Y.getMatrix(ct)), (i.sunShadowCascade[v + ct] = Y._cascadeData[ct]));
            ((v += ft), E++);
          }
          ((i.sun[d] = J), d++);
        } else if (A.isDirectionalLight) {
          let J = t.get(A);
          if ((J.color.copy(A.color).multiplyScalar(A.intensity), A.castShadow)) {
            let Y = A.shadow,
              it = e.get(A);
            ((it.shadowIntensity = Y.intensity),
              (it.shadowBias = Y.bias),
              (it.shadowNormalBias = Y.normalBias),
              (it.shadowRadius = Y.radius),
              (it.shadowMapSize = Y.mapSize),
              (i.directionalShadow[m] = it),
              (i.directionalShadowMap[m] = et),
              (i.directionalShadowMatrix[m] = A.shadow.matrix),
              M++);
          }
          ((i.directional[m] = J), m++);
        } else if (A.isSpotLight) {
          let J = t.get(A);
          (J.position.setFromMatrixPosition(A.matrixWorld),
            J.color.copy(L).multiplyScalar(G),
            (J.distance = D),
            (J.coneCos = Math.cos(A.angle)),
            (J.penumbraCos = Math.cos(A.angle * (1 - A.penumbra))),
            (J.decay = A.decay),
            (i.spot[y] = J));
          let Y = A.shadow;
          if (
            (A.map && ((i.spotLightMap[x] = A.map), x++, Y.updateMatrices(A), A.castShadow && b++),
            (i.spotLightMatrix[y] = Y.matrix),
            A.castShadow)
          ) {
            let it = e.get(A);
            ((it.shadowIntensity = Y.intensity),
              (it.shadowBias = Y.bias),
              (it.shadowNormalBias = Y.normalBias),
              (it.shadowRadius = Y.radius),
              (it.shadowMapSize = Y.mapSize),
              (i.spotShadow[y] = it),
              (i.spotShadowMap[y] = et),
              T++);
          }
          y++;
        } else if (A.isRectAreaLight) {
          let J = t.get(A);
          (J.color.copy(L).multiplyScalar(G),
            J.halfWidth.set(A.width * 0.5, 0, 0),
            J.halfHeight.set(0, A.height * 0.5, 0),
            (i.rectArea[Q] = J),
            Q++);
        } else if (A.isPointLight) {
          let J = t.get(A);
          if (
            (J.color.copy(A.color).multiplyScalar(A.intensity),
            (J.distance = A.distance),
            (J.decay = A.decay),
            A.castShadow)
          ) {
            let Y = A.shadow,
              it = e.get(A);
            ((it.shadowIntensity = Y.intensity),
              (it.shadowBias = Y.bias),
              (it.shadowNormalBias = Y.normalBias),
              (it.shadowRadius = Y.radius),
              (it.shadowMapSize = Y.mapSize),
              (it.shadowCameraNear = Y.camera.near),
              (it.shadowCameraFar = Y.camera.far),
              (i.pointShadow[p] = it),
              (i.pointShadowMap[p] = et),
              (i.pointShadowMatrix[p] = A.shadow.matrix),
              P++);
          }
          ((i.point[p] = J), p++);
        } else if (A.isHemisphereLight) {
          let J = t.get(A);
          (J.skyColor.copy(A.color).multiplyScalar(G),
            J.groundColor.copy(A.groundColor).multiplyScalar(G),
            (i.hemi[S] = J),
            S++);
        }
      }
      (Q > 0 &&
        (n.has("OES_texture_float_linear") === !0
          ? ((i.rectAreaLTC1 = Et.LTC_FLOAT_1), (i.rectAreaLTC2 = Et.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = Et.LTC_HALF_1), (i.rectAreaLTC2 = Et.LTC_HALF_2))),
        (i.ambient[0] = u),
        (i.ambient[1] = f),
        (i.ambient[2] = h));
      let w = i.hash;
      (w.sunLength !== d ||
        w.directionalLength !== m ||
        w.pointLength !== p ||
        w.spotLength !== y ||
        w.rectAreaLength !== Q ||
        w.hemiLength !== S ||
        w.numSunShadows !== E ||
        w.numDirectionalShadows !== M ||
        w.numPointShadows !== P ||
        w.numSpotShadows !== T ||
        w.numSpotMaps !== x ||
        w.numLightProbes !== N) &&
        ((i.sun.length = d),
        (i.directional.length = m),
        (i.spot.length = y),
        (i.rectArea.length = Q),
        (i.point.length = p),
        (i.hemi.length = S),
        (i.sunShadow.length = E),
        (i.sunShadowMap.length = E),
        (i.sunShadowMatrix.length = v),
        (i.sunShadowCascade.length = v),
        (i.directionalShadow.length = M),
        (i.directionalShadowMap.length = M),
        (i.directionalShadowMatrix.length = M),
        (i.pointShadow.length = P),
        (i.pointShadowMap.length = P),
        (i.pointShadowMatrix.length = P),
        (i.spotShadow.length = T),
        (i.spotShadowMap.length = T),
        (i.spotLightMatrix.length = T + x - b),
        (i.spotLightMap.length = x),
        (i.numSpotLightShadowsWithMaps = b),
        (i.numLightProbes = N),
        (w.sunLength = d),
        (w.directionalLength = m),
        (w.pointLength = p),
        (w.spotLength = y),
        (w.rectAreaLength = Q),
        (w.hemiLength = S),
        (w.numSunShadows = E),
        (w.numDirectionalShadows = M),
        (w.numPointShadows = P),
        (w.numSpotShadows = T),
        (w.numSpotMaps = x),
        (w.numLightProbes = N),
        (i.version = pE++));
    }
    function l(c, u) {
      let f = 0,
        h = 0,
        d = 0,
        E = 0,
        v = 0,
        m = 0,
        p = u.matrixWorldInverse;
      for (let y = 0, Q = c.length; y < Q; y++) {
        let S = c[y];
        if (S.isSunLight) {
          let M = i.sun[f];
          (M.direction.setFromMatrixPosition(S.matrixWorld), M.direction.transformDirection(p), f++);
        } else if (S.isDirectionalLight) {
          let M = i.directional[h];
          (M.direction.setFromMatrixPosition(S.matrixWorld),
            s.setFromMatrixPosition(S.target.matrixWorld),
            M.direction.sub(s),
            M.direction.transformDirection(p),
            h++);
        } else if (S.isSpotLight) {
          let M = i.spot[E];
          (M.position.setFromMatrixPosition(S.matrixWorld),
            M.position.applyMatrix4(p),
            M.direction.setFromMatrixPosition(S.matrixWorld),
            s.setFromMatrixPosition(S.target.matrixWorld),
            M.direction.sub(s),
            M.direction.transformDirection(p),
            E++);
        } else if (S.isRectAreaLight) {
          let M = i.rectArea[v];
          (M.position.setFromMatrixPosition(S.matrixWorld),
            M.position.applyMatrix4(p),
            a.identity(),
            r.copy(S.matrixWorld),
            r.premultiply(p),
            a.extractRotation(r),
            M.halfWidth.set(S.width * 0.5, 0, 0),
            M.halfHeight.set(0, S.height * 0.5, 0),
            M.halfWidth.applyMatrix4(a),
            M.halfHeight.applyMatrix4(a),
            v++);
        } else if (S.isPointLight) {
          let M = i.point[d];
          (M.position.setFromMatrixPosition(S.matrixWorld), M.position.applyMatrix4(p), d++);
        } else if (S.isHemisphereLight) {
          let M = i.hemi[m];
          (M.direction.setFromMatrixPosition(S.matrixWorld), M.direction.transformDirection(p), m++);
        }
      }
    }
    return { setup: o, setupView: l, state: i };
  }
  function ru(n) {
    let t = new EE(n),
      e = [],
      i = [],
      s = [];
    function r(h) {
      ((f.camera = h), (e.length = 0), (i.length = 0), (s.length = 0));
    }
    function a(h) {
      e.push(h);
    }
    function o(h) {
      i.push(h);
    }
    function l(h) {
      s.push(h);
    }
    function c() {
      t.setup(e);
    }
    function u(h) {
      t.setupView(e, h);
    }
    let f = {
      lightsArray: e,
      shadowsArray: i,
      lightProbeGridArray: s,
      camera: null,
      lights: t,
      transmissionRenderTarget: {},
      textureUnits: 0,
    };
    return {
      init: r,
      state: f,
      setupLights: c,
      setupLightsView: u,
      pushLight: a,
      pushShadow: o,
      pushLightProbeGrid: l,
    };
  }
  function gE(n) {
    let t = new WeakMap();
    function e(s, r = 0) {
      let a = t.get(s),
        o;
      return (
        a === void 0 ? ((o = new ru(n)), t.set(s, [o])) : r >= a.length ? ((o = new ru(n)), a.push(o)) : (o = a[r]),
        o
      );
    }
    function i() {
      t = new WeakMap();
    }
    return { get: e, dispose: i };
  }
  var xE = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
    vE = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
    SE = [new F(1, 0, 0), new F(-1, 0, 0), new F(0, 1, 0), new F(0, -1, 0), new F(0, 0, 1), new F(0, 0, -1)],
    yE = [new F(0, -1, 0), new F(0, -1, 0), new F(0, 0, 1), new F(0, 0, -1), new F(0, -1, 0), new F(0, -1, 0)],
    au = new Vt(),
    lr = new F(),
    Zc = new F();
  function ME(n, t, e) {
    let i = new jn(),
      s = new Ct(),
      r = new Ct(),
      a = new ne(),
      o = new aa(),
      l = new oa(),
      c = {},
      u = e.maxTextureSize,
      f = { [sn]: Le, [Le]: sn, [ai]: ai },
      h = new Se({
        defines: { VSM_SAMPLES: 8 },
        uniforms: { shadow_pass: { value: null }, resolution: { value: new Ct() }, radius: { value: 4 } },
        vertexShader: xE,
        fragmentShader: vE,
      }),
      d = h.clone();
    d.defines.HORIZONTAL_PASS = 1;
    let E = new ve();
    E.setAttribute("position", new xe(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    let v = new Ee(E, h),
      m = this;
    ((this.enabled = !1), (this.autoUpdate = !0), (this.needsUpdate = !1), (this.type = Zs));
    let p = this.type;
    this.render = function (P, T, x) {
      if (m.enabled === !1 || (m.autoUpdate === !1 && m.needsUpdate === !1) || P.length === 0) return;
      this.type === ya &&
        (Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), (this.type = Zs));
      let b = n.getRenderTarget(),
        N = n.getActiveCubeFace(),
        w = n.getActiveMipmapLevel(),
        C = n.state;
      (C.setBlending(Qi),
        C.buffers.depth.getReversed() === !0
          ? C.buffers.color.setClear(0, 0, 0, 0)
          : C.buffers.color.setClear(1, 1, 1, 1),
        C.buffers.depth.setTest(!0),
        C.setScissorTest(!1));
      let z = p !== this.type;
      z &&
        T.traverse(function (A) {
          A.material &&
            (Array.isArray(A.material)
              ? A.material.forEach((L) => (L.needsUpdate = !0))
              : (A.material.needsUpdate = !0));
        });
      for (let A = 0, L = P.length; A < L; A++) {
        let G = P[A],
          D = G.shadow;
        if (D === void 0) {
          Ht("WebGLShadowMap:", G, "has no shadow.");
          continue;
        }
        if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
        s.copy(D.mapSize);
        let et = D.getFrameExtents();
        (s.multiply(et),
          r.copy(D.mapSize),
          (s.x > u || s.y > u) &&
            (s.x > u && ((r.x = Math.floor(u / et.x)), (s.x = r.x * et.x), (D.mapSize.x = r.x)),
            s.y > u && ((r.y = Math.floor(u / et.y)), (s.y = r.y * et.y), (D.mapSize.y = r.y))));
        let J = n.state.buffers.depth.getReversed();
        if (((D.camera._reversedDepth = J), D.map === null || z === !0)) {
          if (
            (D.map !== null &&
              (D.map.depthTexture !== null && (D.map.depthTexture.dispose(), (D.map.depthTexture = null)),
              D.map.dispose()),
            this.type === ns)
          ) {
            if (G.isPointLight) {
              Ht(
                "WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.",
              );
              continue;
            }
            ((D.map = new Re(s.x, s.y, { format: cn, type: Ue, minFilter: Qe, magFilter: Qe, generateMipmaps: !1 })),
              (D.map.texture.name = G.name + ".shadowMap"),
              (D.map.depthTexture = new _i(s.x, s.y, Ke)),
              (D.map.depthTexture.name = G.name + ".shadowMapDepth"),
              (D.map.depthTexture.format = si),
              (D.map.depthTexture.compareFunction = null),
              (D.map.depthTexture.minFilter = Ce),
              (D.map.depthTexture.magFilter = Ce));
          } else
            (G.isPointLight
              ? ((D.map = new po(s.x)), (D.map.depthTexture = new sa(s.x, mi)))
              : ((D.map = new Re(s.x, s.y)), (D.map.depthTexture = new _i(s.x, s.y, mi))),
              (D.map.depthTexture.name = G.name + ".shadowMap"),
              (D.map.depthTexture.format = si),
              this.type === Zs
                ? ((D.map.depthTexture.compareFunction = J ? lo : co),
                  (D.map.depthTexture.minFilter = Qe),
                  (D.map.depthTexture.magFilter = Qe))
                : ((D.map.depthTexture.compareFunction = null),
                  (D.map.depthTexture.minFilter = Ce),
                  (D.map.depthTexture.magFilter = Ce)));
          D.camera.updateProjectionMatrix();
        }
        D.map.isWebGLCubeRenderTarget !== !0 &&
          (D.map.width !== s.x || D.map.height !== s.y) &&
          D.map.setSize(s.x, s.y);
        let Y = D.map.isWebGLCubeRenderTarget ? 6 : D.getViewportCount();
        G.isPointLight !== !0 && D.updateMatrices(G, x);
        for (let it = 0; it < Y; it++) {
          let ft = D.getCamera(it);
          if (G.isPointLight) {
            let ct = D.camera,
              ee = D.matrix,
              Dt = G.distance || ct.far;
            (Dt !== ct.far && ((ct.far = Dt), ct.updateProjectionMatrix()),
              lr.setFromMatrixPosition(G.matrixWorld),
              ct.position.copy(lr),
              Zc.copy(ct.position),
              Zc.add(SE[it]),
              ct.up.copy(yE[it]),
              ct.lookAt(Zc),
              ct.updateMatrixWorld(),
              ee.makeTranslation(-lr.x, -lr.y, -lr.z),
              au.multiplyMatrices(ct.projectionMatrix, ct.matrixWorldInverse),
              D._frustum.setFromProjectionMatrix(au, ct.coordinateSystem, ct.reversedDepth));
          }
          if (D.map.isWebGLCubeRenderTarget) (n.setRenderTarget(D.map, it), n.clear());
          else {
            it === 0 && (n.setRenderTarget(D.map), n.clear());
            let ct = D.getViewport(it);
            (a.set(r.x * ct.x, r.y * ct.y, r.x * ct.z, r.y * ct.w), C.viewport(a));
          }
          ((i = D.getFrustum(it)), S(T, x, ft, G, this.type));
        }
        (D.isPointLightShadow !== !0 && this.type === ns && y(D, x), (D.needsUpdate = !1));
      }
      ((p = this.type), (m.needsUpdate = !1), n.setRenderTarget(b, N, w));
    };
    function y(P, T) {
      let x = t.update(v);
      (h.defines.VSM_SAMPLES !== P.blurSamples &&
        ((h.defines.VSM_SAMPLES = P.blurSamples),
        (d.defines.VSM_SAMPLES = P.blurSamples),
        (h.needsUpdate = !0),
        (d.needsUpdate = !0)),
        P.mapPass === null
          ? (P.mapPass = new Re(s.x, s.y, { format: cn, type: Ue }))
          : (P.mapPass.width !== P.map.width || P.mapPass.height !== P.map.height) &&
            P.mapPass.setSize(P.map.width, P.map.height),
        (h.uniforms.shadow_pass.value = P.map.depthTexture),
        h.uniforms.resolution.value.set(P.map.width, P.map.height),
        (h.uniforms.radius.value = P.radius),
        n.setRenderTarget(P.mapPass),
        n.clear(),
        n.renderBufferDirect(T, null, x, h, v, null),
        (d.uniforms.shadow_pass.value = P.mapPass.texture),
        d.uniforms.resolution.value.set(P.map.width, P.map.height),
        (d.uniforms.radius.value = P.radius),
        n.setRenderTarget(P.map),
        n.clear(),
        n.renderBufferDirect(T, null, x, d, v, null));
    }
    function Q(P, T, x, b) {
      let N = null,
        w = x.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial;
      if (w !== void 0) N = w;
      else if (
        ((N = x.isPointLight === !0 ? l : o),
        (n.localClippingEnabled &&
          T.clipShadows === !0 &&
          Array.isArray(T.clippingPlanes) &&
          T.clippingPlanes.length !== 0) ||
          (T.displacementMap && T.displacementScale !== 0) ||
          (T.alphaMap && T.alphaTest > 0) ||
          (T.map && T.alphaTest > 0) ||
          T.alphaToCoverage === !0)
      ) {
        let C = N.uuid,
          z = T.uuid,
          A = c[C];
        A === void 0 && ((A = {}), (c[C] = A));
        let L = A[z];
        (L === void 0 && ((L = N.clone()), (A[z] = L), T.addEventListener("dispose", M)), (N = L));
      }
      if (
        ((N.visible = T.visible),
        (N.wireframe = T.wireframe),
        b === ns
          ? (N.side = T.shadowSide !== null ? T.shadowSide : T.side)
          : (N.side = T.shadowSide !== null ? T.shadowSide : f[T.side]),
        (N.alphaMap = T.alphaMap),
        (N.alphaTest = T.alphaToCoverage === !0 ? 0.5 : T.alphaTest),
        (N.map = T.map),
        (N.clipShadows = T.clipShadows),
        (N.clippingPlanes = T.clippingPlanes),
        (N.clipIntersection = T.clipIntersection),
        (N.displacementMap = T.displacementMap),
        (N.displacementScale = T.displacementScale),
        (N.displacementBias = T.displacementBias),
        (N.wireframeLinewidth = T.wireframeLinewidth),
        (N.linewidth = T.linewidth),
        x.isPointLight === !0 && N.isMeshDistanceMaterial === !0)
      ) {
        let C = n.properties.get(N);
        C.light = x;
      }
      return N;
    }
    function S(P, T, x, b, N) {
      if (P.visible === !1) return;
      if (
        P.layers.test(T.layers) &&
        (P.isMesh || P.isLine || P.isPoints) &&
        (P.castShadow || (P.receiveShadow && N === ns)) &&
        (!P.frustumCulled || P.intersectsFrustum(i))
      ) {
        P.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, P.matrixWorld);
        let z = t.update(P),
          A = P.material;
        if (Array.isArray(A)) {
          let L = z.groups;
          for (let G = 0, D = L.length; G < D; G++) {
            let et = L[G],
              J = A[et.materialIndex];
            if (J && J.visible) {
              let Y = Q(P, J, b, N);
              (P.onBeforeShadow(n, P, T, x, z, Y, et),
                n.renderBufferDirect(x, null, z, Y, P, et),
                P.onAfterShadow(n, P, T, x, z, Y, et));
            }
          }
        } else if (A.visible) {
          let L = Q(P, A, b, N);
          (P.onBeforeShadow(n, P, T, x, z, L, null),
            n.renderBufferDirect(x, null, z, L, P, null),
            P.onAfterShadow(n, P, T, x, z, L, null));
        }
      }
      let C = P.children;
      for (let z = 0, A = C.length; z < A; z++) S(C[z], T, x, b, N);
    }
    function M(P) {
      P.target.removeEventListener("dispose", M);
      for (let x in c) {
        let b = c[x],
          N = P.target.uuid;
        N in b && (b[N].dispose(), delete b[N]);
      }
    }
  }
  function PE(n, t) {
    function e() {
      let U = !1,
        ut = new ne(),
        tt = null,
        mt = new ne(0, 0, 0, 0);
      return {
        setMask: function (Mt) {
          tt !== Mt && !U && (n.colorMask(Mt, Mt, Mt, Mt), (tt = Mt));
        },
        setLocked: function (Mt) {
          U = Mt;
        },
        setClear: function (Mt, st, Nt, At, de) {
          (de === !0 && ((Mt *= At), (st *= At), (Nt *= At)),
            ut.set(Mt, st, Nt, At),
            mt.equals(ut) === !1 && (n.clearColor(Mt, st, Nt, At), mt.copy(ut)));
        },
        reset: function () {
          ((U = !1), (tt = null), mt.set(-1, 0, 0, 0));
        },
      };
    }
    function i() {
      let U = !1,
        ut = !1,
        tt = null,
        mt = null,
        Mt = null;
      return {
        setReversed: function (st) {
          if (ut !== st) {
            let Nt = t.get("EXT_clip_control");
            (st
              ? Nt.clipControlEXT(Nt.LOWER_LEFT_EXT, Nt.ZERO_TO_ONE_EXT)
              : Nt.clipControlEXT(Nt.LOWER_LEFT_EXT, Nt.NEGATIVE_ONE_TO_ONE_EXT),
              (ut = st));
            let At = Mt;
            ((Mt = null), this.setClear(At));
          }
        },
        getReversed: function () {
          return ut;
        },
        setTest: function (st) {
          st ? Z(n.DEPTH_TEST) : xt(n.DEPTH_TEST);
        },
        setMask: function (st) {
          tt !== st && !U && (n.depthMask(st), (tt = st));
        },
        setFunc: function (st) {
          if ((ut && (st = Uh[st]), mt !== st)) {
            switch (st) {
              case Vr:
                n.depthFunc(n.NEVER);
                break;
              case Dr:
                n.depthFunc(n.ALWAYS);
                break;
              case Jr:
                n.depthFunc(n.LESS);
                break;
              case Jn:
                n.depthFunc(n.LEQUAL);
                break;
              case kr:
                n.depthFunc(n.EQUAL);
                break;
              case Wr:
                n.depthFunc(n.GEQUAL);
                break;
              case Xr:
                n.depthFunc(n.GREATER);
                break;
              case Kr:
                n.depthFunc(n.NOTEQUAL);
                break;
              default:
                n.depthFunc(n.LEQUAL);
            }
            mt = st;
          }
        },
        setLocked: function (st) {
          U = st;
        },
        setClear: function (st) {
          Mt !== st && ((Mt = st), ut && (st = 1 - st), n.clearDepth(st));
        },
        reset: function () {
          ((U = !1), (tt = null), (mt = null), (Mt = null), (ut = !1));
        },
      };
    }
    function s() {
      let U = !1,
        ut = null,
        tt = null,
        mt = null,
        Mt = null,
        st = null,
        Nt = null,
        At = null,
        de = null;
      return {
        setTest: function (re) {
          U || (re ? Z(n.STENCIL_TEST) : xt(n.STENCIL_TEST));
        },
        setMask: function (re) {
          ut !== re && !U && (n.stencilMask(re), (ut = re));
        },
        setFunc: function (re, ci, gi) {
          (tt !== re || mt !== ci || Mt !== gi) && (n.stencilFunc(re, ci, gi), (tt = re), (mt = ci), (Mt = gi));
        },
        setOp: function (re, ci, gi) {
          (st !== re || Nt !== ci || At !== gi) && (n.stencilOp(re, ci, gi), (st = re), (Nt = ci), (At = gi));
        },
        setLocked: function (re) {
          U = re;
        },
        setClear: function (re) {
          de !== re && (n.clearStencil(re), (de = re));
        },
        reset: function () {
          ((U = !1),
            (ut = null),
            (tt = null),
            (mt = null),
            (Mt = null),
            (st = null),
            (Nt = null),
            (At = null),
            (de = null));
        },
      };
    }
    let r = new e(),
      a = new i(),
      o = new s(),
      l = new WeakMap(),
      c = new WeakMap(),
      u = {},
      f = {},
      h = {},
      d = new WeakMap(),
      E = [],
      v = null,
      m = !1,
      p = null,
      y = null,
      Q = null,
      S = null,
      M = null,
      P = null,
      T = null,
      x = new Tt(0, 0, 0),
      b = 0,
      N = !1,
      w = null,
      C = null,
      z = null,
      A = null,
      L = null,
      G = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      D = !1,
      et = 0,
      J = n.getParameter(n.VERSION);
    J.indexOf("WebGL") !== -1
      ? ((et = parseFloat(/^WebGL (\d)/.exec(J)[1])), (D = et >= 1))
      : J.indexOf("OpenGL ES") !== -1 && ((et = parseFloat(/^OpenGL ES (\d)/.exec(J)[1])), (D = et >= 2));
    let Y = null,
      it = {},
      ft = n.getParameter(n.SCISSOR_BOX),
      ct = n.getParameter(n.VIEWPORT),
      ee = new ne().fromArray(ft),
      Dt = new ne().fromArray(ct);
    function yt(U, ut, tt, mt) {
      let Mt = new Uint8Array(4),
        st = n.createTexture();
      (n.bindTexture(U, st),
        n.texParameteri(U, n.TEXTURE_MIN_FILTER, n.NEAREST),
        n.texParameteri(U, n.TEXTURE_MAG_FILTER, n.NEAREST));
      for (let Nt = 0; Nt < tt; Nt++)
        U === n.TEXTURE_3D || U === n.TEXTURE_2D_ARRAY
          ? n.texImage3D(ut, 0, n.RGBA, 1, 1, mt, 0, n.RGBA, n.UNSIGNED_BYTE, Mt)
          : n.texImage2D(ut + Nt, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, Mt);
      return st;
    }
    let W = {};
    ((W[n.TEXTURE_2D] = yt(n.TEXTURE_2D, n.TEXTURE_2D, 1)),
      (W[n.TEXTURE_CUBE_MAP] = yt(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6)),
      (W[n.TEXTURE_2D_ARRAY] = yt(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1)),
      (W[n.TEXTURE_3D] = yt(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1)),
      r.setClear(0, 0, 0, 1),
      a.setClear(1),
      o.setClear(0),
      Z(n.DEPTH_TEST),
      a.setFunc(Jn),
      $t(!1),
      Zt(mc),
      Z(n.CULL_FACE),
      qt(Qi));
    function Z(U) {
      u[U] !== !0 && (n.enable(U), (u[U] = !0));
    }
    function xt(U) {
      u[U] !== !1 && (n.disable(U), (u[U] = !1));
    }
    function Ut(U, ut) {
      return h[U] !== ut
        ? (n.bindFramebuffer(U, ut),
          (h[U] = ut),
          U === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = ut),
          U === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = ut),
          !0)
        : !1;
    }
    function pt(U, ut) {
      let tt = E,
        mt = !1;
      if (U) {
        ((tt = d.get(ut)), tt === void 0 && ((tt = []), d.set(ut, tt)));
        let Mt = U.textures;
        if (tt.length !== Mt.length || tt[0] !== n.COLOR_ATTACHMENT0) {
          for (let st = 0, Nt = Mt.length; st < Nt; st++) tt[st] = n.COLOR_ATTACHMENT0 + st;
          ((tt.length = Mt.length), (mt = !0));
        }
      } else tt[0] !== n.BACK && ((tt[0] = n.BACK), (mt = !0));
      mt && n.drawBuffers(tt);
    }
    function Bt(U) {
      return v !== U ? (n.useProgram(U), (v = U), !0) : !1;
    }
    let le = { [yn]: n.FUNC_ADD, [nh]: n.FUNC_SUBTRACT, [sh]: n.FUNC_REVERSE_SUBTRACT };
    ((le[rh] = n.MIN), (le[ah] = n.MAX));
    let Lt = {
      [oh]: n.ZERO,
      [ch]: n.ONE,
      [lh]: n.SRC_COLOR,
      [xc]: n.SRC_ALPHA,
      [mh]: n.SRC_ALPHA_SATURATE,
      [fh]: n.DST_COLOR,
      [uh]: n.DST_ALPHA,
      [hh]: n.ONE_MINUS_SRC_COLOR,
      [vc]: n.ONE_MINUS_SRC_ALPHA,
      [ph]: n.ONE_MINUS_DST_COLOR,
      [dh]: n.ONE_MINUS_DST_ALPHA,
      [Eh]: n.CONSTANT_COLOR,
      [gh]: n.ONE_MINUS_CONSTANT_COLOR,
      [xh]: n.CONSTANT_ALPHA,
      [vh]: n.ONE_MINUS_CONSTANT_ALPHA,
    };
    function qt(U, ut, tt, mt, Mt, st, Nt, At, de, re) {
      if (U === Qi) {
        m === !0 && (xt(n.BLEND), (m = !1));
        return;
      }
      if ((m === !1 && (Z(n.BLEND), (m = !0)), U !== ih)) {
        if (U !== p || re !== N) {
          if (((y !== yn || M !== yn) && (n.blendEquation(n.FUNC_ADD), (y = yn), (M = yn)), re))
            switch (U) {
              case ss:
                n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                break;
              case Ys:
                n.blendFunc(n.ONE, n.ONE);
                break;
              case Ec:
                n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
                break;
              case gc:
                n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
                break;
              default:
                Ot("WebGLState: Invalid blending: ", U);
                break;
            }
          else
            switch (U) {
              case ss:
                n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                break;
              case Ys:
                n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
                break;
              case Ec:
                Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
                break;
              case gc:
                Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
                break;
              default:
                Ot("WebGLState: Invalid blending: ", U);
                break;
            }
          ((Q = null), (S = null), (P = null), (T = null), x.set(0, 0, 0), (b = 0), (p = U), (N = re));
        }
        return;
      }
      ((Mt = Mt || ut),
        (st = st || tt),
        (Nt = Nt || mt),
        (ut !== y || Mt !== M) && (n.blendEquationSeparate(le[ut], le[Mt]), (y = ut), (M = Mt)),
        (tt !== Q || mt !== S || st !== P || Nt !== T) &&
          (n.blendFuncSeparate(Lt[tt], Lt[mt], Lt[st], Lt[Nt]), (Q = tt), (S = mt), (P = st), (T = Nt)),
        (At.equals(x) === !1 || de !== b) && (n.blendColor(At.r, At.g, At.b, de), x.copy(At), (b = de)),
        (p = U),
        (N = !1));
    }
    function Xt(U, ut) {
      U.side === ai ? xt(n.CULL_FACE) : Z(n.CULL_FACE);
      let tt = U.side === Le;
      (ut && (tt = !tt),
        $t(tt),
        U.blending === ss && U.transparent === !1
          ? qt(Qi)
          : qt(
              U.blending,
              U.blendEquation,
              U.blendSrc,
              U.blendDst,
              U.blendEquationAlpha,
              U.blendSrcAlpha,
              U.blendDstAlpha,
              U.blendColor,
              U.blendAlpha,
              U.premultipliedAlpha,
            ),
        a.setFunc(U.depthFunc),
        a.setTest(U.depthTest),
        a.setMask(U.depthWrite),
        r.setMask(U.colorWrite));
      let mt = U.stencilWrite;
      (o.setTest(mt),
        mt &&
          (o.setMask(U.stencilWriteMask),
          o.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask),
          o.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)),
        Ie(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits),
        U.alphaToCoverage === !0 ? Z(n.SAMPLE_ALPHA_TO_COVERAGE) : xt(n.SAMPLE_ALPHA_TO_COVERAGE));
    }
    function $t(U) {
      w !== U && (U ? n.frontFace(n.CW) : n.frontFace(n.CCW), (w = U));
    }
    function Zt(U) {
      (U !== th
        ? (Z(n.CULL_FACE),
          U !== C && (U === mc ? n.cullFace(n.BACK) : U === eh ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK)))
        : xt(n.CULL_FACE),
        (C = U));
    }
    function ge(U) {
      U !== z && (D && n.lineWidth(U), (z = U));
    }
    function Ie(U, ut, tt) {
      U
        ? (Z(n.POLYGON_OFFSET_FILL),
          (A !== ut || L !== tt) && ((A = ut), (L = tt), a.getReversed() && (ut = -ut), n.polygonOffset(ut, tt)))
        : xt(n.POLYGON_OFFSET_FILL);
    }
    function V(U) {
      U ? Z(n.SCISSOR_TEST) : xt(n.SCISSOR_TEST);
    }
    function nt(U) {
      (U === void 0 && (U = n.TEXTURE0 + G - 1), Y !== U && (n.activeTexture(U), (Y = U)));
    }
    function I(U, ut, tt) {
      tt === void 0 && (Y === null ? (tt = n.TEXTURE0 + G - 1) : (tt = Y));
      let mt = it[tt];
      (mt === void 0 && ((mt = { type: void 0, texture: void 0 }), (it[tt] = mt)),
        (mt.type !== U || mt.texture !== ut) &&
          (Y !== tt && (n.activeTexture(tt), (Y = tt)),
          n.bindTexture(U, ut || W[U]),
          (mt.type = U),
          (mt.texture = ut)));
    }
    function ot() {
      let U = it[Y];
      U !== void 0 && U.type !== void 0 && (n.bindTexture(U.type, null), (U.type = void 0), (U.texture = void 0));
    }
    function St() {
      try {
        n.compressedTexImage2D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function R() {
      try {
        n.compressedTexImage3D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function g() {
      try {
        n.texSubImage2D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function H() {
      try {
        n.texSubImage3D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function $() {
      try {
        n.compressedTexSubImage2D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function X() {
      try {
        n.compressedTexSubImage3D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function at() {
      try {
        n.texStorage2D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function rt() {
      try {
        n.texStorage3D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function K() {
      try {
        n.texImage2D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function j() {
      try {
        n.texImage3D(...arguments);
      } catch (U) {
        Ot("WebGLState:", U);
      }
    }
    function lt(U) {
      return f[U] !== void 0 ? f[U] : n.getParameter(U);
    }
    function bt(U, ut) {
      f[U] !== ut && (n.pixelStorei(U, ut), (f[U] = ut));
    }
    function dt(U) {
      ee.equals(U) === !1 && (n.scissor(U.x, U.y, U.z, U.w), ee.copy(U));
    }
    function ht(U) {
      Dt.equals(U) === !1 && (n.viewport(U.x, U.y, U.z, U.w), Dt.copy(U));
    }
    function It(U, ut) {
      let tt = c.get(ut);
      tt === void 0 && ((tt = new WeakMap()), c.set(ut, tt));
      let mt = tt.get(U);
      mt === void 0 && ((mt = n.getUniformBlockIndex(ut, U.name)), tt.set(U, mt));
    }
    function wt(U, ut) {
      let mt = c.get(ut).get(U);
      l.get(ut) !== mt && (n.uniformBlockBinding(ut, mt, U.__bindingPointIndex), l.set(ut, mt));
    }
    function zt() {
      (n.disable(n.BLEND),
        n.disable(n.CULL_FACE),
        n.disable(n.DEPTH_TEST),
        n.disable(n.POLYGON_OFFSET_FILL),
        n.disable(n.SCISSOR_TEST),
        n.disable(n.STENCIL_TEST),
        n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
        n.blendEquation(n.FUNC_ADD),
        n.blendFunc(n.ONE, n.ZERO),
        n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO),
        n.blendColor(0, 0, 0, 0),
        n.colorMask(!0, !0, !0, !0),
        n.clearColor(0, 0, 0, 0),
        n.depthMask(!0),
        n.depthFunc(n.LESS),
        a.setReversed(!1),
        n.clearDepth(1),
        n.stencilMask(4294967295),
        n.stencilFunc(n.ALWAYS, 0, 4294967295),
        n.stencilOp(n.KEEP, n.KEEP, n.KEEP),
        n.clearStencil(0),
        n.cullFace(n.BACK),
        n.frontFace(n.CCW),
        n.polygonOffset(0, 0),
        n.activeTexture(n.TEXTURE0),
        n.bindFramebuffer(n.FRAMEBUFFER, null),
        n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
        n.bindFramebuffer(n.READ_FRAMEBUFFER, null),
        n.useProgram(null),
        n.lineWidth(1),
        n.scissor(0, 0, n.canvas.width, n.canvas.height),
        n.viewport(0, 0, n.canvas.width, n.canvas.height),
        n.pixelStorei(n.PACK_ALIGNMENT, 4),
        n.pixelStorei(n.UNPACK_ALIGNMENT, 4),
        n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, n.BROWSER_DEFAULT_WEBGL),
        n.pixelStorei(n.PACK_ROW_LENGTH, 0),
        n.pixelStorei(n.PACK_SKIP_PIXELS, 0),
        n.pixelStorei(n.PACK_SKIP_ROWS, 0),
        n.pixelStorei(n.UNPACK_ROW_LENGTH, 0),
        n.pixelStorei(n.UNPACK_IMAGE_HEIGHT, 0),
        n.pixelStorei(n.UNPACK_SKIP_PIXELS, 0),
        n.pixelStorei(n.UNPACK_SKIP_ROWS, 0),
        n.pixelStorei(n.UNPACK_SKIP_IMAGES, 0),
        (u = {}),
        (f = {}),
        (Y = null),
        (it = {}),
        (h = {}),
        (d = new WeakMap()),
        (E = []),
        (v = null),
        (m = !1),
        (p = null),
        (y = null),
        (Q = null),
        (S = null),
        (M = null),
        (P = null),
        (T = null),
        (x = new Tt(0, 0, 0)),
        (b = 0),
        (N = !1),
        (w = null),
        (C = null),
        (z = null),
        (A = null),
        (L = null),
        ee.set(0, 0, n.canvas.width, n.canvas.height),
        Dt.set(0, 0, n.canvas.width, n.canvas.height),
        r.reset(),
        a.reset(),
        o.reset());
    }
    return {
      buffers: { color: r, depth: a, stencil: o },
      enable: Z,
      disable: xt,
      bindFramebuffer: Ut,
      drawBuffers: pt,
      useProgram: Bt,
      setBlending: qt,
      setMaterial: Xt,
      setFlipSided: $t,
      setCullFace: Zt,
      setLineWidth: ge,
      setPolygonOffset: Ie,
      setScissorTest: V,
      activeTexture: nt,
      bindTexture: I,
      unbindTexture: ot,
      compressedTexImage2D: St,
      compressedTexImage3D: R,
      texImage2D: K,
      texImage3D: j,
      pixelStorei: bt,
      getParameter: lt,
      updateUBOMapping: It,
      uniformBlockBinding: wt,
      texStorage2D: at,
      texStorage3D: rt,
      texSubImage2D: g,
      texSubImage3D: H,
      compressedTexSubImage2D: $,
      compressedTexSubImage3D: X,
      scissor: dt,
      viewport: ht,
      reset: zt,
    };
  }
  function _E(n, t, e, i, s, r, a) {
    let o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null,
      l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
      c = new Ct(),
      u = new WeakMap(),
      f = new Set(),
      h,
      d = new WeakMap(),
      E = !1;
    try {
      E = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {}
    function v(R, g) {
      return E ? new OffscreenCanvas(R, g) : Wn("canvas");
    }
    function m(R, g, H) {
      let $ = 1,
        X = St(R);
      if (((X.width > H || X.height > H) && ($ = H / Math.max(X.width, X.height)), $ < 1))
        if (
          (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement) ||
          (typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement) ||
          (typeof ImageBitmap < "u" && R instanceof ImageBitmap) ||
          (typeof VideoFrame < "u" && R instanceof VideoFrame)
        ) {
          let at = Math.floor($ * X.width),
            rt = Math.floor($ * X.height);
          h === void 0 && (h = v(at, rt));
          let K = g ? v(at, rt) : h;
          return (
            (K.width = at),
            (K.height = rt),
            K.getContext("2d").drawImage(R, 0, 0, at, rt),
            Ht(
              "WebGLRenderer: Texture has been resized from (" +
                X.width +
                "x" +
                X.height +
                ") to (" +
                at +
                "x" +
                rt +
                ").",
            ),
            K
          );
        } else
          return (
            "data" in R && Ht("WebGLRenderer: Image in DataTexture is too big (" + X.width + "x" + X.height + ")."),
            R
          );
      return R;
    }
    function p(R) {
      return R.generateMipmaps;
    }
    function y(R) {
      n.generateMipmap(R);
    }
    function Q(R) {
      return R.isWebGLCubeRenderTarget
        ? n.TEXTURE_CUBE_MAP
        : R.isWebGL3DRenderTarget
          ? n.TEXTURE_3D
          : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture
            ? n.TEXTURE_2D_ARRAY
            : n.TEXTURE_2D;
    }
    function S(R, g, H, $, X, at = !1) {
      if (R !== null) {
        if (n[R] !== void 0) return n[R];
        Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
      }
      let rt;
      $ &&
        ((rt = t.get("EXT_texture_norm16")),
        rt || Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
      let K = g;
      if (
        (g === n.RED &&
          (H === n.FLOAT && (K = n.R32F),
          H === n.HALF_FLOAT && (K = n.R16F),
          H === n.UNSIGNED_BYTE && (K = n.R8),
          H === n.UNSIGNED_SHORT && rt && (K = rt.R16_EXT),
          H === n.SHORT && rt && (K = rt.R16_SNORM_EXT)),
        g === n.RED_INTEGER &&
          (H === n.UNSIGNED_BYTE && (K = n.R8UI),
          H === n.UNSIGNED_SHORT && (K = n.R16UI),
          H === n.UNSIGNED_INT && (K = n.R32UI),
          H === n.BYTE && (K = n.R8I),
          H === n.SHORT && (K = n.R16I),
          H === n.INT && (K = n.R32I)),
        g === n.RG &&
          (H === n.FLOAT && (K = n.RG32F),
          H === n.HALF_FLOAT && (K = n.RG16F),
          H === n.UNSIGNED_BYTE && (K = n.RG8),
          H === n.UNSIGNED_SHORT && rt && (K = rt.RG16_EXT),
          H === n.SHORT && rt && (K = rt.RG16_SNORM_EXT)),
        g === n.RG_INTEGER &&
          (H === n.UNSIGNED_BYTE && (K = n.RG8UI),
          H === n.UNSIGNED_SHORT && (K = n.RG16UI),
          H === n.UNSIGNED_INT && (K = n.RG32UI),
          H === n.BYTE && (K = n.RG8I),
          H === n.SHORT && (K = n.RG16I),
          H === n.INT && (K = n.RG32I)),
        g === n.RGB_INTEGER &&
          (H === n.UNSIGNED_BYTE && (K = n.RGB8UI),
          H === n.UNSIGNED_SHORT && (K = n.RGB16UI),
          H === n.UNSIGNED_INT && (K = n.RGB32UI),
          H === n.BYTE && (K = n.RGB8I),
          H === n.SHORT && (K = n.RGB16I),
          H === n.INT && (K = n.RGB32I)),
        g === n.RGBA_INTEGER &&
          (H === n.UNSIGNED_BYTE && (K = n.RGBA8UI),
          H === n.UNSIGNED_SHORT && (K = n.RGBA16UI),
          H === n.UNSIGNED_INT && (K = n.RGBA32UI),
          H === n.BYTE && (K = n.RGBA8I),
          H === n.SHORT && (K = n.RGBA16I),
          H === n.INT && (K = n.RGBA32I)),
        g === n.RGB &&
          (H === n.UNSIGNED_SHORT && rt && (K = rt.RGB16_EXT),
          H === n.SHORT && rt && (K = rt.RGB16_SNORM_EXT),
          H === n.UNSIGNED_INT_5_9_9_9_REV && (K = n.RGB9_E5),
          H === n.UNSIGNED_INT_10F_11F_11F_REV && (K = n.R11F_G11F_B10F)),
        g === n.RGBA)
      ) {
        let j = at ? Qs : Yt.getTransfer(X);
        (H === n.FLOAT && (K = n.RGBA32F),
          H === n.HALF_FLOAT && (K = n.RGBA16F),
          H === n.UNSIGNED_BYTE && (K = j === oe ? n.SRGB8_ALPHA8 : n.RGBA8),
          H === n.UNSIGNED_SHORT && rt && (K = rt.RGBA16_EXT),
          H === n.SHORT && rt && (K = rt.RGBA16_SNORM_EXT),
          H === n.UNSIGNED_SHORT_4_4_4_4 && (K = n.RGBA4),
          H === n.UNSIGNED_SHORT_5_5_5_1 && (K = n.RGB5_A1));
      }
      return (
        (K === n.R16F || K === n.R32F || K === n.RG16F || K === n.RG32F || K === n.RGBA16F || K === n.RGBA32F) &&
          t.get("EXT_color_buffer_float"),
        K
      );
    }
    function M(R, g) {
      let H;
      return (
        R
          ? g === null || g === mi || g === os
            ? (H = n.DEPTH24_STENCIL8)
            : g === Ke
              ? (H = n.DEPTH32F_STENCIL8)
              : g === as &&
                ((H = n.DEPTH24_STENCIL8),
                Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."))
          : g === null || g === mi || g === os
            ? (H = n.DEPTH_COMPONENT24)
            : g === Ke
              ? (H = n.DEPTH_COMPONENT32F)
              : g === as && (H = n.DEPTH_COMPONENT16),
        H
      );
    }
    function P(R, g) {
      return p(R) === !0 || (R.isFramebufferTexture && R.minFilter !== Ce && R.minFilter !== Qe)
        ? Math.log2(Math.max(g.width, g.height)) + 1
        : R.mipmaps !== void 0 && R.mipmaps.length > 0
          ? R.mipmaps.length
          : R.isCompressedTexture && Array.isArray(R.image)
            ? g.mipmaps.length
            : 1;
    }
    function T(R) {
      let g = R.target;
      (g.removeEventListener("dispose", T), b(g), g.isVideoTexture && u.delete(g), g.isHTMLTexture && f.delete(g));
    }
    function x(R) {
      let g = R.target;
      (g.removeEventListener("dispose", x), w(g));
    }
    function b(R) {
      let g = i.get(R);
      if (g.__webglInit === void 0) return;
      let H = R.source,
        $ = d.get(H);
      if ($) {
        let X = $[g.__cacheKey];
        (X.usedTimes--, X.usedTimes === 0 && N(R), Object.keys($).length === 0 && d.delete(H));
      }
      i.remove(R);
    }
    function N(R) {
      let g = i.get(R);
      n.deleteTexture(g.__webglTexture);
      let H = R.source,
        $ = d.get(H);
      (delete $[g.__cacheKey], a.memory.textures--);
    }
    function w(R) {
      let g = i.get(R);
      if ((R.depthTexture && (R.depthTexture.dispose(), i.remove(R.depthTexture)), R.isWebGLCubeRenderTarget))
        for (let $ = 0; $ < 6; $++) {
          if (Array.isArray(g.__webglFramebuffer[$]))
            for (let X = 0; X < g.__webglFramebuffer[$].length; X++) n.deleteFramebuffer(g.__webglFramebuffer[$][X]);
          else n.deleteFramebuffer(g.__webglFramebuffer[$]);
          g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer[$]);
        }
      else {
        if (Array.isArray(g.__webglFramebuffer))
          for (let $ = 0; $ < g.__webglFramebuffer.length; $++) n.deleteFramebuffer(g.__webglFramebuffer[$]);
        else n.deleteFramebuffer(g.__webglFramebuffer);
        if (
          (g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer),
          g.__webglMultisampledFramebuffer && n.deleteFramebuffer(g.__webglMultisampledFramebuffer),
          g.__webglColorRenderbuffer)
        )
          for (let $ = 0; $ < g.__webglColorRenderbuffer.length; $++)
            g.__webglColorRenderbuffer[$] && n.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);
        g.__webglDepthRenderbuffer && n.deleteRenderbuffer(g.__webglDepthRenderbuffer);
      }
      let H = R.textures;
      for (let $ = 0, X = H.length; $ < X; $++) {
        let at = i.get(H[$]);
        (at.__webglTexture && (n.deleteTexture(at.__webglTexture), a.memory.textures--), i.remove(H[$]));
      }
      i.remove(R);
    }
    let C = 0;
    function z() {
      C = 0;
    }
    function A() {
      return C;
    }
    function L(R) {
      C = R;
    }
    function G() {
      let R = C;
      return (
        R >= s.maxTextures &&
          Ht(
            "WebGLTextures: Trying to use " + (R + 1) + " texture units while this GPU supports only " + s.maxTextures,
          ),
        (C += 1),
        R
      );
    }
    function D(R) {
      let g = [];
      return (
        g.push(R.wrapS),
        g.push(R.wrapT),
        g.push(R.wrapR || 0),
        g.push(R.magFilter),
        g.push(R.minFilter),
        g.push(R.anisotropy),
        g.push(R.internalFormat),
        g.push(R.format),
        g.push(R.type),
        g.push(R.generateMipmaps),
        g.push(R.premultiplyAlpha),
        g.push(R.flipY),
        g.push(R.unpackAlignment),
        g.push(R.colorSpace),
        g.join()
      );
    }
    function et(R, g) {
      let H = i.get(R);
      if (
        (R.isVideoTexture && I(R),
        R.isRenderTargetTexture === !1 && R.isExternalTexture !== !0 && R.version > 0 && H.__version !== R.version)
      ) {
        let $ = R.image;
        if ($ === null) Ht("WebGLRenderer: Texture marked for update but no image data found.");
        else if ($.complete === !1) Ht("WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          xt(H, R, g);
          return;
        }
      } else R.isExternalTexture && (H.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
      e.bindTexture(n.TEXTURE_2D, H.__webglTexture, n.TEXTURE0 + g);
    }
    function J(R, g) {
      let H = i.get(R);
      if (R.isRenderTargetTexture === !1 && R.version > 0 && H.__version !== R.version) {
        xt(H, R, g);
        return;
      } else R.isExternalTexture && (H.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
      e.bindTexture(n.TEXTURE_2D_ARRAY, H.__webglTexture, n.TEXTURE0 + g);
    }
    function Y(R, g) {
      let H = i.get(R);
      if (R.isRenderTargetTexture === !1 && R.version > 0 && H.__version !== R.version) {
        xt(H, R, g);
        return;
      }
      e.bindTexture(n.TEXTURE_3D, H.__webglTexture, n.TEXTURE0 + g);
    }
    function it(R, g) {
      let H = i.get(R);
      if (R.isCubeDepthTexture !== !0 && R.version > 0 && H.__version !== R.version) {
        Ut(H, R, g);
        return;
      }
      e.bindTexture(n.TEXTURE_CUBE_MAP, H.__webglTexture, n.TEXTURE0 + g);
    }
    let ft = { [gn]: n.REPEAT, [Si]: n.CLAMP_TO_EDGE, [Zr]: n.MIRRORED_REPEAT },
      ct = {
        [Ce]: n.NEAREST,
        [Mh]: n.NEAREST_MIPMAP_NEAREST,
        [tr]: n.NEAREST_MIPMAP_LINEAR,
        [Qe]: n.LINEAR,
        [Pa]: n.LINEAR_MIPMAP_NEAREST,
        [an]: n.LINEAR_MIPMAP_LINEAR,
      },
      ee = {
        [Qh]: n.NEVER,
        [Fh]: n.ALWAYS,
        [Rh]: n.LESS,
        [co]: n.LEQUAL,
        [Th]: n.EQUAL,
        [lo]: n.GEQUAL,
        [Ih]: n.GREATER,
        [Ah]: n.NOTEQUAL,
      };
    function Dt(R, g) {
      if (
        (g.type === Ke &&
          t.has("OES_texture_float_linear") === !1 &&
          (g.magFilter === Qe ||
            g.magFilter === Pa ||
            g.magFilter === tr ||
            g.magFilter === an ||
            g.minFilter === Qe ||
            g.minFilter === Pa ||
            g.minFilter === tr ||
            g.minFilter === an) &&
          Ht(
            "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
          ),
        n.texParameteri(R, n.TEXTURE_WRAP_S, ft[g.wrapS]),
        n.texParameteri(R, n.TEXTURE_WRAP_T, ft[g.wrapT]),
        (R === n.TEXTURE_3D || R === n.TEXTURE_2D_ARRAY) && n.texParameteri(R, n.TEXTURE_WRAP_R, ft[g.wrapR]),
        n.texParameteri(R, n.TEXTURE_MAG_FILTER, ct[g.magFilter]),
        n.texParameteri(R, n.TEXTURE_MIN_FILTER, ct[g.minFilter]),
        g.compareFunction &&
          (n.texParameteri(R, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE),
          n.texParameteri(R, n.TEXTURE_COMPARE_FUNC, ee[g.compareFunction])),
        t.has("EXT_texture_filter_anisotropic") === !0)
      ) {
        if (
          g.magFilter === Ce ||
          (g.minFilter !== tr && g.minFilter !== an) ||
          (g.type === Ke && t.has("OES_texture_float_linear") === !1)
        )
          return;
        if (g.anisotropy > 1 || i.get(g).__currentAnisotropy) {
          let H = t.get("EXT_texture_filter_anisotropic");
          (n.texParameterf(R, H.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, s.getMaxAnisotropy())),
            (i.get(g).__currentAnisotropy = g.anisotropy));
        }
      }
    }
    function yt(R, g) {
      let H = !1;
      R.__webglInit === void 0 && ((R.__webglInit = !0), g.addEventListener("dispose", T));
      let $ = g.source,
        X = d.get($);
      X === void 0 && ((X = {}), d.set($, X));
      let at = D(g);
      if (at !== R.__cacheKey) {
        (X[at] === void 0 && ((X[at] = { texture: n.createTexture(), usedTimes: 0 }), a.memory.textures++, (H = !0)),
          X[at].usedTimes++);
        let rt = X[R.__cacheKey];
        (rt !== void 0 && (X[R.__cacheKey].usedTimes--, rt.usedTimes === 0 && N(g)),
          (R.__cacheKey = at),
          (R.__webglTexture = X[at].texture));
      }
      return H;
    }
    function W(R, g, H) {
      return Math.floor(Math.floor(R / H) / g);
    }
    function Z(R, g, H, $) {
      let at = R.updateRanges;
      if (at.length === 0) e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, g.width, g.height, H, $, g.data);
      else {
        at.sort((bt, dt) => bt.start - dt.start);
        let rt = 0;
        for (let bt = 1; bt < at.length; bt++) {
          let dt = at[rt],
            ht = at[bt],
            It = dt.start + dt.count,
            wt = W(ht.start, g.width, 4),
            zt = W(dt.start, g.width, 4);
          ht.start <= It + 1 && wt === zt && W(ht.start + ht.count - 1, g.width, 4) === wt
            ? (dt.count = Math.max(dt.count, ht.start + ht.count - dt.start))
            : (++rt, (at[rt] = ht));
        }
        at.length = rt + 1;
        let K = e.getParameter(n.UNPACK_ROW_LENGTH),
          j = e.getParameter(n.UNPACK_SKIP_PIXELS),
          lt = e.getParameter(n.UNPACK_SKIP_ROWS);
        e.pixelStorei(n.UNPACK_ROW_LENGTH, g.width);
        for (let bt = 0, dt = at.length; bt < dt; bt++) {
          let ht = at[bt],
            It = Math.floor(ht.start / 4),
            wt = Math.ceil(ht.count / 4),
            zt = It % g.width,
            U = Math.floor(It / g.width),
            ut = wt,
            tt = 1;
          (e.pixelStorei(n.UNPACK_SKIP_PIXELS, zt),
            e.pixelStorei(n.UNPACK_SKIP_ROWS, U),
            e.texSubImage2D(n.TEXTURE_2D, 0, zt, U, ut, tt, H, $, g.data));
        }
        (R.clearUpdateRanges(),
          e.pixelStorei(n.UNPACK_ROW_LENGTH, K),
          e.pixelStorei(n.UNPACK_SKIP_PIXELS, j),
          e.pixelStorei(n.UNPACK_SKIP_ROWS, lt));
      }
    }
    function xt(R, g, H) {
      let $ = n.TEXTURE_2D;
      ((g.isDataArrayTexture || g.isCompressedArrayTexture) && ($ = n.TEXTURE_2D_ARRAY),
        g.isData3DTexture && ($ = n.TEXTURE_3D));
      let X = yt(R, g),
        at = g.source;
      e.bindTexture($, R.__webglTexture, n.TEXTURE0 + H);
      let rt = i.get(at);
      if (at.version !== rt.__version || X === !0) {
        if ((e.activeTexture(n.TEXTURE0 + H), (typeof ImageBitmap < "u" && g.image instanceof ImageBitmap) === !1)) {
          let tt = Yt.getPrimaries(Yt.workingColorSpace),
            mt = g.colorSpace === $i ? null : Yt.getPrimaries(g.colorSpace),
            Mt = g.colorSpace === $i || tt === mt ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
          (e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY),
            e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
            e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Mt));
        }
        e.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment);
        let j = m(g.image, !1, s.maxTextureSize);
        j = ot(g, j);
        let lt = r.convert(g.format, g.colorSpace),
          bt = r.convert(g.type),
          dt = S(g.internalFormat, lt, bt, g.normalized, g.colorSpace, g.isVideoTexture);
        Dt($, g);
        let ht,
          It = g.mipmaps,
          wt = g.isVideoTexture !== !0,
          zt = rt.__version === void 0 || X === !0,
          U = at.dataReady,
          ut = P(g, j);
        if (g.isDepthTexture)
          ((dt = M(g.format === on, g.type)),
            zt &&
              (wt
                ? e.texStorage2D(n.TEXTURE_2D, 1, dt, j.width, j.height)
                : e.texImage2D(n.TEXTURE_2D, 0, dt, j.width, j.height, 0, lt, bt, null)));
        else if (g.isDataTexture)
          if (It.length > 0) {
            wt && zt && e.texStorage2D(n.TEXTURE_2D, ut, dt, It[0].width, It[0].height);
            for (let tt = 0, mt = It.length; tt < mt; tt++)
              ((ht = It[tt]),
                wt
                  ? U && e.texSubImage2D(n.TEXTURE_2D, tt, 0, 0, ht.width, ht.height, lt, bt, ht.data)
                  : e.texImage2D(n.TEXTURE_2D, tt, dt, ht.width, ht.height, 0, lt, bt, ht.data));
            g.generateMipmaps = !1;
          } else
            wt
              ? (zt && e.texStorage2D(n.TEXTURE_2D, ut, dt, j.width, j.height), U && Z(g, j, lt, bt))
              : e.texImage2D(n.TEXTURE_2D, 0, dt, j.width, j.height, 0, lt, bt, j.data);
        else if (g.isCompressedTexture)
          if (g.isCompressedArrayTexture) {
            wt && zt && e.texStorage3D(n.TEXTURE_2D_ARRAY, ut, dt, It[0].width, It[0].height, j.depth);
            for (let tt = 0, mt = It.length; tt < mt; tt++)
              if (((ht = It[tt]), g.format !== qe))
                if (lt !== null)
                  if (wt) {
                    if (U)
                      if (g.layerUpdates.size > 0) {
                        let Mt = zc(ht.width, ht.height, g.format, g.type);
                        for (let st of g.layerUpdates) {
                          let Nt = ht.data.subarray(
                            (st * Mt) / ht.data.BYTES_PER_ELEMENT,
                            ((st + 1) * Mt) / ht.data.BYTES_PER_ELEMENT,
                          );
                          e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, tt, 0, 0, st, ht.width, ht.height, 1, lt, Nt);
                        }
                      } else
                        e.compressedTexSubImage3D(
                          n.TEXTURE_2D_ARRAY,
                          tt,
                          0,
                          0,
                          0,
                          ht.width,
                          ht.height,
                          j.depth,
                          lt,
                          ht.data,
                        );
                  } else
                    e.compressedTexImage3D(n.TEXTURE_2D_ARRAY, tt, dt, ht.width, ht.height, j.depth, 0, ht.data, 0, 0);
                else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              else
                wt
                  ? U && e.texSubImage3D(n.TEXTURE_2D_ARRAY, tt, 0, 0, 0, ht.width, ht.height, j.depth, lt, bt, ht.data)
                  : e.texImage3D(n.TEXTURE_2D_ARRAY, tt, dt, ht.width, ht.height, j.depth, 0, lt, bt, ht.data);
            g.layerUpdates.size > 0 && g.clearLayerUpdates();
          } else {
            wt && zt && e.texStorage2D(n.TEXTURE_2D, ut, dt, It[0].width, It[0].height);
            for (let tt = 0, mt = It.length; tt < mt; tt++)
              ((ht = It[tt]),
                g.format !== qe
                  ? lt !== null
                    ? wt
                      ? U && e.compressedTexSubImage2D(n.TEXTURE_2D, tt, 0, 0, ht.width, ht.height, lt, ht.data)
                      : e.compressedTexImage2D(n.TEXTURE_2D, tt, dt, ht.width, ht.height, 0, ht.data)
                    : Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")
                  : wt
                    ? U && e.texSubImage2D(n.TEXTURE_2D, tt, 0, 0, ht.width, ht.height, lt, bt, ht.data)
                    : e.texImage2D(n.TEXTURE_2D, tt, dt, ht.width, ht.height, 0, lt, bt, ht.data));
          }
        else if (g.isDataArrayTexture)
          if (wt) {
            if ((zt && e.texStorage3D(n.TEXTURE_2D_ARRAY, ut, dt, j.width, j.height, j.depth), U))
              if (g.layerUpdates.size > 0) {
                let tt = zc(j.width, j.height, g.format, g.type);
                for (let mt of g.layerUpdates) {
                  let Mt = j.data.subarray(
                    (mt * tt) / j.data.BYTES_PER_ELEMENT,
                    ((mt + 1) * tt) / j.data.BYTES_PER_ELEMENT,
                  );
                  e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, mt, j.width, j.height, 1, lt, bt, Mt);
                }
                g.clearLayerUpdates();
              } else e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, lt, bt, j.data);
          } else e.texImage3D(n.TEXTURE_2D_ARRAY, 0, dt, j.width, j.height, j.depth, 0, lt, bt, j.data);
        else if (g.isData3DTexture)
          wt
            ? (zt && e.texStorage3D(n.TEXTURE_3D, ut, dt, j.width, j.height, j.depth),
              U && e.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, lt, bt, j.data))
            : e.texImage3D(n.TEXTURE_3D, 0, dt, j.width, j.height, j.depth, 0, lt, bt, j.data);
        else if (g.isFramebufferTexture) {
          if (zt)
            if (wt) e.texStorage2D(n.TEXTURE_2D, ut, dt, j.width, j.height);
            else {
              let tt = j.width,
                mt = j.height;
              for (let Mt = 0; Mt < ut; Mt++)
                (e.texImage2D(n.TEXTURE_2D, Mt, dt, tt, mt, 0, lt, bt, null), (tt >>= 1), (mt >>= 1));
            }
        } else if (g.isHTMLTexture) {
          if ("texElementImage2D" in n) {
            let tt = n.canvas;
            if ((tt.hasAttribute("layoutsubtree") || tt.setAttribute("layoutsubtree", "true"), j.parentNode !== tt)) {
              (tt.appendChild(j),
                f.add(g),
                (tt.onpaint = (mt) => {
                  let Mt = mt.changedElements;
                  for (let st of f) Mt.includes(st.image) && (st.needsUpdate = !0);
                }),
                tt.requestPaint());
              return;
            }
            if (n.texElementImage2D.length === 3) n.texElementImage2D(n.TEXTURE_2D, n.RGBA8, j);
            else {
              let Mt = n.RGBA,
                st = n.RGBA,
                Nt = n.UNSIGNED_BYTE;
              n.texElementImage2D(n.TEXTURE_2D, 0, Mt, st, Nt, j);
            }
            (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR),
              n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE),
              n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE));
          }
        } else if (It.length > 0) {
          if (wt && zt) {
            let tt = St(It[0]);
            e.texStorage2D(n.TEXTURE_2D, ut, dt, tt.width, tt.height);
          }
          for (let tt = 0, mt = It.length; tt < mt; tt++)
            ((ht = It[tt]),
              wt
                ? U && e.texSubImage2D(n.TEXTURE_2D, tt, 0, 0, lt, bt, ht)
                : e.texImage2D(n.TEXTURE_2D, tt, dt, lt, bt, ht));
          g.generateMipmaps = !1;
        } else if (wt) {
          if (zt) {
            let tt = St(j);
            e.texStorage2D(n.TEXTURE_2D, ut, dt, tt.width, tt.height);
          }
          U && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, lt, bt, j);
        } else e.texImage2D(n.TEXTURE_2D, 0, dt, lt, bt, j);
        (p(g) && y($), (rt.__version = at.version), g.onUpdate && g.onUpdate(g));
      }
      R.__version = g.version;
    }
    function Ut(R, g, H) {
      if (g.image.length !== 6) return;
      let $ = yt(R, g),
        X = g.source;
      e.bindTexture(n.TEXTURE_CUBE_MAP, R.__webglTexture, n.TEXTURE0 + H);
      let at = i.get(X);
      if (X.version !== at.__version || $ === !0) {
        e.activeTexture(n.TEXTURE0 + H);
        let rt = Yt.getPrimaries(Yt.workingColorSpace),
          K = g.colorSpace === $i ? null : Yt.getPrimaries(g.colorSpace),
          j = g.colorSpace === $i || rt === K ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
        (e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY),
          e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
          e.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment),
          e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, j));
        let lt = g.isCompressedTexture || g.image[0].isCompressedTexture,
          bt = g.image[0] && g.image[0].isDataTexture,
          dt = [];
        for (let st = 0; st < 6; st++)
          (!lt && !bt
            ? (dt[st] = m(g.image[st], !0, s.maxCubemapSize))
            : (dt[st] = bt ? g.image[st].image : g.image[st]),
            (dt[st] = ot(g, dt[st])));
        let ht = dt[0],
          It = r.convert(g.format, g.colorSpace),
          wt = r.convert(g.type),
          zt = S(g.internalFormat, It, wt, g.normalized, g.colorSpace),
          U = g.isVideoTexture !== !0,
          ut = at.__version === void 0 || $ === !0,
          tt = X.dataReady,
          mt = P(g, ht);
        Dt(n.TEXTURE_CUBE_MAP, g);
        let Mt;
        if (lt) {
          U && ut && e.texStorage2D(n.TEXTURE_CUBE_MAP, mt, zt, ht.width, ht.height);
          for (let st = 0; st < 6; st++) {
            Mt = dt[st].mipmaps;
            for (let Nt = 0; Nt < Mt.length; Nt++) {
              let At = Mt[Nt];
              g.format !== qe
                ? It !== null
                  ? U
                    ? tt &&
                      e.compressedTexSubImage2D(
                        n.TEXTURE_CUBE_MAP_POSITIVE_X + st,
                        Nt,
                        0,
                        0,
                        At.width,
                        At.height,
                        It,
                        At.data,
                      )
                    : e.compressedTexImage2D(
                        n.TEXTURE_CUBE_MAP_POSITIVE_X + st,
                        Nt,
                        zt,
                        At.width,
                        At.height,
                        0,
                        At.data,
                      )
                  : Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()")
                : U
                  ? tt &&
                    e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + st, Nt, 0, 0, At.width, At.height, It, wt, At.data)
                  : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + st, Nt, zt, At.width, At.height, 0, It, wt, At.data);
            }
          }
        } else {
          if (((Mt = g.mipmaps), U && ut)) {
            Mt.length > 0 && mt++;
            let st = St(dt[0]);
            e.texStorage2D(n.TEXTURE_CUBE_MAP, mt, zt, st.width, st.height);
          }
          for (let st = 0; st < 6; st++)
            if (bt) {
              U
                ? tt &&
                  e.texSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + st,
                    0,
                    0,
                    0,
                    dt[st].width,
                    dt[st].height,
                    It,
                    wt,
                    dt[st].data,
                  )
                : e.texImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + st,
                    0,
                    zt,
                    dt[st].width,
                    dt[st].height,
                    0,
                    It,
                    wt,
                    dt[st].data,
                  );
              for (let Nt = 0; Nt < Mt.length; Nt++) {
                let de = Mt[Nt].image[st].image;
                U
                  ? tt &&
                    e.texSubImage2D(
                      n.TEXTURE_CUBE_MAP_POSITIVE_X + st,
                      Nt + 1,
                      0,
                      0,
                      de.width,
                      de.height,
                      It,
                      wt,
                      de.data,
                    )
                  : e.texImage2D(
                      n.TEXTURE_CUBE_MAP_POSITIVE_X + st,
                      Nt + 1,
                      zt,
                      de.width,
                      de.height,
                      0,
                      It,
                      wt,
                      de.data,
                    );
              }
            } else {
              U
                ? tt && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + st, 0, 0, 0, It, wt, dt[st])
                : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + st, 0, zt, It, wt, dt[st]);
              for (let Nt = 0; Nt < Mt.length; Nt++) {
                let At = Mt[Nt];
                U
                  ? tt && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + st, Nt + 1, 0, 0, It, wt, At.image[st])
                  : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + st, Nt + 1, zt, It, wt, At.image[st]);
              }
            }
        }
        (p(g) && y(n.TEXTURE_CUBE_MAP), (at.__version = X.version), g.onUpdate && g.onUpdate(g));
      }
      R.__version = g.version;
    }
    function pt(R, g, H, $, X, at) {
      let rt = r.convert(H.format, H.colorSpace),
        K = r.convert(H.type),
        j = S(H.internalFormat, rt, K, H.normalized, H.colorSpace),
        lt = i.get(g),
        bt = i.get(H);
      if (((bt.__renderTarget = g), !lt.__hasExternalTextures)) {
        let dt = Math.max(1, g.width >> at),
          ht = Math.max(1, g.height >> at);
        X === n.TEXTURE_3D || X === n.TEXTURE_2D_ARRAY
          ? e.texImage3D(X, at, j, dt, ht, g.depth, 0, rt, K, null)
          : e.texImage2D(X, at, j, dt, ht, 0, rt, K, null);
      }
      (e.bindFramebuffer(n.FRAMEBUFFER, R),
        nt(g)
          ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, $, X, bt.__webglTexture, 0, V(g))
          : (X === n.TEXTURE_2D || (X >= n.TEXTURE_CUBE_MAP_POSITIVE_X && X <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
            n.framebufferTexture2D(n.FRAMEBUFFER, $, X, bt.__webglTexture, at),
        e.bindFramebuffer(n.FRAMEBUFFER, null));
    }
    function Bt(R, g, H) {
      if ((n.bindRenderbuffer(n.RENDERBUFFER, R), g.depthBuffer)) {
        let $ = g.depthTexture,
          X = $ && $.isDepthTexture ? $.type : null,
          at = M(g.stencilBuffer, X),
          rt = g.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        (nt(g)
          ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, V(g), at, g.width, g.height)
          : H
            ? n.renderbufferStorageMultisample(n.RENDERBUFFER, V(g), at, g.width, g.height)
            : n.renderbufferStorage(n.RENDERBUFFER, at, g.width, g.height),
          n.framebufferRenderbuffer(n.FRAMEBUFFER, rt, n.RENDERBUFFER, R));
      } else {
        let $ = g.textures;
        for (let X = 0; X < $.length; X++) {
          let at = $[X],
            rt = r.convert(at.format, at.colorSpace),
            K = r.convert(at.type),
            j = S(at.internalFormat, rt, K, at.normalized, at.colorSpace);
          nt(g)
            ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, V(g), j, g.width, g.height)
            : H
              ? n.renderbufferStorageMultisample(n.RENDERBUFFER, V(g), j, g.width, g.height)
              : n.renderbufferStorage(n.RENDERBUFFER, j, g.width, g.height);
        }
      }
      n.bindRenderbuffer(n.RENDERBUFFER, null);
    }
    function le(R, g, H) {
      let $ = g.isWebGLCubeRenderTarget === !0;
      if ((e.bindFramebuffer(n.FRAMEBUFFER, R), !(g.depthTexture && g.depthTexture.isDepthTexture)))
        throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
      let X = i.get(g.depthTexture);
      if (
        ((X.__renderTarget = g),
        (!X.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) &&
          ((g.depthTexture.image.width = g.width),
          (g.depthTexture.image.height = g.height),
          (g.depthTexture.needsUpdate = !0)),
        $)
      ) {
        if (
          (X.__webglInit === void 0 && ((X.__webglInit = !0), g.depthTexture.addEventListener("dispose", T)),
          X.__webglTexture === void 0)
        ) {
          ((X.__webglTexture = n.createTexture()),
            e.bindTexture(n.TEXTURE_CUBE_MAP, X.__webglTexture),
            Dt(n.TEXTURE_CUBE_MAP, g.depthTexture));
          let lt = r.convert(g.depthTexture.format),
            bt = r.convert(g.depthTexture.type),
            dt;
          g.depthTexture.format === si
            ? (dt = n.DEPTH_COMPONENT24)
            : g.depthTexture.format === on && (dt = n.DEPTH24_STENCIL8);
          for (let ht = 0; ht < 6; ht++)
            n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + ht, 0, dt, g.width, g.height, 0, lt, bt, null);
        }
      } else et(g.depthTexture, 0);
      let at = X.__webglTexture,
        rt = V(g),
        K = $ ? n.TEXTURE_CUBE_MAP_POSITIVE_X + H : n.TEXTURE_2D,
        j = g.depthTexture.format === on ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
      if (g.depthTexture.format === si)
        nt(g)
          ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, j, K, at, 0, rt)
          : n.framebufferTexture2D(n.FRAMEBUFFER, j, K, at, 0);
      else if (g.depthTexture.format === on)
        nt(g)
          ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, j, K, at, 0, rt)
          : n.framebufferTexture2D(n.FRAMEBUFFER, j, K, at, 0);
      else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
    }
    function Lt(R) {
      let g = i.get(R),
        H = R.isWebGLCubeRenderTarget === !0;
      if (g.__boundDepthTexture !== R.depthTexture) {
        let $ = R.depthTexture;
        if ((g.__depthDisposeCallback && g.__depthDisposeCallback(), $)) {
          let X = () => {
            (delete g.__boundDepthTexture, delete g.__depthDisposeCallback, $.removeEventListener("dispose", X));
          };
          ($.addEventListener("dispose", X), (g.__depthDisposeCallback = X));
        }
        g.__boundDepthTexture = $;
      }
      if (R.depthTexture && !g.__autoAllocateDepthBuffer)
        if (H) for (let $ = 0; $ < 6; $++) le(g.__webglFramebuffer[$], R, $);
        else {
          let $ = R.texture.mipmaps;
          $ && $.length > 0 ? le(g.__webglFramebuffer[0], R, 0) : le(g.__webglFramebuffer, R, 0);
        }
      else if (H) {
        g.__webglDepthbuffer = [];
        for (let $ = 0; $ < 6; $++)
          if ((e.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[$]), g.__webglDepthbuffer[$] === void 0))
            ((g.__webglDepthbuffer[$] = n.createRenderbuffer()), Bt(g.__webglDepthbuffer[$], R, !1));
          else {
            let X = R.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
              at = g.__webglDepthbuffer[$];
            (n.bindRenderbuffer(n.RENDERBUFFER, at), n.framebufferRenderbuffer(n.FRAMEBUFFER, X, n.RENDERBUFFER, at));
          }
      } else {
        let $ = R.texture.mipmaps;
        if (
          ($ && $.length > 0
            ? e.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[0])
            : e.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer),
          g.__webglDepthbuffer === void 0)
        )
          ((g.__webglDepthbuffer = n.createRenderbuffer()), Bt(g.__webglDepthbuffer, R, !1));
        else {
          let X = R.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
            at = g.__webglDepthbuffer;
          (n.bindRenderbuffer(n.RENDERBUFFER, at), n.framebufferRenderbuffer(n.FRAMEBUFFER, X, n.RENDERBUFFER, at));
        }
      }
      e.bindFramebuffer(n.FRAMEBUFFER, null);
    }
    function qt(R, g, H) {
      let $ = i.get(R);
      (g !== void 0 && pt($.__webglFramebuffer, R, R.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0),
        H !== void 0 && Lt(R));
    }
    function Xt(R) {
      let g = R.texture,
        H = i.get(R),
        $ = i.get(g);
      R.addEventListener("dispose", x);
      let X = R.textures,
        at = R.isWebGLCubeRenderTarget === !0,
        rt = X.length > 1;
      if (
        (rt ||
          ($.__webglTexture === void 0 && ($.__webglTexture = n.createTexture()),
          ($.__version = g.version),
          a.memory.textures++),
        at)
      ) {
        H.__webglFramebuffer = [];
        for (let K = 0; K < 6; K++)
          if (g.mipmaps && g.mipmaps.length > 0) {
            H.__webglFramebuffer[K] = [];
            for (let j = 0; j < g.mipmaps.length; j++) H.__webglFramebuffer[K][j] = n.createFramebuffer();
          } else H.__webglFramebuffer[K] = n.createFramebuffer();
      } else {
        if (g.mipmaps && g.mipmaps.length > 0) {
          H.__webglFramebuffer = [];
          for (let K = 0; K < g.mipmaps.length; K++) H.__webglFramebuffer[K] = n.createFramebuffer();
        } else H.__webglFramebuffer = n.createFramebuffer();
        if (rt)
          for (let K = 0, j = X.length; K < j; K++) {
            let lt = i.get(X[K]);
            lt.__webglTexture === void 0 && ((lt.__webglTexture = n.createTexture()), a.memory.textures++);
          }
        if (R.samples > 0 && nt(R) === !1) {
          ((H.__webglMultisampledFramebuffer = n.createFramebuffer()),
            (H.__webglColorRenderbuffer = []),
            e.bindFramebuffer(n.FRAMEBUFFER, H.__webglMultisampledFramebuffer));
          for (let K = 0; K < X.length; K++) {
            let j = X[K];
            ((H.__webglColorRenderbuffer[K] = n.createRenderbuffer()),
              n.bindRenderbuffer(n.RENDERBUFFER, H.__webglColorRenderbuffer[K]));
            let lt = r.convert(j.format, j.colorSpace),
              bt = r.convert(j.type),
              dt = S(j.internalFormat, lt, bt, j.normalized, j.colorSpace, R.isXRRenderTarget === !0),
              ht = V(R);
            (n.renderbufferStorageMultisample(n.RENDERBUFFER, ht, dt, R.width, R.height),
              n.framebufferRenderbuffer(
                n.FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + K,
                n.RENDERBUFFER,
                H.__webglColorRenderbuffer[K],
              ));
          }
          (n.bindRenderbuffer(n.RENDERBUFFER, null),
            R.depthBuffer &&
              ((H.__webglDepthRenderbuffer = n.createRenderbuffer()), Bt(H.__webglDepthRenderbuffer, R, !0)),
            e.bindFramebuffer(n.FRAMEBUFFER, null));
        }
      }
      if (at) {
        (e.bindTexture(n.TEXTURE_CUBE_MAP, $.__webglTexture), Dt(n.TEXTURE_CUBE_MAP, g));
        for (let K = 0; K < 6; K++)
          if (g.mipmaps && g.mipmaps.length > 0)
            for (let j = 0; j < g.mipmaps.length; j++)
              pt(H.__webglFramebuffer[K][j], R, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + K, j);
          else pt(H.__webglFramebuffer[K], R, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0);
        (p(g) && y(n.TEXTURE_CUBE_MAP), e.unbindTexture());
      } else if (rt) {
        for (let K = 0, j = X.length; K < j; K++) {
          let lt = X[K],
            bt = i.get(lt),
            dt = n.TEXTURE_2D;
          ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
            (dt = R.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
            e.bindTexture(dt, bt.__webglTexture),
            Dt(dt, lt),
            pt(H.__webglFramebuffer, R, lt, n.COLOR_ATTACHMENT0 + K, dt, 0),
            p(lt) && y(dt));
        }
        e.unbindTexture();
      } else {
        let K = n.TEXTURE_2D;
        if (
          ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
            (K = R.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
          e.bindTexture(K, $.__webglTexture),
          Dt(K, g),
          g.mipmaps && g.mipmaps.length > 0)
        )
          for (let j = 0; j < g.mipmaps.length; j++) pt(H.__webglFramebuffer[j], R, g, n.COLOR_ATTACHMENT0, K, j);
        else pt(H.__webglFramebuffer, R, g, n.COLOR_ATTACHMENT0, K, 0);
        (p(g) && y(K), e.unbindTexture());
      }
      R.depthBuffer && Lt(R);
    }
    function $t(R) {
      let g = R.textures;
      for (let H = 0, $ = g.length; H < $; H++) {
        let X = g[H];
        if (p(X)) {
          let at = Q(R),
            rt = i.get(X).__webglTexture;
          (e.bindTexture(at, rt), y(at), e.unbindTexture());
        }
      }
    }
    let Zt = [],
      ge = [];
    function Ie(R) {
      if (R.samples > 0) {
        if (nt(R) === !1) {
          let g = R.textures,
            H = R.width,
            $ = R.height,
            X = n.COLOR_BUFFER_BIT,
            at = R.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
            rt = i.get(R),
            K = g.length > 1;
          if (K)
            for (let lt = 0; lt < g.length; lt++)
              (e.bindFramebuffer(n.FRAMEBUFFER, rt.__webglMultisampledFramebuffer),
                n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + lt, n.RENDERBUFFER, null),
                e.bindFramebuffer(n.FRAMEBUFFER, rt.__webglFramebuffer),
                n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + lt, n.TEXTURE_2D, null, 0));
          e.bindFramebuffer(n.READ_FRAMEBUFFER, rt.__webglMultisampledFramebuffer);
          let j = R.texture.mipmaps;
          j && j.length > 0
            ? e.bindFramebuffer(n.DRAW_FRAMEBUFFER, rt.__webglFramebuffer[0])
            : e.bindFramebuffer(n.DRAW_FRAMEBUFFER, rt.__webglFramebuffer);
          for (let lt = 0; lt < g.length; lt++) {
            if (
              (R.resolveDepthBuffer &&
                (R.depthBuffer && (X |= n.DEPTH_BUFFER_BIT),
                R.stencilBuffer && R.resolveStencilBuffer && (X |= n.STENCIL_BUFFER_BIT)),
              K)
            ) {
              n.framebufferRenderbuffer(
                n.READ_FRAMEBUFFER,
                n.COLOR_ATTACHMENT0,
                n.RENDERBUFFER,
                rt.__webglColorRenderbuffer[lt],
              );
              let bt = i.get(g[lt]).__webglTexture;
              n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, bt, 0);
            }
            (n.blitFramebuffer(0, 0, H, $, 0, 0, H, $, X, n.NEAREST),
              l === !0 &&
                ((Zt.length = 0),
                (ge.length = 0),
                Zt.push(n.COLOR_ATTACHMENT0 + lt),
                R.depthBuffer &&
                  R.storeMultisampledDepthBuffer === !1 &&
                  (Zt.push(at), ge.push(at), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, ge)),
                n.invalidateFramebuffer(n.READ_FRAMEBUFFER, Zt)));
          }
          if ((e.bindFramebuffer(n.READ_FRAMEBUFFER, null), e.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), K))
            for (let lt = 0; lt < g.length; lt++) {
              (e.bindFramebuffer(n.FRAMEBUFFER, rt.__webglMultisampledFramebuffer),
                n.framebufferRenderbuffer(
                  n.FRAMEBUFFER,
                  n.COLOR_ATTACHMENT0 + lt,
                  n.RENDERBUFFER,
                  rt.__webglColorRenderbuffer[lt],
                ));
              let bt = i.get(g[lt]).__webglTexture;
              (e.bindFramebuffer(n.FRAMEBUFFER, rt.__webglFramebuffer),
                n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + lt, n.TEXTURE_2D, bt, 0));
            }
          e.bindFramebuffer(n.DRAW_FRAMEBUFFER, rt.__webglMultisampledFramebuffer);
        } else if (R.depthBuffer && R.storeMultisampledDepthBuffer === !1 && l) {
          let g = R.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
          n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [g]);
        }
      }
    }
    function V(R) {
      return Math.min(s.maxSamples, R.samples);
    }
    function nt(R) {
      let g = i.get(R);
      return R.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
    }
    function I(R) {
      let g = a.render.frame;
      u.get(R) !== g && (u.set(R, g), R.update());
    }
    function ot(R, g) {
      let H = R.colorSpace,
        $ = R.format,
        X = R.type;
      return (
        R.isCompressedTexture === !0 ||
          R.isVideoTexture === !0 ||
          (H !== xn &&
            H !== $i &&
            (Yt.getTransfer(H) === oe
              ? ($ !== qe || X !== He) &&
                Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")
              : Ot("WebGLTextures: Unsupported texture color space:", H))),
        g
      );
    }
    function St(R) {
      return (
        typeof HTMLImageElement < "u" && R instanceof HTMLImageElement
          ? ((c.width = R.naturalWidth || R.width), (c.height = R.naturalHeight || R.height))
          : typeof VideoFrame < "u" && R instanceof VideoFrame
            ? ((c.width = R.displayWidth), (c.height = R.displayHeight))
            : ((c.width = R.width), (c.height = R.height)),
        c
      );
    }
    ((this.allocateTextureUnit = G),
      (this.resetTextureUnits = z),
      (this.getTextureUnits = A),
      (this.setTextureUnits = L),
      (this.setTexture2D = et),
      (this.setTexture2DArray = J),
      (this.setTexture3D = Y),
      (this.setTextureCube = it),
      (this.rebindTextures = qt),
      (this.setupRenderTarget = Xt),
      (this.updateRenderTargetMipmap = $t),
      (this.updateMultisampleRenderTarget = Ie),
      (this.setupDepthRenderbuffer = Lt),
      (this.setupFrameBufferTexture = pt),
      (this.useMultisampledRTT = nt),
      (this.isReversedDepthBuffer = function () {
        return e.buffers.depth.getReversed();
      }));
  }
  function bE(n, t) {
    function e(i, s = $i) {
      let r,
        a = Yt.getTransfer(s);
      if (i === He) return n.UNSIGNED_BYTE;
      if (i === ba) return n.UNSIGNED_SHORT_4_4_4_4;
      if (i === Qa) return n.UNSIGNED_SHORT_5_5_5_1;
      if (i === Fc) return n.UNSIGNED_INT_5_9_9_9_REV;
      if (i === Nc) return n.UNSIGNED_INT_10F_11F_11F_REV;
      if (i === Ic) return n.BYTE;
      if (i === Ac) return n.SHORT;
      if (i === as) return n.UNSIGNED_SHORT;
      if (i === _a) return n.INT;
      if (i === mi) return n.UNSIGNED_INT;
      if (i === Ke) return n.FLOAT;
      if (i === Ue) return n.HALF_FLOAT;
      if (i === wc) return n.ALPHA;
      if (i === Cc) return n.RGB;
      if (i === qe) return n.RGBA;
      if (i === si) return n.DEPTH_COMPONENT;
      if (i === on) return n.DEPTH_STENCIL;
      if (i === Ra) return n.RED;
      if (i === Ta) return n.RED_INTEGER;
      if (i === cn) return n.RG;
      if (i === Ia) return n.RG_INTEGER;
      if (i === Aa) return n.RGBA_INTEGER;
      if (i === er || i === ir || i === nr || i === sr)
        if (a === oe)
          if (((r = t.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
            if (i === er) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (i === ir) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (i === nr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (i === sr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else return null;
        else if (((r = t.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
          if (i === er) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (i === ir) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (i === nr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (i === sr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else return null;
      if (i === Fa || i === Na || i === wa || i === Ca)
        if (((r = t.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
          if (i === Fa) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (i === Na) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (i === wa) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (i === Ca) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } else return null;
      if (i === Ha || i === Ua || i === Oa || i === La || i === $a || i === rr || i === za)
        if (((r = t.get("WEBGL_compressed_texture_etc")), r !== null)) {
          if (i === Ha || i === Ua) return a === oe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
          if (i === Oa) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
          if (i === La) return r.COMPRESSED_R11_EAC;
          if (i === $a) return r.COMPRESSED_SIGNED_R11_EAC;
          if (i === rr) return r.COMPRESSED_RG11_EAC;
          if (i === za) return r.COMPRESSED_SIGNED_RG11_EAC;
        } else return null;
      if (
        i === Ba ||
        i === qa ||
        i === Ga ||
        i === Va ||
        i === Da ||
        i === Ja ||
        i === ka ||
        i === Wa ||
        i === Xa ||
        i === Ka ||
        i === Za ||
        i === Ya ||
        i === ja ||
        i === to
      )
        if (((r = t.get("WEBGL_compressed_texture_astc")), r !== null)) {
          if (i === Ba) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (i === qa) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (i === Ga) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (i === Va) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (i === Da) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (i === Ja) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (i === ka) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (i === Wa) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (i === Xa) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (i === Ka) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (i === Za) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (i === Ya) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (i === ja) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (i === to) return a === oe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
        } else return null;
      if (i === eo || i === io || i === no)
        if (((r = t.get("EXT_texture_compression_bptc")), r !== null)) {
          if (i === eo) return a === oe ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          if (i === io) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
          if (i === no) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        } else return null;
      if (i === so || i === ro || i === ar || i === ao)
        if (((r = t.get("EXT_texture_compression_rgtc")), r !== null)) {
          if (i === so) return r.COMPRESSED_RED_RGTC1_EXT;
          if (i === ro) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (i === ar) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (i === ao) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        } else return null;
      return i === os ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
    }
    return { convert: e };
  }
  var QE = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
    RE = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,
    rl = class {
      constructor() {
        ((this.texture = null), (this.mesh = null), (this.depthNear = 0), (this.depthFar = 0));
      }
      init(t, e) {
        if (this.texture === null) {
          let i = new Os(t.texture);
          ((t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) &&
            ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
            (this.texture = i));
        }
      }
      getMesh(t) {
        if (this.texture !== null && this.mesh === null) {
          let e = t.cameras[0].viewport,
            i = new Se({
              vertexShader: QE,
              fragmentShader: RE,
              uniforms: {
                depthColor: { value: this.texture },
                depthWidth: { value: e.z },
                depthHeight: { value: e.w },
              },
            });
          this.mesh = new Ee(new qs(20, 20), i);
        }
        return this.mesh;
      }
      reset() {
        ((this.texture = null), (this.mesh = null));
      }
      getDepthTexture() {
        return this.texture;
      }
    },
    al = class extends yi {
      constructor(t, e) {
        super();
        let i = this,
          s = null,
          r = 1,
          a = null,
          o = "local-floor",
          l = 1,
          c = null,
          u = null,
          f = null,
          h = null,
          d = null,
          E = null,
          v = typeof XRWebGLBinding < "u",
          m = new rl(),
          p = {},
          y = e.getContextAttributes(),
          Q = null,
          S = null,
          M = [],
          P = [],
          T = new Ct(),
          x = null,
          b = null,
          N = new Oe();
        N.viewport = new ne();
        let w = new Oe();
        w.viewport = new ne();
        let C = [N, w],
          z = new va(),
          A = null,
          L = null;
        ((this.cameraAutoUpdate = !0),
          (this.enabled = !1),
          (this.isPresenting = !1),
          (this.getController = function (W) {
            let Z = M[W];
            return (Z === void 0 && ((Z = new Yn()), (M[W] = Z)), Z.getTargetRaySpace());
          }),
          (this.getControllerGrip = function (W) {
            let Z = M[W];
            return (Z === void 0 && ((Z = new Yn()), (M[W] = Z)), Z.getGripSpace());
          }),
          (this.getHand = function (W) {
            let Z = M[W];
            return (Z === void 0 && ((Z = new Yn()), (M[W] = Z)), Z.getHandSpace());
          }));
        function G(W) {
          let Z = P.indexOf(W.inputSource);
          if (Z === -1) return;
          let xt = M[Z];
          xt !== void 0 &&
            (xt.update(W.inputSource, W.frame, c || a), xt.dispatchEvent({ type: W.type, data: W.inputSource }));
        }
        function D() {
          (s.removeEventListener("select", G),
            s.removeEventListener("selectstart", G),
            s.removeEventListener("selectend", G),
            s.removeEventListener("squeeze", G),
            s.removeEventListener("squeezestart", G),
            s.removeEventListener("squeezeend", G),
            s.removeEventListener("end", D),
            s.removeEventListener("inputsourceschange", et));
          for (let W = 0; W < M.length; W++) {
            let Z = P[W];
            Z !== null && ((P[W] = null), M[W].disconnect(Z));
          }
          ((A = null), (L = null), m.reset());
          for (let W in p) delete p[W];
          if (
            (t.setRenderTarget(Q),
            (d = null),
            (h = null),
            (f = null),
            (s = null),
            (S = null),
            yt.stop(),
            (i.isPresenting = !1),
            t.setPixelRatio(x),
            t.setSize(T.width, T.height, !1),
            b !== null)
          ) {
            let W = b.camera;
            ((W.fov = b.fov), (W.zoom = b.zoom), W.updateProjectionMatrix(), (b = null));
          }
          i.dispatchEvent({ type: "sessionend" });
        }
        ((this.setFramebufferScaleFactor = function (W) {
          ((r = W), i.isPresenting === !0 && Ht("WebXRManager: Cannot change framebuffer scale while presenting."));
        }),
          (this.setReferenceSpaceType = function (W) {
            ((o = W),
              i.isPresenting === !0 && Ht("WebXRManager: Cannot change reference space type while presenting."));
          }),
          (this.getReferenceSpace = function () {
            return c || a;
          }),
          (this.setReferenceSpace = function (W) {
            c = W;
          }),
          (this.getBaseLayer = function () {
            return h !== null ? h : d;
          }),
          (this.getBinding = function () {
            return (f === null && v && (f = new XRWebGLBinding(s, e)), f);
          }),
          (this.getFrame = function () {
            return E;
          }),
          (this.getSession = function () {
            return s;
          }),
          (this.setSession = async function (W) {
            if (((s = W), s !== null)) {
              if (
                ((Q = t.getRenderTarget()),
                s.addEventListener("select", G),
                s.addEventListener("selectstart", G),
                s.addEventListener("selectend", G),
                s.addEventListener("squeeze", G),
                s.addEventListener("squeezestart", G),
                s.addEventListener("squeezeend", G),
                s.addEventListener("end", D),
                s.addEventListener("inputsourceschange", et),
                y.xrCompatible !== !0 && (await e.makeXRCompatible()),
                (x = t.getPixelRatio()),
                t.getSize(T),
                v && "createProjectionLayer" in XRWebGLBinding.prototype)
              ) {
                let xt = null,
                  Ut = null,
                  pt = null;
                y.depth &&
                  ((pt = y.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                  (xt = y.stencil ? on : si),
                  (Ut = y.stencil ? os : mi));
                let Bt = { colorFormat: e.RGBA8, depthFormat: pt, scaleFactor: r };
                ((f = this.getBinding()),
                  (h = f.createProjectionLayer(Bt)),
                  s.updateRenderState({ layers: [h] }),
                  t.setPixelRatio(1),
                  t.setSize(h.textureWidth, h.textureHeight, !1),
                  (S = new Re(h.textureWidth, h.textureHeight, {
                    format: qe,
                    type: He,
                    depthTexture: new _i(
                      h.textureWidth,
                      h.textureHeight,
                      Ut,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      xt,
                    ),
                    stencilBuffer: y.stencil,
                    colorSpace: t.outputColorSpace,
                    samples: y.antialias ? 4 : 0,
                    resolveDepthBuffer: h.ignoreDepthValues === !1,
                    resolveStencilBuffer: h.ignoreDepthValues === !1,
                    storeMultisampledDepthBuffer: h.ignoreDepthValues === !1,
                    storeMultisampledStencilBuffer: h.ignoreDepthValues === !1,
                  })));
              } else {
                let xt = {
                  antialias: y.antialias,
                  alpha: !0,
                  depth: y.depth,
                  stencil: y.stencil,
                  framebufferScaleFactor: r,
                };
                ((d = new XRWebGLLayer(s, e, xt)),
                  s.updateRenderState({ baseLayer: d }),
                  t.setPixelRatio(1),
                  t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
                  (S = new Re(d.framebufferWidth, d.framebufferHeight, {
                    format: qe,
                    type: He,
                    colorSpace: t.outputColorSpace,
                    stencilBuffer: y.stencil,
                    resolveDepthBuffer: d.ignoreDepthValues === !1,
                    resolveStencilBuffer: d.ignoreDepthValues === !1,
                    storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
                    storeMultisampledStencilBuffer: d.ignoreDepthValues === !1,
                  })));
              }
              ((S.isXRRenderTarget = !0),
                this.setFoveation(l),
                (c = null),
                (a = await s.requestReferenceSpace(o)),
                yt.setContext(s),
                yt.start(),
                (i.isPresenting = !0),
                i.dispatchEvent({ type: "sessionstart" }));
            }
          }),
          (this.getEnvironmentBlendMode = function () {
            if (s !== null) return s.environmentBlendMode;
          }),
          (this.getDepthTexture = function () {
            return m.getDepthTexture();
          }));
        function et(W) {
          for (let Z = 0; Z < W.removed.length; Z++) {
            let xt = W.removed[Z],
              Ut = P.indexOf(xt);
            Ut >= 0 && ((P[Ut] = null), M[Ut].disconnect(xt));
          }
          for (let Z = 0; Z < W.added.length; Z++) {
            let xt = W.added[Z],
              Ut = P.indexOf(xt);
            if (Ut === -1) {
              for (let Bt = 0; Bt < M.length; Bt++)
                if (Bt >= P.length) {
                  (P.push(xt), (Ut = Bt));
                  break;
                } else if (P[Bt] === null) {
                  ((P[Bt] = xt), (Ut = Bt));
                  break;
                }
              if (Ut === -1) break;
            }
            let pt = M[Ut];
            pt && pt.connect(xt);
          }
        }
        let J = new F(),
          Y = new F();
        function it(W, Z, xt) {
          (J.setFromMatrixPosition(Z.matrixWorld), Y.setFromMatrixPosition(xt.matrixWorld));
          let Ut = J.distanceTo(Y),
            pt = Z.projectionMatrix.elements,
            Bt = xt.projectionMatrix.elements,
            le = pt[14] / (pt[10] - 1),
            Lt = pt[14] / (pt[10] + 1),
            qt = (pt[9] + 1) / pt[5],
            Xt = (pt[9] - 1) / pt[5],
            $t = (pt[8] - 1) / pt[0],
            Zt = (Bt[8] + 1) / Bt[0],
            ge = le * $t,
            Ie = le * Zt,
            V = Ut / (-$t + Zt),
            nt = V * -$t;
          if (
            (Z.matrixWorld.decompose(W.position, W.quaternion, W.scale),
            W.translateX(nt),
            W.translateZ(V),
            W.matrixWorld.compose(W.position, W.quaternion, W.scale),
            W.matrixWorldInverse.copy(W.matrixWorld).invert(),
            pt[10] === -1)
          )
            (W.projectionMatrix.copy(Z.projectionMatrix), W.projectionMatrixInverse.copy(Z.projectionMatrixInverse));
          else {
            let I = le + V,
              ot = Lt + V,
              St = ge - nt,
              R = Ie + (Ut - nt),
              g = ((qt * Lt) / ot) * I,
              H = ((Xt * Lt) / ot) * I;
            (W.projectionMatrix.makePerspective(St, R, g, H, I, ot),
              W.projectionMatrixInverse.copy(W.projectionMatrix).invert());
          }
        }
        function ft(W, Z) {
          (Z === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(Z.matrixWorld, W.matrix),
            W.matrixWorldInverse.copy(W.matrixWorld).invert());
        }
        this.updateCamera = function (W) {
          if (s === null) return;
          let Z = W.near,
            xt = W.far;
          (m.texture !== null && (m.depthNear > 0 && (Z = m.depthNear), m.depthFar > 0 && (xt = m.depthFar)),
            (z.near = w.near = N.near = Z),
            (z.far = w.far = N.far = xt),
            (A !== z.near || L !== z.far) &&
              (s.updateRenderState({ depthNear: z.near, depthFar: z.far }), (A = z.near), (L = z.far)),
            (z.layers.mask = W.layers.mask | 6),
            (N.layers.mask = z.layers.mask & -5),
            (w.layers.mask = z.layers.mask & -3));
          let Ut = W.parent,
            pt = z.cameras;
          ft(z, Ut);
          for (let Bt = 0; Bt < pt.length; Bt++) ft(pt[Bt], Ut);
          (pt.length === 2 ? it(z, N, w) : z.projectionMatrix.copy(N.projectionMatrix),
            b === null && W.isPerspectiveCamera && (b = { camera: W, fov: W.fov, zoom: W.zoom }),
            ct(W, z, Ut));
        };
        function ct(W, Z, xt) {
          (xt === null
            ? W.matrix.copy(Z.matrixWorld)
            : (W.matrix.copy(xt.matrixWorld), W.matrix.invert(), W.matrix.multiply(Z.matrixWorld)),
            W.matrix.decompose(W.position, W.quaternion, W.scale),
            W.updateMatrixWorld(!0),
            W.projectionMatrix.copy(Z.projectionMatrix),
            W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),
            W.isPerspectiveCamera && ((W.fov = Rs * 2 * Math.atan(1 / W.projectionMatrix.elements[5])), (W.zoom = 1)));
        }
        ((this.getCamera = function () {
          return z;
        }),
          (this.getFoveation = function () {
            if (!(h === null && d === null)) return l;
          }),
          (this.setFoveation = function (W) {
            ((l = W),
              h !== null && (h.fixedFoveation = W),
              d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = W));
          }),
          (this.hasDepthSensing = function () {
            return m.texture !== null;
          }),
          (this.getDepthSensingMesh = function () {
            return m.getMesh(z);
          }),
          (this.getCameraTexture = function (W) {
            return p[W];
          }));
        let ee = null;
        function Dt(W, Z) {
          if (((u = Z.getViewerPose(c || a)), (E = Z), u !== null)) {
            let xt = u.views;
            d !== null && (t.setRenderTargetFramebuffer(S, d.framebuffer), t.setRenderTarget(S));
            let Ut = !1;
            xt.length !== z.cameras.length && ((z.cameras.length = 0), (Ut = !0));
            for (let Lt = 0; Lt < xt.length; Lt++) {
              let qt = xt[Lt],
                Xt = null;
              if (d !== null) Xt = d.getViewport(qt);
              else {
                let Zt = f.getViewSubImage(h, qt);
                ((Xt = Zt.viewport),
                  Lt === 0 &&
                    (t.setRenderTargetTextures(S, Zt.colorTexture, Zt.depthStencilTexture), t.setRenderTarget(S)));
              }
              let $t = C[Lt];
              ($t === void 0 && (($t = new Oe()), $t.layers.enable(Lt), ($t.viewport = new ne()), (C[Lt] = $t)),
                $t.matrix.fromArray(qt.transform.matrix),
                $t.matrix.decompose($t.position, $t.quaternion, $t.scale),
                $t.projectionMatrix.fromArray(qt.projectionMatrix),
                $t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),
                $t.viewport.set(Xt.x, Xt.y, Xt.width, Xt.height),
                Lt === 0 && (z.matrix.copy($t.matrix), z.matrix.decompose(z.position, z.quaternion, z.scale)),
                Ut === !0 && z.cameras.push($t));
            }
            let pt = s.enabledFeatures;
            if (pt && pt.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && v) {
              f = i.getBinding();
              let Lt = f.getDepthInformation(xt[0]);
              Lt && Lt.isValid && Lt.texture && m.init(Lt, s.renderState);
            }
            if (pt && pt.includes("camera-access") && v) {
              (t.state.unbindTexture(), (f = i.getBinding()));
              for (let Lt = 0; Lt < xt.length; Lt++) {
                let qt = xt[Lt].camera;
                if (qt) {
                  let Xt = p[qt];
                  Xt || ((Xt = new Os()), (p[qt] = Xt));
                  let $t = f.getCameraImage(qt);
                  Xt.sourceTexture = $t;
                }
              }
            }
          }
          for (let xt = 0; xt < M.length; xt++) {
            let Ut = P[xt],
              pt = M[xt];
            Ut !== null && pt !== void 0 && pt.update(Ut, Z, c || a);
          }
          (ee && ee(W, Z), Z.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: Z }), (E = null));
        }
        let yt = new ou();
        (yt.setAnimationLoop(Dt),
          (this.setAnimationLoop = function (W) {
            ee = W;
          }),
          (this.dispose = function () {}));
      }
    },
    TE = new Vt(),
    fu = new Gt();
  fu.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  function IE(n, t) {
    function e(m, p) {
      (m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix));
    }
    function i(m, p) {
      (p.color.getRGB(m.fogColor.value, Oc(n)),
        p.isFog
          ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
          : p.isFogExp2 && (m.fogDensity.value = p.density));
    }
    function s(m, p, y, Q, S) {
      p.isNodeMaterial
        ? (p.uniformsNeedUpdate = !1)
        : p.isMeshBasicMaterial
          ? r(m, p)
          : p.isMeshLambertMaterial
            ? (r(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity))
            : p.isMeshToonMaterial
              ? (r(m, p), f(m, p))
              : p.isMeshPhongMaterial
                ? (r(m, p), u(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity))
                : p.isMeshStandardMaterial
                  ? (r(m, p), h(m, p), p.isMeshPhysicalMaterial && d(m, p, S))
                  : p.isMeshMatcapMaterial
                    ? (r(m, p), E(m, p))
                    : p.isMeshDepthMaterial
                      ? r(m, p)
                      : p.isMeshDistanceMaterial
                        ? (r(m, p), v(m, p))
                        : p.isMeshNormalMaterial
                          ? r(m, p)
                          : p.isLineBasicMaterial
                            ? (a(m, p), p.isLineDashedMaterial && o(m, p))
                            : p.isPointsMaterial
                              ? l(m, p, y, Q)
                              : p.isSpriteMaterial
                                ? c(m, p)
                                : p.isShadowMaterial
                                  ? (m.color.value.copy(p.color), (m.opacity.value = p.opacity))
                                  : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
    }
    function r(m, p) {
      ((m.opacity.value = p.opacity),
        p.color && m.diffuse.value.copy(p.color),
        p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
        p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)),
        p.alphaMap && ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
        p.bumpMap &&
          ((m.bumpMap.value = p.bumpMap),
          e(p.bumpMap, m.bumpMapTransform),
          (m.bumpScale.value = p.bumpScale),
          p.side === Le && (m.bumpScale.value *= -1)),
        p.normalMap &&
          ((m.normalMap.value = p.normalMap),
          e(p.normalMap, m.normalMapTransform),
          m.normalScale.value.copy(p.normalScale),
          p.side === Le && m.normalScale.value.negate()),
        p.displacementMap &&
          ((m.displacementMap.value = p.displacementMap),
          e(p.displacementMap, m.displacementMapTransform),
          (m.displacementScale.value = p.displacementScale),
          (m.displacementBias.value = p.displacementBias)),
        p.emissiveMap && ((m.emissiveMap.value = p.emissiveMap), e(p.emissiveMap, m.emissiveMapTransform)),
        p.specularMap && ((m.specularMap.value = p.specularMap), e(p.specularMap, m.specularMapTransform)),
        p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
      let y = t.get(p),
        Q = y.envMap,
        S = y.envMapRotation;
      (Q &&
        ((m.envMap.value = Q),
        m.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(S)).transpose(),
        Q.isCubeTexture && Q.isRenderTargetTexture === !1 && m.envMapRotation.value.premultiply(fu),
        (m.reflectivity.value = p.reflectivity),
        (m.ior.value = p.ior),
        (m.refractionRatio.value = p.refractionRatio)),
        p.lightMap &&
          ((m.lightMap.value = p.lightMap),
          (m.lightMapIntensity.value = p.lightMapIntensity),
          e(p.lightMap, m.lightMapTransform)),
        p.aoMap &&
          ((m.aoMap.value = p.aoMap), (m.aoMapIntensity.value = p.aoMapIntensity), e(p.aoMap, m.aoMapTransform)));
    }
    function a(m, p) {
      (m.diffuse.value.copy(p.color),
        (m.opacity.value = p.opacity),
        p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)));
    }
    function o(m, p) {
      ((m.dashSize.value = p.dashSize), (m.totalSize.value = p.dashSize + p.gapSize), (m.scale.value = p.scale));
    }
    function l(m, p, y, Q) {
      (m.diffuse.value.copy(p.color),
        (m.opacity.value = p.opacity),
        (m.size.value = p.size * y),
        (m.scale.value = Q * 0.5),
        p.map && ((m.map.value = p.map), e(p.map, m.uvTransform)),
        p.alphaMap && ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
        p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    }
    function c(m, p) {
      (m.diffuse.value.copy(p.color),
        (m.opacity.value = p.opacity),
        (m.rotation.value = p.rotation),
        p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)),
        p.alphaMap && ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
        p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    }
    function u(m, p) {
      (m.specular.value.copy(p.specular), (m.shininess.value = Math.max(p.shininess, 1e-4)));
    }
    function f(m, p) {
      p.gradientMap && (m.gradientMap.value = p.gradientMap);
    }
    function h(m, p) {
      ((m.metalness.value = p.metalness),
        p.metalnessMap && ((m.metalnessMap.value = p.metalnessMap), e(p.metalnessMap, m.metalnessMapTransform)),
        (m.roughness.value = p.roughness),
        p.roughnessMap && ((m.roughnessMap.value = p.roughnessMap), e(p.roughnessMap, m.roughnessMapTransform)),
        p.envMap && (m.envMapIntensity.value = p.envMapIntensity));
    }
    function d(m, p, y) {
      ((m.ior.value = p.ior),
        p.sheen > 0 &&
          (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
          (m.sheenRoughness.value = p.sheenRoughness),
          p.sheenColorMap && ((m.sheenColorMap.value = p.sheenColorMap), e(p.sheenColorMap, m.sheenColorMapTransform)),
          p.sheenRoughnessMap &&
            ((m.sheenRoughnessMap.value = p.sheenRoughnessMap), e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
        p.clearcoat > 0 &&
          ((m.clearcoat.value = p.clearcoat),
          (m.clearcoatRoughness.value = p.clearcoatRoughness),
          p.clearcoatMap && ((m.clearcoatMap.value = p.clearcoatMap), e(p.clearcoatMap, m.clearcoatMapTransform)),
          p.clearcoatRoughnessMap &&
            ((m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
            e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
          p.clearcoatNormalMap &&
            ((m.clearcoatNormalMap.value = p.clearcoatNormalMap),
            e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
            m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
            p.side === Le && m.clearcoatNormalScale.value.negate())),
        p.dispersion > 0 && (m.dispersion.value = p.dispersion),
        p.retroreflectivity > 0 && (m.retroreflectivity.value = p.retroreflectivity),
        p.iridescence > 0 &&
          ((m.iridescence.value = p.iridescence),
          (m.iridescenceIOR.value = p.iridescenceIOR),
          (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
          (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
          p.iridescenceMap &&
            ((m.iridescenceMap.value = p.iridescenceMap), e(p.iridescenceMap, m.iridescenceMapTransform)),
          p.iridescenceThicknessMap &&
            ((m.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
            e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
        p.transmission > 0 &&
          ((m.transmission.value = p.transmission),
          (m.transmissionSamplerMap.value = y.texture),
          m.transmissionSamplerSize.value.set(y.width, y.height),
          p.transmissionMap &&
            ((m.transmissionMap.value = p.transmissionMap), e(p.transmissionMap, m.transmissionMapTransform)),
          (m.thickness.value = p.thickness),
          p.thicknessMap && ((m.thicknessMap.value = p.thicknessMap), e(p.thicknessMap, m.thicknessMapTransform)),
          (m.attenuationDistance.value = p.attenuationDistance),
          m.attenuationColor.value.copy(p.attenuationColor)),
        p.anisotropy > 0 &&
          (m.anisotropyVector.value.set(
            p.anisotropy * Math.cos(p.anisotropyRotation),
            p.anisotropy * Math.sin(p.anisotropyRotation),
          ),
          p.anisotropyMap && ((m.anisotropyMap.value = p.anisotropyMap), e(p.anisotropyMap, m.anisotropyMapTransform))),
        (m.specularIntensity.value = p.specularIntensity),
        m.specularColor.value.copy(p.specularColor),
        p.specularColorMap &&
          ((m.specularColorMap.value = p.specularColorMap), e(p.specularColorMap, m.specularColorMapTransform)),
        p.specularIntensityMap &&
          ((m.specularIntensityMap.value = p.specularIntensityMap),
          e(p.specularIntensityMap, m.specularIntensityMapTransform)));
    }
    function E(m, p) {
      p.matcap && (m.matcap.value = p.matcap);
    }
    function v(m, p) {
      let y = t.get(p).light;
      (m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),
        (m.nearDistance.value = y.shadow.camera.near),
        (m.farDistance.value = y.shadow.camera.far));
    }
    return { refreshFogUniforms: i, refreshMaterialUniforms: s };
  }
  function AE(n, t, e, i) {
    let s = {},
      r = {},
      a = [],
      o = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(S, M) {
      let P = M.program;
      i.uniformBlockBinding(S, P);
    }
    function c(S, M) {
      let P = s[S.id];
      P === void 0 && (m(S), (P = u(S)), (s[S.id] = P), S.addEventListener("dispose", y));
      let T = M.program;
      i.updateUBOMapping(S, T);
      let x = t.render.frame;
      r[S.id] !== x && (h(S), (r[S.id] = x));
    }
    function u(S) {
      let M = f();
      S.__bindingPointIndex = M;
      let P = n.createBuffer(),
        T = S.__size,
        x = S.usage;
      return (
        n.bindBuffer(n.UNIFORM_BUFFER, P),
        n.bufferData(n.UNIFORM_BUFFER, T, x),
        n.bindBuffer(n.UNIFORM_BUFFER, null),
        n.bindBufferBase(n.UNIFORM_BUFFER, M, P),
        P
      );
    }
    function f() {
      for (let S = 0; S < o; S++) if (a.indexOf(S) === -1) return (a.push(S), S);
      return (Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0);
    }
    function h(S) {
      let M = s[S.id],
        P = S.uniforms,
        T = S.__cache;
      n.bindBuffer(n.UNIFORM_BUFFER, M);
      for (let x = 0, b = P.length; x < b; x++) {
        let N = P[x];
        if (Array.isArray(N)) for (let w = 0, C = N.length; w < C; w++) d(N[w], x, w, T);
        else d(N, x, 0, T);
      }
      n.bindBuffer(n.UNIFORM_BUFFER, null);
    }
    function d(S, M, P, T) {
      if (v(S, M, P, T) === !0) {
        let x = S.__offset,
          b = S.value;
        if (Array.isArray(b)) {
          let N = 0;
          for (let w = 0; w < b.length; w++) {
            let C = b[w],
              z = p(C);
            (E(C, S.__data, N),
              typeof C != "number" &&
                typeof C != "boolean" &&
                !C.isMatrix3 &&
                !ArrayBuffer.isView(C) &&
                (N += z.storage / Float32Array.BYTES_PER_ELEMENT));
          }
        } else E(b, S.__data, 0);
        n.bufferSubData(n.UNIFORM_BUFFER, x, S.__data);
      }
    }
    function E(S, M, P) {
      typeof S == "number" || typeof S == "boolean"
        ? (M[0] = S)
        : S.isMatrix3
          ? ((M[0] = S.elements[0]),
            (M[1] = S.elements[1]),
            (M[2] = S.elements[2]),
            (M[3] = 0),
            (M[4] = S.elements[3]),
            (M[5] = S.elements[4]),
            (M[6] = S.elements[5]),
            (M[7] = 0),
            (M[8] = S.elements[6]),
            (M[9] = S.elements[7]),
            (M[10] = S.elements[8]),
            (M[11] = 0))
          : ArrayBuffer.isView(S)
            ? M.set(new S.constructor(S.buffer, S.byteOffset, M.length))
            : S.toArray(M, P);
    }
    function v(S, M, P, T) {
      let x = S.value,
        b = M + "_" + P;
      if (T[b] === void 0)
        return (
          typeof x == "number" || typeof x == "boolean"
            ? (T[b] = x)
            : ArrayBuffer.isView(x)
              ? (T[b] = x.slice())
              : (T[b] = x.clone()),
          !0
        );
      {
        let N = T[b];
        if (typeof x == "number" || typeof x == "boolean") {
          if (N !== x) return ((T[b] = x), !0);
        } else {
          if (ArrayBuffer.isView(x)) return !0;
          if (N.equals(x) === !1) return (N.copy(x), !0);
        }
      }
      return !1;
    }
    function m(S) {
      let M = S.uniforms,
        P = 0,
        T = 16;
      for (let b = 0, N = M.length; b < N; b++) {
        let w = Array.isArray(M[b]) ? M[b] : [M[b]];
        for (let C = 0, z = w.length; C < z; C++) {
          let A = w[C],
            L = Array.isArray(A.value) ? A.value : [A.value];
          for (let G = 0, D = L.length; G < D; G++) {
            let et = L[G],
              J = p(et),
              Y = P % T,
              it = Y % J.boundary,
              ft = Y + it;
            ((P += it),
              ft !== 0 && T - ft < J.storage && (P += T - ft),
              (A.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT)),
              (A.__offset = P),
              (P += J.storage));
          }
        }
      }
      let x = P % T;
      return (x > 0 && (P += T - x), (S.__size = P), (S.__cache = {}), this);
    }
    function p(S) {
      let M = { boundary: 0, storage: 0 };
      return (
        typeof S == "number" || typeof S == "boolean"
          ? ((M.boundary = 4), (M.storage = 4))
          : S.isVector2
            ? ((M.boundary = 8), (M.storage = 8))
            : S.isVector3 || S.isColor
              ? ((M.boundary = 16), (M.storage = 12))
              : S.isVector4
                ? ((M.boundary = 16), (M.storage = 16))
                : S.isMatrix3
                  ? ((M.boundary = 48), (M.storage = 48))
                  : S.isMatrix4
                    ? ((M.boundary = 64), (M.storage = 64))
                    : S.isTexture
                      ? Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group.")
                      : ArrayBuffer.isView(S)
                        ? ((M.boundary = 16), (M.storage = S.byteLength))
                        : Ht("WebGLRenderer: Unsupported uniform value type.", S),
        M
      );
    }
    function y(S) {
      let M = S.target;
      M.removeEventListener("dispose", y);
      let P = a.indexOf(M.__bindingPointIndex);
      (a.splice(P, 1), n.deleteBuffer(s[M.id]), delete s[M.id], delete r[M.id]);
    }
    function Q() {
      for (let S in s) n.deleteBuffer(s[S]);
      ((a = []), (s = {}), (r = {}));
    }
    return { bind: l, update: c, dispose: Q };
  }
  var FE = new Uint16Array([
      12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882,
      14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495,
      13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596,
      14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960,
      14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344,
      14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466,
      14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957,
      14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029,
      14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569,
      14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111,
      12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902,
      10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449,
      15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343,
      14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272,
      10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883,
      9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683,
      15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800,
      8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677,
      15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688,
      7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613,
      15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552,
      6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551,
      15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398,
      5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508,
      15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133,
      4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429,
      15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808,
      3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120,
      3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360,
      1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882,
      14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183,
    ]),
    Ri = null;
  function NE() {
    return (
      Ri === null &&
        ((Ri = new Cs(FE, 16, 16, cn, Ue)),
        (Ri.name = "DFG_LUT"),
        (Ri.minFilter = Qe),
        (Ri.magFilter = Qe),
        (Ri.wrapS = Si),
        (Ri.wrapT = Si),
        (Ri.generateMipmaps = !1),
        (Ri.needsUpdate = !0)),
      Ri
    );
  }
  var ur = class {
    constructor(t = {}) {
      let {
        canvas: e = wh(),
        context: i = null,
        depth: s = !0,
        stencil: r = !1,
        alpha: a = !1,
        antialias: o = !1,
        premultipliedAlpha: l = !0,
        preserveDrawingBuffer: c = !1,
        powerPreference: u = "default",
        failIfMajorPerformanceCaveat: f = !1,
        reversedDepthBuffer: h = !1,
        outputBufferType: d = He,
      } = t;
      this.isWebGLRenderer = !0;
      let E;
      if (i !== null) {
        if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext)
          throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        E = i.getContextAttributes().alpha;
      } else E = a;
      let v = d,
        m = new Set([Aa, Ia, Ta]),
        p = new Set([He, mi, as, os, ba, Qa]),
        y = new Uint32Array(4),
        Q = new Int32Array(4),
        S = new F(),
        M = null,
        P = null,
        T = [],
        x = [],
        b = null;
      ((this.domElement = e),
        (this.debug = { checkShaderErrors: !0, diagnostics: { keywords: !1 }, onShaderError: null }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this.toneMapping = ti),
        (this.toneMappingExposure = 1),
        (this.transmissionResolutionScale = 1));
      let N = this,
        w = !1,
        C = null,
        z = null,
        A = null,
        L = null;
      this._outputColorSpace = Je;
      let G = 0,
        D = 0,
        et = null,
        J = -1,
        Y = null,
        it = new ne(),
        ft = new ne(),
        ct = null,
        ee = new Tt(0),
        Dt = 0,
        yt = e.width,
        W = e.height,
        Z = 1,
        xt = null,
        Ut = null,
        pt = new ne(0, 0, yt, W),
        Bt = new ne(0, 0, yt, W),
        le = !1,
        Lt = new jn(),
        qt = !1,
        Xt = !1,
        $t = new Vt(),
        Zt = new F(),
        ge = new ne(),
        Ie = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 },
        V = !1;
      function nt() {
        return et === null ? Z : 1;
      }
      let I = i;
      function ot(_, O) {
        return e.getContext(_, O);
      }
      let St, R, g, H, $, X, at, rt, K, j, lt, bt, dt, ht, It, wt, zt, U, ut, tt, mt, Mt, st;
      try {
        let _ = {
          alpha: !0,
          depth: s,
          stencil: r,
          antialias: o,
          premultipliedAlpha: l,
          preserveDrawingBuffer: c,
          powerPreference: u,
          failIfMajorPerformanceCaveat: f,
        };
        if (
          ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${"186"}`),
          e.addEventListener("webglcontextlost", de, !1),
          e.addEventListener("webglcontextrestored", re, !1),
          e.addEventListener("webglcontextcreationerror", ci, !1),
          I === null)
        ) {
          let O = "webgl2";
          if (((I = ot(O, _)), I === null))
            throw ot(O)
              ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.")
              : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
        }
        Nt();
      } catch (_) {
        throw (
          e.removeEventListener("webglcontextlost", de, !1),
          e.removeEventListener("webglcontextrestored", re, !1),
          e.removeEventListener("webglcontextcreationerror", ci, !1),
          Ot("WebGLRenderer: " + _.message),
          _
        );
      }
      function Nt() {
        ((St = new $m(I)),
          St.init(),
          (mt = new bE(I, St)),
          (R = new Im(I, St, t, mt)),
          (g = new PE(I, St)),
          R.reversedDepthBuffer && h && g.buffers.depth.setReversed(!0),
          (z = I.createFramebuffer()),
          (A = I.createFramebuffer()),
          (L = I.createFramebuffer()),
          (H = new qm(I)),
          ($ = new lE()),
          (X = new _E(I, St, g, $, R, mt, H)),
          (at = new Lm(N)),
          (rt = new Gd(I)),
          (Mt = new Rm(I, rt)),
          (K = new zm(I, rt, H, Mt)),
          (j = new Vm(I, K, rt, Mt, H)),
          (U = new Gm(I, R, X)),
          (It = new Am($)),
          (lt = new cE(N, at, St, R, Mt, It)),
          (bt = new IE(N, $)),
          (dt = new uE()),
          (ht = new gE(St)),
          (zt = new Qm(N, at, g, j, E, l)),
          (wt = new ME(N, j, R)),
          (st = new AE(I, H, R, g)),
          (ut = new Tm(I, St, H)),
          (tt = new Bm(I, St, H)),
          (H.programs = lt.programs),
          (N.capabilities = R),
          (N.extensions = St),
          (N.properties = $),
          (N.renderLists = dt),
          (N.shadowMap = wt),
          (N.state = g),
          (N.info = H));
      }
      v !== He && (b = new Jm(v, e.width, e.height, o, s, r));
      let At = new al(N, I);
      ((this.xr = At),
        (this.getContext = function () {
          return I;
        }),
        (this.getContextAttributes = function () {
          return I.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          let _ = St.get("WEBGL_lose_context");
          _ && _.loseContext();
        }),
        (this.forceContextRestore = function () {
          let _ = St.get("WEBGL_lose_context");
          _ && _.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return Z;
        }),
        (this.setPixelRatio = function (_) {
          _ !== void 0 && ((Z = _), this.setSize(yt, W, !1));
        }),
        (this.getSize = function (_) {
          return _.set(yt, W);
        }),
        (this.setSize = function (_, O, k = !0) {
          if (At.isPresenting) {
            Ht("WebGLRenderer: Can't change size while VR device is presenting.");
            return;
          }
          ((yt = _),
            (W = O),
            (e.width = Math.floor(_ * Z)),
            (e.height = Math.floor(O * Z)),
            k === !0 && ((e.style.width = _ + "px"), (e.style.height = O + "px")),
            b !== null && b.setSize(e.width, e.height),
            this.setViewport(0, 0, _, O));
        }),
        (this.getDrawingBufferSize = function (_) {
          return _.set(yt * Z, W * Z).floor();
        }),
        (this.setDrawingBufferSize = function (_, O, k) {
          ((yt = _),
            (W = O),
            (Z = k),
            (e.width = Math.floor(_ * k)),
            (e.height = Math.floor(O * k)),
            this.setViewport(0, 0, _, O));
        }),
        (this.setEffects = function (_) {
          if (v === He) {
            Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
            return;
          }
          if (_) {
            for (let O = 0; O < _.length; O++)
              if (_[O].isOutputPass === !0) {
                Ht(
                  "WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.",
                );
                break;
              }
          }
          b.setEffects(_ || []);
        }),
        (this.getCurrentViewport = function (_) {
          return _.copy(it);
        }),
        (this.getViewport = function (_) {
          return _.copy(pt);
        }),
        (this.setViewport = function (_, O, k, B) {
          (_.isVector4 ? pt.set(_.x, _.y, _.z, _.w) : pt.set(_, O, k, B),
            g.viewport(it.copy(pt).multiplyScalar(Z).round()));
        }),
        (this.getScissor = function (_) {
          return _.copy(Bt);
        }),
        (this.setScissor = function (_, O, k, B) {
          (_.isVector4 ? Bt.set(_.x, _.y, _.z, _.w) : Bt.set(_, O, k, B),
            g.scissor(ft.copy(Bt).multiplyScalar(Z).round()));
        }),
        (this.getScissorTest = function () {
          return le;
        }),
        (this.setScissorTest = function (_) {
          g.setScissorTest((le = _));
        }),
        (this.setOpaqueSort = function (_) {
          xt = _;
        }),
        (this.setTransparentSort = function (_) {
          Ut = _;
        }),
        (this.getClearColor = function (_) {
          return _.copy(zt.getClearColor());
        }),
        (this.setClearColor = function () {
          zt.setClearColor(...arguments);
        }),
        (this.getClearAlpha = function () {
          return zt.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          zt.setClearAlpha(...arguments);
        }),
        (this.clear = function (_ = !0, O = !0, k = !0) {
          let B = 0;
          if (_) {
            let q = !1;
            if (et !== null) {
              let vt = et.texture.format;
              q = m.has(vt);
            }
            if (q) {
              let vt = et.texture.type,
                _t = p.has(vt),
                gt = zt.getClearColor(),
                Qt = zt.getClearAlpha(),
                Ft = gt.r,
                Jt = gt.g,
                Kt = gt.b;
              _t
                ? ((y[0] = Ft), (y[1] = Jt), (y[2] = Kt), (y[3] = Qt), I.clearBufferuiv(I.COLOR, 0, y))
                : ((Q[0] = Ft), (Q[1] = Jt), (Q[2] = Kt), (Q[3] = Qt), I.clearBufferiv(I.COLOR, 0, Q));
            } else B |= I.COLOR_BUFFER_BIT;
          }
          (O && ((B |= I.DEPTH_BUFFER_BIT), this.state.buffers.depth.setMask(!0)),
            k && ((B |= I.STENCIL_BUFFER_BIT), this.state.buffers.stencil.setMask(4294967295)),
            B !== 0 && I.clear(B));
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.setNodesHandler = function (_) {
          (_.setRenderer(this), (C = _));
        }),
        (this.dispose = function () {
          (e.removeEventListener("webglcontextlost", de, !1),
            e.removeEventListener("webglcontextrestored", re, !1),
            e.removeEventListener("webglcontextcreationerror", ci, !1),
            zt.dispose(),
            dt.dispose(),
            ht.dispose(),
            $.dispose(),
            at.dispose(),
            j.dispose(),
            Mt.dispose(),
            st.dispose(),
            lt.dispose(),
            At.dispose(),
            At.removeEventListener("sessionstart", gl),
            At.removeEventListener("sessionend", xl),
            un.stop());
        }));
      function de(_) {
        (_.preventDefault(), Uc("WebGLRenderer: Context Lost."), (w = !0));
      }
      function re() {
        (Uc("WebGLRenderer: Context Restored."), (w = !1));
        let _ = H.autoReset,
          O = wt.enabled,
          k = wt.autoUpdate,
          B = wt.needsUpdate,
          q = wt.type;
        (Nt(), (H.autoReset = _), (wt.enabled = O), (wt.autoUpdate = k), (wt.needsUpdate = B), (wt.type = q));
      }
      function ci(_) {
        Ot("WebGLRenderer: A WebGL context could not be created. Reason: ", _.statusMessage);
      }
      function gi(_) {
        let O = _.target;
        (O.removeEventListener("dispose", gi), Wu(O));
      }
      function Wu(_) {
        (Xu(_), $.remove(_));
      }
      function Xu(_) {
        let O = $.get(_).programs;
        O !== void 0 &&
          (O.forEach(function (k) {
            lt.releaseProgram(k);
          }),
          _.isShaderMaterial && lt.releaseShaderCache(_));
      }
      this.renderBufferDirect = function (_, O, k, B, q, vt) {
        O === null && (O = Ie);
        let _t = q.isMesh && q.matrixWorld.determinantAffine() < 0,
          gt = Yu(_, O, k, B, q);
        g.setMaterial(B, _t);
        let Qt = k.index,
          Ft = 1;
        if (B.wireframe === !0) {
          if (((Qt = K.getWireframeAttribute(k)), Qt === void 0)) return;
          Ft = 2;
        }
        let Jt = k.drawRange,
          Kt = k.attributes.position,
          Rt = Jt.start * Ft,
          ae = (Jt.start + Jt.count) * Ft;
        (vt !== null && ((Rt = Math.max(Rt, vt.start * Ft)), (ae = Math.min(ae, (vt.start + vt.count) * Ft))),
          Qt !== null
            ? ((Rt = Math.max(Rt, 0)), (ae = Math.min(ae, Qt.count)))
            : Kt != null && ((Rt = Math.max(Rt, 0)), (ae = Math.min(ae, Kt.count))));
        let _e = ae - Rt;
        if (_e < 0 || _e === 1 / 0) return;
        Mt.setup(q, B, gt, k, Qt);
        let pe,
          ue = ut;
        if ((Qt !== null && ((pe = rt.get(Qt)), (ue = tt), ue.setIndex(pe)), q.isMesh))
          B.wireframe === !0
            ? (g.setLineWidth(B.wireframeLinewidth * nt()), ue.setMode(I.LINES))
            : ue.setMode(I.TRIANGLES);
        else if (q.isLine) {
          let $e = B.linewidth;
          ($e === void 0 && ($e = 1),
            g.setLineWidth($e * nt()),
            q.isLineSegments ? ue.setMode(I.LINES) : q.isLineLoop ? ue.setMode(I.LINE_LOOP) : ue.setMode(I.LINE_STRIP));
        } else q.isPoints ? ue.setMode(I.POINTS) : q.isSprite && ue.setMode(I.TRIANGLES);
        if (q.isBatchedMesh)
          if (St.get("WEBGL_multi_draw")) ue.renderMultiDraw(q._multiDrawStarts, q._multiDrawCounts, q._multiDrawCount);
          else {
            let $e = q._multiDrawStarts,
              Pt = q._multiDrawCounts,
              De = q._multiDrawCount,
              te = Qt ? rt.get(Qt).bytesPerElement : 1,
              ii = $.get(B).currentProgram.getUniforms();
            for (let xi = 0; xi < De; xi++) (ii.setValue(I, "_gl_DrawID", xi), ue.render($e[xi] / te, Pt[xi]));
          }
        else if (q.isInstancedMesh) ue.renderInstances(Rt, _e, q.count);
        else if (k.isInstancedBufferGeometry) {
          let $e = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0,
            Pt = Math.min(k.instanceCount, $e);
          ue.renderInstances(Rt, _e, Pt);
        } else ue.render(Rt, _e);
      };
      function El(_, O, k, B) {
        (C !== null && _.isNodeMaterial && C.setObject(B, _),
          qt === !0 && It.setState(_, k, !1),
          _.transparent === !0 && _.side === ai && _.forceSinglePass === !1
            ? ((_.side = Le),
              (_.needsUpdate = !0),
              pr(_, O, B),
              (_.side = sn),
              (_.needsUpdate = !0),
              pr(_, O, B),
              (_.side = ai))
            : pr(_, O, B));
      }
      ((this.compile = function (_, O, k = null) {
        (k === null && (k = _),
          C !== null && C.renderStart(_, O, k),
          (P = ht.get(k)),
          P.init(O),
          x.push(P),
          k.traverseVisible(function (q) {
            q.isLight && q.layers.test(O.layers) && (P.pushLight(q), q.castShadow && P.pushShadow(q));
          }),
          _ !== k &&
            _.traverseVisible(function (q) {
              q.isLight && q.layers.test(O.layers) && (P.pushLight(q), q.castShadow && P.pushShadow(q));
            }),
          P.setupLights(),
          C !== null && C.updateLights(P.state.lightsArray),
          (Xt = this.localClippingEnabled),
          (qt = It.init(this.clippingPlanes, Xt)),
          qt === !0 && It.setGlobalState(this.clippingPlanes, O),
          C !== null && wt.render(P.state.shadowsArray, k, O));
        let B = new Set();
        return (
          _.traverse(function (q) {
            if (!(q.isMesh || q.isPoints || q.isLine || q.isSprite)) return;
            let vt = q.material;
            if (vt)
              if (Array.isArray(vt))
                for (let _t = 0; _t < vt.length; _t++) {
                  let gt = vt[_t];
                  (El(gt, k, O, q), B.add(gt));
                }
              else (El(vt, k, O, q), B.add(vt));
          }),
          (P = x.pop()),
          C !== null && C.renderEnd(),
          B
        );
      }),
        (this.compileAsync = function (_, O, k = null) {
          let B = this.compile(_, O, k);
          return new Promise((q) => {
            function vt() {
              if (
                (B.forEach(function (_t) {
                  let Qt = $.get(_t).currentProgram;
                  (Qt === void 0 || Qt.isReady()) && B.delete(_t);
                }),
                B.size === 0)
              ) {
                q(_);
                return;
              }
              setTimeout(vt, 10);
            }
            St.get("KHR_parallel_shader_compile") !== null ? vt() : setTimeout(vt, 10);
          });
        }));
      let Ho = null;
      function Ku(_) {
        Ho && Ho(_);
      }
      function gl() {
        un.stop();
      }
      function xl() {
        un.start();
      }
      let un = new ou();
      (un.setAnimationLoop(Ku),
        typeof self < "u" && un.setContext(self),
        (this.setAnimationLoop = function (_) {
          ((Ho = _), At.setAnimationLoop(_), _ === null ? un.stop() : un.start());
        }),
        At.addEventListener("sessionstart", gl),
        At.addEventListener("sessionend", xl),
        (this.render = function (_, O) {
          if (O !== void 0 && O.isCamera !== !0) {
            Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            return;
          }
          if (w === !0) return;
          C !== null && C.renderStart(_, O);
          let k = At.enabled === !0 && At.isPresenting === !0,
            B = b !== null && (et === null || k) && b.begin(N, et);
          if (
            (_.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(),
            O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(),
            At.enabled === !0 &&
              At.isPresenting === !0 &&
              (b === null || b.isCompositing() === !1) &&
              (At.cameraAutoUpdate === !0 && At.updateCamera(O), (O = At.getCamera())),
            _.isScene === !0 && _.onBeforeRender(N, _, O, et),
            (P = ht.get(_, x.length)),
            P.init(O),
            (P.state.textureUnits = X.getTextureUnits()),
            x.push(P),
            $t.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse),
            Lt.setFromProjectionMatrix($t, fi, O.reversedDepth),
            (Xt = this.localClippingEnabled),
            (qt = It.init(this.clippingPlanes, Xt)),
            (M = dt.get(_, T.length)),
            M.init(),
            T.push(M),
            At.enabled === !0 && At.isPresenting === !0)
          ) {
            let _t = N.xr.getDepthSensingMesh();
            _t !== null && Uo(_t, O, -1 / 0, N.sortObjects);
          }
          (Uo(_, O, 0, N.sortObjects),
            M.finish(),
            C !== null && C.updateLights(P.state.lightsArray),
            N.sortObjects === !0 && M.sort(xt, Ut),
            (V = At.enabled === !1 || At.isPresenting === !1 || At.hasDepthSensing() === !1),
            V && zt.addToRenderList(M, _),
            this.info.render.frame++,
            this.info.autoReset === !0 && this.info.reset(),
            qt === !0 && It.beginShadows());
          let q = P.state.shadowsArray;
          if ((wt.render(q, _, O), qt === !0 && It.endShadows(), (B && b.hasRenderPass()) === !1)) {
            let _t = M.opaque,
              gt = M.transmissive;
            if ((P.setupLights(), O.isArrayCamera)) {
              let Qt = O.cameras;
              if (gt.length > 0)
                for (let Ft = 0, Jt = Qt.length; Ft < Jt; Ft++) {
                  let Kt = Qt[Ft];
                  Sl(_t, gt, _, Kt);
                }
              V && zt.render(_);
              for (let Ft = 0, Jt = Qt.length; Ft < Jt; Ft++) {
                let Kt = Qt[Ft];
                vl(M, _, Kt, Kt.viewport);
              }
            } else (gt.length > 0 && Sl(_t, gt, _, O), V && zt.render(_), vl(M, _, O));
          }
          (et !== null && D === 0 && (X.updateMultisampleRenderTarget(et), X.updateRenderTargetMipmap(et)),
            B && b.end(N),
            _.isScene === !0 && _.onAfterRender(N, _, O),
            Mt.resetDefaultState(),
            (J = -1),
            (Y = null),
            x.pop(),
            x.length > 0
              ? ((P = x[x.length - 1]),
                X.setTextureUnits(P.state.textureUnits),
                qt === !0 && It.setGlobalState(N.clippingPlanes, P.state.camera))
              : (P = null),
            T.pop(),
            T.length > 0 ? (M = T[T.length - 1]) : (M = null),
            C !== null && C.renderEnd());
        }));
      function Uo(_, O, k, B) {
        if (_.visible === !1) return;
        if (_.layers.test(O.layers)) {
          if (_.isGroup) k = _.renderOrder;
          else if (_.isLOD) _.autoUpdate === !0 && _.update(O);
          else if (_.isLightProbeGrid) P.pushLightProbeGrid(_);
          else if (_.isLight) (P.pushLight(_), _.castShadow && P.pushShadow(_));
          else if (_.isSprite) {
            if (!_.frustumCulled || _.intersectsFrustum(Lt)) {
              B && ge.setFromMatrixPosition(_.matrixWorld).applyMatrix4($t);
              let _t = j.update(_),
                gt = _.material;
              gt.visible && M.push(_, _t, gt, k, ge.z, null, O);
            }
          } else if ((_.isMesh || _.isLine || _.isPoints) && (!_.frustumCulled || _.intersectsFrustum(Lt))) {
            let _t = j.update(_),
              gt = _.material;
            if (
              (B &&
                (_.boundingSphere !== void 0
                  ? (_.boundingSphere === null && _.computeBoundingSphere(), ge.copy(_.boundingSphere.center))
                  : (_t.boundingSphere === null && _t.computeBoundingSphere(), ge.copy(_t.boundingSphere.center)),
                ge.applyMatrix4(_.matrixWorld).applyMatrix4($t)),
              Array.isArray(gt))
            ) {
              let Qt = _t.groups;
              for (let Ft = 0, Jt = Qt.length; Ft < Jt; Ft++) {
                let Kt = Qt[Ft],
                  Rt = gt[Kt.materialIndex];
                Rt && Rt.visible && M.push(_, _t, Rt, k, ge.z, Kt, O);
              }
            } else gt.visible && M.push(_, _t, gt, k, ge.z, null, O);
          }
        }
        let vt = _.children;
        for (let _t = 0, gt = vt.length; _t < gt; _t++) Uo(vt[_t], O, k, B);
      }
      function vl(_, O, k, B) {
        let { opaque: q, transmissive: vt, transparent: _t } = _;
        (P.setupLightsView(k),
          qt === !0 && It.setGlobalState(N.clippingPlanes, k),
          B && g.viewport(it.copy(B)),
          q.length > 0 && fr(q, O, k),
          vt.length > 0 && fr(vt, O, k),
          _t.length > 0 && fr(_t, O, k),
          g.buffers.depth.setTest(!0),
          g.buffers.depth.setMask(!0),
          g.buffers.color.setMask(!0),
          g.setPolygonOffset(!1));
      }
      function Sl(_, O, k, B) {
        if ((k.isScene === !0 ? k.overrideMaterial : null) !== null) return;
        if (P.state.transmissionRenderTarget[B.id] === void 0) {
          let Rt = St.has("EXT_color_buffer_half_float") || St.has("EXT_color_buffer_float");
          P.state.transmissionRenderTarget[B.id] = new Re(1, 1, {
            generateMipmaps: !0,
            type: Rt ? Ue : He,
            minFilter: an,
            samples: Math.max(4, R.samples),
            stencilBuffer: r,
            resolveDepthBuffer: !1,
            resolveStencilBuffer: !1,
            storeMultisampledDepthBuffer: !1,
            storeMultisampledStencilBuffer: !1,
            colorSpace: Yt.workingColorSpace,
          });
        }
        let vt = P.state.transmissionRenderTarget[B.id],
          _t = B.viewport || it;
        vt.setSize(_t.z * N.transmissionResolutionScale, _t.w * N.transmissionResolutionScale);
        let gt = N.getRenderTarget(),
          Qt = N.getActiveCubeFace(),
          Ft = N.getActiveMipmapLevel();
        (N.setRenderTarget(vt),
          N.getClearColor(ee),
          (Dt = N.getClearAlpha()),
          Dt < 1 && N.setClearColor(16777215, 0.5),
          N.clear(),
          V && zt.render(k));
        let Jt = N.toneMapping;
        N.toneMapping = ti;
        let Kt = B.viewport;
        if (
          (B.viewport !== void 0 && (B.viewport = void 0),
          P.setupLightsView(B),
          qt === !0 && It.setGlobalState(N.clippingPlanes, B),
          fr(_, k, B),
          X.updateMultisampleRenderTarget(vt),
          X.updateRenderTargetMipmap(vt),
          St.has("WEBGL_multisampled_render_to_texture") === !1)
        ) {
          let Rt = !1;
          for (let ae = 0, _e = O.length; ae < _e; ae++) {
            let pe = O[ae],
              { object: ue, geometry: $e, material: Pt, group: De } = pe;
            if (Pt.side === ai && ue.layers.test(B.layers)) {
              let te = Pt.side;
              ((Pt.side = Le),
                (Pt.needsUpdate = !0),
                yl(ue, k, B, $e, Pt, De),
                (Pt.side = te),
                (Pt.needsUpdate = !0),
                (Rt = !0));
            }
          }
          Rt === !0 && (X.updateMultisampleRenderTarget(vt), X.updateRenderTargetMipmap(vt));
        }
        (N.setRenderTarget(gt, Qt, Ft),
          N.setClearColor(ee, Dt),
          Kt !== void 0 && (B.viewport = Kt),
          (N.toneMapping = Jt));
      }
      function fr(_, O, k) {
        let B = O.isScene === !0 ? O.overrideMaterial : null;
        for (let q = 0, vt = _.length; q < vt; q++) {
          let _t = _[q],
            { object: gt, geometry: Qt, group: Ft } = _t,
            Jt = _t.material;
          (Jt.allowOverride === !0 && B !== null && (Jt = B), gt.layers.test(k.layers) && yl(gt, O, k, Qt, Jt, Ft));
        }
      }
      function yl(_, O, k, B, q, vt) {
        (C !== null && q.isNodeMaterial && C.setObject(_, q),
          _.onBeforeRender(N, O, k, B, q, vt),
          _.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, _.matrixWorld),
          _.normalMatrix.getNormalMatrix(_.modelViewMatrix),
          q.onBeforeRender(N, O, k, B, _, vt),
          q.transparent === !0 && q.side === ai && q.forceSinglePass === !1
            ? ((q.side = Le),
              (q.needsUpdate = !0),
              N.renderBufferDirect(k, O, B, q, _, vt),
              (q.side = sn),
              (q.needsUpdate = !0),
              N.renderBufferDirect(k, O, B, q, _, vt),
              (q.side = ai))
            : N.renderBufferDirect(k, O, B, q, _, vt),
          _.onAfterRender(N, O, k, B, q, vt));
      }
      function pr(_, O, k) {
        O.isScene !== !0 && (O = Ie);
        let B = $.get(_),
          q = P.state.lights,
          vt = P.state.shadowsArray,
          _t = q.state.version,
          gt = lt.getParameters(_, q.state, vt, O, k, P.state.lightProbeGridArray),
          Qt = lt.getProgramCacheKey(gt),
          Ft = B.programs;
        ((B.environment =
          _.isMeshStandardMaterial || _.isMeshLambertMaterial || _.isMeshPhongMaterial ? O.environment : null),
          (B.fog = O.fog));
        let Jt =
          _.isMeshStandardMaterial || (_.isMeshLambertMaterial && !_.envMap) || (_.isMeshPhongMaterial && !_.envMap);
        ((B.envMap = at.get(_.envMap || B.environment, Jt)),
          (B.envMapRotation = B.environment !== null && _.envMap === null ? O.environmentRotation : _.envMapRotation),
          Ft === void 0 && (_.addEventListener("dispose", gi), (Ft = new Map()), (B.programs = Ft)));
        let Kt = Ft.get(Qt);
        if (Kt !== void 0) {
          if (B.currentProgram === Kt && B.lightsStateVersion === _t) return (Pl(_, gt), Kt);
        } else
          ((gt.uniforms = lt.getUniforms(_)),
            C !== null && _.isNodeMaterial && C.build(_, k, gt),
            _.onBeforeCompile(gt, N),
            (Kt = lt.acquireProgram(gt, Qt)),
            Ft.set(Qt, Kt),
            (B.uniforms = gt.uniforms));
        let Rt = B.uniforms;
        return (
          ((!_.isShaderMaterial && !_.isRawShaderMaterial) || _.clipping === !0) && (Rt.clippingPlanes = It.uniform),
          Pl(_, gt),
          (B.needsLights = td(_)),
          (B.lightsStateVersion = _t),
          B.needsLights &&
            ((Rt.ambientLightColor.value = q.state.ambient),
            (Rt.lightProbe.value = q.state.probe),
            (Rt.sunLights.value = q.state.sun),
            (Rt.sunLightShadows.value = q.state.sunShadow),
            (Rt.directionalLights.value = q.state.directional),
            (Rt.directionalLightShadows.value = q.state.directionalShadow),
            (Rt.spotLights.value = q.state.spot),
            (Rt.spotLightShadows.value = q.state.spotShadow),
            (Rt.rectAreaLights.value = q.state.rectArea),
            (Rt.ltc_1.value = q.state.rectAreaLTC1),
            (Rt.ltc_2.value = q.state.rectAreaLTC2),
            (Rt.pointLights.value = q.state.point),
            (Rt.pointLightShadows.value = q.state.pointShadow),
            (Rt.hemisphereLights.value = q.state.hemi),
            (Rt.sunShadowMatrix.value = q.state.sunShadowMatrix),
            (Rt.sunShadowCascade.value = q.state.sunShadowCascade),
            (Rt.directionalShadowMatrix.value = q.state.directionalShadowMatrix),
            (Rt.spotLightMatrix.value = q.state.spotLightMatrix),
            (Rt.spotLightMap.value = q.state.spotLightMap),
            (Rt.pointShadowMatrix.value = q.state.pointShadowMatrix)),
          (B.lightProbeGrid = P.state.lightProbeGridArray.length > 0),
          (B.currentProgram = Kt),
          (B.uniformsList = null),
          Kt
        );
      }
      function Ml(_) {
        if (_.uniformsList === null) {
          let O = _.currentProgram.getUniforms();
          _.uniformsList = hs.seqWithValue(O.seq, _.uniforms);
        }
        return _.uniformsList;
      }
      function Pl(_, O) {
        let k = $.get(_);
        ((k.outputColorSpace = O.outputColorSpace),
          (k.batching = O.batching),
          (k.batchingColor = O.batchingColor),
          (k.instancing = O.instancing),
          (k.instancingColor = O.instancingColor),
          (k.instancingMorph = O.instancingMorph),
          (k.skinning = O.skinning),
          (k.morphTargets = O.morphTargets),
          (k.morphNormals = O.morphNormals),
          (k.morphColors = O.morphColors),
          (k.morphTargetsCount = O.morphTargetsCount),
          (k.numClippingPlanes = O.numClippingPlanes),
          (k.numIntersection = O.numClipIntersection),
          (k.vertexAlphas = O.vertexAlphas),
          (k.vertexTangents = O.vertexTangents),
          (k.toneMapping = O.toneMapping));
      }
      function Zu(_, O) {
        if (_.length === 0) return null;
        if (_.length === 1) return _[0].texture !== null ? _[0] : null;
        S.setFromMatrixPosition(O.matrixWorld);
        for (let k = 0, B = _.length; k < B; k++) {
          let q = _[k];
          if (q.texture !== null && q.boundingBox.containsPoint(S)) return q;
        }
        return null;
      }
      function Yu(_, O, k, B, q) {
        (O.isScene !== !0 && (O = Ie), X.resetTextureUnits());
        let vt = O.fog,
          _t = B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial ? O.environment : null,
          gt =
            et === null
              ? N.outputColorSpace
              : et.isXRRenderTarget === !0
                ? et.texture.colorSpace
                : Yt.workingColorSpace,
          Qt =
            B.isMeshStandardMaterial || (B.isMeshLambertMaterial && !B.envMap) || (B.isMeshPhongMaterial && !B.envMap),
          Ft = at.get(B.envMap || _t, Qt),
          Jt = B.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
          Kt = !!k.attributes.tangent && (!!B.normalMap || B.anisotropy > 0),
          Rt = !!k.morphAttributes.position,
          ae = !!k.morphAttributes.normal,
          _e = !!k.morphAttributes.color,
          pe = ti;
        B.toneMapped && (et === null || et.isXRRenderTarget === !0) && (pe = N.toneMapping);
        let ue = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color,
          $e = ue !== void 0 ? ue.length : 0,
          Pt = $.get(B),
          De = P.state.lights;
        if (qt === !0 && (Xt === !0 || _ !== Y)) {
          let fe = _ === Y && B.id === J;
          It.setState(B, _, fe);
        }
        let te = !1;
        B.version === Pt.__version
          ? ((Pt.needsLights && Pt.lightsStateVersion !== De.state.version) ||
              Pt.outputColorSpace !== gt ||
              (q.isBatchedMesh && Pt.batching === !1) ||
              (!q.isBatchedMesh && Pt.batching === !0) ||
              (q.isBatchedMesh && Pt.batchingColor === !0 && q._colorsTexture === null) ||
              (q.isBatchedMesh && Pt.batchingColor === !1 && q._colorsTexture !== null) ||
              (q.isInstancedMesh && Pt.instancing === !1) ||
              (!q.isInstancedMesh && Pt.instancing === !0) ||
              (q.isSkinnedMesh && Pt.skinning === !1) ||
              (!q.isSkinnedMesh && Pt.skinning === !0) ||
              (q.isInstancedMesh && Pt.instancingColor === !0 && q.instanceColor === null) ||
              (q.isInstancedMesh && Pt.instancingColor === !1 && q.instanceColor !== null) ||
              (q.isInstancedMesh && Pt.instancingMorph === !0 && q.morphTexture === null) ||
              (q.isInstancedMesh && Pt.instancingMorph === !1 && q.morphTexture !== null) ||
              Pt.envMap !== Ft ||
              (B.fog === !0 && Pt.fog !== vt) ||
              (Pt.numClippingPlanes !== void 0 &&
                (Pt.numClippingPlanes !== It.numPlanes || Pt.numIntersection !== It.numIntersection)) ||
              Pt.vertexAlphas !== Jt ||
              Pt.vertexTangents !== Kt ||
              Pt.morphTargets !== Rt ||
              Pt.morphNormals !== ae ||
              Pt.morphColors !== _e ||
              Pt.toneMapping !== pe ||
              Pt.morphTargetsCount !== $e ||
              !!Pt.lightProbeGrid != P.state.lightProbeGridArray.length > 0) &&
            (te = !0)
          : ((te = !0), (Pt.__version = B.version));
        let ii = Pt.currentProgram;
        te === !0 && ((ii = pr(B, O, q)), C && B.isNodeMaterial && C.onUpdateProgram(B, ii, Pt));
        let xi = !1,
          Gi = !1,
          Tn = !1,
          he = ii.getUniforms(),
          Me = Pt.uniforms;
        if (
          (g.useProgram(ii.program) && ((xi = !0), (Gi = !0), (Tn = !0)),
          B.id !== J && ((J = B.id), (Gi = !0)),
          Pt.needsLights)
        ) {
          let fe = Zu(P.state.lightProbeGridArray, q);
          Pt.lightProbeGrid !== fe && ((Pt.lightProbeGrid = fe), (Gi = !0));
        }
        if (xi || Y !== _) {
          (g.buffers.depth.getReversed() &&
            _.reversedDepth !== !0 &&
            ((_._reversedDepth = !0), _.updateProjectionMatrix()),
            he.setValue(I, "projectionMatrix", _.projectionMatrix),
            he.setValue(I, "viewMatrix", _.matrixWorldInverse));
          let Di = he.map.cameraPosition;
          (Di !== void 0 && Di.setValue(I, Zt.setFromMatrixPosition(_.matrixWorld)),
            R.logarithmicDepthBuffer && he.setValue(I, "logDepthBufFC", 2 / (Math.log(_.far + 1) / Math.LN2)),
            (B.isMeshPhongMaterial ||
              B.isMeshToonMaterial ||
              B.isMeshLambertMaterial ||
              B.isMeshBasicMaterial ||
              B.isMeshStandardMaterial ||
              B.isShaderMaterial) &&
              he.setValue(I, "isOrthographic", _.isOrthographicCamera === !0),
            Y !== _ && ((Y = _), (Gi = !0), (Tn = !0)));
        }
        if (
          (Pt.needsLights &&
            (De.state.sunShadowMap.length > 0 && he.setValue(I, "sunShadowMap", De.state.sunShadowMap, X),
            De.state.directionalShadowMap.length > 0 &&
              he.setValue(I, "directionalShadowMap", De.state.directionalShadowMap, X),
            De.state.spotShadowMap.length > 0 && he.setValue(I, "spotShadowMap", De.state.spotShadowMap, X),
            De.state.pointShadowMap.length > 0 && he.setValue(I, "pointShadowMap", De.state.pointShadowMap, X)),
          q.isSkinnedMesh)
        ) {
          (he.setOptional(I, q, "bindMatrix"), he.setOptional(I, q, "bindMatrixInverse"));
          let fe = q.skeleton;
          fe && (fe.boneTexture === null && fe.computeBoneTexture(), he.setValue(I, "boneTexture", fe.boneTexture, X));
        }
        q.isBatchedMesh &&
          (he.setOptional(I, q, "batchingTexture"),
          he.setValue(I, "batchingTexture", q._matricesTexture, X),
          he.setOptional(I, q, "batchingIdTexture"),
          he.setValue(I, "batchingIdTexture", q._indirectTexture, X),
          he.setOptional(I, q, "batchingColorTexture"),
          q._colorsTexture !== null && he.setValue(I, "batchingColorTexture", q._colorsTexture, X));
        let Vi = k.morphAttributes;
        if (
          ((Vi.position !== void 0 || Vi.normal !== void 0 || Vi.color !== void 0) && U.update(q, k, ii),
          (Gi || Pt.receiveShadow !== q.receiveShadow) &&
            ((Pt.receiveShadow = q.receiveShadow), he.setValue(I, "receiveShadow", q.receiveShadow)),
          (B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial) &&
            B.envMap === null &&
            O.environment !== null &&
            (Me.envMapIntensity.value = O.environmentIntensity),
          Me.dfgLUT !== void 0 && (Me.dfgLUT.value = NE()),
          Gi)
        ) {
          if (
            (he.setValue(I, "toneMappingExposure", N.toneMappingExposure),
            Pt.needsLights && ju(Me, Tn),
            vt && B.fog === !0 && bt.refreshFogUniforms(Me, vt),
            bt.refreshMaterialUniforms(Me, B, Z, W, P.state.transmissionRenderTarget[_.id]),
            Pt.needsLights && Pt.lightProbeGrid)
          ) {
            let fe = Pt.lightProbeGrid;
            ((Me.probesSH.value = fe.texture),
              Me.probesMin.value.copy(fe.boundingBox.min),
              Me.probesMax.value.copy(fe.boundingBox.max),
              Me.probesResolution.value.copy(fe.resolution));
          }
          hs.upload(I, Ml(Pt), Me, X);
        }
        if (
          (B.isShaderMaterial &&
            B.uniformsNeedUpdate === !0 &&
            (hs.upload(I, Ml(Pt), Me, X), (B.uniformsNeedUpdate = !1)),
          B.isSpriteMaterial && he.setValue(I, "center", q.center),
          he.setValue(I, "modelViewMatrix", q.modelViewMatrix),
          he.setValue(I, "normalMatrix", q.normalMatrix),
          he.setValue(I, "modelMatrix", q.matrixWorld),
          B.uniformsGroups !== void 0)
        ) {
          let fe = B.uniformsGroups;
          for (let Di = 0, In = fe.length; Di < In; Di++) {
            let bl = fe[Di];
            (st.update(bl, ii), st.bind(bl, ii));
          }
        }
        return ii;
      }
      function ju(_, O) {
        ((_.ambientLightColor.needsUpdate = O),
          (_.lightProbe.needsUpdate = O),
          (_.sunLights.needsUpdate = O),
          (_.sunLightShadows.needsUpdate = O),
          (_.directionalLights.needsUpdate = O),
          (_.directionalLightShadows.needsUpdate = O),
          (_.pointLights.needsUpdate = O),
          (_.pointLightShadows.needsUpdate = O),
          (_.spotLights.needsUpdate = O),
          (_.spotLightShadows.needsUpdate = O),
          (_.rectAreaLights.needsUpdate = O),
          (_.hemisphereLights.needsUpdate = O));
      }
      function td(_) {
        return (
          _.isMeshLambertMaterial ||
          _.isMeshToonMaterial ||
          _.isMeshPhongMaterial ||
          _.isMeshStandardMaterial ||
          _.isShadowMaterial ||
          (_.isShaderMaterial && _.lights === !0)
        );
      }
      ((this.getActiveCubeFace = function () {
        return G;
      }),
        (this.getActiveMipmapLevel = function () {
          return D;
        }),
        (this.getRenderTarget = function () {
          return et;
        }),
        (this.setRenderTargetTextures = function (_, O, k) {
          let B = $.get(_);
          ((B.__autoAllocateDepthBuffer = _.resolveDepthBuffer === !1),
            B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1),
            ($.get(_.texture).__webglTexture = O),
            ($.get(_.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : k),
            (B.__hasExternalTextures = !0));
        }),
        (this.setRenderTargetFramebuffer = function (_, O) {
          let k = $.get(_);
          ((k.__webglFramebuffer = O), (k.__useDefaultFramebuffer = O === void 0));
        }),
        (this.setRenderTarget = function (_, O = 0, k = 0) {
          ((et = _), (G = O), (D = k));
          let B = null,
            q = !1,
            vt = !1;
          if (_) {
            let gt = $.get(_);
            if (gt.__useDefaultFramebuffer !== void 0) {
              (g.bindFramebuffer(I.FRAMEBUFFER, gt.__webglFramebuffer),
                it.copy(_.viewport),
                ft.copy(_.scissor),
                (ct = _.scissorTest),
                g.viewport(it),
                g.scissor(ft),
                g.setScissorTest(ct),
                (J = -1));
              return;
            } else if (gt.__webglFramebuffer === void 0) X.setupRenderTarget(_);
            else if (gt.__hasExternalTextures)
              X.rebindTextures(_, $.get(_.texture).__webglTexture, $.get(_.depthTexture).__webglTexture);
            else if (_.depthBuffer) {
              let Jt = _.depthTexture;
              if (gt.__boundDepthTexture !== Jt) {
                if (Jt !== null && $.has(Jt) && (_.width !== Jt.image.width || _.height !== Jt.image.height))
                  throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
                X.setupDepthRenderbuffer(_);
              }
            }
            let Qt = _.texture;
            (Qt.isData3DTexture || Qt.isDataArrayTexture || Qt.isCompressedArrayTexture) && (vt = !0);
            let Ft = $.get(_).__webglFramebuffer;
            (_.isWebGLCubeRenderTarget
              ? (Array.isArray(Ft[O]) ? (B = Ft[O][k]) : (B = Ft[O]), (q = !0))
              : _.samples > 0 && X.useMultisampledRTT(_) === !1
                ? (B = $.get(_).__webglMultisampledFramebuffer)
                : Array.isArray(Ft)
                  ? (B = Ft[k])
                  : (B = Ft),
              it.copy(_.viewport),
              ft.copy(_.scissor),
              (ct = _.scissorTest));
          } else (it.copy(pt).multiplyScalar(Z).floor(), ft.copy(Bt).multiplyScalar(Z).floor(), (ct = le));
          if (
            (k !== 0 && (B = z),
            g.bindFramebuffer(I.FRAMEBUFFER, B) && g.drawBuffers(_, B),
            g.viewport(it),
            g.scissor(ft),
            g.setScissorTest(ct),
            q)
          ) {
            let gt = $.get(_.texture);
            I.framebufferTexture2D(
              I.FRAMEBUFFER,
              I.COLOR_ATTACHMENT0,
              I.TEXTURE_CUBE_MAP_POSITIVE_X + O,
              gt.__webglTexture,
              k,
            );
          } else if (vt) {
            let gt = O;
            for (let Qt = 0; Qt < _.textures.length; Qt++) {
              let Ft = $.get(_.textures[Qt]);
              I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0 + Qt, Ft.__webglTexture, k, gt);
            }
          } else if (_ !== null && k !== 0) {
            let gt = $.get(_.texture);
            I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, gt.__webglTexture, k);
          }
          J = -1;
        }));
      function _l(_) {
        let O = $.get(_);
        return (
          (O.__readFormat !== _.format || O.__readType !== _.type) &&
            ((O.__readFormat = _.format),
            (O.__readType = _.type),
            (O.__formatReadable = R.textureFormatReadable(_.format)),
            (O.__typeReadable = R.textureTypeReadable(_.type))),
          O
        );
      }
      ((this.readRenderTargetPixels = function (_, O, k, B, q, vt, _t, gt = 0) {
        if (!(_ && _.isWebGLRenderTarget)) {
          Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let Qt = $.get(_).__webglFramebuffer;
        if ((_.isWebGLCubeRenderTarget && _t !== void 0 && (Qt = Qt[_t]), Qt)) {
          g.bindFramebuffer(I.FRAMEBUFFER, Qt);
          try {
            let Ft = _.textures[gt],
              Jt = Ft.format,
              Kt = Ft.type;
            _.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + gt);
            let Rt = _l(Ft);
            if (Rt.__formatReadable === !1) {
              Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              return;
            }
            if (Rt.__typeReadable === !1) {
              Ot(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            O >= 0 &&
              O <= _.width - B &&
              k >= 0 &&
              k <= _.height - q &&
              I.readPixels(O, k, B, q, mt.convert(Jt), mt.convert(Kt), vt);
          } finally {
            let Ft = et !== null ? $.get(et).__webglFramebuffer : null;
            g.bindFramebuffer(I.FRAMEBUFFER, Ft);
          }
        }
      }),
        (this.readRenderTargetPixelsAsync = async function (_, O, k, B, q, vt, _t, gt = 0) {
          if (!(_ && _.isWebGLRenderTarget))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          let Qt = $.get(_).__webglFramebuffer;
          if ((_.isWebGLCubeRenderTarget && _t !== void 0 && (Qt = Qt[_t]), Qt))
            if (O >= 0 && O <= _.width - B && k >= 0 && k <= _.height - q) {
              g.bindFramebuffer(I.FRAMEBUFFER, Qt);
              let Ft = _.textures[gt],
                Jt = Ft.format,
                Kt = Ft.type;
              _.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + gt);
              let Rt = _l(Ft);
              if (Rt.__formatReadable === !1)
                throw new Error(
                  "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
                );
              if (Rt.__typeReadable === !1)
                throw new Error(
                  "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
                );
              let ae = I.createBuffer();
              (I.bindBuffer(I.PIXEL_PACK_BUFFER, ae),
                I.bufferData(I.PIXEL_PACK_BUFFER, vt.byteLength, I.STREAM_READ),
                I.readPixels(O, k, B, q, mt.convert(Jt), mt.convert(Kt), 0),
                I.bindBuffer(I.PIXEL_PACK_BUFFER, null));
              let _e = et !== null ? $.get(et).__webglFramebuffer : null;
              g.bindFramebuffer(I.FRAMEBUFFER, _e);
              let pe = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
              return (
                I.flush(),
                await Hh(I, pe, 4),
                I.bindBuffer(I.PIXEL_PACK_BUFFER, ae),
                I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, vt),
                I.bindBuffer(I.PIXEL_PACK_BUFFER, null),
                I.deleteBuffer(ae),
                I.deleteSync(pe),
                vt
              );
            } else
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
              );
        }),
        (this.copyFramebufferToTexture = function (_, O = null, k = 0) {
          let B = Math.pow(2, -k),
            q = Math.floor(_.image.width * B),
            vt = Math.floor(_.image.height * B),
            _t = O !== null ? O.x : 0,
            gt = O !== null ? O.y : 0;
          (X.setTexture2D(_, 0), I.copyTexSubImage2D(I.TEXTURE_2D, k, 0, 0, _t, gt, q, vt), g.unbindTexture());
        }),
        (this.copyTextureToTexture = function (_, O, k = null, B = null, q = 0, vt = 0) {
          let _t,
            gt,
            Qt,
            Ft,
            Jt,
            Kt,
            Rt,
            ae,
            _e,
            pe = _.isCompressedTexture ? _.mipmaps[vt] : _.image;
          if (k !== null)
            ((_t = k.max.x - k.min.x),
              (gt = k.max.y - k.min.y),
              (Qt = k.isBox3 ? k.max.z - k.min.z : 1),
              (Ft = k.min.x),
              (Jt = k.min.y),
              (Kt = k.isBox3 ? k.min.z : 0));
          else {
            let Me = Math.pow(2, -q);
            ((_t = Math.floor(pe.width * Me)),
              (gt = Math.floor(pe.height * Me)),
              _.isDataArrayTexture ? (Qt = pe.depth) : _.isData3DTexture ? (Qt = Math.floor(pe.depth * Me)) : (Qt = 1),
              (Ft = 0),
              (Jt = 0),
              (Kt = 0));
          }
          B !== null ? ((Rt = B.x), (ae = B.y), (_e = B.z)) : ((Rt = 0), (ae = 0), (_e = 0));
          let ue = mt.convert(O.format),
            $e = mt.convert(O.type),
            Pt;
          (O.isData3DTexture
            ? (X.setTexture3D(O, 0), (Pt = I.TEXTURE_3D))
            : O.isDataArrayTexture || O.isCompressedArrayTexture
              ? (X.setTexture2DArray(O, 0), (Pt = I.TEXTURE_2D_ARRAY))
              : (X.setTexture2D(O, 0), (Pt = I.TEXTURE_2D)),
            g.activeTexture(I.TEXTURE0),
            g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, O.flipY),
            g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha),
            g.pixelStorei(I.UNPACK_ALIGNMENT, O.unpackAlignment));
          let De = g.getParameter(I.UNPACK_ROW_LENGTH),
            te = g.getParameter(I.UNPACK_IMAGE_HEIGHT),
            ii = g.getParameter(I.UNPACK_SKIP_PIXELS),
            xi = g.getParameter(I.UNPACK_SKIP_ROWS),
            Gi = g.getParameter(I.UNPACK_SKIP_IMAGES);
          (g.pixelStorei(I.UNPACK_ROW_LENGTH, pe.width),
            g.pixelStorei(I.UNPACK_IMAGE_HEIGHT, pe.height),
            g.pixelStorei(I.UNPACK_SKIP_PIXELS, Ft),
            g.pixelStorei(I.UNPACK_SKIP_ROWS, Jt),
            g.pixelStorei(I.UNPACK_SKIP_IMAGES, Kt));
          let Tn = _.isDataArrayTexture || _.isData3DTexture,
            he = O.isDataArrayTexture || O.isData3DTexture;
          if (_.isDepthTexture) {
            let Me = $.get(_),
              Vi = $.get(O),
              fe = $.get(Me.__renderTarget),
              Di = $.get(Vi.__renderTarget);
            (g.bindFramebuffer(I.READ_FRAMEBUFFER, fe.__webglFramebuffer),
              g.bindFramebuffer(I.DRAW_FRAMEBUFFER, Di.__webglFramebuffer));
            for (let In = 0; In < Qt; In++)
              (Tn &&
                (I.framebufferTextureLayer(
                  I.READ_FRAMEBUFFER,
                  I.COLOR_ATTACHMENT0,
                  $.get(_).__webglTexture,
                  q,
                  Kt + In,
                ),
                I.framebufferTextureLayer(
                  I.DRAW_FRAMEBUFFER,
                  I.COLOR_ATTACHMENT0,
                  $.get(O).__webglTexture,
                  vt,
                  _e + In,
                )),
                I.blitFramebuffer(Ft, Jt, _t, gt, Rt, ae, _t, gt, I.DEPTH_BUFFER_BIT, I.NEAREST));
            (g.bindFramebuffer(I.READ_FRAMEBUFFER, null), g.bindFramebuffer(I.DRAW_FRAMEBUFFER, null));
          } else if (q !== 0 || _.isRenderTargetTexture || $.has(_)) {
            let Me = $.get(_),
              Vi = $.get(O);
            (g.bindFramebuffer(I.READ_FRAMEBUFFER, A), g.bindFramebuffer(I.DRAW_FRAMEBUFFER, L));
            for (let fe = 0; fe < Qt; fe++)
              (Tn
                ? I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Me.__webglTexture, q, Kt + fe)
                : I.framebufferTexture2D(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, Me.__webglTexture, q),
                he
                  ? I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Vi.__webglTexture, vt, _e + fe)
                  : I.framebufferTexture2D(
                      I.DRAW_FRAMEBUFFER,
                      I.COLOR_ATTACHMENT0,
                      I.TEXTURE_2D,
                      Vi.__webglTexture,
                      vt,
                    ),
                q !== 0
                  ? I.blitFramebuffer(Ft, Jt, _t, gt, Rt, ae, _t, gt, I.COLOR_BUFFER_BIT, I.NEAREST)
                  : he
                    ? I.copyTexSubImage3D(Pt, vt, Rt, ae, _e + fe, Ft, Jt, _t, gt)
                    : I.copyTexSubImage2D(Pt, vt, Rt, ae, Ft, Jt, _t, gt));
            (g.bindFramebuffer(I.READ_FRAMEBUFFER, null), g.bindFramebuffer(I.DRAW_FRAMEBUFFER, null));
          } else
            he
              ? _.isDataTexture || _.isData3DTexture
                ? I.texSubImage3D(Pt, vt, Rt, ae, _e, _t, gt, Qt, ue, $e, pe.data)
                : O.isCompressedArrayTexture
                  ? I.compressedTexSubImage3D(Pt, vt, Rt, ae, _e, _t, gt, Qt, ue, pe.data)
                  : I.texSubImage3D(Pt, vt, Rt, ae, _e, _t, gt, Qt, ue, $e, pe)
              : _.isDataTexture
                ? I.texSubImage2D(I.TEXTURE_2D, vt, Rt, ae, _t, gt, ue, $e, pe.data)
                : _.isCompressedTexture
                  ? I.compressedTexSubImage2D(I.TEXTURE_2D, vt, Rt, ae, pe.width, pe.height, ue, pe.data)
                  : I.texSubImage2D(I.TEXTURE_2D, vt, Rt, ae, _t, gt, ue, $e, pe);
          (g.pixelStorei(I.UNPACK_ROW_LENGTH, De),
            g.pixelStorei(I.UNPACK_IMAGE_HEIGHT, te),
            g.pixelStorei(I.UNPACK_SKIP_PIXELS, ii),
            g.pixelStorei(I.UNPACK_SKIP_ROWS, xi),
            g.pixelStorei(I.UNPACK_SKIP_IMAGES, Gi),
            vt === 0 && O.generateMipmaps && I.generateMipmap(Pt),
            g.unbindTexture());
        }),
        (this.initRenderTarget = function (_) {
          $.get(_).__webglFramebuffer === void 0 && X.setupRenderTarget(_);
        }),
        (this.initTexture = function (_) {
          (_.isCubeTexture
            ? X.setTextureCube(_, 0)
            : _.isData3DTexture
              ? X.setTexture3D(_, 0)
              : _.isDataArrayTexture || _.isCompressedArrayTexture
                ? X.setTexture2DArray(_, 0)
                : X.setTexture2D(_, 0),
            g.unbindTexture());
        }),
        (this.resetState = function () {
          ((G = 0), (D = 0), (et = null), g.reset(), Mt.reset());
        }),
        typeof __THREE_DEVTOOLS__ < "u" &&
          __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })));
    }
    get coordinateSystem() {
      return fi;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t) {
      this._outputColorSpace = t;
      let e = this.getContext();
      ((e.drawingBufferColorSpace = Yt._getDrawingBufferColorSpace(t)),
        (e.unpackColorSpace = Yt._getUnpackColorSpace()));
    }
  };
  var pu = "tex/detail.jpg";
  var mu = "tex/detail-n.jpg";
  var Eu = "tex/panel.jpg";
  var gu = "tex/panel-n.jpg";
  var xu = "tex/water-n.jpg";
  var vu = "tex/stars.jpg";
  var $E = new Ds();
  function ds(n, t, e = !0) {
    let i = $E.load(n);
    return (t && (i.colorSpace = Je), e && (i.wrapS = i.wrapT = gn), (i.anisotropy = 8), i);
  }
  var Pe = {};
  function Su() {
    return (
      (Pe.detail = ds(pu, !0)),
      (Pe.detailN = ds(mu, !1)),
      (Pe.panel = ds(Eu, !0)),
      (Pe.panelN = ds(gu, !1)),
      (Pe.waterN = ds(xu, !1)),
      (Pe.stars = ds(vu, !0, !1)),
      (Pe.stars.mapping = rs),
      (Pe.noise3 = zE(64)),
      new Promise((n) => {
        let t = () =>
          Pe.stars.image && Pe.stars.image.complete && Pe.detail.image?.complete ? n() : setTimeout(t, 30);
        t();
      })
    );
  }
  function zE(n) {
    let t = new Uint8Array(n * n * n * 4),
      e = (l, c, u, f) => {
        ((l = ((l % f) + f) % f), (c = ((c % f) + f) % f), (u = ((u % f) + f) % f));
        let h = Math.imul(l, 374761393) ^ Math.imul(c, 668265263) ^ Math.imul(u, 1274126177);
        return ((h = Math.imul(h ^ (h >>> 13), 1274126177)), (h ^ (h >>> 16)) >>> 0);
      },
      i = (l, c, u, f) => {
        let h = l % 12,
          d = h < 8 ? c : u,
          E = h < 4 ? u : h === 12 || h === 14 ? c : f;
        return (h & 1 ? -d : d) + (h & 2 ? -E : E);
      },
      s = (l) => l * l * l * (l * (l * 6 - 15) + 10),
      r = (l, c, u, f) => {
        let h = Math.floor(l),
          d = Math.floor(c),
          E = Math.floor(u),
          v = l - h,
          m = c - d,
          p = u - E,
          y = s(v),
          Q = s(m),
          S = s(p),
          M = (T, x, b) => T + (x - T) * b,
          P = (T, x, b) => i(e(h + T, d + x, E + b, f), v - T, m - x, p - b);
        return M(
          M(M(P(0, 0, 0), P(1, 0, 0), y), M(P(0, 1, 0), P(1, 1, 0), y), Q),
          M(M(P(0, 0, 1), P(1, 0, 1), y), M(P(0, 1, 1), P(1, 1, 1), y), Q),
          S,
        );
      },
      a = (l, c, u, f) => {
        let h = Math.floor(l),
          d = Math.floor(c),
          E = Math.floor(u),
          v = 9;
        for (let m = -1; m <= 1; m++)
          for (let p = -1; p <= 1; p++)
            for (let y = -1; y <= 1; y++) {
              let Q = e(h + y, d + p, E + m, f),
                S = h + y + (Q & 255) / 255,
                M = d + p + ((Q >>> 8) & 255) / 255,
                P = E + m + ((Q >>> 16) & 255) / 255,
                T = (S - l) ** 2 + (M - c) ** 2 + (P - u) ** 2;
              T < v && (v = T);
            }
        return Math.sqrt(v);
      };
    for (let l = 0; l < n; l++)
      for (let c = 0; c < n; c++)
        for (let u = 0; u < n; u++) {
          let f = 0,
            h = 0.5,
            d = 4;
          for (let m = 0; m < 4; m++) {
            let p = d / n;
            ((f += h * r(u * p, c * p, l * p, d)), (h *= 0.5), (d *= 2));
          }
          let E = 0;
          ((h = 0.6), (d = 4));
          for (let m = 0; m < 3; m++) {
            let p = d / n;
            ((E += h * (1 - a(u * p, c * p, l * p, d))), (h *= 0.5), (d *= 2));
          }
          let v = (u + c * n + l * n * n) * 4;
          ((t[v] = Math.max(0, Math.min(255, (f * 0.9 + 0.5) * 255))),
            (t[v + 1] = Math.max(0, Math.min(255, (E / 1.05) * 255))),
            (t[v + 2] = 0),
            (t[v + 3] = 255));
        }
    let o = new Zn(t, n, n, n);
    return (
      (o.format = qe),
      (o.type = He),
      (o.wrapS = o.wrapT = o.wrapR = gn),
      (o.minFilter = Qe),
      (o.magFilter = Qe),
      (o.unpackAlignment = 1),
      (o.needsUpdate = !0),
      o
    );
  }
  function Mu(n, t = !1) {
    let e = n[0].index !== null,
      i = new Set(Object.keys(n[0].attributes)),
      s = new Set(Object.keys(n[0].morphAttributes)),
      r = {},
      a = {},
      o = n[0].morphTargetsRelative,
      l = new ve(),
      c = 0;
    for (let u = 0; u < n.length; ++u) {
      let f = n[u],
        h = 0;
      if (e !== (f.index !== null))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              u +
              ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.",
          ),
          null
        );
      for (let d in f.attributes) {
        if (!i.has(d))
          return (
            console.error(
              "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                u +
                '. All geometries must have compatible attributes; make sure "' +
                d +
                '" attribute exists among all geometries, or in none of them.',
            ),
            null
          );
        (r[d] === void 0 && (r[d] = []), r[d].push(f.attributes[d]), h++);
      }
      if (h !== i.size)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              u +
              ". Make sure all geometries have the same number of attributes.",
          ),
          null
        );
      if (o !== f.morphTargetsRelative)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              u +
              ". .morphTargetsRelative must be consistent throughout all geometries.",
          ),
          null
        );
      for (let d in f.morphAttributes) {
        if (!s.has(d))
          return (
            console.error(
              "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                u +
                ".  .morphAttributes must be consistent throughout all geometries.",
            ),
            null
          );
        (a[d] === void 0 && (a[d] = []), a[d].push(f.morphAttributes[d]));
      }
      if (t) {
        let d;
        if (e) d = f.index.count;
        else if (f.attributes.position !== void 0) d = f.attributes.position.count;
        else
          return (
            console.error(
              "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                u +
                ". The geometry must have either an index or a position attribute",
            ),
            null
          );
        (l.addGroup(c, d, u), (c += d));
      }
    }
    if (e) {
      let u = 0,
        f = [];
      for (let h = 0; h < n.length; ++h) {
        let d = n[h].index;
        for (let E = 0; E < d.count; ++E) f.push(d.getX(E) + u);
        u += n[h].attributes.position.count;
      }
      l.setIndex(f);
    }
    for (let u in r) {
      let f = yu(r[u]);
      if (!f)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + u + " attribute.",
          ),
          null
        );
      l.setAttribute(u, f);
    }
    for (let u in a) {
      let f = a[u][0].length;
      if (f !== 0) {
        ((l.morphAttributes = l.morphAttributes || {}), (l.morphAttributes[u] = []));
        for (let h = 0; h < f; ++h) {
          let d = [];
          for (let v = 0; v < a[u].length; ++v) d.push(a[u][v][h]);
          let E = yu(d);
          if (!E)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
                  u +
                  " morphAttribute.",
              ),
              null
            );
          l.morphAttributes[u].push(E);
        }
      }
    }
    return l;
  }
  function yu(n) {
    let t,
      e,
      i,
      s = -1,
      r = 0;
    for (let c = 0; c < n.length; ++c) {
      let u = n[c];
      if ((t === void 0 && (t = u.array.constructor), t !== u.array.constructor))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.",
          ),
          null
        );
      if ((e === void 0 && (e = u.itemSize), e !== u.itemSize))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.",
          ),
          null
        );
      if ((i === void 0 && (i = u.normalized), i !== u.normalized))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.",
          ),
          null
        );
      if ((s === -1 && (s = u.gpuType), s !== u.gpuType))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.",
          ),
          null
        );
      r += u.count * e;
    }
    let a = new t(r),
      o = new xe(a, e, i),
      l = 0;
    for (let c = 0; c < n.length; ++c) {
      let u = n[c];
      if (u.isInterleavedBufferAttribute) {
        let f = l / e;
        for (let h = 0, d = u.count; h < d; h++)
          for (let E = 0; E < e; E++) {
            let v = u.getComponent(h, E);
            o.setComponent(h + f, E, v);
          }
      } else a.set(u.array, l);
      l += u.count * e;
    }
    return (s !== void 0 && (o.gpuType = s), o);
  }
  function Pu(n, t = 1e-4) {
    t = Math.max(t, Number.EPSILON);
    let e = {},
      i = n.getIndex(),
      s = n.getAttribute("position"),
      r = i ? i.count : s.count,
      a = 0,
      o = Object.keys(n.attributes),
      l = {},
      c = {},
      u = [],
      f = ["getX", "getY", "getZ", "getW"],
      h = ["setX", "setY", "setZ", "setW"];
    for (let y = 0, Q = o.length; y < Q; y++) {
      let S = o[y],
        M = n.attributes[S];
      l[S] = new M.constructor(new M.array.constructor(M.count * M.itemSize), M.itemSize, M.normalized);
      let P = n.morphAttributes[S];
      P &&
        (c[S] || (c[S] = []),
        P.forEach((T, x) => {
          let b = new T.array.constructor(T.count * T.itemSize);
          c[S][x] = new T.constructor(b, T.itemSize, T.normalized);
        }));
    }
    let d = t * 0.5,
      E = Math.log10(1 / t),
      v = Math.pow(10, E),
      m = d * v;
    for (let y = 0; y < r; y++) {
      let Q = i ? i.getX(y) : y,
        S = "";
      for (let M = 0, P = o.length; M < P; M++) {
        let T = o[M],
          x = n.getAttribute(T),
          b = x.itemSize;
        for (let N = 0; N < b; N++) S += `${Math.trunc(x[f[N]](Q) * v + m)},`;
      }
      if (S in e) u.push(e[S]);
      else {
        for (let M = 0, P = o.length; M < P; M++) {
          let T = o[M],
            x = n.getAttribute(T),
            b = n.morphAttributes[T],
            N = x.itemSize,
            w = l[T],
            C = c[T];
          for (let z = 0; z < N; z++) {
            let A = f[z],
              L = h[z];
            if ((w[L](a, x[A](Q)), b)) for (let G = 0, D = b.length; G < D; G++) C[G][L](a, b[G][A](Q));
          }
        }
        ((e[S] = a), u.push(a), a++);
      }
    }
    let p = n.clone();
    for (let y in n.attributes) {
      let Q = l[y];
      if ((p.setAttribute(y, new Q.constructor(Q.array.slice(0, a * Q.itemSize), Q.itemSize, Q.normalized)), y in c))
        for (let S = 0; S < c[y].length; S++) {
          let M = c[y][S];
          p.morphAttributes[y][S] = new M.constructor(M.array.slice(0, a * M.itemSize), M.itemSize, M.normalized);
        }
    }
    return (p.setIndex(u), p);
  }
  var oi = {
      uSunDir: { value: new F(0, 1, 0) },
      uSunColor: { value: new Tt(1, 1, 1) },
      uSkyZenith: { value: new Tt(0.2, 0.4, 0.8) },
      uSkyHorizon: { value: new Tt(0.6, 0.7, 0.8) },
      uTime: { value: 0 },
    },
    BE = `
attribute vec4 col4;
attribute vec3 plocal;
varying vec4 vCol;
varying vec3 vLocal;
varying float vDist;
`;
  function Qu() {
    let n = new ri({ roughness: 0.92, metalness: 0 });
    return (
      (n.onBeforeCompile = (t) => {
        ((t.uniforms.tDetail = { value: Pe.detail }),
          (t.uniforms.tDetailN = { value: Pe.detailN }),
          (t.vertexShader =
            BE +
            t.vertexShader
              .replace(
                "#include <begin_vertex>",
                `#include <begin_vertex>
      vCol = col4; vLocal = plocal;`,
              )
              .replace(
                "#include <project_vertex>",
                `#include <project_vertex>
      vDist = -mvPosition.z;`,
              )),
          (t.fragmentShader =
            `
      uniform sampler2D tDetail; uniform sampler2D tDetailN;
      varying vec4 vCol; varying vec3 vLocal; varying float vDist;
      vec3 triW(vec3 n){ vec3 w = pow(abs(n), vec3(4.0)); return w / (w.x + w.y + w.z); }
      float triDetail(vec3 p, vec3 w, float s){
        return texture2D(tDetail, p.yz * s).g * w.x + texture2D(tDetail, p.zx * s).g * w.y + texture2D(tDetail, p.xy * s).g * w.z;
      }
    ` +
            t.fragmentShader
              .replace(
                "#include <color_fragment>",
                `
      vec3 upN = normalize(vLocal);
      vec3 tw = triW(upN);
      // Zwei Ma\xDFst\xE4be, gegeneinander verdreht -> keine sichtbare Kachelung
      vec3 lp = vLocal;
      vec3 lp2 = vec3(lp.y * 0.8 + lp.z * 0.6, lp.z * 0.8 - lp.y * 0.6, lp.x);
      float dNear = triDetail(lp, tw, 1.0 / 3.1);
      float dMid = triDetail(lp2, tw.yzx, 1.0 / 23.0);
      float dFar = triDetail(lp, tw, 1.0 / 190.0);
      float fadeNear = 1.0 - smoothstep(30.0, 160.0, vDist);
      float fadeMid = 1.0 - smoothstep(400.0, 2500.0, vDist);
      float det = mix(1.0, 0.55 + dNear * 0.9, fadeNear * 0.8);
      det *= mix(1.0, 0.6 + dMid * 0.8, fadeMid * 0.7);
      det *= 0.75 + dFar * 0.5;
      diffuseColor.rgb *= vCol.rgb * det;
    `,
              )
              .replace(
                "#include <roughnessmap_fragment>",
                `
      float roughnessFactor = mix(0.95, 0.28, vCol.a);
    `,
              )));
      }),
      (n.customProgramCacheKey = () => "terrain1"),
      n
    );
  }
  function Ru() {
    return new Se({
      uniforms: {
        ...oi,
        tWaterN: { value: Pe.waterN },
        uWater: { value: new Tt(0.012, 0.06, 0.09) },
        uAmbient: { value: 0.3 },
      },
      vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec3 plocal;
      varying vec3 vW; varying vec3 vUp; varying vec3 vL;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz; vUp = normalize(normal); vL = plocal;
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }`,
      fragmentShader: `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D tWaterN; uniform vec3 uWater; uniform vec3 uSunDir; uniform vec3 uSunColor;
      uniform vec3 uSkyZenith; uniform vec3 uSkyHorizon; uniform float uTime; uniform float uAmbient;
      varying vec3 vW; varying vec3 vUp; varying vec3 vL;
      vec3 wn(vec2 uv){ return texture2D(tWaterN, uv).xyz * 2.0 - 1.0; }
      void main(){
        #include <logdepthbuf_fragment>
        vec3 up = normalize(vUp);
        vec3 t1 = normalize(abs(up.z) < 0.9 ? vec3(-up.y, up.x, 0.0) : vec3(0.0, -up.z, up.y));
        vec3 t2 = cross(up, t1);
        vec2 p = vec2(dot(vL, t1), dot(vL, t2));
        float dist = length(vW);
        vec3 n1 = wn(p / 37.0 + vec2(uTime * 0.012, uTime * 0.007));
        vec3 n2 = wn(p / 11.0 * mat2(0.8, -0.6, 0.6, 0.8) - vec2(uTime * 0.02, -uTime * 0.013));
        vec3 n3 = wn(p / 180.0 + vec2(-uTime * 0.004, uTime * 0.003));
        vec3 nt = n1 + n2 * 0.7 + n3 * 0.8;
        float flat_ = smoothstep(200.0, 6000.0, dist);
        nt.xy *= mix(0.55, 0.12, flat_);
        vec3 n = normalize(t1 * nt.x + t2 * nt.y + up * max(nt.z, 0.3));
        vec3 v = normalize(vW);
        float ndv = max(dot(n, -v), 0.0);
        float fres = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
        vec3 r = reflect(v, n);
        float ru = max(dot(r, up), 0.0);
        vec3 sky = mix(uSkyHorizon, uSkyZenith, pow(ru, 0.45));
        float sunUp = dot(up, uSunDir);
        vec3 body = uWater * (uAmbient + max(sunUp, 0.0) * uSunColor * 0.35);
        // Subsurface-Schimmer im Wellenr\xFCcken
        body += uWater * 1.5 * pow(max(dot(v, uSunDir), 0.0), 4.0) * max(nt.x + nt.y, 0.0) * max(sunUp, 0.0);
        float spec = pow(max(dot(r, uSunDir), 0.0), mix(900.0, 200.0, flat_)) * mix(60.0, 12.0, flat_);
        vec3 col = mix(body, sky, fres) + uSunColor * spec * step(0.0, sunUp);
        gl_FragColor = vec4(col, 1.0);
      }`,
    });
  }
  function Tu() {
    let n = new Zi(0.35, 0.5, 1, 6, 1),
      t = new Sn(0.5, 1, 7, 1),
      e = new Bs(0.5, 2);
    (bu(e, 0.1, 3), e.deleteAttribute("uv"), e.deleteAttribute("normal"), (e = Pu(e)), e.computeVertexNormals());
    let i = new $s(0.6, 1);
    (bu(i, 0.22, 7), i.computeVertexNormals());
    let s = (r, a, o) => new ri({ color: r, roughness: a, flatShading: !!o });
    return {
      geo: { trunks: n, cones: t, crowns: e, rocks: i },
      mat: {
        trunks: s(new Tt(0.09, 0.06, 0.04), 0.95),
        cones: _u(s(new Tt(0.035, 0.08, 0.032), 0.9), 9),
        crowns: _u(s(new Tt(0.06, 0.13, 0.03), 0.85), 7),
        rocks: s(new Tt(0.3, 0.29, 0.27), 0.9, !0),
      },
    };
  }
  function _u(n, t) {
    return (
      (n.onBeforeCompile = (e) => {
        ((e.uniforms.uSunDirF = oi.uSunDir),
          (e.vertexShader =
            `varying vec3 vLeaf; varying float vSeed; varying float vH;
` +
            e.vertexShader.replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
      vec3 it = instanceMatrix[3].xyz;
      vSeed = fract(sin(dot(it, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
      vLeaf = position * ${t.toFixed(1)} + it * 0.37;
      vH = position.y + 0.5;`,
            )),
          (e.fragmentShader =
            `varying vec3 vLeaf; varying float vSeed; varying float vH; uniform vec3 uSunDirF;
      float h31(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z); }
    ` +
            e.fragmentShader
              .replace(
                "#include <color_fragment>",
                `#include <color_fragment>
      float leaf = vn(vLeaf) * 0.6 + vn(vLeaf * 2.7) * 0.4;
      vec3 tint = mix(vec3(0.85, 1.0, 0.75), vec3(1.25, 1.1, 0.7), vSeed);
      diffuseColor.rgb *= tint * (0.45 + leaf * 0.95) * (0.75 + vH * 0.45);`,
              )
              .replace(
                "#include <emissivemap_fragment>",
                `#include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * 0.0;`,
              )));
      }),
      (n.customProgramCacheKey = () => "foliage" + t),
      n
    );
  }
  function bu(n, t, e) {
    let i = n.attributes.position,
      s = new Map(),
      r = e,
      a = () => ((r = (r * 16807) % 2147483647), r / 2147483647);
    for (let o = 0; o < i.count; o++) {
      let l = `${i.getX(o).toFixed(3)},${i.getY(o).toFixed(3)},${i.getZ(o).toFixed(3)}`;
      s.has(l) || s.set(l, 1 + (a() - 0.5) * 2 * t);
      let c = s.get(l);
      i.setXYZ(o, i.getX(o) * c, i.getY(o) * c, i.getZ(o) * c);
    }
    n.computeVertexNormals();
  }
  function Iu() {
    let n = (t, e, i) => {
      let s = new ri({ color: t, roughness: e, metalness: i, map: Pe.panel, normalMap: Pe.panelN });
      return (s.normalScale.set(0.7, 0.7), s);
    };
    return {
      Hull: n(new Tt(0.72, 0.73, 0.75), 0.5, 0.35),
      HullDark: n(new Tt(0.16, 0.17, 0.19), 0.55, 0.5),
      Accent: n(new Tt(0.9, 0.38, 0.06), 0.45, 0.2),
      Metal: new ri({ color: 9080210, roughness: 0.3, metalness: 1 }),
      Glass: new Gs({ color: 793122, roughness: 0.05, metalness: 0.2, clearcoat: 1, transparent: !0, opacity: 0.72 }),
      Glow: new ri({ color: 0, emissive: new Tt(0.35, 0.75, 1), emissiveIntensity: 4 }),
    };
  }
  var go = class {
    constructor(t) {
      let e = `(()=>{var it=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],at=d=>d>>>0,tt=(d,t)=>Math.imul(d,t)>>>0,J=class d{constructor(t=1337){let n=new Uint8Array(256);for(let a=0;a<256;a++)n[a]=a;let o=at(tt(t|0,2654435761)+12345);for(let a=255;a>0;a--){o=at(tt(o,1664525)+1013904223);let e=(o>>>8)%(a+1),f=n[a];n[a]=n[e],n[e]=f}this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let a=0;a<512;a++)this.perm[a]=n[a&255],this.permMod12[a]=this.perm[a]%12;this.seedHash=at(tt(t|0,747796405)+2891336453)}simplex(t,n,o){let a=.3333333333333333,e=1/6,f=this.perm,l=this.permMod12,c=(t+n+o)*a,h=Math.floor(t+c),i=Math.floor(n+c),b=Math.floor(o+c),m=(h+i+b)*e,w=t-(h-m),p=n-(i-m),r=o-(b-m),s,k,g,M,U,j;w>=p?p>=r?(s=1,k=0,g=0,M=1,U=1,j=0):w>=r?(s=1,k=0,g=0,M=1,U=0,j=1):(s=0,k=0,g=1,M=1,U=0,j=1):p<r?(s=0,k=0,g=1,M=0,U=1,j=1):w<r?(s=0,k=1,g=0,M=0,U=1,j=1):(s=0,k=1,g=0,M=1,U=1,j=0);let C=w-s+e,R=p-k+e,H=r-g+e,T=w-M+2*e,I=p-U+2*e,L=r-j+2*e,v=w-1+3*e,S=p-1+3*e,N=r-1+3*e,O=h&255,K=i&255,V=b&255,q=it[l[O+f[K+f[V]]]],y=it[l[O+s+f[K+k+f[V+g]]]],x=it[l[O+M+f[K+U+f[V+j]]]],A=it[l[O+1+f[K+1+f[V+1]]]],D=0,u;return u=.6-w*w-p*p-r*r,u>0&&(u*=u,D+=u*u*(q[0]*w+q[1]*p+q[2]*r)),u=.6-C*C-R*R-H*H,u>0&&(u*=u,D+=u*u*(y[0]*C+y[1]*R+y[2]*H)),u=.6-T*T-I*I-L*L,u>0&&(u*=u,D+=u*u*(x[0]*T+x[1]*I+x[2]*L)),u=.6-v*v-S*S-N*N,u>0&&(u*=u,D+=u*u*(A[0]*v+A[1]*S+A[2]*N)),32*D}fbm(t,n,o,a,e=2,f=.5){let l=0,c=1,h=0;for(let i=0;i<a;i++)l+=c*this.simplex(t+i*17.13,n-i*9.71,o+i*3.37),h+=c,c*=f,t*=e,n*=e,o*=e;return l/Math.max(h,1e-9)}ridged(t,n,o,a,e=2,f=.5,l=2){let c=0,h=1,i=0,b=1;for(let m=0;m<a;m++){let w=1-Math.abs(this.simplex(t-m*5.1,n+m*11.7,o+m*7.3));w=Math.pow(w,l)*b,b=Math.min(Math.max(w*1.5,0),1),c+=w*h,i+=h,h*=f,t*=e,n*=e,o*=e}return c/Math.max(i,1e-9)}billow(t,n,o,a,e=2,f=.5){let l=0,c=1,h=0;for(let i=0;i<a;i++)l+=c*Math.abs(this.simplex(t+i*1.7,n+i*2.3,o-i*4.1)),h+=c,c*=f,t*=e,n*=e,o*=e;return l/Math.max(h,1e-9)}static hash3(t,n,o,a){let e=at(a^tt(t|0,73856093)^tt(n|0,19349663)^tt(o|0,83492791));return e^=e>>>16,e=tt(e,2146121005),e^=e>>>15,e=tt(e,2221713035),e^=e>>>16,e>>>0}worley(t,n,o){let a=Math.floor(t),e=Math.floor(n),f=Math.floor(o),l=1e9,c=0;for(let h=-1;h<=1;h++)for(let i=-1;i<=1;i++)for(let b=-1;b<=1;b++){let m=d.hash3(a+b,e+i,f+h,this.seedHash),w=a+b+(m&1023)/1023,p=e+i+(m>>>10&1023)/1023,r=f+h+(m>>>20&1023)/1023,s=(t-w)**2+(n-p)**2+(o-r)**2;s<l&&(l=s,c=m)}return[Math.sqrt(l),c]}};var F=(d,t,n)=>{let o=Math.min(Math.max((n-d)/(t-d),0),1);return o*o*(3-2*o)},G=(d,t,n)=>(n=Math.min(Math.max(n,0),1),[d[0]+(t[0]-d[0])*n,d[1]+(t[1]-d[1])*n,d[2]+(t[2]-d[2])*n]),ht=class{constructor(t){this.P=t;let n=t.seed;this.nC=new J(n*11+1),this.nM=new J(n*11+2),this.nD=new J(n*11+3),this.nW=new J(n*11+4),this.nMo=new J(n*11+5),this.nCr=new J(n*11+6),this.bias=-(t.oceanFraction-.5)*.6}height(t,n,o){switch(this.P.style){case"desert":return this.desert(t,n,o);case"ice":return this.ice(t,n,o);case"barren":return this.barren(t,n,o);default:return this.terran(t,n,o)}}craters(t,n,o,a,e){let[f,l]=this.nCr.worley(t*a,n*a,o*a);if(l%5>1)return 0;let c=.18+.22*(l>>>8&255)/255,h=f/c;if(h>1.5)return 0;let i=0;return h<1&&(i=(h*h-1)*e),i+=Math.exp(-(((h-1)/.18)**2))*e*.35,i}terran(t,n,o){let a=this.P,e=a.relief,f=this.nW,l=this.nD,c=f.fbm(t*1.7,n*1.7,o*1.7,3),h=f.fbm(t*1.7+31.1,n*1.7+7.7,o*1.7+2.3,3),i=f.fbm(t*1.7-5.3,n*1.7+19.9,o*1.7+11.1,3),b=t+c*.18,m=n+h*.18,w=o+i*.18,p=this.nC.fbm(b*1.15,m*1.15,w*1.15,7)+this.bias,r;if(p<0){let g=F(0,-.25,p);r=-e*(.02+.45*g)-e*.02*l.fbm(t*30,n*30,o*30,4),r*=F(0,-.03,p)*.95+.05}else{let g=F(0,.35,p),M=this.nM.ridged(b*4.2,m*4.2,w*4.2,8,2.05,.5,2.2),U=F(.08,.4,p)*F(.25,.65,this.nM.fbm(t*1.6,n*1.6,o*1.6,3)*.5+.5);r=e*(.015+.08*g),r+=e*Math.pow(M,1.6)*U,r+=e*.035*l.fbm(b*18,m*18,w*18,6)*(.4+g);let j=F(0,.05,p);r*=j,r+=4*j}r+=e*.009*l.fbm(t*110,n*110,o*110,4)*(p>0?1:.3);let s=a.radius/70,k=a.radius/5;return r+=.9*l.fbm(t*s,n*s,o*s,3),r+=.22*l.simplex(t*k,n*k,o*k),r}desert(t,n,o){let a=this.P,e=a.relief,f=this.nW,l=t+f.fbm(t*2,n*2,o*2,3)*.12,c=n+f.fbm(t*2+9.1,n*2+1.2,o*2+4.4,3)*.12,h=o+f.fbm(t*2+3.3,n*2+8.8,o*2+1.1,3)*.12,i=this.nC.fbm(l*1.6,c*1.6,h*1.6,6)*.5+.5,b=7,m=i*b,w=Math.floor(m),p=m-w;i=(w+Math.pow(p,6))/b;let r=e*.55*i,s=this.nM.ridged(l*3,c*3,h*3,5,2,.5,3);r-=e*.45*F(.55,.9,s);let k=F(.2,.6,this.nMo.fbm(t*2.5,n*2.5,o*2.5,3)*.5+.5),g=t*260,M=n*260,U=o*260,j=1-Math.abs(this.nD.simplex(g*1.6,M,U*.6));r+=45*k*j*j,r+=e*.03*this.nD.fbm(l*25,c*25,h*25,5);let C=a.radius/30;return r+=1.5*this.nD.fbm(t*C,n*C,o*C,3),r}ice(t,n,o){let a=this.P,e=a.relief,f=this.nW,l=t+f.fbm(t*2.2,n*2.2,o*2.2,3)*.15,c=n+f.fbm(t*2.2+7,n*2.2+7,o*2.2+7,3)*.15,h=o+f.fbm(t*2.2-3,n*2.2-3,o*2.2-3,3)*.15,i=e*.25*this.nC.fbm(l*1.4,c*1.4,h*1.4,6);i+=e*.8*Math.pow(this.nM.ridged(l*3.5,c*3.5,h*3.5,7,2,.5,2.5),2)*F(-.1,.4,this.nC.fbm(t*.9,n*.9,o*.9,3));let b=this.nD.ridged(t*140,n*140,o*140,3,2,.5,6);i-=18*F(.75,.95,b);let m=a.radius/25;return i+=1.2*this.nD.fbm(t*m,n*m,o*m,3),i}barren(t,n,o){let a=this.P,e=a.relief,f=e*.3*this.nC.fbm(t*1.8,n*1.8,o*1.8,6);f+=e*.35*Math.pow(this.nM.ridged(t*4,n*4,o*4,6),2),f+=this.craters(t,n,o,5,e*.45),f+=this.craters(t,n,o,17,e*.15),f+=this.craters(t,n,o,60,e*.045),f+=this.craters(t,n,o,240,e*.012);let l=a.radius/20;return f+=.8*this.nD.fbm(t*l,n*l,o*l,3),f}colorize(t,n,o,a,e,f){let l=this.P,c=l.palette,h=Math.max(l.relief,1),i=this.nMo.fbm(t*3.2,n*3.2,o*3.2,4)*.5+.5,b=this.nMo.fbm(t*180,n*180,o*180,3),m=Math.abs(o),w=a/h,p=F(.86,.62,e),r,s=.1,k=0,g=0;if(f.moist=i,l.style==="terran"){let U=l.temperature-m*.55-Math.max(w,0)*.7;if(l.ocean&&a<0)r=G(c.beach,c.seabed,F(-2,-80,a)),s=.6;else if(l.ocean&&a<12+6*b)r=c.beach,s=F(8,0,a)*.5;else{let j=this.nMo.fbm(t*900,n*900,o*900,3),C=G(c.lowland2,c.lowland,F(.3,.7,i+b*.15+j*.12)),R=this.nMo.fbm(t*55,n*55,o*55,4)*.5+.5+(i-.5)*.6,H=F(.52,.62,R)*F(.78,.9,e)*F(.3,.12,w)*F(.15,.3,U);r=G(C,c.forest,H*.85),r=G(r,c.highland,F(.18,.45,w+b*.05)),r=G(r,c.rock,p);let T=F(.2,.05,U+b*.05)*F(.55,.8,e);r=G(r,c.snow,T),s=T*.35,k=H*(1-T)*(1-p)}g=Math.min(Math.max(p*.8+F(.3,.5,w)*.3,0),1)}else l.style==="desert"?(r=G(c.lowland,c.lowland2,F(.35,.65,i+b*.2)),r=G(r,c.highland,F(.25,.5,w)),r=G(r,c.rock,p),r=G(r,c.snow,F(-.15,-.3,w)*F(.9,.97,e)),s=.02,g=Math.min(.25+p*.6,1)):l.style==="ice"?(r=G(c.snow,c.lowland,F(.4,.7,i+b*.2)),r=G(r,c.rock,p*.8),r=G(r,c.special,F(-5,-15,a)*.7),s=.35+.3*F(.95,1,e),g=p*.7):(r=G(c.lowland,c.lowland2,F(.3,.7,i+b*.25)),r=G(r,c.highland,F(-.1,.25,w)),r=G(r,c.rock,p),s=0,g=Math.min(.35+p*.5,1));let M=.92+.16*b;return f.r=r[0]*M,f.g=r[1]*M,f.b=r[2]*M,f.wet=Math.min(Math.max(s,0),1),f.forest=k,f.rocks=g,f}};var kt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function xt(d){let t=kt[d],n=[t[1],t[2],t[0]],o=[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]];return[t,n,o]}var yt=[0,1,2,3,4,5].map(xt);function ct(d,t,n,o,a=0){let[e,f,l]=yt[d],c=2*t-1,h=2*n-1,i=e[0]+f[0]*c+l[0]*h,b=e[1]+f[1]*c+l[1]*h,m=e[2]+f[2]*c+l[2]*h,w=i*i,p=b*b,r=m*m,s=i*Math.sqrt(Math.max(0,1-p/2-r/2+p*r/3)),k=b*Math.sqrt(Math.max(0,1-r/2-w/2+r*w/3)),g=m*Math.sqrt(Math.max(0,1-w/2-p/2+w*p/3)),M=Math.hypot(s,k,g)||1;return o[a]=s/M,o[a+1]=k/M,o[a+2]=g/M,o}var bt=new Map;function At(d){let t=bt.get(d.name);return t||(t=new ht(d),bt.set(d.name,t)),t}function pt(d,t,n,o,a,e,f){let l=At(d),c=d.radius,h=1/(1<<n),i=o*h,b=a*h,m=e+3,w=c*Math.PI*.5,p=ct(t,i+h*.5,b+h*.5,[0,0,0]),r=p[0]*c,s=p[1]*c,k=p[2]*c,g=new Float64Array(m*m*3),M=new Float64Array(m*m*3),U=new Float64Array(m*m),j=1e12,C=-1e12,R=[0,0,0];for(let q=0;q<m;q++)for(let y=0;y<m;y++){let x=i+h*(y-1)/e,A=b+h*(q-1)/e;ct(t,x,A,R);let D=l.height(R[0],R[1],R[2]),u=y+q*m;g[u*3]=R[0],g[u*3+1]=R[1],g[u*3+2]=R[2],U[u]=D,M[u*3]=R[0]*(c+D),M[u*3+1]=R[1]*(c+D),M[u*3+2]=R[2]*(c+D),y>=1&&q>=1&&y<=e+1&&q<=e+1&&(D<j&&(j=D),D>C&&(C=D))}let H=e+1,T=H*H,I=T+4*H,L=Math.min(Math.max(h*w*.003,1.5),80),v=new Float32Array(I*3),S=new Float32Array(I*3),N=new Float32Array(I*4),O={};for(let q=0;q<H;q++)for(let y=0;y<H;y++){let x=y+1+(q+1)*m,A=y+q*H,D=M[(x+1)*3]-M[(x-1)*3],u=M[(x+1)*3+1]-M[(x-1)*3+1],E=M[(x+1)*3+2]-M[(x-1)*3+2],Z=M[(x+m)*3]-M[(x-m)*3],$=M[(x+m)*3+1]-M[(x-m)*3+1],_=M[(x+m)*3+2]-M[(x-m)*3+2],B=u*_-E*$,Q=E*Z-D*_,W=D*$-u*Z,Y=g[x*3],P=g[x*3+1],z=g[x*3+2],X=Math.hypot(B,Q,W)||1;B/=X,Q/=X,W/=X,B*Y+Q*P+W*z<0&&(B=-B,Q=-Q,W=-W);let rt=Math.min(Math.max(B*Y+Q*P+W*z,0),1);l.colorize(Y,P,z,U[x],rt,O),v[A*3]=M[x*3]-r,v[A*3+1]=M[x*3+1]-s,v[A*3+2]=M[x*3+2]-k,S[A*3]=B,S[A*3+1]=Q,S[A*3+2]=W,N[A*4]=O.r,N[A*4+1]=O.g,N[A*4+2]=O.b,N[A*4+3]=O.wet}let K=T;for(let q=0;q<4;q++){for(let y=0;y<H;y++){let x=q===0?y:q===1?y+(H-1)*H:q===2?y*H:H-1+y*H,A=x%H+1+((x/H|0)+1)*m,D=K+y;v[D*3]=M[A*3]-g[A*3]*L-r,v[D*3+1]=M[A*3+1]-g[A*3+1]*L-s,v[D*3+2]=M[A*3+2]-g[A*3+2]*L-k;for(let u=0;u<3;u++)S[D*3+u]=S[x*3+u];for(let u=0;u<4;u++)N[D*4+u]=N[x*4+u]}K+=H}let V={face:t,level:n,X:o,Y:a,center:[r,s,k],minH:j,maxH:C,positions:v,normals:S,colors:N,water:null,scatter:null};if(d.ocean&&j<.5){let q=Math.max(2,e>>1),y=q+1,x=new Float32Array(y*y*3),A=new Float32Array(y*y*3);for(let D=0;D<y;D++)for(let u=0;u<y;u++){ct(t,i+h*u/q,b+h*D/q,R);let E=(u+D*y)*3;x[E]=R[0]*c-r,x[E+1]=R[1]*c-s,x[E+2]=R[2]*c-k,A[E]=R[0],A[E+1]=R[1],A[E+2]=R[2]}V.water={positions:x,normals:A}}return f&&(V.scatter=Dt(d,l,t,n,o,a,V.center)),V}function et(d,t,n,o,a,e,f,l,c){let h,i,b;Math.abs(t[2])<.9?(h=-t[1],i=t[0],b=0):(h=0,i=-t[2],b=t[1]);let m=Math.hypot(h,i,b);h/=m,i/=m,b/=m;let w=t[1]*b-t[2]*i,p=t[2]*h-t[0]*b,r=t[0]*i-t[1]*h,s=Math.cos(n),k=Math.sin(n),g=h*s+w*k,M=i*s+p*k,U=b*s+r*k,j=-h*k+w*s,C=-i*k+p*s,R=-b*k+r*s;d.push(g*o,M*o,U*o,0,t[0]*a,t[1]*a,t[2]*a,0,-j*e,-C*e,-R*e,0,f,l,c,1)}function Dt(d,t,n,o,a,e,f){if(d.trees<=0&&d.rocksDensity<=0)return null;let l=d.radius,c=1/(1<<o),h=l*Math.PI*.5,i=Math.min(Math.max(Math.round(c*h/11),8),48),b=d.seed*7919>>>0,m=[],w=[],p=[],r=[],s=[0,0,0],k={};for(let M=0;M<i;M++)for(let U=0;U<i;U++){let j=J.hash3(a*i+U,e*i+M,n*97+o,b),C=()=>(j=Math.imul(j,1664525)+1013904223>>>0,(j>>>8)/16777216),R=(a+(U+C())/i)*c,H=(e+(M+C())/i)*c;ct(n,R,H,s);let T=t.height(s[0],s[1],s[2]);if(d.ocean&&T<3)continue;let I,L,v;Math.abs(s[2])<.9?(I=-s[1],L=s[0],v=0):(I=0,L=-s[2],v=s[1]);let S=Math.hypot(I,L,v);I/=S,L/=S,v/=S;let N=s[1]*v-s[2]*L,O=s[2]*I-s[0]*v,K=s[0]*L-s[1]*I,V=3/l,q=t.height(s[0]+I*V,s[1]+L*V,s[2]+v*V),y=t.height(s[0]+N*V,s[1]+O*V,s[2]+K*V),x=s[0]*3-I*(q-T)-N*(y-T),A=s[1]*3-L*(q-T)-O*(y-T),D=s[2]*3-v*(q-T)-K*(y-T),u=Math.hypot(x,A,D),E=(x*s[0]+A*s[1]+D*s[2])/u;t.colorize(s[0],s[1],s[2],T,E,k);let Z=s[0]*(l+T)-f[0],$=s[1]*(l+T)-f[1],_=s[2]*(l+T)-f[2],B=C()*Math.PI*2,Q=C();if(Q<k.forest*d.trees&&E>.8){let W=6+C()*9,Y=k.moist<.55||T>d.relief*.15,P=W*(Y?.35:.62),z=.14+W*.013;if(et(m,s,B,z*2,P,z*2,Z+s[0]*P*.5,$+s[1]*P*.5,_+s[2]*P*.5),Y)et(w,s,B,W*.42,W*.6,W*.42,Z+s[0]*W*.5,$+s[1]*W*.5,_+s[2]*W*.5),et(w,s,B,W*.28,W*.4,W*.28,Z+s[0]*W*.8,$+s[1]*W*.8,_+s[2]*W*.8);else{let X=W*(.5+C()*.15),rt=W*.6;et(p,s,B,X,X*.8,X*(.85+C()*.25),Z+s[0]*rt,$+s[1]*rt,_+s[2]*rt);let ft=Math.cos(B)*X*.28,lt=Math.sin(B)*X*.28,st,nt,ot;Math.abs(s[2])<.9?(st=-s[1],nt=s[0],ot=0):(st=0,nt=-s[2],ot=s[1]);let mt=Math.hypot(st,nt,ot);st/=mt,nt/=mt,ot/=mt;let wt=s[1]*ot-s[2]*nt,dt=s[2]*st-s[0]*ot,gt=s[0]*nt-s[1]*st,Mt=W*.82,ut=X*(.55+C()*.15);et(p,s,B+1.3,ut,ut*.85,ut,Z+s[0]*Mt+st*ft+wt*lt,$+s[1]*Mt+nt*ft+dt*lt,_+s[2]*Mt+ot*ft+gt*lt)}}else if(Q<k.forest*d.trees+k.rocks*d.rocksDensity*.18){let W=.5+Math.pow(C(),3)*4,Y=W*(.8+C()*.6),P=W*(.4+C()*.5),z=W*(.7+C()*.6);et(r,s,B,Y,P,z,Z-s[0]*P*.2,$-s[1]*P*.2,_-s[2]*P*.2)}}let g=M=>M.length?new Float32Array(M):null;return{trunks:g(m),cones:g(w),crowns:g(p),rocks:g(r)}}self.onmessage=d=>{let{id:t,P:n,face:o,level:a,X:e,Y:f,N:l,scatter:c}=d.data,h=pt(n,o,a,e,f,l,c),i=[h.positions.buffer,h.normals.buffer,h.colors.buffer];if(h.water&&i.push(h.water.positions.buffer,h.water.normals.buffer),h.scatter)for(let b of["trunks","cones","crowns","rocks"])h.scatter[b]&&i.push(h.scatter[b].buffer);self.postMessage({id:t,r:h},i)};})();
`,
        i = URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
      ((this.workers = []),
        (this.busy = []),
        (this.jobs = new Map()),
        (this.queue = []),
        (this.nextId = 1),
        (this.done = 0));
      for (let s = 0; s < t; s++) {
        let r = new Worker(i);
        ((r.onmessage = (a) => this.onDone(s, a.data)),
          (r.onerror = (a) => console.error("worker", a.message)),
          this.workers.push(r),
          this.busy.push(!1));
      }
    }
    add(t) {
      this.queue.push(t);
    }
    onDone(t, { id: e, r: i }) {
      this.busy[t] = !1;
      let s = this.jobs.get(e);
      (this.jobs.delete(e), this.done++, s && !s.cancelled() && s.done(i), this.pump());
    }
    get pending() {
      return this.queue.length + this.jobs.size;
    }
    pump() {
      if (!this.queue.length) return;
      let t = 0;
      for (let e of this.busy) e || t++;
      if (t) {
        this.queue = this.queue.filter((e) => !e.cancelled());
        for (let e of this.queue) e._p = e.priority();
        this.queue.sort((e, i) => e._p - i._p);
        for (let e = 0; e < this.workers.length && this.queue.length; e++) {
          if (this.busy[e]) continue;
          let i = this.queue.shift(),
            s = this.nextId++;
          (this.jobs.set(s, i), (this.busy[e] = !0), this.workers[e].postMessage({ id: s, ...i.msg }));
        }
      }
    }
  };
  var So = (n, t, e) => {
      let i = Math.hypot(n, t, e);
      return [n / i, t / i, e / i];
    },
    yo = (n, t) => [n[0] * t, n[1] * t, n[2] * t],
    ln = yo(So(0.82, 0.38, 0.43), 6e7),
    Au = 25e5,
    xo = {
      seabed: [0.1, 0.12, 0.1],
      beach: [0.62, 0.55, 0.38],
      lowland: [0.12, 0.24, 0.07],
      lowland2: [0.26, 0.3, 0.1],
      highland: [0.22, 0.2, 0.16],
      rock: [0.2, 0.18, 0.16],
      snow: [0.85, 0.88, 0.92],
      special: [1, 0.3, 0.05],
      water: [0.02, 0.1, 0.16],
      forest: [0.032, 0.072, 0.022],
      foliage: [0.03, 0.09, 0.02],
      foliage2: [0.1, 0.12, 0.02],
    },
    vo = {
      has: !0,
      height: 60,
      rayleigh: [0.175287, 0.409607, 1],
      rayleighScale: 0.0331,
      rayleighExp: 8,
      mie: [0.577, 0.577, 0.577],
      mieScale: 0.004,
      mieExp: 1.2,
      clouds: !0,
      cloudBottom: 2.5,
      cloudHeight: 6,
      drag: 1,
    },
    Fu = [
      {
        name: "Aurora",
        desc: "Gem\xE4\xDFigt \xB7 Ozeane \xB7 W\xE4lder",
        seed: 7,
        style: "terran",
        radius: 4e4,
        relief: 1900,
        oceanFraction: 0.42,
        ocean: !0,
        gravity: 9.3,
        temperature: 0.62,
        trees: 0.9,
        rocksDensity: 0.35,
        pos: [0, 0, 0],
        palette: {
          ...xo,
          seabed: [0.07, 0.09, 0.08],
          beach: [0.58, 0.5, 0.34],
          lowland: [0.07, 0.15, 0.04],
          lowland2: [0.13, 0.19, 0.055],
          highland: [0.16, 0.14, 0.1],
          rock: [0.17, 0.155, 0.14],
          snow: [0.82, 0.86, 0.92],
          water: [0.012, 0.06, 0.09],
        },
        atmo: {
          ...vo,
          height: 30,
          rayleighScale: 0.045,
          rayleighExp: 5,
          mieScale: 0.005,
          mieExp: 1,
          cloudBottom: 2.2,
          cloudHeight: 4.5,
        },
      },
      {
        name: "Selene",
        desc: "Mond \xB7 Krater \xB7 keine Atmosph\xE4re",
        seed: 21,
        style: "barren",
        radius: 14e3,
        relief: 1600,
        oceanFraction: 0,
        ocean: !1,
        gravity: 2.4,
        temperature: 0.2,
        trees: 0,
        rocksDensity: 0.9,
        pos: yo(So(-0.35, 0.9, 0.25), 14e5),
        palette: {
          ...xo,
          lowland: [0.2, 0.2, 0.21],
          lowland2: [0.13, 0.13, 0.14],
          highland: [0.3, 0.29, 0.28],
          rock: [0.11, 0.11, 0.115],
        },
        atmo: { ...vo, has: !1, clouds: !1, drag: 0 },
      },
      {
        name: "Ferrox",
        desc: "W\xFCste \xB7 Canyons \xB7 Staubst\xFCrme",
        seed: 33,
        style: "desert",
        radius: 3e4,
        relief: 1800,
        oceanFraction: 0,
        ocean: !1,
        gravity: 7.2,
        temperature: 0.9,
        trees: 0,
        rocksDensity: 0.7,
        pos: yo(So(-0.6, -0.7, -0.2), 52e5),
        palette: {
          ...xo,
          lowland: [0.52, 0.25, 0.11],
          lowland2: [0.62, 0.36, 0.17],
          highland: [0.36, 0.15, 0.07],
          rock: [0.26, 0.11, 0.06],
          snow: [0.8, 0.74, 0.66],
        },
        atmo: {
          ...vo,
          height: 22,
          rayleigh: [0.9, 0.45, 0.22],
          rayleighScale: 0.02,
          rayleighExp: 5,
          mie: [0.8, 0.55, 0.35],
          mieScale: 0.012,
          mieExp: 1.6,
          clouds: !1,
          drag: 0.7,
        },
      },
      {
        name: "Glacia",
        desc: "Eis \xB7 Gletscher \xB7 Polarlichter",
        seed: 57,
        style: "ice",
        radius: 34e3,
        relief: 2e3,
        oceanFraction: 0,
        ocean: !1,
        gravity: 8.4,
        temperature: 0.05,
        trees: 0,
        rocksDensity: 0.3,
        pos: yo(So(0.35, -0.2, 0.9), 8e6),
        palette: {
          ...xo,
          snow: [0.8, 0.86, 0.93],
          lowland: [0.55, 0.68, 0.8],
          rock: [0.1, 0.11, 0.13],
          special: [0.1, 0.35, 0.62],
        },
        atmo: {
          ...vo,
          height: 25,
          rayleigh: [0.2, 0.55, 1],
          rayleighScale: 0.05,
          rayleighExp: 6,
          mieScale: 0.003,
          clouds: !0,
          cloudBottom: 1.5,
          cloudHeight: 3,
          drag: 0.9,
        },
      },
    ];
  var qE = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  function GE(n) {
    let t = qE[n],
      e = [t[1], t[2], t[0]],
      i = [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    return [t, e, i];
  }
  var VE = [0, 1, 2, 3, 4, 5].map(GE);
  function Nu(n, t, e, i, s = 0) {
    let [r, a, o] = VE[n],
      l = 2 * t - 1,
      c = 2 * e - 1,
      u = r[0] + a[0] * l + o[0] * c,
      f = r[1] + a[1] * l + o[1] * c,
      h = r[2] + a[2] * l + o[2] * c,
      d = u * u,
      E = f * f,
      v = h * h,
      m = u * Math.sqrt(Math.max(0, 1 - E / 2 - v / 2 + (E * v) / 3)),
      p = f * Math.sqrt(Math.max(0, 1 - v / 2 - d / 2 + (v * d) / 3)),
      y = h * Math.sqrt(Math.max(0, 1 - d / 2 - E / 2 + (d * E) / 3)),
      Q = Math.hypot(m, p, y) || 1;
    return ((i[s] = m / Q), (i[s + 1] = p / Q), (i[s + 2] = y / Q), i);
  }
  var Mo = [
      [1, 1, 0],
      [-1, 1, 0],
      [1, -1, 0],
      [-1, -1, 0],
      [1, 0, 1],
      [-1, 0, 1],
      [1, 0, -1],
      [-1, 0, -1],
      [0, 1, 1],
      [0, -1, 1],
      [0, 1, -1],
      [0, -1, -1],
    ],
    Po = (n) => n >>> 0,
    hn = (n, t) => Math.imul(n, t) >>> 0,
    Bi = class n {
      constructor(t = 1337) {
        let e = new Uint8Array(256);
        for (let s = 0; s < 256; s++) e[s] = s;
        let i = Po(hn(t | 0, 2654435761) + 12345);
        for (let s = 255; s > 0; s--) {
          i = Po(hn(i, 1664525) + 1013904223);
          let r = (i >>> 8) % (s + 1),
            a = e[s];
          ((e[s] = e[r]), (e[r] = a));
        }
        ((this.perm = new Uint8Array(512)), (this.permMod12 = new Uint8Array(512)));
        for (let s = 0; s < 512; s++) ((this.perm[s] = e[s & 255]), (this.permMod12[s] = this.perm[s] % 12));
        this.seedHash = Po(hn(t | 0, 747796405) + 2891336453);
      }
      simplex(t, e, i) {
        let s = 0.3333333333333333,
          r = 1 / 6,
          a = this.perm,
          o = this.permMod12,
          l = (t + e + i) * s,
          c = Math.floor(t + l),
          u = Math.floor(e + l),
          f = Math.floor(i + l),
          h = (c + u + f) * r,
          d = t - (c - h),
          E = e - (u - h),
          v = i - (f - h),
          m,
          p,
          y,
          Q,
          S,
          M;
        d >= E
          ? E >= v
            ? ((m = 1), (p = 0), (y = 0), (Q = 1), (S = 1), (M = 0))
            : d >= v
              ? ((m = 1), (p = 0), (y = 0), (Q = 1), (S = 0), (M = 1))
              : ((m = 0), (p = 0), (y = 1), (Q = 1), (S = 0), (M = 1))
          : E < v
            ? ((m = 0), (p = 0), (y = 1), (Q = 0), (S = 1), (M = 1))
            : d < v
              ? ((m = 0), (p = 1), (y = 0), (Q = 0), (S = 1), (M = 1))
              : ((m = 0), (p = 1), (y = 0), (Q = 1), (S = 1), (M = 0));
        let P = d - m + r,
          T = E - p + r,
          x = v - y + r,
          b = d - Q + 2 * r,
          N = E - S + 2 * r,
          w = v - M + 2 * r,
          C = d - 1 + 3 * r,
          z = E - 1 + 3 * r,
          A = v - 1 + 3 * r,
          L = c & 255,
          G = u & 255,
          D = f & 255,
          et = Mo[o[L + a[G + a[D]]]],
          J = Mo[o[L + m + a[G + p + a[D + y]]]],
          Y = Mo[o[L + Q + a[G + S + a[D + M]]]],
          it = Mo[o[L + 1 + a[G + 1 + a[D + 1]]]],
          ft = 0,
          ct;
        return (
          (ct = 0.6 - d * d - E * E - v * v),
          ct > 0 && ((ct *= ct), (ft += ct * ct * (et[0] * d + et[1] * E + et[2] * v))),
          (ct = 0.6 - P * P - T * T - x * x),
          ct > 0 && ((ct *= ct), (ft += ct * ct * (J[0] * P + J[1] * T + J[2] * x))),
          (ct = 0.6 - b * b - N * N - w * w),
          ct > 0 && ((ct *= ct), (ft += ct * ct * (Y[0] * b + Y[1] * N + Y[2] * w))),
          (ct = 0.6 - C * C - z * z - A * A),
          ct > 0 && ((ct *= ct), (ft += ct * ct * (it[0] * C + it[1] * z + it[2] * A))),
          32 * ft
        );
      }
      fbm(t, e, i, s, r = 2, a = 0.5) {
        let o = 0,
          l = 1,
          c = 0;
        for (let u = 0; u < s; u++)
          ((o += l * this.simplex(t + u * 17.13, e - u * 9.71, i + u * 3.37)),
            (c += l),
            (l *= a),
            (t *= r),
            (e *= r),
            (i *= r));
        return o / Math.max(c, 1e-9);
      }
      ridged(t, e, i, s, r = 2, a = 0.5, o = 2) {
        let l = 0,
          c = 1,
          u = 0,
          f = 1;
        for (let h = 0; h < s; h++) {
          let d = 1 - Math.abs(this.simplex(t - h * 5.1, e + h * 11.7, i + h * 7.3));
          ((d = Math.pow(d, o) * f),
            (f = Math.min(Math.max(d * 1.5, 0), 1)),
            (l += d * c),
            (u += c),
            (c *= a),
            (t *= r),
            (e *= r),
            (i *= r));
        }
        return l / Math.max(u, 1e-9);
      }
      billow(t, e, i, s, r = 2, a = 0.5) {
        let o = 0,
          l = 1,
          c = 0;
        for (let u = 0; u < s; u++)
          ((o += l * Math.abs(this.simplex(t + u * 1.7, e + u * 2.3, i - u * 4.1))),
            (c += l),
            (l *= a),
            (t *= r),
            (e *= r),
            (i *= r));
        return o / Math.max(c, 1e-9);
      }
      static hash3(t, e, i, s) {
        let r = Po(s ^ hn(t | 0, 73856093) ^ hn(e | 0, 19349663) ^ hn(i | 0, 83492791));
        return (
          (r ^= r >>> 16),
          (r = hn(r, 2146121005)),
          (r ^= r >>> 15),
          (r = hn(r, 2221713035)),
          (r ^= r >>> 16),
          r >>> 0
        );
      }
      worley(t, e, i) {
        let s = Math.floor(t),
          r = Math.floor(e),
          a = Math.floor(i),
          o = 1e9,
          l = 0;
        for (let c = -1; c <= 1; c++)
          for (let u = -1; u <= 1; u++)
            for (let f = -1; f <= 1; f++) {
              let h = n.hash3(s + f, r + u, a + c, this.seedHash),
                d = s + f + (h & 1023) / 1023,
                E = r + u + ((h >>> 10) & 1023) / 1023,
                v = a + c + ((h >>> 20) & 1023) / 1023,
                m = (t - d) ** 2 + (e - E) ** 2 + (i - v) ** 2;
              m < o && ((o = m), (l = h));
            }
        return [Math.sqrt(o), l];
      }
    };
  var se = (n, t, e) => {
      let i = Math.min(Math.max((e - n) / (t - n), 0), 1);
      return i * i * (3 - 2 * i);
    },
    Ve = (n, t, e) => (
      (e = Math.min(Math.max(e, 0), 1)),
      [n[0] + (t[0] - n[0]) * e, n[1] + (t[1] - n[1]) * e, n[2] + (t[2] - n[2]) * e]
    ),
    _o = class {
      constructor(t) {
        this.P = t;
        let e = t.seed;
        ((this.nC = new Bi(e * 11 + 1)),
          (this.nM = new Bi(e * 11 + 2)),
          (this.nD = new Bi(e * 11 + 3)),
          (this.nW = new Bi(e * 11 + 4)),
          (this.nMo = new Bi(e * 11 + 5)),
          (this.nCr = new Bi(e * 11 + 6)),
          (this.bias = -(t.oceanFraction - 0.5) * 0.6));
      }
      height(t, e, i) {
        switch (this.P.style) {
          case "desert":
            return this.desert(t, e, i);
          case "ice":
            return this.ice(t, e, i);
          case "barren":
            return this.barren(t, e, i);
          default:
            return this.terran(t, e, i);
        }
      }
      craters(t, e, i, s, r) {
        let [a, o] = this.nCr.worley(t * s, e * s, i * s);
        if (o % 5 > 1) return 0;
        let l = 0.18 + (0.22 * ((o >>> 8) & 255)) / 255,
          c = a / l;
        if (c > 1.5) return 0;
        let u = 0;
        return (c < 1 && (u = (c * c - 1) * r), (u += Math.exp(-(((c - 1) / 0.18) ** 2)) * r * 0.35), u);
      }
      terran(t, e, i) {
        let s = this.P,
          r = s.relief,
          a = this.nW,
          o = this.nD,
          l = a.fbm(t * 1.7, e * 1.7, i * 1.7, 3),
          c = a.fbm(t * 1.7 + 31.1, e * 1.7 + 7.7, i * 1.7 + 2.3, 3),
          u = a.fbm(t * 1.7 - 5.3, e * 1.7 + 19.9, i * 1.7 + 11.1, 3),
          f = t + l * 0.18,
          h = e + c * 0.18,
          d = i + u * 0.18,
          E = this.nC.fbm(f * 1.15, h * 1.15, d * 1.15, 7) + this.bias,
          v;
        if (E < 0) {
          let y = se(0, -0.25, E);
          ((v = -r * (0.02 + 0.45 * y) - r * 0.02 * o.fbm(t * 30, e * 30, i * 30, 4)),
            (v *= se(0, -0.03, E) * 0.95 + 0.05));
        } else {
          let y = se(0, 0.35, E),
            Q = this.nM.ridged(f * 4.2, h * 4.2, d * 4.2, 8, 2.05, 0.5, 2.2),
            S = se(0.08, 0.4, E) * se(0.25, 0.65, this.nM.fbm(t * 1.6, e * 1.6, i * 1.6, 3) * 0.5 + 0.5);
          ((v = r * (0.015 + 0.08 * y)),
            (v += r * Math.pow(Q, 1.6) * S),
            (v += r * 0.035 * o.fbm(f * 18, h * 18, d * 18, 6) * (0.4 + y)));
          let M = se(0, 0.05, E);
          ((v *= M), (v += 4 * M));
        }
        v += r * 0.009 * o.fbm(t * 110, e * 110, i * 110, 4) * (E > 0 ? 1 : 0.3);
        let m = s.radius / 70,
          p = s.radius / 5;
        return ((v += 0.9 * o.fbm(t * m, e * m, i * m, 3)), (v += 0.22 * o.simplex(t * p, e * p, i * p)), v);
      }
      desert(t, e, i) {
        let s = this.P,
          r = s.relief,
          a = this.nW,
          o = t + a.fbm(t * 2, e * 2, i * 2, 3) * 0.12,
          l = e + a.fbm(t * 2 + 9.1, e * 2 + 1.2, i * 2 + 4.4, 3) * 0.12,
          c = i + a.fbm(t * 2 + 3.3, e * 2 + 8.8, i * 2 + 1.1, 3) * 0.12,
          u = this.nC.fbm(o * 1.6, l * 1.6, c * 1.6, 6) * 0.5 + 0.5,
          f = 7,
          h = u * f,
          d = Math.floor(h),
          E = h - d;
        u = (d + Math.pow(E, 6)) / f;
        let v = r * 0.55 * u,
          m = this.nM.ridged(o * 3, l * 3, c * 3, 5, 2, 0.5, 3);
        v -= r * 0.45 * se(0.55, 0.9, m);
        let p = se(0.2, 0.6, this.nMo.fbm(t * 2.5, e * 2.5, i * 2.5, 3) * 0.5 + 0.5),
          y = t * 260,
          Q = e * 260,
          S = i * 260,
          M = 1 - Math.abs(this.nD.simplex(y * 1.6, Q, S * 0.6));
        ((v += 45 * p * M * M), (v += r * 0.03 * this.nD.fbm(o * 25, l * 25, c * 25, 5)));
        let P = s.radius / 30;
        return ((v += 1.5 * this.nD.fbm(t * P, e * P, i * P, 3)), v);
      }
      ice(t, e, i) {
        let s = this.P,
          r = s.relief,
          a = this.nW,
          o = t + a.fbm(t * 2.2, e * 2.2, i * 2.2, 3) * 0.15,
          l = e + a.fbm(t * 2.2 + 7, e * 2.2 + 7, i * 2.2 + 7, 3) * 0.15,
          c = i + a.fbm(t * 2.2 - 3, e * 2.2 - 3, i * 2.2 - 3, 3) * 0.15,
          u = r * 0.25 * this.nC.fbm(o * 1.4, l * 1.4, c * 1.4, 6);
        u +=
          r *
          0.8 *
          Math.pow(this.nM.ridged(o * 3.5, l * 3.5, c * 3.5, 7, 2, 0.5, 2.5), 2) *
          se(-0.1, 0.4, this.nC.fbm(t * 0.9, e * 0.9, i * 0.9, 3));
        let f = this.nD.ridged(t * 140, e * 140, i * 140, 3, 2, 0.5, 6);
        u -= 18 * se(0.75, 0.95, f);
        let h = s.radius / 25;
        return ((u += 1.2 * this.nD.fbm(t * h, e * h, i * h, 3)), u);
      }
      barren(t, e, i) {
        let s = this.P,
          r = s.relief,
          a = r * 0.3 * this.nC.fbm(t * 1.8, e * 1.8, i * 1.8, 6);
        ((a += r * 0.35 * Math.pow(this.nM.ridged(t * 4, e * 4, i * 4, 6), 2)),
          (a += this.craters(t, e, i, 5, r * 0.45)),
          (a += this.craters(t, e, i, 17, r * 0.15)),
          (a += this.craters(t, e, i, 60, r * 0.045)),
          (a += this.craters(t, e, i, 240, r * 0.012)));
        let o = s.radius / 20;
        return ((a += 0.8 * this.nD.fbm(t * o, e * o, i * o, 3)), a);
      }
      colorize(t, e, i, s, r, a) {
        let o = this.P,
          l = o.palette,
          c = Math.max(o.relief, 1),
          u = this.nMo.fbm(t * 3.2, e * 3.2, i * 3.2, 4) * 0.5 + 0.5,
          f = this.nMo.fbm(t * 180, e * 180, i * 180, 3),
          h = Math.abs(i),
          d = s / c,
          E = se(0.86, 0.62, r),
          v,
          m = 0.1,
          p = 0,
          y = 0;
        if (((a.moist = u), o.style === "terran")) {
          let S = o.temperature - h * 0.55 - Math.max(d, 0) * 0.7;
          if (o.ocean && s < 0) ((v = Ve(l.beach, l.seabed, se(-2, -80, s))), (m = 0.6));
          else if (o.ocean && s < 12 + 6 * f) ((v = l.beach), (m = se(8, 0, s) * 0.5));
          else {
            let M = this.nMo.fbm(t * 900, e * 900, i * 900, 3),
              P = Ve(l.lowland2, l.lowland, se(0.3, 0.7, u + f * 0.15 + M * 0.12)),
              T = this.nMo.fbm(t * 55, e * 55, i * 55, 4) * 0.5 + 0.5 + (u - 0.5) * 0.6,
              x = se(0.52, 0.62, T) * se(0.78, 0.9, r) * se(0.3, 0.12, d) * se(0.15, 0.3, S);
            ((v = Ve(P, l.forest, x * 0.85)),
              (v = Ve(v, l.highland, se(0.18, 0.45, d + f * 0.05))),
              (v = Ve(v, l.rock, E)));
            let b = se(0.2, 0.05, S + f * 0.05) * se(0.55, 0.8, r);
            ((v = Ve(v, l.snow, b)), (m = b * 0.35), (p = x * (1 - b) * (1 - E)));
          }
          y = Math.min(Math.max(E * 0.8 + se(0.3, 0.5, d) * 0.3, 0), 1);
        } else
          o.style === "desert"
            ? ((v = Ve(l.lowland, l.lowland2, se(0.35, 0.65, u + f * 0.2))),
              (v = Ve(v, l.highland, se(0.25, 0.5, d))),
              (v = Ve(v, l.rock, E)),
              (v = Ve(v, l.snow, se(-0.15, -0.3, d) * se(0.9, 0.97, r))),
              (m = 0.02),
              (y = Math.min(0.25 + E * 0.6, 1)))
            : o.style === "ice"
              ? ((v = Ve(l.snow, l.lowland, se(0.4, 0.7, u + f * 0.2))),
                (v = Ve(v, l.rock, E * 0.8)),
                (v = Ve(v, l.special, se(-5, -15, s) * 0.7)),
                (m = 0.35 + 0.3 * se(0.95, 1, r)),
                (y = E * 0.7))
              : ((v = Ve(l.lowland, l.lowland2, se(0.3, 0.7, u + f * 0.25))),
                (v = Ve(v, l.highland, se(-0.1, 0.25, d))),
                (v = Ve(v, l.rock, E)),
                (m = 0),
                (y = Math.min(0.35 + E * 0.5, 1)));
        let Q = 0.92 + 0.16 * f;
        return (
          (a.r = v[0] * Q),
          (a.g = v[1] * Q),
          (a.b = v[2] * Q),
          (a.wet = Math.min(Math.max(m, 0), 1)),
          (a.forest = p),
          (a.rocks = y),
          a
        );
      }
    };
  var ol = 64,
    DE = 1.5,
    JE = 1.9;
  function wu(n, t) {
    let e = n + 1,
      i = [];
    for (let s = 0; s < n; s++)
      for (let r = 0; r < n; r++) {
        let a = r + s * e,
          o = a + 1,
          l = a + e,
          c = l + 1;
        i.push(a, o, l, o, c, l);
      }
    if (t) {
      let s = (r, a) => (r === 0 ? a : r === 1 ? a + (e - 1) * e : r === 2 ? a * e : e - 1 + a * e);
      for (let r = 0; r < 4; r++) {
        let a = e * e + r * e;
        for (let o = 0; o < e - 1; o++) {
          let l = s(r, o),
            c = s(r, o + 1),
            u = a + o,
            f = a + o + 1;
          i.push(l, c, u, c, f, u, l, u, c, c, u, f);
        }
      }
    }
    return new xe(new Uint16Array(i), 1);
  }
  var cl = null,
    Cu = null,
    Qn = class {
      constructor(t, e, i, s, r, a) {
        ((this.planet = t),
          (this.face = e),
          (this.level = i),
          (this.X = s),
          (this.Y = r),
          (this.parent = a),
          (this.children = null),
          (this.mesh = null),
          (this.water = null),
          (this.scatter = null),
          (this.state = 0),
          (this.dead = !1));
        let o = t.P,
          l = 1 / (1 << i),
          c = Nu(e, (s + 0.5) * l, (r + 0.5) * l, [0, 0, 0]),
          u = Math.max(t.gen.height(c[0], c[1], c[2]), o.ocean ? 0 : -1e9);
        ((this.c = [c[0] * (o.radius + u), c[1] * (o.radius + u), c[2] * (o.radius + u)]),
          (this.size = t.faceLen * l),
          (this.rad = this.size * 0.8 + Math.min(o.relief * 0.3, this.size * 0.3)),
          (this.dist = 1e12));
      }
    },
    bo = class {
      constructor(t, e, i, s) {
        ((this.P = t),
          (this.pool = e),
          (this.mats = i),
          (this.gen = new _o(t)),
          (this.pos = t.pos.slice()),
          (this.faceLen = t.radius * Math.PI * 0.5),
          (this.maxLevel = Math.max(4, Math.ceil(Math.log2(this.faceLen / 64)))),
          (this.scatterLevel = Math.max(3, this.maxLevel - 2)),
          (this.group = new ke()),
          (this.group.name = t.name),
          s.add(this.group),
          cl || ((cl = wu(ol, !0)), (Cu = wu(Math.max(2, ol >> 1), !1))),
          (this.roots = [0, 1, 2, 3, 4, 5].map((r) => new Qn(this, r, 0, 0, 0, null))),
          (this.cam = [0, 0, 0]),
          (this.stats = { nodes: 0, visible: 0 }),
          (this.shadowLevel = this.maxLevel - 1));
      }
      terrainHeight(t, e, i) {
        return this.gen.height(t, e, i);
      }
      update(t) {
        ((this.cam[0] = t[0] - this.pos[0]),
          (this.cam[1] = t[1] - this.pos[1]),
          (this.cam[2] = t[2] - this.pos[2]),
          this.group.position.set(this.pos[0] - t[0], this.pos[1] - t[1], this.pos[2] - t[2]),
          (this.stats.nodes = 0),
          (this.stats.visible = 0));
        for (let e of this.roots) this.visit(e);
      }
      visit(t) {
        this.stats.nodes++;
        let e = this.cam[0] - t.c[0],
          i = this.cam[1] - t.c[1],
          s = this.cam[2] - t.c[2];
        ((t.dist = Math.max(0, Math.sqrt(e * e + i * i + s * s) - t.rad)), t.state === 0 && this.request(t));
        let r = t.level < this.maxLevel && t.dist < t.size * DE;
        if ((!r && t.children && t.dist < t.size * JE && (r = !0), r)) {
          if (!t.children) {
            let o = t.level + 1,
              l = t.X * 2,
              c = t.Y * 2;
            t.children = [
              new Qn(this, t.face, o, l, c, t),
              new Qn(this, t.face, o, l + 1, c, t),
              new Qn(this, t.face, o, l, c + 1, t),
              new Qn(this, t.face, o, l + 1, c + 1, t),
            ];
          }
          let a = !0;
          for (let o of t.children) (this.visit(o), o.covered || (a = !1));
          if (a) (this.show(t, !1), (t.covered = !0));
          else {
            for (let o of t.children) this.hideTree(o);
            (this.show(t, t.state === 2), (t.covered = t.state === 2));
          }
        } else {
          if (t.children) {
            for (let a of t.children) this.dispose(a);
            t.children = null;
          }
          (this.show(t, t.state === 2), (t.covered = t.state === 2));
        }
        t.scatter && (t.scatter.visible = t.covered);
      }
      show(t, e) {
        (t.mesh && (t.mesh.visible = e), t.water && (t.water.visible = e), e && this.stats.visible++);
      }
      hideTree(t) {
        if ((this.show(t, !1), t.scatter && (t.scatter.visible = !1), t.children))
          for (let e of t.children) this.hideTree(e);
      }
      dispose(t) {
        if (((t.dead = !0), t.children)) for (let e of t.children) this.dispose(e);
        t.children = null;
        for (let e of [t.mesh, t.water]) e && (this.group.remove(e), e.geometry.dispose());
        if (t.scatter) {
          this.group.remove(t.scatter);
          for (let e of t.scatter.children) e.dispose?.();
        }
        t.mesh = t.water = t.scatter = null;
      }
      request(t) {
        t.state = 1;
        let e = t.level === this.scatterLevel && (this.P.trees > 0 || this.P.rocksDensity > 0);
        this.pool.add({
          msg: { P: this.P, face: t.face, level: t.level, X: t.X, Y: t.Y, N: ol, scatter: e },
          priority: () => t.dist / t.size - t.level * 0.01 + (t.parent && t.parent.state !== 2 ? 5 : 0),
          cancelled: () => t.dead,
          done: (i) => this.build(t, i),
        });
      }
      build(t, e) {
        let i = e.center[0],
          s = e.center[1],
          r = e.center[2],
          a = new ve(),
          o = e.positions,
          l = new Float32Array(o.length);
        for (let u = 0; u < o.length; u += 3) ((l[u] = o[u] + i), (l[u + 1] = o[u + 1] + s), (l[u + 2] = o[u + 2] + r));
        (a.setAttribute("position", new xe(o, 3)),
          a.setAttribute("normal", new xe(e.normals, 3)),
          a.setAttribute("col4", new xe(e.colors, 4)),
          a.setAttribute("plocal", new xe(l, 3)),
          a.setIndex(cl),
          a.computeBoundingSphere());
        let c = new Ee(a, this.mats.terrain);
        if (
          (c.position.set(i, s, r),
          (c.matrixAutoUpdate = !1),
          c.updateMatrix(),
          (c.receiveShadow = !0),
          (c.castShadow = t.level >= this.shadowLevel),
          (c.visible = !1),
          this.group.add(c),
          (t.mesh = c),
          e.water)
        ) {
          let u = new ve(),
            f = e.water.positions,
            h = new Float32Array(f.length);
          for (let E = 0; E < f.length; E += 3)
            ((h[E] = f[E] + i), (h[E + 1] = f[E + 1] + s), (h[E + 2] = f[E + 2] + r));
          (u.setAttribute("position", new xe(f, 3)),
            u.setAttribute("normal", new xe(e.water.normals, 3)),
            u.setAttribute("plocal", new xe(h, 3)),
            u.setIndex(Cu),
            u.computeBoundingSphere());
          let d = new Ee(u, this.mats.water);
          (d.position.copy(c.position),
            (d.matrixAutoUpdate = !1),
            d.updateMatrix(),
            (d.visible = !1),
            this.group.add(d),
            (t.water = d));
        }
        if (e.scatter) {
          let u = new ke();
          (u.position.copy(c.position), (u.matrixAutoUpdate = !1), u.updateMatrix());
          for (let f of ["trunks", "cones", "crowns", "rocks"]) {
            let h = e.scatter[f];
            if (!h) continue;
            let d = new vn(this.mats.scatter.geo[f], this.mats.scatter.mat[f], h.length / 16);
            ((d.instanceMatrix = new Pi(h, 16)),
              (d.castShadow = !0),
              (d.receiveShadow = !0),
              d.computeBoundingSphere(),
              u.add(d));
          }
          ((u.visible = !1), this.group.add(u), (t.scatter = u));
        }
        t.state = 2;
      }
      get loading() {
        let t = 0,
          e = (i) => {
            (i.state === 1 && t++, i.children && i.children.forEach(e));
          };
        return (this.roots.forEach(e), t);
      }
    };
  var Qo = class {
    constructor(t, e, i) {
      this.planets = Fu.map((s) => new bo(s, t, e, i));
    }
    byName(t) {
      return this.planets.find((e) => e.P.name.toLowerCase() === t.toLowerCase());
    }
    nearest(t) {
      let e = null,
        i = 1e30;
      for (let s of this.planets) {
        let r = Math.hypot(t[0] - s.pos[0], t[1] - s.pos[1], t[2] - s.pos[2]) - s.P.radius;
        r < i && ((i = r), (e = s));
      }
      return e;
    }
    gravity(t, e = [0, 0, 0]) {
      e[0] = e[1] = e[2] = 0;
      for (let i of this.planets) {
        let s = i.pos[0] - t[0],
          r = i.pos[1] - t[1],
          a = i.pos[2] - t[2],
          o = Math.hypot(s, r, a),
          l = i.P.radius,
          c = o > l ? i.P.gravity * (l / o) ** 2 : (i.P.gravity * o) / l;
        ((e[0] += (s / o) * c), (e[1] += (r / o) * c), (e[2] += (a / o) * c));
      }
      return e;
    }
    local(t, e) {
      let i = e[0] - t.pos[0],
        s = e[1] - t.pos[1],
        r = e[2] - t.pos[2],
        a = Math.hypot(i, s, r),
        o = [i / a, s / a, r / a],
        l = t.gen.height(o[0], o[1], o[2]),
        c = t.P.radius + (t.P.ocean ? Math.max(l, 0) : l);
      return { r: a, up: o, h: l, alt: a - c, altTerrain: a - t.P.radius - l, ground: c, terrainR: t.P.radius + l };
    }
    sunDirFrom(t) {
      let e = ln[0] - t.pos[0],
        i = ln[1] - t.pos[1],
        s = ln[2] - t.pos[2],
        r = Math.hypot(e, i, s);
      return [e / r, i / r, s / r];
    }
    airDensity(t, e) {
      return t.P.atmo.has ? Math.exp(-Math.max(e, 0) / (t.P.atmo.rayleighExp * 1e3)) * t.P.atmo.drag : 0;
    }
  };
  function Hu(n) {
    let t = n.rayleigh.map((i) => (i * n.rayleighScale) / 1e3),
      e = n.mie.map((i) => (i * n.mieScale) / 1e3);
    return { r: t, m: e, Hr: n.rayleighExp * 1e3, Hm: n.mieExp * 1e3 };
  }
  function Ro(n, t, e) {
    let i = n[0] * t[0] + n[1] * t[1] + n[2] * t[2],
      s = n[0] * n[0] + n[1] * n[1] + n[2] * n[2] - e * e,
      r = i * i - s;
    if (r < 0) return null;
    let a = Math.sqrt(r);
    return [-i - a, -i + a];
  }
  function ll(n, t, e) {
    let i = n.P.atmo;
    if (!i.has) return [1, 1, 1];
    let s = n.P.radius,
      r = s + i.height * 1e3,
      a = Ro(t, e, s * 0.998);
    if (a && a[0] > 0) return [0, 0, 0];
    let o = Ro(t, e, r);
    if (!o || o[1] < 0) return [1, 1, 1];
    let l = Hu(i),
      c = 16,
      u = o[1],
      f = u / c,
      h = 0,
      d = 0;
    for (let E = 0; E < c; E++) {
      let v = f * (E + 0.5),
        m = Math.hypot(t[0] + e[0] * v, t[1] + e[1] * v, t[2] + e[2] * v) - s;
      ((h += Math.exp(-m / l.Hr) * f), (d += Math.exp(-m / l.Hm) * f));
    }
    return [0, 1, 2].map((E) => Math.exp(-(l.r[E] * h + l.m[E] * 1.1 * d)));
  }
  function hl(n, t, e, i, s) {
    let r = n.P.atmo;
    if (!r.has) return [0, 0, 0];
    let a = n.P.radius,
      o = a + r.height * 1e3,
      l = Ro(t, e, o);
    if (!l || l[1] < 0) return [0, 0, 0];
    let c = Math.max(l[0], 0),
      u = l[1],
      f = Ro(t, e, a);
    f && f[0] > 0 && (u = Math.min(u, f[0]));
    let h = Hu(r),
      d = 12,
      E = (u - c) / d,
      v = 0,
      m = 0,
      p = [0, 0, 0],
      y = [0, 0, 0],
      Q = [0, 0, 0];
    for (let x = 0; x < d; x++) {
      let b = c + E * (x + 0.5);
      ((Q[0] = t[0] + e[0] * b), (Q[1] = t[1] + e[1] * b), (Q[2] = t[2] + e[2] * b));
      let N = Math.hypot(Q[0], Q[1], Q[2]) - a,
        w = Math.exp(-N / h.Hr) * E,
        C = Math.exp(-N / h.Hm) * E;
      ((v += w), (m += C));
      let z = ll(n, Q, i);
      for (let A = 0; A < 3; A++) {
        let L = Math.exp(-(h.r[A] * v + h.m[A] * 1.1 * m));
        ((p[A] += L * z[A] * w), (y[A] += L * z[A] * C));
      }
    }
    let S = e[0] * i[0] + e[1] * i[1] + e[2] * i[2],
      M = (3 / (16 * Math.PI)) * (1 + S * S),
      P = 0.76,
      T = ((3 / (8 * Math.PI)) * ((1 - P * P) * (1 + S * S))) / ((2 + P * P) * Math.pow(1 + P * P - 2 * P * S, 1.5));
    return [0, 1, 2].map((x) => s * (p[x] * h.r[x] * M + y[x] * h.m[x] * T));
  }
  var To = class {
      constructor() {
        ((this.isPass = !0), (this.enabled = !0), (this.needsSwap = !0), (this.clear = !1), (this.renderToScreen = !1));
      }
      setSize() {}
      render() {
        console.error("THREE.Pass: .render() must be implemented in derived pass.");
      }
      dispose() {}
    },
    kE = new nn(-1, 1, 1, -1, 0, 1),
    ul = class extends ve {
      constructor() {
        (super(),
          this.setAttribute("position", new ie([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
          this.setAttribute("uv", new ie([0, 2, 0, 0, 2, 0], 2)));
      }
    },
    WE = new ul(),
    fs = class {
      constructor(t) {
        this._mesh = new Ee(WE, t);
      }
      dispose() {
        this._mesh.geometry.dispose();
      }
      render(t) {
        t.render(this._mesh, kE);
      }
      get material() {
        return this._mesh.material;
      }
      set material(t) {
        this._mesh.material = t;
      }
    };
  var Io = {
    name: "CopyShader",
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`,
  };
  var Uu = {
    name: "LuminosityHighPassShader",
    uniforms: {
      tDiffuse: { value: null },
      luminosityThreshold: { value: 1 },
      smoothWidth: { value: 1 },
      defaultColor: { value: new Tt(0) },
      defaultOpacity: { value: 0 },
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
  };
  var ps = class n extends To {
    constructor(t, e = 1, i, s) {
      (super(),
        (this.strength = e),
        (this.radius = i),
        (this.threshold = s),
        (this.resolution = t !== void 0 ? new Ct(t.x, t.y) : new Ct(256, 256)),
        (this.clearColor = new Tt(0, 0, 0)),
        (this.needsSwap = !1),
        (this.renderTargetsHorizontal = []),
        (this.renderTargetsVertical = []),
        (this.nMips = 5));
      let r = Math.round(this.resolution.x / 2),
        a = Math.round(this.resolution.y / 2);
      ((this.renderTargetBright = new Re(r, a, { type: Ue, depthBuffer: !1 })),
        (this.renderTargetBright.texture.name = "UnrealBloomPass.bright"),
        (this.renderTargetBright.texture.generateMipmaps = !1));
      for (let u = 0; u < this.nMips; u++) {
        let f = new Re(r, a, { type: Ue, depthBuffer: !1 });
        ((f.texture.name = "UnrealBloomPass.h" + u),
          (f.texture.generateMipmaps = !1),
          this.renderTargetsHorizontal.push(f));
        let h = new Re(r, a, { type: Ue, depthBuffer: !1 });
        ((h.texture.name = "UnrealBloomPass.v" + u),
          (h.texture.generateMipmaps = !1),
          this.renderTargetsVertical.push(h),
          (r = Math.round(r / 2)),
          (a = Math.round(a / 2)));
      }
      let o = Uu;
      ((this.highPassUniforms = _n.clone(o.uniforms)),
        (this.highPassUniforms.luminosityThreshold.value = s),
        (this.highPassUniforms.smoothWidth.value = 0.01),
        (this.materialHighPassFilter = new Se({
          uniforms: this.highPassUniforms,
          vertexShader: o.vertexShader,
          fragmentShader: o.fragmentShader,
        })),
        (this.separableBlurMaterials = []));
      let l = [6, 10, 14, 18, 22];
      ((r = Math.round(this.resolution.x / 2)), (a = Math.round(this.resolution.y / 2)));
      for (let u = 0; u < this.nMips; u++)
        (this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),
          (this.separableBlurMaterials[u].uniforms.invSize.value = new Ct(1 / r, 1 / a)),
          (r = Math.round(r / 2)),
          (a = Math.round(a / 2)));
      ((this.compositeMaterial = this._getCompositeMaterial(this.nMips)),
        (this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture),
        (this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture),
        (this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture),
        (this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture),
        (this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture),
        (this.compositeMaterial.uniforms.bloomStrength.value = e),
        (this.compositeMaterial.uniforms.bloomRadius.value = 0.1));
      let c = [1, 0.8, 0.6, 0.4, 0.2];
      ((this.compositeMaterial.uniforms.bloomFactors.value = c),
        (this.bloomTintColors = [new F(1, 1, 1), new F(1, 1, 1), new F(1, 1, 1), new F(1, 1, 1), new F(1, 1, 1)]),
        (this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors),
        (this.copyUniforms = _n.clone(Io.uniforms)),
        (this.blendMaterial = new Se({
          uniforms: this.copyUniforms,
          vertexShader: Io.vertexShader,
          fragmentShader: Io.fragmentShader,
          premultipliedAlpha: !0,
          blending: Ys,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
        })),
        (this._oldClearColor = new Tt()),
        (this._oldClearAlpha = 1),
        (this._basic = new pi()),
        (this._fsQuad = new fs(null)));
    }
    dispose() {
      for (let t = 0; t < this.renderTargetsHorizontal.length; t++) this.renderTargetsHorizontal[t].dispose();
      for (let t = 0; t < this.renderTargetsVertical.length; t++) this.renderTargetsVertical[t].dispose();
      this.renderTargetBright.dispose();
      for (let t = 0; t < this.separableBlurMaterials.length; t++) this.separableBlurMaterials[t].dispose();
      (this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose());
    }
    setSize(t, e) {
      let i = Math.round(t / 2),
        s = Math.round(e / 2);
      this.renderTargetBright.setSize(i, s);
      for (let r = 0; r < this.nMips; r++)
        (this.renderTargetsHorizontal[r].setSize(i, s),
          this.renderTargetsVertical[r].setSize(i, s),
          (this.separableBlurMaterials[r].uniforms.invSize.value = new Ct(1 / i, 1 / s)),
          (i = Math.round(i / 2)),
          (s = Math.round(s / 2)));
    }
    render(t, e, i, s, r) {
      (t.getClearColor(this._oldClearColor), (this._oldClearAlpha = t.getClearAlpha()));
      let a = t.autoClear;
      ((t.autoClear = !1),
        t.setClearColor(this.clearColor, 0),
        r && t.state.buffers.stencil.setTest(!1),
        this.renderToScreen &&
          ((this._fsQuad.material = this._basic),
          (this._basic.map = i.texture),
          t.setRenderTarget(null),
          t.clear(),
          this._fsQuad.render(t)),
        (this.highPassUniforms.tDiffuse.value = i.texture),
        (this.highPassUniforms.luminosityThreshold.value = this.threshold),
        (this._fsQuad.material = this.materialHighPassFilter),
        t.setRenderTarget(this.renderTargetBright),
        t.clear(),
        this._fsQuad.render(t));
      let o = this.renderTargetBright;
      for (let l = 0; l < this.nMips; l++)
        ((this._fsQuad.material = this.separableBlurMaterials[l]),
          (this.separableBlurMaterials[l].uniforms.colorTexture.value = o.texture),
          (this.separableBlurMaterials[l].uniforms.direction.value = n.BlurDirectionX),
          t.setRenderTarget(this.renderTargetsHorizontal[l]),
          t.clear(),
          this._fsQuad.render(t),
          (this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture),
          (this.separableBlurMaterials[l].uniforms.direction.value = n.BlurDirectionY),
          t.setRenderTarget(this.renderTargetsVertical[l]),
          t.clear(),
          this._fsQuad.render(t),
          (o = this.renderTargetsVertical[l]));
      ((this._fsQuad.material = this.compositeMaterial),
        (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
        (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
        (this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors),
        t.setRenderTarget(this.renderTargetsHorizontal[0]),
        t.clear(),
        this._fsQuad.render(t),
        (this._fsQuad.material = this.blendMaterial),
        (this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture),
        r && t.state.buffers.stencil.setTest(!0),
        this.renderToScreen
          ? (t.setRenderTarget(null), this._fsQuad.render(t))
          : (t.setRenderTarget(i), this._fsQuad.render(t)),
        t.setClearColor(this._oldClearColor, this._oldClearAlpha),
        (t.autoClear = a));
    }
    _getSeparableBlurMaterial(t) {
      let e = [],
        i = t / 3;
      for (let a = 0; a < t; a++) e.push((0.39894 * Math.exp((-0.5 * a * a) / (i * i))) / i);
      let s = [],
        r = [];
      for (let a = 1; a < t; a += 2) {
        let o = e[a],
          l = a + 1 < t ? e[a + 1] : 0,
          c = o + l;
        (s.push((a * o + (a + 1) * l) / c), r.push(c));
      }
      return new Se({
        defines: { KERNEL_PAIRS: s.length },
        uniforms: {
          colorTexture: { value: null },
          invSize: { value: new Ct(0.5, 0.5) },
          direction: { value: new Ct(0.5, 0.5) },
          centerWeight: { value: e[0] },
          gaussianOffsets: { value: s },
          gaussianWeights: { value: r },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`,
      });
    }
    _getCompositeMaterial(t) {
      return new Se({
        defines: { NUM_MIPS: t },
        uniforms: {
          blurTexture1: { value: null },
          blurTexture2: { value: null },
          blurTexture3: { value: null },
          blurTexture4: { value: null },
          blurTexture5: { value: null },
          bloomStrength: { value: 1 },
          bloomFactors: { value: null },
          bloomTintColors: { value: null },
          bloomRadius: { value: 0 },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`,
      });
    }
  };
  ps.BlurDirectionX = new Ct(1, 0);
  ps.BlurDirectionY = new Ct(0, 1);
  var dl = {
    name: "FXAAShader",
    uniforms: { tDiffuse: { value: null }, resolution: { value: new Ct(1 / 1024, 1 / 512) } },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`,
  };
  var Ou = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
    XE = `
precision highp float;
precision highp sampler3D;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform sampler3D tNoise;
uniform mat4 uProjInv; uniform mat4 uCamWorld; uniform int uDepthMode; uniform float uLogFar;
uniform int uN;
uniform vec3 pC[3]; uniform vec3 pSun[3]; uniform vec4 pRad[3]; uniform vec3 pBR[3]; uniform vec3 pBM[3]; uniform vec4 pCloud[3]; uniform vec3 pCloudTint[3];
uniform float uSunI; uniform float uTime; uniform float uCloudSteps;
varying vec2 vUv;

vec2 rs(vec3 o, vec3 d, float R){
  float b = dot(o, d); vec3 p = o - b * d; float pl = length(p);
  if (pl > R) return vec2(1e30, -1e30);
  float h = sqrt((R - pl) * (R + pl));
  return vec2(-b - h, -b + h);
}
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

float cloudD(vec3 p, vec4 cl, float lod){
  float r = length(p); float hf = (r - cl.x) / (cl.y - cl.x);
  if (hf <= 0.0 || hf >= 1.0) return 0.0;
  vec3 w = vec3(uTime * 0.0035, 0.0, uTime * 0.0021);
  float weather = texture(tNoise, p / 70000.0 + w * 0.2).r;
  vec4 n1 = texture(tNoise, p / 11000.0 + w);
  float base = n1.g * 0.75 + n1.r * 0.45;
  float cov = cl.z + (weather - 0.5) * 0.7;
  float shape = smoothstep(0.0, 0.12, hf) * smoothstep(1.0, 0.35 + 0.3 * n1.r, hf);
  float d = base * shape - (1.0 - cov);
  if (d <= 0.0) return 0.0;
  if (lod < 0.5) { vec4 n2 = texture(tNoise, p / 2100.0 + w * 3.0); d -= (1.0 - n2.g) * 0.18 * (1.2 - hf); }
  return clamp(d * 3.5, 0.0, 1.0);
}

vec3 viewDir(vec2 uv, out float zScale){
  vec4 v = uProjInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  vec3 vd = v.xyz / v.w;
  vd = normalize(vd);
  zScale = -vd.z;
  return vd;
}

void main(){
  vec3 col = texture2D(tColor, vUv).rgb;
  float d = texture2D(tDepth, vUv).x;
  float zs; vec3 vd = viewDir(vUv, zs);
  vec3 rd = normalize(mat3(uCamWorld) * vd);
  float tScene = 1e30;
  if (uDepthMode == 1) {
    if (d > 0.0) { vec4 vp = uProjInv * vec4(vUv * 2.0 - 1.0, d, 1.0); tScene = length(vp.xyz / vp.w); }
  } else if (uDepthMode == 0) {
    if (d < 1.0) { float w = exp2(d * uLogFar) - 1.0; tScene = w / max(zs, 1e-4); }
  } else {
    if (d < 1.0) { vec4 vp = uProjInv * vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); tScene = length(vp.xyz / vp.w); }
  }
  float jit = ign(gl_FragCoord.xy);

  for (int i = 0; i < 3; i++) {
    if (i >= uN) break;
    vec3 ro = -pC[i];
    float R = pRad[i].x, top = pRad[i].y, Hr = pRad[i].z, Hm = pRad[i].w;
    vec3 L = pSun[i];
    vec2 a = rs(ro, rd, top);
    if (a.y < 0.0 || a.x > a.y) continue;
    float tEnd = tScene;

    // ---------- Wolken
    vec4 cl = pCloud[i];
    if (cl.w > 0.5) {
      vec2 o = rs(ro, rd, cl.y);
      if (o.y > 0.0 && o.x <= o.y) {
        vec2 inn = rs(ro, rd, cl.x);
        float rc = length(ro);
        bool hitIn = inn.x <= inn.y && inn.x > 0.0;
        float s0, s1;
        if (rc < cl.x) { s0 = inn.y; s1 = o.y; }
        else if (rc < cl.y) { s0 = 0.0; s1 = hitIn ? inn.x : o.y; }
        else { s0 = o.x; s1 = hitIn ? inn.x : o.y; }
        s1 = min(min(s1, tScene), s0 + 45000.0);
        if (s1 > s0) {
          float steps = uCloudSteps;
          float ds = (s1 - s0) / steps;
          float trans = 1.0; vec3 acc = vec3(0.0); float tHit = -1.0;
          float mu = dot(rd, L);
          float ph = mix(0.8, 1.0, 0.5 + 0.5 * mu) * (1.0 + 2.5 * pow(max(mu, 0.0), 12.0));
          float lodD = s0 > 30000.0 ? 1.0 : 0.0;
          for (int k = 0; k < 40; k++) {
            if (float(k) >= steps || trans < 0.03) break;
            float t = s0 + ds * (float(k) + jit);
            vec3 p = ro + rd * t;
            float dens = cloudD(p, cl, lodD);
            if (dens > 0.001) {
              if (tHit < 0.0) tHit = t;
              vec3 up = normalize(p);
              float smu = dot(up, L);
              float ls = cloudD(p + L * 250.0, cl, 1.0) + cloudD(p + L * 700.0, cl, 1.0) * 1.3;
              float sh = exp(-ls * 2.2) + 0.25 * exp(-ls * 0.5);
              float hgt = length(p) - R;
              float slant = 1.0 / max(smu + 0.12, 0.05);
              vec3 sunT = exp(-(pBR[i] * Hr * exp(-hgt / Hr) + pBM[i] * 1.1 * Hm * exp(-hgt / Hm)) * slant) * smoothstep(-0.12, 0.06, smu);
              float hf = (length(p) - cl.x) / (cl.y - cl.x);
              vec3 amb = pCloudTint[i] * (0.35 + 0.65 * hf) * clamp(smu * 2.0 + 0.4, 0.04, 1.0);
              vec3 light = sunT * sh * ph * 1.35 + amb;
              float sig = dens * 0.03 * ds;
              float ex = exp(-sig);
              acc += trans * (1.0 - ex) * light;
              trans *= ex;
            }
          }
          col = col * trans + acc * uSunI * 0.055;
          if (trans < 0.45 && tHit > 0.0) tEnd = min(tEnd, tHit);
        }
      }
    }

    // ---------- Atmosph\xE4re (Einfachstreuung)
    float t0 = max(a.x, 0.0), t1 = min(a.y, tEnd);
    if (t1 <= t0) continue;
    const int NS = 14;
    float dt = (t1 - t0) / float(NS);
    float oR = 0.0, oM = 0.0; vec3 sR = vec3(0.0), sM = vec3(0.0);
    for (int k = 0; k < NS; k++) {
      float t = t0 + dt * (float(k) + jit);
      vec3 p = ro + rd * t;
      float h = length(p) - R;
      float dR = exp(-h / Hr) * dt, dM = exp(-h / Hm) * dt;
      oR += dR; oM += dM;
      float b = dot(p, L);
      if (b < 0.0 && length(p - b * L) < R) continue;
      vec2 lt = rs(p, L, top);
      float ld = max(lt.y, 0.0) / 4.0;
      float lr = 0.0, lm = 0.0;
      for (int j = 0; j < 4; j++) {
        vec3 q = p + L * (ld * (float(j) + 0.5));
        float hh = length(q) - R;
        lr += exp(-hh / Hr) * ld; lm += exp(-hh / Hm) * ld;
      }
      vec3 att = exp(-(pBR[i] * (oR + lr) + pBM[i] * 1.1 * (oM + lm)));
      sR += att * dR; sM += att * dM;
    }
    float mu = dot(rd, L);
    float pr = 3.0 / (16.0 * 3.14159265) * (1.0 + mu * mu);
    const float g = 0.76;
    float pm = 3.0 / (8.0 * 3.14159265) * ((1.0 - g * g) * (1.0 + mu * mu)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * mu, 1.5));
    vec3 Lin = uSunI * (sR * pBR[i] * pr + sM * pBM[i] * pm);
    vec3 T = exp(-(pBR[i] * oR + pBM[i] * 1.1 * oM));
    col = col * T + Lin;
  }
  gl_FragColor = vec4(col, 1.0);
}`,
    KE = `
uniform sampler2D tColor; uniform float uExposure; uniform float uVignette;
varying vec2 vUv;
vec3 RRTAndODTFit(vec3 v){ vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
vec3 aces(vec3 color){
  const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
  const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
  color = IN * color; color = RRTAndODTFit(color); color = OUT * color; return clamp(color, 0.0, 1.0);
}
vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
void main(){
  vec3 c = texture2D(tColor, vUv).rgb * uExposure;
  c = aces(c);
  vec2 q = vUv - 0.5;
  c *= 1.0 - uVignette * dot(q, q) * 1.6;
  c = toSRGB(c);
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) / 255.0;
  gl_FragColor = vec4(c, 1.0);
}`,
    Ao = class {
      constructor(t, e) {
        this.opts = e;
        let i = new ur({
          canvas: t,
          antialias: !1,
          powerPreference: "high-performance",
          reversedDepthBuffer: !0,
          stencil: !1,
        });
        ((this.depthMode = 1),
          i.capabilities.reversedDepthBuffer ||
            (i.dispose(),
            (i = new ur({
              canvas: t,
              antialias: !1,
              powerPreference: "high-performance",
              logarithmicDepthBuffer: !0,
              stencil: !1,
            })),
            (this.depthMode = i.capabilities.logarithmicDepthBuffer ? 0 : 2)),
          (this.r = i),
          i.setPixelRatio(e.pixelRatio),
          (i.shadowMap.enabled = e.shadows),
          (i.shadowMap.type = Zs),
          (i.toneMapping = ti),
          (i.outputColorSpace = xn),
          (i.autoClear = !0));
        let s = (r, a) => {
          let o = new Re(1, 1, { type: r, format: qe, depthBuffer: !!a });
          return (a && ((o.depthTexture = new _i(1, 1, Ke)), (o.depthTexture.format = si)), o);
        };
        ((this.sceneRT = s(Ue, !0)),
          (this.hdrRT = s(Ue, !1)),
          (this.ldrRT = s(He, !1)),
          (this.atmoMat = new Se({
            vertexShader: Ou,
            fragmentShader: XE,
            depthTest: !1,
            depthWrite: !1,
            uniforms: {
              tColor: { value: this.sceneRT.texture },
              tDepth: { value: this.sceneRT.depthTexture },
              tNoise: { value: Pe.noise3 },
              uProjInv: { value: new Vt() },
              uCamWorld: { value: new Vt() },
              uDepthMode: { value: this.depthMode },
              uLogFar: { value: 1 },
              uN: { value: 0 },
              pC: { value: [new F(), new F(), new F()] },
              pSun: { value: [new F(), new F(), new F()] },
              pRad: { value: [new ne(), new ne(), new ne()] },
              pBR: { value: [new F(), new F(), new F()] },
              pBM: { value: [new F(), new F(), new F()] },
              pCloud: { value: [new ne(), new ne(), new ne()] },
              pCloudTint: { value: [new F(), new F(), new F()] },
              uSunI: { value: 22 },
              uTime: { value: 0 },
              uCloudSteps: { value: e.cloudSteps },
            },
          })),
          (this.toneMat = new Se({
            vertexShader: Ou,
            fragmentShader: KE,
            depthTest: !1,
            depthWrite: !1,
            uniforms: { tColor: { value: this.hdrRT.texture }, uExposure: { value: 1 }, uVignette: { value: 0.35 } },
          })),
          (this.fxaaMat = new Se({ ...dl, uniforms: _n.clone(dl.uniforms), depthTest: !1, depthWrite: !1 })),
          (this.fxaaMat.uniforms.tDiffuse.value = this.ldrRT.texture),
          (this.quad = new fs(this.atmoMat)),
          (this.bloom = new ps(new Ct(256, 256), 0.32, 0.55, 1.6)),
          (this.size = [0, 0]));
      }
      resize(t, e) {
        this.r.setSize(t, e, !1);
        let i = this.r.getPixelRatio(),
          s = Math.floor(t * i),
          r = Math.floor(e * i);
        ((this.size = [s, r]),
          this.sceneRT.setSize(s, r),
          this.hdrRT.setSize(s, r),
          this.ldrRT.setSize(s, r),
          this.bloom.setSize(s, r),
          this.fxaaMat.uniforms.resolution.value.set(1 / s, 1 / r));
      }
      render(t, e, i, s, r) {
        let a = this.r;
        (a.setRenderTarget(this.sceneRT),
          a.render(t, e),
          (this.calls = a.info.render.calls),
          (this.tris = a.info.render.triangles));
        let o = this.atmoMat.uniforms;
        (o.uProjInv.value.copy(e.projectionMatrixInverse),
          o.uCamWorld.value.copy(e.matrixWorld),
          (o.uLogFar.value = Math.log2(e.far + 1)),
          (o.uTime.value = s),
          (o.uN.value = i.length),
          i.forEach((l, c) => {
            let u = l.P.atmo,
              f = l.P.radius;
            (o.pC.value[c].set(l.C[0], l.C[1], l.C[2]),
              o.pSun.value[c].set(l.sun[0], l.sun[1], l.sun[2]),
              o.pRad.value[c].set(f, f + u.height * 1e3, u.rayleighExp * 1e3, u.mieExp * 1e3),
              o.pBR.value[c].set(...u.rayleigh.map((h) => (h * u.rayleighScale) / 1e3)),
              o.pBM.value[c].set(...u.mie.map((h) => (h * u.mieScale) / 1e3)),
              o.pCloud.value[c].set(
                f + u.cloudBottom * 1e3,
                f + (u.cloudBottom + u.cloudHeight) * 1e3,
                u.coverage ?? 0.52,
                u.clouds && this.opts.clouds ? 1 : 0,
              ),
              o.pCloudTint.value[c].set(...(u.cloudTint || [0.55, 0.68, 0.9])));
          }),
          (this.quad.material = this.atmoMat),
          a.setRenderTarget(this.hdrRT),
          this.quad.render(a),
          this.fx && this.fx.children.length && ((a.autoClear = !1), a.render(this.fx, e), (a.autoClear = !0)),
          this.opts.bloom && this.bloom.render(a, null, this.hdrRT, 0.016, !1),
          (this.toneMat.uniforms.uExposure.value = r),
          (this.quad.material = this.toneMat),
          a.setRenderTarget(this.ldrRT),
          this.quad.render(a),
          (this.quad.material = this.fxaaMat),
          a.setRenderTarget(null),
          this.quad.render(a));
      }
    };
  var Wt = 2.5,
    dr = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1],
    ],
    Bu = [5, 4, 1, 0, 2, 3],
    ce = (n, t, e, i, s = 0, r = !1) => ({
      mesh: n,
      mat: t,
      loc: e,
      scale: typeof i == "number" ? [i, i, i] : i,
      rot: s,
      glow: r,
    }),
    ei = [
      {
        id: "armor",
        name: "Panzerung",
        hint: "Leichter Rumpfblock",
        mass: 700,
        parts: [
          ce("cube", "Hull", [0, 0, 0], 2.5),
          ce("cube", "HullDark", [0, 0, 0], [2.52, 2.3, 2.3]),
          ce("cube", "HullDark", [0, 0, 0], [2.3, 2.52, 2.3]),
          ce("cube", "HullDark", [0, 0, 0], [2.3, 2.3, 2.52]),
        ],
      },
      {
        id: "cockpit",
        name: "Cockpit",
        hint: "Steuerung \xB7 F zum Einsteigen",
        mass: 1400,
        dir: !0,
        facing: 5,
        gyro: 6e4,
        parts: [
          ce("cube", "HullDark", [-20, 0, -30], [2.1, 2.5, 1.9]),
          ce("sphere", "Glass", [40, 0, 35], [2.2, 2.1, 1.5]),
          ce("cube", "Accent", [-100, 0, 60], [0.5, 2.5, 1]),
          ce("cube", "Glow", [110, 0, -60], [0.1, 1.6, 0.08], 0, !0),
        ],
      },
      {
        id: "thruster",
        name: "Triebwerk",
        hint: "Schub entgegen der D\xFCsenrichtung \xB7 R dreht",
        mass: 1100,
        thrust: 36e4,
        dir: !0,
        facing: 4,
        parts: [
          ce("cube", "HullDark", [-80, 0, 0], [0.9, 2.5, 2.5]),
          ce("cyl", "Hull", [-10, 0, 0], [2.2, 2.2, 1.2], "x"),
          ce("cone", "Metal", [70, 0, 0], [2.3, 2.3, 1.1], "cone"),
          ce("cyl", "Glow", [118, 0, 0], [1.7, 1.7, 0.05], "x", !0),
        ],
      },
      {
        id: "gyro",
        name: "Gyroskop",
        hint: "Drehmoment f\xFCr die Lenkung",
        mass: 900,
        gyro: 9e5,
        parts: [
          ce("cube", "HullDark", [0, 0, 0], [2.5, 2.5, 0.3]),
          ce("cube", "HullDark", [0, 0, -110], [2.5, 2.5, 0.3]),
          ce("cube", "HullDark", [0, 0, 110], [2.5, 2.5, 0.3]),
          ce("sphere", "Metal", [0, 0, 0], 1.9),
          ce("cyl", "Glow", [0, 0, 0], [2.05, 2.05, 0.12], 0, !0),
        ],
      },
      {
        id: "tank",
        name: "Treibstofftank",
        hint: "Wasserstoff f\xFCr die Triebwerke",
        mass: 600,
        fuel: 4e3,
        parts: [
          ce("cyl", "Accent", [0, 0, 0], [2.3, 2.3, 2.1]),
          ce("cube", "HullDark", [0, 0, 112], [2.5, 2.5, 0.26]),
          ce("cube", "HullDark", [0, 0, -112], [2.5, 2.5, 0.26]),
        ],
      },
      {
        id: "gear",
        name: "Landebein",
        hint: "Federndes Landebein \xB7 zeigt in Blickrichtung",
        mass: 500,
        dir: !0,
        facing: 3,
        gearContact: 1.62,
        parts: [
          ce("cube", "HullDark", [-100, 0, 0], [0.5, 2.5, 2.5]),
          ce("cyl", "Metal", [20, 0, 0], [0.55, 0.55, 2.4], "x"),
          ce("cyl", "Accent", [-30, 0, 0], [0.8, 0.8, 0.8], "x"),
          ce("cyl", "HullDark", [150, 0, 0], [1.8, 1.8, 0.2], "x"),
        ],
      },
      {
        id: "light",
        name: "Scheinwerfer",
        hint: "L schaltet das Licht",
        mass: 300,
        dir: !0,
        facing: 5,
        parts: [
          ce("cube", "Hull", [-30, 0, 0], [1.9, 2.5, 2.5]),
          ce("cyl", "HullDark", [80, 0, 0], [1.8, 1.8, 0.9], "x"),
          ce("cyl", "Glow", [126, 0, 0], [1.5, 1.5, 0.05], "x", !0),
        ],
      },
      {
        id: "window",
        name: "Fenster",
        hint: "Panzerglas",
        mass: 400,
        parts: [
          ce("cube", "Glass", [0, 0, 0], 2.36),
          ce("cube", "HullDark", [0, 0, 0], [2.5, 0.2, 2.5]),
          ce("cube", "HullDark", [0, 0, 0], [0.2, 2.5, 2.5]),
        ],
      },
    ],
    ms = Object.fromEntries(ei.map((n, t) => [n.id, t])),
    ZE = {
      cube: new bi(1, 1, 1),
      cyl: new Zi(0.5, 0.5, 1, 20, 1),
      sphere: new Yi(0.5, 20, 14),
      cone: new Sn(0.5, 1, 20, 1, !0),
    },
    Lu = new Vt(),
    Fo = new Vt(),
    $u = new Vt(),
    zu = new Vt(),
    YE = new F();
  function jE(n, t = new Vt()) {
    let e = dr[n],
      i = n === 2 ? [0, 0, 1] : n === 3 ? [0, 0, -1] : [0, 1, 0];
    return t.lookAt(YE, new F(...e), new F(...i));
  }
  function tg(n) {
    let [t, e, i] = n.loc;
    return (
      zu.makeTranslation(-e / 100, i / 100, -t / 100),
      n.rot === "x" ? Fo.makeRotationX(-Math.PI / 2) : n.rot === "cone" ? Fo.makeRotationX(Math.PI / 2) : Fo.identity(),
      $u.makeScale(n.scale[1], n.scale[2], n.scale[0]),
      new Vt().multiplyMatrices(zu, Fo).multiply($u)
    );
  }
  var eg = ei.map((n) => n.parts.map(tg));
  function qu(n) {
    let t = dr[n];
    return [t[0] * 1.62, t[1] * 1.62, t[2] * 1.62];
  }
  function fl(n, t) {
    let e = {},
      i = new Vt();
    for (let [s, r] of n) {
      let [a, o, l] = s.split(",").map(Number),
        c = ei[r.type];
      (jE(r.facing, i),
        i.setPosition(a * Wt, o * Wt, l * Wt),
        c.parts.forEach((u, f) => {
          let h = ZE[u.mesh].clone();
          (Lu.multiplyMatrices(i, eg[r.type][f]), h.applyMatrix4(Lu));
          let d = u.glow ? "Glow:" + t(r) : u.mat;
          (e[d] || (e[d] = [])).push(h);
        }));
    }
    return e;
  }
  function Gu(n, t) {
    return fl(new Map([["0,0,0", { type: n, facing: t }]]), () => "x");
  }
  var ig = 9e3,
    Rn = () => new F(),
    Ei = Rn(),
    ng = Rn(),
    pl = new ye(),
    No = class {
      constructor(t, e, i) {
        ((this.uni = t),
          (this.mats = e),
          (this.group = new ke()),
          (this.visual = new ke()),
          this.group.add(this.visual),
          i.add(this.group),
          (this.blocks = new Map()),
          (this.x = [0, 0, 0]),
          (this.q = new ye()),
          (this.v = [0, 0, 0]),
          (this.w = Rn()),
          (this.com = Rn()),
          (this.input = { move: Rn(), look: [0, 0], roll: 0, boost: !1, pulse: !1 }),
          (this.piloted = !1),
          (this.dampeners = !0),
          (this.lightsOn = !1),
          (this.sleeping = !1),
          (this.sleepT = 0),
          (this.landed = !1),
          (this.fuel = 0),
          (this.fuelCap = 0),
          (this.mass = 1e3),
          (this.axisThrust = [0, 0, 0, 0, 0, 0]),
          (this.axisUsage = [0, 0, 0, 0, 0, 0]),
          (this.pulseCharge = 0),
          (this.pulseActive = !1),
          (this.status = ""),
          (this.glowMats = {}),
          (this.spot = new Xs(14543103, 0, 180, 0.45, 0.5, 1.5)),
          this.spot.position.set(0, 0, -6),
          this.spot.target.position.set(0, -3, -40),
          this.visual.add(this.spot, this.spot.target),
          this.buildDefault());
      }
      buildDefault() {
        let t = new Map(),
          e = (i, s, r, a, o) => {
            let l = ms[a],
              c = o === void 0 ? (ei[l].facing ?? 5) : Bu[o];
            t.set(`${-s},${r},${-i}`, { type: l, facing: c });
          };
        (e(2, 0, 0, "cockpit", 0),
          e(2, -1, 0, "light", 0),
          e(2, 1, 0, "light", 0),
          e(1, -1, 0, "armor"),
          e(1, 0, 0, "gyro"),
          e(1, 1, 0, "armor"),
          e(0, -1, 0, "tank"),
          e(0, 0, 0, "armor"),
          e(0, 1, 0, "tank"),
          e(-1, -1, 0, "armor"),
          e(-1, 0, 0, "gyro"),
          e(-1, 1, 0, "armor"));
        for (let i = -1; i <= 1; i++) e(-2, i, 0, "thruster", 1);
        for (let i of [-1, 1])
          (e(0, 2 * i, 0, "armor"),
            e(-1, 2 * i, 0, "armor"),
            e(1, 2 * i, 0, "thruster", 0),
            e(-1, 3 * i, 0, "thruster", i > 0 ? 2 : 3),
            e(0, 3 * i, 0, "armor"),
            e(-2, 2 * i, 0, "window"));
        (e(1, -1, -1, "thruster", 5),
          e(1, 1, -1, "thruster", 5),
          e(-1, -1, -1, "thruster", 5),
          e(-1, 1, -1, "thruster", 5),
          e(1, 0, -1, "gear", 5),
          e(-1, 0, -1, "gear", 5),
          e(0, -2, -1, "gear", 5),
          e(0, 2, -1, "gear", 5),
          e(0, 0, -1, "armor"),
          e(0, 0, 1, "thruster", 4),
          e(-1, 0, 1, "armor"),
          e(1, 0, 1, "window"),
          (this.blocks = t),
          this.recalc(!0),
          (this.fuel = this.fuelCap));
      }
      cellPos(t) {
        let [e, i, s] = t.split(",").map(Number);
        return new F(e * Wt, i * Wt, s * Wt);
      }
      hasCockpit() {
        for (let t of this.blocks.values()) if (t.type === ms.cockpit) return !0;
        return !1;
      }
      cockpitCell() {
        for (let [t, e] of this.blocks) if (e.type === ms.cockpit) return this.cellPos(t);
        return null;
      }
      axisIndex(t) {
        let e = Math.abs(t[0]) > 0.5 ? 0 : Math.abs(t[1]) > 0.5 ? 1 : 2;
        return e * 2 + (t[e] > 0 ? 0 : 1);
      }
      recalc(t = !1) {
        let e = t ? null : this.gridOrigin(),
          i = 0,
          s = 0,
          r = 0,
          a = Rn();
        this.axisThrust = [0, 0, 0, 0, 0, 0];
        for (let [c, u] of this.blocks) {
          let f = ei[u.type];
          if (
            ((i += f.mass),
            a.addScaledVector(this.cellPos(c), f.mass),
            (s += f.fuel || 0),
            (r += f.gyro || 0),
            f.thrust)
          ) {
            let h = dr[u.facing];
            this.axisThrust[this.axisIndex([-h[0], -h[1], -h[2]])] += f.thrust;
          }
        }
        ((i = Math.max(i, 100)),
          (this.mass = i),
          (this.fuelCap = s * (this.fuelMul || 1)),
          (this.fuel = Math.min(this.fuel, s)),
          (this.gyro = r),
          this.com.copy(a.divideScalar(i)));
        let o = [0, 0, 0];
        for (let [c, u] of this.blocks) {
          let f = ei[u.type].mass,
            h = this.cellPos(c).sub(this.com),
            d = (f * Wt * Wt) / 6;
          ((o[0] += f * (h.y * h.y + h.z * h.z) + d),
            (o[1] += f * (h.x * h.x + h.z * h.z) + d),
            (o[2] += f * (h.x * h.x + h.y * h.y) + d));
        }
        this.inertia = o.map((c) => Math.max(c, 100));
        let l = new Set();
        for (let c of this.blocks.keys()) {
          let [u, f, h] = c.split(",").map(Number);
          for (let d = -1; d <= 1; d += 2)
            for (let E = -1; E <= 1; E += 2)
              for (let v = -1; v <= 1; v += 2) l.add(`${u * 2 + d},${f * 2 + E},${h * 2 + v}`);
        }
        ((this.probes = []), (this.bound = 3));
        for (let c of l) {
          let [u, f, h] = c.split(",").map(Number),
            d = 0;
          for (let v = -1; v <= 1; v += 2)
            for (let m = -1; m <= 1; m += 2)
              for (let p = -1; p <= 1; p += 2) {
                let y = u + v,
                  Q = f + m,
                  S = h + p;
                !(y & 1) && !(Q & 1) && !(S & 1) && this.blocks.has(`${y / 2},${Q / 2},${S / 2}`) && d++;
              }
          if (d >= 8) continue;
          let E = new F(u, f, h).multiplyScalar(Wt / 2).sub(this.com);
          (this.probes.push({ p: E, gear: !1 }), (this.bound = Math.max(this.bound, E.length())));
        }
        for (let [c, u] of this.blocks) {
          if (u.type !== ms.gear) continue;
          let f = this.cellPos(c)
            .add(new F(...qu(u.facing)))
            .sub(this.com);
          (this.probes.push({ p: f, gear: !0 }), (this.bound = Math.max(this.bound, f.length())));
        }
        (e && (Ei.copy(this.com).applyQuaternion(this.q), (this.x = [e[0] + Ei.x, e[1] + Ei.y, e[2] + Ei.z])),
          this.rebuildVisual());
      }
      gridOrigin() {
        return (Ei.copy(this.com).applyQuaternion(this.q), [this.x[0] - Ei.x, this.x[1] - Ei.y, this.x[2] - Ei.z]);
      }
      rebuildVisual() {
        var i;
        for (let s of [...this.visual.children]) s.isMesh && (this.visual.remove(s), s.geometry.dispose());
        let t = (s) => {
            if (ei[s.type].thrust) {
              let a = dr[s.facing];
              return "a" + this.axisIndex([-a[0], -a[1], -a[2]]);
            }
            return s.type === ms.light ? "light" : "misc";
          },
          e = fl(this.blocks, t);
        for (let [s, r] of Object.entries(e)) {
          let a = Mu(r, !1);
          r.forEach((c) => c.dispose());
          let o;
          if (s.startsWith("Glow:")) {
            let c = s.slice(5);
            ((o = (i = this.glowMats)[c] || (i[c] = this.mats.hull.Glow.clone())),
              c.startsWith("a") && o.emissive.setRGB(0.4, 0.75, 1),
              c === "light" && o.emissive.setRGB(1, 0.95, 0.85));
          } else o = this.mats.hull[s];
          let l = new Ee(a, o);
          ((l.castShadow = s !== "Glass"), (l.receiveShadow = !0), this.visual.add(l));
        }
      }
      placeLanded(t, e, i) {
        let s = new F(...e),
          r = new F(...i).addScaledVector(s, -s.dot(new F(...i))).normalize(),
          a = new Vt().lookAt(new F(), r, s);
        this.q.setFromRotationMatrix(a);
        let o = t.P.radius,
          l = 0;
        for (let f of this.probes) l = Math.min(l, f.p.y);
        let c = Math.max(t.gen.height(e[0], e[1], e[2]), t.P.ocean ? 0 : -1e9),
          u = o + c - l + 0.4;
        ((this.x = [t.pos[0] + e[0] * u, t.pos[1] + e[1] * u, t.pos[2] + e[2] * u]),
          (this.v = [0, 0, 0]),
          this.w.set(0, 0, 0),
          (this.sleeping = !1),
          (this.sleepT = 0));
      }
      update(t, e, i) {
        if (
          (this.piloted &&
            (this.input.move.lengthSq() > 0 ||
              Math.abs(this.input.roll) > 0.01 ||
              this.input.look[0] ||
              this.input.look[1] ||
              this.input.pulse) &&
            ((this.sleeping = !1), (this.sleepT = 0)),
          !this.sleeping && t > 0)
        )
          for (let o = 0; o < 4; o++) this.simulate(Math.min(t, 0.05) / 4);
        t > 0 && (this.input.look[0] = this.input.look[1] = 0);
        let r = this.gridOrigin();
        (this.group.position.set(r[0] - e[0], r[1] - e[1], r[2] - e[2]), this.group.quaternion.copy(this.q));
        for (let [a, o] of Object.entries(this.glowMats))
          if (a.startsWith("a")) {
            let l = this.axisUsage[+a.slice(1)] || 0;
            o.emissiveIntensity = 0.04 + l * 26 + (this.pulseActive ? 30 : 0);
          } else
            a === "light"
              ? (o.emissiveIntensity = this.lightsOn ? 22 : 0.2)
              : (o.emissiveIntensity = this.piloted ? 6 + Math.sin(i * 3) * 1.5 : 1.5);
        this.spot.intensity = this.lightsOn ? 900 : 0;
      }
      simulate(t) {
        let e = this.uni,
          i = this.mass + this.fuel,
          s = e.gravity(this.x),
          r = e.nearest(this.x),
          a = e.local(r, this.x),
          o = e.airDensity(r, a.alt),
          l = this.input,
          c = this.piloted && this.hasCockpit(),
          u = Math.max(8e3, r.P.atmo.has ? r.P.atmo.height * 1e3 * 0.6 : 5e3);
        if (c && l.pulse && this.fuel > 0 && a.alt > u)
          ((this.pulseActive = !0), (this.pulseCharge = Math.min(1, this.pulseCharge + t * 0.35)));
        else {
          if (this.pulseActive) {
            this.pulseActive = !1;
            let A = Math.hypot(...this.v);
            A > 800 && (this.v = this.v.map((L) => (L / A) * 800));
          }
          this.pulseCharge = Math.max(0, this.pulseCharge - t * 2);
        }
        let f = pl.copy(this.q).invert(),
          h = Ei.set(...this.v).applyQuaternion(f),
          d = ng.set(...s).applyQuaternion(f),
          E = c && l.boost ? 1.8 : 1,
          v = [0, 0, 0],
          m = [l.move.x, l.move.y, l.move.z],
          p = [h.x, h.y, h.z],
          y = [d.x, d.y, d.z];
        for (let A = 0; A < 3; A++) {
          let L = this.axisThrust[A * 2] * E,
            G = this.axisThrust[A * 2 + 1] * E,
            D = c ? m[A] : 0,
            et = 0;
          (Math.abs(D) > 0.05 ? (et = D > 0 ? D * L : D * G) : this.dampeners && c && (et = i * (-p[A] * 1.6 - y[A])),
            (v[A] = Math.min(Math.max(et, -G), L)),
            this.fuel <= 0 && (v[A] = 0),
            (this.axisUsage[A * 2] = L > 0 ? Math.max(0, v[A] / L) : 0),
            (this.axisUsage[A * 2 + 1] = G > 0 ? Math.max(0, -v[A] / G) : 0));
        }
        (this.pulseActive && ((v[0] = v[1] = v[2] = 0), this.axisUsage.fill(0), (this.axisUsage[5] = 1)),
          (this.fuel = Math.max(
            0,
            this.fuel - ((Math.abs(v[0]) + Math.abs(v[1]) + Math.abs(v[2])) / (ig * 9.81)) * t * (E > 1 ? 1.6 : 1),
          )),
          this.pulseActive && (this.fuel = Math.max(0, this.fuel - 2 * t)));
        let Q = new F(...v).applyQuaternion(this.q),
          S = [Q.x / i + s[0], Q.y / i + s[1], Q.z / i + s[2]],
          M = Math.hypot(...this.v);
        for (let A = 0; A < 3; A++) S[A] -= this.v[A] * o * (0.06 + 35e-5 * M);
        let P = [0, 0, 0],
          T = [0, 0, 0];
        if (c) {
          let A = 1 / Math.max(t * 4 * 4, 0.001);
          ((T[1] = Math.max(-1.6, Math.min(1.6, -l.look[0] * 0.0022 * A))),
            (T[0] = Math.max(-1.4, Math.min(1.4, -l.look[1] * 0.0022 * A))),
            (T[2] = -l.roll * 1.3));
        }
        let x = [this.w.x, this.w.y, this.w.z];
        if (c || !this.landed)
          for (let A = 0; A < 3; A++)
            P[A] = Math.max(-this.gyro, Math.min(this.gyro, (T[A] - x[A]) * this.inertia[A] * 5));
        let b = 0,
          N = 0,
          w = [0, 0, 0],
          C = Rn();
        if (a.alt < this.bound + 60) {
          let A = Math.max(3, this.probes.filter((it) => it.gear).length),
            L = Math.max(Math.hypot(...s), 1),
            G = (i * L) / (0.12 * A),
            D = 2 * Math.sqrt((G * i) / A) * 0.8,
            et = this.w.clone().applyQuaternion(this.q),
            J = r.P.radius,
            Y = this.probes.length;
          for (let it of this.probes) {
            let ft = it.p.clone().applyQuaternion(this.q),
              ct = this.x[0] + ft.x - r.pos[0],
              ee = this.x[1] + ft.y - r.pos[1],
              Dt = this.x[2] + ft.z - r.pos[2],
              yt = Math.hypot(ct, ee, Dt),
              W = ct / yt,
              Z = ee / yt,
              xt = Dt / yt,
              Ut = J + r.gen.height(W, Z, xt),
              pt = new F().crossVectors(et, ft).add(new F(...this.v)),
              Bt = Ut - yt,
              le = 0,
              Lt = 0,
              qt = 0;
            if (Bt > 0) {
              (b++, it.gear && N++);
              let Xt = pt.x * W + pt.y * Z + pt.z * xt,
                $t = it.gear ? G : G * 2,
                Zt = Math.max(0, $t * Math.min(Bt, 1.5) - D * Xt),
                ge = pt.x - W * Xt,
                Ie = pt.y - Z * Xt,
                V = pt.z - xt * Xt,
                nt = Math.hypot(ge, Ie, V),
                I = it.gear ? 1.1 : 0.7;
              if (((le = W * Zt), (Lt = Z * Zt), (qt = xt * Zt), nt > 1e-4)) {
                let ot = Math.min(I * Zt, ((i / Math.max(3, Y)) * nt) / t);
                ((le -= (ge / nt) * ot), (Lt -= (Ie / nt) * ot), (qt -= (V / nt) * ot));
              }
              if (Bt > 1.5) {
                let ot = ((Bt - 1.5) / Math.max(1, Y)) * 4;
                ((this.x[0] += W * ot), (this.x[1] += Z * ot), (this.x[2] += xt * ot));
              }
            } else if (r.P.ocean && yt < J) {
              let Xt = Math.min(J - yt, 3),
                $t = (((i * 9.81 * 1.3) / Y) * Xt) / 2;
              ((le = W * $t - ((pt.x * i) / Y) * 0.8),
                (Lt = Z * $t - ((pt.y * i) / Y) * 0.8),
                (qt = xt * $t - ((pt.z * i) / Y) * 0.8));
            }
            (le || Lt || qt) &&
              ((w[0] += le), (w[1] += Lt), (w[2] += qt), C.add(new F().crossVectors(ft, new F(le, Lt, qt))));
          }
        }
        this.landed = N > 0 || b > 2;
        for (let A = 0; A < 3; A++) S[A] += w[A] / i;
        if ((C.applyQuaternion(f), (P[0] += C.x), (P[1] += C.y), (P[2] += C.z), this.pulseActive)) {
          let A = new F(0, 0, -1).applyQuaternion(this.q),
            L = 6e4 * (this.pulseMul || 1) * this.pulseCharge * this.pulseCharge,
            G = Math.min(1, t * 1.2);
          ((this.v = this.v.map((D, et) => D + (A.getComponent(et) * L - D) * G)), (this.status = "PULSANTRIEB"));
        } else {
          for (let A = 0; A < 3; A++) this.v[A] += S[A] * t;
          this.status = this.landed ? "GELANDET" : o > 0.01 ? "ATMOSPH\xC4RENFLUG" : "RAUMFLUG";
        }
        ((this.w.x += (P[0] / this.inertia[0]) * t),
          (this.w.y += (P[1] / this.inertia[1]) * t),
          (this.w.z += (P[2] / this.inertia[2]) * t),
          b > 0 && this.w.multiplyScalar(Math.exp(-2 * t)),
          this.w.multiplyScalar(Math.exp(-(0.05 + o * 0.3) * t)));
        for (let A = 0; A < 3; A++) this.x[A] += this.v[A] * t;
        let z = this.w.length();
        if (z > 1e-6) {
          let A = new ye().setFromAxisAngle(Ei.copy(this.w).divideScalar(z), z * t);
          this.q.multiply(A).normalize();
        }
        (!c && this.landed && Math.hypot(...this.v) < 0.08 && z < 0.02
          ? ((this.sleepT += t), this.sleepT > 1.5 && ((this.sleeping = !0), (this.v = [0, 0, 0]), this.w.set(0, 0, 0)))
          : (this.sleepT = 0),
          (this.alt = a.alt),
          (this.planet = r),
          (this.rho = o),
          (this.vSpeed = this.v[0] * a.up[0] + this.v[1] * a.up[1] + this.v[2] * a.up[2]));
      }
      thrustToWeight() {
        let t = Math.hypot(...this.uni.gravity(this.x));
        return t > 0.05 ? this.axisThrust[2] / ((this.mass + this.fuel) * t) : 99;
      }
      worldToGrid(t) {
        let e = this.gridOrigin();
        return Ei.set(t[0] - e[0], t[1] - e[1], t[2] - e[2])
          .applyQuaternion(pl.copy(this.q).invert())
          .divideScalar(Wt)
          .clone();
      }
      raycast(t, e, i) {
        let s = this.worldToGrid(t),
          r = new F(...e).applyQuaternion(pl.copy(this.q).invert()),
          a = Math.round(s.x),
          o = Math.round(s.y),
          l = Math.round(s.z),
          c = [Math.sign(r.x), Math.sign(r.y), Math.sign(r.z)],
          u = [Math.abs(1 / r.x), Math.abs(1 / r.y), Math.abs(1 / r.z)],
          f = [s.x, s.y, s.z],
          h = [a, o, l],
          d = [0, 1, 2].map((p) => {
            let y = [r.x, r.y, r.z][p];
            return y ? (h[p] + (y > 0 ? 0.5 : -0.5) - f[p]) / y : 1 / 0;
          }),
          E = [0, 0, 0],
          v = 0,
          m = i / Wt;
        for (let p = 0; p < 64 && v <= m; p++) {
          if (this.blocks.has(`${a},${o},${l}`)) return { cell: [a, o, l], normal: E, t: v * Wt };
          let y = d[0] < d[1] ? (d[0] < d[2] ? 0 : 2) : d[1] < d[2] ? 1 : 2;
          ((v = d[y]),
            (d[y] += u[y]),
            y === 0 ? (a += c[0]) : y === 1 ? (o += c[1]) : (l += c[2]),
            (E = [0, 0, 0]),
            (E[y] = -c[y]));
        }
        return null;
      }
      setBlock(t, e) {
        let i = t.join(",");
        (e ? this.blocks.set(i, e) : this.blocks.delete(i), this.recalc(), (this.sleeping = !1), (this.sleepT = 0));
      }
    };
  var sg = new F(),
    rg = new ye(),
    wo = class {
      constructor(t) {
        ((this.uni = t),
          (this.x = [0, 0, 0]),
          (this.v = [0, 0, 0]),
          (this.fwd = new F(1, 0, 0)),
          (this.pitch = 0),
          (this.grounded = !1),
          (this.jet = 1),
          (this.swimming = !1),
          (this.eye = 1.68),
          (this.up = new F(0, 1, 0)));
      }
      spawn(t, e, i) {
        let s = Math.max(t.gen.height(...e), t.P.ocean ? 0 : -1e9),
          r = t.P.radius + s + 0.2;
        ((this.x = [t.pos[0] + e[0] * r, t.pos[1] + e[1] * r, t.pos[2] + e[2] * r]),
          (this.v = [0, 0, 0]),
          this.up.set(...e),
          this.fwd
            .set(...i)
            .addScaledVector(this.up, -this.up.dot(new F(...i)))
            .normalize(),
          (this.pitch = 0));
      }
      look(t, e) {
        (this.fwd.applyAxisAngle(this.up, -t * 0.0022).normalize(),
          (this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch - e * 0.0022))));
      }
      update(t, e, i) {
        let s = this.uni,
          r = s.nearest(this.x),
          a = s.local(r, this.x),
          o = this.up.set(...a.up);
        (this.fwd.addScaledVector(o, -this.fwd.dot(o)),
          this.fwd.lengthSq() < 1e-6 && this.fwd.set(1, 0, 0).addScaledVector(o, -o.x),
          this.fwd.normalize());
        let l = sg.crossVectors(this.fwd, o).normalize().clone(),
          c = s.gravity(this.x),
          u = Math.hypot(...c),
          f = (e.KeyW ? 1 : 0) - (e.KeyS ? 1 : 0),
          h = (e.KeyD ? 1 : 0) - (e.KeyA ? 1 : 0),
          d = e.ShiftLeft || e.ShiftRight,
          E = this.swimming ? 2.4 : d ? 11 : 5,
          v = new F().addScaledVector(this.fwd, f).addScaledVector(l, h);
        (v.lengthSq() > 1 && v.normalize(), v.multiplyScalar(E));
        let m = new F(...this.v),
          p = m.dot(o),
          y = m.clone().addScaledVector(o, -p),
          Q = this.grounded || this.swimming ? 12 : 1.6;
        y.lerp(v, 1 - Math.exp(-Q * t));
        let S = p;
        ((S -= u * t),
          e.Space &&
            (this.grounded
              ? (S = Math.max(S, 5.2))
              : this.swimming
                ? (S = Math.max(S, 1.5))
                : this.jet > 0 && ((S += (u + 6) * t), (this.jet = Math.max(0, this.jet - t * 0.22 * (this.jetDrain || 1))))),
          this.grounded && (this.jet = Math.min(1, this.jet + t * 0.5)),
          m.copy(y).addScaledVector(o, S));
        let M = s.airDensity(r, a.alt);
        (m.multiplyScalar(Math.exp(-M * 0.08 * t)), (this.v = [m.x, m.y, m.z]));
        for (let x = 0; x < 3; x++) this.x[x] += this.v[x] * t;
        let P = s.local(r, this.x);
        ((this.grounded = !1), (this.swimming = !1));
        let T = P.altTerrain;
        if (r.P.ocean && P.h < -1.3 && P.r < r.P.radius - 1.3) {
          this.swimming = !0;
          let b = r.P.radius - 1.35 - P.r,
            N = m.dot(o),
            w = Math.min(1, t * 3);
          (m.addScaledVector(o, (b * 2 - N) * w), (this.v = [m.x, m.y, m.z]));
        }
        if (T < 0) {
          for (let b = 0; b < 3; b++) this.x[b] -= P.up[b] * T;
          let x = m.dot(o);
          (x < 0 && m.addScaledVector(o, -x), (this.v = [m.x, m.y, m.z]), (this.grounded = !0));
        }
        (i && this.collideShip(i, o), (this.planet = r), (this.alt = P.alt));
      }
      collideShip(t, e) {
        if (Math.hypot(this.x[0] - t.x[0], this.x[1] - t.x[1], this.x[2] - t.x[2]) > t.bound + 4) return;
        let s = rg.copy(t.q).invert(),
          r = t.gridOrigin(),
          a = 0.38;
        for (let o of [0.4, 0.95, 1.5]) {
          let l = [this.x[0] + e.x * o, this.x[1] + e.y * o, this.x[2] + e.z * o],
            c = new F(l[0] - r[0], l[1] - r[1], l[2] - r[2]).applyQuaternion(s),
            u = Math.round(c.x / Wt),
            f = Math.round(c.y / Wt),
            h = Math.round(c.z / Wt);
          for (let d = -1; d <= 1; d++)
            for (let E = -1; E <= 1; E++)
              for (let v = -1; v <= 1; v++) {
                let m = u + d,
                  p = f + E,
                  y = h + v;
                if (!t.blocks.has(`${m},${p},${y}`)) continue;
                let Q = [m * Wt - Wt / 2, p * Wt - Wt / 2, y * Wt - Wt / 2],
                  S = Math.max(Q[0], Math.min(c.x, Q[0] + Wt)),
                  M = Math.max(Q[1], Math.min(c.y, Q[1] + Wt)),
                  P = Math.max(Q[2], Math.min(c.z, Q[2] + Wt)),
                  T = c.x - S,
                  x = c.y - M,
                  b = c.z - P,
                  N = Math.hypot(T, x, b);
                if (N >= a) continue;
                let w;
                if (N > 1e-5) ((w = a - N), (T /= N), (x /= N), (b /= N));
                else {
                  let L = [c.x - Q[0], Q[0] + Wt - c.x],
                    G = [c.y - Q[1], Q[1] + Wt - c.y],
                    D = [c.z - Q[2], Q[2] + Wt - c.z],
                    et = [
                      [L[0], -1, 0, 0],
                      [L[1], 1, 0, 0],
                      [G[0], 0, -1, 0],
                      [G[1], 0, 1, 0],
                      [D[0], 0, 0, -1],
                      [D[1], 0, 0, 1],
                    ].sort((J, Y) => J[0] - Y[0]);
                  ((w = et[0][0] + a), (T = et[0][1]), (x = et[0][2]), (b = et[0][3]));
                }
                let C = new F(T, x, b).applyQuaternion(t.q);
                for (let L = 0; L < 3; L++) this.x[L] += C.getComponent(L) * w;
                c.addScaledVector(new F(T, x, b), w);
                let z = new F(...this.v),
                  A = z.dot(C);
                (A < 0 && z.addScaledVector(C, -A), (this.v = [z.x, z.y, z.z]), C.dot(e) > 0.6 && (this.grounded = !0));
              }
        }
      }
      eyePos() {
        return [this.x[0] + this.up.x * this.eye, this.x[1] + this.up.y * this.eye, this.x[2] + this.up.z * this.eye];
      }
      camQuat(t) {
        let e = this.up,
          i = this.fwd,
          s = new F().crossVectors(i, e).normalize(),
          r = i.clone().applyAxisAngle(s, this.pitch),
          a = new Vt().lookAt(new F(), r, e);
        return t.setFromRotationMatrix(a);
      }
    };
  var Es = 8,
    qi = 6,
    Vu = 110;
  function ag() {
    let n = [],
      t = [];
    for (let r = 0; r < 5; r++) {
      let a = (r / 5) * Math.PI * 2 + r * 0.7,
        o = Math.cos(a * 1.7) * 0.12,
        l = Math.sin(a * 1.3) * 0.12,
        c = 0.04,
        u = 0.42 + (r % 3) * 0.12,
        f = 0.18 + (r % 2) * 0.1,
        h = Math.cos(a),
        d = Math.sin(a),
        E = -d * c,
        v = h * c,
        m = [o + h * f, u, l + d * f],
        p = [o + h * f * 0.35, u * 0.55, l + d * f * 0.35],
        y = [o - E, 0, l - v],
        Q = [o + E, 0, l + v],
        S = [p[0] - E * 0.7, p[1], p[2] - v * 0.7],
        M = [p[0] + E * 0.7, p[1], p[2] + v * 0.7];
      (n.push(...y, ...Q, ...M, ...y, ...M, ...S, ...S, ...M, ...m), t.push(0, 0, 0.55, 0.55, 0, 0, 0.55, 0.55, 1));
    }
    let i = new ve();
    (i.setAttribute("position", new ie(n, 3)), i.setAttribute("hgt", new ie(t, 1)), i.computeVertexNormals());
    let s = i.attributes.normal;
    for (let r = 0; r < s.count; r++) s.setXYZ(r, s.getX(r) * 0.35, 1, s.getZ(r) * 0.35);
    return ((s.needsUpdate = !0), i);
  }
  var Co = class {
    constructor(t) {
      ((this.cap = (2 * qi + 1) ** 2 * Vu),
        (this.mat = new ri({ roughness: 0.85, side: ai })),
        (this.mat.onBeforeCompile = (e) => {
          ((e.uniforms.uTime = oi.uTime),
            (e.vertexShader =
              `attribute float hgt; uniform float uTime; varying float vHgt;
` +
              e.vertexShader.replace(
                "#include <begin_vertex>",
                `#include <begin_vertex>
        vHgt = hgt;
        vec3 ip = instanceMatrix[3].xyz;
        vec4 wp0 = modelMatrix * vec4(ip, 1.0);
        float dist = length(wp0.xyz);
        float fade = 1.0 - smoothstep(${(qi * Es * 0.6).toFixed(1)}, ${(qi * Es * 0.95).toFixed(1)}, dist);
        transformed *= fade;
        float ph = dot(ip, vec3(0.13, 0.07, 0.11));
        float wind = sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.3) * 0.25;
        transformed.xz += vec2(wind, wind * 0.6) * hgt * hgt * 0.22;`,
              )),
            (e.fragmentShader =
              `varying float vHgt;
` +
              e.fragmentShader.replace(
                "#include <color_fragment>",
                `#include <color_fragment>
        diffuseColor.rgb *= mix(0.35, 1.25, vHgt);`,
              )));
        }),
        (this.mat.customProgramCacheKey = () => "grass"),
        (this.mesh = new vn(ag(), this.mat, this.cap)),
        (this.mesh.instanceColor = new Pi(new Float32Array(this.cap * 3), 3)),
        (this.mesh.count = 0),
        (this.mesh.frustumCulled = !1),
        (this.mesh.receiveShadow = !0),
        t.add(this.mesh),
        (this.cells = new Map()),
        (this.center = null),
        (this.planet = null),
        (this.anchor = [0, 0, 0]));
    }
    update(t, e, i) {
      if (!i || e.P.trees <= 0) {
        this.mesh.visible = !1;
        return;
      }
      ((this.mesh.visible = !0), this.planet !== e && ((this.planet = e), this.cells.clear(), (this.center = null)));
      let s = [t[0] - e.pos[0], t[1] - e.pos[1], t[2] - e.pos[2]],
        r = Math.hypot(...s),
        a = s.map((Q) => Q / r),
        o = Math.abs(a[0]),
        l = Math.abs(a[1]),
        c = Math.abs(a[2]),
        u = o >= l && o >= c ? (a[0] > 0 ? 0 : 1) : l >= c ? (a[1] > 0 ? 2 : 3) : a[2] > 0 ? 4 : 5,
        f = e.P.radius,
        h = (Q) => {
          let S = [Math.abs(Q[0]), Math.abs(Q[1]), Math.abs(Q[2])],
            M = u >> 1,
            P = 1 / S[M],
            T = [Q[0] * P, Q[1] * P, Q[2] * P],
            x = M === 0 ? [T[1], T[2]] : M === 1 ? [T[2], T[0]] : [T[0], T[1]];
          return [x[0] * f, x[1] * f];
        },
        [d, E] = h(a),
        v = Math.floor(d / Es),
        m = Math.floor(E / Es),
        p = u + ":" + v + ":" + m;
      p !== this.center && ((this.center = p), this.rebuild(e, u, v, m));
      let y = this.anchor;
      this.mesh.position.set(y[0] + e.pos[0] - t[0], y[1] + e.pos[1] - t[1], y[2] + e.pos[2] - t[2]);
    }
    cell(t, e, i, s) {
      let r = e + ":" + i + ":" + s,
        a = this.cells.get(r);
      if (a) return a;
      let o = t.P.radius,
        l = t.gen,
        c = e >> 1,
        u = e & 1 ? -1 : 1,
        f = [],
        h = [],
        d = (Math.imul(i, 73856093) ^ Math.imul(s, 19349663) ^ Math.imul(e, 83492791)) >>> 0,
        E = () => ((d = (Math.imul(d, 1664525) + 1013904223) >>> 0), d / 4294967296),
        v = {};
      for (let m = 0; m < Vu; m++) {
        let p = ((i + E()) * Es) / o,
          y = ((s + E()) * Es) / o,
          Q = c === 0 ? [u, p, y] : c === 1 ? [y, u, p] : [p, y, u],
          S = Math.hypot(...Q),
          M = [Q[0] / S, Q[1] / S, Q[2] / S],
          P = l.height(M[0], M[1], M[2]);
        if (t.P.ocean && P < 2.5) {
          (E(), E());
          continue;
        }
        if (
          (l.colorize(M[0], M[1], M[2], P, 0.95, v),
          v.g / (v.r + v.b * 0.5 + 0.001) < 1.05 || v.rocks > 0.5 || E() > 0.35 + v.moist * 0.8)
        ) {
          E();
          continue;
        }
        let x = 0.55 + E() * 0.7;
        (f.push(M[0] * (o + P - 0.05), M[1] * (o + P - 0.05), M[2] * (o + P - 0.05), x, E() * 6.283, ...M),
          h.push(v.r * 1.9, v.g * 1.9, v.b * 1.6));
      }
      if (((a = { pts: f, cols: h }), this.cells.set(r, a), this.cells.size > 600)) {
        let m = this.cells.keys().next().value;
        this.cells.delete(m);
      }
      return a;
    }
    rebuild(t, e, i, s) {
      let r = [];
      for (let p = -qi; p <= qi; p++)
        for (let y = -qi; y <= qi; y++) y * y + p * p <= qi * qi + 1 && r.push(this.cell(t, e, i + y, s + p));
      let a = r.find((p) => p.pts.length);
      if (!a) {
        this.mesh.count = 0;
        return;
      }
      this.anchor = [a.pts[0], a.pts[1], a.pts[2]];
      let o = this.mesh.instanceMatrix.array,
        l = this.mesh.instanceColor.array,
        c = 0,
        u = new ye(),
        f = new Vt(),
        h = new F(0, 1, 0),
        d = new F(),
        E = new F(),
        v = new F(),
        m = new ye();
      for (let p of r)
        for (let y = 0, Q = 0; y < p.pts.length && c < this.cap; y += 8, Q += 3) {
          (d.set(p.pts[y + 5], p.pts[y + 6], p.pts[y + 7]),
            u.setFromUnitVectors(h, d).multiply(m.setFromAxisAngle(h, p.pts[y + 4])));
          let S = p.pts[y + 3];
          (f.compose(
            v.set(p.pts[y] - this.anchor[0], p.pts[y + 1] - this.anchor[1], p.pts[y + 2] - this.anchor[2]),
            u,
            E.set(S, S, S),
          ),
            f.toArray(o, c * 16),
            (l[c * 3] = p.cols[Q]),
            (l[c * 3 + 1] = p.cols[Q + 1]),
            (l[c * 3 + 2] = p.cols[Q + 2]),
            c++);
        }
      ((this.mesh.count = c), (this.mesh.instanceMatrix.needsUpdate = !0), (this.mesh.instanceColor.needsUpdate = !0));
    }
  };
  // =====================================================================
  // Expedition: Relikte auf allen Welten, Navigation, Aufgaben, Upgrades
  // (lesbar gehalten; three.js-Klassen heißen im Bundle: F=Vector3, ye=Quaternion,
  //  Tt=Color, Ee=Mesh, ke=Group, Se=ShaderMaterial, Zi=Cylinder, Bs=Icosahedron, ri=MeshStandardMaterial)
  // =====================================================================
  var EXP_KEY = "kosmos.expedition.v1";
  var RELIC_PLAN = { Aurora: 4, Selene: 3, Ferrox: 3, Glacia: 3 };
  var RELIC_TOTAL = Object.values(RELIC_PLAN).reduce((a, b) => a + b, 0);
  var UPGRADES = [
    { at: 1, id: "jet", name: "Jetpack-Zellen", desc: "Das Jetpack hält 50 % länger." },
    { at: 3, id: "fuel", name: "Tankverdichter", desc: "+30 % Treibstoff, Tank füllt sich am Boden schneller." },
    { at: 5, id: "scan", name: "Tiefenscanner", desc: "Zeigt alle Relikte einer Welt, egal wie weit." },
    { at: 8, id: "pulse", name: "Pulsfokus", desc: "Pulsantrieb 30 % schneller." },
    { at: RELIC_TOTAL, id: "gold", name: "Goldene Hülle", desc: "Dein Schiff glänzt golden. Expedition abgeschlossen." },
  ];
  var STEPS = [
    { id: "relic1", text: "Folge dem Lichtstrahl und birg das erste Relikt", hint: "zu Fuß · <kbd>Shift</kbd> rennen · <kbd>Leer</kbd> Jetpack" },
    { id: "board", text: "Zurück zum Schiff und einsteigen", hint: "<kbd>F</kbd> in der Nähe des Cockpits" },
    { id: "fly", text: "Starte und flieg zum nächsten Signal", hint: "<kbd>Leer</kbd> steigen · <kbd>W</kbd> Schub · Maus lenkt" },
    { id: "orbit", text: "Verlasse die Atmosphäre: steig über 20 km", hint: "Nase hoch, <kbd>Shift</kbd> Boost" },
    { id: "pulse", text: "Kurs Selene: Nase auf den Marker, Pulsantrieb halten", hint: "<kbd>J</kbd> halten · loslassen bremst auf 800 m/s" },
    { id: "land", text: "Lande auf Selene und birg ein Relikt", hint: "<kbd>Z</kbd> Dämpfer an lassen · sanft aufsetzen" },
    { id: "all", text: "Birg alle Relikte im System", hint: "<kbd>M</kbd> Karte · <kbd>T</kbd> Ziel wechseln" },
    { id: "done", text: "Expedition abgeschlossen", hint: "Danke fürs Spielen · <kbd>M</kbd> Karte" },
  ];
  function expRng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function expLoad() {
    try {
      let s = JSON.parse(localStorage.getItem(EXP_KEY) || "{}");
      return { found: s.found || [], visited: s.visited || ["Aurora"], step: s.step || 0, time: s.time || 0, sound: s.sound !== !1 };
    } catch (n) {
      return { found: [], visited: ["Aurora"], step: 0, time: 0, sound: !0 };
    }
  }
  var BEAM_VS = `
    varying float vH; varying vec3 vN; varying vec3 vV;
    void main(){
      vH = uv.y;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vV = mv.xyz; vN = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * mv;
    }`;
  // Wird NACH dem Atmosphären-Pass in den HDR-Puffer addiert (sonst verschluckt der Himmel den Strahl).
  // Verdeckung durch Gelände: eigener Tiefentest gegen die Szenentiefe (alle drei Tiefenmodi des Renderers).
  var BEAM_FS = `
    precision highp float;
    uniform vec3 uColor; uniform float uTime; uniform float uAlpha;
    uniform sampler2D tDepth; uniform mat4 uProjInv; uniform int uDepthMode; uniform float uLogFar; uniform vec2 uRes;
    varying float vH; varying vec3 vN; varying vec3 vV;
    void main(){
      vec2 uv = gl_FragCoord.xy / uRes;
      float d = texture2D(tDepth, uv).x;
      float dist = length(vV);
      float tScene = 1e30;
      if (uDepthMode == 1) {
        if (d > 0.0) { vec4 vp = uProjInv * vec4(uv * 2.0 - 1.0, d, 1.0); tScene = length(vp.xyz / vp.w); }
      } else if (uDepthMode == 0) {
        if (d < 1.0) { float w = exp2(d * uLogFar) - 1.0; tScene = w / max(-vV.z / dist, 1e-4); }
      } else {
        if (d < 1.0) { vec4 vp = uProjInv * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); tScene = length(vp.xyz / vp.w); }
      }
      if (dist > tScene * 1.002 + 0.5) discard;
      float facing = abs(dot(normalize(vN), normalize(-vV)));
      float core = pow(facing, 4.0);
      float fall = pow(1.0 - vH, 1.4);
      float pulse = 0.7 + 0.3 * sin(uTime * 2.2 - vH * 60.0);
      float nearFade = smoothstep(12.0, 240.0, dist);
      float a = core * fall * pulse * uAlpha * nearFade;
      gl_FragColor = vec4(uColor * a, 1.0);
    }`;

  // ---------- Klang: kleine Web-Audio-Engine ohne Samples ----------
  function createSound() {
    let ctx = null, master, sfx, amb, noise, wind, windF, windG, thr, thrF, thrG, rumble, rumbleG, jet, jetG, pulseO, pulseG, padBus, musicT = 0, enabled = !0, stepT = 0;
    function init() {
      if (ctx) { ctx.state === "suspended" && ctx.resume().catch(() => {}); return; }
      let AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try { ctx = new AC(); } catch (n) { ctx = null; return; }
      master = ctx.createGain(); master.gain.value = enabled ? 0.9 : 0;
      let comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3;
      master.connect(comp); comp.connect(ctx.destination);
      sfx = ctx.createGain(); sfx.gain.value = 1; sfx.connect(master);
      amb = ctx.createGain(); amb.gain.value = 1; amb.connect(master);
      // Rauschen (braun + weiß gemischt), 2 s Schleife
      let len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0), last = 0;
      for (let i = 0; i < len; i++) { let w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.2 + w * 0.12; }
      noise = buf;
      let loop = (freq, type, q) => {
        let s = ctx.createBufferSource(); s.buffer = noise; s.loop = !0; s.playbackRate.value = 0.9 + Math.random() * 0.2;
        let f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
        let g = ctx.createGain(); g.gain.value = 0;
        s.connect(f); f.connect(g); g.connect(amb); s.start();
        return [f, g];
      };
      [windF, windG] = loop(500, "bandpass", 0.7);
      [thrF, thrG] = loop(180, "lowpass", 0.8);
      [, jetG] = loop(2400, "highpass", 0.5);
      rumble = ctx.createOscillator(); rumble.type = "sine"; rumble.frequency.value = 42;
      rumbleG = ctx.createGain(); rumbleG.gain.value = 0; rumble.connect(rumbleG); rumbleG.connect(amb); rumble.start();
      pulseO = ctx.createOscillator(); pulseO.type = "sawtooth"; pulseO.frequency.value = 60;
      let pf = ctx.createBiquadFilter(); pf.type = "lowpass"; pf.frequency.value = 900;
      pulseG = ctx.createGain(); pulseG.gain.value = 0; pulseO.connect(pf); pf.connect(pulseG); pulseG.connect(amb); pulseO.start();
      // Hall für die Musik
      let ir = ctx.createBuffer(2, ctx.sampleRate * 3.5, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { let x = ir.getChannelData(c); for (let i = 0; i < x.length; i++) x[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / x.length, 2.6); }
      let rev = ctx.createConvolver(); rev.buffer = ir;
      padBus = ctx.createGain(); padBus.gain.value = 0.55;
      let dry = ctx.createGain(); dry.gain.value = 0.35;
      padBus.connect(rev); padBus.connect(dry); rev.connect(master); dry.connect(master);
    }
    let set = (g, v, tc = 0.12) => g && g.gain.setTargetAtTime(v, ctx.currentTime, tc);
    function tone(f, dur, type = "sine", vol = 0.12, delay = 0, dest = sfx, f1) {
      if (!ctx || !enabled) return;
      let t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); f1 && o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(1e-4, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.04, dur * 0.3)); g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
      o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
    }
    function burst(freq, dur, vol, type = "bandpass", q = 1) {
      if (!ctx || !enabled) return;
      let t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noise;
      let f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      let g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
      s.connect(f); f.connect(g); g.connect(sfx); s.start(t, Math.random()); s.stop(t + dur + 0.05);
    }
    // ruhige Akkordflächen (A-Dorisch), alle ~9 s ein neuer Akkord
    let CHORDS = [[57, 64, 69, 72], [55, 62, 67, 71], [53, 60, 64, 69], [52, 59, 64, 67], [50, 57, 62, 66]];
    let mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
    function music(dt, space) {
      if (!ctx || !enabled) return;
      musicT -= dt;
      if (musicT > 0) return;
      musicT = 8 + Math.random() * 4;
      let ch = CHORDS[(Math.random() * CHORDS.length) | 0], t = ctx.currentTime;
      ch.forEach((m, k) => {
        let o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine"; o2.type = "triangle";
        o.frequency.value = mtof(m - (space ? 12 : 0)); o2.frequency.value = mtof(m) * 1.004;
        let v = (k === 0 ? 0.05 : 0.028) * (space ? 1.2 : 1);
        g.gain.setValueAtTime(1e-4, t); g.gain.exponentialRampToValueAtTime(v, t + 3); g.gain.setValueAtTime(v, t + 6); g.gain.exponentialRampToValueAtTime(1e-4, t + 11);
        o.connect(g); o2.connect(g); g.connect(padBus); o.start(t); o2.start(t); o.stop(t + 11.2); o2.stop(t + 11.2);
      });
      // seltenes Glitzern
      if (Math.random() < 0.6) [0, 1, 2].forEach((k) => tone(mtof(ch[(k + 1) % 4] + 12), 2.2, "sine", 0.018, 2 + k * 0.45, padBus));
    }
    return {
      init,
      get on() { return enabled; },
      toggle(v) { enabled = v === void 0 ? !enabled : v; ctx && master.gain.setTargetAtTime(enabled ? 0.9 : 0, ctx.currentTime, 0.1); return enabled; },
      update(dt, s) {
        if (!ctx) return;
        // Wind: Luftdichte × Tempo, am Boden eine leise Brise
        let w = s.rho > 0 ? Math.min(0.5, s.rho * (0.03 + s.speed / 260)) : 0;
        set(windG, w, 0.25); windF.frequency.setTargetAtTime(300 + Math.min(2200, s.speed * 6), ctx.currentTime, 0.3);
        set(thrG, s.thrust * 0.5, 0.08); thrF.frequency.setTargetAtTime(140 + s.thrust * 380, ctx.currentTime, 0.1);
        set(rumbleG, s.thrust * 0.22, 0.1);
        set(jetG, s.jet ? 0.07 : 0, 0.05);
        set(pulseG, s.pulse * 0.07, 0.2); pulseO.frequency.setTargetAtTime(55 + s.pulse * 180, ctx.currentTime, 0.3);
        if (s.walking && s.speed > 1.5) {
          stepT -= dt * s.speed;
          if (stepT <= 0) { stepT = 2.4; burst(s.soft ? 700 : 420, 0.07, 0.14, "lowpass", 0.8); }
        }
        music(dt, s.space);
      },
      relic() { [0, 4, 7, 12, 16].forEach((st, k) => tone(523.25 * Math.pow(2, st / 12), 1.4, "triangle", 0.09, k * 0.09)); tone(1046.5, 2.5, "sine", 0.05, 0.5, padBus); },
      step() { [0, 7, 12].forEach((st, k) => tone(659.25 * Math.pow(2, st / 12), 0.5, "sine", 0.07, k * 0.07)); },
      blip() { tone(880, 0.12, "sine", 0.05); },
      thud(v) { burst(160, 0.4, Math.min(0.5, v * 0.05), "lowpass", 0.7); },
      upgrade() { [0, 3, 7, 10, 14, 19].forEach((st, k) => tone(392 * Math.pow(2, st / 12), 1.8, "sine", 0.06, k * 0.11)); },
    };
  }

  function createExpedition(ctx) {
    let { uni, ship, player, camera, hull, toast, renderer } = ctx,
      fxScene = (renderer.fx = new As()),
      fxGroups = new Map(),
      fxGroup = (pl) => {
        let g = fxGroups.get(pl);
        return g || ((g = new ke()), fxScene.add(g), fxGroups.set(pl, g)), g;
      },
      beamU = {
        tDepth: { value: renderer.sceneRT.depthTexture },
        uProjInv: { value: camera.projectionMatrixInverse },
        uDepthMode: { value: renderer.depthMode },
        uLogFar: { value: Math.log2(camera.far + 1) },
        uRes: { value: renderer.resVec || (renderer.resVec = new Ct(1, 1)) },
      },
      save = expLoad(),
      relics = [],
      sound = createSound(),
      target = null,
      manualTarget = !1,
      lastMode = "walk",
      wasLanded = !0,
      lastVS = 0,
      tmp = new F(),
      q0 = new ye(),
      beamGeo = new Zi(1, 1, 1, 20, 1, !0),
      crystalGeo = new Bs(1, 0),
      baseGeo = new Zi(1.5, 2, 0.7, 6, 1),
      haloGeo = new Zi(2.6, 2.6, 0.12, 32, 1, !0),
      hud = {
        nav: document.getElementById("hNav"),
        obj: document.getElementById("hObj"),
      },
      g2 = hud.nav.getContext("2d"),
      stepShown = -1,
      refuelHint = !1;
    sound.toggle(save.sound);
    ship.fuelMul = 1;
    let persist = () => {
      try { localStorage.setItem(EXP_KEY, JSON.stringify(save)); } catch (n) {}
    };
    let has = (id) => UPGRADES.some((u) => u.id === id && save.found.length >= u.at);
    function applyUpgrades(announce) {
      player.jetDrain = has("jet") ? 0.66 : 1;
      let fm = has("fuel") ? 1.3 : 1;
      if (ship.fuelMul !== fm) { ship.fuelMul = fm; ship.recalc(); }
      ship.pulseMul = has("pulse") ? 1.3 : 1;
      let gold = has("gold");
      hull.Accent.color.setRGB(...(gold ? [1, 0.72, 0.18] : [0.9, 0.38, 0.06]));
      hull.Accent.metalness = gold ? 0.9 : 0.2;
      hull.Accent.roughness = gold ? 0.25 : 0.45;
      if (announce) {
        let u = UPGRADES.find((x) => x.at === save.found.length);
        u && setTimeout(() => { toast("Upgrade: " + u.name + " · " + u.desc, 5200); sound.upgrade(); }, 1600);
      }
    }
    // ---------- Fundorte bestimmen (deterministisch) ----------
    function slopeOK(pl, u, h) {
      let t1 = Math.abs(u[2]) < 0.9 ? [-u[1], u[0], 0] : [0, -u[2], u[1]],
        l = Math.hypot(...t1);
      t1 = t1.map((x) => x / l);
      let t2 = [u[1] * t1[2] - u[2] * t1[1], u[2] * t1[0] - u[0] * t1[2], u[0] * t1[1] - u[1] * t1[0]],
        e = 10 / pl.P.radius,
        hA = pl.gen.height(u[0] + t1[0] * e, u[1] + t1[1] * e, u[2] + t1[2] * e),
        hB = pl.gen.height(u[0] + t2[0] * e, u[1] + t2[1] * e, u[2] + t2[2] * e);
      return Math.abs(hA - h) < 3.2 && Math.abs(hB - h) < 3.2;
    }
    function sites(pl, n, seed, near) {
      let rnd = expRng(seed), out = [], P = pl.P;
      for (let tries = 0; out.length < n && tries < 6000; tries++) {
        let u;
        if (near && out.length === 0) {
          // erstes Relikt auf Aurora: 350–650 m vom Landeplatz
          let t1 = Math.abs(near[2]) < 0.9 ? [-near[1], near[0], 0] : [0, -near[2], near[1]],
            l = Math.hypot(...t1);
          t1 = t1.map((x) => x / l);
          let t2 = [near[1] * t1[2] - near[2] * t1[1], near[2] * t1[0] - near[0] * t1[2], near[0] * t1[1] - near[1] * t1[0]],
            ang = rnd() * Math.PI * 2,
            dist = (350 + rnd() * 300) / P.radius;
          u = near.map((x, k) => x + (t1[k] * Math.cos(ang) + t2[k] * Math.sin(ang)) * dist);
        } else {
          let z = rnd() * 2 - 1, a = rnd() * Math.PI * 2, r = Math.sqrt(1 - z * z);
          u = [Math.cos(a) * r, z, Math.sin(a) * r];
        }
        let L = Math.hypot(...u);
        u = u.map((x) => x / L);
        let h = pl.gen.height(u[0], u[1], u[2]);
        if (P.ocean && h < 18) continue;
        if (!P.ocean && h < -P.relief * 0.35) continue;
        if (out.some((o) => o.u[0] * u[0] + o.u[1] * u[1] + o.u[2] * u[2] > Math.cos(near && out.length === 0 ? 0 : 0.42))) continue;
        if (!slopeOK(pl, u, h)) continue;
        out.push({ u, h });
      }
      return out;
    }
    function buildRelic(pl, k, site) {
      let id = pl.P.name + "-" + k,
        R = pl.P.radius + site.h,
        grp = new ke(),
        cMat = new ri({ color: 856096, emissive: new Tt(0.3, 0.85, 1), emissiveIntensity: 7, roughness: 0.2, metalness: 0.1, flatShading: !0 }),
        crystal = new Ee(crystalGeo, cMat),
        base = new Ee(baseGeo, hull.HullDark),
        halo = new Ee(haloGeo, new pi({ color: new Tt(0.4, 0.9, 1).multiplyScalar(6), side: ai, transparent: !0, opacity: 0.8 })),
        beamMat = new Se({
          vertexShader: BEAM_VS,
          fragmentShader: BEAM_FS,
          uniforms: { uColor: { value: new Tt(2.6, 9, 20) }, uTime: oi.uTime, uAlpha: { value: 1 }, ...beamU },
          transparent: !0,
          depthTest: !1,
          depthWrite: !1,
          blending: 2,
          side: ai,
        }),
        beam = new Ee(beamGeo, beamMat);
      crystal.scale.set(0.9, 1.9, 0.9); crystal.position.y = 3; crystal.castShadow = !0;
      base.position.y = 0.1; base.castShadow = base.receiveShadow = !0;
      halo.position.y = 3;
      beam.scale.set(4.5, 1600, 4.5); beam.position.y = 800; beam.frustumCulled = !1; beam.renderOrder = 5;
      grp.add(base, crystal, halo);
      grp.position.set(site.u[0] * R, site.u[1] * R, site.u[2] * R);
      grp.quaternion.setFromUnitVectors(tmp.set(0, 1, 0), new F(...site.u));
      pl.group.add(grp);
      let bg = new ke();
      bg.position.copy(grp.position); bg.quaternion.copy(grp.quaternion); bg.add(beam);
      fxGroup(pl).add(bg);
      let rel = { id, planet: pl, u: site.u, h: site.h, R, grp, crystal, cMat, halo, beam, beamMat, found: save.found.includes(id) };
      rel.world = () => [pl.pos[0] + site.u[0] * (R + 3), pl.pos[1] + site.u[1] * (R + 3), pl.pos[2] + site.u[2] * (R + 3)];
      styleRelic(rel);
      relics.push(rel);
    }
    function styleRelic(r) {
      r.beam.visible = !r.found;
      r.halo.visible = !r.found;
      r.cMat.emissive.setRGB(...(r.found ? [1, 0.62, 0.15] : [0.3, 0.85, 1]));
      r.cMat.emissiveIntensity = r.found ? 1.6 : 7;
    }
    function init(spawnDir) {
      let seeds = { Aurora: 101, Selene: 202, Ferrox: 303, Glacia: 404 };
      for (let pl of uni.planets) {
        let n = RELIC_PLAN[pl.P.name] || 0;
        if (!n) continue;
        sites(pl, n, seeds[pl.P.name] || 7, pl.P.name === "Aurora" ? spawnDir : null).forEach((s, k) => buildRelic(pl, k, s));
      }
      applyUpgrades(!1);
      syncStep();
    }
    // ---------- Aufgaben ----------
    let foundCount = () => save.found.length,
      foundOn = (name) => save.found.filter((id) => id.startsWith(name + "-")).length;
    function stepDone(i, st) {
      switch (STEPS[i].id) {
        case "relic1": return foundCount() >= 1;
        case "board": return st.mode === "pilot" || foundCount() >= 2;
        case "fly": return foundCount() >= 2 || foundOn("Selene") > 0;
        case "orbit": return (st.mode === "pilot" && st.alt > 2e4 && st.planet.P.name === "Aurora") || st.planet.P.name !== "Aurora" || foundOn("Selene") > 0;
        case "pulse": return (st.planet.P.name === "Selene" && st.alt < 2e5) || foundOn("Selene") > 0;
        case "land": return foundOn("Selene") > 0;
        case "all": return foundCount() >= RELIC_TOTAL;
        default: return !1;
      }
    }
    function syncStep(st) {
      if (!st) return;
      let changed = !1;
      while (save.step < STEPS.length - 1 && stepDone(save.step, st)) { save.step++; changed = !0; }
      if (changed) { persist(); sound.step(); manualTarget = !1; }
    }
    function autoTarget(st) {
      let id = STEPS[Math.min(save.step, STEPS.length - 1)].id;
      if (id === "board") return { kind: "ship" };
      if (id === "orbit") return null;
      if (id === "pulse") return { kind: "planet", pl: uni.byName("Selene") };
      let pl = st.planet, best = null, bd = 1e30, here = st.pos;
      for (let r of relics) {
        if (r.found) continue;
        if (id !== "all" && r.planet !== pl) continue;
        let w = r.world(), dd = Math.hypot(w[0] - here[0], w[1] - here[1], w[2] - here[2]) + (r.planet === pl ? 0 : 1e9);
        dd < bd && ((bd = dd), (best = r));
      }
      if (best && best.planet === pl) return { kind: "relic", r: best };
      // nichts mehr hier → nächste Welt mit offenen Relikten
      let open = uni.planets.filter((p) => relics.some((r) => r.planet === p && !r.found) && p !== pl);
      open.sort((a, b) => Math.hypot(...a.pos.map((x, k) => x - here[k])) - Math.hypot(...b.pos.map((x, k) => x - here[k])));
      return open[0] ? { kind: "planet", pl: open[0] } : null;
    }
    function cycleTarget(st) {
      let list = [];
      for (let r of relics) !r.found && r.planet === st.planet && list.push({ kind: "relic", r });
      list.push({ kind: "ship" });
      for (let p of uni.planets) p !== st.planet && list.push({ kind: "planet", pl: p });
      let key = (t) => t && (t.kind === "relic" ? t.r.id : t.kind === "planet" ? t.pl.P.name : "ship"),
        k = list.findIndex((t) => key(t) === key(target));
      target = list[(k + 1) % list.length];
      manualTarget = !0;
      sound.blip();
      toast("Ziel: " + targetName(target));
    }
    function targetName(t) {
      return !t ? "–" : t.kind === "relic" ? "Relikt · " + t.r.planet.P.name : t.kind === "planet" ? t.pl.P.name : "Dein Schiff";
    }
    function targetPos(t, st) {
      if (!t) return null;
      if (t.kind === "relic") return t.r.world();
      if (t.kind === "ship") return ship.x;
      // Planet: Punkt auf der Oberfläche in Richtung des Betrachters
      let p = t.pl.pos, d = st.pos.map((x, k) => x - p[k]), L = Math.hypot(...d) || 1;
      return p.map((x, k) => x + (d[k] / L) * t.pl.P.radius);
    }
    // ---------- Einsammeln ----------
    function collect(r) {
      r.found = !0;
      save.found.push(r.id);
      save.visited.includes(r.planet.P.name) || save.visited.push(r.planet.P.name);
      styleRelic(r);
      persist();
      sound.relic();
      let n = foundCount();
      toast(n >= RELIC_TOTAL ? "Alle " + RELIC_TOTAL + " Relikte geborgen!" : "Relikt geborgen · " + n + "/" + RELIC_TOTAL, 3600);
      ship.fuel = ship.fuelCap;
      applyUpgrades(!0);
      manualTarget = !1;
    }
    // ---------- HUD-Marker ----------
    let dpr = 1;
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      hud.nav.width = innerWidth * dpr; hud.nav.height = innerHeight * dpr;
    }
    resize();
    addEventListener("resize", resize);
    let fmtD = (m) => (m >= 1e6 ? (m / 1e6).toFixed(m >= 1e7 ? 0 : 1) + " Mm" : m >= 1e4 ? (m / 1e3).toFixed(0) + " km" : m >= 1e3 ? (m / 1e3).toFixed(1) + " km" : Math.round(m) + " m");
    let qi2 = new ye();
    function project(pos, camPos) {
      tmp.set(pos[0] - camPos[0], pos[1] - camPos[1], pos[2] - camPos[2]);
      let dist = tmp.length();
      tmp.applyQuaternion(qi2.copy(camera.quaternion).invert());
      let behind = tmp.z >= 0, f = 1 / Math.tan((camera.fov * Math.PI) / 360), z = Math.max(1e-6, Math.abs(tmp.z));
      let x = ((tmp.x / z) * f) / camera.aspect, y = (tmp.y / z) * f;
      if (behind) { x = -x; y = -y; }
      return { x, y, behind, dist };
    }
    function marker(pos, camPos, label, color, primary, eta) {
      let W = innerWidth, H = innerHeight, pr = project(pos, camPos), sx = (pr.x * 0.5 + 0.5) * W, sy = (-pr.y * 0.5 + 0.5) * H;
      let pad = 46, off = pr.behind || sx < pad || sx > W - pad || sy < pad || sy > H - pad;
      if (off) {
        // an den Rand klemmen, Pfeil zeigt die Richtung
        let dx = sx - W / 2, dy = sy - H / 2;
        if (pr.behind && Math.abs(dx) + Math.abs(dy) < 1) dy = 1;
        let s = Math.min((W / 2 - pad) / Math.max(Math.abs(dx), 1e-3), (H / 2 - pad) / Math.max(Math.abs(dy), 1e-3));
        sx = W / 2 + dx * s; sy = H / 2 + dy * s;
      }
      let g = g2, r = primary ? 9 : 6;
      g.save();
      g.translate(sx * dpr, sy * dpr); g.scale(dpr, dpr);
      g.strokeStyle = color; g.fillStyle = color; g.lineWidth = primary ? 2 : 1.4;
      g.shadowColor = "rgba(0,0,0,.6)"; g.shadowBlur = 4;
      if (off) {
        let a = Math.atan2(sy - H / 2, sx - W / 2);
        g.rotate(a); g.beginPath(); g.moveTo(r + 6, 0); g.lineTo(-r * 0.6, -r * 0.9); g.lineTo(-r * 0.6, r * 0.9); g.closePath(); g.fill(); g.rotate(-a);
      } else {
        g.beginPath(); g.moveTo(0, -r); g.lineTo(r, 0); g.lineTo(0, r); g.lineTo(-r, 0); g.closePath(); g.stroke();
        if (primary) { g.globalAlpha = 0.25; g.fill(); g.globalAlpha = 1; }
      }
      g.font = (primary ? "600 12px " : "11px ") + "ui-monospace, SF Mono, Menlo, monospace";
      g.textAlign = off ? (sx > W / 2 ? "right" : "left") : "center";
      let tx = off ? (sx > W / 2 ? -16 : 16) : 0, ty = off ? 4 : r + 15;
      g.fillText(label + " · " + fmtD(pr.dist) + (eta ? " · " + eta : ""), tx, ty);
      g.restore();
    }
    function drawNav(st) {
      let W = hud.nav.width, H = hud.nav.height;
      g2.clearRect(0, 0, W, H);
      if (st.menu) return;
      let cam = st.cam, scan = has("scan");
      // Relikte in Reichweite
      for (let r of relics) {
        if (r.found || (target && target.kind === "relic" && target.r === r)) continue;
        if (r.planet !== st.planet) continue;
        let w = r.world(), dd = Math.hypot(w[0] - cam[0], w[1] - cam[1], w[2] - cam[2]);
        if (dd > (scan ? 1e9 : 2.5e4)) continue;
        marker(w, cam, "Relikt", "rgba(127,208,255,.75)", !1);
      }
      // Planeten, sobald man die Atmosphäre verlassen hat
      if (st.alt > 15e3) for (let p of uni.planets) {
        if (target && target.kind === "planet" && target.pl === p) continue;
        if (p === st.planet && st.alt < p.P.radius * 2) continue;
        let n = relics.filter((r) => r.planet === p), f = n.filter((r) => r.found).length;
        marker(targetPos({ kind: "planet", pl: p }, st), cam, p.P.name + (n.length ? " " + f + "/" + n.length : ""), "rgba(232,238,245,.7)", !1);
      }
      // Schiff, wenn man zu Fuß weiter weg ist
      if (st.mode === "walk" && !(target && target.kind === "ship")) {
        let dd = Math.hypot(ship.x[0] - cam[0], ship.x[1] - cam[1], ship.x[2] - cam[2]);
        dd > 25 && dd < 2e5 && marker(ship.x, cam, "Schiff", "rgba(255,179,71,.8)", !1);
      }
      // aktuelles Ziel
      let tp = targetPos(target, st);
      if (tp) {
        let v = st.vel, d = tp.map((x, k) => x - st.pos[k]), L = Math.hypot(...d) || 1,
          closing = (v[0] * d[0] + v[1] * d[1] + v[2] * d[2]) / L,
          eta = closing > 2 && L > 60 ? fmtT(L / closing) : "";
        let blocked = target.kind === "planet" && occluded(st.pos, tp, target.pl);
        marker(tp, cam, targetName(target) + (blocked ? " · verdeckt: erst um den Planeten" : ""), target.kind === "ship" ? "#ffb347" : blocked ? "#ffb347" : "#7fd0ff", !0, eta);
      }
    }
    // liegt ein anderer Himmelskörper (inkl. Atmosphäre) zwischen Schiff und Ziel?
    function occluded(from, to, skip) {
      for (let pl of uni.planets) {
        if (pl === skip) continue;
        let R = pl.P.radius + (pl.P.atmo.has ? pl.P.atmo.height * 600 : 8e3),
          d = to.map((x, k) => x - from[k]), L = Math.hypot(...d),
          o = pl.pos.map((x, k) => x - from[k]),
          tt = Math.max(0, Math.min(L, (o[0] * d[0] + o[1] * d[1] + o[2] * d[2]) / L)),
          c = o.map((x, k) => x - (d[k] / L) * tt);
        if (Math.hypot(...c) < R && tt > 0 && tt < L) return !0;
      }
      return !1;
    }
    let fmtT = (s) => (s > 5400 ? Math.round(s / 3600) + " h" : s > 90 ? Math.round(s / 60) + " min" : Math.round(s) + " s");
    function drawObjective() {
      let i = Math.min(save.step, STEPS.length - 1), s = STEPS[i];
      if (stepShown === i && hud.obj.dataset.n === String(foundCount())) return;
      stepShown = i; hud.obj.dataset.n = String(foundCount());
      hud.obj.innerHTML = `<div class="oh"><span>Expedition</span><b>${foundCount()}/${RELIC_TOTAL}</b></div><div class="ot">${s.text}</div><div class="ok">${s.hint}</div>`;
      hud.obj.classList.remove("flash"); void hud.obj.offsetWidth; hud.obj.classList.add("flash");
    }
    // ---------- pro Frame ----------
    function update(dt, st) {
      save.time += dt;
      for (let [pl, g] of fxGroups) g.position.copy(pl.group.position);
      beamU.uRes.value.set(renderer.size[0] || 1, renderer.size[1] || 1);
      // Besuch registrieren
      if (st.alt < st.planet.P.radius * 0.6 && !save.visited.includes(st.planet.P.name)) {
        save.visited.push(st.planet.P.name); persist();
        toast("Erstbesuch: " + st.planet.P.name + " · " + st.planet.P.desc, 4200);
      }
      // Relikte: Drehen, Einsammeln zu Fuß
      let t = oi.uTime.value, sun = uni.sunDirFrom(st.planet);
      for (let r of relics) {
        if (r.planet !== st.planet) continue;
        // am Tag heller, nachts gedimmt (der Himmel ist dann dunkel)
        let day = r.u[0] * sun[0] + r.u[1] * sun[1] + r.u[2] * sun[2];
        r.beamMat.uniforms.uAlpha.value = 0.25 + 0.75 * Math.min(1, Math.max(0, (day + 0.1) / 0.5));
        r.crystal.rotation.y = t * 0.8; r.crystal.position.y = 3 + Math.sin(t * 1.6 + r.u[0] * 10) * 0.25;
        r.halo.rotation.y = -t * 0.5; r.halo.scale.setScalar(1 + Math.sin(t * 2.2) * 0.06);
        if (r.found || st.mode !== "walk") continue;
        let w = r.world(), p = player.x;
        Math.hypot(w[0] - p[0], w[1] - p[1], w[2] - p[2]) < 5.5 && collect(r);
      }
      // Tank füllt sich gelandet langsam wieder (sonst strandet man)
      if (ship.landed && ship.fuel < ship.fuelCap) {
        ship.fuel = Math.min(ship.fuelCap, ship.fuel + ship.fuelCap * (has("fuel") ? 0.05 : 0.025) * dt);
        if (!refuelHint && ship.fuel < ship.fuelCap * 0.6) { refuelHint = !0; toast("Gelandet: Tank füllt sich langsam wieder auf"); }
      }
      // harte Landung hörbar
      if (ship.landed && !wasLanded && lastVS < -3) sound.thud(-lastVS);
      wasLanded = ship.landed; lastVS = ship.vSpeed || 0;
      if (st.mode !== lastMode) { lastMode = st.mode; manualTarget = !1; }
      syncStep(st);
      manualTarget || (target = autoTarget(st));
      if (target && target.kind === "relic" && target.r.found) target = autoTarget(st);
      drawNav(st);
      drawObjective();
      // Klang
      let piloting = st.mode === "pilot", usage = piloting ? Math.min(1, ship.axisUsage.reduce((a, b) => a + b, 0) * 0.7) : 0;
      sound.update(dt, {
        rho: st.rho,
        speed: Math.hypot(...st.vel),
        thrust: usage,
        pulse: piloting && ship.pulseActive ? ship.pulseCharge : 0,
        jet: !piloting && st.jetting,
        walking: !piloting && player.grounded,
        soft: st.planet.P.trees > 0,
        space: st.rho < 0.01,
      });
    }
    // ---------- Karte ----------
    function drawMap(cv, st) {
      let r = Math.min(devicePixelRatio || 1, 2), W = cv.clientWidth, H = cv.clientHeight;
      cv.width = W * r; cv.height = H * r;
      let g = cv.getContext("2d");
      g.scale(r, r); g.clearRect(0, 0, W, H);
      // Projektion: Draufsicht (x/z), Entfernung wurzelskaliert
      let cx = W * 0.42, cy = H * 0.52, maxR = Math.min(W, H) * 0.42,
        scale = (d) => (Math.sqrt(d) / Math.sqrt(8.2e6)) * maxR,
        pt = (p) => { let dx = p[0], dz = p[2], L = Math.hypot(dx, dz) || 1, dd = Math.hypot(p[0], p[1], p[2]), s = scale(dd); return [cx + (dx / L) * s, cy + (dz / L) * s]; };
      g.strokeStyle = "rgba(255,255,255,.06)"; g.lineWidth = 1;
      for (let k of [1.4e6, 5.2e6, 8e6]) { g.beginPath(); g.arc(cx, cy, scale(k), 0, Math.PI * 2); g.stroke(); }
      // Sonne (Richtung)
      let sd = Math.hypot(ln[0], ln[2]), sx = cx + (ln[0] / sd) * maxR * 1.12, sy = cy + (ln[2] / sd) * maxR * 1.12;
      let gr = g.createRadialGradient(sx, sy, 0, sx, sy, 26); gr.addColorStop(0, "rgba(255,236,200,1)"); gr.addColorStop(1, "rgba(255,200,120,0)");
      g.fillStyle = gr; g.beginPath(); g.arc(sx, sy, 26, 0, Math.PI * 2); g.fill();
      g.fillStyle = "rgba(255,230,190,.8)"; g.font = "11px ui-monospace, Menlo, monospace"; g.textAlign = "center"; g.fillText("Sonne", sx, sy + 38);
      let cols = { Aurora: "#4d9be6", Selene: "#b8bcc6", Ferrox: "#d9773a", Glacia: "#bfe6ff" };
      for (let p of uni.planets) {
        let [x, y] = pt(p.pos), rad = 5 + (p.P.radius / 4e4) * 9, n = relics.filter((q) => q.planet === p), f = n.filter((q) => q.found).length;
        let pg = g.createRadialGradient(x - rad * 0.4, y - rad * 0.4, 1, x, y, rad);
        pg.addColorStop(0, "#fff"); pg.addColorStop(0.25, cols[p.P.name] || "#aaa"); pg.addColorStop(1, "rgba(0,0,0,.9)");
        g.fillStyle = pg; g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
        if (p === st.planet && st.alt < p.P.radius * 3) { g.strokeStyle = "#7fd0ff"; g.lineWidth = 1.5; g.beginPath(); g.arc(x, y, rad + 6, 0, Math.PI * 2); g.stroke(); }
        g.fillStyle = "#e8eef5"; g.font = "600 13px ui-sans-serif, system-ui, sans-serif"; g.textAlign = "left";
        g.fillText(p.P.name, x + rad + 8, y - 2);
        g.fillStyle = "rgba(232,238,245,.6)"; g.font = "11px ui-monospace, Menlo, monospace";
        g.fillText((save.visited.includes(p.P.name) ? "" : "unbesucht · ") + "Relikte " + f + "/" + n.length, x + rad + 8, y + 13);
      }
      // eigene Position
      let [mx, my] = pt(st.pos);
      g.fillStyle = "#ffb347"; g.beginPath(); g.moveTo(mx, my - 6); g.lineTo(mx + 5, my + 5); g.lineTo(mx - 5, my + 5); g.closePath(); g.fill();
    }
    return {
      init, update, cycleTarget, drawMap, sound,
      get found() { return foundCount(); },
      get total() { return RELIC_TOTAL; },
      get save() { return save; },
      get relics() { return relics; },
      get target() { return target; },
      stepText: () => STEPS[Math.min(save.step, STEPS.length - 1)].text,
      toggleSound() { save.sound = sound.toggle(); persist(); return save.sound; },
      reset() { try { localStorage.removeItem(EXP_KEY); } catch (n) {} location.reload(); },
      persist,
    };
  }
  var ml = new URLSearchParams(location.search),
    Du = {
      niedrig: { pixelRatio: 0.7, cloudSteps: 12, shadows: !1, bloom: !0, clouds: !0 },
      mittel: { pixelRatio: 1, cloudSteps: 20, shadows: !0, bloom: !0, clouds: !0 },
      hoch: { pixelRatio: Math.min(devicePixelRatio, 1.6), cloudSteps: 30, shadows: !0, bloom: !0, clouds: !0 },
    },
    Ju = Du[ml.get("q") || "mittel"] || Du.mittel,
    ku = 22,
    Te = (n) => document.getElementById(n);
  async function og() {
    await Su();
    let n = Te("c"),
      t = new Ao(n, Ju),
      e = new As(),
      i = new Oe(70, 1, 0.08, 2e10);
    e.add(i);
    let s = { terrain: Qu(), water: Ru(), scatter: Tu(), hull: Iu() },
      r = new go(Math.max(2, Math.min(6, (navigator.hardwareConcurrency || 4) - 1))),
      a = new Qo(r, s, e),
      o = new Ks(16777215, 3);
    ((o.castShadow = Ju.shadows),
      o.shadow.mapSize.set(2048, 2048),
      Object.assign(o.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, near: 1, far: 1200 }),
      (o.shadow.bias = -4e-4),
      (o.shadow.normalBias = 0.04),
      e.add(o, o.target));
    let l = new Js(8952251, 2236440, 1);
    e.add(l);
    let c = new Ee(new Yi(5e9, 64, 32), new pi({ map: Pe.stars, side: Le, depthWrite: !1, color: 16777215 }));
    ((c.renderOrder = -10), (c.frustumCulled = !1), e.add(c));
    let u = new Ee(new Yi(Au, 48, 24), new pi({ color: new Tt(1, 0.93, 0.84).multiplyScalar(60) }));
    ((u.frustumCulled = !1), e.add(u));
    let f = new Co(e),
      h = new No(a, s, e),
      d = new wo(a);
    function E(V) {
      if ((E.c || (E.c = {}))[V.P.name]) return E.c[V.P.name];
      let nb = a.planets
          .filter((q) => q !== V)
          .map((q) => [q, Math.hypot(...q.pos.map((x, k) => x - V.pos[k]))])
          .sort((q1, q2) => q1[1] - q2[1])[0],
        nd = nb ? nb[0].pos.map((x, k) => (x - V.pos[k]) / nb[1]) : [0, 1, 0];
      let nt = a.sunDirFrom(V),
        I = V.gen,
        ot = null,
        St = -1e9,
        R = 5e3,
        g = {};
      for (let H = 0; H < R; H++) {
        let $ = 1 - ((H + 0.5) / R) * 2,
          X = Math.sqrt(1 - $ * $),
          at = H * 2.399963,
          rt = [Math.cos(at) * X, $, Math.sin(at) * X],
          K = I.height(...rt),
          j = rt[0] * nt[0] + rt[1] * nt[1] + rt[2] * nt[2],
          lt = -Math.abs(j - 0.42) * 3 + Math.min(0.6, Math.max(0, rt[0] * nd[0] + rt[1] * nd[1] + rt[2] * nd[2])) * 4;
        if (V.P.ocean) {
          if (K < 15 || K > 400) continue;
          (I.colorize(rt[0], rt[1], rt[2], K, 0.95, g), (lt += g.forest * 1.5));
          let bt = 0.03,
            dt = 0;
          for (let [ht, It] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            let wt = [rt[1], -rt[0], 0],
              zt = [rt[2] * rt[0], rt[2] * rt[1], -(rt[0] * rt[0] + rt[1] * rt[1])],
              U = [
                rt[0] + (wt[0] * ht + zt[0] * It) * bt,
                rt[1] + (wt[1] * ht + zt[1] * It) * bt,
                rt[2] + (wt[2] * ht + zt[2] * It) * bt,
              ],
              ut = Math.hypot(...U);
            I.height(U[0] / ut, U[1] / ut, U[2] / ut) < -20 && dt++;
          }
          lt += dt ? 1.2 : 0;
        } else lt += -Math.abs(K - V.P.relief * 0.1) / V.P.relief;
        lt > St && ((St = lt), (ot = rt));
      }
      return (E.c[V.P.name] = ot);
    }
    function v(V) {
      let nt = a.byName(V),
        I = E(nt),
        ot = a.sunDirFrom(nt),
        St = [ot[0] - I[0] * 0.4 + 0.3, ot[1] - I[1] * 0.4, ot[2] - I[2] * 0.4];
      d.spawn(nt, I, St);
      let R = new F(...St).addScaledVector(new F(...I), -new F(...St).dot(new F(...I))).normalize(),
        g = new F().crossVectors(R, new F(...I)).normalize(),
        H = new F(...I).multiplyScalar(nt.P.radius).addScaledVector(R, 26).addScaledVector(g, 9).normalize();
      ((h.piloted = !1),
        (p = "walk"),
        h.placeLanded(nt, [H.x, H.y, H.z], [-g.x, -g.y, -g.z]),
        (h.fuel = h.fuelCap),
        C(nt.P.name + " \xB7 " + nt.P.desc));
    }
    let m = {},
      p = "walk",
      y = !1,
      Q = "chase",
      S = 0,
      M = null,
      P = !0,
      T = 0,
      x = 0,
      b = () => document.pointerLockElement === n;
    (addEventListener("keydown", (V) => {
      if (V.repeat) {
        m[V.code] = !0;
        return;
      }
      ((m[V.code] = !0),
        !P &&
          (V.code === "KeyF" && A(),
          V.code === "KeyB" && p === "walk" && ((y = !y), C(y ? "Baumodus" : "Baumodus aus")),
          V.code === "KeyV" && p === "pilot" && (Q = Q === "chase" ? "cockpit" : "chase"),
          V.code === "KeyZ" &&
            p === "pilot" &&
            ((h.dampeners = !h.dampeners), C("Tr\xE4gheitsd\xE4mpfer " + (h.dampeners ? "an" : "aus"))),
          V.code === "KeyL" && (h.lightsOn = !h.lightsOn),
          V.code === "KeyR" && y && (M = ((M ?? ei[S].facing ?? 5) + 1) % 6),
          V.code === "KeyM" && openMap(),
          V.code === "KeyT" && X && X.cycleTarget(expState()),
          V.code === "KeyN" && X && C(X.toggleSound() ? "Ton an" : "Ton aus"),
          /^Digit[1-8]$/.test(V.code) && y && ((S = +V.code.slice(5) - 1), (M = null))));
    }),
      addEventListener("keyup", (V) => {
        m[V.code] = !1;
      }),
      addEventListener("blur", () => {
        for (let V in m) m[V] = !1;
      }),
      n.addEventListener("mousemove", (V) => {
        b() && ((T += V.movementX), (x += V.movementY));
      }),
      n.addEventListener("contextmenu", (V) => V.preventDefault()),
      n.addEventListener("mousedown", (V) => {
        if (!b()) {
          P || n.requestPointerLock();
          return;
        }
        y && p === "walk" && it(V.button);
      }),
      document.addEventListener("pointerlockchange", () => {
        !b() && !P && !window.__test && N(!1);
      }));
    function N(V) {
      ((P = !0),
        Te("menu").classList.remove("hidden"),
        Te("planetList").classList.toggle("hidden", !V),
        b() && document.exitPointerLock());
    }
    function w() {
      (X && X.sound.init(), (P = !1), Te("menu").classList.add("hidden"), Te("mapov").classList.add("hidden"), n.requestPointerLock?.());
    }
    function openMap() {
      if (!X) return;
      ((P = !0), b() && document.exitPointerLock(), Te("menu").classList.add("hidden"), Te("mapov").classList.remove("hidden"));
      let st = expState();
      (X.drawMap(Te("mapc"), st),
        (Te("mapProg").textContent = X.found + "/" + X.total + " Relikte"),
        (Te("mapList").innerHTML = a.planets
          .map((V) => {
            let rl = X.relics.filter((q) => q.planet === V),
              fd = rl.filter((q) => q.found).length,
              here = V === st.planet && st.alt < V.P.radius * 3;
            return `<button data-p="${V.P.name}"><b>${V.P.name}${here ? " \xB7 hier" : ""}</b><small>${V.P.desc}<br>Relikte ${fd}/${rl.length} \xB7 g ${V.P.gravity.toFixed(1)} m/s\xB2 \xB7 Schnellreise</small></button>`;
          })
          .join("")),
        Te("mapList")
          .querySelectorAll("button")
          .forEach((V) => (V.onclick = () => (v(V.dataset.p), w()))));
    }
    function expState() {
      let ent = p === "pilot" ? h : d,
        pl = a.nearest(ent.x),
        loc = a.local(pl, ent.x);
      return {
        mode: p,
        pos: ent.x,
        cam: yt,
        vel: ent.v,
        planet: pl,
        alt: loc.alt,
        rho: a.airDensity(pl, loc.alt),
        jetting: p === "walk" && !d.grounded && !d.swimming && !!m.Space && d.jet > 0 && !P,
        menu: P,
      };
    }
    let X = null;
    ((Te("bStart").onclick = w),
      (Te("bMap").onclick = () => openMap()),
      (Te("mapClose").onclick = w),
      (Te("bSound").onclick = () => X && (Te("bSound").textContent = X.toggleSound() ? "Ton: an" : "Ton: aus")),
      (Te("bReset").onclick = () => X && confirm("Expedition neu starten? Alle gefundenen Relikte gehen verloren.") && X.reset()),
      (Te("planetList").innerHTML = a.planets
        .map(
          (V) =>
            `<button data-p="${V.P.name}"><b>${V.P.name}</b><small>${V.P.desc} \xB7 g ${V.P.gravity.toFixed(1)} m/s\xB2</small></button>`,
        )
        .join("")),
      Te("planetList")
        .querySelectorAll("button")
        .forEach(
          (V) =>
            (V.onclick = () => {
              (v(V.dataset.p), w());
            }),
        ));
    function C(V, ms = 2600) {
      let nt = Te("hToast");
      ((nt.textContent = V),
        (nt.style.opacity = 1),
        clearTimeout(C.t),
        (C.t = setTimeout(() => (nt.style.opacity = 0), ms)));
    }
    function z() {
      let V = h.cockpitCell();
      if (!V) return null;
      let nt = h.gridOrigin(),
        I = V.clone().applyQuaternion(h.q);
      return [nt[0] + I.x, nt[1] + I.y, nt[2] + I.z];
    }
    function A() {
      if (p === "walk") {
        let V = z();
        if (!V) {
          C("Kein Cockpit");
          return;
        }
        if (Math.hypot(V[0] - d.x[0], V[1] - d.x[1], V[2] - d.x[2]) > 7) return;
        ((p = "pilot"), (y = !1), (h.piloted = !0), (h.sleeping = !1), C("Cockpit \xB7 F zum Aussteigen"));
      } else {
        let V = z(),
          nt = new F(-1, 0, 0).applyQuaternion(h.q).multiplyScalar(5.5),
          I = [V[0] + nt.x, V[1] + nt.y, V[2] + nt.z],
          ot = a.nearest(I),
          St = a.local(ot, I),
          R = Math.max(0, -St.altTerrain + 0.3);
        ((d.x = [I[0] + St.up[0] * R, I[1] + St.up[1] * R, I[2] + St.up[2] * R]),
          (d.v = h.v.slice()),
          d.up.set(...St.up),
          d.fwd.set(0, 0, -1).applyQuaternion(h.q),
          (d.pitch = 0),
          (p = "walk"),
          (h.piloted = !1));
      }
    }
    let L = new pi({ color: 8376575, transparent: !0, opacity: 0.35, depthWrite: !1 }),
      G = new ke(),
      D = new Hs(new zs(new bi(Wt * 1.02, Wt * 1.02, Wt * 1.02)), new ts({ color: 16737860 }));
    h.visual.add(G, D);
    let et = "",
      J = null;
    function Y(V, nt) {
      if (((G.visible = D.visible = !1), (J = null), !y || p !== "walk")) return;
      let I = new F(0, 0, -1).applyQuaternion(nt),
        ot = h.raycast(V, [I.x, I.y, I.z], 14);
      if (!ot) return;
      J = ot;
      let St = [ot.cell[0] + ot.normal[0], ot.cell[1] + ot.normal[1], ot.cell[2] + ot.normal[2]];
      J.place = St;
      let R = M ?? ei[S].facing ?? 5,
        g = S + ":" + R;
      if (g !== et) {
        et = g;
        for (let H of [...G.children]) (G.remove(H), H.geometry.dispose());
        for (let H of Object.values(Gu(S, R))) for (let $ of H) G.add(new Ee($, L));
      }
      (G.position.set(St[0] * Wt, St[1] * Wt, St[2] * Wt),
        (G.visible = !0),
        D.position.set(ot.cell[0] * Wt, ot.cell[1] * Wt, ot.cell[2] * Wt),
        (D.visible = !0));
    }
    function it(V) {
      if (J) {
        if (V === 0) {
          let nt = h.gridOrigin(),
            I = new F(...J.place).multiplyScalar(Wt).applyQuaternion(h.q);
          if (Math.hypot(nt[0] + I.x - d.x[0], nt[1] + I.y - d.x[1], nt[2] + I.z - d.x[2]) < 1.6) return;
          h.setBlock(J.place, { type: S, facing: M ?? ei[S].facing ?? 5 });
        } else if (V === 2) {
          if (h.blocks.size <= 1) return;
          h.setBlock(J.cell, null);
        }
      }
    }
    let ft = {
        planet: Te("hPlanet"),
        status: Te("hStatus"),
        info: Te("hInfo"),
        prompt: Te("hPrompt"),
        bars: Te("hBars"),
        hot: Te("hHotbar"),
        help: Te("hHelp"),
        load: Te("hLoad"),
      },
      ct = (V) => (Math.abs(V) >= 1e4 ? (V / 1e3).toFixed(1) + " km" : Math.round(V) + " m"),
      ee = (V) => (Math.abs(V) >= 1e3 ? (V / 1e3).toFixed(2) + " km/s" : Math.round(V) + " m/s");
    function Dt(V) {
      let nt = p === "pilot" ? h : d,
        I = a.nearest(nt.x),
        ot = a.local(I, nt.x);
      if (
        ((ft.planet.textContent = ot.alt < I.P.radius * 3 ? I.P.name : "Interplanetar \xB7 " + I.P.name),
        (ft.info.innerHTML = `${V.toFixed(0)} fps \xB7 ${r.pending} Chunks<br>g ${Math.hypot(...a.gravity(nt.x)).toFixed(2)} m/s\xB2`),
        p === "pilot")
      ) {
        ft.status.textContent = h.status + (h.dampeners ? "" : " \xB7 D\xC4MPFER AUS");
        let H = Math.hypot(...h.v),
          $ = h.fuelCap ? h.fuel / h.fuelCap : 0;
        ft.bars.innerHTML = `<div class="stat"><b>${ee(H)}</b><small>Geschw.</small></div>
        <div class="stat"><b>${ct(ot.alt)}</b><small>H\xF6he</small></div>
        <div class="stat"><b>${(h.vSpeed || 0) >= 0 ? "+" : ""}${Math.round(h.vSpeed || 0)}</b><small>Steigrate</small></div>
        <div class="stat"><b>${h.thrustToWeight().toFixed(1)}</b><small>Schub/Gew.</small></div>
        <div class="stat"><b>${Math.round($ * 100)}%</b><small>Treibstoff</small><div class="bar"><i style="width:${$ * 100}%;background:${$ < 0.2 ? "var(--warn)" : ""}"></i></div></div>
        ${h.pulseCharge > 0 ? `<div class="stat"><b>${Math.round(h.pulseCharge * 100)}%</b><small>Puls</small></div>` : ""}`;
        let X = ot.alt > Math.max(8e3, I.P.atmo.has ? I.P.atmo.height * 600 : 5e3);
        ft.help.innerHTML = `<kbd>F</kbd>aussteigen <kbd>V</kbd>Kamera <kbd>Z</kbd>D\xE4mpfer ${X ? "<kbd>J</kbd>Pulsantrieb" : ""}`;
      } else
        ((ft.status.textContent = y ? "Baumodus" : d.swimming ? "Schwimmen" : d.grounded ? "Zu Fu\xDF" : "Jetpack"),
          (ft.bars.innerHTML = `<div class="stat"><b>${ct(ot.alt)}</b><small>H\xF6he</small></div>
        <div class="stat"><b>${Math.round(d.jet * 100)}%</b><small>Jetpack</small><div class="bar"><i style="width:${d.jet * 100}%"></i></div></div>`),
          (ft.help.innerHTML = y
            ? "<kbd>1-8</kbd>Block <kbd>R</kbd>drehen <kbd>LMB</kbd>setzen <kbd>RMB</kbd>abbauen <kbd>B</kbd>fertig"
            : "<kbd>B</kbd>bauen <kbd>M</kbd>Karte"));
      let St = z(),
        R = p === "walk" && St && Math.hypot(St[0] - d.x[0], St[1] - d.x[1], St[2] - d.x[2]) < 7;
      ((ft.prompt.style.display = R ? "block" : "none"),
        (ft.prompt.innerHTML = "<kbd>F</kbd> Einsteigen"),
        (ft.hot.style.display = y && p === "walk" ? "flex" : "none"),
        y &&
          (ft.hot.innerHTML = ei
            .map((H, $) => `<div class="${$ === S ? "on" : ""}"><span>${$ + 1}</span>${H.name}</div>`)
            .join("")));
      let g = a.planets.reduce((H, $) => H + ($.stats.visible ? 0 : 1), 0);
      ft.load.textContent = r.pending > 20 ? "LADE GEL\xC4NDE \u2026" : "";
    }
    let yt = [0, 0, 0],
      W = new ye(),
      Z = { x: null, q: new ye() };
    function xt(V) {
      if (p === "pilot") {
        let ot = h.gridOrigin();
        if (Q === "cockpit") {
          let St = h
            .cockpitCell()
            .add(new F(0, 0.55, 0.1))
            .applyQuaternion(h.q);
          ((yt[0] = ot[0] + St.x), (yt[1] = ot[1] + St.y), (yt[2] = ot[2] + St.z), W.copy(h.q));
        } else {
          let St = new F(0, 5.5, 19).add(h.com).applyQuaternion(h.q),
            R = [ot[0] + St.x, ot[1] + St.y, ot[2] + St.z];
          Z.x || (Z.x = R.slice());
          let g = 1 - Math.exp(-V * 10);
          for (let $ = 0; $ < 3; $++) Z.x[$] = R[$] + (Z.x[$] + h.v[$] * V - R[$]) * (1 - g);
          ((yt[0] = Z.x[0]), (yt[1] = Z.x[1]), (yt[2] = Z.x[2]));
          let H = h.q.clone().multiply(new ye().setFromAxisAngle(new F(1, 0, 0), -0.12));
          W.slerp(H, 1 - Math.exp(-V * 8));
        }
      } else {
        Z.x = null;
        let ot = d.eyePos();
        ((yt[0] = ot[0]), (yt[1] = ot[1]), (yt[2] = ot[2]), d.camQuat(W));
      }
      let nt = a.nearest(yt),
        I = a.local(nt, yt);
      if (I.altTerrain < 0.6) {
        let ot = 0.6 - I.altTerrain;
        for (let St = 0; St < 3; St++) yt[St] += I.up[St] * ot;
      }
      (i.position.set(0, 0, 0), i.quaternion.copy(W), i.updateMatrixWorld());
    }
    let Ut = new Tt();
    function pt(V) {
      let nt = a.nearest(yt),
        I = a.sunDirFrom(nt),
        ot = a.local(nt, yt),
        St = [yt[0] - nt.pos[0], yt[1] - nt.pos[1], yt[2] - nt.pos[2]],
        R = ll(nt, St, I),
        g = ot.up,
        H = g[0] * I[0] + g[1] * I[1] + g[2] * I[2];
      (o.color.setRGB(R[0], R[1], R[2]),
        (o.intensity = 3.2),
        o.position.set(I[0] * 500, I[1] * 500, I[2] * 500),
        o.target.position.set(0, 0, 0),
        oi.uSunDir.value.set(...I),
        oi.uSunColor.value.setRGB(R[0] * 1.1, R[1] * 1.1, R[2] * 1.1),
        (oi.uTime.value = V));
      let $ = hl(nt, St, g, I, ku),
        X = [I[0] - g[0] * H, I[1] - g[1] * H, I[2] - g[2] * H],
        at = Math.hypot(...X) || 1,
        rt = [(X[0] / at) * 0.98 + g[0] * 0.08, (X[1] / at) * 0.98 + g[1] * 0.08, (X[2] / at) * 0.98 + g[2] * 0.08],
        K = Math.hypot(...rt),
        j = hl(
          nt,
          St,
          rt.map((ht) => ht / K),
          I,
          ku,
        );
      (oi.uSkyZenith.value.setRGB(...$), oi.uSkyHorizon.value.setRGB(...j));
      let lt = nt.P.atmo.has ? Math.exp(-Math.max(ot.alt, 0) / (nt.P.atmo.height * 1e3 * 0.35)) : 0;
      (Ut.setRGB($[0] * 3.5 + j[0] * 0.9 + 0.004, $[1] * 3.5 + j[1] * 0.9 + 0.005, $[2] * 3.5 + j[2] * 0.9 + 0.007),
        l.color.copy(Ut),
        l.groundColor.setRGB(...nt.P.palette.lowland).multiplyScalar(Math.max(H, 0) * 0.6 + 0.01),
        (l.intensity = 1),
        (s.water.uniforms.uAmbient.value = 0.05 + $[2] * 2));
      let bt = nt.P.palette.water;
      s.water.uniforms.uWater.value.setRGB(bt[0], bt[1], bt[2]);
      let dt = lt * Math.max(0, Math.min(1, (H + 0.1) * 4));
      return (
        c.material.color.setScalar(0.9 * (1 - dt) + 0.002),
        u.position.set(ln[0] - yt[0], ln[1] - yt[1], ln[2] - yt[2]),
        c.position.set(0, 0, 0),
        { pl: nt, loc: ot }
      );
    }
    function Bt() {
      let V = [];
      for (let nt of a.planets) {
        if (!nt.P.atmo.has) continue;
        let I = [nt.pos[0] - yt[0], nt.pos[1] - yt[1], nt.pos[2] - yt[2]];
        V.push({ C: I, P: nt.P, sun: a.sunDirFrom(nt), d: Math.hypot(...I) });
      }
      return V.sort((nt, I) => I.d - nt.d).slice(-3);
    }
    function le() {
      let V = innerWidth,
        nt = innerHeight;
      ((i.aspect = V / nt), i.updateProjectionMatrix(), t.resize(V, nt));
    }
    (addEventListener("resize", le), le(), v(ml.get("planet") || "Aurora"));
    X = createExpedition({ uni: a, ship: h, player: d, camera: i, hull: s.hull, toast: C, renderer: t });
    X.init(E(a.byName("Aurora")));
    {
      let mp = Te("menuProg");
      mp && (mp.textContent = X.found ? "Fortschritt: " + X.found + "/" + X.total + " Relikte \xB7 " + X.stepText() : "Neue Expedition \xB7 " + X.total + " Relikte auf 4 Welten");
      Te("bSound").textContent = X.sound.on ? "Ton: an" : "Ton: aus";
      Te("bStart").textContent = X.found ? "Weiterspielen" : "Expedition starten";
    }
    let Lt = performance.now(),
      qt = 0,
      Xt = 60,
      $t = 0;
    function Zt(V, nt = !0) {
      qt += V;
      let I = [T, x];
      if (((T = x = 0), p === "walk")) (P || d.look(I[0], I[1]), d.update(V, P ? {} : m, h));
      else {
        let ot = P ? {} : m;
        (h.input.move.set(
          (ot.KeyD ? 1 : 0) - (ot.KeyA ? 1 : 0),
          (ot.Space ? 1 : 0) - (ot.KeyC || ot.ControlLeft ? 1 : 0),
          (ot.KeyS ? 1 : 0) - (ot.KeyW ? 1 : 0),
        ),
          (h.input.roll = (ot.KeyE ? 1 : 0) - (ot.KeyQ ? 1 : 0)),
          (h.input.look[0] += I[0]),
          (h.input.look[1] += I[1]),
          (h.input.boost = !!(ot.ShiftLeft || ot.ShiftRight)),
          (h.input.pulse = !!ot.KeyJ));
      }
      (h.update(V, yt, qt), p === "pilot" && (d.x = h.x.slice()), xt(V), h.update(0, yt, qt));
      for (let ot of a.planets) ot.update(yt);
      r.pump();
      {
        let ot = a.nearest(yt);
        f.update(yt, ot, a.local(ot, yt).alt < 120);
      }
      (Y(yt, W), pt(qt), X && X.update(V, expState()), nt && t.render(e, i, Bt(), qt, 1.25));
    }
    function ge(V) {
      let nt = Math.min(0.05, (V - Lt) / 1e3);
      ((Lt = V),
        (Xt = Xt * 0.95 + (1 / Math.max(nt, 0.001)) * 0.05),
        Zt(nt),
        ($t -= nt),
        $t <= 0 && (($t = 0.12), Dt(Xt)),
        window.__test || requestAnimationFrame(ge));
    }
    window.__game = {
      get exp() {
        return X;
      },
      expState: () => expState(),
      openMap: () => openMap(),
      uni: a,
      ship: h,
      player: d,
      pool: r,
      camera: i,
      async settle(V = 6e4) {
        let nt = performance.now();
        for (
          let I = 0;
          I < 4e3 &&
          (Zt(1 / 60, !1),
          await new Promise((ot) => setTimeout(ot, 20)),
          !((I > 3 && r.pending === 0) || performance.now() - nt > V));
          I++
        );
        (Zt(1 / 60, !1), Dt(60));
      },
      step(V = 1, nt = 1 / 60) {
        for (let I = 0; I < V; I++) Zt(nt);
        Dt(60);
      },
      sim(V = 60) {
        for (let I = 0; I < V; I++) Zt(1 / 60, !1);
        let nt = a.nearest(h.x);
        return {
          status: h.status,
          alt: +a.local(nt, h.x).alt.toFixed(1),
          v: +Math.hypot(...h.v).toFixed(2),
          vs: +(h.vSpeed || 0).toFixed(2),
          fuel: +h.fuel.toFixed(0),
          landed: h.landed,
          sleeping: h.sleeping,
          w: h.w.toArray().map((I) => +I.toFixed(3)),
          mode: p,
        };
      },
      nearShip(V = 7) {
        let nt = h.gridOrigin(),
          I = new F(1, 0, 0).applyQuaternion(h.q),
          ot = [nt[0] + I.x * V, nt[1] + I.y * V, nt[2] + I.z * V],
          St = a.nearest(ot),
          g = a.local(St, ot).up;
        (d.spawn(St, g, [-I.x, -I.y, -I.z]), (d.pitch = -0.25));
      },
      get target() {
        return J && { cell: J.cell, place: J.place };
      },
      travel: v,
      snap() {
        return (Zt(1 / 60), n.toDataURL("image/png"));
      },
      menu(V) {
        V ? N(!1) : ((P = !1), Te("menu").classList.add("hidden"));
      },
      setMode(V) {
        V !== p && Ie(V);
      },
      look(V, nt) {
        (d.look(V / 0.0022, 0), (d.pitch = nt));
      },
      key(V, nt) {
        m[V] = nt;
      },
      lift(V) {
        let nt = a.local(h.planet || a.nearest(h.x), h.x).up;
        for (let I = 0; I < 3; I++) h.x[I] += nt[I] * V;
        h.sleeping = !1;
      },
      set build(V) {
        y = V;
      },
      get mode() {
        return p;
      },
      info() {
        return {
          hemi: l.color.toArray().map((V) => +V.toFixed(3)),
          sun: o.color.toArray().map((V) => +V.toFixed(3)),
          zen: oi.uSkyZenith.value.toArray().map((V) => +V.toFixed(3)),
          hor: oi.uSkyHorizon.value.toArray().map((V) => +V.toFixed(3)),
          calls: t.calls,
          tris: t.tris,
          fps: Xt,
          pending: r.pending,
          alt: a.local(a.nearest(yt), yt).alt,
          nodes: a.planets.map((V) => V.P.name + ":" + V.stats.visible).join(" "),
        };
      },
    };
    function Ie(V) {
      if (V === "pilot") {
        let nt = z();
        d.x = nt.slice();
      }
      A();
    }
    ml.has("test") ? ((window.__test = !0), (P = !1), Te("menu").classList.add("hidden")) : requestAnimationFrame(ge);
  }
  og().catch((n) => {
    (console.error(n),
      document.body.insertAdjacentHTML(
        "beforeend",
        `<pre style="position:fixed;left:20px;top:20px;color:#f88">${n.stack || n}</pre>`,
      ));
  });
})();
