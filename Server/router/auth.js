const express = require('express');
const router = express.Router();
var ImageKit = require("imagekit");
const multer = require("multer")
const path = require("path")
const fs = require('fs');
const csv = require("csvtojson");
const fastCsv = require("fast-csv")
const Json2csvParser = require("json2csv").Parser;
const bcrypt = require('bcrypt');



require('../db/conn');
const User = require("../model/userSchema");

const Admin = require("../model/userAddForm");

const City = require("../model/cityAddForm");

const Fueltype = require("../model/fueltypeAddForm");

const Transmissiontype = require("../model/transmissiontypeAddForm");

const CarData = require("../model/carData");

const NewCarData = require("../model/newcarData");

const NewCars = require("../model/newCars");

const PriceDetails = require("../model/carPriceList");

const Dealer_Details = require("../model/dealer_details");

const City_Details = require("../model/city_names")

const Model_Prices = require('../model/model_price_range')

const Version_Prices = require('../model/version_price_range')

const Price_Query = require("../model/userPriceQuery");
const PriceQuery = require('../model/userPriceQuery');
const Pincode_Details = require('../model/pincode_details');
const HomePage = require('../model/homepage');
const Privacy_Policy = require('../model/privacy_policy');
const Terms = require('../model/terms');
const Model_Page = require('../model/CarModelPage');

const Trial = require("../model/trial")

const Social = require("../model/social")

const About_US = require("../model/aboutUs")


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        if (!fs.existsSync(path.resolve("./Images"))) {
            fs.mkdir("./Images", (err) => {
                if (err) console.log(err)
                else console.log("Done")
            })
        }
        callback(null, 'Images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});


var upload = multer({ storage: storage })

var city_storage = multer.diskStorage({
    destination: function (req, file, callback) {
        fs.mkdir("./city", (err) => {
            if (err) console.log(err)
            else console.log("Done")
        })
        callback(null, "city")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var city = multer({ storage: city_storage })




router.get('/', (req, res) => {
    res.send(`Hello World from the server auth`);
});

// router.get('/form', (req, res) =>{
//     res.send(`Lead Form`)
// });
router.get('/test-page', (req, res) => {
    console.log(`Test Rule`);
    res.send(`Test Page`);
});

//  Using Promises
// router.post('/form', (req, res) => {
//     const {name, phone, email, pincode} = req.body;
//     console.log(name);
//     console.log(phone);
//     console.log(email);
//     console.log(pincode);

//     if(!name|| !phone|| !email|| !pincode){
//         return res.status(422).json({error: "Plz fill the field properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//         return res.status(422).json({error: "Email already Exist"});
//         }

//         const user = new User({name, phone, email, pincode});
//         user.save().then(() => {
//             res.status(201).json({message: "User data added Successfuly"})
//         }).catch((err) => res.status(500).json({error:"Failed to add data to Database"}))
//     }).catch(err => {console.log(err);})
//     // console.log(req.body);
//     // console.log(req.body.name);
//     // console.log(req.body.email);
//     // res.json({message:req.body})
//     // res.send("My Form Page");
// });


// ||----------------------{Getonroadprice Lead form requests started}-------------------------||

//  Lead form post request for frontend
// add form data to database
router.post('/form', async (req, res) => {
    const { name, phone, email, pincode } = req.body;
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(pincode);

    if (!name || !phone || !email || !pincode) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }

        const user = new User({ name, phone, email, pincode });

        // const userResponse = 
        await user.save();

        // if(userResponse){
        res.status(201).json({ message: "User data added Successfuly" })
        // }else{
        // res.status(500).json({error:"Failed to add data to Database"})
        // }


    }
    catch (err) {
        console.log(err);
    }


});
// -------to get data from getonroadprice to the adming dashboard inquiry page---------

// Get leadform data
router.get('/leadformdata', async (req, res) => {
    try {
        const leadformdata = await User.find();
        res.status(201).json(leadformdata);
        console.log(leadformdata);
    } catch (error) {
        res.status(422).json(error);
    }
});


// Get leadform full details
router.get("/getleadformdata/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;

        const leadformdataindividual = await User.findById({ _id: id });
        // console.log(citynameindividual);
        res.status(201).json(leadformdataindividual);

    } catch (error) {
        res.status(422).json(error);

    }
})

// ||----------------------{Getonroadprice Lead form requests closed}-------------------------||

//Admin route
router.post('/adduser', async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log(name);
    console.log(email);
    console.log(password);

    if (!name || !email || !password || !role) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }
    try {
        const adminExist = await Admin.findOne({ email: email });

        if (adminExist) {
            return res.status(422).json({ error: "Admin already Exist" });
        }

        const admin = new Admin({ name, email, password, role });

        //

        await admin.save();

        res.status(201).json({ message: "Admin added Successfuly" })

    }
    catch (err) {
        console.log(err);
    }
})



// ||----------------------{City requests started}-------------------------||


//add City
router.post('/cityform', async (req, res) => {
    const { city } = req.body;
    console.log(city);

    if (!city) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }

    try {
        const userExist = await City.findOne({ city: city });

        if (userExist) {
            return res.status(422).json({ error: "City already Exist" });
        }
        const cityname = new City({ city });
        await cityname.save();
        res.status(201).json({ message: "New City added Successfuly" })
    }
    catch (err) {
        console.log(err);
    }


});


// Get City data
router.get('/citynames', async (req, res) => {
    try {
        const cityname = await City.find();
        res.status(201).json(cityname);
        console.log(cityname);
    } catch (error) {
        res.status(422).json(error);
    }
});


// Get city full details
router.get("/getcityname/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;

        const citynameindividual = await City.findById({ _id: id });
        // console.log(citynameindividual);
        res.status(201).json(citynameindividual);

    } catch (error) {
        res.status(422).json(error);

    }
})


// Update city data
router.patch("/updatecityname/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedcity = await City.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updatedcity);
        res.status(201).json(updatedcity);
    } catch (error) {
        res.status(422).json(error);
    }
})

// delete city
router.delete("/deletecity/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletecity = await City.findByIdAndDelete({ _id: id })
        console.log(deletecity);
        res.status(201).json(deletecity);
    } catch (error) {
        res.status(422).json(error);
    }
})

// xx----------------------{City requests closed}-------------------------xx



// ||----------------------{FuelType requests started}-------------------------||

//add Fuel Type
router.post('/addfuelform', async (req, res) => {
    const { fueltype } = req.body;
    console.log(fueltype);

    if (!fueltype) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }

    try {
        const fueltypeExist = await Fueltype.findOne({ fueltype: fueltype });

        if (fueltypeExist) {
            return res.status(422).json({ error: "Fuel Type already Exist" });
        }
        const fueltypename = new Fueltype({ fueltype });
        await fueltypename.save();
        res.status(201).json({ message: "New Fuel Type added Successfuly" })
    }
    catch (err) {
        console.log(err);
    }


});


// Get FuelType data
router.get('/fueltypenames', async (req, res) => {
    try {
        const fueltypename = await Fueltype.find();
        res.status(201).json(fueltypename);
        console.log(fueltypename);
    } catch (error) {
        res.status(422).json(error);
    }
});

// Get FuelType full details
router.get("/getfueltypename/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;

        const fueltypenameindividual = await Fueltype.findById({ _id: id });
        // console.log(citynameindividual);
        res.status(201).json(fueltypenameindividual);

    } catch (error) {
        res.status(422).json(error);

    }
})

// Update fueltype data
router.patch("/updatefueltypename/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedfueltype = await Fueltype.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updatedfueltype);
        res.status(201).json(updatedfueltype);
    } catch (error) {
        res.status(422).json(error);
    }
})

// delete fueltype
router.delete("/deletefueltype/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletefueltype = await Fueltype.findByIdAndDelete({ _id: id })
        console.log(deletefueltype);
        res.status(201).json(deletefueltype);
    } catch (error) {
        res.status(422).json(error);
    }
})


// xx----------------------{Fuel Type requests closed}-------------------------xx

// ||----------------------{Transmission Type requests started}-------------------------||


//add transmission type (1)
router.post('/addtransmissiontypeform', async (req, res) => {
    const { transmissiontype } = req.body;
    console.log(transmissiontype);

    if (!transmissiontype) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }

    try {
        const transmissiontypeExist = await Transmissiontype.findOne({ transmissiontype: transmissiontype });

        if (transmissiontypeExist) {
            return res.status(422).json({ error: "transmissiontype already Exist" });
        }
        const transmissiontypename = new Transmissiontype({ transmissiontype });
        await transmissiontypename.save();
        res.status(201).json({ message: "New transmissiontype added Successfuly" })
    }
    catch (err) {
        console.log(err);
    }


});

// Get transmissiontype data (2)
router.get('/transmissiontypenames', async (req, res) => {
    try {
        const transmissiontypename = await Transmissiontype.find();
        res.status(201).json(transmissiontypename);
        console.log(transmissiontypename);
    } catch (error) {
        res.status(422).json(error);
    }
});

// Get transmissiontype full details (3)
router.get("/gettransmissiontypename/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;

        const transmissiontypenameindividual = await Transmissiontype.findById({ _id: id });
        // console.log(citynameindividual);
        res.status(201).json(transmissiontypenameindividual);

    } catch (error) {
        res.status(422).json(error);

    }
})

// Update transmissiontype data (4)
router.patch("/updatetransmissiontypename/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedtransmissiontype = await Transmissiontype.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updatedtransmissiontype);
        res.status(201).json(updatedtransmissiontype);
    } catch (error) {
        res.status(422).json(error);
    }
})


// delete transmissiontype (5)
router.delete("/deletetransmissiontype/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletetransmissiontype = await Transmissiontype.findByIdAndDelete({ _id: id })
        console.log(deletetransmissiontype);
        res.status(201).json(deletetransmissiontype);
    } catch (error) {
        res.status(422).json(error);
    }
})

// xx----------------------{Transmission Type requests closed}-------------------------xx




// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FOR FRONTEND xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ||----------------------{Car Data requests Started}-------------------------||



