# 🏗️ Clean Architecture + DDD + CQRS Prompt Pack

A comprehensive Cursor extension that provides intelligent prompts for scaffolding .NET projects following Clean Architecture, Domain-Driven Design (DDD), and Command Query Responsibility Segregation (CQRS) patterns.

## ✨ Features

- **🏗️ Project Setup**: Complete project structure with all layers
- **🎯 Entity Scaffolding**: Full CRUD implementation across all layers
- **🏛️ Layer-specific Prompts**: Individual prompts for each architecture layer
- **🧪 Integration Tests**: Comprehensive test scaffolding
- **🔄 Database Migrations**: EF Core migration generation
- **📚 Documentation**: Project documentation templates
- **🔧 Cross-Cutting Concerns**: Behaviors, interfaces, and common services

## 🚀 Quick Start

### Installation

1. **Download the Extension**
   ```bash
   # Clone or download the extension
   git clone https://github.com/your-username/cursor-clean-architecture-pack.git
   cd cursor-clean-architecture-pack
   ```

2. **Package the Extension**
   ```bash
   # Install vsce if you haven't already
   npm install -g @vscode/vsce
   
   # Package the extension
   npm run package
   ```

3. **Install in Cursor**
   - Open Cursor
   - Go to Extensions (`Ctrl+Shift+X`)
   - Click the "..." menu
   - Select "Install from VSIX..."
   - Choose `cursor-clean-architecture-pack-1.0.0.vsix`

### Manual Installation
```bash
# Copy extension to Cursor extensions folder
# Windows: %USERPROFILE%\.cursor\extensions\
# macOS: ~/.cursor/extensions/
# Linux: ~/.cursor/extensions/

mkdir -p ~/.cursor/extensions/cursor-clean-architecture-pack
cp -r * ~/.cursor/extensions/cursor-clean-architecture-pack/
```

## 📋 Available Commands

| Command | Description | Icon |
|---------|-------------|------|
| `🏗️ Create Clean Architecture Project` | Scaffold complete project structure | 📁 |
| `🎯 Create Complete Entity` | Create full entity implementation | 🏛️ |
| `🏛️ Create Domain Layer` | Domain layer components only | 🏛️ |
| `📝 Create Application Layer` | Application layer components only | 📝 |
| `🗄️ Create Infrastructure Layer` | Infrastructure layer components only | 🗄️ |
| `🌐 Create API Layer` | API controller and endpoints | 🌐 |
| `🧪 Create Integration Tests` | Test suite for entity | 🧪 |
| `🔄 Create Database Migration` | EF Core migration | 🔄 |
| `📚 Create Project Documentation` | Project documentation | 📚 |
| `🔧 Create Cross-Cutting Concerns` | Behaviors and common services | 🔧 |

## 🎯 Usage Examples

### 1. Create a New Project

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Clean Architecture"
3. Select "🏗️ Create Clean Architecture Project"
4. Enter project name (e.g., "MyECommerceApp")
5. Prompt is inserted into active editor
6. Press `Ctrl+Enter` to send to AI chat

### 2. Create a Complete Entity

1. Command Palette → "🎯 Create Complete Entity"
2. Enter entity name (e.g., "Product")
3. Prompt is inserted with entity name
4. Send to AI for complete implementation

### 3. Layer-specific Development

1. Command Palette → "🏛️ Create Domain Layer"
2. Enter entity name
3. Get domain layer only
4. Repeat for other layers as needed

## 🏗️ Architecture Overview

The extension follows these architectural patterns:

### Clean Architecture Layers
- **API Layer**: Controllers, middleware, configuration
- **Application Layer**: Use cases, DTOs, commands/queries
- **Domain Layer**: Entities, repositories, domain services
- **Infrastructure Layer**: Data access, external services

### Design Patterns
- **CQRS**: Separate commands and queries
- **Repository Pattern**: Data access abstraction
- **Unit of Work**: Transaction management
- **Domain Events**: Event-driven architecture
- **Mediator Pattern**: Decoupled communication

