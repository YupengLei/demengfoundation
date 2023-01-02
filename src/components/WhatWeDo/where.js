import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import *  as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import "./what.css";
import { useEffect, useState, useRef } from 'react';


const Where = () => {

	const ref = useRef(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const observer = new ResizeObserver(([entry]) => {
			setWidth(entry.contentRect.width);
		});
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [])



	useEffect(() => {





		let data = [
			{
				id: "US",
				info: "$8M+",
				name: "North America",
				value: 160,

			}, {
				id: "CN",
				info: "$20M+",
				name: "Asia",
				value: 160,
			}
		];


		const root = am5.Root.new("chartdiv");
		root.setThemes([am5themes_Animated.new(root)]);
		let chart = root.container.children.push(am5map.MapChart.new(root, {
			panX: "none",
			panY: "none",
			wheelY: "none"
		}));

		chart.seriesContainer.draggable = false;
		chart.seriesContainer.resizable = false;


		chart.events.on("wheel", function (ev) {
			if (ev.originalEvent.ctrlKey) {
				ev.originalEvent.preventDefault();
				chart.set("wheelY", "zoom");
			}
			else {
				chart.set("wheelY", "none");
			}
		});

		chart.series.push(
			am5map.MapPolygonSeries.new(root, {
				geoJSON: am5geodata_worldLow,
				exclude: ["AQ"],
				fill: "#fff",
			})
		);


		let bubbleSeries = chart.series.push(
			am5map.MapPointSeries.new(root, {
				valueField: "value",
				calculateAggregates: false,
				polygonIdField: "id"
			})
		);

		let circleTemplate = am5.Template.new({});

		bubbleSeries.bullets.push(function (root, series, dataItem) {
			let container = am5.Container.new(root, {});

			let circle = container.children.push(
				am5.Circle.new(root, {
					radius: 100,
					fillOpacity: 0.2,
					fill: am5.color("#fcb131"),
					stroke: am5.color("#fcb131"),
					strokeWidth: 4,
					//opacity: 0.2,
					cursorOverStyle: "pointer",
					tooltipText: `{name} : {info} funding for programs`
				}, circleTemplate)
			);

			circle.states.create('hover', {
				scale: 2
			});

			let countryLabel = container.children.push(
				am5.Label.new(root, {
					text: "{name}",
					paddingLeft: 5,
					populateText: true,
					fontWeight: "bold",
					fontSize: 13,
					fill: "#141414",
					centerY: am5.p50,
				})
			);

			circle.on("radius", function (radius) {
				countryLabel.set("x", radius);
			})

			return am5.Bullet.new(root, {
				sprite: container,
				dynamic: true
			});
		});

		bubbleSeries.bullets.push(function (root, series, dataItem) {
			return am5.Bullet.new(root, {
				sprite: am5.Label.new(root, {
					text: "{info}",
					fill: "#141414",
					populateText: true,
					centerX: am5.p50,
					centerY: am5.p50,
					textAlign: "center"
				}),
				dynamic: true
			});
		});

		bubbleSeries.set("heatRules", [
			{
				target: circleTemplate,
				dataField: "value",
				min: 10,   //min radius
				max: 150,  //max radius
				minValue: 0,
				maxValue: 1600,
				key: "radius"
			}
		]);

		bubbleSeries.data.setAll(data);


		function updateData() {

			for (var i = 0; i < bubbleSeries.dataItems.length; i++) {
				bubbleSeries.data.setIndex(i, { value: Math.round(width / 2), id: data[i].id, name: data[i].name, info: data[i].info })
			}
		}

		updateData();

		setInterval(function () {
			//console.log("update")
			updateData();
		}, 2000)

		return () => { root.dispose(); };

	})


	return (
		<section className='m-orgInfoGraph world_map'>
			<h2 className="m-orgInfoGraph__title world_map_title">Where we work</h2>
			<div className="where-wrapper">
				<div id="chartdiv" ref={ref}></div>

			</div>
		</section>
	)
}

export default Where;