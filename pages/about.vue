<template>
  <div class="about-page-container" :style="{
      backgroundSize:`${70 + parseInt(scroll / 6)}vh`
    }">
    <NavBar></NavBar>
    <div class="about-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
      <div class="container">
        <div class="container about-body center">
          <h3>Dog Company</h3>
          <p>
            Dog company was formed in 2006 by former members of Dallas, Tx based band, "The Staggers". Joe Blow, along with long-time bassist, Matt Schrader, formed Dog Company with the hopes of returning to their more traditional punk rock roots.
          </p>

          <p>
            Current members include Front man, Lead Vocals and Rhythm Guitar: Joe Blow, Lead Guitar and Backing Vocals: Garrett Chapman, Bass Guitar and Backing Vocals: Shea Close, and most recent addition, Drums and Backing Vocals: Mick Villareal.
          </p>
          <div class="container-fluid">
            <a href="https://www.facebook.com/dogcompany/">
              <img alt="facebook logo" src="facebook-logo.svg " style="height: 3vh;" />
            </a>
            <a href="http://www.pandora.com/dog-company">
              <img alt="pandora logo" src="pandora-letter-logo.svg " style="height: 3vh;" />
            </a>
            <a href="https://twitter.com/sheaclose">
              <img alt="Twitter logo" src="twitter-logo.svg" style="height: 3vh;" />
            </a>
            <a href="https://www.youtube.com/user/DogCompanyDtx">
              <img alt="youtube logo" src="youtube-logo.svg" style="height: 3vh;" />
            </a>
            <a href="mailto:DogCompanydtx@gmail.com">
              <i class="material-icons" style="font-size: 3vh; color: black">email</i>
            </a>
            <a href="http://www.bandsintown.com/DogCompany">
              <img alt="bands in town logo" style="height: 3vh;" src="bandsintown-icon-white-on-green.svg" />
            </a>
            <a href="https://www.reverbnation.com/dogcompany">
              <img alt="reverb nation logo" style="height: 3vh;" src="ReverbNation.svg" />
            </a>

          </div>
        </div>
        <section class="timeline">
          <ul>
            <li>
              <div>
                <time>2004</time> Dog Company is formed by Joe Blow, Matt Schrader, and Kirk Blair, after the break up of The Staggers.
              </div>
            </li>
            <li>
              <div>
                <time>2005</time> Myko Bunton joins on Lead Guitar, solidfying Dog Company as a four piece. Dog Co enters the studio.
              </div>
            </li>
            <li>
              <div>
                <time>2006</time> Dog Company releases a Self Titled Demo EP, Signs with Slab O' Wax records. Kirk is replaced on Drums by Arron.
              </div>
            </li>
            <li>
              <div>
                <time>2007</time> "Songs of Discontent" is released on Slab O' Wax Records.
              </div>
            </li>
            <li>
              <div>
                <time>2008</time> Myko Bunton and Aaron leave the band. Garrett Chapman and Derek Munger take over on Lead Guitar and Drums.
              </div>
            </li>
            <li>
              <div>
                <time>2009</time> Derek and Matt step down, opening the way for Rich Musser and Shea Close to fill their roles on Drums and Bass respectively. Shortly afterwards, Dog Co signs with Contra records.
              </div>
            </li>
            <li>
              <div>
                <time>2010</time> "Bullet for Every Lie", Dog Company's 2nd official record is released on Contra Records. Joe Aqcuires the "Hate Tank". The band says goodbye to the '91 caprice. Dog Company records "Merry Christmas, Better new year" for BlackHole Records "Cashing in on Christmas Vol II" comp.
              </div>
            </li>
            <li>
              <div>
                <time>2011</time> Rich is replaced on Drums by John Patterson. Dog Company is asked to play "2000 tons of TNT" in Hartford, CT, motivating the band to embark on their first east coast tour.... John is replaced on Drums by Ron Riot, rejoining Joe for the first time since their time together in Riot Squad.
              </div>
            </li>
            <li>
              <div>
                <time>2012</time> 7" split with Strongbow is released. Dog Co is asked back to "2000 tons of TNT", sparking a second east coast tour. The band records "Snoopy Christmas" a follow-up to the Staggers "Snoopy vs. the Red Barron" for "Cashing in on Christmas Vol IV".
              </div>
            </li>
            <li>
              <div>
                <time>2013</time> Dog Company continues their Spinal Tap ways, replacing Ron Riot with current Drummer, Mick Villareal, who graciously splits his time between Dog Co and Ten Can Riot. The band is asked to play the inaugural of two, now established Festivals, "FYWROK" and "Midwest Live and Loud". The Boys hit the road for a third year straight and finish the year in the Studio.
              </div>
            </li>
            <li>
              <div>
                <time>2014</time> "War Stories" is co-released with Cadre Records and Rebel Sound, with wide-spread, positive, reviews.
              </div>
            </li>
            <li>
              <div>
                <time>2015</time> The boys get asked back to "Midwest Live and Loud", This time the tour takes them through Canada where they meet Tailgunner, sparking a flourishing Bromance. "On The March w/ Dog Company" is released weekly from the road.
              </div>
            </li>
            <li>
              <div>
                <time>2016</time> Cadre Records in collaboration with Oi! The Boat Records release a 7" split with Dog Company and Hard Evidence. Dog Co is asked back to "FYWROK" and a weekend tour with TailGunner from Montreal is the highlight for all involved... Dog Company is currently preparing to go into the Studio for the next release.
              </div>
            </li>
            <li>
              <div>
                <time>2017</time>
                <p>Crowd Control Media signs Dog Company. The guys go into the studio in February to record three songs for 'American Oi! Texas Edition'.</p>
                <p>The guys re-entered the studio in September and over the course of three weekends laid down all tracks for the upcoming release of (the as yet, not officially titled) album "High Hopes in Hard Times" </p>
              </div>
            </li>
            <li>
              <div>
                <time>2018</time>
                <p>High Hopes in Hard Times is released August 18th. The band hit the road in late August to support the album and headed up to Midwest Live and Loud for the third time in 4 years.</p>
                <p></p>
              </div>
            </li>
          </ul>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import scroll from "@/mixins/scroll"
