(function(window, undefined) {
  var dictionary = {
    "71e79604-da22-4f05-bfb8-a2394bd5bdfc": "Email Registration",
    "36b26d79-4192-4067-a02c-4d56780678e5": "Login",
    "08cd6852-a858-4be1-911b-981ec2e355b6": "Confirm Order",
    "3a4d44c1-e18d-40df-8c7f-d559abd266b3": "Set Delivery Address",
    "4efd4e77-7c4d-4961-8e0c-8919c8bd3834": "Splash",
    "9dd873fe-cce0-40ca-bfa8-3854fad043f1": "Finish",
    "9f786f02-adde-4bc0-86c6-1c1b5c79b54d": "Order",
    "431899d3-94e9-4f8e-9862-f199e94b2f48": "Filter",
    "e7af7165-e3e7-4de0-adb5-97b6e366921d": "Payment",
    "79b21577-b9b1-4b12-8742-11a7dde1989f": "Explore restaurants",
    "4886a820-b74d-442c-91db-e115cc6b2e09": "Profile",
    "31760a73-2105-42cd-94cc-1ce379df7948": "Past Orders",
    "9503cea7-14fa-47cc-b5a4-20f9c6570dbc": "Promos",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);