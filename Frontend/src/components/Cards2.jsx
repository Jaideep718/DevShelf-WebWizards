import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
  const encodedTitle = encodeURIComponent(item.title);

  return (
    <Link to={`/book/${encodedTitle}`}>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl duration-200 dark:bg-slate-1000 dark:text-white">
          <figure className="sm:h-60 md:h-72 lg:h-96">
            <img 
            className="h-80 object-cover rounded-md"
              src={item.img || "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user"}
              alt="Books"
            />
          </figure>
          <div className="card-body ml-20">
            <h2 className="card-title text-bold">
              {item.title}
            </h2>
            <p className="text-bold">{item.description}</p>
            <p>Author: {item.author}</p>
            <p>Genre: {item.genre}</p> 
            <p>Department: {item.department}</p>
            <p>Vendor: {item.vendor}</p>
            <p>Vendor_id: {item.vendor_id}</p>
            <p>Publisher: {item.publisher}</p>
            <p>Publisher_id: {item.publisher_id}</p>
            
            <div className="card-actions justify-between">
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:text-white duration-200">Count: {item.count}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200">Issue Now</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200">Return Now</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;