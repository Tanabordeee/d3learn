// วาดรูป
const canvas = d3.select("body").append("svg").attr("width" , 500).attr("height" ,500);

// ใช้สร้างกรอบในการวาดรูป โดย d3.select("body") เป็นการเลือก body ที่จะทำการ append <svg><\svg> เข้าไป และ attr ให้ฟิลเรากำหนด css 
// canvas เหมือนเป็นการกำหนดกรอบ

const circle = canvas.append("circle").attr("cx",250).attr("cy",250).attr("r",50).attr("fill","red");

// สร้างวงกลม ลงไปในกรอบ เราเลย append circle ลงไป cx  หมายถึงพิกัด x ส่วน cy หมายถึงพิกัด y และ r หมายถึงรัศมี

const react = canvas.append("rect").attr("width",100).attr("height",100)

// สร้างสี่เหลี่ยม attr("width",100).attr("height",100) กำหนด ความกว้าง ความสูง ถ้าอยากกำหนดตำแหน่งก็ใส่ x หรือ y เข้าไป .attr("x", value) .attr("y", value)


const line = canvas.append("line").attr("x1",0).attr("y1",100).attr("x2",400).attr("y2",400).attr("stroke","green").attr("stroke-width",10)

// สร้างเส้น .attr("x1",0) จุด x1  .attr("y1",100) จุด y1 .attr("x2",400) จุด x2 .attr("y2",400) จุด y2 .attr("stroke","green") กำหนดสีเส้น .attr("stroke-width",10) กำหนดความหนาเส้น
