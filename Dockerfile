FROM node:20-alpine

WORKDIR /app

# Salin package.json & package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin sisa kode frontend
COPY . .

# Buka port default Vite (biasanya 5173)
EXPOSE 5173

# Jalankan Vite agar bisa diakses dari luar container (--host wajib ditambahkan untuk Vite di Docker)
CMD ["npm", "run", "dev", "--", "--host"]