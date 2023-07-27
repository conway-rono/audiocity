const container=document.querySelector('.container');
const songs = [
    {
      title: "Shape of You",
      artist: "Ed Sheeran"
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd"
    },
    {
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee"
    },
    {
      title: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars"
    },
    {
      title: "Bad Guy",
      artist: "Billie Eilish"
    },
    {
      title: "Someone Like You",
      artist: "Adele"
    },
    {
      title: "Old Town Road",
      artist: "Lil Nas X ft. Billy Ray Cyrus"
    },
    {
      title: "Thinking Out Loud",
      artist: "Ed Sheeran"
    },
    {
      title: "Hello",
      artist: "Adele"
    },
    {
      title: "All About That Bass",
      artist: "Meghan Trainor"
    },
    {
      title: "Party Rock Anthem",
      artist: "LMFAO ft. Lauren Bennett, GoonRock"
    },
    {
      title: "Shake It Off",
      artist: "Taylor Swift"
    },
    {
      title: "Radioactive",
      artist: "Imagine Dragons"
    },
    {
      title: "Can't Stop the Feeling!",
      artist: "Justin Timberlake"
    },
    {
      title: "Havana",
      artist: "Camila Cabello ft. Young Thug"
    },
    {
      title: "Sicko Mode",
      artist: "Travis Scott"
    },
    {
      title: "Believer",
      artist: "Imagine Dragons"
    },
    {
      title: "Love Yourself",
      artist: "Justin Bieber"
    },
    {
      title: "Rolling in the Deep",
      artist: "Adele"
    },
    {
      title: "Gangnam Style",
      artist: "PSY"
    },
    {
      title: "Happier",
      artist: "Marshmello ft. Bastille"
    },
    {
      title: "Hotline Bling",
      artist: "Drake"
    },
    {
      title: "Dark Horse",
      artist: "Katy Perry ft. Juicy J"
    },
    {
      title: "Closer",
      artist: "The Chainsmokers ft. Halsey"
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran"
    },
    {
      title: "Rude",
      artist: "MAGIC!"
    },
    {
      title: "Poker Face",
      artist: "Lady Gaga"
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles"
    },
    {
      title: "Counting Stars",
      artist: "OneRepublic"
    },
    {
      title: "Firework",
      artist: "Katy Perry"
    },
    {
      title: "Royals",
      artist: "Lorde"
    },
    {
      title: "Stressed Out",
      artist: "twenty one pilots"
    },
    {
      title: "Wrecking Ball",
      artist: "Miley Cyrus"
    },
    {
      title: "Sugar",
      artist: "Maroon 5"
    },
    {
      title: "Love Me Like You Do",
      artist: "Ellie Goulding"
    },
    {
      title: "Cheap Thrills",
      artist: "Sia ft. Sean Paul"
    },
    {
      title: "I Will Always Love You",
      artist: "Whitney Houston"
    },
    {
      title: "Can't Feel My Face",
      artist: "The Weeknd"
    },
    {
      title: "Panda",
      artist: "Desiigner"
    },
    {
      title: "Shut Up and Dance",
      artist: "WALK THE MOON"
    },
    {
      title: "Sorry",
      artist: "Justin Bieber"
    },
    {
      title: "Lean On",
      artist: "Major Lazer & DJ Snake ft. MØ"
    },
    {
      title: "Blank Space",
      artist: "Taylor Swift"
    },
    {
      title: "Stay With Me",
      artist: "Sam Smith"
    },
    {
      title: "WAP",
      artist: "Cardi B ft. Megan Thee Stallion"
    },
    {
      title: "Roar",
      artist: "Katy Perry"
    },
    {
      title: "See You Again",
      artist: "Wiz Khalifa ft. Charlie Puth"
    },
    {
      title: "Just the Way You Are",
      artist: "Bruno Mars"
    },
    {
      title: "Viva La Vida",
      artist: "Coldplay"
    },
    {
      title: "Locked Out of Heaven",
      artist: "Bruno Mars"
    },
    // Add more songs here...
  ];
  

let content='';
function renderCards(){
    songs.forEach(e=>{
        let cardTemplate=`
        <div class="cards" id="card1">
        <div class="icon-profile">
        <div class="circle">
        <span class="material-icons" class="play-pause">
        play_arrow
        </span>
        </div>
        </div>
        <div class="song-title">
        <p>${e.title}</p>
        </div>
        <div class="artist">
        ${e.artist}
        </div>
        <div class="action-tray">
        <span class="material-icons">
        thumb_up_alt
        </span>
        <span class="material-icons">
        delete
        </span>
        </div>
        </div>
        `;
        container.innerHTML+=cardTemplate;
    })
}