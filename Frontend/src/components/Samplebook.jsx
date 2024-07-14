// import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import axios from "axios";
// import Cards from "./Cards";

// function Samplebook() {

//   const [book,setbook]=useState([]);

//   useEffect(()=>{
//     const getBook=async()=>{
//       try {
//         const res = await axios.get("http://localhost:5000/books");
//         setbook(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getBook();

//   },[])


//   const filterData1 = book.filter((data) => data.department==="Computer Science");
//   const filterData2 = list.filter((data) => data.department==="Mechanical Engineering");
//   const filterData3 = list.filter((data) => data.department==="Electrical Engineering");
//   const filterData4 = list.filter((data) => data.department==="Civil Engineering");
//   const filterData5 = list.filter((data) => data.department==="Chemical Engineering");
//   const filterData6 = list.filter((data) => data.department==="Engineering Physics");

  

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div className="max-w-screem-2x1 container mx-auto md:px-20 px-4 mt-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2  ">Computer Science Books</h1>
//         </div>

//         <div>
//           <Slider {...settings}>
//           {/* {list.map((index) => (
//                 <Cards index={index} /> 
              
//             ))} */}
//             {filterData1.map((item) => (
//                 <Cards item={item} key={item.id}/> 
              
//             ))}
//           </Slider>
//         </div>

//         <div>
//           <h1 className="font-semibold text-xl pb-2  ">Mechanical Engineering Books</h1>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {filterData2.map((item) => (
//                 <Cards item={item} key={item.id}/> 
              
//             ))}
//           </Slider>
//         </div>

//         <div>
//           <h1 className="font-semibold text-xl pb-2  ">Electrical Engineering Books</h1>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {filterData3.map((item) => (
//                 <Cards item={item} key={item.id}/> 
              
//             ))}
//           </Slider>
//         </div>

//         <div>
//           <h1 className="font-semibold text-xl pb-2  ">Civil Engineering Books</h1>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {filterData4.map((item) => (
//                 <Cards item={item} key={item.id}/> 
              
//             ))}
//           </Slider>
//         </div>

//         <div>
//           <h1 className="font-semibold text-xl pb-2  ">Chemical Engineering Books</h1>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {filterData5.map((item) => (
//                 <Cards item={item} key={item.id}/> 
              
//             ))}
//           </Slider>
//         </div>


//         <div>
//           <h1 className="font-semibold text-xl pb-2  ">Engineering Physics Books</h1>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {filterData6.map((item) => (
//                 <Cards item={item} key={item.id}/> 
              
//             ))}
//           </Slider>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Samplebook;

import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../components/axios.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

function Samplebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/books");
        const res = await api.get("https://devshelf-webwizards-backend.onrender.com/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  const filterBooksByDepartment = (department) => {
    return books.filter((book) => book.department === department);
  };

  const departments = [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Engineering Physics"
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4">
      {departments.map((department) => (
        <div key={department}>
          <h1 className="font-semibold text-xl pb-2">{department} Books</h1>
          <Slider {...settings}>
            {filterBooksByDepartment(department).map((book) => (
              <Cards item={book} key={book.title} />
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}

export default Samplebook;
