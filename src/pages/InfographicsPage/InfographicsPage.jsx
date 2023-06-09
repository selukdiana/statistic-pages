import { useNavigate } from "react-router-dom";
import { InfographicsGridElement } from "../../components/InfographicsGridElement";
import "./InfographicsPage.css";
import { Masonry } from "react-plock";

export const InfographicsPage = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Количество организаций промышленности на конец года",
      info: "Структурное подразделение: управление произведенного ВВП и ВРП Главного управления национальных счетов",
      color: "red",
    },
    {
      title: "Объем промышленного производства в текущих ценах",
      info: "Структурное подразделение: управление произведенного ВВП и ВРП Главного управления национальных счетов",
      color: "green",
    },
    {
      title:
        "Объем промышленного производства в текущих ценах на душу населения",
      info: "Структурное подразделение: управление произведенного ВВП и ВРП Главного управления национальных счетов",
      color: "blue",
    },

    {
      title:
        "Индекс промышленного производства в % к соответствующему периоду предыдущего года",
      info: "Структурное подразделение: управление индексов промышленного производства Главного управления статистики предприятий",
      color: "orange",
    },
    {
      title:
        "Производительность труда в промышленности, в % к предыдущему году",
      info: "Структурное подразделение: управление индексов промышленного производства Главного управления статистики предприятий",
      color: "purple",
    },
    {
      title:
        "Объем производства промышленной продукции в натуральном выражении",
      info: "Структурное подразделение: управление статистики промышленного производства, науки и инноваций Главного управления статистики предприятий",
      color: "pink",
    },
    {
      title:
        "Объем производства промышленной продукции в натуральном выражении на душу населения",
      info: "Структурное подразделение: управление статистики промышленного производства, науки и инноваций Главного управления статистики предприятий",
      color: "brown",
    },
    {
      title: "Индекс производства потребительских товаров",
      info: "Структурное подразделение: управление индексов промышленного производства Главного управления статистики предприятий",
      color: "wheat",
    },

    {
      title: "Коэффициент использования производственной мощности",
      info: "Структурное подразделение: управление статистики промышленного производства, науки и инноваций Главного управления статистики предприятий",
      color: "orange",
    },

    {
      title:
        "Запасы готовой продукции на складах промышленных организаций на конец периода",
      info: "Структурное подразделение: управление индексов промышленного производства Главного управления статистики предприятий",
      color: "purple",
    },
    {
      title:
        "Соотношение запасов и среднемесячного объема производства на конец периода, в %",
      info: "Структурное подразделение: управление индексов промышленного производства Главного управления статистики предприятий",
      color: "blue",
    },

    {
      title:
        "Объем производства промышленной продукции в натуральном выражении на 1000 человек",
      info: "Структурное подразделение: управление статистики промышленного производства, науки и инноваций Главного управления статистики предприятий",
      color: "green",
    },
  ];

  return (
    <div className="infographics-page">
      <div className="container">
        <h2 className="infographics__title">
          Основные показатели по промышленности
        </h2>
        <Masonry
          items={items}
          config={{
            columns: [1, 2, 3],
            gap: [40, 20, 12],
            media: [640, 768, 1024],
          }}
          render={(item, idx) => (
            <div
              onClick={() => {
                navigate("info", { replace: true });
              }}
              className="infographics-grid-element"
              key={idx}
              style={{ backgroundColor: "white" }}
            >
              <div className="grid-element__content">
                <h4 className="grid-element__title">{item.title}</h4>
                <div className="grid-element__info">
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
