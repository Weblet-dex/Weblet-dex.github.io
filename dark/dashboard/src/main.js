// Datafeed implementation that you will add later
import Datafeed from './datafeed.js';

window.tvWidg = new TradingView.widget({
    symbol: 'Bitfinex:BTC/USD',            // Default symbol pair
    interval: '1D',                        // Default interval
    fullscreen: true,                      // Displays the chart in the fullscreen mode
    container: 'tv_chart_container',       // Reference to an attribute of a DOM element
    datafeed: Datafeed,
    library_path: '../charting_library-master/charting_library/',
});

// window.tvWidg.onChartReady(function() {
//     console.log("ready chart");
//     widget.getChartLanguage();
//     let actvChrt = activeChart();
// });

let cnt = 10;

tvWidg.onChartReady(function() {
    console.log("ready chart");
    widget.getChartLanguage();
    //let actvChrt = activeChart();
});

console.log("main from");

// window.tvWidget.activeChart().createShape(
//     { price: 33300 },
//     { shape: 'horizontal_line' }
// );