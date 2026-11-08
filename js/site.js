/* Lists every video from js/data.js (plus any new PUBLIC Vimeo upload)
   and plays each one in place when tapped. */
(function () {
  "use strict";
  var S = window.SITE;
  var byId = new Map();
  (window.VIMEO_SNAPSHOT || []).forEach(function (v) { byId.set(v.id, v); });

  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function cleanTitle(t) {
    t = String(t || "").replace(/\b\d{4}-\d{2}-\d{2}( \d{2}[.:]\d{2})?\b/g, " ")
      .replace(/\b(v\d+|fhd|uhd|4k|hd|final|export)\b/gi, " ").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
    return t ? t.toLowerCase().replace(/\b([a-z])/g, function (m) { return m.toUpperCase(); }) : "";
  }
  function thumb(v) { return v && v.thumb ? v.thumb.replace(/_\d+(x\d+)?$/, "_1280") : ""; }

  var items = [];
  function card(it) {
    var v = it.vimeo ? byId.get(it.vimeo) : null;
    var title = it.title || (v ? cleanTitle(v.title) : "");
    var poster = it.poster || thumb(v);
    items.push(it);
    return '<figure class="v"><div class="v__frame" data-i="' + (items.length - 1) + '">' +
      (poster ? '<img src="' + esc(poster) + '" alt="" loading="lazy" decoding="async">' : "") +
      '<button class="v__start" type="button" aria-label="Play ' + esc(title) + '"></button></div>' +
      (title ? '<figcaption>' + esc(title) + '</figcaption>' : "") + '</figure>';
  }

  function build() {
    var listed = new Set(), hidden = new Set(S.hidden || []);
    ["films", "vertical", "motion"].forEach(function (k) { S[k].forEach(function (it) { if (it.vimeo) listed.add(it.vimeo); }); });
    var newWide = [], newTall = [];
    if (S.autoAddNewVimeo) {
      Array.from(byId.values())
        .filter(function (v) { return !listed.has(v.id) && !hidden.has(v.id); })
        .sort(function (a, b) { return String(b.uploaded).localeCompare(String(a.uploaded)); })
        .forEach(function (v) { (v.height > v.width ? newTall : newWide).push({ vimeo: v.id }); });
    }
    items = [];
    $('[data-list="wide"]').innerHTML = newWide.concat(S.films, S.motion).map(card).join("");
    $('[data-list="tall"]').innerHTML = newTall.concat(S.vertical).map(card).join("");
  }

  /* Tap = play in place. Starting one stops the one that was playing. */
  var playing = null;
  function stop(frame) {
    if (!frame || !frame._saved) return;
    frame.innerHTML = frame._saved; frame._saved = null;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".v__start");
    if (!b) return;
    var frame = b.parentNode, it = items[+frame.getAttribute("data-i")];
    if (!it) return;
    if (playing && playing !== frame) stop(playing);
    frame._saved = frame.innerHTML;
    if (it.file) {
      frame.innerHTML = '<video src="' + esc(it.file) + '" controls autoplay playsinline' + (it.poster ? ' poster="' + esc(it.poster) + '"' : "") + '></video>';
    } else {
      frame.innerHTML = '<iframe src="https://player.vimeo.com/video/' + it.vimeo +
        '?autoplay=1&title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" title="Video"></iframe>';
    }
    playing = frame;
  });

  /* Live Vimeo list, so new public uploads appear without editing anything. */
  function refresh() {
    var base = "https://vimeo.com/api/v2/" + encodeURIComponent(S.vimeo.user) + "/videos.json?page=", changed = false;
    function page(n) {
      return fetch(base + n).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (rows) {
        if (!Array.isArray(rows)) return;
        rows.forEach(function (x) {
          var row = { id: x.id, title: x.title, duration: x.duration, width: x.width, height: x.height,
                      thumb: String(x.thumbnail_large || "").split("?")[0], uploaded: String(x.upload_date || "").slice(0, 10) };
          if (!byId.has(x.id)) changed = true;
          byId.set(x.id, row);
        });
        if (rows.length === 20 && n < 3) return page(n + 1);
      });
    }
    page(1).catch(function () {}).then(function () { if (changed && !playing) build(); });
  }

  $all("[data-ig-link]").forEach(function (a) { a.href = S.instagram.url; a.target = "_blank"; a.rel = "noopener"; });
  $all("[data-vimeo-link]").forEach(function (a) { a.href = S.vimeo.url; a.target = "_blank"; a.rel = "noopener"; });
  $all("[data-mail]").forEach(function (a) { a.href = "mailto:" + S.email; a.textContent = S.email; });

  build();
  refresh();
})();
