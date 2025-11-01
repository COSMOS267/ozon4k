
const productsDatabase = [
    {
        id: 1,
        article: "ART-001",
        name: "Смартфон Samsung Galaxy S23",
        price: 79990,
        category: "Электроника",
        stock: 15,
        description: "Флагманский смартфон с камерой 200 МП"
    },
    {
        id: 2,
        article: "ART-002",
        name: "Ноутбук ASUS ROG Strix",
        price: 129990,
        category: "Электроника",
        stock: 8,
        description: "Игровой ноутбук с RTX 4060"
    },
    {
        id: 3,
        article: "ART-003",
        name: "Наушники Sony WH-1000XM4",
        price: 29990,
        category: "Аксессуары",
        stock: 25,
        description: "Беспроводные наушники с шумоподавлением"
    },
    {
        id: 4,
        article: "ART-004",
        name: "Кроссовки Nike Air Max",
        price: 8990,
        category: "Одежда и обувь",
        stock: 42,
        description: "Спортивные кроссовки для бега"
    }
];

// Поиск товара
function searchProduct() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!searchTerm) {
        resultsDiv.innerHTML = '<div class="error">⚠️ Введите поисковый запрос</div>';
        return;
    }
    
    // Поиск по артикулу и названию
    const foundProducts = productsDatabase.filter(product => 
        product.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (foundProducts.length === 0) {
        resultsDiv.innerHTML = '<div class="error">❌ Товары не найдены</div>';
        return;
    }
    
    // Отображение результатов
    resultsDiv.innerHTML = foundProducts.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p><strong>Артикул:</strong> ${product.article}</p>
            <p><strong>Цена:</strong> ${product.price.toLocaleString()} руб.</p>
            <p><strong>Категория:</strong> ${product.category}</p>
            <p><strong>В наличии:</strong> ${product.stock} шт.</p>
            <p><strong>Описание:</strong> ${product.description}</p>
            <button onclick="fillBarcodeInput('${product.article}')" style="margin-top: 10px;">
                Использовать артикул для штрихкода
            </button>
        </div>
    `).join('');
}

// Генерация штрихкода
function generateBarcode() {
    const barcodeInput = document.getElementById('barcodeInput').value.trim();
    const barcodeType = document.getElementById('barcodeType').value;
    const barcodeSvg = document.getElementById('barcode');
    const barcodeText = document.getElementById('barcodeText');
    
    if (!barcodeInput) {
        barcodeText.innerHTML = '<div class="error">⚠️ Введите код для генерации штрихкода</div>';
        barcodeSvg.innerHTML = '';
        return;
    }
    
    try {
        // Генерация штрихкода с помощью библиотеки JsBarcode
        JsBarcode(barcodeSvg, barcodeInput, {
            format: barcodeType,
            width: 2,
            height: 100,
            displayValue: true,
            fontSize: 16,
            background: "transparent"
        });
        
        barcodeText.innerHTML = `<div class="success">✅ Штрихкод сгенерирован (${barcodeType})</div>`;
        barcodeText.innerHTML += `<div>Код: <strong>${barcodeInput}</strong></div>`;
        
    } catch (error) {
        barcodeText.innerHTML = `<div class="error">❌ Ошибка генерации: неверный формат для ${barcodeType}</div>`;
        barcodeSvg.innerHTML = '';
    }
}

// Заполнение поля штрихкода артикулом из найденного товара
function fillBarcodeInput(article) {
    document.getElementById('barcodeInput').value = article;
    generateBarcode(); // Автоматически генерируем штрихкод
}

// Обработка нажатия Enter в полях ввода
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchProduct();
});

document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') generateBarcode();
});

// Автогенерация демо-штрихкода при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('barcodeInput').value = 'ART-001';
    generateBarcode();
});