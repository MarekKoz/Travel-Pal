//requirements needed
const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Article  = mongoose.model("Article");
const Money = mongoose.model("Money");
const Packing = mongoose.model("Packing");

//Router's homepage
router.get('/', (req, res) => {
    res.render("index");
});


//Router's logout button
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

//Router's login page
router.get('/login', (req, res) => {
    res.render("login");
});

//Router's register page
router.get('/register', (req, res) => {
    res.render("register");
});

//Router's post register 
router.post('/register', function(req, res) {
    User.register(new User({username:req.body.username}), 
    req.body.password, function(err, user){
        if (err) {
            res.render('register',{message: err.message});
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/');
            });
        }
    });   
});

//Router's post login
router.post('/login', function(req,res,next) {
    passport.authenticate('local', function(err,user) {
        if(user) {
            req.logIn(user, function(err) {
                res.redirect('/');
            });
        } else {
            res.render('login', {message:'Your login or password is incorrect.'});
        }
    })(req, res, next);
});

//------------------------------------------ DESTINATIONS
//Router's add a destination page
router.get('/article/add', (req, res) => {
    if(!req.user){
        res.redirect("/login");
    } else{
        res.render("article-add");
    }
});

//Router's post a destinations page
router.post('/article/add', (req, res) => {
    if(!req.user){
        res.redirect("/login");
    } else {
        new Article ({
            title: req.body.title,
            description: req.body.description,
            userID: req.user.username,
            url: req.body.url,
        }).save((saveError) => {
            if(!saveError){
                res.redirect("/");
            } else {
                res.render("article-add", {"message": "Could not add Article!!!"});
            }
        });
    }
});

//Show articles added 
router.get("/article/show", (req, res) => {
    Article.find((err, articles, count) => {
        res.render("index", {"articles": articles});
    });
})

//Router's slugs page after a destination has been added
router.get('/article/:slug', (req, res) => {
    Article.findOne({slug: req.params.slug}, (err, article) => {
        res.render('article-detail', {'detail': article});
    });
});

//------------------------------------------- FINANCE 

//Router's page to add finances
router.get('/finance/add', (req, res) => {
    if(!req.user){
        res.redirect("/login");
    } else{
        res.render("finance-add");
    }
});

//Router's page after submitting finances
router.post('/finance/add', (req, res) => {
    if(!req.user){
        res.redirect("/login");
    } else {
        new Money ({
            title: req.body.title,
            hotelMoney: req.body.hotelMoney,
            foodMoney: req.body.foodMoney,
            attractionMoney: req.body.attractionMoney,
            userID: req.user.username,
        }).save((saveError) => {
            if(!saveError){
                res.redirect("/");
            } else {
                res.render("finance-add", {"message": "Could Not Add Finance Goals!!!"});
            }
        });
    }
});

//Router's show finance 
router.get("/finance/show", (req, res) => {
    Money.find((err, money, count) => {
        res.render("moneyIndex", {"money": money});
    });
})

//Router's show finance details page
router.get('/finance/:slug', (req, res) => {
    Money.findOne({slug: req.params.slug}, (err, money) => {
        res.render('finance-detail', {'detail': money});
    });
});

//---------------------------------------------- PACKING
//Router's page to add packing
router.get('/packing/add', (req, res) => {
    if(!req.user){
        res.redirect("/login");
    } else{
        res.render("packing-add");
    }
});

//Router's page after submitting packing
router.post('/packing/add', (req, res) => {
    if(!req.user){
        res.redirect("/login");
    } else {
        new Packing ({
            title: req.body.title,
            amountShirts: req.body.amountShirts,
            amountPants: req.body.amountPants,
            amountSocks: req.body.amountSocks,
            amountUnderwear: req.body.amountUnderwear,
            userID: req.user.username,
        }).save((saveError) => {
            if(!saveError){
                res.redirect("/");
            } else {
                res.render("packing-add", {"message": "Could Not Add Packing Plan!!!"});
            }
        });
    }
});

//Router's show packing 
router.get("/packing/show", (req, res) => {
    Packing.find((err, packing, count) => {
        res.render("packingIndex", {"packing": packing});
    });
})

//Router's show packing details page
router.get('/packing/:slug', (req, res) => {
    Packing.findOne({slug: req.params.slug}, (err, packing) => {
        res.render('packing-detail', {'detail': packing});
    });
});



module.exports = router;