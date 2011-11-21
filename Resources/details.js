

//Titanium.UI.setBackgroundColor('#ffffff');


var window = Ti.UI.currentWindow;


var rName = Ti.UI.currentWindow.title;
rName = rName.substring(4,Ti.UI.currentWindow.title.length);

var titleLabel = Ti.UI.createLabel({
    //backgroundColor:'#202020',
	text:"Vote for " + rName,
    color:'#fff',
    height: 40,
    top:20,
    width: 280,
    left: 5
});



var email = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Email Address',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
window.add(email);  

var submitBtn = Titanium.UI.createButton({  
    title:'Vote',  
    top:110,  
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
window.add(submitBtn);  



window.add(titleLabel);

submitBtn.addEventListener('click',function(e)  
{  
     if (email.value != '')  
    { 
    	alert("Thank you, your vote was successfully submitted.");
    	//window.close();
    } else
    {
    alert("You must enter a valid email address to vote."); 	
    
    }
 		
});  





var rlat;
var rlong;
var rtitle;
 
if (Ti.UI.currentWindow.title == "Chick Fil A") {
  // is true
  Titanium.API.info("Chick Fil A");
  rtitle = "Chick Fil A";
  
  rlat = "26.680055";
  rlong = "-80.114403";
  
} else if (Ti.UI.currentWindow.title == "TooJays") {
  // is true
  Titanium.API.info("TooJays");
  rtitle = "TooJays";
  
  rlat = "26.680055";
  rlong = "-80.114403";
  
} else if (Ti.UI.currentWindow.title == "CR Chicks") {
  // is true
  Titanium.API.info("CR Chicks");
  rtitle = "CR Chicks";
  
  rlat = "26.680055";
  rlong = "-80.114403";
  
} else if (Ti.UI.currentWindow.title == "5 Guys") {
  // is true
  Titanium.API.info("5 Guys");
  rtitle = "5 Guys";
  
  rlat = "26.680055";
  rlong = "-80.114403";
  
} else if (Ti.UI.currentWindow.title == "Chiptole") {
  // is true
  Titanium.API.info("Chiptole");
  rtitle = "Chipotle";
  
  rlat = "26.680055";
  rlong = "-80.114403";
  
} else {
	 Titanium.API.info("NA");
}




var mountainView = Titanium.Map.createAnnotation({
    latitude:rlat,
    longitude:rlong,
    title:rtitle,
    subtitle:'Super Good Food',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region:{latitude:26.823458, longitude:-80.138741, latitudeDelta:.4, longitudeDelta:.4},
    animate:true,
    regionFit:true,
    userLocation:false,
    top:170,  
    width:320,  
    height:200,
    annotations:[mountainView]
});


window.add(mapview);

