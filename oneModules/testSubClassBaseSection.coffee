{BaseSection} = require 'Section_BaseSection'
{dpr} = require 'DevicePixelRatio'

class exports.TestSection extends BaseSection
	constructor: (@options = {}) ->

		@options.sectionTitle 						?= "Default title"
		@options.pageMargin								?= dpr 24
		@options.hasStroke										?= false


		super @options
