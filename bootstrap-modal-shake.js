/*
 * Bootstrap Modal Shake
 * @Version : 1.1
 * @Release : 2015-03-07
 * @Author  : Anderson Costa <arcostasi@gmail.com>
 */
;(function($) {

    /*
     * function shake animation
     * animate: A string determining how long the animation will run.
     * complete: A function to call once the animation is complete.
     */
    $.fn.shake = function(animate, complete) {

        var self = $(this);

        // add animate param, if defined
        var shake = animate != undefined ? 'animated ' + animate + ' shake' : 'animated shake';

        // add class shake
        self.addClass(shake);

        setTimeout(function() {
            // remove class shake
            self.removeClass(shake);

            // complete callback
            if (complete != undefined) {
                complete();
            }
            // 1s timeout is equal to slow animation
        }, 1000);
    }

})(jQuery);