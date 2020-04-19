module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

   // POST call route to create records in bulk 
   app.post("/bulkcreate", customers.bulkCreate);

  // POST call to create single record
  app.post("/customers", customers.create);

  // GET call to retrieve all the records present in table
  app.get("/customers", customers.findAll);

  // GET call to retrieve a single record with ID
  app.get("/customers/:customerId", customers.findOne);

  // PUT call to upadte record with "ID" and complete body
  app.put("/customers/:customerId", customers.update);

  // DELET call to Delete a recod with ID
  app.delete("/customers/:customerId", customers.delete);

  // DELETE call to delete all the records
  app.delete("/customers", customers.deleteAll);
};
