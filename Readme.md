# ⚡ NeonORM

**NeonORM** is a lightweight, educational Object-Relational Mapping (ORM) library designed and built from scratch. 

The primary goal of this project is not to compete with established giants like TypeORM or Prisma, but to **demystify the "black box" of ORM architecture**. It serves as a deep dive into database internals, query optimization, and advanced software design patterns.

## 🎯 Motivation & Learning Objectives

Building an ORM is one of the best ways to understand the complexity of backend development. This project focuses on:

* **Deepening Core Knowledge:** Understanding how high-level code translates into optimized SQL queries.
* **Implementing Design Patterns:** Practical application of classical GoF patterns in a real-world scenario:
    * **🏗 Builder:** For constructing type-safe, complex SQL queries methodically.
    * **🏭 Factory:** For managing database connections and instance creation.
    * **🧠 Strategy:** To handle specific dialects for different databases (PostgreSQL, MySQL, etc.) dynamically.
    * **🏛 Facade:** To provide a simple, clean API for the end-user, hiding complex internal logic.
* **Performance Optimization:** Writing efficient data mappers and avoiding common N+1 problems.

## 🚀 Key Features

* **Schema-First Architecture:** Define your data structure in a clean, intuitive format.
* **Automated Migrations:** The core logic takes your schema, maps it internally, and generates the necessary SQL migrations to sync the database state.
* **Model-Based Interaction:** clear and fluent API for CRUD operations via Models.
* **Database Agnostic Design:** Built with an architecture that allows connecting different database drivers easily.

## ⚙️ How It Works

The workflow of **neonORM** follows a strict data lifecycle:

1.  **Schema Definition:** The user defines the `Schema` in code.
2.  **Internal Mapping:** The library parses the schema into an internal metadata structure.
3.  **Migration Generation:** Based on the map, the ORM compares the state and generates the necessary SQL commands to update the DB structure.
4.  **Query Execution:** Using the `QueryBuilder`, users interact with the database through high-level methods.

## 🛠 Usage Example (Concept)

```typescript
// 1. Define Schema
const UserSchema = neon.schema('User', {
  id: neon.types.ID(),
  username: neon.types.String(),
  email: neon.types.String().unique()
});

// 2. Sync/Migrate
await neon.sync();

// 3. Use Model
const users = await neon.model('User')
  .select(['id', 'username'])
  .where('id', '>', 5)
  .get();