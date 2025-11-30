## ADDED Requirements

### Requirement: Qoder-Specific Agent Instructions
The system SHALL provide Qoder-specific agent instructions that enhance the integration between Qoder AI assistant and OpenSpec workflows.

#### Scenario: Qoder task execution guidance
- **WHEN** Qoder processes an OpenSpec task
- **THEN** the system shall provide clear guidance on parsing tasks.md format and executing tasks sequentially

#### Scenario: Task status tracking
- **WHEN** Qoder completes a task
- **THEN** the system shall instruct Qoder to update the task status in tasks.md

#### Scenario: Archive process alignment
- **WHEN** Qoder works on archiving changes
- **THEN** the system shall provide aligned instructions with OpenSpec archiving procedures