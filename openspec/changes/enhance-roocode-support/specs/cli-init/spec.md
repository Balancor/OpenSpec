## ADDED Requirements

#### Scenario: RooCode integration during project initialization
When a developer initializes a new OpenSpec project and uses RooCode as their AI assistant, the initialization process should generate RooCode-specific slash command files that enable full integration with OpenSpec workflows.

#### Requirements
- The `openspec init` command must generate TOML-formatted slash command files in the `.roo/commands/` directory when RooCode is detected or specified
- Generated files must include proper frontmatter with argument hints and detailed descriptions for RooCode's tool discovery
- Slash command files must contain comprehensive instructions for the three core OpenSpec workflows: proposal, apply, and archive
- The initialization process should ensure file paths follow RooCode conventions: `.roo/commands/openspec-{command}.toml`
- Generated templates should include references to OpenSpec documentation and guardrails for proper usage

#### Scenario: RooCode context integration setup
When initializing an OpenSpec project for use with RooCode, the system should set up proper context integration to enable RooCode's @mentions system to work seamlessly with OpenSpec files.

#### Requirements
- The initialization process should document how to use @/openspec/AGENTS.md and @/openspec/project.md context mentions
- Setup instructions should explain RooCode's concurrent file reads feature for efficient OpenSpec context loading
- Documentation should include examples of context mentions for common OpenSpec workflows
- The initialization should provide guidance on best practices for context management with RooCode