# docs-agent-instructions Specification

## Purpose
Enhance the AI agent instructions to provide comprehensive guidance for RooCode integration with splash commands and context integration.

## Requirements

### Requirement: RooCode-Specific Instructions
The AI instructions SHALL include RooCode-specific guidance for splash command usage and context integration.

#### Scenario: Providing RooCode integration guidance
- **WHEN** `openspec/AGENTS.md` is generated or updated
- **THEN** include specific instructions for RooCode users
- **AND** document how to use splash commands: `/openspec-proposal`, `/openspec-apply`, `/openspec-archive`
- **AND** provide examples of context integration with @mentions
- **AND** explain how to reference OpenSpec specifications during RooCode sessions

### Requirement: Context Integration Examples
The documentation SHALL provide clear examples of context integration for RooCode users.

#### Scenario: Showing context integration examples
- **WHEN** documenting context usage for RooCode
- **THEN** provide examples like `@/openspec/AGENTS.md` for accessing OpenSpec instructions
- **AND** show how to reference specific specs with `@/openspec/specs/[capability]/spec.md`
- **AND** demonstrate change proposal references with `@/openspec/changes/[change-id]/proposal.md`
- **AND** include best practices for managing context in RooCode sessions