import React from 'react';
import avatar from '../../assets/images/avatar-image.jpg';

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <img src={avatar} alt="avatar" />
      <div className = "about">
      <p>
        After graduating with a degree in Mathematics from the University of Minnesota I began my career as an Inventory Analyst/Buyer at Royal Foods. Royal Foods is a distribution center that services grocery stores mostly within the tristate area but also to other areas through cross-dock. I am the person who made sure the distribution center had what the store needed. In order to do that, I placed orders to many different manufacturers daily. We had all different sorts of products with different shelf lives. Fresh, Frozen, and Shelf Stable. Each category with a wide range of shelf lives for each product. Every single Manufacturer was its own vast array of data to analyze. I had to look at all the things mentioned above as well as knowing which grocery stores are having sales on what products when and what kind of increase in sales that means to determine what quantity to buy for every item. On top of that, I negotiated promo windows with our manufacturers and made pricing models that would determine our selling price out to grocery stores. The 4 years that I spent at Royal Foods has given me a great ability to analyze and see trends in all sorts of data. I gained a well-rounded knowledge of the business as a whole and I continue to bring that knowledge to the table every day at Target.
    </p>
    <p>
        I came to Target through the Item COE on the MIT Team where I worked for 3 years analyzing data of all formats, growing an extensive knowledge of excel and automating processes with VBA. We took in requests from various team members including Buyers, Pricing Analysts, and Merchandise Specialists and updated many different types of item data as maintenance for the item that the IDS set up whenever data would change. <br></br>
</p>
        After working with the MIT team I moved on to the Target+ Item Data team. I was able to grow, adapt, and expand within a brand new team of target, bringing my own business insight along the way. I use my technical and analytical skills to create reports that are useful for my team using SQL, DOMO, and HIVE. I bring together data from various different sources and collect them in a way that is meaningful to our partners, helping them understand what the ask is, and ensuring the job gets done. As my career continues to grow at Target my skill set gains additional depth each step along the way. <br></br>
<p>
        Currently, I am expanding my technical skills in web development through the Web Development Boot camp Course at the University of Minnesota. Topics covered through this course include HTML, CSS, JavaScript, web APIs, React, JQuery, CSS framework (Bootstrap), Handlebars. Back End: Node.JS with Express, MySQL, MongoDB, RESTful and GraphQL APIs. I hope to use these skills as well as my math degree, analytical knowledge from Royal Foods, and 7 years user knowledge of Target’s internal applications to develop my career within the web development field.
      </p>
    </div>
    </div>
  );
}
