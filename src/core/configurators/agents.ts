import path from 'path';
import { ToolConfigurator } from './base.js';
import { FileSystemUtils } from '../../utils/file-system.js';
import { TemplateManager } from '../templates/index.js';
import { OPENSPEC_MARKERS } from '../config.js';

export class AgentsStandardConfigurator implements ToolConfigurator {
  name = 'AGENTS.md standard';
  configFileName = 'AGENTS.md';
  isAvailable = true;
  private language: 'en' | 'zh' = 'en';

  constructor(language: 'en' | 'zh' = 'en') {
    this.language = language;
  }

  async configure(projectPath: string, _openspecDir: string): Promise<void> {
    const filePath = path.join(projectPath, this.configFileName);
    const content = TemplateManager.getAgentsStandardTemplate(this.language);

    await FileSystemUtils.updateFileWithMarkers(
      filePath,
      content,
      OPENSPEC_MARKERS.start,
      OPENSPEC_MARKERS.end
    );
  }
}
