//picker
var images = [
'<div id="innerimgbox"><img src="images/picker/roses.png" class="item trash" id="picked"><p class="itemname">Roses</p></div>',
'<div id="innerimgbox"><img src="images/picker/milk.png" class="item recycle not" id="picked"><p class="itemname">Milk</p></div>',
'<div id="innerimgbox"><img src="images/picker/nilla.png" class="item recycle" id="picked"><p class="itemname">Nilla</p></div>',
'<div id="innerimgbox"><img src="images/picker/envelope.png" class="item recycle" id="picked"><p class="itemname">Envelope</p></div>',
'<div id="innerimgbox"><img src="images/picker/frap.png" class="item recycle" id="picked"><p class="itemname">Frappuccino Glass Bottoms</p></div>',
'<div id="innerimgbox"><img src="images/picker/plasticware.png" class="item trash not" id="picked"><p class="itemname">Plasticware</p></div>',
'<div id="innerimgbox"><img src="images/picker/sprite.png" class="item recycle not" id="picked"><p class="itemname">Soda Can</p></div>',
'<div id="innerimgbox"><img src="images/picker/waterbottle.png" class="item recycle" id="picked"><p class="itemname">Plastic Water Bottles</p></div>',
'<div id="innerimgbox"><img src="images/picker/muffin.png" class="item trash" id="picked"><p class="itemname">Muffin Wrapper</p></div>',
'<div id="innerimgbox"><img src="images/picker/newspapertwo.png" class="item recycle" id="picked"><p class="itemname">Newspapers</p></div>',
'<div id="innerimgbox"><img src="images/picker/mail.png" class="item recycle" id="picked"><p class="itemname">Mail</p></div>',
'<div id="innerimgbox"><img src="images/picker/pestcontrol.png" class="item recycle" id="picked"><p class="itemname">Pest Control Container</p></div>',
'<div id="innerimgbox"><img src="images/picker/banana.png" class="item trash foodnot" id="picked"><p class="itemname">Banana Peel</p></div>',
'<div id="innerimgbox"><img src="images/picker/bulbs.png" class="item trash not" id="picked"><p class="itemname">Glass Bulb</p></div>',
'<div id="innerimgbox"><img src="images/picker/magazines.png" class="item recycle" id="picked"><p class="itemname">Magazines</p></div>',
'<div id="innerimgbox"><img src="images/picker/needle.png" class="item trash" id="picked"><p class="itemname">Needles</p></div>',
'<div id="innerimgbox"><img src="images/picker/plastic-bag.png" class="item trash" id="picked"><p class="itemname">Plastic Grocery Bag</p></div>',
'<div id="innerimgbox"><img src="images/picker/radio.png" class="item trash not" id="picked"><p class="itemname">Radio</p></div>',
'<div id="innerimgbox"><img src="images/picker/paint.png" class="item trash not" id="picked"><p class="itemname">Paint Can</p></div>',
'<div id="innerimgbox"><img src="images/picker/newpaper.png" class="item recycle" id="picked"><p class="itemname">Newspaper</p></div>',
'<div id="innerimgbox"><img src="images/picker/leaves.png" class="item trash" id="picked"><p class="itemname">Leaves</p></div>',
'<div id="innerimgbox"><img src="images/picker/box.png" class="item recycle" id="picked"><p class="itemname">Cardboard Box</p>',
'<div id="innerimgbox"><img src="images/picker/burger.png" class="item trash foodnot" id="picked"><p class="itemname">Hamburger</p></div>',
'<div id="innerimgbox"><img src="images/picker/car-seat.png" class="item trash" id="picked"><p class="itemname">Car Seat</p></div>'
,'<div id="innerimgbox"><img src="images/picker/carton.png" class="item trash" id="picked"><p class="itemname">Juice carton</p></div>',
'<div id="innerimgbox"><img src="images/picker/chips.png" class="item trash" id="picked"><p class="itemname">Chips bag</p></div>',
'<div id="innerimgbox"><img src="images/picker/clothes.png" class="item trash" id="picked"><p class="itemname">Clothing</p></div>',
'<div id="innerimgbox"><img src="images/picker/detergent.png" class="item recycle" id="picked"><p class="itemname">Detergent Container</p></div>',
'<div id="innerimgbox"><img src="images/picker/egg-carton.png" class="item recycle" id="picked"><p class="itemname">Egg Carton</p></div>',
'<div id="innerimgbox"><img src="images/picker/hangers.png" class="item trash" id="picked"><p class="itemname">Clothes Hangers</p></div>',
'<div id="innerimgbox"><img src="images/picker/lights.png" class="item trash" id="picked"><p class="itemname">Christmas Lights</p></div>',
'<div id="innerimgbox"><img src="images/picker/hose.png" class="item trash not" id="picked"><p class="itemname">Water hose</p></div>',
'<div id="innerimgbox"><img src="images/picker/lunchbag.png" class="item recycle" id="picked"><p class="itemname">Paper lunch bag</p></div>',
'<div id="innerimgbox"><img src="images/picker/sardine.png" class="item recycle" id="picked"><p class="itemname">Sardine container</p></div>',
'<div id="innerimgbox"><img src="images/picker/plastic-containers.png" class="item recycle" id="picked"><p class="itemname">Plastic Containers</p></div>',
'<div id="innerimgbox"><img src="images/picker/scraps.png" class="item trash not" id="picked"><p class="itemname">Scrap paper</p></div>',
'<div id="innerimgbox"><img src="images/picker/soap.png" class="item recycle" id="picked"><p class="itemname">Soap</p></div>',
'<div id="innerimgbox"><img src="images/picker/soda.png" class="item recycle" id="picked"><p class="itemname">Soda can</p></div>',
//'<img src="images/picker/batteries.png" class="item trash" id="picked"><p class="itemname">Batteries</p>',
'<div id="innerimgbox"><img src="images/picker/chinese-food.png" class="item recycle" id="picked"><p class="itemname">Chinese Food</p></div>',
//'<img src="images/picker/computer.png" class="item trash" id="picked"><p class="itemname">Computer</p>',
'<div id="innerimgbox"><img src="images/picker/glass-bottle.png" class="item recycle" id="picked" style="width:75px !important;"><p class="itemname">Glass Bottle</p></div>',
'<div id="innerimgbox"><img src="images/picker/mail.png" class="item recycle" id="picked"><p class="itemname">Bulk Mail</p></div>',
'<div id="innerimgbox"><img src="images/picker/pallet.png" class="item trash" id="picked"><p class="itemname">Pallet</p></div>',
'<div id="innerimgbox"><img src="images/picker/pie.png" class="item trash" id="picked"><p class="itemname">Pie Tin</p></div>',
'<div id="innerimgbox"><img src="images/picker/shavingcr.png" class="item recycle" id="picked"><p class="itemname">Shaving Cream container</p></div>',
'<div id="innerimgbox"><img src="images/picker/shoes.png" class="item trash" id="picked"><p class="itemname">Shoes</p></div>',
'<div id="innerimgbox"><img src="images/picker/sourcream.png" class="item recycle" id="picked"><p class="itemname">Plastic Sour Cream Container</p></div>',
'<div id="innerimgbox"><img src="images/picker/tires.png" class="item trash" id="picked"><p class="itemname">Tires</p></div>',
'<div id="innerimgbox"><img src="images/picker/yogurt.png" class="item recycle" id="picked"><p class="itemname">Yogurt container</p></div>',
'<div id="innerimgbox"><img src="images/picker/soupcan.png" class="item recycle" id="picked"><p class="itemname">Soup Can</p></div>',
'<div id="innerimgbox"><img src="images/picker/toy.png" class="item trash" id="picked"><p class="itemname">Toy</p></div>'];
