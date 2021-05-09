jQuery("#simulation")
  .on("pageload", ".s-4efd4e77-7c4d-4961-8e0c-8919c8bd3834 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Loading" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "35.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "35.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 5000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/36b26d79-4192-4067-a02c-4d56780678e5",
                    "transition": {
                      "type": "pop",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_40" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("windowresize", ".s-4efd4e77-7c4d-4961-8e0c-8919c8bd3834 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-logo")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimWindowWidth"
                  },"375" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimWindowWidth"
                  },"813" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-logo" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "90"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Loading" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "270"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-logo" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "200"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Loading" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "500"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });