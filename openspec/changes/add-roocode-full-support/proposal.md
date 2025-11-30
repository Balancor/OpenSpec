# Change: Add Full RooCode Support with Splash Commands and Enhanced Context Integration

## Why
RooCode is a popular AI coding assistant that provides powerful capabilities for developers. While basic OpenSpec integration exists, the current implementation lacks full support for RooCode's splash commands and comprehensive context integration. Adding complete RooCode support will enable developers using RooCode to leverage OpenSpec's specification-driven development workflow seamlessly.

## What Changes
- Add full support for RooCode splash commands: `/openspec-proposal`, `/openspec-apply`, and `/openspec-archive`
- Enhance context integration to provide comprehensive OpenSpec information during AI interactions
- Ensure RooCode can access and utilize OpenSpec specifications and change proposals effectively
- Align RooCode integration with other supported AI tools in the OpenSpec ecosystem

## Impact
- Affected specs: cli-init, docs-agent-instructions
- Affected code: 
  - src/core/configurators/slash/roocode.ts (enhancement)
  - src/core/templates/slash-command-templates.ts (potential updates)
  - Documentation files for RooCode integration