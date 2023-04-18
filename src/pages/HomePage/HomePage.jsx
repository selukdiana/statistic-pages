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
            <InfographicsItem
              title={"ВВП в сопоставимых ценах"}
              subtitle={"96,4%"}
            />
            <InfographicsItem
              title={"ВВП в текущих ценах"}
              subtitle={"30,3 млрд. руб."}
            />
            <InfographicsItem
              title={"Численность населения (на 1 января 2023 г.)"}
              subtitle={"9200,6 тыс. чел."}
            />
            <InfographicsItem
              title={"Рентабельность продаж"}
              subtitle={"7,8%"}
            />
            <InfographicsItem
              title={"Индекс потребительских цен"}
              subtitle={"102,6%"}
            />
            <InfographicsItem
              title={"Номинальная начисленная средняя заработная плата"}
              subtitle={"1687,8 руб"}
            />
            <InfographicsItem
              title={"Введено в эксплуатацию жилья (общая площадь)"}
              subtitle={"588, 2 тыс. кв. м"}
            />
            <InfographicsItem
              title={"Инвестиции в основной капитал"}
              subtitle={"3997,1 млн. руб."}
            />
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
