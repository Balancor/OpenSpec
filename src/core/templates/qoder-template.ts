export const qoderTemplate = `# OpenSpec Instructions for Qoder

These instructions help Qoder AI assistant work effectively with OpenSpec-driven development.

## Core Workflow

1. **Always reference OpenSpec files**: When working on tasks, always refer to:
   - \`@/openspec/AGENTS.md\` for overall workflow guidance
   - \`@/openspec/project.md\` for project context
   - \`@/openspec/changes/[change-id]/proposal.md\` for change context
   - \`@/openspec/changes/[change-id]/tasks.md\` for implementation steps

2. **Task Execution Process**:
   - Read the entire tasks.md file first to understand the complete scope
   - Execute tasks sequentially, one at a time
   - After completing each task item, update its status from [ ] to [x] in tasks.md
   - Confirm all subtasks of a section are complete before moving to the next section
   - Do not modify the tasks.md structure, only update the checkboxes

3. **Status Tracking**:
   - After implementing each task item, immediately update its checkbox status
   - Maintain accurate reflection of actual progress in tasks.md
   - Use precise file modification to change [ ] to [x] without altering other content

4. **Archiving Process**:
   - Only archive changes after all tasks are completed and marked as such
   - Follow the exact archiving procedure documented in AGENTS.md
   - Validate that all requirements have been met before initiating archive

## Task Format Recognition

OpenSpec tasks.md files follow this format:
- Section headers: ## 1. Section Name
- Task items: - [ ] 1.1 Task description
- Completed tasks: - [x] 1.1 Task description

Always respect this format and only modify the checkbox status, not the structure.

## Best Practices

1. **Sequential Execution**: Work through tasks in the exact order specified
2. **Status Accuracy**: Keep task statuses up-to-date in real-time
3. **Verification**: Double-check that each task is truly complete before marking it done
4. **Communication**: If a task is unclear, ask for clarification before proceeding
5. **Documentation**: Update tasks.md file immediately after completing each task item

Keep this managed block so 'openspec update' can refresh the instructions.
`;