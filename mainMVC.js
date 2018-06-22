//============================== MODEL ==============================//

var model = {
	
//contains array with navBar objects	
	navBarItems: [
		{
			name: 'about me',
			href: 'http://katyahorton.com/#aboutMe'
		},
		{
			name: 'portfolio',
			href: 'http://katyahorton.com/#projects'
		},
		{
			name: 'skills',
			href: 'http://katyahorton.com/#skills'
		},
		{
			name: 'education',
			href: '#'
		},
		{
			name: 'contacts',
			href: 'http://katyahorton.com/#contacts'
		},
		{
			name: 'resume',
			href: 'https://www.facebook.com/normalgirl'
		}
		
	]
	
};


//============================== VIEW ==============================//


//------------------------------------------VIEW NAVIGATION BAR

var viewNavBar = {
	
//initializes navBarView, called only once	
	
	init: function() {
		
		this.navBarList = document.getElementById('navBarList');
		this.render();
		
	},
	
	render: function() {
		
//gets navBarItems, rendered from the control
		var navBarItems = control.getNavBarItems();

//loops over navBar items
		for (var i = 0; i < navBarItems.length; i++) {
			
			var navBarItem = navBarItems[i];
			

//creates new list item attribute
			var navBarElem = document.createElement('li');

//creates new link attribute
			var navBarLink = document.createElement('a');

//sets name and href for a link
			navBarLink.textContent = navBarItem.name;
			navBarLink.setAttribute('href', navBarItem.href);

//adds the link to a list item
			navBarElem.appendChild(navBarLink);
	
//adds a new element to the navBArList
			this.navBarList.appendChild(navBarElem);
			
		}
	}
	
};


//============================== CONTROL ==============================//

var control = {
	
//method that starts the entire application	
	init: function() {
		
		viewNavBar.init();
		
	}, 
	
	
	getNavBarItems: function() {
		
		return model.navBarItems;
		
	}
	
};



// starts the whole magic


control.init();
