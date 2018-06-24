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
		
	],

//contains data for header 
	headerItems: {
	
		textUp:'Katya Horton.',
		textDown:'Front End Web Developer.'
		
	}, 

//contains array with main objects
	mainItems: [
		{
			name: 'about me', 
			content: [ 
				{
					contentLines:' * Enthusiastic Junior Front-end web developer with 1 year experience.'
				},
				{
					contentLines:' * Passionate about coding, technogies and design.'
				},
				{
					contentLines:' * Confident comunicator and enjoys socialising.'
				},
				{
					contentLines:' * Speaks English, Russian, French and Italian languages.'
				}
			]
		},
		{
			name: 'portfolio',
			content: [
				{
					contentLines:'hi'
				},
				{
					contentLines:'miau'
				}
			]
		},
		{
			name: 'skills',
			content: [
				{
					contentLines:'HTML, HTML5'
				},
				{
					contentLines:'CSS, CSS3, CSS FlexBox, CSS Grid'
				},
				{
					contentLines:'Java Script, ES6'
				},
				{
					contentLines:'jQuery'
				},
				{
					contentLines:'Object oriented programming, MVC concepts'
				}
			]
			
		},
		{
			name: 'education',
			content: [
				
				{
					contentLines:'Google/Udacity, Front End Web Developer Nanodegree Program (February 2018- till now)'
				},
				{
					contentLines:'Google/Udacity, Front End Web Developer Challenge (October 2017-January 2018)'
				},
				{
					contentLines:'Udemy, The Complete Web Developer Course 2.0, in progress'
				}
			]
			
		},
		{
			name: 'contacts',
			content: [
				{
					contentLines:'hi'
				},
				{
					contentLines:'miau'
				}
			]
		},
		{
			name: 'resume',
			content: [
				{
					contentLines:'hi'
				},
				{
					contentLines:'miau'
				}
			]
		}
		
	], 
	
	footerItems: {
		text:'Please contact me'
	}
		
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

//------------------------------------------VIEW MAIN DIV 

var viewMain = {
	
	init: function() {
		this.mainContainer = document.getElementById('main');
		this.render();
	},
	
	render: function() {
		var mainItems = control.getMainItems();
	
		for (var i = 0; i < mainItems.length; i++) {
			var mainItem = mainItems[i];
			var mainDivContainer = document.createElement('div');
			var mainDivHeader = document.createElement('div');
			var mainDivContent = document.createElement('div');		
			mainDivHeader.classList.add('mainDivHeader')
			mainDivContent.classList.add('mainDivContent');
			mainDivContainer.classList.add('mainDivContainer');
			mainDivContainer.appendChild(mainDivHeader);
			mainDivContainer.appendChild(mainDivContent);
			mainDivHeader.textContent = mainItem.name;
			this.mainContainer.appendChild(mainDivContainer);
			
			var mainItemsContents = mainItem.content;
			
			for (var x = 0; x < mainItemsContents.length; x++) {
				var mainItemsContent = mainItemsContents[x];
				var contentContainer = document.createElement('div');
				contentContainer.textContent = mainItemsContent.contentLines;
				mainDivContent.appendChild(contentContainer);
			}
		}
	}
};

//------------------------------------------VIEW HEADER

var viewHeader = {
	
//initializes viewHeader, called only once 
	init: function() {
		
		this.headerContainer = document.getElementById('header');
		this.render();
	},
	
	render: function() {
	
//gets headerItems, rendered from the control	
		var headerItems = control.getHeaderItems();
		
		var headerText = document.createElement('h1');
		var headerTextDown = document.createElement('h1');
		
		headerText.textContent = headerItems.textUp;
		headerTextDown.textContent = headerItems.textDown;
		
		this.headerContainer.appendChild(headerText);
		this.headerContainer.appendChild(headerTextDown);
	
	}	
};

//------------------------------------------VIEW FOOTER DIV 

var viewFooter = {
	
	init: function() {
		this.footerContainer = document.getElementById('footer');
		this.render();
	},
	
	render: function() {
		var footerItems	= control.getFooterItems();
		var footerText = document.createElement('div');
		footerText.classList.add('footerText');
		footerText.textContent = footerItems.text;
		this.footerContainer.appendChild(footerText);
	}
	
	
};


//============================== CONTROL ==============================//

var control = {
	
//method that starts the entire application	
	init: function() {
		
		viewNavBar.init();
		viewHeader.init();
		viewMain.init();
		viewFooter.init();
	}, 
	
	
	getNavBarItems: function() {
		return model.navBarItems;
	}, 
	
	getHeaderItems: function() {
		return model.headerItems;
	}, 
	
	getMainItems: function() {
		return model.mainItems;
	}, 
	
	getFooterItems: function() {
		return model.footerItems;
	}
	
	
};



// starts the whole magic


control.init();
