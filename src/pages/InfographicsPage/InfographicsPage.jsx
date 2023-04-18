import { InfographicsGridElement } from "../../components/InfographicsGridElement";
import "./InfographicsPage.css";

export const InfographicsPage = () => {
  return (
    <div className="infographics-page">
      <div className="container">
        <h2 className="infographics__title">
          Основные показатели по промышленности
        </h2>
        <div className="infographics__main">
          <InfographicsGridElement
            title={"Количество организаций промышленности на конец года"}
          />
          <InfographicsGridElement
            title={"Объем промышленного производства в текущих ценах"}
          />
          <InfographicsGridElement
            title={
              "Объем промышленного производства в текущих ценах на душу населения"
            }
          />
          <InfographicsGridElement
            title={
              "Индекс промышленного производства в % к соответствующему периоду предыдущего года"
            }
          />
          <InfographicsGridElement
            title={
              "Производительность труда в промышленности, в % к предыдущему году"
            }
          />
          <InfographicsGridElement
            title={
              "Объем производства промышленной продукции в натуральном выражении"
            }
          />
          <InfographicsGridElement
            title={
              "Объем производства промышленной продукции в натуральном выражении на душу населения"
            }
          />
          <InfographicsGridElement
            title={"Индекс производства потребительских товаров"}
          />
          <InfographicsGridElement
            title={"Коэффициент использования производственной мощности"}
          />
          <InfographicsGridElement
            title={
              "Запасы готовой продукции на складах промышленных организаций на конец периода"
            }
          />
          <InfographicsGridElement
            title={
              "Соотношение запасов и среднемесячного объема производства на конец периода, в %"
            }
          />
          <InfographicsGridElement
            title={
              "Объем производства промышленной продукции в натуральном выражении на 1000 человек"
            }
          />
        </div>
      </div>
    </div>
  );
};
