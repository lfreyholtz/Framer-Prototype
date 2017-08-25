{dpr} = require 'DevicePixelRatio'
{IconButton} = require 'IconButton'
{SectionPromotion} = require 'SectionPromotion'

class exports.TopicPage extends Layer

	############################ CLASS EVENTS    ############################
	## ACCEPTS A TOPIC AS DATA OBJECT
	Events.closeClicked = "TopicPage.closeClicked"
	Events.promoClicked = "TopicPage.promoClicked"
	Events.itemClicked = "TopicPage.itemClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->

		@options.topic 																?= ""
		@options.name 							?= "TOPIC_PAGE"
		@options.pageMargin 				?= dpr 16
		@options.hasPromotion 			?= true


		super @options

		###  variables ###
		topicImage 							= @options.topic.image[0]
		topicTitle						 	= @options.topic.title
		topicSubtitle 					= @options.topic.tagline
		topicCategories 				= @options.topic.content
		hasPromotion						= @options.topic.hasPromotion



		### SELF LAYER PROPERTIES ###

		@.backgroundColor = "#FB8E7E"
		@.html ="<div style=
					'margin-top:#{(@.height / 2) + dpr 80}px;
					margin-bottom:auto;
					width:#{@.width}px;
					font-size:#{dpr 24}px;
					text-align:center;
					line-height:1.2;
					'>Topic Page Not Yet Available in Prototype</div>"
		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 90}px #{dpr 90}px"




		@.backgroundColor = "white"

# 		super @options
#
# 		@.name = @options.name
#
#
# ## /// THE CSS ##
#
# # Some variables for the CSS:
# # we should give our colors better names, like e.g. "blue500"
# # we should also use short notations for fonts, e.g. "frut-light"
#
		defaultblue = "#3399CC"
#
		css = """
				.topicsInfoBlock {
					font-family:FrutigerLTStd-Light, 'Open Sans', sans-serif;
					width: #{@.width - (@options.pageMargin * 2) }px;
					padding:#{@options.pageMargin}px;
					}

				.topicTitle {
					font-size:#{dpr 32}px;
					font-weight:600;
					line-height:1.1;
					letter-spacing:-#{dpr 1.2}px;
					text-transform:uppercase;
					word-wrap: break-word;
				}

				.topicSubTitle {
					font-size: #{dpr 16}px;
					font-weight:100;
					line-height:1;
				}

				.topicCatLinkListItem {
					# font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
					padding-top:#{@options.pageMargin * 2}px;
					padding-bottom:#{@options.pageMargin * 2}px;
					border-width: 1px 0 0 0;
					border-color: #aaa;
					border-style: solid;
					background-color: #FFF;
					width:#{@.width}px;
					background-image: url('modules/moduleImages/interface/icn_chev.svg');
					background-repeat:no-repeat;
					background-size:	#{dpr 10}px; #{dpr 15}px;
					background-position:#{@.width - dpr(10) - @options.pageMargin}px;
			}

				.categoryLinkTitle {
					font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;
					font-size: #{dpr 22}px;
					color: #{defaultblue};
					font-weight: 600;
					line-height: 1.2;
					text-transform: uppercase;
					margin-bottom: #{dpr 3}px;
					width: #{@.width - (@options.pageMargin * 3)}px;
					margin-left:#{@options.pageMargin}px;

				}

				.categoryLinkSubtitleGroup {
					font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif;
					font-size: #{dpr 14}px;
					color: #555555;
					font-weight: 100;
					line-height: 1;
					width: #{@.width - (@options.pageMargin * 3)}px;
					margin-left:#{@options.pageMargin}px;
				}

				.categoryNumOfItems {
					font-size: #{dpr 14}px;
					font-weight: 600;
					line-height: 1;
				}
				.categoryItemsDescription {
					font-size: #{dpr 14}px;
					font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
					font-weight: 100;
					line-height: 1;
				}
				.orange {
					color:orangered; !important
					font-style: italic; !important
				}

				.topicPromotionArea {
					font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;
					color: #3399CC;
					font-size: #{dpr 14}px;
					text-transform: uppercase;
					letter-spacing: .05em;
					padding: #{dpr 48}px #{dpr 24}px;
					border-top: solid 1px #aaa;
					background-color:#F3F3F3;
				}

				.topicPromotionHeadline {
					margin: 0 0 #{dpr 12}px 0 ;
				}

				.topicPromotionContent {
					background-color: pink;
					width: #{@.width - dpr 48}px;
					height: #{@.width - dpr 48}px;
				}


			"""
		Utils.insertCSS(css)

#
# ## /// CREATE THE PAGE COVER: ##
#
		coverContainer = new Layer
			width:@.width
			height:@.width * 1.125
			backgroundColor:"purple"
			parent:@
			name:"coverContainer"
			originY: 0
			# clip:false
#
		topicHeroImage = new Layer
			width:@.width
			image:topicImage
			height:@.width * 1.125
			parent:coverContainer
			name: "heroImage"
			originY: 0

		if !topicImage
			topicHeroImage.style =
				"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
				"background-repeat":"no-repeat"
				"background-position": "center"
				"background-size" : "#{dpr 90}px #{dpr 90}px"


# # the topicHeroGradient lays on top of the image to keep copy readable
		topicHeroGradient = new Layer
			width:@.width
			height:@.width * 1.125
			parent: coverContainer
			name: "topicHeroGradient"
		topicHeroGradient.style.background =
			"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)"
