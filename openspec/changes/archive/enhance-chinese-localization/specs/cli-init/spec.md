## ADDED Requirements

### Requirement: 中文模板初始化支持
初始化命令 SHALL 支持创建包含中文关键字的模板文件。

#### Scenario: 创建中文项目模板
- **WHEN** 用户使用openspec init命令初始化项目
- **THEN** 系统应提供选项创建包含中文关键字的模板文件

#### Scenario: 双语模板支持
- **WHEN** 用户选择中文本地化选项
- **THEN** 系统应生成同时包含中英文关键字支持的模板文件

### Requirement: 默认中文模板初始化
初始化命令 SHALL 默认使用中文模板进行初始化。

#### Scenario: 默认中文初始化
- **WHEN** 用户使用openspec init命令初始化项目时未指定语言选项
- **THEN** 系统应默认使用中文模板进行初始化

#### Scenario: 保持英文选项
- **WHEN** 用户明确指定使用英文模板
- **THEN** 系统应使用英文模板进行初始化