# 变更：增强中文本地化支持

## 为什么
当前OpenSpec项目虽然已有中文本地化支持，但仍需进一步完善以满足中国开发者的使用需求。特别是在关键字使用、验证器检查和工作流控制方面，需要更加符合中文用户的习惯。此外，提案实施的控制机制也需要加强，确保严格按照串行方式执行提案。

## 什么变更
- 将ADD, UPDATE, REMOVE等关键字调整为中文形式
- 将SHALL/MUST等关键字调整为中文形式
- 调整validator.ts中相关关键字的检查，使其兼容中文
- 调整其他TS文件中出现关键字的检查，使其兼容中文
- 强化提案实施控制：保持三阶段工作流不变，但确保提案串行执行
- 明确实施指令："请开始实施当前提案"作为开始编码的唯一授权指令
- 在明确授权前，所有交互均视为对当前提案内容的调整
- 当使用openspec init命令时，默认使用中文模板进行初始化
- 调整项目中的模板文档，使其兼容中文
- 对于文件目录结构等信息仍然保持英文
- 增加和AI交互的语言，默认为中文

## 影响
- 受影响的规范：`specs/cli-validate`，`specs/cli-init`
- 受影响的代码：`src/core/validation/validator.ts`，`src/core/schemas/base.schema.ts`，`src/core/parsers/requirement-blocks.ts`，`src/cli/index.ts`
- 受影响的工具：所有支持的AI编码助手