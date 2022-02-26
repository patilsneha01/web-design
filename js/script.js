
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}


window.onscroll = () =>{

    searchForm.classList.remove('active');
  
    if(window.scrollY > 80){
      document.querySelector('.header .header-bottom').classList.add('active');
    }
    else{
      document.querySelector('.header .header-bottom').classList.remove('active');
    }
  
}


const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});


