$(document).ready(function() {

	// Development Only scripts


  // Add an anchor link around a header with an ID present
  $("h1[id], h2[id], h3[id], h4[id]").each(function(i) {
    var current = $(this),
      iden = current.attr("id");
    if ( iden != null) {
      current.wrapInner('<a href="#'+ iden +'" class="js-smooth-scroll"></a>');
    }
  });


  // Animate some scrolling for smoother transitions 
  // http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
  });


  // Add dimensions to the bottom of the viewport
  $(window).on('resize', showSize);
	showSize();

	function showSize() {
		$('#size').html( $(window).width() + 'px x ' + $(window).height() + 'px');
	}
});