export function AnalyticsScripts() {
  return (
    <>
      {/* Google Analytics 4 - Insert your GA4 Measurement ID below */}
      {/* Example: <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" /> */}
      {/* <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');`}
      </Script> */}

      {/* Microsoft Clarity - Insert your Clarity Project ID below */}
      {/* <Script id="clarity-init" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");`}
      </Script> */}
    </>
  );
}
