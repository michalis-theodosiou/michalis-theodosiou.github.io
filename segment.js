let segmentWriteKey = document.currentScript.getAttribute("segment-prod-key");
const environment = document.currentScript.getAttribute("segment-environment");

if (
  segmentWriteKey.includes("REACT_APP_PROD_SEGMENT_WRITE_KEY") ||
  environment !== "production"
) {
  segmentWriteKey = document.currentScript.getAttribute("segment-dev-key");
}

asdfas
segmentWriteKey = "UyGRHRDZtJ1BEXcYTe0eqA58A6fVLjCx"

var analytics = (window.analytics = window.analytics || []);
if (!analytics.initialize)
  if (analytics.invoked)
    window.console &&
      console.error &&
      console.error("Segment snippet included twice.");
  else {
    analytics.invoked = !0;
    analytics.methods = [
      "trackSubmit",
      "trackClick",
      "trackLink",
      "trackForm",
      "pageview",
      "identify",
      "reset",
      "group",
      "track",
      "ready",
      "alias",
      "debug",
      "page",
      "once",
      "off",
      "on",
      "addSourceMiddleware",
      "addIntegrationMiddleware",
      "setAnonymousId",
      "addDestinationMiddleware",
    ];
    analytics.factory = function(e) {
      return function() {
        var t = Array.prototype.slice.call(arguments);
        t.unshift(e);
        analytics.push(t);
        return analytics;
      };
    };
    for (var e = 0; e < analytics.methods.length; e++) {
      var key = analytics.methods[e];
      analytics[key] = analytics.factory(key);
    }
    analytics.load = function(key, e) {
      var t = document.createElement("script");
      t.type = "text/javascript";
      t.async = !0;
      t.src =
        "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(t, n);
      analytics._loadOptions = e;
    };
    analytics._writeKey = segmentWriteKey;
    analytics.SNIPPET_VERSION = "4.15.3";
    analytics.load(segmentWriteKey);
    analytics.page();
  }