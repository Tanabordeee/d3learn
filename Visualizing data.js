const datarr = [20,40,50];

const canvas = d3.select("body").append("svg").attr("width" , 500).attr("height" ,500);

const bar = canvas.selectAll("rect")
            .data(datarr)
            .enter()
                .append("rect")
                .attr("width", function(d){ return d * 10;})
                .attr("height", 50)
                .attr("y",function (d , i) { return i * 100});


// select all ("rect") มันจะ return empty array มันใช้ ในการผูกกับ data

// data() method นี้ใช้ในการพูดถึง data ที่จะใช้

// enter () method return new selection (ถ้าไม่เข้าใจคือมันจะทำการสร้าง loop โดยดึงค่าจาก data arr มาทีละตัวมาทำกราฟ) (มันมักมาคู่กับ select และ data method เสมอ)

// append("rect") เป็นการเพิ่ม สี่เหลี่ยมลงไป

// function(d){ return d;} เป็นการเอาค่าใน dataarr มากำหนด ความกว้าง

// การคูณ *10 ทำให้กว้างขึ้นเฉยๆ

// function (d , i) { return i * 100} d คือ data ที่ส่งมาจาก dataarr และ i คือ index ของdata นั้น

// y คือ ตำแหน่งที่กำหนดจากจุด 0,0 ขอบบนจอ โดยเอา ค่า i * 100 เป็นการกำหนดตำแหน่ง y

