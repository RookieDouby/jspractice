/**
 * Created by sam on 17-3-15.
 */
// function console(msg) {
//     console.log(msg);
// }

function log(arguments) {
    console.log.apply(console, arguments);
}

log("hello", "world")