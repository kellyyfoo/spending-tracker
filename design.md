# Spending Tracker: Project Design

## Database Schema Design
```
users (
  id: INTEGER {PK, U, Not, AI},
  email: TEXT {U, Not},
  password: TEXT {Not},
  name: TEXG {Not}
)

categories (
  id: INTEGER {PK, U, Not, AI},
  name: TEXT {U, Not}
)

spending (
  id: INTEGER {PK, U, Not, AI},
  amount: REAL {Not},
  date: TEXT {Not}
)

user_categories (
  id: INTEGER {PK, U, Not, AI},
  user_id: INTEGER {Not},
  category_id: INTEGER {Not}
)

spending_categories (
  id: INTEGER {PK, U, Not, AI},
  spending_id: INTEGER {Not},
  category_id: INTEGER {Not}
)
```