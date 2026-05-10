```md id="crud1"
# MongoDB CRUD Operations

## COLLECTION: items

---

# CREATE OPERATIONS

## Insert One
```javascript
db.items.insertOne({
  title: "Learn MongoDB",
  description: "Practice CRUD operations",
  status: "pending"
});
```

## Insert Many
```javascript
db.items.insertMany([
  { title: "Task 1", status: "pending" },
  { title: "Task 2", status: "completed" }
]);
```

---

# READ OPERATIONS

## Fetch All Documents
```javascript
db.items.find();
```

## Fetch with Condition
```javascript
db.items.find({ status: "pending" });
```

## Fetch Single Document
```javascript
db.items.findOne({ title: "Task 1" });
```

---

# UPDATE OPERATIONS

## Update One Document
```javascript
db.items.updateOne(
  { title: "Task 1" },
  { $set: { status: "completed" } }
);
```

## Update Multiple Documents
```javascript
db.items.updateMany(
  { status: "pending" },
  { $set: { priority: "high" } }
);
```

---

# DELETE OPERATIONS

## Delete One Document
```javascript
db.items.deleteOne({ title: "Task 2" });
```

## Delete Multiple Documents
```javascript
db.items.deleteMany({ status: "completed" });
```