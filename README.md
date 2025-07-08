# Staj Günlük Raporlama Otomasyonu / Internship Daily Reporting Automation

## 📖 Descriptions / Açıklamalar

**[🇹🇷 Türkçe](#tr---türkçe-açıklama)** | **[🇬🇧 English](#en---english-description)**

---

## [TR] - Türkçe Açıklama

Bu proje, staj süresince yapılan günlük aktiviteleri kolayca raporlayabilmek için geliştirilmiş bir web uygulamasıdır.

### 🎯 Özellikler

### ✨ Temel Özellikler
- **Kullanıcı Dostu Arayüz**: Modern ve responsive tasarım
- **Otomatik Tarihleme**: Güncel tarih otomatik olarak seçilir
- **Geçmişe Dönük Girdi**: İstediğiniz tarihe rapor ekleyebilirsiniz
- **Markdown Desteği**: Zengin metin formatlaması
- **Gerçek Zamanlı Önizleme**: Yazdığınız metni anlık olarak görün
- **Klavye Kısayolları**: Hızlı formatlamalar için

### 📝 Markdown Editör Özellikleri
- **Kalın Yazı** (`Ctrl+B` veya **B** butonu)
- **İtalik Yazı** (`Ctrl+I` veya *I* butonu)
- **Başlık Formatlaması** (## butonu)
- **Liste Oluşturma** (liste butonu)
- **Kod Blokları** (kod butonu)
- **Link Ekleme** (`Ctrl+K` veya link butonu)
- **Canlı Önizleme** (göz butonu)

### 💾 Dosya Yönetimi
- **Otomatik Dosya Adlandırma**: `GG_AA_YY_baslik.md` formatında
- **Otomatik İndirme**: Raporlar otomatik olarak bilgisayarınıza indirilir
- **Lokal Saklama**: Tarayıcı üzerinde raporlarınız saklanır
- **Çoklu Dışa Aktarma**: Tek tek veya toplu dışa aktarma

## 🚀 Kurulum ve Kullanım

### Hızlı Başlangıç
1. `index.html` dosyasını herhangi bir web tarayıcısında açın
2. Tarih, başlık ve içerik alanlarını doldurun
3. "Raporu Kaydet" butonuna tıklayın
4. Dosya otomatik olarak indirilecektir

### Dosya Yapısı
```
📁 Staj Takip/
├── 📄 index.html          # Ana uygulama dosyası
├── 📄 styles.css          # Stil dosyası
├── 📄 script.js           # JavaScript logic
├── 📄 README.md           # Bu dosya
└── 📁 reports/            # İndirilen raporlar için (isteğe bağlı)
```

## 📋 Kullanım Kılavuzu

### 1. Yeni Rapor Oluşturma
1. **Tarih Seçin**: Varsayılan olarak bugünün tarihi seçilidir
2. **Başlık Girin**: Rapor için açıklayıcı bir başlık yazın
3. **İçerik Yazın**: Markdown formatında günlük aktivitelerinizi yazın
4. **Kaydet**: "Raporu Kaydet" butonuna tıklayın

### 2. Markdown Kullanımı
```markdown
## Bugün Yapılan İşler
- **Önemli**: Proje dokümantasyonu tamamlandı
- *Not*: Kod review yapıldı
- `bug fix` işlemleri gerçekleştirildi

### Öğrenilenler
> Bu gün yeni framework öğrendim

```python
def hello():
    print("Hello World!")
```
```

### 3. Raporları Yönetme
- **Görüntüle**: Mevcut raporları sağ panelde görün
- **İndir**: Herhangi bir raporu tekrar indirin
- **Düzenle**: Raporu forma yükleyerek düzenleyin
- **Sil**: İstemediğiniz raporları silin

## ⌨️ Klavye Kısayolları

| Kısayol | Açıklama |
|---------|----------|
| `Ctrl+B` | Kalın yazı |
| `Ctrl+I` | İtalik yazı |
| `Ctrl+K` | Link ekle |

## 🔧 Gelişmiş Özellikler

### Konsol Komutları
Tarayıcının geliştirici konsolunu açıp (`F12`) aşağıdaki komutları kullanabilirsiniz:

```javascript
// Tüm raporları tek dosyada birleştir
stajApp.exportAll()

// Raporları JSON formatında dışa aktar
stajApp.exportJSON()

// İstatistikleri görüntüle
stajApp.stats()

// Tüm raporları sil (DİKKATLİ KULLANIN!)
stajApp.clearAll()
```

### Dosya Formatı
Her rapor aşağıdaki formatta kaydedilir:

```markdown
# Rapor Başlığı

**Tarih:** 8 Temmuz 2025  
**Oluşturulma:** 08.07.2025 14:30:25

---

Rapor içeriği buraya gelir...

---

*Bu rapor Staj Günlük Raporlama Uygulaması ile oluşturulmuştur.*
```

## 🎨 Özelleştirme

### Stil Değişiklikleri
`styles.css` dosyasındaki CSS değişkenlerini düzenleyerek renkleri değiştirebilirsiniz:

```css
:root {
    --primary-color: #2563eb;    /* Ana renk */
    --success-color: #10b981;    /* Başarı rengi */
    --danger-color: #ef4444;     /* Hata rengi */
}
```

## 📱 Responsive Tasarım

Uygulama tüm cihazlarda optimum performans için tasarlanmıştır:
- **Masaüstü**: Tam özellikli deneyim
- **Tablet**: Uyumlu layout
- **Mobil**: Dokunmatik optimize edilmiş arayüz

## 🔒 Veri Güvenliği

- Tüm veriler tarayıcınızın local storage'ında saklanır
- Hiçbir veri internete gönderilmez
- Veriler sadece sizin bilgisayarınızda kalır
- İsteğe bağlı olarak verileri JSON formatında yedekleyebilirsiniz

## 🛠️ Teknik Detaylar

### Kullanılan Teknolojiler
- **HTML5**: Semantik markup
- **CSS3**: Modern styling ve responsive design
- **Vanilla JavaScript**: Hafif ve hızlı
- **Marked.js**: Markdown parsing
- **Font Awesome**: İkonlar
- **Local Storage**: Veri saklama

### Tarayıcı Desteği
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📞 Destek

Herhangi bir sorun yaşarsanız veya öneriniz varsa:
- Tarayıcının konsol çıktılarını kontrol edin
- `F12` ile geliştirici araçlarını açıp hataları inceleyin
- Tarayıcınızın güncel olduğundan emin olun

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir ve serbest kullanım için sunulmaktadır.

---

## [EN] - English Description

This project is a web application developed to easily report daily activities during internship period.

### 🎯 Features

#### ✨ Core Features
- **User-Friendly Interface**: Modern and responsive design
- **Automatic Dating**: Current date is automatically selected
- **Historical Entry**: You can add reports for past dates
- **Markdown Support**: Rich text formatting
- **Real-Time Preview**: See your text instantly as you type
- **Keyboard Shortcuts**: For quick formatting

#### 📝 Markdown Editor Features
- **Bold Text** (`Ctrl+B` or **B** button)
- **Italic Text** (`Ctrl+I` or *I* button)
- **Header Formatting** (## button)
- **List Creation** (list button)
- **Code Blocks** (code button)
- **Link Addition** (`Ctrl+K` or link button)
- **Live Preview** (eye button)

#### 💾 File Management
- **Automatic File Naming**: In `DD_MM_YY_title.md` format
- **Automatic Download**: Reports are automatically downloaded to your computer
- **Local Storage**: Your reports are stored in the browser
- **Multiple Export Options**: Individual or bulk export

### 🚀 Installation and Usage

#### Quick Start
1. Open the `index.html` file in any web browser
2. Fill in the date, title, and content fields
3. Click the "Save Report" button
4. The file will be automatically downloaded

#### File Structure
```
📁 Staj Takip/
├── 📄 index.html          # Main application file
├── 📄 styles.css          # Style file
├── 📄 script.js           # JavaScript logic
├── 📄 README.md           # This file
└── 📁 reports/            # For downloaded reports (optional)
```

### 📋 Usage Guide

#### 1. Creating a New Report
1. **Select Date**: Today's date is selected by default
2. **Enter Title**: Write a descriptive title for the report
3. **Write Content**: Write your daily activities in Markdown format
4. **Save**: Click the "Save Report" button

#### 2. Using Markdown
```markdown
## Today's Tasks
- **Important**: Project documentation completed
- *Note*: Code review conducted
- `bug fix` operations completed

### Learnings
> Learned a new framework today

```python
def hello():
    print("Hello World!")
```
```

#### 3. Managing Reports
- **View**: See existing reports in the right panel
- **Download**: Re-download any report
- **Edit**: Load the report into the form for editing
- **Delete**: Remove unwanted reports

### ⌨️ Keyboard Shortcuts

| Shortcut | Description |
|----------|-------------|
| `Ctrl+B` | Bold text |
| `Ctrl+I` | Italic text |
| `Ctrl+K` | Add link |

### 🔧 Advanced Features

#### Console Commands
You can use the following commands by opening the browser's developer console (`F12`):

```javascript
// Combine all reports into one file
stajApp.exportAll()

// Export reports in JSON format
stajApp.exportJSON()

// Display statistics
stajApp.stats()

// Delete all reports (USE CAREFULLY!)
stajApp.clearAll()
```

#### File Format
Each report is saved in the following format:

```markdown
# Report Title

**Date:** July 8, 2025  
**Created:** 08.07.2025 14:30:25

---

Report content goes here...

---

*This report was created with the Internship Daily Reporting Application.*
```

### 🎨 Customization

#### Style Changes
You can change colors by editing CSS variables in the `styles.css` file:

```css
:root {
    --primary-color: #2563eb;    /* Primary color */
    --success-color: #10b981;    /* Success color */
    --danger-color: #ef4444;     /* Danger color */
}
```

### 📱 Responsive Design

The application is designed for optimal performance on all devices:
- **Desktop**: Full-featured experience
- **Tablet**: Compatible layout
- **Mobile**: Touch-optimized interface

### 🔒 Data Security

- All data is stored in your browser's local storage
- No data is sent to the internet
- Data remains only on your computer
- You can optionally backup data in JSON format

### 🛠️ Technical Details

#### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling and responsive design
- **Vanilla JavaScript**: Lightweight and fast
- **Marked.js**: Markdown parsing
- **Font Awesome**: Icons
- **Local Storage**: Data storage

#### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### 📞 Support

If you experience any issues or have suggestions:
- Check the browser console outputs
- Open developer tools with `F12` and examine errors
- Make sure your browser is up to date

### 📄 License

This project is developed for educational purposes and is provided for free use.