router.post('/cars', async (req, res) => {
    const { brand, model, version, car } = req.body;
    console.log(brand);
    console.log(model);
    console.log(version);
    console.log(car);
    if (!brand || !model || !version) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }
    try {
        const carExist = await CarData.findOne({ version: version });
        if (carExist) {
            return res.status(422).json({ error: "Car already Exist" });
        }
        const cardata = new CarData({ brand, model, version, car });
        await cardata.save();
        res.status(201).json({ message: "Car data added Successfuly" })
    }
    catch (err) {
        console.log(err);
    }
});



router.get('/carsdata', async (req, res) => {
    try {
        const cardata = await CarData.find();
        res.status(201).json(cardata);
        console.log(cardata);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.get("/getcardata/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;

        const cardataindividual = await CarData.findById({ _id: id });
        // console.log(citynameindividual);
        res.status(201).json(cardataindividual);

    } catch (error) {
        res.status(422).json(error);

    }
})


// Get Car data (1)




// ||----------------------{Car new test Data requests Started}-------------------------||



router.post('/newcars', async (req, res) => {
    const { brand, model, version, car } = req.body;
    console.log(brand);
    console.log(model);
    console.log(version);
    console.log(car);
    if (!brand || !model || !version) {
        return res.status(422).json({ error: "Plz fill the field properly" });
    }
    try {
        const carExist = await NewCarData.findOne({ version: version });
        if (carExist) {
            return res.status(422).json({ error: "Car already Exist" });
        }
        const cardata = new NewCarData({ brand, model, version, car });
        await cardata.save();
        res.status(201).json({ message: "Car data added Successfuly" })
    }
    catch (err) {
        console.log(err);
    }
});



router.get('/newcarsdata', async (req, res) => {
    try {
        const cardata = await NewCarData.find();
        res.status(201).json(cardata);
        // console.log(cardata);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.get("/getnewcardata/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;

        const cardataindividual = await NewCarData.findById({ _id: id });
        // const cardataindividual = await NewCarData.find({brand:id});
        // console.log(citynameindividual);
        res.status(201).json(cardataindividual);

    } catch (error) {
        res.status(422).json(error);

    }
});

// for new car data 10/02/2023
router.get("/getnewonecardata/:model/:id", async (req, res) => {
    try {

        const { id, model } = req.params;


        const cardataindividual = await CarData.find({ version_name: { $regex: id, $options: 'i' }, model_id: model });
        // const cardataindividual = await NewCarData.find({brand:id});
        // console.log(citynameindividual);

        res.status(201).json(cardataindividual);

    } catch (error) {
        res.status(422).json(error);

    }
});

router.get("/single_car/:brand/:model/:version", async (req, res) => {
    let data = await CarData.find({ brand: req.params.brand, model_name: { $regex: req.params.model, $options: 'i' }, version_name: { $regex: req.params.version, $options: 'i' } })
    res.send(data)
})

// NewCars

router.get("/getonecardata/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const cardataindividual = await CarData.findById({ _id: id });
        // const cardataindividual = await NewCarData.find({brand:id});
        // console.log(citynameindividual);
        res.status(201).json(cardataindividual);

    } catch (error) {
        res.status(422).json(error);

    }
})

router.get("/getbrandcars", async (req, res) => {
    try {
        const branddata = await NewCarData.find(req.query);
        const NUM_OF_DATA = (branddata.length);
        console.log(NUM_OF_DATA);
        res.status(201).json(NUM_OF_DATA)
    } catch (error) {
        res.status(422).json(error);
    }
})

// new car data 10/02/2023
router.get("/getonebrandcars", async (req, res) => {
    try {
        const branddata = await CarData.find(req.query);
        const NUM_OF_DATA = (branddata.length);
        console.log(NUM_OF_DATA);
        res.status(201).json(NUM_OF_DATA)
    } catch (error) {
        res.status(422).json(error);
    }
})

// new car data 10/02/2023
router.get("/getonebrandcarsnew", async (req, res) => {
    try {
        // const MAX_CAR_PER_PAGE = 10;
        // const page = parseInt(req.query.page) || 0;
        // const branddata = await NewCarData.find(req.query).limit(MAX_CAR_PER_PAGE).skip(MAX_CAR_PER_PAGE * page);
        console.log(req.query)
        const branddata = await CarData.find({ brand: { $regex: req.query.brand, $options: 'i' } }).select('fuel_type model_name transmission_type uid model_id -_id');
        // const ALL_CARS = await NewCarData.find(req.query);
        // const NO_OF_CARS = (ALL_CARS.length);
        // const NO_OF_PAGES = Math.ceil(NO_OF_CARS / MAX_CAR_PER_PAGE);
        // console.log(NO_OF_CARS);
        // console.log(NO_OF_PAGES);
        let newBrand = branddata.filter((value, index, self) => {
            return index === self.findIndex((t) => {
                return t.model_name == value.model_name
            })
        })

        res.status(201).json(newBrand);


    } catch (error) {
        res.status(422).json(error);

    }
})


router.get("/getonebrandcars", async (req, res) => {
    try {
        // const MAX_CAR_PER_PAGE = 10;
        // const page = parseInt(req.query.page) || 0;
        // const branddata = await NewCarData.find(req.query).limit(MAX_CAR_PER_PAGE).skip(MAX_CAR_PER_PAGE * page);
        const branddata = await NewCarData.find(req.query);
        // const ALL_CARS = await NewCarData.find(req.query);
        // const NO_OF_CARS = (ALL_CARS.length);
        // const NO_OF_PAGES = Math.ceil(NO_OF_CARS / MAX_CAR_PER_PAGE);
        console.log(req.query);
        // console.log(NO_OF_CARS);
        // console.log(NO_OF_PAGES);
        res.status(201).json(branddata);


    } catch (error) {
        res.status(422).json(error);

    }
})

// for model page - -   -   -   -   -   -   -   -   -   -   -   -   --  -   -   -   -   --      --  -   -   -   -   -
router.get("/getmodeldetails", async (req, res) => {
    try {
        // const modeldata = await NewCarData.find(req.query).limit(MAX_CAR_PER_PAGE).skip(MAX_CAR_PER_PAGE * page);
        const modeldata = await NewCarData.find(req.query);
        // const ALL_CARS = await NewCarData.find(req.query);
        // const NO_OF_CARS = (ALL_CARS.length);
        // const NO_OF_PAGES = Math.ceil(NO_OF_CARS / MAX_CAR_PER_PAGE);
        console.log(req.query);
        // console.log(NO_OF_CARS);
        // console.log(NO_OF_PAGES);
        res.status(201).json(modeldata);


    } catch (error) {
        res.status(422).json(error);

    }
})

//For new Data 10/02/2023
router.get("/getmodelnewdetails", async (req, res) => {
    try {
        // const modeldata = await NewCarData.find(req.query).limit(MAX_CAR_PER_PAGE).skip(MAX_CAR_PER_PAGE * page);
        const modeldata = await CarData.find({ brand: req.query.brand, model_name: { $regex: req.query.model_name, $options: 'i' } }).select("displacement uid model_id transmission_type arai_mileage brand model_name model_id uid version_name Specifications Features model_description color_algorithm mileage_algorithm pros cons -_id");
        // const ALL_CARS = await NewCarData.find(req.query);
        // const NO_OF_CARS = (ALL_CARS.length);
        // const NO_OF_PAGES = Math.ceil(NO_OF_CARS / MAX_CAR_PER_PAGE);
        // console.log(req.query);
        // console.log(NO_OF_CARS);
        // console.log(NO_OF_PAGES);
        res.status(201).json(modeldata);


    } catch (error) {
        res.status(422).json(error);

    }
})



// --  --  --  --  --  --  --   --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --- --  --

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -Price Details- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

router.get(' /:id', async (req, res) => {
    try {
        let pricedetail = await PriceDetails.find({ Version_UID: req.params.id, city_name: "Bangalore" });
        pricedetail.length > 0 ? res.status(201).json(pricedetail) : res.status(201).json("No Data");
    } catch {
        res.status(400).json("Error")
        console.log("error")
    }
});


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


//login route

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message:"Awesome"});
    try {
        const { email, pincode } = req.body;
        if (!email || !pincode) {
            return res.status(400).json({ error: "Please Enter the Credentials" })
        }
        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);

        if (!userLogin) {
            res.status(400).json({ error: " User Not Found" });
        } else {
            res.json({ message: " User SignIn Successful" });
        }

    } catch (err) {
        console.log(err);
    }
})



router.post('/dealer', async (req, res) => {
    if (req.body.pin.length > 0) {
        console.log(req.body.pin)
        let data = await Dealer_Details.find({ brand_name: req.body.brand, city_name: req.body.city, pincode: req.body.pin })
        if (data.length <= 0) {
            let dat = await Dealer_Details.find({ brand_name: req.body.brand, city_name: req.body.city })
            res.status(201).json(dat)
        } else {
            res.send(data)
            console.log(data)
        }
    } else {
        let data = await Dealer_Details.find({ brand_name: req.body.brand, city_name: req.body.city })
        res.send(data)
        console.log(data)
    }
})


router.get('/car_brands/:state', async (req, res) => {
    if (req.params.state == "true") {
        let data = await CarData.find().select('brand -_id')
        data = data.map((item) => item.brand)
        let newData = data.filter((value, index, self) => {
            return index === self.findIndex((t) => {
                return t == value
            })
        })
        res.send(newData.splice(0, 10))
    } else {
        let data = await CarData.find().select('brand -_id')
        data = data.map((item) => item.brand)
        let newData = data.filter((value, index, self) => {
            return index === self.findIndex((t) => {
                return t == value
            })
        })
        res.send(newData)
    }

})

router.get('/city_names', async (req, res) => {
    let data = await City_Details.find().select(["City Name"]).sort({ "City Name": 1 })
    res.send(data)
})

router.get('/model_prices/:id', async (req, res) => {
    let data = await Model_Prices.find({ model_id: req.params.id })

    data.length > 0 ? res.send(data) : res.json("No Data")
})

