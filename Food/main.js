// Создание коллекций Map для хранения поваров и их специализаций
const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

// Создание коллекций Map для хранения блюд и их поваров
const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Функция для обработки заказа
function placeOrder(clientName, orderedDishes) {
    let totalCost = 0;
    let estimatedTime = 0;

    orderedDishes.forEach(dish => {
        const price = parseInt(dish.split(' - ')[1]);
        const cookingTime = parseInt(dish.split(' - ')[2]);
        totalCost += price;
        estimatedTime += cookingTime;
    });

    alert(`Заказ от ${clientName} размещен на сумму ${totalCost} руб. Примерное время ожидания: ${estimatedTime} мин.`);
}

// Пример использования функции
// placeOrder('Алексей', ['Пицца "Пепперони" - 600 руб. - 20 мин.', 'Тирамису - 300 руб. - 5 мин.']);
