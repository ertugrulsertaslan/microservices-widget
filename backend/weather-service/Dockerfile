# Node.js tabanlı bir imajdan başla
FROM node:16

# Çalışma dizinini ayarla
WORKDIR /usr/src/app

# Paket tanımlama dosyalarını kopyala
COPY package*.json ./

# Gerekli bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı çalıştır
CMD ["node", "index.js"]
