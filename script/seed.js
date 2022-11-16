"use strict";

const {
  db,
  models: { User },
} = require("../server/db");
const FunkoPop = require("../server/db/models/FunkoPop");
const OrderDB = require('../server/db/models/Order')
const Order_FunkoPop = require("../server/db/models/Order_FunkoPop")

const funkos = [
  {
    name: "Stitch with Boba: Lilo and Stitch Collection",
    category: "Disney",
    price: "15.00",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/16748978_hi?$productMainDesktop$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Disney Lilo & Stitch Pop! Stitch (With Boba) Vinyl Figure Hot Topic Exclusive Do you love a nice cool boba as much as Stitch? Then you need to add this Pop! vinyl figure to your collection featuring Stitch holding a boba drink.l",
  },

  {
    name: "Sleeping Stitch: Lilo and Stitch Collection",
    category: "Disney",
    price: "12.50",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/14925870_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Disney Lilo & Stitch Pop! Sleeping Stitch Vinyl Figure Hot Topic Exclusive Get cozy with your favorite space puppy and this sleeping Stitch Pop! figure from Lilo & Stitch",
  },

  {
    name: "Kuromi (with Baku): Sanrio Collection",
    category: "Anime",
    price: "14.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/18945338_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Sanrio Pop! Kuromi (with Baku) Vinyl Figure Hot Topic Exclusive Crafty, yet cute, Pop! Kuromi with Baku wants to share her cheeky but charming side with the other members of your collection. Join forces with this exclusive Pop! Kuromi with Baku and add some sweet surprises to your Sanrio set.",
  },

  {
    name: "Games Lapras: Pokemon Collection",
    category: "Anime",
    price: "12.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/17417633_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "general",
    description:
      "Funko Pokemon Pop! Games Lapras Vinyl Figure. Your dream of becoming a Trainer is not out of reach! Catch this Pop! Lapras to add to your Pokémon collection. Gotta catch em all, right?",
  },

  {
    name: "Classics Tinker Bell: Peter Pan Collection",
    category: "Disney",
    price: "14.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/16916184_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "general",
    description:
      "Funko Disney Pop! Classics Tinker Bell Vinyl Figure Hot Topic Exclusive Tinker Bell is in a mood. This Funko Pop! from Disney features Tinker Bell sitting and looking grumpy.",
  },

  {
    name: "Alien: Toy Story Diamond Collection",
    category: "Disney",
    price: "14.50",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/13032934_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Disney Pixar Toy Story Diamond Collection Pop! Alien Vinyl Figure Hot Topic Exclusive. OOoooOoOOooo! Alien from the Toy Story films has been given a sparkly makeover as a Funko Pop! ",
  },

  {
    name: "Winnie The Pooh (Flocked): Winnie the Pooh Collection",
    category: "Disney",
    price: "15.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/19426491_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Disney Winnie The Pooh Pop! Winnie The Pooh (Flocked) Vinyl Figure Hot Topic Exclusive. A new Pop! is in bloom! Winnie the Pooh gets a cherry blossom makeover. Plus, this exclusive version is flocked.",
  },

  {
    name: "Pochacco: Sanrio Collection",
    category: "Anime",
    price: "12.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/19426425_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Sanrio Hello Kitty And Friends Pop! Pochacco Vinyl Figure Youre invited to the slumber party of your dreams! Pop! Pochacco Unicorn Party wears colorful unicorn pajamas while holding a trumpet in his hands. Collect him for a magically sweet addition to your Sanrio set.",
  },

  {
    name: "Bisky: Hunter X Hunter Collection ",
    category: "Anime",
    price: "12.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/17417605_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko Hunter X Hunter Pop! Animation Bisky Vinyl Figure Need a team to get through Greed Island with? Youll definitely want to add Bisky to your group! Join the Double-Star Stone Hunter to help clear the game. Pop! Biscuit Kreuger Hunter x Hunter might look sweet and innocent, but she would make for a powerful addition to your treasures.",
  },

  {
    name: "Soda Vanellope: Wreck-It Ralph Collection",
    category: "Disney",
    price: "14.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/19226304_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "general",
    description:
      "Funko Wreck-It Ralph Soda Vanellope Figure Pop off the lid for some refreshing fun with Vanellope. If youre lucky, you may receive a chase variant of Vanellope holding a heart-shaped cookie.",
  },

  {
    name: "Phil & Lil Deville: Rugrats",
    category: "TV",
    price: "35",
    imageUrl: "https://m.media-amazon.com/images/I/51rXC7EFHZL._AC_SX679_.jpg",
    size: "regular",
    edition: "exclusive",
    description:
      "Double the mud pie making fun with Pops! Phil and Lil Deville from Rugrats This exclusive 2-Pack of Pops! is here to help you make a delightfully terrific mess of your Pop! TV collection. Add some excitement and adventure to your Nickelodeon set. Vinyl figures are approximately 3.65-inches tall.",
  },

  {
    name: 'Sponge on the Run Squidward Tentacles: The SpongeBob Movie',
    category: 'Disney',
    price: '11.25',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/12803547_hi?$productMainDesktopRetina$',
    size: 'regular',
    edition: 'general',
    description: 'Gary the Snail has been snailnapped by Poseidon! Go on the run with SpongeBob and his friends as he heads to the Lost City of Atlantic City to save his snail pal. This fun Funko-style Squidward Tentacles figure was created just for The SpongeBob Movie: Sponge On The Run. Add it to your collection today!',
    },
    
    {
    name: 'Sponge On The Run Patrick Star: The SpongeBob Movie',
    category: 'Disney',
    price: '11.25',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/12803523_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'general',
    description: 'Gary the Snail has been snailnapped by Poseidon! Go on the run with SpongeBob and his friends as he heads to the Lost City of Atlantic City to save his snail pal. This fun Funko-style Patrick Star figure was created just for The SpongeBob Movie: Sponge On The Run. Add it to your collection today!',
    },
    
    {
    name: 'My Melody Ochaco: My Hero Academia X Hello Kitty',
    category: 'TV',
    price: '10.00',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/12651663_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'general',
    description: 'Funko My Hero Academia X Hello Kitty And Friends Pop! My Melody Ochaco Vinyl Figure. The all new Sanrio Funko Pop! vinyl are here! BadtzMaru-Katsuki is here to join your collection! Here you can find the popular and classic My Melody mixed in with MHAs bubbly, lovable and funny Ochaco!'
    },
    
    {
    name: 'Holiday Stitch: Lilo & Stitch Collection',
    category: 'Disney',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/18538210_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Mele Kalikimaka from everyones favorite extraterrestrial experiment! Stitch is jumping into the holiday spirit as this Funko Soda figure. Dressed in Santas hat and clothes, Stitch waves hello as he embraces one of Earths most cherished traditions. If youre lucky, you may receive the chase of Stitch holding Lilos doll, Scrump!',
    },
    
    {
    name: 'Itchy & Scratchy (Skeleton): The Simpsons Halloween Collection ',
    category: 'TV',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/18049952_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Halloween just took a weird turn at the Simpsons household! Itchy and Scratchy have been transformed due to a Treehouse of Horror twist of events. Itchy is depicted holding a platter with a brain and Scratchy is depicted wearing a skeleton costume and pulling off his head. Get in the Halloween spirit and display Pop! Itchy & Scratchy on your shelf... if you dare!',
    },
    
    {
    name: 'Television Blue (Flocked): Nickelodeon Blues Clues',
    category: 'TV',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/15848625_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Blue is back and still the cutest after all these years. Funko has given Steves bestie from Blues Clues a makeover as a fuzzy, flocked Pop! Add her to your collection today.',
    },
    
    {
    name: 'Belle: Princess Diamond Collection',
    category: 'Disney',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/16260449_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Be our guest and add this Pop! to your Beauty and the Beast collection. It features a sparkly version of Belle reading a book.',
    },
    
    {
    name: 'Moment Lilo & Stitch In Hammock: Lilo and Stitch Collection',
    category: 'Disney',
    price: '32.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/17147922_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Kick back with your ohana. This Pop! Moment from Disney features Lilo and Stitch sitting in a hammock with Lilo playing the ukulele.',
    },
    
    {
    name: 'Bambi: Disney Classics Collection',
    category: 'Disney',
    price: '15.00',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/18009431_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'general',
    description: 'Funko Disney Classics Pop! Bambi Vinyl Figure Funko Summer Convention Exclusive. Is your Funko collection missing some woodland cuties? Pop! Bambi is here to prance his way onto your shelves! This vinyl figure depicts Bambi admiring a butterfly resting on his tail.',
    },
    
    {
    name: 'Hula Stitch: Lilo and Stitch Collection',
    category: 'Disney',
    price: '12.50',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/12165321_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Its time to boogie down with Stitch! Hula Stitch is here to bring sunshine and aloha to your collectibles shelf. He matches his bestie, Hula Lilo, perfectly now that hes been given the ultimate Funko Pop! makeover.',
    },
    
    {
    name: 'Penny: The Proud Family Collection',
    category: 'TV',
    price: '12.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/19149225_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Our queen Penny Proud has gotten a Funko makeover. Add her to your collectibles shelf today next to Dijonay and her dad, Oscar.',
    },
    
    {
    name: 'PhilharMagic Mickey Mouse: Disney Walt Disney World 50th Diamond Collection',
    category: 'Disney',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/16260445_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Mickey is ready to conduct the PhilharMagic orchestra as this Pop! collectible. Bring Walt Disney World home with the new Walt Disney World Resort 50th Anniversary collection!',
    },
    
    {
    name: 'Suga Mama (With Puff): The Proud Family Collection',
    category: 'TV',
    price: '12.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/19149229_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'general',
    description: 'Suga Mama and her beloved Puff have gotten a Funko makeover! Pennys grandma is here to watch over the rest of your The Proud Family: Louder And Prouder Pops',
    },
    
    {
    name: 'Luffy Kimono (Metallic): One Piece Collection',
    category: 'Anime',
    price: '12.50',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/14418972_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Greatest treasure on Earth? This Pop! vinyl figure from One Piece featuring Luffy in a kimono with a metallic finish.',
    },
    
    {
    name: 'My Melody: Sanrio Collection',
    category: 'TV',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/18049965_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Get ready to show off this exclusive Pop! My Melody figure at your next slumber party! My Melodys all ready for the sleepover too, and shes depicted in a sitting position while rocking her cutest slumber party outfit and wearing a bow covered in hearts.',
    },
    
    {
    name: 'True Heart Bear: Funko Care Bears 40th Anniversary Collection',
    category: 'TV',
    price: '12.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/19149237_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Its no lie—the truth is Pop! True Heart Bear wants to join your Pop! Animation collection to celebrate the 40th anniversary of Care Bears. With a message that truth shines from the inside, from the heart, Pop! True Heart Bear finds lots of beautiful ways to show she cares. If youre lucky, you may receive a translucent glitter chase variant.',
    },
    
    {
    name: 'Care-A-Lot Bear: Funko Care Bears 40th Anniversary Collection',
    category: 'TV',
    price: '12.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/19149235_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'The Caring Meter is set all the way to “rainbow” in the Kingdom of Caring. Take the sunshine with you and celebrate 40 years of Caring with this Care Bears 40th Anniversary Pop! Care-A-Lot Bear.  If youre lucky, you may receive a translucent glow-in-the-dark chase variant.',
    },
    
    {
    name: 'Wish Bear: Funko Care Bears 40th Anniversary Collection',
    category: 'TV',
    price: '14.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/16748980_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Make a wish! This Diamond Collection Pop! Wish Bear loves nothing more than to help you make it come true. And, at the top of this Pop! Wish Bears list is to join your Pop! Animation collection and help celebrate the Care Bears 40th anniversary. Pop! Wish Bear glitters and sparkles, especially for this occasion.',
    },
    
    {
    name: 'SpongeBob Weightlifter: SpongeBob Squarepants Collection',
    category: 'Movie',
    price: '12.50',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/14232474_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Make sure your collection is in top physical condition by adding this Pop! vinyl figure featuring SpongeBob lifting a stuffed animal barbell.',
    },
    
    {
    name: 'Cinnamoroll (Flocked): Sanrio Hello KItty Collection',
    category: 'TV',
    price: '15.90',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/19187480_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Sanrios plump puppy, Cinnamoroll, is the official mascot of Café Cinnamon and his cute curled tail looks similar to the sweet treat. Hes a bit shy but hes ready to join the Sanrio Unicorn Party collection. This version is flocked! Invite your sweet friend to join your set today.',
    },
    
    {
    name: 'Kaoru Hitachiin & Hikaru Hitachiin: Ouran High School Host Club Collection',
    category: 'Anime',
    price: '30.00',
    imageUrl: 'https://cdn.media.amplience.net/i/hottopic/18837237_av2?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Lets all play the "Which one is Hikaru?" game! Think you can figure out which twin is which? Add your fave hosts to your Ouran High School Host Club collection! Kaoru and Hikaru Hitachiin have been given a Pop! makeover, and theyre ready to come home with you as a set.',
    },
    
    {
    name: 'Kyo With Cat: Fruit Basket Collection',
    category: 'Anime',
    price: '12.50',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/14065387_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Kyo in his human and his zodiac forms to add to your Fruits Basket collection with these stylized Pop!s from Funko. Just keep him away from your Yuki figures!'
    },
    
    {
    name: 'Mickey Mouse (Trick-Or-Treat): Disney Collection',
    category: 'Disney',
    price: '11.61',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/18050791_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Fresh from the pumpkin patch, Pop! Mickey Mouse is ready to go trick-or-treating! Full of Halloween spirit, Mickey Mouse is depicted dressed in a jack-o-lantern costume. Add him as a sweet treat to your Disney set today!',
    },
    
    {
    name: 'Television Snail Lisa: The Simpsons Halloween Collection',
    category: 'TV',
    price: '11.61',
    imageUrl: 'https://cdn.media.amplience.net/s/hottopic/18050781_hi?$productMainTabletRetina$',
    size: 'regular',
    edition: 'exclusive',
    description: 'Halloween just took a weird turn at the Simpsons household! Lisas been transformed due to a Treehouse of Horror twist of events. Shes depicted with an unamused expression on her face. Get in the Halloween spirit and display Pop! Snail Lisa on your shelf... if you dare!',
    },
    
  {
    name: "Geralt with Chase: Witcher",
    category: "Movies",
    price: "11.99",
    imageUrl: "https://m.media-amazon.com/images/I/51f6cBK8cxL._AC_SL1300_.jpg",
    size: "regular",
    edition: "general",
    description:
      "Help Pop! Geralt find Ciri. Together they can tackle their connected destiny and complete your collection of The Witcher. Theres a 1 in 6 chance you may find the chase variant of Pop! Geralt with potion influenced black eyes",
  },

  {
    name: "Faith +1 Cartman: South Park",
    category: "TV",
    price: "21.79",
    imageUrl: "https://m.media-amazon.com/images/I/51ju-+slytL._AC_SL1000_.jpg",
    size: "regular",
    edition: "general",
    description:
      "From South Park, Faith +1 Cartman, as a stylized Pop. Stylized collectable stands 3 ¾ inches tall, perfect for any South Park fan. Collect and display all South Park POP Vinyl",
  },

  {
    name: "Chief Wiggum: Simpsons",
    category: "TV",
    price: "27.00",
    imageUrl: "https://m.media-amazon.com/images/I/61sbw3mF7TL._AC_SL1300_.jpg",
    size: "regular",
    edition: "exclusive",
    description:
      "The Simpsons animated sitcom television show has been on-going since 1989. Relive, reminisce, and bring the family together for your collection with the The Simpsons Pop! Chief Wiggum. Vinyl figure is approximately 4.15-inches tall.",
  },

  {
    name: "Prison Mike: The Office",
    category: "TV",
    price: "14.70",
    imageUrl: "https://m.media-amazon.com/images/I/51g5pw554jL._AC_UY879_.jpg",
    size: "mini",
    edition: "limited",
    description:
      "From The Office, Prison Mike, as a stylized Pocket Pop! Keychain. Stylized collectable stands 1.5 inches tall, perfect for any The Office fan!",
  },

  {
    name: "Elle with Bruiser: Legally Blonde",
    category: "Movies",
    price: "11.99",
    imageUrl: "https://m.media-amazon.com/images/I/51ziclrp1OL._AC_SL1012_.jpg",
    size: "jumbo",
    edition: "exclusive",
    description:
      'Elle Woods is out to prove that shes not "too blonde" by getting into Harvard Law School and establishing shes an intellect to be reckoned with in the 2001 hit movie, Legally Blonde.',
  },

  {
    name: "Chamber of Secrets: Harry Potter",
    category: "Movies",
    price: "12.99",
    imageUrl: "https://m.media-amazon.com/images/I/610QJJ8He7L._AC_SL1500_.jpg",
    size: "jumbo",
    edition: "limited",
    description:
      "From Harry Potter, Chamber of Secrets, Harry Potter as a stylized POP from Funko! Stylized collectible is perfect for any Harry Potter fan! Collect and display all Harry Potter Funko Pops!",
  },

  {
    name: "Dobby: Harry Potter",
    category: "Movies",
    price: "11.99",
    imageUrl: "https://m.media-amazon.com/images/I/513o0c4APtL._AC_SL1500_.jpg",
    size: "regular",
    edition: "general",
    description:
      "Welcome home one of the most well-known and lovable house elves of the Wizarding World with this Pop! Dobby holding the dairy with its hidden sock!",
  },

  {
    name: "Dustin: Stranger Things",
    category: "TV",
    price: "14.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/17147916_hi?$productMainDesktopRetina$",
    size: "regular",
    edition: "general",
    description:
      "Hawkins, Indiana is harboring dangerous and supernatural secrets. Bring home the happenings, characters, and breakthrough moments of Stranger Things with your own Pop! Dustin vinyl figure.",
  },

  {
    name: "Sonny Corleone: The Godfather",
    category: "TV",
    price: "12.90",
    imageUrl:
      "https://cdn.media.amplience.net/s/hottopic/16955970_hi?$productMainDesktopRetina$",
    size: "jumbo",
    edition: "exclusive",
    description:
      "Celebrate the 50th anniversary of Francis Ford Coppolas The Godfather by uniting the members of the cast. Here, Pop! Sonny Corleone, trash can lid in hand, commemorates an iconic scene of revenge.",
  },

  {
    name: "Jimin from Butter: BTS",
    category: "Music Icons",
    price: "20.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/64044_BTS_JiminButter_POP_GLAM-WEB.png?v=1655940495",
    size: "jumbo",
    edition: "exclusive",
    description:
      "Your music collection may melt at the sight of these Pop! figures for BTS! Pop! Jimin strikes a criminally stunning pose while holding a mugshot sign. Invite this member of BTS to stage a performance in your collection as a Funko Pop! figure! Vinyl figure is approximately 4.1-inches tall.",
  },

  {
    name: "Mariah Carey: Fantasy",
    category: "Music Icons",
    price: "12.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/64057a_MariahCarey_Fantasy_POP_GLAM-1-WEB.png?v=1656516679",
    size: "regular",
    edition: "limited",
    description:
      "Lace up your skates and roll along with Pop! Mariah Carey! Pop! Mariah Carey wears her signature look from her music video for “Fantasy,” which was her directorial debut. In 1995, her album Daydream dropped, and the song “Fantasy” soared to number one on the charts. Dare to daydream and add Pop! Mariah Carey to your Pop! Rocks set. Vinyl figure is approximately 4.17-inches tall.",
  },

  {
    name: "Bella Poarch with Axe",
    category: "Music Icons",
    price: "12.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/66455_POP_BellaPoarch_Axe_POP_GLAM-WEB.png?v=1663970775",
    size: "mini",
    edition: "exclusive",
    description:
      "Celebrate the record-breaking debut of an internet sensation. The Funko exclusive Pop! Bella Poarch sports an outfit from her first music video while holding an ax. Who will this artist collaborate with in your music collection? Vinyl figure is approximately 4.2-inches tall.",
  },

  {
    name: "Whitney Houston: I Wanna Dance With Somebody",
    category: "Music Icons",
    price: "12.00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTA7vg_WPQIXLBHVdYaYXW7TBL8n2jg_MRHMPPRrVUxnOkg2cau",
    size: "regular",
    edition: "limited",
    description:
      "Step out on the dance floor with Pop! Whitney Houston, dressed in her iconic look from the “I Wanna Dance with Somebody” video. Take your Pop! Icons collection to superstar heights with Pop! Whitney Houston. Vinyl figure is approximately 4.38-inches tall.",
  },

  {
    name: "Somewhere In Time Eddie: Iron Maiden",
    category: "Music Icons",
    price: "20.00",
    imageUrl:
      "https://media.gamestop.com/i/gamestop/11150554/Funko-POP-Rocks-Iron-Maiden-Eddie-Somewhere-in-Time-4.5-in-Vinyl-Figure",
    size: "jumbo",
    edition: "exclusive",
    description:
      "English heavy metal band, Iron Maiden, is here to storm the stage and take over your music collection with this Pop! of Iron Maiden Somewhere in Time Eddie. Theres a 1 in 6 chance you may find the chase of Pop! Iron Maiden Stranger in a Strange Land Eddie. Vinyl figure is approximately 4.5-inches tall. ",
  },

  {
    name: "TuPac Shakur: 2Pac",
    category: "Music Icons",
    price: "9.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/56738_Tupac_LoyalToTheGame_POP_GLAM-WEB.png?v=1628526660",
    size: "mini",
    edition: "general",
    description:
      "Celebrate and commemorate American rapper Tupac Shakur. Never forget where it started by collecting this special Pop! Tupac. The vinyl figure is approximately 3.75-inches tall.",
  },

  {
    name: "Miles Davis",
    category: "Music Icons",
    price: "12.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/59639_Rocks_MilesDavis_Pop_GLAM-WEB.png?v=1646182696",
    size: "regular",
    edition: "general",
    description:
      "Arrange your music collection and celebrate the work of ground-breaking musicians with this Miles Davis Pop! Legendary trumpet player, composer, and jazz pioneer, Miles Davis, developed a signature sound and embraced a variety of styles and influences from the 1940s all the way up until his death in 1991. In clear, iconic tones, Miles Davis music set the stage for a new sound. Vinyl figure is approximately 4-inches tall.",
  },

  {
    name: "Aaliyah",
    category: "Music Icons",
    price: "12.00",
    imageUrl:
      "https://i5.walmartimages.com/asr/ef1d796b-6acc-403a-8760-9af2349064a6.47d5760917619c6a71ed23a17fcfd252.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    size: "regular",
    edition: "general",
    description:
      'The "Princess of R&B" and "Queen of Urban Pop", Aaliyah, is stepping out onto the stage of your music collection as Pop! Aaliyah. Vinyl figure is approximately 4.25-inches tall.',
  },

  {
    name: "Slash: Guns N Roses",
    category: "Music Icons",
    price: "12.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/10687_GNR_Slash_POP_GLAM-WEB.png?v=1622569699",
    size: "regular",
    edition: "general",
    description:
      "Guns N Roses are about to crash the stage on your music collection with this Pop! of the legendary guitarist Slash. Collectible stands approximately 3.75-inches tall.",
  },

  {
    name: "The Demon: Kiss",
    category: "Music Icons",
    price: "9.00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41aOa6qV7CL._AC_SY580_.jpg",
    size: "mini",
    edition: "general",
    description:
      "Invite Gene Simmons into your music collection with this Pop! of his KISS persona The Demon. Collectible stands approximately 1.75-inches tall.",
  },

  {
    name: "DeathStroke",
    category: "DC Comics",
    imageUrl: "https://cdn.media.amplience.net/s/hottopic/14423568_hi",
    price: "12.50",
    size: "regular",
    edition: "exclusive",
    description:
      "Bring your favorite DC Villain into your Batman collection with this Pop! of Deathstroke. Armed and ready to fight, he is definitely going to cause some problems.",
  },

  {
    name: "Batman: Hellbat",
    category: "DC Comics",
    price: "12.50",
    imageUrl:
      "http://cdn.shopify.com/s/files/1/2152/6373/products/ScreenShot2021-05-05at5.12.17PM_7455072f-83b5-4bf8-bf1c-dcfa808fe259_1200x1200.png?v=1620249286",
    size: "regular",
    edition: "exclusive",
    description: "Batman Funko Pop! Hellbat (Big Apple Exclusive) #373",
  },

  {
    name: "Flash",
    category: "DC Comics",
    price: "24.99",
    imageUrl:
      "https://tools.toywiz.com/_images/_webp/_products/lg/popflashjimlee.webp",
    size: "jumbo",
    edition: "exclusive",
    description:
      "Pop! figures bring your favorite characters to life with a unique stylized design. Each vinyl figure stands 3.75 inches tall and comes in window box packaging, making them great for display!",
  },

  {
    name: "The Joker as Santa pin",
    category: "DC Comics",
    price: "15",
    imageUrl: "https://bbts1.azureedge.net/images/p/full/2022/11/8f2f9401-328d-420a-9b6e-9b3f7be8c208.jpg",
    size: "mini",
    edition: "exclusive",
    description: "Ready for a holiday surprise? The Joker™ has packed a bag full of tricks to share with the city of Gotham. Bring this festive fiend home to your DC collection as a Pop! Pin, and there’s a 1 in 12 chance you may find the textured chase! Enamel pin features shiny gold-colored hardware and a built-in stand. Pin is approximately 4-inches tall. Chase variants are shipped at random. Receiving a chase with purchase is not guaranteed."  
  },

  {
    name: "Batman as Ebenezer Scrooge pin",
    category: "DC Comics",
    price: "15",
    imageUrl: "https://media.entertainmentearth.com/assets/images/13f8d87d8eca4bbbb08690b75c84fd4cxl.jpg",
    size: "mini",
    edition: "exclusive",
    description: "Spirits of past, present, or future are no match for Pop! Pin Batman, dressed as Ebenezer Scrooge. Display your holiday spirit, in superhero style with this Funko Loungefly Pop! pin. The Winged Crusader™ in Pop! pin form, wears his pajamas over his Batsuit and carries a candle to light the way. Expand your DC Comics set in festive holiday fashion. Enamel pin features gold-colored hardware and a built-in stand. Pin is approximately 4-inches tall."  
  },

  {
    name: "The Flash Holiday Dash pin",
    category: "DC Comics",
    price: "15",
    imageUrl: "https://media.entertainmentearth.com/assets/images/db91c814fb244225be875b7da0626bdaxl.jpg",
    size: "mini",
    edition: "exclusive",
    description: "Dash through the snow with a heroic favorite! The Flash™ is saving the holiday season dressed in a festive version of his hero suit. Bring home The Flash Holiday Dash Pop! Pin to host some reindeer games in your DC Comics collection! Enamel pin features shiny gold-colored hardware and a built-in stand. Pin is approximately 4-inches tall."
  },

  {
    name: "Holiday Harley Quinn pin",
    category: "DC Comics",
    price: "15",
    imageUrl: "https://media.entertainmentearth.com/assets/images/a3eebc145ae945db8a3ffd0bca6fa222xl.jpg",
    size: "mini",
    edition: "exclusive",
    description: "Crush the holiday rush with this Pop! Pin Harley Quinn, dressed in festive style, waiting for her Puddin’. Punch up your holiday look by displaying your DC Superheroes fandom with Loungefly Funko Pop! Pin flair. Enamel pin features gold-colored hardware and a built-in stand. Pin is approximately 4-inches tall." 
  },

  {
    name: "Spike Spiegel: Cowboy Bebop",
    category: "Anime",
    price: "12",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/58024_Animation_CowboyBebop_SpikewWeaponSword_POP_GLAM-WEB.png?v=1660946842",
    size: "regular",
    edition: "limited",
    description: "Your Cowboy Bebop collection is at risk of falling prey to toxic fridge monsters born of spoiled Ganymede rock lobsters. Call in Pop! Spike Spiegel, armed with a net gun and sword, to hunt down and collect the bounty on collection intruders. He may even accept a good meal as payment if you're out of Woolongs. Vinyl figure is approximately 4.12-inches tall." 
  },

  {
    name: "Jet Black: Cowboy Bepop",
    category: "Anime",
    price: "12",
    imageUrl: "https://media.entertainmentearth.com/assets/images/2e4f02f4bf974f4ead18153f6a13f75bxl.jpg",
    size: "regular",
    edition: "limited",
    description: "Help your Cowboy Bebop collection find a moment of zen with Pop! Jet holding one of his beloved Bonsai in hand, perfectly pruned. No Cowboy Bebop collection is complete without Pop! Jet Black. Vinyl figure is approximately 3.9-inches tall. " 
  },

  {
    name: "Faye Valentine: Cowboy Bepop",
    category: "Anime",
    price: "12",
    imageUrl: "https://media.entertainmentearth.com/assets/images/062cf352d4584a9eaf29aa1197d25fcdxl.jpg",
    size: "regular",
    edition: "limited",
    description:"Feeling full of herself, Faye breaks away from Spike and Jet to try an capture the bounty they're after for herself. Following a lead which takes her to an opera house, Faye can be found in a red dress in Session # 5 'Ballad of Fallen Angels' in Cowboy Bebop. Don’t miss your chance to capture this criminal for your Cowboy Bebop collection as Pop! Faye Valentine (Red Dress). Whether she stands alone in your collection or with the rest of the Bebop crew, you won’t want to miss your chance to collect this bounty. Vinyl figure is approximately 4.28-inches tall."
  },

  {
    name: "Ed & Ein on Scooter: Cowboy Bepop",
    category: "Anime",
    price: "5",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/59469_Animation_CowboyBebop_Ed_Keychain_GLAM-WEB.png?v=1660946836",
    size: "mini",
    edition: "exclusive",
    description: "Ed and Ein are on the go. With Ein the pup packed, Edward is pushing off to pursue your Cowboy Bebop collection in Pop! Keychain form. Act fast to catch this Welsh Corgi data dog and the oh-so-mysterious hacker, as Pop! Keychain Ed and Ein on Scooter for your Cowboy Bebop collection. Vinyl keychain is approximately 4-inches long."  
  },

  {
    name: "Tanjiro Kamado: Demon Slayer",
    category: "Anime",
    price: "15",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/49010_DemonSlayer_TanjiroKamado_POP_GLAM-WEB.png?v=1621894597",
    size: "jumbo",
    edition: "exclusive",
    description:''  
  },

  {
    name: "Nezuko Kamado: Demon Slayer",
    category: "Anime",
    price: "15",
    imageUrl: "https://i5.walmartimages.com/asr/4d79dec3-4b0f-4612-b527-cdd0d3500038.2361298d8ab221be6da33e029c89cc63.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    size: "jumbo",
    edition: "exclusive",
    description: "Only two of the Kamado family survived a demon attack, and now Tanjiro and Nezuko are out for revenge. Expand your Demon Slayer collection with Pop! Nezuko Kamado. Vinyl figure is approximately 3.5-inches tall."  
  },

  {
    name: "Inosuke Hashibira: Demon Slayer pin",
    category: "Anime",
    price: "12",
    imageUrl: "https://s7.orientaltrading.com/is/image/OrientalTrading/PDP_VIEWER_IMAGE/funko-pop-pin-demon-slayer-inosuke-hashibira~14287653$NOWA$",
    size: "mini",
    edition: "limited",
    description: "Sharpen your demon-slaying skills with Inosuke Hashibira as this Loungefly Demon Slayer Pop! Pin. In the dark, Pop! Pin Inosuke Hashibira’s blue eyes glow! There’s a 1 in 12 chance you may find the flocked chase variant, which also has blue eyes that glow in the dark. Pin features molded details on the 3D swords, shiny silver-colored hardware, and a built-in stand. Enamel pin is approximately 4-inches tall."  
  },

  {
    name: "Sasuke: Naruto Shippuden",
    category: "Anime",
    price: "12",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/6367_Naruto_Sasuke_POP_GLAM-WEB.png?v=1623080930",
    size: "regular",
    edition: "general",
    description: "As one of the last surviving members of the Uchiha clan, Sasuke makes it his mission to avenge his people and becomes close friends with Naruto Uzumaki along the way. Your Naruto collection would not be complete without Pop! Sasuke standing beside Naruto. Collectible stands approximately 3.75-inches tall."  
  },

  {
    name: "Pain: Naruto Shippuden",
    category: "Anime",
    price: "12",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/49807_Naruto_Pain_POP_GLAM-WEB.png?v=1615497181",
    size: "regular",
    edition: "general",
    description: "Nagato sought to bring peace to a violent world, but ended up slipping down a dark path of trying to establish peace by force and taking on the name Pain. Add Pop! Pain to your Naruto: Shippuden collection so that Naruto can show him a better way to bring peace to the land. Vinyl figure is approximately 5-inches tall."  
  },

  {
    name: "Kakashi: Naruto Shippuden",
    category: "Anime",
    price: "12",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/12450_Naruto_Kakashi_POP_GLAM-WEB.png?v=1611868656",
    size: "regular",
    edition: "general",
    description: "Kakashi is a skilled and famed shinobi of Konoha. Bring Pop! Kakashi into your Naruto collection to help protect against another shinobi war within your collection’s ranks. Vinyl figure is approximately 5-inches tall."
  },

  {
    name: "Naruto Uzumaki: Naruto Shippuden",
    category: "Anime",
    price: "12",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/1436_3266_8d784b0b61ea3a0_46626_Naruto_NarutoRunning_POP_GLAM-WEB.png?v=1615486607",
    size: "regular",
    edition: "general",
    description: "Naruto is charging straight into your Naruto Shippuden set. Own your own Pop! Vinyl of Naruto in his iconic running stance. Collectible stands 3.75-inches tall." 
  },

  {
    name: "Kurama: Naruto Shippuden",
    category: "Anime",
    price: "20",
    imageUrl: "https://m.media-amazon.com/images/I/51TZ+IXxE7L.jpg",
    size: "jumbo",
    edition: "exclusive",
    description: "Also known as the Nine-Tails, Kurama is a demon creature able to wield chakra to perform deadly attacks. This beast was sealed into Naruto Uzumaki but now is your chance to collect the creature for your Naruto collection as Super Pop! Kurama. Vinyl figure is 6-inches tall."
  },

  {
    name: "Goku: Drago Ball Z",
    category: "Anime",
    price: "12",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FFunko-POP-Animation-Dragon-Ball%2Fdp%2FB07MZQ36RG&psig=AOvVaw1EugzZuYhf6kidplKgZ1_0&ust=1668688152980000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiF6PbZsvsCFQAAAAAdAAAAABAG",
    size: "regular",
    edition: "general",
    description: "As an infant, Goku was sent to destroy Earth but ended up becoming one of the planet's greatest heroes after a head injury rid the young Saiyan of his senselessly destructive nature. Your Dragon Ball Z collection wouldn't be the same without it's warrior protagonist, Goku, in Pop! form to protect it from attackers. Collectible stands approximately 3.75-inches tall."  
  },

  {
    name: "Super Saiyan Goku: Drago Ball Z",
    category: "Anime",
    price: "15",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/48600_DragonBallZ_GokuSuperSaiyan_POP_GLAM-WEB.png?v=1604602489",
    size: "regular",
    edition: "exclusive",
    description: "As an infant, Goku was sent to destroy Earth but ended up becoming one of the planet's greatest heroes after the young Saiyan was rid of his senselessly destructive nature. Your Dragon Ball Z collection wouldn't be the same without it's warrior protagonist Goku, in his first appearance in Super Saiyan form, as a Pop! to protect it from attackers. Vinyl figure is approximately 5-inches tall."  
  },

  {
    name: "Aang with Momo: The Last Airbender",
    category: "Anime",
    price: "14",
    imageUrl: "https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_36463_Avatar_AangWithMomo_POP_WEB.png?v=1624918459",
    size: "regular",
    edition: "general",
    description: "Aang was told he was the next Avatar at only 12 years old. While trying to flee, Aang was encased in ice and survived to be broken out after a century to restore balance to the world. Collect Pop! Aang and Momo to restore balance to your collection of Avatar: The Last Airbender. Vinyl figure is approximately 5.75-inches tall."  
  },

  {
    name: "Haise Sasaki: Tokyo Ghoul:Re",
    category: "Anime",
    price: "12",
    imageUrl: "https://media.gamestop.com/i/gamestop/11136189/Funko-POP-Animation-Tokyo-Ghoulre-Haise-Sasaki-Vinyl-Figure",
    size: "regular",
    edition: "limited",
    description: "After being attacked Ken Kaneki is on the run and stuck between the worlds of humans and ghouls. Help Pop! Ken Kaneki, or Haise Sasaki, find where he belongs by adding him to your Tokyo Ghoul collection. Vinyl figure is approximately 3.75-inches tall."
  },

  {
    name: "Dr.Doom",
    category: "Marvel",
    price: "12.50",
    imageUrl:
      "https://ultra.com.cy/images/detailed/253/u6FJRIJH9fNpsue3BrBwNvAPYByqQMsv.jpg",
    size: "regular",
    edition: "general",
    description:
      "Funko POP: Marvel Fantastic Four #561 Doctor Doom (Fantastic Four)",
  },

  {
    name: "Nova",
    category: "Marvel",
    price: "12.50",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2528/8830/products/40171-Marvel-Nova-Metallic-POP-PX-GLAM_1024x.PNG?v=1567131489",
    size: "regular",
    edition: "exclusive",
    description:
      "Funko POP! Marvel - Nova Vinyl Figure Previews Exclusive (PX) #494",
  },

  {
    name: "Venom (on throne)",
    category: "Marvel",
    price: "24.99",
    imageUrl: "https://m.media-amazon.com/images/I/41+TFqOv5KL._AC_SY580_.jpg",
    size: "jumbo",
    edition: "exclusive",
    description:
      "Venom on the Throne is the next to be added to our PIAB EXC collection! We didn't think it could look any more awesome but the King in Black certainly doesn't disappoint.",
  },

  {
    name: "Thor",
    category: "Marvel",
    price: "12.50",
    imageUrl: "https://m.media-amazon.com/images/I/61vSuQPRZCL.jpg",
    size: "regular",
    edition: "exclusive",
    description: "Funko Pop Marvel 2019 Spring Thor Vinyl Figure - 438",
  },

  {
    name: "Obi Wan Kenobi: Clone Wars",
    category: "Star Wars",
    price: "12.50",
    imageUrl: "https://m.media-amazon.com/images/I/615db0m8I0L.jpg",
    size: "regular",
    edition: "general",
    description: "Funko Pop! Star Wars Clone Wars OBI Wan Kenobi Figure #270",
  },
  {
    name: "Ahsoka Tano",
    category: "Star Wars",
    price: "12.50",
    imageUrl: "https://m.media-amazon.com/images/I/71Td0CPs2GL.jpg",
    size: "regular",
    edition: "general",
    description: "Funko POP! The Mandalorian: Ahsoka (Hooded) figure",
  },
  {
    name: "Cal Kestis and BD-1",
    category: "Star Wars",
    price: "12.50",
    imageUrl: "https://m.media-amazon.com/images/I/51XV+EqMToL.jpg",
    size: "regular",
    edition: "general",
    description:
      "Funko - POP! Games Star Wars Jedi: Fallen Order! Cal Kestis With BD-1",
  },
  {
    name: "Iron Man",
    category: "Marvel",
    price: "70.00",
    imageUrl: "https://m.media-amazon.com/images/I/61-IpUOEa4L.jpg",
    size: "jumbo",
    edition: "exclusive",
    description:
      "Iron Man Mark 43 from Avengers Age of Ultron Figure stands approximately 10-inches tall Glows in the dark",


  }




];