export default {
  components:{
    NavBar
  },
  mixins:[scroll],
  data(){
    return {
      items: []
    }
  },
  mounted(){
    this.items = document.querySelectorAll(".timeline li") 
    window.addEventListener("load", this.callbackFunc);
    window.addEventListener("resize", this.callbackFunc);
    window.addEventListener("scroll", this.callbackFunc);
  },
  beforeDestroy(){
    window.removeEventListener("load", this.callbackFunc)
    window.removeEventListener("resize", this.callbackFunc)
    window.removeEventListener("scroll", this.callbackFunc)
  },
  methods: {
    callbackFunc(items) {
      this.items.forEach(cur => {
        if (this.isElementInViewport(cur)) {
          cur.classList.add("in-view");
        } else {
          cur.classList.remove("in-view");
        }
      });
    },
    isElementInViewport(el) {
        var { top, left, bottom, right } = el.getBoundingClientRect();
        return (
          top >= 0 &&
          left >= 0 &&
          bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
  }
}
</script>

<style>
  .about-page-content-container > .container {
    padding-top: 10vh;
  }
  div[class*="content-container"] .container {
    width: 70%;
    margin: auto;
  }
  .container.about-body.center {
    width: 100%;
  }
  .about-body {
    border-radius: 15px;
    color: white;
    font-family: "Black Ops One", cursive;
    font-size: 13.5px;
    padding: 10px;
    background-color: rgba(82, 106, 83, 0.95);
    margin-bottom: -50px;
    width: 100%;
  }

  .container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin-top: 20vh;
  }

  .container-fluid2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin-top: 2vh;
  }

  .cart-title {
    border-radius: 5px;
    color: white;
    padding: 1vw;
  }
  .timeline {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .timeline ul li {
    font-size: 1em;
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    background: rgba(82, 106, 83, 1);
    padding-top: 20px;
  }

  .timeline ul li::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: inherit;
  }

  .timeline ul li div {
    border-radius: 5px;
    position: relative;
    bottom: 0;
    width: 30vw;
    padding: 7.5px;
    background: rgba(82, 106, 83, 1);
  }

  .timeline ul li div::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 0;
    height: 0;
    border-style: solid;
  }

  .timeline ul li:nth-child(odd) div {
    left: 6.55vw;
  }

  .timeline ul li:nth-child(odd) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent rgba(82, 106, 83, 1) transparent transparent;
  }

  .timeline ul li:nth-child(even) div {
    left: -35.3vw;
  }

  .timeline ul li:nth-child(even) div::before {
    right: -15px;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent rgba(82, 106, 83, 1);
  }

  time {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .timeline ul li::after {
    -webkit-transition: background 0.5s ease-in-out;
    transition: background 0.5s ease-in-out;
  }

  .timeline ul li.in-view::after {
    background: rgb(112, 116, 118, 1);
  }

  .timeline ul li div {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .timeline ul li:nth-child(odd) div {
    -webkit-transform: translate3d(200px, 0, 0);
    transform: translate3d(200px, 0, 0);
  }

  .timeline ul li:nth-child(even) div {
    -webkit-transform: translate3d(-200px, 0, 0);
    transform: translate3d(-200px, 0, 0);
  }

  .timeline ul li.in-view div {
    -webkit-transform: none;
    transform: none;
    visibility: visible;
    opacity: 1;
  }
  .about-page-container {
    /* background: black; */
    background-attachment: fixed;
    background-position: center center;
    background-size: 70vh;
    color: white;
  }
  .about-body {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 960px) {
    .about-page-container {
      background: url("https://s3-us-west-2.amazonaws.com/dogcompany/DogCoLogo.png")
        no-repeat;
      background-attachment: fixed;
      background-position: center center;
      background-size: 70vh;
      color: white;
    }
    .about-body {
      font-size: 2rem;
    }
  }
</style>
