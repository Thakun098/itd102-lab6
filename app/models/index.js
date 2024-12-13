const config = require("../config/db");
const dataType = require("sequelize"); //ใช้เป็น Node js ORM กับหลายๆ Database 
const sequelize = new dataType(  //เอาไว้ Connect Database
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect //Why do like this, can we do in other way ?
    }
);

const db = {}; //เป็นอ็อบเจ็คที่มีข้อมูลหลายตัว มีลักษณะเป็น Key Value 

db.dataType = dataType;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, dataType);

module.exports = db; //ส่งทั้งหมดใน db ไปไฟล์อื่นให้ใช้ได้เลย
