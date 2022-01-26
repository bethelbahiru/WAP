jQuery(document).ready(function (){









var init = function() {
    $('#puzzlearea div').each(function(index){
          // calculate x and y for this piece
          var x = ((index % 4) * 100);
          var y = (Math.floor(index / 4) * 100);
          $(this).addClass("puzzlepiece");
          //creating id for all div
          $(this).attr('id', (x / 100) + "_" + (y / 100));
          // set basic style and background
          $(this).css({
              'left': x + 'px',
              'top': y + 'px',
              'background-image': 'url("images/background.jpg")',
              'background-position': -x + 'px ' + (-y) + 'px'

          });
          // store x and y for later
          this.x = x;
          this.y = y;
    });
              
};
    init();
});