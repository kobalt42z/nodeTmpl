const index = require('./index')
const toys = require('./toys')

exports.routesInit  = (app) => {``
app.use("/",index)
app.use("/toys",toys)
};