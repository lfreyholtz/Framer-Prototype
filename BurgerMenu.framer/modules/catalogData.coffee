subcategories =  {
		restaurants:"Restaurants"
		nightlife:"Nightlife"
		entertainment:"Entertainment Venues"

		facilitiesKids:"Facilities for Kids"
		familyEvents:"Events for Families"
		familyExcursions:"Family Excursions"
		familyProducts:"Family Products"
		familyShops:"Family Shopping"

		wssFacilities:"Wellness, Sport & Spa Facilities"
		wssEvents:"Wellness, Sport & Spa Events"
		wssExcursions:"Active Excursions"
		wssProducts:"Wellness, Sport & Spa Products"
		wssShops:"Wellness Sport and Spa Shops"

		eventsFamiles:"Family Events"
		eventsEntertainment:"Entertainment"
		eventsClasses:"Classes"
		eventsSpecial:"Exclusive Events"
		eventsInsider:"Insider Events"

	}

### TODO ###
# This dataset is not complete; needs rework.


categories =
		eat:
			name: "Eat, Drink & Nightlife"
			subcategories: [subcategories.restaurants, subcategories.nightlife, subcategories.entertainment]
		family:
			name:"Kids and Family"
			subcategories: [subcategories.facilitiesKids,
											subcategories.familyEvents,
											subcategories.familyExcursions,
											subcategories.familyProducts,
											subcategories.familyShops]
		wss:
			name:"Wellness, Sport & Spa"
			subcategories: [subcategories.wssFacilities,
											subcategories.wssEvents,
											subcategories.wssExcursions,
											subcategories.wssProducts]

		wss:
			name:"Wellness, Sport & Spa"
			subcategories: [subcategories.wssFacilities,
											subcategories.wssEvents,
											subcategories.wssExcursions,
											subcategories.wssProducts,
											subcategories.wssShops]#											subcategories.wssShops]#

module.exports = {
	categories: categories
	catalog: [
		{
			itemName:"Rossini"
			type:"Restaurant"
			categories:[categories.eat, categories.family]
		}
		{
			itemName:"Buffalo Steakhouse"
			type:"Restaurant"
			categories:[categories.eat]
		}
		{
			itemName:"Club 123"
			type:"Bar"
			categories:[categories.eat]
		}
	]
}
