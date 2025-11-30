# Change: Enhance Qoder + OpenSpec Integration for Better Task Execution and Status Tracking

## Why
When using Qoder with OpenSpec in a free-tier setup (as an alternative to Qoder Quest Mode), users encounter several issues:
1. Task Parsing and Execution Disconnect: Qoder's AI may not correctly parse or follow the structure and instructions in OpenSpec-generated tasks.md files, particularly when the format or marking differs from what Qoder AI was trained to expect.
2. Missing Status Tracking Mechanism: Qoder Quest Mode has built-in task status tracking and updating mechanisms. The current Qoder + OpenSpec combination lacks automated ways to update task status markers in tasks.md (e.g., changing [ ] to [x]) after task completion, requiring the AI to consciously and accurately modify source files, which non-integrated AIs may not do.
3. Archive Logic Misalignment: OpenSpec and Qoder may have different definitions of what constitutes a "confirmed proposal" or "completed task," or lack a unified archiving path and rules recognized by both systems.

These issues prevent seamless collaboration between Qoder and OpenSpec, reducing the effectiveness of using them together as a cost-effective alternative to Qoder Quest Mode.

## What Changes
- Enhance Qoder's OpenSpec integration to better recognize and parse OpenSpec task formats
- Add automated task status tracking and updating mechanisms for Qoder when working with OpenSpec tasks
- Improve synchronization between Qoder's understanding of task completion and OpenSpec's task tracking
- Align archiving logic between Qoder and OpenSpec for consistent change management
- Create Qoder-specific templates and instructions that better integrate with OpenSpec workflows
- Add Qoder-specific context integration guidance in AGENTS.md

## Impact
- Affected specs: cli-init, docs-agent-instructions
- Affected code: 
  - src/core/configurators/slash/qoder.ts (enhancement)
  - src/core/configurators/qoder.ts (major enhancement)
  - src/core/templates/slash-command-templates.ts (potential updates)
  - src/core/templates/qoder-template.ts (new)
  - Documentation files for Qoder integration