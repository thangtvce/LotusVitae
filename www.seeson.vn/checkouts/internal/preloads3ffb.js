
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/polyfills-legacy.DlQyKcmX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/app-legacy.CELv_c6g.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/OnePage-legacy.CnVG9SQ7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/DeliveryMethodSelectorSection-legacy.si3U0r4B.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/useUnauthenticatedErrorModal-legacy.Bp0DForv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/LegacyVaultedShippingMethods-legacy.CjiDPtHO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/Rollup-legacy.DhONrKFt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/SubscriptionPriceBreakdown-legacy.Dcjmoj8h.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/MarketsProDisclaimer-legacy.D_NQksWT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/ShopPayLogo-legacy.D1DmO4I9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/index-legacy.C6_mdY2r.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/PickupPointCarrierLogo-legacy.D89EOSMA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/hooks-legacy.Dn6JmHbS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/VaultedPayment-legacy.DRuytCP6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/useShowShopPayOptin-legacy.DgrbS1rW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/useShopPayRequiresVerification-legacy.C3zFIapB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/Section-legacy.CNs5ynqs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/useGooglePaySdk-legacy.CssQ9808.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/ShopPayLoginLoader-legacy.qzn8l4ko.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/publishMessage-legacy.B9zse2Ru.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/PayButtonSection-legacy.B4FpJJDq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/RageClickCapture-legacy.CKZRajSF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/context-legacy.xT8o3Lae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/DutyOptions-legacy.CyBVXuXS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/useAmazonContact-legacy.Bd4MMWQC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/StockProblemsLineItemList-legacy.B-0S6Var.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/component-ShopPayVerificationSwitch-legacy.q3bMlSjx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.vi/index-legacy.B_lW8om7.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  