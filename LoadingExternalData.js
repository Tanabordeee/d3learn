d3.json("mydata.json" , function (data){
    const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)
    canvas.selectAll("rect").data(data)
            .enter()
            .append("rect")
            .attr("width",function (d) { return d.age * 10 }) // d.age เป็นการเข้าถึง age ในไฟล์ json ให้มองเป็นเหมือน dictionary ใน python
            .attr("height",48)
            .attr("y",function (d , i) { return i * 50})
            .attr("fill","blue")

    canvas.selectAll("text") // ทำงานเกี่ยวกับ text
    .data(data)
    .enter()
    .append("text")
    .attr("fill","red")
    .attr("y", function(d, i) { return i * 50 + 24; })
    .text(function (d) { return d.name })
})

// การใช้ d3.json เป็นการเรียก function ที่ดึง ไฟล์การเก็บข้อมูลแบบ json ออกมาใช้
// data คือโค้ดที่เราได้มาจากไฟล์ json



// ถ้าเป็น แบบ csv
// แค่เป็น ไปใช้ d3.csv และ ไฟล์ที่เข้าถึงเป็น csv
d3.csv("mydata.csv" , function (data){
    const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)
    canvas.selectAll("rect").data(data)
            .enter()
            .append("rect")
            .attr("width",function (d) { return d.age * 10 }) // d.age เป็นการเข้าถึง age ในไฟล์ json ให้มองเป็นเหมือน dictionary ใน python
            .attr("height",48)
            .attr("y",function (d , i) { return i * 50})
            .attr("fill","blue")

    canvas.selectAll("text") // ทำงานเกี่ยวกับ text
    .data(data)
    .enter()
    .append("text")
    .attr("fill","red")
    .attr("y", function(d, i) { return i * 50 + 24; })
    .text(function (d) { return d.name })
})
