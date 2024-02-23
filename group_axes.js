const datarr = [5,40,50,60];
 
const width = 500;
const height = 500;

const widthScale = d3.scale.linear().domain([0 , 60]).range([0,width]);

const color = d3.scale.linear().domain([0,60]).range(["red","blue"]);

const axis = d3.svg.axis().ticks(5).scale(widthScale);
// ticks(5) หมายถึงการกำหนดให้แกนมีจุดหมายเลข (ticks) ทั้งหมด 5 จุด บนแกนนั้น
// สร้าง axis โดยการไล่เลขตอนสร้างกราฟให้ไล่ตาม widthScale

const canvas = d3.select("body").append("svg").attr("width" , width).attr("height" ,height).append("g").attr("transform","translate(20,0)")

// .append("g") เป็นการทำให้ ข้อมูลใน svg อยู่ใน group เดียวกัน
// .attr("transform","translate(20,0)") เป็นการขยับ กรอบ svg


const bar = canvas.selectAll("rect")
            .data(datarr)
            .enter()
                .append("rect")
                .attr("width", function(d){ return widthScale(d);})

                .attr("height", 50)
                .attr("fill",function(d) { return color(d);})

                .attr("y",function (d , i) { return i * 100});

canvas.append("g").attr("transform","translate(0,400)").call(axis)

// call(axis) เป็นการเรียก axis ให้เข้ามาทำงานในกรอบ
// .append("g").attr("transform","translate(0,400)").call(axis) เป็นการ group เส้น axis และทำการ traslate ลงมา 400