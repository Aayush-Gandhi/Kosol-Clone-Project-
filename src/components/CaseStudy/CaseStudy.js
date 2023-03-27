import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import LatestProjects from '../Home/LatestProjects'
import { csi } from '../CaseStudyInner/CaseStudydata'

export const Images = ({id,images}) => {

    const navigate = useNavigate(id)

    return (
        <div className="bg-black/[.90] grid grid-cols-3 px-[8%] py-10 gap-5">
            {images.map((data1) => (
                <div>
                    <img src={data1.img} alt="image" className="" />
                    <p className="text-white">{data1.title}</p>
                    <a href="" > Read More </a>

                </div>

            ))}
        </div>
    );
};

export const CaseStudy = () => {
    const data = csi
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 6;
    const pageCount = Math.ceil(data.length / perPage);
    const offset = currentPage * perPage;
    const currentImages = data.slice(offset, offset + perPage);
    console.log(currentImages)
    
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="bg-black text-white pb-10">
            <Images images={currentImages} />
            <div className=" w-fit p-2 rounded m-auto">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous-page"}
                    nextLinkClassName={"next-page"}
                    disabledClassName={"pagination-disabled"}
                    activeClassName={"pagination-active"}
                    className="flex justify-center gap-10"
                />
            </div>
            <LatestProjects />
        </div>
    );
};