// Render.com deployment configuration and utilities

export interface RenderConfig {
  name: string;
  type: 'web_service';
  env: 'node';
  buildCommand: string;
  startCommand: string;
  plan: string;
}

export const renderConfig: RenderConfig = {
  name: 'codex-safe-scaffold',
  type: 'web_service',
  env: 'node',
  buildCommand: 'npm install && npm run build',
  startCommand: 'npm start',
  plan: 'free'
};

export function getRenderReadyConfig(): RenderConfig {
  return {
    ...renderConfig,
    name: process.env.RENDER_SERVICE_NAME || renderConfig.name,
  };
}