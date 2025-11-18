import * as d3 from "d3";
import console_monkey_patch, { getD3Data } from '../console-monkey-patch';
import { useEffect, useState } from 'react';

//log to num given in practical
export function LogToNum(input) {
    if (!input) { return 0 };
    var stringArray = input.split(/(\s+)/);

    for (const item of stringArray) {
        if (item.startsWith('gain:')) {
            let val = item.substring(5)
            return Number(val)
        }
    }
    return 0;
}
export default function Graph() {
    const [rngArray, setRngArray] = useState([]);
    const maxItems = 50;
    const timeOut = 100;
    const maxValue = 2;

    useEffect(() => {
        const interval = setInterval(() => {
            //logs is set to empty array if null
            const logs = getD3Data() || [];
            //use function to pull num from logs
            const numbers = logs.map(line => LogToNum(line));
            //slice and "-" lets you pull LAST items from log
            const val = numbers.slice(-maxItems);
            setRngArray(val);
        }, timeOut);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        //svg element
        const svg = d3.select('svg')
        svg.selectAll("*").remove();

        //set width and height
        let w = svg.node().getBoundingClientRect().width
        w = w - 40
        let h = svg.node().getBoundingClientRect().height
        h = h - 25
        const barWidth = w / rngArray.length

        //create yScale
        let yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([h, 0]);

        //translate the bars to make room for axis
        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', 'translate(30, 3)')

        //gradient
        chartGroup.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", yScale(0))
            .attr("x2", 0)
            .attr("y2", yScale(maxValue))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "red" },
                { offset: "100%", color: "blue" }
            ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("stop-color", function (d) { return d.color; })
            

        //lines
        chartGroup
            .append('path')
            .datum(rngArray)
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)')
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x((d, i) => i * barWidth)
                .y((d) => yScale(d))
        )

        //add y axis to cahrt group
        let yAxis = d3.axisLeft(yScale);
        chartGroup.append('g')
            .classed('axis y', true)
            .call(yAxis);
    }, [rngArray]);

    return (
        <div className="App Container">
            <div className="row">
            <svg width="100%" height="300px" className="border border-primary rounded p-2"></svg>
            </div>
        </div>
    )
    }