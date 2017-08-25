{dpr} = require 'DevicePixelRatio'

class exports.topicPage extends Layer

	############################ CLASS EVENTS    ############################
	## ACCEPTS A TOPIC AS DATA OBJECT

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->

		@options.topicData ?= "please define data"
		@options.topicTheme ?= "eatdrinknightlife"
		@options.topicTitle ?= @options.topicData.title
		@options.topicSubtitle ?= @options.topicData.subtitle
		@options.topicImage	?= @options.topicData.image
		@options.topicCategories ?= ["eins", "zwei", "drei"]
		@options.name ?= "topicPageContainer"
		@options.pageMargin ?= dpr 24
		@options.hasPromotion ?= true

		super @options

		@.backgroundColor = "white"
		@.name = @options.name


## /// THE CSS ##

# Some variables for the CSS:
# we should give our colors better names, like e.g. "blue500"
# we should also use short notations for fonts, e.g. "frut-light"

		defaultblue = "#3399CC"

		css = """
				.topicsInfoBlock {
					font-family:FrutigerLTStd-Light;
					width: #{@.width - (@options.pageMargin * 2) }px;
					padding:#{@options.pageMargin}px;
					}

				.topicTitle {
					font-size:#{dpr 32}px;
					font-weight:600;
					line-height:1.1;
					width:#{@.width - (@options.pageMargin*2)}px;
					letter-spacing:-#{dpr 1.2}px;
					text-transform:uppercase;
					word-wrap: break-word;
				}

				.topicSubTitle {
					font-size: #{dpr 14}px;
					font-weight:100;
					line-height:1;
					// margin-bottom:#{dpr 5}px;
					width:#{@.width - (@options.pageMargin*2)}px;
				}

				.sectionTitle {
					width:#{@.width-@options.viewPadding*2}px;
					margin-top:#{dpr 14}px;
					text-transform: uppercase;
					color: #{defaultblue};
				}

				.topicCatLinkListItem {
					font-family: FrutigerLTStd-Light;
					padding: #{dpr 23}px 0 #{dpr 18}px #{dpr 24}px;
					border-width: 1px 0 0 0;
					border-color: #aaa;
					border-style: solid;
					background-color: white;
					width: #{@.width - dpr 24}px;
				}

				.categoryLinkTitle {
					font-size: #{dpr 24}px;
					color: #{defaultblue};
					font-weight: 600;
					line-height: 1.2;
					text-transform: uppercase;
					margin-bottom: #{dpr 6}px;
					width: #{dpr 310}px;
					background-color: transparent;
				}

				.categoryLinkSubtitle {
					font-size: #{dpr 14}px;
					font-weight: 100;
					line-height: 1;
				}

				.categoryNumOfItems {
					font-size: #{dpr 14}px;
					font-weight: 600;
					line-height: 1;
				}

				.itineraryArrow {
					float:left;
					background-image:url("./images/interface/gr-arrow-callout@3x.png");
					background-size:100%;
					padding-top:#{dpr 4}px;
					background-repeat:no-repeat;
					background-position:left center;
					margin-top:#{dpr 2}px;
					width:#{dpr 27}px;
					height:#{dpr 9}px;
				}

				.topicPromotionArea {
					font-family: FrutigerLTStd-Bold;
					color: #3399CC;
					font-size: #{dpr 14}px;
					text-transform: uppercase;
					letter-spacing: .05em;
					padding: #{dpr 48}px #{dpr 24}px;
					border-top: solid 1px #aaa;
				}

				.topicPromotionHeadline {
					margin: 0 0 #{dpr 24}px 0 ;
				}

				.topicPromotionContent {
					background-color: pink;
					width: #{@.width - dpr 48}px;
					height: #{@.width - dpr 48}px;
				}

				.closeButton {
					background-image: url('./images/interface/icn_close.svg');
					background-repeat:no-repeat;
					background-position:center;
					background-size:100%;
					//background-color:purple;
					width: #{dpr 30}px;
					height: #{dpr 30}px;
				}

				.chevronIcon {
					background-image: url('./images/interface/icn_undisclose.svg');
					background-repeat:no-repeat;
					background-position:center;
					background-size:100%;
					# background-color:purple;
					width: #{dpr 12}px;
					height: #{dpr 12}px;
				}
			"""
		Utils.insertCSS(css)
# ///

## /// CREATE THE PAGE COVER: ##

		coverContainer = new Layer
			width:@.width
			height:@.width * 1.125
			backgroundColor:"purple"
			parent:@
			name:"coverContainer"
			originY: 0
			# clip:false

		topicHeroImage = new Layer
			width:@.width
			image:@options.topicImage
			height:@.width * 1.125
			parent: coverContainer
			name: "topicHeroImage"
			originY: 0

# the topicHeroGradient lays on top of the image to keep copy readable
		topicHeroGradient = new Layer
			width:@.width
			height:@.width * 1.125
			parent: coverContainer
			name: "topicHeroGradient"
		topicHeroGradient.style.background =
			"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)"

		topicTitles = new Layer
			parent: coverContainer
			html: "
				<div class= 'topicsInfoBlock'>
					<div class='topicTitle'>#{@options.topicTitle}</div>
					<div class='topicSubTitle'>#{@options.topicSubtitle}</div>
				</div>
				"
			width:@.width
			backgroundColor:"transparent"
			name: "topicTitles"

		topicTitles.size = Utils.textSize(topicTitles.html)
		# place it on the bottom of coverContainer:
		topicTitles.maxY = coverContainer.height
## ///


## /// CREATE THE SCROLLER: ##
# it contains both the coverContainer and the link list plus promotion

		topicContentScroller = new ScrollComponent
			size: @.size
			backgroundColor: "transparent"
			parent: @
			name: "topicContentScroller"
			scrollHorizontal: false

		topicContentScroller.content.draggable.overdragScale = .15
