import React, { useState } from "react";
import "../styles/DashboardHome.css";
import { CiCreditCard2 } from "react-icons/ci";

import { FaChevronRight } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { Divider } from "@mui/material";
import { MdAddCard } from "react-icons/md";
import { BarChart } from "@mui/x-charts/BarChart";
import Table from "../assetsFolder/svg/Table.svg";
import lineChart from "../assetsFolder/svg/lineChart.svg";
import pie from "../assetsFolder/svg/pie.svg";
import Monthly from "../assetsFolder/svg/Monthly.svg";

const firstCardSection = [
  {
    id: 1,
    icon: <CiCreditCard2 />,
    text: "Manage a Card",
    arrow: <FaChevronRight />,
  },

  {
    id: 2,
    icon: <CiCreditCard1 />,
    text: "Issue Instant Card",
    arrow: <FaChevronRight />,
  },

  {
    id: 3,
    icon: <CiCreditCard1 />,
    text: "Issue Personalized Card",
    arrow: <FaChevronRight />,
  },

  {
    id: 4,
    icon: <MdAddCard />,
    text: "Review Card Requests",
    arrow: <FaChevronRight />,
  },
];

const DashboardHome = () => {
  return (
    <div>
      <h3>Hi Nazeer, what would you like to do today?</h3>
      <div className="subtext">Last login: 26/11/2024 14:39:58</div>

      <div>
        <div className="dash-one">
          <p>Your Quick Access</p>
          <div className="first-wrapper">
            {firstCardSection.map((firstCard) => (
              <div className="inner-dash1" key={firstCard.id}>
                <div className="arrowCircle">{firstCard.icon}</div>
                <div style={{ fontSize: "16px" }}>{firstCard.text}</div>
                <div className="arrow">{firstCard.arrow}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-container">
          <h3>Analytics</h3>
          <Divider className="analytics-divider" />
        </div>

        <div className="sec">
          <div className="secondSec">
            <div className="">
              <CiCreditCard1 />
            </div>
            <p>Total Active Cards</p>
            <h3>26,478</h3>
          </div>
          <div className="secondSec">
            <div className="">
              <CiCreditCard1 />
            </div>
            <p>Total Active Cards</p>
            <h3>26,478</h3>
          </div>{" "}
          <div className="secondSec">
            <div className="">
              <CiCreditCard1 />
            </div>
            <p>Total Active Cards</p>
            <h3>26,478</h3>
          </div>{" "}
          <div className="secondSec">
            <div className="">
              <CiCreditCard1 />
            </div>
            <p>Total Active Cards</p>
            <h3>26,478</h3>
          </div>
        </div>
        {/* 
        <div className="third-sec">
          <div>
            <img style={{ width: "99%" }} src={Monthly} alt="" />
          </div>

          <div className="table">
            <img src={Table} alt="Table" />
          </div>
        </div>

        <div className="fourth-sec">
          <div style={{ height: "260px" }}>
            <img src={lineChart} alt="line-chart" />
          </div>
          <div style={{ marginTop: "-2rem" }}>
            <img src={pie} alt="pie" />
          </div>
        </div> */}

        <div className="third-sec">
          <div className="chart-container">
            <img className="full-width-img" src={Monthly} alt="Monthly Chart" />
          </div>

          <div className="table-container">
            <img className="table-img" src={Table} alt="Table" />
          </div>
        </div>

        <div className="fourth-sec">
          <div className="chart-box">
            <img className="chart-img" src={lineChart} alt="Line Chart" />
          </div>
          <div className="chart-box">
            <img className="chart-img" src={pie} alt="Pie Chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
