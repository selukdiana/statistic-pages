import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import "./LollipopChart.css";

export const LollipopChart = () => {
  useLayoutEffect(() => {
    let root = am5.Root.new("lollipop-chart");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        alignLabels: true,
        calculateAggregates: true,
        valueField: "value",
        categoryField: "region",
      })
    );

    series.slices.template.setAll({
      strokeWidth: 3,
      stroke: am5.color(0xffffff),
    });

    series.labelsContainer.set("paddingTop", 30);

    // Set up adapters for variable slice radius
    // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
    series.slices.template.adapters.add("radius", function (radius, target) {
      let dataItem = target.dataItem;
      let high = series.getPrivate("valueHigh");

      if (dataItem) {
        let value = target.dataItem.get("valueWorking", 0);
        return (radius * value) / high;
      }
      return radius;
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      {
        region: "Могилевская область",
        value: 1591,
      },
      {
        region: "Минская область",
        value: 4028,
      },
      {
        region: "г. Минск",
        value: 4339,
      },
      {
        region: "Гродненская область",
        value: 1320,
      },
      {
        region: "Гомельская область",
        value: 1572,
      },
      {
        region: "Витебская область",
        value: 1346,
      },
      {
        region: "Брестская область",
        value: 1844,
      },
    ]);

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);
  return <div id="lollipop-chart" className="chart"></div>;
};