router.get('/version_data/:id', async (req, res) => {
    let data = await CarData.find({ model_id: req.params.id }).select('model_name brand uid version_name Specifications Features transmission_type -_id')
    res.send(data)
})

router.get('/version_prices/:id/:city', async (req, res) => {
    let data = await PriceDetails.find({ city_name: req.params.city, model_id: req.params.id }).select('ex_showroom_price Version_UID -_id')
    data.length > 0 ? res.send(data) : res.json("No Data")
})

router.get('/single_version/:mid/:city', async (req, res) => {
    console.log(req.params.mid, req.params.city)
    let data = await PriceDetails.find({ city_name: req.params.city, Version_UID: req.params.mid }).select('ex_showroom_price -_id')
    res.send(data)
})

router.get('/all_model_prices/:brand', async (req, res) => {
    let data = await Model_Prices.find({ brand: req.params.brand })
    res.send(data)
})

router.get('/all_body_types', async (req, res) => {
    let data = await CarData.find().distinct("body_type")
    res.status(201).json(data)
})

router.get('/all_fuel_types', async (req, res) => {
    let data = await CarData.find().distinct("Specifications.engine_and_transmission.fuel_type")
    res.status(201).json(data)
})


router.get('/all_seating_types', async (req, res) => {
    let data = await CarData.find().select('seating_capacity -_id')
    let newData = data.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === data.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
    res.status(201).json(newData.sort())
})

let next = 0

router.get('/filter/:type/:value/:state', async (req, res) => {
    let { type, value, state } = req.params
    let filter = {}
    filter[type] = { $regex: value, $options: 'i' }

    console.log(type, value, state, filter)

    state == "true" ? next = 0 : null


    let data = await CarData.find(type === "fuel_type" ? { "Specifications.engine_and_transmission.fuel_type": { $regex: value, $options: 'i' } } : filter).skip(next).select('Specifications Features model_name brand transmission_type uid model_id -_id').limit(100)

    console.log(data)


    next += 100

    let newData = data.filter((value, index, self) => {
        return index === self.findIndex((t) => {
            return t.model_name == value.model_name
        })
    })
    console.log(newData)
    // res.send(newData.length.toString())
    res.status(201).json(newData)
})

router.get('/filter_model_prices', async (req, res) => {
    let data = await Model_Prices.find().select('min_price max_price model_id -_id')
    res.send(data)
})

let next1 = 0

router.get('/filter_range/:value/:state', async (req, res) => {
    let { value, state } = req.params
    state == "true" ? next1 = 0 : null
    let data = await Model_Prices.find({ min_price: { $lte: value } }).skip(next1).limit(10)
    next1 += 10
    res.send(data)
})


router.get('/filter_range_brand/', async (req, res) => {
    let data = await CarData.find().select('fuel_type model_name brand transmission_type uid model_id -_id')
    res.send(data)
})

// router.get('/dealer_model/:brand', async(req,res)=>{
//     let data = await CarData.find({brand: req.params.brand}).select('model_name -_id')
//     let newData = data.filter((value, index, self) => {
//         return index === self.findIndex((t) => {
//             return t.model_name == value.model_name
//         })
//     })
//     res.send(newData)
// })

router.get('/dealer_brand/:brand/:pincode?', async (req, res) => {
    if (req.params.pincode == "undefined") {
        let data = await Dealer_Details.find({ brand_name: req.params.brand })
        res.send(data)
    } else {
        let data = await Dealer_Details.find({ brand_name: req.params.brand, pincode: req.params.pincode })
        if (data.length <= 0) {
            let dat = await Dealer_Details.find({ brand_name: req.params.brand })
            res.status(201).json(dat)
        } else {
            res.send(data)
        }
    }

})

router.post('/price_query', async (req, res) => {
    let { name, email, phone, pincode, car } = req.body

    let query = new Price_Query({
        name: name,
        email: email,
        number: phone,
        pincode: pincode,
        car: car
    })

    let data = await PriceQuery.findOne({ car: car, name: name, email: email })

    if (data) {
        res.status(400).send("Query Already Exists")
    } else {
        query.save((err) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).send("Will Contact You Soon")
            }
        })
    }

})

router.get('/model_car/:brand/:model', async (req, res) => {
    let data = await CarData.find({ brand: req.params.brand, model_name: { $regex: req.params.model, $options: 'i' } }).select("transmission_type seating_capacity Specifications Features -_id")
    res.send(data)
})

router.get('/pincode_details/:code', async (req, res) => {
    if (isNaN(req.params.code)) {
        let data = await Pincode_Details.find({ City: { '$regex': `^${req.params.code}`, '$options': 'i' } }, {}).limit(150)
        res.send(data)
    } else {
        let data = await Pincode_Details.aggregate([
            { $addFields: { pincodeStr: { $toString: '$pincode' } } },
            { $match: { pincodeStr: new RegExp("^" + req.params.code) } }
        ]).limit(50)
        console.log(typeof (data))
        res.send(data)
    }
})

router.get('/price_car_details/:version/:model', async (req, res) => {
    console.log(req.params.version, req.params.model)
    let data = await CarData.find({ uid: req.params.version, model_id: req.params.model }).select('brand model_name version_name -_id')
    res.send(data)
})

router.get('/price_breakup/:model/:city', async (req, res) => {
    let data = await PriceDetails.find({ model_id: req.params.model, city_name: req.params.city })
    res.send(data)
})

router.get('/users', async (req, res) => {
    let data = await Admin.find().select("createdAt name email role -_id")
    res.send(data)
})

router.get('/queries/*', async (req, res) => {
    if (req.params[0] === "default") {
        let data = await PriceQuery.find()
        res.send(data)
    } else if (req.params[0] === "ascending") {
        let data = await PriceQuery.find().sort({ '_id': -1 })
        res.send(data)
    } else if (req.params[0] === "descending") {
        let data = await PriceQuery.find().sort({ '_id': +1 })
        res.send(data)
    }

})

router.get('/remove-user/:email', async (req, res) => {
    let data = await Admin.deleteOne({ email: req.params.email })
    let dat = await Admin.find().select("createdAt name email -_id")
    res.send(dat)
})

router.get("/car-search/:name", async (req, res) => {
    let data = await CarData.find({ full_name: { $regex: `(?i)${req.params.name}` } }).select("model_name brand full_name uid model_id").limit(150)
    let newData = data.filter((value, index, self) => {
        return index === self.findIndex((t) => {
            return t.model_name == value.model_name
        })
    })
    // let data = await CarData.aggregate([
    //     { $project: { full_name: { $concat: [ "$brand", " ", "$model_name" ] } } },
    //     { $merge: "cardatas" }
    //   ])
    // let data = await CarData.updateMany({ $unset: { FullName: "" } })
    // console.log(data)
    res.send(newData)
})

router.get("/try-link", async (req, res) => {
    let data = await CarData.find({ brand: "Hyundai" }).aggregate([
        { $group: { _id: null, model_name: { $addToSet: "$model_name" } } },
        { $unwind: "$model_name" },
        { $project: { _id: 0 } },
    ])
    res.send(data)
})


router.get("/all_typ/:car", async (req, res) => {
    let data = await CarData.find({ brand: req.params.car }).select("model_name Specifications transmission_type -_id")
    res.send(data)
})

router.get("/all_var/:type/:value", async (req, res) => {
    let { type, value } = req.params
    let filter = {}
    filter[type] = value
    let data = await CarData.find(filter).select("model_name Specifications Features brand fuel_type transmission_type -_id")
    res.send(data)
})

// router.get('/most_searched/:body', async (req, res) => {
//     let data = await CarData.find({ body_type: req.params.body }).select("model_name brand model_id uid").limit(3)
//     res.send(data)
// })

router.get('/most_price', async (req, res) => {
    let data = await Model_Prices.find().select("model_id min_price max_price -_id").sort({
        min_price: 1
    }).limit(3)

    let allData = []
    let prices = []

    await Promise.all(data.map(async (item) => {
        let da = await CarData.find({ model_id: item.model_id }).select("model_name brand model_id uid -_id").limit(1)
        da.map((itm) => {
            prices.push({ model_id: item.model_id, min_price: item.min_price, max_price: item.max_price })
            allData.push(itm)
        })
    }))
    allData.push(prices)
    res.send(allData)
})

router.get("/alldata", async (req, res) => {
    let bodies = ["Hatchback", "Sedan", "MUV", "SUV", "Coupe", "Luxury"]
    let alldat = []

    await Promise.all(bodies.map(async (itm) => {
        let data = await CarData.find({ body_type: itm }).select("brand fuel_type transmission_type model_name model_id uid body_type").limit(200)
        let newData = data.filter((value, index, self) => {
            return index === self.findIndex((t) => {
                return t.brand == value.brand
            })
        })
        newData.splice(0, 3).map((item) => {
            alldat.push(item)
        })
    }))
    res.send(alldat)
})

router.get("/banner", async (req, res) => {
    let data = await HomePage.find().select("banner -_id")
    res.send(data)
})

router.post("/change_banner", async (req, res) => {
    let data = await HomePage.updateMany({ banner: req.body.image })
    res.status(204).json("Changed Successfully")
})

router.get("/advertisement", async (req, res) => {
    let data = await HomePage.find().select("advertisement_link status -_id")
    res.send(data)
})

router.post("/change_advertisement", async (req, res) => {
    await HomePage.updateMany({ advertisement_link: req.body.link })
    res.status(204).json("Changed Successfully")
})

router.get("/change_status/:value", async (req, res) => {
    let data = await HomePage.updateMany({ status: req.params.value })
    res.status(204).json("Changed Successfully")
})

router.get("/model_advertisement", async (req, res) => {
    let data = await Model_Page.find().select("advertisement_image advertisement_link status -_id")
    res.send(data)
})

router.post("/change_model_advertisement", async (req, res) => {
    if (req.body.image) {
        let data = await Model_Page.updateMany({ advertisement_image: req.body.image })
        res.status(204).json("Changed Successfully")
    } else if (req.body.link) {
        let data = await Model_Page.updateMany({ advertisement_link: req.body.link })
        res.status(204).json("Changed Successfully")
    }
})

