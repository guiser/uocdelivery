jQuery("#simulation")
  .on("click", ".s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_14",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_23 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_14" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_14",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_23 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_23 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_23 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_14",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_24 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_14" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_14",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_24 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_24 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_24 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_25")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_15",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_15",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_15",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_15",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_17",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_27 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_17",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_27 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_27 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_27 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_17",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_17" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_17",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_18",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_18",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_30")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_18",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_18" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_18",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_39")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_53",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_39 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_53" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_53" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_53" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_53",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_39 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_39 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_39 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_40")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_53",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_40 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_53" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_53" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_53" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_53",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_40 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_40 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_40 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_41")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_56",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_41 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_56" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_56" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_56" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_56",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_41 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_41 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_41 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_42")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_56",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_42 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_56" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_56" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_56" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_56",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_42 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_42 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_42 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_43")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_59",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_43 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_59",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_43 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_43 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_43 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_44")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_59",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_44 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_59",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_44 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_44 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_44 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_45")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_62",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_45 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_62" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_62" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_62" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_62",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_45 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_45 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_45 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_62",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_46 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_62" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_62" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_62" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_62",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_46 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_46 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_46 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_7",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_7",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_8",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_8",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_8",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_9",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_9",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_9",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_10",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_10",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_10",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_10",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_2",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_7 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_2",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_7 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_7 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_7 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_2",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_2",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_11",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_17 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_11",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_17 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_17 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_17 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_11",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_18 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_11",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_18 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_18 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_18 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_12",
                  "property": "jimGetValue"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_19 svg": {
                      "attributes": {
                        "overlay": "#141414"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "42"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_12",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_19 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_19 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_19 svg": {
                      "attributes": {
                        "overlay": "#2D2F2F"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Paragraph_12",
                  "property": "jimGetValue"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_20 svg": {
                      "attributes": {
                        "overlay": "#434343"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "26"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "34"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_12",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_20 svg": {
                      "attributes": {
                        "overlay": "#B7B7B7"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_20 svg": {
                      "attributes": {
                        "overlay": "#FFE07D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d #s-Image_20 svg": {
                      "attributes": {
                        "overlay": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7af7165-e3e7-4de0-adb5-97b6e366921d",
                    "transition": {
                      "type": "pop",
                      "duration": 700
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
    } else if(jFirer.is("#s-Paragraph_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "linear",
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 300
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/79b21577-b9b1-4b12-8742-11a7dde1989f"
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
  .on("pageload", ".s-9f786f02-adde-4bc0-86c6-1c1b5c79b54d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_40")) {
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
  });