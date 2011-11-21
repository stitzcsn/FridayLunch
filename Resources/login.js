var window = Ti.UI.currentWindow;


var username = Titanium.UI.createTextField({  
    color:'#336699',  
    top:10,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Username',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
window.add(username);  
  
var password = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Password',  
    passwordMask:true,  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
window.add(password);  
  
var loginBtn = Titanium.UI.createButton({  
    title:'Login',  
    top:110,  
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
window.add(loginBtn);  

loginBtn.addEventListener('click',function(e)  
{  
	Titanium.API.info("You clicked the button");
	
    if (username.value != '' && password.value != '')  
    {  
    	Titanium.API.info("Ready to close window");
    	window.close();
    }  
    else  
    {  
        alert("Username/Password are required");  
    }  
});  

username.addEventListener('return', function(event) {
  password.focus();
});

password.addEventListener('return', function(event) {
  // submit your form here
});



