/* 
  invoke handler only if it is an action 
  was not taken in the last `delay` seconds 
  examples: typeahead
*/
const debounce = (handler, delay) => {
    let debounceHandler = null;
    return function () {
        clearTimeout(timeoutHandler);
        debounceHandler = setTimeout(() => {
            handler.apply(this, arguments);
        }, delay);
    };
}
