function process_form() {
    // get form object
    var fm = document.getElementById("my_form");
    // get output object
    var out = document.getElementById("display");
    // instantiate  object
    var dog = new Dog(fm);
    // output result
    out.innerHTML = dog.sort();
}

function Dog(fm) {
    // constructor
    this.input_exp = fm.input_exp.value;
    this.input_home = fm.input_home.value;
    this.input_kid = fm.input_kid.value;
}

this.sort = function () {
    // sort result based on input
    if (this.input_exp.new && this.input_home.ap && this.input_kid.yes) {
        return de1; // new, apartment, kids
    } else if  (this.input_exp.new && this.input_home.ap && this.input_kid.no) {
        return "de2"; // new, apartment,  no kids
    } else if  (this.input_exp.new && this.input_home.hsy && this.input_kid.yes) {
        return "de3"; // new, house small yard, kids
    } else if  (this.input_exp.new && this.input_home.hsy && this.input_kid.no) {
        return "de4"; // new, house small yard, no kids
    } else if  (this.input_exp.new && this.input_home.hly && this.input_kid.yes) {
        return "de5"; // new, house large yard, kids
    } else if  (this.input_exp.new && this.input_home.hly && this.input_kid.no) {
        return "de6"; //new, house large yard, no kids
    } else if  (this.input_exp.owned && this.input_home.ap && this.input_kid.yes) {
        return "de7"; // owned, apartment, kids
    } else if  (this.input_exp.owned && this.input_home.ap && this.input_kid.no) {
        return "de8"; // owned, apartment, no kids
    } else if  (this.input_exp.owned && this.input_home.hsy && this.input_kid.yes) {
        return "de9"; // owned, house small yard, kids
    } else if  (this.input_exp.owned && this.input_home.hsy && this.input_kid.no) {
        return "de10"; // owned, house small yard, no kids
    } else if  (this.input_exp.owned && this.input_home.hly && this.input_kid.yes) {
        return "de11"; // owned, house large yard, kids
    } else if  (this.input_exp.owned && this.input_home.hly && this.input_kid.no) {
        return "de12"; // owned, house large yard, no kids
    }
}

var d1 = {
    name: "American Eskimo Dog",
    att: "Playful, Perky, Smart",
    des: "The American Eskimo Dog combines striking good looks with a quick and clever mind in a total brains-and-beauty package. Neither shy nor aggressive, Eskies are always alert and friendly, though a bit conservative when making new friends."
}
var d2 = {
    name: "Boston Terrier",
    att: "Friendly, Bright, Amusing",
    des: "The Boston Terrier is a lively little companion recognized by his tight tuxedo jacket, sporty but compact body, and the friendly glow in his big, round eyes. His impeccable manners have earned him the nickname “The American Gentleman.”"
}
var d3 = {
    name: "Tibetan Spaniel",
    att: "Self-Confident, Bright, Playful",
    des: "The frisky and curious Tibetan Spaniel was bred ages ago for sentinel work on the walls of Tibetan monasteries. Known for a flat, silky coat and “lion’s mane” around the neck, the Tibbie forms a tight, worshipful bond with their humans."
}
var d4 = {
    name: "Bulldog",
    att: "Calm, Courageous, Friendly",
    des: "Kind but courageous, friendly but dignified, the Bulldog is a thick-set, low-slung, well-muscled bruiser whose “sourmug” face is the universal symbol of courage and tenacity. These docile, loyal companions adapt well to town or country."
}
var d5 = {
    name: "Miniature American Shepherd",
    att: "Good-Natured, Devoted, Intelligent",
    des: "The Miniature American Shepherd resembles a small Australian Shepherd. True herders in spite of their compact size, Minis are bright, self-motivated workers and endearingly loyal and lively companion dogs who have an affinity for horses."
}
var d6 = {
    name: "Clumber Spaniel",
    att: "Mellow, Gentlemanly, Amusing",
    des: "A dignified and mellow hunting companion of kings, the Clumber Spaniel is the largest of the AKC flushing spaniels. For those who can handle some shedding and drooling, the amiable Clumber is an amusing best friend and a gentlemanly housemate."
}
var d7 = {
    name: "Flat-Coated Retriever",
    att: "Cheerful, Optimistic, Good-humored",
    des: "The Peter Pan of the Sporting Group, the forever-young Flat-Coated Retriever is a gundog of relatively recent origin. Happy, self-assured, and willing to please, a good Flat-Coat will retrieve a duck or a show ribbon with equal aplomb."
}
var d8 = {
    name: "Pembroke Welsh Corgi",
    att: "Affectionate, Smart, Alert",
    des: "Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one of the world's most popular herding breeds."
}
var d9 = {
    name: "Harrier",
    att: "Outgoing, Friendly, People-oriented",
    des: "The Harrier is a swift, prey-driven pack hound of medium size first bred in medieval England to chase hare. Outgoing and friendly, the Harrier is much larger than the Beagle but smaller than another close relative, the English Foxhound."
}
var d10 = {
    name: "Border Collie",
    att: "Smart, Affectionate, Energetic",
    des: "A remarkably bright workaholic, the Border Collie is an amazing dog—maybe a bit too amazing for owners without the time, energy, or means to keep it occupied. These energetic dogs will settle down for cuddle time when the workday is done."
}
var d11 = {
    name: "Doberman Pinscher",
    att: "Alert, Fearless, Loyal",
    des: "Sleek and powerful, possessing both a magnificent physique and keen intelligence, the Doberman Pinscher is one of dogkind's noblemen. This incomparably fearless and vigilant breed stands proudly among the world's finest protection dogs."
}
var d12 = {
    name: "Cardigan Welsh Corgi",
    att: "Affectionate, Loyal, Smart",
    des: "The Cardigan Welsh Corgi is a masterpiece of the breeder’s art: Every aspect of its makeup is perfectly suited to moving cattle, and yet it is so congenial and sweet-faced that it would be a cherished companion even if it never did a day’s work."
}

var de1 = "Your match <b>" + d1.name + "</b> <br>" + d1.att + "<br>" + d1.des + ""
var de2 = "Your match <b>" + d2.name + "</b> <br>" + d2.att + "<br>" + d2.des + ""
var de3 = "Your match <b>" + d3.name + "</b> <br>" + d3.att + "<br>" + d3.des + ""
var de4 = "Your match <b>" + d4.name + "</b> <br>" + d4.att + "<br>" + d4.des + ""
var de5 = "Your match <b>" + d5.name + "</b> <br>" + d5.att + "<br>" + d5.des + ""
var de6 = "Your match <b>" + d6.name + "</b> <br>" + d6.att + "<br>" + d6.des + ""
var de7 = "Your match <b>" + d7.name + "</b> <br>" + d7.att + "<br>" + d7.des + ""
var de8 = "Your match <b>" + d8.name + "</b> <br>" + d8.att + "<br>" + d8.des + ""
var de9 = "Your match <b>" + d9.name + "</b> <br>" + d9.att + "<br>" + d9.des + ""
var de10 = "Your match <b>" + d10.name + "</b> <br>" + d10.att + "<br>" + d10.des + ""
var de11 = "Your match <b>" + d11.name + "</b> <br>" + d11.att + "<br>" + d11.des + ""
var de12 = "Your match <b>" + d12.name + "</b> <br>" + d12.att + "<br>" + d12.des + ""