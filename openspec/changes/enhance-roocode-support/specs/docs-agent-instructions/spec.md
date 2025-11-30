## MODIFIED Requirements

#### Scenario: RooCode-specific agent instructions
When providing instructions for AI agents using RooCode, the documentation should include RooCode-specific features and capabilities that enhance the OpenSpec workflow.

#### Requirements
- Agent instructions must document RooCode's @mentions system for referencing OpenSpec files and directories
- Instructions should explain how to use concurrent file reads for efficient context loading of OpenSpec specifications
- Documentation should include RooCode-specific examples for the three core workflows: proposal, apply, and archive
- Agent instructions should highlight RooCode's tool approval workflow and how it integrates with OpenSpec guardrails
- Guidance should be provided on using RooCode's Code Actions feature with OpenSpec files

#### Scenario: Context integration best practices for RooCode
When agents use OpenSpec with RooCode, they should follow best practices for context integration to maximize efficiency and accuracy.

#### Requirements
- Documentation should explain how to use @/openspec/AGENTS.md for quick reference to OpenSpec capabilities
- Instructions should detail how to use @/openspec/project.md for project-specific context
- Best practices should include guidance on when to use folder mentions (@/openspec/specs) for comprehensive specification context
- Documentation should cover efficient use of concurrent file reads with OpenSpec directories
- Examples should demonstrate proper context management for complex OpenSpec changes