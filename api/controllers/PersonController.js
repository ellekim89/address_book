/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
    Person.findOne(req.params.id).then(function(person){
      Category.findOrCreate({where:
                            {categoryName: req.body.categoryName}
      }).then(function(category){
        //console.log('category',category);
        person.categories.add(category);
        person.save(function(person){
          console.log('person', person);
        })
      })
    })
  }
};

