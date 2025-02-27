import React, { useEffect, useState } from "react";
import { AyruvedaStyled } from "./Aruveda.styled";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedsCenterAPI } from "../../redux/slices/generic/genericService";
import CentresCard from "./CentresCard";

const AllCentresList = (props: any) => {
  const sectionName = props?.match?.path;
  const listFilters = [
    "Nearest",
    "Top Rating",
    "Mental Health",
    "Cardiovascular",
    "Hair & Skin",
  ];
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { allAyurvedsCenterList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );

  useEffect(() => {
    if (sectionName === "/ayurveda/allcentrelist") {
      const body = {
        type: "ayurveda",
        count: 30,
        page: 0,
        searchText: "",
      };
      dispatch(getAyurvedsCenterAPI(body));
    }
  }, []);

  const navigateToPage = (url: string) => {
    history.push(url);
  };

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(
    (allAyurvedsCenterList?.vendors?.length || 0) / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allAyurvedsCenterList?.vendors?.slice(
    startIndex,
    endIndex
  );

  const getPagination = () => {
    if (totalPages <= 6) {
      return [...Array(totalPages)].map((_, index) => index + 1);
    } else {
      if (currentPage <= 3) {
        return [1, 2, 3, 4, , 5, 6, 7, 8, 9, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        return [
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        return [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
  };

  return (
    <AyruvedaStyled>
      <div>
        <div className="container-fluid mt-334 mx-auto lab-test-data-content">
          <div>
            <div className="mt-4">
              <span
                onClick={() => {
                  navigateToPage("/ayurveda");
                }}
                className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
              >
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                    fill="#444444"
                  />
                </svg>{" "}
                &nbsp;
                {` Back`}
              </span>
            </div>
            <div className="mt-4">
              <span className=" text-xl top-category-secs font-bold mx-2 opacity-75 ">
                All Ayurveda Centres
              </span>
            </div>
            <div className="treatment-search-section">
              <div className="labs-search-section-input">
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
              </div>
              <div className="labs-search-section-links">
                {listFilters?.map((item: any, index: number) => (
                  <button key={index}>{item}</button>
                ))}
              </div>
              <div className="CardsContainer">
                {currentItems?.map((item: any, index: number) => {
                  return (
                    <CentresCard
                      key={index}
                      mostOrdersSection={true}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            <li className="page-item">
              <a
                className="page-link border-0 bg-transparent text-dark"
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
              >
                Next Page
              </a>
            </li>
            {getPagination().map((page, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <a
                  className="page-link border-0 bg-transparent"
                  href="#"
                  onClick={() => page !== "..." && handlePageChange(page)}
                  style={{
                    color: currentPage === page ? "#9747FF" : "inherit",
                  }}
                >
                  {page}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link border-0 bg-transparent text-dark"
                href="#"
                onClick={() => handlePageChange(totalPages)}
              >
                Go to Last Page
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </AyruvedaStyled>
  );
};

export default AllCentresList;