## ///

## /// THE LIST OF CATEGORY LINKS: ##

	  # Helperfunction: Build and place the chevron
		createChevrons = ->
			chevronContainer = new Layer
				name: "chevronContainer"
				backgroundColor: "transparent"
				# backgroundColor: "blue"
				parent: topicCatLink
				height: topicCatLink.height
				width: dpr 12
				maxX: topicCatLink.maxX - (dpr 24)

			chevronIcon = new Layer
				name:"chevronIcon"
				backgroundColor: "transparent"
				parent: chevronContainer
				html:"<div class='chevronIcon'></div>"

			chevronIcon.size = Utils.textSize(chevronIcon.html)
			chevronIcon.y = Align.center()
			chevronIcon.x = Align.center()

		# Helper to determine where to place the next item (both category links and promotion)
    # We build the link list at the bottom of coverContainer:
		myListY = coverContainer.maxY
		itemMaxY = myListY

		# now loop to build all the links:
		for myCategory, i in @options.topicData.categories
			topicCatLink = new Layer
				color: "#000000"
				parent: topicContentScroller.content
				name: "topicCatLink" + "#{i}"
				html: "
						<div class='topicCatLinkListItem'>
							<div class='categoryLinkTitle'>#{myCategory.catTitle}</div>
							<div class='categoryLinkSubtitle'>#{myCategory.catSubtitle}</div>
						</div>
					"
				y:itemMaxY

			topicCatLink.size = Utils.textSize(topicCatLink.html)

			# now set itemMaxY to bottom Y of the latest link item:
			itemMaxY = topicCatLink.maxY

			createChevrons()

			topicContentScroller.updateContent()
# ///


## /// THE PROMOTION ##
		# If we use a promotion, create it and place it at the end of the link list:
		if @options.hasPromotion
			topicPromotion = new Layer
				width: @.width
				backgroundColor: "white"
				parent:topicContentScroller.content
				name: "topicPromotionArea"
				html: "
					<div class='topicPromotionArea'>
						<div class='topicPromotionHeadline'>Unsere Empfehlung heute:</div>
						<div class='topicPromotionContent'> </div>
					</div>
					"
			topicPromotion.height = Utils.textSize(topicPromotion.html).height

			topicPromotion.y = itemMaxY
			topicContentScroller.updateContent()
# ///


## /// THE CLOSE BUTTON ##
		topicCloseButton = new Layer
			width: dpr 60
			height: dpr 60
			backgroundColor:"rgba(0,0,0,0.02)"
			# backgroundColor:"transparent"
			x: dpr 5
			y: dpr 20
			name:"topicCloseButton"
			parent:@
			borderRadius: @.width/2
			# shadowX: 0
			# shadowY: 2
			# shadowBlur: 5
			# shadowColor: "rgba(0,0,0,0.2)"

		closeIcon = new Layer
			name:"close_icon"
			backgroundColor: "transparent"
			parent: topicCloseButton
			html:"<div class='closeButton'></div>"

		closeIcon.size = Utils.textSize(closeIcon.html)
		closeIcon.y = Align.center()
		closeIcon.x = Align.center()

		# just a test to see if the closeButton has been disabled
		topicCloseButton.onClick ->
			print "Close button been pressed!"
# ///


## /// ON SCROLLING: CHECK FOR PARALLAX, RUBBERBAND EFFECT, CHECK IF WE SHOULD DISABLE BUTTON ##

		# Helperfunction: do the parallax when we scroll up
		doParallaxOnScrollUp = ->
			coverContainer.y = Utils.modulate(topicContentScroller.scrollY, [0, 600],[0,-250])
			# topicHeroImage.blur = Utils.modulate(topicContentScroller.scrollY, [0, 600],[0,3])
			topicTitles.maxY = Utils.modulate(topicContentScroller.scrollY, [0, 600],[coverContainer.height, coverContainer.height - 600])
			topicTitles.opacity = Utils.modulate(topicContentScroller.scrollY, [300, 440],[1, 0])
			topicCloseButton.opacity = Utils.modulate(topicContentScroller.scrollY, [560, 720],[1, 0])

		# Helperfunction: do the rubberband when we overscrolling down
		doRubberbandOnScrollDown = ->
			coverContainer.y = 0
			coverContainer.scale = Utils.modulate(topicContentScroller.scrollY, [-1, -1200],[1, 2.5], true)

		# Helperfunction: disable closeButton if opacity is set to 0
		checkForTopicCloseButton = ->
			if topicCloseButton.opacity < 0
				topicCloseButton.visible = false
			else topicCloseButton.visible = true

    # now onMove execute the helperfunctions
		topicContentScroller.onMove ->
			checkForTopicCloseButton()
			# on scroll move up:
			if topicContentScroller.scrollY > 0
				doParallaxOnScrollUp()
			# on overscroll move down:
			if topicContentScroller.scrollY < 0
				doRubberbandOnScrollDown()
## ///


## /// GETTERS / SETTERS ##

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'topicData',
			get: ->
				@options.topicData
			set: (value) ->
				@options.topicData = value

	@define 'topicImage',
			get: ->
				@options.topicImage
			set: (value) ->
				@options.topicImage = value

	@define 'topicTitle',
			get: ->
				@options.topicTitle
			set: (value) ->
				@options.topicTitle = value

	@define 'topicSubtitle',
			get: ->
				@options.topicSubtitle
			set: (value) ->
				@options.topicSubtitle = value

	@define 'name',
			get: ->
				@options.name
			set: (value) ->
				@options.name = value

	@define 'hasPromotion',
			get: ->
				@options.hasPromotion
			set: (value) ->
				@options.hasPromotion = value
# ///
