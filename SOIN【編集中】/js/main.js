

if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    //slider
  var splide = new Splide( '.splide1', {
    type   : 'loop',
    padding: '5rem',
  } );

  splide.mount();

  var splide2 = new Splide( '.splide2', {
    type   : 'loop',
    padding: '5rem',
  } );

  splide2.mount();
  } else {
    //slider
  var splide = new Splide( '.splide1', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );

  splide.mount();

  var splide2 = new Splide( '.splide2', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );

  splide2.mount();
  }
