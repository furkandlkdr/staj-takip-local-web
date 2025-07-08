// Staj Günlük Raporlama Uygulaması JavaScript Kodu

class StajRaporlama {
    constructor() {
        this.reports = this.loadReports();
        this.isPreviewMode = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setCurrentDate();
        this.renderReports();
        this.setupKeyboardShortcuts();
    }

    setupEventListeners() {
        // Form submit
        document.getElementById('reportForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveReport();
        });

        // Form temizle
        document.getElementById('clearForm').addEventListener('click', () => {
            this.clearForm();
        });

        // Toolbar butonları
        document.querySelectorAll('.toolbar-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleToolbarAction(action);
            });
        });

        // Textarea değişikliklerini dinle (gerçek zamanlı önizleme için)
        document.getElementById('reportContent').addEventListener('input', () => {
            if (this.isPreviewMode) {
                this.updatePreview();
            }
        });

        // Textarea boyut değişikliklerini dinle
        const textarea = document.getElementById('reportContent');
        const resizeObserver = new ResizeObserver(() => {
            if (this.isPreviewMode) {
                this.syncPreviewHeight();
            }
        });
        resizeObserver.observe(textarea);
    }

    setCurrentDate() {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        document.getElementById('reportDate').value = formattedDate;
    }

    setupKeyboardShortcuts() {
        document.getElementById('reportContent').addEventListener('keydown', (e) => {
            if (e.ctrlKey) {
                switch (e.key) {
                    case 'b':
                        e.preventDefault();
                        this.applyMarkdownFormat('bold');
                        break;
                    case 'i':
                        e.preventDefault();
                        this.applyMarkdownFormat('italic');
                        break;
                    case 'k':
                        e.preventDefault();
                        this.applyMarkdownFormat('link');
                        break;
                }
            }
        });
    }

    handleToolbarAction(action) {
        const previewBtn = document.querySelector('[data-action="preview"]');
        
        if (action === 'preview') {
            this.togglePreview();
            previewBtn.classList.toggle('active');
        } else {
            this.applyMarkdownFormat(action);
        }
    }

    applyMarkdownFormat(format) {
        const textarea = document.getElementById('reportContent');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        let formattedText = '';
        let cursorOffset = 0;

        switch (format) {
            case 'bold':
                formattedText = `**${selectedText || 'kalın metin'}**`;
                cursorOffset = selectedText ? 0 : -2;
                break;
            case 'italic':
                formattedText = `*${selectedText || 'italik metin'}*`;
                cursorOffset = selectedText ? 0 : -1;
                break;
            case 'heading':
                formattedText = `## ${selectedText || 'Başlık'}`;
                cursorOffset = selectedText ? 0 : 0;
                break;
            case 'list':
                const lines = (selectedText || 'Liste öğesi').split('\n');
                formattedText = lines.map(line => `- ${line}`).join('\n');
                break;
            case 'code':
                if (selectedText.includes('\n')) {
                    formattedText = `\`\`\`\n${selectedText || 'kod bloğu'}\n\`\`\``;
                } else {
                    formattedText = `\`${selectedText || 'kod'}\``;
                    cursorOffset = selectedText ? 0 : -1;
                }
                break;
            case 'link':
                const url = prompt('Link URL\'si girin:', 'https://');
                if (url) {
                    formattedText = `[${selectedText || 'link metni'}](${url})`;
                } else {
                    return;
                }
                break;
            default:
                return;
        }

        const beforeText = textarea.value.substring(0, start);
        const afterText = textarea.value.substring(end);
        
        textarea.value = beforeText + formattedText + afterText;
        
        const newCursorPos = start + formattedText.length + cursorOffset;
        textarea.focus();
        textarea.setSelectionRange(newCursorPos, newCursorPos);

        if (this.isPreviewMode) {
            this.updatePreview();
        }
    }

    togglePreview() {
        const textarea = document.getElementById('reportContent');
        const preview = document.getElementById('preview');
        
        this.isPreviewMode = !this.isPreviewMode;
        
        if (this.isPreviewMode) {
            preview.style.display = 'block';
            textarea.style.width = '50%';
            this.updatePreview();
            this.syncPreviewHeight();
        } else {
            preview.style.display = 'none';
            textarea.style.width = '100%';
        }
    }

    syncPreviewHeight() {
        const textarea = document.getElementById('reportContent');
        const preview = document.getElementById('preview');
        
        if (this.isPreviewMode) {
            // Textarea'nın yüksekliğini önizleme paneline uygula
            const textareaHeight = textarea.offsetHeight;
            preview.style.height = textareaHeight + 'px';
        }
    }

    updatePreview() {
        const content = document.getElementById('reportContent').value;
        const preview = document.getElementById('preview');
        preview.innerHTML = marked.parse(content);
    }

    generateFileName(date, title) {
        // Tarihi DD_MM_YY formatına çevir
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = String(dateObj.getFullYear()).slice(-2);
        
        // Başlığı dosya adı için uygun hale getir
        const sanitizedTitle = title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Özel karakterleri kaldır
            .replace(/\s+/g, '_') // Boşlukları alt çizgi ile değiştir
            .substring(0, 30); // Maksimum 30 karakter
        
        return `${day}_${month}_${year}_${sanitizedTitle}.md`;
    }

    generateMarkdownContent(title, content, date) {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return `# ${title}

**Tarih:** ${formattedDate}  
**Oluşturulma:** ${new Date().toLocaleString('tr-TR')}

---

${content}

---

*Bu rapor Staj Günlük Raporlama Uygulaması ile oluşturulmuştur.*`;
    }

    async saveReport() {
        const date = document.getElementById('reportDate').value;
        const title = document.getElementById('reportTitle').value.trim();
        const content = document.getElementById('reportContent').value.trim();

        if (!date || !title || !content) {
            this.showNotification('Lütfen tüm alanları doldurun!', 'error');
            return;
        }

        try {
            const fileName = this.generateFileName(date, title);
            const markdownContent = this.generateMarkdownContent(title, content, date);
            
            // Raporu kaydet
            const report = {
                id: Date.now(),
                date,
                title,
                content,
                fileName,
                markdownContent,
                createdAt: new Date().toISOString()
            };

            this.reports.unshift(report);
            this.saveReports();
            this.renderReports();

            // Dosyayı indir
            this.downloadFile(markdownContent, fileName);
            
            this.showNotification('Rapor başarıyla kaydedildi!', 'success');
            this.clearForm();

        } catch (error) {
            console.error('Rapor kaydetme hatası:', error);
            this.showNotification('Rapor kaydedilirken bir hata oluştu!', 'error');
        }
    }

    downloadFile(content, fileName) {
        const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    clearForm() {
        document.getElementById('reportTitle').value = '';
        document.getElementById('reportContent').value = '';
        this.setCurrentDate();
        
        // Önizleme modundaysa kapat
        if (this.isPreviewMode) {
            document.querySelector('[data-action="preview"]').click();
        }

        this.showNotification('Form temizlendi', 'success');
    }

    renderReports() {
        const reportsList = document.getElementById('reportsList');
        
        if (this.reports.length === 0) {
            reportsList.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--gray-500);">
                    <i class="fas fa-file-alt" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    <p>Henüz hiç rapor oluşturulmamış.</p>
                    <p>İlk raporunuzu oluşturmak için yukarıdaki formu kullanın.</p>
                </div>
            `;
            return;
        }

        reportsList.innerHTML = this.reports.map(report => `
            <div class="report-item" data-id="${report.id}">
                <div class="report-item-header">
                    <div class="report-item-title">${report.title}</div>
                    <div class="report-item-date">${new Date(report.date).toLocaleDateString('tr-TR')}</div>
                </div>
                <div class="report-item-content" style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">
                    ${report.content.substring(0, 100)}${report.content.length > 100 ? '...' : ''}
                </div>
                <div class="report-item-actions">
                    <button class="btn btn-success btn-small" onclick="app.downloadReport(${report.id})">
                        <i class="fas fa-download"></i> İndir
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="app.viewReport(${report.id})">
                        <i class="fas fa-eye"></i> Görüntüle
                    </button>
                    <button class="btn btn-danger btn-small" onclick="app.deleteReport(${report.id})">
                        <i class="fas fa-trash"></i> Sil
                    </button>
                </div>
            </div>
        `).join('');
    }

    downloadReport(id) {
        const report = this.reports.find(r => r.id === id);
        if (report) {
            this.downloadFile(report.markdownContent, report.fileName);
            this.showNotification('Rapor indirildi!', 'success');
        }
    }

    viewReport(id) {
        const report = this.reports.find(r => r.id === id);
        if (report) {
            // Raporu formu doldur (düzenleme modu)
            document.getElementById('reportDate').value = report.date;
            document.getElementById('reportTitle').value = report.title;
            document.getElementById('reportContent').value = report.content;
            
            // Sayfanın üstüne scroll
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            this.showNotification('Rapor düzenleme için yüklendi', 'success');
        }
    }

    deleteReport(id) {
        if (confirm('Bu raporu silmek istediğinizden emin misiniz?')) {
            this.reports = this.reports.filter(r => r.id !== id);
            this.saveReports();
            this.renderReports();
            this.showNotification('Rapor silindi!', 'success');
        }
    }

    loadReports() {
        try {
            const saved = localStorage.getItem('staj-raporlari');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Raporlar yüklenirken hata:', error);
            return [];
        }
    }

    saveReports() {
        try {
            localStorage.setItem('staj-raporlari', JSON.stringify(this.reports));
        } catch (error) {
            console.error('Raporlar kaydedilirken hata:', error);
            this.showNotification('Raporlar kaydedilirken bir hata oluştu!', 'error');
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Utility: Raporları JSON olarak dışa aktar
    exportReports() {
        const dataStr = JSON.stringify(this.reports, null, 2);
        this.downloadFile(dataStr, `staj-raporlari-${new Date().toISOString().split('T')[0]}.json`);
        this.showNotification('Raporlar JSON formatında dışa aktarıldı!', 'success');
    }

    // Utility: Tüm raporları tek dosyada birleştir
    exportAllReportsAsOne() {
        if (this.reports.length === 0) {
            this.showNotification('Dışa aktarılacak rapor bulunamadı!', 'warning');
            return;
        }

        const combinedContent = `# Staj Raporları Koleksiyonu

Bu dosya ${this.reports.length} adet staj raporunu içermektedir.

---

${this.reports.map(report => `
## ${report.title}
**Tarih:** ${new Date(report.date).toLocaleDateString('tr-TR')}

${report.content}

---
`).join('\n')}

*Bu koleksiyon Staj Günlük Raporlama Uygulaması ile oluşturulmuştur.*`;

        const fileName = `staj-raporlari-tumu-${new Date().toISOString().split('T')[0]}.md`;
        this.downloadFile(combinedContent, fileName);
        this.showNotification('Tüm raporlar tek dosyada birleştirildi!', 'success');
    }
}

// Uygulama başlat
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new StajRaporlama();
    
    // Geliştirici araçları (konsol komutları)
    window.stajApp = {
        exportAll: () => app.exportAllReportsAsOne(),
        exportJSON: () => app.exportReports(),
        clearAll: () => {
            if (confirm('TÜM raporları silmek istediğinizden emin misiniz? Bu işlem geri alınamaz!')) {
                localStorage.removeItem('staj-raporlari');
                app.reports = [];
                app.renderReports();
                app.showNotification('Tüm raporlar silindi!', 'warning');
            }
        },
        stats: () => {
            const stats = {
                totalReports: app.reports.length,
                totalWords: app.reports.reduce((acc, report) => acc + report.content.split(' ').length, 0),
                dateRange: app.reports.length > 0 ? {
                    first: new Date(Math.min(...app.reports.map(r => new Date(r.date)))).toLocaleDateString('tr-TR'),
                    last: new Date(Math.max(...app.reports.map(r => new Date(r.date)))).toLocaleDateString('tr-TR')
                } : null
            };
            console.table(stats);
            return stats;
        }
    };
    
    console.log('🎉 Staj Günlük Raporlama Uygulaması başlatıldı!');
    console.log('💡 Konsol komutları: stajApp.exportAll(), stajApp.exportJSON(), stajApp.clearAll(), stajApp.stats()');
});
