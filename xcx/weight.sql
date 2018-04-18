/*
Navicat MySQL Data Transfer

Source Server         : mba
Source Server Version : 50553
Source Host           : 127.0.0.1:3306
Source Database       : small

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-04-17 21:20:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for weight
-- ----------------------------
DROP TABLE IF EXISTS `weight`;
CREATE TABLE `weight` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `f_name` varchar(100) DEFAULT NULL,
  `food` varchar(100) DEFAULT NULL,
  `exec` varchar(100) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weight
-- ----------------------------
INSERT INTO `weight` VALUES ('2', '增肥计划一周表之周天:', '饮食：肉、鱼、奶、豆、蛋类富含蛋白质，增肌肉需要的就是蛋白质了，在三餐中可以多吃这类食物；可以采取少食多餐的方法，每顿饭不宜吃的太饱。', '增肥运动推荐：30脚踏车，40分钟慢跑，10分钟放松肌肉', '1');
INSERT INTO `weight` VALUES ('3', '均衡饮食计划:', '饮食：肉、鱼、奶、豆、蛋类富含蛋白质，增肌肉需要的就是蛋白质了，在三餐中可以多吃这类食物；可以采取少食多餐的方法，每顿饭不宜吃的太饱。', '均衡运动推荐：30脚踏车，40分钟慢跑，10分钟放松肌肉', '3');
INSERT INTO `weight` VALUES ('1', '减肥计划一周表之周天：', '早饭：麦片粥(一小碗)、面包(一片)葡萄,午饭：烧牛肉、蔬菜沙拉、冬瓜汤、生西红柿一个,晚饭：玉米粥(一小碗)、馒头、烧芦笋，生黄瓜一根', '减肥运动推荐：30脚踏车，40分钟慢跑，10分钟放松肌肉', '2');
