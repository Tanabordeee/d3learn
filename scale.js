// การ ทำscales
/*

const datarr = [20,40,50,60];
const canvas = d3.select("body").append("svg").attr("width" ,500).attr("height" ,500);

const bar = canvas.selectAll("rect")
            .data(datarr)
            .enter()
                .append("rect")
                .attr("width", function(d){ return d * 10;})
                .attr("height", 50)
                .attr("y",function (d , i) { return i * 100});
    ปัญหาที่จะพบคือ จะหาการ scale กราฟเกิน 500 ไม่ได้เพราะกำหนดกรอบไว้ที่ 500 วิธีแก้คือ ใช้ method scale

*/

const datarr = [5,40,50,60];
 
const width = 500;
const height = 500;

const widthScale = d3.scale.linear().domain([0 , 60]).range([0,width]);

// domain คือ ค่าใน dataarr domain[เริ่มที่ , สิ้นสุด]

// range คือค่า สูงสุด ที่เป็นไปได้ 

const color = d3.scale.linear().domain([0,60]).range(["red","blue"]);

// .range(["red","blue"]) เป็นการให้ค่าที่ต่ำที่สุด เป็น red แล้วไล่ไปค่าสูงสุดถึงเป็น blue;

const canvas = d3.select("body").append("svg").attr("width" , width).attr("height" ,height);

const bar = canvas.selectAll("rect")
            .data(datarr)
            .enter()
                .append("rect")
                .attr("width", function(d){ return widthScale(d);})

                // function(d){ return widthScale(d);} เป็นการส่งค่าแต่ละค่าใน datarr ไปใน function(d) d เป็นตัวรับค่า แล้ว return ค่าไปที่ function widthScale โดยส่งค่า d 
                // ไปแล้วมันจะไปที่ .domain([0 , 60]) แล้วไปที่range เพื่อที่จะทำให้กราฟ fit หรือไม่เลยกรอบ แล้วมันจะส่งค่ากลับมาที่ .attr("width", function(d){ return widthScale(d);})
                // เป็นค่า width ใหม่

                .attr("height", 50)
                .attr("fill",function(d) { return color(d);})

                .attr("y",function (d , i) { return i * 100});
