import React from 'react'
import { useState } from 'react';

export default function Breadcrumbs() {
     const pages = [
          { name: 'Home', url: '/' },
          { name: 'About', url: '/Aboutus' },
          { name: 'Contact', url: '/contact' },
          { name: 'FAQ', url: '/faq' },
     ];
     const [currentPage, setCurrentPage] = useState('/');
     const currentPageObject = pages.find(page => page.url === currentPage);
     return (
          <div>
               <ul>
                    {pages.map((page, index) => {
                         const isCurrentPage = page.url === currentPage;
                         const isLastPage = index === pages.length - 1;
                         const separator = isLastPage ? null : ' / ';
                         if (isCurrentPage) {
                              return (
                                   <li key={page.url}>{page.name}</li>
                              );
                         } else if (index < pages.indexOf(currentPageObject)) {
                              return (
                                   <li key={page.url}>
                                        <a href={page.url}>{page.name}</a>
                                        {separator}
                                   </li>
                              );
                         } else {
                              return (
                                   <li key={page.url}>
                                        {page.name}
                                        {separator}
                                   </li>
                              );
                         }
                    })}
               </ul>

          </div>
     )
}

