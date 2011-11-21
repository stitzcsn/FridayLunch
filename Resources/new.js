var window = Ti.UI.currentWindow;

//email, comment, name, photo, location-lat/long) (into restaurant table as pending)

var restaurant = Titanium.UI.createTextField({  
    color:'#336699',  
    top:10,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Restaurant',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
window.add(restaurant); 
  
var email = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Email',  
    keyboardType:Titanium.UI.KEYBOARD_EMAIL,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
window.add(email);  
  
  
var comment = Titanium.UI.createTextField({  
    color:'#336699',  
    top:110,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Comment',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
window.add(comment);  

var submitBtn = Titanium.UI.createButton({  
    title:'Submit',  
    top:160,  
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
window.add(submitBtn);  





var submitReq = Titanium.Network.createHTTPClient();  
  
submitBtn.addEventListener('click',function(e)  
{  
    if (restaurant.value != '' && email.value != '')  
    {  
    	comment.blur();
    	email.blur();
    	restaurant.blur();
    	
    	alert(restaurant.value + " was successfully submitted. Thank you!"); 
 		restaurant.value = '';
  		email.value = '';
  		comment.value = '';
    	
        //submitReq.open("GET","http://");  //submitReq.open("POST","http://");
        /*var params = {  
            restaurant: restaurant.value,  
            //password: Ti.Utils.md5HexDigest(password.value)
            email: email.value,
            comment: comment.value
        };
        submitReq.send(params);*/
       //submitReq.send();
    }  
    else  
    {  
        alert("Restaurant and Email Address Are Required.");  
    }  
});  



submitReq.onload = function()  
{  
	
	Titanium.API.info("You clicked the button");
   
	//Titanium.UI.currentWindow.close();
    //var json = this.responseText;  
    //var response = JSON.parse(json);  
    /*if (response.logged == true)  
    {  
        //Titanium.UI.currentWindow.close();
        alert("Welcome " + response.name + ". Your email is: " + response.email);  
    }  
    else  
    {  
        alert(response.message);  
    }
    */
   //alert(this.responseText);
   
   /*alert(restaurant.value + "was successfully submitted. Thank you!"); 
   self.restaurant.value = '';
   self.email.value = '';
   self.comment.value = '';*/
}; 







restaurant.addEventListener('return', function(event) {
  email.focus();
});

email.addEventListener('return', function(event) {
  // submit your form here
  comment.focus();
});



