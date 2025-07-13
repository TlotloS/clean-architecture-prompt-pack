const vscode = require("vscode");
const prompts = require("./prompts");
const path = require("path"); // Added missing import for path

function activate(context) {
  console.log("🏗️ Clean Architecture + DDD + CQRS Prompt Pack is now active!");

  // Register all commands
  let createProject = vscode.commands.registerCommand(
    "cleanArchitecture.createProject",
    async () => {
      await createCleanArchitectureProject();
    }
  );

  let createEntity = vscode.commands.registerCommand(
    "cleanArchitecture.createEntity",
    async () => {
      await createCompleteEntity();
    }
  );

  let createDomainLayer = vscode.commands.registerCommand(
    "cleanArchitecture.createDomainLayer",
    async () => {
      await createDomainLayerForEntity();
    }
  );

  let createApplicationLayer = vscode.commands.registerCommand(
    "cleanArchitecture.createApplicationLayer",
    async () => {
      await createApplicationLayerForEntity();
    }
  );

  let createInfrastructureLayer = vscode.commands.registerCommand(
    "cleanArchitecture.createInfrastructureLayer",
    async () => {
      await createInfrastructureLayerForEntity();
    }
  );

  let createApiLayer = vscode.commands.registerCommand(
    "cleanArchitecture.createApiLayer",
    async () => {
      await createApiLayerForEntity();
    }
  );

  let createTests = vscode.commands.registerCommand(
    "cleanArchitecture.createTests",
    async () => {
      await createIntegrationTestsForEntity();
    }
  );

  let createMigration = vscode.commands.registerCommand(
    "cleanArchitecture.createMigration",
    async () => {
      await createDatabaseMigration();
    }
  );

  let createDocumentation = vscode.commands.registerCommand(
    "cleanArchitecture.createDocumentation",
    async () => {
      await createProjectDocumentation();
    }
  );

  let createCrossCuttingConcerns = vscode.commands.registerCommand(
    "cleanArchitecture.createCrossCuttingConcerns",
    async () => {
      await createCrossCuttingConcernsForProject();
    }
  );

  context.subscriptions.push(
    createProject,
    createEntity,
    createDomainLayer,
    createApplicationLayer,
    createInfrastructureLayer,
    createApiLayer,
    createTests,
    createMigration,
    createDocumentation,
    createCrossCuttingConcerns
  );
}

async function createCleanArchitectureProject() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultProjectName = config.get("defaultProjectName", "MyProject");

  const projectName = await vscode.window.showInputBox({
    prompt: "Enter project name",
    placeHolder: defaultProjectName,
    value: defaultProjectName,
  });

  if (!projectName) return;

  const prompt = prompts.projectSetup.replace(/{ProjectName}/g, projectName);
  await insertPromptIntoChat(
    prompt,
    `Creating Clean Architecture project: ${projectName}`
  );
}

async function createCompleteEntity() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.completeEntity
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(prompt, `Creating complete entity: ${entityName}`);
}

async function createDomainLayerForEntity() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.domainLayer
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(
    prompt,
    `Creating domain layer for: ${entityName}`
  );
}

async function createApplicationLayerForEntity() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.applicationLayer
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(
    prompt,
    `Creating application layer for: ${entityName}`
  );
}

async function createInfrastructureLayerForEntity() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.infrastructureLayer
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(
    prompt,
    `Creating infrastructure layer for: ${entityName}`
  );
}

async function createApiLayerForEntity() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.apiLayer
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(prompt, `Creating API layer for: ${entityName}`);
}

async function createIntegrationTestsForEntity() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.integrationTests
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(
    prompt,
    `Creating integration tests for: ${entityName}`
  );
}

async function createDatabaseMigration() {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultEntityName = config.get("defaultEntityName", "Product");

  const entityName = await vscode.window.showInputBox({
    prompt: "Enter entity name",
    placeHolder: defaultEntityName,
    value: defaultEntityName,
  });

  if (!entityName) return;

  const projectName = await getProjectName();
  const prompt = prompts.databaseMigration
    .replace(/{EntityName}/g, entityName)
    .replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(
    prompt,
    `Creating database migration for: ${entityName}`
  );
}

async function createProjectDocumentation() {
  const projectName = await getProjectName();
  const prompt = prompts.documentation.replace(/{ProjectName}/g, projectName);

  await insertPromptIntoChat(
    prompt,
    `Creating documentation for: ${projectName}`
  );
}

async function createCrossCuttingConcernsForProject() {
  const projectName = await getProjectName();
  const prompt = prompts.crossCuttingConcerns.replace(
    /{ProjectName}/g,
    projectName
  );

  await insertPromptIntoChat(
    prompt,
    `Creating cross-cutting concerns for: ${projectName}`
  );
}

async function insertPromptIntoChat(prompt, message) {
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const autoInsert = config.get("autoInsertPrompt", true);

  if (autoInsert) {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage(
        "No active editor found. Please open a file first."
      );
      return;
    }

    // Insert the prompt at the cursor position
    await editor.edit((editBuilder) => {
      const position = editor.selection.active;
      editBuilder.insert(position, prompt);
    });

    vscode.window.showInformationMessage(
      `${message} - Prompt inserted! Press Ctrl+Enter to send to AI chat.`
    );
  } else {
    // Copy to clipboard
    await vscode.env.clipboard.writeText(prompt);
    vscode.window.showInformationMessage(
      `${message} - Prompt copied to clipboard! Paste it into the AI chat.`
    );
  }
}

async function getProjectName() {
  // Try to get project name from workspace
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (workspaceFolders && workspaceFolders.length > 0) {
    const folderName = path.basename(workspaceFolders[0].uri.fsPath);
    return folderName;
  }

  // Fallback to user input
  const config = vscode.workspace.getConfiguration("cleanArchitecture");
  const defaultProjectName = config.get("defaultProjectName", "MyProject");

  return (
    (await vscode.window.showInputBox({
      prompt: "Enter project name",
      placeHolder: defaultProjectName,
      value: defaultProjectName,
    })) || defaultProjectName
  );
}

function deactivate() {
  console.log("Clean Architecture Prompt Pack deactivated");
}

module.exports = {
  activate,
  deactivate,
};
