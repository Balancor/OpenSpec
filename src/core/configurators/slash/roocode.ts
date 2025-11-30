/**
 * RooCode slash command configurator for OpenSpec integration.
 * This class handles the generation of RooCode-specific slash command files
 * in the .roo/commands directory structure using TOML format for better compatibility.
 * 
 * @implements {TomlSlashCommandConfigurator}
 */
import { TomlSlashCommandConfigurator } from './toml-base.js';
import { SlashCommandId } from '../../templates/index.js';
import { FileSystemUtils } from '../../../utils/file-system.js';

/** 
 * Mapping of slash command IDs to their corresponding file paths in .roo/commands directory.
 * Using TOML format for better RooCode compatibility.
 * @type {Record<SlashCommandId, string>}
 */
const FILE_PATHS: Record<SlashCommandId, string> = {
  proposal: '.roo/commands/openspec-proposal.toml',
  apply: '.roo/commands/openspec-apply.toml',
  archive: '.roo/commands/openspec-archive.toml'
};

const DESCRIPTIONS: Record<SlashCommandId, string> = {
  proposal: 'Scaffold a new OpenSpec change and validate strictly.',
  apply: 'Implement an approved OpenSpec change and keep tasks in sync.',
  archive: 'Archive a deployed OpenSpec change and update specs.'
};

const ARGUMENT_HINTS: Record<SlashCommandId, string> = {
  proposal: 'request or feature description',
  apply: 'change-id',
  archive: 'change-id'
};

/**
 * RooCodeSlashCommandConfigurator class provides enhanced integration with RooCode
 * by creating TOML-formatted slash command files in the .roo/commands directory.
 * 
 * The slash commands include:
 * - /openspec-proposal: Create an OpenSpec change proposal
 * - /openspec-apply: Apply an approved OpenSpec change
 * - /openspec-archive: Archive a deployed OpenSpec change
 * 
 * Features:
 * - TOML format for better RooCode compatibility
 * - Argument hints for improved user experience
 * - Detailed descriptions for command discovery
 */
export class RooCodeSlashCommandConfigurator extends TomlSlashCommandConfigurator {
  /** Unique identifier for the RooCode tool */
  readonly toolId = 'roocode';

  /** Availability status for the RooCode tool */
  readonly isAvailable = true;

  /**
   * Returns the relative file path for a given slash command ID.
   * @param {SlashCommandId} id - The slash command identifier
   * @returns {string} The relative path to the command file
   */
  protected getRelativePath(id: SlashCommandId): string {
    return FILE_PATHS[id];
  }

  /**
   * Returns the description for a given slash command ID.
   * @param {SlashCommandId} id - The slash command identifier
   * @returns {string} The description of the command
   */
  protected getDescription(id: SlashCommandId): string {
    return DESCRIPTIONS[id];
  }

  // Override to generate TOML format with argument hints
  async generateAll(projectPath: string, _openspecDir: string): Promise<string[]> {
    const createdOrUpdated: string[] = [];

    for (const target of this.getTargets()) {
      const body = this.getBody(target.id);
      const filePath = FileSystemUtils.joinPath(projectPath, target.path);

      if (await FileSystemUtils.fileExists(filePath)) {
        await this.updateBody(filePath, body);
      } else {
        const argumentHint = ARGUMENT_HINTS[target.id];
        const tomlContent = this.generateTOMLWithHints(target.id, body, argumentHint);
        await FileSystemUtils.writeFile(filePath, tomlContent);
      }

      createdOrUpdated.push(target.path);
    }

    return createdOrUpdated;
  }
}