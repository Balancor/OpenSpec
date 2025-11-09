import { ToolConfigurator } from './base.js';
import { ClaudeConfigurator } from './claude.js';
import { ClineConfigurator } from './cline.js';
import { CodeBuddyConfigurator } from './codebuddy.js';
import { CostrictConfigurator } from './costrict.js';
import { QoderConfigurator } from './qoder.js';
import { AgentsStandardConfigurator } from './agents.js';
import { QwenConfigurator } from './qwen.js';

export class ToolRegistry {
  private static toolConstructors: Map<string, new (...args: any[]) => ToolConfigurator> = new Map();

  static {
    // Register constructors instead of instances
    this.toolConstructors.set('claude', ClaudeConfigurator);
    this.toolConstructors.set('cline', ClineConfigurator);
    this.toolConstructors.set('codebuddy', CodeBuddyConfigurator);
    this.toolConstructors.set('costrict', CostrictConfigurator);
    this.toolConstructors.set('qoder', QoderConfigurator);
    this.toolConstructors.set('agents', AgentsStandardConfigurator);
    this.toolConstructors.set('qwen', QwenConfigurator);
  }

  static register(toolConstructor: new (...args: any[]) => ToolConfigurator, toolId: string): void {
    this.toolConstructors.set(toolId, toolConstructor);
  }

  static get(toolId: string): ToolConfigurator | undefined {
    const Constructor = this.toolConstructors.get(toolId);
    if (!Constructor) {
      return undefined;
    }
    // For backward compatibility, create instance with no args by default
    return new Constructor();
  }

  static create(toolId: string, ...args: any[]): ToolConfigurator | undefined {
    const Constructor = this.toolConstructors.get(toolId);
    if (!Constructor) {
      return undefined;
    }
    return new Constructor(...args);
  }

  static getAll(): ToolConfigurator[] {
    return Array.from(this.toolConstructors.keys()).map(id => this.get(id)!).filter(Boolean);
  }

  static getAvailable(): ToolConfigurator[] {
    return this.getAll().filter(tool => tool.isAvailable);
  }
}
