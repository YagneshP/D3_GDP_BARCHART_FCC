const width = 500;
const height = 500;
const title_height = 450

//set svg in the body
const svg = d3.select('body')
							.append('svg')
							.attr('width', width)
							.attr('height',height)
							.style('background-color', 'pink')
//set 'title' for the bar
const chartTitle = svg.append('text')
											.text('Bar Chart')
											.attr("x", (width / 2))             
        							.attr("y", height-title_height)
        							.attr("text-anchor", "middle")  
											.attr('id','title')