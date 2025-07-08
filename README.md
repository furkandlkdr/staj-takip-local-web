# Staj Günlük Raporlama Otomasyonu

Bu proje, staj süresince yapılan günlük aktiviteleri kolayca raporlayabilmek için geliştirilmiş bir web uygulamasıdır.

## 🎯 Özellikler

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

**Son güncelleme**: 8 Temmuz 2025  
**Versiyon**: 1.0.0
