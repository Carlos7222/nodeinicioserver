// helpers
const hbs=require('hbs')

hbs.registerHelper('getafecha',()=>{
    return new Date().getFullYear();
})
