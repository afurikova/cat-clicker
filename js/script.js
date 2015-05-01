$().ready (function() {
    console.log("DOM fully loaded and parsed");
var initialCats = [
    {
        "name" : "Ben",
        "src" : "http://placekitten.com/g/500/450",
        "clicks": 0,
        "nicknames": ["Benik", "Bubak"]
    },

    {
        "name" : "Dianette",
        "src" : "http://placekitten.com/g/500/300",
        "clicks": 0,
        "nicknames": ["Dian", "Kocka"]
    },

    {
        "name" : "Micinka",
        "src" : "http://placekitten.com/g/500/350",
        "clicks": 0,
        "nicknames": ["Benik", "Bubak"]
    },

    {
        "name" : "Simon",
        "src" : "http://placekitten.com/g/500/400",
        "clicks": 0,
        "nicknames": ["Benik", "Bubak"]
    },

    {
        "name" : "Pedro",
        "src" : "http://placekitten.com/g/500/420",
        "clicks": 0,
        "nicknames": ["Benik", "Bubak"]
    },
]

//     var myViewModel = {
//         name: ko.observable("ben"),
//         img: ko.observable("http://placekitten.com/g/500/450"),
//         clicks: ko.observable(0),
//         incrementCounter: function () {
//             console.log("click")
//             this.clicks(this.clicks() + 1);
//         }
// };
// ko.applyBindings(myViewModel);

    var Cat = function (data) {
        this.name = ko.observable(data.name);
        this.img = ko.observable(data.src);
        this.clicks = ko.observable(data.clicks);
        this.nicknames = ko.observableArray(data.nicknames);

        this.level = ko.computed(function () {
            if (this.clicks() < 5) {
                return "Newborn"
            } else if (this.clicks() < 10) {
                return "Clid"
            } else if (this.clicks() < 15) {
                return "Teen"
            } else if (this.clicks() < 20) {
                return "Adult"
            } else {
                return "Nearly dead"
            }          
        }, this);
        
    }

    var ViewModel = function () {
        var self = this;
        self.catList = [];
        //console.log(catList)
        initialCats.forEach(function(catItem){
            self.catList.push(new Cat(catItem))
        })
        //console.log(catList)
        self.currentCat = ko.observable(self.catList[0]);

        this.incrementCounter = function () {
            //console.log(this.clicks())
            this.clicks(this.clicks() + 1)
            // this.currentCat().clicks(this.currentCat().clicks() + 1);
        };
        this.changeCurrentCat = function (cat) {
            //console.log(cat.name())
            self.currentCat(cat)
        }
    }

    ko.applyBindings(new ViewModel());

 });