const express = require("express"); 
const multer = require("multer"); 

const PORT = process.env.PORT || 8000; // set port
const Controller = require("./controller/carsController"); 
const app = express(); 
const path = require("path"); 
const bodyParser = require("body-parser");
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "./uploads")); 
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

app.set("view engine", "ejs"); 
app.use(express.json()); 
app.use(express.static("public"));
app.use(express.static("uploads")); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

// Client Side
app.get("/", Controller.homepageView); 
app.get("/create-car", Controller.inputView); 
app.get("/edit-car/:id", Controller.editView);
app.get("/:id", Controller.filterResult);
app.post("/search", Controller.searchResult);
// END Client Side

/* Server Side (API) */
app.post("/api/v1/Cars", multer({storage: diskStorage}).single("image_car"), Controller.createCar);
app.get("/api/v1/Cars", Controller.getCars);
app.get("/api/v1/FilterCars/:id", Controller.filterAPI);
app.get("/api/v1/SearchCars/:search", Controller.searchAPI);
app.get("/api/v1/Cars/:id", Controller.getCar);
app.post("/api/v1/Cars/:id", multer({storage: diskStorage}).single("image_car"), Controller.updateCar);
app.get("/api/v1/deleteCars/:id", Controller.deleteCar);
app.post("/api/v1/Type_Cars", Controller.createTypeCar);
// END API

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
