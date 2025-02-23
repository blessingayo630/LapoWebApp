import React from "react";
import "../styles/DashboardHome.css";
import { CiCreditCard2 } from "react-icons/ci";

import { FaChevronRight } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { Divider } from "@mui/material";
import { MdAddCard } from "react-icons/md";
import Table from "../assetsFolder/svg/Table.svg";
import lineChart from "../assetsFolder/svg/lineChart.svg";
import pie from "../assetsFolder/svg/pie.svg";
import Monthly from "../assetsFolder/svg/Monthly.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { LiaMoneyBillWaveSolid, LiaHourglassHalfSolid } from "react-icons/lia";
import { IoAlertCircleOutline } from "react-icons/io5";

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
            <div style={{ width: "90%", margin: "0 auto" }}>
              <CiCreditCard1
                style={{
                  color: "#00984C",
                  marginBottom: "5px",
                  marginTop: "3px",
                }}
              />

              <p style={{ marginTop: "-2px" }}>Total Active Cards</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    marginTop: "-0px",
                  }}
                >
                  26,478
                </p>
                <div
                  style={{
                    background: "#EFFAF6",
                    width: "56px",
                    height: "20px",
                    color: "#29A174",
                    fontSize: "10px",
                    textAlign: "center",
                    paddingTop: "3px",
                    marginTop: "10px",
                  }}
                >
                  <MdOutlineArrowOutward /> +90%
                </div>
                <div style={{ marginTop: "6px" }}>this month</div>
              </div>
            </div>
          </div>
          <div className="secondSec">
            <div style={{ width: "90%", margin: "0 auto" }}>
              <CiCreditCard2
                style={{
                  color: "#8020E7",
                  marginBottom: "5px",
                  marginTop: "3px",
                }}
              />

              <p style={{ marginTop: "-2px" }}>Total Personalized Cards</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    marginTop: "-0px",
                  }}
                >
                  15,703
                </p>
                <div
                  style={{
                    background: "#EFFAF6",
                    width: "56px",
                    height: "20px",
                    color: "#29A174",
                    fontSize: "10px",
                    textAlign: "center",
                    paddingTop: "3px",
                    marginTop: "10px",
                  }}
                >
                  <MdOutlineArrowOutward /> 8.5%
                </div>
                <div style={{ marginTop: "6px" }}>this month</div>
              </div>
            </div>
          </div>
          <div className="secondSec">
            <div style={{ width: "90%", margin: "0 auto" }}>
              <LiaMoneyBillWaveSolid
                style={{
                  color: "#2087E7",
                  marginBottom: "5px",
                  marginTop: "3px",
                }}
              />

              <p style={{ marginTop: "-2px" }}>Today’s Revenue</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    marginTop: "-0px",
                  }}
                >
                  ₦9.3M
                </p>
                <div
                  style={{
                    background: "#EFFAF6",
                    width: "56px",
                    height: "20px",
                    color: "#29A174",
                    fontSize: "10px",
                    textAlign: "center",
                    paddingTop: "3px",
                    marginTop: "10px",
                  }}
                >
                  <MdOutlineArrowOutward /> +6%
                </div>
                <div style={{ marginTop: "6px" }}>yesterday</div>
              </div>
            </div>
          </div>
          <div className="secondSec">
            <div style={{ width: "90%", margin: "0 auto" }}>
              <LiaHourglassHalfSolid
                style={{
                  color: "#E78020",
                  marginBottom: "5px",
                  marginTop: "3px",
                }}
              />

              <p style={{ marginTop: "-2px" }}>Pending Requests</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    marginTop: "-0px",
                  }}
                >
                  38
                </p>
                {/* <div
                  style={{
                    background: "#EFFAF6",
                    width: "56px",
                    height: "20px",
                    color: "#29A174",
                    fontSize: "10px",
                    textAlign: "center",
                    paddingTop: "3px",
                    marginTop: "10px",
                  }}
                >
                  <MdOutlineArrowOutward /> +90%
                </div> */}
                <div style={{ marginTop: "6px", color: "#E78020" }}>
                  <IoAlertCircleOutline />
                  Requires attention
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="third-sec">
          <div className="chart-container">
            <img
              className="full-width-img"
              style={{ marginTop: "-2px" }}
              src={Monthly}
              alt="Monthly Chart"
            />
          </div>

          <div className="table-container">
            <img className="table-img" src={Table} alt="Table" />
          </div>
        </div>

        <div className="fourth-sec">
          <div className="chart-box">
            <img className="line-img" src={lineChart} alt="Line Chart" />
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
