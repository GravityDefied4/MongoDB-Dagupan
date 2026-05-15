from pymongo import MongoClient

# =========================================
# Step 1: Connect to MongoDB
# =========================================

uri = "mongodb://localhost:27017/"

# Create MongoDB client
client = MongoClient(uri)

# Test connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You have successfully connected to MongoDB!")
except Exception as e:
    print("Connection Error:")
    print(e)

# Access database and collection
db = client["bankDB"]
accounts = db["accounts"]


# =========================================
# Step 2: Insert Sample Data
# =========================================

# Clear old data first
accounts.delete_many({})

# Insert sample accounts
accounts.insert_many([
    {"_id": 1, "name": "Alice", "balance": 100},
    {"_id": 2, "name": "Bob", "balance": 50}
])

print("\nInitial Account Data:")
for account in accounts.find():
    print(account)


# =========================================
# Step 3: Successful Transaction
# =========================================

print("\n=== Successful Fund Transfer ===")

with client.start_session() as session:

    session.start_transaction()

    try:

        # Debit Alice
        accounts.update_one(
            {"_id": 1},
            {"$inc": {"balance": -30}},
            session=session
        )

        # Credit Bob
        accounts.update_one(
            {"_id": 2},
            {"$inc": {"balance": 30}},
            session=session
        )

        # Commit transaction
        session.commit_transaction()

        print("Transaction committed. Funds transferred successfully.")

    except Exception as e:

        # Rollback transaction
        session.abort_transaction()

        print("Transaction aborted.")
        print(e)


# =========================================
# Step 4: Verify Balances After Success
# =========================================

print("\nBalances After Successful Transfer:")

alice = accounts.find_one({"_id": 1})
bob = accounts.find_one({"_id": 2})

print(f"Alice's balance: {alice['balance']}")
print(f"Bob's balance: {bob['balance']}")


# =========================================
# Step 5: Simulate Failed Transaction
# =========================================

print("\n=== Failed Fund Transfer (Rollback Demo) ===")

with client.start_session() as session:

    session.start_transaction()

    try:

        # Debit Alice
        accounts.update_one(
            {"_id": 1},
            {"$inc": {"balance": -30}},
            session=session
        )

        # Simulate an error
        raise ValueError("Simulated error during transaction")

        # This will NOT execute
        accounts.update_one(
            {"_id": 2},
            {"$inc": {"balance": 30}},
            session=session
        )

        # Commit transaction
        session.commit_transaction()

        print("Transaction committed.")

    except Exception as e:

        # Rollback transaction
        session.abort_transaction()

        print("Transaction aborted. Funds transfer failed.")
        print(e)


# =========================================
# Step 6: Verify Final Balances
# =========================================

print("\nFinal Account Balances:")

alice = accounts.find_one({"_id": 1})
bob = accounts.find_one({"_id": 2})

print(f"Alice's balance: {alice['balance']}")
print(f"Bob's balance: {bob['balance']}")