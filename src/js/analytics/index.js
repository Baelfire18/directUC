import browser from "webextension-polyfill";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const analytics = Analytics({
  app: "directUC",
  version: browser.runtime.getManifest().version,
  // debug: process.env.NODE_ENV === "development",
  plugins: [
    googleAnalytics({
      trackingId: "UA-62971405-1",
    }),
  ],
});

export default analytics;