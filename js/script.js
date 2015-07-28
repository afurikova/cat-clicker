$().ready (function() {
    console.log("DOM fully loaded and parsed");
    var initialCats = [
        {
            "name" : "Ben",
            "src" : "http://placekitten.com/g/500/450",
            "clicks": 0,
            "nicknames": ["Benny", "Bubu"]
        },

        {
            "name" : "Dianette",
            "src" : "http://placekitten.com/g/500/300",
            "clicks": 0,
            "nicknames": ["Dian", "Litle Bitch"]
        },

        {
            "name" : "Micinka",
            "src" : "http://placekitten.com/g/500/350",
            "clicks": 0,
            "nicknames": ["Mici"]
        },

        {
            "name" : "Simon",
            "src" : "http://placekitten.com/g/500/400",
            "clicks": 0,
            "nicknames": ["Sisi", "Cat"]
        },

        {
            "name" : "Pedro",
            "src" : "http://placekitten.com/g/500/420",
            "clicks": 0,
            "nicknames": ["Pepik"]
        },
    ]

    var Cat = function (data) {
        this.name = ko.observable(data.name);
        this.img = ko.observable(data.src);
        this.clicks = ko.observable(data.clicks);
        this.nicknames = ko.observableArray(data.nicknames);

        this.level = ko.computed(function () {
            if (this.clicks() < 5) {
                return "newborn";
            } else if (this.clicks() < 15) {
                return "child";
            }else if (this.clicks() < 32) {
                return "teen";
            }else if (this.clicks() < 51) {
                return "young(wo)man";
            } else if (this.clicks() < 74) {
                return "adult";
            } else if (this.clicks() < 99) {
                return "old";
            } else {
                return "nearly dead";
            }          
        }, this);
        
    }

    var ViewModel = function () {
        var self = this;
        // self.adminMode = ko.observable(false);
        self.catList = [];
        //console.log(catList)
        initialCats.forEach(function(catItem){
            self.catList.push(new Cat(catItem));
        });
        //console.log(catList)
        self.currentCat = ko.observable(self.catList[0]);

        self.incrementCounter = function () {
            //console.log(this.clicks())
            this.clicks(this.clicks() + 1);
            // this.currentCat().clicks(this.currentCat().clicks() + 1);
        };
        self.changeCurrentCat = function (cat) {
            //console.log(cat.name())
            self.currentCat(cat);
        };
        // when click on Admin button, render a form to change data about current cat
    
        self.saveData = function (e) {
            console.log("data saved");
        }

        self.disableAdminMode = function () {
            $(".admin").addClass("disable");
        }
        self.enableAdminMode = function () {
            $(".admin").removeClass("disable");
            // self.adminMode(true);
        }
    };

    ko.applyBindings(new ViewModel());
});