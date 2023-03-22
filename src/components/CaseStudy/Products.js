// import React, { useState } from "react";
// import ReactPaginate from "react-paginate";

// const images = [
//   "/Images/CaseStudy/1.png",
//   "image2.jpg",
//   "image3.jpg",
//   "image4.jpg",
//   "image5.jpg",
//   "image6.jpg",
//   "image7.jpg",
//   "image8.jpg",
//   "image9.jpg",
//   "image10.jpg",
//   "image11.jpg",
//   "image12.jpg",
// ];

// export const Images = ({ images }) => {
//   return (
//     <div>
//       {images.map((image, index) => (
//         <img key={index} src={image} alt="image" />
//       ))}
//     </div>
//   );
// };

// export const Products = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const perPage = 6;
//   const pageCount = Math.ceil(images.length / perPage);
//   const offset = currentPage * perPage;
//   const currentImages = images.slice(offset, offset + perPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div>
//       <Images images={currentImages} />
//       <ReactPaginate
//         previousLabel={"<"}
//         nextLabel={">"}
//         pageCount={pageCount}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         previousLinkClassName={"previous-page"}
//         nextLinkClassName={"next-page"}
//         disabledClassName={"pagination-disabled"}
//         activeClassName={"pagination-active"}
//       />
//     </div>
//   );
// };