(function () {
  var options = {
    whatsapp: "+52(314)118-47-10", // WhatsApp number
    call_to_action: "Contacta con nosotros", // Call to action
    position: "right", // Position may be 'right' or 'left'
  };
  var proto = document.location.protocol,
    host = "getbutton.io",
    url = proto + "//static." + host;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();
