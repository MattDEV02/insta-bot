const s = (selector, i = 0) => document.querySelectorAll(selector)[i] ;

const trigger_click = elements => elements.map(el => el.click()); 

const classes = ['.wpO6b  ', '.coreSpriteRightPaginationArrow'];

const getRandom = (min = 2500,max = 5000) => {
	const d = (max - min);
	const r =  ((Math.random() * d) + min);
	return r;
};

const insta_bot = () => { 
   let 
      like = null, 
      arrow = null;
   window.setInterval(() => { 
	  like = s(classes[0],1) ; 
          arrow = s(classes[1]); 
          trigger_click([like, arrow]);
   }, getRandom());
};


//insta_bot(); 
