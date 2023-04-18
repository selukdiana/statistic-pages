import React from "react";
import { InfographicsItem } from "../../components/InfographicsItem";
import "./HomePage.css";
import { BranchesInfoItem } from "../../components/BranchesInfoItem/BranchesInfoItem";
import { BsFillPeopleFill, BsFillHouseDoorFill } from "react-icons/bs";
import { AiFillShopping, AiOutlineFund, AiFillGold } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineSignalCellularAlt, MdOutlineFactory } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__header">
        <div className="container">
          <h1>
            Интерактивная информационно-аналитическая система распространения
            официальной статистической информации
          </h1>
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
            >
              <AiOutlineFund />
            </InfographicsItem>
            <InfographicsItem
              title={"ВВП в текущих ценах"}
              subtitle={"30,3 млрд. руб."}
            >
              <MdOutlineSignalCellularAlt />
            </InfographicsItem>
            <InfographicsItem
              title={"Численность населения (на 1 января 2023 г.)"}
              subtitle={"9200,6 тыс. чел."}
            >
              <BsFillPeopleFill />
            </InfographicsItem>
            <InfographicsItem title={"Рентабельность продаж"} subtitle={"7,8%"}>
              <AiFillShopping />
            </InfographicsItem>
            <InfographicsItem
              title={"Индекс потребительских цен"}
              subtitle={"102,6%"}
            >
              <IoPricetags />
            </InfographicsItem>
            <InfographicsItem
              title={"Номинальная начисленная средняя заработная плата"}
              subtitle={"1687,8 руб"}
            >
              <RiMoneyDollarCircleFill />
            </InfographicsItem>
            <InfographicsItem
              title={"Введено в эксплуатацию жилья (общая площадь)"}
              subtitle={"588, 2 тыс. кв. м"}
            >
              <BsFillHouseDoorFill />
            </InfographicsItem>
            <InfographicsItem
              title={"Инвестиции в основной капитал"}
              subtitle={"3997,1 млн. руб."}
            >
              <TbMoneybag />
            </InfographicsItem>
          </div>
        </div>
      </div>
      <div className="home-page__branches">
        <div className="container">
          <h2 className="title">Отрасли статистики</h2>
          <div className="branches__info">
            <BranchesInfoItem title={"Статистика промышленности"}>
              <MdOutlineFactory />
            </BranchesInfoItem>
            <BranchesInfoItem title={"Статистика энергетики"}>
              <SlEnergy />
            </BranchesInfoItem>
            <BranchesInfoItem title={"Статистика транспорта"}>
              <FaCarSide />
            </BranchesInfoItem>
            <BranchesInfoItem title={"Структурная статистика"}>
              <AiFillGold />
            </BranchesInfoItem>
          </div>
        </div>
      </div>
    </div>
  );
};
