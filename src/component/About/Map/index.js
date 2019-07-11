import React from 'react';
import echarts from 'echarts';
import 'echarts/src/chart/map';
import 'echarts/map/js/china.js';
import option from '../../../config/map_conf';

const styles = {
    width: '80vw',
    height: "80vw",
    maxWidth: '100vh',
    maxHeight: '100vh',
    margin: '0 auto',
};

class Map extends React.Component {
    constructor(props){
        super(props)
        this.option = option;
        this.charts = React.createRef();
    }
    componentDidMount() {
        let myChart = echarts.init(this.charts.current);
        myChart.setOption(this.option);
    }
    render(){
        return(
            <div style={styles} ref={this.charts} />
        )
    }
}

export default Map;