router.get("/change_model_status/:value", async (req, res) => {
    let data = await Model_Page.updateMany({ status: req.params.value })
    res.status(204).json("Changed Successfully")
})

router.post("/change_policy", async (req, res) => {
    let data = await Privacy_Policy.updateMany({ content: req.body.content })
    res.send("Done")
})

router.get("/get_policy", async (req, res) => {
    let data = await Privacy_Policy.find()
    res.send(data)
})

router.post("/change_pros", async (req, res) => {
    let data = await Model_Page.updateMany({ pros: req.body.content })
    res.send("Done")
})

router.post("/change_cons", async (req, res) => {
    let data = await Model_Page.updateMany({ cons: req.body.content })
    res.send("Done")
})

router.get("/get_tips", async (req, res) => {
    let data = await Model_Page.find().select("pros cons -_id")
    res.send(data)
})


router.post("/change_terms", async (req, res) => {
    let data = await Terms.updateMany({ content: req.body.content })
    res.send("Done")
})

router.get("/get_terms", async (req, res) => {
    let data = await Terms.find()
    res.send(data)
})


router.get('/car_nav/', async (req, res) => {
    let data = await CarData.find().distinct("brand")
    res.send(data.slice(0, 10))
})

router.get("/similar", async (req, res) => {
    let data = await CarData.find().select("brand model_name Specifications Features version_name fuel_type transmission_type model_id uid -_id").limit(1000)
    let newData = data.filter((value, index, self) => {
        return index === self.findIndex((t) => {
            return t.brand == value.brand
        })
    })

    res.send(newData.splice(0, 3))
})

router.get("/all_brands", async (req, res) => {
    let data = await CarData.find().select("brand -_id")
    let newData = data.filter((value, index, self) => {
        return index === self.findIndex((t) => {
            return t.brand == value.brand
        })
    })

    res.send(newData)

})

router.get("/diff_prices/:version", async (req, res) => {
    let cities = ["Chennai", "Hyderabad", "Bangalore", "Mumbai", "Kolkata"]
    let allData = []
    await Promise.all(cities.map(async (itm) => {
        let data = await PriceDetails.find({ Version_UID: req.params.version, city_name: itm }).select("ex_showroom_price city_name -_id").limit(1)
        if (data[0] != null) {
            allData.push(data[0])
        }
    }))
    res.send(allData)
})

router.get("/norml_cities/:version", async (req, res) => {
    let data = await PriceDetails.find({ Version_UID: req.params.version }).select("ex_showroom_price city_name -_id")
    res.send((data.sort(() => Math.random() - 0.5)).splice(0, 5))
})


router.get('/car_brand_admin', async (req, res) => {
    let data = await CarData.find().select('brand status -_id')
    // data = data.map((item) => item.brand)
    let newData = data.filter((value, index, self) => {
        return index === self.findIndex((t) => {
            return t.brand == value.brand
        })
    })
    res.send(newData)

})

router.get('/status_update/:brand/:status', async (req, res) => {
    let data = await CarData.updateMany({ brand: req.params.brand }, { "$set": { status: req.params.status } })
    res.send("Updated")
})


router.get('/features', async (req, res) => {
    let data = await CarData.findOne().select('Specifications Features -_id')
    res.send(data)

})

router.get('/color_desc', async (req, res) => {
    let data = await CarData.findOne({ brand: "Hyundai", model_name: "Aura" }).select("color_algorithm -_id")
    res.send(data)
})

router.get('/mileage_desc', async (req, res) => {
    let data = await CarData.findOne({ brand: "Hyundai", model_name: "Aura" }).select("mileage_algorithm -_id")
    res.send(data)
})

router.get('/varient_desc', async (req, res) => {
    let data = await CarData.findOne({ brand: "Hyundai", model_name: "Aura" }).select("varient_description -_id")
    res.send(data)
})


router.post('/add_new_car', async (req, res) => {

    let dat = req.body

    let mod_price = {
        brand: dat.brand,
        model_id: dat.model_id,
        version_name: dat.varient_name,
        min_price: dat["min-price"],
        max_price: dat["max-price"],
        min_engine: dat["min-engine"],
        max_engine: dat["max-engine"],
        min_mileage: dat["min-mileage"],
        max_mileage: dat["max-mileage"],
        rating: dat.rating,
        youtube: dat.youtube
    }

    let ver_price = {
        carname: dat.model_name,
        model_id: dat.model_id,
        version_name: dat.version_name,
        min_price: dat["vmin-price"],
        max_price: dat["vmax-price"],
        version_Id: dat.uid
    }


    let mod = new Model_Prices(mod_price)

    mod.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("done")
        }
    })

    let ver = new Version_Prices(ver_price)

    ver.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("done")
        }
    })

    let car = new CarData(dat)

    car.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("done")
        }
    })
})

router.post("/imagekit", async (req, res) => {


    let dat = req.body

    // console.log("Images Uploading")

    // let top = []
    // let mid = []
    // let final = []


    var imagekit = new ImageKit({
        publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
        privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
        urlEndpoint: "https://ik.imagekit.io/GORP"
    });


    // fs.readdirSync("./Images").forEach((item) => {
    //     top.push(item)
    // })


    // top.forEach((file, index) => {

    //     const ab = path.resolve(`./Images`, file);

    //     let itm = []

    //     fs.readdirSync(`./Images/${file}`).forEach((item, index) => {
    //         itm.push(item)
    //         if (index === fs.readdirSync(`./Images/${file}`).length - 1) {
    //             mid.push({ [file]: itm })
    //         }
    //     })

    // })


    // mid.forEach((sub) => {
    //     Object.keys(sub).forEach((item) => {
    //         sub[item].map((itm, index) => {
    //             let itmm = []
    //             const absolutePath = path.resolve(`./Images/${item}`, itm);
    //             itmm.push(fs.readFileSync(absolutePath))
    //             if (index == sub[item].length - 1) {
    //                 final.push({ [sub[item]]: itmm })
    //             }
    //         })
    //     })


    // })

    fs.readdirSync("./Images").forEach((file, index) => {

        const ab = path.resolve(`./Images`, file);

        fs.readdirSync(`./Images/${file}`).forEach((sub, ind) => {
            const absolutePath = path.resolve(`./Images/${file}`, sub);

            let data = fs.readFileSync(absolutePath)


            imagekit.upload({
                file: data, //required
                fileName: `${path.basename(ab) === "hero_image" ? `${dat.model_name}.jpg` : path.basename(ab) === "colors" || path.basename(ab) === "thumbs" ? sub : path.basename(ab) === "brand_logo" ? `${dat.brand}.jpg` : `car${ind + 1}.jpg`}`,
                folder: `${path.basename(ab) === "brand_logo" ? `/Logos` : `/${dat.brand}/${dat.model_name}/${path.basename(ab) === "hero_image" ? "" : path.basename(ab)}`}`,
                useUniqueFileName: false
            }, function (error, result) {
                if (error) console.log(error);
                else {
                    console.log(result)
                };
            });

        })


    })

    fs.rmSync(path.resolve(`./Images`), { recursive: true, force: true });

    res.json({ status: "Done" })

})




router.get("/get_model/:brand", async (req, res) => {
    let data = await CarData.find({ brand: req.params.brand }).select("model_name model_id -_id")
    let newData = data.filter((value, index, self) => {
        return index === self.findIndex((t) => {
            return t.model_name == value.model_name
        })
    })
    res.send(newData)
})

router.get("/get_admin_car/:brand/:model", async (req, res) => {
    let data = await CarData.findOne({ brand: req.params.brand, model_name: req.params.model }).select("model_name brand model_description model_id pros cons -_id")
    res.send(data)
})

router.post("/update_model/:brand/:model", async (req, res) => {
    let allData = req.body
    let data = await CarData.updateMany({ brand: req.params.brand, model_name: req.params.model }, { $set: { model_name: allData.model_name, cons: allData.cons, pros: allData.pros, model_description: allData.model_description } }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('done')
        }
    }).clone().catch(function (err) { console.log(err) })
    // res.send("Done")
    // console.log(req.body)
})

router.post("/update_spec/:type", async (req, res) => {
    let itm = req.body

    let data = await CarData.updateMany({ uid: 1 }, { "$set": { [req.params.type]: itm } }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Done")
        }
    }).clone().catch(function (err) { console.log(err) })
})


router.post('/img/:type', upload.array('images'), function (req, res) {


    const dirPath = './Images';
    const subDirName = req.params.type;

    console.log(req.params.type)

    if (!fs.existsSync(path.resolve(`${dirPath}/${subDirName}`))) {
        // Create subdirectory
        fs.mkdirSync(path.join(dirPath, subDirName));

        // Get list of files in directory
        const files = fs.readdirSync(dirPath);

        // Loop over files and move them to subdirectory
        files.forEach(file => {
            if (file.includes(".")) {
                const filePath = path.join(dirPath, file);
                const newFilePath = path.join(dirPath, subDirName, file);
                fs.renameSync(filePath, newFilePath);
            }
        });
    }

    res.send({ status: "Done" })
});


router.get("/pincode_list/:items", async function (req, res) {
    let data = await Pincode_Details.find().skip(req.params.items).limit(20)
    res.send(data)
})

router.post("/add_pincode", async function (req, res) {
    if (Object.keys(req.body).length > 1) {
        let pin = new Pincode_Details(req.body.changed)
        pin.save()
    } else {
        let pin = new Pincode_Details(req.body)
        pin.save()
    }
})

router.post("/admin_dealers", async function (req, res) {
    let data = await Dealer_Details.find({ brand_name: req.body.brand, city_name: req.body.city })
    res.send(data)
})

router.post("/add_dealer", async function (req, res) {
    if (Object.keys(req.body).length > 1) {
        let dealer = new Dealer_Details(req.body.changed)
        dealer.save()
    } else {
        let dealer = new Dealer_Details(req.body)
        dealer.save()
    }
})


