import styled from "styled-components";

export const ItemStyled = styled.div`
  width: 100%;
  height: 100%;

  .item-detail-main-div {
    padding: 30px 50px;
  }
  .new-loader-sec {
    margin-top: 50px;
    text-align: center;
  }
  .item-sub-detail-main-div {
    gap: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delivery0time-sec-note {
    color: green !important;
  }
  .change-pin-code-sec {
    border: 1px solid #e2e2e2;
    height: 36px;
    border-radius: 8px;
    font-size: 14px;
    padding: 5px 20px;
    margin-top: -10px;
  }
  .item-related-img-div {
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 236px;
  }
  .card-module-div {
    margin-top: 2rem;
    /* width: 80%; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .suggestedImg {
    margin-bottom: 10px;
    object-fit: contain;
    border-radius: 10px;
    padding: 0.5rem;
    position: relative;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    height: 74px;
    width: 6rem;
  }
  .item-img-div {
    width: 60%;
    border-radius: 25px;
    background: #eaeaf0;
    height: 14.75rem;
  }
  .main-div-card {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .discount-banner-main-div {
    display: flex;
    position: absolute;
  }
  .discount-banner-div {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731687290405.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 4rem;
    width: 6rem;
    margin-top: -1.6rem;
    margin-left: -1rem;
  }
  .discount-banner-div p {
    margin-top: 18px;
    margin-left: 18px;
    color: #181920;
    font-family: Outfit, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.18px;
  }
  .mainImg {
    border-radius: 25px;
    width: 100%;
    height: 236px;
  }
  .item-title-detail {
    width: 100%;
    position: relative;
    font-size: 24px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    text-align: left;
    display: inline-block;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  .item-tablet-detail {
    width: 100%;
    position: relative;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #9a9898;
    text-align: left;
    display: inline-block;
    height: 15px;
    margin-bottom: 17px;
  }
  .item-cmp-detail {
    width: 100%;
    position: relative;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #252b61;
    text-align: left;
    display: inline-block;
  }
  .item-detail-div {
    width: 30%;
    padding: 1rem;
    position: relative;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fef7e2;
    border: 1px solid #eceaea;
    box-sizing: border-box;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .product-price {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #141414;
    font-family: Outfit, sans-serif;
  }
  .recent-order-number {
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #1d1c1c;
    text-align: left;
  }
  .horizental-line {
    color: cadetblue;
    margin: auto;
  }
  .price-section {
    margin-top: 1rem;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #605a5a;
    font-weight: 200;
  }
  .product-price-title {
    font-size: 14px;
    letter-spacing: 0.02em;
    font-weight: 300;
    font-family: Outfit, sans-serif;
    color: #393939;
  }
  .delivered-date-text {
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #888;
    font-family: Outfit, sans-serif;
    margin-bottom: 0px;
    span {
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #888;
    }
  }
  .delivered-add-text {
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #888;
    font-family: Outfit, sans-serif;
    span {
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #888;
    }
  }
  .select-tablets {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    select {
      margin-right: 1rem;
      width: 6rem;
      border-radius: 25px;
      border: 1px solid #adadad;
      box-sizing: border-box;
      height: 34.5px;
      padding: 5px 10px;
      text-align: left;
      font-size: 18px;
      color: #1e1e1e;
      font-family: Outfit, sans-serif;
      background: #fef7e2;
      box-shadow: none;
    }
    span {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #353232;
    }
  }
  .add-to-cart-btn button {
    width: 100%;
    position: relative;
    border-radius: 45px;
    background-color: #252b61;
    height: 53px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 18px;
    color: #fff;
    font-family: Outfit;
  }
  .prescription-title {
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    font-weight: 300;
    margin-bottom: 45px;
    margin-top: -40px;
  }
  .overview-main-div {
    gap: 6rem;
    width: 100%;
    display: flex;
  }
  .overview-left-div {
    width: 70%;
  }
  .overview-right-div {
    width: 30%;
  }

  .overview-heading-text {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: "Poppins", serif;
    color: #000;
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: 0px;
  }
  .overview-heading-text1 {
    margin-bottom: -2px;
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: "Poppins", serif;
    color: #000;
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: -15px;
  }
  .overview-text {
    line-height: 1rem;
    margin-bottom: 32px;

    span {
      width: 100%;
      font-size: 14px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
      font-weight: 300;
      margin-top: 9px;
      margin-bottom: 32px;
    }
  }
  .overview-right-div {
    padding: 2rem;
    width: 30%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    height: 338.9px;
  }
  .doctor-prescription {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731578571641.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 76%;
  }
  .doctor-overview-text {
    width: 100%;
    position: relative;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #131313;
    text-align: center;
    display: inline-block;
    font-family: Outfit, sans-serif;
    font-weight: 400;
    margin-bottom: 5px;
    span {
      font-weight: 600;
    }
  }
  .doctor-overview-sub-text {
    font-size: 15px;
    letter-spacing: 0.02em;
    color: #000;
    font-family: Outfit, sans-serif;
    font-weight: 500;
    text-align: start;
    span {
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }
  .doctor-prescription-btn {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .doctor-prescription-btn button {
    border-radius: 45px;
    background: #252b61;
    color: #fff;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.21px;
    margin-top: 9rem;
    width: 100%;
    height: 2.5rem;
  }
  .doctor-prescription-btn label {
    width: 100%;
  }
  .similar-product-title {
    width: 100%;
    font-size: 32px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #131313;
  }
  .similar-product-holizental {
    width: 12rem;
    margin-top: 1rem;
  }
  .similar-product-holizental1 {
    width: 40rem;
    margin-top: 1rem;
  }
  .similar-product-section-title {
    /* width: 17rem; */
    display: flex;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
  }
  .similar-product-section {
    display: flex;
    padding: 20px;
    gap: 20px;
  }

  .similar-product-column,
  .similar-recommendations-column {
    flex: 1;
  }

  .similar-product {
    display: flex;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .similar-product-cards {
    display: flex;
    gap: 20px;
  }

  .similar-product-card {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 100%;
  }
  .similar-product-card p {
    margin-top: 1rem;
    text-align: start;
    width: 100%;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
  }
  .similar-product-img-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.244rem;
    border-radius: 15px;
    background-color: #f0f0f5;
    height: 75%;
  }

  .similar-product-card img {
    height: 1.5rem;
  }
  .similar-product-imgs {
    height: 8rem !important;
  }

  .similar-product-card button {
    border-radius: 40px;
    background-color: #252b61;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 6px 16px;
    box-sizing: border-box;
    gap: 3px;
    text-align: left;
    font-size: 12px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .compare-details-table {
    width: 100%;
    background-color: #f8f8f8;
    border-top: 1px solid #dbdbdb;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }

  .compare-table-row {
    display: flex;
    padding: 10px 50px;
    border-bottom: 1px solid #ddd;
  }

  .compare-table-cell {
    flex: 1;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    text-align: start;
    opacity: 0.8;
  }
  .compare-table-cell-amount {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
    text-align: start;
    flex: 1;
    .compare-table-cell-discount {
      color: #2c7420;
    }
  }
  .compare-table-cell-mrp-amount {
    width: 100%;
    font-size: 14px;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    span {
      text-decoration: line-through;
      color: #888;
    }
  }
  .compare-table-cell-title {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #636363;
    opacity: 0.8;
  }
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-radius: 44px;
    border: 1px solid #aca3a3;
    display: flex;
    margin-right: 5px;
    box-shadow: none;
    background: #fef7e2;
  }

  .upload-Prescription-btn {
    width: 100%;
    margin-top: 9rem;
    position: relative;
    border-radius: 45px;
    background-color: #252b61;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 11px 10px 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .pincode-container {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    position: relative;
    width: 200px;
  }
  .pincode-input {
    padding: 10px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid var(--Grey-Dark, #d1d1d1);
    background: var(--White, #fff);
    width: 100%;
    box-sizing: border-box;
    padding-right: 80px;
  }

  .check-button {
    position: absolute;
    right: 20px;
    margin-top: 0.5rem;
    padding: 5px 10px;
    background: #fff;
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 12px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .pincode-result {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .pincode-input::placeholder {
    color: var(--Grey-Darker, #acacac);
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  .item-main-detail-div {
    width: 31rem;
  }

  @media (max-width: 768px) {
    .card-module-div {
      grid-template-columns: repeat(2, 1fr);
    }
    .similar-product-section,
    .compare-details-table {
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }
    .similar-product-card button {
      width: 100%;
    }
    .similar-product-cards {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
    .compare-table-cell {
      font-size: 15px;
    }
    .compare-table-cell-amount {
      font-size: 12px;
      span {
        font-size: 12px;
      }
    }
    .compare-table-cell-title {
      font-size: 12px;
    }

    .compare-table-row {
      padding: 10px 20px;
      width: 100%;
      gap: 5px;
    }
    .item-detail-main-div {
      padding: 10px 20px;
    }
    .item-sub-detail-main-div {
      width: 100%;
      display: grid;
      gap: 0px;
    }
    .item-title-detail {
      margin-bottom: 0px;
      text-align: start;
    }
    .horizental-line {
      display: none;
    }
    .item-tablet-detail {
      text-align: start;
      margin-bottom: 0px;
    }
    .item-cmp-detail {
      margin-bottom: 1rem;
      text-align: start;
    }
    .item-related-img-div {
      display: none;
    }
    .item-img-div {
      width: 100%;
    }
    .item-detail-div {
      width: 100%;
      height: 100%;
      background: none;
      padding: 0px;
      box-shadow: none;
      border-radius: 0px;
      border: 0px;
    }
    .select-tablets {
      margin-top: 0px;
      margin-bottom: 15px;
      span {
        margin-left: 0px !important;
      }
    }

    .item-main-detail-div {
      width: 100%;
      display: contents;
    }
    .prescription-title {
      display: none;
    }
    .overview-main-div {
      flex-direction: column;
      gap: 1px;
    }
    .overview-left-div {
      width: 100%;
    }
    .overview-right-div {
      width: 100%;
      height: 100%;
    }
    .overview-right-div {
      padding: 15px;
      height: 20rem;
    }
    .sc-ikkyvV {
      margin-top: 10rem;
    }
    .doctor-prescription-btn {
      margin-top: 0px;
    }
    .upload-Prescription-btn {
      width: 100%;
    }
    .similar-product-title {
      margin-top: 1rem;
      font-size: 22px;
    }
    .similar-product-section,
    .similar-product-card {
      padding: 0px;
    }
    .Horozental-line {
      display: none !important;
    }
    .similar-product-img-card {
      width: 10rem;
      height: 10rem;
    }
    .similar-product-card img {
      object-fit: contain;
      height: 8rem;
    }
    .main-div-card {
      flex-direction: column;
    }
    .breadcrumb1-row {
      display: none;
    }
  }
`;
