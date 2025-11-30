# Change: Enhance RooCode Support with Advanced Slash Commands and Context Integration

## Why
RooCode is a popular AI coding assistant with advanced capabilities including concurrent file reads, context mentions, and sophisticated tool workflows. While basic OpenSpec integration exists, the current implementation lacks full support for RooCode's advanced features and comprehensive context integration. Enhancing RooCode support will enable developers using RooCode to leverage OpenSpec's specification-driven development workflow with full access to RooCode's powerful features.

## What Changes
- Enhance RooCode slash commands with advanced frontmatter supporting argument hints and detailed descriptions
- Improve context integration to provide comprehensive OpenSpec information during AI interactions using RooCode's @mentions system
- Add support for RooCode's concurrent file reads feature to efficiently load OpenSpec context
- Implement proper template structure with TOML format for better RooCode compatibility
- Align RooCode integration with other supported AI tools in the OpenSpec ecosystem
- Add comprehensive documentation for RooCode-specific usage patterns

## Impact
- Affected specs: cli-init, docs-agent-instructions
- Affected code: 
  - src/core/configurators/slash/roocode.ts (major enhancement)
  - src/core/templates/slash-command-templates.ts (potential updates)
  - Documentation files for RooCode integration