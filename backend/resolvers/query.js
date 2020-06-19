module.exports = {
    
    getOrder: async (parent, args, {db}) => {
       return await db.Order
        .findOne({_id: args.id});
    },

    getMealWithId: async (parent, args, {db}) => {
     return await  db.Meal
        .findOne({_id: args.id});
    },

    getMealsWithTags: async (parent, args, {db}) => {
      return await db.Meal
        .find({tags: {$in: args.tags}});
    }

    

}