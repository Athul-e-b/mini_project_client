const pictures=[
    {   id:'1',
        url:'../img/gallery-img/1.jpg',
        dec:'abcd'
    },
    {   idL:'2',
        url:'../img/gallery-img/2.jpg'
    },
    {   id:'3',
        url:'../img/gallery-img/3.jpg'
    },
    {   id:'4',
        url:'../img/gallery-img/4.jpg'
    },
    {id:'6',
        url:'../img/gallery-img/6.jpg'
    },
    {id:'7',
        url:'../img/gallery-img/7.jpg'
    },
    {id:'9',
        url:'../img/gallery-img/9.jpg'
    },
    {id:'10',
        url:'../img/gallery-img/10.jpg'
    },
    {id:'11',
        url:'../img/gallery-img/11.jpg'
    },
    {id:'12',
        url:'../img/gallery-img/12.jpg'
    },
    {id:'13',
        url:'../img/gallery-img/13.jpg'
    },
    {id:'14',
        url:'../img/gallery-img/14.jpg'
    },
    {id:'16',
        url:'../img/gallery-img/16.jpg'
    },
    {id:'17',
        url:'../img/gallery-img/17.jpg'
    },
    {id:'18',
        url:'../img/gallery-img/18.jpg'
    },
    {id:'19',
        url:'../img/gallery-img/19.jpg'
    },
    {id:'20',
        url:'../img/gallery-img/20.jpg'
    },
    {id:'21',
        url:'../img/gallery-img/21.jpg'
    },
    {id:'22',
        url:'../img/gallery-img/22.jpg'
    },
    {id:'23',
        url:'../img/gallery-img/23.jpg'
    },
    {id:'24',
        url:'../img/gallery-img/24.jpg'
    },
]

export function shuffleArray() {
   return pictures.sort(function() {
        return Math.random() - 0.5;
      });
  }

  export function imageTags(classes){
  let shuffledPictures = pictures.sort(function() {
        return Math.random() - 0.5;
      });
   let imagesTagsArray = []   
      shuffledPictures.forEach(images=>{
          let imgTag = document.createElement('img')
          imgTag.classList.add(...classes)
          imgTag.src = images.url
          imagesTagsArray.push(imgTag)
      })
    return imagesTagsArray
  }

 let studentMath = []
  export default studentMath = [
    {
        sem:1,
        mark_details:[
            {
                subject:"A",
                mark:100,
                cmark:50
            },
            {
                subject:"B",
                mark:90,
                cmark:40
            },
            {
                subject:"C",
                mark:95,
                cmark:48
            },
            {
                subject:"D",
                mark:94,
                cmark:41
            },
        ]
    },
    {
        sem:2,
        mark_details:[
            {
                subject:"A",
                mark:100,
                cmark:50
            },
            {
                subject:"C",
                mark:95,
                cmark:48
            },
            {
                subject:"D",
                mark:94,
                cmark:41
            },
            {
                subject:"B",
                mark:90,
                cmark:40
            },
        ]
    },
  ]

 