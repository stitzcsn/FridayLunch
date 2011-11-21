// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//Titanium.UI.setBackgroundColor('#fff');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//

var win1 = Titanium.UI.createWindow({  
    title:'Friday Lunch',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'104-index-cards.png',
    title:'Friday Lunch',
    window:win1
});


/*
var rowData = [];
var remoteCall = Titanium.Network.createHTTPClient();
remoteCall.open("GET","http://google.com");
remoteCall.send();

remoteCall.onload = function()
{
	Titanium.API.info('API CAll: loaded');
	var responseData = eval('('+this.responseText+')');
	Ti.API.info(responseData);
};

remoteCall.onerror = function()
{
	Titanium.API.info('API CAll: error');
	
};

*/

var data = 
	[{title:"9 - Chick Fil A", link: 'details.js', hasChild: true, header: "Restaurants"},
	{title:"7 - TooJays", link: 'details.js', hasChild: true},
	{title:"4 - CR Chicks", link: 'details.js', hasChild: true},
	{title:"2 - 5 Guys", link: 'details.js', hasChild: true},
	{title:"1 - Chipotle", link: 'details.js', hasChild: true}];
	
	
var table = Titanium.UI.createTableView({data:data, filterAttribute:'title',separatorColor: '#ccc'});

table.addEventListener('click', function(e){
    if (e.rowData.link){
        var win = Titanium.UI.createWindow({
	        url:e.rowData.link,
	        title:e.rowData.title
	    });
        }
    tab1.open(win,{animated:true});
});

win1.add(table);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Suggest a Restaurant',
    backgroundColor:'#fff',
    url:'new.js',
});
var tab2 = Titanium.UI.createTab({  
    icon:'20-gear2.png',
    title:'Suggest a Restaurant',
    window:win2
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();


//create login modal view
var ModalWindow = Titanium.UI.createWindow({  
    title:'Please Login',
    backgroundColor:'#fff',
    url:'login.js',
    modal: true
});

ModalWindow.open({modal:true}); 