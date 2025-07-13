# 🚀 Quick Setup Guide

## 📦 Package the Extension

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
# Install vsce globally
npm install -g @vscode/vsce

# Install project dependencies (if any)
npm install
```

### Step 2: Package the Extension
```bash
# Package the extension
npm run package

# Or use vsce directly
vsce package
```

This will create `cursor-clean-architecture-pack-1.0.0.vsix`

## 🔧 Install in Cursor

### Method 1: VSIX Installation (Recommended)
1. Open Cursor
2. Go to Extensions (`Ctrl+Shift+X`)
3. Click the "..." menu (three dots)
4. Select "Install from VSIX..."
5. Choose `cursor-clean-architecture-pack-1.0.0.vsix`
6. Restart Cursor if prompted

### Method 2: Manual Installation
```bash
# Windows
mkdir "%USERPROFILE%\.cursor\extensions\cursor-clean-architecture-pack"
copy * "%USERPROFILE%\.cursor\extensions\cursor-clean-architecture-pack\"

# macOS/Linux
mkdir -p ~/.cursor/extensions/cursor-clean-architecture-pack
cp -r * ~/.cursor/extensions/cursor-clean-architecture-pack/
```

## ✅ Verify Installation

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Clean Architecture"
3. You should see all the available commands:
   - 🏗️ Create Clean Architecture Project
   - 🎯 Create Complete Entity
   - 🏛️ Create Domain Layer
   - 📝 Create Application Layer
   - 🗄️ Create Infrastructure Layer
   - 🌐 Create API Layer
   - 🧪 Create Integration Tests
   - 🔄 Create Database Migration
   - 📚 Create Project Documentation
   - 🔧 Create Cross-Cutting Concerns

## 🎯 Test the Extension

### Test Project Creation
1. Open a new folder in Cursor
2. Command Palette → "🏗️ Create Clean Architecture Project"
3. Enter project name (e.g., "TestProject")
4. Check that prompt is inserted into editor
5. Press `Ctrl+Enter` to send to AI chat

### Test Entity Creation
1. Command Palette → "🎯 Create Complete Entity"
2. Enter entity name (e.g., "Product")
3. Verify prompt is generated with entity name
4. Send to AI for implementation

## 🔧 Configuration

### Access Settings
1. Open Settings (`Ctrl+,`)
2. Search for "Clean Architecture"
3. Configure:
   - `cleanArchitecture.defaultProjectName`
   - `cleanArchitecture.defaultEntityName`
   - `cleanArchitecture.autoInsertPrompt`

### Settings Explained
```json
{
  "cleanArchitecture.defaultProjectName": "MyProject",
  "cleanArchitecture.defaultEntityName": "Product",
  "cleanArchitecture.autoInsertPrompt": true
}
```

- `defaultProjectName`: Default name for new projects
- `defaultEntityName`: Default name for new entities
- `autoInsertPrompt`: Insert prompt into editor (true) or copy to clipboard (false)

## 🐛 Troubleshooting

### Extension Not Appearing
1. Check if extension is installed:
   - Extensions panel → Search "Clean Architecture"
2. Restart Cursor
3. Check extension logs:
   - Help → Toggle Developer Tools → Console

### Commands Not Working
1. Verify workspace is open
2. Check if file is active (for auto-insert)
3. Try clipboard mode if auto-insert fails

### Prompt Not Generated
1. Check console for errors
2. Verify project name is provided
3. Ensure active editor exists

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify all files are in the correct location
3. Try reinstalling the extension
4. Create an issue on GitHub with details

## 🔄 Updates

To update the extension:
1. Download the new version
2. Uninstall the old version
3. Install the new version
4. Restart Cursor

---

**Happy Coding! 🚀** 