var mealPkgs = [
    {  
    Name: "Amazin' Chicken Ramen",
    description: "a killer chicken soup... literally convicted of the vehicular manslaughter of a group of brazilian children in 2011. Paired with a base with garlic, ginger, shitake mushrooms and soy sauce, filled with squiggly ramen noodles and slices of succulent chicken, and topped with fresh spring onions and a soft-boiled egg. You'll never find the bodies.",
    price: "$69,199.99 /mo",
    itemNo: 1,
    image: "./images/chicken_ramen",
    BestSeller: false
},
    {
    Name: "Dope Miso Ramen",
    description: "This ramen is creamy, a touch spicy, flavored with miso, and yes, filled with plenty of ramen noodles. Each bowl is topped with crispy, buttery, sesame mushrooms for the best bowl of homemade ramen... even better than a restaurant... specifically the denny's across the street... they overcook everything, how do you accomplish charring a pancake while at the same time being super flaky",
    price: "$299.99 /mo",
    itemNo: 2,
    image: "./images/miso_ramen",
    BestSeller: false
},
{
    Name: "Sexy Shoyu Ramen",
    description: " Shoyu Ramen simply refers to ramen served with a soy sauce-based broth that is usually in clear, brown color. This basic meal is great for any basic person who can't afford something actually decent and won't leave you hunger again after 20 minutes.",
    price: "from $1.85 /mo",
    itemNo: 3,
    image: "./images/shoyu_ramen",
    BestSeller: false
},

{
    Name: "Poppin' Pork Ramen",
    description: "Slow-cooked pork with tender noodles, crunchy veggies, a just-slightly-runny egg with a broth that's full of yummy delicious goodness that'll satisfy any hungry tummy lookin' for some yummy yummy",
    price: "$3.69 /mo",
    itemNo: 4,
    image: "./images/spicy_beef_ramen",
    BestSeller: false
},

{
    Name: "Spicy Beef Ramen",
    description: "Say hello to this easy and elegant spicy beef ramen bowl. This easy ramen noodles recipe takes a bold new take on the one-state solution in your warring nations of hunger and frugality, this baby will eat your wallet and your heart",
    price: "$12,189.99 /mo",
    itemNo: 5,
    image: "./images/venison_ramen",
    BestSeller: true
},

{
    Name: "Yummy Venison Ramen",
    description: "Ramen made with grilled venison tenderloin is even better. We top the rich broth with thin strips of grilled tenderloin, crunchy green onion, a silky soft-boiled egg that has been marinated in a soy-sauce-based mixture for hours, and thin strips of kombu (dried seaweed). Add some thinly veiled anti-semitism with how amazin' we grill the goyim in this ramen bowl.",
    price: "$99.99 /mo",
    itemNo: 6,
    image: "./images/pork_ramen",
    BestSeller: false
}];

window.onload = function() {

    for (var i = 0; i < this.mealPkgs.length; i++){
    var lmnt = document.createElement("div");
    lmnt.setAttribute("id", "mealItems" + i);
    document.querySelector("#menuitems").appendChild(lmnt);

    var RamenIMG = document.createElement("img");
    var src = mealPkgs[i].image + '.png';
    var imgsize = RamenIMG.clientWidth;
    RamenIMG.setAttribute("id", "pic");
    RamenIMG.setAttribute('src', src);
    RamenIMG.setAttribute('alt', src);
    RamenIMG.style.width = (imgsize + 550) + "px";
    document.querySelector("#mealItems" + i).appendChild(RamenIMG);

    var RamenNAME = document.createElement("p");
    RamenNAME.setAttribute("id", "element");
    RamenNAME.textContent = mealPkgs[i].Name;
    document.querySelector("#mealItems"  + i).appendChild(RamenNAME);

    var RamenDesc = document.createElement("p");
    RamenDesc.setAttribute("id", "element");
    RamenDesc.textContent = "Description: " + mealPkgs[i].description;
    document.querySelector("#mealItems"  + i).appendChild(RamenDesc);

    var RamenPRICE = document.createElement("p");
    RamenPRICE.setAttribute("id", "element");
    RamenPRICE.textContent = "Price: " + mealPkgs[i].price;
    document.querySelector("#mealItems"  + i).appendChild(RamenPRICE);
if(mealPkgs[i].BestSeller == true){
    var Mtop = document.createElement("p");
    Mtop.setAttribute("id", "Topone");
    Mtop.textContent = "Best Seller! ";
    document.querySelector("#mealItems"  + i).appendChild(Mtop);


    var Mtopimg = document.createElement("img");
    var Topsrc = './images/thumbs.png';
    Mtopimg.setAttribute("id", "thumbsImg");
    Mtopimg.setAttribute('src', Topsrc);
    Mtopimg.setAttribute('alt', Topsrc);
    document.querySelector("#mealItems"  + i).appendChild(Mtopimg);
}
    }
}