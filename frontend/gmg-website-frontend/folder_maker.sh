#!/bin/bash

# Navigate into your existing src folder
cd src

# Create app folder and files
mkdir -p app
touch app/store.ts
touch app/router.tsx

# Create assets folder
mkdir -p assets/images

# Create components and subfolders
mkdir -p components/Navbar
mkdir -p components/Footer
mkdir -p components/Button
mkdir -p components/PageLoader

# Create features and subfolders
mkdir -p features/auth
touch features/auth/authSlice.ts
touch features/auth/authAPI.ts
touch features/auth/AuthGuard.tsx

mkdir -p features/cart
mkdir -p features/products
mkdir -p features/orders
mkdir -p features/profile

# Create hooks folder and file
mkdir -p hooks
touch hooks/useSessionStorage.ts

# Create layouts folder and file
mkdir -p layouts
touch layouts/MainLayout.tsx

# Create pages and subfolders
mkdir -p pages/Home
mkdir -p pages/About
mkdir -p pages/Menu
mkdir -p pages/Contact
mkdir -p pages/NotFound

# Create services folder and file
mkdir -p services
touch services/httpClient.ts

# Create styles folder and files
mkdir -p styles
touch styles/main.css
touch styles/tailwind.config.ts

# Create types folder and file
mkdir -p types
touch types/index.d.ts

# Create utils folder and files
mkdir -p utils
touch utils/formatDate.ts
touch utils/constants.ts

# Create root App.tsx file if it doesn't exist
touch App.tsx

echo "✅ Project structure updated inside existing src/ folder!"
