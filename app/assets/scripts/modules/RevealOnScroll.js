import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements,offsetVal){
		// which items to select when it's called
		this.itemsToReveal = elements; 
		//another argument to use (precentage of scroll)
		this.OffsetPecentage = offsetVal;
		// what to do INITIALLY with that item if it's called (add a class)
		this.hideInitially();
		// what to do WHEN SCROLL that item if it's called (add a class)
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this; // in order to access this object in Waypoint object
			//create a new Waypoint object
			new Waypoint({
				element: currentItem, // wich element when we scroll
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visable");
					// what to happen with that element when we scorll
				},
				offset: that.OffsetPecentage // untill where to scroll counted from top
			});
		});
	}
}

export default RevealOnScroll;