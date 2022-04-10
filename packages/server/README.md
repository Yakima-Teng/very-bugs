# 后台系统

## 系统需求

- MySQL >= 5.7
- Node >= 14.17.5

## 表结构设计

### 1、用户表

```bash
CREATE TABLE `wp_users` (
  `user_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_login_name` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '用户登录用户名',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '用户登录密码',
  `user_nickname` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '用户昵称',
  `user_phone` varchar(11) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '用户手机号',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '用户邮箱',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '用户注册时间',
  `user_status` int(11) NOT NULL DEFAULT '0' COMMENT '用户状态，0-正常，1-冻结',
  `company_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '公司id，每个用户只能归属到一个公司下（一个公司下面可以有多个项目）',
  PRIMARY KEY (`user_id`),
  KEY `user_login_name_key` (`user_login_name`),
  KEY `user_nickname` (`user_nickname`),
  KEY `user_phone` (`user_phone`),
  KEY `user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
```
