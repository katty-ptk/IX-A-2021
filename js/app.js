// SMOOTH SCROLL
function smoothScroll ( target, duration ) {
    var target = document.querySelector(target); 
    var target_position = target.getBoundingClientRect().top;
    var start_position = window.pageYOffset;
    var distance = target_position - start_position;
    var start_time = null;

    function animation( current_time ) {
        if ( start_time === null )
            start_time = current_time;
        
        var time_elapsed = current_time - start_time;
        var run = ease( time_elapsed, start_position, distance, duration );
        window.scrollTo( 0, run );

        if ( time_elapsed < duration ) 
            requestAnimationFrame( animation );
    }

    function ease( t, b, c, d ) {
        t /= d / 2;

        if ( t < 1 ) 
            return c / 2 * t * t + b;
       
       t --;

        return -c / 2 * ( t * ( t - 2 ) - 1 ) + b; 
    }

    requestAnimationFrame( animation );
    

    // console.log(target_position);
}

var testScrollBtn = document.querySelector('.see-more-btn');
testScrollBtn.addEventListener('click', function () {
    smoothScroll('.test-scroll', 1000);
});