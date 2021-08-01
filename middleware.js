import colors from 'colors';

export function requestTime(req,res,next) {
    res.requestTime = Date.now();
    next();
}

export function looger(req,res,next) {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
    next();
}