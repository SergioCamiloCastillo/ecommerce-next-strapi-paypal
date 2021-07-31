const {slugify} = require("../../../util/stringUtil");

module.exports = {
    lifecycles:{
        async beforeCreate(data){
            if(!data.slug && data.name){
                data.slug = slugify(data.name)
              
            }
        }
    }
}