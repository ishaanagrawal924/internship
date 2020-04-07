import React from "react";
import Feed from "./Feed";
import TopSearchBar from "./components/TopSearchBar";
import Category from "./components/Category";
import FeedBar from "./components/FeedBar";
import "./styles.css";

function App() {
  return (
    <div className="feed">
      <TopSearchBar />
      <br />
      <Category />
      <br />

      <Feed
        feed={{
          name: "Revidly Internships, Marketing",
          logo1: require("./images/profilepic/5.jpeg"),
          sname: "Sohini Roy Chowdhury",
          description:
            "Hi everyone has a letter and done I want to know about the first task of making it a policy that company name in your in our choice related to any industry so my question is that is it necessary to give information about company."
        }}
      />
      <FeedBar />
      <hr />
      <Feed
        feed={{
          name: "Indian Heritage,Travel,Revidly Internship",
          logo1: require("./images/profilepic/4.jpeg"),
          sname: "Arpan Mahapatra",
          description:
            "Ahmdabad often connected with the Father of the Nation- Mahatma Ghandhi highlights magnanimous complex carvings. This city is a combination of old and new filled elegance, cultre history and fine cusine. sabarmati Ashram , located in the banks for of river Sabarmati is known for its tranquil bueaty and peace. It was the hear of Mahatma Ghandhi's non-violent struggle for India's independence and is one of the most pupolur tourist attractions in Gujarat:The Jumma masjid of the jama masjid is memerising architecture made of yellow standstones. Located far away from the hush of the city it's a perfect place for deep felt peace. The magnanimous Akshar Dham temple in Ahembdabad is must visit the place, know for its equsit construction and are bueatiful carvings it is the starting point of the famous heritage walk of Ahemdabad. The IASKCON or the Hare Krishan Temple is located near to Gujarat Samachar Press. It is the place to feel mental bliss.The rich history of the culture have gained the nomination of the historic Ahembdabad on UNESCO.This city is the perfect example of multicultural co-c xistance.",
          imgurl: require("./images/post/5.jpeg")
        }}
      />
      <FeedBar />
      <hr />
      <Feed
        feed={{
          name: "Internships, Revidly Internships",
          logo1: require("./images/profilepic/2.jpeg"),
          sname: "Soham Majumder",
          description:
            "Hello Everyone, I am Soham Majumder, currently pursuing MBA in HR from SCMHRD, Pune. I am looking for summer feed opportunities for a period of 8-10 weeks in the domain of Human Resources, Anyone with any contacts or relevant openings for the same please let me know.",
          contact: "2342345252",
          email: "asdfasd@gmail.com"
        }}
      />
      <FeedBar />
      <hr />
      <Feed
        feed={{
          name: "Advanced Machine learning internship",
          logo1: require("./images/profilepic/1.jpeg"),
          sname: "Sandeep srinivasa",
          description:
            "RedCarpet runs one the best internships in India. we have ahd people ranging from Carnegie Mellon to small colleges.. all united by a singular thread We hired the best the most ambitiousstudents out there who do not have restrictions on college grades et cetera if you can get to the interview we will welcome you here.",
          company: "RedCarpetup.com",
          location: "New Delhi Area, India ",
          start_date: "15th May'20",
          duration: "3 months",
          stipend: "20000-25000/Month",
          deadline: "28 Apr'20"
        }}
      />
      <FeedBar />
      <hr />
      <Feed
        feed={{
          name: "Internships, Revidly Internships",
          logo1: require("./images/profilepic/6.jpeg"),
          sname: "Preetam Swaraj",
          imgurl: require("./images/post/6.jpeg")
        }}
      />
      <FeedBar />
    </div>
  );
}
export default App;
