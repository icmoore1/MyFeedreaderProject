/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

       	it('url defined', function() {
		for(let feed of allFeeds){
			expect(feed.url).toBeDefined();
                        expect(feed.url.length).not.toBe(0);	
		//     console.log(feed);
		}	
	});
	        
	it('name defined', function() {
		for(let feed of allFeeds){
			expect(feed.name).toBeDefined();
                        expect(feed.name.length).not.toBe(0);	
		//     console.log(feed);
		}	
	});	
    });
   
    describe('The menu', function() { 
	    
	    it('is hidden', function(){
		    const body = document.querySelector('body');
		    expect(body.classList.contains('menu-hidden')).toBe(true);
	    });
	    
	 it('toggles on and off', function() {
	    const body =document.querySelector('body');
	    const menu = document.querySelector('.menu-icon-link');
          //  expect(body.classList.contains('menu-hidden')).toBe(true);	
            menu.click();
	    expect(body.classList.contains('menu-hidden')).toBe(false);	
            menu.click();
	    expect(body.classList.contains('menu-hidden')).toBe(true);	 
			
	});   	    
    });

    describe('Initial Entries', function() {	    

       	beforeEach(function(done) {
		loadFeed(0, done);
	});	
	
	it ('completes work', function() {
		const feed = document.querySelector('.feed');
		//expect(feed.children.length > 0).toBe(true);
		expect(feed.entry.length > 0).toBe(true);
	});	
    });	
   
    describe('New Feed Selection', function() {
	    //~ const feed = document.querySelector('.feed');
	    //~ const firstFeed = [];    
	    
	  /*   beforeEach(function(done) {
		loadFeed(0);
		    Array.from(feed.children).forEach(function(entry) {
				firstFeed.push(entry.innerText);
		     });
		loadFeed(1, done);
	    });    */
	    
	    const first;
            const second;   	    
	    
	  beforeEach(function (done) {
            loadFeed(0, function () {
                first = $('.feed').text();

                loadFeed(1, function () {
                    second = $('.feed').text();
                    done();
                });
            });

        });	    
	    
	    it('content changes', function() {
/* 		    Array.from(feed.children).forEach(function(entry,index) {			    
 * 		      //console.log(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]); 
 * 		      expect(entry.innerText === firstFeed[index]).toBe(false);	
 */		    
		     expect(second).not.toBe(first);
		    });
	    });	    
    });  
    
}());
