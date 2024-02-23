// DOM Element < data element (Enter)
// DOM Element > data element (Update)
// DOM Element = data element (Exit)


//-------------------------------Example 1-----------------------------------------

const data = [10]
const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)

// สร้างวงกลมขึ้นมา
const circle  = canvas.append("circle")
                    .attr("cx",50)
                    .attr("cy",100)
                    .attr("r",25);

const circles = canvas.selectAll("circle").data(data)
                .enter()
                    .append("circle")
                    .attr("cx",50)
                    .attr("cy",50)
                    .attr("fill","green")
                    .attr("r",25)


// เมื่อมีการ selectAll("circle") มันจะไม่ว่างอีกต่อไปเนื่องจากไป select circle มา.
// และสิ่งที่เกิดขึ้นต่อมาคือ .enter() จะไม่สร้างวงกลมเพิ่มเนื่องจาก วงกลมแรกสร้างไปแล้ว คือ circle



//-------------------------------Example 2-----------------------------------------



const data = [10,20]
const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)

// สร้างวงกลมขึ้นมา
const circle  = canvas.append("circle")
                    .attr("cx",50)
                    .attr("cy",100)
                    .attr("r",25);

const circles = canvas.selectAll("circle").data(data).attr("fill","red")
                .enter()
                    .append("circle")
                    .attr("cx",50)
                    .attr("cy",50)
                    .attr("fill","green")
                    .attr("r",25)


// data ตัวแรกจะทำงานใน circle และ data ตัวที่สองจะทำงานใน .enter()



//-------------------------------Example 3-----------------------------------------


const data = [10,20]
const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)

// สร้างวงกลมขึ้นมา
const circle1  = canvas.append("circle")
                    .attr("cx",50)
                    .attr("cy",100)
                    .attr("r",25);
const circle2  = canvas.append("circle")
                    .attr("cx",50)
                    .attr("cy",200)
                    .attr("r",25);

const circles = canvas.selectAll("circle").data(data).attr("fill","red")
                .enter()
                    .append("circle")
                    .attr("cx",50)
                    .attr("cy",50)
                    .attr("fill","green")
                    .attr("r",25)

// data ตัวแรกจะทำงานใน circle1 และ data ตัวที่สองจะทำงานใน circle2 และ .enter() จะว่าง



//-------------------------------Example 4-----------------------------------------


const data = [10]
const canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)

// สร้างวงกลมขึ้นมา
const circle1  = canvas.append("circle")
                    .attr("cx",50)
                    .attr("cy",100)
                    .attr("r",25);
const circle2  = canvas.append("circle")
                    .attr("cx",50)
                    .attr("cy",200)
                    .attr("r",25);
const circles = canvas.selectAll("circle").data(data)
                .attr("fill","red")
                .exit()
                    .attr("fill","yellow")

// เนื่องจาก circles1 ได้ใช้ data ไปแล้วซึ่งมีdata เดียว แล้วถ้าเราอยากทำงานใน data ที่ 2 เราสามารถใช้ method exit ในการทำได้
