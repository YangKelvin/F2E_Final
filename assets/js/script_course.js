$(function(){
  var $thumbs = $('.animate1');
  var winheight = $(window).height();
  var fullheight = $(document).height();

  $(window).scroll(function(){
    animate_elems();
  });

	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
	});

  function animate_elems() {
    // 計算文件頂端被滑落的多高
    wintop = $(window).scrollTop();
    // console.log(wintop)
    // check animate1
    $thumbs.each(function(index){
      $thumb = $(this);
      // if already animated skip to the next item
      if($thumb.hasClass('fadeInUp')) { return true; }
      // element's distance from top of page in pixels
      else {
        // 計算Thumbnail元件原本距離視窗頂端多遠
        topcoords = $thumb.offset().top;
        if(wintop > (topcoords - winheight)*.5) {
          // animate when top of the window is 3/4 above the element
          console.log('haha')
          $thumb.addClass('fadeInUp');
          switch(index){
            case 0:
              console.log('case 0')
              $thumb.addClass('animate_delay1');
              break;
            case 1:
              console.log('case 1')
              $thumb.addClass('animate_delay1');
            break;
            case 2:
              console.log('case 2') 
              $thumb.addClass('animate_delay2');
              break;
            case 3:
              console.log('case 3') 
              $thumb.addClass('animate_delay2');
              break;
            case 4:
              console.log('case 3') 
              $thumb.addClass('animate_delay2');
              break;
          } //end switch-case
        } //end if
      } //end else
    }); //end each selector
  } // end animate_elems()
});
