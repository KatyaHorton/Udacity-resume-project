//============================== MODEL ==============================//

var model = {
	
//contains array with navBar objects	
	navBarItems: [
		{
			name: 'personal',
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
			name: 'personal', 
			content: [ 
				{
					contentLines:'Enthusiastic Junior Front-end web developer with 1 year experience.'
				},
				{
					contentLines:'Passionate about coding, technogies and design.'
				},
				{
					contentLines:'Confident comunicator and enjoys socialising.'
				},
				{
					contentLines:'Speaks English, Russian, French and Italian languages.'
				}, 
				{
					contentLines:'Active member of London Google Campus.'
				},
			
			],
			
			image: 'images/kHorton.jpg'
		},
		{
			name: 'portfolio',
			content: [
				{
					contentLines:'Project 1, arcade-clone-FEND',
					image: 'images/pufferFish.png',
					href: 'http://katyahorton.com/card.html' 
				},
				{
					contentLines:'Project 2, memory-card-game-FEND',
					image: 'images/kHorton.jpg',
					href: 'http://katyahorton.com/card.html' 
				},
				{
					contentLines:'Project 3, cat-clicker-premium-pro-FEND',
					image: 'images/pufferFish.png',
					href: 'http://katyahorton.com/card.html' 
				}, 
				{
					contentLines:'Project 4, pixel-art-maker-FEND',
					image: 'images/pufferFish.png',
					href: 'http://katyahorton.com/card.html' 
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
				
			],
			image: 'images/udacity.jpg'
			
		},
		{
			name: 'contacts',
			content: [
				{
					contentLines:'web page: katyahorton.com'
				},
				{
					contentLines:'email: contact@katyahorton.com'
				}
			]
		},
		{
			name: 'resume',
			content: [
				{
					contentLines:'resume link'
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
		this.navBar =  document.getElementById('navBar');
		
//add event when menu button is pressed navBar appears
		this.menuButton = document.getElementById('menu');
		this.menuButton.addEventListener('click', function() {
			control.showNavBar();
		});
		
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
			
//adds a class to navBarIetems 
			navBarElem.classList.add('navBarElem');
			
		}
	},


	};

//------------------------------------------VIEW MAIN DIV 

var viewMain = {
	
	init: function() {
		this.mainContainer = document.getElementById('main');
		
		this.mainContainer.addEventListener('click', function() {
			control.hideNavBar();
		})
		this.render();
	},
	
	render: function() {
		var mainItems = control.getMainItems();
		var portfolioItems = control.getPortfolioContent();
		
//adds and array of main blocks to the main section
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

//adds an id to each block 
			mainDivContent.setAttribute('id', mainItem.name);	
			
//adds content to main section's blocks
			for (var x = 0; x < mainItemsContents.length; x++) {
				var mainItemsContent = mainItemsContents[x];
				var contentContainer = document.createElement('div');


				var portfolioMain = document.getElementById('portfolio');
				var imageContainer3 = document.createElement('img');
				imageContainer3.src = mainItemsContent.image;
				mainDivContent.appendChild(imageContainer3);
					
				
//ATTEMP to add content to portfolio section's blocks
				contentContainer.textContent = mainItemsContent.contentLines;
				mainDivContent.appendChild(contentContainer);
				contentContainer.classList.add('contentContainer');
				
			}
		};
// I AM SURE IMAGE CAN BE OPTIMESED ========================================
		
//adds the image to the personal block
				var personalMain = document.getElementById('personal');
				
				var imageKatya = control.getKatyaImg();
				var imgContainer = document.createElement('img');
				imgContainer.src = imageKatya;
				personalMain.appendChild(imgContainer);
				imgContainer.classList.add('contentContainer');
				imgContainer.setAttribute('id', 'katyaImg');

//adds the image to the education block
		
		var educationMain = document.getElementById('education');
		var imageUdacity = control.getUdacityImg();
		var imgContainer2 = document.createElement('img');
		imgContainer2.src = imageUdacity;
		educationMain.appendChild(imgContainer2);
		imgContainer2.classList.add('contentContainer');
		imgContainer2.setAttribute('id', 'udacityImg');
		
//adds the portfolio image to the portfolio block
		
		
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
		var headerTextDown = document.createElement('h2');
		
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
	
	getKatyaImg: function() {
		return model.mainItems[0].image;		
	},
	
	getUdacityImg: function() {
		return model.mainItems[3].image;		
	},
	
	getPortfolioContent: function() {
		return model.mainItems[1].content;
	},
	
	getFooterItems: function() {
		return model.footerItems;
	}, 
	
	showNavBar: function() {
		viewNavBar.navBar.classList.add('open');
	},
	
	hideNavBar:  function() {
		viewNavBar.navBar.classList.remove('open');
	}	
	
	
};



// starts the whole magic


control.init();
