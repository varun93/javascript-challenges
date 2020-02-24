/*
    the handler would be invoked atmost once in `limit` seconds
    examples: infinite scrolling check for the bottom of the screen etc...
*/
const throttle = (handler, limit) => {
    let inThrottle = false;
    return function () {
        if (!inThrottle) {
            handler.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
