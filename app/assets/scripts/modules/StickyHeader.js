import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
	constructor(){
		// Menu gets dark as soon as faces the large-hero-title
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint()

		// change menu links color during scrolling the sections
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();	

		// add scrollings smoothy effect
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction){
				if(direction=="down"){
					that.siteHeader.addClass("site-header--dark");
				}
				else{
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction=='down'){  
						var matchingHeaderlink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link")
						$(matchingHeaderlink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction=='up'){  
						var matchingHeaderlink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link")
						$(matchingHeaderlink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}

	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
	}
}

export default StickyHeader;