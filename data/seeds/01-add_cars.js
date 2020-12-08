
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '5TFHW5F15FX438558', make: 'Honda', model: '2012 Accord SE', mileage: '89335', transmissionType: 'automatic', titleStatus: 'clean'},
        {VIN: '1FDKF37GXVEC48760', make: 'Honda', model: '2018 Civic', mileage: '12433', transmissionType: 'automatic', titleStatus: 'clean'},
        {VIN: 'WAUBFAFL1AN061468', make: 'Jeep', model: '2016 Wrangler Renegade', mileage: '145883', transmissionType: 'manual', titleStatus: 'salvage'},
        {VIN: '1FTFW1ET6BFD55529', make: 'Toyota', model: '2014 Carolla LS', mileage: '129483', transmissionType: 'automatic', titleStatus: 'clean'},
        {VIN: '4S6CK58W5X4401711', make: 'Subaru', model: '2012 Outback', mileage: '89335', transmissionType: 'manual', titleStatus: 'clean'}
      ]);
    });
};
