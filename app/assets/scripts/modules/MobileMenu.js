import $ from 'jquery';

class MobileMenu{
	//create and call when an object is createds
	constructor(){
		this.siteHeader = $('.site-header');
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $('.site-header__menu-content')
		this.events();
	}

	// in which case to do Something
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this)); // bind is for toggleTheMenu to recognize this
	}

	// Something(s)
	toggleTheMenu(){
		this.menuContent.toggleClass("site-header__menu-content--is-visable");
		this.siteHeader.toggleClass("site-header--is-expanded");
	}
}
export default MobileMenu;