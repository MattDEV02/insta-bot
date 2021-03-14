const s = (selector, i = 0) => document.querySelectorAll(selector)[i] ;

const trigger_click = elements => elements.map(el => el.click()); 

const classes = ['.wpO6b  ', '.coreSpriteRightPaginationArrow'];

const getRandom = (min = 2000,max = 4000) => {
	const d = (max - min);
	const r =  ((Math.random() * d) + min);
	return r;
};

const insta_bot = () => { 
   let 
      like = null, 
      arrow = null,
	  r = getRandom();
   window.setInterval(() => { 
	  like = s(classes[0],1) ; 
      arrow = s(classes[1]); 
      trigger_click([like, arrow]);
	  r = getRandom();
	  console.log(r);
   }, r);
};


insta_bot(); 