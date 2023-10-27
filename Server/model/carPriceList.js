const mongoose = require('mongoose');

const pricedetails = new mongoose.Schema({
  brand: { type: String },
  model_name: { type: String, },
  version_name: { type: String, },
  // car: {
  //       },
  Version_UID: { type: Number },
  model_id: {
    type: Number
  },
  city_name: {
    type: String
  },
  ex_showroom_price: {
    type: Number
  },
  //   state:{type: Number},
    city_id:{type: Number},
    cow_cess:{type: Number},
    registeration_charges:{type: Number},
    rto:{type: Number},
    road_safety_tax_cess:{type: Number},
    mcd:{type: Number},
    insurance:{type: Number},
    fastag:{type: Number},
    hypothecation_charges:{type: Number},
    tax_collected_at_source_tcs:{type: Number},
    one_year_extended_warranty:{type: Number},
    second_year_extended_warranty:{type: Number},
    three_year_extended_warranty:{type: Number},
    four_year_extended_warranty:{type: Number},
    five_year_extended_warranty:{type: Number},
    shield_of_trust:{type: Number},
    extended_warranty:{type: Number},
    paint_protection:{type: Number},
    three_m_protection:{type: Number},
    accessories_package:{type: Number},
    genuine_accessories:{type: Number},
    zero_dep_insurance:{type: Number},
    engine_protect:{type: Number},
    rti:{type: Number},
    one_year_rsa:{type: Number},
    two_year_rsa:{type: Number},
    four_year_rsa:{type: Number},
    rsa:{type: Number},
    rto_corporate:{type: Number},
    rto_bh_series:{type: Number},
    rto_bh_s:{type: Number},
}, { collection: "pricedetails" })

const PriceDetails = mongoose.model('mytestpricedetail', pricedetails);

module.exports = PriceDetails;