const Orders = [
  {
    totalPrice: "30.00",
    shippingAddress: "101 main street",
    orderStatus: "Cart",
    userId: 1,
    id:1
  },
  {
    totalPrice: "100.00",
    shippingAddress: "123 main street",
    orderStatus: "Cart",
    userId: 2,
    id:2

  },
  {
    totalPrice: "24.00",
    shippingAddress: "101 Red street",
    orderStatus: "Shipping",
    userId: 2,
    id:3

  },
  {
    totalPrice: "50.00",
    shippingAddress: "123 First street",
    orderStatus: "Complete",
    userId: 2,
    id:4

  },
]

const OrderDetails = [
  {
    orderId: 1,
    FunkoPopId: 1,
    quantity: 2,
    funkoPrice: 15,
  },
  {
    orderId: 2,
    FunkoPopId: 24,
    quantity: 2,
    funkoPrice: 20,
    FunkoPopId: 24
  },
  {
    orderId: 2,
    FunkoPopId: 25,
    quantity: 3,
    funkoPrice: 20,
    FunkoPopId: 25
  }
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
    User.create({
      username: "cody",
      userType: 'admin',
      password: "123",
      firstName: "Cody",
      lastName: "Wagner",
      email: "codyWagner@gmail.com",
      id:1
    }),
    User.create({
      username: "murphy",
      userType: 'general',
      password: "123",
      firstName: "Murphy",
      lastName: "White",
      email: "murphyWhite@gmail.com",
      id:2
    }),
  ]);

  await Promise.all(Orders.map(Order => {

    return OrderDB.create(Order)

  }))

  await Promise.all(OrderDetails.map(OrderDetails => {

    return Order_FunkoPop.create(OrderDetails)
    
  }))
  

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