router.post("/city_price", city.array("city"), async function (req, res) {
    csv().fromFile(req.file.path).then((jsonObj) => {
        jsonObj.map((item) => {
            var city_price = new Version_Prices(item);
            city_price.save((err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("done")
                    fs.rmSync(path.resolve(`./city`), { recursive: true, force: true });
                }
            });
        })
    })

    fs.rmSync(path.resolve(`./city`), { recursive: true, force: true });

    res.send("Done")
})

router.post("/del_dealer", async function (req, res) {
    let dealer = await Dealer_Details.deleteOne({ dealer_name: req.body.dealer_name })
})

router.post("/update_dealer", async function (req, res) {
    let { email, phone, pincode } = req.body.original
    let dealer = await Dealer_Details.updateOne({ email: email, phone: phone, pincode: pincode }, { $set: req.body.changed })
})

router.post("/update_post", async function (req, res) {
    if (req.body.original.City === req.body.changed.City) {
        await Pincode_Details.updateOne(req.body.original, { $set: req.body.changed })
    } else {
        await Pincode_Details.updateOne(req.body.original, { $set: req.body.changed })
        await Pincode_Details.updateMany({ City: req.body.original.City }, { $set: { City: req.body.changed.City } })
        await Dealer_Details.updateMany({ city_name: req.body.original.City }, { $set: { city_name: req.body.changed.City } })
    }
})

router.get("/version_brand_admin", async (req, res) => {
    let data = await PriceDetails.distinct("brand")
    res.send(data)
})

router.get("/version_model_admin/:brand", async (req, res) => {
    let data = await PriceDetails.find({ brand: req.params.brand }).distinct("model_name")
    res.send(data)
})

router.get("/version_varient_admin/:mod", async (req, res) => {
    let data = await PriceDetails.find({ model_name: req.params.mod }).distinct("version_name")
    res.send(data)
})

router.get("/version_city_admin", async (req, res) => {
    let data = await PriceDetails.distinct("city_name")
    res.send(data)
})

router.post("/price_result", async (req, res) => {
    let data = await PriceDetails.find(req.body)
    res.send(data)
})


router.post("/update_price", async (req, res) => {
    let item = req.body
    delete item["_id"]
    console.log(item)
    let data = PriceDetails.updateOne({ Version_UID: parseInt(req.body.Version_UID), city_name: req.body.city_name }, { $set: item }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Done")
        }
    })
    res.send("Done")
})

router.get("/manage_brand/:brand", async (req, res) => {
    let data = await CarData.findOne({ brand: req.params.brand }).select("brand uid brand_description")
    res.send(data)
})

router.post("/modify_brand/:brand", async (req, res) => {
    let data = await CarData.updateMany({ brand: req.params.brand }, { $set: req.body })
})


router.get("/admin_varient/:model", async (req, res) => {
    let data = await CarData.find({ model_name: req.params.model }).select("version_name -_id")
    res.send(data)
})

router.get("/admin_varata/:brand/:model/:varient", async (req, res) => {
    let data = await CarData.findOne({ brand: req.params.brand, model_name: req.params.model, version_name: req.params.varient }).select("brand model_name version_name Features Specifications -_id")
    res.send(data)
})


router.get("/admin_price/:model/:version", async (req, res) => {
    let data = await Version_Prices.findOne({ carname: req.params.model, version_name: req.params.version })
    res.send(data)
})

// router.get("/trial", async (req, res) => {
//     let data = await Trial.find({ brand: "Hyundai" }).select("brand uid model_name version_name -_id")
//     let updated = await CarData.find({ brand: "Hyundai" }).select("brand model_name version_name -_id")

//     data.map((item) => {
//         updated.map(async (itm) => {
//             if (item.model_name === itm.model_name && item.version_name === itm.version_name) {
//                 await CarData.updateOne({ brand: "Hyundai", model_name: item.model_name, version_name: item.version_name }, { $set: { uid: item.uid } })
//             }
//         })
//     })

// })


router.post("/delete_image", (req, res) => {
    // var ImageKit = require("imagekit");

    var imagekit = new ImageKit({
        publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
        privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
        urlEndpoint: "https://ik.imagekit.io/GORP"
    });


    imagekit.listFiles({
        path: req.body.path,
        name: req.body.name,
        skip: 0,
        limit: 1
    }, function (error, result) {
        if (error) console.log(error);
        else {
            imagekit.deleteFile(result[0].fileId, function (error, result) {
                if (error) console.log(error);
                else console.log(result);
            });
            // console.log(result)
        }
    });

})


router.get("/check_uid/:uid", async (req, res) => {
    let data = await CarData.findOne({ uid: req.params.uid })
    res.send(data)
})


router.get('/csv_download', async function (req, res) {

    let data = await PriceDetails.find().lean()

    const json2csvParser = new Json2csvParser({ header: true });
    const csvData = json2csvParser.parse(Object.values(data));

    fs.writeFile("exports.csv", csvData, function (error) {
        if (error) throw error;
        const file = path.resolve("./exports.csv");
        res.send({ path: file })
        fs.rmSync(path.resolve(`./city`), { recursive: true, force: true });
    });

})


router.get("/get_social", async (req, res) => {
    let data = await Social.findOne().select("facebook twitter instagram youtube -_id")
    res.send(data)
})

router.post("/updt_social", async (req, res) => {
    let data = await Social.updateOne({}, { $set: req.body })
})


router.post("/date_filter", async (req, res) => {
    let data = await PriceQuery.find({
        createdAt: {
            $gte: req.body[0].value,
            $lt: req.body[1].value
        }
    })

    res.send(data)
})


router.post("/change_about", async (req, res) => {
    let data = await About_US.updateMany({ content: req.body.content })
    res.send("Done")
})

router.get("/get_about", async (req, res) => {
    let data = await About_US.find()
    res.send(data)
})

router.post("/verification", async (req, res) => {

    let data = await Admin.findOne({ email: req.body.email })

    if (data) {
        bcrypt.compare(req.body.password, data.password, (err, result) => {
            if (result) {
                res.status(200).json(data)
            } else {
                res.status(400).json(data)
            }
        })
    } else {
        res.json(data)
    }

})


router.get("/brand_desc/:brand", async (req, res) => {
    let data = await CarData.findOne({ brand: req.params.brand }).select("brand_description -_id")
    res.send(data)
})


router.post("/updt_user", async (req, res) => {
    let item = req.body
    if (item.password) {
        bcrypt.hash(item.password, 12, async function (err, hash) {
            if (err) console.log(err)
            item.password = hash
            await Admin.updateOne({ email: item.email }, { $set: item }, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    res.json({ status: "Successfully Updated" })
                }
            }).clone().catch(function (err) { console.log(err) })
        });
    } else {
        await Admin.updateOne({ email: item.email }, { $set: item }, (err) => {
            if (err) {
                console.log(err)
            } else {
                res.json({ status: "Successfully Updated" })
            }
        }).clone().catch(function (err) { console.log(err) })
    }
})


router.get("/color_images/:brand/:model", async (req, res) => {


    var imagekit = new ImageKit({
        publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
        privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
        urlEndpoint: "https://ik.imagekit.io/GORP"
    });

    imagekit.listFiles({
        skip: 0,
        path: `/${req.params.brand}/${req.params.model}/Thumbs`
    }, function (error, result) {
        if (error) console.log(error);
        else res.send(result);
    });
})


router.get("/get_state", async (req, res) => {
    let data = await Pincode_Details.find().distinct("State")
    res.send(data)
})

router.get("/filter_state/:state/:limit", async (req, res) => {
    let data = await Pincode_Details.find({ State: req.params.state }).skip(req.params.limit).limit(20)
    res.send(data)
})

router.get("/updt_advt/:item", (req, res) => {


    var imagekit = new ImageKit({
        publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
        privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
        urlEndpoint: "https://ik.imagekit.io/GORP"
    });



    imagekit.listFiles({
        path: `/Home/${req.params.item}`,
        name: `${req.params.item}.jpg`,
        skip: 0,
        limit: 1
    }, function (error, result) {
        if (error) console.log(error);
        else {
            imagekit.deleteFile(result[0].fileId, function (error, result) {
                if (error) console.log(error);
                else console.log(result);
            });

            fs.readdirSync(`./Images/${req.params.item}`).forEach((item) => {
                const absolutePath = path.resolve(`./Images/${req.params.item}`, item);
                let file = fs.readFileSync(absolutePath)
                imagekit.upload({
                    file: file, //required
                    fileName: `${req.params.item}.jpg`,
                    folder: `/Home/${req.params.item}`,
                    useUniqueFileName: false
                }, function (error, result) {
                    if (error) console.log(error);
                    else {
                        fs.rmSync(path.resolve(`./Images/${req.params.item}`), { recursive: true, force: true });
                    };
                })
            })
        }
    });


    res.send("Done")
})

router.get("/get_home/:item", (req, res) => {
    var imagekit = new ImageKit({
        publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
        privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
        urlEndpoint: "https://ik.imagekit.io/GORP"
    });

    imagekit.listFiles({
        path: `/Home/${req.params.item}`,
        name: `${req.params.item}.jpg`,
        skip: 0,
        limit: 1
    }, (err, result) => {
        if (err) console.log(err)
        else {
            res.send(result)
        }
    })
})

router.get("/price_ver/*", async (req, res) => {
    if (req.params[0].split("/").length === 3) {
        let data = await CarData.findOne({ brand: { $regex: req.params[0].split("/")[0], $options: 'i' }, model_name: { $regex: req.params[0].split("/")[1], $options: 'i' }, version_name: { $regex: req.params[0].split("/")[2].replace("-", " "), $options: 'i' } }).select("model_id uid -_id")
        res.send(data)
    } else {
        let data = await CarData.findOne({ brand: { $regex: req.params[0].split("/")[0], $options: 'i' }, model_name: { $regex: req.params[0].split("/")[1], $options: 'i' } }).select("model_id uid -_id")
        res.send(data)
    }
})

