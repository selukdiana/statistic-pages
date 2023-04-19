import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "./StackedBarChart.css";

export const StackedBarChart = () => {
  useLayoutEffect(() => {
    let root = am5.Root.new("stacked-bar-chart");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
        arrangeTooltips: false,
      })
    );

    chart.getNumberFormatter().set("numberFormat", "#.#s");

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Data
    let data = [
      {
        region: "Могилевская область",
        2020: -1649,
        2021: 1591,
      },
      {
        region: "Минская область",
        2020: -4078,
        2021: 4028,
      },
      {
        region: "г. Минск",
        2020: -4313,
        2021: 4339,
      },
      {
        region: "Гродненская область",
        2020: -1346,
        2021: 1320,
      },
      {
        region: "Гомельская область",
        2020: -1588,
        2021: 1572,
      },
      {
        region: "Витебская область",
        2020: -1398,
        2021: 1346,
      },
      {
        region: "Брестская область",
        2020: -1816,
        2021: 1844,
      },
    ];

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "region",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
      })
    );

    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(field, labelCenterX, pointerOrientation, rangeValue) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "region",
          sequencedInterpolation: true,
          clustered: false,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: pointerOrientation,
            labelText: "{categoryY}: {valueX}",
          }),
        })
      );

      series.columns.template.setAll({
        height: am5.p100,
        strokeOpacity: 0,
        fillOpacity: 0.8,
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true,
            centerX: labelCenterX,
          }),
        });
      });

      series.data.setAll(data);
      series.appear();

      let rangeDataItem = xAxis.makeDataItem({
        value: rangeValue,
      });
      xAxis.createAxisRange(rangeDataItem);
      rangeDataItem.get("grid").setAll({
        strokeOpacity: 1,
        stroke: series.get("stroke"),
      });

      let label = rangeDataItem.get("label");
      label.setAll({
        text: field.toUpperCase(),
        fontSize: "1.1em",
        fill: series.get("stroke"),
        paddingTop: 10,
        isMeasured: false,
        centerX: labelCenterX,
      });
      label.adapters.add("dy", function () {
        return -chart.plotContainer.height();
      });

      return series;
    }

    createSeries("2020", am5.p100, "right", -3);
    createSeries("2021", 0, "left", 4);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomY",
      })
    );
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);
  return <div id="stacked-bar-chart" className="chart"></div>;
};
