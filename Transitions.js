const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)

const circle = canvas.append("circle").attr("cx",50).attr("cy",50).attr("r",25)

/*
circle.transition().duration(1500).delay(2000).attr("cx",150).transition().attr("cy",150).transition().attr("cx",0);

// transition เป็นการกำหนดการสร้าง animation หลังจาก เราเรียก method transition แล้ว .duration คือ ความลื่นไหลของ animation
//  dalay คือ ให้ delay ก่อนเริ่ม animation ส่วน attr คือการ ให้ขยับไปทางแกน x ที่จุด 150 

// และหลังจากนั้น .transition() ที่อยู่หลัง .attr("cx",150) เป็นการบอกว่าให้ทำอีก animation นึงคือขยับไปทาง y ที่จุด 150

*/

circle.transition().duration(1500).delay(1000).attr("cx",150)
                   .each("end",function () { d3.select(this).attr("fill","red") });

// end หมายถึง end transition คือ function จะ run หลังจากที่ end transition
// this หมายถึง element circle