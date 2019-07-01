var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
};
var dataS = [{
        city: '上海',
        value: 1,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '广州',
        value: 1,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '大连',
        value: 2,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '南宁',
        value: 1,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '南昌',
        value: 2,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
];
var dataB = [{
        city: '北京',
        value: 2,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '哈尔滨',
        value: 1,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '长沙',
        value: 2,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '成都',
        value: 1,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '西安',
        value: 2,
        name: 'yukun',
        src:'https://fallbacks.carbonads.com/nosvn/fallbacks/f1942942caa6a76bc03b04f9aadd6e0d.png',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
    {
        city: '上海',
        value: 1,
        name: 'Wenger',
        src:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1230813734,105560641&fm=179&app=42&f=JPEG?w=121&h=140',
        text: 'XSKY实现了本地集群与云端之间有效的一体化解决方案， 使我们的数据可以在云端和私有数据中心之间灵活流动。',
    },
];
var yData = [];
var barData = [];

dataS.map((item, i) => {
    barData.push(item);
    yData.push(i + item.city);
})
dataB.map((item, i) => {
    barData.push(item);
    yData.push(i + item.city);
})

geoCoordMap['深圳'] = [114.5435, 22.5439];
geoCoordMap['北京'] = [116.4551, 40.2539];


var SZData = [];
var BJData = [];
var tempData = ['深圳', SZData, '北京', BJData];

dataS.map((item, index) => {
    var arr = [];
    arr.push(item)
    arr.push({
        city: '深圳',
    })
    SZData.push(arr)
})
dataB.map((item, index) => {
    var arr = [];
    arr.push(item)
    arr.push({
        city: '北京'
    })
    SZData.push(arr)
})

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].city];
        var toCoord = geoCoordMap[dataItem[1].city];
        if (fromCoord && toCoord) {
            res.push({
                fromCity: dataItem[0].city,
                toCity: dataItem[1].city,
                coords: [fromCoord, toCoord],
                value: dataItem[0].value,
                name: dataItem[0].city,
                employee: dataItem[0].name,
                src: dataItem[0].src,
                text: dataItem[0].text,
            });
        }
    }
    return res;
};

function tooltipHtml(params){
    return `
    <div class="tooltip--outer">
        ${params && `<div class="tooltip--info">
                <div class="info--avatar"><img src="${params.src}" /></div>
                <div class="info--office">
                    <h3>${params.employee}</h3>
                    <span>来自：${params.fromCity}</span>
                    <span>办公室：${params.toCity}</span>
                </div>
            </div>
            <p class="tooltip--text">${params.text}</p>`
        }
    </div>
    `
}

var color = ['#00ff78', '#ff971b', '#acff43', '#ff73b7', '#ffff46', '#27bbfe'];
var series = [{
    type: 'map',
    map: 'china',
    //    width: '100%',
    geoIndex: 1,
    zlevel: 1,
    left: '0',
    //    aspectScale: 0.75, //长宽比
    showLegendSymbol: false, // 存在legend时显示
    label: {
        normal: {
            show: false,
        },
        emphasis: {
            show: false,
            textStyle: {
                color: '#fff'
            }
        }
    },
    roam: false,
    itemStyle: {
        normal: {
            areaColor: 'rgba(128, 128, 128, 0)',
            borderColor: '#49a7d5', //省市边界线00fcff 516a89

        },
        emphasis: {
            areaColor: 'rgba(128, 128, 128, 0)',
        }
    },
    data: [{
        name: '南海诸岛',
        value: 0,
        itemStyle: {
            normal: {
                opacity: 0,
                label: {
                    show: false
                }
            }
        }
    }]
}, ];

