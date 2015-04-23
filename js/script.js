$().ready (function() {
    console.log("DOM fully loaded and parsed");

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



    var ViewModel = function () {
        this.name = ko.observable("Ben");
        this.img = ko.observable("http://placekitten.com/g/500/450");
        this.level = ko.observable("Newborn")
        this.clicks = ko.observable(0);
http://placekitten.com/g/500/450
        this.incrementCounter = function () {
            this.clicks(this.clicks() + 1);
            if(this.clicks() >= 5) {
                this.level("Teenaged")
            }
            if(this.clicks() >= 10) {
                this.level("Adult")
            }
            if(this.clicks() >= 15) {
                this.level("Nearly dead")
            }

        };
    }

    ko.applyBindings(new ViewModel());

 });