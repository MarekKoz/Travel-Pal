const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const URLSlugs = require('mongoose-url-slugs');

// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/NOTproductionFINAL';
}

//passport auth.
const UserSchema = new mongoose.Schema({ });
UserSchema.plugin(passportLocalMongoose);

//Schema for destination added
const ArticleSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String},
    description: {type: String},
    userID: String,
});
ArticleSchema.plugin(URLSlugs('title', {field: 'slug'}));

//Schema for finances related to destinations
const FinancesSchema = new mongoose.Schema({
    title: {type: String},
    hotelMoney: {type: Number},
    foodMoney: {type: Number},
    attractionMoney: {type: Number},
    userID: String,
});
FinancesSchema.plugin(URLSlugs('title', {field: 'slug'}));

//Schema for packing related to destinations
const PackingSchema = new mongoose.Schema({
    title: {type: String},
    amountShirts: {type: Number},
    amountPants: {type: Number},
    amountSocks: {type: Number},
    amountUnderwear: {type: Number},
    userID: String,
});
PackingSchema.plugin(URLSlugs('title', {field: 'slug'}));


mongoose.model('User', UserSchema);
mongoose.model('Article', ArticleSchema);
mongoose.model('Money', FinancesSchema);
mongoose.model('Packing', PackingSchema);

mongoose.connect(dbconf);