router.get("/boom", async (req, res) => {

    // await CarData.aggregate([
    //     { $project: { model_description: "" } },
    //     { $merge: "cardatas" }
    // ])
    // res.send("Done")

    let data = await CarData.find().distinct("brand")

    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }

    data.map(async (item) => {
        let type = {}
        let dat = await CarData.find({ brand: item }).select("model_name model_id body_type -_id")
        let newData = dat.filter((value, index, self) => {
            return index === self.findIndex((t) => {
                return t.model_name == value.model_name
            })
        })
        await Promise.allSettled(newData.map((itm) => {
            if (Object.keys(type).includes(itm.body_type)) {
                type[itm.body_type] = type[itm.body_type] + 1
            } else {
                type[itm.body_type] = 1
            }
        }))

        let price = await Model_Prices.findOne({ brand: item }).select("max_price min_price -_id")


        let text = `${item} Car price in India starts in at ₹ ${price ? price.min_price === undefined ? 0 : numFormat(price.min_price) : null} and goes upto ₹ ${price ? price.max_price === undefined ? 0 : numFormat(price.max_price) : null} (ex-showroom price Mumbai). ${item} has ${newData.length} car Models in 2023 offered in India. `


        let body = "This includes"

        Object.keys(type).map((item, index) => {
            if (index == Object.keys(type).length - 1) {
                body += ` ${type[item]} ${item} cars.`
            } else {
                body += ` ${type[item]} ${item} cars,`
            }
        })




        let min = await Model_Prices.find({ brand: item }).sort({ min_price: +1 }).limit(1).select("min_price model_id -_id")
        let min_mod = await CarData.findOne({ brand: item, model_id: min[0] ? min[0].model_id : null }).select("model_name -_id")
        let max = await Model_Prices.find({ brand: item }).sort({ max_price: -1 }).limit(1).select("max_price model_id -_id")
        let max_mod = await CarData.findOne({ brand: item, model_id: max[0] ? max[0].model_id : null }).select("model_name -_id")

        let stext = ` The cheapest car model is ${item} ${min_mod ? min_mod.model_name : null} Price ₹${min[0] ? numFormat(min[0].min_price) : null} and the most expensive car model is ${item} ${max_mod ? max_mod.model_name : null} Price ₹${max[0] ? numFormat(max[0].max_price) : null} . Get OnRoad Price of all ${newData.length} ${item} Cars available in 2023, View Features, Price Breakup, Mileage, Colours, Variants Price and more at GetonRoadPrice. Below is the Price of all ${item} Car Models in India:`


        await CarData.updateMany({ brand: item }, { $set: { brand_description: text + body + stext } }, (err) => {
            if (err) console.log(err)
            else console.log("Done")
        }).clone().catch(function (err) { console.log(err) })
        // res.send("Done")
    })
})



// router.get("/lets_try", async (req, res) => {
//     let data = await Trial.find()
//     let now = await CarData.find()

//     data.map((item) => {
//         now.map(async (itm) => {
//             if (item.uid === itm.uid) {
//                 let spec = itm.Specifications
//                 let fet = itm.Features
//                 await Promise.allSettled(Object.keys(itm.Specifications).map((i) => {
//                     Object.keys(itm.Specifications[i]).map((ii) => {
//                         spec[i][ii] = item[ii]
//                     })
//                 }))
//                 await Promise.allSettled(Object.keys(itm.Features).map((i) => {
//                     Object.keys(itm.Features[i]).map((ii) => {
//                         fet[i][ii] = item[ii]
//                     })
//                 }))
//                 CarData.updateOne({ uid: item.uid }, { $set: { Specifications: spec, Features: fet } }, (err)=>{
//                     if(err){
//                         console.log(err)
//                     }else{
//                         console.log("done")
//                     }
//                 })
//             }
//         })
//     })
// })




// router.get("/lets_try", async (req, res) => {

//     let data = await CarData.find().select("uid brand model_name version_name -_id")
//     let city = await PriceDetails.find().select("Version_UID -_id")
//     let newData = city.filter((value, index, self) => {
//         return index === self.findIndex((t) => {
//             return t.Version_UID == value.Version_UID
//         })
//     })

//     data.map((item) => {
//         newData.map(async (itm) => {
//             if (item.uid === itm.Version_UID) {
//                 let data = await PriceDetails.updateMany({ Version_UID: itm.Version_UID }, {
//                     $set: {
//                         brand: item.brand,
//                         model_name: item.model_name,
//                         version_name: item.version_name
//                     }
//                 })
//             }
//         })
//     })

//     // res.send(data[0])
//     res.send("Done")


// })


// router.get("/lets_try", async (req, res) => {

//     let data = await CarData.findOne().select("Specifications Features -_id")


//     await Promise.allSettled(Object.keys(data.Features).map((item) => {
//         Object.keys(data.Features[item]).map(async (itm) => {
//             CarData.updateMany({}, { $unset: { [itm]: "" } }, (err, result) => {
//                 console.log(err, result)
//             });
//         })
//     }))



//     res.send("Done")


//     // let dta = CarData.updateMany({}, { $unset: values }).exec(async function (err, count) {
//     //     let newdt = await CarData.findOne()
//     //     res.send(newdt)
//     // });;

// })



// router.get("/let_try", async (req, res) => {
//     // await CarData.aggregate([
//     //     { $project: { price_algorithm: "" } },
//     //     { $merge: "cardatas" }
//     // ])
//     // res.send("Done")
//     var imagekit = new ImageKit({
//         publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
//         privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
//         urlEndpoint: "https://ik.imagekit.io/GORP"
//     });

//     let data = await CarData.find().distinct("brand")

//     function numFormat(value) {
//         const val = Math.abs(value)
//         if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
//         if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
//         return value;
//     }

//     data.map(async (item) => {
//         let dat = await CarData.find({ brand: item }).distinct("model_name")

//         dat.map(async (itm) => {
//             let newDat = await CarData.find({ brand: item, model_name: itm }).select("version_name body_type seating_capacity Specifications model_id -_id")



//             newDat.map(async (itmm) => {
//                 let mod_min_price = await Model_Prices.findOne({ model_id: itmm.model_id }).sort({ min_price: +1 })
//                 let mod_max_price = await Model_Prices.findOne({ model_id: itmm.model_id }).sort({ max_price: -1 })

//                 let ver_min_price = await Version_Prices.findOne({ model_id: itmm.model_id, carname: itm }).sort({ min_price: +1 })
//                 let ver_max_price = await Version_Prices.findOne({ model_id: itmm.model_id, carname: itm }).sort({ max_price: -1 })

//                 let fuel_type_min = await CarData.findOne({ brand: item, model_name: itm, version_name: ver_min_price ? ver_min_price.version_name : null }).select("Specifications -_id")

//                 let fuel_type_max = await CarData.findOne({ brand: item, model_name: itm, version_name: ver_max_price ? ver_max_price.version_name : null }).select("Specifications -_id")

//                 let trans = await CarData.find({ brand: item, model_name: itm }).distinct("transmission_type")

//                 let fuel_types = await CarData.find({ brand: item, model_name: itm }).distinct("Specifications.engine_and_transmission.fuel_type")




//                 let text = `<p>${item} ${itm} price starts at ₹ ${numFormat(mod_min_price ? mod_min_price.min_price : null)} and goes upto ₹ ${numFormat(mod_max_price ? mod_max_price.max_price : null)} (ex-showroom price Mumbai). ${newDat.length} variants of 
//                                 ${item} ${itm} are offered in India. ${itm} price for base model ${item} ${itm} ${ver_min_price ? ver_min_price.version_name : null} ${fuel_type_min ? fuel_type_min.Specifications.engine_and_transmission.fuel_type : null} is ₹ ${numFormat(ver_min_price ? ver_min_price.min_price : null)} and price for top model ${item} ${itm} ${ver_max_price ? ver_max_price.version_name : null} ${fuel_type_max ? fuel_type_max.Specifications.engine_and_transmission.fuel_type : null} is ₹ ${numFormat(ver_max_price ? ver_max_price.max_price : null)}</p> <br /> <p>${item} ${itm} <b>Key Specifications :</b> ${item} ${itm} is a ${itmm.seating_capacity} seater ${itmm.body_type} available in ${trans.map((ele, index) => {
//                     return trans.length - 1 === index ? ele + "," : ele
//                 })} transmission with option of 6 colours</p><br/><p><b>Fuel Type :</b> ${item} ${itm} is available in ${fuel_types.map((ele, index) => {
//                     return fuel_types.length - 1 === index ? ele + "," : ele
//                 })}</p>`


//                 await CarData.updateOne({ brand: item, model_name: itm, version_name: itmm.version_name }, { $set: { model_description: text } }, (err) => {
//                     if (err) console.log(err)
//                     else console.log("done")
//                 }).clone().catch(function (err) { console.log(err) })

//                 // imagekit.listFiles({
//                 //     skip: 0,
//                 //     path: `/${req.params.brand}/${req.params.model}/Thumbs`
//                 // }, async function (error, result) {
//                 //     if (error) console.log(error);
//                 //     else {
//                 //         console.log(item, itm)

//                 //     }
//                 // });
//                 // await CarData.updateOne({ brand: item, model_name: itm, version_name: itmm.version_name }, { $set: { model_description: text } })

//             })
//         })
//     })

//     // res.send("done")
// })



// router.get("/let_try", async (req, res) => {

//     // await CarData.aggregate([
//     //     { $project: { color_algorithm: "" } },
//     //     { $merge: "cardatas" }
//     // ])
//     // res.send("Done")
//     var imagekit = new ImageKit({
//         publicKey: "public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q=",
//         privateKey: "private_gnukSa/kGIs8Oogw8Kn56LnFw7g=",
//         urlEndpoint: "https://ik.imagekit.io/GORP"
//     });


//     let data = await CarData.find().distinct("brand")


//     data.map(async (item) => {
//         let carData = await CarData.find({ brand: item }).distinct("model_name")


//         let c = 0

//         let loop = setInterval(() => {



