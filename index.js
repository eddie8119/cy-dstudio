//Intersection Observer api, 
const image__list = document.querySelectorAll(".image__item");
// console.log(image__list)
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slideInLeft');
        } else {
            entry.target.classList.remove('slideInLeft');
        }
    });    
});

image__list.forEach(heads => {
    observer.observe(heads);
});



//server-timeline
(function () {
    "use strict"; 
    const items = document.querySelectorAll(".timeline li");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc); //開啟網頁當下的渲染
    window.addEventListener("resize", callbackFunc); //縮放畫面
    window.addEventListener("scroll", callbackFunc);
  })();
  
//切換banner
const buttons = document.querySelectorAll('.toggler-btn')
const bannerImgs = document.querySelectorAll('.primary__img2__img')
const bannerTitles = document.querySelectorAll('.primary__content__title')
const descriptions = document.querySelectorAll('.primary__content__description')


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const step = btn.classList.contains('next') ? 1 : -1

    const activeBanner = document.querySelector('.primary__img2__img.active')
    const activebannerTitle = document.querySelector('.primary__content__title.active')
    const activedescription = document.querySelector('.primary__content__description.active')

    let nextStep = [...bannerImgs].indexOf(activeBanner) + step;
    if (nextStep < 0) {
      nextStep = bannerImgs.length - 1
    }
    if (nextStep >= bannerImgs.length) {
      nextStep = 0
    }  

    bannerImgs[nextStep].classList.add('active');
    bannerTitles[nextStep].classList.add('active'); 
    descriptions[nextStep].classList.add('active'); 

    activeBanner.classList.remove('active');
    activebannerTitle.classList.remove('active'); 
    activedescription.classList.remove('active');  
  })
})

//作品集區渲染
const projectsData = [
  {
    id: 1,
    title: "IDA設計大賞",
    category: "室內設計比賽",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/9a0cc4485d8e42ef849da477d522150f",
  },
  {
    id: 2,
    title: "IDA設計大賞",
    category: "室內設計比賽",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/9a0cc4485d8e42ef849da477d522150f",
  },
  {
    id: 3,
    title: "K DESIGN設計大賞",
    category: "室內設計比賽",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/de41facd34fb40cba429273ea78cc16e",
  },
  {
    id: 4,
    title: "林口陳宅豪宅規劃案",
    category: "豪宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/4a7a746ad15445f890c7c1fec64d65b0",
  },
  {
    id: 5,
    title: "淡水卓宅甲山林規劃案",
    category: "豪宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/0b545ec065b7428aac1195b1896e9006",
  },
  {
    id: 6,
    title: "信義林先生住宅規劃案",
    category: "豪宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/4bb8f0ec53114730b784a010593695ad",
  },
  {
    id: 7,
    title: "東區奇威旗艦店設計案",
    category: "店面規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/4f78d6b2dff74094b579055829fcbde5",
  },
  {
    id: 8,
    title: "內湖匠喝飲料店規畫案",
    category: "店面規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/54cc20d3abed43f284f03b27078abc8b",
  },
  {
    id: 9,
    title: "南京幸運咖啡連鎖設計案",
    category: "店面規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/df6bb4ab788f4e9c83b96cf3052b9cd8",
  },
  {
    id: 10,
    title: "匠喝民生店規劃案",
    category: "店面規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/21736588a6e0419584641e6a93bbc313",
  },
  {
    id: 11,
    title: "101商場Ipilot設計案",
    category: "店面規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/f67fcd4f1e774be094e475a3ab20ee1c",
  },
  {
    id: 12,
    title: "劍潭黃宅小坪數規劃案",
    category: "住宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/cbce44e2ea614b32aafb815993e34c1b",
  },
  {
    id: 13,
    title: "木柵方宅小坪數規劃案",
    category: "住宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/34417bda76174e2a8750712e8b097832",
  },
  {
    id: 14,
    title: "新店麒源建設辦公室規劃案",
    category: "辦公室規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/5c712a19504d440e9eaf0105ac0b164a",
  },
  {
    id: 15,
    title: "信義森業永春樓中樓規劃案",
    category: "住宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/4bd66420ab044a57b6ec445fbafcd612",
  },
  {
    id: 16,
    title: "陽明山李宅戶外庭院規劃案",
    category: "住宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/0328ae3ea9684187b6633c57c925d617",
  }, 
  {
    id: 17,
    title: "內湖王宅設計規劃案",
    category: "住宅規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/7314b7891caa426f9716686231d4f846",
  },
  {
    id: 18,
    title: "中友百貨sloggi內衣專櫃設計案",
    category: "店面規劃",
    image: "https://storage.googleapis.com/production-bluehost-v1-0-4/464/1455464/pSCCtvib/94b1210b748b4df98fcb8b717e07d8df",
  },      
];

const projectsWrapper = document.querySelector('.projects__wrapper');
const caseOptions = document.querySelectorAll(".case__option");

function renderProject(ProjectList) {
  let rawHtml ='';
  ProjectList.forEach(project => {    
    rawHtml += `
      <div class="project__card">
        <img
          src=${project.image}
          alt="成寓室內設計案例"
          class="project__card__img"
        />
        <div class="project__card__text">
          <h3 class="project__card__title">${project.title}</h3>                
        </div>
     </div>
    `;
  });
  projectsWrapper.innerHTML = rawHtml;
};
renderProject(projectsData);

//表單提送
function caseOptionHandler(e) {
  const filterCase = e.target.value;
  const filterprojects = [];  
  if (filterCase === '全部種類') {
    filterprojects.push(...projectsData);
  }
  const selectProjects = projectsData.filter(project =>    
      project.category === filterCase       
  );  
  filterprojects.push(...selectProjects);    
  renderProject(filterprojects);
};

caseOptions.forEach(caseOption => {  
  caseOption.addEventListener("click", caseOptionHandler)
});


//表單提送
const submitBtn = document.querySelector('.form__submit__btn');

function sendForm() {
  const costumerName = document.querySelector('#costumer__name');
  const costumerEmail = document.querySelector('#costumer__email');
  const costumerLocation = document.querySelector('#costumer__location');
  const costumerMessage = document.querySelector('#costumer__message');
  
  
  const keyIncostumerName = costumerName.value && costumerName.value.trim();
  const keyIncostumerEmail = costumerEmail.value && costumerEmail.value.trim();
  const keyIncostumerLocation = costumerLocation.value && costumerLocation.value.trim();
  const keyIncostumerMessage = costumerMessage.value && costumerMessage.value.trim();
  

  if (!keyIncostumerName) {
    alert("您未輸入的名字")
    return
  }
  if (!keyIncostumerEmail) {
    alert("您未輸入聯繫方式")
    return
  } 
  
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxBmrKP8MHs--UT2X4mvc4FNClMUVWfMfhto_aoh3ovYumiLzvOurAOvv5QQ2ATuRY/exec",
    data: {
        "name": keyIncostumerName,
        "phone": keyIncostumerEmail,
        "location": keyIncostumerLocation,
        "demand": keyIncostumerMessage  
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });

  costumerName.value = '';
  costumerEmail.value = '';
  costumerLocation.value = '';
  costumerMessage.value = '';
};

submitBtn.addEventListener('click', sendForm);



