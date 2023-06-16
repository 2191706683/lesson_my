package main

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

func main() {
	fmt.Println("Hello, 全栈工程师")
	// mysql 地址
	dsn := "root:123456@tcp(127.0.0.1:3306)/crud_list?charset=utf8mb4&parseTime=True&loc=Local"
	// 链接数据库  连接了 模型的对应关系
	// 数据库句柄 成功
	// 同步
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		// 解决表名复数
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})

	sqlDB, err := db.DB()
	// 最大空闲
	sqlDB.SetMaxIdleConns(10)
	// 最大链接
	sqlDB.SetMaxOpenConns(100)
	//10 秒超时
	sqlDB.SetConnMaxLifetime(10 * 1000)

	type List struct {
		gorm.Model
		ID      uint8  `json:"id"`
		Name    string `json:"name"`
		Age     uint8  `json:"age"`
		School  string `json:"school"`
		Phone   string `json:"phone"`
		Address string `json:"address"`
	}

	db.AutoMigrate(&List{})

	fmt.Println("db:", db)
	fmt.Println("err:", err)

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		// 跨域
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Methods",
			"GET, POST, OPTIONS, PUT, DELETE, UPDATE")
		c.Writer.Header().Set("Access-Control-Allow-Headers",
			"Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, accept, origin, Cache-Control")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	r.POST("/list", func(c *gin.Context) {
		var data List
		err := c.ShouldBindJSON(&data)
		fmt.Println(err)
		if err != nil {
			c.JSON(200, gin.H{
				"msg":  "添加失败",
				"code": 400,
			})
		} else {
			db.Create(&data)
			c.JSON(200, gin.H{
				"msg":  "添加成功",
				"code": 200,
			})
		}

	})

	r.GET("/list", func(c *gin.Context) {
		var dataList []List
		pageSize, _ := strconv.Atoi(c.Query("pageSize"))
		page, _ := strconv.Atoi(c.Query("page"))
		offset := (page - 1) * pageSize
		limit := pageSize

		var total int64
		name := c.Query("name")
		fmt.Printf("查询条件: %s\n", name)
		fmt.Printf("offset: %d\n", offset)
		fmt.Printf("limit: %d\n", limit)

		db.Model(&List{}).Where("name LIKE ?",
			fmt.Sprintf("%%%s%%", name)).Count(&total)

		db.Where("name LIKE ?", fmt.Sprintf("%%%s%%", name)).Offset(offset).Limit(limit).Find(&dataList)
		if len(dataList) == 0 {
			c.JSON(200, gin.H{
				"msg":  "没有查询到数据",
				"code": 200,
				"data": make([]int, 0),
			})
		} else {
			c.JSON(200, gin.H{
				"msg":   "查询成功",
				"code":  200,
				"data":  dataList,
				"total": total,
			})
		}
	})

	r.PUT("/list/:id", func(c *gin.Context) {
		var data List
		id := c.Param("id")
		db.Select("id").Where("id = ?", id).Find(&data)
		if data.ID == 0 {
			c.JSON(200, gin.H{
				"msg":  "id没有找到，修改失败",
				"code": 400,
			})
		} else {
			err := c.ShouldBindJSON(&data)
			if err != nil {
				c.JSON(200, gin.H{
					"msg":  "修改失败",
					"code": 400,
				})
			} else {
				db.Where("id=?", id).Updates(&data)
				c.JSON(200, gin.H{
					"msg":  "修改成功",
					"code": 200,
				})
			}
		}
	})

	r.GET("/list/:id", func(c *gin.Context) {
		var data List
		id := c.Param("id")
		db.Where("id = ?", id).Find(&data)

		if data.ID >= 0 {
			c.JSON(200, gin.H{
				"msg":  "找到了",
				"data": data,
			})
		} else {
			c.JSON(200, gin.H{
				"msg":  "没找到了",
				"code": 400,
			})
		}
	})

	r.DELETE("/list/:id", func(c *gin.Context) {
		var data []List
		id := c.Param("id")
		db.Where("id = ?", id).Find(&data)
		if len(data) == 0 {
			c.JSON(200, gin.H{
				"msg":  "id没有找到，删除失败",
				"code": 400,
			})
		} else {
			db.Where("id = ?", id).Delete(&data)
			c.JSON(200, gin.H{
				"msg":  "删除成功",
				"code": 200,
			})
		}
	})
	PORT := "8081"
	r.Run(":" + PORT)
}
