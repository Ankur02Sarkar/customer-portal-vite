import styled from "styled-components";

export const EyecareStyled = styled.div`
  width: 100%;
  .eyecarebanner {
    background-color: #fff !important;
  }
  .eyecarebanner .row {
    padding: 60px 30px;
  }
  .eyecarebanner h2 {
    color: #000;
    /* font-family: "Sofia Sans"; */
    font-size: 52px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .upload-Prescription-btn {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    background: #9747ff;
    box-shadow: 4px 4px 19px 0px rgba(0, 0, 0, 0.25);
    height: 60px;
    border: none;
    width: 200px;
    margin-top: 20px;
  }
  .eyecarebanner p {
    color: #8d8d8d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 478px;
  }
  .consult-btn {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.15);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 1.5rem;
  }
  .categoryCardMainDiv {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin: 60px 0;
  }

  .categoryCardMainDiv .Main {
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 40px 10px;
    max-width: 206px;
    /* height: 230px; */
    text-align: center;
    background-color: #ffffff;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }

  .categoryCardMainDiv .Main:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  .categoryCardMainDiv .image-div {
    width: 80px;
    height: 80px;
    margin: 0 auto 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .categoryCardMainDiv .roundedImages {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  .categoryCardMainDiv .imageName {
    color: #9747ff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  .categoryCardMainDiv .imageSubtitle {
    color: #8d8d8d;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
    line-height: 1.5;
  }

  .clinics-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }
  .clinics-container hr {
    margin: 0;
  }

  .clinic-card {
    background-color: #fff;
    border: 1px solid #e3f2fd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: border-color 0.3s ease;
  }

  .clinic-card:hover {
    border-color: #42a5f5;
  }

  .clinic-image {
    float: left;
    margin-right: 15px;
  }

  .clinic-placeholder {
    width: 60px;
    height: 60px;
    background-color: #e0e0e0;
    border-radius: 8px;
  }

  .clinic-info {
    overflow: hidden;
  }

  .clinic-name {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 4px;
  }

  .clinic-specializations {
    color: #3ed2ba;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 4px;
  }

  .clinic-rating {
    display: flex;
    align-items: center;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }

  .clinic-rating .star {
    color: #ffc107;
    margin-right: 5px;
  }

  .clinic-details {
    clear: both;
    padding-top: 10px;
  }

  .clinic-address {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }

  .clinic-fee {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }

  .clinic-distance {
    color: #34a853;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .heading h4 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .view-all {
    grid-column: span 3;
    text-align: right;
    color: #000;
    font-weight: 600;
    cursor: pointer;
    padding: 30px 20px;
    background: transparent;
    border: none;
  }
  .backbtn {
    color: #000;
    font-weight: 600;
    width: 80px;
    padding: 30px 20px;
    background: transparent;
    border: none;
    text-align: left;
  }
  .clinic-service-card {
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
  }

  .clinic-image {
    /* width: 200px; */
    height: auto;
    border-radius: 10px 0 0 10px;
    margin: 6px;
  }

  .clinic-info {
    /* padding: 20px; */
    flex: 1;
  }

  .clinic-info h3 {
    margin: 0;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .clinic-info p {
    margin: 5px 0;
    color: #555;
  }

  .phone-icon {
    /* Add an icon for phone */
  }

  .clinic-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .store-details-btn,
  .book-appointment-btn {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .store-details-btn {
    border-radius: 2px;
    border: 1px solid #ededed;
    background-color: #fff;
    color: #000;
  }

  .book-appointment-btn {
    border-radius: 2px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    border: none;
  }
  .heading-clinic {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 20px;
  }
  .clinic-rating {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .rating-star {
    /* Add an icon for star */
    color: gold;
    margin-right: 5px;
  }
  .CardMainDiv {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin: 30px 0;
  }

  .CardMainDiv .Main-div {
    width: 168px;
    text-align: center;
    cursor: pointer;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .Main-div .image-div {
    margin: 6px;
    background-color: #fffbf9 !important;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Main-div .Name {
    margin: 10px 0px 20px 0;
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid rgba(204, 204, 204, 0.8);
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10px;
    width: 462px;
    margin-left: 10px;
  }

  .search-bar .search-icon {
    margin: 0 10px;
    font-size: 16px;
    color: #ccc;
    cursor: pointer;
  }

  .search-bar input[type="text"] {
    flex: 1;
    padding: 10px;
    border: none;
    font-size: 14px;
    outline: none;
    background: #fff;
  }

  .search-bar input[type="text"]::placeholder {
    color: #ccc;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
  }
  .clinic-service-cardtwo {
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    gap: 12px;
  }
  .clinic-service-cardtwo .clinic-info h3 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .clinic-service-cardtwo .clinic-info p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 308px;
    margin-bottom: 14px;
  }
  .phone a {
    color: #000 !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: normal !important;
    text-decoration-line: underline;
  }
  .visiontext {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .bannerplace {
    margin-bottom: 20px;
  }
  .bannerplace img {
    margin: auto;
    max-width: -webkit-fill-available;
  }
  .bannerplace h2 {
    margin-top: 60px;
    color: #000;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .bannerplace p {
    color: #8d8d8d;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 426px;
  }
  .eye-care-title-div h2 {
    width: 100%;
    font-size: 42px;
    color: #000;
    font-weight: 500;
    opacity: 0.87;
  }
  .eye-care-title-div p {
    margin-top: 1rem;
    width: 100%;
    font-size: 15px;
    color: #8d8d8d;
  }
  .Book-Appointment-close-btn button {
    border: 1px solid;
    border-radius: 60px;
    font-weight: 500;
    font-size: 15px;
  }
  .Book-Appointment-close-btn {
    display: flex;
    justify-content: end;
  }
  .eye-care-doctore-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .Book-Appointment-title h3 {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    opacity: 0.8;
  }
  .Book-Appointment-title p {
    width: 100%;
    font-size: 13px;
    color: #000;
    opacity: 0.6;
  }
  .IoMdArrowDropdown {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  .eye-care-book-free-appointment-btn {
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    background-color: #9747ff;
    font-size: 16px;
    color: #fff;
    border: none;
    height: 3rem;
  }
  .conform-popup-header-div {
    width: 100%;
    background-color: #34a853;
    height: 188px;
    border: none;
  }
  .conform-popup-header-div h4 {
    width: 100%;
    position: relative;
    font-size: 35px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    display: inline-block;
  }
  .conform-popup-body-div h4 {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    width: 100%;
    font-size: 18px;
    color: #000;
    opacity: 0.6;
  }
  .conform-popup-body-div button {
    margin-top: 2rem;
    margin-bottom: 1rem;
    height: 3rem;
    background-color: #9747ff;
    color: #fff;
  }
  .conform-popup-body-div {
    display: flex;
    justify-content: center;
  }
`;
