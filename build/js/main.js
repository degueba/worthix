const home = {
	slide:() => {
		$('.js-slide').slick({
			nextArrow: '<i class="slick-arrow slick-next fa fa-chevron-right"></i>',
  			prevArrow: '<i class="slick-arrow slick-prev fa fa-chevron-left"></i>',
		})
	},

	parallax: () => {
  		$('.rellax').parallax(
	  			{
	  				imageSrc: 'https://i.ytimg.com/vi/xg5CDA14dns/maxresdefault.jpg'
	  			}
  			);
	},

	init:() => {
		home.slide()
		home.parallax()
	}
}

$(() => {
	if(!$('body').hasClass('home')) return false

	home.init()
})