//             if (c < carData.length) {
//                 imagekit.listFiles({
//                     skip: 0,
//                     path: `/${item}/${carData[c]}/Thumbs`
//                 }, async function (error, result) {
//                     if (error) console.log(error);
//                     else {
//                         if (result) {
//                             let text = `${item} ${carData[c]} offers a choice ${result.length} different colours to choose from in India. These colours include ${result.map((ele) => {

//                                 return ele.name.split("_")[1]
//                             })}. View all car images with different colour options on GetOnRoadPrice.`


//                             // console.log(text)

//                             await CarData.updateMany({ brand: item, model_name: carData[c] }, { $set: { color_algorithm: text } }, (err) => {
//                                 if (err) console.log(err)
//                                 else console.log(text)
//                             }).clone().catch(function (err) { console.log(err) })
//                         }
//                     }
//                 })
//                 c += 1
//             } else if (c == carData.length) {
//                 clearInterval(loop)
//             }






//         }, 1000)
//     })
// })

// router.get("/let_try", async (req, res) => {
//     // await CarData.aggregate([
//     //     { $project: { varient_description: "" } },
//     //     { $merge: "cardatas" }
//     // ])
//     // res.send("done")

//     function numFormat(value) {
//         const val = Math.abs(value)
//         if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
//         if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
//         return value;
//     }

//     let day = new Date().getFullYear()

//     let data = await CarData.find().distinct("brand")

//     data.map(async (brand) => {
//         let modData = await CarData.find({ brand: brand }).distinct("model_name")

//         modData.map(async (model) => {
//             let verData = await CarData.find({ brand: brand, model_name: model }).select("version_name seating_capacity transmission_type Specifications body_type uid")


//             verData.map(async (item) => {

//                 let price = await PriceDetails.findOne({ Version_UID: item.uid, city_name: "New Delhi" })



//                 if (price) {

//                     let text = `${brand} ${model} ${item.version_name} ${day} is priced at ₹ ${price ? numFormat(price.ex_showroom_price) : null} Ex-showroom Price Mumbai. ${brand} ${model} ${item.version_name} is a ${item.Specifications ? item.Specifications.engine_and_transmission.fuel_type : null} 
//                     ${item.transmission_type} transmission, powered by a ${item.Specifications ? item.Specifications.engine_and_transmission.displacement : null} cc engine, ${item.seating_capacity} seater ${item.body_type} car.`


//                     CarData.updateOne({ brand: brand, model_name: model, version_name: item.version_name }, { $set: { varient_description: text } }, (err) => {
//                         if (err) console.log(err)
//                         else console.log(text)
//                     }).clone().catch(function (err) { console.log(err) })
//                 }

//             })
//         })
//     })

// })



// router.get("/let_try", async (req, res) => {

//     // await CarData.aggregate([
//     //     { $project: { mileage_algorithm: "" } },
//     //     { $merge: "cardatas" }
//     // ])
//     // res.send("Done")
//     let data = await CarData.find().distinct("brand")

//     data.map(async (item) => {
//         let dat = await CarData.find({ brand: item }).select("model_id model_name -_id")

//         let newData = dat.filter((value, index, self) => {
//             return index === self.findIndex((t) => {
//                 return t.model_name == value.model_name
//             })
//         })

//         newData.map(async (itm) => {
//             let milage = await Model_Prices.findOne({ model_id: itm.model_id, brand: item })

//             if (milage) {
//                 let text = `${item} ${itm.model_name} mileage claimed by ARAI is ${milage.min_mileage} to ${milage.max_mileage} kmpl. View mileage of${item} ${itm.model_name} car below:`

//                 await CarData.updateMany({ brand: item, model_name: itm.model_name }, { $set: { mileage_algorithm: text } }, (err) => {
//                     if (err) console.log(err)
//                     else console.log(text)
//                 }).clone().catch(function (err) { console.log(err) })
//             }

//         })
//     })
// })






// router.get("/lets_try", async (req, res) => {

// let data = await Model_Prices.updateMany({}, { $set: { "youtube": [] } })
// await Model_Prices.aggregate([
//     { $project: { youtube: [] } },
//     { $merge: "model_price_ranges" }
// ])

// res.send("done")

// //     res.send("done")
// // //     let data = await CarData.find()

// // //     // data.forEach(async (item) => {
// // //     //     let allData = {}

// // //     //     allData["engine_and_transmission"] = {
// // //     //         bore_x_stroke: item.toObject()["bore_x_stroke"],
// // //     //         zero_onehundred_kmph: item.toObject()["zero_onehundred_kmph"],
// // //     //         charging_time_a_c: item.toObject()["charging_time_a_c"],
// // //     //         charging_time_d_c: item.toObject()["charging_time_d_c"],
// // //     //         emission_control_system: item.toObject()["emission_control_system"],
// // //     //         emission_norm_compliance: item.toObject()["emission_norm_compliance"],
// // //     //         cng_highway_mileage: item.toObject()["cng_highway_mileage"],
// // //     //         cng_mileage_arai: item.toObject()["cng_mileage_arai"],
// // //     //         diesel_highway_mileage: item.toObject()["diesel_highway_mileage"],
// // //     //         diesel_mileage_arai: item.toObject()["diesel_mileage_arai"],
// // //     //         diesel_overall_mileage: item.toObject()["diesel_overall_mileage"],
// // //     //         engine_check_warning: item.toObject()["engine_check_warning "],
// // //     //         mild_hybrid: item.toObject()["mild_hybrid"],
// // //     //         motor_type: item.toObject()["motor_type"],
// // //     //         petrol_city_mileage: item.toObject()["petrol_city_mileage"],
// // //     //         petrol_highway_mileage: item.toObject()["petrol_highway_mileage"],
// // //     //         battery_capacity: item.toObject()["battery_capacity"],
// // //     //         battery_type: item.toObject()["battery_type"],
// // //     //         battery_warranty: item.toObject()["battery_warranty"],
// // //     //         charging_time: item.toObject()["charging_time"],
// // //     //         clutchtype: item.toObject()["clutchtype"],
// // //     //         compression_ratio: item.toObject()["compression_ratio"],
// // //     //         displacement: item.toObject()["displacement"],
// // //     //         drive_modes: item.toObject()["drive_modes"],
// // //     //         engine_type: item.toObject()["engine_type"],
// // //     //         fuel_system: item.toObject()["fuel_system"],
// // //     //         fuel_type: item.toObject()["fuel_type"],
// // //     //         arai_mileage: item.toObject()["arai_mileage"],
// // //     //         city_mileage: item.toObject()["city_mileage"],
// // //     //         turbocharger: item.toObject()["turbocharger"]
// // //     //     }

// // //     //     allData["dimension_and_weight"] = {
// // //     //         height: item.toObject()["height"],
// // //     //         kerb_weight: item.toObject()["kerb_weight"],
// // //     //         length: item.toObject()["length"],
// // //     //         drag_coefficient: item.toObject()["drag_coefficient"],
// // //     //         wheelbase: item.toObject()["wheelbase"],
// // //     //         width: item.toObject()["width"]
// // //     //     }

// // //     //     allData["capacity"] = {
// // //     //         boot_space_Litres: item.toObject()["boot_space_Litres"],
// // //     //         fuel_tank_capacity: item.toObject()["fuel_tank_capacity"],
// // //     //         cng_fuel_tank_capacity_litres: item.toObject()["cng_fuel_tank_capacity_litres"],
// // //     //         diesel_fuel_tank_capacity_litres: item.toObject()["diesel_fuel_tank_capacity_litres"],
// // //     //         range: item.toObject()["range"],
// // //     //         secondary_fuel_type: item.toObject()["secondary_fuel_type"]
// // //     //     }

// // //     //     allData["oth_spec"] = {
// // //     //         front_brake_type: item.toObject()["front_brake_type"],
// // //     //         front_suspension: item.toObject()["front_suspension"],
// // //     //         city_driveability_twenty_eighty_kmph: item.toObject()["city_driveability_twenty_eighty_kmph"],
// // //     //         shock_absorbers_type: item.toObject()["shock_absorbers_type"],
// // //     //         steering_column: item.toObject()["steering_column"],
// // //     //         steering_gear_type: item.toObject()["steering_gear_type"],
// // //     //         steering_wheel_gearshift_paddles: item.toObject()["steering_wheel_gearshift_paddles"],
// // //     //         turning_radius_metres: item.toObject()["turning_radius_metres"]
// // //     //     }

// // //     //     let dat = await CarData.updateMany({
// // //     //         $set: {
// // //     //             Specifications: allData
// // //     //         }
// // //     //     })
// // //     // })

// // //     data.forEach(async (item) => {
// // //         let allData = {}

// // //         allData["safety"] = {
// // //             no_of_airbags: item.toObject()["no_of_airbags"],
// // //             blind_spot_monitor: item.toObject()["blind_spot_monitor"],
// // //             advance_safety_features: item.toObject()["advance_safety_features"],
// // //             anti_theft_device: item.toObject()["anti_theft_device"],
// // //             centrally_mounted_fuel_tank: item.toObject()["centrally_mounted_fuel_tank"],
// // //             clutch_lock: item.toObject()["clutch_lock"],
// // //             clutchtype: item.toObject()["clutchtype"],
// // //             crash_sensor: item.toObject()["crash_sensor"],
// // //             driver_airbag: item.toObject()["driver_airbag"],
// // //             passenger_airbag: item.toObject()["passenger_airbag"],
// // //             power_door_locks: item.toObject()["power_door_locks"],
// // //             rear_camera: item.toObject()["rear_camera"],
// // //             side_impact_beams: item.toObject()["side_impact_beams"],
// // //             sos_emergency_assistance: item.toObject()["sos_emergency_assistance"],
// // //             speed_alert: item.toObject()["speed_alert"],
// // //             vehicle_stability_control_system: item.toObject()["vehicle_stability_control_system"]
// // })

