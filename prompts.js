const prompts = {
  projectSetup: `# Create New Clean Architecture + DDD + CQRS Project

I want to create a new .NET 8 Web API project following Clean Architecture principles with Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS) patterns. The project should be named \`{ProjectName}\` and follow these exact specifications:

## Project Structure Requirements:

### 1. Solution Structure
- \`{ProjectName}.Api\` - Web API layer
- \`{ProjectName}.Application\` - Business logic and use cases
- \`{ProjectName}.Domain\` - Core business logic and domain models
- \`{ProjectName}.Infrastructure\` - External concerns and data persistence
- \`{ProjectName}.IntegrationTests\` - End-to-end testing

### 2. Architecture Patterns
- **Clean Architecture**: Clear separation between layers
- **DDD**: Domain entities, value objects, domain services
- **CQRS**: Separate commands and queries using MediatR
- **Repository Pattern**: Data access abstraction
- **Unit of Work**: Transaction management
- **Validation**: FluentValidation integration
- **AutoMapper**: Object-to-object mapping

### 3. Technology Stack
- .NET 8
- Entity Framework Core
- MediatR for CQRS
- FluentValidation
- AutoMapper
- Serilog for logging
- Swagger/OpenAPI
- Azure AD B2C authentication (configurable)

### 4. Key Features to Include
- Cross-cutting concerns (Authorization, Performance, Validation, Exception handling)
- Repository pattern with generic base repository
- Unit of Work pattern
- Domain events
- Pagination support
- Health checks
- CORS configuration
- API versioning
- Problem details middleware

Please create the complete project structure with all necessary files, configurations, and base classes following the exact patterns from the reference architecture. Include proper dependency injection setup, middleware configuration, and all the boilerplate code needed to start development immediately.`,

  completeEntity: `# Complete Entity Scaffolding for {EntityName}

I need to create a complete implementation for the \`{EntityName}\` entity across all layers. Please create:

## Entity Properties:
- Id (Guid, primary key)
- Name (string, required)
- Description (string, optional)
- IsActive (bool, default true)
- CreatedBy (string, required)
- CreatedDate (DateTimeOffset, required)
- UpdatedBy (string, optional)
- UpdatedDate (DateTimeOffset, optional)
- IsDeleted (bool, default false)

## Required Components:

### 1. Domain Layer
- \`{EntityName}.cs\` - Domain entity
- \`I{EntityName}Repository.cs\` - Repository interface
- Domain events (Created, Updated, Deleted)

### 2. Application Layer
- \`{EntityName}Dto.cs\` - DTO with mapping
- Commands: Create, Update, Delete
- Queries: GetById, GetAll (with pagination)
- Validators for all commands
- Mapping extensions

### 3. Infrastructure Layer
- \`{EntityName}Repository.cs\` - Repository implementation
- \`{EntityName}Configuration.cs\` - EF Core configuration
- Database migration

### 4. API Layer
- \`{EntityName}sController.cs\` - RESTful API controller
- All CRUD endpoints
- Proper documentation

### 5. Integration Tests
- Complete test suite
- Test data builders
- All CRUD test scenarios

## Requirements:
- Follow all established patterns exactly
- Include proper validation
- Implement soft delete
- Include auditing
- Use proper error handling
- Include comprehensive documentation
- Follow naming conventions
- Implement proper security
- Include pagination support

Please provide the complete implementation across all layers.`,

  domainLayer: `# Create Domain Layer for {EntityName}

I need to create the domain layer components for the \`{EntityName}\` entity following DDD principles. Please create:

## 1. Domain Entity
Create \`{EntityName}.cs\` in \`{ProjectName}.Domain/Entities/\` with:
- Primary key (Guid Id)
- Domain properties
- Domain events collection
- Implement \`IHasDomainEvent\`, \`ISoftDelete\`, \`IAuditable\` interfaces
- Domain logic methods
- Proper encapsulation

## 2. Repository Interface
Create \`I{EntityName}Repository.cs\` in \`{ProjectName}.Domain/Repositories/\` with:
- Extend \`IEFRepository<{EntityName}, {EntityName}>\`
- Custom query methods if needed
- Follow the repository pattern

## 3. Domain Events (if applicable)
Create domain events in \`{ProjectName}.Domain/Events/\`:
- \`{EntityName}CreatedEvent\`
- \`{EntityName}UpdatedEvent\`
- \`{EntityName}DeletedEvent\`

## 4. Value Objects (if applicable)
Create value objects in \`{ProjectName}.Domain/Common/ValueObjects/\`:
- Immutable objects
- Value equality
- Domain validation

## 5. Domain Services (if applicable)
Create domain services in \`{ProjectName}.Domain/Services/\`:
- Business logic that doesn't belong to entities
- Stateless operations

## Requirements:
- Follow DDD principles
- Include proper validation
- Use domain events for side effects
- Implement soft delete and auditing
- Add XML documentation
- Use proper naming conventions

Please provide the complete code for all these components.`,

  applicationLayer: `# Create Application Layer for {EntityName}

I need to create the complete application layer for \`{EntityName}\` following CQRS patterns. Please create:

## 1. DTOs
Create \`{EntityName}Dto.cs\` in \`{ProjectName}.Application/{EntityName}/\`:
- Implement \`IMapFrom<{EntityName}>\`
- Include all necessary properties
- Add \`Create\` static factory method
- Implement \`Mapping\` method for AutoMapper

## 2. Commands
Create command files in \`{ProjectName}.Application/{EntityName}/Create{EntityName}/\`:
- \`Create{EntityName}Command.cs\` - Command model
- \`Create{EntityName}CommandHandler.cs\` - Command handler
- \`Create{EntityName}CommandValidator.cs\` - FluentValidation

Create command files in \`{ProjectName}.Application/{EntityName}/Update{EntityName}/\`:
- \`Update{EntityName}Command.cs\` - Command model
- \`Update{EntityName}CommandHandler.cs\` - Command handler
- \`Update{EntityName}CommandValidator.cs\` - FluentValidation

Create command files in \`{ProjectName}.Application/{EntityName}/Delete{EntityName}/\`:
- \`Delete{EntityName}Command.cs\` - Command model
- \`Delete{EntityName}CommandHandler.cs\` - Command handler

## 3. Queries
Create query files in \`{ProjectName}.Application/{EntityName}/Get{EntityName}ById/\`:
- \`Get{EntityName}ByIdQuery.cs\` - Query model
- \`Get{EntityName}ByIdQueryHandler.cs\` - Query handler

Create query files in \`{ProjectName}.Application/{EntityName}/Get{EntityName}s/\`:
- \`Get{EntityName}sQuery.cs\` - Query model with pagination
- \`Get{EntityName}sQueryHandler.cs\` - Query handler

## 4. Mapping Extensions
Create \`{EntityName}DtoMappingExtensions.cs\` in \`{ProjectName}.Application/{EntityName}/\`:
- Extension methods for mapping between domain and DTOs
- Use AutoMapper for complex mappings

## Requirements:
- Follow CQRS pattern strictly
- Implement proper validation with FluentValidation
- Use MediatR for command/query handling
- Include proper error handling
- Add XML documentation
- Follow naming conventions
- Include pagination support where appropriate
- Implement proper authorization checks

Please provide the complete code for all these components.`,

  apiLayer: `# Create API Controller for {EntityName}

I need to create a RESTful API controller for \`{EntityName}\` following the established patterns. Please create:

## 1. Controller
Create \`{EntityName}sController.cs\` in \`{ProjectName}.Api/Controllers/\` with:

### Endpoints:
- \`POST /api/{entityName}s\` - Create {EntityName}
- \`GET /api/{entityName}s/{id}\` - Get {EntityName} by ID
- \`GET /api/{entityName}s\` - Get all {EntityName}s (with pagination)
- \`PUT /api/{entityName}s/{id}\` - Update {EntityName}
- \`DELETE /api/{entityName}s/{id}\` - Delete {EntityName}

### Requirements:
- Use MediatR for command/query handling
- Include proper HTTP status codes
- Add comprehensive Swagger documentation
- Implement proper authorization
- Include validation error handling
- Use proper response types
- Follow REST conventions
- Include proper error responses

## 2. Response Types
Create response wrapper classes if needed:
- \`JsonResponse<T>\` for consistent API responses
- Proper error response models

## 3. Controller Features:
- Constructor injection of \`ISender\` (MediatR)
- Proper async/await patterns
- CancellationToken support
- Comprehensive XML documentation
- Proper attribute routing
- Content negotiation
- CORS support

Please provide the complete controller code with all endpoints and proper documentation.`,

  infrastructureLayer: `# Create Infrastructure Layer for {EntityName}

I need to create the infrastructure layer components for \`{EntityName}\`. Please create:

## 1. Repository Implementation
Create \`{EntityName}Repository.cs\` in \`{ProjectName}.Infrastructure/Repositories/\`:
- Extend \`RepositoryBase<{EntityName}, {EntityName}, ApplicationDbContext>\`
- Implement \`I{EntityName}Repository\`
- Add custom query implementations
- Include proper error handling

## 2. Entity Framework Configuration
Create \`{EntityName}Configuration.cs\` in \`{ProjectName}.Infrastructure/Persistence/Configurations/\`:
- Configure entity properties
- Set up relationships
- Configure indexes
- Set up soft delete filters
- Configure auditing

## 3. Database Migration (if needed)
Create initial migration for the entity:
- Include all properties
- Set up foreign key relationships
- Configure constraints
- Set up indexes

## 4. Dependency Injection
Update \`DependencyInjection.cs\` in \`{ProjectName}.Infrastructure/\`:
- Register repository implementation
- Configure any additional services

## Requirements:
- Follow Entity Framework Core best practices
- Implement proper error handling
- Include soft delete functionality
- Configure auditing
- Use proper naming conventions
- Include XML documentation
- Implement proper transaction management
- Configure lazy loading where appropriate

Please provide the complete code for all these components.`,

  integrationTests: `# Create Integration Tests for {EntityName}

I need to create comprehensive integration tests for \`{EntityName}\`. Please create:

## 1. Test Infrastructure
Create \`{EntityName}Tests.cs\` in \`{ProjectName}.IntegrationTests/Tests/{EntityName}/\`:

### Test Categories:
- **Create Tests**: Test entity creation
- **Read Tests**: Test entity retrieval
- **Update Tests**: Test entity updates
- **Delete Tests**: Test entity deletion
- **Validation Tests**: Test validation rules
- **Authorization Tests**: Test access control

## 2. Test Data Builders
Create \`{EntityName}TestDataBuilder.cs\`:
- Fluent builder pattern
- Default test data
- Customizable properties
- Proper test data generation

## 3. Test Scenarios:
- Happy path scenarios
- Error scenarios
- Edge cases
- Performance tests
- Concurrency tests

## Requirements:
- Use xUnit framework
- Implement proper test isolation
- Use in-memory database for tests
- Include proper assertions
- Test both positive and negative scenarios
- Include performance benchmarks
- Use proper test naming conventions
- Implement test data factories
- Include proper cleanup

Please provide the complete test code with all scenarios and proper test infrastructure.`,

  databaseMigration: `# Create Database Migration for {EntityName}

I need to create a database migration for the \`{EntityName}\` entity. Please create:

## 1. Migration File
Create migration in \`{ProjectName}.Infrastructure/Migrations/\`:
- Proper migration name with timestamp
- Up method for creating the table
- Down method for rolling back
- Proper foreign key relationships
- Indexes for performance
- Constraints for data integrity

## 2. Migration Configuration
- Set up proper column types
- Configure nullable/non-nullable columns
- Set up default values
- Configure computed columns if needed
- Set up proper constraints

## 3. Migration Features:
- Soft delete support
- Auditing columns
- Proper indexing strategy
- Foreign key relationships
- Check constraints
- Unique constraints

## Requirements:
- Follow Entity Framework Core best practices
- Include proper rollback support
- Use proper naming conventions
- Include data seeding if needed
- Configure proper constraints
- Set up indexes for performance
- Include proper documentation

Please provide the complete migration code.`,

  documentation: `# Create Project Documentation

I need to create comprehensive documentation for the project. Please create:

## 1. README Files
- \`README.md\` - Main project documentation
- \`API.md\` - API documentation
- \`ARCHITECTURE.md\` - Architecture documentation
- \`DEPLOYMENT.md\` - Deployment guide

## 2. Development Guides
- \`CONTRIBUTING.md\` - Contribution guidelines
- \`CODING_STANDARDS.md\` - Coding standards
- \`TESTING.md\` - Testing guidelines

## 3. API Documentation
- Swagger/OpenAPI configuration
- API endpoint documentation
- Request/response examples
- Error code documentation

## 4. Architecture Documentation
- Layer responsibilities
- Design patterns used
- Data flow diagrams
- Component relationships

## Requirements:
- Include setup instructions
- Document all patterns used
- Include troubleshooting guides
- Provide code examples
- Include architecture diagrams
- Document deployment process
- Include security considerations

Please provide all documentation files.`,

  crossCuttingConcerns: `# Create Cross-Cutting Concerns

I need to create the cross-cutting concerns for the application. Please create:

## 1. Behaviors (MediatR Pipeline)
Create in \`{ProjectName}.Application/Common/Behaviours/\`:
- \`ValidationBehaviour.cs\` - FluentValidation integration
- \`AuthorizationBehaviour.cs\` - Authorization checks
- \`PerformanceBehaviour.cs\` - Performance monitoring
- \`UnhandledExceptionBehaviour.cs\` - Exception handling
- \`UnitOfWorkBehaviour.cs\` - Transaction management
- \`EventBusPublishBehaviour.cs\` - Domain event publishing

## 2. Common Interfaces
Create in \`{ProjectName}.Application/Common/Interfaces/\`:
- \`ICommand.cs\` - Command marker interface
- \`IQuery.cs\` - Query marker interface
- \`IUnitOfWork.cs\` - Unit of work interface
- \`ICurrentUserService.cs\` - Current user service

## 3. Common Models
Create in \`{ProjectName}.Application/Common/Models/\`:
- \`Result.cs\` - Operation result wrapper
- \`PagedResult.cs\` - Pagination result
- \`ValidationResult.cs\` - Validation result

## 4. Common Services
Create in \`{ProjectName}.Application/Common/Services/\`:
- \`CurrentUserService.cs\` - Current user implementation
- \`DateTimeService.cs\` - DateTime abstraction
- \`ValidationService.cs\` - Validation service

## 5. Common Exceptions
Create in \`{ProjectName}.Application/Common/Exceptions/\`:
- \`NotFoundException.cs\` - Entity not found
- \`ValidationException.cs\` - Validation errors
- \`UnauthorizedAccessException.cs\` - Access denied

## Requirements:
- Follow SOLID principles
- Implement proper error handling
- Include comprehensive logging
- Use dependency injection
- Include proper documentation
- Follow naming conventions
- Implement proper security

Please provide the complete code for all these components.`,
};

module.exports = prompts;
