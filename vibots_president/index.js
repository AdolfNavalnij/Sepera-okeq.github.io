am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "НПР",
    litres: 999
  },
  {
    party: "Навальный",
    litres: 89
  },
  {
    party: "АПЭ",
    litres: 1
  },
  {
    party: "ОКП",
    litres: 3
  },
  {
    party: "ОУН",
    litres: 0
  },
  {
    party: "Неззер Монархист",
    litres: 0
  }
  /*
  {
    party: "UK",
    litres: 0
  },
  {
    party: "Belgium",
    litres: 0
  },
  {
    party: "The Netherlands",
    litres: -10
  
  }*/ ],
  "legend": {},
  "innerRadius": "40%",
  "series": [{
    "type": "PieSeries3D",
    "dataFields": {
      "value": "litres",
      "category": "party"
    }
  }]
}, "chartdiv", "PieChart3D");