series.push({
    name: tempData[0],
    type: 'lines',
    zlevel: 3,
    symbol: ['none', 'circle'],
    effect: {
        show: true,
        period: 3, //箭头指向速度，值越小速度越快
        trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbolSize: 4, //图标大小
    },
    lineStyle: {
        normal: {
            opacity: 1,
            curveness: 0.4, //曲线的弯曲程度
            color: '#609fd4'
        }
    },
    data: convertData(tempData[1])
},{
    name: tempData[2],
    type: 'lines',
    zlevel: 3,
    symbol: ['none', 'circle'],
    effect: {
        show: true,
        period: 3, //箭头指向速度，值越小速度越快
        trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbolSize: 4, //图标大小
    },
    lineStyle: {
        normal: {
            opacity: 1,
            curveness: 0.4, //曲线的弯曲程度
            color: '#609fd4'
        }
    },
    data: convertData(tempData[3])
}, {
    name: tempData[0],
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '{b}',

        }
    },
    symbolSize: function(val) {
        return val[2] / 2;
    },
    data: tempData[1].map(function(dataItem) {
        return {
            name: dataItem[0].city,
            value: geoCoordMap[dataItem[0].city].concat([dataItem[0].value])
        };
    })
},{
    name: tempData[2],
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '{b}',

        }
    },
    symbolSize: function(val) {
        return val[2] / 2;
    },
    data: tempData[3].map(function(dataItem) {
        return {
            name: dataItem[0].city,
            value: geoCoordMap[dataItem[0].city].concat([dataItem[0].value])
        };
    })
}, {
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 4,
    symbol: 'pin',
    itemStyle: {
        normal: {
            color: 'white',
        }
    },
    rippleEffect: {
        brushType: 'stroke'
    },
    data: [{
        name: tempData[2],
        value: geoCoordMap[tempData[2]],
        visualMap: false,
        
    },{
        name: tempData[0],
        value: geoCoordMap[tempData[0]],
        visualMap: false
    }],
}, {
    name: 'barSer',
    type: 'bar',
    roam: false,
    visualMap: false,
    zlevel: 2,
    barMaxWidth: 8,
    barGap: 0,
    itemStyle: {
        normal: {
            color: function(params) {
                // build a color map as your need.
                var colorList = [{
                        colorStops: [{
                            offset: 0,
                            color: '#FFD119' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FFAC4C' // 100% 处的颜色
                        }]
                    },
                    {
                        colorStops: [{
                            offset: 0,
                            color: '#00C0FA' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2F95FA' // 100% 处的颜色
                        }]
                    }
                ];
                if (params.dataIndex < 3) {
                    return colorList[0]
                } else {
                    return colorList[1]
                }
            },
            barBorderRadius: 15
        }
    },
    data: barData
});

var option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            console.log(params)
            if (params.seriesType === "scatter" && params.name !== tempData[0] && params.name !== tempData[2]) {
                return "<br>" + params.seriesName + " ---> " + params.data.name + "<br />数量：" + params.data.value[2];
                // return tooltipHtml(params)
            } else if (params.seriesType === "lines") {
                // return "<br>" + params.data.fromCity + " ---> " + params.data.toCity + "<br />数量：" + params.data.value;
                return tooltipHtml(params.data)
            } else {
                return params.name;
            }
        }
    },
    title: [{
        show: true,
        text: '我们来自...',
        textStyle: {
            color: '#2D3E53',
            fontSize: 18
        },
        left: 460,
        top: 50
    }],
    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        color: color,
        show: false
    },
    grid: {
        left: 550,
        top: 100,
        bottom: 30,
        width: '20%'
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 85,
            textStyle: {
                color: '#455A74',
                align: 'left',
                fontSize: 14
            },
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#FAAA39',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (parseInt(params.slice(0, 1)) < 3) {
                    return [
                        '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}  ' + params.slice(1)
                    ].join('\n')
                } else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}  ' + params.slice(1)
                    ].join('\n')
                }
            }
        },
        data: yData
    },
    geo: {
        map: 'china',
        zoom: 0.98,
        zlevel: 2,
        left: '0',
        label: {
            emphasis: {
                show: false
            },
        },
        roam: false, //是否允许缩放
        itemStyle: {
            normal: {
                areaColor: '#214278',
                borderColor: '#195BB9', //省市边界线00fcff 516a89

            },
            emphasis: {
                color: '#112246' //悬浮背景
            }
        },
    },
    series: series
};

export default option;