import styled from "styled-components";

export const FitnessonclickStyled = styled.div`
  width: 100%;
  background: #000;

  .banner-wrapper {
    width: 70%;
    margin: 0 auto; /* Center align horizontally */
  }
  .card-link {
    text-decoration: none;
  }
  .banner {
    display: flex;
    align-items: flex-start;
    gap: 20px; /* Adjust the gap between left-content and right-content */
    border-radius: 25px;
    border: 1px solid #81ff34;
    background: #2d154c;
    overflow: hidden; /* Ensure no overflow from children */
    padding: 12px;
    margin-top: 30px;
  }

  .left-content {
    width: 70%; /* 60% width for left content */
    padding: 20px; /* Adjust padding as needed */
    color: #fff; /* Example text color */
  }
  .left-contnet h2 {
    color: #fff3f3;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .subscribe {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 144px;
    height: 32px;
    padding: 6px 8px 6px 23px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.07);
    border: none;
  }
  .ptext {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  .pprice {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .price {
    color: #6ddc6b;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .right-content {
    width: 30%; /* 40% width for right content */
    overflow: hidden; /* Ensure image does not overflow */
    text-align: center;
  }

  .right-content img {
    text-align: center;
  }

  /* Media Query for Tablets and Smaller Screens */
  @media (max-width: 768px) {
    .banner {
      flex-direction: column;
    }

    .left-content,
    .right-content {
      width: 100%;
    }

    .right-content {
      margin-top: 20px; /* Space between image and text on smaller screens */
    }

    .subscribe {
      width: 100%; /* Full width button on smaller screens */
      margin-top: 15px; /* Space between text and button */
    }
  }

  // category section

  .category-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .headingcat {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.92px;
    margin-top: 42px;
    margin-left: 12px;
    margin-bottom: 24px;
  }

  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap into multiple rows */
    justify-content: center; /* Center align items */
    gap: 20px; /* Space between cards */
  }

  .catCardDiv {
    flex: 1 0 calc(50% - 20px); /* Two cards per row (50% width minus gaps) */
    padding: 4px;
    background-color: #000;
    border-radius: 20px;
    border: 1px solid #52ff00;
    text-align: center;
    margin-bottom: 20px; /* Bottom margin between rows */
    box-sizing: border-box; /* Ensure padding and borders are included in width calculation */
  }

  .imageDiv {
    /* Your styles for image container */
  }

  .imageName {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    .catCardDiv {
      flex-basis: calc(
        50% - 20px
      ); /* Two cards per row on screens up to 768px */
    }
  }

  .pro-wrapper {
    width: 90%;
    margin: 0 auto; /* Center align horizontally */
  }

  .proCardMainDiv {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    margin-top: 20px; /* Adjust top margin as needed */
  }

  .proCardDiv {
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #132803;
    width: 188px;
    margin: 0 10px; /* Adjust horizontal margin as needed */
    padding: 6px; /* Add padding for inner content */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .proimageDiv {
    position: relative; /* Ensure relative positioning for absolute child */
    text-align: center;
  }
  .roundedImages {
    max-width: 100%;
  }

  .roundedImages {
    object-fit: cover;
  }

  .savingsTag {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #fff500;
    padding: 5px;
    font-size: 10px;
    border-radius: 5px;
    z-index: 1;
  }

  .proimageName {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
  }

  .proLocation {
    display: flex;
  }

  .proLocation svg {
    width: 9px;
    height: 11px;
    fill: #f5f5f5;
    margin-right: 5px;
  }

  .prolocation {
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
  }

  .proimagePrice {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 5px;
  }

  .addToCartButton {
    background-color: #9747ff;
    color: #fff;
    border: none;
    padding: 10px;
    margin-top: auto;
    cursor: pointer;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .addToCartButton:hover {
    background-color: #7e3aff;
  }

  /* Media Query for Mobile Screens */
  @media screen and (max-width: 768px) {
    .proCardMainDiv {
      flex-wrap: nowrap; /* Prevent wrapping */
      overflow-x: scroll; /* Allow horizontal scrolling */
      -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
    }

    .proCardDiv {
      flex: 0 0 auto; /* Prevent flex items from growing */
      width: 140px; /* Adjust card width for smaller screens */
      margin-right: 5px; /* Reduce margin */
    }

    .proimageName {
      font-size: 10px; /* Adjust font size */
    }

    .proimagePrice {
      font-size: 10px; /* Adjust font size */
    }
  }

  .banner-style {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