// // //         allData["break_and_traction"] = {
// // //             anti_lock_braking_system: item.toObject()["anti_lock_braking_system"],
// // //             braking_onehundred_zero_kmph: item.toObject()["braking_onehundred_zero_kmph"],
// // //             braking_sixty_zero_kmph: item.toObject()["braking_sixty_zero_kmph"],
// // //             braking_eighty_zero_kmph: item.toObject()["braking_eighty_zero_kmph"],
// // //             brake_assist_ba: item.toObject()["brake_assist_ba"],
// // //             ebd: item.toObject()["ebd"],
// // //             hill_descent_control: item.toObject()["hill_descent_control"]
// // //         }

// // //         allData["locs_and_security"] = {
// // //             anti_theft_alarm: item.toObject()["anti_theft_alarm"],
// // //             central_locking: item.toObject()["central_locking"],
// // //             child_safety_lock: item.toObject()["child_safety_lock"],
// // //             engine_immobilizer: item.toObject()["engine_immobilizer"],
// // //             impact_sensing_auto_door_unlocking: item.toObject()["impact_sensing_auto_door_unlocking"]
// // //         }

// // //         allData["comfort_and_convenience"] = {
// // //             air_conditioner: item.toObject()["air_conditioner"],
// // //             accessory_power_outlet: item.toObject()["accessory_power_outlet"],
// // //             additional_features: item.toObject()["additional_features"],
// // //             air_quality_control: item.toObject()["air_quality_control"],
// // //             automatic_climate_control: item.toObject()["automatic_climate_control"],
// // //             battery_saver: item.toObject()["battery_saver"],
// // //             central_console_armrest: item.toObject()["central_console_armrest"],
// // //             cup_holders_front: item.toObject()["cup_holders_front"],
// // //             cup_holders_rear: item.toObject()["cup_holders_rear"],
// // //             electronic_multi_tripmeter: item.toObject()["electronic_multi_tripmeter"],
// // //             electronic_stability_control: item.toObject()["electronic_stability_control"],
// // //             navigation_system: item.toObject()["navigation_system"],
// // //             power_boot: item.toObject()["power_boot"],
// // //             quarter_mile: item.toObject()["quarter_mile"],
// // //             rear_ac_vents: item.toObject()["rear_ac_vents"],
// // //             remote_engine_start_stop: item.toObject()["remote_engine_start_stop"],
// // //             remote_fuel_lid_opener: item.toObject()["remote_fuel_lid_opener"],
// // //             remote_fuel_lid_opener: item.toObject()["remote_trunk_opener"],
// // //             removable_convertible_top: item.toObject()["removable_convertible_top"],
// // //             smart_access_card_entry: item.toObject()["smart_access_card_entry"],
// // //             smart_key_band: item.toObject()["smart_key_band"],
// // //             tailgate_ajar: item.toObject()["tailgate_ajar"],
// // //             usb_charger: item.toObject()["usb_charger"],
// // //             vanity_mirror: item.toObject()["vanity_mirror"],
// // //             cd_changer: item.toObject()["cd_changer"],
// // //             cigarette_lighter: item.toObject()["cigarette_lighter"],
// // //             cruise_control: item.toObject()["cruise_control"],
// // //             adjustable_steering: item.toObject()["adjustable_steering"]
// // //         }


// // //         allData["telematics"] = {
// // //             find_my_car: item.toObject()["find_my_car"],
// // //             geo_fence: item.toObject()["geo_fence"],
// // //         }

// // //         allData["seats_and_upholestary"] = {
// // //             adjustable_head_rests: item.toObject()["adjustable_head_rests"],
// // //             adjustable_seats: item.toObject()["adjustable_seats"],
// // //             electric_adjustable_seats: item.toObject()["electric_adjustable_seats"],
// // //             power_folding_thrid_row_seat: item.toObject()["power_folding_thrid_row_seat"],
// // //             rear_seat_centre_arm_rest: item.toObject()["rear_seat_centre_arm_rest"],
// // //             rear_seat_headrest: item.toObject()["rear_seat_headrest"],
// // //             seat_lumbar_support: item.toObject()["seat_lumbar_support"],
// // //             driver_height_adjustable_seat: item.toObject()["driver_height_adjustable_seat"],
// // //             folding_rear_seat: item.toObject()["folding_rear_seat"],
// // //             leather_wrapped_steering_wheel: item.toObject()["leather_wrapped_steering_wheel"],
// // //         }

// // //         allData["storage"] = {
// // //             glove_box_cooling: item.toObject()["glove_box_cooling"]
// // //         }

// // //         allData["doors_and_others"] = {
// // //             tinted_glass: item.toObject()["tinted_glass"],
// // //             headlamp_washers: item.toObject()["headlamp_washers"],
// // //             anti_pinch_power_windows: item.toObject()["anti_pinch_power_windows"],
// // //             day_night_rear_view_mirror: item.toObject()["day_night_rear_view_mirror"],
// // //             no_of_doors: item.toObject()["no_of_doors"],
// // //             outside_rear_view_mirror_turn_indicators: item.toObject()["outside_rear_view_mirror_turn_indicators"],
// // //             passenger_side_rear_view_mirror: item.toObject()["passenger_side_rear_view_mirror"],
// // //             power_adjustable_exterior_rear_view_mirror: item.toObject()["power_adjustable_exterior_rear_view_mirror"],
// // //             power_windows_front: item.toObject()["power_windows_front"],
// // //             power_windows_rear: item.toObject()["power_windows_rear"],
// // //             rear_window_washer: item.toObject()["rear_window_washer"],
// // //             rear_window_wiper: item.toObject()["rear_window_wiper"],
// // //         }


// // //         allData["interior"] = {
// // //             digital_clock: item.toObject()["digital_clock"],
// // //             digital_odometer: item.toObject()["digital_odometer"],
// // //             driving_experience_control_eco: item.toObject()["driving_experience_control_eco"],
// // //             dual_tone_dashboard: item.toObject()["dual_tone_dashboard"],
// // //             electric_folding_rear_view_mirror: item.toObject()["electric_folding_rear_view_mirror"],
// // //             outside_temperature_display: item.toObject()["outside_temperature_display"],
// // //             rear_shoulder_room: item.toObject()["rear_shoulder_room"]
// // //         }

// // //         allData["exterior"] = {
// // //             chrome_garnish: item.toObject()["chrome_garnish"],
// // //             chrome_grille: item.toObject()["chrome_grille"],
// // //             dual_tone_body_colour: item.toObject()["dual_tone_body_colour"],
// // //             roof_carrier: item.toObject()["roof_carrier"],
// // //             side_stepper: item.toObject()["side_stepper"],
// // //             smoke_headlamps: item.toObject()["smoke_headlamps"],
// // //             tinted_glass: item.toObject()["tinted_glass"],
// // //             trunk_opener: item.toObject()["trunk_opener"]
// // //         }

// // //         allData["entertainment_and_others"] = {
// // //             radio: item.toObject()["radio"],
// // //             apple_car_play: item.toObject()["apple_car_play"],
// // //             active_noise_cancellation: item.toObject()["active_noise_cancellation"],
// // //             android_auto: item.toObject()["android_auto"],
// // //             audio_system_remote_control: item.toObject()["audio_system_remote_control"],
// // //             cd_changer: item.toObject()["cd_changer"],
// // //             cd_player: item.toObject()["cd_player"],
// // //             compass: item.toObject()["compass"],
// // //             mirror_link: item.toObject()["mirror_link"],
// // //             connectivity: item.toObject()["connectivity"],
// // //             no_of_speakers: item.toObject()["no_of_speakers"],
// // //             power_antenna: item.toObject()["power_antenna"],
// // //             radio: item.toObject()["radio"],
// // //             rear_entertainment_system: item.toObject()["rear_entertainment_system"],
// // //             speakers_front: item.toObject()["speakers_front"],
// // //             speakers_rear: item.toObject()["speakers_rear"],
// // //             touch_screen: item.toObject()["touch_screen"],
// // //             bluetooth_compatibility: item.toObject()["bluetooth_compatibility"],
// // //             cd_player: item.toObject()["cd_player"],
// // //             dvd_playback: item.toObject()["dvd_playback"]
// // //         }

// // //         allData["instrumentation"] = {
// // //             door_ajar_warning: item.toObject()["door_ajar_warning"],
// // //             low_fuel_warning_light: item.toObject()["low_fuel_warning_light"],
// // //             gear_shift_indicator: item.toObject()["gear_shift_indicator"]
// // //         }

// // //         allData["lighting"] = {
// // //             automatic_head_lamps: item.toObject()["automatic_head_lamps"],
// // //             adjustable_headlights: item.toObject()["adjustable_headlights"],
// // //             cornering_foglamps: item.toObject()["cornering_foglamps"],
// // //             trunk_light: item.toObject()["trunk_light"],
// // //             cornering_headlights: item.toObject()["cornering_headlights"],
// // //             follow_me_home_headlamps: item.toObject()["follow_me_home_headlamps"],
// // //             front_fog_lights: item.toObject()["front_fog_lights"],
// // //             led_tail_lamps: item.toObject()["led_tail_lamps"],
// // //             xenon_headlights: item.toObject()["xenon_headlights"]
// // //         }

// // //         allData["third_row"] = {
// // //             rear_seat_headrest: item.toObject()["rear_seat_headrest"],
// // //             seat_lumbar_support: item.toObject()["seat_lumbar_support"],
// // //             adjustable_seats: item.toObject()["adjustable_seats"],
// // //         }

// // //         allData["wheels_and_tyres"] = {
// // //             alloy_wheels: item.toObject()["alloy_wheels"],
// // //             alloy_wheel_size: item.toObject()["alloy_wheel_size"],
// // //             tyre_size: item.toObject()["tyre_size"],
// // //             tyre_type: item.toObject()["tyre_type"],
// // //             varwheel_covers: item.toObject()["wheel_covers"],
// // //             wheel_size: item.toObject()["wheel_size"],
// // //         }




// // //         let dat = await CarData.updateMany({
// // //             $set: {
// // //                 Features: allData
// // //             }
// // //         })
// // //     })







// // //     res.send("Done")
// })









module.exports = router;