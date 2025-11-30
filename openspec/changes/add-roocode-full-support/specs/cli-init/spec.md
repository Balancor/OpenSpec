# CLI Init Specification

## Purpose
The `openspec init` command SHALL create a complete OpenSpec directory structure in any project, enabling immediate adoption of OpenSpec conventions with support for multiple AI coding assistants including enhanced RooCode integration.

## Requirements

### Requirement: RooCode Splash Command Generation
The command SHALL generate RooCode splash command files with comprehensive OpenSpec integration when RooCode is selected during initialization.

#### Scenario: Generating splash commands for RooCode
- **WHEN** the user selects RooCode during initialization
- **THEN** create `.roo/commands/openspec-proposal.md`, `.roo/commands/openspec-apply.md`, and `.roo/commands/openspec-archive.md`
- **AND** populate each file from shared templates so command text matches other tools
- **AND** include simple Markdown headings (e.g., `# OpenSpec: Proposal`) without YAML frontmatter
- **AND** wrap the generated content in OpenSpec managed markers where applicable so `openspec update` can safely refresh the commands
- **AND** each template includes comprehensive instructions for the relevant OpenSpec workflow stage

### Requirement: Enhanced RooCode Context Integration
The command SHALL provide enhanced context integration instructions for RooCode users.

#### Scenario: Providing context integration guidance
- **WHEN** RooCode is selected or already configured
- **THEN** ensure `@/openspec/AGENTS.md` contains comprehensive context integration guidance
- **AND** provide clear instructions on how to reference OpenSpec specifications in RooCode
- **AND** include examples of using @mentions with OpenSpec files
- **AND** document best practices for working with OpenSpec in RooCode environment