import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/navbar';
import Home from './components/home';
import Gallery from './components/gallery';
import Projects from './components/projects';
import Timeline from './components/timeline';
import Footer from './components/footer';
import './App.css';


const events = [
  {
    date: 'January 2015',
    title: 'Muktinath',
    description: 'Me at muktinath with mom and dad. My first long tour inside nepal.',
    image: '/images/photo1.jpg',
  },

  {
    date: '2015',
    title: 'Pokhara Musuem',
    description: 'This is a musuem of pokhara. It is very fun place expolored a lot of things.',
    image: '/images/photo2.jpg',
  },

  {
    date: '2017',
    title: 'Group Photo',
    description: 'Class 7 group photo. Our class teacher was subekshya khada..',
    image: '/images/class_group.jpg',
  },

  {
    date: '2018',
    title: 'Early 2018',
    description: 'Dont know why but we gather here.',
    image: '/images/early_2018.jpg',
  },
  {
    date: '2018',
    title: 'Mama Vanje',
    description: 'Mama Vanje meetup. 2018.',
    image: '/images/mama_vanje_2018.jpg',
  },

  {
    date: '2018',
    title: 'First Movie',
    description: 'Its dashian vacation and it was my first movie in hall chakka panja 2.',
    image: '/images/first_movie_2018.jpg',
  },

  {
    date: '2018',
    title: 'Dashian',
    description: 'Dashian family gathering.',
    image: '/images/dashian_2018.jpg',
  },

  {
    date: '2018',
    title: 'Tihar',
    description: 'Tihar family gathering.',
    image: '/images/tihar_2018.jpg',
  },

  {
    date: '2018',
    title: 'Family Picnic',
    description: 'Family Picnic Poush 15.',
    image: '/images/wild_picnic_2018.jpg',
  },

  {
    date: '2019',
    title: 'Dont know',
    description: 'Suraj brother and me I dont remember where it was and backstory of it.',
    image: '/images/2019_dont_know_where_it_was.jpg',
  },

  {
    date: '2019',
    title: 'Dashian',
    description: 'Family gathering on ocassion of dashian.',
    image: '/images/dashian_2019.jpg',
  },

  {
    date: '2019',
    title: 'Me',
    description: 'Nishan on the ocassion of the 2019 dashian.',
    image: '/images/2019_dashian.jpg',
  },

  {
    date: '2019',
    title: 'Tihar',
    description: 'We are celebrating tihar in this photo.',
    image: '/images/tihar_2019.jpg',
  },

  {
    date: '2019',
    title: 'Shivaratri',
    description: 'We all goes to shiva mandir on the ocassion of shivaratri.',
    image: '/images/shivaratri_2019.jpg',
  },

  {
    date: '2020',
    title: 'Jungle Party',
    description: 'It was santu sister birthday and we all went to jungle to celebrate her birthday cause it was lockdown time.',
    image: '/images/jungle_party_lockdown_2020.jpg',
  },

  {
    date: '2020',
    title: 'Picnic',
    description: 'On the way to celebrate picnic.',
    image: '/images/maybe_picnic_2020.jpg',
  },

  {
    date: '2020',
    title: 'Mela',
    description: 'We were on mela',
    image: '/images/mela_2020.jpg',
  },
 
  {
    date: '2021',
    title: 'Jarbuta',
    description: 'Lockdown period and went to jarbuta for the first time with sisters and aunt.',
    image: '/images/jarbuta_lockdown_2021.jpg',
  },

  {
    date: '2021',
    title: 'Dashian',
    description: 'On the ocassion of dashian 2021',
    image: '/images/dashian_2021.jpg',
  },

  {
    date: '2021',
    title: 'Bagheshowri',
    description: 'Went to Bagheshowri temple with sisters.',
    image: '/images/bagheshwori_temple_2021.jpg',
  },


  {
    date: '2021',
    title: 'Tihar',
    description: 'We all cousins went to Nepalgunj to celebrate tihar.',
    image: '/images/tihar_2021.jpg',
  },

  {
    date: '2021',
    title: 'Baby Shower',
    description: 'We celebrated Babyshower of santu dd.',
    image: '/images/nephew_born_2021.jpg',
  },
  
  {
    date: '2022',
    title: 'Bhaitika',
    description: 'My leg was borken cause of Bike Accident and we are celebrating bhai tika.',
    image: '/images/leg_broken_bhai_tika_2022.jpg',
  },

  {
    date: '2022',
    title: 'Dashian',
    description: 'Our Family on the ocassion of dashian',
    image: '/images/dashian_2022.jpg',
  },

  {
    date: '2022',
    title: 'Tihar',
    description: 'We are celebrating tihar in this photo.',
    image: '/images/tihar_2022.jpg',
  },

  {
    date: '2022',
    title: 'Deuti Bajai',
    description: 'We went to Deuti Bajai Temple.',
    image: '/images/temple_visit_2022.jpg',
  },

  {
    date: '2023',
    title: 'Dinner',
    description: 'We went for dinner. Thats my first time going out in hotel for dinner.',
    image: '/images/first_time_out_2023.jpg',
  },

  {
    date: '2023',
    title: 'Movie Time',
    description: 'Sharmila Sister and dont know the another girl. The movie was chakka panja 4 .',
    image: '/images/chakka_panja_3_2023.jpg',
  },

  {
    date: '2023',
    title: 'Welcome Program',
    description: 'This picture was taken by me in welcome program and the sister was very nice. .',
    image: '/images/class_11_welcome_2023.jpg',
  },

  {
    date: '2024',
    title: 'Memorable Ride',
    description: 'The memorable cycle ride with friends. It was awesome and I also get injured during the ride.',
    image: '/images/memorable_cycle_ride_2024.jpg',
  },

  {
    date: '2024',
    title: 'Farewell',
    description: 'Farewell given by class 11 to us.',
    image: '/images/class_12_farewell_2024.jpg',
  },

  {
    date: '2024',
    title: 'Pashupati Visit',
    description: 'Mom and me',
    image: '/images/pashupati_visit_2024.jpg',
  },

  {
    date: '2024',
    title: 'Movie Time',
    description: 'The image in taken in Kathmandu, BG Mall Movie Theatre. We really enjoy the movie Behuli from Meghauli.',
    image: '/images/khagendra_uncle_movie.jpg',
  },

  {
    date: '2024',
    title: 'Dashian',
    description: 'Our whole family is included in this Picture some people my left.',
    image: '/images/dashian_2024.jpg',
  },


  {
    date: '2024',
    title: 'Dashian Day 2',
    description: 'Went to Katukuwa early morning with vishan to have some tea and we played Ping as well in Bangesimal that morning and we  went to danda in evening as well to have some nice snacks but it didnt go as expected.',
    image: '/images/vishan_nishan_dashian.jpg',
  },

  {
    date: '2024',
    title: 'Dashian Day 3',
    description: 'Ishita and Me in the picture I teached her how to use camera and she really liked it.',
    image: '/images/ishita_and_me.jpg',
  },

  {
    date: '2024',
    title: 'Coffee Time',
    description: 'Vishan and Me went to the cafe 4 to 9 to do some business talk and the owner give us coffee treat twice. We created website for him.',
    image: '/images/4to9cafe.jpg',
  },

  {
    date: '2024',
    title: 'Laxmi Puja Vanjey',
    description: 'It is a day of Laxmi Puja. Santu sister came to our house to create a beautiful rangoli. I was babysitting my nephew.',
    image: '/images/vanjey_and_me.jpg',
  },

  {
    date: '2024',
    title: 'Rangoli',
    description: 'Rangoli created by Santu Sister it was really beautiful.',
    image: '/images/rangoli_santu_dd.jpg',
  },

  {
    date: '2024',
    title: 'Cute Kids',
    description: 'It was a day of laxmi tihar and these cute kids shows up in my house to play bhaili and I click photo of them with my camera. Cuties.',
    image: '/images/bhaili_cuties.jpg',
  },

  
  {
    date: '2024',
    title: 'Big Bhaili Team',
    description: 'The big bhaili team they dance really well and nice. I clicked some photo of them.',
    image: '/images/thulo_bhaili.jpg',
  },


  {
    date: '2024',
    title: 'Bhaitika',
    description: 'Bhaitika Day. It is always fun to celebrate bhaitika.',
    image: '/images/bhaitika_2024.jpg',
  },
  {
    date: '2024',
    title: 'Bhaitika',
    description: 'I had a lovely time visiting Iskcon with Swodesh, Rashmi, Shristi, Himani, and Ritika.  I got to know three of them better, which was great.',
    image: '/images/Iskcon_visit_2024.jpg',
  },
  // Add more events as needed
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timeline" element={<Timeline events={events} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
