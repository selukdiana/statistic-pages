import React from "react";
import { InfographicsItem } from "../../components/InfographicsItem";
import "./HomePage.css";
import { BranchesInfoItem } from "../../components/BranchesInfoItem/BranchesInfoItem";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__header">
        <div className="container">
          <h1>ЗАГОЛОВОК</h1>
        </div>
      </div>
      <div className="home-page__infographics">
        <div className="container">
          <h2 className="title">Инфографика</h2>
          <h3 className="infographics__subtitle">Основные показатели</h3>
          <div className="infographics__indicators">
            <InfographicsItem />
            <InfographicsItem />
            <InfographicsItem />
            <InfographicsItem />
            <InfographicsItem />
            <InfographicsItem />
            <InfographicsItem />
            <InfographicsItem />
          </div>
        </div>
      </div>
      <div className="home-page__branches">
        <div className="container">
          <h2 className="title">Отрасли статистики</h2>
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="branches__info">
            <BranchesInfoItem />
            <BranchesInfoItem />
            <BranchesInfoItem />
            <BranchesInfoItem />
          </div>
        </div>
      </div>
    </div>
  );
};
