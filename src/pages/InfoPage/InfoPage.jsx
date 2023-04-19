import { Chart } from "../../components/Chart";
import { ClusteredBarChart } from "../../components/ClusteredBarChart";
import { LollipopChart } from "../../components/LollipopChart/LollipopChart";
import { StackedBarChart } from "../../components/StackedBarChart/StackedBarChart";
import "./InfoPage.css";

export const InfoPage = () => {
  return (
    <div className="info-page">
      <h2>Количество промышленных предприятий по областям</h2>
      <div className="charts" style={{ height: "90vh" }}>
        <Chart />
        <ClusteredBarChart />
        <StackedBarChart />
        <LollipopChart />
      </div>
    </div>
  );
};
