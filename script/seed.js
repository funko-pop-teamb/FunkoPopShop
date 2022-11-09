'use strict'

const {db, models: {User} } = require('../server/db')
const FunkoPop = require('../server/db/models/FunkoPop')



const funkos = [{
  
  Name: 'Stitch with Boba: Lilo and Stitch Collection',
  Category: 'Disney/ Animation',
  Price: '15.00',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/16748978_hi?$productMainDesktop$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Disney Lilo & Stitch Pop! Stitch (With Boba) Vinyl Figure Hot Topic Exclusive Do you love a nice cool boba as much as Stitch? Then you need to add this Pop! vinyl figure to your collection featuring Stitch holding a boba drink.l',
  },
  
  {
  Name: 'Sleeping Stitch: Lilo and Stitch Collection',
  Category: 'Disney/ Animation',
  Price: '12.50',
  ImageUrl:'https://cdn.media.amplience.net/s/hottopic/14925870_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Disney Lilo & Stitch Pop! Sleeping Stitch Vinyl Figure Hot Topic Exclusive Get cozy with your favorite space puppy and this sleeping Stitch Pop! figure from Lilo & Stitch',
  },
  
  {
  Name: 'Kuromi (With Baku): Sanrio Collection',
  Category: 'Disney/ Animation',
  Price: '14.90',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/18945338_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Sanrio Pop! Kuromi (With Baku) Vinyl Figure Hot Topic Exclusive Crafty, yet cute, Pop! Kuromi with Baku wants to share her cheeky but charming side with the other members of your collection. Join forces with this exclusive Pop! Kuromi with Baku and add some sweet surprises to your Sanrio set.',
  },
  
  {
  Name: 'Games Lapras: Pokemon Collection',
  Category: 'Disney/ Animation',
  Price: '12.90',
  ImageUrl:'https://cdn.media.amplience.net/s/hottopic/17417633_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'general',
  description: 'Funko Pokemon Pop! Games Lapras Vinyl Figure. Your dream of becoming a Trainer is not out of reach! Catch this Pop! Lapras to add to your Pokémon collection. Gotta catch em all, right?',
  },
  
  {
  Name: 'Classics Tinker Bell: Peter Pan Collection',
  Category: 'Disney/ Animation',
  Price: '14.90',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/16916184_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'general',
  description: 'Funko Disney Pop! Classics Tinker Bell Vinyl Figure Hot Topic Exclusive Tinker Bell is in a mood. This Funko Pop! from Disney features Tinker Bell sitting and looking grumpy.',
  },
  
  {
  Name: 'Alien: Toy Story Diamond Collection',
  Category: 'Disney/ Animation',
  Price: '14.50',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/13032934_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Disney Pixar Toy Story Diamond Collection Pop! Alien Vinyl Figure Hot Topic Exclusive. OOoooOoOOooo! Alien from the Toy Story films has been given a sparkly makeover as a Funko Pop! '
  },
  
  {
  Name: 'Winnie The Pooh (Flocked): Winnie the Pooh Collection',
  Category: 'Disney/ Animation',
  Price: '15.90',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/19426491_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Disney Winnie The Pooh Pop! Winnie The Pooh (Flocked) Vinyl Figure Hot Topic Exclusive. A new Pop! is in bloom! Winnie the Pooh gets a cherry blossom makeover. Plus, this exclusive version is flocked.'
  },
  
  {
  Name: 'Pochacco: Sanrio Collection',
  Category: 'Disney/ Animation',
  Price: '12.90',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/19426425_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Sanrio Hello Kitty And Friends Pop! Pochacco Vinyl Figure Youre invited to the slumber party of your dreams! Pop! Pochacco Unicorn Party wears colorful unicorn pajamas while holding a trumpet in his hands. Collect him for a magically sweet addition to your Sanrio set.'
  },
  
  {
  Name: 'Bisky: Hunter X Hunter Collection ',
  Category: 'Disney/ Animation',
  Price: '12.90',
  ImageUrl:'https://cdn.media.amplience.net/s/hottopic/17417605_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Funko Hunter X Hunter Pop! Animation Bisky Vinyl Figure Need a team to get through Greed Island with? Youll definitely want to add Bisky to your group! Join the Double-Star Stone Hunter to help clear the game. Pop! Biscuit Kreuger Hunter x Hunter might look sweet and innocent, but she would make for a powerful addition to your treasures.'
  },
  
  {
  Name: 'Soda Vanellope: Wreck-It Ralph Collection',
  Category: 'Disney/ Animation',
  Price: '14.90',
  ImageUrl:'https://cdn.media.amplience.net/s/hottopic/19226304_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'general',
  description: 'Funko Wreck-It Ralph Soda Vanellope Figure Pop off the lid for some refreshing fun with Vanellope. If youre lucky, you may receive a chase variant of Vanellope holding a heart-shaped cookie.'
  },

  {
  Name: 'Phil & Lil Deville: Rugrats',
  Category: 'Movies/Tv',
  Price: '35',
  ImageUrl: 'https://m.media-amazon.com/images/I/51rXC7EFHZL._AC_SX679_.jpg',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'Double the mud pie making fun with Pops! Phil and Lil Deville from Rugrats This exclusive 2-Pack of Pops! is here to help you make a delightfully terrific mess of your Pop! TV collection. Add some excitement and adventure to your Nickelodeon set. Vinyl figures are approximately 3.65-inches tall.'
  },
  {
  Name: 'Geralt with Chase:Witcher',
  Category:  'Movies/Tv',
  Price: '11.99',
  ImageUrl: 'https://m.media-amazon.com/images/I/51f6cBK8cxL._AC_SL1300_.jpg',
  Size: 'regular',
  Edition: 'general',
  description: 'Help Pop! Geralt find Ciri. Together they can tackle their connected destiny and complete your collection of The Witcher. Theres a 1 in 6 chance you may find the chase variant of Pop! Geralt with potion influenced black eyes'
  },
  
  {
  Name: 'Faith +1 Cartman:South Park',
  Category:  'Movies/Tv',
  Price: '21.79',
  ImageUrl: 'https://m.media-amazon.com/images/I/51ju-+slytL._AC_SL1000_.jpg',
  Size: 'regular',
  Edition: 'general',
  description: 'From South Park, Faith +1 Cartman, as a stylized Pop. Stylized collectable stands 3 ¾ inches tall, perfect for any South Park fan. Collect and display all South Park POP Vinyl'
  },
  
  {
  Name: 'Chief Wiggum:Simpsons',
  Category:  'Movies/Tv',
  Price: '27.00',
  ImageUrl: 'https://m.media-amazon.com/images/I/61sbw3mF7TL._AC_SL1300_.jpg',
  Size: 'regular',
  Edition: 'exclusive',
  description: 'The Simpsons animated sitcom television show has been on-going since 1989. Relive, reminisce, and bring the family together for your collection with the The Simpsons Pop! Chief Wiggum. Vinyl figure is approximately 4.15-inches tall.'
  },
  
  {
  Name: 'Prison Mike:The Office',
  Category: 'Movies/Tv',
  Price: '14.70',
  ImageUrl: 'https://m.media-amazon.com/images/I/51g5pw554jL._AC_UY879_.jpg',
  Size: 'mini',
  Edition: 'limited',
  description: 'From The Office, Prison Mike, as a stylized Pocket Pop! Keychain. Stylized collectable stands 1.5 inches tall, perfect for any The Office fan!'
  },
  
  {
  Name: ' Elle with Bruiser:Legally Blonde',
  Category: 'Movies/Tv',
  Price: '11.99',
  ImageUrl: 'https://m.media-amazon.com/images/I/51ziclrp1OL._AC_SL1012_.jpg',
  Size: 'jumbo',
  Edition: 'exclusive',
  description: 'Elle Woods is out to prove that shes not "too blonde" by getting into Harvard Law School and establishing shes an intellect to be reckoned with in the 2001 hit movie, Legally Blonde.'
  },
  
  {
  Name: ' Chamber of Secrets:Harry Potter',
  Category:  'Movies/Tv',
  Price: '12.99',
  ImageUrl: 'https://m.media-amazon.com/images/I/610QJJ8He7L._AC_SL1500_.jpg',
  Size: 'jumbo',
  Edition: 'limited',
  description: 'From Harry Potter, Chamber of Secrets, Harry Potter as a stylized POP from Funko! Stylized collectible is perfect for any Harry Potter fan! Collect and display all Harry Potter Funko Pops!'
  },
  
  {
  Name: ' Dobby:Harry Potter',
  Category:  'Movies/Tv',
  Price: '11.99',
  ImageUrl: 'https://m.media-amazon.com/images/I/513o0c4APtL._AC_SL1500_.jpg',
  Size: 'regular',
  Edition: 'general',
  description: 'Welcome home one of the most well-known and lovable house elves of the Wizarding World with this Pop! Dobby holding the dairy with its hidden sock!'
  },
  
  {
  Name: 'Dustin:Stranger Things',
  Category:  'Movies/Tv',
  Price: '14.90',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/17147916_hi?$productMainDesktopRetina$',
  Size: 'regular',
  Edition: 'general',
  description: 'Hawkins, Indiana is harboring dangerous and supernatural secrets. Bring home the happenings, characters, and breakthrough moments of Stranger Things with your own Pop! Dustin vinyl figure.'
  },
  
  {
  Name: 'Sonny Corleone:The Godfather',
  Category:  'Movies/Tv',
  Price: '12.90',
  ImageUrl: 'https://cdn.media.amplience.net/s/hottopic/16955970_hi?$productMainDesktopRetina$',
  Size: 'jumbo',
  Edition: 'exclusive',
  description: 'Celebrate the 50th anniversary of Francis Ford Coppolas The Godfather by uniting the members of the cast. Here, Pop! Sonny Corleone, trash can lid in hand, commemorates an iconic scene of revenge.'
  },
  
  {
  Name: 'Jimin from Butter: BTS',
  Category: 'Music Icons',
  Price: '20.00',
  ImageUrl: 'https://cdn.shopify.com/s/files/1/1052/2158/products/64044_BTS_JiminButter_POP_GLAM-WEB.png?v=1655940495',
  Size: 'jumbo',
  Edition: 'exclusive',
  description: 'Your music collection may melt at the sight of these Pop! figures for BTS! Pop! Jimin strikes a criminally stunning pose while holding a mugshot sign. Invite this member of BTS to stage a performance in your collection as a Funko Pop! figure! Vinyl figure is approximately 4.1-inches tall.',
  },
  
  {
  Name: 'Mariah Carey: Fantasy',
  Category: 'Music Icons',
  Price: '12.00',
  ImageUrl: 'https://cdn.shopify.com/s/files/1/1052/2158/products/64057a_MariahCarey_Fantasy_POP_GLAM-1-WEB.png?v=1656516679',
  Size: 'regular',
  Edition: 'limited',
  description: 'Lace up your skates and roll along with Pop! Mariah Carey! Pop! Mariah Carey wears her signature look from her music video for “Fantasy,” which was her directorial debut. In 1995, her album Daydream dropped, and the song “Fantasy” soared to number one on the charts. Dare to daydream and add Pop! Mariah Carey to your Pop! Rocks set. Vinyl figure is approximately 4.17-inches tall.'
  },
  
  {
  Name: 'Bella Poarch with Axe',
  Category: 'Music Icons',
  Price: '12.00',
  ImageUrl: 'https://cdn.shopify.com/s/files/1/1052/2158/products/66455_POP_BellaPoarch_Axe_POP_GLAM-WEB.png?v=1663970775',
  Size: 'mini',
  Edition: 'exclusive',
  description: 'Celebrate the record-breaking debut of an internet sensation. The Funko exclusive Pop! Bella Poarch sports an outfit from her first music video while holding an ax. Who will this artist collaborate with in your music collection? Vinyl figure is approximately 4.2-inches tall.'
  },
  
  {
  Name: 'Whitney Houston: I Wanna Dance With Somebody',
  Category: 'Music Icons',
  Price: '12.00',
  ImageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTA7vg_WPQIXLBHVdYaYXW7TBL8n2jg_MRHMPPRrVUxnOkg2cau',
  Size: 'regular',
  Edition: 'limited',
  description: 'Step out on the dance floor with Pop! Whitney Houston, dressed in her iconic look from the “I Wanna Dance with Somebody” video. Take your Pop! Icons collection to superstar heights with Pop! Whitney Houston. Vinyl figure is approximately 4.38-inches tall.'
  },
  
  {
  Name: 'Somewhere In Time Eddie: Iron Maiden',
  Category: 'Music Icons',
  Price: '20.00',
  ImageUrl: 'https://media.gamestop.com/i/gamestop/11150554/Funko-POP-Rocks-Iron-Maiden-Eddie-Somewhere-in-Time-4.5-in-Vinyl-Figure',
  Size: 'jumbo',
  Edition: 'exclusive',
  description: 'English heavy metal band, Iron Maiden, is here to storm the stage and take over your music collection with this Pop! of Iron Maiden Somewhere in Time Eddie. Theres a 1 in 6 chance you may find the chase of Pop! Iron Maiden Stranger in a Strange Land Eddie. Vinyl figure is approximately 4.5-inches tall. '
  },
  
  {
  Name: 'TuPac Shakur: 2Pac',
  Category: 'Music Icons',
  Price: '9.00',
  ImageUrl: 'https://cdn.shopify.com/s/files/1/1052/2158/products/56738_Tupac_LoyalToTheGame_POP_GLAM-WEB.png?v=1628526660',
  Size: 'mini',
  Edition: 'general',
  description: 'Celebrate and commemorate American rapper Tupac Shakur. Never forget where it started by collecting this special Pop! Tupac. The vinyl figure is approximately 3.75-inches tall.'
  },
  
  {
  Name: 'Miles Davis',
  Category: 'Music Icons',
  Price: '12.00',
  ImageUrl: 'https://cdn.shopify.com/s/files/1/1052/2158/products/59639_Rocks_MilesDavis_Pop_GLAM-WEB.png?v=1646182696',
  Size: 'regular',
  Edition: 'general',
  description: 'Arrange your music collection and celebrate the work of ground-breaking musicians with this Miles Davis Pop! Legendary trumpet player, composer, and jazz pioneer, Miles Davis, developed a signature sound and embraced a variety of styles and influences from the 1940s all the way up until his death in 1991. In clear, iconic tones, Miles Davis music set the stage for a new sound. Vinyl figure is approximately 4-inches tall.'
  },
  
  {
  Name: 'Aaliyah',
  Category: 'Music Icons',
  Price: '12.00',
  ImageUrl: 'https://i5.walmartimages.com/asr/ef1d796b-6acc-403a-8760-9af2349064a6.47d5760917619c6a71ed23a17fcfd252.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
  Size: 'regular',
  Edition: 'general',
  description: 'The "Princess of R&B" and "Queen of Urban Pop", Aaliyah, is stepping out onto the stage of your music collection as Pop! Aaliyah. Vinyl figure is approximately 4.25-inches tall.'
  },
  
  {
  Name: 'Slash: Guns N Roses',
  Category: 'Music Icons',
  Price: '12.00',
  ImageUrl: 'https://cdn.shopify.com/s/files/1/1052/2158/products/10687_GNR_Slash_POP_GLAM-WEB.png?v=1622569699',
  Size: 'regular',
  Edition: 'general',
  description: 'Guns N Roses are about to crash the stage on your music collection with this Pop! of the legendary guitarist Slash. Collectible stands approximately 3.75-inches tall.',
  },
  
  {
  Name: 'The Denom: Kiss',
  Category: 'Music Icons',
  Price: '9.00',
  ImageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  Size: 'mini',
  Edition: 'general',
  description: 'Invite Gene Simmons into your music collection with this Pop! of his KISS persona The Demon. Collectible stands approximately 3.75-inches tall.'
  },
  
  {
    name:'DeathStroke',
    category:'DC Comics',
    imageUrl:'https://cdn.media.amplience.net/s/hottopic/14423568_hi',
    price:'12.50',
    size:'regular',
    description:'Bring your favorite DC Villain into your Batman collection with this Pop! of Deathstroke. Armed and ready to fight, he is definitely going to cause some problems.',
    edition:'exclusive',
    },
    {
      Name: "Batman (Hellbat)",
      Category: "DC Comics",
      Price: "12.50",
      ImageUrl: "http://cdn.shopify.com/s/files/1/2152/6373/products/ScreenShot2021-05-05at5.12.17PM_7455072f-83b5-4bf8-bf1c-dcfa808fe259_1200x1200.png?v=1620249286",
      Size: "regular",
      Edition: "exclusive",
      description: "Batman Funko Pop! Hellbat (Big Apple Exclusive) #373"
      },
     
      {
      Name: "flash",
      Category: "DC Comics",
      Price: "24.99",
      ImageUrl: "https://tools.toywiz.com/_images/_webp/_products/lg/popflashjimlee.webp",
      Size: "jumbo",
      Edition: "exclusive",
      description: "Pop! figures bring your favorite characters to life with a unique stylized design. Each vinyl figure stands 3.75 inches tall and comes in window box packaging, making them great for display!"
      },
     
      {
      Name: "Dr.Doom",
      Category: "Marvel",
      Price: "12.50",
      ImageUrl: "https://ultra.com.cy/images/detailed/253/u6FJRIJH9fNpsue3BrBwNvAPYByqQMsv.jpg",
      Size: "regular",
      Edition: "regular",
      description: "Funko POP: Marvel Fantastic Four #561 Doctor Doom (Fantastic Four)"
      },
     
      {
      Name: "Nova",
      Category: "Marvel",
      Price: "12.50",
      ImageUrl: "https://cdn.shopify.com/s/files/1/2528/8830/products/40171-Marvel-Nova-Metallic-POP-PX-GLAM_1024x.PNG?v=1567131489",
      Size: "regular",
      Edition: "exclusive",
      description: "Funko POP! Marvel - Nova Vinyl Figure Previews Exclusive (PX) #494"
      },
     
      {
      Name: "venom (on throne)",
      Category: "Marvel",
      Price: "24.99",
      ImageUrl: "https://m.media-amazon.com/images/I/41+TFqOv5KL._AC_SY580_.jpg",
      Size: "Jumbo",
      Edition: "exclusive",
      description: "Venom on the Throne is the next to be added to our PIAB EXC collection! We didn't think it could look any more awesome but the King in Black certainly doesn't disappoint."
      },
     
      {
      Name: "Thor",
      Category: "Marvel",
      Price: "12.50",
      ImageUrl: "https://m.media-amazon.com/images/I/61vSuQPRZCL.jpg",
      Size: "regular",
      Edition: "exclusive",
      description: "Funko Pop Marvel 2019 Spring Thor Vinyl Figure - 438"
      },
     
      {
      Name: "Obi wan kenobi (Clone Wars)",
      Category: "Star wars",
      Price: "12.50",
      ImageUrl: "https://m.media-amazon.com/images/I/615db0m8I0L.jpg",
      Size: "regular",
      Edition: "regular",
      description: "Funko Pop! Star Wars Clone Wars OBI Wan Kenobi Figure #270"
      },
      {
        Name: "Ahsoka Tano",
      Category: "Star wars",
      Price: "12.50",
      ImageUrl: "https://m.media-amazon.com/images/I/615db0m8I0L.jpg",
      Size: "regular",
      Edition: "regular",
      description: "Funko POP! The Mandalorian: Ahsoka (Hooded) figure"
   
   
      },
      {
        Name: "Cal Kestis and BD-1",
      Category: "Star wars",
      Price: "12.50",
      ImageUrl: "https://m.media-amazon.com/images/I/51XV+EqMToL.jpg",
      Size: "regular",
      Edition: "regular",
      description: "Funko - POP! Games Star Wars Jedi: Fallen Order! Cal Kestis With BD-1"
   
   
      },
   
     ]
  

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  await Promise.all(funkos.map(funko => {

    return FunkoPop.create(funko)

  }))


  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}



/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

