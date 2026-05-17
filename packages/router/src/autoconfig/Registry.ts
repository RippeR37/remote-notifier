import * as vscode from 'vscode';
import { AutoConfigRegistry } from './AutoConfigRegistry';
import { ClaudeCodeAutoConfigProvider } from './ClaudeCodeAutoConfigProvider';
import { CodexAutoConfigProvider } from './CodexAutoConfigProvider';

export function createAutoConfigRegistry(log?: vscode.OutputChannel): AutoConfigRegistry {
  const registry = new AutoConfigRegistry();
  registry.register(new ClaudeCodeAutoConfigProvider(log));
  registry.register(new CodexAutoConfigProvider(log));
  return registry;
}
