 (function() {

    function setClickHandler(id, fn) {
      document.getElementById(id).onclick = fn;
    }

    setClickHandler('image_container', function(e) {
      e.target.tagName === 'IMG' && BigPicture({
        el: e.target,
        imgSrc: e.target.src.replace('_thumb', '')
      });
    });

    setClickHandler('local_image_container', function(e) {
      (e.target.tagName === 'IMG' || e.target.className === 'background-image') &&
        BigPicture({
          el: e.target
        });
    });

  })();