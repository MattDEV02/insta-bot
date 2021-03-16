const s = (selector, i = 0) => document.querySelectorAll(selector)[i] ;

const classes = ['.wpO6b  ', '.coreSpriteRightPaginationArrow'];

const getRandom = (min = 2500,max = 5500) => {
    const d = (max - min);
    const r =  ((Math.random() * d) + min);
    return r;
};

const trigger_click = elements => {
    window.setTimeout (
		() => elements[0].click(),
		getRandom(400,700)
	);
    window.setTimeout (
        () => elements[1].click(), 
        getRandom(1000,1550)
    );
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