## ⚙️ Configuration

The extension provides configurable settings:

```json
{
  "cleanArchitecture.defaultProjectName": "MyProject",
  "cleanArchitecture.defaultEntityName": "Product",
  "cleanArchitecture.autoInsertPrompt": true
}
```

### Settings Explained

- `defaultProjectName`: Default name for new projects
- `defaultEntityName`: Default name for new entities
- `autoInsertPrompt`: Automatically insert prompt into editor (vs. copy to clipboard)

## 🔧 Customization

### Adding Custom Prompts

You can extend the extension by adding more prompts to `prompts.js`:

```javascript
// Add to prompts.js
customPrompt: `# Custom Prompt for {EntityName}

Your custom prompt here...`,

// Add to extension.js
let customCommand = vscode.commands.registerCommand('cleanArchitecture.customCommand', async () => {
    await executeCustomPrompt();
});
```

### Adding Configuration Options

```json
{
  "contributes": {
    "configuration": {
      "title": "Clean Architecture Pack",
      "properties": {
        "cleanArchitecture.customSetting": {
          "type": "string",
          "default": "defaultValue",
          "description": "Custom setting description"
        }
      }
    }
  }
}
```

## 📚 Best Practices

### 1. Development Workflow
1. **Start with Project Setup**: Create the base structure
2. **Add Cross-Cutting Concerns**: Set up behaviors and common services
3. **Create Entities**: Use complete entity scaffolding
4. **Add Business Logic**: Customize domain and application layers
5. **Test Everything**: Generate and run integration tests

### 2. Naming Conventions
- **Projects**: PascalCase (e.g., `MyECommerceApp`)
- **Entities**: PascalCase (e.g., `Product`, `Order`)
- **Commands**: PascalCase with Command suffix (e.g., `CreateProductCommand`)
- **Queries**: PascalCase with Query suffix (e.g., `GetProductByIdQuery`)

### 3. File Organization
```
{ProjectName}/
├── {ProjectName}.Api/
│   ├── Controllers/
│   ├── Configuration/
│   └── Middleware/
├── {ProjectName}.Application/
│   ├── {EntityName}/
│   │   ├── Commands/
│   │   ├── Queries/
│   │   └── DTOs/
│   └── Common/
├── {ProjectName}.Domain/
│   ├── Entities/
│   ├── Repositories/
│   └── Events/
├── {ProjectName}.Infrastructure/
│   ├── Repositories/
│   ├── Persistence/
│   └── Services/
└── {ProjectName}.IntegrationTests/
    └── Tests/
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
dotnet test

# Run specific test project
dotnet test {ProjectName}.IntegrationTests

# Run with coverage
dotnet test --collect:"XPlat Code Coverage"
```

### Test Categories
- **Unit Tests**: Individual component testing
- **Integration Tests**: End-to-end testing
- **Performance Tests**: Load and stress testing
- **Security Tests**: Authentication and authorization

## 🚀 Deployment

### Docker Support
```bash
# Build Docker image
docker build -t myapp .

# Run container
docker run -p 8080:80 myapp
```

### Azure Deployment
```bash
# Deploy to Azure App Service
az webapp up --name myapp --resource-group mygroup --runtime "DOTNETCORE:8.0"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
# Clone the repository
git clone https://github.com/your-username/cursor-clean-architecture-pack.git

# Install dependencies
npm install

# Run in development mode
npm run dev
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Clean Architecture by Robert C. Martin
- Domain-Driven Design by Eric Evans
- CQRS pattern by Greg Young
- .NET community for best practices

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/cursor-clean-architecture-pack/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/cursor-clean-architecture-pack/discussions)
- **Email**: your-email@example.com

## 🔄 Changelog

### Version 1.0.0
- Initial release
- Complete Clean Architecture scaffolding
- CQRS pattern support
- DDD implementation
- Integration test generation
- Database migration support
- Documentation templates

---

**Happy Coding! 🚀**

This extension will help you build robust, maintainable, and scalable .NET applications following industry best practices. 