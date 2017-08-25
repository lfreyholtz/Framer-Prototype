TODO:
modules:
  Burger Menu
  DestinationArticles




data_venues:

DONE:
marktrestaurant
weitewelt
east
belladonna
fuego
casanova
brauhaus

TODO
Kochstudio
FrenchKiss
sushibar
rossini x
BuffaloSteakHouse  x
Tapasbar  x
scharfeecke x
pier3market x
5element
sunsetbar
magnumpleasurestore
cafemare
aidabar (attenzione, this is the bar at the beach club!)
beach club (not in the hyperionhandbook!)
poolbar
primabar
lanaibar
d6
spraybar
Nightfly
casinobar



# OpeningHours:

Some venues do not have a close time, e.g the Sushi Bar has only an open time (from 18:00)
We need a way to be flexible on that an show something like "Heute:   ab 18:00"
Problem: we have multiple open/close pairs, and if at all, only the last one does not have a "close" time



# Required modules for a restaurant detail page

sectionOpeningHours
sectionMainParagraph

sectionIncluded
sectionExcluded
(these might be combined, using a config parameter)

sectionWayfinder
sectionPopularTimes
(these might be a sectionFakeImage module, using a config parameter to point to the image used)

for Nightfly:

sectionMinimumAge

----------------------------------


# Quest-que je dois faire?

The module creates a sectionOpeningHoursXX layer.

1. Create a border at the top:

- create a topBorder layer and place it within, at @.y
- make it dark.

2. Create a framer layer for the section title.
3. Create the HTML that will store the section title.

sectionTitle = new Layer
  parent : @
  y: top-padding (= dpr 24)
  html: secOHSectionHeaderHTML

secOHSectionHeaderHTML = "<div>" + secOHTitle + "</div>"

4. Create the HTML for the sectionBody. Thats a div.left and a div.right.
  Then wrap both div.left and div.right into a secOHBodyHTML.

secOHBodyHTML = "<div class+"secOHBody"> + div.left + div.right + "</div>"

5. Now create a framer layer for the section body and put "secOHBodyHTML" into it

sectionBody = new Layer
  parent : @
  y: sectionTitle.y + (height of sectionTitle)
  html: secOHSectionBodyHTML
  padding-bottom: dpr 24

Make sure to update the height of the html thing with utils, and
give it framer layer the appropriate height:

  secHeadLabelDataContent.height = Utils.textSize(secHeadLabelDataContent.html).height

Dont forget to add apprpriate top/bottom paddings!

 THIS SHOULD BE IT


----------

# What do I need to do?


1. Create a border at the top

2. Create a framer layer for the section title.

3. Check what kind of section title we need.
So check if exOrIn is "excluded", "included" or error

4. Create the HTML that will store the section title.
Grap the excludedInPrice or includedInPrice .title and write it into the sectionHeaderHTML
