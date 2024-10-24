# Node.js tabanlı bir görüntü kullanın
FROM node:16

# Çalışma dizinini ayarla
WORKDIR /app

# Paket dosyalarını kopyala
COPY package*.json ./

# Gerekli paketleri yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı başlat
CMD ["npm", "run", "dev"]
