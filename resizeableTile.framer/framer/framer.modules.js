require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BlueButton":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.BlueButton = (function(superClass) {
  extend(BlueButton, superClass);

  function BlueButton(options) {
    var base, base1, base2, base3, buttonClass, buttonWidth, css;
    this.options = options != null ? options : {};
    if ((base = this.options).outlineStyle == null) {
      base.outlineStyle = false;
    }
    if ((base1 = this.options).buttonText == null) {
      base1.buttonText = "This is a button";
    }
    if ((base2 = this.options).pageMargin == null) {
      base2.pageMargin = dpr(24);
    }
    if ((base3 = this.options).fullWidth == null) {
      base3.fullWidth = false;
    }
    BlueButton.__super__.constructor.call(this, this.options);
    this.backgroundColor = "transparent";
    if (!this.options.outlineStyle) {
      buttonClass = "<div class='blue'>" + this.options.buttonText + "</div>";
    } else {
      buttonClass = "<div class='outline'>" + this.options.buttonText + "</div>";
    }
    if (this.options.fullWidth) {
      buttonWidth = this.width;
    } else {
      buttonWidth = this.width - (this.options.pageMargin * 2);
    }
    css = ".buttonContainer {\n	font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif, 'Open Sans', sans-serif;\n	font-size:" + (dpr(16)) + "px;\n	line-height:" + (dpr(16)) + "px;\n	font-weight:400;\n	text-transform: uppercase;\n}\n\n.blue {\n	width: " + buttonWidth + "px;\n	background-color: #3399cc;\n	padding-top:" + (dpr(22)) + "px;\n	padding-bottom: " + (dpr(20)) + "px;\n	text-align:center;\n	border-radius:" + (dpr(3)) + "px;\n}\n\n.outline {\n	width: " + buttonWidth + "px;\n	margin-left:" + this.options.pageMargin + "px;\n	border: " + (dpr(1)) + "px solid #3399cc;\n	border-radius: " + (dpr(2)) + "px;\n	background-color: #FFFFFF;\n	color:#3399cc;\n	padding-top:" + (dpr(17)) + "px;\n	padding-bottom: " + (dpr(15)) + "px;\n	text-align:center;\n	border-radius:" + (dpr(3)) + "px;\n}";
    Utils.insertCSS(css);
    this.html = "<div class='buttonContainer'> " + buttonClass + " </div>";
    this.size = Utils.textSize(this.html);
  }

  BlueButton.define('outlineStyle', {
    get: function() {
      return this.options.outlineStyle;
    },
    set: function(value) {
      return this.options.outlineStyle = value;
    }
  });

  BlueButton.define('buttonText', {
    get: function() {
      return this.options.buttonText;
    },
    set: function(value) {
      return this.options.buttonText = value;
    }
  });

  BlueButton.define('fullWidth', {
    get: function() {
      return this.options.fullWidth;
    },
    set: function(value) {
      return this.options.fullWidth = value;
    }
  });

  BlueButton.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return BlueButton;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"BurgerMenu":[function(require,module,exports){
var IconButton, dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

IconButton = require('IconButton').IconButton;

exports.BurgerMenu = (function(superClass) {
  extend(BurgerMenu, superClass);

  Events.closeClicked = "BurgerMenu.closeClicked";

  Events.itemClicked = "BurgerMenu.itemClicked";

  Events.meineTermineClicked = "BurgerMenu.meineTermineClicked";

  Events.profileNavClicked = "BurgerMenu.profileNavClicked";

  Events.chatNavClicked = "BurgerMenu.chatNavClicked";

  function BurgerMenu(options) {
    var base, base1, base2, base3, burgerLinkItem, burgerScroller, chatNav, closeButton, css, defaultblue, item, lightblue, meineTermineItem, menuItemY, menuitemContainer, profileNav, ref, value;
    this.options = options != null ? options : {};
    if ((base = this.options).topics == null) {
      base.topics = "";
    }
    if ((base1 = this.options).name == null) {
      base1.name = "burgerMenuContainer";
    }
    if ((base2 = this.options).pageMargin == null) {
      base2.pageMargin = dpr(24);
    }
    if ((base3 = this.options).clickedItemData == null) {
      base3.clickedItemData = "";
    }
    BurgerMenu.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#F3F3F3";
    this.name = this.options.name;
    this.propogateEvents = false;
    defaultblue = "#3399CC";
    lightblue = "#8DCEE5";
    css = "\n\n\n	.burgerLinkItem {\n		font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n		padding-top:" + (dpr(15)) + "px;\n		padding-bottom:" + (dpr(12)) + "px;\n		border-width: 1px 0 0 0;\n		border-color: #aaa;\n		letter-spacing:" + (dpr(1)) + "px;\n		border-style: solid;\n		background-color: #FFF;\n		width:" + this.width + "px;\n\n}\n\n	.burgerLinkTitle {\n		font-size: " + (dpr(16)) + "px;\n		color: " + defaultblue + ";\n		font-weight: 200;\n		line-height: " + (dpr(22)) + "px;\n		text-transform: uppercase;\n		width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n		margin-left:" + this.options.pageMargin + "px;\n\n	}";
    Utils.insertCSS(css);
    burgerScroller = new ScrollComponent({
      size: Screen.size,
      name: "burgerScroller",
      backgroundColor: "white",
      parent: this,
      scrollHorizontal: false
    });
    burgerScroller.content.draggable.overdrag = false;
    closeButton = new IconButton({
      icon: "closeBlue",
      name: "BurgerCloseButton",
      x: this.options.pageMargin,
      y: dpr(44),
      parent: this
    });
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    ({
      checkIfScrollingIsNecessary: function() {
        var ref;
        if ((Framer.Device.screen.height <= (ref = burgerScroller.content.maxY) && ref < device.frame.maxY)) {
          return burgerScroller.scrollVertical = false;
        }
      }
    });
    menuItemY = 0;
    menuitemContainer = new Layer({
      name: "MenuItemContainer",
      width: this.width,
      parent: burgerScroller.content
    });
    meineTermineItem = new Layer({
      name: "meineTermine",
      parent: menuitemContainer,
      width: this.width,
      y: menuItemY,
      color: defaultblue,
      backgroundColor: "transparent",
      html: "<div class='burgerLinkItem'><div class='burgerLinkTitle'>Meine Termine</div></div>"
    });
    meineTermineItem.height = Utils.textSize(meineTermineItem.html).height;
    menuitemContainer.height = menuitemContainer.height + meineTermineItem.height;
    menuItemY = menuItemY + meineTermineItem.height;
    meineTermineItem.on(Events.Click, (function(_this) {
      return function() {
        return _this.emit(Events.meineTermineClicked);
      };
    })(this));
    ref = this.options.topics;
    for (item in ref) {
      value = ref[item];
      burgerLinkItem = new Layer({
        name: value.title.replace(/\s+/g, ''),
        parent: menuitemContainer,
        width: this.width,
        y: menuItemY,
        color: defaultblue,
        backgroundColor: "transparent",
        html: "<div class='burgerLinkItem'><div class='burgerLinkTitle'>" + value.title + "</div></div>"
      });
      burgerLinkItem.data = value;
      burgerLinkItem.on(Events.Click, (function(_this) {
        return function(events, layer) {
          var d;
          d = layer.data;
          return _this.emit(Events.itemClicked, d);
        };
      })(this));
      burgerLinkItem.height = Utils.textSize(burgerLinkItem.html).height;
      menuItemY = menuItemY + burgerLinkItem.height;
      menuitemContainer.height = burgerLinkItem.maxY;
    }
    chatNav = new Layer({
      name: "chatNav",
      parent: menuitemContainer,
      width: this.width,
      y: menuItemY,
      color: defaultblue,
      backgroundColor: "transparent",
      html: "<div class='burgerLinkItem'><div class='burgerLinkTitle'>Chat</div></div>"
    });
    chatNav.height = Utils.textSize(chatNav.html).height;
    menuItemY = menuItemY + chatNav.height;
    chatNav.on(Events.Click, (function(_this) {
      return function() {
        return _this.emit(Events.chatNavClicked);
      };
    })(this));
    profileNav = new Layer({
      name: "profileNav",
      parent: menuitemContainer,
      width: this.width,
      y: menuItemY,
      color: defaultblue,
      backgroundColor: "transparent",
      html: "<div class='burgerLinkItem'><div class='burgerLinkTitle'>Mein Profil</div></div>"
    });
    profileNav.height = Utils.textSize(profileNav.html).height;
    menuitemContainer.height = profileNav.maxY;
    profileNav.on(Events.Click, (function(_this) {
      return function() {
        return _this.emit(Events.profileNavClicked);
      };
    })(this));
    menuitemContainer.y = Align.center(dpr(30));
  }

  BurgerMenu.define('topics', {
    get: function() {
      if (this.options.topics === "") {
        return console.error("no topics were defined for the menu");
      } else {
        return this.options.topics;
      }
    },
    set: function(value) {
      return this.options.topics = value;
    }
  });

  BurgerMenu.define('name', {
    get: function() {
      return this.options.name;
    },
    set: function(value) {
      return this.options.name = value;
    }
  });

  BurgerMenu.define('viewPadding', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  BurgerMenu.define('clickedItemData', {
    get: function() {
      return this.options.clickedItemData;
    },
    set: function(value) {
      return this.options.clickedItemData = value;
    }
  });

  return BurgerMenu;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","IconButton":"IconButton"}],"Button":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.Button = (function(superClass) {
  extend(Button, superClass);

  function Button(options) {
    var base, base1, base2, base3, base4, style;
    this.options = options != null ? options : {};
    if ((base = this.options).type == null) {
      base.type = "blue";
    }
    if ((base1 = this.options).buttonText == null) {
      base1.buttonText = "This is a button";
    }
    if ((base2 = this.options).pageMargin == null) {
      base2.pageMargin = dpr(24);
    }
    if ((base3 = this.options).fullWidth == null) {
      base3.fullWidth = false;
    }
    if ((base4 = this.options).outlineStyle == null) {
      base4.outlineStyle = false;
    }
    Button.__super__.constructor.call(this, this.options);
    this.font = "500 " + (dpr(16)) + "px/" + (dpr(16)) + "px FrutigerLTStd-Roman, -apple-system";
    this.letterSpacing = dpr(1);
    this.textTransform = "uppercase";
    this.textAlign = 'center';
    this.borderRadius = dpr(3);
    this.height = this.setHeights().height;
    this.width = this.setWidth();
    this.padding = {
      top: this.setHeights().topPadding,
      bottom: this.setHeights().bottomPadding,
      left: dpr(16),
      right: dpr(16)
    };
    this.x = Align.center();
    console.log("heightObjects", this.setHeights());
    style = (function() {
      switch (false) {
        case this.options.type !== "blue":
          this.backgroundColor = "#3399CC";
          return this.style = {
            "color": "white"
          };
        case this.options.type !== "white":
          this.backgroundColor = "white";
          return this.style = {
            "color": "#3399CC"
          };
        case this.options.type !== "outlineBlue":
          this.backgroundColor = "white";
          this.style = {
            "color": "#3399CC"
          };
          this.borderColor = "#3399CC";
          return this.borderWidth = dpr(1);
        case this.options.type !== "outlineGrey":
          this.backgroundColor = "Transparent";
          this.style = {
            "color": "#555555"
          };
          this.borderColor = "#555555";
          return this.borderWidth = dpr(1);
        case this.options.type !== "outlineWhite":
          this.backgroundColor = "Transparent";
          this.style = {
            "color": "white"
          };
          this.borderColor = "white";
          return this.borderWidth = dpr(1);
        default:
          console.error("unsupported button style - use blue, fullblue, outlineBlue, or outlineGrey");
          this.backgroundColor = "#3399CC";
          return this.style = {
            "color": "white"
          };
      }
    }).call(this);
  }

  Button.prototype.setWidth = function() {
    if (this.options.fullWidth) {
      return Screen.width;
    } else {
      return Screen.width - (this.options.pageMargin * 2);
    }
  };

  Button.prototype.setBorderOffset = function() {
    if (this.options.type === "outlineBlue" || this.options.type === "outlineGrey") {
      return dpr(1);
    } else {
      return 0;
    }
  };

  Button.prototype.setWidth = function() {
    if (this.options.fullWidth) {
      return Screen.width;
    } else {
      return Screen.width - (this.options.pageMargin * 2);
    }
  };

  Button.prototype.setHeights = function() {
    if (this.options.fullWidth) {
      return {
        topPadding: dpr(21 - this.setBorderOffset()),
        bottomPadding: dpr(20),
        height: dpr(54)
      };
    } else {
      return {
        topPadding: dpr(18 - this.setBorderOffset()),
        bottomPadding: dpr(14),
        height: dpr(48)
      };
    }
  };

  Button.define('type', {
    get: function() {
      return this.options.type;
    },
    set: function(value) {
      return this.options.type = value;
    }
  });

  Button.define('fullWidth', {
    get: function() {
      return this.options.fullWidth;
    },
    set: function(value) {
      return this.options.fullWidth = value;
    }
  });

  Button.define('outlineStyle', {
    get: function() {
      return this.options.outlineStyle;
    },
    set: function(value) {
      return this.options.outlineStyle = value;
    }
  });

  Button.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return Button;

})(TextLayer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"CoverTile_Event":[function(require,module,exports){
var accounting, dpr, moment, npm, openinghours,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

accounting = npm.accounting;

openinghours = require('data_openinghours').openinghours;

exports.EventCoverTile = (function(superClass) {
  extend(EventCoverTile, superClass);

  function EventCoverTile(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, css, displayTime, event, gradientMask, image, itemTitle, locIcon, newNow, priceOrLoc, textPanel, tileImage, timeIcon, timeText;
    this.options = options != null ? options : {};
    if ((base = this.options).event == null) {
      base.event = "";
    }
    if ((base1 = this.options).testDate == null) {
      base1.testDate = moment("05/03/2017 5:30");
    }
    if ((base2 = this.options).textPanel == null) {
      base2.textPanel = "";
    }
    if ((base3 = this.options).pageMargin == null) {
      base3.pageMargin = dpr(24);
    }
    if ((base4 = this.options).card == null) {
      base4.card = "";
    }
    if ((base5 = this.options).CTASpace == null) {
      base5.CTASpace = false;
    }
    if ((base6 = this.options).featureHeight == null) {
      base6.featureHeight = dpr(300);
    }
    if ((base7 = this.options).compactHeight == null) {
      base7.compactHeight = dpr(100);
    }
    EventCoverTile.__super__.constructor.call(this, this.options);
    console.group("Event Tile Constructor");
    console.log("Event:", this.options.event);
    console.log("Event Image:", this.options.event.images[0]);
    console.log("Test Date:", this.options.testDate);
    console.groupEnd();
    this.clip = true;
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = ".venueTextPanelContainer {\n	font-family:FrutigerLTStd-Roman, 'Open Sans', serif;\n	width:" + (this.width - (this.options.pageMargin * 2)) + "px;\n	color:#FFF;\n	margin-left:" + this.options.pageMargin + "px;\n	background-color:#EECC33;\n\n}\n.title {\n	font-size: " + (dpr(32)) + "px;\n	color: #FFF;\n	font-weight: 700;\n	line-height: " + (dpr(32)) + "px;\n	text-transform: uppercase;\n	padding-top:" + (dpr(8)) + "px;\n	letter-spacing: " + (dpr(-0.5)) + "px;\n	hyphens:manual;\n}\n\n.tagline {\n	font-family:FrutigerLTStd-Light, 'Open Sans', serif;\n	width:" + (this.width - (this.options.pageMargin * 2)) + "px;\n	font-size:" + (dpr(18)) + "px;\n	color:#FFF;\n	font-weight:100;\n	line-height: " + (dpr(24)) + "px;\n	margin-bottom:" + ((this.options.pageMargin / 2) - dpr(6)) + "px;\n}\n\n.helpText {\n	font-family:FrutigerLTStd-Light, 'Open Sans', serif;\n	width:" + (this.width - (this.options.pageMargin * 2)) + "px;\n	font-size:" + (dpr(12)) + "px;\n	color:#FFF;\n	font-weight:100;\n	line-height: " + (dpr(16)) + "px;\n	margin-bottom:" + (this.options.pageMargin / 2) + "px;\n	padding-top:" + (this.options.pageMargin / 2) + "px;\n	text-transform: uppercase;\n	background-image: url('modules/moduleImages/interface/gr_dotted_line.svg');\n	background-repeat:repeat-x;\n	background-size: " + (dpr(325)) + "px " + (dpr(2)) + "px;\n	background-position:top;\n}\n\n\n.openingTime {\n	font-size: " + (dpr(14)) + "px;\n	color: #FFF;\n	line-height: " + (dpr(14)) + "px;\n	background-image: url('modules/moduleImages/interface/icn_openingHours.svg');\n	background-repeat:no-repeat;\n	background-size:	" + (dpr(14)) + "px; " + (dpr(14)) + "px;\n	background-position:0px " + (dpr(8)) + "px;\n	padding-left:" + (dpr(20)) + "px;\n	padding-top:" + (dpr(10)) + "px;\n	text-transform: uppercase;\n}\n";
    Utils.insertCSS(css);

    /* INTERNAL VARAIBLES */
    tileImage = this.options.event.images[0];
    event = this.options.event;
    moment.locale('de');
    newNow = moment(this.options.testDate);
    moment.now = function() {
      return newNow;
    };
    displayTime = this.determineDisplayTime(this.getEventTimes(this.options.event, moment()));

    /* LAYER SETUP */
    image = new Layer({
      size: this.size,
      image: tileImage,
      parent: this,
      name: event.title
    });
    gradientMask = new Layer({
      name: event.title + " imageGradientMask",
      width: this.width,
      height: this.height,
      parent: this
    });
    gradientMask.style.background = "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)";
    textPanel = new Layer({
      name: "timeContainer",
      parent: this,
      width: this.width - (this.options.pageMargin * 2),
      x: this.options.pageMargin,
      backgroundColor: "Transparent"
    });
    timeIcon = new Layer({
      width: dpr(14),
      height: dpr(14),
      backgroundColor: "transparent",
      image: "modules/moduleImages/interface/icn_openingHours.svg",
      parent: textPanel
    });
    timeText = new TextLayer({
      font: "200 " + (dpr(14)) + "px/" + (dpr(14)) + "px FrutigerLTStd-Roman, -apple-system",
      text: displayTime,
      backgroundColor: "transparent",
      textTransform: "uppercase",
      style: {
        "color": "white"
      },
      parent: textPanel,
      padding: {
        top: dpr(2),
        left: dpr(6)
      },
      x: timeIcon.maxX,
      width: textPanel.width - timeIcon.maxX
    });
    timeText.originalWidth = timeText.width;
    itemTitle = new TextLayer({
      font: "700 " + (dpr(32)) + "px/" + (dpr(32)) + "px FrutigerLTStd-Roman, -apple-system",
      text: event.title,
      backgroundColor: "transparent",
      textTransform: "uppercase",
      style: {
        "color": "white",
        "hyphens": "manual"
      },
      parent: textPanel,
      padding: {
        top: dpr(8)
      },
      width: textPanel.width,
      y: timeText.maxY
    });
    itemTitle.originalHeight = itemTitle.height;
    if (this.options.event.prices.length > 0) {
      priceOrLoc = new TextLayer({
        name: event.title + "_prices",
        backgroundColor: "transparent",
        padding: {
          top: this.options.pageMargin / 2,
          bottom: this.options.pageMargin / 2
        },
        parent: textPanel,
        font: "500 " + (dpr(16)) + "px/" + (dpr(16)) + "px FrutigerLTStd-Roman, -apple-system",
        textTransform: "uppercase",
        width: textPanel.width,
        text: this.checkPrice(event.prices),
        style: {
          "color": "#8DCEE5",
          "background-image": "url('modules/moduleImages/interface/gr_dotted_line.svg')",
          "background-repeat": "repeat-x",
          "background-size": (dpr(325)) + "px " + (dpr(2)) + "px",
          "background-position": "top"
        },
        y: itemTitle.maxY
      });
    } else {
      priceOrLoc = new Layer({
        name: event.title + "_location",
        width: textPanel.width
      }, locIcon = new Layer({
        width: dpr(14),
        height: dpr(14),
        backgroundColor: "transparent",
        image: "modules/moduleImages/interface/icn_openingHours.svg",
        parent: textPanel
      }), timeText = new TextLayer({
        font: "200 " + (dpr(14)) + "px/" + (dpr(14)) + "px FrutigerLTStd-Roman, -apple-system",
        text: displayTime,
        backgroundColor: "transparent",
        textTransform: "uppercase",
        style: {
          "color": "white"
        },
        parent: textPanel,
        padding: {
          top: dpr(2),
          left: dpr(6)
        },
        x: timeIcon.maxX,
        width: textPanel.width - timeIcon.maxX
      }), timeText.originalWidth = timeText.width);
    }
    textPanel.height = priceText.maxY;
    textPanel.y = Align.bottom();
    itemTitle.maxY = priceText.y;
    this.options.card = {
      image: image,
      textPanel: textPanel,
      timeIcon: timeIcon,
      timeText: timeText,
      itemTitle: itemTitle,
      priceOrLoc: priceOrLoc,
      gradient: gradientMask
    };
    console.log("CoverTileVenue Object:", this.options.card);
    this.updateContentPositions();
    this.on("change:size", (function(_this) {
      return function() {
        return _this.updateContentPositions();
      };
    })(this));
  }

  EventCoverTile.prototype.updateContentPositions = function() {
    var compactHeight, featuredHeight, headlineFontSize, heightPercentOfTransition, icon, maxHeadlineSize, maxTextPanelWidth, maxTimeTitleSize, maxWidth, minHeadlineSize, minTextPanelWidth, minTimeTitleSize, minWidth, newBottomAlign, newOpacity, priceOrLoc, textPaneWidthPercentOfMax, textPanel, textPanelBottomHeight, textPanelWidth, time, timeTextFontSize, title, titleTopPadding, transitionMark, widthPercentOfMax;
    console.groupCollapsed("Cover tile update positions");
    this.options.card.gradient.size = this.size;
    this.options.card.image.size = this.size;
    textPanel = this.options.card.textPanel;
    icon = this.options.card.timeIcon;
    time = this.options.card.timeText;
    title = this.options.card.itemTitle;
    priceOrLoc = this.options.card.priceOrLoc;
    featuredHeight = this.options.featureHeight;
    compactHeight = this.options.compactHeight;
    transitionMark = featuredHeight - compactHeight;
    maxWidth = Screen.width;
    minWidth = dpr(214);
    maxTextPanelWidth = maxWidth - (this.options.pageMargin * 2);
    minTextPanelWidth = minWidth - this.options.pageMargin;
    maxHeadlineSize = dpr(32);
    minHeadlineSize = dpr(18);
    maxTimeTitleSize = dpr(14);
    minTimeTitleSize = dpr(12);
    widthPercentOfMax = Utils.modulate(this.width, [maxWidth, minWidth], [1, 0]);
    heightPercentOfTransition = Utils.modulate(this.height, [featuredHeight, transitionMark], [1, 0], true);
    textPanelWidth = Utils.modulate(this.width, [minWidth, maxWidth], [minTextPanelWidth, maxTextPanelWidth]);
    textPaneWidthPercentOfMax = Utils.modulate(textPanelWidth, [maxTextPanelWidth, minTextPanelWidth], [1, 0]);
    headlineFontSize = Utils.modulate(widthPercentOfMax, [0, 1], [minHeadlineSize, maxHeadlineSize], true);
    timeTextFontSize = Utils.modulate(widthPercentOfMax, [0, 1], [minTimeTitleSize, maxTimeTitleSize], true);
    textPanel.width = textPanelWidth;
    textPanel.centerX();
    title.width = textPanelWidth;
    time.width = textPanelWidth - icon.maxX;
    priceOrLoc.width = textPanelWidth;
    title.font = "700 " + headlineFontSize + "px/" + headlineFontSize + "px FrutigerLTStd-Roman, -apple-system";
    time.font = "200 " + timeTextFontSize + "px/" + timeTextFontSize + "px FrutigerLTStd-Roman, -apple-system";
    titleTopPadding = headlineFontSize / 4;
    title.style = {
      "padding-top": titleTopPadding + "px"
    };
    title.y = time.maxY;
    priceOrLoc.y = title.maxY;
    textPanel.height = priceOrLoc.maxY;
    textPanelBottomHeight = priceOrLoc.height - (textPanel.x / 2);
    newBottomAlign = Utils.modulate(heightPercentOfTransition, [.5, 1], [textPanelBottomHeight, 0], true);
    newOpacity = Utils.modulate(heightPercentOfTransition, [.5, 1], [0, 1], true);
    textPanel.y = Align.bottom(newBottomAlign);
    priceOrLoc.opacity = newOpacity;
    console.log("modulated percent between max and min width:", widthPercentOfMax);
    console.log("modulated percent between featured and compact height:", heightPercentOfTransition);
    console.log("modulated text panel width:", textPaneWidthPercentOfMax);
    console.log("modulated headline size:", headlineFontSize);
    console.log("card object", this.options.card);
    return console.groupEnd();
  };

  EventCoverTile.prototype.checkPrice = function(pricelist) {
    var bottom, currencyOptions, newList, top;
    currencyOptions = {
      symbol: "€",
      decimal: ",",
      thousand: ".",
      precision: 2,
      format: "%v %s"
    };
    console.groupCollapsed("Check Price");
    console.log("price list passed", pricelist);
    newList = pricelist.sort(function(a, b) {
      return a.price - b.price;
    });
    top = accounting.formatMoney(newList[newList.length - 1].price, currencyOptions);
    bottom = accounting.formatMoney(newList[0].price, currencyOptions);
    return bottom + " - " + top;
  };

  EventCoverTile.prototype.getEventTimes = function(event, day) {
    var eventTimes, hoursObject, sentDay;
    sentDay = day;
    console.group("Get Event Times");
    console.log("Event sent:", event);
    eventTimes = event.times;
    console.log("Event Times: ", eventTimes);
    hoursObject = eventTimes.find((function(_this) {
      return function(day) {
        return moment(day.date).isSame(sentDay, 'day');
      };
    })(this));
    if (hoursObject) {
      console.log("Current Hours", hoursObject);
      console.groupEnd();
      return hoursObject;
    } else {
      console.log("No hours for passed date");
      console.groupEnd();
      return null;
    }
  };

  EventCoverTile.prototype.determineDisplayTime = function(hours) {
    console.group("Determine Display Time");
    if (hours) {
      console.log("Event has hours, passed object:", hours);
      if (hours.times.length >= 1 && hours.times[0].close) {
        console.groupEnd();
        return this.lookupOpen(hours.times);
      } else {
        console.groupEnd();
        if (moment().isAfter(moment(hours.times[0].open, "HH:mm"))) {
          return "Jetzt";
        } else {
          return "Heute ab " + hours.times[0].open;
        }
      }
    } else {
      console.log("Event has no hours");
      console.groupEnd();
      return "";
    }
  };

  EventCoverTile.prototype.lookupOpen = function(times) {
    var curOpenTime, displayText, i, isOpen, lastOpenTime, len, openText, time;
    console.group("Look up next event times");
    console.log("Times passed in:", times);
    openText = "";
    console.log("All times for day:", times);
    lastOpenTime = times[times.length - 1].close;
    console.log("Last Open Time:", lastOpenTime);
    console.log("Test Time:", moment().format('LLLL'));
    curOpenTime = times.find((function(_this) {
      return function(time) {
        return moment().isBetween(moment(time.open, 'HH:mm'), moment(time.close, 'HH:mm'));
      };
    })(this));
    console.log("Opening time search result:", curOpenTime);
    if (curOpenTime) {
      console.log("Happening now until", curOpenTime.close);
      console.groupEnd();
      displayText = "Jetzt bis " + curOpenTime.close;
      isOpen = true;
      return displayText;
    } else {
      for (i = 0, len = times.length; i < len; i++) {
        time = times[i];
        if (moment().isBefore(moment(time.open, "HH:mm"))) {
          console.log("Closed - opens at", time.open);
          console.groupEnd();
          openText = "Heute von " + time.open + " bis " + time.close;
          isOpen = false;
          return openText;
        } else {
          console.log("outside open hours");
          console.groupEnd();
        }
      }
    }
  };

  EventCoverTile.define('CTASpace', {
    get: function() {
      return this.options.CTASpace;
    },
    set: function(value) {
      return this.options.CTASpace = value;
    }
  });

  EventCoverTile.define('featureHeight', {
    get: function() {
      return this.options.featureHeight;
    },
    set: function(value) {
      return this.options.featureHeight = value;
    }
  });

  EventCoverTile.define('compactHeight', {
    get: function() {
      return this.options.compactHeight;
    },
    set: function(value) {
      return this.options.compactHeight = value;
    }
  });

  EventCoverTile.define('event', {
    get: function() {
      if (this.options.event === "") {
        return console.error("No event defined for event tile");
      } else {
        return this.options.event;
      }
    },
    set: function(value) {
      return this.options.event = value;
    }
  });

  EventCoverTile.define('card', {
    get: function() {
      if (this.options.card === "") {
        return console.error("Error creating card");
      } else {
        return this.options.card;
      }
    },
    set: function(value) {
      return this.options.card = value;
    }
  });

  EventCoverTile.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  EventCoverTile.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return EventCoverTile;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","data_openinghours":"data_openinghours","npm":"npm"}],"CoverTile_Venue":[function(require,module,exports){
var dpr, moment, npm, openinghours,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

openinghours = require('data_openinghours').openinghours;

exports.VenueCoverTile = (function(superClass) {
  extend(VenueCoverTile, superClass);

  function VenueCoverTile(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, css, gradientMask, helpTextPanel, image, itemTitle, newNow, openHoursToday, subTitlePanel, textPanel, tileImage, timeIcon, timeText, venue, venueOpeningMessage;
    this.options = options != null ? options : {};
    if ((base = this.options).venue == null) {
      base.venue = "";
    }
    if ((base1 = this.options).testDate == null) {
      base1.testDate = moment("05/03/2017 5:30");
    }
    if ((base2 = this.options).textPanel == null) {
      base2.textPanel = "";
    }
    if ((base3 = this.options).pageMargin == null) {
      base3.pageMargin = dpr(24);
    }
    if ((base4 = this.options).card == null) {
      base4.card = "";
    }
    if ((base5 = this.options).CTASpace == null) {
      base5.CTASpace = false;
    }
    if ((base6 = this.options).featureHeight == null) {
      base6.featureHeight = dpr(300);
    }
    if ((base7 = this.options).compactHeight == null) {
      base7.compactHeight = dpr(100);
    }
    VenueCoverTile.__super__.constructor.call(this, this.options);
    console.group("Venue Tile Constructor");
    console.log("Venue:", this.options.venue);
    console.log("Test Date:", this.options.testDate);
    console.groupEnd();
    this.clip = true;
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = ".venueTextPanelContainer {\n	font-family:FrutigerLTStd-Roman, 'Open Sans', serif;\n	width:" + (this.width - (this.options.pageMargin * 2)) + "px;\n	color:#FFF;\n	margin-left:" + this.options.pageMargin + "px;\n	background-color:#EECC33;\n\n}\n.title {\n	font-size: " + (dpr(32)) + "px;\n	color: #FFF;\n	font-weight: 700;\n	line-height: " + (dpr(32)) + "px;\n	text-transform: uppercase;\n	padding-top:" + (dpr(8)) + "px;\n	letter-spacing: " + (dpr(-0.5)) + "px;\n	hyphens:manual;\n}\n\n.tagline {\n	font-family:FrutigerLTStd-Light, 'Open Sans', serif;\n	width:" + (this.width - (this.options.pageMargin * 2)) + "px;\n	font-size:" + (dpr(18)) + "px;\n	color:#FFF;\n	font-weight:100;\n	line-height: " + (dpr(24)) + "px;\n	margin-bottom:" + ((this.options.pageMargin / 2) - dpr(6)) + "px;\n}\n\n.helpText {\n	font-family:FrutigerLTStd-Light, 'Open Sans', serif;\n	width:" + (this.width - (this.options.pageMargin * 2)) + "px;\n	font-size:" + (dpr(12)) + "px;\n	color:#FFF;\n	font-weight:100;\n	line-height: " + (dpr(16)) + "px;\n	margin-bottom:" + (this.options.pageMargin / 2) + "px;\n	padding-top:" + (this.options.pageMargin / 2) + "px;\n	text-transform: uppercase;\n	background-image: url('modules/moduleImages/interface/gr_dotted_line.svg');\n	background-repeat:repeat-x;\n	background-size: " + (dpr(325)) + "px " + (dpr(2)) + "px;\n	background-position:top;\n}\n\n\n.openingTime {\n	font-size: " + (dpr(14)) + "px;\n	color: #FFF;\n	line-height: " + (dpr(14)) + "px;\n	background-image: url('modules/moduleImages/interface/icn_openingHours.svg');\n	background-repeat:no-repeat;\n	background-size:	" + (dpr(14)) + "px; " + (dpr(14)) + "px;\n	background-position:0px " + (dpr(8)) + "px;\n	padding-left:" + (dpr(20)) + "px;\n	padding-top:" + (dpr(10)) + "px;\n	text-transform: uppercase;\n}\n";
    Utils.insertCSS(css);

    /* INTERNAL VARAIBLES */
    tileImage = this.options.venue.coverImage;
    venue = this.options.venue;
    moment.locale('de');
    newNow = moment(this.options.testDate);
    moment.now = function() {
      return newNow;
    };
    openHoursToday = this.getOpenHours(this.options.venue, moment());
    venueOpeningMessage = this.lookupOpen(openHoursToday).openText;

    /* LAYER SETUP */
    image = new Layer({
      size: this.size,
      image: tileImage,
      parent: this,
      name: venue.tile
    });
    gradientMask = new Layer({
      name: venue.name + " imageGradientMask",
      width: this.width,
      height: this.height,
      parent: this
    });
    gradientMask.style.background = "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)";
    textPanel = new Layer({
      name: "timeContainer",
      parent: this,
      width: this.width - (this.options.pageMargin * 2),
      x: this.options.pageMargin,
      backgroundColor: "Transparent"
    });
    timeIcon = new Layer({
      width: dpr(14),
      height: dpr(14),
      backgroundColor: "transparent",
      image: "modules/moduleImages/interface/icn_openingHours.svg",
      parent: textPanel
    });
    timeText = new TextLayer({
      font: "200 " + (dpr(14)) + "px/" + (dpr(14)) + "px FrutigerLTStd-Roman, -apple-system",
      text: venueOpeningMessage,
      backgroundColor: "transparent",
      textTransform: "uppercase",
      style: {
        "color": "white"
      },
      parent: textPanel,
      padding: {
        top: dpr(2),
        left: dpr(6)
      },
      x: timeIcon.maxX,
      width: textPanel.width - timeIcon.maxX
    });
    timeText.originalWidth = timeText.width;
    itemTitle = new TextLayer({
      font: "700 " + (dpr(32)) + "px/" + (dpr(32)) + "px FrutigerLTStd-Roman, -apple-system",
      text: venue.name,
      backgroundColor: "transparent",
      textTransform: "uppercase",
      style: {
        "color": "white",
        "hyphens": "manual"
      },
      parent: textPanel,
      padding: {
        top: dpr(8)
      },
      width: textPanel.width,
      y: timeText.maxY
    });
    itemTitle.originalHeight = itemTitle.height;
    subTitlePanel = new TextLayer({
      font: "100 " + (dpr(18)) + "px/" + (dpr(24)) + "px FrutigerLTStd-Light, -apple-system",
      name: venue.name + " subTitlePanel",
      width: textPanel.width,
      backgroundColor: "transparent",
      style: {
        "color": "white"
      },
      parent: textPanel,
      padding: {
        bottom: (this.options.pageMargin / 2) - dpr(6)
      },
      text: venue.tagline,
      y: itemTitle.maxY
    });
    helpTextPanel = new TextLayer({
      name: venue.name + " helpText",
      backgroundColor: "transparent",
      padding: {
        top: this.options.pageMargin / 2,
        bottom: this.options.pageMargin / 2
      },
      parent: textPanel,
      font: "200 " + (dpr(12)) + "px/" + (dpr(16)) + "px FrutigerLTStd-Light, -apple-system",
      textTransform: "uppercase",
      width: textPanel.width,
      text: venue.type.title,
      style: {
        "color": "white",
        "background-image": "url('modules/moduleImages/interface/gr_dotted_line.svg')",
        "background-repeat": "repeat-x",
        "background-size": (dpr(325)) + "px " + (dpr(2)) + "px",
        "background-position": "top"
      },
      y: subTitlePanel.maxY
    });
    textPanel.height = helpTextPanel.maxY;
    textPanel.y = Align.bottom();
    subTitlePanel.maxY = helpTextPanel.y;
    this.options.card = {
      image: image,
      textPanel: textPanel,
      timeIcon: timeIcon,
      timeText: timeText,
      itemTitle: itemTitle,
      helpText: helpTextPanel,
      subTitle: subTitlePanel,
      gradient: gradientMask
    };
    console.log("CoverTileVenue Object:", this.options.card);
    this.updateContentPositions();
    this.on("change:size", (function(_this) {
      return function() {
        return _this.updateContentPositions();
      };
    })(this));
  }

  VenueCoverTile.prototype.updateContentPositions = function() {
    var compactHeight, featuredHeight, headlineFontSize, heightPercentOfTransition, help, icon, maxHeadlineSize, maxTextPanelWidth, maxTimeTitleSize, maxWidth, minHeadlineSize, minTextPanelWidth, minTimeTitleSize, minWidth, newBottomAlign, newOpacity, subtitle, textPaneWidthPercentOfMax, textPanel, textPanelBottomHeight, textPanelWidth, time, timeTextFontSize, title, titleTopPadding, transitionMark, widthPercentOfMax;
    console.group("Cover tile update positions");
    this.options.card.gradient.size = this.size;
    this.options.card.image.size = this.size;
    textPanel = this.options.card.textPanel;
    icon = this.options.card.timeIcon;
    time = this.options.card.timeText;
    title = this.options.card.itemTitle;
    subtitle = this.options.card.subTitle;
    help = this.options.card.helpText;
    featuredHeight = this.options.featureHeight;
    compactHeight = this.options.compactHeight;
    transitionMark = featuredHeight - compactHeight;
    maxWidth = Screen.width;
    minWidth = dpr(214);
    maxTextPanelWidth = maxWidth - (this.options.pageMargin * 2);
    minTextPanelWidth = minWidth - this.options.pageMargin;
    maxHeadlineSize = dpr(32);
    minHeadlineSize = dpr(18);
    maxTimeTitleSize = dpr(14);
    minTimeTitleSize = dpr(12);
    widthPercentOfMax = Utils.modulate(this.width, [maxWidth, minWidth], [1, 0]);
    heightPercentOfTransition = Utils.modulate(this.height, [featuredHeight, transitionMark], [1, 0], true);
    textPanelWidth = Utils.modulate(this.width, [minWidth, maxWidth], [minTextPanelWidth, maxTextPanelWidth]);
    textPaneWidthPercentOfMax = Utils.modulate(textPanelWidth, [maxTextPanelWidth, minTextPanelWidth], [1, 0]);
    headlineFontSize = Utils.modulate(widthPercentOfMax, [0, 1], [minHeadlineSize, maxHeadlineSize], true);
    timeTextFontSize = Utils.modulate(widthPercentOfMax, [0, 1], [minTimeTitleSize, maxTimeTitleSize], true);
    textPanel.width = textPanelWidth;
    textPanel.centerX();
    title.width = textPanelWidth;
    time.width = textPanelWidth - icon.maxX;
    subtitle.width = textPanelWidth;
    help.width = textPanelWidth;
    title.font = "700 " + headlineFontSize + "px/" + headlineFontSize + "px FrutigerLTStd-Roman, -apple-system";
    time.font = "200 " + timeTextFontSize + "px/" + timeTextFontSize + "px FrutigerLTStd-Roman, -apple-system";
    titleTopPadding = headlineFontSize / 4;
    title.style = {
      "padding-top": titleTopPadding + "px"
    };
    title.y = time.maxY;
    subtitle.y = title.maxY;
    help.y = subtitle.maxY;
    textPanel.height = help.maxY;
    textPanelBottomHeight = (help.height + subtitle.height) - (textPanel.x / 2);
    newBottomAlign = Utils.modulate(heightPercentOfTransition, [.5, 1], [textPanelBottomHeight, 0], true);
    newOpacity = Utils.modulate(heightPercentOfTransition, [.5, 1], [0, 1], true);
    textPanel.y = Align.bottom(newBottomAlign);
    subtitle.opacity = newOpacity;
    help.opacity = newOpacity;
    console.log("modulated percent between max and min width:", widthPercentOfMax);
    console.log("modulated percent between featured and compact height:", heightPercentOfTransition);
    console.log("modulated text panel width:", textPaneWidthPercentOfMax);
    console.log("modulated headline size:", headlineFontSize);
    console.log("card object", this.options.card);
    return console.groupEnd();
  };

  VenueCoverTile.prototype.getOpenHours = function(venue, day) {
    var hoursObject, openingHours, sentDay;
    sentDay = day;
    console.group("Get Open Hours");
    console.log("Venue sent:", venue);
    openingHours = venue.openingHours.content;
    console.log("Venue Opening Hours: ", openingHours);
    hoursObject = openingHours.find((function(_this) {
      return function(day) {
        return moment(day.date).isSame(sentDay, 'day');
      };
    })(this));
    if (hoursObject) {
      console.log("Current Hours", hoursObject);
      console.groupEnd();
      return hoursObject;
    } else {
      console.log("TODO: Create off-cruise state");
      console.groupEnd();
      return null;
    }
  };

  VenueCoverTile.prototype.lookupOpen = function(day) {
    var allTimes, curOpenTime, i, isOpen, lastOpenTime, len, nextOpenDay, openHoursTomorrow, openText, ref, time;
    console.group("Look up open hours");
    console.log("Day passed in:", day);
    isOpen = false;
    openText = "";
    allTimes = day.times;
    console.log("All times for day:", allTimes);
    lastOpenTime = day.times[day.times.length - 1].close;
    console.log("Last Open Time:", lastOpenTime);
    console.log("Test Time:", moment());
    curOpenTime = allTimes.find((function(_this) {
      return function(time) {
        return moment().isBetween(moment(time.open, 'HH:mm'), moment(time.close, 'HH:mm'));
      };
    })(this));
    console.log("Opening time search result:", curOpenTime);
    if (curOpenTime) {
      console.log("Open now until", curOpenTime.close);
      console.groupEnd();
      openText = "Jetzt geöffnet bis " + curOpenTime.close;
      isOpen = true;
      return {
        isOpen: isOpen,
        openText: openText
      };
    } else {
      ref = day.times;
      for (i = 0, len = ref.length; i < len; i++) {
        time = ref[i];
        if (moment().isBefore(moment(time.open, "HH:mm"))) {
          console.log("Closed - opens at", time.open);
          console.groupEnd();
          openText = "Öffnet um " + time.open;
          isOpen = false;
          return {
            isOpen: isOpen,
            openText: openText
          };
        } else {
          nextOpenDay = moment().add(1, 'day');
          openHoursTomorrow = this.getOpenHours(this.options.venue, nextOpenDay);
          if (openHoursTomorrow) {
            isOpen = false;
            openText = "Öffnet morgen um " + openHoursTomorrow.times[0].open;
            console.log("Closed - opens tommorrow", openHoursTomorrow.times[0].open);
            console.groupEnd();
            return {
              isOpen: isOpen,
              openText: openText
            };
          } else {
            isOpen = false;
            openText = "Geschlossen";
            console.log("Won't open again");
            console.groupEnd();
            return {
              isOpen: isOpen,
              openText: openText
            };
          }
        }
      }
    }
  };

  VenueCoverTile.define('CTASpace', {
    get: function() {
      return this.options.CTASpace;
    },
    set: function(value) {
      return this.options.CTASpace = value;
    }
  });

  VenueCoverTile.define('featureHeight', {
    get: function() {
      return this.options.featureHeight;
    },
    set: function(value) {
      return this.options.featureHeight = value;
    }
  });

  VenueCoverTile.define('compactHeight', {
    get: function() {
      return this.options.compactHeight;
    },
    set: function(value) {
      return this.options.compactHeight = value;
    }
  });

  VenueCoverTile.define('venue', {
    get: function() {
      if (this.options.venue === "") {
        return console.error("No venue defined for venue tile");
      } else {
        return this.options.venue;
      }
    },
    set: function(value) {
      return this.options.venue = value;
    }
  });

  VenueCoverTile.define('card', {
    get: function() {
      if (this.options.card === "") {
        return console.error("Error creating card");
      } else {
        return this.options.card;
      }
    },
    set: function(value) {
      return this.options.card = value;
    }
  });

  VenueCoverTile.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  VenueCoverTile.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return VenueCoverTile;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","data_openinghours":"data_openinghours","npm":"npm"}],"DevicePixelRatio":[function(require,module,exports){
exports.DevicePixelRatio = (function() {
  var VALUE, dpr, log;

  function DevicePixelRatio() {}

  log = function(v) {
    console.log("DevicePixelRatio set as:", v);
    return v;
  };

  dpr = function() {
    var devicePixelRatio, device_2x, device_3p5x, device_3x, i, initialValue, j, k, len, len1, len2, ref, ref1, ref2, value;
    initialValue = 1;
    value = initialValue;
    if (Utils.isFramerStudio() || Utils.isDesktop()) {
      ref = ['apple-', 'google-nexus-', 'iphone-6-', 'iphone-5', 'ipad-air', 'nexus-9', 'applewatch'];
      for (i = 0, len = ref.length; i < len; i++) {
        device_2x = ref[i];
        if (_.startsWith(Framer.Device.deviceType, device_2x)) {
          value = 2;
        }
      }
      ref1 = ['apple-iphone-6s-plus', 'google-nexus-5', 'htc-one-', 'microsoft-lumia-', 'samsung-galaxy-note-', 'iphone-6plus', 'nexus-5'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        device_3x = ref1[j];
        if (_.startsWith(Framer.Device.deviceType, device_3x)) {
          value = 3;
        }
      }
      ref2 = ['google-nexus-6'];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        device_3p5x = ref2[k];
        if (_.startsWith(Framer.Device.deviceType, device_3p5x)) {
          value = 3.5;
        }
      }
    }
    if (value !== initialValue) {
      return log(value);
    }
    if (!Utils.isDesktop()) {
      devicePixelRatio = Utils.devicePixelRatio();
      if (devicePixelRatio > initialValue) {
        value = devicePixelRatio;
      }
    }
    return log(value);
  };

  VALUE = dpr();

  DevicePixelRatio.calc = function(v) {
    return v * VALUE;
  };

  DevicePixelRatio.value = VALUE;

  return DevicePixelRatio;

})();

exports.dpr = exports.DevicePixelRatio.calc;


},{}],"EventCoverTile":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.EventCoverTile = (function(superClass) {
  extend(EventCoverTile, superClass);

  function EventCoverTile(options) {
    var css;
    this.options = options != null ? options : {};
    EventCoverTile.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = "\n";
    Utils.insertCSS(css);
  }

  return EventCoverTile;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"ExcursionCoverTile":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.ExcursionCoverTile = (function(superClass) {
  extend(ExcursionCoverTile, superClass);

  function ExcursionCoverTile(options) {
    var css;
    this.options = options != null ? options : {};
    ExcursionCoverTile.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = "\n";
    Utils.insertCSS(css);
  }

  return ExcursionCoverTile;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"IconButton":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.IconButton = (function(superClass) {
  extend(IconButton, superClass);

  function IconButton(options) {
    var base, css, icon;
    this.options = options != null ? options : {};
    if ((base = this.options).icon == null) {
      base.icon = "close";
    }
    IconButton.__super__.constructor.call(this, this.options);
    this.backgroundColor = "transparent";
    css = "	.placeholder {\n			width:" + (dpr(40)) + "px;\n			height:" + (dpr(40)) + "px;\n			background-image:url('modules/moduleImages/interface/img_underConstruction.png');\n			background-repeat:no-repeat;\n			background-position:center;\n			background-size:60%;\n	}\n	.close {\n			width:" + (dpr(25)) + "px;\n			height:" + (dpr(25)) + "px;\n			background-image:url('modules/moduleImages/interface/icn_white_close.svg');\n			background-repeat:no-repeat;\n			background-position:center;\n			background-size:100%;\n	}\n	.closeBlue {\n			width:" + (dpr(24)) + "px;\n			height:" + (dpr(24)) + "px;\n			background-image:url('modules/moduleImages/interface/icn_blue_close.svg');\n			background-repeat:no-repeat;\n			background-position:center;\n			background-size:100%;\n	}\n\n	.back {\n			width:" + (dpr(20)) + "px;\n			height:" + (dpr(40)) + "px;\n			background-image:url('modules/moduleImages/interface/icn_backarrow.png');\n			background-repeat:no-repeat;\n			background-position:center;\n			background-size:70%;\n	}\n	.burger {\n			width:" + (dpr(30)) + "px;\n			height:" + (dpr(20)) + "px;\n			background-image:url('modules/moduleImages/interface/icn_hamburger_menu.svg');\n			background-repeat:no-repeat;\n			background-position:center;\n			background-size:100%;\n	}\n	.weather {\n			width:" + (dpr(75)) + "px;\n			height:" + (dpr(58)) + "px;\n			background-image:url('modules/moduleImages/interface/placeholder_weather.png');\n			background-repeat:no-repeat;\n			background-position:center;\n			background-size:100%;\n	}\n\n}";
    Utils.insertCSS(css);
    icon = (function() {
      switch (false) {
        case this.options.icon !== "close":
          return "<div class= 'close'></div>";
        case this.options.icon !== "closeBlue":
          return "<div class='closeBlue'></div>";
        case this.options.icon !== "back":
          return "<div class='back'></div>";
        case this.options.icon !== "burger":
          return "<div class='burger'></div>";
        case this.options.icon !== "weather":
          return "<div class='weather'></div>";
        default:
          return "<div class='placeholder'></div>";
      }
    }).call(this);
    this.html = "" + icon;
    this.size = Utils.textSize(this.html);
  }

  IconButton.define('icon', {
    get: function() {
      return this.options.icon;
    },
    set: function(value) {
      return this.options.icon = value;
    }
  });

  return IconButton;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"ItineraryDataCard":[function(require,module,exports){
var dpr, locations, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

locations = require('data_locations').locations;

npm = require('npm');

moment = npm.moment;

exports.ItinCard = (function(superClass) {
  extend(ItinCard, superClass);

  function ItinCard(options) {
    var base, base1, base2, base3, base4, base5, base6, css;
    this.options = options != null ? options : {};
    if ((base = this.options).segment == null) {
      base.segment = "";
    }
    if ((base1 = this.options).sailing == null) {
      base1.sailing = "";
    }
    if ((base2 = this.options).pageType == null) {
      base2.pageType = "segment";
    }
    if ((base3 = this.options).imageScaleFactor == null) {
      base3.imageScaleFactor = "";
    }
    if ((base4 = this.options).imageScaleFactor == null) {
      base4.imageScaleFactor = 1.25;
    }
    if ((base5 = this.options).viewPadding == null) {
      base5.viewPadding = dpr(20);
    }
    if ((base6 = this.options).pageName == null) {
      base6.pageName = "Page";
    }
    ItinCard.__super__.constructor.call(this, this.options);
    moment.locale('de', {
      calendar: {
        lastDay: '[gestern] [um] LT',
        sameDay: '[heute] [um] LT',
        nextDay: '[morgen] [um] LT',
        lastWeek: '[Letzter] dddd [um] LT',
        nextWeek: 'dddd [um] LT',
        sameElse: 'dddd, LL [um] LT'
      }
    });
    moment.updateLocale('de', {
      longDateFormat: {
        LT: 'H:mm [Uhr]',
        LTS: 'H:mm:ss [Uhr]'
      }
    });
    css = ".itineraryInfoBlock {\n	font-family:font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif;\n	width:" + this.width + "px;\n	padding:" + this.options.viewPadding + "px;\n	//background:#33CC22;\n	}\n\n.itineraryMoustache {\n	font-size:" + (dpr(16)) + "px;\n	font-weight:100;\n	line-height:1;\n	margin-bottom:" + (dpr(5)) + "px;\n	text-transform: uppercase;\n	//background:#663300;\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n\n}\n.itineraryTitle {\n	font-size:" + (dpr(38)) + "px;\n	font-weight:600;\n	line-height:1.1;\n	//background:#663300;\n	letter-spacing:-" + (dpr(2)) + "px;\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n	text-transform:uppercase;\n\n}\n.timeBlock {\n	width:" + (this.width - this.options.viewPadding * 2 - dpr(40)) + "px;\n	margin-top:" + (dpr(10)) + "px;\n	//border:1px solid #993333;\n}\n.itineraryTime {\n	font-size:" + (dpr(16)) + "px;\n	font-weight:200;\n	line-height:1.3;\n	//border:1px solid #993333;\n	padding-left:" + (dpr(40)) + "px;\n\n}\n.itineraryArrow {\n	float:left;\n	background-image:url(\"modules/moduleImages/interface/gr-arrow-callout@3x.png\");\n	background-size:100%;\n	padding-top:" + (dpr(4)) + "px;\n	background-repeat:no-repeat;\n	background-position:left center;\n	margin-top:" + (dpr(2)) + "px;\n	width:" + (dpr(27)) + "px;\n	height:" + (dpr(9)) + "px;\n}\n\n.navigationIndicatorContainer {\n\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n}\n\n.navigationIndications {\n	background-image:url(\"modules/moduleImages/interface/icn_shipPositionPlaceholder.png\");\n	background-size:100%;\n	padding-top:" + this.options.viewPadding + "px;\n	background-repeat:no-repeat;\n	background-position:bottom center;\n	width:" + (dpr(280)) + "px;\n\n	margin-left:auto;\n	margin-right:auto;\n	height:" + (dpr(24)) + "px;\n	//border:4px solid #993333;\n\n}";
    Utils.insertCSS(css);
    this.html = this.getInfoByType(this.options.pageType, this.options.segment);
    this.size = Utils.textSize(this.html);
  }

  ItinCard.prototype.getInfoByType = function(type, segment) {
    var afterAllOnboard, afterArrival, afterBoardingEnd, afterMuster, allOnBoardBlock, allOnBoardString, arrivalBlock, beforeBoardStart, boarding, boardingBlock, departureString, moustacheTime, navSec, securityBlock, segEnd, segStart, segmentTitle;
    if (moment().isBetween(moment(segment.arrivalTime), moment(segment.segmentEnd))) {
      moustacheTime = "Jetzt";
    } else {
      moustacheTime = moment(segment.segmentStart).calendar().split(" um")[0];
    }
    switch (type) {
      case "onboarding":
        beforeBoardStart = moment().isBefore(moment(segment.boardingStart));
        boarding = moment().isBetween(moment(segment.boardingStart), moment(segment.allOnBoard));
        afterBoardingEnd = moment().isAfter(moment(segment.allOnBoard));
        afterMuster = moment().isAfter(moment(segment.securityStart));
        if (beforeBoardStart) {
          boardingBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Boarding ab " + (moment(segment.boardingStart).format('LT')) + "</div> </div>";
        } else if (boarding) {
          boardingBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Jetzt: Boarding - alle an Board bis " + (moment(segment.allOnBoard).format('LT')) + "</div> </div>";
        } else {
          boardingBlock = "";
        }
        if (afterMuster) {
          securityBlock = "";
        } else {
          securityBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Sicherheitsübung um " + (moment(segment.securityStart).format('LT')) + "</div> </div>";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + moustacheTime + "</div> <div class='itineraryTitle'>" + segment.location.marketingName + "</div> " + boardingBlock + " " + securityBlock + " <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Los geht's nach " + segment.nextLand.name + " um " + (moment(segment.departureTime).format('LT')) + "</div> </div> </div>";
      case "location":
        segStart = moment(segment.segmentStart);
        segEnd = moment(segment.segmentEnd);
        if (segEnd.diff(segStart, 'hours') >= 24) {
          allOnBoardString = "<div class='itineraryTime'>Alle an Bord " + (moment(segment.backOnBoard).calendar()) + "</div>";
          departureString = "<div class='itineraryTime'>Weiterfahrt nach " + segment.nextLand.name + " " + (moment(segment.departureTime).calendar()) + "</div>";
        } else {
          allOnBoardString = "<div class='itineraryTime'>Alle an Bord " + (moment(segment.backOnBoard).format('LT')) + "</div>";
          departureString = "<div class='itineraryTime'>Weiterfahrt nach " + segment.nextLand.name + " um " + (moment(segment.departureTime).format('LT')) + "</div>";
        }
        afterArrival = moment().isAfter(moment(segment.arrivalTime));
        afterAllOnboard = moment().isAfter(moment(segment.backOnBoard));
        if (afterArrival) {
          arrivalBlock = "";
        } else {
          arrivalBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft um " + (moment(segment.arrivalTime).format('LT')) + "</div> </div>";
        }
        if (afterAllOnboard) {
          allOnBoardBlock = "";
        } else {
          allOnBoardBlock = "<div class = 'timeBlock'> <div class='itineraryArrow'></div> " + allOnBoardString + " </div>";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + moustacheTime + "</div> <div class='itineraryTitle'>" + segment.location.marketingName + "</div> " + arrivalBlock + " " + allOnBoardBlock + " <div class = 'timeBlock'> <div class='itineraryArrow'></div> " + departureString + " </div> </div>";
      case "seaday":
        if (moment().isBetween(moment(segment.segmentStart), moment(segment.segmentEnd))) {
          segmentTitle = segment.location.marketingName;
          navSec = "<div class='navigationIndicatorContainer'> <div class='navigationIndications'></div> </div>";
        } else {
          segmentTitle = "Seetag";
          navSec = "";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + moustacheTime + "</div> <div class='itineraryTitle'>" + segmentTitle + "</div> <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft in " + segment.nextLand.name + " " + (moment(segment.nextArrivalTime).calendar()) + "</div> </div> " + navSec + " </div>";
      case "arriving":
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>Jetzt</div> <div class='itineraryTitle'>Auf See</div> <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft in " + segment.location.marketingName + " um " + (moment(segment.arrivalTime).format('LT')) + "</div> </div> <div class='navigationIndicatorContainer'> <div class='navigationIndications'></div> </div> </div>";
      case "departing":
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>Jetzt</div> <div class='itineraryTitle'>Auf See</div> <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft in " + segment.nextLand.marketingName + " " + (moment(segment.nextArrivalTime).calendar()) + "</div> </div> <div class='navigationIndicatorContainer'> <div class='navigationIndications'></div> </div> </div>";
      case "offboarding":
        if (moment().isAfter(moment(segment.arrivalTime))) {
          arrivalBlock = "";
        } else {
          arrivalBlock = "<div class = 'timeBlock'> <div class='itineraryArrow'></div> <div class='app itineraryTime'>Ankunft um " + (moment(segment.arrivalTime).format('LT')) + "</div> </div>";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + (moustacheTime.split(" um")[0]) + "</div> <div class='itineraryTitle'>" + segment.location.marketingName + "</div> " + arrivalBlock + " <div class = 'timeBlock'> <div class='itineraryArrow'></div> <div class='app itineraryTime'>Alle von Bord um " + (moment(segment.allFromBoard).format('LT')) + "</div> </div> </div>";
    }
  };

  ItinCard.define('sailing', {
    get: function() {
      if (this.options.sailing === "") {
        return console.error("must define a sailing");
      } else {
        return this.options.sailing;
      }
    },
    set: function(value) {
      return this.options.sailing = value;
    }
  });

  ItinCard.define('segment', {
    get: function() {
      if (this.options.segment === "") {
        return console.error("must define a segment");
      } else {
        return this.options.segment;
      }
    },
    set: function(value) {
      return this.options.segment = value;
    }
  });

  ItinCard.define('viewPadding', {
    get: function() {
      return this.options.viewPadding;
    },
    set: function(value) {
      return this.options.viewPadding = value;
    }
  });

  ItinCard.define('pageType', {
    get: function() {
      return this.options.pageType;
    },
    set: function(value) {
      return this.options.pageType = value;
    }
  });

  return ItinCard;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","data_locations":"data_locations","npm":"npm"}],"ItineraryView":[function(require,module,exports){
var dpr, locations, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

locations = require('data_locations').locations;

npm = require('npm');

moment = npm.moment;

exports.ItineraryView = (function(superClass) {
  extend(ItineraryView, superClass);

  function ItineraryView(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, card, css, gradientMask, page;
    this.options = options != null ? options : {};
    if ((base = this.options).segment == null) {
      base.segment = "no segment defined";
    }
    if ((base1 = this.options).sailing == null) {
      base1.sailing = "no segment defined";
    }
    if ((base2 = this.options).testDate == null) {
      base2.testDate = "04/29/2017 00:00:00";
    }
    if ((base3 = this.options).pageType == null) {
      base3.pageType = "segment";
    }
    if ((base4 = this.options).imageScaleFactor == null) {
      base4.imageScaleFactor = "";
    }
    if ((base5 = this.options).segmentImage == null) {
      base5.segmentImage = "default";
    }
    if ((base6 = this.options).imageScaleFactor == null) {
      base6.imageScaleFactor = 1.25;
    }
    if ((base7 = this.options).viewPadding == null) {
      base7.viewPadding = dpr(20);
    }
    if ((base8 = this.options).pageName == null) {
      base8.pageName = "Page";
    }
    ItineraryView.__super__.constructor.call(this, this.options);
    css = ".itineraryInfoBlock {\n	font-family:font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif;\n	width:" + this.width + "px;\n	padding:" + this.options.viewPadding + "px;\n	//background:#33CC22;\n	}\n\n.itineraryMoustache {\n	font-size:" + (dpr(16)) + "px;\n	font-weight:100;\n	line-height:1;\n	margin-bottom:" + (dpr(5)) + "px;\n	text-transform: capitalize;\n	//background:#663300;\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n\n}\n.itineraryTitle {\n	font-size:" + (dpr(38)) + "px;\n	font-weight:600;\n	line-height:1.1;\n	//background:#663300;\n	letter-spacing:-" + (dpr(2)) + "px;\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n	text-transform:uppercase;\n\n}\n.timeBlock {\n	width:" + (this.width - this.options.viewPadding * 2 - dpr(40)) + "px;\n	margin-top:" + (dpr(10)) + "px;\n	//border:1px solid #993333;\n}\n.itineraryTime {\n	font-size:" + (dpr(16)) + "px;\n	font-weight:200;\n	line-height:1.3;\n	//border:1px solid #993333;\n	padding-left:" + (dpr(40)) + "px;\n\n}\n.itineraryArrow {\n	float:left;\n	background-image:url(\"modules/moduleImages/interface/gr-arrow-callout@3x.png\");\n	background-size:100%;\n	padding-top:" + (dpr(4)) + "px;\n	background-repeat:no-repeat;\n	background-position:left center;\n	margin-top:" + (dpr(2)) + "px;\n	width:" + (dpr(27)) + "px;\n	height:" + (dpr(9)) + "px;\n}\n\n.navigationIndicatorContainer {\n\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n}\n\n.navigationIndications {\n	background-image:url(\"modules/moduleImages/interface/icn_shipPositionPlaceholder.png\");\n	background-size:100%;\n	padding-top:" + this.options.viewPadding + "px;\n	background-repeat:no-repeat;\n	background-position:bottom center;\n	width:" + (dpr(280)) + "px;\n\n	margin-left:auto;\n	margin-right:auto;\n	height:" + (dpr(24)) + "px;\n	//border:4px solid #993333;\n\n}";
    Utils.insertCSS(css);
    this.name = this.options.pageName + "_container";
    moment.locale('de', {
      calendar: {
        lastDay: '[gestern] [um] LT',
        sameDay: '[heute] [um] LT',
        nextDay: '[morgen] [um] LT',
        lastWeek: '[Letzter] dddd [um] LT',
        nextWeek: 'dddd [um] LT',
        sameElse: 'dddd, LL [um] LT'
      }
    });
    moment.updateLocale('de', {
      longDateFormat: {
        LT: 'H:mm [Uhr]',
        LTS: 'H:mm:ss [Uhr]'
      }
    });
    page = new Layer({
      size: this.size,
      backgroundColor: "#FB8E7E",
      name: this.options.pageName + "_image",
      image: this.options.segmentImage,
      parent: this
    });
    if (this.options.segmentImage === "default") {
      page.style = {
        "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
      };
    }
    gradientMask = new Layer({
      name: this.options.pageName + "_tint",
      parent: page,
      width: this.width,
      height: this.height / 2,
      maxY: this.height
    });
    gradientMask.style.background = "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.8) 100%)";
    card = new Layer({
      backgroundColor: "transparent",
      name: this.options.pageName + "_info",
      parent: page,
      html: this.getInfoByType(this.options.pageType, this.options.segment)
    });
    card.size = Utils.textSize(card.html);
    card.y = Align.bottom(-dpr(40));
  }

  ItineraryView.prototype.getInfoByType = function(type, segment) {
    var afterAllOnboard, afterArrival, afterBoardingEnd, afterMuster, allOnBoardBlock, allOnBoardString, arrivalBlock, beforeBoardStart, boarding, boardingBlock, departureString, moustacheTime, navSec, securityBlock, segEnd, segStart, segmentTitle;
    if (moment().isBetween(moment(segment.arrivalTime), moment(segment.segmentEnd))) {
      moustacheTime = "Jetzt";
    } else {
      moustacheTime = moment(segment.segmentStart).calendar().split(" um")[0];
    }
    switch (type) {
      case "onboarding":
        beforeBoardStart = moment().isBefore(moment(segment.boardingStart));
        boarding = moment().isBetween(moment(segment.boardingStart), moment(segment.allOnBoard));
        afterBoardingEnd = moment().isAfter(moment(segment.allOnBoard));
        afterMuster = moment().isAfter(moment(segment.securityStart));
        if (beforeBoardStart) {
          boardingBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Boarding ab " + (moment(segment.boardingStart).format('LT')) + "</div> </div>";
        } else if (boarding) {
          boardingBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Jetzt: Boarding - alle an Board bis " + (moment(segment.allOnBoard).format('LT')) + "</div> </div>";
        } else {
          boardingBlock = "";
        }
        if (afterMuster) {
          securityBlock = "";
        } else {
          securityBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Sicherheitsübung um " + (moment(segment.securityStart).format('LT')) + "</div> </div>";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + moustacheTime + "</div> <div class='itineraryTitle'>" + segment.location.marketingName + "</div> " + boardingBlock + " " + securityBlock + " <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Los geht's nach " + segment.nextLand.name + " um " + (moment(segment.departureTime).format('LT')) + "</div> </div> </div>";
      case "location":
        segStart = moment(segment.segmentStart);
        segEnd = moment(segment.segmentEnd);
        if (segEnd.diff(segStart, 'hours') >= 24) {
          allOnBoardString = "<div class='itineraryTime'>Alle an Bord " + (moment(segment.backOnBoard).calendar()) + "</div>";
          departureString = "<div class='itineraryTime'>Weiterfahrt nach " + segment.nextLand.name + " " + (moment(segment.departureTime).calendar()) + "</div>";
        } else {
          allOnBoardString = "<div class='itineraryTime'>Alle an Bord " + (moment(segment.backOnBoard).format('LT')) + "</div>";
          departureString = "<div class='itineraryTime'>Weiterfahrt nach " + segment.nextLand.name + " um " + (moment(segment.departureTime).format('LT')) + "</div>";
        }
        afterArrival = moment().isAfter(moment(segment.arrivalTime));
        afterAllOnboard = moment().isAfter(moment(segment.backOnBoard));
        if (afterArrival) {
          arrivalBlock = "";
        } else {
          arrivalBlock = "<div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft um " + (moment(segment.arrivalTime).format('LT')) + "</div> </div>";
        }
        if (afterAllOnboard) {
          allOnBoardBlock = "";
        } else {
          allOnBoardBlock = "<div class = 'timeBlock'> <div class='itineraryArrow'></div> " + allOnBoardString + " </div>";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + moustacheTime + "</div> <div class='itineraryTitle'>" + segment.location.marketingName + "</div> " + arrivalBlock + " " + allOnBoardBlock + " <div class = 'timeBlock'> <div class='itineraryArrow'></div> " + departureString + " </div> </div>";
      case "seaday":
        if (moment().isBetween(moment(segment.segmentStart), moment(segment.segmentEnd))) {
          segmentTitle = segment.location.marketingName;
          navSec = "<div class='navigationIndicatorContainer'> <div class='navigationIndications'></div> </div>";
        } else {
          segmentTitle = "Seetag";
          navSec = "";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + moustacheTime + "</div> <div class='itineraryTitle'>" + segmentTitle + "</div> <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft in " + segment.nextLand.name + " " + (moment(segment.nextArrivalTime).calendar()) + "</div> </div> " + navSec + " </div>";
      case "arriving":
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>Jetzt</div> <div class='itineraryTitle'>Auf See</div> <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft in " + segment.location.marketingName + " um " + (moment(segment.arrivalTime).format('LT')) + "</div> </div> <div class='navigationIndicatorContainer'> <div class='navigationIndications'></div> </div> </div>";
      case "departing":
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>Jetzt</div> <div class='itineraryTitle'>Auf See</div> <div class='timeBlock'> <div class='itineraryArrow'></div> <div class='itineraryTime'>Ankunft in " + segment.nextLand.marketingName + " " + (moment(segment.nextArrivalTime).calendar()) + "</div> </div> <div class='navigationIndicatorContainer'> <div class='navigationIndications'></div> </div> </div>";
      case "offboarding":
        if (moment().isAfter(moment(segment.arrivalTime))) {
          arrivalBlock = "";
        } else {
          arrivalBlock = "<div class = 'timeBlock'> <div class='itineraryArrow'></div> <div class='app itineraryTime'>Ankunft um " + (moment(segment.arrivalTime).format('LT')) + "</div> </div>";
        }
        return "<div class='itineraryInfoBlock'> <div class='itineraryMoustache'>" + (moustacheTime.split(" um")[0]) + "</div> <div class='itineraryTitle'>" + segment.location.marketingName + "</div> " + arrivalBlock + " <div class = 'timeBlock'> <div class='itineraryArrow'></div> <div class='app itineraryTime'>Alle vom Bord um " + (moment(segment.allFromBoard).format('LT')) + "</div> </div> </div>";
    }
  };

  ItineraryView.define('sailing', {
    get: function() {
      return this.options.sailing;
    },
    set: function(value) {
      return this.options.sailing = value;
    }
  });

  ItineraryView.define('segment', {
    get: function() {
      return this.options.segment;
    },
    set: function(value) {
      return this.options.segment = value;
    }
  });

  ItineraryView.define('viewPadding', {
    get: function() {
      return this.options.viewPadding;
    },
    set: function(value) {
      return this.options.viewPadding = value;
    }
  });

  ItineraryView.define('imageScaleFactor', {
    get: function() {
      return this.options.imageScaleFactor;
    },
    set: function(value) {
      return this.options.imageScaleFactor = value;
    }
  });

  ItineraryView.define('pageName', {
    get: function() {
      return this.options.pageName;
    },
    set: function(value) {
      return this.options.pageName = value;
    }
  });

  ItineraryView.define('segmentImage', {
    get: function() {
      return this.options.segmentImage;
    },
    set: function(value) {
      return this.options.segmentImage = value;
    }
  });

  ItineraryView.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  ItineraryView.define('pageType', {
    get: function() {
      return this.options.pageType;
    },
    set: function(value) {
      return this.options.pageType = value;
    }
  });

  return ItineraryView;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","data_locations":"data_locations","npm":"npm"}],"MyDayDetailView":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.MyDayView = (function(superClass) {
  extend(MyDayView, superClass);

  Events.closeClicked = "MyDayView.closeClicked";

  function MyDayView(options) {
    var base, base1, base2, css;
    this.options = options != null ? options : {};
    if ((base = this.options).segment == null) {
      base.segment = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).testDate == null) {
      base2.testDate = moment("05/03/2017 8:30");
    }
    MyDayView.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = "\n\n\n\n\n";
    Utils.insertCSS(css);
  }

  MyDayView.define('segment', {
    get: function() {
      if (this.options.location === "") {
        return console.error("No segment defined");
      } else {
        return this.options.list;
      }
    },
    set: function(value) {
      return this.options.list = value;
    }
  });

  MyDayView.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  MyDayView.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return MyDayView;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"OLD_data_topics":[function(require,module,exports){
var excursions, venues;

excursions = require('data_excursions').excursions;

venues = require('data_venues').venues;

exports.data_topics = {
  wellness: {
    title: "Wellness,<br />Sport & Spa",
    subtitle: "Sich wohlfühlen war nie einfacher",
    image: "modules/moduleImages/topics/topicWellness.jpg",
    categorySubline: "großartige Orte zum Geniessen und feiern",
    subtopics: [
      {
        name: "Sport und Wellness Angebote",
        members: []
      }, {
        name: "Aktive Ausflüge",
        members: [excursions.A1001, excursions.A1002, excursions.A1003]
      }, {
        name: "Sport und Spiel Veranstaltungen",
        members: []
      }
    ]
  }
};


},{"data_excursions":"data_excursions","data_venues":"data_venues"}],"OLD_data_venues":[function(require,module,exports){
var categories;

categories = require('data_categories').categories;

exports.venues = {
  kidsClub: {
    name: "Kids Club",
    tags: [categories.family],
    type: "kids",
    subtype: "TODO"
  },
  rossini: {
    name: "Gourmet restaurant Rossini",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "alacarte"
  },
  buffalo: {
    name: "Buffalo Steak House",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "alacarte"
  },
  sushibar: {
    name: "Sushi Bar",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "alacarte"
  },
  brauhaus: {
    name: "Brauhaus",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "service"
  },
  frenchkiss: {
    name: "French Kiss – die Brasserie",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "service"
  },
  casanova: {
    name: "Casa Nova",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "service"
  },
  belladonna: {
    name: "Bella Donna",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "buffet"
  },
  fuego: {
    name: "Fuego",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "buffet"
  },
  weitewelt: {
    name: "Weite Welt Restaurant",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "buffet"
  },
  belladonna: {
    name: "Markt restaurant",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "buffet"
  },
  east: {
    name: "East",
    tags: [categories.eat],
    type: "restaurant",
    subtype: "buffet"
  },
  kochstudio: {
    name: "Kochstudio",
    tags: [categories.eat],
    type: "TODO",
    subtype: "TODO"
  },
  nightfly: {
    name: "Nightfly Nightclub",
    tags: [categories.eat],
    type: "bar",
    subtype: "TODO"
  }
};


},{"data_categories":"data_categories"}],"Ratings":[function(require,module,exports){
var SVGLayer, dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SVGLayer = require('SVGLayer').SVGLayer;

dpr = require('DevicePixelRatio').dpr;

exports.Ratings = (function(superClass) {
  extend(Ratings, superClass);

  function Ratings(options) {
    var base, base1, base2, base3, base4, css;
    this.options = options != null ? options : {};
    if ((base = this.options).numStars == null) {
      base.numStars = 10;
    }
    if ((base1 = this.options).starRating == null) {
      base1.starRating = 3;
    }
    if ((base2 = this.options).starHeight == null) {
      base2.starHeight = dpr(30);
    }
    if ((base3 = this.options).starWidth == null) {
      base3.starWidth = dpr(30);
    }
    if ((base4 = this.options).starGap == null) {
      base4.starGap = dpr(10);
    }
    Ratings.__super__.constructor.call(this, this.options);
    this.setRatings();
    this.backgroundColor = "transparent";
    this.height = this.options.starHeight;
    css = ".filled {\n		width:" + this.options.starWidth + "px;\n		height:" + this.options.starHeight + "px;\n		background-image:url('modules/moduleImages/interface/rating_star_filled.png');\n		background-repeat:no-repeat;\n		background-position:center;\n		background-size:100%;\n}\n.open {\n		width:" + this.options.starWidth + "px;\n		height:" + this.options.starHeight + "px;\n		background-image:url('modules/moduleImages/interface/rating_star_open.png');\n		background-repeat:no-repeat;\n		background-position:center;\n		background-size:100%;\n}";
    Utils.insertCSS(css);
  }

  Ratings.prototype.setRatings = function() {
    var i, j, ref, results, star;
    results = [];
    for (i = j = 0, ref = this.options.numStars; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      star = new Layer({
        name: "star_" + i,
        width: this.options.starWidth,
        backgroundColor: "transparent",
        height: this.options.starHeight,
        parent: this
      });
      if (i < this.options.starRating) {
        star.html = "<div class='filled'></div>";
      } else {
        star.html = "<div class='open'></div>";
      }
      star.x = i * (star.width + this.options.starGap);
      results.push(this.width = star.maxX);
    }
    return results;
  };

  Ratings.define('numStars', {
    get: function() {
      return this.options.numStars;
    },
    set: function(value) {
      return this.options.numStars = value;
    }
  });

  Ratings.define('starRating', {
    get: function() {
      return this.options.starRating;
    },
    set: function(value) {
      return this.options.starRating = value;
    }
  });

  Ratings.define('starHeight', {
    get: function() {
      return this.options.starHeight;
    },
    set: function(value) {
      return this.options.starHeight = value;
    }
  });

  Ratings.define('starWidth', {
    get: function() {
      return this.options.starWidth;
    },
    set: function(value) {
      return this.options.starWidth = value;
    }
  });

  Ratings.define('starGap', {
    get: function() {
      return this.options.starGap;
    },
    set: function(value) {
      return this.options.starGap = value;
    }
  });

  return Ratings;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","SVGLayer":"SVGLayer"}],"SVGLayer":[function(require,module,exports){
"SVGLayer class\n\nproperties\n- linecap <string> (\"round\" || \"square\" || \"butt\")\n- fill <string> (css color)\n- stroke <string> (css color)\n- strokeWidth <number>\n- dashOffset <number> (from -1 to 1, defaults to 0)";
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.SVGLayer = (function(superClass) {
  extend(SVGLayer, superClass);

  function SVGLayer(options) {
    var cName, d, footer, header, path, t;
    if (options == null) {
      options = {};
    }
    options = _.defaults(options, {
      dashOffset: 1,
      strokeWidth: 2,
      stroke: "#28affa",
      backgroundColor: null,
      clip: false,
      fill: "transparent",
      linecap: "round"
    });
    SVGLayer.__super__.constructor.call(this, options);
    if (options.fill === null) {
      this.fill = null;
    }
    this.width += options.strokeWidth / 2;
    this.height += options.strokeWidth / 2;
    d = new Date();
    t = d.getTime();
    cName = "c" + t;
    header = "<svg class='" + cName + "' x='0px' y='0px' width='" + this.width + "' height='" + this.height + "' viewBox='-" + (this.strokeWidth / 2) + " -" + (this.strokeWidth / 2) + " " + (this.width + this.strokeWidth / 2) + " " + (this.height + this.strokeWidth / 2) + "'>";
    path = options.path;
    footer = "</svg>";
    this.html = header + path + footer;
    Utils.domComplete((function(_this) {
      return function() {
        var domPath;
        domPath = document.querySelector('.' + cName + ' path');
        _this._pathLength = domPath.getTotalLength();
        _this.style = {
          "stroke-dasharray": _this.pathLength
        };
        return _this.dashOffset = options.dashOffset;
      };
    })(this));
  }

  SVGLayer.define("pathLength", {
    get: function() {
      return this._pathLength;
    },
    set: function(value) {
      return print("SVGLayer.pathLength is readonly");
    }
  });

  SVGLayer.define("linecap", {
    get: function() {
      return this.style.strokeLinecap;
    },
    set: function(value) {
      return this.style.strokeLinecap = value;
    }
  });

  SVGLayer.define("strokeLinecap", {
    get: function() {
      return this.style.strokeLinecap;
    },
    set: function(value) {
      return this.style.strokeLinecap = value;
    }
  });

  SVGLayer.define("fill", {
    get: function() {
      return this.style.fill;
    },
    set: function(value) {
      if (value === null) {
        value = "transparent";
      }
      return this.style.fill = value;
    }
  });

  SVGLayer.define("stroke", {
    get: function() {
      return this.style.stroke;
    },
    set: function(value) {
      return this.style.stroke = value;
    }
  });

  SVGLayer.define("strokeColor", {
    get: function() {
      return this.style.stroke;
    },
    set: function(value) {
      return this.style.stroke = value;
    }
  });

  SVGLayer.define("strokeWidth", {
    get: function() {
      return Number(this.style.strokeWidth.replace(/[^\d.-]/g, ''));
    },
    set: function(value) {
      return this.style.strokeWidth = value;
    }
  });

  SVGLayer.define("dashOffset", {
    get: function() {
      return this._dashOffset;
    },
    set: function(value) {
      var dashOffset;
      this._dashOffset = value;
      if (this.pathLength != null) {
        dashOffset = Utils.modulate(value, [0, 1], [this.pathLength, 0]);
        return this.style.strokeDashoffset = dashOffset;
      }
    }
  });

  return SVGLayer;

})(Layer);


},{}],"SectionLocation":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SectionLocation = (function(superClass) {
  extend(SectionLocation, superClass);

  function SectionLocation(options) {
    var base, css;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    SectionLocation.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(40)) + "px " + (dpr(40)) + "px"
    };
    this.width = this.width - (this.options.pageMargin * 2);
    this.x = this.options.pageMargin;
    css = "\n";
    Utils.insertCSS(css);
  }

  SectionLocation.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return SectionLocation;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"SectionMainArticle":[function(require,module,exports){
var dpr, headingSizes,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

headingSizes = require('data_headings').headingSizes;

exports.SectionMainArticle = (function(superClass) {
  extend(SectionMainArticle, superClass);

  function SectionMainArticle(options) {
    var base, base1, base2, css, defaultblue, grey2;
    this.options = options != null ? options : {};
    if ((base = this.options).articleTitle == null) {
      base.articleTitle = "articleTitle";
    }
    if ((base1 = this.options).articleContent == null) {
      base1.articleContent = "detailPage";
    }
    if ((base2 = this.options).pageMargin == null) {
      base2.pageMargin = dpr(24);
    }
    SectionMainArticle.__super__.constructor.call(this, this.options);
    this.x = this.options.pageMargin;
    this.backgroundColor = "transparent";
    defaultblue = "#3399CC";
    grey2 = "#555555";
    css = "\n.articleContainer {\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif, 'Open Sans', sans-serif;\n	width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n}\n.articleTitle {\n	font-weight:100;\n	font-size: " + headingSizes.xl + "px;\n	line-height: 1.2;\n	padding-bottom: " + (dpr(16)) + "px;\n	padding-top:" + (dpr(24)) + "px;\n	color: " + grey2 + ";\n	}\n\n.articleSecHeader {\n	font-size: " + (dpr(32)) + "px;\n	line-height: 1.2;\n	padding-bottom: " + (dpr(16)) + "px;\n	}\n\n.articleBody {\n	font-size: " + (dpr(18)) + "px;\n	line-height: 1.4;\n	color: " + grey2 + ";\n	}\n";
    Utils.insertCSS(css);
    this.html = "<div class='articleContainer'> <div class='articleTitle'> " + this.options.articleTitle + " </div> <div class='articleBody'> " + this.options.articleContent + " </div> </div>";
    this.size = Utils.textSize(this.html);
  }

  SectionMainArticle.define('articleTitle', {
    get: function() {
      return this.options.articleTitle;
    },
    set: function(value) {
      return this.options.articleTitle = value;
    }
  });

  SectionMainArticle.define('articleContent', {
    get: function() {
      return this.options.articleContent;
    },
    set: function(value) {
      return this.options.articleContent = value;
    }
  });

  SectionMainArticle.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return SectionMainArticle;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","data_headings":"data_headings"}],"SectionOpeningHours":[function(require,module,exports){
var dpr, moment, npm, venues,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

npm = require('npm');

moment = npm.moment;

dpr = require('DevicePixelRatio').dpr;

venues = require('data_venues').venues;

exports.SectionOpeningHours = (function(superClass) {
  extend(SectionOpeningHours, superClass);

  function SectionOpeningHours(options) {
    var base, base1, base2, base3, base4, base5, css, day, grey2, i, j, k, len, len1, len2, newNow, openingTime, ref, ref1, ref2, seperator, today, todaysTimes, tomorrow, tomorrowsTimes;
    this.options = options != null ? options : {};
    if ((base = this.options).testDate == null) {
      base.testDate = moment("04/29/2017");
    }
    if ((base1 = this.options).venue == null) {
      base1.venue = "";
    }
    if ((base2 = this.options).sectionLabel == null) {
      base2.sectionLabel = "this is sectionLabel";
    }
    if ((base3 = this.options).pageMargin == null) {
      base3.pageMargin = dpr(24);
    }
    if ((base4 = this.options).width == null) {
      base4.width = 400;
    }
    if ((base5 = this.options).hasStroke == null) {
      base5.hasStroke = false;
    }
    SectionOpeningHours.__super__.constructor.call(this, this.options);
    this.backgroundColor = "white";
    this.name = "openingHoursSection";
    moment.locale('de');
    newNow = moment(this.options.testDate);
    moment.now = function() {
      return newNow;
    };
    grey2 = "#555555";
    css = ".spacer {\n	margin-top:" + this.options.pageMargin + "px;\n\n}\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n\n}\n.secOH {\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	font-size: " + (dpr(16)) + "px;\n	font-weight: 200;\n	color: " + grey2 + ";\n	width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n	}\n\n.secOHSectionHeader {\n	text-transform: uppercase;\n	margin-bottom:" + (dpr(10)) + "px;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + this.options.pageMargin + "px;\n}\n\n.secOHLabel {\n	display:block;\n	float:left;\n	font-weight:600;\n}\n\n.secOHValue {\n	display:block;\n	margin-bottom:" + (dpr(8)) + "px;\n	float:right;\n	font-weight:300;\n}\n";
    Utils.insertCSS(css);
    today = moment();
    tomorrow = moment().add(1, 'day');
    todaysTimes = "";
    tomorrowsTimes = "";
    seperator = "<div class='spacer'></div>";
    ref = this.options.venue.openingHours.content;
    for (i = 0, len = ref.length; i < len; i++) {
      day = ref[i];
      if (moment(day.date).isSame(today, 'day')) {
        todaysTimes = "<div class='secOHLabel'>Heute:</div>";
        ref1 = day.times;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          openingTime = ref1[j];
          if (today.isSameOrBefore(moment(openingTime.open, 'HH:mm'))) {
            todaysTimes = todaysTimes + ("<div class='secOHValue'>" + (moment(openingTime.open, 'HH:mm').format('HH:mm')) + " - " + (moment(openingTime.close, 'HH:mm').format('HH:mm')) + "</div><div style='clear:both;'></div>");
          }
        }
      }
      if (moment(day.date).isSame(tomorrow, 'day')) {
        tomorrowsTimes = "<div class='secOHLabel'>Morgen:</div>";
        ref2 = day.times;
        for (k = 0, len2 = ref2.length; k < len2; k++) {
          openingTime = ref2[k];
          tomorrowsTimes = tomorrowsTimes + ("<div class='secOHValue'>" + (moment(openingTime.open, 'HH:mm').format('HH:mm')) + " - " + (moment(openingTime.close, 'HH:mm').format('HH:mm')) + "</div><div style='clear:both;'></div>");
        }
      }
      if (this.options.hasStroke) {
        seperator = "<div class='spacer line'></div>";
      }
    }
    this.html = "<div class='secOH'> " + seperator + " <div class='secOHSectionHeader'>" + this.options.sectionLabel + "</div> " + todaysTimes + " <div style='height:" + (dpr(16)) + "px;'></div> " + tomorrowsTimes + " </div>";
    this.size = Utils.textSize(this.html);
  }

  SectionOpeningHours.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  SectionOpeningHours.define('venue', {
    get: function() {
      if (this.options.venue === "") {
        return print("Define a venue");
      } else {
        return this.options.venue;
      }
    },
    set: function(value) {
      return this.options.venue = value;
    }
  });

  SectionOpeningHours.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionOpeningHours.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  SectionOpeningHours.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return SectionOpeningHours;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","data_venues":"data_venues","npm":"npm"}],"SectionOverallRatings":[function(require,module,exports){
var Ratings, dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

Ratings = require('Ratings').Ratings;

exports.SectionOverallRatings = (function(superClass) {
  extend(SectionOverallRatings, superClass);

  function SectionOverallRatings(options) {
    var base, base1, base2, base3, base4, css, grey2, numRatings, ratingStars, sectionHeader, seperator;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    if ((base1 = this.options).hasStroke == null) {
      base1.hasStroke = false;
    }
    if ((base2 = this.options).sectionLabel == null) {
      base2.sectionLabel = "No label defined";
    }
    if ((base3 = this.options).rating == null) {
      base3.rating = 0;
    }
    if ((base4 = this.options).ratingCount == null) {
      base4.ratingCount = 0;
    }
    SectionOverallRatings.__super__.constructor.call(this, this.options);
    this.backgroundColor = "white";
    this.name = "overallRating";
    grey2 = "#555555";
    css = ".contentContainerOverallRatings {\n\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n	margin-top:" + this.options.pageMargin + "px;\n	color: " + grey2 + ";\n	text-transform: uppercase;\n\n}\n\n.placeholderOverallRatings {\n	background-color:#FB8E7E;\n	background-image:url('modules/moduleImages/interface/img_underConstruction.png');\n	background-repeat:no-repeat;\n	background-position:center;\n	background-size:" + (dpr(40)) + "px " + (dpr(40)) + "px;\n}\n\n.totalRatings {\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	color: " + grey2 + ";\n	font-size:" + (dpr(14)) + "px;\n	line-height:" + (dpr(14)) + "px;\n}\n\n.spacer {\n	margin-top:" + this.options.pageMargin + "px;\n}\n\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n}\n\n.secSSSectionHeader {\n	text-transform: uppercase;\n	margin-bottom:" + this.options.pageMargin + "px;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + this.options.pageMargin + "px;\n}";
    Utils.insertCSS(css);
    seperator = "<div class='spacer'></div>";
    if (this.options.hasStroke) {
      seperator = "<div class='spacer line'></div>";
    }
    sectionHeader = new Layer({
      name: "" + this.options.sectionLabel,
      parent: this,
      x: this.options.pageMargin,
      backgroundColor: "transparent",
      html: seperator + " <div class='contentContainerOverallRatings'> <div class='secSTSectionHeader'>" + this.options.sectionLabel + "</div> </div>"
    });
    sectionHeader.size = Utils.textSize(sectionHeader.html);
    ratingStars = new Ratings({
      numStars: 5,
      starWidth: dpr(10),
      starHeight: dpr(10),
      backgroundColor: "transparent",
      starRating: this.options.rating,
      parent: this,
      X: 0,
      x: this.options.pageMargin,
      y: sectionHeader.maxY + this.options.pageMargin
    });
    numRatings = new Layer({
      y: ratingStars.y,
      parent: this,
      backgroundColor: "transparent",
      html: "<div class='totalRatings'>(" + this.options.ratingCount + " Bewertungen)</div>"
    });
    numRatings.size = Utils.textSize(numRatings.html);
    numRatings.maxX = this.width - this.options.pageMargin;
    numRatings.midY = ratingStars.midY;
    this.height = ratingStars.maxY + this.options.pageMargin;
  }

  SectionOverallRatings.define('rating', {
    get: function() {
      return this.options.rating;
    },
    set: function(value) {
      return this.options.rating = value;
    }
  });

  SectionOverallRatings.define('ratingCount', {
    get: function() {
      return this.options.ratingCount;
    },
    set: function(value) {
      return this.options.ratingCount = value;
    }
  });

  SectionOverallRatings.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionOverallRatings.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  SectionOverallRatings.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  return SectionOverallRatings;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","Ratings":"Ratings"}],"SectionPopularTimes":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SectionPopularTimes = (function(superClass) {
  extend(SectionPopularTimes, superClass);

  function SectionPopularTimes(options) {
    var base, base1, base2, css, grey2, seperator;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    if ((base1 = this.options).hasStroke == null) {
      base1.hasStroke = false;
    }
    if ((base2 = this.options).sectionLabel == null) {
      base2.sectionLabel = "No label defined";
    }
    SectionPopularTimes.__super__.constructor.call(this, this.options);
    this.backgroundColor = "transparent";
    this.name = "popular times";
    this.x = this.options.pageMargin;
    grey2 = "#555555";
    css = ".contentContainerPopTimes {\n\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n	height:" + (this.options.pageMargin * 5) + "px;\n	margin-top:" + this.options.pageMargin + "px;\n	color: " + grey2 + ";\n\n\n}\n\n.placeholderPopTimes {\n	background-color:#FB8E7E;\n	background-image:url('modules/moduleImages/interface/img_underConstruction.png');\n	background-repeat:no-repeat;\n	background-position:center;\n	background-size:" + (dpr(40)) + "px " + (dpr(40)) + "px;\n}\n\n.spacer {\n	margin-top:" + this.options.pageMargin + "px;\n}\n\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n}\n\n.secSSSectionHeader {\n	text-transform: uppercase;\n	margin-bottom:" + this.options.pageMargin + "px;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + this.options.pageMargin + "px;\n}";
    Utils.insertCSS(css);
    seperator = "<div class='spacer'></div>";
    if (this.options.hasStroke) {
      seperator = "<div class='spacer line'></div>";
    }
    this.html = seperator + " <div class='contentContainerPopTimes placeholderPopTimes'> <div class='secSTSectionHeader'>" + this.options.sectionLabel + "</div> </div>";
    this.size = Utils.textSize(this.html);
  }

  SectionPopularTimes.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionPopularTimes.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  SectionPopularTimes.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  return SectionPopularTimes;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"SectionPromotion":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SectionPromotion = (function(superClass) {
  extend(SectionPromotion, superClass);

  function SectionPromotion(options) {
    var base, base1, base2, base3, css, grey2, promotItem, sectionHeader, seperator;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    if ((base1 = this.options).hasStroke == null) {
      base1.hasStroke = false;
    }
    if ((base2 = this.options).sectionLabel == null) {
      base2.sectionLabel = "No label defined";
    }
    if ((base3 = this.options).sectionBG == null) {
      base3.sectionBG = "#F3F3F3";
    }
    SectionPromotion.__super__.constructor.call(this, this.options);
    this.backgroundColor = this.options.sectionBG;
    this.name = "popular times";
    this.width = Screen.width;
    grey2 = "#555555";
    css = "\n\n.spacer {\n	margin-top:" + (this.options.pageMargin * 2) + "px;\n}\n\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n}\n\n.sectionPromoSecHeader {\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	text-transform: uppercase;\n	margin-bottom:" + (this.options.pageMargin / 4) + "px;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + (dpr(48)) + "px;\n	color:" + grey2 + ";\n}";
    Utils.insertCSS(css);
    seperator = "";
    if (this.options.hasStroke) {
      seperator = "<div class='line'></div>";
    }
    this.html = "" + seperator;
    this.height = dpr(300);
    sectionHeader = new Layer({
      width: this.width - (this.options.pageMargin * 2),
      backgroundColor: "transparent",
      parent: this,
      html: " <div class='sectionPromoSecHeader'>" + this.options.sectionLabel + "</div>"
    });
    sectionHeader.x = this.options.pageMargin;
    sectionHeader.size = Utils.textSize(sectionHeader.html);
    promotItem = new Layer({
      width: this.width - (this.options.pageMargin * 2),
      parent: this,
      backgroundColor: "#FB8E7E",
      height: this.height - (this.options.pageMargin * 2),
      x: this.options.pageMargin,
      y: sectionHeader.maxY
    });
    promotItem.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(40)) + "px " + (dpr(40)) + "px"
    };
    this.height = promotItem.maxY + this.options.pageMargin;
  }

  SectionPromotion.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionPromotion.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  SectionPromotion.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  SectionPromotion.define('sectionBG', {
    get: function() {
      return this.options.sectionBG;
    },
    set: function(value) {
      return this.options.sectionBG = value;
    }
  });

  return SectionPromotion;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"SectionRatings":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SectionRatings = (function(superClass) {
  extend(SectionRatings, superClass);

  function SectionRatings(options) {
    var base, base1, base2, css, grey2, seperator;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    if ((base1 = this.options).hasStroke == null) {
      base1.hasStroke = false;
    }
    if ((base2 = this.options).sectionLabel == null) {
      base2.sectionLabel = "No label defined";
    }
    SectionRatings.__super__.constructor.call(this, this.options);
    this.backgroundColor = "transparent";
    this.name = "popular times";
    this.x = this.options.pageMargin;
    grey2 = "#555555";
    css = ".contentContainer {\n\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n	height:" + (this.options.pageMargin * 5) + "px;\n	margin-top:" + this.options.pageMargin + "px;\n	color: " + grey2 + ";\n\n\n}\n\n.placeholder {\n	background-color:#FB8E7E;\n	background-image:url('modules/moduleImages/interface/img_underConstruction.png');\n	background-repeat:no-repeat;\n	background-position:center;\n	background-size:" + (dpr(40)) + "px " + (dpr(40)) + "px;\n}\n\n.spacer {\n	margin-top:" + this.options.pageMargin + "px;\n}\n\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n}\n\n.secSSSectionHeader {\n	text-transform: uppercase;\n	margin-bottom:" + this.options.pageMargin + "px;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + this.options.pageMargin + "px;\n}";
    Utils.insertCSS(css);
    seperator = "<div class='spacer'></div>";
    if (this.options.hasStroke) {
      seperator = "<div class='spacer line'></div>";
    }
    this.html = seperator + " <div class='contentContainer placeholder'> <div class='secSTSectionHeader'>" + this.options.sectionLabel + "</div> </div>";
    this.size = Utils.textSize(this.html);
  }

  SectionRatings.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionRatings.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  SectionRatings.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  return SectionRatings;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"SectionSimpleText":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SectionSimpleText = (function(superClass) {
  extend(SectionSimpleText, superClass);

  function SectionSimpleText(options) {
    var base, base1, base2, base3, css, grey2, seperator;
    this.options = options != null ? options : {};
    if ((base = this.options).sectionLabel == null) {
      base.sectionLabel = "Heading Here";
    }
    if ((base1 = this.options).sectionContent == null) {
      base1.sectionContent = "Content Herzhafte";
    }
    if ((base2 = this.options).pageMargin == null) {
      base2.pageMargin = dpr(24);
    }
    if ((base3 = this.options).hasStroke == null) {
      base3.hasStroke = false;
    }
    SectionSimpleText.__super__.constructor.call(this, this.options);
    this.backgroundColor = "white";
    this.name = "simpleTextSection";
    grey2 = "#555555";
    css = ".spacer {\n	margin-top:" + this.options.pageMargin + "px;\n\n}\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n\n}\n.secST {\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	font-weight: 200;\n	color: " + grey2 + ";\n	width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n	margin-left: " + this.options.pageMargin + "px;\n	margin-bottom:" + this.options.pageMargin + "px;\n	}\n\n.secSTSectionHeader {\n	text-transform: uppercase;\n	margin-bottom:" + (dpr(10)) + "px;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + this.options.pageMargin + "px;\n\n}\n\n.secSTText {\n	margin-bottom:" + (dpr(4)) + "px;\n	font-size: " + (dpr(16)) + "px;\n}\n";
    Utils.insertCSS(css);
    seperator = "<div class='spacer'></div>";
    if (this.options.hasStroke) {
      seperator = "<div class='spacer line'></div>";
    }
    this.html = "<div class='secST'> " + seperator + " <div class='secSTSectionHeader'>" + this.options.sectionLabel + "</div> <div class='secSTText'>" + this.options.sectionContent + "</div> </div>";
    this.size = Utils.textSize(this.html);
  }

  SectionSimpleText.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  SectionSimpleText.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionSimpleText.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  SectionSimpleText.define('sectionContent', {
    get: function() {
      return this.options.sectionContent;
    },
    set: function(value) {
      return this.options.sectionContent = value;
    }
  });

  return SectionSimpleText;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"SectionStaff":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SectionStaff = (function(superClass) {
  extend(SectionStaff, superClass);

  function SectionStaff(options) {
    var base, base1, base2, base3, css, grey2, header, i, j, len, ref, seperator, staffInfo, staffMember, staffMemberRow, staffPic, startY;
    this.options = options != null ? options : {};
    if ((base = this.options).staffList == null) {
      base.staffList = "";
    }
    if ((base1 = this.options).hasStroke == null) {
      base1.hasStroke = false;
    }
    if ((base2 = this.options).sectionLabel == null) {
      base2.sectionLabel = "sectionLabel";
    }
    if ((base3 = this.options).pageMargin == null) {
      base3.pageMargin = dpr(24);
    }
    SectionStaff.__super__.constructor.call(this, this.options);
    this.backgroundColor = "white";
    grey2 = "#555555";
    css = "\n.container {\n	font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n	# width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n}\n.secSSSectionHeader {\n	text-transform: uppercase;\n	margin-bottom:" + this.options.pageMargin + "px;\n	color:" + grey2 + ";\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.1;\n	margin-top:" + this.options.pageMargin + "px;\n\n}\n.spacer {\n	margin-top:" + this.options.pageMargin + "px;\n\n}\n.line {\n	border-top:" + (dpr(1)) + "px solid #e3e3e3;\n	margin-bottom:" + this.options.pageMargin + "px;\n\n}\n\n.staffName {\n	font-weight:600;\n	font-size: " + (dpr(16)) + "px;\n	line-height:1.5;\n}\n\n.staffTitle {\n	font-weight:200;\n	font-size: " + (dpr(14)) + "px;\n}\n\n.staffInfoContainer {\n	color:" + grey2 + ";\n\n	margin-top:" + (dpr(4)) + "px;\n\n}";
    Utils.insertCSS(css);
    seperator = "<div class='spacer'></div>";
    if (this.options.hasStroke) {
      seperator = "<div class='spacer line'></div>";
    }
    header = new Layer({
      name: "headerLayer",
      backgroundColor: "white",
      parent: this,
      x: this.options.pageMargin,
      width: this.width - (this.options.pageMargin * 2),
      html: "<div class='container'> " + seperator + " <div class='secSSSectionHeader'>" + this.options.sectionLabel + "</div> </div>"
    });
    header.height = Utils.textSize(header.html).height;
    startY = header.maxY;
    ref = this.options.staffList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      staffMember = ref[i];
      staffMemberRow = new Layer({
        name: "Staff Member Row " + i,
        width: this.width,
        parent: this,
        backgroundColor: "transparent"
      });
      staffPic = new Layer({
        name: "staffPic",
        width: dpr(48),
        height: dpr(48),
        backgroundColor: "yellow",
        parent: staffMemberRow,
        x: this.options.pageMargin,
        borderRadius: dpr(48),
        borderWidth: dpr(2),
        borderColor: "##3399cc",
        image: staffMember.staffImage
      });
      staffInfo = new Layer({
        name: "Staff Info",
        width: this.width - (staffPic.width + this.options.pageMargin / 2),
        backgroundColor: "transparent",
        html: "<div class='staffInfoContainer'> <div class='staffName'>" + staffMember.name + "</div> <div class='staffTitle'>" + staffMember.title + "</div> </div>",
        y: staffPic.y,
        x: staffPic.maxX + this.options.pageMargin / 2,
        parent: staffMemberRow
      });
      staffInfo.size = Utils.textSize(staffInfo.html);
      staffMemberRow.height = staffPic.height + this.options.pageMargin / 2;
      staffMemberRow.y = startY + ((staffPic.height + this.options.pageMargin / 2) * i);
      this.height = staffMemberRow.maxY + this.options.pageMargin;
    }
  }

  SectionStaff.define('hasStroke', {
    get: function() {
      return this.options.hasStroke;
    },
    set: function(value) {
      return this.options.hasStroke = value;
    }
  });

  SectionStaff.define('staffList', {
    get: function() {
      if (this.options.staffList === "") {
        return print("Define a staff list");
      } else {
        return this.options.staffList;
      }
    },
    set: function(value) {
      return this.options.staffList = value;
    }
  });

  SectionStaff.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SectionStaff.define('sectionLabel', {
    get: function() {
      return this.options.sectionLabel;
    },
    set: function(value) {
      return this.options.sectionLabel = value;
    }
  });

  return SectionStaff;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"Section_BaseSection":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.BaseSection = (function(superClass) {
  extend(BaseSection, superClass);

  function BaseSection(options) {
    var base, base1, base2, title;
    this.options = options != null ? options : {};
    if ((base = this.options).sectionTitle == null) {
      base.sectionTitle = "Default title";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).hasStroke == null) {
      base2.hasStroke = false;
    }
    BaseSection.__super__.constructor.call(this, this.options);
    this.width = Screen.width;
    this.backgroundColor = "white";
    title = new TextLayer({
      font: "500 " + (dpr(16)) + "px/" + (dpr(16)) + "px FrutigerLTStd-Light, -apple-system",
      letterSpacing: dpr(1),
      style: {
        "color": "#555555"
      },
      text: this.options.sectionTitle,
      width: Screen.width - (this.options.pageMargin * 2),
      textTransform: "uppercase"
    });
    title.x = Align.center();
  }

  BaseSection.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return BaseSection;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"Section_DestinationArticle":[function(require,module,exports){
var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

exports.SlotDestinationArticle = (function(superClass) {
  extend(SlotDestinationArticle, superClass);

  Events.closeClicked = "Menu.closeClicked";

  function SlotDestinationArticle(options) {
    var base, base1, base2, css;
    this.options = options != null ? options : {};
    if ((base = this.options).list == null) {
      base.list = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).testDate == null) {
      base2.testDate = moment("05/03/2017 8:30");
    }
    SlotDestinationArticle.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = "\n\n\n\n\n";
    Utils.insertCSS(css);
  }

  SlotDestinationArticle.define('location', {
    get: function() {
      if (this.options.location === "") {
        return console.error("No location for destination article defined");
      } else {
        return this.options.list;
      }
    },
    set: function(value) {
      return this.options.list = value;
    }
  });

  SlotDestinationArticle.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  SlotDestinationArticle.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return SlotDestinationArticle;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio"}],"Template_EventDetail":[function(require,module,exports){
var BlueButton, EventCoverTile, IconButton, SectionMainArticle, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

EventCoverTile = require('EventCoverTile').EventCoverTile;

SectionMainArticle = require('SectionMainArticle').SectionMainArticle;

BlueButton = require('BlueButton').BlueButton;

IconButton = require('IconButton').IconButton;

exports.Event = (function(superClass) {
  extend(Event, superClass);

  Events.closeClicked = "Event.closeClicked";

  function Event(options) {
    var base, base1, base2, base3, closeButton, css;
    this.options = options != null ? options : {};
    if ((base = this.options).event == null) {
      base.event = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).bookable == null) {
      base2.bookable = true;
    }
    if ((base3 = this.options).testDate == null) {
      base3.testDate = moment("05/03/2017 8:30");
    }
    Event.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.html = "<div style= 'margin-top:" + ((this.height / 2) + dpr(80)) + "px; margin-bottom:auto; width:" + this.width + "px; text-align:center; line-height:1.2; '>Event Detail Not Yet Available in Prototype</div>";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    closeButton = new IconButton({
      icon: "back",
      name: "backButton",
      x: 0,
      y: 0,
      parent: this
    });
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    css = "\n\n\n\n\n";
    Utils.insertCSS(css);
  }

  Event.define('event', {
    get: function() {
      if (this.options.event === "") {
        return console.error("No Event Defined");
      } else {
        return this.options.event;
      }
    },
    set: function(value) {
      return this.options.event = value;
    }
  });

  Event.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  Event.define('bookable', {
    get: function() {
      return this.options.bookable;
    },
    set: function(value) {
      return this.options.bookable = value;
    }
  });

  Event.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return Event;

})(Layer);


},{"BlueButton":"BlueButton","DevicePixelRatio":"DevicePixelRatio","EventCoverTile":"EventCoverTile","IconButton":"IconButton","SectionMainArticle":"SectionMainArticle","npm":"npm"}],"Template_ExcursionDetail":[function(require,module,exports){
var BlueButton, ExcursionCoverTile, IconButton, SectionMainArticle, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

ExcursionCoverTile = require('ExcursionCoverTile').ExcursionCoverTile;

SectionMainArticle = require('SectionMainArticle').SectionMainArticle;

BlueButton = require('BlueButton').BlueButton;

IconButton = require('IconButton').IconButton;

exports.Excursion = (function(superClass) {
  extend(Excursion, superClass);

  Events.closeClicked = "Excursion.closeClicked";

  function Excursion(options) {
    var base, base1, base2, base3, closeButton, css;
    this.options = options != null ? options : {};
    if ((base = this.options).excursion == null) {
      base.excursion = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).bookable == null) {
      base2.bookable = true;
    }
    if ((base3 = this.options).testDate == null) {
      base3.testDate = moment("05/03/2017 8:30");
    }
    Excursion.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.html = "<div style= 'margin-top:" + ((this.height / 2) + dpr(80)) + "px; margin-bottom:auto; width:" + this.width + "px; text-align:center; line-height:1.2; '>Excursion Detail Not Yet Available in Prototype</div>";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    closeButton = new IconButton({
      icon: "back",
      name: "backButton",
      x: 0,
      y: 0,
      parent: this
    });
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    css = "\n\n\n\n\n";
    Utils.insertCSS(css);
  }

  Excursion.define('excursion', {
    get: function() {
      if (this.options.excursion === "") {
        return console.error("No Excursion Defined");
      } else {
        return this.options.excursion;
      }
    },
    set: function(value) {
      return this.options.excursion = value;
    }
  });

  Excursion.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  Excursion.define('bookable', {
    get: function() {
      return this.options.bookable;
    },
    set: function(value) {
      return this.options.bookable = value;
    }
  });

  Excursion.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return Excursion;

})(Layer);


},{"BlueButton":"BlueButton","DevicePixelRatio":"DevicePixelRatio","ExcursionCoverTile":"ExcursionCoverTile","IconButton":"IconButton","SectionMainArticle":"SectionMainArticle","npm":"npm"}],"Template_MyDay":[function(require,module,exports){
var IconButton, ItinCard, dpr, moment, myDaySegments, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

myDaySegments = require('data_myDaySegments').myDaySegments;

ItinCard = require('ItineraryDataCard').ItinCard;

IconButton = require('IconButton').IconButton;

exports.myDay = (function(superClass) {
  extend(myDay, superClass);

  Events.menuClicked = "myDay.menuClicked";

  Events.weatherClicked = "myDay.weatherClicked";

  Events.segmentsMoving = "myDay.segmentsMoving";

  function myDay(options) {
    var base, base1, base2, base3, base4, burgerButton, card, cards, css, frameXOffset, frameYOffset, images, item, j, k, len, len1, model, offsetHeight, offsetWidth, segments, weatherForecast;
    this.options = options != null ? options : {};
    if ((base = this.options).testDate == null) {
      base.testDate = moment("04/29/2017 00:00:00");
    }
    if ((base1 = this.options).sailing == null) {
      base1.sailing = "";
    }
    if ((base2 = this.options).scaleFactor == null) {
      base2.scaleFactor = 1.25;
    }
    if ((base3 = this.options).viewPadding == null) {
      base3.viewPadding = dpr(24);
    }
    if ((base4 = this.options).segmentArray == null) {
      base4.segmentArray = "";
    }
    myDay.__super__.constructor.call(this, this.options);
    moment.locale('de');
    moment.locale('de', {
      calendar: {
        lastDay: '[gestern] [um] LT',
        sameDay: '[heute] [um] LT',
        nextDay: '[morgen] [um] LT',
        lastWeek: '[Letzter] dddd [um] LT',
        nextWeek: 'dddd [um] LT',
        sameElse: 'dddd, LL [um] LT'
      }
    });
    moment.updateLocale('de', {
      longDateFormat: {
        LT: 'H:mm [Uhr]',
        LTS: 'H:mm:ss [Uhr]'
      }
    });
    model = new myDaySegments({
      sailing: this.options.sailing,
      testDate: this.options.testDate
    });
    css = ".infoPanelBlock {\n	font-family:font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;\n	width:" + (this.width - this.options.viewPadding * 2) + "px;\n	padding:" + (this.options.viewPadding / 2) + "px;\n	margin-top:" + (dpr(8)) + "px;\n	margin-left:" + (this.options.viewPadding / 2) + "px;\n\n	}\n\n.infoPanelText {\n	font-size:" + (dpr(14)) + "px;\n	color:#3399cc;\n	font-weight:600;\n	line-height:1;\n	margin-bottom:" + (dpr(5)) + "px;\n	text-transform: uppercase;\n	background-image:url('modules/moduleImages/interface/icn_chev_down.svg');\n	background-repeat:no-repeat;\n	background-position:center right;\n	background-size:5%;\n\n}\n.arrownDown {\n	margin-top: " + (dpr(35)) + "px;\n	width:" + (dpr(12)) + "px;\n	height:" + (dpr(7)) + "px;\n	background-image:url('modules/moduleImages/interface/icn_chev_down.svg');\n	background-repeat:no-repeat;\n	background-position:center;\n	background-size:100%;\n}\n\n\n}";
    Utils.insertCSS(css);
    offsetHeight = Screen.height * this.options.scaleFactor;
    offsetWidth = Screen.width * this.options.scaleFactor;
    frameXOffset = (offsetWidth - Screen.width) / 2;
    frameYOffset = (offsetHeight - Screen.height) / 2;
    console.log("offset width:", offsetWidth);
    console.log("offset height:", offsetHeight);
    segments = new PageComponent({
      height: Screen.height,
      width: Screen.width,
      scrollVertical: false,
      directionLock: true,
      name: "segmentPages",
      parent: this
    });
    segments.directionLockThreshold = {
      x: 50,
      y: 50
    };
    segments.content.clip = false;
    cards = this.createArrayOfCards(model.itineraryList);
    this.options.segmentArray = cards;
    for (j = 0, len = cards.length; j < len; j++) {
      item = cards[j];
      segments.addPage(item.container, "right");
    }
    images = [];
    for (k = 0, len1 = cards.length; k < len1; k++) {
      card = cards[k];
      images.push(card.image);
    }
    segments.onMove((function(_this) {
      return function() {
        _this.emit(Events.segmentsMoving, _this);
        segments.content.clip = false;
        return _this.updateImageParallax();
      };
    })(this));
    burgerButton = new IconButton({
      icon: "burger",
      name: "burgerButton",
      x: dpr(16),
      y: dpr(44),
      parent: this
    });
    burgerButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.menuClicked, _this);
      };
    })(this));
    weatherForecast = new IconButton({
      icon: "weather",
      name: "weatherButton",
      y: dpr(35),
      parent: this
    });
    weatherForecast.x = Align.right(-this.options.viewPadding);
    weatherForecast.onClick((function(_this) {
      return function() {
        return _this.emit(Events.weatherClicked, _this);
      };
    })(this));
    console.groupEnd();
  }

  myDay.prototype.createArrayOfCards = function(itineraryData) {
    var cardArray, gradientMask, i, indicatorTime, j, len, myDayPanel, parallaxDist, segment, segmentImage, segmentInfo, segmentItem, segmentPage;
    console.group("createArrayOfCards");
    console.log("itinerary data passed to array constructor", itineraryData);
    cardArray = [];
    parallaxDist = Screen.width / 3;
    for (i = j = 0, len = itineraryData.length; j < len; i = ++j) {
      segmentItem = itineraryData[i];
      indicatorTime = this.setIndicatorTime(segmentItem);
      segmentPage = new Layer({
        height: Screen.height,
        width: Screen.width,
        name: "segmentPage_0" + i,
        backgroundColor: Utils.randomColor(),
        clip: true
      });
      segmentImage = new Layer({
        name: "segmentImage_0" + i,
        width: Screen.width + parallaxDist,
        height: Screen.height + parallaxDist,
        image: segmentItem.segmentImage,
        parent: segmentPage
      });
      segmentImage.center();
      segmentImage.origX = segmentImage.x;
      gradientMask = new Layer({
        name: "imageGradientMask",
        size: segmentImage.size,
        y: Align.bottom(),
        parent: segmentImage
      });
      gradientMask.style.background = "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,.7) 100%)";
      segmentInfo = new ItinCard({
        sailing: this.options.sailing,
        size: Screen.size,
        backgroundColor: "transparent",
        pageType: segmentItem.pageType,
        segment: segmentItem.segment,
        parent: segmentPage
      });
      segmentInfo.y = Align.bottom(-dpr(48));
      segment = new ScrollComponent({
        height: Screen.height,
        width: Screen.width,
        scrollHorizontal: false,
        parent: segmentPage,
        directionLock: true,
        name: "scrollablePage" + i
      });
      segment.directionLockThreshold = {
        x: 50,
        y: 50
      };
      segment.segmentIndex = i;
      segment.on(Events.Move, (function(_this) {
        return function(event, layer) {
          return _this.verticalParallax(layer.parent.scrollY, layer.parent.segmentIndex);
        };
      })(this));
      myDayPanel = new Layer({
        backgroundColor: "white",
        borderRadius: dpr(8),
        width: Screen.width,
        height: Screen.height * 2,
        name: "infoPanel_" + i,
        parent: segment.content,
        shadowY: dpr(-2),
        shadowBlur: dpr(3),
        shadowColor: "rgba(0,0,0,0.3)",
        shadowSpread: dpr(1)
      });
      myDayPanel.y = this.height - dpr(48);
      myDayPanel.html = "<div class='infoPanelBlock'> <div class='infoPanelText'>" + indicatorTime + " im Überblick</div><div class='arrowdown'></div> </div>";
      cardArray.push({
        container: segmentPage,
        image: segmentImage,
        info: segmentInfo,
        gradient: gradientMask
      });
    }
    console.log("cardArray returned from create array", cardArray);
    console.groupEnd();
    return cardArray;
  };

  myDay.prototype.updateImageParallax = function() {
    var _scrollX, firstItem, item, j, lastItem, lastPageLeft, len, modulatedX, numItems, parallaxEnd, parallaxStart, ref, results;
    numItems = this.options.segmentArray.length;
    lastPageLeft = (numItems * Screen.width) - Screen.width;
    _scrollX = this.options.segmentArray[0].container.screenFrame.x;
    firstItem = this.options.segmentArray[0];
    firstItem.image.originX = 0;
    lastItem = this.options.segmentArray[this.options.segmentArray.length - 1];
    firstItem.image.scale = Utils.modulate(_scrollX, [0, Screen.width / 2], [1, 1.5], true);
    firstItem.gradient.scale = Utils.modulate(_scrollX, [0, Screen.width / 2], [1, 1.5], true);
    lastItem.image.scale = Utils.modulate(_scrollX, [-lastPageLeft, -(lastPageLeft + Screen.width)], [1, 1.5], true);
    if (_scrollX >= 0) {
      firstItem.gradient.screenFrame.x = 0;
      firstItem.image.screenFrame.x = 0;
      firstItem.container.screenFrame.x = 0;
      firstItem.container.clip = false;
    } else if (_scrollX <= -lastPageLeft) {
      lastItem.gradient.screenFrame.x = 0;
      lastItem.image.screenFrame.x = 0;
      lastItem.container.screenFrame.x = 0;
      lastItem.container.clip = false;
    } else {
      firstItem.container.clip = true;
      lastItem.container.clip = true;
    }
    ref = this.options.segmentArray;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      parallaxStart = item.image.origX;
      parallaxEnd = parallaxStart * 2;
      modulatedX = Utils.modulate(item.container.screenFrame.x, [-Screen.width, Screen.width], [parallaxEnd, 0]);
      results.push(item.image.x = modulatedX);
    }
    return results;
  };

  myDay.prototype.verticalParallax = function(yPos, index) {
    var curSegment;
    curSegment = this.options.segmentArray[index];
    curSegment.image.y = Utils.modulate(yPos, [0, 600], [0, -100]);
    return curSegment.image.scale = Utils.modulate(yPos, [-1, -1200], [1, 1.3], true);
  };

  myDay.prototype.setIndicatorTime = function(item) {
    var ref, ref1, ref2;
    if (moment().isBetween(moment(item.segment.segmentStart), moment(item.segment.segmentEnd))) {
      if (ref = moment().hour(), indexOf.call([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], ref) >= 0) {
        return "Heute";
      } else if (ref1 = moment().hour(), indexOf.call([18, 19, 20, 21, 22, 23], ref1) >= 0) {
        return "Heute Abend";
      } else if (ref2 = moment().hour(), indexOf.call([12, 13, 14, 15, 16, 17], ref2) >= 0) {
        return "Heute";
      }
    } else {
      return moment(item.segment.segmentStart).calendar().split(" um")[0];
    }
  };

  myDay.define('viewPadding', {
    get: function() {
      return this.options.viewPadding;
    },
    set: function(value) {
      return this.options.viewPadding = value;
    }
  });

  myDay.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  myDay.define('scaleFactor', {
    get: function() {
      return this.options.scaleFactor;
    },
    set: function(value) {
      return this.options.scaleFactor = value;
    }
  });

  myDay.define('segmentArray', {
    get: function() {
      return this.options.segmentArray;
    },
    set: function(value) {
      return this.options.segmentArray = value;
    }
  });

  myDay.define('sailing', {
    get: function() {
      if (this.options.sailing === "") {
        return console.error("a sailing was not defined for myDay");
      } else {
        return this.options.sailing;
      }
    },
    set: function(value) {
      return this.options.sailing = value;
    }
  });

  return myDay;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","IconButton":"IconButton","ItineraryDataCard":"ItineraryDataCard","data_myDaySegments":"data_myDaySegments","npm":"npm"}],"Template_NotAvailable":[function(require,module,exports){
var BlueButton, EventCoverTile, IconButton, SectionMainArticle, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

EventCoverTile = require('EventCoverTile').EventCoverTile;

SectionMainArticle = require('SectionMainArticle').SectionMainArticle;

BlueButton = require('BlueButton').BlueButton;

IconButton = require('IconButton').IconButton;

exports.placeholder = (function(superClass) {
  extend(placeholder, superClass);

  Events.closeClicked = "placeholder.closeClicked";

  Events.backClicked = "placeholder.backClicked";

  function placeholder(options) {
    var backButton, base, base1, closeButton, css, messageText;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    if ((base1 = this.options).featureName == null) {
      base1.featureName = "This feature";
    }
    placeholder.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center " + (dpr(100)) + "px",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    css = "\n.message {\n	font-family:font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;\n	font-size:" + (dpr(20)) + "px;\n	text-align:center;\n	line-height:2;\n	width:" + (Screen.width - (this.options.pageMargin * 4)) + "px;\n\n}\n\n.button {\n	font-family:font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;\n	font-size:" + (dpr(24)) + "px;\n	font-weight:600;\n	text-align:center;\n	line-height:1;\n	color:#FB8E7E;\n	padding:" + (dpr(20)) + "px;\n}\n\n";
    Utils.insertCSS(css);
    messageText = new Layer({
      html: "<div class='message'>" + this.options.featureName + " is not yet available in prototype</div>",
      parent: this,
      backgroundColor: "transparent"
    });
    messageText.size = Utils.textSize(messageText.html);
    messageText.x = Align.center();
    messageText.y = Align.center(-messageText.height);
    closeButton = new IconButton({
      icon: "close",
      name: "backButton",
      x: this.options.pageMargin,
      y: dpr(44),
      parent: this
    });
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    backButton = new Layer({
      backgroundColor: "white",
      html: "<div class='button'>Back to previous screen</div>",
      parent: this,
      borderRadius: dpr(8)
    });
    backButton.size = Utils.textSize(backButton.html);
    backButton.x = Align.center();
    backButton.y = Align.center(messageText.height);
    backButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.backClicked, _this);
      };
    })(this));
  }

  placeholder.define('featureName', {
    get: function() {
      return this.options.featureName;
    },
    set: function(value) {
      return this.options.featureName = value;
    }
  });

  placeholder.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  return placeholder;

})(Layer);


},{"BlueButton":"BlueButton","DevicePixelRatio":"DevicePixelRatio","EventCoverTile":"EventCoverTile","IconButton":"IconButton","SectionMainArticle":"SectionMainArticle","npm":"npm"}],"Template_VenueDetail":[function(require,module,exports){
var BlueButton, IconButton, SectionLocation, SectionMainArticle, SectionOpeningHours, SectionOverallRatings, SectionPopularTimes, SectionSimpleText, SectionStaff, VenueCoverTile, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

VenueCoverTile = require('CoverTile_Venue').VenueCoverTile;

SectionMainArticle = require('SectionMainArticle').SectionMainArticle;

SectionOpeningHours = require('SectionOpeningHours').SectionOpeningHours;

SectionSimpleText = require('SectionSimpleText').SectionSimpleText;

SectionStaff = require('SectionStaff').SectionStaff;

SectionLocation = require('SectionLocation').SectionLocation;

SectionPopularTimes = require('SectionPopularTimes').SectionPopularTimes;

SectionOverallRatings = require('SectionOverallRatings').SectionOverallRatings;

BlueButton = require('BlueButton').BlueButton;

IconButton = require('IconButton').IconButton;

exports.Venue = (function(superClass) {
  extend(Venue, superClass);

  Events.purchaseClicked = "Venue.purchaseClicked";

  Events.menuClicked = "Venue.menuClicked";

  Events.closeClicked = "Venue.closeClicked";

  function Venue(options) {
    var base, base1, base2, base3, bookableMargin, closeButton, contentContainer, coverImage, css, detailScroll, exclusive, inclusive, itemDescription, location, menuButton, navigationTint, openingHours, overallRatings, popTimes, purchaseButton, staff;
    this.options = options != null ? options : {};
    if ((base = this.options).venue == null) {
      base.venue = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).bookable == null) {
      base2.bookable = true;
    }
    if ((base3 = this.options).testDate == null) {
      base3.testDate = moment("05/03/2017 8:30");
    }
    Venue.__super__.constructor.call(this, this.options);
    this.backgroundColor = "white";
    coverImage = new VenueCoverTile({
      name: "CoverTile",
      size: this.size,
      venue: this.options.venue,
      parent: this
    });
    detailScroll = new ScrollComponent({
      name: "venueScrollView",
      size: this.size,
      scrollHorizontal: false,
      parent: this
    });
    bookableMargin = this.options.pageMargin;
    contentContainer = new Layer({
      name: "detailContentContainer",
      width: this.width,
      height: this.height,
      backgroundColor: "white",
      y: this.height,
      parent: detailScroll.content
    });
    if (this.options.bookable) {
      purchaseButton = new BlueButton({
        buttonText: "Jetzt Buchen",
        parent: this,
        name: "purchaseButton",
        pageMargin: 0,
        width: this.width,
        outlineStyle: false,
        shadowY: dpr(-1),
        shadowSpread: dpr(1),
        shadowBlur: dpr(2)
      });
      purchaseButton.y = Align.bottom();
      bookableMargin = bookableMargin + purchaseButton.height;
      purchaseButton.on(Events.Click, (function(_this) {
        return function() {
          return _this.emit(Events.purchaseClicked, _this);
        };
      })(this));
    } else {
      contentContainer.shadowY = dpr(-1);
      contentContainer.shadowSpread = dpr(1);
      contentContainer.shadowBlur = dpr(2);
    }
    itemDescription = new SectionMainArticle({
      name: "itemDescription",
      parent: contentContainer,
      width: Screen.width,
      articleTitle: this.options.venue.tagline,
      articleContent: this.options.venue.description
    });
    menuButton = new BlueButton({
      buttonText: "Speisekarte",
      width: Screen.width,
      name: "menuButton",
      y: itemDescription.maxY + this.options.pageMargin,
      pageMargin: this.pageMargin,
      outlineStyle: true,
      parent: contentContainer
    });
    menuButton.on(Events.Click, (function(_this) {
      return function() {
        return _this.emit(Events.menuClicked, _this);
      };
    })(this));
    openingHours = new SectionOpeningHours({
      parent: contentContainer,
      name: "OpeningHours",
      testDate: this.options.testDate,
      width: this.width,
      x: this.pageMargin,
      sectionLabel: "Öffnungszeiten",
      venue: this.options.venue,
      hasStroke: true,
      y: menuButton.maxY
    });
    inclusive = new SectionSimpleText({
      sectionLabel: this.options.venue.includedInPrice.title,
      sectionContent: this.options.venue.includedInPrice.content,
      name: "WhatsIncluded",
      hasStroke: true,
      parent: contentContainer,
      width: this.width,
      x: 0,
      y: openingHours.maxY
    });
    exclusive = new SectionSimpleText({
      sectionLabel: this.options.venue.excludedInPrice.title,
      sectionContent: this.options.venue.excludedInPrice.content,
      name: "WhatsNotIncuded",
      hasStroke: true,
      parent: contentContainer,
      width: this.width,
      x: 0,
      y: inclusive.maxY
    });
    if (this.options.venue.staff) {
      staff = new SectionStaff({
        staffList: this.options.venue.staff.content,
        width: this.width,
        name: "StaffList",
        sectionLabel: "Ihre Crew im " + this.options.venue.name,
        hasStroke: true,
        parent: contentContainer,
        y: exclusive.maxY
      });
    }
    location = new SectionLocation({
      width: Screen.width,
      parent: contentContainer,
      y: staff.maxY
    });
    popTimes = new SectionPopularTimes({
      width: Screen.width,
      parent: contentContainer,
      y: location.maxY,
      hasStroke: true,
      sectionLabel: "Beliebte Besuchszeiten"
    });
    overallRatings = new SectionOverallRatings({
      width: Screen.width,
      parent: contentContainer,
      y: popTimes.maxY,
      hasStroke: true,
      sectionLabel: "Kundenbewertung",
      rating: this.options.venue.rating,
      ratingCount: this.options.venue.numRatings
    });
    contentContainer.height = contentContainer.subLayers[contentContainer.subLayers.length - 1].maxY + bookableMargin;
    detailScroll.updateContent();
    navigationTint = new Layer({
      width: this.width,
      height: dpr(100),
      x: 0,
      y: 0,
      backgroundColor: "pink",
      parent: this
    });
    navigationTint.style.background = "linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)";
    closeButton = new IconButton({
      icon: "back",
      name: "back",
      x: dpr(8),
      y: dpr(44),
      parent: this
    });
    closeButton.origY = closeButton.y;
    closeButton.origX = closeButton.x;
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    detailScroll.onMove(function() {
      coverImage.y = Utils.modulate(detailScroll.scrollY, [0, 600], [0, -100]);
      coverImage.scale = Utils.modulate(detailScroll.scrollY, [-1, -1200], [1, 1.3], true);
      navigationTint.opacity = 0;
      closeButton.opacity = Utils.modulate(detailScroll.scrollY, [800, 1200], [1, 0]);
      navigationTint.opacity = Utils.modulate(detailScroll.scrollY, [800, 1200], [1, 0]);
      closeButton.y = Utils.modulate(detailScroll.scrollY, [1200, 1800], [dpr(44), -40], true);
      if (detailScroll.scrollY < 0) {
        return coverImage.y = 0;
      }
    });
    css = "\n\n\n\n\n";
    Utils.insertCSS(css);
  }

  Venue.define('venue', {
    get: function() {
      if (this.options.venue === "") {
        return console.log("No venue defined for venue template");
      } else {
        return this.options.venue;
      }
    },
    set: function(value) {
      return this.options.venue = value;
    }
  });

  Venue.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  Venue.define('bookable', {
    get: function() {
      return this.options.bookable;
    },
    set: function(value) {
      return this.options.bookable = value;
    }
  });

  Venue.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return Venue;

})(Layer);


},{"BlueButton":"BlueButton","CoverTile_Venue":"CoverTile_Venue","DevicePixelRatio":"DevicePixelRatio","IconButton":"IconButton","SectionLocation":"SectionLocation","SectionMainArticle":"SectionMainArticle","SectionOpeningHours":"SectionOpeningHours","SectionOverallRatings":"SectionOverallRatings","SectionPopularTimes":"SectionPopularTimes","SectionSimpleText":"SectionSimpleText","SectionStaff":"SectionStaff","npm":"npm"}],"Template_destinationArticle":[function(require,module,exports){
var BlueButton, IconButton, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

BlueButton = require('BlueButton').BlueButton;

IconButton = require('IconButton').IconButton;

exports.DestArticle = (function(superClass) {
  extend(DestArticle, superClass);

  Events.closeClicked = "DestArticle.closeClicked";

  function DestArticle(options) {
    var base, base1, base2, closeButton, css;
    this.options = options != null ? options : {};
    if ((base = this.options).list == null) {
      base.list = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).testDate == null) {
      base2.testDate = moment("05/03/2017 8:30");
    }
    DestArticle.__super__.constructor.call(this, this.options);
    this.backgroundColor = "#FB8E7E";
    this.html = "<div style= 'margin-top:" + ((this.height / 2) + dpr(80)) + "px; margin-bottom:auto; width:" + this.width + "px; text-align:center; line-height:1.2; '>Image List Not Yet Available in Prototype</div>";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    closeButton = new IconButton({
      icon: "close",
      name: "close",
      x: 0,
      y: 0,
      parent: this
    });
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    css = "\n\n\n\n\n";
    Utils.insertCSS(css);
  }

  DestArticle.define('location', {
    get: function() {
      if (this.options.location === "") {
        return console.error("No location for destination article defined");
      } else {
        return this.options.list;
      }
    },
    set: function(value) {
      return this.options.list = value;
    }
  });

  DestArticle.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  DestArticle.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return DestArticle;

})(Layer);


},{"BlueButton":"BlueButton","DevicePixelRatio":"DevicePixelRatio","IconButton":"IconButton","npm":"npm"}],"Template_imageList":[function(require,module,exports){
var IconButton, VenueCoverTile, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

VenueCoverTile = require("CoverTile_Venue").VenueCoverTile;

IconButton = require('IconButton').IconButton;

exports.ImageList = (function(superClass) {
  extend(ImageList, superClass);

  Events.closeClicked = "ImageList.closeClicked";

  Events.listItemClicked = "ImageList.listItemClicked";

  function ImageList(options) {
    var base, base1, base2, base3, base4, base5, base6, cards, closeButton, listTemplateScrollView, navigationTint, numItems;
    this.options = options != null ? options : {};
    if ((base = this.options).list == null) {
      base.list = "";
    }
    if ((base1 = this.options).pageMargin == null) {
      base1.pageMargin = dpr(24);
    }
    if ((base2 = this.options).testDate == null) {
      base2.testDate = moment("05/03/2017 8:30");
    }
    if ((base3 = this.options).listType == null) {
      base3.listType = "venue";
    }
    if ((base4 = this.options).compactHeight == null) {
      base4.compactHeight = dpr(100);
    }
    if ((base5 = this.options).featureHeight == null) {
      base5.featureHeight = dpr(300);
    }
    if ((base6 = this.options).scrollDist == null) {
      base6.scrollDist = dpr(180);
    }
    ImageList.__super__.constructor.call(this, this.options);
    console.group('Image List');
    console.log("List into ImageList: ", this.options.list);
    this.backgroundColor = "#FB8E7E";
    this.html = "<div style= 'margin-top:" + ((this.height / 2) + dpr(80)) + "px; margin-bottom:auto; width:" + this.width + "px; text-align:center; line-height:1.2; '>Image List Not Yet Available in Prototype</div>";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    numItems = this.options.list.length;
    cards = [];
    console.log("number of items:", numItems);
    listTemplateScrollView = new ScrollComponent({
      name: "imageListScrollView",
      size: this.size,
      scrollHorizontal: false,
      backgroundColor: "transparent",
      parent: this
    });
    this.generateList(this.options.listType, this.options.list, listTemplateScrollView);
    navigationTint = new Layer({
      width: this.width,
      height: dpr(100),
      x: 0,
      y: 0,
      backgroundColor: "pink",
      parent: this
    });
    navigationTint.style.background = "linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)";
    closeButton = new IconButton({
      icon: "back",
      name: "back",
      x: dpr(8),
      y: dpr(44),
      parent: this
    });
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    listTemplateScrollView.on(Events.ScrollStart, (function(_this) {
      return function() {
        closeButton.animate({
          opacity: 0,
          options: {
            time: 0.3
          }
        });
        return navigationTint.animate({
          opacity: 0,
          options: {
            time: 0.3
          }
        });
      };
    })(this));
    listTemplateScrollView.on(Events.Move, (function(_this) {
      return function() {
        return closeButton.opacity = 0;
      };
    })(this));
    listTemplateScrollView.on(Events.ScrollAnimationDidEnd, (function(_this) {
      return function() {
        closeButton.animate({
          opacity: 1,
          options: {
            time: 0.2
          }
        });
        return navigationTint.animate({
          opacity: 1,
          options: {
            time: 0.4
          }
        });
      };
    })(this));
    console.groupEnd();
  }

  ImageList.prototype.generateList = function(type, list, scrollview) {
    var i, listItem, venue;
    if (this.options.list.length > 0) {
      console.log("generate list of type:", type);
      console.log("from this list:", list);
      return type = (function() {
        var j, len, results;
        switch (false) {
          case type !== "venue":
            results = [];
            for (i = j = 0, len = list.length; j < len; i = ++j) {
              venue = list[i];
              listItem = this.createVenue(venue);
              listItem.y = i * listItem.height;
              listItem.parent = scrollview.content;
              listItem.data = venue;
              listItem.index = i;
              results.push(listItem.on(Events.Click, (function(_this) {
                return function(event, layer) {
                  var item;
                  item = layer.data;
                  type = "venue";
                  return _this.emit(Events.listItemClicked, item, type);
                };
              })(this)));
            }
            return results;
            break;
          default:
            return console.error("list item type not supported");
        }
      }).call(this);
    }
  };

  ImageList.prototype.createVenue = function(venue) {
    var venueCard;
    venueCard = new VenueCoverTile({
      name: venue.name + "_card",
      venue: venue,
      width: Screen.width,
      testDate: this.options.testDate,
      height: dpr(300)
    });
    return venueCard;
  };

  ImageList.define('list', {
    get: function() {
      if (this.options.list === "") {
        return console.error("No list defined for image template");
      } else {
        return this.options.list;
      }
    },
    set: function(value) {
      return this.options.list = value;
    }
  });

  ImageList.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  ImageList.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  ImageList.define('compactHeight', {
    get: function() {
      return this.options.compactHeight;
    },
    set: function(value) {
      return this.options.compactHeight = value;
    }
  });

  ImageList.define('featureHeight', {
    get: function() {
      return this.options.featureHeight;
    },
    set: function(value) {
      return this.options.featureHeight = value;
    }
  });

  ImageList.define('scrollDist', {
    get: function() {
      return this.options.scrollDist;
    },
    set: function(value) {
      return this.options.scrollDist = value;
    }
  });

  ImageList.define('listType', {
    get: function() {
      return this.options.listType;
    },
    set: function(value) {
      return this.options.listType = value;
    }
  });

  return ImageList;

})(Layer);


},{"CoverTile_Venue":"CoverTile_Venue","DevicePixelRatio":"DevicePixelRatio","IconButton":"IconButton","npm":"npm"}],"Template_topicPage":[function(require,module,exports){
var IconButton, SectionPromotion, dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

IconButton = require('IconButton').IconButton;

SectionPromotion = require('SectionPromotion').SectionPromotion;

exports.TopicPage = (function(superClass) {
  extend(TopicPage, superClass);

  Events.closeClicked = "TopicPage.closeClicked";

  Events.promoClicked = "TopicPage.promoClicked";

  Events.itemClicked = "TopicPage.itemClicked";

  function TopicPage(options) {
    var base, base1, base2, base3, category, checkForTopicCloseButton, closeButton, coverContainer, css, defaultblue, descriptor, doParallaxOnScrollUp, doRubberbandOnScrollDown, hasPromotion, i, itemMaxY, j, len, myListY, numTopicItems, promotion, topicCatLink, topicCategories, topicContentScroller, topicCount, topicHeroGradient, topicHeroImage, topicImage, topicSubtitle, topicTitle, topicTitles;
    this.options = options != null ? options : {};
    if ((base = this.options).topic == null) {
      base.topic = "";
    }
    if ((base1 = this.options).name == null) {
      base1.name = "TOPIC_PAGE";
    }
    if ((base2 = this.options).pageMargin == null) {
      base2.pageMargin = dpr(16);
    }
    if ((base3 = this.options).hasPromotion == null) {
      base3.hasPromotion = true;
    }
    TopicPage.__super__.constructor.call(this, this.options);

    /*  variables */
    topicImage = this.options.topic.image[0];
    topicTitle = this.options.topic.title;
    topicSubtitle = this.options.topic.tagline;
    topicCategories = this.options.topic.content;
    hasPromotion = this.options.topic.hasPromotion;

    /* SELF LAYER PROPERTIES */
    this.backgroundColor = "#FB8E7E";
    this.html = "<div style= 'margin-top:" + ((this.height / 2) + dpr(80)) + "px; margin-bottom:auto; width:" + this.width + "px; font-size:" + (dpr(24)) + "px; text-align:center; line-height:1.2; '>Topic Page Not Yet Available in Prototype</div>";
    this.style = {
      "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
    };
    this.backgroundColor = "white";
    defaultblue = "#3399CC";
    css = "	.topicsInfoBlock {\n		font-family:FrutigerLTStd-Light, 'Open Sans', sans-serif;\n		width: " + (this.width - (this.options.pageMargin * 2)) + "px;\n		padding:" + this.options.pageMargin + "px;\n		}\n\n	.topicTitle {\n		font-size:" + (dpr(32)) + "px;\n		font-weight:600;\n		line-height:1.1;\n		letter-spacing:-" + (dpr(1.2)) + "px;\n		text-transform:uppercase;\n		word-wrap: break-word;\n	}\n\n	.topicSubTitle {\n		font-size: " + (dpr(16)) + "px;\n		font-weight:100;\n		line-height:1;\n	}\n\n	.topicCatLinkListItem {\n		# font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n		padding-top:" + (this.options.pageMargin * 2) + "px;\n		padding-bottom:" + (this.options.pageMargin * 2) + "px;\n		border-width: 1px 0 0 0;\n		border-color: #aaa;\n		border-style: solid;\n		background-color: #FFF;\n		width:" + this.width + "px;\n		background-image: url('modules/moduleImages/interface/icn_chev.svg');\n		background-repeat:no-repeat;\n		background-size:	" + (dpr(10)) + "px; " + (dpr(15)) + "px;\n		background-position:" + (this.width - dpr(10) - this.options.pageMargin) + "px;\n}\n\n	.categoryLinkTitle {\n		font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;\n		font-size: " + (dpr(22)) + "px;\n		color: " + defaultblue + ";\n		font-weight: 600;\n		line-height: 1.2;\n		text-transform: uppercase;\n		margin-bottom: " + (dpr(3)) + "px;\n		width: " + (this.width - (this.options.pageMargin * 3)) + "px;\n		margin-left:" + this.options.pageMargin + "px;\n\n	}\n\n	.categoryLinkSubtitleGroup {\n		font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif;\n		font-size: " + (dpr(14)) + "px;\n		color: #555555;\n		font-weight: 100;\n		line-height: 1;\n		width: " + (this.width - (this.options.pageMargin * 3)) + "px;\n		margin-left:" + this.options.pageMargin + "px;\n	}\n\n	.categoryNumOfItems {\n		font-size: " + (dpr(14)) + "px;\n		font-weight: 600;\n		line-height: 1;\n	}\n	.categoryItemsDescription {\n		font-size: " + (dpr(14)) + "px;\n		font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;\n		font-weight: 100;\n		line-height: 1;\n	}\n	.orange {\n		color:orangered; !important\n		font-style: italic; !important\n	}\n\n	.topicPromotionArea {\n		font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;\n		color: #3399CC;\n		font-size: " + (dpr(14)) + "px;\n		text-transform: uppercase;\n		letter-spacing: .05em;\n		padding: " + (dpr(48)) + "px " + (dpr(24)) + "px;\n		border-top: solid 1px #aaa;\n		background-color:#F3F3F3;\n	}\n\n	.topicPromotionHeadline {\n		margin: 0 0 " + (dpr(12)) + "px 0 ;\n	}\n\n	.topicPromotionContent {\n		background-color: pink;\n		width: " + (this.width - dpr(48)) + "px;\n		height: " + (this.width - dpr(48)) + "px;\n	}\n\n";
    Utils.insertCSS(css);
    coverContainer = new Layer({
      width: this.width,
      height: this.width * 1.125,
      backgroundColor: "purple",
      parent: this,
      name: "coverContainer",
      originY: 0
    });
    topicHeroImage = new Layer({
      width: this.width,
      image: topicImage,
      height: this.width * 1.125,
      parent: coverContainer,
      name: "heroImage",
      originY: 0
    });
    if (!topicImage) {
      topicHeroImage.style = {
        "background-image": "url('modules/moduleImages/interface/img_underConstruction.png')",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": (dpr(90)) + "px " + (dpr(90)) + "px"
      };
    }
    topicHeroGradient = new Layer({
      width: this.width,
      height: this.width * 1.125,
      parent: coverContainer,
      name: "topicHeroGradient"
    });
    topicHeroGradient.style.background = "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)";
    topicTitles = new Layer({
      parent: coverContainer,
      html: "<div class= 'topicsInfoBlock'> <div class='topicTitle'>" + topicTitle + "</div> <div class='topicSubTitle'>" + topicSubtitle + "</div> </div>",
      width: this.width,
      backgroundColor: "transparent",
      name: "topicTitles"
    });
    topicTitles.size = Utils.textSize(topicTitles.html);
    topicTitles.maxY = coverContainer.height;
    topicTitles.originalY = topicTitles.y;
    topicContentScroller = new ScrollComponent({
      size: this.size,
      backgroundColor: "transparent",
      parent: this,
      name: "topicContentScroller",
      scrollHorizontal: false
    });
    topicContentScroller.content.draggable.overdragScale = .15;
    topicContentScroller.onMove(function() {
      checkForTopicCloseButton();
      if (topicContentScroller.scrollY > 0) {
        doParallaxOnScrollUp();
      }
      if (topicContentScroller.scrollY < 0) {
        return doRubberbandOnScrollDown();
      }
    });
    myListY = coverContainer.maxY;
    itemMaxY = myListY;
    if (topicCategories) {
      for (i = j = 0, len = topicCategories.length; j < len; i = ++j) {
        category = topicCategories[i];
        numTopicItems = category.members.length;
        if (numTopicItems !== 0) {
          topicCount = "<span class='categoryNumOfItems'>" + numTopicItems + " </span>";
          if (numTopicItems > 1) {
            descriptor = "<span class='categoryItemsDescription'>" + category.subtitle + "</span>";
          }
          if (numTopicItems === 1) {
            descriptor = "<span class='categoryItemsDescription'>" + category.subsingular + "</span>";
          }
        } else {
          topicCount = "";
          descriptor = "<span class='categoryItemsDescription orange'>Category not yet available in prototype</span>";
        }
        topicCatLink = new Layer({
          color: "#000000",
          parent: topicContentScroller.content,
          name: "topicCatLink" + ("" + i),
          html: "<div class='topicCatLinkListItem'> <div class='categoryLinkTitle'>" + category.title + "</div> <div class='categoryLinkSubtitleGroup'>" + topicCount + descriptor + "</div> </div>",
          y: itemMaxY
        });
        topicCatLink.data = category.members;
        topicCatLink.memberType = category.memberType;
        console.log("Topic Cat Link data", category.members);
        console.log("Topic Cat Member Type", category.memberType);
        topicCatLink.size = Utils.textSize(topicCatLink.html);
        itemMaxY = topicCatLink.maxY;
        topicCatLink.on(Events.Click, (function(_this) {
          return function(event, layer) {
            var l, t;
            l = layer.data;
            t = layer.memberType;
            return _this.emit(Events.itemClicked, l, t);
          };
        })(this));
        topicContentScroller.updateContent();
      }
    }
    if (hasPromotion) {
      promotion = new SectionPromotion({
        hasStroke: true,
        parent: topicContentScroller.content,
        sectionLabel: "Unsere Empfehlung für Sie"
      });
      promotion.y = itemMaxY;
      topicContentScroller.updateContent();
      promotion.on(Events.Click, (function(_this) {
        return function() {
          return _this.emit(Events.promoClicked, _this);
        };
      })(this));
    }
    closeButton = new IconButton({
      icon: "close",
      name: "closeButton",
      x: dpr(16),
      y: dpr(44),
      parent: this
    });
    closeButton.originalY = closeButton.y;
    closeButton.onClick((function(_this) {
      return function() {
        return _this.emit(Events.closeClicked, _this);
      };
    })(this));
    doParallaxOnScrollUp = function() {
      var scrollFactor, yModulation;
      coverContainer.y = Utils.modulate(topicContentScroller.scrollY, [0, dpr(300)], [0, dpr(-50)]);
      scrollFactor = .4;
      yModulation = Utils.modulate(topicContentScroller.scrollY, [0, 300], [topicTitles.originalY, coverContainer.height * scrollFactor]);
      topicTitles.y = yModulation;
      topicTitles.opacity = Utils.modulate(topicContentScroller.scrollY, [300, 400], [1, 0]);
      closeButton.opacity = Utils.modulate(topicContentScroller.scrollY, [400, 500], [1, 0]);
      return closeButton.y = Utils.modulate(topicContentScroller.scrollY, [300, 450], [closeButton.originaly, -40]);
    };
    doRubberbandOnScrollDown = function() {
      coverContainer.y = 0;
      return coverContainer.scale = Utils.modulate(topicContentScroller.scrollY, [-1, -1200], [1, 2.5], true);
    };
    checkForTopicCloseButton = function() {
      if (closeButton.opacity < 0) {
        return closeButton.visible = false;
      } else {
        return closeButton.visible = true;
      }
    };
  }

  TopicPage.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  TopicPage.define('topic', {
    get: function() {
      if (this.options.topic === "") {
        return console.error("Topic not defined");
      } else {
        return this.options.topic;
      }
    },
    set: function(value) {
      return this.options.topic = value;
    }
  });

  TopicPage.define('hasPromotion', {
    get: function() {
      return this.options.hasPromotion;
    },
    set: function(value) {
      return this.options.hasPromotion = value;
    }
  });

  return TopicPage;

})(Layer);


},{"DevicePixelRatio":"DevicePixelRatio","IconButton":"IconButton","SectionPromotion":"SectionPromotion"}],"WIP_HOLD_Template_imageList":[function(require,module,exports){


},{}],"accounting":[function(require,module,exports){
/*!
 * accounting.js v0.4.2
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */

(function(root, undefined) {

	/* --- Setup --- */

	// Create the local library object, to be exported or referenced globally later
	var lib = {};

	// Current version
	lib.version = '0.4.2';


	/* --- Exposed settings --- */

	// The library's settings configuration object. Contains default parameters for
	// currency and number formatting
	lib.settings = {
		currency: {
			symbol : "$",		// default currency symbol is '$'
			format : "%s%v",	// controls output: %s = symbol, %v = value (can be object, see docs)
			decimal : ".",		// decimal point separator
			thousand : ",",		// thousands separator
			precision : 2,		// decimal places
			grouping : 3		// digit grouping (not implemented yet)
		},
		number: {
			precision : 0,		// default precision on numbers is 0
			grouping : 3,		// digit grouping (not implemented yet)
			thousand : ",",
			decimal : "."
		}
	};


	/* --- Internal Helper Methods --- */

	// Store reference to possibly-available ECMAScript 5 methods for later
	var nativeMap = Array.prototype.map,
		nativeIsArray = Array.isArray,
		toString = Object.prototype.toString;

	/**
	 * Tests whether supplied parameter is a string
	 * from underscore.js
	 */
	function isString(obj) {
		return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
	}

	/**
	 * Tests whether supplied parameter is an array
	 * from underscore.js, delegates to ECMA5's native Array.isArray
	 */
	function isArray(obj) {
		return nativeIsArray ? nativeIsArray(obj) : toString.call(obj) === '[object Array]';
	}

	/**
	 * Tests whether supplied parameter is a true object
	 */
	function isObject(obj) {
		return obj && toString.call(obj) === '[object Object]';
	}

	/**
	 * Extends an object with a defaults object, similar to underscore's _.defaults
	 *
	 * Used for abstracting parameter handling from API methods
	 */
	function defaults(object, defs) {
		var key;
		object = object || {};
		defs = defs || {};
		// Iterate over object non-prototype properties:
		for (key in defs) {
			if (defs.hasOwnProperty(key)) {
				// Replace values with defaults only if undefined (allow empty/zero values):
				if (object[key] == null) object[key] = defs[key];
			}
		}
		return object;
	}

	/**
	 * Implementation of `Array.map()` for iteration loops
	 *
	 * Returns a new Array as a result of calling `iterator` on each array value.
	 * Defers to native Array.map if available
	 */
	function map(obj, iterator, context) {
		var results = [], i, j;

		if (!obj) return results;

		// Use native .map method if it exists:
		if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);

		// Fallback for native .map:
		for (i = 0, j = obj.length; i < j; i++ ) {
			results[i] = iterator.call(context, obj[i], i, obj);
		}
		return results;
	}

	/**
	 * Check and normalise the value of precision (must be positive integer)
	 */
	function checkPrecision(val, base) {
		val = Math.round(Math.abs(val));
		return isNaN(val)? base : val;
	}


	/**
	 * Parses a format string or object and returns format obj for use in rendering
	 *
	 * `format` is either a string with the default (positive) format, or object
	 * containing `pos` (required), `neg` and `zero` values (or a function returning
	 * either a string or object)
	 *
	 * Either string or format.pos must contain "%v" (value) to be valid
	 */
	function checkCurrencyFormat(format) {
		var defaults = lib.settings.currency.format;

		// Allow function as format parameter (should return string or object):
		if ( typeof format === "function" ) format = format();

		// Format can be a string, in which case `value` ("%v") must be present:
		if ( isString( format ) && format.match("%v") ) {

			// Create and return positive, negative and zero formats:
			return {
				pos : format,
				neg : format.replace("-", "").replace("%v", "-%v"),
				zero : format
			};

		// If no format, or object is missing valid positive value, use defaults:
		} else if ( !format || !format.pos || !format.pos.match("%v") ) {

			// If defaults is a string, casts it to an object for faster checking next time:
			return ( !isString( defaults ) ) ? defaults : lib.settings.currency.format = {
				pos : defaults,
				neg : defaults.replace("%v", "-%v"),
				zero : defaults
			};

		}
		// Otherwise, assume format was fine:
		return format;
	}


	/* --- API Methods --- */

	/**
	 * Takes a string/array of strings, removes all formatting/cruft and returns the raw float value
	 * Alias: `accounting.parse(string)`
	 *
	 * Decimal must be included in the regular expression to match floats (defaults to
	 * accounting.settings.number.decimal), so if the number uses a non-standard decimal 
	 * separator, provide it as the second argument.
	 *
	 * Also matches bracketed negatives (eg. "$ (1.99)" => -1.99)
	 *
	 * Doesn't throw any errors (`NaN`s become 0) but this may change in future
	 */
	var unformat = lib.unformat = lib.parse = function(value, decimal) {
		// Recursively unformat arrays:
		if (isArray(value)) {
			return map(value, function(val) {
				return unformat(val, decimal);
			});
		}

		// Fails silently (need decent errors):
		value = value || 0;

		// Return the value as-is if it's already a number:
		if (typeof value === "number") return value;

		// Default decimal point comes from settings, but could be set to eg. "," in opts:
		decimal = decimal || lib.settings.number.decimal;

		 // Build regex to strip out everything except digits, decimal point and minus sign:
		var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
			unformatted = parseFloat(
				("" + value)
				.replace(/\((?=\d+)(.*)\)/, "-$1") // replace bracketed values with negatives
				.replace(regex, '')         // strip out any cruft
				.replace(decimal, '.')      // make sure decimal point is standard
			);

		// This will fail silently which may cause trouble, let's wait and see:
		return !isNaN(unformatted) ? unformatted : 0;
	};


	/**
	 * Implementation of toFixed() that treats floats more like decimals
	 *
	 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === "0.61") that present
	 * problems for accounting- and finance-related software.
	 */
	var toFixed = lib.toFixed = function(value, precision) {
		precision = checkPrecision(precision, lib.settings.number.precision);

		var exponentialForm = Number(lib.unformat(value) + 'e' + precision);
		var rounded = Math.round(exponentialForm);
		var finalResult = Number(rounded + 'e-' + precision).toFixed(precision);
		return finalResult;
	};


	/**
	 * Format a number, with comma-separated thousands and custom precision/decimal places
	 * Alias: `accounting.format()`
	 *
	 * Localise by overriding the precision and thousand / decimal separators
	 * 2nd parameter `precision` can be an object matching `settings.number`
	 */
	var formatNumber = lib.formatNumber = lib.format = function(number, precision, thousand, decimal) {
		// Resursively format arrays:
		if (isArray(number)) {
			return map(number, function(val) {
				return formatNumber(val, precision, thousand, decimal);
			});
		}

		// Clean up number:
		number = unformat(number);

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(precision) ? precision : {
					precision : precision,
					thousand : thousand,
					decimal : decimal
				}),
				lib.settings.number
			),

			// Clean up precision
			usePrecision = checkPrecision(opts.precision),

			// Do some calc:
			negative = number < 0 ? "-" : "",
			base = parseInt(toFixed(Math.abs(number || 0), usePrecision), 10) + "",
			mod = base.length > 3 ? base.length % 3 : 0;

		// Format the number:
		return negative + (mod ? base.substr(0, mod) + opts.thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + opts.thousand) + (usePrecision ? opts.decimal + toFixed(Math.abs(number), usePrecision).split('.')[1] : "");
	};


	/**
	 * Format a number into currency
	 *
	 * Usage: accounting.formatMoney(number, symbol, precision, thousandsSep, decimalSep, format)
	 * defaults: (0, "$", 2, ",", ".", "%s%v")
	 *
	 * Localise by overriding the symbol, precision, thousand / decimal separators and format
	 * Second param can be an object matching `settings.currency` which is the easiest way.
	 *
	 * To do: tidy up the parameters
	 */
	var formatMoney = lib.formatMoney = function(number, symbol, precision, thousand, decimal, format) {
		// Resursively format arrays:
		if (isArray(number)) {
			return map(number, function(val){
				return formatMoney(val, symbol, precision, thousand, decimal, format);
			});
		}

		// Clean up number:
		number = unformat(number);

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(symbol) ? symbol : {
					symbol : symbol,
					precision : precision,
					thousand : thousand,
					decimal : decimal,
					format : format
				}),
				lib.settings.currency
			),

			// Check format (returns object with pos, neg and zero):
			formats = checkCurrencyFormat(opts.format),

			// Choose which format to use for this value:
			useFormat = number > 0 ? formats.pos : number < 0 ? formats.neg : formats.zero;

		// Return with currency symbol added:
		return useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(number), checkPrecision(opts.precision), opts.thousand, opts.decimal));
	};


	/**
	 * Format a list of numbers into an accounting column, padding with whitespace
	 * to line up currency symbols, thousand separators and decimals places
	 *
	 * List should be an array of numbers
	 * Second parameter can be an object containing keys that match the params
	 *
	 * Returns array of accouting-formatted number strings of same length
	 *
	 * NB: `white-space:pre` CSS rule is required on the list container to prevent
	 * browsers from collapsing the whitespace in the output strings.
	 */
	lib.formatColumn = function(list, symbol, precision, thousand, decimal, format) {
		if (!list || !isArray(list)) return [];

		// Build options object from second param (if object) or all params, extending defaults:
		var opts = defaults(
				(isObject(symbol) ? symbol : {
					symbol : symbol,
					precision : precision,
					thousand : thousand,
					decimal : decimal,
					format : format
				}),
				lib.settings.currency
			),

			// Check format (returns object with pos, neg and zero), only need pos for now:
			formats = checkCurrencyFormat(opts.format),

			// Whether to pad at start of string or after currency symbol:
			padAfterSymbol = formats.pos.indexOf("%s") < formats.pos.indexOf("%v") ? true : false,

			// Store value for the length of the longest string in the column:
			maxLength = 0,

			// Format the list according to options, store the length of the longest string:
			formatted = map(list, function(val, i) {
				if (isArray(val)) {
					// Recursively format columns if list is a multi-dimensional array:
					return lib.formatColumn(val, opts);
				} else {
					// Clean up the value
					val = unformat(val);

					// Choose which format to use for this value (pos, neg or zero):
					var useFormat = val > 0 ? formats.pos : val < 0 ? formats.neg : formats.zero,

						// Format this value, push into formatted list and save the length:
						fVal = useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(val), checkPrecision(opts.precision), opts.thousand, opts.decimal));

					if (fVal.length > maxLength) maxLength = fVal.length;
					return fVal;
				}
			});

		// Pad each number in the list and send back the column of numbers:
		return map(formatted, function(val, i) {
			// Only if this is a string (not a nested array, which would have already been padded):
			if (isString(val) && val.length < maxLength) {
				// Depending on symbol position, pad after symbol or at index 0:
				return padAfterSymbol ? val.replace(opts.symbol, opts.symbol+(new Array(maxLength - val.length + 1).join(" "))) : (new Array(maxLength - val.length + 1).join(" ")) + val;
			}
			return val;
		});
	};


	/* --- Module Definition --- */

	// Export accounting for CommonJS. If being loaded as an AMD module, define it as such.
	// Otherwise, just add `accounting` to the global object
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.accounting = lib;
	} else if (typeof define === 'function' && define.amd) {
		// Return the library as an AMD module:
		define([], function() {
			return lib;
		});
	} else {
		// Use accounting.noConflict to restore `accounting` back to its original value.
		// Returns a reference to the library's `accounting` object;
		// e.g. `var numbers = accounting.noConflict();`
		lib.noConflict = (function(oldAccounting) {
			return function() {
				// Reset the value of the root's `accounting` variable:
				root.accounting = oldAccounting;
				// Delete the noConflict method:
				lib.noConflict = undefined;
				// Return reference to the library to re-assign it:
				return lib;
			};
		})(root.accounting);

		// Declare `fx` on the root (global/window) object:
		root['accounting'] = lib;
	}

	// Root will be `window` in browser or `global` on the server:
}(this));

},{}],"data_burger":[function(require,module,exports){
var topics;

topics = require('data_topics').topics;

exports.burgerData = [
  {
    name: "eatdrinknightlife",
    title: "Essen, Trinken, Nightlife",
    icon: "modules/moduleImages/avatar/eatdrinknightlife.svg",
    topic: topics.eatdrinknightlife
  }, {
    name: "events",
    title: "Veranstaltungen",
    icon: "modules/moduleImages/avatar/eatdrinknightlife.svg",
    topic: topics.events
  }, {
    name: "excursions",
    title: "Ausflüge",
    icon: "modules/moduleImages/avatar/eatdrinknightlife.svg",
    topic: topics.excursions
  }, {
    name: "family",
    title: "Famile & Kinder",
    icon: "modules/moduleImages/avatar/family.svg",
    topic: topics.family
  }, {
    name: "wellnessfitness",
    title: "Shopping",
    icon: "modules/moduleImages/avatar/wellnessfitness.svg",
    topic: topics.wellnessfitness
  }, {
    name: "shopping",
    title: "Shopping",
    icon: "modules/moduleImages/avatar/eatdrinknightlife.svg",
    topic: topics.shopping
  }
];


},{"data_topics":"data_topics"}],"data_catalog":[function(require,module,exports){
var categories, subcategories;

subcategories = {
  restaurants: "Restaurants",
  nightlife: "Nightlife",
  entertainment: "Entertainment Venues",
  facilitiesKids: "Einrichtungen für Kinder",
  familyEvents: "Veranstaltungen für Familien",
  familyExcursions: "Familienfreundliche Ausflüge",
  familyProducts: "Family Products",
  familyShops: "Family Shopping",
  wssFacilities: "Wellness, Sport & Spa Einrichtungen",
  wssEvents: "Wellness, Sport & Spa Events",
  wssExcursions: "Active Excursions",
  wssProducts: "Wellness, Sport & Spa Produkte",
  wssShops: "Wellness Sport and Spa Shops",
  eventsFamiles: "Family Events",
  eventsEntertainment: "Unterhaltung",
  eventsClasses: "Classes",
  eventsSpecial: "Exklusive Events",
  eventsInsider: "Insider Events"
};

categories = {
  eat: {
    name: "Eat, Drink & Nightlife",
    subcategories: [subcategories.restaurants, subcategories.nightlife, subcategories.entertainment]
  },
  family: {
    name: "Kids and Family",
    subcategories: [subcategories.facilitiesKids, subcategories.familyEvents, subcategories.familyExcursions, subcategories.familyProducts, subcategories.familyShops]
  },
  wss: {
    name: "Wellness, Sport & Spa",
    subcategories: [subcategories.wssFacilities, subcategories.wssEvents, subcategories.wssExcursions, subcategories.wssProducts]
  },
  wss: {
    name: "Wellness, Sport & Spa",
    subcategories: [subcategories.wssFacilities, subcategories.wssEvents, subcategories.wssExcursions, subcategories.wssProducts, subcategories.wssShops]
  }
};

module.exports = {
  categories: categories,
  catalog: [
    {
      itemName: "Rossini",
      type: "Restaurant",
      categories: [categories.eat, categories.family]
    }, {
      itemName: "Buffalo Steakhouse",
      type: "Restaurant",
      categories: [categories.eat]
    }, {
      itemName: "Club 123",
      type: "Bar",
      categories: [categories.eat]
    }
  ]
};


},{}],"data_categories":[function(require,module,exports){
exports.categories = {
  eat: "Eat, Drink & Nightlife",
  family: "Kids and Family"
};


},{}],"data_eventTimes":[function(require,module,exports){
exports.eventTimes = {
  event001: [
    {
      date: "04/29/2017",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }
      ]
    }, {
      date: "04/31/2017",
      times: [
        {
          open: "7:00",
          close: ""
        }
      ]
    }
  ],
  event002: [
    {
      date: "04/29/2017",
      times: [
        {
          open: "15:00",
          close: "16:00"
        }
      ]
    }, {
      date: "04/30/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }
      ]
    }, {
      date: "04/31/2017",
      times: [
        {
          open: "7:00",
          close: ""
        }
      ]
    }
  ],
  event003: [
    {
      date: "04/29/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }
      ]
    }, {
      date: "04/30/2017",
      times: [
        {
          open: "15:00",
          close: "16:00"
        }
      ]
    }, {
      date: "04/31/2017",
      times: [
        {
          open: "19:30",
          close: "20:30"
        }
      ]
    }
  ],
  event004: [
    {
      date: "04/29/2017",
      times: [
        {
          open: "18:30",
          close: "20:00"
        }
      ]
    }, {
      date: "04/30/2017",
      times: [
        {
          open: "10:30",
          close: "11:30"
        }, {
          open: "14:30",
          close: "15:30"
        }
      ]
    }, {
      date: "04/31/2017",
      times: [
        {
          open: "17:30",
          close: "18:30"
        }
      ]
    }, {
      date: "05/01/2017",
      times: [
        {
          open: "10:30",
          close: "11:30"
        }, {
          open: "18:30",
          close: "19:30"
        }
      ]
    }, {
      date: "05/02/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }, {
          open: "18:30",
          close: "19:30"
        }
      ]
    }, {
      date: "05/03/2017",
      times: [
        {
          open: "10:30",
          close: "11:30"
        }, {
          open: "18:3)0",
          close: "19:00"
        }
      ]
    }, {
      date: "05/04/2017",
      times: [
        {
          open: "10:00",
          close: "11:00"
        }, {
          open: "15:30",
          close: "16:30"
        }, {
          open: "20:00",
          close: "21:30"
        }
      ]
    }
  ],
  event005: [
    {
      date: "05/01/2017",
      times: [
        {
          open: "14:00",
          close: "17:00"
        }
      ]
    }, {
      date: "05/02/2017",
      times: [
        {
          open: "9:00",
          close: "12:00"
        }
      ]
    }, {
      date: "05/03/2017",
      times: [
        {
          open: "9:00",
          close: "12:00"
        }
      ]
    }
  ],
  event006: [
    {
      date: "04/29/2017",
      times: [
        {
          open: "19:00",
          close: "20:30"
        }
      ]
    }, {
      date: "04/30/2017",
      times: [
        {
          open: "14:00",
          close: "15:00"
        }
      ]
    }
  ],
  event007: [
    {
      date: "05/30/2017",
      times: [
        {
          open: "12:30",
          close: ""
        }
      ]
    }
  ],
  event008: [
    {
      date: "04/30/2017",
      times: [
        {
          open: "10:00",
          close: "11:00"
        }, {
          open: "16:00",
          close: "17:00"
        }, {
          open: "19:00",
          close: "20:00"
        }
      ]
    }, {
      date: "05/30/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }
      ]
    }, {
      date: "05/01/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }, {
          open: "11:00",
          close: "12:00"
        }
      ]
    }, {
      date: "05/02/2017",
      times: [
        {
          open: "10:30",
          close: "11:30"
        }, {
          open: "16:00",
          close: "17:00"
        }
      ]
    }, {
      date: "05/03/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }
      ]
    }, {
      date: "05/04/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }, {
          open: "14:00",
          close: "15:00"
        }, {
          open: "18:00",
          close: "19:00"
        }
      ]
    }
  ],
  event009: [
    {
      date: "04/30/2017",
      times: [
        {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/02/2017",
      times: [
        {
          open: "19:30",
          close: "21:30"
        }
      ]
    }
  ],
  event010: [
    {
      date: "05/01/2017",
      times: [
        {
          open: "10:00",
          close: "11:00"
        }
      ]
    }, {
      date: "05/04/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }
      ]
    }
  ],
  event011: [
    {
      date: "05/01/2017",
      times: [
        {
          open: "19:00",
          close: "21:00"
        }
      ]
    }
  ],
  event012: [
    {
      date: "05/01/2017",
      times: [
        {
          open: "19:00",
          close: "19:45"
        }, {
          open: "20:30",
          close: "21:15"
        }
      ]
    }
  ],
  event013: [
    {
      date: "05/01/2017",
      times: [
        {
          open: "21:00",
          close: ""
        }
      ]
    }, {
      date: "05/03/2017",
      times: [
        {
          open: "21:00",
          close: ""
        }
      ]
    }
  ],
  event014: [
    {
      date: "05/01/2017",
      times: [
        {
          open: "11:00",
          close: "12:00"
        }, {
          open: "16:00",
          close: "17:00"
        }
      ]
    }, {
      date: "05/02/2017",
      times: [
        {
          open: "10:30",
          close: "11:30"
        }, {
          open: "16:00",
          close: "17:00"
        }
      ]
    }
  ],
  event015: [
    {
      date: "30/04/2017",
      times: [
        {
          open: "15:00",
          close: "16:30"
        }
      ]
    }, {
      date: "05/04/2017",
      times: [
        {
          open: "15:30",
          close: "17:00"
        }
      ]
    }
  ],
  event016: [
    {
      date: "05/02/2017",
      times: [
        {
          open: "18:30",
          close: "20:00"
        }
      ]
    }
  ],
  event017: [
    {
      date: "05/02/2017",
      times: [
        {
          open: "14:00",
          close: "15:00"
        }
      ]
    }
  ],
  event018: [
    {
      date: "05/02/2017",
      times: [
        {
          open: "18:00",
          close: "20:00"
        }
      ]
    }, {
      date: "05/04/2017",
      times: [
        {
          open: "14:00",
          close: "16:00"
        }
      ]
    }
  ],
  event019: [
    {
      date: "05/02/2017",
      times: [
        {
          open: "20:00",
          close: ""
        }
      ]
    }
  ],
  event020: [
    {
      date: "05/02/2017",
      times: [
        {
          open: "19:00",
          close: "20:00"
        }
      ]
    }
  ],
  event021: [
    {
      date: "05/03/2017",
      times: [
        {
          open: "19:00",
          close: "19:45"
        }
      ]
    }
  ],
  event022: [
    {
      date: "05/03/2017",
      times: [
        {
          open: "19:30",
          close: "20:30"
        }
      ]
    }
  ],
  event023: [
    {
      date: "05/03/2017",
      times: [
        {
          open: "16:00",
          close: "18:00"
        }
      ]
    }
  ],
  event024: [
    {
      date: "05/03/2017",
      times: [
        {
          open: "20:15",
          close: "21:30"
        }
      ]
    }
  ],
  event025: [
    {
      date: "05/03/2017",
      times: [
        {
          open: "21:00",
          close: ""
        }
      ]
    }
  ],
  event026: [
    {
      date: "05/05/2017",
      times: [
        {
          open: "20:00",
          close: ""
        }
      ]
    }
  ],
  event027: [
    {
      date: "05/05/2017",
      times: [
        {
          open: "14:30",
          close: "17:00"
        }
      ]
    }
  ],
  event028: [
    {
      date: "05/04/2017",
      times: [
        {
          open: "18:00",
          close: ""
        }
      ]
    }
  ],
  event029: [
    {
      date: "05/04/2017",
      times: [
        {
          open: "17:00",
          close: "20:00"
        }
      ]
    }
  ],
  event030: [
    {
      date: "05/04/2017",
      times: [
        {
          open: "21:00",
          close: "23:00"
        }
      ]
    }
  ],
  event031: [
    {
      date: "05/05/2017",
      times: [
        {
          open: "11:00",
          close: ""
        }
      ]
    }
  ],
  event032: [
    {
      date: "05/05/2017",
      times: [
        {
          open: "14:00",
          close: "15:00"
        }, {
          open: "19:00",
          close: "20:00"
        }
      ]
    }, {
      date: "05/01/2017",
      times: [
        {
          open: "17:00",
          close: "19:00"
        }
      ]
    }
  ],
  event033: [
    {
      date: "04/30/2017",
      times: [
        {
          open: "17:00",
          close: "18:30"
        }
      ]
    }, {
      date: "05/05/2017",
      times: [
        {
          open: "18:00",
          close: "19:30"
        }
      ]
    }
  ],
  event034: [
    {
      date: "05/05/2017",
      times: [
        {
          open: "18:00",
          close: "18:45"
        }
      ]
    }
  ],
  event035: [
    {
      date: "05/05/2017",
      times: [
        {
          open: "16:15",
          close: "17:00"
        }
      ]
    }
  ]
};


},{}],"data_events":[function(require,module,exports){
var eventTimes, tags, venues;

tags = require('data_tags').tags;

venues = require('data_venues').venues;

eventTimes = require('data_eventTimes').eventTimes;

exports.events = {
  event001: {
    title: "Shuffleboard mit Julian",
    date: "04/29/2017",
    times: eventTimes.event001,
    description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/shuffleboard.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [
      {
        label: "Erwachsener",
        price: 29.80
      }, {
        label: "Kinder",
        price: 19.80
      }, {
        label: "Senior",
        price: 18.00
      }
    ],
    minimumAge: ""
  },
  event002: {
    title: "Eiskaffee und Eisschokolade mit Vanilleeis",
    date: "04/29/2017",
    times: eventTimes.event002,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/eiskaffee.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.frenchkiss],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event003: {
    title: "Einsteiger Tanzkurs: Cha-Cha-Cha mit Tanzlehrer Matthias",
    date: "04/29/2017",
    times: eventTimes.event003,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/tanzkurs.jpg"],
    meetingpoint: [venues.rossini],
    takesplaceat: [],
    notInMyDay: false,
    isBookable: true,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event004: {
    title: "Dart mit Michael",
    date: "04/29/2017",
    times: eventTimes.event004,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/dart.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event005: {
    title: "Familienzeit im Organic Spa",
    date: "04/29/2017",
    times: eventTimes.event005,
    takesplaceat: "Body & Soul Organic Spa, Deck 8",
    description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object",
    tags: [tags.family],
    images: ["modules/moduleImages/events/spa.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.buffalosteakhouse],
    notInMyDay: false,
    isBookable: true,
    hasExtraFee: true,
    prices: [
      {
        label: "Erwachsener",
        price: 29.80
      }, {
        label: "Kinder",
        price: 19.80
      }
    ],
    minimumAge: ""
  },
  event006: {
    title: "AIDA Reisequiz",
    date: "04/30/2017",
    times: eventTimes.event006,
    takesplaceat: "Theatrium, Deck 6-8",
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover],
    images: ["modules/moduleImages/events/reisequiz.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: []
  },
  event007: {
    title: "Offiziers-Shaken im 5. Element",
    date: "04/30/2017",
    times: eventTimes.event007,
    description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object.",
    tags: [tags.enjoy, tags.discover],
    images: ["modules/moduleImages/events/shaken.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.weitewelt],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: "18"
  },
  event008: {
    title: "Boccia",
    date: "04/30/2017",
    times: eventTimes.event008,
    description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/boccia.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.belladonna],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event009: {
    title: "Kids-Kino: Mein Freund, der Delfin 2",
    date: "04/30/2017",
    times: eventTimes.event009,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.family, tags.entertainmenrt],
    images: ["modules/moduleImages/events/kids.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.buffalosteakhouse],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event010: {
    title: "Workshop: Make-up",
    date: "04/30/2017",
    times: eventTimes.event010,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/event1.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.east],
    notInMyDay: false,
    isBookable: true,
    hasExtraFee: true,
    prices: [
      {
        label: "Erwachsener",
        price: 29.80
      }
    ],
    minimumAge: "16"
  },
  event011: {
    title: "Fotoshooting: Lupo-Portraits",
    date: "05/01/2017",
    times: eventTimes.event011,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover],
    images: ["modules/moduleImages/events/fotoshooting.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.casanova],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event012: {
    title: "Rock-Show: Addicted To Love",
    date: "05/01/2017",
    times: eventTimes.event012,
    description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object.",
    tags: [tags.entertainment],
    images: ["modules/moduleImages/events/rockshow.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.buffalosteakhouse],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event013: {
    title: "Kneipenabend",
    date: "05/01/2017",
    times: eventTimes.event013,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover, tags.enjoy],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: "18"
  },
  event014: {
    title: "Power-Plate-Gruppentraining",
    date: "05/01/2017",
    times: eventTimes.event014,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/shuffleboard.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.fuego],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event015: {
    title: "Küchenführung",
    date: "05/01/2017",
    times: eventTimes.event015,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.marktrestaurant],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event016: {
    title: "Vorrrag von Beatrice Barden: 24 Typen – Farb- und Stilberatung",
    date: "05/02/2017",
    times: eventTimes.event016,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/tanzkurs.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event017: {
    title: "Fruit-Carving-Workshop",
    date: "05/02/2017",
    times: eventTimes.event017,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/spa.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.rossini],
    notInMyDay: false,
    isBookable: true,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event018: {
    title: "Brauseminar",
    date: "05/02/2017",
    times: eventTimes.event018,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover, tags.enjoy],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: true,
    hasExtraFee: false,
    prices: [],
    minimumAge: "18"
  },
  event019: {
    title: "Kunstauktion",
    date: "05/02/2017",
    times: eventTimes.event019,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.family],
    images: ["modules/moduleImages/events/dart.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.marktrestaurant],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event020: {
    title: "Nautische Stunde mit Kapitän Boris Becker",
    date: "05/02/2017",
    times: eventTimes.event020,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.family, tags.discover],
    images: ["modules/moduleImages/events/kids.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.buffalosteakhouse],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event021: {
    title: "Stephans Prime Time",
    date: "05/03/2017",
    times: eventTimes.event021,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.entertainment],
    images: ["modules/moduleImages/events/reisequiz.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event022: {
    title: "Baraktion: Aperitif Amaretto Sour",
    date: "05/03/2017",
    times: eventTimes.event022,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/shaken.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.weitewelt],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: "18"
  },
  event023: {
    title: "3D-Modelling",
    date: "05/03/2017",
    times: eventTimes.event023,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover, tags.family],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.rossini],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event024: {
    title: "Party-Show: Absolutly Everybody",
    date: "05/03/2017",
    times: eventTimes.event024,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.family, tags.entertainment],
    images: ["modules/moduleImages/events/shaken.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.casanova],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event025: {
    title: "Flitterwochen- und Hochzeitstreff",
    date: "05/03/2017",
    times: eventTimes.event025,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.family],
    images: ["modules/moduleImages/events/fotoshooting.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.belladonna],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event026: {
    title: "Party-Show: Grandmaster Flash Forever",
    date: "05/04/2017",
    times: eventTimes.event026,
    description: "A-hip, a-hop, a-hippi hippi hip hop, we don't stop... och ne, das waren ja die Sugarhill Gang, aber egal, Grandmaster Flash ist  noch einen Zacken schärfer. Und jetzt alle im Chor: 'Se taun is leik ä tschungl sam teims, mäks me wonder hau ei kiip from going ander!'.",
    tags: [tags.entertainment],
    images: ["modules/moduleImages/events/grandmaster.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.fuego],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event027: {
    title: "Multimedia-Workshop mit Holger",
    date: "05/04/2017",
    times: eventTimes.event027,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.discover],
    images: ["modules/moduleImages/events/moreshow.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.buffalosteakhouse],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event028: {
    title: "Texas Hold'em Poker-Turnier",
    date: "05/04/2017",
    times: eventTimes.event028,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.entertainment],
    images: ["modules/moduleImages/events/boccia.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.weitewelt],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: "18"
  },
  event029: {
    title: "Kochschule mit Tim Mälzer: Fleisch & Dips",
    date: "05/04/2017",
    times: eventTimes.event029,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.rossini],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: "16"
  },
  event030: {
    title: "Best of Nightfly",
    date: "05/04/2017",
    times: eventTimes.event030,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.entertainment],
    images: ["modules/moduleImages/events/rockshow.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.Nightfly],
    notInMyDay: false,
    isBookable: true,
    hasExtraFee: true,
    prices: [
      {
        label: "Erwachsener",
        price: 10.00
      }
    ],
    minimumAge: "18"
  },
  event031: {
    title: "Frühschoppen mit Bastian",
    date: "05/05/2017",
    times: eventTimes.event031,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.enjoy],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: "18"
  },
  event032: {
    title: "African Dance mit Julian",
    date: "05/05/2017",
    times: eventTimes.event032,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.family],
    images: ["modules/moduleImages/events/tanzkurs.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.fuego],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event033: {
    title: "Familien-Minigolf",
    date: "05/05/2017",
    times: eventTimes.event033,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.weitewelt],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event034: {
    title: "Birtes Welt",
    date: "05/05/2017",
    times: eventTimes.event034,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/kneipenabend.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.east],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  },
  event035: {
    title: "Boccia",
    date: "05/05/2017",
    times: eventTimes.event035,
    description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time.",
    tags: [tags.wellnessfitness],
    images: ["modules/moduleImages/events/boccia.jpg"],
    meetingpoint: [],
    takesplaceat: [venues.brauhaus],
    notInMyDay: false,
    isBookable: false,
    hasExtraFee: false,
    prices: [],
    minimumAge: ""
  }
};


},{"data_eventTimes":"data_eventTimes","data_tags":"data_tags","data_venues":"data_venues"}],"data_excursionsByLocation":[function(require,module,exports){
var excursions;

excursions = require('data_excursions').excursions;

exports.excursionsByLocation = {
  DEHAM: [],
  GBSOU: [excursions.SOU01, excursions.SOU02, excursions.SOU03, excursions.SOU04, excursions.SOU05],
  FRLEH: [excursions.LEH01, excursions.LEH02, excursions.LEH03, excursions.LEH04, excursions.LEH05],
  BEZEE: [excursions.ZEE01, excursions.ZEE02, excursions.ZEE03, excursions.ZEE04, excursions.ZEE05],
  NLRTM: [excursions.RTM01, excursions.RTM02, excursions.RTM03, excursions.RTM04, excursions.RTM05]
};


},{"data_excursions":"data_excursions"}],"data_excursionsNew":[function(require,module,exports){
exports.excursionsNew = {
  "excursions": [
    {
      name: "Englands Hauptstadt: Southampton",
      tagline: "Panoramafahrt entlang der wichtigsten Sehenswürdigkeiten!",
      port: "ports.GBSOU.name",
      duration: 2,
      duration_measurement: "hrs",
      cost_adult: "1,99",
      cost_child: "0,00",
      cost_currency: "Euros"
    }, {
      name: "Frankreichs Hauptstadt: LeHavre!",
      tagline: "Besuchen Sie eine der beliebtesten Attraktionen der Stadt!",
      port: "ports.FRLEH.name",
      duration: 2,
      duration_measurement: "hrs",
      cost_adult: "1,99",
      cost_child: "0,00",
      cost_currency: "Euros"
    }, {
      name: "Hamburgs Hauptstadt: Hamburg!",
      tagline: "Lernen Sie die Hauptstadt per Bus & Boot kennen!",
      port: "portsDEHAM.name",
      duration: 2,
      duration_measurement: "hrs",
      cost_adult: "1,99",
      cost_child: "0,00",
      cost_currency: "Euros"
    }
  ]
};


},{}],"data_excursions":[function(require,module,exports){
var locations, tags;

locations = require('data_locations').locations;

tags = require('data_tags').tags;

exports.excursions = {
  PAKPR1: {
    name: "Paket 1 - Individuell entdecken",
    type: "packet",
    tagline: "Erobern Sie die Metropolen mit einem Preisvorteil",
    locations: [locations.GBSOU, locations.FRLEH, locations.NLRTM],
    images: [],
    tags: [tags.culture, tags.family],
    duration: 9,
    costs: [
      {
        label: "Erwachsener",
        price: 169.00
      }, {
        label: "Children",
        price: 89.00
      }
    ],
    difficulty: 1,
    startTime: {
      11: 45
    },
    includedItems: [],
    minimumAge: 2,
    description: "Schlendern Sie entlang der romantischen Grachten von Amsterdam, seien Sie Gast in der Stadt, die einst das zu Hause von Van Gogh war. Lauschen Sie dem Glockenschlag von Big Ben und beobachten Sie die tägliche Zeremonie der Wachablösung am Buckingham Palace. Lassen Sie sich bei dem unvergesslichen Blick über Paris vom Eiffelturm aus frischen Wind um die Nase wehen oder werden Sie während eines Besuchs im Louvre zum Kunstliebhaber - sofern Sie es nicht schon sind.  Diese und viele weitere historische und kulturelle Sehenswürdigkeiten können Sie frei nach ihren Wünschen entdecken. Wir bringen Sie zu diesen eindrucksvollen Orten und überlassen Ihnen die Wahl, welche persönlichen Highlights von Ihnen erobert werden sollen. Eigens dafür haben wir für Sie ein Paket erstellt, dass nur noch darauf wartet reserviert zu werden, damit Sie in den Genuss dieses einmaligen Angebots kommen können.",
    includedExcursions: ["Amsterdam auf eigene Faust", "London auf eigene Faust", "Paris auf eigene Faust"],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Fotostopps und Dauer der Freizeit verkehrsabhängig, Zustieg des Reiseleiters auf dem Weg nach London, Rückfahrt ohne Reiseleiter Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten.",
    conditions: "Die Ausflüge für dieses Paket sind festgelegt und können nicht getauscht werden. An Bord ist das Paket nach dem Buchungsschluss des Hafens Southampton nicht mehr stornierbar."
  },
  PAKPR3: {
    name: "Paket 3 - Endlos entdecken",
    type: "packet",
    tagline: "Seien Sie wählerisch - Nutzen Sie einen Preisvorteil bis zu 101,80 € p.P.",
    locations: [locations.GBSOU, locations.FRLEH, locations.NLRTM],
    images: [],
    tags: [tags.culture, tags.family],
    duration: 9,
    costAdults: 333.00,
    costChildren: 249.00,
    difficulty: 1,
    startTime: 1145,
    includedItems: [],
    minimumAge: 2,
    description: "Wo die Reise Sie hinführt, liegt bei diesem Paket ganz allein in Ihrem Ermessen. Ihrem Entdeckerdrang sind keine Grenzen gesetzt. In Southampton bietet sich ein Trip in die englische Hauptstadt London an. Mit SOU05 erleben Sie die Hauptsehenswürdigkeiten und können freie Zeit zum Bummeln nutzen. Sollten Sie sich Ihre Zeit in London lieber selbst gestalten wollen, empfehlen wir Ihnen die Tour SOU07. Ein unvergessliches Highlight ist SOU08. Bei dem Sie London mit einer Bootstour auf der Themse und bei einer Stadtrundfahrt kennenlernen können.<br> In Le Havre angekommen, lohnt sich ein Besuch von Honfleur. Schlendern Sie mit uns auf der Tour LEH03 durch die gemütlichen Gassen der alten Seefahrerstadt, bevor es weiter geht zum Seebad Deauville. Mit LEH08 bringen wir Sie nach Honfleur und sie können Ihre Zeit für individuelle Erkundungen nutzen. Ein Highlight ist Frankreichs Hauptstadt Paris. Mit der Tour LEH11 können Sie bei einer Panoramafahrt Pariser Highlights sehen und die Kathedrale Notre-Dame de Paris besichtigen.<br> In Zeebrügge bieten wir Ihnen bei dem Ausflug ZEE01 eine Bootsfahrt auf den romantischen Grachten sowie einen Spaziergang durch die mittelalterliche Stadt an. ZEE03 ist für individuelle Erkundungen der Hansestadt geeignet. In Europas Hauptstadt Brüssel entdecken Sie mit der Tour ZEE06 Sehenswürdigkeiten wie Manneken PIS, den Königlichen Palast oder den Japanischen Turm. Das alte und neue Rotterdam können Sie mit einer Panoramafahrt RTM06 erkunden. Sollten Sie den Wunsch haben einen Trip nach Amsterdam zu unternehmen, bietet sich für Sie auf dem Ausflug RTM01 die Möglichkeit per Bus und Boot die Stadt zu erleben und dort Freizeit zu verbringen. Für Selbstentdecker ist die Tour RTM03 empfehlenswert, um Amsterdam ausgiebig allein zu erobern. Neben den aufgeführten Touren, haben wir weitere Ausflüge im Programm. Schauen Sie einfach in unser MyAIDA-Reiseportal und entscheiden Sie sich für die schönsten und exklusivsten Touren aus unserem Ausflugsprogramm. Somit machen Sie jeden Tag zum Highlight und Ihren Urlaub zu einem unvergesslichen Erlebnis. <br> Sehr gern können Sie uns Ihre Auswahl bereits vorab mitteilen. Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen dann am Anreisetag in Ihrer Kabine für Sie bereit. ",
    includedExcursions: ["Kombinieren Sie Ihre Ausflüge frei nach Ihren Wünschen", "Bis 4 Ausflüge aussuchen", "Privat-Touren, Bike/Pedelec, Segway und Golf sind ausgenommen"],
    ticketInfo: "Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt. Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten.",
    addlInfo: "",
    conditions: "An Bord ist das Paket nach dem Buchungsschluss des Hafens Southampton nicht mehr stornierbar."
  },
  SOU01: {
    name: "Englands Hauptstadt: London",
    type: "excursion",
    tagline: "Panoramafahrt entlang der wichtigsten Sehenswürdigkeiten!",
    locations: [locations.GBSOU],
    images: ["modules/moduleImages/excursions/GBSOU/SOU01cover.jpg"],
    tags: [tags.culture, tags.family],
    duration: 9,
    costAdults: 71.96,
    costChildren: 50.36,
    difficulty: 2,
    startTime: 1115,
    includedItems: [],
    minimumAge: 2,
    description: "Der Ausflug beginnt mit einer 120-minütigen Landschaftsfahrt nach London. Anschließend folgt eine 2 h Orientierungsfahrt per Bus, vorbei an bekannten Sehenswürdigkeiten wie dem Parlamentsgebäude, dem Buckingham-Palast und der Westminster Abbey. Im Anschluss stehen ca. 1,5 h Freizeit zum Mittagessen, Bummeln und Einkaufen zur Verfügung. Danach erfolgt die Rückfahrt zum Schiff.",
    stations: [
      {
        startTime: 1115,
        endTime: "--",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: 1130,
        endTime: 1330,
        description: "Busfahrt in die Metropole London"
      }, {
        startTime: 1330,
        endTime: 1530,
        description: "Orientierungsfahrt entlang der wichtigsten Sehenswürdigkeiten wie Parlamentsgebäude, Buckingham-Palast und Westminster Abbey"
      }, {
        startTime: 1530,
        endTime: 1700,
        description: "Freizeit zum Mattagessen"
      }, {
        startTime: 1700,
        endTime: 1900,
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Fotostopps und Dauer der Freizeit verkehrsabhängig, Zustieg des Reiseleiters auf dem Weg nach London, Rückfahrt ohne Reiseleiter Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  SOU02: {
    name: "Königliche Hauptstadt & Tower of London",
    type: "excursion",
    tagline: "Besuchen Sie eine der beliebtesten Attraktionen der Stadt!",
    locations: [locations.GBSOU],
    images: ["modules/moduleImages/excursions/GBSOU/SOU02cover.jpg"],
    tags: [tags.culture, tags.family],
    duration: 10,
    costAdults: 98.95,
    costChildren: 69.25,
    difficulty: 2,
    startTime: 1000,
    includedItems: [],
    minimumAge: 2,
    description: "Der Ausflug beginnt mit einer 120-minütigen Landschaftsfahrt nach London. Anschließend folgt eine 2 h Orientierungsfahrt per Bus, vorbei an bekannten Sehenswürdigkeiten wie dem Parlamentsgebäude, dem Buckingham-Palast und der Westminster Abbey. Im Anschluss stehen ca. 1,5 h Freizeit zum Mittagessen, Bummeln und Einkaufen zur Verfügung. Danach erfolgt die Rückfahrt zum Schiff.",
    stations: [
      {
        startTime: 1000,
        endTime: "--",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: 1000,
        endTime: 1130,
        description: "Busfahrt in die Metropole London"
      }, {
        startTime: 1130,
        endTime: 1300,
        description: "Orientierungsfahrt entlang der wichtigsten Sehenswürdigkeiten wie Parlamentsgebäude, Buckingham-Palast und Westminster Abbey"
      }, {
        startTime: 1300,
        endTime: 1500,
        description: "Freizeit zum Mattagessen oder Einkäufe"
      }, {
        startTime: 1500,
        endTime: 1600,
        description: "Geführte Tour durch den Tower of London"
      }, {
        startTime: 1700,
        endTime: 1900,
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt. ",
    addlInfo: "Fotostopps und Dauer der Freizeit verkehrsabhängig, Zustieg des Reiseleiters auf dem Weg nach London, Rückfahrt ohne Reiseleiter. Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  SOU03: {
    name: "Salisbury & Mysteriöses Stonehenge",
    type: "excursion",
    tagline: "Besuchen Sie eine der beliebtesten Attraktionen der Stadt!",
    locations: [locations.GBSOU],
    images: ["modules/moduleImages/excursions/GBSOU/SOU03cover.jpg"],
    tags: [tags.culture, tags.family],
    duration: 7,
    costAdults: 75.19,
    costChildren: 49.45,
    difficulty: 2,
    startTime: 1000,
    includedItems: [],
    minimumAge: 2,
    description: "Ziel der ca. 90-minütigen Busfahrt ist das mysteriöse Stonehenge. Bei den Megalith Monuments sind ca. 1,5 h Aufenthalt geplant. Nach diesem Highlight beginnt die ca. 30- minütige Weiterfahrt durch die ländliche Umgebung vorbei an englischen Landhäusern nach Salisbury. Dort sind fast 2 Stunden Zeit zur individuellen Besichtigung der mittelalterlich geprägten Stadt geplant. Anschließend erfolgt die Rückfahrt zum Schiff.",
    stations: [
      {
        startTime: 1000,
        endTime: "--",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: 1000,
        endTime: "--",
        description: "Busfahrt nach Stonehenge"
      }, {
        startTime: 1130,
        endTime: "--",
        description: "Besuch des berühmten Megalith Monuments"
      }, {
        startTime: 1300,
        endTime: "--",
        description: "Weiterfahrt nach Salisbury"
      }, {
        startTime: 1330,
        endTime: "--",
        description: "Freizeit zur individuellen Besichtigung"
      }, {
        startTime: 1600,
        endTime: "--",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Deutschsprachige Audioguides in Stonehenge: Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  SOU04: {
    name: "Zu Besuch im Paultons Family Theme Park",
    type: "excursion",
    tagline: "Spaß für Groß & Klein",
    locations: [locations.GBSOU],
    images: ["modules/moduleImages/excursions/GBSOU/SOU04cover.jpg"],
    tags: [tags.family],
    duration: 8,
    costAdults: 69.25,
    costChildren: 59.45,
    difficulty: 2,
    startTime: "0900",
    includedItems: [],
    minimumAge: 2,
    description: "Im Anschluss an die 45-minütige Landschaftsfahrt zum Paultons Family Theme Parknach stehen ca. 6 Stunden Freizeit um unzählige Shows, Attraktionen und Fahrgeschäfte auszuprobieren zur Verfügung. Hier kann man in die Welt von Peppa Pig oder in den Dinosaurier-Themenpark einzutauchen. Anschließend erfolgt die Rückfahrt zum Schiff. ",
    stations: [
      {
        startTime: "09:00",
        endTime: "--",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "09:15",
        endTime: "--",
        description: "Busfahrt nach Stonehenge"
      }, {
        startTime: "10:00",
        endTime: "--",
        description: "6 Stunden Aufenthalt in Paultons Family Theme Park"
      }, {
        startTime: "16:00",
        endTime: "--",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Deutschsprachige Audioguides in Stonehenge: Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  SOU05: {
    name: "New Forest: Den Nationalpark mit einem Ranger erkunden",
    type: "excursion",
    tagline: "Lernen Sie Flora & Fauna kennen!",
    locations: [locations.GBSOU],
    images: ["modules/moduleImages/excursions/GBSOU/SOU05cover.jpg"],
    tags: [tags.family, tags.nature],
    duration: "5:15",
    costAdults: 59.35,
    costChildren: 59.35,
    difficulty: 2,
    startTime: "10:30",
    includedItems: "Cream Tea",
    minimumAge: 2,
    description: "Ziel der ca. 45-minütigen Busfahrt ist der New Forest. Dort beginnt der ca. 90-minütige Rundgang mit einem Ranger und Erklärungen zur Flora und Fauna. Anschließend steht ca. 1 h Freizeit in einem der Dörfer im New Forest mit Gelegenheit zum Kauf von Souvenirs zur Verfügung. Danach erfolgt der 60-minütige Aufenthalt in einem Café zum Genuss des typisch englischen Cream Tea, bevor die Rückfahrt zum Schiff angetreten wird.",
    stations: [
      {
        startTime: "10:30",
        endTime: "--",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "10:45",
        endTime: "--",
        description: "Busfahrt in den New Forest"
      }, {
        startTime: "11:30",
        endTime: "--",
        description: "Rundgang im Wald mit einem Ranger"
      }, {
        startTime: "13:00",
        endTime: "14:00",
        description: "Freizeit in einem der Dörfer im New Forest"
      }, {
        startTime: "14:00",
        endTime: "15:00",
        description: "Aufenthalt in einem Café zum Genuss des typisch englischen Cream Tea"
      }, {
        startTime: "15:00",
        endTime: "15:45",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  LEH01: {
    name: "Honfleur auf eigene Faust",
    type: "excursion",
    tagline: "Erkunden Sie das maritime Städtchen individuell!",
    locations: [locations.FRLEH],
    images: ["modules/moduleImages/excursions/GBSOU/LEH01cover.jpg"],
    tags: [tags.family, tags.culture],
    duration: "4:00",
    costAdults: 29.65,
    costChildren: 19.75,
    difficulty: 2,
    startTime: "11:30",
    includedItems: "",
    minimumAge: 2,
    description: "Mit einem 30-minütigen Bustransfer bringen wir sie nach Honfleur. Dort stehen ca. 3 Stunden Freizeit zur Verfügung, die zur individuellen Erkundung der idyllischen Hafenstadt mit seinen typischen Fachwerkhäusern, zahlreichen Galerien und erstklassigen Restaurants genutzt werden kann. Anschließend erfolgt der Transfer zurück zum Schiff. ",
    stations: [
      {
        startTime: "11:30",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "11:45",
        endTime: "",
        description: "Busfahrt nach Honfleur"
      }, {
        startTime: "12:15",
        endTime: "",
        description: "ca. drei Stunden zur freien Verfügung"
      }, {
        startTime: "15:15",
        endTime: "",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Viel Kopfsteinpflaster, ohne Reiseleiter. Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  LEH02: {
    name: "Giverny & Rouen",
    type: "excursion",
    tagline: "Besuchen Sie das Monet-Haus & die historische Altstadt!",
    locations: [locations.FRLEH],
    images: ["modules/moduleImages/excursions/GBSOU/LEH02cover.jpg"],
    tags: [tags.culture],
    duration: "10:00",
    costAdults: 104.45,
    costChildren: 72.15,
    difficulty: 2,
    startTime: "09:00",
    includedItems: "Mittagessen und Getränke",
    minimumAge: 2,
    description: "Die ca. 2-stündige Busfahrt führt durch die abwechslungsreiche Landschaft der Normandie nach Giverny. Dort kann das Haus des Malers Claude Monet besucht werden. Anschließend steht Freizeit im Programm, die in der schönen Gartenanlage, die Motiv vieler von Monets Gemälden war, genossen werden kann. Weiterhin ist es auch möglich, die freie Zeit für ein Mittagessen zu nutzen. Anschließend folgt die ca. 75-minütige Autobahnfahrt nach Rouen. Geplant wird hier ein geführter Rundgang durch die historische Altstadt und Zeit für eigene Erkundungen, bevor die Rückfahrt zum Schiff angetreten wird. ",
    stations: [
      {
        startTime: "1000",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1015",
        endTime: "1215",
        description: "Landschaftsfahrt durch die Normandie nach Giverny"
      }, {
        startTime: "12:15",
        endTime: "1330",
        description: "Besuch im Hause des Malers Claude Monet"
      }, {
        startTime: "1330",
        endTime: "1530",
        description: "geführter Rundgang in Rouen"
      }, {
        startTime: "15:30",
        endTime: "1630",
        description: "Zeit für eigene Erkundungen"
      }, {
        startTime: "16:30",
        endTime: "1830",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  LEH03: {
    name: "Kulinarisch: Normannische Gaumenfreuden",
    type: "excursion",
    tagline: "Probieren Sie die regionalen Köstlichkeiten!",
    locations: [locations.FRLEH],
    images: ["modules/moduleImages/excursions/GBSOU/LEH03cover.jpg"],
    tags: [tags.culture, tags.nature, tags.family],
    duration: "08:30",
    costAdults: 98.95,
    costChildren: 79.15,
    difficulty: 2,
    startTime: "09:00",
    includedItems: "Mittagessen, Kostproben von Käse, Apfelsaft, Cidre und Calvados",
    minimumAge: 2,
    description: "Der Ausflug beginnt mit der ca. 90-minütigen Busfahrt durch die schöne Landschaft der Normandie, der Heimat der drei großen normannischen 'C': Cidre, Calvados & Camembert. Es folgt der ca. 90-minütige Besuch der privaten Käserei Graindorge, wo alle Schritte zur Käseherstellung miterlebt werden können, eine Verkostung stattfindet und etwas Freizeit eingeplant ist. Mit der anschließenden 1-stündigen Weiterfahrt wird Pont-l’Évêque angesteuert, wo ebenfalls etwas Freizeit und ein Mittagessen mit besonderem Ambiente angeboten wird. <br>Nach einer kurzen Busfahrt geht es zur Destillerie Père Magloire mit einer 90-minütigen Besichtigung der Produktionsstätte einer der führenden französischen Calvados-Marken mit Kostproben. ",
    stations: [
      {
        startTime: "0945",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1000",
        endTime: "1130",
        description: "Landschaftsfahrt durch die Normandie"
      }, {
        startTime: "11:30",
        endTime: "1300",
        description: "Besuch der privaten Käserei Graindorge"
      }, {
        startTime: "1330",
        endTime: "1530",
        description: "Käseherstellung und Verkostung "
      }, {
        startTime: "15:30",
        endTime: "1600",
        description: "Weiterfahrt nach Pont-l’Évêque"
      }, {
        startTime: "16:00",
        endTime: "1645",
        description: "Besichtigung der Produktionsstätte von Calvados "
      }, {
        startTime: "17:00",
        endTime: "1830",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  LEH04: {
    name: "Transfer nach Rouen",
    type: "excursion",
    tagline: "Erleben Sie die historische Hauptstadt der Normandie!",
    locations: [locations.FRLEH],
    images: ["modules/moduleImages/excursions/GBSOU/LEH04cover.jpg"],
    tags: [tags.culture, tags.nature, tags.family],
    duration: "05:00",
    costAdults: 49.95,
    costChildren: 29.95,
    difficulty: 2,
    startTime: "09:30",
    includedItems: "Mittagessen, Kostproben von Käse, Apfelsaft, Cidre und Calvados",
    minimumAge: 2,
    description: "Erkunden Sie Rouen, die hostorische Hauptstadt der Normandie, auf eigene Faust! Erleben Sie die berühmten Königsgräber von Citee du Rois und probieren Sie die weltberühmte Fischsauce.",
    stations: [
      {
        startTime: "0945",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1000",
        endTime: "1130",
        description: "Busfahrt nach Rouen"
      }, {
        startTime: "11:30",
        endTime: "1330",
        description: "2 Stunden Freizeit"
      }, {
        startTime: "1330",
        endTime: "1500",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  LEH05: {
    name: "Golf D‘Étretat",
    type: "excursion",
    tagline: "18-Loch-Platz; 6.073 m; Par 72",
    locations: [locations.FRLEH],
    images: [],
    tags: [tags.culture, tags.nature, tags.family],
    duration: "08:30",
    costAdults: 98.95,
    costChildren: 79.15,
    difficulty: 2,
    startTime: "09:00",
    includedItems: "Mittagessen, Kostproben von Käse, Apfelsaft, Cidre und Calvados",
    minimumAge: 2,
    description: "Ziel der Tour ist ein 18-Loch Platz, 6.073m, Par 72, der bereits 1908 gegründet wurde. Die Anlage liegt direkt auf den Klippen am Ärmelkanal und gehört zu den besten Golfplätzen Frankreichs. Sie bietet eine atemberaubende Aussicht auf die Bucht von Étretat. Auf dem Golfplatz gibt es offene Fairways, satte Roughs, gut verteidigte Grüns, aber auch kleine Waldflächen. Der typische Charakter eines Küstenplatzes mit permanentem Wind lässt den Platz zur Herausforderung werden.",
    stations: [
      {
        startTime: "0945",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1000",
        endTime: "1130",
        description: "Landschaftsfahrt durch die Normandie"
      }, {
        startTime: "11:30",
        endTime: "1300",
        description: "Besuch der privaten Käserei Graindorge"
      }, {
        startTime: "1330",
        endTime: "1530",
        description: "Käseherstellung und Verkostung "
      }, {
        startTime: "15:30",
        endTime: "1600",
        description: "Weiterfahrt nach Pont-l’Évêque"
      }, {
        startTime: "16:00",
        endTime: "1645",
        description: "Besichtigung der Produktionsstätte von Calvados "
      }, {
        startTime: "17:00",
        endTime: "1830",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  ZEE01: {
    name: "Brügge entdecken - vormittags",
    type: "excursion",
    tagline: "Lernen Sie die Weltkulturerbestadt zu Fuß & per Boot kennen!",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture, tags.activeadventure],
    duration: "04:30",
    costAdults: 54.50,
    costChildren: 37.57,
    difficulty: 2,
    startTime: "09:30",
    includedItems: "",
    minimumAge: 2,
    description: "Der Ausflug beginnt mit einer 30-minütigen Busfahrt in die mittelalterliche Hansestadt Brügge. Anschließend folgt ein ca. 1,5 h geführter Spaziergang durch das historische Stadtzentrum, vorbei am Burgplatz mit gotischem Rathaus, der Heilig-Blut-Basilika, dem Marktplatz mit Belfried-Turm und der Liebfrauenkirche. Danach beginnt die 30-minütige Bootsfahrt auf den romantischen Grachten. Anschließend erfolgt ein kurzer Fußweg zum Walplein, dort steht ca. 1 h Freizeit zum Bummeln oder Einkaufen zur Verfügung. Nach einem weiteren 15-minütigen Spaziergang zurück zum Bus, kann die Rückfahrt zum Schiff angetreten werden.",
    stations: [
      {
        startTime: "0930",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "0945",
        endTime: "1015",
        description: "Busfahrt in die mittelalterliche Hansestadt Brügge"
      }, {
        startTime: "10:15",
        endTime: "1145",
        description: "Geführter Spaziergang durch das historische Stadtzentrum"
      }, {
        startTime: "1215",
        endTime: "1245",
        description: "Bootsfahrt auf den romantischen Grachten "
      }, {
        startTime: "12:45",
        endTime: "1400",
        description: "kurzer Fußweg zum Walplein, ca. 1 h Freizeit zum Bummeln oder Einkaufen "
      }, {
        startTime: "14:00",
        endTime: "1445",
        description: "Fußweg zum Bus und Rückfahrt zum Schiff "
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Offenes Kanalboot <br>Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  ZEE02: {
    name: "Europas Hauptstadt Brüssel",
    type: "excursion",
    tagline: "Die Highlights während einer Panoramafahrt entdecken",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture, tags.activeadventure],
    duration: "8:30",
    costAdults: 59.46,
    costChildren: 42.46,
    difficulty: 2,
    startTime: "09:30",
    includedItems: "",
    minimumAge: 2,
    description: "Lernen Sie Europas Hauptstadt auf einerPanorama-Busfahrtkennen. Vorbei an zwei der bemerkenswertesten architektonischen Werken Leopolds II,dem Chinesischen Pavillonund dem Japanischen Turm, geht es Richtung Notre-Dame de Laeken und dem imposanten Königlichen Palast. Fotografieren Sie das Atomium, dem Symbol für eine friedliche Nutzung von Atomkraft und erkunden Sie bei einem geführten Spaziergang den historischen Grote Markt mit alten Gildehäusern und dem prächtigen Rathaus. Bewundern Sie Manneken Pis, das Wahrzeichen der Stadt und erkunden Sie das historische Zentrum auf eigene Faust bevor es mit dem Bus zurück zum Schiff geht.",
    stations: [
      {
        startTime: "0930",
        endTime: "",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "0945",
        endTime: "1130",
        description: "Busfahrt nach Brüssel via Autobahn"
      }, {
        startTime: "1130",
        endTime: "1300",
        description: "Panoramafahrt durch die Hauptstadt Belgiens und der EU, u. a. vorbei am Chinesischen Pavillon, am Japanischen Turm, an der Kirche Notre-Dame de Laeken und am Königlichen Palast "
      }, {
        startTime: "1300",
        endTime: "1330",
        description: "Fotostopp am Atomium "
      }, {
        startTime: "1330",
        endTime: "1415",
        description: "geführter Spaziergang rund um den Grote Markt mit den barocken Gildehäusern, dem Rathaus und dem Wahrzeichen der Stadt, Manneken Pis"
      }, {
        startTime: "1415",
        endTime: "1545",
        description: "Freizeit im Stadtzentrum"
      }, {
        startTime: "1545",
        endTime: "1700",
        description: "Fußweg zum Bus und Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  ZEE03: {
    name: "Ghent & Belgische Pralinen",
    type: "excursion",
    tagline: "Historisches Stadtzentrum & Pralinenmanufaktur besuchen",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture, tags.family],
    duration: "04:45",
    costAdults: 55.46,
    costChildren: 32.46,
    difficulty: 2,
    startTime: "13:00",
    includedItems: "Kostprobe belgischer Pralinen",
    minimumAge: 2,
    description: "Der Ausflug beginnt mit einer ca. 60-minütigen Busfahrt nach Ghent. Dort beginnt der 45-minütige geführte Spaziergang durch das historische Stadtzentrum vorbei an der St.-Michael-Brücke mit Blick auf den alten Hafen, der Festung Gravensteen und den Türmen von Ghent. Anschließend geht es zu Fuß entlang des Hafens zu einer kleinen privaten Pralinenmanufaktur mit einer 45-minütigen Demonstration zur Pralinenherstellung und Kostproben. Danach geht es zu Fuß zur St.-Bavo-Kathedrale, wo 45 min Freitzeit eingeplant sind. Nach einem ca. 30-minütigen Spaziergang zurück zum Bus, geht es zurück zum Schiff. ",
    stations: [
      {
        startTime: "1300",
        endTime: "1315",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1315",
        endTime: "1415",
        description: "Busfahrt nach Ghent via Autobahn"
      }, {
        startTime: "1415",
        endTime: "1430",
        description: "Zu Fuß entlang des Hafens zu einer kleinen privaten Pralinenmanufaktur"
      }, {
        startTime: "1430",
        endTime: "1515",
        description: "Demonstration der Pralinenherstellung mit Kostprobe"
      }, {
        startTime: "1515",
        endTime: "1600",
        description: "kurzer Fußweg zur St.-Bavo-Kathedrale, ca. 45 min Freizeit"
      }, {
        startTime: "1615",
        endTime: "1630",
        description: "Spaziergang zurück zum Bus"
      }, {
        startTime: "1630",
        endTime: "1730",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  ZEE04: {
    name: "Transfer nach Brügge (11:00 Uhr)",
    type: "excursion",
    tagline: "Erkunden Sie die Stadt auf eigene Faust!",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture],
    duration: "05:00",
    costAdults: 24.70,
    costChildren: 19.75,
    difficulty: 2,
    startTime: "11:00",
    includedItems: "",
    minimumAge: 2,
    description: "Lernen Sie das herrliche belgische Kleinod auf eigene Faus kennen! Wir bringen Sie in einem schönen Reisebus hin und wieder zurück",
    stations: [
      {
        startTime: "1100",
        endTime: "1115",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1115",
        endTime: "1145",
        description: "Busfahrt Brügge"
      }, {
        startTime: "1145",
        endTime: "1545",
        description: "4 Stunden Freizeit zur eigenen Verfügung"
      }, {
        startTime: "1545",
        endTime: "1615",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  ZEE05: {
    name: "Flanderns malerische Landschaften & Brügge per Bike",
    type: "excursion",
    tagline: "Soft-Aktiv-Bikingtour (ca. 50 km // 40 hm)",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture],
    duration: "06:00",
    costAdults: 24.70,
    costChildren: null,
    difficulty: 4,
    startTime: "10:30",
    includedItems: "AIDA Trinkflasche, Energy Pulver, Fitnessriegel",
    minimumAge: 12,
    description: "Die Tour beginnt mit einer Landschaftsfahrt durch Flandern nach Brügge. Die Fahrt führt durch die Stadt zur St.-Salvator-Kathedrale und zum Grote Markt mit Rathaus. In der historischen Innenstadt wird ein Kaffeestopp eingelegt. Die Weiterfahrt geht durch die engen Gassen mit alten Gildehäusern und vorbei an schönen Kanälen. Danach erfolgt die Rückfahrt nach Zeebrügge.",
    stations: [
      {
        startTime: "1030",
        endTime: "1045",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1115",
        endTime: "1200",
        description: "Landschaftsfahrt durch Flandern nach Brügge"
      }, {
        startTime: "1200",
        endTime: "1345",
        description: "Stadttour in Brügge"
      }, {
        startTime: "1345",
        endTime: "1430",
        description: "Kaffeestop in der historischen ALtstadt"
      }, {
        startTime: "1430",
        endTime: "1530",
        description: "Fahrt durch die Altstadt"
      }, {
        startTime: "1530",
        endTime: "1630",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.",
    addlInfo: "Die Teilnahme an AIDA Bikingtouren ist für 12- bis 15-Jährige nur nach persönlicher Beratung am Biking Counter sowie ausschließlich in Begleitung eines Erziehungsbeauftragten möglich ist.<br>Restkontingente sind an Bord verfügbar. Bitte wenden Sie sich dazu, nach Möglichkeit noch am Anreisetag, an Ihr Activities Team an Bord.",
    importantInfo: "Unsere AIDA Biking Guides an Bord beraten Sie vor der Tour persönlich. Sollte der von Ihnen gebuchte Ausflug nicht Ihrem Leistungsstand entsprechen, buchen wir Sie gern kurzfristig auf einen anderen Ausflug um."
  },
  RTM01: {
    name: "Panoramafahrt durch Amsterdam & Madame Tussauds",
    type: "excursion",
    tagline: "Stadtrundfahrt & Wachsfigurenkabinett",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture],
    duration: "09:00",
    costAdults: 71.90,
    costChildren: 50.87,
    difficulty: 2,
    startTime: "8:30",
    includedItems: "",
    minimumAge: 2,
    description: "Im Anschluss an die ca. 90-minütige Busfahrt nach Amsterdam folgt ein ca. 30-minütiger Fotostopp an einer der typischen Windmühlen, bevor die Weiterfahrt ins Stadtzentrum angetreten wird. Dort folgt eine ca. 60-minütige Panoramafahrt entlang der malerischen Kanäle, vorbei am Dam und am Königlichen Palast. Nach einem ca. 30-minütigen Spaziergang zum belebten Blumenmarkt steht ca. 1 Stunde Freizeit zur Verfügung, die zum Bummeln oder für ein Mittagessen genutzt werden kann. Nach einem weiteren ca. 30-minütigen Spaziergang wird das Wachsfigurenmuseum Madame Tussauds erreicht. Die Ausstellung mit zahlreichen Figuren von Berühmtheiten aus TV, Musik und Politik kann ca. 1 Stunde lang besucht werden. Danach erfolgt die Rückfahrt zum Schiff.",
    stations: [
      {
        startTime: "0830",
        endTime: "0845",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "0845",
        endTime: "1015",
        description: "Busfahrt nach Amsterdam"
      }, {
        startTime: "1015",
        endTime: "1045",
        description: "Fotostopp an einer der typischen Windmühlen"
      }, {
        startTime: "1045",
        endTime: "1145",
        description: "Panoramafahrt duch Amsterdam"
      }, {
        startTime: "1145",
        endTime: "1300",
        description: "Malerische Kanäle und königlicher Palast"
      }, {
        startTime: "1300",
        endTime: "1400",
        description: "Freizeit am Blumenmarkt"
      }, {
        startTime: "1500",
        endTime: "1630",
        description: "Besuch im Wachsfigurenkabinet Madame Tussauds"
      }, {
        startTime: "1630",
        endTime: "1800",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  RTM02: {
    name: "Blumenparadies Keukenhof - nachmittags",
    type: "excursion",
    tagline: "Besuchen Sie die weltgrößte Freilandblumenschau!",
    locations: [locations.BEZEE],
    images: [],
    tags: [tags.culture, tags.family],
    duration: "05:00",
    costAdults: 55.90,
    costChildren: 39.80,
    difficulty: 2,
    startTime: "13:30",
    includedItems: "",
    minimumAge: 2,
    description: "Der Ausflug beginnt mit einer ca. 60-minütigen Landschaftsfahrt nach Lisse zum Keukenhof mit der größten Freilandblumenschau der Welt. Anschließend stehen ca. 3 Stunden Freizeit für den Besuch der wunderschönen Parkanlagen mit einmaliger Blüten- und Farbenpracht im Freien und in Gewächshäusern zur Verfügung. Danach erfolgt die Rückfahrt zum Schiff.",
    stations: [
      {
        startTime: "1330",
        endTime: "1345",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1345",
        endTime: "1445",
        description: "Landschaftsfahrt nach Lisse"
      }, {
        startTime: "1345",
        endTime: "1645",
        description: "Besuch von Keukenhof mit der größten Freilandblumenschau der Welt"
      }, {
        startTime: "1645",
        endTime: "1730",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  RTM03: {
    name: "Rotterdam bei Nacht",
    type: "excursion",
    tagline: "Stadtrundfahrt & Spaziergang durch die Stadt",
    locations: [locations.NLRTM],
    images: [],
    tags: [tags.culture, tags.activeadventure],
    duration: "04:00",
    costAdults: 49.90,
    costChildren: null,
    difficulty: 2,
    startTime: "19:30",
    includedItems: "2 Gläser Wein, Bier oder Softdrink",
    minimumAge: 14,
    description: "Im Anschluss an den ca. 30-minütigen Bustransfer ins Stadtzentrum folgt eine ca. 90-minütige Panoramafahrt durch eine der architektonisch innovativsten Städte Europas, vorbei an beeindruckenden Bauten des 20. Jahrhunderts. An den markantesten Sehenswürdigkeiten werden Fotostopps eingelegt. Danach folgt ein ca. 90-minütiger geführter Spaziergang durch die nächtliche Stadt mit Besuch zweier typischer Bars. Anschließend erfolgt die Rückfahrt zum Schiff.",
    stations: [
      {
        startTime: "1930",
        endTime: "1945",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1945",
        endTime: "2030",
        description: "Bustransfer ins Stadtzentrum mit Fotostopps an den markantesten Sehenswürdigkeiten"
      }, {
        startTime: "2030",
        endTime: "2200",
        description: "geführter Spaziergang durch die nächtliche Stadt"
      }, {
        startTime: "2200",
        endTime: "2300",
        description: "Besuch zweier typischer Bars"
      }, {
        startTime: "2300",
        endTime: "2315",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  RTM04: {
    name: "Saisonal: Scheveningen - Strand & Shopping",
    type: "excursion",
    tagline: "Besuchen Sie das größte Seebad der Niederlande!",
    locations: [locations.NLRTM],
    images: [],
    tags: [tags.culture, tags.activeadventure],
    duration: "08:00",
    costAdults: 49.90,
    costChildren: 37.25,
    difficulty: 2,
    startTime: "19:30",
    includedItems: "2 Gläser Wein, Bier oder Softdrink",
    minimumAge: 14,
    description: "Ziel der ca. 60-minütigen Busfahrt ist einer der beliebtesten Badeorte der Niederlande. Dort stehen ca. 6 Stunden Freizeit zur Verfügung. Diese werden in einem ehemaligen Fischerdorf mit langem Sandstrand, schöner Strandpromenade, vielen Geschäften und Bars, einer Seebrücke und einem Fischereihafen verbracht. Begleitung durch örtlichen Eskort, von Mai bis Anfang Juni Austragung des internationalen Sandskulpturenfestival am Strand von Scheveningen. Anschließend erfolgt die Rückfahrt zum Schiff. ",
    stations: [
      {
        startTime: "1000",
        endTime: "1015",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "1015",
        endTime: "1115",
        description: "Busfahrt ist einer der beliebtesten Badeorte der Niederlande"
      }, {
        startTime: "1115",
        endTime: "1715",
        description: "ca. 6 Stunden Freizeit zur Verfügung am Sandstrand und Strandpromenade"
      }, {
        startTime: "1715",
        endTime: "1815",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  },
  RTM05: {
    name: "Gouda komplett",
    type: "excursion",
    tagline: "Spaziergang durch Gouda & Käserei mit Kostprobe",
    locations: [locations.NLRTM],
    images: [],
    tags: [tags.culture, tags.activeadventure],
    duration: "04:00",
    costAdults: 44.50,
    costChildren: 33.25,
    difficulty: 2,
    startTime: "19:30",
    includedItems: "Käse-Verkostung",
    minimumAge: 14,
    description: "Im Anschluss an die ca. 45-minütige Busfahrt zur Käserei Hoogerwaard folgt ein ca. 60-minütiger Besuch mit Kostprobe verschiedener Käsesorten und Gelegenheiten zum Einkaufen. Die Weiterfahrt geht nach Gouda, einer typisch holländischen Stadt aus dem 13. Jahrhundert. Dort folgt ein ca. 60-minütiger geführter Spaziergang, u.a. vorbei am alten Marktplatz, bevor die Rückfahrt zum Schiff angetreten wird. ",
    stations: [
      {
        startTime: "0915",
        endTime: "0930",
        description: "Alle treffen sich am Sammelpunkt"
      }, {
        startTime: "0930",
        endTime: "1015",
        description: "Busfahrt zur Käserei Hoogerwaard"
      }, {
        startTime: "1015",
        endTime: "1115",
        description: "Besuch mit Kostprobe verschiedener Käsesorten "
      }, {
        startTime: "1115",
        endTime: "1145",
        description: "Weiterfahrt nach Gouda"
      }, {
        startTime: "1145",
        endTime: "1300",
        description: "Geführter Sparziergang durch die Altstadt"
      }, {
        startTime: "1300",
        endTime: "1345",
        description: "Rückfahrt zum Schiff"
      }
    ],
    ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.",
    addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
  }
};


},{"data_locations":"data_locations","data_tags":"data_tags"}],"data_headings":[function(require,module,exports){
var dpr;

dpr = require('DevicePixelRatio').dpr;

exports.headingSizes = {
  xxl: dpr(40),
  xl: dpr(36),
  l: dpr(34),
  m: dpr(32),
  s: dpr(24)
};


},{"DevicePixelRatio":"DevicePixelRatio"}],"data_itinerary":[function(require,module,exports){
var locations;

locations = require('data_locations').locations;

exports.sailing = {
  startAt: "04/29/2017 08:00:00",
  ship: "AIDAprima",
  departurePort: locations.DEHAM,
  arrivalPort: locations.DEHAM,
  segments: [
    {
      type: "onboarding",
      segmentNumber: 0,
      duration: "09:00:00",
      segmentStart: "04/29/2017 08:00:00",
      segmentEnd: "04/29/2017 23:59:59",
      arrivalTime: "04/29/2017 08:00",
      boardingStart: "04/29/2017 09:00",
      allOnBoard: "04/29/2017 15:00",
      securityStart: "04/29/2017 16:00",
      departureTime: "04/29/2017 18:00",
      location: locations.DEHAM,
      nextLand: locations.GBSOU,
      nextArrivalTime: "05/01/2017 09:30"
    }, {
      type: "seaday",
      segmentNumber: 1,
      segmentStart: "04/30/2017 00:00:00",
      segmentEnd: "04/30/2017 23:59:59",
      duration: "39:30:00",
      location: locations.XXSEA,
      nextLand: locations.GBSOU,
      nextArrivalTime: "05/01/2017 09:30"
    }, {
      type: "location",
      segmentNumber: 2,
      duration: "12:00:00",
      segmentStart: "05/01/2017 00:00:00",
      segmentEnd: "05/01/2017 23:59:59",
      arrivalTime: "05/01/2017 09:30",
      backOnBoard: "05/01/2017 20:30",
      departureTime: "05/01/2017 21:30",
      location: locations.GBSOU,
      nextLand: locations.FRLEH,
      nextArrivalTime: "05/02/2017 07:00"
    }, {
      type: "location",
      segmentNumber: 3,
      duration: "12:00:00",
      segmentStart: "05/02/2017 00:00:00",
      segmentEnd: "05/02/2017 23:59:59",
      arrivalTime: "05/02/2017 07:00",
      backOnBoard: "05/02/2017 18:00",
      departureTime: "05/02/2017 19:00",
      location: locations.FRLEH,
      nextLand: locations.BEZEE,
      nextArrivalTime: "05/03/2017 10:00"
    }, {
      type: "location",
      segmentNumber: 4,
      duration: "09:00:00",
      segmentStart: "05/03/2017 00:00:00",
      segmentEnd: "05/03/2017 23:59:59",
      arrivalTime: "05/03/2017 10:00",
      backOnBoard: "05/03/2017 18:00",
      departureTime: "05/03/2017 19:00",
      location: locations.BEZEE,
      nextLand: locations.NLRTM,
      nextArrivalTime: "05/04/2017 08:00"
    }, {
      type: "location",
      segmentNumber: 5,
      duration: "24:00:00",
      segmentStart: "05/04/2017 00:00:00",
      segmentEnd: "05/05/2017 08:00:00",
      arrivalTime: "05/04/2017 08:00",
      backOnBoard: "05/05/2017 07:00",
      departureTime: "05/05/2017 08:00",
      location: locations.NLRTM,
      nextLand: locations.DEHAM,
      nextArrivalTime: "05/06/2017 08:00"
    }, {
      type: "seaday",
      segmentNumber: 6,
      segmentStart: "05/05/2017 07:01",
      segmentEnd: "05/05/2017 23:59",
      duration: "39:30:00",
      location: locations.XXSEA,
      nextLand: locations.DEHAM,
      nextArrivalTime: "05/06/2017 08:00"
    }, {
      type: "offboarding",
      segmentNumber: 7,
      segmentStart: "05/06/2017 00:00",
      segmentEnd: "05/06/2017 09:59",
      arrivalTime: "05/06/2017 08:00",
      allFromBoard: "05/06/2017 10:00",
      duration: "08:00:00",
      location: locations.DEHAM,
      nextLand: locations.DEHAM
    }
  ]
};


},{"data_locations":"data_locations"}],"data_locations":[function(require,module,exports){
exports.locations = {
  XXSEA: {
    name: "Auf See",
    marketingName: "Auf See",
    images: {
      dawn: ["modules/moduleImages/itinerary/seaday/img_sea-dawn.jpg"],
      day: ["modules/moduleImages/itinerary/seaday/img_sea-day.jpg"],
      dusk: ["modules/moduleImages/itinerary/seaday/img_sea-dusk.jpg"],
      night: ["modules/moduleImages/itinerary/seaday/img_sea-night.jpg"]
    }
  },
  DEHAM: {
    name: "Hamburg",
    marketingName: "Hamburg",
    images: {
      dawn: ["modules/moduleImages/itinerary/hamburg/img_hamburg_dawn.jpg"],
      day: ["modules/moduleImages/itinerary/hamburg/img_hamburg_day.jpg", "modules/moduleImages/itinerary/hamburg/img_hamburg_day2.jpg"],
      dusk: ["modules/moduleImages/itinerary/hamburg/img_hamburg_dusk.jpg"],
      night: ["modules/moduleImages/itinerary/hamburg/img_hamburg_night.jpg", "modules/moduleImages/itinerary/hamburg/img_hamburg_night2.jpg"]
    }
  },
  GBSOU: {
    name: "Southampton",
    marketingName: "London / Southampton",
    images: {
      dawn: ["modules/moduleImages/itinerary/southampton/img_london_dawn.jpg"],
      day: ["modules/moduleImages/itinerary/southampton/img_london_day.jpg", "modules/moduleImages/itinerary/southampton/img_london_day2.jpg"],
      dusk: ["modules/moduleImages/itinerary/southampton/img_london_dusk.jpg"],
      night: ["modules/moduleImages/itinerary/southampton//img_london_night.jpg", "modules/moduleImages/itinerary/southampton//img_london_night2.jpg"]
    }
  },
  FRLEH: {
    name: "Le Havre",
    marketingName: "Paris / Le&nbsp;Havre",
    images: {
      dawn: ["modules/moduleImages/itinerary/lehavre/img_lehavre_dawn.jpg", "modules/moduleImages/itinerary/lehavre/img_paris_dawn.jpg"],
      day: ["modules/moduleImages/itinerary/lehavre/img_paris_day.jpg", "modules/moduleImages/itinerary/lehavre/img_lehavre_day.jpg"],
      dusk: ["modules/moduleImages/itinerary/lehavre/img_paris_dusk.jpg", "modules/moduleImages/itinerary/lehavre/img_lehavre_dusk.jpg"],
      night: ["modules/moduleImages/itinerary/lehavre/img_paris_night.jpg"]
    }
  },
  BEZEE: {
    name: "Zeebrügge",
    marketingName: "Brüssel / Zeebrügge",
    images: {
      dawn: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_dawn.jpg"],
      day: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_day.jpg"],
      dusk: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_dusk.jpg"],
      night: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_night.jpg"]
    }
  },
  NLRTM: {
    name: "Rotterdam",
    marketingName: "Amsterdam / Rotterdam",
    images: {
      dawn: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_dawn.jpg", "modules/moduleImages/itinerary/rotterdam/img_rotterdam_dawn2.jpg"],
      day: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_day.jpg"],
      dusk: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_dusk.jpg", "modules/moduleImages/itinerary/rotterdam/img_rotterdam_dusk.jpg"],
      night: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_night.jpg", "modules/moduleImages/itinerary/rotterdam/img_rotterdam_night2.jpg"]
    }
  }
};


},{}],"data_myDaySegments_alt":[function(require,module,exports){
var locations, moment, npm,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

npm = require('npm');

moment = npm.moment;

locations = require('data_locations').locations;

Function.prototype.property = function(prop, desc) {
  return Object.defineProperty(this.prototype, prop, desc);
};

exports.remainingCruise = (function() {
  function remainingCruise(sailing, testDate) {
    var newNow;
    this.sailing = sailing;
    this.testDate = testDate;
    moment.locale('de');
    newNow = moment(this.testDate);
    moment.now = function() {
      return newNow;
    };
    this.constructDataObject();
  }

  remainingCruise.property('itineraryPages', {
    get: function() {
      if (!this.itineraryPages) {
        return this.constructDataObject();
      } else {
        return this.itineraryPages;
      }
    }
  });

  remainingCruise.prototype.constructDataObject = function() {
    var currentSegment, currentSegmentIndex, endDate, i, j, now, ref, ref1, results, segments, startDate, startingIndex;
    segments = this.sailing.segments;
    now = moment();
    startDate = moment(this.sailing.startAt);
    endDate = moment(segments[segments.length - 1].allFromBoard);
    currentSegment = this.findSegmentInSailing(segments);
    if (currentSegment) {
      currentSegmentIndex = segments.indexOf(currentSegment);
      this.itineraryPages.push(this.addMyDayObject(currentSegment));
      startingIndex = this.determineStartIndex(currentSegment, currentSegmentIndex);
      results = [];
      for (i = j = ref = startingIndex, ref1 = segments.length; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
        results.push(this.itineraryPages.push(this.addItinObject(segments[i])));
      }
      return results;
    } else {
      return this.checkPreOrPostCruise(startDate, endDate);
    }
  };

  remainingCruise.prototype.findSegmentInSailing = function(segmentList) {
    var currentSegment, endDate, startDate;
    startDate = moment(this.sailing.startAt);
    endDate = moment(segmentList[segmentList.length - 1].segmentEnd);
    currentSegment = segmentList.find((function(_this) {
      return function(segment) {
        return moment().isBetween(moment(segment.segmentStart), moment(segment.segmentEnd));
      };
    })(this));
    if (currentSegment) {
      return currentSegment;
    } else {
      return null;
    }
  };

  remainingCruise.prototype.checkPreOrPostCruise = function(startDate, endDate) {
    console.log("we returned no match for test date in sailing");
    if (moment().isBefore(startDate)) {
      return console.log("out of segment; testDate is before sailing start.  Precruise Mode of app");
    } else if (moment().isAfter(endDate)) {
      return console.log("out of segment; testDate is after sailing start.  Post-cruise Mode of app");
    }
  };

  remainingCruise.prototype.determineStartIndex = function(currentSegment, currentSegmentIndex) {
    var startingIndex;
    if (!this.options.arriving) {
      startingIndex = currentSegmentIndex + 1;
    } else if (currentSegment.type === "seaday") {
      startingIndex = currentSegmentIndex + 1;
    } else {
      startingIndex = currentSegmentIndex;
    }
    return startingIndex;
  };

  remainingCruise.prototype.addItinObject = function(currentSegment) {
    var itineraryObject;
    itineraryObject = {
      name: currentSegment.location.name + "_page",
      pageType: currentSegment.type,
      segment: currentSegment,
      testDate: this.testDate,
      segmentImage: currentSegment.location.images.day[0]
    };
    return itineraryObject;
  };

  remainingCruise.prototype.addMyDayObject = function(currentSegment) {
    var arrival, departure, myDayObject, pageType, selectedImage;
    if (currentSegment.type !== "seaday") {
      arrival = moment(currentSegment.arrivalTime);
      departure = moment(currentSegment.departureTime);
      selectedImage = "";
      pageType = "location";
      if (moment().isBetween(arrival, departure)) {
        this.options.arriving = false;
        selectedImage = this.selectImage(moment().hour(), currentSegment.location);
        pageType = currentSegment.type;
      } else if (moment().isSameOrBefore(arrival)) {
        this.options.arriving = true;
        selectedImage = this.selectImage(moment().hour(), locations.XXSEA);
        pageType = "arriving";
      } else if (moment().isSameOrAfter(departure)) {
        this.options.arriving = false;
        selectedImage = this.selectImage(moment().hour(), locations.XXSEA);
        pageType = "departing";
      } else {
        print("error - can't determine phase");
      }
    } else {
      this.options.arriving = false;
      selectedImage = this.selectImage(moment().hour(), currentSegment.location);
      pageType = "seaday";
    }
    myDayObject = {
      name: "ItineraryNow",
      pageType: pageType,
      segment: currentSegment,
      testDate: this.testDate,
      segmentImage: selectedImage
    };
    return myDayObject;
  };

  remainingCruise.prototype.daytime = function(h) {
    if (indexOf.call([21, 22, 23, 24], h) >= 0 || indexOf.call([0, 1, 2, 3, 4], h) >= 0) {
      return "night";
    }
    if (indexOf.call([19, 20, 21], h) >= 0) {
      return "dusk";
    }
    if (indexOf.call([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], h) >= 0) {
      return "day";
    }
    if (indexOf.call([5, 6], h) >= 0) {
      return "dawn";
    }
  };

  remainingCruise.prototype.selectImage = function(forTime, forLocation) {
    var index, list;
    list = "";
    switch (this.daytime(forTime)) {
      case "night":
        list = forLocation.images.night;
        break;
      case "dusk":
        list = forLocation.images.dusk;
        break;
      case "day":
        list = forLocation.images.day;
        break;
      case "dawn":
        list = forLocation.images.dawn;
    }
    index = Math.round(Utils.randomNumber(0, list.length - 1));
    return list[index];
  };

  return remainingCruise;

})();


},{"data_locations":"data_locations","npm":"npm"}],"data_myDaySegments":[function(require,module,exports){
var locations, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

locations = require('data_locations').locations;

npm = require('npm');

moment = npm.moment;

exports.myDaySegments = (function(superClass) {
  extend(myDaySegments, superClass);

  function myDaySegments(options) {
    var base, base1, base2, newNow;
    this.options = options != null ? options : {};
    if ((base = this.options).sailing == null) {
      base.sailing = "";
    }
    if ((base1 = this.options).itineraryList == null) {
      base1.itineraryList = [];
    }
    if ((base2 = this.options).testDate == null) {
      base2.testDate = moment("04/29/2017 00:00:00");
    }
    myDaySegments.__super__.constructor.call(this, this.options);
    moment.locale('de');
    newNow = moment(this.options.testDate);
    moment.now = function() {
      return newNow;
    };
    this.visible = false;
    this.name = "myDayDataModel";
    this.constructDataObject();
  }

  myDaySegments.prototype.constructDataObject = function() {
    var currentSegment, currentSegmentIndex, endDate, i, j, now, ref, ref1, segments, startDate, startingIndex;
    console.group("Segment Selection:");
    segments = this.options.sailing.segments;
    now = moment();
    startDate = moment(this.options.sailing.startAt);
    endDate = moment(segments[segments.length - 1].allFromBoard);
    currentSegment = this.findSegmentInSailing(segments);
    if (currentSegment) {
      console.log("Current Segment:", currentSegment);
      currentSegmentIndex = segments.indexOf(currentSegment);
      this.options.itineraryList.push(this.addMyDayObject(currentSegment));
      startingIndex = this.determineStartIndex(currentSegment, currentSegmentIndex);
      for (i = j = ref = startingIndex, ref1 = segments.length; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
        this.options.itineraryList.push(this.addItinObject(segments[i]));
      }
    } else {
      this.checkPreOrPostCruise(startDate, endDate);
    }
    console.log("Itinerary list for my Day:", this.options.itineraryList);
    return console.groupEnd();
  };

  myDaySegments.prototype.findSegmentInSailing = function(segmentList) {
    var currentSegment, endDate, startDate;
    startDate = moment(this.options.sailing.startAt);
    endDate = moment(segmentList[segmentList.length - 1].segmentEnd);
    currentSegment = segmentList.find((function(_this) {
      return function(segment) {
        return moment().isBetween(moment(segment.segmentStart), moment(segment.segmentEnd));
      };
    })(this));
    if (currentSegment) {
      return currentSegment;
    } else {
      return null;
    }
  };

  myDaySegments.prototype.checkPreOrPostCruise = function(startDate, endDate) {
    console.log("we returned no match for test date in sailing");
    if (moment().isBefore(startDate)) {
      return console.log("out of segment; testDate is before sailing start.  Precruise Mode of app");
    } else if (moment().isAfter(endDate)) {
      return console.log("out of segment; testDate is after sailing start.  Post-cruise Mode of app");
    }
  };

  myDaySegments.prototype.determineStartIndex = function(currentSegment, currentSegmentIndex) {
    var startingIndex;
    if (!this.options.arriving) {
      startingIndex = currentSegmentIndex + 1;
    } else if (currentSegment.type === "seaday") {
      startingIndex = currentSegmentIndex + 1;
    } else {
      startingIndex = currentSegmentIndex;
    }
    return startingIndex;
  };

  myDaySegments.prototype.addItinObject = function(currentSegment) {
    var itineraryObject;
    itineraryObject = {
      name: currentSegment.location.name + "_page",
      pageType: currentSegment.type,
      segment: currentSegment,
      testDate: this.options.testDate,
      segmentImage: currentSegment.location.images.day[0]
    };
    return itineraryObject;
  };

  myDaySegments.prototype.addMyDayObject = function(currentSegment) {
    var arrival, departure, myDayObject, pageType, selectedImage;
    if (currentSegment.type !== "seaday") {
      arrival = moment(currentSegment.arrivalTime);
      departure = moment(currentSegment.departureTime);
      selectedImage = "";
      pageType = "location";
      if (moment().isBetween(arrival, departure)) {
        this.options.arriving = false;
        selectedImage = this.selectImage(moment().hour(), currentSegment.location);
        pageType = currentSegment.type;
      } else if (moment().isSameOrBefore(arrival)) {
        this.options.arriving = true;
        selectedImage = this.selectImage(moment().hour(), locations.XXSEA);
        pageType = "arriving";
      } else if (moment().isSameOrAfter(departure)) {
        this.options.arriving = false;
        selectedImage = this.selectImage(moment().hour(), locations.XXSEA);
        pageType = "departing";
      } else {
        print("error - can't determine phase");
      }
    } else {
      this.options.arriving = false;
      selectedImage = this.selectImage(moment().hour(), currentSegment.location);
      pageType = "seaday";
    }
    myDayObject = {
      name: "ItineraryNow",
      pageType: pageType,
      segment: currentSegment,
      testDate: this.options.testDate,
      segmentImage: selectedImage
    };
    return myDayObject;
  };

  myDaySegments.prototype.daytime = function(h) {
    if (indexOf.call([21, 22, 23, 24], h) >= 0 || indexOf.call([0, 1, 2, 3, 4], h) >= 0) {
      return "night";
    }
    if (indexOf.call([19, 20, 21], h) >= 0) {
      return "dusk";
    }
    if (indexOf.call([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], h) >= 0) {
      return "day";
    }
    if (indexOf.call([5, 6], h) >= 0) {
      return "dawn";
    }
  };

  myDaySegments.prototype.selectImage = function(forTime, forLocation) {
    var index, list;
    list = "";
    switch (this.daytime(forTime)) {
      case "night":
        list = forLocation.images.night;
        break;
      case "dusk":
        list = forLocation.images.dusk;
        break;
      case "day":
        list = forLocation.images.day;
        break;
      case "dawn":
        list = forLocation.images.dawn;
    }
    index = Math.round(Utils.randomNumber(0, list.length - 1));
    return list[index];
  };

  myDaySegments.define('sailing', {
    get: function() {
      if (this.options.sailing === "") {
        return console.error("Must define a sailing");
      } else {
        return this.options.sailing;
      }
    },
    set: function(value) {
      return this.options.sailing = value;
    }
  });

  myDaySegments.define('itineraryList', {
    get: function() {
      if (this.options.itineraryList === "") {
        return console.error("pages are empty");
      } else {
        return this.options.itineraryList;
      }
    },
    set: function(value) {
      return this.options.itineraryList = value;
    }
  });

  myDaySegments.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return myDaySegments;

})(Layer);


},{"data_locations":"data_locations","npm":"npm"}],"data_openinghours":[function(require,module,exports){
exports.openinghours = {
  marktrestaurant: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  weitewelt: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  east: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  belladonna: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/1/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/2/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/3/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/4/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/5/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/6/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  fuego: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  casanova: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  brauhaus: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  frenchkiss: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  sushibar: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ],
  buffalosteakhouse: [
    {
      date: "04/29/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "04/30/2017",
      weekday: "sunday",
      times: [
        {
          open: "7:00",
          close: "9:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/01/2017",
      weekday: "monday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/02/2017",
      weekday: "tuesday",
      times: [
        {
          open: "6:30",
          close: "9:30"
        }, {
          open: "18:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "20:00"
        }
      ]
    }, {
      date: "05/03/2017",
      weekday: "wednesday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "18:00",
          close: "21:00"
        }
      ]
    }, {
      date: "05/04/2017",
      weekday: "thursday",
      times: [
        {
          open: "7:30",
          close: "9:00"
        }, {
          open: "11:30",
          close: "14:00"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:30"
        }
      ]
    }, {
      date: "05/05/2017",
      weekday: "friday",
      times: [
        {
          open: "6:30",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:00"
        }, {
          open: "17:30",
          close: "19:00"
        }, {
          open: "19:30",
          close: "21:00"
        }
      ]
    }, {
      date: "05/06/2017",
      weekday: "saturday",
      times: [
        {
          open: "7:00",
          close: "10:00"
        }, {
          open: "11:00",
          close: "14:30"
        }, {
          open: "17:00",
          close: "19:00"
        }, {
          open: "19:30",
          close: "22:00"
        }
      ]
    }
  ]
};


},{}],"data_tags":[function(require,module,exports){
exports.tags = {
  activeadventure: {
    title: "Aktiv & Abenteuer",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  family: {
    title: "Familie & Freizeit",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  nature: {
    title: "Landschaft & Natur",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  sunsea: {
    title: "Sonne & Meer",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  culture: {
    title: "Städte & Kultur",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  sport: {
    title: "Sport",
    helptext: "this is the biking and golf section. What about diving etc.?"
  },
  entertainment: {
    title: "Unterhaltung",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  enjoy: {
    title: "Geniesen",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  discover: {
    title: "Entdecken",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  schnitzel: {
    title: "Schnitzel",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  pasta: {
    title: "Pasta",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  veggie: {
    title: "Vegetarisch",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  gluten: {
    title: "Glutenfrei",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  healthy: {
    title: "Gesunde Wahl",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  asian: {
    title: "Asiatisch",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  kids: {
    title: "Kinder",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  clothes: {
    title: "Bekleidung",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  wellnessfitness: {
    title: "Wellness & Fitness",
    helptext: "this is an explanation what to get here. We don't use it right now"
  },
  food: {
    title: "Essen & Trinken",
    helptext: "this is an explanation what to get here. We don't use it right now"
  }
};


},{}],"data_topics":[function(require,module,exports){
var events, excursions, excursionsByLocation, locations, tags, types, venues;

tags = require('data_tags').tags;

excursions = require('data_excursions').excursions;

excursionsByLocation = require('data_excursionsByLocation').excursionsByLocation;

locations = require('data_locations').locations;

venues = require('data_venues').venues;

events = require('data_events').events;

types = require('data_types').types;

exports.topics = {
  eatdrinknightlife: {
    title: "Essen, Trinken & Nachtleben",
    tagline: "Grenzenlose Vielfalt für Genieser",
    image: ["modules/moduleImages/topics/topicEatdrinknight.jpg"],
    hasPromotion: true,
    content: [
      {
        title: "Restaurants & Snacks",
        source: venues,
        memberType: "venue",
        members: [venues.marktrestaurant, venues.weitewelt, venues.east, venues.belladonna, venues.fuego, venues.casanova, venues.brauhaus, venues.frenchkiss, venues.sushibar, venues.rossini, venues.buffalosteakhouse],
        tags: [],
        type: [types.venues.buffet, types.venues.service, types.venues.alacarte, types.venues.snackbar],
        subtitle: "Restaurants & Snackbars",
        subsingle: "this can't be true...",
        fakecount: "14"
      }, {
        title: "Bars",
        source: venues,
        memberType: "venue",
        members: [],
        tags: [],
        type: [types.venues.nightlife],
        subtitle: "Clubs & Bars",
        subsingle: "this can't be true...",
        fakecount: "16"
      }, {
        title: "Abendunterhaltung",
        source: events,
        memberType: "event",
        members: ["event006", "event009", "event012", "event013", "event021", "event024", "event028", "event034"],
        tags: [],
        type: [tags.entertainment],
        subtitle: "Veranstaltungen",
        subsingle: "Veranstaltung",
        fakecount: "17"
      }
    ]
  },
  events: {
    title: "Veranstaltungen",
    tagline: "Showtime für große Gefühle",
    image: ["modules/moduleImages/topics/topicEvents.jpg"],
    hasPromotion: true,
    content: [
      {
        title: "Alle Veranstaltungen",
        source: events,
        memberType: "event",
        members: ["event001", "event002", "event003", "event004", "event005", "event006", "event007", "event008", "event009", "event010", "event011", "event012", "event013", "event014", "event015", "event016", "event017", "event018", "event019", "event020", "event021", "event022", "event023", "event024", "event025", "event026", "event027", "event028", "event029", "event030", "event031", "event032", "event033", "event034", "event035"],
        tags: [tags.family, tags.sport, tags.entertainment, tags.enjoy, tags.discover],
        types: [],
        subtitle: "Veranstaltungen insgesamt",
        subsingular: "Veranstaltung",
        fakecount: "51"
      }, {
        title: "Sport & Spiel",
        source: events,
        memberType: "event",
        members: ["event001", "event003", "event004", "event006", "event008", "event014", "event029", "event030", "event031", "event032", "event033", "event035"],
        tags: [tags.sport],
        types: [],
        subtitle: "Veranstaltungen",
        subsingular: "Veranstaltung",
        fakecount: "14"
      }, {
        title: "Unterhaltung",
        source: events,
        memberType: "event",
        members: ["event006", "event009", "event012", "event013", "event021", "event024", "event028", "event034"],
        tags: [tags.entertainment],
        types: [],
        subtitle: "Veranstaltungen",
        subsingular: "Veranstaltung",
        fakecount: "19"
      }, {
        title: "Geniesen",
        source: events,
        memberType: "event",
        members: ["event002", "event005", "event007", "event013", "event015", "event017", "event018", "event022", "event029", "event031"],
        tags: [tags.enjoy],
        types: [],
        subtitle: "Veranstaltungen",
        subsingular: "Veranstaltung",
        fakecount: "8"
      }, {
        title: "Entdecken",
        source: events,
        memberType: "event",
        members: ["event002", "event006", "event007", "event011", "event013", "event018", "event020", "event025"],
        tags: [tags.discover],
        types: [],
        subtitle: "Veranstaltungen",
        subsingular: "Veranstaltung",
        fakecount: "7"
      }, {
        title: "Für Familie & Kinder",
        source: events,
        memberType: "event",
        members: ["event001", "event002", "event004", "event005", "event006", "event009", "event015", "event020", "event027", "event033", "event034", "event035"],
        tags: [tags.family],
        types: [],
        subtitle: "Veranstaltungen",
        subsingular: "Veranstaltung",
        fakecount: "12"
      }
    ]
  },
  excursions: {
    title: "Ausflüge",
    tagline: "Für Weltentdecker",
    image: ["modules/moduleImages/topics/topicExcursions.jpg"],
    hasPromotion: true,
    content: [
      {
        title: "Alle Ausflüge",
        source: excursions,
        memberType: "excursion",
        members: [excursionsByLocation.DEHAM, excursionsByLocation.FRLEH, excursionsByLocation.GBSOU, excursionsByLocation.BEZEE, excursionsByLocation.NLRTM],
        tags: [],
        types: [],
        subtitle: "Ausflüge",
        subsingular: "Ausflug",
        fakecount: "4"
      }, {
        title: "Southampton/London",
        source: excursions,
        memberType: "excursion",
        members: [excursionsByLocation.GBSOU],
        tags: [],
        types: [],
        subtitle: "Ausflüge",
        subsingular: "Ausflug",
        fakecount: "31"
      }, {
        title: "Le Havre/Paris",
        source: excursions,
        memberType: "excursion",
        members: [excursionsByLocation.FRLEH],
        tags: [],
        types: [],
        subtitle: "Ausflüge",
        subsingular: "Ausflug",
        fakecount: "26"
      }, {
        title: "Zeebrügge/Brüssel",
        source: excursions,
        memberType: "excursion",
        members: [excursionsByLocation.BEZEE],
        tags: [],
        types: [],
        subtitle: "Ausflüge",
        subsingular: "Ausflug",
        fakecount: "19"
      }, {
        title: "Rotterdam/Amsterdam",
        source: excursions,
        memberType: "excursion",
        members: [excursionsByLocation.NLRTM],
        tags: [],
        types: [],
        subtitle: "Ausflüge",
        subsingular: "Ausflug",
        fakecount: "36"
      }
    ]
  },
  family: {
    title: "Familie und Kinder",
    tagline: "Für große und kleine Kreuzfahrer",
    image: ["modules/moduleImages/topics/topicFamily.jpg"],
    content: [
      {
        title: "Einrichtungen für Kinder",
        source: venues,
        members: [],
        tags: [],
        type: [types.venues.kids],
        subtitle: "aufregende Orte",
        subsingular: "aufregender Ort",
        fakecount: "6"
      }, {
        title: "Veranstaltungen",
        source: events,
        members: ["ev009", "ev010", "ev011", "ev012"],
        tags: [tags.family],
        types: [],
        subtitle: "Veranstaltungen für Familien & Kinder",
        subsingular: "Veranstaltung",
        fakecount: "16"
      }, {
        title: "Familienfreundliche Ausflüge",
        source: excursions,
        members: [],
        tags: [tags.family],
        types: [],
        subtitle: "Ausflüge",
        subsingular: "Ausflug",
        fakecount: "19"
      }, {
        title: "Produkte für Kinder",
        source: [],
        members: [],
        tags: [],
        types: [],
        subtitle: "Produkte",
        subsingular: "Produkt",
        fakecount: "51"
      }
    ]
  },
  wellnessfitness: {
    title: "Wellness & Fitness",
    tagline: "Weltreise für die Sinne",
    image: ["modules/moduleImages/topics/topicWellness.jpg"],
    hasPromotion: true,
    content: [
      {
        title: "Einrichtungen",
        source: venues,
        memberType: "venue",
        members: [],
        tags: [],
        types: [types.venues.wellnessfitness],
        subtitle: "Orte zum Wohlfühlen",
        subsingle: "Ort zum Wohlfühlen",
        fakecount: "31"
      }, {
        title: "Spa-Behandlungen",
        source: events,
        memberType: "venue",
        members: [],
        tags: [tags.wellnessfitness],
        types: [],
        subtitle: "mal die Seele baummeln lassen",
        subsingle: "Behandlung",
        fakecount: "16"
      }, {
        title: "Veranstaltungen",
        source: events,
        memberType: "event",
        members: [],
        tags: [tags.wellnessfitness],
        types: [],
        subtitle: "Sport- und Wellness-Veranstaltungen",
        subsingle: "Veranstaltung",
        fakecount: "6"
      }, {
        title: "Ausflüge",
        source: excursions,
        memberType: "excursion",
        members: [],
        tags: [tags.sport],
        types: [],
        subtitle: "besondere Ausflüge",
        subsingle: "Ausflug",
        fakecount: "9"
      }, {
        title: "Produkte",
        memberType: "product",
        source: [],
        members: [],
        tags: [tags.wellnessfitness],
        types: [],
        subtitle: "Produkte",
        subsingle: "Produkte",
        fakecount: "29"
      }
    ]
  },
  shopping: {
    title: "Shopping",
    tagline: "Willkommen im Einkaufsparadies",
    image: ["modules/moduleImages/topics/topicShopping.jpg"],
    hasPromotion: true,
    content: [
      {
        title: "Unsere Shops",
        source: events,
        memberType: "shop",
        members: [],
        tags: [tags.wellnessfitness],
        types: [],
        subtitle: "großartige Geschäfte",
        subsingle: "This cant be true",
        fakecount: "16"
      }, {
        title: "Online einkaufen",
        source: events,
        memberType: "product",
        members: [],
        tags: [tags.wellnessfitness],
        types: [],
        subtitle: "aufregende Produkte",
        subsingle: "Produkt",
        fakecount: "253"
      }
    ]
  }
};


},{"data_events":"data_events","data_excursions":"data_excursions","data_excursionsByLocation":"data_excursionsByLocation","data_locations":"data_locations","data_tags":"data_tags","data_types":"data_types","data_venues":"data_venues"}],"data_types":[function(require,module,exports){
exports.types = {
  venues: {
    buffet: {
      title: "Buffet-Restaurant",
      helptext: "Buffet Restaurant - speisen, Tischwein, Bier, Softdrinks und Tee inklusive; Kaffee- und Weinspezialitäten zum Aufpreis"
    },
    service: {
      title: "Service-Restaurant",
      helptext: "fill me later if we need that, like for a help text"
    },
    alacarte: {
      title: "A la Carte-Restaurant",
      helptext: "fill me later if we need that, like for a help text"
    },
    snackbar: {
      title: "Snack Bar",
      helptext: "fill me later if we need that, like for a help text"
    },
    nightclub: {
      title: "Nacht Club",
      helptext: "fill me later if we need that, like for a help text"
    },
    kids: {
      title: "Kinder & Jugendliche",
      helptext: "fill me later if we need that, like for a help text"
    },
    wellnessfitness: {
      title: "Wellness & Fitness",
      helptext: "fill me later if we need that, like for a help text"
    },
    place: {
      title: "Place",
      helptext: "fill me later if we need that, like for a help text"
    }
  }
};


},{}],"data_venues":[function(require,module,exports){
var locations, openinghours, tags, types;

locations = require('data_locations').locations;

tags = require('data_tags').tags;

openinghours = require('data_openinghours').openinghours;

types = require('data_types').types;

exports.venues = {
  marktrestaurant: {
    name: "Marktrestaurant",
    type: types.venues.buffet,
    tagline: "Ein Marktspaziergang im Süden",
    rating: 4,
    numRatings: 2143,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 6",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 6 am Heck, neben Bella Donna Restaurant",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/marktrestaurant.jpg",
    tags: [tags.healthy, tags.family],
    description: "Hier finden Sie an fantasievoll dekorierte Ständen mediterrane und mitteleuropäische Küche, viel frisches Obst und Gemüse sowie vielfältige Käse-, Wurst- und Schinkenspezialitäten. Unser Fisch-Buffet mit Köstlichkeiten aus der restauranteigenen Fischräucherei wird Sie begeistern. Hochwertige offene Weine an der Weinstation und ein vegetarisches Buffet mit Schonkostbar runden das Angebot ab.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen und Softdrinks"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Kaffee- und Weinspezialitäten"
    },
    minimumAge: {
      title: "Mindestalter",
      content: "ab 65 Jahren"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.marktrestaurant
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: false,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Buffet Chef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  weitewelt: {
    name: "Weite Welt Restaurant",
    type: types.venues.buffet,
    tagline: "Kulinarische Entdeckungsreisen",
    rating: 4,
    numRatings: 122,
    tagline: "Kommen Sie auf eine kulinarische Entdeckungsreise!",
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 7",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 7 am Heck, zwischen Lanai Bar und Brauhaus",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/weitewelt.jpg",
    tags: [tags.schnitzel, tags.family],
    description: "Eine Vielfalt internationaler Spezialitäten, mit einem anderen Thema an jedem Aben. An Hafentagen servieren wir Spezialitäten des jeweiligen Gastgeberlands, an Seetagen kulinarische Highlights aus Spanien, den USA u.a.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen sowie Tischwein, Bier, Softdrinks und Tee."
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Kaffee- und Weinspezialitäten"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.weitewelt
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: false,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Buffet Chef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  east: {
    name: "East Restaurant",
    type: types.venues.buffet,
    tagline: "Die ganze Vielfalt Asiens",
    rating: 3,
    numRatings: 766,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 6",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 6 am Heck, neben Bella Donna Restaurant",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/east.jpg",
    tags: [tags.asian, tags.family],
    description: "Frische asiatische Küche – leicht, exotisch und fantasievoll. Unsere Vielfalt an asiatischem und europäischem Gemüse, Fisch, Fleisch und Meeresfrüchten begeistern. Mit von Ihnen ausgewählten Zutaten können Sie sich hier Ihr persönliches Lieblingsgericht im Wok oder auf dem japanischen Teppanyaki-Grill zubereiten lassen. <br>Frühstück im East: Bei uns bekommen Sie jeden morgen Ihr Tankstellenbrötchen mit Marmelade. Garantiert keine Dumplings. Versprochen.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen und Softdrinks"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Kaffee- und Weinspezialitäten"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.east
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: false,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Buffet Chef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  belladonna: {
    name: "Bella Donna Restaurant",
    type: types.venues.buffet,
    tagline: "Das Beste aus Italien",
    rating: 5,
    numRatings: 398,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 6",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 6, zwischen Markt Restaurant und Ristorante Casa Nova ",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/belladonna.jpg",
    tags: [tags.pasta, tags.family],
    description: "Lernen Sie Spezialitäten aus allen Regionen Italiens (z. B. Lombardei, Emilia Romagna, Südtirol, Kampanien und Toskana) kennen – jeden Abend eine neue Region! Hier finden Sie die größte Auswahl an Antipasti, Pasta, Schinken und Desserts auf der AIDAprima.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen und Softdrinks"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Kaffee- und Weinspezialitäten"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.belladonna
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: false,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Buffet Chef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  fuego: {
    name: "Fuego Restaurant",
    type: types.venues.buffet,
    tagline: "Das Beste aus Italien",
    rating: 3,
    numRatings: 1187,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Activity-Deck 14",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Activity-Deck 14, direkt neben dem Four Elements",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/fuego.jpg",
    tags: [tags.pasta, tags.family],
    description: "Das besonders familienfreundliche Buffet-Restaurant! Unser spezielles Kinder-Buffet mit Fischstäbchen, Lasagne, Hackbällchen u.v.m. erfreut nicht nur die lieben Kleinen, sondern auch ihre Eltern. Burger-, Pizza- und Pasta-Stationen auf Gourmet-Niveau!",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen und Softdrinks"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Kaffee- und Weinspezialitäten"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.fuego
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: false,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Buffet Chef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  casanova: {
    name: "Ristorante Casa Nova",
    type: types.venues.service,
    rating: 5,
    numRatings: 544,
    tagline: "Verführung auf venezianische Art",
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 6",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 6, zwischen Bella Donna Restaurant und East Restaurant",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/casanova.jpg",
    tags: [tags.healthy, tags.family],
    description: "Spezialitäten der venezianischen Küche, z.B. Rindercarpaccio, luftgetrockneter italienischer Landschinken, Minestrone, Kalbsleber mit Polenta und Goldbrasse in Weißwein. Gäste können sich ihr Menü individuell zusammenstellen.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.casanova
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: true,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Buffet Chef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  brauhaus: {
    name: "Brauhaus",
    type: types.venues.service,
    tagline: "So a Gaudi",
    rating: 3,
    numRatings: 166,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 14",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "direkt neben dem Four Elements"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/brauhaus.jpg",
    tags: [tags.pasta, tags.family],
    description: "Herzhafte Spezialitäten aus dem Alpenland und verschiedene Biersorten aus der bordeigenen Brauerei, gebraut aus Meerwasser nach dem deutschem Reinheitsgebot. Unsere berühmte gegrillte Ente mit Blaukraut und Kartoffelknödeln, knusprige Schweinshaxe mit Semmelknödeln, Kalbsgulasch, Brezeln und Obazda lassen das Herz jeden Feinschmeckers höher schlagen.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.brauhaus
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "modules/moduleImages/interface/popularTimes.png"
    },
    isBookable: true,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Küchenchef",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  frenchkiss: {
    name: "French Kiss – Die Brasserie",
    type: types.venues.service,
    tagline: "Raffniert französisch",
    rating: 3,
    numRatings: 166,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 7",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 7, zwischen Brauhaus und Kochstudio",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/frenchkiss.jpg",
    tags: [tags.pasta, tags.family],
    description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.frenchkiss
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "modules/moduleImages/interface/popularTimes.png"
    },
    isBookable: true,
    isPromoted: false,
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.frenchkiss
    },
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Chef de Cuisine",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  sushibar: {
    name: "Sushi Bar",
    type: types.venues.alacarte,
    tagline: "Feine Häppchen aus Japan",
    rating: 3,
    numRatings: 166,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 8",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 8, am Lanaideck nahe Gourmet-Restaurant Rossini und Buffalo Steak House",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/sushibar.jpg",
    tags: [tags.pasta, tags.family],
    description: "Warme und kalte Sushi-Spezialitäten, verschiedene Suppen, z. B. Misosuppe, Thunfischcarpaccio und Salate. Unsere Sushi-Meister bereiten die Köstlichkeiten vor den Augen der Gäste zu.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen"
    },
    excludedInPrice: {
      title: "Persönlicher Service am Platz",
      content: "Speisen und Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.sushibar
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "modules/moduleImages/interface/popularTimes.png"
    },
    isBookable: true,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Sushi Meister",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }
      ]
    }
  },
  rossini: {
    name: "Rossini ",
    type: types.venues.service,
    tagline: "Spitzenköche zaubern für Sie",
    rating: 3,
    numRatings: 166,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 7",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 8, am Lanaideck neben Sushi Bar und nahe Buffalo Steak Haus",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/rossini.jpg",
    tags: [tags.pasta, tags.family],
    description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Speisen und Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.marktrestaurant
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "modules/moduleImages/interface/popularTimes.png"
    },
    isBookable: true,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Chef de Cuisine",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  buffalosteakhouse: {
    name: "Buffalo Steak House",
    type: types.venues.alacarte,
    tagline: "Widerstand zwecklos",
    rating: 5,
    numRatings: 61,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 8",
      preview: "modules/moduleImages/interface/deckplanPreview.png",
      content: "Deck 8, am Lanaideck nahe Sushi Bar und Gourmet- Restaurant Rossini",
      deckplan: "modules/moduleImages/interface/deckplan.png"
    },
    coverImage: "modules/moduleImages/eatdrinknightlife/buffalo.jpg",
    tags: [tags.healthy, tags.family],
    description: "Bestes American Beef und Bisonfleisch von den Tieren der  Morgan Ranch in Nebraska, USA sowie Wagyu-Rind garantieren höchsten Genuss von der Vorspeise über den Hauptgang bis hin zum Dessert.  Unser besonders saftiges, fettarmes Fleisch hat seinen erstklassiger Geschmack dank schonender Reife im gläsernen Fleischkühltresen an Bord (Dry-aging-Verfahren). Unser Grillmeister bereitet alles nach Wunsch zu. Hier geniesen Sie auch saftige Burger, American-Rib-Eye-Steak aus dem Reifeschrank und andere Spezialitäten sowie erlesene Weine und Bierspezialitäten.",
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Alle Speisen und Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.buffalosteakhouse
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: true,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Chef de Cuisine",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  },
  aussendeck: {
    name: "Außendeck 15",
    type: types.venues.place,
    tagline: "Spiel & Spaß für Groß & Klein",
    rating: 5,
    numRatings: 61,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 15",
      preview: "moduleImages/interface/deckplanPreview.png",
      content: "Deck 8, am Lanaideck nahe Sushi Bar und Gourmet- Restaurant Rossini",
      deckplan: "moduleImages/interface/deckplan.png"
    },
    coverImage: "moduleImages/eatdrinknightlife/buffalosteakhouse.jpg",
    tags: [tags.healthy, tags.family],
    description: "Bestes American Beef und Bisonfleisch von den Tieren der  Morgan Ranch in Nebraska, USA sowie Wagyu-Rind garantieren höchsten Genuss von der Vorspeise über den Hauptgang bis hin zum Dessert.  Unser besonders saftiges, fettarmes Fleisch hat seinen erstklassiger Geschmack dank schonender Reife im gläsernen Fleischkühltresen an Bord (Dry-aging-Verfahren). Unser Grillmeister bereitet alles nach Wunsch zu. Hier geniesen Sie auch saftige Burger, American-Rib-Eye-Steak aus dem Reifeschrank und andere Spezialitäten sowie erlesene Weine und Bierspezialitäten.",
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Alle Speisen und Getränke"
    },
    openingHours: {
      title: "Öffnungszeiten",
      content: openinghours.buffalosteakhouse
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "images/interface/pinkbox.svg"
    },
    isBookable: true,
    isPromoted: false,
    staff: {
      title: "Ihre Gastgeber:",
      content: [
        {
          name: "Maricel Pamintuan",
          title: "Chef de Cuisine",
          staffImage: "modules/moduleImages/personnel/MaricelPamintuan.png"
        }, {
          name: "Anna Rademacher",
          title: "Maitre'D",
          staffImage: "modules/moduleImages/personnel/AnnaRademacher.png"
        }
      ]
    }
  }
};


},{"data_locations":"data_locations","data_openinghours":"data_openinghours","data_tags":"data_tags","data_types":"data_types"}],"data_weather":[function(require,module,exports){
exports.weather = {
  weatherForecast: [
    {
      cruiseDay: 0,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.DEHAM
    }, {
      cruiseDay: 1,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.XXSEA
    }, {
      cruiseDay: 2,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.GBSOU
    }, {
      cruiseDay: 3,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.FRLEH
    }, {
      cruiseDay: 4,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.BEZEE
    }, {
      cruiseDay: 5,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.NLRTM
    }, {
      cruiseDay: 6,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.XXSEA
    }, {
      cruiseDay: 7,
      temperaturesPerHour: ["18", "18", "17", "17", "16", "17", "19", "20", "20", "21", "22", "23", "25", "26", "28", "27", "25", "24", "22", "22", "21", "20", "20", "19"],
      rainPerHour: ["0", "0", "0", "10", "10", "20", "20", "20", "20", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      weatherSymbolPerHour: ["1", "1", "1", "2", "2", "2", "2", "2", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      temperaturesPerQuarter: ["16", "23", "27", "19"],
      rainPerQuarter: ["10", "20", "0", "10"],
      weatherSymbolPerQuarter: ["1", "1", "1", "2"],
      minTemperature: "16",
      maxTemperature: "28",
      totalSymbol: "1",
      description: "Heute überwiegend sonnig, kleinere Schauer.\\nAbends Sturmböen bis 80 km/h",
      location: locations.DEHAM
    }
  ]
};


},{}],"example_venue":[function(require,module,exports){
({
  frenchkiss: {
    name: "French Kiss – Die Brasserie",
    type: "service",
    tagline: "Raffniert französisch",
    rating: 3,
    numRatings: 166,
    menucard: menucards.brauhaus,
    wayfinding: {
      title: "Wegbeschreibung",
      deck: "Deck 7",
      preview: "moduleImages/interface/deckplanPreview.png",
      content: "Deck 7, zwischen Brauhaus und Kochstudio",
      deckplan: "moduleImages/interface/deckplan.png"
    },
    coverImage: "moduleImages/eatdrinknightlife/brauhaus.jpg",
    tags: [tags.pasta, tags.family],
    description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer.",
    includedInPrice: {
      title: "Inklusive:",
      content: "Alle Speisen"
    },
    excludedInPrice: {
      title: "Zum Aufpreis",
      content: "Getränke"
    },
    minimumAge: {
      title: "Mindestalter",
      content: "Ab 18 Jahren"
    },
    popularTimes: {
      title: "Beliebte Besuchszeiten",
      content: "moduleImages/interface/popularTimes.png"
    },
    isBookable: true,
    isPromoted: false,
    openingHours: {
      title: "Öffnungszeiten",
      content: [
        {
          date: "04/29/2017",
          weekday: "saturday",
          times: [
            {
              open: "7:00",
              close: "10:00"
            }, {
              open: "17:00",
              close: "19:00"
            }, {
              open: "19:30",
              close: "21:00"
            }
          ]
        }, {
          date: "04/30/2017",
          weekday: "sunday",
          times: [
            {
              open: "7:00",
              close: "9:00"
            }, {
              open: "11:00",
              close: "14:00"
            }, {
              open: "17:30",
              close: "19:00"
            }, {
              open: "19:30",
              close: "21:00"
            }
          ]
        }, {
          date: "05/01/2017",
          weekday: "monday",
          times: [
            {
              open: "7:30",
              close: "9:00"
            }, {
              open: "11:30",
              close: "14:00"
            }, {
              open: "17:30",
              close: "19:00"
            }, {
              open: "19:30",
              close: "21:00"
            }
          ]
        }, {
          date: "05/02/2017",
          weekday: "tuesday",
          times: [
            {
              open: "6:30",
              close: "9:30"
            }, {
              open: "18:00",
              close: "19:00"
            }, {
              open: "19:30",
              close: "20:00"
            }
          ]
        }, {
          date: "05/03/2017",
          weekday: "wednesday",
          times: [
            {
              open: "7:00",
              close: "10:00"
            }, {
              open: "11:00",
              close: "14:30"
            }, {
              open: "18:00",
              close: "21:00"
            }
          ]
        }, {
          date: "05/04/2017",
          weekday: "thursday",
          times: [
            {
              open: "7:30",
              close: "9:00"
            }, {
              open: "11:30",
              close: "14:00"
            }, {
              open: "17:00",
              close: "19:00"
            }, {
              open: "19:30",
              close: "21:30"
            }
          ]
        }, {
          date: "05/05/2017",
          weekday: "friday",
          times: [
            {
              open: "6:30",
              close: "10:00"
            }, {
              open: "11:00",
              close: "14:00"
            }, {
              open: "17:30",
              close: "19:00"
            }, {
              open: "19:30",
              close: "21:00"
            }
          ]
        }, {
          date: "05/06/2017",
          weekday: "saturday",
          times: [
            {
              open: "7:00",
              close: "10:00"
            }, {
              open: "11:00",
              close: "14:30"
            }, {
              open: "17:00",
              close: "19:00"
            }, {
              open: "19:30",
              close: "22:00"
            }
          ]
        }
      ]
    }
  }
});


},{}],"moment":[function(require,module,exports){
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.17.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm

hooks.defineLocale('af', {
    months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
    weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM : function (input) {
        return /^nm$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'vm' : 'VM';
        } else {
            return isLower ? 'nm' : 'NM';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Vandag om] LT',
        nextDay : '[Môre om] LT',
        nextWeek : 'dddd [om] LT',
        lastDay : '[Gister om] LT',
        lastWeek : '[Laas] dddd [om] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'oor %s',
        past : '%s gelede',
        s : '\'n paar sekondes',
        m : '\'n minuut',
        mm : '%d minute',
        h : '\'n uur',
        hh : '%d ure',
        d : '\'n dag',
        dd : '%d dae',
        M : '\'n maand',
        MM : '%d maande',
        y : '\'n jaar',
        yy : '%d jaar'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
    },
    week : {
        dow : 1, // Maandag is die eerste dag van die week.
        doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    }
});

//! moment.js locale configuration
//! locale : Arabic (Algeria) [ar-dz]
//! author : Noureddine LOUAHEDJ : https://github.com/noureddineme

hooks.defineLocale('ar-dz', {
    months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 4  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Arabic (Lybia) [ar-ly]
//! author : Ali Hmer: https://github.com/kikoanis

var symbolMap = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0'
};
var pluralForm = function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
};
var plurals = {
    s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var pluralize = function (u) {
    return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
            str = plurals[u][pluralForm(number)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
    };
};
var months$1 = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];

hooks.defineLocale('ar-ly', {
    months : months$1,
    monthsShort : months$1,
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/\u200FM/\u200FYYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'بعد %s',
        past : 'منذ %s',
        s : pluralize('s'),
        m : pluralize('m'),
        mm : pluralize('m'),
        h : pluralize('h'),
        hh : pluralize('h'),
        d : pluralize('d'),
        dd : pluralize('d'),
        M : pluralize('M'),
        MM : pluralize('M'),
        y : pluralize('y'),
        yy : pluralize('y')
    },
    preparse: function (string) {
        return string.replace(/\u200f/g, '').replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Arabic (Morocco) [ar-ma]
//! author : ElFadili Yassine : https://github.com/ElFadiliY
//! author : Abdel Said : https://github.com/abdelsaid

hooks.defineLocale('ar-ma', {
    months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Arabic (Saudi Arabia) [ar-sa]
//! author : Suhail Alkowaileet : https://github.com/xsoh

var symbolMap$1 = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠'
};
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};

hooks.defineLocale('ar-sa', {
    months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    preparse: function (string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$1[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio

hooks.defineLocale('ar-tn', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi

var symbolMap$2 = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠'
};
var numberMap$1 = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
var pluralForm$1 = function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
};
var plurals$1 = {
    s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var pluralize$1 = function (u) {
    return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm$1(number),
            str = plurals$1[u][pluralForm$1(number)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
    };
};
var months$2 = [
    'كانون الثاني يناير',
    'شباط فبراير',
    'آذار مارس',
    'نيسان أبريل',
    'أيار مايو',
    'حزيران يونيو',
    'تموز يوليو',
    'آب أغسطس',
    'أيلول سبتمبر',
    'تشرين الأول أكتوبر',
    'تشرين الثاني نوفمبر',
    'كانون الأول ديسمبر'
];

hooks.defineLocale('ar', {
    months : months$2,
    monthsShort : months$2,
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/\u200FM/\u200FYYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'بعد %s',
        past : 'منذ %s',
        s : pluralize$1('s'),
        m : pluralize$1('m'),
        mm : pluralize$1('m'),
        h : pluralize$1('h'),
        hh : pluralize$1('h'),
        d : pluralize$1('d'),
        dd : pluralize$1('d'),
        M : pluralize$1('M'),
        MM : pluralize$1('M'),
        y : pluralize$1('y'),
        yy : pluralize$1('y')
    },
    preparse: function (string) {
        return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap$1[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$2[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev

var suffixes = {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-üncü',
    4: '-üncü',
    100: '-üncü',
    6: '-ncı',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-ıncı',
    90: '-ıncı'
};

hooks.defineLocale('az', {
    months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[bugün saat] LT',
        nextDay : '[sabah saat] LT',
        nextWeek : '[gələn həftə] dddd [saat] LT',
        lastDay : '[dünən] LT',
        lastWeek : '[keçən həftə] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s sonra',
        past : '%s əvvəl',
        s : 'birneçə saniyyə',
        m : 'bir dəqiqə',
        mm : '%d dəqiqə',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M : 'bir ay',
        MM : '%d ay',
        y : 'bir il',
        yy : '%d il'
    },
    meridiemParse: /gecə|səhər|gündüz|axşam/,
    isPM : function (input) {
        return /^(gündüz|axşam)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'gecə';
        } else if (hour < 12) {
            return 'səhər';
        } else if (hour < 17) {
            return 'gündüz';
        } else {
            return 'axşam';
        }
    },
    ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + '-ıncı';
        }
        var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elensúle : https://github.com/Oire

function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
        'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
        'dd': 'дзень_дні_дзён',
        'MM': 'месяц_месяцы_месяцаў',
        'yy': 'год_гады_гадоў'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвіліна' : 'хвіліну';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'гадзіна' : 'гадзіну';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}

hooks.defineLocale('be', {
    months : {
        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
        standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
    },
    monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays : {
        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
        standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY г.',
        LLL : 'D MMMM YYYY г., HH:mm',
        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar : {
        sameDay: '[Сёння ў] LT',
        nextDay: '[Заўтра ў] LT',
        lastDay: '[Учора ў] LT',
        nextWeek: function () {
            return '[У] dddd [ў] LT';
        },
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                    return '[У мінулы] dddd [ў] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'праз %s',
        past : '%s таму',
        s : 'некалькі секунд',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : relativeTimeWithPlural,
        hh : relativeTimeWithPlural,
        d : 'дзень',
        dd : relativeTimeWithPlural,
        M : 'месяц',
        MM : relativeTimeWithPlural,
        y : 'год',
        yy : relativeTimeWithPlural
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM : function (input) {
        return /^(дня|вечара)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночы';
        } else if (hour < 12) {
            return 'раніцы';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечара';
        }
    },
    ordinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
            case 'D':
                return number + '-га';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

hooks.defineLocale('bg', {
    months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[Днес в] LT',
        nextDay : '[Утре в] LT',
        nextWeek : 'dddd [в] LT',
        lastDay : '[Вчера в] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'след %s',
        past : 'преди %s',
        s : 'няколко секунди',
        m : 'минута',
        mm : '%d минути',
        h : 'час',
        hh : '%d часа',
        d : 'ден',
        dd : '%d дни',
        M : 'месец',
        MM : '%d месеца',
        y : 'година',
        yy : '%d години'
    },
    ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

var symbolMap$3 = {
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
    '0': '০'
};
var numberMap$2 = {
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    '০': '0'
};

hooks.defineLocale('bn', {
    months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
    weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
    weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
    longDateFormat : {
        LT : 'A h:mm সময়',
        LTS : 'A h:mm:ss সময়',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm সময়',
        LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
    },
    calendar : {
        sameDay : '[আজ] LT',
        nextDay : '[আগামীকাল] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[গতকাল] LT',
        lastWeek : '[গত] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s পরে',
        past : '%s আগে',
        s : 'কয়েক সেকেন্ড',
        m : 'এক মিনিট',
        mm : '%d মিনিট',
        h : 'এক ঘন্টা',
        hh : '%d ঘন্টা',
        d : 'এক দিন',
        dd : '%d দিন',
        M : 'এক মাস',
        MM : '%d মাস',
        y : 'এক বছর',
        yy : '%d বছর'
    },
    preparse: function (string) {
        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
            return numberMap$2[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$3[match];
        });
    },
    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'রাত' && hour >= 4) ||
                (meridiem === 'দুপুর' && hour < 5) ||
                meridiem === 'বিকাল') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'রাত';
        } else if (hour < 10) {
            return 'সকাল';
        } else if (hour < 17) {
            return 'দুপুর';
        } else if (hour < 20) {
            return 'বিকাল';
        } else {
            return 'রাত';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog

var symbolMap$4 = {
    '1': '༡',
    '2': '༢',
    '3': '༣',
    '4': '༤',
    '5': '༥',
    '6': '༦',
    '7': '༧',
    '8': '༨',
    '9': '༩',
    '0': '༠'
};
var numberMap$3 = {
    '༡': '1',
    '༢': '2',
    '༣': '3',
    '༤': '4',
    '༥': '5',
    '༦': '6',
    '༧': '7',
    '༨': '8',
    '༩': '9',
    '༠': '0'
};

hooks.defineLocale('bo', {
    months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
    weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[དི་རིང] LT',
        nextDay : '[སང་ཉིན] LT',
        nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
        lastDay : '[ཁ་སང] LT',
        lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ལ་',
        past : '%s སྔན་ལ',
        s : 'ལམ་སང',
        m : 'སྐར་མ་གཅིག',
        mm : '%d སྐར་མ',
        h : 'ཆུ་ཚོད་གཅིག',
        hh : '%d ཆུ་ཚོད',
        d : 'ཉིན་གཅིག',
        dd : '%d ཉིན་',
        M : 'ཟླ་བ་གཅིག',
        MM : '%d ཟླ་བ',
        y : 'ལོ་གཅིག',
        yy : '%d ལོ'
    },
    preparse: function (string) {
        return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
            return numberMap$3[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$4[match];
        });
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                (meridiem === 'ཉིན་གུང' && hour < 5) ||
                meridiem === 'དགོང་དག') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'མཚན་མོ';
        } else if (hour < 10) {
            return 'ཞོགས་ཀས';
        } else if (hour < 17) {
            return 'ཉིན་གུང';
        } else if (hour < 20) {
            return 'དགོང་དག';
        } else {
            return 'མཚན་མོ';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Breton [br]
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

function relativeTimeWithMutation(number, withoutSuffix, key) {
    var format = {
        'mm': 'munutenn',
        'MM': 'miz',
        'dd': 'devezh'
    };
    return number + ' ' + mutation(format[key], number);
}
function specialMutationForYears(number) {
    switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
            return number + ' bloaz';
        default:
            return number + ' vloaz';
    }
}
function lastNumber(number) {
    if (number > 9) {
        return lastNumber(number % 10);
    }
    return number;
}
function mutation(text, number) {
    if (number === 2) {
        return softMutation(text);
    }
    return text;
}
function softMutation(text) {
    var mutationTable = {
        'm': 'v',
        'b': 'v',
        'd': 'z'
    };
    if (mutationTable[text.charAt(0)] === undefined) {
        return text;
    }
    return mutationTable[text.charAt(0)] + text.substring(1);
}

hooks.defineLocale('br', {
    months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
    monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h[e]mm A',
        LTS : 'h[e]mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D [a viz] MMMM YYYY',
        LLL : 'D [a viz] MMMM YYYY h[e]mm A',
        LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
    },
    calendar : {
        sameDay : '[Hiziv da] LT',
        nextDay : '[Warc\'hoazh da] LT',
        nextWeek : 'dddd [da] LT',
        lastDay : '[Dec\'h da] LT',
        lastWeek : 'dddd [paset da] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'a-benn %s',
        past : '%s \'zo',
        s : 'un nebeud segondennoù',
        m : 'ur vunutenn',
        mm : relativeTimeWithMutation,
        h : 'un eur',
        hh : '%d eur',
        d : 'un devezh',
        dd : relativeTimeWithMutation,
        M : 'ur miz',
        MM : relativeTimeWithMutation,
        y : 'ur bloaz',
        yy : specialMutationForYears
    },
    ordinalParse: /\d{1,2}(añ|vet)/,
    ordinal : function (number) {
        var output = (number === 1) ? 'añ' : 'vet';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Bosnian [bs]
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Marković

function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
    }
}

hooks.defineLocale('bs', {
    months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danas u] LT',
        nextDay  : '[sutra u] LT',
        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[jučer u] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'par sekundi',
        m      : translate,
        mm     : translate,
        h      : translate,
        hh     : translate,
        d      : 'dan',
        dd     : translate,
        M      : 'mjesec',
        MM     : translate,
        y      : 'godinu',
        yy     : translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

hooks.defineLocale('ca', {
    months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
    monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
    monthsParseExact : true,
    weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextDay : function () {
            return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastDay : function () {
            return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'd\'aquí %s',
        past : 'fa %s',
        s : 'uns segons',
        m : 'un minut',
        mm : '%d minuts',
        h : 'una hora',
        hh : '%d hores',
        d : 'un dia',
        dd : '%d dies',
        M : 'un mes',
        MM : '%d mesos',
        y : 'un any',
        yy : '%d anys'
    },
    ordinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal : function (number, period) {
        var output = (number === 1) ? 'r' :
            (number === 2) ? 'n' :
            (number === 3) ? 'r' :
            (number === 4) ? 't' : 'è';
        if (period === 'w' || period === 'W') {
            output = 'a';
        }
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela

var months$3 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
function plural$1(n) {
    return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
}
function translate$1(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural$1(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural$1(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural$1(number) ? 'dny' : 'dní');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural$1(number) ? 'měsíce' : 'měsíců');
            } else {
                return result + 'měsíci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural$1(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
    }
}

hooks.defineLocale('cs', {
    months : months$3,
    monthsShort : monthsShort,
    monthsParse : (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months$3, monthsShort)),
    shortMonthsParse : (function (monthsShort) {
        var i, _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse : (function (months) {
        var i, _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months$3)),
    weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat : {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd D. MMMM YYYY H:mm',
        l : 'D. M. YYYY'
    },
    calendar : {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : 'před %s',
        s : translate$1,
        m : translate$1,
        mm : translate$1,
        h : translate$1,
        hh : translate$1,
        d : translate$1,
        dd : translate$1,
        M : translate$1,
        MM : translate$1,
        y : translate$1,
        yy : translate$1
    },
    ordinalParse : /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

hooks.defineLocale('cv', {
    months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
    monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
    weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
    weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
    weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
        LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
        LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
    },
    calendar : {
        sameDay: '[Паян] LT [сехетре]',
        nextDay: '[Ыран] LT [сехетре]',
        lastDay: '[Ӗнер] LT [сехетре]',
        nextWeek: '[Ҫитес] dddd LT [сехетре]',
        lastWeek: '[Иртнӗ] dddd LT [сехетре]',
        sameElse: 'L'
    },
    relativeTime : {
        future : function (output) {
            var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
            return output + affix;
        },
        past : '%s каялла',
        s : 'пӗр-ик ҫеккунт',
        m : 'пӗр минут',
        mm : '%d минут',
        h : 'пӗр сехет',
        hh : '%d сехет',
        d : 'пӗр кун',
        dd : '%d кун',
        M : 'пӗр уйӑх',
        MM : '%d уйӑх',
        y : 'пӗр ҫул',
        yy : '%d ҫул'
    },
    ordinalParse: /\d{1,2}-мӗш/,
    ordinal : '%d-мӗш',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Welsh [cy]
//! author : Robert Allen : https://github.com/robgallen
//! author : https://github.com/ryangreaves

hooks.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    weekdaysParseExact : true,
    // time formats are the same as en-gb
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Heddiw am] LT',
        nextDay: '[Yfory am] LT',
        nextWeek: 'dddd [am] LT',
        lastDay: '[Ddoe am] LT',
        lastWeek: 'dddd [diwethaf am] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'mewn %s',
        past: '%s yn ôl',
        s: 'ychydig eiliadau',
        m: 'munud',
        mm: '%d munud',
        h: 'awr',
        hh: '%d awr',
        d: 'diwrnod',
        dd: '%d diwrnod',
        M: 'mis',
        MM: '%d mis',
        y: 'blwyddyn',
        yy: '%d flynedd'
    },
    ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
    ordinal: function (number) {
        var b = number,
            output = '',
            lookup = [
                '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
            ];
        if (b > 20) {
            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                output = 'fed'; // not 30ain, 70ain or 90ain
            } else {
                output = 'ain';
            }
        } else if (b > 0) {
            output = lookup[b];
        }
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase

hooks.defineLocale('da', {
    months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[I dag kl.] LT',
        nextDay : '[I morgen kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[I går kl.] LT',
        lastWeek : '[sidste] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s siden',
        s : 'få sekunder',
        m : 'et minut',
        mm : '%d minutter',
        h : 'en time',
        hh : '%d timer',
        d : 'en dag',
        dd : '%d dage',
        M : 'en måned',
        MM : '%d måneder',
        y : 'et år',
        yy : '%d år'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : German (Austria) [de-at]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
//! author : Mikolaj Dadela : https://github.com/mik01aj

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

hooks.defineLocale('de-at', {
    months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime : {
        future : 'in %s',
        past : 'vor %s',
        s : 'ein paar Sekunden',
        m : processRelativeTime,
        mm : '%d Minuten',
        h : processRelativeTime,
        hh : '%d Stunden',
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj

function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

hooks.defineLocale('de', {
    months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime : {
        future : 'in %s',
        past : 'vor %s',
        s : 'ein paar Sekunden',
        m : processRelativeTime$1,
        mm : '%d Minuten',
        h : processRelativeTime$1,
        hh : '%d Stunden',
        d : processRelativeTime$1,
        dd : processRelativeTime$1,
        M : processRelativeTime$1,
        MM : processRelativeTime$1,
        y : processRelativeTime$1,
        yy : processRelativeTime$1
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

var months$4 = [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރީލު',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓު',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު'
];
var weekdays = [
    'އާދިއްތަ',
    'ހޯމަ',
    'އަންގާރަ',
    'ބުދަ',
    'ބުރާސްފަތި',
    'ހުކުރު',
    'ހޮނިހިރު'
];

hooks.defineLocale('dv', {
    months : months$4,
    monthsShort : months$4,
    weekdays : weekdays,
    weekdaysShort : weekdays,
    weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
    longDateFormat : {

        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/M/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /މކ|މފ/,
    isPM : function (input) {
        return 'މފ' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'މކ';
        } else {
            return 'މފ';
        }
    },
    calendar : {
        sameDay : '[މިއަދު] LT',
        nextDay : '[މާދަމާ] LT',
        nextWeek : 'dddd LT',
        lastDay : '[އިއްޔެ] LT',
        lastWeek : '[ފާއިތުވި] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ތެރޭގައި %s',
        past : 'ކުރިން %s',
        s : 'ސިކުންތުކޮޅެއް',
        m : 'މިނިޓެއް',
        mm : 'މިނިޓު %d',
        h : 'ގަޑިއިރެއް',
        hh : 'ގަޑިއިރު %d',
        d : 'ދުވަހެއް',
        dd : 'ދުވަސް %d',
        M : 'މަހެއް',
        MM : 'މަސް %d',
        y : 'އަހަރެއް',
        yy : 'އަހަރު %d'
    },
    preparse: function (string) {
        return string.replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, '،');
    },
    week : {
        dow : 7,  // Sunday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

hooks.defineLocale('el', {
    monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
    months : function (momentToFormat, format) {
        if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
        } else {
            return this._monthsNominativeEl[momentToFormat.month()];
        }
    },
    monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
        } else {
            return isLower ? 'πμ' : 'ΠΜ';
        }
    },
    isPM : function (input) {
        return ((input + '').toLowerCase()[0] === 'μ');
    },
    meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendarEl : {
        sameDay : '[Σήμερα {}] LT',
        nextDay : '[Αύριο {}] LT',
        nextWeek : 'dddd [{}] LT',
        lastDay : '[Χθες {}] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 6:
                    return '[το προηγούμενο] dddd [{}] LT';
                default:
                    return '[την προηγούμενη] dddd [{}] LT';
            }
        },
        sameElse : 'L'
    },
    calendar : function (key, mom) {
        var output = this._calendarEl[key],
            hours = mom && mom.hours();
        if (isFunction(output)) {
            output = output.apply(mom);
        }
        return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
    },
    relativeTime : {
        future : 'σε %s',
        past : '%s πριν',
        s : 'λίγα δευτερόλεπτα',
        m : 'ένα λεπτό',
        mm : '%d λεπτά',
        h : 'μία ώρα',
        hh : '%d ώρες',
        d : 'μία μέρα',
        dd : '%d μέρες',
        M : 'ένας μήνας',
        MM : '%d μήνες',
        y : 'ένας χρόνος',
        yy : '%d χρόνια'
    },
    ordinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal

hooks.defineLocale('en-au', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

hooks.defineLocale('en-ca', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'YYYY-MM-DD',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

hooks.defineLocale('en-gb', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge

hooks.defineLocale('en-ie', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor

hooks.defineLocale('en-nz', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Esperanto [eo]
//! author : Colin Dean : https://github.com/colindean
//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

hooks.defineLocale('eo', {
    months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
    weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
    weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D[-an de] MMMM, YYYY',
        LLL : 'D[-an de] MMMM, YYYY HH:mm',
        LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function (input) {
        return input.charAt(0).toLowerCase() === 'p';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'p.t.m.' : 'P.T.M.';
        } else {
            return isLower ? 'a.t.m.' : 'A.T.M.';
        }
    },
    calendar : {
        sameDay : '[Hodiaŭ je] LT',
        nextDay : '[Morgaŭ je] LT',
        nextWeek : 'dddd [je] LT',
        lastDay : '[Hieraŭ je] LT',
        lastWeek : '[pasinta] dddd [je] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'je %s',
        past : 'antaŭ %s',
        s : 'sekundoj',
        m : 'minuto',
        mm : '%d minutoj',
        h : 'horo',
        hh : '%d horoj',
        d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
        dd : '%d tagoj',
        M : 'monato',
        MM : '%d monatoj',
        y : 'jaro',
        yy : '%d jaroj'
    },
    ordinalParse: /\d{1,2}a/,
    ordinal : '%da',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]

var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort$1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

hooks.defineLocale('es-do', {
    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShort$1[m.month()];
        } else {
            return monthsShortDot[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY h:mm A',
        LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'en %s',
        past : 'hace %s',
        s : 'unos segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'una hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un año',
        yy : '%d años'
    },
    ordinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc

var monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

hooks.defineLocale('es', {
    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShort$2[m.month()];
        } else {
            return monthsShortDot$1[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY H:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'en %s',
        past : 'hace %s',
        s : 'unos segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'una hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un año',
        yy : '%d años'
    },
    ordinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka

function processRelativeTime$2(number, withoutSuffix, key, isFuture) {
    var format = {
        's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        'm' : ['ühe minuti', 'üks minut'],
        'mm': [number + ' minuti', number + ' minutit'],
        'h' : ['ühe tunni', 'tund aega', 'üks tund'],
        'hh': [number + ' tunni', number + ' tundi'],
        'd' : ['ühe päeva', 'üks päev'],
        'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
        'MM': [number + ' kuu', number + ' kuud'],
        'y' : ['ühe aasta', 'aasta', 'üks aasta'],
        'yy': [number + ' aasta', number + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
}

hooks.defineLocale('et', {
    months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat : {
        LT   : 'H:mm',
        LTS : 'H:mm:ss',
        L    : 'DD.MM.YYYY',
        LL   : 'D. MMMM YYYY',
        LLL  : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[Täna,] LT',
        nextDay  : '[Homme,] LT',
        nextWeek : '[Järgmine] dddd LT',
        lastDay  : '[Eile,] LT',
        lastWeek : '[Eelmine] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s pärast',
        past   : '%s tagasi',
        s      : processRelativeTime$2,
        m      : processRelativeTime$2,
        mm     : processRelativeTime$2,
        h      : processRelativeTime$2,
        hh     : processRelativeTime$2,
        d      : processRelativeTime$2,
        dd     : '%d päeva',
        M      : processRelativeTime$2,
        MM     : processRelativeTime$2,
        y      : processRelativeTime$2,
        yy     : processRelativeTime$2
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Basque [eu]
//! author : Eneko Illarramendi : https://github.com/eillarra

hooks.defineLocale('eu', {
    months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    monthsParseExact : true,
    weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY[ko] MMMM[ren] D[a]',
        LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
        LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
        l : 'YYYY-M-D',
        ll : 'YYYY[ko] MMM D[a]',
        lll : 'YYYY[ko] MMM D[a] HH:mm',
        llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
    },
    calendar : {
        sameDay : '[gaur] LT[etan]',
        nextDay : '[bihar] LT[etan]',
        nextWeek : 'dddd LT[etan]',
        lastDay : '[atzo] LT[etan]',
        lastWeek : '[aurreko] dddd LT[etan]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s barru',
        past : 'duela %s',
        s : 'segundo batzuk',
        m : 'minutu bat',
        mm : '%d minutu',
        h : 'ordu bat',
        hh : '%d ordu',
        d : 'egun bat',
        dd : '%d egun',
        M : 'hilabete bat',
        MM : '%d hilabete',
        y : 'urte bat',
        yy : '%d urte'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio

var symbolMap$5 = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
};
var numberMap$4 = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
};

hooks.defineLocale('fa', {
    months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /قبل از ظهر|بعد از ظهر/,
    isPM: function (input) {
        return /بعد از ظهر/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'قبل از ظهر';
        } else {
            return 'بعد از ظهر';
        }
    },
    calendar : {
        sameDay : '[امروز ساعت] LT',
        nextDay : '[فردا ساعت] LT',
        nextWeek : 'dddd [ساعت] LT',
        lastDay : '[دیروز ساعت] LT',
        lastWeek : 'dddd [پیش] [ساعت] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'در %s',
        past : '%s پیش',
        s : 'چندین ثانیه',
        m : 'یک دقیقه',
        mm : '%d دقیقه',
        h : 'یک ساعت',
        hh : '%d ساعت',
        d : 'یک روز',
        dd : '%d روز',
        M : 'یک ماه',
        MM : '%d ماه',
        y : 'یک سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/[۰-۹]/g, function (match) {
            return numberMap$4[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$5[match];
        }).replace(/,/g, '،');
    },
    ordinalParse: /\d{1,2}م/,
    ordinal : '%dم',
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12 // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof

var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
var numbersFuture = [
        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
        numbersPast[7], numbersPast[8], numbersPast[9]
    ];
function translate$2(number, withoutSuffix, key, isFuture) {
    var result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
}
function verbalNumber(number, isFuture) {
    return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
}

hooks.defineLocale('fi', {
    months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'Do MMMM[ta] YYYY',
        LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l : 'D.M.YYYY',
        ll : 'Do MMM YYYY',
        lll : 'Do MMM YYYY, [klo] HH.mm',
        llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar : {
        sameDay : '[tänään] [klo] LT',
        nextDay : '[huomenna] [klo] LT',
        nextWeek : 'dddd [klo] LT',
        lastDay : '[eilen] [klo] LT',
        lastWeek : '[viime] dddd[na] [klo] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s päästä',
        past : '%s sitten',
        s : translate$2,
        m : translate$2,
        mm : translate$2,
        h : translate$2,
        hh : translate$2,
        d : translate$2,
        dd : translate$2,
        M : translate$2,
        MM : translate$2,
        y : translate$2,
        yy : translate$2
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123

hooks.defineLocale('fo', {
    months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
    weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
    weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Í dag kl.] LT',
        nextDay : '[Í morgin kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[Í gjár kl.] LT',
        lastWeek : '[síðstu] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'um %s',
        past : '%s síðani',
        s : 'fá sekund',
        m : 'ein minutt',
        mm : '%d minuttir',
        h : 'ein tími',
        hh : '%d tímar',
        d : 'ein dagur',
        dd : '%d dagar',
        M : 'ein mánaði',
        MM : '%d mánaðir',
        y : 'eitt ár',
        yy : '%d ár'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

hooks.defineLocale('fr-ca', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Aujourd\'hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    ordinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    }
});

//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard

hooks.defineLocale('fr-ch', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Aujourd\'hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    ordinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice

hooks.defineLocale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Aujourd\'hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    ordinalParse: /\d{1,2}(er|)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : '');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Frisian [fy]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v

var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_');
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

hooks.defineLocale('fy', {
    months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
    weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[hjoed om] LT',
        nextDay: '[moarn om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[juster om] LT',
        lastWeek: '[ôfrûne] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'oer %s',
        past : '%s lyn',
        s : 'in pear sekonden',
        m : 'ien minút',
        mm : '%d minuten',
        h : 'ien oere',
        hh : '%d oeren',
        d : 'ien dei',
        dd : '%d dagen',
        M : 'ien moanne',
        MM : '%d moannen',
        y : 'ien jier',
        yy : '%d jierren'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown

var months$5 = [
    'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
];

var monthsShort$3 = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

var weekdays$1 = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

hooks.defineLocale('gd', {
    months : months$5,
    monthsShort : monthsShort$3,
    monthsParseExact : true,
    weekdays : weekdays$1,
    weekdaysShort : weekdaysShort,
    weekdaysMin : weekdaysMin,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[An-diugh aig] LT',
        nextDay : '[A-màireach aig] LT',
        nextWeek : 'dddd [aig] LT',
        lastDay : '[An-dè aig] LT',
        lastWeek : 'dddd [seo chaidh] [aig] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ann an %s',
        past : 'bho chionn %s',
        s : 'beagan diogan',
        m : 'mionaid',
        mm : '%d mionaidean',
        h : 'uair',
        hh : '%d uairean',
        d : 'latha',
        dd : '%d latha',
        M : 'mìos',
        MM : '%d mìosan',
        y : 'bliadhna',
        yy : '%d bliadhna'
    },
    ordinalParse : /\d{1,2}(d|na|mh)/,
    ordinal : function (number) {
        var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

hooks.defineLocale('gl', {
    months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY H:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
        },
        nextDay : function () {
            return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
        },
        lastDay : function () {
            return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
        },
        lastWeek : function () {
            return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : function (str) {
            if (str.indexOf('un') === 0) {
                return 'n' + str;
            }
            return 'en ' + str;
        },
        past : 'hai %s',
        s : 'uns segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'unha hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un ano',
        yy : '%d anos'
    },
    ordinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter

hooks.defineLocale('he', {
    months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [ב]MMMM YYYY',
        LLL : 'D [ב]MMMM YYYY HH:mm',
        LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
        l : 'D/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[היום ב־]LT',
        nextDay : '[מחר ב־]LT',
        nextWeek : 'dddd [בשעה] LT',
        lastDay : '[אתמול ב־]LT',
        lastWeek : '[ביום] dddd [האחרון בשעה] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'בעוד %s',
        past : 'לפני %s',
        s : 'מספר שניות',
        m : 'דקה',
        mm : '%d דקות',
        h : 'שעה',
        hh : function (number) {
            if (number === 2) {
                return 'שעתיים';
            }
            return number + ' שעות';
        },
        d : 'יום',
        dd : function (number) {
            if (number === 2) {
                return 'יומיים';
            }
            return number + ' ימים';
        },
        M : 'חודש',
        MM : function (number) {
            if (number === 2) {
                return 'חודשיים';
            }
            return number + ' חודשים';
        },
        y : 'שנה',
        yy : function (number) {
            if (number === 2) {
                return 'שנתיים';
            } else if (number % 10 === 0 && number !== 10) {
                return number + ' שנה';
            }
            return number + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM : function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        } else if (hour < 10) {
            return 'בבוקר';
        } else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        } else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        } else {
            return 'בערב';
        }
    }
});

//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal

var symbolMap$6 = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap$5 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

hooks.defineLocale('hi', {
    months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat : {
        LT : 'A h:mm बजे',
        LTS : 'A h:mm:ss बजे',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm बजे',
        LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[कल] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[कल] LT',
        lastWeek : '[पिछले] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s में',
        past : '%s पहले',
        s : 'कुछ ही क्षण',
        m : 'एक मिनट',
        mm : '%d मिनट',
        h : 'एक घंटा',
        hh : '%d घंटे',
        d : 'एक दिन',
        dd : '%d दिन',
        M : 'एक महीने',
        MM : '%d महीने',
        y : 'एक वर्ष',
        yy : '%d वर्ष'
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$5[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$6[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सुबह') {
            return hour;
        } else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        } else if (hour < 10) {
            return 'सुबह';
        } else if (hour < 17) {
            return 'दोपहर';
        } else if (hour < 20) {
            return 'शाम';
        } else {
            return 'रात';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Bojan Marković : https://github.com/bmarkovic

function translate$3(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
    }
}

hooks.defineLocale('hr', {
    months : {
        format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
        standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
    },
    monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danas u] LT',
        nextDay  : '[sutra u] LT',
        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[jučer u] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'par sekundi',
        m      : translate$3,
        mm     : translate$3,
        h      : translate$3,
        hh     : translate$3,
        d      : 'dan',
        dd     : translate$3,
        M      : 'mjesec',
        MM     : translate$3,
        y      : 'godinu',
        yy     : translate$3
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner

var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
function translate$4(number, withoutSuffix, key, isFuture) {
    var num = number,
        suffix;
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
function week(isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
}

hooks.defineLocale('hu', {
    months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'YYYY.MM.DD.',
        LL : 'YYYY. MMMM D.',
        LLL : 'YYYY. MMMM D. H:mm',
        LLLL : 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        } else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar : {
        sameDay : '[ma] LT[-kor]',
        nextDay : '[holnap] LT[-kor]',
        nextWeek : function () {
            return week.call(this, true);
        },
        lastDay : '[tegnap] LT[-kor]',
        lastWeek : function () {
            return week.call(this, false);
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s múlva',
        past : '%s',
        s : translate$4,
        m : translate$4,
        mm : translate$4,
        h : translate$4,
        hh : translate$4,
        d : translate$4,
        dd : translate$4,
        M : translate$4,
        MM : translate$4,
        y : translate$4,
        yy : translate$4
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan

hooks.defineLocale('hy-am', {
    months : {
        format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
        standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
    },
    monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
    weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
    weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY թ.',
        LLL : 'D MMMM YYYY թ., HH:mm',
        LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
    },
    calendar : {
        sameDay: '[այսօր] LT',
        nextDay: '[վաղը] LT',
        lastDay: '[երեկ] LT',
        nextWeek: function () {
            return 'dddd [օրը ժամը] LT';
        },
        lastWeek: function () {
            return '[անցած] dddd [օրը ժամը] LT';
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s հետո',
        past : '%s առաջ',
        s : 'մի քանի վայրկյան',
        m : 'րոպե',
        mm : '%d րոպե',
        h : 'ժամ',
        hh : '%d ժամ',
        d : 'օր',
        dd : '%d օր',
        M : 'ամիս',
        MM : '%d ամիս',
        y : 'տարի',
        yy : '%d տարի'
    },
    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function (input) {
        return /^(ցերեկվա|երեկոյան)$/.test(input);
    },
    meridiem : function (hour) {
        if (hour < 4) {
            return 'գիշերվա';
        } else if (hour < 12) {
            return 'առավոտվա';
        } else if (hour < 17) {
            return 'ցերեկվա';
        } else {
            return 'երեկոյան';
        }
    },
    ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                if (number === 1) {
                    return number + '-ին';
                }
                return number + '-րդ';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

hooks.defineLocale('id', {
    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'siang';
        } else if (hours < 19) {
            return 'sore';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Besok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kemarin pukul] LT',
        lastWeek : 'dddd [lalu pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lalu',
        s : 'beberapa detik',
        m : 'semenit',
        mm : '%d menit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

function plural$2(n) {
    if (n % 100 === 11) {
        return true;
    } else if (n % 10 === 1) {
        return false;
    }
    return true;
}
function translate$5(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';
        case 'mm':
            if (plural$2(number)) {
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
                return result + 'mínúta';
            }
            return result + 'mínútu';
        case 'hh':
            if (plural$2(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (plural$2(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'mánuður';
            }
            return isFuture ? 'mánuð' : 'mánuði';
        case 'MM':
            if (plural$2(number)) {
                if (withoutSuffix) {
                    return result + 'mánuðir';
                }
                return result + (isFuture ? 'mánuði' : 'mánuðum');
            } else if (withoutSuffix) {
                return result + 'mánuður';
            }
            return result + (isFuture ? 'mánuð' : 'mánuði');
        case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';
        case 'yy':
            if (plural$2(number)) {
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            }
            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
    }
}

hooks.defineLocale('is', {
    months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar : {
        sameDay : '[í dag kl.] LT',
        nextDay : '[á morgun kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[í gær kl.] LT',
        lastWeek : '[síðasta] dddd [kl.] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'eftir %s',
        past : 'fyrir %s síðan',
        s : translate$5,
        m : translate$5,
        mm : translate$5,
        h : 'klukkustund',
        hh : translate$5,
        d : translate$5,
        dd : translate$5,
        M : translate$5,
        MM : translate$5,
        y : translate$5,
        yy : translate$5
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz

hooks.defineLocale('it', {
    months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
    weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
    weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : function (s) {
            return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
        },
        past : '%s fa',
        s : 'alcuni secondi',
        m : 'un minuto',
        mm : '%d minuti',
        h : 'un\'ora',
        hh : '%d ore',
        d : 'un giorno',
        dd : '%d giorni',
        M : 'un mese',
        MM : '%d mesi',
        y : 'un anno',
        yy : '%d anni'
    },
    ordinalParse : /\d{1,2}º/,
    ordinal: '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon

hooks.defineLocale('ja', {
    months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
    longDateFormat : {
        LT : 'Ah時m分',
        LTS : 'Ah時m分s秒',
        L : 'YYYY/MM/DD',
        LL : 'YYYY年M月D日',
        LLL : 'YYYY年M月D日Ah時m分',
        LLLL : 'YYYY年M月D日Ah時m分 dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM : function (input) {
        return input === '午後';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        } else {
            return '午後';
        }
    },
    calendar : {
        sameDay : '[今日] LT',
        nextDay : '[明日] LT',
        nextWeek : '[来週]dddd LT',
        lastDay : '[昨日] LT',
        lastWeek : '[前週]dddd LT',
        sameElse : 'L'
    },
    ordinalParse : /\d{1,2}日/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            default:
                return number;
        }
    },
    relativeTime : {
        future : '%s後',
        past : '%s前',
        s : '数秒',
        m : '1分',
        mm : '%d分',
        h : '1時間',
        hh : '%d時間',
        d : '1日',
        dd : '%d日',
        M : '1ヶ月',
        MM : '%dヶ月',
        y : '1年',
        yy : '%d年'
    }
});

//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

hooks.defineLocale('jv', {
    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'enjing') {
            return hour;
        } else if (meridiem === 'siyang') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'enjing';
        } else if (hours < 15) {
            return 'siyang';
        } else if (hours < 19) {
            return 'sonten';
        } else {
            return 'ndalu';
        }
    },
    calendar : {
        sameDay : '[Dinten puniko pukul] LT',
        nextDay : '[Mbenjang pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kala wingi pukul] LT',
        lastWeek : 'dddd [kepengker pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'wonten ing %s',
        past : '%s ingkang kepengker',
        s : 'sawetawis detik',
        m : 'setunggal menit',
        mm : '%d menit',
        h : 'setunggal jam',
        hh : '%d jam',
        d : 'sedinten',
        dd : '%d dinten',
        M : 'sewulan',
        MM : '%d wulan',
        y : 'setaun',
        yy : '%d taun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

hooks.defineLocale('ka', {
    months : {
        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
    },
    monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays : {
        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
        isFormat: /(წინა|შემდეგ)/
    },
    weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[დღეს] LT[-ზე]',
        nextDay : '[ხვალ] LT[-ზე]',
        lastDay : '[გუშინ] LT[-ზე]',
        nextWeek : '[შემდეგ] dddd LT[-ზე]',
        lastWeek : '[წინა] dddd LT-ზე',
        sameElse : 'L'
    },
    relativeTime : {
        future : function (s) {
            return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                s.replace(/ი$/, 'ში') :
                s + 'ში';
        },
        past : function (s) {
            if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                return s.replace(/(ი|ე)$/, 'ის წინ');
            }
            if ((/წელი/).test(s)) {
                return s.replace(/წელი$/, 'წლის წინ');
            }
        },
        s : 'რამდენიმე წამი',
        m : 'წუთი',
        mm : '%d წუთი',
        h : 'საათი',
        hh : '%d საათი',
        d : 'დღე',
        dd : '%d დღე',
        M : 'თვე',
        MM : '%d თვე',
        y : 'წელი',
        yy : '%d წელი'
    },
    ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal : function (number) {
        if (number === 0) {
            return number;
        }
        if (number === 1) {
            return number + '-ლი';
        }
        if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
            return 'მე-' + number;
        }
        return number + '-ე';
    },
    week : {
        dow : 1,
        doy : 7
    }
});

//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

var suffixes$1 = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші'
};

hooks.defineLocale('kk', {
    months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Бүгін сағат] LT',
        nextDay : '[Ертең сағат] LT',
        nextWeek : 'dddd [сағат] LT',
        lastDay : '[Кеше сағат] LT',
        lastWeek : '[Өткен аптаның] dddd [сағат] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ішінде',
        past : '%s бұрын',
        s : 'бірнеше секунд',
        m : 'бір минут',
        mm : '%d минут',
        h : 'бір сағат',
        hh : '%d сағат',
        d : 'бір күн',
        dd : '%d күн',
        M : 'бір ай',
        MM : '%d ай',
        y : 'бір жыл',
        yy : '%d жыл'
    },
    ordinalParse: /\d{1,2}-(ші|шы)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes$1[number] || suffixes$1[a] || suffixes$1[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

hooks.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
        nextDay: '[ស្អែក ម៉ោង] LT',
        nextWeek: 'dddd [ម៉ោង] LT',
        lastDay: '[ម្សិលមិញ ម៉ោង] LT',
        lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%sទៀត',
        past: '%sមុន',
        s: 'ប៉ុន្មានវិនាទី',
        m: 'មួយនាទី',
        mm: '%d នាទី',
        h: 'មួយម៉ោង',
        hh: '%d ម៉ោង',
        d: 'មួយថ្ងៃ',
        dd: '%d ថ្ងៃ',
        M: 'មួយខែ',
        MM: '%d ខែ',
        y: 'មួយឆ្នាំ',
        yy: '%d ឆ្នាំ'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>

hooks.defineLocale('ko', {
    months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
    longDateFormat : {
        LT : 'A h시 m분',
        LTS : 'A h시 m분 s초',
        L : 'YYYY.MM.DD',
        LL : 'YYYY년 MMMM D일',
        LLL : 'YYYY년 MMMM D일 A h시 m분',
        LLLL : 'YYYY년 MMMM D일 dddd A h시 m분'
    },
    calendar : {
        sameDay : '오늘 LT',
        nextDay : '내일 LT',
        nextWeek : 'dddd LT',
        lastDay : '어제 LT',
        lastWeek : '지난주 dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s 후',
        past : '%s 전',
        s : '몇 초',
        ss : '%d초',
        m : '일분',
        mm : '%d분',
        h : '한 시간',
        hh : '%d시간',
        d : '하루',
        dd : '%d일',
        M : '한 달',
        MM : '%d달',
        y : '일 년',
        yy : '%d년'
    },
    ordinalParse : /\d{1,2}일/,
    ordinal : '%d일',
    meridiemParse : /오전|오후/,
    isPM : function (token) {
        return token === '오후';
    },
    meridiem : function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
});

//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz


var suffixes$2 = {
    0: '-чү',
    1: '-чи',
    2: '-чи',
    3: '-чү',
    4: '-чү',
    5: '-чи',
    6: '-чы',
    7: '-чи',
    8: '-чи',
    9: '-чу',
    10: '-чу',
    20: '-чы',
    30: '-чу',
    40: '-чы',
    50: '-чү',
    60: '-чы',
    70: '-чи',
    80: '-чи',
    90: '-чу',
    100: '-чү'
};

hooks.defineLocale('ky', {
    months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
    weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
    weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Бүгүн саат] LT',
        nextDay : '[Эртең саат] LT',
        nextWeek : 'dddd [саат] LT',
        lastDay : '[Кече саат] LT',
        lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ичинде',
        past : '%s мурун',
        s : 'бирнече секунд',
        m : 'бир мүнөт',
        mm : '%d мүнөт',
        h : 'бир саат',
        hh : '%d саат',
        d : 'бир күн',
        dd : '%d күн',
        M : 'бир ай',
        MM : '%d ай',
        y : 'бир жыл',
        yy : '%d жыл'
    },
    ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes$2[number] || suffixes$2[a] || suffixes$2[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

function processRelativeTime$3(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eng Minutt', 'enger Minutt'],
        'h': ['eng Stonn', 'enger Stonn'],
        'd': ['een Dag', 'engem Dag'],
        'M': ['ee Mount', 'engem Mount'],
        'y': ['ee Joer', 'engem Joer']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
        return 'a ' + string;
    }
    return 'an ' + string;
}
function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
        return 'viru ' + string;
    }
    return 'virun ' + string;
}
/**
 * Returns true if the word before the given number loses the '-n' ending.
 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
 *
 * @param number {integer}
 * @returns {boolean}
 */
function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
        return false;
    }
    if (number < 0) {
        // Negative Number --> always true
        return true;
    } else if (number < 10) {
        // Only 1 digit
        if (4 <= number && number <= 7) {
            return true;
        }
        return false;
    } else if (number < 100) {
        // 2 digits
        var lastDigit = number % 10, firstDigit = number / 10;
        if (lastDigit === 0) {
            return eifelerRegelAppliesToNumber(firstDigit);
        }
        return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
        // 3 or 4 digits --> recursively check first digit
        while (number >= 10) {
            number = number / 10;
        }
        return eifelerRegelAppliesToNumber(number);
    } else {
        // Anything larger than 4 digits: recursively check first n-3 digits
        number = number / 1000;
        return eifelerRegelAppliesToNumber(number);
    }
}

hooks.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm [Auer]',
        LTS: 'H:mm:ss [Auer]',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm [Auer]',
        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
        sameDay: '[Haut um] LT',
        sameElse: 'L',
        nextDay: '[Muer um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gëschter um] LT',
        lastWeek: function () {
            // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
            switch (this.day()) {
                case 2:
                case 4:
                    return '[Leschten] dddd [um] LT';
                default:
                    return '[Leschte] dddd [um] LT';
            }
        }
    },
    relativeTime : {
        future : processFutureTime,
        past : processPastTime,
        s : 'e puer Sekonnen',
        m : processRelativeTime$3,
        mm : '%d Minutten',
        h : processRelativeTime$3,
        hh : '%d Stonnen',
        d : processRelativeTime$3,
        dd : '%d Deeg',
        M : processRelativeTime$3,
        MM : '%d Méint',
        y : processRelativeTime$3,
        yy : '%d Joer'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2

hooks.defineLocale('lo', {
    months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM: function (input) {
        return input === 'ຕອນແລງ';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ຕອນເຊົ້າ';
        } else {
            return 'ຕອນແລງ';
        }
    },
    calendar : {
        sameDay : '[ມື້ນີ້ເວລາ] LT',
        nextDay : '[ມື້ອື່ນເວລາ] LT',
        nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
        lastDay : '[ມື້ວານນີ້ເວລາ] LT',
        lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ອີກ %s',
        past : '%sຜ່ານມາ',
        s : 'ບໍ່ເທົ່າໃດວິນາທີ',
        m : '1 ນາທີ',
        mm : '%d ນາທີ',
        h : '1 ຊົ່ວໂມງ',
        hh : '%d ຊົ່ວໂມງ',
        d : '1 ມື້',
        dd : '%d ມື້',
        M : '1 ເດືອນ',
        MM : '%d ເດືອນ',
        y : '1 ປີ',
        yy : '%d ປີ'
    },
    ordinalParse: /(ທີ່)\d{1,2}/,
    ordinal : function (number) {
        return 'ທີ່' + number;
    }
});

//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Mozūras : https://github.com/mmozuras

var units = {
    'm' : 'minutė_minutės_minutę',
    'mm': 'minutės_minučių_minutes',
    'h' : 'valanda_valandos_valandą',
    'hh': 'valandos_valandų_valandas',
    'd' : 'diena_dienos_dieną',
    'dd': 'dienos_dienų_dienas',
    'M' : 'mėnuo_mėnesio_mėnesį',
    'MM': 'mėnesiai_mėnesių_mėnesius',
    'y' : 'metai_metų_metus',
    'yy': 'metai_metų_metus'
};
function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    } else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
function special(number) {
    return number % 10 === 0 || (number > 10 && number < 20);
}
function forms(key) {
    return units[key].split('_');
}
function translate$6(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
        if (isFuture) {
            return result + forms(key)[1];
        } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
hooks.defineLocale('lt', {
    months : {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays : {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY [m.] MMMM D [d.]',
        LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l : 'YYYY-MM-DD',
        ll : 'YYYY [m.] MMMM D [d.]',
        lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar : {
        sameDay : '[Šiandien] LT',
        nextDay : '[Rytoj] LT',
        nextWeek : 'dddd LT',
        lastDay : '[Vakar] LT',
        lastWeek : '[Praėjusį] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'po %s',
        past : 'prieš %s',
        s : translateSeconds,
        m : translateSingular,
        mm : translate$6,
        h : translateSingular,
        hh : translate$6,
        d : translateSingular,
        dd : translate$6,
        M : translateSingular,
        MM : translate$6,
        y : translateSingular,
        yy : translate$6
    },
    ordinalParse: /\d{1,2}-oji/,
    ordinal : function (number) {
        return number + '-oji';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE

var units$1 = {
    'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'h': 'stundas_stundām_stunda_stundas'.split('_'),
    'hh': 'stundas_stundām_stunda_stundas'.split('_'),
    'd': 'dienas_dienām_diena_dienas'.split('_'),
    'dd': 'dienas_dienām_diena_dienas'.split('_'),
    'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'y': 'gada_gadiem_gads_gadi'.split('_'),
    'yy': 'gada_gadiem_gads_gadi'.split('_')
};
/**
 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
 */
function format$1(forms, number, withoutSuffix) {
    if (withoutSuffix) {
        // E.g. "21 minūte", "3 minūtes".
        return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
        // E.g. "21 minūtes" as in "pēc 21 minūtes".
        // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
        return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
}
function relativeTimeWithPlural$1(number, withoutSuffix, key) {
    return number + ' ' + format$1(units$1[key], number, withoutSuffix);
}
function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format$1(units$1[key], number, withoutSuffix);
}
function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
}

hooks.defineLocale('lv', {
    months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY.',
        LL : 'YYYY. [gada] D. MMMM',
        LLL : 'YYYY. [gada] D. MMMM, HH:mm',
        LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
    },
    calendar : {
        sameDay : '[Šodien pulksten] LT',
        nextDay : '[Rīt pulksten] LT',
        nextWeek : 'dddd [pulksten] LT',
        lastDay : '[Vakar pulksten] LT',
        lastWeek : '[Pagājušā] dddd [pulksten] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'pēc %s',
        past : 'pirms %s',
        s : relativeSeconds,
        m : relativeTimeWithSingular,
        mm : relativeTimeWithPlural$1,
        h : relativeTimeWithSingular,
        hh : relativeTimeWithPlural$1,
        d : relativeTimeWithSingular,
        dd : relativeTimeWithPlural$1,
        M : relativeTimeWithSingular,
        MM : relativeTimeWithPlural$1,
        y : relativeTimeWithSingular,
        yy : relativeTimeWithPlural$1
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

var translator = {
    words: { //Different grammatical cases
        m: ['jedan minut', 'jednog minuta'],
        mm: ['minut', 'minuta', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mjesec', 'mjeseca', 'mjeseci'],
        yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
    }
};

hooks.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact : true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sjutra u] LT',

        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedjelje] [u] LT',
                '[prošlog] [ponedjeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srijede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'nekoliko sekundi',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'dan',
        dd     : translator.translate,
        M      : 'mjesec',
        MM     : translator.translate,
        y      : 'godinu',
        yy     : translator.translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

hooks.defineLocale('mi', {
    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [i] HH:mm',
        LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
    },
    calendar: {
        sameDay: '[i teie mahana, i] LT',
        nextDay: '[apopo i] LT',
        nextWeek: 'dddd [i] LT',
        lastDay: '[inanahi i] LT',
        lastWeek: 'dddd [whakamutunga i] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'i roto i %s',
        past: '%s i mua',
        s: 'te hēkona ruarua',
        m: 'he meneti',
        mm: '%d meneti',
        h: 'te haora',
        hh: '%d haora',
        d: 'he ra',
        dd: '%d ra',
        M: 'he marama',
        MM: '%d marama',
        y: 'he tau',
        yy: '%d tau'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0

hooks.defineLocale('mk', {
    months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[Денес во] LT',
        nextDay : '[Утре во] LT',
        nextWeek : '[Во] dddd [во] LT',
        lastDay : '[Вчера во] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Изминатиот] dddd [во] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'после %s',
        past : 'пред %s',
        s : 'неколку секунди',
        m : 'минута',
        mm : '%d минути',
        h : 'час',
        hh : '%d часа',
        d : 'ден',
        dd : '%d дена',
        M : 'месец',
        MM : '%d месеци',
        y : 'година',
        yy : '%d години'
    },
    ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink

hooks.defineLocale('ml', {
    months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm -നു',
        LTS : 'A h:mm:ss -നു',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm -നു',
        LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
    },
    calendar : {
        sameDay : '[ഇന്ന്] LT',
        nextDay : '[നാളെ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ഇന്നലെ] LT',
        lastWeek : '[കഴിഞ്ഞ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s കഴിഞ്ഞ്',
        past : '%s മുൻപ്',
        s : 'അൽപ നിമിഷങ്ങൾ',
        m : 'ഒരു മിനിറ്റ്',
        mm : '%d മിനിറ്റ്',
        h : 'ഒരു മണിക്കൂർ',
        hh : '%d മണിക്കൂർ',
        d : 'ഒരു ദിവസം',
        dd : '%d ദിവസം',
        M : 'ഒരു മാസം',
        MM : '%d മാസം',
        y : 'ഒരു വർഷം',
        yy : '%d വർഷം'
    },
    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'രാത്രി' && hour >= 4) ||
                meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                meridiem === 'വൈകുന്നേരം') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'രാത്രി';
        } else if (hour < 12) {
            return 'രാവിലെ';
        } else if (hour < 17) {
            return 'ഉച്ച കഴിഞ്ഞ്';
        } else if (hour < 20) {
            return 'വൈകുന്നേരം';
        } else {
            return 'രാത്രി';
        }
    }
});

//! moment.js locale configuration
//! locale : Marathi [mr]
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye

var symbolMap$7 = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap$6 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

function relativeTimeMr(number, withoutSuffix, string, isFuture)
{
    var output = '';
    if (withoutSuffix) {
        switch (string) {
            case 's': output = 'काही सेकंद'; break;
            case 'm': output = 'एक मिनिट'; break;
            case 'mm': output = '%d मिनिटे'; break;
            case 'h': output = 'एक तास'; break;
            case 'hh': output = '%d तास'; break;
            case 'd': output = 'एक दिवस'; break;
            case 'dd': output = '%d दिवस'; break;
            case 'M': output = 'एक महिना'; break;
            case 'MM': output = '%d महिने'; break;
            case 'y': output = 'एक वर्ष'; break;
            case 'yy': output = '%d वर्षे'; break;
        }
    }
    else {
        switch (string) {
            case 's': output = 'काही सेकंदां'; break;
            case 'm': output = 'एका मिनिटा'; break;
            case 'mm': output = '%d मिनिटां'; break;
            case 'h': output = 'एका तासा'; break;
            case 'hh': output = '%d तासां'; break;
            case 'd': output = 'एका दिवसा'; break;
            case 'dd': output = '%d दिवसां'; break;
            case 'M': output = 'एका महिन्या'; break;
            case 'MM': output = '%d महिन्यां'; break;
            case 'y': output = 'एका वर्षा'; break;
            case 'yy': output = '%d वर्षां'; break;
        }
    }
    return output.replace(/%d/i, number);
}

hooks.defineLocale('mr', {
    months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    monthsParseExact : true,
    weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat : {
        LT : 'A h:mm वाजता',
        LTS : 'A h:mm:ss वाजता',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm वाजता',
        LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[उद्या] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[काल] LT',
        lastWeek: '[मागील] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future: '%sमध्ये',
        past: '%sपूर्वी',
        s: relativeTimeMr,
        m: relativeTimeMr,
        mm: relativeTimeMr,
        h: relativeTimeMr,
        hh: relativeTimeMr,
        d: relativeTimeMr,
        dd: relativeTimeMr,
        M: relativeTimeMr,
        MM: relativeTimeMr,
        y: relativeTimeMr,
        yy: relativeTimeMr
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$6[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$7[match];
        });
    },
    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात्री') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सकाळी') {
            return hour;
        } else if (meridiem === 'दुपारी') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'सायंकाळी') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात्री';
        } else if (hour < 10) {
            return 'सकाळी';
        } else if (hour < 17) {
            return 'दुपारी';
        } else if (hour < 20) {
            return 'सायंकाळी';
        } else {
            return 'रात्री';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan

hooks.defineLocale('ms-my', {
    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'tengahari';
        } else if (hours < 19) {
            return 'petang';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Esok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kelmarin pukul] LT',
        lastWeek : 'dddd [lepas pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lepas',
        s : 'beberapa saat',
        m : 'seminit',
        mm : '%d minit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

hooks.defineLocale('ms', {
    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'tengahari';
        } else if (hours < 19) {
            return 'petang';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Esok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kelmarin pukul] LT',
        lastWeek : 'dddd [lepas pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lepas',
        s : 'beberapa saat',
        m : 'seminit',
        mm : '%d minit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin

var symbolMap$8 = {
    '1': '၁',
    '2': '၂',
    '3': '၃',
    '4': '၄',
    '5': '၅',
    '6': '၆',
    '7': '၇',
    '8': '၈',
    '9': '၉',
    '0': '၀'
};
var numberMap$7 = {
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
    '၀': '0'
};

hooks.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ယနေ.] LT [မှာ]',
        nextDay: '[မနက်ဖြန်] LT [မှာ]',
        nextWeek: 'dddd LT [မှာ]',
        lastDay: '[မနေ.က] LT [မှာ]',
        lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'လာမည့် %s မှာ',
        past: 'လွန်ခဲ့သော %s က',
        s: 'စက္ကန်.အနည်းငယ်',
        m: 'တစ်မိနစ်',
        mm: '%d မိနစ်',
        h: 'တစ်နာရီ',
        hh: '%d နာရီ',
        d: 'တစ်ရက်',
        dd: '%d ရက်',
        M: 'တစ်လ',
        MM: '%d လ',
        y: 'တစ်နှစ်',
        yy: '%d နှစ်'
    },
    preparse: function (string) {
        return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
            return numberMap$7[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$8[match];
        });
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga

hooks.defineLocale('nb', {
    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact : true,
    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] HH:mm',
        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s siden',
        s : 'noen sekunder',
        m : 'ett minutt',
        mm : '%d minutter',
        h : 'en time',
        hh : '%d timer',
        d : 'en dag',
        dd : '%d dager',
        M : 'en måned',
        MM : '%d måneder',
        y : 'ett år',
        yy : '%d år'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash

var symbolMap$9 = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap$8 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

hooks.defineLocale('ne', {
    months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    monthsParseExact : true,
    weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'Aको h:mm बजे',
        LTS : 'Aको h:mm:ss बजे',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, Aको h:mm बजे',
        LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$8[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$9[match];
        });
    },
    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'राति') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'बिहान') {
            return hour;
        } else if (meridiem === 'दिउँसो') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'साँझ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 3) {
            return 'राति';
        } else if (hour < 12) {
            return 'बिहान';
        } else if (hour < 16) {
            return 'दिउँसो';
        } else if (hour < 20) {
            return 'साँझ';
        } else {
            return 'राति';
        }
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[भोलि] LT',
        nextWeek : '[आउँदो] dddd[,] LT',
        lastDay : '[हिजो] LT',
        lastWeek : '[गएको] dddd[,] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sमा',
        past : '%s अगाडि',
        s : 'केही क्षण',
        m : 'एक मिनेट',
        mm : '%d मिनेट',
        h : 'एक घण्टा',
        hh : '%d घण्टा',
        d : 'एक दिन',
        dd : '%d दिन',
        M : 'एक महिना',
        MM : '%d महिना',
        y : 'एक बर्ष',
        yy : '%d बर्ष'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

var monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex$1 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

hooks.defineLocale('nl-be', {
    months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$1[m.month()];
        } else {
            return monthsShortWithDots$1[m.month()];
        }
    },

    monthsRegex: monthsRegex$1,
    monthsShortRegex: monthsRegex$1,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse : monthsParse,
    longMonthsParse : monthsParse,
    shortMonthsParse : monthsParse,

    weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'over %s',
        past : '%s geleden',
        s : 'een paar seconden',
        m : 'één minuut',
        mm : '%d minuten',
        h : 'één uur',
        hh : '%d uur',
        d : 'één dag',
        dd : '%d dagen',
        M : 'één maand',
        MM : '%d maanden',
        y : 'één jaar',
        yy : '%d jaar'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

var monthsShortWithDots$2 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShortWithoutDots$2 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

var monthsParse$1 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex$2 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

hooks.defineLocale('nl', {
    months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$2[m.month()];
        } else {
            return monthsShortWithDots$2[m.month()];
        }
    },

    monthsRegex: monthsRegex$2,
    monthsShortRegex: monthsRegex$2,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse : monthsParse$1,
    longMonthsParse : monthsParse$1,
    shortMonthsParse : monthsParse$1,

    weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'over %s',
        past : '%s geleden',
        s : 'een paar seconden',
        m : 'één minuut',
        mm : '%d minuten',
        h : 'één uur',
        hh : '%d uur',
        d : 'één dag',
        dd : '%d dagen',
        M : 'één maand',
        MM : '%d maanden',
        y : 'één jaar',
        yy : '%d jaar'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! author : https://github.com/mechuwind

hooks.defineLocale('nn', {
    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
    weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay: '[I dag klokka] LT',
        nextDay: '[I morgon klokka] LT',
        nextWeek: 'dddd [klokka] LT',
        lastDay: '[I går klokka] LT',
        lastWeek: '[Føregåande] dddd [klokka] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s sidan',
        s : 'nokre sekund',
        m : 'eit minutt',
        mm : '%d minutt',
        h : 'ein time',
        hh : '%d timar',
        d : 'ein dag',
        dd : '%d dagar',
        M : 'ein månad',
        MM : '%d månader',
        y : 'eit år',
        yy : '%d år'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

var symbolMap$10 = {
    '1': '੧',
    '2': '੨',
    '3': '੩',
    '4': '੪',
    '5': '੫',
    '6': '੬',
    '7': '੭',
    '8': '੮',
    '9': '੯',
    '0': '੦'
};
var numberMap$9 = {
    '੧': '1',
    '੨': '2',
    '੩': '3',
    '੪': '4',
    '੫': '5',
    '੬': '6',
    '੭': '7',
    '੮': '8',
    '੯': '9',
    '੦': '0'
};

hooks.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
    months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
    weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm ਵਜੇ',
        LTS : 'A h:mm:ss ਵਜੇ',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
        LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
    },
    calendar : {
        sameDay : '[ਅਜ] LT',
        nextDay : '[ਕਲ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ਕਲ] LT',
        lastWeek : '[ਪਿਛਲੇ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ਵਿੱਚ',
        past : '%s ਪਿਛਲੇ',
        s : 'ਕੁਝ ਸਕਿੰਟ',
        m : 'ਇਕ ਮਿੰਟ',
        mm : '%d ਮਿੰਟ',
        h : 'ਇੱਕ ਘੰਟਾ',
        hh : '%d ਘੰਟੇ',
        d : 'ਇੱਕ ਦਿਨ',
        dd : '%d ਦਿਨ',
        M : 'ਇੱਕ ਮਹੀਨਾ',
        MM : '%d ਮਹੀਨੇ',
        y : 'ਇੱਕ ਸਾਲ',
        yy : '%d ਸਾਲ'
    },
    preparse: function (string) {
        return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
            return numberMap$9[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$10[match];
        });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ਰਾਤ') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ਸਵੇਰ') {
            return hour;
        } else if (meridiem === 'ਦੁਪਹਿਰ') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'ਸ਼ਾਮ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ਰਾਤ';
        } else if (hour < 10) {
            return 'ਸਵੇਰ';
        } else if (hour < 17) {
            return 'ਦੁਪਹਿਰ';
        } else if (hour < 20) {
            return 'ਸ਼ਾਮ';
        } else {
            return 'ਰਾਤ';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL

var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
function plural$3(n) {
    return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
}
function translate$7(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural$3(number) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix  ? 'godzina'  : 'godzinę';
        case 'hh':
            return result + (plural$3(number) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural$3(number) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural$3(number) ? 'lata' : 'lat');
    }
}

hooks.defineLocale('pl', {
    months : function (momentToFormat, format) {
        if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
        } else if (/D MMMM/.test(format)) {
            return monthsSubjective[momentToFormat.month()];
        } else {
            return monthsNominative[momentToFormat.month()];
        }
    },
    monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: '[W] dddd [o] LT',
        lastDay: '[Wczoraj o] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : '%s temu',
        s : 'kilka sekund',
        m : translate$7,
        mm : translate$7,
        h : translate$7,
        hh : translate$7,
        d : '1 dzień',
        dd : '%d dni',
        M : 'miesiąc',
        MM : translate$7,
        y : 'rok',
        yy : translate$7
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

hooks.defineLocale('pt-br', {
    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : '%s atrás',
        s : 'poucos segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal : '%dº'
});

//! moment.js locale configuration
//! locale : Portuguese [pt]
//! author : Jefferson : https://github.com/jalex79

hooks.defineLocale('pt', {
    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : 'há %s',
        s : 'segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly

function relativeTimeWithPlural$2(number, withoutSuffix, key) {
    var format = {
            'mm': 'minute',
            'hh': 'ore',
            'dd': 'zile',
            'MM': 'luni',
            'yy': 'ani'
        },
        separator = ' ';
    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
        separator = ' de ';
    }
    return number + separator + format[key];
}

hooks.defineLocale('ro', {
    months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'peste %s',
        past : '%s în urmă',
        s : 'câteva secunde',
        m : 'un minut',
        mm : relativeTimeWithPlural$2,
        h : 'o oră',
        hh : relativeTimeWithPlural$2,
        d : 'o zi',
        dd : relativeTimeWithPlural$2,
        M : 'o lună',
        MM : relativeTimeWithPlural$2,
        y : 'un an',
        yy : relativeTimeWithPlural$2
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair

function plural$4(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural$3(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        'hh': 'час_часа_часов',
        'dd': 'день_дня_дней',
        'MM': 'месяц_месяца_месяцев',
        'yy': 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    else {
        return number + ' ' + plural$4(format[key], +number);
    }
}
var monthsParse$2 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
hooks.defineLocale('ru', {
    months : {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort : {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays : {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse : monthsParse$2,
    longMonthsParse : monthsParse$2,
    shortMonthsParse : monthsParse$2,

    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY г.',
        LLL : 'D MMMM YYYY г., HH:mm',
        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar : {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: function (now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[Во] dddd [в] LT';
                } else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: function (now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[Во] dddd [в] LT';
                } else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'через %s',
        past : '%s назад',
        s : 'несколько секунд',
        m : relativeTimeWithPlural$3,
        mm : relativeTimeWithPlural$3,
        h : 'час',
        hh : relativeTimeWithPlural$3,
        d : 'день',
        dd : relativeTimeWithPlural$3,
        M : 'месяц',
        MM : relativeTimeWithPlural$3,
        y : 'год',
        yy : relativeTimeWithPlural$3
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM : function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        } else if (hour < 12) {
            return 'утра';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечера';
        }
    },
    ordinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-й';
            case 'D':
                return number + '-го';
            case 'w':
            case 'W':
                return number + '-я';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : Bård Rolstad Henriksen : https://github.com/karamell


hooks.defineLocale('se', {
    months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
    monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
    weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
    weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
    weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'MMMM D. [b.] YYYY',
        LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
        LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
    },
    calendar : {
        sameDay: '[otne ti] LT',
        nextDay: '[ihttin ti] LT',
        nextWeek: 'dddd [ti] LT',
        lastDay: '[ikte ti] LT',
        lastWeek: '[ovddit] dddd [ti] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s geažes',
        past : 'maŋit %s',
        s : 'moadde sekunddat',
        m : 'okta minuhta',
        mm : '%d minuhtat',
        h : 'okta diimmu',
        hh : '%d diimmut',
        d : 'okta beaivi',
        dd : '%d beaivvit',
        M : 'okta mánnu',
        MM : '%d mánut',
        y : 'okta jahki',
        yy : '%d jagit'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

/*jshint -W100*/
hooks.defineLocale('si', {
    months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
    weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'a h:mm',
        LTS : 'a h:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'YYYY MMMM D',
        LLL : 'YYYY MMMM D, a h:mm',
        LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
    },
    calendar : {
        sameDay : '[අද] LT[ට]',
        nextDay : '[හෙට] LT[ට]',
        nextWeek : 'dddd LT[ට]',
        lastDay : '[ඊයේ] LT[ට]',
        lastWeek : '[පසුගිය] dddd LT[ට]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sකින්',
        past : '%sකට පෙර',
        s : 'තත්පර කිහිපය',
        m : 'මිනිත්තුව',
        mm : 'මිනිත්තු %d',
        h : 'පැය',
        hh : 'පැය %d',
        d : 'දිනය',
        dd : 'දින %d',
        M : 'මාසය',
        MM : 'මාස %d',
        y : 'වසර',
        yy : 'වසර %d'
    },
    ordinalParse: /\d{1,2} වැනි/,
    ordinal : function (number) {
        return number + ' වැනි';
    },
    meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM : function (input) {
        return input === 'ප.ව.' || input === 'පස් වරු';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'ප.ව.' : 'පස් වරු';
        } else {
            return isLower ? 'පෙ.ව.' : 'පෙර වරු';
        }
    }
});

//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela

var months$6 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
var monthsShort$4 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
function plural$5(n) {
    return (n > 1) && (n < 5);
}
function translate$8(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural$5(number) ? 'minúty' : 'minút');
            } else {
                return result + 'minútami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural$5(number) ? 'hodiny' : 'hodín');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural$5(number) ? 'dni' : 'dní');
            } else {
                return result + 'dňami';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural$5(number) ? 'mesiace' : 'mesiacov');
            } else {
                return result + 'mesiacmi';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural$5(number) ? 'roky' : 'rokov');
            } else {
                return result + 'rokmi';
            }
            break;
    }
}

hooks.defineLocale('sk', {
    months : months$6,
    monthsShort : monthsShort$4,
    weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat : {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : 'pred %s',
        s : translate$8,
        m : translate$8,
        mm : translate$8,
        h : translate$8,
        hh : translate$8,
        d : translate$8,
        dd : translate$8,
        M : translate$8,
        MM : translate$8,
        y : translate$8,
        yy : translate$8
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : Robert Sedovšek : https://github.com/sedovsek

function processRelativeTime$4(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            } else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            } else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            } else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            } else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            } else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}

hooks.defineLocale('sl', {
    months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danes ob] LT',
        nextDay  : '[jutri ob] LT',

        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay  : '[včeraj ob] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'čez %s',
        past   : 'pred %s',
        s      : processRelativeTime$4,
        m      : processRelativeTime$4,
        mm     : processRelativeTime$4,
        h      : processRelativeTime$4,
        hh     : processRelativeTime$4,
        d      : processRelativeTime$4,
        dd     : processRelativeTime$4,
        M      : processRelativeTime$4,
        MM     : processRelativeTime$4,
        y      : processRelativeTime$4,
        yy     : processRelativeTime$4
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flakërim Ismani : https://github.com/flakerimi
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd

hooks.defineLocale('sq', {
    months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Sot në] LT',
        nextDay : '[Nesër në] LT',
        nextWeek : 'dddd [në] LT',
        lastDay : '[Dje në] LT',
        lastWeek : 'dddd [e kaluar në] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'në %s',
        past : '%s më parë',
        s : 'disa sekonda',
        m : 'një minutë',
        mm : '%d minuta',
        h : 'një orë',
        hh : '%d orë',
        d : 'një ditë',
        dd : '%d ditë',
        M : 'një muaj',
        MM : '%d muaj',
        y : 'një vit',
        yy : '%d vite'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

var translator$1 = {
    words: { //Different grammatical cases
        m: ['један минут', 'једне минуте'],
        mm: ['минут', 'минуте', 'минута'],
        h: ['један сат', 'једног сата'],
        hh: ['сат', 'сата', 'сати'],
        dd: ['дан', 'дана', 'дана'],
        MM: ['месец', 'месеца', 'месеци'],
        yy: ['година', 'године', 'година']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator$1.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator$1.correctGrammaticalCase(number, wordKey);
        }
    }
};

hooks.defineLocale('sr-cyrl', {
    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
    monthsParseExact: true,
    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[данас у] LT',
        nextDay: '[сутра у] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[у] [недељу] [у] LT';
                case 3:
                    return '[у] [среду] [у] LT';
                case 6:
                    return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[у] dddd [у] LT';
            }
        },
        lastDay  : '[јуче у] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[прошле] [недеље] [у] LT',
                '[прошлог] [понедељка] [у] LT',
                '[прошлог] [уторка] [у] LT',
                '[прошле] [среде] [у] LT',
                '[прошлог] [четвртка] [у] LT',
                '[прошлог] [петка] [у] LT',
                '[прошле] [суботе] [у] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'за %s',
        past   : 'пре %s',
        s      : 'неколико секунди',
        m      : translator$1.translate,
        mm     : translator$1.translate,
        h      : translator$1.translate,
        hh     : translator$1.translate,
        d      : 'дан',
        dd     : translator$1.translate,
        M      : 'месец',
        MM     : translator$1.translate,
        y      : 'годину',
        yy     : translator$1.translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

var translator$2 = {
    words: { //Different grammatical cases
        m: ['jedan minut', 'jedne minute'],
        mm: ['minut', 'minute', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mesec', 'meseca', 'meseci'],
        yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator$2.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator$2.correctGrammaticalCase(number, wordKey);
        }
    }
};

hooks.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedelje] [u] LT',
                '[prošlog] [ponedeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'pre %s',
        s      : 'nekoliko sekundi',
        m      : translator$2.translate,
        mm     : translator$2.translate,
        h      : translator$2.translate,
        hh     : translator$2.translate,
        d      : 'dan',
        dd     : translator$2.translate,
        M      : 'mesec',
        MM     : translator$2.translate,
        y      : 'godinu',
        yy     : translator$2.translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies


hooks.defineLocale('ss', {
    months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
    monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
    weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Namuhla nga] LT',
        nextDay : '[Kusasa nga] LT',
        nextWeek : 'dddd [nga] LT',
        lastDay : '[Itolo nga] LT',
        lastWeek : 'dddd [leliphelile] [nga] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'nga %s',
        past : 'wenteka nga %s',
        s : 'emizuzwana lomcane',
        m : 'umzuzu',
        mm : '%d emizuzu',
        h : 'lihora',
        hh : '%d emahora',
        d : 'lilanga',
        dd : '%d emalanga',
        M : 'inyanga',
        MM : '%d tinyanga',
        y : 'umnyaka',
        yy : '%d iminyaka'
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'ekuseni';
        } else if (hours < 15) {
            return 'emini';
        } else if (hours < 19) {
            return 'entsambama';
        } else {
            return 'ebusuku';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ekuseni') {
            return hour;
        } else if (meridiem === 'emini') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
            if (hour === 0) {
                return 0;
            }
            return hour + 12;
        }
    },
    ordinalParse: /\d{1,2}/,
    ordinal : '%d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus

hooks.defineLocale('sv', {
    months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [kl.] HH:mm',
        LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : 'för %s sedan',
        s : 'några sekunder',
        m : 'en minut',
        mm : '%d minuter',
        h : 'en timme',
        hh : '%d timmar',
        d : 'en dag',
        dd : '%d dagar',
        M : 'en månad',
        MM : '%d månader',
        y : 'ett år',
        yy : '%d år'
    },
    ordinalParse: /\d{1,2}(e|a)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
            (b === 2) ? 'a' :
            (b === 3) ? 'e' : 'e';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel

hooks.defineLocale('sw', {
    months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
    weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[leo saa] LT',
        nextDay : '[kesho saa] LT',
        nextWeek : '[wiki ijayo] dddd [saat] LT',
        lastDay : '[jana] LT',
        lastWeek : '[wiki iliyopita] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s baadaye',
        past : 'tokea %s',
        s : 'hivi punde',
        m : 'dakika moja',
        mm : 'dakika %d',
        h : 'saa limoja',
        hh : 'masaa %d',
        d : 'siku moja',
        dd : 'masiku %d',
        M : 'mwezi mmoja',
        MM : 'miezi %d',
        y : 'mwaka mmoja',
        yy : 'miaka %d'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

var symbolMap$11 = {
    '1': '௧',
    '2': '௨',
    '3': '௩',
    '4': '௪',
    '5': '௫',
    '6': '௬',
    '7': '௭',
    '8': '௮',
    '9': '௯',
    '0': '௦'
};
var numberMap$10 = {
    '௧': '1',
    '௨': '2',
    '௩': '3',
    '௪': '4',
    '௫': '5',
    '௬': '6',
    '௭': '7',
    '௮': '8',
    '௯': '9',
    '௦': '0'
};

hooks.defineLocale('ta', {
    months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, HH:mm',
        LLLL : 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar : {
        sameDay : '[இன்று] LT',
        nextDay : '[நாளை] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[நேற்று] LT',
        lastWeek : '[கடந்த வாரம்] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s இல்',
        past : '%s முன்',
        s : 'ஒரு சில விநாடிகள்',
        m : 'ஒரு நிமிடம்',
        mm : '%d நிமிடங்கள்',
        h : 'ஒரு மணி நேரம்',
        hh : '%d மணி நேரம்',
        d : 'ஒரு நாள்',
        dd : '%d நாட்கள்',
        M : 'ஒரு மாதம்',
        MM : '%d மாதங்கள்',
        y : 'ஒரு வருடம்',
        yy : '%d ஆண்டுகள்'
    },
    ordinalParse: /\d{1,2}வது/,
    ordinal : function (number) {
        return number + 'வது';
    },
    preparse: function (string) {
        return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
            return numberMap$10[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap$11[match];
        });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem : function (hour, minute, isLower) {
        if (hour < 2) {
            return ' யாமம்';
        } else if (hour < 6) {
            return ' வைகறை';  // வைகறை
        } else if (hour < 10) {
            return ' காலை'; // காலை
        } else if (hour < 14) {
            return ' நண்பகல்'; // நண்பகல்
        } else if (hour < 18) {
            return ' எற்பாடு'; // எற்பாடு
        } else if (hour < 22) {
            return ' மாலை'; // மாலை
        } else {
            return ' யாமம்';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'யாமம்') {
            return hour < 2 ? hour : hour + 12;
        } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
            return hour;
        } else if (meridiem === 'நண்பகல்') {
            return hour >= 10 ? hour : hour + 12;
        } else {
            return hour + 12;
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

hooks.defineLocale('te', {
    months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
    monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
    weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
    weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[నేడు] LT',
        nextDay : '[రేపు] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[నిన్న] LT',
        lastWeek : '[గత] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s లో',
        past : '%s క్రితం',
        s : 'కొన్ని క్షణాలు',
        m : 'ఒక నిమిషం',
        mm : '%d నిమిషాలు',
        h : 'ఒక గంట',
        hh : '%d గంటలు',
        d : 'ఒక రోజు',
        dd : '%d రోజులు',
        M : 'ఒక నెల',
        MM : '%d నెలలు',
        y : 'ఒక సంవత్సరం',
        yy : '%d సంవత్సరాలు'
    },
    ordinalParse : /\d{1,2}వ/,
    ordinal : '%dవ',
    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'రాత్రి') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ఉదయం') {
            return hour;
        } else if (meridiem === 'మధ్యాహ్నం') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'సాయంత్రం') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'రాత్రి';
        } else if (hour < 10) {
            return 'ఉదయం';
        } else if (hour < 17) {
            return 'మధ్యాహ్నం';
        } else if (hour < 20) {
            return 'సాయంత్రం';
        } else {
            return 'రాత్రి';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Tetun Dili (East Timor) [tet]
//! author : Joshua Brooks : https://github.com/joshbrooks
//! author : Onorio De J. Afonso : https://github.com/marobo

hooks.defineLocale('tet', {
    months : 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu'.split('_'),
    weekdaysShort : 'Dom_Seg_Ters_Kua_Kint_Sext_Sab'.split('_'),
    weekdaysMin : 'Do_Seg_Te_Ku_Ki_Sex_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Ohin iha] LT',
        nextDay: '[Aban iha] LT',
        nextWeek: 'dddd [iha] LT',
        lastDay: '[Horiseik iha] LT',
        lastWeek: 'dddd [semana kotuk] [iha] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'iha %s',
        past : '%s liuba',
        s : 'minutu balun',
        m : 'minutu ida',
        mm : 'minutus %d',
        h : 'horas ida',
        hh : 'horas %d',
        d : 'loron ida',
        dd : 'loron %d',
        M : 'fulan ida',
        MM : 'fulan %d',
        y : 'tinan ida',
        yy : 'tinan %d'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

hooks.defineLocale('th', {
    months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
    weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY เวลา H:mm',
        LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        } else {
            return 'หลังเที่ยง';
        }
    },
    calendar : {
        sameDay : '[วันนี้ เวลา] LT',
        nextDay : '[พรุ่งนี้ เวลา] LT',
        nextWeek : 'dddd[หน้า เวลา] LT',
        lastDay : '[เมื่อวานนี้ เวลา] LT',
        lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'อีก %s',
        past : '%sที่แล้ว',
        s : 'ไม่กี่วินาที',
        m : '1 นาที',
        mm : '%d นาที',
        h : '1 ชั่วโมง',
        hh : '%d ชั่วโมง',
        d : '1 วัน',
        dd : '%d วัน',
        M : '1 เดือน',
        MM : '%d เดือน',
        y : '1 ปี',
        yy : '%d ปี'
    }
});

//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan

hooks.defineLocale('tl-ph', {
    months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'MM/D/YYYY',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY HH:mm',
        LLLL : 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar : {
        sameDay: 'LT [ngayong araw]',
        nextDay: '[Bukas ng] LT',
        nextWeek: 'LT [sa susunod na] dddd',
        lastDay: 'LT [kahapon]',
        lastWeek: 'LT [noong nakaraang] dddd',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'sa loob ng %s',
        past : '%s ang nakalipas',
        s : 'ilang segundo',
        m : 'isang minuto',
        mm : '%d minuto',
        h : 'isang oras',
        hh : '%d oras',
        d : 'isang araw',
        dd : '%d araw',
        M : 'isang buwan',
        MM : '%d buwan',
        y : 'isang taon',
        yy : '%d taon'
    },
    ordinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose

var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

function translateFuture(output) {
    var time = output;
    time = (output.indexOf('jaj') !== -1) ?
    time.slice(0, -3) + 'leS' :
    (output.indexOf('jar') !== -1) ?
    time.slice(0, -3) + 'waQ' :
    (output.indexOf('DIS') !== -1) ?
    time.slice(0, -3) + 'nem' :
    time + ' pIq';
    return time;
}

function translatePast(output) {
    var time = output;
    time = (output.indexOf('jaj') !== -1) ?
    time.slice(0, -3) + 'Hu’' :
    (output.indexOf('jar') !== -1) ?
    time.slice(0, -3) + 'wen' :
    (output.indexOf('DIS') !== -1) ?
    time.slice(0, -3) + 'ben' :
    time + ' ret';
    return time;
}

function translate$9(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
        case 'mm':
            return numberNoun + ' tup';
        case 'hh':
            return numberNoun + ' rep';
        case 'dd':
            return numberNoun + ' jaj';
        case 'MM':
            return numberNoun + ' jar';
        case 'yy':
            return numberNoun + ' DIS';
    }
}

function numberAsNoun(number) {
    var hundred = Math.floor((number % 1000) / 100),
    ten = Math.floor((number % 100) / 10),
    one = number % 10,
    word = '';
    if (hundred > 0) {
        word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
        word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
        word += ((word !== '') ? ' ' : '') + numbersNouns[one];
    }
    return (word === '') ? 'pagh' : word;
}

hooks.defineLocale('tlh', {
    months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
    monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
    monthsParseExact : true,
    weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[DaHjaj] LT',
        nextDay: '[wa’leS] LT',
        nextWeek: 'LLL',
        lastDay: '[wa’Hu’] LT',
        lastWeek: 'LLL',
        sameElse: 'L'
    },
    relativeTime : {
        future : translateFuture,
        past : translatePast,
        s : 'puS lup',
        m : 'wa’ tup',
        mm : translate$9,
        h : 'wa’ rep',
        hh : translate$9,
        d : 'wa’ jaj',
        dd : translate$9,
        M : 'wa’ jar',
        MM : translate$9,
        y : 'wa’ DIS',
        yy : translate$9
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

var suffixes$3 = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};

hooks.defineLocale('tr', {
    months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[bugün saat] LT',
        nextDay : '[yarın saat] LT',
        nextWeek : '[haftaya] dddd [saat] LT',
        lastDay : '[dün] LT',
        lastWeek : '[geçen hafta] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s sonra',
        past : '%s önce',
        s : 'birkaç saniye',
        m : 'bir dakika',
        mm : '%d dakika',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M : 'bir ay',
        MM : '%d ay',
        y : 'bir yıl',
        yy : '%d yıl'
    },
    ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + '\'ıncı';
        }
        var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
        return number + (suffixes$3[a] || suffixes$3[b] || suffixes$3[c]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iustì Canun

// After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
// This is currently too difficult (maybe even impossible) to add.
hooks.defineLocale('tzl', {
    months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM [dallas] YYYY',
        LLL : 'D. MMMM [dallas] YYYY HH.mm',
        LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM : function (input) {
        return 'd\'o' === input.toLowerCase();
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'd\'o' : 'D\'O';
        } else {
            return isLower ? 'd\'a' : 'D\'A';
        }
    },
    calendar : {
        sameDay : '[oxhi à] LT',
        nextDay : '[demà à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[ieiri à] LT',
        lastWeek : '[sür el] dddd [lasteu à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'osprei %s',
        past : 'ja%s',
        s : processRelativeTime$5,
        m : processRelativeTime$5,
        mm : processRelativeTime$5,
        h : processRelativeTime$5,
        hh : processRelativeTime$5,
        d : processRelativeTime$5,
        dd : processRelativeTime$5,
        M : processRelativeTime$5,
        MM : processRelativeTime$5,
        y : processRelativeTime$5,
        yy : processRelativeTime$5
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

function processRelativeTime$5(number, withoutSuffix, key, isFuture) {
    var format = {
        's': ['viensas secunds', '\'iensas secunds'],
        'm': ['\'n míut', '\'iens míut'],
        'mm': [number + ' míuts', '' + number + ' míuts'],
        'h': ['\'n þora', '\'iensa þora'],
        'hh': [number + ' þoras', '' + number + ' þoras'],
        'd': ['\'n ziua', '\'iensa ziua'],
        'dd': [number + ' ziuas', '' + number + ' ziuas'],
        'M': ['\'n mes', '\'iens mes'],
        'MM': [number + ' mesen', '' + number + ' mesen'],
        'y': ['\'n ar', '\'iens ar'],
        'yy': [number + ' ars', '' + number + ' ars']
    };
    return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
}

//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid

hooks.defineLocale('tzm-latn', {
    months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[asdkh g] LT',
        nextDay: '[aska g] LT',
        nextWeek: 'dddd [g] LT',
        lastDay: '[assant g] LT',
        lastWeek: 'dddd [g] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'dadkh s yan %s',
        past : 'yan %s',
        s : 'imik',
        m : 'minuḍ',
        mm : '%d minuḍ',
        h : 'saɛa',
        hh : '%d tassaɛin',
        d : 'ass',
        dd : '%d ossan',
        M : 'ayowr',
        MM : '%d iyyirn',
        y : 'asgas',
        yy : '%d isgasn'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Central Atlas Tamazight [tzm]
//! author : Abdel Said : https://github.com/abdelsaid

hooks.defineLocale('tzm', {
    months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
        nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
        nextWeek: 'dddd [ⴴ] LT',
        lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
        lastWeek: 'dddd [ⴴ] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
        past : 'ⵢⴰⵏ %s',
        s : 'ⵉⵎⵉⴽ',
        m : 'ⵎⵉⵏⵓⴺ',
        mm : '%d ⵎⵉⵏⵓⴺ',
        h : 'ⵙⴰⵄⴰ',
        hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
        d : 'ⴰⵙⵙ',
        dd : '%d oⵙⵙⴰⵏ',
        M : 'ⴰⵢoⵓⵔ',
        MM : '%d ⵉⵢⵢⵉⵔⵏ',
        y : 'ⴰⵙⴳⴰⵙ',
        yy : '%d ⵉⵙⴳⴰⵙⵏ'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire

function plural$6(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural$4(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
        'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
        'dd': 'день_дні_днів',
        'MM': 'місяць_місяці_місяців',
        'yy': 'рік_роки_років'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
    }
    else {
        return number + ' ' + plural$6(format[key], +number);
    }
}
function weekdaysCaseReplace(m, format) {
    var weekdays = {
        'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    },
    nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');
    return weekdays[nounCase][m.day()];
}
function processHoursFunction(str) {
    return function () {
        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
}

hooks.defineLocale('uk', {
    months : {
        'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays : weekdaysCaseReplace,
    weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY р.',
        LLL : 'D MMMM YYYY р., HH:mm',
        LLLL : 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar : {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[Минулого] dddd [').call(this);
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'за %s',
        past : '%s тому',
        s : 'декілька секунд',
        m : relativeTimeWithPlural$4,
        mm : relativeTimeWithPlural$4,
        h : 'годину',
        hh : relativeTimeWithPlural$4,
        d : 'день',
        dd : relativeTimeWithPlural$4,
        M : 'місяць',
        MM : relativeTimeWithPlural$4,
        y : 'рік',
        yy : relativeTimeWithPlural$4
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function (input) {
        return /^(дня|вечора)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночі';
        } else if (hour < 12) {
            return 'ранку';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечора';
        }
    },
    ordinalParse: /\d{1,2}-(й|го)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return number + '-й';
            case 'D':
                return number + '-го';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

hooks.defineLocale('uz', {
    months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
    monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
    weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
    weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'D MMMM YYYY, dddd HH:mm'
    },
    calendar : {
        sameDay : '[Бугун соат] LT [да]',
        nextDay : '[Эртага] LT [да]',
        nextWeek : 'dddd [куни соат] LT [да]',
        lastDay : '[Кеча соат] LT [да]',
        lastWeek : '[Утган] dddd [куни соат] LT [да]',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'Якин %s ичида',
        past : 'Бир неча %s олдин',
        s : 'фурсат',
        m : 'бир дакика',
        mm : '%d дакика',
        h : 'бир соат',
        hh : '%d соат',
        d : 'бир кун',
        dd : '%d кун',
        M : 'бир ой',
        MM : '%d ой',
        y : 'бир йил',
        yy : '%d йил'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk

hooks.defineLocale('vi', {
    months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact : true,
    weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /sa|ch/i,
    isPM : function (input) {
        return /^ch$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        } else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM [năm] YYYY',
        LLL : 'D MMMM [năm] YYYY HH:mm',
        LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
        l : 'DD/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần rồi lúc] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s tới',
        past : '%s trước',
        s : 'vài giây',
        m : 'một phút',
        mm : '%d phút',
        h : 'một giờ',
        hh : '%d giờ',
        d : 'một ngày',
        dd : '%d ngày',
        M : 'một tháng',
        MM : '%d tháng',
        y : 'một năm',
        yy : '%d năm'
    },
    ordinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

hooks.defineLocale('x-pseudo', {
    months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
    monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
    monthsParseExact : true,
    weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
    weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
    weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[T~ódá~ý át] LT',
        nextDay : '[T~ómó~rró~w át] LT',
        nextWeek : 'dddd [át] LT',
        lastDay : '[Ý~ést~érdá~ý át] LT',
        lastWeek : '[L~ást] dddd [át] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'í~ñ %s',
        past : '%s á~gó',
        s : 'á ~féw ~sécó~ñds',
        m : 'á ~míñ~úté',
        mm : '%d m~íñú~tés',
        h : 'á~ñ hó~úr',
        hh : '%d h~óúrs',
        d : 'á ~dáý',
        dd : '%d d~áýs',
        M : 'á ~móñ~th',
        MM : '%d m~óñt~hs',
        y : 'á ~ýéár',
        yy : '%d ý~éárs'
    },
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

hooks.defineLocale('yo', {
    months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
    monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
    weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
    weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
    weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Ònì ni] LT',
        nextDay : '[Ọ̀la ni] LT',
        nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
        lastDay : '[Àna ni] LT',
        lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ní %s',
        past : '%s kọjá',
        s : 'ìsẹjú aayá die',
        m : 'ìsẹjú kan',
        mm : 'ìsẹjú %d',
        h : 'wákati kan',
        hh : 'wákati %d',
        d : 'ọjọ́ kan',
        dd : 'ọjọ́ %d',
        M : 'osù kan',
        MM : 'osù %d',
        y : 'ọdún kan',
        yy : 'ọdún %d'
    },
    ordinalParse : /ọjọ́\s\d{1,2}/,
    ordinal : 'ọjọ́ %d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4 // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng

hooks.defineLocale('zh-cn', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'Ah点mm分',
        LTS : 'Ah点m分s秒',
        L : 'YYYY-MM-DD',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日Ah点mm分',
        LLLL : 'YYYY年MMMD日ddddAh点mm分',
        l : 'YYYY-MM-DD',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日Ah点mm分',
        llll : 'YYYY年MMMD日ddddAh点mm分'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
                meridiem === '上午') {
            return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : function () {
            return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
        },
        nextDay : function () {
            return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
        },
        lastDay : function () {
            return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
        },
        nextWeek : function () {
            var startOfWeek, prefix;
            startOfWeek = hooks().startOf('week');
            prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
            return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
        },
        lastWeek : function () {
            var startOfWeek, prefix;
            startOfWeek = hooks().startOf('week');
            prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
            return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
        },
        sameElse : 'LL'
    },
    ordinalParse: /\d{1,2}(日|月|周)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
        }
    },
    relativeTime : {
        future : '%s内',
        past : '%s前',
        s : '几秒',
        m : '1 分钟',
        mm : '%d 分钟',
        h : '1 小时',
        hh : '%d 小时',
        d : '1 天',
        dd : '%d 天',
        M : '1 个月',
        MM : '%d 个月',
        y : '1 年',
        yy : '%d 年'
    },
    week : {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd

hooks.defineLocale('zh-hk', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'Ah點mm分',
        LTS : 'Ah點m分s秒',
        L : 'YYYY年MMMD日',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日Ah點mm分',
        LLLL : 'YYYY年MMMD日ddddAh點mm分',
        l : 'YYYY年MMMD日',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日Ah點mm分',
        llll : 'YYYY年MMMD日ddddAh點mm分'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
        } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    ordinalParse: /\d{1,2}(日|月|週)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '日';
            case 'M' :
                return number + '月';
            case 'w' :
            case 'W' :
                return number + '週';
            default :
                return number;
        }
    },
    relativeTime : {
        future : '%s內',
        past : '%s前',
        s : '幾秒',
        m : '1 分鐘',
        mm : '%d 分鐘',
        h : '1 小時',
        hh : '%d 小時',
        d : '1 天',
        dd : '%d 天',
        M : '1 個月',
        MM : '%d 個月',
        y : '1 年',
        yy : '%d 年'
    }
});

//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

hooks.defineLocale('zh-tw', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'Ah點mm分',
        LTS : 'Ah點m分s秒',
        L : 'YYYY年MMMD日',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日Ah點mm分',
        LLLL : 'YYYY年MMMD日ddddAh點mm分',
        l : 'YYYY年MMMD日',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日Ah點mm分',
        llll : 'YYYY年MMMD日ddddAh點mm分'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
        } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    ordinalParse: /\d{1,2}(日|月|週)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '日';
            case 'M' :
                return number + '月';
            case 'w' :
            case 'W' :
                return number + '週';
            default :
                return number;
        }
    },
    relativeTime : {
        future : '%s內',
        past : '%s前',
        s : '幾秒',
        m : '1 分鐘',
        mm : '%d 分鐘',
        h : '1 小時',
        hh : '%d 小時',
        d : '1 天',
        dd : '%d 天',
        M : '1 個月',
        MM : '%d 個月',
        y : '1 年',
        yy : '%d 年'
    }
});

hooks.locale('en');

return hooks;

})));

},{}],"npm":[function(require,module,exports){
exports.moment = require("moment");

exports.accounting = require("accounting");


},{"accounting":"accounting","moment":"moment"}],"sectionCoverCarousel":[function(require,module,exports){
var VenueCoverTile, dpr, moment, npm,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

npm = require('npm');

moment = npm.moment;

VenueCoverTile = require("CoverTile_Venue").VenueCoverTile;

exports.CoverCarousel = (function(superClass) {
  var cards;

  extend(CoverCarousel, superClass);

  Events.carouselItemClicked = "CoverCarousel.carouselItemClicked";

  cards = [];

  function CoverCarousel(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, css, imageCarousel;
    this.options = options != null ? options : {};
    if ((base = this.options).pageMargin == null) {
      base.pageMargin = dpr(24);
    }
    if ((base1 = this.options).itemSpacing == null) {
      base1.itemSpacing = dpr(20);
    }
    if ((base2 = this.options).carouselObjects == null) {
      base2.carouselObjects = "";
    }
    if ((base3 = this.options).itemWidth == null) {
      base3.itemWidth = dpr(214);
    }
    if ((base4 = this.options).itemHeight == null) {
      base4.itemHeight = dpr(214);
    }
    if ((base5 = this.options).testDate == null) {
      base5.testDate = moment("05/03/2017 8:30");
    }
    if ((base6 = this.options).parallax == null) {
      base6.parallax = true;
    }
    if ((base7 = this.options).coverType == null) {
      base7.coverType = "venue";
    }
    CoverCarousel.__super__.constructor.call(this, this.options);
    css = "\n\n\n\n";
    Utils.insertCSS(css);
    imageCarousel = new PageComponent({
      width: this.options.itemWidth,
      x: 0,
      height: this.options.itemHeight + (this.options.itemSpacing * 2),
      backgroundColor: "pink",
      scrollVertical: false,
      clip: false,
      originX: 0,
      contentInset: {
        left: this.options.itemSpacing,
        right: this.options.itemSpacing
      }
    });
    this.generateList(this.options.coverType, this.options.carouselObjects, imageCarousel);
    imageCarousel.content.on("change:x", (function(_this) {
      return function() {
        var card, desiredScale, howNotVisible, j, len, ref, results, size, visibleArea, xRelativeToPage;
        size = Screen.width - _this.options.itemWidth;
        ref = imageCarousel.content.children;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          card = ref[j];
          xRelativeToPage = card.x + imageCarousel.content.x;
          howNotVisible = Math.abs(xRelativeToPage / size);
          visibleArea = Utils.modulate(howNotVisible, [0, 1], [1, 0], true);
          desiredScale = Utils.modulate(visibleArea, [1, 0], [1, 0.9]);
          results.push(card.scale = desiredScale);
        }
        return results;
      };
    })(this));
    this.height = imageCarousel.maxY;
    this.width = Screen.width;
    this.backgroundColor = 'white';
  }

  CoverCarousel.prototype.generateList = function(type, list, pc) {
    var i, listItem, venue;
    if (list.length > 0) {
      console.log("generate list of type:", type);
      console.log("from this list:", list);
      return type = (function() {
        var j, len;
        switch (false) {
          case type !== "venue":
            console.log("venue being created", venue);
            for (i = j = 0, len = list.length; j < len; i = ++j) {
              venue = list[i];
              listItem = this.createVenue(venue);
              listItem.x = (this.options.itemWidth + this.options.itemSpacing) * i;
              listItem.y = this.options.itemSpacing;
              listItem.parent = pc.content;
              listItem.data = venue;
              listItem.index = i;
              listItem.on(Events.Click, (function(_this) {
                return function(event, layer) {
                  var item;
                  item = layer.data;
                  type = "venue";
                  return _this.emit(Events.carouselItemClicked, item, type);
                };
              })(this));
            }
            return console.log("card object", listItem.card);
          default:
            return console.error("list item type not supported");
        }
      }).call(this);
    }
  };

  CoverCarousel.prototype.createVenue = function(venue) {
    var venueCard;
    venueCard = new VenueCoverTile({
      name: venue.name + "_card",
      venue: venue,
      width: this.options.itemWidth,
      height: this.options.itemHeight,
      testDate: this.options.testDate,
      featureHeight: Screen.height
    });
    return venueCard;
  };

  CoverCarousel.define('itemSpacing', {
    get: function() {
      return this.options.itemSpacing;
    },
    set: function(value) {
      return this.options.itemSpacing = value;
    }
  });

  CoverCarousel.define('pageMargin', {
    get: function() {
      return this.options.pageMargin;
    },
    set: function(value) {
      return this.options.pageMargin = value;
    }
  });

  CoverCarousel.define('carouselObjects', {
    get: function() {
      if (this.options.carouselObjects === "") {
        return console.error("You must define objects of type venue, excursion, or event for the carousel to work");
      } else {
        return this.options.carouselObjects;
      }
    },
    set: function(value) {
      return this.options.carouselObjects = value;
    }
  });

  CoverCarousel.define('itemWidth', {
    get: function() {
      return this.options.itemWidth;
    },
    set: function(value) {
      return this.options.itemWidth = value;
    }
  });

  CoverCarousel.define('itemHeight', {
    get: function() {
      return this.options.itemHeight;
    },
    set: function(value) {
      return this.options.itemHeight = value;
    }
  });

  CoverCarousel.define('parallax', {
    get: function() {
      return this.options.parallax;
    },
    set: function(value) {
      return this.options.parallax = value;
    }
  });

  CoverCarousel.define('testDate', {
    get: function() {
      return this.options.testDate;
    },
    set: function(value) {
      return this.options.testDate = value;
    }
  });

  return CoverCarousel;

})(Layer);


},{"CoverTile_Venue":"CoverTile_Venue","DevicePixelRatio":"DevicePixelRatio","npm":"npm"}]},{},[])