#
		topicTitles = new Layer
			parent: coverContainer
			html: "
				<div class= 'topicsInfoBlock'>
					<div class='topicTitle'>#{topicTitle}</div>
					<div class='topicSubTitle'>#{topicSubtitle}</div>
				</div>
				"
			width:@.width
			backgroundColor:"transparent"
			name: "topicTitles"

		topicTitles.size = Utils.textSize(topicTitles.html)
		# place it on the bottom of coverContainer:
		topicTitles.maxY = coverContainer.height
		topicTitles.originalY = topicTitles.y
# ## ///
#
#
# ## /// CREATE THE SCROLLER: ##
# # it contains both the coverContainer and the link list plus promotion
#
		topicContentScroller = new ScrollComponent
			size: @.size
			backgroundColor: "transparent"
			parent: @
			name: "topicContentScroller"
			scrollHorizontal: false
		# topicContentScroller.contentInset =
		# 	bottom:@options.pageMargin

		topicContentScroller.content.draggable.overdragScale = .15

		topicContentScroller.onMove ->
			# print topicContentScroller.scrollY
			checkForTopicCloseButton()
			# on scroll move up:
			if topicContentScroller.scrollY > 0
				doParallaxOnScrollUp()
			# on overscroll move down:
			if topicContentScroller.scrollY < 0
				doRubberbandOnScrollDown()
# ## ///
#
# ## /// THE LIST OF CATEGORY LINKS: ##

#
# 		# Helper to determine where to place the next item (both category links and promotion)
#     # We build the link list at the bottom of coverContainer:
		myListY = coverContainer.maxY
		itemMaxY = myListY
#
# 		# now loop to build all the links:

		if topicCategories
			for category, i in topicCategories
				numTopicItems = category.members.length

				## do stuff based on count of members

				if numTopicItems != 0
					topicCount = "<span class='categoryNumOfItems'>#{numTopicItems} </span>"
					descriptor = "<span class='categoryItemsDescription'>#{category.subtitle}</span>" if numTopicItems > 1
					descriptor = "<span class='categoryItemsDescription'>#{category.subsingular}</span>" if numTopicItems == 1

				else
					topicCount = ""
					descriptor ="<span class='categoryItemsDescription orange'>Category not yet available in prototype</span>"


				topicCatLink = new Layer
					color: "#000000"
					parent: topicContentScroller.content
					name: "topicCatLink" + "#{i}"
					html: "
							<div class='topicCatLinkListItem'>
								<div class='categoryLinkTitle'>#{category.title}</div>
								<div class='categoryLinkSubtitleGroup'>#{topicCount}#{descriptor}</div>
							</div>
						"
					y:itemMaxY

				topicCatLink.data = category.members
				topicCatLink.memberType = category.memberType

				console.log("Topic Cat Link data", category.members)
				console.log("Topic Cat Member Type", category.memberType)

				topicCatLink.size = Utils.textSize(topicCatLink.html)

				# now set itemMaxY to bottom Y of the latest link item:
				itemMaxY = topicCatLink.maxY

				topicCatLink.on Events.Click, (event, layer) =>
					l = layer.data
					t = layer.memberType
					# console.log("Data to be passed from link click method:", l)
					@emit(Events.itemClicked, l,t)

				# createChevrons()

				topicContentScroller.updateContent()
# # ///
#
#
# ## /// THE PROMOTION ##
# 		# If we use a promotion, create it and place it at the end of the link list:
		if hasPromotion
			promotion = new SectionPromotion
				hasStroke:true
				parent:topicContentScroller.content

				sectionLabel:"Unsere Empfehlung für Sie"


			promotion.y = itemMaxY
			topicContentScroller.updateContent()

			promotion.on Events.Click, =>
				@emit(Events.promoClicked, @)
# # ///
#
#
		closeButton = new IconButton
			icon:"close"
			name:"closeButton"
			x: dpr 16
			# x:@options.pageMargin
			y:dpr 44
			parent:@
		closeButton.originalY = closeButton.y

		closeButton.onClick =>
			@emit(Events.closeClicked, @)
#
#
# ## /// ON SCROLLING: CHECK FOR PARALLAX, RUBBERBAND EFFECT, CHECK IF WE SHOULD DISABLE BUTTON ##
#
# 		# Helperfunction: do the parallax when we scroll up
		doParallaxOnScrollUp = ->
			coverContainer.y = 				Utils.modulate(topicContentScroller.scrollY, [0, dpr(300)],[0,dpr(-50)])
			scrollFactor = .4
			yModulation = Utils.modulate(topicContentScroller.scrollY, [0, 300],[topicTitles.originalY, coverContainer.height * scrollFactor])
			topicTitles.y = yModulation
			topicTitles.opacity = 		Utils.modulate(topicContentScroller.scrollY, [300, 400],[1, 0])
			closeButton.opacity = 		Utils.modulate(topicContentScroller.scrollY, [400, 500],[1,0])
			closeButton.y = 					Utils.modulate(topicContentScroller.scrollY, [300, 450],[closeButton.originaly,-40])

		# Helperfunction: do the rubberband when we overscrolling down
		doRubberbandOnScrollDown = ->
			coverContainer.y = 0
			coverContainer.scale = Utils.modulate(topicContentScroller.scrollY, [-1, -1200],[1, 2.5], true)

		# Helperfunction: disable closeButton if opacity is set to 0
		checkForTopicCloseButton = ->
			if closeButton.opacity < 0
				closeButton.visible = false
			else closeButton.visible = true
#
#     # now onMove execute the helperfunctions

# ## ///
#
#
# ## /// GETTERS / SETTERS ##
#
	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value
#
	@define 'topic',
			get: ->
				if @options.topic is ""
					console.error("Topic not defined")
				else
					@options.topic
			set: (value) ->
					@options.topic = value

	@define 'hasPromotion',
			get: ->
				@options.hasPromotion
			set: (value) ->
				@options.hasPromotion = value
# # ///
