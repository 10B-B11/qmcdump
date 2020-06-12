(function(e) {
  var t = {};
  function r(n) {
      if (t[n])
          return t[n].exports;
      var a = t[n] = {
          i: n,
          l: !1,
          exports: {}
      };
      return e[n].call(a.exports, a, a.exports, r),
      a.l = !0,
      a.exports
  }
  r.m = e,
  r.c = t,
  r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
      })
  }
  ,
  r.r = function(e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  r.t = function(e, t) {
      if (1 & t && (e = r(e)),
      8 & t)
          return e;
      if (4 & t && "object" === typeof e && e && e.__esModule)
          return e;
      var n = Object.create(null);
      if (r.r(n),
      Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
      }),
      2 & t && "string" != typeof e)
          for (var a in e)
              r.d(n, a, function(t) {
                  return e[t]
              }
              .bind(null, a));
      return n
  }
  ,
  r.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e["default"]
      }
      : function() {
          return e
      }
      ;
      return r.d(t, "a", t),
      t
  }
  ,
  r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }
  ,
  r.p = "",
  r(r.s = "1f2b")
}
)({
  0: function(e, t) {},
  "00bb": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.mode.CFB = function() {
              var t = e.lib.BlockCipherMode.extend();
              function r(e, t, r, n) {
                  var a, i = this._iv;
                  i ? (a = i.slice(0),
                  this._iv = void 0) : a = this._prevBlock,
                  n.encryptBlock(a, 0);
                  for (var o = 0; o < r; o++)
                      e[t + o] ^= a[o]
              }
              return t.Encryptor = t.extend({
                  processBlock: function(e, t) {
                      var n = this._cipher
                        , a = n.blockSize;
                      r.call(this, e, t, a, n),
                      this._prevBlock = e.slice(t, t + a)
                  }
              }),
              t.Decryptor = t.extend({
                  processBlock: function(e, t) {
                      var n = this._cipher
                        , a = n.blockSize
                        , i = e.slice(t, t + a);
                      r.call(this, e, t, a, n),
                      this._prevBlock = i
                  }
              }),
              t
          }(),
          e.mode.CFB
      }
      ))
  },
  "00ee": function(e, t, r) {
      var n = r("b622")
        , a = n("toStringTag")
        , i = {};
      i[a] = "z",
      e.exports = "[object z]" === String(i)
  },
  "00f6": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("04cc")
        , i = r("bda5")
        , o = n("music-metadata:parser:ogg:speex");
      class s extends i.VorbisParser {
          constructor(e, t, r) {
              super(e, t),
              this.tokenizer = r
          }
          parseFirstPage(e, t) {
              o("First Ogg/Speex page");
              const r = a.Header.get(t, 0);
              this.metadata.setFormat("codec", `Speex ${r.version}`),
              this.metadata.setFormat("numberOfChannels", r.nb_channels),
              this.metadata.setFormat("sampleRate", r.rate),
              -1 !== r.bitrate && this.metadata.setFormat("bitrate", r.bitrate)
          }
      }
      t.SpeexParser = s
  },
  "0366": function(e, t, r) {
      var n = r("1c0b");
      e.exports = function(e, t, r) {
          if (n(e),
          void 0 === t)
              return e;
          switch (r) {
          case 0:
              return function() {
                  return e.call(t)
              }
              ;
          case 1:
              return function(r) {
                  return e.call(t, r)
              }
              ;
          case 2:
              return function(r, n) {
                  return e.call(t, r, n)
              }
              ;
          case 3:
              return function(r, n, a) {
                  return e.call(t, r, n, a)
              }
          }
          return function() {
              return e.apply(t, arguments)
          }
      }
  },
  "03eb": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("cec2")
        , a = r("34eb")
        , i = r("2819")
        , o = r("a869")
        , s = r("fc97")
        , c = r("d3ab")
        , u = r("dbbe")
        , l = a("music-metadata:collector")
        , f = ["matroska", "APEv2", "vorbis", "ID3v2.4", "ID3v2.3", "ID3v2.2", "exif", "asf", "iTunes", "ID3v1"];
      class d {
          constructor(e) {
              this.opts = e,
              this.format = {
                  tagTypes: [],
                  trackInfo: []
              },
              this.native = {},
              this.common = {
                  track: {
                      no: null,
                      of: null
                  },
                  disk: {
                      no: null,
                      of: null
                  }
              },
              this.quality = {
                  warnings: []
              },
              this.commonOrigin = {},
              this.originPriority = {},
              this.tagMapper = new o.CombinedTagMapper;
              let t = 1;
              for (const r of f)
                  this.originPriority[r] = t++;
              this.originPriority.artificial = 500,
              this.originPriority.id3v1 = 600
          }
          hasAny() {
              return Object.keys(this.native).length > 0
          }
          addStreamInfo(e) {
              l(`streamInfo: type=${n.TrackType[e.type]}, codec=${e.codecName}`),
              this.format.trackInfo.push(e)
          }
          setFormat(e, t) {
              l(`format: ${e} = ${t}`),
              this.format[e] = t,
              this.opts.observer && this.opts.observer({
                  metadata: this,
                  tag: {
                      type: "format",
                      id: e,
                      value: t
                  }
              })
          }
          addTag(e, t, r) {
              l(`tag ${e}.${t} = ${r}`),
              this.native[e] || (this.format.tagTypes.push(e),
              this.native[e] = []),
              this.native[e].push({
                  id: t,
                  value: r
              }),
              this.toCommon(e, t, r)
          }
          addWarning(e) {
              this.quality.warnings.push({
                  message: e
              })
          }
          postMap(e, t) {
              switch (t.id) {
              case "artist":
                  if (this.commonOrigin.artist === this.originPriority[e])
                      return this.postMap("artificial", {
                          id: "artists",
                          value: t.value
                      });
                  this.common.artists || this.setGenericTag("artificial", {
                      id: "artists",
                      value: t.value
                  });
                  break;
              case "artists":
                  if ((!this.common.artist || this.commonOrigin.artist === this.originPriority.artificial) && (!this.common.artists || -1 === this.common.artists.indexOf(t.value))) {
                      const e = (this.common.artists || []).concat([t.value])
                        , r = h(e)
                        , n = {
                          id: "artist",
                          value: r
                      };
                      this.setGenericTag("artificial", n)
                  }
                  break;
              case "genre":
                  t.value = s.CommonTagMapper.parseGenre(t.value);
                  break;
              case "picture":
                  return void this.postFixPicture(t.value).then(r=>{
                      null !== r && (t.value = r,
                      this.setGenericTag(e, t))
                  }
                  );
              case "totaltracks":
                  return void (this.common.track.of = s.CommonTagMapper.toIntOrNull(t.value));
              case "totaldiscs":
                  return void (this.common.disk.of = s.CommonTagMapper.toIntOrNull(t.value));
              case "track":
              case "disk":
                  const r = this.common[t.id].of;
                  return this.common[t.id] = s.CommonTagMapper.normalizeTrack(t.value),
                  void (this.common[t.id].of = null != r ? r : this.common[t.id].of);
              case "year":
              case "originalyear":
                  t.value = parseInt(t.value, 10);
                  break;
              case "date":
                  const n = parseInt(t.value.substr(0, 4), 10);
                  isNaN(n) || (this.common.year = n);
                  break;
              case "discogs_label_id":
              case "discogs_release_id":
              case "discogs_master_release_id":
              case "discogs_artist_id":
              case "discogs_votes":
                  t.value = "string" === typeof t.value ? parseInt(t.value, 10) : t.value;
                  break;
              case "replaygain_track_gain":
              case "replaygain_track_peak":
              case "replaygain_album_gain":
              case "replaygain_album_peak":
                  t.value = c.toRatio(t.value);
                  break;
              case "replaygain_track_minmax":
                  t.value = t.value.split(",").map(e=>parseInt(e, 10));
                  break;
              case "replaygain_undo":
                  const a = t.value.split(",").map(e=>parseInt(e, 10));
                  t.value = {
                      leftChannel: a[0],
                      rightChannel: a[1]
                  };
                  break;
              case "gapless":
                  t.value = "1" === t.value;
                  break;
              case "isrc":
                  if (this.common[t.id] && -1 !== this.common[t.id].indexOf(t.value))
                      return;
                  break;
              default:
              }
              null !== t.value && this.setGenericTag(e, t)
          }
          toCommonMetadata() {
              return {
                  format: this.format,
                  native: this.native,
                  quality: this.quality,
                  common: this.common
              }
          }
          async postFixPicture(e) {
              if (e.data.length > 0) {
                  if (!e.format) {
                      const t = await u.fromBuffer(e.data);
                      if (!t)
                          return null;
                      e.format = t.mime
                  }
                  switch (e.format = e.format.toLocaleLowerCase(),
                  e.format) {
                  case "image/jpg":
                      e.format = "image/jpeg"
                  }
                  return e
              }
              return this.addWarning("Empty picture tag found"),
              null
          }
          toCommon(e, t, r) {
              const n = {
                  id: t,
                  value: r
              }
                , a = this.tagMapper.mapTag(e, n, this);
              a && this.postMap(e, a)
          }
          setGenericTag(e, t) {
              l(`common.${t.id} = ${t.value}`);
              const r = this.commonOrigin[t.id] || 1e3
                , n = this.originPriority[e];
              if (i.isSingleton(t.id)) {
                  if (!(n <= r))
                      return l(`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`);
                  this.common[t.id] = t.value,
                  this.commonOrigin[t.id] = n
              } else if (n === r)
                  i.isUnique(t.id) && -1 !== this.common[t.id].indexOf(t.value) ? l(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`) : this.common[t.id].push(t.value);
              else {
                  if (!(n < r))
                      return l(`Ignore native tag (list): ${e}.${t.id} = ${t.value}`);
                  this.common[t.id] = [t.value],
                  this.commonOrigin[t.id] = n
              }
              this.opts.observer && this.opts.observer({
                  metadata: this,
                  tag: {
                      type: "common",
                      id: t.id,
                      value: t.value
                  }
              })
          }
      }
      function h(e) {
          return e.length > 2 ? e.slice(0, e.length - 1).join(", ") + " & " + e[e.length - 1] : e.join(" & ")
      }
      t.MetadataCollector = d,
      t.joinArtists = h
  },
  "0497": function(e, t, r) {
      (function(t) {
          var n = r("a977").strict;
          e.exports = function(e) {
              if (n(e)) {
                  var r = t.from(e.buffer);
                  return e.byteLength !== e.buffer.byteLength && (r = r.slice(e.byteOffset, e.byteOffset + e.byteLength)),
                  r
              }
              return t.from(e)
          }
      }
      ).call(this, r("b639").Buffer)
  },
  "04cc": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("d3ab");
      t.Header = {
          len: 80,
          get: (e,t)=>({
              speex: new n.StringType(8,"ascii").get(e, t + 0),
              version: a.default.trimRightNull(new n.StringType(20,"ascii").get(e, t + 8)),
              version_id: e.readInt32LE(t + 28),
              header_size: e.readInt32LE(t + 32),
              rate: e.readInt32LE(t + 36),
              mode: e.readInt32LE(t + 40),
              mode_bitstream_version: e.readInt32LE(t + 44),
              nb_channels: e.readInt32LE(t + 48),
              bitrate: e.readInt32LE(t + 52),
              frame_size: e.readInt32LE(t + 56),
              vbr: e.readInt32LE(t + 60),
              frames_per_packet: e.readInt32LE(t + 64),
              extra_headers: e.readInt32LE(t + 68),
              reserved1: e.readInt32LE(t + 72),
              reserved2: e.readInt32LE(t + 76)
          })
      }
  },
  "0662": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("d3ab");
      (function(e) {
          e[e["Other"] = 0] = "Other",
          e[e["32x32 pixels 'file icon' (PNG only)"] = 1] = "32x32 pixels 'file icon' (PNG only)",
          e[e["Other file icon"] = 2] = "Other file icon",
          e[e["Cover (front)"] = 3] = "Cover (front)",
          e[e["Cover (back)"] = 4] = "Cover (back)",
          e[e["Leaflet page"] = 5] = "Leaflet page",
          e[e["Media (e.g. label side of CD)"] = 6] = "Media (e.g. label side of CD)",
          e[e["Lead artist/lead performer/soloist"] = 7] = "Lead artist/lead performer/soloist",
          e[e["Artist/performer"] = 8] = "Artist/performer",
          e[e["Conductor"] = 9] = "Conductor",
          e[e["Band/Orchestra"] = 10] = "Band/Orchestra",
          e[e["Composer"] = 11] = "Composer",
          e[e["Lyricist/text writer"] = 12] = "Lyricist/text writer",
          e[e["Recording Location"] = 13] = "Recording Location",
          e[e["During recording"] = 14] = "During recording",
          e[e["During performance"] = 15] = "During performance",
          e[e["Movie/video screen capture"] = 16] = "Movie/video screen capture",
          e[e["A bright coloured fish"] = 17] = "A bright coloured fish",
          e[e["Illustration"] = 18] = "Illustration",
          e[e["Band/artist logotype"] = 19] = "Band/artist logotype",
          e[e["Publisher/Studio logotype"] = 20] = "Publisher/Studio logotype"
      }
      )(t.AttachedPictureType || (t.AttachedPictureType = {})),
      t.UINT32SYNCSAFE = {
          get: (e,t)=>127 & e[t + 3] | e[t + 2] << 7 | e[t + 1] << 14 | e[t] << 21,
          len: 4
      },
      t.ID3v2Header = {
          len: 10,
          get: (e,r)=>({
              fileIdentifier: new n.StringType(3,"ascii").get(e, r),
              version: {
                  major: n.INT8.get(e, r + 3),
                  revision: n.INT8.get(e, r + 4)
              },
              flags: {
                  raw: n.INT8.get(e, r + 4),
                  unsynchronisation: a.default.strtokBITSET.get(e, r + 5, 7),
                  isExtendedHeader: a.default.strtokBITSET.get(e, r + 5, 6),
                  expIndicator: a.default.strtokBITSET.get(e, r + 5, 5),
                  footer: a.default.strtokBITSET.get(e, r + 5, 4)
              },
              size: t.UINT32SYNCSAFE.get(e, r + 6)
          })
      },
      t.ExtendedHeader = {
          len: 10,
          get: (e,t)=>({
              size: n.UINT32_BE.get(e, t),
              extendedFlags: n.UINT16_BE.get(e, t + 4),
              sizeOfPadding: n.UINT32_BE.get(e, t + 6),
              crcDataPresent: a.default.strtokBITSET.get(e, t + 4, 31)
          })
      },
      t.TextEncodingToken = {
          len: 1,
          get: (e,t)=>{
              switch (e.readUInt8(t)) {
              case 0:
                  return {
                      encoding: "iso-8859-1"
                  };
              case 1:
                  return {
                      encoding: "utf16",
                      bom: !0
                  };
              case 2:
                  return {
                      encoding: "utf16",
                      bom: !1
                  };
              case 3:
                  return {
                      encoding: "utf8",
                      bom: !1
                  };
              default:
                  return {
                      encoding: "utf8",
                      bom: !1
                  }
              }
          }
      }
  },
  "06cf": function(e, t, r) {
      var n = r("83ab")
        , a = r("d1e7")
        , i = r("5c6c")
        , o = r("fc6a")
        , s = r("c04e")
        , c = r("5135")
        , u = r("0cfb")
        , l = Object.getOwnPropertyDescriptor;
      t.f = n ? l : function(e, t) {
          if (e = o(e),
          t = s(t, !0),
          u)
              try {
                  return l(e, t)
              } catch (r) {}
          if (c(e, t))
              return i(!a.f.call(e, t), e[t])
      }
  },
  "06dc": function(e, t, r) {
      "use strict";
      r.d(t, "c", (function() {
          return a
      }
      )),
      r.d(t, "a", (function() {
          return c
      }
      )),
      r.d(t, "d", (function() {
          return u
      }
      )),
      r.d(t, "f", (function() {
          return f
      }
      )),
      r.d(t, "e", (function() {
          return d
      }
      )),
      r.d(t, "g", (function() {
          return h
      }
      )),
      r.d(t, "b", (function() {
          return p
      }
      ));
      r("a623"),
      r("fb6a"),
      r("d3b7"),
      r("ac1f"),
      r("3ca3"),
      r("1276"),
      r("498a"),
      r("ddb0"),
      r("2b3d"),
      r("96cf");
      var n = r("1da1")
        , a = [102, 76, 97, 67]
        , i = [73, 68, 51]
        , o = [79, 103, 103, 83]
        , s = [102, 116, 121, 112]
        , c = {
          mp3: "audio/mpeg",
          flac: "audio/flac",
          m4a: "audio/mp4",
          ogg: "audio/ogg"
      };
      function u(e) {
          return l.apply(this, arguments)
      }
      function l() {
          return l = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          new Promise((function(e) {
                              var r = new FileReader;
                              r.onload = function(t) {
                                  e(t.target.result)
                              }
                              ,
                              r.readAsArrayBuffer(t)
                          }
                          ));
                      case 2:
                          return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          l.apply(this, arguments)
      }
      function f(e, t, r) {
          var n = ""
            , a = ""
            , i = r.split("-");
          return i.length > 1 ? (n = i[0].trim(),
          a = i[1].trim()) : 1 === i.length && (a = i[0].trim()),
          "string" == typeof e && "" !== e && (n = e),
          "string" == typeof t && "" !== t && (a = t),
          {
              artist: n,
              title: a
          }
      }
      function d(e) {
          var t = "";
          if (void 0 !== e.common.picture && e.common.picture.length > 0) {
              var r = new Blob([e.common.picture[0].data],{
                  type: e.common.picture[0].format
              });
              t = URL.createObjectURL(r)
          }
          return t
      }
      function h(e, t) {
          return e.every((function(e, r) {
              return e === t[r]
          }
          ))
      }
      function p(e, t) {
          return h(i, e.slice(0, i.length)) ? "mp3" : h(a, e.slice(0, a.length)) ? "flac" : h(o, e.slice(0, o.length)) ? "ogg" : h(s, e.slice(4, 8)) ? "m4a" : t
      }
  },
  "0960": function(e, t, r) {
      e.exports = r("b19a")
  },
  "0b25": function(e, t, r) {
      var n = r("a691")
        , a = r("50c4");
      e.exports = function(e) {
          if (void 0 === e)
              return 0;
          var t = n(e)
            , r = a(t);
          if (t !== r)
              throw RangeError("Wrong length or index");
          return r
      }
  },
  "0cfb": function(e, t, r) {
      var n = r("83ab")
        , a = r("d039")
        , i = r("cc12");
      e.exports = !n && !a((function() {
          return 7 != Object.defineProperty(i("div"), "a", {
              get: function() {
                  return 7
              }
          }).a
      }
      ))
  },
  "0d3b": function(e, t, r) {
      var n = r("d039")
        , a = r("b622")
        , i = r("c430")
        , o = a("iterator");
      e.exports = !n((function() {
          var e = new URL("b?a=1&b=2&c=3","http://a")
            , t = e.searchParams
            , r = "";
          return e.pathname = "c%20d",
          t.forEach((function(e, n) {
              t["delete"]("b"),
              r += n + e
          }
          )),
          i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x",void 0).host
      }
      ))
  },
  1: function(e, t) {},
  "10a8": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("f3f0")
        , i = n("music-metadata:parser:ogg:theora");
      class o {
          constructor(e, t, r) {
              this.metadata = e,
              this.tokenizer = r
          }
          parsePage(e, t) {
              e.headerType.firstPage && this.parseFirstPage(e, t)
          }
          flush() {
              i("flush")
          }
          parseFirstPage(e, t) {
              i("First Ogg/Theora page"),
              this.metadata.setFormat("codec", "Theora");
              const r = a.IdentificationHeader.get(t, 0);
              this.metadata.setFormat("bitrate", r.nombr)
          }
      }
      t.TheoraParser = o
  },
  "10b7": function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          /** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
          return function(t) {
              var r = e
                , n = r.lib
                , a = n.WordArray
                , i = n.Hasher
                , o = r.algo
                , s = a.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
                , c = a.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
                , u = a.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
                , l = a.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
                , f = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
                , d = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
                , h = o.RIPEMD160 = i.extend({
                  _doReset: function() {
                      this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                  },
                  _doProcessBlock: function(e, t) {
                      for (var r = 0; r < 16; r++) {
                          var n = t + r
                            , a = e[n];
                          e[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                      }
                      var i, o, h, w, T, k, _, S, E, I, A, x = this._hash.words, B = f.words, C = d.words, P = s.words, O = c.words, M = u.words, D = l.words;
                      k = i = x[0],
                      _ = o = x[1],
                      S = h = x[2],
                      E = w = x[3],
                      I = T = x[4];
                      for (r = 0; r < 80; r += 1)
                          A = i + e[t + P[r]] | 0,
                          A += r < 16 ? p(o, h, w) + B[0] : r < 32 ? m(o, h, w) + B[1] : r < 48 ? g(o, h, w) + B[2] : r < 64 ? y(o, h, w) + B[3] : b(o, h, w) + B[4],
                          A |= 0,
                          A = v(A, M[r]),
                          A = A + T | 0,
                          i = T,
                          T = w,
                          w = v(h, 10),
                          h = o,
                          o = A,
                          A = k + e[t + O[r]] | 0,
                          A += r < 16 ? b(_, S, E) + C[0] : r < 32 ? y(_, S, E) + C[1] : r < 48 ? g(_, S, E) + C[2] : r < 64 ? m(_, S, E) + C[3] : p(_, S, E) + C[4],
                          A |= 0,
                          A = v(A, D[r]),
                          A = A + I | 0,
                          k = I,
                          I = E,
                          E = v(S, 10),
                          S = _,
                          _ = A;
                      A = x[1] + h + E | 0,
                      x[1] = x[2] + w + I | 0,
                      x[2] = x[3] + T + k | 0,
                      x[3] = x[4] + i + _ | 0,
                      x[4] = x[0] + o + S | 0,
                      x[0] = A
                  },
                  _doFinalize: function() {
                      var e = this._data
                        , t = e.words
                        , r = 8 * this._nDataBytes
                        , n = 8 * e.sigBytes;
                      t[n >>> 5] |= 128 << 24 - n % 32,
                      t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                      e.sigBytes = 4 * (t.length + 1),
                      this._process();
                      for (var a = this._hash, i = a.words, o = 0; o < 5; o++) {
                          var s = i[o];
                          i[o] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                      }
                      return a
                  },
                  clone: function() {
                      var e = i.clone.call(this);
                      return e._hash = this._hash.clone(),
                      e
                  }
              });
              function p(e, t, r) {
                  return e ^ t ^ r
              }
              function m(e, t, r) {
                  return e & t | ~e & r
              }
              function g(e, t, r) {
                  return (e | ~t) ^ r
              }
              function y(e, t, r) {
                  return e & r | t & ~r
              }
              function b(e, t, r) {
                  return e ^ (t | ~r)
              }
              function v(e, t) {
                  return e << t | e >>> 32 - t
              }
              r.RIPEMD160 = i._createHelper(h),
              r.HmacRIPEMD160 = i._createHmacHelper(h)
          }(Math),
          e.RIPEMD160
      }
      ))
  },
  1132: function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.WordArray
                , a = t.enc;
              a.Base64 = {
                  stringify: function(e) {
                      var t = e.words
                        , r = e.sigBytes
                        , n = this._map;
                      e.clamp();
                      for (var a = [], i = 0; i < r; i += 3)
                          for (var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255, s = t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, c = t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, u = o << 16 | s << 8 | c, l = 0; l < 4 && i + .75 * l < r; l++)
                              a.push(n.charAt(u >>> 6 * (3 - l) & 63));
                      var f = n.charAt(64);
                      if (f)
                          while (a.length % 4)
                              a.push(f);
                      return a.join("")
                  },
                  parse: function(e) {
                      var t = e.length
                        , r = this._map
                        , n = this._reverseMap;
                      if (!n) {
                          n = this._reverseMap = [];
                          for (var a = 0; a < r.length; a++)
                              n[r.charCodeAt(a)] = a
                      }
                      var o = r.charAt(64);
                      if (o) {
                          var s = e.indexOf(o);
                          -1 !== s && (t = s)
                      }
                      return i(e, t, n)
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              };
              function i(e, t, r) {
                  for (var a = [], i = 0, o = 0; o < t; o++)
                      if (o % 4) {
                          var s = r[e.charCodeAt(o - 1)] << o % 4 * 2
                            , c = r[e.charCodeAt(o)] >>> 6 - o % 4 * 2
                            , u = s | c;
                          a[i >>> 2] |= u << 24 - i % 4 * 8,
                          i++
                      }
                  return n.create(a, i)
              }
          }(),
          e.enc.Base64
      }
      ))
  },
  1276: function(e, t, r) {
      "use strict";
      var n = r("d784")
        , a = r("44e7")
        , i = r("825a")
        , o = r("1d80")
        , s = r("4840")
        , c = r("8aa5")
        , u = r("50c4")
        , l = r("14c3")
        , f = r("9263")
        , d = r("d039")
        , h = [].push
        , p = Math.min
        , m = 4294967295
        , g = !d((function() {
          return !RegExp(m, "y")
      }
      ));
      n("split", 2, (function(e, t, r) {
          var n;
          return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, r) {
              var n = String(o(this))
                , i = void 0 === r ? m : r >>> 0;
              if (0 === i)
                  return [];
              if (void 0 === e)
                  return [n];
              if (!a(e))
                  return t.call(n, e, i);
              var s, c, u, l = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), p = 0, g = new RegExp(e.source,d + "g");
              while (s = f.call(g, n)) {
                  if (c = g.lastIndex,
                  c > p && (l.push(n.slice(p, s.index)),
                  s.length > 1 && s.index < n.length && h.apply(l, s.slice(1)),
                  u = s[0].length,
                  p = c,
                  l.length >= i))
                      break;
                  g.lastIndex === s.index && g.lastIndex++
              }
              return p === n.length ? !u && g.test("") || l.push("") : l.push(n.slice(p)),
              l.length > i ? l.slice(0, i) : l
          }
          : "0".split(void 0, 0).length ? function(e, r) {
              return void 0 === e && 0 === r ? [] : t.call(this, e, r)
          }
          : t,
          [function(t, r) {
              var a = o(this)
                , i = void 0 == t ? void 0 : t[e];
              return void 0 !== i ? i.call(t, a, r) : n.call(String(a), t, r)
          }
          , function(e, a) {
              var o = r(n, e, this, a, n !== t);
              if (o.done)
                  return o.value;
              var f = i(e)
                , d = String(this)
                , h = s(f, RegExp)
                , y = f.unicode
                , b = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "y" : "g")
                , v = new h(g ? f : "^(?:" + f.source + ")",b)
                , w = void 0 === a ? m : a >>> 0;
              if (0 === w)
                  return [];
              if (0 === d.length)
                  return null === l(v, d) ? [d] : [];
              var T = 0
                , k = 0
                , _ = [];
              while (k < d.length) {
                  v.lastIndex = g ? k : 0;
                  var S, E = l(v, g ? d : d.slice(k));
                  if (null === E || (S = p(u(v.lastIndex + (g ? 0 : k)), d.length)) === T)
                      k = c(d, k, y);
                  else {
                      if (_.push(d.slice(T, k)),
                      _.length === w)
                          return _;
                      for (var I = 1; I <= E.length - 1; I++)
                          if (_.push(E[I]),
                          _.length === w)
                              return _;
                      k = T = S
                  }
              }
              return _.push(d.slice(T)),
              _
          }
          ]
      }
      ), !g)
  },
  1382: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("1132"), r("72fe"), r("2b79"), r("38ba"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.StreamCipher
                , a = t.algo
                , i = []
                , o = []
                , s = []
                , c = a.Rabbit = n.extend({
                  _doReset: function() {
                      for (var e = this._key.words, t = this.cfg.iv, r = 0; r < 4; r++)
                          e[r] = 16711935 & (e[r] << 8 | e[r] >>> 24) | 4278255360 & (e[r] << 24 | e[r] >>> 8);
                      var n = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16]
                        , a = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                      this._b = 0;
                      for (r = 0; r < 4; r++)
                          u.call(this);
                      for (r = 0; r < 8; r++)
                          a[r] ^= n[r + 4 & 7];
                      if (t) {
                          var i = t.words
                            , o = i[0]
                            , s = i[1]
                            , c = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
                            , l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                            , f = c >>> 16 | 4294901760 & l
                            , d = l << 16 | 65535 & c;
                          a[0] ^= c,
                          a[1] ^= f,
                          a[2] ^= l,
                          a[3] ^= d,
                          a[4] ^= c,
                          a[5] ^= f,
                          a[6] ^= l,
                          a[7] ^= d;
                          for (r = 0; r < 4; r++)
                              u.call(this)
                      }
                  },
                  _doProcessBlock: function(e, t) {
                      var r = this._X;
                      u.call(this),
                      i[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16,
                      i[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16,
                      i[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16,
                      i[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
                      for (var n = 0; n < 4; n++)
                          i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8),
                          e[t + n] ^= i[n]
                  },
                  blockSize: 4,
                  ivSize: 2
              });
              function u() {
                  for (var e = this._X, t = this._C, r = 0; r < 8; r++)
                      o[r] = t[r];
                  t[0] = t[0] + 1295307597 + this._b | 0,
                  t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0,
                  t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0,
                  t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0,
                  t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0,
                  t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0,
                  t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0,
                  t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0,
                  this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
                  for (r = 0; r < 8; r++) {
                      var n = e[r] + t[r]
                        , a = 65535 & n
                        , i = n >>> 16
                        , c = ((a * a >>> 17) + a * i >>> 15) + i * i
                        , u = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
                      s[r] = c ^ u
                  }
                  e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0,
                  e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0,
                  e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0,
                  e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0,
                  e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0,
                  e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0,
                  e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0,
                  e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
              }
              t.Rabbit = n._createHelper(c)
          }(),
          e.Rabbit
      }
      ))
  },
  "145e": function(e, t, r) {
      "use strict";
      var n = r("7b0b")
        , a = r("23cb")
        , i = r("50c4")
        , o = Math.min;
      e.exports = [].copyWithin || function(e, t) {
          var r = n(this)
            , s = i(r.length)
            , c = a(e, s)
            , u = a(t, s)
            , l = arguments.length > 2 ? arguments[2] : void 0
            , f = o((void 0 === l ? s : a(l, s)) - u, s - c)
            , d = 1;
          u < c && c < u + f && (d = -1,
          u += f - 1,
          c += f - 1);
          while (f-- > 0)
              u in r ? r[c] = r[u] : delete r[c],
              c += d,
              u += d;
          return r
      }
  },
  1468: function(e, t) {
      var r = 1e3
        , n = 60 * r
        , a = 60 * n
        , i = 24 * a
        , o = 7 * i
        , s = 365.25 * i;
      function c(e) {
          if (e = String(e),
          !(e.length > 100)) {
              var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
              if (t) {
                  var c = parseFloat(t[1])
                    , u = (t[2] || "ms").toLowerCase();
                  switch (u) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                      return c * s;
                  case "weeks":
                  case "week":
                  case "w":
                      return c * o;
                  case "days":
                  case "day":
                  case "d":
                      return c * i;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                      return c * a;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                      return c * n;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                      return c * r;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                      return c;
                  default:
                      return
                  }
              }
          }
      }
      function u(e) {
          var t = Math.abs(e);
          return t >= i ? Math.round(e / i) + "d" : t >= a ? Math.round(e / a) + "h" : t >= n ? Math.round(e / n) + "m" : t >= r ? Math.round(e / r) + "s" : e + "ms"
      }
      function l(e) {
          var t = Math.abs(e);
          return t >= i ? f(e, t, i, "day") : t >= a ? f(e, t, a, "hour") : t >= n ? f(e, t, n, "minute") : t >= r ? f(e, t, r, "second") : e + " ms"
      }
      function f(e, t, r, n) {
          var a = t >= 1.5 * r;
          return Math.round(e / r) + " " + n + (a ? "s" : "")
      }
      e.exports = function(e, t) {
          t = t || {};
          var r = typeof e;
          if ("string" === r && e.length > 0)
              return c(e);
          if ("number" === r && isFinite(e))
              return t.long ? l(e) : u(e);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
      }
  },
  "14c3": function(e, t, r) {
      var n = r("c6b6")
        , a = r("9263");
      e.exports = function(e, t) {
          var r = e.exec;
          if ("function" === typeof r) {
              var i = r.call(e, t);
              if ("object" !== typeof i)
                  throw TypeError("RegExp exec method returned something other than an Object or null");
              return i
          }
          if ("RegExp" !== n(e))
              throw TypeError("RegExp#exec called on incompatible receiver");
          return a.call(e, t)
      }
  },
  "150c": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("98a7")
        , i = r("f654")
        , o = r("34eb")
        , s = o("music-metadata:parser:MP4:atom");
      t.Header = {
          len: 8,
          get: (e,t)=>{
              const r = n.UINT32_BE.get(e, t);
              if (r < 0)
                  throw new Error("Invalid atom header length");
              return {
                  length: r,
                  name: a.FourCcToken.get(e, t + 4)
              }
          }
          ,
          put: (e,t,r)=>(n.UINT32_BE.put(e, t, r.length),
          a.FourCcToken.put(e, t + 4, r.name))
      },
      t.ExtendedSize = n.UINT64_BE,
      t.ftyp = {
          len: 4,
          get: (e,t)=>({
              type: new n.StringType(4,"ascii").get(e, t)
          })
      },
      t.tkhd = {
          len: 4,
          get: (e,t)=>({
              type: new n.StringType(4,"ascii").get(e, t)
          })
      },
      t.mhdr = {
          len: 8,
          get: (e,t)=>({
              version: n.UINT8.get(e, t + 0),
              flags: n.UINT24_BE.get(e, t + 1),
              nextItemID: n.UINT32_BE.get(e, t + 4)
          })
      };
      class c {
          constructor(e, t, r) {
              if (this.len = e,
              e < t)
                  throw new Error(`Atom ${r} expected to be ${t}, but specifies ${e} bytes long.`);
              e > t && s(`Warning: atom ${r} expected to be ${t}, but was actually ${e} bytes long.`)
          }
      }
      t.FixedLengthAtom = c;
      class u extends c {
          constructor(e) {
              super(e, 24, "mdhd"),
              this.len = e
          }
          get(e, t) {
              return {
                  version: n.UINT8.get(e, t + 0),
                  flags: n.UINT24_BE.get(e, t + 1),
                  creationTime: n.UINT32_BE.get(e, t + 4),
                  modificationTime: n.UINT32_BE.get(e, t + 8),
                  timeScale: n.UINT32_BE.get(e, t + 12),
                  duration: n.UINT32_BE.get(e, t + 16),
                  language: n.UINT16_BE.get(e, t + 20),
                  quality: n.UINT16_BE.get(e, t + 22)
              }
          }
      }
      t.MdhdAtom = u;
      class l extends c {
          constructor(e) {
              super(e, 100, "mvhd"),
              this.len = e
          }
          get(e, t) {
              return {
                  version: n.UINT8.get(e, t),
                  flags: n.UINT24_BE.get(e, t + 1),
                  creationTime: n.UINT32_BE.get(e, t + 4),
                  modificationTime: n.UINT32_BE.get(e, t + 8),
                  timeScale: n.UINT32_BE.get(e, t + 12),
                  duration: n.UINT32_BE.get(e, t + 16),
                  preferredRate: n.UINT32_BE.get(e, t + 20),
                  preferredVolume: n.UINT16_BE.get(e, t + 24),
                  previewTime: n.UINT32_BE.get(e, t + 72),
                  previewDuration: n.UINT32_BE.get(e, t + 76),
                  posterTime: n.UINT32_BE.get(e, t + 80),
                  selectionTime: n.UINT32_BE.get(e, t + 84),
                  selectionDuration: n.UINT32_BE.get(e, t + 88),
                  currentTime: n.UINT32_BE.get(e, t + 92),
                  nextTrackID: n.UINT32_BE.get(e, t + 96)
              }
          }
      }
      t.MvhdAtom = l;
      class f {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              return {
                  type: {
                      set: n.UINT8.get(e, t + 0),
                      type: n.UINT24_BE.get(e, t + 1)
                  },
                  locale: n.UINT24_BE.get(e, t + 4),
                  value: new n.BufferType(this.len - 8).get(e, t + 8)
              }
          }
      }
      t.DataAtom = f;
      class d {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              return {
                  version: n.UINT8.get(e, t),
                  flags: n.UINT24_BE.get(e, t + 1),
                  name: new n.StringType(this.len - 4,"utf-8").get(e, t + 4)
              }
          }
      }
      t.NameAtom = d;
      class h {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              return {
                  version: n.UINT8.get(e, t),
                  flags: n.UINT24_BE.get(e, t + 1),
                  creationTime: n.UINT32_BE.get(e, t + 4),
                  modificationTime: n.UINT32_BE.get(e, t + 8),
                  trackId: n.UINT32_BE.get(e, t + 12),
                  duration: n.UINT32_BE.get(e, t + 20),
                  layer: n.UINT16_BE.get(e, t + 24),
                  alternateGroup: n.UINT16_BE.get(e, t + 26),
                  volume: n.UINT16_BE.get(e, t + 28)
              }
          }
      }
      t.TrackHeaderAtom = h;
      const p = {
          len: 8,
          get: (e,t)=>({
              version: n.UINT8.get(e, t),
              flags: n.UINT24_BE.get(e, t + 1),
              numberOfEntries: n.UINT32_BE.get(e, t + 4)
          })
      };
      class m {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              return {
                  dataFormat: a.FourCcToken.get(e, t),
                  dataReferenceIndex: n.UINT16_BE.get(e, t + 10),
                  description: new n.BufferType(this.len - 12).get(e, t + 12)
              }
          }
      }
      class g {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              const r = p.get(e, t);
              t += p.len;
              const a = [];
              for (let i = 0; i < r.numberOfEntries; ++i) {
                  const r = n.UINT32_BE.get(e, t);
                  t += n.UINT32_BE.len,
                  a.push(new m(r).get(e, t)),
                  t += r
              }
              return {
                  header: r,
                  table: a
              }
          }
      }
      t.StsdAtom = g,
      t.SoundSampleDescriptionVersion = {
          len: 8,
          get(e, t) {
              return {
                  version: n.INT16_BE.get(e, t),
                  revision: n.INT16_BE.get(e, t + 2),
                  vendor: n.INT32_BE.get(e, t + 4)
              }
          }
      },
      t.SoundSampleDescriptionV0 = {
          len: 12,
          get(e, t) {
              return {
                  numAudioChannels: n.INT16_BE.get(e, t + 0),
                  sampleSize: n.INT16_BE.get(e, t + 2),
                  compressionId: n.INT16_BE.get(e, t + 4),
                  packetSize: n.INT16_BE.get(e, t + 6),
                  sampleRate: n.UINT16_BE.get(e, t + 8) + n.UINT16_BE.get(e, t + 10) / 1e4
              }
          }
      };
      class y {
          constructor(e, t) {
              this.len = e,
              this.token = t
          }
          get(e, t) {
              const r = n.INT32_BE.get(e, t + 4);
              return {
                  version: n.INT8.get(e, t + 0),
                  flags: n.INT24_BE.get(e, t + 1),
                  numberOfEntries: r,
                  entries: _(e, this.token, t + 8, this.len - 8, r)
              }
          }
      }
      t.TimeToSampleToken = {
          len: 8,
          get(e, t) {
              return {
                  count: n.INT32_BE.get(e, t + 0),
                  duration: n.INT32_BE.get(e, t + 4)
              }
          }
      };
      class b extends y {
          constructor(e) {
              super(e, t.TimeToSampleToken),
              this.len = e
          }
      }
      t.SttsAtom = b,
      t.SampleToChunkToken = {
          len: 12,
          get(e, t) {
              return {
                  firstChunk: n.INT32_BE.get(e, t),
                  samplesPerChunk: n.INT32_BE.get(e, t + 4),
                  sampleDescriptionId: n.INT32_BE.get(e, t + 8)
              }
          }
      };
      class v extends y {
          constructor(e) {
              super(e, t.SampleToChunkToken),
              this.len = e
          }
      }
      t.StscAtom = v;
      class w {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              const r = n.INT32_BE.get(e, t + 8);
              return {
                  version: n.INT8.get(e, t),
                  flags: n.INT24_BE.get(e, t + 1),
                  sampleSize: n.INT32_BE.get(e, t + 4),
                  numberOfEntries: r,
                  entries: _(e, n.INT32_BE, t + 12, this.len - 12, r)
              }
          }
      }
      t.StszAtom = w;
      class T extends y {
          constructor(e) {
              super(e, n.INT32_BE),
              this.len = e
          }
      }
      t.StcoAtom = T;
      class k {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              const r = n.INT16_BE.get(e, t + 0)
                , a = new n.StringType(r,"utf-8");
              return a.get(e, t + 2)
          }
      }
      function _(e, t, r, n, a) {
          if (s(`remainingLen=${n}, numberOfEntries=${a} * token-len=${t.len}`),
          0 === n)
              return [];
          i.equal(n, a * t.len, "mismatch number-of-entries with remaining atom-length");
          const o = [];
          for (let i = 0; i < a; ++i)
              o.push(t.get(e, r)),
              r += t.len;
          return o
      }
      t.ChapterText = k
  },
  "159b": function(e, t, r) {
      var n = r("da84")
        , a = r("fdbc")
        , i = r("17c2")
        , o = r("9112");
      for (var s in a) {
          var c = n[s]
            , u = c && c.prototype;
          if (u && u.forEach !== i)
              try {
                  o(u, "forEach", i)
              } catch (l) {
                  u.forEach = i
              }
      }
  },
  "15bf": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("53d6")
        , a = {
          Title: "title",
          Artist: "artist",
          Artists: "artists",
          "Album Artist": "albumartist",
          Album: "album",
          Year: "date",
          Originalyear: "originalyear",
          Originaldate: "originaldate",
          Comment: "comment",
          Track: "track",
          Disc: "disk",
          DISCNUMBER: "disk",
          Genre: "genre",
          "Cover Art (Front)": "picture",
          "Cover Art (Back)": "picture",
          Composer: "composer",
          Lyrics: "lyrics",
          ALBUMSORT: "albumsort",
          TITLESORT: "titlesort",
          WORK: "work",
          ARTISTSORT: "artistsort",
          ALBUMARTISTSORT: "albumartistsort",
          COMPOSERSORT: "composersort",
          Lyricist: "lyricist",
          Writer: "writer",
          Conductor: "conductor",
          MixArtist: "remixer",
          Arranger: "arranger",
          Engineer: "engineer",
          Producer: "producer",
          DJMixer: "djmixer",
          Mixer: "mixer",
          Label: "label",
          Grouping: "grouping",
          Subtitle: "subtitle",
          DiscSubtitle: "discsubtitle",
          Compilation: "compilation",
          BPM: "bpm",
          Mood: "mood",
          Media: "media",
          CatalogNumber: "catalognumber",
          MUSICBRAINZ_ALBUMSTATUS: "releasestatus",
          MUSICBRAINZ_ALBUMTYPE: "releasetype",
          RELEASECOUNTRY: "releasecountry",
          Script: "script",
          Language: "language",
          Copyright: "copyright",
          LICENSE: "license",
          EncodedBy: "encodedby",
          EncoderSettings: "encodersettings",
          Barcode: "barcode",
          ISRC: "isrc",
          ASIN: "asin",
          musicbrainz_trackid: "musicbrainz_recordingid",
          musicbrainz_releasetrackid: "musicbrainz_trackid",
          MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
          MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
          MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
          MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
          MUSICBRAINZ_WORKID: "musicbrainz_workid",
          MUSICBRAINZ_TRMID: "musicbrainz_trmid",
          MUSICBRAINZ_DISCID: "musicbrainz_discid",
          Acoustid_Id: "acoustid_id",
          ACOUSTID_FINGERPRINT: "acoustid_fingerprint",
          MUSICIP_PUID: "musicip_puid",
          Weblink: "website",
          REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
          REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
          MP3GAIN_MINMAX: "replaygain_track_minmax",
          MP3GAIN_UNDO: "replaygain_undo"
      };
      class i extends n.CaseInsensitiveTagMap {
          constructor() {
              super(["APEv2"], a)
          }
      }
      t.APEv2TagMapper = i
  },
  "170b": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("50c4")
        , i = r("23cb")
        , o = r("4840")
        , s = n.aTypedArray
        , c = n.exportTypedArrayMethod;
      c("subarray", (function(e, t) {
          var r = s(this)
            , n = r.length
            , c = i(e, n);
          return new (o(r, r.constructor))(r.buffer,r.byteOffset + c * r.BYTES_PER_ELEMENT,a((void 0 === t ? n : i(t, n)) - c))
      }
      ))
  },
  "17c2": function(e, t, r) {
      "use strict";
      var n = r("b727").forEach
        , a = r("a640")
        , i = r("ae40")
        , o = a("forEach")
        , s = i("forEach");
      e.exports = o && s ? [].forEach : function(e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
      }
  },
  "17e1": function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function() {
              if ("function" == typeof ArrayBuffer) {
                  var t = e
                    , r = t.lib
                    , n = r.WordArray
                    , a = n.init
                    , i = n.init = function(e) {
                      if (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                      (e instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),
                      e instanceof Uint8Array) {
                          for (var t = e.byteLength, r = [], n = 0; n < t; n++)
                              r[n >>> 2] |= e[n] << 24 - n % 4 * 8;
                          a.call(this, r, t)
                      } else
                          a.apply(this, arguments)
                  }
                  ;
                  i.prototype = n
              }
          }(),
          e.lib.WordArray
      }
      ))
  },
  "182d": function(e, t, r) {
      var n = r("f8cd");
      e.exports = function(e, t) {
          var r = n(e);
          if (r % t)
              throw RangeError("Wrong offset");
          return r
      }
  },
  "191b": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("94f8"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.WordArray
                , a = t.algo
                , i = a.SHA256
                , o = a.SHA224 = i.extend({
                  _doReset: function() {
                      this._hash = new n.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                  },
                  _doFinalize: function() {
                      var e = i._doFinalize.call(this);
                      return e.sigBytes -= 4,
                      e
                  }
              });
              t.SHA224 = i._createHelper(o),
              t.HmacSHA224 = i._createHmacHelper(o)
          }(),
          e.SHA224
      }
      ))
  },
  "19aa": function(e, t) {
      e.exports = function(e, t, r) {
          if (!(e instanceof t))
              throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
          return e
      }
  },
  "1be4": function(e, t, r) {
      var n = r("d066");
      e.exports = n("document", "documentElement")
  },
  "1c0b": function(e, t) {
      e.exports = function(e) {
          if ("function" != typeof e)
              throw TypeError(String(e) + " is not a function");
          return e
      }
  },
  "1c7e": function(e, t, r) {
      var n = r("b622")
        , a = n("iterator")
        , i = !1;
      try {
          var o = 0
            , s = {
              next: function() {
                  return {
                      done: !!o++
                  }
              },
              return: function() {
                  i = !0
              }
          };
          s[a] = function() {
              return this
          }
          ,
          Array.from(s, (function() {
              throw 2
          }
          ))
      } catch (c) {}
      e.exports = function(e, t) {
          if (!t && !i)
              return !1;
          var r = !1;
          try {
              var n = {};
              n[a] = function() {
                  return {
                      next: function() {
                          return {
                              done: r = !0
                          }
                      }
                  }
              }
              ,
              e(n)
          } catch (c) {}
          return r
      }
  },
  "1cdc": function(e, t, r) {
      var n = r("342f");
      e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n)
  },
  "1d55": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("98a7");
      function i(e) {
          return {
              containsHeader: o(e, 31),
              containsFooter: o(e, 30),
              isHeader: o(e, 31),
              readOnly: o(e, 0),
              dataType: (6 & e) >> 1
          }
      }
      function o(e, t) {
          return 0 !== (e & 1 << t)
      }
      (function(e) {
          e[e["text_utf8"] = 0] = "text_utf8",
          e[e["binary"] = 1] = "binary",
          e[e["external_info"] = 2] = "external_info",
          e[e["reserved"] = 3] = "reserved"
      }
      )(t.DataType || (t.DataType = {})),
      t.DescriptorParser = {
          len: 52,
          get: (e,t)=>({
              ID: a.FourCcToken.get(e, t),
              version: n.UINT32_LE.get(e, t + 4) / 1e3,
              descriptorBytes: n.UINT32_LE.get(e, t + 8),
              headerBytes: n.UINT32_LE.get(e, t + 12),
              seekTableBytes: n.UINT32_LE.get(e, t + 16),
              headerDataBytes: n.UINT32_LE.get(e, t + 20),
              apeFrameDataBytes: n.UINT32_LE.get(e, t + 24),
              apeFrameDataBytesHigh: n.UINT32_LE.get(e, t + 28),
              terminatingDataBytes: n.UINT32_LE.get(e, t + 32),
              fileMD5: new n.BufferType(16).get(e, t + 36)
          })
      },
      t.Header = {
          len: 24,
          get: (e,t)=>({
              compressionLevel: n.UINT16_LE.get(e, t),
              formatFlags: n.UINT16_LE.get(e, t + 2),
              blocksPerFrame: n.UINT32_LE.get(e, t + 4),
              finalFrameBlocks: n.UINT32_LE.get(e, t + 8),
              totalFrames: n.UINT32_LE.get(e, t + 12),
              bitsPerSample: n.UINT16_LE.get(e, t + 16),
              channel: n.UINT16_LE.get(e, t + 18),
              sampleRate: n.UINT32_LE.get(e, t + 20)
          })
      },
      t.TagFooter = {
          len: 32,
          get: (e,t)=>({
              ID: new n.StringType(8,"ascii").get(e, t),
              version: n.UINT32_LE.get(e, t + 8),
              size: n.UINT32_LE.get(e, t + 12),
              fields: n.UINT32_LE.get(e, t + 16),
              flags: i(n.UINT32_LE.get(e, t + 20))
          })
      },
      t.TagItemHeader = {
          len: 8,
          get: (e,t)=>({
              size: n.UINT32_LE.get(e, t),
              flags: i(n.UINT32_LE.get(e, t + 4))
          })
      },
      t.TagField = e=>new n.BufferType(e.size - t.TagFooter.len),
      t.parseTagFlags = i,
      t.isBitSet = o
  },
  "1d80": function(e, t) {
      e.exports = function(e) {
          if (void 0 == e)
              throw TypeError("Can't call method on " + e);
          return e
      }
  },
  "1da1": function(e, t, r) {
      "use strict";
      r.d(t, "a", (function() {
          return a
      }
      ));
      r("d3b7"),
      r("e6cf");
      function n(e, t, r, n, a, i, o) {
          try {
              var s = e[i](o)
                , c = s.value
          } catch (u) {
              return void r(u)
          }
          s.done ? t(c) : Promise.resolve(c).then(n, a)
      }
      function a(e) {
          return function() {
              var t = this
                , r = arguments;
              return new Promise((function(a, i) {
                  var o = e.apply(t, r);
                  function s(e) {
                      n(o, a, i, s, c, "next", e)
                  }
                  function c(e) {
                      n(o, a, i, s, c, "throw", e)
                  }
                  s(void 0)
              }
              ))
          }
      }
  },
  "1dde": function(e, t, r) {
      var n = r("d039")
        , a = r("b622")
        , i = r("2d00")
        , o = a("species");
      e.exports = function(e) {
          return i >= 51 || !n((function() {
              var t = []
                , r = t.constructor = {};
              return r[o] = function() {
                  return {
                      foo: 1
                  }
              }
              ,
              1 !== t[e](Boolean).foo
          }
          ))
      }
  },
  "1e48": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("a046")
            , a = r("20f8")
            , i = r("34eb")
            , o = i("strtok3:ReadStreamTokenizer")
            , s = 1e6;
          class c extends n.AbstractTokenizer {
              constructor(e, t) {
                  super(t),
                  this.streamReader = new a.StreamReader(e)
              }
              async getFileInfo() {
                  return this.fileInfo
              }
              async readBuffer(e, t) {
                  let r = 0
                    , n = e.length;
                  if (t) {
                      if (Number.isInteger(t.length) ? n = t.length : n -= t.offset || 0,
                      t.position) {
                          const r = t.position - this.position;
                          if (r > 0)
                              return await this.ignore(r),
                              this.readBuffer(e, t);
                          if (r < 0)
                              throw new Error("`options.position` can be less than `tokenizer.position`")
                      }
                      t.offset && (r = t.offset)
                  }
                  if (0 === n)
                      return 0;
                  const i = await this.streamReader.read(e, r, n);
                  if (this.position += i,
                  (!t || !t.mayBeLess) && i < n)
                      throw new a.EndOfStreamError;
                  return i
              }
              async peekBuffer(t, r) {
                  let n, i = 0, o = t.length;
                  if (r && (r.offset && (i = r.offset),
                  Number.isInteger(r.length) ? o = r.length : o -= r.offset || 0,
                  r.position)) {
                      const a = r.position - this.position;
                      if (a > 0) {
                          const s = e.alloc(o + a);
                          return n = await this.peekBuffer(s, {
                              mayBeLess: r.mayBeLess
                          }),
                          s.copy(t, i, a),
                          n - a
                      }
                      if (a < 0)
                          throw new Error("Cannot peek from a negative offset in a stream")
                  }
                  if (n = await this.streamReader.peek(t, i, o),
                  (!r || !r.mayBeLess) && n < o)
                      throw new a.EndOfStreamError;
                  return n
              }
              async ignore(t) {
                  o(`ignore ${this.position}...${this.position + t - 1}`);
                  const r = Math.min(s, t)
                    , n = e.alloc(r);
                  let a = 0;
                  while (a < t) {
                      const e = t - a
                        , i = await this.readBuffer(n, {
                          length: Math.min(r, e)
                      });
                      if (i < 0)
                          return i;
                      a += i
                  }
                  return a
              }
          }
          t.ReadStreamTokenizer = c
      }
      ).call(this, r("b639").Buffer)
  },
  "1e78": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("34eb")
            , a = r("d3ab")
            , i = r("6f58")
            , o = r("95c9")
            , s = r("9611")
            , c = n("music-metadata:parser:ID3v1");
          t.Genres = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "Alt. Rock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta Rap", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychedelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk/Rock", "National Folk", "Swing", "Fast-Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "A Cappella", "Euro-House", "Dance Hall", "Goa", "Drum & Bass", "Club-House", "Hardcore", "Terror", "Indie", "BritPop", "Negerpunk", "Polsk Punk", "Beat", "Christian Gangsta Rap", "Heavy Metal", "Black Metal", "Crossover", "Contemporary Christian", "Christian Rock", "Merengue", "Salsa", "Thrash Metal", "Anime", "JPop", "Synthpop", "Abstract", "Art Rock", "Baroque", "Bhangra", "Big Beat", "Breakbeat", "Chillout", "Downtempo", "Dub", "EBM", "Eclectic", "Electro", "Electroclash", "Emo", "Experimental", "Garage", "Global", "IDM", "Illbient", "Industro-Goth", "Jam Band", "Krautrock", "Leftfield", "Lounge", "Math Rock", "New Romantic", "Nu-Breakz", "Post-Punk", "Post-Rock", "Psytrance", "Shoegaze", "Space Rock", "Trop Rock", "World Music", "Neoclassical", "Audiobook", "Audio Theatre", "Neue Deutsche Welle", "Podcast", "Indie Rock", "G-Funk", "Dubstep", "Garage Rock", "Psybient"];
          const u = {
              len: 128,
              get: (e,t)=>{
                  const r = new l(3).get(e, t);
                  return "TAG" === r ? {
                      header: r,
                      title: new l(30).get(e, t + 3),
                      artist: new l(30).get(e, t + 33),
                      album: new l(30).get(e, t + 63),
                      year: new l(4).get(e, t + 93),
                      comment: new l(28).get(e, t + 97),
                      zeroByte: i.UINT8.get(e, t + 127),
                      track: i.UINT8.get(e, t + 126),
                      genre: i.UINT8.get(e, t + 127)
                  } : null
              }
          };
          class l extends i.StringType {
              constructor(e) {
                  super(e, "binary")
              }
              get(e, t) {
                  let r = super.get(e, t);
                  return r = a.default.trimRightNull(r),
                  r = r.trim(),
                  r.length > 0 ? r : void 0
              }
          }
          class f extends o.BasicParser {
              static getGenre(e) {
                  if (e < t.Genres.length)
                      return t.Genres[e]
              }
              async parse() {
                  if (!this.tokenizer.fileInfo.size)
                      return void c("Skip checking for ID3v1 because the file-size is unknown");
                  if (this.options.apeHeader) {
                      this.tokenizer.ignore(this.options.apeHeader.offset - this.tokenizer.position);
                      const e = new s.APEv2Parser;
                      e.init(this.metadata, this.tokenizer, this.options),
                      await e.parseTags(this.options.apeHeader.footer)
                  }
                  const e = this.tokenizer.fileInfo.size - u.len;
                  if (this.tokenizer.position > e)
                      return void c("Already consumed the last 128 bytes");
                  const t = await this.tokenizer.readToken(u, e);
                  if (t) {
                      c("ID3v1 header found at: pos=%s", this.tokenizer.fileInfo.size - u.len);
                      for (const r of ["title", "artist", "album", "comment", "track", "year"])
                          t[r] && "" !== t[r] && this.addTag(r, t[r]);
                      const e = f.getGenre(t.genre);
                      e && this.addTag("genre", e)
                  } else
                      c("ID3v1 header not found at: pos=%s", this.tokenizer.fileInfo.size - u.len)
              }
              addTag(e, t) {
                  this.metadata.addTag("ID3v1", e, t)
              }
          }
          async function d(t) {
              if (t.fileSize >= 128) {
                  const r = e.alloc(3);
                  return await t.randomRead(r, 0, r.length, t.fileSize - 128),
                  "TAG" === r.toString("binary")
              }
              return !1
          }
          t.ID3v1Parser = f,
          t.hasID3v1Header = d
      }
      ).call(this, r("b639").Buffer)
  },
  "1f2b": function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, "CommonDecrypt", (function() {
          return c
      }
      ));
      r("baa5"),
      r("b0c0"),
      r("96cf");
      var n = r("1da1")
        , a = r("dde9")
        , i = r("b6cf")
        , o = r("fd2f")
        , s = r("a8ee");
      function c(e) {
          return u.apply(this, arguments)
      }
      function u() {
          return u = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
              var r, n, c;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          r = t.name.substring(t.name.lastIndexOf(".") + 1, t.name.length).toLowerCase(),
                          n = t.name.substring(0, t.name.lastIndexOf(".")),
                          e.t0 = r,
                          e.next = "ncm" === e.t0 ? 5 : "mp3" === e.t0 ? 9 : "flac" === e.t0 ? 9 : "m4a" === e.t0 ? 9 : "ogg" === e.t0 ? 9 : "tm0" === e.t0 ? 13 : "tm3" === e.t0 ? 13 : "qmc3" === e.t0 ? 17 : "qmc0" === e.t0 ? 17 : "qmcflac" === e.t0 ? 17 : "qmcogg" === e.t0 ? 17 : "tkm" === e.t0 ? 17 : "bkcmp3" === e.t0 ? 17 : "bkcflac" === e.t0 ? 17 : "mflac" === e.t0 ? 17 : "mgg" === e.t0 ? 17 : "tm2" === e.t0 ? 21 : "tm6" === e.t0 ? 21 : 25;
                          break;
                      case 5:
                          return e.next = 7,
                          a.Decrypt(t.raw);
                      case 7:
                          return c = e.sent,
                          e.abrupt("break", 26);
                      case 9:
                          return e.next = 11,
                          o.Decrypt(t.raw, n, r);
                      case 11:
                          return c = e.sent,
                          e.abrupt("break", 26);
                      case 13:
                          return e.next = 15,
                          o.Decrypt(t.raw, n, "mp3");
                      case 15:
                          return c = e.sent,
                          e.abrupt("break", 26);
                      case 17:
                          return e.next = 19,
                          i.Decrypt(t.raw, n, r);
                      case 19:
                          return c = e.sent,
                          e.abrupt("break", 26);
                      case 21:
                          return e.next = 23,
                          s.Decrypt(t.raw, n);
                      case 23:
                          return c = e.sent,
                          e.abrupt("break", 26);
                      case 25:
                          c = {
                              status: !1,
                              message: "不支持此文件格式"
                          };
                      case 26:
                          return c.rawExt = r,
                          c.rawFilename = n,
                          e.abrupt("return", c);
                      case 29:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          u.apply(this, arguments)
      }
      addEventListener("message", (function(e) {
          var r, n, a = e.data, i = a.type, o = a.method, s = a.id, c = a.params;
          "RPC" === i && o && (n = (r = t[o]) ? Promise.resolve().then((function() {
              return r.apply(t, c)
          }
          )) : Promise.reject("No such method"),
          n.then((function(e) {
              postMessage({
                  type: "RPC",
                  id: s,
                  result: e
              })
          }
          )).catch((function(e) {
              var t = {
                  message: e
              };
              e.stack && (t.message = e.message,
              t.stack = e.stack,
              t.name = e.name),
              postMessage({
                  type: "RPC",
                  id: s,
                  error: t
              })
          }
          )))
      }
      )),
      postMessage({
          type: "RPC",
          method: "ready"
      })
  },
  "1fb5": function(e, t, r) {
      "use strict";
      t.byteLength = l,
      t.toByteArray = d,
      t.fromByteArray = m;
      for (var n = [], a = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = o.length; s < c; ++s)
          n[s] = o[s],
          a[o.charCodeAt(s)] = s;
      function u(e) {
          var t = e.length;
          if (t % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
          var r = e.indexOf("=");
          -1 === r && (r = t);
          var n = r === t ? 0 : 4 - r % 4;
          return [r, n]
      }
      function l(e) {
          var t = u(e)
            , r = t[0]
            , n = t[1];
          return 3 * (r + n) / 4 - n
      }
      function f(e, t, r) {
          return 3 * (t + r) / 4 - r
      }
      function d(e) {
          var t, r, n = u(e), o = n[0], s = n[1], c = new i(f(e, o, s)), l = 0, d = s > 0 ? o - 4 : o;
          for (r = 0; r < d; r += 4)
              t = a[e.charCodeAt(r)] << 18 | a[e.charCodeAt(r + 1)] << 12 | a[e.charCodeAt(r + 2)] << 6 | a[e.charCodeAt(r + 3)],
              c[l++] = t >> 16 & 255,
              c[l++] = t >> 8 & 255,
              c[l++] = 255 & t;
          return 2 === s && (t = a[e.charCodeAt(r)] << 2 | a[e.charCodeAt(r + 1)] >> 4,
          c[l++] = 255 & t),
          1 === s && (t = a[e.charCodeAt(r)] << 10 | a[e.charCodeAt(r + 1)] << 4 | a[e.charCodeAt(r + 2)] >> 2,
          c[l++] = t >> 8 & 255,
          c[l++] = 255 & t),
          c
      }
      function h(e) {
          return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[63 & e]
      }
      function p(e, t, r) {
          for (var n, a = [], i = t; i < r; i += 3)
              n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]),
              a.push(h(n));
          return a.join("")
      }
      function m(e) {
          for (var t, r = e.length, a = r % 3, i = [], o = 16383, s = 0, c = r - a; s < c; s += o)
              i.push(p(e, s, s + o > c ? c : s + o));
          return 1 === a ? (t = e[r - 1],
          i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === a && (t = (e[r - 2] << 8) + e[r - 1],
          i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")),
          i.join("")
      }
      a["-".charCodeAt(0)] = 62,
      a["_".charCodeAt(0)] = 63
  },
  "20f8": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("f654")
        , a = r("f35d");
      var i = r("f35d");
      t.EndOfStreamError = i.EndOfStreamError;
      class o {
          constructor() {
              this.promise = new Promise((e,t)=>{
                  this.reject = t,
                  this.resolve = e
              }
              )
          }
      }
      const s = 1048576;
      class c {
          constructor(e) {
              if (this.s = e,
              this.endOfStream = !1,
              this.peekQueue = [],
              !e.read || !e.once)
                  throw new Error("Expected an instance of stream.Readable");
              this.s.once("end", ()=>this.reject(new a.EndOfStreamError)),
              this.s.once("error", e=>this.reject(e)),
              this.s.once("close", ()=>this.reject(new Error("Stream closed")))
          }
          async peek(e, t, r) {
              const n = await this.read(e, t, r);
              return this.peekQueue.push(e.slice(t, t + n)),
              n
          }
          async read(e, t, r) {
              if (0 === r)
                  return 0;
              if (0 === this.peekQueue.length && this.endOfStream)
                  throw new a.EndOfStreamError;
              let n = r
                , i = 0;
              while (this.peekQueue.length > 0 && n > 0) {
                  const r = this.peekQueue.pop()
                    , a = Math.min(r.length, n);
                  r.copy(e, t + i, 0, a),
                  i += a,
                  n -= a,
                  a < r.length && this.peekQueue.push(r.slice(a))
              }
              while (n > 0 && !this.endOfStream) {
                  const r = Math.min(n, s)
                    , a = await this._read(e, t + i, r);
                  if (i += a,
                  a < r)
                      break;
                  n -= a
              }
              return i
          }
          async _read(e, t, r) {
              n.ok(!this.request, "Concurrent read operation?");
              const a = this.s.read(r);
              return a ? (a.copy(e, t),
              a.length) : (this.request = {
                  buffer: e,
                  offset: t,
                  length: r,
                  deferred: new o
              },
              this.s.once("readable", ()=>{
                  this.tryRead()
              }
              ),
              this.request.deferred.promise.then(e=>(this.request = null,
              e), e=>{
                  throw this.request = null,
                  e
              }
              ))
          }
          tryRead() {
              const e = this.s.read(this.request.length);
              e ? (e.copy(this.request.buffer, this.request.offset),
              this.request.deferred.resolve(e.length)) : this.s.once("readable", ()=>{
                  this.tryRead()
              }
              )
          }
          reject(e) {
              this.endOfStream = !0,
              this.request && (this.request.deferred.reject(e),
              this.request = null)
          }
      }
      t.StreamReader = c
  },
  "219c": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = n.aTypedArray
        , i = n.exportTypedArrayMethod
        , o = [].sort;
      i("sort", (function(e) {
          return o.call(a(this), e)
      }
      ))
  },
  "21bf": function(e, t, r) {
      (function(t) {
          (function(t, r) {
              e.exports = r()
          }
          )(0, (function() {
              var e = e || function(e, r) {
                  var n = function() {
                      try {
                          var e = t.crypto;
                          return Number("0." + e.randomBytes(3).readUIntBE(0, 3))
                      } catch (r) {}
                      try {
                          e = window.crypto || window.msCrypto;
                          return Number("0." + window.crypto.getRandomValues(new Uint32Array(1))[0])
                      } catch (r) {}
                      throw new Error("Native crypto module could not be used to get secure random number.")
                  }
                    , a = Object.create || function() {
                      function e() {}
                      return function(t) {
                          var r;
                          return e.prototype = t,
                          r = new e,
                          e.prototype = null,
                          r
                      }
                  }()
                    , i = {}
                    , o = i.lib = {}
                    , s = o.Base = function() {
                      return {
                          extend: function(e) {
                              var t = a(this);
                              return e && t.mixIn(e),
                              t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                  t.$super.init.apply(this, arguments)
                              }
                              ),
                              t.init.prototype = t,
                              t.$super = this,
                              t
                          },
                          create: function() {
                              var e = this.extend();
                              return e.init.apply(e, arguments),
                              e
                          },
                          init: function() {},
                          mixIn: function(e) {
                              for (var t in e)
                                  e.hasOwnProperty(t) && (this[t] = e[t]);
                              e.hasOwnProperty("toString") && (this.toString = e.toString)
                          },
                          clone: function() {
                              return this.init.prototype.extend(this)
                          }
                      }
                  }()
                    , c = o.WordArray = s.extend({
                      init: function(e, t) {
                          e = this.words = e || [],
                          this.sigBytes = t != r ? t : 4 * e.length
                      },
                      toString: function(e) {
                          return (e || l).stringify(this)
                      },
                      concat: function(e) {
                          var t = this.words
                            , r = e.words
                            , n = this.sigBytes
                            , a = e.sigBytes;
                          if (this.clamp(),
                          n % 4)
                              for (var i = 0; i < a; i++) {
                                  var o = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                  t[n + i >>> 2] |= o << 24 - (n + i) % 4 * 8
                              }
                          else
                              for (i = 0; i < a; i += 4)
                                  t[n + i >>> 2] = r[i >>> 2];
                          return this.sigBytes += a,
                          this
                      },
                      clamp: function() {
                          var t = this.words
                            , r = this.sigBytes;
                          t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8,
                          t.length = e.ceil(r / 4)
                      },
                      clone: function() {
                          var e = s.clone.call(this);
                          return e.words = this.words.slice(0),
                          e
                      },
                      random: function(e) {
                          for (var t = [], r = 0; r < e; r += 4)
                              t.push(4294967296 * n() | 0);
                          return new c.init(t,e)
                      }
                  })
                    , u = i.enc = {}
                    , l = u.Hex = {
                      stringify: function(e) {
                          for (var t = e.words, r = e.sigBytes, n = [], a = 0; a < r; a++) {
                              var i = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                              n.push((i >>> 4).toString(16)),
                              n.push((15 & i).toString(16))
                          }
                          return n.join("")
                      },
                      parse: function(e) {
                          for (var t = e.length, r = [], n = 0; n < t; n += 2)
                              r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                          return new c.init(r,t / 2)
                      }
                  }
                    , f = u.Latin1 = {
                      stringify: function(e) {
                          for (var t = e.words, r = e.sigBytes, n = [], a = 0; a < r; a++) {
                              var i = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                              n.push(String.fromCharCode(i))
                          }
                          return n.join("")
                      },
                      parse: function(e) {
                          for (var t = e.length, r = [], n = 0; n < t; n++)
                              r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                          return new c.init(r,t)
                      }
                  }
                    , d = u.Utf8 = {
                      stringify: function(e) {
                          try {
                              return decodeURIComponent(escape(f.stringify(e)))
                          } catch (t) {
                              throw new Error("Malformed UTF-8 data")
                          }
                      },
                      parse: function(e) {
                          return f.parse(unescape(encodeURIComponent(e)))
                      }
                  }
                    , h = o.BufferedBlockAlgorithm = s.extend({
                      reset: function() {
                          this._data = new c.init,
                          this._nDataBytes = 0
                      },
                      _append: function(e) {
                          "string" == typeof e && (e = d.parse(e)),
                          this._data.concat(e),
                          this._nDataBytes += e.sigBytes
                      },
                      _process: function(t) {
                          var r, n = this._data, a = n.words, i = n.sigBytes, o = this.blockSize, s = 4 * o, u = i / s;
                          u = t ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0);
                          var l = u * o
                            , f = e.min(4 * l, i);
                          if (l) {
                              for (var d = 0; d < l; d += o)
                                  this._doProcessBlock(a, d);
                              r = a.splice(0, l),
                              n.sigBytes -= f
                          }
                          return new c.init(r,f)
                      },
                      clone: function() {
                          var e = s.clone.call(this);
                          return e._data = this._data.clone(),
                          e
                      },
                      _minBufferSize: 0
                  })
                    , p = (o.Hasher = h.extend({
                      cfg: s.extend(),
                      init: function(e) {
                          this.cfg = this.cfg.extend(e),
                          this.reset()
                      },
                      reset: function() {
                          h.reset.call(this),
                          this._doReset()
                      },
                      update: function(e) {
                          return this._append(e),
                          this._process(),
                          this
                      },
                      finalize: function(e) {
                          e && this._append(e);
                          var t = this._doFinalize();
                          return t
                      },
                      blockSize: 16,
                      _createHelper: function(e) {
                          return function(t, r) {
                              return new e.init(r).finalize(t)
                          }
                      },
                      _createHmacHelper: function(e) {
                          return function(t, r) {
                              return new p.HMAC.init(e,r).finalize(t)
                          }
                      }
                  }),
                  i.algo = {});
                  return i
              }(Math);
              return e
          }
          ))
      }
      ).call(this, r("c8ba"))
  },
  "21c2": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("1e48")
        , a = r("377f");
      var i = r("20f8");
      function o(e, t) {
          return t = t || {},
          new n.ReadStreamTokenizer(e,t)
      }
      function s(e, t) {
          return new a.BufferTokenizer(e,t)
      }
      t.EndOfStreamError = i.EndOfStreamError,
      t.fromStream = o,
      t.fromBuffer = s
  },
  2266: function(e, t, r) {
      var n = r("825a")
        , a = r("e95a")
        , i = r("50c4")
        , o = r("0366")
        , s = r("35a1")
        , c = r("9bdd")
        , u = function(e, t) {
          this.stopped = e,
          this.result = t
      }
        , l = e.exports = function(e, t, r, l, f) {
          var d, h, p, m, g, y, b, v = o(t, r, l ? 2 : 1);
          if (f)
              d = e;
          else {
              if (h = s(e),
              "function" != typeof h)
                  throw TypeError("Target is not iterable");
              if (a(h)) {
                  for (p = 0,
                  m = i(e.length); m > p; p++)
                      if (g = l ? v(n(b = e[p])[0], b[1]) : v(e[p]),
                      g && g instanceof u)
                          return g;
                  return new u(!1)
              }
              d = h.call(e)
          }
          y = d.next;
          while (!(b = y.call(d)).done)
              if (g = c(d, v, b.value, l),
              "object" == typeof g && g && g instanceof u)
                  return g;
          return new u(!1)
      }
      ;
      l.stop = function(e) {
          return new u(!0,e)
      }
  },
  "22d0": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("34eb")
        , i = r("f654")
        , o = r("d3ab")
        , s = r("98a7")
        , c = r("bda5")
        , u = r("c73e")
        , l = r("00f6")
        , f = r("95c9")
        , d = r("10a8")
        , h = r("21c2")
        , p = a("music-metadata:parser:ogg");
      class m {
          constructor(e) {
              this.len = e.page_segments
          }
          static sum(e, t, r) {
              let n = 0;
              for (let a = t; a < t + r; ++a)
                  n += e[a];
              return n
          }
          get(e, t) {
              return {
                  totalPageSize: m.sum(e, t, this.len)
              }
          }
      }
      t.SegmentTable = m;
      class g extends f.BasicParser {
          async parse() {
              p("pos=%s, parsePage()", this.tokenizer.position);
              try {
                  let e;
                  do {
                      e = await this.tokenizer.readToken(g.Header),
                      i.strictEqual(e.capturePattern, "OggS", "Ogg capture pattern"),
                      this.metadata.setFormat("container", "Ogg"),
                      this.header = e,
                      this.pageNumber = e.pageSequenceNo,
                      p("page#=%s, Ogg.id=%s", e.pageSequenceNo, e.capturePattern);
                      const t = await this.tokenizer.readToken(new m(e));
                      p("totalPageSize=%s", t.totalPageSize);
                      const r = await this.tokenizer.readToken(new n.BufferType(t.totalPageSize));
                      if (p("firstPage=%s, lastPage=%s, continued=%s", e.headerType.firstPage, e.headerType.lastPage, e.headerType.continued),
                      e.headerType.firstPage) {
                          const e = new n.StringType(7,"ascii").get(r, 0);
                          switch (e) {
                          case "vorbis":
                              p("Set page consumer to Ogg/Vorbis"),
                              this.pageConsumer = new c.VorbisParser(this.metadata,this.options);
                              break;
                          case "OpusHea":
                              p("Set page consumer to Ogg/Opus"),
                              this.pageConsumer = new u.OpusParser(this.metadata,this.options,this.tokenizer);
                              break;
                          case "Speex  ":
                              p("Set page consumer to Ogg/Speex"),
                              this.pageConsumer = new l.SpeexParser(this.metadata,this.options,this.tokenizer);
                              break;
                          case "fishead":
                          case "\0theora":
                              p("Set page consumer to Ogg/Theora"),
                              this.pageConsumer = new d.TheoraParser(this.metadata,this.options,this.tokenizer);
                              break;
                          default:
                              throw new Error("gg audio-codec not recognized (id=" + e + ")")
                          }
                      }
                      this.pageConsumer.parsePage(e, r)
                  } while (!e.headerType.lastPage)
              } catch (e) {
                  if (e instanceof h.EndOfStreamError)
                      return void p("End-of-stream");
                  if (e.message.startsWith("FourCC") && this.pageNumber > 0)
                      return this.metadata.addWarning("Invalid FourCC ID, maybe last OGG-page is not marked with last-page flag"),
                      this.pageConsumer.flush();
                  throw e
              }
          }
      }
      t.OggParser = g,
      g.Header = {
          len: 27,
          get: (e,t)=>({
              capturePattern: s.FourCcToken.get(e, t),
              version: e.readUInt8(t + 4),
              headerType: {
                  continued: o.default.strtokBITSET.get(e, t + 5, 0),
                  firstPage: o.default.strtokBITSET.get(e, t + 5, 1),
                  lastPage: o.default.strtokBITSET.get(e, t + 5, 2)
              },
              absoluteGranulePosition: e.readIntLE(t + 6, 6),
              streamSerialNumber: n.UINT32_LE.get(e, t + 14),
              pageSequenceNo: n.UINT32_LE.get(e, t + 18),
              pageChecksum: n.UINT32_LE.get(e, t + 22),
              page_segments: e.readUInt8(t + 26)
          })
      }
  },
  "23cb": function(e, t, r) {
      var n = r("a691")
        , a = Math.max
        , i = Math.min;
      e.exports = function(e, t) {
          var r = n(e);
          return r < 0 ? a(r + t, 0) : i(r, t)
      }
  },
  "23e7": function(e, t, r) {
      var n = r("da84")
        , a = r("06cf").f
        , i = r("9112")
        , o = r("6eeb")
        , s = r("ce4e")
        , c = r("e893")
        , u = r("94ca");
      e.exports = function(e, t) {
          var r, l, f, d, h, p, m = e.target, g = e.global, y = e.stat;
          if (l = g ? n : y ? n[m] || s(m, {}) : (n[m] || {}).prototype,
          l)
              for (f in t) {
                  if (h = t[f],
                  e.noTargetGet ? (p = a(l, f),
                  d = p && p.value) : d = l[f],
                  r = u(g ? f : m + (y ? "." : "#") + f, e.forced),
                  !r && void 0 !== d) {
                      if (typeof h === typeof d)
                          continue;
                      c(h, d)
                  }
                  (e.sham || d && d.sham) && i(h, "sham", !0),
                  o(l, f, h, e)
              }
      }
  },
  "241c": function(e, t, r) {
      var n = r("ca84")
        , a = r("7839")
        , i = a.concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e) {
          return n(e, i)
      }
  },
  "25a1": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("d58f").right
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("reduceRight", (function(e) {
          return a(i(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  "25f0": function(e, t, r) {
      "use strict";
      var n = r("6eeb")
        , a = r("825a")
        , i = r("d039")
        , o = r("ad6d")
        , s = "toString"
        , c = RegExp.prototype
        , u = c[s]
        , l = i((function() {
          return "/a/b" != u.call({
              source: "a",
              flags: "b"
          })
      }
      ))
        , f = u.name != s;
      (l || f) && n(RegExp.prototype, s, (function() {
          var e = a(this)
            , t = String(e.source)
            , r = e.flags
            , n = String(void 0 === r && e instanceof RegExp && !("flags"in c) ? o.call(e) : r);
          return "/" + t + "/" + n
      }
      ), {
          unsafe: !0
      })
  },
  2626: function(e, t, r) {
      "use strict";
      var n = r("d066")
        , a = r("9bf2")
        , i = r("b622")
        , o = r("83ab")
        , s = i("species");
      e.exports = function(e) {
          var t = n(e)
            , r = a.f;
          o && t && !t[s] && r(t, s, {
              configurable: !0,
              get: function() {
                  return this
              }
          })
      }
  },
  "27bf": function(e, t, r) {
      "use strict";
      e.exports = o;
      var n = r("b19a")
        , a = Object.create(r("3a7c"));
      function i(e, t) {
          var r = this._transformState;
          r.transforming = !1;
          var n = r.writecb;
          if (!n)
              return this.emit("error", new Error("write callback called multiple times"));
          r.writechunk = null,
          r.writecb = null,
          null != t && this.push(t),
          n(e);
          var a = this._readableState;
          a.reading = !1,
          (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
      }
      function o(e) {
          if (!(this instanceof o))
              return new o(e);
          n.call(this, e),
          this._transformState = {
              afterTransform: i.bind(this),
              needTransform: !1,
              transforming: !1,
              writecb: null,
              writechunk: null,
              writeencoding: null
          },
          this._readableState.needReadable = !0,
          this._readableState.sync = !1,
          e && ("function" === typeof e.transform && (this._transform = e.transform),
          "function" === typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", s)
      }
      function s() {
          var e = this;
          "function" === typeof this._flush ? this._flush((function(t, r) {
              c(e, t, r)
          }
          )) : c(this, null, null)
      }
      function c(e, t, r) {
          if (t)
              return e.emit("error", t);
          if (null != r && e.push(r),
          e._writableState.length)
              throw new Error("Calling transform done when ws.length != 0");
          if (e._transformState.transforming)
              throw new Error("Calling transform done when still transforming");
          return e.push(null)
      }
      a.inherits = r("3fb5"),
      a.inherits(o, n),
      o.prototype.push = function(e, t) {
          return this._transformState.needTransform = !1,
          n.prototype.push.call(this, e, t)
      }
      ,
      o.prototype._transform = function(e, t, r) {
          throw new Error("_transform() is not implemented")
      }
      ,
      o.prototype._write = function(e, t, r) {
          var n = this._transformState;
          if (n.writecb = r,
          n.writechunk = e,
          n.writeencoding = t,
          !n.transforming) {
              var a = this._readableState;
              (n.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
          }
      }
      ,
      o.prototype._read = function(e) {
          var t = this._transformState;
          null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
          this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
      }
      ,
      o.prototype._destroy = function(e, t) {
          var r = this;
          n.prototype._destroy.call(this, e, (function(e) {
              t(e),
              r.emit("close")
          }
          ))
      }
  },
  2819: function(e, t, r) {
      "use strict";
      function n(e) {
          return t.commonTags.hasOwnProperty(e) && !t.commonTags[e].multiple
      }
      function a(e) {
          return !t.commonTags[e].multiple || t.commonTags[e].unique
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.commonTags = {
          year: {
              multiple: !1
          },
          track: {
              multiple: !1
          },
          disk: {
              multiple: !1
          },
          title: {
              multiple: !1
          },
          artist: {
              multiple: !1
          },
          artists: {
              multiple: !0,
              unique: !0
          },
          albumartist: {
              multiple: !1
          },
          album: {
              multiple: !1
          },
          date: {
              multiple: !1
          },
          originaldate: {
              multiple: !1
          },
          originalyear: {
              multiple: !1
          },
          comment: {
              multiple: !0,
              unique: !1
          },
          genre: {
              multiple: !0,
              unique: !0
          },
          picture: {
              multiple: !0,
              unique: !0
          },
          composer: {
              multiple: !0,
              unique: !0
          },
          lyrics: {
              multiple: !0,
              unique: !1
          },
          albumsort: {
              multiple: !1,
              unique: !0
          },
          titlesort: {
              multiple: !1,
              unique: !0
          },
          work: {
              multiple: !1,
              unique: !0
          },
          artistsort: {
              multiple: !1,
              unique: !0
          },
          albumartistsort: {
              multiple: !1,
              unique: !0
          },
          composersort: {
              multiple: !0,
              unique: !0
          },
          lyricist: {
              multiple: !0,
              unique: !0
          },
          writer: {
              multiple: !0,
              unique: !0
          },
          conductor: {
              multiple: !0,
              unique: !0
          },
          remixer: {
              multiple: !0,
              unique: !0
          },
          arranger: {
              multiple: !0,
              unique: !0
          },
          engineer: {
              multiple: !0,
              unique: !0
          },
          producer: {
              multiple: !0,
              unique: !0
          },
          technician: {
              multiple: !0,
              unique: !0
          },
          djmixer: {
              multiple: !0,
              unique: !0
          },
          mixer: {
              multiple: !0,
              unique: !0
          },
          label: {
              multiple: !0,
              unique: !0
          },
          grouping: {
              multiple: !1
          },
          subtitle: {
              multiple: !1
          },
          discsubtitle: {
              multiple: !1
          },
          totaltracks: {
              multiple: !1
          },
          totaldiscs: {
              multiple: !1
          },
          compilation: {
              multiple: !1
          },
          rating: {
              multiple: !0
          },
          bpm: {
              multiple: !1
          },
          mood: {
              multiple: !1
          },
          media: {
              multiple: !1
          },
          catalognumber: {
              multiple: !0,
              unique: !0
          },
          tvShow: {
              multiple: !1
          },
          tvShowSort: {
              multiple: !1
          },
          tvSeason: {
              multiple: !1
          },
          tvEpisode: {
              multiple: !1
          },
          tvEpisodeId: {
              multiple: !1
          },
          tvNetwork: {
              multiple: !1
          },
          podcast: {
              multiple: !1
          },
          podcasturl: {
              multiple: !1
          },
          releasestatus: {
              multiple: !1
          },
          releasetype: {
              multiple: !0
          },
          releasecountry: {
              multiple: !1
          },
          script: {
              multiple: !1
          },
          language: {
              multiple: !1
          },
          copyright: {
              multiple: !1
          },
          license: {
              multiple: !1
          },
          encodedby: {
              multiple: !1
          },
          encodersettings: {
              multiple: !1
          },
          gapless: {
              multiple: !1
          },
          barcode: {
              multiple: !1
          },
          isrc: {
              multiple: !0
          },
          asin: {
              multiple: !1
          },
          musicbrainz_recordingid: {
              multiple: !1
          },
          musicbrainz_trackid: {
              multiple: !1
          },
          musicbrainz_albumid: {
              multiple: !1
          },
          musicbrainz_artistid: {
              multiple: !0
          },
          musicbrainz_albumartistid: {
              multiple: !0
          },
          musicbrainz_releasegroupid: {
              multiple: !1
          },
          musicbrainz_workid: {
              multiple: !1
          },
          musicbrainz_trmid: {
              multiple: !1
          },
          musicbrainz_discid: {
              multiple: !1
          },
          acoustid_id: {
              multiple: !1
          },
          acoustid_fingerprint: {
              multiple: !1
          },
          musicip_puid: {
              multiple: !1
          },
          musicip_fingerprint: {
              multiple: !1
          },
          website: {
              multiple: !1
          },
          "performer:instrument": {
              multiple: !0,
              unique: !0
          },
          averageLevel: {
              multiple: !1
          },
          peakLevel: {
              multiple: !1
          },
          notes: {
              multiple: !0,
              unique: !1
          },
          key: {
              multiple: !1
          },
          originalalbum: {
              multiple: !1
          },
          originalartist: {
              multiple: !1
          },
          discogs_artist_id: {
              multiple: !0,
              unique: !0
          },
          discogs_release_id: {
              multiple: !1
          },
          discogs_label_id: {
              multiple: !1
          },
          discogs_master_release_id: {
              multiple: !1
          },
          discogs_votes: {
              multiple: !1
          },
          discogs_rating: {
              multiple: !1
          },
          replaygain_track_peak: {
              multiple: !1
          },
          replaygain_track_gain: {
              multiple: !1
          },
          replaygain_album_peak: {
              multiple: !1
          },
          replaygain_album_gain: {
              multiple: !1
          },
          replaygain_track_minmax: {
              multiple: !1
          },
          replaygain_album_minmax: {
              multiple: !1
          },
          replaygain_undo: {
              multiple: !1
          },
          description: {
              multiple: !0
          }
      },
      t.isSingleton = n,
      t.isUnique = a
  },
  "28a0": function(e, t) {
      "function" === typeof Object.create ? e.exports = function(e, t) {
          e.super_ = t,
          e.prototype = Object.create(t.prototype, {
              constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          })
      }
      : e.exports = function(e, t) {
          e.super_ = t;
          var r = function() {};
          r.prototype = t.prototype,
          e.prototype = new r,
          e.prototype.constructor = e
      }
  },
  2954: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("4840")
        , i = r("d039")
        , o = n.aTypedArray
        , s = n.aTypedArrayConstructor
        , c = n.exportTypedArrayMethod
        , u = [].slice
        , l = i((function() {
          new Int8Array(1).slice()
      }
      ));
      c("slice", (function(e, t) {
          var r = u.call(o(this), e, t)
            , n = a(this, this.constructor)
            , i = 0
            , c = r.length
            , l = new (s(n))(c);
          while (c > i)
              l[i] = r[i++];
          return l
      }
      ), l)
  },
  "2a66": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.pad.ZeroPadding = {
              pad: function(e, t) {
                  var r = 4 * t;
                  e.clamp(),
                  e.sigBytes += r - (e.sigBytes % r || r)
              },
              unpad: function(e) {
                  var t = e.words
                    , r = e.sigBytes - 1;
                  for (r = e.sigBytes - 1; r >= 0; r--)
                      if (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
                          e.sigBytes = r + 1;
                          break
                      }
              }
          },
          e.pad.ZeroPadding
      }
      ))
  },
  "2b3d": function(e, t, r) {
      "use strict";
      r("3ca3");
      var n, a = r("23e7"), i = r("83ab"), o = r("0d3b"), s = r("da84"), c = r("37e8"), u = r("6eeb"), l = r("19aa"), f = r("5135"), d = r("60da"), h = r("4df4"), p = r("6547").codeAt, m = r("5fb2"), g = r("d44e"), y = r("9861"), b = r("69f3"), v = s.URL, w = y.URLSearchParams, T = y.getState, k = b.set, _ = b.getterFor("URL"), S = Math.floor, E = Math.pow, I = "Invalid authority", A = "Invalid scheme", x = "Invalid host", B = "Invalid port", C = /[A-Za-z]/, P = /[\d+\-.A-Za-z]/, O = /\d/, M = /^(0x|0X)/, D = /^[0-7]+$/, R = /^\d+$/, F = /^[\dA-Fa-f]+$/, L = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, z = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, U = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, N = /[\u0009\u000A\u000D]/g, j = function(e, t) {
          var r, n, a;
          if ("[" == t.charAt(0)) {
              if ("]" != t.charAt(t.length - 1))
                  return x;
              if (r = W(t.slice(1, -1)),
              !r)
                  return x;
              e.host = r
          } else if (J(e)) {
              if (t = m(t),
              L.test(t))
                  return x;
              if (r = H(t),
              null === r)
                  return x;
              e.host = r
          } else {
              if (z.test(t))
                  return x;
              for (r = "",
              n = h(t),
              a = 0; a < n.length; a++)
                  r += K(n[a], $);
              e.host = r
          }
      }, H = function(e) {
          var t, r, n, a, i, o, s, c = e.split(".");
          if (c.length && "" == c[c.length - 1] && c.pop(),
          t = c.length,
          t > 4)
              return e;
          for (r = [],
          n = 0; n < t; n++) {
              if (a = c[n],
              "" == a)
                  return e;
              if (i = 10,
              a.length > 1 && "0" == a.charAt(0) && (i = M.test(a) ? 16 : 8,
              a = a.slice(8 == i ? 1 : 2)),
              "" === a)
                  o = 0;
              else {
                  if (!(10 == i ? R : 8 == i ? D : F).test(a))
                      return e;
                  o = parseInt(a, i)
              }
              r.push(o)
          }
          for (n = 0; n < t; n++)
              if (o = r[n],
              n == t - 1) {
                  if (o >= E(256, 5 - t))
                      return null
              } else if (o > 255)
                  return null;
          for (s = r.pop(),
          n = 0; n < r.length; n++)
              s += r[n] * E(256, 3 - n);
          return s
      }, W = function(e) {
          var t, r, n, a, i, o, s, c = [0, 0, 0, 0, 0, 0, 0, 0], u = 0, l = null, f = 0, d = function() {
              return e.charAt(f)
          };
          if (":" == d()) {
              if (":" != e.charAt(1))
                  return;
              f += 2,
              u++,
              l = u
          }
          while (d()) {
              if (8 == u)
                  return;
              if (":" != d()) {
                  t = r = 0;
                  while (r < 4 && F.test(d()))
                      t = 16 * t + parseInt(d(), 16),
                      f++,
                      r++;
                  if ("." == d()) {
                      if (0 == r)
                          return;
                      if (f -= r,
                      u > 6)
                          return;
                      n = 0;
                      while (d()) {
                          if (a = null,
                          n > 0) {
                              if (!("." == d() && n < 4))
                                  return;
                              f++
                          }
                          if (!O.test(d()))
                              return;
                          while (O.test(d())) {
                              if (i = parseInt(d(), 10),
                              null === a)
                                  a = i;
                              else {
                                  if (0 == a)
                                      return;
                                  a = 10 * a + i
                              }
                              if (a > 255)
                                  return;
                              f++
                          }
                          c[u] = 256 * c[u] + a,
                          n++,
                          2 != n && 4 != n || u++
                      }
                      if (4 != n)
                          return;
                      break
                  }
                  if (":" == d()) {
                      if (f++,
                      !d())
                          return
                  } else if (d())
                      return;
                  c[u++] = t
              } else {
                  if (null !== l)
                      return;
                  f++,
                  u++,
                  l = u
              }
          }
          if (null !== l) {
              o = u - l,
              u = 7;
              while (0 != u && o > 0)
                  s = c[u],
                  c[u--] = c[l + o - 1],
                  c[l + --o] = s
          } else if (8 != u)
              return;
          return c
      }, q = function(e) {
          for (var t = null, r = 1, n = null, a = 0, i = 0; i < 8; i++)
              0 !== e[i] ? (a > r && (t = n,
              r = a),
              n = null,
              a = 0) : (null === n && (n = i),
              ++a);
          return a > r && (t = n,
          r = a),
          t
      }, X = function(e) {
          var t, r, n, a;
          if ("number" == typeof e) {
              for (t = [],
              r = 0; r < 4; r++)
                  t.unshift(e % 256),
                  e = S(e / 256);
              return t.join(".")
          }
          if ("object" == typeof e) {
              for (t = "",
              n = q(e),
              r = 0; r < 8; r++)
                  a && 0 === e[r] || (a && (a = !1),
                  n === r ? (t += r ? ":" : "::",
                  a = !0) : (t += e[r].toString(16),
                  r < 7 && (t += ":")));
              return "[" + t + "]"
          }
          return e
      }, $ = {}, G = d({}, $, {
          " ": 1,
          '"': 1,
          "<": 1,
          ">": 1,
          "`": 1
      }), V = d({}, G, {
          "#": 1,
          "?": 1,
          "{": 1,
          "}": 1
      }), Y = d({}, V, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1
      }), K = function(e, t) {
          var r = p(e, 0);
          return r > 32 && r < 127 && !f(t, e) ? e : encodeURIComponent(e)
      }, Z = {
          ftp: 21,
          file: null,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443
      }, J = function(e) {
          return f(Z, e.scheme)
      }, Q = function(e) {
          return "" != e.username || "" != e.password
      }, ee = function(e) {
          return !e.host || e.cannotBeABaseURL || "file" == e.scheme
      }, te = function(e, t) {
          var r;
          return 2 == e.length && C.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r)
      }, re = function(e) {
          var t;
          return e.length > 1 && te(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
      }, ne = function(e) {
          var t = e.path
            , r = t.length;
          !r || "file" == e.scheme && 1 == r && te(t[0], !0) || t.pop()
      }, ae = function(e) {
          return "." === e || "%2e" === e.toLowerCase()
      }, ie = function(e) {
          return e = e.toLowerCase(),
          ".." === e || "%2e." === e || ".%2e" === e || "%2e%2e" === e
      }, oe = {}, se = {}, ce = {}, ue = {}, le = {}, fe = {}, de = {}, he = {}, pe = {}, me = {}, ge = {}, ye = {}, be = {}, ve = {}, we = {}, Te = {}, ke = {}, _e = {}, Se = {}, Ee = {}, Ie = {}, Ae = function(e, t, r, a) {
          var i, o, s, c, u = r || oe, l = 0, d = "", p = !1, m = !1, g = !1;
          r || (e.scheme = "",
          e.username = "",
          e.password = "",
          e.host = null,
          e.port = null,
          e.path = [],
          e.query = null,
          e.fragment = null,
          e.cannotBeABaseURL = !1,
          t = t.replace(U, "")),
          t = t.replace(N, ""),
          i = h(t);
          while (l <= i.length) {
              switch (o = i[l],
              u) {
              case oe:
                  if (!o || !C.test(o)) {
                      if (r)
                          return A;
                      u = ce;
                      continue
                  }
                  d += o.toLowerCase(),
                  u = se;
                  break;
              case se:
                  if (o && (P.test(o) || "+" == o || "-" == o || "." == o))
                      d += o.toLowerCase();
                  else {
                      if (":" != o) {
                          if (r)
                              return A;
                          d = "",
                          u = ce,
                          l = 0;
                          continue
                      }
                      if (r && (J(e) != f(Z, d) || "file" == d && (Q(e) || null !== e.port) || "file" == e.scheme && !e.host))
                          return;
                      if (e.scheme = d,
                      r)
                          return void (J(e) && Z[e.scheme] == e.port && (e.port = null));
                      d = "",
                      "file" == e.scheme ? u = ve : J(e) && a && a.scheme == e.scheme ? u = ue : J(e) ? u = he : "/" == i[l + 1] ? (u = le,
                      l++) : (e.cannotBeABaseURL = !0,
                      e.path.push(""),
                      u = Se)
                  }
                  break;
              case ce:
                  if (!a || a.cannotBeABaseURL && "#" != o)
                      return A;
                  if (a.cannotBeABaseURL && "#" == o) {
                      e.scheme = a.scheme,
                      e.path = a.path.slice(),
                      e.query = a.query,
                      e.fragment = "",
                      e.cannotBeABaseURL = !0,
                      u = Ie;
                      break
                  }
                  u = "file" == a.scheme ? ve : fe;
                  continue;
              case ue:
                  if ("/" != o || "/" != i[l + 1]) {
                      u = fe;
                      continue
                  }
                  u = pe,
                  l++;
                  break;
              case le:
                  if ("/" == o) {
                      u = me;
                      break
                  }
                  u = _e;
                  continue;
              case fe:
                  if (e.scheme = a.scheme,
                  o == n)
                      e.username = a.username,
                      e.password = a.password,
                      e.host = a.host,
                      e.port = a.port,
                      e.path = a.path.slice(),
                      e.query = a.query;
                  else if ("/" == o || "\\" == o && J(e))
                      u = de;
                  else if ("?" == o)
                      e.username = a.username,
                      e.password = a.password,
                      e.host = a.host,
                      e.port = a.port,
                      e.path = a.path.slice(),
                      e.query = "",
                      u = Ee;
                  else {
                      if ("#" != o) {
                          e.username = a.username,
                          e.password = a.password,
                          e.host = a.host,
                          e.port = a.port,
                          e.path = a.path.slice(),
                          e.path.pop(),
                          u = _e;
                          continue
                      }
                      e.username = a.username,
                      e.password = a.password,
                      e.host = a.host,
                      e.port = a.port,
                      e.path = a.path.slice(),
                      e.query = a.query,
                      e.fragment = "",
                      u = Ie
                  }
                  break;
              case de:
                  if (!J(e) || "/" != o && "\\" != o) {
                      if ("/" != o) {
                          e.username = a.username,
                          e.password = a.password,
                          e.host = a.host,
                          e.port = a.port,
                          u = _e;
                          continue
                      }
                      u = me
                  } else
                      u = pe;
                  break;
              case he:
                  if (u = pe,
                  "/" != o || "/" != d.charAt(l + 1))
                      continue;
                  l++;
                  break;
              case pe:
                  if ("/" != o && "\\" != o) {
                      u = me;
                      continue
                  }
                  break;
              case me:
                  if ("@" == o) {
                      p && (d = "%40" + d),
                      p = !0,
                      s = h(d);
                      for (var y = 0; y < s.length; y++) {
                          var b = s[y];
                          if (":" != b || g) {
                              var v = K(b, Y);
                              g ? e.password += v : e.username += v
                          } else
                              g = !0
                      }
                      d = ""
                  } else if (o == n || "/" == o || "?" == o || "#" == o || "\\" == o && J(e)) {
                      if (p && "" == d)
                          return I;
                      l -= h(d).length + 1,
                      d = "",
                      u = ge
                  } else
                      d += o;
                  break;
              case ge:
              case ye:
                  if (r && "file" == e.scheme) {
                      u = Te;
                      continue
                  }
                  if (":" != o || m) {
                      if (o == n || "/" == o || "?" == o || "#" == o || "\\" == o && J(e)) {
                          if (J(e) && "" == d)
                              return x;
                          if (r && "" == d && (Q(e) || null !== e.port))
                              return;
                          if (c = j(e, d),
                          c)
                              return c;
                          if (d = "",
                          u = ke,
                          r)
                              return;
                          continue
                      }
                      "[" == o ? m = !0 : "]" == o && (m = !1),
                      d += o
                  } else {
                      if ("" == d)
                          return x;
                      if (c = j(e, d),
                      c)
                          return c;
                      if (d = "",
                      u = be,
                      r == ye)
                          return
                  }
                  break;
              case be:
                  if (!O.test(o)) {
                      if (o == n || "/" == o || "?" == o || "#" == o || "\\" == o && J(e) || r) {
                          if ("" != d) {
                              var w = parseInt(d, 10);
                              if (w > 65535)
                                  return B;
                              e.port = J(e) && w === Z[e.scheme] ? null : w,
                              d = ""
                          }
                          if (r)
                              return;
                          u = ke;
                          continue
                      }
                      return B
                  }
                  d += o;
                  break;
              case ve:
                  if (e.scheme = "file",
                  "/" == o || "\\" == o)
                      u = we;
                  else {
                      if (!a || "file" != a.scheme) {
                          u = _e;
                          continue
                      }
                      if (o == n)
                          e.host = a.host,
                          e.path = a.path.slice(),
                          e.query = a.query;
                      else if ("?" == o)
                          e.host = a.host,
                          e.path = a.path.slice(),
                          e.query = "",
                          u = Ee;
                      else {
                          if ("#" != o) {
                              re(i.slice(l).join("")) || (e.host = a.host,
                              e.path = a.path.slice(),
                              ne(e)),
                              u = _e;
                              continue
                          }
                          e.host = a.host,
                          e.path = a.path.slice(),
                          e.query = a.query,
                          e.fragment = "",
                          u = Ie
                      }
                  }
                  break;
              case we:
                  if ("/" == o || "\\" == o) {
                      u = Te;
                      break
                  }
                  a && "file" == a.scheme && !re(i.slice(l).join("")) && (te(a.path[0], !0) ? e.path.push(a.path[0]) : e.host = a.host),
                  u = _e;
                  continue;
              case Te:
                  if (o == n || "/" == o || "\\" == o || "?" == o || "#" == o) {
                      if (!r && te(d))
                          u = _e;
                      else if ("" == d) {
                          if (e.host = "",
                          r)
                              return;
                          u = ke
                      } else {
                          if (c = j(e, d),
                          c)
                              return c;
                          if ("localhost" == e.host && (e.host = ""),
                          r)
                              return;
                          d = "",
                          u = ke
                      }
                      continue
                  }
                  d += o;
                  break;
              case ke:
                  if (J(e)) {
                      if (u = _e,
                      "/" != o && "\\" != o)
                          continue
                  } else if (r || "?" != o)
                      if (r || "#" != o) {
                          if (o != n && (u = _e,
                          "/" != o))
                              continue
                      } else
                          e.fragment = "",
                          u = Ie;
                  else
                      e.query = "",
                      u = Ee;
                  break;
              case _e:
                  if (o == n || "/" == o || "\\" == o && J(e) || !r && ("?" == o || "#" == o)) {
                      if (ie(d) ? (ne(e),
                      "/" == o || "\\" == o && J(e) || e.path.push("")) : ae(d) ? "/" == o || "\\" == o && J(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && te(d) && (e.host && (e.host = ""),
                      d = d.charAt(0) + ":"),
                      e.path.push(d)),
                      d = "",
                      "file" == e.scheme && (o == n || "?" == o || "#" == o))
                          while (e.path.length > 1 && "" === e.path[0])
                              e.path.shift();
                      "?" == o ? (e.query = "",
                      u = Ee) : "#" == o && (e.fragment = "",
                      u = Ie)
                  } else
                      d += K(o, V);
                  break;
              case Se:
                  "?" == o ? (e.query = "",
                  u = Ee) : "#" == o ? (e.fragment = "",
                  u = Ie) : o != n && (e.path[0] += K(o, $));
                  break;
              case Ee:
                  r || "#" != o ? o != n && ("'" == o && J(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : K(o, $)) : (e.fragment = "",
                  u = Ie);
                  break;
              case Ie:
                  o != n && (e.fragment += K(o, G));
                  break
              }
              l++
          }
      }, xe = function(e) {
          var t, r, n = l(this, xe, "URL"), a = arguments.length > 1 ? arguments[1] : void 0, o = String(e), s = k(n, {
              type: "URL"
          });
          if (void 0 !== a)
              if (a instanceof xe)
                  t = _(a);
              else if (r = Ae(t = {}, String(a)),
              r)
                  throw TypeError(r);
          if (r = Ae(s, o, null, t),
          r)
              throw TypeError(r);
          var c = s.searchParams = new w
            , u = T(c);
          u.updateSearchParams(s.query),
          u.updateURL = function() {
              s.query = String(c) || null
          }
          ,
          i || (n.href = Ce.call(n),
          n.origin = Pe.call(n),
          n.protocol = Oe.call(n),
          n.username = Me.call(n),
          n.password = De.call(n),
          n.host = Re.call(n),
          n.hostname = Fe.call(n),
          n.port = Le.call(n),
          n.pathname = ze.call(n),
          n.search = Ue.call(n),
          n.searchParams = Ne.call(n),
          n.hash = je.call(n))
      }, Be = xe.prototype, Ce = function() {
          var e = _(this)
            , t = e.scheme
            , r = e.username
            , n = e.password
            , a = e.host
            , i = e.port
            , o = e.path
            , s = e.query
            , c = e.fragment
            , u = t + ":";
          return null !== a ? (u += "//",
          Q(e) && (u += r + (n ? ":" + n : "") + "@"),
          u += X(a),
          null !== i && (u += ":" + i)) : "file" == t && (u += "//"),
          u += e.cannotBeABaseURL ? o[0] : o.length ? "/" + o.join("/") : "",
          null !== s && (u += "?" + s),
          null !== c && (u += "#" + c),
          u
      }, Pe = function() {
          var e = _(this)
            , t = e.scheme
            , r = e.port;
          if ("blob" == t)
              try {
                  return new URL(t.path[0]).origin
              } catch (n) {
                  return "null"
              }
          return "file" != t && J(e) ? t + "://" + X(e.host) + (null !== r ? ":" + r : "") : "null"
      }, Oe = function() {
          return _(this).scheme + ":"
      }, Me = function() {
          return _(this).username
      }, De = function() {
          return _(this).password
      }, Re = function() {
          var e = _(this)
            , t = e.host
            , r = e.port;
          return null === t ? "" : null === r ? X(t) : X(t) + ":" + r
      }, Fe = function() {
          var e = _(this).host;
          return null === e ? "" : X(e)
      }, Le = function() {
          var e = _(this).port;
          return null === e ? "" : String(e)
      }, ze = function() {
          var e = _(this)
            , t = e.path;
          return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
      }, Ue = function() {
          var e = _(this).query;
          return e ? "?" + e : ""
      }, Ne = function() {
          return _(this).searchParams
      }, je = function() {
          var e = _(this).fragment;
          return e ? "#" + e : ""
      }, He = function(e, t) {
          return {
              get: e,
              set: t,
              configurable: !0,
              enumerable: !0
          }
      };
      if (i && c(Be, {
          href: He(Ce, (function(e) {
              var t = _(this)
                , r = String(e)
                , n = Ae(t, r);
              if (n)
                  throw TypeError(n);
              T(t.searchParams).updateSearchParams(t.query)
          }
          )),
          origin: He(Pe),
          protocol: He(Oe, (function(e) {
              var t = _(this);
              Ae(t, String(e) + ":", oe)
          }
          )),
          username: He(Me, (function(e) {
              var t = _(this)
                , r = h(String(e));
              if (!ee(t)) {
                  t.username = "";
                  for (var n = 0; n < r.length; n++)
                      t.username += K(r[n], Y)
              }
          }
          )),
          password: He(De, (function(e) {
              var t = _(this)
                , r = h(String(e));
              if (!ee(t)) {
                  t.password = "";
                  for (var n = 0; n < r.length; n++)
                      t.password += K(r[n], Y)
              }
          }
          )),
          host: He(Re, (function(e) {
              var t = _(this);
              t.cannotBeABaseURL || Ae(t, String(e), ge)
          }
          )),
          hostname: He(Fe, (function(e) {
              var t = _(this);
              t.cannotBeABaseURL || Ae(t, String(e), ye)
          }
          )),
          port: He(Le, (function(e) {
              var t = _(this);
              ee(t) || (e = String(e),
              "" == e ? t.port = null : Ae(t, e, be))
          }
          )),
          pathname: He(ze, (function(e) {
              var t = _(this);
              t.cannotBeABaseURL || (t.path = [],
              Ae(t, e + "", ke))
          }
          )),
          search: He(Ue, (function(e) {
              var t = _(this);
              e = String(e),
              "" == e ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)),
              t.query = "",
              Ae(t, e, Ee)),
              T(t.searchParams).updateSearchParams(t.query)
          }
          )),
          searchParams: He(Ne),
          hash: He(je, (function(e) {
              var t = _(this);
              e = String(e),
              "" != e ? ("#" == e.charAt(0) && (e = e.slice(1)),
              t.fragment = "",
              Ae(t, e, Ie)) : t.fragment = null
          }
          ))
      }),
      u(Be, "toJSON", (function() {
          return Ce.call(this)
      }
      ), {
          enumerable: !0
      }),
      u(Be, "toString", (function() {
          return Ce.call(this)
      }
      ), {
          enumerable: !0
      }),
      v) {
          var We = v.createObjectURL
            , qe = v.revokeObjectURL;
          We && u(xe, "createObjectURL", (function(e) {
              return We.apply(v, arguments)
          }
          )),
          qe && u(xe, "revokeObjectURL", (function(e) {
              return qe.apply(v, arguments)
          }
          ))
      }
      g(xe, "URL"),
      a({
          global: !0,
          forced: !o,
          sham: !i
      }, {
          URL: xe
      })
  },
  "2b79": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("df2f"), r("5980"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.Base
                , a = r.WordArray
                , i = t.algo
                , o = i.MD5
                , s = i.EvpKDF = n.extend({
                  cfg: n.extend({
                      keySize: 4,
                      hasher: o,
                      iterations: 1
                  }),
                  init: function(e) {
                      this.cfg = this.cfg.extend(e)
                  },
                  compute: function(e, t) {
                      var r, n = this.cfg, i = n.hasher.create(), o = a.create(), s = o.words, c = n.keySize, u = n.iterations;
                      while (s.length < c) {
                          r && i.update(r),
                          r = i.update(e).finalize(t),
                          i.reset();
                          for (var l = 1; l < u; l++)
                              r = i.finalize(r),
                              i.reset();
                          o.concat(r)
                      }
                      return o.sigBytes = 4 * c,
                      o
                  }
              });
              t.EvpKDF = function(e, t, r) {
                  return s.create(r).compute(e, t)
              }
          }(),
          e.EvpKDF
      }
      ))
  },
  "2c63": function(e, t, r) {
      e.exports = r("dc14")
  },
  "2cf4": function(e, t, r) {
      var n, a, i, o = r("da84"), s = r("d039"), c = r("c6b6"), u = r("0366"), l = r("1be4"), f = r("cc12"), d = r("1cdc"), h = o.location, p = o.setImmediate, m = o.clearImmediate, g = o.process, y = o.MessageChannel, b = o.Dispatch, v = 0, w = {}, T = "onreadystatechange", k = function(e) {
          if (w.hasOwnProperty(e)) {
              var t = w[e];
              delete w[e],
              t()
          }
      }, _ = function(e) {
          return function() {
              k(e)
          }
      }, S = function(e) {
          k(e.data)
      }, E = function(e) {
          o.postMessage(e + "", h.protocol + "//" + h.host)
      };
      p && m || (p = function(e) {
          var t = []
            , r = 1;
          while (arguments.length > r)
              t.push(arguments[r++]);
          return w[++v] = function() {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
          }
          ,
          n(v),
          v
      }
      ,
      m = function(e) {
          delete w[e]
      }
      ,
      "process" == c(g) ? n = function(e) {
          g.nextTick(_(e))
      }
      : b && b.now ? n = function(e) {
          b.now(_(e))
      }
      : y && !d ? (a = new y,
      i = a.port2,
      a.port1.onmessage = S,
      n = u(i.postMessage, i, 1)) : !o.addEventListener || "function" != typeof postMessage || o.importScripts || s(E) ? n = T in f("script") ? function(e) {
          l.appendChild(f("script"))[T] = function() {
              l.removeChild(this),
              k(e)
          }
      }
      : function(e) {
          setTimeout(_(e), 0)
      }
      : (n = E,
      o.addEventListener("message", S, !1))),
      e.exports = {
          set: p,
          clear: m
      }
  },
  "2cfe": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("4f83")
        , a = r("f654")
        , i = r("34eb")
        , o = r("e23f")
        , s = r("64a4")
        , c = i("music-metadata:parser:DSF");
      class u extends n.AbstractID3Parser {
          async _parse() {
              const e = this.tokenizer.position
                , t = await this.tokenizer.readToken(o.ChunkHeader);
              a.strictEqual(t.id, "DSD ", "Invalid chunk signature"),
              this.metadata.setFormat("container", "DSF"),
              this.metadata.setFormat("lossless", !0);
              const r = await this.tokenizer.readToken(o.DsdChunk);
              if (0 !== r.metadataPointer)
                  return c(`expect ID3v2 at offset=${r.metadataPointer}`),
                  await this.parseChunks(r.fileSize - t.size),
                  await this.tokenizer.ignore(r.metadataPointer - this.tokenizer.position - e),
                  (new s.ID3v2Parser).parse(this.metadata, this.tokenizer, this.options);
              c("No ID3v2 tag present")
          }
          async parseChunks(e) {
              while (e >= o.ChunkHeader.len) {
                  const t = await this.tokenizer.readToken(o.ChunkHeader);
                  switch (c(`Parsing chunk name=${t.id} size=${t.size}`),
                  t.id) {
                  case "fmt ":
                      const e = await this.tokenizer.readToken(o.FormatChunk);
                      this.metadata.setFormat("numberOfChannels", e.channelNum),
                      this.metadata.setFormat("sampleRate", e.samplingFrequency),
                      this.metadata.setFormat("bitsPerSample", e.bitsPerSample),
                      this.metadata.setFormat("numberOfSamples", e.sampleCount),
                      this.metadata.setFormat("duration", e.sampleCount / e.samplingFrequency);
                      const r = e.bitsPerSample * e.samplingFrequency * e.channelNum;
                      return void this.metadata.setFormat("bitrate", r);
                  default:
                      this.tokenizer.ignore(t.size - o.ChunkHeader.len);
                      break
                  }
                  e -= t.size
              }
          }
      }
      t.DsfParser = u
  },
  "2d00": function(e, t, r) {
      var n, a, i = r("da84"), o = r("342f"), s = i.process, c = s && s.versions, u = c && c.v8;
      u ? (n = u.split("."),
      a = n[0] + n[1]) : o && (n = o.match(/Edge\/(\d+)/),
      (!n || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/),
      n && (a = n[1]))),
      e.exports = a && +a
  },
  "2d78": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("dbbe")
            , a = r("b40f")
            , i = r("c4dc")
            , o = r("34eb")
            , s = r("03eb")
            , c = r("d66d")
            , u = r("9611")
            , l = r("65da")
            , f = r("a062")
            , d = r("5ea2")
            , h = r("5658")
            , p = r("a4e1")
            , m = r("22d0")
            , g = r("9507")
            , y = r("e907")
            , b = r("2cfe")
            , v = r("dee4")
            , w = r("73c2")
            , T = o("music-metadata:parser:factory");
          function k(e) {
              const t = a.parse(e)
                , r = i.parse(t.type);
              return {
                  type: r.type,
                  subtype: r.subtype,
                  suffix: r.suffix,
                  parameters: t.parameters
              }
          }
          t.parseHttpContentType = k;
          class _ {
              static async parseOnContentType(e, t) {
                  const {mimeType: r, path: n, url: a} = await e.fileInfo
                    , i = _.getParserIdForMimeType(r) || _.getParserIdForExtension(n) || _.getParserIdForExtension(a);
                  return i || T("No parser found for MIME-type / extension: " + r),
                  this.parse(e, i, t)
              }
              static async parse(t, r, a) {
                  if (!r) {
                      T("Guess parser on content...");
                      const a = e.alloc(4100);
                      if (await t.peekBuffer(a, {
                          mayBeLess: !0
                      }),
                      t.fileInfo.path && (r = this.getParserIdForExtension(t.fileInfo.path)),
                      !r) {
                          const e = await n.fromBuffer(a);
                          if (!e)
                              throw new Error("Failed to determine audio format");
                          if (T(`Guessed file type is mime=${e.mime}, extension=${e.ext}`),
                          r = _.getParserIdForMimeType(e.mime),
                          !r)
                              throw new Error("Guessed MIME-type not supported: " + e.mime)
                      }
                  }
                  return this._parse(t, r, a)
              }
              static getParserIdForExtension(e) {
                  if (!e)
                      return;
                  const t = this.getExtension(e).toLocaleLowerCase() || e;
                  switch (t) {
                  case ".mp2":
                  case ".mp3":
                  case ".m2a":
                  case ".aac":
                      return "mpeg";
                  case ".ape":
                      return "apev2";
                  case ".mp4":
                  case ".m4a":
                  case ".m4b":
                  case ".m4pa":
                  case ".m4v":
                  case ".m4r":
                  case ".3gp":
                      return "mp4";
                  case ".wma":
                  case ".wmv":
                  case ".asf":
                      return "asf";
                  case ".flac":
                      return "flac";
                  case ".ogg":
                  case ".ogv":
                  case ".oga":
                  case ".ogm":
                  case ".ogx":
                  case ".opus":
                  case ".spx":
                      return "ogg";
                  case ".aif":
                  case ".aiff":
                  case ".aifc":
                      return "aiff";
                  case ".wav":
                      return "riff";
                  case ".wv":
                  case ".wvp":
                      return "wavpack";
                  case ".mpc":
                      return "musepack";
                  case ".dsf":
                      return "dsf";
                  case ".dff":
                      return "dsdiff";
                  case ".mka":
                  case ".mkv":
                  case ".mk3d":
                  case ".mks":
                  case ".webm":
                      return "matroska"
                  }
              }
              static async loadParser(e) {
                  switch (e) {
                  case "aiff":
                      return new c.AIFFParser;
                  case "apev2":
                      return new u.APEv2Parser;
                  case "asf":
                      return new l.AsfParser;
                  case "dsf":
                      return new b.DsfParser;
                  case "dsdiff":
                      return new v.DsdiffParser;
                  case "flac":
                      return new f.FlacParser;
                  case "mp4":
                      return new d.MP4Parser;
                  case "mpeg":
                      return new h.MpegParser;
                  case "musepack":
                      return new p.default;
                  case "ogg":
                      return new m.OggParser;
                  case "riff":
                      return new g.WaveParser;
                  case "wavpack":
                      return new y.WavPackParser;
                  case "matroska":
                      return new w.MatroskaParser;
                  default:
                      throw new Error(`Unknown parser type: ${e}`)
                  }
              }
              static async _parse(e, t, r={}) {
                  const n = await _.loadParser(t)
                    , a = new s.MetadataCollector(r);
                  return await n.init(a, e, r).parse(),
                  a.toCommonMetadata()
              }
              static getExtension(e) {
                  const t = e.lastIndexOf(".");
                  return -1 === t ? "" : e.slice(t)
              }
              static getParserIdForMimeType(e) {
                  let t;
                  try {
                      t = k(e)
                  } catch (n) {
                      return void T(`Invalid HTTP Content-Type header value: ${e}`)
                  }
                  const r = 0 === t.subtype.indexOf("x-") ? t.subtype.substring(2) : t.subtype;
                  switch (t.type) {
                  case "audio":
                      switch (r) {
                      case "mp3":
                      case "mpeg":
                          return "mpeg";
                      case "flac":
                          return "flac";
                      case "ape":
                      case "monkeys-audio":
                          return "apev2";
                      case "mp4":
                      case "aac":
                      case "aacp":
                      case "m4a":
                          return "mp4";
                      case "ogg":
                      case "opus":
                      case "speex":
                          return "ogg";
                      case "ms-wma":
                      case "ms-wmv":
                      case "ms-asf":
                          return "asf";
                      case "aiff":
                      case "aif":
                      case "aifc":
                          return "aiff";
                      case "vnd.wave":
                      case "wav":
                      case "wave":
                          return "riff";
                      case "wavpack":
                          return "wavpack";
                      case "musepack":
                          return "musepack";
                      case "matroska":
                      case "webm":
                          return "matroska";
                      case "dsf":
                          return "dsf"
                      }
                      break;
                  case "video":
                      switch (r) {
                      case "ms-asf":
                      case "ms-wmv":
                          return "asf";
                      case "m4v":
                      case "mp4":
                          return "mp4";
                      case "ogg":
                          return "ogg";
                      case "matroska":
                      case "webm":
                          return "matroska"
                      }
                      break;
                  case "application":
                      switch (r) {
                      case "vnd.ms-asf":
                          return "asf";
                      case "ogg":
                          return "ogg"
                      }
                      break
                  }
              }
          }
          t.ParserFactory = _
      }
      ).call(this, r("b639").Buffer)
  },
  "2e67": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      class n {
          static decode(e) {
              let t = "";
              for (const r in e)
                  e.hasOwnProperty(r) && (t += n.codePointToString(n.singleByteDecoder(e[r])));
              return t
          }
          static inRange(e, t, r) {
              return t <= e && e <= r
          }
          static codePointToString(e) {
              return e <= 65535 ? String.fromCharCode(e) : (e -= 65536,
              String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
          }
          static singleByteDecoder(e) {
              if (n.inRange(e, 0, 127))
                  return e;
              const t = n.windows1252[e - 128];
              if (null === t)
                  throw Error("invaliding encoding");
              return t
          }
      }
      t.Windows1292Decoder = n,
      n.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]
  },
  3022: function(e, t, r) {
      (function(e) {
          var n = Object.getOwnPropertyDescriptors || function(e) {
              for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
                  r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
              return r
          }
            , a = /%[sdj%]/g;
          t.format = function(e) {
              if (!k(e)) {
                  for (var t = [], r = 0; r < arguments.length; r++)
                      t.push(s(arguments[r]));
                  return t.join(" ")
              }
              r = 1;
              for (var n = arguments, i = n.length, o = String(e).replace(a, (function(e) {
                  if ("%%" === e)
                      return "%";
                  if (r >= i)
                      return e;
                  switch (e) {
                  case "%s":
                      return String(n[r++]);
                  case "%d":
                      return Number(n[r++]);
                  case "%j":
                      try {
                          return JSON.stringify(n[r++])
                      } catch (t) {
                          return "[Circular]"
                      }
                  default:
                      return e
                  }
              }
              )), c = n[r]; r < i; c = n[++r])
                  v(c) || !I(c) ? o += " " + c : o += " " + s(c);
              return o
          }
          ,
          t.deprecate = function(r, n) {
              if ("undefined" !== typeof e && !0 === e.noDeprecation)
                  return r;
              if ("undefined" === typeof e)
                  return function() {
                      return t.deprecate(r, n).apply(this, arguments)
                  }
                  ;
              var a = !1;
              function i() {
                  if (!a) {
                      if (e.throwDeprecation)
                          throw new Error(n);
                      e.traceDeprecation ? console.trace(n) : console.error(n),
                      a = !0
                  }
                  return r.apply(this, arguments)
              }
              return i
          }
          ;
          var i, o = {};
          function s(e, r) {
              var n = {
                  seen: [],
                  stylize: u
              };
              return arguments.length >= 3 && (n.depth = arguments[2]),
              arguments.length >= 4 && (n.colors = arguments[3]),
              b(r) ? n.showHidden = r : r && t._extend(n, r),
              S(n.showHidden) && (n.showHidden = !1),
              S(n.depth) && (n.depth = 2),
              S(n.colors) && (n.colors = !1),
              S(n.customInspect) && (n.customInspect = !0),
              n.colors && (n.stylize = c),
              f(n, e, n.depth)
          }
          function c(e, t) {
              var r = s.styles[t];
              return r ? "[" + s.colors[r][0] + "m" + e + "[" + s.colors[r][1] + "m" : e
          }
          function u(e, t) {
              return e
          }
          function l(e) {
              var t = {};
              return e.forEach((function(e, r) {
                  t[e] = !0
              }
              )),
              t
          }
          function f(e, r, n) {
              if (e.customInspect && r && B(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                  var a = r.inspect(n, e);
                  return k(a) || (a = f(e, a, n)),
                  a
              }
              var i = d(e, r);
              if (i)
                  return i;
              var o = Object.keys(r)
                , s = l(o);
              if (e.showHidden && (o = Object.getOwnPropertyNames(r)),
              x(r) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
                  return h(r);
              if (0 === o.length) {
                  if (B(r)) {
                      var c = r.name ? ": " + r.name : "";
                      return e.stylize("[Function" + c + "]", "special")
                  }
                  if (E(r))
                      return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                  if (A(r))
                      return e.stylize(Date.prototype.toString.call(r), "date");
                  if (x(r))
                      return h(r)
              }
              var u, b = "", v = !1, w = ["{", "}"];
              if (y(r) && (v = !0,
              w = ["[", "]"]),
              B(r)) {
                  var T = r.name ? ": " + r.name : "";
                  b = " [Function" + T + "]"
              }
              return E(r) && (b = " " + RegExp.prototype.toString.call(r)),
              A(r) && (b = " " + Date.prototype.toUTCString.call(r)),
              x(r) && (b = " " + h(r)),
              0 !== o.length || v && 0 != r.length ? n < 0 ? E(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r),
              u = v ? p(e, r, n, s, o) : o.map((function(t) {
                  return m(e, r, n, s, t, v)
              }
              )),
              e.seen.pop(),
              g(u, b, w)) : w[0] + b + w[1]
          }
          function d(e, t) {
              if (S(t))
                  return e.stylize("undefined", "undefined");
              if (k(t)) {
                  var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                  return e.stylize(r, "string")
              }
              return T(t) ? e.stylize("" + t, "number") : b(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0
          }
          function h(e) {
              return "[" + Error.prototype.toString.call(e) + "]"
          }
          function p(e, t, r, n, a) {
              for (var i = [], o = 0, s = t.length; o < s; ++o)
                  R(t, String(o)) ? i.push(m(e, t, r, n, String(o), !0)) : i.push("");
              return a.forEach((function(a) {
                  a.match(/^\d+$/) || i.push(m(e, t, r, n, a, !0))
              }
              )),
              i
          }
          function m(e, t, r, n, a, i) {
              var o, s, c;
              if (c = Object.getOwnPropertyDescriptor(t, a) || {
                  value: t[a]
              },
              c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")),
              R(n, a) || (o = "[" + a + "]"),
              s || (e.seen.indexOf(c.value) < 0 ? (s = v(r) ? f(e, c.value, null) : f(e, c.value, r - 1),
              s.indexOf("\n") > -1 && (s = i ? s.split("\n").map((function(e) {
                  return "  " + e
              }
              )).join("\n").substr(2) : "\n" + s.split("\n").map((function(e) {
                  return "   " + e
              }
              )).join("\n"))) : s = e.stylize("[Circular]", "special")),
              S(o)) {
                  if (i && a.match(/^\d+$/))
                      return s;
                  o = JSON.stringify("" + a),
                  o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2),
                  o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                  o = e.stylize(o, "string"))
              }
              return o + ": " + s
          }
          function g(e, t, r) {
              var n = e.reduce((function(e, t) {
                  return t.indexOf("\n") >= 0 && 0,
                  e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
              }
              ), 0);
              return n > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
          }
          function y(e) {
              return Array.isArray(e)
          }
          function b(e) {
              return "boolean" === typeof e
          }
          function v(e) {
              return null === e
          }
          function w(e) {
              return null == e
          }
          function T(e) {
              return "number" === typeof e
          }
          function k(e) {
              return "string" === typeof e
          }
          function _(e) {
              return "symbol" === typeof e
          }
          function S(e) {
              return void 0 === e
          }
          function E(e) {
              return I(e) && "[object RegExp]" === P(e)
          }
          function I(e) {
              return "object" === typeof e && null !== e
          }
          function A(e) {
              return I(e) && "[object Date]" === P(e)
          }
          function x(e) {
              return I(e) && ("[object Error]" === P(e) || e instanceof Error)
          }
          function B(e) {
              return "function" === typeof e
          }
          function C(e) {
              return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e
          }
          function P(e) {
              return Object.prototype.toString.call(e)
          }
          function O(e) {
              return e < 10 ? "0" + e.toString(10) : e.toString(10)
          }
          t.debuglog = function(r) {
              if (S(i) && (i = Object({
                  NODE_ENV: "production",
                  BASE_URL: ""
              }).NODE_DEBUG || ""),
              r = r.toUpperCase(),
              !o[r])
                  if (new RegExp("\\b" + r + "\\b","i").test(i)) {
                      var n = e.pid;
                      o[r] = function() {
                          var e = t.format.apply(t, arguments);
                          console.error("%s %d: %s", r, n, e)
                      }
                  } else
                      o[r] = function() {}
                      ;
              return o[r]
          }
          ,
          t.inspect = s,
          s.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39]
          },
          s.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red"
          },
          t.isArray = y,
          t.isBoolean = b,
          t.isNull = v,
          t.isNullOrUndefined = w,
          t.isNumber = T,
          t.isString = k,
          t.isSymbol = _,
          t.isUndefined = S,
          t.isRegExp = E,
          t.isObject = I,
          t.isDate = A,
          t.isError = x,
          t.isFunction = B,
          t.isPrimitive = C,
          t.isBuffer = r("d60a");
          var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          function D() {
              var e = new Date
                , t = [O(e.getHours()), O(e.getMinutes()), O(e.getSeconds())].join(":");
              return [e.getDate(), M[e.getMonth()], t].join(" ")
          }
          function R(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }
          t.log = function() {
              console.log("%s - %s", D(), t.format.apply(t, arguments))
          }
          ,
          t.inherits = r("28a0"),
          t._extend = function(e, t) {
              if (!t || !I(t))
                  return e;
              var r = Object.keys(t)
                , n = r.length;
              while (n--)
                  e[r[n]] = t[r[n]];
              return e
          }
          ;
          var F = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : void 0;
          function L(e, t) {
              if (!e) {
                  var r = new Error("Promise was rejected with a falsy value");
                  r.reason = e,
                  e = r
              }
              return t(e)
          }
          function z(t) {
              if ("function" !== typeof t)
                  throw new TypeError('The "original" argument must be of type Function');
              function r() {
                  for (var r = [], n = 0; n < arguments.length; n++)
                      r.push(arguments[n]);
                  var a = r.pop();
                  if ("function" !== typeof a)
                      throw new TypeError("The last argument must be of type Function");
                  var i = this
                    , o = function() {
                      return a.apply(i, arguments)
                  };
                  t.apply(this, r).then((function(t) {
                      e.nextTick(o, null, t)
                  }
                  ), (function(t) {
                      e.nextTick(L, t, o)
                  }
                  ))
              }
              return Object.setPrototypeOf(r, Object.getPrototypeOf(t)),
              Object.defineProperties(r, n(t)),
              r
          }
          t.promisify = function(e) {
              if ("function" !== typeof e)
                  throw new TypeError('The "original" argument must be of type Function');
              if (F && e[F]) {
                  var t = e[F];
                  if ("function" !== typeof t)
                      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                  return Object.defineProperty(t, F, {
                      value: t,
                      enumerable: !1,
                      writable: !1,
                      configurable: !0
                  }),
                  t
              }
              function t() {
                  for (var t, r, n = new Promise((function(e, n) {
                      t = e,
                      r = n
                  }
                  )), a = [], i = 0; i < arguments.length; i++)
                      a.push(arguments[i]);
                  a.push((function(e, n) {
                      e ? r(e) : t(n)
                  }
                  ));
                  try {
                      e.apply(this, a)
                  } catch (o) {
                      r(o)
                  }
                  return n
              }
              return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
              F && Object.defineProperty(t, F, {
                  value: t,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0
              }),
              Object.defineProperties(t, n(e))
          }
          ,
          t.promisify.custom = F,
          t.callbackify = z
      }
      ).call(this, r("4362"))
  },
  3189: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("20f8");
      class a {
          constructor(e, t) {
              this.buffer = e,
              this.position = 0,
              this.fileInfo = t || {},
              this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e.length
          }
          async readBuffer(e, t, r, n) {
              return this.position = n || this.position,
              this.peekBuffer(e, t, r, this.position).then(e=>(this.position += e,
              e))
          }
          async peekBuffer(e, t, r, a, i=!1) {
              a = a || this.position,
              r || (r = e.length);
              const o = Math.min(this.buffer.length - a, r);
              if (!i && o < r)
                  throw new n.EndOfStreamError;
              return this.buffer.copy(e, t, a, a + o),
              o
          }
          async readToken(e, t) {
              this.position = t || this.position;
              try {
                  const t = this.peekToken(e, this.position);
                  return this.position += e.len,
                  t
              } catch (r) {
                  throw this.position += this.buffer.length - t,
                  r
              }
          }
          async peekToken(e, t=this.position) {
              if (this.buffer.length - t < e.len)
                  throw new n.EndOfStreamError;
              return e.get(this.buffer, t)
          }
          async readNumber(e) {
              return this.readToken(e)
          }
          async peekNumber(e) {
              return this.peekToken(e)
          }
          async ignore(e) {
              const t = Math.min(this.buffer.length - this.position, e);
              return this.position += t,
              t
          }
          async close() {}
      }
      t.BufferTokenizer = a
  },
  "31de": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      function(e) {
          e[e["string"] = 0] = "string",
          e[e["uint"] = 1] = "uint",
          e[e["uid"] = 2] = "uid",
          e[e["bool"] = 3] = "bool",
          e[e["binary"] = 4] = "binary",
          e[e["float"] = 5] = "float"
      }(t.DataType || (t.DataType = {})),
      function(e) {
          e[e["shot"] = 10] = "shot",
          e[e["scene"] = 20] = "scene",
          e[e["track"] = 30] = "track",
          e[e["part"] = 40] = "part",
          e[e["album"] = 50] = "album",
          e[e["edition"] = 60] = "edition",
          e[e["collection"] = 70] = "collection"
      }(t.TargetType || (t.TargetType = {})),
      function(e) {
          e[e["video"] = 1] = "video",
          e[e["audio"] = 2] = "audio",
          e[e["complex"] = 3] = "complex",
          e[e["logo"] = 4] = "logo",
          e[e["subtitle"] = 17] = "subtitle",
          e[e["button"] = 18] = "button",
          e[e["control"] = 32] = "control"
      }(t.TrackType || (t.TrackType = {}))
  },
  "320c": function(e, t, r) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
      var n = Object.getOwnPropertySymbols
        , a = Object.prototype.hasOwnProperty
        , i = Object.prototype.propertyIsEnumerable;
      function o(e) {
          if (null === e || void 0 === e)
              throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e)
      }
      function s() {
          try {
              if (!Object.assign)
                  return !1;
              var e = new String("abc");
              if (e[5] = "de",
              "5" === Object.getOwnPropertyNames(e)[0])
                  return !1;
              for (var t = {}, r = 0; r < 10; r++)
                  t["_" + String.fromCharCode(r)] = r;
              var n = Object.getOwnPropertyNames(t).map((function(e) {
                  return t[e]
              }
              ));
              if ("0123456789" !== n.join(""))
                  return !1;
              var a = {};
              return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                  a[e] = e
              }
              )),
              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("")
          } catch (i) {
              return !1
          }
      }
      e.exports = s() ? Object.assign : function(e, t) {
          for (var r, s, c = o(e), u = 1; u < arguments.length; u++) {
              for (var l in r = Object(arguments[u]),
              r)
                  a.call(r, l) && (c[l] = r[l]);
              if (n) {
                  s = n(r);
                  for (var f = 0; f < s.length; f++)
                      i.call(r, s[f]) && (c[s[f]] = r[s[f]])
              }
          }
          return c
      }
  },
  3252: function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function(t) {
              var r = e
                , n = r.lib
                , a = n.Base
                , i = n.WordArray
                , o = r.x64 = {};
              o.Word = a.extend({
                  init: function(e, t) {
                      this.high = e,
                      this.low = t
                  }
              }),
              o.WordArray = a.extend({
                  init: function(e, r) {
                      e = this.words = e || [],
                      this.sigBytes = r != t ? r : 8 * e.length
                  },
                  toX32: function() {
                      for (var e = this.words, t = e.length, r = [], n = 0; n < t; n++) {
                          var a = e[n];
                          r.push(a.high),
                          r.push(a.low)
                      }
                      return i.create(r, this.sigBytes)
                  },
                  clone: function() {
                      for (var e = a.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++)
                          t[n] = t[n].clone();
                      return e
                  }
              })
          }(),
          e
      }
      ))
  },
  3280: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("e58c")
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("lastIndexOf", (function(e) {
          return a.apply(i(this), arguments)
      }
      ))
  },
  "342f": function(e, t, r) {
      var n = r("d066");
      e.exports = n("navigator", "userAgent") || ""
  },
  3452: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("3252"), r("17e1"), r("a8ce"), r("1132"), r("72fe"), r("df2f"), r("94f8"), r("191b"), r("d6e6"), r("b86b"), r("e61b"), r("10b7"), r("5980"), r("7bbc"), r("2b79"), r("38ba"), r("00bb"), r("f4ea"), r("aaef"), r("4ba9"), r("81bf"), r("a817"), r("a11b"), r("8cef"), r("2a66"), r("b86c"), r("6d08"), r("c198"), r("a40e"), r("c3b6"), r("1382"), r("3d5a"))
      }
      )(0, (function(e) {
          return e
      }
      ))
  },
  "34eb": function(e, t, r) {
      (function(n) {
          function a() {
              return !("undefined" === typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" === typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          }
          function i(t) {
              if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
              !this.useColors)
                  return;
              const r = "color: " + this.color;
              t.splice(1, 0, r, "color: inherit");
              let n = 0
                , a = 0;
              t[0].replace(/%[a-zA-Z%]/g, e=>{
                  "%%" !== e && (n++,
                  "%c" === e && (a = n))
              }
              ),
              t.splice(a, 0, r)
          }
          function o(...e) {
              return "object" === typeof console && console.log && console.log(...e)
          }
          function s(e) {
              try {
                  e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
              } catch (r) {}
          }
          function c() {
              let e;
              try {
                  e = t.storage.getItem("debug")
              } catch (r) {}
              return !e && "undefined" !== typeof n && "env"in n && (e = Object({
                  NODE_ENV: "production",
                  BASE_URL: ""
              }).DEBUG),
              e
          }
          function u() {
              try {
                  return localStorage
              } catch (e) {}
          }
          t.log = o,
          t.formatArgs = i,
          t.save = s,
          t.load = c,
          t.useColors = a,
          t.storage = u(),
          t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
          e.exports = r("dc90")(t);
          const {formatters: l} = e.exports;
          l.j = function(e) {
              try {
                  return JSON.stringify(e)
              } catch (t) {
                  return "[UnexpectedJSONParseError]: " + t.message
              }
          }
      }
      ).call(this, r("4362"))
  },
  "35a1": function(e, t, r) {
      var n = r("f5df")
        , a = r("3f8c")
        , i = r("b622")
        , o = i("iterator");
      e.exports = function(e) {
          if (void 0 != e)
              return e[o] || e["@@iterator"] || a[n(e)]
      }
  },
  "377f": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("20f8");
      class a {
          constructor(e, t) {
              this.buffer = e,
              this.position = 0,
              this.fileInfo = t || {},
              this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e.length
          }
          async readBuffer(e, t) {
              if (t && t.position) {
                  if (t.position < this.position)
                      throw new Error("`options.position` can be less than `tokenizer.position`");
                  this.position = t.position
              }
              return this.peekBuffer(e, t).then(e=>(this.position += e,
              e))
          }
          async peekBuffer(e, t) {
              let r = 0
                , a = e.length
                , i = this.position;
              if (t) {
                  if (t.position) {
                      if (t.position < this.position)
                          throw new Error("`options.position` can be less than `tokenizer.position`");
                      i = t.position
                  }
                  Number.isInteger(t.length) ? a = t.length : a -= t.offset || 0,
                  t.offset && (r = t.offset)
              }
              if (0 === a)
                  return Promise.resolve(0);
              i = i || this.position,
              a || (a = e.length);
              const o = Math.min(this.buffer.length - i, a);
              if (t && t.mayBeLess || !(o < a))
                  return this.buffer.copy(e, r, i, i + o),
                  o;
              throw new n.EndOfStreamError
          }
          async readToken(e, t) {
              this.position = t || this.position;
              try {
                  const t = this.peekToken(e, this.position);
                  return this.position += e.len,
                  t
              } catch (r) {
                  throw this.position += this.buffer.length - t,
                  r
              }
          }
          async peekToken(e, t=this.position) {
              if (this.buffer.length - t < e.len)
                  throw new n.EndOfStreamError;
              return e.get(this.buffer, t)
          }
          async readNumber(e) {
              return this.readToken(e)
          }
          async peekNumber(e) {
              return this.peekToken(e)
          }
          async ignore(e) {
              const t = Math.min(this.buffer.length - this.position, e);
              return this.position += t,
              t
          }
          async close() {}
      }
      t.BufferTokenizer = a
  },
  "37d4": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97")
        , a = {
          title: "title",
          artist: "artist",
          album: "album",
          year: "year",
          comment: "comment",
          track: "track",
          genre: "genre"
      };
      class i extends n.CommonTagMapper {
          constructor() {
              super(["ID3v1"], a)
          }
      }
      t.ID3v1TagMapper = i
  },
  "37e8": function(e, t, r) {
      var n = r("83ab")
        , a = r("9bf2")
        , i = r("825a")
        , o = r("df75");
      e.exports = n ? Object.defineProperties : function(e, t) {
          i(e);
          var r, n = o(t), s = n.length, c = 0;
          while (s > c)
              a.f(e, r = n[c++], t[r]);
          return e
      }
  },
  "38ba": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("2b79"))
      }
      )(0, (function(e) {
          e.lib.Cipher || function(t) {
              var r = e
                , n = r.lib
                , a = n.Base
                , i = n.WordArray
                , o = n.BufferedBlockAlgorithm
                , s = r.enc
                , c = (s.Utf8,
              s.Base64)
                , u = r.algo
                , l = u.EvpKDF
                , f = n.Cipher = o.extend({
                  cfg: a.extend(),
                  createEncryptor: function(e, t) {
                      return this.create(this._ENC_XFORM_MODE, e, t)
                  },
                  createDecryptor: function(e, t) {
                      return this.create(this._DEC_XFORM_MODE, e, t)
                  },
                  init: function(e, t, r) {
                      this.cfg = this.cfg.extend(r),
                      this._xformMode = e,
                      this._key = t,
                      this.reset()
                  },
                  reset: function() {
                      o.reset.call(this),
                      this._doReset()
                  },
                  process: function(e) {
                      return this._append(e),
                      this._process()
                  },
                  finalize: function(e) {
                      e && this._append(e);
                      var t = this._doFinalize();
                      return t
                  },
                  keySize: 4,
                  ivSize: 4,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: function() {
                      function e(e) {
                          return "string" == typeof e ? _ : w
                      }
                      return function(t) {
                          return {
                              encrypt: function(r, n, a) {
                                  return e(n).encrypt(t, r, n, a)
                              },
                              decrypt: function(r, n, a) {
                                  return e(n).decrypt(t, r, n, a)
                              }
                          }
                      }
                  }()
              })
                , d = (n.StreamCipher = f.extend({
                  _doFinalize: function() {
                      var e = this._process(!0);
                      return e
                  },
                  blockSize: 1
              }),
              r.mode = {})
                , h = n.BlockCipherMode = a.extend({
                  createEncryptor: function(e, t) {
                      return this.Encryptor.create(e, t)
                  },
                  createDecryptor: function(e, t) {
                      return this.Decryptor.create(e, t)
                  },
                  init: function(e, t) {
                      this._cipher = e,
                      this._iv = t
                  }
              })
                , p = d.CBC = function() {
                  var e = h.extend();
                  function r(e, r, n) {
                      var a, i = this._iv;
                      i ? (a = i,
                      this._iv = t) : a = this._prevBlock;
                      for (var o = 0; o < n; o++)
                          e[r + o] ^= a[o]
                  }
                  return e.Encryptor = e.extend({
                      processBlock: function(e, t) {
                          var n = this._cipher
                            , a = n.blockSize;
                          r.call(this, e, t, a),
                          n.encryptBlock(e, t),
                          this._prevBlock = e.slice(t, t + a)
                      }
                  }),
                  e.Decryptor = e.extend({
                      processBlock: function(e, t) {
                          var n = this._cipher
                            , a = n.blockSize
                            , i = e.slice(t, t + a);
                          n.decryptBlock(e, t),
                          r.call(this, e, t, a),
                          this._prevBlock = i
                      }
                  }),
                  e
              }()
                , m = r.pad = {}
                , g = m.Pkcs7 = {
                  pad: function(e, t) {
                      for (var r = 4 * t, n = r - e.sigBytes % r, a = n << 24 | n << 16 | n << 8 | n, o = [], s = 0; s < n; s += 4)
                          o.push(a);
                      var c = i.create(o, n);
                      e.concat(c)
                  },
                  unpad: function(e) {
                      var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                      e.sigBytes -= t
                  }
              }
                , y = (n.BlockCipher = f.extend({
                  cfg: f.cfg.extend({
                      mode: p,
                      padding: g
                  }),
                  reset: function() {
                      var e;
                      f.reset.call(this);
                      var t = this.cfg
                        , r = t.iv
                        , n = t.mode;
                      this._xformMode == this._ENC_XFORM_MODE ? e = n.createEncryptor : (e = n.createDecryptor,
                      this._minBufferSize = 1),
                      this._mode && this._mode.__creator == e ? this._mode.init(this, r && r.words) : (this._mode = e.call(n, this, r && r.words),
                      this._mode.__creator = e)
                  },
                  _doProcessBlock: function(e, t) {
                      this._mode.processBlock(e, t)
                  },
                  _doFinalize: function() {
                      var e, t = this.cfg.padding;
                      return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize),
                      e = this._process(!0)) : (e = this._process(!0),
                      t.unpad(e)),
                      e
                  },
                  blockSize: 4
              }),
              n.CipherParams = a.extend({
                  init: function(e) {
                      this.mixIn(e)
                  },
                  toString: function(e) {
                      return (e || this.formatter).stringify(this)
                  }
              }))
                , b = r.format = {}
                , v = b.OpenSSL = {
                  stringify: function(e) {
                      var t, r = e.ciphertext, n = e.salt;
                      return t = n ? i.create([1398893684, 1701076831]).concat(n).concat(r) : r,
                      t.toString(c)
                  },
                  parse: function(e) {
                      var t, r = c.parse(e), n = r.words;
                      return 1398893684 == n[0] && 1701076831 == n[1] && (t = i.create(n.slice(2, 4)),
                      n.splice(0, 4),
                      r.sigBytes -= 16),
                      y.create({
                          ciphertext: r,
                          salt: t
                      })
                  }
              }
                , w = n.SerializableCipher = a.extend({
                  cfg: a.extend({
                      format: v
                  }),
                  encrypt: function(e, t, r, n) {
                      n = this.cfg.extend(n);
                      var a = e.createEncryptor(r, n)
                        , i = a.finalize(t)
                        , o = a.cfg;
                      return y.create({
                          ciphertext: i,
                          key: r,
                          iv: o.iv,
                          algorithm: e,
                          mode: o.mode,
                          padding: o.padding,
                          blockSize: e.blockSize,
                          formatter: n.format
                      })
                  },
                  decrypt: function(e, t, r, n) {
                      n = this.cfg.extend(n),
                      t = this._parse(t, n.format);
                      var a = e.createDecryptor(r, n).finalize(t.ciphertext);
                      return a
                  },
                  _parse: function(e, t) {
                      return "string" == typeof e ? t.parse(e, this) : e
                  }
              })
                , T = r.kdf = {}
                , k = T.OpenSSL = {
                  execute: function(e, t, r, n) {
                      n || (n = i.random(8));
                      var a = l.create({
                          keySize: t + r
                      }).compute(e, n)
                        , o = i.create(a.words.slice(t), 4 * r);
                      return a.sigBytes = 4 * t,
                      y.create({
                          key: a,
                          iv: o,
                          salt: n
                      })
                  }
              }
                , _ = n.PasswordBasedCipher = w.extend({
                  cfg: w.cfg.extend({
                      kdf: k
                  }),
                  encrypt: function(e, t, r, n) {
                      n = this.cfg.extend(n);
                      var a = n.kdf.execute(r, e.keySize, e.ivSize);
                      n.iv = a.iv;
                      var i = w.encrypt.call(this, e, t, a.key, n);
                      return i.mixIn(a),
                      i
                  },
                  decrypt: function(e, t, r, n) {
                      n = this.cfg.extend(n),
                      t = this._parse(t, n.format);
                      var a = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
                      n.iv = a.iv;
                      var i = w.decrypt.call(this, e, t, a.key, n);
                      return i
                  }
              })
          }()
      }
      ))
  },
  "3a7b": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").findIndex
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("findIndex", (function(e) {
          return a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  "3a7c": function(e, t, r) {
      (function(e) {
          function r(e) {
              return Array.isArray ? Array.isArray(e) : "[object Array]" === g(e)
          }
          function n(e) {
              return "boolean" === typeof e
          }
          function a(e) {
              return null === e
          }
          function i(e) {
              return null == e
          }
          function o(e) {
              return "number" === typeof e
          }
          function s(e) {
              return "string" === typeof e
          }
          function c(e) {
              return "symbol" === typeof e
          }
          function u(e) {
              return void 0 === e
          }
          function l(e) {
              return "[object RegExp]" === g(e)
          }
          function f(e) {
              return "object" === typeof e && null !== e
          }
          function d(e) {
              return "[object Date]" === g(e)
          }
          function h(e) {
              return "[object Error]" === g(e) || e instanceof Error
          }
          function p(e) {
              return "function" === typeof e
          }
          function m(e) {
              return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e
          }
          function g(e) {
              return Object.prototype.toString.call(e)
          }
          t.isArray = r,
          t.isBoolean = n,
          t.isNull = a,
          t.isNullOrUndefined = i,
          t.isNumber = o,
          t.isString = s,
          t.isSymbol = c,
          t.isUndefined = u,
          t.isRegExp = l,
          t.isObject = f,
          t.isDate = d,
          t.isError = h,
          t.isFunction = p,
          t.isPrimitive = m,
          t.isBuffer = e.isBuffer
      }
      ).call(this, r("b639").Buffer)
  },
  "3bbe": function(e, t, r) {
      var n = r("861d");
      e.exports = function(e) {
          if (!n(e) && null !== e)
              throw TypeError("Can't set " + String(e) + " as a prototype");
          return e
      }
  },
  "3c5d": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("50c4")
        , i = r("182d")
        , o = r("7b0b")
        , s = r("d039")
        , c = n.aTypedArray
        , u = n.exportTypedArrayMethod
        , l = s((function() {
          new Int8Array(1).set({})
      }
      ));
      u("set", (function(e) {
          c(this);
          var t = i(arguments.length > 1 ? arguments[1] : void 0, 1)
            , r = this.length
            , n = o(e)
            , s = a(n.length)
            , u = 0;
          if (s + t > r)
              throw RangeError("Wrong length");
          while (u < s)
              this[t + u] = n[u++]
      }
      ), l)
  },
  "3ca3": function(e, t, r) {
      "use strict";
      var n = r("6547").charAt
        , a = r("69f3")
        , i = r("7dd0")
        , o = "String Iterator"
        , s = a.set
        , c = a.getterFor(o);
      i(String, "String", (function(e) {
          s(this, {
              type: o,
              string: String(e),
              index: 0
          })
      }
      ), (function() {
          var e, t = c(this), r = t.string, a = t.index;
          return a >= r.length ? {
              value: void 0,
              done: !0
          } : (e = n(r, a),
          t.index += e.length,
          {
              value: e,
              done: !1
          })
      }
      ))
  },
  "3d5a": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("1132"), r("72fe"), r("2b79"), r("38ba"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.StreamCipher
                , a = t.algo
                , i = []
                , o = []
                , s = []
                , c = a.RabbitLegacy = n.extend({
                  _doReset: function() {
                      var e = this._key.words
                        , t = this.cfg.iv
                        , r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16]
                        , n = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                      this._b = 0;
                      for (var a = 0; a < 4; a++)
                          u.call(this);
                      for (a = 0; a < 8; a++)
                          n[a] ^= r[a + 4 & 7];
                      if (t) {
                          var i = t.words
                            , o = i[0]
                            , s = i[1]
                            , c = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
                            , l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                            , f = c >>> 16 | 4294901760 & l
                            , d = l << 16 | 65535 & c;
                          n[0] ^= c,
                          n[1] ^= f,
                          n[2] ^= l,
                          n[3] ^= d,
                          n[4] ^= c,
                          n[5] ^= f,
                          n[6] ^= l,
                          n[7] ^= d;
                          for (a = 0; a < 4; a++)
                              u.call(this)
                      }
                  },
                  _doProcessBlock: function(e, t) {
                      var r = this._X;
                      u.call(this),
                      i[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16,
                      i[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16,
                      i[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16,
                      i[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
                      for (var n = 0; n < 4; n++)
                          i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8),
                          e[t + n] ^= i[n]
                  },
                  blockSize: 4,
                  ivSize: 2
              });
              function u() {
                  for (var e = this._X, t = this._C, r = 0; r < 8; r++)
                      o[r] = t[r];
                  t[0] = t[0] + 1295307597 + this._b | 0,
                  t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0,
                  t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0,
                  t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0,
                  t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0,
                  t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0,
                  t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0,
                  t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0,
                  this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
                  for (r = 0; r < 8; r++) {
                      var n = e[r] + t[r]
                        , a = 65535 & n
                        , i = n >>> 16
                        , c = ((a * a >>> 17) + a * i >>> 15) + i * i
                        , u = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
                      s[r] = c ^ u
                  }
                  e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0,
                  e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0,
                  e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0,
                  e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0,
                  e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0,
                  e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0,
                  e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0,
                  e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
              }
              t.RabbitLegacy = n._createHelper(c)
          }(),
          e.RabbitLegacy
      }
      ))
  },
  "3f8c": function(e, t) {
      e.exports = {}
  },
  "3fb5": function(e, t) {
      "function" === typeof Object.create ? e.exports = function(e, t) {
          t && (e.super_ = t,
          e.prototype = Object.create(t.prototype, {
              constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }))
      }
      : e.exports = function(e, t) {
          if (t) {
              e.super_ = t;
              var r = function() {};
              r.prototype = t.prototype,
              e.prototype = new r,
              e.prototype.constructor = e
          }
      }
  },
  "3fcc": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").map
        , i = r("4840")
        , o = n.aTypedArray
        , s = n.aTypedArrayConstructor
        , c = n.exportTypedArrayMethod;
      c("map", (function(e) {
          return a(o(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
              return new (s(i(e, e.constructor)))(t)
          }
          ))
      }
      ))
  },
  4160: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("17c2");
      n({
          target: "Array",
          proto: !0,
          forced: [].forEach != a
      }, {
          forEach: a
      })
  },
  "41db": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("34eb")
            , a = r("6f58")
            , i = r("d3ab")
            , o = r("0662")
            , s = n("music-metadata:id3v2:frame-parser")
            , c = "iso-8859-1";
          class u {
              static readData(t, r, n, l) {
                  if (0 === t.length)
                      return;
                  const {encoding: f, bom: d} = o.TextEncodingToken.get(t, 0)
                    , h = t.length;
                  let p = 0
                    , m = [];
                  const g = u.getNullTerminatorLength(f);
                  let y;
                  const b = {};
                  switch (s(`Parsing tag type=${r}, encoding=${f}, bom=${d}`),
                  "TXXX" !== r && "T" === r[0] ? "T*" : r) {
                  case "T*":
                  case "IPLS":
                      const d = i.default.decodeString(t.slice(1), f).replace(/\x00+$/, "");
                      switch (r) {
                      case "TMCL":
                      case "TIPL":
                      case "IPLS":
                          m = u.splitValue(4, d),
                          m = u.functionList(m);
                          break;
                      case "TRK":
                      case "TRCK":
                      case "TPOS":
                          m = d;
                          break;
                      case "TCOM":
                      case "TEXT":
                      case "TOLY":
                      case "TOPE":
                      case "TPE1":
                      case "TSRC":
                          m = u.splitValue(n, d);
                          break;
                      default:
                          m = n >= 4 ? u.splitValue(n, d) : [d]
                      }
                      break;
                  case "TXXX":
                      m = u.readIdentifierAndData(t, p + 1, h, f),
                      m = {
                          description: m.id,
                          text: u.splitValue(n, i.default.decodeString(m.data, f).replace(/\x00+$/, ""))
                      };
                      break;
                  case "PIC":
                  case "APIC":
                      if (l) {
                          const r = {};
                          switch (p += 1,
                          n) {
                          case 2:
                              r.format = i.default.decodeString(t.slice(p, p + 3), f),
                              p += 3;
                              break;
                          case 3:
                          case 4:
                              y = i.default.findZero(t, p, h, c),
                              r.format = i.default.decodeString(t.slice(p, y), c),
                              p = y + 1;
                              break;
                          default:
                              throw new Error("Warning: unexpected major versionIndex: " + n)
                          }
                          r.format = u.fixPictureMimeType(r.format),
                          r.type = o.AttachedPictureType[t[p]],
                          p += 1,
                          y = i.default.findZero(t, p, h, f),
                          r.description = i.default.decodeString(t.slice(p, y), f),
                          p = y + g,
                          r.data = e.from(t.slice(p, h)),
                          m = r
                      }
                      break;
                  case "CNT":
                  case "PCNT":
                      m = a.UINT32_BE.get(t, 0);
                      break;
                  case "SYLT":
                      p += 7,
                      m = [];
                      while (p < h) {
                          const e = t.slice(p, p = i.default.findZero(t, p, h, f));
                          p += 5,
                          m.push(i.default.decodeString(e, f))
                      }
                      break;
                  case "ULT":
                  case "USLT":
                  case "COM":
                  case "COMM":
                      p += 1,
                      b.language = i.default.decodeString(t.slice(p, p + 3), c),
                      p += 3,
                      y = i.default.findZero(t, p, h, f),
                      b.description = i.default.decodeString(t.slice(p, y), f),
                      p = y + g,
                      b.text = i.default.decodeString(t.slice(p, h), f).replace(/\x00+$/, ""),
                      m = [b];
                      break;
                  case "UFID":
                      m = u.readIdentifierAndData(t, p, h, c),
                      m = {
                          owner_identifier: m.id,
                          identifier: m.data
                      };
                      break;
                  case "PRIV":
                      m = u.readIdentifierAndData(t, p, h, c),
                      m = {
                          owner_identifier: m.id,
                          data: m.data
                      };
                      break;
                  case "POPM":
                      y = i.default.findZero(t, p, h, c);
                      const v = i.default.decodeString(t.slice(p, y), c);
                      p = y + 1;
                      const w = h - p;
                      m = {
                          email: v,
                          rating: t.readUInt8(p),
                          counter: w >= 5 ? t.readUInt32BE(p + 1) : void 0
                      };
                      break;
                  case "GEOB":
                      {
                          y = i.default.findZero(t, p + 1, h, f);
                          const e = i.default.decodeString(t.slice(p + 1, y), c);
                          p = y + 1,
                          y = i.default.findZero(t, p, h - p, f);
                          const r = i.default.decodeString(t.slice(p, y), c);
                          p = y + 1,
                          y = i.default.findZero(t, p, h - p, f);
                          const n = i.default.decodeString(t.slice(p, y), c);
                          m = {
                              type: e,
                              filename: r,
                              description: n,
                              data: t.slice(p + 1, h)
                          };
                          break
                      }
                  case "WCOM":
                  case "WCOP":
                  case "WOAF":
                  case "WOAR":
                  case "WOAS":
                  case "WORS":
                  case "WPAY":
                  case "WPUB":
                      m = i.default.decodeString(t.slice(p, y), f);
                      break;
                  case "WXXX":
                      {
                          y = i.default.findZero(t, p + 1, h, f);
                          const e = i.default.decodeString(t.slice(p + 1, y), c);
                          p = y + 1,
                          m = {
                              description: e,
                              url: i.default.decodeString(t.slice(p, h - p), f)
                          };
                          break
                      }
                  case "MCDI":
                      m = t.slice(0, h);
                      break;
                  default:
                      s("Warning: unsupported id3v2-tag-type: " + r);
                      break
                  }
                  return m
              }
              static fixPictureMimeType(e) {
                  switch (e = e.toLocaleLowerCase(),
                  e) {
                  case "jpg":
                      return "image/jpeg";
                  case "png":
                      return "image/png"
                  }
                  return e
              }
              static functionList(e) {
                  const t = {};
                  for (let r = 0; r + 1 < e.length; r += 2) {
                      const n = e[r + 1].split(",");
                      t[e[r]] = t.hasOwnProperty(e[r]) ? t[e[r]].concat(n) : n
                  }
                  return t
              }
              static splitValue(e, t) {
                  const r = t.split(e >= 4 ? /\x00/g : /\//g);
                  return u.trimArray(r)
              }
              static trimArray(e) {
                  for (let t = 0; t < e.length; ++t)
                      e[t] = e[t].replace(/\x00+$/, "").trim();
                  return e
              }
              static readIdentifierAndData(e, t, r, n) {
                  const a = i.default.findZero(e, t, r, n)
                    , o = i.default.decodeString(e.slice(t, a), n);
                  return t = a + u.getNullTerminatorLength(n),
                  {
                      id: o,
                      data: e.slice(t, r)
                  }
              }
              static getNullTerminatorLength(e) {
                  return "utf16" === e ? 2 : 1
              }
          }
          t.default = u
      }
      ).call(this, r("b639").Buffer)
  },
  "428f": function(e, t, r) {
      var n = r("da84");
      e.exports = n
  },
  "429b": function(e, t, r) {
      e.exports = r("faa1").EventEmitter
  },
  4362: function(e, t, r) {
      t.nextTick = function(e) {
          var t = Array.prototype.slice.call(arguments);
          t.shift(),
          setTimeout((function() {
              e.apply(null, t)
          }
          ), 0)
      }
      ,
      t.platform = t.arch = t.execPath = t.title = "browser",
      t.pid = 1,
      t.browser = !0,
      t.env = {},
      t.argv = [],
      t.binding = function(e) {
          throw new Error("No such module. (Possibly not yet loaded)")
      }
      ,
      function() {
          var e, n = "/";
          t.cwd = function() {
              return n
          }
          ,
          t.chdir = function(t) {
              e || (e = r("df7c")),
              n = e.resolve(t, n)
          }
      }(),
      t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}
      ,
      t.features = {}
  },
  "44ad": function(e, t, r) {
      var n = r("d039")
        , a = r("c6b6")
        , i = "".split;
      e.exports = n((function() {
          return !Object("z").propertyIsEnumerable(0)
      }
      )) ? function(e) {
          return "String" == a(e) ? i.call(e, "") : Object(e)
      }
      : Object
  },
  "44d2": function(e, t, r) {
      var n = r("b622")
        , a = r("7c73")
        , i = r("9bf2")
        , o = n("unscopables")
        , s = Array.prototype;
      void 0 == s[o] && i.f(s, o, {
          configurable: !0,
          value: a(null)
      }),
      e.exports = function(e) {
          s[o][e] = !0
      }
  },
  "44de": function(e, t, r) {
      var n = r("da84");
      e.exports = function(e, t) {
          var r = n.console;
          r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t))
      }
  },
  "44e7": function(e, t, r) {
      var n = r("861d")
        , a = r("c6b6")
        , i = r("b622")
        , o = i("match");
      e.exports = function(e) {
          var t;
          return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == a(e))
      }
  },
  4681: function(e, t, r) {
      "use strict";
      var n = r("966d");
      function a(e, t) {
          var r = this
            , a = this._readableState && this._readableState.destroyed
            , i = this._writableState && this._writableState.destroyed;
          return a || i ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(o, this, e),
          this) : (this._readableState && (this._readableState.destroyed = !0),
          this._writableState && (this._writableState.destroyed = !0),
          this._destroy(e || null, (function(e) {
              !t && e ? (n.nextTick(o, r, e),
              r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
          }
          )),
          this)
      }
      function i() {
          this._readableState && (this._readableState.destroyed = !1,
          this._readableState.reading = !1,
          this._readableState.ended = !1,
          this._readableState.endEmitted = !1),
          this._writableState && (this._writableState.destroyed = !1,
          this._writableState.ended = !1,
          this._writableState.ending = !1,
          this._writableState.finished = !1,
          this._writableState.errorEmitted = !1)
      }
      function o(e, t) {
          e.emit("error", t)
      }
      e.exports = {
          destroy: a,
          undestroy: i
      }
  },
  "46d9": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97");
      t.riffInfoTagMap = {
          IART: "artist",
          ICRD: "date",
          INAM: "title",
          TITL: "title",
          IPRD: "album",
          ITRK: "track",
          COMM: "comment",
          ICMT: "comment",
          ICNT: "releasecountry",
          GNRE: "genre",
          IWRI: "writer",
          RATE: "rating",
          YEAR: "year",
          ISFT: "encodedby",
          CODE: "encodedby",
          TURL: "website",
          IGNR: "genre",
          IENG: "engineer",
          ITCH: "technician",
          IMED: "media",
          IRPD: "album"
      };
      class a extends n.CommonTagMapper {
          constructor() {
              super(["exif"], t.riffInfoTagMap)
          }
      }
      t.RiffInfoTagMapper = a
  },
  4840: function(e, t, r) {
      var n = r("825a")
        , a = r("1c0b")
        , i = r("b622")
        , o = i("species");
      e.exports = function(e, t) {
          var r, i = n(e).constructor;
          return void 0 === i || void 0 == (r = n(i)[o]) ? t : a(r)
      }
  },
  4930: function(e, t, r) {
      var n = r("d039");
      e.exports = !!Object.getOwnPropertySymbols && !n((function() {
          return !String(Symbol())
      }
      ))
  },
  "498a": function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("58a8").trim
        , i = r("c8d2");
      n({
          target: "String",
          proto: !0,
          forced: i("trim")
      }, {
          trim: function() {
              return a(this)
          }
      })
  },
  "4b8f": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("d3ab")
        , i = r("34eb")
        , o = i("music-metadata:parser:musepack:sv8")
        , s = new n.StringType(2,"binary")
        , c = {
          len: 5,
          get: (e,t)=>({
              crc: n.UINT32_LE.get(e, t),
              streamVersion: n.UINT8.get(e, t + 4)
          })
      }
        , u = {
          len: 2,
          get: (e,t)=>({
              sampleFrequency: [44100, 48e3, 37800, 32e3][a.default.getBitAllignedNumber(e, t, 0, 3)],
              maxUsedBands: a.default.getBitAllignedNumber(e, t, 3, 5),
              channelCount: a.default.getBitAllignedNumber(e, t + 1, 0, 4) + 1,
              msUsed: a.default.isBitSet(e, t + 1, 4),
              audioBlockFrames: a.default.getBitAllignedNumber(e, t + 1, 5, 3)
          })
      };
      class l {
          constructor(e) {
              this.tokenizer = e
          }
          async readPacketHeader() {
              const e = await this.tokenizer.readToken(s)
                , t = await this.readVariableSizeField();
              return {
                  key: e,
                  payloadLength: t.value - 2 - t.len
              }
          }
          async readStreamHeader(e) {
              const t = {};
              o(`Reading SH at offset=${this.tokenizer.position}`);
              const r = await this.tokenizer.readToken(c);
              e -= c.len,
              Object.assign(t, r),
              o(`SH.streamVersion = ${r.streamVersion}`);
              const n = await this.readVariableSizeField();
              e -= n.len,
              t.sampleCount = n.value;
              const a = await this.readVariableSizeField();
              e -= a.len,
              t.beginningOfSilence = a.value;
              const i = await this.tokenizer.readToken(u);
              return e -= u.len,
              Object.assign(t, i),
              await this.tokenizer.ignore(e),
              t
          }
          async readVariableSizeField(e=1, t=0) {
              let r = await this.tokenizer.readNumber(n.UINT8);
              return 0 === (128 & r) ? {
                  len: e,
                  value: t + r
              } : (r &= 127,
              r += t,
              this.readVariableSizeField(e + 1, r << 7))
          }
      }
      t.StreamReader = l
  },
  "4ba9": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.mode.OFB = function() {
              var t = e.lib.BlockCipherMode.extend()
                , r = t.Encryptor = t.extend({
                  processBlock: function(e, t) {
                      var r = this._cipher
                        , n = r.blockSize
                        , a = this._iv
                        , i = this._keystream;
                      a && (i = this._keystream = a.slice(0),
                      this._iv = void 0),
                      r.encryptBlock(i, 0);
                      for (var o = 0; o < n; o++)
                          e[t + o] ^= i[o]
                  }
              });
              return t.Decryptor = r,
              t
          }(),
          e.mode.OFB
      }
      ))
  },
  "4cc3": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("d3ab")
            , a = r("6f58");
          class i {
              static getParserForAttr(e) {
                  return i.attributeParsers[e]
              }
              static parseUnicodeAttr(e) {
                  return n.default.stripNulls(n.default.decodeString(e, "utf16le"))
              }
              static parseByteArrayAttr(t) {
                  const r = e.alloc(t.length);
                  return t.copy(r),
                  r
              }
              static parseBoolAttr(e, t=0) {
                  return 1 === i.parseWordAttr(e, t)
              }
              static parseDWordAttr(e, t=0) {
                  return e.readUInt32LE(t)
              }
              static parseQWordAttr(e, t=0) {
                  return a.UINT64_LE.get(e, t)
              }
              static parseWordAttr(e, t=0) {
                  return e.readUInt16LE(t)
              }
          }
          t.AsfUtil = i,
          i.attributeParsers = [i.parseUnicodeAttr, i.parseByteArrayAttr, i.parseBoolAttr, i.parseDWordAttr, i.parseQWordAttr, i.parseWordAttr, i.parseByteArrayAttr]
      }
      ).call(this, r("b639").Buffer)
  },
  "4d64": function(e, t, r) {
      var n = r("fc6a")
        , a = r("50c4")
        , i = r("23cb")
        , o = function(e) {
          return function(t, r, o) {
              var s, c = n(t), u = a(c.length), l = i(o, u);
              if (e && r != r) {
                  while (u > l)
                      if (s = c[l++],
                      s != s)
                          return !0
              } else
                  for (; u > l; l++)
                      if ((e || l in c) && c[l] === r)
                          return e || l || 0;
              return !e && -1
          }
      };
      e.exports = {
          includes: o(!0),
          indexOf: o(!1)
      }
  },
  "4df4": function(e, t, r) {
      "use strict";
      var n = r("0366")
        , a = r("7b0b")
        , i = r("9bdd")
        , o = r("e95a")
        , s = r("50c4")
        , c = r("8418")
        , u = r("35a1");
      e.exports = function(e) {
          var t, r, l, f, d, h, p = a(e), m = "function" == typeof this ? this : Array, g = arguments.length, y = g > 1 ? arguments[1] : void 0, b = void 0 !== y, v = u(p), w = 0;
          if (b && (y = n(y, g > 2 ? arguments[2] : void 0, 2)),
          void 0 == v || m == Array && o(v))
              for (t = s(p.length),
              r = new m(t); t > w; w++)
                  h = b ? y(p[w], w) : p[w],
                  c(r, w, h);
          else
              for (f = v.call(p),
              d = f.next,
              r = new m; !(l = d.call(f)).done; w++)
                  h = b ? i(f, y, [l.value, w], !0) : l.value,
                  c(r, w, h);
          return r.length = w,
          r
      }
  },
  "4f83": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("21c2")
        , a = r("0662")
        , i = r("64a4")
        , o = r("1e78")
        , s = r("34eb")
        , c = r("95c9")
        , u = s("music-metadata:parser:ID3");
      class l extends c.BasicParser {
          constructor() {
              super(...arguments),
              this.id3parser = new i.ID3v2Parser
          }
          static async startsWithID3v2Header(e) {
              return "ID3" === (await e.peekToken(a.ID3v2Header)).fileIdentifier
          }
          async parse() {
              try {
                  await this.parseID3v2()
              } catch (e) {
                  if (!(e instanceof n.EndOfStreamError))
                      throw e;
                  u("End-of-stream")
              }
          }
          finalize() {}
          async parseID3v2() {
              if (await this.tryReadId3v2Headers(),
              u("End of ID3v2 header, go to MPEG-parser: pos=%s", this.tokenizer.position),
              await this._parse(),
              this.options.skipPostHeaders && this.metadata.hasAny())
                  this.finalize();
              else {
                  const e = new o.ID3v1Parser;
                  await e.init(this.metadata, this.tokenizer, this.options).parse(),
                  this.finalize()
              }
          }
          async tryReadId3v2Headers() {
              const e = await this.tokenizer.peekToken(a.ID3v2Header);
              if ("ID3" === e.fileIdentifier)
                  return u("Found ID3v2 header, pos=%s", this.tokenizer.position),
                  await this.id3parser.parse(this.metadata, this.tokenizer, this.options),
                  this.tryReadId3v2Headers()
          }
      }
      t.AbstractID3Parser = l
  },
  "50c4": function(e, t, r) {
      var n = r("a691")
        , a = Math.min;
      e.exports = function(e) {
          return e > 0 ? a(n(e), 9007199254740991) : 0
      }
  },
  5135: function(e, t) {
      var r = {}.hasOwnProperty;
      e.exports = function(e, t) {
          return r.call(e, t)
      }
  },
  5319: function(e, t, r) {
      "use strict";
      var n = r("d784")
        , a = r("825a")
        , i = r("7b0b")
        , o = r("50c4")
        , s = r("a691")
        , c = r("1d80")
        , u = r("8aa5")
        , l = r("14c3")
        , f = Math.max
        , d = Math.min
        , h = Math.floor
        , p = /\$([$&'`]|\d\d?|<[^>]*>)/g
        , m = /\$([$&'`]|\d\d?)/g
        , g = function(e) {
          return void 0 === e ? e : String(e)
      };
      n("replace", 2, (function(e, t, r, n) {
          var y = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
            , b = n.REPLACE_KEEPS_$0
            , v = y ? "$" : "$0";
          return [function(r, n) {
              var a = c(this)
                , i = void 0 == r ? void 0 : r[e];
              return void 0 !== i ? i.call(r, a, n) : t.call(String(a), r, n)
          }
          , function(e, n) {
              if (!y && b || "string" === typeof n && -1 === n.indexOf(v)) {
                  var i = r(t, e, this, n);
                  if (i.done)
                      return i.value
              }
              var c = a(e)
                , h = String(this)
                , p = "function" === typeof n;
              p || (n = String(n));
              var m = c.global;
              if (m) {
                  var T = c.unicode;
                  c.lastIndex = 0
              }
              var k = [];
              while (1) {
                  var _ = l(c, h);
                  if (null === _)
                      break;
                  if (k.push(_),
                  !m)
                      break;
                  var S = String(_[0]);
                  "" === S && (c.lastIndex = u(h, o(c.lastIndex), T))
              }
              for (var E = "", I = 0, A = 0; A < k.length; A++) {
                  _ = k[A];
                  for (var x = String(_[0]), B = f(d(s(_.index), h.length), 0), C = [], P = 1; P < _.length; P++)
                      C.push(g(_[P]));
                  var O = _.groups;
                  if (p) {
                      var M = [x].concat(C, B, h);
                      void 0 !== O && M.push(O);
                      var D = String(n.apply(void 0, M))
                  } else
                      D = w(x, h, B, C, O, n);
                  B >= I && (E += h.slice(I, B) + D,
                  I = B + x.length)
              }
              return E + h.slice(I)
          }
          ];
          function w(e, r, n, a, o, s) {
              var c = n + e.length
                , u = a.length
                , l = m;
              return void 0 !== o && (o = i(o),
              l = p),
              t.call(s, l, (function(t, i) {
                  var s;
                  switch (i.charAt(0)) {
                  case "$":
                      return "$";
                  case "&":
                      return e;
                  case "`":
                      return r.slice(0, n);
                  case "'":
                      return r.slice(c);
                  case "<":
                      s = o[i.slice(1, -1)];
                      break;
                  default:
                      var l = +i;
                      if (0 === l)
                          return t;
                      if (l > u) {
                          var f = h(l / 10);
                          return 0 === f ? t : f <= u ? void 0 === a[f - 1] ? i.charAt(1) : a[f - 1] + i.charAt(1) : t
                      }
                      s = a[l - 1]
                  }
                  return void 0 === s ? "" : s
              }
              ))
          }
      }
      ))
  },
  "53a8": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("f654")
        , i = r("95c9")
        , o = r("4b8f")
        , s = r("9611")
        , c = r("98a7")
        , u = n("music-metadata:parser:musepack");
      class l extends i.BasicParser {
          constructor() {
              super(...arguments),
              this.audioLength = 0
          }
          async parse() {
              const e = await this.tokenizer.readToken(c.FourCcToken);
              return a.equal(e, "MPCK", "Magic number"),
              this.metadata.setFormat("container", "Musepack, SV8"),
              this.parsePacket()
          }
          async parsePacket() {
              const e = new o.StreamReader(this.tokenizer);
              do {
                  const t = await e.readPacketHeader();
                  switch (u(`packet-header key=${t.key}, payloadLength=${t.payloadLength}`),
                  t.key) {
                  case "SH":
                      const r = await e.readStreamHeader(t.payloadLength);
                      this.metadata.setFormat("numberOfSamples", r.sampleCount),
                      this.metadata.setFormat("sampleRate", r.sampleFrequency),
                      this.metadata.setFormat("duration", r.sampleCount / r.sampleFrequency),
                      this.metadata.setFormat("numberOfChannels", r.channelCount);
                      break;
                  case "AP":
                      this.audioLength += t.payloadLength,
                      await this.tokenizer.ignore(t.payloadLength);
                      break;
                  case "RG":
                  case "EI":
                  case "SO":
                  case "ST":
                  case "CT":
                      await this.tokenizer.ignore(t.payloadLength);
                      break;
                  case "SE":
                      return this.metadata.setFormat("bitrate", 8 * this.audioLength / this.metadata.format.duration),
                      s.APEv2Parser.tryParseApeHeader(this.metadata, this.tokenizer, this.options);
                  default:
                      throw new Error(`Unexpected header: ${t.key}`)
                  }
              } while (1)
          }
      }
      t.MpcSv8Parser = l
  },
  "53d6": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97");
      class a extends n.CommonTagMapper {
          constructor(e, t) {
              const r = {};
              for (const n of Object.keys(t))
                  r[n.toUpperCase()] = t[n];
              super(e, r)
          }
          getCommonName(e) {
              return this.tagMap[e.toUpperCase()]
          }
      }
      t.CaseInsensitiveTagMap = a
  },
  5658: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("f654")
            , a = r("6f58")
            , i = r("21c2")
            , o = r("34eb")
            , s = r("d3ab")
            , c = r("4f83")
            , u = r("ad3a")
            , l = o("music-metadata:parser:mpeg")
            , f = 1024
            , d = {
              AudioObjectTypes: ["AAC Main", "AAC LC", "AAC SSR", "AAC LTP"],
              SamplingFrequencies: [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350, void 0, void 0, -1]
          }
            , h = [void 0, ["front-center"], ["front-left", "front-right"], ["front-center", "front-left", "front-right"], ["front-center", "front-left", "front-right", "back-center"], ["front-center", "front-left", "front-right", "back-left", "back-right"], ["front-center", "front-left", "front-right", "back-left", "back-right", "LFE-channel"], ["front-center", "front-left", "front-right", "side-left", "side-right", "back-left", "back-right", "LFE-channel"]];
          class p {
              constructor(e, t) {
                  this.versionIndex = s.default.getBitAllignedNumber(e, t + 1, 3, 2),
                  this.layer = p.LayerDescription[s.default.getBitAllignedNumber(e, t + 1, 5, 2)],
                  this.versionIndex > 1 && 0 === this.layer ? this.parseAdtsHeader(e, t) : this.parseMpegHeader(e, t),
                  this.isProtectedByCRC = !s.default.isBitSet(e, t + 1, 7)
              }
              calcDuration(e) {
                  return e * this.calcSamplesPerFrame() / this.samplingRate
              }
              calcSamplesPerFrame() {
                  return p.samplesInFrameTable[1 === this.version ? 0 : 1][this.layer]
              }
              calculateSideInfoLength() {
                  if (3 !== this.layer)
                      return 2;
                  if (3 === this.channelModeIndex) {
                      if (1 === this.version)
                          return 17;
                      if (2 === this.version || 2.5 === this.version)
                          return 9
                  } else {
                      if (1 === this.version)
                          return 32;
                      if (2 === this.version || 2.5 === this.version)
                          return 17
                  }
              }
              calcSlotSize() {
                  return [null, 4, 1, 1][this.layer]
              }
              parseMpegHeader(e, t) {
                  this.container = "MPEG",
                  this.bitrateIndex = s.default.getBitAllignedNumber(e, t + 2, 0, 4),
                  this.sampRateFreqIndex = s.default.getBitAllignedNumber(e, t + 2, 4, 2),
                  this.padding = s.default.isBitSet(e, t + 2, 6),
                  this.privateBit = s.default.isBitSet(e, t + 2, 7),
                  this.channelModeIndex = s.default.getBitAllignedNumber(e, t + 3, 0, 2),
                  this.modeExtension = s.default.getBitAllignedNumber(e, t + 3, 2, 2),
                  this.isCopyrighted = s.default.isBitSet(e, t + 3, 4),
                  this.isOriginalMedia = s.default.isBitSet(e, t + 3, 5),
                  this.emphasis = s.default.getBitAllignedNumber(e, t + 3, 7, 2),
                  this.version = p.VersionID[this.versionIndex],
                  this.channelMode = p.ChannelMode[this.channelModeIndex],
                  this.codec = `MPEG ${this.version} Layer ${this.layer}`;
                  const r = this.calcBitrate();
                  if (!r)
                      throw new Error("Cannot determine bit-rate");
                  if (this.bitrate = 1e3 * r,
                  this.samplingRate = this.calcSamplingRate(),
                  null == this.samplingRate)
                      throw new Error("Cannot determine sampling-rate")
              }
              parseAdtsHeader(e, t) {
                  l("layer=0 => ADTS"),
                  this.version = 2 === this.versionIndex ? 4 : 2,
                  this.container = "ADTS/MPEG-" + this.version;
                  const r = s.default.getBitAllignedNumber(e, t + 2, 0, 2);
                  this.codec = "AAC",
                  this.codecProfile = d.AudioObjectTypes[r],
                  l(`MPEG-4 audio-codec=${this.codec}`);
                  const n = s.default.getBitAllignedNumber(e, t + 2, 2, 4);
                  this.samplingRate = d.SamplingFrequencies[n],
                  l(`sampling-rate=${this.samplingRate}`);
                  const a = s.default.getBitAllignedNumber(e, t + 2, 7, 3);
                  this.mp4ChannelConfig = h[a],
                  l(`channel-config=${this.mp4ChannelConfig.join("+")}`),
                  this.frameLength = s.default.getBitAllignedNumber(e, t + 3, 6, 2) << 11
              }
              calcBitrate() {
                  if (0 === this.bitrateIndex || 15 === this.bitrateIndex)
                      return;
                  const e = `${Math.floor(this.version)}${this.layer}`;
                  return p.bitrate_index[this.bitrateIndex][e]
              }
              calcSamplingRate() {
                  return 3 === this.sampRateFreqIndex ? null : p.sampling_rate_freq_index[this.version][this.sampRateFreqIndex]
              }
          }
          p.SyncByte1 = 255,
          p.SyncByte2 = 224,
          p.VersionID = [2.5, null, 2, 1],
          p.LayerDescription = [0, 3, 2, 1],
          p.ChannelMode = ["stereo", "joint_stereo", "dual_channel", "mono"],
          p.bitrate_index = {
              1: {
                  11: 32,
                  12: 32,
                  13: 32,
                  21: 32,
                  22: 8,
                  23: 8
              },
              2: {
                  11: 64,
                  12: 48,
                  13: 40,
                  21: 48,
                  22: 16,
                  23: 16
              },
              3: {
                  11: 96,
                  12: 56,
                  13: 48,
                  21: 56,
                  22: 24,
                  23: 24
              },
              4: {
                  11: 128,
                  12: 64,
                  13: 56,
                  21: 64,
                  22: 32,
                  23: 32
              },
              5: {
                  11: 160,
                  12: 80,
                  13: 64,
                  21: 80,
                  22: 40,
                  23: 40
              },
              6: {
                  11: 192,
                  12: 96,
                  13: 80,
                  21: 96,
                  22: 48,
                  23: 48
              },
              7: {
                  11: 224,
                  12: 112,
                  13: 96,
                  21: 112,
                  22: 56,
                  23: 56
              },
              8: {
                  11: 256,
                  12: 128,
                  13: 112,
                  21: 128,
                  22: 64,
                  23: 64
              },
              9: {
                  11: 288,
                  12: 160,
                  13: 128,
                  21: 144,
                  22: 80,
                  23: 80
              },
              10: {
                  11: 320,
                  12: 192,
                  13: 160,
                  21: 160,
                  22: 96,
                  23: 96
              },
              11: {
                  11: 352,
                  12: 224,
                  13: 192,
                  21: 176,
                  22: 112,
                  23: 112
              },
              12: {
                  11: 384,
                  12: 256,
                  13: 224,
                  21: 192,
                  22: 128,
                  23: 128
              },
              13: {
                  11: 416,
                  12: 320,
                  13: 256,
                  21: 224,
                  22: 144,
                  23: 144
              },
              14: {
                  11: 448,
                  12: 384,
                  13: 320,
                  21: 256,
                  22: 160,
                  23: 160
              }
          },
          p.sampling_rate_freq_index = {
              1: {
                  0: 44100,
                  1: 48e3,
                  2: 32e3
              },
              2: {
                  0: 22050,
                  1: 24e3,
                  2: 16e3
              },
              2.5: {
                  0: 11025,
                  1: 12e3,
                  2: 8e3
              }
          },
          p.samplesInFrameTable = [[0, 384, 1152, 1152], [0, 384, 1152, 576]];
          const m = {
              len: 4,
              get: (e,t)=>new p(e,t)
          };
          function g(e) {
              return "V" + (100 - e) / 10
          }
          class y extends c.AbstractID3Parser {
              constructor() {
                  super(...arguments),
                  this.frameCount = 0,
                  this.syncFrameCount = -1,
                  this.countSkipFrameData = 0,
                  this.totalDataLength = 0,
                  this.bitrates = [],
                  this.calculateEofDuration = !1,
                  this.buf_frame_header = e.alloc(4),
                  this.syncPeek = {
                      buf: e.alloc(f),
                      len: 0
                  }
              }
              async _parse() {
                  this.metadata.setFormat("lossless", !1);
                  try {
                      let e = !1;
                      while (!e)
                          await this.sync(),
                          e = await this.parseCommonMpegHeader()
                  } catch (e) {
                      if (!(e instanceof i.EndOfStreamError))
                          throw e;
                      if (l("End-of-stream"),
                      this.calculateEofDuration) {
                          const e = this.frameCount * this.samplesPerFrame;
                          this.metadata.setFormat("numberOfSamples", e);
                          const t = e / this.metadata.format.sampleRate;
                          l(`Calculate duration at EOF: ${t} sec.`, t),
                          this.metadata.setFormat("duration", t)
                      }
                  }
              }
              finalize() {
                  const e = this.metadata.format
                    , t = this.metadata.native.hasOwnProperty("ID3v1");
                  if (e.duration && this.tokenizer.fileInfo.size) {
                      const r = this.tokenizer.fileInfo.size - this.mpegOffset - (t ? 128 : 0);
                      e.codecProfile && "V" === e.codecProfile[0] && this.metadata.setFormat("bitrate", 8 * r / e.duration)
                  } else if (this.tokenizer.fileInfo.size && "CBR" === e.codecProfile) {
                      const r = this.tokenizer.fileInfo.size - this.mpegOffset - (t ? 128 : 0)
                        , n = Math.round(r / this.frame_size) * this.samplesPerFrame;
                      this.metadata.setFormat("numberOfSamples", n);
                      const a = n / e.sampleRate;
                      l("Calculate CBR duration based on file size: %s", a),
                      this.metadata.setFormat("duration", a)
                  }
              }
              async sync() {
                  let e = !1;
                  while (1) {
                      let t = 0;
                      if (this.syncPeek.len = await this.tokenizer.peekBuffer(this.syncPeek.buf, {
                          length: f,
                          mayBeLess: !0
                      }),
                      this.syncPeek.len <= 256)
                          throw new i.EndOfStreamError;
                      while (1) {
                          if (e && 224 === (224 & this.syncPeek.buf[t]))
                              return this.buf_frame_header[0] = p.SyncByte1,
                              this.buf_frame_header[1] = this.syncPeek.buf[t],
                              await this.tokenizer.ignore(t),
                              l(`Sync at offset=${this.tokenizer.position - 1}, frameCount=${this.frameCount}`),
                              this.syncFrameCount === this.frameCount && (l(`Re-synced MPEG stream, frameCount=${this.frameCount}`),
                              this.frameCount = 0,
                              this.frame_size = 0),
                              void (this.syncFrameCount = this.frameCount);
                          if (e = !1,
                          t = this.syncPeek.buf.indexOf(p.SyncByte1, t),
                          -1 === t) {
                              if (this.syncPeek.len < this.syncPeek.buf.length)
                                  throw new i.EndOfStreamError;
                              await this.tokenizer.ignore(this.syncPeek.len);
                              break
                          }
                          ++t,
                          e = !0
                      }
                  }
              }
              async parseCommonMpegHeader() {
                  let e;
                  0 === this.frameCount && (this.mpegOffset = this.tokenizer.position - 1),
                  await this.tokenizer.peekBuffer(this.buf_frame_header, {
                      offset: 1,
                      length: 3
                  });
                  try {
                      e = m.get(this.buf_frame_header, 0)
                  } catch (t) {
                      return await this.tokenizer.ignore(1),
                      this.metadata.addWarning("Parse error: " + t.message),
                      !1
                  }
                  return await this.tokenizer.ignore(3),
                  this.metadata.setFormat("container", e.container),
                  this.metadata.setFormat("codec", e.codec),
                  this.metadata.setFormat("lossless", !1),
                  this.metadata.setFormat("sampleRate", e.samplingRate),
                  this.frameCount++,
                  e.version >= 2 && 0 === e.layer ? this.parseAdts(e) : this.parseAudioFrameHeader(e)
              }
              async parseAudioFrameHeader(e) {
                  this.metadata.setFormat("numberOfChannels", "mono" === e.channelMode ? 1 : 2),
                  this.metadata.setFormat("bitrate", e.bitrate),
                  this.frameCount < 2e5 && l("offset=%s MP%s bitrate=%s sample-rate=%s", this.tokenizer.position - 4, e.layer, e.bitrate, e.samplingRate);
                  const t = e.calcSlotSize();
                  if (null === t)
                      throw new Error("invalid slot_size");
                  const r = e.calcSamplesPerFrame();
                  l(`samples_per_frame=${r}`);
                  const n = r / 8
                    , a = n * e.bitrate / e.samplingRate + (e.padding ? t : 0);
                  if (this.frame_size = Math.floor(a),
                  this.audioFrameHeader = e,
                  this.bitrates.push(e.bitrate),
                  1 === this.frameCount)
                      return this.offset = m.len,
                      await this.skipSideInformation(),
                      !1;
                  if (3 === this.frameCount) {
                      if (this.areAllSame(this.bitrates)) {
                          if (this.samplesPerFrame = r,
                          this.metadata.setFormat("codecProfile", "CBR"),
                          this.tokenizer.fileInfo.size)
                              return !0
                      } else if (this.metadata.format.duration)
                          return !0;
                      if (!this.options.duration)
                          return !0
                  }
                  return this.options.duration && 4 === this.frameCount && (this.samplesPerFrame = r,
                  this.calculateEofDuration = !0),
                  this.offset = 4,
                  e.isProtectedByCRC ? (await this.parseCrc(),
                  !1) : (await this.skipSideInformation(),
                  !1)
              }
              async parseAdts(t) {
                  const r = e.alloc(3);
                  await this.tokenizer.readBuffer(r),
                  t.frameLength += s.default.getBitAllignedNumber(r, 0, 0, 11),
                  this.tokenizer.ignore(t.frameLength - 7),
                  this.totalDataLength += t.frameLength,
                  this.samplesPerFrame = 1024;
                  const n = t.samplingRate / this.samplesPerFrame
                    , a = 0 === this.frameCount ? 0 : this.totalDataLength / this.frameCount
                    , i = 8 * a * n + .5;
                  if (this.metadata.setFormat("codecProfile", t.codecProfile),
                  this.metadata.setFormat("bitrate", i),
                  t.mp4ChannelConfig && this.metadata.setFormat("numberOfChannels", t.mp4ChannelConfig.length),
                  l(`frame-count=${this.frameCount}, size=${t.frameLength} bytes, bit-rate=${i}`),
                  3 === this.frameCount) {
                      if (!this.options.duration)
                          return !0;
                      this.calculateEofDuration = !0
                  }
                  return !1
              }
              async parseCrc() {
                  return this.crc = await this.tokenizer.readNumber(a.INT16_BE),
                  this.offset += 2,
                  this.skipSideInformation()
              }
              async skipSideInformation() {
                  const e = this.audioFrameHeader.calculateSideInfoLength();
                  await this.tokenizer.readToken(new a.BufferType(e)),
                  this.offset += e,
                  await this.readXtraInfoHeader()
              }
              async readXtraInfoHeader() {
                  const e = await this.tokenizer.readToken(u.InfoTagHeaderTag);
                  switch (this.offset += u.InfoTagHeaderTag.len,
                  e) {
                  case "Info":
                      return this.metadata.setFormat("codecProfile", "CBR"),
                      this.readXingInfoHeader();
                  case "Xing":
                      const e = await this.readXingInfoHeader()
                        , t = g(e.vbrScale);
                      return this.metadata.setFormat("codecProfile", t),
                      null;
                  case "Xtra":
                      break;
                  case "LAME":
                      const r = await this.tokenizer.readToken(u.LameEncoderVersion);
                      return this.offset += u.LameEncoderVersion.len,
                      this.metadata.setFormat("tool", "LAME " + r),
                      await this.skipFrameData(this.frame_size - this.offset),
                      null
                  }
                  const t = this.frame_size - this.offset;
                  return t < 0 ? this.metadata.addWarning("Frame " + this.frameCount + "corrupt: negative frameDataLeft") : await this.skipFrameData(t),
                  null
              }
              async readXingInfoHeader() {
                  const e = await this.tokenizer.readToken(u.XingInfoTag);
                  if (this.offset += u.XingInfoTag.len,
                  this.metadata.setFormat("tool", s.default.stripNulls(e.codec)),
                  1 === (1 & e.headerFlags[3])) {
                      const t = this.audioFrameHeader.calcDuration(e.numFrames);
                      return this.metadata.setFormat("duration", t),
                      l("Get duration from Xing header: %s", this.metadata.format.duration),
                      e
                  }
                  const t = this.frame_size - this.offset;
                  return await this.skipFrameData(t),
                  e
              }
              async skipFrameData(e) {
                  n.ok(e >= 0, "frame-data-left cannot be negative"),
                  await this.tokenizer.ignore(e),
                  this.countSkipFrameData += e
              }
              areAllSame(e) {
                  const t = e[0];
                  return e.every(e=>e === t)
              }
          }
          t.MpegParser = y
      }
      ).call(this, r("b639").Buffer)
  },
  5692: function(e, t, r) {
      var n = r("c430")
        , a = r("c6cd");
      (e.exports = function(e, t) {
          return a[e] || (a[e] = void 0 !== t ? t : {})
      }
      )("versions", []).push({
          version: "3.6.4",
          mode: n ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
  },
  "56ef": function(e, t, r) {
      var n = r("d066")
        , a = r("241c")
        , i = r("7418")
        , o = r("825a");
      e.exports = n("Reflect", "ownKeys") || function(e) {
          var t = a.f(o(e))
            , r = i.f;
          return r ? t.concat(r(e)) : t
      }
  },
  5899: function(e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
  },
  "58a8": function(e, t, r) {
      var n = r("1d80")
        , a = r("5899")
        , i = "[" + a + "]"
        , o = RegExp("^" + i + i + "*")
        , s = RegExp(i + i + "*$")
        , c = function(e) {
          return function(t) {
              var r = String(n(t));
              return 1 & e && (r = r.replace(o, "")),
              2 & e && (r = r.replace(s, "")),
              r
          }
      };
      e.exports = {
          start: c(1),
          end: c(2),
          trim: c(3)
      }
  },
  5980: function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          (function() {
              var t = e
                , r = t.lib
                , n = r.Base
                , a = t.enc
                , i = a.Utf8
                , o = t.algo;
              o.HMAC = n.extend({
                  init: function(e, t) {
                      e = this._hasher = new e.init,
                      "string" == typeof t && (t = i.parse(t));
                      var r = e.blockSize
                        , n = 4 * r;
                      t.sigBytes > n && (t = e.finalize(t)),
                      t.clamp();
                      for (var a = this._oKey = t.clone(), o = this._iKey = t.clone(), s = a.words, c = o.words, u = 0; u < r; u++)
                          s[u] ^= 1549556828,
                          c[u] ^= 909522486;
                      a.sigBytes = o.sigBytes = n,
                      this.reset()
                  },
                  reset: function() {
                      var e = this._hasher;
                      e.reset(),
                      e.update(this._iKey)
                  },
                  update: function(e) {
                      return this._hasher.update(e),
                      this
                  },
                  finalize: function(e) {
                      var t = this._hasher
                        , r = t.finalize(e);
                      t.reset();
                      var n = t.finalize(this._oKey.clone().concat(r));
                      return n
                  }
              })
          }
          )()
      }
      ))
  },
  "599d": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58");
      class a {
          constructor(e, t) {
              this.data = e,
              this.offset = t
          }
          readInt32() {
              const e = n.UINT32_LE.get(this.data, this.offset);
              return this.offset += 4,
              e
          }
          readStringUtf8() {
              const e = this.readInt32()
                , t = this.data.toString("utf8", this.offset, this.offset + e);
              return this.offset += e,
              t
          }
          parseUserComment() {
              const e = this.offset
                , t = this.readStringUtf8()
                , r = t.indexOf("=");
              return {
                  key: t.slice(0, r).toUpperCase(),
                  value: t.slice(r + 1),
                  len: this.offset - e
              }
          }
      }
      t.VorbisDecoder = a
  },
  "5a49": function(e, t, r) {
      "use strict";
      (function(e) {
          async function r(r) {
              if (r.fileSize >= 143) {
                  const n = e.alloc(15);
                  await r.randomRead(n, 0, n.length, r.fileSize - 143);
                  const a = n.toString("binary")
                    , i = a.substr(6);
                  if (i === t.endTag2)
                      return parseInt(a.substr(0, 6), 10) + 15
              }
              return 0
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.endTag2 = "LYRICS200",
          t.getLyricsHeaderLength = r
      }
      ).call(this, r("b639").Buffer)
  },
  "5b7a": function(e, t, r) {
      "use strict";
      t.stringToBytes = e=>[...e].map(e=>e.charCodeAt(0));
      const n = (e,t,r)=>String.fromCharCode(...e.slice(t, r));
      t.tarHeaderChecksumMatches = e=>{
          if (e.length < 512)
              return !1;
          const t = 128;
          let r = 256
            , a = 0;
          for (let n = 0; n < 148; n++) {
              const i = e[n];
              r += i,
              a += i & t
          }
          for (let n = 156; n < 512; n++) {
              const i = e[n];
              r += i,
              a += i & t
          }
          const i = parseInt(n(e, 148, 154), 8);
          return (i === r || i === r - (a << 1))
      }
      ,
      t.uint8ArrayUtf8ByteString = n,
      t.uint32SyncSafeToken = {
          get: (e,t)=>127 & e[t + 3] | e[t + 2] << 7 | e[t + 1] << 14 | e[t] << 21,
          len: 4
      }
  },
  "5c6c": function(e, t) {
      e.exports = function(e, t) {
          return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
          }
      }
  },
  "5cc6": function(e, t, r) {
      var n = r("74e8");
      n("Uint8", (function(e) {
          return function(t, r, n) {
              return e(this, t, r, n)
          }
      }
      ))
  },
  "5cf0": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("d485");
      class a extends n.Readable {
          constructor(e) {
              super(),
              this.bytesRead = 0,
              this.released = !1,
              this.reader = e.getReader()
          }
          async _read() {
              if (this.released)
                  return void this.push(null);
              this.pendingRead = this.reader.read();
              const e = await this.pendingRead;
              delete this.pendingRead,
              e.done || this.released ? this.push(null) : (this.bytesRead += e.value.length,
              this.push(e.value))
          }
          async waitForReadToComplete() {
              this.pendingRead && await this.pendingRead
          }
          async close() {
              await this.syncAndRelease()
          }
          async syncAndRelease() {
              this.released = !0,
              await this.waitForReadToComplete(),
              await this.reader.releaseLock()
          }
      }
      t.ReadableWebToNodeStream = a
  },
  "5e1a": function(e, t, r) {
      "use strict";
      function n(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      var a = r("8707").Buffer
        , i = r(1);
      function o(e, t, r) {
          e.copy(t, r)
      }
      e.exports = function() {
          function e() {
              n(this, e),
              this.head = null,
              this.tail = null,
              this.length = 0
          }
          return e.prototype.push = function(e) {
              var t = {
                  data: e,
                  next: null
              };
              this.length > 0 ? this.tail.next = t : this.head = t,
              this.tail = t,
              ++this.length
          }
          ,
          e.prototype.unshift = function(e) {
              var t = {
                  data: e,
                  next: this.head
              };
              0 === this.length && (this.tail = t),
              this.head = t,
              ++this.length
          }
          ,
          e.prototype.shift = function() {
              if (0 !== this.length) {
                  var e = this.head.data;
                  return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                  --this.length,
                  e
              }
          }
          ,
          e.prototype.clear = function() {
              this.head = this.tail = null,
              this.length = 0
          }
          ,
          e.prototype.join = function(e) {
              if (0 === this.length)
                  return "";
              var t = this.head
                , r = "" + t.data;
              while (t = t.next)
                  r += e + t.data;
              return r
          }
          ,
          e.prototype.concat = function(e) {
              if (0 === this.length)
                  return a.alloc(0);
              if (1 === this.length)
                  return this.head.data;
              var t = a.allocUnsafe(e >>> 0)
                , r = this.head
                , n = 0;
              while (r)
                  o(r.data, t, n),
                  n += r.data.length,
                  r = r.next;
              return t
          }
          ,
          e
      }(),
      i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
          var e = i.inspect({
              length: this.length
          });
          return this.constructor.name + " " + e
      }
      )
  },
  "5ea2": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("34eb")
            , a = r("6f58")
            , i = r("f654")
            , o = r("95c9")
            , s = r("bef3")
            , c = r("150c")
            , u = r("1e78")
            , l = r("cec2")
            , f = n("music-metadata:parser:MP4")
            , d = "iTunes"
            , h = {
              raw: {
                  lossy: !1,
                  format: "raw"
              },
              MAC3: {
                  lossy: !0,
                  format: "MACE 3:1"
              },
              MAC6: {
                  lossy: !0,
                  format: "MACE 6:1"
              },
              ima4: {
                  lossy: !0,
                  format: "IMA 4:1"
              },
              ulaw: {
                  lossy: !0,
                  format: "uLaw 2:1"
              },
              alaw: {
                  lossy: !0,
                  format: "uLaw 2:1"
              },
              Qclp: {
                  lossy: !0,
                  format: "QUALCOMM PureVoice"
              },
              ".mp3": {
                  lossy: !0,
                  format: "MPEG-1 layer 3"
              },
              alac: {
                  lossy: !1,
                  format: "ALAC"
              },
              "ac-3": {
                  lossy: !0,
                  format: "AC-3"
              },
              mp4a: {
                  lossy: !0,
                  format: "MPEG-4/AAC"
              },
              mp4s: {
                  lossy: !0,
                  format: "MP4S"
              },
              c608: {
                  lossy: !0,
                  format: "CEA-608"
              },
              c708: {
                  lossy: !0,
                  format: "CEA-708"
              }
          };
          function p(e, t, r) {
              return r.indexOf(e) === t
          }
          class m extends o.BasicParser {
              static read_BE_Signed_Integer(e) {
                  return a.readIntBE(e, 0, e.length)
              }
              static read_BE_Unsigned_Integer(e) {
                  return a.readUIntBE(e, 0, e.length)
              }
              async parse() {
                  this.tracks = [];
                  let e = this.tokenizer.fileInfo.size;
                  while (!this.tokenizer.fileInfo.size || e > 0) {
                      try {
                          await this.tokenizer.peekToken(c.Header)
                      } catch (n) {
                          const e = `Error at offset=${this.tokenizer.position}: ${n.message}`;
                          f(e),
                          this.addWarning(e);
                          break
                      }
                      const t = await s.Atom.readAtom(this.tokenizer, e=>this.handleAtom(e), null);
                      e -= t.header.length
                  }
                  const t = [];
                  this.tracks.forEach(e=>{
                      const r = [];
                      e.soundSampleDescription.forEach(e=>{
                          const t = {}
                            , n = h[e.dataFormat];
                          if (n ? (r.push(n.format),
                          t.codecName = n.format) : t.codecName = `<${e.dataFormat}>`,
                          e.description) {
                              const {description: r} = e;
                              r.sampleRate > 0 && (t.type = l.TrackType.audio,
                              t.audio = {
                                  samplingFrequency: r.sampleRate,
                                  bitDepth: r.sampleSize,
                                  channels: r.numAudioChannels
                              })
                          }
                          this.metadata.addStreamInfo(t)
                      }
                      ),
                      r.length >= 1 && t.push(r.join("/"))
                  }
                  ),
                  t.length > 0 && this.metadata.setFormat("codec", t.filter(p).join("+"));
                  const r = this.tracks.filter(e=>e.soundSampleDescription.length >= 1 && e.soundSampleDescription[0].description && e.soundSampleDescription[0].description.sampleRate > 0);
                  if (r.length >= 1) {
                      const e = r[0]
                        , t = e.duration / e.timeScale;
                      this.metadata.setFormat("duration", t);
                      const n = e.soundSampleDescription[0];
                      n.description && (this.metadata.setFormat("sampleRate", n.description.sampleRate),
                      this.metadata.setFormat("bitsPerSample", n.description.sampleSize),
                      this.metadata.setFormat("numberOfChannels", n.description.numAudioChannels));
                      const a = h[n.dataFormat];
                      a && this.metadata.setFormat("lossless", !a.lossy),
                      this.calculateBitRate()
                  }
              }
              async handleAtom(e) {
                  if (e.parent)
                      switch (e.parent.header.name) {
                      case "ilst":
                      case "<id>":
                          return this.parseMetadataItemData(e);
                      case "stbl":
                          switch (e.header.name) {
                          case "stsd":
                              return this.parseAtom_stsd(e.getPayloadLength());
                          case "stsc":
                              return this.parseAtom_stsc(e.getPayloadLength());
                          case "stts":
                              return this.parseAtom_stts(e.getPayloadLength());
                          case "stsz":
                              return this.parseAtom_stsz(e.getPayloadLength());
                          case "stco":
                              return this.parseAtom_stco(e.getPayloadLength());
                          default:
                              f(`Ignore: stbl/${e.header.name} atom`)
                          }
                          break
                      }
                  switch (e.header.name) {
                  case "ftyp":
                      const t = await this.parseAtom_ftyp(e.getPayloadLength());
                      f(`ftyp: ${t.join("/")}`);
                      const r = t.filter(p).join("/");
                      return void this.metadata.setFormat("container", r);
                  case "mdhd":
                      return this.parseAtom_mdhd(e);
                  case "mvhd":
                      return this.parseAtom_mvhd(e);
                  case "mdat":
                      this.audioLengthInBytes = e.getPayloadLength(),
                      this.calculateBitRate();
                      break
                  }
                  switch (e.header.name) {
                  case "ftyp":
                      const t = await this.parseAtom_ftyp(e.getPayloadLength());
                      f(`ftyp: ${t.join("/")}`);
                      const r = t.filter(p).join("/");
                      return void this.metadata.setFormat("container", r);
                  case "mdhd":
                      return this.parseAtom_mdhd(e);
                  case "mvhd":
                      return this.parseAtom_mvhd(e);
                  case "chap":
                      const n = this.getTrackDescription();
                      return void (n.chapterList = await this.parseAtom_chap(e));
                  case "tkhd":
                      return void await this.parseAtom_tkhd(e.getPayloadLength());
                  case "mdat":
                      return this.audioLengthInBytes = e.getPayloadLength(),
                      this.calculateBitRate(),
                      this.parseAtom_mdat(e.getPayloadLength())
                  }
                  await this.tokenizer.ignore(e.getPayloadLength()),
                  f(`Ignore atom data: path=${e.atomPath}, payload-len=${e.getPayloadLength()}`)
              }
              getTrackDescription() {
                  return this.tracks[this.tracks.length - 1]
              }
              calculateBitRate() {
                  this.audioLengthInBytes && this.metadata.format.duration && this.metadata.setFormat("bitrate", 8 * this.audioLengthInBytes / this.metadata.format.duration)
              }
              addTag(e, t) {
                  this.metadata.addTag(d, e, t)
              }
              addWarning(e) {
                  f("Warning: " + e),
                  this.metadata.addWarning(e)
              }
              parseMetadataItemData(e) {
                  let t = e.header.name;
                  return e.readAtoms(this.tokenizer, async e=>{
                      switch (e.header.name) {
                      case "data":
                          return this.parseValueAtom(t, e);
                      case "name":
                          const r = await this.tokenizer.readToken(new c.NameAtom(e.getPayloadLength()));
                          t += ":" + r.name;
                          break;
                      case "mean":
                          const n = await this.tokenizer.readToken(new c.NameAtom(e.getPayloadLength()));
                          t += ":" + n.name;
                          break;
                      default:
                          const i = await this.tokenizer.readToken(new a.BufferType(e.getPayloadLength()));
                          this.addWarning("Unsupported meta-item: " + t + "[" + e.header.name + "] => value=" + i.toString("hex") + " ascii=" + i.toString("ascii"))
                      }
                  }
                  , e.getPayloadLength())
              }
              async parseValueAtom(t, r) {
                  const n = await this.tokenizer.readToken(new c.DataAtom(r.header.length - c.Header.len));
                  if (0 !== n.type.set)
                      throw new Error("Unsupported type-set != 0: " + n.type.set);
                  switch (n.type.type) {
                  case 0:
                      switch (t) {
                      case "trkn":
                      case "disk":
                          const e = a.UINT8.get(n.value, 3)
                            , r = a.UINT8.get(n.value, 5);
                          this.addTag(t, e + "/" + r);
                          break;
                      case "gnre":
                          const i = a.UINT8.get(n.value, 1)
                            , o = u.Genres[i - 1];
                          this.addTag(t, o);
                          break;
                      default:
                      }
                      break;
                  case 1:
                  case 18:
                      this.addTag(t, n.value.toString("utf-8"));
                      break;
                  case 13:
                      if (this.options.skipCovers)
                          break;
                      this.addTag(t, {
                          format: "image/jpeg",
                          data: e.from(n.value)
                      });
                      break;
                  case 14:
                      if (this.options.skipCovers)
                          break;
                      this.addTag(t, {
                          format: "image/png",
                          data: e.from(n.value)
                      });
                      break;
                  case 21:
                      this.addTag(t, m.read_BE_Signed_Integer(n.value));
                      break;
                  case 22:
                      this.addTag(t, m.read_BE_Unsigned_Integer(n.value));
                      break;
                  case 65:
                      this.addTag(t, n.value.readInt8(0));
                      break;
                  case 66:
                      this.addTag(t, n.value.readInt16BE(0));
                      break;
                  case 67:
                      this.addTag(t, n.value.readInt32BE(0));
                      break;
                  default:
                      this.addWarning(`atom key=${t}, has unknown well-known-type (data-type): ${n.type.type}`)
                  }
              }
              async parseAtom_mvhd(e) {
                  await this.tokenizer.ignore(e.getPayloadLength())
              }
              async parseAtom_mdhd(e) {
                  const t = await this.tokenizer.readToken(new c.MdhdAtom(e.getPayloadLength()))
                    , r = this.getTrackDescription();
                  r.creationTime = t.creationTime,
                  r.modificationTime = t.modificationTime,
                  r.timeScale = t.timeScale,
                  r.duration = t.duration
              }
              async parseAtom_ftyp(e) {
                  const t = await this.tokenizer.readToken(c.ftyp);
                  if (e -= c.ftyp.len,
                  e > 0) {
                      const r = await this.parseAtom_ftyp(e)
                        , n = t.type.replace(/\W/g, "");
                      return n.length > 0 && r.push(n),
                      r
                  }
                  return []
              }
              async parseAtom_tkhd(e) {
                  const t = await this.tokenizer.readToken(new c.TrackHeaderAtom(e));
                  this.tracks.push(t)
              }
              async parseAtom_stsd(e) {
                  const t = await this.tokenizer.readToken(new c.StsdAtom(e))
                    , r = this.getTrackDescription();
                  r.soundSampleDescription = t.table.map(e=>this.parseSoundSampleDescription(e))
              }
              async parseAtom_stsc(e) {
                  const t = await this.tokenizer.readToken(new c.StscAtom(e));
                  this.getTrackDescription().sampleToChunkTable = t.entries
              }
              async parseAtom_stts(e) {
                  const t = await this.tokenizer.readToken(new c.SttsAtom(e));
                  this.getTrackDescription().timeToSampleTable = t.entries
              }
              parseSoundSampleDescription(e) {
                  const t = {
                      dataFormat: e.dataFormat,
                      dataReferenceIndex: e.dataReferenceIndex
                  };
                  let r = 0;
                  const n = c.SoundSampleDescriptionVersion.get(e.description, r);
                  return r += c.SoundSampleDescriptionVersion.len,
                  0 === n.version || 1 === n.version ? t.description = c.SoundSampleDescriptionV0.get(e.description, r) : f(`Warning: sound-sample-description ${n} not implemented`),
                  t
              }
              async parseAtom_chap(e) {
                  const t = [];
                  let r = e.getPayloadLength();
                  while (r >= a.UINT32_BE.len)
                      t.push(await this.tokenizer.readNumber(a.UINT32_BE)),
                      r -= a.UINT32_BE.len;
                  return t
              }
              async parseAtom_stsz(e) {
                  const t = await this.tokenizer.readToken(new c.StszAtom(e))
                    , r = this.getTrackDescription();
                  r.sampleSize = t.sampleSize,
                  r.sampleSizeTable = t.entries
              }
              async parseAtom_stco(e) {
                  const t = await this.tokenizer.readToken(new c.StcoAtom(e));
                  this.getTrackDescription().chunkOffsetTable = t.entries
              }
              async parseAtom_mdat(e) {
                  if (this.options.includeChapters) {
                      const t = this.tracks.filter(e=>e.chapterList);
                      if (1 === t.length) {
                          const r = t[0].chapterList
                            , n = this.tracks.filter(e=>-1 !== r.indexOf(e.trackId));
                          if (1 === n.length)
                              return this.parseChapterTrack(n[0], t[0], e)
                      }
                  }
                  await this.tokenizer.ignore(e)
              }
              async parseChapterTrack(e, t, r) {
                  e.sampleSize || i.equal(e.chunkOffsetTable.length, e.sampleSizeTable.length, "chunk-offset-table & sample-size-table length");
                  const n = [];
                  for (let a = 0; a < e.chunkOffsetTable.length && r > 0; ++a) {
                      const o = e.chunkOffsetTable[a]
                        , s = o - this.tokenizer.position
                        , u = e.sampleSize > 0 ? e.sampleSize : e.sampleSizeTable[a];
                      r -= s + u,
                      i.ok(r >= 0, "Chapter chunk exceeding token length"),
                      await this.tokenizer.ignore(s);
                      const l = await this.tokenizer.readToken(new c.ChapterText(u));
                      f(`Chapter ${a + 1}: ${l}`);
                      const d = {
                          title: l,
                          sampleOffset: this.findSampleOffset(t, this.tokenizer.position)
                      };
                      f(`Chapter title=${d.title}, offset=${d.sampleOffset}/${this.tracks[0].duration}`),
                      n.push(d)
                  }
                  this.metadata.setFormat("chapters", n),
                  await this.tokenizer.ignore(r)
              }
              findSampleOffset(e, t) {
                  let r = 0;
                  e.timeToSampleTable.forEach(e=>{
                      r += e.count * e.duration
                  }
                  ),
                  f(`Total duration=${r}`);
                  let n = 0;
                  while (n < e.chunkOffsetTable.length && e.chunkOffsetTable[n] < t)
                      ++n;
                  return this.getChunkDuration(n + 1, e)
              }
              getChunkDuration(e, t) {
                  let r = 0
                    , n = t.timeToSampleTable[r].count
                    , a = t.timeToSampleTable[r].duration
                    , i = 1
                    , o = this.getSamplesPerChunk(i, t.sampleToChunkTable)
                    , s = 0;
                  while (i < e) {
                      const e = Math.min(n, o);
                      s += e * a,
                      n -= e,
                      o -= e,
                      0 === o ? (++i,
                      o = this.getSamplesPerChunk(i, t.sampleToChunkTable)) : (++r,
                      n = t.timeToSampleTable[r].count,
                      a = t.timeToSampleTable[r].duration)
                  }
                  return s
              }
              getSamplesPerChunk(e, t) {
                  for (let r = 0; r < t.length - 1; ++r)
                      if (e >= t[r].firstChunk && e < t[r + 1].firstChunk)
                          return t[r].samplesPerChunk;
                  return t[t.length - 1].samplesPerChunk
              }
          }
          t.MP4Parser = m
      }
      ).call(this, r("b639").Buffer)
  },
  "5f96": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = n.aTypedArray
        , i = n.exportTypedArrayMethod
        , o = [].join;
      i("join", (function(e) {
          return o.apply(a(this), arguments)
      }
      ))
  },
  "5fb2": function(e, t, r) {
      "use strict";
      var n = 2147483647
        , a = 36
        , i = 1
        , o = 26
        , s = 38
        , c = 700
        , u = 72
        , l = 128
        , f = "-"
        , d = /[^\0-\u007E]/
        , h = /[.\u3002\uFF0E\uFF61]/g
        , p = "Overflow: input needs wider integers to process"
        , m = a - i
        , g = Math.floor
        , y = String.fromCharCode
        , b = function(e) {
          var t = []
            , r = 0
            , n = e.length;
          while (r < n) {
              var a = e.charCodeAt(r++);
              if (a >= 55296 && a <= 56319 && r < n) {
                  var i = e.charCodeAt(r++);
                  56320 == (64512 & i) ? t.push(((1023 & a) << 10) + (1023 & i) + 65536) : (t.push(a),
                  r--)
              } else
                  t.push(a)
          }
          return t
      }
        , v = function(e) {
          return e + 22 + 75 * (e < 26)
      }
        , w = function(e, t, r) {
          var n = 0;
          for (e = r ? g(e / c) : e >> 1,
          e += g(e / t); e > m * o >> 1; n += a)
              e = g(e / m);
          return g(n + (m + 1) * e / (e + s))
      }
        , T = function(e) {
          var t = [];
          e = b(e);
          var r, s, c = e.length, d = l, h = 0, m = u;
          for (r = 0; r < e.length; r++)
              s = e[r],
              s < 128 && t.push(y(s));
          var T = t.length
            , k = T;
          T && t.push(f);
          while (k < c) {
              var _ = n;
              for (r = 0; r < e.length; r++)
                  s = e[r],
                  s >= d && s < _ && (_ = s);
              var S = k + 1;
              if (_ - d > g((n - h) / S))
                  throw RangeError(p);
              for (h += (_ - d) * S,
              d = _,
              r = 0; r < e.length; r++) {
                  if (s = e[r],
                  s < d && ++h > n)
                      throw RangeError(p);
                  if (s == d) {
                      for (var E = h, I = a; ; I += a) {
                          var A = I <= m ? i : I >= m + o ? o : I - m;
                          if (E < A)
                              break;
                          var x = E - A
                            , B = a - A;
                          t.push(y(v(A + x % B))),
                          E = g(x / B)
                      }
                      t.push(y(v(E))),
                      m = w(h, S, k == T),
                      h = 0,
                      ++k
                  }
              }
              ++h,
              ++d
          }
          return t.join("")
      };
      e.exports = function(e) {
          var t, r, n = [], a = e.toLowerCase().replace(h, ".").split(".");
          for (t = 0; t < a.length; t++)
              r = a[t],
              n.push(d.test(r) ? "xn--" + T(r) : r);
          return n.join(".")
      }
  },
  "60bd": function(e, t, r) {
      "use strict";
      var n = r("da84")
        , a = r("ebb5")
        , i = r("e260")
        , o = r("b622")
        , s = o("iterator")
        , c = n.Uint8Array
        , u = i.values
        , l = i.keys
        , f = i.entries
        , d = a.aTypedArray
        , h = a.exportTypedArrayMethod
        , p = c && c.prototype[s]
        , m = !!p && ("values" == p.name || void 0 == p.name)
        , g = function() {
          return u.call(d(this))
      };
      h("entries", (function() {
          return f.call(d(this))
      }
      )),
      h("keys", (function() {
          return l.call(d(this))
      }
      )),
      h("values", g, !m),
      h(s, g, !m)
  },
  "60da": function(e, t, r) {
      "use strict";
      var n = r("83ab")
        , a = r("d039")
        , i = r("df75")
        , o = r("7418")
        , s = r("d1e7")
        , c = r("7b0b")
        , u = r("44ad")
        , l = Object.assign
        , f = Object.defineProperty;
      e.exports = !l || a((function() {
          if (n && 1 !== l({
              b: 1
          }, l(f({}, "a", {
              enumerable: !0,
              get: function() {
                  f(this, "b", {
                      value: 3,
                      enumerable: !1
                  })
              }
          }), {
              b: 2
          })).b)
              return !0;
          var e = {}
            , t = {}
            , r = Symbol()
            , a = "abcdefghijklmnopqrst";
          return e[r] = 7,
          a.split("").forEach((function(e) {
              t[e] = e
          }
          )),
          7 != l({}, e)[r] || i(l({}, t)).join("") != a
      }
      )) ? function(e, t) {
          var r = c(e)
            , a = arguments.length
            , l = 1
            , f = o.f
            , d = s.f;
          while (a > l) {
              var h, p = u(arguments[l++]), m = f ? i(p).concat(f(p)) : i(p), g = m.length, y = 0;
              while (g > y)
                  h = m[y++],
                  n && !d.call(p, h) || (r[h] = p[h])
          }
          return r
      }
      : l
  },
  "621a": function(e, t, r) {
      "use strict";
      var n = r("da84")
        , a = r("83ab")
        , i = r("a981")
        , o = r("9112")
        , s = r("e2cc")
        , c = r("d039")
        , u = r("19aa")
        , l = r("a691")
        , f = r("50c4")
        , d = r("0b25")
        , h = r("77a7")
        , p = r("e163")
        , m = r("d2bb")
        , g = r("241c").f
        , y = r("9bf2").f
        , b = r("81d5")
        , v = r("d44e")
        , w = r("69f3")
        , T = w.get
        , k = w.set
        , _ = "ArrayBuffer"
        , S = "DataView"
        , E = "prototype"
        , I = "Wrong length"
        , A = "Wrong index"
        , x = n[_]
        , B = x
        , C = n[S]
        , P = C && C[E]
        , O = Object.prototype
        , M = n.RangeError
        , D = h.pack
        , R = h.unpack
        , F = function(e) {
          return [255 & e]
      }
        , L = function(e) {
          return [255 & e, e >> 8 & 255]
      }
        , z = function(e) {
          return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
      }
        , U = function(e) {
          return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
      }
        , N = function(e) {
          return D(e, 23, 4)
      }
        , j = function(e) {
          return D(e, 52, 8)
      }
        , H = function(e, t) {
          y(e[E], t, {
              get: function() {
                  return T(this)[t]
              }
          })
      }
        , W = function(e, t, r, n) {
          var a = d(r)
            , i = T(e);
          if (a + t > i.byteLength)
              throw M(A);
          var o = T(i.buffer).bytes
            , s = a + i.byteOffset
            , c = o.slice(s, s + t);
          return n ? c : c.reverse()
      }
        , q = function(e, t, r, n, a, i) {
          var o = d(r)
            , s = T(e);
          if (o + t > s.byteLength)
              throw M(A);
          for (var c = T(s.buffer).bytes, u = o + s.byteOffset, l = n(+a), f = 0; f < t; f++)
              c[u + f] = l[i ? f : t - f - 1]
      };
      if (i) {
          if (!c((function() {
              x(1)
          }
          )) || !c((function() {
              new x(-1)
          }
          )) || c((function() {
              return new x,
              new x(1.5),
              new x(NaN),
              x.name != _
          }
          ))) {
              B = function(e) {
                  return u(this, B),
                  new x(d(e))
              }
              ;
              for (var X, $ = B[E] = x[E], G = g(x), V = 0; G.length > V; )
                  (X = G[V++])in B || o(B, X, x[X]);
              $.constructor = B
          }
          m && p(P) !== O && m(P, O);
          var Y = new C(new B(2))
            , K = P.setInt8;
          Y.setInt8(0, 2147483648),
          Y.setInt8(1, 2147483649),
          !Y.getInt8(0) && Y.getInt8(1) || s(P, {
              setInt8: function(e, t) {
                  K.call(this, e, t << 24 >> 24)
              },
              setUint8: function(e, t) {
                  K.call(this, e, t << 24 >> 24)
              }
          }, {
              unsafe: !0
          })
      } else
          B = function(e) {
              u(this, B, _);
              var t = d(e);
              k(this, {
                  bytes: b.call(new Array(t), 0),
                  byteLength: t
              }),
              a || (this.byteLength = t)
          }
          ,
          C = function(e, t, r) {
              u(this, C, S),
              u(e, B, S);
              var n = T(e).byteLength
                , i = l(t);
              if (i < 0 || i > n)
                  throw M("Wrong offset");
              if (r = void 0 === r ? n - i : f(r),
              i + r > n)
                  throw M(I);
              k(this, {
                  buffer: e,
                  byteLength: r,
                  byteOffset: i
              }),
              a || (this.buffer = e,
              this.byteLength = r,
              this.byteOffset = i)
          }
          ,
          a && (H(B, "byteLength"),
          H(C, "buffer"),
          H(C, "byteLength"),
          H(C, "byteOffset")),
          s(C[E], {
              getInt8: function(e) {
                  return W(this, 1, e)[0] << 24 >> 24
              },
              getUint8: function(e) {
                  return W(this, 1, e)[0]
              },
              getInt16: function(e) {
                  var t = W(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                  return (t[1] << 8 | t[0]) << 16 >> 16
              },
              getUint16: function(e) {
                  var t = W(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                  return t[1] << 8 | t[0]
              },
              getInt32: function(e) {
                  return U(W(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
              },
              getUint32: function(e) {
                  return U(W(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
              },
              getFloat32: function(e) {
                  return R(W(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
              },
              getFloat64: function(e) {
                  return R(W(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
              },
              setInt8: function(e, t) {
                  q(this, 1, e, F, t)
              },
              setUint8: function(e, t) {
                  q(this, 1, e, F, t)
              },
              setInt16: function(e, t) {
                  q(this, 2, e, L, t, arguments.length > 2 ? arguments[2] : void 0)
              },
              setUint16: function(e, t) {
                  q(this, 2, e, L, t, arguments.length > 2 ? arguments[2] : void 0)
              },
              setInt32: function(e, t) {
                  q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
              },
              setUint32: function(e, t) {
                  q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
              },
              setFloat32: function(e, t) {
                  q(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
              },
              setFloat64: function(e, t) {
                  q(this, 8, e, j, t, arguments.length > 2 ? arguments[2] : void 0)
              }
          });
      v(B, _),
      v(C, S),
      e.exports = {
          ArrayBuffer: B,
          DataView: C
      }
  },
  "649e": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").some
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("some", (function(e) {
          return a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  "64a4": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("6f58")
            , a = r("d3ab")
            , i = r("41db")
            , o = r("0662");
          class s {
              static removeUnsyncBytes(e) {
                  let t = 0
                    , r = 0;
                  while (t < e.length - 1)
                      t !== r && (e[r] = e[t]),
                      t += 255 === e[t] && 0 === e[t + 1] ? 2 : 1,
                      r++;
                  return t < e.length && (e[r++] = e[t]),
                  e.slice(0, r)
              }
              static readFrameHeader(e, t) {
                  let r;
                  switch (t) {
                  case 2:
                      r = {
                          id: e.toString("ascii", 0, 3),
                          length: n.UINT24_BE.get(e, 3)
                      };
                      break;
                  case 3:
                      r = {
                          id: e.toString("ascii", 0, 4),
                          length: n.UINT32_BE.get(e, 4),
                          flags: s.readFrameFlags(e.slice(8, 10))
                      };
                      break;
                  case 4:
                      r = {
                          id: e.toString("ascii", 0, 4),
                          length: o.UINT32SYNCSAFE.get(e, 4),
                          flags: s.readFrameFlags(e.slice(8, 10))
                      };
                      break;
                  default:
                      throw new Error("Unexpected majorVer: " + t)
                  }
                  return r
              }
              static getFrameHeaderLength(e) {
                  switch (e) {
                  case 2:
                      return 6;
                  case 3:
                  case 4:
                      return 10;
                  default:
                      throw new Error("header versionIndex is incorrect")
                  }
              }
              static readFrameFlags(e) {
                  return {
                      status: {
                          tag_alter_preservation: a.default.strtokBITSET.get(e, 0, 6),
                          file_alter_preservation: a.default.strtokBITSET.get(e, 0, 5),
                          read_only: a.default.strtokBITSET.get(e, 0, 4)
                      },
                      format: {
                          grouping_identity: a.default.strtokBITSET.get(e, 1, 7),
                          compression: a.default.strtokBITSET.get(e, 1, 3),
                          encryption: a.default.strtokBITSET.get(e, 1, 2),
                          unsynchronisation: a.default.strtokBITSET.get(e, 1, 1),
                          data_length_indicator: a.default.strtokBITSET.get(e, 1, 0)
                      }
                  }
              }
              static readFrameData(e, t, r, n) {
                  switch (r) {
                  case 2:
                      return i.default.readData(e, t.id, r, n);
                  case 3:
                  case 4:
                      return t.flags.format.unsynchronisation && (e = s.removeUnsyncBytes(e)),
                      t.flags.format.data_length_indicator && (e = e.slice(4, e.length)),
                      i.default.readData(e, t.id, r, n);
                  default:
                      throw new Error("Unexpected majorVer: " + r)
                  }
              }
              static makeDescriptionTagName(e, t) {
                  return e + (t ? ":" + t : "")
              }
              async parse(e, t, r) {
                  this.tokenizer = t,
                  this.metadata = e,
                  this.options = r;
                  const n = await this.tokenizer.readToken(o.ID3v2Header);
                  if ("ID3" !== n.fileIdentifier)
                      throw new Error("expected ID3-header file-identifier 'ID3' was not found");
                  return this.id3Header = n,
                  this.headerType = "ID3v2." + n.version.major,
                  n.flags.isExtendedHeader ? this.parseExtendedHeader() : this.parseId3Data(n.size)
              }
              async parseExtendedHeader() {
                  const e = await this.tokenizer.readToken(o.ExtendedHeader)
                    , t = e.size - o.ExtendedHeader.len;
                  return t > 0 ? this.parseExtendedHeaderData(t, e.size) : this.parseId3Data(this.id3Header.size - e.size)
              }
              async parseExtendedHeaderData(t, r) {
                  const n = e.alloc(t);
                  return await this.tokenizer.readBuffer(n, {
                      length: t
                  }),
                  this.parseId3Data(this.id3Header.size - r)
              }
              async parseId3Data(t) {
                  const r = e.alloc(t);
                  await this.tokenizer.readBuffer(r, {
                      length: t
                  });
                  for (const e of this.parseMetadata(r))
                      if ("TXXX" === e.id)
                          for (const t of e.value.text)
                              this.addTag(s.makeDescriptionTagName(e.id, e.value.description), t);
                      else if ("COM" === e.id)
                          for (const t of e.value)
                              this.addTag(s.makeDescriptionTagName(e.id, t.description), t.text);
                      else if (Array.isArray(e.value))
                          for (const t of e.value)
                              this.addTag(e.id, t);
                      else
                          this.addTag(e.id, e.value)
              }
              addTag(e, t) {
                  this.metadata.addTag(this.headerType, e, t)
              }
              parseMetadata(e) {
                  let t = 0;
                  const r = [];
                  while (1) {
                      if (t === e.length)
                          break;
                      const n = s.getFrameHeaderLength(this.id3Header.version.major);
                      if (t + n > e.length) {
                          this.metadata.addWarning("Illegal ID3v2 tag length");
                          break
                      }
                      const a = e.slice(t, t += n)
                        , i = s.readFrameHeader(a, this.id3Header.version.major);
                      if ("" === i.id || "\0\0\0\0" === i.id || -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i.id[0]))
                          break;
                      const o = e.slice(t, t += i.length)
                        , c = s.readFrameData(o, i, this.id3Header.version.major, !this.options.skipCovers);
                      r.push({
                          id: i.id,
                          value: c
                      })
                  }
                  return r
              }
          }
          t.ID3v2Parser = s
      }
      ).call(this, r("b639").Buffer)
  },
  6547: function(e, t, r) {
      var n = r("a691")
        , a = r("1d80")
        , i = function(e) {
          return function(t, r) {
              var i, o, s = String(a(t)), c = n(r), u = s.length;
              return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c),
              i < 55296 || i > 56319 || c + 1 === u || (o = s.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : o - 56320 + (i - 55296 << 10) + 65536)
          }
      };
      e.exports = {
          codeAt: i(!1),
          charAt: i(!0)
      }
  },
  "65da": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("cec2")
        , a = r("9131")
        , i = r("fa86")
        , o = r("34eb")
        , s = r("95c9")
        , c = o("music-metadata:parser:ASF")
        , u = "asf";
      class l extends s.BasicParser {
          async parse() {
              const e = await this.tokenizer.readToken(i.TopLevelHeaderObjectToken);
              if (!e.objectId.equals(a.default.HeaderObject))
                  throw new Error("expected asf header; but was not found; got: " + e.objectId.str);
              try {
                  await this.parseObjectHeader(e.numberOfHeaderObjects)
              } catch (t) {
                  c("Error while parsing ASF: %s", t)
              }
          }
          async parseObjectHeader(e) {
              let t;
              do {
                  const e = await this.tokenizer.readToken(i.HeaderObjectToken);
                  switch (c("header GUID=%s", e.objectId.str),
                  e.objectId.str) {
                  case i.FilePropertiesObject.guid.str:
                      const r = await this.tokenizer.readToken(new i.FilePropertiesObject(e));
                      this.metadata.setFormat("duration", r.playDuration / 1e7),
                      this.metadata.setFormat("bitrate", r.maximumBitrate);
                      break;
                  case i.StreamPropertiesObject.guid.str:
                      const o = await this.tokenizer.readToken(new i.StreamPropertiesObject(e));
                      this.metadata.setFormat("container", "ASF/" + o.streamType);
                      break;
                  case i.HeaderExtensionObject.guid.str:
                      const s = await this.tokenizer.readToken(new i.HeaderExtensionObject);
                      await this.parseExtensionObject(s.extensionDataSize);
                      break;
                  case i.ContentDescriptionObjectState.guid.str:
                      t = await this.tokenizer.readToken(new i.ContentDescriptionObjectState(e)),
                      this.addTags(t);
                      break;
                  case i.ExtendedContentDescriptionObjectState.guid.str:
                      t = await this.tokenizer.readToken(new i.ExtendedContentDescriptionObjectState(e)),
                      this.addTags(t);
                      break;
                  case a.default.CodecListObject.str:
                      const u = await i.readCodecEntries(this.tokenizer);
                      u.forEach(e=>{
                          this.metadata.addStreamInfo({
                              type: e.type.videoCodec ? n.TrackType.video : n.TrackType.audio,
                              codecName: e.codecName
                          })
                      }
                      );
                      const l = u.filter(e=>e.type.audioCodec).map(e=>e.codecName).join("/");
                      this.metadata.setFormat("codec", l);
                      break;
                  case a.default.StreamBitratePropertiesObject.str:
                      await this.tokenizer.ignore(e.objectSize - i.HeaderObjectToken.len);
                      break;
                  case a.default.PaddingObject.str:
                      c("Padding: %s bytes", e.objectSize - i.HeaderObjectToken.len),
                      await this.tokenizer.ignore(e.objectSize - i.HeaderObjectToken.len);
                      break;
                  default:
                      this.metadata.addWarning("Ignore ASF-Object-GUID: " + e.objectId.str),
                      c("Ignore ASF-Object-GUID: %s", e.objectId.str),
                      await this.tokenizer.readToken(new i.IgnoreObjectState(e))
                  }
              } while (--e)
          }
          addTags(e) {
              e.forEach(e=>{
                  this.metadata.addTag(u, e.id, e.value)
              }
              )
          }
          async parseExtensionObject(e) {
              do {
                  const t = await this.tokenizer.readToken(i.HeaderObjectToken);
                  switch (t.objectId.str) {
                  case i.ExtendedStreamPropertiesObjectState.guid.str:
                      await this.tokenizer.readToken(new i.ExtendedStreamPropertiesObjectState(t));
                      break;
                  case i.MetadataObjectState.guid.str:
                      const e = await this.tokenizer.readToken(new i.MetadataObjectState(t));
                      this.addTags(e);
                      break;
                  case i.MetadataLibraryObjectState.guid.str:
                      const r = await this.tokenizer.readToken(new i.MetadataLibraryObjectState(t));
                      this.addTags(r);
                      break;
                  case a.default.PaddingObject.str:
                      await this.tokenizer.ignore(t.objectSize - i.HeaderObjectToken.len);
                      break;
                  case a.default.CompatibilityObject.str:
                      this.tokenizer.ignore(t.objectSize - i.HeaderObjectToken.len);
                      break;
                  case a.default.ASF_Index_Placeholder_Object.str:
                      await this.tokenizer.ignore(t.objectSize - i.HeaderObjectToken.len);
                      break;
                  default:
                      this.metadata.addWarning("Ignore ASF-Object-GUID: " + t.objectId.str),
                      await this.tokenizer.readToken(new i.IgnoreObjectState(t));
                      break
                  }
                  e -= t.objectSize
              } while (e > 0)
          }
      }
      t.AsfParser = l
  },
  "65f0": function(e, t, r) {
      var n = r("861d")
        , a = r("e8b5")
        , i = r("b622")
        , o = i("species");
      e.exports = function(e, t) {
          var r;
          return a(e) && (r = e.constructor,
          "function" != typeof r || r !== Array && !a(r.prototype) ? n(r) && (r = r[o],
          null === r && (r = void 0)) : r = void 0),
          new (void 0 === r ? Array : r)(0 === t ? 0 : t)
      }
  },
  "695a": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      class n {
          constructor(e) {
              this.buf = e,
              this.fileSize = e.length
          }
          async randomRead(e, t, r, n) {
              return this.buf.copy(e, t, n, n + r)
          }
      }
      t.RandomBufferReader = n
  },
  "69f3": function(e, t, r) {
      var n, a, i, o = r("7f9a"), s = r("da84"), c = r("861d"), u = r("9112"), l = r("5135"), f = r("f772"), d = r("d012"), h = s.WeakMap, p = function(e) {
          return i(e) ? a(e) : n(e, {})
      }, m = function(e) {
          return function(t) {
              var r;
              if (!c(t) || (r = a(t)).type !== e)
                  throw TypeError("Incompatible receiver, " + e + " required");
              return r
          }
      };
      if (o) {
          var g = new h
            , y = g.get
            , b = g.has
            , v = g.set;
          n = function(e, t) {
              return v.call(g, e, t),
              t
          }
          ,
          a = function(e) {
              return y.call(g, e) || {}
          }
          ,
          i = function(e) {
              return b.call(g, e)
          }
      } else {
          var w = f("state");
          d[w] = !0,
          n = function(e, t) {
              return u(e, w, t),
              t
          }
          ,
          a = function(e) {
              return l(e, w) ? e[w] : {}
          }
          ,
          i = function(e) {
              return l(e, w)
          }
      }
      e.exports = {
          set: n,
          get: a,
          has: i,
          enforce: p,
          getterFor: m
      }
  },
  "6a01": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("98a7");
      t.Header = {
          len: 8,
          get: (e,t)=>({
              chunkID: n.FourCcToken.get(e, t),
              chunkSize: e.readUInt32BE(t + 4)
          })
      }
  },
  "6d08": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return function(t) {
              var r = e
                , n = r.lib
                , a = n.CipherParams
                , i = r.enc
                , o = i.Hex
                , s = r.format;
              s.Hex = {
                  stringify: function(e) {
                      return e.ciphertext.toString(o)
                  },
                  parse: function(e) {
                      var t = o.parse(e);
                      return a.create({
                          ciphertext: t
                      })
                  }
              }
          }(),
          e.format.Hex
      }
      ))
  },
  "6eeb": function(e, t, r) {
      var n = r("da84")
        , a = r("9112")
        , i = r("5135")
        , o = r("ce4e")
        , s = r("8925")
        , c = r("69f3")
        , u = c.get
        , l = c.enforce
        , f = String(String).split("String");
      (e.exports = function(e, t, r, s) {
          var c = !!s && !!s.unsafe
            , u = !!s && !!s.enumerable
            , d = !!s && !!s.noTargetGet;
          "function" == typeof r && ("string" != typeof t || i(r, "name") || a(r, "name", t),
          l(r).source = f.join("string" == typeof t ? t : "")),
          e !== n ? (c ? !d && e[t] && (u = !0) : delete e[t],
          u ? e[t] = r : a(e, t, r)) : u ? e[t] = r : o(t, r)
      }
      )(Function.prototype, "toString", (function() {
          return "function" == typeof this && u(this).source || s(this)
      }
      ))
  },
  "6f58": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("f654")
        , a = r("9152");
      t.UINT8 = {
          len: 1,
          get(e, t) {
              return e.readUInt8(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 255),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUInt8(r, t)
          }
      },
      t.UINT16_LE = {
          len: 2,
          get(e, t) {
              return e.readUInt16LE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 65535),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUInt16LE(r, t)
          }
      },
      t.UINT16_BE = {
          len: 2,
          get(e, t) {
              return e.readUInt16BE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 65535),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUInt16BE(r, t)
          }
      },
      t.UINT24_LE = {
          len: 3,
          get(e, t) {
              return e.readUIntLE(t, 3)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 16777215),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUIntLE(r, t, 3)
          }
      },
      t.UINT24_BE = {
          len: 3,
          get(e, t) {
              return e.readUIntBE(t, 3)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 16777215),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUIntBE(r, t, 3)
          }
      },
      t.UINT32_LE = {
          len: 4,
          get(e, t) {
              return e.readUInt32LE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 4294967295),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUInt32LE(r, t)
          }
      },
      t.UINT32_BE = {
          len: 4,
          get(e, t) {
              return e.readUInt32BE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= 0 && r <= 4294967295),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeUInt32BE(r, t)
          }
      },
      t.INT8 = {
          len: 1,
          get(e, t) {
              return e.readInt8(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -128 && r <= 127),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeInt8(r, t)
          }
      },
      t.INT16_BE = {
          len: 2,
          get(e, t) {
              return e.readInt16BE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -32768 && r <= 32767),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeInt16BE(r, t)
          }
      },
      t.INT16_LE = {
          len: 2,
          get(e, t) {
              return e.readInt16LE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -32768 && r <= 32767),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeInt16LE(r, t)
          }
      },
      t.INT24_LE = {
          len: 3,
          get(e, t) {
              return e.readIntLE(t, 3)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -8388608 && r <= 8388607),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeIntLE(r, t, 3)
          }
      },
      t.INT24_BE = {
          len: 3,
          get(e, t) {
              return e.readIntBE(t, 3)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -8388608 && r <= 8388607),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeIntBE(r, t, 3)
          }
      },
      t.INT32_BE = {
          len: 4,
          get(e, t) {
              return e.readInt32BE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -2147483648 && r <= 2147483647),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeInt32BE(r, t)
          }
      },
      t.INT32_LE = {
          len: 4,
          get(e, t) {
              return e.readInt32LE(t)
          },
          put(e, t, r) {
              return n.equal(typeof t, "number"),
              n.equal(typeof r, "number"),
              n.ok(r >= -2147483648 && r <= 2147483647),
              n.ok(t >= 0),
              n.ok(this.len <= e.length),
              e.writeInt32LE(r, t)
          }
      },
      t.UINT64_LE = {
          len: 8,
          get(e, t) {
              return u(e, t, this.len)
          },
          put(e, t, r) {
              return l(e, r, t, this.len)
          }
      },
      t.INT64_LE = {
          len: 8,
          get(e, t) {
              return f(e, t, this.len)
          },
          put(e, t, r) {
              return d(e, r, t, this.len)
          }
      },
      t.UINT64_BE = {
          len: 8,
          get(e, t) {
              return h(e, t, this.len)
          },
          put(e, t, r) {
              return p(e, r, t, this.len)
          }
      },
      t.INT64_BE = {
          len: 8,
          get(e, t) {
              return m(e, t, this.len)
          },
          put(e, t, r) {
              return g(e, r, t, this.len)
          }
      },
      t.Float16_BE = {
          len: 2,
          get(e, t) {
              return a.read(e, t, !1, 10, this.len)
          },
          put(e, t, r) {
              return a.write(e, r, t, !1, 10, this.len)
          }
      },
      t.Float16_LE = {
          len: 2,
          get(e, t) {
              return a.read(e, t, !0, 10, this.len)
          },
          put(e, t, r) {
              return a.write(e, r, t, !0, 10, this.len)
          }
      },
      t.Float32_BE = {
          len: 4,
          get(e, t) {
              return e.readFloatBE(t)
          },
          put(e, t, r) {
              return e.writeFloatBE(r, t)
          }
      },
      t.Float32_LE = {
          len: 4,
          get(e, t) {
              return e.readFloatLE(t)
          },
          put(e, t, r) {
              return e.writeFloatLE(r, t)
          }
      },
      t.Float64_BE = {
          len: 8,
          get(e, t) {
              return e.readDoubleBE(t)
          },
          put(e, t, r) {
              return e.writeDoubleBE(r, t)
          }
      },
      t.Float64_LE = {
          len: 8,
          get(e, t) {
              return e.readDoubleLE(t)
          },
          put(e, t, r) {
              return e.writeDoubleLE(r, t)
          }
      },
      t.Float80_BE = {
          len: 10,
          get(e, t) {
              return a.read(e, t, !1, 63, this.len)
          },
          put(e, t, r) {
              return a.write(e, r, t, !1, 63, this.len)
          }
      },
      t.Float80_LE = {
          len: 10,
          get(e, t) {
              return a.read(e, t, !0, 63, this.len)
          },
          put(e, t, r) {
              return a.write(e, r, t, !0, 63, this.len)
          }
      };
      class i {
          constructor(e) {
              this.len = e
          }
          get(e, t) {}
      }
      t.IgnoreType = i;
      class o {
          constructor(e) {
              this.len = e
          }
          get(e, t) {
              return e.slice(t, t + this.len)
          }
      }
      t.BufferType = o;
      class s {
          constructor(e, t) {
              this.len = e,
              this.encoding = t
          }
          get(e, t) {
              return e.toString(this.encoding, t, t + this.len)
          }
      }
      t.StringType = s;
      class c {
          constructor(e) {
              this.len = e
          }
          static decode(e, t, r) {
              let n = "";
              for (let a = t; a < r; ++a)
                  n += c.codePointToString(c.singleByteDecoder(e[a]));
              return n
          }
          static inRange(e, t, r) {
              return t <= e && e <= r
          }
          static codePointToString(e) {
              return e <= 65535 ? String.fromCharCode(e) : (e -= 65536,
              String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
          }
          static singleByteDecoder(e) {
              if (c.inRange(e, 0, 127))
                  return e;
              const t = c.windows1252[e - 128];
              if (null === t)
                  throw Error("invaliding encoding");
              return t
          }
          get(e, t=0) {
              return c.decode(e, t, t + this.len)
          }
      }
      function u(e, t, r) {
          t >>>= 0,
          r >>>= 0;
          let n = e[t]
            , a = 1
            , i = 0;
          while (++i < r && (a *= 256))
              n += e[t + i] * a;
          return n
      }
      function l(e, t, r, n) {
          t = +t,
          r >>>= 0,
          n >>>= 0;
          let a = 1
            , i = 0;
          e[r] = 255 & t;
          while (++i < n && (a *= 256))
              e[r + i] = t / a & 255;
          return r + n
      }
      function f(e, t, r) {
          t >>>= 0,
          r >>>= 0;
          let n = e[t]
            , a = 1
            , i = 0;
          while (++i < r && (a *= 256))
              n += e[t + i] * a;
          return a *= 128,
          n >= a && (n -= Math.pow(2, 8 * r)),
          n
      }
      function d(e, t, r, n) {
          t = +t,
          r >>>= 0;
          let a = 0
            , i = 1
            , o = 0;
          e[r] = 255 & t;
          while (++a < n && (i *= 256))
              t < 0 && 0 === o && 0 !== e[r + a - 1] && (o = 1),
              e[r + a] = (t / i >> 0) - o & 255;
          return r + n
      }
      function h(e, t, r) {
          t >>>= 0,
          r >>>= 0;
          let n = e[t + --r]
            , a = 1;
          while (r > 0 && (a *= 256))
              n += e[t + --r] * a;
          return n
      }
      function p(e, t, r, n) {
          t = +t,
          r >>>= 0,
          n >>>= 0;
          let a = n - 1
            , i = 1;
          e[r + a] = 255 & t;
          while (--a >= 0 && (i *= 256))
              e[r + a] = t / i & 255;
          return r + n
      }
      function m(e, t, r) {
          t >>>= 0,
          r >>>= 0;
          let n = r
            , a = 1
            , i = e[t + --n];
          while (n > 0 && (a *= 256))
              i += e[t + --n] * a;
          return a *= 128,
          i >= a && (i -= Math.pow(2, 8 * r)),
          i
      }
      function g(e, t, r, n) {
          t = +t,
          r >>>= 0;
          let a = n - 1
            , i = 1
            , o = 0;
          e[r + a] = 255 & t;
          while (--a >= 0 && (i *= 256))
              t < 0 && 0 === o && 0 !== e[r + a + 1] && (o = 1),
              e[r + a] = (t / i >> 0) - o & 255;
          return r + n
      }
      t.AnsiStringType = c,
      c.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255],
      t.writeIntLE = d,
      t.readUIntBE = h,
      t.writeUIntBE = p,
      t.readIntBE = m,
      t.writeIntBE = g
  },
  7156: function(e, t, r) {
      var n = r("861d")
        , a = r("d2bb");
      e.exports = function(e, t, r) {
          var i, o;
          return a && "function" == typeof (i = t.constructor) && i !== r && n(o = i.prototype) && o !== r.prototype && a(e, o),
          e
      }
  },
  7230: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("6f58")
            , a = r("0662");
          class i {
              constructor(e) {
                  this.len = e
              }
              static fromBase64(t) {
                  return this.fromBuffer(e.from(t, "base64"))
              }
              static fromBuffer(e) {
                  const t = new i(e.length);
                  return t.get(e, 0)
              }
              get(t, r) {
                  const i = a.AttachedPictureType[n.UINT32_BE.get(t, r)]
                    , o = n.UINT32_BE.get(t, r += 4)
                    , s = t.toString("utf-8", r += 4, r + o)
                    , c = n.UINT32_BE.get(t, r += o)
                    , u = t.toString("utf-8", r += 4, r + c)
                    , l = n.UINT32_BE.get(t, r += c)
                    , f = n.UINT32_BE.get(t, r += 4)
                    , d = n.UINT32_BE.get(t, r += 4)
                    , h = n.UINT32_BE.get(t, r += 4)
                    , p = n.UINT32_BE.get(t, r += 4)
                    , m = e.from(t.slice(r += 4, r + p));
                  return {
                      type: i,
                      format: s,
                      description: u,
                      width: l,
                      height: f,
                      colour_depth: d,
                      indexed_color: h,
                      data: m
                  }
              }
          }
          t.VorbisPictureToken = i,
          t.CommonHeader = {
              len: 7,
              get: (e,t)=>({
                  packetType: e.readUInt8(t),
                  vorbis: new n.StringType(6,"ascii").get(e, t + 1)
              })
          },
          t.IdentificationHeader = {
              len: 23,
              get: (e,t)=>({
                  version: e.readUInt32LE(t + 0),
                  channelMode: e.readUInt8(t + 4),
                  sampleRate: e.readUInt32LE(t + 5),
                  bitrateMax: e.readUInt32LE(t + 9),
                  bitrateNominal: e.readUInt32LE(t + 13),
                  bitrateMin: e.readUInt32LE(t + 17)
              })
          }
      }
      ).call(this, r("b639").Buffer)
  },
  "72f7": function(e, t, r) {
      "use strict";
      var n = r("ebb5").exportTypedArrayMethod
        , a = r("d039")
        , i = r("da84")
        , o = i.Uint8Array
        , s = o && o.prototype || {}
        , c = [].toString
        , u = [].join;
      a((function() {
          c.call({})
      }
      )) && (c = function() {
          return u.call(this)
      }
      );
      var l = s.toString != c;
      n("toString", c, l)
  },
  "72fe": function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function(t) {
              var r = e
                , n = r.lib
                , a = n.WordArray
                , i = n.Hasher
                , o = r.algo
                , s = [];
              (function() {
                  for (var e = 0; e < 64; e++)
                      s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
              }
              )();
              var c = o.MD5 = i.extend({
                  _doReset: function() {
                      this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
                  },
                  _doProcessBlock: function(e, t) {
                      for (var r = 0; r < 16; r++) {
                          var n = t + r
                            , a = e[n];
                          e[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                      }
                      var i = this._hash.words
                        , o = e[t + 0]
                        , c = e[t + 1]
                        , h = e[t + 2]
                        , p = e[t + 3]
                        , m = e[t + 4]
                        , g = e[t + 5]
                        , y = e[t + 6]
                        , b = e[t + 7]
                        , v = e[t + 8]
                        , w = e[t + 9]
                        , T = e[t + 10]
                        , k = e[t + 11]
                        , _ = e[t + 12]
                        , S = e[t + 13]
                        , E = e[t + 14]
                        , I = e[t + 15]
                        , A = i[0]
                        , x = i[1]
                        , B = i[2]
                        , C = i[3];
                      A = u(A, x, B, C, o, 7, s[0]),
                      C = u(C, A, x, B, c, 12, s[1]),
                      B = u(B, C, A, x, h, 17, s[2]),
                      x = u(x, B, C, A, p, 22, s[3]),
                      A = u(A, x, B, C, m, 7, s[4]),
                      C = u(C, A, x, B, g, 12, s[5]),
                      B = u(B, C, A, x, y, 17, s[6]),
                      x = u(x, B, C, A, b, 22, s[7]),
                      A = u(A, x, B, C, v, 7, s[8]),
                      C = u(C, A, x, B, w, 12, s[9]),
                      B = u(B, C, A, x, T, 17, s[10]),
                      x = u(x, B, C, A, k, 22, s[11]),
                      A = u(A, x, B, C, _, 7, s[12]),
                      C = u(C, A, x, B, S, 12, s[13]),
                      B = u(B, C, A, x, E, 17, s[14]),
                      x = u(x, B, C, A, I, 22, s[15]),
                      A = l(A, x, B, C, c, 5, s[16]),
                      C = l(C, A, x, B, y, 9, s[17]),
                      B = l(B, C, A, x, k, 14, s[18]),
                      x = l(x, B, C, A, o, 20, s[19]),
                      A = l(A, x, B, C, g, 5, s[20]),
                      C = l(C, A, x, B, T, 9, s[21]),
                      B = l(B, C, A, x, I, 14, s[22]),
                      x = l(x, B, C, A, m, 20, s[23]),
                      A = l(A, x, B, C, w, 5, s[24]),
                      C = l(C, A, x, B, E, 9, s[25]),
                      B = l(B, C, A, x, p, 14, s[26]),
                      x = l(x, B, C, A, v, 20, s[27]),
                      A = l(A, x, B, C, S, 5, s[28]),
                      C = l(C, A, x, B, h, 9, s[29]),
                      B = l(B, C, A, x, b, 14, s[30]),
                      x = l(x, B, C, A, _, 20, s[31]),
                      A = f(A, x, B, C, g, 4, s[32]),
                      C = f(C, A, x, B, v, 11, s[33]),
                      B = f(B, C, A, x, k, 16, s[34]),
                      x = f(x, B, C, A, E, 23, s[35]),
                      A = f(A, x, B, C, c, 4, s[36]),
                      C = f(C, A, x, B, m, 11, s[37]),
                      B = f(B, C, A, x, b, 16, s[38]),
                      x = f(x, B, C, A, T, 23, s[39]),
                      A = f(A, x, B, C, S, 4, s[40]),
                      C = f(C, A, x, B, o, 11, s[41]),
                      B = f(B, C, A, x, p, 16, s[42]),
                      x = f(x, B, C, A, y, 23, s[43]),
                      A = f(A, x, B, C, w, 4, s[44]),
                      C = f(C, A, x, B, _, 11, s[45]),
                      B = f(B, C, A, x, I, 16, s[46]),
                      x = f(x, B, C, A, h, 23, s[47]),
                      A = d(A, x, B, C, o, 6, s[48]),
                      C = d(C, A, x, B, b, 10, s[49]),
                      B = d(B, C, A, x, E, 15, s[50]),
                      x = d(x, B, C, A, g, 21, s[51]),
                      A = d(A, x, B, C, _, 6, s[52]),
                      C = d(C, A, x, B, p, 10, s[53]),
                      B = d(B, C, A, x, T, 15, s[54]),
                      x = d(x, B, C, A, c, 21, s[55]),
                      A = d(A, x, B, C, v, 6, s[56]),
                      C = d(C, A, x, B, I, 10, s[57]),
                      B = d(B, C, A, x, y, 15, s[58]),
                      x = d(x, B, C, A, S, 21, s[59]),
                      A = d(A, x, B, C, m, 6, s[60]),
                      C = d(C, A, x, B, k, 10, s[61]),
                      B = d(B, C, A, x, h, 15, s[62]),
                      x = d(x, B, C, A, w, 21, s[63]),
                      i[0] = i[0] + A | 0,
                      i[1] = i[1] + x | 0,
                      i[2] = i[2] + B | 0,
                      i[3] = i[3] + C | 0
                  },
                  _doFinalize: function() {
                      var e = this._data
                        , r = e.words
                        , n = 8 * this._nDataBytes
                        , a = 8 * e.sigBytes;
                      r[a >>> 5] |= 128 << 24 - a % 32;
                      var i = t.floor(n / 4294967296)
                        , o = n;
                      r[15 + (a + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                      r[14 + (a + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                      e.sigBytes = 4 * (r.length + 1),
                      this._process();
                      for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                          var l = c[u];
                          c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                      }
                      return s
                  },
                  clone: function() {
                      var e = i.clone.call(this);
                      return e._hash = this._hash.clone(),
                      e
                  }
              });
              function u(e, t, r, n, a, i, o) {
                  var s = e + (t & r | ~t & n) + a + o;
                  return (s << i | s >>> 32 - i) + t
              }
              function l(e, t, r, n, a, i, o) {
                  var s = e + (t & n | r & ~n) + a + o;
                  return (s << i | s >>> 32 - i) + t
              }
              function f(e, t, r, n, a, i, o) {
                  var s = e + (t ^ r ^ n) + a + o;
                  return (s << i | s >>> 32 - i) + t
              }
              function d(e, t, r, n, a, i, o) {
                  var s = e + (r ^ (t | ~n)) + a + o;
                  return (s << i | s >>> 32 - i) + t
              }
              r.MD5 = i._createHelper(c),
              r.HmacMD5 = i._createHmacHelper(c)
          }(Math),
          e.MD5
      }
      ))
  },
  "735e": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("81d5")
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("fill", (function(e) {
          return a.apply(i(this), arguments)
      }
      ))
  },
  "73c2": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("6f58")
            , a = r("34eb")
            , i = r("95c9")
            , o = r("31de")
            , s = r("b120")
            , c = a("music-metadata:parser:matroska");
          class u extends i.BasicParser {
              constructor() {
                  super(),
                  this.padding = 0,
                  this.parserMap = new Map,
                  this.parserMap.set(o.DataType.uint, e=>this.readUint(e)),
                  this.parserMap.set(o.DataType.string, e=>this.readString(e)),
                  this.parserMap.set(o.DataType.binary, e=>this.readBuffer(e)),
                  this.parserMap.set(o.DataType.uid, async e=>1 === await this.readUint(e)),
                  this.parserMap.set(o.DataType.bool, e=>this.readFlag(e)),
                  this.parserMap.set(o.DataType.float, e=>this.readFloat(e))
              }
              init(e, t, r) {
                  return super.init(e, t, r),
                  this
              }
              async parse() {
                  const e = await this.parseContainer(s.elements, this.tokenizer.fileInfo.size, []);
                  if (this.metadata.setFormat("container", `EBML/${e.ebml.docType}`),
                  e.segment) {
                      const t = e.segment.info;
                      if (t) {
                          const e = t.timecodeScale ? t.timecodeScale : 1e6
                            , r = t.duration * e / 1e9;
                          this.addTag("segment:title", t.title),
                          this.metadata.setFormat("duration", r)
                      }
                      const r = e.segment.tracks;
                      if (r && r.entries) {
                          r.entries.forEach(e=>{
                              const t = {
                                  codecName: e.codecID.replace("A_", "").replace("V_", ""),
                                  codecSettings: e.codecSettings,
                                  flagDefault: e.flagDefault,
                                  flagLacing: e.flagLacing,
                                  flagEnabled: e.flagEnabled,
                                  language: e.language,
                                  name: e.name,
                                  type: e.trackType,
                                  audio: e.audio,
                                  video: e.video
                              };
                              this.metadata.addStreamInfo(t)
                          }
                          );
                          const t = r.entries.filter(e=>e.trackType === o.TrackType.audio.valueOf()).reduce((e,t)=>e ? !e.flagDefault && t.flagDefault ? t : t.trackNumber && t.trackNumber < e.trackNumber ? t : e : t, null);
                          t && (this.metadata.setFormat("codec", t.codecID.replace("A_", "")),
                          this.metadata.setFormat("sampleRate", t.audio.samplingFrequency),
                          this.metadata.setFormat("numberOfChannels", t.audio.channels)),
                          e.segment.tags && e.segment.tags.tag.forEach(e=>{
                              const t = e.target
                                , r = t.targetTypeValue ? o.TargetType[t.targetTypeValue] : t.targetType ? t.targetType : o.TargetType.album;
                              e.simpleTags.forEach(e=>{
                                  const t = e.string ? e.string : e.binary;
                                  this.addTag(`${r}:${e.name}`, t)
                              }
                              )
                          }
                          ),
                          e.segment.attachments && e.segment.attachments.attachedFiles.filter(e=>e.mimeType.startsWith("image/")).map(e=>({
                              data: e.data,
                              format: e.mimeType,
                              description: e.description,
                              name: e.name
                          })).forEach(e=>{
                              this.addTag("picture", e)
                          }
                          )
                      }
                  }
              }
              async parseContainer(e, t, r) {
                  const n = {};
                  while (this.tokenizer.position < t) {
                      const t = await this.readElement()
                        , a = e[t.id];
                      if (a)
                          if (a.container) {
                              const e = await this.parseContainer(a.container, this.tokenizer.position + t.len, r.concat([a.name]));
                              a.multiple ? (n[a.name] || (n[a.name] = []),
                              n[a.name].push(e)) : n[a.name] = e
                          } else
                              n[a.name] = await this.parserMap.get(a.value)(t);
                      else
                          switch (t.id) {
                          case 236:
                              this.padding += t.len,
                              await this.tokenizer.ignore(t.len);
                              break;
                          default:
                              c(`parseEbml: path=${r.join("/")}, unknown element: id=${t.id.toString(16)}`),
                              this.padding += t.len,
                              await this.tokenizer.ignore(t.len)
                          }
                  }
                  return n
              }
              async readVintData() {
                  const t = await this.tokenizer.peekNumber(n.UINT8);
                  let r = 128
                    , a = 1;
                  while (0 === (t & r))
                      ++a,
                      r >>= 1;
                  const i = e.alloc(a);
                  return await this.tokenizer.readBuffer(i),
                  i
              }
              async readElement() {
                  const e = await this.readVintData()
                    , t = await this.readVintData();
                  t[0] ^= 128 >> t.length - 1;
                  const r = Math.min(6, t.length);
                  return {
                      id: e.readUIntBE(0, e.length),
                      len: t.readUIntBE(t.length - r, r)
                  }
              }
              async readFloat(e) {
                  switch (e.len) {
                  case 0:
                      return 0;
                  case 4:
                      return this.tokenizer.readNumber(n.Float32_BE);
                  case 8:
                      return this.tokenizer.readNumber(n.Float64_BE);
                  case 10:
                      return this.tokenizer.readNumber(n.Float64_BE);
                  default:
                      throw new Error(`Invalid IEEE-754 float length: ${e.len}`)
                  }
              }
              async readFlag(e) {
                  return 1 === await this.readUint(e)
              }
              async readUint(e) {
                  const t = await this.readBuffer(e)
                    , r = Math.min(6, e.len);
                  return t.readUIntBE(e.len - r, r)
              }
              async readString(e) {
                  return this.tokenizer.readToken(new n.StringType(e.len,"utf-8"))
              }
              async readBuffer(t) {
                  const r = e.alloc(t.len);
                  return await this.tokenizer.readBuffer(r),
                  r
              }
              addTag(e, t) {
                  this.metadata.addTag("matroska", e, t)
              }
          }
          t.MatroskaParser = u
      }
      ).call(this, r("b639").Buffer)
  },
  7418: function(e, t) {
      t.f = Object.getOwnPropertySymbols
  },
  "74e8": function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("da84")
        , i = r("83ab")
        , o = r("8aa7")
        , s = r("ebb5")
        , c = r("621a")
        , u = r("19aa")
        , l = r("5c6c")
        , f = r("9112")
        , d = r("50c4")
        , h = r("0b25")
        , p = r("182d")
        , m = r("c04e")
        , g = r("5135")
        , y = r("f5df")
        , b = r("861d")
        , v = r("7c73")
        , w = r("d2bb")
        , T = r("241c").f
        , k = r("a078")
        , _ = r("b727").forEach
        , S = r("2626")
        , E = r("9bf2")
        , I = r("06cf")
        , A = r("69f3")
        , x = r("7156")
        , B = A.get
        , C = A.set
        , P = E.f
        , O = I.f
        , M = Math.round
        , D = a.RangeError
        , R = c.ArrayBuffer
        , F = c.DataView
        , L = s.NATIVE_ARRAY_BUFFER_VIEWS
        , z = s.TYPED_ARRAY_TAG
        , U = s.TypedArray
        , N = s.TypedArrayPrototype
        , j = s.aTypedArrayConstructor
        , H = s.isTypedArray
        , W = "BYTES_PER_ELEMENT"
        , q = "Wrong length"
        , X = function(e, t) {
          var r = 0
            , n = t.length
            , a = new (j(e))(n);
          while (n > r)
              a[r] = t[r++];
          return a
      }
        , $ = function(e, t) {
          P(e, t, {
              get: function() {
                  return B(this)[t]
              }
          })
      }
        , G = function(e) {
          var t;
          return e instanceof R || "ArrayBuffer" == (t = y(e)) || "SharedArrayBuffer" == t
      }
        , V = function(e, t) {
          return H(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
      }
        , Y = function(e, t) {
          return V(e, t = m(t, !0)) ? l(2, e[t]) : O(e, t)
      }
        , K = function(e, t, r) {
          return !(V(e, t = m(t, !0)) && b(r) && g(r, "value")) || g(r, "get") || g(r, "set") || r.configurable || g(r, "writable") && !r.writable || g(r, "enumerable") && !r.enumerable ? P(e, t, r) : (e[t] = r.value,
          e)
      };
      i ? (L || (I.f = Y,
      E.f = K,
      $(N, "buffer"),
      $(N, "byteOffset"),
      $(N, "byteLength"),
      $(N, "length")),
      n({
          target: "Object",
          stat: !0,
          forced: !L
      }, {
          getOwnPropertyDescriptor: Y,
          defineProperty: K
      }),
      e.exports = function(e, t, r) {
          var i = e.match(/\d+$/)[0] / 8
            , s = e + (r ? "Clamped" : "") + "Array"
            , c = "get" + e
            , l = "set" + e
            , m = a[s]
            , g = m
            , y = g && g.prototype
            , E = {}
            , I = function(e, t) {
              var r = B(e);
              return r.view[c](t * i + r.byteOffset, !0)
          }
            , A = function(e, t, n) {
              var a = B(e);
              r && (n = (n = M(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
              a.view[l](t * i + a.byteOffset, n, !0)
          }
            , O = function(e, t) {
              P(e, t, {
                  get: function() {
                      return I(this, t)
                  },
                  set: function(e) {
                      return A(this, t, e)
                  },
                  enumerable: !0
              })
          };
          L ? o && (g = t((function(e, t, r, n) {
              return u(e, g, s),
              x(function() {
                  return b(t) ? G(t) ? void 0 !== n ? new m(t,p(r, i),n) : void 0 !== r ? new m(t,p(r, i)) : new m(t) : H(t) ? X(g, t) : k.call(g, t) : new m(h(t))
              }(), e, g)
          }
          )),
          w && w(g, U),
          _(T(m), (function(e) {
              e in g || f(g, e, m[e])
          }
          )),
          g.prototype = y) : (g = t((function(e, t, r, n) {
              u(e, g, s);
              var a, o, c, l = 0, f = 0;
              if (b(t)) {
                  if (!G(t))
                      return H(t) ? X(g, t) : k.call(g, t);
                  a = t,
                  f = p(r, i);
                  var m = t.byteLength;
                  if (void 0 === n) {
                      if (m % i)
                          throw D(q);
                      if (o = m - f,
                      o < 0)
                          throw D(q)
                  } else if (o = d(n) * i,
                  o + f > m)
                      throw D(q);
                  c = o / i
              } else
                  c = h(t),
                  o = c * i,
                  a = new R(o);
              C(e, {
                  buffer: a,
                  byteOffset: f,
                  byteLength: o,
                  length: c,
                  view: new F(a)
              });
              while (l < c)
                  O(e, l++)
          }
          )),
          w && w(g, U),
          y = g.prototype = v(N)),
          y.constructor !== g && f(y, "constructor", g),
          z && f(y, z, s),
          E[s] = g,
          n({
              global: !0,
              forced: g != m,
              sham: !L
          }, E),
          W in g || f(g, W, i),
          W in y || f(y, W, i),
          S(s)
      }
      ) : e.exports = function() {}
  },
  "77a7": function(e, t) {
      var r = 1 / 0
        , n = Math.abs
        , a = Math.pow
        , i = Math.floor
        , o = Math.log
        , s = Math.LN2
        , c = function(e, t, c) {
          var u, l, f, d = new Array(c), h = 8 * c - t - 1, p = (1 << h) - 1, m = p >> 1, g = 23 === t ? a(2, -24) - a(2, -77) : 0, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, b = 0;
          for (e = n(e),
          e != e || e === r ? (l = e != e ? 1 : 0,
          u = p) : (u = i(o(e) / s),
          e * (f = a(2, -u)) < 1 && (u--,
          f *= 2),
          e += u + m >= 1 ? g / f : g * a(2, 1 - m),
          e * f >= 2 && (u++,
          f /= 2),
          u + m >= p ? (l = 0,
          u = p) : u + m >= 1 ? (l = (e * f - 1) * a(2, t),
          u += m) : (l = e * a(2, m - 1) * a(2, t),
          u = 0)); t >= 8; d[b++] = 255 & l,
          l /= 256,
          t -= 8)
              ;
          for (u = u << t | l,
          h += t; h > 0; d[b++] = 255 & u,
          u /= 256,
          h -= 8)
              ;
          return d[--b] |= 128 * y,
          d
      }
        , u = function(e, t) {
          var n, i = e.length, o = 8 * i - t - 1, s = (1 << o) - 1, c = s >> 1, u = o - 7, l = i - 1, f = e[l--], d = 127 & f;
          for (f >>= 7; u > 0; d = 256 * d + e[l],
          l--,
          u -= 8)
              ;
          for (n = d & (1 << -u) - 1,
          d >>= -u,
          u += t; u > 0; n = 256 * n + e[l],
          l--,
          u -= 8)
              ;
          if (0 === d)
              d = 1 - c;
          else {
              if (d === s)
                  return n ? NaN : f ? -r : r;
              n += a(2, t),
              d -= c
          }
          return (f ? -1 : 1) * n * a(2, d - t)
      };
      e.exports = {
          pack: c,
          unpack: u
      }
  },
  "780f": function(e, t, r) {
      "use strict";
      e.exports = i;
      var n = r("27bf")
        , a = Object.create(r("3a7c"));
      function i(e) {
          if (!(this instanceof i))
              return new i(e);
          n.call(this, e)
      }
      a.inherits = r("3fb5"),
      a.inherits(i, n),
      i.prototype._transform = function(e, t, r) {
          r(null, e)
      }
  },
  7839: function(e, t) {
      e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  },
  7907: function(e, t, r) {
      !function(t, r) {
          e.exports = r()
      }(0, (function() {
          "use strict";
          function e(e) {
              return String(e).split("").map((function(e) {
                  return e.charCodeAt(0)
              }
              ))
          }
          function t(t) {
              return new Uint8Array(e(t))
          }
          function r(t) {
              var r = new Uint8Array(2 * t.length);
              return new Uint16Array(r.buffer).set(e(t)),
              r
          }
          return function() {
              var e = n.prototype;
              function n(e) {
                  if (!(e && "object" == typeof e && "byteLength"in e))
                      throw new Error("First argument should be an instance of ArrayBuffer or Buffer");
                  this.arrayBuffer = e,
                  this.padding = 4096,
                  this.frames = [],
                  this.url = ""
              }
              return e._setIntegerFrame = function(e, t) {
                  var r = parseInt(t, 10);
                  this.frames.push({
                      name: e,
                      value: r,
                      size: function(e) {
                          return 11 + e
                      }(r.toString().length)
                  })
              }
              ,
              e._setStringFrame = function(e, t) {
                  var r = t.toString();
                  this.frames.push({
                      name: e,
                      value: r,
                      size: function(e) {
                          return 13 + 2 * e
                      }(r.length)
                  })
              }
              ,
              e._setPictureFrame = function(e, t, r, n) {
                  var a = function(e) {
                      if (!e || !e.length)
                          return null;
                      if (255 === e[0] && 216 === e[1] && 255 === e[2])
                          return "image/jpeg";
                      if (137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3])
                          return "image/png";
                      if (71 === e[0] && 73 === e[1] && 70 === e[2])
                          return "image/gif";
                      if (87 === e[8] && 69 === e[9] && 66 === e[10] && 80 === e[11])
                          return "image/webp";
                      var t = 73 === e[0] && 73 === e[1] && 42 === e[2] && 0 === e[3]
                        , r = 77 === e[0] && 77 === e[1] && 0 === e[2] && 42 === e[3];
                      return t || r ? "image/tiff" : 66 === e[0] && 77 === e[1] ? "image/bmp" : 0 === e[0] && 0 === e[1] && 1 === e[2] && 0 === e[3] ? "image/x-icon" : null
                  }(new Uint8Array(t))
                    , i = r.toString();
                  if (!a)
                      throw new Error("Unknown picture MIME type");
                  r || (n = !1),
                  this.frames.push({
                      name: "APIC",
                      value: t,
                      pictureType: e,
                      mimeType: a,
                      useUnicodeEncoding: n,
                      description: i,
                      size: function(e, t, r, n) {
                          return 11 + t + 1 + 1 + (n ? 2 + 2 * (r + 1) : r + 1) + e
                      }(t.byteLength, a.length, i.length, n)
                  })
              }
              ,
              e._setLyricsFrame = function(e, t) {
                  var r = e.toString()
                    , n = t.toString();
                  this.frames.push({
                      name: "USLT",
                      value: n,
                      description: r,
                      size: function(e, t) {
                          return 16 + 2 * e + 2 + 2 + 2 * t
                      }(r.length, n.length)
                  })
              }
              ,
              e._setCommentFrame = function(e, t) {
                  var r = e.toString()
                    , n = t.toString();
                  this.frames.push({
                      name: "COMM",
                      value: n,
                      description: r,
                      size: function(e, t) {
                          return 16 + 2 * e + 2 + 2 + 2 * t
                      }(r.length, n.length)
                  })
              }
              ,
              e._setPrivateFrame = function(e, t) {
                  var r = e.toString();
                  this.frames.push({
                      name: "PRIV",
                      value: t,
                      id: r,
                      size: function(e, t) {
                          return 10 + e + 1 + t
                      }(r.length, t.byteLength)
                  })
              }
              ,
              e._setUserStringFrame = function(e, t) {
                  var r = e.toString()
                    , n = t.toString();
                  this.frames.push({
                      name: "TXXX",
                      description: r,
                      value: n,
                      size: function(e, t) {
                          return 13 + 2 * e + 2 + 2 + 2 * t
                      }(r.length, n.length)
                  })
              }
              ,
              e._setUrlLinkFrame = function(e, t) {
                  var r = t.toString();
                  this.frames.push({
                      name: e,
                      value: r,
                      size: function(e) {
                          return 10 + e
                      }(r.length)
                  })
              }
              ,
              e.setFrame = function(e, t) {
                  switch (e) {
                  case "TPE1":
                  case "TCOM":
                  case "TCON":
                      if (!Array.isArray(t))
                          throw new Error(e + " frame value should be an array of strings");
                      var r = "TCON" === e ? ";" : "/"
                        , n = t.join(r);
                      this._setStringFrame(e, n);
                      break;
                  case "TLAN":
                  case "TIT1":
                  case "TIT2":
                  case "TIT3":
                  case "TALB":
                  case "TPE2":
                  case "TPE3":
                  case "TPE4":
                  case "TRCK":
                  case "TPOS":
                  case "TMED":
                  case "TPUB":
                  case "TCOP":
                  case "TKEY":
                  case "TEXT":
                  case "TSRC":
                      this._setStringFrame(e, t);
                      break;
                  case "TBPM":
                  case "TLEN":
                  case "TDAT":
                  case "TYER":
                      this._setIntegerFrame(e, t);
                      break;
                  case "USLT":
                      if (!("object" == typeof t && "description"in t && "lyrics"in t))
                          throw new Error("USLT frame value should be an object with keys description and lyrics");
                      this._setLyricsFrame(t.description, t.lyrics);
                      break;
                  case "APIC":
                      if (!("object" == typeof t && "type"in t && "data"in t && "description"in t))
                          throw new Error("APIC frame value should be an object with keys type, data and description");
                      if (t.type < 0 || 20 < t.type)
                          throw new Error("Incorrect APIC frame picture type");
                      this._setPictureFrame(t.type, t.data, t.description, !!t.useUnicodeEncoding);
                      break;
                  case "TXXX":
                      if (!("object" == typeof t && "description"in t && "value"in t))
                          throw new Error("TXXX frame value should be an object with keys description and value");
                      this._setUserStringFrame(t.description, t.value);
                      break;
                  case "WCOM":
                  case "WCOP":
                  case "WOAF":
                  case "WOAR":
                  case "WOAS":
                  case "WORS":
                  case "WPAY":
                  case "WPUB":
                      this._setUrlLinkFrame(e, t);
                      break;
                  case "COMM":
                      if (!("object" == typeof t && "description"in t && "text"in t))
                          throw new Error("COMM frame value should be an object with keys description and text");
                      this._setCommentFrame(t.description, t.text);
                      break;
                  case "PRIV":
                      if (!("object" == typeof t && "id"in t && "data"in t))
                          throw new Error("PRIV frame value should be an object with keys id and data");
                      this._setPrivateFrame(t.id, t.data);
                      break;
                  default:
                      throw new Error("Unsupported frame " + e)
                  }
                  return this
              }
              ,
              e.removeTag = function() {
                  if (!(this.arrayBuffer.byteLength < 10)) {
                      var e = new Uint8Array(this.arrayBuffer)
                        , t = e[3]
                        , r = function(e) {
                          return (e[0] << 21) + (e[1] << 14) + (e[2] << 7) + e[3]
                      }([e[6], e[7], e[8], e[9]]) + 10;
                      !function(e) {
                          return 73 === e[0] && 68 === e[1] && 51 === e[2]
                      }(e) || t < 2 || 4 < t || (this.arrayBuffer = new Uint8Array(e.subarray(r)).buffer)
                  }
              }
              ,
              e.addTag = function() {
                  this.removeTag();
                  var e = [255, 254]
                    , n = [101, 110, 103]
                    , a = 10 + this.frames.reduce((function(e, t) {
                      return e + t.size
                  }
                  ), 0) + this.padding
                    , i = new ArrayBuffer(this.arrayBuffer.byteLength + a)
                    , o = new Uint8Array(i)
                    , s = 0
                    , c = [];
                  return c = [73, 68, 51, 3],
                  o.set(c, s),
                  s += c.length,
                  s++,
                  s++,
                  c = function(e) {
                      var t = 127;
                      return [e >>> 21 & t, e >>> 14 & t, e >>> 7 & t, e & t]
                  }(a - 10),
                  o.set(c, s),
                  s += c.length,
                  this.frames.forEach((function(a) {
                      switch (c = t(a.name),
                      o.set(c, s),
                      s += c.length,
                      c = function(e) {
                          var t = 255;
                          return [e >>> 24 & t, e >>> 16 & t, e >>> 8 & t, e & t]
                      }(a.size - 10),
                      o.set(c, s),
                      s += c.length,
                      s += 2,
                      a.name) {
                      case "WCOM":
                      case "WCOP":
                      case "WOAF":
                      case "WOAR":
                      case "WOAS":
                      case "WORS":
                      case "WPAY":
                      case "WPUB":
                          c = t(a.value),
                          o.set(c, s),
                          s += c.length;
                          break;
                      case "TPE1":
                      case "TCOM":
                      case "TCON":
                      case "TLAN":
                      case "TIT1":
                      case "TIT2":
                      case "TIT3":
                      case "TALB":
                      case "TPE2":
                      case "TPE3":
                      case "TPE4":
                      case "TRCK":
                      case "TPOS":
                      case "TKEY":
                      case "TMED":
                      case "TPUB":
                      case "TCOP":
                      case "TEXT":
                      case "TSRC":
                          c = [1].concat(e),
                          o.set(c, s),
                          s += c.length,
                          c = r(a.value),
                          o.set(c, s),
                          s += c.length;
                          break;
                      case "TXXX":
                      case "USLT":
                      case "COMM":
                          c = [1],
                          "USLT" !== a.name && "COMM" !== a.name || (c = c.concat(n)),
                          c = c.concat(e),
                          o.set(c, s),
                          s += c.length,
                          c = r(a.description),
                          o.set(c, s),
                          s += c.length,
                          c = [0, 0].concat(e),
                          o.set(c, s),
                          s += c.length,
                          c = r(a.value),
                          o.set(c, s),
                          s += c.length;
                          break;
                      case "TBPM":
                      case "TLEN":
                      case "TDAT":
                      case "TYER":
                          s++,
                          c = t(a.value),
                          o.set(c, s),
                          s += c.length;
                          break;
                      case "PRIV":
                          c = t(a.id),
                          o.set(c, s),
                          s += c.length,
                          s++,
                          o.set(new Uint8Array(a.value), s),
                          s += a.value.byteLength;
                          break;
                      case "APIC":
                          c = [a.useUnicodeEncoding ? 1 : 0],
                          o.set(c, s),
                          s += c.length,
                          c = t(a.mimeType),
                          o.set(c, s),
                          s += c.length,
                          c = [0, a.pictureType],
                          o.set(c, s),
                          s += c.length,
                          a.useUnicodeEncoding ? (c = [].concat(e),
                          o.set(c, s),
                          s += c.length,
                          c = r(a.description),
                          o.set(c, s),
                          s += c.length,
                          s += 2) : (c = t(a.description),
                          o.set(c, s),
                          s += c.length,
                          s++),
                          o.set(new Uint8Array(a.value), s),
                          s += a.value.byteLength
                      }
                  }
                  )),
                  s += this.padding,
                  o.set(new Uint8Array(this.arrayBuffer), s),
                  this.arrayBuffer = i
              }
              ,
              e.getBlob = function() {
                  return new Blob([this.arrayBuffer],{
                      type: "audio/mpeg"
                  })
              }
              ,
              e.getURL = function() {
                  return this.url || (this.url = URL.createObjectURL(this.getBlob())),
                  this.url
              }
              ,
              e.revokeURL = function() {
                  URL.revokeObjectURL(this.url)
              }
              ,
              n
          }()
      }
      ))
  },
  "7b0b": function(e, t, r) {
      var n = r("1d80");
      e.exports = function(e) {
          return Object(n(e))
      }
  },
  "7bbc": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("df2f"), r("5980"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.Base
                , a = r.WordArray
                , i = t.algo
                , o = i.SHA1
                , s = i.HMAC
                , c = i.PBKDF2 = n.extend({
                  cfg: n.extend({
                      keySize: 4,
                      hasher: o,
                      iterations: 1
                  }),
                  init: function(e) {
                      this.cfg = this.cfg.extend(e)
                  },
                  compute: function(e, t) {
                      var r = this.cfg
                        , n = s.create(r.hasher, e)
                        , i = a.create()
                        , o = a.create([1])
                        , c = i.words
                        , u = o.words
                        , l = r.keySize
                        , f = r.iterations;
                      while (c.length < l) {
                          var d = n.update(t).finalize(o);
                          n.reset();
                          for (var h = d.words, p = h.length, m = d, g = 1; g < f; g++) {
                              m = n.finalize(m),
                              n.reset();
                              for (var y = m.words, b = 0; b < p; b++)
                                  h[b] ^= y[b]
                          }
                          i.concat(d),
                          u[0]++
                      }
                      return i.sigBytes = 4 * l,
                      i
                  }
              });
              t.PBKDF2 = function(e, t, r) {
                  return c.create(r).compute(e, t)
              }
          }(),
          e.PBKDF2
      }
      ))
  },
  "7c73": function(e, t, r) {
      var n, a = r("825a"), i = r("37e8"), o = r("7839"), s = r("d012"), c = r("1be4"), u = r("cc12"), l = r("f772"), f = ">", d = "<", h = "prototype", p = "script", m = l("IE_PROTO"), g = function() {}, y = function(e) {
          return d + p + f + e + d + "/" + p + f
      }, b = function(e) {
          e.write(y("")),
          e.close();
          var t = e.parentWindow.Object;
          return e = null,
          t
      }, v = function() {
          var e, t = u("iframe"), r = "java" + p + ":";
          return t.style.display = "none",
          c.appendChild(t),
          t.src = String(r),
          e = t.contentWindow.document,
          e.open(),
          e.write(y("document.F=Object")),
          e.close(),
          e.F
      }, w = function() {
          try {
              n = document.domain && new ActiveXObject("htmlfile")
          } catch (t) {}
          w = n ? b(n) : v();
          var e = o.length;
          while (e--)
              delete w[h][o[e]];
          return w()
      };
      s[m] = !0,
      e.exports = Object.create || function(e, t) {
          var r;
          return null !== e ? (g[h] = a(e),
          r = new g,
          g[h] = null,
          r[m] = e) : r = w(),
          void 0 === t ? r : i(r, t)
      }
  },
  "7d72": function(e, t, r) {
      "use strict";
      var n = r("8707").Buffer
        , a = n.isEncoding || function(e) {
          switch (e = "" + e,
          e && e.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
              return !0;
          default:
              return !1
          }
      }
      ;
      function i(e) {
          if (!e)
              return "utf8";
          var t;
          while (1)
              switch (e) {
              case "utf8":
              case "utf-8":
                  return "utf8";
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                  return "utf16le";
              case "latin1":
              case "binary":
                  return "latin1";
              case "base64":
              case "ascii":
              case "hex":
                  return e;
              default:
                  if (t)
                      return;
                  e = ("" + e).toLowerCase(),
                  t = !0
              }
      }
      function o(e) {
          var t = i(e);
          if ("string" !== typeof t && (n.isEncoding === a || !a(e)))
              throw new Error("Unknown encoding: " + e);
          return t || e
      }
      function s(e) {
          var t;
          switch (this.encoding = o(e),
          this.encoding) {
          case "utf16le":
              this.text = p,
              this.end = m,
              t = 4;
              break;
          case "utf8":
              this.fillLast = f,
              t = 4;
              break;
          case "base64":
              this.text = g,
              this.end = y,
              t = 3;
              break;
          default:
              return this.write = b,
              void (this.end = v)
          }
          this.lastNeed = 0,
          this.lastTotal = 0,
          this.lastChar = n.allocUnsafe(t)
      }
      function c(e) {
          return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
      }
      function u(e, t, r) {
          var n = t.length - 1;
          if (n < r)
              return 0;
          var a = c(t[n]);
          return a >= 0 ? (a > 0 && (e.lastNeed = a - 1),
          a) : --n < r || -2 === a ? 0 : (a = c(t[n]),
          a >= 0 ? (a > 0 && (e.lastNeed = a - 2),
          a) : --n < r || -2 === a ? 0 : (a = c(t[n]),
          a >= 0 ? (a > 0 && (2 === a ? a = 0 : e.lastNeed = a - 3),
          a) : 0))
      }
      function l(e, t, r) {
          if (128 !== (192 & t[0]))
              return e.lastNeed = 0,
              "�";
          if (e.lastNeed > 1 && t.length > 1) {
              if (128 !== (192 & t[1]))
                  return e.lastNeed = 1,
                  "�";
              if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                  return e.lastNeed = 2,
                  "�"
          }
      }
      function f(e) {
          var t = this.lastTotal - this.lastNeed
            , r = l(this, e, t);
          return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length))
      }
      function d(e, t) {
          var r = u(this, e, t);
          if (!this.lastNeed)
              return e.toString("utf8", t);
          this.lastTotal = r;
          var n = e.length - (r - this.lastNeed);
          return e.copy(this.lastChar, 0, n),
          e.toString("utf8", t, n)
      }
      function h(e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed ? t + "�" : t
      }
      function p(e, t) {
          if ((e.length - t) % 2 === 0) {
              var r = e.toString("utf16le", t);
              if (r) {
                  var n = r.charCodeAt(r.length - 1);
                  if (n >= 55296 && n <= 56319)
                      return this.lastNeed = 2,
                      this.lastTotal = 4,
                      this.lastChar[0] = e[e.length - 2],
                      this.lastChar[1] = e[e.length - 1],
                      r.slice(0, -1)
              }
              return r
          }
          return this.lastNeed = 1,
          this.lastTotal = 2,
          this.lastChar[0] = e[e.length - 1],
          e.toString("utf16le", t, e.length - 1)
      }
      function m(e) {
          var t = e && e.length ? this.write(e) : "";
          if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return t + this.lastChar.toString("utf16le", 0, r)
          }
          return t
      }
      function g(e, t) {
          var r = (e.length - t) % 3;
          return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
          this.lastTotal = 3,
          1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
          this.lastChar[1] = e[e.length - 1]),
          e.toString("base64", t, e.length - r))
      }
      function y(e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
      }
      function b(e) {
          return e.toString(this.encoding)
      }
      function v(e) {
          return e && e.length ? this.write(e) : ""
      }
      t.StringDecoder = s,
      s.prototype.write = function(e) {
          if (0 === e.length)
              return "";
          var t, r;
          if (this.lastNeed) {
              if (t = this.fillLast(e),
              void 0 === t)
                  return "";
              r = this.lastNeed,
              this.lastNeed = 0
          } else
              r = 0;
          return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
      }
      ,
      s.prototype.end = h,
      s.prototype.text = d,
      s.prototype.fillLast = function(e) {
          if (this.lastNeed <= e.length)
              return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal);
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          this.lastNeed -= e.length
      }
  },
  "7dd0": function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("9ed3")
        , i = r("e163")
        , o = r("d2bb")
        , s = r("d44e")
        , c = r("9112")
        , u = r("6eeb")
        , l = r("b622")
        , f = r("c430")
        , d = r("3f8c")
        , h = r("ae93")
        , p = h.IteratorPrototype
        , m = h.BUGGY_SAFARI_ITERATORS
        , g = l("iterator")
        , y = "keys"
        , b = "values"
        , v = "entries"
        , w = function() {
          return this
      };
      e.exports = function(e, t, r, l, h, T, k) {
          a(r, t, l);
          var _, S, E, I = function(e) {
              if (e === h && P)
                  return P;
              if (!m && e in B)
                  return B[e];
              switch (e) {
              case y:
                  return function() {
                      return new r(this,e)
                  }
                  ;
              case b:
                  return function() {
                      return new r(this,e)
                  }
                  ;
              case v:
                  return function() {
                      return new r(this,e)
                  }
              }
              return function() {
                  return new r(this)
              }
          }, A = t + " Iterator", x = !1, B = e.prototype, C = B[g] || B["@@iterator"] || h && B[h], P = !m && C || I(h), O = "Array" == t && B.entries || C;
          if (O && (_ = i(O.call(new e)),
          p !== Object.prototype && _.next && (f || i(_) === p || (o ? o(_, p) : "function" != typeof _[g] && c(_, g, w)),
          s(_, A, !0, !0),
          f && (d[A] = w))),
          h == b && C && C.name !== b && (x = !0,
          P = function() {
              return C.call(this)
          }
          ),
          f && !k || B[g] === P || c(B, g, P),
          d[t] = P,
          h)
              if (S = {
                  values: I(b),
                  keys: T ? P : I(y),
                  entries: I(v)
              },
              k)
                  for (E in S)
                      !m && !x && E in B || u(B, E, S[E]);
              else
                  n({
                      target: t,
                      proto: !0,
                      forced: m || x
                  }, S);
          return S
      }
  },
  "7e1e": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("53d6")
        , a = {
          "segment:title": "title",
          "album:ARITST": "albumartist",
          "album:ARITSTSORT": "albumartistsort",
          "album:TITLE": "album",
          "album:DATE_RECORDED": "originaldate",
          "track:ARTIST": "artist",
          "track:ARTISTSORT": "artistsort",
          "track:TITLE": "title",
          "track:PART_NUMBER": "track",
          "track:MUSICBRAINZ_TRACKID": "musicbrainz_recordingid",
          "track:MUSICBRAINZ_ALBUMID": "musicbrainz_albumid",
          "track:MUSICBRAINZ_ARTISTID": "musicbrainz_artistid",
          "track:PUBLISHER": "label",
          picture: "picture"
      };
      class i extends n.CaseInsensitiveTagMap {
          constructor() {
              super(["matroska"], a)
          }
      }
      t.MatroskaTagMapper = i
  },
  "7eca": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("d3ab");
      t.Header = {
          len: 24,
          get: (e,t)=>{
              const r = {
                  signature: e.toString("binary", t, t + 3),
                  streamMinorVersion: a.default.getBitAllignedNumber(e, t + 3, 0, 4),
                  streamMajorVersion: a.default.getBitAllignedNumber(e, t + 3, 4, 4),
                  frameCount: n.UINT32_LE.get(e, t + 4),
                  maxLevel: n.UINT16_LE.get(e, t + 8),
                  sampleFrequency: [44100, 48e3, 37800, 32e3][a.default.getBitAllignedNumber(e, t + 10, 0, 2)],
                  link: a.default.getBitAllignedNumber(e, t + 10, 2, 2),
                  profile: a.default.getBitAllignedNumber(e, t + 10, 4, 4),
                  maxBand: a.default.getBitAllignedNumber(e, t + 11, 0, 6),
                  intensityStereo: a.default.isBitSet(e, t + 11, 6),
                  midSideStereo: a.default.isBitSet(e, t + 11, 7),
                  titlePeak: n.UINT16_LE.get(e, t + 12),
                  titleGain: n.UINT16_LE.get(e, t + 14),
                  albumPeak: n.UINT16_LE.get(e, t + 16),
                  albumGain: n.UINT16_LE.get(e, t + 18),
                  lastFrameLength: n.UINT32_LE.get(e, t + 20) >>> 20 & 2047,
                  trueGapless: a.default.isBitSet(e, t + 23, 0)
              };
              return r.lastFrameLength = r.trueGapless ? n.UINT32_LE.get(e, 20) >>> 20 & 2047 : 0,
              r
          }
      }
  },
  "7f9a": function(e, t, r) {
      var n = r("da84")
        , a = r("8925")
        , i = n.WeakMap;
      e.exports = "function" === typeof i && /native code/.test(a(i))
  },
  "81bf": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.mode.ECB = function() {
              var t = e.lib.BlockCipherMode.extend();
              return t.Encryptor = t.extend({
                  processBlock: function(e, t) {
                      this._cipher.encryptBlock(e, t)
                  }
              }),
              t.Decryptor = t.extend({
                  processBlock: function(e, t) {
                      this._cipher.decryptBlock(e, t)
                  }
              }),
              t
          }(),
          e.mode.ECB
      }
      ))
  },
  "81d5": function(e, t, r) {
      "use strict";
      var n = r("7b0b")
        , a = r("23cb")
        , i = r("50c4");
      e.exports = function(e) {
          var t = n(this)
            , r = i(t.length)
            , o = arguments.length
            , s = a(o > 1 ? arguments[1] : void 0, r)
            , c = o > 2 ? arguments[2] : void 0
            , u = void 0 === c ? r : a(c, r);
          while (u > s)
              t[s++] = e;
          return t
      }
  },
  "825a": function(e, t, r) {
      var n = r("861d");
      e.exports = function(e) {
          if (!n(e))
              throw TypeError(String(e) + " is not an object");
          return e
      }
  },
  "82f8": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("4d64").includes
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("includes", (function(e) {
          return a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  "83ab": function(e, t, r) {
      var n = r("d039");
      e.exports = !n((function() {
          return 7 != Object.defineProperty({}, 1, {
              get: function() {
                  return 7
              }
          })[1]
      }
      ))
  },
  8418: function(e, t, r) {
      "use strict";
      var n = r("c04e")
        , a = r("9bf2")
        , i = r("5c6c");
      e.exports = function(e, t, r) {
          var o = n(t);
          o in e ? a.f(e, o, i(0, r)) : e[o] = r
      }
  },
  "861d": function(e, t) {
      e.exports = function(e) {
          return "object" === typeof e ? null !== e : "function" === typeof e
      }
  },
  8707: function(e, t, r) {
      var n = r("b639")
        , a = n.Buffer;
      function i(e, t) {
          for (var r in e)
              t[r] = e[r]
      }
      function o(e, t, r) {
          return a(e, t, r)
      }
      a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = n : (i(n, t),
      t.Buffer = o),
      i(a, o),
      o.from = function(e, t, r) {
          if ("number" === typeof e)
              throw new TypeError("Argument must not be a number");
          return a(e, t, r)
      }
      ,
      o.alloc = function(e, t, r) {
          if ("number" !== typeof e)
              throw new TypeError("Argument must be a number");
          var n = a(e);
          return void 0 !== t ? "string" === typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
          n
      }
      ,
      o.allocUnsafe = function(e) {
          if ("number" !== typeof e)
              throw new TypeError("Argument must be a number");
          return a(e)
      }
      ,
      o.allocUnsafeSlow = function(e) {
          if ("number" !== typeof e)
              throw new TypeError("Argument must be a number");
          return n.SlowBuffer(e)
      }
  },
  8737: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("f654");
      (function(e) {
          e[e["PCM"] = 1] = "PCM",
          e[e["ADPCM"] = 2] = "ADPCM",
          e[e["IEEE_FLOAT"] = 3] = "IEEE_FLOAT",
          e[e["MPEG_ADTS_AAC"] = 5632] = "MPEG_ADTS_AAC",
          e[e["MPEG_LOAS"] = 5634] = "MPEG_LOAS",
          e[e["RAW_AAC1"] = 255] = "RAW_AAC1",
          e[e["DOLBY_AC3_SPDIF"] = 146] = "DOLBY_AC3_SPDIF",
          e[e["DVM"] = 8192] = "DVM",
          e[e["RAW_SPORT"] = 576] = "RAW_SPORT",
          e[e["ESST_AC3"] = 577] = "ESST_AC3",
          e[e["DRM"] = 9] = "DRM",
          e[e["DTS2"] = 8193] = "DTS2",
          e[e["MPEG"] = 80] = "MPEG"
      }
      )(t.WaveFormat || (t.WaveFormat = {}));
      class a {
          constructor(e) {
              n.ok(e.chunkSize >= 16, "16 for PCM."),
              this.len = e.chunkSize
          }
          get(e, t) {
              return {
                  wFormatTag: e.readUInt16LE(t),
                  nChannels: e.readUInt16LE(t + 2),
                  nSamplesPerSec: e.readUInt32LE(t + 4),
                  nAvgBytesPerSec: e.readUInt32LE(t + 8),
                  nBlockAlign: e.readUInt16LE(t + 12),
                  wBitsPerSample: e.readUInt16LE(t + 14)
              }
          }
      }
      t.Format = a;
      class i {
          constructor(e) {
              n.ok(e.chunkSize >= 4, "minimum fact chunk size."),
              this.len = e.chunkSize
          }
          get(e, t) {
              return {
                  dwSampleLength: e.readUInt32LE(t)
              }
          }
      }
      t.FactChunk = i
  },
  8925: function(e, t, r) {
      var n = r("c6cd")
        , a = Function.toString;
      "function" != typeof n.inspectSource && (n.inspectSource = function(e) {
          return a.call(e)
      }
      ),
      e.exports = n.inspectSource
  },
  "8aa5": function(e, t, r) {
      "use strict";
      var n = r("6547").charAt;
      e.exports = function(e, t, r) {
          return t + (r ? n(e, t).length : 1)
      }
  },
  "8aa7": function(e, t, r) {
      var n = r("da84")
        , a = r("d039")
        , i = r("1c7e")
        , o = r("ebb5").NATIVE_ARRAY_BUFFER_VIEWS
        , s = n.ArrayBuffer
        , c = n.Int8Array;
      e.exports = !o || !a((function() {
          c(1)
      }
      )) || !a((function() {
          new c(-1)
      }
      )) || !i((function(e) {
          new c,
          new c(null),
          new c(1.5),
          new c(e)
      }
      ), !0) || a((function() {
          return 1 !== new c(new s(2),1,void 0).length
      }
      ))
  },
  "8cef": function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.pad.Iso97971 = {
              pad: function(t, r) {
                  t.concat(e.lib.WordArray.create([2147483648], 1)),
                  e.pad.ZeroPadding.pad(t, r)
              },
              unpad: function(t) {
                  e.pad.ZeroPadding.unpad(t),
                  t.sigBytes--
              }
          },
          e.pad.Iso97971
      }
      ))
  },
  "8f14": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97")
        , a = {
          TITLE: "title",
          ARTIST: "artist",
          ARTISTS: "artists",
          ALBUMARTIST: "albumartist",
          ALBUM: "album",
          DATE: "date",
          ORIGINALDATE: "originaldate",
          ORIGINALYEAR: "originalyear",
          COMMENT: "comment",
          TRACKNUMBER: "track",
          DISCNUMBER: "disk",
          GENRE: "genre",
          METADATA_BLOCK_PICTURE: "picture",
          COMPOSER: "composer",
          LYRICS: "lyrics",
          ALBUMSORT: "albumsort",
          TITLESORT: "titlesort",
          WORK: "work",
          ARTISTSORT: "artistsort",
          ALBUMARTISTSORT: "albumartistsort",
          COMPOSERSORT: "composersort",
          LYRICIST: "lyricist",
          WRITER: "writer",
          CONDUCTOR: "conductor",
          REMIXER: "remixer",
          ARRANGER: "arranger",
          ENGINEER: "engineer",
          PRODUCER: "producer",
          DJMIXER: "djmixer",
          MIXER: "mixer",
          LABEL: "label",
          GROUPING: "grouping",
          SUBTITLE: "subtitle",
          DISCSUBTITLE: "discsubtitle",
          TRACKTOTAL: "totaltracks",
          DISCTOTAL: "totaldiscs",
          COMPILATION: "compilation",
          RATING: "rating",
          BPM: "bpm",
          MOOD: "mood",
          MEDIA: "media",
          CATALOGNUMBER: "catalognumber",
          RELEASESTATUS: "releasestatus",
          RELEASETYPE: "releasetype",
          RELEASECOUNTRY: "releasecountry",
          SCRIPT: "script",
          LANGUAGE: "language",
          COPYRIGHT: "copyright",
          LICENSE: "license",
          ENCODEDBY: "encodedby",
          ENCODERSETTINGS: "encodersettings",
          BARCODE: "barcode",
          ISRC: "isrc",
          ASIN: "asin",
          MUSICBRAINZ_TRACKID: "musicbrainz_recordingid",
          MUSICBRAINZ_RELEASETRACKID: "musicbrainz_trackid",
          MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
          MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
          MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
          MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
          MUSICBRAINZ_WORKID: "musicbrainz_workid",
          MUSICBRAINZ_TRMID: "musicbrainz_trmid",
          MUSICBRAINZ_DISCID: "musicbrainz_discid",
          ACOUSTID_ID: "acoustid_id",
          ACOUSTID_ID_FINGERPRINT: "acoustid_fingerprint",
          MUSICIP_PUID: "musicip_puid",
          WEBSITE: "website",
          NOTES: "notes",
          TOTALTRACKS: "totaltracks",
          TOTALDISCS: "totaldiscs",
          DISCOGS_ARTIST_ID: "discogs_artist_id",
          DISCOGS_ARTISTS: "artists",
          DISCOGS_ARTIST_NAME: "artists",
          DISCOGS_ALBUM_ARTISTS: "albumartist",
          DISCOGS_CATALOG: "catalognumber",
          DISCOGS_COUNTRY: "releasecountry",
          DISCOGS_DATE: "originaldate",
          DISCOGS_LABEL: "label",
          DISCOGS_LABEL_ID: "discogs_label_id",
          DISCOGS_MASTER_RELEASE_ID: "discogs_master_release_id",
          DISCOGS_RATING: "discogs_rating",
          DISCOGS_RELEASED: "date",
          DISCOGS_RELEASE_ID: "discogs_release_id",
          DISCOGS_VOTES: "discogs_votes",
          CATALOGID: "catalognumber",
          STYLE: "genre",
          REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
          REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
          REPLAYGAIN_ALBUM_GAIN: "replaygain_album_gain",
          REPLAYGAIN_ALBUM_PEAK: "replaygain_album_peak",
          REPLAYGAIN_MINMAX: "replaygain_track_minmax",
          REPLAYGAIN_ALBUM_MINMAX: "replaygain_album_minmax",
          REPLAYGAIN_UNDO: "replaygain_undo"
      };
      class i extends n.CommonTagMapper {
          static toRating(e, t) {
              return {
                  source: e ? e.toLowerCase() : e,
                  rating: parseFloat(t) * n.CommonTagMapper.maxRatingScore
              }
          }
          constructor() {
              super(["vorbis"], a)
          }
          postMap(e) {
              if (0 === e.id.indexOf("RATING:")) {
                  const t = e.id.split(":");
                  e.value = i.toRating(t[1], e.value),
                  e.id = t[0]
              }
          }
      }
      t.VorbisTagMapper = i
  },
  "8f5f": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("98a7");
      t.Header = {
          len: 8,
          get: (e,t)=>({
              chunkID: a.FourCcToken.get(e, t),
              chunkSize: e.readUInt32LE(t + 4)
          })
      };
      class i {
          constructor(e) {
              this.tagHeader = e,
              this.len = e.chunkSize,
              this.len += 1 & this.len
          }
          get(e, t) {
              return new n.StringType(this.tagHeader.chunkSize,"ascii").get(e, t)
          }
      }
      t.ListInfoTagValue = i
  },
  "90e3": function(e, t) {
      var r = 0
        , n = Math.random();
      e.exports = function(e) {
          return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++r + n).toString(36)
      }
  },
  9112: function(e, t, r) {
      var n = r("83ab")
        , a = r("9bf2")
        , i = r("5c6c");
      e.exports = n ? function(e, t, r) {
          return a.f(e, t, i(1, r))
      }
      : function(e, t, r) {
          return e[t] = r,
          e
      }
  },
  9131: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          class r {
              constructor(e) {
                  this.str = e
              }
              static fromBin(e, t=0) {
                  return new r(this.decode(e, t))
              }
              static decode(e, t=0) {
                  const r = e.readUInt32LE(t).toString(16) + "-" + e.readUInt16LE(t + 4).toString(16) + "-" + e.readUInt16LE(t + 6).toString(16) + "-" + e.readUInt16BE(t + 8).toString(16) + "-" + e.slice(t + 10, t + 16).toString("hex");
                  return r.toUpperCase()
              }
              static decodeMediaType(e) {
                  switch (e.str) {
                  case r.AudioMedia.str:
                      return "audio";
                  case r.VideoMedia.str:
                      return "video";
                  case r.CommandMedia.str:
                      return "command";
                  case r.Degradable_JPEG_Media.str:
                      return "degradable-jpeg";
                  case r.FileTransferMedia.str:
                      return "file-transfer";
                  case r.BinaryMedia.str:
                      return "binary"
                  }
              }
              static encode(t) {
                  const r = e.alloc(16);
                  return r.writeUInt32LE(parseInt(t.slice(0, 8), 16), 0),
                  r.writeUInt16LE(parseInt(t.slice(9, 13), 16), 4),
                  r.writeUInt16LE(parseInt(t.slice(14, 18), 16), 6),
                  e.from(t.slice(19, 23), "hex").copy(r, 8),
                  e.from(t.slice(24), "hex").copy(r, 10),
                  r
              }
              equals(e) {
                  return this.str === e.str
              }
              toBin() {
                  return r.encode(this.str)
              }
          }
          t.default = r,
          r.HeaderObject = new r("75B22630-668E-11CF-A6D9-00AA0062CE6C"),
          r.DataObject = new r("75B22636-668E-11CF-A6D9-00AA0062CE6C"),
          r.SimpleIndexObject = new r("33000890-E5B1-11CF-89F4-00A0C90349CB"),
          r.IndexObject = new r("D6E229D3-35DA-11D1-9034-00A0C90349BE"),
          r.MediaObjectIndexObject = new r("FEB103F8-12AD-4C64-840F-2A1D2F7AD48C"),
          r.TimecodeIndexObject = new r("3CB73FD0-0C4A-4803-953D-EDF7B6228F0C"),
          r.FilePropertiesObject = new r("8CABDCA1-A947-11CF-8EE4-00C00C205365"),
          r.StreamPropertiesObject = new r("B7DC0791-A9B7-11CF-8EE6-00C00C205365"),
          r.HeaderExtensionObject = new r("5FBF03B5-A92E-11CF-8EE3-00C00C205365"),
          r.CodecListObject = new r("86D15240-311D-11D0-A3A4-00A0C90348F6"),
          r.ScriptCommandObject = new r("1EFB1A30-0B62-11D0-A39B-00A0C90348F6"),
          r.MarkerObject = new r("F487CD01-A951-11CF-8EE6-00C00C205365"),
          r.BitrateMutualExclusionObject = new r("D6E229DC-35DA-11D1-9034-00A0C90349BE"),
          r.ErrorCorrectionObject = new r("75B22635-668E-11CF-A6D9-00AA0062CE6C"),
          r.ContentDescriptionObject = new r("75B22633-668E-11CF-A6D9-00AA0062CE6C"),
          r.ExtendedContentDescriptionObject = new r("D2D0A440-E307-11D2-97F0-00A0C95EA850"),
          r.ContentBrandingObject = new r("2211B3FA-BD23-11D2-B4B7-00A0C955FC6E"),
          r.StreamBitratePropertiesObject = new r("7BF875CE-468D-11D1-8D82-006097C9A2B2"),
          r.ContentEncryptionObject = new r("2211B3FB-BD23-11D2-B4B7-00A0C955FC6E"),
          r.ExtendedContentEncryptionObject = new r("298AE614-2622-4C17-B935-DAE07EE9289C"),
          r.DigitalSignatureObject = new r("2211B3FC-BD23-11D2-B4B7-00A0C955FC6E"),
          r.PaddingObject = new r("1806D474-CADF-4509-A4BA-9AABCB96AAE8"),
          r.ExtendedStreamPropertiesObject = new r("14E6A5CB-C672-4332-8399-A96952065B5A"),
          r.AdvancedMutualExclusionObject = new r("A08649CF-4775-4670-8A16-6E35357566CD"),
          r.GroupMutualExclusionObject = new r("D1465A40-5A79-4338-B71B-E36B8FD6C249"),
          r.StreamPrioritizationObject = new r("D4FED15B-88D3-454F-81F0-ED5C45999E24"),
          r.BandwidthSharingObject = new r("A69609E6-517B-11D2-B6AF-00C04FD908E9"),
          r.LanguageListObject = new r("7C4346A9-EFE0-4BFC-B229-393EDE415C85"),
          r.MetadataObject = new r("C5F8CBEA-5BAF-4877-8467-AA8C44FA4CCA"),
          r.MetadataLibraryObject = new r("44231C94-9498-49D1-A141-1D134E457054"),
          r.IndexParametersObject = new r("D6E229DF-35DA-11D1-9034-00A0C90349BE"),
          r.MediaObjectIndexParametersObject = new r("6B203BAD-3F11-48E4-ACA8-D7613DE2CFA7"),
          r.TimecodeIndexParametersObject = new r("F55E496D-9797-4B5D-8C8B-604DFE9BFB24"),
          r.CompatibilityObject = new r("26F18B5D-4584-47EC-9F5F-0E651F0452C9"),
          r.AdvancedContentEncryptionObject = new r("43058533-6981-49E6-9B74-AD12CB86D58C"),
          r.AudioMedia = new r("F8699E40-5B4D-11CF-A8FD-00805F5C442B"),
          r.VideoMedia = new r("BC19EFC0-5B4D-11CF-A8FD-00805F5C442B"),
          r.CommandMedia = new r("59DACFC0-59E6-11D0-A3AC-00A0C90348F6"),
          r.JFIF_Media = new r("B61BE100-5B4E-11CF-A8FD-00805F5C442B"),
          r.Degradable_JPEG_Media = new r("35907DE0-E415-11CF-A917-00805F5C442B"),
          r.FileTransferMedia = new r("91BD222C-F21C-497A-8B6D-5AA86BFC0185"),
          r.BinaryMedia = new r("3AFB65E2-47EF-40F2-AC2C-70A90D71D343"),
          r.ASF_Index_Placeholder_Object = new r("D9AADE20-7C17-4F9C-BC28-8555DD98E2A2")
      }
      ).call(this, r("b639").Buffer)
  },
  9152: function(e, t) {
      t.read = function(e, t, r, n, a) {
          var i, o, s = 8 * a - n - 1, c = (1 << s) - 1, u = c >> 1, l = -7, f = r ? a - 1 : 0, d = r ? -1 : 1, h = e[t + f];
          for (f += d,
          i = h & (1 << -l) - 1,
          h >>= -l,
          l += s; l > 0; i = 256 * i + e[t + f],
          f += d,
          l -= 8)
              ;
          for (o = i & (1 << -l) - 1,
          i >>= -l,
          l += n; l > 0; o = 256 * o + e[t + f],
          f += d,
          l -= 8)
              ;
          if (0 === i)
              i = 1 - u;
          else {
              if (i === c)
                  return o ? NaN : 1 / 0 * (h ? -1 : 1);
              o += Math.pow(2, n),
              i -= u
          }
          return (h ? -1 : 1) * o * Math.pow(2, i - n)
      }
      ,
      t.write = function(e, t, r, n, a, i) {
          var o, s, c, u = 8 * i - a - 1, l = (1 << u) - 1, f = l >> 1, d = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : i - 1, p = n ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
          for (t = Math.abs(t),
          isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
          o = l) : (o = Math.floor(Math.log(t) / Math.LN2),
          t * (c = Math.pow(2, -o)) < 1 && (o--,
          c *= 2),
          t += o + f >= 1 ? d / c : d * Math.pow(2, 1 - f),
          t * c >= 2 && (o++,
          c /= 2),
          o + f >= l ? (s = 0,
          o = l) : o + f >= 1 ? (s = (t * c - 1) * Math.pow(2, a),
          o += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, a),
          o = 0)); a >= 8; e[r + h] = 255 & s,
          h += p,
          s /= 256,
          a -= 8)
              ;
          for (o = o << a | s,
          u += a; u > 0; e[r + h] = 255 & o,
          h += p,
          o /= 256,
          u -= 8)
              ;
          e[r + h - p] |= 128 * m
      }
  },
  9263: function(e, t, r) {
      "use strict";
      var n = r("ad6d")
        , a = r("9f7f")
        , i = RegExp.prototype.exec
        , o = String.prototype.replace
        , s = i
        , c = function() {
          var e = /a/
            , t = /b*/g;
          return i.call(e, "a"),
          i.call(t, "a"),
          0 !== e.lastIndex || 0 !== t.lastIndex
      }()
        , u = a.UNSUPPORTED_Y || a.BROKEN_CARET
        , l = void 0 !== /()??/.exec("")[1]
        , f = c || l || u;
      f && (s = function(e) {
          var t, r, a, s, f = this, d = u && f.sticky, h = n.call(f), p = f.source, m = 0, g = e;
          return d && (h = h.replace("y", ""),
          -1 === h.indexOf("g") && (h += "g"),
          g = String(e).slice(f.lastIndex),
          f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== e[f.lastIndex - 1]) && (p = "(?: " + p + ")",
          g = " " + g,
          m++),
          r = new RegExp("^(?:" + p + ")",h)),
          l && (r = new RegExp("^" + p + "$(?!\\s)",h)),
          c && (t = f.lastIndex),
          a = i.call(d ? r : f, g),
          d ? a ? (a.input = a.input.slice(m),
          a[0] = a[0].slice(m),
          a.index = f.lastIndex,
          f.lastIndex += a[0].length) : f.lastIndex = 0 : c && a && (f.lastIndex = f.global ? a.index + a[0].length : t),
          l && a && a.length > 1 && o.call(a[0], r, (function() {
              for (s = 1; s < arguments.length - 2; s++)
                  void 0 === arguments[s] && (a[s] = void 0)
          }
          )),
          a
      }
      ),
      e.exports = s
  },
  "93c2": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("20f8");
          class a {
              constructor(t) {
                  this.position = 0,
                  this.numBuffer = e.alloc(10),
                  this.fileInfo = t || {}
              }
              async readToken(t, r=null, a) {
                  const i = e.alloc(t.len)
                    , o = await this.readBuffer(i, 0, t.len, r);
                  if (!a && o < t.len)
                      throw new n.EndOfStreamError;
                  return t.get(i, 0)
              }
              async peekToken(t, r=this.position, a) {
                  const i = e.alloc(t.len)
                    , o = await this.peekBuffer(i, 0, t.len, r);
                  if (!a && o < t.len)
                      throw new n.EndOfStreamError;
                  return t.get(i, 0)
              }
              async readNumber(e) {
                  const t = await this.readBuffer(this.numBuffer, 0, e.len, null);
                  if (t < e.len)
                      throw new n.EndOfStreamError;
                  return e.get(this.numBuffer, 0)
              }
              async peekNumber(e) {
                  const t = await this.peekBuffer(this.numBuffer, 0, e.len);
                  if (t < e.len)
                      throw new n.EndOfStreamError;
                  return e.get(this.numBuffer, 0)
              }
              async close() {}
          }
          t.AbstractTokenizer = a
      }
      ).call(this, r("b639").Buffer)
  },
  "94ca": function(e, t, r) {
      var n = r("d039")
        , a = /#|\.prototype\./
        , i = function(e, t) {
          var r = s[o(e)];
          return r == u || r != c && ("function" == typeof t ? n(t) : !!t)
      }
        , o = i.normalize = function(e) {
          return String(e).replace(a, ".").toLowerCase()
      }
        , s = i.data = {}
        , c = i.NATIVE = "N"
        , u = i.POLYFILL = "P";
      e.exports = i
  },
  "94f8": function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function(t) {
              var r = e
                , n = r.lib
                , a = n.WordArray
                , i = n.Hasher
                , o = r.algo
                , s = []
                , c = [];
              (function() {
                  function e(e) {
                      for (var r = t.sqrt(e), n = 2; n <= r; n++)
                          if (!(e % n))
                              return !1;
                      return !0
                  }
                  function r(e) {
                      return 4294967296 * (e - (0 | e)) | 0
                  }
                  var n = 2
                    , a = 0;
                  while (a < 64)
                      e(n) && (a < 8 && (s[a] = r(t.pow(n, .5))),
                      c[a] = r(t.pow(n, 1 / 3)),
                      a++),
                      n++
              }
              )();
              var u = []
                , l = o.SHA256 = i.extend({
                  _doReset: function() {
                      this._hash = new a.init(s.slice(0))
                  },
                  _doProcessBlock: function(e, t) {
                      for (var r = this._hash.words, n = r[0], a = r[1], i = r[2], o = r[3], s = r[4], l = r[5], f = r[6], d = r[7], h = 0; h < 64; h++) {
                          if (h < 16)
                              u[h] = 0 | e[t + h];
                          else {
                              var p = u[h - 15]
                                , m = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                                , g = u[h - 2]
                                , y = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                              u[h] = m + u[h - 7] + y + u[h - 16]
                          }
                          var b = s & l ^ ~s & f
                            , v = n & a ^ n & i ^ a & i
                            , w = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)
                            , T = (s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)
                            , k = d + T + b + c[h] + u[h]
                            , _ = w + v;
                          d = f,
                          f = l,
                          l = s,
                          s = o + k | 0,
                          o = i,
                          i = a,
                          a = n,
                          n = k + _ | 0
                      }
                      r[0] = r[0] + n | 0,
                      r[1] = r[1] + a | 0,
                      r[2] = r[2] + i | 0,
                      r[3] = r[3] + o | 0,
                      r[4] = r[4] + s | 0,
                      r[5] = r[5] + l | 0,
                      r[6] = r[6] + f | 0,
                      r[7] = r[7] + d | 0
                  },
                  _doFinalize: function() {
                      var e = this._data
                        , r = e.words
                        , n = 8 * this._nDataBytes
                        , a = 8 * e.sigBytes;
                      return r[a >>> 5] |= 128 << 24 - a % 32,
                      r[14 + (a + 64 >>> 9 << 4)] = t.floor(n / 4294967296),
                      r[15 + (a + 64 >>> 9 << 4)] = n,
                      e.sigBytes = 4 * r.length,
                      this._process(),
                      this._hash
                  },
                  clone: function() {
                      var e = i.clone.call(this);
                      return e._hash = this._hash.clone(),
                      e
                  }
              });
              r.SHA256 = i._createHelper(l),
              r.HmacSHA256 = i._createHmacHelper(l)
          }(Math),
          e.SHA256
      }
      ))
  },
  9507: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("21c2")
        , a = r("6f58")
        , i = r("34eb")
        , o = r("8f5f")
        , s = r("8737")
        , c = r("64a4")
        , u = r("d3ab")
        , l = r("98a7")
        , f = r("95c9")
        , d = r("b8fc")
        , h = i("music-metadata:parser:RIFF");
      class p extends f.BasicParser {
          async parse() {
              const e = await this.tokenizer.readToken(o.Header);
              if (h(`pos=${this.tokenizer.position}, parse: chunkID=${e.chunkID}`),
              "RIFF" === e.chunkID)
                  return this.parseRiffChunk(e.chunkSize).catch(e=>{
                      if (!(e instanceof n.EndOfStreamError))
                          throw e
                  }
                  )
          }
          async parseRiffChunk(e) {
              const t = await this.tokenizer.readToken(l.FourCcToken);
              switch (this.metadata.setFormat("container", t),
              t) {
              case "WAVE":
                  return this.readWaveChunk(e - l.FourCcToken.len);
              default:
                  throw new Error(`Unsupported RIFF format: RIFF/${t}`)
              }
          }
          async readWaveChunk(e) {
              do {
                  const t = await this.tokenizer.readToken(o.Header);
                  switch (e -= o.Header.len + t.chunkSize,
                  this.header = t,
                  h(`pos=${this.tokenizer.position}, readChunk: chunkID=RIFF/WAVE/${t.chunkID}`),
                  t.chunkID) {
                  case "LIST":
                      await this.parseListTag(t);
                      break;
                  case "fact":
                      this.metadata.setFormat("lossless", !1),
                      this.fact = await this.tokenizer.readToken(new s.FactChunk(t));
                      break;
                  case "fmt ":
                      const e = await this.tokenizer.readToken(new s.Format(t));
                      let r = s.WaveFormat[e.wFormatTag];
                      r || (h("WAVE/non-PCM format=" + e.wFormatTag),
                      r = "non-PCM (" + e.wFormatTag + ")"),
                      this.metadata.setFormat("codec", r),
                      this.metadata.setFormat("bitsPerSample", e.wBitsPerSample),
                      this.metadata.setFormat("sampleRate", e.nSamplesPerSec),
                      this.metadata.setFormat("numberOfChannels", e.nChannels),
                      this.metadata.setFormat("bitrate", e.nBlockAlign * e.nSamplesPerSec * 8),
                      this.blockAlign = e.nBlockAlign;
                      break;
                  case "id3 ":
                  case "ID3 ":
                      const i = await this.tokenizer.readToken(new a.BufferType(t.chunkSize))
                        , o = new d.ID3Stream(i)
                        , u = n.fromStream(o);
                      await (new c.ID3v2Parser).parse(this.metadata, u, this.options);
                      break;
                  case "data":
                      !1 !== this.metadata.format.lossless && this.metadata.setFormat("lossless", !0);
                      const l = this.fact ? this.fact.dwSampleLength : t.chunkSize / this.blockAlign;
                      this.metadata.setFormat("numberOfSamples", l),
                      this.metadata.setFormat("duration", l / this.metadata.format.sampleRate),
                      this.metadata.setFormat("bitrate", this.metadata.format.numberOfChannels * this.blockAlign * this.metadata.format.sampleRate),
                      await this.tokenizer.ignore(t.chunkSize);
                      break;
                  default:
                      h(`Ignore chunk: RIFF/${t.chunkID} of ${t.chunkSize} bytes`),
                      this.metadata.addWarning("Ignore chunk: RIFF/" + t.chunkID),
                      await this.tokenizer.ignore(t.chunkSize)
                  }
                  this.header.chunkSize % 2 === 1 && (h("Read odd padding byte"),
                  await this.tokenizer.ignore(1))
              } while (e > 0)
          }
          async parseListTag(e) {
              const t = await this.tokenizer.readToken(l.FourCcToken);
              switch (h("pos=%s, parseListTag: chunkID=RIFF/WAVE/LIST/%s", this.tokenizer.position, t),
              t) {
              case "INFO":
                  return this.parseRiffInfoTags(e.chunkSize - 4);
              case "adtl":
              default:
                  return this.metadata.addWarning("Ignore chunk: RIFF/WAVE/LIST/" + t),
                  h("Ignoring chunkID=RIFF/WAVE/LIST/" + t),
                  this.tokenizer.ignore(e.chunkSize - 4).then()
              }
          }
          async parseRiffInfoTags(e) {
              while (e >= 8) {
                  const t = await this.tokenizer.readToken(o.Header)
                    , r = new o.ListInfoTagValue(t)
                    , n = await this.tokenizer.readToken(r);
                  this.addTag(t.chunkID, u.default.stripNulls(n)),
                  e -= 8 + r.len
              }
              if (0 !== e)
                  throw Error("Illegal remaining size: " + e)
          }
          addTag(e, t) {
              this.metadata.addTag("exif", e, t)
          }
      }
      t.WaveParser = p
  },
  "95c9": function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      class n {
          init(e, t, r) {
              return this.metadata = e,
              this.tokenizer = t,
              this.options = r,
              this
          }
      }
      t.BasicParser = n
  },
  9611: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("34eb")
            , a = r("21c2")
            , i = r("f654")
            , o = r("d3ab")
            , s = r("95c9")
            , c = r("1d55")
            , u = r("6f58")
            , l = n("music-metadata:parser:APEv2")
            , f = "APEv2"
            , d = "APETAGEX";
          class h extends s.BasicParser {
              constructor() {
                  super(...arguments),
                  this.ape = {}
              }
              static tryParseApeHeader(e, t, r) {
                  const n = new h;
                  return n.init(e, t, r),
                  n.tryParseApeHeader()
              }
              static calculateDuration(e) {
                  let t = e.totalFrames > 1 ? e.blocksPerFrame * (e.totalFrames - 1) : 0;
                  return t += e.finalFrameBlocks,
                  t / e.sampleRate
              }
              static async findApeFooterOffset(t, r) {
                  const n = e.alloc(c.TagFooter.len);
                  await t.randomRead(n, 0, c.TagFooter.len, r - c.TagFooter.len);
                  const a = c.TagFooter.get(n, 0);
                  if ("APETAGEX" === a.ID)
                      return l(`APE footer header at offset=${r}`),
                      {
                          footer: a,
                          offset: r - a.size
                      }
              }
              static parseTagFooter(e, t, r) {
                  const n = c.TagFooter.get(t, t.length - c.TagFooter.len);
                  i.strictEqual(n.ID, d, "APEv2 Footer preamble"),
                  a.fromBuffer(t);
                  const o = new h;
                  return o.init(e, a.fromBuffer(t), r),
                  o.parseTags(n)
              }
              async tryParseApeHeader() {
                  if (this.tokenizer.fileInfo.size && this.tokenizer.fileInfo.size - this.tokenizer.position < c.TagFooter.len)
                      return void l("No APEv2 header found, end-of-file reached");
                  const t = await this.tokenizer.peekToken(c.TagFooter);
                  if (t.ID === d)
                      return await this.tokenizer.ignore(c.TagFooter.len),
                      this.parseTags(t);
                  if (l(`APEv2 header not found at offset=${this.tokenizer.position}`),
                  this.tokenizer.fileInfo.size) {
                      const t = this.tokenizer.fileInfo.size - this.tokenizer.position
                        , r = e.alloc(t);
                      return await this.tokenizer.readBuffer(r),
                      h.parseTagFooter(this.metadata, r, this.options)
                  }
              }
              async parse() {
                  const e = await this.tokenizer.readToken(c.DescriptorParser);
                  i.strictEqual(e.ID, "MAC ", "descriptor.ID"),
                  this.ape.descriptor = e;
                  const t = e.descriptorBytes - c.DescriptorParser.len
                    , r = await (t > 0 ? this.parseDescriptorExpansion(t) : this.parseHeader());
                  return await this.tokenizer.ignore(r.forwardBytes),
                  this.tryParseApeHeader()
              }
              async parseTags(t) {
                  const r = e.alloc(256);
                  let n = t.size - c.TagFooter.len;
                  l(`Parse APE tags at offset=${this.tokenizer.position}, size=${n}`);
                  for (let a = 0; a < t.fields; a++) {
                      if (n < c.TagItemHeader.len) {
                          this.metadata.addWarning(`APEv2 Tag-header: ${t.fields - a} items remaining, but no more tag data to read.`);
                          break
                      }
                      const i = await this.tokenizer.readToken(c.TagItemHeader);
                      n -= c.TagItemHeader.len + i.size,
                      await this.tokenizer.peekBuffer(r, {
                          length: Math.min(r.length, n)
                      });
                      let s = o.default.findZero(r, 0, r.length);
                      const d = await this.tokenizer.readToken(new u.StringType(s,"ascii"));
                      switch (await this.tokenizer.ignore(1),
                      n -= d.length + 1,
                      i.flags.dataType) {
                      case c.DataType.text_utf8:
                          {
                              const e = await this.tokenizer.readToken(new u.StringType(i.size,"utf8"))
                                , t = e.split(/\x00/g);
                              for (const r of t)
                                  this.metadata.addTag(f, d, r);
                              break
                          }
                      case c.DataType.binary:
                          if (this.options.skipCovers)
                              await this.tokenizer.ignore(i.size);
                          else {
                              const t = e.alloc(i.size);
                              await this.tokenizer.readBuffer(t),
                              s = o.default.findZero(t, 0, t.length);
                              const r = t.toString("utf8", 0, s)
                                , n = e.from(t.slice(s + 1));
                              this.metadata.addTag(f, d, {
                                  description: r,
                                  data: n
                              })
                          }
                          break;
                      case c.DataType.external_info:
                          l(`Ignore external info ${d}`),
                          await this.tokenizer.ignore(i.size);
                          break;
                      default:
                          throw new Error(`Unexpected data-type: ${i.flags.dataType}`)
                      }
                  }
              }
              async parseDescriptorExpansion(e) {
                  return await this.tokenizer.ignore(e),
                  this.parseHeader()
              }
              async parseHeader() {
                  const e = await this.tokenizer.readToken(c.Header);
                  return this.metadata.setFormat("lossless", !0),
                  this.metadata.setFormat("container", "Monkey's Audio"),
                  this.metadata.setFormat("bitsPerSample", e.bitsPerSample),
                  this.metadata.setFormat("sampleRate", e.sampleRate),
                  this.metadata.setFormat("numberOfChannels", e.channel),
                  this.metadata.setFormat("duration", h.calculateDuration(e)),
                  {
                      forwardBytes: this.ape.descriptor.seekTableBytes + this.ape.descriptor.headerDataBytes + this.ape.descriptor.apeFrameDataBytes + this.ape.descriptor.terminatingDataBytes
                  }
              }
          }
          t.APEv2Parser = h
      }
      ).call(this, r("b639").Buffer)
  },
  "966d": function(e, t, r) {
      "use strict";
      (function(t) {
          function r(e, r, n, a) {
              if ("function" !== typeof e)
                  throw new TypeError('"callback" argument must be a function');
              var i, o, s = arguments.length;
              switch (s) {
              case 0:
              case 1:
                  return t.nextTick(e);
              case 2:
                  return t.nextTick((function() {
                      e.call(null, r)
                  }
                  ));
              case 3:
                  return t.nextTick((function() {
                      e.call(null, r, n)
                  }
                  ));
              case 4:
                  return t.nextTick((function() {
                      e.call(null, r, n, a)
                  }
                  ));
              default:
                  i = new Array(s - 1),
                  o = 0;
                  while (o < i.length)
                      i[o++] = arguments[o];
                  return t.nextTick((function() {
                      e.apply(null, i)
                  }
                  ))
              }
          }
          "undefined" === typeof t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
              nextTick: r
          } : e.exports = t
      }
      ).call(this, r("4362"))
  },
  "96cf": function(e, t, r) {
      var n = function(e) {
          "use strict";
          var t, r = Object.prototype, n = r.hasOwnProperty, a = "function" === typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator", o = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
          function c(e, t, r, n) {
              var a = t && t.prototype instanceof m ? t : m
                , i = Object.create(a.prototype)
                , o = new x(n || []);
              return i._invoke = S(e, r, o),
              i
          }
          function u(e, t, r) {
              try {
                  return {
                      type: "normal",
                      arg: e.call(t, r)
                  }
              } catch (n) {
                  return {
                      type: "throw",
                      arg: n
                  }
              }
          }
          e.wrap = c;
          var l = "suspendedStart"
            , f = "suspendedYield"
            , d = "executing"
            , h = "completed"
            , p = {};
          function m() {}
          function g() {}
          function y() {}
          var b = {};
          b[i] = function() {
              return this
          }
          ;
          var v = Object.getPrototypeOf
            , w = v && v(v(B([])));
          w && w !== r && n.call(w, i) && (b = w);
          var T = y.prototype = m.prototype = Object.create(b);
          function k(e) {
              ["next", "throw", "return"].forEach((function(t) {
                  e[t] = function(e) {
                      return this._invoke(t, e)
                  }
              }
              ))
          }
          function _(e) {
              function t(r, a, i, o) {
                  var s = u(e[r], e, a);
                  if ("throw" !== s.type) {
                      var c = s.arg
                        , l = c.value;
                      return l && "object" === typeof l && n.call(l, "__await") ? Promise.resolve(l.__await).then((function(e) {
                          t("next", e, i, o)
                      }
                      ), (function(e) {
                          t("throw", e, i, o)
                      }
                      )) : Promise.resolve(l).then((function(e) {
                          c.value = e,
                          i(c)
                      }
                      ), (function(e) {
                          return t("throw", e, i, o)
                      }
                      ))
                  }
                  o(s.arg)
              }
              var r;
              function a(e, n) {
                  function a() {
                      return new Promise((function(r, a) {
                          t(e, n, r, a)
                      }
                      ))
                  }
                  return r = r ? r.then(a, a) : a()
              }
              this._invoke = a
          }
          function S(e, t, r) {
              var n = l;
              return function(a, i) {
                  if (n === d)
                      throw new Error("Generator is already running");
                  if (n === h) {
                      if ("throw" === a)
                          throw i;
                      return C()
                  }
                  r.method = a,
                  r.arg = i;
                  while (1) {
                      var o = r.delegate;
                      if (o) {
                          var s = E(o, r);
                          if (s) {
                              if (s === p)
                                  continue;
                              return s
                          }
                      }
                      if ("next" === r.method)
                          r.sent = r._sent = r.arg;
                      else if ("throw" === r.method) {
                          if (n === l)
                              throw n = h,
                              r.arg;
                          r.dispatchException(r.arg)
                      } else
                          "return" === r.method && r.abrupt("return", r.arg);
                      n = d;
                      var c = u(e, t, r);
                      if ("normal" === c.type) {
                          if (n = r.done ? h : f,
                          c.arg === p)
                              continue;
                          return {
                              value: c.arg,
                              done: r.done
                          }
                      }
                      "throw" === c.type && (n = h,
                      r.method = "throw",
                      r.arg = c.arg)
                  }
              }
          }
          function E(e, r) {
              var n = e.iterator[r.method];
              if (n === t) {
                  if (r.delegate = null,
                  "throw" === r.method) {
                      if (e.iterator["return"] && (r.method = "return",
                      r.arg = t,
                      E(e, r),
                      "throw" === r.method))
                          return p;
                      r.method = "throw",
                      r.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return p
              }
              var a = u(n, e.iterator, r.arg);
              if ("throw" === a.type)
                  return r.method = "throw",
                  r.arg = a.arg,
                  r.delegate = null,
                  p;
              var i = a.arg;
              return i ? i.done ? (r[e.resultName] = i.value,
              r.next = e.nextLoc,
              "return" !== r.method && (r.method = "next",
              r.arg = t),
              r.delegate = null,
              p) : i : (r.method = "throw",
              r.arg = new TypeError("iterator result is not an object"),
              r.delegate = null,
              p)
          }
          function I(e) {
              var t = {
                  tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]),
              2 in e && (t.finallyLoc = e[2],
              t.afterLoc = e[3]),
              this.tryEntries.push(t)
          }
          function A(e) {
              var t = e.completion || {};
              t.type = "normal",
              delete t.arg,
              e.completion = t
          }
          function x(e) {
              this.tryEntries = [{
                  tryLoc: "root"
              }],
              e.forEach(I, this),
              this.reset(!0)
          }
          function B(e) {
              if (e) {
                  var r = e[i];
                  if (r)
                      return r.call(e);
                  if ("function" === typeof e.next)
                      return e;
                  if (!isNaN(e.length)) {
                      var a = -1
                        , o = function r() {
                          while (++a < e.length)
                              if (n.call(e, a))
                                  return r.value = e[a],
                                  r.done = !1,
                                  r;
                          return r.value = t,
                          r.done = !0,
                          r
                      };
                      return o.next = o
                  }
              }
              return {
                  next: C
              }
          }
          function C() {
              return {
                  value: t,
                  done: !0
              }
          }
          return g.prototype = T.constructor = y,
          y.constructor = g,
          y[s] = g.displayName = "GeneratorFunction",
          e.isGeneratorFunction = function(e) {
              var t = "function" === typeof e && e.constructor;
              return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
          }
          ,
          e.mark = function(e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
              s in e || (e[s] = "GeneratorFunction")),
              e.prototype = Object.create(T),
              e
          }
          ,
          e.awrap = function(e) {
              return {
                  __await: e
              }
          }
          ,
          k(_.prototype),
          _.prototype[o] = function() {
              return this
          }
          ,
          e.AsyncIterator = _,
          e.async = function(t, r, n, a) {
              var i = new _(c(t, r, n, a));
              return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                  return e.done ? e.value : i.next()
              }
              ))
          }
          ,
          k(T),
          T[s] = "Generator",
          T[i] = function() {
              return this
          }
          ,
          T.toString = function() {
              return "[object Generator]"
          }
          ,
          e.keys = function(e) {
              var t = [];
              for (var r in e)
                  t.push(r);
              return t.reverse(),
              function r() {
                  while (t.length) {
                      var n = t.pop();
                      if (n in e)
                          return r.value = n,
                          r.done = !1,
                          r
                  }
                  return r.done = !0,
                  r
              }
          }
          ,
          e.values = B,
          x.prototype = {
              constructor: x,
              reset: function(e) {
                  if (this.prev = 0,
                  this.next = 0,
                  this.sent = this._sent = t,
                  this.done = !1,
                  this.delegate = null,
                  this.method = "next",
                  this.arg = t,
                  this.tryEntries.forEach(A),
                  !e)
                      for (var r in this)
                          "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
              },
              stop: function() {
                  this.done = !0;
                  var e = this.tryEntries[0]
                    , t = e.completion;
                  if ("throw" === t.type)
                      throw t.arg;
                  return this.rval
              },
              dispatchException: function(e) {
                  if (this.done)
                      throw e;
                  var r = this;
                  function a(n, a) {
                      return s.type = "throw",
                      s.arg = e,
                      r.next = n,
                      a && (r.method = "next",
                      r.arg = t),
                      !!a
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                      var o = this.tryEntries[i]
                        , s = o.completion;
                      if ("root" === o.tryLoc)
                          return a("end");
                      if (o.tryLoc <= this.prev) {
                          var c = n.call(o, "catchLoc")
                            , u = n.call(o, "finallyLoc");
                          if (c && u) {
                              if (this.prev < o.catchLoc)
                                  return a(o.catchLoc, !0);
                              if (this.prev < o.finallyLoc)
                                  return a(o.finallyLoc)
                          } else if (c) {
                              if (this.prev < o.catchLoc)
                                  return a(o.catchLoc, !0)
                          } else {
                              if (!u)
                                  throw new Error("try statement without catch or finally");
                              if (this.prev < o.finallyLoc)
                                  return a(o.finallyLoc)
                          }
                      }
                  }
              },
              abrupt: function(e, t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var a = this.tryEntries[r];
                      if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                          var i = a;
                          break
                      }
                  }
                  i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                  var o = i ? i.completion : {};
                  return o.type = e,
                  o.arg = t,
                  i ? (this.method = "next",
                  this.next = i.finallyLoc,
                  p) : this.complete(o)
              },
              complete: function(e, t) {
                  if ("throw" === e.type)
                      throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                  this.method = "return",
                  this.next = "end") : "normal" === e.type && t && (this.next = t),
                  p
              },
              finish: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.finallyLoc === e)
                          return this.complete(r.completion, r.afterLoc),
                          A(r),
                          p
                  }
              },
              catch: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.tryLoc === e) {
                          var n = r.completion;
                          if ("throw" === n.type) {
                              var a = n.arg;
                              A(r)
                          }
                          return a
                      }
                  }
                  throw new Error("illegal catch attempt")
              },
              delegateYield: function(e, r, n) {
                  return this.delegate = {
                      iterator: B(e),
                      resultName: r,
                      nextLoc: n
                  },
                  "next" === this.method && (this.arg = t),
                  p
              }
          },
          e
      }(e.exports);
      try {
          regeneratorRuntime = n
      } catch (a) {
          Function("r", "regeneratorRuntime = r")(n)
      }
  },
  9861: function(e, t, r) {
      "use strict";
      r("e260");
      var n = r("23e7")
        , a = r("d066")
        , i = r("0d3b")
        , o = r("6eeb")
        , s = r("e2cc")
        , c = r("d44e")
        , u = r("9ed3")
        , l = r("69f3")
        , f = r("19aa")
        , d = r("5135")
        , h = r("0366")
        , p = r("f5df")
        , m = r("825a")
        , g = r("861d")
        , y = r("7c73")
        , b = r("5c6c")
        , v = r("9a1f")
        , w = r("35a1")
        , T = r("b622")
        , k = a("fetch")
        , _ = a("Headers")
        , S = T("iterator")
        , E = "URLSearchParams"
        , I = E + "Iterator"
        , A = l.set
        , x = l.getterFor(E)
        , B = l.getterFor(I)
        , C = /\+/g
        , P = Array(4)
        , O = function(e) {
          return P[e - 1] || (P[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
      }
        , M = function(e) {
          try {
              return decodeURIComponent(e)
          } catch (t) {
              return e
          }
      }
        , D = function(e) {
          var t = e.replace(C, " ")
            , r = 4;
          try {
              return decodeURIComponent(t)
          } catch (n) {
              while (r)
                  t = t.replace(O(r--), M);
              return t
          }
      }
        , R = /[!'()~]|%20/g
        , F = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+"
      }
        , L = function(e) {
          return F[e]
      }
        , z = function(e) {
          return encodeURIComponent(e).replace(R, L)
      }
        , U = function(e, t) {
          if (t) {
              var r, n, a = t.split("&"), i = 0;
              while (i < a.length)
                  r = a[i++],
                  r.length && (n = r.split("="),
                  e.push({
                      key: D(n.shift()),
                      value: D(n.join("="))
                  }))
          }
      }
        , N = function(e) {
          this.entries.length = 0,
          U(this.entries, e)
      }
        , j = function(e, t) {
          if (e < t)
              throw TypeError("Not enough arguments")
      }
        , H = u((function(e, t) {
          A(this, {
              type: I,
              iterator: v(x(e).entries),
              kind: t
          })
      }
      ), "Iterator", (function() {
          var e = B(this)
            , t = e.kind
            , r = e.iterator.next()
            , n = r.value;
          return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [n.key, n.value]),
          r
      }
      ))
        , W = function() {
          f(this, W, E);
          var e, t, r, n, a, i, o, s, c, u = arguments.length > 0 ? arguments[0] : void 0, l = this, h = [];
          if (A(l, {
              type: E,
              entries: h,
              updateURL: function() {},
              updateSearchParams: N
          }),
          void 0 !== u)
              if (g(u))
                  if (e = w(u),
                  "function" === typeof e) {
                      t = e.call(u),
                      r = t.next;
                      while (!(n = r.call(t)).done) {
                          if (a = v(m(n.value)),
                          i = a.next,
                          (o = i.call(a)).done || (s = i.call(a)).done || !i.call(a).done)
                              throw TypeError("Expected sequence with length 2");
                          h.push({
                              key: o.value + "",
                              value: s.value + ""
                          })
                      }
                  } else
                      for (c in u)
                          d(u, c) && h.push({
                              key: c,
                              value: u[c] + ""
                          });
              else
                  U(h, "string" === typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
      }
        , q = W.prototype;
      s(q, {
          append: function(e, t) {
              j(arguments.length, 2);
              var r = x(this);
              r.entries.push({
                  key: e + "",
                  value: t + ""
              }),
              r.updateURL()
          },
          delete: function(e) {
              j(arguments.length, 1);
              var t = x(this)
                , r = t.entries
                , n = e + ""
                , a = 0;
              while (a < r.length)
                  r[a].key === n ? r.splice(a, 1) : a++;
              t.updateURL()
          },
          get: function(e) {
              j(arguments.length, 1);
              for (var t = x(this).entries, r = e + "", n = 0; n < t.length; n++)
                  if (t[n].key === r)
                      return t[n].value;
              return null
          },
          getAll: function(e) {
              j(arguments.length, 1);
              for (var t = x(this).entries, r = e + "", n = [], a = 0; a < t.length; a++)
                  t[a].key === r && n.push(t[a].value);
              return n
          },
          has: function(e) {
              j(arguments.length, 1);
              var t = x(this).entries
                , r = e + ""
                , n = 0;
              while (n < t.length)
                  if (t[n++].key === r)
                      return !0;
              return !1
          },
          set: function(e, t) {
              j(arguments.length, 1);
              for (var r, n = x(this), a = n.entries, i = !1, o = e + "", s = t + "", c = 0; c < a.length; c++)
                  r = a[c],
                  r.key === o && (i ? a.splice(c--, 1) : (i = !0,
                  r.value = s));
              i || a.push({
                  key: o,
                  value: s
              }),
              n.updateURL()
          },
          sort: function() {
              var e, t, r, n = x(this), a = n.entries, i = a.slice();
              for (a.length = 0,
              r = 0; r < i.length; r++) {
                  for (e = i[r],
                  t = 0; t < r; t++)
                      if (a[t].key > e.key) {
                          a.splice(t, 0, e);
                          break
                      }
                  t === r && a.push(e)
              }
              n.updateURL()
          },
          forEach: function(e) {
              var t, r = x(this).entries, n = h(e, arguments.length > 1 ? arguments[1] : void 0, 3), a = 0;
              while (a < r.length)
                  t = r[a++],
                  n(t.value, t.key, this)
          },
          keys: function() {
              return new H(this,"keys")
          },
          values: function() {
              return new H(this,"values")
          },
          entries: function() {
              return new H(this,"entries")
          }
      }, {
          enumerable: !0
      }),
      o(q, S, q.entries),
      o(q, "toString", (function() {
          var e, t = x(this).entries, r = [], n = 0;
          while (n < t.length)
              e = t[n++],
              r.push(z(e.key) + "=" + z(e.value));
          return r.join("&")
      }
      ), {
          enumerable: !0
      }),
      c(W, E),
      n({
          global: !0,
          forced: !i
      }, {
          URLSearchParams: W
      }),
      i || "function" != typeof k || "function" != typeof _ || n({
          global: !0,
          enumerable: !0,
          forced: !0
      }, {
          fetch: function(e) {
              var t, r, n, a = [e];
              return arguments.length > 1 && (t = arguments[1],
              g(t) && (r = t.body,
              p(r) === E && (n = t.headers ? new _(t.headers) : new _,
              n.has("content-type") || n.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
              t = y(t, {
                  body: b(0, String(r)),
                  headers: b(0, n)
              }))),
              a.push(t)),
              k.apply(this, a)
          }
      }),
      e.exports = {
          URLSearchParams: W,
          getState: x
      }
  },
  "98a7": function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("d3ab")
            , a = /^[\w-©][\w-\x000-3]/;
          t.FourCcToken = {
              len: 4,
              get: (e,r)=>{
                  const i = e.toString("binary", r, r + t.FourCcToken.len);
                  if (!i.match(a))
                      throw new Error(`FourCC contains invalid characters: ${n.default.a2hex(i)}`);
                  return i
              }
              ,
              put: (t,r,n)=>{
                  const a = e.from(n, "binary");
                  if (4 !== a.length)
                      throw new Error("Invalid length");
                  return a.copy(t, r)
              }
          }
      }
      ).call(this, r("b639").Buffer)
  },
  "99af": function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("d039")
        , i = r("e8b5")
        , o = r("861d")
        , s = r("7b0b")
        , c = r("50c4")
        , u = r("8418")
        , l = r("65f0")
        , f = r("1dde")
        , d = r("b622")
        , h = r("2d00")
        , p = d("isConcatSpreadable")
        , m = 9007199254740991
        , g = "Maximum allowed index exceeded"
        , y = h >= 51 || !a((function() {
          var e = [];
          return e[p] = !1,
          e.concat()[0] !== e
      }
      ))
        , b = f("concat")
        , v = function(e) {
          if (!o(e))
              return !1;
          var t = e[p];
          return void 0 !== t ? !!t : i(e)
      }
        , w = !y || !b;
      n({
          target: "Array",
          proto: !0,
          forced: w
      }, {
          concat: function(e) {
              var t, r, n, a, i, o = s(this), f = l(o, 0), d = 0;
              for (t = -1,
              n = arguments.length; t < n; t++)
                  if (i = -1 === t ? o : arguments[t],
                  v(i)) {
                      if (a = c(i.length),
                      d + a > m)
                          throw TypeError(g);
                      for (r = 0; r < a; r++,
                      d++)
                          r in i && u(f, d, i[r])
                  } else {
                      if (d >= m)
                          throw TypeError(g);
                      u(f, d++, i)
                  }
              return f.length = d,
              f
          }
      })
  },
  "9a1f": function(e, t, r) {
      var n = r("825a")
        , a = r("35a1");
      e.exports = function(e) {
          var t = a(e);
          if ("function" != typeof t)
              throw TypeError(String(e) + " is not iterable");
          return n(t.call(e))
      }
  },
  "9a8c": function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("145e")
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("copyWithin", (function(e, t) {
          return a.call(i(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
      }
      ))
  },
  "9bdd": function(e, t, r) {
      var n = r("825a");
      e.exports = function(e, t, r, a) {
          try {
              return a ? t(n(r)[0], r[1]) : t(r)
          } catch (o) {
              var i = e["return"];
              throw void 0 !== i && n(i.call(e)),
              o
          }
      }
  },
  "9bf2": function(e, t, r) {
      var n = r("83ab")
        , a = r("0cfb")
        , i = r("825a")
        , o = r("c04e")
        , s = Object.defineProperty;
      t.f = n ? s : function(e, t, r) {
          if (i(e),
          t = o(t, !0),
          i(r),
          a)
              try {
                  return s(e, t, r)
              } catch (n) {}
          if ("get"in r || "set"in r)
              throw TypeError("Accessors not supported");
          return "value"in r && (e[t] = r.value),
          e
      }
  },
  "9ed3": function(e, t, r) {
      "use strict";
      var n = r("ae93").IteratorPrototype
        , a = r("7c73")
        , i = r("5c6c")
        , o = r("d44e")
        , s = r("3f8c")
        , c = function() {
          return this
      };
      e.exports = function(e, t, r) {
          var u = t + " Iterator";
          return e.prototype = a(n, {
              next: i(1, r)
          }),
          o(e, u, !1, !0),
          s[u] = c,
          e
      }
  },
  "9f7f": function(e, t, r) {
      "use strict";
      var n = r("d039");
      function a(e, t) {
          return RegExp(e, t)
      }
      t.UNSUPPORTED_Y = n((function() {
          var e = a("a", "y");
          return e.lastIndex = 2,
          null != e.exec("abcd")
      }
      )),
      t.BROKEN_CARET = n((function() {
          var e = a("^r", "gy");
          return e.lastIndex = 2,
          null != e.exec("str")
      }
      ))
  },
  a046: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("20f8");
          class a {
              constructor(t) {
                  this.position = 0,
                  this.numBuffer = e.alloc(10),
                  this.fileInfo = t || {}
              }
              async readToken(t, r) {
                  const a = e.alloc(t.len)
                    , i = await this.readBuffer(a, {
                      position: r
                  });
                  if (i < t.len)
                      throw new n.EndOfStreamError;
                  return t.get(a, 0)
              }
              async peekToken(t, r=this.position) {
                  const a = e.alloc(t.len)
                    , i = await this.peekBuffer(a, {
                      position: r
                  });
                  if (i < t.len)
                      throw new n.EndOfStreamError;
                  return t.get(a, 0)
              }
              async readNumber(e) {
                  const t = await this.readBuffer(this.numBuffer, {
                      length: e.len
                  });
                  if (t < e.len)
                      throw new n.EndOfStreamError;
                  return e.get(this.numBuffer, 0)
              }
              async peekNumber(e) {
                  const t = await this.peekBuffer(this.numBuffer, {
                      length: e.len
                  });
                  if (t < e.len)
                      throw new n.EndOfStreamError;
                  return e.get(this.numBuffer, 0)
              }
              async close() {}
          }
          t.AbstractTokenizer = a
      }
      ).call(this, r("b639").Buffer)
  },
  a062: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("d3ab")
        , a = r("6f58")
        , i = r("7230")
        , o = r("4f83")
        , s = r("98a7")
        , c = r("34eb")
        , u = r("bda5")
        , l = r("599d")
        , f = c("music-metadata:parser:FLAC");
      var d;
      (function(e) {
          e[e["STREAMINFO"] = 0] = "STREAMINFO",
          e[e["PADDING"] = 1] = "PADDING",
          e[e["APPLICATION"] = 2] = "APPLICATION",
          e[e["SEEKTABLE"] = 3] = "SEEKTABLE",
          e[e["VORBIS_COMMENT"] = 4] = "VORBIS_COMMENT",
          e[e["CUESHEET"] = 5] = "CUESHEET",
          e[e["PICTURE"] = 6] = "PICTURE"
      }
      )(d || (d = {}));
      class h extends o.AbstractID3Parser {
          constructor() {
              super(...arguments),
              this.padding = 0
          }
          init(e, t, r) {
              return super.init(e, t, r),
              this.vorbisParser = new u.VorbisParser(e,r),
              this
          }
          async _parse() {
              const e = await this.tokenizer.readToken(s.FourCcToken);
              if ("fLaC" !== e.toString())
                  throw new Error("Invalid FLAC preamble");
              let t;
              do {
                  t = await this.tokenizer.readToken(p.BlockHeader),
                  await this.parseDataBlock(t)
              } while (!t.lastBlock);if (this.tokenizer.fileInfo.size && this.metadata.format.duration) {
                  const e = this.tokenizer.fileInfo.size - this.tokenizer.position;
                  this.metadata.setFormat("bitrate", 8 * e / this.metadata.format.duration)
              }
          }
          parseDataBlock(e) {
              switch (f(`blockHeader type=${e.type}, length=${e.length}`),
              e.type) {
              case d.STREAMINFO:
                  return this.parseBlockStreamInfo(e.length);
              case d.PADDING:
                  this.padding += e.length;
                  break;
              case d.APPLICATION:
                  break;
              case d.SEEKTABLE:
                  break;
              case d.VORBIS_COMMENT:
                  return this.parseComment(e.length);
              case d.CUESHEET:
                  break;
              case d.PICTURE:
                  return this.parsePicture(e.length).then();
              default:
                  this.metadata.addWarning("Unknown block type: " + e.type)
              }
              return this.tokenizer.ignore(e.length).then()
          }
          async parseBlockStreamInfo(e) {
              if (e !== p.BlockStreamInfo.len)
                  throw new Error("Unexpected block-stream-info length");
              const t = await this.tokenizer.readToken(p.BlockStreamInfo);
              this.metadata.setFormat("container", "FLAC"),
              this.metadata.setFormat("codec", "FLAC"),
              this.metadata.setFormat("lossless", !0),
              this.metadata.setFormat("numberOfChannels", t.channels),
              this.metadata.setFormat("bitsPerSample", t.bitsPerSample),
              this.metadata.setFormat("sampleRate", t.sampleRate),
              this.metadata.setFormat("duration", t.totalSamples / t.sampleRate)
          }
          async parseComment(e) {
              const t = await this.tokenizer.readToken(new a.BufferType(e))
                , r = new l.VorbisDecoder(t,0);
              r.readStringUtf8();
              const n = r.readInt32();
              for (let a = 0; a < n; a++) {
                  const e = r.parseUserComment();
                  this.vorbisParser.addTag(e.key, e.value)
              }
          }
          async parsePicture(e) {
              if (this.options.skipCovers)
                  return this.tokenizer.ignore(e);
              {
                  const t = await this.tokenizer.readToken(new i.VorbisPictureToken(e));
                  this.vorbisParser.addTag("METADATA_BLOCK_PICTURE", t)
              }
          }
      }
      t.FlacParser = h;
      class p {
      }
      p.BlockHeader = {
          len: 4,
          get: (e,t)=>({
              lastBlock: n.default.strtokBITSET.get(e, t, 7),
              type: n.default.getBitAllignedNumber(e, t, 1, 7),
              length: a.UINT24_BE.get(e, t + 1)
          })
      },
      p.BlockStreamInfo = {
          len: 34,
          get: (e,t)=>({
              minimumBlockSize: a.UINT16_BE.get(e, t),
              maximumBlockSize: a.UINT16_BE.get(e, t + 2) / 1e3,
              minimumFrameSize: a.UINT24_BE.get(e, t + 4),
              maximumFrameSize: a.UINT24_BE.get(e, t + 7),
              sampleRate: a.UINT24_BE.get(e, t + 10) >> 4,
              channels: n.default.getBitAllignedNumber(e, t + 12, 4, 3) + 1,
              bitsPerSample: n.default.getBitAllignedNumber(e, t + 12, 7, 5) + 1,
              totalSamples: n.default.getBitAllignedNumber(e, t + 13, 4, 36),
              fileMD5: new a.BufferType(16).get(e, t + 18)
          })
      }
  },
  a078: function(e, t, r) {
      var n = r("7b0b")
        , a = r("50c4")
        , i = r("35a1")
        , o = r("e95a")
        , s = r("0366")
        , c = r("ebb5").aTypedArrayConstructor;
      e.exports = function(e) {
          var t, r, u, l, f, d, h = n(e), p = arguments.length, m = p > 1 ? arguments[1] : void 0, g = void 0 !== m, y = i(h);
          if (void 0 != y && !o(y)) {
              f = y.call(h),
              d = f.next,
              h = [];
              while (!(l = d.call(f)).done)
                  h.push(l.value)
          }
          for (g && p > 2 && (m = s(m, arguments[2], 2)),
          r = a(h.length),
          u = new (c(this))(r),
          t = 0; r > t; t++)
              u[t] = g ? m(h[t], t) : h[t];
          return u
      }
  },
  a11b: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.pad.Iso10126 = {
              pad: function(t, r) {
                  var n = 4 * r
                    , a = n - t.sigBytes % n;
                  t.concat(e.lib.WordArray.random(a - 1)).concat(e.lib.WordArray.create([a << 24], 1))
              },
              unpad: function(e) {
                  var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                  e.sigBytes -= t
              }
          },
          e.pad.Iso10126
      }
      ))
  },
  a15b: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("44ad")
        , i = r("fc6a")
        , o = r("a640")
        , s = [].join
        , c = a != Object
        , u = o("join", ",");
      n({
          target: "Array",
          proto: !0,
          forced: c || !u
      }, {
          join: function(e) {
              return s.call(i(this), void 0 === e ? "," : e)
          }
      })
  },
  a40e: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("1132"), r("72fe"), r("2b79"), r("38ba"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.WordArray
                , a = r.BlockCipher
                , i = t.algo
                , o = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
                , s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
                , c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
                , u = [{
                  0: 8421888,
                  268435456: 32768,
                  536870912: 8421378,
                  805306368: 2,
                  1073741824: 512,
                  1342177280: 8421890,
                  1610612736: 8389122,
                  1879048192: 8388608,
                  2147483648: 514,
                  2415919104: 8389120,
                  2684354560: 33280,
                  2952790016: 8421376,
                  3221225472: 32770,
                  3489660928: 8388610,
                  3758096384: 0,
                  4026531840: 33282,
                  134217728: 0,
                  402653184: 8421890,
                  671088640: 33282,
                  939524096: 32768,
                  1207959552: 8421888,
                  1476395008: 512,
                  1744830464: 8421378,
                  2013265920: 2,
                  2281701376: 8389120,
                  2550136832: 33280,
                  2818572288: 8421376,
                  3087007744: 8389122,
                  3355443200: 8388610,
                  3623878656: 32770,
                  3892314112: 514,
                  4160749568: 8388608,
                  1: 32768,
                  268435457: 2,
                  536870913: 8421888,
                  805306369: 8388608,
                  1073741825: 8421378,
                  1342177281: 33280,
                  1610612737: 512,
                  1879048193: 8389122,
                  2147483649: 8421890,
                  2415919105: 8421376,
                  2684354561: 8388610,
                  2952790017: 33282,
                  3221225473: 514,
                  3489660929: 8389120,
                  3758096385: 32770,
                  4026531841: 0,
                  134217729: 8421890,
                  402653185: 8421376,
                  671088641: 8388608,
                  939524097: 512,
                  1207959553: 32768,
                  1476395009: 8388610,
                  1744830465: 2,
                  2013265921: 33282,
                  2281701377: 32770,
                  2550136833: 8389122,
                  2818572289: 514,
                  3087007745: 8421888,
                  3355443201: 8389120,
                  3623878657: 0,
                  3892314113: 33280,
                  4160749569: 8421378
              }, {
                  0: 1074282512,
                  16777216: 16384,
                  33554432: 524288,
                  50331648: 1074266128,
                  67108864: 1073741840,
                  83886080: 1074282496,
                  100663296: 1073758208,
                  117440512: 16,
                  134217728: 540672,
                  150994944: 1073758224,
                  167772160: 1073741824,
                  184549376: 540688,
                  201326592: 524304,
                  218103808: 0,
                  234881024: 16400,
                  251658240: 1074266112,
                  8388608: 1073758208,
                  25165824: 540688,
                  41943040: 16,
                  58720256: 1073758224,
                  75497472: 1074282512,
                  92274688: 1073741824,
                  109051904: 524288,
                  125829120: 1074266128,
                  142606336: 524304,
                  159383552: 0,
                  176160768: 16384,
                  192937984: 1074266112,
                  209715200: 1073741840,
                  226492416: 540672,
                  243269632: 1074282496,
                  260046848: 16400,
                  268435456: 0,
                  285212672: 1074266128,
                  301989888: 1073758224,
                  318767104: 1074282496,
                  335544320: 1074266112,
                  352321536: 16,
                  369098752: 540688,
                  385875968: 16384,
                  402653184: 16400,
                  419430400: 524288,
                  436207616: 524304,
                  452984832: 1073741840,
                  469762048: 540672,
                  486539264: 1073758208,
                  503316480: 1073741824,
                  520093696: 1074282512,
                  276824064: 540688,
                  293601280: 524288,
                  310378496: 1074266112,
                  327155712: 16384,
                  343932928: 1073758208,
                  360710144: 1074282512,
                  377487360: 16,
                  394264576: 1073741824,
                  411041792: 1074282496,
                  427819008: 1073741840,
                  444596224: 1073758224,
                  461373440: 524304,
                  478150656: 0,
                  494927872: 16400,
                  511705088: 1074266128,
                  528482304: 540672
              }, {
                  0: 260,
                  1048576: 0,
                  2097152: 67109120,
                  3145728: 65796,
                  4194304: 65540,
                  5242880: 67108868,
                  6291456: 67174660,
                  7340032: 67174400,
                  8388608: 67108864,
                  9437184: 67174656,
                  10485760: 65792,
                  11534336: 67174404,
                  12582912: 67109124,
                  13631488: 65536,
                  14680064: 4,
                  15728640: 256,
                  524288: 67174656,
                  1572864: 67174404,
                  2621440: 0,
                  3670016: 67109120,
                  4718592: 67108868,
                  5767168: 65536,
                  6815744: 65540,
                  7864320: 260,
                  8912896: 4,
                  9961472: 256,
                  11010048: 67174400,
                  12058624: 65796,
                  13107200: 65792,
                  14155776: 67109124,
                  15204352: 67174660,
                  16252928: 67108864,
                  16777216: 67174656,
                  17825792: 65540,
                  18874368: 65536,
                  19922944: 67109120,
                  20971520: 256,
                  22020096: 67174660,
                  23068672: 67108868,
                  24117248: 0,
                  25165824: 67109124,
                  26214400: 67108864,
                  27262976: 4,
                  28311552: 65792,
                  29360128: 67174400,
                  30408704: 260,
                  31457280: 65796,
                  32505856: 67174404,
                  17301504: 67108864,
                  18350080: 260,
                  19398656: 67174656,
                  20447232: 0,
                  21495808: 65540,
                  22544384: 67109120,
                  23592960: 256,
                  24641536: 67174404,
                  25690112: 65536,
                  26738688: 67174660,
                  27787264: 65796,
                  28835840: 67108868,
                  29884416: 67109124,
                  30932992: 67174400,
                  31981568: 4,
                  33030144: 65792
              }, {
                  0: 2151682048,
                  65536: 2147487808,
                  131072: 4198464,
                  196608: 2151677952,
                  262144: 0,
                  327680: 4198400,
                  393216: 2147483712,
                  458752: 4194368,
                  524288: 2147483648,
                  589824: 4194304,
                  655360: 64,
                  720896: 2147487744,
                  786432: 2151678016,
                  851968: 4160,
                  917504: 4096,
                  983040: 2151682112,
                  32768: 2147487808,
                  98304: 64,
                  163840: 2151678016,
                  229376: 2147487744,
                  294912: 4198400,
                  360448: 2151682112,
                  425984: 0,
                  491520: 2151677952,
                  557056: 4096,
                  622592: 2151682048,
                  688128: 4194304,
                  753664: 4160,
                  819200: 2147483648,
                  884736: 4194368,
                  950272: 4198464,
                  1015808: 2147483712,
                  1048576: 4194368,
                  1114112: 4198400,
                  1179648: 2147483712,
                  1245184: 0,
                  1310720: 4160,
                  1376256: 2151678016,
                  1441792: 2151682048,
                  1507328: 2147487808,
                  1572864: 2151682112,
                  1638400: 2147483648,
                  1703936: 2151677952,
                  1769472: 4198464,
                  1835008: 2147487744,
                  1900544: 4194304,
                  1966080: 64,
                  2031616: 4096,
                  1081344: 2151677952,
                  1146880: 2151682112,
                  1212416: 0,
                  1277952: 4198400,
                  1343488: 4194368,
                  1409024: 2147483648,
                  1474560: 2147487808,
                  1540096: 64,
                  1605632: 2147483712,
                  1671168: 4096,
                  1736704: 2147487744,
                  1802240: 2151678016,
                  1867776: 4160,
                  1933312: 2151682048,
                  1998848: 4194304,
                  2064384: 4198464
              }, {
                  0: 128,
                  4096: 17039360,
                  8192: 262144,
                  12288: 536870912,
                  16384: 537133184,
                  20480: 16777344,
                  24576: 553648256,
                  28672: 262272,
                  32768: 16777216,
                  36864: 537133056,
                  40960: 536871040,
                  45056: 553910400,
                  49152: 553910272,
                  53248: 0,
                  57344: 17039488,
                  61440: 553648128,
                  2048: 17039488,
                  6144: 553648256,
                  10240: 128,
                  14336: 17039360,
                  18432: 262144,
                  22528: 537133184,
                  26624: 553910272,
                  30720: 536870912,
                  34816: 537133056,
                  38912: 0,
                  43008: 553910400,
                  47104: 16777344,
                  51200: 536871040,
                  55296: 553648128,
                  59392: 16777216,
                  63488: 262272,
                  65536: 262144,
                  69632: 128,
                  73728: 536870912,
                  77824: 553648256,
                  81920: 16777344,
                  86016: 553910272,
                  90112: 537133184,
                  94208: 16777216,
                  98304: 553910400,
                  102400: 553648128,
                  106496: 17039360,
                  110592: 537133056,
                  114688: 262272,
                  118784: 536871040,
                  122880: 0,
                  126976: 17039488,
                  67584: 553648256,
                  71680: 16777216,
                  75776: 17039360,
                  79872: 537133184,
                  83968: 536870912,
                  88064: 17039488,
                  92160: 128,
                  96256: 553910272,
                  100352: 262272,
                  104448: 553910400,
                  108544: 0,
                  112640: 553648128,
                  116736: 16777344,
                  120832: 262144,
                  124928: 537133056,
                  129024: 536871040
              }, {
                  0: 268435464,
                  256: 8192,
                  512: 270532608,
                  768: 270540808,
                  1024: 268443648,
                  1280: 2097152,
                  1536: 2097160,
                  1792: 268435456,
                  2048: 0,
                  2304: 268443656,
                  2560: 2105344,
                  2816: 8,
                  3072: 270532616,
                  3328: 2105352,
                  3584: 8200,
                  3840: 270540800,
                  128: 270532608,
                  384: 270540808,
                  640: 8,
                  896: 2097152,
                  1152: 2105352,
                  1408: 268435464,
                  1664: 268443648,
                  1920: 8200,
                  2176: 2097160,
                  2432: 8192,
                  2688: 268443656,
                  2944: 270532616,
                  3200: 0,
                  3456: 270540800,
                  3712: 2105344,
                  3968: 268435456,
                  4096: 268443648,
                  4352: 270532616,
                  4608: 270540808,
                  4864: 8200,
                  5120: 2097152,
                  5376: 268435456,
                  5632: 268435464,
                  5888: 2105344,
                  6144: 2105352,
                  6400: 0,
                  6656: 8,
                  6912: 270532608,
                  7168: 8192,
                  7424: 268443656,
                  7680: 270540800,
                  7936: 2097160,
                  4224: 8,
                  4480: 2105344,
                  4736: 2097152,
                  4992: 268435464,
                  5248: 268443648,
                  5504: 8200,
                  5760: 270540808,
                  6016: 270532608,
                  6272: 270540800,
                  6528: 270532616,
                  6784: 8192,
                  7040: 2105352,
                  7296: 2097160,
                  7552: 0,
                  7808: 268435456,
                  8064: 268443656
              }, {
                  0: 1048576,
                  16: 33555457,
                  32: 1024,
                  48: 1049601,
                  64: 34604033,
                  80: 0,
                  96: 1,
                  112: 34603009,
                  128: 33555456,
                  144: 1048577,
                  160: 33554433,
                  176: 34604032,
                  192: 34603008,
                  208: 1025,
                  224: 1049600,
                  240: 33554432,
                  8: 34603009,
                  24: 0,
                  40: 33555457,
                  56: 34604032,
                  72: 1048576,
                  88: 33554433,
                  104: 33554432,
                  120: 1025,
                  136: 1049601,
                  152: 33555456,
                  168: 34603008,
                  184: 1048577,
                  200: 1024,
                  216: 34604033,
                  232: 1,
                  248: 1049600,
                  256: 33554432,
                  272: 1048576,
                  288: 33555457,
                  304: 34603009,
                  320: 1048577,
                  336: 33555456,
                  352: 34604032,
                  368: 1049601,
                  384: 1025,
                  400: 34604033,
                  416: 1049600,
                  432: 1,
                  448: 0,
                  464: 34603008,
                  480: 33554433,
                  496: 1024,
                  264: 1049600,
                  280: 33555457,
                  296: 34603009,
                  312: 1,
                  328: 33554432,
                  344: 1048576,
                  360: 1025,
                  376: 34604032,
                  392: 33554433,
                  408: 34603008,
                  424: 0,
                  440: 34604033,
                  456: 1049601,
                  472: 1024,
                  488: 33555456,
                  504: 1048577
              }, {
                  0: 134219808,
                  1: 131072,
                  2: 134217728,
                  3: 32,
                  4: 131104,
                  5: 134350880,
                  6: 134350848,
                  7: 2048,
                  8: 134348800,
                  9: 134219776,
                  10: 133120,
                  11: 134348832,
                  12: 2080,
                  13: 0,
                  14: 134217760,
                  15: 133152,
                  2147483648: 2048,
                  2147483649: 134350880,
                  2147483650: 134219808,
                  2147483651: 134217728,
                  2147483652: 134348800,
                  2147483653: 133120,
                  2147483654: 133152,
                  2147483655: 32,
                  2147483656: 134217760,
                  2147483657: 2080,
                  2147483658: 131104,
                  2147483659: 134350848,
                  2147483660: 0,
                  2147483661: 134348832,
                  2147483662: 134219776,
                  2147483663: 131072,
                  16: 133152,
                  17: 134350848,
                  18: 32,
                  19: 2048,
                  20: 134219776,
                  21: 134217760,
                  22: 134348832,
                  23: 131072,
                  24: 0,
                  25: 131104,
                  26: 134348800,
                  27: 134219808,
                  28: 134350880,
                  29: 133120,
                  30: 2080,
                  31: 134217728,
                  2147483664: 131072,
                  2147483665: 2048,
                  2147483666: 134348832,
                  2147483667: 133152,
                  2147483668: 32,
                  2147483669: 134348800,
                  2147483670: 134217728,
                  2147483671: 134219808,
                  2147483672: 134350880,
                  2147483673: 134217760,
                  2147483674: 134219776,
                  2147483675: 0,
                  2147483676: 133120,
                  2147483677: 2080,
                  2147483678: 131104,
                  2147483679: 134350848
              }]
                , l = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
                , f = i.DES = a.extend({
                  _doReset: function() {
                      for (var e = this._key, t = e.words, r = [], n = 0; n < 56; n++) {
                          var a = o[n] - 1;
                          r[n] = t[a >>> 5] >>> 31 - a % 32 & 1
                      }
                      for (var i = this._subKeys = [], u = 0; u < 16; u++) {
                          var l = i[u] = []
                            , f = c[u];
                          for (n = 0; n < 24; n++)
                              l[n / 6 | 0] |= r[(s[n] - 1 + f) % 28] << 31 - n % 6,
                              l[4 + (n / 6 | 0)] |= r[28 + (s[n + 24] - 1 + f) % 28] << 31 - n % 6;
                          l[0] = l[0] << 1 | l[0] >>> 31;
                          for (n = 1; n < 7; n++)
                              l[n] = l[n] >>> 4 * (n - 1) + 3;
                          l[7] = l[7] << 5 | l[7] >>> 27
                      }
                      var d = this._invSubKeys = [];
                      for (n = 0; n < 16; n++)
                          d[n] = i[15 - n]
                  },
                  encryptBlock: function(e, t) {
                      this._doCryptBlock(e, t, this._subKeys)
                  },
                  decryptBlock: function(e, t) {
                      this._doCryptBlock(e, t, this._invSubKeys)
                  },
                  _doCryptBlock: function(e, t, r) {
                      this._lBlock = e[t],
                      this._rBlock = e[t + 1],
                      d.call(this, 4, 252645135),
                      d.call(this, 16, 65535),
                      h.call(this, 2, 858993459),
                      h.call(this, 8, 16711935),
                      d.call(this, 1, 1431655765);
                      for (var n = 0; n < 16; n++) {
                          for (var a = r[n], i = this._lBlock, o = this._rBlock, s = 0, c = 0; c < 8; c++)
                              s |= u[c][((o ^ a[c]) & l[c]) >>> 0];
                          this._lBlock = o,
                          this._rBlock = i ^ s
                      }
                      var f = this._lBlock;
                      this._lBlock = this._rBlock,
                      this._rBlock = f,
                      d.call(this, 1, 1431655765),
                      h.call(this, 8, 16711935),
                      h.call(this, 2, 858993459),
                      d.call(this, 16, 65535),
                      d.call(this, 4, 252645135),
                      e[t] = this._lBlock,
                      e[t + 1] = this._rBlock
                  },
                  keySize: 2,
                  ivSize: 2,
                  blockSize: 2
              });
              function d(e, t) {
                  var r = (this._lBlock >>> e ^ this._rBlock) & t;
                  this._rBlock ^= r,
                  this._lBlock ^= r << e
              }
              function h(e, t) {
                  var r = (this._rBlock >>> e ^ this._lBlock) & t;
                  this._lBlock ^= r,
                  this._rBlock ^= r << e
              }
              t.DES = a._createHelper(f);
              var p = i.TripleDES = a.extend({
                  _doReset: function() {
                      var e = this._key
                        , t = e.words;
                      if (2 !== t.length && 4 !== t.length && t.length < 6)
                          throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                      var r = t.slice(0, 2)
                        , a = t.length < 4 ? t.slice(0, 2) : t.slice(2, 4)
                        , i = t.length < 6 ? t.slice(0, 2) : t.slice(4, 6);
                      this._des1 = f.createEncryptor(n.create(r)),
                      this._des2 = f.createEncryptor(n.create(a)),
                      this._des3 = f.createEncryptor(n.create(i))
                  },
                  encryptBlock: function(e, t) {
                      this._des1.encryptBlock(e, t),
                      this._des2.decryptBlock(e, t),
                      this._des3.encryptBlock(e, t)
                  },
                  decryptBlock: function(e, t) {
                      this._des3.decryptBlock(e, t),
                      this._des2.encryptBlock(e, t),
                      this._des1.decryptBlock(e, t)
                  },
                  keySize: 6,
                  ivSize: 2,
                  blockSize: 2
              });
              t.TripleDES = a._createHelper(p)
          }(),
          e.TripleDES
      }
      ))
  },
  a4e1: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("6f58")
        , i = r("53a8")
        , o = r("b85b")
        , s = r("4f83")
        , c = n("music-metadata:parser:musepack");
      class u extends s.AbstractID3Parser {
          async _parse() {
              const e = await this.tokenizer.peekToken(new a.StringType(3,"binary"));
              let t;
              switch (e) {
              case "MP+":
                  c("Musepack stream-version 7"),
                  t = new o.MpcSv7Parser;
                  break;
              case "MPC":
                  c("Musepack stream-version 8"),
                  t = new i.MpcSv8Parser;
                  break;
              default:
                  throw new Error("Invalid Musepack signature prefix")
              }
              return t.init(this.metadata, this.tokenizer, this.options),
              t.parse()
          }
      }
      t.default = u
  },
  a623: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("b727").every
        , i = r("a640")
        , o = r("ae40")
        , s = i("every")
        , c = o("every");
      n({
          target: "Array",
          proto: !0,
          forced: !s || !c
      }, {
          every: function(e) {
              return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  },
  a630: function(e, t, r) {
      var n = r("23e7")
        , a = r("4df4")
        , i = r("1c7e")
        , o = !i((function(e) {
          Array.from(e)
      }
      ));
      n({
          target: "Array",
          stat: !0,
          forced: o
      }, {
          from: a
      })
  },
  a640: function(e, t, r) {
      "use strict";
      var n = r("d039");
      e.exports = function(e, t) {
          var r = [][e];
          return !!r && n((function() {
              r.call(null, t || function() {
                  throw 1
              }
              , 1)
          }
          ))
      }
  },
  a691: function(e, t) {
      var r = Math.ceil
        , n = Math.floor;
      e.exports = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
      }
  },
  a817: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.pad.AnsiX923 = {
              pad: function(e, t) {
                  var r = e.sigBytes
                    , n = 4 * t
                    , a = n - r % n
                    , i = r + a - 1;
                  e.clamp(),
                  e.words[i >>> 2] |= a << 24 - i % 4 * 8,
                  e.sigBytes += a
              },
              unpad: function(e) {
                  var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                  e.sigBytes -= t
              }
          },
          e.pad.Ansix923
      }
      ))
  },
  a869: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("37d4")
        , a = r("fa6f")
        , i = r("de36")
        , o = r("e035")
        , s = r("15bf")
        , c = r("feb6")
        , u = r("8f14")
        , l = r("46d9")
        , f = r("7e1e");
      class d {
          constructor() {
              this.tagMappers = {},
              [new n.ID3v1TagMapper, new o.ID3v22TagMapper, new a.ID3v24TagMapper, new c.MP4TagMapper, new c.MP4TagMapper, new u.VorbisTagMapper, new s.APEv2TagMapper, new i.AsfTagMapper, new l.RiffInfoTagMapper, new f.MatroskaTagMapper].forEach(e=>{
                  this.registerTagMapper(e)
              }
              )
          }
          mapTag(e, t, r) {
              const n = this.tagMappers[e];
              if (n)
                  return this.tagMappers[e].mapGenericTag(t, r);
              throw new Error("No generic tag mapper defined for tag-format: " + e)
          }
          registerTagMapper(e) {
              for (const t of e.tagTypes)
                  this.tagMappers[t] = e
          }
      }
      t.CombinedTagMapper = d
  },
  a8ce: function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.WordArray
                , a = t.enc;
              a.Utf16 = a.Utf16BE = {
                  stringify: function(e) {
                      for (var t = e.words, r = e.sigBytes, n = [], a = 0; a < r; a += 2) {
                          var i = t[a >>> 2] >>> 16 - a % 4 * 8 & 65535;
                          n.push(String.fromCharCode(i))
                      }
                      return n.join("")
                  },
                  parse: function(e) {
                      for (var t = e.length, r = [], a = 0; a < t; a++)
                          r[a >>> 1] |= e.charCodeAt(a) << 16 - a % 2 * 16;
                      return n.create(r, 2 * t)
                  }
              };
              function i(e) {
                  return e << 8 & 4278255360 | e >>> 8 & 16711935
              }
              a.Utf16LE = {
                  stringify: function(e) {
                      for (var t = e.words, r = e.sigBytes, n = [], a = 0; a < r; a += 2) {
                          var o = i(t[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
                          n.push(String.fromCharCode(o))
                      }
                      return n.join("")
                  },
                  parse: function(e) {
                      for (var t = e.length, r = [], a = 0; a < t; a++)
                          r[a >>> 1] |= i(e.charCodeAt(a) << 16 - a % 2 * 16);
                      return n.create(r, 2 * t)
                  }
              }
          }(),
          e.enc.Utf16
      }
      ))
  },
  a8ee: function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, "Decrypt", (function() {
          return s
      }
      ));
      r("ace4"),
      r("d3b7"),
      r("5cc6"),
      r("9a8c"),
      r("a975"),
      r("735e"),
      r("c1ac"),
      r("d139"),
      r("3a7b"),
      r("d5d6"),
      r("82f8"),
      r("e91f"),
      r("60bd"),
      r("5f96"),
      r("3280"),
      r("3fcc"),
      r("ca91"),
      r("25a1"),
      r("cd26"),
      r("3c5d"),
      r("2954"),
      r("649e"),
      r("219c"),
      r("170b"),
      r("b39a"),
      r("72f7"),
      r("96cf");
      var n = r("1da1")
        , a = r("fd2f")
        , i = r("06dc")
        , o = [0, 0, 0, 32, 102, 116, 121, 112];
      function s(e, t) {
          return c.apply(this, arguments)
      }
      function c() {
          return c = Object(n["a"])(regeneratorRuntime.mark((function e(t, r) {
              var n, s, c, u;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          Object(i["d"])(t);
                      case 2:
                          for (n = e.sent,
                          s = new Uint8Array(n),
                          c = 0; c < 8; ++c)
                              s[c] = o[c];
                          return u = new Blob([s],{
                              type: "audio/mp4"
                          }),
                          e.next = 8,
                          Object(a["Decrypt"])(u, r, "m4a", !1);
                      case 8:
                          return e.abrupt("return", e.sent);
                      case 9:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          c.apply(this, arguments)
      }
  },
  a975: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").every
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("every", (function(e) {
          return a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  a977: function(e, t) {
      e.exports = a,
      a.strict = i,
      a.loose = o;
      var r = Object.prototype.toString
        , n = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0
      };
      function a(e) {
          return i(e) || o(e)
      }
      function i(e) {
          return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
      }
      function o(e) {
          return n[r.call(e)]
      }
  },
  a981: function(e, t) {
      e.exports = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView
  },
  aad3: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58");
      class a {
          constructor(e) {
              if (this.len = e,
              e < 19)
                  throw new Error("ID-header-page 0 should be at least 19 bytes long")
          }
          get(e, t) {
              return {
                  magicSignature: new n.StringType(8,"ascii").get(e, t + 0),
                  version: e.readUInt8(t + 8),
                  channelCount: e.readUInt8(t + 9),
                  preSkip: e.readInt16LE(t + 10),
                  inputSampleRate: e.readInt32LE(t + 12),
                  outputGain: e.readInt16LE(t + 16),
                  channelMapping: e.readUInt8(t + 18)
              }
          }
      }
      t.IdHeader = a
  },
  aae9: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58");
      class a {
          constructor(e) {
              this.tokenizer = e,
              this.pos = 0,
              this.dword = void 0
          }
          async read(e) {
              while (void 0 === this.dword)
                  this.dword = await this.tokenizer.readToken(n.UINT32_LE);
              let t = this.dword;
              return this.pos += e,
              this.pos < 32 ? (t >>>= 32 - this.pos,
              t & (1 << e) - 1) : (this.pos -= 32,
              0 === this.pos ? (this.dword = void 0,
              t & (1 << e) - 1) : (this.dword = await this.tokenizer.readToken(n.UINT32_LE),
              this.pos && (t <<= this.pos,
              t |= this.dword >>> 32 - this.pos),
              t & (1 << e) - 1))
          }
          async ignore(e) {
              if (this.pos > 0) {
                  const t = 32 - this.pos;
                  this.dword = void 0,
                  e -= t,
                  this.pos = 0
              }
              const t = e % 32
                , r = (e - t) / 32;
              return await this.tokenizer.ignore(4 * r),
              this.read(t)
          }
      }
      t.BitReader = a
  },
  aaef: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          /** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
          return e.mode.CTRGladman = function() {
              var t = e.lib.BlockCipherMode.extend();
              function r(e) {
                  if (255 === (e >> 24 & 255)) {
                      var t = e >> 16 & 255
                        , r = e >> 8 & 255
                        , n = 255 & e;
                      255 === t ? (t = 0,
                      255 === r ? (r = 0,
                      255 === n ? n = 0 : ++n) : ++r) : ++t,
                      e = 0,
                      e += t << 16,
                      e += r << 8,
                      e += n
                  } else
                      e += 1 << 24;
                  return e
              }
              function n(e) {
                  return 0 === (e[0] = r(e[0])) && (e[1] = r(e[1])),
                  e
              }
              var a = t.Encryptor = t.extend({
                  processBlock: function(e, t) {
                      var r = this._cipher
                        , a = r.blockSize
                        , i = this._iv
                        , o = this._counter;
                      i && (o = this._counter = i.slice(0),
                      this._iv = void 0),
                      n(o);
                      var s = o.slice(0);
                      r.encryptBlock(s, 0);
                      for (var c = 0; c < a; c++)
                          e[t + c] ^= s[c]
                  }
              });
              return t.Decryptor = a,
              t
          }(),
          e.mode.CTRGladman
      }
      ))
  },
  ac1f: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("9263");
      n({
          target: "RegExp",
          proto: !0,
          forced: /./.exec !== a
      }, {
          exec: a
      })
  },
  ace4: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("d039")
        , i = r("621a")
        , o = r("825a")
        , s = r("23cb")
        , c = r("50c4")
        , u = r("4840")
        , l = i.ArrayBuffer
        , f = i.DataView
        , d = l.prototype.slice
        , h = a((function() {
          return !new l(2).slice(1, void 0).byteLength
      }
      ));
      n({
          target: "ArrayBuffer",
          proto: !0,
          unsafe: !0,
          forced: h
      }, {
          slice: function(e, t) {
              if (void 0 !== d && void 0 === t)
                  return d.call(o(this), e);
              var r = o(this).byteLength
                , n = s(e, r)
                , a = s(void 0 === t ? r : t, r)
                , i = new (u(this, l))(c(a - n))
                , h = new f(this)
                , p = new f(i)
                , m = 0;
              while (n < a)
                  p.setUint8(m++, h.getUint8(n++));
              return i
          }
      })
  },
  ad3a: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58");
      t.InfoTagHeaderTag = new n.StringType(4,"ascii"),
      t.LameEncoderVersion = new n.StringType(6,"ascii"),
      t.XingInfoTag = {
          len: 136,
          get: (e,t)=>({
              headerFlags: new n.BufferType(4).get(e, t),
              numFrames: n.UINT32_BE.get(e, t + 4),
              streamSize: n.UINT32_BE.get(e, t + 8),
              vbrScale: n.UINT32_BE.get(e, t + 112),
              codec: new n.StringType(9,"ascii").get(e, t + 116),
              infoTagRevision: n.UINT8.get(e, t + 125) >> 4,
              vbrMethod: 15 & n.UINT8.get(e, t + 125)
          })
      }
  },
  ad6d: function(e, t, r) {
      "use strict";
      var n = r("825a");
      e.exports = function() {
          var e = n(this)
            , t = "";
          return e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          e.dotAll && (t += "s"),
          e.unicode && (t += "u"),
          e.sticky && (t += "y"),
          t
      }
  },
  ad71: function(e, t, r) {
      "use strict";
      (function(t, n) {
          var a = r("966d");
          e.exports = k;
          var i, o = r("e3db");
          k.ReadableState = T;
          r("faa1").EventEmitter;
          var s = function(e, t) {
              return e.listeners(t).length
          }
            , c = r("429b")
            , u = r("8707").Buffer
            , l = t.Uint8Array || function() {}
          ;
          function f(e) {
              return u.from(e)
          }
          function d(e) {
              return u.isBuffer(e) || e instanceof l
          }
          var h = Object.create(r("3a7c"));
          h.inherits = r("3fb5");
          var p = r(0)
            , m = void 0;
          m = p && p.debuglog ? p.debuglog("stream") : function() {}
          ;
          var g, y = r("5e1a"), b = r("4681");
          h.inherits(k, c);
          var v = ["error", "close", "destroy", "pause", "resume"];
          function w(e, t, r) {
              if ("function" === typeof e.prependListener)
                  return e.prependListener(t, r);
              e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
          }
          function T(e, t) {
              i = i || r("b19a"),
              e = e || {};
              var n = t instanceof i;
              this.objectMode = !!e.objectMode,
              n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
              var a = e.highWaterMark
                , o = e.readableHighWaterMark
                , s = this.objectMode ? 16 : 16384;
              this.highWaterMark = a || 0 === a ? a : n && (o || 0 === o) ? o : s,
              this.highWaterMark = Math.floor(this.highWaterMark),
              this.buffer = new y,
              this.length = 0,
              this.pipes = null,
              this.pipesCount = 0,
              this.flowing = null,
              this.ended = !1,
              this.endEmitted = !1,
              this.reading = !1,
              this.sync = !0,
              this.needReadable = !1,
              this.emittedReadable = !1,
              this.readableListening = !1,
              this.resumeScheduled = !1,
              this.destroyed = !1,
              this.defaultEncoding = e.defaultEncoding || "utf8",
              this.awaitDrain = 0,
              this.readingMore = !1,
              this.decoder = null,
              this.encoding = null,
              e.encoding && (g || (g = r("7d72").StringDecoder),
              this.decoder = new g(e.encoding),
              this.encoding = e.encoding)
          }
          function k(e) {
              if (i = i || r("b19a"),
              !(this instanceof k))
                  return new k(e);
              this._readableState = new T(e,this),
              this.readable = !0,
              e && ("function" === typeof e.read && (this._read = e.read),
              "function" === typeof e.destroy && (this._destroy = e.destroy)),
              c.call(this)
          }
          function _(e, t, r, n, a) {
              var i, o = e._readableState;
              null === t ? (o.reading = !1,
              C(e, o)) : (a || (i = E(o, t)),
              i ? e.emit("error", i) : o.objectMode || t && t.length > 0 ? ("string" === typeof t || o.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = f(t)),
              n ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : S(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1,
              o.decoder && !r ? (t = o.decoder.write(t),
              o.objectMode || 0 !== t.length ? S(e, o, t, !1) : M(e, o)) : S(e, o, t, !1))) : n || (o.reading = !1));
              return I(o)
          }
          function S(e, t, r, n) {
              t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r),
              e.read(0)) : (t.length += t.objectMode ? 1 : r.length,
              n ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && P(e)),
              M(e, t)
          }
          function E(e, t) {
              var r;
              return d(t) || "string" === typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")),
              r
          }
          function I(e) {
              return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          }
          Object.defineProperty(k.prototype, "destroyed", {
              get: function() {
                  return void 0 !== this._readableState && this._readableState.destroyed
              },
              set: function(e) {
                  this._readableState && (this._readableState.destroyed = e)
              }
          }),
          k.prototype.destroy = b.destroy,
          k.prototype._undestroy = b.undestroy,
          k.prototype._destroy = function(e, t) {
              this.push(null),
              t(e)
          }
          ,
          k.prototype.push = function(e, t) {
              var r, n = this._readableState;
              return n.objectMode ? r = !0 : "string" === typeof e && (t = t || n.defaultEncoding,
              t !== n.encoding && (e = u.from(e, t),
              t = ""),
              r = !0),
              _(this, e, t, !1, r)
          }
          ,
          k.prototype.unshift = function(e) {
              return _(this, e, null, !0, !1)
          }
          ,
          k.prototype.isPaused = function() {
              return !1 === this._readableState.flowing
          }
          ,
          k.prototype.setEncoding = function(e) {
              return g || (g = r("7d72").StringDecoder),
              this._readableState.decoder = new g(e),
              this._readableState.encoding = e,
              this
          }
          ;
          var A = 8388608;
          function x(e) {
              return e >= A ? e = A : (e--,
              e |= e >>> 1,
              e |= e >>> 2,
              e |= e >>> 4,
              e |= e >>> 8,
              e |= e >>> 16,
              e++),
              e
          }
          function B(e, t) {
              return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = x(e)),
              e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
              0))
          }
          function C(e, t) {
              if (!t.ended) {
                  if (t.decoder) {
                      var r = t.decoder.end();
                      r && r.length && (t.buffer.push(r),
                      t.length += t.objectMode ? 1 : r.length)
                  }
                  t.ended = !0,
                  P(e)
              }
          }
          function P(e) {
              var t = e._readableState;
              t.needReadable = !1,
              t.emittedReadable || (m("emitReadable", t.flowing),
              t.emittedReadable = !0,
              t.sync ? a.nextTick(O, e) : O(e))
          }
          function O(e) {
              m("emit readable"),
              e.emit("readable"),
              U(e)
          }
          function M(e, t) {
              t.readingMore || (t.readingMore = !0,
              a.nextTick(D, e, t))
          }
          function D(e, t) {
              var r = t.length;
              while (!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark) {
                  if (m("maybeReadMore read 0"),
                  e.read(0),
                  r === t.length)
                      break;
                  r = t.length
              }
              t.readingMore = !1
          }
          function R(e) {
              return function() {
                  var t = e._readableState;
                  m("pipeOnDrain", t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain && s(e, "data") && (t.flowing = !0,
                  U(e))
              }
          }
          function F(e) {
              m("readable nexttick read 0"),
              e.read(0)
          }
          function L(e, t) {
              t.resumeScheduled || (t.resumeScheduled = !0,
              a.nextTick(z, e, t))
          }
          function z(e, t) {
              t.reading || (m("resume read 0"),
              e.read(0)),
              t.resumeScheduled = !1,
              t.awaitDrain = 0,
              e.emit("resume"),
              U(e),
              t.flowing && !t.reading && e.read(0)
          }
          function U(e) {
              var t = e._readableState;
              m("flow", t.flowing);
              while (t.flowing && null !== e.read())
                  ;
          }
          function N(e, t) {
              return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
              t.buffer.clear()) : r = j(e, t.buffer, t.decoder),
              r);
              var r
          }
          function j(e, t, r) {
              var n;
              return e < t.head.data.length ? (n = t.head.data.slice(0, e),
              t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? H(e, t) : W(e, t),
              n
          }
          function H(e, t) {
              var r = t.head
                , n = 1
                , a = r.data;
              e -= a.length;
              while (r = r.next) {
                  var i = r.data
                    , o = e > i.length ? i.length : e;
                  if (o === i.length ? a += i : a += i.slice(0, e),
                  e -= o,
                  0 === e) {
                      o === i.length ? (++n,
                      r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                      r.data = i.slice(o));
                      break
                  }
                  ++n
              }
              return t.length -= n,
              a
          }
          function W(e, t) {
              var r = u.allocUnsafe(e)
                , n = t.head
                , a = 1;
              n.data.copy(r),
              e -= n.data.length;
              while (n = n.next) {
                  var i = n.data
                    , o = e > i.length ? i.length : e;
                  if (i.copy(r, r.length - e, 0, o),
                  e -= o,
                  0 === e) {
                      o === i.length ? (++a,
                      n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                      n.data = i.slice(o));
                      break
                  }
                  ++a
              }
              return t.length -= a,
              r
          }
          function q(e) {
              var t = e._readableState;
              if (t.length > 0)
                  throw new Error('"endReadable()" called on non-empty stream');
              t.endEmitted || (t.ended = !0,
              a.nextTick(X, t, e))
          }
          function X(e, t) {
              e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
              t.readable = !1,
              t.emit("end"))
          }
          function $(e, t) {
              for (var r = 0, n = e.length; r < n; r++)
                  if (e[r] === t)
                      return r;
              return -1
          }
          k.prototype.read = function(e) {
              m("read", e),
              e = parseInt(e, 10);
              var t = this._readableState
                , r = e;
              if (0 !== e && (t.emittedReadable = !1),
              0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                  return m("read: emitReadable", t.length, t.ended),
                  0 === t.length && t.ended ? q(this) : P(this),
                  null;
              if (e = B(e, t),
              0 === e && t.ended)
                  return 0 === t.length && q(this),
                  null;
              var n, a = t.needReadable;
              return m("need readable", a),
              (0 === t.length || t.length - e < t.highWaterMark) && (a = !0,
              m("length less than watermark", a)),
              t.ended || t.reading ? (a = !1,
              m("reading or ended", a)) : a && (m("do read"),
              t.reading = !0,
              t.sync = !0,
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              t.sync = !1,
              t.reading || (e = B(r, t))),
              n = e > 0 ? N(e, t) : null,
              null === n ? (t.needReadable = !0,
              e = 0) : t.length -= e,
              0 === t.length && (t.ended || (t.needReadable = !0),
              r !== e && t.ended && q(this)),
              null !== n && this.emit("data", n),
              n
          }
          ,
          k.prototype._read = function(e) {
              this.emit("error", new Error("_read() is not implemented"))
          }
          ,
          k.prototype.pipe = function(e, t) {
              var r = this
                , i = this._readableState;
              switch (i.pipesCount) {
              case 0:
                  i.pipes = e;
                  break;
              case 1:
                  i.pipes = [i.pipes, e];
                  break;
              default:
                  i.pipes.push(e);
                  break
              }
              i.pipesCount += 1,
              m("pipe count=%d opts=%j", i.pipesCount, t);
              var o = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr
                , c = o ? l : T;
              function u(e, t) {
                  m("onunpipe"),
                  e === r && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0,
                  h())
              }
              function l() {
                  m("onend"),
                  e.end()
              }
              i.endEmitted ? a.nextTick(c) : r.once("end", c),
              e.on("unpipe", u);
              var f = R(r);
              e.on("drain", f);
              var d = !1;
              function h() {
                  m("cleanup"),
                  e.removeListener("close", b),
                  e.removeListener("finish", v),
                  e.removeListener("drain", f),
                  e.removeListener("error", y),
                  e.removeListener("unpipe", u),
                  r.removeListener("end", l),
                  r.removeListener("end", T),
                  r.removeListener("data", g),
                  d = !0,
                  !i.awaitDrain || e._writableState && !e._writableState.needDrain || f()
              }
              var p = !1;
              function g(t) {
                  m("ondata"),
                  p = !1;
                  var n = e.write(t);
                  !1 !== n || p || ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== $(i.pipes, e)) && !d && (m("false write response, pause", r._readableState.awaitDrain),
                  r._readableState.awaitDrain++,
                  p = !0),
                  r.pause())
              }
              function y(t) {
                  m("onerror", t),
                  T(),
                  e.removeListener("error", y),
                  0 === s(e, "error") && e.emit("error", t)
              }
              function b() {
                  e.removeListener("finish", v),
                  T()
              }
              function v() {
                  m("onfinish"),
                  e.removeListener("close", b),
                  T()
              }
              function T() {
                  m("unpipe"),
                  r.unpipe(e)
              }
              return r.on("data", g),
              w(e, "error", y),
              e.once("close", b),
              e.once("finish", v),
              e.emit("pipe", r),
              i.flowing || (m("pipe resume"),
              r.resume()),
              e
          }
          ,
          k.prototype.unpipe = function(e) {
              var t = this._readableState
                , r = {
                  hasUnpiped: !1
              };
              if (0 === t.pipesCount)
                  return this;
              if (1 === t.pipesCount)
                  return e && e !== t.pipes ? this : (e || (e = t.pipes),
                  t.pipes = null,
                  t.pipesCount = 0,
                  t.flowing = !1,
                  e && e.emit("unpipe", this, r),
                  this);
              if (!e) {
                  var n = t.pipes
                    , a = t.pipesCount;
                  t.pipes = null,
                  t.pipesCount = 0,
                  t.flowing = !1;
                  for (var i = 0; i < a; i++)
                      n[i].emit("unpipe", this, r);
                  return this
              }
              var o = $(t.pipes, e);
              return -1 === o ? this : (t.pipes.splice(o, 1),
              t.pipesCount -= 1,
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, r),
              this)
          }
          ,
          k.prototype.on = function(e, t) {
              var r = c.prototype.on.call(this, e, t);
              if ("data" === e)
                  !1 !== this._readableState.flowing && this.resume();
              else if ("readable" === e) {
                  var n = this._readableState;
                  n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
                  n.emittedReadable = !1,
                  n.reading ? n.length && P(this) : a.nextTick(F, this))
              }
              return r
          }
          ,
          k.prototype.addListener = k.prototype.on,
          k.prototype.resume = function() {
              var e = this._readableState;
              return e.flowing || (m("resume"),
              e.flowing = !0,
              L(this, e)),
              this
          }
          ,
          k.prototype.pause = function() {
              return m("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing && (m("pause"),
              this._readableState.flowing = !1,
              this.emit("pause")),
              this
          }
          ,
          k.prototype.wrap = function(e) {
              var t = this
                , r = this._readableState
                , n = !1;
              for (var a in e.on("end", (function() {
                  if (m("wrapped end"),
                  r.decoder && !r.ended) {
                      var e = r.decoder.end();
                      e && e.length && t.push(e)
                  }
                  t.push(null)
              }
              )),
              e.on("data", (function(a) {
                  if (m("wrapped data"),
                  r.decoder && (a = r.decoder.write(a)),
                  (!r.objectMode || null !== a && void 0 !== a) && (r.objectMode || a && a.length)) {
                      var i = t.push(a);
                      i || (n = !0,
                      e.pause())
                  }
              }
              )),
              e)
                  void 0 === this[a] && "function" === typeof e[a] && (this[a] = function(t) {
                      return function() {
                          return e[t].apply(e, arguments)
                      }
                  }(a));
              for (var i = 0; i < v.length; i++)
                  e.on(v[i], this.emit.bind(this, v[i]));
              return this._read = function(t) {
                  m("wrapped _read", t),
                  n && (n = !1,
                  e.resume())
              }
              ,
              this
          }
          ,
          Object.defineProperty(k.prototype, "readableHighWaterMark", {
              enumerable: !1,
              get: function() {
                  return this._readableState.highWaterMark
              }
          }),
          k._fromList = N
      }
      ).call(this, r("c8ba"), r("4362"))
  },
  ae40: function(e, t, r) {
      var n = r("83ab")
        , a = r("d039")
        , i = r("5135")
        , o = Object.defineProperty
        , s = {}
        , c = function(e) {
          throw e
      };
      e.exports = function(e, t) {
          if (i(s, e))
              return s[e];
          t || (t = {});
          var r = [][e]
            , u = !!i(t, "ACCESSORS") && t.ACCESSORS
            , l = i(t, 0) ? t[0] : c
            , f = i(t, 1) ? t[1] : void 0;
          return s[e] = !!r && !a((function() {
              if (u && !n)
                  return !0;
              var e = {
                  length: -1
              };
              u ? o(e, 1, {
                  enumerable: !0,
                  get: c
              }) : e[1] = 1,
              r.call(e, l, f)
          }
          ))
      }
  },
  ae93: function(e, t, r) {
      "use strict";
      var n, a, i, o = r("e163"), s = r("9112"), c = r("5135"), u = r("b622"), l = r("c430"), f = u("iterator"), d = !1, h = function() {
          return this
      };
      [].keys && (i = [].keys(),
      "next"in i ? (a = o(o(i)),
      a !== Object.prototype && (n = a)) : d = !0),
      void 0 == n && (n = {}),
      l || c(n, f) || s(n, f, h),
      e.exports = {
          IteratorPrototype: n,
          BUGGY_SAFARI_ITERATORS: d
      }
  },
  b041: function(e, t, r) {
      "use strict";
      var n = r("00ee")
        , a = r("f5df");
      e.exports = n ? {}.toString : function() {
          return "[object " + a(this) + "]"
      }
  },
  b0c0: function(e, t, r) {
      var n = r("83ab")
        , a = r("9bf2").f
        , i = Function.prototype
        , o = i.toString
        , s = /^\s*function ([^ (]*)/
        , c = "name";
      !n || c in i || a(i, c, {
          configurable: !0,
          get: function() {
              try {
                  return o.call(this).match(s)[1]
              } catch (e) {
                  return ""
              }
          }
      })
  },
  b120: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("31de");
      t.elements = {
          440786851: {
              name: "ebml",
              container: {
                  17030: {
                      name: "ebmlVersion",
                      value: n.DataType.uint
                  },
                  17143: {
                      name: "ebmlReadVersion",
                      value: n.DataType.uint
                  },
                  17138: {
                      name: "ebmlMaxIDWidth",
                      value: n.DataType.uint
                  },
                  17139: {
                      name: "ebmlMaxSizeWidth",
                      value: n.DataType.uint
                  },
                  17026: {
                      name: "docType",
                      value: n.DataType.string
                  },
                  17031: {
                      name: "docTypeVersion",
                      value: n.DataType.uint
                  },
                  17029: {
                      name: "docTypeReadVersion",
                      value: n.DataType.uint
                  }
              }
          },
          408125543: {
              name: "segment",
              container: {
                  290298740: {
                      name: "seekHead",
                      container: {
                          19899: {
                              name: "seek",
                              container: {
                                  21419: {
                                      name: "seekId",
                                      value: n.DataType.binary
                                  },
                                  21420: {
                                      name: "seekPosition",
                                      value: n.DataType.uint
                                  }
                              }
                          }
                      }
                  },
                  357149030: {
                      name: "info",
                      container: {
                          29604: {
                              name: "uid",
                              value: n.DataType.uid
                          },
                          29572: {
                              name: "filename",
                              value: n.DataType.string
                          },
                          3979555: {
                              name: "prevUID",
                              value: n.DataType.uid
                          },
                          3965867: {
                              name: "prevFilename",
                              value: n.DataType.string
                          },
                          4110627: {
                              name: "nextUID",
                              value: n.DataType.uid
                          },
                          4096955: {
                              name: "nextFilename",
                              value: n.DataType.string
                          },
                          2807729: {
                              name: "timecodeScale",
                              value: n.DataType.uint
                          },
                          17545: {
                              name: "duration",
                              value: n.DataType.float
                          },
                          17505: {
                              name: "dateUTC",
                              value: n.DataType.uint
                          },
                          31657: {
                              name: "title",
                              value: n.DataType.string
                          },
                          19840: {
                              name: "muxingApp",
                              value: n.DataType.string
                          },
                          22337: {
                              name: "writingApp",
                              value: n.DataType.string
                          }
                      }
                  },
                  524531317: {
                      name: "cluster",
                      multiple: !0,
                      container: {
                          231: {
                              name: "timecode",
                              value: n.DataType.uid
                          },
                          163: {
                              name: "unknown",
                              value: n.DataType.binary
                          },
                          167: {
                              name: "position",
                              value: n.DataType.uid
                          },
                          171: {
                              name: "prevSize",
                              value: n.DataType.uid
                          }
                      }
                  },
                  374648427: {
                      name: "tracks",
                      container: {
                          174: {
                              name: "entries",
                              multiple: !0,
                              container: {
                                  215: {
                                      name: "trackNumber",
                                      value: n.DataType.uint
                                  },
                                  29637: {
                                      name: "uid",
                                      value: n.DataType.uid
                                  },
                                  131: {
                                      name: "trackType",
                                      value: n.DataType.uint
                                  },
                                  185: {
                                      name: "flagEnabled",
                                      value: n.DataType.bool
                                  },
                                  136: {
                                      name: "flagDefault",
                                      value: n.DataType.bool
                                  },
                                  21930: {
                                      name: "flagForced",
                                      value: n.DataType.bool
                                  },
                                  156: {
                                      name: "flagLacing",
                                      value: n.DataType.bool
                                  },
                                  28135: {
                                      name: "minCache",
                                      value: n.DataType.uint
                                  },
                                  28136: {
                                      name: "maxCache",
                                      value: n.DataType.uint
                                  },
                                  2352003: {
                                      name: "defaultDuration",
                                      value: n.DataType.uint
                                  },
                                  2306383: {
                                      name: "timecodeScale",
                                      value: n.DataType.float
                                  },
                                  21358: {
                                      name: "name",
                                      value: n.DataType.string
                                  },
                                  2274716: {
                                      name: "language",
                                      value: n.DataType.string
                                  },
                                  134: {
                                      name: "codecID",
                                      value: n.DataType.string
                                  },
                                  25506: {
                                      name: "codecPrivate",
                                      value: n.DataType.binary
                                  },
                                  2459272: {
                                      name: "codecName",
                                      value: n.DataType.string
                                  },
                                  3839639: {
                                      name: "codecSettings",
                                      value: n.DataType.string
                                  },
                                  3883072: {
                                      name: "codecInfoUrl",
                                      value: n.DataType.string
                                  },
                                  2536e3: {
                                      name: "codecDownloadUrl",
                                      value: n.DataType.string
                                  },
                                  170: {
                                      name: "codecDecodeAll",
                                      value: n.DataType.bool
                                  },
                                  28587: {
                                      name: "trackOverlay",
                                      value: n.DataType.uint
                                  },
                                  224: {
                                      name: "video",
                                      container: {
                                          154: {
                                              name: "flagInterlaced",
                                              value: n.DataType.bool
                                          },
                                          21432: {
                                              name: "stereoMode",
                                              value: n.DataType.uint
                                          },
                                          176: {
                                              name: "pixelWidth",
                                              value: n.DataType.uint
                                          },
                                          186: {
                                              name: "pixelHeight",
                                              value: n.DataType.uint
                                          },
                                          21680: {
                                              name: "displayWidth",
                                              value: n.DataType.uint
                                          },
                                          21690: {
                                              name: "displayHeight",
                                              value: n.DataType.uint
                                          },
                                          21683: {
                                              name: "aspectRatioType",
                                              value: n.DataType.uint
                                          },
                                          3061028: {
                                              name: "colourSpace",
                                              value: n.DataType.uint
                                          },
                                          3126563: {
                                              name: "gammaValue",
                                              value: n.DataType.float
                                          }
                                      }
                                  },
                                  225: {
                                      name: "audio",
                                      container: {
                                          181: {
                                              name: "samplingFrequency",
                                              value: n.DataType.float
                                          },
                                          30901: {
                                              name: "outputSamplingFrequency",
                                              value: n.DataType.float
                                          },
                                          159: {
                                              name: "channels",
                                              value: n.DataType.uint
                                          },
                                          148: {
                                              name: "channels",
                                              value: n.DataType.uint
                                          },
                                          32123: {
                                              name: "channelPositions",
                                              value: n.DataType.binary
                                          },
                                          25188: {
                                              name: "bitDepth",
                                              value: n.DataType.uint
                                          }
                                      }
                                  },
                                  28032: {
                                      name: "contentEncodings",
                                      container: {
                                          25152: {
                                              name: "contentEncoding",
                                              container: {
                                                  20529: {
                                                      name: "order",
                                                      value: n.DataType.uint
                                                  },
                                                  20530: {
                                                      name: "scope",
                                                      value: n.DataType.bool
                                                  },
                                                  20531: {
                                                      name: "type",
                                                      value: n.DataType.uint
                                                  },
                                                  20532: {
                                                      name: "contentEncoding",
                                                      container: {
                                                          16980: {
                                                              name: "contentCompAlgo",
                                                              value: n.DataType.uint
                                                          },
                                                          16981: {
                                                              name: "contentCompSettings",
                                                              value: n.DataType.binary
                                                          }
                                                      }
                                                  },
                                                  20533: {
                                                      name: "contentEncoding",
                                                      container: {
                                                          18401: {
                                                              name: "contentEncAlgo",
                                                              value: n.DataType.uint
                                                          },
                                                          18402: {
                                                              name: "contentEncKeyID",
                                                              value: n.DataType.binary
                                                          },
                                                          18403: {
                                                              name: "contentSignature ",
                                                              value: n.DataType.binary
                                                          },
                                                          18404: {
                                                              name: "ContentSigKeyID  ",
                                                              value: n.DataType.binary
                                                          },
                                                          18405: {
                                                              name: "contentSigAlgo ",
                                                              value: n.DataType.uint
                                                          },
                                                          18406: {
                                                              name: "contentSigHashAlgo ",
                                                              value: n.DataType.uint
                                                          }
                                                      }
                                                  },
                                                  25188: {
                                                      name: "bitDepth",
                                                      value: n.DataType.uint
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  },
                  475249515: {
                      name: "cues",
                      container: {
                          187: {
                              name: "cuePoint",
                              container: {
                                  179: {
                                      name: "cueTime",
                                      value: n.DataType.uid
                                  },
                                  183: {
                                      name: "positions",
                                      container: {
                                          247: {
                                              name: "track",
                                              value: n.DataType.uint
                                          },
                                          241: {
                                              name: "clusterPosition",
                                              value: n.DataType.uint
                                          },
                                          21368: {
                                              name: "blockNumber",
                                              value: n.DataType.uint
                                          },
                                          234: {
                                              name: "codecState",
                                              value: n.DataType.uint
                                          },
                                          219: {
                                              name: "reference",
                                              container: {
                                                  150: {
                                                      name: "time",
                                                      value: n.DataType.uint
                                                  },
                                                  151: {
                                                      name: "cluster",
                                                      value: n.DataType.uint
                                                  },
                                                  21343: {
                                                      name: "number",
                                                      value: n.DataType.uint
                                                  },
                                                  235: {
                                                      name: "codecState",
                                                      value: n.DataType.uint
                                                  }
                                              }
                                          },
                                          240: {
                                              name: "relativePosition",
                                              value: n.DataType.uint
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  },
                  423732329: {
                      name: "attachments",
                      container: {
                          24999: {
                              name: "attachedFiles",
                              multiple: !0,
                              container: {
                                  18046: {
                                      name: "description",
                                      value: n.DataType.string
                                  },
                                  18030: {
                                      name: "name",
                                      value: n.DataType.string
                                  },
                                  18016: {
                                      name: "mimeType",
                                      value: n.DataType.string
                                  },
                                  18012: {
                                      name: "data",
                                      value: n.DataType.binary
                                  },
                                  18094: {
                                      name: "uid",
                                      value: n.DataType.uid
                                  }
                              }
                          }
                      }
                  },
                  272869232: {
                      name: "chapters",
                      container: {
                          17849: {
                              name: "editionEntry",
                              container: {
                                  182: {
                                      name: "chapterAtom",
                                      container: {
                                          29636: {
                                              name: "uid",
                                              value: n.DataType.uid
                                          },
                                          145: {
                                              name: "timeStart",
                                              value: n.DataType.uint
                                          },
                                          146: {
                                              name: "timeEnd",
                                              value: n.DataType.uid
                                          },
                                          152: {
                                              name: "hidden",
                                              value: n.DataType.bool
                                          },
                                          17816: {
                                              name: "enabled",
                                              value: n.DataType.uid
                                          },
                                          143: {
                                              name: "track",
                                              container: {
                                                  137: {
                                                      name: "trackNumber",
                                                      value: n.DataType.uid
                                                  },
                                                  128: {
                                                      name: "display",
                                                      container: {
                                                          133: {
                                                              name: "string",
                                                              value: n.DataType.string
                                                          },
                                                          17276: {
                                                              name: "language ",
                                                              value: n.DataType.string
                                                          },
                                                          17278: {
                                                              name: "country ",
                                                              value: n.DataType.string
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  },
                  307544935: {
                      name: "tags",
                      container: {
                          29555: {
                              name: "tag",
                              multiple: !0,
                              container: {
                                  25536: {
                                      name: "target",
                                      container: {
                                          25541: {
                                              name: "tagTrackUID",
                                              value: n.DataType.uid
                                          },
                                          25540: {
                                              name: "tagChapterUID",
                                              value: n.DataType.uint
                                          },
                                          25542: {
                                              name: "tagAttachmentUID",
                                              value: n.DataType.uid
                                          },
                                          25546: {
                                              name: "targetType",
                                              value: n.DataType.string
                                          },
                                          26826: {
                                              name: "targetTypeValue",
                                              value: n.DataType.uint
                                          },
                                          25545: {
                                              name: "tagEditionUID",
                                              value: n.DataType.uid
                                          }
                                      }
                                  },
                                  26568: {
                                      name: "simpleTags",
                                      multiple: !0,
                                      container: {
                                          17827: {
                                              name: "name",
                                              value: n.DataType.string
                                          },
                                          17543: {
                                              name: "string",
                                              value: n.DataType.string
                                          },
                                          17541: {
                                              name: "binary",
                                              value: n.DataType.binary
                                          },
                                          17530: {
                                              name: "language",
                                              value: n.DataType.string
                                          },
                                          17531: {
                                              name: "languageIETF",
                                              value: n.DataType.string
                                          },
                                          17540: {
                                              name: "default",
                                              value: n.DataType.bool
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  },
  b19a: function(e, t, r) {
      "use strict";
      var n = r("966d")
        , a = Object.keys || function(e) {
          var t = [];
          for (var r in e)
              t.push(r);
          return t
      }
      ;
      e.exports = f;
      var i = Object.create(r("3a7c"));
      i.inherits = r("3fb5");
      var o = r("ad71")
        , s = r("dc14");
      i.inherits(f, o);
      for (var c = a(s.prototype), u = 0; u < c.length; u++) {
          var l = c[u];
          f.prototype[l] || (f.prototype[l] = s.prototype[l])
      }
      function f(e) {
          if (!(this instanceof f))
              return new f(e);
          o.call(this, e),
          s.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          this.allowHalfOpen = !0,
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once("end", d)
      }
      function d() {
          this.allowHalfOpen || this._writableState.ended || n.nextTick(h, this)
      }
      function h(e) {
          e.end()
      }
      Object.defineProperty(f.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function() {
              return this._writableState.highWaterMark
          }
      }),
      Object.defineProperty(f.prototype, "destroyed", {
          get: function() {
              return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
          },
          set: function(e) {
              void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
              this._writableState.destroyed = e)
          }
      }),
      f.prototype._destroy = function(e, t) {
          this.push(null),
          this.end(),
          n.nextTick(t, e)
      }
  },
  b39a: function(e, t, r) {
      "use strict";
      var n = r("da84")
        , a = r("ebb5")
        , i = r("d039")
        , o = n.Int8Array
        , s = a.aTypedArray
        , c = a.exportTypedArrayMethod
        , u = [].toLocaleString
        , l = [].slice
        , f = !!o && i((function() {
          u.call(new o(1))
      }
      ))
        , d = i((function() {
          return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString()
      }
      )) || !i((function() {
          o.prototype.toLocaleString.call([1, 2])
      }
      ));
      c("toLocaleString", (function() {
          return u.apply(f ? l.call(s(this)) : s(this), arguments)
      }
      ), d)
  },
  b40f: function(e, t, r) {
      "use strict";
      /*!
* content-type
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
      var n = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
        , a = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
        , i = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/
        , o = /\\([\u000b\u0020-\u00ff])/g
        , s = /([\\"])/g
        , c = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
      function u(e) {
          if (!e || "object" !== typeof e)
              throw new TypeError("argument obj is required");
          var t = e.parameters
            , r = e.type;
          if (!r || !c.test(r))
              throw new TypeError("invalid type");
          var n = r;
          if (t && "object" === typeof t)
              for (var a, o = Object.keys(t).sort(), s = 0; s < o.length; s++) {
                  if (a = o[s],
                  !i.test(a))
                      throw new TypeError("invalid parameter name");
                  n += "; " + a + "=" + d(t[a])
              }
          return n
      }
      function l(e) {
          if (!e)
              throw new TypeError("argument string is required");
          var t = "object" === typeof e ? f(e) : e;
          if ("string" !== typeof t)
              throw new TypeError("argument string is required to be a string");
          var r = t.indexOf(";")
            , a = -1 !== r ? t.substr(0, r).trim() : t.trim();
          if (!c.test(a))
              throw new TypeError("invalid media type");
          var i = new h(a.toLowerCase());
          if (-1 !== r) {
              var s, u, l;
              n.lastIndex = r;
              while (u = n.exec(t)) {
                  if (u.index !== r)
                      throw new TypeError("invalid parameter format");
                  r += u[0].length,
                  s = u[1].toLowerCase(),
                  l = u[2],
                  '"' === l[0] && (l = l.substr(1, l.length - 2).replace(o, "$1")),
                  i.parameters[s] = l
              }
              if (r !== t.length)
                  throw new TypeError("invalid parameter format")
          }
          return i
      }
      function f(e) {
          var t;
          if ("function" === typeof e.getHeader ? t = e.getHeader("content-type") : "object" === typeof e.headers && (t = e.headers && e.headers["content-type"]),
          "string" !== typeof t)
              throw new TypeError("content-type header is missing from object");
          return t
      }
      function d(e) {
          var t = String(e);
          if (i.test(t))
              return t;
          if (t.length > 0 && !a.test(t))
              throw new TypeError("invalid parameter value");
          return '"' + t.replace(s, "\\$1") + '"'
      }
      function h(e) {
          this.parameters = Object.create(null),
          this.type = e
      }
      t.format = u,
      t.parse = l
  },
  b575: function(e, t, r) {
      var n, a, i, o, s, c, u, l, f = r("da84"), d = r("06cf").f, h = r("c6b6"), p = r("2cf4").set, m = r("1cdc"), g = f.MutationObserver || f.WebKitMutationObserver, y = f.process, b = f.Promise, v = "process" == h(y), w = d(f, "queueMicrotask"), T = w && w.value;
      T || (n = function() {
          var e, t;
          v && (e = y.domain) && e.exit();
          while (a) {
              t = a.fn,
              a = a.next;
              try {
                  t()
              } catch (r) {
                  throw a ? o() : i = void 0,
                  r
              }
          }
          i = void 0,
          e && e.enter()
      }
      ,
      v ? o = function() {
          y.nextTick(n)
      }
      : g && !m ? (s = !0,
      c = document.createTextNode(""),
      new g(n).observe(c, {
          characterData: !0
      }),
      o = function() {
          c.data = s = !s
      }
      ) : b && b.resolve ? (u = b.resolve(void 0),
      l = u.then,
      o = function() {
          l.call(u, n)
      }
      ) : o = function() {
          p.call(f, n)
      }
      ),
      e.exports = T || function(e) {
          var t = {
              fn: e,
              next: void 0
          };
          i && (i.next = t),
          a || (a = t,
          o()),
          i = t
      }
  },
  b622: function(e, t, r) {
      var n = r("da84")
        , a = r("5692")
        , i = r("5135")
        , o = r("90e3")
        , s = r("4930")
        , c = r("fdbf")
        , u = a("wks")
        , l = n.Symbol
        , f = c ? l : l && l.withoutSetter || o;
      e.exports = function(e) {
          return i(u, e) || (s && i(l, e) ? u[e] = l[e] : u[e] = f("Symbol." + e)),
          u[e]
      }
  },
  b639: function(e, t, r) {
      "use strict";
      (function(e) {
          /*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <http://feross.org>
* @license  MIT
*/
          var n = r("1fb5")
            , a = r("9152")
            , i = r("e3db");
          function o() {
              try {
                  var e = new Uint8Array(1);
                  return e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                          return 42
                      }
                  },
                  42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
              } catch (t) {
                  return !1
              }
          }
          function s() {
              return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
          }
          function c(e, t) {
              if (s() < t)
                  throw new RangeError("Invalid typed array length");
              return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t),
              e.__proto__ = u.prototype) : (null === e && (e = new u(t)),
              e.length = t),
              e
          }
          function u(e, t, r) {
              if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u))
                  return new u(e,t,r);
              if ("number" === typeof e) {
                  if ("string" === typeof t)
                      throw new Error("If encoding is specified then the first argument must be a string");
                  return h(this, e)
              }
              return l(this, e, t, r)
          }
          function l(e, t, r, n) {
              if ("number" === typeof t)
                  throw new TypeError('"value" argument must not be a number');
              return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? g(e, t, r, n) : "string" === typeof t ? p(e, t, r) : y(e, t)
          }
          function f(e) {
              if ("number" !== typeof e)
                  throw new TypeError('"size" argument must be a number');
              if (e < 0)
                  throw new RangeError('"size" argument must not be negative')
          }
          function d(e, t, r, n) {
              return f(t),
              t <= 0 ? c(e, t) : void 0 !== r ? "string" === typeof n ? c(e, t).fill(r, n) : c(e, t).fill(r) : c(e, t)
          }
          function h(e, t) {
              if (f(t),
              e = c(e, t < 0 ? 0 : 0 | b(t)),
              !u.TYPED_ARRAY_SUPPORT)
                  for (var r = 0; r < t; ++r)
                      e[r] = 0;
              return e
          }
          function p(e, t, r) {
              if ("string" === typeof r && "" !== r || (r = "utf8"),
              !u.isEncoding(r))
                  throw new TypeError('"encoding" must be a valid string encoding');
              var n = 0 | w(t, r);
              e = c(e, n);
              var a = e.write(t, r);
              return a !== n && (e = e.slice(0, a)),
              e
          }
          function m(e, t) {
              var r = t.length < 0 ? 0 : 0 | b(t.length);
              e = c(e, r);
              for (var n = 0; n < r; n += 1)
                  e[n] = 255 & t[n];
              return e
          }
          function g(e, t, r, n) {
              if (t.byteLength,
              r < 0 || t.byteLength < r)
                  throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
              return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,r) : new Uint8Array(t,r,n),
              u.TYPED_ARRAY_SUPPORT ? (e = t,
              e.__proto__ = u.prototype) : e = m(e, t),
              e
          }
          function y(e, t) {
              if (u.isBuffer(t)) {
                  var r = 0 | b(t.length);
                  return e = c(e, r),
                  0 === e.length ? e : (t.copy(e, 0, 0, r),
                  e)
              }
              if (t) {
                  if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                      return "number" !== typeof t.length || te(t.length) ? c(e, 0) : m(e, t);
                  if ("Buffer" === t.type && i(t.data))
                      return m(e, t.data)
              }
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
          }
          function b(e) {
              if (e >= s())
                  throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
              return 0 | e
          }
          function v(e) {
              return +e != e && (e = 0),
              u.alloc(+e)
          }
          function w(e, t) {
              if (u.isBuffer(e))
                  return e.length;
              if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                  return e.byteLength;
              "string" !== typeof e && (e = "" + e);
              var r = e.length;
              if (0 === r)
                  return 0;
              for (var n = !1; ; )
                  switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                      return r;
                  case "utf8":
                  case "utf-8":
                  case void 0:
                      return K(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return 2 * r;
                  case "hex":
                      return r >>> 1;
                  case "base64":
                      return Q(e).length;
                  default:
                      if (n)
                          return K(e).length;
                      t = ("" + t).toLowerCase(),
                      n = !0
                  }
          }
          function T(e, t, r) {
              var n = !1;
              if ((void 0 === t || t < 0) && (t = 0),
              t > this.length)
                  return "";
              if ((void 0 === r || r > this.length) && (r = this.length),
              r <= 0)
                  return "";
              if (r >>>= 0,
              t >>>= 0,
              r <= t)
                  return "";
              e || (e = "utf8");
              while (1)
                  switch (e) {
                  case "hex":
                      return L(this, t, r);
                  case "utf8":
                  case "utf-8":
                      return O(this, t, r);
                  case "ascii":
                      return R(this, t, r);
                  case "latin1":
                  case "binary":
                      return F(this, t, r);
                  case "base64":
                      return P(this, t, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return z(this, t, r);
                  default:
                      if (n)
                          throw new TypeError("Unknown encoding: " + e);
                      e = (e + "").toLowerCase(),
                      n = !0
                  }
          }
          function k(e, t, r) {
              var n = e[t];
              e[t] = e[r],
              e[r] = n
          }
          function _(e, t, r, n, a) {
              if (0 === e.length)
                  return -1;
              if ("string" === typeof r ? (n = r,
              r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
              r = +r,
              isNaN(r) && (r = a ? 0 : e.length - 1),
              r < 0 && (r = e.length + r),
              r >= e.length) {
                  if (a)
                      return -1;
                  r = e.length - 1
              } else if (r < 0) {
                  if (!a)
                      return -1;
                  r = 0
              }
              if ("string" === typeof t && (t = u.from(t, n)),
              u.isBuffer(t))
                  return 0 === t.length ? -1 : S(e, t, r, n, a);
              if ("number" === typeof t)
                  return t &= 255,
                  u.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : S(e, [t], r, n, a);
              throw new TypeError("val must be string, number or Buffer")
          }
          function S(e, t, r, n, a) {
              var i, o = 1, s = e.length, c = t.length;
              if (void 0 !== n && (n = String(n).toLowerCase(),
              "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                  if (e.length < 2 || t.length < 2)
                      return -1;
                  o = 2,
                  s /= 2,
                  c /= 2,
                  r /= 2
              }
              function u(e, t) {
                  return 1 === o ? e[t] : e.readUInt16BE(t * o)
              }
              if (a) {
                  var l = -1;
                  for (i = r; i < s; i++)
                      if (u(e, i) === u(t, -1 === l ? 0 : i - l)) {
                          if (-1 === l && (l = i),
                          i - l + 1 === c)
                              return l * o
                      } else
                          -1 !== l && (i -= i - l),
                          l = -1
              } else
                  for (r + c > s && (r = s - c),
                  i = r; i >= 0; i--) {
                      for (var f = !0, d = 0; d < c; d++)
                          if (u(e, i + d) !== u(t, d)) {
                              f = !1;
                              break
                          }
                      if (f)
                          return i
                  }
              return -1
          }
          function E(e, t, r, n) {
              r = Number(r) || 0;
              var a = e.length - r;
              n ? (n = Number(n),
              n > a && (n = a)) : n = a;
              var i = t.length;
              if (i % 2 !== 0)
                  throw new TypeError("Invalid hex string");
              n > i / 2 && (n = i / 2);
              for (var o = 0; o < n; ++o) {
                  var s = parseInt(t.substr(2 * o, 2), 16);
                  if (isNaN(s))
                      return o;
                  e[r + o] = s
              }
              return o
          }
          function I(e, t, r, n) {
              return ee(K(t, e.length - r), e, r, n)
          }
          function A(e, t, r, n) {
              return ee(Z(t), e, r, n)
          }
          function x(e, t, r, n) {
              return A(e, t, r, n)
          }
          function B(e, t, r, n) {
              return ee(Q(t), e, r, n)
          }
          function C(e, t, r, n) {
              return ee(J(t, e.length - r), e, r, n)
          }
          function P(e, t, r) {
              return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
          }
          function O(e, t, r) {
              r = Math.min(e.length, r);
              var n = []
                , a = t;
              while (a < r) {
                  var i, o, s, c, u = e[a], l = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (a + f <= r)
                      switch (f) {
                      case 1:
                          u < 128 && (l = u);
                          break;
                      case 2:
                          i = e[a + 1],
                          128 === (192 & i) && (c = (31 & u) << 6 | 63 & i,
                          c > 127 && (l = c));
                          break;
                      case 3:
                          i = e[a + 1],
                          o = e[a + 2],
                          128 === (192 & i) && 128 === (192 & o) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & o,
                          c > 2047 && (c < 55296 || c > 57343) && (l = c));
                          break;
                      case 4:
                          i = e[a + 1],
                          o = e[a + 2],
                          s = e[a + 3],
                          128 === (192 & i) && 128 === (192 & o) && 128 === (192 & s) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & o) << 6 | 63 & s,
                          c > 65535 && c < 1114112 && (l = c))
                      }
                  null === l ? (l = 65533,
                  f = 1) : l > 65535 && (l -= 65536,
                  n.push(l >>> 10 & 1023 | 55296),
                  l = 56320 | 1023 & l),
                  n.push(l),
                  a += f
              }
              return D(n)
          }
          t.Buffer = u,
          t.SlowBuffer = v,
          t.INSPECT_MAX_BYTES = 50,
          u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : o(),
          t.kMaxLength = s(),
          u.poolSize = 8192,
          u._augment = function(e) {
              return e.__proto__ = u.prototype,
              e
          }
          ,
          u.from = function(e, t, r) {
              return l(null, e, t, r)
          }
          ,
          u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
          u.__proto__ = Uint8Array,
          "undefined" !== typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0
          })),
          u.alloc = function(e, t, r) {
              return d(null, e, t, r)
          }
          ,
          u.allocUnsafe = function(e) {
              return h(null, e)
          }
          ,
          u.allocUnsafeSlow = function(e) {
              return h(null, e)
          }
          ,
          u.isBuffer = function(e) {
              return !(null == e || !e._isBuffer)
          }
          ,
          u.compare = function(e, t) {
              if (!u.isBuffer(e) || !u.isBuffer(t))
                  throw new TypeError("Arguments must be Buffers");
              if (e === t)
                  return 0;
              for (var r = e.length, n = t.length, a = 0, i = Math.min(r, n); a < i; ++a)
                  if (e[a] !== t[a]) {
                      r = e[a],
                      n = t[a];
                      break
                  }
              return r < n ? -1 : n < r ? 1 : 0
          }
          ,
          u.isEncoding = function(e) {
              switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                  return !0;
              default:
                  return !1
              }
          }
          ,
          u.concat = function(e, t) {
              if (!i(e))
                  throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e.length)
                  return u.alloc(0);
              var r;
              if (void 0 === t)
                  for (t = 0,
                  r = 0; r < e.length; ++r)
                      t += e[r].length;
              var n = u.allocUnsafe(t)
                , a = 0;
              for (r = 0; r < e.length; ++r) {
                  var o = e[r];
                  if (!u.isBuffer(o))
                      throw new TypeError('"list" argument must be an Array of Buffers');
                  o.copy(n, a),
                  a += o.length
              }
              return n
          }
          ,
          u.byteLength = w,
          u.prototype._isBuffer = !0,
          u.prototype.swap16 = function() {
              var e = this.length;
              if (e % 2 !== 0)
                  throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var t = 0; t < e; t += 2)
                  k(this, t, t + 1);
              return this
          }
          ,
          u.prototype.swap32 = function() {
              var e = this.length;
              if (e % 4 !== 0)
                  throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var t = 0; t < e; t += 4)
                  k(this, t, t + 3),
                  k(this, t + 1, t + 2);
              return this
          }
          ,
          u.prototype.swap64 = function() {
              var e = this.length;
              if (e % 8 !== 0)
                  throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var t = 0; t < e; t += 8)
                  k(this, t, t + 7),
                  k(this, t + 1, t + 6),
                  k(this, t + 2, t + 5),
                  k(this, t + 3, t + 4);
              return this
          }
          ,
          u.prototype.toString = function() {
              var e = 0 | this.length;
              return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : T.apply(this, arguments)
          }
          ,
          u.prototype.equals = function(e) {
              if (!u.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
              return this === e || 0 === u.compare(this, e)
          }
          ,
          u.prototype.inspect = function() {
              var e = ""
                , r = t.INSPECT_MAX_BYTES;
              return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
              this.length > r && (e += " ... ")),
              "<Buffer " + e + ">"
          }
          ,
          u.prototype.compare = function(e, t, r, n, a) {
              if (!u.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
              if (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === a && (a = this.length),
              t < 0 || r > e.length || n < 0 || a > this.length)
                  throw new RangeError("out of range index");
              if (n >= a && t >= r)
                  return 0;
              if (n >= a)
                  return -1;
              if (t >= r)
                  return 1;
              if (t >>>= 0,
              r >>>= 0,
              n >>>= 0,
              a >>>= 0,
              this === e)
                  return 0;
              for (var i = a - n, o = r - t, s = Math.min(i, o), c = this.slice(n, a), l = e.slice(t, r), f = 0; f < s; ++f)
                  if (c[f] !== l[f]) {
                      i = c[f],
                      o = l[f];
                      break
                  }
              return i < o ? -1 : o < i ? 1 : 0
          }
          ,
          u.prototype.includes = function(e, t, r) {
              return -1 !== this.indexOf(e, t, r)
          }
          ,
          u.prototype.indexOf = function(e, t, r) {
              return _(this, e, t, r, !0)
          }
          ,
          u.prototype.lastIndexOf = function(e, t, r) {
              return _(this, e, t, r, !1)
          }
          ,
          u.prototype.write = function(e, t, r, n) {
              if (void 0 === t)
                  n = "utf8",
                  r = this.length,
                  t = 0;
              else if (void 0 === r && "string" === typeof t)
                  n = t,
                  r = this.length,
                  t = 0;
              else {
                  if (!isFinite(t))
                      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  t |= 0,
                  isFinite(r) ? (r |= 0,
                  void 0 === n && (n = "utf8")) : (n = r,
                  r = void 0)
              }
              var a = this.length - t;
              if ((void 0 === r || r > a) && (r = a),
              e.length > 0 && (r < 0 || t < 0) || t > this.length)
                  throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              for (var i = !1; ; )
                  switch (n) {
                  case "hex":
                      return E(this, e, t, r);
                  case "utf8":
                  case "utf-8":
                      return I(this, e, t, r);
                  case "ascii":
                      return A(this, e, t, r);
                  case "latin1":
                  case "binary":
                      return x(this, e, t, r);
                  case "base64":
                      return B(this, e, t, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return C(this, e, t, r);
                  default:
                      if (i)
                          throw new TypeError("Unknown encoding: " + n);
                      n = ("" + n).toLowerCase(),
                      i = !0
                  }
          }
          ,
          u.prototype.toJSON = function() {
              return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
              }
          }
          ;
          var M = 4096;
          function D(e) {
              var t = e.length;
              if (t <= M)
                  return String.fromCharCode.apply(String, e);
              var r = ""
                , n = 0;
              while (n < t)
                  r += String.fromCharCode.apply(String, e.slice(n, n += M));
              return r
          }
          function R(e, t, r) {
              var n = "";
              r = Math.min(e.length, r);
              for (var a = t; a < r; ++a)
                  n += String.fromCharCode(127 & e[a]);
              return n
          }
          function F(e, t, r) {
              var n = "";
              r = Math.min(e.length, r);
              for (var a = t; a < r; ++a)
                  n += String.fromCharCode(e[a]);
              return n
          }
          function L(e, t, r) {
              var n = e.length;
              (!t || t < 0) && (t = 0),
              (!r || r < 0 || r > n) && (r = n);
              for (var a = "", i = t; i < r; ++i)
                  a += Y(e[i]);
              return a
          }
          function z(e, t, r) {
              for (var n = e.slice(t, r), a = "", i = 0; i < n.length; i += 2)
                  a += String.fromCharCode(n[i] + 256 * n[i + 1]);
              return a
          }
          function U(e, t, r) {
              if (e % 1 !== 0 || e < 0)
                  throw new RangeError("offset is not uint");
              if (e + t > r)
                  throw new RangeError("Trying to access beyond buffer length")
          }
          function N(e, t, r, n, a, i) {
              if (!u.isBuffer(e))
                  throw new TypeError('"buffer" argument must be a Buffer instance');
              if (t > a || t < i)
                  throw new RangeError('"value" argument is out of bounds');
              if (r + n > e.length)
                  throw new RangeError("Index out of range")
          }
          function j(e, t, r, n) {
              t < 0 && (t = 65535 + t + 1);
              for (var a = 0, i = Math.min(e.length - r, 2); a < i; ++a)
                  e[r + a] = (t & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a)
          }
          function H(e, t, r, n) {
              t < 0 && (t = 4294967295 + t + 1);
              for (var a = 0, i = Math.min(e.length - r, 4); a < i; ++a)
                  e[r + a] = t >>> 8 * (n ? a : 3 - a) & 255
          }
          function W(e, t, r, n, a, i) {
              if (r + n > e.length)
                  throw new RangeError("Index out of range");
              if (r < 0)
                  throw new RangeError("Index out of range")
          }
          function q(e, t, r, n, i) {
              return i || W(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
              a.write(e, t, r, n, 23, 4),
              r + 4
          }
          function X(e, t, r, n, i) {
              return i || W(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
              a.write(e, t, r, n, 52, 8),
              r + 8
          }
          u.prototype.slice = function(e, t) {
              var r, n = this.length;
              if (e = ~~e,
              t = void 0 === t ? n : ~~t,
              e < 0 ? (e += n,
              e < 0 && (e = 0)) : e > n && (e = n),
              t < 0 ? (t += n,
              t < 0 && (t = 0)) : t > n && (t = n),
              t < e && (t = e),
              u.TYPED_ARRAY_SUPPORT)
                  r = this.subarray(e, t),
                  r.__proto__ = u.prototype;
              else {
                  var a = t - e;
                  r = new u(a,void 0);
                  for (var i = 0; i < a; ++i)
                      r[i] = this[i + e]
              }
              return r
          }
          ,
          u.prototype.readUIntLE = function(e, t, r) {
              e |= 0,
              t |= 0,
              r || U(e, t, this.length);
              var n = this[e]
                , a = 1
                , i = 0;
              while (++i < t && (a *= 256))
                  n += this[e + i] * a;
              return n
          }
          ,
          u.prototype.readUIntBE = function(e, t, r) {
              e |= 0,
              t |= 0,
              r || U(e, t, this.length);
              var n = this[e + --t]
                , a = 1;
              while (t > 0 && (a *= 256))
                  n += this[e + --t] * a;
              return n
          }
          ,
          u.prototype.readUInt8 = function(e, t) {
              return t || U(e, 1, this.length),
              this[e]
          }
          ,
          u.prototype.readUInt16LE = function(e, t) {
              return t || U(e, 2, this.length),
              this[e] | this[e + 1] << 8
          }
          ,
          u.prototype.readUInt16BE = function(e, t) {
              return t || U(e, 2, this.length),
              this[e] << 8 | this[e + 1]
          }
          ,
          u.prototype.readUInt32LE = function(e, t) {
              return t || U(e, 4, this.length),
              (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
          }
          ,
          u.prototype.readUInt32BE = function(e, t) {
              return t || U(e, 4, this.length),
              16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
          }
          ,
          u.prototype.readIntLE = function(e, t, r) {
              e |= 0,
              t |= 0,
              r || U(e, t, this.length);
              var n = this[e]
                , a = 1
                , i = 0;
              while (++i < t && (a *= 256))
                  n += this[e + i] * a;
              return a *= 128,
              n >= a && (n -= Math.pow(2, 8 * t)),
              n
          }
          ,
          u.prototype.readIntBE = function(e, t, r) {
              e |= 0,
              t |= 0,
              r || U(e, t, this.length);
              var n = t
                , a = 1
                , i = this[e + --n];
              while (n > 0 && (a *= 256))
                  i += this[e + --n] * a;
              return a *= 128,
              i >= a && (i -= Math.pow(2, 8 * t)),
              i
          }
          ,
          u.prototype.readInt8 = function(e, t) {
              return t || U(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          }
          ,
          u.prototype.readInt16LE = function(e, t) {
              t || U(e, 2, this.length);
              var r = this[e] | this[e + 1] << 8;
              return 32768 & r ? 4294901760 | r : r
          }
          ,
          u.prototype.readInt16BE = function(e, t) {
              t || U(e, 2, this.length);
              var r = this[e + 1] | this[e] << 8;
              return 32768 & r ? 4294901760 | r : r
          }
          ,
          u.prototype.readInt32LE = function(e, t) {
              return t || U(e, 4, this.length),
              this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
          }
          ,
          u.prototype.readInt32BE = function(e, t) {
              return t || U(e, 4, this.length),
              this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
          }
          ,
          u.prototype.readFloatLE = function(e, t) {
              return t || U(e, 4, this.length),
              a.read(this, e, !0, 23, 4)
          }
          ,
          u.prototype.readFloatBE = function(e, t) {
              return t || U(e, 4, this.length),
              a.read(this, e, !1, 23, 4)
          }
          ,
          u.prototype.readDoubleLE = function(e, t) {
              return t || U(e, 8, this.length),
              a.read(this, e, !0, 52, 8)
          }
          ,
          u.prototype.readDoubleBE = function(e, t) {
              return t || U(e, 8, this.length),
              a.read(this, e, !1, 52, 8)
          }
          ,
          u.prototype.writeUIntLE = function(e, t, r, n) {
              if (e = +e,
              t |= 0,
              r |= 0,
              !n) {
                  var a = Math.pow(2, 8 * r) - 1;
                  N(this, e, t, r, a, 0)
              }
              var i = 1
                , o = 0;
              this[t] = 255 & e;
              while (++o < r && (i *= 256))
                  this[t + o] = e / i & 255;
              return t + r
          }
          ,
          u.prototype.writeUIntBE = function(e, t, r, n) {
              if (e = +e,
              t |= 0,
              r |= 0,
              !n) {
                  var a = Math.pow(2, 8 * r) - 1;
                  N(this, e, t, r, a, 0)
              }
              var i = r - 1
                , o = 1;
              this[t + i] = 255 & e;
              while (--i >= 0 && (o *= 256))
                  this[t + i] = e / o & 255;
              return t + r
          }
          ,
          u.prototype.writeUInt8 = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              this[t] = 255 & e,
              t + 1
          }
          ,
          u.prototype.writeUInt16LE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
              this[t + 1] = e >>> 8) : j(this, e, t, !0),
              t + 2
          }
          ,
          u.prototype.writeUInt16BE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
              this[t + 1] = 255 & e) : j(this, e, t, !1),
              t + 2
          }
          ,
          u.prototype.writeUInt32LE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
              this[t + 2] = e >>> 16,
              this[t + 1] = e >>> 8,
              this[t] = 255 & e) : H(this, e, t, !0),
              t + 4
          }
          ,
          u.prototype.writeUInt32BE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
              this[t + 1] = e >>> 16,
              this[t + 2] = e >>> 8,
              this[t + 3] = 255 & e) : H(this, e, t, !1),
              t + 4
          }
          ,
          u.prototype.writeIntLE = function(e, t, r, n) {
              if (e = +e,
              t |= 0,
              !n) {
                  var a = Math.pow(2, 8 * r - 1);
                  N(this, e, t, r, a - 1, -a)
              }
              var i = 0
                , o = 1
                , s = 0;
              this[t] = 255 & e;
              while (++i < r && (o *= 256))
                  e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
                  this[t + i] = (e / o >> 0) - s & 255;
              return t + r
          }
          ,
          u.prototype.writeIntBE = function(e, t, r, n) {
              if (e = +e,
              t |= 0,
              !n) {
                  var a = Math.pow(2, 8 * r - 1);
                  N(this, e, t, r, a - 1, -a)
              }
              var i = r - 1
                , o = 1
                , s = 0;
              this[t + i] = 255 & e;
              while (--i >= 0 && (o *= 256))
                  e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
                  this[t + i] = (e / o >> 0) - s & 255;
              return t + r
          }
          ,
          u.prototype.writeInt8 = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              this[t] = 255 & e,
              t + 1
          }
          ,
          u.prototype.writeInt16LE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
              this[t + 1] = e >>> 8) : j(this, e, t, !0),
              t + 2
          }
          ,
          u.prototype.writeInt16BE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
              this[t + 1] = 255 & e) : j(this, e, t, !1),
              t + 2
          }
          ,
          u.prototype.writeInt32LE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
              this[t + 1] = e >>> 8,
              this[t + 2] = e >>> 16,
              this[t + 3] = e >>> 24) : H(this, e, t, !0),
              t + 4
          }
          ,
          u.prototype.writeInt32BE = function(e, t, r) {
              return e = +e,
              t |= 0,
              r || N(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
              this[t + 1] = e >>> 16,
              this[t + 2] = e >>> 8,
              this[t + 3] = 255 & e) : H(this, e, t, !1),
              t + 4
          }
          ,
          u.prototype.writeFloatLE = function(e, t, r) {
              return q(this, e, t, !0, r)
          }
          ,
          u.prototype.writeFloatBE = function(e, t, r) {
              return q(this, e, t, !1, r)
          }
          ,
          u.prototype.writeDoubleLE = function(e, t, r) {
              return X(this, e, t, !0, r)
          }
          ,
          u.prototype.writeDoubleBE = function(e, t, r) {
              return X(this, e, t, !1, r)
          }
          ,
          u.prototype.copy = function(e, t, r, n) {
              if (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
                  return 0;
              if (0 === e.length || 0 === this.length)
                  return 0;
              if (t < 0)
                  throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                  throw new RangeError("sourceStart out of bounds");
              if (n < 0)
                  throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r);
              var a, i = n - r;
              if (this === e && r < t && t < n)
                  for (a = i - 1; a >= 0; --a)
                      e[a + t] = this[a + r];
              else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                  for (a = 0; a < i; ++a)
                      e[a + t] = this[a + r];
              else
                  Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
              return i
          }
          ,
          u.prototype.fill = function(e, t, r, n) {
              if ("string" === typeof e) {
                  if ("string" === typeof t ? (n = t,
                  t = 0,
                  r = this.length) : "string" === typeof r && (n = r,
                  r = this.length),
                  1 === e.length) {
                      var a = e.charCodeAt(0);
                      a < 256 && (e = a)
                  }
                  if (void 0 !== n && "string" !== typeof n)
                      throw new TypeError("encoding must be a string");
                  if ("string" === typeof n && !u.isEncoding(n))
                      throw new TypeError("Unknown encoding: " + n)
              } else
                  "number" === typeof e && (e &= 255);
              if (t < 0 || this.length < t || this.length < r)
                  throw new RangeError("Out of range index");
              if (r <= t)
                  return this;
              var i;
              if (t >>>= 0,
              r = void 0 === r ? this.length : r >>> 0,
              e || (e = 0),
              "number" === typeof e)
                  for (i = t; i < r; ++i)
                      this[i] = e;
              else {
                  var o = u.isBuffer(e) ? e : K(new u(e,n).toString())
                    , s = o.length;
                  for (i = 0; i < r - t; ++i)
                      this[i + t] = o[i % s]
              }
              return this
          }
          ;
          var $ = /[^+\/0-9A-Za-z-_]/g;
          function G(e) {
              if (e = V(e).replace($, ""),
              e.length < 2)
                  return "";
              while (e.length % 4 !== 0)
                  e += "=";
              return e
          }
          function V(e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
          }
          function Y(e) {
              return e < 16 ? "0" + e.toString(16) : e.toString(16)
          }
          function K(e, t) {
              var r;
              t = t || 1 / 0;
              for (var n = e.length, a = null, i = [], o = 0; o < n; ++o) {
                  if (r = e.charCodeAt(o),
                  r > 55295 && r < 57344) {
                      if (!a) {
                          if (r > 56319) {
                              (t -= 3) > -1 && i.push(239, 191, 189);
                              continue
                          }
                          if (o + 1 === n) {
                              (t -= 3) > -1 && i.push(239, 191, 189);
                              continue
                          }
                          a = r;
                          continue
                      }
                      if (r < 56320) {
                          (t -= 3) > -1 && i.push(239, 191, 189),
                          a = r;
                          continue
                      }
                      r = 65536 + (a - 55296 << 10 | r - 56320)
                  } else
                      a && (t -= 3) > -1 && i.push(239, 191, 189);
                  if (a = null,
                  r < 128) {
                      if ((t -= 1) < 0)
                          break;
                      i.push(r)
                  } else if (r < 2048) {
                      if ((t -= 2) < 0)
                          break;
                      i.push(r >> 6 | 192, 63 & r | 128)
                  } else if (r < 65536) {
                      if ((t -= 3) < 0)
                          break;
                      i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                  } else {
                      if (!(r < 1114112))
                          throw new Error("Invalid code point");
                      if ((t -= 4) < 0)
                          break;
                      i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                  }
              }
              return i
          }
          function Z(e) {
              for (var t = [], r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
              return t
          }
          function J(e, t) {
              for (var r, n, a, i = [], o = 0; o < e.length; ++o) {
                  if ((t -= 2) < 0)
                      break;
                  r = e.charCodeAt(o),
                  n = r >> 8,
                  a = r % 256,
                  i.push(a),
                  i.push(n)
              }
              return i
          }
          function Q(e) {
              return n.toByteArray(G(e))
          }
          function ee(e, t, r, n) {
              for (var a = 0; a < n; ++a) {
                  if (a + r >= t.length || a >= e.length)
                      break;
                  t[a + r] = e[a]
              }
              return a
          }
          function te(e) {
              return e !== e
          }
      }
      ).call(this, r("c8ba"))
  },
  b6cf: function(e, t, r) {
      "use strict";
      r.r(t);
      r("a630"),
      r("fb6a"),
      r("ace4"),
      r("d3b7"),
      r("3ca3"),
      r("5cc6"),
      r("9a8c"),
      r("a975"),
      r("735e"),
      r("c1ac"),
      r("d139"),
      r("3a7b"),
      r("d5d6"),
      r("82f8"),
      r("e91f"),
      r("60bd"),
      r("5f96"),
      r("3280"),
      r("3fcc"),
      r("ca91"),
      r("25a1"),
      r("cd26"),
      r("3c5d"),
      r("2954"),
      r("649e"),
      r("219c"),
      r("170b"),
      r("b39a"),
      r("72f7"),
      r("ddb0"),
      r("2b3d"),
      r("96cf");
      var n = r("1da1")
        , a = r("06dc");
      r("99af");
      function i(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function o(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function s(e, t, r) {
          return t && o(e.prototype, t),
          r && o(e, r),
          e
      }
      var c = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 30, 1, 118, 111, 114, 98, 105, 115, 0, 0, 0, 0, 2, 68, 172, 0, 0, 0, 0, 0, 0, 0, 238, 2, 0, 0, 0, 0, 0, 184, 1, 79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 16, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 3, 118, 111, 114, 98, 105, 115, 44, 0, 0, 0, 88, 105, 112, 104, 46, 79, 114, 103, 32, 108, 105, 98, 86, 111, 114, 98, 105, 115, 32, 73, 32, 50, 48, 49, 53, 48, 49, 48, 53, 32, 40, 226, 155, 132, 226, 155, 132, 226, 155, 132, 226, 155, 132, 41, 0, 0, 0, 0, 0, 0, 0, 0, 84, 73, 84, 76, 69, 61]
        , u = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 6, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 1, 9, 9, 0, 1, 9, 9, 9, 9, 9, 9, 9, 9]
        , l = [74, 214, 202, 144, 103, 247, 82, 94, 149, 35, 159, 19, 17, 126, 71, 116, 61, 144, 170, 63, 81, 198, 9, 213, 159, 250, 102, 249, 243, 214, 161, 144, 160, 247, 240, 29, 149, 222, 159, 132, 17, 244, 14, 116, 187, 144, 188, 63, 146, 0, 9, 91, 159, 98, 102, 161]
        , f = 195
        , d = 216
        , h = function() {
          function e(t, r, n) {
              i(this, e),
              void 0 === r || void 0 === n ? (this.Matrix128 = t,
              this.generateMask58from128()) : (this.Matrix58 = t,
              this.Super58A = r,
              this.Super58B = n,
              this.generateMask128from58())
          }
          return s(e, [{
              key: "generateMask128from58",
              value: function() {
                  if (56 !== this.Matrix58.length)
                      throw "incorrect mask58 matrix length";
                  for (var e = [], t = 0; t < 8; t += 1)
                      e = e.concat([this.Super58A], this.Matrix58.slice(7 * t, 7 * t + 7), [this.Super58B], this.Matrix58.slice(49 - 7 * t, 56 - 7 * t).reverse());
                  this.Matrix128 = e
              }
          }, {
              key: "generateMask58from128",
              value: function() {
                  if (128 !== this.Matrix128.length)
                      throw "incorrect mask128 length";
                  for (var e = this.Matrix128[0], t = this.Matrix128[8], r = [], n = 0; n < 8; n += 1) {
                      var i = 16 * n
                        , o = 120 - i;
                      if (this.Matrix128[i] !== e || this.Matrix128[i + 8] !== t)
                          throw "decode mask-128 to mask-58 failed";
                      var s = this.Matrix128.slice(i + 1, i + 8)
                        , c = this.Matrix128.slice(o + 1, o + 8).reverse();
                      if (!Object(a["g"])(s, c))
                          throw "decode mask-128 to mask-58 failed";
                      r = r.concat(s)
                  }
                  this.Matrix58 = r,
                  this.Super58A = e,
                  this.Super58B = t
              }
          }, {
              key: "Decrypt",
              value: function(e) {
                  for (var t = e.slice(0), r = -1, n = -1, a = 0; a < e.length; a++)
                      r++,
                      n++,
                      (32768 === r || r > 32768 && (r + 1) % 32768 === 0) && (r++,
                      n++),
                      n >= 128 && (n -= 128),
                      t[a] ^= this.Matrix128[n];
                  return t
              }
          }]),
          e
      }();
      function p() {
          return new h(l,f,d)
      }
      function m(e) {
          for (var t, r = Math.min(32768, e.length), n = 0; n < r; n += 128)
              try {
                  if (t = new h(e.slice(n, n + 128)),
                  Object(a["g"])(a["c"], t.Decrypt(e.slice(0, a["c"].length))))
                      break
              } catch (i) {}
          return t
      }
      function g(e) {
          if (!(e.length < c.length)) {
              for (var t = {}, r = 0; r < 58; r++)
                  t[r] = {};
              for (var n = 0; n < c.length; n++)
                  if (0 !== u[n]) {
                      var a = v(n)
                        , i = e[n] ^ c[n]
                        , o = u[n];
                      i in t[a] ? t[a][i] += o : t[a][i] = o
                  }
              var s, l, f = [];
              try {
                  for (var d = 0; d < 56; d++)
                      f[d] = b(t[d]);
                  s = b(t[56]),
                  l = b(t[57])
              } catch (p) {
                  return
              }
              return new h(f,s,l)
          }
      }
      function y(e, t, r) {
          return new h(e,t,r)
      }
      function b(e) {
          if (0 === e.length)
              throw "can not match at least one key";
          var t, r = 0;
          for (var n in e)
              e[n] > r && (t = n,
              r = e[n]);
          return parseInt(t)
      }
      function v(e) {
          e > 127 && (e %= 128);
          var t = e % 16
            , r = (e - t) / 16;
          switch (t) {
          case 0:
              r = 8,
              t = 0;
              break;
          case 8:
              r = 8,
              t = 1;
              break;
          default:
              t > 7 ? (r = 7 - r,
              t = 15 - t) : t -= 1;
              break
          }
          return 7 * r + t
      }
      r.d(t, "Decrypt", (function() {
          return k
      }
      ));
      var w = r("cb96")
        , T = {
          mgg: {
              handler: g,
              ext: "ogg",
              detect: !0
          },
          mflac: {
              handler: m,
              ext: "flac",
              detect: !0
          },
          qmc0: {
              handler: p,
              ext: "mp3",
              detect: !1
          },
          qmc3: {
              handler: p,
              ext: "mp3",
              detect: !1
          },
          qmcogg: {
              handler: p,
              ext: "ogg",
              detect: !1
          },
          qmcflac: {
              handler: p,
              ext: "flac",
              detect: !1
          },
          bkcmp3: {
              handler: p,
              ext: "mp3",
              detect: !1
          },
          bkcflac: {
              handler: p,
              ext: "flac",
              detect: !1
          },
          tkm: {
              handler: p,
              ext: "m4a",
              detect: !1
          }
      };
      function k(e, t, r) {
          return _.apply(this, arguments)
      }
      function _() {
          return _ = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n) {
              var i, o, s, c, u, l, f, d, h, p, m;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          if (n in T) {
                              e.next = 2;
                              break
                          }
                          return e.abrupt("return", {
                              status: !1,
                              message: "File type is incorrect!"
                          });
                      case 2:
                          return i = T[n],
                          e.t0 = Uint8Array,
                          e.next = 6,
                          Object(a["d"])(t);
                      case 6:
                          if (e.t1 = e.sent,
                          o = new e.t0(e.t1),
                          !i.detect) {
                              e.next = 20;
                              break
                          }
                          if (s = o.slice(0, -368),
                          c = i.handler(s),
                          u = o.slice(-368),
                          void 0 !== c) {
                              e.next = 16;
                              break
                          }
                          return e.next = 15,
                          E(u, r, n);
                      case 15:
                          c = e.sent;
                      case 16:
                          if (void 0 !== c) {
                              e.next = 18;
                              break
                          }
                          return e.abrupt("return", {
                              status: !1,
                              message: n + "格式仅提供实验性支持！"
                          });
                      case 18:
                          e.next = 22;
                          break;
                      case 20:
                          s = o,
                          c = i.handler(s);
                      case 22:
                          return l = c.Decrypt(s),
                          f = Object(a["b"])(l, i.ext),
                          d = a["a"][f],
                          h = new Blob([l],{
                              type: d
                          }),
                          e.next = 28,
                          w.parseBlob(h);
                      case 28:
                          return p = e.sent,
                          m = Object(a["f"])(p.common.artist, p.common.title, r),
                          i.detect && S(u, c.Matrix128, m.artist, m.title, p.common.album, r, n),
                          e.abrupt("return", {
                              status: !0,
                              title: m.title,
                              artist: m.artist,
                              ext: f,
                              album: p.common.album,
                              picture: Object(a["e"])(p),
                              file: URL.createObjectURL(h),
                              mime: d
                          });
                      case 32:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          _.apply(this, arguments)
      }
      function S(e, t, r, n, a, i, o) {
          fetch("https://stats.ixarea.com/collect/qmcmask/usage", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  Mask: Array.from(t),
                  Key: Array.from(e),
                  Artist: r,
                  Title: n,
                  Album: a,
                  Filename: i,
                  Format: o
              })
          }).then().catch()
      }
      function E(e, t, r) {
          return I.apply(this, arguments)
      }
      function I() {
          return I = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n) {
              var a, i;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          return e.prev = 0,
                          e.next = 3,
                          fetch("https://stats.ixarea.com/collect/qmcmask/query", {
                              method: "POST",
                              headers: {
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                  Format: n,
                                  Key: Array.from(t),
                                  Filename: r
                              })
                          });
                      case 3:
                          return a = e.sent,
                          e.next = 6,
                          a.json();
                      case 6:
                          return i = e.sent,
                          e.abrupt("return", y(i.Matrix58, i.Super58A, i.Super58B));
                      case 10:
                          e.prev = 10,
                          e.t0 = e["catch"](0);
                      case 12:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, null, [[0, 10]])
          }
          ))),
          I.apply(this, arguments)
      }
  },
  b727: function(e, t, r) {
      var n = r("0366")
        , a = r("44ad")
        , i = r("7b0b")
        , o = r("50c4")
        , s = r("65f0")
        , c = [].push
        , u = function(e) {
          var t = 1 == e
            , r = 2 == e
            , u = 3 == e
            , l = 4 == e
            , f = 6 == e
            , d = 5 == e || f;
          return function(h, p, m, g) {
              for (var y, b, v = i(h), w = a(v), T = n(p, m, 3), k = o(w.length), _ = 0, S = g || s, E = t ? S(h, k) : r ? S(h, 0) : void 0; k > _; _++)
                  if ((d || _ in w) && (y = w[_],
                  b = T(y, _, v),
                  e))
                      if (t)
                          E[_] = b;
                      else if (b)
                          switch (e) {
                          case 3:
                              return !0;
                          case 5:
                              return y;
                          case 6:
                              return _;
                          case 2:
                              c.call(E, y)
                          }
                      else if (l)
                          return !1;
              return f ? -1 : u || l ? l : E
          }
      };
      e.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6)
      }
  },
  b7d1: function(e, t, r) {
      (function(t) {
          function r(e, t) {
              if (n("noDeprecation"))
                  return e;
              var r = !1;
              function a() {
                  if (!r) {
                      if (n("throwDeprecation"))
                          throw new Error(t);
                      n("traceDeprecation") ? console.trace(t) : console.warn(t),
                      r = !0
                  }
                  return e.apply(this, arguments)
              }
              return a
          }
          function n(e) {
              try {
                  if (!t.localStorage)
                      return !1
              } catch (n) {
                  return !1
              }
              var r = t.localStorage[e];
              return null != r && "true" === String(r).toLowerCase()
          }
          e.exports = r
      }
      ).call(this, r("c8ba"))
  },
  b85b: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("f654")
        , i = r("95c9")
        , o = r("7eca")
        , s = r("9611")
        , c = r("aae9")
        , u = n("music-metadata:parser:musepack");
      class l extends i.BasicParser {
          constructor() {
              super(...arguments),
              this.audioLength = 0
          }
          async parse() {
              const e = await this.tokenizer.readToken(o.Header);
              a.equal(e.signature, "MP+", "Magic number"),
              u(`stream-version=${e.streamMajorVersion}.${e.streamMinorVersion}`),
              this.metadata.setFormat("container", "Musepack, SV7"),
              this.metadata.setFormat("sampleRate", e.sampleFrequency);
              const t = 1152 * (e.frameCount - 1) + e.lastFrameLength;
              this.metadata.setFormat("numberOfSamples", t),
              this.duration = t / e.sampleFrequency,
              this.metadata.setFormat("duration", this.duration),
              this.bitreader = new c.BitReader(this.tokenizer),
              this.metadata.setFormat("numberOfChannels", e.midSideStereo || e.intensityStereo ? 2 : 1);
              const r = await this.bitreader.read(8);
              return this.metadata.setFormat("codec", (r / 100).toFixed(2)),
              await this.skipAudioData(e.frameCount),
              u(`End of audio stream, switching to APEv2, offset=${this.tokenizer.position}`),
              s.APEv2Parser.tryParseApeHeader(this.metadata, this.tokenizer, this.options)
          }
          async skipAudioData(e) {
              while (e-- > 0) {
                  const e = await this.bitreader.read(20);
                  this.audioLength += 20 + e,
                  await this.bitreader.ignore(e)
              }
              const t = await this.bitreader.read(11);
              this.audioLength += t,
              this.metadata.setFormat("bitrate", this.audioLength / this.duration)
          }
      }
      t.MpcSv7Parser = l
  },
  b86b: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("3252"), r("d6e6"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.x64
                , n = r.Word
                , a = r.WordArray
                , i = t.algo
                , o = i.SHA512
                , s = i.SHA384 = o.extend({
                  _doReset: function() {
                      this._hash = new a.init([new n.init(3418070365,3238371032), new n.init(1654270250,914150663), new n.init(2438529370,812702999), new n.init(355462360,4144912697), new n.init(1731405415,4290775857), new n.init(2394180231,1750603025), new n.init(3675008525,1694076839), new n.init(1203062813,3204075428)])
                  },
                  _doFinalize: function() {
                      var e = o._doFinalize.call(this);
                      return e.sigBytes -= 16,
                      e
                  }
              });
              t.SHA384 = o._createHelper(s),
              t.HmacSHA384 = o._createHmacHelper(s)
          }(),
          e.SHA384
      }
      ))
  },
  b86c: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.pad.NoPadding = {
              pad: function() {},
              unpad: function() {}
          },
          e.pad.NoPadding
      }
      ))
  },
  b8fc: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("d485");
      class a extends n.Readable {
          constructor(e) {
              super(),
              this.buf = e
          }
          _read() {
              this.push(this.buf),
              this.push(null)
          }
      }
      t.ID3Stream = a
  },
  baa5: function(e, t, r) {
      var n = r("23e7")
        , a = r("e58c");
      n({
          target: "Array",
          proto: !0,
          forced: a !== [].lastIndexOf
      }, {
          lastIndexOf: a
      })
  },
  bafa: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("93c2")
            , a = r("20f8")
            , i = r("34eb")
            , o = i("strtok3:ReadStreamTokenizer")
            , s = 1e6;
          class c extends n.AbstractTokenizer {
              constructor(e, t) {
                  super(t),
                  this.streamReader = new a.StreamReader(e)
              }
              async getFileInfo() {
                  return this.fileInfo
              }
              async readBuffer(e, t=0, r=e.length, n, i) {
                  if (0 === r)
                      return 0;
                  if (n) {
                      const a = n - this.position;
                      if (a > 0)
                          return await this.ignore(n - this.position),
                          this.readBuffer(e, t, r);
                      if (a < 0)
                          throw new Error("Cannot read from a negative offset in a stream")
                  }
                  const o = await this.streamReader.read(e, t, r);
                  if (this.position += o,
                  !i && o < r)
                      throw new a.EndOfStreamError;
                  return o
              }
              async peekBuffer(t, r=0, n=t.length, i, o) {
                  let s;
                  if (i) {
                      const a = i - this.position;
                      if (a > 0) {
                          const i = e.alloc(n + a);
                          return s = await this.peekBuffer(i, 0, a + n, void 0, o),
                          i.copy(t, r, a),
                          s - a
                      }
                      if (a < 0)
                          throw new Error("Cannot peek from a negative offset in a stream")
                  }
                  if (s = await this.streamReader.peek(t, r, n),
                  !o && s < n)
                      throw new a.EndOfStreamError;
                  return s
              }
              async ignore(t) {
                  o(`ignore ${this.position}...${this.position + t - 1}`);
                  const r = Math.min(s, t)
                    , n = e.alloc(r);
                  let a = 0;
                  while (a < t) {
                      const e = t - a
                        , i = await this.readBuffer(n, 0, Math.min(r, e));
                      if (i < 0)
                          return i;
                      a += i
                  }
                  return a
              }
          }
          t.ReadStreamTokenizer = c
      }
      ).call(this, r("b639").Buffer)
  },
  bda5: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("6f58")
            , a = r("34eb")
            , i = r("599d")
            , o = r("7230")
            , s = a("music-metadata:parser:ogg:vorbis1");
          class c {
              constructor(e, t) {
                  this.metadata = e,
                  this.options = t,
                  this.pageSegments = []
              }
              parsePage(t, r) {
                  if (t.headerType.firstPage)
                      this.parseFirstPage(t, r);
                  else {
                      if (t.headerType.continued) {
                          if (0 === this.pageSegments.length)
                              throw new Error("Cannot continue on previous page");
                          this.pageSegments.push(r)
                      }
                      if (t.headerType.lastPage || !t.headerType.continued) {
                          if (this.pageSegments.length > 0) {
                              const t = e.concat(this.pageSegments);
                              this.parseFullPage(t)
                          }
                          this.pageSegments = t.headerType.lastPage ? [] : [r]
                      }
                  }
                  t.headerType.lastPage && this.calculateDuration(t)
              }
              flush() {
                  this.parseFullPage(e.concat(this.pageSegments))
              }
              parseUserComment(e, t) {
                  const r = new i.VorbisDecoder(e,t)
                    , n = r.parseUserComment();
                  return this.addTag(n.key, n.value),
                  n.len
              }
              addTag(e, t) {
                  if ("METADATA_BLOCK_PICTURE" === e && "string" === typeof t) {
                      if (this.options.skipCovers)
                          return void s("Ignore picture");
                      t = o.VorbisPictureToken.fromBase64(t),
                      s(`Push picture: id=${e}, format=${t.format}`)
                  } else
                      s(`Push tag: id=${e}, value=${t}`);
                  this.metadata.addTag("vorbis", e, t)
              }
              parseFirstPage(e, t) {
                  this.metadata.setFormat("codec", "Vorbis I"),
                  s("Parse first page");
                  const r = o.CommonHeader.get(t, 0);
                  if ("vorbis" !== r.vorbis)
                      throw new Error("Metadata does not look like Vorbis");
                  if (1 !== r.packetType)
                      throw new Error("First Ogg page should be type 1: the identification header");
                  {
                      const e = o.IdentificationHeader.get(t, o.CommonHeader.len);
                      this.metadata.setFormat("sampleRate", e.sampleRate),
                      this.metadata.setFormat("bitrate", e.bitrateNominal),
                      this.metadata.setFormat("numberOfChannels", e.channelMode),
                      s("sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s", e.sampleRate, e.bitrateNominal, e.channelMode)
                  }
              }
              parseFullPage(e) {
                  const t = o.CommonHeader.get(e, 0);
                  switch (s("Parse full page: type=%s, byteLength=%s", t.packetType, e.byteLength),
                  t.packetType) {
                  case 3:
                      return this.parseUserCommentList(e, o.CommonHeader.len);
                  case 1:
                  case 5:
                      break
                  }
              }
              calculateDuration(e) {
                  this.metadata.format.sampleRate && e.absoluteGranulePosition >= 0 && (this.metadata.setFormat("numberOfSamples", e.absoluteGranulePosition),
                  this.metadata.setFormat("duration", this.metadata.format.numberOfSamples / this.metadata.format.sampleRate))
              }
              parseUserCommentList(e, t) {
                  const r = n.UINT32_LE.get(e, t);
                  t += 4,
                  t += r;
                  let a = n.UINT32_LE.get(e, t);
                  t += 4;
                  while (a-- > 0)
                      t += this.parseUserComment(e, t)
              }
          }
          t.VorbisParser = c
      }
      ).call(this, r("b639").Buffer)
  },
  bef3: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("150c")
        , i = n("music-metadata:parser:MP4:Atom");
      class o {
          constructor(e, t, r) {
              this.header = e,
              this.extended = t,
              this.parent = r,
              this.children = [],
              this.atomPath = (this.parent ? this.parent.atomPath + "." : "") + this.header.name
          }
          static async readAtom(e, t, r) {
              const n = e.position
                , s = await e.readToken(a.Header)
                , c = 1 === s.length;
              c && (s.length = await e.readToken(a.ExtendedSize));
              const u = new o(s,c,r);
              return i(`parse atom name=${u.atomPath}, extended=${u.extended}, offset=${n}, len=${u.header.length}`),
              await u.readData(e, t),
              u
          }
          getHeaderLength() {
              return this.extended ? 16 : 8
          }
          getPayloadLength() {
              return this.header.length - this.getHeaderLength()
          }
          async readAtoms(e, t, r) {
              while (r > 0) {
                  const n = await o.readAtom(e, t, this);
                  this.children.push(n),
                  r -= n.header.length
              }
          }
          async readData(e, t) {
              switch (this.header.name) {
              case "moov":
              case "udta":
              case "trak":
              case "mdia":
              case "minf":
              case "stbl":
              case "<id>":
              case "ilst":
              case "tref":
                  return this.readAtoms(e, t, this.getPayloadLength());
              case "meta":
                  return await e.ignore(4),
                  this.readAtoms(e, t, this.getPayloadLength() - 4);
              case "mdhd":
              case "mvhd":
              case "tkhd":
              case "stsz":
              case "mdat":
              default:
                  return t(this)
              }
          }
      }
      t.Atom = o
  },
  c04e: function(e, t, r) {
      var n = r("861d");
      e.exports = function(e, t) {
          if (!n(e))
              return e;
          var r, a;
          if (t && "function" == typeof (r = e.toString) && !n(a = r.call(e)))
              return a;
          if ("function" == typeof (r = e.valueOf) && !n(a = r.call(e)))
              return a;
          if (!t && "function" == typeof (r = e.toString) && !n(a = r.call(e)))
              return a;
          throw TypeError("Can't convert object to primitive value")
      }
  },
  c198: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("1132"), r("72fe"), r("2b79"), r("38ba"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.BlockCipher
                , a = t.algo
                , i = []
                , o = []
                , s = []
                , c = []
                , u = []
                , l = []
                , f = []
                , d = []
                , h = []
                , p = [];
              (function() {
                  for (var e = [], t = 0; t < 256; t++)
                      e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                  var r = 0
                    , n = 0;
                  for (t = 0; t < 256; t++) {
                      var a = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                      a = a >>> 8 ^ 255 & a ^ 99,
                      i[r] = a,
                      o[a] = r;
                      var m = e[r]
                        , g = e[m]
                        , y = e[g]
                        , b = 257 * e[a] ^ 16843008 * a;
                      s[r] = b << 24 | b >>> 8,
                      c[r] = b << 16 | b >>> 16,
                      u[r] = b << 8 | b >>> 24,
                      l[r] = b;
                      b = 16843009 * y ^ 65537 * g ^ 257 * m ^ 16843008 * r;
                      f[a] = b << 24 | b >>> 8,
                      d[a] = b << 16 | b >>> 16,
                      h[a] = b << 8 | b >>> 24,
                      p[a] = b,
                      r ? (r = m ^ e[e[e[y ^ m]]],
                      n ^= e[e[n]]) : r = n = 1
                  }
              }
              )();
              var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                , g = a.AES = n.extend({
                  _doReset: function() {
                      if (!this._nRounds || this._keyPriorReset !== this._key) {
                          for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = this._nRounds = r + 6, a = 4 * (n + 1), o = this._keySchedule = [], s = 0; s < a; s++)
                              s < r ? o[s] = t[s] : (l = o[s - 1],
                              s % r ? r > 6 && s % r == 4 && (l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l]) : (l = l << 8 | l >>> 24,
                              l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l],
                              l ^= m[s / r | 0] << 24),
                              o[s] = o[s - r] ^ l);
                          for (var c = this._invKeySchedule = [], u = 0; u < a; u++) {
                              s = a - u;
                              if (u % 4)
                                  var l = o[s];
                              else
                                  l = o[s - 4];
                              c[u] = u < 4 || s <= 4 ? l : f[i[l >>> 24]] ^ d[i[l >>> 16 & 255]] ^ h[i[l >>> 8 & 255]] ^ p[i[255 & l]]
                          }
                      }
                  },
                  encryptBlock: function(e, t) {
                      this._doCryptBlock(e, t, this._keySchedule, s, c, u, l, i)
                  },
                  decryptBlock: function(e, t) {
                      var r = e[t + 1];
                      e[t + 1] = e[t + 3],
                      e[t + 3] = r,
                      this._doCryptBlock(e, t, this._invKeySchedule, f, d, h, p, o);
                      r = e[t + 1];
                      e[t + 1] = e[t + 3],
                      e[t + 3] = r
                  },
                  _doCryptBlock: function(e, t, r, n, a, i, o, s) {
                      for (var c = this._nRounds, u = e[t] ^ r[0], l = e[t + 1] ^ r[1], f = e[t + 2] ^ r[2], d = e[t + 3] ^ r[3], h = 4, p = 1; p < c; p++) {
                          var m = n[u >>> 24] ^ a[l >>> 16 & 255] ^ i[f >>> 8 & 255] ^ o[255 & d] ^ r[h++]
                            , g = n[l >>> 24] ^ a[f >>> 16 & 255] ^ i[d >>> 8 & 255] ^ o[255 & u] ^ r[h++]
                            , y = n[f >>> 24] ^ a[d >>> 16 & 255] ^ i[u >>> 8 & 255] ^ o[255 & l] ^ r[h++]
                            , b = n[d >>> 24] ^ a[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ o[255 & f] ^ r[h++];
                          u = m,
                          l = g,
                          f = y,
                          d = b
                      }
                      m = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & d]) ^ r[h++],
                      g = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & u]) ^ r[h++],
                      y = (s[f >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ r[h++],
                      b = (s[d >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ r[h++];
                      e[t] = m,
                      e[t + 1] = g,
                      e[t + 2] = y,
                      e[t + 3] = b
                  },
                  keySize: 8
              });
              t.AES = n._createHelper(g)
          }(),
          e.AES
      }
      ))
  },
  c1ac: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").filter
        , i = r("4840")
        , o = n.aTypedArray
        , s = n.aTypedArrayConstructor
        , c = n.exportTypedArrayMethod;
      c("filter", (function(e) {
          var t = a(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
            , r = i(this, this.constructor)
            , n = 0
            , c = t.length
            , u = new (s(r))(c);
          while (c > n)
              u[n] = t[n++];
          return u
      }
      ))
  },
  c2ae: function(e, t, r) {
      e.exports = r("e372").PassThrough
  },
  c3b6: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("1132"), r("72fe"), r("2b79"), r("38ba"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.StreamCipher
                , a = t.algo
                , i = a.RC4 = n.extend({
                  _doReset: function() {
                      for (var e = this._key, t = e.words, r = e.sigBytes, n = this._S = [], a = 0; a < 256; a++)
                          n[a] = a;
                      a = 0;
                      for (var i = 0; a < 256; a++) {
                          var o = a % r
                            , s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                          i = (i + n[a] + s) % 256;
                          var c = n[a];
                          n[a] = n[i],
                          n[i] = c
                      }
                      this._i = this._j = 0
                  },
                  _doProcessBlock: function(e, t) {
                      e[t] ^= o.call(this)
                  },
                  keySize: 8,
                  ivSize: 0
              });
              function o() {
                  for (var e = this._S, t = this._i, r = this._j, n = 0, a = 0; a < 4; a++) {
                      t = (t + 1) % 256,
                      r = (r + e[t]) % 256;
                      var i = e[t];
                      e[t] = e[r],
                      e[r] = i,
                      n |= e[(e[t] + e[r]) % 256] << 24 - 8 * a
                  }
                  return this._i = t,
                  this._j = r,
                  n
              }
              t.RC4 = n._createHelper(i);
              var s = a.RC4Drop = i.extend({
                  cfg: i.cfg.extend({
                      drop: 192
                  }),
                  _doReset: function() {
                      i._doReset.call(this);
                      for (var e = this.cfg.drop; e > 0; e--)
                          o.call(this)
                  }
              });
              t.RC4Drop = n._createHelper(s)
          }(),
          e.RC4
      }
      ))
  },
  c430: function(e, t) {
      e.exports = !1
  },
  c4dc: function(e, t, r) {
      "use strict";
      /*!
* media-typer
* Copyright(c) 2014-2017 Douglas Christopher Wilson
* MIT Licensed
*/
      var n = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/
        , a = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/
        , i = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
      function o(e) {
          if (!e || "object" !== typeof e)
              throw new TypeError("argument obj is required");
          var t = e.subtype
            , r = e.suffix
            , i = e.type;
          if (!i || !a.test(i))
              throw new TypeError("invalid type");
          if (!t || !n.test(t))
              throw new TypeError("invalid subtype");
          var o = i + "/" + t;
          if (r) {
              if (!a.test(r))
                  throw new TypeError("invalid suffix");
              o += "+" + r
          }
          return o
      }
      function s(e) {
          if (!e)
              throw new TypeError("argument string is required");
          if ("string" !== typeof e)
              throw new TypeError("argument string is required to be a string");
          return i.test(e.toLowerCase())
      }
      function c(e) {
          if (!e)
              throw new TypeError("argument string is required");
          if ("string" !== typeof e)
              throw new TypeError("argument string is required to be a string");
          var t = i.exec(e.toLowerCase());
          if (!t)
              throw new TypeError("invalid media type");
          var r, n = t[1], a = t[2], o = a.lastIndexOf("+");
          return -1 !== o && (r = a.substr(o + 1),
          a = a.substr(0, o)),
          new u(n,a,r)
      }
      function u(e, t, r) {
          this.type = e,
          this.subtype = t,
          this.suffix = r
      }
      t.format = o,
      t.parse = c,
      t.test = s
  },
  c6b6: function(e, t) {
      var r = {}.toString;
      e.exports = function(e) {
          return r.call(e).slice(8, -1)
      }
  },
  c6cd: function(e, t, r) {
      var n = r("da84")
        , a = r("ce4e")
        , i = "__core-js_shared__"
        , o = n[i] || a(i, {});
      e.exports = o
  },
  c73e: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("aad3")
        , i = r("bda5");
      class o extends i.VorbisParser {
          constructor(e, t, r) {
              super(e, t),
              this.tokenizer = r,
              this.lastPos = -1
          }
          parseFirstPage(e, t) {
              if (this.metadata.setFormat("codec", "Opus"),
              this.idHeader = new a.IdHeader(t.length).get(t, 0),
              "OpusHead" !== this.idHeader.magicSignature)
                  throw new Error("Illegal ogg/Opus magic-signature");
              this.metadata.setFormat("sampleRate", this.idHeader.inputSampleRate),
              this.metadata.setFormat("numberOfChannels", this.idHeader.channelCount)
          }
          parseFullPage(e) {
              const t = new n.StringType(8,"ascii").get(e, 0);
              switch (t) {
              case "OpusTags":
                  this.parseUserCommentList(e, 8),
                  this.lastPos = this.tokenizer.position;
                  break;
              default:
                  break
              }
          }
          calculateDuration(e) {
              if (this.metadata.format.sampleRate && e.absoluteGranulePosition >= 0 && (this.metadata.setFormat("numberOfSamples", e.absoluteGranulePosition - this.idHeader.preSkip),
              this.metadata.setFormat("duration", this.metadata.format.numberOfSamples / this.idHeader.inputSampleRate),
              -1 !== this.lastPos && this.tokenizer.fileInfo.size && this.metadata.format.duration)) {
                  const e = this.tokenizer.fileInfo.size - this.lastPos;
                  this.metadata.setFormat("bitrate", 8 * e / this.metadata.format.duration)
              }
          }
      }
      t.OpusParser = o
  },
  c8ba: function(e, t) {
      var r;
      r = function() {
          return this
      }();
      try {
          r = r || new Function("return this")()
      } catch (n) {
          "object" === typeof window && (r = window)
      }
      e.exports = r
  },
  c8d2: function(e, t, r) {
      var n = r("d039")
        , a = r("5899")
        , i = "​᠎";
      e.exports = function(e) {
          return n((function() {
              return !!a[e]() || i[e]() != i || a[e].name !== e
          }
          ))
      }
  },
  ca84: function(e, t, r) {
      var n = r("5135")
        , a = r("fc6a")
        , i = r("4d64").indexOf
        , o = r("d012");
      e.exports = function(e, t) {
          var r, s = a(e), c = 0, u = [];
          for (r in s)
              !n(o, r) && n(s, r) && u.push(r);
          while (t.length > c)
              n(s, r = t[c++]) && (~i(u, r) || u.push(r));
          return u
      }
  },
  ca91: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("d58f").left
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("reduce", (function(e) {
          return a(i(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  cb4f: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("98a7")
        , i = [6e3, 8e3, 9600, 11025, 12e3, 16e3, 22050, 24e3, 32e3, 44100, 48e3, 64e3, 88200, 96e3, 192e3, -1];
      class o {
          static isBitSet(e, t) {
              return 1 === o.getBitAllignedNumber(e, t, 1)
          }
          static getBitAllignedNumber(e, t, r) {
              return e >>> t & 4294967295 >>> 32 - r
          }
      }
      t.WavPack = o,
      o.BlockHeaderToken = {
          len: 32,
          get: (e,t)=>{
              const r = n.UINT32_LE.get(e, t + 24)
                , s = {
                  BlockID: a.FourCcToken.get(e, t),
                  blockSize: n.UINT32_LE.get(e, t + 4),
                  version: n.UINT16_LE.get(e, t + 8),
                  totalSamples: n.UINT32_LE.get(e, t + 12),
                  blockIndex: n.UINT32_LE.get(e, t + 16),
                  blockSamples: n.UINT32_LE.get(e, t + 20),
                  flags: {
                      bitsPerSample: 8 * (1 + o.getBitAllignedNumber(r, 0, 2)),
                      isMono: o.isBitSet(r, 2),
                      isHybrid: o.isBitSet(r, 3),
                      isJointStereo: o.isBitSet(r, 4),
                      crossChannel: o.isBitSet(r, 5),
                      hybridNoiseShaping: o.isBitSet(r, 6),
                      floatingPoint: o.isBitSet(r, 7),
                      samplingRate: i[o.getBitAllignedNumber(r, 23, 4)],
                      isDSD: o.isBitSet(r, 31)
                  },
                  crc: new n.BufferType(4).get(e, t + 28)
              };
              return s.flags.isDSD && (s.totalSamples *= 8),
              s
          }
      },
      o.MetadataIdToken = {
          len: 1,
          get: (e,t)=>({
              functionId: o.getBitAllignedNumber(e[t], 0, 6),
              isOptional: o.isBitSet(e[t], 5),
              isOddSize: o.isBitSet(e[t], 6),
              largeBlock: o.isBitSet(e[t], 7)
          })
      }
  },
  cb96: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("34eb")
        , a = r("e375")
        , i = r("5cf0")
        , o = r("0497")
        , s = n("music-metadata-browser:main");
      var c = r("e375");
      async function u(e, r, n) {
          const a = new i.ReadableWebToNodeStream(e)
            , o = await t.parseNodeStream(a, "string" === typeof r ? {
              mimeType: r
          } : r, n);
          return await a.close(),
          o
      }
      async function l(e, t) {
          const r = await d(e)
            , n = {
              mimeType: e.type,
              size: e.size
          };
          return e.name && (n.path = e.name),
          a.parseBuffer(r, {
              mimeType: e.type,
              size: e.size
          }, t)
      }
      async function f(e, t) {
          const r = await fetch(e)
            , n = {
              size: parseInt(r.headers.get("Content-Length"), 10),
              mimeType: r.headers.get("Content-Type")
          };
          if (r.ok) {
              if (r.body) {
                  const e = await this.parseReadableStream(r.body, n, t);
                  return s("Closing HTTP-readable-stream..."),
                  r.body.locked || await r.body.cancel(),
                  s("HTTP-readable-stream closed."),
                  e
              }
              return this.parseBlob(await r.blob(), t)
          }
          throw new Error(`HTTP error status=${r.status}: ${r.statusText}`)
      }
      function d(e) {
          return new Promise((t,r)=>{
              const n = new FileReader;
              n.onloadend = e=>{
                  let r = e.target.result;
                  r instanceof ArrayBuffer && (r = o(new Uint8Array(e.target.result))),
                  t(r)
              }
              ,
              n.onerror = e=>{
                  r(new Error(e.type))
              }
              ,
              n.onabort = e=>{
                  r(new Error(e.type))
              }
              ,
              n.readAsArrayBuffer(e)
          }
          )
      }
      t.parseBuffer = c.parseBuffer,
      t.parseFromTokenizer = c.parseFromTokenizer,
      t.orderTags = c.orderTags,
      t.ratingToStars = c.ratingToStars,
      t.parseNodeStream = a.parseStream,
      t.parseReadableStream = u,
      t.parseBlob = l,
      t.fetchFromUrl = f
  },
  cc04: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("98a7");
      t.ChunkHeader = {
          len: 12,
          get: (e,t)=>({
              chunkID: a.FourCcToken.get(e, t),
              chunkSize: n.INT64_BE.get(e, t + 4)
          })
      }
  },
  cc12: function(e, t, r) {
      var n = r("da84")
        , a = r("861d")
        , i = n.document
        , o = a(i) && a(i.createElement);
      e.exports = function(e) {
          return o ? i.createElement(e) : {}
      }
  },
  cd26: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = n.aTypedArray
        , i = n.exportTypedArrayMethod
        , o = Math.floor;
      i("reverse", (function() {
          var e, t = this, r = a(t).length, n = o(r / 2), i = 0;
          while (i < n)
              e = t[i],
              t[i++] = t[--r],
              t[r] = e;
          return t
      }
      ))
  },
  cdf9: function(e, t, r) {
      var n = r("825a")
        , a = r("861d")
        , i = r("f069");
      e.exports = function(e, t) {
          if (n(e),
          a(t) && t.constructor === e)
              return t;
          var r = i.f(e)
            , o = r.resolve;
          return o(t),
          r.promise
      }
  },
  ce4e: function(e, t, r) {
      var n = r("da84")
        , a = r("9112");
      e.exports = function(e, t) {
          try {
              a(n, e, t)
          } catch (r) {
              n[e] = t
          }
          return t
      }
  },
  cec2: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      function(e) {
          e[e["video"] = 1] = "video",
          e[e["audio"] = 2] = "audio",
          e[e["complex"] = 3] = "complex",
          e[e["logo"] = 4] = "logo",
          e[e["subtitle"] = 17] = "subtitle",
          e[e["button"] = 18] = "button",
          e[e["control"] = 32] = "control"
      }(t.TrackType || (t.TrackType = {}))
  },
  d012: function(e, t) {
      e.exports = {}
  },
  d039: function(e, t) {
      e.exports = function(e) {
          try {
              return !!e()
          } catch (t) {
              return !0
          }
      }
  },
  d066: function(e, t, r) {
      var n = r("428f")
        , a = r("da84")
        , i = function(e) {
          return "function" == typeof e ? e : void 0
      };
      e.exports = function(e, t) {
          return arguments.length < 2 ? i(n[e]) || i(a[e]) : n[e] && n[e][t] || a[e] && a[e][t]
      }
  },
  d139: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").find
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("find", (function(e) {
          return a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  d17b: function(e, t, r) {
      e.exports = r("e372").Transform
  },
  d1e7: function(e, t, r) {
      "use strict";
      var n = {}.propertyIsEnumerable
        , a = Object.getOwnPropertyDescriptor
        , i = a && !n.call({
          1: 2
      }, 1);
      t.f = i ? function(e) {
          var t = a(this, e);
          return !!t && t.enumerable
      }
      : n
  },
  d2bb: function(e, t, r) {
      var n = r("825a")
        , a = r("3bbe");
      e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
          var e, t = !1, r = {};
          try {
              e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set,
              e.call(r, []),
              t = r instanceof Array
          } catch (i) {}
          return function(r, i) {
              return n(r),
              a(i),
              t ? e.call(r, i) : r.__proto__ = i,
              r
          }
      }() : void 0)
  },
  d3ab: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("f654")
        , a = r("2e67");
      class i {
          static findZero(e, t, r, n) {
              let a = t;
              if ("utf16" === n) {
                  while (0 !== e[a] || 0 !== e[a + 1]) {
                      if (a >= r)
                          return r;
                      a += 2
                  }
                  return a
              }
              while (0 !== e[a]) {
                  if (a >= r)
                      return r;
                  a++
              }
              return a
          }
          static trimRightNull(e) {
              const t = e.indexOf("\0");
              return -1 === t ? e : e.substr(0, t)
          }
          static swapBytes(e) {
              const t = e.length;
              n.ok(0 === (1 & t), "Buffer length must be even");
              for (let r = 0; r < t; r += 2) {
                  const t = e[r];
                  e[r] = e[r + 1],
                  e[r + 1] = t
              }
              return e
          }
          static readUTF16String(e) {
              let t = 0;
              return 254 === e[0] && 255 === e[1] ? (e = i.swapBytes(e),
              t = 2) : 255 === e[0] && 254 === e[1] && (t = 2),
              e.toString("ucs2", t)
          }
          static decodeString(e, t) {
              if (255 === e[0] && 254 === e[1] && 254 === e[2] && 255 === e[3] && (e = e.slice(2)),
              "utf16le" === t || "utf16" === t)
                  return i.readUTF16String(e);
              if ("utf8" === t)
                  return e.toString("utf8");
              if ("iso-8859-1" === t)
                  return a.Windows1292Decoder.decode(e);
              throw Error(t + " encoding is not supported!")
          }
          static stripNulls(e) {
              return e = e.replace(/^\x00+/g, ""),
              e = e.replace(/\x00+$/g, ""),
              e
          }
          static getBitAllignedNumber(e, t, r, n) {
              const a = t + ~~(r / 8)
                , o = r % 8;
              let s = e[a];
              s &= 255 >> o;
              const c = 8 - o
                , u = n - c;
              return u < 0 ? s >>= 8 - o - n : u > 0 && (s <<= u,
              s |= i.getBitAllignedNumber(e, t, r + c, u)),
              s
          }
          static isBitSet(e, t, r) {
              return 1 === i.getBitAllignedNumber(e, t, r, 1)
          }
          static a2hex(e) {
              const t = [];
              for (let r = 0, n = e.length; r < n; r++) {
                  const n = Number(e.charCodeAt(r)).toString(16);
                  t.push(1 === n.length ? "0" + n : n)
              }
              return t.join(" ")
          }
      }
      function o(e) {
          return 10 * Math.log10(e)
      }
      function s(e) {
          return Math.pow(10, e / 10)
      }
      function c(e) {
          const t = e.split(" ").map(e=>e.trim().toLowerCase());
          if (t.length >= 1) {
              const e = parseFloat(t[0]);
              return 2 === t.length && "db" === t[1] ? {
                  dB: e,
                  ratio: s(e)
              } : {
                  dB: o(e),
                  ratio: e
              }
          }
      }
      t.default = i,
      i.strtokBITSET = {
          get: (e,t,r)=>0 !== (e[t] & 1 << r),
          len: 1
      },
      t.ratioToDb = o,
      t.dbToRatio = s,
      t.toRatio = c
  },
  d3b7: function(e, t, r) {
      var n = r("00ee")
        , a = r("6eeb")
        , i = r("b041");
      n || a(Object.prototype, "toString", i, {
          unsafe: !0
      })
  },
  d44e: function(e, t, r) {
      var n = r("9bf2").f
        , a = r("5135")
        , i = r("b622")
        , o = i("toStringTag");
      e.exports = function(e, t, r) {
          e && !a(e = r ? e : e.prototype, o) && n(e, o, {
              configurable: !0,
              value: t
          })
      }
  },
  d485: function(e, t, r) {
      e.exports = i;
      var n = r("faa1").EventEmitter
        , a = r("3fb5");
      function i() {
          n.call(this)
      }
      a(i, n),
      i.Readable = r("e372"),
      i.Writable = r("2c63"),
      i.Duplex = r("0960"),
      i.Transform = r("d17b"),
      i.PassThrough = r("c2ae"),
      i.Stream = i,
      i.prototype.pipe = function(e, t) {
          var r = this;
          function a(t) {
              e.writable && !1 === e.write(t) && r.pause && r.pause()
          }
          function i() {
              r.readable && r.resume && r.resume()
          }
          r.on("data", a),
          e.on("drain", i),
          e._isStdio || t && !1 === t.end || (r.on("end", s),
          r.on("close", c));
          var o = !1;
          function s() {
              o || (o = !0,
              e.end())
          }
          function c() {
              o || (o = !0,
              "function" === typeof e.destroy && e.destroy())
          }
          function u(e) {
              if (l(),
              0 === n.listenerCount(this, "error"))
                  throw e
          }
          function l() {
              r.removeListener("data", a),
              e.removeListener("drain", i),
              r.removeListener("end", s),
              r.removeListener("close", c),
              r.removeListener("error", u),
              e.removeListener("error", u),
              r.removeListener("end", l),
              r.removeListener("close", l),
              e.removeListener("close", l)
          }
          return r.on("error", u),
          e.on("error", u),
          r.on("end", l),
          r.on("close", l),
          e.on("close", l),
          e.emit("pipe", r),
          e
      }
  },
  d58f: function(e, t, r) {
      var n = r("1c0b")
        , a = r("7b0b")
        , i = r("44ad")
        , o = r("50c4")
        , s = function(e) {
          return function(t, r, s, c) {
              n(r);
              var u = a(t)
                , l = i(u)
                , f = o(u.length)
                , d = e ? f - 1 : 0
                , h = e ? -1 : 1;
              if (s < 2)
                  while (1) {
                      if (d in l) {
                          c = l[d],
                          d += h;
                          break
                      }
                      if (d += h,
                      e ? d < 0 : f <= d)
                          throw TypeError("Reduce of empty array with no initial value")
                  }
              for (; e ? d >= 0 : f > d; d += h)
                  d in l && (c = r(c, l[d], d, u));
              return c
          }
      };
      e.exports = {
          left: s(!1),
          right: s(!0)
      }
  },
  d5d6: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("b727").forEach
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("forEach", (function(e) {
          a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  d60a: function(e, t) {
      e.exports = function(e) {
          return e && "object" === typeof e && "function" === typeof e.copy && "function" === typeof e.fill && "function" === typeof e.readUInt8
      }
  },
  d66d: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("34eb")
        , i = r("21c2")
        , o = r("64a4")
        , s = r("98a7")
        , c = r("95c9")
        , u = r("da6a")
        , l = r("6a01")
        , f = r("b8fc")
        , d = a("music-metadata:parser:aiff");
      class h extends c.BasicParser {
          async parse() {
              const e = await this.tokenizer.readToken(l.Header);
              if ("FORM" !== e.chunkID)
                  throw new Error("Invalid Chunk-ID, expected 'FORM'");
              const t = await this.tokenizer.readToken(s.FourCcToken);
              switch (t) {
              case "AIFF":
                  this.metadata.setFormat("container", t),
                  this.isCompressed = !1;
                  break;
              case "AIFC":
                  this.metadata.setFormat("container", "AIFF-C"),
                  this.isCompressed = !0;
                  break;
              default:
                  throw Error("Unsupported AIFF type: " + t)
              }
              this.metadata.setFormat("lossless", !this.isCompressed);
              try {
                  do {
                      const e = await this.tokenizer.readToken(l.Header);
                      d(`Chunk id=${e.chunkID}`);
                      const t = 2 * Math.round(e.chunkSize / 2)
                        , r = await this.readData(e);
                      await this.tokenizer.ignore(t - r)
                  } while (1)
              } catch (r) {
                  if (!(r instanceof i.EndOfStreamError))
                      throw r;
                  d("End-of-stream")
              }
          }
          async readData(e) {
              switch (e.chunkID) {
              case "COMM":
                  const t = await this.tokenizer.readToken(new u.Common(e,this.isCompressed));
                  return this.metadata.setFormat("bitsPerSample", t.sampleSize),
                  this.metadata.setFormat("sampleRate", t.sampleRate),
                  this.metadata.setFormat("numberOfChannels", t.numChannels),
                  this.metadata.setFormat("numberOfSamples", t.numSampleFrames),
                  this.metadata.setFormat("duration", t.numSampleFrames / t.sampleRate),
                  this.metadata.setFormat("codec", t.compressionName),
                  e.chunkSize;
              case "ID3 ":
                  const r = await this.tokenizer.readToken(new n.BufferType(e.chunkSize))
                    , a = new f.ID3Stream(r)
                    , s = i.fromStream(a);
                  return await (new o.ID3v2Parser).parse(this.metadata, s, this.options),
                  e.chunkSize;
              case "SSND":
                  return this.metadata.format.duration && this.metadata.setFormat("bitrate", 8 * e.chunkSize / this.metadata.format.duration),
                  0;
              default:
                  return 0
              }
          }
      }
      t.AIFFParser = h
  },
  d6e6: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("3252"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.Hasher
                , a = t.x64
                , i = a.Word
                , o = a.WordArray
                , s = t.algo;
              function c() {
                  return i.create.apply(i, arguments)
              }
              var u = [c(1116352408, 3609767458), c(1899447441, 602891725), c(3049323471, 3964484399), c(3921009573, 2173295548), c(961987163, 4081628472), c(1508970993, 3053834265), c(2453635748, 2937671579), c(2870763221, 3664609560), c(3624381080, 2734883394), c(310598401, 1164996542), c(607225278, 1323610764), c(1426881987, 3590304994), c(1925078388, 4068182383), c(2162078206, 991336113), c(2614888103, 633803317), c(3248222580, 3479774868), c(3835390401, 2666613458), c(4022224774, 944711139), c(264347078, 2341262773), c(604807628, 2007800933), c(770255983, 1495990901), c(1249150122, 1856431235), c(1555081692, 3175218132), c(1996064986, 2198950837), c(2554220882, 3999719339), c(2821834349, 766784016), c(2952996808, 2566594879), c(3210313671, 3203337956), c(3336571891, 1034457026), c(3584528711, 2466948901), c(113926993, 3758326383), c(338241895, 168717936), c(666307205, 1188179964), c(773529912, 1546045734), c(1294757372, 1522805485), c(1396182291, 2643833823), c(1695183700, 2343527390), c(1986661051, 1014477480), c(2177026350, 1206759142), c(2456956037, 344077627), c(2730485921, 1290863460), c(2820302411, 3158454273), c(3259730800, 3505952657), c(3345764771, 106217008), c(3516065817, 3606008344), c(3600352804, 1432725776), c(4094571909, 1467031594), c(275423344, 851169720), c(430227734, 3100823752), c(506948616, 1363258195), c(659060556, 3750685593), c(883997877, 3785050280), c(958139571, 3318307427), c(1322822218, 3812723403), c(1537002063, 2003034995), c(1747873779, 3602036899), c(1955562222, 1575990012), c(2024104815, 1125592928), c(2227730452, 2716904306), c(2361852424, 442776044), c(2428436474, 593698344), c(2756734187, 3733110249), c(3204031479, 2999351573), c(3329325298, 3815920427), c(3391569614, 3928383900), c(3515267271, 566280711), c(3940187606, 3454069534), c(4118630271, 4000239992), c(116418474, 1914138554), c(174292421, 2731055270), c(289380356, 3203993006), c(460393269, 320620315), c(685471733, 587496836), c(852142971, 1086792851), c(1017036298, 365543100), c(1126000580, 2618297676), c(1288033470, 3409855158), c(1501505948, 4234509866), c(1607167915, 987167468), c(1816402316, 1246189591)]
                , l = [];
              (function() {
                  for (var e = 0; e < 80; e++)
                      l[e] = c()
              }
              )();
              var f = s.SHA512 = n.extend({
                  _doReset: function() {
                      this._hash = new o.init([new i.init(1779033703,4089235720), new i.init(3144134277,2227873595), new i.init(1013904242,4271175723), new i.init(2773480762,1595750129), new i.init(1359893119,2917565137), new i.init(2600822924,725511199), new i.init(528734635,4215389547), new i.init(1541459225,327033209)])
                  },
                  _doProcessBlock: function(e, t) {
                      for (var r = this._hash.words, n = r[0], a = r[1], i = r[2], o = r[3], s = r[4], c = r[5], f = r[6], d = r[7], h = n.high, p = n.low, m = a.high, g = a.low, y = i.high, b = i.low, v = o.high, w = o.low, T = s.high, k = s.low, _ = c.high, S = c.low, E = f.high, I = f.low, A = d.high, x = d.low, B = h, C = p, P = m, O = g, M = y, D = b, R = v, F = w, L = T, z = k, U = _, N = S, j = E, H = I, W = A, q = x, X = 0; X < 80; X++) {
                          var $, G, V = l[X];
                          if (X < 16)
                              G = V.high = 0 | e[t + 2 * X],
                              $ = V.low = 0 | e[t + 2 * X + 1];
                          else {
                              var Y = l[X - 15]
                                , K = Y.high
                                , Z = Y.low
                                , J = (K >>> 1 | Z << 31) ^ (K >>> 8 | Z << 24) ^ K >>> 7
                                , Q = (Z >>> 1 | K << 31) ^ (Z >>> 8 | K << 24) ^ (Z >>> 7 | K << 25)
                                , ee = l[X - 2]
                                , te = ee.high
                                , re = ee.low
                                , ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6
                                , ae = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26)
                                , ie = l[X - 7]
                                , oe = ie.high
                                , se = ie.low
                                , ce = l[X - 16]
                                , ue = ce.high
                                , le = ce.low;
                              $ = Q + se,
                              G = J + oe + ($ >>> 0 < Q >>> 0 ? 1 : 0),
                              $ += ae,
                              G = G + ne + ($ >>> 0 < ae >>> 0 ? 1 : 0),
                              $ += le,
                              G = G + ue + ($ >>> 0 < le >>> 0 ? 1 : 0),
                              V.high = G,
                              V.low = $
                          }
                          var fe = L & U ^ ~L & j
                            , de = z & N ^ ~z & H
                            , he = B & P ^ B & M ^ P & M
                            , pe = C & O ^ C & D ^ O & D
                            , me = (B >>> 28 | C << 4) ^ (B << 30 | C >>> 2) ^ (B << 25 | C >>> 7)
                            , ge = (C >>> 28 | B << 4) ^ (C << 30 | B >>> 2) ^ (C << 25 | B >>> 7)
                            , ye = (L >>> 14 | z << 18) ^ (L >>> 18 | z << 14) ^ (L << 23 | z >>> 9)
                            , be = (z >>> 14 | L << 18) ^ (z >>> 18 | L << 14) ^ (z << 23 | L >>> 9)
                            , ve = u[X]
                            , we = ve.high
                            , Te = ve.low
                            , ke = q + be
                            , _e = W + ye + (ke >>> 0 < q >>> 0 ? 1 : 0)
                            , Se = (ke = ke + de,
                          _e = _e + fe + (ke >>> 0 < de >>> 0 ? 1 : 0),
                          ke = ke + Te,
                          _e = _e + we + (ke >>> 0 < Te >>> 0 ? 1 : 0),
                          ke = ke + $,
                          _e = _e + G + (ke >>> 0 < $ >>> 0 ? 1 : 0),
                          ge + pe)
                            , Ee = me + he + (Se >>> 0 < ge >>> 0 ? 1 : 0);
                          W = j,
                          q = H,
                          j = U,
                          H = N,
                          U = L,
                          N = z,
                          z = F + ke | 0,
                          L = R + _e + (z >>> 0 < F >>> 0 ? 1 : 0) | 0,
                          R = M,
                          F = D,
                          M = P,
                          D = O,
                          P = B,
                          O = C,
                          C = ke + Se | 0,
                          B = _e + Ee + (C >>> 0 < ke >>> 0 ? 1 : 0) | 0
                      }
                      p = n.low = p + C,
                      n.high = h + B + (p >>> 0 < C >>> 0 ? 1 : 0),
                      g = a.low = g + O,
                      a.high = m + P + (g >>> 0 < O >>> 0 ? 1 : 0),
                      b = i.low = b + D,
                      i.high = y + M + (b >>> 0 < D >>> 0 ? 1 : 0),
                      w = o.low = w + F,
                      o.high = v + R + (w >>> 0 < F >>> 0 ? 1 : 0),
                      k = s.low = k + z,
                      s.high = T + L + (k >>> 0 < z >>> 0 ? 1 : 0),
                      S = c.low = S + N,
                      c.high = _ + U + (S >>> 0 < N >>> 0 ? 1 : 0),
                      I = f.low = I + H,
                      f.high = E + j + (I >>> 0 < H >>> 0 ? 1 : 0),
                      x = d.low = x + q,
                      d.high = A + W + (x >>> 0 < q >>> 0 ? 1 : 0)
                  },
                  _doFinalize: function() {
                      var e = this._data
                        , t = e.words
                        , r = 8 * this._nDataBytes
                        , n = 8 * e.sigBytes;
                      t[n >>> 5] |= 128 << 24 - n % 32,
                      t[30 + (n + 128 >>> 10 << 5)] = Math.floor(r / 4294967296),
                      t[31 + (n + 128 >>> 10 << 5)] = r,
                      e.sigBytes = 4 * t.length,
                      this._process();
                      var a = this._hash.toX32();
                      return a
                  },
                  clone: function() {
                      var e = n.clone.call(this);
                      return e._hash = this._hash.clone(),
                      e
                  },
                  blockSize: 32
              });
              t.SHA512 = n._createHelper(f),
              t.HmacSHA512 = n._createHmacHelper(f)
          }(),
          e.SHA512
      }
      ))
  },
  d784: function(e, t, r) {
      "use strict";
      r("ac1f");
      var n = r("6eeb")
        , a = r("d039")
        , i = r("b622")
        , o = r("9263")
        , s = r("9112")
        , c = i("species")
        , u = !a((function() {
          var e = /./;
          return e.exec = function() {
              var e = [];
              return e.groups = {
                  a: "7"
              },
              e
          }
          ,
          "7" !== "".replace(e, "$<a>")
      }
      ))
        , l = function() {
          return "$0" === "a".replace(/./, "$0")
      }()
        , f = i("replace")
        , d = function() {
          return !!/./[f] && "" === /./[f]("a", "$0")
      }()
        , h = !a((function() {
          var e = /(?:)/
            , t = e.exec;
          e.exec = function() {
              return t.apply(this, arguments)
          }
          ;
          var r = "ab".split(e);
          return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
      }
      ));
      e.exports = function(e, t, r, f) {
          var p = i(e)
            , m = !a((function() {
              var t = {};
              return t[p] = function() {
                  return 7
              }
              ,
              7 != ""[e](t)
          }
          ))
            , g = m && !a((function() {
              var t = !1
                , r = /a/;
              return "split" === e && (r = {},
              r.constructor = {},
              r.constructor[c] = function() {
                  return r
              }
              ,
              r.flags = "",
              r[p] = /./[p]),
              r.exec = function() {
                  return t = !0,
                  null
              }
              ,
              r[p](""),
              !t
          }
          ));
          if (!m || !g || "replace" === e && (!u || !l || d) || "split" === e && !h) {
              var y = /./[p]
                , b = r(p, ""[e], (function(e, t, r, n, a) {
                  return t.exec === o ? m && !a ? {
                      done: !0,
                      value: y.call(t, r, n)
                  } : {
                      done: !0,
                      value: e.call(r, t, n)
                  } : {
                      done: !1
                  }
              }
              ), {
                  REPLACE_KEEPS_$0: l,
                  REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
              })
                , v = b[0]
                , w = b[1];
              n(String.prototype, e, v),
              n(RegExp.prototype, p, 2 == t ? function(e, t) {
                  return w.call(e, this, t)
              }
              : function(e) {
                  return w.call(e, this)
              }
              )
          }
          f && s(RegExp.prototype[p], "sham", !0)
      }
  },
  d81d: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("b727").map
        , i = r("1dde")
        , o = r("ae40")
        , s = i("map")
        , c = o("map");
      n({
          target: "Array",
          proto: !0,
          forced: !s || !c
      }, {
          map: function(e) {
              return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
      })
  },
  d88a: function(e, t, r) {
      "use strict";
      e.exports = {
          extensions: ["jpg", "png", "apng", "gif", "webp", "flif", "cr2", "cr3", "orf", "arw", "dng", "nef", "rw2", "raf", "tif", "bmp", "jxr", "psd", "zip", "tar", "rar", "gz", "bz2", "7z", "dmg", "mp4", "mid", "mkv", "webm", "mov", "avi", "mpg", "mp2", "mp3", "m4a", "oga", "ogg", "ogv", "opus", "flac", "wav", "spx", "amr", "pdf", "epub", "exe", "swf", "rtf", "wasm", "woff", "woff2", "eot", "ttf", "otf", "ico", "flv", "ps", "xz", "sqlite", "nes", "crx", "xpi", "cab", "deb", "ar", "rpm", "Z", "lz", "msi", "mxf", "mts", "blend", "bpg", "docx", "pptx", "xlsx", "3gp", "3g2", "jp2", "jpm", "jpx", "mj2", "aif", "qcp", "odt", "ods", "odp", "xml", "mobi", "heic", "cur", "ktx", "ape", "wv", "wmv", "wma", "dcm", "ics", "glb", "pcap", "dsf", "lnk", "alias", "voc", "ac3", "m4v", "m4p", "m4b", "f4v", "f4p", "f4b", "f4a", "mie", "asf", "ogm", "ogx", "mpc", "arrow", "shp", "aac", "mp1", "it", "s3m", "xm"],
          mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/flif", "image/x-canon-cr2", "image/x-canon-cr3", "image/tiff", "image/bmp", "image/vnd.ms-photo", "image/vnd.adobe.photoshop", "application/epub+zip", "application/x-xpinstall", "application/vnd.oasis.opendocument.text", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/zip", "application/x-tar", "application/x-rar-compressed", "application/gzip", "application/x-bzip2", "application/x-7z-compressed", "application/x-apple-diskimage", "application/x-apache-arrow", "video/mp4", "audio/midi", "video/x-matroska", "video/webm", "video/quicktime", "video/vnd.avi", "audio/vnd.wave", "audio/qcelp", "audio/x-ms-wma", "video/x-ms-asf", "application/vnd.ms-asf", "video/mpeg", "video/3gpp", "audio/mpeg", "audio/mp4", "audio/opus", "video/ogg", "audio/ogg", "application/ogg", "audio/x-flac", "audio/ape", "audio/wavpack", "audio/amr", "application/pdf", "application/x-msdownload", "application/x-shockwave-flash", "application/rtf", "application/wasm", "font/woff", "font/woff2", "application/vnd.ms-fontobject", "font/ttf", "font/otf", "image/x-icon", "video/x-flv", "application/postscript", "application/x-xz", "application/x-sqlite3", "application/x-nintendo-nes-rom", "application/x-google-chrome-extension", "application/vnd.ms-cab-compressed", "application/x-deb", "application/x-unix-archive", "application/x-rpm", "application/x-compress", "application/x-lzip", "application/x-msi", "application/x-mie", "application/mxf", "video/mp2t", "application/x-blender", "image/bpg", "image/jp2", "image/jpx", "image/jpm", "image/mj2", "audio/aiff", "application/xml", "application/x-mobipocket-ebook", "image/heif", "image/heif-sequence", "image/heic", "image/heic-sequence", "image/ktx", "application/dicom", "audio/x-musepack", "text/calendar", "model/gltf-binary", "application/vnd.tcpdump.pcap", "audio/x-dsf", "application/x.ms.shortcut", "application/x.apple.alias", "audio/x-voc", "audio/vnd.dolby.dd-raw", "audio/x-m4a", "image/apng", "image/x-olympus-orf", "image/x-sony-arw", "image/x-adobe-dng", "image/x-nikon-nef", "image/x-panasonic-rw2", "image/x-fujifilm-raf", "video/x-m4v", "video/3gpp2", "application/x-esri-shape", "audio/aac", "audio/x-it", "audio/x-s3m", "audio/x-xm"]
      }
  },
  da6a: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("f654")
        , i = r("98a7");
      class o {
          constructor(e, t) {
              this.isAifc = t;
              const r = t ? 22 : 18;
              a.ok(e.chunkSize >= r, `COMMON CHUNK size should always be at least ${r}`),
              this.len = e.chunkSize
          }
          get(e, t) {
              const r = e.readUInt16BE(t + 8) - 16398
                , a = e.readUInt16BE(t + 8 + 2)
                , o = {
                  numChannels: e.readUInt16BE(t),
                  numSampleFrames: e.readUInt32BE(t + 2),
                  sampleSize: e.readUInt16BE(t + 6),
                  sampleRate: r < 0 ? a >> Math.abs(r) : a << r
              };
              if (this.isAifc) {
                  if (o.compressionType = i.FourCcToken.get(e, t + 18),
                  this.len > 22) {
                      const r = e.readInt8(t + 22)
                        , a = (r + 1) % 2;
                      if (23 + r + a !== this.len)
                          throw new Error("Illegal pstring length");
                      o.compressionName = new n.StringType(r,"binary").get(e, t + 23)
                  }
              } else
                  o.compressionName = "PCM";
              return o
          }
      }
      t.Common = o
  },
  da84: function(e, t, r) {
      (function(t) {
          var r = function(e) {
              return e && e.Math == Math && e
          };
          e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || Function("return this")()
      }
      ).call(this, r("c8ba"))
  },
  dbbe: function(module, exports, __webpack_require__) {
      "use strict";
      (function(Buffer) {
          const Token = __webpack_require__("6f58")
            , strtok3 = __webpack_require__("e087")
            , {stringToBytes: stringToBytes, tarHeaderChecksumMatches: tarHeaderChecksumMatches, uint32SyncSafeToken: uint32SyncSafeToken, uint8ArrayUtf8ByteString: uint8ArrayUtf8ByteString} = __webpack_require__("5b7a")
            , supported = __webpack_require__("d88a")
            , minimumBytes = 4100;
          async function fromStream(e) {
              const t = await strtok3.fromStream(e);
              try {
                  return await fromTokenizer(t)
              } finally {
                  await t.close()
              }
          }
          async function fromBuffer(e) {
              if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e)))
                  throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
              const t = e instanceof Buffer ? e : Buffer.from(e);
              if (!(t && t.length > 1))
                  return;
              const r = strtok3.fromBuffer(t);
              return fromTokenizer(r)
          }
          function _check(e, t, r) {
              r = {
                  offset: 0,
                  ...r
              };
              for (const [n,a] of t.entries())
                  if (r.mask) {
                      if (a !== (r.mask[n] & e[n + r.offset]))
                          return !1
                  } else if (a !== e[n + r.offset])
                      return !1;
              return !0
          }
          async function fromTokenizer(e) {
              try {
                  return _fromTokenizer(e)
              } catch (t) {
                  if (!(t instanceof strtok3.EndOfStreamError))
                      throw t
              }
          }
          async function _fromTokenizer(e) {
              let t = Buffer.alloc(minimumBytes);
              const r = 12
                , n = (e,r)=>_check(t, e, r)
                , a = (e,t)=>n(stringToBytes(e), t);
              if (e.fileInfo.size || (e.fileInfo.size = Number.MAX_SAFE_INTEGER),
              await e.peekBuffer(t, 0, r, e.position, !0),
              n([66, 77]))
                  return {
                      ext: "bmp",
                      mime: "image/bmp"
                  };
              if (n([11, 119]))
                  return {
                      ext: "ac3",
                      mime: "audio/vnd.dolby.dd-raw"
                  };
              if (n([120, 1]))
                  return {
                      ext: "dmg",
                      mime: "application/x-apple-diskimage"
                  };
              if (n([77, 90]))
                  return {
                      ext: "exe",
                      mime: "application/x-msdownload"
                  };
              if (n([37, 33]))
                  return {
                      ext: "ps",
                      mime: "application/postscript"
                  };
              if (n([31, 160]) || n([31, 157]))
                  return {
                      ext: "Z",
                      mime: "application/x-compress"
                  };
              if (n([255, 216, 255]))
                  return {
                      ext: "jpg",
                      mime: "image/jpeg"
                  };
              if (n([73, 73, 188]))
                  return {
                      ext: "jxr",
                      mime: "image/vnd.ms-photo"
                  };
              if (n([31, 139, 8]))
                  return {
                      ext: "gz",
                      mime: "application/gzip"
                  };
              if (n([66, 90, 104]))
                  return {
                      ext: "bz2",
                      mime: "application/x-bzip2"
                  };
              if (a("ID3")) {
                  await e.ignore(6);
                  const t = await e.readToken(uint32SyncSafeToken);
                  return e.position + t > e.fileInfo.size ? {
                      ext: "mp3",
                      mime: "audio/mpeg"
                  } : (await e.ignore(t),
                  fromTokenizer(e))
              }
              if (a("MP+"))
                  return {
                      ext: "mpc",
                      mime: "audio/x-musepack"
                  };
              if ((67 === t[0] || 70 === t[0]) && n([87, 83], {
                  offset: 1
              }))
                  return {
                      ext: "swf",
                      mime: "application/x-shockwave-flash"
                  };
              if (n([71, 73, 70]))
                  return {
                      ext: "gif",
                      mime: "image/gif"
                  };
              if (a("FLIF"))
                  return {
                      ext: "flif",
                      mime: "image/flif"
                  };
              if (a("8BPS"))
                  return {
                      ext: "psd",
                      mime: "image/vnd.adobe.photoshop"
                  };
              if (a("WEBP", {
                  offset: 8
              }))
                  return {
                      ext: "webp",
                      mime: "image/webp"
                  };
              if (a("MPCK"))
                  return {
                      ext: "mpc",
                      mime: "audio/x-musepack"
                  };
              if (a("FORM"))
                  return {
                      ext: "aif",
                      mime: "audio/aiff"
                  };
              if (n([80, 75, 3, 4])) {
                  try {
                      while (e.position + 30 < e.fileInfo.size) {
                          await e.readBuffer(t, 0, 30);
                          const r = {
                              compressedSize: t.readUInt32LE(18),
                              uncompressedSize: t.readUInt32LE(22),
                              filenameLength: t.readUInt16LE(26),
                              extraFieldLength: t.readUInt16LE(28)
                          };
                          if (r.filename = await e.readToken(new Token.StringType(r.filenameLength,"utf-8")),
                          await e.ignore(r.extraFieldLength),
                          "META-INF/mozilla.rsa" === r.filename)
                              return {
                                  ext: "xpi",
                                  mime: "application/x-xpinstall"
                              };
                          if (r.filename.endsWith(".rels") || r.filename.endsWith(".xml")) {
                              const e = r.filename.split("/")[0];
                              switch (e) {
                              case "_rels":
                                  break;
                              case "word":
                                  return {
                                      ext: "docx",
                                      mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                  };
                              case "ppt":
                                  return {
                                      ext: "pptx",
                                      mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                                  };
                              case "xl":
                                  return {
                                      ext: "xlsx",
                                      mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                  };
                              default:
                                  break
                              }
                          }
                          if (r.filename.startsWith("xl/"))
                              return {
                                  ext: "xlsx",
                                  mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                              };
                          if ("mimetype" === r.filename && r.compressedSize === r.uncompressedSize) {
                              const t = await e.readToken(new Token.StringType(r.compressedSize,"utf-8"));
                              switch (t) {
                              case "application/epub+zip":
                                  return {
                                      ext: "epub",
                                      mime: "application/epub+zip"
                                  };
                              case "application/vnd.oasis.opendocument.text":
                                  return {
                                      ext: "odt",
                                      mime: "application/vnd.oasis.opendocument.text"
                                  };
                              case "application/vnd.oasis.opendocument.spreadsheet":
                                  return {
                                      ext: "ods",
                                      mime: "application/vnd.oasis.opendocument.spreadsheet"
                                  };
                              case "application/vnd.oasis.opendocument.presentation":
                                  return {
                                      ext: "odp",
                                      mime: "application/vnd.oasis.opendocument.presentation"
                                  };
                              default:
                              }
                          }
                          await e.ignore(r.compressedSize)
                      }
                  } catch (l) {
                      if (!(l instanceof strtok3.EndOfStreamError))
                          throw l
                  }
                  return {
                      ext: "zip",
                      mime: "application/zip"
                  }
              }
              if (a("OggS")) {
                  await e.ignore(28);
                  const t = Buffer.alloc(8);
                  return await e.readBuffer(t),
                  _check(t, [79, 112, 117, 115, 72, 101, 97, 100]) ? {
                      ext: "opus",
                      mime: "audio/opus"
                  } : _check(t, [128, 116, 104, 101, 111, 114, 97]) ? {
                      ext: "ogv",
                      mime: "video/ogg"
                  } : _check(t, [1, 118, 105, 100, 101, 111, 0]) ? {
                      ext: "ogm",
                      mime: "video/ogg"
                  } : _check(t, [127, 70, 76, 65, 67]) ? {
                      ext: "oga",
                      mime: "audio/ogg"
                  } : _check(t, [83, 112, 101, 101, 120, 32, 32]) ? {
                      ext: "spx",
                      mime: "audio/ogg"
                  } : _check(t, [1, 118, 111, 114, 98, 105, 115]) ? {
                      ext: "ogg",
                      mime: "audio/ogg"
                  } : {
                      ext: "ogx",
                      mime: "application/ogg"
                  }
              }
              if (n([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3]))
                  return {
                      ext: "zip",
                      mime: "application/zip"
                  };
              if (a("ftyp", {
                  offset: 4
              }) && 0 !== (96 & t[8])) {
                  const e = uint8ArrayUtf8ByteString(t, 8, 12).replace("\0", " ").trim();
                  switch (e) {
                  case "mif1":
                      return {
                          ext: "heic",
                          mime: "image/heif"
                      };
                  case "msf1":
                      return {
                          ext: "heic",
                          mime: "image/heif-sequence"
                      };
                  case "heic":
                  case "heix":
                      return {
                          ext: "heic",
                          mime: "image/heic"
                      };
                  case "hevc":
                  case "hevx":
                      return {
                          ext: "heic",
                          mime: "image/heic-sequence"
                      };
                  case "qt":
                      return {
                          ext: "mov",
                          mime: "video/quicktime"
                      };
                  case "M4V":
                  case "M4VH":
                  case "M4VP":
                      return {
                          ext: "m4v",
                          mime: "video/x-m4v"
                      };
                  case "M4P":
                      return {
                          ext: "m4p",
                          mime: "video/mp4"
                      };
                  case "M4B":
                      return {
                          ext: "m4b",
                          mime: "audio/mp4"
                      };
                  case "M4A":
                      return {
                          ext: "m4a",
                          mime: "audio/x-m4a"
                      };
                  case "F4V":
                      return {
                          ext: "f4v",
                          mime: "video/mp4"
                      };
                  case "F4P":
                      return {
                          ext: "f4p",
                          mime: "video/mp4"
                      };
                  case "F4A":
                      return {
                          ext: "f4a",
                          mime: "audio/mp4"
                      };
                  case "F4B":
                      return {
                          ext: "f4b",
                          mime: "audio/mp4"
                      };
                  case "crx":
                      return {
                          ext: "cr3",
                          mime: "image/x-canon-cr3"
                      };
                  default:
                      return e.startsWith("3g") ? e.startsWith("3g2") ? {
                          ext: "3g2",
                          mime: "video/3gpp2"
                      } : {
                          ext: "3gp",
                          mime: "video/3gpp"
                      } : {
                          ext: "mp4",
                          mime: "video/mp4"
                      }
                  }
              }
              if (a("MThd"))
                  return {
                      ext: "mid",
                      mime: "audio/midi"
                  };
              if (a("wOFF") && (n([0, 1, 0, 0], {
                  offset: 4
              }) || a("OTTO", {
                  offset: 4
              })))
                  return {
                      ext: "woff",
                      mime: "font/woff"
                  };
              if (a("wOF2") && (n([0, 1, 0, 0], {
                  offset: 4
              }) || a("OTTO", {
                  offset: 4
              })))
                  return {
                      ext: "woff2",
                      mime: "font/woff2"
                  };
              if (n([212, 195, 178, 161]) || n([161, 178, 195, 212]))
                  return {
                      ext: "pcap",
                      mime: "application/vnd.tcpdump.pcap"
                  };
              if (a("DSD "))
                  return {
                      ext: "dsf",
                      mime: "audio/x-dsf"
                  };
              if (a("LZIP"))
                  return {
                      ext: "lz",
                      mime: "application/x-lzip"
                  };
              if (a("fLaC"))
                  return {
                      ext: "flac",
                      mime: "audio/x-flac"
                  };
              if (n([66, 80, 71, 251]))
                  return {
                      ext: "bpg",
                      mime: "image/bpg"
                  };
              if (a("wvpk"))
                  return {
                      ext: "wv",
                      mime: "audio/wavpack"
                  };
              if (a("%PDF"))
                  return {
                      ext: "pdf",
                      mime: "application/pdf"
                  };
              if (n([0, 97, 115, 109]))
                  return {
                      ext: "wasm",
                      mime: "application/wasm"
                  };
              if (n([73, 73, 42, 0] || !1))
                  return a("CR", {
                      offset: 8
                  }) ? {
                      ext: "cr2",
                      mime: "image/x-canon-cr2"
                  } : n([28, 0, 254, 0], {
                      offset: 8
                  }) ? {
                      ext: "nef",
                      mime: "image/x-nikon-nef"
                  } : n([8, 0, 0, 0], {
                      offset: 4
                  }) && (n([45, 0, 254, 0], {
                      offset: 8
                  }) || n([39, 0, 254, 0], {
                      offset: 8
                  })) ? {
                      ext: "dng",
                      mime: "image/x-adobe-dng"
                  } : (t = Buffer.alloc(24),
                  await e.peekBuffer(t),
                  (n([16, 251, 134, 1], {
                      offset: 4
                  }) || n([8, 0, 0, 0], {
                      offset: 4
                  })) && n([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], {
                      offset: 9
                  }) ? {
                      ext: "arw",
                      mime: "image/x-sony-arw"
                  } : {
                      ext: "tif",
                      mime: "image/tiff"
                  });
              if (n([77, 77, 0, 42]))
                  return {
                      ext: "tif",
                      mime: "image/tiff"
                  };
              if (a("MAC "))
                  return {
                      ext: "ape",
                      mime: "audio/ape"
                  };
              if (n([26, 69, 223, 163])) {
                  async function i() {
                      const t = await e.peekNumber(Token.UINT8);
                      let r = 128
                        , n = 0;
                      while (0 === (t & r))
                          ++n,
                          r >>= 1;
                      const a = Buffer.alloc(n + 1);
                      return await e.readBuffer(a),
                      a
                  }
                  async function o() {
                      const e = await i()
                        , t = await i();
                      t[0] ^= 128 >> t.length - 1;
                      const r = Math.min(6, t.length);
                      return {
                          id: e.readUIntBE(0, e.length),
                          len: t.readUIntBE(t.length - r, r)
                      }
                  }
                  async function s(t, r) {
                      while (r > 0) {
                          const t = await o();
                          if (17026 === t.id)
                              return e.readToken(new Token.StringType(t.len,"utf-8"));
                          await e.ignore(t.len),
                          --r
                      }
                  }
                  const t = await o()
                    , r = await s(1, t.len);
                  switch (r) {
                  case "webm":
                      return {
                          ext: "webm",
                          mime: "video/webm"
                      };
                  case "matroska":
                      return {
                          ext: "mkv",
                          mime: "video/x-matroska"
                      };
                  default:
                      return
                  }
              }
              if (n([82, 73, 70, 70])) {
                  if (n([65, 86, 73], {
                      offset: 8
                  }))
                      return {
                          ext: "avi",
                          mime: "video/vnd.avi"
                      };
                  if (n([87, 65, 86, 69], {
                      offset: 8
                  }))
                      return {
                          ext: "wav",
                          mime: "audio/vnd.wave"
                      };
                  if (n([81, 76, 67, 77], {
                      offset: 8
                  }))
                      return {
                          ext: "qcp",
                          mime: "audio/qcelp"
                      }
              }
              if (a("SQLi"))
                  return {
                      ext: "sqlite",
                      mime: "application/x-sqlite3"
                  };
              if (n([78, 69, 83, 26]))
                  return {
                      ext: "nes",
                      mime: "application/x-nintendo-nes-rom"
                  };
              if (a("Cr24"))
                  return {
                      ext: "crx",
                      mime: "application/x-google-chrome-extension"
                  };
              if (a("MSCF") || a("ISc("))
                  return {
                      ext: "cab",
                      mime: "application/vnd.ms-cab-compressed"
                  };
              if (n([237, 171, 238, 219]))
                  return {
                      ext: "rpm",
                      mime: "application/x-rpm"
                  };
              if (n([79, 84, 84, 79, 0]))
                  return {
                      ext: "otf",
                      mime: "font/otf"
                  };
              if (a("#!AMR"))
                  return {
                      ext: "amr",
                      mime: "audio/amr"
                  };
              if (a("{\\rtf"))
                  return {
                      ext: "rtf",
                      mime: "application/rtf"
                  };
              if (n([70, 76, 86, 1]))
                  return {
                      ext: "flv",
                      mime: "video/x-flv"
                  };
              if (a("IMPM"))
                  return {
                      ext: "it",
                      mime: "audio/x-it"
                  };
              if (n([253, 55, 122, 88, 90, 0]))
                  return {
                      ext: "xz",
                      mime: "application/x-xz"
                  };
              if (a("<?xml "))
                  return {
                      ext: "xml",
                      mime: "application/xml"
                  };
              if (a("BEGIN:"))
                  return {
                      ext: "ics",
                      mime: "text/calendar"
                  };
              if (n([55, 122, 188, 175, 39, 28]))
                  return {
                      ext: "7z",
                      mime: "application/x-7z-compressed"
                  };
              if (n([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6]))
                  return {
                      ext: "rar",
                      mime: "application/x-rar-compressed"
                  };
              if (a("BLENDER"))
                  return {
                      ext: "blend",
                      mime: "application/x-blender"
                  };
              if (a("!<arch>")) {
                  await e.ignore(8);
                  const t = await e.readToken(new Token.StringType(13,"ascii"));
                  return "debian-binary" === t ? {
                      ext: "deb",
                      mime: "application/x-deb"
                  } : {
                      ext: "ar",
                      mime: "application/x-unix-archive"
                  }
              }
              if (n([137, 80, 78, 71, 13, 10, 26, 10])) {
                  async function c() {
                      return {
                          length: await e.readToken(Token.INT32_BE),
                          type: await e.readToken(new Token.StringType(4,"binary"))
                      }
                  }
                  await e.ignore(8);
                  do {
                      const t = await c();
                      switch (t.type) {
                      case "IDAT":
                          return {
                              ext: "png",
                              mime: "image/png"
                          };
                      case "acTL":
                          return {
                              ext: "apng",
                              mime: "image/apng"
                          };
                      default:
                          await e.ignore(t.length + 4)
                      }
                  } while (e.position < e.fileInfo.size)
              }
              if (n([65, 82, 82, 79, 87, 49, 0, 0]))
                  return {
                      ext: "arrow",
                      mime: "application/x-apache-arrow"
                  };
              if (n([103, 108, 84, 70, 2, 0, 0, 0]))
                  return {
                      ext: "glb",
                      mime: "model/gltf-binary"
                  };
              if (n([102, 114, 101, 101], {
                  offset: 4
              }) || n([109, 100, 97, 116], {
                  offset: 4
              }) || n([109, 111, 111, 118], {
                  offset: 4
              }) || n([119, 105, 100, 101], {
                  offset: 4
              }))
                  return {
                      ext: "mov",
                      mime: "video/quicktime"
                  };
              if (n([73, 73, 82, 79, 8, 0, 0, 0, 24]))
                  return {
                      ext: "orf",
                      mime: "image/x-olympus-orf"
                  };
              if (n([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
                  return {
                      ext: "rw2",
                      mime: "image/x-panasonic-rw2"
                  };
              if (n([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
                  async function u() {
                      const t = Buffer.alloc(16);
                      return await e.readBuffer(t),
                      {
                          id: t,
                          size: await e.readToken(Token.UINT64_LE)
                      }
                  }
                  await e.ignore(30);
                  while (e.position + 24 < e.fileInfo.size) {
                      const t = await u();
                      let r = t.size - 24;
                      if (_check(t.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
                          const t = Buffer.alloc(16);
                          if (r -= await e.readBuffer(t),
                          _check(t, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
                              return {
                                  ext: "wma",
                                  mime: "audio/x-ms-wma"
                              };
                          if (_check(t, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
                              return {
                                  ext: "wmv",
                                  mime: "video/x-ms-asf"
                              };
                          break
                      }
                      await e.ignore(r)
                  }
                  return {
                      ext: "asf",
                      mime: "application/vnd.ms-asf"
                  }
              }
              if (n([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]))
                  return {
                      ext: "ktx",
                      mime: "image/ktx"
                  };
              if ((n([126, 16, 4]) || n([126, 24, 4])) && n([48, 77, 73, 69], {
                  offset: 4
              }))
                  return {
                      ext: "mie",
                      mime: "application/x-mie"
                  };
              if (n([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], {
                  offset: 2
              }))
                  return {
                      ext: "shp",
                      mime: "application/x-esri-shape"
                  };
              if (n([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
                  await e.ignore(20);
                  const t = await e.readToken(new Token.StringType(4,"ascii"));
                  switch (t) {
                  case "jp2 ":
                      return {
                          ext: "jp2",
                          mime: "image/jp2"
                      };
                  case "jpx ":
                      return {
                          ext: "jpx",
                          mime: "image/jpx"
                      };
                  case "jpm ":
                      return {
                          ext: "jpm",
                          mime: "image/jpm"
                      };
                  case "mjp2":
                      return {
                          ext: "mj2",
                          mime: "image/mj2"
                      };
                  default:
                      return
                  }
              }
              if (n([0, 0, 1, 186]) || n([0, 0, 1, 179]))
                  return {
                      ext: "mpg",
                      mime: "video/mpeg"
                  };
              if (n([0, 1, 0, 0, 0]))
                  return {
                      ext: "ttf",
                      mime: "font/ttf"
                  };
              if (n([0, 0, 1, 0]))
                  return {
                      ext: "ico",
                      mime: "image/x-icon"
                  };
              if (n([0, 0, 2, 0]))
                  return {
                      ext: "cur",
                      mime: "image/x-icon"
                  };
              if (await e.peekBuffer(t, 0, Math.min(256, e.fileInfo.size), e.position, !0),
              a("FUJIFILMCCD-RAW"))
                  return {
                      ext: "raf",
                      mime: "image/x-fujifilm-raf"
                  };
              if (a("Extended Module:"))
                  return {
                      ext: "xm",
                      mime: "audio/x-xm"
                  };
              if (a("Creative Voice File"))
                  return {
                      ext: "voc",
                      mime: "audio/x-voc"
                  };
              if (n([48, 48, 48, 48, 48, 48], {
                  offset: 148,
                  mask: [248, 248, 248, 248, 248, 248]
              }) && tarHeaderChecksumMatches(t))
                  return {
                      ext: "tar",
                      mime: "application/x-tar"
                  };
              if (n([208, 207, 17, 224, 161, 177, 26, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62]))
                  return {
                      ext: "msi",
                      mime: "application/x-msi"
                  };
              if (n([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
                  return {
                      ext: "mxf",
                      mime: "application/mxf"
                  };
              if (a("SCRM", {
                  offset: 44
              }))
                  return {
                      ext: "s3m",
                      mime: "audio/x-s3m"
                  };
              if (n([71], {
                  offset: 4
              }) && (n([71], {
                  offset: 192
              }) || n([71], {
                  offset: 196
              })))
                  return {
                      ext: "mts",
                      mime: "video/mp2t"
                  };
              if (n([66, 79, 79, 75, 77, 79, 66, 73], {
                  offset: 60
              }))
                  return {
                      ext: "mobi",
                      mime: "application/x-mobipocket-ebook"
                  };
              if (n([68, 73, 67, 77], {
                  offset: 128
              }))
                  return {
                      ext: "dcm",
                      mime: "application/dicom"
                  };
              if (n([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70]))
                  return {
                      ext: "lnk",
                      mime: "application/x.ms.shortcut"
                  };
              if (n([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0]))
                  return {
                      ext: "alias",
                      mime: "application/x.apple.alias"
                  };
              if (n([76, 80], {
                  offset: 34
              }) && (n([0, 0, 1], {
                  offset: 8
              }) || n([1, 0, 2], {
                  offset: 8
              }) || n([2, 0, 2], {
                  offset: 8
              })))
                  return {
                      ext: "eot",
                      mime: "application/vnd.ms-fontobject"
                  };
              if (await e.peekBuffer(t, 0, Math.min(512, e.fileInfo.size), e.position, !0),
              n([48, 48, 48, 48, 48, 48], {
                  offset: 148,
                  mask: [248, 248, 248, 248, 248, 248]
              }) && tarHeaderChecksumMatches(t))
                  return {
                      ext: "tar",
                      mime: "application/x-tar"
                  };
              for (let f = 0; f < 2 && f < t.length - 16; f++)
                  if (t.length >= f + 2 && n([255, 224], {
                      offset: f,
                      mask: [255, 224]
                  })) {
                      if (n([16], {
                          offset: f + 1,
                          mask: [22]
                      }))
                          return n([8], {
                              offset: f + 1,
                              mask: [8]
                          }),
                          {
                              ext: "aac",
                              mime: "audio/aac"
                          };
                      if (n([2], {
                          offset: f + 1,
                          mask: [6]
                      }))
                          return {
                              ext: "mp3",
                              mime: "audio/mpeg"
                          };
                      if (n([4], {
                          offset: f + 1,
                          mask: [6]
                      }))
                          return {
                              ext: "mp2",
                              mime: "audio/mpeg"
                          };
                      if (n([6], {
                          offset: f + 1,
                          mask: [6]
                      }))
                          return {
                              ext: "mp1",
                              mime: "audio/mpeg"
                          }
                  }
          }
          const stream = readableStream=>new Promise((resolve,reject)=>{
              const stream = eval("require")("stream");
              readableStream.on("error", reject),
              readableStream.once("readable", async()=>{
                  const e = new stream.PassThrough
                    , t = readableStream.read(fileType.minimumBytes) || readableStream.read();
                  try {
                      const r = await fromBuffer(t);
                      e.fileType = r
                  } catch (r) {
                      reject(r)
                  }
                  readableStream.unshift(t),
                  stream.pipeline ? resolve(stream.pipeline(readableStream, e, ()=>{}
                  )) : resolve(readableStream.pipe(e))
              }
              )
          }
          )
            , fileType = {
              fromStream: fromStream,
              fromTokenizer: fromTokenizer,
              fromBuffer: fromBuffer,
              stream: stream,
              minimumBytes: 4100
          };
          Object.defineProperty(fileType, "extensions", {
              get() {
                  return new Set(supported.extensions)
              }
          }),
          Object.defineProperty(fileType, "mimeTypes", {
              get() {
                  return new Set(supported.mimeTypes)
              }
          }),
          module.exports = fileType
      }
      ).call(this, __webpack_require__("b639").Buffer)
  },
  dc14: function(e, t, r) {
      "use strict";
      (function(t, n) {
          var a = r("966d");
          function i(e) {
              var t = this;
              this.next = null,
              this.entry = null,
              this.finish = function() {
                  F(t, e)
              }
          }
          e.exports = v;
          var o, s = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? setImmediate : a.nextTick;
          v.WritableState = b;
          var c = Object.create(r("3a7c"));
          c.inherits = r("3fb5");
          var u = {
              deprecate: r("b7d1")
          }
            , l = r("429b")
            , f = r("8707").Buffer
            , d = n.Uint8Array || function() {}
          ;
          function h(e) {
              return f.from(e)
          }
          function p(e) {
              return f.isBuffer(e) || e instanceof d
          }
          var m, g = r("4681");
          function y() {}
          function b(e, t) {
              o = o || r("b19a"),
              e = e || {};
              var n = t instanceof o;
              this.objectMode = !!e.objectMode,
              n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
              var a = e.highWaterMark
                , s = e.writableHighWaterMark
                , c = this.objectMode ? 16 : 16384;
              this.highWaterMark = a || 0 === a ? a : n && (s || 0 === s) ? s : c,
              this.highWaterMark = Math.floor(this.highWaterMark),
              this.finalCalled = !1,
              this.needDrain = !1,
              this.ending = !1,
              this.ended = !1,
              this.finished = !1,
              this.destroyed = !1;
              var u = !1 === e.decodeStrings;
              this.decodeStrings = !u,
              this.defaultEncoding = e.defaultEncoding || "utf8",
              this.length = 0,
              this.writing = !1,
              this.corked = 0,
              this.sync = !0,
              this.bufferProcessing = !1,
              this.onwrite = function(e) {
                  A(t, e)
              }
              ,
              this.writecb = null,
              this.writelen = 0,
              this.bufferedRequest = null,
              this.lastBufferedRequest = null,
              this.pendingcb = 0,
              this.prefinished = !1,
              this.errorEmitted = !1,
              this.bufferedRequestCount = 0,
              this.corkedRequestsFree = new i(this)
          }
          function v(e) {
              if (o = o || r("b19a"),
              !m.call(v, this) && !(this instanceof o))
                  return new v(e);
              this._writableState = new b(e,this),
              this.writable = !0,
              e && ("function" === typeof e.write && (this._write = e.write),
              "function" === typeof e.writev && (this._writev = e.writev),
              "function" === typeof e.destroy && (this._destroy = e.destroy),
              "function" === typeof e.final && (this._final = e.final)),
              l.call(this)
          }
          function w(e, t) {
              var r = new Error("write after end");
              e.emit("error", r),
              a.nextTick(t, r)
          }
          function T(e, t, r, n) {
              var i = !0
                , o = !1;
              return null === r ? o = new TypeError("May not write null values to stream") : "string" === typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")),
              o && (e.emit("error", o),
              a.nextTick(n, o),
              i = !1),
              i
          }
          function k(e, t, r) {
              return e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = f.from(t, r)),
              t
          }
          function _(e, t, r, n, a, i) {
              if (!r) {
                  var o = k(t, n, a);
                  n !== o && (r = !0,
                  a = "buffer",
                  n = o)
              }
              var s = t.objectMode ? 1 : n.length;
              t.length += s;
              var c = t.length < t.highWaterMark;
              if (c || (t.needDrain = !0),
              t.writing || t.corked) {
                  var u = t.lastBufferedRequest;
                  t.lastBufferedRequest = {
                      chunk: n,
                      encoding: a,
                      isBuf: r,
                      callback: i,
                      next: null
                  },
                  u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                  t.bufferedRequestCount += 1
              } else
                  S(e, t, !1, s, n, a, i);
              return c
          }
          function S(e, t, r, n, a, i, o) {
              t.writelen = n,
              t.writecb = o,
              t.writing = !0,
              t.sync = !0,
              r ? e._writev(a, t.onwrite) : e._write(a, i, t.onwrite),
              t.sync = !1
          }
          function E(e, t, r, n, i) {
              --t.pendingcb,
              r ? (a.nextTick(i, n),
              a.nextTick(D, e, t),
              e._writableState.errorEmitted = !0,
              e.emit("error", n)) : (i(n),
              e._writableState.errorEmitted = !0,
              e.emit("error", n),
              D(e, t))
          }
          function I(e) {
              e.writing = !1,
              e.writecb = null,
              e.length -= e.writelen,
              e.writelen = 0
          }
          function A(e, t) {
              var r = e._writableState
                , n = r.sync
                , a = r.writecb;
              if (I(r),
              t)
                  E(e, r, n, t, a);
              else {
                  var i = P(r);
                  i || r.corked || r.bufferProcessing || !r.bufferedRequest || C(e, r),
                  n ? s(x, e, r, i, a) : x(e, r, i, a)
              }
          }
          function x(e, t, r, n) {
              r || B(e, t),
              t.pendingcb--,
              n(),
              D(e, t)
          }
          function B(e, t) {
              0 === t.length && t.needDrain && (t.needDrain = !1,
              e.emit("drain"))
          }
          function C(e, t) {
              t.bufferProcessing = !0;
              var r = t.bufferedRequest;
              if (e._writev && r && r.next) {
                  var n = t.bufferedRequestCount
                    , a = new Array(n)
                    , o = t.corkedRequestsFree;
                  o.entry = r;
                  var s = 0
                    , c = !0;
                  while (r)
                      a[s] = r,
                      r.isBuf || (c = !1),
                      r = r.next,
                      s += 1;
                  a.allBuffers = c,
                  S(e, t, !0, t.length, a, "", o.finish),
                  t.pendingcb++,
                  t.lastBufferedRequest = null,
                  o.next ? (t.corkedRequestsFree = o.next,
                  o.next = null) : t.corkedRequestsFree = new i(t),
                  t.bufferedRequestCount = 0
              } else {
                  while (r) {
                      var u = r.chunk
                        , l = r.encoding
                        , f = r.callback
                        , d = t.objectMode ? 1 : u.length;
                      if (S(e, t, !1, d, u, l, f),
                      r = r.next,
                      t.bufferedRequestCount--,
                      t.writing)
                          break
                  }
                  null === r && (t.lastBufferedRequest = null)
              }
              t.bufferedRequest = r,
              t.bufferProcessing = !1
          }
          function P(e) {
              return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
          }
          function O(e, t) {
              e._final((function(r) {
                  t.pendingcb--,
                  r && e.emit("error", r),
                  t.prefinished = !0,
                  e.emit("prefinish"),
                  D(e, t)
              }
              ))
          }
          function M(e, t) {
              t.prefinished || t.finalCalled || ("function" === typeof e._final ? (t.pendingcb++,
              t.finalCalled = !0,
              a.nextTick(O, e, t)) : (t.prefinished = !0,
              e.emit("prefinish")))
          }
          function D(e, t) {
              var r = P(t);
              return r && (M(e, t),
              0 === t.pendingcb && (t.finished = !0,
              e.emit("finish"))),
              r
          }
          function R(e, t, r) {
              t.ending = !0,
              D(e, t),
              r && (t.finished ? a.nextTick(r) : e.once("finish", r)),
              t.ended = !0,
              e.writable = !1
          }
          function F(e, t, r) {
              var n = e.entry;
              e.entry = null;
              while (n) {
                  var a = n.callback;
                  t.pendingcb--,
                  a(r),
                  n = n.next
              }
              t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
          }
          c.inherits(v, l),
          b.prototype.getBuffer = function() {
              var e = this.bufferedRequest
                , t = [];
              while (e)
                  t.push(e),
                  e = e.next;
              return t
          }
          ,
          function() {
              try {
                  Object.defineProperty(b.prototype, "buffer", {
                      get: u.deprecate((function() {
                          return this.getBuffer()
                      }
                      ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                  })
              } catch (e) {}
          }(),
          "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (m = Function.prototype[Symbol.hasInstance],
          Object.defineProperty(v, Symbol.hasInstance, {
              value: function(e) {
                  return !!m.call(this, e) || this === v && (e && e._writableState instanceof b)
              }
          })) : m = function(e) {
              return e instanceof this
          }
          ,
          v.prototype.pipe = function() {
              this.emit("error", new Error("Cannot pipe, not readable"))
          }
          ,
          v.prototype.write = function(e, t, r) {
              var n = this._writableState
                , a = !1
                , i = !n.objectMode && p(e);
              return i && !f.isBuffer(e) && (e = h(e)),
              "function" === typeof t && (r = t,
              t = null),
              i ? t = "buffer" : t || (t = n.defaultEncoding),
              "function" !== typeof r && (r = y),
              n.ended ? w(this, r) : (i || T(this, n, e, r)) && (n.pendingcb++,
              a = _(this, n, i, e, t, r)),
              a
          }
          ,
          v.prototype.cork = function() {
              var e = this._writableState;
              e.corked++
          }
          ,
          v.prototype.uncork = function() {
              var e = this._writableState;
              e.corked && (e.corked--,
              e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || C(this, e))
          }
          ,
          v.prototype.setDefaultEncoding = function(e) {
              if ("string" === typeof e && (e = e.toLowerCase()),
              !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                  throw new TypeError("Unknown encoding: " + e);
              return this._writableState.defaultEncoding = e,
              this
          }
          ,
          Object.defineProperty(v.prototype, "writableHighWaterMark", {
              enumerable: !1,
              get: function() {
                  return this._writableState.highWaterMark
              }
          }),
          v.prototype._write = function(e, t, r) {
              r(new Error("_write() is not implemented"))
          }
          ,
          v.prototype._writev = null,
          v.prototype.end = function(e, t, r) {
              var n = this._writableState;
              "function" === typeof e ? (r = e,
              e = null,
              t = null) : "function" === typeof t && (r = t,
              t = null),
              null !== e && void 0 !== e && this.write(e, t),
              n.corked && (n.corked = 1,
              this.uncork()),
              n.ending || n.finished || R(this, n, r)
          }
          ,
          Object.defineProperty(v.prototype, "destroyed", {
              get: function() {
                  return void 0 !== this._writableState && this._writableState.destroyed
              },
              set: function(e) {
                  this._writableState && (this._writableState.destroyed = e)
              }
          }),
          v.prototype.destroy = g.destroy,
          v.prototype._undestroy = g.undestroy,
          v.prototype._destroy = function(e, t) {
              this.end(),
              t(e)
          }
      }
      ).call(this, r("4362"), r("c8ba"))
  },
  dc90: function(e, t, r) {
      function n(e) {
          function t(e) {
              let t = 0;
              for (let r = 0; r < e.length; r++)
                  t = (t << 5) - t + e.charCodeAt(r),
                  t |= 0;
              return n.colors[Math.abs(t) % n.colors.length]
          }
          function n(e) {
              let r;
              function o(...e) {
                  if (!o.enabled)
                      return;
                  const t = o
                    , a = Number(new Date)
                    , i = a - (r || a);
                  t.diff = i,
                  t.prev = r,
                  t.curr = a,
                  r = a,
                  e[0] = n.coerce(e[0]),
                  "string" !== typeof e[0] && e.unshift("%O");
                  let s = 0;
                  e[0] = e[0].replace(/%([a-zA-Z%])/g, (r,a)=>{
                      if ("%%" === r)
                          return r;
                      s++;
                      const i = n.formatters[a];
                      if ("function" === typeof i) {
                          const n = e[s];
                          r = i.call(t, n),
                          e.splice(s, 1),
                          s--
                      }
                      return r
                  }
                  ),
                  n.formatArgs.call(t, e);
                  const c = t.log || n.log;
                  c.apply(t, e)
              }
              return o.namespace = e,
              o.enabled = n.enabled(e),
              o.useColors = n.useColors(),
              o.color = t(e),
              o.destroy = a,
              o.extend = i,
              "function" === typeof n.init && n.init(o),
              n.instances.push(o),
              o
          }
          function a() {
              const e = n.instances.indexOf(this);
              return -1 !== e && (n.instances.splice(e, 1),
              !0)
          }
          function i(e, t) {
              const r = n(this.namespace + ("undefined" === typeof t ? ":" : t) + e);
              return r.log = this.log,
              r
          }
          function o(e) {
              let t;
              n.save(e),
              n.names = [],
              n.skips = [];
              const r = ("string" === typeof e ? e : "").split(/[\s,]+/)
                , a = r.length;
              for (t = 0; t < a; t++)
                  r[t] && (e = r[t].replace(/\*/g, ".*?"),
                  "-" === e[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
              for (t = 0; t < n.instances.length; t++) {
                  const e = n.instances[t];
                  e.enabled = n.enabled(e.namespace)
              }
          }
          function s() {
              const e = [...n.names.map(u), ...n.skips.map(u).map(e=>"-" + e)].join(",");
              return n.enable(""),
              e
          }
          function c(e) {
              if ("*" === e[e.length - 1])
                  return !0;
              let t, r;
              for (t = 0,
              r = n.skips.length; t < r; t++)
                  if (n.skips[t].test(e))
                      return !1;
              for (t = 0,
              r = n.names.length; t < r; t++)
                  if (n.names[t].test(e))
                      return !0;
              return !1
          }
          function u(e) {
              return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
          }
          function l(e) {
              return e instanceof Error ? e.stack || e.message : e
          }
          return n.debug = n,
          n.default = n,
          n.coerce = l,
          n.disable = s,
          n.enable = o,
          n.enabled = c,
          n.humanize = r("1468"),
          Object.keys(e).forEach(t=>{
              n[t] = e[t]
          }
          ),
          n.instances = [],
          n.names = [],
          n.skips = [],
          n.formatters = {},
          n.selectColor = t,
          n.enable(n.load()),
          n
      }
      e.exports = n
  },
  ddb0: function(e, t, r) {
      var n = r("da84")
        , a = r("fdbc")
        , i = r("e260")
        , o = r("9112")
        , s = r("b622")
        , c = s("iterator")
        , u = s("toStringTag")
        , l = i.values;
      for (var f in a) {
          var d = n[f]
            , h = d && d.prototype;
          if (h) {
              if (h[c] !== l)
                  try {
                      o(h, c, l)
                  } catch (m) {
                      h[c] = l
                  }
              if (h[u] || o(h, u, f),
              a[f])
                  for (var p in i)
                      if (h[p] !== i[p])
                          try {
                              o(h, p, i[p])
                          } catch (m) {
                              h[p] = i[p]
                          }
          }
      }
  },
  dde9: function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, "Decrypt", (function() {
          return u
      }
      ));
      r("4160"),
      r("a15b"),
      r("d81d"),
      r("fb6a"),
      r("ace4"),
      r("d3b7"),
      r("ac1f"),
      r("25f0"),
      r("3ca3"),
      r("5319"),
      r("5cc6"),
      r("9a8c"),
      r("a975"),
      r("735e"),
      r("c1ac"),
      r("d139"),
      r("3a7b"),
      r("d5d6"),
      r("82f8"),
      r("e91f"),
      r("60bd"),
      r("5f96"),
      r("3280"),
      r("3fcc"),
      r("ca91"),
      r("25a1"),
      r("cd26"),
      r("3c5d"),
      r("2954"),
      r("649e"),
      r("219c"),
      r("170b"),
      r("b39a"),
      r("72f7"),
      r("159b"),
      r("ddb0"),
      r("2b3d"),
      r("96cf");
      var n = r("1da1")
        , a = r("06dc")
        , i = r("3452")
        , o = r("7907")
        , s = i.enc.Hex.parse("687a4852416d736f356b496e62617857")
        , c = i.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728");
      function u(e) {
          return l.apply(this, arguments)
      }
      function l() {
          return l = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
              var r, n, i, o, s, c, u, l, d, g, y, b;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          Object(a["d"])(t);
                      case 2:
                          if (r = e.sent,
                          n = new DataView(r),
                          1313166403 === n.getUint32(0, !0) && 1296122950 === n.getUint32(4, !0)) {
                              e.next = 6;
                              break
                          }
                          return e.abrupt("return", {
                              status: !1,
                              message: "此ncm文件已损坏"
                          });
                      case 6:
                          for (i = h(n, r, 10),
                          o = p(i.data),
                          s = m(n, r, i.offset),
                          c = s.data,
                          u = s.offset + n.getUint32(s.offset + 5, !0) + 13,
                          l = new Uint8Array(r,u),
                          d = 0; d < l.length; ++d)
                              l[d] ^= o[255 & d];
                          if (void 0 === c.format && (c.format = Object(a["b"])(l, "mp3")),
                          g = a["a"][c.format],
                          y = [],
                          c.artist.forEach((function(e) {
                              return y.push(e[0])
                          }
                          )),
                          "mp3" !== c.format) {
                              e.next = 21;
                              break
                          }
                          return e.next = 20,
                          f(l, y, c.musicName, c.album, c.albumPic);
                      case 20:
                          l = e.sent;
                      case 21:
                          return b = new Blob([l],{
                              type: g
                          }),
                          e.abrupt("return", {
                              status: !0,
                              title: c.musicName,
                              artist: y.join(" & "),
                              ext: c.format,
                              album: c.album,
                              picture: c.albumPic,
                              file: URL.createObjectURL(b),
                              mime: g
                          });
                      case 23:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          l.apply(this, arguments)
      }
      function f(e, t, r, n, a) {
          return d.apply(this, arguments)
      }
      function d() {
          return d = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n, a, i) {
              var s, c;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          if (s = new o(t),
                          s.setFrame("TPE1", r).setFrame("TIT2", n).setFrame("TALB", a),
                          "" === i) {
                              e.next = 15;
                              break
                          }
                          return e.prev = 3,
                          e.next = 6,
                          fetch(i);
                      case 6:
                          return e.next = 8,
                          e.sent.arrayBuffer();
                      case 8:
                          c = e.sent,
                          s.setFrame("APIC", {
                              type: 3,
                              data: c,
                              description: "Cover"
                          }),
                          e.next = 15;
                          break;
                      case 12:
                          e.prev = 12,
                          e.t0 = e["catch"](3),
                          console.log("Fail to write cover image!");
                      case 15:
                          return s.addTag(),
                          e.abrupt("return", s.arrayBuffer);
                      case 17:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, null, [[3, 12]])
          }
          ))),
          d.apply(this, arguments)
      }
      function h(e, t, r) {
          var n = e.getUint32(r, !0);
          r += 4;
          var a = new Uint8Array(t,r,n).map((function(e) {
              return 100 ^ e
          }
          ));
          r += n;
          for (var o = i.AES.decrypt({
              ciphertext: i.lib.WordArray.create(a)
          }, s, {
              mode: i.mode.ECB,
              padding: i.pad.Pkcs7
          }), c = new Uint8Array(o.sigBytes), u = o.words, l = o.sigBytes, f = 0; f < l; f++)
              c[f] = u[f >>> 2] >>> 24 - f % 4 * 8 & 255;
          return {
              offset: r,
              data: c.slice(17)
          }
      }
      function p(e) {
          for (var t = new Uint8Array(Array(256).keys()), r = e.length, n = 0, a = 0; a < 256; a++) {
              n = t[a] + n + e[a % r] & 255;
              var i = [t[n], t[a]];
              t[a] = i[0],
              t[n] = i[1]
          }
          return t.map((function(e, t, r) {
              t = t + 1 & 255;
              var n = r[t]
                , a = r[t + n & 255];
              return r[n + a & 255]
          }
          ))
      }
      function m(e, t, r) {
          var n = e.getUint32(r, !0);
          if (r += 4,
          0 === n)
              return {};
          var a = new Uint8Array(t,r,n).map((function(e) {
              return 99 ^ e
          }
          ));
          r += n;
          var o = i.AES.decrypt({
              ciphertext: i.enc.Base64.parse(i.lib.WordArray.create(a.slice(22)).toString(i.enc.Utf8))
          }, c, {
              mode: i.mode.ECB,
              padding: i.pad.Pkcs7
          })
            , s = JSON.parse(o.toString(i.enc.Utf8).slice(6));
          return s.albumPic = s.albumPic.replace("http:", "https:"),
          {
              data: s,
              offset: r
          }
      }
  },
  de36: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97")
        , a = {
          Title: "title",
          Author: "artist",
          "WM/AlbumArtist": "albumartist",
          "WM/AlbumTitle": "album",
          "WM/Year": "date",
          "WM/OriginalReleaseTime": "originaldate",
          "WM/OriginalReleaseYear": "originalyear",
          Description: "comment",
          "WM/TrackNumber": "track",
          "WM/PartOfSet": "disk",
          "WM/Genre": "genre",
          "WM/Composer": "composer",
          "WM/Lyrics": "lyrics",
          "WM/AlbumSortOrder": "albumsort",
          "WM/TitleSortOrder": "titlesort",
          "WM/ArtistSortOrder": "artistsort",
          "WM/AlbumArtistSortOrder": "albumartistsort",
          "WM/ComposerSortOrder": "composersort",
          "WM/Writer": "lyricist",
          "WM/Conductor": "conductor",
          "WM/ModifiedBy": "remixer",
          "WM/Engineer": "engineer",
          "WM/Producer": "producer",
          "WM/DJMixer": "djmixer",
          "WM/Mixer": "mixer",
          "WM/Publisher": "label",
          "WM/ContentGroupDescription": "grouping",
          "WM/SubTitle": "subtitle",
          "WM/SetSubTitle": "discsubtitle",
          "WM/IsCompilation": "compilation",
          "WM/SharedUserRating": "rating",
          "WM/BeatsPerMinute": "bpm",
          "WM/Mood": "mood",
          "WM/Media": "media",
          "WM/CatalogNo": "catalognumber",
          "MusicBrainz/Album Status": "releasestatus",
          "MusicBrainz/Album Type": "releasetype",
          "MusicBrainz/Album Release Country": "releasecountry",
          "WM/Script": "script",
          "WM/Language": "language",
          Copyright: "copyright",
          LICENSE: "license",
          "WM/EncodedBy": "encodedby",
          "WM/EncodingSettings": "encodersettings",
          "WM/Barcode": "barcode",
          "WM/ISRC": "isrc",
          "MusicBrainz/Track Id": "musicbrainz_recordingid",
          "MusicBrainz/Release Track Id": "musicbrainz_trackid",
          "MusicBrainz/Album Id": "musicbrainz_albumid",
          "MusicBrainz/Artist Id": "musicbrainz_artistid",
          "MusicBrainz/Album Artist Id": "musicbrainz_albumartistid",
          "MusicBrainz/Release Group Id": "musicbrainz_releasegroupid",
          "MusicBrainz/Work Id": "musicbrainz_workid",
          "MusicBrainz/TRM Id": "musicbrainz_trmid",
          "MusicBrainz/Disc Id": "musicbrainz_discid",
          "Acoustid/Id": "acoustid_id",
          "Acoustid/Fingerprint": "acoustid_fingerprint",
          "MusicIP/PUID": "musicip_puid",
          "WM/ARTISTS": "artists",
          "WM/InitialKey": "key",
          ASIN: "asin",
          "WM/Work": "work",
          "WM/AuthorURL": "website",
          "WM/Picture": "picture"
      };
      class i extends n.CommonTagMapper {
          static toRating(e) {
              return {
                  rating: parseFloat(e + 1) / 5
              }
          }
          constructor() {
              super(["asf"], a)
          }
          postMap(e) {
              switch (e.id) {
              case "WM/SharedUserRating":
                  const t = e.id.split(":");
                  e.value = i.toRating(e.value),
                  e.id = t[0];
                  break
              }
          }
      }
      t.AsfTagMapper = i
  },
  dee4: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("f654")
        , a = r("6f58")
        , i = r("34eb")
        , o = r("98a7")
        , s = r("95c9")
        , c = r("b8fc")
        , u = r("cc04")
        , l = r("21c2")
        , f = r("64a4")
        , d = i("music-metadata:parser:aiff");
      class h extends s.BasicParser {
          async parse() {
              const e = await this.tokenizer.readToken(u.ChunkHeader);
              n.strictEqual(e.chunkID, "FRM8");
              const t = (await this.tokenizer.readToken(o.FourCcToken)).trim();
              switch (t) {
              case "DSD":
                  return this.metadata.setFormat("container", `DSDIFF/${t}`),
                  this.metadata.setFormat("lossless", !0),
                  this.readFmt8Chunks(e.chunkSize - o.FourCcToken.len);
              default:
                  throw Error(`Unsupported DSDIFF type: ${t}`)
              }
          }
          async readFmt8Chunks(e) {
              while (e >= u.ChunkHeader.len) {
                  const t = await this.tokenizer.readToken(u.ChunkHeader);
                  d(`Chunk id=${t.chunkID}`),
                  await this.readData(t),
                  e -= u.ChunkHeader.len + t.chunkSize
              }
          }
          async readData(e) {
              d(`Reading data of chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);
              const t = this.tokenizer.position;
              switch (e.chunkID.trim()) {
              case "FVER":
                  const t = await this.tokenizer.readToken(a.UINT32_LE);
                  d(`DSDIFF version=${t}`);
                  break;
              case "PROP":
                  const r = await this.tokenizer.readToken(o.FourCcToken);
                  n.strictEqual(r, "SND "),
                  await this.handleSoundPropertyChunks(e.chunkSize - o.FourCcToken.len);
                  break;
              case "ID3":
                  const i = await this.tokenizer.readToken(new a.BufferType(e.chunkSize))
                    , s = new c.ID3Stream(i)
                    , u = l.fromStream(s);
                  await (new f.ID3v2Parser).parse(this.metadata, u, this.options);
                  break;
              default:
                  d(`Ignore chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);
                  break;
              case "DSD":
                  this.metadata.setFormat("numberOfSamples", 8 * e.chunkSize / this.metadata.format.numberOfChannels),
                  this.metadata.setFormat("duration", this.metadata.format.numberOfSamples / this.metadata.format.sampleRate);
                  break
              }
              const r = e.chunkSize - (this.tokenizer.position - t);
              r > 0 && (d(`After Parsing chunk, remaining ${r} bytes`),
              await this.tokenizer.ignore(r))
          }
          async handleSoundPropertyChunks(e) {
              d(`Parsing sound-property-chunks, remainingSize=${e}`);
              while (e > 0) {
                  const t = await this.tokenizer.readToken(u.ChunkHeader);
                  d(`Sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`);
                  const r = this.tokenizer.position;
                  switch (t.chunkID.trim()) {
                  case "FS":
                      const e = await this.tokenizer.readToken(a.UINT32_BE);
                      this.metadata.setFormat("sampleRate", e);
                      break;
                  case "CHNL":
                      const r = await this.tokenizer.readToken(a.UINT16_BE);
                      this.metadata.setFormat("numberOfChannels", r),
                      await this.handleChannelChunks(t.chunkSize - a.UINT16_BE.len);
                      break;
                  case "CMPR":
                      const n = (await this.tokenizer.readToken(o.FourCcToken)).trim()
                        , i = await this.tokenizer.readToken(a.UINT8)
                        , s = await this.tokenizer.readToken(new a.StringType(i,"ascii"));
                      "DSD" === n && (this.metadata.setFormat("lossless", !0),
                      this.metadata.setFormat("bitsPerSample", 1)),
                      this.metadata.setFormat("codec", `${n} (${s})`);
                      break;
                  case "ABSS":
                      const c = await this.tokenizer.readToken(a.UINT16_BE)
                        , u = await this.tokenizer.readToken(a.UINT8)
                        , l = await this.tokenizer.readToken(a.UINT8)
                        , f = await this.tokenizer.readToken(a.UINT32_BE);
                      d(`ABSS ${c}:${u}:${l}.${f}`);
                      break;
                  case "LSCO":
                      const h = await this.tokenizer.readToken(a.UINT16_BE);
                      d(`LSCO lsConfig=${h}`);
                      break;
                  case "COMT":
                  default:
                      d(`Unknown sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`),
                      await this.tokenizer.ignore(t.chunkSize)
                  }
                  const n = t.chunkSize - (this.tokenizer.position - r);
                  n > 0 && (d(`After Parsing sound-property-chunk ${t.chunkSize}, remaining ${n} bytes`),
                  await this.tokenizer.ignore(n)),
                  e -= u.ChunkHeader.len + t.chunkSize,
                  d(`Parsing sound-property-chunks, remainingSize=${e}`)
              }
              if (this.metadata.format.lossless && this.metadata.format.sampleRate && this.metadata.format.numberOfChannels && this.metadata.format.bitsPerSample) {
                  const e = this.metadata.format.sampleRate * this.metadata.format.numberOfChannels * this.metadata.format.bitsPerSample;
                  this.metadata.setFormat("bitrate", e)
              }
          }
          async handleChannelChunks(e) {
              d(`Parsing channel-chunks, remainingSize=${e}`);
              const t = [];
              while (e >= o.FourCcToken.len) {
                  const r = await this.tokenizer.readToken(o.FourCcToken);
                  d(`Channel[ID=${r}]`),
                  t.push(r),
                  e -= o.FourCcToken.len
              }
              return d(`Channels: ${t.join(", ")}`),
              t
          }
      }
      t.DsdiffParser = h
  },
  df2f: function(e, t, r) {
      (function(t, n) {
          e.exports = n(r("21bf"))
      }
      )(0, (function(e) {
          return function() {
              var t = e
                , r = t.lib
                , n = r.WordArray
                , a = r.Hasher
                , i = t.algo
                , o = []
                , s = i.SHA1 = a.extend({
                  _doReset: function() {
                      this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                  },
                  _doProcessBlock: function(e, t) {
                      for (var r = this._hash.words, n = r[0], a = r[1], i = r[2], s = r[3], c = r[4], u = 0; u < 80; u++) {
                          if (u < 16)
                              o[u] = 0 | e[t + u];
                          else {
                              var l = o[u - 3] ^ o[u - 8] ^ o[u - 14] ^ o[u - 16];
                              o[u] = l << 1 | l >>> 31
                          }
                          var f = (n << 5 | n >>> 27) + c + o[u];
                          f += u < 20 ? 1518500249 + (a & i | ~a & s) : u < 40 ? 1859775393 + (a ^ i ^ s) : u < 60 ? (a & i | a & s | i & s) - 1894007588 : (a ^ i ^ s) - 899497514,
                          c = s,
                          s = i,
                          i = a << 30 | a >>> 2,
                          a = n,
                          n = f
                      }
                      r[0] = r[0] + n | 0,
                      r[1] = r[1] + a | 0,
                      r[2] = r[2] + i | 0,
                      r[3] = r[3] + s | 0,
                      r[4] = r[4] + c | 0
                  },
                  _doFinalize: function() {
                      var e = this._data
                        , t = e.words
                        , r = 8 * this._nDataBytes
                        , n = 8 * e.sigBytes;
                      return t[n >>> 5] |= 128 << 24 - n % 32,
                      t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296),
                      t[15 + (n + 64 >>> 9 << 4)] = r,
                      e.sigBytes = 4 * t.length,
                      this._process(),
                      this._hash
                  },
                  clone: function() {
                      var e = a.clone.call(this);
                      return e._hash = this._hash.clone(),
                      e
                  }
              });
              t.SHA1 = a._createHelper(s),
              t.HmacSHA1 = a._createHmacHelper(s)
          }(),
          e.SHA1
      }
      ))
  },
  df75: function(e, t, r) {
      var n = r("ca84")
        , a = r("7839");
      e.exports = Object.keys || function(e) {
          return n(e, a)
      }
  },
  df7c: function(e, t, r) {
      (function(e) {
          function r(e, t) {
              for (var r = 0, n = e.length - 1; n >= 0; n--) {
                  var a = e[n];
                  "." === a ? e.splice(n, 1) : ".." === a ? (e.splice(n, 1),
                  r++) : r && (e.splice(n, 1),
                  r--)
              }
              if (t)
                  for (; r--; r)
                      e.unshift("..");
              return e
          }
          function n(e) {
              "string" !== typeof e && (e += "");
              var t, r = 0, n = -1, a = !0;
              for (t = e.length - 1; t >= 0; --t)
                  if (47 === e.charCodeAt(t)) {
                      if (!a) {
                          r = t + 1;
                          break
                      }
                  } else
                      -1 === n && (a = !1,
                      n = t + 1);
              return -1 === n ? "" : e.slice(r, n)
          }
          function a(e, t) {
              if (e.filter)
                  return e.filter(t);
              for (var r = [], n = 0; n < e.length; n++)
                  t(e[n], n, e) && r.push(e[n]);
              return r
          }
          t.resolve = function() {
              for (var t = "", n = !1, i = arguments.length - 1; i >= -1 && !n; i--) {
                  var o = i >= 0 ? arguments[i] : e.cwd();
                  if ("string" !== typeof o)
                      throw new TypeError("Arguments to path.resolve must be strings");
                  o && (t = o + "/" + t,
                  n = "/" === o.charAt(0))
              }
              return t = r(a(t.split("/"), (function(e) {
                  return !!e
              }
              )), !n).join("/"),
              (n ? "/" : "") + t || "."
          }
          ,
          t.normalize = function(e) {
              var n = t.isAbsolute(e)
                , o = "/" === i(e, -1);
              return e = r(a(e.split("/"), (function(e) {
                  return !!e
              }
              )), !n).join("/"),
              e || n || (e = "."),
              e && o && (e += "/"),
              (n ? "/" : "") + e
          }
          ,
          t.isAbsolute = function(e) {
              return "/" === e.charAt(0)
          }
          ,
          t.join = function() {
              var e = Array.prototype.slice.call(arguments, 0);
              return t.normalize(a(e, (function(e, t) {
                  if ("string" !== typeof e)
                      throw new TypeError("Arguments to path.join must be strings");
                  return e
              }
              )).join("/"))
          }
          ,
          t.relative = function(e, r) {
              function n(e) {
                  for (var t = 0; t < e.length; t++)
                      if ("" !== e[t])
                          break;
                  for (var r = e.length - 1; r >= 0; r--)
                      if ("" !== e[r])
                          break;
                  return t > r ? [] : e.slice(t, r - t + 1)
              }
              e = t.resolve(e).substr(1),
              r = t.resolve(r).substr(1);
              for (var a = n(e.split("/")), i = n(r.split("/")), o = Math.min(a.length, i.length), s = o, c = 0; c < o; c++)
                  if (a[c] !== i[c]) {
                      s = c;
                      break
                  }
              var u = [];
              for (c = s; c < a.length; c++)
                  u.push("..");
              return u = u.concat(i.slice(s)),
              u.join("/")
          }
          ,
          t.sep = "/",
          t.delimiter = ":",
          t.dirname = function(e) {
              if ("string" !== typeof e && (e += ""),
              0 === e.length)
                  return ".";
              for (var t = e.charCodeAt(0), r = 47 === t, n = -1, a = !0, i = e.length - 1; i >= 1; --i)
                  if (t = e.charCodeAt(i),
                  47 === t) {
                      if (!a) {
                          n = i;
                          break
                      }
                  } else
                      a = !1;
              return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n)
          }
          ,
          t.basename = function(e, t) {
              var r = n(e);
              return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)),
              r
          }
          ,
          t.extname = function(e) {
              "string" !== typeof e && (e += "");
              for (var t = -1, r = 0, n = -1, a = !0, i = 0, o = e.length - 1; o >= 0; --o) {
                  var s = e.charCodeAt(o);
                  if (47 !== s)
                      -1 === n && (a = !1,
                      n = o + 1),
                      46 === s ? -1 === t ? t = o : 1 !== i && (i = 1) : -1 !== t && (i = -1);
                  else if (!a) {
                      r = o + 1;
                      break
                  }
              }
              return -1 === t || -1 === n || 0 === i || 1 === i && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
          }
          ;
          var i = "b" === "ab".substr(-1) ? function(e, t, r) {
              return e.substr(t, r)
          }
          : function(e, t, r) {
              return t < 0 && (t = e.length + t),
              e.substr(t, r)
          }
      }
      ).call(this, r("4362"))
  },
  e035: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97");
      t.id3v22TagMap = {
          TT2: "title",
          TP1: "artist",
          TP2: "albumartist",
          TAL: "album",
          TYE: "year",
          COM: "comment",
          TRK: "track",
          TPA: "disk",
          TCO: "genre",
          PIC: "picture",
          TCM: "composer",
          TOR: "originaldate",
          TOT: "work",
          TXT: "lyricist",
          TP3: "conductor",
          TPB: "label",
          TT1: "grouping",
          TT3: "subtitle",
          TLA: "language",
          TCR: "copyright",
          WCP: "license",
          TEN: "encodedby",
          TSS: "encodersettings",
          WAR: "website",
          "COM:iTunPGAP": "gapless"
      };
      class a extends n.CommonTagMapper {
          constructor() {
              super(["ID3v2.2"], t.id3v22TagMap)
          }
      }
      t.ID3v22TagMapper = a
  },
  e087: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("bafa")
        , a = r("3189");
      var i = r("20f8");
      function o(e, t) {
          return t = t || {},
          new n.ReadStreamTokenizer(e,t)
      }
      function s(e, t) {
          return new a.BufferTokenizer(e,t)
      }
      t.EndOfStreamError = i.EndOfStreamError,
      t.fromStream = o,
      t.fromBuffer = s
  },
  e163: function(e, t, r) {
      var n = r("5135")
        , a = r("7b0b")
        , i = r("f772")
        , o = r("e177")
        , s = i("IE_PROTO")
        , c = Object.prototype;
      e.exports = o ? Object.getPrototypeOf : function(e) {
          return e = a(e),
          n(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
      }
  },
  e177: function(e, t, r) {
      var n = r("d039");
      e.exports = !n((function() {
          function e() {}
          return e.prototype.constructor = null,
          Object.getPrototypeOf(new e) !== e.prototype
      }
      ))
  },
  e23f: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58")
        , a = r("98a7");
      t.ChunkHeader = {
          len: 12,
          get: (e,t)=>({
              id: a.FourCcToken.get(e, t),
              size: n.UINT64_LE.get(e, t + 4)
          })
      },
      t.DsdChunk = {
          len: 16,
          get: (e,t)=>({
              fileSize: n.INT64_LE.get(e, t),
              metadataPointer: n.INT64_LE.get(e, t + 8)
          })
      },
      function(e) {
          e[e["mono"] = 1] = "mono",
          e[e["stereo"] = 2] = "stereo",
          e[e["channels"] = 3] = "channels",
          e[e["quad"] = 4] = "quad",
          e[e["4 channels"] = 5] = "4 channels",
          e[e["5 channels"] = 6] = "5 channels",
          e[e["5.1 channels"] = 7] = "5.1 channels"
      }(t.ChannelType || (t.ChannelType = {})),
      t.FormatChunk = {
          len: 40,
          get: (e,t)=>({
              formatVersion: n.INT32_LE.get(e, t),
              formatID: n.INT32_LE.get(e, t + 4),
              channelType: n.INT32_LE.get(e, t + 8),
              channelNum: n.INT32_LE.get(e, t + 12),
              samplingFrequency: n.INT32_LE.get(e, t + 16),
              bitsPerSample: n.INT32_LE.get(e, t + 20),
              sampleCount: n.INT64_LE.get(e, t + 24),
              blockSizePerChannel: n.INT32_LE.get(e, t + 32)
          })
      }
  },
  e260: function(e, t, r) {
      "use strict";
      var n = r("fc6a")
        , a = r("44d2")
        , i = r("3f8c")
        , o = r("69f3")
        , s = r("7dd0")
        , c = "Array Iterator"
        , u = o.set
        , l = o.getterFor(c);
      e.exports = s(Array, "Array", (function(e, t) {
          u(this, {
              type: c,
              target: n(e),
              index: 0,
              kind: t
          })
      }
      ), (function() {
          var e = l(this)
            , t = e.target
            , r = e.kind
            , n = e.index++;
          return !t || n >= t.length ? (e.target = void 0,
          {
              value: void 0,
              done: !0
          }) : "keys" == r ? {
              value: n,
              done: !1
          } : "values" == r ? {
              value: t[n],
              done: !1
          } : {
              value: [n, t[n]],
              done: !1
          }
      }
      ), "values"),
      i.Arguments = i.Array,
      a("keys"),
      a("values"),
      a("entries")
  },
  e2cc: function(e, t, r) {
      var n = r("6eeb");
      e.exports = function(e, t, r) {
          for (var a in t)
              n(e, a, t[a], r);
          return e
      }
  },
  e372: function(e, t, r) {
      t = e.exports = r("ad71"),
      t.Stream = t,
      t.Readable = t,
      t.Writable = r("dc14"),
      t.Duplex = r("b19a"),
      t.Transform = r("27bf"),
      t.PassThrough = r("780f")
  },
  e375: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("21c2")
        , a = r("2d78")
        , i = r("695a")
        , o = r("9611")
        , s = r("1e78")
        , c = r("5a49");
      function u(e, t, r={}) {
          return f(n.fromStream(e, "string" === typeof t ? {
              mimeType: t
          } : t), r)
      }
      async function l(e, t, r={}) {
          const a = new i.RandomBufferReader(e);
          await p(a, r);
          const o = n.fromBuffer(e, "string" === typeof t ? {
              mimeType: t
          } : t);
          return f(o, r)
      }
      function f(e, t) {
          return a.ParserFactory.parseOnContentType(e, t)
      }
      function d(e) {
          const t = {};
          for (const r of e)
              (t[r.id] = t[r.id] || []).push(r.value);
          return t
      }
      function h(e) {
          return void 0 === e ? 0 : 1 + Math.round(4 * e)
      }
      async function p(e, t={}) {
          let r = e.fileSize;
          if (await s.hasID3v1Header(e)) {
              r -= 128;
              const t = await c.getLyricsHeaderLength(e);
              r -= t
          }
          t.apeHeader = await o.APEv2Parser.findApeFooterOffset(e, r)
      }
      t.parseStream = u,
      t.parseBuffer = l,
      t.parseFromTokenizer = f,
      t.orderTags = d,
      t.ratingToStars = h,
      t.scanAppendingHeaders = p
  },
  e3db: function(e, t) {
      var r = {}.toString;
      e.exports = Array.isArray || function(e) {
          return "[object Array]" == r.call(e)
      }
  },
  e58c: function(e, t, r) {
      "use strict";
      var n = r("fc6a")
        , a = r("a691")
        , i = r("50c4")
        , o = r("a640")
        , s = r("ae40")
        , c = Math.min
        , u = [].lastIndexOf
        , l = !!u && 1 / [1].lastIndexOf(1, -0) < 0
        , f = o("lastIndexOf")
        , d = s("indexOf", {
          ACCESSORS: !0,
          1: 0
      })
        , h = l || !f || !d;
      e.exports = h ? function(e) {
          if (l)
              return u.apply(this, arguments) || 0;
          var t = n(this)
            , r = i(t.length)
            , o = r - 1;
          for (arguments.length > 1 && (o = c(o, a(arguments[1]))),
          o < 0 && (o = r + o); o >= 0; o--)
              if (o in t && t[o] === e)
                  return o || 0;
          return -1
      }
      : u
  },
  e61b: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("3252"))
      }
      )(0, (function(e) {
          return function(t) {
              var r = e
                , n = r.lib
                , a = n.WordArray
                , i = n.Hasher
                , o = r.x64
                , s = o.Word
                , c = r.algo
                , u = []
                , l = []
                , f = [];
              (function() {
                  for (var e = 1, t = 0, r = 0; r < 24; r++) {
                      u[e + 5 * t] = (r + 1) * (r + 2) / 2 % 64;
                      var n = t % 5
                        , a = (2 * e + 3 * t) % 5;
                      e = n,
                      t = a
                  }
                  for (e = 0; e < 5; e++)
                      for (t = 0; t < 5; t++)
                          l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
                  for (var i = 1, o = 0; o < 24; o++) {
                      for (var c = 0, d = 0, h = 0; h < 7; h++) {
                          if (1 & i) {
                              var p = (1 << h) - 1;
                              p < 32 ? d ^= 1 << p : c ^= 1 << p - 32
                          }
                          128 & i ? i = i << 1 ^ 113 : i <<= 1
                      }
                      f[o] = s.create(c, d)
                  }
              }
              )();
              var d = [];
              (function() {
                  for (var e = 0; e < 25; e++)
                      d[e] = s.create()
              }
              )();
              var h = c.SHA3 = i.extend({
                  cfg: i.cfg.extend({
                      outputLength: 512
                  }),
                  _doReset: function() {
                      for (var e = this._state = [], t = 0; t < 25; t++)
                          e[t] = new s.init;
                      this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                  },
                  _doProcessBlock: function(e, t) {
                      for (var r = this._state, n = this.blockSize / 2, a = 0; a < n; a++) {
                          var i = e[t + 2 * a]
                            , o = e[t + 2 * a + 1];
                          i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                          o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                          var s = r[a];
                          s.high ^= o,
                          s.low ^= i
                      }
                      for (var c = 0; c < 24; c++) {
                          for (var h = 0; h < 5; h++) {
                              for (var p = 0, m = 0, g = 0; g < 5; g++) {
                                  s = r[h + 5 * g];
                                  p ^= s.high,
                                  m ^= s.low
                              }
                              var y = d[h];
                              y.high = p,
                              y.low = m
                          }
                          for (h = 0; h < 5; h++) {
                              var b = d[(h + 4) % 5]
                                , v = d[(h + 1) % 5]
                                , w = v.high
                                , T = v.low;
                              for (p = b.high ^ (w << 1 | T >>> 31),
                              m = b.low ^ (T << 1 | w >>> 31),
                              g = 0; g < 5; g++) {
                                  s = r[h + 5 * g];
                                  s.high ^= p,
                                  s.low ^= m
                              }
                          }
                          for (var k = 1; k < 25; k++) {
                              s = r[k];
                              var _ = s.high
                                , S = s.low
                                , E = u[k];
                              E < 32 ? (p = _ << E | S >>> 32 - E,
                              m = S << E | _ >>> 32 - E) : (p = S << E - 32 | _ >>> 64 - E,
                              m = _ << E - 32 | S >>> 64 - E);
                              var I = d[l[k]];
                              I.high = p,
                              I.low = m
                          }
                          var A = d[0]
                            , x = r[0];
                          A.high = x.high,
                          A.low = x.low;
                          for (h = 0; h < 5; h++)
                              for (g = 0; g < 5; g++) {
                                  k = h + 5 * g,
                                  s = r[k];
                                  var B = d[k]
                                    , C = d[(h + 1) % 5 + 5 * g]
                                    , P = d[(h + 2) % 5 + 5 * g];
                                  s.high = B.high ^ ~C.high & P.high,
                                  s.low = B.low ^ ~C.low & P.low
                              }
                          s = r[0];
                          var O = f[c];
                          s.high ^= O.high,
                          s.low ^= O.low
                      }
                  },
                  _doFinalize: function() {
                      var e = this._data
                        , r = e.words
                        , n = (this._nDataBytes,
                      8 * e.sigBytes)
                        , i = 32 * this.blockSize;
                      r[n >>> 5] |= 1 << 24 - n % 32,
                      r[(t.ceil((n + 1) / i) * i >>> 5) - 1] |= 128,
                      e.sigBytes = 4 * r.length,
                      this._process();
                      for (var o = this._state, s = this.cfg.outputLength / 8, c = s / 8, u = [], l = 0; l < c; l++) {
                          var f = o[l]
                            , d = f.high
                            , h = f.low;
                          d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
                          h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8),
                          u.push(h),
                          u.push(d)
                      }
                      return new a.init(u,s)
                  },
                  clone: function() {
                      for (var e = i.clone.call(this), t = e._state = this._state.slice(0), r = 0; r < 25; r++)
                          t[r] = t[r].clone();
                      return e
                  }
              });
              r.SHA3 = i._createHelper(h),
              r.HmacSHA3 = i._createHmacHelper(h)
          }(Math),
          e.SHA3
      }
      ))
  },
  e667: function(e, t) {
      e.exports = function(e) {
          try {
              return {
                  error: !1,
                  value: e()
              }
          } catch (t) {
              return {
                  error: !0,
                  value: t
              }
          }
      }
  },
  e6cf: function(e, t, r) {
      "use strict";
      var n, a, i, o, s = r("23e7"), c = r("c430"), u = r("da84"), l = r("d066"), f = r("fea9"), d = r("6eeb"), h = r("e2cc"), p = r("d44e"), m = r("2626"), g = r("861d"), y = r("1c0b"), b = r("19aa"), v = r("c6b6"), w = r("8925"), T = r("2266"), k = r("1c7e"), _ = r("4840"), S = r("2cf4").set, E = r("b575"), I = r("cdf9"), A = r("44de"), x = r("f069"), B = r("e667"), C = r("69f3"), P = r("94ca"), O = r("b622"), M = r("2d00"), D = O("species"), R = "Promise", F = C.get, L = C.set, z = C.getterFor(R), U = f, N = u.TypeError, j = u.document, H = u.process, W = l("fetch"), q = x.f, X = q, $ = "process" == v(H), G = !!(j && j.createEvent && u.dispatchEvent), V = "unhandledrejection", Y = "rejectionhandled", K = 0, Z = 1, J = 2, Q = 1, ee = 2, te = P(R, (function() {
          var e = w(U) !== String(U);
          if (!e) {
              if (66 === M)
                  return !0;
              if (!$ && "function" != typeof PromiseRejectionEvent)
                  return !0
          }
          if (c && !U.prototype["finally"])
              return !0;
          if (M >= 51 && /native code/.test(U))
              return !1;
          var t = U.resolve(1)
            , r = function(e) {
              e((function() {}
              ), (function() {}
              ))
          }
            , n = t.constructor = {};
          return n[D] = r,
          !(t.then((function() {}
          ))instanceof r)
      }
      )), re = te || !k((function(e) {
          U.all(e)["catch"]((function() {}
          ))
      }
      )), ne = function(e) {
          var t;
          return !(!g(e) || "function" != typeof (t = e.then)) && t
      }, ae = function(e, t, r) {
          if (!t.notified) {
              t.notified = !0;
              var n = t.reactions;
              E((function() {
                  var a = t.value
                    , i = t.state == Z
                    , o = 0;
                  while (n.length > o) {
                      var s, c, u, l = n[o++], f = i ? l.ok : l.fail, d = l.resolve, h = l.reject, p = l.domain;
                      try {
                          f ? (i || (t.rejection === ee && ce(e, t),
                          t.rejection = Q),
                          !0 === f ? s = a : (p && p.enter(),
                          s = f(a),
                          p && (p.exit(),
                          u = !0)),
                          s === l.promise ? h(N("Promise-chain cycle")) : (c = ne(s)) ? c.call(s, d, h) : d(s)) : h(a)
                      } catch (m) {
                          p && !u && p.exit(),
                          h(m)
                      }
                  }
                  t.reactions = [],
                  t.notified = !1,
                  r && !t.rejection && oe(e, t)
              }
              ))
          }
      }, ie = function(e, t, r) {
          var n, a;
          G ? (n = j.createEvent("Event"),
          n.promise = t,
          n.reason = r,
          n.initEvent(e, !1, !0),
          u.dispatchEvent(n)) : n = {
              promise: t,
              reason: r
          },
          (a = u["on" + e]) ? a(n) : e === V && A("Unhandled promise rejection", r)
      }, oe = function(e, t) {
          S.call(u, (function() {
              var r, n = t.value, a = se(t);
              if (a && (r = B((function() {
                  $ ? H.emit("unhandledRejection", n, e) : ie(V, e, n)
              }
              )),
              t.rejection = $ || se(t) ? ee : Q,
              r.error))
                  throw r.value
          }
          ))
      }, se = function(e) {
          return e.rejection !== Q && !e.parent
      }, ce = function(e, t) {
          S.call(u, (function() {
              $ ? H.emit("rejectionHandled", e) : ie(Y, e, t.value)
          }
          ))
      }, ue = function(e, t, r, n) {
          return function(a) {
              e(t, r, a, n)
          }
      }, le = function(e, t, r, n) {
          t.done || (t.done = !0,
          n && (t = n),
          t.value = r,
          t.state = J,
          ae(e, t, !0))
      }, fe = function(e, t, r, n) {
          if (!t.done) {
              t.done = !0,
              n && (t = n);
              try {
                  if (e === r)
                      throw N("Promise can't be resolved itself");
                  var a = ne(r);
                  a ? E((function() {
                      var n = {
                          done: !1
                      };
                      try {
                          a.call(r, ue(fe, e, n, t), ue(le, e, n, t))
                      } catch (i) {
                          le(e, n, i, t)
                      }
                  }
                  )) : (t.value = r,
                  t.state = Z,
                  ae(e, t, !1))
              } catch (i) {
                  le(e, {
                      done: !1
                  }, i, t)
              }
          }
      };
      te && (U = function(e) {
          b(this, U, R),
          y(e),
          n.call(this);
          var t = F(this);
          try {
              e(ue(fe, this, t), ue(le, this, t))
          } catch (r) {
              le(this, t, r)
          }
      }
      ,
      n = function(e) {
          L(this, {
              type: R,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: K,
              value: void 0
          })
      }
      ,
      n.prototype = h(U.prototype, {
          then: function(e, t) {
              var r = z(this)
                , n = q(_(this, U));
              return n.ok = "function" != typeof e || e,
              n.fail = "function" == typeof t && t,
              n.domain = $ ? H.domain : void 0,
              r.parent = !0,
              r.reactions.push(n),
              r.state != K && ae(this, r, !1),
              n.promise
          },
          catch: function(e) {
              return this.then(void 0, e)
          }
      }),
      a = function() {
          var e = new n
            , t = F(e);
          this.promise = e,
          this.resolve = ue(fe, e, t),
          this.reject = ue(le, e, t)
      }
      ,
      x.f = q = function(e) {
          return e === U || e === i ? new a(e) : X(e)
      }
      ,
      c || "function" != typeof f || (o = f.prototype.then,
      d(f.prototype, "then", (function(e, t) {
          var r = this;
          return new U((function(e, t) {
              o.call(r, e, t)
          }
          )).then(e, t)
      }
      ), {
          unsafe: !0
      }),
      "function" == typeof W && s({
          global: !0,
          enumerable: !0,
          forced: !0
      }, {
          fetch: function(e) {
              return I(U, W.apply(u, arguments))
          }
      }))),
      s({
          global: !0,
          wrap: !0,
          forced: te
      }, {
          Promise: U
      }),
      p(U, R, !1, !0),
      m(R),
      i = l(R),
      s({
          target: R,
          stat: !0,
          forced: te
      }, {
          reject: function(e) {
              var t = q(this);
              return t.reject.call(void 0, e),
              t.promise
          }
      }),
      s({
          target: R,
          stat: !0,
          forced: c || te
      }, {
          resolve: function(e) {
              return I(c && this === i ? U : this, e)
          }
      }),
      s({
          target: R,
          stat: !0,
          forced: re
      }, {
          all: function(e) {
              var t = this
                , r = q(t)
                , n = r.resolve
                , a = r.reject
                , i = B((function() {
                  var r = y(t.resolve)
                    , i = []
                    , o = 0
                    , s = 1;
                  T(e, (function(e) {
                      var c = o++
                        , u = !1;
                      i.push(void 0),
                      s++,
                      r.call(t, e).then((function(e) {
                          u || (u = !0,
                          i[c] = e,
                          --s || n(i))
                      }
                      ), a)
                  }
                  )),
                  --s || n(i)
              }
              ));
              return i.error && a(i.value),
              r.promise
          },
          race: function(e) {
              var t = this
                , r = q(t)
                , n = r.reject
                , a = B((function() {
                  var a = y(t.resolve);
                  T(e, (function(e) {
                      a.call(t, e).then(r.resolve, n)
                  }
                  ))
              }
              ));
              return a.error && n(a.value),
              r.promise
          }
      })
  },
  e893: function(e, t, r) {
      var n = r("5135")
        , a = r("56ef")
        , i = r("06cf")
        , o = r("9bf2");
      e.exports = function(e, t) {
          for (var r = a(t), s = o.f, c = i.f, u = 0; u < r.length; u++) {
              var l = r[u];
              n(e, l) || s(e, l, c(t, l))
          }
      }
  },
  e8b5: function(e, t, r) {
      var n = r("c6b6");
      e.exports = Array.isArray || function(e) {
          return "Array" == n(e)
      }
  },
  e907: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("6f58")
            , a = r("f654")
            , i = r("9611")
            , o = r("98a7")
            , s = r("95c9")
            , c = r("cb4f")
            , u = r("34eb")
            , l = u("music-metadata:parser:WavPack");
          class f extends s.BasicParser {
              async parse() {
                  return this.audioDataSize = 0,
                  await this.parseWavPackBlocks(),
                  i.APEv2Parser.tryParseApeHeader(this.metadata, this.tokenizer, this.options)
              }
              async parseWavPackBlocks() {
                  do {
                      const e = await this.tokenizer.peekToken(o.FourCcToken);
                      if ("wvpk" !== e)
                          break;
                      const t = await this.tokenizer.readToken(c.WavPack.BlockHeaderToken);
                      a.strictEqual(t.BlockID, "wvpk", "WavPack Block-ID"),
                      l(`WavPack header blockIndex=${t.blockIndex}, len=${c.WavPack.BlockHeaderToken.len}`),
                      0 !== t.blockIndex || this.metadata.format.container || (this.metadata.setFormat("container", "WavPack"),
                      this.metadata.setFormat("lossless", !t.flags.isHybrid),
                      this.metadata.setFormat("bitsPerSample", t.flags.bitsPerSample),
                      t.flags.isDSD || (this.metadata.setFormat("sampleRate", t.flags.samplingRate),
                      this.metadata.setFormat("duration", t.totalSamples / t.flags.samplingRate)),
                      this.metadata.setFormat("numberOfChannels", t.flags.isMono ? 1 : 2),
                      this.metadata.setFormat("numberOfSamples", t.totalSamples),
                      this.metadata.setFormat("codec", t.flags.isDSD ? "DSD" : "PCM"));
                      const r = t.blockSize - (c.WavPack.BlockHeaderToken.len - 8);
                      0 === t.blockIndex ? await this.parseMetadataSubBlock(t, r) : await this.tokenizer.ignore(r),
                      t.blockSamples > 0 && (this.audioDataSize += t.blockSize)
                  } while (!this.tokenizer.fileInfo.size || this.tokenizer.fileInfo.size - this.tokenizer.position >= c.WavPack.BlockHeaderToken.len);this.metadata.setFormat("bitrate", 8 * this.audioDataSize / this.metadata.format.duration)
              }
              async parseMetadataSubBlock(t, r) {
                  while (r > c.WavPack.MetadataIdToken.len) {
                      const i = await this.tokenizer.readToken(c.WavPack.MetadataIdToken)
                        , o = await this.tokenizer.readNumber(i.largeBlock ? n.UINT24_LE : n.UINT8)
                        , s = e.alloc(2 * o - (i.isOddSize ? 1 : 0));
                      switch (await this.tokenizer.readBuffer(s),
                      l(`Metadata Sub-Blocks functionId=0x${i.functionId.toString(16)}, id.largeBlock=${i.largeBlock},data-size=${s.length}`),
                      i.functionId) {
                      case 0:
                          break;
                      case 14:
                          l("ID_DSD_BLOCK");
                          const e = 1 << s.readUInt8(0)
                            , r = t.flags.samplingRate * e * 8;
                          a.ok(t.flags.isDSD, "Only expect DSD block if DSD-flag is set"),
                          this.metadata.setFormat("sampleRate", r),
                          this.metadata.setFormat("duration", t.totalSamples / r);
                          break;
                      case 36:
                          l("ID_ALT_TRAILER: trailer for non-wav files");
                          break;
                      case 38:
                          this.metadata.setFormat("audioMD5", s);
                          break;
                      case 47:
                          l(`ID_BLOCK_CHECKSUM: checksum=${s.toString("hex")}`);
                          break;
                      default:
                          l(`Ignore unsupported meta-sub-block-id functionId=0x${i.functionId.toString(16)}`);
                          break
                      }
                      r -= c.WavPack.MetadataIdToken.len + (i.largeBlock ? n.UINT24_LE.len : n.UINT8.len) + 2 * o,
                      l(`remainingLength=${r}`),
                      i.isOddSize && this.tokenizer.ignore(1)
                  }
                  a.strictEqual(r, 0, "metadata-sub-block should fit it remaining length")
              }
          }
          t.WavPackParser = f
      }
      ).call(this, r("b639").Buffer)
  },
  e91f: function(e, t, r) {
      "use strict";
      var n = r("ebb5")
        , a = r("4d64").indexOf
        , i = n.aTypedArray
        , o = n.exportTypedArrayMethod;
      o("indexOf", (function(e) {
          return a(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
      }
      ))
  },
  e95a: function(e, t, r) {
      var n = r("b622")
        , a = r("3f8c")
        , i = n("iterator")
        , o = Array.prototype;
      e.exports = function(e) {
          return void 0 !== e && (a.Array === e || o[i] === e)
      }
  },
  ebb5: function(e, t, r) {
      "use strict";
      var n, a = r("a981"), i = r("83ab"), o = r("da84"), s = r("861d"), c = r("5135"), u = r("f5df"), l = r("9112"), f = r("6eeb"), d = r("9bf2").f, h = r("e163"), p = r("d2bb"), m = r("b622"), g = r("90e3"), y = o.Int8Array, b = y && y.prototype, v = o.Uint8ClampedArray, w = v && v.prototype, T = y && h(y), k = b && h(b), _ = Object.prototype, S = _.isPrototypeOf, E = m("toStringTag"), I = g("TYPED_ARRAY_TAG"), A = a && !!p && "Opera" !== u(o.opera), x = !1, B = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
      }, C = function(e) {
          var t = u(e);
          return "DataView" === t || c(B, t)
      }, P = function(e) {
          return s(e) && c(B, u(e))
      }, O = function(e) {
          if (P(e))
              return e;
          throw TypeError("Target is not a typed array")
      }, M = function(e) {
          if (p) {
              if (S.call(T, e))
                  return e
          } else
              for (var t in B)
                  if (c(B, n)) {
                      var r = o[t];
                      if (r && (e === r || S.call(r, e)))
                          return e
                  }
          throw TypeError("Target is not a typed array constructor")
      }, D = function(e, t, r) {
          if (i) {
              if (r)
                  for (var n in B) {
                      var a = o[n];
                      a && c(a.prototype, e) && delete a.prototype[e]
                  }
              k[e] && !r || f(k, e, r ? t : A && b[e] || t)
          }
      }, R = function(e, t, r) {
          var n, a;
          if (i) {
              if (p) {
                  if (r)
                      for (n in B)
                          a = o[n],
                          a && c(a, e) && delete a[e];
                  if (T[e] && !r)
                      return;
                  try {
                      return f(T, e, r ? t : A && y[e] || t)
                  } catch (s) {}
              }
              for (n in B)
                  a = o[n],
                  !a || a[e] && !r || f(a, e, t)
          }
      };
      for (n in B)
          o[n] || (A = !1);
      if ((!A || "function" != typeof T || T === Function.prototype) && (T = function() {
          throw TypeError("Incorrect invocation")
      }
      ,
      A))
          for (n in B)
              o[n] && p(o[n], T);
      if ((!A || !k || k === _) && (k = T.prototype,
      A))
          for (n in B)
              o[n] && p(o[n].prototype, k);
      if (A && h(w) !== k && p(w, k),
      i && !c(k, E))
          for (n in x = !0,
          d(k, E, {
              get: function() {
                  return s(this) ? this[I] : void 0
              }
          }),
          B)
              o[n] && l(o[n], I, n);
      e.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: A,
          TYPED_ARRAY_TAG: x && I,
          aTypedArray: O,
          aTypedArrayConstructor: M,
          exportTypedArrayMethod: D,
          exportTypedArrayStaticMethod: R,
          isView: C,
          isTypedArray: P,
          TypedArray: T,
          TypedArrayPrototype: k
      }
  },
  f069: function(e, t, r) {
      "use strict";
      var n = r("1c0b")
        , a = function(e) {
          var t, r;
          this.promise = new e((function(e, n) {
              if (void 0 !== t || void 0 !== r)
                  throw TypeError("Bad Promise constructor");
              t = e,
              r = n
          }
          )),
          this.resolve = n(t),
          this.reject = n(r)
      };
      e.exports.f = function(e) {
          return new a(e)
      }
  },
  f35d: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.defaultMessages = "End-Of-Stream";
      class n extends Error {
          constructor() {
              super(t.defaultMessages)
          }
      }
      t.EndOfStreamError = n
  },
  f3f0: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("6f58");
      t.IdentificationHeader = {
          len: 42,
          get: (e,t)=>({
              id: new n.StringType(7,"ascii").get(e, t),
              vmaj: e.readUInt8(t + 7),
              vmin: e.readUInt8(t + 8),
              vrev: e.readUInt8(t + 9),
              vmbw: e.readUInt16BE(t + 10),
              vmbh: e.readUInt16BE(t + 17),
              nombr: n.UINT24_BE.get(e, t + 37),
              nqual: e.readUInt8(t + 40)
          })
      }
  },
  f4ea: function(e, t, r) {
      (function(t, n, a) {
          e.exports = n(r("21bf"), r("38ba"))
      }
      )(0, (function(e) {
          return e.mode.CTR = function() {
              var t = e.lib.BlockCipherMode.extend()
                , r = t.Encryptor = t.extend({
                  processBlock: function(e, t) {
                      var r = this._cipher
                        , n = r.blockSize
                        , a = this._iv
                        , i = this._counter;
                      a && (i = this._counter = a.slice(0),
                      this._iv = void 0);
                      var o = i.slice(0);
                      r.encryptBlock(o, 0),
                      i[n - 1] = i[n - 1] + 1 | 0;
                      for (var s = 0; s < n; s++)
                          e[t + s] ^= o[s]
                  }
              });
              return t.Decryptor = r,
              t
          }(),
          e.mode.CTR
      }
      ))
  },
  f5df: function(e, t, r) {
      var n = r("00ee")
        , a = r("c6b6")
        , i = r("b622")
        , o = i("toStringTag")
        , s = "Arguments" == a(function() {
          return arguments
      }())
        , c = function(e, t) {
          try {
              return e[t]
          } catch (r) {}
      };
      e.exports = n ? a : function(e) {
          var t, r, n;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = c(t = Object(e), o)) ? r : s ? a(t) : "Object" == (n = a(t)) && "function" == typeof t.callee ? "Arguments" : n
      }
  },
  f654: function(e, t, r) {
      "use strict";
      (function(t) {
          var n = r("320c");
          /*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
* @license  MIT
*/
          function a(e, t) {
              if (e === t)
                  return 0;
              for (var r = e.length, n = t.length, a = 0, i = Math.min(r, n); a < i; ++a)
                  if (e[a] !== t[a]) {
                      r = e[a],
                      n = t[a];
                      break
                  }
              return r < n ? -1 : n < r ? 1 : 0
          }
          function i(e) {
              return t.Buffer && "function" === typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
          }
          var o = r("3022")
            , s = Object.prototype.hasOwnProperty
            , c = Array.prototype.slice
            , u = function() {
              return "foo" === function() {}
              .name
          }();
          function l(e) {
              return Object.prototype.toString.call(e)
          }
          function f(e) {
              return !i(e) && ("function" === typeof t.ArrayBuffer && ("function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
          }
          var d = e.exports = v
            , h = /\s*function\s+([^\(\s]*)\s*/;
          function p(e) {
              if (o.isFunction(e)) {
                  if (u)
                      return e.name;
                  var t = e.toString()
                    , r = t.match(h);
                  return r && r[1]
              }
          }
          function m(e, t) {
              return "string" === typeof e ? e.length < t ? e : e.slice(0, t) : e
          }
          function g(e) {
              if (u || !o.isFunction(e))
                  return o.inspect(e);
              var t = p(e)
                , r = t ? ": " + t : "";
              return "[Function" + r + "]"
          }
          function y(e) {
              return m(g(e.actual), 128) + " " + e.operator + " " + m(g(e.expected), 128)
          }
          function b(e, t, r, n, a) {
              throw new d.AssertionError({
                  message: r,
                  actual: e,
                  expected: t,
                  operator: n,
                  stackStartFunction: a
              })
          }
          function v(e, t) {
              e || b(e, !0, t, "==", d.ok)
          }
          function w(e, t, r, n) {
              if (e === t)
                  return !0;
              if (i(e) && i(t))
                  return 0 === a(e, t);
              if (o.isDate(e) && o.isDate(t))
                  return e.getTime() === t.getTime();
              if (o.isRegExp(e) && o.isRegExp(t))
                  return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
              if (null !== e && "object" === typeof e || null !== t && "object" === typeof t) {
                  if (f(e) && f(t) && l(e) === l(t) && !(e instanceof Float32Array || e instanceof Float64Array))
                      return 0 === a(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                  if (i(e) !== i(t))
                      return !1;
                  n = n || {
                      actual: [],
                      expected: []
                  };
                  var s = n.actual.indexOf(e);
                  return -1 !== s && s === n.expected.indexOf(t) || (n.actual.push(e),
                  n.expected.push(t),
                  k(e, t, r, n))
              }
              return r ? e === t : e == t
          }
          function T(e) {
              return "[object Arguments]" == Object.prototype.toString.call(e)
          }
          function k(e, t, r, n) {
              if (null === e || void 0 === e || null === t || void 0 === t)
                  return !1;
              if (o.isPrimitive(e) || o.isPrimitive(t))
                  return e === t;
              if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                  return !1;
              var a = T(e)
                , i = T(t);
              if (a && !i || !a && i)
                  return !1;
              if (a)
                  return e = c.call(e),
                  t = c.call(t),
                  w(e, t, r);
              var s, u, l = x(e), f = x(t);
              if (l.length !== f.length)
                  return !1;
              for (l.sort(),
              f.sort(),
              u = l.length - 1; u >= 0; u--)
                  if (l[u] !== f[u])
                      return !1;
              for (u = l.length - 1; u >= 0; u--)
                  if (s = l[u],
                  !w(e[s], t[s], r, n))
                      return !1;
              return !0
          }
          function _(e, t, r) {
              w(e, t, !0) && b(e, t, r, "notDeepStrictEqual", _)
          }
          function S(e, t) {
              if (!e || !t)
                  return !1;
              if ("[object RegExp]" == Object.prototype.toString.call(t))
                  return t.test(e);
              try {
                  if (e instanceof t)
                      return !0
              } catch (r) {}
              return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
          }
          function E(e) {
              var t;
              try {
                  e()
              } catch (r) {
                  t = r
              }
              return t
          }
          function I(e, t, r, n) {
              var a;
              if ("function" !== typeof t)
                  throw new TypeError('"block" argument must be a function');
              "string" === typeof r && (n = r,
              r = null),
              a = E(t),
              n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."),
              e && !a && b(a, r, "Missing expected exception" + n);
              var i = "string" === typeof n
                , s = !e && o.isError(a)
                , c = !e && a && !r;
              if ((s && i && S(a, r) || c) && b(a, r, "Got unwanted exception" + n),
              e && a && r && !S(a, r) || !e && a)
                  throw a
          }
          function A(e, t) {
              e || b(e, !0, t, "==", A)
          }
          d.AssertionError = function(e) {
              this.name = "AssertionError",
              this.actual = e.actual,
              this.expected = e.expected,
              this.operator = e.operator,
              e.message ? (this.message = e.message,
              this.generatedMessage = !1) : (this.message = y(this),
              this.generatedMessage = !0);
              var t = e.stackStartFunction || b;
              if (Error.captureStackTrace)
                  Error.captureStackTrace(this, t);
              else {
                  var r = new Error;
                  if (r.stack) {
                      var n = r.stack
                        , a = p(t)
                        , i = n.indexOf("\n" + a);
                      if (i >= 0) {
                          var o = n.indexOf("\n", i + 1);
                          n = n.substring(o + 1)
                      }
                      this.stack = n
                  }
              }
          }
          ,
          o.inherits(d.AssertionError, Error),
          d.fail = b,
          d.ok = v,
          d.equal = function(e, t, r) {
              e != t && b(e, t, r, "==", d.equal)
          }
          ,
          d.notEqual = function(e, t, r) {
              e == t && b(e, t, r, "!=", d.notEqual)
          }
          ,
          d.deepEqual = function(e, t, r) {
              w(e, t, !1) || b(e, t, r, "deepEqual", d.deepEqual)
          }
          ,
          d.deepStrictEqual = function(e, t, r) {
              w(e, t, !0) || b(e, t, r, "deepStrictEqual", d.deepStrictEqual)
          }
          ,
          d.notDeepEqual = function(e, t, r) {
              w(e, t, !1) && b(e, t, r, "notDeepEqual", d.notDeepEqual)
          }
          ,
          d.notDeepStrictEqual = _,
          d.strictEqual = function(e, t, r) {
              e !== t && b(e, t, r, "===", d.strictEqual)
          }
          ,
          d.notStrictEqual = function(e, t, r) {
              e === t && b(e, t, r, "!==", d.notStrictEqual)
          }
          ,
          d.throws = function(e, t, r) {
              I(!0, e, t, r)
          }
          ,
          d.doesNotThrow = function(e, t, r) {
              I(!1, e, t, r)
          }
          ,
          d.ifError = function(e) {
              if (e)
                  throw e
          }
          ,
          d.strict = n(A, d, {
              equal: d.strictEqual,
              deepEqual: d.deepStrictEqual,
              notEqual: d.notStrictEqual,
              notDeepEqual: d.notDeepStrictEqual
          }),
          d.strict.strict = d.strict;
          var x = Object.keys || function(e) {
              var t = [];
              for (var r in e)
                  s.call(e, r) && t.push(r);
              return t
          }
      }
      ).call(this, r("c8ba"))
  },
  f772: function(e, t, r) {
      var n = r("5692")
        , a = r("90e3")
        , i = n("keys");
      e.exports = function(e) {
          return i[e] || (i[e] = a(e))
      }
  },
  f8cd: function(e, t, r) {
      var n = r("a691");
      e.exports = function(e) {
          var t = n(e);
          if (t < 0)
              throw RangeError("The argument can't be less than 0");
          return t
      }
  },
  fa6f: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97")
        , a = r("d3ab")
        , i = r("53d6")
        , o = {
          TIT2: "title",
          TPE1: "artist",
          "TXXX:Artists": "artists",
          TPE2: "albumartist",
          TALB: "album",
          TDRV: "date",
          TORY: "originalyear",
          TPOS: "disk",
          TCON: "genre",
          APIC: "picture",
          TCOM: "composer",
          "USLT:description": "lyrics",
          TSOA: "albumsort",
          TSOT: "titlesort",
          TOAL: "originalalbum",
          TSOP: "artistsort",
          TSO2: "albumartistsort",
          TSOC: "composersort",
          TEXT: "lyricist",
          "TXXX:Writer": "writer",
          TPE3: "conductor",
          TPE4: "remixer",
          "IPLS:arranger": "arranger",
          "IPLS:engineer": "engineer",
          "IPLS:producer": "producer",
          "IPLS:DJ-mix": "djmixer",
          "IPLS:mix": "mixer",
          TPUB: "label",
          TIT1: "grouping",
          TIT3: "subtitle",
          TRCK: "track",
          TCMP: "compilation",
          POPM: "rating",
          TBPM: "bpm",
          TMED: "media",
          "TXXX:CATALOGNUMBER": "catalognumber",
          "TXXX:MusicBrainz Album Status": "releasestatus",
          "TXXX:MusicBrainz Album Type": "releasetype",
          "TXXX:MusicBrainz Album Release Country": "releasecountry",
          "TXXX:RELEASECOUNTRY": "releasecountry",
          "TXXX:SCRIPT": "script",
          TLAN: "language",
          TCOP: "copyright",
          WCOP: "license",
          TENC: "encodedby",
          TSSE: "encodersettings",
          "TXXX:BARCODE": "barcode",
          TSRC: "isrc",
          "TXXX:ASIN": "asin",
          "TXXX:originalyear": "originalyear",
          "UFID:http://musicbrainz.org": "musicbrainz_recordingid",
          "TXXX:MusicBrainz Release Track Id": "musicbrainz_trackid",
          "TXXX:MusicBrainz Album Id": "musicbrainz_albumid",
          "TXXX:MusicBrainz Artist Id": "musicbrainz_artistid",
          "TXXX:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
          "TXXX:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
          "TXXX:MusicBrainz Work Id": "musicbrainz_workid",
          "TXXX:MusicBrainz TRM Id": "musicbrainz_trmid",
          "TXXX:MusicBrainz Disc Id": "musicbrainz_discid",
          "TXXX:ACOUSTID_ID": "acoustid_id",
          "TXXX:Acoustid Id": "acoustid_id",
          "TXXX:Acoustid Fingerprint": "acoustid_fingerprint",
          "TXXX:MusicIP PUID": "musicip_puid",
          "TXXX:MusicMagic Fingerprint": "musicip_fingerprint",
          WOAR: "website",
          TDRC: "date",
          TYER: "year",
          TDOR: "originaldate",
          "TIPL:arranger": "arranger",
          "TIPL:engineer": "engineer",
          "TIPL:producer": "producer",
          "TIPL:DJ-mix": "djmixer",
          "TIPL:mix": "mixer",
          TMOO: "mood",
          SYLT: "lyrics",
          TSST: "discsubtitle",
          TKEY: "key",
          COMM: "comment",
          TOPE: "originalartist",
          "PRIV:AverageLevel": "averageLevel",
          "PRIV:PeakLevel": "peakLevel",
          "TXXX:DISCOGS_ARTIST_ID": "discogs_artist_id",
          "TXXX:DISCOGS_ARTISTS": "artists",
          "TXXX:DISCOGS_ARTIST_NAME": "artists",
          "TXXX:DISCOGS_ALBUM_ARTISTS": "albumartist",
          "TXXX:DISCOGS_CATALOG": "catalognumber",
          "TXXX:DISCOGS_COUNTRY": "releasecountry",
          "TXXX:DISCOGS_DATE": "originaldate",
          "TXXX:DISCOGS_LABEL": "label",
          "TXXX:DISCOGS_LABEL_ID": "discogs_label_id",
          "TXXX:DISCOGS_MASTER_RELEASE_ID": "discogs_master_release_id",
          "TXXX:DISCOGS_RATING": "discogs_rating",
          "TXXX:DISCOGS_RELEASED": "date",
          "TXXX:DISCOGS_RELEASE_ID": "discogs_release_id",
          "TXXX:DISCOGS_VOTES": "discogs_votes",
          "TXXX:CATALOGID": "catalognumber",
          "TXXX:STYLE": "genre",
          "TXXX:REPLAYGAIN_TRACK_PEAK": "replaygain_track_peak",
          "TXXX:REPLAYGAIN_TRACK_GAIN": "replaygain_track_gain",
          "TXXX:REPLAYGAIN_ALBUM_PEAK": "replaygain_album_peak",
          "TXXX:REPLAYGAIN_ALBUM_GAIN": "replaygain_album_gain",
          "TXXX:MP3GAIN_MINMAX": "replaygain_track_minmax",
          "TXXX:MP3GAIN_ALBUM_MINMAX": "replaygain_album_minmax",
          "TXXX:MP3GAIN_UNDO": "replaygain_undo"
      };
      class s extends i.CaseInsensitiveTagMap {
          static toRating(e) {
              return {
                  source: e.email,
                  rating: e.rating > 0 ? (e.rating - 1) / 254 * n.CommonTagMapper.maxRatingScore : void 0
              }
          }
          constructor() {
              super(["ID3v2.3", "ID3v2.4"], o)
          }
          postMap(e, t) {
              switch (e.id) {
              case "UFID":
                  "http://musicbrainz.org" === e.value.owner_identifier && (e.id += ":" + e.value.owner_identifier,
                  e.value = a.default.decodeString(e.value.identifier, "iso-8859-1"));
                  break;
              case "PRIV":
                  switch (e.value.owner_identifier) {
                  case "AverageLevel":
                  case "PeakValue":
                      e.id += ":" + e.value.owner_identifier,
                      e.value = 4 === e.value.data.length ? e.value.data.readUInt32LE(0) : null,
                      null === e.value && t.addWarning("Failed to parse PRIV:PeakValue");
                      break;
                  default:
                      t.addWarning(`Unknown PRIV owner-identifier: ${e.value.owner_identifier}`)
                  }
                  break;
              case "COMM":
                  e.value = e.value ? e.value.text : null;
                  break;
              case "POPM":
                  e.value = s.toRating(e.value);
                  break;
              default:
                  break
              }
          }
      }
      t.ID3v24TagMapper = s
  },
  fa86: function(e, t, r) {
      "use strict";
      (function(e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          const n = r("d3ab")
            , a = r("6f58")
            , i = r("9131")
            , o = r("4cc3")
            , s = r("0662");
          (function(e) {
              e[e["UnicodeString"] = 0] = "UnicodeString",
              e[e["ByteArray"] = 1] = "ByteArray",
              e[e["Bool"] = 2] = "Bool",
              e[e["DWord"] = 3] = "DWord",
              e[e["QWord"] = 4] = "QWord",
              e[e["Word"] = 5] = "Word"
          }
          )(t.DataType || (t.DataType = {})),
          t.TopLevelHeaderObjectToken = {
              len: 30,
              get: (e,t)=>({
                  objectId: i.default.fromBin(new a.BufferType(16).get(e, t)),
                  objectSize: a.UINT64_LE.get(e, t + 16),
                  numberOfHeaderObjects: a.UINT32_LE.get(e, t + 24)
              })
          },
          t.HeaderObjectToken = {
              len: 24,
              get: (e,t)=>({
                  objectId: i.default.fromBin(new a.BufferType(16).get(e, t)),
                  objectSize: a.UINT64_LE.get(e, t + 16)
              })
          };
          class c {
              constructor(e) {
                  this.len = e.objectSize - t.HeaderObjectToken.len
              }
              postProcessTag(e, t, r, n) {
                  if ("WM/Picture" === t)
                      e.push({
                          id: t,
                          value: _.fromBuffer(n)
                      });
                  else {
                      const a = o.AsfUtil.getParserForAttr(r);
                      if (!a)
                          throw new Error("unexpected value headerType: " + r);
                      e.push({
                          id: t,
                          value: a(n)
                      })
                  }
              }
          }
          t.State = c;
          class u extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  return null
              }
          }
          t.IgnoreObjectState = u;
          class l extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  return {
                      fileId: i.default.fromBin(e, t),
                      fileSize: a.UINT64_LE.get(e, t + 16),
                      creationDate: a.UINT64_LE.get(e, t + 24),
                      dataPacketsCount: a.UINT64_LE.get(e, t + 32),
                      playDuration: a.UINT64_LE.get(e, t + 40),
                      sendDuration: a.UINT64_LE.get(e, t + 48),
                      preroll: a.UINT64_LE.get(e, t + 56),
                      flags: {
                          broadcast: n.default.strtokBITSET.get(e, t + 64, 24),
                          seekable: n.default.strtokBITSET.get(e, t + 64, 25)
                      },
                      minimumDataPacketSize: a.UINT32_LE.get(e, t + 68),
                      maximumDataPacketSize: a.UINT32_LE.get(e, t + 72),
                      maximumBitrate: a.UINT32_LE.get(e, t + 76)
                  }
              }
          }
          t.FilePropertiesObject = l,
          l.guid = i.default.FilePropertiesObject;
          class f extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  return {
                      streamType: i.default.decodeMediaType(i.default.fromBin(e, t)),
                      errorCorrectionType: i.default.fromBin(e, t + 8)
                  }
              }
          }
          t.StreamPropertiesObject = f,
          f.guid = i.default.StreamPropertiesObject;
          class d {
              constructor() {
                  this.len = 22
              }
              get(e, t) {
                  return {
                      reserved1: i.default.fromBin(e, t),
                      reserved2: e.readUInt16LE(t + 16),
                      extensionDataSize: e.readUInt32LE(t + 18)
                  }
              }
          }
          t.HeaderExtensionObject = d,
          d.guid = i.default.HeaderExtensionObject;
          const h = {
              len: 20,
              get: (e,t)=>({
                  entryCount: e.readUInt16LE(t + 16)
              })
          };
          async function p(e) {
              const t = await e.readNumber(a.UINT16_LE);
              return (await e.readToken(new a.StringType(2 * t,"utf16le"))).replace("\0", "")
          }
          async function m(e) {
              const t = await e.readToken(h)
                , r = [];
              for (let n = 0; n < t.entryCount; ++n)
                  r.push(await y(e));
              return r
          }
          async function g(t) {
              const r = await t.readNumber(a.UINT16_LE)
                , n = e.alloc(r);
              return await t.readBuffer(n),
              n
          }
          async function y(e) {
              const t = await e.readNumber(a.UINT16_LE);
              return {
                  type: {
                      videoCodec: 1 === (1 & t),
                      audioCodec: 2 === (2 & t)
                  },
                  codecName: await p(e),
                  description: await p(e),
                  information: await g(e)
              }
          }
          t.readCodecEntries = m;
          class b extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  const r = [];
                  let n = t + 10;
                  for (let a = 0; a < b.contentDescTags.length; ++a) {
                      const i = e.readUInt16LE(t + 2 * a);
                      if (i > 0) {
                          const t = b.contentDescTags[a]
                            , s = n + i;
                          r.push({
                              id: t,
                              value: o.AsfUtil.parseUnicodeAttr(e.slice(n, s))
                          }),
                          n = s
                      }
                  }
                  return r
              }
          }
          t.ContentDescriptionObjectState = b,
          b.guid = i.default.ContentDescriptionObject,
          b.contentDescTags = ["Title", "Author", "Copyright", "Description", "Rating"];
          class v extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  const r = []
                    , n = e.readUInt16LE(t);
                  let a = t + 2;
                  for (let i = 0; i < n; i += 1) {
                      const t = e.readUInt16LE(a);
                      a += 2;
                      const n = o.AsfUtil.parseUnicodeAttr(e.slice(a, a + t));
                      a += t;
                      const i = e.readUInt16LE(a);
                      a += 2;
                      const s = e.readUInt16LE(a);
                      a += 2;
                      const c = e.slice(a, a + s);
                      a += s,
                      this.postProcessTag(r, n, i, c)
                  }
                  return r
              }
          }
          t.ExtendedContentDescriptionObjectState = v,
          v.guid = i.default.ExtendedContentDescriptionObject;
          class w extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  return {
                      startTime: a.UINT64_LE.get(e, t),
                      endTime: a.UINT64_LE.get(e, t + 8),
                      dataBitrate: e.readInt32LE(t + 12),
                      bufferSize: e.readInt32LE(t + 16),
                      initialBufferFullness: e.readInt32LE(t + 20),
                      alternateDataBitrate: e.readInt32LE(t + 24),
                      alternateBufferSize: e.readInt32LE(t + 28),
                      alternateInitialBufferFullness: e.readInt32LE(t + 32),
                      maximumObjectSize: e.readInt32LE(t + 36),
                      flags: {
                          reliableFlag: n.default.strtokBITSET.get(e, t + 40, 0),
                          seekableFlag: n.default.strtokBITSET.get(e, t + 40, 1),
                          resendLiveCleanpointsFlag: n.default.strtokBITSET.get(e, t + 40, 2)
                      },
                      streamNumber: e.readInt16LE(t + 42),
                      streamLanguageId: e.readInt16LE(t + 44),
                      averageTimePerFrame: e.readInt32LE(t + 52),
                      streamNameCount: e.readInt32LE(t + 54),
                      payloadExtensionSystems: e.readInt32LE(t + 56),
                      streamNames: [],
                      streamPropertiesObject: null
                  }
              }
          }
          t.ExtendedStreamPropertiesObjectState = w,
          w.guid = i.default.ExtendedStreamPropertiesObject;
          class T extends c {
              constructor(e) {
                  super(e)
              }
              get(e, t) {
                  const r = []
                    , n = e.readUInt16LE(t);
                  let a = t + 2;
                  for (let i = 0; i < n; i += 1) {
                      a += 4;
                      const t = e.readUInt16LE(a);
                      a += 2;
                      const n = e.readUInt16LE(a);
                      a += 2;
                      const i = e.readUInt32LE(a);
                      a += 4;
                      const s = o.AsfUtil.parseUnicodeAttr(e.slice(a, a + t));
                      a += t;
                      const c = e.slice(a, a + i);
                      a += i;
                      const u = o.AsfUtil.getParserForAttr(n);
                      if (!u)
                          throw new Error("unexpected value headerType: " + n);
                      this.postProcessTag(r, s, n, c)
                  }
                  return r
              }
          }
          t.MetadataObjectState = T,
          T.guid = i.default.MetadataObject;
          class k extends T {
              constructor(e) {
                  super(e)
              }
          }
          t.MetadataLibraryObjectState = k,
          k.guid = i.default.MetadataLibraryObject;
          class _ {
              constructor(e) {
                  this.len = e
              }
              static fromBase64(t) {
                  return this.fromBuffer(e.from(t, "base64"))
              }
              static fromBuffer(e) {
                  const t = new _(e.length);
                  return t.get(e, 0)
              }
              get(e, t) {
                  const r = e.readUInt8(t++)
                    , n = e.readInt32LE(t);
                  let a = 5;
                  while (0 !== e.readUInt16BE(a))
                      a += 2;
                  const i = e.slice(5, a).toString("utf16le");
                  while (0 !== e.readUInt16BE(a))
                      a += 2;
                  const o = e.slice(5, a).toString("utf16le");
                  return {
                      type: s.AttachedPictureType[r],
                      format: i,
                      description: o,
                      size: n,
                      data: e.slice(a + 4)
                  }
              }
          }
          t.WmPictureToken = _
      }
      ).call(this, r("b639").Buffer)
  },
  faa1: function(e, t, r) {
      "use strict";
      var n, a = "object" === typeof Reflect ? Reflect : null, i = a && "function" === typeof a.apply ? a.apply : function(e, t, r) {
          return Function.prototype.apply.call(e, t, r)
      }
      ;
      function o(e) {
          console && console.warn && console.warn(e)
      }
      n = a && "function" === typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function(e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
      }
      : function(e) {
          return Object.getOwnPropertyNames(e)
      }
      ;
      var s = Number.isNaN || function(e) {
          return e !== e
      }
      ;
      function c() {
          c.init.call(this)
      }
      e.exports = c,
      c.EventEmitter = c,
      c.prototype._events = void 0,
      c.prototype._eventsCount = 0,
      c.prototype._maxListeners = void 0;
      var u = 10;
      function l(e) {
          if ("function" !== typeof e)
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
      }
      function f(e) {
          return void 0 === e._maxListeners ? c.defaultMaxListeners : e._maxListeners
      }
      function d(e, t, r, n) {
          var a, i, s;
          if (l(r),
          i = e._events,
          void 0 === i ? (i = e._events = Object.create(null),
          e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
          i = e._events),
          s = i[t]),
          void 0 === s)
              s = i[t] = r,
              ++e._eventsCount;
          else if ("function" === typeof s ? s = i[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r),
          a = f(e),
          a > 0 && s.length > a && !s.warned) {
              s.warned = !0;
              var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              c.name = "MaxListenersExceededWarning",
              c.emitter = e,
              c.type = t,
              c.count = s.length,
              o(c)
          }
          return e
      }
      function h() {
          if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn),
              this.fired = !0,
              0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
      }
      function p(e, t, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: r
          }
            , a = h.bind(n);
          return a.listener = r,
          n.wrapFn = a,
          a
      }
      function m(e, t, r) {
          var n = e._events;
          if (void 0 === n)
              return [];
          var a = n[t];
          return void 0 === a ? [] : "function" === typeof a ? r ? [a.listener || a] : [a] : r ? v(a) : y(a, a.length)
      }
      function g(e) {
          var t = this._events;
          if (void 0 !== t) {
              var r = t[e];
              if ("function" === typeof r)
                  return 1;
              if (void 0 !== r)
                  return r.length
          }
          return 0
      }
      function y(e, t) {
          for (var r = new Array(t), n = 0; n < t; ++n)
              r[n] = e[n];
          return r
      }
      function b(e, t) {
          for (; t + 1 < e.length; t++)
              e[t] = e[t + 1];
          e.pop()
      }
      function v(e) {
          for (var t = new Array(e.length), r = 0; r < t.length; ++r)
              t[r] = e[r].listener || e[r];
          return t
      }
      Object.defineProperty(c, "defaultMaxListeners", {
          enumerable: !0,
          get: function() {
              return u
          },
          set: function(e) {
              if ("number" !== typeof e || e < 0 || s(e))
                  throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
              u = e
          }
      }),
      c.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
          this._eventsCount = 0),
          this._maxListeners = this._maxListeners || void 0
      }
      ,
      c.prototype.setMaxListeners = function(e) {
          if ("number" !== typeof e || e < 0 || s(e))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this._maxListeners = e,
          this
      }
      ,
      c.prototype.getMaxListeners = function() {
          return f(this)
      }
      ,
      c.prototype.emit = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
              t.push(arguments[r]);
          var n = "error" === e
            , a = this._events;
          if (void 0 !== a)
              n = n && void 0 === a.error;
          else if (!n)
              return !1;
          if (n) {
              var o;
              if (t.length > 0 && (o = t[0]),
              o instanceof Error)
                  throw o;
              var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
              throw s.context = o,
              s
          }
          var c = a[e];
          if (void 0 === c)
              return !1;
          if ("function" === typeof c)
              i(c, this, t);
          else {
              var u = c.length
                , l = y(c, u);
              for (r = 0; r < u; ++r)
                  i(l[r], this, t)
          }
          return !0
      }
      ,
      c.prototype.addListener = function(e, t) {
          return d(this, e, t, !1)
      }
      ,
      c.prototype.on = c.prototype.addListener,
      c.prototype.prependListener = function(e, t) {
          return d(this, e, t, !0)
      }
      ,
      c.prototype.once = function(e, t) {
          return l(t),
          this.on(e, p(this, e, t)),
          this
      }
      ,
      c.prototype.prependOnceListener = function(e, t) {
          return l(t),
          this.prependListener(e, p(this, e, t)),
          this
      }
      ,
      c.prototype.removeListener = function(e, t) {
          var r, n, a, i, o;
          if (l(t),
          n = this._events,
          void 0 === n)
              return this;
          if (r = n[e],
          void 0 === r)
              return this;
          if (r === t || r.listener === t)
              0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
              n.removeListener && this.emit("removeListener", e, r.listener || t));
          else if ("function" !== typeof r) {
              for (a = -1,
              i = r.length - 1; i >= 0; i--)
                  if (r[i] === t || r[i].listener === t) {
                      o = r[i].listener,
                      a = i;
                      break
                  }
              if (a < 0)
                  return this;
              0 === a ? r.shift() : b(r, a),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener && this.emit("removeListener", e, o || t)
          }
          return this
      }
      ,
      c.prototype.off = c.prototype.removeListener,
      c.prototype.removeAllListeners = function(e) {
          var t, r, n;
          if (r = this._events,
          void 0 === r)
              return this;
          if (void 0 === r.removeListener)
              return 0 === arguments.length ? (this._events = Object.create(null),
              this._eventsCount = 0) : void 0 !== r[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
              this;
          if (0 === arguments.length) {
              var a, i = Object.keys(r);
              for (n = 0; n < i.length; ++n)
                  a = i[n],
                  "removeListener" !== a && this.removeAllListeners(a);
              return this.removeAllListeners("removeListener"),
              this._events = Object.create(null),
              this._eventsCount = 0,
              this
          }
          if (t = r[e],
          "function" === typeof t)
              this.removeListener(e, t);
          else if (void 0 !== t)
              for (n = t.length - 1; n >= 0; n--)
                  this.removeListener(e, t[n]);
          return this
      }
      ,
      c.prototype.listeners = function(e) {
          return m(this, e, !0)
      }
      ,
      c.prototype.rawListeners = function(e) {
          return m(this, e, !1)
      }
      ,
      c.listenerCount = function(e, t) {
          return "function" === typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
      }
      ,
      c.prototype.listenerCount = g,
      c.prototype.eventNames = function() {
          return this._eventsCount > 0 ? n(this._events) : []
      }
  },
  fb6a: function(e, t, r) {
      "use strict";
      var n = r("23e7")
        , a = r("861d")
        , i = r("e8b5")
        , o = r("23cb")
        , s = r("50c4")
        , c = r("fc6a")
        , u = r("8418")
        , l = r("b622")
        , f = r("1dde")
        , d = r("ae40")
        , h = f("slice")
        , p = d("slice", {
          ACCESSORS: !0,
          0: 0,
          1: 2
      })
        , m = l("species")
        , g = [].slice
        , y = Math.max;
      n({
          target: "Array",
          proto: !0,
          forced: !h || !p
      }, {
          slice: function(e, t) {
              var r, n, l, f = c(this), d = s(f.length), h = o(e, d), p = o(void 0 === t ? d : t, d);
              if (i(f) && (r = f.constructor,
              "function" != typeof r || r !== Array && !i(r.prototype) ? a(r) && (r = r[m],
              null === r && (r = void 0)) : r = void 0,
              r === Array || void 0 === r))
                  return g.call(f, h, p);
              for (n = new (void 0 === r ? Array : r)(y(p - h, 0)),
              l = 0; h < p; h++,
              l++)
                  h in f && u(n, l, f[h]);
              return n.length = l,
              n
          }
      })
  },
  fc6a: function(e, t, r) {
      var n = r("44ad")
        , a = r("1d80");
      e.exports = function(e) {
          return n(a(e))
      }
  },
  fc97: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("1e78");
      class a {
          constructor(e, t) {
              this.tagTypes = e,
              this.tagMap = t
          }
          static parseGenre(e) {
              const t = e.trim().split(/\((.*?)\)/g).filter(e=>"" !== e)
                , r = [];
              for (let a of t)
                  /^\d+$/.test(a) && !isNaN(parseInt(a, 10)) && (a = n.Genres[a]),
                  r.push(a);
              return r.filter(e=>void 0 !== e).join("/")
          }
          static toIntOrNull(e) {
              const t = parseInt(e, 10);
              return isNaN(t) ? null : t
          }
          static normalizeTrack(e) {
              const t = e.toString().split("/");
              return {
                  no: parseInt(t[0], 10) || null,
                  of: parseInt(t[1], 10) || null
              }
          }
          mapGenericTag(e, t) {
              e = {
                  id: e.id,
                  value: e.value
              },
              this.postMap(e, t);
              const r = this.getCommonName(e.id);
              return r ? {
                  id: r,
                  value: e.value
              } : null
          }
          getCommonName(e) {
              return this.tagMap[e]
          }
          postMap(e, t) {}
      }
      t.CommonTagMapper = a,
      a.maxRatingScore = 1
  },
  fd2f: function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, "Decrypt", (function() {
          return o
      }
      ));
      r("ace4"),
      r("d3b7"),
      r("3ca3"),
      r("5cc6"),
      r("9a8c"),
      r("a975"),
      r("735e"),
      r("c1ac"),
      r("d139"),
      r("3a7b"),
      r("d5d6"),
      r("82f8"),
      r("e91f"),
      r("60bd"),
      r("5f96"),
      r("3280"),
      r("3fcc"),
      r("ca91"),
      r("25a1"),
      r("cd26"),
      r("3c5d"),
      r("2954"),
      r("649e"),
      r("219c"),
      r("170b"),
      r("b39a"),
      r("72f7"),
      r("ddb0"),
      r("2b3d"),
      r("96cf");
      var n = r("1da1")
        , a = r("06dc")
        , i = r("cb96");
      function o(e, t, r) {
          return s.apply(this, arguments)
      }
      function s() {
          return s = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n) {
              var o, s, c, u, l, f = arguments;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                      switch (e.prev = e.next) {
                      case 0:
                          if (o = !(f.length > 3 && void 0 !== f[3]) || f[3],
                          s = n,
                          !o) {
                              e.next = 10;
                              break
                          }
                          return e.t0 = Uint8Array,
                          e.next = 6,
                          Object(a["d"])(t);
                      case 6:
                          e.t1 = e.sent,
                          c = new e.t0(e.t1),
                          s = Object(a["b"])(c, n),
                          s !== n && (t = new Blob([c],{
                              type: a["a"][s]
                          }));
                      case 10:
                          return e.next = 12,
                          i.parseBlob(t);
                      case 12:
                          return u = e.sent,
                          l = Object(a["f"])(u.common.artist, u.common.title, r),
                          e.abrupt("return", {
                              status: !0,
                              title: l.title,
                              artist: l.artist,
                              ext: s,
                              album: u.common.album,
                              picture: Object(a["e"])(u),
                              file: URL.createObjectURL(t),
                              mime: a["a"][s]
                          });
                      case 15:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          s.apply(this, arguments)
      }
  },
  fdbc: function(e, t) {
      e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
      }
  },
  fdbf: function(e, t, r) {
      var n = r("4930");
      e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
  },
  fea9: function(e, t, r) {
      var n = r("da84");
      e.exports = n.Promise
  },
  feb6: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const n = r("fc97")
        , a = {
          "©nam": "title",
          "©ART": "artist",
          aART: "albumartist",
          "----:com.apple.iTunes:Band": "albumartist",
          "©alb": "album",
          "©day": "date",
          "©cmt": "comment",
          trkn: "track",
          disk: "disk",
          "©gen": "genre",
          covr: "picture",
          "©wrt": "composer",
          "©lyr": "lyrics",
          soal: "albumsort",
          sonm: "titlesort",
          soar: "artistsort",
          soaa: "albumartistsort",
          soco: "composersort",
          "----:com.apple.iTunes:LYRICIST": "lyricist",
          "----:com.apple.iTunes:CONDUCTOR": "conductor",
          "----:com.apple.iTunes:REMIXER": "remixer",
          "----:com.apple.iTunes:ENGINEER": "engineer",
          "----:com.apple.iTunes:PRODUCER": "producer",
          "----:com.apple.iTunes:DJMIXER": "djmixer",
          "----:com.apple.iTunes:MIXER": "mixer",
          "----:com.apple.iTunes:LABEL": "label",
          "©grp": "grouping",
          "----:com.apple.iTunes:SUBTITLE": "subtitle",
          "----:com.apple.iTunes:DISCSUBTITLE": "discsubtitle",
          cpil: "compilation",
          tmpo: "bpm",
          "----:com.apple.iTunes:MOOD": "mood",
          "----:com.apple.iTunes:MEDIA": "media",
          "----:com.apple.iTunes:CATALOGNUMBER": "catalognumber",
          tvsh: "tvShow",
          tvsn: "tvSeason",
          tves: "tvEpisode",
          sosn: "tvShowSort",
          tven: "tvEpisodeId",
          tvnn: "tvNetwork",
          pcst: "podcast",
          purl: "podcasturl",
          "----:com.apple.iTunes:MusicBrainz Album Status": "releasestatus",
          "----:com.apple.iTunes:MusicBrainz Album Type": "releasetype",
          "----:com.apple.iTunes:MusicBrainz Album Release Country": "releasecountry",
          "----:com.apple.iTunes:SCRIPT": "script",
          "----:com.apple.iTunes:LANGUAGE": "language",
          cprt: "copyright",
          "----:com.apple.iTunes:LICENSE": "license",
          "©too": "encodedby",
          pgap: "gapless",
          "----:com.apple.iTunes:BARCODE": "barcode",
          "----:com.apple.iTunes:ISRC": "isrc",
          "----:com.apple.iTunes:ASIN": "asin",
          "----:com.apple.iTunes:NOTES": "comment",
          "----:com.apple.iTunes:MusicBrainz Track Id": "musicbrainz_recordingid",
          "----:com.apple.iTunes:MusicBrainz Release Track Id": "musicbrainz_trackid",
          "----:com.apple.iTunes:MusicBrainz Album Id": "musicbrainz_albumid",
          "----:com.apple.iTunes:MusicBrainz Artist Id": "musicbrainz_artistid",
          "----:com.apple.iTunes:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
          "----:com.apple.iTunes:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
          "----:com.apple.iTunes:MusicBrainz Work Id": "musicbrainz_workid",
          "----:com.apple.iTunes:MusicBrainz TRM Id": "musicbrainz_trmid",
          "----:com.apple.iTunes:MusicBrainz Disc Id": "musicbrainz_discid",
          "----:com.apple.iTunes:Acoustid Id": "acoustid_id",
          "----:com.apple.iTunes:Acoustid Fingerprint": "acoustid_fingerprint",
          "----:com.apple.iTunes:MusicIP PUID": "musicip_puid",
          "----:com.apple.iTunes:fingerprint": "musicip_fingerprint",
          "----:com.apple.iTunes:replaygain_track_gain": "replaygain_track_gain",
          "----:com.apple.iTunes:replaygain_track_peak": "replaygain_track_peak",
          "----:com.apple.iTunes:replaygain_album_gain": "replaygain_album_gain",
          "----:com.apple.iTunes:replaygain_album_peak": "replaygain_album_peak",
          "----:com.apple.iTunes:replaygain_track_minmax": "replaygain_track_minmax",
          "----:com.apple.iTunes:replaygain_album_minmax": "replaygain_album_minmax",
          "----:com.apple.iTunes:replaygain_undo": "replaygain_undo",
          gnre: "genre",
          "----:com.apple.iTunes:ALBUMARTISTSORT": "albumartistsort",
          "----:com.apple.iTunes:ARTISTS": "artists",
          "----:com.apple.iTunes:ORIGINALDATE": "originaldate",
          "----:com.apple.iTunes:ORIGINALYEAR": "originalyear",
          desc: "description",
          ldes: "description"
      };
      t.tagType = "iTunes";
      class i extends n.CommonTagMapper {
          constructor() {
              super([t.tagType], a)
          }
      }
      t.MP4TagMapper = i
  }
});
//# sourceMappingURL=0cb366e0d63307f0b94a.worker.js.map
